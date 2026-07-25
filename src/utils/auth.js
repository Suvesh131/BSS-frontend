
async function sha256(text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}


const CREDENTIAL_HASH = 'dc11c2a0c7bcbf6db237d314c0c433b31bbf398a70634c703d243a549b149cdb';

const SESSION_KEY = 'bss_dash_session';
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; 

export async function verifyCredentials(id, password) {
  const hash = await sha256(`${id}:${password}`);
  return hash === CREDENTIAL_HASH;
}

export function createSession() {
  const expiry = Date.now() + SESSION_DURATION_MS;
  sessionStorage.setItem(SESSION_KEY, String(expiry));
}

export function isSessionValid() {
  const expiry = sessionStorage.getItem(SESSION_KEY);
  if (!expiry) return false;
  if (Date.now() > Number(expiry)) {
    sessionStorage.removeItem(SESSION_KEY);
    return false;
  }
  return true;
}

export function destroySession() {
  sessionStorage.removeItem(SESSION_KEY);
}