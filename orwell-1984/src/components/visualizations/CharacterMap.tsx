import { useState } from 'react';

interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  allegiance: 'party' | 'resistance' | 'prole' | 'ambiguous';
  connections: { to: string; relationship: string }[];
}

const characters: Character[] = [
  {
    id: 'winston',
    name: 'Winston Smith',
    role: 'Protagonist',
    description: 'A 39-year-old Outer Party member who works at the Ministry of Truth, rewriting history. He secretly harbors rebellious thoughts and dreams of overthrowing the Party.',
    allegiance: 'resistance',
    connections: [
      { to: 'julia', relationship: 'Lover' },
      { to: 'obrien', relationship: 'Believes is ally' },
      { to: 'charrington', relationship: 'Landlord' },
      { to: 'syme', relationship: 'Colleague' },
      { to: 'parsons', relationship: 'Neighbor' },
    ],
  },
  {
    id: 'julia',
    name: 'Julia',
    role: 'Winston\'s Lover',
    description: 'A 26-year-old woman who works in the Fiction Department. Outwardly a zealous Party member, she secretly rebels through personal pleasures and affairs.',
    allegiance: 'resistance',
    connections: [
      { to: 'winston', relationship: 'Lover' },
      { to: 'obrien', relationship: 'Trusts blindly' },
    ],
  },
  {
    id: 'obrien',
    name: 'O\'Brien',
    role: 'Inner Party Member',
    description: 'A powerful Inner Party member whom Winston believes is a secret rebel. In reality, he is a Thought Police agent who has been watching Winston for seven years.',
    allegiance: 'party',
    connections: [
      { to: 'winston', relationship: 'Torturer' },
      { to: 'julia', relationship: 'Arrests' },
      { to: 'bigbrother', relationship: 'Serves' },
    ],
  },
  {
    id: 'bigbrother',
    name: 'Big Brother',
    role: 'Supreme Leader',
    description: 'The face of the Party. Whether he exists as a real person or is purely symbolic is unknown. His image is everywhere; his persona embodies the Party.',
    allegiance: 'party',
    connections: [
      { to: 'obrien', relationship: 'Served by' },
      { to: 'goldstein', relationship: 'Enemy' },
    ],
  },
  {
    id: 'goldstein',
    name: 'Emmanuel Goldstein',
    role: 'Enemy of the People',
    description: 'The supposed leader of the Brotherhood, a secret resistance movement. He may be real, a Party invention, or long dead. His book explains how the Party works.',
    allegiance: 'ambiguous',
    connections: [
      { to: 'bigbrother', relationship: 'Opposes' },
      { to: 'winston', relationship: 'Inspires' },
    ],
  },
  {
    id: 'charrington',
    name: 'Mr. Charrington',
    role: 'Shop Owner / Thought Police',
    description: 'Appears to be a friendly old prole who runs an antique shop. Actually a member of the Thought Police who has been setting a trap for Winston.',
    allegiance: 'party',
    connections: [
      { to: 'winston', relationship: 'Betrays' },
      { to: 'julia', relationship: 'Betrays' },
    ],
  },
  {
    id: 'syme',
    name: 'Syme',
    role: 'Newspeak Specialist',
    description: 'Winston\'s colleague who works on the Newspeak dictionary. Brilliant but too intelligent and outspoken. Winston correctly predicts he will be vaporized.',
    allegiance: 'party',
    connections: [
      { to: 'winston', relationship: 'Colleague' },
    ],
  },
  {
    id: 'parsons',
    name: 'Tom Parsons',
    role: 'Winston\'s Neighbor',
    description: 'A simple, devoted Party member. His children are zealous Junior Spies. He is eventually arrested after his daughter reports him for thoughtcrime in his sleep.',
    allegiance: 'party',
    connections: [
      { to: 'winston', relationship: 'Neighbor' },
    ],
  },
];

const allegianceColors = {
  party: { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-400', label: 'Party' },
  resistance: { bg: 'bg-green-500/20', border: 'border-green-500', text: 'text-green-400', label: 'Resistance' },
  prole: { bg: 'bg-blue-500/20', border: 'border-blue-500', text: 'text-blue-400', label: 'Prole' },
  ambiguous: { bg: 'bg-purple-500/20', border: 'border-purple-500', text: 'text-purple-400', label: 'Ambiguous' },
};

export function CharacterMap() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [filterAllegiance, setFilterAllegiance] = useState<string | null>(null);

  const filteredCharacters = filterAllegiance
    ? characters.filter((c) => c.allegiance === filterAllegiance)
    : characters;

  const getCharacterById = (id: string) => characters.find((c) => c.id === id);

  return (
    <div className="p-6 bg-dark-800 rounded-lg">
      <h3 className="text-xl font-bold text-dark-100 mb-2">Character Relationship Map</h3>
      <p className="text-dark-400 mb-6">
        Explore the characters of Nineteen Eighty-Four and their relationships.
      </p>

      {/* Allegiance Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilterAllegiance(null)}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            filterAllegiance === null
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          All Characters
        </button>
        {Object.entries(allegianceColors).map(([key, colors]) => (
          <button
            key={key}
            onClick={() => setFilterAllegiance(key)}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              filterAllegiance === key
                ? `${colors.bg} ${colors.text} border ${colors.border}`
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {colors.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Character Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredCharacters.map((character) => {
            const colors = allegianceColors[character.allegiance];
            const isSelected = selectedCharacter?.id === character.id;

            return (
              <button
                key={character.id}
                onClick={() => setSelectedCharacter(isSelected ? null : character)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  isSelected
                    ? `${colors.bg} ${colors.border}`
                    : 'bg-dark-700/50 border-dark-600 hover:border-dark-500'
                }`}
              >
                <div className={`text-lg font-semibold ${isSelected ? colors.text : 'text-dark-100'}`}>
                  {character.name}
                </div>
                <div className="text-sm text-dark-400">{character.role}</div>
                <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}>
                  {colors.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Character Details */}
        <div className={`p-5 rounded-lg border transition-all ${
          selectedCharacter
            ? `${allegianceColors[selectedCharacter.allegiance].bg} ${allegianceColors[selectedCharacter.allegiance].border}`
            : 'bg-dark-700/30 border-dark-600'
        }`}>
          {selectedCharacter ? (
            <>
              <h4 className={`text-xl font-bold ${allegianceColors[selectedCharacter.allegiance].text} mb-1`}>
                {selectedCharacter.name}
              </h4>
              <p className="text-dark-400 text-sm mb-4">{selectedCharacter.role}</p>
              <p className="text-dark-200 mb-6 leading-relaxed">
                {selectedCharacter.description}
              </p>

              {selectedCharacter.connections.length > 0 && (
                <>
                  <h5 className="text-dark-300 font-semibold mb-3">Relationships:</h5>
                  <div className="space-y-2">
                    {selectedCharacter.connections.map((conn, idx) => {
                      const target = getCharacterById(conn.to);
                      if (!target) return null;
                      const targetColors = allegianceColors[target.allegiance];

                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedCharacter(target)}
                          className="flex items-center gap-3 w-full p-2 rounded bg-dark-800/50 hover:bg-dark-800 transition-colors text-left"
                        >
                          <span className={`w-3 h-3 rounded-full ${targetColors.bg} border ${targetColors.border}`} />
                          <span className="text-dark-200">{target.name}</span>
                          <span className="text-dark-500 text-sm">— {conn.relationship}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-dark-500">
              <p className="text-4xl mb-4">👤</p>
              <p>Select a character to view their details and relationships</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
