import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HTLC {
  id: number;
  amount: number;
  state: 'pending' | 'committed' | 'fulfilled' | 'failed';
  direction: 'offered' | 'received';
}

interface ChannelState {
  aliceBalance: number;
  bobBalance: number;
  htlcs: HTLC[];
  commitmentNumber: number;
  pendingChanges: string[];
}

type MessageType =
  | 'update_add_htlc'
  | 'commitment_signed'
  | 'revoke_and_ack'
  | 'update_fulfill_htlc'
  | 'update_fail_htlc';

interface Message {
  type: MessageType;
  from: 'alice' | 'bob';
  description: string;
}

const initialState: ChannelState = {
  aliceBalance: 500000,
  bobBalance: 500000,
  htlcs: [],
  commitmentNumber: 0,
  pendingChanges: [],
};

export function HTLCFlowSimulator({ className = '' }: { className?: string }) {
  const [state, setState] = useState<ChannelState>(initialState);
  const [messages, setMessages] = useState<Message[]>([]);
  const [phase, setPhase] = useState<'idle' | 'adding' | 'committing' | 'revoking' | 'fulfilling'>('idle');
  const [nextHtlcId, setNextHtlcId] = useState(1);

  const addHtlc = () => {
    if (phase !== 'idle' || state.aliceBalance < 50000) return;

    const htlc: HTLC = {
      id: nextHtlcId,
      amount: 50000,
      state: 'pending',
      direction: 'offered',
    };

    setState(prev => ({
      ...prev,
      htlcs: [...prev.htlcs, htlc],
      pendingChanges: [...prev.pendingChanges, `Add HTLC #${htlc.id}`],
    }));

    setMessages(prev => [...prev, {
      type: 'update_add_htlc',
      from: 'alice',
      description: `Alice offers HTLC #${htlc.id} for ${htlc.amount.toLocaleString()} sats`,
    }]);

    setNextHtlcId(id => id + 1);
    setPhase('adding');
  };

  const signCommitment = () => {
    if (phase !== 'adding' && phase !== 'idle') return;

    const pendingHtlcs = state.htlcs.filter(h => h.state === 'pending');
    if (pendingHtlcs.length === 0 && state.pendingChanges.length === 0) return;

    setMessages(prev => [...prev, {
      type: 'commitment_signed',
      from: 'alice',
      description: 'Alice signs new commitment including all pending changes',
    }]);

    setPhase('committing');
  };

  const revokeAndAck = () => {
    if (phase !== 'committing') return;

    setState(prev => ({
      ...prev,
      htlcs: prev.htlcs.map(h => h.state === 'pending' ? { ...h, state: 'committed' as const } : h),
      aliceBalance: prev.aliceBalance - prev.htlcs.filter(h => h.state === 'pending').reduce((sum, h) => sum + h.amount, 0),
      commitmentNumber: prev.commitmentNumber + 1,
      pendingChanges: [],
    }));

    setMessages(prev => [...prev, {
      type: 'revoke_and_ack',
      from: 'bob',
      description: `Bob revokes old state #${state.commitmentNumber} and acknowledges new commitment`,
    }]);

    setPhase('revoking');

    // Auto-advance to idle after a moment
    setTimeout(() => setPhase('idle'), 500);
  };

  const fulfillHtlc = (htlcId: number) => {
    if (phase !== 'idle') return;

    const htlc = state.htlcs.find(h => h.id === htlcId && h.state === 'committed');
    if (!htlc) return;

    setState(prev => ({
      ...prev,
      htlcs: prev.htlcs.map(h => h.id === htlcId ? { ...h, state: 'fulfilled' as const } : h),
      bobBalance: prev.bobBalance + htlc.amount,
      pendingChanges: [...prev.pendingChanges, `Fulfill HTLC #${htlcId}`],
    }));

    setMessages(prev => [...prev, {
      type: 'update_fulfill_htlc',
      from: 'bob',
      description: `Bob reveals preimage for HTLC #${htlcId}, claiming ${htlc.amount.toLocaleString()} sats`,
    }]);

    setPhase('fulfilling');
    setTimeout(() => setPhase('idle'), 500);
  };

  const failHtlc = (htlcId: number) => {
    if (phase !== 'idle') return;

    const htlc = state.htlcs.find(h => h.id === htlcId && h.state === 'committed');
    if (!htlc) return;

    setState(prev => ({
      ...prev,
      htlcs: prev.htlcs.map(h => h.id === htlcId ? { ...h, state: 'failed' as const } : h),
      aliceBalance: prev.aliceBalance + htlc.amount,
      pendingChanges: [...prev.pendingChanges, `Fail HTLC #${htlcId}`],
    }));

    setMessages(prev => [...prev, {
      type: 'update_fail_htlc',
      from: 'bob',
      description: `Bob fails HTLC #${htlcId}, returning ${htlc.amount.toLocaleString()} sats to Alice`,
    }]);
  };

  const reset = () => {
    setState(initialState);
    setMessages([]);
    setPhase('idle');
    setNextHtlcId(1);
  };

  const committedHtlcs = state.htlcs.filter(h => h.state === 'committed');
  const pendingHtlcs = state.htlcs.filter(h => h.state === 'pending');
  const inFlightAmount = committedHtlcs.reduce((sum, h) => sum + h.amount, 0);

  return (
    <div className={`bg-dark-900 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark-100">HTLC Flow Simulator</h3>
        <button
          onClick={reset}
          className="px-3 py-1 text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Channel Visualization */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Alice */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <div className="text-center mb-3">
            <div className="text-2xl mb-1">👤</div>
            <span className="text-blue-400 font-semibold">Alice</span>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-dark-100">
              {state.aliceBalance.toLocaleString()}
            </div>
            <div className="text-dark-500 text-xs">sats</div>
          </div>
        </div>

        {/* Channel */}
        <div className="bg-dark-800 rounded-xl p-4">
          <div className="text-center text-dark-400 text-xs mb-2">Channel State</div>
          <div className="text-center">
            <div className="text-lg font-bold text-amber-400">
              #{state.commitmentNumber}
            </div>
            <div className="text-dark-500 text-xs">commitment</div>
          </div>
          <div className="mt-3 text-center">
            <div className="text-sm text-dark-300">{inFlightAmount.toLocaleString()} sats</div>
            <div className="text-dark-500 text-xs">in-flight</div>
          </div>
        </div>

        {/* Bob */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <div className="text-center mb-3">
            <div className="text-2xl mb-1">🖥️</div>
            <span className="text-green-400 font-semibold">Bob</span>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-dark-100">
              {state.bobBalance.toLocaleString()}
            </div>
            <div className="text-dark-500 text-xs">sats</div>
          </div>
        </div>
      </div>

      {/* Active HTLCs */}
      <div className="bg-dark-800 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-dark-300 font-semibold">Active HTLCs</h4>
          <button
            onClick={addHtlc}
            disabled={phase !== 'idle' || state.aliceBalance < 50000}
            className="px-3 py-1 text-xs bg-blue-500/20 hover:bg-blue-500/30 disabled:opacity-50 text-blue-400 rounded-lg transition-colors"
          >
            + Add HTLC (50k sats)
          </button>
        </div>

        <div className="space-y-2">
          {state.htlcs.length === 0 ? (
            <div className="text-dark-500 text-sm text-center py-4">
              No active HTLCs. Add one to start the flow.
            </div>
          ) : (
            state.htlcs.map(htlc => (
              <motion.div
                key={htlc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  htlc.state === 'pending' ? 'bg-amber-500/20' :
                  htlc.state === 'committed' ? 'bg-purple-500/20' :
                  htlc.state === 'fulfilled' ? 'bg-green-500/20' :
                  'bg-red-500/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-mono ${
                    htlc.state === 'pending' ? 'text-amber-400' :
                    htlc.state === 'committed' ? 'text-purple-400' :
                    htlc.state === 'fulfilled' ? 'text-green-400' :
                    'text-red-400'
                  }`}>
                    HTLC #{htlc.id}
                  </span>
                  <span className="text-dark-300 text-sm">
                    {htlc.amount.toLocaleString()} sats
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    htlc.state === 'pending' ? 'bg-amber-500/30 text-amber-300' :
                    htlc.state === 'committed' ? 'bg-purple-500/30 text-purple-300' :
                    htlc.state === 'fulfilled' ? 'bg-green-500/30 text-green-300' :
                    'bg-red-500/30 text-red-300'
                  }`}>
                    {htlc.state}
                  </span>
                </div>
                {htlc.state === 'committed' && phase === 'idle' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => fulfillHtlc(htlc.id)}
                      className="px-2 py-1 text-xs bg-green-500/30 hover:bg-green-500/40 text-green-400 rounded transition-colors"
                    >
                      Fulfill
                    </button>
                    <button
                      onClick={() => failHtlc(htlc.id)}
                      className="px-2 py-1 text-xs bg-red-500/30 hover:bg-red-500/40 text-red-400 rounded transition-colors"
                    >
                      Fail
                    </button>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={signCommitment}
          disabled={pendingHtlcs.length === 0 && state.pendingChanges.length === 0}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-400 disabled:bg-dark-700 disabled:text-dark-500 text-white font-medium rounded-lg transition-colors"
        >
          Sign Commitment
        </button>
        <button
          onClick={revokeAndAck}
          disabled={phase !== 'committing'}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:bg-dark-700 disabled:text-dark-500 text-dark-900 font-medium rounded-lg transition-colors"
        >
          Revoke & Ack
        </button>
      </div>

      {/* Message Log */}
      <div className="bg-dark-800 rounded-xl p-4">
        <h4 className="text-dark-300 font-semibold mb-3">Message Log</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          <AnimatePresence>
            {messages.length === 0 ? (
              <div className="text-dark-500 text-sm text-center py-2">
                Messages will appear here...
              </div>
            ) : (
              messages.slice(-10).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 p-2 rounded ${
                    msg.from === 'alice' ? 'bg-blue-500/10' : 'bg-green-500/10'
                  }`}
                >
                  <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                    msg.type === 'update_add_htlc' ? 'bg-amber-500/30 text-amber-400' :
                    msg.type === 'commitment_signed' ? 'bg-purple-500/30 text-purple-400' :
                    msg.type === 'revoke_and_ack' ? 'bg-blue-500/30 text-blue-400' :
                    msg.type === 'update_fulfill_htlc' ? 'bg-green-500/30 text-green-400' :
                    'bg-red-500/30 text-red-400'
                  }`}>
                    {msg.type}
                  </span>
                  <span className="text-dark-300 text-sm flex-1">{msg.description}</span>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
        <div className="text-purple-400 text-sm font-semibold mb-1">🔄 Update Protocol</div>
        <p className="text-dark-300 text-sm">
          1. <strong>update_add_htlc</strong>: Propose HTLC →
          2. <strong>commitment_signed</strong>: Sign new state →
          3. <strong>revoke_and_ack</strong>: Revoke old, ack new →
          4. <strong>update_fulfill/fail_htlc</strong>: Resolve HTLC
        </p>
      </div>
    </div>
  );
}

export default HTLCFlowSimulator;
