import { useState } from 'react';
import { motion } from 'framer-motion';

type ChannelState =
  | 'initial'
  | 'open_sent'
  | 'accept_received'
  | 'funding_created'
  | 'funding_signed'
  | 'funding_broadcast'
  | 'awaiting_confirmations'
  | 'channel_ready'
  | 'operational'
  | 'shutdown_sent'
  | 'closing'
  | 'closed';

interface StateInfo {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  messages?: string[];
}

const stateInfo: Record<ChannelState, StateInfo> = {
  initial: {
    name: 'Initial',
    description: 'No channel exists. Either party can initiate opening.',
    color: 'text-dark-400',
    bgColor: 'bg-dark-700',
  },
  open_sent: {
    name: 'Open Sent',
    description: 'Funder has sent open_channel message.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    messages: ['open_channel (type 32)'],
  },
  accept_received: {
    name: 'Accept Received',
    description: 'Fundee has accepted with accept_channel.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    messages: ['accept_channel (type 33)'],
  },
  funding_created: {
    name: 'Funding Created',
    description: 'Funder has created funding tx and sent signature.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    messages: ['funding_created (type 34)'],
  },
  funding_signed: {
    name: 'Funding Signed',
    description: 'Fundee has returned their signature.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    messages: ['funding_signed (type 35)'],
  },
  funding_broadcast: {
    name: 'Funding Broadcast',
    description: 'Funding transaction broadcast to Bitcoin network.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
    messages: ['Bitcoin TX'],
  },
  awaiting_confirmations: {
    name: 'Awaiting Confirmations',
    description: 'Waiting for minimum_depth confirmations.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
  },
  channel_ready: {
    name: 'Channel Ready',
    description: 'Both parties have sent channel_ready.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    messages: ['channel_ready (type 36)'],
  },
  operational: {
    name: 'Operational',
    description: 'Channel is active and can route payments.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    messages: ['update_add_htlc', 'commitment_signed', 'revoke_and_ack'],
  },
  shutdown_sent: {
    name: 'Shutdown Initiated',
    description: 'One party has sent shutdown message.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    messages: ['shutdown (type 38)'],
  },
  closing: {
    name: 'Closing',
    description: 'Negotiating closing transaction.',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    messages: ['closing_signed (type 39)'],
  },
  closed: {
    name: 'Closed',
    description: 'Channel is closed. Funds returned on-chain.',
    color: 'text-dark-400',
    bgColor: 'bg-dark-700',
  },
};

const transitions: { from: ChannelState; to: ChannelState; label: string }[] = [
  { from: 'initial', to: 'open_sent', label: 'open_channel' },
  { from: 'open_sent', to: 'accept_received', label: 'accept_channel' },
  { from: 'accept_received', to: 'funding_created', label: 'funding_created' },
  { from: 'funding_created', to: 'funding_signed', label: 'funding_signed' },
  { from: 'funding_signed', to: 'funding_broadcast', label: 'broadcast' },
  { from: 'funding_broadcast', to: 'awaiting_confirmations', label: 'wait' },
  { from: 'awaiting_confirmations', to: 'channel_ready', label: 'channel_ready' },
  { from: 'channel_ready', to: 'operational', label: 'both ready' },
  { from: 'operational', to: 'shutdown_sent', label: 'shutdown' },
  { from: 'shutdown_sent', to: 'closing', label: 'mutual close' },
  { from: 'closing', to: 'closed', label: 'closing_signed' },
];

const stateOrder: ChannelState[] = [
  'initial', 'open_sent', 'accept_received', 'funding_created',
  'funding_signed', 'funding_broadcast', 'awaiting_confirmations',
  'channel_ready', 'operational', 'shutdown_sent', 'closing', 'closed'
];

