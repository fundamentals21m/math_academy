---
description: Add transcripts feature to any Math Academy course, replicating the secp256k1 pattern
---

# Add Transcripts Feature

Add the Transcripts feature to an existing Math Academy course by searching btctranscripts.com for relevant content and creating all necessary files.

## Arguments: $ARGUMENTS

Parse the arguments:
- First argument: `course-id` (required) - The target course (e.g., `calc1`, `linalg`, `coding-theory`)
- `--search-terms "term1, term2"` - Optional custom search terms for btctranscripts.com

## Reference Implementation

All files are modeled on the secp256k1 transcripts implementation:
- `secp256k1/src/data/transcripts.ts`
- `secp256k1/src/pages/TranscriptsIndex.tsx`
- `secp256k1/src/pages/transcripts/*.tsx`
- `secp256k1/src/components/layout/TranscriptLayout.tsx`

## Workflow

### Phase 1: Discovery & Setup

1. **Determine course directory:**
   ```bash
   ls -d /Users/brianhirschfield/Claude/math_academy/<course-id>-course 2>/dev/null || \
   ls -d /Users/brianhirschfield/Claude/math_academy/<course-id> 2>/dev/null
   ```
   Set `COURSE_DIR` to the found directory. Error if not found.

2. **Read existing course config:**
   - Read `COURSE_DIR/src/config/course.ts` to understand the course topic
   - Extract COURSE_ID, COURSE_NAME for context

3. **Search btctranscripts.com:**
   - Use WebFetch to search: `https://btctranscripts.com/search?query=<search-terms>`
   - If no `--search-terms` provided, derive from course name/topic
   - Parse search results to get transcript list

4. **Present findings to user:**
   Show discovered transcripts with title, source, date, URL. Ask user to:
   - Confirm selections (select/deselect individual transcripts)
   - Add additional transcript URLs manually
   - Proceed when satisfied with selection

### Phase 2: Create Infrastructure Files

#### 2.1 Create `src/data/transcripts.ts`

Template (adapt from secp256k1):
```typescript
// =============================================================================
// TRANSCRIPT METADATA
// =============================================================================
// Metadata for podcast and conference transcripts related to [COURSE_TOPIC].
// =============================================================================

export interface Speaker {
  name: string;
  role?: string;
}

export interface Transcript {
  id: string;
  title: string;
  source: string;
  date: string;
  speakers: Speaker[];
  topics: string[];
  sourceUrl: string;
  duration?: string;
  description: string;
}

export const transcripts: Transcript[] = [
  // Generated from user selections
  {
    id: 'transcript-id',
    title: 'Transcript Title',
    source: 'Source Name',
    date: 'YYYY-MM-DD',
    speakers: [
      { name: 'Speaker Name', role: 'Role' },
    ],
    topics: ['Topic1', 'Topic2'],
    sourceUrl: 'https://btctranscripts.com/...',
    duration: '~1h',
    description: 'Description of the transcript content.',
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getTranscriptById(id: string): Transcript | undefined {
  return transcripts.find(t => t.id === id);
}

export function getTranscriptsByTopic(topic: string): Transcript[] {
  return transcripts.filter(t =>
    t.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
  );
}

export function getTranscriptsBySpeaker(speakerName: string): Transcript[] {
  return transcripts.filter(t =>
    t.speakers.some(s => s.name.toLowerCase().includes(speakerName.toLowerCase()))
  );
}

export function getAllTopics(): string[] {
  const topics = new Set<string>();
  transcripts.forEach(t => t.topics.forEach(topic => topics.add(topic)));
  return Array.from(topics).sort();
}

export function getAllSpeakers(): Speaker[] {
  const speakerMap = new Map<string, Speaker>();
  transcripts.forEach(t => {
    t.speakers.forEach(s => {
      if (!speakerMap.has(s.name)) {
        speakerMap.set(s.name, s);
      }
    });
  });
  return Array.from(speakerMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getTranscriptIndex(id: string): number {
  return transcripts.findIndex(t => t.id === id);
}

export function getAdjacentTranscripts(id: string): { prev: Transcript | null; next: Transcript | null } {
  const index = getTranscriptIndex(id);
  return {
    prev: index > 0 ? transcripts[index - 1] : null,
    next: index < transcripts.length - 1 ? transcripts[index + 1] : null,
  };
}
```

#### 2.2 Create `src/pages/TranscriptsIndex.tsx`

Copy from secp256k1 and adapt:
- Update description text for course topic
- File location: `secp256k1/src/pages/TranscriptsIndex.tsx`

