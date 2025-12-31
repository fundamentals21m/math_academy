/**
 * Nostr Authentication for the HUB
 * Vanilla JS implementation of NIP-07 auth with Firebase
 */

// Firebase imports are loaded from CDN in index.html
// We use the global firebase object initialized there

// Bech32 encoding for npub
const BECH32_ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
const BECH32_GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
const AUTH_EVENT_KIND = 22242;
const AUTH_STORAGE_KEY = 'magic-internet-math-nostr-auth';

function polymod(values) {
  let chk = 1;
  for (const v of values) {
    const top = chk >> 25;
    chk = ((chk & 0x1ffffff) << 5) ^ v;
    for (let i = 0; i < 5; i++) {
      if ((top >> i) & 1) {
        chk ^= BECH32_GENERATOR[i];
      }
    }
  }
  return chk;
}

function hrpExpand(hrp) {
  const result = [];
  for (const c of hrp) {
    result.push(c.charCodeAt(0) >> 5);
  }
  result.push(0);
  for (const c of hrp) {
    result.push(c.charCodeAt(0) & 31);
  }
  return result;
}

function createChecksum(hrp, data) {
  const values = [...hrpExpand(hrp), ...data, 0, 0, 0, 0, 0, 0];
  const mod = polymod(values) ^ 1;
  const checksum = [];
  for (let i = 0; i < 6; i++) {
    checksum.push((mod >> (5 * (5 - i))) & 31);
  }
  return checksum;
}

function convertBits(data, fromBits, toBits, pad) {
  let acc = 0;
  let bits = 0;
  const result = [];
  const maxv = (1 << toBits) - 1;

  for (const value of data) {
    if (value < 0 || value >> fromBits !== 0) {
      return null;
    }
    acc = (acc << fromBits) | value;
    bits += fromBits;
    while (bits >= toBits) {
      bits -= toBits;
      result.push((acc >> bits) & maxv);
    }
  }

  if (pad) {
    if (bits > 0) {
      result.push((acc << (toBits - bits)) & maxv);
    }
  } else if (bits >= fromBits || ((acc << (toBits - bits)) & maxv)) {
    return null;
  }

  return result;
}

