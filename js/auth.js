/**
 * ==========================================================================
 * CALLEJÓN MÁGICO - AUTHENTICATION & USER MANAGEMENT SYSTEM
 * Sistema de usuarios real usando el nombre ingresado por el usuario,
 * persistencia dual (API + LocalStorage) y sincronización con UI de perfil.
 * ==========================================================================
 */

(function () {
  'use strict';

  // ==========================================
  // STORAGE & API ENGINE
  // ==========================================
  const AuthEngine = {
    getCurrentUser() {
      try {
        const stored = localStorage.getItem('davanti_current_user');
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    },

    setCurrentUser(user) {
      if (user) {
        localStorage.setItem('davanti_current_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('davanti_current_user');
      }
      if (typeof window !== 'undefined') {
        if (window.CallejonCard && typeof window.CallejonCard.updateUI === 'function') {
          window.CallejonCard.updateUI();
        }
        try {
          if (typeof Event !== 'undefined') {
            window.dispatchEvent(new Event('storage'));
          }
        } catch (e) {}
      }
    },

    getLocalUsers() {
      try {
        const users = localStorage.getItem('davanti_users');
        if (!users) {
          // Initialize with demo user
          const initial = [{
            id: 'usr_demo_1',
            fullName: 'Carlos Mendoza',
            email: 'carlos@callejonmagico.com',
            username: 'davanti_orion99',
            password: 'Password123!',
            tier: 'Privé Gold',
            createdAt: new Date().toISOString()
          }];
          localStorage.setItem('davanti_users', JSON.stringify(initial));
          return initial;
        }
        return JSON.parse(users);
      } catch (e) {
        return [];
      }
    },

    saveLocalUser(user) {
      const users = this.getLocalUsers();
      users.push(user);
      localStorage.setItem('davanti_users', JSON.stringify(users));

      // Sincronización en la nube con Firebase
      if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.syncUser === 'function') {
        window.CallejonFirebase.syncUser(user);
      }
    },

    saveCartForUser(user) {
      if (!user) return;
      try {
        const currentCart = localStorage.getItem('davanti_cart') || localStorage.getItem('grande_cart') || '[]';
        const userKey = 'davanti_user_cart_' + (user.id || user.username);
        localStorage.setItem(userKey, currentCart);

        // Sync with local user record
        const users = this.getLocalUsers();
        const uIdx = users.findIndex(u => u.id === user.id || u.username === user.username || u.email === user.email);
        if (uIdx > -1) {
          users[uIdx].savedCart = JSON.parse(currentCart);
          localStorage.setItem('davanti_users', JSON.stringify(users));
        }
      } catch (e) {
        console.error('Error guardando carrito del usuario:', e);
      }
    },

    restoreCartForUser(user) {
      if (!user) return 0;
      try {
        const userKey = 'davanti_user_cart_' + (user.id || user.username);
        let cartData = localStorage.getItem(userKey);

        if (!cartData && user.savedCart && Array.isArray(user.savedCart)) {
          cartData = JSON.stringify(user.savedCart);
        }

        if (cartData) {
          const parsed = JSON.parse(cartData);
          if (Array.isArray(parsed) && parsed.length > 0) {
            localStorage.setItem('davanti_cart', JSON.stringify(parsed));
            localStorage.setItem('grande_cart', JSON.stringify(parsed));
            if (window.DavantiApp && typeof window.DavantiApp.reloadCart === 'function') {
              window.DavantiApp.reloadCart(parsed);
            }
            return parsed.reduce((sum, i) => sum + (i.quantity || 1), 0);
          }
        }
      } catch (e) {
        console.error('Error restaurando carrito del usuario:', e);
      }
      return 0;
    },

    async register(fullName, email, password, username, phone) {
      const normalizedEmail = email.trim().toLowerCase();
      const cleanPhone = (phone ? String(phone).trim() : '');
      const cleanNameSlug = fullName.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '.').replace(/(^\.|\.$)/g, '');
      const cleanUsername = (username ? username.trim().toLowerCase().replace(/^@/, '') : '') || cleanNameSlug || normalizedEmail.split('@')[0];

      // 1. Try Server API first
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email: normalizedEmail, password, username: cleanUsername, phone: cleanPhone })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.user) {
            this.setCurrentUser(data.user);
            // Save active cart to new account
            this.saveCartForUser(data.user);
            // Sync with local storage
            this.saveLocalUser({ ...data.user, password, phone: cleanPhone || data.user.phone || 'No registrado' });
            return { success: true, user: data.user, message: data.message };
          }
        } else if (res.status === 409) {
          const errData = await res.json();
          return { success: false, message: errData.message || 'El correo ya está registrado.' };
        }
      } catch (err) {
        // Fallback to localStorage if server offline or running file://
      }

      // 2. LocalStorage Fallback
      const localUsers = this.getLocalUsers();
      if (localUsers.some(u => u && u.email && String(u.email).toLowerCase() === normalizedEmail)) {
        return { success: false, message: 'Este correo electrónico ya está registrado en Callejón Mágico.' };
      }

      let finalUsername = cleanUsername || normalizedEmail.split('@')[0];
      let count = 1;
      let base = finalUsername;
      while (localUsers.some(u => u && u.username && String(u.username).toLowerCase() === finalUsername.toLowerCase())) {
        finalUsername = `${base}${count++}`;
      }

      const nowIso = new Date().toISOString();
      const newUser = {
        id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
        fullName: fullName.trim(),
        email: normalizedEmail,
        phone: cleanPhone || 'No registrado',
        username: finalUsername,
        password: password,
        tier: 'Privé Member',
        createdAt: nowIso,
        _updatedAt: nowIso
      };

      this.saveLocalUser(newUser);

      const safeUser = {
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
        phone: newUser.phone,
        username: newUser.username,
        tier: newUser.tier,
        createdAt: newUser.createdAt
      };

      this.setCurrentUser(safeUser);
      this.saveCartForUser(safeUser);
      return { success: true, user: safeUser, message: '¡Cuenta creada con éxito!' };
    },

    async login(identifier, password) {
      const cleanIdent = String(identifier || '').trim().toLowerCase().replace(/^@/, '');

      // 1. Consultar almacenamiento local y Firebase primero para garantizar contraseñas recién restablecidas
      let localUsers = this.getLocalUsers();
      let matchingLocal = localUsers.filter(u =>
        u && (
          (u.email && String(u.email).toLowerCase() === cleanIdent) ||
          (u.username && String(u.username).toLowerCase() === cleanIdent)
        )
      );

      // Ordenar coincidencias locales por _updatedAt más reciente
      matchingLocal.sort((a, b) => {
        const tA = a._updatedAt ? new Date(a._updatedAt).getTime() : 0;
        const tB = b._updatedAt ? new Date(b._updatedAt).getTime() : 0;
        return tB - tA;
      });

      let user = matchingLocal.find(u => u.password === password) || matchingLocal[0] || null;

      // Si no coincide la contraseña localmente o no existe el usuario local, consultar Firebase en tiempo real
      if ((!user || user.password !== password) && typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.fetchUserByEmailOrUsername === 'function') {
        try {
          const remoteUser = await window.CallejonFirebase.fetchUserByEmailOrUsername(cleanIdent);
          if (remoteUser) {
            user = remoteUser;
            // Actualizar copia local con el registro remoto más reciente
            const targetEmail = String(remoteUser.email || '').toLowerCase();
            localUsers = localUsers.filter(u => !u || String(u.email || '').toLowerCase() !== targetEmail);
            localUsers.push(remoteUser);
            localStorage.setItem('davanti_users', JSON.stringify(localUsers));
          }
        } catch (e) {}
      }

      // 2. Si aún no coincide, intentar API de servidor local (/api/auth/login) como respaldo
      if (!user || user.password !== password) {
        try {
          const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier: cleanIdent, password })
          });
          if (res.ok) {
            const data = await res.json();
            if (data.success && data.user) {
              this.setCurrentUser(data.user);
              const restoredCount = this.restoreCartForUser(data.user);
              const cartNote = restoredCount > 0 ? ` Se restauraron ${restoredCount} producto(s) en tu carrito.` : '';
              return { success: true, user: data.user, message: (data.message || '¡Bienvenido!') + cartNote };
            }
          }
        } catch (err) {
          // Servidor no activo, continuar con resultado local/Firebase
        }
      }

      if (!user || user.password !== password) {
        return { success: false, message: 'Credenciales inválidas. Verifica tu correo/usuario y contraseña.' };
      }

      const safeFullName = user.fullName || (user.email ? user.email.split('@')[0] : 'Cliente Privé');
      const safeUsername = user.username || (user.email ? user.email.split('@')[0] : 'prive_user');

      const safeUser = {
        id: user.id || ('usr_' + Date.now().toString(36)),
        fullName: safeFullName,
        email: user.email,
        username: safeUsername,
        tier: user.tier || 'Privé Member',
        createdAt: user.createdAt || new Date().toISOString()
      };

      this.setCurrentUser(safeUser);
      const restoredCount = this.restoreCartForUser(user);
      const cartNote = restoredCount > 0 ? ` Se restauraron ${restoredCount} producto(s) en tu carrito.` : '';
      return { success: true, user: safeUser, message: `¡Bienvenido de vuelta, ${safeFullName.split(' ')[0]}!${cartNote}` };
    },

    logout() {
      const currentUser = this.getCurrentUser();
      if (currentUser) {
        // 1. Guardar el carrito activo en la cuenta del usuario para restaurarlo al volver
        this.saveCartForUser(currentUser);
      }

      // 2. Borrar productos del carrito activo en la sesión actual
      localStorage.removeItem('davanti_cart');
      localStorage.removeItem('grande_cart');

      // 3. Borrar historial de búsqueda
      localStorage.removeItem('davanti_search_history');

      // 4. Cerrar sesión de usuario
      this.setCurrentUser(null);

      // 5. Notificar a DavantiApp para limpiar interfaz en tiempo real si está disponible
      if (window.DavantiApp) {
        if (typeof window.DavantiApp.clearCart === 'function') {
          window.DavantiApp.clearCart();
        }
        if (typeof window.DavantiApp.clearSearchHistory === 'function') {
          window.DavantiApp.clearSearchHistory();
        }
        if (typeof window.DavantiApp.clearSearch === 'function') {
          window.DavantiApp.clearSearch();
        }
      }

      // 6. Configurar notificación flash para la página principal
      try {
        sessionStorage.setItem('davanti_auth_toast', 'Has cerrado sesión. Tus productos del carrito han sido guardados en tu cuenta de forma segura.');
      } catch (e) {}

      // 7. Redirigir siempre a la página principal
      window.location.href = 'index.html';
    },

    // ==========================================
    // CONFIGURACIÓN DE EMAILJS PARA RECUPERACIÓN DE CONTRASEÑA
    // ==========================================
    EMAILJS_RECOVERY: {
      serviceId: 'service_ixkb84f',
      templateId: 'template_ksxs8gb',
      publicKey: 'eFDXFKJFAoYalylpS'
    },

    async sendResetEmail(targetEmail, targetName, code) {
      try {
        const cfg = this.EMAILJS_RECOVERY;
        if (!window.emailjs) {
          await new Promise((resolve) => {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
            s.async = true;
            s.onload = () => {
              try { window.emailjs.init(cfg.publicKey); } catch (e) {}
              resolve();
            };
            s.onerror = () => resolve();
            document.head.appendChild(s);
          });
        }
        if (window.emailjs) {
          try {
            window.emailjs.init(cfg.publicKey);
          } catch (e) {}

          const expireDate = new Date(Date.now() + 15 * 60 * 1000);
          const timeStr = expireDate.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

          const templateParams = {
            to_name: targetName || 'Cliente Callejón Mágico',
            to_email: targetEmail.trim(),
            email: targetEmail.trim(),
            user_email: targetEmail.trim(),
            passcode: code,
            pass_code: code,
            code: code,
            otp_code: code,
            time: timeStr,
            reply_to: 'gabosarmiento090@gmail.com',
            order_num: 'RESTAURAR-CLAVE',
            order_date: new Date().toLocaleString('es-MX'),
            delivery_info: `Código de Seguridad para Restablecer Contraseña: ${code}`,
            items_summary: `Código de seguridad: ${code} (Válido 15 minutos).`,
            message: `Tu código de seguridad temporal para Callejón Mágico es: ${code}`
          };

          const resp = await window.emailjs.send(
            cfg.serviceId,
            cfg.templateId,
            templateParams,
            cfg.publicKey
          );
          console.log('AuthEngine: EmailJS enviado exitosamente:', resp);
          return { success: true, resp };
        }
        return { success: false, error: 'No se pudo cargar la librería de EmailJS.' };
      } catch (err) {
        console.error('AuthEngine: Error al enviar correo de recuperación vía EmailJS:', err);
        const errMsg = err?.text || err?.message || JSON.stringify(err);
        return { success: false, error: errMsg };
      }
    },

    getActiveRecoveryToken() {
      try {
        const raw = localStorage.getItem('callejon_client_recovery_token') || sessionStorage.getItem('callejon_client_recovery_token');
        if (!raw) return null;
        const token = JSON.parse(raw);
        if (!token || Date.now() > token.expires) {
          localStorage.removeItem('callejon_client_recovery_token');
          sessionStorage.removeItem('callejon_client_recovery_token');
          return null;
        }
        return token;
      } catch (e) {
        return null;
      }
    },

    async requestPasswordReset(email) {
      const cleanEmail = String(email || '').trim().toLowerCase();
      if (!cleanEmail || !cleanEmail.includes('@')) {
        return { success: false, message: 'Por favor ingresa un correo electrónico válido.' };
      }

      // Buscar si el usuario existe localmente o en Firebase
      let localUsers = this.getLocalUsers();
      let user = localUsers.find(u => u && u.email && String(u.email).toLowerCase() === cleanEmail);

      if (!user && window.CallejonFirebase && typeof window.CallejonFirebase.fetchUserByEmailOrUsername === 'function') {
        try {
          const remoteUser = await window.CallejonFirebase.fetchUserByEmailOrUsername(cleanEmail);
          if (remoteUser) {
            user = remoteUser;
            localUsers.push(remoteUser);
            localStorage.setItem('davanti_users', JSON.stringify(localUsers));
          }
        } catch (e) {}
      }

      const userName = (user && user.fullName) ? user.fullName : cleanEmail.split('@')[0];
      const code = String(Math.floor(100000 + Math.random() * 900000));

      // Preservar códigos previos emitidos en los últimos 15 minutos para ese mismo correo por si el usuario pidió reenvío
      const prevToken = this.getActiveRecoveryToken();
      let validCodes = [code];
      if (prevToken && prevToken.email === cleanEmail) {
        const oldCodes = Array.isArray(prevToken.validCodes) ? prevToken.validCodes : (prevToken.code ? [prevToken.code] : []);
        validCodes = Array.from(new Set([code, ...oldCodes]));
      }

      const token = {
        email: cleanEmail,
        code,
        validCodes,
        expires: Date.now() + 15 * 60 * 1000 // 15 minutos
      };
      const tokenStr = JSON.stringify(token);
      sessionStorage.setItem('callejon_client_recovery_token', tokenStr);
      localStorage.setItem('callejon_client_recovery_token', tokenStr);

      // Enviar correo real vía EmailJS
      const sentResult = await this.sendResetEmail(cleanEmail, userName, code);

      if (!sentResult.success) {
        return {
          success: false,
          message: `Error al enviar correo vía EmailJS (${sentResult.error || 'Verifica la conexión'}). Si tu Public Key cambió, actualízala.`
        };
      }

      return {
        success: true,
        email: cleanEmail,
        code,
        message: `✉️ Código de 6 dígitos enviado exitosamente a ${cleanEmail}. Revisa tu bandeja de entrada o spam.`
      };
    },

    async resetPasswordWithCode(email, code, newPassword, confirmPassword) {
      // Limpiar espacios o caracteres invisibles al copiar y pegar el código desde el correo
      const cleanCode = String(code || '').replace(/\D/g, '').trim();
      const np = String(newPassword || '').trim();
      const cp = String(confirmPassword || '').trim();

      if (!cleanCode || cleanCode.length !== 6) {
        return { success: false, message: 'Ingresa los 6 dígitos numéricos del código que enviamos a tu correo.' };
      }

      const tokenData = this.getActiveRecoveryToken();
      if (!tokenData) {
        return { success: false, message: 'No hay un código activo o ya expiró (15 minutos). Por favor solicita uno nuevo.' };
      }

      const allowedCodes = Array.isArray(tokenData.validCodes)
        ? tokenData.validCodes
        : (tokenData.code ? [String(tokenData.code)] : []);

      if (!allowedCodes.includes(cleanCode) && String(tokenData.code) !== cleanCode) {
        return { success: false, message: 'El código ingresado es incorrecto. Verifica los 6 dígitos recibidos en tu correo.' };
      }

      if (np.length < 6) {
        return { success: false, message: 'La nueva contraseña debe tener mínimo 6 caracteres.' };
      }
      if (np !== cp) {
        return { success: false, message: 'Las nuevas contraseñas no coinciden. Por favor verifícalas.' };
      }

      const cleanEmail = String(email || tokenData.email || '').trim().toLowerCase();
      const nowIso = new Date().toISOString();

      // 1. Consultar Firebase por si el usuario existe en la nube pero no localmente
      let remoteUser = null;
      if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.fetchUserByEmailOrUsername === 'function') {
        try {
          remoteUser = await window.CallejonFirebase.fetchUserByEmailOrUsername(cleanEmail);
        } catch (e) {}
      }

      // 2. Actualizar en base de datos local deduplicando cualquier registro viejo del mismo correo
      let users = this.getLocalUsers();
      let existingUser = users.find(u => u && u.email && String(u.email).toLowerCase() === cleanEmail) || remoteUser || null;

      let updatedUser;
      if (existingUser) {
        updatedUser = {
          ...existingUser,
          id: existingUser.id || ('usr_' + Date.now().toString(36)),
          fullName: existingUser.fullName || cleanEmail.split('@')[0],
          email: cleanEmail,
          username: existingUser.username || cleanEmail.split('@')[0],
          password: np,
          tier: existingUser.tier || 'Privé Member',
          createdAt: existingUser.createdAt || nowIso,
          _updatedAt: nowIso
        };
      } else {
        updatedUser = {
          id: 'usr_' + Date.now().toString(36),
          fullName: cleanEmail.split('@')[0],
          email: cleanEmail,
          username: cleanEmail.split('@')[0],
          password: np,
          tier: 'Privé Member',
          createdAt: nowIso,
          _updatedAt: nowIso
        };
      }

      // Reemplazar todos los registros que tengan ese correo por el registro único actualizado
      users = users.filter(u => !u || !u.email || String(u.email).toLowerCase() !== cleanEmail);
      users.push(updatedUser);
      localStorage.setItem('davanti_users', JSON.stringify(users));

      // 3. Sincronizar en la nube con Firebase (y limpiar nodos duplicados antiguos)
      if (typeof window !== 'undefined' && window.CallejonFirebase && typeof window.CallejonFirebase.syncUser === 'function') {
        try {
          await window.CallejonFirebase.syncUser(updatedUser);
        } catch (e) {}
      }

      // 4. Sincronizar con servidor local (/api/auth/reset-password) si está activo
      try {
        await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: cleanEmail,
            newPassword: np,
            fullName: updatedUser.fullName,
            username: updatedUser.username
          })
        });
      } catch (e) {
        // Servidor local no requerido si corre en modo estático / Firebase
      }

      sessionStorage.removeItem('callejon_client_recovery_token');
      localStorage.removeItem('callejon_client_recovery_token');

      // 5. Auto-iniciar sesión del cliente con su nueva contraseña
      const safeUser = {
        id: updatedUser.id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        username: updatedUser.username,
        tier: updatedUser.tier || 'Privé Member',
        createdAt: updatedUser.createdAt
      };
      this.setCurrentUser(safeUser);

      return {
        success: true,
        user: safeUser,
        message: `¡Contraseña actualizada con éxito! Bienvenido/a, ${safeUser.fullName}.`
      };
    }
  };

  // ==========================================
  // UI CONTROLLER & MODAL INJECTION
  // ==========================================
  const AuthUI = {
    init() {
      this.injectAuthModal();
      this.injectProfileMenu();
      this.updateHeaderAccountBtn();
      this.bindEvents();

      // Check for pending toast from logout / redirection
      try {
        const pendingToast = sessionStorage.getItem('davanti_auth_toast');
        if (pendingToast) {
          sessionStorage.removeItem('davanti_auth_toast');
          setTimeout(() => {
            this.showToast(pendingToast);
          }, 350);
        }
      } catch (e) {}
    },

    // Inject the Auth Modal HTML into body if not already present
    injectAuthModal() {
      if (document.getElementById('authModal')) return;

      const modalHtml = `
        <div class="modal-window auth-modal" id="authModal" role="dialog" aria-modal="true" aria-label="Acceso a cuenta Callejón Mágico">
          <button class="modal-close-btn" id="btnCloseAuthModal" aria-label="Cerrar ventana">&times;</button>
          
          <div class="auth-header">
            <svg class="brand-magic-bag-icon" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 48px; height: 38px; margin: 0 auto 0.5rem; display: block;">
              <path d="M 96,60 C 96,24 113,18 126,18 C 139,18 156,24 156,60" fill="none" stroke="#0B1B3D" stroke-width="7" stroke-linecap="round" />
              <path d="M 104,60 C 104,30 116,24 126,24 C 136,24 148,30 148,60" fill="none" stroke="#0B1B3D" stroke-width="7" stroke-linecap="round" />
              <path d="M 88,60 L 116,65 L 108,154 L 72,142 Z" fill="#07142A" />
              <path d="M 116,65 L 182,75 L 198,159 C 166,152 130,148 108,154 Z" fill="#0B1B3D" />
              <path d="M 88,60 L 116,65 L 182,75" fill="none" stroke="#C58F38" stroke-width="2.5" stroke-linecap="round" />
              <path d="M 56,165 C 75,138 106,106 142,90 C 172,78 200,74 224,76 C 194,84 162,96 136,111 C 100,133 73,161 56,165 Z" fill="#C58F38" />
              <ellipse cx="224" cy="84" rx="35" ry="15" transform="rotate(-28, 224, 84)" fill="none" stroke="#C58F38" stroke-width="4.5" stroke-dasharray="115, 24" stroke-linecap="round" />
              <path d="M 224,44 Q 224,82 260,82 Q 224,82 224,120 Q 224,82 188,82 Q 224,82 224,44 Z" fill="#C58F38" />
              <circle cx="224" cy="82" r="3.5" fill="#FFEBB8" />
            </svg>
            <h2 class="auth-title"><span style="color: #0b1b3d;">Callejón</span> <span style="color: #c58f38;">Mágico</span></h2>
            <p class="auth-subtitle">Acceso exclusivo a tu cuenta y beneficios departamentales</p>
          </div>

          <!-- Auth Navigation Tabs -->
          <div class="auth-tabs-row">
            <button type="button" class="auth-tab-btn active" id="tabBtnLogin">Iniciar Sesión</button>
            <button type="button" class="auth-tab-btn" id="tabBtnRegister">Crear Cuenta Privé</button>
          </div>

          <!-- Error Alert Banner -->
          <div class="auth-error-banner" id="authErrorBanner">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span id="authErrorText">Error en el formulario</span>
          </div>

          <!-- ==========================================
               LOGIN FORM
               ========================================== -->
          <form id="formLogin" class="auth-form" style="display: block;">
            <div class="auth-field-group">
              <label class="auth-label" for="loginIdentifier">Correo electrónico o Usuario</label>
              <div class="auth-input-container">
                <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input 
                  type="text" 
                  id="loginIdentifier" 
                  class="auth-input" 
                  placeholder="ejemplo@correo.com o @usuario" 
                  required 
                  autocomplete="username" 
                />
              </div>
            </div>

            <div class="auth-field-group">
              <label class="auth-label" for="loginPassword">Contraseña</label>
              <div class="auth-input-container">
                <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input 
                  type="password" 
                  id="loginPassword" 
                  class="auth-input" 
                  placeholder="••••••••" 
                  required 
                  autocomplete="current-password" 
                />
                <button type="button" class="auth-toggle-pwd-btn" data-target="loginPassword" aria-label="Mostrar contraseña">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="auth-forgot-row" style="display: flex; justify-content: flex-end; margin: 0.25rem 0 0.65rem;">
              <button type="button" class="auth-link-btn" id="btnOpenClientForgot" style="background: none; border: none; color: #c58f38; font-size: 0.8rem; font-weight: 600; cursor: pointer; text-decoration: underline; padding: 0;">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button type="submit" class="btn-auth-submit" id="btnSubmitLogin">
              <span>Acceder a mi Cuenta</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <p class="auth-switch-text">
              ¿No tienes una cuenta aún? 
              <button type="button" class="auth-switch-btn" id="linkToRegister">Regístrate en Callejón Mágico</button>
            </p>
          </form>

          <!-- ==========================================
               REGISTER FORM (WITH RANDOM USERNAME)
               ========================================== -->
          <form id="formRegister" class="auth-form" style="display: none;">
            <div class="auth-field-group">
              <label class="auth-label" for="regFullName">Nombre completo</label>
              <div class="auth-input-container">
                <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input 
                  type="text" 
                  id="regFullName" 
                  class="auth-input" 
                  placeholder="Ej: Sofia Valenzuela" 
                  required 
                  autocomplete="name" 
                />
              </div>
            </div>

            <div class="auth-field-group">
              <label class="auth-label" for="regEmail">Correo electrónico</label>
              <div class="auth-input-container">
                <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input 
                  type="email" 
                  id="regEmail" 
                  class="auth-input" 
                  placeholder="sofia@correo.com" 
                  required 
                  autocomplete="email" 
                />
              </div>
            </div>

            <div class="auth-field-group">
              <label class="auth-label" for="regPhone">Teléfono / WhatsApp</label>
              <div class="auth-input-container">
                <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <input 
                  type="tel" 
                  id="regPhone" 
                  class="auth-input" 
                  placeholder="Ej: 55 1234 5678 (para tus tickets de WhatsApp)" 
                  required 
                  autocomplete="tel" 
                />
              </div>
            </div>

            <div class="auth-field-group">
              <label class="auth-label" for="regPassword">Contraseña</label>
              <div class="auth-input-container">
                <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input 
                  type="password" 
                  id="regPassword" 
                  class="auth-input" 
                  placeholder="Mínimo 6 caracteres" 
                  required 
                  minlength="6" 
                  autocomplete="new-password" 
                />
                <button type="button" class="auth-toggle-pwd-btn" data-target="regPassword" aria-label="Mostrar contraseña">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="auth-field-group">
              <label class="auth-label" for="regPasswordConfirm">Confirmar contraseña</label>
              <div class="auth-input-container">
                <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <input 
                  type="password" 
                  id="regPasswordConfirm" 
                  class="auth-input" 
                  placeholder="Repite tu contraseña" 
                  required 
                  minlength="6" 
                  autocomplete="new-password" 
                />
              </div>
            </div>

            <button type="submit" class="btn-auth-submit" id="btnSubmitRegister">
              <span>Crear mi Membresía Privé</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>

            <p class="auth-switch-text">
              ¿Ya eres miembro? 
              <button type="button" class="auth-switch-btn" id="linkToLogin">Inicia sesión aquí</button>
            </p>
          </form>

          <!-- ==========================================
               RECOVER PASSWORD FORM (CLIENTE)
               ========================================== -->
          <form id="formRecoverPassword" class="auth-form" style="display: none;" novalidate>
            <!-- Sub-paso 1: Ingresar correo -->
            <div id="recoverStepEmail">
              <div style="background: rgba(197, 143, 56, 0.08); border: 1px dashed #C58F38; border-radius: 10px; padding: 0.85rem; margin-bottom: 1.25rem;">
                <h3 style="font-size: 0.95rem; font-weight: 800; color: #0b1b3d; margin-bottom: 0.3rem;">🔐 Recuperar mi Contraseña</h3>
                <p style="font-size: 0.8rem; color: #475569; margin: 0; line-height: 1.4;">
                  Ingresa tu correo registrado. Te enviaremos un <strong>código de seguridad de 6 dígitos</strong> para crear tu nueva contraseña.
                </p>
              </div>

              <div class="auth-field-group">
                <label class="auth-label" for="recoverEmail">Correo electrónico de tu cuenta</label>
                <div class="auth-input-container">
                  <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input type="email" id="recoverEmail" class="auth-input" placeholder="ejemplo@correo.com" autocomplete="email" />
                </div>
              </div>

              <button type="button" class="btn-auth-submit" id="btnSubmitSendRecovery">
                <span>Enviar Código a mi Correo</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              <div style="text-align: center; margin-top: 0.85rem;">
                <button type="button" id="btnGoToStepCode" style="background: none; border: none; color: #0b1b3d; font-size: 0.8rem; font-weight: 700; cursor: pointer; text-decoration: underline;">
                  ¿Ya recibiste tu código de 6 dígitos? Ingrésalo aquí →
                </button>
              </div>
            </div>

            <!-- Sub-paso 2: Ingresar código y nueva contraseña -->
            <div id="recoverStepNewPassword" style="display: none;">
              <div style="background: rgba(37, 211, 102, 0.1); border: 1px solid #25D366; border-radius: 10px; padding: 0.85rem; margin-bottom: 1.25rem;">
                <p style="font-size: 0.82rem; color: #0b1b3d; margin: 0; line-height: 1.4;">
                  ✉️ Hemos enviado el código de 6 dígitos a <strong id="recoverEmailSentDisplay">tu correo</strong>. Ingrésalo abajo con tu nueva contraseña.
                </p>
              </div>

              <div class="auth-field-group">
                <label class="auth-label" for="recoverCode">Código de 6 dígitos recibido</label>
                <div class="auth-input-container">
                  <input type="text" id="recoverCode" class="auth-input" placeholder="000000" maxlength="12" inputmode="numeric" autocomplete="one-time-code" style="text-align: center; letter-spacing: 0.35em; font-size: 1.3rem; font-weight: 800; color: #c58f38;" />
                </div>
              </div>

              <div class="auth-field-group">
                <label class="auth-label" for="recoverNewPassword">Nueva Contraseña</label>
                <div class="auth-input-container">
                  <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input type="password" id="recoverNewPassword" class="auth-input" placeholder="Mínimo 6 caracteres" minlength="6" autocomplete="new-password" />
                  <button type="button" class="auth-toggle-pwd-btn" data-target="recoverNewPassword" aria-label="Mostrar contraseña">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="auth-field-group">
                <label class="auth-label" for="recoverConfirmPassword">Confirmar Nueva Contraseña</label>
                <div class="auth-input-container">
                  <svg class="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <input type="password" id="recoverConfirmPassword" class="auth-input" placeholder="Repite la nueva contraseña" minlength="6" autocomplete="new-password" />
                  <button type="button" class="auth-toggle-pwd-btn" data-target="recoverConfirmPassword" aria-label="Mostrar contraseña">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <button type="button" class="btn-auth-submit" id="btnSubmitResetPassword">
                <span>Guardar Nueva Contraseña y Entrar</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>

              <div style="text-align: center; margin-top: 0.75rem;">
                <button type="button" id="btnBackToStepEmail" style="background: none; border: none; color: #64748b; font-size: 0.78rem; font-weight: 600; cursor: pointer; text-decoration: underline;">
                  ← Reenviar código o cambiar correo
                </button>
              </div>
            </div>

            <p class="auth-switch-text" style="margin-top: 1.25rem;">
              <button type="button" class="auth-switch-btn" id="linkBackToLogin">← Volver a Iniciar Sesión</button>
            </p>
          </form>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    // Inject the Profile Dropdown into the header
    injectProfileMenu() {
      const container = document.querySelector('.account-dropdown-trigger');
      if (!container || document.getElementById('userProfileMenu')) return;

      const menuHtml = `
        <div class="user-profile-menu" id="userProfileMenu">
          <div class="user-profile-header">
            <div class="user-avatar-circle" id="userMenuAvatar">D</div>
            <div class="user-info-text">
              <h4 class="user-name-title" id="userMenuName">Cliente Callejón Mágico</h4>
              <p class="user-handle-subtitle" id="userMenuUsername">@callejon_user</p>
              <span class="user-tier-pill" id="userMenuTier">Membresía Oro ✨</span>
            </div>
          </div>

          <div class="user-menu-links">
            <a href="#pedidos" class="user-menu-item open-orders-modal-btn" onclick="event.preventDefault(); event.stopPropagation(); document.getElementById('userProfileMenu')?.classList.remove('active'); setTimeout(() => { if(window.CallejonOrders && typeof window.CallejonOrders.openModal === 'function'){ CallejonOrders.openModal(); } else if(window.DavantiApp && window.DavantiApp.openOrdersModal){ DavantiApp.openOrdersModal(); } }, 40);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span>Mis Pedidos & Rastreo</span>
            </a>
            <a href="#favoritos" class="user-menu-item" onclick="event.preventDefault(); event.stopPropagation(); document.getElementById('userProfileMenu')?.classList.remove('active'); setTimeout(() => { document.getElementById('btnOpenWishlist')?.click(); }, 40);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span>Lista de Deseos</span>
            </a>
            <a href="#tarjeta-callejon" class="user-menu-item open-card-modal-btn" onclick="event.preventDefault(); event.stopPropagation(); document.getElementById('userProfileMenu')?.classList.remove('active'); setTimeout(() => { if(window.CallejonCard && typeof window.CallejonCard.openModal === 'function'){ CallejonCard.openModal(); } else { DavantiAuth.showToast('Tarjeta Callejón Mágico: Tienes $35,000 de crédito disponible.'); } }, 40);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              <span>Tarjeta Callejón Mágico & MSI</span>
            </a>
            <a href="#app-qr" class="user-menu-item open-pwa-qr-btn" onclick="event.preventDefault(); event.stopPropagation(); document.getElementById('userProfileMenu')?.classList.remove('active'); setTimeout(() => { if(window.CallejonPWA && typeof window.CallejonPWA.openQrModal === 'function'){ CallejonPWA.openQrModal(); } }, 40);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>Descargar App & Código QR</span>
            </a>
          </div>

          <button type="button" class="btn-logout-user" id="btnLogoutUser">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      `;

      container.insertAdjacentHTML('beforeend', menuHtml);
    },

    // Update the button in the header based on login status
    updateHeaderAccountBtn() {
      const btn = document.getElementById('btnUserAccount');
      if (!btn) return;

      const user = AuthEngine.getCurrentUser();
      const textSpan = btn.querySelector('span');

      if (user) {
        const safeFullName = user.fullName || (user.email ? user.email.split('@')[0] : 'Privé');
        const safeUsername = user.username || (user.email ? user.email.split('@')[0] : 'prive_user');
        const firstName = safeFullName.split(' ')[0] || 'Privé';
        if (textSpan) {
          textSpan.textContent = `Hola, ${firstName}`;
        }
        btn.setAttribute('title', `${safeFullName} (@${safeUsername})`);
        
        // Update user profile dropdown details
        const nameEl = document.getElementById('userMenuName');
        const handleEl = document.getElementById('userMenuUsername');
        const avatarEl = document.getElementById('userMenuAvatar');
        const tierEl = document.getElementById('userMenuTier');

        if (nameEl) nameEl.textContent = safeFullName;
        if (handleEl) handleEl.textContent = user.email || safeFullName;
        if (tierEl) tierEl.textContent = `${user.tier || 'Privé Member'} ✨`;
        if (avatarEl) avatarEl.textContent = (safeFullName.charAt(0) || 'D').toUpperCase();

        // Also pre-fill checkout form if user is logged in
        const nameInput = document.querySelector('#checkoutForm input[placeholder*="Mendoza"]');
        if (nameInput && !nameInput.dataset.modified) {
          nameInput.value = safeFullName;
        }
      } else {
        if (textSpan) {
          textSpan.textContent = 'Mi cuenta';
        }
        btn.removeAttribute('title');
      }

      // Sincronizar Tarjeta Callejón Mágico si está disponible
      if (window.CallejonCard && typeof window.CallejonCard.updateUI === 'function') {
        window.CallejonCard.updateUI();
      }
    },

    showRecoveryStep(step, email = '') {
      const recoverStepEmail = document.getElementById('recoverStepEmail');
      const recoverStepNewPass = document.getElementById('recoverStepNewPassword');
      const displayEl = document.getElementById('recoverEmailSentDisplay');
      const errorBanner = document.getElementById('authErrorBanner');
      if (errorBanner) errorBanner.classList.remove('visible');

      if (step === 'code') {
        if (recoverStepEmail) recoverStepEmail.style.display = 'none';
        if (recoverStepNewPass) recoverStepNewPass.style.display = 'block';
        const activeToken = AuthEngine.getActiveRecoveryToken();
        const targetEmail = email || document.getElementById('recoverEmail')?.value?.trim() || activeToken?.email || 'tu correo';
        if (displayEl) displayEl.textContent = targetEmail;
        const codeInput = document.getElementById('recoverCode');
        if (codeInput) setTimeout(() => codeInput.focus(), 150);
      } else {
        if (recoverStepEmail) recoverStepEmail.style.display = 'block';
        if (recoverStepNewPass) recoverStepNewPass.style.display = 'none';
        const recEmail = document.getElementById('recoverEmail');
        if (recEmail) setTimeout(() => recEmail.focus(), 150);
      }
    },

    switchTab(tab) {
      const tabLogin = document.getElementById('tabBtnLogin');
      const tabReg = document.getElementById('tabBtnRegister');
      const tabsRow = document.querySelector('.auth-tabs-row');
      const formLogin = document.getElementById('formLogin');
      const formReg = document.getElementById('formRegister');
      const formRecover = document.getElementById('formRecoverPassword');
      const errorBanner = document.getElementById('authErrorBanner');

      if (errorBanner) errorBanner.classList.remove('visible');

      if (tab === 'recover') {
        if (tabsRow) tabsRow.style.display = 'none';
        if (formLogin) formLogin.style.display = 'none';
        if (formReg) formReg.style.display = 'none';
        if (formRecover) formRecover.style.display = 'block';

        const activeToken = AuthEngine.getActiveRecoveryToken();
        const loginIdent = document.getElementById('loginIdentifier')?.value || '';
        const recEmail = document.getElementById('recoverEmail');
        if (recEmail) {
          if (loginIdent.includes('@')) {
            recEmail.value = loginIdent.trim();
          } else if (!recEmail.value && activeToken && activeToken.email) {
            recEmail.value = activeToken.email;
          }
        }

        // Si ya tiene un código vigente enviado recientemente, mostrar directamente el Paso 2 para que pueda ingresarlo
        if (activeToken && activeToken.email) {
          this.showRecoveryStep('code', activeToken.email);
        } else {
          this.showRecoveryStep('email');
        }
      } else if (tab === 'register') {
        if (tabsRow) tabsRow.style.display = 'flex';
        if (tabLogin) tabLogin.classList.remove('active');
        if (tabReg) tabReg.classList.add('active');
        if (formLogin) formLogin.style.display = 'none';
        if (formReg) formReg.style.display = 'block';
        if (formRecover) formRecover.style.display = 'none';
      } else {
        if (tabsRow) tabsRow.style.display = 'flex';
        if (tabReg) tabReg.classList.remove('active');
        if (tabLogin) tabLogin.classList.add('active');
        if (formReg) formReg.style.display = 'none';
        if (formLogin) formLogin.style.display = 'block';
        if (formRecover) formRecover.style.display = 'none';
      }
    },

    showError(msg) {
      const errorBanner = document.getElementById('authErrorBanner');
      const errorText = document.getElementById('authErrorText');
      if (errorBanner && errorText) {
        errorText.textContent = msg;
        errorBanner.classList.add('visible');
      }
    },

    openModal(defaultTab = 'login') {
      let modal = document.getElementById('authModal');
      if (!modal) {
        this.injectAuthModal();
        modal = document.getElementById('authModal');
        this.bindEvents();
      }
      if (!modal) return;

      const backdrop = document.getElementById('modalBackdrop');
      this.switchTab(defaultTab);
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      
      if (backdrop) {
        backdrop.classList.add('active');
      }
      document.body.style.overflow = 'hidden';
    },

    closeModal() {
      const modal = document.getElementById('authModal');
      const backdrop = document.getElementById('modalBackdrop');
      if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
      
      // Close profile menu too
      const menu = document.getElementById('userProfileMenu');
      if (menu) menu.classList.remove('active');

      if (backdrop) {
        backdrop.classList.remove('active');
      }
      document.body.style.overflow = '';
    },

    toggleProfileMenu() {
      const menu = document.getElementById('userProfileMenu');
      if (!menu) return;
      menu.classList.toggle('active');
    },

    bindEvents() {
      const btnAccount = document.getElementById('btnUserAccount');
      if (btnAccount) {
        // Remove existing listener to prevent duplicates
        btnAccount.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const user = AuthEngine.getCurrentUser();
          if (user) {
            this.toggleProfileMenu();
          } else {
            this.openModal('login');
          }
        };
      }

      // Close dropdown if clicking outside
      document.addEventListener('click', (e) => {
        const menu = document.getElementById('userProfileMenu');
        const trigger = document.querySelector('.account-dropdown-trigger');
        if (menu && menu.classList.contains('active') && trigger && !trigger.contains(e.target)) {
          menu.classList.remove('active');
        }
      });

      // Escape key to close modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeModal();
        }
      });

      // Tabs switching
      document.getElementById('tabBtnLogin')?.addEventListener('click', () => this.switchTab('login'));
      document.getElementById('tabBtnRegister')?.addEventListener('click', () => this.switchTab('register'));
      document.getElementById('linkToRegister')?.addEventListener('click', () => this.switchTab('register'));
      document.getElementById('linkToLogin')?.addEventListener('click', () => this.switchTab('login'));
      document.getElementById('linkBackToLogin')?.addEventListener('click', () => this.switchTab('login'));

      // Abrir vista de recuperación de contraseña cliente
      document.getElementById('btnOpenClientForgot')?.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab('recover');
      });
      document.getElementById('btnForgotClientPassIndex')?.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab('recover');
      });

      // Navegación entre Paso 1 (Correo) y Paso 2 (Código)
      document.getElementById('btnGoToStepCode')?.addEventListener('click', (e) => {
        e.preventDefault();
        this.showRecoveryStep('code');
      });
      document.getElementById('btnBackToStepEmail')?.addEventListener('click', (e) => {
        e.preventDefault();
        this.showRecoveryStep('email');
      });

      // Limpiar automáticamente espacios o letras al pegar el código de 6 dígitos
      const recoverCodeInput = document.getElementById('recoverCode');
      if (recoverCodeInput) {
        recoverCodeInput.addEventListener('input', (e) => {
          const digitsOnly = String(e.target.value || '').replace(/\D/g, '').slice(0, 6);
          if (e.target.value !== digitsOnly) {
            e.target.value = digitsOnly;
          }
        });
      }

      // Paso 1 de Recuperación: Enviar Código al Correo
      const handleSendRecoveryCode = async (e) => {
        if (e) e.preventDefault();
        const emailInput = document.getElementById('recoverEmail');
        const email = (emailInput?.value || '').trim();
        const submitBtn = document.getElementById('btnSubmitSendRecovery');
        if (!email) {
          this.showError('Por favor ingresa tu correo electrónico registrado.');
          if (emailInput) emailInput.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Enviando código al correo...</span>';
        }

        try {
          const res = await AuthEngine.requestPasswordReset(email);

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Enviar Código a mi Correo</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
          }

          if (res.success) {
            this.showRecoveryStep('code', res.email);
            this.showToast(res.message);
          } else {
            this.showError(res.message);
          }
        } catch (err) {
          console.error('Error en handleSendRecoveryCode:', err);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Enviar Código a mi Correo</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
          }
          this.showError('Ocurrió un error al procesar la solicitud: ' + (err?.message || err));
        }
      };

      // Paso 2 de Recuperación: Validar Código y Establecer Nueva Contraseña
      const handleResetPassword = async (e) => {
        if (e) e.preventDefault();
        const email = (document.getElementById('recoverEmail')?.value || '').trim();
        const code = (document.getElementById('recoverCode')?.value || '').trim();
        const newPass = document.getElementById('recoverNewPassword')?.value || '';
        const confirmPass = document.getElementById('recoverConfirmPassword')?.value || '';
        const submitBtn = document.getElementById('btnSubmitResetPassword');

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Guardando nueva contraseña...</span>';
        }

        try {
          const res = await AuthEngine.resetPasswordWithCode(email, code, newPass, confirmPass);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Guardar Nueva Contraseña y Entrar</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
          }

          if (res.success) {
            // Limpiar campos del formulario de recuperación
            const codeEl = document.getElementById('recoverCode');
            const npEl = document.getElementById('recoverNewPassword');
            const cpEl = document.getElementById('recoverConfirmPassword');
            if (codeEl) codeEl.value = '';
            if (npEl) npEl.value = '';
            if (cpEl) cpEl.value = '';

            this.closeModal();
            this.updateHeaderAccountBtn();
            if (window.DavantiApp && typeof window.DavantiApp.updateCartUI === 'function') {
              window.DavantiApp.updateCartUI();
            }
            this.showToast(`🎉 ${res.message}`);
          } else {
            this.showError(res.message);
          }
        } catch (err) {
          console.error('Error en handleResetPassword:', err);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Guardar Nueva Contraseña y Entrar</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
          }
          this.showError('Error al guardar la nueva contraseña: ' + (err?.message || err));
        }
      };

      document.getElementById('btnSubmitSendRecovery')?.addEventListener('click', handleSendRecoveryCode);
      document.getElementById('btnSubmitResetPassword')?.addEventListener('click', handleResetPassword);

      // Si el usuario presiona Enter dentro del formulario, detectar en qué paso está
      document.getElementById('formRecoverPassword')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const stepPass = document.getElementById('recoverStepNewPassword');
        if (stepPass && stepPass.style.display !== 'none') {
          handleResetPassword(e);
        } else {
          handleSendRecoveryCode(e);
        }
      });

      // Close modal
      document.getElementById('btnCloseAuthModal')?.addEventListener('click', () => this.closeModal());
      document.getElementById('modalBackdrop')?.addEventListener('click', () => this.closeModal());

      // Toggle password eye buttons
      document.querySelectorAll('.auth-toggle-pwd-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-target');
          const input = document.getElementById(targetId);
          if (input) {
            input.type = input.type === 'password' ? 'text' : 'password';
          }
        });
      });

      // Submit Login Form
      document.getElementById('formLogin')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const ident = document.getElementById('loginIdentifier').value;
        const pwd = document.getElementById('loginPassword').value;
        const submitBtn = document.getElementById('btnSubmitLogin');

        if (submitBtn) submitBtn.disabled = true;

        const result = await AuthEngine.login(ident, pwd);
        if (submitBtn) submitBtn.disabled = false;

        if (result.success) {
          this.closeModal();
          this.updateHeaderAccountBtn();
          if (window.DavantiApp && typeof window.DavantiApp.updateCartUI === 'function') {
            window.DavantiApp.updateCartUI();
          }
          this.showToast(`✨ ${result.message}`);

          // Reanudar checkout si el cliente había solicitado pagar antes de iniciar sesión
          if (sessionStorage.getItem('callejon_pending_checkout') === 'true') {
            sessionStorage.removeItem('callejon_pending_checkout');
            setTimeout(() => {
              if (window.DavantiApp && typeof window.DavantiApp.openCheckoutModal === 'function') {
                window.DavantiApp.openCheckoutModal();
              }
            }, 350);
          }
        } else {
          this.showError(result.message);
        }
      });

      // Submit Register Form
      document.getElementById('formRegister')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('regFullName').value;
        const email = document.getElementById('regEmail').value;
        const phone = (document.getElementById('regPhone')?.value || '').trim();
        const pwd = document.getElementById('regPassword').value;
        const pwdConfirm = document.getElementById('regPasswordConfirm').value;
        const submitBtn = document.getElementById('btnSubmitRegister');

        if (pwd !== pwdConfirm) {
          this.showError('Las contraseñas no coinciden. Por favor verifícalas.');
          return;
        }

        if (submitBtn) submitBtn.disabled = true;

        const result = await AuthEngine.register(name, email, pwd, null, phone);
        if (submitBtn) submitBtn.disabled = false;

        if (result.success) {
          this.closeModal();
          this.updateHeaderAccountBtn();
          if (window.DavantiApp && typeof window.DavantiApp.updateCartUI === 'function') {
            window.DavantiApp.updateCartUI();
          }
          this.showToast(`✨ ¡Bienvenido/a a Callejón Mágico, ${name.trim()}!`);

          // Reanudar checkout si el cliente había solicitado pagar antes de crear su cuenta
          if (sessionStorage.getItem('callejon_pending_checkout') === 'true') {
            sessionStorage.removeItem('callejon_pending_checkout');
            setTimeout(() => {
              if (window.DavantiApp && typeof window.DavantiApp.openCheckoutModal === 'function') {
                window.DavantiApp.openCheckoutModal();
              }
            }, 350);
          }
        } else {
          this.showError(result.message);
        }
      });

      // Logout button
      document.getElementById('btnLogoutUser')?.addEventListener('click', (e) => {
        e.preventDefault();
        AuthEngine.logout();
      });
    },

    showToast(msg) {
      if (window.DavantiApp && window.DavantiApp.showToast) {
        window.DavantiApp.showToast(msg);
      } else {
        alert(msg);
      }
    }
  };

  // Expose global controller
  window.DavantiAuth = {
    Engine: AuthEngine,
    UI: AuthUI,
    openAuth: (tab) => AuthUI.openModal(tab),
    openModal: (tab) => AuthUI.openModal(tab),
    showToast: (msg) => AuthUI.showToast(msg),
    getCurrentUser: () => AuthEngine.getCurrentUser()
  };

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AuthUI.init());
  } else {
    AuthUI.init();
  }
})();
