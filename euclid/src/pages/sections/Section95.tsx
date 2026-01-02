import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section95() {
  return (
    <LessonLayout sectionId={95}>
      <Proposition
        title="Proposition III.31"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, let <em>BC</em> be its diameter, and <em>E</em> its
              center; on <em>BC</em> let any point <em>F</em> be taken, and let <em>BA</em>,{' '}
              <em>AC</em>, <em>FD</em>, <em>DC</em> be joined.
            </p>
            <p className="mt-2">
              I say that the angle <em>BAC</em> in the semicircle <em>BAC</em> is right, that the
              angle <em>ABC</em> in the segment <em>ABC</em> greater than the semicircle is less
              than a right angle, and that the angle <em>FDC</em> in the segment <em>FDC</em>{' '}
              less than the semicircle is greater than a right angle.
            </p>
            <p className="mt-2">
              Let <em>AE</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>EA</em> is equal to <em>EB</em>, the angle <em>EAB</em> is also
              equal to the angle <em>EBA</em>. [I. 5]
            </p>
            <p className="mt-2">
              Again, since <em>EA</em> is equal to <em>EC</em>, the angle <em>EAC</em> is also
              equal to the angle <em>ECA</em>;
            </p>
            <p className="mt-2">
              therefore the whole angle <em>BAC</em> is equal to the two angles <em>ABC</em>,{' '}
              <em>ACB</em>.
            </p>
            <p className="mt-2">
              But the angle <em>FAC</em>, the exterior angle of the triangle <em>ABC</em>, is
              also equal to the two angles <em>ABC</em>, <em>ACB</em>; [I. 32] therefore the
              angle <em>BAC</em> is also equal to the angle <em>FAC</em>; therefore each is
              right. [I. Def. 10]
            </p>
            <p className="mt-2 font-medium">
              Therefore the angle <em>BAC</em> in the semicircle is right.
            </p>
          </>
        }
      >
        <p>
          In a circle the angle in the semicircle is right, that in a greater segment less than
          a right angle, and that in a less segment greater than a right angle.
        </p>
      </Proposition>

      <h2>Thales' Theorem</h2>

      <p>
        This famous result is often attributed to Thales of Miletus. An angle inscribed in a
        semicircle is always a right angle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 240" className="w-72 h-60">
          {/* Circle */}
          <circle cx="140" cy="120" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Diameter BC */}
          <line x1="60" y1="120" x2="220" y2="120" stroke="#3b82f6" strokeWidth="2" />
          {/* Point A on semicircle */}
          <circle cx="140" cy="40" r="4" fill="#22c55e" />
          {/* Lines from A to B and C */}
          <line x1="140" y1="40" x2="60" y2="120" stroke="#22c55e" strokeWidth="2" />
          <line x1="140" y1="40" x2="220" y2="120" stroke="#22c55e" strokeWidth="2" />
          {/* Right angle marker */}
          <path d="M 128 52 L 140 64 L 152 52" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Points */}
          <circle cx="60" cy="120" r="3" fill="#3b82f6" />
          <circle cx="220" cy="120" r="3" fill="#3b82f6" />
          <circle cx="140" cy="120" r="3" fill="#f59e0b" />
          {/* Labels */}
          <text x="50" y="130" fill="#3b82f6" fontSize="11">B</text>
          <text x="225" y="130" fill="#3b82f6" fontSize="11">C</text>
          <text x="145" y="35" fill="#22c55e" fontSize="11">A</text>
          <text x="145" y="135" fill="#f59e0b" fontSize="11">E</text>
          {/* 90° label */}
          <text x="155" y="60" fill="#22c55e" fontSize="12">90°</text>
        </svg>
      </div>

      <h3>Key Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          Angle in semicircle = 90°
        </p>
      </div>

      <h3 className="mt-6">The Three Cases</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ul className="space-y-2 text-dark-300">
          <li><strong className="text-amber-400">Semicircle:</strong> angle = 90°</li>
          <li><strong className="text-amber-400">Major segment:</strong> angle &lt; 90° (acute)</li>
          <li><strong className="text-amber-400">Minor segment:</strong> angle &gt; 90° (obtuse)</li>
        </ul>
      </div>

      <h3 className="mt-6">Proof for Semicircle</h3>

      <p>
        Draw radii <em>EA</em>, <em>EB</em>, <em>EC</em> from center <em>E</em>. Since radii are
        equal:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>∠<em>EAB</em> = ∠<em>EBA</em> (triangle <em>EAB</em> is isosceles)</li>
        <li>∠<em>EAC</em> = ∠<em>ECA</em> (triangle <em>EAC</em> is isosceles)</li>
        <li>∠<em>BAC</em> = ∠<em>EAB</em> + ∠<em>EAC</em> = ∠<em>EBA</em> + ∠<em>ECA</em></li>
        <li>But ∠<em>BAC</em> + ∠<em>EBA</em> + ∠<em>ECA</em> = 180° (triangle <em>ABC</em>)</li>
        <li>So 2∠<em>BAC</em> = 180°, hence ∠<em>BAC</em> = 90°</li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.32 (angles of triangle sum to 180°)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Alternative Proof:</strong> By III.20, the inscribed
          angle is half the central angle. The central angle for a semicircle is 180°, so the
          inscribed angle is 90°.
        </p>
      </div>
    </LessonLayout>
  );
}
