import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { HomogeneousCoordinatesDemo } from '@/components/visualizations/chapter5';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2>Homogeneous Coordinates</h2>

      <p>
        Because "points" and "lines" of ℝP² are lines and planes through O in ℝ³,
        they are easily handled by methods of linear algebra.
      </p>

      <h3>Coordinates for Points</h3>

      <p>
        A line through O is determined by any point (x, y, z) ≠ O, and it consists
        of the points (tx, ty, tz), where t runs through all real numbers.
      </p>

      <Definition title="Homogeneous Coordinates">
        <p>
          A "point" in ℝP² is not given by a single triple (x, y, z), but rather
          by any of its nonzero multiples (tx, ty, tz). These triples are called
          the <strong>homogeneous coordinates</strong> of the "point."
        </p>
      </Definition>

      <h3>Equations for Lines</h3>

      <p>
        A plane through O has a linear equation of the form ax + by + cz = 0, called
        a <strong>homogeneous equation</strong>. The same plane is given by the equation
        tax + tby + tcz = 0 for any nonzero t.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> A "line" is likewise not given by a single triple
        (a, b, c), but by the set of all its nonzero multiples (ta, tb, tc).
      </Callout>

      <h3>Finding the Line Through Two Points</h3>

      <p>
        If (x₁, y₁, z₁) and (x₂, y₂, z₂) lie on different lines through O, then they
        lie in a unique plane ax + by + cz = 0. The coordinates (a, b, c) can be found
        by solving:
      </p>

      <MathBlock>
        {`\\begin{aligned}
ax_1 + by_1 + cz_1 &= 0 \\\\
ax_2 + by_2 + cz_2 &= 0
\\end{aligned}`}
      </MathBlock>

      <p>
        Because there are more unknowns than equations, there is not a single solution
        but a whole space of them—a set of multiples (ta, tb, tc), all representing
        the same homogeneous equation.
      </p>

      <Theorem title="Algebraic Basis of Projective Geometry"
        proof={
          <>
            <p>We prove both statements using linear algebra.</p>
            <p className="mt-2"><strong>Two points determine a unique line:</strong></p>
            <p>Let P₁ = (x₁, y₁, z₁) and P₂ = (x₂, y₂, z₂) be two distinct "points" in ℝP² (i.e., two lines through O in ℝ³ that are not the same). We seek the plane ax + by + cz = 0 containing both.</p>
            <p className="mt-2">The system of equations:</p>
            <MathBlock math="ax_1 + by_1 + cz_1 = 0, \quad ax_2 + by_2 + cz_2 = 0" />
            <p className="mt-2">has coefficient matrix of rank at most 2 (two equations in three unknowns). Since P₁ and P₂ represent different lines through O, they are linearly independent, so the matrix has rank exactly 2. Therefore, the solution space for (a, b, c) is one-dimensional, meaning all solutions are multiples (ta, tb, tc) of a single solution—representing a unique plane through O.</p>
            <p className="mt-2"><strong>Two lines determine a unique point:</strong></p>
            <p>Let L₁: a₁x + b₁y + c₁z = 0 and L₂: a₂x + b₂y + c₂z = 0 be two distinct "lines" (planes through O). Since they are distinct, (a₁, b₁, c₁) and (a₂, b₂, c₂) are linearly independent.</p>
            <p className="mt-2">The system has coefficient matrix of rank 2 in three variables, so its solution space is one-dimensional. Thus, all solutions are of the form (tx, ty, tz) for some fixed (x, y, z)—representing a unique line through O, i.e., a unique "point" of ℝP².</p>
          </>
        }
      >
        <p>
          This is the algebraic reason why two "points" lie on a unique "line" in ℝP².
          Similarly, two "lines" have a unique "point" in common because solving:
        </p>
        <MathBlock>
          {`\\begin{aligned}
a_1x + b_1y + c_1z &= 0 \\\\
a_2x + b_2y + c_2z &= 0
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          for x, y, z gives a set of multiples (tx, ty, tz) representing the
          homogeneous coordinates of the common "point."
        </p>
      </Theorem>

      <h3>Complex Projective Plane</h3>

      <p>
        It makes no algebraic difference if the coordinates are complex numbers.
        We can define a <strong>complex projective plane ℂP²</strong>, each "point"
        of which is a set of triples (tx, ty, tz), where x, y, z are complex numbers
        and t runs through all complex numbers.
      </p>

      <p>
        It remains true that any two "points" lie on a unique "line" and any two
        "lines" have a unique common point, simply because complex linear equations
        work the same as real ones.
      </p>

      <Callout type="info">
        <strong>Multiple Models:</strong> There is more than one model of the
        projective plane axioms. Later we shall look at other models, which show
        that certain properties of ℝP² do not follow from the axioms alone.
      </Callout>

      <h3>Projective Space ℝP³</h3>

      <p>
        It is easy to generalize homogeneous coordinates to quadruples (w, x, y, z)
        and define the three-dimensional <strong>real projective space ℝP³</strong>:
      </p>

      <Definition title="Real Projective Space ℝP³">
        <ul className="list-disc list-inside space-y-3">
          <li>
            A <strong>"point"</strong> is a line through O in ℝ⁴, that is, a set of
            quadruples t<strong>u</strong>, where <strong>u</strong> = (w, x, y, z)
          </li>
          <li>
            A <strong>"line"</strong> is a plane through O in ℝ⁴, that is, a set
            t₁<strong>u</strong>₁ + t₂<strong>u</strong>₂ where <strong>u</strong>₁
            and <strong>u</strong>₂ are linearly independent
          </li>
          <li>
            A <strong>"plane"</strong> is a 3-dimensional space through O in ℝ⁴
          </li>
        </ul>
      </Definition>

      <h3>Properties of ℝP³</h3>

      <p>
        Linear algebra enables us to show various properties:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>Two "points" lie on a unique "line."</li>
          <li>Three "points" not on a "line" lie on a unique "plane."</li>
          <li>Two "planes" have a unique "line" in common.</li>
          <li>Three "planes" with no common "line" have one common "point."</li>
        </ol>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.4.1</h4>
        <p className="text-slate-300">
          Find the plane ax + by + cz = 0 that contains the points (1, 2, 3) and (1, 1, 1).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.4.2</h4>
        <p className="text-slate-300">
          Find the line of intersection of the planes x + 2y + 3z = 0 and x + y + z = 0.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.4.3</h4>
        <p className="text-slate-300">
          You can write down the solution of Exercise 5.4.2 as soon as you have
          solved Exercise 5.4.1. Why?
        </p>
      </div>

      <HomogeneousCoordinatesDemo className="my-6" />

      <SectionQuiz
        sectionId={34}
        questions={quizMap[34] || []}
        title="Homogeneous Coordinates Quiz"
      />
    </LessonLayout>
  );
}
