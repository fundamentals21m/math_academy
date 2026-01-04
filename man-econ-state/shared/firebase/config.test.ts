/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock firebase modules before importing config
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(() => ({ name: '[DEFAULT]' })),
  getApps: vi.fn(() => []),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({ currentUser: null })),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({ type: 'firestore' })),
}));

vi.mock('firebase/functions', () => ({
  getFunctions: vi.fn(() => ({ region: 'us-central1' })),
  connectFunctionsEmulator: vi.fn(),
}));

describe('firebase/config', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('isFirebaseConfigured', () => {
    it('should return false when apiKey is empty', async () => {
      // Setup empty env
      vi.stubEnv('VITE_FIREBASE_API_KEY', '');
      
      const { isFirebaseConfigured } = await import('./config');
      expect(isFirebaseConfigured()).toBe(false);
    });

    it('should return false when apiKey is placeholder', async () => {
      vi.stubEnv('VITE_FIREBASE_API_KEY', 'YOUR_API_KEY');
      
      const { isFirebaseConfigured } = await import('./config');
      expect(isFirebaseConfigured()).toBe(false);
    });

    it('should return true when apiKey is set', async () => {
      vi.stubEnv('VITE_FIREBASE_API_KEY', 'AIzaSyRealApiKey123');
      
      const { isFirebaseConfigured } = await import('./config');
      expect(isFirebaseConfigured()).toBe(true);
    });
  });

  describe('getFirebaseApp', () => {
    it('should initialize app only once', async () => {
      const { initializeApp, getApps } = await import('firebase/app');
      vi.mocked(getApps).mockReturnValue([]);
      
      const { getFirebaseApp } = await import('./config');
      
      const app1 = getFirebaseApp();
      const app2 = getFirebaseApp();
      
      expect(app1).toBe(app2);
      expect(initializeApp).toHaveBeenCalledTimes(1);
    });

    it('should reuse existing app if already initialized', async () => {
      const existingApp = { name: '[DEFAULT]' };
      const { initializeApp, getApps } = await import('firebase/app');
      vi.mocked(getApps).mockReturnValue([existingApp as never]);
      
      vi.resetModules();
      const { getFirebaseApp } = await import('./config');
      
      const app = getFirebaseApp();
      expect(app).toBe(existingApp);
      expect(initializeApp).not.toHaveBeenCalled();
    });
  });

  describe('getFirebaseAuth', () => {
    it('should return auth instance', async () => {
      const { getFirebaseAuth } = await import('./config');
      
      const auth1 = getFirebaseAuth();
      const auth2 = getFirebaseAuth();
      
      expect(auth1).toBe(auth2);
      expect(auth1).toHaveProperty('currentUser');
    });
  });

  describe('getFirebaseFirestore', () => {
    it('should return firestore instance', async () => {
      const { getFirebaseFirestore } = await import('./config');
      
      const db1 = getFirebaseFirestore();
      const db2 = getFirebaseFirestore();
      
      expect(db1).toBe(db2);
      expect(db1).toHaveProperty('type', 'firestore');
    });
  });

  describe('getFirebaseFunctions', () => {
    it('should return functions instance', async () => {
      const { getFirebaseFunctions } = await import('./config');
      
      const functions1 = getFirebaseFunctions();
      const functions2 = getFirebaseFunctions();
      
      expect(functions1).toBe(functions2);
    });

    it('should connect to emulator when param is set in development', async () => {
      // Mock localhost
      Object.defineProperty(window, 'location', {
        value: {
          hostname: 'localhost',
          search: '?emulator=true',
        },
        writable: true,
      });

      vi.resetModules();
      const { connectFunctionsEmulator } = await import('firebase/functions');
      const { getFirebaseFunctions } = await import('./config');
      
      getFirebaseFunctions();
      
      expect(connectFunctionsEmulator).toHaveBeenCalledWith(
        expect.anything(),
        'localhost',
        5001
      );
    });

    it('should not connect to emulator without param', async () => {
      Object.defineProperty(window, 'location', {
        value: {
          hostname: 'localhost',
          search: '',
        },
        writable: true,
      });

      vi.resetModules();
      const { connectFunctionsEmulator } = await import('firebase/functions');
      const { getFirebaseFunctions } = await import('./config');
      
      getFirebaseFunctions();
      
      expect(connectFunctionsEmulator).not.toHaveBeenCalled();
    });
  });
});
