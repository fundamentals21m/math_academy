import { LessonLayout } from '@/components/layout/LessonLayout';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2>Book III: Circles</h2>

      <p>
        Book III of the <em>Elements</em> is devoted entirely to the study of circles. It develops
        the fundamental properties of circles, including tangent lines, chords, arcs, and inscribed
        angles. Many of the propositions in this book are essential for the constructions in Book IV
        and for later developments in geometry.
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 1</h3>
        <p className="text-dark-200">
          <strong>Equal circles</strong> are those whose diameters are equal, or whose radii are equal.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 2</h3>
        <p className="text-dark-200">
          A straight line is said to <strong>touch a circle</strong> which, meeting the circle and
          being produced, does not cut the circle.
        </p>
      </div>

      <p className="mt-4">
        This is the definition of a <strong>tangent line</strong>. A tangent touches the circle at
        exactly one point and, when extended in either direction, remains outside the circle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          {/* Circle */}
          <circle cx="100" cy="100" r="60" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Tangent line */}
          <line x1="20" y1="160" x2="180" y2="160" stroke="#3b82f6" strokeWidth="2" />
          {/* Point of tangency */}
          <circle cx="100" cy="160" r="4" fill="#f59e0b" />
          {/* Radius to tangent */}
          <line x1="100" y1="100" x2="100" y2="160" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Right angle marker */}
          <path d="M 90 160 L 90 150 L 100 150" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="100" y="90" fill="#f59e0b" fontSize="12" textAnchor="middle">O</text>
          <text x="100" y="175" fill="#f59e0b" fontSize="12" textAnchor="middle">T</text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 3</h3>
        <p className="text-dark-200">
          Circles are said to <strong>touch one another</strong> which meet one another but do not
          cut one another.
        </p>
      </div>

      <p className="mt-4">
        Two circles can be tangent either <em>internally</em> (one inside the other) or{' '}
        <em>externally</em> (side by side).
      </p>

      <div className="flex justify-center gap-8 my-6">
        <svg viewBox="0 0 150 150" className="w-36 h-36">
          {/* Outer circle */}
          <circle cx="75" cy="75" r="50" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Inner circle (internally tangent) */}
          <circle cx="95" cy="75" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Point of tangency */}
          <circle cx="125" cy="75" r="3" fill="#22c55e" />
          <text x="75" y="145" fill="#6b7280" fontSize="10" textAnchor="middle">Internal tangency</text>
        </svg>
        <svg viewBox="0 0 200 150" className="w-48 h-36">
          {/* Left circle */}
          <circle cx="60" cy="75" r="40" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Right circle (externally tangent) */}
          <circle cx="130" cy="75" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Point of tangency */}
          <circle cx="100" cy="75" r="3" fill="#22c55e" />
          <text x="100" y="135" fill="#6b7280" fontSize="10" textAnchor="middle">External tangency</text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 4</h3>
        <p className="text-dark-200">
          Straight lines in a circle are said to be <strong>equally distant from the center</strong>{' '}
          when the perpendiculars drawn to them from the center are equal.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 5</h3>
        <p className="text-dark-200">
          And that straight line is said to be <strong>at a greater distance</strong> on which the
          greater perpendicular falls.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          {/* Circle */}
          <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center */}
          <circle cx="100" cy="100" r="3" fill="#f59e0b" />
          {/* Chord 1 (closer to center) */}
          <line x1="50" y1="60" x2="150" y2="60" stroke="#3b82f6" strokeWidth="2" />
          {/* Perpendicular to chord 1 */}
          <line x1="100" y1="100" x2="100" y2="60" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Chord 2 (farther from center) */}
          <line x1="40" y1="140" x2="160" y2="140" stroke="#22c55e" strokeWidth="2" />
          {/* Perpendicular to chord 2 */}
          <line x1="100" y1="100" x2="100" y2="140" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Labels */}
          <text x="100" y="90" fill="#f59e0b" fontSize="10" textAnchor="middle">O</text>
          <text x="110" y="55" fill="#3b82f6" fontSize="10">d₁</text>
          <text x="110" y="150" fill="#22c55e" fontSize="10">d₂</text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 6</h3>
        <p className="text-dark-200">
          A <strong>segment of a circle</strong> is the figure contained by a straight line and a
          circumference of a circle.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 150" className="w-48 h-36">
          {/* Circle arc and segment */}
          <path
            d="M 40 100 A 60 60 0 0 1 160 100 L 40 100"
            fill="#f59e0b"
            fillOpacity="0.2"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Chord */}
          <line x1="40" y1="100" x2="160" y2="100" stroke="#3b82f6" strokeWidth="2" />
          {/* Labels */}
          <text x="100" y="80" fill="#f59e0b" fontSize="12" textAnchor="middle">segment</text>
          <text x="100" y="115" fill="#3b82f6" fontSize="10" textAnchor="middle">chord</text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 7</h3>
        <p className="text-dark-200">
          An <strong>angle of a segment</strong> is that contained by a straight line and a
          circumference of a circle.
        </p>
      </div>

      <p className="mt-4">
        This is the <em>hornlike angle</em> (also called a <em>horn angle</em> or{' '}
        <em>mixtilinear angle</em>) between a chord and the arc. Ancient geometers debated whether
        such angles could be compared to rectilinear angles.
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 8</h3>
        <p className="text-dark-200">
          An <strong>angle in a segment</strong> is the angle which, when a point is taken on the
          circumference of the segment and straight lines are joined from it to the ends of the
          straight line which is the base of the segment, is contained by the straight lines so
          joined.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 180" className="w-48 h-44">
          {/* Circle */}
          <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Chord (base of segment) */}
          <line x1="40" y1="130" x2="160" y2="130" stroke="#3b82f6" strokeWidth="2" />
          {/* Point on arc */}
          <circle cx="100" cy="30" r="4" fill="#22c55e" />
          {/* Lines from point to chord endpoints */}
          <line x1="100" y1="30" x2="40" y2="130" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="100" y1="30" x2="160" y2="130" stroke="#22c55e" strokeWidth="1.5" />
          {/* Angle arc */}
          <path d="M 80 50 A 25 25 0 0 1 120 50" fill="none" stroke="#22c55e" strokeWidth="1" />
          {/* Labels */}
          <text x="100" y="20" fill="#22c55e" fontSize="10" textAnchor="middle">P</text>
          <text x="30" y="135" fill="#3b82f6" fontSize="10">A</text>
          <text x="165" y="135" fill="#3b82f6" fontSize="10">B</text>
          <text x="100" y="70" fill="#22c55e" fontSize="10" textAnchor="middle">∠APB</text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 9</h3>
        <p className="text-dark-200">
          And when the straight lines containing the angle cut off a circumference, the angle is
          said to <strong>stand upon</strong> that circumference.
        </p>
      </div>

      <p className="mt-4">
        The inscribed angle <em>stands on</em> or <em>subtends</em> the arc that lies between its
        two sides (but not including the arc on which the vertex lies).
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 10</h3>
        <p className="text-dark-200">
          A <strong>sector of a circle</strong> is the figure which, when an angle is constructed
          at the center of the circle, is contained by the straight lines containing the angle and
          the circumference cut off by them.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          {/* Sector */}
          <path
            d="M 100 100 L 160 60 A 70 70 0 0 1 160 140 L 100 100"
            fill="#f59e0b"
            fillOpacity="0.2"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Center */}
          <circle cx="100" cy="100" r="3" fill="#f59e0b" />
          {/* Rest of circle (dashed) */}
          <circle cx="100" cy="100" r="70" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Labels */}
          <text x="130" y="105" fill="#f59e0b" fontSize="12" textAnchor="middle">sector</text>
          <text x="95" y="95" fill="#f59e0b" fontSize="10">O</text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <h3 className="text-amber-400 text-lg font-semibold mb-4">Definition 11</h3>
        <p className="text-dark-200">
          <strong>Similar segments of circles</strong> are those which admit equal angles, or in
          which the angles are equal to one another.
        </p>
      </div>

      <p className="mt-4">
        Two segments are similar if they contain equal inscribed angles. This is equivalent to
        saying they are cut off by chords that subtend equal central angles, or that the segments
        are congruent arcs scaled by the same factor.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 mt-6 border border-dark-700">
        <h3 className="text-amber-400 font-semibold mb-3">Summary of Book III Topics</h3>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Finding the center of a circle (III.1)</li>
          <li>Properties of chords and their distances from the center (III.2-15)</li>
          <li>Tangent lines and their construction (III.16-19)</li>
          <li>Inscribed angles and central angles (III.20-22)</li>
          <li>Properties of similar segments (III.23-25)</li>
          <li>Arcs, chords, and angles in equal circles (III.26-29)</li>
          <li>Arc bisection (III.30)</li>
          <li>Angle in a semicircle is right (III.31)</li>
          <li>Tangent-chord angles (III.32)</li>
          <li>Constructing segments with given angles (III.33-34)</li>
          <li>Intersecting chords and secants (III.35-37)</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
