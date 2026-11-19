/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — SISTEMA OFICIAL DE CÓDIGOS DE BARRAS (EAN-13) Y
 * SIMULADOR DE COMPRA FÍSICA CON LECTOR MÓVIL
 * ==========================================================================
 * - Genera códigos de barras reales estándar ISO/IEC 15420 (EAN-13 GS1 México 750)
 *   100% escaneables por cualquier aplicación móvil lectora de códigos de barras.
 * - Asigna un código único y determinista de 13 dígitos a cada producto.
 * - Muestra botón "Código de Barras" en cada tarjeta de producto y dentro del
 *   modal de vista rápida / detalle en todas las páginas de la tienda.
 * - Integra el buscador principal y el módulo "Caja Física / Lector de Código"
 *   para escribir o pegar el código escaneado con el celular y simular la compra
 *   física hasta el pago y generación del ticket oficial.
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

  // Patrón de paridad de los 6 dígitos izquierdos según el primer dígito (para México '7' es LGLGLG)
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

  // Prefijos departamentales de 3 dígitos (después de 750)
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

  /**
   * Calcula el dígito verificador oficial GS1 (Módulo 10) para los primeros 12 dígitos de un EAN-13
   */
  function calculateEan13CheckDigit(twelveDigits) {
    const clean = String(twelveDigits).replace(/\D/g, '').padStart(12, '0').slice(0, 12);
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const digit = parseInt(clean.charAt(i), 10) || 0;
      // Posiciones impares (índice par 0,2,4...) multiplican por 1; pares (índice impar 1,3,5...) por 3
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

    // Extraer número del ID (ej. "fashion-12" -> 12, "p4-090" -> 4090) o usar hash determinista
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

    // Combinar con indexHint si hubiera colisión
    const sixDigits = String(itemNum % 1000000).padStart(6, '0');
    const twelve = `750${deptPrefix}${sixDigits}`;
    const check = calculateEan13CheckDigit(twelve);
    return `${twelve}${check}`;
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

    // Construir secuencia de 95 módulos con marcadores de barra de guardia ('G') vs barra de datos ('1')
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
    const quietZoneModules = 12; // Zona silenciosa amplia para lectura instantánea con cámara móvil
    const totalModules = quietZoneModules * 2 + 95;
    const svgWidth = totalModules * moduleWidth;
    const barTop = options.barTop || 14;
    const dataBarHeight = options.barHeight || 96;
    const guardBarHeight = dataBarHeight + 12;
    const svgHeight = barTop + guardBarHeight + 28;

    let rectsHtml = '';
    // Agrupar módulos negros contiguos del mismo tipo para trazos ultra nítidos sin líneas de unión
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

    // Posiciones para los números legibles bajo las barras (formato EAN-13 oficial: 7  501010  000018)
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
   * Busca un producto por su código de barras EAN-13 (13 dígitos), por los 12 dígitos sin verificador, por SKU o por ID
   */
  function findProductByBarcodeOrCode(rawCode) {
    if (!rawCode) return null;
    ensureAllProductsHaveBarcodes();
    const allProducts = getAllCatalogProducts();
    const trimmed = String(rawCode).trim();
    const digitsOnly = trimmed.replace(/\D/g, '');
    const upper = trimmed.toUpperCase();

    // 1. Coincidencia exacta de 13 dígitos EAN-13
    if (digitsOnly.length === 13) {
      const exact = allProducts.find(p => p && String(p.barcode) === digitsOnly);
      if (exact) return exact;
      // Si el lector omitió o varió el último dígito verificador, comparar los primeros 12 dígitos
      const prefix12 = digitsOnly.slice(0, 12);
      const by12 = allProducts.find(p => p && String(p.barcode || '').slice(0, 12) === prefix12);
      if (by12) return by12;
    }

    // 2. Si el usuario ingresó los 12 dígitos sin el dígito verificador
    if (digitsOnly.length === 12 && digitsOnly.startsWith('750')) {
      const by12 = allProducts.find(p => p && String(p.barcode || '').slice(0, 12) === digitsOnly);
      if (by12) return by12;
    }

    // 3. Coincidencia por últimos dígitos significativos (ej. últimos 6-8 dígitos) o SKU o ID
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

  /**
   * Busca un producto por su ID
   */
  function findProductById(productId) {
    if (!productId) return null;
    ensureAllProductsHaveBarcodes();
    const allProducts = getAllCatalogProducts();
    return allProducts.find(p => p && String(p.id) === String(productId)) || null;
  }

  // =========================================================================
  // ESTILOS Y MODALES DE ETIQUETA DE CÓDIGO DE BARRAS Y CAJA FÍSICA (POS)
  // =========================================================================
  function injectStylesAndModals() {
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

      /* Botón en el Header para Abrir Caja Física / Lector de Código */
      .btn-header-pos-scanner {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: linear-gradient(135deg, #0b1b3d 0%, #162a56 100%);
        color: #ffffff;
        border: 1.5px solid #c58f38;
        border-radius: 999px;
        padding: 7px 13px;
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(11, 27, 61, 0.2);
      }
      .btn-header-pos-scanner:hover {
        background: linear-gradient(135deg, #c58f38 0%, #b07d2b 100%);
        color: #07142a;
        transform: translateY(-1px);
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
      .btn-qv-barcode-action.gold {
        background: #c58f38;
        color: #ffffff;
        border-color: #c58f38;
      }
      .btn-qv-barcode-action.gold:hover {
        background: #a9782b;
      }

      /* Overlay de Modales de Código de Barras y Caja Física */
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
      .cm-barcode-modal-card.pos-wide {
        max-width: 680px;
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
      .cm-tag-product-sku {
        font-size: 0.74rem;
        color: #64748b;
        font-family: monospace;
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
        transition: all 0.2s ease;
      }
      .cm-barcode-scan-stage.zoomed svg {
        max-width: 100% !important;
        transform: scale(1.06);
      }

      /* Caja Física / Lector POS */
      .cm-pos-scanner-input-wrap {
        display: flex;
        gap: 8px;
        margin-bottom: 14px;
      }
      .cm-pos-scanner-input {
        flex: 1;
        height: 48px;
        padding: 0 14px;
        border: 2px solid #0b1b3d;
        border-radius: 10px;
        font-size: 1.05rem;
        font-weight: 800;
        font-family: 'Courier New', Courier, monospace;
        letter-spacing: 0.12em;
        color: #0b1b3d;
        background: #f8fafc;
      }
      .cm-pos-scanner-input:focus {
        outline: none;
        border-color: #c58f38;
        background: #ffffff;
        box-shadow: 0 0 0 4px rgba(197, 143, 56, 0.2);
      }
      .cm-pos-btn-scan {
        background: #0b1b3d;
        color: #ffffff;
        border: none;
        border-radius: 10px;
        padding: 0 18px;
        font-weight: 800;
        font-size: 0.86rem;
        cursor: pointer;
        transition: background 0.2s;
      }
      .cm-pos-btn-scan:hover {
        background: #c58f38;
        color: #07142a;
      }

      @media (max-width: 640px) {
        .btn-header-pos-scanner span.hide-sm {
          display: none;
        }
        .cm-pos-scanner-input-wrap {
          flex-direction: column;
        }
        .cm-pos-btn-scan {
          height: 44px;
        }
      }
    `;
    document.head.appendChild(style);

    // 1. Modal de Etiqueta Individual de Código de Barras
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

    // 2. Modal de Simulador de Caja Física / Lector de Código de Barras
    const posModalHtml = `
      <div class="cm-barcode-overlay" id="cmPosScannerModal" role="dialog" aria-modal="true" aria-label="Simulador de Compra Física por Código de Barras">
        <div class="cm-barcode-modal-card pos-wide">
          <div class="cm-barcode-modal-header">
            <div>
              <h3>🏪 CAJA FÍSICA • COMPRA POR CÓDIGO DE BARRAS</h3>
              <p>Escanea el código en pantalla con tu celular y escríbelo o pégalo abajo</p>
            </div>
            <button type="button" class="cm-barcode-close-btn" id="btnCloseCmPosModal" aria-label="Cerrar">&times;</button>
          </div>
          <div class="cm-barcode-modal-body">
            <!-- Instrucciones rápidas de flujo -->
            <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px; padding: 10px 14px; margin-bottom: 14px; font-size: 0.8rem; color: #166534; line-height: 1.45;">
              <strong>📲 ¿Cómo simular tu compra física?</strong><br>
              1. Abre el botón <strong>«║▌║ Código de Barras»</strong> en cualquier producto y escanéalo con la app lectora de tu celular.<br>
              2. Escribe o pega aquí abajo el <strong>código de 13 dígitos</strong> leído por tu celular para pasarlo por caja.
            </div>

            <!-- Campo de entrada del código escaneado -->
            <form id="cmPosScanForm" novalidate>
              <label for="cmPosBarcodeInput" style="display: block; font-size: 0.78rem; font-weight: 800; color: #0b1b3d; margin-bottom: 6px; text-transform: uppercase;">
                Código de Barras Escaneado (EAN-13 de 13 dígitos o SKU):
              </label>
              <div class="cm-pos-scanner-input-wrap">
                <input
                  type="text"
                  id="cmPosBarcodeInput"
                  class="cm-pos-scanner-input"
                  placeholder="Ej: 7501010000018"
                  maxlength="20"
                  inputmode="numeric"
                  autocomplete="off"
                />
                <button type="submit" class="cm-pos-btn-scan" id="btnCmPosAddCode">
                  ➕ Pasar por Caja
                </button>
              </div>
            </form>

            <!-- Retroalimentación del último producto escaneado -->
            <div id="cmPosLastScannedBox" style="display: none; margin-bottom: 14px;"></div>

            <!-- Lista de artículos en la compra física actual (Sincronizada con el Carrito) -->
            <div style="border: 1.5px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 14px;">
              <div style="background: #f8fafc; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.82rem; font-weight: 800; color: #0b1b3d;">🧾 ARTÍCULOS ESCANEADOS EN CAJA</span>
                <span id="cmPosItemCountBadge" style="font-size: 0.75rem; font-weight: 800; background: #0b1b3d; color: #dfb743; padding: 2px 9px; border-radius: 999px;">0 piezas</span>
              </div>
              <div id="cmPosCartList" style="max-height: 220px; overflow-y: auto; padding: 10px 14px;"></div>
              <div style="background: #f8fafc; padding: 12px 14px; border-top: 1.5px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-size: 0.72rem; color: #64748b;">TOTAL DE COMPRA FÍSICA (I.V.A. registrado):</div>
                  <div id="cmPosTotalAmount" style="font-size: 1.35rem; font-weight: 900; color: #0b1b3d;">$0.00 MXN</div>
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button type="button" id="btnCmPosProceedCheckout" style="background: linear-gradient(135deg, #c58f38 0%, #b07d2b 100%); color: #ffffff; border: none; border-radius: 10px; padding: 11px 18px; font-weight: 800; font-size: 0.86rem; cursor: pointer; box-shadow: 0 4px 12px rgba(197, 143, 56, 0.3);">
                    💳 Cobrar y Generar Ticket →
                  </button>
                </div>
              </div>
            </div>

            <!-- Catálogo rápido de consulta de códigos por si desea probar o verificar un código -->
            <details style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 14px;">
              <summary style="font-size: 0.8rem; font-weight: 800; color: #0b1b3d; cursor: pointer;">
                📋 Ver lista rápida de productos y sus códigos de barras (para pruebas)
              </summary>
              <div style="margin-top: 10px;">
                <input type="text" id="cmPosQuickFilterInput" placeholder="Filtrar producto por nombre para ver su código..." style="width: 100%; padding: 7px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem; margin-bottom: 8px;" />
                <div id="cmPosQuickCatalogList" style="max-height: 180px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px;"></div>
              </div>
            </details>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', tagModalHtml + posModalHtml);

    // Eventos de cierre
    document.getElementById('btnCloseCmBarcodeTag')?.addEventListener('click', () => {
      document.getElementById('cmBarcodeTagModal')?.classList.remove('active');
    });
    document.getElementById('cmBarcodeTagModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'cmBarcodeTagModal') {
        e.currentTarget.classList.remove('active');
      }
    });

    document.getElementById('btnCloseCmPosModal')?.addEventListener('click', () => {
      document.getElementById('cmPosScannerModal')?.classList.remove('active');
    });
    document.getElementById('cmPosScannerModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'cmPosScannerModal') {
        e.currentTarget.classList.remove('active');
      }
    });

    // Evento de escaneo / ingreso de código en Caja Física
    const scanForm = document.getElementById('cmPosScanForm');
    const barcodeInput = document.getElementById('cmPosBarcodeInput');

    if (scanForm && barcodeInput) {
      scanForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const codeVal = barcodeInput.value.trim();
        if (!codeVal) {
          barcodeInput.focus();
          return;
        }
        processScannedCodeInPos(codeVal);
      });
    }

    // Botón Cobrar y Generar Ticket
    document.getElementById('btnCmPosProceedCheckout')?.addEventListener('click', () => {
      const cart = getActiveStoreCart();
      if (!cart || cart.length === 0) {
        if (window.DavantiApp && typeof window.DavantiApp.showToast === 'function') {
          window.DavantiApp.showToast('⚠️ Escanea o agrega al menos un producto por código de barras antes de cobrar.');
        } else {
          alert('Escanea o agrega al menos un producto por código de barras antes de cobrar.');
        }
        return;
      }
      document.getElementById('cmPosScannerModal')?.classList.remove('active');
      if (window.DavantiApp && typeof window.DavantiApp.openCheckoutModal === 'function') {
        window.DavantiApp.openCheckoutModal();
      } else {
        document.getElementById('btnProceedCheckout')?.click();
      }
    });

    // Filtro del catálogo rápido en Caja Física
    document.getElementById('cmPosQuickFilterInput')?.addEventListener('input', (e) => {
      renderPosQuickCatalog(e.target.value);
    });
  }

  /**
   * Obtiene el carrito activo de la tienda
   */
  function getActiveStoreCart() {
    try {
      const raw = localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]';
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Agrega un producto al carrito de la tienda (usando DavantiApp.addToCart o fallback directo)
   */
  function addProductToStoreCart(product, qty = 1) {
    if (!product) return;
    const defaultSize = (Array.isArray(product.sizes) && product.sizes.length > 0) ? product.sizes[0] : null;
    const defaultColor = (Array.isArray(product.colors) && product.colors.length > 0) ? product.colors[0] : null;

    if (window.DavantiApp && typeof window.DavantiApp.addToCart === 'function') {
      window.DavantiApp.addToCart(product.id, defaultSize, defaultColor, qty);
    } else {
      const cart = getActiveStoreCart();
      const existing = cart.find(i => i.id === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + qty;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: defaultSize,
          color: defaultColor,
          quantity: qty
        });
      }
      localStorage.setItem('davanti_cart', JSON.stringify(cart));
      localStorage.setItem('grande_cart', JSON.stringify(cart));
      if (window.DavantiApp && typeof window.DavantiApp.reloadCart === 'function') {
        window.DavantiApp.reloadCart(cart);
      }
    }
  }

  /**
   * Procesa un código de barras ingresado o pegado en el Simulador de Caja Física
   */
  function processScannedCodeInPos(rawCode) {
    const input = document.getElementById('cmPosBarcodeInput');
    const feedbackBox = document.getElementById('cmPosLastScannedBox');
    const product = findProductByBarcodeOrCode(rawCode);

    if (!product) {
      playScannerBeep(false);
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <div style="background: #fef2f2; border: 1.5px solid #f87171; border-radius: 10px; padding: 10px 14px; color: #991b1b; font-size: 0.82rem; font-weight: 700;">
            ❌ No se encontró ningún producto con el código <code>${String(rawCode).replace(/</g, '&lt;')}</code>. Verifica los 13 dígitos escaneados.
          </div>
        `;
      }
      return false;
    }

    playScannerBeep(true);
    addProductToStoreCart(product, 1);

    if (input) {
      input.value = '';
      input.focus();
    }

    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      feedbackBox.innerHTML = `
        <div style="background: #ecfdf5; border: 1.5px solid #10b981; border-radius: 10px; padding: 10px 14px; display: flex; align-items: center; gap: 12px;">
          <img src="${product.image}" alt="${product.name}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px; border: 1px solid #a7f3d0; background: #fff;" />
          <div style="flex: 1;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #059669; text-transform: uppercase;">
              ✅ ¡LECTURA EXITOSA! • EAN-13: ${product.barcode}
            </div>
            <div style="font-size: 0.9rem; font-weight: 800; color: #0b1b3d;">${product.name}</div>
            <div style="font-size: 0.84rem; font-weight: 800; color: #c58f38;">+$${Number(product.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN agregado a la cuenta</div>
          </div>
        </div>
      `;
    }

    renderPosCartList();
    return true;
  }

  /**
   * Renderiza la lista de productos escaneados dentro del modal de Caja Física
   */
  function renderPosCartList() {
    const container = document.getElementById('cmPosCartList');
    const countBadge = document.getElementById('cmPosItemCountBadge');
    const totalEl = document.getElementById('cmPosTotalAmount');
    if (!container) return;

    const cart = getActiveStoreCart();
    const totalPieces = cart.reduce((sum, i) => sum + (Number(i.quantity) || 1), 0);
    const totalAmount = cart.reduce((sum, i) => sum + ((Number(i.price) || 0) * (Number(i.quantity) || 1)), 0);

    if (countBadge) countBadge.textContent = `${totalPieces} pieza(s)`;
    if (totalEl) totalEl.textContent = `$${totalAmount.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;

    if (cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 18px 10px; color: #64748b; font-size: 0.82rem;">
          Aún no hay productos pasados por caja. Escanea un código de barras con tu celular e ingrésalo arriba.
        </div>
      `;
      return;
    }

    container.innerHTML = cart.map((item, idx) => {
      const prod = findProductById(item.id);
      const barcodeStr = prod?.barcode || '';
      const qty = Number(item.quantity) || 1;
      const lineTotal = (Number(item.price) || 0) * qty;
      return `
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 8px 0; border-bottom: 1px dashed #e2e8f0;">
          <img src="${item.image}" alt="${item.name}" style="width: 38px; height: 38px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;" />
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 0.82rem; font-weight: 800; color: #0b1b3d; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
            <div style="font-size: 0.72rem; color: #64748b; font-family: monospace;">
              ${barcodeStr ? `EAN: ${barcodeStr} • ` : ''}${qty} x $${Number(item.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div style="font-size: 0.85rem; font-weight: 800; color: #0b1b3d; white-space: nowrap;">
            $${lineTotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
          </div>
          <button type="button" class="btn-cm-pos-remove" data-index="${idx}" title="Quitar artículo" style="background: #fee2e2; color: #b91c1c; border: none; width: 26px; height: 26px; border-radius: 6px; font-weight: 800; cursor: pointer;">&times;</button>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.btn-cm-pos-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (window.DavantiApp && typeof window.DavantiApp.removeCartItem === 'function') {
          window.DavantiApp.removeCartItem(idx);
        } else {
          const current = getActiveStoreCart();
          current.splice(idx, 1);
          localStorage.setItem('davanti_cart', JSON.stringify(current));
          localStorage.setItem('grande_cart', JSON.stringify(current));
        }
        renderPosCartList();
      });
    });
  }

  /**
   * Renderiza la lista rápida de productos y sus códigos de barras dentro del modal POS
   */
  function renderPosQuickCatalog(filterQuery = '') {
    const listEl = document.getElementById('cmPosQuickCatalogList');
    if (!listEl) return;
    ensureAllProductsHaveBarcodes();
    const all = getAllCatalogProducts();
    const q = String(filterQuery || '').trim().toLowerCase();

    const filtered = q
      ? all.filter(p =>
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.barcode && p.barcode.includes(q)) ||
          (p.department && p.department.toLowerCase().includes(q))
        )
      : all;

    const subset = filtered.slice(0, 25);
    listEl.innerHTML = subset.map(p => `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: #ffffff; padding: 6px 10px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 0.76rem;">
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 700; color: #0b1b3d; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name}</div>
          <div style="font-family: monospace; color: #c58f38; font-weight: 800;">Código: ${p.barcode} • $${Number(p.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</div>
        </div>
        <button type="button" class="btn-cm-quick-view-tag" data-id="${p.id}" style="background: #f1f5f9; color: #0b1b3d; border: 1px solid #cbd5e1; border-radius: 5px; padding: 4px 8px; font-size: 0.72rem; font-weight: 700; cursor: pointer;">
          Ver Código
        </button>
        <button type="button" class="btn-cm-quick-use-code" data-code="${p.barcode}" style="background: #0b1b3d; color: #ffffff; border: none; border-radius: 5px; padding: 4px 8px; font-size: 0.72rem; font-weight: 700; cursor: pointer;">
          Pasar
        </button>
      </div>
    `).join('');

    listEl.querySelectorAll('.btn-cm-quick-view-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-id');
        openProductBarcodeModal(pid);
      });
    });

    listEl.querySelectorAll('.btn-cm-quick-use-code').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        processScannedCodeInPos(code);
      });
    });
  }

  /**
   * Abre el modal con la Etiqueta Oficial de Código de Barras EAN-13 lista para escanear con el celular
   */
  function openProductBarcodeModal(productOrId) {
    injectStylesAndModals();
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

      <button type="button" id="btnCmOpenPosFromTag" style="width: 100%; margin-top: 8px; background: linear-gradient(135deg, #0b1b3d 0%, #162a56 100%); color: #ffffff; border: 1.5px solid #c58f38; border-radius: 10px; padding: 12px 16px; font-size: 0.86rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span>🏪 Abrir Caja Física para Ingresar Código Escaneado</span>
      </button>
    `;

    modalEl.classList.add('active');

    // Copiar código al portapapeles
    document.getElementById('btnCmCopyBarcode')?.addEventListener('click', (e) => {
      navigator.clipboard?.writeText(barcode);
      const btn = e.currentTarget;
      btn.textContent = `✅ ¡Copiado! (${barcode})`;
      setTimeout(() => {
        btn.textContent = `📋 Copiar Código (${barcode})`;
      }, 2200);
      if (window.DavantiApp && typeof window.DavantiApp.showToast === 'function') {
        window.DavantiApp.showToast(`📋 Código de barras ${barcode} copiado al portapapeles`);
      }
    });

    // Imprimir etiqueta individual
    document.getElementById('btnCmPrintTag')?.addEventListener('click', () => {
      printProductBarcodeLabel(product);
    });

    // Abrir Caja Física
    document.getElementById('btnCmOpenPosFromTag')?.addEventListener('click', () => {
      modalEl.classList.remove('active');
      openPosScannerModal();
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

  /**
   * Abre el modal de Simulador de Caja Física / Lector de Código de Barras
   */
  function openPosScannerModal(prefillCode = '') {
    injectStylesAndModals();
    ensureAllProductsHaveBarcodes();
    renderPosCartList();
    renderPosQuickCatalog('');

    const modalEl = document.getElementById('cmPosScannerModal');
    const inputEl = document.getElementById('cmPosBarcodeInput');
    if (modalEl) {
      modalEl.classList.add('active');
    }
    if (inputEl) {
      if (prefillCode) inputEl.value = prefillCode;
      setTimeout(() => inputEl.focus(), 120);
    }
  }

  // =========================================================================
  // INYECCIÓN AUTOMÁTICA DE BOTONES EN TARJETAS, MODALES Y HEADER
  // =========================================================================

  /**
   * Agrega el botón "║▌║ Código de Barras" en todas las tarjetas de producto de cualquier página
   */
  function decorateProductCards() {
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

      // Insertar dentro del contenedor de info de la tarjeta
      const infoBox = card.querySelector('.product-info, .beauty-card-body, .gaming-card-body, .home-card-body, .sport-card-body, .tech-card-body, .toy-card-body') || card;
      infoBox.appendChild(btn);
    });
  }

  /**
   * Inyecta el código de barras escaneable dentro del modal de Vista Rápida / Detalle de Producto cuando se abre
   */
  function decorateQuickViewModal() {
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

      // Identificar qué producto se está mostrando en el modal
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
          <button type="button" class="btn-qv-barcode-action" data-action="enlarge">🔍 Ampliar Etiqueta</button>
          <button type="button" class="btn-qv-barcode-action" data-action="copy">📋 Copiar Código</button>
          <button type="button" class="btn-qv-barcode-action gold" data-action="pos">🏪 Simular Compra en Caja</button>
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

      box.querySelector('[data-action="pos"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openPosScannerModal(barcode);
      });

      const targetCol = container.querySelector('.quickview-details-col, .modal-info-col, .beauty-modal-info, .gaming-modal-info, .home-modal-info, .sport-modal-info') || container;
      targetCol.appendChild(box);
    });
  }

  /**
   * Inyecta el botón "🏪 Caja Física / Código" en la barra superior (Header) de todas las páginas
   */
  function injectHeaderPosButton() {
    if (document.getElementById('btnHeaderOpenPosScanner')) return;

    const headerActions = document.querySelector('.header-actions, .nav-actions');
    if (!headerActions) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'btnHeaderOpenPosScanner';
    btn.className = 'btn-header-pos-scanner';
    btn.setAttribute('title', 'Simular compra física ingresando el código de barras escaneado con tu celular');
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M3 5v14M7 5v14M11 5v14M15 5v14M18 5v14M21 5v14"/>
      </svg>
      <span class="hide-sm">Caja / Código</span>
    `;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPosScannerModal();
    });

    headerActions.insertBefore(btn, headerActions.firstChild);
  }

  /**
   * Conecta el buscador principal (#searchInput) para que al pegar o escribir un código de barras
   * de 13 dígitos permita agregarlo directamente o abrir su etiqueta
   */
  function hookMainSearchInputForBarcodes() {
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    if (!searchInput) return;

    // Actualizar placeholder para indicar que también acepta códigos de barras
    if (!searchInput.placeholder.toLowerCase().includes('código')) {
      searchInput.placeholder = 'Buscar productos, marcas o pegar código de barras (13 dígitos)...';
    }

    if (searchForm && !searchForm.dataset.barcodeHooked) {
      searchForm.dataset.barcodeHooked = 'true';
      searchForm.addEventListener('submit', (e) => {
        const val = searchInput.value.trim();
        const digits = val.replace(/\D/g, '');
        if (digits.length === 12 || digits.length === 13) {
          const matchedProd = findProductByBarcodeOrCode(digits);
          if (matchedProd) {
            e.preventDefault();
            e.stopImmediatePropagation();
            openPosScannerModal();
            processScannedCodeInPos(matchedProd.barcode);
          }
        }
      }, true);
    }
  }

  function initBarcodeSystem() {
    ensureAllProductsHaveBarcodes();
    injectStylesAndModals();
    injectHeaderPosButton();
    decorateProductCards();
    decorateQuickViewModal();
    hookMainSearchInputForBarcodes();

    // Observador para decorar tarjetas de productos que se filtren o rendericen dinámicamente
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

  // Exponer API global
  window.CallejonBarcode = {
    init: initBarcodeSystem,
    ensureAllProductsHaveBarcodes,
    generateProductEan13,
    calculateEan13CheckDigit,
    renderEan13Svg,
    findProductByBarcodeOrCode,
    openProductBarcodeModal,
    openPosScannerModal,
    processScannedCodeInPos
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBarcodeSystem);
  } else {
    initBarcodeSystem();
  }
})(window);
