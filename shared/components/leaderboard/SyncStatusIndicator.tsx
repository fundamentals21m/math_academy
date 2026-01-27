/**
 * SyncStatusIndicator - Shows the current sync status
 */

import { useState, useEffect, useCallback } from 'react';
import { getSyncManager } from '../../leaderboard/syncManager';
import type { SyncState } from '../../leaderboard/types';

interface SyncStatusIndicatorProps {
  className?: string;
  showRetry?: boolean;
}

export function SyncStatusIndicator({ className = '', showRetry = true }: SyncStatusIndicatorProps) {
  const [syncState, setSyncState] = useState<SyncState>({ status: 'idle', lastSyncedAt: null, error: null });

  useEffect(() => {
    const syncManager = getSyncManager();
    const unsubscribe = syncManager.onStatusChange(setSyncState);
    return unsubscribe;
  }, []);

  const handleRetry = useCallback(() => {
    const syncManager = getSyncManager();
    syncManager.syncWithRetry();
  }, []);

  const formatLastSynced = (date: Date | null): string => {
    if (!date) return 'Never';
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);

    if (diffSec < 10) return 'Just now';
    if (diffSec < 60) return `${diffSec}s ago`;
    if (diffMin < 60) return `${diffMin}m ago`;
    return date.toLocaleTimeString();
  };

  if (syncState.status === 'idle' && !syncState.lastSyncedAt) {
    return null; // Don't show anything if never synced and idle
  }

  return (
    <div className={`flex items-center gap-2 text-xs ${className}`}>
      {syncState.status === 'syncing' && (
        <>
          <svg className="w-3.5 h-3.5 animate-spin text-primary-400" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span className="text-dark-400">Syncing...</span>
        </>
      )}

      {syncState.status === 'success' && (
        <>
          <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-dark-400">
            Synced {formatLastSynced(syncState.lastSyncedAt)}
          </span>
        </>
      )}

      {syncState.status === 'error' && (
        <>
          <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-red-400">Sync failed</span>
          {showRetry && (
            <button
              onClick={handleRetry}
              className="text-primary-400 hover:text-primary-300 underline"
            >
              Retry
            </button>
          )}
        </>
      )}

      {syncState.status === 'idle' && syncState.lastSyncedAt && (
        <>
          <svg className="w-3.5 h-3.5 text-dark-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          <span className="text-dark-500">
            Last synced {formatLastSynced(syncState.lastSyncedAt)}
          </span>
        </>
      )}
    </div>
  );
}
