# ADR-003: Authentication Strategy (Nostr + Firebase)

## Status
Accepted

## Context
Magic Internet Math uses a hybrid auth system:
- **Nostr**: For leaderboard identity and social features
- **Firebase Auth**: For course progress persistence and admin functions

## Decision
Implement a layered authentication approach:

1. **Nostr as Primary Identity**: Users identify via Nostr public key
2. **Firebase as Persistence Layer**: Course progress stored in Firestore
3. **Context-Based Abstraction**: `NostrAuthContext` provides unified interface
4. **Graceful Degradation**: Features work with partial auth

## Consequences

### Positive
- No accounts/passwords required
- Decentralized identity
- Leaderboard can be verified independently
- Firebase provides backup/restore

### Negative
- Two auth systems to maintain
- Nostr requires browser extension or relay access
- Key management responsibility on user

## Implementation Details

### Nostr Auth Flow
```typescript
// Challenge-response authentication
const challenge = await relay.getChallenge(pubkey);
const signature = await window.nostr.signEvent(challenge);
await relay.auth(pubkey, signature);
```

### Context Integration
```typescript
interface AuthState {
  isAuthenticated: boolean;
  pubkey?: string;
  profile?: NostrProfile;
  firebaseUser?: FirebaseUser;
}

function useAuth() {
  const { isAuthenticated, pubkey } = useContext(NostrAuthContext);
  // Can access course progress if authenticated
}
```

## Security Considerations
- Relay trust minimized (encrypted DMs only)
- NIP-07 extension isolation
- Firebase rules enforce pubkey matching
- Audit logging for admin actions

## References
- [NIP-01](https://github.com/nostr-protocol/nips/blob/master/01.md)
- [Firebase Auth](https://firebase.google.com/docs/auth)
