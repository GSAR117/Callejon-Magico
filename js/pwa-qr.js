/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — SISTEMA MULTIPLATAFORMA (PWA + GENERADOR DE CÓDIGO QR)
 * Permite escanear el código QR para abrir e instalar la App en celulares
 * y tablets (Android, iPhone, iPad) sin interferir con ningún otro modal.
 * ==========================================================================
 */

(function () {
  'use strict';

  const DEFAULT_PUBLIC_URL = 'https://gsar117.github.io/Callejon-Magico/';
  let deferredInstallPrompt = null;

  function getAppTargetUrl() {
    try {
      const loc = window.location;
      if (loc.protocol === 'https:' || (loc.protocol === 'http:' && loc.hostname !== 'localhost' && loc.hostname !== '127.0.0.1')) {
        // Si ya está en un dominio público o IP de red local, usar esa URL hacia la tienda
        return loc.origin + loc.pathname.replace(/administracion\.html$/i, 'index.html');
      }
    } catch (e) {}
    return DEFAULT_PUBLIC_URL;
  }

  // Registrar Service Worker para habilitar instalación PWA
  function registerServiceWorker() {
    if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.protocol === 'http:')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      const installBtn = document.getElementById('btnTriggerPwaInstall');
      if (installBtn) {
        installBtn.textContent = '📲 Instalar App Ahora (1 clic)';
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
        background: rgba(7, 20, 42, 0.78);
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
        max-width: 460px;
        width: 100%;
        max-height: 92vh;
        overflow-y: auto;
        padding: 1.5rem;
        position: relative;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65);
        text-align: center;
        font-family: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;
      }
      .pwa-qr-close {
        position: absolute;
        top: 0.9rem;
        right: 0.9rem;
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
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        padding: 3px 10px;
        border-radius: 999px;
        margin-bottom: 0.55rem;
      }
      .pwa-qr-title {
        font-size: 1.3rem;
        font-weight: 800;
        color: #ffffff;
        margin: 0 0 0.35rem;
      }
      .pwa-qr-title span {
        color: #dfb743;
      }
      .pwa-qr-subtitle {
        font-size: 0.82rem;
        color: #94a3b8;
        line-height: 1.45;
        margin: 0 0 1.1rem;
      }
      .pwa-qr-frame {
        background: #ffffff;
        padding: 1rem;
        border-radius: 14px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 3px solid #dfb743;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
        margin-bottom: 1rem;
      }
      .pwa-qr-frame img {
        width: 210px;
        height: 210px;
        display: block;
      }
      .pwa-qr-frame-caption {
        margin-top: 0.45rem;
        font-size: 0.72rem;
        font-weight: 800;
        color: #07142a;
        letter-spacing: 0.04em;
      }
      .pwa-qr-url-box {
        display: flex;
        gap: 0.4rem;
        margin-bottom: 0.9rem;
      }
      .pwa-qr-url-input {
        flex: 1;
        padding: 0.55rem 0.75rem;
        border-radius: 8px;
        border: 1px solid #1e325c;
        background: rgba(255, 255, 255, 0.06);
        color: #f8fafc;
        font-size: 0.78rem;
        outline: none;
      }
      .pwa-qr-url-input:focus {
        border-color: #dfb743;
      }
      .pwa-qr-btn-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.55rem;
        margin-bottom: 0.85rem;
      }
      .pwa-qr-btn {
        padding: 0.65rem 0.85rem;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 700;
        cursor: pointer;
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        text-decoration: none;
      }
      .pwa-qr-btn.primary {
        background: linear-gradient(135deg, #dfb743, #c58f38);
        color: #07142a;
        grid-column: 1 / -1;
        font-size: 0.86rem;
        font-weight: 800;
      }
      .pwa-qr-btn.secondary {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
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
        padding: 0.8rem 0.95rem;
        font-size: 0.76rem;
        color: #cbd5e1;
        line-height: 1.5;
      }
      .pwa-qr-steps strong {
        color: #dfb743;
      }
    `;
    document.head.appendChild(style);
  }

  function buildQrImageUrl(targetUrl) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&color=07142a&bgcolor=ffffff&data=${encodeURIComponent(targetUrl)}`;
  }

  function injectTriggerAndModal() {
    injectStyles();

    // 1. Insertar botón en la barra superior de la tienda (.top-ticker-links)
    const tickerLinks = document.querySelector('.top-ticker-links');
    if (tickerLinks && !document.getElementById('btnOpenPwaQrStore')) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = 'btnOpenPwaQrStore';
      btn.className = 'pwa-qr-trigger-link';
      btn.innerHTML = '📱 App Móvil / QR';
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
      btn.innerHTML = '📱 Código QR App Móvil';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openQrModal();
      });
      adminFooter.insertBefore(btn, adminFooter.firstChild);
    }

    // 3. Inyectar modal propio aislado (#pwaQrModalOverlay)
    if (document.getElementById('pwaQrModalOverlay')) return;
    const defaultUrl = getAppTargetUrl();
    const qrSrc = buildQrImageUrl(defaultUrl);

    const overlay = document.createElement('div');
    overlay.id = 'pwaQrModalOverlay';
    overlay.innerHTML = `
      <div class="pwa-qr-dialog" role="dialog" aria-modal="true" aria-label="Descargar App Callejón Mágico">
        <button type="button" class="pwa-qr-close" id="btnClosePwaQrModal" aria-label="Cerrar">&times;</button>
        <span class="pwa-qr-badge">✨ App Multiplataforma · iOS & Android</span>
        <h3 class="pwa-qr-title">App Móvil <span>Callejón Mágico</span></h3>
        <p class="pwa-qr-subtitle">
          Escanea este código QR con la cámara de tu <strong>celular o tablet</strong> para abrir e instalar la aplicación oficial de la tienda:
        </p>

        <div class="pwa-qr-frame">
          <img id="pwaQrImage" src="${qrSrc}" alt="Código QR Callejón Mágico" />
          <span class="pwa-qr-frame-caption">ESCANÉAME CON TU CELULAR O TABLET</span>
        </div>

        <div class="pwa-qr-url-box">
          <input type="text" id="pwaQrUrlInput" class="pwa-qr-url-input" value="${defaultUrl}" title="Dirección web vinculada al QR" />
          <button type="button" class="pwa-qr-btn secondary" id="btnUpdateQrUrl" title="Actualizar QR con esta URL">Actualizar QR</button>
        </div>

        <div class="pwa-qr-btn-row">
          <button type="button" class="pwa-qr-btn primary" id="btnTriggerPwaInstall">
            📲 Instalar App en este Dispositivo
          </button>
          <button type="button" class="pwa-qr-btn secondary" id="btnCopyPwaUrl">
            📋 Copiar Enlace
          </button>
          <a id="btnDownloadQrImg" class="pwa-qr-btn secondary" href="${qrSrc}" target="_blank" rel="noopener" download="QR_Callejon_Magico.png">
            ⬇️ Guardar QR
          </a>
        </div>

        <div class="pwa-qr-steps" id="pwaInstallInstructions">
          <strong>¿Cómo instalarla en tu celular o tablet?</strong><br>
          • <strong>En Android (Chrome):</strong> Escanea el QR, toca el menú <strong>⋮</strong> (o el aviso inferior) y selecciona <strong>"Instalar aplicación"</strong>.<br>
          • <strong>En iPhone / iPad (Safari):</strong> Escanea el QR, toca el botón <strong>Compartir</strong> y elige <strong>"Agregar a pantalla de inicio"</strong>.
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Eventos del modal QR
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeQrModal();
    });

    document.getElementById('btnClosePwaQrModal')?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeQrModal();
    });

    document.getElementById('btnUpdateQrUrl')?.addEventListener('click', () => {
      const input = document.getElementById('pwaQrUrlInput');
      const img = document.getElementById('pwaQrImage');
      const dl = document.getElementById('btnDownloadQrImg');
      const val = (input ? input.value.trim() : '') || DEFAULT_PUBLIC_URL;
      const newSrc = buildQrImageUrl(val);
      if (img) img.src = newSrc;
      if (dl) dl.href = newSrc;
    });

    document.getElementById('btnCopyPwaUrl')?.addEventListener('click', () => {
      const input = document.getElementById('pwaQrUrlInput');
      const val = (input ? input.value.trim() : '') || DEFAULT_PUBLIC_URL;
      navigator.clipboard?.writeText(val).then(() => {
        const btn = document.getElementById('btnCopyPwaUrl');
        if (btn) {
          const old = btn.textContent;
          btn.textContent = '✓ ¡Copiado!';
          setTimeout(() => { btn.textContent = old; }, 1800);
        }
      });
    });

    document.getElementById('btnTriggerPwaInstall')?.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
      } else {
        const steps = document.getElementById('pwaInstallInstructions');
        if (steps) {
          steps.style.borderColor = '#dfb743';
          steps.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
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

