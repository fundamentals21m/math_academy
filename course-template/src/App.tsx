import { HashRouter, Routes, Route } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { AchievementToastContainer } from '@/components/gamification';
import { FEATURES } from '@/config';

// Pages
import Home from '@/pages/Home';
import Leaderboard from '@/pages/Leaderboard';
import Theorems from '@/pages/Theorems';
import InteractiveModules from '@/pages/InteractiveModules';

// Section pages - import all sections here
// Example: import Section00 from '@/pages/sections/Section00';

// Dynamic section loader for sections that exist
const sectionComponents: Record<number, React.ComponentType> = {
  // Add section components here as you create them:
  // 0: Section00,
  // 1: Section01,
  // etc.
};

function SectionRouter() {
  // This component handles dynamic section routing
  // It will be replaced with actual section components as you build them
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

        {/* Feature-gated routes */}
        {FEATURES.leaderboard && (
          <Route path="/leaderboard" element={<Leaderboard />} />
        )}
        {FEATURES.theoremIndex && (
          <Route path="/theorems" element={<Theorems />} />
        )}
        {FEATURES.interactiveModules && (
          <Route path="/interactive" element={<InteractiveModules />} />
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
