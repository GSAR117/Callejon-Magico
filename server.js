const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.apk': 'application/vnd.android.package-archive',
  '.webmanifest': 'application/manifest+json'
};

// Helper: Read users from disk
function getUsers() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, '[]', 'utf8');
      return [];
    }
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading users file:', err);
    return [];
  }
}

// Helper: Save users to disk
function saveUsers(users) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving users file:', err);
    return false;
  }
}

// Helper: Random Luxury Username Generator
const LUXURY_PREFIXES = ['davanti', 'atelier', 'maison', 'luxe', 'prive', 'velvet', 'aurora', 'orion', 'zenith', 'satin', 'soleil', 'marfil'];
const LUXURY_SUFFIXES = ['noir', 'gold', 'silk', 'chic', 'pure', 'amber', 'ivory', 'royal', 'claire', 'celeste', 'elite', 'paris'];

function generateRandomUsername(nameHint) {
  const prefix = LUXURY_PREFIXES[Math.floor(Math.random() * LUXURY_PREFIXES.length)];
  const suffix = LUXURY_SUFFIXES[Math.floor(Math.random() * LUXURY_SUFFIXES.length)];
  const num = Math.floor(Math.random() * 900) + 100; // 3-digit number (100-999)
  
  if (nameHint && Math.random() > 0.5) {
    const cleanHint = nameHint.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8);
    if (cleanHint.length >= 3) {
      return `${cleanHint}_${suffix}${num}`;
    }
  }
  
  return `${prefix}_${suffix}${num}`;
}

// Helper: parse JSON request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) { // 1MB limit
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

// Helper: send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  let cleanUrl = req.url.split('?')[0];

  // ==========================================
  // AUTHENTICATION API ROUTES
  // ==========================================
  if (cleanUrl.startsWith('/api/auth/')) {
    const action = cleanUrl.replace('/api/auth/', '');

    // 1. Generate Random Username
    if (action === 'random-username' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const username = generateRandomUsername(body.nameHint);
        return sendJson(res, 200, { success: true, username });
      } catch (e) {
        return sendJson(res, 400, { success: false, message: 'Invalid request' });
      }
    }

    // 2. Register New User
    if (action === 'register' && req.method === 'POST') {
      try {
        const { fullName, email, password, username: customUsername } = await parseBody(req);

        if (!fullName || !email || !password) {
          return sendJson(res, 400, { success: false, message: 'Nombre, correo y contraseña son requeridos.' });
        }

        const users = getUsers();
        const normalizedEmail = email.trim().toLowerCase();

        // Check if email already registered
        const existingEmail = users.find(u => u.email.toLowerCase() === normalizedEmail);
        if (existingEmail) {
          return sendJson(res, 409, { success: false, message: 'Este correo electrónico ya está registrado en D\'Avanti.' });
        }

        // Generate random username if not supplied
        let finalUsername = (customUsername || '').trim().replace(/^@/, '').toLowerCase();
        if (!finalUsername) {
          finalUsername = generateRandomUsername(fullName);
        }

        // Ensure username uniqueness
        let counter = 1;
        let baseUsername = finalUsername;
        while (users.some(u => u.username.toLowerCase() === finalUsername.toLowerCase())) {
          finalUsername = `${baseUsername}${counter++}`;
        }

        const newUser = {
          id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
          fullName: fullName.trim(),
          email: normalizedEmail,
          username: finalUsername,
          password: password, // In production this would be hashed with bcrypt
          tier: 'Privé Member',
          createdAt: new Date().toISOString()
        };

        users.push(newUser);
        saveUsers(users);

        // Safe user object to return
        const safeUser = {
          id: newUser.id,
          fullName: newUser.fullName,
          email: newUser.email,
          username: newUser.username,
          tier: newUser.tier,
          createdAt: newUser.createdAt
        };

        return sendJson(res, 201, {
          success: true,
          message: '¡Cuenta creada con éxito!',
          user: safeUser
        });
      } catch (err) {
        console.error('Register error:', err);
        return sendJson(res, 500, { success: false, message: 'Error interno en el servidor.' });
      }
    }

    // 3. Login
    if (action === 'login' && req.method === 'POST') {
      try {
        const { identifier, password } = await parseBody(req);

        if (!identifier || !password) {
          return sendJson(res, 400, { success: false, message: 'Usuario/correo y contraseña son requeridos.' });
        }

        const users = getUsers();
        const cleanIdent = identifier.trim().toLowerCase().replace(/^@/, '');

        const user = users.find(u => 
          u.email.toLowerCase() === cleanIdent || 
          u.username.toLowerCase() === cleanIdent
        );

        if (!user || user.password !== password) {
          return sendJson(res, 401, { success: false, message: 'Credenciales inválidas. Verifica tu correo/usuario y contraseña.' });
        }

        const safeUser = {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          username: user.username,
          tier: user.tier || 'Privé Member',
          createdAt: user.createdAt
        };

        return sendJson(res, 200, {
          success: true,
          message: `¡Bienvenido de vuelta, ${user.fullName.split(' ')[0]}!`,
          user: safeUser
        });
      } catch (err) {
        console.error('Login error:', err);
        return sendJson(res, 500, { success: false, message: 'Error interno en el servidor.' });
      }
    }

    // 4. Get list of users (safe)
    if (action === 'users' && req.method === 'GET') {
      const users = getUsers().map(u => ({
        id: u.id,
        fullName: u.fullName,
        email: u.email,
        username: u.username,
        tier: u.tier,
        createdAt: u.createdAt
      }));
      return sendJson(res, 200, { success: true, count: users.length, users });
    }

    return sendJson(res, 404, { success: false, message: 'Ruta de autenticación no encontrada' });
  }

  // ==========================================
  // STATIC FILE SERVING
  // ==========================================
  const decodedUrl = decodeURIComponent(cleanUrl);
  let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`D'Avanti Maison & Departamental server running at http://localhost:${PORT}`);
});
