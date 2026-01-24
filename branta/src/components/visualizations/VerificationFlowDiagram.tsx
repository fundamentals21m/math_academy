import { useState, useEffect } from 'react';

interface FlowStep {
  id: string;
  label: string;
  actor: 'merchant' | 'branta' | 'customer' | 'wallet';
  description: string;
}

const flowSteps: FlowStep[] = [
  { id: 'generate', label: 'Generate Address', actor: 'merchant', description: 'Merchant generates payment address for customer' },
  { id: 'register', label: 'Register with Branta', actor: 'merchant', description: 'POST /v1/spv with address and TTL' },
  { id: 'confirm', label: 'Registration Confirmed', actor: 'branta', description: 'Address stored in verification database' },
  { id: 'display', label: 'Display to Customer', actor: 'merchant', description: 'Show address and verification link' },
  { id: 'verify', label: 'Verify Address', actor: 'customer', description: 'Customer checks address via Branta' },
  { id: 'check', label: 'Check Registration', actor: 'branta', description: 'GET /v1/spv returns verification status' },
  { id: 'result', label: 'Show Result', actor: 'branta', description: 'Confirmed: Address belongs to merchant' },
  { id: 'pay', label: 'Send Payment', actor: 'wallet', description: 'Customer sends with confidence' },
];

const actorColors: Record<string, { bg: string; border: string; text: string }> = {
  merchant: { bg: 'bg-blue-900/30', border: 'border-blue-600', text: 'text-blue-400' },
  branta: { bg: 'bg-amber-900/30', border: 'border-amber-600', text: 'text-amber-400' },
  customer: { bg: 'bg-green-900/30', border: 'border-green-600', text: 'text-green-400' },
  wallet: { bg: 'bg-purple-900/30', border: 'border-purple-600', text: 'text-purple-400' },
};

const actorIcons: Record<string, string> = {
  merchant: '🏪',
  branta: '🛡️',
  customer: '👤',
  wallet: '👛',
};

export function VerificationFlowDiagram() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && currentStep < flowSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (currentStep >= flowSteps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setCurrentStep(-1);
    setIsPlaying(true);
    setTimeout(() => setCurrentStep(0), 100);
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setIsPlaying(false);
  };

  const handleStepClick = (index: number) => {
    setIsPlaying(false);
    setCurrentStep(index);
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">Verification Flow Diagram</h3>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="px-4 py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 disabled:opacity-50"
        >
          ▶ Play Flow
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-200 font-medium hover:bg-dark-600"
        >
          ↺ Reset
        </button>
      </div>

      {/* Actor legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(actorColors).map(([actor, colors]) => (
          <div key={actor} className="flex items-center gap-2">
            <span className="text-xl">{actorIcons[actor]}</span>
            <span className={`text-sm font-medium capitalize ${colors.text}`}>{actor}</span>
          </div>
        ))}
      </div>

      {/* Flow diagram */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-dark-700" />

        <div className="space-y-4">
          {flowSteps.map((step, index) => {
            const isActive = index <= currentStep;
            const isCurrent = index === currentStep;
            const colors = actorColors[step.actor];

            return (
              <div
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`relative flex items-start gap-4 cursor-pointer transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                    isActive
                      ? `${colors.bg} border-2 ${colors.border}`
                      : 'bg-dark-800 border-2 border-dark-700'
                  } ${isCurrent ? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-dark-900 scale-110' : ''}`}
                >
                  {actorIcons[step.actor]}
                </div>

                {/* Step content */}
                <div
                  className={`flex-1 p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? `${colors.bg} border ${colors.border}`
                      : 'bg-dark-800/50 border border-dark-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-semibold ${isActive ? colors.text : 'text-dark-500'}`}>
                      {step.label}
                    </span>
                    <span className="text-xs text-dark-500 capitalize">({step.actor})</span>
                  </div>
                  <p className={`text-sm ${isActive ? 'text-dark-300' : 'text-dark-600'}`}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow to next step */}
                {index < flowSteps.length - 1 && isActive && (
                  <div className="absolute left-6 top-12 h-4 flex items-center justify-center">
                    <span className="text-dark-500">↓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion message */}
      {currentStep >= flowSteps.length - 1 && (
        <div className="mt-6 p-4 bg-green-900/30 border border-green-600 rounded-xl text-center">
          <p className="text-green-400 font-semibold text-lg">
            ✅ Verification Flow Complete!
          </p>
          <p className="text-dark-300 mt-2">
            The customer has verified the address and sent payment with confidence.
          </p>
        </div>
      )}

      {/* Info box */}
      <div className="mt-6 p-4 bg-dark-800 rounded-lg">
        <p className="text-dark-400 text-sm">
          <strong className="text-dark-200">Tip:</strong> Click on any step to jump to it directly.
          This flow shows how Branta integrates into the payment lifecycle to provide verification
          at every critical point.
        </p>
      </div>
    </div>
  );
}