function hexToBytes(hex) {
  if (hex.length % 2 !== 0) {
    throw new Error('Hex string must have even length');
  }
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

function bech32Encode(hrp, data) {
  const data5bit = convertBits(data, 8, 5, true);
  if (!data5bit) {
    throw new Error('Failed to convert data to 5-bit groups');
  }

  const checksum = createChecksum(hrp, data5bit);
  let result = hrp + '1';

  for (const d of data5bit) {
    result += BECH32_ALPHABET[d];
  }
  for (const c of checksum) {
    result += BECH32_ALPHABET[c];
  }

  return result;
}

function hexToNpub(hex) {
  if (hex.length !== 64) {
    throw new Error('Pubkey must be 32 bytes (64 hex characters)');
  }
  const bytes = hexToBytes(hex);
  return bech32Encode('npub', bytes);
}

function shortenNpub(npub, chars = 8) {
  if (npub.length <= chars * 2 + 3) {
    return npub;
  }
  return `${npub.slice(0, chars)}...${npub.slice(-chars)}`;
}

// Check if NIP-07 extension is available
function hasNostrExtension() {
  return typeof window !== 'undefined' && window.nostr !== undefined;
}

// Wait for extension to be injected
function waitForNostrExtension(timeout = 3000) {
  return new Promise((resolve) => {
    if (hasNostrExtension()) {
      resolve(true);
      return;
    }

    const start = Date.now();
    const interval = setInterval(() => {
      if (hasNostrExtension()) {
        clearInterval(interval);
        resolve(true);
      } else if (Date.now() - start > timeout) {
        clearInterval(interval);
        resolve(false);
      }
    }, 100);
  });
}

// Auth state
let authState = {
  isAuthenticated: false,
  isConnecting: false,
  npub: null,
  displayName: null,
  hasExtension: false,
  extensionChecked: false
};

// Update UI based on auth state
function updateAuthUI() {
  const container = document.getElementById('nostr-auth-container');
  if (!container) return;

  if (authState.isConnecting) {
    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.75rem; background: rgba(0, 245, 255, 0.1); border: 1px solid rgba(0, 245, 255, 0.3); border-radius: 6px;">
        <div style="width: 14px; height: 14px; border: 2px solid #00f5ff; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <span style="color: #00f5ff; font-size: 0.8rem;">Connecting...</span>
      </div>
      <style>
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
    `;
    return;
  }

  if (authState.isAuthenticated) {
    const displayText = authState.displayName || shortenNpub(authState.npub, 6);
    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #00ff9f; font-size: 0.9rem;">⚡</span>
        <span style="color: #e8e8ff; font-size: 0.85rem; font-weight: 500;">${displayText}</span>
        <button onclick="window.nostrAuthDisconnect()" style="font-size: 0.7rem; color: #8888aa; background: none; border: 1px solid rgba(0, 245, 255, 0.2); padding: 0.2rem 0.5rem; border-radius: 4px; cursor: pointer; margin-left: 0.25rem;" onmouseover="this.style.borderColor='rgba(0, 245, 255, 0.5)'" onmouseout="this.style.borderColor='rgba(0, 245, 255, 0.2)'">
          ✕
        </button>
      </div>
    `;
    return;
  }

  if (!authState.extensionChecked) {
    container.innerHTML = `
      <span style="color: #8888aa; font-size: 0.8rem;">...</span>
    `;
    return;
  }

  if (!authState.hasExtension) {
    container.innerHTML = `
      <a href="https://getalby.com" target="_blank" style="display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.75rem; background: rgba(255, 170, 0, 0.1); border: 1px solid rgba(255, 170, 0, 0.3); border-radius: 6px; color: #ffaa00; font-size: 0.8rem; text-decoration: none;" title="Install Alby or nos2x extension">
        <span>⚡</span>
        <span>Get Nostr</span>
      </a>
    `;
    return;
  }

  container.innerHTML = `
    <button onclick="window.nostrAuthConnect()" style="display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.75rem; background: linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(191, 0, 255, 0.1)); border: 1px solid rgba(0, 245, 255, 0.3); border-radius: 6px; color: #00f5ff; font-weight: 500; cursor: pointer; font-size: 0.8rem; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(0, 245, 255, 0.6)'; this.style.boxShadow='0 0 15px rgba(0, 245, 255, 0.2)'" onmouseout="this.style.borderColor='rgba(0, 245, 255, 0.3)'; this.style.boxShadow='none'">
      <span>⚡</span>
      <span>Connect</span>
    </button>
  `;
}

// Connect with Nostr
async function connect() {
  if (!window.firebaseApp) {
    console.error('Firebase not initialized');
    return;
  }

  if (!hasNostrExtension()) {
    alert('No Nostr extension found. Please install Alby, nos2x, or another NIP-07 extension.');
    return;
  }

  authState.isConnecting = true;
  updateAuthUI();

  try {
    const nostr = window.nostr;
    const { getFunctions, httpsCallable } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js');
    const { getAuth, signInWithCustomToken } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');

    const functions = getFunctions(window.firebaseApp);
    const auth = getAuth(window.firebaseApp);

    // Step 1: Get public key from extension
    const pubkeyHex = await nostr.getPublicKey();
    const userNpub = hexToNpub(pubkeyHex);

    // Step 2: Request challenge from server
    const createChallenge = httpsCallable(functions, 'createChallenge');
    const challengeResult = await createChallenge({ pubkeyHex });
    const { challenge } = challengeResult.data;

    // Step 3: Sign the challenge
    const unsignedEvent = {
      kind: AUTH_EVENT_KIND,
      created_at: Math.floor(Date.now() / 1000),
      tags: [['challenge', challenge]],
      content: challenge,
    };

    const signedEvent = await nostr.signEvent(unsignedEvent);

    // Step 4: Verify signature and get Firebase token
    const verifyNostrAndCreateToken = httpsCallable(functions, 'verifyNostrAndCreateToken');
    const verifyResult = await verifyNostrAndCreateToken({
      signedEvent,
      challenge,
    });

    // Step 5: Sign in to Firebase
    await signInWithCustomToken(auth, verifyResult.data.token);

    // Update state
    authState.isAuthenticated = true;
    authState.npub = userNpub;

    // Store auth state
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ npub: userNpub }));
    } catch (err) {
      console.warn('Failed to store auth state:', err);
    }

    // Fetch profile from relays
    fetchNostrProfile(pubkeyHex);

  } catch (err) {
    console.error('Nostr connect error:', err);
    alert('Failed to connect: ' + (err.message || 'Unknown error'));
  } finally {
    authState.isConnecting = false;
    updateAuthUI();
  }
}

