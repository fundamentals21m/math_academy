import { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider, useGamification } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import { ErrorProvider } from '@shared/contexts/ErrorContext';
import { ErrorDisplay } from '@shared/components/ErrorDisplay';
import { LoadingSpinner } from '@shared/components/common/LoadingSpinner';

import { FEATURES, COURSE_ID, COURSE_NAME, COURSE_ICON, HUB_URL, YOUTUBE_PLAYLIST_URL } from '@/config';


// Course configuration for shared components
const courseConfig: CourseConfig = {
  id: COURSE_ID,
  name: COURSE_NAME,
  icon: COURSE_ICON,
  hubUrl: HUB_URL,
  features: FEATURES,
  curriculum,
  youtubePlaylistUrl: YOUTUBE_PLAYLIST_URL,
};

// Eagerly load Home since it's the landing page
import Home from '@/pages/Home';

// Lazy load other pages - they're only needed when navigating to them
const Leaderboard = lazy(() => import('@/pages/Leaderboard'));
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));
const SectionQuizPage = lazy(() => import('@/pages/SectionQuizPage'));
const TranscriptsIndex = lazy(() => import('@/pages/TranscriptsIndex'));

// Lazy load transcript pages
const transcriptModules = import.meta.glob('./pages/transcripts/*.tsx', { eager: false });
const transcriptLoaders: Record<string, () => Promise<{ default: React.ComponentType }>> = {};
for (const path of Object.keys(transcriptModules)) {
  // Extract transcript ID from filename (e.g., './pages/transcripts/CreditRatingMethodology.tsx' -> 'credit-rating-methodology')
  const filename = path.split('/').pop()?.replace('.tsx', '');
  if (filename && filename !== 'index') {
    // Convert PascalCase to kebab-case
    const id = filename.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    transcriptLoaders[id] = transcriptModules[path] as () => Promise<{ default: React.ComponentType }>;
  }
}

// Map transcript IDs from data to component IDs
const transcriptIdMap: Record<string, string> = {
  'credit-rating-methodology': 'credit-rating-methodology',
  'sp-global-understands-bitcoin': 'sp-global-understands-bitcoin',
  'bitcoin-miner-valuation': 'bitcoin-miner-valuation',
  'say-it-satoshi': 'say-it-satoshi',
  'everybody-has-a-price': 'everybody-has-a-price',
  'hodling-human-action': 'hodling-human-action',
  'lightning-annuities': 'lightning-annuities',
  'pensions-come-of-age': 'pensions-come-of-age',
  'rock-paper-bitcoin': 'rock-paper-bitcoin',
  'highway-to-hex': 'highway-to-hex',
  'phish-and-bitcoin': 'phish-and-bitcoin',
};

// =============================================================================
// SECTION CONFIGURATION
// =============================================================================
// Sections are auto-discovered using Vite's glob imports. Just add Section files
// to src/pages/sections/ following the naming convention Section00.tsx, Section01.tsx, etc.
// =============================================================================
import { createSectionLoadersFromGlob, type SectionLoaders } from '@shared/routing/sectionLoader';
import { CourseConfigProvider, type CourseConfig } from '@shared/contexts/CourseConfigContext';
import { AchievementToastContainer } from '@shared/components/gamification';
import { Header, Sidebar } from '@shared/components/layout';
import { curriculum } from '@/data/curriculum';

const sectionModules = import.meta.glob('./pages/sections/Section*.tsx');
const sectionLoaders: SectionLoaders = createSectionLoadersFromGlob(sectionModules);

// Create lazy components from loaders
const sectionComponents: Record<number, React.LazyExoticComponent<React.ComponentType>> = {};
for (const [id, loader] of Object.entries(sectionLoaders)) {
  sectionComponents[Number(id)] = lazy(loader);
}

