import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HTLC {
  id: number;
  amount: number;
  direction: 'offered' | 'received';
  expiry: number;
}

interface CommitmentConfig {
  fundingAmount: number;
  aliceBalance: number;
  bobBalance: number;
  htlcs: HTLC[];
  feeRate: number;
  dustLimit: number;
  toSelfDelay: number;
}

const defaultConfig: CommitmentConfig = {
  fundingAmount: 1000000,
  aliceBalance: 600000,
  bobBalance: 400000,
  htlcs: [],
  feeRate: 5,
  dustLimit: 546,
  toSelfDelay: 144,
};

export function CommitmentTxBuilder({ className = '' }: { className?: string }) {
  const [config, setConfig] = useState<CommitmentConfig>(defaultConfig);
  const [perspective, setPerspective] = useState<'alice' | 'bob'>('alice');
  const [showDetails, setShowDetails] = useState(false);
  const [nextHtlcId, setNextHtlcId] = useState(1);

  const baseWeight = 724;
  const htlcWeight = 172;
  const totalWeight = baseWeight + config.htlcs.length * htlcWeight;
  const fee = Math.floor((config.feeRate * totalWeight) / 1000);

  const outputs = useMemo(() => {
    const result: { name: string; amount: number; script: string; color: string; delayed: boolean }[] = [];
    const isAlice = perspective === 'alice';

    // to_local (broadcaster's output - delayed)
    const localAmount = isAlice ? config.aliceBalance - fee : config.bobBalance - fee;
    if (localAmount > config.dustLimit) {
      result.push({
        name: 'to_local',
        amount: localAmount,
        script: `OP_IF <revocation_key> OP_ELSE ${config.toSelfDelay} OP_CSV <local_delayed_key> OP_ENDIF OP_CHECKSIG`,
        color: isAlice ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400',
        delayed: true,
      });
    }

    // to_remote (non-broadcaster's output - immediate)
    const remoteAmount = isAlice ? config.bobBalance : config.aliceBalance;
    if (remoteAmount > config.dustLimit) {
      result.push({
        name: 'to_remote',
        amount: remoteAmount,
        script: 'OP_0 <remote_pubkey_hash> (P2WPKH)',
        color: isAlice ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400',
        delayed: false,
      });
    }

    // HTLC outputs
    config.htlcs.forEach(htlc => {
      if (htlc.amount > config.dustLimit) {
        const isOffered = (isAlice && htlc.direction === 'offered') || (!isAlice && htlc.direction === 'received');
        result.push({
          name: isOffered ? `HTLC Offered #${htlc.id}` : `HTLC Received #${htlc.id}`,
          amount: htlc.amount,
          script: isOffered
            ? `<revocation> OR (<remote_htlc> AND <preimage>) OR (<local_htlc> AND CLTV ${htlc.expiry})`
            : `<revocation> OR (<remote_htlc> AND CLTV ${htlc.expiry}) OR (<local_htlc> AND <preimage>)`,
          color: 'bg-amber-500/20 text-amber-400',
          delayed: false,
        });
      }
    });

    // Sort by amount (BIP-69 variant)
    return result.sort((a, b) => a.amount - b.amount);
  }, [config, perspective, fee]);

  const addHtlc = (direction: 'offered' | 'received') => {
    const amount = 50000;
    setConfig(prev => ({
      ...prev,
      htlcs: [...prev.htlcs, { id: nextHtlcId, amount, direction, expiry: 700000 + nextHtlcId * 100 }],
    }));
    setNextHtlcId(id => id + 1);
  };

  const removeHtlc = (id: number) => {
    setConfig(prev => ({
      ...prev,
      htlcs: prev.htlcs.filter(h => h.id !== id),
    }));
  };

  const reset = () => {
    setConfig(defaultConfig);
    setNextHtlcId(1);
  };

  return (
    <div className={`bg-dark-900 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-dark-100">Commitment Transaction Builder</h3>
        <button
          onClick={reset}
          className="px-3 py-1 text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Perspective Toggle */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-dark-400 text-sm">Viewing:</span>
        <div className="flex bg-dark-800 rounded-lg p-1">
          <button
            onClick={() => setPerspective('alice')}
            className={`px-4 py-1 text-sm rounded-md transition-colors ${
              perspective === 'alice'
                ? 'bg-blue-500/20 text-blue-400'
                : 'text-dark-400 hover:text-dark-200'
            }`}
          >
            Alice&apos;s Commitment
          </button>
          <button
            onClick={() => setPerspective('bob')}
            className={`px-4 py-1 text-sm rounded-md transition-colors ${
              perspective === 'bob'
                ? 'bg-green-500/20 text-green-400'
                : 'text-dark-400 hover:text-dark-200'
            }`}
          >
            Bob&apos;s Commitment
          </button>
        </div>
      </div>

      {/* Transaction Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Input */}
        <div className="bg-dark-800 rounded-xl p-4">
          <h4 className="text-dark-300 font-semibold mb-3">Input</h4>
          <div className="bg-dark-700 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-purple-400 font-mono text-sm">Funding Output</span>
              <span className="text-dark-200 font-mono">
                {(config.fundingAmount / 100000000).toFixed(8)} BTC
              </span>
            </div>
            <div className="text-xs text-dark-500 mt-1">
              2-of-2 multisig (Alice + Bob)
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="bg-dark-800 rounded-xl p-4">
          <h4 className="text-dark-300 font-semibold mb-3">Outputs ({outputs.length})</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            <AnimatePresence>
              {outputs.map((output, i) => (
                <motion.div
                  key={output.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-lg p-3 ${output.color}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">{output.name}</span>
                      {output.delayed && (
                        <span className="px-1.5 py-0.5 bg-dark-800 text-xs rounded">
                          ⏳ {config.toSelfDelay} blocks
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-sm">
                      {(output.amount / 100000000).toFixed(8)}
                    </span>
                  </div>
                  {showDetails && (
                    <div className="mt-2 text-xs opacity-70 font-mono break-all">
                      {output.script}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* HTLC Management */}
      <div className="bg-dark-800 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-dark-300 font-semibold">Active HTLCs</h4>
          <div className="flex gap-2">
            <button
              onClick={() => addHtlc('offered')}
              className="px-3 py-1 text-xs bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors"
            >
              + Offered
            </button>
            <button
              onClick={() => addHtlc('received')}
              className="px-3 py-1 text-xs bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors"
            >
              + Received
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {config.htlcs.length === 0 ? (
            <span className="text-dark-500 text-sm">No HTLCs - channel in simple state</span>
          ) : (
            config.htlcs.map(htlc => (
              <motion.div
                key={htlc.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                  htlc.direction === 'offered' ? 'bg-blue-500/20' : 'bg-green-500/20'
                }`}
              >
                <span className={`text-sm ${htlc.direction === 'offered' ? 'text-blue-400' : 'text-green-400'}`}>
                  #{htlc.id}: {(htlc.amount / 1000).toFixed(0)}k sats
                </span>
                <button
                  onClick={() => removeHtlc(htlc.id)}
                  className="text-dark-500 hover:text-red-400 transition-colors"
                >
                  ×
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Fee Info */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-3 text-center">
          <div className="text-dark-500 text-xs">Weight</div>
          <div className="text-dark-200 font-mono">{totalWeight} WU</div>
        </div>
        <div className="bg-dark-800 rounded-lg p-3 text-center">
          <div className="text-dark-500 text-xs">Fee Rate</div>
          <div className="text-dark-200 font-mono">{config.feeRate} sat/vB</div>
        </div>
        <div className="bg-dark-800 rounded-lg p-3 text-center">
          <div className="text-dark-500 text-xs">Total Fee</div>
          <div className="text-amber-400 font-mono">{fee} sats</div>
        </div>
      </div>

      {/* Toggle Details */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full py-2 text-sm text-dark-400 hover:text-dark-200 transition-colors"
      >
        {showDetails ? '▲ Hide Scripts' : '▼ Show Scripts'}
      </button>

      {/* Key Insight */}
      <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
        <div className="text-amber-400 text-sm font-semibold mb-1">💡 Asymmetry</div>
        <p className="text-dark-300 text-sm">
          {perspective === 'alice'
            ? "In Alice's commitment, her output is delayed (to_local). If she broadcasts this, Bob gets his funds immediately while Alice waits."
            : "In Bob's commitment, his output is delayed (to_local). If he broadcasts this, Alice gets her funds immediately while Bob waits."}
        </p>
      </div>
    </div>
  );
}

export default CommitmentTxBuilder;
