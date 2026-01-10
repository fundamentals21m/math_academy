import { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
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

// Lazy load all section pages - this is the biggest win for bundle size
// Each section is only loaded when the user navigates to it
const sectionLoaders: Record<number, () => Promise<{ default: React.ComponentType }>> = {
  0: () => import('@/pages/sections/Section00'),
  1: () => import('@/pages/sections/Section01'),
  2: () => import('@/pages/sections/Section02'),
  3: () => import('@/pages/sections/Section03'),
  4: () => import('@/pages/sections/Section04'),
  5: () => import('@/pages/sections/Section05'),
  6: () => import('@/pages/sections/Section06'),
  7: () => import('@/pages/sections/Section07'),
  8: () => import('@/pages/sections/Section08'),
  9: () => import('@/pages/sections/Section09'),
  10: () => import('@/pages/sections/Section10'),
  11: () => import('@/pages/sections/Section11'),
  12: () => import('@/pages/sections/Section12'),
  13: () => import('@/pages/sections/Section13'),
  14: () => import('@/pages/sections/Section14'),
  15: () => import('@/pages/sections/Section15'),
  16: () => import('@/pages/sections/Section16'),
  17: () => import('@/pages/sections/Section17'),
  18: () => import('@/pages/sections/Section18'),
  19: () => import('@/pages/sections/Section19'),
  20: () => import('@/pages/sections/Section20'),
  21: () => import('@/pages/sections/Section21'),
  22: () => import('@/pages/sections/Section22'),
  23: () => import('@/pages/sections/Section23'),
  24: () => import('@/pages/sections/Section24'),
  25: () => import('@/pages/sections/Section25'),
  26: () => import('@/pages/sections/Section26'),
  27: () => import('@/pages/sections/Section27'),
  28: () => import('@/pages/sections/Section28'),
  29: () => import('@/pages/sections/Section29'),
  30: () => import('@/pages/sections/Section30'),
  31: () => import('@/pages/sections/Section31'),
  32: () => import('@/pages/sections/Section32'),
  33: () => import('@/pages/sections/Section33'),
  34: () => import('@/pages/sections/Section34'),
  35: () => import('@/pages/sections/Section35'),
  36: () => import('@/pages/sections/Section36'),
  37: () => import('@/pages/sections/Section37'),
  38: () => import('@/pages/sections/Section38'),
  39: () => import('@/pages/sections/Section39'),
  40: () => import('@/pages/sections/Section40'),
  41: () => import('@/pages/sections/Section41'),
  42: () => import('@/pages/sections/Section42'),
  43: () => import('@/pages/sections/Section43'),
  44: () => import('@/pages/sections/Section44'),
  45: () => import('@/pages/sections/Section45'),
  46: () => import('@/pages/sections/Section46'),
  47: () => import('@/pages/sections/Section47'),
  48: () => import('@/pages/sections/Section48'),
  49: () => import('@/pages/sections/Section49'),
  50: () => import('@/pages/sections/Section50'),
  51: () => import('@/pages/sections/Section51'),
  52: () => import('@/pages/sections/Section52'),
  53: () => import('@/pages/sections/Section53'),
  54: () => import('@/pages/sections/Section54'),
  55: () => import('@/pages/sections/Section55'),
  56: () => import('@/pages/sections/Section56'),
  57: () => import('@/pages/sections/Section57'),
  58: () => import('@/pages/sections/Section58'),
  59: () => import('@/pages/sections/Section59'),
  60: () => import('@/pages/sections/Section60'),
  61: () => import('@/pages/sections/Section61'),
  62: () => import('@/pages/sections/Section62'),
  63: () => import('@/pages/sections/Section63'),
  64: () => import('@/pages/sections/Section64'),
  65: () => import('@/pages/sections/Section65'),
  66: () => import('@/pages/sections/Section66'),
  67: () => import('@/pages/sections/Section67'),
  68: () => import('@/pages/sections/Section68'),
  69: () => import('@/pages/sections/Section69'),
  70: () => import('@/pages/sections/Section70'),
  71: () => import('@/pages/sections/Section71'),
  72: () => import('@/pages/sections/Section72'),
  73: () => import('@/pages/sections/Section73'),
  74: () => import('@/pages/sections/Section74'),
  75: () => import('@/pages/sections/Section75'),
  76: () => import('@/pages/sections/Section76'),
  77: () => import('@/pages/sections/Section77'),
  78: () => import('@/pages/sections/Section78'),
  79: () => import('@/pages/sections/Section79'),
  80: () => import('@/pages/sections/Section80'),
  81: () => import('@/pages/sections/Section81'),
  82: () => import('@/pages/sections/Section82'),
  83: () => import('@/pages/sections/Section83'),
  84: () => import('@/pages/sections/Section84'),
  85: () => import('@/pages/sections/Section85'),
  86: () => import('@/pages/sections/Section86'),
  87: () => import('@/pages/sections/Section87'),
  88: () => import('@/pages/sections/Section88'),
  89: () => import('@/pages/sections/Section89'),
  90: () => import('@/pages/sections/Section90'),
  91: () => import('@/pages/sections/Section91'),
  92: () => import('@/pages/sections/Section92'),
  93: () => import('@/pages/sections/Section93'),
  94: () => import('@/pages/sections/Section94'),
  95: () => import('@/pages/sections/Section95'),
  96: () => import('@/pages/sections/Section96'),
  97: () => import('@/pages/sections/Section97'),
  98: () => import('@/pages/sections/Section98'),
  99: () => import('@/pages/sections/Section99'),
  100: () => import('@/pages/sections/Section100'),
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

          {/* Section quiz routes - lazy loaded */}
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
  );
}
