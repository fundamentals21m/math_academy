import { useState } from 'react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'personal' | 'political' | 'historical';
}

const events: TimelineEvent[] = [
  {
    id: '1',
    year: '1944-45',
    title: 'The Revolution',
    description: 'The Party seizes power in Britain after a period of civil war and atomic bombings. The exact details are deliberately obscured.',
    category: 'historical',
  },
  {
    id: '2',
    year: '~1954',
    title: 'Winston\'s Childhood Memories',
    description: 'Winston vaguely remembers his mother and sister disappearing during the purges. He recalls the last time he saw them.',
    category: 'personal',
  },
  {
    id: '3',
    year: '1960s',
    title: 'The Great Purges',
    description: 'Jones, Aaronson, and Rutherford—original leaders of the Revolution—are arrested, confess to treason, and are executed.',
    category: 'political',
  },
  {
    id: '4',
    year: '~1973',
    title: 'Winston Sees the Photograph',
    description: 'Winston discovers a newspaper photograph proving the three leaders were in New York when they allegedly confessed to being in Eurasia. He destroys it in the memory hole.',
    category: 'personal',
  },
  {
    id: '5',
    year: 'April 1984',
    title: 'Winston Begins His Diary',
    description: 'Winston purchases a diary from a prole shop and begins writing his forbidden thoughts: "DOWN WITH BIG BROTHER."',
    category: 'personal',
  },
  {
    id: '6',
    year: 'April 1984',
    title: 'Two Minutes Hate',
    description: 'Winston notices Julia and O\'Brien during the daily hate session. He believes O\'Brien shares his secret dissent.',
    category: 'political',
  },
  {
    id: '7',
    year: 'May 1984',
    title: 'Julia\'s Note',
    description: 'Julia passes Winston a note saying "I love you." Their affair begins.',
    category: 'personal',
  },
  {
    id: '8',
    year: 'May-June 1984',
    title: 'The Room Above the Shop',
    description: 'Winston rents the room above Mr. Charrington\'s shop. He and Julia meet there regularly, believing they have found a sanctuary.',
    category: 'personal',
  },
  {
    id: '9',
    year: 'Summer 1984',
    title: 'O\'Brien\'s Invitation',
    description: 'O\'Brien approaches Winston and invites him to his flat, where Winston and Julia pledge themselves to the Brotherhood.',
    category: 'political',
  },
  {
    id: '10',
    year: 'Summer 1984',
    title: 'Reading Goldstein\'s Book',
    description: 'Winston receives "The Theory and Practice of Oligarchical Collectivism" and reads about how the Party maintains power.',
    category: 'political',
  },
  {
    id: '11',
    year: 'Summer 1984',
    title: 'The Arrest',
    description: 'The telescreen behind the picture reveals itself. Mr. Charrington is Thought Police. Winston and Julia are arrested.',
    category: 'personal',
  },
  {
    id: '12',
    year: 'Months Later',
    title: 'Ministry of Love',
    description: 'Winston is tortured and "re-educated" by O\'Brien. He learns 2+2=5 if the Party says so.',
    category: 'political',
  },
  {
    id: '13',
    year: 'Final Days',
    title: 'Room 101',
    description: 'Faced with his worst fear—rats—Winston betrays Julia, screaming "Do it to Julia!" His spirit is broken.',
    category: 'personal',
  },
  {
    id: '14',
    year: 'After Release',
    title: 'He Loved Big Brother',
    description: 'Winston sits in the Chestnut Tree Café, a broken man. When victory is announced, he realizes he loves Big Brother.',
    category: 'personal',
  },
];

const categoryColors = {
  personal: { bg: 'bg-blue-500/20', border: 'border-blue-500', text: 'text-blue-400' },
  political: { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-400' },
  historical: { bg: 'bg-amber-500/20', border: 'border-amber-500', text: 'text-amber-400' },
};

export function TimelineExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const filteredEvents = selectedCategory
    ? events.filter((e) => e.category === selectedCategory)
    : events;

  return (
    <div className="p-6 bg-dark-800 rounded-lg">
      <h3 className="text-xl font-bold text-dark-100 mb-2">Timeline Explorer</h3>
      <p className="text-dark-400 mb-6">
        Explore the chronology of events in Nineteen Eighty-Four. Click events to see details.
      </p>

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
          All Events
        </button>
        {(['personal', 'political', 'historical'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? `${categoryColors[cat].bg} ${categoryColors[cat].text} border ${categoryColors[cat].border}`
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-600" />

        <div className="space-y-4">
          {filteredEvents.map((event) => {
            const colors = categoryColors[event.category];
            const isSelected = selectedEvent?.id === event.id;

            return (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(isSelected ? null : event)}
                className={`relative pl-10 cursor-pointer group`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 ${colors.border} ${
                    isSelected ? colors.bg : 'bg-dark-800'
                  } transition-colors`}
                />

                {/* Event card */}
                <div
                  className={`p-4 rounded-lg border transition-all ${
                    isSelected
                      ? `${colors.bg} ${colors.border}`
                      : 'bg-dark-700/50 border-dark-600 group-hover:border-dark-500'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-sm font-mono ${colors.text}`}>{event.year}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <h4 className="text-dark-100 font-semibold">{event.title}</h4>

                  {isSelected && (
                    <p className="text-dark-300 mt-2 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-dark-500 text-xs mt-6 italic">
        Note: Many dates in the novel are deliberately vague. The Party controls the past.
      </p>
    </div>
  );
}
