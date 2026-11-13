/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — MOTOR DE BASE DE DATOS ADMINISTRATIVA (AdminDB)
 * Gestión unificada y persistente de Clientes, Saldos de Tarjetas,
 * Ventas/Pedidos, Inventario y Stock de Productos en tiempo real.
 * ==========================================================================
 */

(function (window) {
  'use strict';

  // Storage Keys unificadas con la tienda
  const KEYS = {
    USERS: 'davanti_users',
    CARDS_BY_USER: 'callejon_cards_by_user',
    LEGACY_CARD: 'callejon_card_data',
    ORDERS_GLOBAL: 'callejon_user_orders',
    STOCK: 'callejon_stock_db',
    CUSTOM_PRODUCTS: 'callejon_custom_products',
    DELETED_PRODUCTS: 'callejon_deleted_products'
  };

  const AdminDB = {
    // =========================================================================
    // 1. CLIENTES & USUARIOS
    // =========================================================================
    getUsers() {
      try {
        let users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
        if (!users.length) {
          // Usuario demo inicial
          users = [{
            id: 'usr_demo_1',
            fullName: 'Carlos Mendoza',
            email: 'carlos@callejonmagico.com',
            username: 'davanti_orion99',
            phone: '55 9876 5432',
            role: 'customer',
            createdAt: '2026-10-15T12:00:00.000Z'
          }];
          localStorage.setItem(KEYS.USERS, JSON.stringify(users));
        }

        // Enriquecer cada usuario con su saldo de tarjeta actual y total de compras
        const allCards = this.getAllCards();
        const allOrders = this.getAllOrders();

        return users.map((user, idx) => {
          const emailKey = (user.email || '').trim().toLowerCase();
          const card = allCards[emailKey] || allCards[user.id] || null;
          const userOrders = allOrders.filter(o => (o.userEmail || '').trim().toLowerCase() === emailKey || o.userId === user.id);
          const totalSpent = userOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);

          const creditLimit = card ? (Number(card.creditLimit) || 60000) : 60000;
          const balance = card ? (Number(card.balance) || 0) : 0;
          const debt = card && typeof card.debt === 'number'
            ? Math.max(0, Number(card.debt))
            : Math.max(0, creditLimit - balance);
          const daysOverdue = card && typeof card.daysOverdue === 'number'
            ? Math.max(0, parseInt(card.daysOverdue, 10) || 0)
            : Math.max(0, parseInt(user.daysOverdue, 10) || 0);

          let creditStatus = 'al-corriente';
          let creditStatusLabel = 'Al corriente';
          if (daysOverdue >= 30) {
            creditStatus = 'vencida-30';
            creditStatusLabel = 'Vencida +30';
          } else if (daysOverdue > 0) {
            creditStatus = 'vencida';
            creditStatusLabel = 'Vencida';
          }

          // Generar código CL-XXXXX determinístico si no tiene uno
          let hash = 0;
          const seedStr = emailKey || String(user.id || idx);
          for (let i = 0; i < seedStr.length; i++) {
            hash = ((hash << 5) - hash) + seedStr.charCodeAt(i);
            hash |= 0;
          }
          const clientCode = user.clientCode || ('CL-' + String(10000 + (Math.abs(hash) % 89999)));

          // Resolver teléfono: perfil de cuenta o número registrado en compras (WhatsApp)
          let userPhone = (user.phone && user.phone.trim() && user.phone !== 'No registrado') ? user.phone.trim() : '';
          if (!userPhone && userOrders.length > 0) {
            const orderWithPhone = userOrders.find(o => o.recipient && o.recipient.phone && o.recipient.phone.trim());
            if (orderWithPhone) {
              userPhone = orderWithPhone.recipient.phone.trim();
              user.phone = userPhone;
              if (window.CallejonFirebase && typeof window.CallejonFirebase.syncUser === 'function') {
                window.CallejonFirebase.syncUser(user);
              }
            }
          }

          return {
            ...user,
            phone: userPhone || 'No registrado',
            clientCode,
            balance,
            debt,
            points: card ? (Number(card.points) || 0) : 0,
            creditLimit,
            daysOverdue,
            creditStatus,
            creditStatusLabel,
            cardNumber: card && card.cardNumber ? card.cardNumber : '4152 •••• •••• 8842',
            transactions: card && Array.isArray(card.transactions) ? card.transactions : [],
            cardActive: card ? Boolean(card.isActive !== false) : false,
            ordersCount: userOrders.length,
            totalSpent: totalSpent
          };
        });
      } catch (e) {
        console.error('AdminDB: Error al cargar usuarios:', e);
        return [];
      }
    },

    saveUser(userData) {
      try {
        const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
        const existingIdx = users.findIndex(u => u.id === userData.id || u.email.toLowerCase() === userData.email.toLowerCase());

        if (existingIdx !== -1) {
          users[existingIdx] = { ...users[existingIdx], ...userData };
        } else {
          userData.id = userData.id || 'usr_' + Date.now();
          userData.createdAt = userData.createdAt || new Date().toISOString();
          users.push(userData);
        }

        localStorage.setItem(KEYS.USERS, JSON.stringify(users));

        // Sincronizar con Firebase en la nube
        if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.syncUser === 'function') {
          window.CallejonFirebase.syncUser(userData);
        }

        // Inicializar o actualizar tarjeta para el usuario si se proporcionó saldo
        if (typeof userData.balance !== 'undefined') {
          this.updateUserBalance(userData.email, Number(userData.balance), 'Inicialización / Modificación en Panel Admin', 0);
        }

        this.notifyChange('users');
        return userData;
      } catch (e) {
        console.error('AdminDB: Error al guardar usuario:', e);
        return null;
      }
    },

    deleteUser(userId) {
      try {
        let users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
        users = users.filter(u => u.id !== userId);
        localStorage.setItem(KEYS.USERS, JSON.stringify(users));

        // Sincronizar eliminación con Firebase
        if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.deleteUser === 'function') {
          window.CallejonFirebase.deleteUser(userId);
        }

        this.notifyChange('users');
        return true;
      } catch (e) {
        console.error('AdminDB: Error al eliminar usuario:', e);
        return false;
      }
    },

    // =========================================================================
    // 2. SALDOS & TARJETA CALLEJÓN MÁGICO
    // =========================================================================
    getAllCards() {
      try {
        return JSON.parse(localStorage.getItem(KEYS.CARDS_BY_USER) || '{}');
      } catch (e) {
        return {};
      }
    },

    updateUserBalance(userEmail, newBalance, reason = 'Ajuste de Saldo por Administrador', changeAmount = 0) {
      try {
        const emailKey = (userEmail || '').trim().toLowerCase();
        const allCards = this.getAllCards();
        const card = allCards[emailKey] || {
          cardNumber: '4152 ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000),
          tier: 'ORO DEPARTAMENTAL',
          creditLimit: 60000,
          balance: 0,
          points: 0,
          statementDay: 15,
          isActive: true,
          transactions: []
        };

        const oldBalance = Number(card.balance) || 0;
        card.balance = Math.max(0, Number(newBalance));
        card.transactions = card.transactions || [];

        card.transactions.unshift({
          id: 'tx-adm-' + Date.now(),
          concept: reason,
          amount: changeAmount !== 0 ? changeAmount : (card.balance - oldBalance),
          pointsEarned: 0,
          date: new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
          msi: 1
        });

        allCards[emailKey] = card;
        localStorage.setItem(KEYS.CARDS_BY_USER, JSON.stringify(allCards));

        // Sincronizar tarjeta con Firebase
        if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.syncCard === 'function') {
          window.CallejonFirebase.syncCard(emailKey, card);
        }

        // Si es el usuario demo activo o el usuario en sesión actual, sincronizar
        try {
          const current = JSON.parse(localStorage.getItem('davanti_current_user') || 'null');
          if (current && (current.email || '').toLowerCase() === emailKey) {
            localStorage.setItem(KEYS.LEGACY_CARD, JSON.stringify(card));
          }
        } catch (e) {}

        this.notifyChange('balance');
        return card;
      } catch (e) {
        console.error('AdminDB: Error al actualizar saldo:', e);
        return null;
      }
    },

    updateCreditAccount(userEmail, { creditLimit, daysOverdue, resetOverdueOnPay } = {}) {
      try {
        const emailKey = (userEmail || '').trim().toLowerCase();
        const allCards = this.getAllCards();
        const card = allCards[emailKey] || {
          cardNumber: '4152 ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000),
          tier: 'ORO DEPARTAMENTAL',
          creditLimit: 60000,
          balance: 60000,
          points: 500,
          statementDay: 15,
          daysOverdue: 0,
          isActive: true,
          transactions: []
        };

        if (typeof creditLimit === 'number' && creditLimit > 0) {
          card.creditLimit = creditLimit;
          if (card.balance > creditLimit) {
            card.balance = creditLimit;
          }
        }
        if (typeof daysOverdue === 'number' && daysOverdue >= 0) {
          card.daysOverdue = Math.floor(daysOverdue);
        }
        if (resetOverdueOnPay) {
          card.daysOverdue = 0;
        }

        allCards[emailKey] = card;
        localStorage.setItem(KEYS.CARDS_BY_USER, JSON.stringify(allCards));

        // Sincronizar tarjeta con Firebase
        if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.syncCard === 'function') {
          window.CallejonFirebase.syncCard(emailKey, card);
        }

        try {
          const current = JSON.parse(localStorage.getItem('davanti_current_user') || 'null');
          if (current && (current.email || '').toLowerCase() === emailKey) {
            localStorage.setItem(KEYS.LEGACY_CARD, JSON.stringify(card));
          }
        } catch (e) {}

        this.notifyChange('balance');
        return card;
      } catch (e) {
        console.error('AdminDB: Error al actualizar cuenta de crédito:', e);
        return null;
      }
    },

    // =========================================================================
    // 3. VENTAS & PEDIDOS
    // =========================================================================
    getAllOrders() {
      try {
        const ordersMap = new Map();

        // 1. Cargar desde la clave global callejon_user_orders
        const globalOrders = JSON.parse(localStorage.getItem(KEYS.ORDERS_GLOBAL) || '[]');
        globalOrders.forEach(o => {
          if (o && o.orderNum) ordersMap.set(o.orderNum, o);
        });

        // 2. Escanear claves aisladas por usuario (callejon_orders_email)
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('callejon_orders_')) {
            try {
              const userOrders = JSON.parse(localStorage.getItem(key) || '[]');
              if (Array.isArray(userOrders)) {
                userOrders.forEach(o => {
                  if (o && o.orderNum && !ordersMap.has(o.orderNum)) {
                    ordersMap.set(o.orderNum, o);
                  }
                });
              }
            } catch (err) {}
          }
        }

        // Filtrar pedidos reales (excluir pedido de demostración estático si existe)
        const orders = Array.from(ordersMap.values()).filter(o => o && o.orderNum && o.orderNum !== 'CLM-784210');

        // Ordenar por timestamp descendente
        return orders.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      } catch (e) {
        console.error('AdminDB: Error al cargar pedidos:', e);
        return [];
      }
    },

    updateOrderStatus(orderNum, newStatus, newStatusText) {
      try {
        const orders = this.getAllOrders();
        const order = orders.find(o => o.orderNum === orderNum);
        if (!order) return null;

        order.status = newStatus;
        if (newStatusText) order.statusText = newStatusText;

        // Guardar en la clave global
        localStorage.setItem(KEYS.ORDERS_GLOBAL, JSON.stringify(orders));

        // Sincronizar pedido con Firebase
        if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.syncOrder === 'function') {
          window.CallejonFirebase.syncOrder(order);
        }

        // Sincronizar en la clave aislada del usuario
        if (order.userEmail) {
          const userKey = 'callejon_orders_' + order.userEmail.trim().toLowerCase();
          const userOrders = JSON.parse(localStorage.getItem(userKey) || '[]');
          const uIdx = userOrders.findIndex(o => o.orderNum === orderNum);
          if (uIdx !== -1) {
            userOrders[uIdx] = { ...userOrders[uIdx], status: newStatus, statusText: order.statusText };
            localStorage.setItem(userKey, JSON.stringify(userOrders));
          }
        }

        this.notifyChange('orders');
        return order;
      } catch (e) {
        console.error('AdminDB: Error al actualizar estatus de pedido:', e);
        return null;
      }
    },

    deleteOrder(orderNum) {
      try {
        let orders = this.getAllOrders().filter(o => o.orderNum !== orderNum);
        localStorage.setItem(KEYS.ORDERS_GLOBAL, JSON.stringify(orders));
        this.notifyChange('orders');
        return true;
      } catch (e) {
        return false;
      }
    },

    // =========================================================================
    // 4. INVENTARIO & STOCK ("CUÁNTOS PRODUCTOS QUEDAN")
    // =========================================================================
    getCatalogSource() {
      if (typeof window !== 'undefined' && Array.isArray(window.PRODUCTS_DATA) && window.PRODUCTS_DATA.length > 0) {
        return window.PRODUCTS_DATA;
      }
      if (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA) && PRODUCTS_DATA.length > 0) {
        if (typeof window !== 'undefined') window.PRODUCTS_DATA = PRODUCTS_DATA;
        return PRODUCTS_DATA;
      }
      return [];
    },

    getStockMap() {
      try {
        let stockMap = {};
        const raw = localStorage.getItem(KEYS.STOCK);
        if (raw) {
          try { stockMap = JSON.parse(raw) || {}; } catch (e) { stockMap = {}; }
        }

        const catalog = this.getCatalogSource();
        let changed = false;

        // Garantizar que todos los productos de las 3 carpetas tengan stock inicial asignado
        catalog.forEach((p, idx) => {
          if (typeof stockMap[p.id] === 'undefined' || stockMap[p.id] === null) {
            changed = true;
            // Distribuir stock realista:
            // Cada 25 productos, 1 está agotado (0) para demostración
            // Cada 9 productos, 1 tiene stock bajo (2 a 4) para probar alertas
            if (idx % 25 === 24) {
              stockMap[p.id] = 0;
            } else if (idx % 9 === 4) {
              stockMap[p.id] = 2 + (idx % 3);
            } else if (p.price > 10000) {
              stockMap[p.id] = 6 + (idx % 6);
            } else if (p.price > 4000) {
              stockMap[p.id] = 12 + (idx % 10);
            } else if (p.category === 'ropa') {
              stockMap[p.id] = 24 + (idx % 20);
            } else {
              stockMap[p.id] = 16 + (idx % 14);
            }
          }
        });

        if (changed || !raw) {
          localStorage.setItem(KEYS.STOCK, JSON.stringify(stockMap));
        }

        return stockMap;
      } catch (e) {
        return {};
      }
    },

    setProductStock(productId, newQty) {
      try {
        const stockMap = this.getStockMap();
        stockMap[productId] = Math.max(0, parseInt(newQty, 10) || 0);
        localStorage.setItem(KEYS.STOCK, JSON.stringify(stockMap));
        this.notifyChange('stock');
        return stockMap[productId];
      } catch (e) {
        console.error('AdminDB: Error al fijar stock:', e);
        return 0;
      }
    },

    getAllProductsWithStock() {
      try {
        const catalogSource = this.getCatalogSource();
        let catalog = catalogSource.map(item => ({ ...item }));

        // Cargar productos personalizados añadidos desde el panel
        const customProds = JSON.parse(localStorage.getItem(KEYS.CUSTOM_PRODUCTS) || '[]');
        customProds.forEach(cp => {
          const idx = catalog.findIndex(p => p.id === cp.id);
          if (idx !== -1) catalog[idx] = cp;
          else catalog.push(cp);
        });

        // Filtrar productos eliminados por admin
        const deletedIds = JSON.parse(localStorage.getItem(KEYS.DELETED_PRODUCTS) || '[]');
        catalog = catalog.filter(p => !deletedIds.includes(p.id));

        const stockMap = this.getStockMap();

        return catalog.map(p => {
          const stock = typeof stockMap[p.id] !== 'undefined' ? stockMap[p.id] : 15;
          const imgLower = String(p.image || '').toLowerCase();
          let folder = 'Productos';
          if (imgLower.startsWith('productos 3/')) folder = 'Productos 3';
          else if (imgLower.startsWith('productos 2/')) folder = 'Productos 2';

          return {
            ...p,
            folder: folder,
            stock: stock,
            inStock: stock > 0
          };
        });
      } catch (e) {
        console.error('AdminDB: Error al cargar inventario:', e);
        return [];
      }
    },

    saveProduct(productData) {
      try {
        const customProds = JSON.parse(localStorage.getItem(KEYS.CUSTOM_PRODUCTS) || '[]');
        productData.id = productData.id || 'prod-custom-' + Date.now();
        productData.sku = productData.sku || 'CLM-' + Math.floor(100000 + Math.random() * 900000);

        const existingIdx = customProds.findIndex(p => p.id === productData.id);
        if (existingIdx !== -1) {
          customProds[existingIdx] = { ...customProds[existingIdx], ...productData };
        } else {
          customProds.push(productData);
        }

        localStorage.setItem(KEYS.CUSTOM_PRODUCTS, JSON.stringify(customProds));

        if (typeof productData.stock !== 'undefined') {
          this.setProductStock(productData.id, productData.stock);
        }

        this.notifyChange('products');
        return productData;
      } catch (e) {
        console.error('AdminDB: Error al guardar producto:', e);
        return null;
      }
    },

    deleteProduct(productId) {
      try {
        const deletedIds = JSON.parse(localStorage.getItem(KEYS.DELETED_PRODUCTS) || '[]');
        if (!deletedIds.includes(productId)) {
          deletedIds.push(productId);
          localStorage.setItem(KEYS.DELETED_PRODUCTS, JSON.stringify(deletedIds));
        }

        // Eliminar también de custom_products si estaba allí
        let customProds = JSON.parse(localStorage.getItem(KEYS.CUSTOM_PRODUCTS) || '[]');
        customProds = customProds.filter(p => p.id !== productId);
        localStorage.setItem(KEYS.CUSTOM_PRODUCTS, JSON.stringify(customProds));

        this.notifyChange('products');
        return true;
      } catch (e) {
        console.error('AdminDB: Error al dar de baja producto:', e);
        return false;
      }
    },

    // =========================================================================
    // 5. MÉTRICAS GLOBALES (KPIs)
    // =========================================================================
    getMetrics() {
      const users = this.getUsers();
      const orders = this.getAllOrders();
      const products = this.getAllProductsWithStock();

      const totalSales = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
      const totalUnitsStock = products.reduce((sum, p) => sum + (Number(p.stock) || 0), 0);
      const lowStockCount = products.filter(p => p.stock > 0 && p.stock <= 5).length;
      const outOfStockCount = products.filter(p => p.stock === 0).length;
      const totalCustomerBalances = users.reduce((sum, u) => sum + (Number(u.balance) || 0), 0);

      return {
        totalUsers: users.length,
        totalOrders: orders.length,
        totalSales: totalSales,
        totalUnitsStock: totalUnitsStock,
        totalProductsCount: products.length,
        lowStockCount: lowStockCount,
        outOfStockCount: outOfStockCount,
        totalCustomerBalances: totalCustomerBalances
      };
    },

    // =========================================================================
    // 6. BACKUP & EXPORTACIÓN
    // =========================================================================
    exportFullDatabase() {
      return {
        timestamp: new Date().toISOString(),
        users: this.getUsers(),
        cards: this.getAllCards(),
        orders: this.getAllOrders(),
        stock: this.getStockMap(),
        customProducts: JSON.parse(localStorage.getItem(KEYS.CUSTOM_PRODUCTS) || '[]')
      };
    },

    importFullDatabase(data) {
      try {
        if (!data || typeof data !== 'object') throw new Error('Formato inválido');
        if (data.users) localStorage.setItem(KEYS.USERS, JSON.stringify(data.users));
        if (data.cards) localStorage.setItem(KEYS.CARDS_BY_USER, JSON.stringify(data.cards));
        if (data.orders) localStorage.setItem(KEYS.ORDERS_GLOBAL, JSON.stringify(data.orders));
        if (data.stock) localStorage.setItem(KEYS.STOCK, JSON.stringify(data.stock));
        if (data.customProducts) localStorage.setItem(KEYS.CUSTOM_PRODUCTS, JSON.stringify(data.customProducts));

        this.notifyChange('all');
        return true;
      } catch (e) {
        console.error('Error al importar:', e);
        return false;
      }
    },

    notifyChange(type) {
      try {
        window.dispatchEvent(new CustomEvent('callejon_admin_db_changed', { detail: { type } }));
        window.dispatchEvent(new Event('storage'));
      } catch (e) {}
    }
  };

  window.AdminDB = AdminDB;
})(window);

