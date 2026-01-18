import { lazy, Suspense, Component, type ReactNode, useState } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider, useGamification } from '@/contexts/GamificationContext';

// Simple LoadingSpinner component
function LoadingSpinner({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-dark-400">{message}</p>
      </div>
    </div>
  );
}

// Simple ErrorBoundary component
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-2">Something went wrong</h1>
            <p className="text-dark-400">{this.state.error?.message}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


// Course configuration for shared components
const courseConfig: CourseConfig = {
  id: COURSE_ID,
  name: COURSE_NAME,
  icon: COURSE_ICON,
  hubUrl: HUB_URL,
  features: FEATURES,
  curriculum,
};

// Eagerly load Home since it's the landing page
import Home from '@/pages/Home';

// Lazy load other pages - they're only needed when navigating to them
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));

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
    <AppLayout>
      <Routes>
        {/* Core routes */}
        <Route path="/" element={<Home />} />

        {/* Feature routes - lazy loaded */}
        <Route
          path="/theorems"
          element={
            <Suspense fallback={<LoadingSpinner message="Loading theorems..." />}>
              <Theorems />
            </Suspense>
          }
        />
        <Route
          path="/interactive"
          element={
            <Suspense fallback={<LoadingSpinner message="Loading modules..." />}>
              <InteractiveModules />
            </Suspense>
          }
        />

        {/* Dynamic section routes - lazy loaded via SectionRouter */}
        <Route path="/section/:id" element={<SectionRouter />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayout>
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
      <GamificationProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </GamificationProvider>
    </ErrorBoundary>
  );
}
