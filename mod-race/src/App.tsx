import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { AchievementToastContainer } from '@/components/gamification';
import { RPNCalculator, RPNCalculatorToggle } from '@/components/game/RPNCalculator';
import { FEATURES } from '@/config';
import RacingGame from '@/pages/RacingGame';

function AppContent() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Main Game */}
      <RacingGame />

      {/* RPN Calculator widget */}
      <RPNCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
      <RPNCalculatorToggle onClick={() => setCalculatorOpen(!calculatorOpen)} />

      {/* Global achievement notifications */}
      {FEATURES.gamification && <AchievementToastContainer />}
    </div>
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
