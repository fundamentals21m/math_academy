import * as admin from 'firebase-admin';

/**
 * Security event types for audit logging
 */
export type SecurityEventType =
  // Authentication events
  | 'auth_challenge_created'
  | 'auth_challenge_rate_limited'
  | 'auth_success'
  | 'auth_failure_invalid_signature'
  | 'auth_failure_expired_challenge'
  | 'auth_failure_challenge_reused'
  | 'auth_failure_challenge_not_found'
  | 'auth_failure_pubkey_mismatch'
  | 'auth_failure_invalid_event_kind'
  | 'auth_failure_timestamp_invalid'
  | 'auth_banned_user_attempt'
  // IP-based rate limiting
  | 'rate_limit_ip_challenge'
  | 'rate_limit_ip_auth_failure'
  // Admin events (already in adminLogs, but unified here too)
  | 'admin_ban_user'
  | 'admin_unban_user'
  | 'admin_reset_scores'
  // Suspicious activity
  | 'suspicious_rapid_requests'
  | 'suspicious_invalid_input';

export type SecurityEventSeverity = 'info' | 'warning' | 'error' | 'critical';

interface SecurityEvent {
  type: SecurityEventType;
  severity: SecurityEventSeverity;
  pubkeyHex?: string;
  npub?: string;
  ipAddress?: string;
  userAgent?: string;
  details?: Record<string, unknown>;
  timestamp: admin.firestore.FieldValue;
}

/**
 * Log a security event to Firestore
 */
export async function logSecurityEvent(
  type: SecurityEventType,
  severity: SecurityEventSeverity,
  details?: {
    pubkeyHex?: string;
    npub?: string;
    ipAddress?: string;
    userAgent?: string;
    metadata?: Record<string, unknown>;
  }
): Promise<void> {
  try {
    const event: SecurityEvent = {
      type,
      severity,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    if (details?.pubkeyHex) event.pubkeyHex = details.pubkeyHex;
    if (details?.npub) event.npub = details.npub;
    if (details?.ipAddress) event.ipAddress = details.ipAddress;
    if (details?.userAgent) event.userAgent = details.userAgent;
    if (details?.metadata) event.details = details.metadata;

    await admin.firestore().collection('securityLogs').add(event);
  } catch (error) {
    // Don't throw - logging should never break the main flow
    console.error('Failed to log security event:', error);
  }
}

/**
 * Get severity level for event type
 */
export function getEventSeverity(type: SecurityEventType): SecurityEventSeverity {
  const severityMap: Record<SecurityEventType, SecurityEventSeverity> = {
    // Info level - normal operations
    'auth_challenge_created': 'info',
    'auth_success': 'info',

    // Warning level - potential issues
    'auth_challenge_rate_limited': 'warning',
    'auth_failure_expired_challenge': 'warning',
    'auth_failure_challenge_not_found': 'warning',
    'auth_failure_timestamp_invalid': 'warning',
    'rate_limit_ip_challenge': 'warning',
    'rate_limit_ip_auth_failure': 'warning',

    // Error level - authentication failures
    'auth_failure_invalid_signature': 'error',
    'auth_failure_challenge_reused': 'error',
    'auth_failure_pubkey_mismatch': 'error',
    'auth_failure_invalid_event_kind': 'error',
    'auth_banned_user_attempt': 'error',

    // Admin actions - info level
    'admin_ban_user': 'info',
    'admin_unban_user': 'info',
    'admin_reset_scores': 'info',

    // Suspicious activity - critical
    'suspicious_rapid_requests': 'critical',
    'suspicious_invalid_input': 'warning',
  };

  return severityMap[type] || 'info';
}

/**
 * Helper to log auth success
 */
export async function logAuthSuccess(npub: string, pubkeyHex: string, ipAddress?: string): Promise<void> {
  await logSecurityEvent('auth_success', 'info', {
    npub,
    pubkeyHex,
    ipAddress,
  });
}

/**
 * Helper to log auth failure
 */
export async function logAuthFailure(
  type: SecurityEventType,
  pubkeyHex?: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  const severity = getEventSeverity(type);
  await logSecurityEvent(type, severity, {
    pubkeyHex,
    metadata,
  });
}

/**
 * Helper to log rate limit hit
 */
export async function logRateLimitHit(pubkeyHex: string, count: number): Promise<void> {
  await logSecurityEvent('auth_challenge_rate_limited', 'warning', {
    pubkeyHex,
    metadata: { challengeCount: count },
  });
}
