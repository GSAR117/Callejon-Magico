/**
 * CALLEJÓN MÁGICO - MÓDULO DE INFORMACIÓN Y MODALES CORPORATIVOS
 * Controla: Atención Concierge, Nuestra Historia, Términos y Condiciones, Aviso de Privacidad y Envíos.
 */
(function() {
  'use strict';

  const InfoModals = {
    activeModalId: null,

    init() {
      this.bindTriggers();
    },

    bindTriggers() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a, button');
        if (!link) return;

        const href = (link.getAttribute('href') || '').toLowerCase();
        const isConcierge = link.classList.contains('open-concierge-modal-btn') || href === '#contacto' || href.endsWith('/#contacto') || href.endsWith('index.html#contacto');
        const isHistoria = link.classList.contains('open-historia-modal-btn') || href === '#historia' || href.endsWith('/#historia') || href.endsWith('index.html#historia');
        const isTerminos = link.classList.contains('open-terminos-modal-btn') || href === '#terminos' || href.endsWith('/#terminos') || href.endsWith('index.html#terminos');
        const isPrivacidad = link.classList.contains('open-privacidad-modal-btn') || href === '#privacidad' || href.endsWith('/#privacidad') || href.endsWith('index.html#privacidad');
        const isEnvios = link.classList.contains('open-envios-modal-btn') || href === '#envios' || href.endsWith('/#envios') || href.endsWith('index.html#envios');

        if (isConcierge) {
          e.preventDefault();
          this.openConcierge();
        } else if (isHistoria) {
          e.preventDefault();
          this.openHistoria();
        } else if (isTerminos) {
          e.preventDefault();
          this.openTerminos();
        } else if (isPrivacidad) {
          e.preventDefault();
          this.openPrivacidad();
        } else if (isEnvios) {
          e.preventDefault();
          this.openEnvios();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.activeModalId) {
          this.close();
        }
      });
    },

    getBackdrop() {
      let bd = document.getElementById('infoModalBackdrop');
      if (!bd) {
        bd = document.createElement('div');
        bd.id = 'infoModalBackdrop';
        bd.className = 'modal-backdrop';
        bd.addEventListener('click', () => this.close());
        document.body.appendChild(bd);
      }
      return bd;
    },

    openModal(modalId, title, badge, contentHtml) {
      this.close(false);

      let modalEl = document.getElementById(modalId);
      if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.id = modalId;
        modalEl.className = 'modal-window info-corporate-modal';
        document.body.appendChild(modalEl);
      }

      modalEl.innerHTML = `
        <button class="modal-close-btn" aria-label="Cerrar">&times;</button>
        <div class="info-corporate-header">
          <div class="info-corporate-badge">${badge}</div>
          <h2 class="info-corporate-title">${title}</h2>
          <div class="info-corporate-gold-line"></div>
        </div>
        <div class="info-corporate-body">
          ${contentHtml}
        </div>
        <div class="info-corporate-footer">
          <button type="button" class="btn-info-corporate-close">Entendido / Cerrar</button>
        </div>
      `;

      modalEl.querySelector('.modal-close-btn').addEventListener('click', () => this.close());
      modalEl.querySelector('.btn-info-corporate-close').addEventListener('click', () => this.close());

      const bd = this.getBackdrop();
      bd.classList.add('active');
      modalEl.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.activeModalId = modalId;
    },

    close(resetBodyOverflow = true) {
      if (this.activeModalId) {
        const modalEl = document.getElementById(this.activeModalId);
        if (modalEl) modalEl.classList.remove('active');
        this.activeModalId = null;
      }
      const bd = document.getElementById('infoModalBackdrop');
      if (bd) bd.classList.remove('active');

      if (resetBodyOverflow) {
        const otherActiveModals = document.querySelectorAll('.modal-window.active, .drawer-panel.active');
        if (otherActiveModals.length === 0) {
          document.body.style.overflow = '';
        }
      }
    },

    openConcierge() {
      const content = `
        <div class="concierge-intro-card">
          <p>Bienvenido al <strong>Servicio Concierge Callejón Mágico</strong>. Nuestro equipo de asesores boutique está a tu entera disposición para resolver consultas de catálogo, asesoría en tallas, seguimiento prioritario de pedidos y cotizaciones personalizadas.</p>
        </div>

        <div class="concierge-grid-cards">
          <div class="concierge-card highlight">
            <div class="concierge-card-icon">💬</div>
            <h4>WhatsApp Oficial Concierge</h4>
            <p>Atención directa e inmediata con un asesor boutique en tiempo real.</p>
            <div class="concierge-card-phone">962 401 4408</div>
            <a href="https://wa.me/529624014408?text=Hola%20Callej%C3%B3n%20M%C3%A1gico%2C%20quisiera%20recibir%20atenci%C3%B3n%20del%20Concierge" target="_blank" rel="noopener noreferrer" class="btn-concierge-action whatsapp">
              <span>Iniciar Chat en WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="concierge-card">
            <div class="concierge-card-icon">📞</div>
            <h4>Línea Telefónica Directa</h4>
            <p>Comunícate directamente a nuestras mesas de atención departamental.</p>
            <div class="concierge-card-phone">(962) 626-4300</div>
            <div class="concierge-schedule">🕒 Lun a Sáb: 9:00 AM – 8:00 PM<br>🕒 Dom: 10:00 AM – 6:00 PM</div>
          </div>

          <div class="concierge-card">
            <div class="concierge-card-icon">✉️</div>
            <h4>Correo Electrónico</h4>
            <p>Escríbenos para solicitudes corporativas o facturación.</p>
            <div class="concierge-card-email"><a href="mailto:gabsar1230@gmail.com" style="color: #0b1b3d; text-decoration: underline; font-weight: 700;">gabsar1230@gmail.com</a></div>
            <div class="concierge-schedule">Respuesta promedio en menos de 2 horas hábiles.</div>
          </div>

          <div class="concierge-card">
            <div class="concierge-card-icon">📍</div>
            <h4>Boutiques & Sucursales Físicas</h4>
            <p><strong>Plantel Centro:</strong> 8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente, C.P. 30700, Tapachula, Chiapas.</p>
            <p style="margin-top: 0.35rem;"><strong>Plantel Sur:</strong> 3a. Av. Sur #114, frente a la Unidad Administrativa, C.P. 30700, Tapachula, Chiapas.</p>
          </div>
        </div>

        <div class="concierge-contact-form-box">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
            <h4 style="margin: 0;">Enviar Mensaje Directo al Concierge</h4>
            <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 700; color: #16a34a; background: #dcfce7; padding: 2px 8px; border-radius: 9999px;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #16a34a;"></span>
              Conexión WhatsApp Oficial
            </span>
          </div>
          <p style="font-size: 0.8rem; color: #64748b; margin-bottom: 0.75rem; line-height: 1.4;">
            Completa tus datos y la consulta se enviará automáticamente al <strong>WhatsApp Oficial de la tienda (962 401 4408)</strong> para darte respuesta inmediata.
          </p>
          <form id="conciergeQuickForm" onsubmit="event.preventDefault(); window.CallejonInfoModals.handleConciergeForm(this);">
            <div class="form-grid" style="grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 0.65rem;">
              <input type="text" class="form-control" placeholder="Tu nombre completo *" required id="cqfName" />
              <input type="tel" class="form-control" placeholder="Tu WhatsApp o Teléfono (10 dígitos) *" required id="cqfPhone" maxlength="14" inputmode="numeric" />
            </div>
            <textarea class="form-control" rows="3" placeholder="¿En qué podemos apoyarte hoy? (Duda sobre producto, estatus de pedido, tallas, promociones...) *" required id="cqfMsg" style="margin-bottom: 0.75rem; resize: none;"></textarea>
            <button type="submit" class="btn-checkout-primary" style="height: 48px; margin: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.55rem; background: #25d366; color: #ffffff; border: none; font-weight: 800; font-size: 0.92rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35); cursor: pointer; transition: all 0.2s ease;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM17.46 16.5c-.24.67-1.39 1.24-1.92 1.28-.51.04-1.17.06-3.79-.99-2.23-.9-3.66-3.17-3.77-3.32-.11-.15-.9-1.2-1.01-1.35-.11-.15-.84-1.12-.84-2.14 0-1.02.53-1.52.72-1.72.19-.2.42-.25.56-.25.14 0 .28 0 .4.01.13.01.3.06.43.37.15.34.52 1.27.56 1.37.04.1.07.21.01.33-.06.12-.1.2-.2.31-.1.11-.2.25-.29.34-.1.1-.21.21-.09.42.12.21.53.88 1.14 1.43.79.7 1.45.92 1.66 1.02.21.1.33.09.46-.05.12-.14.53-.62.67-.83.14-.21.28-.18.47-.11.19.07 1.21.57 1.42.67.21.1.35.15.4.24.05.09.05.52-.19 1.19z"/>
              </svg>
              Enviar Mensaje al WhatsApp Oficial (962 401 4408)
            </button>
          </form>
        </div>
      `;
      this.openModal('conciergeModal', 'Atención Concierge', '🛎️ SERVICIO EXCLUSIVO DE ASISTENCIA', content);
    },

    handleConciergeForm(form) {
      const name = document.getElementById('cqfName')?.value.trim() || 'Cliente Callejón Mágico';
      const phone = document.getElementById('cqfPhone')?.value.trim() || 'No proporcionado';
      const msg = document.getElementById('cqfMsg')?.value.trim() || '';

      const waText = 
`🛎️ *SOLICITUD DE ATENCIÓN CONCIERGE - CALLEJÓN MÁGICO* 🛎️

👤 *Cliente:* ${name}
📱 *Teléfono de contacto:* ${phone}

💬 *Mensaje / Consulta:*
"${msg}"

📍 *Origen:* Portal Web Callejón Mágico (Tapachula, Chiapas)
🕒 *Fecha/Hora:* ${new Date().toLocaleDateString('es-MX')} - ${new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}`;

      const waUrl = `https://wa.me/529624014408?text=${encodeURIComponent(waText)}`;

      // Abrir enlace en WhatsApp Oficial
      window.open(waUrl, '_blank');

      form.reset();
      this.close();

      const successMsg = `📲 ¡Gracias ${name}! Tu mensaje ha sido transferido a nuestro WhatsApp Oficial (962 401 4408). Te responderemos de inmediato.`;
      if (window.CallejonApp && typeof window.CallejonApp.showToast === 'function') {
        window.CallejonApp.showToast(successMsg);
      } else {
        alert(successMsg);
      }
    },

    openHistoria() {
      const content = `
        <div class="story-chapter">
          <div class="story-chapter-number">I. EL NACIMIENTO DE UNA VISIÓN</div>
          <p><strong>Callejón Mágico</strong> nació en el corazón de <strong>Tapachula, Chiapas</strong>, con un propósito claro e inquebrantable: redefinir el concepto de tienda departamental en el sureste mexicano, fusionando la exclusividad y la sofisticación boutique con la cercanía, la calidez y el servicio esmerado que distinguen a nuestra región.</p>
          <p>Lo que inició como una cuidada selección de moda y alta relojería ha evolucionado hasta convertirse en la tienda departamental referente en moda contemporánea, vanguardia tecnológica, belleza, confort para el hogar, deportes y entretenimiento de alta gama.</p>
        </div>

        <div class="story-chapter">
          <div class="story-chapter-number">II. CURADURÍA & AUTENTICIDAD INTACTA</div>
          <p>Cada artículo exhibido en nuestras sucursales y en nuestro catálogo digital atraviesa un riguroso proceso de verificación y curaduría. Garantizamos la autenticidad al 100% de cada marca comercializada, respaldada con garantías oficiales de fabricante, empaques boutique y un compromiso total con la satisfacción de quien nos elige.</p>
        </div>

        <div class="story-chapter">
          <div class="story-chapter-number">III. NUESTRAS SUCURSALES Y VOCACIÓN DE SERVICIO</div>
          <p>Con la consolidación de nuestro <strong>Plantel Centro</strong> (8A Avenida Sur no. 54) y nuestro <strong>Plantel Sur</strong> (3a. Av. Sur #114 frente a la Unidad Administrativa), establecimos un sistema pionero de entrega <em>Click & Collect</em> en 2 horas y envíos express protegidos a todo México.</p>
          <p>Para nosotros, comprar en Callejón Mágico no es una simple transacción: es una experiencia donde la excelencia, el financiamiento a meses sin intereses y la lealtad de nuestros clientes se premian con beneficios únicos y Puntos Mágicos.</p>
        </div>

        <div class="story-pillars-grid">
          <div class="story-pillar">
            <span class="story-pillar-icon">💎</span>
            <strong>Excelencia Auténtica</strong>
            <span>Solo productos originales con garantía y procedencia transparente.</span>
          </div>
          <div class="story-pillar">
            <span class="story-pillar-icon">🤝</span>
            <strong>Cercanía Humana</strong>
            <span>Atención personalizada y asesoría experta en cada adquisición.</span>
          </div>
          <div class="story-pillar">
            <span class="story-pillar-icon">🛡️</span>
            <strong>Confianza Total</strong>
            <span>30 días para cambios y compras aseguradas con cifrado SSL.</span>
          </div>
        </div>
      `;
      this.openModal('historiaModal', 'Nuestra Historia', '🏛️ TRADICIÓN & DISTINCIÓN DEPARTAMENTAL', content);
    },

    openTerminos() {
      const content = `
        <div class="legal-clause">
          <h4>1. Disposiciones Generales</h4>
          <p>Los presentes Términos y Condiciones regulan el acceso, navegación y transacciones comerciales celebradas en la plataforma web y tiendas físicas de <strong>Callejón Mágico S.A. de C.V.</strong>, con domicilio legal en Tapachula, Chiapas, México. Al realizar un pedido, el comprador declara conocer y aceptar estas cláusulas.</p>
        </div>

        <div class="legal-clause">
          <h4>2. Precios, I.V.A. y Desglose Fiscal</h4>
          <p>Todos los precios se encuentran expresados en <strong>Pesos Mexicanos (MXN)</strong>. Conforme al régimen comercial oficial, el precio exhibido del producto corresponde al valor subtotal del bien. Al procesarse la orden, se calcula e incorpora el <strong>16% de Impuesto al Valor Agregado (I.V.A.)</strong> de manera desglosada y transparente en el ticket de compra y factura digital correspondiente.</p>
        </div>

        <div class="legal-clause">
          <h4>3. Medios de Pago y Financiamiento</h4>
          <p>Aceptamos pagos mediante:</p>
          <ul class="legal-bullet-list">
            <li><strong>Tarjeta Departamental Callejón Mágico:</strong> Con 10% de descuento directo y hasta 18 Meses Sin Intereses exclusivos.</li>
            <li><strong>Tarjetas Bancarias de Crédito y Débito (Visa, Mastercard, AMEX):</strong> Opciones de pago de contado y plazos a meses sin intereses participantes con autorización en línea.</li>
            <li><strong>PayPal:</strong> Cuentas verificadas con sistema de Protección al Comprador.</li>
          </ul>
        </div>

        <div class="legal-clause">
          <h4>4. Políticas de Entrega y Click & Collect</h4>
          <p><strong>Envío a Domicilio:</strong> Entregas en un lapso de 48 a 72 horas hábiles mediante transporte boutique asegurado (Estafeta). Envío de cortesía en compras superiores al umbral promocional vigente.</p>
          <p><strong>Retiro en Sucursal (Click & Collect):</strong> Los pedidos estarán listos para recolección en un lapso de 2 horas hábiles en la sucursal seleccionada (Plantel Centro o Plantel Sur) presentando identificación oficial vigente (INE) y el número de orden oficial.</p>
        </div>

        <div class="legal-clause">
          <h4>5. Garantía, Cambios y Devoluciones</h4>
          <p>El cliente cuenta con un plazo de <strong>30 días naturales</strong> a partir de la entrega para solicitar cambio o devolución por defecto de fabricación o inconformidad, siempre que el producto conserve sus etiquetas, accesorios y empaque original en buen estado.</p>
        </div>
      `;
      this.openModal('terminosModal', 'Términos y Condiciones', '⚖️ MARCO LEGAL Y POLÍTICAS COMERCIALES', content);
    },

    openPrivacidad() {
      const content = `
        <div class="legal-clause">
          <h4>1. Responsable del Tratamiento de Datos</h4>
          <p><strong>Callejón Mágico S.A. de C.V.</strong>, con domicilio fiscal y comercial en 8A Avenida Sur no. 54 col. Centro entre 4 y 6 poniente, C.P. 30700, Tapachula, Chiapas, México, es el responsable del uso y protección de sus datos personales conforme a la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</em>.</p>
        </div>

        <div class="legal-clause">
          <h4>2. Datos Personales Recabados</h4>
          <p>Para la formalización de compras, entregas y emisión de tickets oficiales, podemos recabar:</p>
          <ul class="legal-bullet-list">
            <li>Nombre y apellidos del titular / destinatario.</li>
            <li>Número telefónico móvil o de WhatsApp (para envío automático de tickets y notificaciones de logística).</li>
            <li>Correo electrónico (para confirmaciones y tickets digitales).</li>
            <li>Dirección postal de entrega (calle, número, colonia, código postal y ciudad/estado).</li>
            <li>Datos de facturación fiscal en caso de requerir comprobante CFDI.</li>
          </ul>
          <p style="margin-top: 0.5rem; font-size: 0.82rem; color: #047857;"><strong>Nota de seguridad:</strong> Callejón Mágico <em>no almacena</em> números completos de tarjetas bancarias ni códigos CVV en servidores propios; toda transacción bancaria es encriptada mediante protocolo SSL de 256 bits.</p>
        </div>

        <div class="legal-clause">
          <h4>3. Finalidades del Tratamiento</h4>
          <p>Sus datos personales son utilizados exclusivamente para:</p>
          <ul class="legal-bullet-list">
            <li>Procesar, verificar y despachar los pedidos solicitados.</li>
            <li>Enviar el ticket oficial de compra vía WhatsApp y correo electrónico.</li>
            <li>Atención al cliente y resolución de solicitudes a través del Concierge.</li>
            <li>Acreditación de Puntos Mágicos en su Tarjeta Departamental.</li>
          </ul>
        </div>

        <div class="legal-clause">
          <h4>4. Ejercicio de Derechos ARCO</h4>
          <p>Usted tiene derecho de Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercerlos, puede enviar un correo a <strong><a href="mailto:gabsar1230@gmail.com" style="color: #0b1b3d;">gabsar1230@gmail.com</a></strong> o presentarse con identificación oficial en el módulo Concierge de nuestras sucursales en Tapachula.</p>
        </div>
      `;
      this.openModal('privacidadModal', 'Aviso de Privacidad', '🔒 PROTECCIÓN INTEGRAL DE DATOS PERSONALES', content);
    },

    openEnvios() {
      const content = `
        <div class="legal-clause">
          <h4>Modalidades de Entrega Callejón Mágico</h4>
          <div class="concierge-grid-cards" style="margin-top: 0.85rem; margin-bottom: 1rem;">
            <div class="concierge-card highlight">
              <div class="concierge-card-icon">⚡</div>
              <h4>Click & Collect (Retiro en Sucursal)</h4>
              <p>¡100% GRATIS en todos tus pedidos!</p>
              <div style="font-size: 0.82rem; color: #059669; font-weight: 700; margin: 0.4rem 0;">Listo en 2 horas hábiles</div>
              <p style="font-size: 0.78rem;">Recoge en Plantel Centro o Plantel Sur con tu INE y tu número de orden.</p>
            </div>
            <div class="concierge-card">
              <div class="concierge-card-icon">📦</div>
              <h4>Envío a Domicilio Express</h4>
              <p>Envío de cortesía en compras mayores a $999.00 MXN.</p>
              <div style="font-size: 0.82rem; color: #0b1b3d; font-weight: 700; margin: 0.4rem 0;">Entrega en 48 a 72 horas hábiles</div>
              <p style="font-size: 0.78rem;">Empaque boutique sellado con seguro de tránsito incluido.</p>
            </div>
          </div>
        </div>

        <div class="legal-clause">
          <h4>Garantía de Satisfacción de 30 Días</h4>
          <p>Si tu producto presenta defectos de fábrica o no es de tu entera satisfacción, puedes solicitar cambio o devolución en un plazo de 30 días naturales con tu ticket de compra.</p>
        </div>
      `;
      this.openModal('enviosModal', 'Envíos y Devoluciones', '🚚 LOGÍSTICA BOUTIQUE & GARANTÍAS', content);
    }
  };

  // Exponer a nivel global
  window.CallejonInfoModals = InfoModals;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => InfoModals.init());
  } else {
    InfoModals.init();
  }
})();