function SectionRouter() {
  const { id } = useParams<{ id: string }>();
  const sectionId = parseInt(id || '0', 10);

  const SectionComponent = sectionComponents[sectionId];

  if (SectionComponent) {
    return (
      <Suspense fallback={<LoadingSpinner message="Loading section..." />}>
        <SectionComponent />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-dark-100 mb-4">Section Not Found</h1>
        <p className="text-dark-400">This section is not yet implemented.</p>
      </div>
    </div>
  );
}

function TranscriptRouter() {
  const { id } = useParams<{ id: string }>();
  const transcriptId = id || '';

  // Map data ID to component ID if mapping exists
  const componentId = transcriptIdMap[transcriptId] || transcriptId;
  const loader = transcriptLoaders[componentId];

  if (loader) {
    const TranscriptComponent = lazy(loader);
    return (
      <Suspense fallback={<LoadingSpinner message="Loading article..." />}>
        <TranscriptComponent />
      </Suspense>
    );
  }

  // For transcripts without dedicated pages, show a placeholder
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-800 flex items-center justify-center">
          <span className="text-3xl">📄</span>
        </div>
        <h1 className="text-2xl font-bold text-dark-100 mb-4">Article Coming Soon</h1>
        <p className="text-dark-400 mb-6">
          This article summary is being prepared. Check back soon for the full educational content.
        </p>
        <a
          href="#/transcripts"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </a>
      </div>
    </div>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950">
      <Header
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="pt-16 lg:pl-72">
        {children}
      </main>
    </div>
  );
}

function AppContent() {
  return (
    <>
      <AppLayout>
        <Routes>
          {/* Core routes */}
          <Route path="/" element={<Home />} />

          {/* Feature-gated routes - lazy loaded */}
          {FEATURES.leaderboard && (
            <Route
              path="/leaderboard"
              element={
                <Suspense fallback={<LoadingSpinner message="Loading leaderboard..." />}>
                  <Leaderboard />
                </Suspense>
              }
            />
          )}
          {FEATURES.theoremIndex && (
            <Route
              path="/theorems"
              element={
                <Suspense fallback={<LoadingSpinner message="Loading theorems..." />}>
                  <Theorems />
                </Suspense>
              }
            />
          )}
          {FEATURES.interactiveModules && (
            <Route
              path="/interactive"
              element={
                <Suspense fallback={<LoadingSpinner message="Loading modules..." />}>
                  <InteractiveModules />
                </Suspense>
              }
            />
          )}
          {FEATURES.transcripts && (
            <>
              <Route
                path="/transcripts"
                element={
                  <Suspense fallback={<LoadingSpinner message="Loading articles..." />}>
                    <TranscriptsIndex />
                  </Suspense>
                }
              />
              <Route path="/transcript/:id" element={<TranscriptRouter />} />
            </>
          )}

          {/* Dynamic section routes - lazy loaded via SectionRouter */}
          <Route path="/section/:id" element={<SectionRouter />} />

          {/* Quiz routes - lazy loaded */}
          <Route
            path="/quiz/section/:id"
            element={
              <Suspense fallback={<LoadingSpinner message="Loading quiz..." />}>
                <SectionQuizPage />
              </Suspense>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>

      {/* Global achievement notifications */}
      {FEATURES.gamification && <AchievementNotifications />}
    </>
  );
}

/** Wrapper that connects shared AchievementToastContainer to the gamification context */
function AchievementNotifications() {
  const { notifications, dismissNotification } = useGamification();
  return <AchievementToastContainer notifications={notifications} onDismiss={dismissNotification} />;
}


export default function App() {
  return (
    <ErrorBoundary>
      <ErrorProvider>
        <CourseConfigProvider config={courseConfig}>
          <HashRouter>
          {FEATURES.nostrAuth ? (
            <NostrAuthProvider>
              {FEATURES.gamification ? (
                <GamificationProvider>
                  <AppContent />
                </GamificationProvider>
              ) : (
                <AppContent />
              )}
            </NostrAuthProvider>
          ) : FEATURES.gamification ? (
            <GamificationProvider>
              <AppContent />
            </GamificationProvider>
          ) : (
            <AppContent />
          )}
        </HashRouter>
        </CourseConfigProvider>
        <ErrorDisplay />
      </ErrorProvider>
    </ErrorBoundary>
  );
}
