import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import {
  NostrAuthProvider,
  ErrorBoundary,
  ErrorProvider,
  ErrorDisplay,
  LoadingSpinner,
} from '@magic-internet-math/shared';
import { AchievementToastContainer } from '@/components/gamification';
import { FEATURES } from '@/config';

// Eagerly load Home since it's the landing page
import Home from '@/pages/Home';

// Lazy load other pages - only loaded when navigating to them
const Leaderboard = lazy(() => import('@/pages/Leaderboard'));
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));

// Lazy load all section components for code splitting
const sectionComponents: Record<number, React.LazyExoticComponent<React.ComponentType>> = {
  1: lazy(() => import('@/pages/sections/Section01')),
  2: lazy(() => import('@/pages/sections/Section02')),
  3: lazy(() => import('@/pages/sections/Section03')),
  4: lazy(() => import('@/pages/sections/Section04')),
  5: lazy(() => import('@/pages/sections/Section05')),
  6: lazy(() => import('@/pages/sections/Section06')),
  7: lazy(() => import('@/pages/sections/Section07')),
  8: lazy(() => import('@/pages/sections/Section08')),
  9: lazy(() => import('@/pages/sections/Section09')),
  10: lazy(() => import('@/pages/sections/Section10')),
  11: lazy(() => import('@/pages/sections/Section11')),
  12: lazy(() => import('@/pages/sections/Section12')),
  13: lazy(() => import('@/pages/sections/Section13')),
  14: lazy(() => import('@/pages/sections/Section14')),
  15: lazy(() => import('@/pages/sections/Section15')),
};

function SectionRouter() {
  const { id } = useParams<{ id: string }>();
  const sectionId = parseInt(id || '0', 10);
  const SectionComponent = sectionComponents[sectionId];

  if (!SectionComponent) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-100 mb-4">Section Not Found</h1>
          <p className="text-dark-400">Section {id} does not exist or is not yet implemented.</p>
          <a href="/" className="mt-4 inline-block text-primary-400 hover:text-primary-300">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SectionComponent />
    </Suspense>
  );
}

function AppContent() {
  return (
    <>
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

        {/* Dynamic section routes */}
        <Route path="/section/:id" element={<SectionRouter />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Global achievement notifications */}
      {FEATURES.gamification && <AchievementToastContainer />}
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ErrorProvider>
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
        <ErrorDisplay />
      </ErrorProvider>
    </ErrorBoundary>
  );
}
