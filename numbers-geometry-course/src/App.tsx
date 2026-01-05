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
import SectionQuizPage from '@/pages/SectionQuizPage';

// Section pages - import all sections here
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
import Section26 from '@/pages/sections/Section26';
import Section27 from '@/pages/sections/Section27';
import Section28 from '@/pages/sections/Section28';
import Section29 from '@/pages/sections/Section29';
import Section30 from '@/pages/sections/Section30';
import Section31 from '@/pages/sections/Section31';
import Section32 from '@/pages/sections/Section32';
import Section33 from '@/pages/sections/Section33';
import Section34 from '@/pages/sections/Section34';
import Section35 from '@/pages/sections/Section35';
import Section36 from '@/pages/sections/Section36';
import Section37 from '@/pages/sections/Section37';
import Section38 from '@/pages/sections/Section38';
import Section39 from '@/pages/sections/Section39';
import Section40 from '@/pages/sections/Section40';
import Section41 from '@/pages/sections/Section41';
import Section42 from '@/pages/sections/Section42';
import Section43 from '@/pages/sections/Section43';
import Section44 from '@/pages/sections/Section44';
import Section45 from '@/pages/sections/Section45';
import Section46 from '@/pages/sections/Section46';
import Section47 from '@/pages/sections/Section47';
import Section48 from '@/pages/sections/Section48';
import Section49 from '@/pages/sections/Section49';
import Section50 from '@/pages/sections/Section50';
import Section51 from '@/pages/sections/Section51';
import Section52 from '@/pages/sections/Section52';
import Section53 from '@/pages/sections/Section53';
import Section54 from '@/pages/sections/Section54';
import Section55 from '@/pages/sections/Section55';
import Section56 from '@/pages/sections/Section56';
import Section57 from '@/pages/sections/Section57';
import Section58 from '@/pages/sections/Section58';
import Section59 from '@/pages/sections/Section59';
import Section60 from '@/pages/sections/Section60';
import Section61 from '@/pages/sections/Section61';
import Section62 from '@/pages/sections/Section62';
import Section63 from '@/pages/sections/Section63';
import Section64 from '@/pages/sections/Section64';
import Section65 from '@/pages/sections/Section65';
import Section66 from '@/pages/sections/Section66';
import Section67 from '@/pages/sections/Section67';
import Section68 from '@/pages/sections/Section68';
import Section69 from '@/pages/sections/Section69';
import Section70 from '@/pages/sections/Section70';
import Section71 from '@/pages/sections/Section71';
import Section72 from '@/pages/sections/Section72';
import Section73 from '@/pages/sections/Section73';
import Section74 from '@/pages/sections/Section74';
import Section75 from '@/pages/sections/Section75';
import Section76 from '@/pages/sections/Section76';
import Section77 from '@/pages/sections/Section77';
import Section78 from '@/pages/sections/Section78';

// Section components map - add entries as you create sections
// The SectionRouter below uses this map to render the correct component
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
  26: Section26,
  27: Section27,
  28: Section28,
  29: Section29,
  30: Section30,
  31: Section31,
  32: Section32,
  33: Section33,
  34: Section34,
  35: Section35,
  36: Section36,
  37: Section37,
  38: Section38,
  39: Section39,
  40: Section40,
  41: Section41,
  42: Section42,
  43: Section43,
  44: Section44,
  45: Section45,
  46: Section46,
  47: Section47,
  48: Section48,
  49: Section49,
  50: Section50,
  51: Section51,
  52: Section52,
  53: Section53,
  54: Section54,
  55: Section55,
  56: Section56,
  57: Section57,
  58: Section58,
  59: Section59,
  60: Section60,
  61: Section61,
  62: Section62,
  63: Section63,
  64: Section64,
  65: Section65,
  66: Section66,
  67: Section67,
  68: Section68,
  69: Section69,
  70: Section70,
  71: Section71,
  72: Section72,
  73: Section73,
  74: Section74,
  75: Section75,
  76: Section76,
  77: Section77,
  78: Section78,
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
