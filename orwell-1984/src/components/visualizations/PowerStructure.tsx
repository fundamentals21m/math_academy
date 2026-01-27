import { useState } from 'react';

interface SocialClass {
  id: string;
  name: string;
  percentage: string;
  description: string;
  characteristics: string[];
  color: string;
  bgColor: string;
}

interface Ministry {
  id: string;
  name: string;
  newspeak: string;
  function: string;
  realFunction: string;
  slogan?: string;
}

const socialClasses: SocialClass[] = [
  {
    id: 'inner',
    name: 'Inner Party',
    percentage: '~2%',
    description: 'The ruling elite. They make policy, have relative luxury, and can turn off their telescreens. O\'Brien belongs to this class.',
    characteristics: [
      'Can turn off telescreens',
      'Access to real coffee, wine, and good food',
      'Servants from the proles',
      'Knowledge of the Party\'s true methods',
      'Live in relative comfort',
    ],
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
  },
  {
    id: 'outer',
    name: 'Outer Party',
    percentage: '~13%',
    description: 'The bureaucratic class. Winston belongs here. They do the Party\'s work but are the most heavily surveilled and controlled.',
    characteristics: [
      'Constant telescreen surveillance',
      'Work in Ministries',
      'Victory Gin and synthetic food',
      'Cannot turn off telescreens',
      'Most likely to be thoughtcriminals',
    ],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
  },
  {
    id: 'proles',
    name: 'Proles',
    percentage: '~85%',
    description: 'The working masses. Considered subhuman by the Party, they are largely ignored. "If there is hope, it lies in the proles."',
    characteristics: [
      'Minimal surveillance',
      'No telescreens in homes',
      'Kept distracted with prolefeed',
      'Allowed emotional lives',
      'Potential revolutionary force (in theory)',
    ],
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
  },
];

const ministries: Ministry[] = [
  {
    id: 'minitrue',
    name: 'Ministry of Truth',
    newspeak: 'Minitrue',
    function: 'News, entertainment, education, and the fine arts',
    realFunction: 'Propaganda and historical revisionism. Winston works here, falsifying records so the Party is never wrong.',
    slogan: 'Who controls the past controls the future. Who controls the present controls the past.',
  },
  {
    id: 'minipax',
    name: 'Ministry of Peace',
    newspeak: 'Minipax',
    function: 'War',
    realFunction: 'Wages perpetual war against Eurasia or Eastasia. The enemy switches, but war is constant—it consumes surplus production and maintains fear.',
  },
  {
    id: 'miniluv',
    name: 'Ministry of Love',
    newspeak: 'Miniluv',
    function: 'Law and order',
    realFunction: 'Secret police, surveillance, torture, and "rehabilitation." This is where Room 101 is located. Its goal is to make you love Big Brother.',
  },
  {
    id: 'miniplenty',
    name: 'Ministry of Plenty',
    newspeak: 'Miniplenty',
    function: 'Economic affairs',
    realFunction: 'Manages rationing and artificial scarcity. Announces "increased" rations that are actually decreases. Keeps the population in perpetual want.',
  },
];

