/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — MOTOR DE BASE DE DATOS EN LA NUBE (FIREBASE REALTIME DB)
 * Sincronización bidireccional en tiempo real entre App Móvil (APK / PWA)
 * y Panel Administrativo (PC / Escritorio).
 * ==========================================================================
 */

(function (window) {
  'use strict';

  // Configuración oficial de Firebase para Callejón Mágico
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBPUaGqB0vJ0wdfAY5UeIShilZeBqKB11k",
    authDomain: "callejon-magico.firebaseapp.com",
    databaseURL: "https://callejon-magico-default-rtdb.firebaseio.com",
    projectId: "callejon-magico",
    storageBucket: "callejon-magico.firebasestorage.app",
    messagingSenderId: "530158075033",
    appId: "1:530158075033:web:83d9d62ab7107884838c08"
  };

  const STORAGE_KEYS = {
    USERS: 'davanti_users',
    CARDS: 'callejon_cards_by_user',
    ORDERS: 'callejon_user_orders',
    STOCK: 'callejon_stock_db',
    CUSTOM_PRODUCTS: 'callejon_custom_products'
  };

  function sanitizeKey(key) {
    if (!key) return 'unknown_' + Date.now();
    return String(key).replace(/[\.\#\$\[\]\/\s]/g, '_').toLowerCase();
  }

  let db = null;
  let isConnected = false;
  let initialized = false;

  // Inicializar SDK de Firebase
  try {
    if (typeof firebase !== 'undefined') {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
      }
      db = firebase.database();
      initialized = true;
    }
  } catch (err) {
    console.warn('CallejonFirebase: Inicialización en modo local diferido:', err);
  }

  function notifyLocal(type) {
    try {
      window.dispatchEvent(new CustomEvent('callejon_admin_db_changed', { detail: { type } }));
      window.dispatchEvent(new CustomEvent('callejon_cloud_sync', { detail: { type } }));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {}
  }

  function updateStatusUI(online) {
    isConnected = online;
    const pill = document.querySelector('.topbar-sync-pill');
    if (pill) {
      if (online) {
        pill.innerHTML = '<span class="sync-dot" style="background:#10b981; box-shadow: 0 0 8px rgba(16,185,129,0.6);"></span> Firebase en Vivo';
        pill.setAttribute('title', 'Conectado a Firebase Realtime Database');
      } else {
        pill.innerHTML = '<span class="sync-dot" style="background:#f59e0b;"></span> Modo Local';
        pill.setAttribute('title', 'Trabajando en almacenamiento local');
      }
    }
  }

  // Objeto principal de la API de Firebase
  const CallejonFirebase = {
    db: db,
    isOnline: () => isConnected,
    isReady: () => initialized && !!db,

    // =========================================================================
    // 1. SINCRONIZACIÓN DE USUARIOS
    // =========================================================================
    async syncUser(userData) {
      if (!userData || !this.isReady()) return;
      try {
        const idKey = sanitizeKey(userData.id || userData.email);
        const ref = db.ref('users/' + idKey);
        await ref.set({
          ...userData,
          _updatedAt: new Date().toISOString()
        });
      } catch (e) {
        console.warn('CallejonFirebase: Error al subir usuario:', e);
      }
    },

    async deleteUser(userId) {
      if (!userId || !this.isReady()) return;
      try {
        const idKey = sanitizeKey(userId);
        await db.ref('users/' + idKey).remove();
      } catch (e) {
        console.warn('CallejonFirebase: Error al eliminar usuario:', e);
      }
    },

    async fetchUserByEmailOrUsername(identifier) {
      if (!identifier || !this.isReady()) return null;
      try {
        const clean = identifier.trim().toLowerCase().replace(/^@/, '');
        const snap = await db.ref('users').once('value');
        if (snap.exists()) {
          const all = Object.values(snap.val() || {});
          return all.find(u => 
            (u.email && u.email.toLowerCase() === clean) ||
            (u.username && u.username.toLowerCase() === clean) ||
            (u.id && u.id === clean)
          ) || null;
        }
      } catch (e) {
        console.warn('CallejonFirebase: Error en fetchUser:', e);
      }
      return null;
    },

    // =========================================================================
    // 2. SINCRONIZACIÓN DE TARJETAS
    // =========================================================================
    async syncCard(userKey, cardData) {
      if (!userKey || !cardData || !this.isReady()) return;
      try {
        const cleanKey = sanitizeKey(userKey);
        await db.ref('cards/' + cleanKey).set({
          ...cardData,
          _updatedAt: new Date().toISOString()
        });
      } catch (e) {
        console.warn('CallejonFirebase: Error al sincronizar tarjeta:', e);
      }
    },

    async syncAllCards(cardsMap) {
      if (!cardsMap || !this.isReady()) return;
      try {
        const safeBatch = {};
        Object.entries(cardsMap).forEach(([k, v]) => {
          safeBatch[sanitizeKey(k)] = v;
        });
        await db.ref('cards').update(safeBatch);
      } catch (e) {
        console.warn('CallejonFirebase: Error al sincronizar mapa de tarjetas:', e);
      }
    },

    // =========================================================================
    // 3. SINCRONIZACIÓN DE PEDIDOS
    // =========================================================================
    async syncOrder(orderData) {
      if (!orderData || !this.isReady()) return;
      try {
        const orderKey = sanitizeKey(orderData.orderNum || ('CLM_' + Date.now()));
        await db.ref('orders/' + orderKey).set({
          ...orderData,
          _updatedAt: new Date().toISOString()
        });
      } catch (e) {
        console.warn('CallejonFirebase: Error al sincronizar pedido:', e);
      }
    },

    // =========================================================================
    // 4. SINCRONIZACIÓN DE STOCK & PRODUCTOS
    // =========================================================================
    async syncStock(productId, stockQty) {
      if (!productId || !this.isReady()) return;
      try {
        const prodKey = sanitizeKey(productId);
        await db.ref('stock/' + prodKey).set(Number(stockQty) || 0);
      } catch (e) {
        console.warn('CallejonFirebase: Error al sincronizar stock:', e);
      }
    },

    async syncCustomProduct(product) {
      if (!product || !product.id || !this.isReady()) return;
      try {
        const prodKey = sanitizeKey(product.id);
        await db.ref('custom_products/' + prodKey).set(product);
      } catch (e) {
        console.warn('CallejonFirebase: Error al sincronizar producto personalizado:', e);
      }
    },

    // =========================================================================
    // 5. INICIALIZACIÓN DE ESCUCHADORES EN VIVO (LISTENERS)
    // =========================================================================
    initListeners() {
      if (!this.isReady()) return;

      // Estado de conexión a Firebase
      db.ref('.info/connected').on('value', snap => {
        const online = snap.val() === true;
        updateStatusUI(online);
      });

      // --- ESCUCHADOR: USUARIOS ---
      db.ref('users').on('value', snap => {
        try {
          const remoteData = snap.val();
          const localUsers = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
          const userMap = new Map();

          // 1. Agregar usuarios remotos
          if (remoteData) {
            Object.values(remoteData).forEach(u => {
              if (u && (u.id || u.email)) {
                const k = (u.email || u.id).trim().toLowerCase();
                userMap.set(k, u);
              }
            });
          }

          // 2. Si hay usuarios locales que aún no estaban en la nube, subirlos (seed inicial)
          localUsers.forEach(lu => {
            if (lu && (lu.id || lu.email)) {
              const k = (lu.email || lu.id).trim().toLowerCase();
              if (!userMap.has(k)) {
                userMap.set(k, lu);
                // Subir silenciosamente a Firebase
                const idKey = sanitizeKey(lu.id || lu.email);
                db.ref('users/' + idKey).set({
                  ...lu,
                  _updatedAt: new Date().toISOString()
                }).catch(() => {});
              }
            }
          });

          const mergedUsers = Array.from(userMap.values());
          if (mergedUsers.length > 0) {
            localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(mergedUsers));
            notifyLocal('users');
          }
        } catch (e) {
          console.warn('CallejonFirebase: Error en listener de usuarios:', e);
        }
      });

      // --- ESCUCHADOR: TARJETAS ---
      db.ref('cards').on('value', snap => {
        try {
          const remoteCards = snap.val();
          if (remoteCards) {
            let localCards = {};
            try {
              localCards = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARDS) || '{}');
            } catch (e) {}

            const merged = { ...localCards, ...remoteCards };
            // Normalizar topes de crédito: Ningún saldo puede superar la línea autorizada
            Object.values(merged).forEach(card => {
              if (card) {
                const limit = Number(card.creditLimit) || 60000;
                card.creditLimit = limit;
                if (Number(card.balance) > limit) {
                  card.balance = limit;
                  card.debt = 0;
                  card.daysOverdue = 0;
                }
              }
            });
            localStorage.setItem(STORAGE_KEYS.CARDS, JSON.stringify(merged));
            notifyLocal('cards');
          } else {
            // Si la nube está vacía pero localmente hay tarjetas, subirlas
            try {
              const localCards = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARDS) || '{}');
              if (Object.keys(localCards).length > 0) {
                this.syncAllCards(localCards);
              }
            } catch (e) {}
          }
        } catch (e) {
          console.warn('CallejonFirebase: Error en listener de tarjetas:', e);
        }
      });

      // --- ESCUCHADOR: PEDIDOS ---
      db.ref('orders').on('value', snap => {
        try {
          const remoteOrders = snap.val();
          const localOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || '[]');
          const ordersMap = new Map();

          if (remoteOrders) {
            Object.values(remoteOrders).forEach(o => {
              if (o && o.orderNum) ordersMap.set(o.orderNum, o);
            });
          }

          // Conservar pedidos locales no sincronizados y subirlos
          localOrders.forEach(lo => {
            if (lo && lo.orderNum && !ordersMap.has(lo.orderNum)) {
              ordersMap.set(lo.orderNum, lo);
              const orderKey = sanitizeKey(lo.orderNum);
              db.ref('orders/' + orderKey).set({
                ...lo,
                _updatedAt: new Date().toISOString()
              }).catch(() => {});
            }
          });

          const mergedOrders = Array.from(ordersMap.values()).sort((a, b) => {
            return (b.timestamp || 0) - (a.timestamp || 0);
          });

          if (mergedOrders.length > 0) {
            localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(mergedOrders));
            notifyLocal('orders');
          }
        } catch (e) {
          console.warn('CallejonFirebase: Error en listener de pedidos:', e);
        }
      });

      // --- ESCUCHADOR: STOCK ---
      db.ref('stock').on('value', snap => {
        try {
          const remoteStock = snap.val();
          if (remoteStock) {
            let localStock = {};
            try {
              localStock = JSON.parse(localStorage.getItem(STORAGE_KEYS.STOCK) || '{}');
            } catch (e) {}
            const merged = { ...localStock, ...remoteStock };
            localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(merged));
            notifyLocal('stock');
          }
        } catch (e) {
          console.warn('CallejonFirebase: Error en listener de stock:', e);
        }
      });
    }
  };

  // Inicializar listeners al cargar la página
  if (CallejonFirebase.isReady()) {
    CallejonFirebase.initListeners();
  }

  window.CallejonFirebase = CallejonFirebase;

  // Auto-ajustar indicador en DOMContentLoaded
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      if (CallejonFirebase.isReady()) {
        updateStatusUI(isConnected);
      }
    });
  }

})(window);
