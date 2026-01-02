import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section85() {
  return (
    <LessonLayout sectionId={85}>
      <Proposition
        title="Proposition III.21"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, and let the angles <em>BAD</em>, <em>BED</em> be
              angles in the same segment <em>BAED</em>.
            </p>
            <p className="mt-2">
              I say that the angles <em>BAD</em>, <em>BED</em> are equal to one another.
            </p>
            <p className="mt-2">
              For let the center of the circle <em>ABCD</em> be taken, and let it be <em>F</em>;
              let <em>BF</em>, <em>FD</em> be joined.
            </p>
            <p className="mt-2">
              Now, since the angle <em>BFD</em> is at the center, and the angle <em>BAD</em> at
              the circumference, and they have the same circumference <em>BCD</em> as base,
              therefore the angle <em>BFD</em> is double of the angle <em>BAD</em>. [III. 20]
            </p>
            <p className="mt-2">
              For the same reason the angle <em>BFD</em> is also double of the angle <em>BED</em>;
              therefore the angle <em>BAD</em> is equal to the angle <em>BED</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore in a circle the angles in the same segment are equal to one another.
            </p>
          </>
        }
      >
        <p>In a circle the angles in the same segment are equal to one another.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is a direct consequence of III.20. Any two inscribed angles that subtend the same
        arc are equal—because they're both half of the same central angle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 280" className="w-76 h-72">
          {/* Circle */}
          <circle cx="150" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Points B and D (endpoints of arc) */}
          <circle cx="70" cy="110" r="3" fill="#3b82f6" />
          <circle cx="230" cy="110" r="3" fill="#3b82f6" />
          {/* Points A and E in the same segment */}
          <circle cx="100" cy="55" r="4" fill="#22c55e" />
          <circle cx="200" cy="55" r="4" fill="#22c55e" />
          {/* Angle at A */}
          <line x1="100" y1="55" x2="70" y2="110" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="100" y1="55" x2="230" y2="110" stroke="#22c55e" strokeWidth="1.5" />
          {/* Angle at E */}
          <line x1="200" y1="55" x2="70" y2="110" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="200" y1="55" x2="230" y2="110" stroke="#22c55e" strokeWidth="1.5" />
          {/* Arc BCD (the common arc) */}
          <path d="M 70 110 A 90 90 0 0 0 230 110" fill="none" stroke="#3b82f6" strokeWidth="3" />
          {/* Angle arcs */}
          <path d="M 90 70 A 15 15 0 0 1 115 70" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 185 70 A 15 15 0 0 1 210 70" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Labels */}
          <text x="60" y="120" fill="#3b82f6" fontSize="11">B</text>
          <text x="235" y="120" fill="#3b82f6" fontSize="11">D</text>
          <text x="95" y="45" fill="#22c55e" fontSize="11">A</text>
          <text x="205" y="45" fill="#22c55e" fontSize="11">E</text>
          {/* Equal angle marks */}
          <text x="100" y="85" fill="#22c55e" fontSize="10">θ</text>
          <text x="195" y="85" fill="#22c55e" fontSize="10">θ</text>
        </svg>
      </div>

      <h3>Why Are They Equal?</h3>

      <p>
        Both angles <em>BAD</em> and <em>BED</em> subtend the same arc <em>BCD</em>. By III.20:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Central angle = 2 × ∠<em>BAD</em></li>
        <li>Central angle = 2 × ∠<em>BED</em></li>
        <li>Therefore ∠<em>BAD</em> = ∠<em>BED</em></li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          ∠BAD = ∠BED = ½ × (central angle)
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.20 (central angle is double inscribed angle)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Same Segment:</strong> The "same segment" means the
          region of the circle on the same side of chord <em>BD</em>. Points in the{' '}
          <em>other</em> segment (opposite side of <em>BD</em>) would create a different angle.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 220" className="w-72 h-56">
          {/* Circle */}
          <circle cx="140" cy="110" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Chord BD */}
          <line x1="70" y1="90" x2="210" y2="90" stroke="#3b82f6" strokeWidth="2" />
          {/* Points B and D */}
          <circle cx="70" cy="90" r="3" fill="#3b82f6" />
          <circle cx="210" cy="90" r="3" fill="#3b82f6" />
          {/* Segment labels */}
          <text x="140" y="60" fill="#22c55e" fontSize="11" textAnchor="middle">same segment</text>
          <text x="140" y="150" fill="#6b7280" fontSize="11" textAnchor="middle">other segment</text>
          {/* Labels */}
          <text x="60" y="100" fill="#3b82f6" fontSize="11">B</text>
          <text x="215" y="100" fill="#3b82f6" fontSize="11">D</text>
        </svg>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Application:</strong> This theorem is essential for
          proving that cyclic quadrilaterals have opposite angles summing to 180° (III.22).
        </p>
      </div>
    </LessonLayout>
  );
}
