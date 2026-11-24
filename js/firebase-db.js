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
    CUSTOM_PRODUCTS: 'callejon_custom_products',
    STAFF: 'callejon_staff_db',
    DELETED_STAFF: 'callejon_deleted_staff'
  };

  function isDeletedStaffMember(emp, deletedList) {
    if (!emp) return false;
    if (!deletedList || !deletedList.length) return false;
    const norm = (v) => String(v || '').trim().toLowerCase();
    const empId = norm(emp.id);
    const empCode = norm(emp.code);
    const empEmail = norm(emp.email);
    const empName = norm(emp.fullName);

    return deletedList.some(item => {
      const d = norm(item);
      if (!d) return false;
      return (empId && d === empId) ||
             (empCode && d === empCode) ||
             (empEmail && d === empEmail) ||
             (empName && d === empName);
    });
  }

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
        const nowIso = new Date().toISOString();
        const payload = {
          ...userData,
          _updatedAt: nowIso
        };
        const idKey = sanitizeKey(userData.id || userData.email);
        const ref = db.ref('users/' + idKey);
        await ref.set(payload);

        // Si existen otros nodos duplicados con el mismo correo en Firebase, actualizarlos o limpiarlos
        if (userData.email) {
          const targetEmail = String(userData.email).trim().toLowerCase();
          const snap = await db.ref('users').once('value');
          if (snap.exists()) {
            const val = snap.val() || {};
            const updates = {};
            Object.entries(val).forEach(([k, u]) => {
              if (k !== idKey && u && u.email && String(u.email).trim().toLowerCase() === targetEmail) {
                updates[k] = null; // Eliminar nodo duplicado viejo para dejar solo el nodo canónico actualizado
              }
            });
            if (Object.keys(updates).length > 0) {
              await db.ref('users').update(updates);
            }
          }
        }
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
          const matches = all.filter(u =>
            u && (
              (u.email && String(u.email).toLowerCase() === clean) ||
              (u.username && String(u.username).toLowerCase() === clean) ||
              (u.id && String(u.id).toLowerCase() === clean)
            )
          );
          if (matches.length === 0) return null;
          // Si hay más de una coincidencia, priorizar la más reciente por _updatedAt y que tenga contraseña
          matches.sort((a, b) => {
            const tA = a._updatedAt ? new Date(a._updatedAt).getTime() : 0;
            const tB = b._updatedAt ? new Date(b._updatedAt).getTime() : 0;
            return tB - tA;
          });
          return matches[0];
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
    // 5. SINCRONIZACIÓN DE PERSONAL & EMPLEADOS
    // =========================================================================
    async syncStaff(staffMember) {
      if (!staffMember || !this.isReady()) return;
      try {
        // Usar código o id como clave canónica única para evitar duplicados
        const staffKey = sanitizeKey(staffMember.code || staffMember.id || staffMember.email);
        await db.ref('staff/' + staffKey).set({
          ...staffMember,
          _updatedAt: new Date().toISOString()
        });
      } catch (e) {
        console.warn('CallejonFirebase: Error al sincronizar empleado:', e);
      }
    },

    async deleteStaff(staffId) {
      if (!staffId || !this.isReady()) return;
      try {
        const staffKey = sanitizeKey(staffId);
        await db.ref('staff/' + staffKey).remove();

        const cleanNorm = sanitizeKey(String(staffId).replace(/[^a-zA-Z0-9]/g, '_'));
        if (cleanNorm !== staffKey) {
          await db.ref('staff/' + cleanNorm).remove();
        }
      } catch (e) {
        console.warn('CallejonFirebase: Error al borrar empleado en Firebase:', e);
      }
    },

    // =========================================================================
    // 6. INICIALIZACIÓN DE ESCUCHADORES EN VIVO (LISTENERS)
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

          // 1. Agregar usuarios remotos (si hay duplicados, conservar el más reciente por _updatedAt)
          if (remoteData) {
            Object.values(remoteData).forEach(u => {
              if (u && (u.id || u.email)) {
                const k = String(u.email || u.id).trim().toLowerCase();
                if (!userMap.has(k)) {
                  userMap.set(k, u);
                } else {
                  const existing = userMap.get(k);
                  const tExisting = existing._updatedAt ? new Date(existing._updatedAt).getTime() : 0;
                  const tNew = u._updatedAt ? new Date(u._updatedAt).getTime() : 0;
                  if (tNew >= tExisting) {
                    userMap.set(k, { ...existing, ...u });
                  } else {
                    userMap.set(k, { ...u, ...existing });
                  }
                }
              }
            });
          }

          // 2. Comparar con usuarios locales: si no estaban en la nube o si el local es más reciente, preservar y sincronizar
          localUsers.forEach(lu => {
            if (lu && (lu.id || lu.email)) {
              const k = String(lu.email || lu.id).trim().toLowerCase();
              if (!userMap.has(k)) {
                userMap.set(k, lu);
                const idKey = sanitizeKey(lu.id || lu.email);
                db.ref('users/' + idKey).set({
                  ...lu,
                  _updatedAt: lu._updatedAt || new Date().toISOString()
                }).catch(() => {});
              } else {
                const remoteU = userMap.get(k);
                const tRemote = remoteU._updatedAt ? new Date(remoteU._updatedAt).getTime() : 0;
                const tLocal = lu._updatedAt ? new Date(lu._updatedAt).getTime() : 0;
                if (tLocal > tRemote) {
                  const merged = { ...remoteU, ...lu };
                  userMap.set(k, merged);
                  const idKey = sanitizeKey(merged.id || merged.email);
                  db.ref('users/' + idKey).set(merged).catch(() => {});
                } else if (!remoteU.password && lu.password) {
                  const merged = { ...remoteU, password: lu.password };
                  userMap.set(k, merged);
                }
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

            const merged = { ...localCards };
            const cardsToPushBack = {};

            Object.entries(remoteCards).forEach(([k, rCard]) => {
              if (!rCard) return;
              const lCard = localCards[k];
              if (!lCard) {
                merged[k] = rCard;
                return;
              }

              const tRemote = rCard._updatedAt ? new Date(rCard._updatedAt).getTime() : 0;
              const tLocal = lCard._updatedAt ? new Date(lCard._updatedAt).getTime() : 0;

              const limR = Number(rCard.creditLimit) || 60000;
              const limL = Number(lCard.creditLimit) || 60000;
              const debtR = Math.max(0, limR - (typeof rCard.balance === 'number' ? rCard.balance : limR));
              const debtL = Math.max(0, limL - (typeof lCard.balance === 'number' ? lCard.balance : limL));
              const txR = Array.isArray(rCard.transactions) ? rCard.transactions.length : 0;
              const txL = Array.isArray(lCard.transactions) ? lCard.transactions.length : 0;

              // Si la tarjeta local es más reciente o tiene compras registradas que aún no estaban en un registro remoto virgen
              if (tLocal > tRemote || (tLocal === tRemote && (debtL > debtR || txL > txR)) || (!tRemote && debtL > debtR)) {
                merged[k] = lCard;
                cardsToPushBack[sanitizeKey(k)] = lCard;
              } else {
                merged[k] = rCard;
              }
            });

            // Normalizar topes de crédito: Ningún saldo puede superar la línea autorizada
            Object.values(merged).forEach(card => {
              if (card) {
                const limit = Number(card.creditLimit) || 60000;
                card.creditLimit = limit;
                if (Number(card.balance) > limit) {
                  card.balance = limit;
                  card.debt = 0;
                  card.daysOverdue = 0;
                } else {
                  card.debt = Math.max(0, Math.round((limit - (Number(card.balance) || 0)) * 100) / 100);
                }
              }
            });

            localStorage.setItem(STORAGE_KEYS.CARDS, JSON.stringify(merged));
            if (Object.keys(cardsToPushBack).length > 0) {
              db.ref('cards').update(cardsToPushBack).catch(() => {});
            }
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

      // --- ESCUCHADOR: PERSONAL & EMPLEADOS ---
      db.ref('staff').on('value', snap => {
        try {
          const remoteStaff = snap.val();
          let localStaff = [];
          try {
            localStaff = JSON.parse(localStorage.getItem(STORAGE_KEYS.STAFF) || '[]');
          } catch (e) {}

          let deletedStaff = [];
          try {
            deletedStaff = JSON.parse(localStorage.getItem(STORAGE_KEYS.DELETED_STAFF) || '[]');
          } catch (e) {}

          const staffMap = new Map();
          if (remoteStaff) {
            Object.entries(remoteStaff).forEach(([remKey, st]) => {
              if (!st) return;

              // Si el empleado remoto está en la lista negra de bajas, purgarlo de Firebase
              if (isDeletedStaffMember(st, deletedStaff) || deletedStaff.some(d => sanitizeKey(d) === remKey)) {
                db.ref('staff/' + remKey).remove().catch(() => {});
                return;
              }

              // Usar como clave única su CÓDIGO (ej: EMP-0101) o ID normalizado para NUNCA duplicar
              const uniqueKey = (st.code || st.id || remKey).trim().toUpperCase();
              if (staffMap.has(uniqueKey)) {
                // Registro duplicado detectado en la nube: fusionar conservando modificaciones recientes
                const existing = staffMap.get(uniqueKey);
                const resolvedStatus = (existing.status === 'activo' || st.status === 'activo')
                  ? 'activo'
                  : (st.status || existing.status || 'activo');
                const merged = { ...existing, ...st, status: resolvedStatus };
                if (st.shift && st.shift !== 'completo') {
                  merged.shift = st.shift;
                  merged.shiftName = st.shiftName || merged.shiftName;
                }
                staffMap.set(uniqueKey, merged);

                // Si la clave remota huérfana no es la canónica, purgar el duplicado de Firebase
                const canonicalKey = sanitizeKey(st.code || st.id);
                if (remKey !== canonicalKey) {
                  db.ref('staff/' + remKey).remove().catch(() => {});
                }
              } else {
                // Si el estatus viene inactivo pero no está en la lista negra, normalizar a activo
                if (st.status === 'inactivo' && !isDeletedStaffMember(st, deletedStaff)) {
                  st.status = 'activo';
                }
                staffMap.set(uniqueKey, st);
              }
            });
          }

          // Conservar colaboradores locales no sincronizados (si no han sido dados de baja)
          localStaff.forEach(ls => {
            if (!ls) return;
            if (isDeletedStaffMember(ls, deletedStaff)) return;

            const uniqueKey = (ls.code || ls.id).trim().toUpperCase();
            if (!staffMap.has(uniqueKey)) {
              staffMap.set(uniqueKey, ls);
              const staffKey = sanitizeKey(ls.code || ls.id);
              db.ref('staff/' + staffKey).set({
                ...ls,
                _updatedAt: new Date().toISOString()
              }).catch(() => {});
            }
          });

          const mergedStaff = Array.from(staffMap.values());
          if (mergedStaff.length > 0) {
            const currentRaw = localStorage.getItem(STORAGE_KEYS.STAFF) || '[]';
            const newRaw = JSON.stringify(mergedStaff);
            if (currentRaw !== newRaw) {
              localStorage.setItem(STORAGE_KEYS.STAFF, newRaw);
              notifyLocal('staff');
            }
          }
        } catch (e) {
          console.warn('CallejonFirebase: Error en listener de empleados:', e);
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
