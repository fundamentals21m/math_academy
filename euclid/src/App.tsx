import { useState, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { AchievementToastContainer } from '@/components/gamification';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { FEATURES } from '@/config';

// Pages - Home is eagerly loaded for fast initial render
import Home from '@/pages/Home';

// Lazy load other pages
const Leaderboard = lazy(() => import('@/pages/Leaderboard'));
const Theorems = lazy(() => import('@/pages/Theorems'));
const InteractiveModules = lazy(() => import('@/pages/InteractiveModules'));
const SectionQuizPage = lazy(() => import('@/pages/SectionQuizPage'));

// Loading spinner component for Suspense fallbacks
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-dark-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}

// Section lazy loaders - each section is loaded on demand
const sectionLoaders: Record<number, () => Promise<{ default: React.ComponentType }>> = {
  // Book I: Definitions, Postulates, Common Notions + 48 Propositions (Sections 0-48)
  0: () => import('./pages/sections/Section00'),
  1: () => import('./pages/sections/Section01'),
  2: () => import('./pages/sections/Section02'),
  3: () => import('./pages/sections/Section03'),
  4: () => import('./pages/sections/Section04'),
  5: () => import('./pages/sections/Section05'),
  6: () => import('./pages/sections/Section06'),
  7: () => import('./pages/sections/Section07'),
  8: () => import('./pages/sections/Section08'),
  9: () => import('./pages/sections/Section09'),
  10: () => import('./pages/sections/Section10'),
  11: () => import('./pages/sections/Section11'),
  12: () => import('./pages/sections/Section12'),
  13: () => import('./pages/sections/Section13'),
  14: () => import('./pages/sections/Section14'),
  15: () => import('./pages/sections/Section15'),
  16: () => import('./pages/sections/Section16'),
  17: () => import('./pages/sections/Section17'),
  18: () => import('./pages/sections/Section18'),
  19: () => import('./pages/sections/Section19'),
  20: () => import('./pages/sections/Section20'),
  21: () => import('./pages/sections/Section21'),
  22: () => import('./pages/sections/Section22'),
  23: () => import('./pages/sections/Section23'),
  24: () => import('./pages/sections/Section24'),
  25: () => import('./pages/sections/Section25'),
  26: () => import('./pages/sections/Section26'),
  27: () => import('./pages/sections/Section27'),
  28: () => import('./pages/sections/Section28'),
  29: () => import('./pages/sections/Section29'),
  30: () => import('./pages/sections/Section30'),
  31: () => import('./pages/sections/Section31'),
  32: () => import('./pages/sections/Section32'),
  33: () => import('./pages/sections/Section33'),
  34: () => import('./pages/sections/Section34'),
  35: () => import('./pages/sections/Section35'),
  36: () => import('./pages/sections/Section36'),
  37: () => import('./pages/sections/Section37'),
  38: () => import('./pages/sections/Section38'),
  39: () => import('./pages/sections/Section39'),
  40: () => import('./pages/sections/Section40'),
  41: () => import('./pages/sections/Section41'),
  42: () => import('./pages/sections/Section42'),
  43: () => import('./pages/sections/Section43'),
  44: () => import('./pages/sections/Section44'),
  45: () => import('./pages/sections/Section45'),
  46: () => import('./pages/sections/Section46'),
  47: () => import('./pages/sections/Section47'),
  48: () => import('./pages/sections/Section48'),
  // Book II: Geometric Algebra (Sections 49-63)
  49: () => import('./pages/sections/Section49'),
  50: () => import('./pages/sections/Section50'),
  51: () => import('./pages/sections/Section51'),
  52: () => import('./pages/sections/Section52'),
  53: () => import('./pages/sections/Section53'),
  54: () => import('./pages/sections/Section54'),
  55: () => import('./pages/sections/Section55'),
  56: () => import('./pages/sections/Section56'),
  57: () => import('./pages/sections/Section57'),
  58: () => import('./pages/sections/Section58'),
  59: () => import('./pages/sections/Section59'),
  60: () => import('./pages/sections/Section60'),
  61: () => import('./pages/sections/Section61'),
  62: () => import('./pages/sections/Section62'),
  63: () => import('./pages/sections/Section63'),
  // Book III: Circles (Sections 64-101)
  64: () => import('./pages/sections/Section64'),
  65: () => import('./pages/sections/Section65'),
  66: () => import('./pages/sections/Section66'),
  67: () => import('./pages/sections/Section67'),
  68: () => import('./pages/sections/Section68'),
  69: () => import('./pages/sections/Section69'),
  70: () => import('./pages/sections/Section70'),
  71: () => import('./pages/sections/Section71'),
  72: () => import('./pages/sections/Section72'),
  73: () => import('./pages/sections/Section73'),
  74: () => import('./pages/sections/Section74'),
  75: () => import('./pages/sections/Section75'),
  76: () => import('./pages/sections/Section76'),
  77: () => import('./pages/sections/Section77'),
  78: () => import('./pages/sections/Section78'),
  79: () => import('./pages/sections/Section79'),
  80: () => import('./pages/sections/Section80'),
  81: () => import('./pages/sections/Section81'),
  82: () => import('./pages/sections/Section82'),
  83: () => import('./pages/sections/Section83'),
  84: () => import('./pages/sections/Section84'),
  85: () => import('./pages/sections/Section85'),
  86: () => import('./pages/sections/Section86'),
  87: () => import('./pages/sections/Section87'),
  88: () => import('./pages/sections/Section88'),
  89: () => import('./pages/sections/Section89'),
  90: () => import('./pages/sections/Section90'),
  91: () => import('./pages/sections/Section91'),
  92: () => import('./pages/sections/Section92'),
  93: () => import('./pages/sections/Section93'),
  94: () => import('./pages/sections/Section94'),
  95: () => import('./pages/sections/Section95'),
  96: () => import('./pages/sections/Section96'),
  97: () => import('./pages/sections/Section97'),
  98: () => import('./pages/sections/Section98'),
  99: () => import('./pages/sections/Section99'),
  100: () => import('./pages/sections/Section100'),
  101: () => import('./pages/sections/Section101'),
  // Book IV: Inscribed and Circumscribed Figures (Sections 102-118)
  102: () => import('./pages/sections/Section102'),
  103: () => import('./pages/sections/Section103'),
  104: () => import('./pages/sections/Section104'),
  105: () => import('./pages/sections/Section105'),
  106: () => import('./pages/sections/Section106'),
  107: () => import('./pages/sections/Section107'),
  108: () => import('./pages/sections/Section108'),
  109: () => import('./pages/sections/Section109'),
  110: () => import('./pages/sections/Section110'),
  111: () => import('./pages/sections/Section111'),
  112: () => import('./pages/sections/Section112'),
  113: () => import('./pages/sections/Section113'),
  114: () => import('./pages/sections/Section114'),
  115: () => import('./pages/sections/Section115'),
  116: () => import('./pages/sections/Section116'),
  117: () => import('./pages/sections/Section117'),
  118: () => import('./pages/sections/Section118'),
  // Book V: Theory of Proportions (Sections 119-144)
  119: () => import('./pages/sections/Section119'),
  120: () => import('./pages/sections/Section120'),
  121: () => import('./pages/sections/Section121'),
  122: () => import('./pages/sections/Section122'),
  123: () => import('./pages/sections/Section123'),
  124: () => import('./pages/sections/Section124'),
  125: () => import('./pages/sections/Section125'),
  126: () => import('./pages/sections/Section126'),
  127: () => import('./pages/sections/Section127'),
  128: () => import('./pages/sections/Section128'),
  129: () => import('./pages/sections/Section129'),
  130: () => import('./pages/sections/Section130'),
  131: () => import('./pages/sections/Section131'),
  132: () => import('./pages/sections/Section132'),
  133: () => import('./pages/sections/Section133'),
  134: () => import('./pages/sections/Section134'),
  135: () => import('./pages/sections/Section135'),
  136: () => import('./pages/sections/Section136'),
  137: () => import('./pages/sections/Section137'),
  138: () => import('./pages/sections/Section138'),
  139: () => import('./pages/sections/Section139'),
  140: () => import('./pages/sections/Section140'),
  141: () => import('./pages/sections/Section141'),
  142: () => import('./pages/sections/Section142'),
  143: () => import('./pages/sections/Section143'),
  144: () => import('./pages/sections/Section144'),
  // Book VI: Similar Figures (Sections 145-178)
  145: () => import('./pages/sections/Section145'),
  146: () => import('./pages/sections/Section146'),
  147: () => import('./pages/sections/Section147'),
  148: () => import('./pages/sections/Section148'),
  149: () => import('./pages/sections/Section149'),
  150: () => import('./pages/sections/Section150'),
  151: () => import('./pages/sections/Section151'),
  152: () => import('./pages/sections/Section152'),
  153: () => import('./pages/sections/Section153'),
  154: () => import('./pages/sections/Section154'),
  155: () => import('./pages/sections/Section155'),
  156: () => import('./pages/sections/Section156'),
  157: () => import('./pages/sections/Section157'),
  158: () => import('./pages/sections/Section158'),
  159: () => import('./pages/sections/Section159'),
  160: () => import('./pages/sections/Section160'),
  161: () => import('./pages/sections/Section161'),
  162: () => import('./pages/sections/Section162'),
  163: () => import('./pages/sections/Section163'),
  164: () => import('./pages/sections/Section164'),
  165: () => import('./pages/sections/Section165'),
  166: () => import('./pages/sections/Section166'),
  167: () => import('./pages/sections/Section167'),
  168: () => import('./pages/sections/Section168'),
  169: () => import('./pages/sections/Section169'),
  170: () => import('./pages/sections/Section170'),
  171: () => import('./pages/sections/Section171'),
  172: () => import('./pages/sections/Section172'),
  173: () => import('./pages/sections/Section173'),
  174: () => import('./pages/sections/Section174'),
  175: () => import('./pages/sections/Section175'),
  176: () => import('./pages/sections/Section176'),
  177: () => import('./pages/sections/Section177'),
  178: () => import('./pages/sections/Section178'),
  // Book VII: Elementary Number Theory (Sections 179-218)
  179: () => import('./pages/sections/Section179'),
  180: () => import('./pages/sections/Section180'),
  181: () => import('./pages/sections/Section181'),
  182: () => import('./pages/sections/Section182'),
  183: () => import('./pages/sections/Section183'),
  184: () => import('./pages/sections/Section184'),
  185: () => import('./pages/sections/Section185'),
  186: () => import('./pages/sections/Section186'),
  187: () => import('./pages/sections/Section187'),
  188: () => import('./pages/sections/Section188'),
  189: () => import('./pages/sections/Section189'),
  190: () => import('./pages/sections/Section190'),
  191: () => import('./pages/sections/Section191'),
  192: () => import('./pages/sections/Section192'),
  193: () => import('./pages/sections/Section193'),
  194: () => import('./pages/sections/Section194'),
  195: () => import('./pages/sections/Section195'),
  196: () => import('./pages/sections/Section196'),
  197: () => import('./pages/sections/Section197'),
  198: () => import('./pages/sections/Section198'),
  199: () => import('./pages/sections/Section199'),
  200: () => import('./pages/sections/Section200'),
  201: () => import('./pages/sections/Section201'),
  202: () => import('./pages/sections/Section202'),
  203: () => import('./pages/sections/Section203'),
  204: () => import('./pages/sections/Section204'),
  205: () => import('./pages/sections/Section205'),
  206: () => import('./pages/sections/Section206'),
  207: () => import('./pages/sections/Section207'),
  208: () => import('./pages/sections/Section208'),
  209: () => import('./pages/sections/Section209'),
  210: () => import('./pages/sections/Section210'),
  211: () => import('./pages/sections/Section211'),
  212: () => import('./pages/sections/Section212'),
  213: () => import('./pages/sections/Section213'),
  214: () => import('./pages/sections/Section214'),
  215: () => import('./pages/sections/Section215'),
  216: () => import('./pages/sections/Section216'),
  217: () => import('./pages/sections/Section217'),
  218: () => import('./pages/sections/Section218'),
};

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

  if (SectionComponent) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
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
      <AppLayout>
        <Routes>
          {/* Core routes */}
          <Route path="/" element={<Home />} />

          {/* Feature-gated routes */}
          {FEATURES.leaderboard && (
            <Route path="/leaderboard" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Leaderboard />
              </Suspense>
            } />
          )}
          {FEATURES.theoremIndex && (
            <Route path="/theorems" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Theorems />
              </Suspense>
            } />
          )}
          {FEATURES.interactiveModules && (
            <Route path="/interactive" element={
              <Suspense fallback={<LoadingSpinner />}>
                <InteractiveModules />
              </Suspense>
            } />
          )}

          {/* Dynamic section routes */}
          <Route path="/section/:id" element={<SectionRouter />} />

          {/* Quiz routes */}
          <Route path="/quiz/section/:id" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SectionQuizPage />
            </Suspense>
          } />

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
