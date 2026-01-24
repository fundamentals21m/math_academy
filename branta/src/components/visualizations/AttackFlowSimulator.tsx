import { useState, useEffect } from 'react';

interface Step {
  id: number;
  label: string;
  description: string;
  icon: string;
  isAttack?: boolean;
  isBrantaProtection?: boolean;
}

const attackSteps: Step[] = [
  { id: 1, label: 'User copies address', description: 'User copies merchant address from website', icon: '📋' },
  { id: 2, label: 'Malware intercepts', description: 'Clipboard hijacker detects Bitcoin address', icon: '🦠', isAttack: true },
  { id: 3, label: 'Address swapped', description: 'Attacker\'s address replaces legitimate one', icon: '🔄', isAttack: true },
  { id: 4, label: 'User pastes address', description: 'User pastes into wallet, unaware of swap', icon: '📝' },
  { id: 5, label: 'Payment sent', description: 'Funds sent to attacker\'s address', icon: '💸', isAttack: true },
  { id: 6, label: 'Funds stolen', description: 'Transaction irreversible, funds lost', icon: '❌', isAttack: true },
];

const protectedSteps: Step[] = [
  { id: 1, label: 'User copies address', description: 'User copies merchant address from website', icon: '📋' },
  { id: 2, label: 'Malware intercepts', description: 'Clipboard hijacker detects Bitcoin address', icon: '🦠', isAttack: true },
  { id: 3, label: 'Address swapped', description: 'Attacker\'s address replaces legitimate one', icon: '🔄', isAttack: true },
  { id: 4, label: 'Branta verifies', description: 'Guardrail checks address registration', icon: '🛡️', isBrantaProtection: true },
  { id: 5, label: 'Mismatch detected', description: 'Address doesn\'t match registered merchant', icon: '⚠️', isBrantaProtection: true },
  { id: 6, label: 'User warned', description: 'Transaction blocked, attack prevented', icon: '✅', isBrantaProtection: true },
];

export function AttackFlowSimulator() {
  const [isProtected, setIsProtected] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = isProtected ? protectedSteps : attackSteps;

  useEffect(() => {
    if (isPlaying && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, steps.length]);

  const handlePlay = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleToggleProtection = () => {
    setIsProtected(!isProtected);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">Attack Flow Simulator</h3>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={handleToggleProtection}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isProtected
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          {isProtected ? '🛡️ Branta Protected' : '⚠️ Unprotected'}
        </button>

        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="px-4 py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ▶ Play Attack
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-200 font-medium hover:bg-dark-600"
        >
          ↺ Reset
        </button>
      </div>

      {/* Flow visualization */}
      <div className="relative">
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => {
            const isActive = index < currentStep;
            const isCurrent = index === currentStep - 1;

            return (
              <div
                key={step.id}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                  isActive
                    ? step.isAttack
                      ? 'bg-red-900/30 border border-red-700'
                      : step.isBrantaProtection
                      ? 'bg-green-900/30 border border-green-700'
                      : 'bg-dark-700/50 border border-dark-600'
                    : 'bg-dark-800/30 border border-dark-800'
                } ${isCurrent ? 'ring-2 ring-amber-500' : ''}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                    isActive
                      ? step.isAttack
                        ? 'bg-red-600'
                        : step.isBrantaProtection
                        ? 'bg-green-600'
                        : 'bg-amber-600'
                      : 'bg-dark-700'
                  }`}
                >
                  {step.icon}
                </div>

                <div className="flex-1">
                  <p className={`font-semibold transition-colors duration-500 ${
                    isActive
                      ? step.isAttack
                        ? 'text-red-400'
                        : step.isBrantaProtection
                        ? 'text-green-400'
                        : 'text-dark-100'
                      : 'text-dark-500'
                  }`}>
                    {step.label}
                  </p>
                  <p className={`text-sm transition-colors duration-500 ${
                    isActive ? 'text-dark-300' : 'text-dark-600'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Step number */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  isActive ? 'bg-dark-600 text-dark-200' : 'bg-dark-800 text-dark-600'
                }`}>
                  {step.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Result message */}
      {currentStep >= steps.length && (
        <div className={`mt-6 p-4 rounded-xl text-center ${
          isProtected
            ? 'bg-green-900/30 border border-green-700'
            : 'bg-red-900/30 border border-red-700'
        }`}>
          <p className={`text-lg font-semibold ${
            isProtected ? 'text-green-400' : 'text-red-400'
          }`}>
            {isProtected
              ? '✅ Attack Prevented! Branta detected the address mismatch.'
              : '❌ Attack Successful! Funds were stolen.'}
          </p>
        </div>
      )}
    </div>
  );
}
