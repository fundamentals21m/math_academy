/**
 * ProgressSyncManager - Handles syncing full gamification state to Firebase
 * Server is the source of truth. Progress is loaded from server on app start.
 * @module gamification/progressSyncManager
 */

import { httpsCallable } from 'firebase/functions';
import { getFirebaseFunctions, isFirebaseConfigured } from '../firebase/config';
import { SYNC_INTERVAL_MS, DEBOUNCE_MS, RATE_LIMIT_MS } from '../constants';
import { getLogger } from '../utils/logger';
import { mergeGamificationStates } from './mergeProgress';
import { loadState, saveState } from './storage';
import type { GamificationState } from './types';

const logger = getLogger('ProgressSync');

// =============================================================================
// TYPES
// =============================================================================

interface SyncProgressRequest {
  progress: GamificationState;
  lastSyncedAt: string | null;
}

interface SyncProgressResponse {
  success: boolean;
  serverProgress: GamificationState | null;
  lastSyncedAt: string;
  merged: boolean;
}

interface GetProgressResponse {
  found: boolean;
  progress: GamificationState | null;
  lastSyncedAt: string | null;
}

export type SyncStatus = 'idle' | 'syncing' | 'success' | 'error';

export interface SyncResult {
  success: boolean;
  state?: GamificationState;
  merged?: boolean;
  error?: string;
}

// =============================================================================
// PROGRESS SYNC MANAGER
// =============================================================================

/**
 * ProgressSyncManager handles full gamification state synchronization with Firebase.
 * Unlike SyncManager which only syncs XP scores, this syncs the complete state.
 */
export class ProgressSyncManager {
  private syncInterval: ReturnType<typeof setInterval> | null = null;
  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private lastSyncTime: number = 0;
  private lastSyncedAt: string | null = null;
  private isAuthenticated: boolean = false;
  private pendingState: GamificationState | null = null;
  private _status: SyncStatus = 'idle';
  private statusListeners: Set<(status: SyncStatus) => void> = new Set();

  /**
   * Get current sync status
   */
  get status(): SyncStatus {
    return this._status;
  }

  /**
   * Subscribe to status changes
   */
  onStatusChange(listener: (status: SyncStatus) => void): () => void {
    this.statusListeners.add(listener);
    return () => this.statusListeners.delete(listener);
  }

  private setStatus(status: SyncStatus): void {
    this._status = status;
    for (const listener of this.statusListeners) {
      listener(status);
    }
  }

  /**
   * Set authentication status
   */
  setAuthenticated(authenticated: boolean): void {
    this.isAuthenticated = authenticated;
    if (!authenticated) {
      this.lastSyncedAt = null;
    }
  }

  /**
   * Get the last sync timestamp (for conflict detection)
   */
  getLastSyncedAt(): string | null {
    return this.lastSyncedAt;
  }

  /**
   * Set the last sync timestamp
   */
  setLastSyncedAt(timestamp: string | null): void {
    this.lastSyncedAt = timestamp;
  }

  // ===========================================================================
  // FETCH FROM SERVER
  // ===========================================================================

  /**
   * Fetch progress from server.
   * Called on app startup when user is authenticated.
   */
  async fetchServerProgress(): Promise<GetProgressResponse> {
    if (!this.isAuthenticated) {
      return { found: false, progress: null, lastSyncedAt: null };
    }

    if (!isFirebaseConfigured()) {
      logger.warn('Firebase not configured, cannot fetch progress');
      return { found: false, progress: null, lastSyncedAt: null };
    }

    try {
      const functions = getFirebaseFunctions();
      const getProgress = httpsCallable<unknown, GetProgressResponse>(
        functions,
        'getProgress'
      );

      const result = await getProgress({});

      if (result.data.found && result.data.progress) {
        this.lastSyncedAt = result.data.lastSyncedAt;
        logger.info('Fetched progress from server');
      }

      return result.data;
    } catch (error) {
      logger.error('Failed to fetch progress from server:', error);
      return { found: false, progress: null, lastSyncedAt: null };
    }
  }

  // ===========================================================================
  // MIGRATION
  // ===========================================================================