export function ChannelStateMachine({ className = '' }: { className?: string }) {
  const [currentState, setCurrentState] = useState<ChannelState>('initial');
  const [confirmations, setConfirmations] = useState(0);
  const [minDepth] = useState(3);

  const currentInfo = stateInfo[currentState];
  const currentIndex = stateOrder.indexOf(currentState);

  const nextState = () => {
    if (currentState === 'awaiting_confirmations') {
      if (confirmations < minDepth - 1) {
        setConfirmations(c => c + 1);
        return;
      }
    }

    const transition = transitions.find(t => t.from === currentState);
    if (transition) {
      setCurrentState(transition.to);
      if (transition.to !== 'awaiting_confirmations') {
        setConfirmations(0);
      }
    }
  };

  const prevState = () => {
    if (currentState === 'awaiting_confirmations' && confirmations > 0) {
      setConfirmations(c => c - 1);
      return;
    }

    const prevTransition = transitions.find(t => t.to === currentState);
    if (prevTransition) {
      setCurrentState(prevTransition.from);
      setConfirmations(0);
    }
  };

  const reset = () => {
    setCurrentState('initial');
    setConfirmations(0);
  };

  const canGoNext = currentState !== 'closed';
  const canGoPrev = currentState !== 'initial';

  return (
    <div className={`bg-dark-900 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark-100">Channel State Machine</h3>
        <button
          onClick={reset}
          className="px-3 py-1 text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>

      {/* State Timeline */}
      <div className="relative mb-8 overflow-x-auto pb-4">
        <div className="flex items-center min-w-max">
          {stateOrder.map((state, i) => {
            const info = stateInfo[state];
            const isActive = state === currentState;
            const isPast = i < currentIndex;

            return (
              <div key={state} className="flex items-center">
                <motion.div
                  className={`relative flex flex-col items-center ${isActive ? 'scale-110' : ''}`}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isActive ? `${info.bgColor} ${info.color} ring-2 ring-offset-2 ring-offset-dark-900 ring-current` :
                      isPast ? 'bg-green-500/30 text-green-400' :
                      'bg-dark-700 text-dark-500'
                    }`}
                  >
                    {isPast ? '✓' : i + 1}
                  </div>
                  <span className={`mt-2 text-xs whitespace-nowrap ${
                    isActive ? info.color : isPast ? 'text-dark-400' : 'text-dark-600'
                  }`}>
                    {info.name}
                  </span>
                </motion.div>
                {i < stateOrder.length - 1 && (
                  <div className={`w-8 h-0.5 mx-1 ${
                    i < currentIndex ? 'bg-green-500/50' : 'bg-dark-700'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Current State Card */}
      <motion.div
        key={currentState}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl p-6 mb-6 ${currentInfo.bgColor}`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h4 className={`text-2xl font-bold ${currentInfo.color}`}>
              {currentInfo.name}
            </h4>
            <p className="text-dark-300 mt-2">{currentInfo.description}</p>
          </div>
          {currentState === 'awaiting_confirmations' && (
            <div className="text-right">
              <div className="text-3xl font-bold text-amber-400">
                {confirmations}/{minDepth}
              </div>
              <div className="text-xs text-dark-400">confirmations</div>
            </div>
          )}
        </div>

        {currentInfo.messages && (
          <div className="mt-4 flex flex-wrap gap-2">
            {currentInfo.messages.map((msg, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-dark-800/50 text-dark-300 text-xs rounded font-mono"
              >
                {msg}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevState}
          disabled={!canGoPrev}
          className="px-4 py-2 bg-dark-700 hover:bg-dark-600 disabled:opacity-50 disabled:cursor-not-allowed text-dark-300 rounded-lg transition-colors flex items-center gap-2"
        >
          ← Previous
        </button>

        <div className="text-center">
          {currentState === 'operational' && (
            <div className="text-xs text-green-400 animate-pulse">
              ⚡ Channel Active - Routing Payments
            </div>
          )}
        </div>

        <button
          onClick={nextState}
          disabled={!canGoNext}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-dark-900 font-medium rounded-lg transition-colors flex items-center gap-2"
        >
          {currentState === 'awaiting_confirmations'
            ? `Add Block (${confirmations + 1}/${minDepth})`
            : 'Next State →'}
        </button>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-dark-800">
        <div className="grid grid-cols-4 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500/30"></span>
            <span className="text-dark-400">Negotiation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500/30"></span>
            <span className="text-dark-400">Funding</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500/30"></span>
            <span className="text-dark-400">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/30"></span>
            <span className="text-dark-400">Closing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelStateMachine;
