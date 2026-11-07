/**
 * CALLEJÓN MÁGICO — Motor de Ofertas y Sincronización de Fechas Límite
 * Sincroniza ofertas con fechas reales (offerEndDate / offerStartDate),
 * gestiona cuentas regresivas en vivo y garantiza el retorno automático
 * al precio original cuando concluye el plazo programado.
 */

(function() {
  'use strict';

  const STORAGE_EXPIRED_KEY = 'callejon_expired_offers';
  const STORAGE_CUSTOM_DATES_KEY = 'callejon_custom_offer_dates';

  // Copia de seguridad de los valores originales de los productos en oferta
  const initialOfferBackups = {};

  // Cronograma predeterminado sincronizado con la fecha actual del sistema (Noviembre 2026)
  // Permite que haya ofertas con diferentes plazos: inmediatas (para prueba en vivo), de hoy y de fin de semana
  const DEFAULT_SCHEDULED_DATES = {
    // ⚡ Ofertas Relámpago (Vencen hoy en minutos / plazo corto para ver la expiración en vivo)
    'fashion-4': '2026-11-06T12:00:00-06:00',   // Bolso Tote Michael Kors (Mediodía)
    'tech-4': '2026-11-06T13:00:00-06:00',      // Smart TV Samsung 55" (1:00 PM)
    'gaming-con-1': '2026-11-06T12:30:00-06:00',// PS5 Slim Edición Digital (12:30 PM)

    // 🌟 Ofertas del Día (Vencen hoy viernes 6 de noviembre a medianoche)
    'home-2': '2026-11-06T23:59:59-06:00',      // Batería Cocina Hierro Fundido
    'sport-8': '2026-11-06T23:59:59-06:00',     // Termo Stanley Quencher
    'beauty-2': '2026-11-06T23:59:59-06:00',    // Perfume Sauvage Dior
    'toy-3': '2026-11-06T23:59:59-06:00',       // Set Castillo de Construcción

    // 🛍️ Ofertas de Fin de Semana Mágico (Vencen el lunes 9 de noviembre)
    'fash-clm-2': '2026-11-09T23:59:59-06:00',   // Vestido Satín
    'tech-clm-1': '2026-11-09T23:59:59-06:00',   // Monitor Curvo Samsung
    'home-10': '2026-11-09T23:59:59-06:00',      // Freidora DualZone
    'sport-clm-3': '2026-11-09T23:59:59-06:00',  // Red Portería Nike Pro
    'gaming-acc-1': '2026-11-09T23:59:59-06:00', // Headset Razer BlackShark
    'toy-clm-4': '2026-11-09T23:59:59-06:00',    // Auto Control Remoto
    'beauty-8': '2026-11-09T23:59:59-06:00'      // Tratamiento Facial
  };

  const DEFAULT_FUTURE_DATE = '2026-11-15T23:59:59-06:00'; // 15 de Noviembre para el resto de ofertas

  /**
   * Obtiene la lista de IDs de ofertas marcadas como expiradas
   */
  function getExpiredOfferIds() {
    try {
      const stored = localStorage.getItem(STORAGE_EXPIRED_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Guarda la lista de IDs de ofertas expiradas
   */
  function saveExpiredOfferIds(ids) {
    try {
      localStorage.setItem(STORAGE_EXPIRED_KEY, JSON.stringify(ids));
    } catch (e) {}
  }

  /**
   * Obtiene fechas personalizadas configuradas por el usuario o interfaz
   */
  function getCustomOfferDates() {
    try {
      const stored = localStorage.getItem(STORAGE_CUSTOM_DATES_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  }

  /**
   * Guarda fechas personalizadas en localStorage
   */
  function saveCustomOfferDates(dates) {
    try {
      localStorage.setItem(STORAGE_CUSTOM_DATES_KEY, JSON.stringify(dates));
    } catch (e) {}
  }

  /**
   * Realiza una copia de seguridad inmutable de los datos iniciales de oferta de cada producto
   */
  function backupInitialOffers() {
    if (typeof PRODUCTS_DATA === 'undefined' || !Array.isArray(PRODUCTS_DATA)) return;

    PRODUCTS_DATA.forEach(p => {
      if (p.originalPrice && p.originalPrice > p.price) {
        if (!initialOfferBackups[p.id]) {
          initialOfferBackups[p.id] = {
            offerPrice: p.price,
            originalPrice: p.originalPrice,
            badge: p.badge,
            badgeType: p.badgeType,
            offerTitle: p.offerTitle || 'Oferta Exclusiva',
            offerEndDate: p.offerEndDate || DEFAULT_SCHEDULED_DATES[p.id] || DEFAULT_FUTURE_DATE
          };
        }
      }
    });
  }

  /**
   * Obtiene la fecha límite exacta de una oferta en formato timestamp (ms)
   * Prioridad:
   * 1. Fecha personalizada en localStorage
   * 2. Propiedad `offerEndDate` en el producto
   * 3. Cronograma predeterminado `DEFAULT_SCHEDULED_DATES`
   * 4. Fecha futura por defecto
   */
  function getOfferEndTime(productOrId) {
    const id = typeof productOrId === 'string' ? productOrId : productOrId.id;
    const p = typeof productOrId === 'object' ? productOrId : (typeof PRODUCTS_DATA !== 'undefined' ? PRODUCTS_DATA.find(x => x.id === id) : null);

    // 1. Fecha personalizada guardada
    const customDates = getCustomOfferDates();
    if (customDates[id]) {
      const parsed = new Date(customDates[id]).getTime();
      if (!isNaN(parsed)) return parsed;
    }

    // 2. Propiedad offerEndDate en el producto
    if (p && p.offerEndDate) {
      const parsed = new Date(p.offerEndDate).getTime();
      if (!isNaN(parsed)) return parsed;
    }

    // 3. Backup de fecha
    const backup = initialOfferBackups[id];
    if (backup && backup.offerEndDate) {
      const parsed = new Date(backup.offerEndDate).getTime();
      if (!isNaN(parsed)) return parsed;
    }

    // 4. Cronograma predeterminado
    if (DEFAULT_SCHEDULED_DATES[id]) {
      const parsed = new Date(DEFAULT_SCHEDULED_DATES[id]).getTime();
      if (!isNaN(parsed)) return parsed;
    }

    // 5. Fecha general
    return new Date(DEFAULT_FUTURE_DATE).getTime();
  }

  /**
   * Obtiene la cadena ISO de la fecha de término de un producto
   */
  function getOfferEndDateString(productOrId) {
    const id = typeof productOrId === 'string' ? productOrId : productOrId.id;
    const p = typeof productOrId === 'object' ? productOrId : (typeof PRODUCTS_DATA !== 'undefined' ? PRODUCTS_DATA.find(x => x.id === id) : null);

    const customDates = getCustomOfferDates();
    if (customDates[id]) return customDates[id];

    if (p && p.offerEndDate) return p.offerEndDate;
    if (DEFAULT_SCHEDULED_DATES[id]) return DEFAULT_SCHEDULED_DATES[id];

    const backup = initialOfferBackups[id];
    if (backup && backup.offerEndDate) return backup.offerEndDate;

    return DEFAULT_FUTURE_DATE;
  }

  /**
   * Formatea una fecha a texto amigable en español
   */
  function formatOfferDate(dateInput) {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return 'Fecha por definir';

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const hours = d.getHours();
    const mins = d.getMinutes().toString().padStart(2, '0');

    // Verificar si es hoy (en base a la fecha actual del sistema)
    const now = new Date();
    const isToday = d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();

    if (isToday) {
      return `Hoy, ${hours}:${mins} hrs`;
    }

    return `${day} de ${month}, ${hours}:${mins} hrs`;
  }

  /**
   * Formatea milisegundos restantes a texto estructurado
   */
  function formatRemainingTime(ms) {
    if (ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const days = Math.floor(totalSec / 86400);
    const hrs = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    const pad = n => (n < 10 ? '0' + n : n);

    if (days > 0) {
      return `${days}d ${pad(hrs)}h ${pad(mins)}m`;
    }
    if (hrs > 0) {
      return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
    }
    return `${pad(mins)}m ${pad(secs)}s`;
  }

  /**
   * Sincroniza todas las ofertas de PRODUCTS_DATA con las fechas actuales
   * Si la fecha límite ya concluyó: el producto se coloca en su precio original.
   * Si la fecha sigue vigente: la oferta se mantiene activa.
   */
  function syncOffersWithDates() {
    if (typeof PRODUCTS_DATA === 'undefined' || !Array.isArray(PRODUCTS_DATA)) return;

    backupInitialOffers();
    const expiredIds = getExpiredOfferIds();
    const now = Date.now();
    let newExpiredFound = false;

    PRODUCTS_DATA.forEach(p => {
      const backup = initialOfferBackups[p.id];
      if (!backup) return;

      const endTime = getOfferEndTime(p);
      const isTimeUp = now >= endTime;
      const isMarkedExpired = expiredIds.includes(p.id);

      // Asignar propiedades de fecha al producto para fácil consulta
      p.offerEndDate = getOfferEndDateString(p);
      p.offerEndTimeMs = endTime;

      if (isTimeUp || isMarkedExpired) {
        // La oferta concluyó o venció: volver al precio original
        p.price = backup.originalPrice;
        p.originalPrice = null;
        p.isOfferExpired = true;
        if (p.badgeType === 'offer') {
          p.badge = 'Precio regular';
          p.badgeType = 'regular';
        }

        if (isTimeUp && !isMarkedExpired) {
          expiredIds.push(p.id);
          newExpiredFound = true;
        }
      } else {
        // La oferta sigue vigente
        p.price = backup.offerPrice;
        p.originalPrice = backup.originalPrice;
        p.badge = backup.badge;
        p.badgeType = backup.badgeType;
        p.isOfferExpired = false;
      }
    });

    if (newExpiredFound) {
      saveExpiredOfferIds(expiredIds);
    }
  }

  /**
   * Finaliza una oferta inmediatamente y revierte el producto a su precio original
   * @param {string} productId - ID del producto
   * @param {boolean} silent - Si es true, omite el toast
   */
  function expireOffer(productId, silent = false) {
    if (typeof PRODUCTS_DATA === 'undefined') return;

    backupInitialOffers();
    const p = PRODUCTS_DATA.find(x => x.id === productId);
    const backup = initialOfferBackups[productId];
    if (!p || !backup) return;

    const regularPrice = backup.originalPrice;
    const oldOfferPrice = backup.offerPrice;

    // 1. Modificar producto en catálogo
    p.price = regularPrice;
    p.originalPrice = null;
    p.isOfferExpired = true;
    if (p.badgeType === 'offer') {
      p.badge = 'Precio regular';
      p.badgeType = 'regular';
    }

    // 2. Persistir en localStorage
    const expiredIds = getExpiredOfferIds();
    if (!expiredIds.includes(productId)) {
      expiredIds.push(productId);
      saveExpiredOfferIds(expiredIds);
    }

    // 3. Actualizar carrito de compras
    updateCartItemPrice(productId, regularPrice, p.name);

    // 4. Actualizar tarjetas en el DOM
    updateProductCardUI(p, regularPrice);

    // 5. Actualizar modal QuickView si está abierto
    updateQuickViewUI(p, regularPrice);

    // 6. Actualizar modal del gestor de fechas si está abierto
    updateOffersModalRow(productId);

    // 7. Notificación toast
    if (!silent) {
      const app = window.CallejonApp || window.GrandeApp || window.DavantiApp;
      const msg = `⌛ La oferta de "${p.name}" ha finalizado. Ha vuelto a su precio original de $${regularPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
      if (app && typeof app.showToast === 'function') {
        app.showToast(msg, 'info');
      }
    }

    // 8. Evento global
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      try {
        window.dispatchEvent(new CustomEvent('callejon:offer-expired', {
          detail: { productId, product: p, regularPrice, oldOfferPrice }
        }));
      } catch (e) {}
    }
  }

  /**
   * Configura una nueva fecha para una oferta (útil para pruebas y sincronización)
   * @param {string} productId - ID del producto
   * @param {number|string} minutesOrIsoString - Minutos desde ahora o fecha ISO (ej: '2026-11-06T18:00:00-06:00')
   */
  function setCustomOfferDate(productId, minutesOrIsoString) {
    if (typeof PRODUCTS_DATA === 'undefined') return;

    backupInitialOffers();
    const p = PRODUCTS_DATA.find(x => x.id === productId);
    const backup = initialOfferBackups[productId];
    if (!p || !backup) return;

    let targetIso = '';
    if (typeof minutesOrIsoString === 'number') {
      const targetMs = Date.now() + (minutesOrIsoString * 60 * 1000);
      targetIso = new Date(targetMs).toISOString();
    } else {
      targetIso = minutesOrIsoString;
    }

    // Guardar fecha personalizada
    const customDates = getCustomOfferDates();
    customDates[productId] = targetIso;
    saveCustomOfferDates(customDates);

    // Si la nueva fecha está en el futuro, reactivar la oferta
    const targetMs = new Date(targetIso).getTime();
    if (targetMs > Date.now()) {
      let expiredIds = getExpiredOfferIds();
      expiredIds = expiredIds.filter(id => id !== productId);
      saveExpiredOfferIds(expiredIds);

      p.price = backup.offerPrice;
      p.originalPrice = backup.originalPrice;
      p.badge = backup.badge;
      p.badgeType = backup.badgeType;
      p.isOfferExpired = false;
      p.offerEndDate = targetIso;

      updateCartItemPrice(productId, backup.offerPrice, p.name);
      updateProductCardUI(p, backup.offerPrice, backup.originalPrice);
      updateQuickViewUI(p, backup.offerPrice, backup.originalPrice);

      const app = window.CallejonApp || window.GrandeApp || window.DavantiApp;
      const dateLabel = formatOfferDate(targetIso);
      const msg = `⚡ Oferta actualizada para "${p.name}": Precio de $${backup.offerPrice.toLocaleString('es-MX')} hasta ${dateLabel}`;
      if (app && typeof app.showToast === 'function') {
        app.showToast(msg, 'success');
      }
    } else {
      // Si la fecha configurada ya pasó, expirar de inmediato
      expireOffer(productId);
    }

    updateOffersModalRow(productId);
  }

  /**
   * Reactiva una oferta restaurando sus valores originales
   */
  function restoreOffer(productId, durationMinutes = 10) {
    setCustomOfferDate(productId, durationMinutes);
  }

  /**
   * Restablece todas las ofertas a su cronograma inicial
   */
  function resetAllOffers() {
    localStorage.removeItem(STORAGE_EXPIRED_KEY);
    localStorage.removeItem(STORAGE_CUSTOM_DATES_KEY);
    syncOffersWithDates();

    const app = window.CallejonApp || window.GrandeApp || window.DavantiApp;
    if (app && typeof app.showToast === 'function') {
      app.showToast('✨ Todas las ofertas y fechas han sido restablecidas al cronograma oficial', 'success');
    }

    setTimeout(() => {
      location.reload();
    }, 400);
  }

  /**
   * Actualiza el precio del producto dentro de los carritos de compras
   */
  function updateCartItemPrice(productId, newPrice, productName) {
    let cartModified = false;
    const carts = ['davanti_cart', 'grande_cart'];

    carts.forEach(cartKey => {
      try {
        const raw = localStorage.getItem(cartKey);
        if (!raw) return;
        const cart = JSON.parse(raw);
        if (!Array.isArray(cart)) return;

        cart.forEach(item => {
          if (item.id === productId && item.price !== newPrice) {
            item.price = newPrice;
            cartModified = true;
          }
        });

        if (cartModified) {
          localStorage.setItem(cartKey, JSON.stringify(cart));
        }
      } catch (e) {}
    });

    if (cartModified) {
      const app = window.CallejonApp || window.GrandeApp || window.DavantiApp;
      if (app) {
        if (typeof app.reloadCart === 'function') app.reloadCart();
        if (typeof app.updateCartUI === 'function') app.updateCartUI();
      }
      if (typeof Event !== 'undefined') {
        window.dispatchEvent(new Event('storage'));
      }
    }
  }

  /**
   * Actualiza las tarjetas del producto en el DOM
   */
  function updateProductCardUI(product, currentPrice, originalPrice = null) {
    const cards = document.querySelectorAll(`[data-id="${product.id}"].product-card, .product-card[data-id="${product.id}"]`);
    cards.forEach(card => {
      // 1. Precios
      const priceBox = card.querySelector('.product-price-box, .home-card-pricing, .tech-card-price-row, .sport-card-price-row, .gaming-card-price-row, .beauty-card-price-row');
      if (priceBox) {
        if (originalPrice && originalPrice > currentPrice) {
          priceBox.innerHTML = `
            <span class="current-price discounted">$${currentPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            <span class="original-price">$${originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          `;
        } else {
          priceBox.innerHTML = `
            <span class="current-price">$${currentPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          `;
        }
        priceBox.classList.add('price-reverted-flash');
        setTimeout(() => priceBox.classList.remove('price-reverted-flash'), 1200);
      }

      // 2. Insignia
      const badgeEl = card.querySelector('.product-badge');
      if (badgeEl) {
        if (product.isOfferExpired) {
          badgeEl.textContent = 'Precio regular';
          badgeEl.className = 'product-badge badge-regular';
        } else {
          badgeEl.textContent = product.badge || 'En oferta';
          badgeEl.className = `product-badge badge-${product.badgeType || 'offer'}`;
        }
      }

      // 3. Pastilla de tiempo
      const timerPill = card.querySelector('.card-offer-timer-pill');
      if (timerPill) {
        const dateStr = getOfferEndDateString(product);
        const dateLabel = formatOfferDate(dateStr);

        if (product.isOfferExpired) {
          timerPill.className = 'card-offer-timer-pill expired';
          timerPill.innerHTML = `<span>⌛ Oferta finalizada (${dateLabel})</span>`;
        } else {
          timerPill.className = 'card-offer-timer-pill active';
          timerPill.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Vence: <strong>${dateLabel}</strong> · <span class="card-timer-countdown" data-id="${product.id}">Calculando...</span></span>
          `;
        }
      }
    });
  }

  /**
   * Actualiza el modal de Vista Rápida (QuickView)
   */
  function updateQuickViewUI(product, currentPrice, originalPrice = null) {
    const qvBody = document.getElementById('quickViewBody');
    if (!qvBody) return;

    const qvPricing = qvBody.querySelector('.quickview-pricing, .tech-quickview-pricing, .home-quickview-pricing');
    if (qvPricing) {
      if (originalPrice && originalPrice > currentPrice) {
        qvPricing.innerHTML = `
          <span class="quickview-current-price">$${currentPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          <span class="quickview-orig-price">$${originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          <span class="installments-note">Hasta 12 MSI de $${(currentPrice / 12).toFixed(2)}</span>
        `;
      } else {
        qvPricing.innerHTML = `
          <span class="quickview-current-price" style="color: #111827;">$${currentPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          <span class="installments-note">Hasta 12 MSI de $${(currentPrice / 12).toFixed(2)}</span>
        `;
      }
      qvPricing.classList.add('price-reverted-flash');
      setTimeout(() => qvPricing.classList.remove('price-reverted-flash'), 1200);
    }

    const offerBanner = qvBody.querySelector('#qvOfferLiveBanner');
    if (offerBanner) {
      const dateStr = getOfferEndDateString(product);
      const dateLabel = formatOfferDate(dateStr);

      if (product.isOfferExpired) {
        offerBanner.className = 'quickview-offer-banner expired';
        offerBanner.innerHTML = `
          <div class="qv-offer-left">
            <span class="qv-offer-icon">⌛</span>
            <div>
              <div class="qv-offer-title">OFERTA FINALIZADA (${dateLabel})</div>
              <div class="qv-offer-sub">El plazo límite concluyó. El producto regresó a su precio original de <strong>$${currentPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong></div>
            </div>
          </div>
        `;
      } else {
        offerBanner.className = 'quickview-offer-banner active';
        offerBanner.innerHTML = `
          <div class="qv-offer-left">
            <span class="qv-offer-icon">⚡</span>
            <div>
              <div class="qv-offer-title">OFERTA POR TIEMPO LIMITADO</div>
              <div class="qv-offer-sub">📅 Vence: <strong>${dateLabel}</strong> · ⏳ Restan: <strong class="qv-timer-display" data-id="${product.id}">Calculando...</strong></div>
            </div>
          </div>
        `;
      }
    }
  }

  /**
   * Genera el HTML de la pastilla del temporizador para una tarjeta de producto
   */
  function getOfferCardTimerHtml(product) {
    const backup = initialOfferBackups[product.id] || (product.originalPrice && product.originalPrice > product.price ? {
      offerPrice: product.price,
      originalPrice: product.originalPrice
    } : null);

    if (!backup) return '';

    const dateStr = getOfferEndDateString(product);
    const dateLabel = formatOfferDate(dateStr);

    if (product.isOfferExpired) {
      return `
        <div class="card-offer-timer-pill expired" title="Oferta concluida el ${dateLabel}. Precio regular restaurado.">
          <span>⌛ Oferta finalizada (${dateLabel})</span>
        </div>
      `;
    }

    return `
      <div class="card-offer-timer-pill active" title="Vence el ${dateLabel}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>Vence: <strong>${dateLabel}</strong> · <span class="card-timer-countdown" data-id="${product.id}">--:--</span></span>
      </div>
    `;
  }

  /**
   * Genera el banner interactivo para QuickView con fechas exactas
   */
  function getQuickViewOfferBannerHtml(product) {
    const backup = initialOfferBackups[product.id] || (product.originalPrice && product.originalPrice > product.price ? {
      offerPrice: product.price,
      originalPrice: product.originalPrice,
      offerTitle: product.offerTitle || 'Oferta Exclusiva'
    } : null);

    if (!backup) return '';

    const dateStr = getOfferEndDateString(product);
    const dateLabel = formatOfferDate(dateStr);
    const title = product.offerTitle || backup.offerTitle || 'Oferta por tiempo limitado';

    if (product.isOfferExpired) {
      return `
        <div class="quickview-offer-banner expired" id="qvOfferLiveBanner">
          <div class="qv-offer-left">
            <span class="qv-offer-icon">⌛</span>
            <div>
              <div class="qv-offer-title">OFERTA FINALIZADA · ${title}</div>
              <div class="qv-offer-sub">El plazo concluyó el <strong>${dateLabel}</strong>. El producto regresó a su precio regular de <strong>$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong>.</div>
            </div>
          </div>
        </div>
      `;
    }

    const savings = backup.originalPrice - backup.offerPrice;
    const savingsPct = Math.round((savings / backup.originalPrice) * 100);

    return `
      <div class="quickview-offer-banner active" id="qvOfferLiveBanner">
        <div class="qv-offer-left">
          <span class="qv-offer-icon">⚡</span>
          <div>
            <div class="qv-offer-title">${title.toUpperCase()} · AHORRAS $${savings.toLocaleString('es-MX')} (${savingsPct}%)</div>
            <div class="qv-offer-sub">📅 Vence: <strong>${dateLabel}</strong> · ⏳ Restan: <strong class="qv-timer-display" data-id="${product.id}">Calculando...</strong></div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Ticker de actualización cada segundo
   */
  function startOfferTicker() {
    setInterval(() => {
      const now = Date.now();
      const expiredIds = getExpiredOfferIds();

      const cardCounters = document.querySelectorAll('.card-timer-countdown[data-id]');
      const qvCounters   = document.querySelectorAll('.qv-timer-display[data-id]');

      cardCounters.forEach(el => {
        const id = el.dataset.id;
        if (!id) return;
        if (expiredIds.includes(id)) {
          el.textContent = '00:00';
          return;
        }

        const endTime = getOfferEndTime(id);
        const diff = endTime - now;
        if (diff <= 0) {
          expireOffer(id);
        } else {
          el.textContent = formatRemainingTime(diff);
        }
      });

      qvCounters.forEach(el => {
        const id = el.dataset.id;
        if (!id) return;
        if (expiredIds.includes(id)) {
          el.textContent = '00:00';
          return;
        }

        const endTime = getOfferEndTime(id);
        const diff = endTime - now;
        if (diff <= 0) {
          expireOffer(id);
        } else {
          el.textContent = formatRemainingTime(diff);
        }
      });

      // Actualizar contadores dentro del modal del gestor de ofertas si está abierto
      const modalCounters = document.querySelectorAll('.modal-offer-timer[data-id]');
      modalCounters.forEach(el => {
        const id = el.dataset.id;
        if (!id) return;
        if (expiredIds.includes(id)) {
          el.textContent = 'Finalizada';
          el.className = 'modal-offer-timer expired';
          return;
        }
        const endTime = getOfferEndTime(id);
        const diff = endTime - now;
        if (diff <= 0) {
          el.textContent = 'Finalizada';
          el.className = 'modal-offer-timer expired';
        } else {
          el.textContent = formatRemainingTime(diff);
        }
      });
    }, 1000);
  }

  // =========================================================================
  // MODAL / GESTOR INTERACTIVO DE OFERTAS Y FECHAS
  // =========================================================================
  function openOffersModal() {
    let modal = document.getElementById('offersScheduleModal');
    let backdrop = document.getElementById('offersModalBackdrop');

    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'offersScheduleModal';
      modal.className = 'modal-window offers-schedule-modal';
      modal.innerHTML = `
        <div class="offers-modal-header">
          <div>
            <h3 style="margin: 0; font-size: 1.35rem; color: #0b1b3d; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
              <span>📅</span> Calendario y Gestor de Ofertas
            </h3>
            <p style="margin: 0.35rem 0 0; font-size: 0.85rem; color: #64748b;">
              Sincronización en tiempo real de fechas límite y retorno automático al precio regular original.
            </p>
          </div>
          <button type="button" class="modal-close-btn" id="btnCloseOffersModal" style="background: #f1f5f9; border: none; width: 34px; height: 34px; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center;">&times;</button>
        </div>
        <div class="offers-modal-body" id="offersModalBody">
          <!-- Renderizado dinámico -->
        </div>
      `;
      document.body.appendChild(modal);

      backdrop = document.createElement('div');
      backdrop.id = 'offersModalBackdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);

      modal.querySelector('#btnCloseOffersModal').addEventListener('click', closeOffersModal);
      backdrop.addEventListener('click', closeOffersModal);
    }

    renderOffersModalContent();
    modal.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeOffersModal() {
    const modal = document.getElementById('offersScheduleModal');
    const backdrop = document.getElementById('offersModalBackdrop');
    if (modal) modal.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderOffersModalContent() {
    const body = document.getElementById('offersModalBody');
    if (!body || typeof PRODUCTS_DATA === 'undefined') return;

    backupInitialOffers();
    const offerProductIds = Object.keys(initialOfferBackups);
    const expiredIds = getExpiredOfferIds();
    const activeCount = offerProductIds.length - expiredIds.length;

    const rowsHtml = offerProductIds.map(id => {
      const p = PRODUCTS_DATA.find(x => x.id === id);
      const backup = initialOfferBackups[id];
      if (!p || !backup) return '';

      const isExpired = expiredIds.includes(id);
      const dateStr = getOfferEndDateString(p);
      const dateLabel = formatOfferDate(dateStr);
      const diff = getOfferEndTime(id) - Date.now();
      const remainingLabel = isExpired || diff <= 0 ? 'Finalizada' : formatRemainingTime(diff);
      const savingsPct = Math.round(((backup.originalPrice - backup.offerPrice) / backup.originalPrice) * 100);

      return `
        <tr data-offer-row="${id}">
          <td style="padding: 0.75rem 1rem; border-bottom: 1px solid #f1f5f9;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0;" />
              <div>
                <strong style="font-size: 0.88rem; color: #0b1b3d; display: block;">${p.name}</strong>
                <span style="font-size: 0.75rem; color: #64748b;">${p.department || p.category} · SKU: ${p.sku}</span>
              </div>
            </div>
          </td>
          <td style="padding: 0.75rem 1rem; border-bottom: 1px solid #f1f5f9; font-size: 0.86rem;">
            <div style="font-weight: 700; color: ${isExpired ? '#64748b' : '#dc2626'};">
              $${isExpired ? backup.originalPrice.toLocaleString('es-MX') : backup.offerPrice.toLocaleString('es-MX')}
            </div>
            ${!isExpired ? `<span style="font-size: 0.75rem; color: #94a3b8; text-decoration: line-through;">$${backup.originalPrice.toLocaleString('es-MX')} (-${savingsPct}%)</span>` : '<span style="font-size: 0.72rem; color: #059669; font-weight: 600;">(Precio regular)</span>'}
          </td>
          <td style="padding: 0.75rem 1rem; border-bottom: 1px solid #f1f5f9; font-size: 0.84rem; color: #334155;">
            <div>📅 <strong>${dateLabel}</strong></div>
            <span class="modal-offer-timer ${isExpired ? 'expired' : 'active'}" data-id="${id}" style="font-size: 0.76rem; font-weight: 700; color: ${isExpired ? '#64748b' : '#e11d48'};">
              ⏳ ${remainingLabel}
            </span>
          </td>
          <td style="padding: 0.75rem 1rem; border-bottom: 1px solid #f1f5f9; text-align: right;">
            <div style="display: flex; gap: 0.4rem; justify-content: flex-end;">
              ${!isExpired ? `
                <button type="button" class="btn-table-action" onclick="window.CallejonOffers.expireOffer('${id}')" title="Hacer que termine ahora y vuelva a su precio original" style="background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; padding: 0.35rem 0.65rem; border-radius: 6px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
                  ⏱️ Terminar ahora
                </button>
                <button type="button" class="btn-table-action" onclick="window.CallejonOffers.setCustomOfferDate('${id}', 2)" title="Hacer que venza en 2 minutos para ver la cuenta regresiva rápida" style="background: #fef3c7; color: #b45309; border: 1px solid #fde68a; padding: 0.35rem 0.65rem; border-radius: 6px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
                  ⚡ Vence en 2m
                </button>
              ` : `
                <button type="button" class="btn-table-action" onclick="window.CallejonOffers.restoreOffer('${id}', 10)" title="Reactivar oferta por 10 minutos" style="background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.35rem 0.65rem; border-radius: 6px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
                  🔄 Reactivar 10m
                </button>
              `}
            </div>
          </td>
        </tr>
      `;
    }).join('');

    body.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 10px;">
          <div style="font-size: 0.78rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Total de Ofertas</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: #0b1b3d;">${offerProductIds.length} artículos</div>
        </div>
        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 1rem; border-radius: 10px;">
          <div style="font-size: 0.78rem; font-weight: 700; color: #065f46; text-transform: uppercase;">Ofertas Activas</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: #059669;">${activeCount} activas</div>
        </div>
        <div style="background: #fff1f2; border: 1px solid #fecdd3; padding: 1rem; border-radius: 10px;">
          <div style="font-size: 0.78rem; font-weight: 700; color: #9f1239; text-transform: uppercase;">Ofertas Finalizadas</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: #e11d48;">${expiredIds.length} en precio original</div>
        </div>
      </div>

      <div style="overflow-x: auto; background: #ffffff; border-radius: 10px; border: 1px solid #e2e8f0; max-height: 440px; overflow-y: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead style="position: sticky; top: 0; background: #f8fafc; z-index: 2;">
            <tr>
              <th style="padding: 0.75rem 1rem; font-size: 0.78rem; font-weight: 700; color: #475569; border-bottom: 2px solid #e2e8f0;">Producto</th>
              <th style="padding: 0.75rem 1rem; font-size: 0.78rem; font-weight: 700; color: #475569; border-bottom: 2px solid #e2e8f0;">Precio</th>
              <th style="padding: 0.75rem 1rem; font-size: 0.78rem; font-weight: 700; color: #475569; border-bottom: 2px solid #e2e8f0;">Fecha Límite</th>
              <th style="padding: 0.75rem 1rem; font-size: 0.78rem; font-weight: 700; color: #475569; border-bottom: 2px solid #e2e8f0; text-align: right;">Acciones Demo</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <span style="font-size: 0.82rem; color: #64748b;">
          💡 <em>Puedes cambiar fechas o forzar el fin de cualquier oferta para observar cómo el precio regresa a su valor regular original.</em>
        </span>
        <button type="button" onclick="window.CallejonOffers.resetAllOffers()" style="background: #0b1b3d; color: #ffffff; border: none; padding: 0.55rem 1.15rem; border-radius: 8px; font-size: 0.82rem; font-weight: 700; cursor: pointer;">
          Restablecer cronograma oficial
        </button>
      </div>
    `;
  }

  function updateOffersModalRow(productId) {
    const modal = document.getElementById('offersScheduleModal');
    if (modal && modal.classList.contains('active')) {
      renderOffersModalContent();
    }
  }

  // =========================================================================
  // ARRANQUE Y EJECUCIÓN
  // =========================================================================
  backupInitialOffers();
  syncOffersWithDates();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      syncOffersWithDates();
      startOfferTicker();
    });
  } else {
    syncOffersWithDates();
    startOfferTicker();
  }

  // =========================================================================
  // API GLOBAL
  // =========================================================================
  window.CallejonOffers = {
    expireOffer,
    restoreOffer,
    resetAllOffers,
    setCustomOfferDate,
    openOffersModal,
    closeOffersModal,
    getOfferCardTimerHtml,
    getQuickViewOfferBannerHtml,
    getOfferEndTime,
    getOfferEndDateString,
    formatOfferDate,
    formatRemainingTime,
    isOfferExpired: (id) => getExpiredOfferIds().includes(id),
    getInitialBackup: (id) => initialOfferBackups[id] || null,
    syncOffersWithDates
  };

})();
