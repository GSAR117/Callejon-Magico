/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — SISTEMA OFICIAL DE TICKET DE COMPRA Y FACTURACIÓN DIGITAL
 * Comprobante departamental impreso y digital con datos fiscales reales,
 * desglose de artículos, cantidades, precios unitarios, base gravable,
 * cálculo exacto de I.V.A. (16%), financiamiento MSI, Puntos Mágicos,
 * código de barras, código QR de verificación y módulo de impresión/descarga.
 * ==========================================================================
 */

(function () {
  'use strict';

  // Configuración de la Razón Social y Domicilio Fiscal
  const FISCAL_EMISOR = {
    razonSocial: 'CALLEJÓN MÁGICO S.A. DE C.V.',
    nombreComercial: 'Callejón Mágico Tienda Departamental',
    rfc: 'CMA241028-LM8',
    regimenFiscal: '601 - General de Ley Personas Morales',
    calleNumero: '8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente',
    municipioEstado: 'Tapachula, Chiapas, C.P. 30700',
    telefono: '(962) 401-4408',
    whatsappTienda: '5219624014408',
    lugarExpedicion: '30700, Tapachula, Chiapas'
  };

  // Configuración Oficial de EmailJS para Envío de Tickets en Línea
  const EMAILJS_CONFIG = {
    serviceId: 'service_twm03c7',
    templateId: 'template_anh3qjr',
    publicKey: 'eFDXFKJFAoYalylpS'
  };

  /**
   * Garantiza la carga e inicialización en línea del SDK de EmailJS
   */
  function ensureEmailJSLoaded() {
    if (window.emailjs) {
      try { window.emailjs.init(EMAILJS_CONFIG.publicKey); } catch(e){}
      return Promise.resolve(window.emailjs);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.onload = () => {
        try {
          window.emailjs.init(EMAILJS_CONFIG.publicKey);
        } catch(e){}
        resolve(window.emailjs);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * Convierte importe numérico a texto legal en pesos mexicanos (formato oficial SAT)
   */
  function numberToWordsMXN(amount) {
    const total = Math.max(0, Number(amount) || 0);
    const pesos = Math.floor(total);
    const centavos = Math.round((total - pesos) * 100);
    const centavosStr = String(centavos).padStart(2, '0') + '/100 M.N.';

    const unidades = ['', 'UN', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
    const especiales = ['DIEZ', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'];
    const decenas = ['', '', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];
    const centenas = ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];

    function leerMenorMil(n) {
      if (n === 0) return '';
      if (n === 100) return 'CIEN';
      let res = '';
      const c = Math.floor(n / 100);
      const d = Math.floor((n % 100) / 10);
      const u = n % 10;

      if (c > 0) res += centenas[c] + ' ';
      if (d === 1) {
        res += especiales[u] + ' ';
      } else if (d === 2 && u > 0) {
        res += 'VEINTI' + unidades[u] + ' ';
      } else {
        if (d > 0) res += decenas[d] + (u > 0 ? ' Y ' : ' ');
        if (u > 0) res += unidades[u] + ' ';
      }
      return res.trim();
    }

    function convertir(n) {
      if (n === 0) return 'CERO';
      const millones = Math.floor(n / 1000000);
      const restoMillones = n % 1000000;
      const miles = Math.floor(restoMillones / 1000);
      const resto = restoMillones % 1000;
      let res = '';

      if (millones === 1) res += 'UN MILLÓN ';
      else if (millones > 1) res += leerMenorMil(millones) + ' MILLONES ';

      if (miles === 1) res += 'MIL ';
      else if (miles > 1) res += leerMenorMil(miles) + ' MIL ';

      if (resto > 0) res += leerMenorMil(resto);
      return res.trim();
    }

    const palabraPesos = pesos === 1 ? 'PESO' : 'PESOS';
    return (convertir(pesos) + ' ' + palabraPesos + ' ' + centavosStr).toUpperCase().trim();
  }

  /**
   * Genera UUID Fiscal determinista realista
   */
  function generateFiscalUUID(seed) {
    const s = String(seed || Date.now());
    let h1 = 0xdeadbeef, h2 = 0x41c64e6d;
    for (let i = 0; i < s.length; i++) {
      const ch = s.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    const hex = (n, len) => Math.abs(n).toString(16).toUpperCase().padStart(len, '0').slice(0, len);
    return `${hex(h1, 8)}-${hex(h2, 4)}-4D91-${hex(h1 ^ h2, 4)}-${hex(h1, 6)}${hex(h2, 6)}`;
  }

  /**
   * Genera el SVG visual de un Código de Barras tipo Code128 para el ticket
   */
  function generateBarcodeSvg(code) {
    const bars = [2, 1, 3, 1, 1, 2, 3, 2, 1, 2, 1, 3, 2, 1, 1, 3, 2, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 2, 1];
    let x = 12;
    let rects = '';
    for (let i = 0; i < bars.length; i++) {
      const width = bars[i] * 2.2;
      if (i % 2 === 0) {
        rects += `<rect x="${x}" y="0" width="${width}" height="48" fill="#0f172a" />`;
      }
      x += width;
    }
    return `
      <svg viewBox="0 0 ${x + 12} 64" class="ticket-barcode-svg" style="width: 100%; max-width: 250px; height: 52px; display: block; margin: 0 auto;">
        <g>${rects}</g>
        <text x="${(x + 12) / 2}" y="60" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#334155">*${code}*</text>
      </svg>
    `;
  }

  /**
   * Genera el SVG visual de un Código QR Fiscal
   */
  function generateQrCodeSvg(data) {
    // Patrón geométrico de Código QR realista en SVG
    return `
      <svg viewBox="0 0 100 100" class="ticket-qr-svg" style="width: 84px; height: 84px; display: block; margin: 0 auto; background: #ffffff; border: 1px solid #cbd5e1; padding: 4px; border-radius: 4px;">
        <!-- Posicionador Top Left -->
        <rect x="5" y="5" width="26" height="26" fill="#0b1b3d" />
        <rect x="9" y="9" width="18" height="18" fill="#ffffff" />
        <rect x="13" y="13" width="10" height="10" fill="#0b1b3d" />

        <!-- Posicionador Top Right -->
        <rect x="69" y="5" width="26" height="26" fill="#0b1b3d" />
        <rect x="73" y="9" width="18" height="18" fill="#ffffff" />
        <rect x="77" y="13" width="10" height="10" fill="#0b1b3d" />

        <!-- Posicionador Bottom Left -->
        <rect x="5" y="69" width="26" height="26" fill="#0b1b3d" />
        <rect x="9" y="73" width="18" height="18" fill="#ffffff" />
        <rect x="13" y="77" width="10" height="10" fill="#0b1b3d" />

        <!-- Puntos de sincronización y datos aleatorios -->
        <rect x="36" y="9" width="5" height="5" fill="#0b1b3d" />
        <rect x="46" y="9" width="5" height="5" fill="#0b1b3d" />
        <rect x="56" y="9" width="5" height="5" fill="#0b1b3d" />
        <rect x="9" y="36" width="5" height="5" fill="#0b1b3d" />
        <rect x="9" y="46" width="5" height="5" fill="#0b1b3d" />
        <rect x="9" y="56" width="5" height="5" fill="#0b1b3d" />

        <!-- Matriz de datos interiores -->
        <rect x="36" y="36" width="7" height="7" fill="#0b1b3d" />
        <rect x="48" y="36" width="6" height="6" fill="#0b1b3d" />
        <rect x="60" y="36" width="6" height="6" fill="#0b1b3d" />
        <rect x="36" y="48" width="6" height="6" fill="#0b1b3d" />
        <rect x="48" y="48" width="8" height="8" fill="#0b1b3d" />
        <rect x="62" y="48" width="6" height="6" fill="#0b1b3d" />
        <rect x="74" y="48" width="6" height="6" fill="#0b1b3d" />
        <rect x="36" y="60" width="8" height="8" fill="#0b1b3d" />
        <rect x="50" y="60" width="6" height="6" fill="#0b1b3d" />
        <rect x="62" y="60" width="7" height="7" fill="#0b1b3d" />
        <rect x="36" y="74" width="6" height="6" fill="#0b1b3d" />
        <rect x="48" y="74" width="7" height="7" fill="#0b1b3d" />
        <rect x="62" y="74" width="6" height="6" fill="#0b1b3d" />
        <rect x="74" y="74" width="8" height="8" fill="#0b1b3d" />
        <rect x="86" y="60" width="5" height="5" fill="#0b1b3d" />
        <rect x="86" y="74" width="5" height="5" fill="#0b1b3d" />
      </svg>
    `;
  }

  /**
   * Resuelve el objeto de pedido a partir de su número de orden o del objeto en sí
   */
  function resolveOrderData(orderOrNum) {
    if (typeof orderOrNum === 'object' && orderOrNum !== null && orderOrNum.orderNum) {
      return orderOrNum;
    }

    const orderNum = typeof orderOrNum === 'string' ? orderOrNum.trim() : null;

    if (window.CallejonOrders && typeof window.CallejonOrders.getOrders === 'function') {
      const orders = window.CallejonOrders.getOrders();
      if (orderNum) {
        const found = orders.find(o => o.orderNum === orderNum);
        if (found) return found;
      } else if (orders.length > 0) {
        return orders[0];
      }
    }

    try {
      const raw = localStorage.getItem('callejon_user_orders');
      if (raw) {
        const orders = JSON.parse(raw);
        if (Array.isArray(orders) && orders.length > 0) {
          if (orderNum) {
            const found = orders.find(o => o.orderNum === orderNum);
            if (found) return found;
          } else {
            return orders[0];
          }
        }
      }
    } catch (e) {}

    // Fallback de demostración
    return {
      orderNum: 'CLM-784210',
      date: new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      timestamp: Date.now(),
      status: 'in-transit',
      carrier: 'Estafeta Express',
      trackingNumber: 'EST-MX-849201948',
      recipient: {
        name: 'Carlos Mendoza',
        phone: '55 1234 5678',
        street: '8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente (Plantel Centro)',
        city: 'Tapachula, Chiapas'
      },
      paymentMethod: 'Tarjeta Departamental Callejón Mágico (18 MSI)',
      msi: 18,
      pointsEarned: 350,
      subtotal: 7699,
      discount: 769.90,
      total: 6929.10,
      items: [
        {
          id: 'item-demo-1',
          name: 'Reloj Cronógrafo D\'Avanti Gold 18K Edition',
          price: 2199,
          quantity: 1,
          size: '42mm',
          color: 'Oro 18K'
        },
        {
          id: 'item-demo-2',
          name: 'Smart TV Samsung 55" Crystal UHD 4K',
          price: 4730.10,
          quantity: 1,
          size: '55 Pulgadas',
          color: 'Titanium Black'
        }
      ]
    };
  }

  const TicketEngine = {
    /**
     * Calcula los datos financieros e impositivos exactos bajo normatividad fiscal mexicana (SAT/MXN)
     * Soporta precios con IVA incluido o desglosado, múltiples tasas impositivas por producto
     * (Tasa 16% general, Tasa 0% y Exento) y distribución proporcional de descuentos.
     */
    calculateFinancials(order) {
      if (!order) return null;

      // 1. Regla de cálculo oficial: El precio registrado en la tienda es el SUBTOTAL
      // El I.V.A. (16%) se calcula sobre dicho subtotal (menos descuentos) y SE LE SUMA para obtener el Total a Pagar.
      const pricesIncludeTax = order.pricesIncludeTax === true; // false por defecto: el precio de tienda es el subtotal y el IVA se suma

      // 2. Normalizar artículos y calcular Subtotal Bruto de Venta
      const rawItems = Array.isArray(order.items) && order.items.length > 0 ? order.items : [];
      const items = rawItems.length > 0 ? rawItems : [
        {
          name: 'Artículos Departamentales Callejón Mágico',
          quantity: 1,
          price: Number(order.subtotal || order.total) || 0,
          taxRate: order.taxRate || 0.16
        }
      ];

      let calculatedSubtotalGross = 0;
      const processedItems = items.map(item => {
        const qty = Number(item.quantity) || 1;
        const unitPrice = Number(item.price) || 0;
        const lineGross = Math.round(qty * unitPrice * 100) / 100;
        calculatedSubtotalGross = Math.round((calculatedSubtotalGross + lineGross) * 100) / 100;

        // Clasificar tratamiento fiscal del producto: Tasa 16%, Tasa 0% o Exento
        let taxType = '16';
        let rateNum = 0.16;

        if (item.taxRate === 0 || item.taxRate === '0' || item.taxRate === '0%' || item.taxType === '0') {
          taxType = '0';
          rateNum = 0.0;
        } else if (item.taxRate === 'exento' || item.taxType === 'exento' || item.isExempt === true || item.exempt === true) {
          taxType = 'exento';
          rateNum = 0.0;
        } else if (item.taxRate !== undefined && item.taxRate !== null) {
          const parsed = parseFloat(item.taxRate);
          if (parsed === 0) {
            taxType = '0';
            rateNum = 0.0;
          } else if (!isNaN(parsed)) {
            rateNum = parsed > 1 ? parsed / 100 : parsed;
            taxType = String(Math.round(rateNum * 100));
          }
        }

        return {
          ...item,
          quantity: qty,
          unitPrice,
          lineGross,
          taxType,
          rateNum
        };
      });

      // Subtotal bruto garantizado (el precio del producto en la tienda)
      const subtotalGross = calculatedSubtotalGross > 0 
        ? calculatedSubtotalGross 
        : (Number(order.subtotal) || Number(order.total) || 0);

      // 3. Descuento departamental total aplicado
      let discount = Math.round((Number(order.discount) || 0) * 100) / 100;
      if (discount > subtotalGross) discount = subtotalGross;
      if (discount < 0) discount = 0;

      // 4. Distribución proporcional del descuento por artículo
      let allocatedDiscount = 0;
      const itemsWithDiscount = processedItems.map((item, index) => {
        let itemDiscount = 0;
        if (subtotalGross > 0 && discount > 0) {
          if (index === processedItems.length - 1) {
            itemDiscount = Math.round((discount - allocatedDiscount) * 100) / 100;
          } else {
            itemDiscount = Math.round((discount * (item.lineGross / subtotalGross)) * 100) / 100;
            allocatedDiscount = Math.round((allocatedDiscount + itemDiscount) * 100) / 100;
          }
        }
        const lineNet = Math.max(0, Math.round((item.lineGross - itemDiscount) * 100) / 100);
        return {
          ...item,
          itemDiscount,
          lineNet
        };
      });

      // 5. Cálculo fiscal exacto:
      // Subtotal = Suma de precios de productos en tienda
      // IVA (16%) = Se suma al subtotal
      // Total a Pagar = Subtotal - Descuento + IVA
      let baseGravable16 = 0;
      let iva16 = 0;
      let baseTasa0 = 0;
      let importeExento = 0;
      let totalPayable = 0;

      const totalAfterDiscount = Math.round((subtotalGross - discount) * 100) / 100;

      if (pricesIncludeTax) {
        // En caso de que se configure explícitamente precios con IVA incluido
        itemsWithDiscount.forEach(item => {
          if (item.taxType === '16') {
            const itemBase = Math.round((item.lineNet / 1.16) * 100) / 100;
            const itemIva = Math.round((item.lineNet - itemBase) * 100) / 100;
            baseGravable16 = Math.round((baseGravable16 + itemBase) * 100) / 100;
            iva16 = Math.round((iva16 + itemIva) * 100) / 100;
          } else if (item.taxType === '0') {
            baseTasa0 = Math.round((baseTasa0 + item.lineNet) * 100) / 100;
          } else if (item.taxType === 'exento') {
            importeExento = Math.round((importeExento + item.lineNet) * 100) / 100;
          }
        });
        totalPayable = totalAfterDiscount;
      } else {
        // REGLA POR DEFECTO SOLICITADA:
        // El precio de la tienda es el Subtotal. El 16% de IVA se calcula y se suma al subtotal.
        itemsWithDiscount.forEach(item => {
          if (item.taxType === '16') {
            const itemBase = item.lineNet;
            const itemIva = Math.round((itemBase * 0.16) * 100) / 100;
            baseGravable16 = Math.round((baseGravable16 + itemBase) * 100) / 100;
            iva16 = Math.round((iva16 + itemIva) * 100) / 100;
          } else if (item.taxType === '0') {
            baseTasa0 = Math.round((baseTasa0 + item.lineNet) * 100) / 100;
          } else if (item.taxType === 'exento') {
            importeExento = Math.round((importeExento + item.lineNet) * 100) / 100;
          }
        });

        totalPayable = Math.round((totalAfterDiscount + iva16) * 100) / 100;
      }

      const totalPieces = itemsWithDiscount.reduce((sum, item) => sum + item.quantity, 0);
      const ticketFolio = 'TKT-' + (order.orderNum || 'CLM-000000').replace(/[^a-zA-Z0-9-]/g, '');
      const uuidFiscal = generateFiscalUUID(order.orderNum || order.timestamp);

      return {
        total: totalPayable,
        discount,
        subtotalGross,
        totalAfterDiscount,
        baseGravable: subtotalGross,
        baseGravable16,
        iva16,
        base0: baseTasa0,
        exento: importeExento,
        baseSubtotalSinIva: subtotalGross,
        descuentoSinIva: discount,
        totalPieces,
        ticketFolio,
        uuidFiscal,
        pricesIncludeTax,
        itemsDetailed: itemsWithDiscount,
        totalWords: numberToWordsMXN(totalPayable)
      };
    },

    /**
     * Genera la representación en HTML del ticket impreso
     */
    renderTicketHtml(order) {
      const fin = this.calculateFinancials(order);
      const emisor = FISCAL_EMISOR;

      const recipientName = order.recipient?.name || 'CLIENTE FRECUENTE';
      const recipientPhone = order.recipient?.phone || 'No especificado';
      const recipientStreet = order.recipient?.street || 'Entrega en Domicilio';
      const recipientCity = order.recipient?.city || 'Ciudad de México';

      const dateStr = order.date || new Date().toLocaleString('es-MX', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      // Información de tarjeta enmascarada si fue con Callejón Mágico
      let paymentDetailsHtml = '';
      if (order.paymentMethod && order.paymentMethod.toLowerCase().includes('callejón')) {
        let cardNumMasked = '4152 •••• •••• ••••';
        if (window.CallejonCard && typeof window.CallejonCard.getCard === 'function') {
          const card = window.CallejonCard.getCard();
          if (card && card.cardNumber && card.cardNumber.length >= 16) {
            const raw = card.cardNumber.replace(/\s+/g, '');
            cardNumMasked = `4152 •••• •••• ${raw.slice(-4)}`;
          }
        }
        paymentDetailsHtml = `
          <div class="ticket-row-detail"><span>TARJETA:</span><span>${cardNumMasked}</span></div>
          ${order.msi && order.msi > 1 ? `
            <div class="ticket-row-detail highlight">
              <span>FINANCIAMIENTO:</span>
              <span><strong>${order.msi} MSI de $${(fin.total / order.msi).toLocaleString('es-MX', { minimumFractionDigits: 2 })}/m</strong></span>
            </div>
          ` : '<div class="ticket-row-detail"><span>MODALIDAD:</span><span>PAGO DE CONTADO (10% OFF APLICADO)</span></div>'}
        `;
      } else {
        paymentDetailsHtml = `
          <div class="ticket-row-detail"><span>ESTADO:</span><span>PAGO APROBADO EN LÍNEA</span></div>
        `;
      }

      return `
        <div class="receipt-paper" id="ticketPrintArea">
          <!-- CABECERA DECORATIVA DE MARCA -->
          <div class="ticket-header-brand">
            <svg class="ticket-logo-icon" viewBox="0 0 250 200" fill="none">
              <path d="M 96,60 C 96,24 113,18 126,18 C 139,18 156,24 156,60" fill="none" stroke="#0B1B3D" stroke-width="7" stroke-linecap="round" />
              <path d="M 104,60 C 104,30 116,24 126,24 C 136,24 148,30 148,60" fill="none" stroke="#0B1B3D" stroke-width="7" stroke-linecap="round" />
              <path d="M 88,60 L 116,65 L 108,154 L 72,142 Z" fill="#07142A" stroke="#1d3568" stroke-width="1.5" />
              <path d="M 116,65 L 182,75 L 198,159 C 166,152 130,148 108,154 Z" fill="#0B1B3D" stroke="#1d3568" stroke-width="1.5" />
              <path d="M 88,60 L 116,65 L 182,75" fill="none" stroke="#C58F38" stroke-width="2.5" stroke-linecap="round" />
              <path d="M 56,165 C 75,138 106,106 142,90 C 172,78 200,74 224,76 C 194,84 162,96 136,111 C 100,133 73,161 56,165 Z" fill="#C58F38" />
              <ellipse cx="224" cy="84" rx="35" ry="15" transform="rotate(-28, 224, 84)" fill="none" stroke="#C58F38" stroke-width="4.5" stroke-dasharray="115, 24" stroke-linecap="round" />
              <path d="M 224,44 Q 224,82 260,82 Q 224,82 224,120 Q 224,82 188,82 Q 224,82 224,44 Z" fill="#C58F38" />
              <circle cx="224" cy="82" r="3.5" fill="#FFEBB8" />
            </svg>
            <h2 class="ticket-store-name">CALLEJÓN MÁGICO</h2>
            <div class="ticket-store-subtitle">TIENDA DEPARTAMENTAL & MAISON PRIVÉ</div>
          </div>

          <!-- DATOS FISCALES DEL EMISOR -->
          <div class="ticket-fiscal-block">
            <p class="ticket-fiscal-line bold">${emisor.razonSocial}</p>
            <p class="ticket-fiscal-line bold">R.F.C.: ${emisor.rfc}</p>
            <p class="ticket-fiscal-line">${emisor.regimenFiscal}</p>
            <p class="ticket-fiscal-line">${emisor.calleNumero}</p>
            <p class="ticket-fiscal-line">${emisor.municipioEstado}</p>
            <p class="ticket-fiscal-line">Tel / WhatsApp: ${emisor.telefono}</p>
          </div>

          <div class="ticket-divider-double"></div>

          <!-- METADATOS DEL TICKET -->
          <div class="ticket-meta-grid">
            <div class="ticket-meta-row">
              <span class="label">NO. TICKET:</span>
              <span class="val bold">${fin.ticketFolio}</span>
            </div>
            <div class="ticket-meta-row">
              <span class="label">PEDIDO EN LÍNEA:</span>
              <span class="val bold gold-text">#${order.orderNum}</span>
            </div>
            <div class="ticket-meta-row">
              <span class="label">FECHA & HORA:</span>
              <span class="val">${dateStr}</span>
            </div>
            <div class="ticket-meta-row">
              <span class="label">LUGAR EXPEDICIÓN:</span>
              <span class="val">${emisor.lugarExpedicion}</span>
            </div>
          </div>

          <div class="ticket-divider-dashed"></div>

          <!-- DATOS DEL CLIENTE / RECEPTOR -->
          <div class="ticket-client-block">
            <div class="ticket-section-title">DATOS DEL CLIENTE / ENTREGA:</div>
            <div class="ticket-meta-row"><span class="label">TITULAR:</span><span class="val bold">${recipientName.toUpperCase()}</span></div>
            <div class="ticket-meta-row"><span class="label">TELÉFONO:</span><span class="val">${recipientPhone}</span></div>
            <div class="ticket-meta-row"><span class="label">DOMICILIO:</span><span class="val">${recipientStreet}</span></div>
            <div class="ticket-meta-row"><span class="label">CIUDAD / ESTADO:</span><span class="val">${recipientCity}</span></div>
          </div>

          <div class="ticket-divider-dashed"></div>

          <!-- TABLA DE ARTÍCULOS VENDIDOS -->
          <div class="ticket-items-section">
            <div class="ticket-table-header">
              <span class="col-qty">CANT</span>
              <span class="col-desc">DESCRIPCIÓN / PRODUCTO</span>
              <span class="col-unit">P.UNIT</span>
              <span class="col-total">IMPORTE</span>
            </div>

            <div class="ticket-items-list">
              ${(fin.itemsDetailed || order.items).map((item, idx) => {
                const qty = Number(item.quantity) || 1;
                const unitPrice = Number(item.unitPrice !== undefined ? item.unitPrice : item.price) || 0;
                const lineTotal = Number(item.lineGross !== undefined ? item.lineGross : (qty * unitPrice)) || 0;
                const taxTag = item.taxType === '0' 
                  ? ' • <span style="font-weight: bold; color: #059669;">[TASA 0%]</span>' 
                  : (item.taxType === 'exento' 
                    ? ' • <span style="font-weight: bold; color: #2563eb;">[EXENTO]</span>' 
                    : '');
                return `
                  <div class="ticket-item-row">
                    <div class="ticket-item-main-line">
                      <span class="col-qty bold">${qty}</span>
                      <span class="col-desc bold">${item.name}</span>
                      <span class="col-unit">$${unitPrice.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      <span class="col-total bold">$${lineTotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    ${(item.size || item.color || taxTag) ? `
                      <div class="ticket-item-sub-specs">
                        ${item.size ? `Talla: <strong>${item.size}</strong> ` : ''}
                        ${item.color ? `• Color: <strong>${item.color}</strong> ` : ''}
                        • SKU: CLM-${(item.id || 'GEN').toUpperCase().slice(0, 10)}${taxTag}
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>

            <div class="ticket-pieces-summary">
              TOTAL DE PIEZAS VENDIDAS: <strong>${fin.totalPieces} ARTÍCULO(S)</strong>
            </div>
          </div>

          <div class="ticket-divider-dashed"></div>

          <!-- DESGLOSE FINANCIERO E IMPUESTOS OFICIALES (SAT / MXN) -->
          <div class="ticket-financials-table">
            <div class="ticket-fin-row">
              <span>SUBTOTAL BRUTO DE VENTA:</span>
              <span>$${fin.subtotalGross.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</span>
            </div>

            ${fin.discount > 0 ? `
              <div class="ticket-fin-row discount-row">
                <span>DESCUENTO DEPARTAMENTAL:</span>
                <span>- $${fin.discount.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</span>
              </div>
            ` : ''}

            <div class="ticket-fin-row highlight-iva">
              <span>I.V.A. TRASLADADO (TASA 16% FISCAL):</span>
              <span><strong>$${fin.iva16.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</strong></span>
            </div>

            <div class="ticket-divider-solid"></div>

            <div class="ticket-fin-row total-row">
              <span class="total-label">TOTAL A PAGAR:</span>
              <span class="total-amount">$${fin.total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</span>
            </div>

            <div class="ticket-amount-words">
              (${fin.totalWords})
            </div>
          </div>

          <div class="ticket-divider-dashed"></div>

          <!-- FORMA DE PAGO Y PUNTOS MÁGICOS -->
          <div class="ticket-payment-section">
            <div class="ticket-section-title">FORMA DE PAGO & APROBACIÓN:</div>
            <div class="ticket-row-detail">
              <span>MÉTODO:</span>
              <span><strong>${order.paymentMethod || 'Tarjeta Departamental Callejón Mágico'}</strong></span>
            </div>
            ${paymentDetailsHtml}

            <!-- PROGRAMA DE RECOMPENSAS PUNTOS MÁGICOS -->
            <div class="ticket-points-banner">
              <div class="points-badge-title">✨ PROGRAMA PRIVÉ DE PUNTOS MÁGICOS ✨</div>
              <div class="points-row">
                <span>Puntos acumulados en esta compra:</span>
                <span class="bold gold-text">+${order.pointsEarned || 0} pts</span>
              </div>
              <div class="points-row">
                <span>Cashback departamental acreditado:</span>
                <span>5% en monedero digital</span>
              </div>
            </div>
          </div>

          <div class="ticket-divider-dashed"></div>

          <!-- DATOS DE ENVÍO Y RASTREO -->
          <div class="ticket-shipping-section">
            <div class="ticket-section-title">LOGÍSTICA & RASTREO EN VIVO:</div>
            <div class="ticket-row-detail"><span>PAQUETERÍA:</span><span>${order.carrier || 'Estafeta Express'}</span></div>
            <div class="ticket-row-detail"><span>GUÍA OFICIAL:</span><span><strong>${order.trackingNumber || 'EST-MX-849201948'}</strong></span></div>
            <div class="ticket-row-detail"><span>TIEMPO DE ENTREGA:</span><span>48 a 72 hrs hábiles • Empaque Boutique</span></div>
          </div>

          <div class="ticket-divider-dashed"></div>

          <!-- CÓDIGO DE BARRAS DEL TICKET -->
          <div class="ticket-barcode-wrap">
            ${generateBarcodeSvg(order.orderNum || 'CLM-784210')}
          </div>

          <!-- POLÍTICAS DE GARANTÍA Y MENSAJE DE DESPEDIDA -->
          <div class="ticket-legal-policies">
            <p class="bold">¡GRACIAS POR TU COMPRA EN CALLEJÓN MÁGICO!</p>
            <p>Este comprobante oficial ampara la garantía departamental de 1 año y asegura el derecho a cambio o devolución durante 30 días naturales con el empaque original.</p>
            <p class="ticket-bottom-stamp">*** COMPROBANTE OFICIAL DE VENTA ***</p>
          </div>

          <div class="receipt-zigzag-bottom"></div>
        </div>
      `;
    },

    /**
     * Genera versión de texto plano (.txt) para descargar o enviar por correo
     */
    generateTextReceipt(order) {
      const fin = this.calculateFinancials(order);
      const emisor = FISCAL_EMISOR;
      const border = '='.repeat(48);
      const line = '-'.repeat(48);

      let txt = '';
      txt += `${border}\n`;
      txt += `          ${emisor.razonSocial}\n`;
      txt += `            ${emisor.nombreComercial}\n`;
      txt += `               R.F.C.: ${emisor.rfc}\n`;
      txt += `       ${emisor.regimenFiscal}\n`;
      txt += `     ${emisor.calleNumero}\n`;
      txt += `   ${emisor.municipioEstado}\n`;
      txt += `   Tel / WhatsApp: ${emisor.telefono}\n`;
      txt += `${border}\n\n`;

      txt += `FOLIO DE TICKET:    ${fin.ticketFolio}\n`;
      txt += `ORDEN DE COMPRA:    #${order.orderNum}\n`;
      txt += `FECHA Y HORA:       ${order.date || new Date().toLocaleString('es-MX')}\n`;
      txt += `LUGAR EXPEDICIÓN:   ${emisor.lugarExpedicion}\n`;
      txt += `${line}\n`;
      txt += `DATOS DEL CLIENTE / ENTREGA:\n`;
      txt += `CLIENTE:            ${(order.recipient?.name || 'Cliente Callejón Mágico').toUpperCase()}\n`;
      txt += `TELÉFONO:           ${order.recipient?.phone || 'No especificado'}\n`;
      txt += `DIRECCIÓN ENTREGA:  ${order.recipient?.street || ''}, ${order.recipient?.city || ''}\n`;
      txt += `${line}\n\n`;

      txt += `CANT  DESCRIPCIÓN                      P.UNIT     IMPORTE\n`;
      txt += `${line}\n`;
      order.items.forEach(item => {
        const qty = Number(item.quantity) || 1;
        const unit = Number(item.price) || 0;
        const totalLine = qty * unit;
        const nameClean = item.name.length > 28 ? item.name.slice(0, 25) + '...' : item.name.padEnd(28);
        txt += `${String(qty).padEnd(5)} ${nameClean} $${unit.toFixed(2).padStart(8)} $${totalLine.toFixed(2).padStart(9)}\n`;
        if (item.size || item.color) {
          txt += `      [${item.size ? 'Talla: ' + item.size : ''} ${item.color ? 'Col: ' + item.color : ''}]\n`;
        }
      });
      txt += `${line}\n`;
      txt += `TOTAL PIEZAS VENDIDAS: ${fin.totalPieces} PIEZA(S)\n`;
      txt += `${line}\n\n`;

      txt += `SUBTOTAL BRUTO DE VENTA:        $${fin.subtotalGross.toFixed(2).padStart(12)} MXN\n`;
      if (fin.discount > 0) {
        txt += `DESCUENTO DEPARTAMENTAL:       -$${fin.discount.toFixed(2).padStart(12)} MXN\n`;
      }
      txt += `I.V.A. TRASLADADO (TASA 16%):   $${fin.iva16.toFixed(2).padStart(12)} MXN\n`;
      txt += `${line}\n`;
      txt += `TOTAL A PAGAR:                  $${fin.total.toFixed(2).padStart(12)} MXN\n`;
      txt += `${border}\n`;
      txt += `(${fin.totalWords})\n\n`;

      txt += `FORMA DE PAGO:      ${order.paymentMethod}\n`;
      if (order.msi && order.msi > 1) {
        txt += `FINANCIAMIENTO:     ${order.msi} MSI de $${(fin.total / order.msi).toFixed(2)}/mes\n`;
      }
      txt += `PUNTOS MÁGICOS:     +${order.pointsEarned || 0} pts acumulados\n`;
      txt += `GUÍA DE RASTREO:    ${order.carrier || 'Estafeta'}: ${order.trackingNumber || ''}\n`;
      txt += `${line}\n\n`;
      txt += `      ¡GRACIAS POR SU COMPRA EN CALLEJÓN MÁGICO!\n`;
      txt += `  30 DÍAS PARA CAMBIOS O DEVOLUCIONES CON ESTE TICKET\n`;
      txt += `${border}\n`;

      return txt;
    },

    /**
     * Genera el texto del ticket formateado especialmente para WhatsApp
     */
    generateWhatsAppMessage(order, customPhone = null) {
      const fin = this.calculateFinancials(order);
      const recipientName = order.recipient?.name || 'CLIENTE FRECUENTE';
      const phone = customPhone || order.recipient?.phone || '962 401 4408';
      const street = order.recipient?.street || 'Entrega en Domicilio';
      const city = order.recipient?.city || 'Tapachula, Chiapas';
      const date = order.date || new Date().toLocaleString('es-MX', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      let itemsText = (fin.itemsDetailed || order.items || []).map(item => {
        const qty = Number(item.quantity) || 1;
        const unit = Number(item.unitPrice !== undefined ? item.unitPrice : item.price) || 0;
        const lineTotal = Number(item.lineGross !== undefined ? item.lineGross : (qty * unit)) || 0;
        const specs = (item.size || item.color) ? ` _(${[item.size, item.color].filter(Boolean).join(' • ')})_` : '';
        return `• *${qty}x* ${item.name}${specs}\n   Unitario: $${unit.toLocaleString('es-MX', { minimumFractionDigits: 2 })} ➔ Importe: *$${lineTotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN*`;
      }).join('\n\n');

      let discountText = fin.discount > 0 
        ? `\n*DESCUENTO DEPARTAMENTAL:* -$${fin.discount.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN` 
        : '';

      return (
`🎩 *CALLEJÓN MÁGICO — COMPROBANTE OFICIAL* ✨
_Tienda Departamental & Maison Privé_
══════════════════════════════
📦 *PEDIDO EN LÍNEA:* #${order.orderNum}
🧾 *TICKET NO.:* ${fin.ticketFolio}
📅 *FECHA:* ${date}

👤 *CLIENTE:* ${recipientName.toUpperCase()}
📞 *TELÉFONO:* ${phone}
📍 *ENTREGA:* ${street}, ${city}

🛍️ *ARTÍCULOS ADQUIRIDOS:*
${itemsText}

──────────────────────────────
*SUBTOTAL BRUTO DE VENTA:* $${fin.subtotalGross.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN${discountText}
*I.V.A. TRASLADADO (16%):* $${fin.iva16.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
*TOTAL A PAGAR:* *$${fin.total.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN*
_(${fin.totalWords})_
══════════════════════════════

💳 *FORMA DE PAGO:* ${order.paymentMethod || 'Tarjeta Departamental Callejón Mágico'}
${order.msi && order.msi > 1 ? `🎉 *FINANCIAMIENTO:* ${order.msi} MSI de $${(fin.total / order.msi).toLocaleString('es-MX', { minimumFractionDigits: 2 })}/mes\n` : ''}✨ *PUNTOS MÁGICOS:* +${order.pointsEarned || 0} pts
🚚 *GUÍA DE RASTREO:* ${order.trackingNumber || 'EST-MX-849201948'} (${order.carrier || 'Estafeta Express'})

¡Muchas gracias por tu compra en Callejón Mágico! 🎩✨
_Conserva este comprobante oficial para cualquier consulta o garantía._`
      );
    }
  };

  const TicketUI = {
    currentOrder: null,

    init() {
      this.injectModal();
      this.bindEvents();
    },

    injectModal() {
      if (document.getElementById('ticketModal')) return;

      const modalHtml = `
        <div class="modal-window ticket-modal-window" id="ticketModal" role="dialog" aria-modal="true" aria-label="Ticket de Compra">
          <button class="modal-close-btn" id="btnCloseTicketModal" aria-label="Cerrar ticket">&times;</button>
          
          <!-- BARRA SUPERIOR DE ACCIONES -->
          <div class="ticket-action-bar">
            <div class="ticket-title-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Comprobante Departamental Oficial</span>
            </div>

            <div class="ticket-buttons-group">
              <button type="button" class="btn-ticket-print" id="btnPrintTicket">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                <span>Imprimir / Guardar PDF</span>
              </button>

              <button type="button" class="btn-ticket-email" id="btnEmailTicket" title="Enviar comprobante a tu correo vía EmailJS">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span id="btnEmailTicketText">Enviar a mi Correo</span>
              </button>

              <button type="button" class="btn-ticket-whatsapp" id="btnWhatsAppTicket" title="Enviar comprobante a WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.34 7.35 9.04 7.42 8.78 7.7C8.52 7.97 7.81 8.63 7.81 10C7.81 11.37 8.81 12.69 8.94 12.87C9.08 13.06 11.03 16.06 14 17.35C14.71 17.65 15.26 17.84 15.7 17.98C16.41 18.2 17.06 18.17 17.57 18.1C18.14 18.01 19.33 17.38 19.58 16.68C19.83 15.98 19.83 15.38 19.76 15.26C19.69 15.13 19.5 15.06 19.22 14.92C18.94 14.78 17.57 14.1 17.31 14.01C17.06 13.92 16.87 13.87 16.68 14.15C16.5 14.43 15.96 15.06 15.8 15.25C15.64 15.43 15.49 15.46 15.21 15.32C14.93 15.18 13.75 14.79 12.35 13.54C11.26 12.57 10.53 11.37 10.31 11C10.1 10.63 10.29 10.43 10.43 10.29C10.56 10.16 10.71 9.96 10.86 9.79C11 9.61 11.06 9.48 11.15 9.29C11.25 9.11 11.19 8.94 11.12 8.81C11.06 8.67 10.5 7.31 10.28 6.78C10.06 6.25 9.83 6.32 9.67 6.32C9.53 6.32 9.34 6.31 9.53 7.35Z"/>
                </svg>
                <span>WhatsApp</span>
              </button>

              <button type="button" class="btn-ticket-download" id="btnDownloadTicket">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Descargar TXT</span>
              </button>
            </div>
          </div>

          <!-- CONTENIDO DEL TICKET RENDERIZADO -->
          <div class="ticket-scroll-viewport" id="ticketModalContent">
            <!-- Inyectado dinámicamente -->
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    bindEvents() {
      // Cerrar modal con botón cruz
      document.getElementById('btnCloseTicketModal')?.addEventListener('click', () => {
        this.close();
      });

      // Imprimir ticket
      document.getElementById('btnPrintTicket')?.addEventListener('click', () => {
        this.print();
      });

      // Enviar ticket por correo vía EmailJS
      document.getElementById('btnEmailTicket')?.addEventListener('click', () => {
        this.sendEmail();
      });

      // Enviar ticket a WhatsApp
      document.getElementById('btnWhatsAppTicket')?.addEventListener('click', () => {
        this.sendWhatsApp();
      });

      // Descargar ticket en texto plano
      document.getElementById('btnDownloadTicket')?.addEventListener('click', () => {
        this.downloadTxt();
      });

      // Cerrar al hacer clic en el backdrop
      document.getElementById('modalBackdrop')?.addEventListener('click', () => {
        this.close();
      });

      // Cerrar con tecla Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.close();
        }
      });
    },

    open(orderOrNum) {
      this.injectModal();
      const order = resolveOrderData(orderOrNum);
      this.currentOrder = order;

      const container = document.getElementById('ticketModalContent');
      if (container) {
        container.innerHTML = TicketEngine.renderTicketHtml(order);
      }

      const modal = document.getElementById('ticketModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) {
        modal.classList.add('active');
        if (backdrop) backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    close() {
      const modal = document.getElementById('ticketModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) modal.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    },

    print() {
      const ticketEl = document.getElementById('ticketPrintArea');
      if (!ticketEl) {
        window.print();
        return;
      }

      // Crear un iframe temporal aislado para imprimir ÚNICAMENTE el ticket
      // Esto evita que el navegador cargue el resto de la página y genere 59 hojas en blanco
      let iframe = document.getElementById('ticketPrintIframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'ticketPrintIframe';
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        document.body.appendChild(iframe);
      }

      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Ticket_CallejonMagico_${this.currentOrder?.orderNum || 'Oficial'}</title>
          <style>
            @page {
              size: auto;
              margin: 4mm 6mm;
            }
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              font-family: 'Courier New', Courier, 'Lucida Console', monospace;
              font-size: 11px;
              color: #000000;
              background: #ffffff;
              line-height: 1.35;
              padding: 6px;
              display: flex;
              justify-content: center;
            }
            .receipt-paper {
              width: 100%;
              max-width: 360px;
              margin: 0 auto;
              background: #ffffff;
            }
            .ticket-header-brand {
              text-align: center;
              margin-bottom: 6px;
            }
            .ticket-logo-icon {
              width: 44px;
              height: 35px;
              margin: 0 auto 3px;
              display: block;
            }
            .ticket-store-name {
              font-family: Georgia, 'Playfair Display', serif;
              font-size: 16px;
              font-weight: 800;
              letter-spacing: 0.05em;
              margin-bottom: 2px;
            }
            .ticket-store-subtitle {
              font-size: 8.5px;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
            }
            .ticket-fiscal-block {
              text-align: center;
              font-size: 9.5px;
              line-height: 1.3;
              margin-bottom: 6px;
            }
            .ticket-fiscal-line.bold {
              font-weight: bold;
            }
            .ticket-divider-double {
              border-top: 2px dashed #000000;
              margin: 6px 0;
            }
            .ticket-divider-dashed {
              border-top: 1px dashed #444444;
              margin: 5px 0;
            }
            .ticket-divider-solid {
              border-top: 1.5px solid #000000;
              margin: 5px 0;
            }
            .ticket-section-title {
              font-size: 9.5px;
              font-weight: bold;
              text-transform: uppercase;
              margin-bottom: 3px;
            }
            .ticket-meta-grid, .ticket-client-block, .ticket-payment-section, .ticket-shipping-section {
              font-size: 9.5px;
            }
            .ticket-meta-row, .ticket-row-detail {
              display: flex;
              justify-content: space-between;
              margin-bottom: 2px;
            }
            .ticket-meta-row .val, .ticket-row-detail span:last-child {
              text-align: right;
            }
            .bold {
              font-weight: bold;
            }
            .gold-text {
              font-weight: bold;
            }
            /* Tabla de artículos */
            .ticket-table-header {
              display: grid;
              grid-template-columns: 28px 1fr 65px 75px;
              font-size: 9.5px;
              font-weight: bold;
              border-bottom: 1px solid #000000;
              padding-bottom: 3px;
              margin-bottom: 4px;
            }
            .ticket-table-header .col-unit, .ticket-table-header .col-total {
              text-align: right;
            }
            .ticket-item-row {
              margin-bottom: 4px;
              font-size: 9.5px;
            }
            .ticket-item-main-line {
              display: grid;
              grid-template-columns: 28px 1fr 65px 75px;
              gap: 2px;
              align-items: baseline;
            }
            .ticket-item-main-line .col-unit, .ticket-item-main-line .col-total {
              text-align: right;
            }
            .ticket-item-sub-specs {
              font-size: 8.5px;
              padding-left: 28px;
              margin-top: 1px;
            }
            .ticket-pieces-summary {
              font-size: 9.5px;
              text-align: right;
              margin-top: 4px;
              font-weight: bold;
            }
            /* Desglose Financiero */
            .ticket-financials-table {
              font-size: 10px;
            }
            .ticket-fin-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 2px;
            }
            .ticket-fin-row.discount-row {
              font-weight: bold;
            }
            .ticket-fin-row.highlight-iva {
              font-weight: bold;
              border: 1px solid #000000;
              padding: 2px 4px;
            }
            .ticket-fin-row.total-row {
              font-size: 12.5px;
              font-weight: bold;
              margin-top: 4px;
            }
            .ticket-amount-words {
              font-size: 8.5px;
              font-weight: bold;
              text-align: right;
              margin-top: 3px;
              font-style: italic;
            }
            /* Banner Puntos Mágicos */
            .ticket-points-banner {
              border: 1px dashed #000000;
              padding: 4px 6px;
              margin-top: 4px;
              font-size: 9px;
            }
            .points-badge-title {
              font-weight: bold;
              text-align: center;
              margin-bottom: 2px;
            }
            .points-row {
              display: flex;
              justify-content: space-between;
            }
            .ticket-barcode-wrap {
              margin: 6px 0 4px;
              text-align: center;
            }
            .ticket-barcode-svg {
              max-width: 230px;
              height: 46px;
              margin: 0 auto;
            }
            .ticket-legal-policies {
              text-align: center;
              font-size: 8px;
              line-height: 1.3;
              margin-top: 6px;
            }
            .ticket-legal-policies .bold {
              font-weight: bold;
              margin-bottom: 2px;
            }
            .ticket-bottom-stamp {
              font-weight: bold;
              letter-spacing: 0.15em;
              margin-top: 4px;
            }
            .receipt-zigzag-bottom {
              display: none;
            }
          </style>
        </head>
        <body>
          <div class="receipt-paper">
            ${ticketEl.innerHTML}
          </div>
        </body>
        </html>
      `);
      doc.close();

      setTimeout(() => {
        try {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        } catch (e) {
          window.print();
        }
      }, 300);
    },

    downloadTxt() {
      if (!this.currentOrder) return;
      const textContent = TicketEngine.generateTextReceipt(this.currentOrder);
      const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Ticket_CallejonMagico_${this.currentOrder.orderNum}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },

    /**
     * Modal elegante y personalizado para solicitar el correo electrónico
     */
    promptEmail(defaultValue = '') {
      return new Promise((resolve) => {
        let existing = document.getElementById('ticketPromptOverlay');
        if (existing) existing.remove();

        const html = `
          <div class="ticket-feedback-overlay active" id="ticketPromptOverlay" role="dialog" aria-modal="true">
            <div class="ticket-feedback-card">
              <div class="ticket-feedback-icon prompt">✉️</div>
              <h3 class="ticket-feedback-title">Enviar Ticket a tu Correo</h3>
              <p class="ticket-feedback-text">Ingresa tu dirección de correo electrónico para recibir el comprobante oficial con desglose fiscal:</p>
              
              <div class="ticket-feedback-prompt-input-group">
                <input type="email" id="ticketPromptEmailInput" class="ticket-feedback-prompt-input" placeholder="ejemplo@correo.com" value="${defaultValue || ''}" autocomplete="email">
                <span class="ticket-feedback-error-msg" id="ticketPromptEmailError" style="display: none;">Por favor ingresa un correo electrónico válido.</span>
              </div>

              <div class="ticket-feedback-actions">
                <button type="button" class="btn-ticket-modal-secondary" id="btnCancelEmailPrompt">Cancelar</button>
                <button type="button" class="btn-ticket-modal-primary" id="btnConfirmEmailPrompt">
                  <span>Enviar Comprobante</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </button>
              </div>
            </div>
          </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);

        const overlay = document.getElementById('ticketPromptOverlay');
        const input = document.getElementById('ticketPromptEmailInput');
        const errorMsg = document.getElementById('ticketPromptEmailError');
        const btnCancel = document.getElementById('btnCancelEmailPrompt');
        const btnConfirm = document.getElementById('btnConfirmEmailPrompt');

        setTimeout(() => input?.focus(), 100);

        function cleanup(result) {
          overlay.classList.remove('active');
          setTimeout(() => overlay.remove(), 250);
          resolve(result);
        }

        function validateAndSubmit() {
          const val = (input?.value || '').trim();
          if (!val || !val.includes('@') || !val.includes('.')) {
            input.classList.add('error');
            if (errorMsg) errorMsg.style.display = 'block';
            input.focus();
            return;
          }
          cleanup(val);
        }

        btnConfirm?.addEventListener('click', validateAndSubmit);
        btnCancel?.addEventListener('click', () => cleanup(null));
        input?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') validateAndSubmit();
          if (e.key === 'Escape') cleanup(null);
        });
        overlay?.addEventListener('click', (e) => {
          if (e.target === overlay) cleanup(null);
        });
      });
    },

    /**
     * Modal elegante y personalizado de confirmación de envío exitoso
     */
    showSuccessModal(orderNum, email) {
      let existing = document.getElementById('ticketSuccessOverlay');
      if (existing) existing.remove();

      const html = `
        <div class="ticket-feedback-overlay active" id="ticketSuccessOverlay" role="dialog" aria-modal="true">
          <div class="ticket-feedback-card">
            <div class="ticket-feedback-icon success">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 class="ticket-feedback-title">¡Ticket Enviado con Éxito!</h3>
            <p class="ticket-feedback-text">
              El comprobante departamental oficial de la orden <strong style="color: #0b1b3d;">#${orderNum}</strong> ha sido enviado a tu correo:
            </p>
            
            <div class="ticket-feedback-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c58f38" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>${email}</span>
            </div>

            <p style="font-size: 0.82rem; color: #94a3b8; margin: 0 0 1.5rem 0; line-height: 1.4;">
              Revisa tu bandeja de entrada o carpeta de promociones.
            </p>

            <div class="ticket-feedback-actions">
              <button type="button" class="btn-ticket-modal-primary" id="btnCloseSuccessPrompt" style="width: 100%;">
                <span>Aceptar</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', html);

      const overlay = document.getElementById('ticketSuccessOverlay');
      const btnClose = document.getElementById('btnCloseSuccessPrompt');

      function close() {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 250);
      }

      btnClose?.addEventListener('click', close);
      overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) close();
      });

      if (window.DavantiApp && typeof window.DavantiApp.showToast === 'function') {
        window.DavantiApp.showToast(`✨ Ticket oficial enviado a ${email}`);
      }
    },

    /**
     * Modal elegante y personalizado para errores
     */
    showErrorModal(message) {
      let existing = document.getElementById('ticketErrorOverlay');
      if (existing) existing.remove();

      const html = `
        <div class="ticket-feedback-overlay active" id="ticketErrorOverlay" role="dialog" aria-modal="true">
          <div class="ticket-feedback-card">
            <div class="ticket-feedback-icon error">⚠️</div>
            <h3 class="ticket-feedback-title">Atención</h3>
            <p class="ticket-feedback-text">${message}</p>

            <div class="ticket-feedback-actions">
              <button type="button" class="btn-ticket-modal-primary" id="btnCloseErrorPrompt" style="width: 100%;">
                <span>Entendido</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', html);

      const overlay = document.getElementById('ticketErrorOverlay');
      const btnClose = document.getElementById('btnCloseErrorPrompt');

      function close() {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 250);
      }

      btnClose?.addEventListener('click', close);
      overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) close();
      });
    },

    /**
     * Envía el ticket de compra en línea por correo electrónico usando EmailJS
     */
    async sendEmail(customEmail = null, isAuto = false) {
      if (!this.currentOrder) return;
      const order = this.currentOrder;

      // 1. Determinar el correo de destino
      let targetEmail = customEmail;
      if (!targetEmail) {
        try {
          const userRaw = localStorage.getItem('davanti_current_user');
          if (userRaw) {
            const u = JSON.parse(userRaw);
            targetEmail = u.email;
          }
        } catch(e){}
      }

      if (!targetEmail && order.recipient && order.recipient.email) {
        targetEmail = order.recipient.email;
      }

      // Si aún no tenemos correo y no es envío automático, pedirlo con el modal personalizado
      if (!targetEmail) {
        if (isAuto) return; // Si es auto y no hay correo, no interrumpir con prompt
        targetEmail = await this.promptEmail();
      }

      if (!targetEmail) {
        return; // Usuario canceló
      }

      const btnText = document.getElementById('btnEmailTicketText');
      const btnEmail = document.getElementById('btnEmailTicket');
      if (btnText) btnText.textContent = 'Enviando...';
      if (btnEmail) btnEmail.classList.add('sending');

      try {
        await ensureEmailJSLoaded();

        const fin = TicketEngine.calculateFinancials(order);

        // Resumen limpio de artículos comprados (formato texto y HTML)
        const itemsSummary = (order.items || []).map(item => {
          const qty = Number(item.quantity) || 1;
          const price = Number(item.price) || 0;
          const subtotal = (qty * price).toFixed(2);
          const specs = (item.size || item.color) ? ` [${item.size ? 'Talla: ' + item.size : ''} ${item.color ? 'Col: ' + item.color : ''}]` : '';
          return `${qty}x ${item.name}${specs}\n   Unitario: $${price.toFixed(2)}  Importe: $${subtotal} MXN`;
        }).join('\n\n');

        const itemsHtml = `
          <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-size: 13px; margin: 8px 0;">
            <thead>
              <tr style="background: #f1f5f9; text-align: left; border-bottom: 2px solid #cbd5e1; font-size: 11px; text-transform: uppercase; color: #475569;">
                <th style="padding: 8px 6px;">Artículo</th>
                <th style="padding: 8px 6px; text-align: right;">Unitario</th>
                <th style="padding: 8px 6px; text-align: right;">Importe</th>
              </tr>
            </thead>
            <tbody>
              ${(order.items || []).map(item => {
                const qty = Number(item.quantity) || 1;
                const price = Number(item.price) || 0;
                const subtotal = (qty * price).toFixed(2);
                const specs = (item.size || item.color) ? `<br><small style="color: #64748b;">${item.size ? 'Talla: ' + item.size : ''} ${item.color ? 'Col: ' + item.color : ''}</small>` : '';
                return `
                  <tr>
                    <td style="padding: 8px 6px; border-bottom: 1px solid #e2e8f0;"><strong>${qty}x</strong> ${item.name}${specs}</td>
                    <td style="padding: 8px 6px; border-bottom: 1px solid #e2e8f0; text-align: right;">$${price.toFixed(2)}</td>
                    <td style="padding: 8px 6px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 700; color: #0b1b3d;">$${subtotal}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `;

        const isPickup = (order.recipient?.street || '').includes('Plantel');
        const deliveryInfo = isPickup
          ? `Retiro en Sucursal Click & Collect: ${order.recipient?.street || 'Plantel Centro'}`
          : `Envío a domicilio: ${order.recipient?.street || ''}, ${order.recipient?.city || 'Tapachula, Chiapas'}`;

        const templateParams = {
          to_name: order.recipient?.name || 'Cliente Callejón Mágico',
          to_email: targetEmail.trim(),
          order_num: order.orderNum,
          order_date: order.date || new Date().toLocaleString('es-MX'),
          delivery_info: deliveryInfo,
          items_summary: itemsSummary,
          items_html: itemsHtml,
          items: itemsSummary,
          articulos: itemsSummary,
          productos: itemsSummary,
          message: itemsSummary,
          orders: itemsSummary,
          subtotal_bruto: fin.subtotalGross.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          subtotal: fin.subtotalGross.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          descuento: fin.discount.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          base_gravable: fin.subtotalGross.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          iva: fin.iva16.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          total: fin.total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          total_words: fin.totalWords,
          points_earned: order.pointsEarned || Math.round(fin.total * 0.05),
          puntos: order.pointsEarned || Math.round(fin.total * 0.05)
        };

        await window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams);

        if (btnText) btnText.textContent = '✅ ¡Enviado!';
        if (btnEmail) btnEmail.classList.remove('sending');

        // Notificación en pantalla
        if (isAuto) {
          if (window.DavantiApp && typeof window.DavantiApp.showToast === 'function') {
            window.DavantiApp.showToast(`✉️ Ticket enviado automáticamente a ${targetEmail.trim()}`);
          }
          const emailBadge = document.getElementById('checkoutAutoEmailStatus');
          if (emailBadge) {
            emailBadge.innerHTML = `✅ ¡Enviado con éxito a <strong>${targetEmail.trim()}</strong>!`;
            emailBadge.style.color = '#059669';
          }
        } else {
          // Mostrar el modal elegante con la estética de Callejón Mágico
          this.showSuccessModal(order.orderNum, targetEmail.trim());
        }

        setTimeout(() => {
          if (btnText) btnText.textContent = 'Enviar a mi Correo';
        }, 4000);

      } catch (err) {
        console.error('Error al enviar ticket por EmailJS:', err);
        if (btnText) btnText.textContent = 'Reintentar Envío';
        if (btnEmail) btnEmail.classList.remove('sending');
        if (!isAuto) {
          this.showErrorModal('Hubo un inconveniente al enviar el correo. Por favor verifica tu conexión o que los identificadores de EmailJS estén activos.');
        }
      }
    },

    sendEmailFromOrder(orderOrNum, customEmail = null, isAuto = false) {
      const order = resolveOrderData(orderOrNum);
      if (!order) return;
      this.currentOrder = order;
      return this.sendEmail(customEmail, isAuto);
    },

    /**
     * Formatea cualquier teléfono a estándar internacional de WhatsApp para México
     */
    formatPhoneForWhatsApp(phone) {
      if (!phone) return '5219624014408';
      let digits = String(phone).replace(/\D/g, '');
      if (digits.length === 10) {
        return '521' + digits;
      }
      if (digits.length === 12 && digits.startsWith('52')) {
        return '521' + digits.slice(2);
      }
      if (digits.length === 13 && digits.startsWith('521')) {
        return digits;
      }
      return digits.length > 0 ? digits : '5219624014408';
    },

    /**
     * Abre y envía el ticket oficial formateado por WhatsApp
     */
    sendWhatsApp(customPhone = null) {
      if (!this.currentOrder) return;
      const order = this.currentOrder;
      const targetPhone = customPhone || order.recipient?.phone || '962 401 4408';
      const cleanPhone = this.formatPhoneForWhatsApp(targetPhone);
      const text = TicketEngine.generateWhatsAppMessage(order, targetPhone);
      const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;

      if (window.DavantiApp && typeof window.DavantiApp.showToast === 'function') {
        window.DavantiApp.showToast(`📲 Abriendo WhatsApp (${targetPhone}) con el ticket oficial...`);
      }

      const win = window.open(url, '_blank');
      if (!win) {
        location.href = url;
      }
      return url;
    },

    sendWhatsAppFromOrder(orderOrNum, customPhone = null) {
      const order = resolveOrderData(orderOrNum);
      if (!order) return;
      this.currentOrder = order;
      return this.sendWhatsApp(customPhone || order.recipient?.phone);
    }
  };

  // Exponer API global
  window.CallejonTicket = {
    open: TicketUI.open.bind(TicketUI),
    close: TicketUI.close.bind(TicketUI),
    print: TicketUI.print.bind(TicketUI),
    sendEmail: TicketUI.sendEmail.bind(TicketUI),
    sendEmailFromOrder: TicketUI.sendEmailFromOrder.bind(TicketUI),
    sendWhatsApp: TicketUI.sendWhatsApp.bind(TicketUI),
    sendWhatsAppFromOrder: TicketUI.sendWhatsAppFromOrder.bind(TicketUI),
    downloadTxt: TicketUI.downloadTxt.bind(TicketUI),
    calculateFinancials: TicketEngine.calculateFinancials.bind(TicketEngine),
    generateTextReceipt: TicketEngine.generateTextReceipt.bind(TicketEngine),
    generateWhatsAppMessage: TicketEngine.generateWhatsAppMessage.bind(TicketEngine)
  };

  // Auto inicializar al cargar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TicketUI.init());
  } else {
    TicketUI.init();
  }
})();

