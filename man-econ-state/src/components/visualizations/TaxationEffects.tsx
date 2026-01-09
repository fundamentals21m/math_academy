import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type TaxType = 'income' | 'sales' | 'property' | 'capital-gains';

export function TaxationEffects({ className = '' }: Props) {
  const [taxType, setTaxType] = useState<TaxType>('income');
  const [taxRate, setTaxRate] = useState(25);

  const taxInfo: Record<TaxType, {
    name: string;
    description: string;
    effects: string[];
    color: string;
  }> = {
    income: {
      name: 'Income Tax',
      description: 'Tax on earnings from labor and business activity',
      effects: [
        'Reduces incentive to work additional hours',
        'Penalizes productive activity',
        'Creates deadweight loss',
        'Encourages tax avoidance strategies',
      ],
      color: '#3b82f6',
    },
    sales: {
      name: 'Sales Tax',
      description: 'Tax on final consumer purchases',
      effects: [
        'Raises prices for consumers',
        'Reduces quantity demanded',
        'Burden shared by buyers and sellers',
        'Regressive on lower incomes',
      ],
      color: '#f97316',
    },
    property: {
      name: 'Property Tax',
      description: 'Tax on the assessed value of real estate',
      effects: [
        'Reduces property values',
        'Discourages improvement and investment',
        'Creates ongoing obligation regardless of income',
        'Can force sales in hardship',
      ],
      color: '#10b981',
    },
    'capital-gains': {
      name: 'Capital Gains Tax',
      description: 'Tax on profits from asset sales',
      effects: [
        'Discourages saving and investment',
        'Reduces capital formation',
        'Lock-in effect prevents efficient reallocation',
        'Double taxation of corporate earnings',
      ],
      color: '#8b5cf6',
    },
  };

  const currentTax = taxInfo[taxType];

  // Economic calculations
  const calculations = useMemo(() => {
    const grossIncome = 100000;
    const taxAmount = grossIncome * (taxRate / 100);
    const netIncome = grossIncome - taxAmount;

    // Deadweight loss approximation (simplified)
    const elasticity = 0.3;
    const deadweightLoss = 0.5 * taxRate * taxRate * elasticity * 100;

    // Behavioral response
    const workReduction = taxRate * 0.2;

    return {
      grossIncome,
      taxAmount,
      netIncome,
      deadweightLoss,
      workReduction,
      effectiveBurden: taxAmount + deadweightLoss,
    };
  }, [taxRate]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Effects of Taxation</h3>

      <p className="text-dark-300 mb-6">
        Taxation is a compulsory transfer from producers to government. Every tax creates
        distortions and unintended consequences in the market.
      </p>

      {/* Tax type selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(taxInfo) as TaxType[]).map((type) => (
          <button
            key={type}
            onClick={() => setTaxType(type)}
            style={{ borderColor: taxType === type ? taxInfo[type].color : undefined }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              taxType === type
                ? 'bg-dark-700 text-white border-2'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 border-2 border-transparent'
            }`}
          >
            {taxInfo[type].name}
          </button>
        ))}
      </div>

      {/* Tax rate control */}
      <div className="mb-6">
        <label className="text-dark-400 text-sm">Tax Rate: {taxRate}%</label>
        <input
          type="range"
          min="0"
          max="70"
          value={taxRate}
          onChange={(e) => setTaxRate(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor: currentTax.color,
          }}
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>0%</span>
          <span>Laffer Peak ~40%</span>
          <span>70%</span>
        </div>
      </div>

      {/* Tax description */}
      <div
        className="p-4 rounded-xl mb-6 border"
        style={{
          backgroundColor: `${currentTax.color}15`,
          borderColor: `${currentTax.color}40`,
        }}
      >
        <p style={{ color: currentTax.color }} className="font-medium">
          {currentTax.name}
        </p>
        <p className="text-dark-300 text-sm mt-1">{currentTax.description}</p>
      </div>

      {/* Visual: Income distribution */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <p className="text-dark-400 text-sm mb-3">Income Distribution at {taxRate}% Rate</p>
        <svg viewBox="0 0 400 100" className="w-full h-auto">
          {/* Full bar (gross income) */}
          <rect x={50} y={20} width={300} height={30} fill="#374151" rx={4} />

          {/* Net income portion */}
          <rect
            x={50}
            y={20}
            width={300 * ((100 - taxRate) / 100)}
            height={30}
            fill="#10b981"
            rx={4}
          />

          {/* Tax portion */}
          <rect
            x={50 + 300 * ((100 - taxRate) / 100)}
            y={20}
            width={300 * (taxRate / 100)}
            height={30}
            fill={currentTax.color}
            rx={4}
          />

          {/* Deadweight loss (shown below) */}
          <rect
            x={50 + 300 * ((100 - taxRate) / 100)}
            y={55}
            width={Math.min(calculations.deadweightLoss, 100)}
            height={15}
            fill="#ef4444"
            fillOpacity={0.7}
            rx={2}
          />

          {/* Labels */}
          <text x={50 + (300 * ((100 - taxRate) / 100)) / 2} y={40} fill="#fff" fontSize="11" textAnchor="middle">
            Net: ${calculations.netIncome.toLocaleString()}
          </text>
          {taxRate > 10 && (
            <text x={50 + 300 * ((100 - taxRate) / 100) + (300 * taxRate / 100) / 2} y={40} fill="#fff" fontSize="10" textAnchor="middle">
              Tax: ${Math.round(calculations.taxAmount).toLocaleString()}
            </text>
          )}
          <text x={50 + 300 * ((100 - taxRate) / 100)} y={85} fill="#ef4444" fontSize="9" textAnchor="start">
            Deadweight loss: ${Math.round(calculations.deadweightLoss).toLocaleString()}
          </text>
        </svg>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Net Income</p>
          <p className="text-emerald-400 font-mono text-sm">${calculations.netIncome.toLocaleString()}</p>
        </div>
        <div className="p-3 rounded-xl" style={{ backgroundColor: `${currentTax.color}15`, border: `1px solid ${currentTax.color}50` }}>
          <p className="text-dark-400 text-xs">Tax Paid</p>
          <p style={{ color: currentTax.color }} className="font-mono text-sm">${Math.round(calculations.taxAmount).toLocaleString()}</p>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-dark-400 text-xs">Deadweight Loss</p>
          <p className="text-red-400 font-mono text-sm">${Math.round(calculations.deadweightLoss).toLocaleString()}</p>
        </div>
      </div>

      {/* Effects list */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-4">
        <p className="text-dark-300 font-medium mb-2">Economic Effects</p>
        <ul className="space-y-2">
          {currentTax.effects.map((effect, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
              <span className="text-red-400 mt-0.5">•</span>
              <span>{effect}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Behavioral response */}
      <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 mb-4">
        <p className="text-orange-400 font-medium">Behavioral Response</p>
        <p className="text-dark-300 text-sm mt-2">
          At {taxRate}% tax rate, productive activity is estimated to decrease by{' '}
          <span className="text-orange-400 font-mono">{calculations.workReduction.toFixed(1)}%</span>.
          People work less, hide income, or move production elsewhere.
        </p>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Rothbard on Taxation</p>
        <p className="text-dark-300 text-sm mt-2">
          "Taxation is simply a method by which the government... takes money from some to
          give to others or to use for its own purposes. It is a system of legal plunder...
          Every tax distorts the pattern of production that would have emerged on the free market."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          The true burden of taxation includes not just the transfer itself, but all the
          economic activity that never occurs because of the tax — the "unseen" costs.
        </p>
      </div>
    </div>
  );
}
