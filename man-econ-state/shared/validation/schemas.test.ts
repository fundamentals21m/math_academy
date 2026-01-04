/**
 * @vitest-environment node
 */
import { describe, it, expect } from 'vitest';
import {
  STORAGE_KEY_SCHEMA,
  PUBKEY_HEX_SCHEMA,
  NPUB_SCHEMA,
  DISPLAY_NAME_SCHEMA,
  NIP05_SCHEMA,
  CHALLENGE_SCHEMA,
  SIGNED_EVENT_SCHEMA,
  AUTH_STATE_SCHEMA,
  SECTION_DATA_SCHEMA,
  GAMIFICATION_STATE_SCHEMA,
  FIREBASE_RESPONSE_SCHEMA,
  LEADERBOARD_USER_SCHEMA,
  ADMIN_LOG_SCHEMA,
  sanitizeString,
  sanitizeHtml,
  sanitizeNumber,
  sanitizeUrl,
  validateStorageKey,
  validatePubkeyHex,
  validateNpub,
  validateDisplayName,
  validateNip05,
  validateLocalStorageData,
  validateSectionData,
  validateAuthState,
} from './schemas';

// =================================================================
// SCHEMA TESTS
// =================================================================

describe('STORAGE_KEY_SCHEMA', () => {
  it('should accept valid storage keys', () => {
    expect(STORAGE_KEY_SCHEMA.safeParse('section-1').success).toBe(true);
    expect(STORAGE_KEY_SCHEMA.safeParse('a').success).toBe(true);
    expect(STORAGE_KEY_SCHEMA.safeParse('a'.repeat(100)).success).toBe(true);
  });

  it('should reject invalid storage keys', () => {
    expect(STORAGE_KEY_SCHEMA.safeParse('').success).toBe(false);
    expect(STORAGE_KEY_SCHEMA.safeParse('a'.repeat(101)).success).toBe(false);
  });
});

describe('PUBKEY_HEX_SCHEMA', () => {
  it('should accept valid hex pubkeys', () => {
    const validHex = 'a'.repeat(64);
    expect(PUBKEY_HEX_SCHEMA.safeParse(validHex).success).toBe(true);
    expect(PUBKEY_HEX_SCHEMA.safeParse('0123456789abcdefABCDEF'.padEnd(64, '0')).success).toBe(true);
  });

  it('should reject invalid hex pubkeys', () => {
    expect(PUBKEY_HEX_SCHEMA.safeParse('a'.repeat(63)).success).toBe(false);
    expect(PUBKEY_HEX_SCHEMA.safeParse('a'.repeat(65)).success).toBe(false);
    expect(PUBKEY_HEX_SCHEMA.safeParse('g'.repeat(64)).success).toBe(false);
    expect(PUBKEY_HEX_SCHEMA.safeParse('').success).toBe(false);
  });
});

describe('NPUB_SCHEMA', () => {
  it('should accept valid npubs', () => {
    // Valid bech32 npub format
    expect(NPUB_SCHEMA.safeParse('npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3kksn9').success).toBe(true);
  });

  it('should reject invalid npubs', () => {
    expect(NPUB_SCHEMA.safeParse('npub').success).toBe(false);
    expect(NPUB_SCHEMA.safeParse('npub1').success).toBe(false);
    expect(NPUB_SCHEMA.safeParse('nsec1abcd').success).toBe(false);
    expect(NPUB_SCHEMA.safeParse('').success).toBe(false);
  });
});

