import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section90() {
  return (
    <LessonLayout sectionId={90}>
      <Proposition
        title="Proposition III.26"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be equal circles, and in them let there be equal
              angles, namely at the centers the angles <em>BGC</em>, <em>EHF</em>, and at the
              circumferences the angles <em>BAC</em>, <em>EDF</em>.
            </p>
            <p className="mt-2">
              I say that the arc <em>BKC</em> is equal to the arc <em>ELF</em>.
            </p>
            <p className="mt-2">
              For let <em>BC</em>, <em>EF</em> be joined.
            </p>
            <p className="mt-2">
              Now, since the circles <em>ABC</em>, <em>DEF</em> are equal, the radii are equal.
              Thus the two straight lines <em>BG</em>, <em>GC</em> are equal to the two straight
              lines <em>EH</em>, <em>HF</em>; and the angle at <em>G</em> is equal to the angle
              at <em>H</em>; therefore the base <em>BC</em> is equal to the base <em>EF</em>. [I. 4]
            </p>
            <p className="mt-2">
              And, since the angle at <em>A</em> is equal to the angle at <em>D</em>, the segment{' '}
              <em>BAC</em> is similar to the segment <em>EDF</em>; [III. Def. 11] and they are
              upon equal straight lines.
            </p>
            <p className="mt-2">
              But similar segments of circles on equal straight lines are equal to one another;
              [III. 24] therefore the segment <em>BAC</em> is equal to <em>EDF</em>.
            </p>
            <p className="mt-2">
              But the whole circle <em>ABC</em> is also equal to the whole circle <em>DEF</em>;
              therefore the remaining arc <em>BKC</em> is equal to the remaining arc <em>ELF</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore in equal circles equal angles stand on equal arcs.
            </p>
          </>
        }
      >
        <p>
          In equal circles equal angles stand on equal arcs, whether at the center or at the
          circumference.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        In equal circles (same radius), equal central angles or equal inscribed angles subtend
        equal arcs.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 340 180" className="w-86 h-46">
          {/* First circle */}
          <circle cx="90" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="90" cy="90" r="3" fill="#f59e0b" />
          {/* Arc BKC */}
          <path d="M 35 50 A 70 70 0 0 0 145 50" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Central angle */}
          <line x1="90" y1="90" x2="35" y2="50" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="90" y1="90" x2="145" y2="50" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M 70 75 A 25 25 0 0 1 110 75" fill="none" stroke="#3b82f6" strokeWidth="1" />
          <text x="90" y="65" fill="#3b82f6" fontSize="10" textAnchor="middle">θ</text>
          <text x="90" y="110" fill="#f59e0b" fontSize="10" textAnchor="middle">G</text>

          {/* Second circle */}
          <circle cx="250" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="250" cy="90" r="3" fill="#f59e0b" />
          {/* Arc ELF */}
          <path d="M 195 50 A 70 70 0 0 0 305 50" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Central angle */}
          <line x1="250" y1="90" x2="195" y2="50" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="250" y1="90" x2="305" y2="50" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M 230 75 A 25 25 0 0 1 270 75" fill="none" stroke="#3b82f6" strokeWidth="1" />
          <text x="250" y="65" fill="#3b82f6" fontSize="10" textAnchor="middle">θ</text>
          <text x="250" y="110" fill="#f59e0b" fontSize="10" textAnchor="middle">H</text>

          {/* Equals */}
          <text x="170" y="90" fill="#6b7280" fontSize="14">→</text>

          {/* Labels */}
          <text x="25" y="50" fill="#22c55e" fontSize="11">B</text>
          <text x="150" y="50" fill="#22c55e" fontSize="11">C</text>
          <text x="185" y="50" fill="#22c55e" fontSize="11">E</text>
          <text x="310" y="50" fill="#22c55e" fontSize="11">F</text>
        </svg>
      </div>

      <h3>Key Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">
          Equal circles + Equal angles → Equal arcs
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Equal central angles + equal radii → equal chords (by SAS, I.4)</li>
        <li>Equal inscribed angles → similar segments (Definition III.11)</li>
        <li>Similar segments on equal chords are equal (III.24)</li>
        <li>Equal circles minus equal segments = equal remaining arcs</li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition III.24 (similar segments on equal chords are equal)</li>
        <li>Definition III.11 (similar segments)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Note:</strong> The restriction to "equal circles"
          is essential. In different circles, the same angle subtends different arc lengths
          (but the same fraction of the circumference).
        </p>
      </div>
    </LessonLayout>
  );
}