// Disconnect
async function disconnect() {
  try {
    const { getAuth, signOut } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
    const auth = getAuth(window.firebaseApp);
    await signOut(auth);

    // Clear stored auth state
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (err) {
      console.warn('Failed to clear auth state:', err);
    }

    authState.isAuthenticated = false;
    authState.npub = null;
    authState.displayName = null;
    updateAuthUI();
  } catch (err) {
    console.error('Disconnect error:', err);
  }
}

// Fetch profile from Nostr relays
async function fetchNostrProfile(pubkeyHex) {
  const relays = [
    'wss://relay.damus.io',
    'wss://relay.nostr.band',
    'wss://nos.lol',
  ];

  for (const relayUrl of relays) {
    try {
      const profile = await new Promise((resolve) => {
        let cleaned = false;
        let ws = null;
        let timeoutId = null;

        const cleanup = () => {
          if (cleaned) return;
          cleaned = true;
          if (timeoutId) clearTimeout(timeoutId);
          if (ws && ws.readyState !== WebSocket.CLOSED) ws.close();
        };

        timeoutId = setTimeout(() => {
          cleanup();
          resolve(null);
        }, 5000);

        try {
          ws = new WebSocket(relayUrl);
        } catch (err) {
          cleanup();
          resolve(null);
          return;
        }

        const subId = Math.random().toString(36).substring(2, 15);

        ws.onopen = () => {
          if (cleaned || !ws) return;
          ws.send(JSON.stringify(['REQ', subId, { kinds: [0], authors: [pubkeyHex], limit: 1 }]));
        };

        ws.onmessage = (event) => {
          if (cleaned) return;
          try {
            const data = JSON.parse(event.data);
            if (data[0] === 'EVENT' && data[1] === subId) {
              const content = JSON.parse(data[2].content);
              cleanup();
              resolve({
                name: content.name || content.display_name,
                display_name: content.display_name,
              });
            } else if (data[0] === 'EOSE') {
              cleanup();
              resolve(null);
            }
          } catch (err) {
            // Continue listening
          }
        };

        ws.onerror = () => {
          cleanup();
          resolve(null);
        };

        ws.onclose = () => {
          if (!cleaned) {
            cleanup();
            resolve(null);
          }
        };
      });

      if (profile) {
        authState.displayName = profile.display_name || profile.name;
        updateAuthUI();
        return;
      }
    } catch (err) {
      console.debug('Failed to fetch profile from', relayUrl, err);
    }
  }
}

// Initialize auth
async function initNostrAuth() {
  // Wait for extension
  const hasExt = await waitForNostrExtension(3000);
  authState.hasExtension = hasExt;
  authState.extensionChecked = true;
  updateAuthUI();

  // Listen for Firebase auth state changes
  try {
    const { getAuth, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
    const auth = getAuth(window.firebaseApp);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        authState.isAuthenticated = true;
        authState.npub = user.uid;

        // Restore display name from storage
        try {
          const stored = localStorage.getItem(AUTH_STORAGE_KEY);
          if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.displayName) {
              authState.displayName = parsed.displayName;
            }
          }
        } catch (err) {
          console.debug('Storage read error:', err);
        }
      } else {
        authState.isAuthenticated = false;
        authState.npub = null;
        authState.displayName = null;
      }
      updateAuthUI();
    });
  } catch (err) {
    console.error('Failed to initialize auth listener:', err);
  }
}

// Export functions to window for HTML onclick handlers
window.nostrAuthConnect = connect;
window.nostrAuthDisconnect = disconnect;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNostrAuth);
} else {
  initNostrAuth();
}
