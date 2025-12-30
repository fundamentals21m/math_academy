import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { UpperHalfPlaneExplorer } from '@/components/visualizations/chapter8';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2>Extending the Projective Line to a Plane</h2>

      <p>
        In Section 5.4 we saw how the real projective line ℝP¹ extends the
        ordinary real number line ℝ by adding a "point at infinity." The points
        of ℝP¹ can be viewed as slopes, and the extra point ∞ is the "infinite
        slope" of a vertical line. For reasons that will become clear, we now
        extend ℝ in a different direction — into the <strong>upper half plane</strong>.
      </p>

      <h3>The Upper Half Plane</h3>

      <Definition title="Upper Half Plane">
        <p>
          The <strong>upper half plane</strong> consists of all complex numbers
          z = x + iy with y &gt; 0:
        </p>
        <MathBlock>{`\\mathcal{H} = \\{z = x + iy \\in \\mathbb{C} : y > 0\\}`}</MathBlock>
        <p className="mt-2">
          The boundary of ℋ is the real axis ℝ together with the point ∞. We
          denote this extended boundary by ℝ ∪ {'{'}∞{'}'} = ℝP¹.
        </p>
      </Definition>

      <p>
        We already know that the transformations of ℝP¹ are the linear fractional
        functions. These extend naturally to the upper half plane.
      </p>

      <Definition title="Linear Fractional Transformations">
        <p>
          A <strong>linear fractional transformation</strong> (or Möbius
          transformation) is a function of the form:
        </p>
        <MathBlock>{`f(z) = \\frac{az + b}{cz + d}`}</MathBlock>
        <p className="mt-2">
          where a, b, c, d are real numbers with ad - bc ≠ 0. When ad - bc &gt; 0,
          these transformations map the upper half plane to itself.
        </p>
      </Definition>

      <Callout type="info">
        <strong>From Line to Plane:</strong> The remarkable fact is that the
        transformations of ℝP¹ extend to transformations of the upper half plane,
        and this extension reveals a beautiful non-Euclidean geometry.
      </Callout>

      <h3>Non-Euclidean Lines</h3>

      <p>
        The key to non-Euclidean geometry in the upper half plane is the definition
        of "lines." These are not ordinary straight lines, but rather special curves
        that play the role of geodesics.
      </p>

      <Definition title="Non-Euclidean Lines">
        <p>
          A <strong>non-Euclidean line</strong> (or hyperbolic line) in the upper
          half plane is one of the following:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A vertical ray: x = c for some constant c, with y &gt; 0</li>
          <li>A semicircle with center on the x-axis (and y &gt; 0 only)</li>
        </ul>
      </Definition>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Why These Curves?</h4>
        <p className="text-slate-300">
          Both vertical rays and semicircles with centers on the x-axis share an
          important property: they meet the x-axis at right angles. This
          orthogonality to the boundary is what makes them behave like "straight
          lines" in hyperbolic geometry.
        </p>
      </div>

      <UpperHalfPlaneExplorer className="my-6" />

      <h3>Uniqueness of Non-Euclidean Lines</h3>

      <Theorem title="Unique Line Through Two Points">
        <p>
          Given any two distinct points P and Q in the upper half plane, there is
          exactly one non-Euclidean line passing through both of them.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof Sketch</h4>
        <p className="text-slate-300 mb-3">
          Consider two cases:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            If P and Q have the same real part (lie on a vertical line), then
            the unique non-Euclidean line through them is that vertical ray.
          </li>
          <li>
            If P and Q have different real parts, there is a unique circle through
            them with center on the x-axis. The upper semicircle of this circle is
            the unique non-Euclidean line through P and Q.
          </li>
        </ul>
        <p className="text-slate-300 mt-3">
          The center of the circle is found by noting that it must be equidistant
          from P and Q, hence lies on the perpendicular bisector of segment PQ.
          The intersection of this bisector with the x-axis gives the center.
        </p>
      </div>

      <h3>Failure of the Parallel Axiom</h3>

      <p>
        The most striking feature of non-Euclidean geometry is that the parallel
        axiom fails. Given a non-Euclidean line L and a point P not on L, there
        are <em>infinitely many</em> non-Euclidean lines through P that do not
        meet L.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Example: Multiple Parallels</h4>
        <p className="text-slate-300 mb-3">
          Let L be the vertical line x = 0 (the positive imaginary axis), and let
          P = 1 + i (the point at real part 1, imaginary part 1).
        </p>
        <p className="text-slate-300">
          Any semicircle with center at c &gt; 0 on the positive x-axis, passing
          through P but with radius less than c, will be a non-Euclidean line
          through P that never meets L. There are infinitely many such semicircles.
        </p>
      </div>

      <Callout type="warning">
        <strong>Hyperbolic vs. Euclidean:</strong> In Euclidean geometry, given a
        line L and point P not on L, there is exactly one line through P parallel
        to L. In hyperbolic geometry, there are infinitely many such "parallel"
        lines. This is the defining characteristic of hyperbolic geometry.
      </Callout>

      <h3>The Role of Linear Fractional Transformations</h3>

      <p>
        Linear fractional transformations with real coefficients and positive
        determinant (ad - bc &gt; 0) preserve the upper half plane. Moreover,
        they map non-Euclidean lines to non-Euclidean lines.
      </p>

      <Theorem title="Lines Preserved">
        <p>
          If f(z) = (az + b)/(cz + d) with a, b, c, d ∈ ℝ and ad - bc &gt; 0, then
          f maps non-Euclidean lines in ℋ to non-Euclidean lines in ℋ.
        </p>
      </Theorem>

      <p>
        This property means that linear fractional transformations play the role
        of "rigid motions" in hyperbolic geometry. They preserve the fundamental
        structure of the geometry, just as rotations and translations preserve
        structure in Euclidean geometry.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.1.1</h4>
        <p className="text-slate-300">
          Find the non-Euclidean line through the points i and 2i (both on the
          imaginary axis).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.1.2</h4>
        <p className="text-slate-300">
          Find the non-Euclidean line through the points i and 1 + i.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.1.3</h4>
        <p className="text-slate-300">
          Show that any semicircle with center on the x-axis meets the x-axis at
          right angles.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.1.4</h4>
        <p className="text-slate-300">
          Given the non-Euclidean line L that is the positive imaginary axis and
          the point P = 2 + i, find infinitely many non-Euclidean lines through P
          that do not meet L.
        </p>
      </div>

      <SectionQuiz
        sectionId={57}
        questions={quizMap[57] || []}
        title="Extending the Projective Line Quiz"
      />
    </LessonLayout>
  );
}
