/**
 * GRANDÉ TIENDA DEPARTAMENTAL - Lógica Departamental: Videojuegos & Consolas
 * Filtros por plataforma, subcategoría, precio, ordenamiento y vista rápida.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // STATE
  // =========================================================================
  const GamingState = {
    subcategory: 'all',
    platform: 'all',
    minPrice: null,
    maxPrice: null,
    onlyDiscount: false,
    onlyFreeShipping: false,
    sortBy: 'featured',
    gridCols: 3
  };

  // =========================================================================
  // DOM REFS
  // =========================================================================
  const DOM = {
    grid:           document.getElementById('gamingProductsGrid'),
    counter:        document.getElementById('gamingProductCount'),
    activeChips:    document.getElementById('activeFilterChips'),
    btnResetAll:    document.getElementById('btnResetAllFilters'),
    sortSelect:     document.getElementById('gamingSortSelect'),
    platformPills:  document.querySelectorAll('.platform-pill-btn'),
    catLinks:       document.querySelectorAll('.gaming-cat-link'),
    minPriceInput:  document.getElementById('gamingMinPrice'),
    maxPriceInput:  document.getElementById('gamingMaxPrice'),
    btnApplyPrice:  document.getElementById('btnGamingApplyPrice'),
    chkOnlyDiscount:  document.getElementById('chkGamingOnlyDiscount'),
    chkOnlyShipping:  document.getElementById('chkGamingOnlyShipping'),
    btnGridCols3:   document.getElementById('btnGamingGridCols3'),
    btnGridCols4:   document.getElementById('btnGamingGridCols4')
  };

  // =========================================================================
  // URL PARAMS
  // =========================================================================
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('subcategory')) {
      GamingState.subcategory = params.get('subcategory').toLowerCase();
      updateCatLinks();
    }
    if (params.has('platform')) {
      GamingState.platform = params.get('platform');
      updatePlatformPills();
    }
    if (params.has('discount') && params.get('discount') === 'true') {
      GamingState.onlyDiscount = true;
      if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = true;
    }
  }

  function updateCatLinks() {
    DOM.catLinks.forEach(link => {
      const isConsolasJuegos = (GamingState.subcategory === 'consolas' || GamingState.subcategory === 'juegos' || GamingState.subcategory === 'consolas-videojuegos');
      if (link.dataset.subcategory === 'consolas-videojuegos' && isConsolasJuegos) {
        link.classList.add('active');
      } else {
        link.classList.toggle('active', link.dataset.subcategory === GamingState.subcategory);
      }
    });
  }

  function updatePlatformPills() {
    DOM.platformPills.forEach(pill =>
      pill.classList.toggle('active', pill.dataset.platform.toLowerCase() === GamingState.platform.toLowerCase())
    );
  }

  // =========================================================================
  // FILTER
  // =========================================================================
  function getFilteredProducts() {
    let list = PRODUCTS_DATA.filter(p => p.category === 'videojuegos');

    if (GamingState.subcategory !== 'all') {
      if (GamingState.subcategory === 'consolas' || GamingState.subcategory === 'juegos' || GamingState.subcategory === 'consolas-videojuegos') {
        list = list.filter(p => p.subcategory === 'consolas-videojuegos' || p.subcategory === 'consolas' || p.subcategory === 'juegos');
      } else {
        list = list.filter(p => p.subcategory === GamingState.subcategory);
      }
    }

    if (GamingState.platform !== 'all') {
      list = list.filter(p => p.platform && p.platform.toLowerCase() === GamingState.platform.toLowerCase());
    }

    if (GamingState.minPrice !== null && !isNaN(GamingState.minPrice)) {
      list = list.filter(p => p.price >= GamingState.minPrice);
    }
    if (GamingState.maxPrice !== null && !isNaN(GamingState.maxPrice)) {
      list = list.filter(p => p.price <= GamingState.maxPrice);
    }

    if (GamingState.onlyDiscount) {
      list = list.filter(p => p.originalPrice && p.originalPrice > p.price);
    }

    if (GamingState.onlyFreeShipping) {
      list = list.filter(p => p.price >= 999 || p.badgeType === 'shipping');
    }

    switch (GamingState.sortBy) {
      case 'price-asc':   list.sort((a, b) => a.price - b.price); break;
      case 'price-desc':  list.sort((a, b) => b.price - a.price); break;
      case 'rating':      list.sort((a, b) => b.rating - a.rating); break;
      case 'discount':
        list.sort((a, b) => {
          const dA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const dB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return dB - dA;
        });
        break;
    }

    return list;
  }

  // =========================================================================
  // RENDER CATALOG
  // =========================================================================
  function renderGamingCatalog() {
    if (!DOM.grid) return;
    const products = getFilteredProducts();

    if (DOM.counter) DOM.counter.textContent = products.length;
    renderActiveChips();

    if (products.length === 0) {
      DOM.grid.innerHTML = `
        <div class="gaming-empty-state" style="grid-column: 1 / -1;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🎮</div>
          <h4>No encontramos productos con estos filtros</h4>
          <p>Prueba cambiando de plataforma, ajustando el rango de precio o removiendo algún filtro activo.</p>
          <button class="btn-checkout-primary" id="btnGamingEmptyReset" style="width:auto;padding:0.75rem 2rem;margin:0 auto;display:inline-block;background:linear-gradient(135deg,#1a365d,#2d3a6b);border:1px solid rgba(99,179,237,0.3);">
            Ver todo el catálogo Gaming
          </button>
        </div>
      `;
      const b = document.getElementById('btnGamingEmptyReset');
      if (b) b.addEventListener('click', resetAllFilters);
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');

    DOM.grid.innerHTML = products.map(product => {
      const isFav = wishlist.includes(product.id);
      const isDiscounted = product.originalPrice && product.originalPrice > product.price;
      const discPct = isDiscounted ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
      const badgeClass = `badge-${product.badgeType || 'bestseller'}`;
      const msiAmount = (product.price / 12).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const platformTagClass = product.platformTag || 'multi';

      return `
        <article class="gaming-product-card" data-id="${product.id}">
          <div class="product-card-top">
            <span class="product-badge ${badgeClass}">${product.badge}</span>
            <button class="btn-favorite-toggle ${isFav ? 'active' : ''}" data-id="${product.id}" aria-label="Favorito">
              <svg viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div class="product-img-wrapper" data-action="quickview" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
            <button class="product-quickview-btn" data-id="${product.id}">🎮 Ver detalles</button>
          </div>

          <div class="product-info">
            <span class="gaming-platform-tag ${platformTagClass}">${product.platform || 'Multi'}</span>
            <h3 class="product-title" data-action="quickview" data-id="${product.id}">${product.name}</h3>

            <div class="product-rating">
              <div class="stars-row">${renderStars(product.rating)}</div>
              <span class="reviews-count">(${product.reviewsCount.toLocaleString()})</span>
            </div>

            <span class="gaming-genre-badge">${product.genre || 'Gaming'}</span>

            ${window.CallejonOffers ? window.CallejonOffers.getOfferCardTimerHtml(product) : ''}

            <div class="product-price-box">
              <span class="current-price ${isDiscounted ? 'discounted' : ''}">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
              ${isDiscounted ? `<span class="original-price">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` : ''}
              ${isDiscounted ? `<span class="gaming-discount-tag">-${discPct}%</span>` : ''}
            </div>

            <div class="gaming-msi-note">
              <span>💳</span> Hasta 12 MSI de <strong>$${msiAmount}</strong>
            </div>

            <button class="btn-add-to-cart" data-id="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Agregar al Carrito
            </button>
          </div>
        </article>
      `;
    }).join('');

    attachCardEvents();
  }

  function renderStars(rating) {
    let s = '';
    for (let i = 0; i < 5; i++) {
      s += `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
    return s;
  }

  // =========================================================================
  // ACTIVE FILTER CHIPS
  // =========================================================================
  function renderActiveChips() {
    if (!DOM.activeChips) return;
    const chips = [];

    if (GamingState.subcategory !== 'all') {
      const subLabels = {
        'consolas-videojuegos': '🎮 Consolas & Videojuegos',
        'consolas':             '🎮 Consolas & Videojuegos',
        'juegos':               '🎮 Consolas & Videojuegos',
        'accesorios':           '🎧 Accesorios Gaming',
        'pc-gaming':            '💻 PC Gaming',
        'realidad-virtual':     '🥽 Realidad Virtual'
      };
      chips.push({ type: 'subcategory', label: subLabels[GamingState.subcategory] || GamingState.subcategory });
    }

    if (GamingState.platform !== 'all') {
      chips.push({ type: 'platform', label: `Plataforma: ${GamingState.platform}` });
    }

    if (GamingState.minPrice !== null || GamingState.maxPrice !== null) {
      const minT = GamingState.minPrice ? `$${GamingState.minPrice}` : '$0';
      const maxT = GamingState.maxPrice ? `$${GamingState.maxPrice}` : '∞';
      chips.push({ type: 'price', label: `${minT} – ${maxT}` });
    }

    if (GamingState.onlyDiscount)     chips.push({ type: 'discount',  label: 'Solo Ofertas' });
    if (GamingState.onlyFreeShipping) chips.push({ type: 'shipping',  label: 'Envío Gratis' });

    if (chips.length > 0) {
      if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'block';
      DOM.activeChips.innerHTML = chips.map(c => `
        <span class="filter-chip">
          ${c.label}
          <span class="filter-chip-remove" data-type="${c.type}">&times;</span>
        </span>
      `).join('');
      DOM.activeChips.querySelectorAll('.filter-chip-remove').forEach(btn =>
        btn.addEventListener('click', () => removeFilter(btn.dataset.type))
      );
    } else {
      DOM.activeChips.innerHTML = '';
      if (DOM.btnResetAll) DOM.btnResetAll.style.display = 'none';
    }
  }

  function removeFilter(type) {
    if (type === 'subcategory') { GamingState.subcategory = 'all'; updateCatLinks(); }
    else if (type === 'platform') { GamingState.platform = 'all'; updatePlatformPills(); }
    else if (type === 'price') {
      GamingState.minPrice = null; GamingState.maxPrice = null;
      if (DOM.minPriceInput) DOM.minPriceInput.value = '';
      if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    }
    else if (type === 'discount') { GamingState.onlyDiscount = false; if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false; }
    else if (type === 'shipping') { GamingState.onlyFreeShipping = false; if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false; }
    renderGamingCatalog();
  }

  function resetAllFilters() {
    GamingState.subcategory = 'all';
    GamingState.platform = 'all';
    GamingState.minPrice = null;
    GamingState.maxPrice = null;
    GamingState.onlyDiscount = false;
    GamingState.onlyFreeShipping = false;
    updateCatLinks();
    updatePlatformPills();
    if (DOM.minPriceInput) DOM.minPriceInput.value = '';
    if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    if (DOM.chkOnlyDiscount) DOM.chkOnlyDiscount.checked = false;
    if (DOM.chkOnlyShipping) DOM.chkOnlyShipping.checked = false;
    renderGamingCatalog();
  }

  // =========================================================================
  // CARD EVENTS
  // =========================================================================
  function attachCardEvents() {
    DOM.grid.querySelectorAll('.btn-add-to-cart').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (window.GrandeApp) window.GrandeApp.addToCart(id);
        else fallbackAddToCart(id);
      });
    });

    DOM.grid.querySelectorAll('.btn-favorite-toggle').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (window.GrandeApp) window.GrandeApp.toggleWishlist(id);
        else fallbackToggleWishlist(id);
        const wl = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
        const isFav = wl.includes(id);
        btn.classList.toggle('active', isFav);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isFav ? '#ef4444' : 'none');
      });
    });

    DOM.grid.querySelectorAll('[data-action="quickview"], .product-quickview-btn').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        openGamingQuickView(el.dataset.id);
      });
    });
  }

  // =========================================================================
  // QUICKVIEW MODAL
  // =========================================================================
  function openGamingQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const modalWindow = document.getElementById('quickViewModal');
    const modalBody   = document.getElementById('quickViewBody');
    const backdrop    = document.getElementById('modalBackdrop');
    if (!modalWindow || !modalBody) return;

    const isDiscounted = product.originalPrice && product.originalPrice > product.price;
    const discPct = isDiscounted ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    const msiAmount = (product.price / 12).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const wishlist = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
    const isFav = wishlist.includes(product.id);
    const platformTagClass = product.platformTag || 'multi';

    let specsHtml = '';
    if (product.specs) {
      const specLabels = {
        almacenamiento: 'Almacenamiento', resolucion: 'Resolución', fps: 'FPS',
        cpu: 'Procesador', gpu: 'GPU', ram: 'Memoria RAM', audio: 'Audio',
        conectividad: 'Conectividad', pantalla: 'Pantalla', bateria: 'Batería',
        genero: 'Género', jugadores: 'Jugadores', clasificacion: 'Clasificación',
        espacio: 'Espacio en disco', plataformas: 'Plataformas', fov: 'Campo de visión',
        sensores: 'Sensores', frecuencia: 'Frecuencia', conexion: 'Conexión',
        perfiles: 'Perfiles', sticks: 'Sticks', backButtons: 'Botones traseros',
        drivers: 'Drivers', microfono: 'Micrófono', panel: 'Panel',
        refresco: 'Tasa de refresco', respuesta: 'Tiempo respuesta',
        sensor: 'Sensor', dpi: 'DPI', botones: 'Botones', peso: 'Peso'
      };

      specsHtml = `
        <div style="margin: 1.25rem 0;">
          <h5 style="font-size: 0.84rem; font-weight: 700; color: #63b3ed; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.08em;">Especificaciones técnicas</h5>
          <table class="gaming-specs-table">
            <tbody>
              ${Object.entries(product.specs).map(([k, v]) => `
                <tr>
                  <td class="spec-name">${specLabels[k] || k}</td>
                  <td class="spec-val">${v}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    modalBody.innerHTML = `
      <div class="quickview-layout" style="background:#0c1422;">
        <div class="quickview-gallery" style="background:#060d1a; display:flex; align-items:center; justify-content:center;">
          <img src="${product.image}" alt="${product.name}" class="quickview-img" style="max-height:440px; object-fit:cover; width:100%;" />
        </div>
        <div class="quickview-details" style="background:#0f172a; color:#e2e8f0; overflow-y:auto; max-height:85vh;">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
            <span class="gaming-platform-tag ${platformTagClass}">${product.platform || 'Multi'}</span>
            <span style="font-size:0.72rem; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em;">${product.department}</span>
          </div>
          <h2 class="quickview-title" style="color:#e2e8f0; font-size:1.5rem; line-height:1.25; margin:0.3rem 0 0.5rem;">${product.name}</h2>

          <div class="quickview-rating-row" style="margin-bottom:0.75rem;">
            <div class="stars-row">${renderStars(product.rating)}</div>
            <span class="reviews-count" style="color:#64748b;">${product.rating} (${product.reviewsCount.toLocaleString()} reseñas)</span>
            <span class="quickview-sku" style="color:#475569; font-size:0.72rem;">SKU: ${product.sku}</span>
          </div>

          <span class="gaming-genre-badge">${product.genre || 'Gaming'}</span>

          <div style="display:flex; align-items:baseline; gap:0.75rem; margin:0.85rem 0 0.5rem;">
            <span style="font-size:2rem; font-weight:800; color:${isDiscounted ? '#63b3ed' : '#e2e8f0'};">$${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
            ${isDiscounted ? `<span style="text-decoration:line-through; color:#475569; font-size:1.1rem;">$${product.originalPrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>` : ''}
            ${isDiscounted ? `<span class="gaming-discount-tag" style="font-size:0.85rem; padding:0.2rem 0.5rem;">-${discPct}% OFF</span>` : ''}
          </div>

          ${window.CallejonOffers ? window.CallejonOffers.getQuickViewOfferBannerHtml(product) : ''}

          <div style="background:rgba(99,179,237,0.08); border:1px solid rgba(99,179,237,0.2); border-radius:6px; padding:0.55rem 0.85rem; margin-bottom:1rem; font-size:0.84rem; color:#90cdf4; display:flex; align-items:center; gap:0.4rem;">
            <span>💳</span> <strong>Hasta 12 MSI de $${msiAmount}</strong> con Tarjeta Callejón Mágico
          </div>

          <p style="font-size:0.9rem; line-height:1.6; color:#94a3b8; margin-bottom:1rem;">${product.description}</p>

          ${product.features && product.features.length > 0 ? `
            <div style="margin: 0.75rem 0 1rem;">
              <h5 style="font-size:0.84rem; font-weight:700; color:#e2e8f0; margin-bottom:0.45rem;">✅ Características principales:</h5>
              <ul style="font-size:0.85rem; color:#94a3b8; padding-left:1.25rem; line-height:1.7;">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${specsHtml}

          <div style="background:#111827; border:1px solid #1e293b; padding:0.85rem 1rem; border-radius:6px; margin:1.25rem 0; font-size:0.82rem; color:#64748b;">
            🚚 <strong style="color:#e2e8f0;">Envío express</strong> a toda la República · 📦 <strong style="color:#e2e8f0;">Click & Collect</strong> en tienda Callejón Mágico hoy mismo.
          </div>

          <div style="display:flex; gap:0.75rem; align-items:center; margin-top:0.5rem;">
            <button id="btnGamingQVAddCart" style="flex:1; height:50px; background:linear-gradient(135deg,#1a365d,#2d3a6b); color:#90cdf4; border:1px solid rgba(99,179,237,0.3); border-radius:8px; font-size:1rem; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.5rem; transition:all 0.2s;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Agregar al Carrito
            </button>
            <button id="btnGamingQVFav" style="width:50px; height:50px; border:1px solid #334155; border-radius:8px; background:#1e293b; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.2s;" class="${isFav ? 'active' : ''}">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="${isFav ? '#ef4444' : '#64748b'}" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    const btnAdd = modalBody.querySelector('#btnGamingQVAddCart');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (window.GrandeApp) window.GrandeApp.addToCart(product.id);
        else fallbackAddToCart(product.id);
        closeGamingQuickView();
      });
      btnAdd.addEventListener('mouseenter', () => { btnAdd.style.background = 'linear-gradient(135deg,#2a4a7a,#3a4e8a)'; btnAdd.style.color = '#fff'; });
      btnAdd.addEventListener('mouseleave', () => { btnAdd.style.background = 'linear-gradient(135deg,#1a365d,#2d3a6b)'; btnAdd.style.color = '#90cdf4'; });
    }

    const btnFav = modalBody.querySelector('#btnGamingQVFav');
    if (btnFav) {
      btnFav.addEventListener('click', () => {
        if (window.GrandeApp) window.GrandeApp.toggleWishlist(product.id);
        else fallbackToggleWishlist(product.id);
        const wl = JSON.parse(localStorage.getItem('grande_wishlist') || '[]');
        const nowFav = wl.includes(product.id);
        const svg = btnFav.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', nowFav ? '#ef4444' : 'none');
          svg.setAttribute('stroke', nowFav ? '#ef4444' : '#64748b');
        }
      });
    }

    modalWindow.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeGamingQuickView() {
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

  // =========================================================================
  // FALLBACK CART / WISHLIST
  // =========================================================================
  function fallbackAddToCart(productId) {
    const p = PRODUCTS_DATA.find(x => x.id === productId);
    if (!p) return;
    const cart = JSON.parse(localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]');
    const exist = cart.find(i => i.id === productId);
    if (exist) { exist.quantity += 1; }
    else { cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, sku: p.sku, size: null, color: null, quantity: 1 }); }
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
    let wl = JSON.parse(localStorage.getItem('davanti_wishlist') || localStorage.getItem('grande_wishlist') || '[]');
    wl = wl.includes(productId) ? wl.filter(id => id !== productId) : [...wl, productId];
    localStorage.setItem('davanti_wishlist', JSON.stringify(wl));
    localStorage.setItem('grande_wishlist', JSON.stringify(wl));
    window.dispatchEvent(new Event('storage'));
    const app = window.GrandeApp || window.DavantiApp || window.CallejonApp;
    if (app && typeof app.updateWishlistUI === 'function') {
      app.updateWishlistUI();
    }
  }

  // =========================================================================
  // EVENT LISTENERS
  // =========================================================================
  function setupEventListeners() {
    DOM.platformPills.forEach(pill => {
      pill.addEventListener('click', () => {
        DOM.platformPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        GamingState.platform = pill.dataset.platform;
        renderGamingCatalog();
      });
    });

    DOM.catLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        DOM.catLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        GamingState.subcategory = link.dataset.subcategory;
        renderGamingCatalog();
      });
    });

    if (DOM.btnApplyPrice) {
      DOM.btnApplyPrice.addEventListener('click', () => {
        GamingState.minPrice = parseFloat(DOM.minPriceInput.value) || null;
        GamingState.maxPrice = parseFloat(DOM.maxPriceInput.value) || null;
        renderGamingCatalog();
      });
    }

    if (DOM.chkOnlyDiscount) {
      DOM.chkOnlyDiscount.addEventListener('change', () => {
        GamingState.onlyDiscount = DOM.chkOnlyDiscount.checked;
        renderGamingCatalog();
      });
    }

    if (DOM.chkOnlyShipping) {
      DOM.chkOnlyShipping.addEventListener('change', () => {
        GamingState.onlyFreeShipping = DOM.chkOnlyShipping.checked;
        renderGamingCatalog();
      });
    }

    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', e => {
        GamingState.sortBy = e.target.value;
        renderGamingCatalog();
      });
    }

    if (DOM.btnResetAll) DOM.btnResetAll.addEventListener('click', resetAllFilters);

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
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeGamingQuickView);
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) backdrop.addEventListener('click', closeGamingQuickView);
  }

  // =========================================================================
  // INIT
  // =========================================================================
  parseUrlParams();
  setupEventListeners();
  renderGamingCatalog();
});
