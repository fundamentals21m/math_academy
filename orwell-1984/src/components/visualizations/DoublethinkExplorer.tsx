import { useState } from 'react';

interface DoublethinkExample {
  id: string;
  title: string;
  contradiction: [string, string];
  explanation: string;
  quote?: string;
  category: 'slogan' | 'ministry' | 'practice';
}

const examples: DoublethinkExample[] = [
  {
    id: 'war-peace',
    title: 'WAR IS PEACE',
    contradiction: ['War', 'Peace'],
    explanation: 'Perpetual war keeps the population united against external enemies and justifies scarcity. War IS peace because it maintains the stable social order the Party requires.',
    quote: 'War is waged by each ruling group against its own subjects, and the object of the war is not to make or prevent conquests of territory, but to keep the structure of society intact.',
    category: 'slogan',
  },
  {
    id: 'freedom-slavery',
    title: 'FREEDOM IS SLAVERY',
    contradiction: ['Freedom', 'Slavery'],
    explanation: 'Individual freedom leads to failure and death. Only through complete submission to the Party (slavery) can one be "free" from the burden of independent thought and decision.',
    quote: 'Alone—free—the human being is always defeated. It must be so, because every human being is doomed to die.',
    category: 'slogan',
  },
  {
    id: 'ignorance-strength',
    title: 'IGNORANCE IS STRENGTH',
    contradiction: ['Ignorance', 'Strength'],
    explanation: 'Knowledge leads to doubt and questioning. Ignorance of the truth makes the Party invincible. The masses\' ignorance is the Party\'s strength.',
    quote: 'The Party told you to reject the evidence of your eyes and ears. It was their final, most essential command.',
    category: 'slogan',
  },
  {
    id: 'miniluv',
    title: 'Ministry of Love',
    contradiction: ['Love', 'Torture'],
    explanation: 'The Ministry of Love (Miniluv) maintains law and order through arrest, torture, and execution. Its purpose is to instill love for Big Brother—through pain.',
    quote: 'The place where there is no darkness... was the imagined future, which one would never see, but which, by foreknowledge, one could mystically share in.',
    category: 'ministry',
  },
  {
    id: 'minipax',
    title: 'Ministry of Peace',
    contradiction: ['Peace', 'War'],
    explanation: 'The Ministry of Peace (Minipax) wages perpetual war. Peace is maintained by ensuring the population is always at war with one of the other superstates.',
    category: 'ministry',
  },
  {
    id: 'minitrue',
    title: 'Ministry of Truth',
    contradiction: ['Truth', 'Lies'],
    explanation: 'The Ministry of Truth (Minitrue) produces propaganda and rewrites history. Its purpose is to ensure the "truth" always supports the Party\'s current position.',
    quote: 'Who controls the past controls the future. Who controls the present controls the past.',
    category: 'ministry',
  },
  {
    id: 'miniplenty',
    title: 'Ministry of Plenty',
    contradiction: ['Plenty', 'Scarcity'],
    explanation: 'The Ministry of Plenty (Miniplenty) manages rationing and ensures perpetual scarcity. It announces "increased" rations that are actually decreases.',
    category: 'ministry',
  },
  {
    id: 'memory-hole',
    title: 'The Memory Hole',
    contradiction: ['Memory', 'Forgetting'],
    explanation: 'Documents are destroyed to erase the past, yet the Party claims the past is immutable. Winston destroys evidence of lies while believing the Party never lies.',
    quote: 'And if all others accepted the lie which the Party imposed—if all records told the same tale—then the lie passed into history and became truth.',
    category: 'practice',
  },
  {
    id: 'two-plus-two',
    title: '2 + 2 = 5',
    contradiction: ['Mathematical Truth', 'Party Truth'],
    explanation: 'If the Party says 2+2=5, it must be true. Ultimate doublethink is accepting both mathematical reality AND Party decree—knowing and not knowing simultaneously.',
    quote: 'In the end the Party would announce that two and two made five, and you would have to believe it.',
    category: 'practice',
  },
  {
    id: 'controlled-insanity',
    title: 'Controlled Insanity',
    contradiction: ['Sanity', 'Insanity'],
    explanation: 'Doublethink itself: to know and not know, to be conscious of telling lies while genuinely believing them. The sane mind deliberately inducing controlled insanity.',
    quote: 'Doublethink means the power of holding two contradictory beliefs in one\'s mind simultaneously, and accepting both of them.',
    category: 'practice',
  },
];

