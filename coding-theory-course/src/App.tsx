import { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import { ErrorProvider } from '@shared/contexts/ErrorContext';
import { ErrorDisplay } from '@shared/components/ErrorDisplay';
import { LoadingSpinner } from '@shared/components/common/LoadingSpinner';
import { AchievementToastContainer } from '@/components/gamification';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { FEATURES } from '@/config';

// Eagerly load Home since it's the landing page
import Home from '@/pages/Home';

// Lazy load other pages - they're only needed when navigating to them
const Leaderboard = lazy(() => import('@/pages/Leaderboard'));
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));
const SectionQuizPage = lazy(() => import('@/pages/SectionQuizPage'));

// =============================================================================
// SECTION CONFIGURATION
// =============================================================================
// Add your section loaders here. Each section is lazy-loaded for optimal
// bundle splitting. Example:
//
// const sectionLoaders: Record<number, () => Promise<{ default: React.ComponentType }>> = {
//   1: () => import('@/pages/sections/Section01'),
//   2: () => import('@/pages/sections/Section02'),
//   3: () => import('@/pages/sections/Section03'),
// };
//
// For a course with many sections, you can generate this programmatically.
// =============================================================================
const sectionLoaders: Record<number, () => Promise<{ default: React.ComponentType }>> = {
  // Chapter 1: Group Codes
  0: () => import('@/pages/sections/Section00'),
  1: () => import('@/pages/sections/Section01'),
  2: () => import('@/pages/sections/Section02'),
  // Chapter 2: Polynomial Codes
  3: () => import('@/pages/sections/Section03'),
  4: () => import('@/pages/sections/Section04'),
  5: () => import('@/pages/sections/Section05'),
  // Chapter 3: Hamming Codes
  6: () => import('@/pages/sections/Section06'),
  7: () => import('@/pages/sections/Section07'),
  // Chapter 4: Finite Fields and BCH Codes
  8: () => import('@/pages/sections/Section08'),
  9: () => import('@/pages/sections/Section09'),
  10: () => import('@/pages/sections/Section10'),
  // Chapter 5: Linear Codes
  11: () => import('@/pages/sections/Section11'),
  12: () => import('@/pages/sections/Section12'),
  13: () => import('@/pages/sections/Section13'),
  14: () => import('@/pages/sections/Section14'),
  // Chapter 6: Cyclic Codes
  15: () => import('@/pages/sections/Section15'),
  16: () => import('@/pages/sections/Section16'),
  17: () => import('@/pages/sections/Section17'),
  18: () => import('@/pages/sections/Section18'),
  19: () => import('@/pages/sections/Section19'),
  20: () => import('@/pages/sections/Section20'),
  21: () => import('@/pages/sections/Section21'),
  22: () => import('@/pages/sections/Section22'),
  // Chapter 7: Factorization of Polynomials
  23: () => import('@/pages/sections/Section23'),
  24: () => import('@/pages/sections/Section24'),
  25: () => import('@/pages/sections/Section25'),
  26: () => import('@/pages/sections/Section26'),
  // Chapter 8: Quadratic Residue Codes
  27: () => import('@/pages/sections/Section27'),
  28: () => import('@/pages/sections/Section28'),
  29: () => import('@/pages/sections/Section29'),
  30: () => import('@/pages/sections/Section30'),
  31: () => import('@/pages/sections/Section31'),
  // Chapter 9: Maximum Distance Separable Codes
  32: () => import('@/pages/sections/Section32'),
  33: () => import('@/pages/sections/Section33'),
  34: () => import('@/pages/sections/Section34'),
  35: () => import('@/pages/sections/Section35'),
  // Chapter 10: Automorphism Group of a Code
  36: () => import('@/pages/sections/Section36'),
  37: () => import('@/pages/sections/Section37'),
  38: () => import('@/pages/sections/Section38'),
  // Chapter 11: Hadamard Matrices and Codes
  39: () => import('@/pages/sections/Section39'),
  40: () => import('@/pages/sections/Section40'),
};

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
