import { useState } from 'react';

interface NewspeakWord {
  newspeak: string;
  oldspeak: string;
  category: 'A' | 'B' | 'C';
  explanation: string;
}

const dictionary: NewspeakWord[] = [
  // A vocabulary - everyday words
  { newspeak: 'good', oldspeak: 'good', category: 'A', explanation: 'Retained but with restricted meaning' },
  { newspeak: 'ungood', oldspeak: 'bad', category: 'A', explanation: 'Negation by prefix un-' },
  { newspeak: 'plusgood', oldspeak: 'very good, great', category: 'A', explanation: 'Intensification by prefix plus-' },
  { newspeak: 'doubleplusgood', oldspeak: 'excellent, superb', category: 'A', explanation: 'Maximum intensification' },
  { newspeak: 'ungood', oldspeak: 'bad', category: 'A', explanation: 'Bad is eliminated entirely' },
  { newspeak: 'plusungood', oldspeak: 'very bad', category: 'A', explanation: 'Words like "terrible" eliminated' },
  { newspeak: 'doubleplusungood', oldspeak: 'the worst', category: 'A', explanation: 'Maximum negative' },
  { newspeak: 'speedful', oldspeak: 'fast, quick, rapid', category: 'A', explanation: 'Adjective formed from noun' },
  { newspeak: 'unspeedful', oldspeak: 'slow', category: 'A', explanation: 'Negation replaces separate word' },
  { newspeak: 'cold', oldspeak: 'cold', category: 'A', explanation: 'Retained' },
  { newspeak: 'uncold', oldspeak: 'warm, hot', category: 'A', explanation: 'Hot/warm eliminated' },

  // B vocabulary - political/ideological
  { newspeak: 'goodthink', oldspeak: 'orthodoxy', category: 'B', explanation: 'Thinking in accordance with Party principles' },
  { newspeak: 'crimethink', oldspeak: 'thoughtcrime', category: 'B', explanation: 'Any unorthodox thought' },
  { newspeak: 'doublethink', oldspeak: 'reality control', category: 'B', explanation: 'Holding contradictory beliefs simultaneously' },
  { newspeak: 'blackwhite', oldspeak: 'loyal acceptance', category: 'B', explanation: 'Calling black white if the Party demands' },
  { newspeak: 'duckspeak', oldspeak: 'speaking without thinking', category: 'B', explanation: 'Quacking orthodoxy like a duck' },
  { newspeak: 'bellyfeel', oldspeak: 'blind emotional acceptance', category: 'B', explanation: 'Accepting without understanding' },
  { newspeak: 'oldthink', oldspeak: 'pre-revolutionary thought', category: 'B', explanation: 'Ideas from before the Revolution' },
  { newspeak: 'ownlife', oldspeak: 'individualism, privacy', category: 'B', explanation: 'Eccentricity, desire for solitude' },
  { newspeak: 'sexcrime', oldspeak: 'sexual immorality', category: 'B', explanation: 'Any sexual act for pleasure' },
  { newspeak: 'facecrime', oldspeak: 'improper expression', category: 'B', explanation: 'Having wrong facial expression' },
  { newspeak: 'thoughtcrime', oldspeak: 'unorthodox thoughts', category: 'B', explanation: 'The essential crime' },
  { newspeak: 'prolefeed', oldspeak: 'entertainment for proles', category: 'B', explanation: 'Rubbishy newspapers, films, etc.' },
  { newspeak: 'Ingsoc', oldspeak: 'English Socialism', category: 'B', explanation: 'The Party\'s ideology' },
  { newspeak: 'Minipax', oldspeak: 'Ministry of Peace', category: 'B', explanation: 'Conducts war' },
  { newspeak: 'Miniluv', oldspeak: 'Ministry of Love', category: 'B', explanation: 'Maintains law and order (torture)' },
  { newspeak: 'Minitrue', oldspeak: 'Ministry of Truth', category: 'B', explanation: 'Propaganda and history falsification' },
  { newspeak: 'Miniplenty', oldspeak: 'Ministry of Plenty', category: 'B', explanation: 'Economic affairs (rationing)' },
  { newspeak: 'unperson', oldspeak: 'person who never existed', category: 'B', explanation: 'Someone vaporized from all records' },
  { newspeak: 'joycamp', oldspeak: 'forced labor camp', category: 'B', explanation: 'Euphemism for brutal camps' },
  { newspeak: 'goodsex', oldspeak: 'intercourse for procreation only', category: 'B', explanation: 'Sex without pleasure, duty to Party' },
  { newspeak: 'artsem', oldspeak: 'artificial insemination', category: 'B', explanation: 'Goal: eliminate sex entirely' },

  // C vocabulary - scientific/technical
  { newspeak: 'speedwise', oldspeak: 'in terms of speed', category: 'C', explanation: '-wise suffix for technical contexts' },
];

