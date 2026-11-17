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
  let activeEditStaffId = null;

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
    kpiStaff: document.getElementById('kpiTotalStaff'),
    kpiActiveStaffMeta: document.getElementById('kpiActiveStaffMeta'),
    kpiFavorites: document.getElementById('kpiTotalFavorites'),
    kpiFavoritesMeta: document.getElementById('kpiFavoritesMeta'),

    // KPIs vista Favoritos
    favStatTotalProducts: document.getElementById('favStatTotalProducts'),
    favStatTotalWishes: document.getElementById('favStatTotalWishes'),
    favStatLowStock: document.getElementById('favStatLowStock'),
    favStatPotentialRev: document.getElementById('favStatPotentialRev'),

    // Tablas
    tableUsersBody: document.getElementById('adminUsersTableBody'),
    tableOrdersBody: document.getElementById('adminOrdersTableBody'),
    tableStockBody: document.getElementById('adminStockTableBody'),
    tableStaffBody: document.getElementById('adminStaffTableBody'),
    tableFavoritesBody: document.getElementById('adminFavoritesTableBody'),
    dashboardFavoritesBody: document.getElementById('dashboardFavoritesBody'),
    recentOrdersBody: document.getElementById('recentOrdersBody'),
    lowStockAlertList: document.getElementById('lowStockAlertList'),

    // Buscadores y Filtros
    searchUsers: document.getElementById('searchUsersInput'),
    filterCreditStatus: document.getElementById('filterCreditStatus'),
    searchOrders: document.getElementById('searchOrdersInput'),
    filterOrderStatus: document.getElementById('filterOrderStatus'),
    searchStock: document.getElementById('searchStockInput'),
    filterStockFolder: document.getElementById('filterStockFolder'),
    filterStockDept: document.getElementById('filterStockDept'),
    filterStockStatus: document.getElementById('filterStockStatus'),
    searchStaff: document.getElementById('searchStaffInput'),
    filterStaffDepartment: document.getElementById('filterStaffDepartment'),
    filterStaffStatus: document.getElementById('filterStaffStatus'),
    searchFavorites: document.getElementById('searchFavoritesInput'),
    filterFavoritesDept: document.getElementById('filterFavoritesDept'),
    filterFavoritesDemand: document.getElementById('filterFavoritesDemand'),
    filterFavoritesStock: document.getElementById('filterFavoritesStock'),

    // Modales
    modalBalance: document.getElementById('modalAdjustBalance'),
    modalStatement: document.getElementById('modalClientStatement'),
    modalProduct: document.getElementById('modalProductForm'),
    modalCustomer: document.getElementById('modalCustomerForm'),
    modalStaff: document.getElementById('modalStaffForm'),
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

    // Escuchar cambios de base de datos o almacenamiento en vivo con renderizado estabilizado
    let renderDebounceTimer = null;
    const scheduleRender = () => {
      if (renderDebounceTimer) cancelAnimationFrame(renderDebounceTimer);
      renderDebounceTimer = requestAnimationFrame(() => {
        renderAll();
      });
    };
    window.addEventListener('callejon_admin_db_changed', scheduleRender);
    window.addEventListener('storage', scheduleRender);

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
      inventory: { title: 'Inventario & Stock Restante', subtitle: 'Control de existencias disponibles y edición de productos' },
      staff: { title: 'Personal & Empleados', subtitle: 'Directorio de colaboradores, cargos, turnos y datos de contacto de la tienda' },
      favorites: { title: '❤️ Productos Favoritos de Clientes', subtitle: 'Monitoreo de listas de deseos, demanda de compra y disponibilidad en stock' }
    };

    const info = titles[viewId] || titles.dashboard;
    if (DOM.pageTitle) DOM.pageTitle.textContent = info.title;
    if (DOM.pageSubtitle) DOM.pageSubtitle.textContent = info.subtitle;
  }

  // =========================================================================
  // RENDER GENERAL
  // =========================================================================
  function renderAll() {
    if (window.AdminAuth && typeof window.AdminAuth.isAuthenticated === 'function' && !window.AdminAuth.isAuthenticated()) {
      return;
    }
    renderKPIs();
    renderDashboardOverview();
    renderUsersTable();
    renderOrdersTable();
    renderStockTable();
    renderStaffTable();
    renderFavoritesTable();
  }

  // 1. KPIs
  function renderKPIs() {
    const metrics = window.AdminDB.getMetrics();

    if (DOM.kpiUsers) DOM.kpiUsers.textContent = metrics.totalUsers;
    if (DOM.kpiSales) DOM.kpiSales.textContent = '$' + metrics.totalSales.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    if (DOM.kpiOrders) DOM.kpiOrders.textContent = metrics.totalOrders;
    if (DOM.kpiStock) DOM.kpiStock.textContent = metrics.totalUnitsStock.toLocaleString('es-MX') + ' unidades';
    if (DOM.kpiBalances) DOM.kpiBalances.textContent = '$' + metrics.totalCustomerBalances.toLocaleString('es-MX', { minimumFractionDigits: 2 });
    if (DOM.kpiStaff) DOM.kpiStaff.textContent = metrics.totalStaff || 0;
    if (DOM.kpiActiveStaffMeta) DOM.kpiActiveStaffMeta.textContent = `${metrics.activeStaff || 0} activos / ${metrics.totalStaff || 0} total`;
    if (DOM.kpiFavorites) DOM.kpiFavorites.textContent = metrics.totalFavorites || 0;
    if (DOM.kpiFavoritesMeta) DOM.kpiFavoritesMeta.textContent = `${metrics.totalWishes || 0} deseos de clientes`;

    // Insignias en navegación
    const badgeUsers = document.getElementById('navBadgeUsers');
    if (badgeUsers) badgeUsers.textContent = metrics.totalUsers;
    const badgeOrders = document.getElementById('navBadgeOrders');
    if (badgeOrders) badgeOrders.textContent = metrics.totalOrders;
    const badgeStock = document.getElementById('navBadgeStock');
    if (badgeStock) badgeStock.textContent = metrics.totalProductsCount;
    const badgeStaff = document.getElementById('navBadgeStaff');
    if (badgeStaff) badgeStaff.textContent = metrics.totalStaff || 0;
    const badgeFavorites = document.getElementById('navBadgeFavorites');
    if (badgeFavorites) badgeFavorites.textContent = metrics.totalFavorites || 0;
  }

  // 2. Dashboard Resumen
  function renderDashboardOverview() {
    const orders = window.AdminDB.getAllOrders().slice(0, 5);
    const products = window.AdminDB.getAllProductsWithStock();
    const lowStock = products.filter(p => p.stock <= 5).slice(0, 6);
    const favoritesData = window.AdminDB.getFavorites();
    const topFavorites = favoritesData.list.slice(0, 5);

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
              <img src="${p.image}" alt="" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;" onerror="this.src='../assets/images/prod_shoes.jpg'" />
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

    // Top Favoritos en Dashboard
    if (DOM.dashboardFavoritesBody) {
      if (!topFavorites.length) {
        DOM.dashboardFavoritesBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--admin-text-muted);">Aún no hay productos guardados en favoritos por los clientes.</td></tr>`;
      } else {
        DOM.dashboardFavoritesBody.innerHTML = topFavorites.map(fav => {
          let stockClass = 'instock';
          let stockLabel = `${fav.stock} disponibles`;
          if (fav.stock === 0) {
            stockClass = 'outofstock';
            stockLabel = '❌ Agotado';
          } else if (fav.stock <= 5) {
            stockClass = 'lowstock';
            stockLabel = `⚠️ ¡Solo ${fav.stock}!`;
          }

          let demandBadge = `<span class="badge-demand demand-alta">🔥 Alta Demanda</span>`;
          if (fav.demand === 'tendencia') demandBadge = `<span class="badge-demand demand-tendencia">⭐ En Tendencia</span>`;
          else if (fav.demand === 'oportunidad') demandBadge = `<span class="badge-demand demand-oportunidad">📈 Interés</span>`;

          return `
            <tr>
              <td>
                <div class="prod-thumb-cell">
                  <img src="${fav.image}" alt="" class="prod-thumb-img" onerror="this.src='../assets/images/prod_shoes.jpg'" />
                  <div>
                    <strong style="color: #ffffff; font-size: 0.88rem; display: block; max-width: 260px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(fav.name)}</strong>
                    <span style="font-size: 0.72rem; color: var(--admin-text-muted);">${fav.sku}</span>
                  </div>
                </div>
              </td>
              <td><span style="font-size: 0.78rem; color: var(--admin-text-muted);">${escapeHtml(fav.department)}</span></td>
              <td><strong>$${Number(fav.price || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong></td>
              <td>
                <span class="badge-heart-count">❤️ ${fav.count} ${fav.count === 1 ? 'cliente' : 'clientes'}</span>
              </td>
              <td>
                <span class="badge-status ${stockClass}">${stockLabel}</span>
              </td>
              <td>${demandBadge}</td>
              <td style="text-align: right;">
                <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm" onclick="window.AdminApp && window.AdminApp.switchView('favorites')">
                  Ver Detalles
                </button>
              </td>
            </tr>
          `;
        }).join('');
      }
    }
  }

  // =========================================================================
  // 3. TABLA DE CLIENTES & SALDOS (CUENTAS DE CRÉDITO)
  // =========================================================================
  function renderUsersTable() {
    if (!DOM.tableUsersBody) return;
    const users = window.AdminDB.getUsers();
    const query = (DOM.searchUsers ? DOM.searchUsers.value : '').trim().toLowerCase();
    const statusFilter = (DOM.filterCreditStatus ? DOM.filterCreditStatus.value : 'all');

    const filtered = users.filter(u => {
      const matchName = (u.fullName || '').toLowerCase().includes(query);
      const matchEmail = (u.email || '').toLowerCase().includes(query);
      const matchPhone = (u.phone || '').toLowerCase().includes(query);
      const matchCode = (u.clientCode || '').toLowerCase().includes(query);
      const matchSearch = matchName || matchEmail || matchPhone || matchCode;

      let matchStatus = true;
      if (statusFilter !== 'all') {
        matchStatus = (u.creditStatus || 'al-corriente') === statusFilter;
      }
      return matchSearch && matchStatus;
    });

    if (!filtered.length) {
      DOM.tableUsersBody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 2.5rem; color: var(--admin-text-muted);">No se encontraron cuentas de crédito con el criterio seleccionado.</td></tr>`;
      return;
    }

    DOM.tableUsersBody.innerHTML = filtered.map(u => {
      const initial = (u.fullName || u.email || 'U').charAt(0).toUpperCase();
      const dateStr = u.createdAt ? new Date(u.createdAt).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Reciente';
      const limitFmt = '$' + Number(u.creditLimit || 60000).toLocaleString('es-MX', { minimumFractionDigits: 2 });
      const balFmt = '$' + Number(u.balance || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 });
      const debtFmt = '$' + Number(u.debt || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 });
      const statusClass = u.creditStatus || 'al-corriente';
      const statusLabel = u.creditStatusLabel || 'Al corriente';

      return `
        <tr>
          <td>
            <div class="user-cell">
              <div class="user-cell-avatar">${initial}</div>
              <div>
                <strong style="font-size: 0.9rem; color: #ffffff;">${escapeHtml(u.fullName || 'Sin nombre')}</strong>
                <span style="font-size: 0.73rem; color: var(--admin-text-muted); display: block;">
                  <strong style="color: #94a3b8; font-family: monospace;">${escapeHtml(u.clientCode || 'CL-10001')}</strong> · ${escapeHtml(u.email)}
                </span>
              </div>
            </div>
          </td>
          <td>${escapeHtml(u.phone || 'No registrado')}</td>
          <td>${dateStr}</td>
          <td>
            <span class="credit-line-cell">${limitFmt}</span>
          </td>
          <td>
            <div style="font-size: 0.94rem; font-weight: 800; color: var(--admin-gold);">
              ${balFmt} MXN
            </div>
            <span style="font-size: 0.72rem; color: var(--admin-text-muted);">Deuda: ${debtFmt}</span>
          </td>
          <td>
            <span class="overdue-days-cell">${Number(u.daysOverdue || 0)} d</span>
          </td>
          <td>
            <span class="badge-credit-status ${statusClass}">${escapeHtml(statusLabel)}</span>
          </td>
          <td>
            <span style="font-weight: 700; color: #ffffff;">${u.ordersCount || 0} pedido(s)</span>
            <div style="font-size: 0.72rem; color: var(--admin-success);">$${Number(u.totalSpent || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</div>
          </td>
          <td style="text-align: right;">
            <div style="display: flex; gap: 0.45rem; justify-content: flex-end; align-items: center;">
              <button type="button" class="btn-admin btn-admin-primary btn-admin-sm btn-open-balance" data-email="${escapeHtml(u.email)}" data-name="${escapeHtml(u.fullName || '')}" data-balance="${u.balance || 0}">
                Abonar
              </button>
              <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm btn-open-statement" data-email="${escapeHtml(u.email)}">
                Estado
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Eventos de botones de Abonar y Estado
    DOM.tableUsersBody.querySelectorAll('.btn-open-balance').forEach(btn => {
      btn.addEventListener('click', () => {
        openBalanceModal(btn.dataset.email, btn.dataset.name, parseFloat(btn.dataset.balance));
      });
    });

    DOM.tableUsersBody.querySelectorAll('.btn-open-statement').forEach(btn => {
      btn.addEventListener('click', () => {
        openStatementModal(btn.dataset.email);
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

      const folderClass = p.folder === 'Productos 4' ? 'folder-p4' : (p.folder === 'Productos 3' ? 'folder-p3' : (p.folder === 'Productos 2' ? 'folder-p2' : 'folder-p1'));

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
  // 5. PERSONAL & EMPLEADOS DE LA TIENDA
  // =========================================================================
  function renderStaffTable() {
    if (!DOM.tableStaffBody) return;

    const staffList = window.AdminDB.getStaff();
    const query = (DOM.searchStaff ? DOM.searchStaff.value : '').trim().toLowerCase();
    const deptFilter = DOM.filterStaffDepartment ? DOM.filterStaffDepartment.value : 'all';
    const statusFilter = DOM.filterStaffStatus ? DOM.filterStaffStatus.value : 'all';

    const filtered = staffList.filter(emp => {
      if (deptFilter !== 'all' && emp.department !== deptFilter) return false;
      if (statusFilter !== 'all' && emp.status !== statusFilter) return false;

      if (!query) return true;
      const matchName = (emp.fullName || '').toLowerCase().includes(query);
      const matchCode = (emp.code || '').toLowerCase().includes(query);
      const matchRole = (emp.role || '').toLowerCase().includes(query);
      const matchDept = (emp.departmentName || '').toLowerCase().includes(query);
      const matchPhone = (emp.phone || '').toLowerCase().includes(query);
      const matchEmail = (emp.email || '').toLowerCase().includes(query);
      const matchBranch = (emp.branch || '').toLowerCase().includes(query);

      return matchName || matchCode || matchRole || matchDept || matchPhone || matchEmail || matchBranch;
    });

    if (filtered.length === 0) {
      DOM.tableStaffBody.innerHTML = `
        <tr>
          <td colspan="10" style="text-align: center; padding: 2.5rem; color: var(--admin-text-muted);">
            👔 No se encontraron colaboradores registrados con los criterios seleccionados.
          </td>
        </tr>
      `;
      return;
    }

    DOM.tableStaffBody.innerHTML = filtered.map(emp => {
      const initials = (emp.fullName || 'CM')
        .split(' ')
        .filter(Boolean)
        .map(w => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

      const rawPhone = (emp.phone || '').replace(/\D/g, '');
      const waLink = rawPhone ? `https://wa.me/52${rawPhone}` : '#';

      const deptBadgeClass = `badge-dept-${emp.department || 'boutique'}`;

      let statusBadge = '<span class="badge-status active">● Activo</span>';
      if (emp.status === 'vacaciones') {
        statusBadge = '<span class="badge-status pending">🏖️ Vacaciones</span>';
      } else if (emp.status === 'inactivo') {
        statusBadge = '<span class="badge-status cancelled">Inactivo / Baja</span>';
      }

      let formattedDate = emp.hireDate || 'Reciente';
      try {
        if (emp.hireDate) {
          const d = new Date(emp.hireDate + 'T00:00:00');
          if (!isNaN(d.getTime())) {
            formattedDate = d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
          }
        }
      } catch (e) {}

      return `
        <tr>
          <td>
            <div class="user-cell">
              <div class="user-cell-avatar" style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 1.5px solid rgba(223, 183, 67, 0.4); color: #dfb743;">
                ${initials}
              </div>
              <div>
                <strong style="color: #ffffff; font-size: 0.9rem; display: block;">${escapeHtml(emp.fullName)}</strong>
                <span style="font-size: 0.75rem; color: var(--admin-gold); font-family: monospace; font-weight: 700;">${escapeHtml(emp.code || 'EMP')}</span>
              </div>
            </div>
          </td>
          <td>
            <span style="font-weight: 600; color: #f1f5f9; font-size: 0.85rem;">${escapeHtml(emp.role || '-')}</span>
          </td>
          <td>
            <span class="badge-staff-dept ${deptBadgeClass}">
              ${escapeHtml(emp.departmentName || emp.department || 'General')}
            </span>
          </td>
          <td>
            ${emp.phone ? `
              <a href="${waLink}" target="_blank" class="btn-staff-whatsapp" title="Enviar WhatsApp a ${escapeHtml(emp.fullName)}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>${escapeHtml(emp.phone)}</span>
              </a>
            ` : '<span style="color: var(--admin-text-muted); font-size: 0.78rem;">No registrado</span>'}
          </td>
          <td>
            ${emp.email ? `
              <a href="mailto:${escapeHtml(emp.email)}" style="color: #93c5fd; font-size: 0.82rem; text-decoration: none;" title="Escribir correo">
                ${escapeHtml(emp.email)}
              </a>
            ` : '<span style="color: var(--admin-text-muted); font-size: 0.78rem;">-</span>'}
          </td>
          <td>
            <span style="font-size: 0.8rem; color: #cbd5e1; display: inline-flex; align-items: center; gap: 0.3rem;">
              🕒 ${escapeHtml(emp.shiftName || emp.shift || '-')}
            </span>
          </td>
          <td>
            <span style="font-size: 0.8rem; color: #94a3b8;">${escapeHtml(emp.branch || 'Matriz')}</span>
          </td>
          <td>
            <span style="font-size: 0.8rem; color: #cbd5e1;">${formattedDate}</span>
          </td>
          <td>
            ${statusBadge}
          </td>
          <td style="text-align: right; white-space: nowrap;">
            <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm btn-edit-staff" data-id="${emp.id}" title="Editar ficha de colaborador">
              ✏️ Editar
            </button>
            <button type="button" class="btn-admin btn-admin-sm btn-delete-staff" data-id="${emp.id}" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); margin-left: 0.35rem;" title="Dar de baja colaborador">
              🗑️
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Attach listeners
    DOM.tableStaffBody.querySelectorAll('.btn-edit-staff').forEach(btn => {
      btn.addEventListener('click', () => openEditStaffModal(btn.dataset.id));
    });

    DOM.tableStaffBody.querySelectorAll('.btn-delete-staff').forEach(btn => {
      btn.addEventListener('click', () => deleteStaffMember(btn.dataset.id));
    });
  }

  // =========================================================================
  // 6. TABLA DE PRODUCTOS FAVORITOS DE CLIENTES
  // =========================================================================
  function renderFavoritesTable() {
    if (!DOM.tableFavoritesBody) return;
    const favoritesData = window.AdminDB.getFavorites();
    const list = favoritesData.list || [];

    // Actualizar tarjetas de resumen en la vista de Favoritos
    if (DOM.favStatTotalProducts) DOM.favStatTotalProducts.textContent = favoritesData.totalFavoritesCount;
    if (DOM.favStatTotalWishes) DOM.favStatTotalWishes.textContent = favoritesData.totalWishesCount;
    if (DOM.favStatLowStock) DOM.favStatLowStock.textContent = favoritesData.lowStockFavoritesCount;
    if (DOM.favStatPotentialRev) DOM.favStatPotentialRev.textContent = '$' + favoritesData.potentialTotalRevenue.toLocaleString('es-MX', { minimumFractionDigits: 2 });

    const query = (DOM.searchFavorites ? DOM.searchFavorites.value : '').trim().toLowerCase();
    const deptFilter = (DOM.filterFavoritesDept ? DOM.filterFavoritesDept.value : 'all');
    const demandFilter = (DOM.filterFavoritesDemand ? DOM.filterFavoritesDemand.value : 'all');
    const stockFilter = (DOM.filterFavoritesStock ? DOM.filterFavoritesStock.value : 'all');

    const filtered = list.filter(fav => {
      // Búsqueda en nombre, SKU, departamento, o en clientes
      const matchProduct = (fav.name || '').toLowerCase().includes(query) ||
                           (fav.sku || '').toLowerCase().includes(query) ||
                           (fav.department || '').toLowerCase().includes(query) ||
                           (fav.category || '').toLowerCase().includes(query);
      const matchCustomer = (fav.customers || []).some(c => 
        (c.fullName || '').toLowerCase().includes(query) || 
        (c.email || '').toLowerCase().includes(query)
      );
      const matchSearch = matchProduct || matchCustomer;

      let matchDept = true;
      if (deptFilter !== 'all') {
        const cat = (fav.category || '').toLowerCase();
        const dept = (fav.department || '').toLowerCase();
        const f = deptFilter.toLowerCase();
        matchDept = cat.includes(f) || dept.includes(f);
      }

      let matchDemand = true;
      if (demandFilter !== 'all') {
        matchDemand = fav.demand === demandFilter;
      }

      let matchStock = true;
      if (stockFilter === 'instock') matchStock = fav.stock > 5;
      else if (stockFilter === 'lowstock') matchStock = fav.stock > 0 && fav.stock <= 5;
      else if (stockFilter === 'outofstock') matchStock = fav.stock === 0;

      return matchSearch && matchDept && matchDemand && matchStock;
    });

    if (!filtered.length) {
      DOM.tableFavoritesBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 3rem 1.5rem; color: var(--admin-text-muted);">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">💔</div>
            <p style="font-size: 0.95rem; font-weight: 600; color: #fff;">No se encontraron productos favoritos con los filtros seleccionados</p>
            <p style="font-size: 0.8rem; margin-top: 0.25rem;">Prueba limpiando la búsqueda o cambiando los filtros de departamento o demanda.</p>
          </td>
        </tr>
      `;
      return;
    }

    DOM.tableFavoritesBody.innerHTML = filtered.map(fav => {
      let badgeStockClass = 'instock';
      let badgeStockText = `${fav.stock} disponibles`;
      if (fav.stock === 0) {
        badgeStockClass = 'outofstock';
        badgeStockText = '❌ Agotado';
      } else if (fav.stock <= 5) {
        badgeStockClass = 'lowstock';
        badgeStockText = `⚠️ ¡Solo ${fav.stock}!`;
      }

      let demandBadge = `<span class="badge-demand demand-alta">🔥 Alta Demanda</span>`;
      if (fav.demand === 'tendencia') demandBadge = `<span class="badge-demand demand-tendencia">⭐ En Tendencia</span>`;
      else if (fav.demand === 'oportunidad') demandBadge = `<span class="badge-demand demand-oportunidad">📈 Interés</span>`;

      // Diagnóstico comercial
      let commercialDiagnosis = '';
      if (fav.stock === 0) {
        commercialDiagnosis = `<span class="badge-opp danger">⚠️ Reabastecer Urgente</span>`;
      } else if (fav.stock <= 5) {
        commercialDiagnosis = `<span class="badge-opp warning">⚡ Riesgo Agotamiento</span>`;
      } else if (fav.demand === 'alta') {
        commercialDiagnosis = `<span class="badge-opp gold">🔥 Oportunidad Estrella</span>`;
      } else {
        commercialDiagnosis = `<span class="badge-opp success">⭐ Alta Conversión</span>`;
      }

      // Renderizar tags de clientes
      const customersChips = (fav.customers || []).map(c => `
        <span class="fav-client-chip" title="Cliente: ${escapeHtml(c.fullName)} &#10;Email: ${escapeHtml(c.email)} &#10;Tel: ${escapeHtml(c.phone)}">
          <span class="fav-client-avatar">${escapeHtml((c.fullName || 'C').charAt(0).toUpperCase())}</span>
          <span class="fav-client-name">${escapeHtml(c.fullName)}</span>
        </span>
      `).join('');

      return `
        <tr>
          <td>
            <div class="prod-thumb-cell">
              <img src="${fav.image}" alt="" class="prod-thumb-img" onerror="this.src='../assets/images/prod_shoes.jpg'" />
              <div>
                <strong style="color: #ffffff; font-size: 0.88rem; display: block; max-width: 280px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(fav.name)}</strong>
                <span style="font-size: 0.72rem; color: var(--admin-text-muted);">SKU: ${fav.sku || 'N/A'}</span>
              </div>
            </div>
          </td>
          <td>
            <span style="font-size: 0.78rem; color: #cbd5e1; font-weight: 500;">${escapeHtml(fav.department)}</span>
          </td>
          <td>
            <strong>$${Number(fav.price || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong>
            <span style="display: block; font-size: 0.7rem; color: var(--admin-text-muted); font-weight: normal;">Potencial: $${fav.potentialRevenue.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          </td>
          <td>
            <div style="display: flex; flex-direction: column; gap: 0.3rem;">
              <span class="badge-heart-count">❤️ ${fav.count} ${fav.count === 1 ? 'cliente' : 'clientes'}</span>
              ${demandBadge}
            </div>
          </td>
          <td>
            <div class="fav-client-tags-container">
              ${customersChips}
            </div>
          </td>
          <td>
            <div class="stock-counter" style="margin-bottom: 0.35rem;">
              <button type="button" class="btn-stock-adjust btn-fav-stock-dec" data-id="${fav.id}" title="Restar 1 unidad">-</button>
              <input type="number" class="stock-input fav-stock-input" data-id="${fav.id}" value="${fav.stock}" min="0" />
              <button type="button" class="btn-stock-adjust btn-fav-stock-inc" data-id="${fav.id}" title="Sumar 1 unidad">+</button>
            </div>
            <span class="badge-status ${badgeStockClass}">${badgeStockText}</span>
          </td>
          <td>
            ${commercialDiagnosis}
          </td>
          <td style="text-align: right; white-space: nowrap;">
            <a href="index.html#search=${encodeURIComponent(fav.name)}" target="_blank" class="btn-admin btn-admin-secondary btn-admin-sm" title="Ver producto en la tienda pública">
              👁️ En Tienda
            </a>
          </td>
        </tr>
      `;
    }).join('');

    // Listeners para modificar existencias directamente desde la tabla de favoritos
    DOM.tableFavoritesBody.querySelectorAll('.btn-fav-stock-dec').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const input = DOM.tableFavoritesBody.querySelector(`.fav-stock-input[data-id="${id}"]`);
        const current = parseInt(input.value, 10) || 0;
        const updated = Math.max(0, current - 1);
        input.value = updated;
        window.AdminDB.setProductStock(id, updated);
      });
    });

    DOM.tableFavoritesBody.querySelectorAll('.btn-fav-stock-inc').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const input = DOM.tableFavoritesBody.querySelector(`.fav-stock-input[data-id="${id}"]`);
        const current = parseInt(input.value, 10) || 0;
        const updated = current + 1;
        input.value = updated;
        window.AdminDB.setProductStock(id, updated);
      });
    });

    DOM.tableFavoritesBody.querySelectorAll('.fav-stock-input').forEach(inp => {
      inp.addEventListener('change', () => {
        const id = inp.dataset.id;
        const val = Math.max(0, parseInt(inp.value, 10) || 0);
        inp.value = val;
        window.AdminDB.setProductStock(id, val);
        showToast('Stock actualizado correctamente', 'success');
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
      // Cambio de tipo de operación en modal de abono
      const actionSelect = document.getElementById('balanceActionType');
      if (actionSelect) {
        actionSelect.addEventListener('change', () => {
          if (!activeBalanceUser) return;
          const val = actionSelect.value;
          const amountInput = document.getElementById('balanceAmountInput');
          const reasonInput = document.getElementById('balanceReasonInput');
          if (val === 'liquidate' || val === 'pay-debt') {
            if (activeBalanceUser.debt > 0) {
              amountInput.value = activeBalanceUser.debt.toFixed(2);
            }
            reasonInput.value = val === 'liquidate' ? 'Liquidación total de deuda departamental en caja' : 'Abono a la deuda departamental en caja';
          } else if (val === 'add') {
            reasonInput.value = 'Recarga / Incremento de crédito en caja';
          }
        });
      }

      // Botón rápido de liquidar deuda completa
      const quickPayBtn = document.getElementById('btnQuickPayAllDebt');
      if (quickPayBtn) {
        quickPayBtn.addEventListener('click', () => {
          if (!activeBalanceUser) return;
          document.getElementById('balanceActionType').value = 'liquidate';
          document.getElementById('balanceAmountInput').value = (activeBalanceUser.debt || 0).toFixed(2);
          document.getElementById('balanceReasonInput').value = 'Liquidación total de deuda departamental en caja';
          formBalance.dispatchEvent(new Event('submit'));
        });
      }

      formBalance.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!activeBalanceUser) return;

        const action = document.getElementById('balanceActionType').value;
        const amount = parseFloat(document.getElementById('balanceAmountInput').value) || 0;
        const reason = document.getElementById('balanceReasonInput').value.trim() || 'Ajuste en Panel Administrativo';

        if (amount <= 0 && action !== 'liquidate') {
          alert('Por favor ingresa un monto válido mayor a 0');
          return;
        }

        // Operación 1: Pago o liquidación de deuda
        if (action === 'pay-debt' || action === 'liquidate') {
          const payAmt = action === 'liquidate' ? (activeBalanceUser.debt || 0) : amount;
          window.AdminDB.payUserDebt(activeBalanceUser.email, payAmt, reason);
          closeAllModals();
          showToast(`✅ Pago de $${payAmt.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN aplicado exitosamente a la cuenta de ${activeBalanceUser.name || activeBalanceUser.email}`, 'success');
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
        if (action === 'add' && typeof window.AdminDB.updateCreditAccount === 'function') {
          window.AdminDB.updateCreditAccount(activeBalanceUser.email, { resetOverdueOnPay: true });
        }
        closeAllModals();
        showToast(`Saldo de ${activeBalanceUser.name || activeBalanceUser.email} actualizado a $${newBalance.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`, 'success');
      });
    }

    // Formulario de parámetros de línea y atraso en Modal Estado de Cuenta
    const formCreditParams = document.getElementById('formUpdateCreditParams');
    if (formCreditParams) {
      formCreditParams.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!activeBalanceUser || !activeBalanceUser.email) return;
        const newLimit = parseFloat(document.getElementById('stmtInputLimit').value) || 60000;
        const newOverdue = Math.max(0, parseInt(document.getElementById('stmtInputOverdue').value, 10) || 0);
        window.AdminDB.updateCreditAccount(activeBalanceUser.email, {
          creditLimit: newLimit,
          daysOverdue: newOverdue
        });
        openStatementModal(activeBalanceUser.email);
        showToast('Parámetros de crédito (Línea y Atraso) actualizados correctamente', 'success');
      });
    }

    const btnStmtAbonar = document.getElementById('btnStmtOpenAbonar');
    if (btnStmtAbonar) {
      btnStmtAbonar.addEventListener('click', () => {
        if (!activeBalanceUser) return;
        const { email, name, currentBalance } = activeBalanceUser;
        closeAllModals();
        openBalanceModal(email, name, currentBalance);
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

    // Botón Nuevo Colaborador
    const btnNewStaff = document.getElementById('btnOpenNewStaffModal');
    if (btnNewStaff) {
      btnNewStaff.addEventListener('click', () => {
        activeEditStaffId = null;
        const formStaff = document.getElementById('formStaff');
        if (formStaff) formStaff.reset();
        const idInp = document.getElementById('staffIdInput');
        if (idInp) idInp.value = '';
        const staffList = window.AdminDB.getStaff();
        const nextNum = staffList.length + 101;
        const codeInp = document.getElementById('staffCodeInput');
        if (codeInp) codeInp.value = 'EMP-' + String(nextNum).padStart(4, '0');
        const hireInp = document.getElementById('staffHireDateInput');
        if (hireInp) hireInp.value = new Date().toISOString().slice(0, 10);
        const branchInp = document.getElementById('staffBranchInput');
        if (branchInp) branchInp.value = 'Matriz Plantel Centro';
        const titleEl = document.getElementById('modalStaffTitle');
        if (titleEl) titleEl.textContent = '👤 Registrar Nuevo Colaborador';
        openModal(DOM.modalStaff);
      });
    }

    // Guardar / Editar Colaborador
    const formStaff = document.getElementById('formStaff');
    if (formStaff) {
      formStaff.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = (document.getElementById('staffFullNameInput').value || '').trim();
        const code = (document.getElementById('staffCodeInput').value || '').trim();
        const role = (document.getElementById('staffRoleInput').value || '').trim();
        const department = document.getElementById('staffDepartmentInput').value;
        const phone = (document.getElementById('staffPhoneInput').value || '').trim();
        const email = (document.getElementById('staffEmailInput').value || '').trim();
        const shift = document.getElementById('staffShiftInput').value;
        const branch = (document.getElementById('staffBranchInput').value || '').trim();
        const hireDate = document.getElementById('staffHireDateInput').value;
        const salary = parseFloat(document.getElementById('staffSalaryInput').value) || 0;
        const status = document.getElementById('staffStatusInput').value;
        const notes = (document.getElementById('staffNotesInput').value || '').trim();

        if (!fullName) {
          alert('Por favor ingresa el nombre del colaborador');
          return;
        }

        const staffId = (document.getElementById('staffIdInput')?.value || activeEditStaffId || '').trim();

        const staffData = {
          id: staffId || undefined,
          code,
          fullName,
          role,
          department,
          phone,
          email,
          shift,
          branch,
          hireDate,
          salary,
          status,
          notes
        };

        window.AdminDB.saveStaff(staffData);
        activeEditStaffId = null;
        closeAllModals();
        showToast(staffId ? `Ficha de ${fullName} actualizada con éxito` : `Colaborador ${fullName} registrado en plantilla`, 'success');
        renderAll();
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

  function openBalanceModal(email, name, currentBalance, initialAction = 'pay-debt') {
    const users = window.AdminDB.getUsers();
    const u = users.find(x => (x.email || '').toLowerCase() === (email || '').toLowerCase()) || {};
    const limit = Number(u.creditLimit) || 60000;
    const balance = typeof currentBalance !== 'undefined' ? Number(currentBalance) : (Number(u.balance) || 0);
    const debt = typeof u.debt === 'number' ? Math.max(0, Number(u.debt)) : Math.max(0, limit - balance);

    activeBalanceUser = {
      email,
      name: name || u.fullName || email,
      currentBalance: balance,
      debt: debt,
      creditLimit: limit
    };

    const fmt = (n) => '$' + Number(n || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 }) + ' MXN';

    document.getElementById('balanceClientName').textContent = activeBalanceUser.name;
    document.getElementById('balanceClientEmail').textContent = email;

    const limitEl = document.getElementById('balanceLimitDisplay');
    if (limitEl) limitEl.textContent = fmt(limit);

    const balanceEl = document.getElementById('balanceCurrentDisplay');
    if (balanceEl) balanceEl.textContent = fmt(balance);

    const debtEl = document.getElementById('balanceDebtDisplay');
    if (debtEl) {
      debtEl.textContent = fmt(debt);
      debtEl.style.color = debt > 0 ? '#ef4444' : '#10b981';
    }

    const badgeEl = document.getElementById('balanceStatusBadge');
    if (badgeEl) {
      badgeEl.className = `badge-credit-status ${u.creditStatus || (debt > 0 ? 'al-corriente' : 'al-corriente')}`;
      badgeEl.textContent = u.creditStatusLabel || (debt > 0 ? 'Con saldo deudor' : 'Al corriente');
    }

    const actionSelect = document.getElementById('balanceActionType');
    const amountInput = document.getElementById('balanceAmountInput');
    const reasonInput = document.getElementById('balanceReasonInput');
    const quickPayBtn = document.getElementById('btnQuickPayAllDebt');
    const quickPayText = document.getElementById('btnQuickPayAmountText');

    if (debt > 0) {
      if (actionSelect) actionSelect.value = initialAction;
      if (quickPayBtn) {
        quickPayBtn.style.display = 'flex';
        if (quickPayText) quickPayText.textContent = `(${fmt(debt)})`;
      }
      amountInput.value = debt.toFixed(2);
      reasonInput.value = initialAction === 'liquidate' ? 'Liquidación total de deuda departamental' : 'Abono a la deuda departamental en caja';
    } else {
      if (actionSelect) actionSelect.value = 'add';
      if (quickPayBtn) quickPayBtn.style.display = 'none';
      amountInput.value = '';
      reasonInput.value = 'Recarga / Incremento de crédito en caja';
    }

    openModal(DOM.modalBalance);
  }

  function openStatementModal(email) {
    const users = window.AdminDB.getUsers();
    const u = users.find(x => (x.email || '').toLowerCase() === (email || '').toLowerCase());
    if (!u) return;

    activeBalanceUser = {
      email: u.email,
      name: u.fullName,
      currentBalance: u.balance,
      debt: u.debt || 0,
      creditLimit: u.creditLimit || 60000
    };

    const fmt = (n) => '$' + Number(n || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 });
    const codeEl = document.getElementById('stmtClientCode');
    const nameEl = document.getElementById('stmtClientName');
    const metaEl = document.getElementById('stmtClientMeta');
    const badgeEl = document.getElementById('stmtStatusBadge');
    const cardNumEl = document.getElementById('stmtCardNumber');
    const limitEl = document.getElementById('stmtCreditLimit');
    const availEl = document.getElementById('stmtAvailableBalance');
    const debtEl = document.getElementById('stmtUsedDebt');
    const overdueEl = document.getElementById('stmtDaysOverdue');
    const inputLimit = document.getElementById('stmtInputLimit');
    const inputOverdue = document.getElementById('stmtInputOverdue');
    const txListEl = document.getElementById('stmtTransactionsList');

    if (codeEl) codeEl.textContent = u.clientCode || 'CL-10001';
    if (nameEl) nameEl.textContent = u.fullName || 'Sin nombre';
    if (metaEl) metaEl.textContent = `${u.email} · Tel: ${u.phone || 'No registrado'}`;
    if (badgeEl) {
      badgeEl.className = `badge-credit-status ${u.creditStatus || 'al-corriente'}`;
      badgeEl.textContent = u.creditStatusLabel || 'Al corriente';
    }
    if (cardNumEl) cardNumEl.textContent = `Tarjeta: ${u.cardNumber || '4152 •••• •••• 8842'}`;
    if (limitEl) limitEl.textContent = fmt(u.creditLimit || 60000);
    if (availEl) availEl.textContent = fmt(u.balance || 0);
    if (debtEl) debtEl.textContent = fmt(u.debt || 0);
    if (overdueEl) overdueEl.textContent = `${Number(u.daysOverdue || 0)} d`;
    if (inputLimit) inputLimit.value = Number(u.creditLimit || 60000);
    if (inputOverdue) inputOverdue.value = Number(u.daysOverdue || 0);

    // Botón Liquidar Deuda en el modal de estado de cuenta
    const btnStmtPayDebt = document.getElementById('btnStmtPayAllDebt');
    if (btnStmtPayDebt) {
      if ((u.debt || 0) > 0) {
        btnStmtPayDebt.style.display = 'inline-block';
        btnStmtPayDebt.textContent = `💵 Liquidar Deuda (${fmt(u.debt)})`;
        btnStmtPayDebt.onclick = () => {
          closeAllModals();
          openBalanceModal(u.email, u.fullName, u.balance, 'liquidate');
        };
      } else {
        btnStmtPayDebt.style.display = 'none';
      }
    }
    if (inputOverdue) inputOverdue.value = Number(u.daysOverdue || 0);

    if (txListEl) {
      const txs = Array.isArray(u.transactions) ? u.transactions : [];
      if (!txs.length) {
        txListEl.innerHTML = `<div style="padding: 1.25rem; text-align: center; color: var(--admin-text-muted); font-size: 0.84rem;">No hay movimientos registrados en la tarjeta de este cliente.</div>`;
      } else {
        txListEl.innerHTML = txs.slice(0, 15).map(tx => {
          const amt = Number(tx.amount) || 0;
          const isPositive = amt > 0;
          return `
            <div class="statement-tx-row">
              <div>
                <strong style="color: #ffffff; font-size: 0.85rem; display: block;">${escapeHtml(tx.concept || 'Movimiento de tarjeta')}</strong>
                <span style="color: var(--admin-text-muted); font-size: 0.74rem;">${escapeHtml(tx.date || 'Reciente')}</span>
              </div>
              <strong style="font-size: 0.9rem; color: ${isPositive ? 'var(--admin-success)' : 'var(--admin-gold)'};">
                ${isPositive ? '+' : ''}${fmt(amt)} MXN
              </strong>
            </div>
          `;
        }).join('');
      }
    }

    openModal(DOM.modalStatement);
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

  function openEditStaffModal(staffId) {
    const emp = window.AdminDB.getStaffById(staffId);
    if (!emp) return;

    activeEditStaffId = emp.id;
    const titleEl = document.getElementById('modalStaffTitle');
    if (titleEl) titleEl.textContent = '✏️ Editar Ficha de Colaborador';
    const idInp = document.getElementById('staffIdInput');
    if (idInp) idInp.value = emp.id;
    const nameInp = document.getElementById('staffFullNameInput');
    if (nameInp) nameInp.value = emp.fullName || '';
    const codeInp = document.getElementById('staffCodeInput');
    if (codeInp) codeInp.value = emp.code || '';
    const roleInp = document.getElementById('staffRoleInput');
    if (roleInp) roleInp.value = emp.role || '';
    const deptInp = document.getElementById('staffDepartmentInput');
    if (deptInp) deptInp.value = emp.department || 'boutique';
    const phoneInp = document.getElementById('staffPhoneInput');
    if (phoneInp) phoneInp.value = emp.phone || '';
    const emailInp = document.getElementById('staffEmailInput');
    if (emailInp) emailInp.value = emp.email || '';
    const shiftInp = document.getElementById('staffShiftInput');
    if (shiftInp) shiftInp.value = emp.shift || 'completo';
    const branchInp = document.getElementById('staffBranchInput');
    if (branchInp) branchInp.value = emp.branch || 'Matriz Plantel Centro';
    const hireInp = document.getElementById('staffHireDateInput');
    if (hireInp) hireInp.value = emp.hireDate || '';
    const salaryInp = document.getElementById('staffSalaryInput');
    if (salaryInp) salaryInp.value = emp.salary || 0;
    const statusInp = document.getElementById('staffStatusInput');
    if (statusInp) statusInp.value = emp.status || 'activo';
    const notesInp = document.getElementById('staffNotesInput');
    if (notesInp) notesInp.value = emp.notes || '';

    openModal(DOM.modalStaff);
  }

  function deleteStaffMember(staffId) {
    const emp = window.AdminDB.getStaffById(staffId);
    const name = emp ? emp.fullName : 'este colaborador';
    if (confirm(`¿Estás seguro de que deseas dar de baja a ${name} de la plantilla de empleados?`)) {
      window.AdminDB.deleteStaff(staffId);
      showToast(`Colaborador ${name} eliminado del directorio`, 'danger');
      renderAll();
    }
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
  }

  function closeAllModals() {
    document.querySelectorAll('.admin-modal-backdrop').forEach(m => m.classList.remove('active'));
    activeBalanceUser = null;
    activeEditProductId = null;
    activeEditStaffId = null;
  }

  // =========================================================================
  // BÚSQUEDAS & FILTROS EN TIEMPO REAL
  // =========================================================================
  function setupFiltersAndSearches() {
    if (DOM.searchUsers) DOM.searchUsers.addEventListener('input', () => renderUsersTable());
    if (DOM.filterCreditStatus) DOM.filterCreditStatus.addEventListener('change', () => renderUsersTable());
    if (DOM.searchOrders) DOM.searchOrders.addEventListener('input', () => renderOrdersTable());
    if (DOM.filterOrderStatus) DOM.filterOrderStatus.addEventListener('change', () => renderOrdersTable());
    if (DOM.searchStock) DOM.searchStock.addEventListener('input', () => renderStockTable());
    if (DOM.filterStockFolder) DOM.filterStockFolder.addEventListener('change', () => renderStockTable());
    if (DOM.filterStockDept) DOM.filterStockDept.addEventListener('change', () => renderStockTable());
    if (DOM.filterStockStatus) DOM.filterStockStatus.addEventListener('change', () => renderStockTable());
    if (DOM.searchStaff) DOM.searchStaff.addEventListener('input', () => renderStaffTable());
    if (DOM.filterStaffDepartment) DOM.filterStaffDepartment.addEventListener('change', () => renderStaffTable());
    if (DOM.filterStaffStatus) DOM.filterStaffStatus.addEventListener('change', () => renderStaffTable());
    if (DOM.searchFavorites) DOM.searchFavorites.addEventListener('input', () => renderFavoritesTable());
    if (DOM.filterFavoritesDept) DOM.filterFavoritesDept.addEventListener('change', () => renderFavoritesTable());
    if (DOM.filterFavoritesDemand) DOM.filterFavoritesDemand.addEventListener('change', () => renderFavoritesTable());
    if (DOM.filterFavoritesStock) DOM.filterFavoritesStock.addEventListener('change', () => renderFavoritesTable());
  }

  // =========================================================================
  // HELPERS
  // =========================================================================
  function getMethodBadgeClass(method) {
    const m = (method || '').toLowerCase();
    if (m.includes('mixto') || m.includes('split')) return 'split';
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

