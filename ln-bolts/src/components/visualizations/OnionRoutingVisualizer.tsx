import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HopInfo {
  id: string;
  name: string;
  color: string;
  icon: string;
}

const defaultHops: HopInfo[] = [
  { id: 'sender', name: 'Sender', color: 'bg-blue-500', icon: '👤' },
  { id: 'hop1', name: 'Node A', color: 'bg-purple-500', icon: '🔗' },
  { id: 'hop2', name: 'Node B', color: 'bg-amber-500', icon: '🔗' },
  { id: 'hop3', name: 'Node C', color: 'bg-green-500', icon: '🔗' },
  { id: 'receiver', name: 'Receiver', color: 'bg-emerald-500', icon: '💰' },
];

export function OnionRoutingVisualizer({ className = '' }: { className?: string }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);

  const hops = defaultHops;
  const maxSteps = hops.length * 2 - 1; // Forward + backward

  const currentHopIndex = useMemo(() => {
    if (step === 0) return -1;
    if (direction === 'forward') {
      return Math.min(step - 1, hops.length - 1);
    } else {
      return hops.length - 1 - (step - hops.length);
    }
  }, [step, direction, hops.length]);

  const onionLayers = useMemo(() => {
    if (direction === 'forward') {
      // Layers peel off as message travels forward
      const remaining = hops.length - 1 - currentHopIndex;
      return Math.max(0, remaining);
    } else {
      // Layers build up as HTLC is fulfilled backward
      return currentHopIndex + 1;
    }
  }, [direction, currentHopIndex, hops.length]);

  const nextStep = async () => {
    if (isAnimating || step >= maxSteps) return;
    setIsAnimating(true);

    const newStep = step + 1;
    if (newStep >= hops.length && direction === 'forward') {
      setDirection('backward');
    }
    setStep(newStep);

    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAnimating(false);
  };

  const reset = () => {
    setStep(0);
    setDirection('forward');
  };

  const getHopStatus = (index: number) => {
    if (step === 0) return 'waiting';
    if (direction === 'forward') {
      if (index < currentHopIndex) return 'processed';
      if (index === currentHopIndex) return 'active';
      return 'waiting';
    } else {
      if (index > currentHopIndex) return 'fulfilled';
      if (index === currentHopIndex) return 'active';
      return 'processed';
    }
  };

  return (
    <div className={`bg-dark-900 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark-100">Onion Routing Visualizer</h3>
        <button
          onClick={reset}
          className="px-3 py-1 text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Phase Indicator */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-dark-800 rounded-lg p-1">
          <div
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              direction === 'forward'
                ? 'bg-blue-500/20 text-blue-400'
                : 'text-dark-500'
            }`}
          >
            ⚡ Payment Forward
          </div>
          <div
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              direction === 'backward'
                ? 'bg-green-500/20 text-green-400'
                : 'text-dark-500'
            }`}
          >
            ✓ Preimage Return
          </div>
        </div>
      </div>

      {/* Onion Visualization */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          {/* Onion layers */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2"
              style={{
                width: 120 - i * 20,
                height: 120 - i * 20,
                left: i * 10,
                top: i * 10,
              }}
              animate={{
                opacity: i < onionLayers ? 1 : 0.2,
                borderColor: i < onionLayers
                  ? `hsl(${40 + i * 30}, 70%, 50%)`
                  : 'rgb(55, 65, 81)',
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
          <motion.div
            className="w-20 h-20 rounded-full bg-amber-500/30 flex items-center justify-center text-3xl"
            style={{ marginLeft: 20, marginTop: 20 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🧅
          </motion.div>
        </div>
      </div>

      {/* Route Visualization */}
      <div className="relative mb-8">
        <div className="flex items-center justify-between relative z-10">
          {hops.map((hop, i) => {
            const status = getHopStatus(i);
            return (
              <motion.div
                key={hop.id}
                className="flex flex-col items-center"
                animate={{
                  scale: status === 'active' ? 1.1 : 1,
                }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                    status === 'active' ? hop.color :
                    status === 'processed' || status === 'fulfilled' ? 'bg-dark-600' :
                    'bg-dark-800'
                  }`}
                  animate={{
                    boxShadow: status === 'active'
                      ? '0 0 20px rgba(251, 191, 36, 0.5)'
                      : 'none',
                  }}
                >
                  {hop.icon}
                </motion.div>
                <span className={`mt-2 text-xs ${
                  status === 'active' ? 'text-amber-400 font-semibold' :
                  status === 'fulfilled' ? 'text-green-400' :
                  'text-dark-400'
                }`}>
                  {hop.name}
                </span>
                {status === 'fulfilled' && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-400 text-xs"
                  >
                    ✓ paid
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Connection lines */}
        <div className="absolute top-7 left-7 right-7 flex justify-between z-0">
          {hops.slice(0, -1).map((_, i) => {
            const fromStatus = getHopStatus(i);
            const toStatus = getHopStatus(i + 1);
            const isActive = (direction === 'forward' && i === currentHopIndex) ||
                           (direction === 'backward' && i + 1 === currentHopIndex);

            return (
              <motion.div
                key={i}
                className="flex-1 h-0.5 mx-2"
                animate={{
                  backgroundColor: isActive
                    ? direction === 'forward' ? '#3b82f6' : '#22c55e'
                    : fromStatus === 'processed' || fromStatus === 'fulfilled'
                      ? '#4b5563'
                      : '#1f2937',
                }}
              >
                {isActive && (
                  <motion.div
                    className={`h-2 w-2 rounded-full -mt-0.5 ${
                      direction === 'forward' ? 'bg-blue-400' : 'bg-green-400'
                    }`}
                    animate={{
                      x: direction === 'forward' ? ['0%', '100%'] : ['100%', '0%'],
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Current Step Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${step}-${direction}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-dark-800 rounded-xl p-4 mb-6"
        >
          {step === 0 ? (
            <div className="text-center text-dark-400">
              <p className="text-lg">Click &quot;Next Step&quot; to start the payment</p>
              <p className="text-sm mt-2">Watch how the onion packet is constructed and peeled</p>
            </div>
          ) : direction === 'forward' ? (
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                <span>📦</span>
                <span>Forwarding HTLC</span>
              </div>
              <p className="text-dark-300 text-sm">
                {currentHopIndex === 0
                  ? 'Sender creates the onion packet with all routing info encrypted in layers.'
                  : currentHopIndex === hops.length - 1
                    ? 'Final hop receives the payment. Has the preimage to claim it!'
                    : `${hops[currentHopIndex].name} peels their layer, learns next hop, forwards the HTLC.`}
              </p>
              <div className="mt-3 text-xs text-dark-500">
                Each hop only knows: previous hop, next hop, amount, timelock
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                <span>🔑</span>
                <span>Returning Preimage</span>
              </div>
              <p className="text-dark-300 text-sm">
                {currentHopIndex === hops.length - 1
                  ? 'Receiver reveals the preimage to claim the payment.'
                  : currentHopIndex === 0
                    ? 'Sender receives preimage - payment complete!'
                    : `${hops[currentHopIndex].name} receives preimage, updates commitment, passes it back.`}
              </p>
              <div className="mt-3 text-xs text-dark-500">
                The preimage travels backward, settling HTLCs at each hop
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex justify-center">
        <button
          onClick={nextStep}
          disabled={isAnimating || step >= maxSteps}
          className="px-6 py-2 bg-amber-500 hover:bg-amber-400 disabled:bg-dark-700 disabled:text-dark-500 text-dark-900 font-medium rounded-lg transition-colors"
        >
          {step >= maxSteps ? '✓ Payment Complete' : 'Next Step →'}
        </button>
      </div>

      {/* Sphinx Construction Note */}
      <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
        <div className="text-purple-400 text-sm font-semibold mb-1">🔐 Sphinx Packet Construction</div>
        <p className="text-dark-300 text-sm">
          The onion uses Sphinx construction: each layer is encrypted with a shared secret derived via ECDH.
          The packet stays a constant 1366 bytes - each hop strips their layer and adds padding.
        </p>
      </div>
    </div>
  );
}

export default OnionRoutingVisualizer;
