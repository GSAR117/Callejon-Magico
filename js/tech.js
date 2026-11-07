/**
 * GRANDÉ TIENDA DEPARTAMENTAL - Lógica Departamental: Tecnología y Electrónica
 * Filtros de telefonía, cómputo, audio, pantallas, gaming, especificaciones técnicas y variantes.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State for tech catalog
  const TechState = {
    subcategory: 'all',
    brand: 'all',
    capacity: 'all',
    minPrice: null,
    maxPrice: null,
    onlyDiscount: false,
    onlyFreeShipping: false,
    sortBy: 'featured',
    gridCols: 3
  };

  // DOM Elements
  const DOM = {
    grid: document.getElementById('techProductsGrid'),
    counter: document.getElementById('techProductCount'),
    activeChips: document.getElementById('activeFilterChips'),
    btnResetAll: document.getElementById('btnResetAllFilters'),
    sortSelect: document.getElementById('sortSelect'),
    brandPills: document.querySelectorAll('.brand-pill-btn'),
    catLinks: document.querySelectorAll('.filter-cat-link'),
    capacityBtns: document.querySelectorAll('.capacity-btn'),
    minPriceInput: document.getElementById('minPriceInput'),
    maxPriceInput: document.getElementById('maxPriceInput'),
    btnApplyPrice: document.getElementById('btnApplyPrice'),
    chkOnlyDiscount: document.getElementById('chkOnlyDiscount'),
    chkOnlyShipping: document.getElementById('chkOnlyShipping'),
    btnGridCols3: document.getElementById('btnGridCols3'),
    btnGridCols4: document.getElementById('btnGridCols4')
  };

  // Read URL query parameters (e.g. ?subcategory=telefonia or ?brand=Apple)
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('subcategory')) {
      TechState.subcategory = params.get('subcategory').toLowerCase();
      updateCategoryLinks();
    }
    if (params.has('brand')) {
      TechState.brand = params.get('brand');
      updateBrandPills();
    }
    if (params.has('capacity')) {
      TechState.capacity = params.get('capacity');
      updateCapacityBtns();
    }
    if (params.has('discount') && params.get('discount') === 'true') {
      TechState.onlyDiscount = true;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = true;
    }
  }

  function updateCategoryLinks() {
    DOM.catLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.subcategory === TechState.subcategory);
    });
  }

  function updateBrandPills() {
    DOM.brandPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.brand.toLowerCase() === TechState.brand.toLowerCase());
    });
  }

  function updateCapacityBtns() {
    DOM.capacityBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.capacity === TechState.capacity);
    });
  }

  // Filter technology products
  function getFilteredProducts() {
    // Only electronic / tech products
    let list = PRODUCTS_DATA.filter(p => p.category === 'electronica');

    // Filter by subcategory
    if (TechState.subcategory !== 'all') {
      list = list.filter(p => p.subcategory === TechState.subcategory);
    }

    // Filter by brand
    if (TechState.brand !== 'all') {
      list = list.filter(p => p.brand && p.brand.toLowerCase() === TechState.brand.toLowerCase());
    }

    // Filter by capacity / size
    if (TechState.capacity !== 'all') {
      list = list.filter(p => p.sizes && p.sizes.some(s => s.toLowerCase().includes(TechState.capacity.toLowerCase())));
    }

    // Filter by price range
    if (TechState.minPrice !== null && !isNaN(TechState.minPrice)) {
      list = list.filter(p => p.price >= TechState.minPrice);
    }
    if (TechState.maxPrice !== null && !isNaN(TechState.maxPrice)) {
      list = list.filter(p => p.price <= TechState.maxPrice);
    }

    // Filter by discount only
    if (TechState.onlyDiscount) {
      list = list.filter(p => p.originalPrice && p.originalPrice > p.price);
    }

    // Filter by free shipping
    if (TechState.onlyFreeShipping) {
      list = list.filter(p => p.price >= 999 || p.badgeType === 'shipping');
    }

    // Sorting
    switch (TechState.sortBy) {
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

  // Render tech catalog
  function renderTechCatalog() {
    if (!DOM.grid) return;

    const products = getFilteredProducts();

    // Update product counter
    if (DOM.counter) {
      DOM.counter.textContent = products.length;
    }

    // Render active filter chips
    renderActiveChips();

    // Empty state
    if (products.length === 0) {
      DOM.grid.innerHTML = `
        <div class="tech-empty-state" style="grid-column: 1 / -1;">
          <h4>No encontramos productos con estos filtros</h4>
          <p>Prueba ajustando el rango de precio, cambiando de marca o removiendo algún filtro.</p>
          <button class="btn-checkout-primary" id="btnEmptyReset" style="width: auto; padding: 0.75rem 2rem; margin: 0 auto; display: inline-block;">
            Ver todo el departamento de Tecnología
          </button>
        </div>
      `;
      const btnReset = document.getElementById('btnEmptyReset');
      if (btnReset) btnReset.addEventListener('click', resetAllFilters);
      return;
    }

    // Read wishlist from localStorage
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

      // Calculate 18 MSI
      const msiAmount = (product.price / 18).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      // Technical pill tags
      let specPillsHtml = '';
      if (product.specs) {
        const specKeys = Object.keys(product.specs);
        const topSpecs = specKeys.slice(0, 2).map(k => product.specs[k]);
        specPillsHtml = `
          <div class="tech-spec-pills-row">
            ${topSpecs.map(s => `<span class="tech-spec-pill" title="${s}">${truncateText(s, 24)}</span>`).join('')}
          </div>
        `;
      } else if (product.features && product.features.length > 0) {
        specPillsHtml = `
          <div class="tech-spec-pills-row">
            <span class="tech-spec-pill">${truncateText(product.features[0], 28)}</span>
          </div>
        `;
      }

      return `
        <article class="product-card tech-product-card" data-id="${product.id}">
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
            <button class="product-quickview-btn" data-id="${product.id}">Ficha y Vista Rápida</button>
          </div>

          <div class="product-info">
            <span style="font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">${product.brand || "Callejón Mágico"}</span>
            <h3 class="product-title" data-action="quickview" data-id="${product.id}">${product.name}</h3>
            
            <div class="product-rating">
              <div class="stars-row">${renderStars(product.rating)}</div>
              <span class="reviews-count">(${product.reviewsCount})</span>
            </div>

            ${specPillsHtml}

            ${window.CallejonOffers ? window.CallejonOffers.getOfferCardTimerHtml(product) : ''}

            <div class="product-price-box">
              <span class="current-price ${isDiscounted ? 'discounted' : ''}">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              ${originalPriceHtml}
              ${discountTagHtml}
            </div>

            <div class="tech-installment-note">
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

    // Attach click listeners to cards
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

    if (TechState.subcategory !== 'all') {
      const subLabels = {
        'telefonia': 'Telefonía Móvil',
        'computo': 'Cómputo & Laptops',
        'pantallas': 'Pantallas & Smart TVs',
        'audio': 'Audio & Sonido',
        'videojuegos': 'Gaming & Consolas',
        'wearables': 'Smartwatches & Wearables',
        'fotografia': 'Fotografía & Drones'
      };
      chips.push({
        type: 'subcategory',
        label: subLabels[TechState.subcategory] || TechState.subcategory
      });
    }

    if (TechState.brand !== 'all') {
      chips.push({ type: 'brand', label: `Marca: ${TechState.brand}` });
    }

    if (TechState.capacity !== 'all') {
      chips.push({ type: 'capacity', label: `Capacidad: ${TechState.capacity}` });
    }

    if (TechState.minPrice !== null || TechState.maxPrice !== null) {
      const minText = TechState.minPrice ? `$${TechState.minPrice}` : '$0';
      const maxText = TechState.maxPrice ? `$${TechState.maxPrice}` : '∞';
      chips.push({ type: 'price', label: `${minText} - ${maxText}` });
    }

    if (TechState.onlyDiscount) {
      chips.push({ type: 'discount', label: 'Solo Ofertas' });
    }

    if (TechState.onlyFreeShipping) {
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
      TechState.subcategory = 'all';
      updateCategoryLinks();
    } else if (type === 'brand') {
      TechState.brand = 'all';
      updateBrandPills();
    } else if (type === 'capacity') {
      TechState.capacity = 'all';
      updateCapacityBtns();
    } else if (type === 'price') {
      TechState.minPrice = null;
      TechState.maxPrice = null;
      if (DOM.minPriceInput) DOM.minPriceInput.value = '';
      if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    } else if (type === 'discount') {
      TechState.onlyDiscount = false;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    } else if (type === 'shipping') {
      TechState.onlyFreeShipping = false;
      if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;
    }
    renderTechCatalog();
  }

  // Reset all filters
  function resetAllFilters() {
    TechState.subcategory = 'all';
    TechState.brand = 'all';
    TechState.capacity = 'all';
    TechState.minPrice = null;
    TechState.maxPrice = null;
    TechState.onlyDiscount = false;
    TechState.onlyFreeShipping = false;

    updateCategoryLinks();
    updateBrandPills();
    updateCapacityBtns();

    if (DOM.minPriceInput) DOM.minPriceInput.value = '';
    if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;

    renderTechCatalog();
  }

  // Attach card events
  function attachCardEvents() {
    DOM.grid.querySelectorAll('.btn-add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const p = PRODUCTS_DATA.find(x => x.id === id);
        if (p && window.GrandeApp) {
          window.GrandeApp.addToCart(id);
        } else {
          // Fallback if GrandeApp is not on window
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
        openTechQuickView(id);
      });
    });
  }

  // Dedicated Tech QuickView Modal with Full Specs
  function openTechQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const modalWindow = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('quickViewBody');
    const backdrop = document.getElementById('modalBackdrop');
    if (!modalWindow || !modalBody) return;

    let selectedCapacity = product.sizes ? product.sizes[0] : null;
    let selectedColor = product.colors ? product.colors[0] : null;

    const isDiscounted = product.originalPrice && product.originalPrice > product.price;
    const discountTagHtml = isDiscounted 
      ? `<span style="font-size: 0.8rem; font-weight: 700; color: #ef4444; background: #fee2e2; padding: 0.2rem 0.5rem; border-radius: 4px; margin-left: 0.5rem;">-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Descuento</span>` 
      : '';

    // Technical specifications table
    let specsTableHtml = '';
    if (product.specs) {
      specsTableHtml = `
        <div style="margin: 1.25rem 0;">
          <h5 style="font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">Ficha Técnica Principal:</h5>
          <table class="tech-specs-table">
            <tbody>
              ${Object.entries(product.specs).map(([key, val]) => `
                <tr>
                  <td class="spec-name">${formatSpecKey(key)}</td>
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
          <span class="quickview-dept" style="color: var(--color-gold); font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">
            ${product.brand} · ${product.department}
          </span>
          <h2 class="quickview-title" style="font-size: 1.45rem; line-height: 1.3; margin: 0.4rem 0;">${product.name}</h2>
          
          <div class="quickview-rating-row">
            <div class="stars-row">${renderStars(product.rating)}</div>
            <span class="reviews-count">${product.rating} (${product.reviewsCount} opiniones verificadas)</span>
            <span class="quickview-sku">SKU: ${product.sku}</span>
          </div>

          <div class="quickview-pricing" style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0;">
            <span class="quickview-current-price" style="font-size: 1.85rem; font-weight: 800; color: #0f172a;">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            ${product.originalPrice ? `<span class="quickview-orig-price" style="text-decoration: line-through; color: #94a3b8; font-size: 1.1rem;">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` : ''}
            ${discountTagHtml}
          </div>

          ${window.CallejonOffers ? window.CallejonOffers.getQuickViewOfferBannerHtml(product) : ''}

          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 0.55rem 0.85rem; margin-bottom: 1rem; font-size: 0.84rem; color: #065f46; display: flex; align-items: center; gap: 0.4rem;">
            <span>⚡</span> <strong>Hasta 18 Mensualidades Sin Intereses de $${msiAmount}</strong> con Tarjeta Callejón Mágico y bancos participantes.
          </div>

          <p class="quickview-desc" style="font-size: 0.9rem; line-height: 1.55; color: #475569;">${product.description}</p>

          ${product.sizes && product.sizes.length > 0 ? `
            <div class="option-group" style="margin-top: 1rem;">
              <h5 class="option-group-title" style="font-size: 0.86rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">Capacidad / Tamaño disponible:</h5>
              <div class="options-pill-list" id="quickViewCapacities">
                ${product.sizes.map((s, idx) => `
                  <button type="button" class="option-pill ${idx === 0 ? 'active' : ''}" data-value="${s}">${s}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${product.colors && product.colors.length > 0 ? `
            <div class="option-group" style="margin-top: 1rem;">
              <h5 class="option-group-title" style="font-size: 0.86rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">Color seleccionado:</h5>
              <div class="options-pill-list" id="quickViewColors">
                ${product.colors.map((c, idx) => `
                  <button type="button" class="option-pill ${idx === 0 ? 'active' : ''}" data-value="${c}">${c}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${specsTableHtml}

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin: 1.25rem 0; font-size: 0.82rem; color: #334155;">
            🛡️ <strong>Garantía oficial de 1 año con fabricante</strong> · 🚚 <strong>Envío Express Gratis</strong> asegurado a todo el país · 🏬 Recoge hoy en tienda con <strong>Click & Collect</strong>.
          </div>

          <div class="quickview-cta-row" style="display: flex; gap: 0.75rem; align-items: center;">
            <button class="btn-checkout-primary" id="btnQuickViewAddToCart" style="height: 50px; font-size: 1rem; flex: 1;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Agregar al Carrito
            </button>
            <button class="btn-favorite-toggle ${isFav ? 'active' : ''}" id="btnQuickViewFav" style="width: 50px; height: 50px; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;" title="Guardar en favoritos">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Capacity click handlers
    const capPills = modalBody.querySelectorAll('#quickViewCapacities .option-pill');
    capPills.forEach(pill => {
      pill.addEventListener('click', () => {
        capPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedCapacity = pill.dataset.value;
      });
    });

    // Color click handlers
    const colPills = modalBody.querySelectorAll('#quickViewColors .option-pill');
    colPills.forEach(pill => {
      pill.addEventListener('click', () => {
        colPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedColor = pill.dataset.value;
      });
    });

    // Add to cart inside modal
    const btnAdd = modalBody.querySelector('#btnQuickViewAddToCart');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (window.GrandeApp) {
          window.GrandeApp.addToCart(product.id, selectedCapacity, selectedColor);
        } else {
          fallbackAddToCart(product.id, selectedCapacity, selectedColor);
        }
        closeQuickViewModal();
      });
    }

    // Toggle fav inside modal
    const btnFav = modalBody.querySelector('#btnQuickViewFav');
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

  function formatSpecKey(key) {
    const map = {
      'pantalla': 'Pantalla',
      'procesador': 'Procesador',
      'camara': 'Cámara',
      'bateria': 'Batería',
      'conectividad': 'Conectividad',
      'memoria': 'Memoria RAM',
      'puertos': 'Puertos',
      'resolucion': 'Resolución',
      'sistema': 'Sistema Operativo',
      'audio': 'Sonido',
      'panel': 'Tipo de Panel',
      'tasaRefresco': 'Frecuencia',
      'gaming': 'Gaming',
      'cancelacion': 'Cancelación de Ruido',
      'autonomia': 'Autonomía',
      'llamadas': 'Micrófonos',
      'peso': 'Peso',
      'chip': 'Chip',
      'resistencia': 'Protección',
      'almacenamiento': 'Almacenamiento',
      'modos': 'Modos de Juego',
      'caja': 'Material de Caja',
      'sensores': 'Sensores de Salud',
      'salud': 'Métricas de Salud',
      'sueno': 'Monitoreo de Sueño',
      'grafica': 'Tarjeta Gráfica',
      'refrigeracion': 'Refrigeración',
      'altavoces': 'Configuración de Bocinas',
      'calibracion': 'Calibración Acústica',
      'control': 'Control y Asistente',
      'sensor': 'Sensor de Imagen',
      'video': 'Grabación de Video',
      'disparo': 'Velocidad de Ráfaga',
      'transmision': 'Alcance de Transmisión',
      'seguridad': 'Seguridad en Vuelo',
      'iluminacion': 'Efectos RGB',
      'sonido': 'Configuración Acústica',
      'carga': 'Carga Bidireccional',
      'teclado': 'Teclado',
      'touchpad': 'Panel Táctil'
    };
    return map[key] || key;
  }

  function closeQuickViewModal() {
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

  // Fallback add to cart / wishlist if app.js is initialized independently
  function fallbackAddToCart(productId, size = null, color = null) {
    const p = PRODUCTS_DATA.find(x => x.id === productId);
    if (!p) return;
    const cart = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
    const selectedSize = size || (p.sizes ? p.sizes[0] : null);
    const selectedColor = color || (p.colors ? p.colors[0] : null);

    const exist = cart.find(i => i.id === productId && i.size === selectedSize && i.color === selectedColor);
    if (exist) {
      exist.quantity += 1;
    } else {
      cart.push({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        sku: p.sku,
        size: selectedSize,
        color: selectedColor,
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

  // Setup Event Listeners
  function setupEventListeners() {
    // Brand pills
    DOM.brandPills.forEach(pill => {
      pill.addEventListener('click', () => {
        DOM.brandPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        TechState.brand = pill.dataset.brand;
        renderTechCatalog();
      });
    });

    // Subcategories in sidebar
    DOM.catLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.catLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        TechState.subcategory = link.dataset.subcategory;
        renderTechCatalog();
      });
    });

    // Capacity buttons
    DOM.capacityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCurrent = btn.classList.contains('active');
        DOM.capacityBtns.forEach(b => b.classList.remove('active'));
        if (!isCurrent) {
          btn.classList.add('active');
          TechState.capacity = btn.dataset.capacity;
        } else {
          TechState.capacity = 'all';
        }
        renderTechCatalog();
      });
    });

    // Price Apply button
    if (DOM.btnApplyPrice) {
      DOM.btnApplyPrice.addEventListener('click', () => {
        const minVal = parseFloat(DOM.minPriceInput.value);
        const maxVal = parseFloat(DOM.maxPriceInput.value);
        TechState.minPrice = isNaN(minVal) ? null : minVal;
        TechState.maxPrice = isNaN(maxVal) ? null : maxVal;
        renderTechCatalog();
      });
    }

    // Only Discount checkbox
    if (DOM.chkOnlyDiscount) {
      DOM.chkOnlyDiscount.addEventListener('change', () => {
        TechState.onlyDiscount = DOM.chkOnlyDiscount.checked;
        renderTechCatalog();
      });
    }

    // Only Free Shipping checkbox
    if (DOM.chkOnlyShipping) {
      DOM.chkOnlyShipping.addEventListener('change', () => {
        TechState.onlyFreeShipping = DOM.chkOnlyShipping.checked;
        renderTechCatalog();
      });
    }

    // Sort select
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        TechState.sortBy = e.target.value;
        renderTechCatalog();
      });
    }

    // Reset All button
    if (DOM.btnResetAll) {
      DOM.btnResetAll.addEventListener('click', resetAllFilters);
    }

    // Grid columns switcher (3 cols vs 4 cols)
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

    // Modal close and backdrop
    const btnCloseModal = document.getElementById('btnCloseQuickView');
    if (btnCloseModal) {
      btnCloseModal.addEventListener('click', closeQuickViewModal);
    }
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', closeQuickViewModal);
    }
  }


  // Initialize
  parseUrlParams();
  setupEventListeners();
  renderTechCatalog();
});
