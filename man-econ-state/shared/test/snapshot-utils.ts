import { render } from '@testing-library/react';
import DOMPurify from 'dompurify';

/**
 * Snapshot testing utilities for regression tests
 * Ensures consistent output across test runs by sanitizing dynamic content
 */

/**
 * Snapshot configuration for sanitization
 */
const SANITIZATION_CONFIG = {
  // Remove attributes that change between runs
  REMOVE_ATTRS: ['data-reactroot', 'data-testid', 'data-v-*'],
  
  // Replace dynamic values with placeholders
  REPLACEMENTS: [
    // Random IDs
    { pattern: /id="[^"]*"/g, replacement: 'id="[HASH]"' },
    // Timestamps
    { pattern: /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g, replacement: '[TIMESTAMP]' },
    // UUIDs
    { pattern: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, replacement: '[UUID]' },
  ],
};

/**
 * Sanitize HTML content for snapshot testing
 * Removes dynamic attributes and values to ensure consistent snapshots
 * 
 * @param html - HTML string to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeForSnapshot(html: string): string {
  let sanitized = html;

  // Apply all replacements
  for (const { pattern, replacement } of SANITIZATION_CONFIG.REPLACEMENTS) {
    sanitized = sanitized.replace(pattern, replacement);
  }

  // Remove specific attributes
  for (const attr of SANITIZATION_CONFIG.REMOVE_ATTRS) {
    const regex = new RegExp(`${attr}="[^"]*"`, 'g');
    sanitized = sanitized.replace(regex, '');
  }

  // Use DOMPurify to ensure clean HTML
  sanitized = DOMPurify.sanitize(sanitized, {
    ALLOWED_TAGS: ['*'], // Keep all tags for snapshot
    ALLOWED_ATTR: ['*'], // Keep all attributes except those we removed
  });

  return sanitized;
}

/**
 * Render a component and create a sanitized snapshot
 * 
 * @param component - React component to render
 * @param options - Additional options
 * @returns Rendered container
 */
export function createSnapshot(component: React.ReactNode, options?: {
  wrapper?: React.FC<{ children: React.ReactNode }>;
}) {
  const { container } = render(component, options?.wrapper ? { wrapper: options.wrapper } : undefined);
  
  return {
    container,
    html: sanitizeForSnapshot(container.innerHTML),
    toJSON: () => container.innerHTML,
  };
}

/**
 * Helper to match snapshot with custom matcher
 * 
 * @param component - Component to snapshot
 * @param snapshotName - Optional name for the snapshot
 */
export function expectToMatchSnapshot(
  component: React.ReactNode,
  snapshotName?: string
) {
  const { html } = createSnapshot(component);
  expect(html).toMatchSnapshot(snapshotName);
}

/**
 * Helper to create baseline values
 * Records current value for later regression comparison
 * 
 * @param name - Baseline name
 * @param value - Value to baseline
 */
export function recordBaseline(name: string, value: any) {
  const baseline = {
    name,
    value,
    timestamp: new Date().toISOString(),
  };
  
  // In CI, store as artifact
  if (process.env.CI) {
    console.log(`BASELINE: ${JSON.stringify(baseline)}`);
  }
  
  return baseline;
}

/**
 * Assert value matches baseline
 * 
 * @param name - Baseline name
 * @param actual - Actual value to check
 * @param expected - Expected baseline value
 */
export function expectToMatchBaseline(name: string, actual: any, expected: any) {
  expect(actual).toBe(expected);
  
  recordBaseline(name, actual);
}