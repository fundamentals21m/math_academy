/**
 * Lazy Firebase Configuration
 *
 * This module provides lazy-loaded Firebase instances to enable
 * better code splitting and reduced initial bundle size.
 *
 * Usage:
 *   const { getFirebaseAuth } = await import('@magic-internet-math/shared/firebase/lazy');
 *   const auth = await getFirebaseAuth();
 */

import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { Functions } from 'firebase/functions';

import { initializeApp, getApps, type FirebaseOptions } from 'firebase/app';
import { getAuth, type Auth as AuthType } from 'firebase/auth';
import { getFirestore, type Firestore as FirestoreType } from 'firebase/firestore';
import { getFunctions, type Functions as FunctionsType } from 'firebase/functions';

import { isFirebaseConfigured } from './config';

let app: FirebaseApp | null = null;
let auth: AuthType | null = null;
let db: FirestoreType | null = null;
let functions: FunctionsType | null = null;

function getFirebaseConfig(): FirebaseOptions | null {
  if (!isFirebaseConfigured()) {
    return null;
  }

  return {
    apiKey: typeof import.meta !== 'undefined' 
      ? import.meta.env.VITE_FIREBASE_API_KEY || ''
      : '',
    authDomain: typeof import.meta !== 'undefined'
      ? import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || ''
      : '',
    projectId: typeof import.meta !== 'undefined'
      ? import.meta.env.VITE_FIREBASE_PROJECT_ID || ''
      : '',
    storageBucket: typeof import.meta !== 'undefined'
      ? import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || ''
      : '',
    messagingSenderId: typeof import.meta !== 'undefined'
      ? import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || ''
      : '',
    appId: typeof import.meta !== 'undefined'
      ? import.meta.env.VITE_FIREBASE_APP_ID || ''
      : '',
  };
}

async function initializeAppIfNeeded(): Promise<FirebaseApp> {
  if (app) return app;

  const config = getFirebaseConfig();
  if (!config) {
    throw new Error('Firebase is not configured. Set VITE_FIREBASE_* environment variables.');
  }

  const existingApps = getApps();
  if (existingApps.length > 0) {
    app = existingApps[0];
  } else {
    app = initializeApp(config);
  }

  return app;
}

/**
 * Lazy-load Firebase App
 */
export async function getFirebaseApp(): Promise<FirebaseApp> {
  return initializeAppIfNeeded();
}

/**
 * Lazy-load Firebase Auth
 * Only loads auth module when first accessed
 */
export async function getFirebaseAuth(): Promise<AuthType> {
  if (auth) return auth;

  await initializeAppIfNeeded();
  auth = getAuth(app!);
  return auth;
}

/**
 * Lazy-load Firestore
 * Only loads firestore module when first accessed
 */
export async function getFirebaseFirestore(): Promise<FirestoreType> {
  if (db) return db;

  await initializeAppIfNeeded();
  db = getFirestore(app!);
  return db;
}

/**
 * Lazy-load Cloud Functions
 * Only loads functions module when first accessed
 */
export async function getFirebaseFunctions(): Promise<FunctionsType> {
  if (functions) return functions;

  await initializeAppIfNeeded();
  functions = getFunctions(app!);
  return functions;
}

/**
 * Check if Firebase modules have been loaded
 */
export function areFirebaseModulesLoaded(): {
  app: boolean;
  auth: boolean;
  firestore: boolean;
  functions: boolean;
} {
  return {
    app: !!app,
    auth: !!auth,
    firestore: !!db,
    functions: !!functions,
  };
}

/**
 * Reset all Firebase instances (useful for testing)
 */
export function resetFirebaseInstances(): void {
  app = null;
  auth = null;
  db = null;
  functions = null;
}