describe('DISPLAY_NAME_SCHEMA', () => {
  it('should accept valid display names', () => {
    expect(DISPLAY_NAME_SCHEMA.safeParse('John').success).toBe(true);
    expect(DISPLAY_NAME_SCHEMA.safeParse('John Doe').success).toBe(true);
    expect(DISPLAY_NAME_SCHEMA.safeParse("O'Brien").success).toBe(true);
    expect(DISPLAY_NAME_SCHEMA.safeParse('Dr. Smith').success).toBe(true);
    expect(DISPLAY_NAME_SCHEMA.safeParse('Mary-Jane').success).toBe(true);
    expect(DISPLAY_NAME_SCHEMA.safeParse('User123').success).toBe(true);
  });

  it('should reject invalid display names', () => {
    expect(DISPLAY_NAME_SCHEMA.safeParse('').success).toBe(false);
    expect(DISPLAY_NAME_SCHEMA.safeParse('a'.repeat(51)).success).toBe(false);
    expect(DISPLAY_NAME_SCHEMA.safeParse('<script>').success).toBe(false);
    expect(DISPLAY_NAME_SCHEMA.safeParse('user@domain').success).toBe(false);
    expect(DISPLAY_NAME_SCHEMA.safeParse('user!name').success).toBe(false);
  });
});

describe('NIP05_SCHEMA', () => {
  it('should accept valid NIP-05 identifiers', () => {
    expect(NIP05_SCHEMA.safeParse('user@domain.com').success).toBe(true);
    expect(NIP05_SCHEMA.safeParse('user.name@sub.domain.org').success).toBe(true);
    expect(NIP05_SCHEMA.safeParse('_@domain.io').success).toBe(true);
    expect(NIP05_SCHEMA.safeParse('username').success).toBe(true);
  });

  it('should reject invalid NIP-05 identifiers', () => {
    expect(NIP05_SCHEMA.safeParse('').success).toBe(false);
    expect(NIP05_SCHEMA.safeParse('user@').success).toBe(false);
    expect(NIP05_SCHEMA.safeParse('@domain.com').success).toBe(false);
    expect(NIP05_SCHEMA.safeParse('user@domain').success).toBe(false);
  });
});

describe('CHALLENGE_SCHEMA', () => {
  it('should accept valid challenges', () => {
    const validChallenge = {
      challenge: 'random-challenge-string-here',
      expiresAt: Date.now() + 60000,
    };
    expect(CHALLENGE_SCHEMA.safeParse(validChallenge).success).toBe(true);
  });

  it('should reject invalid challenges', () => {
    expect(CHALLENGE_SCHEMA.safeParse({ challenge: 'short', expiresAt: 123 }).success).toBe(false);
    expect(CHALLENGE_SCHEMA.safeParse({ challenge: 'valid-challenge', expiresAt: -1 }).success).toBe(false);
    expect(CHALLENGE_SCHEMA.safeParse({ challenge: 'valid-challenge' }).success).toBe(false);
    expect(CHALLENGE_SCHEMA.safeParse({}).success).toBe(false);
  });
});

describe('SIGNED_EVENT_SCHEMA', () => {
  it('should accept valid signed events', () => {
    const validEvent = {
      kind: 1,
      created_at: Math.floor(Date.now() / 1000),
      tags: [['e', 'event-id'], ['p', 'pubkey']],
      content: 'Hello world',
    };
    expect(SIGNED_EVENT_SCHEMA.safeParse(validEvent).success).toBe(true);
  });

  it('should reject invalid signed events', () => {
    expect(SIGNED_EVENT_SCHEMA.safeParse({ kind: 'invalid' }).success).toBe(false);
    expect(SIGNED_EVENT_SCHEMA.safeParse({ kind: 1, created_at: -1 }).success).toBe(false);
    expect(SIGNED_EVENT_SCHEMA.safeParse({}).success).toBe(false);
  });
});

describe('AUTH_STATE_SCHEMA', () => {
  it('should accept valid auth states', () => {
    const validState = {
      npub: 'npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3kksn9',
      displayName: 'John Doe',
    };
    expect(AUTH_STATE_SCHEMA.safeParse(validState).success).toBe(true);
    expect(AUTH_STATE_SCHEMA.safeParse({ ...validState, displayName: null }).success).toBe(true);
  });

  it('should reject invalid auth states', () => {
    expect(AUTH_STATE_SCHEMA.safeParse({ npub: 'invalid' }).success).toBe(false);
    expect(AUTH_STATE_SCHEMA.safeParse({}).success).toBe(false);
  });
});

