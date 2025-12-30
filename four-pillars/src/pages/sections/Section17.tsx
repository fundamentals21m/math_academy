import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { DistanceExplorer } from '@/components/visualizations/chapter3';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>Distance</h2>

      <p>
        Having established coordinates and equations for lines, we now turn to
        one of the most fundamental concepts in geometry: <strong>distance</strong>.
        The Pythagorean theorem gives us a way to calculate distance in the
        coordinate plane.
      </p>

      <h3>The Distance Formula</h3>

      <p>
        The distance between two points in the plane can be found using the
        Pythagorean theorem. If we have points P₁ = (x₁, y₁) and P₂ = (x₂, y₂),
        we can form a right triangle where the horizontal leg has length |x₂ - x₁|
        and the vertical leg has length |y₂ - y₁|.
      </p>

      <Definition title="Distance Formula">
        <p>
          The <strong>distance</strong> between points P₁ = (x₁, y₁) and P₂ = (x₂, y₂) is:
        </p>
        <MathBlock>
          {`|P_1P_2| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`}
        </MathBlock>
        <p className="mt-2 text-sm text-slate-400">
          This follows directly from the Pythagorean theorem applied to the
          right triangle formed by the horizontal and vertical displacements.
        </p>
      </Definition>

      <h3>The Equation of a Circle</h3>

      <p>
        A circle is defined as the set of all points at a fixed distance (the
        <strong> radius</strong>) from a fixed point (the <strong>center</strong>).
        Using the distance formula, we can write the equation of a circle.
      </p>

      <Definition title="Equation of a Circle">
        <p>
          The circle with center (a, b) and radius r consists of all points (x, y)
          satisfying:
        </p>
        <MathBlock>
          {`(x - a)^2 + (y - b)^2 = r^2`}
        </MathBlock>
        <p className="mt-2">
          This equation says that the distance from (x, y) to (a, b) equals r.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Special Case:</strong> When the center is at the origin (0, 0),
        the equation simplifies to x² + y² = r². This is the simplest form of a
        circle equation.
      </Callout>

      <h3>Equidistant Lines</h3>

      <p>
        An important application of the distance formula is finding the set of
        all points equidistant from two given points.
      </p>

      <Theorem title="Equidistant Line">
        <p>
          The set of all points equidistant from two distinct points A and B
          forms a line—the <strong>perpendicular bisector</strong> of segment AB.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          This line passes through the midpoint of AB and is perpendicular to AB.
        </p>
      </Theorem>

      <p>
        To prove this, suppose A = (a₁, a₂) and B = (b₁, b₂). A point P = (x, y)
        is equidistant from A and B when |PA| = |PB|, which means:
      </p>

      <MathBlock>
        {`(x - a_1)^2 + (y - a_2)^2 = (x - b_1)^2 + (y - b_2)^2`}
      </MathBlock>

      <p>
        Expanding and simplifying gives a linear equation—the equation of a line!
      </p>

      <h3>The Triangle Inequality</h3>

      <p>
        The triangle inequality states that any two sides of a triangle are
        together greater than the third side. In coordinate terms:
      </p>

      <Theorem title="Triangle Inequality">
        <p>
          For any three points O, P, Q not on a line:
        </p>
        <MathBlock>
          {`|OP| + |PQ| > |OQ|`}
        </MathBlock>
        <p className="mt-2 text-sm text-slate-400">
          This inequality becomes an equality if and only if P lies on the
          line segment from O to Q.
        </p>
      </Theorem>

      <p>
        To prove this algebraically, we can place the triangle with one vertex
        at O = (0, 0), another at P = (x₁, 0) with x₁ {'>'} 0, and the third at
        Q = (x₂, y₂). Then:
      </p>

      <MathBlock>
        {`|OP| = x_1, \\quad |PQ| = \\sqrt{(x_2 - x_1)^2 + y_2^2}, \\quad |OQ| = \\sqrt{x_2^2 + y_2^2}`}
      </MathBlock>

      <p>
        The triangle inequality |OP| + |PQ| {'>'} |OQ| can be verified by showing
        that (|OP| + |PQ|)² {'>'} |OQ|².
      </p>

      <Callout type="important">
        <strong>Application:</strong> The triangle inequality tells us that the
        straight line is the shortest path between two points. Any detour through
        a third point (not on the line) increases the total distance.
      </Callout>

      <h3>Three Points on a Circle</h3>

      <p>
        An elegant application of equidistant lines is the following theorem:
      </p>

      <Theorem title="Circumscribed Circle">
        <p>
          Any three points not on a line lie on a unique circle.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          The center of this circle is equidistant from all three points, so it
          lies on the intersection of the perpendicular bisectors of any two sides
          of the triangle formed by the points.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.3.1</h4>
        <p className="text-slate-300">
          Show that any three points not in a line lie on a unique circle.
          (Hint: the center of the circle is equidistant from the three points.)
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.3.2</h4>
        <p className="text-slate-300">
          Consider a triangle with vertices at O = (0, 0), P = (x₁, 0) with x₁ {'>'} 0,
          and Q = (x₂, y₂). Verify the distance formulas for |OP|, |PQ|, and |OQ|.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.3.3</h4>
        <p className="text-slate-300">
          Show that (|OP| + |PQ|)² - |OQ|² = 2x₁[√((x₂ - x₁)² + y₂²) - (x₂ - x₁)].
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.3.4</h4>
        <p className="text-slate-300">
          Show that the term in square brackets in Exercise 3.3.3 is positive if
          y₂ ≠ 0, and hence that the triangle inequality holds in this case.
        </p>
      </div>

      <DistanceExplorer className="my-6" />

      <SectionQuiz
        sectionId={17}
        questions={quizMap[17] || []}
        title="Distance Quiz"
      />
    </LessonLayout>
  );
}
