/**
 * DAVANTI PRODUCT IMAGE LIGHTBOX
 * Visor de imagen en pantalla completa para todos los productos de la tienda.
 * Compatible con index.html, hogar.html, moda.html, belleza.html, etc.
 *
 * Funcionalidades:
 *  • Clic en imagen de producto → abre lightbox con imagen grande
 *  • Rueda del ratón → zoom 1x–3x sobre la imagen
 *  • Tecla Escape → cerrar | Flechas ← → → navegar si hay galería
 *  • Swipe táctil para cerrar (swipe down) o navegar (swipe left/right)
 *  • Clic fuera de la imagen → cerrar
 *
 * IMPORTANTE: No usa capture:true para no interferir con otros handlers.
 * El lightbox sólo se abre al hacer clic DIRECTAMENTE en una <img> de producto,
 * nunca si el clic ocurre en un botón o enlace.
 */

(function () {
  'use strict';

  // ── Estado interno ──────────────────────────────────────────────────────
  const LB = {
    images: [],
    current: 0,
    zoomLevel: 1,
    zoomMax: 3,
    zoomStep: 0.4,
    touchStart: { x: 0, y: 0 },
  };

  // Selectores de imágenes de producto en todas las páginas
  const PRODUCT_IMG_CLASSES = [
    'product-img',
    'home-card-img',
    'gaming-card-img',
    'moda-card-img',
    'fashion-card-img',
    'belleza-card-img',
    'beauty-card-img',
    'deporte-card-img',
    'sports-card-img',
    'juguete-card-img',
    'toy-card-img',
    'tech-card-img',
  ];

  // ── Crear el HTML del lightbox en el DOM ─────────────────────────────────
  function buildLightbox() {
    if (document.getElementById('davanti-lightbox')) return;

    const lb = document.createElement('div');
    lb.id = 'davanti-lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Visor de imagen del producto');

    lb.innerHTML = `
      <button class="lb-close-btn" id="lbCloseBtn" aria-label="Cerrar visor">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <span class="lb-counter" id="lbCounter"></span>

      <button class="lb-nav-btn lb-prev-btn" id="lbPrevBtn" aria-label="Imagen anterior" style="display:none">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="lb-container" id="lbContainer">
        <img class="lb-img" id="lbImg" src="" alt="" draggable="false" />
        <div class="lb-caption" id="lbCaption"></div>
        <div class="lb-dots" id="lbDots"></div>
      </div>

      <button class="lb-nav-btn lb-next-btn" id="lbNextBtn" aria-label="Siguiente imagen" style="display:none">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <span class="lb-zoom-hint" id="lbZoomHint">🔍 Rueda del ratón para hacer zoom · Doble clic para zoom rápido · Esc para cerrar</span>
    `;

    document.body.appendChild(lb);
    bindLightboxEvents(lb);
  }

  // ── ¿Es esta imagen una imagen de producto? ──────────────────────────────
  function isProductImage(el) {
    if (!el || el.tagName !== 'IMG') return false;
    return PRODUCT_IMG_CLASSES.some(cls => el.classList.contains(cls));
  }

  // ── ¿El clic ocurrió sobre un botón/enlace/acción? ───────────────────────
  // Sube la cadena de ancestros buscando elementos interactivos
  function clickHitInteractiveElement(target) {
    let el = target;
    while (el && el !== document.body) {
      const tag = el.tagName;
      if (tag === 'BUTTON' || tag === 'A' || tag === 'SELECT' || tag === 'INPUT') return true;
      if (el.dataset && el.dataset.action) return true;
      if (el.classList && (
        el.classList.contains('product-quickview-btn') ||
        el.classList.contains('home-card-btn-action') ||
        el.classList.contains('btn-add-to-cart') ||
        el.classList.contains('btn-favorite-toggle') ||
        el.classList.contains('card-action-fav')
      )) return true;
      // Si ya llegamos a la imagen, parar
      if (el.tagName === 'IMG') break;
      el = el.parentElement;
    }
    return false;
  }

  // ── Abrir el lightbox ────────────────────────────────────────────────────
  function openLightbox(src, alt, images) {
    const lb = document.getElementById('davanti-lightbox');
    if (!lb) return;

    LB.images = (images && images.length > 0) ? images : [{ src, alt }];
    LB.current = LB.images.findIndex(img => img.src === src);
    if (LB.current < 0) LB.current = 0;

    resetZoom();
    renderCurrentImage();

    lb.classList.add('lb-visible');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const closeBtn = document.getElementById('lbCloseBtn');
      if (closeBtn) closeBtn.focus();
    }, 60);
  }

  // ── Cerrar el lightbox ───────────────────────────────────────────────────
  function closeLightbox() {
    const lb = document.getElementById('davanti-lightbox');
    if (!lb) return;
    lb.classList.remove('lb-visible');
    document.body.style.overflow = '';
    resetZoom();
  }

  // ── Renderizar imagen actual ─────────────────────────────────────────────
  function renderCurrentImage() {
    const lbImg     = document.getElementById('lbImg');
    const lbCaption = document.getElementById('lbCaption');
    const lbCounter = document.getElementById('lbCounter');
    const lbDots    = document.getElementById('lbDots');
    const lbPrev    = document.getElementById('lbPrevBtn');
    const lbNext    = document.getElementById('lbNextBtn');

    const item = LB.images[LB.current];
    if (!item || !lbImg) return;

    lbImg.style.opacity = '0';
    lbImg.style.transition = 'opacity 0.18s ease';

    setTimeout(() => {
      lbImg.src = item.src;
      lbImg.alt = item.alt || '';
      if (lbImg.complete) {
        lbImg.style.opacity = '1';
      } else {
        lbImg.onload = () => { lbImg.style.opacity = '1'; };
        lbImg.onerror = () => { lbImg.style.opacity = '1'; };
      }
    }, 100);

    if (lbCaption) {
      lbCaption.innerHTML = item.alt ? `<strong>${item.alt}</strong>` : '';
    }

    const showNav = LB.images.length > 1;

    if (lbCounter) {
      lbCounter.textContent = showNav ? `${LB.current + 1} / ${LB.images.length}` : '';
    }

    if (lbDots) {
      lbDots.innerHTML = showNav
        ? LB.images.map((_, i) =>
            `<button class="lb-dot ${i === LB.current ? 'active' : ''}" data-lb-idx="${i}" aria-label="Ir a imagen ${i + 1}"></button>`
          ).join('')
        : '';
    }

    if (lbPrev) lbPrev.style.display = showNav ? 'flex' : 'none';
    if (lbNext) lbNext.style.display = showNav ? 'flex' : 'none';
  }

  // ── Navegación ───────────────────────────────────────────────────────────
  function goNext() {
    if (LB.images.length <= 1) return;
    LB.current = (LB.current + 1) % LB.images.length;
    resetZoom();
    renderCurrentImage();
  }

  function goPrev() {
    if (LB.images.length <= 1) return;
    LB.current = (LB.current - 1 + LB.images.length) % LB.images.length;
    resetZoom();
    renderCurrentImage();
  }

  // ── Zoom ─────────────────────────────────────────────────────────────────
  function handleWheel(e) {
    e.preventDefault();
    const lbImg = document.getElementById('lbImg');
    if (!lbImg) return;
    const delta = e.deltaY < 0 ? LB.zoomStep : -LB.zoomStep;
    LB.zoomLevel = Math.min(LB.zoomMax, Math.max(1, LB.zoomLevel + delta));
    applyZoom(lbImg);
  }

  function applyZoom(lbImg) {
    if (!lbImg) return;
    lbImg.style.transition = 'transform 0.15s ease';
    lbImg.style.transform = `scale(${LB.zoomLevel})`;
    lbImg.style.cursor = LB.zoomLevel > 1 ? 'grab' : 'zoom-in';

    const hint = document.getElementById('lbZoomHint');
    if (hint) hint.style.opacity = LB.zoomLevel > 1 ? '0' : '';
  }

  function resetZoom() {
    LB.zoomLevel = 1;
    const lbImg = document.getElementById('lbImg');
    if (lbImg) {
      lbImg.style.transform = 'scale(1)';
      lbImg.style.cursor = 'zoom-in';
    }
    const hint = document.getElementById('lbZoomHint');
    if (hint) hint.style.opacity = '';
  }

  // ── Recolectar imágenes de la grilla visible ─────────────────────────────
  function collectGridImages() {
    const results = [];
    const seen = new Set();

    const selector = PRODUCT_IMG_CLASSES.map(c => `.${c}`).join(', ');
    const allImgs = document.querySelectorAll(selector);

    allImgs.forEach(img => {
      const src = img.src || img.dataset.src;
      if (!src || seen.has(src)) return;
      seen.add(src);

      const card = img.closest('article') || img.closest('[data-product-id]') || img.closest('[data-id]');
      let alt = img.alt || '';
      if (card) {
        const titleEl = card.querySelector('h3, .product-title, .home-card-title, .gaming-card-title, .fashion-card-title');
        if (titleEl) alt = titleEl.textContent.trim() || alt;
      }

      results.push({ src, alt });
    });

    return results;
  }

  // ── Eventos del lightbox ─────────────────────────────────────────────────
  function bindLightboxEvents(lb) {
    // Clic en el fondo → cerrar
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });

    document.getElementById('lbCloseBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });

    document.getElementById('lbPrevBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      goPrev();
    });

    document.getElementById('lbNextBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      goNext();
    });

    document.getElementById('lbDots')?.addEventListener('click', (e) => {
      const dot = e.target.closest('[data-lb-idx]');
      if (dot) {
        LB.current = parseInt(dot.dataset.lbIdx, 10);
        resetZoom();
        renderCurrentImage();
      }
    });

    // Doble clic en imagen → zoom
    document.getElementById('lbImg')?.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      LB.zoomLevel = LB.zoomLevel > 1 ? 1 : 2;
      applyZoom(document.getElementById('lbImg'));
    });

    // Rueda del ratón → zoom
    lb.addEventListener('wheel', handleWheel, { passive: false });

    // Teclado
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('lb-visible')) return;
      if (e.key === 'Escape')     { closeLightbox(); return; }
      if (e.key === 'ArrowRight') { goNext(); return; }
      if (e.key === 'ArrowLeft')  { goPrev(); return; }
      if (e.key === '+' || e.key === '=') {
        LB.zoomLevel = Math.min(LB.zoomMax, LB.zoomLevel + LB.zoomStep);
        applyZoom(document.getElementById('lbImg'));
      }
      if (e.key === '-') {
        LB.zoomLevel = Math.max(1, LB.zoomLevel - LB.zoomStep);
        applyZoom(document.getElementById('lbImg'));
      }
    });

    // Swipe táctil
    lb.addEventListener('touchstart', (e) => {
      LB.touchStart.x = e.touches[0].clientX;
      LB.touchStart.y = e.touches[0].clientY;
    }, { passive: true });

    lb.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - LB.touchStart.x;
      const dy = e.changedTouches[0].clientY - LB.touchStart.y;
      if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx)) {
        closeLightbox();
      } else if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) goNext(); else goPrev();
      }
    }, { passive: true });
  }

  // ── Delegación de clics en imágenes de producto ──────────────────────────
  // Las imágenes del catálogo NO se interceptan por el lightbox para permitir que
  // el clic abra directamente la ficha técnica de detalles (Quick View Modal).
  // El lightbox se reserva exclusivamente si se hace clic dentro del modal en la imagen grande.
  function setupProductImageClicks() {
    document.addEventListener('click', (e) => {
      // El lightbox ya está abierto → no hacer nada más
      const lb = document.getElementById('davanti-lightbox');
      if (lb && lb.classList.contains('lb-visible')) return;

      const target = e.target;

      // ── Clic en imagen dentro del Quick View modal para ampliar ──
      const qvImg = target.closest('.quickview-img');
      if (qvImg && qvImg.tagName === 'IMG') {
        if (e.target === qvImg || e.target.tagName === 'IMG') {
          e.stopPropagation();
          openLightbox(qvImg.src, qvImg.alt, [{ src: qvImg.src, alt: qvImg.alt }]);
        }
      }
    });
  }

  // ── Inicialización ───────────────────────────────────────────────────────
  function init() {
    buildLightbox();
    setupProductImageClicks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // API pública
  window.DavantiLightbox = { open: openLightbox, close: closeLightbox };

})();
