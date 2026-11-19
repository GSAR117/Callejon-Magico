/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — SISTEMA OFICIAL DE CÓDIGOS DE BARRAS (EAN-13) Y
 * MÓDULO ADMINISTRATIVO DE CAJA FÍSICA / PUNTO DE VENTA (POS)
 * ==========================================================================
 * - En la Tienda del Cliente:
 *   Genera y muestra la etiqueta de código de barras real estándar EAN-13
 *   (GS1 México 750) en cada producto (botón en tarjeta y en vista rápida),
 *   100% escaneable desde la pantalla con cualquier app móvil lectora.
 * - En el Panel de Administrador (administracion.html):
 *   Habilita la función «║▌║ Caja / Código» (Punto de Venta Físico) que
 *   permite escanear e ingresar múltiples productos de diferente tipo y
 *   departamento en una misma compra, gestionar cantidades, cobrar en
 *   efectivo / crédito / pago mixto / tarjeta, descontar stock en tiempo
 *   real y generar el ticket oficial imprimible / PDF / WhatsApp.
 * ==========================================================================
 */

(function (window) {
  'use strict';

  // Tablas binarias oficiales del estándar internacional EAN-13 (ISO/IEC 15420)
  const EAN13_L_CODES = [
    '0001101', // 0
    '0011001', // 1
    '0010011', // 2
    '0111101', // 3
    '0100011', // 4
    '0110001', // 5
    '0101111', // 6
    '0111011', // 7
    '0110111', // 8
    '0001011'  // 9
  ];

  const EAN13_G_CODES = [
    '0100111', // 0
    '0110011', // 1
    '0011011', // 2
    '0100001', // 3
    '0011101', // 4
    '0111001', // 5
    '0000101', // 6
    '0010001', // 7
    '0001001', // 8
    '0010111'  // 9
  ];

  const EAN13_R_CODES = [
    '1110010', // 0
    '1100110', // 1
    '1101100', // 2
    '1000010', // 3
    '1011100', // 4
    '1001110', // 5
    '1010000', // 6
    '1000100', // 7
    '1001000', // 8
    '1110100'  // 9
  ];

  const EAN13_PARITY_TABLE = [
    'LLLLLL', // 0
    'LLGLGG', // 1
    'LLGGLG', // 2
    'LLGGGL', // 3
    'LGLLGG', // 4
    'LGGLLG', // 5
    'LGGGLL', // 6
    'LGLGLG', // 7
    'LGLGGL', // 8
    'LGGLGL'  // 9
  ];

  const DEPT_CODE_MAP = {
    'fashion': '101',
    'moda': '101',
    'ropa': '101',
    'tech': '102',
    'tecnologia': '102',
    'home': '103',
    'hogar': '103',
    'beauty': '104',
    'belleza': '104',
    'sport': '105',
    'sports': '105',
    'deportes': '105',
    'toy': '106',
    'toys': '106',
    'juguetes': '106',
    'game': '107',
    'gaming': '107',
    'videojuegos': '107'
  };

  function isAdminPanelPage() {
    return !!document.getElementById('adminLayout') || window.location.pathname.toLowerCase().includes('administracion');
  }

  /**
   * Calcula el dígito verificador oficial GS1 (Módulo 10) para los primeros 12 dígitos de un EAN-13
   */
  function calculateEan13CheckDigit(twelveDigits) {
    const clean = String(twelveDigits).replace(/\D/g, '').padStart(12, '0').slice(0, 12);
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const digit = parseInt(clean.charAt(i), 10) || 0;
      sum += (i % 2 === 0) ? digit : digit * 3;
    }
    return String((10 - (sum % 10)) % 10);
  }

  /**
   * Genera un código EAN-13 oficial determinista y único para un producto
   */
  function generateProductEan13(product, indexHint = 0) {
    if (!product) return '7501000000014';
    if (product.barcode && /^\d{13}$/.test(String(product.barcode))) {
      return String(product.barcode);
    }

    const idStr = String(product.id || '').toLowerCase();
    let deptPrefix = '100';

    for (const [key, code] of Object.entries(DEPT_CODE_MAP)) {
      if (idStr.startsWith(key) || String(product.category || '').toLowerCase().includes(key)) {
        deptPrefix = code;
        break;
      }
    }

    let itemNum = 0;
    const pMatch = idStr.match(/p(\d+)-(\d+)/i);
    const numMatch = idStr.match(/(\d+)/);

    if (pMatch) {
      itemNum = parseInt(pMatch[1], 10) * 10000 + parseInt(pMatch[2], 10);
    } else if (numMatch) {
      itemNum = parseInt(numMatch[1], 10);
    }

    if (!itemNum || isNaN(itemNum)) {
      let hash = 0;
      for (let i = 0; i < idStr.length; i++) {
        hash = ((hash << 5) - hash) + idStr.charCodeAt(i);
        hash |= 0;
      }
      itemNum = (Math.abs(hash) % 899999) + 100000;
    }

    const sixDigits = String(itemNum % 1000000).padStart(6, '0');
    const twelve = `750${deptPrefix}${sixDigits}`;
    const check = calculateEan13CheckDigit(twelve);
    return `${twelve}${check}`;
  }

  /**
   * Obtiene todos los productos del catálogo principal + productos personalizados del panel admin
   */
  function getAllCatalogProducts() {
    let list = [];
    if (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA)) {
      list = [...PRODUCTS_DATA];
    }
    try {
      const customRaw = localStorage.getItem('callejon_custom_products');
      if (customRaw) {
        const customList = JSON.parse(customRaw);
        if (Array.isArray(customList)) {
          customList.forEach(cp => {
            if (cp && cp.id && !list.some(p => p.id === cp.id)) {
              list.push(cp);
            }
          });
        }
      }
    } catch (e) {}
    return list;
  }

  /**
   * Asegura que todos los productos del catálogo tengan asignado su código EAN-13 único
   */
  function ensureAllProductsHaveBarcodes() {
    const allProducts = getAllCatalogProducts();
    const usedBarcodes = new Set();

    allProducts.forEach((prod, idx) => {
      if (!prod) return;
      let candidate = generateProductEan13(prod, idx + 1);
      if (usedBarcodes.has(candidate)) {
        const altTwelve = `750199${String(idx + 1).padStart(6, '0')}`;
        candidate = altTwelve + calculateEan13CheckDigit(altTwelve);
      }
      usedBarcodes.add(candidate);
      prod.barcode = candidate;
    });

    return allProducts;
  }

  /**
   * Obtiene el stock actual de un producto
   */
  function getProductAvailableStock(productId) {
    if (window.AdminDB && typeof window.AdminDB.getProductStock === 'function') {
      return window.AdminDB.getProductStock(productId);
    }
    try {
      const raw = localStorage.getItem('callejon_stock_db');
      if (raw) {
        const map = JSON.parse(raw);
        if (map && typeof map[productId] !== 'undefined') {
          return Math.max(0, parseInt(map[productId], 10) || 0);
        }
      }
    } catch (e) {}
    const prod = findProductById(productId);
    if (prod && typeof prod.stock === 'number') return Math.max(0, prod.stock);
    return 15;
  }

  /**
   * Genera un SVG de código de barras EAN-13 100% real y escaneable por cualquier lector móvil
   */
  function renderEan13Svg(code13, options = {}) {
    let clean = String(code13 || '').replace(/\D/g, '');
    if (clean.length === 12) {
      clean += calculateEan13CheckDigit(clean);
    } else if (clean.length !== 13) {
      clean = clean.padStart(12, '0').slice(0, 12);
      clean += calculateEan13CheckDigit(clean);
    }

    const firstDigit = parseInt(clean.charAt(0), 10);
    const parityPattern = EAN13_PARITY_TABLE[firstDigit] || 'LGLGLG';
    const leftDigits = clean.slice(1, 7);
    const rightDigits = clean.slice(7, 13);

    const modules = [];

    // Guardia Izquierda: 101
    modules.push({ bit: 1, guard: true }, { bit: 0, guard: true }, { bit: 1, guard: true });

    // 6 Dígitos Izquierdos (42 módulos)
    for (let i = 0; i < 6; i++) {
      const d = parseInt(leftDigits.charAt(i), 10);
      const parity = parityPattern.charAt(i);
      const bits = (parity === 'G') ? EAN13_G_CODES[d] : EAN13_L_CODES[d];
      for (let b = 0; b < 7; b++) {
        modules.push({ bit: bits.charAt(b) === '1' ? 1 : 0, guard: false });
      }
    }

    // Guardia Central: 01010
    modules.push(
      { bit: 0, guard: true },
      { bit: 1, guard: true },
      { bit: 0, guard: true },
      { bit: 1, guard: true },
      { bit: 0, guard: true }
    );

    // 6 Dígitos Derechos (42 módulos)
    for (let i = 0; i < 6; i++) {
      const d = parseInt(rightDigits.charAt(i), 10);
      const bits = EAN13_R_CODES[d];
      for (let b = 0; b < 7; b++) {
        modules.push({ bit: bits.charAt(b) === '1' ? 1 : 0, guard: false });
      }
    }

    // Guardia Derecha: 101
    modules.push({ bit: 1, guard: true }, { bit: 0, guard: true }, { bit: 1, guard: true });

    const moduleWidth = options.moduleWidth || 3;
    const quietZoneModules = 12;
    const totalModules = quietZoneModules * 2 + 95;
    const svgWidth = totalModules * moduleWidth;
    const barTop = options.barTop || 14;
    const dataBarHeight = options.barHeight || 96;
    const guardBarHeight = dataBarHeight + 12;
    const svgHeight = barTop + guardBarHeight + 28;

    let rectsHtml = '';
    let i = 0;
    while (i < modules.length) {
      if (modules[i].bit === 1) {
        const isGuard = modules[i].guard;
        let runLen = 1;
        while (
          i + runLen < modules.length &&
          modules[i + runLen].bit === 1 &&
          modules[i + runLen].guard === isGuard
        ) {
          runLen++;
        }
        const x = (quietZoneModules + i) * moduleWidth;
        const w = runLen * moduleWidth;
        const h = isGuard ? guardBarHeight : dataBarHeight;
        rectsHtml += `<rect x="${x}" y="${barTop}" width="${w}" height="${h}" fill="#000000" />`;
        i += runLen;
      } else {
        i++;
      }
    }

    const textY = barTop + dataBarHeight + 20;
    const firstDigitX = (quietZoneModules - 7) * moduleWidth;
    const leftGroupCenterX = (quietZoneModules + 3 + 21) * moduleWidth;
    const rightGroupCenterX = (quietZoneModules + 3 + 42 + 5 + 21) * moduleWidth;
    const fontSize = Math.round(moduleWidth * 6.2);

    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="auto" style="max-width: ${options.maxWidth || '360px'}; background: #ffffff; display: block; margin: 0 auto; border-radius: 6px;" shape-rendering="crispEdges" role="img" aria-label="Código de barras EAN-13 ${clean}">
        <rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" fill="#ffffff" />
        ${rectsHtml}
        <text x="${firstDigitX}" y="${textY}" font-family="'Courier New', Courier, monospace" font-size="${fontSize}" font-weight="800" fill="#000000">${clean.charAt(0)}</text>
        <text x="${leftGroupCenterX}" y="${textY}" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="${fontSize}" font-weight="800" letter-spacing="${Math.round(moduleWidth * 0.9)}" fill="#000000">${leftDigits}</text>
        <text x="${rightGroupCenterX}" y="${textY}" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="${fontSize}" font-weight="800" letter-spacing="${Math.round(moduleWidth * 0.9)}" fill="#000000">${rightDigits}</text>
      </svg>
    `;
  }

  /**
   * Reproduce un sonido "Beep" realista de lector de código de barras de punto de venta (Web Audio API)
   */
  function playScannerBeep(success = true) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = success ? 'sine' : 'sawtooth';
      osc.frequency.setValueAtTime(success ? 1850 : 320, ctx.currentTime);
      gain.gain.setValueAtTime(0.16, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (success ? 0.12 : 0.25));
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (success ? 0.12 : 0.25));
    } catch (e) {}
  }

  /**
   * Busca un producto por su código de barras EAN-13 (13 dígitos), 12 dígitos, SKU o ID
   */
  function findProductByBarcodeOrCode(rawCode) {
    if (!rawCode) return null;
    ensureAllProductsHaveBarcodes();
    const allProducts = getAllCatalogProducts();
    const trimmed = String(rawCode).trim();
    const digitsOnly = trimmed.replace(/\D/g, '');
    const upper = trimmed.toUpperCase();

    if (digitsOnly.length === 13) {
      const exact = allProducts.find(p => p && String(p.barcode) === digitsOnly);
      if (exact) return exact;
      const prefix12 = digitsOnly.slice(0, 12);
      const by12 = allProducts.find(p => p && String(p.barcode || '').slice(0, 12) === prefix12);
      if (by12) return by12;
    }

    if (digitsOnly.length === 12 && digitsOnly.startsWith('750')) {
      const by12 = allProducts.find(p => p && String(p.barcode || '').slice(0, 12) === digitsOnly);
      if (by12) return by12;
    }

    const bySkuOrId = allProducts.find(p =>
      p && (
        (p.sku && String(p.sku).toUpperCase() === upper) ||
        (p.id && String(p.id).toUpperCase() === upper) ||
        (`CLM-${String(p.id || '').toUpperCase().slice(0, 10)}` === upper)
      )
    );
    if (bySkuOrId) return bySkuOrId;

    return null;
  }

  function findProductById(productId) {
    if (!productId) return null;
    ensureAllProductsHaveBarcodes();
    const allProducts = getAllCatalogProducts();
    return allProducts.find(p => p && String(p.id) === String(productId)) || null;
  }

  // =========================================================================
  // ESTILOS Y MODAL DE ETIQUETA DE CÓDIGO DE BARRAS (PARA ESCANEO MÓVIL)
  // =========================================================================
  function injectStylesAndTagModal() {
    if (document.getElementById('cmBarcodeSystemStyles')) return;

    const style = document.createElement('style');
    style.id = 'cmBarcodeSystemStyles';
    style.textContent = `
      /* Botón de Código de Barras en Tarjetas de Producto */
      .btn-product-barcode-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        margin-top: 6px;
        padding: 7px 10px;
        background: #f8fafc;
        color: #0b1b3d;
        border: 1.5px dashed #cbd5e1;
        border-radius: 8px;
        font-size: 0.76rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: inherit;
      }
      .btn-product-barcode-tag:hover {
        background: #0b1b3d;
        color: #ffffff;
        border-color: #c58f38;
        border-style: solid;
        box-shadow: 0 4px 12px rgba(11, 27, 61, 0.15);
      }
      .btn-product-barcode-tag .barcode-mini-code {
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.72rem;
        color: #c58f38;
        font-weight: 800;
      }
      .btn-product-barcode-tag:hover .barcode-mini-code {
        color: #dfb743;
      }

      /* Bloque de Código de Barras dentro de Vista Rápida / Detalle de Producto */
      .qv-barcode-box {
        margin-top: 14px;
        padding: 12px 14px;
        background: #ffffff;
        border: 2px dashed #cbd5e1;
        border-radius: 12px;
        text-align: center;
      }
      .qv-barcode-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 0.76rem;
        font-weight: 800;
        color: #0b1b3d;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .qv-barcode-actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 8px;
        flex-wrap: wrap;
      }
      .btn-qv-barcode-action {
        padding: 5px 11px;
        border-radius: 6px;
        font-size: 0.74rem;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #cbd5e1;
        background: #f8fafc;
        color: #0b1b3d;
        transition: all 0.15s ease;
      }
      .btn-qv-barcode-action:hover {
        background: #0b1b3d;
        color: #ffffff;
        border-color: #0b1b3d;
      }

      /* Overlay de Modal de Etiqueta de Código de Barras */
      .cm-barcode-overlay {
        position: fixed;
        inset: 0;
        background: rgba(7, 20, 42, 0.78);
        backdrop-filter: blur(4px);
        z-index: 99999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 16px;
        overflow-y: auto;
      }
      .cm-barcode-overlay.active {
        display: flex;
      }
      .cm-barcode-modal-card {
        background: #ffffff;
        width: 100%;
        max-width: 500px;
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        border: 2px solid #c58f38;
        position: relative;
        animation: cmBarcodePop 0.22s ease-out;
      }
      @keyframes cmBarcodePop {
        from { transform: scale(0.94); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      .cm-barcode-modal-header {
        background: linear-gradient(135deg, #07142a 0%, #0b1b3d 100%);
        color: #ffffff;
        padding: 18px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 3px solid #c58f38;
      }
      .cm-barcode-modal-header h3 {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 800;
        letter-spacing: 0.04em;
        color: #ffffff;
      }
      .cm-barcode-modal-header p {
        margin: 3px 0 0;
        font-size: 0.75rem;
        color: #dfb743;
      }
      .cm-barcode-close-btn {
        background: rgba(255, 255, 255, 0.12);
        border: none;
        color: #ffffff;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        font-size: 1.3rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cm-barcode-close-btn:hover {
        background: #ef4444;
      }
      .cm-barcode-modal-body {
        padding: 20px 22px;
        max-height: 82vh;
        overflow-y: auto;
      }

      /* Etiqueta Física Escaneable */
      .cm-physical-tag-frame {
        border: 2px solid #0b1b3d;
        border-radius: 14px;
        padding: 16px;
        background: #ffffff;
        position: relative;
      }
      .cm-tag-product-row {
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1.5px dashed #cbd5e1;
        padding-bottom: 12px;
        margin-bottom: 14px;
      }
      .cm-tag-product-img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 10px;
        border: 1px solid #e2e8f0;
        background: #f8fafc;
      }
      .cm-tag-product-meta {
        flex: 1;
        text-align: left;
      }
      .cm-tag-product-name {
        font-size: 0.95rem;
        font-weight: 800;
        color: #0b1b3d;
        margin: 0 0 4px;
        line-height: 1.25;
      }
      .cm-tag-product-price {
        font-size: 1.25rem;
        font-weight: 900;
        color: #c58f38;
        margin-top: 2px;
      }
      .cm-barcode-scan-stage {
        background: #ffffff;
        padding: 16px 10px;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        text-align: center;
      }
    `;
    document.head.appendChild(style);

    const tagModalHtml = `
      <div class="cm-barcode-overlay" id="cmBarcodeTagModal" role="dialog" aria-modal="true" aria-label="Etiqueta de Código de Barras">
        <div class="cm-barcode-modal-card">
          <div class="cm-barcode-modal-header">
            <div>
              <h3>║▌║ ETIQUETA DE CÓDIGO DE BARRAS</h3>
              <p>Apunta con el lector de código de barras de tu celular a la pantalla</p>
            </div>
            <button type="button" class="cm-barcode-close-btn" id="btnCloseCmBarcodeTag" aria-label="Cerrar">&times;</button>
          </div>
          <div class="cm-barcode-modal-body" id="cmBarcodeTagBody"></div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', tagModalHtml);

    document.getElementById('btnCloseCmBarcodeTag')?.addEventListener('click', () => {
      document.getElementById('cmBarcodeTagModal')?.classList.remove('active');
    });
    document.getElementById('cmBarcodeTagModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'cmBarcodeTagModal') {
        e.currentTarget.classList.remove('active');
      }
    });
  }

  /**
   * Abre el modal con la Etiqueta Oficial de Código de Barras EAN-13 lista para escanear con el celular
   */
  function openProductBarcodeModal(productOrId) {
    injectStylesAndTagModal();
    ensureAllProductsHaveBarcodes();

    const product = (typeof productOrId === 'object' && productOrId !== null)
      ? productOrId
      : findProductById(productOrId);

    if (!product) return;

    const barcode = product.barcode || generateProductEan13(product);
    product.barcode = barcode;
    const sku = product.sku || `CLM-${String(product.id || 'GEN').toUpperCase().slice(0, 10)}`;
    const svgHtml = renderEan13Svg(barcode, { moduleWidth: 3.2, barHeight: 102, maxWidth: '370px' });

    const bodyEl = document.getElementById('cmBarcodeTagBody');
    const modalEl = document.getElementById('cmBarcodeTagModal');
    if (!bodyEl || !modalEl) return;

    const isAdmin = isAdminPanelPage();

    bodyEl.innerHTML = `
      <div class="cm-physical-tag-frame" id="cmPrintableTagArea">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em;">
          <span>🎩 CALLEJÓN MÁGICO • ETIQUETA FÍSICA</span>
          <span>SKU: ${sku}</span>
        </div>

        <div class="cm-tag-product-row">
          <img src="${product.image}" alt="${product.name}" class="cm-tag-product-img" onerror="this.style.display='none'" />
          <div class="cm-tag-product-meta">
            <div style="font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase;">${product.brand || product.department || 'Callejón Mágico'}</div>
            <h4 class="cm-tag-product-name">${product.name}</h4>
            <div class="cm-tag-product-price">$${Number(product.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN</div>
          </div>
        </div>

        <!-- Escenario Blanco de Alto Contraste para Lector de Código de Barras Móvil -->
        <div class="cm-barcode-scan-stage" id="cmBarcodeScanStage">
          ${svgHtml}
        </div>

        <div style="text-align: center; margin-top: 10px;">
          <div style="font-size: 0.74rem; color: #475569; margin-bottom: 4px;">CÓDIGO EAN-13 ESTÁNDAR (13 DÍGITOS):</div>
          <div style="font-family: 'Courier New', Courier, monospace; font-size: 1.25rem; font-weight: 900; letter-spacing: 0.18em; color: #0b1b3d; background: #f1f5f9; display: inline-block; padding: 5px 14px; border-radius: 8px; border: 1px solid #cbd5e1;">
            ${barcode}
          </div>
        </div>
      </div>

      <!-- Botones de Acción -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px;">
        <button type="button" id="btnCmCopyBarcode" style="background: #f8fafc; color: #0b1b3d; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 10px 12px; font-size: 0.8rem; font-weight: 800; cursor: pointer;">
          📋 Copiar Código (${barcode})
        </button>
        <button type="button" id="btnCmPrintTag" style="background: #f8fafc; color: #0b1b3d; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 10px 12px; font-size: 0.8rem; font-weight: 800; cursor: pointer;">
          🖨️ Imprimir Etiqueta Física
        </button>
      </div>

      ${isAdmin ? `
        <button type="button" id="btnCmAddFromTagToAdminPos" style="width: 100%; margin-top: 8px; background: linear-gradient(135deg, #c58f38 0%, #b07d2b 100%); color: #ffffff; border: none; border-radius: 10px; padding: 12px 16px; font-size: 0.86rem; font-weight: 800; cursor: pointer;">
          🏪 Pasar este Artículo a Caja Física (Admin POS)
        </button>
      ` : ''}
    `;

    modalEl.classList.add('active');

    document.getElementById('btnCmCopyBarcode')?.addEventListener('click', (e) => {
      navigator.clipboard?.writeText(barcode);
      const btn = e.currentTarget;
      btn.textContent = `✅ ¡Copiado! (${barcode})`;
      setTimeout(() => {
        btn.textContent = `📋 Copiar Código (${barcode})`;
      }, 2200);
      if (window.DavantiApp && typeof window.DavantiApp.showToast === 'function') {
        window.DavantiApp.showToast(`📋 Código de barras ${barcode} copiado al portapapeles`);
      } else if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
        window.AdminApp.showToast(`📋 Código de barras ${barcode} copiado`, 'success');
      }
    });

    document.getElementById('btnCmPrintTag')?.addEventListener('click', () => {
      printProductBarcodeLabel(product);
    });

    document.getElementById('btnCmAddFromTagToAdminPos')?.addEventListener('click', () => {
      modalEl.classList.remove('active');
      if (window.AdminApp && typeof window.AdminApp.switchView === 'function') {
        window.AdminApp.switchView('pos');
      }
      AdminPosEngine.scanAndAddCode(barcode, 1);
    });
  }

  /**
   * Imprime únicamente la etiqueta física del código de barras del producto
   */
  function printProductBarcodeLabel(product) {
    if (!product) return;
    const barcode = product.barcode || generateProductEan13(product);
    const sku = product.sku || `CLM-${String(product.id || 'GEN').toUpperCase().slice(0, 10)}`;
    const svgHtml = renderEan13Svg(barcode, { moduleWidth: 3, barHeight: 90, maxWidth: '320px' });

    let iframe = document.getElementById('cmBarcodePrintIframe');
    if (iframe) iframe.remove();
    iframe = document.createElement('iframe');
    iframe.id = 'cmBarcodePrintIframe';
    iframe.style.position = 'fixed';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Etiqueta ${product.name}</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 15px; margin: 0; }
          .tag-box { border: 2px solid #000; border-radius: 10px; padding: 14px; max-width: 340px; margin: 0 auto; }
          .brand { font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; }
          .name { font-size: 14px; font-weight: bold; margin: 6px 0; }
          .price { font-size: 18px; font-weight: 900; margin-bottom: 10px; }
          .sku { font-size: 10px; color: #444; margin-top: 6px; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="tag-box">
          <div class="brand">CALLEJÓN MÁGICO • ETIQUETA OFICIAL</div>
          <div class="name">${product.name}</div>
          <div class="price">$${Number(product.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN</div>
          ${svgHtml}
          <div class="sku">EAN-13: ${barcode} • SKU: ${sku}</div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 200);
          };
        <\/script>
      </body>
      </html>
    `);
    doc.close();
  }

  // =========================================================================
  // DECORACIÓN DE TARJETAS Y MODALES EN LA TIENDA DEL CLIENTE
  // (SÓLO ETIQUETA DE CÓDIGO DE BARRAS PARA ESCANEAR CON EL CELULAR)
  // =========================================================================
  function decorateProductCards() {
    if (isAdminPanelPage()) return;
    ensureAllProductsHaveBarcodes();
    const cardSelectors = [
      '.product-card[data-id]',
      '.beauty-product-card[data-id]',
      '.gaming-product-card[data-id]',
      '.home-product-card[data-product-id]',
      '.home-product-card[data-id]',
      '.sport-product-card[data-id]',
      '.tech-product-card[data-id]',
      '.toy-product-card[data-id]'
    ].join(', ');

    const cards = document.querySelectorAll(cardSelectors);
    cards.forEach(card => {
      if (card.querySelector('.btn-product-barcode-tag')) return;
      const productId = card.getAttribute('data-id') || card.getAttribute('data-product-id');
      if (!productId) return;

      const product = findProductById(productId);
      if (!product) return;

      const barcode = product.barcode || generateProductEan13(product);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-product-barcode-tag';
      btn.setAttribute('data-barcode-id', product.id);
      btn.setAttribute('title', `Ver etiqueta de código de barras escaneable (${barcode})`);
      btn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M3 5v14M7 5v14M11 5v14M15 5v14M18 5v14M21 5v14"/>
        </svg>
        <span>Código de Barras</span>
        <span class="barcode-mini-code">${barcode}</span>
      `;

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openProductBarcodeModal(product);
      });

      const infoBox = card.querySelector('.product-info, .beauty-card-body, .gaming-card-body, .home-card-body, .sport-card-body, .tech-card-body, .toy-card-body') || card;
      infoBox.appendChild(btn);
    });
  }

  function decorateQuickViewModal() {
    if (isAdminPanelPage()) return;
    const qvContainers = [
      document.getElementById('quickViewBody'),
      document.getElementById('beautyModalBody'),
      document.getElementById('fashionModalBody'),
      document.getElementById('gamingModalBody'),
      document.getElementById('homeModalBody'),
      document.getElementById('sportModalBody'),
      document.getElementById('techModalBody'),
      document.getElementById('toyModalBody')
    ].filter(Boolean);

    qvContainers.forEach(container => {
      if (container.querySelector('.qv-barcode-box')) return;

      let product = null;
      const titleEl = container.querySelector('.quickview-title, h2, h3');
      if (titleEl) {
        const titleText = titleEl.textContent.trim().toLowerCase();
        const all = getAllCatalogProducts();
        product = all.find(p => p && p.name && p.name.trim().toLowerCase() === titleText) || null;
      }

      if (!product) return;
      const barcode = product.barcode || generateProductEan13(product);
      const svgHtml = renderEan13Svg(barcode, { moduleWidth: 2.5, barHeight: 70, maxWidth: '280px' });

      const box = document.createElement('div');
      box.className = 'qv-barcode-box';
      box.innerHTML = `
        <div class="qv-barcode-header">
          <span>║▌║ Código de Barras Físico (EAN-13)</span>
          <span style="font-family: monospace; color: #c58f38;">${barcode}</span>
        </div>
        ${svgHtml}
        <div class="qv-barcode-actions">
          <button type="button" class="btn-qv-barcode-action" data-action="enlarge">🔍 Ampliar Etiqueta para Escanear</button>
          <button type="button" class="btn-qv-barcode-action" data-action="copy">📋 Copiar Código</button>
        </div>
      `;

      box.querySelector('[data-action="enlarge"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openProductBarcodeModal(product);
      });

      box.querySelector('[data-action="copy"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard?.writeText(barcode);
        e.currentTarget.textContent = '✅ ¡Copiado!';
        setTimeout(() => {
          e.currentTarget.textContent = '📋 Copiar Código';
        }, 2000);
      });

      const targetCol = container.querySelector('.quickview-details-col, .modal-info-col, .beauty-modal-info, .gaming-modal-info, .home-modal-info, .sport-modal-info') || container;
      targetCol.appendChild(box);
    });
  }

  // =========================================================================
  // MÓDULO EXCLUSIVO DEL PANEL DE ADMINISTRADOR:
  // «║▌║ CAJA FÍSICA / CÓDIGO» (ESCANEO MÚLTIPLE DE DIFERENTES PRODUCTOS)
  // =========================================================================
  const POS_STORAGE_KEY = 'callejon_admin_pos_cart';

  const AdminPosEngine = {
    items: [], // Array de { id, barcode, name, department, category, price, image, quantity, size, color }

    loadCart() {
      try {
        const raw = localStorage.getItem(POS_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            this.items = parsed;
            return;
          }
        }
      } catch (e) {}
      this.items = [];
    },

    saveCart() {
      try {
        localStorage.setItem(POS_STORAGE_KEY, JSON.stringify(this.items));
      } catch (e) {}
    },

    /**
     * Escanea y agrega un producto (o suma cantidad si ya está en la lista)
     * Permite acumular múltiples productos de diferentes tipos y departamentos
     */
    scanAndAddCode(rawCode, qtyToAdd = 1) {
      const cleanQty = Math.max(1, parseInt(qtyToAdd, 10) || 1);
      const product = findProductByBarcodeOrCode(rawCode);
      const feedbackEl = document.getElementById('adminPosScanFeedback');

      if (!product) {
        playScannerBeep(false);
        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.innerHTML = `
            <div style="background: rgba(239, 68, 68, 0.15); border: 1.5px solid #ef4444; border-radius: 10px; padding: 12px 16px; color: #fca5a5; font-size: 0.85rem; font-weight: 700;">
              ❌ Código no encontrado: <code>${String(rawCode).replace(/</g, '&lt;')}</code>. Verifica los 13 dígitos escaneados con tu celular.
            </div>
          `;
        }
        return false;
      }

      const availStock = getProductAvailableStock(product.id);
      const existingIdx = this.items.findIndex(it => String(it.id) === String(product.id));
      const currentInPos = existingIdx > -1 ? (Number(this.items[existingIdx].quantity) || 0) : 0;

      if (availStock <= 0 || currentInPos + cleanQty > availStock) {
        playScannerBeep(false);
        const msg = availStock <= 0
          ? `⚠️ «${product.name}» está AGOTADO en bodega (0 disponibles).`
          : `⚠️ Stock insuficiente para «${product.name}»: solo hay ${availStock} disponible(s) y ya tienes ${currentInPos} en caja.`;
        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.innerHTML = `
            <div style="background: rgba(245, 158, 11, 0.15); border: 1.5px solid #f59e0b; border-radius: 10px; padding: 12px 16px; color: #fcd34d; font-size: 0.85rem; font-weight: 700;">
              ${msg}
            </div>
          `;
        }
        if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
          window.AdminApp.showToast(msg, 'danger');
        }
        return false;
      }

      playScannerBeep(true);

      const barcode = product.barcode || generateProductEan13(product);
      if (existingIdx > -1) {
        this.items[existingIdx].quantity += cleanQty;
      } else {
        this.items.push({
          id: product.id,
          barcode: barcode,
          sku: product.sku || `CLM-${String(product.id).toUpperCase().slice(0, 10)}`,
          name: product.name,
          department: product.department || product.category || 'General',
          category: product.category || 'general',
          price: Number(product.price) || 0,
          image: product.image || 'img/logo-icon.svg',
          size: (Array.isArray(product.sizes) && product.sizes[0]) ? product.sizes[0] : 'Estándar',
          color: (Array.isArray(product.colors) && product.colors[0]) ? product.colors[0] : '',
          quantity: cleanQty
        });
      }

      this.saveCart();
      this.renderPosView();

      if (feedbackEl) {
        const distinctTypes = this.items.length;
        const totalUnits = this.items.reduce((s, i) => s + (Number(i.quantity) || 1), 0);
        feedbackEl.style.display = 'block';
        feedbackEl.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.14); border: 1.5px solid #10b981; border-radius: 10px; padding: 12px 16px; display: flex; align-items: center; gap: 14px;">
            <img src="${product.image}" alt="${product.name}" style="width: 52px; height: 52px; object-fit: cover; border-radius: 8px; border: 1px solid #10b981; background: #fff;" />
            <div style="flex: 1;">
              <div style="font-size: 0.74rem; font-weight: 800; color: #34d399; text-transform: uppercase;">
                ✅ ESCANEADO Y AGREGADO (+${cleanQty}) • EAN-13: ${barcode} • [${product.department || product.category}]
              </div>
              <div style="font-size: 0.95rem; font-weight: 800; color: #ffffff;">${product.name}</div>
              <div style="font-size: 0.82rem; color: #dfb743; font-weight: 700;">
                Precio unitario: $${Number(product.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN • En caja ahora: ${distinctTypes} tipo(s) de producto / ${totalUnits} pieza(s)
              </div>
            </div>
          </div>
        `;
      }

      const inputEl = document.getElementById('adminPosBarcodeInput');
      const qtyEl = document.getElementById('adminPosQtyInput');
      if (inputEl) {
        inputEl.value = '';
        inputEl.focus();
      }
      if (qtyEl) {
        qtyEl.value = '1';
      }

      return true;
    },

    updateItemQuantity(productId, newQty) {
      const idx = this.items.findIndex(it => String(it.id) === String(productId));
      if (idx === -1) return;

      const parsed = parseInt(newQty, 10);
      if (isNaN(parsed) || parsed <= 0) {
        this.items.splice(idx, 1);
      } else {
        const avail = getProductAvailableStock(productId);
        if (parsed > avail) {
          this.items[idx].quantity = Math.max(1, avail);
          if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
            window.AdminApp.showToast(`⚠️ Solo hay ${avail} unidad(es) en stock de «${this.items[idx].name}»`, 'danger');
          }
        } else {
          this.items[idx].quantity = parsed;
        }
      }
      this.saveCart();
      this.renderPosView();
    },

    removeItem(productId) {
      this.items = this.items.filter(it => String(it.id) !== String(productId));
      this.saveCart();
      this.renderPosView();
    },

    clearAll() {
      this.items = [];
      this.saveCart();
      const feedbackEl = document.getElementById('adminPosScanFeedback');
      if (feedbackEl) feedbackEl.style.display = 'none';
      this.renderPosView();
    },

    getFinancialTotals() {
      const subtotal = this.items.reduce((sum, it) => sum + ((Number(it.price) || 0) * (Number(it.quantity) || 1)), 0);
      const totalPieces = this.items.reduce((sum, it) => sum + (Number(it.quantity) || 1), 0);
      const distinctProducts = this.items.length;
      const distinctDepartments = new Set(this.items.map(it => it.department || it.category)).size;

      const methodEl = document.getElementById('adminPosPaymentMethod');
      const method = methodEl ? methodEl.value : 'cash';
      const msiEl = document.getElementById('adminPosMsiSelect');
      const msi = msiEl ? (parseInt(msiEl.value, 10) || 1) : 1;

      // 10% de descuento si paga de contado (1 pago) con Tarjeta Callejón Mágico
      let discount = 0;
      if (method === 'callejon' && msi === 1) {
        discount = Math.round(subtotal * 0.10 * 100) / 100;
      }

      const total = Math.max(0, Math.round((subtotal - discount) * 100) / 100);
      return {
        subtotal,
        discount,
        total,
        totalPieces,
        distinctProducts,
        distinctDepartments,
        method,
        msi
      };
    },

    populateClientsSelector() {
      const selectEl = document.getElementById('adminPosClientSelect');
      if (!selectEl || !window.AdminDB) return;

      const currentVal = selectEl.value;
      const users = window.AdminDB.getUsers() || [];

      let html = `<option value="__walkin__">🛍️ Cliente en Mostrador (Venta Física Directa)</option>`;
      users.forEach(u => {
        const bal = Number(u.balance || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 });
        html += `<option value="${u.email}">👤 ${u.fullName} (${u.email}) — Crédito disp: $${bal}</option>`;
      });

      selectEl.innerHTML = html;
      if (currentVal && Array.from(selectEl.options).some(o => o.value === currentVal)) {
        selectEl.value = currentVal;
      }
    },

    handleClientSelectionChange() {
      const selectEl = document.getElementById('adminPosClientSelect');
      const nameInput = document.getElementById('adminPosClientName');
      const phoneInput = document.getElementById('adminPosClientPhone');
      const emailInput = document.getElementById('adminPosClientEmail');
      const postalInput = document.getElementById('adminPosClientPostal');
      const creditBadge = document.getElementById('adminPosClientCreditInfo');

      if (!selectEl) return;
      const val = selectEl.value;

      if (val === '__walkin__') {
        if (nameInput && !nameInput.dataset.manual) nameInput.value = 'CLIENTE EN MOSTRADOR';
        if (phoneInput && !phoneInput.dataset.manual) phoneInput.value = '';
        if (emailInput && !emailInput.dataset.manual) emailInput.value = '';
        if (postalInput && !postalInput.dataset.manual) postalInput.value = '30700';
        if (creditBadge) {
          creditBadge.style.display = 'none';
        }
      } else if (window.AdminDB) {
        const users = window.AdminDB.getUsers() || [];
        const user = users.find(u => (u.email || '').toLowerCase() === val.toLowerCase());
        if (user) {
          if (nameInput) nameInput.value = user.fullName || '';
          if (phoneInput) phoneInput.value = (user.phone && user.phone !== 'No registrado') ? user.phone : '';
          if (emailInput) emailInput.value = user.email || '';
          if (postalInput) postalInput.value = user.postal || '30700';
          if (creditBadge) {
            creditBadge.style.display = 'block';
            creditBadge.innerHTML = `💳 <strong>Tarjeta Callejón Mágico (${user.cardNumber || '4152 ••••'}):</strong> Crédito disponible: <strong style="color: #10b981;">$${Number(user.balance || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN</strong>`;
          }
        }
      }
    },

    updatePaymentUI() {
      const fin = this.getFinancialTotals();
      const method = fin.method;

      const boxCash = document.getElementById('adminPosCashBox');
      const boxCallejon = document.getElementById('adminPosCallejonBox');
      const boxSplit = document.getElementById('adminPosSplitBox');

      if (boxCash) boxCash.style.display = method === 'cash' ? 'block' : 'none';
      if (boxCallejon) boxCallejon.style.display = method === 'callejon' ? 'block' : 'none';
      if (boxSplit) boxSplit.style.display = method === 'split' ? 'block' : 'none';

      // Calcular cambio en efectivo
      if (method === 'cash') {
        const givenInput = document.getElementById('adminPosCashGiven');
        const changeDisplay = document.getElementById('adminPosCashChange');
        if (givenInput && changeDisplay) {
          const given = parseFloat(givenInput.value) || 0;
          if (given >= fin.total && fin.total > 0) {
            const change = Math.round((given - fin.total) * 100) / 100;
            changeDisplay.textContent = `$${change.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;
            changeDisplay.style.color = '#10b981';
          } else if (given > 0 && given < fin.total) {
            const missing = Math.round((fin.total - given) * 100) / 100;
            changeDisplay.textContent = `Faltan $${missing.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;
            changeDisplay.style.color = '#ef4444';
          } else {
            changeDisplay.textContent = '$0.00 MXN (Pago exacto)';
            changeDisplay.style.color = '#94a3b8';
          }
        }
      }

      // Calcular desglose de pago mixto
      if (method === 'split') {
        const splitCashInp = document.getElementById('adminPosSplitCashInput');
        const splitCreditDisplay = document.getElementById('adminPosSplitCreditAmount');
        if (splitCashInp && splitCreditDisplay) {
          let cashPart = parseFloat(splitCashInp.value);
          if (isNaN(cashPart) || cashPart < 0) cashPart = Math.round(fin.total * 0.5 * 100) / 100;
          if (cashPart > fin.total) cashPart = fin.total;
          const creditPart = Math.max(0, Math.round((fin.total - cashPart) * 100) / 100);
          splitCreditDisplay.textContent = `$${creditPart.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;
        }
      }
    },

    renderPosView() {
      const tableBody = document.getElementById('adminPosItemsTableBody');
      const badgeNav = document.getElementById('navBadgePos');
      const statTypesEl = document.getElementById('adminPosStatTypes');
      const statUnitsEl = document.getElementById('adminPosStatUnits');
      const subtotalEl = document.getElementById('adminPosSubtotalText');
      const discountRow = document.getElementById('adminPosDiscountRow');
      const discountEl = document.getElementById('adminPosDiscountText');
      const totalEl = document.getElementById('adminPosTotalText');

      const fin = this.getFinancialTotals();

      if (badgeNav) badgeNav.textContent = fin.totalPieces;
      if (statTypesEl) statTypesEl.textContent = `${fin.distinctProducts} producto(s) / ${fin.distinctDepartments} depto(s)`;
      if (statUnitsEl) statUnitsEl.textContent = `${fin.totalPieces} unidad(es)`;
      if (subtotalEl) subtotalEl.textContent = `$${fin.subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;

      if (discountRow && discountEl) {
        if (fin.discount > 0) {
          discountRow.style.display = 'flex';
          discountEl.textContent = `-$${fin.discount.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;
        } else {
          discountRow.style.display = 'none';
        }
      }

      if (totalEl) totalEl.textContent = `$${fin.total.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;

      this.updatePaymentUI();

      if (!tableBody) return;

      if (this.items.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="6" style="text-align: center; padding: 2.5rem 1rem; color: var(--admin-text-muted);">
              <div style="font-size: 2rem; margin-bottom: 0.4rem;">║▌║</div>
              <strong>La Caja Física está lista para escanear</strong><br>
              <span style="font-size: 0.8rem;">Escanea con la app de tu celular el código de barras de varios productos de diferente tipo en la tienda e ingrésalos arriba, o agrégalos desde el catálogo inferior.</span>
            </td>
          </tr>
        `;
        return;
      }

      tableBody.innerHTML = this.items.map(item => {
        const lineTotal = (Number(item.price) || 0) * (Number(item.quantity) || 1);
        const avail = getProductAvailableStock(item.id);
        return `
          <tr>
            <td>
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${item.image}" alt="" style="width: 42px; height: 42px; object-fit: cover; border-radius: 8px; border: 1px solid #334155; background: #fff;" />
                <div>
                  <strong style="color: #ffffff; font-size: 0.86rem; display: block;">${item.name}</strong>
                  <span style="font-family: monospace; font-size: 0.74rem; color: var(--admin-gold); font-weight: 700;">EAN-13: ${item.barcode}</span>
                </div>
              </div>
            </td>
            <td>
              <span style="font-size: 0.75rem; background: rgba(197, 143, 56, 0.15); color: #dfb743; padding: 3px 8px; border-radius: 6px; font-weight: 700;">
                ${item.department}
              </span>
            </td>
            <td>
              <strong>$${Number(item.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong>
            </td>
            <td>
              <div class="stock-counter" style="justify-content: center;">
                <button type="button" class="btn-stock-adjust btn-pos-qty-dec" data-id="${item.id}" title="Restar 1">-</button>
                <input type="number" class="stock-input pos-qty-input" data-id="${item.id}" value="${item.quantity}" min="1" max="${avail}" style="width: 54px;" />
                <button type="button" class="btn-stock-adjust btn-pos-qty-inc" data-id="${item.id}" title="Sumar 1 (Stock: ${avail})">+</button>
              </div>
            </td>
            <td>
              <strong style="color: #10b981; font-size: 0.92rem;">$${lineTotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN</strong>
            </td>
            <td style="text-align: right;">
              <button type="button" class="btn-admin btn-admin-danger btn-admin-sm btn-pos-remove-item" data-id="${item.id}" title="Quitar de la caja">🗑️</button>
            </td>
          </tr>
        `;
      }).join('');

      tableBody.querySelectorAll('.btn-pos-qty-dec').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const it = this.items.find(x => String(x.id) === String(id));
          if (it) this.updateItemQuantity(id, it.quantity - 1);
        });
      });

      tableBody.querySelectorAll('.btn-pos-qty-inc').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const it = this.items.find(x => String(x.id) === String(id));
          if (it) this.updateItemQuantity(id, it.quantity + 1);
        });
      });

      tableBody.querySelectorAll('.pos-qty-input').forEach(inp => {
        inp.addEventListener('change', () => {
          const id = inp.dataset.id;
          this.updateItemQuantity(id, inp.value);
        });
      });

      tableBody.querySelectorAll('.btn-pos-remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
          this.removeItem(btn.dataset.id);
        });
      });
    },

    renderCatalogHelper() {
      const container = document.getElementById('adminPosCatalogTableBody');
      if (!container) return;

      ensureAllProductsHaveBarcodes();
      const all = getAllCatalogProducts();
      const q = (document.getElementById('adminPosCatalogSearch')?.value || '').trim().toLowerCase();
      const dept = document.getElementById('adminPosCatalogDept')?.value || 'all';

      const filtered = all.filter(p => {
        if (!p) return false;
        if (dept !== 'all' && p.category !== dept) return false;
        if (!q) return true;
        return (
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.barcode && String(p.barcode).includes(q)) ||
          (p.sku && p.sku.toLowerCase().includes(q)) ||
          (p.department && p.department.toLowerCase().includes(q))
        );
      });

      const subset = filtered.slice(0, 40);
      if (subset.length === 0) {
        container.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 1.5rem; color: var(--admin-text-muted);">No se encontraron productos con ese criterio.</td></tr>`;
        return;
      }

      container.innerHTML = subset.map(p => {
        const stock = getProductAvailableStock(p.id);
        return `
          <tr>
            <td>
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${p.image}" alt="" style="width: 36px; height: 36px; object-fit: cover; border-radius: 6px; background: #fff;" />
                <div>
                  <strong style="color: #ffffff; font-size: 0.82rem; display: block;">${p.name}</strong>
                  <span style="font-size: 0.72rem; color: var(--admin-text-muted);">${p.department || p.category}</span>
                </div>
              </div>
            </td>
            <td>
              <code style="background: rgba(197, 143, 56, 0.15); color: #dfb743; padding: 3px 8px; border-radius: 6px; font-weight: 800; font-size: 0.82rem;">${p.barcode}</code>
            </td>
            <td><strong>$${Number(p.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong></td>
            <td>
              <span class="badge-status ${stock === 0 ? 'outofstock' : (stock <= 5 ? 'lowstock' : 'instock')}">
                ${stock === 0 ? 'Agotado' : `${stock} disp.`}
              </span>
            </td>
            <td style="text-align: right;">
              <div style="display: flex; gap: 6px; justify-content: flex-end;">
                <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm btn-pos-cat-tag" data-id="${p.id}" title="Mostrar código de barras en pantalla para escanear con el celular">
                  ║▌║ Ver Código
                </button>
                <button type="button" class="btn-admin btn-admin-primary btn-admin-sm btn-pos-cat-add" data-code="${p.barcode}" ${stock === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>
                  ➕ Pasar a Caja
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      container.querySelectorAll('.btn-pos-cat-tag').forEach(btn => {
        btn.addEventListener('click', () => {
          openProductBarcodeModal(btn.dataset.id);
        });
      });

      container.querySelectorAll('.btn-pos-cat-add').forEach(btn => {
        btn.addEventListener('click', () => {
          this.scanAndAddCode(btn.dataset.code, 1);
        });
      });
    },

    /**
     * Procesa el cobro final de la compra física en la Caja del Administrador
     */
    completePhysicalSale() {
      if (this.items.length === 0) {
        if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
          window.AdminApp.showToast('⚠️ Escanea al menos un producto antes de procesar el cobro en caja.', 'danger');
        }
        return;
      }

      const fin = this.getFinancialTotals();
      const clientSelectVal = document.getElementById('adminPosClientSelect')?.value || '__walkin__';
      const clientName = (document.getElementById('adminPosClientName')?.value || 'CLIENTE EN MOSTRADOR').trim();
      const clientPhone = (document.getElementById('adminPosClientPhone')?.value || '962 401 4408').trim();
      const clientEmail = (document.getElementById('adminPosClientEmail')?.value || '').trim().toLowerCase();
      const clientPostal = (document.getElementById('adminPosClientPostal')?.value || '30700').trim();

      let paymentLabel = 'Efectivo en Caja Física (Contado)';
      let isSplitPayment = false;
      let cashAmount = fin.total;
      let creditAmount = 0;
      let creditMsi = 1;

      // Validar métodos que usan crédito de Tarjeta Callejón Mágico
      if (fin.method === 'callejon' || fin.method === 'split') {
        if (clientSelectVal === '__walkin__' && !clientEmail) {
          if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
            window.AdminApp.showToast('⚠️ Para cobrar con crédito de Tarjeta Callejón Mágico, selecciona un cliente registrado.', 'danger');
          }
          return;
        }

        const targetEmail = clientSelectVal !== '__walkin__' ? clientSelectVal : clientEmail;
        const users = (window.AdminDB && window.AdminDB.getUsers()) || [];
        const clientUser = users.find(u => (u.email || '').toLowerCase() === targetEmail.toLowerCase());

        if (!clientUser) {
          if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
            window.AdminApp.showToast('⚠️ No se encontró la tarjeta departamental del cliente seleccionado.', 'danger');
          }
          return;
        }

        if (fin.method === 'callejon') {
          cashAmount = 0;
          creditAmount = fin.total;
          creditMsi = fin.msi;
          if (clientUser.balance < creditAmount) {
            if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
              window.AdminApp.showToast(`⚠️ Saldo insuficiente en Tarjeta Callejón Mágico. Disponible: $${Number(clientUser.balance).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`, 'danger');
            }
            return;
          }
          const newBalance = Math.max(0, Math.round((clientUser.balance - creditAmount) * 100) / 100);
          window.AdminDB.updateUserBalance(
            clientUser.email,
            newBalance,
            `Compra en Caja Física (${fin.totalPieces} art.)`,
            -creditAmount
          );
          paymentLabel = creditMsi > 1
            ? `Tarjeta Departamental Callejón Mágico (${creditMsi} MSI en Caja Física)`
            : `Tarjeta Departamental Callejón Mágico (Contado 10% OFF en Caja Física)`;
        } else {
          // Pago Mixto (Efectivo + Crédito)
          isSplitPayment = true;
          const rawSplitCash = parseFloat(document.getElementById('adminPosSplitCashInput')?.value);
          cashAmount = (!isNaN(rawSplitCash) && rawSplitCash > 0 && rawSplitCash < fin.total)
            ? Math.round(rawSplitCash * 100) / 100
            : Math.round(fin.total * 0.5 * 100) / 100;
          creditAmount = Math.max(0, Math.round((fin.total - cashAmount) * 100) / 100);
          creditMsi = parseInt(document.getElementById('adminPosSplitMsiSelect')?.value || '6', 10) || 6;

          if (clientUser.balance < creditAmount) {
            if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
              window.AdminApp.showToast(`⚠️ Saldo insuficiente para la parte a crédito ($${creditAmount.toFixed(2)}). Disponible: $${Number(clientUser.balance).toFixed(2)} MXN`, 'danger');
            }
            return;
          }
          const newBalance = Math.max(0, Math.round((clientUser.balance - creditAmount) * 100) / 100);
          window.AdminDB.updateUserBalance(
            clientUser.email,
            newBalance,
            `Pago Mixto en Caja Física (Crédito ${creditMsi} MSI)`,
            -creditAmount
          );
          paymentLabel = `Pago Mixto en Caja Física: Efectivo ($${cashAmount.toFixed(2)}) + Crédito Callejón ($${creditAmount.toFixed(2)})`;
        }
      } else if (fin.method === 'card') {
        paymentLabel = 'Terminal Bancaria en Caja Física (Visa / Mastercard)';
      }

      // 1. Descontar Stock de cada uno de los productos escaneados en AdminDB & Firebase
      this.items.forEach(item => {
        const currentStock = getProductAvailableStock(item.id);
        const updatedStock = Math.max(0, currentStock - (Number(item.quantity) || 1));
        if (window.AdminDB && typeof window.AdminDB.setProductStock === 'function') {
          window.AdminDB.setProductStock(item.id, updatedStock);
        }
      });

      // 2. Construir y guardar el pedido oficial en la base de datos de ventas
      const orderNum = 'CLM-' + Math.floor(100000 + Math.random() * 900000);
      const pointsEarned = Math.max(25, Math.round(fin.total * 0.05));
      const nowStr = new Date().toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const newOrder = {
        orderNum: orderNum,
        userId: 'pos_admin',
        userEmail: clientEmail || 'mostrador@callejonmagico.com',
        date: nowStr,
        timestamp: Date.now(),
        status: 'delivered',
        statusText: 'Entregado en Caja Física (Sucursal)',
        carrier: 'Entrega Inmediata en Mostrador',
        trackingNumber: 'POS-' + orderNum,
        estimatedDelivery: 'Entregado en tienda física',
        total: fin.total,
        subtotal: fin.subtotal,
        discount: fin.discount,
        iva: 0,
        paymentMethod: paymentLabel,
        isSplitPayment: isSplitPayment,
        cashAmount: cashAmount,
        creditAmount: creditAmount,
        cashLabel: 'Efectivo en Caja Física',
        creditMsi: creditMsi,
        msi: creditMsi,
        pointsEarned: pointsEarned,
        recipient: {
          name: clientName,
          email: clientEmail || 'mostrador@callejonmagico.com',
          phone: clientPhone,
          postal: clientPostal,
          street: '8A Avenida Sur no. 54 col. Centro (Caja Física Sucursal)',
          city: 'Tapachula, Chiapas'
        },
        items: this.items.map(it => ({
          id: it.id,
          name: it.name,
          price: it.price,
          quantity: it.quantity,
          size: it.size || 'Estándar',
          color: it.color || '',
          image: it.image,
          barcode: it.barcode
        }))
      };

      // Guardar en callejon_user_orders y sincronizar con Firebase
      try {
        const rawOrders = JSON.parse(localStorage.getItem('callejon_user_orders') || '[]');
        rawOrders.unshift(newOrder);
        localStorage.setItem('callejon_user_orders', JSON.stringify(rawOrders));
        if (window.CallejonFirebase && typeof window.CallejonFirebase.syncOrder === 'function') {
          window.CallejonFirebase.syncOrder(newOrder);
        }
        if (window.AdminDB && typeof window.AdminDB.notifyChange === 'function') {
          window.AdminDB.notifyChange('orders');
        }
      } catch (e) {
        console.error('Error guardando venta física:', e);
      }

      // 3. Limpiar caja actual y actualizar tablas
      this.clearAll();
      this.populateClientsSelector();
      this.renderCatalogHelper();
      if (window.AdminApp && typeof window.AdminApp.renderAll === 'function') {
        window.AdminApp.renderAll();
      }
      if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
        window.AdminApp.showToast(`🎉 Venta física #${orderNum} cobrada con éxito ($${fin.total.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN)`, 'success');
      }

      // 4. Abrir comprobante oficial listo para imprimir en impresora de tickets, PDF o WhatsApp
      if (window.CallejonTicket && typeof window.CallejonTicket.open === 'function') {
        window.CallejonTicket.open(newOrder);
      }
    },

    initAdminPos() {
      if (!isAdminPanelPage()) return;
      ensureAllProductsHaveBarcodes();
      this.loadCart();
      this.populateClientsSelector();
      this.handleClientSelectionChange();
      this.renderPosView();
      this.renderCatalogHelper();

      // Formulario de escaneo de código de barras en Caja Física Admin
      const scanForm = document.getElementById('adminPosScanForm');
      const codeInput = document.getElementById('adminPosBarcodeInput');
      const qtyInput = document.getElementById('adminPosQtyInput');
      const autoScanChk = document.getElementById('adminPosAutoScanCheck');

      if (scanForm && codeInput) {
        scanForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const val = codeInput.value.trim();
          const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 1) : 1;
          if (!val) {
            codeInput.focus();
            return;
          }
          this.scanAndAddCode(val, qty);
        });

        // Auto-agregar inmediatamente cuando se pegan o escanean los 13 dígitos de un EAN-13
        codeInput.addEventListener('input', () => {
          if (autoScanChk && !autoScanChk.checked) return;
          const digits = codeInput.value.replace(/\D/g, '');
          if (digits.length === 13) {
            const matched = findProductByBarcodeOrCode(digits);
            if (matched) {
              const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 1) : 1;
              this.scanAndAddCode(digits, qty);
            }
          }
        });
      }

      // Botón vaciar caja
      document.getElementById('btnAdminPosClearAll')?.addEventListener('click', () => {
        if (this.items.length > 0 && confirm('¿Deseas vaciar todos los artículos escaneados en la caja actual?')) {
          this.clearAll();
        }
      });

      // Selector de cliente
      document.getElementById('adminPosClientSelect')?.addEventListener('change', () => {
        this.handleClientSelectionChange();
      });

      // Cambio de método de pago y cálculos en vivo
      document.getElementById('adminPosPaymentMethod')?.addEventListener('change', () => {
        this.renderPosView();
      });
      document.getElementById('adminPosMsiSelect')?.addEventListener('change', () => {
        this.renderPosView();
      });
      document.getElementById('adminPosCashGiven')?.addEventListener('input', () => {
        this.updatePaymentUI();
      });
      document.getElementById('adminPosSplitCashInput')?.addEventListener('input', () => {
        this.updatePaymentUI();
      });

      // Botón cobrar venta física
      document.getElementById('btnAdminPosCompleteSale')?.addEventListener('click', () => {
        this.completePhysicalSale();
      });

      // Filtros del catálogo rápido en Caja Admin
      document.getElementById('adminPosCatalogSearch')?.addEventListener('input', () => {
        this.renderCatalogHelper();
      });
      document.getElementById('adminPosCatalogDept')?.addEventListener('change', () => {
        this.renderCatalogHelper();
      });

      // Botón rápido en Topbar para ir a Caja Física
      document.getElementById('btnTopbarPosView')?.addEventListener('click', () => {
        if (window.AdminApp && typeof window.AdminApp.switchView === 'function') {
          window.AdminApp.switchView('pos');
          setTimeout(() => document.getElementById('adminPosBarcodeInput')?.focus(), 100);
        }
      });

      // Escuchar cambios en la base de datos para refrescar clientes y stock
      window.addEventListener('callejon_admin_db_changed', () => {
        this.populateClientsSelector();
        this.renderPosView();
        this.renderCatalogHelper();
      });
    }
  };

  function initBarcodeSystem() {
    ensureAllProductsHaveBarcodes();
    injectStylesAndTagModal();

    if (isAdminPanelPage()) {
      AdminPosEngine.initAdminPos();
    } else {
      decorateProductCards();
      decorateQuickViewModal();

      let debounceTimer = null;
      const observer = new MutationObserver(() => {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          decorateProductCards();
          decorateQuickViewModal();
        }, 120);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  // Exponer API global
  window.CallejonBarcode = {
    init: initBarcodeSystem,
    ensureAllProductsHaveBarcodes,
    generateProductEan13,
    calculateEan13CheckDigit,
    renderEan13Svg,
    findProductByBarcodeOrCode,
    openProductBarcodeModal,
    AdminPos: AdminPosEngine
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBarcodeSystem);
  } else {
    initBarcodeSystem();
  }
})(window);
