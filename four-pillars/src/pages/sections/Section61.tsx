import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2>Preserving Angle</h2>

      <p>
        One of the most important properties of Möbius transformations is that
        they are <strong>conformal</strong> — they preserve angles. This property
        is crucial for understanding why Möbius transformations are the natural
        "rigid motions" of hyperbolic geometry.
      </p>

      <h3>What Does "Preserve Angles" Mean?</h3>

      <Definition title="Conformal Map">
        <p>
          A map f is <strong>conformal</strong> (angle-preserving) at a point P
          if, whenever two smooth curves meet at P with angle θ, their images
          under f meet at f(P) with the same angle θ.
        </p>
      </Definition>

      <p>
        More precisely, we consider the angles between the tangent vectors to the
        curves at the point of intersection. A conformal map preserves these angles
        in both magnitude and sense (unless it's orientation-reversing, in which
        case it preserves magnitude but reverses sense).
      </p>

      <Callout type="info">
        <strong>Local vs. Global:</strong> Conformality is a local property — it
        says something about how the map behaves near each point. It doesn't
        require that distances or areas be preserved, only angles.
      </Callout>

      <h3>Why Möbius Transformations Are Conformal</h3>

      <p>
        We can verify conformality by checking the generating transformations.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Translation: z → z + l</h4>
        <p className="text-slate-300">
          Translation is an isometry of the Euclidean plane — it preserves all
          distances and angles. ✓
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Scaling: z → kz</h4>
        <p className="text-slate-300">
          Scaling by k &gt; 0 is a similarity transformation. While it changes
          distances (multiplying them by k), it preserves angles. ✓
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Conjugation: z → z̄</h4>
        <p className="text-slate-300">
          Reflection across the real axis is an isometry. It preserves angle
          magnitudes but reverses orientation. ✓
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Inversion: z → 1/z</h4>
        <p className="text-slate-300 mb-2">
          This is the key case. Inversion in a circle is known to be conformal.
          The proof requires calculus (checking that the derivative has constant
          argument at each point), but the result is classical.
        </p>
        <p className="text-slate-300">
          Since 1/z = z̄/|z|² is the composition of conjugation z → z̄ and
          scaling by 1/|z|², and both preserve angles, so does 1/z. ✓
        </p>
      </div>

      <Theorem title="Möbius Transformations Are Conformal">
        <p>
          Every Möbius transformation is conformal. Orientation-preserving Möbius
          transformations preserve the sense of angles, while orientation-reversing
          ones (those involving conjugation) reverse the sense.
        </p>
      </Theorem>

      <h3>The Derivative Approach</h3>

      <p>
        For those familiar with complex analysis, there's an elegant way to see
        why Möbius transformations are conformal.
      </p>

      <Definition title="Complex Derivative">
        <p>
          A function f(z) is <strong>complex differentiable</strong> (or
          holomorphic) at z₀ if the limit
        </p>
        <MathBlock>{`f'(z_0) = \\lim_{z \\to z_0} \\frac{f(z) - f(z_0)}{z - z_0}`}</MathBlock>
        <p className="mt-2">
          exists. If f'(z₀) ≠ 0, then f is conformal at z₀.
        </p>
      </Definition>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Computing the Derivative</h4>
        <p className="text-slate-300 mb-2">
          For f(z) = (az + b)/(cz + d), using the quotient rule:
        </p>
        <MathBlock>{`f'(z) = \\frac{a(cz+d) - c(az+b)}{(cz+d)^2} = \\frac{ad - bc}{(cz+d)^2}`}</MathBlock>
        <p className="text-slate-300 mt-2">
          Since ad - bc ≠ 0 by assumption, we have f'(z) ≠ 0 wherever f is
          defined. Hence f is conformal everywhere in its domain.
        </p>
      </div>

      <h3>Angle Preservation and Hyperbolic Geometry</h3>

      <p>
        The conformal property has important implications for hyperbolic geometry:
      </p>

      <Theorem title="Hyperbolic Angles = Euclidean Angles">
        <p>
          The angle between two non-Euclidean lines at their point of intersection
          equals the Euclidean angle between them (as curves in the complex plane).
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Same Angles, Different Distances:</strong> While hyperbolic geometry
        has its own notion of distance (which we'll see in the next section), the
        angles are the same as Euclidean angles. This is because we measure angles
        using the Euclidean metric on the tangent space.
      </Callout>

      <h3>Application: Right Angles</h3>

      <p>
        The preservation of angles explains why non-Euclidean lines (which meet
        the boundary at right angles) map to non-Euclidean lines.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Orthogonal Trajectories</h4>
        <p className="text-slate-300">
          If L₁ and L₂ are perpendicular non-Euclidean lines, and f is a Möbius
          transformation, then f(L₁) and f(L₂) are also perpendicular. This
          preserves the geometric structure of "perpendicular bisectors" and
          other orthogonality relationships in hyperbolic geometry.
        </p>
      </div>

      <h3>Conformality and the Cross-Ratio</h3>

      <p>
        The conformal property of Möbius transformations is closely related to
        their preservation of the cross-ratio, which we studied in projective
        geometry. Both properties make Möbius transformations the natural
        symmetries of the hyperbolic plane.
      </p>

      <Theorem title="Triple Transitivity">
        <p>
          Given any three distinct points on ℝ ∪ {'{'}∞{'}'} and any other three distinct
          points on ℝ ∪ {'{'}∞{'}'}, there is a unique Möbius transformation mapping the
          first triple to the second.
        </p>
      </Theorem>

      <p>
        This means the group of Möbius transformations acts "triply transitively"
        on the boundary of the hyperbolic plane, just as the group of isometries
        acts transitively on oriented triangles in Euclidean geometry.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.5.1</h4>
        <p className="text-slate-300">
          Show that the composition of two conformal maps is conformal.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.5.2</h4>
        <p className="text-slate-300">
          Verify that z → z² is conformal except at z = 0. What happens to angles
          at the origin?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.5.3</h4>
        <p className="text-slate-300">
          Find the angle between the imaginary axis and the semicircle centered
          at 1 with radius 1, at their point of intersection.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.5.4</h4>
        <p className="text-slate-300">
          Show that z → -z̄ preserves angle magnitudes but reverses orientation
          (clockwise angles become counterclockwise).
        </p>
      </div>

      <SectionQuiz
        sectionId={61}
        questions={quizMap[61] || []}
        title="Preserving Angle Quiz"
      />
    </LessonLayout>
  );
}
