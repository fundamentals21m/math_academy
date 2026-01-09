import { useState } from 'react';

interface Props {
  className?: string;
}

export function PlanningSpectrum({ className = '' }: Props) {
  const [position, setPosition] = useState(50);

  // Key characteristics at different positions
  const getCharacteristics = () => {
    if (position < 20) {
      return {
        system: 'Free Market / Classical Liberalism',
        color: '#10b981',
        features: [
          'Private property rights',
          'Voluntary exchange',
          'Rule of law (general rules)',
          'Competition coordinates activity',
          'Prices convey information',
          'Individual freedom preserved',
        ],
        quote: '"The great aim of the struggle for liberty has been equality before the law."',
      };
    } else if (position < 40) {
      return {
        system: 'Mixed Economy',
        color: '#3b82f6',
        features: [
          'Some government intervention',
          'Regulations on business',
          'Social safety nets',
          'Partial price controls',
          'Some central direction',
          'Reduced but existing freedom',
        ],
        quote: '"The more the state plans, the more difficult planning becomes for the individual."',
      };
    } else if (position < 60) {
      return {
        system: 'Welfare State',
        color: '#f97316',
        features: [
          'Significant redistribution',
          'Extensive regulations',
          'Price controls in sectors',
          'State direction of industry',
          'Reduced competition',
          'Growing bureaucracy',
        ],
        quote: '"What is called economic planning is the planning of the total social structure."',
      };
    } else if (position < 80) {
      return {
        system: 'Socialism / Central Planning',
        color: '#ef4444',
        features: [
          'State ownership of means of production',
          'Central economic planning',
          'Administered prices',
          'Rationing systems',
          'Limited private enterprise',
          'Severely restricted freedom',
        ],
        quote: '"Economic control is not merely control of a sector of human life... it is the control of the means for all our ends."',
      };
    } else {
      return {
        system: 'Totalitarianism',
        color: '#7f1d1d',
        features: [
          'Total state control',
          'No private property',
          'Thought control / propaganda',
          'Arbitrary government',
          'Single party rule',
          'Complete subjugation',
        ],
        quote: '"The worst get on top... power of coercion can only be kept in the hands of the ruthless."',
      };
    }
  };

  const current = getCharacteristics();

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Spectrum of Planning</h3>

      <p className="text-dark-300 mb-6">
        Hayek argues there is no stable "middle way." The logic of central planning
        tends to expand, leading societies down the road to serfdom.
      </p>

      {/* Main slider */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-emerald-400">Individual Freedom</span>
          <span className="text-red-400">Total Control</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(parseInt(e.target.value))}
          className="w-full h-3 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #10b981 0%, #3b82f6 25%, #f97316 50%, #ef4444 75%, #7f1d1d 100%)`
          }}
        />
      </div>

      {/* Visual spectrum */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 100" className="w-full h-auto">
          {/* Spectrum bar */}
          <defs>
            <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="25%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="75%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
          </defs>
          <rect x={20} y={20} width={360} height={20} fill="url(#spectrum)" rx={4} />

          {/* Position indicator */}
          <circle
            cx={20 + (position / 100) * 360}
            cy={30}
            r={12}
            fill="#fff"
            stroke={current.color}
            strokeWidth={3}
          />

          {/* Labels */}
          <text x={20} y={55} fill="#10b981" fontSize="8" textAnchor="start">Free</text>
          <text x={110} y={55} fill="#3b82f6" fontSize="8" textAnchor="middle">Mixed</text>
          <text x={200} y={55} fill="#f97316" fontSize="8" textAnchor="middle">Welfare</text>
          <text x={290} y={55} fill="#ef4444" fontSize="8" textAnchor="middle">Socialist</text>
          <text x={380} y={55} fill="#7f1d1d" fontSize="8" textAnchor="end">Total</text>

          {/* Arrow showing tendency */}
          <path
            d="M 100 75 Q 200 85 300 75"
            fill="none"
            stroke="#6b7280"
            strokeWidth={1}
            strokeDasharray="4 2"
            markerEnd="url(#arrowhead)"
          />
          <text x={200} y={95} fill="#6b7280" fontSize="9" textAnchor="middle">
            "The Road to Serfdom"
          </text>

          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#6b7280" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Current system display */}
      <div
        className="p-4 rounded-xl mb-4 border"
        style={{
          backgroundColor: `${current.color}15`,
          borderColor: `${current.color}40`,
        }}
      >
        <p style={{ color: current.color }} className="font-bold text-lg">
          {current.system}
        </p>
        <ul className="mt-3 space-y-1">
          {current.features.map((feature, i) => (
            <li key={i} className="text-dark-300 text-sm flex items-center gap-2">
              <span style={{ color: current.color }}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Quote */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-4">
        <p className="text-dark-300 text-sm italic">
          {current.quote}
        </p>
        <p className="text-dark-500 text-xs mt-2">— F.A. Hayek, The Road to Serfdom</p>
      </div>

      {/* Key insight */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Hayek's Warning</p>
        <p className="text-dark-300 text-sm mt-2">
          "It is of the utmost importance... to realize that socialism means a
          complete abolition of the market economy... Once this critical point is
          passed, the whole mentality of the people changes."
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Each step toward planning creates problems that "require" more planning to solve,
          in a self-reinforcing cycle toward totalitarianism.
        </p>
      </div>
    </div>
  );
}
