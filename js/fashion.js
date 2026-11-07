/**
 * GRANDÉ TIENDA DEPARTAMENTAL - Lógica Departamental: Moda y Ropa
 * Filtros avanzados de moda, selección por género, talla, color, marcas y ordenamiento.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State for fashion filtering
  const FashionState = {
    gender: 'all',
    subcategory: 'all',
    brand: 'all',
    size: 'all',
    color: 'all',
    minPrice: null,
    maxPrice: null,
    onlyDiscount: false,
    sortBy: 'featured',
    gridCols: 3
  };

  // DOM Elements
  const DOM = {
    grid: document.getElementById('fashionProductsGrid'),
    counter: document.getElementById('fashionProductCount'),
    activeChips: document.getElementById('activeFilterChips'),
    btnResetAll: document.getElementById('btnResetAllFilters'),
    sortSelect: document.getElementById('sortSelect'),
    genderBtns: document.querySelectorAll('.gender-btn'),
    brandPills: document.querySelectorAll('.brand-pill-btn'),
    catLinks: document.querySelectorAll('.filter-cat-link'),
    sizeBtns: document.querySelectorAll('.size-btn'),
    colorSwatches: document.querySelectorAll('.color-swatch-circle'),
    minPriceInput: document.getElementById('minPriceInput'),
    maxPriceInput: document.getElementById('maxPriceInput'),
    btnApplyPrice: document.getElementById('btnApplyPrice'),
    chkOnlyDiscount: document.getElementById('chkOnlyDiscount'),
    btnGridCols3: document.getElementById('btnGridCols3'),
    btnGridCols4: document.getElementById('btnGridCols4')
  };

  // Read URL query parameters (e.g. ?gender=hombre or ?subcategory=vestidos)
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('gender')) {
      FashionState.gender = params.get('gender').toLowerCase();
      updateGenderBtns();
    }
    if (params.has('subcategory')) {
      FashionState.subcategory = params.get('subcategory').toLowerCase();
    }
    if (params.has('brand')) {
      FashionState.brand = params.get('brand');
      updateBrandPills();
    }
  }

  function updateGenderBtns() {
    DOM.genderBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.gender === FashionState.gender);
    });
  }

  function updateBrandPills() {
    DOM.brandPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.brand === FashionState.brand);
    });
  }

  // Filter fashion products
  function getFilteredProducts() {
    // Only fashion / apparel products
    let list = PRODUCTS_DATA.filter(p => p.category === 'ropa');

    // Filter by gender
    if (FashionState.gender !== 'all') {
      list = list.filter(p => p.gender === FashionState.gender || p.gender === 'unisex');
    }

    // Filter by subcategory
    if (FashionState.subcategory !== 'all') {
      list = list.filter(p => p.subcategory === FashionState.subcategory);
    }

    // Filter by brand
    if (FashionState.brand !== 'all') {
      list = list.filter(p => p.brand.toLowerCase().includes(FashionState.brand.toLowerCase()));
    }

    // Filter by size
    if (FashionState.size !== 'all') {
      list = list.filter(p => p.sizes && p.sizes.some(s => s.toLowerCase().includes(FashionState.size.toLowerCase())));
    }

    // Filter by color
    if (FashionState.color !== 'all') {
      list = list.filter(p => p.colors && p.colors.some(c => c.toLowerCase().includes(FashionState.color.toLowerCase())));
    }

    // Filter by price range
    if (FashionState.minPrice !== null && !isNaN(FashionState.minPrice)) {
      list = list.filter(p => p.price >= FashionState.minPrice);
    }
    if (FashionState.maxPrice !== null && !isNaN(FashionState.maxPrice)) {
      list = list.filter(p => p.price <= FashionState.maxPrice);
    }

    // Filter by discount
    if (FashionState.onlyDiscount) {
      list = list.filter(p => p.originalPrice !== null || p.badgeType === 'offer');
    }

    // Sort
    if (FashionState.sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (FashionState.sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (FashionState.sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (FashionState.sortBy === 'newest') {
      list.sort((a, b) => (b.badgeType === 'new' ? 1 : 0) - (a.badgeType === 'new' ? 1 : 0));
    }

    return list;
  }

  // Render Grid
  function renderFashionCatalog() {
    const products = getFilteredProducts();

    // Update Counter
    if (DOM.counter) {
      DOM.counter.innerHTML = `Mostrando <strong>${products.length}</strong> artículos en Moda y Ropa`;
    }

    // Render Active Filter Chips
    renderFilterChips();

    if (!DOM.grid) return;

    if (products.length === 0) {
      DOM.grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #ffffff; border-radius: var(--radius-md); border: 1px dashed #d1d5db;">
          <svg style="width: 52px; height: 52px; color: #9ca3af; margin: 0 auto 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem;">No encontramos prendas con los filtros seleccionados</h3>
          <p style="font-size: 0.9rem; color: #6b7280; margin-bottom: 1.5rem;">Prueba modificando las tallas, colores o rango de precio.</p>
          <button class="btn-checkout-primary" id="btnResetFiltersEmpty" style="max-width: 200px; margin: 0 auto;">Limpiar filtros</button>
        </div>
      `;
      const btnEmptyReset = document.getElementById('btnResetFiltersEmpty');
      if (btnEmptyReset) btnEmptyReset.addEventListener('click', resetAllFilters);
      return;
    }

    const savedWishlist = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');

    DOM.grid.innerHTML = products.map(product => {
      const isFav = savedWishlist.includes(product.id);
      const isDiscounted = product.originalPrice ? 'discounted' : '';
      const originalPriceHtml = product.originalPrice 
        ? `<span class="original-price">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` 
        : '';
      const badgeClass = `badge-${product.badgeType || 'bestseller'}`;

      // Color swatches if present
      const swatchesHtml = product.colorHex ? `
        <div class="card-color-swatches" title="Colores disponibles">
          ${product.colorHex.map(hex => `<span class="mini-swatch" style="background-color: ${hex};"></span>`).join('')}
          <span style="font-size: 0.72rem; color: #9ca3af; margin-left: 2px;">+${product.colors ? product.colors.length : 1}</span>
        </div>
      ` : '';

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-card-top">
            <span class="product-badge ${badgeClass}">${product.badge}</span>
            <button class="btn-favorite-toggle ${isFav ? 'active' : ''}" data-id="${product.id}" title="${isFav ? 'Eliminar de favoritos' : 'Agregar a favoritos'}" aria-label="Favorito">
              <svg viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div class="product-img-wrapper" data-action="quickview" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
            <button class="product-quickview-btn" data-id="${product.id}">Vista rápida</button>
          </div>

          <div class="product-info">
            <span class="product-brand-tag">${product.brand || "Callejón Mágico"}</span>
            <h3 class="product-title" data-action="quickview" data-id="${product.id}">${product.name}</h3>
            
            ${swatchesHtml}

            <div class="product-rating">
              <div class="stars-row">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <span class="reviews-count">${product.rating} (${product.reviewsCount})</span>
            </div>

            ${window.CallejonOffers ? window.CallejonOffers.getOfferCardTimerHtml(product) : ''}

            <div class="product-price-box">
              <span class="current-price ${isDiscounted}">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              ${originalPriceHtml}
            </div>

            <button class="btn-add-to-cart" data-id="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Agregar al carrito
            </button>
          </div>
        </article>
      `;
    }).join('');

    attachCardEvents();
  }

  // Attach card event listeners (Add to Cart, QuickView, Favorite)
  function attachCardEvents() {
    if (!DOM.grid) return;

    DOM.grid.querySelectorAll('.btn-add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const app = window.GrandeApp || window.DavantiApp || window.CallejonApp;
        if (app && typeof app.addToCart === 'function') {
          app.addToCart(id);
        } else {
          fallbackAddToCart(id);
        }
      });
    });

    DOM.grid.querySelectorAll('.btn-favorite-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const app = window.GrandeApp || window.DavantiApp || window.CallejonApp;
        if (app && typeof app.toggleWishlist === 'function') {
          app.toggleWishlist(id);
        } else {
          fallbackToggleWishlist(id);
        }
        const wl = JSON.parse(localStorage.getItem('davanti_wishlist') || localStorage.getItem('grande_wishlist') || '[]');
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
        const app = window.GrandeApp || window.DavantiApp || window.CallejonApp;
        if (app && typeof app.openQuickView === 'function') {
          app.openQuickView(id);
        }
      });
    });
  }

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
      if (typeof app.showToast === 'function') app.showToast(`"${product.name}" se agregó a tu carrito de compras`, 'cart');
      if (typeof app.openDrawer === 'function') app.openDrawer('cart');
    }
  }

  function fallbackToggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('davanti_wishlist') || localStorage.getItem('grande_wishlist') || '[]');
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
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

  // Active filter chips
  function renderFilterChips() {
    if (!DOM.activeChips) return;
    const chips = [];

    if (FashionState.gender !== 'all') {
      chips.push({ key: 'gender', label: `Género: ${capitalize(FashionState.gender)}` });
    }
    if (FashionState.subcategory !== 'all') {
      chips.push({ key: 'subcategory', label: `Tipo: ${capitalize(FashionState.subcategory)}` });
    }
    if (FashionState.brand !== 'all') {
      chips.push({ key: 'brand', label: `Marca: ${FashionState.brand}` });
    }
    if (FashionState.size !== 'all') {
      chips.push({ key: 'size', label: `Talla: ${FashionState.size}` });
    }
    if (FashionState.color !== 'all') {
      chips.push({ key: 'color', label: `Color: ${capitalize(FashionState.color)}` });
    }
    if (FashionState.minPrice !== null || FashionState.maxPrice !== null) {
      chips.push({ key: 'price', label: `Precio: $${FashionState.minPrice || 0} - $${FashionState.maxPrice || 'Max'}` });
    }
    if (FashionState.onlyDiscount) {
      chips.push({ key: 'discount', label: 'Solo Ofertas' });
    }

    if (chips.length === 0) {
      DOM.activeChips.innerHTML = '';
      if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'none';
      return;
    }

    if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'inline';

    DOM.activeChips.innerHTML = chips.map(chip => `
      <span class="filter-chip">
        ${chip.label}
        <span class="filter-chip-remove" onclick="window.removeFashionFilter('${chip.key}')">&times;</span>
      </span>
    `).join('');
  }

  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Remove individual filter
  window.removeFashionFilter = function(key) {
    if (key === 'gender') {
      FashionState.gender = 'all';
      updateGenderBtns();
    } else if (key === 'subcategory') {
      FashionState.subcategory = 'all';
      DOM.catLinks.forEach(l => l.classList.remove('active'));
    } else if (key === 'brand') {
      FashionState.brand = 'all';
      updateBrandPills();
    } else if (key === 'size') {
      FashionState.size = 'all';
      DOM.sizeBtns.forEach(b => b.classList.remove('active'));
    } else if (key === 'color') {
      FashionState.color = 'all';
      DOM.colorSwatches.forEach(c => c.classList.remove('active'));
    } else if (key === 'price') {
      FashionState.minPrice = null;
      FashionState.maxPrice = null;
      if (DOM.minPriceInput) DOM.minPriceInput.value = '';
      if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    } else if (key === 'discount') {
      FashionState.onlyDiscount = false;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    }
    renderFashionCatalog();
  };

  // Reset all filters
  function resetAllFilters() {
    FashionState.gender = 'all';
    FashionState.subcategory = 'all';
    FashionState.brand = 'all';
    FashionState.size = 'all';
    FashionState.color = 'all';
    FashionState.minPrice = null;
    FashionState.maxPrice = null;
    FashionState.onlyDiscount = false;

    updateGenderBtns();
    updateBrandPills();
    DOM.catLinks.forEach(l => l.classList.remove('active'));
    DOM.sizeBtns.forEach(b => b.classList.remove('active'));
    DOM.colorSwatches.forEach(c => c.classList.remove('active'));
    if (DOM.minPriceInput) DOM.minPriceInput.value = '';
    if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;

    renderFashionCatalog();
  }

  // Setup listeners
  function setupEventListeners() {
    // Gender buttons
    DOM.genderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.genderBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        FashionState.gender = btn.dataset.gender;
        renderFashionCatalog();
      });
    });

    // Brand pills
    DOM.brandPills.forEach(pill => {
      pill.addEventListener('click', () => {
        DOM.brandPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        FashionState.brand = pill.dataset.brand;
        renderFashionCatalog();
      });
    });

    // Subcategories list in sidebar
    DOM.catLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.catLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        FashionState.subcategory = link.dataset.subcategory;
        renderFashionCatalog();
      });
    });

    // Size selector
    DOM.sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCurrent = btn.classList.contains('active');
        DOM.sizeBtns.forEach(b => b.classList.remove('active'));
        if (!isCurrent) {
          btn.classList.add('active');
          FashionState.size = btn.dataset.size;
        } else {
          FashionState.size = 'all';
        }
        renderFashionCatalog();
      });
    });

    // Color Swatches
    DOM.colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        const isCurrent = swatch.classList.contains('active');
        DOM.colorSwatches.forEach(s => s.classList.remove('active'));
        if (!isCurrent) {
          swatch.classList.add('active');
          FashionState.color = swatch.dataset.color;
        } else {
          FashionState.color = 'all';
        }
        renderFashionCatalog();
      });
    });

    // Price Apply
    if (DOM.btnApplyPrice) {
      DOM.btnApplyPrice.addEventListener('click', () => {
        const minVal = parseFloat(DOM.minPriceInput.value);
        const maxVal = parseFloat(DOM.maxPriceInput.value);
        FashionState.minPrice = isNaN(minVal) ? null : minVal;
        FashionState.maxPrice = isNaN(maxVal) ? null : maxVal;
        renderFashionCatalog();
      });
    }

    // Only Discount Checkbox
    if (DOM.chkOnlyDiscount) {
      DOM.chkOnlyDiscount.addEventListener('change', () => {
        FashionState.onlyDiscount = DOM.chkOnlyDiscount.checked;
        renderFashionCatalog();
      });
    }

    // Sort Dropdown
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        FashionState.sortBy = e.target.value;
        renderFashionCatalog();
      });
    }

    // Reset All button
    if (DOM.btnResetAll) {
      DOM.btnResetAll.addEventListener('click', resetAllFilters);
    }

    // Grid Columns switch (3 cols vs 4 cols)
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
  }

  // Initialize
  parseUrlParams();
  setupEventListeners();
  renderFashionCatalog();
});
