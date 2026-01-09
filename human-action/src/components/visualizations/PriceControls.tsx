import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type ControlType = 'none' | 'ceiling' | 'floor';

export function PriceControls({ className = '' }: Props) {
  const [controlType, setControlType] = useState<ControlType>('none');
  const [controlPrice, setControlPrice] = useState(10);

  // Market equilibrium
  const equilibriumPrice = 15;
  const equilibriumQuantity = 100;

  // Supply and demand functions
  const demand = (p: number) => Math.max(0, 200 - 6.67 * p);
  const supply = (p: number) => Math.max(0, 6.67 * p);

  const analysis = useMemo(() => {
    let effectivePrice = equilibriumPrice;
    let actualQuantity = equilibriumQuantity;
    let shortage = 0;
    let surplus = 0;

    if (controlType === 'ceiling' && controlPrice < equilibriumPrice) {
      effectivePrice = controlPrice;
      const qDemanded = demand(controlPrice);
      const qSupplied = supply(controlPrice);
      actualQuantity = qSupplied;
      shortage = qDemanded - qSupplied;
    } else if (controlType === 'floor' && controlPrice > equilibriumPrice) {
      effectivePrice = controlPrice;
      const qDemanded = demand(controlPrice);
      const qSupplied = supply(controlPrice);
      actualQuantity = qDemanded;
      surplus = qSupplied - qDemanded;
    }

    return {
      effectivePrice,
      actualQuantity,
      shortage,
      surplus,
      qDemanded: demand(effectivePrice),
      qSupplied: supply(effectivePrice),
    };
  }, [controlType, controlPrice]);

  // Chart scaling
  const chartWidth = 350;
  const chartHeight = 200;
  const maxPrice = 30;
  const maxQuantity = 200;

  const priceToY = (p: number) => chartHeight - (p / maxPrice) * chartHeight;
  const quantityToX = (q: number) => (q / maxQuantity) * chartWidth;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Price Controls</h3>

      <p className="text-dark-300 mb-6">
        Government interference with prices creates shortages or surpluses.
        The market cannot clear when prices are prevented from doing their job.
      </p>

      {/* Control type selector */}
      <div className="flex gap-2 mb-4">
        {[
          { type: 'none' as const, label: 'Free Market' },
          { type: 'ceiling' as const, label: 'Price Ceiling' },
          { type: 'floor' as const, label: 'Price Floor' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => {
              setControlType(type);
              if (type === 'ceiling') setControlPrice(10);
              if (type === 'floor') setControlPrice(20);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              controlType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Price control slider */}
      {controlType !== 'none' && (
        <div className="mb-6">
          <label className="text-dark-400 text-sm">
            {controlType === 'ceiling' ? 'Maximum' : 'Minimum'} Price: ${controlPrice}
          </label>
          <input
            type="range"
            min="5"
            max="25"
            value={controlPrice}
            onChange={(e) => setControlPrice(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
          />
        </div>
      )}

      {/* Supply and Demand chart */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox={`-40 -10 ${chartWidth + 60} ${chartHeight + 40}`} className="w-full h-auto">
          {/* Grid */}
          {[0, 5, 10, 15, 20, 25, 30].map((p) => (
            <g key={`price-${p}`}>
              <line x1={0} y1={priceToY(p)} x2={chartWidth} y2={priceToY(p)} stroke="#374151" strokeWidth={0.5} />
              <text x={-5} y={priceToY(p) + 3} fill="#6b7280" fontSize="10" textAnchor="end">${p}</text>
            </g>
          ))}
          {[0, 50, 100, 150, 200].map((q) => (
            <g key={`qty-${q}`}>
              <line x1={quantityToX(q)} y1={0} x2={quantityToX(q)} y2={chartHeight} stroke="#374151" strokeWidth={0.5} />
              <text x={quantityToX(q)} y={chartHeight + 15} fill="#6b7280" fontSize="10" textAnchor="middle">{q}</text>
            </g>
          ))}

          {/* Axes */}
          <line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#6b7280" strokeWidth={2} />
          <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="#6b7280" strokeWidth={2} />

          {/* Labels */}
          <text x={chartWidth / 2} y={chartHeight + 30} fill="#9ca3af" fontSize="11" textAnchor="middle">Quantity</text>
          <text x={-30} y={chartHeight / 2} fill="#9ca3af" fontSize="11" textAnchor="middle" transform={`rotate(-90, -30, ${chartHeight / 2})`}>Price</text>

          {/* Demand curve (blue) */}
          <line
            x1={quantityToX(demand(0))}
            y1={priceToY(0)}
            x2={quantityToX(0)}
            y2={priceToY(30)}
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <text x={quantityToX(demand(5))} y={priceToY(5) - 5} fill="#3b82f6" fontSize="10">Demand</text>

          {/* Supply curve (orange) */}
          <line
            x1={quantityToX(0)}
            y1={priceToY(0)}
            x2={quantityToX(supply(30))}
            y2={priceToY(30)}
            stroke="#f97316"
            strokeWidth={2}
          />
          <text x={quantityToX(supply(25)) + 5} y={priceToY(25) - 5} fill="#f97316" fontSize="10">Supply</text>

          {/* Equilibrium point */}
          <circle
            cx={quantityToX(equilibriumQuantity)}
            cy={priceToY(equilibriumPrice)}
            r={5}
            fill="#10b981"
          />

          {/* Price control line */}
          {controlType !== 'none' && (
            <>
              <line
                x1={0}
                y1={priceToY(controlPrice)}
                x2={chartWidth}
                y2={priceToY(controlPrice)}
                stroke={controlType === 'ceiling' ? '#ef4444' : '#8b5cf6'}
                strokeWidth={2}
                strokeDasharray="6 3"
              />
              <text
                x={chartWidth - 5}
                y={priceToY(controlPrice) - 5}
                fill={controlType === 'ceiling' ? '#ef4444' : '#8b5cf6'}
                fontSize="10"
                textAnchor="end"
              >
                {controlType === 'ceiling' ? 'Ceiling' : 'Floor'}
              </text>

              {/* Shortage/Surplus visualization */}
              {analysis.shortage > 0 && (
                <>
                  {/* Shortage area */}
                  <rect
                    x={quantityToX(analysis.qSupplied)}
                    y={priceToY(controlPrice) - 20}
                    width={quantityToX(analysis.qDemanded) - quantityToX(analysis.qSupplied)}
                    height={40}
                    fill="#ef4444"
                    fillOpacity={0.2}
                  />
                  <text
                    x={(quantityToX(analysis.qSupplied) + quantityToX(analysis.qDemanded)) / 2}
                    y={priceToY(controlPrice) + 3}
                    fill="#ef4444"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    SHORTAGE
                  </text>
                </>
              )}

              {analysis.surplus > 0 && (
                <>
                  {/* Surplus area */}
                  <rect
                    x={quantityToX(analysis.qDemanded)}
                    y={priceToY(controlPrice) - 20}
                    width={quantityToX(analysis.qSupplied) - quantityToX(analysis.qDemanded)}
                    height={40}
                    fill="#8b5cf6"
                    fillOpacity={0.2}
                  />
                  <text
                    x={(quantityToX(analysis.qSupplied) + quantityToX(analysis.qDemanded)) / 2}
                    y={priceToY(controlPrice) + 3}
                    fill="#8b5cf6"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    SURPLUS
                  </text>
                </>
              )}
            </>
          )}
        </svg>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Equilibrium Price</p>
          <p className="text-emerald-400 font-mono text-lg">${equilibriumPrice}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Equilibrium Quantity</p>
          <p className="text-emerald-400 font-mono text-lg">{equilibriumQuantity}</p>
        </div>
      </div>

      {/* Analysis based on control */}
      {controlType !== 'none' && (
        <div className={`p-4 rounded-xl mb-4 ${
          analysis.shortage > 0 ? 'bg-red-500/10 border border-red-500/30' :
          analysis.surplus > 0 ? 'bg-purple-500/10 border border-purple-500/30' :
          'bg-emerald-500/10 border border-emerald-500/30'
        }`}>
          {analysis.shortage > 0 && (
            <>
              <p className="text-red-400 font-medium">Shortage Created!</p>
              <p className="text-dark-300 text-sm mt-2">
                At ${controlPrice}, consumers want {Math.round(analysis.qDemanded)} units but
                producers only supply {Math.round(analysis.qSupplied)} units.
                Shortage of <span className="text-red-400 font-mono">{Math.round(analysis.shortage)}</span> units.
              </p>
              <p className="text-dark-400 text-xs mt-2">
                Results: Queues, rationing, black markets, quality deterioration
              </p>
            </>
          )}
          {analysis.surplus > 0 && (
            <>
              <p className="text-purple-400 font-medium">Surplus Created!</p>
              <p className="text-dark-300 text-sm mt-2">
                At ${controlPrice}, producers supply {Math.round(analysis.qSupplied)} units but
                consumers only want {Math.round(analysis.qDemanded)} units.
                Surplus of <span className="text-purple-400 font-mono">{Math.round(analysis.surplus)}</span> units.
              </p>
              <p className="text-dark-400 text-xs mt-2">
                Results: Unemployment, waste, government purchases, reduced production
              </p>
            </>
          )}
          {analysis.shortage === 0 && analysis.surplus === 0 && (
            <>
              <p className="text-emerald-400 font-medium">No Effect</p>
              <p className="text-dark-300 text-sm mt-2">
                The {controlType === 'ceiling' ? 'ceiling' : 'floor'} is set {controlType === 'ceiling' ? 'above' : 'below'}
                the equilibrium price, so it has no effect.
              </p>
            </>
          )}
        </div>
      )}

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Mises on Price Controls</p>
        <p className="text-dark-300 text-sm mt-2">
          "The effect of price control is to bring about a state of affairs in which demand
          exceeds supply... Price control defeats the very purpose which the government wanted
          to attain by resorting to it."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Price ceilings (rent control, maximum prices) create shortages.
          Price floors (minimum wages, agricultural supports) create surpluses.
        </p>
      </div>
    </div>
  );
}