#### 2.3 Create `src/components/layout/TranscriptLayout.tsx`

Copy directly from secp256k1 (reusable as-is):
- File location: `secp256k1/src/components/layout/TranscriptLayout.tsx`

#### 2.4 Update `src/components/layout/index.ts`

Add TranscriptLayout export:
```typescript
export { TranscriptLayout } from './TranscriptLayout';
```

### Phase 3: Update Existing Files

#### 3.1 Update `src/config/course.ts`

Add transcripts feature flag:
```typescript
export const FEATURES = {
  // existing features...
  transcripts: true,
};
```

Also add to LINKS if present:
```typescript
export const LINKS = {
  // existing links...
  transcripts: `${BASE_PATH}#/transcripts`,
};
```

#### 3.2 Update `src/App.tsx`

Add at the top (after other lazy imports):
```typescript
const TranscriptsIndex = lazy(() => import('@/pages/TranscriptsIndex'));
```

Add transcript module glob (after section modules):
```typescript
// Lazy load transcript pages
const transcriptModules = import.meta.glob('./pages/transcripts/*.tsx', { eager: false });
const transcriptLoaders: Record<string, () => Promise<{ default: React.ComponentType }>> = {};
for (const path of Object.keys(transcriptModules)) {
  const filename = path.split('/').pop()?.replace('.tsx', '');
  if (filename && filename !== 'index') {
    const id = filename.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    transcriptLoaders[id] = transcriptModules[path] as () => Promise<{ default: React.ComponentType }>;
  }
}
```

Add transcript ID map:
```typescript
// Map transcript IDs from data to component IDs
const transcriptIdMap: Record<string, string> = {
  // Map each data ID to component ID
  // e.g., 'schnorr-basics': 'schnorr-basics',
};
```

Add TranscriptRouter function (copy from secp256k1):
```typescript
function TranscriptRouter() {
  const { id } = useParams<{ id: string }>();
  const transcriptId = id || '';

  const componentId = transcriptIdMap[transcriptId] || transcriptId;
  const loader = transcriptLoaders[componentId];

  if (loader) {
    const TranscriptComponent = lazy(loader);
    return (
      <Suspense fallback={<LoadingSpinner message="Loading transcript..." />}>
        <TranscriptComponent />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-800 flex items-center justify-center">
          <span className="text-3xl">🎙️</span>
        </div>
        <h1 className="text-2xl font-bold text-dark-100 mb-4">Transcript Coming Soon</h1>
        <p className="text-dark-400 mb-6">
          This transcript summary is being prepared. Check back soon for the full educational content.
        </p>
        <a
          href="#/transcripts"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Transcripts
        </a>
      </div>
    </div>
  );
}
```

Add routes inside AppContent Routes:
```typescript
{FEATURES.transcripts && (
  <>
    <Route
      path="/transcripts"
      element={
        <Suspense fallback={<LoadingSpinner message="Loading transcripts..." />}>
          <TranscriptsIndex />
        </Suspense>
      }
    />
    <Route path="/transcript/:id" element={<TranscriptRouter />} />
  </>
)}
```

#### 3.3 Update Sidebar (CRITICAL - CHECK FOR LOCAL OVERRIDE)

**IMPORTANT**: Many courses have local Sidebar overrides that DON'T include transcripts support.

**Step 1**: Check if local Sidebar exists:
```bash
ls /Users/brianhirschfield/Claude/math_academy/<COURSE_DIR>/src/components/layout/Sidebar.tsx
```

**If local Sidebar EXISTS** (this is common!):
- The local Sidebar overrides the shared one
- You MUST add transcripts support to the local file
- Search for `FEATURES.interactiveModules` or `FEATURES.theoremIndex` to find where to add

**If NO local Sidebar** (uses `@shared/components/layout`):
- The shared Sidebar already supports FEATURES.transcripts
- No changes needed (just enabling the feature flag is sufficient)

**For local Sidebars, add Transcripts link in Reference section:**
```typescript
{FEATURES.transcripts && (
  <li>
    <NavLink
      to="/transcripts"
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
          isActive
            ? 'bg-primary-500/10 text-primary-400'
            : 'text-dark-300 hover:bg-dark-800 hover:text-dark-100'
        }`
      }
    >
      <span className="text-lg">🎙️</span>
      Transcripts
    </NavLink>
  </li>
)}
```

### Phase 4: Create Transcript Pages

For each selected transcript:

1. **Fetch transcript content** from btctranscripts.com using WebFetch
2. **Generate educational summary page** with:
   - Key Takeaways (Callout type="success")
   - Topic sections with Definition/Example blocks
   - Speaker quotes (blockquote styling)
   - Related course sections

3. **Create page file** at `src/pages/transcripts/<TranscriptName>.tsx`:

Template:
```typescript
import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function TranscriptName() {
  return (
    <TranscriptLayout transcriptId="transcript-id">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Key point 1</li>
          <li>Key point 2</li>
          <li>Key point 3</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Section Title</h3>

      <p className="mb-4">
        Introductory paragraph about this section of the transcript...
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Direct quote from the speaker..."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Speaker Name</cite>
      </blockquote>

      <Definition title="Concept Name">
        <p>
          Definition or explanation of an important concept from the transcript.
        </p>
      </Definition>

      <Example title="Example Title">
        <p>Concrete example illustrating the concept.</p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/N"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section N: Section Title
          </p>
          <p className="text-sm text-dark-500">Brief description</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
```

4. **Create `src/pages/transcripts/index.ts`**:
```typescript
// Transcript page exports
export { default as TranscriptOne } from './TranscriptOne';
export { default as TranscriptTwo } from './TranscriptTwo';
// ... all transcript pages
```

5. **Update transcriptIdMap** in App.tsx with all transcript ID mappings

### Phase 5: Build & Deploy

**CRITICAL**: Use the deployment script that enforces hub deployment:

```bash
./scripts/deploy-with-hub.sh <course-id>
```

This script:
1. Builds the course
2. Copies to deploy directory
3. Deploys course to Vercel
4. **Deploys the HUB to Vercel** (mandatory)
5. Verifies hub returns HTTP 200

**If the script is unavailable, deploy manually but YOU MUST DEPLOY THE HUB:**

1. **Build the course:**
   ```bash
   cd /Users/brianhirschfield/Claude/math_academy/<COURSE_DIR>
   pnpm build
   ```

   If build fails, fix errors and retry. Do not proceed to deploy until build succeeds.

2. **Copy to deploy directory:**
   ```bash
   # Clear old assets
   rm -rf /Users/brianhirschfield/Claude/math_academy/<course-id>-deploy/assets
   rm -f /Users/brianhirschfield/Claude/math_academy/<course-id>-deploy/*.html

   # Copy new build
   cp -r /Users/brianhirschfield/Claude/math_academy/<COURSE_DIR>/dist/* \
     /Users/brianhirschfield/Claude/math_academy/<course-id>-deploy/
   ```

3. **Deploy course to Vercel:**
   ```bash
   cd /Users/brianhirschfield/Claude/math_academy/<course-id>-deploy
   npx vercel --prod
   ```

4. **DEPLOY THE HUB (MANDATORY - DO NOT SKIP):**
   ```bash
   cd /Users/brianhirschfield/Claude/math_academy
   npx vercel --prod
   ```

5. **Verify hub is live:**
   ```bash
   curl -s -o /dev/null -w "%{http_code}" https://mathacademy-cyan.vercel.app
   # Must return 200
   ```

**DO NOT report "deployed" until BOTH the course AND the hub are verified live.**

## Verification Checklist

Before considering complete, verify:

- [ ] `pnpm build` succeeds in course directory
- [ ] `/transcripts` route loads and shows transcript list
- [ ] Individual transcript pages render correctly
- [ ] **Sidebar shows Transcripts link** (check local Sidebar if exists!)
- [ ] Deploy directory updated with new build
- [ ] Course deployed to Vercel (`npx vercel --prod` in deploy dir)
- [ ] **HUB deployed to Vercel** (`npx vercel --prod` in root dir)
- [ ] **Hub verified live** (https://mathacademy-cyan.vercel.app returns 200)

## Failure History (DO NOT REPEAT)

- 2026-01-23: Bips course transcripts were added but didn't appear in sidebar because:
  1. Local Sidebar.tsx existed but wasn't updated (transcripts link missing)
  2. Hub was not deployed after course deployment (3 times!)
  This skill was updated to mandate both checks.

## Error Handling

- **Course directory not found**: Error with message listing available courses
- **No transcripts found on btctranscripts.com**: Ask user for alternative search terms or manual URLs
- **Build fails**: Show errors, do not proceed to deploy
- **Deploy directory missing**: Create it with `mkdir -p <course-id>-deploy`

## Example Usage

```
/add-transcripts coding-theory
```

```
/add-transcripts linalg --search-terms "linear algebra, matrices, eigenvalues"
```
