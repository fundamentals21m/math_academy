/**
 * Shared constants used across the application
 */

// =============================================================================
// TIMEOUTS (milliseconds)
// =============================================================================

/** WebSocket connection timeout for Nostr relays */
export const RELAY_TIMEOUT_MS = 5000;

/** Time to wait for Nostr extension to be available */
export const EXTENSION_WAIT_MS = 2000;

/** Minimum time between sync requests (rate limiting) */
export const RATE_LIMIT_MS = 30000;

/** Leaderboard auto-refresh interval */
export const REFRESH_INTERVAL_MS = 30000;

/** Duration to show copy confirmation feedback */
export const COPY_FEEDBACK_MS = 2000;

/** Generic WebSocket timeout */
export const WEBSOCKET_TIMEOUT_MS = 3000;

// =============================================================================
// SYNC INTERVALS
// =============================================================================

/** Periodic sync interval for background syncing (30 seconds) */
export const SYNC_INTERVAL_MS = 30 * 1000;

/** Debounce delay for immediate sync requests */
export const DEBOUNCE_MS = 2000;

// =============================================================================
// CACHE
// =============================================================================

/** Leaderboard cache expiry time (1 hour) */
export const LEADERBOARD_CACHE_EXPIRY_MS = 60 * 60 * 1000;

// =============================================================================
// DEFAULT NOSTR RELAYS
// =============================================================================

/** Default Nostr relays for fetching profiles - ordered by reliability */
export const DEFAULT_RELAYS = [
  'wss://relay.damus.io',
  'wss://relay.nostr.band',
  'wss://nos.lol',
  'wss://relay.primal.net',
  'wss://relay.nostr.bg',
  'wss://nostr-pub.wellorder.net',
  'wss://nostr.mom',
] as const;

/** Fallback relays to use if all defaults fail */
export const FALLBACK_RELAYS = [
  'wss://relay.snort.social',
  'wss://relay.current.fyi',
  'wss://nostr.zebedee.cloud',
] as const;
