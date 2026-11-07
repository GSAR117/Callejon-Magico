/**
 * GRANDÉ TIENDA DEPARTAMENTAL - Lógica Departamental: Hogar, Muebles, Cocina & Confort
 * Filtros por marca, subcategoría, rango de precio, ordenamiento y vista rápida modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State for home catalog
  const HomeState = {
    subcategory: 'all',
    brand: 'all',
    minPrice: null,
    maxPrice: null,
    onlyDiscount: false,
    onlyFreeShipping: false,
    sortBy: 'featured',
    gridCols: 3
  };

  // DOM Elements cache
  const DOM = {
    grid: document.getElementById('homeProductsGrid'),
    counter: document.getElementById('homeProductCount'),
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
    btnGridCols4: document.getElementById('btnGridCols4'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    quickViewModal: document.getElementById('quickViewModal'),
    quickViewBody: document.getElementById('quickViewBody'),
    btnCloseQuickView: document.getElementById('btnCloseQuickView')
  };

  // Read URL query parameters (e.g. ?subcategory=muebles or ?brand=Le+Creuset)
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('subcategory')) {
      HomeState.subcategory = params.get('subcategory').toLowerCase();
      updateCategoryLinks();
    }
    if (params.has('brand')) {
      HomeState.brand = params.get('brand');
      updateBrandPills();
    }
    if (params.has('discount') && params.get('discount') === 'true') {
      HomeState.onlyDiscount = true;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = true;
    }
  }

  function updateCategoryLinks() {
    DOM.catLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.subcategory === HomeState.subcategory);
    });
  }

  function updateBrandPills() {
    DOM.brandPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.brand.toLowerCase() === HomeState.brand.toLowerCase());
    });
  }

  // Filter and Sort Home Products
  function getFilteredProducts() {
    let list = PRODUCTS_DATA.filter(p => p.category === 'hogar');

    // Filter by subcategory
    if (HomeState.subcategory !== 'all') {
      list = list.filter(p => p.subcategory === HomeState.subcategory);
    }

    // Filter by brand
    if (HomeState.brand !== 'all') {
      list = list.filter(p => p.brand && p.brand.toLowerCase() === HomeState.brand.toLowerCase());
    }

    // Filter by price range
    if (HomeState.minPrice !== null && !isNaN(HomeState.minPrice)) {
      list = list.filter(p => p.price >= HomeState.minPrice);
    }
    if (HomeState.maxPrice !== null && !isNaN(HomeState.maxPrice)) {
      list = list.filter(p => p.price <= HomeState.maxPrice);
    }

    // Filter by discount
    if (HomeState.onlyDiscount) {
      list = list.filter(p => p.originalPrice && p.originalPrice > p.price);
    }

    // Filter by free shipping
    if (HomeState.onlyFreeShipping) {
      list = list.filter(p => p.price >= 999 || p.badgeType === 'shipping');
    }

    // Sort products
    switch (HomeState.sortBy) {
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
        // Featured default ordering by reviews and popularity
        list.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
        break;
    }

    return list;
  }

  // Render Catalog Grid
  function renderHomeCatalog() {
    if (!DOM.grid) return;

    const products = getFilteredProducts();

    // Update counter
    if (DOM.counter) {
      DOM.counter.textContent = products.length;
    }

    // Update active filter chips
    renderActiveFilterChips();

    // If no products match
    if (products.length === 0) {
      DOM.grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 1.5rem; background: #ffffff; border-radius: var(--radius-md); border: 1px dashed #e7e5e4;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🛋️</div>
          <h3 style="font-size: 1.35rem; font-weight: 700; color: #1c1917; margin-bottom: 0.5rem;">No encontramos artículos con estos filtros</h3>
          <p style="font-size: 0.95rem; color: #78716c; max-width: 480px; margin: 0 auto 1.5rem;">
            Intenta ampliar tu rango de precios o seleccionar otra categoría o marca de nuestra curaduría de Hogar.
          </p>
          <button class="btn-checkout-primary" id="btnEmptyReset" style="width: auto; padding: 0.65rem 1.75rem; margin: 0 auto;">
            Restablecer todos los filtros
          </button>
        </div>
      `;

      const btnEmptyReset = document.getElementById('btnEmptyReset');
      if (btnEmptyReset) {
        btnEmptyReset.addEventListener('click', resetAllFilters);
      }
      return;
    }

    // Get wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');

    DOM.grid.innerHTML = products.map(product => {
      const isFav = wishlist.includes(product.id);
      const discountPercentage = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : null;

      const msiAmount = (product.price / 18).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      return `
        <article class="home-product-card" data-product-id="${product.id}">
          <div class="home-card-media" data-action="quickview" data-id="${product.id}" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.name}" class="home-card-img" loading="lazy" />
            
            ${product.badge ? `
              <span class="home-card-badge badge-${product.badgeType || 'bestseller'}">
                ${product.badge}
              </span>
            ` : ''}

            <div class="home-card-actions">
              <button class="home-card-btn-action ${isFav ? 'active' : ''}" data-action="fav" data-id="${product.id}" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}" aria-label="Favorito">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button class="home-card-btn-action" data-action="quickview" data-id="${product.id}" title="Vista rápida" aria-label="Vista rápida">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <div class="home-card-body">
            <span class="home-card-brand-dept">${product.brand || "Callejón Mágico"} · ${formatSubcategoryName(product.subcategory)}</span>
            <h3 class="home-card-title" title="${product.name}" data-action="quickview" data-id="${product.id}" style="cursor: pointer;">${product.name}</h3>
            
            <div class="home-card-rating">
              <div class="stars-row">${renderStars(product.rating)}</div>
              <span>${product.rating} (${product.reviewsCount})</span>
            </div>

            ${window.CallejonOffers ? window.CallejonOffers.getOfferCardTimerHtml(product) : ''}

            <div class="home-card-pricing">
              <span class="home-current-price">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              ${product.originalPrice ? `
                <span class="home-orig-price">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
                <span class="home-discount-pill">-${discountPercentage}%</span>
              ` : ''}
            </div>

            <div class="home-msi-badge">
              <span>💳</span> 18 MSI de $${msiAmount}
            </div>

            <button class="home-card-cta-btn btn-add-to-cart" data-action="add-cart" data-id="${product.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Agregar a la Bolsa
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  function formatSubcategoryName(sub) {
    const map = {
      'muebles': 'Muebles & Salas',
      'recamara': 'Recámara & Descanso',
      'electrodomesticos': 'Electrodomésticos Gourmet',
      'cocina': 'Cocina & Culinaria',
      'decoracion': 'Decoración & Ambientes'
    };
    return map[sub] || 'Hogar';
  }

  function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    let s = '';

    for (let i = 0; i < full; i++) {
      s += `<svg class="star-icon filled" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
    if (half) {
      s += `<svg class="star-icon half" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
    for (let i = 0; i < empty; i++) {
      s += `<svg class="star-icon empty" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
    return s;
  }

  // Active filter chips
  function renderActiveFilterChips() {
    if (!DOM.activeChips) return;

    const chips = [];

    if (HomeState.subcategory !== 'all') {
      chips.push({
        label: formatSubcategoryName(HomeState.subcategory),
        type: 'subcategory'
      });
    }

    if (HomeState.brand !== 'all') {
      chips.push({
        label: `Marca: ${HomeState.brand}`,
        type: 'brand'
      });
    }

    if (HomeState.minPrice !== null || HomeState.maxPrice !== null) {
      const minText = HomeState.minPrice !== null ? `$${HomeState.minPrice}` : '$0';
      const maxText = HomeState.maxPrice !== null ? `$${HomeState.maxPrice}` : '∞';
      chips.push({
        label: `Precio: ${minText} - ${maxText}`,
        type: 'price'
      });
    }

    if (HomeState.onlyDiscount) {
      chips.push({
        label: 'Solo en Oferta',
        type: 'discount'
      });
    }

    if (HomeState.onlyFreeShipping) {
      chips.push({
        label: 'Envío Gratis',
        type: 'shipping'
      });
    }

    if (chips.length > 0) {
      DOM.activeChips.innerHTML = chips.map(c => `
        <span class="filter-chip">
          ${c.label}
          <button class="filter-chip-remove" data-type="${c.type}" aria-label="Remover filtro">&times;</button>
        </span>
      `).join('');
      if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'block';
    } else {
      DOM.activeChips.innerHTML = '';
      if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'none';
    }
  }

  function removeFilterChip(type) {
    if (type === 'subcategory') {
      HomeState.subcategory = 'all';
      updateCategoryLinks();
    } else if (type === 'brand') {
      HomeState.brand = 'all';
      updateBrandPills();
    } else if (type === 'price') {
      HomeState.minPrice = null;
      HomeState.maxPrice = null;
      if (DOM.minPriceInput) DOM.minPriceInput.value = '';
      if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    } else if (type === 'discount') {
      HomeState.onlyDiscount = false;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    } else if (type === 'shipping') {
      HomeState.onlyFreeShipping = false;
      if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;
    }

    renderHomeCatalog();
  }

  function resetAllFilters() {
    HomeState.subcategory = 'all';
    HomeState.brand = 'all';
    HomeState.minPrice = null;
    HomeState.maxPrice = null;
    HomeState.onlyDiscount = false;
    HomeState.onlyFreeShipping = false;
    HomeState.sortBy = 'featured';

    if (DOM.minPriceInput) DOM.minPriceInput.value = '';
    if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;
    if (DOM.sortSelect) DOM.sortSelect.value = 'featured';

    updateCategoryLinks();
    updateBrandPills();
    renderHomeCatalog();

    // Clean URL query without page reload
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }

  // QuickView Modal
  function openHomeQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const modalBody = DOM.quickViewBody;
    const backdrop = DOM.modalBackdrop;
    const modalWindow = DOM.quickViewModal;
    if (!modalBody || !modalWindow) return;

    const discountPercentage = product.originalPrice 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
      : null;

    const discountTagHtml = discountPercentage 
      ? `<span class="quickview-discount-tag" style="background:#dc2626; color:#fff; font-size:0.8rem; font-weight:700; padding:0.25rem 0.65rem; border-radius:4px;">-${discountPercentage}% OFF</span>` 
      : '';

    let specsTableHtml = '';
    if (product.specs) {
      specsTableHtml = `
        <div style="margin: 1.25rem 0;">
          <h5 style="font-size: 0.88rem; font-weight: 700; color: #1c1917; margin-bottom: 0.5rem;">Ficha Técnica & Dimensiones:</h5>
          <table class="home-specs-table">
            <tbody>
              ${Object.entries(product.specs).map(([key, val]) => `
                <tr>
                  <td class="spec-name">${formatHomeSpecKey(key)}</td>
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
          <span class="quickview-dept" style="color: #d97706; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em;">
            ${product.brand || "Callejón Mágico"} · ${product.department || 'Hogar & Confort'}
          </span>
          <h2 class="quickview-title" style="font-size: 1.45rem; line-height: 1.3; margin: 0.4rem 0; color: #1c1917;">${product.name}</h2>
          
          <div class="quickview-rating-row">
            <div class="stars-row">${renderStars(product.rating)}</div>
            <span class="reviews-count">${product.rating} (${product.reviewsCount} opiniones verificadas)</span>
            <span class="quickview-sku">SKU: ${product.sku}</span>
          </div>

          <div class="quickview-pricing" style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0;">
            <span class="quickview-current-price" style="font-size: 1.85rem; font-weight: 800; color: #1c1917;">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            ${product.originalPrice ? `<span class="quickview-orig-price" style="text-decoration: line-through; color: #a8a29e; font-size: 1.1rem;">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` : ''}
            ${discountTagHtml}
          </div>

          ${window.CallejonOffers ? window.CallejonOffers.getQuickViewOfferBannerHtml(product) : ''}

          <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 0.55rem 0.85rem; margin-bottom: 1rem; font-size: 0.84rem; color: #92400e; display: flex; align-items: center; gap: 0.4rem;">
            <span>💳</span> <strong>Hasta 18 Mensualidades Sin Intereses de $${msiAmount}</strong> con Tarjeta Callejón Mágico.
          </div>

          <p class="quickview-desc" style="font-size: 0.9rem; line-height: 1.55; color: #44403c;">${product.description}</p>

          ${product.features && product.features.length > 0 ? `
            <div style="margin: 1rem 0;">
              <h5 style="font-size: 0.86rem; font-weight: 700; color: #1c1917; margin-bottom: 0.45rem;">Puntos Destacados & Confort:</h5>
              <ul style="font-size: 0.84rem; color: #57534e; padding-left: 1.25rem; line-height: 1.6;">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${specsTableHtml}

          <div class="home-warranty-strip">
            <span>🛡️</span> <strong>Garantía oficial y cobertura de satisfacción Callejón Mágico</strong> · 🚚 <strong>Envío protegido a todo México</strong> · 🏬 Disponible para <strong>Click & Collect</strong> hoy mismo.
          </div>

          <div class="quickview-cta-row" style="display: flex; gap: 0.75rem; align-items: center;">
            <button class="btn-checkout-primary" id="btnHomeQuickViewAddToCart" style="height: 50px; font-size: 1rem; flex: 1; background: #1c1917;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Agregar a la Bolsa
            </button>
            <button class="card-action-fav ${isFav ? 'active' : ''}" id="btnHomeQuickViewFav" style="position: static; width: 50px; height: 50px; border-radius: var(--radius-sm);" title="Guardar en favoritos">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    const btnAdd = modalBody.querySelector('#btnHomeQuickViewAddToCart');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (window.GrandeApp) {
          window.GrandeApp.addToCart(product.id);
        } else {
          fallbackAddToCart(product.id);
        }
        if (window.GrandeApp) window.GrandeApp.closeAllModals();
        else closeModal();
      });
    }

    const btnFav = modalBody.querySelector('#btnHomeQuickViewFav');
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
        renderHomeCatalog();
      });
    }

    if (backdrop) backdrop.classList.add('active');
    modalWindow.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (DOM.modalBackdrop) DOM.modalBackdrop.classList.remove('active');
    if (DOM.quickViewModal) DOM.quickViewModal.classList.remove('active');
    if (window.CallejonCard) {
      if (typeof window.CallejonCard.closeModal === 'function') window.CallejonCard.closeModal();
      if (typeof window.CallejonCard.closeSucursalModal === 'function') window.CallejonCard.closeSucursalModal();
    }
    if (window.CallejonOrders && typeof window.CallejonOrders.closeModal === 'function') {
      window.CallejonOrders.closeModal();
    }
    if (window.CallejonOffers && typeof window.CallejonOffers.closeOffersModal === 'function') {
      window.CallejonOffers.closeOffersModal();
    }
    document.querySelectorAll('.modal-window.active').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }

  function formatHomeSpecKey(key) {
    const map = {
      estructura: 'Estructura Interna',
      tapizado: 'Material de Tapizado',
      dimensiones: 'Dimensiones Generales',
      confort: 'Sistema de Confort & Densidad',
      garantia: 'Garantía del Fabricante',
      diseno: 'Estilo & Curaduría',
      patas: 'Patas & Soporte',
      presion: 'Presión de Bomba',
      molino: 'Molinillo de Café',
      pantalla: 'Pantalla & Controles',
      calentamiento: 'Sistema de Calentamiento',
      vaporizador: 'Lanza de Vapor',
      material: 'Material Principal',
      piezas: 'Contenido del Set',
      compatibilidad: 'Fuentes de Calor Compatibles',
      limpieza: 'Cuidado & Lavado',
      navegacion: 'Sistema de Navegación & Sensores',
      succion: 'Potencia de Succión',
      autovaciado: 'Estación de Carga & Vaciado',
      mopa: 'Mecanismo de Trapeador',
      conectividad: 'Conectividad & Asistentes',
      nucleo: 'Núcleo del Colchón',
      funda: 'Funda Exterior & Tejido',
      filtracion: 'Nivel de Filtración HEPA',
      funciones: 'Funciones Principales',
      sensores: 'Monitoreo Ambiental',
      cobertura: 'Área de Cobertura',
      motor: 'Potencia del Motor',
      tazon: 'Capacidad del Tazón',
      velocidades: 'Niveles de Velocidad',
      peso: 'Peso del Equipo',
      incluye: 'Accesorios Incluidos',
      mesa: 'Material de la Mesa',
      sillas: 'Diseño de Sillas',
      dimensionesMesa: 'Medidas de la Mesa',
      dimensionesSilla: 'Medidas de las Sillas',
      capacidad: 'Capacidad Máxima',
      mecanismo: 'Mecanismo Eléctrico',
      extras: 'Funciones Adicionales',
      composicion: 'Composición Textil',
      tejido: 'Conteo de Hilos',
      certificacion: 'Certificaciones de Calidad',
      cuidado: 'Instrucciones de Lavado',
      potencia: 'Potencia Eléctrica',
      temperatura: 'Rango de Temperatura',
      acero: 'Tipo de Acero',
      dureza: 'Dureza Rockwell',
      mango: 'Material del Mango',
      anguloFilo: 'Ángulo de Afilado',
      tecnologia: 'Tecnología de Extracción',
      tamanosTaza: 'Variedad de Tazas',
      tanqueAgua: 'Capacidad del Depósito',
      aeroccino: 'Espumador de Leche',
      base: 'Base & Estabilidad',
      arco: 'Material del Arco',
      iluminacion: 'Tipo de Iluminación',
      control: 'Tipo de Interruptor',
      tecnica: 'Técnica de Tejido',
      relleno: 'Material de Relleno',
      fillPower: 'Poder de Inflado (Fill Power)',
      costura: 'Tipo de Costura',
      tanque: 'Capacidad del Tanque',
      autonomia: 'Horas de Autonomía',
      seguridad: 'Sistemas de Seguridad'
    };
    return map[key] || key.charAt(0).toUpperCase() + key.slice(1);
  }

  // Fallbacks if GrandeApp is still loading
  function fallbackAddToCart(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
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
        size: product.sizes ? product.sizes[0] : null,
        color: product.colors ? product.colors[0] : null,
        quantity: 1
      });
    }
    localStorage.setItem('davanti_cart', JSON.stringify(cart));
    localStorage.setItem('grande_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
    const app = window.GrandeApp || window.DavantiApp || window.CallejonApp;
    if (app) {
      if (typeof app.reloadCart === 'function') app.reloadCart();
      if (typeof app.updateCartUI === 'function') app.updateCartUI();
      if (typeof app.showToast === 'function') app.showToast(`"${product.name}" agregado a tu bolsa`, 'cart');
      if (typeof app.openDrawer === 'function') app.openDrawer('cart');
    }
  }

  function fallbackToggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('davanti_wishlist') || localStorage.getItem('grande_wishlist') || '[]');
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
    if (app && typeof app.updateWishlistUI === 'function') {
      app.updateWishlistUI();
    }
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Brand pill click
    DOM.brandPills.forEach(pill => {
      pill.addEventListener('click', () => {
        DOM.brandPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        HomeState.brand = pill.dataset.brand;
        renderHomeCatalog();
      });
    });

    // Subcategory links click
    DOM.catLinks.forEach(link => {
      link.addEventListener('click', () => {
        DOM.catLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        HomeState.subcategory = link.dataset.subcategory;
        renderHomeCatalog();
      });
    });

    // Price Filter Apply
    if (DOM.btnApplyPrice) {
      DOM.btnApplyPrice.addEventListener('click', () => {
        const minVal = parseFloat(DOM.minPriceInput.value);
        const maxVal = parseFloat(DOM.maxPriceInput.value);
        HomeState.minPrice = !isNaN(minVal) ? minVal : null;
        HomeState.maxPrice = !isNaN(maxVal) ? maxVal : null;
        renderHomeCatalog();
      });
    }

    // Checkboxes
    if (DOM.chkOnlyDiscount) {
      DOM.chkOnlyDiscount.addEventListener('change', (e) => {
        HomeState.onlyDiscount = e.target.checked;
        renderHomeCatalog();
      });
    }

    if (DOM.chkOnlyShipping) {
      DOM.chkOnlyShipping.addEventListener('change', (e) => {
        HomeState.onlyFreeShipping = e.target.checked;
        renderHomeCatalog();
      });
    }

    // Sort Select
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        HomeState.sortBy = e.target.value;
        renderHomeCatalog();
      });
    }

    // Grid Column Switchers
    if (DOM.btnGridCols3 && DOM.btnGridCols4) {
      DOM.btnGridCols3.addEventListener('click', () => {
        DOM.btnGridCols3.classList.add('active');
        DOM.btnGridCols4.classList.remove('active');
        DOM.grid.classList.remove('grid-cols-4');
        HomeState.gridCols = 3;
      });

      DOM.btnGridCols4.addEventListener('click', () => {
        DOM.btnGridCols4.classList.add('active');
        DOM.btnGridCols3.classList.remove('active');
        DOM.grid.classList.add('grid-cols-4');
        HomeState.gridCols = 4;
      });
    }

    // Reset All Filters
    if (DOM.btnResetAll) {
      DOM.btnResetAll.addEventListener('click', resetAllFilters);
    }

    // Delegated clicks on Active Chips
    if (DOM.activeChips) {
      DOM.activeChips.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.filter-chip-remove');
        if (removeBtn) {
          removeFilterChip(removeBtn.dataset.type);
        }
      });
    }

    // Delegated clicks on Product Grid (Add to cart, Quickview, Favorite)
    if (DOM.grid) {
      DOM.grid.addEventListener('click', (e) => {
        const btnAdd = e.target.closest('[data-action="add-cart"]');
        if (btnAdd) {
          e.stopPropagation();
          const prodId = btnAdd.dataset.id;
          if (window.GrandeApp) {
            window.GrandeApp.addToCart(prodId);
          } else {
            fallbackAddToCart(prodId);
          }
          return;
        }

        const btnFav = e.target.closest('[data-action="fav"]');
        if (btnFav) {
          e.stopPropagation();
          const prodId = btnFav.dataset.id;
          if (window.GrandeApp) {
            window.GrandeApp.toggleWishlist(prodId);
          } else {
            fallbackToggleWishlist(prodId);
          }
          const wl = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
          const isNowFav = wl.includes(prodId);
          btnFav.classList.toggle('active', isNowFav);
          const svg = btnFav.querySelector('svg');
          if (svg) svg.setAttribute('fill', isNowFav ? '#ef4444' : 'none');
          return;
        }

        const btnQuickView = e.target.closest('[data-action="quickview"]');
        if (btnQuickView) {
          e.stopPropagation();
          openHomeQuickView(btnQuickView.dataset.id);
          return;
        }
      });
    }

    // Close Modal
    if (DOM.btnCloseQuickView) {
      DOM.btnCloseQuickView.addEventListener('click', closeModal);
    }

    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // Initialize Hogar department
  parseUrlParams();
  setupEventListeners();
  renderHomeCatalog();
});
