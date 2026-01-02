import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section79() {
  return (
    <LessonLayout sectionId={79}>
      <Proposition
        title="Proposition III.15"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, let <em>AD</em> be its diameter and <em>F</em> its
              center, and let <em>BC</em> be any straight line in it which is not a diameter.
            </p>
            <p className="mt-2">
              I say that <em>AD</em> is greatest, and of the rest <em>BC</em> which is nearer to
              the center is always greater than that which is more remote.
            </p>
            <p className="mt-2">
              For from the center <em>F</em> let <em>FG</em>, <em>FH</em> be drawn perpendicular
              to <em>BC</em>, <em>EK</em>. [I. 12]
            </p>
            <p className="mt-2">
              Then, since <em>BC</em> is nearer to the center than <em>EK</em>, <em>FH</em> is
              greater than <em>FG</em>.
            </p>
            <p className="mt-2">
              Let <em>FM</em> be made equal to <em>FG</em>, and through <em>M</em> let <em>NL</em>{' '}
              be drawn parallel to <em>BC</em>.
            </p>
            <p className="mt-2">
              Then, since <em>FG</em> is equal to <em>FM</em>, <em>BC</em> is also equal to{' '}
              <em>NL</em>. [III. 14]
            </p>
            <p className="mt-2">
              And, since the straight line <em>AD</em> passes through <em>F</em> the center and
              is perpendicular to <em>NL</em>, <em>NL</em> is less than <em>AD</em>. [III. 7]
            </p>
            <p className="mt-2">
              But <em>BC</em> is equal to <em>NL</em>; therefore <em>BC</em> is less than{' '}
              <em>AD</em>; therefore the diameter <em>AD</em> is greatest.
            </p>
            <p className="mt-2 font-medium">
              And, since <em>EK</em> is farther from the center than <em>BC</em>, <em>BC</em> is
              greater than <em>EK</em>. [Similarly proved.]
            </p>
          </>
        }
      >
        <p>
          Of straight lines in a circle the diameter is greatest, and of the rest the nearer to
          the center is always greater than the more remote.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes the relationship between a chord's length and its distance
        from the center:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>The diameter is the longest chord</li>
        <li>Chords closer to the center are longer than those farther away</li>
      </ul>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center F */}
          <circle cx="140" cy="140" r="3" fill="#f59e0b" />
          {/* Diameter AD */}
          <line x1="50" y1="140" x2="230" y2="140" stroke="#22c55e" strokeWidth="2" />
          {/* Chord BC (closer to center) */}
          <line x1="55" y1="100" x2="225" y2="100" stroke="#3b82f6" strokeWidth="2" />
          {/* Chord EK (farther from center) */}
          <line x1="90" y1="60" x2="190" y2="60" stroke="#ef4444" strokeWidth="2" />
          {/* Perpendiculars */}
          <line x1="140" y1="140" x2="140" y2="100" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <line x1="140" y1="140" x2="140" y2="60" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Labels */}
          <text x="40" y="145" fill="#22c55e" fontSize="11">A</text>
          <text x="235" y="145" fill="#22c55e" fontSize="11">D</text>
          <text x="45" y="105" fill="#3b82f6" fontSize="11">B</text>
          <text x="230" y="105" fill="#3b82f6" fontSize="11">C</text>
          <text x="80" y="55" fill="#ef4444" fontSize="11">E</text>
          <text x="195" y="55" fill="#ef4444" fontSize="11">K</text>
          <text x="145" y="135" fill="#f59e0b" fontSize="11">F</text>
          {/* Distance labels */}
          <text x="150" y="120" fill="#3b82f6" fontSize="9">d₁</text>
          <text x="150" y="80" fill="#ef4444" fontSize="9">d₂</text>
          {/* Comparison */}
          <text x="140" y="250" fill="#6b7280" fontSize="10" textAnchor="middle">AD &gt; BC &gt; EK</text>
          <text x="140" y="265" fill="#6b7280" fontSize="10" textAnchor="middle">(d₁ &lt; d₂)</text>
        </svg>
      </div>

      <h3>Why Is the Diameter Greatest?</h3>

      <p>
        The diameter passes through the center, so its "distance" from the center is zero. Any
        other chord has a positive distance and must therefore be shorter.
      </p>

      <p className="mt-4">
        Using the Pythagorean theorem: if a chord has half-length <em>c</em> and distance <em>d</em>{' '}
        from center, then <em>r</em>² = <em>c</em>² + <em>d</em>². Solving: <em>c</em> = √(<em>r</em>² - <em>d</em>²).
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono">
          Chord length = 2√(r² - d²)
        </p>
      </div>

      <p className="mt-4">
        As <em>d</em> increases (chord moves away from center), the chord length decreases.
        When <em>d</em> = 0 (diameter), length = 2<em>r</em>. When <em>d</em> = <em>r</em>, length = 0.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.12 (constructing perpendicular)</li>
        <li>Proposition III.7 (comparing distances from internal point)</li>
        <li>Proposition III.14 (equidistant chords are equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Application:</strong> This proposition is useful for
          comparing chord lengths and for understanding why the diameter is the longest distance
          across a circle.
        </p>
      </div>
    </LessonLayout>
  );
}
