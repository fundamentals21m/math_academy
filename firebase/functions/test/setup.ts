/**
 * Firebase Functions Test Setup
 *
 * This file initializes the firebase-functions-test SDK for offline testing.
 * Tests run without connecting to real Firebase services.
 */

import * as functionsTest from 'firebase-functions-test';

// Initialize in offline mode (no Firebase project connection)
const testEnv = functionsTest();

// Export for use in tests
export { testEnv };

// Cleanup helper
export function cleanup(): void {
  testEnv.cleanup();
}