describe('SECTION_DATA_SCHEMA', () => {
  it('should accept valid section data', () => {
    const validSection = {
      visitedAt: '2024-01-01T00:00:00Z',
      completedAt: '2024-01-02T00:00:00Z',
      quizAttempts: [
        { xpEarned: 100, score: 85, difficulty: 'medium' as const },
      ],
      masteryLevel: 'familiar' as const,
    };
    expect(SECTION_DATA_SCHEMA.safeParse(validSection).success).toBe(true);
    expect(SECTION_DATA_SCHEMA.safeParse({}).success).toBe(true);
  });

  it('should reject invalid section data', () => {
    expect(SECTION_DATA_SCHEMA.safeParse({ masteryLevel: 'invalid' }).success).toBe(false);
    expect(SECTION_DATA_SCHEMA.safeParse({ quizAttempts: 'invalid' }).success).toBe(false);
  });
});

describe('GAMIFICATION_STATE_SCHEMA', () => {
  it('should accept valid gamification state', () => {
    const validState = {
      user: {
        totalXP: 1000,
        level: 5,
        sectionsCompleted: ['section-1', 'section-2'],
      },
      sections: {
        'section-1': { masteryLevel: 'mastered' as const },
      },
      dailyGoals: {
        lastResetDate: '2024-01-01',
        currentStreak: 5,
        xpEarned: 200,
        xpGoal: 300,
      },
      lastUpdated: Date.now(),
    };
    expect(GAMIFICATION_STATE_SCHEMA.safeParse(validState).success).toBe(true);
  });

  it('should reject invalid gamification state', () => {
    expect(GAMIFICATION_STATE_SCHEMA.safeParse({}).success).toBe(false);
    expect(GAMIFICATION_STATE_SCHEMA.safeParse({ user: {} }).success).toBe(false);
  });
});

describe('FIREBASE_RESPONSE_SCHEMA', () => {
  it('should accept valid firebase responses', () => {
    expect(FIREBASE_RESPONSE_SCHEMA.safeParse({ success: true, totalXP: 100 }).success).toBe(true);
    expect(FIREBASE_RESPONSE_SCHEMA.safeParse({ success: false, totalXP: 0 }).success).toBe(true);
  });

  it('should reject invalid firebase responses', () => {
    expect(FIREBASE_RESPONSE_SCHEMA.safeParse({ success: true }).success).toBe(false);
    expect(FIREBASE_RESPONSE_SCHEMA.safeParse({ totalXP: 100 }).success).toBe(false);
  });
});

describe('LEADERBOARD_USER_SCHEMA', () => {
  it('should accept valid leaderboard users', () => {
    const validUser = {
      npub: 'npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3kksn9',
      displayName: 'John Doe',
      xp: 1500,
      lastSync: '2024-01-01T00:00:00Z',
    };
    expect(LEADERBOARD_USER_SCHEMA.safeParse(validUser).success).toBe(true);
    expect(LEADERBOARD_USER_SCHEMA.safeParse({ ...validUser, displayName: null }).success).toBe(true);
  });
});

describe('ADMIN_LOG_SCHEMA', () => {
  it('should accept valid admin logs', () => {
    const validLog = {
      timestamp: '2024-01-01T00:00:00Z',
      action: 'ban_user',
      targetNpub: 'npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3kksn9',
      performedBy: 'admin@example.com',
      details: { reason: 'spam' },
    };
    expect(ADMIN_LOG_SCHEMA.safeParse(validLog).success).toBe(true);
    expect(ADMIN_LOG_SCHEMA.safeParse({ ...validLog, targetNpub: null, details: null }).success).toBe(true);
  });
});

// =================================================================
// SANITIZATION TESTS
// =================================================================

