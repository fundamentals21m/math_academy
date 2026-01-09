# ADR-004: Offline-First Strategy

## Status
Accepted

## Context
Magic Internet Math courses need to work offline for:
- Progressive Web App (PWA) requirements
- Unreliable internet connections
- Mobile usage patterns

## Decision
Implement offline-first architecture with:

1. **Service Worker Caching**: Static assets cached at install
2. **localStorage Persistence**: Gamification state always available
3. **Optimistic Updates**: UI responds immediately, syncs later
4. **Background Sync**: Queue operations when offline, replay when online

## Consequences

### Positive
- Instant page loads
- Full functionality offline
- Resilient to network issues
- PWA installable

### Negative
- Complex sync logic
- Potential state conflicts
- Storage limits on localStorage

## Implementation Details

### Service Worker Scope
```typescript
// Cache-first for static assets
const CACHE_STRATEGIES = {
  '/assets/': 'cache-first',
  '/fonts/': 'cache-first',
  '/api/': 'network-first',
};
```

### State Persistence
```typescript
// Atomic saves with validation
function persistState(state: GamificationState): void {
  const validated = validateGamificationState(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(validated));
}
```

### Sync Queue
```typescript
interface SyncQueueItem {
  id: string;
  action: QuizCompletion | AchievementUnlock;
  timestamp: number;
  retries: number;
}
```

## References
- [Workbox](https://developer.chrome.com/docs/workbox)
- [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist)
