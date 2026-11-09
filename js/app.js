/**
 * GRANDÉ TIENDA DEPARTAMENTAL - Interactive Application Logic
 * State management, cart, wishlist, slider, filters, modals, and checkout.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  function loadInitialCart() {
    try {
      const d = JSON.parse(localStorage.getItem('davanti_cart') || '[]');
      const g = JSON.parse(localStorage.getItem('grande_cart') || '[]');
      if (Array.isArray(d) && d.length > 0) return d;
      if (Array.isArray(g) && g.length > 0) return g;
    } catch (e) {}
    return [];
  }

  function loadInitialWishlist() {
    try {
      const d = JSON.parse(localStorage.getItem('davanti_wishlist') || '[]');
      const g = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
      if (Array.isArray(d) && d.length > 0) return d;
      if (Array.isArray(g) && g.length > 0) return g;
    } catch (e) {}
    return [];
  }

  const State = {
    cart: loadInitialCart(),
    wishlist: loadInitialWishlist(),
    activeCategory: 'all',
    activeFilter: 'all',
    currentSlide: 0,
    searchQuery: '',
    freeShippingThreshold: 999.00
  };

  // ==========================================
  // DOM REFERENCES
  // ==========================================
  const DOM = {
    // Badges & Counters
    cartCount: document.getElementById('cartBadgeCount'),
    wishlistCount: document.getElementById('wishlistBadgeCount'),
    
    // Grid & Containers
    productsGrid: document.getElementById('productsGrid'),
    categoryCircles: document.querySelectorAll('.category-circle-card'),
    filterTabs: document.querySelectorAll('.filter-tab-btn'),
    navCategoryLinks: document.querySelectorAll('.nav-link-item'),
    
    // Search
    searchInput: document.getElementById('searchInput'),
    searchForm: document.getElementById('searchForm'),
    searchResults: document.getElementById('searchResultsDropdown'),
    
    // MegaMenu
    btnMegaMenu: document.getElementById('btnAllCategories'),
    megaMenuPanel: document.getElementById('megaMenuPanel'),
    
    // Drawers & Modals
    backdrop: document.getElementById('modalBackdrop'),
    cartDrawer: document.getElementById('cartDrawer'),
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    quickViewModal: document.getElementById('quickViewModal'),
    checkoutModal: document.getElementById('checkoutModal'),
    
    // Drawer buttons
    btnOpenCart: document.getElementById('btnOpenCart'),
    btnCloseCart: document.getElementById('btnCloseCart'),
    btnOpenWishlist: document.getElementById('btnOpenWishlist'),
    btnCloseWishlist: document.getElementById('btnCloseWishlist'),
    btnCloseQuickView: document.getElementById('btnCloseQuickView'),
    btnCloseCheckout: document.getElementById('btnCloseCheckout'),
    btnProceedCheckout: document.getElementById('btnProceedCheckout'),
    
    // Cart contents
    cartItemsList: document.getElementById('cartItemsList'),
    cartEmptyState: document.getElementById('cartEmptyState'),
    cartSummaryBox: document.getElementById('cartSummaryBox'),
    cartSubtotalText: document.getElementById('cartSubtotalText'),
    cartShippingText: document.getElementById('cartShippingText'),
    cartTotalText: document.getElementById('cartTotalText'),
    shippingMeterText: document.getElementById('shippingMeterText'),
    shippingProgressFill: document.getElementById('shippingProgressFill'),
    
    // Wishlist contents
    wishlistItemsList: document.getElementById('wishlistItemsList'),
    wishlistEmptyState: document.getElementById('wishlistEmptyState'),
    
    // Slider
    heroSlides: document.querySelectorAll('.hero-slide'),
    heroDots: document.querySelectorAll('.hero-dot'),
    btnPrevSlide: document.getElementById('btnPrevSlide'),
    btnNextSlide: document.getElementById('btnNextSlide'),
    
    // Quickview modal container
    quickViewBody: document.getElementById('quickViewBody'),
    
    // Checkout form
    checkoutForm: document.getElementById('checkoutForm'),
    
    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // ==========================================
  // INITIALIZATION
  // ==========================================
  function init() {
    try { setupEventListeners(); } catch (e) { console.error('Error setupEventListeners:', e); }
    try { setupSearchClearButton(); } catch (e) { console.error('Error setupSearchClearButton:', e); }
    try { checkUrlSearchParams(); } catch (e) { console.error('Error checkUrlSearchParams:', e); }
    try { renderProducts(); } catch (e) { console.error('Error renderProducts:', e); }
    try { updateCartUI(); } catch (e) { console.error('Error updateCartUI:', e); }
    try { updateWishlistUI(); } catch (e) { console.error('Error updateWishlistUI:', e); }
    try { setupSlider(); } catch (e) { console.error('Error setupSlider:', e); }

    if (State.searchQuery && DOM.productsGrid) {
      setTimeout(() => {
        const target = document.getElementById('searchActiveBanner') || document.getElementById('productos-destacados') || DOM.productsGrid;
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }
  }

  function checkUrlSearchParams() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const q = urlParams.get('search');
      if (q && q.trim()) {
        State.searchQuery = q.trim();
        if (DOM.searchInput) {
          DOM.searchInput.value = q.trim();
        }
      }
    } catch (e) {}
  }

  // ==========================================
  // PRODUCT RENDERING
  // ==========================================
  function renderProducts() {
    let filtered = PRODUCTS_DATA;

    // Filter by search query if active
    if (State.searchQuery) {
      filtered = filtered.filter(p => productMatchesQuery(p, State.searchQuery));
      filtered.sort((a, b) => rankProduct(b, State.searchQuery) - rankProduct(a, State.searchQuery));
    }

    // Filter by category or special filter
    if (State.activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === State.activeCategory);
    }

    if (State.activeFilter === 'bestseller') {
      filtered = filtered.filter(p => p.badgeType === 'bestseller');
    } else if (State.activeFilter === 'offer') {
      filtered = filtered.filter(p => p.badgeType === 'offer' || p.originalPrice !== null);
    } else if (State.activeFilter === 'new') {
      filtered = filtered.filter(p => p.badgeType === 'new');
    } else if (State.activeFilter === 'shipping') {
      filtered = filtered.filter(p => p.badgeType === 'shipping');
    }

    // Sync Search Banner above products on index.html
    if (DOM.productsGrid) {
      const existingBanner = document.getElementById('searchActiveBanner');
      if (State.searchQuery) {
        if (!existingBanner) {
          const banner = document.createElement('div');
          banner.className = 'search-active-banner';
          banner.id = 'searchActiveBanner';
          banner.innerHTML = `
            <div class="search-banner-left">
              <span class="search-badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <div>
                <div class="search-banner-title">Resultados para: <strong>"${escapeHtml(State.searchQuery)}"</strong></div>
                <div class="search-banner-subtitle">Se encontraron <strong>${filtered.length}</strong> ${filtered.length === 1 ? 'producto' : 'productos'} en el catálogo</div>
              </div>
            </div>
            <button type="button" class="btn-clear-search-banner" id="btnClearSearchBanner">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Limpiar búsqueda
            </button>
          `;
          DOM.productsGrid.parentNode.insertBefore(banner, DOM.productsGrid);
          const clearBtn = banner.querySelector('#btnClearSearchBanner');
          if (clearBtn) clearBtn.addEventListener('click', clearSearch);
        } else {
          existingBanner.querySelector('.search-banner-title').innerHTML = `Resultados para: <strong>"${escapeHtml(State.searchQuery)}"</strong>`;
          existingBanner.querySelector('.search-banner-subtitle').innerHTML = `Se encontraron <strong>${filtered.length}</strong> ${filtered.length === 1 ? 'producto' : 'productos'} en el catálogo`;
        }
      } else if (existingBanner) {
        existingBanner.remove();
      }
    }

    if (!DOM.productsGrid) return;

    if (filtered.length === 0) {
      if (State.searchQuery) {
        DOM.productsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #6b7280;">
            <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
            <p style="font-size: 1.2rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem;">
              No se encontraron productos para "${escapeHtml(State.searchQuery)}"
            </p>
            <p style="font-size: 0.92rem; margin-bottom: 1.5rem;">
              Revisa la ortografía o intenta buscar por categoría, marca o términos generales (ej. <em>Samsung, Pantalla, Sofá, Cafetera</em>).
            </p>
            <button class="filter-tab-btn" id="btnEmptyResetSearch" style="margin: 0 auto; background: var(--color-gold); color: #111827; font-weight: 600; padding: 0.65rem 1.6rem; border-radius: 9999px;">
              Ver todo el catálogo
            </button>
          </div>
        `;
        const resetBtn = DOM.productsGrid.querySelector('#btnEmptyResetSearch');
        if (resetBtn) resetBtn.addEventListener('click', clearSearch);
      } else {
        DOM.productsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #6b7280;">
            <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">No se encontraron productos en esta sección.</p>
            <button class="filter-tab-btn" onclick="document.querySelector('.filter-tab-btn[data-filter=\\'all\\']').click()">Ver todos los productos</button>
          </div>
        `;
      }
      return;
    }

    DOM.productsGrid.innerHTML = filtered.map(product => {
      const isFav = State.wishlist.includes(product.id);
      const originalPriceHtml = product.originalPrice 
        ? `<span class="original-price">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` 
        : '';
      const isDiscounted = product.originalPrice ? 'discounted' : '';
      
      const badgeClass = `badge-${product.badgeType || 'bestseller'}`;

      return `
        <article class="product-card" data-id="${product.id}">
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
            <button class="product-quickview-btn" data-id="${product.id}">Vista rápida</button>
          </div>

          <div class="product-info">
            <h3 class="product-title" data-action="quickview" data-id="${product.id}">${product.name}</h3>
            
            <div class="product-rating">
              <div class="stars-row">
                ${renderStars(product.rating)}
              </div>
              <span class="reviews-count">(${product.reviewsCount})</span>
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
  }

  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      starsHtml += `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
    return starsHtml;
  }

  // ==========================================
  // CART OPERATIONS & UI
  // ==========================================
  function addToCart(productId, selectedSize = null, selectedColor = null, quantity = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const size = selectedSize || (product.sizes ? product.sizes[0] : null);
    const color = selectedColor || (product.colors ? product.colors[0] : null);

    // Sync State.cart with latest localStorage if changed elsewhere
    try {
      const stored = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
      if (Array.isArray(stored) && stored.length > State.cart.length) {
        State.cart = stored;
      }
    } catch (e) {}

    const existingIndex = State.cart.findIndex(item => 
      item.id === productId && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      State.cart[existingIndex].quantity += quantity;
    } else {
      State.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        sku: product.sku,
        size: size,
        color: color,
        quantity: quantity
      });
    }

    saveCart();
    updateCartUI();
    showToast(`"${product.name}" se agregó a tu carrito de compras`, 'cart');
    openDrawer('cart');
  }

  function updateCartQuantity(index, delta) {
    if (!State.cart[index]) return;
    State.cart[index].quantity += delta;
    if (State.cart[index].quantity <= 0) {
      State.cart.splice(index, 1);
      showToast('Producto eliminado del carrito');
    }
    saveCart();
    updateCartUI();
  }

  function removeCartItem(index) {
    if (!State.cart[index]) return;
    const removedName = State.cart[index].name;
    State.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Se eliminó "${removedName}" del carrito`);
  }

  function saveCart() {
    localStorage.setItem('davanti_cart', JSON.stringify(State.cart));
    localStorage.setItem('grande_cart', JSON.stringify(State.cart));
    window.dispatchEvent(new Event('storage'));
  }

  function updateCartUI() {
    const totalItems = State.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= State.freeShippingThreshold || subtotal === 0 ? 0 : 149.00;
    const netSubtotal = Math.round((subtotal / 1.16) * 100) / 100;
    const iva = Math.round((subtotal - netSubtotal) * 100) / 100;
    const total = subtotal + shipping;

    // Update Header Badge
    if (DOM.cartCount) {
      DOM.cartCount.textContent = totalItems;
      DOM.cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Free Shipping Meter Calculation
    if (DOM.shippingMeterText && DOM.shippingProgressFill) {
      if (subtotal >= State.freeShippingThreshold) {
        DOM.shippingMeterText.innerHTML = `<span>¡Felicidades! Tienes <strong>Envío Gratis</strong></span>`;
        DOM.shippingProgressFill.style.width = '100%';
      } else {
        const remaining = State.freeShippingThreshold - subtotal;
        const percent = Math.min(100, Math.round((subtotal / State.freeShippingThreshold) * 100));
        DOM.shippingMeterText.innerHTML = `<span>Agrega <strong>$${remaining.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</strong> más para obtener <strong>Envío Gratis</strong></span>`;
        DOM.shippingProgressFill.style.width = `${percent}%`;
      }
    }

    // Render Cart Drawer Content
    if (!DOM.cartItemsList) return;

    if (State.cart.length === 0) {
      DOM.cartItemsList.style.display = 'none';
      if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'flex';
      if (DOM.cartSummaryBox) DOM.cartSummaryBox.style.display = 'none';
    } else {
      DOM.cartItemsList.style.display = 'flex';
      if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'none';
      if (DOM.cartSummaryBox) DOM.cartSummaryBox.style.display = 'block';

      const itemsHtml = State.cart.map((item, index) => `
        <div class="cart-item" data-cart-index="${index}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <div class="cart-item-header-row">
              <h4 class="cart-item-title">${item.name}</h4>
              <button type="button" class="cart-item-delete-btn" onclick="window.appCartRemove(${index})" title="Eliminar este producto" aria-label="Eliminar ${escapeHtml(item.name)} del carrito">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
            <div class="cart-item-meta">
              ${item.size ? `<span>Opción: ${item.size}</span>` : ''}
              ${item.color ? `<span> · ${item.color}</span>` : ''}
            </div>
            <div class="cart-item-price-row">
              <span class="cart-item-price">$${(item.price * item.quantity).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              <div class="cart-qty-controls">
                <button class="cart-qty-btn" onclick="window.appCartQty(${index}, -1)" aria-label="Disminuir">−</button>
                <span class="cart-qty-value">${item.quantity}</span>
                <button class="cart-qty-btn" onclick="window.appCartQty(${index}, 1)" aria-label="Aumentar">+</button>
              </div>
            </div>
            <div class="cart-item-footer-row">
              <button type="button" class="cart-item-remove-link" onclick="window.appCartRemove(${index})">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Eliminar producto
              </button>
            </div>
          </div>
        </div>
      `).join('');

      DOM.cartItemsList.innerHTML = `
        <div class="cart-drawer-actions-bar">
          <span class="cart-items-counter-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            ${totalItems} ${totalItems === 1 ? 'artículo' : 'artículos'}
          </span>
          <button type="button" class="btn-clear-cart" id="btnClearAllCart" onclick="window.appClearCartConfirm()" title="Eliminar todos los productos del carrito">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            Vaciar carrito
          </button>
        </div>
        ${itemsHtml}
      `;

      if (DOM.cartSubtotalText) DOM.cartSubtotalText.textContent = `$${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
      const cartIvaEl = document.getElementById('cartIvaText');
      if (cartIvaEl) cartIvaEl.textContent = `$${iva.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
      if (DOM.cartShippingText) DOM.cartShippingText.textContent = shipping === 0 ? 'GRATIS' : `$${shipping.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
      if (DOM.cartTotalText) DOM.cartTotalText.textContent = `$${total.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
    }
  }

  function confirmClearCart() {
    if (State.cart.length === 0) return;
    const totalCount = State.cart.reduce((sum, item) => sum + item.quantity, 0);
    const confirmed = window.confirm(`¿Deseas eliminar todos los productos (${totalCount} artículo${totalCount === 1 ? '' : 's'}) de tu carrito?`);
    if (confirmed) {
      clearCart();
      showToast('Se eliminaron todos los productos de tu carrito');
    }
  }

  function clearCart() {
    State.cart = [];
    saveCart();
    updateCartUI();
  }

  function reloadCart(newCart) {
    if (Array.isArray(newCart)) {
      State.cart = newCart;
    } else {
      State.cart = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
    }
    updateCartUI();
  }

  // Expose cart helpers to global window for inline onclicks
  window.appCartQty = updateCartQuantity;
  window.appCartRemove = removeCartItem;
  window.appClearCartConfirm = confirmClearCart;

  // ==========================================
  // WISHLIST OPERATIONS & UI
  // ==========================================
  function toggleWishlist(productId) {
    const index = State.wishlist.indexOf(productId);
    const product = PRODUCTS_DATA.find(p => p.id === productId);

    if (index > -1) {
      State.wishlist.splice(index, 1);
      showToast(`Se quitó "${product ? product.name : 'Producto'}" de tus favoritos`);
    } else {
      State.wishlist.push(productId);
      showToast(`¡"${product ? product.name : 'Producto'}" guardado en favoritos!`, 'heart');
    }

    saveWishlist();
    updateWishlistUI();
    renderProducts();
  }

  function saveWishlist() {
    localStorage.setItem('davanti_wishlist', JSON.stringify(State.wishlist));
    localStorage.setItem('grande_wishlist', JSON.stringify(State.wishlist));
  }

  function updateWishlistUI() {
    const totalFavs = State.wishlist.length;
    if (DOM.wishlistCount) {
      DOM.wishlistCount.textContent = totalFavs;
      DOM.wishlistCount.style.display = totalFavs > 0 ? 'flex' : 'none';
    }

    if (!DOM.wishlistItemsList) return;

    if (totalFavs === 0) {
      DOM.wishlistItemsList.style.display = 'none';
      if (DOM.wishlistEmptyState) DOM.wishlistEmptyState.style.display = 'flex';
    } else {
      DOM.wishlistItemsList.style.display = 'flex';
      if (DOM.wishlistEmptyState) DOM.wishlistEmptyState.style.display = 'none';

      const favProducts = PRODUCTS_DATA.filter(p => State.wishlist.includes(p.id));

      DOM.wishlistItemsList.innerHTML = favProducts.map(product => `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <h4 class="cart-item-title">${product.name}</h4>
            <div class="cart-item-meta">${product.department}</div>
            <span class="cart-item-price">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
              <button class="btn-add-to-cart" style="height: 32px; font-size: 0.75rem; padding: 0 0.8rem;" onclick="window.appMoveFavToCart('${product.id}')">
                Mover al carrito
              </button>
              <button class="cart-item-remove-btn" onclick="window.appToggleFav('${product.id}')">Quitar</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  window.appToggleFav = toggleWishlist;
  window.appMoveFavToCart = (id) => {
    addToCart(id);
    toggleWishlist(id);
  };

  // ==========================================
  // QUICK VIEW MODAL
  // ==========================================
  function openQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product || !DOM.quickViewBody) return;

    let selectedSize = product.sizes ? product.sizes[0] : null;
    let selectedColor = product.colors ? product.colors[0] : null;

    DOM.quickViewBody.innerHTML = `
      <div class="quickview-layout">
        <div class="quickview-gallery">
          <img src="${product.image}" alt="${product.name}" class="quickview-img" />
          ${(product.gallery && product.gallery.length) ? `
            <div class="quickview-thumbs" style="display: flex; gap: 0.5rem; margin-top: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <img src="${product.image}" class="quickview-thumb active" style="width: 52px; height: 52px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid #c58f38;" />
              ${product.gallery.map(img => `
                <img src="${img}" class="quickview-thumb" style="width: 52px; height: 52px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid #e2e8f0; opacity: 0.75;" />
              `).join('')}
            </div>
          ` : ''}
        </div>
        <div class="quickview-details">
          <span class="quickview-dept">${product.department}</span>
          <h2 class="quickview-title">${product.name}</h2>
          
          <div class="quickview-rating-row">
            <div class="stars-row">${renderStars(product.rating)}</div>
            <span class="reviews-count">${product.rating} (${product.reviewsCount} reseñas)</span>
            <span class="quickview-sku">SKU: ${product.sku}</span>
          </div>

          <div class="quickview-pricing">
            <span class="quickview-current-price">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            ${product.originalPrice ? `<span class="quickview-orig-price">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` : ''}
            <span class="installments-note">Hasta 12 MSI de $${(product.price / 12).toFixed(2)}</span>
          </div>

          ${window.CallejonOffers ? window.CallejonOffers.getQuickViewOfferBannerHtml(product) : ''}

          <p class="quickview-desc">${product.description}</p>

          ${product.sizes ? `
            <div class="option-group">
              <h5 class="option-group-title">Selecciona tu talla / capacidad:</h5>
              <div class="options-pill-list" id="quickViewSizes">
                ${product.sizes.map((s, idx) => `
                  <button type="button" class="option-pill ${idx === 0 ? 'active' : ''}" data-value="${s}">${s}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${product.colors ? `
            <div class="option-group">
              <h5 class="option-group-title">Color:</h5>
              <div class="options-pill-list" id="quickViewColors">
                ${product.colors.map((c, idx) => `
                  <button type="button" class="option-pill ${idx === 0 ? 'active' : ''}" data-value="${c}">${c}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div style="background-color: var(--color-beige-light, #f7f5f0); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; font-size: 0.8rem; color: #374151; border: 1px solid var(--color-border-subtle, #ede6de);">
            🚚 <strong>Envío express de cortesía</strong> a toda la República · 📦 Retira hoy con <strong>Click & Collect Express</strong> en sucursal <strong>Callejón Mágico</strong>.
          </div>

          <div class="quickview-cta-row">
            <button class="btn-add-to-cart" id="btnQuickViewAddToCart" style="height: 48px; font-size: 0.95rem; flex: 1;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Agregar al Carrito
            </button>
            <button class="btn-favorite-toggle ${State.wishlist.includes(product.id) ? 'active' : ''}" id="btnQuickViewFav" style="width: 48px; height: 48px; border: 1px solid #d1d5db; border-radius: var(--radius-sm);" title="Guardar en favoritos">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="${State.wishlist.includes(product.id) ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach listeners to gallery thumbnails
    const mainImg = DOM.quickViewBody.querySelector('.quickview-img');
    const thumbs = DOM.quickViewBody.querySelectorAll('.quickview-thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => {
          t.classList.remove('active');
          t.style.borderColor = '#e2e8f0';
          t.style.opacity = '0.75';
        });
        thumb.classList.add('active');
        thumb.style.borderColor = '#c58f38';
        thumb.style.opacity = '1';
        if (mainImg) mainImg.src = thumb.src;
      });
    });

    // Attach listeners to options
    const sizePills = DOM.quickViewBody.querySelectorAll('#quickViewSizes .option-pill');
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        sizePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedSize = pill.dataset.value;
      });
    });

    const colorPills = DOM.quickViewBody.querySelectorAll('#quickViewColors .option-pill');
    colorPills.forEach(pill => {
      pill.addEventListener('click', () => {
        colorPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedColor = pill.dataset.value;
        if (mainImg && product.colorImages && product.colorImages[selectedColor]) {
          mainImg.src = product.colorImages[selectedColor];
        }
      });
    });

    // Add to cart from modal
    const btnAdd = DOM.quickViewBody.querySelector('#btnQuickViewAddToCart');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        addToCart(product.id, selectedSize, selectedColor);
        closeAllModals();
      });
    }

    // Toggle fav from modal
    const btnFav = DOM.quickViewBody.querySelector('#btnQuickViewFav');
    if (btnFav) {
      btnFav.addEventListener('click', () => {
        toggleWishlist(product.id);
        const isFav = State.wishlist.includes(product.id);
        btnFav.classList.toggle('active', isFav);
        const svg = btnFav.querySelector('svg');
        if (svg) svg.setAttribute('fill', isFav ? '#ef4444' : 'none');
      });
    }

    openModal('quickview');
  }

  // ==========================================
  // SLIDER HERO CAROUSEL
  // ==========================================
  function setupSlider() {
    if (!DOM.heroSlides || DOM.heroSlides.length === 0) return;

    let sliderInterval = setInterval(nextSlide, 6000);

    function showSlide(index) {
      DOM.heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      DOM.heroDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      State.currentSlide = index;
    }

    function nextSlide() {
      const nextIndex = (State.currentSlide + 1) % DOM.heroSlides.length;
      showSlide(nextIndex);
    }

    function prevSlide() {
      const prevIndex = (State.currentSlide - 1 + DOM.heroSlides.length) % DOM.heroSlides.length;
      showSlide(prevIndex);
    }

    if (DOM.btnNextSlide) {
      DOM.btnNextSlide.addEventListener('click', () => {
        clearInterval(sliderInterval);
        nextSlide();
        sliderInterval = setInterval(nextSlide, 6000);
      });
    }

    if (DOM.btnPrevSlide) {
      DOM.btnPrevSlide.addEventListener('click', () => {
        clearInterval(sliderInterval);
        prevSlide();
        sliderInterval = setInterval(nextSlide, 6000);
      });
    }

    DOM.heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(sliderInterval);
        showSlide(i);
        sliderInterval = setInterval(nextSlide, 6000);
      });
    });
  }

  // ==========================================
  // MODALS & DRAWERS HANDLERS
  // ==========================================
  function getActiveAuthUser() {
    let user = null;
    if (window.DavantiAuth && typeof window.DavantiAuth.getCurrentUser === 'function') {
      user = window.DavantiAuth.getCurrentUser();
    }
    if (!user && window.CallejonAuth && typeof window.CallejonAuth.getCurrentUser === 'function') {
      user = window.CallejonAuth.getCurrentUser();
    }
    if (!user) {
      try {
        const raw = localStorage.getItem('davanti_current_user') || localStorage.getItem('callejon_current_user');
        if (raw) user = JSON.parse(raw);
      } catch (err) {}
    }
    return (user && (user.email || user.fullName || user.id)) ? user : null;
  }

  function openDrawer(type) {
    closeAllModals();
    if (DOM.backdrop) DOM.backdrop.classList.add('active');
    if (type === 'cart' && DOM.cartDrawer) DOM.cartDrawer.classList.add('active');
    if (type === 'wishlist' && DOM.wishlistDrawer) DOM.wishlistDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openModal(type) {
    if (type === 'checkout') {
      const activeUser = getActiveAuthUser();
      if (!activeUser) {
        closeAllModals();
        sessionStorage.setItem('callejon_pending_checkout', 'true');
        if (window.DavantiAuth && typeof window.DavantiAuth.openAuth === 'function') {
          window.DavantiAuth.openAuth('login');
        } else if (window.DavantiAuth && typeof window.DavantiAuth.openModal === 'function') {
          window.DavantiAuth.openModal('login');
        }
        showToast('🔒 Debes iniciar sesión con tu cuenta para continuar con tu compra.');
        return;
      }
    }

    closeAllModals();
    if (DOM.backdrop) DOM.backdrop.classList.add('active');
    if (type === 'quickview' && DOM.quickViewModal) DOM.quickViewModal.classList.add('active');
    if (type === 'checkout' && DOM.checkoutModal) {
      if (DOM.toastContainer) DOM.toastContainer.innerHTML = '';
      DOM.checkoutModal.classList.add('active');
      goToCheckoutStep(1);

      const activeUser = getActiveAuthUser();
      const nameInput = document.getElementById('checkoutRecipientName');
      const phoneInput = document.getElementById('checkoutPhone');
      const emailInput = document.getElementById('checkoutEmail');
      const streetInput = document.getElementById('checkoutStreet');
      const postalInput = document.getElementById('checkoutPostal');
      const cityInput = document.getElementById('checkoutCity');

      // Auto-completar datos de la cuenta activa
      if (nameInput) nameInput.value = activeUser?.fullName || '';
      if (emailInput) emailInput.value = activeUser?.email || '';
      if (phoneInput && !phoneInput.value) phoneInput.value = activeUser?.phone || '';
      if (streetInput && !streetInput.value) streetInput.value = activeUser?.street || '';
      if (postalInput && !postalInput.value) postalInput.value = activeUser?.postal || '';
      if (cityInput && !cityInput.value) cityInput.value = activeUser?.city || '';

      // Limpiar campos de tarjeta bancaria
      const ccNum = document.getElementById('ccCardNumber');
      const ccHolder = document.getElementById('ccCardHolder');
      const ccExp = document.getElementById('ccCardExpiry');
      const ccCvv = document.getElementById('ccCardCvv');

      if (ccNum) ccNum.value = '';
      if (ccHolder) ccHolder.value = (activeUser?.fullName || '').toUpperCase();
      if (ccExp) ccExp.value = '';
      if (ccCvv) ccCvv.value = '';
    }
    document.body.style.overflow = 'hidden';
  }

  function goToCheckoutStep(step) {
    const pane1 = document.getElementById('checkoutStep1');
    const pane2 = document.getElementById('checkoutStep2');
    const pane3 = document.getElementById('checkoutStep3');

    const badge1 = document.getElementById('badgeStep1');
    const badge2 = document.getElementById('badgeStep2');
    const badge3 = document.getElementById('badgeStep3');

    if (step === 1) {
      if (pane1) pane1.style.display = 'block';
      if (pane2) pane2.style.display = 'none';
      if (pane3) pane3.style.display = 'none';

      if (badge1) {
        badge1.className = 'checkout-step-badge active';
        const num = badge1.querySelector('.step-number');
        if (num) num.textContent = '1';
      }
      if (badge2) {
        badge2.className = 'checkout-step-badge';
        const num = badge2.querySelector('.step-number');
        if (num) num.textContent = '2';
      }
      if (badge3) {
        badge3.className = 'checkout-step-badge';
        const num = badge3.querySelector('.step-number');
        if (num) num.textContent = '3';
      }
    } else if (step === 2) {
      if (pane1) pane1.style.display = 'none';
      if (pane2) pane2.style.display = 'block';
      if (pane3) pane3.style.display = 'none';

      if (badge1) {
        badge1.className = 'checkout-step-badge active completed';
        const num = badge1.querySelector('.step-number');
        if (num) num.textContent = '✓';
      }
      if (badge2) {
        badge2.className = 'checkout-step-badge active';
        const num = badge2.querySelector('.step-number');
        if (num) num.textContent = '2';
      }
      if (badge3) {
        badge3.className = 'checkout-step-badge';
        const num = badge3.querySelector('.step-number');
        if (num) num.textContent = '3';
      }

      // Refresh MSI selector if available
      if (window.CallejonCard && typeof window.CallejonCard.updateUI === 'function') {
        window.CallejonCard.updateUI();
      }
    } else if (step === 3) {
      if (pane1) pane1.style.display = 'none';
      if (pane2) pane2.style.display = 'none';
      if (pane3) pane3.style.display = 'block';

      if (badge1) {
        badge1.className = 'checkout-step-badge active completed';
        const num = badge1.querySelector('.step-number');
        if (num) num.textContent = '✓';
      }
      if (badge2) {
        badge2.className = 'checkout-step-badge active completed';
        const num = badge2.querySelector('.step-number');
        if (num) num.textContent = '✓';
      }
      if (badge3) {
        badge3.className = 'checkout-step-badge active completed';
        const num = badge3.querySelector('.step-number');
        if (num) num.textContent = '✓';
      }
    }
  }

  function closeAllModals() {
    if (DOM.backdrop) DOM.backdrop.classList.remove('active');
    if (DOM.cartDrawer) DOM.cartDrawer.classList.remove('active');
    if (DOM.wishlistDrawer) DOM.wishlistDrawer.classList.remove('active');
    if (DOM.quickViewModal) DOM.quickViewModal.classList.remove('active');
    if (DOM.checkoutModal) DOM.checkoutModal.classList.remove('active');
    if (DOM.megaMenuPanel) DOM.megaMenuPanel.classList.remove('active');

    // Cerrar también Tarjeta Callejón Mágico, Rastreo de Pedidos y Calendario de Ofertas
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
    if (window.DavantiAuth && typeof window.DavantiAuth.closeModal === 'function') {
      window.DavantiAuth.closeModal();
    }
    if (window.CallejonTicket && typeof window.CallejonTicket.close === 'function') {
      window.CallejonTicket.close();
    }

    // Cerrar cualquier modal residual activo en el DOM
    document.querySelectorAll('.modal-window.active, .card-manager-modal.active, .orders-modal.active, .card-sucursal-modal.active, .offers-schedule-modal.active, .auth-modal.active, .ticket-modal-window.active').forEach(m => {
      m.classList.remove('active');
    });

    const offersBackdrop = document.getElementById('offersModalBackdrop');
    if (offersBackdrop) offersBackdrop.classList.remove('active');

    document.body.style.overflow = '';
  }

  // ==========================================
  // SEARCH SYSTEM & AUTOCOMPLETE ENGINE
  // ==========================================
  function normalizeText(str) {
    if (!str) return '';
    return String(str)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlightQuery(text, query) {
    if (!text || !query) return escapeHtml(text || '');
    const tokens = normalizeText(query).split(/\s+/).filter(t => t.length > 1);
    if (tokens.length === 0) return escapeHtml(text);

    let result = escapeHtml(text);
    tokens.forEach(tok => {
      try {
        const regex = new RegExp(`(${escapeRegex(tok)})`, 'gi');
        result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
      } catch (e) {}
    });
    return result;
  }

  const SEARCH_SYNONYMS = {
    pantalla: ['tv', 'television', 'televisor', 'monitor', 'pantallas', 'oled', '4k'],
    pantallas: ['pantalla', 'tv', 'television', 'monitor', 'oled'],
    tv: ['pantalla', 'televisor', 'smart tv', 'oled', 'uhd', '4k'],
    tele: ['tv', 'television', 'pantalla'],
    television: ['tv', 'pantalla', 'televisor'],
    celular: ['smartphone', 'telefono', 'movil', 'iphone', 'galaxy', 's24'],
    celulares: ['smartphone', 'telefono', 'movil', 'iphone', 'galaxy'],
    telefono: ['celular', 'smartphone', 'movil'],
    computadora: ['laptop', 'macbook', 'pc', 'computo'],
    computadoras: ['laptop', 'macbook', 'pc', 'computo'],
    laptop: ['computadora', 'macbook', 'rog', 'zephyrus', 'notebook'],
    laptops: ['laptop', 'computadora', 'macbook'],
    tenis: ['sneakers', 'calzado', 'zapatos', 'running'],
    cafe: ['cafetera', 'espresso', 'barista', 'nespresso'],
    cafetera: ['espresso', 'barista', 'nespresso'],
    cafeteras: ['cafetera', 'espresso', 'barista'],
    sofa: ['sillon', 'seccional', 'salas', 'reclinable'],
    sofas: ['sofa', 'sillon', 'seccional'],
    sillon: ['sofa', 'reclinable', 'salas'],
    ropa: ['chamarra', 'vestido', 'pantalon', 'camisa', 'sudadera'],
    juguete: ['juguetes', 'lego', 'muneca', 'figura'],
    juguetes: ['lego', 'muneca', 'carritos', 'figuras'],
    perfume: ['fragancia', 'eau de parfum', 'colonia', 'perfumes'],
    perfumes: ['perfume', 'fragancia', 'colonia']
  };

  function productMatchesQuery(product, query) {
    const normQuery = normalizeText(query);
    if (!normQuery) return true;

    const queryTokens = normQuery.split(/\s+/).filter(Boolean);

    const featuresStr = Array.isArray(product.features) ? product.features.join(' ') : '';
    const colorsStr = Array.isArray(product.colors) ? product.colors.join(' ') : '';
    const sizesStr = Array.isArray(product.sizes) ? product.sizes.join(' ') : '';

    const searchableText = normalizeText(
      `${product.name || ''} ${product.brand || ''} ${product.department || ''} ${product.category || ''} ${product.subcategory || ''} ${product.description || ''} ${product.sku || ''} ${featuresStr} ${colorsStr} ${sizesStr}`
    );

    return queryTokens.every(token => {
      // For short tokens (<= 3 chars, e.g. lg, tv, pc, 4k), enforce word boundaries
      if (token.length <= 3) {
        const regex = new RegExp('(?:^|[^a-z0-9])' + escapeRegex(token) + '(?:[^a-z0-9]|$)', 'i');
        if (regex.test(searchableText)) return true;
      } else {
        if (searchableText.includes(token)) return true;
      }

      // Check synonyms
      const synList = SEARCH_SYNONYMS[token];
      if (synList) {
        return synList.some(syn => {
          const normSyn = normalizeText(syn);
          if (normSyn.length <= 3) {
            const r = new RegExp('(?:^|[^a-z0-9])' + escapeRegex(normSyn) + '(?:[^a-z0-9]|$)', 'i');
            return r.test(searchableText);
          }
          return searchableText.includes(normSyn);
        });
      }

      return false;
    });
  }

  function rankProduct(product, query) {
    const normQ = normalizeText(query);
    const normName = normalizeText(product.name);
    const normBrand = normalizeText(product.brand);
    const normDept = normalizeText(product.department);

    let score = 0;
    if (normName.startsWith(normQ)) score += 100;
    else if (normName.includes(normQ)) score += 50;

    if (normBrand === normQ) score += 40;
    else if (normBrand.includes(normQ)) score += 20;

    if (normDept.includes(normQ)) score += 15;

    return score;
  }

  function setupSearchClearButton() {
    if (!DOM.searchForm || !DOM.searchInput) return;

    let clearBtn = DOM.searchForm.querySelector('.search-clear-btn');
    if (!clearBtn) {
      clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.className = 'search-clear-btn';
      clearBtn.id = 'searchClearBtn';
      clearBtn.setAttribute('aria-label', 'Limpiar búsqueda');
      clearBtn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      const submitBtn = DOM.searchForm.querySelector('.search-submit-btn');
      if (submitBtn) {
        DOM.searchForm.insertBefore(clearBtn, submitBtn);
      } else {
        DOM.searchForm.appendChild(clearBtn);
      }
    }

    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearSearch();
    });

    updateClearButtonVisibility();
  }

  function updateClearButtonVisibility() {
    if (!DOM.searchForm || !DOM.searchInput) return;
    const clearBtn = DOM.searchForm.querySelector('.search-clear-btn');
    if (!clearBtn) return;

    if (DOM.searchInput.value.trim().length > 0) {
      clearBtn.classList.add('visible');
    } else {
      clearBtn.classList.remove('visible');
    }
  }

  // ==========================================
  // SEARCH HISTORY ENGINE
  // ==========================================
  function getSearchHistory() {
    try {
      const stored = localStorage.getItem('davanti_search_history');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function addSearchHistory(term) {
    if (!term || typeof term !== 'string') return;
    const clean = term.trim();
    if (clean.length === 0) return;

    try {
      let history = getSearchHistory();
      history = history.filter(item => item.toLowerCase() !== clean.toLowerCase());
      history.unshift(clean);
      if (history.length > 6) history = history.slice(0, 6);
      localStorage.setItem('davanti_search_history', JSON.stringify(history));
    } catch (e) {
      console.error('Error saving search history:', e);
    }
  }

  function removeSearchHistoryItem(term) {
    try {
      let history = getSearchHistory();
      history = history.filter(item => item.toLowerCase() !== term.toLowerCase());
      localStorage.setItem('davanti_search_history', JSON.stringify(history));
      renderSearchHistoryDropdown();
    } catch (e) {
      console.error('Error removing search history item:', e);
    }
  }

  function clearSearchHistory() {
    try {
      localStorage.removeItem('davanti_search_history');
      if (DOM.searchResults) {
        DOM.searchResults.classList.remove('active');
        DOM.searchResults.innerHTML = '';
      }
      showToast('Se ha borrado el historial de búsqueda');
    } catch (e) {
      console.error('Error clearing search history:', e);
    }
  }

  function renderSearchHistoryDropdown() {
    if (!DOM.searchResults) return;

    const history = getSearchHistory();
    if (history.length === 0) {
      DOM.searchResults.classList.remove('active');
      DOM.searchResults.innerHTML = '';
      return;
    }

    const itemsHtml = history.map(item => `
      <div class="search-history-item" data-term="${escapeHtml(item)}">
        <div class="search-history-left">
          <svg class="search-history-clock-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span class="search-history-text">${escapeHtml(item)}</span>
        </div>
        <button type="button" class="btn-delete-history-item" data-term="${escapeHtml(item)}" aria-label="Eliminar ${escapeHtml(item)} del historial">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `).join('');

    DOM.searchResults.innerHTML = `
      <div class="search-history-dropdown-wrapper">
        <div class="search-dropdown-header">
          <span class="search-history-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Búsquedas recientes
          </span>
          <button type="button" class="btn-clear-all-history" id="btnClearAllSearchHistory">
            Borrar historial
          </button>
        </div>
        <div class="search-history-list">
          ${itemsHtml}
        </div>
        <div class="search-history-trends">
          <span class="search-trends-title">Tendencias populares:</span>
          <div class="search-suggestion-pills">
            <button type="button" class="search-pill" data-search="Pantalla">Pantallas 4K</button>
            <button type="button" class="search-pill" data-search="Samsung">Samsung</button>
            <button type="button" class="search-pill" data-search="Perfume">Perfumes</button>
            <button type="button" class="search-pill" data-search="LEGO">LEGO</button>
          </div>
        </div>
      </div>
    `;

    // Bind item click
    DOM.searchResults.querySelectorAll('.search-history-item').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.btn-delete-history-item')) return;
        const term = el.dataset.term;
        if (DOM.searchInput) DOM.searchInput.value = term;
        updateClearButtonVisibility();
        executeSearchSubmit(term);
      });
    });

    // Bind individual delete buttons
    DOM.searchResults.querySelectorAll('.btn-delete-history-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const term = btn.dataset.term;
        removeSearchHistoryItem(term);
      });
    });

    // Bind clear all button
    const btnClearAll = DOM.searchResults.querySelector('#btnClearAllSearchHistory');
    if (btnClearAll) {
      btnClearAll.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearSearchHistory();
      });
    }

    // Bind trend pills
    DOM.searchResults.querySelectorAll('.search-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const term = pill.dataset.search;
        if (DOM.searchInput) DOM.searchInput.value = term;
        updateClearButtonVisibility();
        executeSearchSubmit(term);
      });
    });

    DOM.searchResults.classList.add('active');
  }

  function clearSearch(skipFocus = false) {
    if (DOM.searchInput) {
      DOM.searchInput.value = '';
      if (!skipFocus) DOM.searchInput.focus();
    }
    updateClearButtonVisibility();
    if (DOM.searchResults) {
      DOM.searchResults.classList.remove('active');
      DOM.searchResults.innerHTML = '';
    }
    if (State.searchQuery) {
      State.searchQuery = '';
      try {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('search');
        window.history.pushState({}, '', newUrl.toString());
      } catch (e) {}
      renderProducts();
    }
  }

  function executeSearchSubmit(query) {
    const val = (query !== undefined ? query : (DOM.searchInput ? DOM.searchInput.value : '')).trim();
    if (!val) return;

    // Record in search history
    addSearchHistory(val);

    if (DOM.searchInput) {
      DOM.searchInput.value = val;
    }
    updateClearButtonVisibility();

    if (DOM.searchResults) {
      DOM.searchResults.classList.remove('active');
    }

    const isIndexPage = !window.location.pathname.includes('.html') || 
                        window.location.pathname.endsWith('index.html') || 
                        window.location.pathname.endsWith('/');

    if (isIndexPage) {
      State.searchQuery = val;
      State.activeCategory = 'all';
      State.activeFilter = 'all';

      DOM.filterTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === 'all');
      });

      DOM.navCategoryLinks.forEach(link => {
        link.classList.remove('active');
      });

      renderProducts();

      try {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('search', val);
        window.history.pushState({ search: val }, '', newUrl.toString());
      } catch (e) {}

      setTimeout(() => {
        const target = document.getElementById('searchActiveBanner') || document.getElementById('productos-destacados') || DOM.productsGrid;
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      window.location.href = `index.html?search=${encodeURIComponent(val)}`;
    }
  }

  function handleSearchInput(e) {
    updateClearButtonVisibility();
    const rawVal = e.target.value.trim();
    if (!DOM.searchResults) return;

    if (rawVal.length < 2) {
      renderSearchHistoryDropdown();
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => productMatchesQuery(p, rawVal));
    matches.sort((a, b) => rankProduct(b, rawVal) - rankProduct(a, rawVal));

    if (matches.length === 0) {
      DOM.searchResults.innerHTML = `
        <div class="search-empty-state">
          <div class="search-empty-icon">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.8">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div class="search-empty-title">
            No encontramos productos para <strong>"${escapeHtml(rawVal)}"</strong>
          </div>
          <div class="search-empty-sub">
            Prueba buscando con estos términos populares:
          </div>
          <div class="search-suggestion-pills">
            <button type="button" class="search-pill" data-search="Pantalla">Pantallas 4K</button>
            <button type="button" class="search-pill" data-search="Samsung">Samsung</button>
            <button type="button" class="search-pill" data-search="Cafetera">Cafeteras</button>
            <button type="button" class="search-pill" data-search="Sofá">Salas y Sofás</button>
            <button type="button" class="search-pill" data-search="LEGO">LEGO</button>
            <button type="button" class="search-pill" data-search="Perfume">Perfumes</button>
          </div>
        </div>
      `;

      DOM.searchResults.querySelectorAll('.search-pill').forEach(pill => {
        pill.addEventListener('click', (ev) => {
          ev.preventDefault();
          const term = pill.dataset.search;
          if (DOM.searchInput) DOM.searchInput.value = term;
          updateClearButtonVisibility();
          executeSearchSubmit(term);
        });
      });
    } else {
      const displayMatches = matches.slice(0, 6);
      const itemsHtml = displayMatches.map(p => {
        const discountHtml = p.originalPrice 
          ? `<span class="search-result-discount">-${Math.round((1 - p.price / p.originalPrice) * 100)}%</span>` 
          : '';

        return `
          <div class="search-result-item" data-id="${p.id}" tabindex="0">
            <img src="${p.image}" alt="${p.name}" class="search-result-thumb" loading="lazy" />
            <div class="search-result-info">
              <div class="search-result-name">${highlightQuery(p.name, rawVal)}</div>
              <div class="search-result-meta">
                <span class="search-badge-dept">${p.department || 'Tienda'}</span>
                ${p.brand ? `<span>· <strong>${p.brand}</strong></span>` : ''}
              </div>
            </div>
            <div class="search-result-price-box">
              <div class="search-result-price">$${p.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</div>
              ${discountHtml}
            </div>
          </div>
        `;
      }).join('');

      DOM.searchResults.innerHTML = `
        <div class="search-dropdown-header">
          <span>Sugerencias para <strong>"${escapeHtml(rawVal)}"</strong></span>
          <span class="search-count-pill">${matches.length} ${matches.length === 1 ? 'coincidencia' : 'coincidencias'}</span>
        </div>
        <div class="search-results-list">
          ${itemsHtml}
        </div>
        <div class="search-dropdown-footer">
          <button type="button" class="btn-view-all-results">
            <span>Ver todos los <strong>${matches.length}</strong> resultados para "${escapeHtml(rawVal)}"</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      `;

      DOM.searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          DOM.searchResults.classList.remove('active');
          openQuickView(item.dataset.id);
        });
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            DOM.searchResults.classList.remove('active');
            openQuickView(item.dataset.id);
          }
        });
      });

      const btnViewAll = DOM.searchResults.querySelector('.btn-view-all-results');
      if (btnViewAll) {
        btnViewAll.addEventListener('click', (ev) => {
          ev.preventDefault();
          executeSearchSubmit(rawVal);
        });
      }
    }

    DOM.searchResults.classList.add('active');
  }

  // ==========================================
  // TOAST NOTIFICATION SYSTEM
  // ==========================================
  function showToast(message, iconType = 'info') {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.title = 'Clic para cerrar';

    let iconSvg = '';
    if (iconType === 'cart') {
      iconSvg = `
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      `;
    } else if (iconType === 'heart') {
      iconSvg = `
        <svg class="toast-icon" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      `;
    } else {
      iconSvg = `
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `;
    }

    toast.innerHTML = `
      ${iconSvg}
      <span class="toast-message">${message}</span>
      <span class="toast-close-x" title="Cerrar">&times;</span>
    `;

    // Descartar al hacer clic en el toast
    toast.addEventListener('click', () => {
      toast.classList.add('toast-remove');
      setTimeout(() => toast.remove(), 200);
    });

    DOM.toastContainer.appendChild(toast);

    // Duración reducida a 1.8 segundos para no estorbar
    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.add('toast-remove');
        setTimeout(() => toast.remove(), 200);
      }
    }, 1800);
  }

  // ==========================================
  // EVENT LISTENERS SETUP
  // ==========================================
  function setupEventListeners() {
    // Drawer triggers
    if (DOM.btnOpenCart) DOM.btnOpenCart.addEventListener('click', () => openDrawer('cart'));
    if (DOM.btnCloseCart) DOM.btnCloseCart.addEventListener('click', closeAllModals);
    if (DOM.btnOpenWishlist) DOM.btnOpenWishlist.addEventListener('click', () => openDrawer('wishlist'));
    if (DOM.btnCloseWishlist) DOM.btnCloseWishlist.addEventListener('click', closeAllModals);
    if (DOM.btnCloseQuickView) DOM.btnCloseQuickView.addEventListener('click', closeAllModals);
    if (DOM.btnCloseCheckout) DOM.btnCloseCheckout.addEventListener('click', closeAllModals);
    if (DOM.backdrop) DOM.backdrop.addEventListener('click', closeAllModals);

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });

    // Cerrar cualquier modal activo al hacer clic en cualquier parte fuera de él
    document.addEventListener('click', (e) => {
      const activeModal = document.querySelector('.modal-window.active, .drawer-panel.active, #quickViewModal.active, #checkoutModal.active, #cardModal.active, #ordersModal.active, #authModal.active');
      if (activeModal) {
        const isTrigger = e.target && typeof e.target.closest === 'function'
          ? e.target.closest('a, button, input, .product-card, .btn-open-modal, .open-card-modal-btn, .open-orders-modal-btn, .btn-ribbon-schedule')
          : null;
        if (!activeModal.contains(e.target) && !isTrigger) {
          closeAllModals();
        }
      }
    });

    // MegaMenu toggle
    const btnMega = DOM.btnMegaMenu || document.getElementById('btnAllCategories');
    const panelMega = DOM.megaMenuPanel || document.getElementById('megaMenuPanel');

    if (btnMega && panelMega) {
      btnMega.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const willBeActive = !panelMega.classList.contains('active');
        panelMega.classList.toggle('active', willBeActive);
        btnMega.setAttribute('aria-expanded', willBeActive ? 'true' : 'false');
      });

      document.addEventListener('click', (e) => {
        if (!panelMega.contains(e.target) && !btnMega.contains(e.target)) {
          panelMega.classList.remove('active');
          btnMega.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Search bar input, submit & outside click
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', handleSearchInput);
      DOM.searchInput.addEventListener('focus', () => {
        if (DOM.searchInput.value.trim().length >= 2) {
          handleSearchInput({ target: DOM.searchInput });
        } else {
          renderSearchHistoryDropdown();
        }
      });
      DOM.searchInput.addEventListener('click', () => {
        if (DOM.searchInput.value.trim().length < 2) {
          renderSearchHistoryDropdown();
        }
      });
      DOM.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (DOM.searchResults) DOM.searchResults.classList.remove('active');
        } else if (e.key === 'ArrowDown') {
          if (DOM.searchResults && DOM.searchResults.classList.contains('active')) {
            const firstItem = DOM.searchResults.querySelector('.search-result-item');
            if (firstItem) {
              e.preventDefault();
              firstItem.focus();
            }
          }
        }
      });

      document.addEventListener('click', (e) => {
        if (!DOM.searchInput.contains(e.target) && DOM.searchResults && !DOM.searchResults.contains(e.target) && !e.target.closest('.search-clear-btn')) {
          DOM.searchResults.classList.remove('active');
        }
      });
    }

    if (DOM.searchForm) {
      DOM.searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        executeSearchSubmit();
      });
    }

    // Category Circles click
    DOM.categoryCircles.forEach(card => {
      card.addEventListener('click', (e) => {
        const cat = card.dataset.category;
        if (!cat) return; // Natural link navigation for dedicated pages (moda.html, tecnologia.html, juguetes.html)

        e.preventDefault();
        State.activeCategory = cat;
        State.activeFilter = 'all';

        // Update nav links active state
        DOM.navCategoryLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.category === cat);
        });

        // Update filter tabs
        DOM.filterTabs.forEach(tab => tab.classList.remove('active'));
        const allTab = document.querySelector('.filter-tab-btn[data-filter="all"]');
        if (allTab) allTab.classList.add('active');

        renderProducts();

        const section = document.getElementById('productos-destacados');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Product Filter Tabs
    DOM.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        DOM.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        State.activeFilter = tab.dataset.filter;
        renderProducts();
      });
    });

    // Top Navigation Links
    DOM.navCategoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = link.dataset.category;
        if (!cat) return; // Allow natural page transition for dedicated department pages (moda.html, tecnologia.html, juguetes.html)

        e.preventDefault();
        DOM.navCategoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        State.activeCategory = cat;
        State.activeFilter = 'all';

        DOM.filterTabs.forEach(tab => tab.classList.remove('active'));
        const allTab = document.querySelector('.filter-tab-btn[data-filter="all"]');
        if (allTab) allTab.classList.add('active');

        renderProducts();

        if (cat !== 'all') {
          const section = document.getElementById('productos-destacados');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // Delegated clicks on Product Grid (Add to cart, Quickview, Favorite)
    if (DOM.productsGrid) {
      DOM.productsGrid.addEventListener('click', (e) => {
        const btnAdd = e.target.closest('.btn-add-to-cart');
        if (btnAdd) {
          e.stopPropagation();
          addToCart(btnAdd.dataset.id);
          return;
        }

        const btnFav = e.target.closest('.btn-favorite-toggle');
        if (btnFav) {
          e.stopPropagation();
          toggleWishlist(btnFav.dataset.id);
          return;
        }

        const quickviewTrigger = e.target.closest('[data-action="quickview"]') || e.target.closest('.product-quickview-btn');
        if (quickviewTrigger) {
          e.stopPropagation();
          openQuickView(quickviewTrigger.dataset.id);
          return;
        }
      });
    }

    // Universal Global Delegated Clicks (Ensures cards on any department page always work)
    document.addEventListener('click', (e) => {
      // 1. Add to Cart universal interceptor
      const btnAdd = e.target.closest('.btn-add-to-cart, [data-action="add-cart"], .home-card-cta-btn, .sport-card-btn-add, .beauty-card-btn-add');
      if (btnAdd && btnAdd.dataset.id) {
        // Exclude specific modal action buttons that handle their own size/color selections
        const excludedModalIds = [
          'btnQuickViewAddToCart',
          'btnBeautyQuickViewAddToCart',
          'btnHomeQuickViewAddToCart',
          'btnToyQuickViewAddToCart',
          'btnSportsQuickViewAddToCart',
          'btnGamingQVAddCart'
        ];
        if (excludedModalIds.includes(btnAdd.id)) return;

        e.stopPropagation();
        addToCart(btnAdd.dataset.id);
        return;
      }

      // 2. Favorite Toggle universal interceptor
      const btnFav = e.target.closest('.btn-favorite-toggle, [data-action="fav"]');
      if (btnFav && btnFav.dataset.id && btnFav.id !== 'btnQuickViewFav') {
        e.stopPropagation();
        toggleWishlist(btnFav.dataset.id);
        const isFav = State.wishlist.includes(btnFav.dataset.id);
        btnFav.classList.toggle('active', isFav);
        const svg = btnFav.querySelector('svg');
        if (svg) svg.setAttribute('fill', isFav ? '#ef4444' : 'none');
        return;
      }

      // 3. QuickView universal trigger (for pages using the app.js modal, e.g. moda.html or general cards)
      const qvTrigger = e.target.closest('[data-action="quickview"], .product-quickview-btn');
      if (qvTrigger && qvTrigger.dataset.id) {
        const hasCustomDepartmentModal = document.getElementById('techProductsGrid') ||
                                         document.getElementById('gamingProductsGrid') ||
                                         document.getElementById('sportsProductsGrid') ||
                                         document.getElementById('homeProductsGrid') ||
                                         document.getElementById('beautyProductsGrid') ||
                                         document.getElementById('toysProductsGrid');
        if (!hasCustomDepartmentModal) {
          e.stopPropagation();
          openQuickView(qvTrigger.dataset.id);
        }
      }
    });

    // Sync across tabs and fallback triggers
    window.addEventListener('storage', () => {
      reloadCart();
      updateWishlistUI();
    });

    // Checkout Modal Proceed Button
    if (DOM.btnProceedCheckout) {
      DOM.btnProceedCheckout.addEventListener('click', () => {
        if (!State.cart || State.cart.length === 0) {
          showToast('🛒 Tu carrito está vacío. Agrega artículos antes de continuar.');
          return;
        }

        const activeUser = getActiveAuthUser();
        if (!activeUser) {
          closeAllModals();
          sessionStorage.setItem('callejon_pending_checkout', 'true');
          if (window.DavantiAuth && typeof window.DavantiAuth.openAuth === 'function') {
            window.DavantiAuth.openAuth('login');
          } else if (window.DavantiAuth && typeof window.DavantiAuth.openModal === 'function') {
            window.DavantiAuth.openModal('login');
          }
          showToast('🔒 Debes iniciar sesión con tu cuenta para continuar con tu compra.');
          return;
        }

        closeAllModals();
        openModal('checkout');
      });
    }

    // =========================================================================
    // VALIDACIÓN ESTRICTA PASO 1 (DATOS DE ENTREGA)
    // =========================================================================
    function validateCheckoutStep1(showToastMsg = true) {
      const recipientNameInput = document.getElementById('checkoutRecipientName');
      const phoneInput = document.getElementById('checkoutPhone');
      const emailInput = document.getElementById('checkoutEmail');
      const streetInput = document.getElementById('checkoutStreet');
      const postalInput = document.getElementById('checkoutPostal');
      const cityInput = document.getElementById('checkoutCity');

      const nameVal = (recipientNameInput?.value || '').trim();
      const phoneVal = (phoneInput?.value || '').trim();
      const phoneDigits = phoneVal.replace(/\D/g, '');
      const emailVal = (emailInput?.value || '').trim();
      const streetVal = (streetInput?.value || '').trim();
      const postalVal = (postalInput?.value || '').trim();
      const cityVal = (cityInput?.value || '').trim();

      // Limpiar bordes de error previos
      [recipientNameInput, phoneInput, emailInput, streetInput, postalInput, cityInput].forEach(el => {
        if (el) {
          el.style.borderColor = '';
          el.style.boxShadow = '';
        }
      });

      const fail = (el, msg) => {
        if (el) {
          el.focus();
          el.style.borderColor = '#ef4444';
          el.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
        }
        if (showToastMsg) showToast(msg);
        return false;
      };

      // 1. Nombre completo
      if (!nameVal || nameVal.length < 5) {
        return fail(recipientNameInput, '👤 Ingresa tu nombre y apellido completo (mínimo 5 letras).');
      }
      const words = nameVal.split(/\s+/).filter(w => w.length > 0);
      if (words.length < 2 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s.'-]+$/.test(nameVal)) {
        return fail(recipientNameInput, '👤 Por favor ingresa un nombre y apellido válido sin números ni caracteres extraños.');
      }

      // 2. Teléfono / WhatsApp
      if (!phoneVal || phoneDigits.length !== 10) {
        return fail(phoneInput, '📲 El número de WhatsApp debe tener exactamente 10 dígitos (ej: 964 108 9910).');
      }
      if (/^(\d)\1{9}$/.test(phoneDigits)) {
        return fail(phoneInput, '📲 El número de teléfono no puede ser un número repetido (ej: 0000000000).');
      }
      if (!/^[2-9]/.test(phoneDigits)) {
        return fail(phoneInput, '📲 Ingresa un número de celular o teléfono móvil válido de 10 dígitos.');
      }

      // 3. Correo electrónico
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        return fail(emailInput, '✉️ Ingresa un correo electrónico válido para tu ticket digital (ej: tu-nombre@gmail.com).');
      }

      // 4. Calle y número
      if (!streetVal || streetVal.length < 6) {
        return fail(streetInput, '📍 Ingresa tu calle y número exterior/interior completo (mínimo 6 caracteres).');
      }

      // 5. Código postal
      if (!postalVal || !/^\d{5}$/.test(postalVal)) {
        return fail(postalInput, '📮 El Código Postal debe tener exactamente 5 números (ej: 30700).');
      }

      // 6. Ciudad / Estado
      if (!cityVal || cityVal.length < 3 || !/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(cityVal)) {
        return fail(cityInput, '🏙️ Ingresa tu Ciudad y Estado (ej: Tapachula, Chiapas).');
      }

      return true;
    }

    // Algoritmo de Luhn para validación real de tarjetas bancarias
    function checkLuhn(digits) {
      const clean = digits.replace(/\D/g, '');
      if (clean.length < 15 || clean.length > 16) return false;
      if (/^(\d)\1+$/.test(clean)) return false;
      let sum = 0;
      let alternate = false;
      for (let i = clean.length - 1; i >= 0; i--) {
        let n = parseInt(clean.charAt(i), 10);
        if (alternate) {
          n *= 2;
          if (n > 9) n -= 9;
        }
        sum += n;
        alternate = !alternate;
      }
      return (sum % 10 === 0);
    }

    // Step 1 -> Step 2 Button
    const btnNext = document.getElementById('btnNextToPayment');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (!validateCheckoutStep1(true)) {
          return;
        }
        goToCheckoutStep(2);
      });
    }

    // Step 2 -> Step 1 Back Button
    const btnBack = document.getElementById('btnBackToShipping');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        goToCheckoutStep(1);
      });
    }

    // Interactive Step Badges Navigation
    document.getElementById('badgeStep1')?.addEventListener('click', () => goToCheckoutStep(1));
    document.getElementById('badgeStep2')?.addEventListener('click', () => {
      if (!validateCheckoutStep1(true)) {
        return;
      }
      goToCheckoutStep(2);
    });

    document.getElementById('badgeStep3')?.addEventListener('click', () => {
      const pane3 = document.getElementById('checkoutStep3');
      if (pane3 && pane3.innerHTML.trim().length > 20) {
        goToCheckoutStep(3);
      } else {
        if (DOM.checkoutForm) {
          if (typeof DOM.checkoutForm.requestSubmit === 'function') {
            DOM.checkoutForm.requestSubmit();
          } else {
            document.getElementById('btnConfirmOrder')?.click();
          }
        }
      }
    });

    // Checkout Form Submission (Step 2 -> Step 3: Confirmación con validación estricta de pago)
    if (DOM.checkoutForm) {
      DOM.checkoutForm.addEventListener('submit', (e) => {
        // 0. VERIFICACIÓN CRÍTICA: SESIÓN ACTIVA OBLIGATORIA PARA CONFIRMAR COMPRAS
        const activeUser = getActiveAuthUser();
        if (!activeUser || (!activeUser.email && !activeUser.fullName)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          closeAllModals();
          sessionStorage.setItem('callejon_pending_checkout', 'true');
          if (window.DavantiAuth && typeof window.DavantiAuth.openAuth === 'function') {
            window.DavantiAuth.openAuth('login');
          } else if (window.DavantiAuth && typeof window.DavantiAuth.openModal === 'function') {
            window.DavantiAuth.openModal('login');
          }
          showToast('🔒 Tu sesión no está activa. Inicia sesión con tu cuenta para confirmar tu compra.');
          return;
        }

        // 1. VALIDACIÓN PASO 1 (si no se completó adecuadamente)
        if (!validateCheckoutStep1(true)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          goToCheckoutStep(1);
          return;
        }

        const recipientName = (document.getElementById('checkoutRecipientName')?.value || '').trim();
        const recipientEmail = (document.getElementById('checkoutEmail')?.value || '').trim();
        const street = (document.getElementById('checkoutStreet')?.value || '').trim();
        const postal = (document.getElementById('checkoutPostal')?.value || '').trim();
        const city = (document.getElementById('checkoutCity')?.value || '').trim();
        const phone = (document.getElementById('checkoutPhone')?.value || '').trim();
        const phoneDigits = phone.replace(/\D/g, '');

        // 2. VALIDACIÓN PASO 2: DATOS REALES DE PAGO REQUERIDOS
        const activeRadio = DOM.checkoutForm.querySelector('input[name="paymentMethod"]:checked');
        const methodVal = activeRadio ? (activeRadio.value || activeRadio.closest('.payment-radio-card')?.dataset.method) : 'callejon';

        let paymentLabel = 'Tarjeta Departamental Callejón Mágico';

        const cartSubtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let discount = 0;
        let totalAmount = cartSubtotal;
        let lastCharge = window.__lastCallejonCharge || {};

        if (methodVal === 'callejon') {
          discount = Math.round(cartSubtotal * 0.10 * 100) / 100;
          totalAmount = Math.round((cartSubtotal - discount) * 100) / 100;
        }

        const netSubtotal = Math.round((totalAmount / 1.16) * 100) / 100;
        const iva = Math.round((totalAmount - netSubtotal) * 100) / 100;

        if (methodVal === 'card') {
          const ccNumberInput = document.getElementById('ccCardNumber');
          const ccHolderInput = document.getElementById('ccCardHolder');
          const ccExpiryInput = document.getElementById('ccCardExpiry');
          const ccCvvInput = document.getElementById('ccCardCvv');
          const ccInstallmentsSelect = document.getElementById('ccCardInstallments');
          const brandBadge = document.getElementById('detectedCardBrand');

          const rawNum = (ccNumberInput?.value || '').replace(/\D/g, '');
          if (rawNum.length < 15 || rawNum.length > 16 || !checkLuhn(rawNum)) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (ccNumberInput) {
              ccNumberInput.focus();
              ccNumberInput.style.borderColor = '#ef4444';
              ccNumberInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
            }
            showToast('💳 Ingresa un número de tarjeta de crédito o débito real y válido (15 o 16 dígitos verificados por banco).');
            return;
          } else if (ccNumberInput) {
            ccNumberInput.style.borderColor = '';
            ccNumberInput.style.boxShadow = '';
          }

          const holder = (ccHolderInput?.value || '').trim();
          const holderWords = holder.split(/\s+/).filter(w => w.length > 0);
          if (holder.length < 5 || holderWords.length < 2 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/.test(holder)) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (ccHolderInput) {
              ccHolderInput.focus();
              ccHolderInput.style.borderColor = '#ef4444';
              ccHolderInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
            }
            showToast('👤 Ingresa el nombre y apellido del titular como figura en la tarjeta bancaria.');
            return;
          } else if (ccHolderInput) {
            ccHolderInput.style.borderColor = '';
            ccHolderInput.style.boxShadow = '';
          }

          const expiry = (ccExpiryInput?.value || '').trim();
          const expMatch = expiry.match(/^(\d{2})\/(\d{2})$/);
          if (!expMatch) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (ccExpiryInput) {
              ccExpiryInput.focus();
              ccExpiryInput.style.borderColor = '#ef4444';
              ccExpiryInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
            }
            showToast('📅 Ingresa la vigencia de la tarjeta en formato MM/AA (ejemplo: 08/29).');
            return;
          }
          const expMonth = parseInt(expMatch[1], 10);
          const expYear = parseInt(expMatch[2], 10);
          const now = new Date();
          const curY = now.getFullYear() % 100; // e.g. 26
          const curM = now.getMonth() + 1; // 1-12

          if (expMonth < 1 || expMonth > 12 || expYear < curY || (expYear === curY && expMonth < curM)) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (ccExpiryInput) {
              ccExpiryInput.focus();
              ccExpiryInput.style.borderColor = '#ef4444';
              ccExpiryInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
            }
            showToast('⚠️ La tarjeta está vencida o el mes es inválido. Ingresa una vigencia vigente.');
            return;
          } else if (ccExpiryInput) {
            ccExpiryInput.style.borderColor = '';
            ccExpiryInput.style.boxShadow = '';
          }

          const rawCvv = (ccCvvInput?.value || '').replace(/\D/g, '');
          if (rawCvv.length < 3 || rawCvv.length > 4) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (ccCvvInput) {
              ccCvvInput.focus();
              ccCvvInput.style.borderColor = '#ef4444';
              ccCvvInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';
            }
            showToast('🔒 Ingresa el código de seguridad CVV (3 o 4 dígitos numéricos).');
            return;
          } else if (ccCvvInput) {
            ccCvvInput.style.borderColor = '';
            ccCvvInput.style.boxShadow = '';
          }

          const brand = brandBadge?.textContent || 'Bancaria';
          const last4 = rawNum.slice(-4);
          const installments = ccInstallmentsSelect?.value || '1';
          const instLabel = installments === '1' ? '1 solo pago de contado' : `${installments} Meses Sin Intereses`;
          paymentLabel = `Tarjeta ${brand} (•••• ${last4}) — ${instLabel}`;

        } else if (methodVal === 'cash') {
          // MÉTODO 2: EFECTIVO (Contraentrega / Sucursal / SPEI / OXXO)
          // NO TOCA LA TARJETA CALLEJÓN MÁGICO. EL SALDO DE LA TIENDA QUEDA 100% INTACTO.
          const cashTypeSelect = document.getElementById('cashPaymentType');
          const cashType = cashTypeSelect ? cashTypeSelect.value : 'contraentrega';
          let cashLabel = 'Efectivo contra entrega';
          if (cashType === 'sucursal') cashLabel = 'Efectivo en Sucursal';
          else if (cashType === 'spei') cashLabel = 'Transferencia SPEI';
          else if (cashType === 'oxxo') cashLabel = 'Depósito en OXXO';
          paymentLabel = `Efectivo (${cashLabel})`;

        } else {
          // MÉTODO 1: TARJETA DE LA TIENDA (Financiamiento a MSI con 10% OFF)
          if (!activeUser || (!activeUser.fullName && !activeUser.email)) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showToast('🔒 Para usar tu Tarjeta de la tienda inicia sesión, o selecciona Efectivo / Tarjeta Bancaria.');
            return;
          }

          // Procesar cargo a través de CallejonCard (UNA SOLA VEZ)
          lastCharge = window.__lastCallejonCharge || {};
          const selectedMsi = lastCharge.msi || 18;
          let chargeResult = null;
          if (window.CallejonCard && typeof window.CallejonCard.charge === 'function') {
            chargeResult = window.CallejonCard.charge(totalAmount, 'Compra departamental financiada Callejón Mágico', selectedMsi);
            if (!chargeResult || !chargeResult.success) {
              e.preventDefault();
              e.stopImmediatePropagation();
              showToast(chargeResult?.message || '⚠️ No se pudo procesar el cargo con tu Tarjeta Callejón Mágico.');
              return;
            }
          }

          paymentLabel = `Tarjeta Departamental Callejón Mágico (${selectedMsi} MSI)`;
        }

        e.preventDefault();
        const orderNum = 'CLM-' + Math.floor(100000 + Math.random() * 900000);

        // Read charge details if handled by CallejonCard
        const earnedPoints = lastCharge.pointsEarned || Math.max(25, Math.round(totalAmount * 0.05));
        let totalPoints = lastCharge.totalPoints;
        if (!totalPoints && window.CallejonCard && typeof window.CallejonCard.getCard === 'function') {
          const card = window.CallejonCard.getCard();
          totalPoints = card ? card.points : earnedPoints;
        }

        // Registrar pedido en CallejonOrders PRIMERO con los datos exactos del comprador
        const orderItemsToSave = State.cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size || 'Estándar',
          color: item.color || '',
          image: item.image || 'img/logo-icon.svg'
        }));

        let savedOrder = null;
        if (window.CallejonOrders && typeof window.CallejonOrders.addOrder === 'function') {
          savedOrder = window.CallejonOrders.addOrder({
            orderNum: orderNum,
            userId: activeUser?.id || null,
            userEmail: (activeUser?.email || recipientEmail || '').trim().toLowerCase(),
            username: activeUser?.username || null,
            total: totalAmount,
            subtotal: cartSubtotal,
            discount: discount,
            iva: iva,
            paymentMethod: paymentLabel,
            msi: lastCharge.msi || 1,
            pointsEarned: earnedPoints,
            recipient: {
              name: recipientName,
              email: recipientEmail,
              phone: phone,
              street: street,
              city: city
            },
            items: orderItemsToSave
          });
        }

        // Disparar apertura automática de WhatsApp con el ticket oficial al número del usuario usando la orden recién registrada
        if (window.CallejonTicket && typeof window.CallejonTicket.sendWhatsAppFromOrder === 'function') {
          try {
            window.CallejonTicket.sendWhatsAppFromOrder(savedOrder || orderNum, phone);
          } catch(err) {
            console.error('Error al abrir WhatsApp:', err);
          }
        }

        const pane3 = document.getElementById('checkoutStep3');
        const confirmationHtml = `
          <div style="text-align: center; padding: 1.5rem 0.5rem;">
            <div style="width: 72px; height: 72px; border-radius: 50%; background: #ecfdf5; border: 2px solid #10b981; color: #059669; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style="font-size: 1.65rem; font-weight: 800; color: #0b1b3d; margin-bottom: 0.4rem; font-family: var(--font-serif);">¡Gracias por tu compra en Callejón Mágico!</h3>
            <p style="font-size: 0.95rem; color: #4b5563; margin-bottom: 1.25rem;">Tu pedido <strong style="color: #0b1b3d;">#${orderNum}</strong> ha sido confirmado con éxito. Ya puedes ver lo que compraste y seguir su ruta de envío en tiempo real.</p>
            
            <div class="checkout-points-awarded-badge">
              <div class="points-title">✨ ¡Has acumulado +${earnedPoints} Puntos Mágicos! ✨</div>
              <div class="points-desc">Tus puntos han sido acreditados a tu cuenta departamental.<br>Total acumulado: <span class="points-total">${(totalPoints || earnedPoints).toLocaleString()} Puntos Mágicos</span>.</div>
            </div>

            <div style="background: #f8fafc; padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid #e2e8f0; margin-bottom: 1.5rem; text-align: left; font-size: 0.88rem; line-height: 1.6;">
              <p style="margin-bottom: 0.4rem;">👤 <strong>Destinatario:</strong> ${recipientName} (${phone})</p>
              <p style="margin-bottom: 0.4rem;">💬 <strong>WhatsApp Oficial:</strong> <span style="color: #10b981; font-weight: 600;">Ticket enviado a <strong>${phone}</strong></span></p>
              ${recipientEmail ? `<p style="margin-bottom: 0.4rem;">📧 <strong>Ticket Digital:</strong> <span id="checkoutAutoEmailStatus" style="color: #059669; font-weight: 600;">Enviando automáticamente a <strong>${recipientEmail}</strong>...</span></p>` : ''}
              <p style="margin-bottom: 0.4rem;">📍 <strong>${street.includes('Plantel') ? 'Sucursal de retiro (Click & Collect):' : 'Dirección de entrega:'}</strong> ${street}, ${city}</p>
              <p style="margin-bottom: 0.4rem;">📦 <strong>${street.includes('Plantel') ? 'Disponibilidad:' : 'Entrega de cortesía:'}</strong> ${street.includes('Plantel') ? '¡Listo para entrega en 2 horas en la sucursal seleccionada con tu INE y número de orden!' : 'En 48 a 72 horas hábiles en empaque boutique.'}</p>
              <p style="margin-bottom: 0.4rem;">💳 <strong>Método de pago:</strong> ${paymentLabel} — Aprobado inmediatamente.</p>
              ${(methodVal === 'callejon' && lastCharge.msi > 1) ? `<p style="margin-bottom: 0;">🎉 <strong>Financiamiento:</strong> ${lastCharge.msi} mensualidades sin intereses de $${(totalAmount / lastCharge.msi).toLocaleString('es-MX', { minimumFractionDigits: 2 })} con 10% OFF aplicado a tu Tarjeta Callejón Mágico.</p>` : ''}
              ${methodVal === 'cash' ? `<p style="margin-bottom: 0;">💵 <strong>Modalidad de pago:</strong> Liquidado al 100% de contado. Tu crédito y saldo de Tarjeta Callejón Mágico no fueron afectados.</p>` : ''}
            </div>

            <div class="checkout-confirm-actions">
              <button type="button" class="checkout-action-btn btn-whatsapp" onclick="event.stopPropagation(); if(window.CallejonTicket){CallejonTicket.sendWhatsAppFromOrder('${orderNum}', '${phone}');}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.34 7.35 9.04 7.42 8.78 7.7C8.52 7.97 7.81 8.63 7.81 10C7.81 11.37 8.81 12.69 8.94 12.87C9.08 13.06 11.03 16.06 14 17.35C14.71 17.65 15.26 17.84 15.7 17.98C16.41 18.2 17.06 18.17 17.57 18.1C18.14 18.01 19.33 17.38 19.58 16.68C19.83 15.98 19.83 15.38 19.76 15.26C19.69 15.13 19.5 15.06 19.22 14.92C18.94 14.78 17.57 14.1 17.31 14.01C17.06 13.92 16.87 13.87 16.68 14.15C16.5 14.43 15.96 15.06 15.8 15.25C15.64 15.43 15.49 15.46 15.21 15.32C14.93 15.18 13.75 14.79 12.35 13.54C11.26 12.57 10.53 11.37 10.31 11C10.1 10.63 10.29 10.43 10.43 10.29C10.56 10.16 10.71 9.96 10.86 9.79C11 9.61 11.06 9.48 11.15 9.29C11.25 9.11 11.19 8.94 11.12 8.81C11.06 8.67 10.5 7.31 10.28 6.78C10.06 6.25 9.83 6.32 9.67 6.32C9.53 6.32 9.34 6.31 9.53 7.35Z"/>
                </svg>
                <span>Abrir / Reenviar en WhatsApp</span>
              </button>
              <button type="button" class="checkout-action-btn btn-view-ticket" onclick="event.stopPropagation(); document.getElementById('checkoutModal')?.classList.remove('active'); if(window.CallejonTicket){CallejonTicket.open('${orderNum}');}">
                <span>🧾 Ver / Imprimir Ticket de Compra</span>
              </button>
              <button type="button" class="checkout-action-btn btn-resend-email" onclick="event.stopPropagation(); if(window.CallejonTicket){CallejonTicket.sendEmailFromOrder('${orderNum}', '${recipientEmail}');}">
                <span>✉️ Reenviar Ticket a mi Correo</span>
              </button>
              <button type="button" class="checkout-action-btn btn-track-order" onclick="event.stopPropagation(); document.getElementById('checkoutModal')?.classList.remove('active'); if(window.CallejonOrders){CallejonOrders.openModal('${orderNum}');}">
                <span>📦 Rastrear este pedido en Mis Pedidos</span>
              </button>
              <button type="button" class="checkout-action-btn btn-keep-browsing" onclick="document.getElementById('checkoutModal')?.classList.remove('active'); document.getElementById('modalBackdrop')?.classList.remove('active'); document.body.style.overflow=''; location.reload();">
                <span>Seguir explorando catálogo</span>
              </button>
            </div>
          </div>
        `;

        if (pane3) {
          pane3.innerHTML = confirmationHtml;
          goToCheckoutStep(3);
        } else {
          DOM.checkoutForm.innerHTML = confirmationHtml;
        }

        // Clear cart
        State.cart = [];
        saveCart();
        updateCartUI();

        // Enviar automáticamente el ticket por correo vía EmailJS al correo indicado
        if (recipientEmail && window.CallejonTicket && typeof window.CallejonTicket.sendEmailFromOrder === 'function') {
          setTimeout(() => {
            window.CallejonTicket.sendEmailFromOrder(orderNum, recipientEmail, true);
          }, 400);
        }
      });
    }
  }

  // Expose global methods for department pages (Fashion, Tech, etc.)
  window.CallejonApp = window.DavantiApp = window.GrandeApp = {
    addToCart,
    removeCartItem,
    clearCart,
    confirmClearCart,
    reloadCart,
    clearSearch,
    clearSearchHistory,
    addSearchHistory,
    getSearchHistory,
    toggleWishlist,
    openDrawer,
    closeAllModals,
    openQuickView,
    updateCartUI,
    updateWishlistUI,
    showToast,
    openCheckoutModal: () => openModal('checkout'),
    openOrdersModal: (targetNum) => window.CallejonOrders?.openModal(targetNum)
  };

  // Run on start
  init();
});

