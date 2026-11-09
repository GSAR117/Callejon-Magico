/**
 * ==========================================================================
 * TARJETA CALLEJÓN MÁGICO — SISTEMA DE CRÉDITO Y FINANCIAMIENTO 18 MSI
 * Módulo integral de Tarjeta Departamental Digital, Gestión de Saldo,
 * Aprobación Inmediata, Vinculación Dinámica de Usuario, Acumulación
 * de Puntos Mágicos por Compra y Protocolo de Abonos en Sucursal.
 * ==========================================================================
 */

(function () {
  'use strict';

  const STORAGE_USERS_CARDS_KEY = 'callejon_cards_by_user';
  const STORAGE_LEGACY_KEY = 'callejon_card_data';

  // Base card configuration for Demo User (Carlos Mendoza)
  const DEMO_CARD = {
    cardNumber: '4152 8890 2419 7730',
    expiry: '08/30',
    cvc: '824',
    tier: 'ORO DEPARTAMENTAL',
    creditLimit: 35000,
    balance: 28450,
    points: 1420,
    statementDay: 15,
    isActive: true,
    transactions: [
      { id: 'tx-101', concept: 'Pantalla Sony BRAVIA 4K 65"', amount: 6550, pointsEarned: 328, date: '2026-10-24', msi: 18 },
      { id: 'tx-102', concept: 'Abono a cuenta bancaria', amount: -2000, pointsEarned: 0, date: '2026-10-28', msi: 1 }
    ]
  };

  // Base card placeholder when there is no active session
  const GUEST_CARD = {
    cardNumber: '•••• •••• •••• ••••',
    expiry: '••/••',
    cvc: '•••',
    tier: 'ORO DEPARTAMENTAL',
    creditLimit: 35000,
    balance: 0,
    points: 0,
    statementDay: 15,
    isActive: false,
    transactions: []
  };

  /**
   * Helper to resolve the active user from localStorage or DavantiAuth
   */
  function getActiveUser() {
    try {
      if (window.DavantiAuth && typeof window.DavantiAuth.getCurrentUser === 'function') {
        const u = window.DavantiAuth.getCurrentUser();
        if (u && (u.fullName || u.email || u.id)) return u;
      }
      const raw = localStorage.getItem('davanti_current_user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Generates a normalized user key for storage
   */
  function getUserKey(user) {
    if (!user) return null;
    return (user.id || user.email || user.username || '').toLowerCase().trim();
  }

  /**
   * Genera un número de tarjeta único, exclusivo y determinista para cada usuario
   * Formato departamental Callejón Mágico: 4152 XXXX XXXX XXXX
   */
  function generateCardForUser(user) {
    if (!user) return { ...GUEST_CARD };
    const key = getUserKey(user);

    // Si es el usuario demo oficial (Carlos Mendoza), mantener su tarjeta oficial
    if (key === 'usr_demo_1' || (user.email && user.email.toLowerCase() === 'carlos@callejonmagico.com')) {
      return { ...DEMO_CARD };
    }

    // Hash determinista del identificador único del usuario (ID, email y username)
    // Garantiza que cada usuario reciba un número diferente y que siempre sea el mismo para él
    let h1 = 0xdeadbeef, h2 = 0x41c64e6d;
    for (let i = 0; i < key.length; i++) {
      const ch = key.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    const num1 = Math.abs(h1) % 1000000;
    const num2 = Math.abs(h2) % 1000000;
    const d12 = (String(num1).padStart(6, '7') + String(num2).padStart(6, '3')).slice(0, 12);

    // 4152 (BIN Callejón Mágico) + 12 dígitos generados exclusivamente para este usuario
    const cardNumber = '4152 ' + d12.slice(0, 4) + ' ' + d12.slice(4, 8) + ' ' + d12.slice(8, 12);
    const month = String((Math.abs(h1) % 12) + 1).padStart(2, '0');
    const expiryYear = 30 + (Math.abs(h2) % 3); // 2030, 2031 o 2032
    const expiry = `${month}/${expiryYear}`;
    const cvc = String(Math.abs(h2) % 900 + 100);

    return {
      cardNumber: cardNumber,
      expiry: expiry,
      cvc: cvc,
      tier: 'ORO DEPARTAMENTAL',
      creditLimit: 35000,
      balance: 35000,
      points: 500, // Bono de bienvenida por apertura de cuenta
      statementDay: 15,
      isActive: true,
      transactions: [
        {
          id: 'tx-init-' + Date.now(),
          concept: 'Aprobación y Apertura de Tarjeta Callejón Mágico Oro Departamental',
          amount: 0,
          pointsEarned: 500,
          date: new Date().toISOString().split('T')[0],
          msi: 1
        }
      ]
    };
  }

  /**
   * Resolves cardholder display state:
   * - Logged in: Real user full name in UPPERCASE.
   * - Not logged in: Masked placeholder (•••• ••••) and unassigned flag.
   */
  function getCardHolderState() {
    const user = getActiveUser();
    if (user && user.fullName && user.fullName.trim()) {
      return {
        isLoggedIn: true,
        displayName: user.fullName.trim().toUpperCase(),
        user: user
      };
    }
    return {
      isLoggedIn: false,
      displayName: '•••• ••••',
      user: null
    };
  }

  const CardEngine = {
    getAllCards() {
      try {
        const stored = localStorage.getItem(STORAGE_USERS_CARDS_KEY);
        return stored ? JSON.parse(stored) : {};
      } catch (e) {
        return {};
      }
    },

    saveAllCards(allCards) {
      try {
        localStorage.setItem(STORAGE_USERS_CARDS_KEY, JSON.stringify(allCards));
      } catch (e) {
        console.error('Error al guardar mapa de tarjetas de usuarios:', e);
      }
    },

    getCard() {
      const user = getActiveUser();
      const userKey = getUserKey(user);

      // Si no hay usuario activo en sesión, devolver plantilla de tarjeta protegida/enmascarada
      if (!userKey) {
        return { ...GUEST_CARD };
      }

      // Si hay usuario en sesión, buscar o crear su tarjeta personal única
      const allCards = this.getAllCards();
      let userCard = allCards[userKey];

      if (!userCard) {
        userCard = generateCardForUser(user);
        allCards[userKey] = userCard;
        this.saveAllCards(allCards);
      }

      // Validar valores numéricos mínimos
      if (typeof userCard.points !== 'number') userCard.points = 500;
      if (!Array.isArray(userCard.transactions)) userCard.transactions = [];

      // Sincronizar clave de compatibilidad
      try {
        localStorage.setItem(STORAGE_LEGACY_KEY, JSON.stringify(userCard));
      } catch (e) {}

      return userCard;
    },

    saveCard(data) {
      try {
        const user = getActiveUser();
        const userKey = getUserKey(user);
        if (userKey) {
          const allCards = this.getAllCards();
          allCards[userKey] = data;
          this.saveAllCards(allCards);
        }
        localStorage.setItem(STORAGE_LEGACY_KEY, JSON.stringify(data));
        this.updateCardUI();
      } catch (e) {
        console.error('Error al guardar datos de tarjeta:', e);
      }
    },

    /**
     * Sube los Puntos Mágicos por cada compra que se realice en la tienda
     */
    addPoints(points, concept) {
      const user = getActiveUser();
      if (!user) return 0; // Sin usuario no hay cuenta para acreditar puntos

      const card = this.getCard();
      const pts = Math.max(1, Math.round(Number(points) || 0));
      card.points = (Number(card.points) || 0) + pts;

      card.transactions.unshift({
        id: 'tx-pts-' + Date.now(),
        concept: concept || 'Puntos Mágicos acumulados por compra',
        amount: 0,
        pointsEarned: pts,
        date: new Date().toISOString().split('T')[0],
        msi: 1
      });

      this.saveCard(card);
      return card.points;
    },

    /**
     * Procesa cargo con Tarjeta Callejón Mágico
     */
    charge(amount, concept, msi = 1) {
      const holderState = getCardHolderState();

      if (!holderState.isLoggedIn || !holderState.user) {
        return {
          success: false,
          requireLogin: true,
          message: '🔒 Debes iniciar sesión con tu cuenta para pagar con tu Tarjeta Callejón Mágico.'
        };
      }

      const card = this.getCard();
      const cardholderName = holderState.displayName;

      // Validación de saldo: si el crédito disponible es 0
      if (card.balance <= 0) {
        return {
          success: false,
          limitReached: true,
          message: '⚠️ Has alcanzado el límite de tu Tarjeta Callejón Mágico. Para continuar realizando compras o abonar a tu saldo, por favor acude a tu sucursal departamental Callejón Mágico más cercana.'
        };
      }

      if (card.balance < amount) {
        return {
          success: false,
          limitReached: true,
          message: `⚠️ Tu saldo disponible ($${card.balance.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN) no es suficiente para cubrir esta compra de $${amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN.`
        };
      }

      // Descontar saldo y sumar Puntos Mágicos (5% de cashback en puntos)
      card.balance = Math.max(0, card.balance - amount);
      const pointsEarned = Math.round(amount * 0.05);
      card.points = (Number(card.points) || 0) + pointsEarned;

      card.transactions.unshift({
        id: 'tx-' + Date.now(),
        concept: concept || 'Compra en Callejón Mágico',
        amount: amount,
        pointsEarned: pointsEarned,
        date: new Date().toISOString().split('T')[0],
        msi: msi
      });

      this.saveCard(card);
      return { success: true, newBalance: card.balance, pointsEarned, totalPoints: card.points, cardholderName, cardNumber: card.cardNumber };
    },

    /**
     * Gestión de abono a la tarjeta
     */
    payBalance(amount) {
      const holderState = getCardHolderState();
      
      // Validación 1: Sin sesión no se puede abonar
      if (!holderState.isLoggedIn) {
        return {
          success: false,
          requireLogin: true,
          message: '🔒 Debes iniciar sesión con tu cuenta para abonar a tu Tarjeta Callejón Mágico.'
        };
      }

      const card = this.getCard();

      // Validación 2: Si el saldo disponible es 0 o menor (límite de crédito agotado)
      // Debe acudir a sucursal
      if (card.balance <= 0) {
        return {
          success: false,
          limitReached: true,
          message: '⚠️ Has alcanzado el límite de tu Tarjeta Callejón Mágico. Para abonar a tu saldo y reactivar tu línea de crédito, por favor acude al área de Cajas de tu sucursal departamental Callejón Mágico más cercana.'
        };
      }

      // Validación 3: Si ya está en su límite máximo de crédito ($35,000)
      if (card.balance >= card.creditLimit) {
        return {
          success: false,
          atLimit: true,
          message: `⚠️ Tu Tarjeta Callejón Mágico ya cuenta con el 100% de saldo disponible ($${card.creditLimit.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN). No es posible abonar más saldo. Si deseas una ampliación de tu línea de crédito, por favor acude a tu sucursal Callejón Mágico más cercana.`
        };
      }

      const maxPayable = card.creditLimit - card.balance;
      const actualAmount = Math.min(amount, maxPayable);

      card.balance += actualAmount;
      card.transactions.unshift({
        id: 'tx-' + Date.now(),
        concept: 'Abono a tu Tarjeta Callejón Mágico',
        amount: -actualAmount,
        pointsEarned: 0,
        date: new Date().toISOString().split('T')[0],
        msi: 1
      });

      this.saveCard(card);
      const reachedLimit = card.balance >= card.creditLimit;

      return {
        success: true,
        balance: card.balance,
        reachedLimit: reachedLimit,
        message: reachedLimit
          ? `¡Abono registrado! Tu tarjeta ha alcanzado su límite total de crédito disponible ($${card.creditLimit.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN). Si deseas una ampliación, acude a tu sucursal Callejón Mágico más cercana.`
          : `¡Abono exitoso! Se han acreditado $${actualAmount.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN a tu saldo.`
      };
    },

    updateCardUI() {
      const card = this.getCard();
      const holderState = getCardHolderState();
      
      // Elementos de métricas del modal
      const limitEl = document.getElementById('cardMetricLimit');
      const balanceEl = document.getElementById('cardMetricBalance');
      const pointsEl = document.getElementById('cardMetricPoints');
      const numberEl = document.getElementById('cardDisplayNumber');
      const holderEl = document.getElementById('cardDisplayHolder');
      const expiryEl = document.getElementById('cardDisplayExpiry');
      const btnAbonar = document.getElementById('btnAbonarTarjeta');
      const metricsGrid = document.querySelector('.card-metrics-grid');
      const reqText = document.getElementById('sucursalRequirementsText');

      // Actualizar Número de Tarjeta: Único por usuario, o protegido si es invitado
      if (numberEl) {
        if (holderState.isLoggedIn) {
          numberEl.textContent = card.cardNumber;
          numberEl.style.letterSpacing = '0.14em';
          numberEl.style.opacity = '1';
          numberEl.title = `Tarjeta única de ${holderState.displayName}: ${card.cardNumber}`;
        } else {
          numberEl.textContent = '•••• •••• •••• ••••';
          numberEl.style.letterSpacing = '0.24em';
          numberEl.style.opacity = '0.65';
          numberEl.title = 'Inicia sesión para vincular y ver tu número de tarjeta único';
        }
      }

      if (expiryEl) {
        expiryEl.textContent = holderState.isLoggedIn ? card.expiry : '••/••';
      }

      // Actualizar Nombre de Titular en Tarjeta 3D
      if (holderEl) {
        holderEl.textContent = holderState.displayName;
        if (holderState.isLoggedIn) {
          holderEl.style.letterSpacing = '0.08em';
          holderEl.style.opacity = '1';
          holderEl.title = `Titular: ${holderState.displayName}`;
        } else {
          holderEl.style.letterSpacing = '0.22em';
          holderEl.style.opacity = '0.65';
          holderEl.title = 'Inicia sesión para vincular tu nombre a la tarjeta';
        }
      }

      // Requisitos en Modal de Sucursal
      if (reqText) {
        if (holderState.isLoggedIn) {
          reqText.innerHTML = `1. Presentar tu número de tarjeta (<strong>${card.cardNumber}</strong>) o tu nombre completo (<strong>${holderState.displayName}</strong>).<br>2. Identificación oficial vigente (INE o Pasaporte).<br>3. Pago en efectivo o tarjeta bancaria para liberar tu límite al instante.`;
        } else {
          reqText.innerHTML = `1. Presentar tu identificación oficial vigente (INE o Pasaporte) y correo registrado para vincular tu tarjeta Callejón Mágico.<br>2. Pago en efectivo o tarjeta bancaria para liberar tu límite al instante.`;
        }
      }

      // Banner de sesión en el modal
      const statusBanner = document.getElementById('cardUserStatusBanner');
      if (statusBanner) {
        if (holderState.isLoggedIn) {
          statusBanner.className = 'card-user-status-banner active';
          statusBanner.innerHTML = `
            <div class="card-status-info">
              <span class="status-indicator-dot active"></span>
              <span>Titular verificado: <strong>${holderState.user.fullName}</strong> (@${holderState.user.username})</span>
            </div>
            <span class="card-verified-badge">✓ Tarjeta Vinculada</span>
          `;
        } else {
          statusBanner.className = 'card-user-status-banner guest';
          statusBanner.innerHTML = `
            <div class="card-status-info">
              <span class="status-indicator-dot"></span>
              <span>Sin sesión activa. <strong>Inicia sesión</strong> para acceder a tu saldo y personalizar la tarjeta.</span>
            </div>
            <button type="button" class="btn-card-login-link" id="btnCardModalLogin">Iniciar Sesión</button>
          `;
          document.getElementById('btnCardModalLogin')?.addEventListener('click', () => {
            CardUI.closeModal();
            if (window.DavantiAuth && typeof window.DavantiAuth.openAuth === 'function') {
              window.DavantiAuth.openAuth('login');
            }
          });
        }
      }

      // ======================================================================
      // GESTIÓN DE SALDO: OCULTAR CUANDO NO HAYA USUARIO EN SESIÓN
      // ======================================================================
      let guestNotice = document.getElementById('cardMetricsGuestNotice');
      let limitAlert = document.getElementById('cardLimitAlertBanner');

      if (!holderState.isLoggedIn) {
        // 1. Ocultar los datos de saldo y puntos
        if (limitEl) limitEl.innerHTML = '<span class="metric-locked">••••••</span>';
        if (balanceEl) balanceEl.innerHTML = '<span class="metric-locked">••••••</span>';
        if (pointsEl) pointsEl.innerHTML = '<span class="metric-locked">•••• pts</span>';

        // 2. Mostrar aviso informativo de protección
        if (!guestNotice && metricsGrid) {
          guestNotice = document.createElement('div');
          guestNotice.id = 'cardMetricsGuestNotice';
          guestNotice.className = 'card-metrics-guest-notice';
          guestNotice.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Inicia sesión para consultar tu límite de crédito, saldo disponible y puntos acumulados.</span>
          `;
          metricsGrid.insertAdjacentElement('beforebegin', guestNotice);
        }

        // 3. Remover alerta de límite si estaba presente
        if (limitAlert) limitAlert.remove();

        // 4. Deshabilitar opción de abonar al saldo
        if (btnAbonar) {
          btnAbonar.className = 'btn-card-action-primary btn-card-action-disabled';
          btnAbonar.innerHTML = '<span>🔒 Inicia sesión para abonar</span>';
          btnAbonar.title = 'Debes iniciar sesión para consultar saldo y realizar abonos';
        }

      } else {
        // Con usuario en sesión: Revelar datos reales
        if (limitEl) limitEl.textContent = `$${card.creditLimit.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
        if (balanceEl) balanceEl.textContent = `$${card.balance.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
        if (pointsEl) pointsEl.textContent = `${card.points.toLocaleString()} pts`;

        // Remover aviso de visitante
        if (guestNotice) guestNotice.remove();

        // Restaurar botón de abono
        if (btnAbonar) {
          btnAbonar.className = 'btn-card-action-primary';
          btnAbonar.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Abonar a mi Tarjeta</span>
          `;
          btnAbonar.title = 'Abonar saldo a tu tarjeta departamental';
        }

        // ====================================================================
        // PROTOCOLO CUANDO LLEGA AL LÍMITE (SALDO DISPONIBLE <= 0)
        // ====================================================================
        if (card.balance <= 0) {
          if (!limitAlert && metricsGrid) {
            limitAlert = document.createElement('div');
            limitAlert.id = 'cardLimitAlertBanner';
            limitAlert.className = 'card-limit-alert-banner';
            limitAlert.innerHTML = `
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <div>
                <strong>⚠️ Límite de crédito alcanzado ($0.00 MXN disponible)</strong>
                Has dispuesto del total de tu crédito. Por políticas de seguridad departamental, para abonar a tu saldo y rehabilitar tu tarjeta acude a tu <strong>sucursal Callejón Mágico</strong> más cercana.
              </div>
            `;
            metricsGrid.insertAdjacentElement('beforebegin', limitAlert);
          }
        } else {
          if (limitAlert) limitAlert.remove();
        }
      }

      // Refrescar selector en checkout si está presente
      if (typeof CardUI.updateCheckoutMSI === 'function') {
        CardUI.updateCheckoutMSI();
      }
    }
  };

  // ==========================================
  // UI INJECTION: MODAL & CHECKOUT
  // ==========================================
  const CardUI = {
    selectedMSI: 18,
    updateCheckoutMSI: null,

    init() {
      this.injectModal();
      this.injectSucursalModal();
      this.bindTriggers();
      this.enhanceCheckout();
      CardEngine.updateCardUI();

      // Listen for cross-tab or storage user updates
      window.addEventListener('storage', (e) => {
        if (!e.key || e.key === 'davanti_current_user' || e.key === STORAGE_USERS_CARDS_KEY || e.key === STORAGE_LEGACY_KEY) {
          CardEngine.updateCardUI();
        }
      });
    },

    injectModal() {
      if (document.getElementById('cardModal')) return;

      const card = CardEngine.getCard();
      const holderState = getCardHolderState();

      const modalHtml = `
        <div class="modal-window card-manager-modal" id="cardModal" role="dialog" aria-modal="true" aria-label="Tarjeta Callejón Mágico">
          <button class="modal-close-btn" id="btnCloseCardModal" aria-label="Cerrar ventana">&times;</button>
          
          <div class="card-modal-header">
            <h2 class="card-modal-title">Tarjeta <span class="gold">Callejón Mágico</span></h2>
            <p class="card-modal-subtitle">Tu crédito departamental exclusivo con 18 Meses Sin Intereses y 10% de descuento</p>
          </div>

          <!-- USER STATUS & VERIFICATION BANNER -->
          <div class="card-user-status-banner ${holderState.isLoggedIn ? 'active' : 'guest'}" id="cardUserStatusBanner">
            ${holderState.isLoggedIn ? `
              <div class="card-status-info">
                <span class="status-indicator-dot active"></span>
                <span>Titular verificado: <strong>${holderState.user.fullName}</strong> (@${holderState.user.username})</span>
              </div>
              <span class="card-verified-badge">✓ Tarjeta Vinculada</span>
            ` : `
              <div class="card-status-info">
                <span class="status-indicator-dot"></span>
                <span>Sin sesión activa. <strong>Inicia sesión</strong> para acceder a tu saldo y personalizar la tarjeta.</span>
              </div>
              <button type="button" class="btn-card-login-link" id="btnCardModalLogin">Iniciar Sesión</button>
            `}
          </div>

          <!-- 3D VIRTUAL CARD -->
          <div class="magic-card-wrapper">
            <div class="magic-credit-card" id="virtualCreditCard">
              <div class="card-top-row">
                <div class="card-brand-tag">
                  <svg class="card-brand-logo-img" viewBox="0 0 250 200" fill="none">
                    <path d="M 96,60 C 96,24 113,18 126,18 C 139,18 156,24 156,60" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" />
                    <path d="M 104,60 C 104,30 116,24 126,24 C 136,24 148,30 148,60" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" />
                    <path d="M 88,60 L 116,65 L 108,154 L 72,142 Z" fill="#07142A" stroke="#1d3568" stroke-width="1.5" />
                    <path d="M 116,65 L 182,75 L 198,159 C 166,152 130,148 108,154 Z" fill="#0B1B3D" stroke="#1d3568" stroke-width="1.5" />
                    <path d="M 88,60 L 116,65 L 182,75" fill="none" stroke="#C58F38" stroke-width="2.5" stroke-linecap="round" />
                    <path d="M 56,165 C 75,138 106,106 142,90 C 172,78 200,74 224,76 C 194,84 162,96 136,111 C 100,133 73,161 56,165 Z" fill="#C58F38" />
                    <ellipse cx="224" cy="84" rx="35" ry="15" transform="rotate(-28, 224, 84)" fill="none" stroke="#C58F38" stroke-width="4.5" stroke-dasharray="115, 24" stroke-linecap="round" />
                    <path d="M 224,44 Q 224,82 260,82 Q 224,82 224,120 Q 224,82 188,82 Q 224,82 224,44 Z" fill="#C58F38" />
                    <circle cx="224" cy="82" r="3.5" fill="#FFEBB8" />
                  </svg>
                  <span class="card-brand-title">Callejón <span class="gold">Mágico</span></span>
                </div>
                <svg class="card-nfc-wave" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                  <path d="M8.5 16.5a5 5 0 0 1 0-9"></path>
                  <path d="M12 19a8.5 8.5 0 0 0 0-14"></path>
                  <path d="M15.5 21.5a12 12 0 0 0 0-19"></path>
                </svg>
              </div>

              <div class="card-chip-row">
                <div class="emv-chip"></div>
                <span class="card-tier-pill">${card.tier}</span>
              </div>

              <div class="card-number-display" id="cardDisplayNumber">${card.cardNumber}</div>

              <div class="card-bottom-row">
                <div class="card-holder-col">
                  <span class="card-field-label">Titular de la Cuenta</span>
                  <span class="card-holder-name" id="cardDisplayHolder">${holderState.displayName}</span>
                </div>
                <div class="card-expiry-col">
                  <span class="card-field-label">Vence</span>
                  <span class="card-expiry-val" id="cardDisplayExpiry">${card.expiry}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- METRICS GRID -->
          <div class="card-metrics-grid">
            <div class="card-metric-card">
              <span class="card-metric-label">Límite Total</span>
              <span class="card-metric-value" id="cardMetricLimit">$${card.creditLimit.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            </div>
            <div class="card-metric-card">
              <span class="card-metric-label">Saldo Disponible</span>
              <span class="card-metric-value highlight" id="cardMetricBalance">$${card.balance.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            </div>
            <div class="card-metric-card">
              <span class="card-metric-label">Puntos Mágicos</span>
              <span class="card-metric-value gold" id="cardMetricPoints">${card.points.toLocaleString()} pts</span>
            </div>
          </div>

          <!-- BENEFITS LIST -->
          <div class="card-benefits-strip">
            <h4 class="card-benefits-title">
              <span>✨ Privilegios de tu Tarjeta Callejón Mágico</span>
            </h4>
            <ul class="card-benefits-list">
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>10% de descuento adicional</strong> automático en tu compra departamental.</span>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Hasta <strong>18 Meses Sin Intereses</strong> en tecnología, hogar, moda y todas las áreas.</span>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Puntos Mágicos por cada compra:</strong> acumula recompensas en cada transacción.</span>
              </li>
            </ul>
          </div>

          <!-- ACTION BUTTONS -->
          <div class="card-modal-actions-row">
            <button type="button" class="btn-card-action-primary" id="btnAbonarTarjeta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Abonar a mi Tarjeta</span>
            </button>
            <button type="button" class="btn-card-action-secondary" id="btnCopiarDatosTarjeta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copiar Número</span>
            </button>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);

      // Bind close button
      document.getElementById('btnCloseCardModal')?.addEventListener('click', () => {
        this.closeModal();
      });

      // Bind Login button in guest banner
      document.getElementById('btnCardModalLogin')?.addEventListener('click', () => {
        this.closeModal();
        if (window.DavantiAuth && typeof window.DavantiAuth.openAuth === 'function') {
          window.DavantiAuth.openAuth('login');
        }
      });

      // Bind Abonar button
      document.getElementById('btnAbonarTarjeta')?.addEventListener('click', () => {
        const holderState = getCardHolderState();
        
        // 1. Bloqueo para visitantes sin sesión
        if (!holderState.isLoggedIn) {
          this.showToast('🔒 Debes iniciar sesión con tu cuenta para consultar tu saldo y realizar abonos.');
          this.closeModal();
          if (window.DavantiAuth && typeof window.DavantiAuth.openAuth === 'function') {
            window.DavantiAuth.openAuth('login');
          }
          return;
        }

        const card = CardEngine.getCard();

        // 2. Si el saldo disponible es 0 o menor (ha agotado su crédito y llegó al límite)
        if (card.balance <= 0) {
          this.showSucursalModal(
            'Has alcanzado el límite de tu Tarjeta Callejón Mágico ($0.00 MXN disponible). Para abonar a tu saldo y rehabilitar tu línea de crédito, por favor acude a tu sucursal departamental Callejón Mágico más cercana.'
          );
          return;
        }

        // 3. Si ya llegó al límite máximo de crédito permitido ($35,000)
        if (card.balance >= card.creditLimit) {
          this.showSucursalModal(
            `Tu Tarjeta Callejón Mágico ya cuenta con el límite total de saldo disponible ($${card.creditLimit.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN). No es necesario realizar más abonos. Si deseas una ampliación de tu línea de crédito, acude a tu sucursal Callejón Mágico más cercana.`
          );
          return;
        }

        // 4. Realizar abono normal
        const abono = 3000;
        const res = CardEngine.payBalance(abono);

        if (res.success) {
          this.showToast(res.message);
          if (res.reachedLimit) {
            setTimeout(() => {
              this.showSucursalModal(
                `¡Excelente! Con este abono tu tarjeta ha alcanzado el límite total de saldo disponible ($${card.creditLimit.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN). Si deseas una ampliación de tu línea de crédito, por favor acude a tu sucursal Callejón Mágico más cercana.`
              );
            }, 700);
          }
        } else {
          if (res.limitReached || res.atLimit) {
            this.showSucursalModal(res.message);
          } else {
            this.showToast(res.message);
          }
        }
      });

      // Bind Copiar Datos button
      document.getElementById('btnCopiarDatosTarjeta')?.addEventListener('click', () => {
        const holderState = getCardHolderState();
        if (!holderState.isLoggedIn) {
          this.showToast('🔒 Inicia sesión con tu cuenta para consultar y copiar tu número de tarjeta único.');
          return;
        }
        const card = CardEngine.getCard();
        navigator.clipboard?.writeText(card.cardNumber).then(() => {
          this.showToast(`Número de Tarjeta Callejón Mágico copiado: ${card.cardNumber}`);
        }).catch(() => {
          this.showToast(`Número: ${card.cardNumber}`);
        });
      });
    },

    /**
     * Inyecta la ventana modal de Sucursal Callejón Mágico para abonos presenciales
     */
    injectSucursalModal() {
      if (document.getElementById('cardSucursalModal')) return;

      const card = CardEngine.getCard();
      const holderState = getCardHolderState();

      const sucursalHtml = `
        <div class="modal-window card-sucursal-modal" id="cardSucursalModal" role="dialog" aria-modal="true" aria-label="Sucursales Callejón Mágico">
          <button class="modal-close-btn" id="btnCloseSucursalModal" aria-label="Cerrar ventana">&times;</button>
          
          <div class="sucursal-modal-header">
            <div class="sucursal-icon-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 21h18M3 7v14M21 7v14M6 7V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5M9 7h6M9 11h6"></path>
              </svg>
            </div>
            <h3 class="sucursal-modal-title" id="sucursalModalTitle">📍 Sucursales Callejón Mágico</h3>
            <p class="sucursal-modal-subtitle" id="sucursalModalSubtitle">
              Visita nuestras sucursales oficiales para compras departamentales, retiro de pedidos Click & Collect Express, pagos y abonos de tu tarjeta:
            </p>
          </div>

          <div class="sucursal-branch-list">
            <div class="sucursal-branch-item">
              <div class="sucursal-branch-name">📍 Plantel Centro (Sucursal Matriz)</div>
              <div class="sucursal-branch-address">8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente Tapachula</div>
              <div class="sucursal-branch-hours">🕒 Lun a Sáb: 9:00 AM – 8:00 PM • Dom: 10:00 AM – 6:00 PM • Tel: (962) 626-4300</div>
              <div class="sucursal-branch-tags" style="display: flex; gap: 0.45rem; margin-top: 0.45rem; flex-wrap: wrap;">
                <span style="font-size: 0.72rem; background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; padding: 2px 8px; border-radius: 999px; font-weight: 600;">📦 Retiro Click & Collect (Listo en 2 hrs)</span>
                <span style="font-size: 0.72rem; background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; padding: 2px 8px; border-radius: 999px; font-weight: 600;">💳 Cajas y Pagos de Tarjeta</span>
                <span style="font-size: 0.72rem; background: #faf5ff; color: #6b21a8; border: 1px solid #e9d5ff; padding: 2px 8px; border-radius: 999px; font-weight: 600;">🛍️ Boutique & Atención Concierge</span>
              </div>
            </div>
            <div class="sucursal-branch-item">
              <div class="sucursal-branch-name">📍 Plantel Sur</div>
              <div class="sucursal-branch-address">3a. Av. Sur #114, frente a la Unidad Administrativa</div>
              <div class="sucursal-branch-hours">🕒 Lun a Sáb: 9:00 AM – 8:00 PM • Dom: 10:00 AM – 6:00 PM • Tel: (962) 625-1122</div>
              <div class="sucursal-branch-tags" style="display: flex; gap: 0.45rem; margin-top: 0.45rem; flex-wrap: wrap;">
                <span style="font-size: 0.72rem; background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; padding: 2px 8px; border-radius: 999px; font-weight: 600;">📦 Retiro Click & Collect (Listo en 2 hrs)</span>
                <span style="font-size: 0.72rem; background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; padding: 2px 8px; border-radius: 999px; font-weight: 600;">💳 Cajas y Pagos de Tarjeta</span>
                <span style="font-size: 0.72rem; background: #faf5ff; color: #6b21a8; border: 1px solid #e9d5ff; padding: 2px 8px; border-radius: 999px; font-weight: 600;">🛍️ Boutique & Atención Concierge</span>
              </div>
            </div>
          </div>

          <div class="sucursal-requirements-box" id="sucursalInfoBox">
            <strong id="sucursalInfoBoxTitle">ℹ️ Servicios en Sucursal:</strong>
            <span id="sucursalRequirementsText">
              Entrega inmediata de compras en línea (Click & Collect Express en 2 horas), abonos a tu Tarjeta Callejón Mágico en efectivo o con tarjeta bancaria, devoluciones y asesoría personalizada.
            </span>
          </div>

          <button type="button" class="btn-checkout-primary" id="btnUnderstandSucursal" style="width: 100%; height: 46px;">
            Entendido
          </button>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', sucursalHtml);

      document.getElementById('btnCloseSucursalModal')?.addEventListener('click', () => {
        this.closeSucursalModal();
      });

      document.getElementById('btnUnderstandSucursal')?.addEventListener('click', () => {
        this.closeSucursalModal();
      });
    },

    showSucursalModal(customMessage, customTitle) {
      this.closeModal();
      this.injectSucursalModal();
      const modal = document.getElementById('cardSucursalModal');
      const backdrop = document.getElementById('modalBackdrop');
      const title = document.getElementById('sucursalModalTitle');
      const subtitle = document.getElementById('sucursalModalSubtitle');
      const infoTitle = document.getElementById('sucursalInfoBoxTitle');
      const reqText = document.getElementById('sucursalRequirementsText');

      if (title) {
        title.textContent = customTitle || '📍 Sucursales Callejón Mágico';
      }
      if (subtitle) {
        subtitle.textContent = customMessage || 'Visita nuestras 2 sucursales oficiales en Tapachula para compras directas, retiro de pedidos Click & Collect Express en 2 hrs, abonos y atención personalizada:';
      }

      if (customMessage && (customMessage.includes('límite') || customMessage.includes('Límite') || customMessage.includes('abono') || customMessage.includes('Abono'))) {
        const holderState = getCardHolderState();
        const card = CardEngine.getCard();
        if (infoTitle) infoTitle.textContent = '📋 Requisitos para realizar tu abono en caja:';
        if (reqText) {
          reqText.innerHTML = holderState.isLoggedIn
            ? `1. Presentar tu número de tarjeta (<strong>${card.cardNumber}</strong>) o tu nombre completo (<strong>${holderState.displayName}</strong>).<br>2. Identificación oficial vigente (INE o Pasaporte).<br>3. Pago en efectivo o tarjeta bancaria para liberar tu saldo al instante.`
            : `1. Presentar tu identificación oficial vigente (INE o Pasaporte) y correo registrado.<br>2. Pago en efectivo o tarjeta bancaria para liberar tu saldo al instante.`;
        }
      } else {
        if (infoTitle) infoTitle.textContent = 'ℹ️ Servicios en Sucursal:';
        if (reqText) {
          reqText.innerHTML = 'Entrega inmediata de compras en línea (Click & Collect Express en 2 horas), abonos a tu Tarjeta Callejón Mágico en efectivo o con tarjeta bancaria, devoluciones y asesoría personalizada.';
        }
      }

      if (modal) {
        modal.classList.add('active');
        if (backdrop) backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    closeSucursalModal() {
      const modal = document.getElementById('cardSucursalModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) modal.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    },

    openModal() {
      const modal = document.getElementById('cardModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) {
        modal.classList.add('active');
        if (backdrop) backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
        CardEngine.updateCardUI();
      }
    },

    closeModal() {
      const modal = document.getElementById('cardModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) modal.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    },

    bindTriggers() {
      // 1. Abrir modal al hacer clic en enlaces de tarjeta
      document.addEventListener('click', (e) => {
        // Enlace de Tarjeta Callejón Mágico
        const cardTrigger = e.target && typeof e.target.closest === 'function'
          ? e.target.closest('a[href="#tarjeta-davanti"], a[href="#tarjeta-callejon"], a[href="#tarjeta-grande"], .open-card-modal-btn')
          : null;

        if (cardTrigger) {
          e.preventDefault();
          this.openModal();
          return;
        }

        // Enlace de Sucursales Callejón Mágico & Click & Collect
        const sucursalTrigger = e.target && typeof e.target.closest === 'function'
          ? e.target.closest('a[href*="#click-collect"], .open-sucursales-btn, [data-action="open-sucursales"]')
          : null;

        if (sucursalTrigger) {
          e.preventDefault();
          this.showSucursalModal(
            'Visita nuestras 2 sucursales oficiales en Tapachula para compras directas, retiro de pedidos Click & Collect Express en 2 hrs, pagos y atención personalizada:',
            '📍 Sucursales Callejón Mágico'
          );
          return;
        }

        // 2. Cerrar al hacer clic en cualquier parte fuera del cuadro de la tarjeta cuando esté abierta
        const cardModal = document.getElementById('cardModal');
        if (cardModal && cardModal.classList.contains('active')) {
          if (!cardModal.contains(e.target)) {
            this.closeModal();
          }
        }

        // 3. Cerrar al hacer clic fuera del cuadro de sucursal cuando esté abierto
        const sucursalModal = document.getElementById('cardSucursalModal');
        if (sucursalModal && sucursalModal.classList.contains('active')) {
          if (!sucursalModal.contains(e.target)) {
            this.closeSucursalModal();
          }
        }
      });

      // 4. Cerrar al hacer clic en el fondo borroso (backdrop)
      document.getElementById('modalBackdrop')?.addEventListener('click', () => {
        this.closeModal();
        this.closeSucursalModal();
      });

      // 5. Cerrar con tecla Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal();
          this.closeSucursalModal();
        }
      });
    },

    // Inyecta el selector interactivo de Envíos vs Retiro en Sucursal (Click & Collect Plantel Centro / Plantel Sur)
    enhanceCheckoutDelivery(checkoutForm) {
      const step1Pane = checkoutForm.querySelector('#checkoutStep1');
      if (!step1Pane || document.getElementById('checkoutDeliverySelector')) return;

      const formGrid = step1Pane.querySelector('.form-grid');
      const selectorHtml = `
        <div id="checkoutDeliverySelector" style="margin-bottom: 1.15rem;">
          <label class="form-label" style="font-weight: 700; margin-bottom: 0.5rem; display: block;">Modalidad de entrega:</label>
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.85rem;">
            <button type="button" id="btnModeHomeDelivery" class="delivery-mode-btn active" style="flex: 1; padding: 0.65rem 0.5rem; border-radius: 8px; border: 2px solid #c58f38; background: #fffbf0; color: #0b1b3d; font-weight: 700; font-size: 0.82rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s;">
              🚚 Envío a Domicilio
            </button>
            <button type="button" id="btnModeBranchPickup" class="delivery-mode-btn" style="flex: 1; padding: 0.65rem 0.5rem; border-radius: 8px; border: 1.5px solid #cbd5e1; background: #ffffff; color: #475569; font-weight: 600; font-size: 0.82rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s;">
              🏬 Retiro en Sucursal (Click & Collect)
            </button>
          </div>

          <div id="branchPickupChoiceBox" style="display: none; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 0.85rem; margin-bottom: 0.85rem;">
            <div style="font-size: 0.82rem; font-weight: 800; color: #0b1b3d; margin-bottom: 0.5rem;">
              Selecciona tu sucursal para recoger tu pedido:
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label class="branch-radio-card active" style="display: flex; align-items: flex-start; gap: 0.6rem; padding: 0.65rem; border-radius: 8px; border: 2px solid #c58f38; background: #ffffff; cursor: pointer;">
                <input type="radio" name="pickupBranchOption" value="centro" checked style="margin-top: 3px;" />
                <div>
                  <div style="font-weight: 800; font-size: 0.85rem; color: #0b1b3d;">📍 Plantel Centro (Sucursal Matriz)</div>
                  <div style="font-size: 0.78rem; color: #475569; margin: 2px 0;">8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente Tapachula</div>
                  <div style="font-size: 0.72rem; color: #059669; font-weight: 700;">🕒 Lun a Sáb 9:00 AM – 8:00 PM • Dom 10:00 AM – 6:00 PM • Tel: (962) 626-4300</div>
                </div>
              </label>
              <label class="branch-radio-card" style="display: flex; align-items: flex-start; gap: 0.6rem; padding: 0.65rem; border-radius: 8px; border: 1.5px solid #e2e8f0; background: #ffffff; cursor: pointer;">
                <input type="radio" name="pickupBranchOption" value="sur" style="margin-top: 3px;" />
                <div>
                  <div style="font-weight: 800; font-size: 0.85rem; color: #0b1b3d;">📍 Plantel Sur</div>
                  <div style="font-size: 0.78rem; color: #475569; margin: 2px 0;">3a. Av. Sur #114, frente a la Unidad Administrativa</div>
                  <div style="font-size: 0.72rem; color: #059669; font-weight: 700;">🕒 Lun a Sáb 9:00 AM – 8:00 PM • Dom 10:00 AM – 6:00 PM • Tel: (962) 625-1122</div>
                </div>
              </label>
            </div>
            <div style="margin-top: 0.6rem; font-size: 0.75rem; color: #059669; font-weight: 600; background: #ecfdf5; padding: 0.45rem 0.65rem; border-radius: 6px; border: 1px solid #a7f3d0;">
              ✨ ¡Tu pedido estará listo para entrega en 2 horas en la sucursal elegida con tu INE y número de orden!
            </div>
          </div>
        </div>
      `;

      if (formGrid) {
        formGrid.insertAdjacentHTML('beforebegin', selectorHtml);
      }

      const btnHome = document.getElementById('btnModeHomeDelivery');
      const btnPickup = document.getElementById('btnModeBranchPickup');
      const pickupBox = document.getElementById('branchPickupChoiceBox');
      const inputStreet = document.getElementById('checkoutStreet');
      const inputPostal = document.getElementById('checkoutPostal');
      const inputCity = document.getElementById('checkoutCity');

      const branches = {
        centro: {
          street: '8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente (Plantel Centro)',
          postal: '30700',
          city: 'Tapachula, Chiapas'
        },
        sur: {
          street: '3a. Av. Sur #114, frente a la Unidad Administrativa (Plantel Sur)',
          postal: '30700',
          city: 'Tapachula, Chiapas'
        }
      };

      if (btnHome && btnPickup) {
        btnHome.addEventListener('click', () => {
          btnHome.className = 'delivery-mode-btn active';
          btnHome.style.border = '2px solid #c58f38';
          btnHome.style.background = '#fffbf0';
          btnHome.style.color = '#0b1b3d';

          btnPickup.className = 'delivery-mode-btn';
          btnPickup.style.border = '1.5px solid #cbd5e1';
          btnPickup.style.background = '#ffffff';
          btnPickup.style.color = '#475569';

          if (pickupBox) pickupBox.style.display = 'none';
          if (inputStreet) { inputStreet.value = ''; inputStreet.placeholder = 'Calle, número ext/int y colonia'; }
          if (inputPostal) { inputPostal.value = ''; inputPostal.placeholder = 'Ej: 30700'; }
          if (inputCity) { inputCity.value = ''; inputCity.placeholder = 'Ej: Tapachula, Chiapas'; }
        });

        btnPickup.addEventListener('click', () => {
          btnPickup.className = 'delivery-mode-btn active';
          btnPickup.style.border = '2px solid #c58f38';
          btnPickup.style.background = '#fffbf0';
          btnPickup.style.color = '#0b1b3d';

          btnHome.className = 'delivery-mode-btn';
          btnHome.style.border = '1.5px solid #cbd5e1';
          btnHome.style.background = '#ffffff';
          btnHome.style.color = '#475569';

          if (pickupBox) pickupBox.style.display = 'block';
          if (inputStreet) { inputStreet.value = ''; inputStreet.placeholder = 'Calle y dirección para retiro / contacto'; }
          if (inputPostal) { inputPostal.value = ''; inputPostal.placeholder = 'Ej: 30700'; }
          if (inputCity) { inputCity.value = ''; inputCity.placeholder = 'Ej: Tapachula, Chiapas'; }
        });

        document.querySelectorAll('input[name="pickupBranchOption"]').forEach(r => {
          r.addEventListener('change', () => {
            document.querySelectorAll('.branch-radio-card').forEach(c => {
              c.style.border = '1.5px solid #e2e8f0';
            });
            const parentLabel = r.closest('.branch-radio-card');
            if (parentLabel) parentLabel.style.border = '2px solid #c58f38';
          });
        });
      }
    },

    // Enhance Checkout Modal with Delivery Selector (Click & Collect vs Home Delivery), 18 MSI selector, 10% discount & Puntos Mágicos
    enhanceCheckout() {
      const checkoutForm = document.getElementById('checkoutForm');
      if (!checkoutForm) return;

      this.enhanceCheckoutDelivery(checkoutForm);

      const paymentCards = checkoutForm.querySelectorAll('.payment-radio-card');
      if (!paymentCards || paymentCards.length === 0) return;

      const cardOption = paymentCards[0]; // Callejón Mágico option
      
      // Inject the MSI container under the Callejón Mágico payment option
      let msiContainer = document.getElementById('callejonMsiBox');
      if (!msiContainer) {
        msiContainer = document.createElement('div');
        msiContainer.id = 'callejonMsiBox';
        msiContainer.className = 'callejon-card-checkout-box';
        cardOption.insertAdjacentElement('afterend', msiContainer);
      }

      this.updateCheckoutMSI = () => {
        const cartSubtotal = this.getCartTotal();
        const discount = Math.round(cartSubtotal * 0.10 * 100) / 100;
        const discountedTotal = Math.round((cartSubtotal - discount) * 100) / 100;
        const net = Math.round((discountedTotal / 1.16) * 100) / 100;
        const iva = Math.round((discountedTotal - net) * 100) / 100;

        const msiPlans = [
          { months: 3, label: '3 MSI', popular: false },
          { months: 6, label: '6 MSI', popular: false },
          { months: 12, label: '12 MSI', popular: false },
          { months: 18, label: '18 MSI', popular: true }
        ];

        const card = CardEngine.getCard();
        const holderState = getCardHolderState();
        const hasEnoughBalance = holderState.isLoggedIn && (card.balance >= discountedTotal);

        if (![3, 6, 12, 18].includes(this.selectedMSI)) {
          this.selectedMSI = 18;
        }

        msiContainer.innerHTML = `
          <div class="card-checkout-discount-badge">
            <span>🎉 10% Descuento Callejón Mágico Aplicado</span>
            <span>- $${discount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          </div>

          <label class="msi-title-label">Elige tu financiamiento preferido:</label>
          <div class="msi-selector-pills">
            ${msiPlans.map(plan => {
              const monthlyAmount = discountedTotal / plan.months;
              const isActive = plan.months === this.selectedMSI;
              return `
                <div class="msi-pill ${isActive ? 'active' : ''}" data-months="${plan.months}">
                  <span class="msi-months-text">${plan.label}</span>
                  <span class="msi-amount-text">$${monthlyAmount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}/m</span>
                  ${plan.popular ? '<span class="msi-popular-tag">Favorita ✨</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div class="card-checkout-balance-notice">
            <span>Titular: <strong>${holderState.isLoggedIn ? holderState.displayName : '<span style="color:#64748b; font-style:italic;">Sin iniciar sesión</span>'}</strong></span>
            <span>Disponible: ${holderState.isLoggedIn ? `<strong style="color: ${hasEnoughBalance ? '#10b981' : '#dc2626'}">$${card.balance.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong>` : '<strong style="color:#64748b;">•••••• (Inicia sesión para pagar)</strong>'}</span>
          </div>
          ${(holderState.isLoggedIn && !hasEnoughBalance) ? '<div style="color: #dc2626; font-size: 0.74rem; margin-top: 0.35rem; font-weight: 600;">⚠️ Has alcanzado el límite de tu tarjeta. Acude a sucursal para abonar al saldo.</div>' : ''}
        `;

        // Bind MSI pills click
        msiContainer.querySelectorAll('.msi-pill').forEach(pill => {
          pill.addEventListener('click', () => {
            msiContainer.querySelectorAll('.msi-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            this.selectedMSI = parseInt(pill.dataset.months, 10);
            updateSubmitButton(discountedTotal, this.selectedMSI);
          });
        });

        updateSubmitButton(discountedTotal, this.selectedMSI);
      };

      const updateSubmitButton = (total, months) => {
        const btn = checkoutForm.querySelector('button[type="submit"]');
        if (btn) {
          const monthly = total / months;
          btn.innerHTML = `Pagar con ${months} MSI de $${monthly.toLocaleString('es-MX', { minimumFractionDigits: 2 })} (10% OFF)`;
        }
      };

      // Watch payment method radio change & toggle sub-forms
      const creditDebitBox = document.getElementById('creditDebitCardBox');
      const paypalBox = document.getElementById('paypalAccountBox');
      const cashBox = document.getElementById('cashPaymentBox');

      const updatePaymentBoxes = (selectedRadio) => {
        const methodVal = selectedRadio ? (selectedRadio.value || selectedRadio.closest('.payment-radio-card')?.dataset.method) : 'callejon';

        if (methodVal === 'callejon' || (!methodVal && selectedRadio?.closest('.payment-radio-card') === cardOption)) {
          if (msiContainer) msiContainer.style.display = 'block';
          if (creditDebitBox) creditDebitBox.style.display = 'none';
          if (paypalBox) paypalBox.style.display = 'none';
          if (cashBox) cashBox.style.display = 'none';
          this.updateCheckoutMSI();
        } else if (methodVal === 'cash') {
          if (msiContainer) msiContainer.style.display = 'none';
          if (creditDebitBox) creditDebitBox.style.display = 'none';
          if (paypalBox) paypalBox.style.display = 'none';
          if (cashBox) cashBox.style.display = 'block';
          const btn = checkoutForm.querySelector('button[type="submit"]');
          const cartTotal = this.getCartTotal();
          if (btn) btn.innerHTML = `Confirmar Pedido de Contado ($${cartTotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN)`;
        } else if (methodVal === 'card') {
          if (msiContainer) msiContainer.style.display = 'none';
          if (creditDebitBox) creditDebitBox.style.display = 'block';
          if (paypalBox) paypalBox.style.display = 'none';
          if (cashBox) cashBox.style.display = 'none';
          const btn = checkoutForm.querySelector('button[type="submit"]');
          const cartTotal = this.getCartTotal();
          if (btn) btn.innerHTML = `Confirmar y Pagar con Tarjeta ($${cartTotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN)`;
        } else if (methodVal === 'paypal') {
          if (msiContainer) msiContainer.style.display = 'none';
          if (creditDebitBox) creditDebitBox.style.display = 'none';
          if (paypalBox) paypalBox.style.display = 'block';
          if (cashBox) cashBox.style.display = 'none';
          const btn = checkoutForm.querySelector('button[type="submit"]');
          const cartTotal = this.getCartTotal();
          if (btn) btn.innerHTML = `Confirmar y Pagar con PayPal ($${cartTotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN)`;
        }
      };

      paymentCards.forEach(cardLabel => {
        const radio = cardLabel.querySelector('input[type="radio"]');
        if (radio) {
          radio.addEventListener('change', () => {
            paymentCards.forEach(c => c.classList.remove('active'));
            cardLabel.classList.add('active');
            updatePaymentBoxes(radio);
          });
        }
      });

      // Formatters y detección de marca de tarjeta bancaria
      const ccNumInput = document.getElementById('ccCardNumber');
      const ccBrandBadge = document.getElementById('detectedCardBrand');
      const ccExpiryInput = document.getElementById('ccCardExpiry');
      const ccCvvInput = document.getElementById('ccCardCvv');
      const ppPhoneInput = document.getElementById('paypalPhone');

      if (ccNumInput) {
        ccNumInput.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '').slice(0, 16);
          // Auto espaciado cada 4 dígitos
          let formatted = v.match(/.{1,4}/g)?.join(' ') || v;
          e.target.value = formatted;

          // Detección de marca
          if (ccBrandBadge) {
            if (/^4/.test(v)) {
              ccBrandBadge.textContent = 'VISA';
              ccBrandBadge.style.background = '#dbeafe';
              ccBrandBadge.style.color = '#1d4ed8';
            } else if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/.test(v)) {
              ccBrandBadge.textContent = 'MASTERCARD';
              ccBrandBadge.style.background = '#fee2e2';
              ccBrandBadge.style.color = '#dc2626';
            } else if (/^3[47]/.test(v)) {
              ccBrandBadge.textContent = 'AMEX';
              ccBrandBadge.style.background = '#d1fae5';
              ccBrandBadge.style.color = '#047857';
            } else {
              ccBrandBadge.textContent = 'Bancaria';
              ccBrandBadge.style.background = '#e2e8f0';
              ccBrandBadge.style.color = '#475569';
            }
          }
        });
      }

      if (ccExpiryInput) {
        ccExpiryInput.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '').slice(0, 4);
          if (v.length >= 2) {
            let mm = parseInt(v.slice(0, 2), 10);
            if (mm > 12) mm = 12;
            if (mm === 0) mm = 1;
            let mmStr = String(mm).padStart(2, '0');
            e.target.value = mmStr + (v.length > 2 ? '/' + v.slice(2) : '/');
          } else {
            e.target.value = v;
          }
        });
      }

      if (ccCvvInput) {
        ccCvvInput.addEventListener('input', (e) => {
          e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
        });
      }

      if (ppPhoneInput) {
        ppPhoneInput.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '').slice(0, 10);
          if (v.length > 6) {
            e.target.value = `${v.slice(0, 3)} ${v.slice(3, 6)} ${v.slice(6)}`;
          } else if (v.length > 3) {
            e.target.value = `${v.slice(0, 3)} ${v.slice(3)}`;
          } else {
            e.target.value = v;
          }
        });
      }

      // Hook checkout form submission (preparar metadatos financieros)
      checkoutForm.addEventListener('submit', (e) => {
        const activeRadio = checkoutForm.querySelector('input[name="paymentMethod"]:checked');
        const isCallejonCard = activeRadio && (activeRadio.value === 'callejon' || activeRadio.closest('.payment-radio-card') === cardOption);
        const cartTotal = this.getCartTotal();

        if (isCallejonCard) {
          const discount = Math.round(cartTotal * 0.10 * 100) / 100;
          const finalAmount = Math.round((cartTotal - discount) * 100) / 100;
          const net = Math.round((finalAmount / 1.16) * 100) / 100;
          const iva = Math.round((finalAmount - net) * 100) / 100;
          const pointsEarned = Math.round(finalAmount * 0.05);

          // Guardar resumen para que app.js y ticket.js procesen la orden exactamente
          window.__lastCallejonCharge = {
            isCallejonCard: true,
            msi: this.selectedMSI || 18,
            discount: discount,
            subtotal: cartTotal,
            iva: iva,
            finalAmount: finalAmount,
            pointsEarned: pointsEarned
          };

        } else {
          // Si paga de contado (Efectivo / SPEI, Tarjeta Bancaria, PayPal):
          // No toca el saldo de la Tarjeta Callejón Mágico. Precios ya incluyen IVA.
          const net = Math.round((cartTotal / 1.16) * 100) / 100;
          const iva = Math.round((cartTotal - net) * 100) / 100;
          const otherPoints = Math.max(25, Math.round(cartTotal * 0.05));
          let newPointsTotal = otherPoints;
          if (typeof CardEngine.addPoints === 'function') {
            newPointsTotal = CardEngine.addPoints(otherPoints, 'Compra departamental');
          }
          
          window.__lastCallejonCharge = {
            isCallejonCard: false,
            msi: 1,
            discount: 0,
            subtotal: cartTotal,
            iva: iva,
            finalAmount: cartTotal,
            pointsEarned: otherPoints,
            totalPoints: newPointsTotal
          };
        }
      });

      // Initialize initial state if checked
      const initialChecked = checkoutForm.querySelector('input[name="paymentMethod"]:checked');
      if (initialChecked) {
        updatePaymentBoxes(initialChecked);
      } else if (cardOption.querySelector('input[type="radio"]:checked')) {
        this.updateCheckoutMSI();
      }
    },

    getCartTotal() {
      try {
        const cart = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
        if (!Array.isArray(cart) || cart.length === 0) return 3499; // Fallback demo total
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      } catch (e) {
        return 3499;
      }
    },

    showToast(message) {
      if (window.DavantiAuth && typeof window.DavantiAuth.showToast === 'function') {
        window.DavantiAuth.showToast(message);
      } else {
        alert(message);
      }
    }
  };

  // Expose to window
  window.CallejonCard = {
    getCard: CardEngine.getCard.bind(CardEngine),
    saveCard: CardEngine.saveCard.bind(CardEngine),
    addPoints: CardEngine.addPoints.bind(CardEngine),
    charge: CardEngine.charge.bind(CardEngine),
    payBalance: CardEngine.payBalance.bind(CardEngine),
    updateUI: CardEngine.updateCardUI.bind(CardEngine),
    openModal: CardUI.openModal.bind(CardUI),
    closeModal: CardUI.closeModal.bind(CardUI),
    showSucursalModal: CardUI.showSucursalModal.bind(CardUI)
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CardUI.init());
  } else {
    CardUI.init();
  }
})();