describe('sanitizeString', () => {
  it('should remove < and > characters', () => {
    expect(sanitizeString('<script>alert(1)</script>')).toBe('scriptalert(1)/script');
    expect(sanitizeString('Hello <World>')).toBe('Hello World');
  });

  it('should trim whitespace', () => {
    expect(sanitizeString('  hello  ')).toBe('hello');
  });

  it('should truncate to maxLength', () => {
    expect(sanitizeString('hello world', 5)).toBe('hello');
    expect(sanitizeString('hi', 100)).toBe('hi');
  });

  it('should handle empty strings', () => {
    expect(sanitizeString('')).toBe('');
  });
});

describe('sanitizeHtml', () => {
  it('should escape HTML special characters', () => {
    expect(sanitizeHtml('<script>')).toBe('&lt;script&gt;');
    expect(sanitizeHtml('"quoted"')).toBe('&quot;quoted&quot;');
    expect(sanitizeHtml("'apostrophe'")).toBe('&#x27;apostrophe&#x27;');
  });

  it('should truncate to 1000 characters', () => {
    const longString = 'a'.repeat(1500);
    expect(sanitizeHtml(longString).length).toBe(1000);
  });

  it('should handle complex HTML', () => {
    const malicious = '<img src="x" onerror="alert(1)">';
    const result = sanitizeHtml(malicious);
    expect(result).not.toContain('<');
    expect(result).not.toContain('>');
    expect(result).toContain('&lt;');
    expect(result).toContain('&gt;');
  });
});

describe('sanitizeNumber', () => {
  it('should return the number if valid and in range', () => {
    expect(sanitizeNumber(50, 0, 100)).toBe(50);
    expect(sanitizeNumber(0, 0, 100)).toBe(0);
    expect(sanitizeNumber(100, 0, 100)).toBe(100);
  });

  it('should clamp to min if below range', () => {
    expect(sanitizeNumber(-10, 0, 100)).toBe(0);
    expect(sanitizeNumber(-1, 5, 10)).toBe(5);
  });

  it('should clamp to max if above range', () => {
    expect(sanitizeNumber(150, 0, 100)).toBe(100);
    expect(sanitizeNumber(1000, 0, 50)).toBe(50);
  });

  it('should parse string numbers', () => {
    expect(sanitizeNumber('50', 0, 100)).toBe(50);
    expect(sanitizeNumber('150', 0, 100)).toBe(100);
  });

  it('should return min for invalid input', () => {
    expect(sanitizeNumber('not-a-number', 0, 100)).toBe(0);
    expect(sanitizeNumber(null, 10, 100)).toBe(10);
    expect(sanitizeNumber(undefined, 5, 100)).toBe(5);
    expect(sanitizeNumber({}, 0, 100)).toBe(0);
    expect(sanitizeNumber([], 0, 100)).toBe(0);
    expect(sanitizeNumber(NaN, 0, 100)).toBe(0);
  });
});

describe('sanitizeUrl', () => {
  it('should accept valid http/https URLs', () => {
    expect(sanitizeUrl('https://example.com')).toBe('https://example.com/');
    expect(sanitizeUrl('http://example.com/path?query=1')).toBe('http://example.com/path?query=1');
    expect(sanitizeUrl('https://sub.domain.org:8080/path')).toBe('https://sub.domain.org:8080/path');
  });

  it('should reject javascript: URLs', () => {
    expect(sanitizeUrl('javascript:alert(1)')).toBeNull();
    expect(sanitizeUrl('JAVASCRIPT:alert(1)')).toBeNull();
  });

  it('should reject data: URLs', () => {
    expect(sanitizeUrl('data:text/html,<script>alert(1)</script>')).toBeNull();
  });

  it('should reject file: URLs', () => {
    expect(sanitizeUrl('file:///etc/passwd')).toBeNull();
  });

  it('should reject invalid URLs', () => {
    expect(sanitizeUrl('not-a-url')).toBeNull();
    expect(sanitizeUrl('')).toBeNull();
    expect(sanitizeUrl('://missing-protocol.com')).toBeNull();
  });
});

// =================================================================
// VALIDATION HELPER TESTS
// =================================================================

