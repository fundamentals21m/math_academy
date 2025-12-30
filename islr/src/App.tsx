import { lazy, Suspense, Component, ReactNode } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';

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

// Eagerly load Home since it's the landing page
import Home from '@/pages/Home';

// Lazy load other pages - they're only needed when navigating to them
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));

// Lazy load all section pages - this is the biggest win for bundle size
// Each section is only loaded when the user navigates to it
// Add more sections as they are created
const sectionLoaders: Record<number, () => Promise<{ default: React.ComponentType }>> = {
  // Chapter 1: Introduction
  1: () => import('@/pages/sections/Section01'),
  // Chapter 2: Statistical Learning
  2: () => import('@/pages/sections/Section02'),
  3: () => import('@/pages/sections/Section03'),
  4: () => import('@/pages/sections/Section04'), // Lab: Intro to R
  5: () => import('@/pages/sections/Section05'), // Ch2 Exercises
  // Chapter 3: Linear Regression
  6: () => import('@/pages/sections/Section06'),
  7: () => import('@/pages/sections/Section07'), // Multiple Linear Regression
  8: () => import('@/pages/sections/Section08'), // Regression Considerations
  9: () => import('@/pages/sections/Section09'), // The Marketing Plan
  10: () => import('@/pages/sections/Section10'), // Comparison with KNN
  // ... continue adding sections as they are implemented
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

function AppContent() {
  return (
    <>
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

    </>
  );
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
