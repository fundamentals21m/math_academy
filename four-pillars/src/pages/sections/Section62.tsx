import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2>Non-Euclidean Distance</h2>

      <p>
        So far, we have seen that Möbius transformations preserve angles and
        non-Euclidean lines. But what about distance? In this section, we define
        a notion of <strong>hyperbolic distance</strong> that Möbius transformations
        preserve.
      </p>

      <h3>Distance on the Imaginary Axis</h3>

      <p>
        We start by defining distance along the imaginary axis, which is the
        simplest non-Euclidean line.
      </p>

      <Definition title="Non-Euclidean Distance on the Imaginary Axis">
        <p>
          For two points pi and qi on the positive imaginary axis (where
          0 &lt; p &lt; q), the <strong>non-Euclidean distance</strong> is:
        </p>
        <MathBlock>{`\\text{ndist}(pi, qi) = \\left| \\log \\frac{q}{p} \\right| = \\log \\frac{q}{p}`}</MathBlock>
      </Definition>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Examples</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>ndist(i, 2i) = log(2/1) = log 2 ≈ 0.693</li>
          <li>ndist(i, ei) = log(e/1) = 1</li>
          <li>ndist(2i, 4i) = log(4/2) = log 2</li>
          <li>ndist(i, 10i) = log 10 ≈ 2.303</li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Logarithmic Scale:</strong> Notice that equal Euclidean distances
        become unequal hyperbolic distances depending on height. The distance from
        i to 2i equals the distance from 2i to 4i, even though 4i - 2i = 2i is
        twice as large as 2i - i = i in Euclidean terms.
      </Callout>

      <h3>Why This Formula?</h3>

      <p>
        The logarithmic formula is motivated by the requirement that certain
        Möbius transformations preserve distance.
      </p>

      <Theorem title="Scaling Preserves Distance">
        <p>
          The transformation z → kz (for k &gt; 0) preserves non-Euclidean
          distance on the imaginary axis:
        </p>
        <MathBlock>{`\\text{ndist}(kpi, kqi) = \\log \\frac{kq}{kp} = \\log \\frac{q}{p} = \\text{ndist}(pi, qi)`}</MathBlock>
      </Theorem>

      <h3>Distance via the Cross-Ratio</h3>

      <p>
        The general formula for non-Euclidean distance uses the cross-ratio,
        connecting hyperbolic geometry back to projective geometry.
      </p>

      <Definition title="General Non-Euclidean Distance">
        <p>
          For two points P and Q in the upper half plane, let L be the unique
          non-Euclidean line through them. Let A and B be the endpoints of L on
          ℝ ∪ {'{'}∞{'}'}. Then:
        </p>
        <MathBlock>{`\\text{ndist}(P, Q) = \\left| \\log \\text{CR}(A, P, Q, B) \\right|`}</MathBlock>
        <p className="mt-2">
          where CR(A, P, Q, B) is the cross-ratio of the four points A, P, Q, B.
        </p>
      </Definition>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Recall: Cross-Ratio</h4>
        <p className="text-slate-300">
          The cross-ratio of four points z₁, z₂, z₃, z₄ on a line is:
        </p>
        <MathBlock>{`\\text{CR}(z_1, z_2, z_3, z_4) = \\frac{(z_1 - z_3)(z_2 - z_4)}{(z_1 - z_4)(z_2 - z_3)}`}</MathBlock>
      </div>

      <h3>Properties of Non-Euclidean Distance</h3>

      <Theorem title="Metric Properties">
        <p>
          Non-Euclidean distance is a genuine metric:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>ndist(P, Q) ≥ 0, with equality iff P = Q</li>
          <li>ndist(P, Q) = ndist(Q, P) (symmetry)</li>
          <li>ndist(P, R) ≤ ndist(P, Q) + ndist(Q, R) (triangle inequality)</li>
        </ul>
      </Theorem>

      <Theorem title="Möbius Transformations Preserve Distance">
        <p>
          If f is a Möbius transformation of the upper half plane, then:
        </p>
        <MathBlock>{`\\text{ndist}(f(P), f(Q)) = \\text{ndist}(P, Q)`}</MathBlock>
        <p className="mt-2">
          This follows from the fact that Möbius transformations preserve the
          cross-ratio.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Isometries:</strong> Since Möbius transformations preserve both
        lines and distances, they are the <em>isometries</em> of hyperbolic
        geometry — the analogues of rigid motions in Euclidean geometry.
      </Callout>

      <h3>Geodesics Minimize Distance</h3>

      <p>
        Just as straight lines minimize Euclidean distance, non-Euclidean lines
        minimize hyperbolic distance.
      </p>

      <Theorem title="Geodesic Property">
        <p>
          If P and Q are two points in the upper half plane, the shortest path
          between them (in the hyperbolic metric) is the arc of the non-Euclidean
          line through P and Q.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Visualization</h4>
        <p className="text-slate-300">
          Imagine the hyperbolic plane as a surface where distances become larger
          and larger as you approach the boundary (the x-axis). The "straight"
          paths curve upward to avoid the high-cost region near the boundary.
          These curved paths are the non-Euclidean lines.
        </p>
      </div>

      <h3>Distance to the Boundary</h3>

      <p>
        An important feature of hyperbolic geometry is that the boundary is
        "infinitely far away."
      </p>

      <Theorem title="Boundary at Infinity">
        <p>
          For any point P in the upper half plane and any point A on the boundary
          ℝ ∪ {'{'}∞{'}'}:
        </p>
        <MathBlock>{`\\text{ndist}(P, A) = \\infty`}</MathBlock>
        <p className="mt-2">
          The boundary is at infinite hyperbolic distance from every interior point.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Intuition</h4>
        <p className="text-slate-300">
          On the imaginary axis, as we move from pi toward the origin (p → 0),
          the hyperbolic distance grows without bound: ndist(pi, εi) = log(p/ε) → ∞
          as ε → 0. This makes the x-axis "unreachable" in finite hyperbolic time.
        </p>
      </div>

      <h3>The Hyperbolic Length Element</h3>

      <p>
        The distance formula can be expressed using a Riemannian metric:
      </p>

      <Definition title="Hyperbolic Metric">
        <p>
          The <strong>hyperbolic line element</strong> at point z = x + iy is:
        </p>
        <MathBlock>{`ds = \\frac{|dz|}{y} = \\frac{\\sqrt{dx^2 + dy^2}}{y}`}</MathBlock>
        <p className="mt-2">
          The hyperbolic distance between two points is the infimum of the
          hyperbolic lengths of paths connecting them.
        </p>
      </Definition>

      <p>
        This formula shows that distances are measured in units of "height above
        the x-axis." Near the x-axis (small y), even small Euclidean movements
        correspond to large hyperbolic distances.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.6.1</h4>
        <p className="text-slate-300">
          Calculate the non-Euclidean distance from i to 10i.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.6.2</h4>
        <p className="text-slate-300">
          Show that ndist(pi, qi) + ndist(qi, ri) = ndist(pi, ri) when p &lt; q &lt; r.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.6.3</h4>
        <p className="text-slate-300">
          Find the hyperbolic length of the arc from i to 1 + i along the
          semicircle centered at 1/2 with radius √(5)/2.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.6.4</h4>
        <p className="text-slate-300">
          Verify that z → 2z preserves hyperbolic distance using the metric
          ds = |dz|/y.
        </p>
      </div>

      <SectionQuiz
        sectionId={62}
        questions={quizMap[62] || []}
        title="Non-Euclidean Distance Quiz"
      />
    </LessonLayout>
  );
}
