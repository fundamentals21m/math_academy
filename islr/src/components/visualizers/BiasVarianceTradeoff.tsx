import { useState } from 'react';

/**
 * BiasVarianceTradeoff Visualizer
 * 
 * Interactive visualization showing how model complexity affects:
 * - Bias (squared)
 * - Variance
 * - Irreducible error
 * - Total MSE = Bias² + Variance + Irreducible Error
 * 
 * User can adjust model flexibility with a slider and see how the
 * components of test error change.
 */
export function BiasVarianceTradeoff() {
  const [flexibility, setFlexibility] = useState(50);

  // Simulated values based on flexibility
  // Low flexibility = high bias, low variance
  // High flexibility = low bias, high variance
  const bias = Math.pow((100 - flexibility) / 100, 2) * 60;
  const variance = Math.pow(flexibility / 100, 2) * 60;
  const irreducible = 10;
  const totalMSE = bias + variance + irreducible;

  return (
    <div className="p-6 bg-dark-800/50 rounded-xl">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">
        Bias-Variance Tradeoff
      </h3>
      
      <div className="mb-6">
        <label className="block text-sm text-dark-300 mb-2">
          Model Flexibility: {flexibility}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={flexibility}
          onChange={(e) => setFlexibility(Number(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>Simple (High Bias)</span>
          <span>Complex (High Variance)</span>
        </div>
      </div>

      {/* Bar chart visualization */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-24 text-sm text-dark-400">Bias²</span>
          <div className="flex-1 h-6 bg-dark-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${(bias / 80) * 100}%` }}
            />
          </div>
          <span className="w-12 text-sm text-dark-300 text-right">{bias.toFixed(1)}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="w-24 text-sm text-dark-400">Variance</span>
          <div className="flex-1 h-6 bg-dark-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 transition-all duration-300"
              style={{ width: `${(variance / 80) * 100}%` }}
            />
          </div>
          <span className="w-12 text-sm text-dark-300 text-right">{variance.toFixed(1)}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="w-24 text-sm text-dark-400">Irreducible</span>
          <div className="flex-1 h-6 bg-dark-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-dark-500"
              style={{ width: `${(irreducible / 80) * 100}%` }}
            />
          </div>
          <span className="w-12 text-sm text-dark-300 text-right">{irreducible.toFixed(1)}</span>
        </div>
        
        <div className="border-t border-dark-600 pt-3 mt-3">
          <div className="flex items-center gap-3">
            <span className="w-24 text-sm text-dark-200 font-semibold">Total MSE</span>
            <div className="flex-1 h-6 bg-dark-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${(totalMSE / 80) * 100}%` }}
              />
            </div>
            <span className="w-12 text-sm text-emerald-400 text-right font-semibold">
              {totalMSE.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-dark-500">
        The optimal model complexity minimizes total test error (MSE). 
        Too simple = underfitting (high bias). Too complex = overfitting (high variance).
      </p>
    </div>
  );
}

export default BiasVarianceTradeoff;
