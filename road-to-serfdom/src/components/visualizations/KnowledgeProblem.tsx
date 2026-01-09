import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

interface Agent {
  id: number;
  x: number;
  y: number;
  knowledge: string[];
  color: string;
}

export function KnowledgeProblem({ className = '' }: Props) {
  const [mode, setMode] = useState<'dispersed' | 'centralized'>('dispersed');
  const [showConnections, setShowConnections] = useState(false);

  const agents: Agent[] = useMemo(() => [
    { id: 1, x: 80, y: 60, knowledge: ['Local demand', 'Customer preferences', 'Supplier relationships'], color: '#3b82f6' },
    { id: 2, x: 200, y: 40, knowledge: ['Material costs', 'Weather conditions', 'Shipping routes'], color: '#f97316' },
    { id: 3, x: 320, y: 70, knowledge: ['Labor skills', 'Machine capacity', 'Quality standards'], color: '#10b981' },
    { id: 4, x: 120, y: 140, knowledge: ['Consumer trends', 'Competitor actions', 'Market timing'], color: '#8b5cf6' },
    { id: 5, x: 240, y: 150, knowledge: ['Technical specs', 'Innovation opportunities', 'Process improvements'], color: '#ef4444' },
    { id: 6, x: 340, y: 130, knowledge: ['Storage costs', 'Spoilage rates', 'Distribution logistics'], color: '#06b6d4' },
  ], []);

  const centralPlanner = { x: 200, y: 100 };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Knowledge Problem</h3>

      <p className="text-dark-300 mb-6">
        Hayek's crucial insight: Economic knowledge is dispersed among millions of individuals
        and cannot be collected by any central authority.
      </p>

      {/* Mode selector */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode('dispersed')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'dispersed'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Market Coordination
        </button>
        <button
          onClick={() => setMode('centralized')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'centralized'
              ? 'bg-red-500/20 text-red-400 border border-red-500/50'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Central Planning
        </button>
      </div>

      {/* Visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {mode === 'dispersed' ? (
            <>
              {/* Price signal connections (decentralized) */}
              {showConnections && agents.map((a1, i) =>
                agents.slice(i + 1).map((a2, j) => (
                  <line
                    key={`${a1.id}-${a2.id}`}
                    x1={a1.x}
                    y1={a1.y}
                    x2={a2.x}
                    y2={a2.y}
                    stroke="#374151"
                    strokeWidth={1}
                    opacity={0.5}
                  />
                ))
              )}

              {/* Agents with their knowledge */}
              {agents.map((agent) => (
                <g key={agent.id}>
                  <circle
                    cx={agent.x}
                    cy={agent.y}
                    r={25}
                    fill={agent.color}
                    fillOpacity={0.2}
                    stroke={agent.color}
                    strokeWidth={2}
                  />
                  <text x={agent.x} y={agent.y + 5} fill={agent.color} fontSize="14" textAnchor="middle">
                    🧠
                  </text>
                </g>
              ))}

              {/* Price signals flowing */}
              <text x={200} y={190} fill="#10b981" fontSize="11" textAnchor="middle">
                Prices coordinate dispersed knowledge → Efficient allocation
              </text>
            </>
          ) : (
            <>
              {/* Central planner */}
              <circle
                cx={centralPlanner.x}
                cy={centralPlanner.y}
                r={35}
                fill="#ef4444"
                fillOpacity={0.2}
                stroke="#ef4444"
                strokeWidth={2}
              />
              <text x={centralPlanner.x} y={centralPlanner.y + 5} fill="#ef4444" fontSize="20" textAnchor="middle">
                🏛️
              </text>

              {/* Information flows to center (broken) */}
              {agents.map((agent) => (
                <g key={agent.id}>
                  <line
                    x1={agent.x}
                    y1={agent.y}
                    x2={centralPlanner.x}
                    y2={centralPlanner.y}
                    stroke="#ef4444"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    opacity={0.5}
                  />
                  {/* X marks - information can't be transmitted */}
                  <text
                    x={(agent.x + centralPlanner.x) / 2}
                    y={(agent.y + centralPlanner.y) / 2}
                    fill="#ef4444"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    ✗
                  </text>
                  {/* Dimmed agents */}
                  <circle
                    cx={agent.x}
                    cy={agent.y}
                    r={20}
                    fill="#374151"
                    fillOpacity={0.5}
                    stroke="#6b7280"
                    strokeWidth={1}
                  />
                  <text x={agent.x} y={agent.y + 5} fill="#6b7280" fontSize="12" textAnchor="middle">
                    ?
                  </text>
                </g>
              ))}

              {/* Warning text */}
              <text x={200} y={190} fill="#ef4444" fontSize="11" textAnchor="middle">
                Local knowledge cannot be transmitted → Inevitable failure
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Toggle connections */}
      {mode === 'dispersed' && (
        <button
          onClick={() => setShowConnections(!showConnections)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-dark-700 text-dark-300 text-sm hover:bg-dark-600"
        >
          {showConnections ? 'Hide' : 'Show'} Price Connections
        </button>
      )}

      {/* Knowledge examples */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {agents.slice(0, 4).map((agent) => (
          <div
            key={agent.id}
            className="p-3 rounded-xl border"
            style={{
              backgroundColor: mode === 'dispersed' ? `${agent.color}10` : '#1f293720',
              borderColor: mode === 'dispersed' ? `${agent.color}30` : '#374151',
            }}
          >
            <p className="text-xs font-medium mb-1" style={{ color: mode === 'dispersed' ? agent.color : '#6b7280' }}>
              Agent {agent.id}'s Knowledge:
            </p>
            <ul className="text-xs text-dark-400">
              {agent.knowledge.map((k, i) => (
                <li key={i}>• {k}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className={`p-4 rounded-xl mb-4 border ${
        mode === 'dispersed' ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'
      }`}>
        <p className={`font-medium ${mode === 'dispersed' ? 'text-emerald-400' : 'text-red-400'}`}>
          {mode === 'dispersed' ? '✓ Market Success' : '✗ Planning Failure'}
        </p>
        <p className="text-dark-300 text-sm mt-2">
          {mode === 'dispersed'
            ? 'Prices transmit dispersed information. No one needs to know everything — the price system coordinates billions of decisions automatically.'
            : 'The central planner cannot know: what consumers want, what resources are available locally, changing conditions, worker skills, opportunities for improvement...'}
        </p>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Hayek's Key Insight</p>
        <p className="text-dark-300 text-sm mt-2">
          "The economic problem is how to use knowledge which is not given to anyone in
          its totality... a problem of the utilization of knowledge not given to anyone in its entirety."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Knowledge is tacit, local, and constantly changing. No central authority can
          possibly gather and process it all. The price system solves this problem spontaneously.
        </p>
      </div>
    </div>
  );
}
