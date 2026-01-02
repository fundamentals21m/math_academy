import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section84() {
  return (
    <LessonLayout sectionId={84}>
      <Proposition
        title="Proposition III.20"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a circle, let the angle <em>BEC</em> be an angle at its center,
              and the angle <em>BAC</em> an angle at the circumference, and let them have the
              same arc <em>BC</em> as base.
            </p>
            <p className="mt-2">
              I say that the angle <em>BEC</em> is double of the angle <em>BAC</em>.
            </p>
            <p className="mt-2">
              For let <em>AE</em> be joined and drawn through to <em>F</em>.
            </p>
            <p className="mt-2">
              Then, since <em>EA</em> is equal to <em>EB</em>, the angle <em>EAB</em> is also
              equal to the angle <em>EBA</em>; [I. 5] therefore the angles <em>EAB</em>,{' '}
              <em>EBA</em> are double of the angle <em>EAB</em>.
            </p>
            <p className="mt-2">
              But the angle <em>BEF</em> is equal to the angles <em>EAB</em>, <em>EBA</em>; [I. 32]
              therefore the angle <em>BEF</em> is also double of the angle <em>EAB</em>.
            </p>
            <p className="mt-2">
              For the same reason the angle <em>FEC</em> is also double of the angle <em>EAC</em>.
            </p>
            <p className="mt-2">
              Therefore the whole angle <em>BEC</em> is double of the whole angle <em>BAC</em>.
            </p>
            <p className="mt-2 font-medium">
              [The proof for when the center lies inside angle <em>BAC</em> follows similarly.]
            </p>
          </>
        }
      >
        <p>
          In a circle the angle at the center is double of the angle at the circumference, when
          the angles have the same circumference as base.
        </p>
      </Proposition>

      <h2>The Inscribed Angle Theorem</h2>

      <p>
        This is one of the most important theorems in circle geometry. It states that the{' '}
        <strong>central angle</strong> is always twice the <strong>inscribed angle</strong>{' '}
        that subtends the same arc.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center E */}
          <circle cx="140" cy="140" r="3" fill="#f59e0b" />
          {/* Points B and C on circumference */}
          <circle cx="60" cy="100" r="3" fill="#3b82f6" />
          <circle cx="220" cy="100" r="3" fill="#3b82f6" />
          {/* Point A on circumference */}
          <circle cx="140" cy="50" r="4" fill="#22c55e" />
          {/* Central angle BEC */}
          <line x1="140" y1="140" x2="60" y2="100" stroke="#ef4444" strokeWidth="2" />
          <line x1="140" y1="140" x2="220" y2="100" stroke="#ef4444" strokeWidth="2" />
          {/* Inscribed angle BAC */}
          <line x1="140" y1="50" x2="60" y2="100" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="140" y1="50" x2="220" y2="100" stroke="#22c55e" strokeWidth="1.5" />
          {/* Arc BC (the base) */}
          <path d="M 60 100 A 90 90 0 0 0 220 100" fill="none" stroke="#3b82f6" strokeWidth="3" />
          {/* Angle arcs */}
          <path d="M 120 130 A 25 25 0 0 1 160 130" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 125 65 A 20 20 0 0 1 155 65" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Labels */}
          <text x="140" y="155" fill="#f59e0b" fontSize="11" textAnchor="middle">E</text>
          <text x="50" y="105" fill="#3b82f6" fontSize="11">B</text>
          <text x="225" y="105" fill="#3b82f6" fontSize="11">C</text>
          <text x="140" y="42" fill="#22c55e" fontSize="11" textAnchor="middle">A</text>
          {/* Angle labels */}
          <text x="140" y="120" fill="#ef4444" fontSize="10" textAnchor="middle">2θ</text>
          <text x="140" y="80" fill="#22c55e" fontSize="10" textAnchor="middle">θ</text>
        </svg>
      </div>

      <h3>Key Formula</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          ∠BEC = 2 × ∠BAC
        </p>
        <p className="text-dark-400 mt-2 text-sm">Central angle = 2 × Inscribed angle</p>
      </div>

      <h3 className="mt-6">Proof Sketch</h3>

      <p>
        Draw line <em>AE</em> (from inscribed point through center). In triangle <em>ABE</em>:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>EA</em> = <em>EB</em> (radii), so ∠<em>EAB</em> = ∠<em>EBA</em> (I.5)</li>
        <li>Exterior angle ∠<em>BEF</em> = ∠<em>EAB</em> + ∠<em>EBA</em> = 2∠<em>EAB</em> (I.32)</li>
      </ul>

      <p className="mt-4">Similarly for triangle <em>ACE</em>: ∠<em>CEF</em> = 2∠<em>EAC</em>.</p>

      <p className="mt-4">
        Adding: ∠<em>BEC</em> = ∠<em>BEF</em> + ∠<em>CEF</em> = 2(∠<em>EAB</em> + ∠<em>EAC</em>) = 2∠<em>BAC</em>.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.32 (exterior angle = sum of remote interior angles)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Corollary:</strong> All inscribed angles that
          subtend the same arc are equal. This is proved in III.21.
        </p>
      </div>
    </LessonLayout>
  );
}
