import { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { CourseConfigProvider, type CourseConfig } from '@shared/contexts/CourseConfigContext';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import { ErrorProvider } from '@shared/contexts/ErrorContext';
import { ErrorDisplay } from '@shared/components/ErrorDisplay';
import { LoadingSpinner } from '@shared/components/common/LoadingSpinner';
import { Header, Sidebar } from '@shared/components/layout';
import { AchievementToastContainer } from '@/components/gamification';
import { COURSE_ID, COURSE_NAME, COURSE_ICON, HUB_URL, FEATURES } from '@/config';
import { curriculum } from '@/data/curriculum';

// Eagerly load Home since it's the landing page
import Home from '@/pages/Home';

// Lazy load other pages - they're only needed when navigating to them
const Leaderboard = lazy(() => import('@/pages/Leaderboard'));
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));
const SectionQuizPage = lazy(() => import('@/pages/SectionQuizPage'));
const TranscriptsIndex = lazy(() => import('@/pages/TranscriptsIndex'));

// =============================================================================
// SECTION CONFIGURATION
// =============================================================================
// Sections are auto-discovered using Vite's glob imports. Just add Section files
// to src/pages/sections/ following the naming convention Section00.tsx, Section01.tsx, etc.
// =============================================================================
import { createSectionLoadersFromGlob, type SectionLoaders } from '@shared/routing/sectionLoader';

const sectionModules = import.meta.glob('./pages/sections/Section*.tsx');
const sectionLoaders: SectionLoaders = createSectionLoadersFromGlob(sectionModules);

// Create lazy components from loaders
const sectionComponents: Record<number, React.LazyExoticComponent<React.ComponentType>> = {};
for (const [id, loader] of Object.entries(sectionLoaders)) {
  sectionComponents[Number(id)] = lazy(loader);
}

// Course configuration for shared layout components
const courseConfig: CourseConfig = {
  id: COURSE_ID,
  name: COURSE_NAME,
  icon: COURSE_ICON,
  hubUrl: HUB_URL,
  features: FEATURES,
  curriculum: curriculum.map((part) => ({
    id: part.id,
    title: part.title,
    sections: part.sections.map((section) => ({
      id: section.id,
      title: section.title,
    })),
  })),
};

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

// TranscriptRouter - displays transcript metadata with link to source
import { TranscriptLayout } from '@/components/layout';
import { getTranscriptById } from '@/data/transcripts';

function TranscriptRouter() {
  const { id } = useParams<{ id: string }>();
  const transcript = getTranscriptById(id || '');

  if (!transcript) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-100 mb-4">Transcript Not Found</h1>
          <p className="text-dark-400">This transcript does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <TranscriptLayout transcriptId={id || ''}>
      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h2 className="text-xl font-semibold text-dark-100 mb-4">About This Transcript</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            {transcript.description}
          </p>
          <p className="text-dark-400 text-sm">
            This is a curated summary of the original content. For the full discussion,
            please visit the original source linked above.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <h3 className="text-lg font-semibold text-amber-400 mb-3">Key Topics</h3>
          <ul className="space-y-2">
            {transcript.topics.map((topic, idx) => (
              <li key={idx} className="flex items-center gap-2 text-dark-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TranscriptLayout>
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

          {/* Dynamic section routes - lazy loaded via SectionRouter */}
          <Route path="/section/:id" element={<SectionRouter />} />

          {/* Transcript routes */}
          <Route
            path="/transcripts"
            element={
              <Suspense fallback={<LoadingSpinner message="Loading transcripts..." />}>
                <TranscriptsIndex />
              </Suspense>
            }
          />
          <Route
            path="/transcript/:id"
            element={
              <Suspense fallback={<LoadingSpinner message="Loading transcript..." />}>
                <TranscriptRouter />
              </Suspense>
            }
          />

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
      {FEATURES.gamification && <AchievementToastContainer />}
    </>
  );
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
