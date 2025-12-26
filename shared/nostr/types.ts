/**
 * Nostr NIP-07 types for browser extension integration.
 * Compatible with nos2x, Alby, and other NIP-07 extensions.
 * @module nostr/types
 */

// Re-export leaderboard types to avoid duplication
export type {
  CourseId,
  LeaderboardRanking as LeaderboardEntry,
  UserProfile as LeaderboardUser,
} from '../leaderboard/types';

/**
 * Nostr event structure (NIP-01).
 * Represents a signed, publishable event.
 */
export interface NostrEvent {
  /** Event ID (32-byte hex, sha256 of serialized event) */
  id: string;
  /** Author's public key (32-byte hex) */
  pubkey: string;
  /** Unix timestamp in seconds */
  created_at: number;
  /** Event kind number */
  kind: number;
  /** Array of tags (each tag is an array of strings) */
  tags: string[][];
  /** Event content (interpretation depends on kind) */
  content: string;
  /** Schnorr signature (64-byte hex) */
  sig: string;
}

/**
 * Unsigned event (before signing).
 * Used as input to the signing function.
 */
export interface UnsignedNostrEvent {
  /** Event kind number */
  kind: number;
  /** Unix timestamp in seconds */
  created_at: number;
  /** Array of tags */
  tags: string[][];
  /** Event content */
  content: string;
  /** Optional pubkey (filled in by extension if not provided) */
  pubkey?: string;
}

/**
 * NIP-07 window.nostr interface.
 * Defines the API exposed by browser extensions for Nostr signing.
 */
export interface WindowNostr {
  /**
   * Get the user's public key in hex format.
   * @returns Promise resolving to 32-byte hex public key
   */
  getPublicKey(): Promise<string>;

  /**
   * Sign a Nostr event.
   * @param event - Unsigned event to sign
   * @returns Promise resolving to signed event with id and sig
   */
  signEvent(event: UnsignedNostrEvent): Promise<NostrEvent>;

  /**
   * Get relays the user prefers (optional NIP-07 extension).
   * @returns Promise resolving to relay configuration map
   */
  getRelays?(): Promise<Record<string, { read: boolean; write: boolean }>>;

  /**
   * NIP-04 encryption methods (optional).
   * Provides encrypted direct messages using shared secrets.
   */
  nip04?: {
    /**
     * Encrypt a message for a recipient.
     * @param pubkey - Recipient's public key (hex)
     * @param plaintext - Message to encrypt
     * @returns Promise resolving to encrypted ciphertext
     */
    encrypt(pubkey: string, plaintext: string): Promise<string>;
    /**
     * Decrypt a message from a sender.
     * @param pubkey - Sender's public key (hex)
     * @param ciphertext - Encrypted message
     * @returns Promise resolving to decrypted plaintext
     */
    decrypt(pubkey: string, ciphertext: string): Promise<string>;
  };

  /**
   * NIP-44 encryption methods (optional).
   * Provides improved encrypted direct messages.
   */
  nip44?: {
    /**
     * Encrypt a message for a recipient.
     * @param pubkey - Recipient's public key (hex)
     * @param plaintext - Message to encrypt
     * @returns Promise resolving to encrypted ciphertext
     */
    encrypt(pubkey: string, plaintext: string): Promise<string>;
    /**
     * Decrypt a message from a sender.
     * @param pubkey - Sender's public key (hex)
     * @param ciphertext - Encrypted message
     * @returns Promise resolving to decrypted plaintext
     */
    decrypt(pubkey: string, ciphertext: string): Promise<string>;
  };
}

/**
 * Extend Window interface to include nostr.
 * This allows TypeScript to recognize window.nostr.
 */
declare global {
  interface Window {
    nostr?: WindowNostr;
  }
}

/**
 * Auth challenge event kind (NIP-98 inspired).
 * Used for authentication challenges in the leaderboard system.
 */
export const AUTH_EVENT_KIND = 22242;
