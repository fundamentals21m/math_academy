import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Project {
  id: string;
  name: string;
  cost: number;
  estimatedRevenue: number;
  actualRevenue: number;
  uncertainty: number;
}

export function EntrepreneurProfit({ className = '' }: Props) {
  const [showActual, setShowActual] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'cafe',
      name: 'Coffee Shop',
      cost: 50000,
      estimatedRevenue: 70000,
      actualRevenue: 85000,
      uncertainty: 25,
    },
    {
      id: 'app',
      name: 'Mobile App',
      cost: 30000,
      estimatedRevenue: 100000,
      actualRevenue: 15000,
      uncertainty: 70,
    },
    {
      id: 'farm',
      name: 'Organic Farm',
      cost: 80000,
      estimatedRevenue: 95000,
      actualRevenue: 90000,
      uncertainty: 30,
    },
    {
      id: 'store',
      name: 'Online Store',
      cost: 20000,
      estimatedRevenue: 45000,
      actualRevenue: 60000,
      uncertainty: 40,
    },
  ];

  const analysis = useMemo(() => {
    return projects.map((p) => ({
      ...p,
      expectedProfit: p.estimatedRevenue - p.cost,
      actualProfit: p.actualRevenue - p.cost,
      forecast: p.actualRevenue >= p.estimatedRevenue ? 'accurate' : 'overestimate',
    }));
  }, []);

  const totalExpectedProfit = analysis.reduce((sum, p) => sum + p.expectedProfit, 0);
  const totalActualProfit = analysis.reduce((sum, p) => sum + p.actualProfit, 0);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Entrepreneurial Profit and Loss</h3>

      <p className="text-dark-300 mb-6">
        Entrepreneurs earn profits by correctly anticipating future consumer demands —
        and suffer losses when they guess wrong. This is how the market allocates resources.
      </p>

      {/* Project cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {analysis.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              selectedProject === project.id
                ? 'bg-primary-500/20 border-2 border-primary-500'
                : 'bg-dark-700/50 border border-dark-600 hover:bg-dark-700'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-dark-200 font-medium">{project.name}</p>
              <span className="text-xs px-2 py-1 rounded bg-dark-600 text-dark-300">
                {project.uncertainty}% risk
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-dark-400">Cost:</span>
                <span className="text-red-400 font-mono">-${project.cost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">Expected Revenue:</span>
                <span className="text-blue-400 font-mono">${project.estimatedRevenue.toLocaleString()}</span>
              </div>

              {showActual && (
                <div className="flex justify-between pt-2 border-t border-dark-600">
                  <span className="text-dark-400">Actual Revenue:</span>
                  <span className={`font-mono ${project.actualRevenue >= project.estimatedRevenue ? 'text-emerald-400' : 'text-orange-400'}`}>
                    ${project.actualRevenue.toLocaleString()}
                  </span>
                </div>
              )}

              <div className="flex justify-between pt-2 border-t border-dark-600">
                <span className="text-dark-400">{showActual ? 'Actual' : 'Expected'} Profit:</span>
                <span className={`font-mono font-medium ${
                  (showActual ? project.actualProfit : project.expectedProfit) >= 0
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}>
                  {(showActual ? project.actualProfit : project.expectedProfit) >= 0 ? '+' : ''}
                  ${(showActual ? project.actualProfit : project.expectedProfit).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reveal actual results button */}
      <button
        onClick={() => setShowActual(!showActual)}
        className={`w-full mb-6 px-4 py-3 rounded-lg font-medium transition-colors ${
          showActual
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
            : 'bg-primary-500 text-white hover:bg-primary-600'
        }`}
      >
        {showActual ? '📊 Actual Results Revealed' : '🔮 Reveal Actual Results'}
      </button>

      {/* Summary comparison */}
      {showActual && (
        <div className="bg-dark-900 rounded-lg p-4 mb-4">
          <p className="text-dark-400 text-sm mb-3">Forecast vs Reality</p>
          <svg viewBox="0 0 400 120" className="w-full h-auto">
            {analysis.map((project, i) => {
              const x = 40 + i * 90;
              const expectedHeight = Math.abs(project.expectedProfit) / 500;
              const actualHeight = Math.abs(project.actualProfit) / 500;

              return (
                <g key={project.id}>
                  {/* Expected bar */}
                  <rect
                    x={x}
                    y={project.expectedProfit >= 0 ? 60 - expectedHeight : 60}
                    width={30}
                    height={expectedHeight || 2}
                    fill={project.expectedProfit >= 0 ? '#3b82f6' : '#ef4444'}
                    fillOpacity={0.5}
                  />
                  {/* Actual bar */}
                  <rect
                    x={x + 35}
                    y={project.actualProfit >= 0 ? 60 - actualHeight : 60}
                    width={30}
                    height={actualHeight || 2}
                    fill={project.actualProfit >= 0 ? '#10b981' : '#ef4444'}
                  />
                  {/* Label */}
                  <text x={x + 32} y={100} fill="#9ca3af" fontSize="9" textAnchor="middle">
                    {project.name.split(' ')[0]}
                  </text>
                </g>
              );
            })}

            {/* Zero line */}
            <line x1={30} y1={60} x2={380} y2={60} stroke="#6b7280" strokeWidth={1} />

            {/* Legend */}
            <rect x={300} y={10} width={10} height={10} fill="#3b82f6" fillOpacity={0.5} />
            <text x={315} y={18} fill="#9ca3af" fontSize="9">Expected</text>
            <rect x={300} y={25} width={10} height={10} fill="#10b981" />
            <text x={315} y={33} fill="#9ca3af" fontSize="9">Actual</text>
          </svg>
        </div>
      )}

      {/* Total summary */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Total Expected Profit</p>
          <p className="text-blue-400 font-mono text-lg">
            ${totalExpectedProfit.toLocaleString()}
          </p>
        </div>
        {showActual && (
          <div className={`p-3 rounded-xl border ${
            totalActualProfit >= 0 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'
          }`}>
            <p className="text-dark-400 text-xs">Total Actual Profit</p>
            <p className={`font-mono text-lg ${totalActualProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {totalActualProfit >= 0 ? '+' : ''}${totalActualProfit.toLocaleString()}
            </p>
          </div>
        )}
      </div>

      {/* Selected project detail */}
      {selectedProject && showActual && (
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-4">
          {(() => {
            const p = analysis.find((x) => x.id === selectedProject)!;
            return (
              <>
                <p className="text-dark-200 font-medium mb-2">{p.name} Analysis</p>
                <p className="text-dark-300 text-sm">
                  {p.actualProfit >= 0 ? (
                    <>
                      The entrepreneur <span className="text-emerald-400">earned profit</span> of ${p.actualProfit.toLocaleString()}.
                      This signals that resources were directed toward satisfying consumer wants.
                      {p.actualProfit > p.expectedProfit && (
                        <> The profit exceeded expectations, indicating especially good foresight.</>
                      )}
                    </>
                  ) : (
                    <>
                      The entrepreneur <span className="text-red-400">suffered losses</span> of ${Math.abs(p.actualProfit).toLocaleString()}.
                      This signals that resources were misdirected — consumer wants were not satisfied.
                      The loss serves as a disciplinary mechanism, redirecting resources elsewhere.
                    </>
                  )}
                </p>
              </>
            );
          })()}
        </div>
      )}

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Rothbard on Entrepreneurship</p>
        <p className="text-dark-300 text-sm mt-2">
          "Profit and loss are the result of uncertainty. The successful entrepreneur is
          one who correctly forecasts consumer demands better than his competitors. Profits
          are the reward for superior foresight; losses are the penalty for inferior foresight."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          The profit-and-loss system is the market's way of directing resources to their
          most valued uses — as judged by consumers through their spending choices.
        </p>
      </div>
    </div>
  );
}
