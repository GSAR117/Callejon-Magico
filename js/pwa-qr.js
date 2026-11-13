/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — SISTEMA MULTIPLATAFORMA (APK + PWA + QR + BARRA MÓVIL)
 * 1. Conecta el archivo Callejón Mágico.apk / Callejon-Magico.apk al QR y
 *    al botón de descarga directa para Android.
 * 2. Soporta instalación PWA en iPhone, iPad, Android y tablets.
 * 3. Agrega la Barra Inferior estilo App (Liverpool / Coppel / Shein) en
 *    pantallas móviles y tablets sin interferir con ningún modal existente.
 * ==========================================================================
 */

(function () {
  'use strict';

  const DEFAULT_PUBLIC_BASE = 'https://gsar117.github.io/Callejon-Magico/';
  const APK_FILENAME = 'Callejon-Magico.apk';
  let deferredInstallPrompt = null;

  function getBasePublicUrl() {
    try {
      const loc = window.location;
      if (
        loc.protocol === 'https:' ||
        (loc.protocol === 'http:' && loc.hostname !== 'localhost' && loc.hostname !== '127.0.0.1')
      ) {
        const dirPath = loc.pathname.replace(/[^/]*$/, '');
        return loc.origin + dirPath;
      }
    } catch (e) {}
    return DEFAULT_PUBLIC_BASE;
  }

  function getStoreWebUrl() {
    return getBasePublicUrl();
  }

  function getApkDownloadUrl() {
    return getBasePublicUrl() + APK_FILENAME;
  }

  function registerServiceWorker() {
    if (
      'serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || window.location.protocol === 'http:')
    ) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      const installBtn = document.getElementById('btnTriggerPwaInstall');
      if (installBtn) {
        installBtn.style.display = 'inline-flex';
      }
    });
  }

  function injectStyles() {
    if (document.getElementById('callejonPwaQrStyles')) return;
    const style = document.createElement('style');
    style.id = 'callejonPwaQrStyles';
    style.textContent = `
      .pwa-qr-trigger-link {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        background: linear-gradient(135deg, #dfb743, #c58f38);
        color: #07142a !important;
        font-weight: 800 !important;
        padding: 2px 10px;
        border-radius: 999px;
        text-decoration: none;
        font-size: 0.75rem;
        cursor: pointer;
        border: none;
        box-shadow: 0 2px 8px rgba(223, 183, 67, 0.35);
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }
      .pwa-qr-trigger-link:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(223, 183, 67, 0.5);
      }
      .btn-sidebar-qr {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.65rem;
        border-radius: 8px;
        background: linear-gradient(135deg, #dfb743, #c58f38);
        color: #07142a;
        border: none;
        font-size: 0.82rem;
        font-weight: 800;
        cursor: pointer;
        width: 100%;
        transition: filter 0.2s ease;
      }
      .btn-sidebar-qr:hover {
        filter: brightness(1.08);
      }
      #pwaQrModalOverlay {
        position: fixed;
        inset: 0;
        background: rgba(7, 20, 42, 0.8);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        z-index: 25000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }
      #pwaQrModalOverlay.active {
        display: flex;
      }
      .pwa-qr-dialog {
        background: #0b1730;
        color: #f8fafc;
        border: 1.5px solid rgba(223, 183, 67, 0.45);
        border-radius: 16px;
        max-width: 470px;
        width: 100%;
        max-height: 92vh;
        overflow-y: auto;
        padding: 1.35rem 1.4rem;
        position: relative;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65);
        text-align: center;
        font-family: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;
      }
      .pwa-qr-close {
        position: absolute;
        top: 0.85rem;
        right: 0.85rem;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.06);
        color: #ffffff;
        font-size: 1.2rem;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pwa-qr-close:hover {
        background: rgba(255, 255, 255, 0.15);
      }
      .pwa-qr-badge {
        display: inline-block;
        background: rgba(223, 183, 67, 0.16);
        color: #dfb743;
        border: 1px solid rgba(223, 183, 67, 0.35);
        font-size: 0.68rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        padding: 3px 10px;
        border-radius: 999px;
        margin-bottom: 0.45rem;
      }
      .pwa-qr-title {
        font-size: 1.25rem;
        font-weight: 800;
        color: #ffffff;
        margin: 0 0 0.3rem;
      }
      .pwa-qr-title span {
        color: #dfb743;
      }
      .pwa-qr-subtitle {
        font-size: 0.8rem;
        color: #94a3b8;
        line-height: 1.4;
        margin: 0 0 0.85rem;
      }
      .pwa-qr-mode-tabs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.45rem;
        background: rgba(255, 255, 255, 0.05);
        padding: 0.3rem;
        border-radius: 10px;
        border: 1px solid #1e325c;
        margin-bottom: 0.85rem;
      }
      .pwa-qr-mode-tab {
        padding: 0.48rem 0.5rem;
        border-radius: 7px;
        border: none;
        background: transparent;
        color: #cbd5e1;
        font-size: 0.74rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .pwa-qr-mode-tab.active {
        background: linear-gradient(135deg, #dfb743, #c58f38);
        color: #07142a;
        font-weight: 800;
        box-shadow: 0 2px 8px rgba(223, 183, 67, 0.3);
      }
      .pwa-qr-frame {
        background: #ffffff;
        padding: 0.9rem;
        border-radius: 14px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 3px solid #dfb743;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
        margin-bottom: 0.85rem;
      }
      .pwa-qr-frame img {
        width: 200px;
        height: 200px;
        display: block;
      }
      .pwa-qr-frame-caption {
        margin-top: 0.4rem;
        font-size: 0.7rem;
        font-weight: 800;
        color: #07142a;
        letter-spacing: 0.04em;
      }
      .pwa-qr-url-box {
        display: flex;
        gap: 0.4rem;
        margin-bottom: 0.75rem;
      }
      .pwa-qr-url-input {
        flex: 1;
        padding: 0.5rem 0.7rem;
        border-radius: 8px;
        border: 1px solid #1e325c;
        background: rgba(255, 255, 255, 0.06);
        color: #f8fafc;
        font-size: 0.75rem;
        outline: none;
      }
      .pwa-qr-url-input:focus {
        border-color: #dfb743;
      }
      .pwa-qr-btn-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        margin-bottom: 0.8rem;
      }
      .pwa-qr-btn {
        padding: 0.62rem 0.75rem;
        border-radius: 8px;
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.38rem;
        text-decoration: none;
      }
      .pwa-qr-btn.primary {
        background: linear-gradient(135deg, #dfb743, #c58f38);
        color: #07142a !important;
        grid-column: 1 / -1;
        font-size: 0.84rem;
        font-weight: 800;
        box-shadow: 0 4px 12px rgba(223, 183, 67, 0.3);
      }
      .pwa-qr-btn.secondary {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff !important;
        border: 1px solid #1e325c;
      }
      .pwa-qr-btn.secondary:hover {
        background: rgba(255, 255, 255, 0.14);
      }
      .pwa-qr-steps {
        text-align: left;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid #1e325c;
        border-radius: 10px;
        padding: 0.75rem 0.9rem;
        font-size: 0.75rem;
        color: #cbd5e1;
        line-height: 1.48;
      }
      .pwa-qr-steps strong {
        color: #dfb743;
      }

      /* ====================================================================
         BARRA INFERIOR ESTILO APP (LIVERPOOL / COPPEL / SHEIN) EN MÓVILES
         ==================================================================== */
      #callejonMobileBottomNav {
        display: none;
      }
      @media (max-width: 900px) {
        body.has-callejon-mobile-nav {
          padding-bottom: 68px !important;
        }
        #callejonMobileBottomNav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: rgba(7, 20, 42, 0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1.5px solid rgba(223, 183, 67, 0.35);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          z-index: 9500;
          box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.45);
          padding: 0 4px env(safe-area-inset-bottom, 0px);
        }
        .cm-bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 0.66rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          padding: 6px 2px;
          position: relative;
          font-family: 'Inter', system-ui, sans-serif;
          transition: color 0.15s ease, transform 0.15s ease;
        }
        .cm-bottom-nav-item svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
        }
        .cm-bottom-nav-item.active,
        .cm-bottom-nav-item:active {
          color: #dfb743;
          font-weight: 800;
        }
        .cm-bottom-nav-badge {
          position: absolute;
          top: 2px;
          right: calc(50% - 18px);
          background: #dfb743;
          color: #07142a;
          font-size: 0.6rem;
          font-weight: 800;
          min-width: 16px;
          height: 16px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        }
        /* Correcciones de tamaño y centrado para pantallas móviles */
        .user-profile-menu {
          position: fixed !important;
          top: 105px !important;
          left: 12px !important;
          right: 12px !important;
          width: calc(100vw - 24px) !important;
          max-width: 340px !important;
          margin: 0 auto !important;
          z-index: 10050 !important;
          box-shadow: 0 20px 50px rgba(7, 19, 43, 0.45) !important;
          border: 1.5px solid rgba(197, 143, 56, 0.45) !important;
        }
        .section-header-row {
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          flex-wrap: wrap !important;
          gap: 0.35rem 0.75rem !important;
          margin-bottom: 1rem !important;
          padding-bottom: 0.65rem !important;
        }
        .section-title {
          font-size: 1.22rem !important;
          line-height: 1.2 !important;
        }
        .section-view-all-link {
          font-size: 0.78rem !important;
          white-space: nowrap !important;
        }
        .promo-bento-card {
          height: 165px !important;
          padding: 1rem 1.15rem !important;
          border-radius: 12px !important;
        }
        .promo-bento-title {
          font-size: 1.05rem !important;
          line-height: 1.2 !important;
          margin-bottom: 0.6rem !important;
        }
        .hero-slider-wrapper,
        .hero-slide.active {
          min-height: 320px !important;
        }
        .hero-title {
          font-size: 1.45rem !important;
          line-height: 1.18 !important;
        }
        .nav-all-categories-btn {
          font-size: 0.76rem !important;
          padding: 0.55rem 0.65rem 0.55rem 0 !important;
          margin-right: 0.65rem !important;
          gap: 0.35rem !important;
          white-space: nowrap !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function buildQrImageUrl(targetUrl) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&color=07142a&bgcolor=ffffff&data=${encodeURIComponent(targetUrl)}`;
  }

  function injectMobileBottomNav() {
    // No insertar barra de compras en el panel administrativo
    if (/administracion\.html$/i.test(window.location.pathname)) return;
    if (document.getElementById('callejonMobileBottomNav')) return;

    document.body.classList.add('has-callejon-mobile-nav');

    const nav = document.createElement('nav');
    nav.id = 'callejonMobileBottomNav';
    nav.setAttribute('aria-label', 'Navegación móvil de la App');
    nav.innerHTML = `
      <a href="index.html" class="cm-bottom-nav-item active" id="cmNavHome">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Inicio</span>
      </a>
      <button type="button" class="cm-bottom-nav-item" id="cmNavCategories">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span>Categorías</span>
      </button>
      <button type="button" class="cm-bottom-nav-item" id="cmNavCard">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
        <span>Mi Tarjeta</span>
      </button>
      <button type="button" class="cm-bottom-nav-item" id="cmNavCart">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span class="cm-bottom-nav-badge" id="cmNavCartBadge">0</span>
        <span>Carrito</span>
      </button>
      <button type="button" class="cm-bottom-nav-item" id="cmNavAccount">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Mi Cuenta</span>
      </button>
    `;

    document.body.appendChild(nav);

    // Conectar botones con las funciones nativas de la tienda
    document.getElementById('cmNavCategories')?.addEventListener('click', () => {
      const catBtn = document.getElementById('btnAllCategories');
      if (catBtn) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        catBtn.click();
      }
    });

    document.getElementById('cmNavCard')?.addEventListener('click', () => {
      const cardBtn = document.querySelector('.open-card-modal-btn');
      if (cardBtn) cardBtn.click();
    });

    document.getElementById('cmNavCart')?.addEventListener('click', () => {
      const cartBtn = document.getElementById('btnOpenCart');
      if (cartBtn) cartBtn.click();
    });

    document.getElementById('cmNavAccount')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const accBtn = document.getElementById('btnUserAccount');
      if (accBtn) accBtn.click();
    });

    // Sincronizar contador del carrito en tiempo real
    const headerBadge = document.getElementById('cartBadgeCount');
    const bottomBadge = document.getElementById('cmNavCartBadge');
    if (headerBadge && bottomBadge) {
      const syncBadge = () => {
        bottomBadge.textContent = headerBadge.textContent || '0';
      };
      syncBadge();
      const observer = new MutationObserver(syncBadge);
      observer.observe(headerBadge, { childList: true, characterData: true, subtree: true });
    }
  }

  function injectTriggerAndModal() {
    injectStyles();
    injectMobileBottomNav();

    // 1. Insertar botón en la barra superior de la tienda (.top-ticker-links)
    const tickerLinks = document.querySelector('.top-ticker-links');
    if (tickerLinks && !document.getElementById('btnOpenPwaQrStore')) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'btnOpenPwaQrStore';
      btn.className = 'pwa-qr-trigger-link';
      btn.innerHTML = '📱 App Móvil / QR (.APK)';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openQrModal();
      });
      tickerLinks.insertBefore(btn, tickerLinks.firstChild);
    }

    // 2. Insertar botón en la barra lateral de administración (.admin-sidebar-footer)
    const adminFooter = document.querySelector('.admin-sidebar-footer');
    if (adminFooter && !document.getElementById('btnOpenPwaQrAdmin')) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'btnOpenPwaQrAdmin';
      btn.className = 'btn-sidebar-qr';
      btn.innerHTML = '📱 Código QR App (.APK)';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openQrModal();
      });
      adminFooter.insertBefore(btn, adminFooter.firstChild);
    }

    // 3. Inyectar modal propio aislado (#pwaQrModalOverlay)
    if (document.getElementById('pwaQrModalOverlay')) return;
    const apkUrl = getApkDownloadUrl();
    const storeUrl = getStoreWebUrl();
    const qrSrc = buildQrImageUrl(apkUrl);

    const overlay = document.createElement('div');
    overlay.id = 'pwaQrModalOverlay';
    overlay.innerHTML = `
      <div class="pwa-qr-dialog" role="dialog" aria-modal="true" aria-label="Descargar App Callejón Mágico">
        <button type="button" class="pwa-qr-close" id="btnClosePwaQrModal" aria-label="Cerrar">&times;</button>
        <span class="pwa-qr-badge">✨ Instalador Oficial · Android APK & iOS</span>
        <h3 class="pwa-qr-title">App <span>Callejón Mágico</span></h3>
        <p class="pwa-qr-subtitle">
          Escanea el código QR con la cámara de tu <strong>celular o tablet</strong> para descargar e instalar la App:
        </p>

        <div class="pwa-qr-mode-tabs">
          <button type="button" class="pwa-qr-mode-tab active" id="tabQrModeApk" data-url="${apkUrl}">
            🤖 Descarga Directa .APK
          </button>
          <button type="button" class="pwa-qr-mode-tab" id="tabQrModeWeb" data-url="${storeUrl}">
            🌐 App Web (iPhone / iPad)
          </button>
        </div>

        <div class="pwa-qr-frame">
          <img id="pwaQrImage" src="${qrSrc}" alt="Código QR Callejón Mágico" />
          <span class="pwa-qr-frame-caption" id="pwaQrFrameCaption">ESCANEA PARA DESCARGAR EL .APK EN ANDROID</span>
        </div>

        <div class="pwa-qr-url-box">
          <input type="text" id="pwaQrUrlInput" class="pwa-qr-url-input" value="${apkUrl}" title="Dirección vinculada al QR" />
          <button type="button" class="pwa-qr-btn secondary" id="btnUpdateQrUrl" title="Actualizar QR">Actualizar</button>
        </div>

        <div class="pwa-qr-btn-row">
          <a class="pwa-qr-btn primary" id="btnDirectApkDownload" href="./${APK_FILENAME}" download="${APK_FILENAME}">
            🤖 Descargar Instalador Android (.APK)
          </a>
          <button type="button" class="pwa-qr-btn secondary" id="btnTriggerPwaInstall" style="grid-column: 1 / -1; display: none;">
            📲 Instalar directamente desde el navegador
          </button>
          <button type="button" class="pwa-qr-btn secondary" id="btnCopyPwaUrl">
            📋 Copiar Enlace
          </button>
          <a id="btnDownloadQrImg" class="pwa-qr-btn secondary" href="${qrSrc}" target="_blank" rel="noopener" download="QR_Callejon_Magico.png">
            ⬇️ Guardar QR
          </a>
        </div>

        <div class="pwa-qr-steps" id="pwaInstallInstructions">
          <strong>¿Cómo instalarla en tu dispositivo?</strong><br>
          • <strong>En Android (.APK directo):</strong> Escanea el QR en modo <em>Descarga Directa .APK</em> o toca el botón dorado arriba, abre el archivo <strong>Callejon-Magico.apk</strong> y pulsa <strong>"Instalar"</strong>.<br>
          • <strong>En iPhone / iPad (iOS):</strong> Cambia a la pestaña <em>App Web (iPhone / iPad)</em>, escanea el QR con Safari y elige <strong>Compartir → Agregar a inicio</strong>.
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const setQrTarget = (targetUrl, captionText, activeTabId) => {
      const input = document.getElementById('pwaQrUrlInput');
      const img = document.getElementById('pwaQrImage');
      const dl = document.getElementById('btnDownloadQrImg');
      const cap = document.getElementById('pwaQrFrameCaption');
      const newSrc = buildQrImageUrl(targetUrl);
      if (input) input.value = targetUrl;
      if (img) img.src = newSrc;
      if (dl) dl.href = newSrc;
      if (cap && captionText) cap.textContent = captionText;
      document.querySelectorAll('.pwa-qr-mode-tab').forEach((btn) => {
        btn.classList.toggle('active', btn.id === activeTabId);
      });
    };

    document.getElementById('tabQrModeApk')?.addEventListener('click', () => {
      setQrTarget(getApkDownloadUrl(), 'ESCANEA PARA DESCARGAR EL .APK EN ANDROID', 'tabQrModeApk');
    });

    document.getElementById('tabQrModeWeb')?.addEventListener('click', () => {
      setQrTarget(getStoreWebUrl(), 'ESCANEA PARA ABRIR EN IPHONE / IPAD / WEB', 'tabQrModeWeb');
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeQrModal();
    });

    document.getElementById('btnClosePwaQrModal')?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeQrModal();
    });

    document.getElementById('btnUpdateQrUrl')?.addEventListener('click', () => {
      const input = document.getElementById('pwaQrUrlInput');
      const val = (input ? input.value.trim() : '') || getApkDownloadUrl();
      setQrTarget(val, 'CÓDIGO QR PERSONALIZADO', '');
    });

    document.getElementById('btnCopyPwaUrl')?.addEventListener('click', () => {
      const input = document.getElementById('pwaQrUrlInput');
      const val = (input ? input.value.trim() : '') || getApkDownloadUrl();
      navigator.clipboard?.writeText(val).then(() => {
        const btn = document.getElementById('btnCopyPwaUrl');
        if (btn) {
          const old = btn.textContent;
          btn.textContent = '✓ ¡Copiado!';
          setTimeout(() => {
            btn.textContent = old;
          }, 1800);
        }
      });
    });

    document.getElementById('btnTriggerPwaInstall')?.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
      }
    });
  }

  function openQrModal() {
    injectTriggerAndModal();
    const overlay = document.getElementById('pwaQrModalOverlay');
    if (overlay) overlay.classList.add('active');
  }

  function closeQrModal() {
    const overlay = document.getElementById('pwaQrModalOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  registerServiceWorker();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectTriggerAndModal);
  } else {
    injectTriggerAndModal();
  }

  window.CallejonPWA = {
    openQrModal,
    closeQrModal
  };
})();
