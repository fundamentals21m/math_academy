import { useState } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { AchievementToastContainer } from '@/components/gamification';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { FEATURES } from '@/config';

// Pages
import Home from '@/pages/Home';
import Leaderboard from '@/pages/Leaderboard';
import Theorems from '@/pages/Theorems';
import InteractiveModules from '@/pages/InteractiveModules';

// Section pages
import Section00 from '@/pages/sections/Section00';
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
import Section13 from '@/pages/sections/Section13';
import Section14 from '@/pages/sections/Section14';
import Section15 from '@/pages/sections/Section15';
import Section16 from '@/pages/sections/Section16';
import Section17 from '@/pages/sections/Section17';
import Section18 from '@/pages/sections/Section18';
import Section19 from '@/pages/sections/Section19';
import Section20 from '@/pages/sections/Section20';
import Section21 from '@/pages/sections/Section21';
import Section22 from '@/pages/sections/Section22';
import Section23 from '@/pages/sections/Section23';
import Section24 from '@/pages/sections/Section24';
import Section25 from '@/pages/sections/Section25';

// Section components mapping
const sectionComponents: Record<number, React.ComponentType> = {
  0: Section00,
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
  13: Section13,
  14: Section14,
  15: Section15,
  16: Section16,
  17: Section17,
  18: Section18,
  19: Section19,
  20: Section20,
  21: Section21,
  22: Section22,
  23: Section23,
  24: Section24,
  25: Section25,
};

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

  return <SectionComponent />;
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
