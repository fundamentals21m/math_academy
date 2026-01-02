import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section77() {
  return (
    <LessonLayout sectionId={77}>
      <Proposition
        title="Proposition III.13"
        proof={
          <>
            <p>
              Let the circles <em>ABDC</em>, <em>EBFD</em> touch one another internally at the
              points <em>D</em>, <em>B</em>.
            </p>
            <p className="mt-2">
              I say that this is impossible.
            </p>
            <p className="mt-2">
              For, if possible, let the centers <em>G</em>, <em>H</em> of the circles be taken;
              let the straight line <em>BGHD</em> be joined.
            </p>
            <p className="mt-2">
              Then, since the point <em>G</em> is the center of the circle <em>ABDC</em>,{' '}
              <em>BG</em> is equal to <em>GD</em>.
            </p>
            <p className="mt-2">
              Again, since the point <em>H</em> is the center of the circle <em>EBFD</em>,{' '}
              <em>BH</em> is equal to <em>HD</em>.
            </p>
            <p className="mt-2">
              Therefore <em>BG</em>, <em>GH</em> are greater than <em>BH</em>. But <em>BH</em> is
              equal to <em>GH</em>, <em>HD</em>; therefore <em>BG</em>, <em>GH</em> are greater
              than <em>GH</em>, <em>HD</em>.
            </p>
            <p className="mt-2">
              Let <em>GH</em> be subtracted from each; therefore <em>BG</em> is greater than{' '}
              <em>HD</em>.
            </p>
            <p className="mt-2">
              But <em>BG</em> is equal to <em>GD</em>; therefore <em>GD</em> is also greater than{' '}
              <em>HD</em>, the less than the greater: which is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore a circle does not touch a circle internally at more than one point.
            </p>
            <p className="mt-2">
              Similarly we can prove that neither does it so touch it externally. Therefore a
              circle does not touch a circle at more than one point whether it touch it internally
              or externally.
            </p>
          </>
        }
      >
        <p>
          A circle does not touch a circle at more than one point whether it touch it internally
          or externally.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition proves that two tangent circles (whether internal or external tangency)
        touch at exactly <strong>one</strong> point, never more.
      </p>

      <div className="flex justify-center gap-8 my-6">
        <svg viewBox="0 0 150 150" className="w-40 h-40">
          {/* Internal tangency - correct */}
          <circle cx="75" cy="75" r="50" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="95" cy="75" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="125" cy="75" r="3" fill="#22c55e" />
          <text x="75" y="140" fill="#22c55e" fontSize="10" textAnchor="middle">1 point ✓</text>
        </svg>
        <svg viewBox="0 0 150 150" className="w-40 h-40">
          {/* Supposed two points - impossible */}
          <circle cx="75" cy="75" r="50" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <circle cx="75" cy="75" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
          <circle cx="125" cy="75" r="3" fill="#ef4444" />
          <circle cx="25" cy="75" r="3" fill="#ef4444" />
          <text x="75" y="140" fill="#ef4444" fontSize="10" textAnchor="middle">2 points ✗</text>
        </svg>
      </div>

      <h3>Proof for Internal Tangency</h3>

      <p>
        Suppose two circles touched internally at two points <em>B</em> and <em>D</em>. By III.11,
        the line through the centers must pass through both tangent points. So centers <em>G</em>{' '}
        and <em>H</em> lie on line <em>BD</em>.
      </p>

      <p className="mt-4">Now using the radii:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>BG</em> = <em>GD</em> (radius of outer circle)</li>
        <li><em>BH</em> = <em>HD</em> (radius of inner circle)</li>
      </ul>

      <p className="mt-4">
        If <em>G</em> and <em>H</em> both lie between <em>B</em> and <em>D</em>, we can derive
        a contradiction from the triangle inequality and the equality of radii.
      </p>

      <h3 className="mt-6">Proof for External Tangency</h3>

      <p>
        A similar argument works for external tangency. If the circles touched at two points,
        the line of centers would need to pass through both. But then the distance between
        centers would equal both <em>r₁ + r₂</em> (for point 1) and <em>r₁ + r₂</em> (for point
        2), while the two points would have to be different—impossible.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.11 (line of centers passes through internal tangent point)</li>
        <li>Proposition III.12 (line of centers passes through external tangent point)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Insight:</strong> If circles touched at two
          points, they would have to be <em>intersecting</em> circles (III.10 allows at most 2
          intersection points). But tangency means they touch without crossing—limiting them to
          exactly one point.
        </p>
      </div>
    </LessonLayout>
  );
}
