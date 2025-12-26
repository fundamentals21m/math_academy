import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { AchievementToastContainer } from '@/components/gamification';
import { FEATURES } from '@/config';

// Pages
import Home from '@/pages/Home';
import Leaderboard from '@/pages/Leaderboard';
import Theorems from '@/pages/Theorems';
import InteractiveModules from '@/pages/InteractiveModules';

// Section pages
import Section01 from '@/pages/sections/Section01';
import Section02 from '@/pages/sections/Section02';
import Section03 from '@/pages/sections/Section03';
import Section04 from '@/pages/sections/Section04';
import Section05 from '@/pages/sections/Section05';
import Section06 from '@/pages/sections/Section06';
import Section07 from '@/pages/sections/Section07';
import Section08 from '@/pages/sections/Section08';
import Section09 from '@/pages/sections/Section09';
import Section10 from '@/pages/sections/Section10';
import Section11 from '@/pages/sections/Section11';
import Section12 from '@/pages/sections/Section12';

// Dynamic section loader for sections that exist
const sectionComponents: Record<number, React.ComponentType> = {
  1: Section01,
  2: Section02,
  3: Section03,
  4: Section04,
  5: Section05,
  6: Section06,
  7: Section07,
  8: Section08,
  9: Section09,
  10: Section10,
  11: Section11,
  12: Section12,
};

function SectionRouter() {
  const { id } = useParams<{ id: string }>();
  const sectionId = parseInt(id || '0', 10);

  const SectionComponent = sectionComponents[sectionId];

  if (SectionComponent) {
    return <SectionComponent />;
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
