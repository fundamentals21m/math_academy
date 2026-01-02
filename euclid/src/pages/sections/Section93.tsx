import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section93() {
  return (
    <LessonLayout sectionId={93}>
      <Proposition
        title="Proposition III.29"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be equal circles, and in them let equal arcs{' '}
              <em>BGC</em>, <em>EHF</em> be cut off; and let <em>BC</em>, <em>EF</em> be joined.
            </p>
            <p className="mt-2">
              I say that <em>BC</em> is equal to <em>EF</em>.
            </p>
            <p className="mt-2">
              For let the centers <em>K</em>, <em>L</em> of the circles be taken, and let{' '}
              <em>BK</em>, <em>KC</em>, <em>EL</em>, <em>LF</em> be joined.
            </p>
            <p className="mt-2">
              Now, since the arc <em>BGC</em> is equal to the arc <em>EHF</em>, the angle{' '}
              <em>BKC</em> is also equal to the angle <em>ELF</em>. [III. 27]
            </p>
            <p className="mt-2">
              And, since the circles <em>ABC</em>, <em>DEF</em> are equal, the radii are also
              equal;
            </p>
            <p className="mt-2">
              therefore the two sides <em>BK</em>, <em>KC</em> are equal to the two sides{' '}
              <em>EL</em>, <em>LF</em>; and they contain equal angles; therefore the base{' '}
              <em>BC</em> is equal to the base <em>EF</em>. [I. 4]
            </p>
            <p className="mt-2 font-medium">
              Therefore in equal circles equal arcs are subtended by equal straight lines.
            </p>
          </>
        }
      >
        <p>In equal circles equal arcs are subtended by equal straight lines.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the converse of III.28. In equal circles, equal arcs have equal chords.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 340 180" className="w-86 h-46">
          {/* First circle */}
          <circle cx="90" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Equal arc */}
          <path d="M 30 60 A 70 70 0 0 1 150 60" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Chord */}
          <line x1="30" y1="60" x2="150" y2="60" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="30" cy="60" r="3" fill="#3b82f6" />
          <circle cx="150" cy="60" r="3" fill="#3b82f6" />
          <text x="30" y="50" fill="#3b82f6" fontSize="11">B</text>
          <text x="150" y="50" fill="#3b82f6" fontSize="11">C</text>

          {/* Second circle */}
          <circle cx="250" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Equal arc */}
          <path d="M 190 60 A 70 70 0 0 1 310 60" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Chord */}
          <line x1="190" y1="60" x2="310" y2="60" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="190" cy="60" r="3" fill="#3b82f6" />
          <circle cx="310" cy="60" r="3" fill="#3b82f6" />
          <text x="190" y="50" fill="#3b82f6" fontSize="11">E</text>
          <text x="310" y="50" fill="#3b82f6" fontSize="11">F</text>

          {/* Labels */}
          <text x="90" y="170" fill="#22c55e" fontSize="10" textAnchor="middle">arc = arc</text>
          <text x="250" y="170" fill="#3b82f6" fontSize="10" textAnchor="middle">→ chord = chord</text>
        </svg>
      </div>

      <h3>Key Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">
          Equal circles + Equal arcs → Equal chords
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Equal arcs → equal central angles (III.27)</li>
        <li>Equal circles → equal radii</li>
        <li>Equal radii + equal central angles → congruent triangles (SAS, I.4)</li>
        <li>Congruent triangles → equal chords</li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition III.27 (equal arcs → equal angles)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Together:</strong> III.28 and III.29 establish that
          in equal circles, there is a one-to-one correspondence between chord lengths and arc
          lengths.
        </p>
      </div>
    </LessonLayout>
  );
}
