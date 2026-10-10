async function sha256(text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

const CREDENTIAL_HASHES = {
  admin: '68401de8bc05681739b47c1227588f4fb51e6c39ed78b0e75b4e5fcdff3e837e',
  store: '9b7f209dbe2fba6c936dc2f923dbbce15c44ca28db873da736e64f1857ebc1fa',
};

const SESSION_KEY = 'bss_dash_session';
const ROLE_KEY = 'bss_dash_role';
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000;

// Sahi login par role ('admin' / 'store') return karta hai, galat par null
export async function verifyLogin(id, password) {
  const hash = await sha256(`${id}:${password}`);
  for (const [role, expected] of Object.entries(CREDENTIAL_HASHES)) {
    if (hash === expected) return role;
  }
  return null;
}

export function createSession(role = 'admin') {
  const expiry = Date.now() + SESSION_DURATION_MS;
  sessionStorage.setItem(SESSION_KEY, String(expiry));
  sessionStorage.setItem(ROLE_KEY, role);
}

export function getRole() {
  return sessionStorage.getItem(ROLE_KEY) || 'admin';
}

export function isSessionValid() {
  const expiry = sessionStorage.getItem(SESSION_KEY);
  if (!expiry) return false;
  if (Date.now() > Number(expiry)) {
    destroySession();
    return false;
  }
  return true;
}

export function destroySession() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(ROLE_KEY);
}