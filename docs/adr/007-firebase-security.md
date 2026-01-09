# ADR-007: Firebase Security Model

## Status
Accepted

## Context
Magic Internet Math stores user progress and leaderboard data in Firebase Firestore. Security rules must:
- Prevent unauthorized access
- Enable leaderboard viewing
- Support admin moderation
- Protect user privacy

## Decision
Implement role-based access control (RBAC) with audit logging:

1. **Firestore Rules**: Role-based read/write permissions
2. **Collection Groups**: Query across user subcollections
3. **Audit Logging**: All admin actions logged
4. **Error Monitoring**: Client-side errors logged to `errors` collection

## Consequences

### Positive
- Fine-grained access control
- Transparent admin actions
- Debugging via error logs
- Compliance-friendly

### Negative
- Complex rule logic
- Rule testing required
- TTL management needed

## Implementation Details

### Firestore Rules Structure
```
rules_version = '2';
firestore:
  match /databases/{database}/documents:
    match /users/{userId}:
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    
    match /leaderboard:
      allow read: if true;
      allow write: if isAdmin();
    
    match /adminAuditLog/{document}:
      allow read: if isAdmin();
      allow write: if false;
```

### Admin Functions
```typescript
// Only callable by verified admins
export async function resetUserScores(pubkey: string, adminId: string) {
  // 1. Verify admin
  // 2. Log action to adminAuditLog
  // 3. Reset scores in Firestore
  // 4. Return result
}
```

### TTL Configuration
```typescript
// 90-day retention for audit logs
rules_version = '2';
match /{path=**}/adminAuditLogTTL/{document} {
  allow read, write: if false;
}
```

## Collections

| Collection | Purpose | Access |
|------------|---------|--------|
| `users/{pubkey}` | User progress | Owner read/write |
| `leaderboard` | Score rankings | Public read |
| `adminAuditLog` | Admin actions | Admins read |
| `errors` | Client errors | Admins read |
| `dailyStats` | Aggregated stats | Public read |

## References
- [Firestore Rules](https://firebase.google.com/docs/rules)
- [Firebase Security Best Practices](https://firebase.google.com/docs/rules/rules-language)
