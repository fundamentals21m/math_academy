import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

// Section pages - Chapter 1: Straightedge and Compass
import Section00 from '@/pages/sections/Section00';
import Section01 from '@/pages/sections/Section01';
import Section02 from '@/pages/sections/Section02';
import Section03 from '@/pages/sections/Section03';
import Section04 from '@/pages/sections/Section04';
import Section05 from '@/pages/sections/Section05';

// Section component map for dynamic routing
const sectionComponents: Record<number, React.ComponentType> = {
  0: Section00,
  1: Section01,
  2: Section02,
  3: Section03,
  4: Section04,
  5: Section05,
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

function SectionNotFound() {
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

          {/* Section routes - dynamically generated from sectionComponents */}
          {Object.entries(sectionComponents).map(([id, Component]) => (
            <Route key={id} path={`/section/${id}`} element={<Component />} />
          ))}

          {/* Fallback for non-existent sections */}
          <Route path="/section/:id" element={<SectionNotFound />} />

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
