import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

interface Parameter {
  name: string;
  symbol: string;
  value: string;
  shortValue?: string;
  description: string;
  color: string;
  hexColor: string;
}

/**
 * "Baseball card" style display of secp256k1's domain parameters.
 * Shows all 6 parameters with expandable details and explanations.
 */
export function ParameterCard({ className = '' }: Props) {
  const [expandedParam, setExpandedParam] = useState<string | null>(null);
  const [showHex, setShowHex] = useState(false);

  const parameters: Parameter[] = [
    {
      name: 'Prime Field',
      symbol: 'p',
      value: '2^256 - 2^32 - 977',
      shortValue: '2^256 - 2^32 - 977',
      description:
        'The prime that defines our finite field. This specific form (pseudo-Mersenne) allows very fast modular reduction.',
      color: 'amber',
      hexColor:
        'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE FFFFFC2F',
    },
    {
      name: 'Curve Coefficient',
      symbol: 'a',
      value: '0',
      description:
        'First curve coefficient. Setting a=0 makes point operations simpler and faster (Koblitz curve).',
      color: 'blue',
      hexColor: '0',
    },
    {
      name: 'Curve Coefficient',
      symbol: 'b',
      value: '7',
      description:
        'Second curve coefficient. Combined with a=0, this gives y² = x³ + 7. The simple form means no hidden backdoors.',
      color: 'emerald',
      hexColor: '7',
    },
    {
      name: 'Generator Point',
      symbol: 'G',
      value: '(Gx, Gy)',
      description:
        'The base point that generates all other points through scalar multiplication. Every public key is some multiple of G.',
      color: 'purple',
      hexColor:
        'Gx: 79BE667E F9DCBBAC 55A06295 CE870B07 029BFCDB 2DCE28D9 59F2815B 16F81798\nGy: 483ADA77 26A3C465 5DA4FBFC 0E1108A8 FD17B448 A6855419 9C47D08F FB10D4B8',
    },
    {
      name: 'Group Order',
      symbol: 'n',
      value: '≈2^256',
      description:
        'The number of points on the curve (including infinity). This must be prime for cryptographic security. Private keys are random values from 1 to n-1.',
      color: 'red',
      hexColor:
        'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141',
    },
    {
      name: 'Cofactor',
      symbol: 'h',
      value: '1',
      description:
        'The ratio of curve points to subgroup order. h=1 means every point is in the main subgroup—simplifies implementation and prevents small-subgroup attacks.',
      color: 'cyan',
      hexColor: '1',
    },
  ];

  const toggleExpand = (symbol: string) => {
    setExpandedParam(expandedParam === symbol ? null : symbol);
  };

  const getColorClasses = (color: string) => ({
    bg: `bg-${color}-500/10`,
    border: `border-${color}-500/30`,
    text: `text-${color}-400`,
    ring: `ring-${color}-500/30`,
  });

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-dark-100">secp256k1 Parameters</h3>
          <p className="text-dark-400 text-sm">The 6 numbers that define Bitcoin's curve</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-dark-500 text-xs">Show hex</span>
          <button
            onClick={() => setShowHex(!showHex)}
            className={`w-12 h-6 rounded-full transition-colors relative ${
              showHex ? 'bg-amber-500' : 'bg-dark-600'
            }`}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 rounded-full bg-white"
              animate={{ left: showHex ? '1.5rem' : '0.25rem' }}
            />
          </button>
        </div>
      </div>

      {/* Parameter cards */}
      <div className="grid gap-3">
        {parameters.map((param) => {
          const isExpanded = expandedParam === param.symbol;
          const colors = getColorClasses(param.color);

          return (
            <motion.div
              key={param.symbol}
              layout
              className={`rounded-xl border cursor-pointer transition-colors ${
                isExpanded
                  ? `${colors.bg} ${colors.border}`
                  : 'bg-dark-700/30 border-dark-600/50 hover:bg-dark-700/50'
              }`}
              onClick={() => toggleExpand(param.symbol)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${colors.bg} ${colors.text}`}
                    >
                      {param.symbol}
                    </div>
                    <div>
                      <p className="text-dark-200 font-medium">{param.name}</p>
                      <p className={`font-mono text-sm ${colors.text}`}>
                        {showHex && param.hexColor.length > 20
                          ? param.hexColor.slice(0, 20) + '...'
                          : param.value}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-dark-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-dark-600/50">
                        <p className="text-dark-300 text-sm mb-3">{param.description}</p>
                        {showHex && (
                          <div className="p-3 rounded-lg bg-dark-800/50 overflow-x-auto">
                            <pre className="text-xs font-mono text-dark-400 whitespace-pre-wrap break-all">
                              {param.hexColor}
                            </pre>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl bg-dark-700/30 text-center">
          <p className="text-2xl font-bold text-amber-400">256</p>
          <p className="text-dark-500 text-xs">bit security</p>
        </div>
        <div className="p-3 rounded-xl bg-dark-700/30 text-center">
          <p className="text-2xl font-bold text-emerald-400">~10^77</p>
          <p className="text-dark-500 text-xs">possible keys</p>
        </div>
        <div className="p-3 rounded-xl bg-dark-700/30 text-center">
          <p className="text-2xl font-bold text-blue-400">128</p>
          <p className="text-dark-500 text-xs">bit ECDLP</p>
        </div>
      </div>

      {/* Name breakdown */}
      <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <p className="text-amber-400 text-sm font-medium mb-2">Decoding "secp256k1"</p>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="p-2 rounded-lg bg-dark-800/50">
            <p className="text-lg font-bold text-white">sec</p>
            <p className="text-xs text-dark-400">Standards for Efficient Cryptography</p>
          </div>
          <div className="p-2 rounded-lg bg-dark-800/50">
            <p className="text-lg font-bold text-white">p</p>
            <p className="text-xs text-dark-400">prime field (vs binary)</p>
          </div>
          <div className="p-2 rounded-lg bg-dark-800/50">
            <p className="text-lg font-bold text-white">256</p>
            <p className="text-xs text-dark-400">bit field size</p>
          </div>
          <div className="p-2 rounded-lg bg-dark-800/50">
            <p className="text-lg font-bold text-white">k1</p>
            <p className="text-xs text-dark-400">Koblitz curve #1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
