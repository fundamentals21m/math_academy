import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { SquareOfSum } from '@/components/visualizations';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <SquareOfSum />

      <Proposition
        title="Proposition II.4"
        proof={
          <>
            <p>
              Let the straight line <em>AB</em> be cut at random at <em>C</em>.
            </p>
            <p className="mt-2">
              I say that the square on <em>AB</em> is equal to the squares on <em>AC</em>,{' '}
              <em>CB</em> and twice the rectangle contained by <em>AC</em>, <em>CB</em>.
            </p>
            <p className="mt-2">
              For let the square <em>ADEB</em> be described on <em>AB</em>, [I. 46] let <em>BD</em>{' '}
              be joined, through <em>C</em> let <em>CF</em> be drawn parallel to either <em>AD</em>{' '}
              or <em>EB</em>, [I. 31] and through <em>G</em> let <em>HK</em> be drawn parallel to
              either <em>AB</em> or <em>DE</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then, since <em>CF</em> is parallel to <em>AD</em>, and <em>BD</em> has fallen on
              them, the exterior angle <em>CGB</em> is equal to the interior and opposite angle{' '}
              <em>ADB</em>. [I. 29]
            </p>
            <p className="mt-2">
              But the angle <em>ADB</em> is equal to the angle <em>ABD</em>, since the side{' '}
              <em>BA</em> is also equal to <em>AD</em>; [I. 5] therefore the angle <em>CGB</em> is
              also equal to the angle <em>GBC</em>, so that the side <em>BC</em> is also equal to
              the side <em>CG</em>. [I. 6]
            </p>
            <p className="mt-2">
              But <em>CB</em> is equal to <em>GK</em>, and <em>CG</em> to <em>KB</em>; [I. 34]
              therefore <em>GK</em> is also equal to <em>KB</em>; therefore <em>CGKB</em> is
              equilateral.
            </p>
            <p className="mt-2">
              I say next that it is also right-angled.
            </p>
            <p className="mt-2">
              For, since <em>CG</em> is parallel to <em>BK</em>, and the straight line <em>CB</em>{' '}
              has fallen on them, the angles <em>KBC</em>, <em>GCB</em> are equal to two right
              angles. [I. 29]
            </p>
            <p className="mt-2">
              But the angle <em>KBC</em> is right; therefore the angle <em>BCG</em> is also right,
              so that the opposite angles <em>CGK</em>, <em>GKB</em> are also right. [I. 34]
            </p>
            <p className="mt-2">
              Therefore <em>CGKB</em> is right-angled; and it was also proved equilateral; therefore
              it is a square; and it is described on <em>CB</em>.
            </p>
            <p className="mt-2">
              For the same reason <em>HF</em> is also a square; and it is described on <em>HG</em>,
              that is <em>AC</em>. [I. 34]
            </p>
            <p className="mt-2">
              Therefore the squares <em>HF</em>, <em>KC</em> are the squares on <em>AC</em>,{' '}
              <em>CB</em>.
            </p>
            <p className="mt-2">
              Now, since <em>AG</em> is equal to <em>GE</em>, [I. 43] and <em>AG</em> is the
              rectangle <em>AC</em>, <em>CB</em>, for <em>GC</em> is equal to <em>CB</em>, therefore{' '}
              <em>GE</em> is also equal to the rectangle <em>AC</em>, <em>CB</em>.
            </p>
            <p className="mt-2">
              Therefore <em>AG</em>, <em>GE</em> are equal to twice the rectangle <em>AC</em>,{' '}
              <em>CB</em>.
            </p>
            <p className="mt-2">
              But the squares <em>HF</em>, <em>CK</em> are also the squares on <em>AC</em>,{' '}
              <em>CB</em>; therefore the four areas <em>HF</em>, <em>CK</em>, <em>AG</em>,{' '}
              <em>GE</em> are equal to the squares on <em>AC</em>, <em>CB</em> and twice the
              rectangle contained by <em>AC</em>, <em>CB</em>.
            </p>
            <p className="mt-2">
              But <em>HF</em>, <em>CK</em>, <em>AG</em>, <em>GE</em> are the whole <em>ADEB</em>,
              which is the square on <em>AB</em>.
            </p>
            <p className="mt-2">
              Therefore the square on <em>AB</em> is equal to the squares on <em>AC</em>,{' '}
              <em>CB</em> and twice the rectangle <em>AC</em>, <em>CB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be cut at random, the square on the whole is equal to the squares on
          the segments and twice the rectangle contained by the segments.
        </p>
      </Proposition>

      <h2>The Square of a Sum</h2>

      <p>
        This is one of the most important algebraic identities. If a line is divided into segments
        of length <em>a</em> and <em>b</em>, then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          (a + b)² = a² + 2ab + b²
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 240 240" className="w-72 h-72">
          {/* Outer square */}
          <rect x="20" y="20" width="200" height="200" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Dividers */}
          <line x1="140" y1="20" x2="140" y2="220" stroke="#f59e0b" strokeWidth="1" />
          <line x1="20" y1="140" x2="220" y2="140" stroke="#f59e0b" strokeWidth="1" />
          {/* a² square */}
          <rect x="20" y="20" width="120" height="120" fill="#f59e0b" fillOpacity="0.2" />
          {/* b² square */}
          <rect x="140" y="140" width="80" height="80" fill="#f59e0b" fillOpacity="0.2" />
          {/* ab rectangles */}
          <rect x="140" y="20" width="80" height="120" fill="#3b82f6" fillOpacity="0.2" />
          <rect x="20" y="140" width="120" height="80" fill="#3b82f6" fillOpacity="0.2" />
          {/* Labels */}
          <text x="80" y="15" fill="#f59e0b" fontSize="12" textAnchor="middle">a</text>
          <text x="180" y="15" fill="#f59e0b" fontSize="12" textAnchor="middle">b</text>
          <text x="15" y="85" fill="#f59e0b" fontSize="12" textAnchor="end">a</text>
          <text x="15" y="185" fill="#f59e0b" fontSize="12" textAnchor="end">b</text>
          {/* Area labels */}
          <text x="80" y="75" fill="#fbbf24" fontSize="14" textAnchor="middle">a²</text>
          <text x="180" y="185" fill="#fbbf24" fontSize="14" textAnchor="middle">b²</text>
          <text x="180" y="75" fill="#60a5fa" fontSize="12" textAnchor="middle">ab</text>
          <text x="80" y="185" fill="#60a5fa" fontSize="12" textAnchor="middle">ab</text>
        </svg>
      </div>

      <p>
        The diagram shows how a square of side <em>(a + b)</em> is composed of:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>One square of side <em>a</em> (area = a²)</li>
        <li>One square of side <em>b</em> (area = b²)</li>
        <li>Two rectangles with sides <em>a</em> and <em>b</em> (total area = 2ab)</li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.6 (converse of isosceles theorem)</li>
        <li>Proposition I.29 (properties of parallel lines)</li>
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.34 (properties of parallelograms)</li>
        <li>Proposition I.43 (complements are equal)</li>
        <li>Proposition I.46 (constructing squares)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Significance:</strong> This identity is fundamental to
          algebra and appears constantly in mathematics. It's used for factoring, completing the
          square, the quadratic formula, and countless other applications.
        </p>
      </div>
    </LessonLayout>
  );
}
