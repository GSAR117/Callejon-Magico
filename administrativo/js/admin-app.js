/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — CONTROLADOR PRINCIPAL DEL PANEL ADMINISTRATIVO
 * Renderizado dinámico de Vistas, Tablas, Modales, Recargas y Stock.
 * ==========================================================================
 */

(function () {
  'use strict';

  let currentView = 'dashboard';
  let activeBalanceUser = null;
  let activeEditProductId = null;

  // Elementos DOM principales
  const DOM = {
    navItems: document.querySelectorAll('.nav-item[data-view]'),
    views: document.querySelectorAll('.admin-view'),
    pageTitle: document.getElementById('adminPageTitle'),
    pageSubtitle: document.getElementById('adminPageSubtitle'),

    // KPIs
    kpiUsers: document.getElementById('kpiTotalUsers'),
    kpiSales: document.getElementById('kpiTotalSales'),
    kpiOrders: document.getElementById('kpiTotalOrders'),
    kpiStock: document.getElementById('kpiTotalStock'),
    kpiBalances: document.getElementById('kpiTotalBalances'),

    // Tablas
    tableUsersBody: document.getElementById('adminUsersTableBody'),
    tableOrdersBody: document.getElementById('adminOrdersTableBody'),
    tableStockBody: document.getElementById('adminStockTableBody'),
    recentOrdersBody: document.getElementById('recentOrdersBody'),
    lowStockAlertList: document.getElementById('lowStockAlertList'),

    // Buscadores y Filtros
    searchUsers: document.getElementById('searchUsersInput'),
    searchOrders: document.getElementById('searchOrdersInput'),
    filterOrderStatus: document.getElementById('filterOrderStatus'),
    searchStock: document.getElementById('searchStockInput'),
    filterStockFolder: document.getElementById('filterStockFolder'),
    filterStockDept: document.getElementById('filterStockDept'),
    filterStockStatus: document.getElementById('filterStockStatus'),

    // Modales
    modalBalance: document.getElementById('modalAdjustBalance'),
    modalProduct: document.getElementById('modalProductForm'),
    modalCustomer: document.getElementById('modalCustomerForm'),
    modalOrderTicket: document.getElementById('modalOrderTicket')
  };

  // =========================================================================
  // INICIALIZACIÓN
  // =========================================================================
  function initAdmin() {
    setupNavigation();
    setupFiltersAndSearches();
    setupModals();
    renderAll();

    // Escuchar cambios de base de datos o almacenamiento en vivo
    window.addEventListener('callejon_admin_db_changed', () => renderAll());
    window.addEventListener('storage', () => renderAll());

    // Sidebar móvil
    const btnToggle = document.getElementById('btnToggleSidebar');
    const sidebar = document.querySelector('.admin-sidebar');
    if (btnToggle && sidebar) {
      btnToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
  }

  // =========================================================================
  // NAVEGACIÓN ENTRE VISTAS
  // =========================================================================
  function setupNavigation() {
    DOM.navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = item.dataset.view;
        switchView(viewId);

        // En pantallas móviles, cerrar la barra lateral al hacer clic
        const sidebar = document.querySelector('.admin-sidebar');
        if (sidebar) sidebar.classList.remove('open');
      });
    });
  }

  function switchView(viewId) {
    currentView = viewId;

    DOM.navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.view === viewId);
    });

    DOM.views.forEach(view => {
      view.classList.toggle('active', view.id === `view-${viewId}`);
    });

    // Actualizar títulos
    const titles = {
      dashboard: { title: 'Dashboard General', subtitle: 'Resumen ejecutivo de ventas, clientes e inventario en tiempo real' },
      clients: { title: 'Gestión de Clientes & Saldos', subtitle: 'Cuentas registradas, saldos de Tarjeta Callejón Mágico y abonos' },
      orders: { title: 'Ventas & Pedidos', subtitle: 'Historial de compras, estados de envío y notas de remisión' },
      inventory: { title: 'Inventario & Stock Restante', subtitle: 'Control de existencias disponibles y edición de productos' }
    };

    const info = titles[viewId] || titles.dashboard;
    if (DOM.pageTitle) DOM.pageTitle.textContent = info.title;
    if (DOM.pageSubtitle) DOM.pageSubtitle.textContent = info.subtitle;
  }

  // =========================================================================
  // RENDER GENERAL
  // =========================================================================
  function renderAll() {
    renderKPIs();
    renderDashboardOverview();
    renderUsersTable();
    renderOrdersTable();
    renderStockTable();
  }

  // 1. KPIs
  function renderKPIs() {
    const metrics = window.AdminDB.getMetrics();

    if (DOM.kpiUsers) DOM.kpiUsers.textContent = metrics.totalUsers;
    if (DOM.kpiSales) DOM.kpiSales.textContent = '$' + metrics.totalSales.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    if (DOM.kpiOrders) DOM.kpiOrders.textContent = metrics.totalOrders;
    if (DOM.kpiStock) DOM.kpiStock.textContent = metrics.totalUnitsStock.toLocaleString('es-MX') + ' unidades';
    if (DOM.kpiBalances) DOM.kpiBalances.textContent = '$' + metrics.totalCustomerBalances.toLocaleString('es-MX', { minimumFractionDigits: 2 });

    // Insignias en navegación
    const badgeUsers = document.getElementById('navBadgeUsers');
    if (badgeUsers) badgeUsers.textContent = metrics.totalUsers;
    const badgeOrders = document.getElementById('navBadgeOrders');
    if (badgeOrders) badgeOrders.textContent = metrics.totalOrders;
    const badgeStock = document.getElementById('navBadgeStock');
    if (badgeStock) badgeStock.textContent = metrics.totalProductsCount;
  }

  // 2. Dashboard Resumen
  function renderDashboardOverview() {
    const orders = window.AdminDB.getAllOrders().slice(0, 5);
    const products = window.AdminDB.getAllProductsWithStock();
    const lowStock = products.filter(p => p.stock <= 5).slice(0, 6);

    // Últimos pedidos en Dashboard
    if (DOM.recentOrdersBody) {
      if (!orders.length) {
        DOM.recentOrdersBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--admin-text-muted); padding: 2rem;">No hay pedidos registrados</td></tr>`;
      } else {
        DOM.recentOrdersBody.innerHTML = orders.map(o => `
          <tr>
            <td><strong style="color: var(--admin-gold);">${o.orderNum}</strong></td>
            <td>${escapeHtml(o.recipient ? o.recipient.name : o.userEmail)}</td>
            <td><span class="badge-method ${getMethodBadgeClass(o.paymentMethod)}">${escapeHtml(o.paymentMethod || 'Efectivo')}</span></td>
            <td><strong>$${Number(o.total || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong></td>
            <td><span class="badge-status ${getStatusClass(o.status)}">${escapeHtml(o.statusText || o.status || 'Pagado')}</span></td>
          </tr>
        `).join('');
      }
    }

    // Alertas de Stock Bajo
    if (DOM.lowStockAlertList) {
      if (!lowStock.length) {
        DOM.lowStockAlertList.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--admin-success);">✅ Todo el inventario tiene existencias óptimas</div>`;
      } else {
        DOM.lowStockAlertList.innerHTML = lowStock.map(p => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-bottom: 1px solid var(--admin-border-subtle);">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <img src="${p.image}" alt="" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;" />
              <div>
                <strong style="font-size: 0.82rem; color: #fff; display: block; max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(p.name)}</strong>
                <span style="font-size: 0.72rem; color: var(--admin-text-muted);">${p.sku}</span>
              </div>
            </div>
            <span class="badge-status ${p.stock === 0 ? 'outofstock' : 'lowstock'}">
              ${p.stock === 0 ? 'Agotado' : `Quedan ${p.stock}`}
            </span>
          </div>
        `).join('');
      }
    }
  }

  // =========================================================================
  // 3. TABLA DE CLIENTES & SALDOS
  // =========================================================================
  function renderUsersTable() {
    if (!DOM.tableUsersBody) return;
    const users = window.AdminDB.getUsers();
    const query = (DOM.searchUsers ? DOM.searchUsers.value : '').trim().toLowerCase();

    const filtered = users.filter(u => {
      const matchName = (u.fullName || '').toLowerCase().includes(query);
      const matchEmail = (u.email || '').toLowerCase().includes(query);
      const matchPhone = (u.phone || '').toLowerCase().includes(query);
      return matchName || matchEmail || matchPhone;
    });

    if (!filtered.length) {
      DOM.tableUsersBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--admin-text-muted);">No se encontraron clientes con el criterio de búsqueda.</td></tr>`;
      return;
    }

    DOM.tableUsersBody.innerHTML = filtered.map(u => {
      const initial = (u.fullName || u.email || 'U').charAt(0).toUpperCase();
      const dateStr = u.createdAt ? new Date(u.createdAt).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Reciente';

      return `
        <tr>
          <td>
            <div class="user-cell">
              <div class="user-cell-avatar">${initial}</div>
              <div>
                <strong style="font-size: 0.9rem; color: #ffffff;">${escapeHtml(u.fullName || 'Sin nombre')}</strong>
                <span style="font-size: 0.75rem; color: var(--admin-text-muted); display: block;">${escapeHtml(u.email)}</span>
              </div>
            </div>
          </td>
          <td>${escapeHtml(u.phone || 'No registrado')}</td>
          <td>${dateStr}</td>
          <td>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--admin-gold);">
              $${Number(u.balance || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
            </div>
            <span style="font-size: 0.72rem; color: var(--admin-text-muted);">Límite: $${Number(u.creditLimit || 35000).toLocaleString('es-MX')}</span>
          </td>
          <td>
            <span style="font-weight: 700; color: #ffffff;">${u.ordersCount || 0} pedido(s)</span>
            <div style="font-size: 0.72rem; color: var(--admin-success);">$${Number(u.totalSpent || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</div>
          </td>
          <td style="text-align: right;">
            <div style="display: flex; gap: 0.4rem; justify-content: flex-end;">
              <button type="button" class="btn-admin btn-admin-primary btn-admin-sm btn-open-balance" data-email="${escapeHtml(u.email)}" data-name="${escapeHtml(u.fullName || '')}" data-balance="${u.balance || 0}">
                💳 Recargar Saldo
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Eventos de botones de recargar saldo
    DOM.tableUsersBody.querySelectorAll('.btn-open-balance').forEach(btn => {
      btn.addEventListener('click', () => {
        openBalanceModal(btn.dataset.email, btn.dataset.name, parseFloat(btn.dataset.balance));
      });
    });
  }

  // =========================================================================
  // 4. TABLA DE VENTAS & PEDIDOS
  // =========================================================================
  function renderOrdersTable() {
    if (!DOM.tableOrdersBody) return;
    const orders = window.AdminDB.getAllOrders();
    const query = (DOM.searchOrders ? DOM.searchOrders.value : '').trim().toLowerCase();
    const statusFilter = (DOM.filterOrderStatus ? DOM.filterOrderStatus.value : 'all');

    const filtered = orders.filter(o => {
      const matchFolio = (o.orderNum || '').toLowerCase().includes(query);
      const matchEmail = (o.userEmail || '').toLowerCase().includes(query);
      const matchName = (o.recipient && o.recipient.name ? o.recipient.name : '').toLowerCase().includes(query);
      const matchSearch = matchFolio || matchEmail || matchName;

      let matchStatus = true;
      if (statusFilter !== 'all') {
        matchStatus = o.status === statusFilter;
      }
      return matchSearch && matchStatus;
    });

    if (!filtered.length) {
      DOM.tableOrdersBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--admin-text-muted);">No se encontraron pedidos.</td></tr>`;
      return;
    }

    DOM.tableOrdersBody.innerHTML = filtered.map(o => {
      const clientName = o.recipient && o.recipient.name ? o.recipient.name : (o.userEmail || 'Cliente');
      const itemsCount = (o.items || []).reduce((sum, it) => sum + (it.quantity || 1), 0);

      return `
        <tr>
          <td><strong style="color: var(--admin-gold); font-size: 0.9rem;">${o.orderNum}</strong></td>
          <td style="font-size: 0.82rem; color: var(--admin-text-muted);">${escapeHtml(o.date || 'Reciente')}</td>
          <td>
            <strong>${escapeHtml(clientName)}</strong>
            <span style="font-size: 0.72rem; color: var(--admin-text-muted); display: block;">${escapeHtml(o.userEmail || '')}</span>
          </td>
          <td>
            <span style="font-weight: 700;">${itemsCount} art.</span>
            <span style="font-size: 0.72rem; color: var(--admin-text-muted); display: block;">${escapeHtml((o.items && o.items[0] ? o.items[0].name : '').slice(0, 26))}...</span>
          </td>
          <td>
            <span class="badge-method ${getMethodBadgeClass(o.paymentMethod)}">${escapeHtml(o.paymentMethod || 'Efectivo')}</span>
          </td>
          <td>
            <strong style="color: #ffffff; font-size: 0.95rem;">$${Number(o.total || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong>
          </td>
          <td>
            <select class="admin-select order-status-select" data-ordernum="${o.orderNum}" style="font-size: 0.78rem; padding: 0.35rem 0.6rem; height: 32px;">
              <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>⏳ Pendiente</option>
              <option value="paid" ${o.status === 'paid' ? 'selected' : ''}>✅ Pagado</option>
              <option value="in-transit" ${o.status === 'in-transit' ? 'selected' : ''}>🚚 En Camino</option>
              <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>📦 Entregado</option>
              <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>❌ Cancelado</option>
            </select>
          </td>
        </tr>
      `;
    }).join('');

    // Eventos de cambio de estatus de pedido
    DOM.tableOrdersBody.querySelectorAll('.order-status-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const orderNum = sel.dataset.ordernum;
        const newStatus = sel.value;
        const statusLabels = {
          'pending': '⏳ Pago Pendiente',
          'paid': '✅ Pago Confirmado',
          'in-transit': '🚚 En Ruta de Entrega',
          'delivered': '📦 Pedido Entregado',
          'cancelled': '❌ Cancelado'
        };
        window.AdminDB.updateOrderStatus(orderNum, newStatus, statusLabels[newStatus] || newStatus);
        showToast(`Pedido ${orderNum} actualizado a: ${statusLabels[newStatus]}`, 'success');
      });
    });
  }

  // =========================================================================
  // 5. TABLA DE INVENTARIO & STOCK RESTANTE
  // =========================================================================
  function renderStockTable() {
    if (!DOM.tableStockBody) return;
    const products = window.AdminDB.getAllProductsWithStock();
    const query = (DOM.searchStock ? DOM.searchStock.value : '').trim().toLowerCase();
    const folderFilter = (DOM.filterStockFolder ? DOM.filterStockFolder.value : 'all');
    const deptFilter = (DOM.filterStockDept ? DOM.filterStockDept.value : 'all');
    const statusFilter = (DOM.filterStockStatus ? DOM.filterStockStatus.value : 'all');

    const filtered = products.filter(p => {
      const matchSearch = (p.name || '').toLowerCase().includes(query) || (p.sku || '').toLowerCase().includes(query);
      let matchFolder = true;
      if (folderFilter !== 'all') {
        matchFolder = p.folder === folderFilter;
      }
      let matchDept = true;
      if (deptFilter !== 'all') {
        matchDept = p.category === deptFilter;
      }
      let matchStatus = true;
      if (statusFilter === 'instock') matchStatus = p.stock > 5;
      else if (statusFilter === 'lowstock') matchStatus = p.stock > 0 && p.stock <= 5;
      else if (statusFilter === 'outofstock') matchStatus = p.stock === 0;

      return matchSearch && matchFolder && matchDept && matchStatus;
    });

    if (!filtered.length) {
      DOM.tableStockBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--admin-text-muted);">No se encontraron productos en el inventario con los filtros seleccionados.</td></tr>`;
      return;
    }

    DOM.tableStockBody.innerHTML = filtered.map(p => {
      let badgeStockClass = 'instock';
      let badgeStockText = `${p.stock} disponibles`;
      if (p.stock === 0) {
        badgeStockClass = 'outofstock';
        badgeStockText = 'Agotado';
      } else if (p.stock <= 5) {
        badgeStockClass = 'lowstock';
        badgeStockText = `¡Poco stock! (${p.stock})`;
      }

      const folderClass = p.folder === 'Productos 3' ? 'folder-p3' : (p.folder === 'Productos 2' ? 'folder-p2' : 'folder-p1');

      return `
        <tr>
          <td>
            <div class="prod-thumb-cell">
              <img src="${p.image}" alt="" class="prod-thumb-img" onerror="this.src='../assets/images/prod_shoes.jpg'" />
              <div>
                <strong style="color: #ffffff; font-size: 0.88rem; display: block; max-width: 320px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(p.name)}</strong>
                <span style="font-size: 0.72rem; color: var(--admin-text-muted);">SKU: ${p.sku || 'N/A'}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="badge-folder ${folderClass}">📁 ${escapeHtml(p.folder || 'Productos')}</span>
          </td>
          <td><span style="font-size: 0.78rem; color: var(--admin-text-muted);">${escapeHtml(p.department || p.category)}</span></td>
          <td><strong>$${Number(p.price || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong></td>
          <td>
            <div class="stock-counter">
              <button type="button" class="btn-stock-adjust btn-stock-dec" data-id="${p.id}" title="Restar 1 unidad">-</button>
              <input type="number" class="stock-input stock-val-input" data-id="${p.id}" value="${p.stock}" min="0" />
              <button type="button" class="btn-stock-adjust btn-stock-inc" data-id="${p.id}" title="Sumar 1 unidad">+</button>
            </div>
          </td>
          <td>
            <span class="badge-status ${badgeStockClass}">${badgeStockText}</span>
          </td>
          <td style="text-align: right;">
            <div style="display: flex; gap: 0.4rem; justify-content: flex-end;">
              <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm btn-edit-prod" data-id="${p.id}" title="Editar información del producto">✏️ Editar</button>
              <button type="button" class="btn-admin btn-admin-danger btn-admin-sm btn-delete-prod" data-id="${p.id}" title="Dar de baja producto">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Listeners de ajuste rápido de stock
    DOM.tableStockBody.querySelectorAll('.btn-stock-dec').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const input = DOM.tableStockBody.querySelector(`.stock-val-input[data-id="${id}"]`);
        const current = parseInt(input.value, 10) || 0;
        const updated = Math.max(0, current - 1);
        input.value = updated;
        window.AdminDB.setProductStock(id, updated);
      });
    });

    DOM.tableStockBody.querySelectorAll('.btn-stock-inc').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const input = DOM.tableStockBody.querySelector(`.stock-val-input[data-id="${id}"]`);
        const current = parseInt(input.value, 10) || 0;
        const updated = current + 1;
        input.value = updated;
        window.AdminDB.setProductStock(id, updated);
      });
    });

    DOM.tableStockBody.querySelectorAll('.stock-val-input').forEach(inp => {
      inp.addEventListener('change', () => {
        const id = inp.dataset.id;
        const val = Math.max(0, parseInt(inp.value, 10) || 0);
        inp.value = val;
        window.AdminDB.setProductStock(id, val);
        showToast('Stock actualizado correctamente', 'success');
      });
    });

    // Listener de editar y eliminar
    DOM.tableStockBody.querySelectorAll('.btn-edit-prod').forEach(btn => {
      btn.addEventListener('click', () => openEditProductModal(btn.dataset.id));
    });

    DOM.tableStockBody.querySelectorAll('.btn-delete-prod').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas dar de baja este producto del catálogo?')) {
          window.AdminDB.deleteProduct(btn.dataset.id);
          showToast('Producto dado de baja del catálogo', 'danger');
        }
      });
    });
  }

  // =========================================================================
  // MODALES & FORMULARIOS
  // =========================================================================
  function setupModals() {
    // Cerrar modales al hacer clic en botones de cierre o backdrop
    document.querySelectorAll('.btn-close-modal, .btn-modal-cancel').forEach(btn => {
      btn.addEventListener('click', () => closeAllModals());
    });

    document.querySelectorAll('.admin-modal-backdrop').forEach(bd => {
      bd.addEventListener('click', (e) => {
        if (e.target === bd) closeAllModals();
      });
    });

    // Formulario de Recargar / Ajustar Saldo
    const formBalance = document.getElementById('formAdjustBalance');
    if (formBalance) {
      formBalance.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!activeBalanceUser) return;

        const action = document.getElementById('balanceActionType').value;
        const amount = parseFloat(document.getElementById('balanceAmountInput').value) || 0;
        const reason = document.getElementById('balanceReasonInput').value.trim() || 'Ajuste en Panel Administrativo';

        if (amount <= 0) {
          alert('Por favor ingresa un monto válido mayor a 0');
          return;
        }

        let newBalance = activeBalanceUser.currentBalance;
        let changeDelta = amount;
        if (action === 'add') {
          newBalance += amount;
          changeDelta = amount;
        } else if (action === 'subtract') {
          newBalance = Math.max(0, newBalance - amount);
          changeDelta = -amount;
        } else if (action === 'set') {
          changeDelta = amount - newBalance;
          newBalance = amount;
        }

        window.AdminDB.updateUserBalance(activeBalanceUser.email, newBalance, reason, changeDelta);
        closeAllModals();
        showToast(`Saldo de ${activeBalanceUser.name || activeBalanceUser.email} actualizado a $${newBalance.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`, 'success');
      });
    }

    // Botón Nuevo Cliente
    const btnNewCustomer = document.getElementById('btnOpenNewCustomerModal');
    if (btnNewCustomer) {
      btnNewCustomer.addEventListener('click', () => {
        document.getElementById('formCustomer').reset();
        openModal(DOM.modalCustomer);
      });
    }

    // Guardar Nuevo Cliente
    const formCustomer = document.getElementById('formCustomer');
    if (formCustomer) {
      formCustomer.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('custFullName').value.trim();
        const email = document.getElementById('custEmail').value.trim().toLowerCase();
        const phone = document.getElementById('custPhone').value.trim();
        const initialBalance = parseFloat(document.getElementById('custInitialBalance').value) || 0;

        if (!fullName || !email) {
          alert('Por favor ingresa nombre y correo electrónico');
          return;
        }

        window.AdminDB.saveUser({
          id: 'usr_' + Date.now(),
          fullName,
          email,
          phone,
          balance: initialBalance,
          role: 'customer',
          createdAt: new Date().toISOString()
        });

        closeAllModals();
        showToast(`Cliente ${fullName} registrado con éxito con saldo de $${initialBalance.toLocaleString('es-MX')} MXN`, 'success');
      });
    }

    // Botón Nuevo Producto
    const btnNewProd = document.getElementById('btnOpenNewProductModal');
    if (btnNewProd) {
      btnNewProd.addEventListener('click', () => {
        activeEditProductId = null;
        document.getElementById('formProduct').reset();
        document.getElementById('modalProductTitle').textContent = '📦 Agregar Nuevo Producto';
        openModal(DOM.modalProduct);
      });
    }

    // Guardar / Editar Producto
    const formProduct = document.getElementById('formProduct');
    if (formProduct) {
      formProduct.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('prodNameInput').value.trim();
        const category = document.getElementById('prodCategoryInput').value;
        const department = document.getElementById('prodDeptInput').value.trim() || category;
        const price = parseFloat(document.getElementById('prodPriceInput').value) || 0;
        const originalPrice = parseFloat(document.getElementById('prodOrigPriceInput').value) || price;
        const stock = parseInt(document.getElementById('prodStockInput').value, 10) || 0;
        const image = document.getElementById('prodImageInput').value.trim() || 'assets/images/prod_shoes.jpg';
        const description = document.getElementById('prodDescInput').value.trim();

        if (!name || price <= 0) {
          alert('Ingresa el nombre del producto y un precio válido');
          return;
        }

        const productData = {
          id: activeEditProductId || ('prod-custom-' + Date.now()),
          name,
          category,
          department,
          price,
          originalPrice,
          stock,
          image,
          description,
          inStock: stock > 0
        };

        window.AdminDB.saveProduct(productData);
        closeAllModals();
        showToast(activeEditProductId ? 'Producto actualizado con éxito' : 'Nuevo producto agregado al catálogo', 'success');
      });
    }

    // Backup & Exportación
    const btnExportDB = document.getElementById('btnExportDatabase');
    if (btnExportDB) {
      btnExportDB.addEventListener('click', () => {
        const data = window.AdminDB.exportFullDatabase();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `callejon_magico_backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Respaldo de Base de Datos exportado', 'success');
      });
    }
  }

  function openBalanceModal(email, name, currentBalance) {
    activeBalanceUser = { email, name, currentBalance };
    document.getElementById('balanceClientName').textContent = name || email;
    document.getElementById('balanceClientEmail').textContent = email;
    document.getElementById('balanceCurrentDisplay').textContent = '$' + Number(currentBalance || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 }) + ' MXN';
    document.getElementById('balanceAmountInput').value = '';
    document.getElementById('balanceReasonInput').value = 'Abono en sucursal / Recarga de saldo';
    openModal(DOM.modalBalance);
  }

  function openEditProductModal(productId) {
    const products = window.AdminDB.getAllProductsWithStock();
    const p = products.find(x => x.id === productId);
    if (!p) return;

    activeEditProductId = p.id;
    document.getElementById('modalProductTitle').textContent = '✏️ Editar Producto';
    document.getElementById('prodNameInput').value = p.name || '';
    document.getElementById('prodCategoryInput').value = p.category || 'tecnologia';
    document.getElementById('prodDeptInput').value = p.department || '';
    document.getElementById('prodPriceInput').value = p.price || 0;
    document.getElementById('prodOrigPriceInput').value = p.originalPrice || p.price || 0;
    document.getElementById('prodStockInput').value = p.stock || 0;
    document.getElementById('prodImageInput').value = p.image || '';
    document.getElementById('prodDescInput').value = p.description || '';

    openModal(DOM.modalProduct);
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
  }

  function closeAllModals() {
    document.querySelectorAll('.admin-modal-backdrop').forEach(m => m.classList.remove('active'));
    activeBalanceUser = null;
    activeEditProductId = null;
  }

  // =========================================================================
  // BÚSQUEDAS & FILTROS EN TIEMPO REAL
  // =========================================================================
  function setupFiltersAndSearches() {
    if (DOM.searchUsers) DOM.searchUsers.addEventListener('input', () => renderUsersTable());
    if (DOM.searchOrders) DOM.searchOrders.addEventListener('input', () => renderOrdersTable());
    if (DOM.filterOrderStatus) DOM.filterOrderStatus.addEventListener('change', () => renderOrdersTable());
    if (DOM.searchStock) DOM.searchStock.addEventListener('input', () => renderStockTable());
    if (DOM.filterStockFolder) DOM.filterStockFolder.addEventListener('change', () => renderStockTable());
    if (DOM.filterStockDept) DOM.filterStockDept.addEventListener('change', () => renderStockTable());
    if (DOM.filterStockStatus) DOM.filterStockStatus.addEventListener('change', () => renderStockTable());
  }

  // =========================================================================
  // HELPERS
  // =========================================================================
  function getMethodBadgeClass(method) {
    const m = (method || '').toLowerCase();
    if (m.includes('callejón') || m.includes('tienda')) return 'callejon';
    if (m.includes('efectivo') || m.includes('cash')) return 'cash';
    return 'card';
  }

  function getStatusClass(status) {
    switch (status) {
      case 'paid': case 'confirmed': return 'paid';
      case 'in-transit': return 'shipped';
      case 'delivered': return 'paid';
      case 'cancelled': return 'cancelled';
      default: return 'pending';
    }
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showToast(message, type = 'success') {
    const container = document.getElementById('adminToastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `admin-toast ${type}`;
    toast.innerHTML = `<span>${type === 'danger' ? '⚠️' : '✅'}</span> <div>${escapeHtml(message)}</div>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Ejecutar al cargar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdmin);
  } else {
    initAdmin();
  }

  window.AdminApp = {
    renderAll,
    switchView,
    showToast
  };
})();

