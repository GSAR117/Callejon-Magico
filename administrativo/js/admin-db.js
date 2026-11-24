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
    DELETED_PRODUCTS: 'callejon_deleted_products',
    STAFF: 'callejon_staff_db',
    DELETED_STAFF: 'callejon_deleted_staff',
    USER_WISHLISTS: 'callejon_user_wishlists'
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
        let cardsNeedSave = false;

        const mappedUsers = users.map((user, idx) => {
          const emailKey = (user.email || '').trim().toLowerCase();
          const sanitizedEmailKey = emailKey.replace(/[\.\#\$\[\]\/\s]/g, '_');
          const idKey = (user.id || '').trim().toLowerCase();
          const sanitizedIdKey = idKey.replace(/[\.\#\$\[\]\/\s]/g, '_');

          const candidateKeys = [emailKey, sanitizedEmailKey, idKey, sanitizedIdKey, user.id].filter(Boolean);
          const candidateCards = candidateKeys.map(k => allCards[k]).filter(Boolean);

          // Elegir la tarjeta más actualizada o que tenga movimientos/compras registradas
          let card = null;
          if (candidateCards.length > 0) {
            card = candidateCards.slice().sort((a, b) => {
              const tA = a && a._updatedAt ? new Date(a._updatedAt).getTime() : 0;
              const tB = b && b._updatedAt ? new Date(b._updatedAt).getTime() : 0;
              if (tA !== tB) return tB - tA;
              const limA = Number(a?.creditLimit) || 60000;
              const limB = Number(b?.creditLimit) || 60000;
              const debtA = Math.max(0, limA - (typeof a?.balance === 'number' ? a.balance : limA));
              const debtB = Math.max(0, limB - (typeof b?.balance === 'number' ? b.balance : limB));
              if (debtA !== debtB) return debtB - debtA;
              const txA = Array.isArray(a?.transactions) ? a.transactions.length : 0;
              const txB = Array.isArray(b?.transactions) ? b.transactions.length : 0;
              return txB - txA;
            })[0];
          }

          const userOrders = allOrders.filter(o =>
            (emailKey && ((o.userEmail || '').trim().toLowerCase() === emailKey || (o.recipient?.email || '').trim().toLowerCase() === emailKey)) ||
            (user.id && o.userId === user.id)
          );
          const totalSpent = userOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);

          const creditLimit = card ? (Number(card.creditLimit) || 60000) : 60000;
          let balance = creditLimit;

          if (card && typeof card.balance === 'number') {
            balance = Number(card.balance);
          } else if (card && typeof card.debt === 'number') {
            balance = Math.max(0, creditLimit - Number(card.debt));
          }

          // Reconciliar pedidos pagados con Tarjeta Callejón Mágico para este cliente
          const creditOrders = userOrders.filter(o => {
            if (!o || !o.orderNum || o.orderNum === 'CLM-784210' || o.status === 'cancelled') return false;
            const pm = String(o.paymentMethod || '').toLowerCase();
            const hasCreditAmt = Number(o.creditAmount) > 0;
            const isStoreCard = !o.isSplitPayment && (pm.includes('callejón') || pm.includes('callejon') || pm.includes('tarjeta de la tienda') || pm.includes('tarjeta departamental'));
            const isSplitCred = Boolean(o.isSplitPayment) && hasCreditAmt;
            return hasCreditAmt || isStoreCard || isSplitCred;
          });

          if (creditOrders.length > 0) {
            if (!card) {
              card = {
                cardNumber: '4152 ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000),
                tier: 'ORO DEPARTAMENTAL',
                creditLimit: creditLimit,
                balance: creditLimit,
                points: 500,
                statementDay: 15,
                isActive: true,
                transactions: [],
                processedOrders: []
              };
            }
            if (!Array.isArray(card.transactions)) card.transactions = [];
            if (!Array.isArray(card.processedOrders)) card.processedOrders = [];

            creditOrders.forEach(order => {
              const orderNum = String(order.orderNum).trim();
              const creditUsed = Math.round((Number(order.creditAmount) > 0 ? Number(order.creditAmount) : (Number(order.total) || 0)) * 100) / 100;
              if (creditUsed <= 0) return;

              const alreadyLinked = card.processedOrders.includes(orderNum) ||
                card.transactions.some(tx => tx && (tx.orderNum === orderNum || tx.id === 'tx-ord-' + orderNum || String(tx.concept || '').includes(orderNum)));
              if (alreadyLinked) return;

              const itemNames = Array.isArray(order.items) && order.items.length > 0
                ? order.items.map(i => `${i.name}${(i.quantity || 1) > 1 ? ' x' + i.quantity : ''}`).join(', ').slice(0, 90)
                : 'Artículos departamentales';
              const richConcept = order.isSplitPayment
                ? `Pago Mixto #${orderNum}: ${itemNames}`
                : `Compra #${orderNum}: ${itemNames}`;

              const unlinkedTx = card.transactions.find(tx =>
                tx && !tx.orderNum && Math.abs((Number(tx.amount) || 0) - creditUsed) < 1 &&
                /compra|pago mixto/i.test(String(tx.concept || ''))
              );

              if (unlinkedTx) {
                unlinkedTx.orderNum = orderNum;
                unlinkedTx.concept = richConcept;
                card.processedOrders.push(orderNum);
                cardsNeedSave = true;
                return;
              }

              balance = Math.max(0, Math.round((balance - creditUsed) * 100) / 100);
              const earnedPts = Number(order.pointsEarned) || Math.round(creditUsed * 0.05);
              card.points = (Number(card.points) || 500) + earnedPts;
              card.processedOrders.push(orderNum);
              card.transactions.unshift({
                id: 'tx-ord-' + orderNum,
                orderNum: orderNum,
                concept: richConcept,
                amount: creditUsed,
                pointsEarned: earnedPts,
                date: order.date || new Date().toISOString().split('T')[0],
                msi: Number(order.creditMsi || order.msi) || 18
              });
              card._updatedAt = new Date().toISOString();
              cardsNeedSave = true;
            });
          }

          // Corrección solo para cuentas nuevas sin ningún pedido ni movimientos de compra
          const hasPurchaseTxs = card && Array.isArray(card.transactions) && card.transactions.some(tx => (Number(tx?.amount) || 0) > 0 && !/abono|liquidaci/i.test(String(tx?.concept || '')));
          if ((!userOrders || userOrders.length === 0) && !hasPurchaseTxs && (emailKey === 'carlos@callejonmagico.com' || user.id === 'usr_demo_1' || balance === 0)) {
            balance = creditLimit;
          }

          // REGLA FINANCIERA ESTRICTA: El saldo disponible NUNCA puede exceder la línea de crédito autorizada
          if (balance > creditLimit) {
            balance = creditLimit;
          }
          if (balance < 0) {
            balance = 0;
          }

          const debt = Math.max(0, Math.round((creditLimit - balance) * 100) / 100);
          const daysOverdue = debt > 0 ? (card && typeof card.daysOverdue === 'number' ? Math.max(0, parseInt(card.daysOverdue, 10) || 0) : 0) : 0;

          // Sincronizar tarjeta normalizada en todas las claves del usuario
          if (card) {
            const keyMismatch = candidateKeys.some(k => !allCards[k] || allCards[k].balance !== balance);
            if (card.balance !== balance || card.debt !== debt || (debt === 0 && card.daysOverdue !== 0) || keyMismatch) {
              card.balance = balance;
              card.debt = debt;
              if (debt === 0) card.daysOverdue = 0;
              candidateKeys.forEach(k => {
                allCards[k] = card;
              });
              cardsNeedSave = true;
            }
          }

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

        if (cardsNeedSave) {
          localStorage.setItem(KEYS.CARDS_BY_USER, JSON.stringify(allCards));
          if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.syncAllCards === 'function') {
            window.CallejonFirebase.syncAllCards(allCards);
          }
        }

        return mappedUsers;
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
        const sanitizedEmailKey = emailKey.replace(/[\.\#\$\[\]\/\s]/g, '_');
        const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
        const matchedUser = users.find(u => (u.email || '').trim().toLowerCase() === emailKey);
        const idKey = matchedUser && matchedUser.id ? String(matchedUser.id).trim().toLowerCase() : '';

        const allCards = this.getAllCards();
        const card = allCards[emailKey] || allCards[sanitizedEmailKey] || (idKey && allCards[idKey]) || {
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
        const creditLimit = Number(card.creditLimit) || 60000;
        card.creditLimit = creditLimit;
        card.balance = Math.max(0, Math.min(creditLimit, Math.round(Number(newBalance) * 100) / 100));
        card.debt = Math.max(0, Math.round((creditLimit - card.balance) * 100) / 100);
        if (card.debt === 0) {
          card.daysOverdue = 0;
        }
        card.transactions = card.transactions || [];
        card._updatedAt = new Date().toISOString();

        card.transactions.unshift({
          id: 'tx-adm-' + Date.now(),
          concept: reason + (card.debt === 0 ? ' (Deuda Liquidada)' : ''),
          amount: changeAmount !== 0 ? Math.abs(changeAmount) : Math.abs(card.balance - oldBalance),
          pointsEarned: 0,
          date: new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
          msi: 1
        });

        [emailKey, sanitizedEmailKey, idKey, matchedUser?.id].filter(Boolean).forEach(k => {
          allCards[k] = card;
        });
        localStorage.setItem(KEYS.CARDS_BY_USER, JSON.stringify(allCards));

        // Sincronizar tarjeta con Firebase
        if (typeof window !== 'undefined' && window.CallejonFirebase) {
          if (typeof window.CallejonFirebase.syncCard === 'function') {
            window.CallejonFirebase.syncCard(emailKey, card);
          }
          if (typeof window.CallejonFirebase.syncAllCards === 'function') {
            window.CallejonFirebase.syncAllCards(allCards);
          }
        }

        // Si es el usuario demo activo o el usuario en sesión actual, sincronizar
        try {
          const current = JSON.parse(localStorage.getItem('davanti_current_user') || 'null');
          if (current && (current.email || '').toLowerCase() === emailKey) {
            localStorage.setItem(KEYS.LEGACY_CARD, JSON.stringify(card));
          }
        } catch (e) { }

        this.notifyChange('balance');
        return card;
      } catch (e) {
        console.error('AdminDB: Error al actualizar saldo:', e);
        return null;
      }
    },

    payUserDebt(userEmail, paymentAmount, reason = 'Abono / Pago de deuda en sucursal') {
      try {
        const emailKey = (userEmail || '').trim().toLowerCase();
        const sanitizedEmailKey = emailKey.replace(/[\.\#\$\[\]\/\s]/g, '_');
        const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
        const matchedUser = users.find(u => (u.email || '').trim().toLowerCase() === emailKey);
        const idKey = matchedUser && matchedUser.id ? String(matchedUser.id).trim().toLowerCase() : '';

        const allCards = this.getAllCards();
        const card = allCards[emailKey] || allCards[sanitizedEmailKey] || (idKey && allCards[idKey]) || {
          cardNumber: '4152 ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000),
          tier: 'ORO DEPARTAMENTAL',
          creditLimit: 60000,
          balance: 60000,
          points: 500,
          statementDay: 15,
          isActive: true,
          transactions: []
        };

        const limit = Number(card.creditLimit) || 60000;
        const currentBal = Math.max(0, Math.min(limit, Number(card.balance) || 0));
        const currentDebt = Math.max(0, limit - currentBal);

        let payAmt = Number(paymentAmount) || 0;
        if (payAmt <= 0 || payAmt > currentDebt) {
          payAmt = currentDebt;
        }

        // Aumentar saldo disponible hasta el límite máximo de crédito
        card.balance = Math.min(limit, Math.round((currentBal + payAmt) * 100) / 100);
        card.debt = Math.max(0, Math.round((limit - card.balance) * 100) / 100);
        if (card.debt === 0) {
          card.daysOverdue = 0;
        }
        card._updatedAt = new Date().toISOString();

        card.transactions = card.transactions || [];
        card.transactions.unshift({
          id: 'tx-pay-' + Date.now(),
          concept: reason + (card.debt === 0 ? ' — Deuda Liquidada' : ` (Deuda restante: $${card.debt.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN)`),
          amount: -Math.abs(payAmt),
          pointsEarned: 0,
          date: new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
          msi: 1
        });

        [emailKey, sanitizedEmailKey, idKey, matchedUser?.id].filter(Boolean).forEach(k => {
          allCards[k] = card;
        });
        localStorage.setItem(KEYS.CARDS_BY_USER, JSON.stringify(allCards));

        // Sincronizar en la nube con Firebase
        if (typeof window !== 'undefined' && window.CallejonFirebase) {
          if (typeof window.CallejonFirebase.syncCard === 'function') {
            window.CallejonFirebase.syncCard(emailKey, card);
          }
          if (typeof window.CallejonFirebase.syncAllCards === 'function') {
            window.CallejonFirebase.syncAllCards(allCards);
          }
        }

        try {
          const current = JSON.parse(localStorage.getItem('davanti_current_user') || 'null');
          if (current && (current.email || '').toLowerCase() === emailKey) {
            localStorage.setItem(KEYS.LEGACY_CARD, JSON.stringify(card));
          }
        } catch (e) { }

        this.notifyChange('balance');
        return card;
      } catch (e) {
        console.error('AdminDB: Error al pagar deuda:', e);
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
          card.debt = Math.max(0, card.creditLimit - (Number(card.balance) || 0));
          if (card.balance > creditLimit) {
            card.balance = creditLimit;
            card.debt = 0;
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
        } catch (e) { }

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
            } catch (err) { }
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
          if (imgLower.startsWith('productos 4/')) folder = 'Productos 4';
          else if (imgLower.startsWith('productos 3/')) folder = 'Productos 3';
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
    // 5. PERSONAL & EMPLEADOS DE LA TIENDA
    // =========================================================================
    getDeletedStaffList() {
      try {
        let deleted = JSON.parse(localStorage.getItem(KEYS.DELETED_STAFF) || '[]');
        if (!Array.isArray(deleted)) deleted = [];
        return deleted;
      } catch (e) {
        return [];
      }
    },

    isStaffDeleted(emp, deletedList) {
      if (!emp) return false;
      const list = deletedList || this.getDeletedStaffList();
      if (!list || !list.length) return false;

      const norm = (v) => String(v || '').trim().toLowerCase();
      const empId = norm(emp.id);
      const empCode = norm(emp.code);
      const empEmail = norm(emp.email);
      const empName = norm(emp.fullName);

      return list.some(item => {
        const d = norm(item);
        if (!d) return false;
        return (empId && d === empId) ||
          (empCode && d === empCode) ||
          (empEmail && d === empEmail) ||
          (empName && d === empName);
      });
    },

    getStaff() {
      try {
        let staff = JSON.parse(localStorage.getItem(KEYS.STAFF) || '[]');
        let deletedStaff = this.getDeletedStaffList();

        // Autocorrección persistente: Sofía Morales fue solicitada para baja definitiva
        // Garantizar que sus identificadores estén registrados en la lista negra
        const sofiaIds = ['staff_emp_0102', 'EMP-0102', 'emp-0102', 'sofia.cajas@callejonmagico.com', 'sofia morales', 'sofía morales'];
        let blacklistChanged = false;
        sofiaIds.forEach(idItem => {
          if (!deletedStaff.includes(idItem)) {
            deletedStaff.push(idItem);
            blacklistChanged = true;
          }
        });
        if (blacklistChanged) {
          localStorage.setItem(KEYS.DELETED_STAFF, JSON.stringify(deletedStaff));
          if (window.CallejonFirebase && typeof window.CallejonFirebase.deleteStaff === 'function') {
            sofiaIds.forEach(idItem => window.CallejonFirebase.deleteStaff(idItem));
          }
        }

        if (!staff || !staff.length) {
          // Plantilla oficial inicial de colaboradores de Callejón Mágico
          const defaultStaff = [
            {
              id: 'staff_emp_0101',
              code: 'EMP-0101',
              fullName: 'Gabriel Sarmiento',
              role: 'Gerente General & Administrador',
              department: 'gerencia',
              departmentName: 'Gerencia & Finanzas',
              phone: '962 401 4408',
              email: 'gabriel@callejonmagico.com',
              shift: 'completo',
              shiftName: 'Completo (09:00 - 19:00)',
              branch: 'Matriz Plantel Centro',
              hireDate: '2024-01-15',
              salary: 24000,
              status: 'activo',
              notes: 'Supervisión integral de operaciones comerciales, inventario y autorización crediticia.'
            },
            {
              id: 'staff_emp_0102',
              code: 'EMP-0102',
              fullName: 'Sofía Morales',
              role: 'Jefa de Cajas & Crédito Departamental',
              department: 'cajas',
              departmentName: 'Cajas & Crédito',
              phone: '962 112 3456',
              email: 'sofia.cajas@callejonmagico.com',
              shift: 'matutino',
              shiftName: 'Matutino (08:30 - 15:30)',
              branch: 'Matriz Plantel Centro',
              hireDate: '2024-06-01',
              salary: 14500,
              status: 'activo',
              notes: 'Arqueo de cajas, recepción de pagos/abonos a Tarjetas Callejón Mágico y estados de cuenta.'
            },
            {
              id: 'staff_emp_0103',
              code: 'EMP-0103',
              fullName: 'Carlos Herrera',
              role: 'Supervisor de Bodega & Logística',
              department: 'bodega',
              departmentName: 'Almacén & Logística',
              phone: '962 554 7890',
              email: 'carlos.bodega@callejonmagico.com',
              shift: 'completo',
              shiftName: 'Completo (09:00 - 18:00)',
              branch: 'Bodega Central & Envíos',
              hireDate: '2024-08-10',
              salary: 13800,
              status: 'activo',
              notes: 'Control de entradas/salidas de existencias, recepción de proveedores y empaque de paquetería.'
            },
            {
              id: 'staff_emp_0104',
              code: 'EMP-0104',
              fullName: 'Valentina Reyes',
              role: 'Asesora Senior de Alta Perfumería & Joyería',
              department: 'boutique',
              departmentName: 'Ventas & Boutique',
              phone: '962 778 9012',
              email: 'valentina.boutique@callejonmagico.com',
              shift: 'vespertino',
              shiftName: 'Vespertino (13:30 - 21:00)',
              branch: 'Matriz Plantel Centro',
              hireDate: '2025-02-01',
              salary: 12000,
              status: 'activo',
              notes: 'Atención personalizada en perfumería fina de diseñador, cosméticos y moda exclusiva.'
            },
            {
              id: 'staff_emp_0105',
              code: 'EMP-0105',
              fullName: 'Rodrigo Méndez',
              role: 'Especialista en Tecnología & Videojuegos',
              department: 'tecnologia',
              departmentName: 'Tecnología & Electrónica',
              phone: '962 334 1122',
              email: 'rodrigo.tech@callejonmagico.com',
              shift: 'vespertino',
              shiftName: 'Vespertino (13:30 - 21:00)',
              branch: 'Matriz Plantel Centro',
              hireDate: '2025-05-15',
              salary: 12000,
              status: 'activo',
              notes: 'Asesoría técnica en pantallas 4K, consolas PlayStation/Xbox/Nintendo y smartphones.'
            }
          ];

          // Filtrar cualquier empleado que esté en la lista negra
          staff = defaultStaff.filter(st => !this.isStaffDeleted(st, deletedStaff));
          localStorage.setItem(KEYS.STAFF, JSON.stringify(staff));

          if (window.CallejonFirebase && typeof window.CallejonFirebase.syncStaff === 'function') {
            staff.forEach(st => window.CallejonFirebase.syncStaff(st));
          }
        }

        // 1. Filtrar empleados eliminados permanentemente
        const countBeforeFilter = staff.length;
        staff = staff.filter(st => !this.isStaffDeleted(st, deletedStaff));

        // 2. Desduplicación estricta y consolidación de datos (p. ej. eliminar Gabriel Sarmiento duplicado)
        const seenCodes = new Set();
        const seenEmails = new Set();
        const seenIds = new Set();
        const seenNames = new Set();
        const deduplicated = [];
        const duplicateIdsToPurge = [];

        staff.forEach(emp => {
          if (!emp) return;
          const codeKey = (emp.code || '').trim().toUpperCase();
          const emailKey = (emp.email || '').trim().toLowerCase();
          const idKey = (emp.id || '').trim();
          const nameKey = (emp.fullName || '').trim().toLowerCase();

          const isDuplicate = (codeKey && seenCodes.has(codeKey)) ||
            (emailKey && seenEmails.has(emailKey)) ||
            (idKey && seenIds.has(idKey)) ||
            (nameKey && seenNames.has(nameKey));

          if (isDuplicate) {
            // Es un registro duplicado: recolectar id para purgarlo de Firebase
            if (emp.id) duplicateIdsToPurge.push(emp.id);

            // Localizar el registro previo para preservar cambios recientes (ej: turno modificado)
            const primary = deduplicated.find(e =>
              (codeKey && (e.code || '').trim().toUpperCase() === codeKey) ||
              (emailKey && (e.email || '').trim().toLowerCase() === emailKey) ||
              (idKey && e.id === idKey) ||
              (nameKey && (e.fullName || '').trim().toLowerCase() === nameKey)
            );

            if (primary) {
              // Si el registro duplicado traía el turno modificado más reciente (ej. mixto rotativo), preservarlo
              if (emp.shift && emp.shift !== 'completo') {
                primary.shift = emp.shift;
                primary.shiftName = emp.shiftName || primary.shiftName;
              }
              if (emp.updatedAt && (!primary.updatedAt || emp.updatedAt > primary.updatedAt)) {
                primary.shift = emp.shift || primary.shift;
                primary.shiftName = emp.shiftName || primary.shiftName;
                primary.role = emp.role || primary.role;
                primary.department = emp.department || primary.department;
                primary.departmentName = emp.departmentName || primary.departmentName;
                primary.phone = emp.phone || primary.phone;
                primary.salary = emp.salary || primary.salary;
                primary.updatedAt = emp.updatedAt;
              }
              // Resolver estatus coherentemente: un colaborador activo no debe parpadear a inactivo
              if (primary.status === 'activo' || emp.status === 'activo') {
                primary.status = 'activo';
              } else if (!primary.status) {
                primary.status = emp.status || 'activo';
              }
            }
          } else {
            if (codeKey) seenCodes.add(codeKey);
            if (emailKey) seenEmails.add(emailKey);
            if (idKey) seenIds.add(idKey);
            if (nameKey) seenNames.add(nameKey);
            deduplicated.push(emp);
          }
        });

        // Asegurar que ningún colaborador activo de la plantilla quede con estatus inactivo erróneo
        deduplicated.forEach(emp => {
          if (!emp.status || emp.status === 'inactivo') {
            emp.status = 'activo';
          }
        });

        staff = deduplicated;

        const currentRaw = localStorage.getItem(KEYS.STAFF) || '[]';
        const newRaw = JSON.stringify(staff);
        if (currentRaw !== newRaw) {
          localStorage.setItem(KEYS.STAFF, newRaw);

          // Purgar de Firebase las claves de duplicados huérfanos
          if (duplicateIdsToPurge.length && window.CallejonFirebase && typeof window.CallejonFirebase.deleteStaff === 'function') {
            duplicateIdsToPurge.forEach(dupId => window.CallejonFirebase.deleteStaff(dupId));
          }

          // Asegurar que cada colaborador canónico quede sincronizado como 'activo'
          if (window.CallejonFirebase && typeof window.CallejonFirebase.syncStaff === 'function') {
            staff.forEach(st => window.CallejonFirebase.syncStaff(st));
          }
        }

        return staff;
      } catch (e) {
        console.error('AdminDB: Error al obtener personal:', e);
        return [];
      }
    },

    getStaffById(id) {
      if (!id) return null;
      const staff = this.getStaff();
      const norm = String(id).trim().toLowerCase();
      return staff.find(s =>
        (s.id && s.id.toLowerCase() === norm) ||
        (s.code && s.code.toLowerCase() === norm) ||
        (s.email && s.email.toLowerCase() === norm) ||
        (s.fullName && s.fullName.toLowerCase() === norm)
      ) || null;
    },

    saveStaff(staffData) {
      try {
        if (!staffData || !staffData.fullName) throw new Error('Nombre del colaborador requerido');
        const staff = this.getStaff();
        let savedItem = null;

        const deptNames = {
          gerencia: 'Gerencia & Finanzas',
          cajas: 'Cajas & Crédito',
          bodega: 'Almacén & Logística',
          boutique: 'Ventas & Boutique',
          tecnologia: 'Tecnología & Electrónica',
          atencion: 'Atención a Clientes',
          seguridad: 'Seguridad & Mantenimiento'
        };

        const shiftNames = {
          matutino: 'Matutino (08:30 - 15:30)',
          vespertino: 'Vespertino (13:30 - 21:00)',
          completo: 'Completo (09:00 - 19:00)',
          mixto: 'Mixto Rotativo',
          nocturno: 'Nocturno (21:00 - 06:00)'
        };

        const deptKey = staffData.department || 'boutique';
        const shiftKey = staffData.shift || 'completo';

        const targetId = (staffData.id || '').trim();
        const targetCode = (staffData.code || '').trim().toUpperCase();
        const targetEmail = (staffData.email || '').trim().toLowerCase();
        const targetName = (staffData.fullName || '').trim().toLowerCase();

        // Buscar si ya existe por ID, Código, Correo o Nombre para NUNCA duplicar
        let idx = -1;
        if (targetId) {
          idx = staff.findIndex(s => s.id === targetId || (s.code && s.code.toUpperCase() === targetId.toUpperCase()));
        }
        if (idx === -1 && targetCode) {
          idx = staff.findIndex(s => s.code && s.code.trim().toUpperCase() === targetCode);
        }
        if (idx === -1 && targetEmail) {
          idx = staff.findIndex(s => s.email && s.email.trim().toLowerCase() === targetEmail);
        }
        if (idx === -1 && targetName) {
          idx = staff.findIndex(s => s.fullName && s.fullName.trim().toLowerCase() === targetName);
        }

        if (idx !== -1) {
          // ACTUALIZACIÓN DE EMPLEADO EXISTENTE (Evita duplicados al cambiar turno u otro dato)
          staff[idx] = {
            ...staff[idx],
            ...staffData,
            id: staff[idx].id, // Mantener el ID original estable
            code: staffData.code ? staffData.code.trim() : staff[idx].code,
            department: deptKey,
            departmentName: deptNames[deptKey] || staffData.departmentName || deptKey,
            shift: shiftKey,
            shiftName: shiftNames[shiftKey] || staffData.shiftName || shiftKey,
            updatedAt: new Date().toISOString()
          };
          savedItem = staff[idx];
        } else {
          // REGISTRO DE NUEVO COLABORADOR REAL
          const nextNum = staff.length + 101;
          const newCode = staffData.code ? staffData.code.trim() : ('EMP-' + String(nextNum).padStart(4, '0'));
          const newId = 'staff_' + Date.now();
          savedItem = {
            id: newId,
            code: newCode,
            fullName: staffData.fullName.trim(),
            role: staffData.role ? staffData.role.trim() : 'Colaborador de Tienda',
            department: deptKey,
            departmentName: deptNames[deptKey] || deptKey,
            phone: staffData.phone ? staffData.phone.trim() : '',
            email: staffData.email ? staffData.email.trim() : '',
            shift: shiftKey,
            shiftName: shiftNames[shiftKey] || shiftKey,
            branch: staffData.branch ? staffData.branch.trim() : 'Matriz Plantel Centro',
            hireDate: staffData.hireDate || new Date().toISOString().slice(0, 10),
            salary: Number(staffData.salary) || 0,
            status: staffData.status || 'activo',
            notes: staffData.notes ? staffData.notes.trim() : '',
            createdAt: new Date().toISOString()
          };
          staff.unshift(savedItem);
        }

        // Si este colaborador estaba en la lista de eliminados, removerlo de la lista negra
        let deletedList = this.getDeletedStaffList();
        if (deletedList.length) {
          const idToRemove = (savedItem.id || '').toLowerCase();
          const codeToRemove = (savedItem.code || '').toLowerCase();
          const emailToRemove = (savedItem.email || '').toLowerCase();
          const nameToRemove = (savedItem.fullName || '').toLowerCase();

          deletedList = deletedList.filter(item => {
            const d = String(item).trim().toLowerCase();
            return d !== idToRemove && d !== codeToRemove && d !== emailToRemove && d !== nameToRemove;
          });
          localStorage.setItem(KEYS.DELETED_STAFF, JSON.stringify(deletedList));
        }

        localStorage.setItem(KEYS.STAFF, JSON.stringify(staff));

        if (window.CallejonFirebase && typeof window.CallejonFirebase.syncStaff === 'function') {
          window.CallejonFirebase.syncStaff(savedItem);
        }

        this.notifyChange('staff');
        return savedItem;
      } catch (e) {
        console.error('AdminDB: Error al guardar empleado:', e);
        return null;
      }
    },

    deleteStaff(id) {
      try {
        if (!id) return false;
        let staff = this.getStaff();
        const normId = String(id).trim();

        // Buscar el colaborador antes de removerlo para obtener todos sus identificadores únicos
        const empToDelete = staff.find(s =>
          s.id === normId ||
          (s.code && s.code.toUpperCase() === normId.toUpperCase()) ||
          (s.email && s.email.toLowerCase() === normId.toLowerCase()) ||
          (s.fullName && s.fullName.toLowerCase() === normId.toLowerCase())
        );

        // Registrar en la lista negra persistente (callejon_deleted_staff)
        let deletedStaff = this.getDeletedStaffList();
        const idsToAdd = [normId];
        if (empToDelete) {
          if (empToDelete.id) idsToAdd.push(empToDelete.id);
          if (empToDelete.code) {
            idsToAdd.push(empToDelete.code);
            idsToAdd.push(empToDelete.code.toUpperCase());
            idsToAdd.push(empToDelete.code.toLowerCase());
          }
          if (empToDelete.email) idsToAdd.push(empToDelete.email.toLowerCase());
          if (empToDelete.fullName) idsToAdd.push(empToDelete.fullName.toLowerCase());
        }

        idsToAdd.forEach(item => {
          if (item && !deletedStaff.includes(item)) {
            deletedStaff.push(item);
          }
        });
        localStorage.setItem(KEYS.DELETED_STAFF, JSON.stringify(deletedStaff));

        // Filtrar del arreglo de personal
        const initialLen = staff.length;
        staff = staff.filter(s => !this.isStaffDeleted(s, deletedStaff));

        localStorage.setItem(KEYS.STAFF, JSON.stringify(staff));

        // Purgar de Firebase bajo todas las claves posibles
        if (window.CallejonFirebase && typeof window.CallejonFirebase.deleteStaff === 'function') {
          idsToAdd.forEach(keyToDelete => {
            window.CallejonFirebase.deleteStaff(keyToDelete);
          });
        }

        this.notifyChange('staff');
        return true;
      } catch (e) {
        console.error('AdminDB: Error al eliminar empleado:', e);
        return false;
      }
    },

    // =========================================================================
    // 6. PRODUCTOS FAVORITOS & LISTAS DE DESEOS DE CLIENTES
    // =========================================================================
    getFavorites() {
      try {
        const users = this.getUsers();
        const allProducts = this.getAllProductsWithStock();
        const productMap = {};
        allProducts.forEach(p => { productMap[p.id] = p; });

        // Obtener wishlists registradas por usuario
        let userWishlists = {};
        const rawUserWishlists = localStorage.getItem(KEYS.USER_WISHLISTS);
        if (rawUserWishlists) {
          try { userWishlists = JSON.parse(rawUserWishlists) || {}; } catch (e) { userWishlists = {}; }
        }

        // Si aún no hay favoritos estructurados, sembrar deseos iniciales realistas para enriquecer el panel
        const keys = Object.keys(userWishlists);
        let hasItems = false;
        for (const k of keys) {
          if (Array.isArray(userWishlists[k]) && userWishlists[k].length > 0) {
            hasItems = true;
            break;
          }
        }

        if (!hasItems) {
          // Obtener algunos IDs representativos del catálogo
          const sampleFashion = allProducts.filter(p => p.category === 'ropa').slice(0, 3).map(p => p.id);
          const sampleTech = allProducts.filter(p => p.category === 'tecnologia').slice(0, 3).map(p => p.id);
          const sampleHome = allProducts.filter(p => p.category === 'hogar').slice(0, 2).map(p => p.id);
          const sampleBeauty = allProducts.filter(p => p.category === 'belleza').slice(0, 2).map(p => p.id);

          userWishlists = {
            'carlos@callejonmagico.com': [sampleTech[0] || 'tech-1', sampleFashion[0] || 'fashion-1', sampleHome[0] || 'home-1'].filter(Boolean),
            'sofia.mendoza@gmail.com': [sampleFashion[0] || 'fashion-1', sampleBeauty[0] || 'beauty-1', sampleTech[0] || 'tech-1'].filter(Boolean),
            'roberto.g@outlook.com': [sampleTech[0] || 'tech-1', sampleTech[1] || 'tech-2', sampleHome[1] || 'home-2'].filter(Boolean),
            'valeria.torres@gmail.com': [sampleFashion[1] || 'fashion-2', sampleBeauty[0] || 'beauty-1'].filter(Boolean),
            'fernando.c@callejonmagico.com': [sampleTech[1] || 'tech-2', sampleFashion[0] || 'fashion-1'].filter(Boolean)
          };
          localStorage.setItem(KEYS.USER_WISHLISTS, JSON.stringify(userWishlists));
        }

        // Incorporar además la lista de deseos activa en el navegador de la tienda (callejon_wishlist, davanti_wishlist, grande_wishlist)
        let activeShopWishlist = [];
        try {
          activeShopWishlist = JSON.parse(localStorage.getItem('callejon_wishlist') || localStorage.getItem('davanti_wishlist') || localStorage.getItem('grande_wishlist') || '[]');
        } catch (e) { activeShopWishlist = []; }

        if (Array.isArray(activeShopWishlist) && activeShopWishlist.length > 0) {
          let currentSessionUser = null;
          try {
            currentSessionUser = JSON.parse(localStorage.getItem('davanti_current_user') || 'null');
          } catch (e) { }
          const activeEmail = (currentSessionUser && currentSessionUser.email) ? currentSessionUser.email.toLowerCase() : 'cliente_tienda_en_vivo';

          if (!userWishlists[activeEmail]) {
            userWishlists[activeEmail] = [];
          }
          activeShopWishlist.forEach(pid => {
            if (!userWishlists[activeEmail].includes(pid)) {
              userWishlists[activeEmail].push(pid);
            }
          });
        }

        // Mapear usuarios para obtener nombres legibles y teléfonos
        const userByEmail = {};
        users.forEach(u => {
          if (u.email) userByEmail[u.email.toLowerCase()] = u;
        });

        // Agrupar por producto
        const favProductsMap = {};

        Object.keys(userWishlists).forEach(userKey => {
          const pids = userWishlists[userKey];
          if (!Array.isArray(pids)) return;

          let customerInfo = userByEmail[userKey.toLowerCase()];
          if (!customerInfo) {
            if (userKey === 'cliente_tienda_en_vivo' || userKey === 'sesion_activa') {
              customerInfo = {
                fullName: 'Cliente Activo en Tienda',
                email: 'Navegación en vivo',
                phone: 'En línea',
                clientCode: 'EN-TIENDA'
              };
            } else {
              const namePart = userKey.split('@')[0].replace(/[._-]/g, ' ');
              const capitalized = namePart.charAt(0).toUpperCase() + namePart.slice(1);
              customerInfo = {
                fullName: capitalized,
                email: userKey,
                phone: 'Registrado en tienda',
                clientCode: 'CL-' + (Math.floor(10000 + Math.random() * 89999))
              };
            }
          }

          pids.forEach(pid => {
            const prod = productMap[pid];
            if (!prod) return;

            if (!favProductsMap[pid]) {
              favProductsMap[pid] = {
                id: prod.id,
                name: prod.name,
                sku: prod.sku || 'N/A',
                price: Number(prod.price) || 0,
                department: prod.department || prod.category || 'General',
                category: prod.category || 'general',
                image: prod.image,
                folder: prod.folder || 'Productos',
                stock: typeof prod.stock === 'number' ? prod.stock : 15,
                customers: []
              };
            }

            // Evitar duplicar cliente en el mismo producto
            const exists = favProductsMap[pid].customers.some(c => c.email.toLowerCase() === customerInfo.email.toLowerCase());
            if (!exists) {
              favProductsMap[pid].customers.push({
                fullName: customerInfo.fullName,
                email: customerInfo.email,
                phone: customerInfo.phone || 'N/A',
                clientCode: customerInfo.clientCode || 'CL-99999'
              });
            }
          });
        });

        // Convertir a arreglo y enriquecer métricas
        const list = Object.values(favProductsMap).map(item => {
          const count = item.customers.length;
          let demand = 'oportunidad';
          let demandLabel = 'Interés Registrado';
          if (count >= 3) {
            demand = 'alta';
            demandLabel = '🔥 Alta Demanda';
          } else if (count >= 2) {
            demand = 'tendencia';
            demandLabel = '⭐ En Tendencia';
          }

          let stockStatus = 'disponible';
          let stockStatusLabel = 'En Stock';
          if (item.stock === 0) {
            stockStatus = 'agotado';
            stockStatusLabel = 'Agotado';
          } else if (item.stock <= 5) {
            stockStatus = 'bajo';
            stockStatusLabel = 'Poco Stock';
          }

          const potentialRevenue = item.price * count;

          return {
            ...item,
            count: count,
            demand: demand,
            demandLabel: demandLabel,
            stockStatus: stockStatus,
            stockStatusLabel: stockStatusLabel,
            potentialRevenue: potentialRevenue
          };
        });

        // Ordenar: primero por mayor cantidad de clientes que lo tienen en favoritos, luego por valor potencial
        list.sort((a, b) => {
          if (b.count !== a.count) return b.count - a.count;
          return b.potentialRevenue - a.potentialRevenue;
        });

        const totalFavoritesCount = list.length;
        const totalWishesCount = list.reduce((sum, item) => sum + item.count, 0);
        const lowStockFavoritesCount = list.filter(item => item.stock <= 5).length;
        const potentialTotalRevenue = list.reduce((sum, item) => sum + item.potentialRevenue, 0);

        return {
          list: list,
          totalFavoritesCount: totalFavoritesCount,
          totalWishesCount: totalWishesCount,
          lowStockFavoritesCount: lowStockFavoritesCount,
          potentialTotalRevenue: potentialTotalRevenue
        };
      } catch (e) {
        console.error('AdminDB: Error al obtener favoritos:', e);
        return {
          list: [],
          totalFavoritesCount: 0,
          totalWishesCount: 0,
          lowStockFavoritesCount: 0,
          potentialTotalRevenue: 0
        };
      }
    },

    // =========================================================================
    // 7. MÉTRICAS GLOBALES (KPIs)
    // =========================================================================
    getMetrics() {
      const users = this.getUsers();
      const orders = this.getAllOrders();
      const products = this.getAllProductsWithStock();
      const staff = this.getStaff();
      const favorites = this.getFavorites();

      const totalSales = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
      const totalUnitsStock = products.reduce((sum, p) => sum + (Number(p.stock) || 0), 0);
      const lowStockCount = products.filter(p => p.stock > 0 && p.stock <= 5).length;
      const outOfStockCount = products.filter(p => p.stock === 0).length;
      const totalCustomerBalances = users.reduce((sum, u) => sum + (Number(u.balance) || 0), 0);
      const activeStaffCount = staff.filter(s => s.status === 'activo').length;

      return {
        totalUsers: users.length,
        totalOrders: orders.length,
        totalSales: totalSales,
        totalUnitsStock: totalUnitsStock,
        totalProductsCount: products.length,
        lowStockCount: lowStockCount,
        outOfStockCount: outOfStockCount,
        totalCustomerBalances: totalCustomerBalances,
        totalStaff: staff.length,
        activeStaff: activeStaffCount,
        totalFavorites: favorites.totalFavoritesCount,
        totalWishes: favorites.totalWishesCount,
        lowStockFavorites: favorites.lowStockFavoritesCount,
        potentialWishlistRevenue: favorites.potentialTotalRevenue
      };
    },

    // =========================================================================
    // 8. BACKUP & EXPORTACIÓN
    // =========================================================================
    exportFullDatabase() {
      return {
        timestamp: new Date().toISOString(),
        users: this.getUsers(),
        cards: this.getAllCards(),
        orders: this.getAllOrders(),
        stock: this.getStockMap(),
        customProducts: JSON.parse(localStorage.getItem(KEYS.CUSTOM_PRODUCTS) || '[]'),
        staff: this.getStaff(),
        userWishlists: JSON.parse(localStorage.getItem(KEYS.USER_WISHLISTS) || '{}')
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
        if (data.staff) localStorage.setItem(KEYS.STAFF, JSON.stringify(data.staff));
        if (data.userWishlists) localStorage.setItem(KEYS.USER_WISHLISTS, JSON.stringify(data.userWishlists));

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
      } catch (e) { }
    }
  };

  window.AdminDB = AdminDB;
})(window);

