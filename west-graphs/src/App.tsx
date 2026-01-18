import { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { CourseConfigProvider, type CourseConfig } from '@shared/contexts/CourseConfigContext';
import { AchievementToastContainer } from '@/components/gamification';
import { Header, Sidebar } from '@shared/components/layout';
import { COURSE_ID, COURSE_NAME, COURSE_ICON, HUB_URL, FEATURES } from '@/config';
import { curriculum } from '@/data/curriculum';
import { LoadingSpinner } from '@shared/components/common/LoadingSpinner';
import { createSectionLoadersFromGlob, type SectionLoaders } from '@shared/routing/sectionLoader';

// Course configuration for shared components
const courseConfig: CourseConfig = {
  id: COURSE_ID,
  name: COURSE_NAME,
  icon: COURSE_ICON,
  hubUrl: HUB_URL,
  features: FEATURES,
  curriculum,
};

// Pages
import Home from '@/pages/Home';
import SectionQuizPage from '@/pages/SectionQuizPage';

// Lazy-loaded pages
const Leaderboard = lazy(() => import('@/pages/Leaderboard'));
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));

// Auto-discover sections using Vite glob imports
const sectionModules = import.meta.glob('./pages/sections/Section*.tsx');
const sectionLoaders: SectionLoaders = createSectionLoadersFromGlob(sectionModules);

// Create lazy components from loaders
const sectionComponents: Record<number, React.LazyExoticComponent<React.ComponentType>> = {};
for (const [id, loader] of Object.entries(sectionLoaders)) {
  sectionComponents[Number(id)] = lazy(loader);
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

function SectionRouter() {
  const { id } = useParams<{ id: string }>();
  const sectionId = parseInt(id || '0', 10);
  const SectionComponent = sectionComponents[sectionId];

  if (!SectionComponent) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-100 mb-4">Section Not Found</h1>
          <p className="text-dark-400">This section is not yet implemented.</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner message="Loading section..." />}>
      <SectionComponent />
    </Suspense>
  );
}

function AppContent() {
  return (
    <>
      <AppLayout>
        <Routes>
          {/* Core routes */}
          <Route path="/" element={<Home />} />

          {/* Feature-gated routes */}
          {FEATURES.leaderboard && (
            <Route path="/leaderboard" element={
              <Suspense fallback={<LoadingSpinner message="Loading leaderboard..." />}>
                <Leaderboard />
              </Suspense>
            } />
          )}
          {FEATURES.theoremIndex && (
            <Route path="/theorems" element={
              <Suspense fallback={<LoadingSpinner message="Loading theorems..." />}>
                <Theorems />
              </Suspense>
            } />
          )}
          {FEATURES.interactiveModules && (
            <Route path="/interactive" element={
              <Suspense fallback={<LoadingSpinner message="Loading interactive modules..." />}>
                <InteractiveModules />
              </Suspense>
            } />
          )}

          {/* Dynamic section routes */}
          <Route path="/section/:id" element={<SectionRouter />} />

          {/* Quiz routes */}
          <Route path="/quiz/section/:id" element={<SectionQuizPage />} />

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
  );
}
