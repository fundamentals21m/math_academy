import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Step {
  bitIndex: number;
  bitValue: number;
  operation: 'double' | 'add' | 'init';
  resultMultiple: number;
  description: string;
}

interface Props {
  className?: string;
}

/**
 * Interactive animation showing the double-and-add algorithm for scalar multiplication.
 * Users can input a scalar n and watch step-by-step how nG is computed.
 */
export function DoubleAndAddAnimator({ className = '' }: Props) {
  const [scalar, setScalar] = useState(23);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000); // ms per step

  // Get binary representation
  const binary = useMemo(() => {
    return scalar.toString(2);
  }, [scalar]);

  const binaryBits = useMemo(() => {
    return binary.split('').map(Number);
  }, [binary]);

  // Generate all steps of the algorithm
  const steps = useMemo(() => {
    const result: Step[] = [];
    let accumulator = 0;

    // Initial state
    result.push({
      bitIndex: -1,
      bitValue: -1,
      operation: 'init',
      resultMultiple: 0,
      description: 'Start with R = O (point at infinity)',
    });

    for (let i = 0; i < binaryBits.length; i++) {
      const bit = binaryBits[i];

      // Double
      accumulator *= 2;
      result.push({
        bitIndex: i,
        bitValue: bit,
        operation: 'double',
        resultMultiple: accumulator,
        description: `Double: R = 2R${accumulator > 0 ? ` = ${accumulator}G` : ' = O'}`,
      });

      // Add if bit is 1
      if (bit === 1) {
        accumulator += 1;
        result.push({
          bitIndex: i,
          bitValue: bit,
          operation: 'add',
          resultMultiple: accumulator,
          description: `Add G: R = R + G = ${accumulator}G`,
        });
      }
    }

    return result;
  }, [binaryBits]);

  // Animation control
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [isPlaying, steps.length, speed]);

  const reset = useCallback(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, []);

  const stepForward = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentStepData = steps[currentStep];

  // Count operations
  const totalDoubles = steps.filter((s) => s.operation === 'double').length;
  const totalAdds = steps.filter((s) => s.operation === 'add').length;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">Double-and-Add Algorithm</h3>
      <p className="text-dark-400 text-sm mb-4">
        Watch how {scalar}G is computed using only {totalDoubles} doublings and {totalAdds - 1}{' '}
        additions (instead of {scalar - 1} additions).
      </p>

      {/* Scalar input */}
      <div className="mb-4">
        <label className="block text-dark-300 text-sm mb-2">
          Scalar n: <span className="text-amber-400 font-mono">{scalar}</span>
        </label>
        <input
          type="range"
          min="2"
          max="127"
          value={scalar}
          onChange={(e) => {
            setScalar(parseInt(e.target.value));
            reset();
          }}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
      </div>

      {/* Binary representation */}
      <div className="mb-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600/50">
        <p className="text-dark-400 text-sm mb-2">Binary representation:</p>
        <div className="flex gap-1 flex-wrap">
          {binaryBits.map((bit, i) => {
            const isCurrentBit = currentStepData?.bitIndex === i;
            const isProcessed =
              currentStepData?.bitIndex !== undefined && i < currentStepData.bitIndex;

            return (
              <motion.div
                key={i}
                className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono transition-colors ${
                  isCurrentBit
                    ? 'bg-amber-500/30 border-2 border-amber-500 text-amber-400'
                    : isProcessed
                    ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                    : 'bg-dark-600/50 text-dark-400'
                }`}
                animate={{
                  scale: isCurrentBit ? 1.1 : 1,
                }}
              >
                <span className="text-lg">{bit}</span>
                <span className="text-[8px] text-dark-500">2^{binaryBits.length - 1 - i}</span>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-2 text-dark-500 text-xs">
          {scalar} = {binaryBits.map((b, i) => (b === 1 ? `2^${binaryBits.length - 1 - i}` : null)).filter(Boolean).join(' + ')}
        </p>
      </div>

      {/* Playback controls */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={stepBackward}
          disabled={currentStep === 0}
          className="p-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 5v14l-14-7z" transform="scale(-1,1) translate(-24,0)" />
          </svg>
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isPlaying
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
          }`}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={stepForward}
          disabled={currentStep >= steps.length - 1}
          className="p-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 5v14l14-7z" />
          </svg>
        </button>
        <button
          onClick={reset}
          className="px-3 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 text-sm"
        >
          Reset
        </button>
        <div className="flex-1" />
        <select
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
          className="px-3 py-2 rounded-lg bg-dark-700 text-dark-300 text-sm border-none"
        >
          <option value={2000}>Slow</option>
          <option value={1000}>Normal</option>
          <option value={500}>Fast</option>
        </select>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-dark-700 rounded-full mb-4 overflow-hidden">
        <motion.div
          className="h-full bg-amber-500"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Current step display */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600/50 mb-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-dark-500 text-sm">Step {currentStep + 1}/{steps.length}</span>
          {currentStepData && (
            <span
              className={`px-2 py-0.5 rounded text-xs font-medium ${
                currentStepData.operation === 'double'
                  ? 'bg-blue-500/20 text-blue-400'
                  : currentStepData.operation === 'add'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-dark-600 text-dark-400'
              }`}
            >
              {currentStepData.operation.toUpperCase()}
            </span>
          )}
        </div>
        <p className="text-lg text-dark-200">{currentStepData?.description}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-dark-500 text-sm">Result:</span>
          <motion.span
            key={currentStepData?.resultMultiple}
            className="text-xl font-bold text-amber-400 font-mono"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
          >
            {currentStepData?.resultMultiple === 0 ? 'O' : `${currentStepData?.resultMultiple}G`}
          </motion.span>
        </div>
      </div>

      {/* Step history */}
      <div className="space-y-1 max-h-48 overflow-y-auto">
        {steps.slice(0, currentStep + 1).map((step, i) => (
          <motion.div
            key={i}
            className={`flex items-center gap-3 p-2 rounded-lg text-sm ${
              i === currentStep ? 'bg-dark-700/50' : ''
            }`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span
              className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
                step.operation === 'double'
                  ? 'bg-blue-500/20 text-blue-400'
                  : step.operation === 'add'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-dark-600 text-dark-400'
              }`}
            >
              {step.operation === 'double' ? '2x' : step.operation === 'add' ? '+' : 'O'}
            </span>
            <span className="text-dark-400">{step.description}</span>
          </motion.div>
        ))}
      </div>

      {/* Efficiency callout */}
      {currentStep === steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
        >
          <p className="text-emerald-400 text-sm">
            <strong>Efficiency:</strong> Computed {scalar}G in just {totalDoubles + totalAdds - 1} operations
            (O(log n) complexity) instead of {scalar - 1} sequential additions. For 256-bit scalars,
            this means ~256 doublings + ~128 additions instead of ~2^256 operations!
          </p>
        </motion.div>
      )}
    </div>
  );
}
