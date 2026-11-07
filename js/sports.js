/**
 * GRANDÉ TIENDA DEPARTAMENTAL - Lógica Departamental: Deportes, Fitness & Outdoor
 * Filtros por disciplina, marca, subcategoría, ordenamiento y vista rápida.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State for sports catalog
  const SportsState = {
    subcategory: 'all',
    brand: 'all',
    minPrice: null,
    maxPrice: null,
    onlyDiscount: false,
    onlyFreeShipping: false,
    sortBy: 'featured',
    gridCols: 3
  };

  // DOM Elements
  const DOM = {
    grid: document.getElementById('sportsProductsGrid'),
    counter: document.getElementById('sportsProductCount'),
    activeChips: document.getElementById('activeFilterChips'),
    btnResetAll: document.getElementById('btnResetAllFilters'),
    sortSelect: document.getElementById('sortSelect'),
    brandPills: document.querySelectorAll('.brand-pill-btn'),
    catLinks: document.querySelectorAll('.filter-cat-link'),
    minPriceInput: document.getElementById('minPriceInput'),
    maxPriceInput: document.getElementById('maxPriceInput'),
    btnApplyPrice: document.getElementById('btnApplyPrice'),
    chkOnlyDiscount: document.getElementById('chkOnlyDiscount'),
    chkOnlyShipping: document.getElementById('chkOnlyShipping'),
    btnGridCols3: document.getElementById('btnGridCols3'),
    btnGridCols4: document.getElementById('btnGridCols4')
  };

  // Read URL query parameters (e.g. ?subcategory=calzado or ?brand=Nike)
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('subcategory')) {
      SportsState.subcategory = params.get('subcategory').toLowerCase();
      updateCategoryLinks();
    }
    if (params.has('brand')) {
      SportsState.brand = params.get('brand');
      updateBrandPills();
    }
    if (params.has('discount') && params.get('discount') === 'true') {
      SportsState.onlyDiscount = true;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = true;
    }
  }

  function updateCategoryLinks() {
    DOM.catLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.subcategory === SportsState.subcategory);
    });
  }

  function updateBrandPills() {
    DOM.brandPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.brand.toLowerCase() === SportsState.brand.toLowerCase());
    });
  }

  // Filter and Sort Sports Products
  function getFilteredProducts() {
    let list = PRODUCTS_DATA.filter(p => p.category === 'deportes');

    // Filter by subcategory
    if (SportsState.subcategory !== 'all') {
      list = list.filter(p => p.subcategory === SportsState.subcategory);
    }

    // Filter by brand
    if (SportsState.brand !== 'all') {
      list = list.filter(p => p.brand && p.brand.toLowerCase() === SportsState.brand.toLowerCase());
    }

    // Filter by price range
    if (SportsState.minPrice !== null && !isNaN(SportsState.minPrice)) {
      list = list.filter(p => p.price >= SportsState.minPrice);
    }
    if (SportsState.maxPrice !== null && !isNaN(SportsState.maxPrice)) {
      list = list.filter(p => p.price <= SportsState.maxPrice);
    }

    // Filter by discount
    if (SportsState.onlyDiscount) {
      list = list.filter(p => p.originalPrice && p.originalPrice > p.price);
    }

    // Filter by free shipping
    if (SportsState.onlyFreeShipping) {
      list = list.filter(p => p.price >= 999 || p.badgeType === 'shipping');
    }

    // Sort products
    switch (SportsState.sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount-desc':
        list.sort((a, b) => {
          const discA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const discB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return discB - discA;
        });
        break;
      default:
        // Featured default ordering
        list.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
        break;
    }

    return list;
  }

  // Render Catalog Grid
  function renderSportsCatalog() {
    if (!DOM.grid) return;

    const products = getFilteredProducts();

    // Update product counter
    if (DOM.counter) {
      DOM.counter.textContent = products.length;
    }

    // Update active filter chips
    renderActiveChips();

    // Empty state
    if (products.length === 0) {
      DOM.grid.innerHTML = `
        <div class="sports-empty-state" style="grid-column: 1 / -1;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" style="margin: 0 auto 1rem auto; display: block;">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12h8"></path>
          </svg>
          <h4>No encontramos productos deportivos con estos filtros</h4>
          <p>Prueba seleccionando otra marca, disciplina deportiva o ajustando el rango de precio.</p>
          <button class="btn-checkout-primary" id="btnEmptyReset" style="width: auto; padding: 0.65rem 1.5rem; display: inline-flex;">Restablecer todos los filtros</button>
        </div>
      `;
      const btnReset = document.getElementById('btnEmptyReset');
      if (btnReset) btnReset.addEventListener('click', resetAllFilters);
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');

    DOM.grid.innerHTML = products.map(product => {
      const isFav = wishlist.includes(product.id);
      const isDiscounted = product.originalPrice && product.originalPrice > product.price;
      const discountPercent = isDiscounted 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : 0;
      const msiAmount = (product.price / 18).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      let badgeHtml = '';
      if (product.badge) {
        badgeHtml = `<span class="card-badge-top ${product.badgeType || 'bestseller'}">${product.badge}</span>`;
      } else if (isDiscounted) {
        badgeHtml = `<span class="card-badge-top offer">-${discountPercent}% OFF</span>`;
      }

      return `
        <article class="sport-product-card" data-id="${product.id}">
          <div class="sport-card-img-wrapper" data-action="quickview" data-id="${product.id}">
            ${badgeHtml}
            <button class="card-action-fav ${isFav ? 'active' : ''}" data-id="${product.id}" aria-label="Favorito" title="Guardar en favoritos">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <img src="${product.image}" alt="${product.name}" class="sport-card-img" loading="lazy" />
            <button class="card-quickview-btn" data-action="quickview" data-id="${product.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Vista rápida
            </button>
          </div>
          
          <div class="sport-card-info">
            <div class="sport-brand-row">
              <span class="sport-brand-name">${product.brand || "Callejón Mágico"}</span>
              ${product.discipline ? `<span class="sport-discipline-pill">${truncate(product.discipline, 24)}</span>` : ''}
            </div>

            <h3 class="sport-card-title" title="${product.name}" data-action="quickview" data-id="${product.id}">${product.name}</h3>
            
            <div class="sport-rating-row">
              <div class="stars-row">${renderStars(product.rating)}</div>
              <span class="reviews-count-text">(${product.reviewsCount || 0})</span>
            </div>

            ${window.CallejonOffers ? window.CallejonOffers.getOfferCardTimerHtml(product) : ''}

            <div class="sport-card-pricing">
              <div class="price-main-row">
                <span class="sport-price-current">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
                ${product.originalPrice ? `<span class="sport-price-old">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` : ''}
              </div>
              <div class="sport-msi-text">
                18 MSI de <strong>$${msiAmount}</strong>
              </div>
            </div>

            <button class="sport-card-btn-add btn-add-to-cart" data-id="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Agregar al Carrito
            </button>
          </div>
        </article>
      `;
    }).join('');

    attachCardEvents();
  }

  function truncate(str, maxLen) {
    if (!str) return '';
    return str.length > maxLen ? str.slice(0, maxLen) + '...' : str;
  }

  function renderStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      starsHtml += `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
    return starsHtml;
  }

  // Active filter chips
  function renderActiveChips() {
    if (!DOM.activeChips) return;

    const chips = [];

    if (SportsState.subcategory !== 'all') {
      const subLabels = {
        'calzado': 'Calzado Deportivo',
        'fitness': 'Fitness & Gimnasio',
        'ciclismo': 'Ciclismo & Montaña',
        'raqueta': 'Pádel & Raquetas',
        'outdoor': 'Camping & Aventura',
        'ropa-tecnica': 'Ropa Técnica'
      };
      chips.push({
        type: 'subcategory',
        label: subLabels[SportsState.subcategory] || SportsState.subcategory
      });
    }

    if (SportsState.brand !== 'all') {
      chips.push({ type: 'brand', label: `Marca: ${SportsState.brand}` });
    }

    if (SportsState.minPrice !== null || SportsState.maxPrice !== null) {
      const minText = SportsState.minPrice ? `$${SportsState.minPrice}` : '$0';
      const maxText = SportsState.maxPrice ? `$${SportsState.maxPrice}` : '∞';
      chips.push({ type: 'price', label: `${minText} - ${maxText}` });
    }

    if (SportsState.onlyDiscount) {
      chips.push({ type: 'discount', label: 'Solo Ofertas' });
    }

    if (SportsState.onlyFreeShipping) {
      chips.push({ type: 'shipping', label: 'Envío Gratis' });
    }

    if (chips.length > 0) {
      if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'block';
      DOM.activeChips.innerHTML = chips.map(c => `
        <span class="filter-chip">
          ${c.label}
          <span class="filter-chip-remove" data-type="${c.type}">&times;</span>
        </span>
      `).join('');

      DOM.activeChips.querySelectorAll('.filter-chip-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFilter(btn.dataset.type));
      });
    } else {
      DOM.activeChips.innerHTML = '';
      if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'none';
    }
  }

  function removeFilter(type) {
    if (type === 'subcategory') {
      SportsState.subcategory = 'all';
      updateCategoryLinks();
    } else if (type === 'brand') {
      SportsState.brand = 'all';
      updateBrandPills();
    } else if (type === 'price') {
      SportsState.minPrice = null;
      SportsState.maxPrice = null;
      if (DOM.minPriceInput) DOM.minPriceInput.value = '';
      if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    } else if (type === 'discount') {
      SportsState.onlyDiscount = false;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    } else if (type === 'shipping') {
      SportsState.onlyFreeShipping = false;
      if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;
    }
    renderSportsCatalog();
  }

  function resetAllFilters() {
    SportsState.subcategory = 'all';
    SportsState.brand = 'all';
    SportsState.minPrice = null;
    SportsState.maxPrice = null;
    SportsState.onlyDiscount = false;
    SportsState.onlyFreeShipping = false;

    updateCategoryLinks();
    updateBrandPills();

    if (DOM.minPriceInput) DOM.minPriceInput.value = '';
    if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;

    renderSportsCatalog();
  }

  function attachCardEvents() {
    DOM.grid.querySelectorAll('.btn-add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (window.GrandeApp) {
          window.GrandeApp.addToCart(id);
        } else {
          fallbackAddToCart(id);
        }
      });
    });

    DOM.grid.querySelectorAll('.card-action-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (window.GrandeApp) {
          window.GrandeApp.toggleWishlist(id);
        } else {
          fallbackToggleWishlist(id);
        }
        const wl = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
        const isFav = wl.includes(id);
        btn.classList.toggle('active', isFav);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isFav ? '#ef4444' : 'none');
      });
    });

    DOM.grid.querySelectorAll('[data-action="quickview"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.dataset.id;
        openSportsQuickView(id);
      });
    });
  }

  // Dedicated Sports QuickView Modal
  function openSportsQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const modalWindow = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('quickViewBody');
    const backdrop = document.getElementById('modalBackdrop');
    if (!modalWindow || !modalBody) return;

    const isDiscounted = product.originalPrice && product.originalPrice > product.price;
    const discountTagHtml = isDiscounted 
      ? `<span style="font-size: 0.8rem; font-weight: 700; color: #ef4444; background: #fee2e2; padding: 0.2rem 0.5rem; border-radius: 4px; margin-left: 0.5rem;">-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Descuento</span>` 
      : '';

    let specsTableHtml = '';
    if (product.specs) {
      specsTableHtml = `
        <div style="margin: 1.25rem 0;">
          <h5 style="font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">Ficha Técnica & Rendimiento Deportivo:</h5>
          <table class="sport-specs-table">
            <tbody>
              ${Object.entries(product.specs).map(([key, val]) => `
                <tr>
                  <td class="spec-name">${formatSportsSpecKey(key)}</td>
                  <td class="spec-val">${val}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    const msiAmount = (product.price / 18).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const wishlist = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
    const isFav = wishlist.includes(product.id);

    modalBody.innerHTML = `
      <div class="quickview-layout">
        <div class="quickview-gallery">
          <img src="${product.image}" alt="${product.name}" class="quickview-img" style="max-height: 440px; object-fit: contain; padding: 1.25rem;" />
        </div>
        <div class="quickview-details">
          <span class="quickview-dept" style="color: #0284c7; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">
            ${product.brand} · ${product.department}
          </span>
          <h2 class="quickview-title" style="font-size: 1.45rem; line-height: 1.3; margin: 0.4rem 0;">${product.name}</h2>
          
          <div class="quickview-rating-row">
            <div class="stars-row">${renderStars(product.rating)}</div>
            <span class="reviews-count">${product.rating} (${product.reviewsCount} opiniones verificadas)</span>
            <span class="quickview-sku">SKU: ${product.sku}</span>
          </div>

          ${product.discipline ? `
            <div style="display: inline-flex; align-items: center; gap: 0.4rem; margin: 0.4rem 0 0.8rem 0;">
              <span style="font-size: 0.8rem; font-weight: 700; background: #f0f9ff; color: #0284c7; border: 1px solid #bae6fd; padding: 0.25rem 0.65rem; border-radius: 4px;">
                ⚡ Disciplina: ${product.discipline}
              </span>
            </div>
          ` : ''}

          <div class="quickview-pricing" style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0;">
            <span class="quickview-current-price" style="font-size: 1.85rem; font-weight: 800; color: #0f172a;">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            ${product.originalPrice ? `<span class="quickview-orig-price" style="text-decoration: line-through; color: #94a3b8; font-size: 1.1rem;">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` : ''}
            ${discountTagHtml}
          </div>

          ${window.CallejonOffers ? window.CallejonOffers.getQuickViewOfferBannerHtml(product) : ''}

          <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 0.55rem 0.85rem; margin-bottom: 1rem; font-size: 0.84rem; color: #92400e; display: flex; align-items: center; gap: 0.4rem;">
            <span>💳</span> <strong>Hasta 18 Mensualidades Sin Intereses de $${msiAmount}</strong> con Tarjeta Callejón Mágico.
          </div>

          <p class="quickview-desc" style="font-size: 0.9rem; line-height: 1.55; color: #475569;">${product.description}</p>

          ${product.features && product.features.length > 0 ? `
            <div style="margin: 1rem 0;">
              <h5 style="font-size: 0.86rem; font-weight: 700; color: #0f172a; margin-bottom: 0.45rem;">Puntos Destacados & Tecnologías:</h5>
              <ul style="font-size: 0.84rem; color: #475569; padding-left: 1.25rem; line-height: 1.6;">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${specsTableHtml}

          <div class="sport-warranty-strip">
            <span>🛡️</span> <strong>Garantía oficial directa de fábrica</strong> · 🚚 <strong>Envío asegurado en todo México</strong> · 🏬 Recoge hoy en tienda con <strong>Click & Collect</strong>.
          </div>

          <div class="quickview-cta-row" style="display: flex; gap: 0.75rem; align-items: center;">
            <button class="btn-checkout-primary" id="btnSportsQuickViewAddToCart" style="height: 50px; font-size: 1rem; flex: 1;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Agregar al Carrito
            </button>
            <button class="card-action-fav ${isFav ? 'active' : ''}" id="btnSportsQuickViewFav" style="position: static; width: 50px; height: 50px; border-radius: var(--radius-sm);" title="Guardar en favoritos">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    const btnAdd = modalBody.querySelector('#btnSportsQuickViewAddToCart');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (window.GrandeApp) {
          window.GrandeApp.addToCart(product.id);
        } else {
          fallbackAddToCart(product.id);
        }
        if (window.GrandeApp) window.GrandeApp.closeAllModals();
      });
    }

    const btnFav = modalBody.querySelector('#btnSportsQuickViewFav');
    if (btnFav) {
      btnFav.addEventListener('click', () => {
        if (window.GrandeApp) {
          window.GrandeApp.toggleWishlist(product.id);
        } else {
          fallbackToggleWishlist(product.id);
        }
        const wl = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
        const updatedFav = wl.includes(product.id);
        btnFav.classList.toggle('active', updatedFav);
        const svg = btnFav.querySelector('svg');
        if (svg) svg.setAttribute('fill', updatedFav ? '#ef4444' : 'none');
      });
    }

    if (backdrop) backdrop.classList.add('active');
    modalWindow.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function formatSportsSpecKey(key) {
    const map = {
      placa: 'Placa de Propulsión',
      espuma: 'Espuma / Mediasuela',
      upper: 'Malla / Corte Exterior',
      peso: 'Peso del Calzado',
      drop: 'Drop del Talón al Antepié',
      suela: 'Suela & Agarre',
      amortiguacion: 'Sistema de Amortiguación',
      sistemaEstabilidad: 'Control de Estabilidad',
      corteSuperior: 'Material del Tejido',
      motor: 'Motor Eléctrico',
      inclinacion: 'Inclinación Digital',
      velocidad: 'Rango de Velocidad',
      superficieCarrera: 'Superficie de Carrera',
      pantalla: 'Pantalla & Audio',
      pesoMaximoUsuario: 'Capacidad Máxima',
      rangoPeso: 'Rango de Carga',
      incrementos: 'Graduación de Pesos',
      sistemaAjuste: 'Mecanismo de Selección',
      material: 'Material de Fabricación',
      dimensiones: 'Dimensiones',
      incluye: 'Contenido del Paquete',
      cuadro: 'Cuadro & Geometría',
      suspension: 'Horquilla & Suspensión',
      transmision: 'Transmisión & Cambios',
      frenos: 'Sistema de Frenado',
      ruedas: 'Ruedas & Neumáticos',
      pesoTotal: 'Peso Total',
      forma: 'Forma de la Pala',
      caras: 'Material de las Caras',
      nucleo: 'Núcleo Interno',
      marco: 'Estructura del Marco',
      tecnologias: 'Tecnologías Clave',
      tiempoMontaje: 'Tiempo de Armado',
      materialTejido: 'Tejido & Protección UV',
      impermeabilidad: 'Índice de Impermeabilidad',
      ventilacion: 'Sistema de Ventilación',
      capacidad: 'Capacidad de Carga',
      rendimientoTermico: 'Aislamiento Térmico',
      tapa: 'Diseño de la Tapa',
      compatibilidad: 'Compatibilidad de Soporte',
      limpieza: 'Mantenimiento & Lavado',
      tecnologia: 'Tecnología Textil',
      escudo: 'Escudo & Acabados',
      corte: 'Corte Anatómico',
      detalles: 'Detalles de Confección',
      origen: 'Licencia & Origen',
      bateria: 'Autonomía de Batería',
      sensores: 'Sensores de Rendimiento',
      metricasAvanzadas: 'Métricas Deportivas',
      musica: 'Música & Conectividad',
      resistenciaAgua: 'Resistencia al Agua',
      volanteInercia: 'Volante de Inercia',
      resistencia: 'Sistema de Resistencia',
      ajustes: 'Ajuste Ergonómico',
      capacidadCarga: 'Capacidad de Carga',
      tamanoCabeza: 'Tamaño de Cabeza',
      pesoSinCuerda: 'Peso sin Encordar',
      patronEncordado: 'Patrón de Encordado',
      balance: 'Punto de Balance',
      sistemaSuspension: 'Suspensión Ergonómica',
      ajuste: 'Ajuste de Torso',
      fundaLluvia: 'Funda Impermeable',
      compartimentos: 'Accesos & Compartimentos',
      pesoVacio: 'Peso en Vacío',
      materialCorte: 'Material de Corte',
      cuello: 'Soporte de Tobillo',
      accesorios: 'Accesorios Incluidos',
      posicionesRespaldo: 'Posiciones de Respaldo',
      posicionesAsiento: 'Posiciones de Asiento',
      espumaAcolchado: 'Grosor del Acolchado',
      tapizado: 'Material de Tapizado',
      movilidad: 'Ruedas de Transporte',
      panelesVentilacion: 'Zonas Transpirables',
      costuras: 'Tipo de Costura',
      elasticidad: 'Rango Elástico'
    };
    return map[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  }

  // Fallbacks
  function fallbackAddToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        sku: product.sku,
        quantity: 1,
        size: product.sizes ? product.sizes[0] : null,
        color: product.colors ? product.colors[0] : null
      });
    }
    localStorage.setItem('davanti_cart', JSON.stringify(cart));
    localStorage.setItem('grande_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
    const app = window.GrandeApp || window.DavantiApp || window.CallejonApp;
    if (app) {
      if (typeof app.reloadCart === 'function') app.reloadCart();
      if (typeof app.updateCartUI === 'function') app.updateCartUI();
      if (typeof app.openDrawer === 'function') app.openDrawer('cart');
      if (typeof app.showToast === 'function') app.showToast(`¡"${product.name}" agregado a tu carrito!`, 'cart');
    }
  }

  function fallbackToggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('davanti_wishlist') || localStorage.getItem('grande_wishlist') || '[]');
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const index = wishlist.indexOf(productId);

    if (index > -1) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push(productId);
    }
    localStorage.setItem('davanti_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('grande_wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event('storage'));
    const app = window.GrandeApp || window.DavantiApp || window.CallejonApp;
    if (app) {
      if (typeof app.updateWishlistUI === 'function') app.updateWishlistUI();
      if (typeof app.showToast === 'function') {
        if (index > -1) app.showToast(`Se quitó "${product ? product.name : 'Producto'}" de favoritos`);
        else app.showToast(`¡"${product ? product.name : 'Producto'}" guardado en favoritos!`, 'heart');
      }
    }
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Brand pills
    DOM.brandPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const brand = pill.dataset.brand;
        SportsState.brand = SportsState.brand === brand && brand !== 'all' ? 'all' : brand;
        updateBrandPills();
        renderSportsCatalog();
      });
    });

    // Subcategory links
    DOM.catLinks.forEach(link => {
      link.addEventListener('click', () => {
        const sub = link.dataset.subcategory;
        SportsState.subcategory = SportsState.subcategory === sub ? 'all' : sub;
        updateCategoryLinks();
        renderSportsCatalog();
      });
    });

    // Price range filter
    if (DOM.btnApplyPrice) {
      DOM.btnApplyPrice.addEventListener('click', () => {
        const minVal = parseFloat(DOM.minPriceInput.value);
        const maxVal = parseFloat(DOM.maxPriceInput.value);
        SportsState.minPrice = isNaN(minVal) ? null : minVal;
        SportsState.maxPrice = isNaN(maxVal) ? null : maxVal;
        renderSportsCatalog();
      });
    }

    // Checkboxes
    if (DOM.chkOnlyDiscount) {
      DOM.chkOnlyDiscount.addEventListener('change', (e) => {
        SportsState.onlyDiscount = e.target.checked;
        renderSportsCatalog();
      });
    }

    if (DOM.chkOnlyShipping) {
      DOM.chkOnlyShipping.addEventListener('change', (e) => {
        SportsState.onlyFreeShipping = e.target.checked;
        renderSportsCatalog();
      });
    }

    // Sorting
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        SportsState.sortBy = e.target.value;
        renderSportsCatalog();
      });
    }

    // Grid column switchers
    if (DOM.btnGridCols3) {
      DOM.btnGridCols3.addEventListener('click', () => {
        DOM.btnGridCols3.classList.add('active');
        if (DOM.btnGridCols4) DOM.btnGridCols4.classList.remove('active');
        if (DOM.grid) DOM.grid.classList.remove('grid-4-cols');
      });
    }

    if (DOM.btnGridCols4) {
      DOM.btnGridCols4.addEventListener('click', () => {
        DOM.btnGridCols4.classList.add('active');
        if (DOM.btnGridCols3) DOM.btnGridCols3.classList.remove('active');
        if (DOM.grid) DOM.grid.classList.add('grid-4-cols');
      });
    }

    // Reset All Filters button
    if (DOM.btnResetAll) {
      DOM.btnResetAll.addEventListener('click', resetAllFilters);
    }
  }

  // Initialize
  parseUrlParams();
  setupEventListeners();
  renderSportsCatalog();
});
