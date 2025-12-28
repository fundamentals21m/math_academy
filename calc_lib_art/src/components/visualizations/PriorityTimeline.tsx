import { useState } from 'react';

interface Event {
  year: number;
  person: 'newton' | 'leibniz' | 'both';
  title: string;
  description: string;
}

export function PriorityTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    { year: 1665, person: 'newton', title: 'Newton discovers fluxions', description: 'During the "annus mirabilis" (miracle year), Newton develops his method of fluxions while Cambridge is closed due to plague. He keeps it private.' },
    { year: 1666, person: 'newton', title: 'Newton writes De Analysi', description: 'Newton writes a treatise on infinite series and fluxions, but does not publish it.' },
    { year: 1673, person: 'leibniz', title: 'Leibniz begins calculus work', description: 'Leibniz starts developing his own approach to calculus during his time in Paris.' },
    { year: 1675, person: 'leibniz', title: 'Leibniz invents notation', description: 'Leibniz introduces the integral sign ∫ and the d notation for differentials that we still use today.' },
    { year: 1684, person: 'leibniz', title: 'First publication', description: 'Leibniz publishes "Nova Methodus" in Acta Eruditorum—the first published work on calculus.' },
    { year: 1687, person: 'newton', title: 'Principia published', description: 'Newton publishes the Principia, using geometric methods but mentioning fluxions.' },
    { year: 1693, person: 'both', title: 'Correspondence begins', description: 'Newton and Leibniz exchange cordial letters, each acknowledging the other\'s work.' },
    { year: 1699, person: 'both', title: 'Priority dispute begins', description: 'Nicolas Fatio de Duillier accuses Leibniz of plagiarism, igniting the controversy.' },
    { year: 1711, person: 'both', title: 'Dispute escalates', description: 'The Royal Society investigates the priority dispute. Newton writes the report himself.' },
    { year: 1716, person: 'leibniz', title: 'Leibniz dies', description: 'Leibniz dies, the dispute unresolved. His notation ultimately prevails in Europe.' },
  ];

  const width = 700;
  const height = 300;
  const margin = { top: 60, right: 40, bottom: 60, left: 40 };
  const timelineY = height / 2;

  const yearMin = 1660;
  const yearMax = 1720;
  const toSvgX = (year: number) => margin.left + ((year - yearMin) / (yearMax - yearMin)) * (width - margin.left - margin.right);

  const getColor = (person: string) => {
    switch (person) {
      case 'newton': return '#3B82F6';
      case 'leibniz': return '#10B981';
      case 'both': return '#F59E0B';
      default: return '#9CA3AF';
    }
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-8">
      <h4 className="text-lg font-semibold text-primary-300 mb-4">
        Newton vs. Leibniz: Priority Timeline
      </h4>

      {/* Legend */}
      <div className="flex gap-6 mb-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500" />
          <span className="text-dark-300 text-sm">Newton</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500" />
          <span className="text-dark-300 text-sm">Leibniz</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-amber-500" />
          <span className="text-dark-300 text-sm">Both / Dispute</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-900 rounded-lg">
        {/* Main timeline */}
        <line
          x1={margin.left}
          y1={timelineY}
          x2={width - margin.right}
          y2={timelineY}
          stroke="#4B5563"
          strokeWidth={3}
        />

        {/* Decade markers */}
        {[1660, 1670, 1680, 1690, 1700, 1710, 1720].map((year) => (
          <g key={year}>
            <line
              x1={toSvgX(year)}
              y1={timelineY - 8}
              x2={toSvgX(year)}
              y2={timelineY + 8}
              stroke="#6B7280"
              strokeWidth={2}
            />
            <text
              x={toSvgX(year)}
              y={timelineY + 30}
              textAnchor="middle"
              fill="#9CA3AF"
              fontSize="12"
            >
              {year}
            </text>
          </g>
        ))}

        {/* Events */}
        {events.map((event, i) => {
          const x = toSvgX(event.year);
          const yOffset = event.person === 'newton' ? -50 : event.person === 'leibniz' ? 50 : 0;
          const isSelected = selectedEvent === event;

          return (
            <g
              key={i}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedEvent(isSelected ? null : event)}
            >
              {/* Connector line */}
              <line
                x1={x}
                y1={timelineY}
                x2={x}
                y2={timelineY + yOffset}
                stroke={getColor(event.person)}
                strokeWidth={isSelected ? 3 : 2}
                strokeDasharray={event.person === 'both' ? '4,2' : 'none'}
              />

              {/* Event circle */}
              <circle
                cx={x}
                cy={timelineY + yOffset}
                r={isSelected ? 12 : 8}
                fill={getColor(event.person)}
                stroke={isSelected ? 'white' : 'none'}
                strokeWidth={2}
              />

              {/* Year label on hover */}
              {isSelected && (
                <text
                  x={x}
                  y={timelineY + yOffset + (event.person === 'newton' ? -20 : event.person === 'leibniz' ? 28 : -20)}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="bold"
                >
                  {event.year}
                </text>
              )}
            </g>
          );
        })}

        {/* Labels for Newton/Leibniz tracks */}
        <text x={margin.left - 5} y={timelineY - 45} fill="#3B82F6" fontSize="12" textAnchor="end">
          Newton
        </text>
        <text x={margin.left - 5} y={timelineY + 55} fill="#10B981" fontSize="12" textAnchor="end">
          Leibniz
        </text>
      </svg>

      {/* Selected event details */}
      {selectedEvent ? (
        <div className="mt-4 p-4 bg-dark-700 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getColor(selectedEvent.person) }}
            />
            <span className="text-lg font-semibold text-dark-200">
              {selectedEvent.year}: {selectedEvent.title}
            </span>
          </div>
          <p className="text-dark-300 text-sm">{selectedEvent.description}</p>
        </div>
      ) : (
        <div className="mt-4 p-4 bg-dark-700 rounded-lg text-center">
          <p className="text-dark-400 text-sm">Click on any event circle to learn more</p>
        </div>
      )}

      {/* Key insight */}
      <div className="mt-4 p-4 bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-lg">
        <p className="text-dark-300 text-sm">
          <span className="text-primary-400 font-semibold">The Verdict:</span>{' '}
          Modern historians agree that Newton and Leibniz developed calculus independently.
          Newton discovered it first (1665-66) but Leibniz published first (1684).
          Both contributions were essential—Leibniz's superior notation is what we use today.
        </p>
      </div>
    </div>
  );
}
