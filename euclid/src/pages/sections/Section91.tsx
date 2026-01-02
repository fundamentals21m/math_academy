import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section91() {
  return (
    <LessonLayout sectionId={91}>
      <Proposition
        title="Proposition III.27"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be equal circles, and let the angles <em>BGC</em>,{' '}
              <em>EHF</em> at the centers <em>G</em>, <em>H</em>, and the angles <em>BAC</em>,{' '}
              <em>EDF</em> at the circumferences, stand on equal arcs <em>BC</em>, <em>EF</em>.
            </p>
            <p className="mt-2">
              I say that the angle <em>BGC</em> is equal to the angle <em>EHF</em>, and the
              angle <em>BAC</em> is equal to the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              For, if the angle <em>BGC</em> is unequal to the angle <em>EHF</em>, one of them
              is greater. Let the angle <em>BGC</em> be greater.
            </p>
            <p className="mt-2">
              On the straight line <em>BG</em>, and at the point <em>G</em> on it, let the angle{' '}
              <em>BGK</em> be constructed equal to the angle <em>EHF</em>. [I. 23]
            </p>
            <p className="mt-2">
              But equal angles stand on equal arcs; [III. 26] therefore the arc <em>BK</em> is
              equal to the arc <em>EF</em>.
            </p>
            <p className="mt-2">
              But <em>EF</em> is equal to <em>BC</em>; therefore <em>BK</em> is also equal to{' '}
              <em>BC</em>, the less to the greater: which is impossible.
            </p>
            <p className="mt-2">
              Therefore the angle <em>BGC</em> is not unequal to the angle <em>EHF</em>;
              therefore it is equal to it.
            </p>
            <p className="mt-2 font-medium">
              And the angle at <em>A</em> is half of the angle <em>BGC</em>, and the angle at{' '}
              <em>D</em> half of the angle <em>EHF</em>; [III. 20] therefore the angle at{' '}
              <em>A</em> is also equal to the angle at <em>D</em>.
            </p>
          </>
        }
      >
        <p>
          In equal circles angles standing on equal arcs are equal to one another, whether at
          the center or at the circumference.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the converse of III.26. In equal circles, equal arcs are subtended by equal
        angles (both central and inscribed).
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 340 180" className="w-86 h-46">
          {/* First circle */}
          <circle cx="90" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Arc BC (equal) */}
          <path d="M 35 50 A 70 70 0 0 0 145 50" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Point on arc */}
          <circle cx="90" cy="20" r="3" fill="#3b82f6" />
          {/* Inscribed angle */}
          <line x1="90" y1="20" x2="35" y2="50" stroke="#3b82f6" strokeWidth="1" />
          <line x1="90" y1="20" x2="145" y2="50" stroke="#3b82f6" strokeWidth="1" />
          <text x="90" y="45" fill="#3b82f6" fontSize="10" textAnchor="middle">θ</text>

          {/* Second circle */}
          <circle cx="250" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Arc EF (equal) */}
          <path d="M 195 50 A 70 70 0 0 0 305 50" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Point on arc */}
          <circle cx="250" cy="20" r="3" fill="#3b82f6" />
          {/* Inscribed angle */}
          <line x1="250" y1="20" x2="195" y2="50" stroke="#3b82f6" strokeWidth="1" />
          <line x1="250" y1="20" x2="305" y2="50" stroke="#3b82f6" strokeWidth="1" />
          <text x="250" y="45" fill="#3b82f6" fontSize="10" textAnchor="middle">θ</text>

          {/* Arrow showing equal arcs */}
          <text x="90" y="170" fill="#22c55e" fontSize="10" textAnchor="middle">arc BC</text>
          <text x="250" y="170" fill="#22c55e" fontSize="10" textAnchor="middle">arc EF</text>
          <text x="170" y="170" fill="#6b7280" fontSize="12">=</text>
        </svg>
      </div>

      <h3>Key Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">
          Equal circles + Equal arcs → Equal angles
        </p>
      </div>

      <h3 className="mt-6">Proof by Contradiction</h3>

      <p>
        Suppose central angles were unequal, say ∠<em>BGC</em> &gt; ∠<em>EHF</em>. Then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Construct angle <em>BGK</em> = ∠<em>EHF</em> (I.23)</li>
        <li>By III.26, arc <em>BK</em> = arc <em>EF</em></li>
        <li>But arc <em>EF</em> = arc <em>BC</em> (given)</li>
        <li>So arc <em>BK</em> = arc <em>BC</em></li>
        <li>But <em>K</em> is between <em>B</em> and <em>C</em>, so arc <em>BK</em> &lt; arc <em>BC</em></li>
        <li>Contradiction!</li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.23 (copying an angle)</li>
        <li>Proposition III.20 (central angle = 2 × inscribed angle)</li>
        <li>Proposition III.26 (equal angles → equal arcs)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Together:</strong> III.26 and III.27 establish
          a one-to-one correspondence between angles and arcs in equal circles.
        </p>
      </div>
    </LessonLayout>
  );
}
