import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section92() {
  return (
    <LessonLayout sectionId={92}>
      <Proposition
        title="Proposition III.28"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be equal circles, and let <em>AB</em>, <em>DE</em>{' '}
              be equal straight lines in them cutting off the arcs <em>ACB</em>, <em>DFE</em> and
              the arcs <em>AGB</em>, <em>DHE</em>.
            </p>
            <p className="mt-2">
              I say that the arc <em>ACB</em> is equal to the arc <em>DFE</em>, and the arc{' '}
              <em>AGB</em> is equal to the arc <em>DHE</em>.
            </p>
            <p className="mt-2">
              For let the centers <em>K</em>, <em>L</em> of the circles be taken, and let{' '}
              <em>AK</em>, <em>KB</em>, <em>DL</em>, <em>LE</em> be joined.
            </p>
            <p className="mt-2">
              Now, since the circles are equal, the radii are also equal; therefore the two sides{' '}
              <em>AK</em>, <em>KB</em> are equal to the two sides <em>DL</em>, <em>LE</em>; and
              the base <em>AB</em> is equal to the base <em>DE</em>;
            </p>
            <p className="mt-2">
              therefore the angle <em>AKB</em> is equal to the angle <em>DLE</em>. [I. 8]
            </p>
            <p className="mt-2">
              But equal angles stand on equal arcs, when they are at the centers; [III. 26]
              therefore the arc <em>AGB</em> is equal to the arc <em>DHE</em>.
            </p>
            <p className="mt-2">
              And the whole circle <em>ABC</em> is also equal to the whole circle <em>DEF</em>;
              therefore the remaining arc <em>ACB</em> is also equal to the remaining arc{' '}
              <em>DFE</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore in equal circles equal straight lines cut off equal arcs.
            </p>
          </>
        }
      >
        <p>
          In equal circles equal straight lines cut off equal arcs, the greater equal to the
          greater and the less to the less.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        In equal circles, equal chords cut off equal arcs. This connects chord length to arc
        length.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 340 180" className="w-86 h-46">
          {/* First circle */}
          <circle cx="90" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="90" cy="90" r="3" fill="#f59e0b" />
          {/* Chord AB */}
          <line x1="30" y1="60" x2="150" y2="60" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="30" cy="60" r="3" fill="#3b82f6" />
          <circle cx="150" cy="60" r="3" fill="#3b82f6" />
          {/* Minor arc */}
          <path d="M 30 60 A 70 70 0 0 1 150 60" fill="none" stroke="#22c55e" strokeWidth="3" />
          <text x="30" y="50" fill="#3b82f6" fontSize="11">A</text>
          <text x="150" y="50" fill="#3b82f6" fontSize="11">B</text>

          {/* Second circle */}
          <circle cx="250" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="250" cy="90" r="3" fill="#f59e0b" />
          {/* Chord DE */}
          <line x1="190" y1="60" x2="310" y2="60" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="190" cy="60" r="3" fill="#3b82f6" />
          <circle cx="310" cy="60" r="3" fill="#3b82f6" />
          {/* Minor arc */}
          <path d="M 190 60 A 70 70 0 0 1 310 60" fill="none" stroke="#22c55e" strokeWidth="3" />
          <text x="190" y="50" fill="#3b82f6" fontSize="11">D</text>
          <text x="310" y="50" fill="#3b82f6" fontSize="11">E</text>

          {/* Labels */}
          <text x="90" y="170" fill="#3b82f6" fontSize="10" textAnchor="middle">chord = chord</text>
          <text x="250" y="170" fill="#22c55e" fontSize="10" textAnchor="middle">→ arc = arc</text>
        </svg>
      </div>

      <h3>Key Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">
          Equal circles + Equal chords → Equal arcs
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Equal circles have equal radii</li>
        <li>Equal chords + equal radii → congruent triangles (SSS, I.8)</li>
        <li>Congruent triangles → equal central angles</li>
        <li>Equal central angles → equal arcs (III.26)</li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Proposition III.26 (equal angles → equal arcs)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Greater and Less:</strong> The proposition specifies
          "the greater to the greater"—equal chords cut off equal minor arcs and equal major
          arcs.
        </p>
      </div>
    </LessonLayout>
  );
}
