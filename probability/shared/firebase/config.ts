/**
 * Firebase configuration for Magic Internet Math
 *
 * IMPORTANT: Replace these values with your actual Firebase project config
 * You can find these values in Firebase Console > Project Settings > Your apps
 */

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import {
  getFirestore,
  type Firestore,
  doc,
  collection,
  onSnapshot,
  type DocumentReference,
  type CollectionReference,
  type Unsubscribe,
} from 'firebase/firestore';
import { getFunctions, type Functions, connectFunctionsEmulator, httpsCallable } from 'firebase/functions';

// Firebase configuration - loaded from environment variables only
// IMPORTANT: Never commit API keys. Use .env files or Vercel environment variables.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

// Check if we're in development mode
const isDevelopment =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

// Singleton instances
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let functions: Functions | null = null;

/**
 * Initialize Firebase app
 */
export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    const existingApps = getApps();
    if (existingApps.length > 0) {
      app = existingApps[0];
    } else {
      app = initializeApp(firebaseConfig);
    }
  }
  return app;
}

/**
 * Get Firebase Auth instance
 */
export function getFirebaseAuth(): Auth {
  if (!auth) {
    auth = getAuth(getFirebaseApp());
  }
  return auth;
}

/**
 * Get Firestore instance
 */
export function getFirebaseFirestore(): Firestore {
  if (!db) {
    db = getFirestore(getFirebaseApp());
  }
  return db;
}

/**
 * Get Cloud Functions instance
 */
export function getFirebaseFunctions(): Functions {
  if (!functions) {
    functions = getFunctions(getFirebaseApp());

    // Only connect to emulator if explicitly enabled via URL param
    // e.g., http://localhost:5173/?emulator=true
    if (isDevelopment && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('emulator') === 'true') {
        try {
          connectFunctionsEmulator(functions, 'localhost', 5001);
        } catch {
          // Emulator may already be connected
        }
      }
    }
  }
  return functions;
}

/**
 * Check if Firebase is configured
 * Returns false for empty keys, short keys, or common placeholder values
 */
export function isFirebaseConfigured(): boolean {
  const apiKey = firebaseConfig.apiKey;
  if (!apiKey || apiKey.length < 10) return false;
  
  // Check for common placeholder values
  const placeholders = [
    'YOUR_API_KEY',
    'your-api-key',
    'YOUR-API-KEY',
    'PLACEHOLDER',
    'placeholder',
    'API_KEY',
    'api-key',
    'xxx',
  ];
  
  const lowerKey = apiKey.toLowerCase();
  return !placeholders.some(p => lowerKey.includes(p.toLowerCase()));
}

export { firebaseConfig };

// Re-export Firestore functions for consistent Firebase instance usage
export {
  doc,
  collection,
  onSnapshot,
  type DocumentReference,
  type CollectionReference,
  type Unsubscribe,
};

// Re-export Functions utilities
export { httpsCallable };
