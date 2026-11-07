/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — SISTEMA DE GESTIÓN DE PEDIDOS Y RASTREO EN VIVO
 * Historial de Compras, Detalle de Artículos Adquiridos, Guías de Envío,
 * Línea de Tiempo de Rastreo e Integración con Carrito y Pasarela.
 * ==========================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'callejon_user_orders';

  // Pedido demostrativo inicial de cortesía para mostrar rastreo realista
  const INITIAL_DEMO_ORDERS = [
    {
      orderNum: 'CLM-784210',
      date: '28 de Octubre, 2026, 04:30 PM',
      timestamp: 1793200000000,
      status: 'in-transit',
      statusText: '🚚 En Ruta de Entrega',
      stepIndex: 3, // 1: Confirmado, 2: Empacado, 3: En Tránsito, 4: Entregado
      carrier: 'Estafeta Express',
      trackingNumber: 'EST-MX-849201948',
      estimatedDelivery: 'Mañana antes de las 6:00 PM',
      recipient: {
        name: 'Carlos Mendoza',
        phone: '55 9876 5432',
        street: '8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente (Plantel Centro)',
        city: 'Tapachula, Chiapas'
      },
      paymentMethod: 'Tarjeta Callejón Mágico (18 MSI)',
      pointsEarned: 245,
      subtotal: 5499.00,
      discount: 549.90,
      total: 4949.10,
      items: [
        {
          id: 'reloj-tissot-prx',
          name: 'Reloj Tissot PRX Powermatic 80',
          price: 4949.10,
          quantity: 1,
          size: '40mm',
          color: 'Azul Noche',
          image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  ];

  const OrdersEngine = {
    getOrders() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_ORDERS));
          return [...INITIAL_DEMO_ORDERS];
        }
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [...INITIAL_DEMO_ORDERS];
      } catch (e) {
        return [...INITIAL_DEMO_ORDERS];
      }
    },

    saveOrders(orders) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
      } catch (e) {
        console.error('Error al guardar pedidos:', e);
      }
    },

    /**
     * Registra un nuevo pedido completado en la pasarela de compra
     */
    addOrder(orderData) {
      const orders = this.getOrders();
      const newOrder = {
        orderNum: orderData.orderNum || ('CLM-' + Math.floor(100000 + Math.random() * 900000)),
        date: new Date().toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        timestamp: Date.now(),
        status: 'preparing',
        statusText: '📦 En Preparación Boutique',
        stepIndex: 2, // 1: Confirmado, 2: Empacado en bodega, 3: En ruta, 4: Entregado
        carrier: 'Estafeta Express',
        trackingNumber: 'EST-MX-' + Math.floor(100000000 + Math.random() * 900000000),
        estimatedDelivery: '48 a 72 horas hábiles',
        recipient: {
          name: orderData.recipient?.name || 'Cliente Callejón Mágico',
          phone: orderData.recipient?.phone || '55 1234 5678',
          street: orderData.recipient?.street || 'Paseo de la Reforma 222',
          city: orderData.recipient?.city || 'Ciudad de México'
        },
        paymentMethod: orderData.paymentMethod || 'Tarjeta Departamental Callejón Mágico',
        msi: orderData.msi || 1,
        pointsEarned: orderData.pointsEarned || Math.round(orderData.total * 0.05),
        subtotal: orderData.subtotal || orderData.total,
        discount: orderData.discount || 0,
        total: orderData.total || 0,
        items: Array.isArray(orderData.items) && orderData.items.length > 0 
          ? orderData.items 
          : [
              {
                id: 'prod-item-1',
                name: 'Selección Departamental Callejón Mágico',
                price: orderData.total || 1499,
                quantity: 1,
                size: 'Estándar',
                color: 'Edición Callejón Mágico',
                image: 'img/logo-icon.svg'
              }
            ]
      };

      orders.unshift(newOrder);
      this.saveOrders(orders);

      // Si hay usuario en sesión, vincularlo también a su cuenta
      try {
        const currentUserRaw = localStorage.getItem('davanti_current_user');
        if (currentUserRaw) {
          const u = JSON.parse(currentUserRaw);
          if (!u.orders) u.orders = [];
          u.orders.unshift(newOrder);
          localStorage.setItem('davanti_current_user', JSON.stringify(u));
        }
      } catch (err) {}

      return newOrder;
    }
  };

  const OrdersUI = {
    init() {
      this.injectModal();
      this.bindTriggers();
    },

    injectModal() {
      if (document.getElementById('ordersModal')) return;

      const modalHtml = `
        <div class="modal-window orders-modal" id="ordersModal" role="dialog" aria-modal="true" aria-label="Mis Pedidos y Rastreo">
          <button class="modal-close-btn" id="btnCloseOrdersModal" aria-label="Cerrar pedidos">&times;</button>
          
          <div class="orders-modal-header">
            <h2 class="orders-modal-title">Mis Pedidos & <span class="gold">Rastreo de Envíos</span></h2>
            <p class="orders-modal-subtitle">Consulta el estado en vivo de tus compras departamentales y números de guía oficial.</p>
          </div>

          <div id="ordersModalContent">
            <!-- Renderizado dinámico de pedidos -->
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);

      document.getElementById('btnCloseOrdersModal')?.addEventListener('click', () => {
        this.closeModal();
      });
    },

    renderOrders() {
      const container = document.getElementById('ordersModalContent');
      if (!container) return;

      const orders = OrdersEngine.getOrders();

      if (!orders || orders.length === 0) {
        container.innerHTML = `
          <div class="orders-empty-state">
            <div class="orders-empty-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 class="orders-empty-title">Aún no tienes pedidos registrados</h3>
            <p class="orders-empty-desc">Tus compras y códigos de seguimiento en tiempo real aparecerán aquí en cuanto confirmes un pedido.</p>
            <button type="button" class="btn-checkout-primary" onclick="CallejonOrders.closeModal();" style="max-width: 240px; margin: 0 auto;">
              Explorar Catálogo
            </button>
          </div>
        `;
        return;
      }

      const ordersHtml = `
        <div class="orders-list">
          ${orders.map(order => {
            const step = order.stepIndex || 2;
            const fillWidth = step === 1 ? '0%' : step === 2 ? '33%' : step === 3 ? '66%' : '100%';

            return `
              <article class="order-card" id="order-card-${order.orderNum}">
                
                <!-- Encabezado de la orden -->
                <div class="order-card-header">
                  <div class="order-id-group">
                    <span class="order-number-text">Pedido #${order.orderNum}</span>
                    <span class="order-date-text">📅 ${order.date}</span>
                  </div>
                  <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <button type="button" class="btn-ticket-pill-header" onclick="if(window.CallejonTicket){CallejonTicket.open('${order.orderNum}');}" style="background: #ffffff; color: #0b1b3d; border: 1.5px solid #C58F38; padding: 0.25rem 0.65rem; border-radius: 9999px; font-size: 0.74rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem; transition: all 0.2s ease;">
                      🧾 Ver Ticket
                    </button>
                    <span class="order-status-badge ${step >= 4 ? 'delivered' : step === 3 ? 'in-transit' : 'preparing'}">
                      ${order.statusText || '📦 En Preparación'}
                    </span>
                  </div>
                </div>

                <!-- Línea de Tiempo de Rastreo en Vivo -->
                <div class="order-tracking-stepper-box">
                  <div class="order-stepper-track">
                    <div class="order-stepper-line">
                      <div class="order-stepper-line-fill" style="width: ${fillWidth};"></div>
                    </div>

                    <div class="order-stepper-step ${step >= 1 ? 'completed' : ''}">
                      <div class="order-step-dot">${step > 1 ? '✓' : '1'}</div>
                      <span class="order-step-label">Confirmado</span>
                    </div>

                    <div class="order-stepper-step ${step >= 2 ? (step > 2 ? 'completed' : 'active') : ''}">
                      <div class="order-step-dot">${step > 2 ? '✓' : '2'}</div>
                      <span class="order-step-label">Empaque Boutique</span>
                    </div>

                    <div class="order-stepper-step ${step >= 3 ? (step > 3 ? 'completed' : 'active') : ''}">
                      <div class="order-step-dot">${step > 3 ? '✓' : '3'}</div>
                      <span class="order-step-label">En Tránsito</span>
                    </div>

                    <div class="order-stepper-step ${step >= 4 ? 'completed' : ''}">
                      <div class="order-step-dot">4</div>
                      <span class="order-step-label">Entregado</span>
                    </div>
                  </div>

                  <!-- Información de Guía y Entrega -->
                  <div class="order-carrier-info-bar">
                    <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
                      <span>Guía ${order.carrier}: <strong>${order.trackingNumber}</strong></span>
                      <button type="button" class="btn-copy-tracking" onclick="navigator.clipboard?.writeText('${order.trackingNumber}'); if(window.DavantiApp){DavantiApp.showToast('Guía copiada: ${order.trackingNumber}');}">
                        📋 Copiar
                      </button>
                      <button type="button" class="btn-copy-tracking" onclick="if(window.CallejonTicket){CallejonTicket.open('${order.orderNum}');}" style="background: #0B1B3D; color: #ffffff; border-color: #C58F38;">
                        🧾 Ticket
                      </button>
                      <button type="button" class="btn-copy-tracking" onclick="if(window.CallejonTicket){CallejonTicket.sendEmailFromOrder('${order.orderNum}');}" style="background: #059669; color: #ffffff; border-color: #059669;">
                        ✉️ Enviar Correo
                      </button>
                      <button type="button" class="btn-copy-tracking" onclick="if(window.CallejonTicket){CallejonTicket.sendWhatsAppFromOrder('${order.orderNum}', '${order.recipient?.phone || '962 401 4408'}');}" style="background: #25D366; color: #ffffff; border-color: #25D366;">
                        📲 WhatsApp
                      </button>
                    </div>
                    <div>
                      <span>🕒 Entrega: <strong>${order.estimatedDelivery}</strong></span>
                    </div>
                    <div>
                      <span>📍 Destino: <strong>${order.recipient.city}</strong></span>
                    </div>
                  </div>
                </div>

                <!-- Detalle de Productos Comprados (Lo que compré) -->
                <div class="order-items-wrapper">
                  <div style="font-size: 0.82rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.04em;">
                    Artículos en este paquete (${order.items.reduce((s, i) => s + (i.quantity || 1), 0)} pieza(s)):
                  </div>
                  
                  ${order.items.map(item => `
                    <div class="order-item-row">
                      <div class="order-item-left">
                        <img src="${item.image || 'img/logo-icon.svg'}" alt="${item.name}" class="order-item-thumb" onerror="this.src='img/logo-icon.svg'" />
                        <div class="order-item-details">
                          <span class="order-item-name">${item.name}</span>
                          <span class="order-item-specs">
                            ${item.size ? `Talla: <strong>${item.size}</strong> ` : ''}
                            ${item.color ? `• Color: <strong>${item.color}</strong> ` : ''}
                          </span>
                          <span class="order-item-qty">Cantidad: ${item.quantity || 1}</span>
                        </div>
                      </div>
                      <div class="order-item-price">
                        $${((item.price || 0) * (item.quantity || 1)).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- Resumen de Pago y Puntos Mágicos -->
                <div class="order-card-footer">
                  <div class="order-footer-details">
                    <span>💳 <strong>Método:</strong> ${order.paymentMethod}</span>
                    <span>👤 <strong>Destinatario:</strong> ${order.recipient.name} (${order.recipient.phone})</span>
                    <span>📍 <strong>Dirección:</strong> ${order.recipient.street}</span>
                  </div>

                  <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem;">
                    <div class="order-total-badge">
                      Total: $${Number(order.total).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                    </div>
                    <div class="order-points-pill">
                      ✨ +${order.pointsEarned || 0} Puntos Mágicos
                    </div>
                  </div>
                </div>

              </article>
            `;
          }).join('')}
        </div>
      `;

      container.innerHTML = ordersHtml;
    },

    openModal(targetOrderNum) {
      this.injectModal();
      this.renderOrders();

      const modal = document.getElementById('ordersModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) {
        modal.classList.add('active');
        if (backdrop) backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (targetOrderNum) {
          setTimeout(() => {
            const card = document.getElementById(`order-card-${targetOrderNum}`);
            if (card) {
              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
              card.style.borderColor = '#c58f38';
              card.style.boxShadow = '0 0 0 3px rgba(197, 143, 56, 0.4)';
            }
          }, 200);
        }
      }
    },

    closeModal() {
      const modal = document.getElementById('ordersModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) modal.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    },

    bindTriggers() {
      // 1. Abrir modal al hacer clic en enlaces de pedidos o rastreo
      document.addEventListener('click', (e) => {
        const trigger = e.target && typeof e.target.closest === 'function'
          ? e.target.closest('a[href="#pedidos"], a[href="#rastreo"], .open-orders-modal-btn')
          : null;

        if (trigger) {
          e.preventDefault();
          this.openModal();
          return;
        }

        // 2. Cerrar al hacer clic en cualquier parte fuera del cuadro de pedidos cuando esté abierto
        const modal = document.getElementById('ordersModal');
        if (modal && modal.classList.contains('active')) {
          if (!modal.contains(e.target)) {
            this.closeModal();
          }
        }
      });

      // 3. Cerrar al hacer clic en el fondo borroso (backdrop)
      document.getElementById('modalBackdrop')?.addEventListener('click', () => {
        this.closeModal();
      });

      // 4. Cerrar con tecla Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal();
        }
      });
    }
  };

  // Exponer API global
  window.CallejonOrders = {
    getOrders: OrdersEngine.getOrders.bind(OrdersEngine),
    addOrder: OrdersEngine.addOrder.bind(OrdersEngine),
    openModal: OrdersUI.openModal.bind(OrdersUI),
    closeModal: OrdersUI.closeModal.bind(OrdersUI),
    openTicket: (orderNum) => {
      if (window.CallejonTicket && typeof window.CallejonTicket.open === 'function') {
        window.CallejonTicket.open(orderNum);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => OrdersUI.init());
  } else {
    OrdersUI.init();
  }
})();

