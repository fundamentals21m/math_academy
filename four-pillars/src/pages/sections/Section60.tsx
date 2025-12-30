import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { NonEuclideanLinesDemo } from '@/components/visualizations/chapter8';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2>Preserving Non-Euclidean Lines</h2>

      <p>
        A crucial property of Möbius transformations is that they map
        non-Euclidean lines to non-Euclidean lines. This makes them the natural
        "rigid motions" of hyperbolic geometry, just as isometries (rotations,
        reflections, translations) are the rigid motions of Euclidean geometry.
      </p>

      <h3>Lines and Circles in the Complex Plane</h3>

      <p>
        Before proving that Möbius transformations preserve non-Euclidean lines,
        we need to understand how lines and circles are related in complex analysis.
      </p>

      <Definition title="Generalized Circles">
        <p>
          In complex analysis, a <strong>generalized circle</strong> is either:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>An ordinary circle, or</li>
          <li>A straight line (viewed as a "circle through ∞")</li>
        </ul>
        <p className="mt-2">
          This unified view is natural in projective geometry, where the point
          at infinity is treated on equal footing with finite points.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Why Unify Lines and Circles?</strong> When we add the point ∞
        to the complex plane (forming the Riemann sphere), straight lines become
        circles passing through ∞. A Möbius transformation might map a line to
        a circle or vice versa, but it always maps generalized circles to
        generalized circles.
      </Callout>

      <h3>The Main Preservation Theorem</h3>

      <Theorem title="Möbius Transformations Preserve Generalized Circles">
        <p>
          Every Möbius transformation maps generalized circles to generalized
          circles. In particular:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Lines through ∞ may map to circles not through ∞, and vice versa</li>
          <li>Circles not through ∞ map to circles not through ∞</li>
        </ul>
      </Theorem>

      <p>
        To prove this, we check that each generating transformation preserves
        generalized circles.
      </p>

      <h3>Checking the Generators</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Translation: z → z + l</h4>
        <p className="text-slate-300">
          Translation moves every point by the same amount, so circles remain
          circles (just shifted) and lines remain lines (just shifted). ✓
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Scaling: z → kz</h4>
        <p className="text-slate-300">
          Scaling by k &gt; 0 preserves circles (just changes radius by factor k)
          and preserves lines through the origin. Lines not through the origin
          become lines not through the origin. ✓
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Conjugation: z → z̄</h4>
        <p className="text-slate-300">
          Reflection across the real axis preserves circles (just reflects them)
          and preserves lines (reflects them). ✓
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Inversion: z → 1/z</h4>
        <p className="text-slate-300 mb-2">
          This is the key case. Inversion maps:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>Circles through the origin → lines not through the origin</li>
          <li>Lines through the origin → lines through the origin</li>
          <li>Circles not through the origin → circles not through the origin</li>
          <li>Lines not through the origin → circles through the origin</li>
        </ul>
        <p className="text-slate-300 mt-2">
          So generalized circles map to generalized circles. ✓
        </p>
      </div>

      <h3>Preserving Non-Euclidean Lines</h3>

      <p>
        A non-Euclidean line is a special kind of generalized circle: one that
        meets the real axis at right angles. We need to show that Möbius
        transformations preserve this property.
      </p>

      <Theorem title="Orthogonality to the Boundary">
        <p>
          If a Möbius transformation f maps the upper half plane to itself, and
          L is a non-Euclidean line (meeting ℝ ∪ {'{'}∞{'}'} orthogonally), then f(L)
          is also a non-Euclidean line.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Key Insight</h4>
        <p className="text-slate-300">
          Möbius transformations are <em>conformal</em> — they preserve angles.
          Since non-Euclidean lines are characterized by meeting the boundary at
          right angles, and Möbius transformations preserve both the boundary
          and angles, they must preserve non-Euclidean lines.
        </p>
      </div>

      <h3>Examples</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example 1: Translation</h4>
        <p className="text-slate-300 mb-2">
          The map z → z + 2 shifts everything right by 2 units.
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>The vertical line x = 0 maps to the vertical line x = 2</li>
          <li>The semicircle centered at 0 with radius 1 maps to the semicircle centered at 2 with radius 1</li>
        </ul>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example 2: Scaling</h4>
        <p className="text-slate-300 mb-2">
          The map z → 3z scales by factor 3.
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>The vertical line x = 1 maps to the vertical line x = 3</li>
          <li>The semicircle centered at 0 with radius 1 maps to the semicircle centered at 0 with radius 3</li>
        </ul>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example 3: Inversion</h4>
        <p className="text-slate-300 mb-2">
          The map z → 1/z (or z → 1/z̄ for the upper half plane version).
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>The imaginary axis maps to itself</li>
          <li>The unit semicircle maps to itself</li>
          <li>A vertical line x = a maps to a semicircle through the origin</li>
        </ul>
      </div>

      <Callout type="warning">
        <strong>Non-Euclidean to Non-Euclidean:</strong> While a Möbius
        transformation might turn a vertical ray into a semicircle (or vice
        versa), it always maps non-Euclidean lines to non-Euclidean lines.
        The "straightness" is preserved in the hyperbolic sense, not the
        Euclidean sense.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.4.1</h4>
        <p className="text-slate-300">
          Show that z → 2z maps the semicircle centered at 1 with radius 1 to
          the semicircle centered at 2 with radius 2.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.4.2</h4>
        <p className="text-slate-300">
          Find the image of the vertical line x = 1 under the map z → 1/z.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.4.3</h4>
        <p className="text-slate-300">
          Verify that z → -1/z̄ maps the upper half plane to itself and preserves
          the unit semicircle.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.4.4</h4>
        <p className="text-slate-300">
          Show that if two non-Euclidean lines intersect at a point P, and f is
          a Möbius transformation, then f(L₁) and f(L₂) intersect at f(P).
        </p>
      </div>

      <NonEuclideanLinesDemo className="my-6" />

      <SectionQuiz
        sectionId={60}
        questions={quizMap[60] || []}
        title="Preserving Non-Euclidean Lines Quiz"
      />
    </LessonLayout>
  );
}
