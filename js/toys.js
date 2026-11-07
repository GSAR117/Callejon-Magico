/**
 * GRANDÉ TIENDA DEPARTAMENTAL - Lógica Departamental: Juguetes, Juegos & Niños
 * Filtros por edad, marca, subcategoría, habilidades, ordenamiento y vista rápida.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State for toys catalog
  const ToysState = {
    subcategory: 'all',
    brand: 'all',
    age: 'all',
    minPrice: null,
    maxPrice: null,
    onlyDiscount: false,
    onlyFreeShipping: false,
    sortBy: 'featured',
    gridCols: 3
  };

  // DOM Elements
  const DOM = {
    grid: document.getElementById('toysProductsGrid'),
    counter: document.getElementById('toysProductCount'),
    activeChips: document.getElementById('activeFilterChips'),
    btnResetAll: document.getElementById('btnResetAllFilters'),
    sortSelect: document.getElementById('sortSelect'),
    brandPills: document.querySelectorAll('.brand-pill-btn'),
    catLinks: document.querySelectorAll('.filter-cat-link'),
    ageBtns: document.querySelectorAll('.age-btn'),
    minPriceInput: document.getElementById('minPriceInput'),
    maxPriceInput: document.getElementById('maxPriceInput'),
    btnApplyPrice: document.getElementById('btnApplyPrice'),
    chkOnlyDiscount: document.getElementById('chkOnlyDiscount'),
    chkOnlyShipping: document.getElementById('chkOnlyShipping'),
    btnGridCols3: document.getElementById('btnGridCols3'),
    btnGridCols4: document.getElementById('btnGridCols4')
  };

  // Read URL query parameters (e.g. ?subcategory=construccion or ?brand=LEGO or ?age=3-5)
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('subcategory')) {
      ToysState.subcategory = params.get('subcategory').toLowerCase();
      updateCategoryLinks();
    }
    if (params.has('brand')) {
      ToysState.brand = params.get('brand');
      updateBrandPills();
    }
    if (params.has('age')) {
      ToysState.age = params.get('age');
      updateAgeBtns();
    }
    if (params.has('discount') && params.get('discount') === 'true') {
      ToysState.onlyDiscount = true;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = true;
    }
  }

  function updateCategoryLinks() {
    DOM.catLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.subcategory === ToysState.subcategory);
    });
  }

  function updateBrandPills() {
    DOM.brandPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.brand.toLowerCase() === ToysState.brand.toLowerCase());
    });
  }

  function updateAgeBtns() {
    DOM.ageBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.age === ToysState.age);
    });
  }

  // Filter toys
  function getFilteredProducts() {
    let list = PRODUCTS_DATA.filter(p => p.category === 'juguetes');

    // Filter by subcategory
    if (ToysState.subcategory !== 'all') {
      list = list.filter(p => p.subcategory === ToysState.subcategory);
    }

    // Filter by brand
    if (ToysState.brand !== 'all') {
      list = list.filter(p => p.brand && p.brand.toLowerCase() === ToysState.brand.toLowerCase());
    }

    // Filter by age
    if (ToysState.age !== 'all') {
      list = list.filter(p => p.age && p.age.toLowerCase().includes(ToysState.age.toLowerCase()));
    }

    // Filter by price range
    if (ToysState.minPrice !== null && !isNaN(ToysState.minPrice)) {
      list = list.filter(p => p.price >= ToysState.minPrice);
    }
    if (ToysState.maxPrice !== null && !isNaN(ToysState.maxPrice)) {
      list = list.filter(p => p.price <= ToysState.maxPrice);
    }

    // Filter by discount only
    if (ToysState.onlyDiscount) {
      list = list.filter(p => p.originalPrice && p.originalPrice > p.price);
    }

    // Filter by free shipping
    if (ToysState.onlyFreeShipping) {
      list = list.filter(p => p.price >= 999 || p.badgeType === 'shipping');
    }

    // Sorting
    switch (ToysState.sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        list.sort((a, b) => {
          const discA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const discB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return discB - discA;
        });
        break;
      default:
        // Featured
        break;
    }

    return list;
  }

  // Render toys catalog
  function renderToysCatalog() {
    if (!DOM.grid) return;

    const products = getFilteredProducts();

    if (DOM.counter) {
      DOM.counter.textContent = products.length;
    }

    renderActiveChips();

    if (products.length === 0) {
      DOM.grid.innerHTML = `
        <div class="toys-empty-state" style="grid-column: 1 / -1;">
          <h4>No encontramos juguetes con estos filtros</h4>
          <p>Prueba ajustando el rango de edad, cambiando de marca o removiendo algún filtro.</p>
          <button class="btn-checkout-primary" id="btnEmptyReset" style="width: auto; padding: 0.75rem 2rem; margin: 0 auto; display: inline-block;">
            Ver toda la Juguetería D'Avanti
          </button>
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
      
      const discountPercentage = isDiscounted 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : 0;

      const originalPriceHtml = isDiscounted 
        ? `<span class="original-price">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` 
        : '';

      const discountTagHtml = isDiscounted 
        ? `<span style="font-size: 0.72rem; font-weight: 700; color: #ef4444; background: #fee2e2; padding: 0.1rem 0.35rem; border-radius: 4px; margin-left: 0.3rem;">-${discountPercentage}%</span>` 
        : '';

      const badgeClass = `badge-${product.badgeType || 'bestseller'}`;

      const msiAmount = (product.price / 18).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      return `
        <article class="product-card toy-product-card" data-id="${product.id}">
          <div class="product-card-top">
            <span class="product-badge ${badgeClass}">${product.badge}</span>
            <button class="btn-favorite-toggle ${isFav ? 'active' : ''}" data-id="${product.id}" title="${isFav ? 'Eliminar de favoritos' : 'Agregar a favoritos'}" aria-label="Favorito">
              <svg viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div class="product-img-wrapper" data-action="quickview" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
            <button class="product-quickview-btn" data-id="${product.id}">Ver Detalles y Jugar</button>
          </div>

          <div class="product-info">
            <span style="font-size: 0.72rem; font-weight: 700; color: #d97706; text-transform: uppercase; letter-spacing: 0.05em;">${product.brand || "Callejón Mágico"}</span>
            <h3 class="product-title" data-action="quickview" data-id="${product.id}">${product.name}</h3>
            
            <div class="product-rating">
              <div class="stars-row">${renderStars(product.rating)}</div>
              <span class="reviews-count">(${product.reviewsCount})</span>
            </div>

            <div class="toy-age-pill-row">
              <span class="toy-age-badge">
                <span>🎯</span> ${product.age || 'Para todas las edades'}
              </span>
              ${product.features && product.features.length > 0 ? `<span class="toy-skill-badge">${truncateText(product.features[0], 25)}</span>` : ''}
            </div>

            ${window.CallejonOffers ? window.CallejonOffers.getOfferCardTimerHtml(product) : ''}

            <div class="product-price-box">
              <span class="current-price ${isDiscounted ? 'discounted' : ''}">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              ${originalPriceHtml}
              ${discountTagHtml}
            </div>

            <div style="font-size: 0.76rem; font-weight: 600; color: #059669; margin-top: 0.2rem; display: flex; align-items: center; gap: 0.25rem;">
              <span>💳</span> Hasta 18 MSI de <strong>$${msiAmount}</strong>
            </div>

            <button class="btn-add-to-cart" data-id="${product.id}" style="margin-top: 0.85rem;">
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

  function truncateText(str, maxLen) {
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

    if (ToysState.subcategory !== 'all') {
      const subLabels = {
        'construccion': 'Construcción & LEGO',
        'figuras': 'Muñecas & Figuras',
        'vehiculos': 'Pistas & Vehículos',
        'juegos-mesa': 'Juegos de Mesa',
        'bebes': 'Bebés & Peluches',
        'didacticos': 'Didácticos & Arte'
      };
      chips.push({
        type: 'subcategory',
        label: subLabels[ToysState.subcategory] || ToysState.subcategory
      });
    }

    if (ToysState.brand !== 'all') {
      chips.push({ type: 'brand', label: `Marca: ${ToysState.brand}` });
    }

    if (ToysState.age !== 'all') {
      chips.push({ type: 'age', label: `Edad: ${ToysState.age}` });
    }

    if (ToysState.minPrice !== null || ToysState.maxPrice !== null) {
      const minText = ToysState.minPrice ? `$${ToysState.minPrice}` : '$0';
      const maxText = ToysState.maxPrice ? `$${ToysState.maxPrice}` : '∞';
      chips.push({ type: 'price', label: `${minText} - ${maxText}` });
    }

    if (ToysState.onlyDiscount) {
      chips.push({ type: 'discount', label: 'Solo Ofertas' });
    }

    if (ToysState.onlyFreeShipping) {
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
      ToysState.subcategory = 'all';
      updateCategoryLinks();
    } else if (type === 'brand') {
      ToysState.brand = 'all';
      updateBrandPills();
    } else if (type === 'age') {
      ToysState.age = 'all';
      updateAgeBtns();
    } else if (type === 'price') {
      ToysState.minPrice = null;
      ToysState.maxPrice = null;
      if (DOM.minPriceInput) DOM.minPriceInput.value = '';
      if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    } else if (type === 'discount') {
      ToysState.onlyDiscount = false;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    } else if (type === 'shipping') {
      ToysState.onlyFreeShipping = false;
      if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;
    }
    renderToysCatalog();
  }

  function resetAllFilters() {
    ToysState.subcategory = 'all';
    ToysState.brand = 'all';
    ToysState.age = 'all';
    ToysState.minPrice = null;
    ToysState.maxPrice = null;
    ToysState.onlyDiscount = false;
    ToysState.onlyFreeShipping = false;

    updateCategoryLinks();
    updateBrandPills();
    updateAgeBtns();

    if (DOM.minPriceInput) DOM.minPriceInput.value = '';
    if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;

    renderToysCatalog();
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

    DOM.grid.querySelectorAll('.btn-favorite-toggle').forEach(btn => {
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

    DOM.grid.querySelectorAll('[data-action="quickview"], .product-quickview-btn').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.dataset.id;
        openToyQuickView(id);
      });
    });
  }

  // Dedicated Toys QuickView Modal
  function openToyQuickView(productId) {
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
          <h5 style="font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">Ficha y Detalles del Juguete:</h5>
          <table class="toy-specs-table">
            <tbody>
              ${Object.entries(product.specs).map(([key, val]) => `
                <tr>
                  <td class="spec-name">${formatToySpecKey(key)}</td>
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
          <img src="${product.image}" alt="${product.name}" class="quickview-img" style="max-height: 440px; object-fit: contain; padding: 1rem;" />
        </div>
        <div class="quickview-details">
          <span class="quickview-dept" style="color: #d97706; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">
            ${product.brand} · ${product.department}
          </span>
          <h2 class="quickview-title" style="font-size: 1.45rem; line-height: 1.3; margin: 0.4rem 0;">${product.name}</h2>
          
          <div class="quickview-rating-row">
            <div class="stars-row">${renderStars(product.rating)}</div>
            <span class="reviews-count">${product.rating} (${product.reviewsCount} opiniones verificadas)</span>
            <span class="quickview-sku">SKU: ${product.sku}</span>
          </div>

          <div style="display: inline-flex; align-items: center; gap: 0.4rem; margin: 0.4rem 0 0.8rem 0;">
            <span class="toy-age-badge" style="font-size: 0.82rem; padding: 0.3rem 0.75rem;">
              <span>🎯</span> Edad Recomendada: <strong>${product.age || 'Todas las edades'}</strong>
            </span>
          </div>

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
              <h5 style="font-size: 0.86rem; font-weight: 700; color: #0f172a; margin-bottom: 0.45rem;">Beneficios y Habilidades:</h5>
              <ul style="font-size: 0.84rem; color: #475569; padding-left: 1.25rem; line-height: 1.6;">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${specsTableHtml}

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin: 1.25rem 0; font-size: 0.82rem; color: #334155;">
            🎁 <strong>Envoltura para regalo gratis</strong> seleccionable al pagar · 🧸 <strong>100% Original Certificado con normas NOM</strong> · 🏬 Recoge hoy en tienda con <strong>Click & Collect</strong>.
          </div>

          <div class="quickview-cta-row" style="display: flex; gap: 0.75rem; align-items: center;">
            <button class="btn-checkout-primary" id="btnToyQuickViewAddToCart" style="height: 50px; font-size: 1rem; flex: 1;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Agregar al Carrito
            </button>
            <button class="btn-favorite-toggle ${isFav ? 'active' : ''}" id="btnToyQuickViewFav" style="width: 50px; height: 50px; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;" title="Guardar en favoritos">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    const btnAdd = modalBody.querySelector('#btnToyQuickViewAddToCart');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (window.GrandeApp) {
          window.GrandeApp.addToCart(product.id);
        } else {
          fallbackAddToCart(product.id);
        }
        closeToyQuickViewModal();
      });
    }

    const btnFav = modalBody.querySelector('#btnToyQuickViewFav');
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

    modalWindow.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
  }

  function formatToySpecKey(key) {
    const map = {
      'piezas': 'Piezas',
      'edad': 'Edad Sugerida',
      'dimensiones': 'Dimensiones',
      'minifiguras': 'Figuras Incluidas',
      'pisos': 'Estructura',
      'lucesSonidos': 'Luces y Sonidos',
      'capacidad': 'Capacidad',
      'mecanismo': 'Mecanismo',
      'altura': 'Altura',
      'jugadores': 'Jugadores',
      'duracion': 'Duración Partida',
      'escala': 'Escala',
      'etapas': 'Etapas de Aprendizaje',
      'canciones': 'Canciones y Frases',
      'material': 'Materiales',
      'articulacion': 'Articulación',
      'accesorios': 'Accesorios',
      'motor': 'Motor',
      'velocidad': 'Velocidad Máxima',
      'bateria': 'Batería',
      'pesoMaximo': 'Peso Soportado',
      'banco': 'Unidad Bancaria',
      'baterias': 'Baterías Requeridas',
      'masa': 'Contenido de Masa',
      'jarabe': 'Compuesto Decorativo',
      'seguridad': 'Seguridad',
      'alcance': 'Alcance de Tiro',
      'dardos': 'Municiones',
      'medidas': 'Medidas Armado',
      'origen': 'País de Fabricación',
      'conversion': 'Pasos de Conversión',
      'apertura': 'Apertura Focal',
      'oculares': 'Aumentos',
      'tripode': 'Trípode',
      'control': 'Frecuencia Control',
      'proteccion': 'Protección Salpicaduras',
      'tamano': 'Tamaño',
      'cuidado': 'Instrucciones de Lavado'
    };
    return map[key] || key;
  }

  function closeToyQuickViewModal() {
    const modalWindow = document.getElementById('quickViewModal');
    const backdrop = document.getElementById('modalBackdrop');
    if (modalWindow) modalWindow.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
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

  function fallbackAddToCart(productId) {
    const p = PRODUCTS_DATA.find(x => x.id === productId);
    if (!p) return;
    const cart = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
    const exist = cart.find(i => i.id === productId);
    if (exist) {
      exist.quantity += 1;
    } else {
      cart.push({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        sku: p.sku,
        size: p.sizes ? p.sizes[0] : null,
        color: p.colors ? p.colors[0] : null,
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
      if (typeof app.showToast === 'function') app.showToast(`"${p.name}" se agregó a tu carrito de compras`, 'cart');
      if (typeof app.openDrawer === 'function') app.openDrawer('cart');
    }
  }

  function fallbackToggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('davanti_wishlist') || localStorage.getItem('grande_wishlist') || '[]');
    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
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

  function setupEventListeners() {
    DOM.brandPills.forEach(pill => {
      pill.addEventListener('click', () => {
        DOM.brandPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        ToysState.brand = pill.dataset.brand;
        renderToysCatalog();
      });
    });

    DOM.catLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.catLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        ToysState.subcategory = link.dataset.subcategory;
        renderToysCatalog();
      });
    });

    DOM.ageBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCurrent = btn.classList.contains('active');
        DOM.ageBtns.forEach(b => b.classList.remove('active'));
        if (!isCurrent) {
          btn.classList.add('active');
          ToysState.age = btn.dataset.age;
        } else {
          ToysState.age = 'all';
        }
        renderToysCatalog();
      });
    });

    if (DOM.btnApplyPrice) {
      DOM.btnApplyPrice.addEventListener('click', () => {
        const minVal = parseFloat(DOM.minPriceInput.value);
        const maxVal = parseFloat(DOM.maxPriceInput.value);
        ToysState.minPrice = isNaN(minVal) ? null : minVal;
        ToysState.maxPrice = isNaN(maxVal) ? null : maxVal;
        renderToysCatalog();
      });
    }

    if (DOM.chkOnlyDiscount) {
      DOM.chkOnlyDiscount.addEventListener('change', () => {
        ToysState.onlyDiscount = DOM.chkOnlyDiscount.checked;
        renderToysCatalog();
      });
    }

    if (DOM.chkOnlyShipping) {
      DOM.chkOnlyShipping.addEventListener('change', () => {
        ToysState.onlyFreeShipping = DOM.chkOnlyShipping.checked;
        renderToysCatalog();
      });
    }

    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        ToysState.sortBy = e.target.value;
        renderToysCatalog();
      });
    }

    if (DOM.btnResetAll) {
      DOM.btnResetAll.addEventListener('click', resetAllFilters);
    }

    if (DOM.btnGridCols3 && DOM.btnGridCols4) {
      DOM.btnGridCols3.addEventListener('click', () => {
        DOM.btnGridCols3.classList.add('active');
        DOM.btnGridCols4.classList.remove('active');
        if (DOM.grid) DOM.grid.classList.remove('grid-4-cols');
      });

      DOM.btnGridCols4.addEventListener('click', () => {
        DOM.btnGridCols4.classList.add('active');
        DOM.btnGridCols3.classList.remove('active');
        if (DOM.grid) DOM.grid.classList.add('grid-4-cols');
      });
    }

    const btnCloseModal = document.getElementById('btnCloseQuickView');
    if (btnCloseModal) {
      btnCloseModal.addEventListener('click', closeToyQuickViewModal);
    }
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', closeToyQuickViewModal);
    }
  }

  parseUrlParams();
  setupEventListeners();
  renderToysCatalog();
});