describe('validateStorageKey', () => {
  it('should return true for valid keys', () => {
    expect(validateStorageKey('section-1')).toBe(true);
    expect(validateStorageKey('a')).toBe(true);
  });

  it('should return false for invalid keys', () => {
    expect(validateStorageKey('')).toBe(false);
    expect(validateStorageKey('a'.repeat(101))).toBe(false);
  });
});

describe('validatePubkeyHex', () => {
  it('should return valid for correct hex pubkeys', () => {
    const result = validatePubkeyHex('a'.repeat(64));
    expect(result.valid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('should return error for invalid hex pubkeys', () => {
    const result = validatePubkeyHex('invalid');
    expect(result.valid).toBe(false);
    expect(result.error).toBeDefined();
    expect(result.error).toContain('64 hex characters');
  });
});

describe('validateNpub', () => {
  it('should return valid for correct npubs', () => {
    const result = validateNpub('npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3kksn9');
    expect(result.valid).toBe(true);
  });

  it('should return error for invalid npubs', () => {
    const result = validateNpub('invalid');
    expect(result.valid).toBe(false);
    expect(result.error).toContain('npub1');
  });
});

describe('validateDisplayName', () => {
  it('should return valid for correct names', () => {
    expect(validateDisplayName('John Doe').valid).toBe(true);
    expect(validateDisplayName("O'Brien").valid).toBe(true);
  });

  it('should return specific error for empty name', () => {
    const result = validateDisplayName('');
    expect(result.valid).toBe(false);
    expect(result.error).toContain('required');
  });

  it('should return specific error for too long name', () => {
    const result = validateDisplayName('a'.repeat(51));
    expect(result.valid).toBe(false);
    expect(result.error).toContain('50 characters');
  });

  it('should return error for invalid characters', () => {
    const result = validateDisplayName('<script>');
    expect(result.valid).toBe(false);
    expect(result.error).toContain('invalid characters');
  });
});

describe('validateNip05', () => {
  it('should return valid for correct NIP-05', () => {
    expect(validateNip05('user@domain.com').valid).toBe(true);
  });

  it('should return error for invalid NIP-05', () => {
    const result = validateNip05('invalid@');
    expect(result.valid).toBe(false);
    expect(result.error).toContain('NIP-05');
  });
});

describe('validateLocalStorageData', () => {
  it('should return valid for correct gamification state', () => {
    const validState = {
      user: {
        totalXP: 1000,
        level: 5,
        sectionsCompleted: ['section-1'],
      },
      sections: {},
      dailyGoals: {
        lastResetDate: null,
        currentStreak: 0,
        xpEarned: 0,
        xpGoal: 300,
      },
      lastUpdated: Date.now(),
    };
    const result = validateLocalStorageData(validState);
    expect(result.valid).toBe(true);
  });

  it('should return error for invalid data', () => {
    const result = validateLocalStorageData({ invalid: true });
    expect(result.valid).toBe(false);
    expect(result.error).toBeDefined();
  });

  it('should return error for null', () => {
    const result = validateLocalStorageData(null);
    expect(result.valid).toBe(false);
  });
});

describe('validateSectionData', () => {
  it('should return valid for correct section data', () => {
    const result = validateSectionData({ masteryLevel: 'learning' });
    expect(result.valid).toBe(true);
    expect(result.data).toBeDefined();
  });

  it('should return error for invalid section data', () => {
    const result = validateSectionData({ masteryLevel: 'invalid-level' });
    expect(result.valid).toBe(false);
    expect(result.error).toBeDefined();
  });
});

describe('validateAuthState', () => {
  it('should return valid for correct auth state', () => {
    const result = validateAuthState({
      npub: 'npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3kksn9',
      displayName: 'John',
    });
    expect(result.valid).toBe(true);
    expect(result.data).toBeDefined();
  });

  it('should return error for invalid auth state', () => {
    const result = validateAuthState({ npub: 'invalid' });
    expect(result.valid).toBe(false);
    expect(result.error).toBeDefined();
  });
});
