import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <Proposition
        title="Proposition III.4"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, and in it let two straight lines <em>AC</em>,{' '}
              <em>BD</em>, which do not pass through the center, cut one another at <em>E</em>.
            </p>
            <p className="mt-2">
              I say that they do not bisect one another.
            </p>
            <p className="mt-2">
              For, if possible, let them bisect one another, so that <em>AE</em> is equal to{' '}
              <em>EC</em>, and <em>BE</em> to <em>ED</em>; let the center of the circle <em>ABCD</em>{' '}
              be taken [III. 1], and let it be <em>F</em>; let <em>FE</em> be joined.
            </p>
            <p className="mt-2">
              Then, since a straight line <em>FE</em> through the center bisects a straight line{' '}
              <em>AC</em> not through the center, it also cuts it at right angles; [III. 3]
              therefore the angle <em>FEA</em> is right.
            </p>
            <p className="mt-2">
              Again, since a straight line <em>FE</em> bisects a straight line <em>BD</em>, it also
              cuts it at right angles; [III. 3] therefore the angle <em>FEB</em> is right.
            </p>
            <p className="mt-2">
              But the angle <em>FEA</em> was also proved right; therefore the angle <em>FEA</em> is
              equal to the angle <em>FEB</em>, the less to the greater: which is impossible.
            </p>
            <p className="mt-2 font-medium">Therefore <em>AC</em>, <em>BD</em> do not bisect one another.</p>
          </>
        }
      >
        <p>
          If in a circle two straight lines cut one another which are not through the center, they
          do not bisect one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition proves that only diameters (chords through the center) can bisect each
        other. Any two chords that don't pass through the center cannot mutually bisect at their
        intersection point.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 250" className="w-64 h-64">
          {/* Circle */}
          <circle cx="125" cy="125" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center F */}
          <circle cx="125" cy="125" r="3" fill="#f59e0b" />
          {/* Chord AC */}
          <line x1="55" y1="90" x2="180" y2="170" stroke="#3b82f6" strokeWidth="2" />
          {/* Chord BD */}
          <line x1="70" y1="175" x2="195" y2="95" stroke="#22c55e" strokeWidth="2" />
          {/* Intersection E */}
          <circle cx="120" cy="130" r="4" fill="#ef4444" />
          {/* Line from center to E */}
          <line x1="125" y1="125" x2="120" y2="130" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Labels */}
          <text x="45" y="85" fill="#3b82f6" fontSize="12">A</text>
          <text x="185" y="180" fill="#3b82f6" fontSize="12">C</text>
          <text x="60" y="185" fill="#22c55e" fontSize="12">B</text>
          <text x="200" y="95" fill="#22c55e" fontSize="12">D</text>
          <text x="110" y="145" fill="#ef4444" fontSize="12">E</text>
          <text x="130" y="118" fill="#f59e0b" fontSize="12">F</text>
        </svg>
      </div>

      <h3>The Contradiction</h3>

      <p>
        Suppose chords <em>AC</em> and <em>BD</em> (neither passing through center <em>F</em>) did
        bisect each other at <em>E</em>. Then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>FE</em> bisects <em>AC</em> → <em>FE</em> ⊥ <em>AC</em> (by III.3)</li>
        <li><em>FE</em> bisects <em>BD</em> → <em>FE</em> ⊥ <em>BD</em> (by III.3)</li>
      </ul>

      <p className="mt-4">
        But this means <em>FE</em> is perpendicular to both <em>AC</em> and <em>BD</em> at the same
        point <em>E</em>. This would require angle <em>FEA</em> = 90° and angle <em>FEB</em> = 90°.
        Since <em>A</em>, <em>E</em>, <em>C</em> and <em>B</em>, <em>E</em>, <em>D</em> are
        distinct lines through <em>E</em>, we'd have one angle both equal to the other and
        strictly less—a contradiction.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 150" className="w-52 h-40">
          {/* Point E */}
          <circle cx="100" cy="75" r="3" fill="#ef4444" />
          {/* Chord AC through E */}
          <line x1="30" y1="75" x2="170" y2="75" stroke="#3b82f6" strokeWidth="2" />
          {/* Chord BD through E (at angle) */}
          <line x1="50" y1="130" x2="150" y2="20" stroke="#22c55e" strokeWidth="2" />
          {/* Line FE pointing down */}
          <line x1="100" y1="75" x2="100" y2="140" stroke="#f59e0b" strokeWidth="1.5" />
          {/* Right angle markers (impossible to have both) */}
          <path d="M 90 75 L 90 85 L 100 85" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="105" y="70" fill="#ef4444" fontSize="11">E</text>
          <text x="20" y="75" fill="#3b82f6" fontSize="11">A</text>
          <text x="175" y="75" fill="#3b82f6" fontSize="11">C</text>
          <text x="40" y="135" fill="#22c55e" fontSize="11">B</text>
          <text x="155" y="18" fill="#22c55e" fontSize="11">D</text>
          <text x="105" y="135" fill="#f59e0b" fontSize="11">F</text>
          {/* Question mark */}
          <text x="75" y="100" fill="#ef4444" fontSize="14">⊥ both?</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.1 (finding the center)</li>
        <li>Proposition III.3 (bisecting chord implies perpendicular)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Contrast with Diameters:</strong> Two diameters{' '}
          <em>do</em> bisect each other—at the center! The center is the only point in a circle
          equidistant from all points on the circumference, and thus the only point where two
          chords can mutually bisect.
        </p>
      </div>
    </LessonLayout>
  );
}
