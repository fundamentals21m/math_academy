import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HandshakeState {
  act: number;
  step: number;
  initiatorEphemeral: string;
  responderEphemeral: string;
  sharedSecrets: string[];
  messages: { from: string; to: string; content: string; bytes: number }[];
  chainingKey: string;
  handshakeHash: string;
}

const initialState: HandshakeState = {
  act: 0,
  step: 0,
  initiatorEphemeral: '',
  responderEphemeral: '',
  sharedSecrets: [],
  messages: [],
  chainingKey: 'ck₀',
  handshakeHash: 'h₀',
};

// Simulated key generation
const generateKey = () => {
  const chars = '0123456789abcdef';
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * 16)]).join('') + '...';
};

export function HandshakeSimulator({ className = '' }: { className?: string }) {
  const [state, setState] = useState<HandshakeState>(initialState);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = useMemo(() => [
    // Act 1 Steps
    { act: 1, title: 'Generate Ephemeral Key', description: 'Initiator generates ephemeral key pair (e, e.pub)', actor: 'initiator' },
    { act: 1, title: 'ECDH with Responder Static', description: 'Compute es = ECDH(e, rs) using responder\'s known static key', actor: 'initiator' },
    { act: 1, title: 'Derive Encryption Key', description: 'Use HKDF to derive encryption key from shared secret', actor: 'initiator' },
    { act: 1, title: 'Send Act One', description: 'Send: version (1B) + e.pub (33B) + tag (16B) = 50 bytes', actor: 'initiator' },
    // Act 2 Steps
    { act: 2, title: 'Generate Ephemeral Key', description: 'Responder generates ephemeral key pair (e, e.pub)', actor: 'responder' },
    { act: 2, title: 'ECDH: ee', description: 'Compute ee = ECDH(e, re) with initiator\'s ephemeral', actor: 'responder' },
    { act: 2, title: 'ECDH: es', description: 'Compute es = ECDH(s, re) using own static key', actor: 'responder' },
    { act: 2, title: 'Send Act Two', description: 'Send: version (1B) + e.pub (33B) + tag (16B) = 50 bytes', actor: 'responder' },
    // Act 3 Steps
    { act: 3, title: 'ECDH: ee', description: 'Compute ee = ECDH(e, re) with responder\'s ephemeral', actor: 'initiator' },
    { act: 3, title: 'ECDH: se', description: 'Compute se = ECDH(s, re) using own static key', actor: 'initiator' },
    { act: 3, title: 'Encrypt Static Key', description: 'Encrypt initiator\'s static public key', actor: 'initiator' },
    { act: 3, title: 'Send Act Three', description: 'Send: version (1B) + encrypted key (49B) + tag (16B) = 66 bytes', actor: 'initiator' },
    // Complete
    { act: 4, title: 'Handshake Complete', description: 'Both parties derive symmetric send/receive keys', actor: 'both' },
  ], []);

  const currentStep = steps[state.step] || steps[0];

  const nextStep = async () => {
    if (isAnimating || state.step >= steps.length) return;
    setIsAnimating(true);

    const step = steps[state.step];
    const newState = { ...state };

    // Simulate state changes based on step
    if (step.act === 1 && step.title.includes('Generate')) {
      newState.initiatorEphemeral = generateKey();
    } else if (step.act === 1 && step.title.includes('ECDH')) {
      newState.sharedSecrets = [...state.sharedSecrets, 'es₁'];
    } else if (step.act === 1 && step.title.includes('Send')) {
      newState.messages = [...state.messages, { from: 'Initiator', to: 'Responder', content: 'Act One', bytes: 50 }];
    } else if (step.act === 2 && step.title.includes('Generate')) {
      newState.responderEphemeral = generateKey();
    } else if (step.act === 2 && step.title.includes('ee')) {
      newState.sharedSecrets = [...state.sharedSecrets, 'ee'];
    } else if (step.act === 2 && step.title.includes('es')) {
      newState.sharedSecrets = [...state.sharedSecrets, 'es₂'];
    } else if (step.act === 2 && step.title.includes('Send')) {
      newState.messages = [...state.messages, { from: 'Responder', to: 'Initiator', content: 'Act Two', bytes: 50 }];
    } else if (step.act === 3 && step.title.includes('Send')) {
      newState.messages = [...state.messages, { from: 'Initiator', to: 'Responder', content: 'Act Three', bytes: 66 }];
    }

    newState.act = step.act;
    newState.step = state.step + 1;
    newState.chainingKey = `ck${state.step + 1}`;
    newState.handshakeHash = `h${state.step + 1}`;

    await new Promise(resolve => setTimeout(resolve, 300));
    setState(newState);
    setIsAnimating(false);
  };

  const reset = () => {
    setState(initialState);
  };

  const progress = (state.step / steps.length) * 100;

  return (
    <div className={`bg-dark-900 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark-100">Noise_XK Handshake Simulator</h3>
        <div className="flex gap-2">
          <button
            onClick={reset}
            className="px-3 py-1 text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg transition-colors"
          >
            Reset
          </button>
          <button
            onClick={nextStep}
            disabled={isAnimating || state.step >= steps.length}
            className="px-4 py-1 text-sm bg-amber-500 hover:bg-amber-400 disabled:bg-dark-700 disabled:text-dark-500 text-dark-900 font-medium rounded-lg transition-colors"
          >
            {state.step >= steps.length ? 'Complete' : 'Next Step'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-dark-800 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Current Step Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state.step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-dark-800 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-1 text-xs font-bold rounded ${
              currentStep.act === 1 ? 'bg-blue-500/20 text-blue-400' :
              currentStep.act === 2 ? 'bg-green-500/20 text-green-400' :
              currentStep.act === 3 ? 'bg-purple-500/20 text-purple-400' :
              'bg-amber-500/20 text-amber-400'
            }`}>
              {currentStep.act === 4 ? 'COMPLETE' : `ACT ${currentStep.act}`}
            </span>
            <span className="text-dark-100 font-semibold">{currentStep.title}</span>
          </div>
          <p className="text-dark-400 text-sm">{currentStep.description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Visual Representation */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Initiator */}
        <div className="bg-dark-800 rounded-xl p-4">
          <div className="text-center mb-3">
            <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center text-2xl mb-2">
              👤
            </div>
            <span className="text-blue-400 font-semibold text-sm">Initiator</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="bg-dark-700 rounded p-2">
              <span className="text-dark-500">Ephemeral:</span>
              <span className="text-dark-300 ml-1 font-mono">{state.initiatorEphemeral || '—'}</span>
            </div>
            <div className="bg-dark-700 rounded p-2">
              <span className="text-dark-500">Static:</span>
              <span className="text-dark-300 ml-1 font-mono">known</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-dark-800 rounded-xl p-4 flex flex-col">
          <span className="text-dark-500 text-xs text-center mb-3">Messages</span>
          <div className="flex-1 space-y-2 overflow-y-auto">
            {state.messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center text-xs ${
                  msg.from === 'Initiator' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`px-2 py-1 rounded ${
                  msg.from === 'Initiator' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  {msg.content} ({msg.bytes}B) →
                </div>
              </motion.div>
            ))}
            {state.messages.length === 0 && (
              <div className="text-dark-600 text-center text-xs">No messages yet</div>
            )}
          </div>
        </div>

        {/* Responder */}
        <div className="bg-dark-800 rounded-xl p-4">
          <div className="text-center mb-3">
            <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center text-2xl mb-2">
              🖥️
            </div>
            <span className="text-green-400 font-semibold text-sm">Responder</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="bg-dark-700 rounded p-2">
              <span className="text-dark-500">Ephemeral:</span>
              <span className="text-dark-300 ml-1 font-mono">{state.responderEphemeral || '—'}</span>
            </div>
            <div className="bg-dark-700 rounded p-2">
              <span className="text-dark-500">Static:</span>
              <span className="text-dark-300 ml-1 font-mono">known to init</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shared State */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-dark-800 rounded-xl p-4">
          <span className="text-dark-500 text-xs">Shared Secrets</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {state.sharedSecrets.length > 0 ? (
              state.sharedSecrets.map((secret, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded font-mono"
                >
                  {secret}
                </motion.span>
              ))
            ) : (
              <span className="text-dark-600 text-xs">None yet</span>
            )}
          </div>
        </div>
        <div className="bg-dark-800 rounded-xl p-4">
          <div className="flex justify-between text-xs">
            <div>
              <span className="text-dark-500">Chaining Key:</span>
              <span className="text-dark-300 ml-2 font-mono">{state.chainingKey}</span>
            </div>
            <div>
              <span className="text-dark-500">Hash:</span>
              <span className="text-dark-300 ml-2 font-mono">{state.handshakeHash}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandshakeSimulator;
