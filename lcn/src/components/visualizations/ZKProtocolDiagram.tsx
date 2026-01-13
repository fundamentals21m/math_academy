import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Property = 'completeness' | 'soundness' | 'zero-knowledge';
type Scenario = 'honest' | 'cheating' | 'simulator';

/**
 * Interactive diagram showing Prover-Verifier interaction with the three ZK properties.
 */
export function ZKProtocolDiagram({ className = '' }: Props) {
  const [activeProperty, setActiveProperty] = useState<Property>('completeness');
  const [scenario, setScenario] = useState<Scenario>('honest');
  const [phase, setPhase] = useState(0);

  const properties: Record<Property, { color: string; description: string }> = {
    completeness: {
      color: '#10b981',
      description: 'If the prover knows a valid witness, they can always convince the verifier.',
    },
    soundness: {
      color: '#ef4444',
      description: 'Without a valid witness, even a cheating prover cannot convince the verifier.',
    },
    'zero-knowledge': {
      color: '#8b5cf6',
      description: 'The verifier learns nothing beyond the validity of the statement.',
    },
  };

  const scenarios: Record<Scenario, { proverLabel: string; hasWitness: boolean; outcome: 'accept' | 'reject' | 'indistinguishable' }> = {
    honest: { proverLabel: 'Honest Prover', hasWitness: true, outcome: 'accept' },
    cheating: { proverLabel: 'Cheating Prover', hasWitness: false, outcome: 'reject' },
    simulator: { proverLabel: 'Simulator', hasWitness: false, outcome: 'indistinguishable' },
  };

  const handlePropertyChange = (prop: Property) => {
    setActiveProperty(prop);
    setPhase(0);
    if (prop === 'completeness') setScenario('honest');
    else if (prop === 'soundness') setScenario('cheating');
    else setScenario('simulator');
  };

  // SVG dimensions
  const width = 500;
  const height = 350;
  const proverX = 100;
  const verifierX = 400;
  const topY = 80;
  const bottomY = 280;

  const currentScenario = scenarios[scenario];
  const currentColor = properties[activeProperty].color;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        Zero-Knowledge Protocol Properties
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        Explore the three essential properties of zero-knowledge arguments.
      </p>

      {/* Property selector */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {(Object.keys(properties) as Property[]).map((prop) => (
          <motion.button
            key={prop}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handlePropertyChange(prop)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${
              activeProperty === prop
                ? 'text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
            style={{
              backgroundColor: activeProperty === prop ? properties[prop].color : undefined,
            }}
          >
            {prop.replace('-', ' ')}
          </motion.button>
        ))}
      </div>

      {/* SVG Diagram */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto bg-dark-900/50 rounded-xl mb-4"
      >
        {/* Prover column */}
        <rect x={proverX - 50} y={topY - 30} width="100" height="40" rx="8" fill="#374151" />
        <text x={proverX} y={topY - 5} fill={currentColor} fontSize="12" fontWeight="bold" textAnchor="middle">
          {currentScenario.proverLabel}
        </text>

        {/* Prover icon */}
        <circle cx={proverX} cy={topY + 30} r="20" fill={currentColor} fillOpacity="0.2" stroke={currentColor} strokeWidth="2" />
        <text x={proverX} y={topY + 35} fill={currentColor} fontSize="16" fontWeight="bold" textAnchor="middle">
          P
        </text>

        {/* Witness indicator */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <rect x={proverX - 40} y={topY + 60} width="80" height="24" rx="4" fill={currentScenario.hasWitness ? '#10b98120' : '#ef444420'} stroke={currentScenario.hasWitness ? '#10b981' : '#ef4444'} strokeWidth="1" />
          <text x={proverX} y={topY + 76} fill={currentScenario.hasWitness ? '#10b981' : '#ef4444'} fontSize="10" textAnchor="middle">
            {currentScenario.hasWitness ? 'Has witness w' : 'No witness'}
          </text>
        </motion.g>

        {/* Verifier column */}
        <rect x={verifierX - 50} y={topY - 30} width="100" height="40" rx="8" fill="#374151" />
        <text x={verifierX} y={topY - 5} fill="#6b7280" fontSize="12" fontWeight="bold" textAnchor="middle">
          Verifier
        </text>

        {/* Verifier icon */}
        <circle cx={verifierX} cy={topY + 30} r="20" fill="#6b7280" fillOpacity="0.2" stroke="#6b7280" strokeWidth="2" />
        <text x={verifierX} y={topY + 35} fill="#9ca3af" fontSize="16" fontWeight="bold" textAnchor="middle">
          V
        </text>

        {/* Statement x */}
        <rect x={(proverX + verifierX) / 2 - 50} y={topY - 30} width="100" height="30" rx="6" fill="#1e293b" stroke="#4b5563" strokeWidth="1" />
        <text x={(proverX + verifierX) / 2} y={topY - 10} fill="#9ca3af" fontSize="11" textAnchor="middle">
          Statement x
        </text>

        {/* Protocol messages */}
        <g>
          {/* Message 1: Commitment */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 0 ? 1 : 0.3 }}
          >
            <line x1={proverX + 25} y1={topY + 80} x2={verifierX - 25} y2={topY + 100} stroke={currentColor} strokeWidth="2" markerEnd="url(#arrowProp)" />
            <rect x={(proverX + verifierX) / 2 - 30} y={topY + 75} width="60" height="20" rx="4" fill="#1e293b" />
            <text x={(proverX + verifierX) / 2} y={topY + 89} fill="#d1d5db" fontSize="10" textAnchor="middle">
              commit
            </text>
          </motion.g>

          {/* Message 2: Challenge */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0.3 }}
          >
            <line x1={verifierX - 25} y1={topY + 130} x2={proverX + 25} y2={topY + 150} stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowGray)" />
            <rect x={(proverX + verifierX) / 2 - 35} y={topY + 130} width="70" height="20" rx="4" fill="#1e293b" />
            <text x={(proverX + verifierX) / 2} y={topY + 144} fill="#9ca3af" fontSize="10" textAnchor="middle">
              challenge x
            </text>
          </motion.g>

          {/* Message 3: Response */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0.3 }}
          >
            <line x1={proverX + 25} y1={topY + 170} x2={verifierX - 25} y2={topY + 190} stroke={currentColor} strokeWidth="2" markerEnd="url(#arrowProp)" />
            <rect x={(proverX + verifierX) / 2 - 35} y={topY + 165} width="70" height="20" rx="4" fill="#1e293b" />
            <text x={(proverX + verifierX) / 2} y={topY + 179} fill="#d1d5db" fontSize="10" textAnchor="middle">
              response
            </text>
          </motion.g>
        </g>

        {/* Outcome */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <rect x={verifierX - 45} y={bottomY - 15} width="90" height="35" rx="8"
            fill={currentScenario.outcome === 'accept' ? '#10b98120' : currentScenario.outcome === 'reject' ? '#ef444420' : '#8b5cf620'}
            stroke={currentScenario.outcome === 'accept' ? '#10b981' : currentScenario.outcome === 'reject' ? '#ef4444' : '#8b5cf6'}
            strokeWidth="2"
          />
          <text x={verifierX} y={bottomY + 6}
            fill={currentScenario.outcome === 'accept' ? '#10b981' : currentScenario.outcome === 'reject' ? '#ef4444' : '#8b5cf6'}
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            {currentScenario.outcome === 'accept' ? 'ACCEPT ✓' : currentScenario.outcome === 'reject' ? 'REJECT ✗' : '≈ Real'}
          </text>
        </motion.g>

        {/* Simulator special visualization */}
        {scenario === 'simulator' && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <text x={proverX} y={bottomY + 10} fill="#8b5cf6" fontSize="10" textAnchor="middle">
              No witness needed!
            </text>
            <text x={proverX} y={bottomY + 25} fill="#6b7280" fontSize="9" textAnchor="middle">
              (gets verifier's randomness)
            </text>
          </motion.g>
        )}

        {/* Arrow markers */}
        <defs>
          <marker id="arrowProp" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={currentColor} />
          </marker>
          <marker id="arrowGray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
          </marker>
        </defs>
      </svg>

      {/* Phase controls */}
      <div className="flex gap-2 mb-4">
        {[0, 1, 2].map((p) => (
          <button
            key={p}
            onClick={() => setPhase(p)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${
              phase >= p
                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                : 'bg-dark-700 text-dark-500 border border-dark-600'
            }`}
          >
            {p === 0 ? '1. Commit' : p === 1 ? '2. Challenge' : '3. Response'}
          </button>
        ))}
      </div>

      {/* Property explanation */}
      <motion.div
        key={activeProperty}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 rounded-xl"
        style={{
          backgroundColor: `${currentColor}10`,
          borderWidth: 1,
          borderColor: `${currentColor}30`,
        }}
      >
        <h4 className="font-bold capitalize mb-1" style={{ color: currentColor }}>
          {activeProperty.replace('-', ' ')}
        </h4>
        <p className="text-dark-300 text-sm">{properties[activeProperty].description}</p>
      </motion.div>
    </div>
  );
}