const categoryColors = {
  slogan: { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-400', label: 'Party Slogans' },
  ministry: { bg: 'bg-blue-500/20', border: 'border-blue-500', text: 'text-blue-400', label: 'Ministries' },
  practice: { bg: 'bg-purple-500/20', border: 'border-purple-500', text: 'text-purple-400', label: 'Practices' },
};

export function DoublethinkExplorer() {
  const [selectedExample, setSelectedExample] = useState<DoublethinkExample | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredExamples = selectedCategory
    ? examples.filter((e) => e.category === selectedCategory)
    : examples;

  return (
    <div className="p-6 bg-dark-800 rounded-lg">
      <h3 className="text-xl font-bold text-dark-100 mb-2">Doublethink Explorer</h3>
      <p className="text-dark-400 mb-6">
        Explore how the Party uses contradictory concepts to control thought.
        Doublethink is the ability to hold two contradictory beliefs simultaneously and accept both.
      </p>

      {/* Definition Box */}
      <div className="p-4 bg-dark-700/50 rounded-lg border border-dark-600 mb-6">
        <h4 className="text-primary-400 font-semibold mb-2">What is Doublethink?</h4>
        <p className="text-dark-300 text-sm italic">
          "To know and not to know, to be conscious of complete truthfulness while telling carefully
          constructed lies, to hold simultaneously two opinions which cancelled out, knowing them to
          be contradictory and believing in both of them, to use logic against logic..."
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            selectedCategory === null
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          All
        </button>
        {Object.entries(categoryColors).map(([key, colors]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              selectedCategory === key
                ? `${colors.bg} ${colors.text} border ${colors.border}`
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {colors.label}
          </button>
        ))}
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {filteredExamples.map((example) => {
          const colors = categoryColors[example.category];
          const isSelected = selectedExample?.id === example.id;

          return (
            <button
              key={example.id}
              onClick={() => setSelectedExample(isSelected ? null : example)}
              className={`p-4 rounded-lg border text-left transition-all ${
                isSelected
                  ? `${colors.bg} ${colors.border}`
                  : 'bg-dark-700/50 border-dark-600 hover:border-dark-500'
              }`}
            >
              <h4 className={`font-bold text-lg ${isSelected ? colors.text : 'text-dark-100'}`}>
                {example.title}
              </h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-dark-300">{example.contradiction[0]}</span>
                <span className="text-dark-500">⟷</span>
                <span className="text-dark-300">{example.contradiction[1]}</span>
              </div>
              <span className={`inline-block mt-3 text-xs px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}>
                {colors.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Example Details */}
      {selectedExample && (
        <div className={`p-5 rounded-lg border ${categoryColors[selectedExample.category].bg} ${categoryColors[selectedExample.category].border}`}>
          <h4 className={`text-xl font-bold ${categoryColors[selectedExample.category].text} mb-4`}>
            {selectedExample.title}
          </h4>

          {/* Contradiction Visualization */}
          <div className="flex items-center justify-center gap-8 py-6 mb-4 bg-dark-800/50 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-dark-100">{selectedExample.contradiction[0]}</div>
              <div className="text-dark-500 text-sm">Appears to mean</div>
            </div>
            <div className="text-4xl text-primary-400">=</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dark-100">{selectedExample.contradiction[1]}</div>
              <div className="text-dark-500 text-sm">Actually means</div>
            </div>
          </div>

          <p className="text-dark-200 mb-4 leading-relaxed">
            {selectedExample.explanation}
          </p>

          {selectedExample.quote && (
            <blockquote className="border-l-4 border-dark-500 pl-4 italic text-dark-400">
              "{selectedExample.quote}"
            </blockquote>
          )}
        </div>
      )}

      {!selectedExample && (
        <div className="text-center py-8 text-dark-500 bg-dark-700/30 rounded-lg">
          <p className="text-4xl mb-4">🧠</p>
          <p>Select an example to explore its contradictions</p>
        </div>
      )}
    </div>
  );
}