const categoryInfo = {
  A: { name: 'A Vocabulary', description: 'Everyday words for simple concepts', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  B: { name: 'B Vocabulary', description: 'Political and ideological terms', color: 'text-red-400', bg: 'bg-red-500/20' },
  C: { name: 'C Vocabulary', description: 'Scientific and technical terms', color: 'text-green-400', bg: 'bg-green-500/20' },
};

export function NewspeakTranslator() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'A' | 'B' | 'C' | null>(null);
  const [direction, setDirection] = useState<'toNewspeak' | 'toOldspeak'>('toNewspeak');

  const filteredWords = dictionary.filter((word) => {
    const matchesCategory = selectedCategory === null || word.category === selectedCategory;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      searchTerm === '' ||
      word.newspeak.toLowerCase().includes(searchLower) ||
      word.oldspeak.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 bg-dark-800 rounded-lg">
      <h3 className="text-xl font-bold text-dark-100 mb-2">Newspeak Dictionary</h3>
      <p className="text-dark-400 mb-6">
        Explore Newspeak vocabulary. The purpose of Newspeak is to make thoughtcrime impossible
        by eliminating words and concepts needed to express unorthodox ideas.
      </p>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search words..."
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500"
          />
        </div>

        {/* Direction Toggle */}
        <div className="flex rounded-lg overflow-hidden border border-dark-600">
          <button
            onClick={() => setDirection('toNewspeak')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              direction === 'toNewspeak'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Oldspeak → Newspeak
          </button>
          <button
            onClick={() => setDirection('toOldspeak')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              direction === 'toOldspeak'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            Newspeak → Oldspeak
          </button>
        </div>
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
        {(['A', 'B', 'C'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? `${categoryInfo[cat].bg} ${categoryInfo[cat].color}`
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {categoryInfo[cat].name}
          </button>
        ))}
      </div>

      {/* Category Descriptions */}
      {selectedCategory && (
        <div className={`p-4 rounded-lg mb-6 ${categoryInfo[selectedCategory].bg}`}>
          <h4 className={`font-semibold ${categoryInfo[selectedCategory].color}`}>
            {categoryInfo[selectedCategory].name}
          </h4>
          <p className="text-dark-300 text-sm">{categoryInfo[selectedCategory].description}</p>
        </div>
      )}

      {/* Word List */}
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {filteredWords.map((word, idx) => (
          <div
            key={idx}
            className="p-4 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-dark-500 transition-colors"
          >
            <div className="flex items-center gap-4 mb-2">
              {direction === 'toNewspeak' ? (
                <>
                  <span className="text-dark-300">{word.oldspeak}</span>
                  <span className="text-dark-500">→</span>
                  <span className="text-primary-400 font-semibold">{word.newspeak}</span>
                </>
              ) : (
                <>
                  <span className="text-primary-400 font-semibold">{word.newspeak}</span>
                  <span className="text-dark-500">→</span>
                  <span className="text-dark-300">{word.oldspeak}</span>
                </>
              )}
              <span className={`text-xs px-2 py-0.5 rounded ${categoryInfo[word.category].bg} ${categoryInfo[word.category].color}`}>
                {word.category}
              </span>
            </div>
            <p className="text-dark-400 text-sm">{word.explanation}</p>
          </div>
        ))}
      </div>

      {filteredWords.length === 0 && (
        <div className="text-center py-8 text-dark-500">
          No words found. Try a different search term.
        </div>
      )}

      <p className="text-dark-500 text-xs mt-6 italic">
        "The purpose of Newspeak was not only to provide a medium of expression for the world-view
        and mental habits proper to the devotees of Ingsoc, but to make all other modes of thought impossible."
      </p>
    </div>
  );
}
