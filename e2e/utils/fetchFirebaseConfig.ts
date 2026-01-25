/**
 * Firebase Config Fetcher
 *
 * Fetches course configuration directly from Firebase (the source of truth).
 * This ensures e2e tests validate against the actual URLs the hub uses.
 */

export interface FirebaseCourse {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  tags: string[];
  sections: string[];
  totalSections: number;
  progressPrefix: string;
  leaderboardUrl?: string;
  shortName?: string;
  progressGradient?: string;
  order: number;
}

export interface FirebaseSection {
  id: string;
  title: string;
  subtitle: string;
  style: 'featured' | 'beginner' | 'subject';
  order: number;
}

export interface FirebaseCourseConfig {
  courses: FirebaseCourse[];
  sections: FirebaseSection[];
}

// Firebase callable function endpoint
const FIREBASE_FUNCTIONS_URL =
  'https://us-central1-magic-internet-math-96630.cloudfunctions.net/getCourseConfig';

// Cache to avoid repeated calls during test runs
let cachedConfig: FirebaseCourseConfig | null = null;

/**
 * Fetch course config from Firebase using the callable function protocol.
 * This is the source of truth for all course URLs.
 */
export async function fetchFirebaseCourseConfig(): Promise<FirebaseCourseConfig> {
  if (cachedConfig) {
    return cachedConfig;
  }

  const response = await fetch(FIREBASE_FUNCTIONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: {} }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Firebase course config: ${response.status} ${response.statusText}`
    );
  }

  const result = await response.json();

  // Firebase callable functions return { result: { ... } }
  if (!result.result) {
    throw new Error('Invalid Firebase callable response: missing result field');
  }

  cachedConfig = {
    courses: result.result.courses || [],
    sections: result.result.sections || [],
  };

  return cachedConfig;
}

/**
 * Get all courses from Firebase
 */
export async function fetchFirebaseCourses(): Promise<FirebaseCourse[]> {
  const config = await fetchFirebaseCourseConfig();
  return config.courses;
}

/**
 * Get a specific course by ID from Firebase
 */
export async function getFirebaseCourseById(
  courseId: string
): Promise<FirebaseCourse | undefined> {
  const courses = await fetchFirebaseCourses();
  return courses.find((c) => c.id === courseId);
}

/**
 * Clear the cache (useful for testing)
 */
export function clearFirebaseCache(): void {
  cachedConfig = null;
}

/**
 * Resolve a course URL to an absolute URL.
 * Handles both absolute URLs (https://...) and relative hub paths (course-deploy/).
 */
export function resolveFirebaseUrl(url: string): string {
  const HUB_URL = 'https://mathacademy-cyan.vercel.app';

  if (url.startsWith('http')) {
    // Already absolute
    return url.replace(/\/$/, ''); // Remove trailing slash for consistency
  }

  // Relative URL - resolve against hub
  return `${HUB_URL}/${url}`.replace(/\/$/, '');
}