export function PowerStructure() {
  const [selectedClass, setSelectedClass] = useState<SocialClass | null>(null);
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  const [view, setView] = useState<'hierarchy' | 'ministries'>('hierarchy');

  return (
    <div className="p-6 bg-dark-800 rounded-lg">
      <h3 className="text-xl font-bold text-dark-100 mb-2">Power Structure of Oceania</h3>
      <p className="text-dark-400 mb-6">
        Explore the social hierarchy and government structure of the totalitarian superstate.
      </p>

      {/* View Toggle */}
      <div className="flex rounded-lg overflow-hidden border border-dark-600 mb-6 w-fit">
        <button
          onClick={() => { setView('hierarchy'); setSelectedMinistry(null); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            view === 'hierarchy'
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Social Hierarchy
        </button>
        <button
          onClick={() => { setView('ministries'); setSelectedClass(null); }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            view === 'ministries'
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          The Four Ministries
        </button>
      </div>

      {view === 'hierarchy' && (
        <div className="space-y-4">
          {/* Big Brother at top */}
          <div className="text-center p-4 bg-dark-700/50 rounded-lg border border-dark-600">
            <div className="text-4xl mb-2">👁️</div>
            <div className="text-xl font-bold text-dark-100">BIG BROTHER</div>
            <p className="text-dark-400 text-sm">
              The face of the Party. May or may not exist as a person.
              "Big Brother is watching you."
            </p>
          </div>

          {/* Pyramid visualization */}
          <div className="relative">
            {socialClasses.map((cls, index) => {
              const isSelected = selectedClass?.id === cls.id;
              const width = `${60 + index * 20}%`;

              return (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClass(isSelected ? null : cls)}
                  className={`mx-auto block p-4 rounded-lg border transition-all mb-2 ${
                    isSelected
                      ? `${cls.bgColor} border-current ${cls.color}`
                      : 'bg-dark-700/50 border-dark-600 hover:border-dark-500'
                  }`}
                  style={{ width }}
                >
                  <div className="flex justify-between items-center">
                    <span className={`font-bold ${isSelected ? cls.color : 'text-dark-100'}`}>
                      {cls.name}
                    </span>
                    <span className="text-dark-400 text-sm">{cls.percentage}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected class details */}
          {selectedClass && (
            <div className={`p-5 rounded-lg border ${selectedClass.bgColor} border-current ${selectedClass.color}`}>
              <h4 className={`text-xl font-bold ${selectedClass.color} mb-2`}>
                {selectedClass.name}
              </h4>
              <p className="text-dark-400 text-sm mb-2">{selectedClass.percentage} of population</p>
              <p className="text-dark-200 mb-4">{selectedClass.description}</p>
              <h5 className="text-dark-300 font-semibold mb-2">Characteristics:</h5>
              <ul className="space-y-1">
                {selectedClass.characteristics.map((char, idx) => (
                  <li key={idx} className="text-dark-300 text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedClass.bgColor} border ${selectedClass.color}`} />
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!selectedClass && (
            <div className="text-center py-6 text-dark-500 bg-dark-700/30 rounded-lg">
              Click a social class to learn more about it
            </div>
          )}
        </div>
      )}

      {view === 'ministries' && (
        <div className="space-y-4">
          {/* Ministry Grid */}
          <div className="grid grid-cols-2 gap-3">
            {ministries.map((ministry) => {
              const isSelected = selectedMinistry?.id === ministry.id;
              return (
                <button
                  key={ministry.id}
                  onClick={() => setSelectedMinistry(isSelected ? null : ministry)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'bg-primary-500/20 border-primary-500 text-primary-400'
                      : 'bg-dark-700/50 border-dark-600 hover:border-dark-500'
                  }`}
                >
                  <div className={`font-bold ${isSelected ? 'text-primary-400' : 'text-dark-100'}`}>
                    {ministry.name}
                  </div>
                  <div className="text-dark-500 text-sm font-mono">{ministry.newspeak}</div>
                  <div className="text-dark-400 text-sm mt-2">"{ministry.function}"</div>
                </button>
              );
            })}
          </div>

          {/* Selected Ministry Details */}
          {selectedMinistry && (
            <div className="p-5 rounded-lg border bg-primary-500/10 border-primary-500">
              <h4 className="text-xl font-bold text-primary-400 mb-1">
                {selectedMinistry.name}
              </h4>
              <p className="text-dark-500 font-mono text-sm mb-4">{selectedMinistry.newspeak}</p>

              <div className="space-y-4">
                <div>
                  <h5 className="text-dark-300 font-semibold mb-1">Official Function:</h5>
                  <p className="text-dark-400">{selectedMinistry.function}</p>
                </div>
                <div>
                  <h5 className="text-dark-300 font-semibold mb-1">Actual Function:</h5>
                  <p className="text-dark-200">{selectedMinistry.realFunction}</p>
                </div>
                {selectedMinistry.slogan && (
                  <blockquote className="border-l-4 border-primary-500 pl-4 italic text-dark-400">
                    "{selectedMinistry.slogan}"
                  </blockquote>
                )}
              </div>
            </div>
          )}

          {!selectedMinistry && (
            <div className="text-center py-6 text-dark-500 bg-dark-700/30 rounded-lg">
              Click a ministry to see how doublethink operates
            </div>
          )}
        </div>
      )}

      <p className="text-dark-500 text-xs mt-6 italic">
        "The Party seeks power entirely for its own sake. We are not interested in the good of others;
        we are interested solely in power."
      </p>
    </div>
  );
}
