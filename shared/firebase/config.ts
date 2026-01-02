/**
 * Firebase configuration for Magic Internet Math
 *
 * IMPORTANT: Replace these values with your actual Firebase project config
 * You can find these values in Firebase Console > Project Settings > Your apps
 */

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getFunctions, type Functions, connectFunctionsEmulator } from 'firebase/functions';

// Firebase configuration - hardcoded for production builds
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '***REMOVED***',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'magic-internet-math-96630.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'magic-internet-math-96630',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'magic-internet-math-96630.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '***REMOVED***',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:***REMOVED***:web:072f6cb1724919360f94cb',
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
        } catch (e) {
          // Emulator may already be connected
        }
      }
    }
  }
  return functions;
}

/**
 * Check if Firebase is configured
 */
export function isFirebaseConfigured(): boolean {
  return !!firebaseConfig.apiKey && firebaseConfig.apiKey.length > 10;
}

export { firebaseConfig };
