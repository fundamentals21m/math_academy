import { useState } from 'react';

interface Props {
  className?: string;
}

type Principle = 'metaphysics' | 'epistemology' | 'ethics' | 'politics';

export function ObjectivistPrinciples({ className = '' }: Props) {
  const [selectedPrinciple, setSelectedPrinciple] = useState<Principle>('metaphysics');

  const principles: Record<Principle, {
    title: string;
    axiom: string;
    description: string;
    color: string;
    quote: string;
    implications: string[];
  }> = {
    metaphysics: {
      title: 'Metaphysics: A is A',
      axiom: 'Existence exists',
      description: 'Reality is objective and absolute. Things are what they are, independent of our wishes, feelings, or beliefs.',
      color: '#3b82f6',
      quote: '"A is A. A thing is itself. You have never grasped the meaning of his statement."',
      implications: [
        'Reality cannot be altered by consciousness',
        'Contradictions cannot exist in reality',
        'Identity is the basis of all knowledge',
        'Wishing doesn\'t make it so',
      ],
    },
    epistemology: {
      title: 'Epistemology: Reason',
      axiom: 'Consciousness is identification',
      description: 'Reason is man\'s only means of knowledge. It is the faculty that identifies and integrates the material provided by the senses.',
      color: '#10b981',
      quote: '"Reason is man\'s only means of grasping reality and of acquiring knowledge—and, therefore, the rejection of reason means that men should act regardless of and/or in contradiction to the facts of reality."',
      implications: [
        'Logic is the method of correct thinking',
        'Faith is not a source of knowledge',
        'The senses are valid',
        'Concepts must be formed from percepts',
      ],
    },
    ethics: {
      title: 'Ethics: Rational Self-Interest',
      axiom: 'Man\'s life is the standard of value',
      description: 'Each individual is an end in himself. His own happiness is the moral purpose of his life, achieved by productive work.',
      color: '#f97316',
      quote: '"Man—every man—is an end in himself, not the means to the ends of others. He must exist for his own sake, neither sacrificing himself to others nor sacrificing others to himself."',
      implications: [
        'Altruism (self-sacrifice) is evil',
        'Selfishness (rational self-interest) is a virtue',
        'Productivity is a cardinal virtue',
        'One must never initiate force against others',
      ],
    },
    politics: {
      title: 'Politics: Individual Rights',
      axiom: 'Individual rights are inalienable',
      description: 'The only proper function of government is to protect individual rights through the retaliatory use of force against those who initiate it.',
      color: '#8b5cf6',
      quote: '"The only proper purpose of a government is to protect man\'s rights, which means: to protect him from physical violence... The only proper functions of a government are: the police, to protect you from criminals; the army, to protect you from foreign invaders."',
      implications: [
        'Laissez-faire capitalism is the only moral system',
        'No man may initiate force against another',
        'Property rights are fundamental',
        'The trader is the moral ideal',
      ],
    },
  };

  const current = principles[selectedPrinciple];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Objectivist Philosophy</h3>

      <p className="text-dark-300 mb-6">
        John Galt's speech presents a complete philosophical system. These are its four branches,
        each derived from the fundamental axiom: Existence exists.
      </p>

      {/* Principle selector */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {(Object.keys(principles) as Principle[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedPrinciple(key)}
            style={{ borderColor: selectedPrinciple === key ? principles[key].color : undefined }}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedPrinciple === key
                ? 'bg-dark-700 text-white border-2'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 border-2 border-transparent'
            }`}
          >
            {principles[key].title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Hierarchy visualization */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <svg viewBox="0 0 400 140" className="w-full h-auto">
          {/* Foundation */}
          <rect x={50} y={100} width={300} height={25} fill="#3b82f6" fillOpacity={0.2} stroke="#3b82f6" strokeWidth={2} rx={4} />
          <text x={200} y={117} fill="#3b82f6" fontSize="11" textAnchor="middle" fontWeight="bold">
            METAPHYSICS: Reality
          </text>

          {/* Second level */}
          <rect x={75} y={70} width={250} height={25} fill="#10b981" fillOpacity={0.2} stroke="#10b981" strokeWidth={2} rx={4} />
          <text x={200} y={87} fill="#10b981" fontSize="11" textAnchor="middle" fontWeight="bold">
            EPISTEMOLOGY: Reason
          </text>

          {/* Third level */}
          <rect x={100} y={40} width={200} height={25} fill="#f97316" fillOpacity={0.2} stroke="#f97316" strokeWidth={2} rx={4} />
          <text x={200} y={57} fill="#f97316" fontSize="11" textAnchor="middle" fontWeight="bold">
            ETHICS: Self-Interest
          </text>

          {/* Top level */}
          <rect x={125} y={10} width={150} height={25} fill="#8b5cf6" fillOpacity={0.2} stroke="#8b5cf6" strokeWidth={2} rx={4} />
          <text x={200} y={27} fill="#8b5cf6" fontSize="11" textAnchor="middle" fontWeight="bold">
            POLITICS: Rights
          </text>

          {/* Selection indicator */}
          <circle
            cx={selectedPrinciple === 'metaphysics' ? 380 : selectedPrinciple === 'epistemology' ? 355 : selectedPrinciple === 'ethics' ? 330 : 305}
            cy={selectedPrinciple === 'metaphysics' ? 112 : selectedPrinciple === 'epistemology' ? 82 : selectedPrinciple === 'ethics' ? 52 : 22}
            r={8}
            fill={current.color}
          />
        </svg>
      </div>

      {/* Current principle detail */}
      <div
        className="p-4 rounded-xl mb-4 border"
        style={{
          backgroundColor: `${current.color}10`,
          borderColor: `${current.color}40`,
        }}
      >
        <p style={{ color: current.color }} className="font-bold text-lg mb-1">
          {current.title}
        </p>
        <p className="text-dark-400 text-sm mb-3">
          Axiom: <span className="text-dark-200 italic">{current.axiom}</span>
        </p>
        <p className="text-dark-300 text-sm">{current.description}</p>
      </div>

      {/* Implications */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600 mb-4">
        <p className="text-dark-300 font-medium mb-2">Implications:</p>
        <ul className="space-y-1">
          {current.implications.map((imp, i) => (
            <li key={i} className="text-dark-400 text-sm flex items-start gap-2">
              <span style={{ color: current.color }}>→</span>
              {imp}
            </li>
          ))}
        </ul>
      </div>

      {/* Quote */}
      <div className="p-4 rounded-xl bg-dark-900 border border-dark-700">
        <p className="text-dark-300 text-sm italic">"{current.quote.replace(/"/g, '')}"</p>
        <p className="text-dark-500 text-xs mt-2 text-right">— John Galt</p>
      </div>
    </div>
  );
}
