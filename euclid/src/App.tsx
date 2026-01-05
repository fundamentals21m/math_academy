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

// Section pages - Book I (Definitions, Postulates, Common Notions + 48 Propositions)
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

// Book II: Geometric Algebra (Sections 49-63)
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

// Book III: Circles (Sections 64-101)
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
import Section79 from '@/pages/sections/Section79';
import Section80 from '@/pages/sections/Section80';
import Section81 from '@/pages/sections/Section81';
import Section82 from '@/pages/sections/Section82';
import Section83 from '@/pages/sections/Section83';
import Section84 from '@/pages/sections/Section84';
import Section85 from '@/pages/sections/Section85';
import Section86 from '@/pages/sections/Section86';
import Section87 from '@/pages/sections/Section87';
import Section88 from '@/pages/sections/Section88';
import Section89 from '@/pages/sections/Section89';
import Section90 from '@/pages/sections/Section90';
import Section91 from '@/pages/sections/Section91';
import Section92 from '@/pages/sections/Section92';
import Section93 from '@/pages/sections/Section93';
import Section94 from '@/pages/sections/Section94';
import Section95 from '@/pages/sections/Section95';
import Section96 from '@/pages/sections/Section96';
import Section97 from '@/pages/sections/Section97';
import Section98 from '@/pages/sections/Section98';
import Section99 from '@/pages/sections/Section99';
import Section100 from '@/pages/sections/Section100';
import Section101 from '@/pages/sections/Section101';

// Book IV: Inscribed and Circumscribed Figures (Sections 102-118)
import Section102 from '@/pages/sections/Section102';
import Section103 from '@/pages/sections/Section103';
import Section104 from '@/pages/sections/Section104';
import Section105 from '@/pages/sections/Section105';
import Section106 from '@/pages/sections/Section106';
import Section107 from '@/pages/sections/Section107';
import Section108 from '@/pages/sections/Section108';
import Section109 from '@/pages/sections/Section109';
import Section110 from '@/pages/sections/Section110';
import Section111 from '@/pages/sections/Section111';
import Section112 from '@/pages/sections/Section112';
import Section113 from '@/pages/sections/Section113';
import Section114 from '@/pages/sections/Section114';
import Section115 from '@/pages/sections/Section115';
import Section116 from '@/pages/sections/Section116';
import Section117 from '@/pages/sections/Section117';
import Section118 from '@/pages/sections/Section118';

// Book V: Theory of Proportions (Sections 119-144)
import Section119 from '@/pages/sections/Section119';
import Section120 from '@/pages/sections/Section120';
import Section121 from '@/pages/sections/Section121';
import Section122 from '@/pages/sections/Section122';
import Section123 from '@/pages/sections/Section123';
import Section124 from '@/pages/sections/Section124';
import Section125 from '@/pages/sections/Section125';
import Section126 from '@/pages/sections/Section126';
import Section127 from '@/pages/sections/Section127';
import Section128 from '@/pages/sections/Section128';
import Section129 from '@/pages/sections/Section129';
import Section130 from '@/pages/sections/Section130';
import Section131 from '@/pages/sections/Section131';
import Section132 from '@/pages/sections/Section132';
import Section133 from '@/pages/sections/Section133';
import Section134 from '@/pages/sections/Section134';
import Section135 from '@/pages/sections/Section135';
import Section136 from '@/pages/sections/Section136';
import Section137 from '@/pages/sections/Section137';
import Section138 from '@/pages/sections/Section138';
import Section139 from '@/pages/sections/Section139';
import Section140 from '@/pages/sections/Section140';
import Section141 from '@/pages/sections/Section141';
import Section142 from '@/pages/sections/Section142';
import Section143 from '@/pages/sections/Section143';
import Section144 from '@/pages/sections/Section144';

// Book VI: Similar Figures (Sections 145-178)
import Section145 from '@/pages/sections/Section145';
import Section146 from '@/pages/sections/Section146';
import Section147 from '@/pages/sections/Section147';
import Section148 from '@/pages/sections/Section148';
import Section149 from '@/pages/sections/Section149';
import Section150 from '@/pages/sections/Section150';
import Section151 from '@/pages/sections/Section151';
import Section152 from '@/pages/sections/Section152';
import Section153 from '@/pages/sections/Section153';
import Section154 from '@/pages/sections/Section154';
import Section155 from '@/pages/sections/Section155';
import Section156 from '@/pages/sections/Section156';
import Section157 from '@/pages/sections/Section157';
import Section158 from '@/pages/sections/Section158';
import Section159 from '@/pages/sections/Section159';
import Section160 from '@/pages/sections/Section160';
import Section161 from '@/pages/sections/Section161';
import Section162 from '@/pages/sections/Section162';
import Section163 from '@/pages/sections/Section163';
import Section164 from '@/pages/sections/Section164';
import Section165 from '@/pages/sections/Section165';
import Section166 from '@/pages/sections/Section166';
import Section167 from '@/pages/sections/Section167';
import Section168 from '@/pages/sections/Section168';
import Section169 from '@/pages/sections/Section169';
import Section170 from '@/pages/sections/Section170';
import Section171 from '@/pages/sections/Section171';
import Section172 from '@/pages/sections/Section172';
import Section173 from '@/pages/sections/Section173';
import Section174 from '@/pages/sections/Section174';
import Section175 from '@/pages/sections/Section175';
import Section176 from '@/pages/sections/Section176';
import Section177 from '@/pages/sections/Section177';
import Section178 from '@/pages/sections/Section178';