  /**
   * Migrate local progress to server.
   * Called on first login when user has existing localStorage progress.
   *
   * @param localState - The local state to migrate
   * @returns The final state (merged if server had data)
   */
  async migrateLocalProgress(localState: GamificationState): Promise<SyncResult> {
    if (!this.isAuthenticated) {
      return { success: false, error: 'Not authenticated' };
    }

    logger.info('Starting migration of local progress to server');

    // First, check if server already has progress
    const serverResponse = await this.fetchServerProgress();

    let finalState: GamificationState;
    if (serverResponse.found && serverResponse.progress) {
      // Server has progress - merge with local
      logger.info('Server has existing progress, merging with local');
      finalState = mergeGamificationStates(localState, serverResponse.progress);
    } else {
      // Server is empty - use local state
      finalState = localState;
    }

    // Sync the final state to server
    const syncResult = await this.syncNow(finalState);

    if (syncResult.success) {
      logger.info('Migration complete');
      return {
        success: true,
        state: syncResult.state || finalState,
        merged: serverResponse.found,
      };
    }

    return syncResult;
  }

  // ===========================================================================
  // SYNC TO SERVER
  // ===========================================================================

  /**
   * Start periodic sync
   */
  startPeriodicSync(): void {
    if (this.syncInterval) return;

    this.syncInterval = setInterval(() => {
      if (this.isAuthenticated && this.pendingState) {
        this.syncNow(this.pendingState);
      }
    }, SYNC_INTERVAL_MS);

    // Also sync on visibility change (user returns to tab)
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }
  }

  /**
   * Stop periodic sync
   */
  stopPeriodicSync(): void {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }

    if (typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    }
  }

  /**
   * Handle visibility change event
   */
  private handleVisibilityChange = (): void => {
    if (document.visibilityState === 'visible' && this.isAuthenticated && this.pendingState) {
      this.syncNow(this.pendingState);
    }
  };

  /**
   * Request a sync (debounced).
   * Call this whenever state changes.
   */
  requestSync(state: GamificationState): void {
    if (!this.isAuthenticated) return;

    this.pendingState = state;

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      this.syncNow(state);
    }, DEBOUNCE_MS);
  }

  /**
   * Sync progress immediately.
   */
  async syncNow(state: GamificationState): Promise<SyncResult> {
    if (!this.isAuthenticated) {
      return { success: false, error: 'Not authenticated' };
    }

    if (!isFirebaseConfigured()) {
      return { success: false, error: 'Firebase not configured' };
    }

    // Rate limit
    const now = Date.now();
    if (now - this.lastSyncTime < RATE_LIMIT_MS) {
      return { success: false, error: 'Rate limited' };
    }

    this.setStatus('syncing');

    try {
      const functions = getFirebaseFunctions();
      const syncProgress = httpsCallable<SyncProgressRequest, SyncProgressResponse>(
        functions,
        'syncProgress'
      );

      const result = await syncProgress({
        progress: state,
        lastSyncedAt: this.lastSyncedAt,
      });

      this.lastSyncTime = now;
      this.lastSyncedAt = result.data.lastSyncedAt;
      this.pendingState = null;

      if (result.data.merged && result.data.serverProgress) {
        // Server detected a conflict and merged - update local state
        logger.info('Server merged states due to conflict');
        saveState(result.data.serverProgress);
        this.setStatus('success');
        return {
          success: true,
          state: result.data.serverProgress,
          merged: true,
        };
      }

      this.setStatus('success');
      return { success: true, state, merged: false };
    } catch (error) {
      logger.error('Sync failed:', error);
      this.setStatus('error');
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Sync with exponential backoff retry
   */
  async syncWithRetry(state: GamificationState, maxRetries: number = 3): Promise<SyncResult> {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const result = await this.syncNow(state);
      if (result.success) return result;

      // Don't retry on certain errors
      if (
        result.error === 'Not authenticated' ||
        result.error === 'Firebase not configured'
      ) {
        return result;
      }

      // Wait before retry (exponential backoff: 1s, 2s, 4s)
      if (attempt < maxRetries - 1) {
        const delay = 1000 * Math.pow(2, attempt);
        logger.debug(`Sync retry ${attempt + 1}/${maxRetries} in ${delay}ms`);
        await new Promise(r => setTimeout(r, delay));
        // Reset rate limit for retry
        this.lastSyncTime = 0;
      }
    }
    return { success: false, error: 'Sync failed after multiple retries' };
  }
}

// =============================================================================
// SINGLETON
// =============================================================================

let progressSyncManagerInstance: ProgressSyncManager | null = null;

/**
 * Get the singleton ProgressSyncManager instance
 */
export function getProgressSyncManager(): ProgressSyncManager {
  if (!progressSyncManagerInstance) {
    progressSyncManagerInstance = new ProgressSyncManager();
  }
  return progressSyncManagerInstance;
}
