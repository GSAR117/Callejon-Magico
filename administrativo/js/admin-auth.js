/**
 * ==========================================================================
 * CALLEJÓN MÁGICO — SISTEMA DE SEGURIDAD & AUTENTICACIÓN ADMINISTRATIVA
 * Control de acceso al Panel de Control con persistencia de sesión,
 * bloqueo de acceso no autorizado, cambio de contraseña y sincronización cloud.
 * ==========================================================================
 */

(function (window) {
  'use strict';

  const STORAGE_KEYS = {
    SESSION: 'callejon_admin_session',
    CREDS: 'callejon_admin_creds',
    FIREBASE_NODE: 'admin_config/credentials'
  };

  // Credenciales iniciales autorizadas por defecto
  const DEFAULT_ADMIN_CONFIG = {
    username: 'admin',
    email: 'admin@callejonmagico.com',
    fullName: 'Gabriel Sarmiento (Super Admin)',
    // Acepta estas contraseñas predeterminadas de fábrica
    acceptedPasswords: ['Admin2026!', 'callejon1234', 'admin2026'],
    customPassword: null,
    updatedAt: new Date().toISOString()
  };

  const AdminAuth = {
    // =========================================================================
    // 1. CONFIGURACIÓN Y CREDENCIALES
    // =========================================================================
    getCredentials() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.CREDS);
        if (stored) {
          const parsed = JSON.parse(stored);
          return { ...DEFAULT_ADMIN_CONFIG, ...parsed };
        }
      } catch (e) {}
      return { ...DEFAULT_ADMIN_CONFIG };
    },

    saveCredentials(newCreds) {
      try {
        const current = this.getCredentials();
        const merged = { ...current, ...newCreds, updatedAt: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEYS.CREDS, JSON.stringify(merged));

        // Sincronizar en la nube con Firebase
        if (window.CallejonFirebase && window.CallejonFirebase.isReady && window.CallejonFirebase.isReady()) {
          try {
            window.CallejonFirebase.db.ref(STORAGE_KEYS.FIREBASE_NODE).set({
              username: merged.username,
              email: merged.email,
              customPassword: merged.customPassword,
              updatedAt: merged.updatedAt
            });
          } catch (err) {
            console.warn('AdminAuth: Error al sincronizar credenciales en Firebase:', err);
          }
        }
        return true;
      } catch (e) {
        console.error('AdminAuth: Error al guardar credenciales:', e);
        return false;
      }
    },

    // =========================================================================
    // 2. SESIÓN DE USUARIO
    // =========================================================================
    getSession() {
      try {
        // Revisar primero sessionStorage (sesión de pestaña activa)
        const session = sessionStorage.getItem(STORAGE_KEYS.SESSION);
        if (session) return JSON.parse(session);

        // Revisar localStorage (si marcó "Recordar en este equipo")
        const local = localStorage.getItem(STORAGE_KEYS.SESSION);
        if (local) return JSON.parse(local);
      } catch (e) {}
      return null;
    },

    isAuthenticated() {
      const s = this.getSession();
      return !!(s && s.authenticated === true);
    },

    setSession(userObj, rememberMe = false) {
      const sessionData = {
        authenticated: true,
        user: userObj.fullName || 'Administrador',
        username: userObj.username || 'admin',
        email: userObj.email || 'admin@callejonmagico.com',
        role: 'Super Admin',
        token: 'adm_tok_' + Date.now().toString(36),
        loginTime: new Date().toISOString()
      };

      sessionStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
      if (rememberMe) {
        localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
      } else {
        localStorage.removeItem(STORAGE_KEYS.SESSION);
      }
      return sessionData;
    },

    clearSession() {
      try {
        sessionStorage.removeItem(STORAGE_KEYS.SESSION);
        localStorage.removeItem(STORAGE_KEYS.SESSION);
      } catch (e) {}
    },

    // =========================================================================
    // 3. INICIO DE SESIÓN & VALIDACIÓN
    // =========================================================================
    login(userOrEmail, password, rememberMe = false) {
      const creds = this.getCredentials();
      const inputUser = (userOrEmail || '').trim().toLowerCase();
      const inputPass = String(password || '').trim();

      if (!inputUser || !inputPass) {
        return { success: false, message: 'Ingresa tu usuario y contraseña de administrador.' };
      }

      // Validar usuario / correo permitido
      const validUsers = [
        creds.username.toLowerCase(),
        creds.email.toLowerCase(),
        'admin',
        'superadmin',
        'gabriel',
        'gabo',
        'carlos@callejonmagico.com'
      ];

      const userMatch = validUsers.includes(inputUser);
      if (!userMatch) {
        return { success: false, message: 'Usuario o correo no reconocido como Administrador autorizador.' };
      }

      // Validar contraseña (acepta contraseña personalizada o contraseñas por defecto)
      let passMatch = false;
      if (creds.customPassword && inputPass === creds.customPassword) {
        passMatch = true;
      } else if (DEFAULT_ADMIN_CONFIG.acceptedPasswords.includes(inputPass)) {
        passMatch = true;
      }

      if (!passMatch) {
        return { success: false, message: 'Contraseña incorrecta. Por favor verifica tus credenciales.' };
      }

      const session = this.setSession(creds, rememberMe);
      return { success: true, session };
    },

    // =========================================================================
    // 4. CAMBIO DE CONTRASEÑA
    // =========================================================================
    changePassword(currentPass, newPass, confirmPass) {
      const creds = this.getCredentials();
      const cur = String(currentPass || '').trim();
      const np = String(newPass || '').trim();
      const cp = String(confirmPass || '').trim();

      // Validar contraseña actual
      let validCurrent = false;
      if (creds.customPassword && cur === creds.customPassword) {
        validCurrent = true;
      } else if (DEFAULT_ADMIN_CONFIG.acceptedPasswords.includes(cur)) {
        validCurrent = true;
      }

      if (!validCurrent) {
        return { success: false, message: 'La contraseña actual ingresada es incorrecta.' };
      }

      if (np.length < 6) {
        return { success: false, message: 'La nueva contraseña debe tener mínimo 6 caracteres.' };
      }

      if (np !== cp) {
        return { success: false, message: 'Las nuevas contraseñas no coinciden.' };
      }

      this.saveCredentials({ customPassword: np });
      return { success: true, message: 'Contraseña de administrador actualizada con éxito.' };
    },

    // =========================================================================
    // 5. CONTROL DE VISTAS (PANTALLA DE LOGIN VS DASHBOARD)
    // =========================================================================
    updateUIState() {
      const isAuth = this.isAuthenticated();
      const loginScreen = document.getElementById('adminLoginScreen');
      const layout = document.querySelector('.admin-layout');

      if (isAuth) {
        if (loginScreen) loginScreen.style.display = 'none';
        if (layout) {
          layout.style.display = 'grid';
          layout.classList.add('authenticated');
        }
        // Actualizar datos del admin en la topbar
        const session = this.getSession();
        const nameEl = document.querySelector('.admin-info-text .name');
        if (nameEl && session) {
          nameEl.textContent = session.user || 'Administrador';
        }
      } else {
        if (layout) {
          layout.style.display = 'none';
          layout.classList.remove('authenticated');
        }
        if (loginScreen) {
          loginScreen.style.display = 'flex';
          const inputUser = document.getElementById('adminLoginUser');
          if (inputUser) {
            setTimeout(() => inputUser.focus(), 150);
          }
        }
      }
    },

    init() {
      // 1. Escuchar credenciales de Firebase en la nube si están disponibles
      if (window.CallejonFirebase && window.CallejonFirebase.isReady && window.CallejonFirebase.isReady()) {
        try {
          window.CallejonFirebase.db.ref(STORAGE_KEYS.FIREBASE_NODE).on('value', snap => {
            const val = snap.val();
            if (val && val.customPassword) {
              const current = this.getCredentials();
              if (current.customPassword !== val.customPassword) {
                localStorage.setItem(STORAGE_KEYS.CREDS, JSON.stringify({ ...current, ...val }));
              }
            }
          });
        } catch (e) {}
      }

      // 2. Establecer UI inicial
      this.updateUIState();

      // 3. Vincular Formulario de Login
      const form = document.getElementById('adminLoginForm');
      const errBanner = document.getElementById('adminLoginError');
      const errText = document.getElementById('adminLoginErrorText');

      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const user = document.getElementById('adminLoginUser')?.value || '';
          const pass = document.getElementById('adminLoginPass')?.value || '';
          const remember = document.getElementById('adminRememberMe')?.checked || false;
          const submitBtn = document.getElementById('btnSubmitAdminLogin');

          if (errBanner) errBanner.classList.remove('visible');
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Verificando acceso...</span>';
          }

          setTimeout(() => {
            const res = this.login(user, pass, remember);
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = `
                <span>Acceder al Panel de Control</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              `;
            }

            if (res.success) {
              this.updateUIState();
              if (window.AdminApp && typeof window.AdminApp.renderAll === 'function') {
                window.AdminApp.renderAll();
              }
              if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
                window.AdminApp.showToast(`✨ Bienvenido al Panel Administrativo, ${res.session.user}`, 'success');
              }
            } else {
              if (errBanner && errText) {
                errText.textContent = res.message;
                errBanner.classList.add('visible');
              }
            }
          }, 300);
        });
      }

      // 4. Ver/Ocultar contraseña en el Login
      const btnTogglePwd = document.getElementById('btnToggleAdminPwd');
      const inputPass = document.getElementById('adminLoginPass');
      if (btnTogglePwd && inputPass) {
        btnTogglePwd.addEventListener('click', () => {
          const isPass = inputPass.type === 'password';
          inputPass.type = isPass ? 'text' : 'password';
          btnTogglePwd.innerHTML = isPass
            ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
            : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
        });
      }

      // 5. Botón de Cerrar Sesión (Topbar)
      const btnLogout = document.getElementById('btnAdminLogout');
      if (btnLogout) {
        btnLogout.addEventListener('click', () => {
          if (confirm('¿Deseas cerrar la sesión administrativa?')) {
            this.clearSession();
            this.updateUIState();
            if (form) form.reset();
            if (errBanner) errBanner.classList.remove('visible');
          }
        });
      }

      // 6. Botón y Modal de Cambiar Contraseña
      const btnOpenChangePass = document.getElementById('btnOpenChangePassModal');
      const modalChangePass = document.getElementById('modalChangeAdminPassword');
      const formChangePass = document.getElementById('formAdminChangePassword');

      if (btnOpenChangePass && modalChangePass) {
        btnOpenChangePass.addEventListener('click', () => {
          modalChangePass.classList.add('active');
          const curInput = document.getElementById('adminCurrentPass');
          if (curInput) setTimeout(() => curInput.focus(), 150);
        });
      }

      if (formChangePass) {
        formChangePass.addEventListener('submit', (e) => {
          e.preventDefault();
          const cur = document.getElementById('adminCurrentPass')?.value || '';
          const nw = document.getElementById('adminNewPass')?.value || '';
          const conf = document.getElementById('adminConfirmPass')?.value || '';

          const res = this.changePassword(cur, nw, conf);
          if (res.success) {
            formChangePass.reset();
            if (modalChangePass) modalChangePass.classList.remove('active');
            if (window.AdminApp && typeof window.AdminApp.showToast === 'function') {
              window.AdminApp.showToast('🔐 Contraseña de administrador actualizada con éxito.', 'success');
            }
          } else {
            alert(res.message);
          }
        });
      }

      // 7. Desplegar ayuda de credenciales de demostración
      const helpHeader = document.querySelector('.admin-login-help-header');
      const helpBody = document.querySelector('.admin-login-help-body');
      if (helpHeader && helpBody) {
        helpHeader.addEventListener('click', () => {
          const isVisible = helpBody.style.display !== 'none';
          helpBody.style.display = isVisible ? 'none' : 'block';
        });
      }
    }
  };

  window.AdminAuth = AdminAuth;

  // Auto-iniciar al cargar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AdminAuth.init());
  } else {
    AdminAuth.init();
  }
})(window);