// Book VII: Elementary Number Theory (Sections 179-218)
import Section179 from '@/pages/sections/Section179';
import Section180 from '@/pages/sections/Section180';
import Section181 from '@/pages/sections/Section181';
import Section182 from '@/pages/sections/Section182';
import Section183 from '@/pages/sections/Section183';
import Section184 from '@/pages/sections/Section184';
import Section185 from '@/pages/sections/Section185';
import Section186 from '@/pages/sections/Section186';
import Section187 from '@/pages/sections/Section187';
import Section188 from '@/pages/sections/Section188';
import Section189 from '@/pages/sections/Section189';
import Section190 from '@/pages/sections/Section190';
import Section191 from '@/pages/sections/Section191';
import Section192 from '@/pages/sections/Section192';
import Section193 from '@/pages/sections/Section193';
import Section194 from '@/pages/sections/Section194';
import Section195 from '@/pages/sections/Section195';
import Section196 from '@/pages/sections/Section196';
import Section197 from '@/pages/sections/Section197';
import Section198 from '@/pages/sections/Section198';
import Section199 from '@/pages/sections/Section199';
import Section200 from '@/pages/sections/Section200';
import Section201 from '@/pages/sections/Section201';
import Section202 from '@/pages/sections/Section202';
import Section203 from '@/pages/sections/Section203';
import Section204 from '@/pages/sections/Section204';
import Section205 from '@/pages/sections/Section205';
import Section206 from '@/pages/sections/Section206';
import Section207 from '@/pages/sections/Section207';
import Section208 from '@/pages/sections/Section208';
import Section209 from '@/pages/sections/Section209';
import Section210 from '@/pages/sections/Section210';
import Section211 from '@/pages/sections/Section211';
import Section212 from '@/pages/sections/Section212';
import Section213 from '@/pages/sections/Section213';
import Section214 from '@/pages/sections/Section214';
import Section215 from '@/pages/sections/Section215';
import Section216 from '@/pages/sections/Section216';
import Section217 from '@/pages/sections/Section217';
import Section218 from '@/pages/sections/Section218';

// Dynamic section loader for sections that exist
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
  // Book II: Geometric Algebra
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
  // Book III: Circles
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
  79: Section79,
  80: Section80,
  81: Section81,
  82: Section82,
  83: Section83,
  84: Section84,
  85: Section85,
  86: Section86,
  87: Section87,
  88: Section88,
  89: Section89,
  90: Section90,
  91: Section91,
  92: Section92,
  93: Section93,
  94: Section94,
  95: Section95,
  96: Section96,
  97: Section97,
  98: Section98,
  99: Section99,
  100: Section100,
  101: Section101,
  // Book IV: Inscribed and Circumscribed Figures
  102: Section102,
  103: Section103,
  104: Section104,
  105: Section105,
  106: Section106,
  107: Section107,
  108: Section108,
  109: Section109,
  110: Section110,
  111: Section111,
  112: Section112,
  113: Section113,
  114: Section114,
  115: Section115,
  116: Section116,
  117: Section117,
  118: Section118,
  // Book V: Theory of Proportions
  119: Section119,
  120: Section120,
  121: Section121,
  122: Section122,
  123: Section123,
  124: Section124,
  125: Section125,
  126: Section126,
  127: Section127,
  128: Section128,
  129: Section129,
  130: Section130,
  131: Section131,
  132: Section132,
  133: Section133,
  134: Section134,
  135: Section135,
  136: Section136,
  137: Section137,
  138: Section138,
  139: Section139,
  140: Section140,
  141: Section141,
  142: Section142,
  143: Section143,
  144: Section144,
  // Book VI: Similar Figures
  145: Section145,
  146: Section146,
  147: Section147,
  148: Section148,
  149: Section149,
  150: Section150,
  151: Section151,
  152: Section152,
  153: Section153,
  154: Section154,
  155: Section155,
  156: Section156,
  157: Section157,
  158: Section158,
  159: Section159,
  160: Section160,
  161: Section161,
  162: Section162,
  163: Section163,
  164: Section164,
  165: Section165,
  166: Section166,
  167: Section167,
  168: Section168,
  169: Section169,
  170: Section170,
  171: Section171,
  172: Section172,
  173: Section173,
  174: Section174,
  175: Section175,
  176: Section176,
  177: Section177,
  178: Section178,
  // Book VII: Elementary Number Theory
  179: Section179,
  180: Section180,
  181: Section181,
  182: Section182,
  183: Section183,
  184: Section184,
  185: Section185,
  186: Section186,
  187: Section187,
  188: Section188,
  189: Section189,
  190: Section190,
  191: Section191,
  192: Section192,
  193: Section193,
  194: Section194,
  195: Section195,
  196: Section196,
  197: Section197,
  198: Section198,
  199: Section199,
  200: Section200,
  201: Section201,
  202: Section202,
  203: Section203,
  204: Section204,
  205: Section205,
  206: Section206,
  207: Section207,
  208: Section208,
  209: Section209,
  210: Section210,
  211: Section211,
  212: Section212,
  213: Section213,
  214: Section214,
  215: Section215,
  216: Section216,
  217: Section217,
  218: Section218,
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
