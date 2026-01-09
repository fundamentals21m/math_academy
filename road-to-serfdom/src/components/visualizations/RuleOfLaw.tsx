import { useState } from 'react';

interface Props {
  className?: string;
}

type LegalSystem = 'rule-of-law' | 'arbitrary';

interface Scenario {
  id: string;
  description: string;
  ruleOfLaw: string;
  arbitrary: string;
}

export function RuleOfLaw({ className = '' }: Props) {
  const [system, setSystem] = useState<LegalSystem>('rule-of-law');
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios: Scenario[] = [
    {
      id: 'business',
      description: 'A person wants to start a bakery',
      ruleOfLaw: 'Meets published health and safety standards → Opens business. The rules are known in advance and apply equally to all.',
      arbitrary: 'Must obtain permission from planning board. Approval depends on whether officials think another bakery is "needed." Decision may take months, outcome uncertain.',
    },
    {
      id: 'property',
      description: 'A farmer owns land that the government wants',
      ruleOfLaw: 'Government must pay fair market value through established legal process. Property rights are protected equally for all citizens.',
      arbitrary: 'Land can be seized if officials determine it serves the "public interest." Compensation is whatever the authority decides. No effective appeal.',
    },
    {
      id: 'employment',
      description: 'A worker seeks employment',
      ruleOfLaw: 'Free to accept any job offer. Employer and employee negotiate terms. Either party can end relationship within contract terms.',
      arbitrary: 'Must accept assigned work in assigned location. Cannot change jobs without permission. Wages set by central authority.',
    },
    {
      id: 'speech',
      description: 'A journalist writes a critical article',
      ruleOfLaw: 'Protected speech under established constitutional rights. Same rules apply to all publications regardless of political content.',
      arbitrary: 'Authorities review all publications for "harmful" content. What counts as harmful changes based on current political needs.',
    },
  ];

  const currentScenario = scenarios[selectedScenario];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Rule of Law vs. Arbitrary Power</h3>

      <p className="text-dark-300 mb-6">
        The rule of law means government operates according to known, general rules — not
        the arbitrary commands of individuals. Planning requires abandoning this principle.
      </p>

      {/* System selector */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSystem('rule-of-law')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            system === 'rule-of-law'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ⚖️ Rule of Law
        </button>
        <button
          onClick={() => setSystem('arbitrary')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            system === 'arbitrary'
              ? 'bg-red-500/20 text-red-400 border border-red-500/50'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          👊 Arbitrary Power
        </button>
      </div>

      {/* Visual comparison */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 140" className="w-full h-auto">
          {system === 'rule-of-law' ? (
            <>
              {/* Equal citizens under law */}
              <rect x={50} y={20} width={300} height={8} fill="#10b981" rx={2} />
              <text x={200} y={15} fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                GENERAL RULES (Known in Advance)
              </text>

              {/* Citizens */}
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={i}>
                  <circle cx={80 + i * 60} cy={70} r={18} fill="#3b82f6" fillOpacity={0.3} stroke="#3b82f6" strokeWidth={2} />
                  <text x={80 + i * 60} y={75} fill="#3b82f6" fontSize="16" textAnchor="middle">👤</text>
                  <line x1={80 + i * 60} y1={35} x2={80 + i * 60} y2={52} stroke="#10b981" strokeWidth={2} />
                </g>
              ))}

              <text x={200} y={110} fill="#9ca3af" fontSize="10" textAnchor="middle">
                All citizens equal under the same rules
              </text>
              <text x={200} y={125} fill="#10b981" fontSize="11" textAnchor="middle">
                Predictable • Fair • Limited Government
              </text>
            </>
          ) : (
            <>
              {/* Central authority */}
              <circle cx={200} cy={35} r={25} fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" strokeWidth={2} />
              <text x={200} y={40} fill="#ef4444" fontSize="20" textAnchor="middle">👁️</text>

              {/* Unequal treatment arrows */}
              {[0, 1, 2, 3, 4].map((i) => {
                const width = [1, 3, 1, 2, 1][i];
                const opacity = [0.3, 1, 0.3, 0.7, 0.3][i];
                return (
                  <g key={i}>
                    <line
                      x1={200}
                      y1={60}
                      x2={80 + i * 60}
                      y2={85}
                      stroke="#ef4444"
                      strokeWidth={width}
                      opacity={opacity}
                    />
                    <circle
                      cx={80 + i * 60}
                      cy={100}
                      r={14 + (i === 1 ? 6 : i === 3 ? 3 : 0)}
                      fill="#374151"
                      fillOpacity={0.5}
                      stroke="#6b7280"
                      strokeWidth={1}
                    />
                    <text x={80 + i * 60} y={105} fill="#6b7280" fontSize="14" textAnchor="middle">
                      {['😰', '😊', '😰', '🙂', '😰'][i]}
                    </text>
                  </g>
                );
              })}

              <text x={200} y={135} fill="#ef4444" fontSize="11" textAnchor="middle">
                Arbitrary • Unequal • Unlimited Power
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Scenario selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setSelectedScenario(i)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedScenario === i
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {['🏪 Business', '🏠 Property', '💼 Employment', '📰 Speech'][i]}
          </button>
        ))}
      </div>

      {/* Current scenario */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-4">
        <p className="text-dark-200 font-medium mb-3">{currentScenario.description}</p>
        <div className={`p-3 rounded-lg ${
          system === 'rule-of-law' ? 'bg-emerald-500/10' : 'bg-red-500/10'
        }`}>
          <p className={`text-sm ${system === 'rule-of-law' ? 'text-emerald-400' : 'text-red-400'}`}>
            {system === 'rule-of-law' ? currentScenario.ruleOfLaw : currentScenario.arbitrary}
          </p>
        </div>
      </div>

      {/* Key differences */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-emerald-400 text-sm font-medium mb-2">Rule of Law</p>
          <ul className="text-xs text-dark-300 space-y-1">
            <li>• Known rules in advance</li>
            <li>• Apply equally to all</li>
            <li>• Limit government power</li>
            <li>• Protect individual rights</li>
          </ul>
        </div>
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-red-400 text-sm font-medium mb-2">Arbitrary Power</p>
          <ul className="text-xs text-dark-300 space-y-1">
            <li>• Rules change as needed</li>
            <li>• Applied selectively</li>
            <li>• Unlimited discretion</li>
            <li>• Rights at whim of rulers</li>
          </ul>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Hayek on the Rule of Law</p>
        <p className="text-dark-300 text-sm mt-2">
          "Nothing distinguishes more clearly conditions in a free country from those in a
          country under arbitrary government than the observance in the former of the great
          principles known as the Rule of Law."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Planning requires giving officials discretionary power to direct economic activity.
          This inevitably destroys the rule of law and creates arbitrary government.
        </p>
      </div>
    </div>
  );
}
