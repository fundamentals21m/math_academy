import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Intersections of Lines and Circles</h2>

      <p>
        Now that lines and circles are defined by equations, we can give exact
        algebraic equivalents of straightedge and compass operations. This
        connection reveals the deep relationship between geometry and algebra.
      </p>

      <h3>Algebraic Equivalents of Constructions</h3>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">Drawing a Line</h4>
          <p className="text-slate-300 mt-2">
            Drawing a line through given points (x₁, y₁) and (x₂, y₂) corresponds
            to finding the equation of the line. The slope between these points
            must equal the slope from any point (x, y) to (x₁, y₁):
          </p>
          <MathBlock>
            {`\\frac{y - y_1}{x - x_1} = \\frac{y_2 - y_1}{x_2 - x_1}`}
          </MathBlock>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">Drawing a Circle</h4>
          <p className="text-slate-300 mt-2">
            Drawing a circle with center (a, b) and radius r corresponds to
            finding the equation:
          </p>
          <MathBlock>
            {`(x - a)^2 + (y - b)^2 = r^2`}
          </MathBlock>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-400">Finding Intersections</h4>
          <p className="text-slate-300 mt-2">
            Finding new points as intersections corresponds to solving systems of equations:
          </p>
          <ul className="list-disc list-inside mt-2 text-slate-300">
            <li>A pair of line equations</li>
            <li>A pair of circle equations</li>
            <li>A line equation and a circle equation</li>
          </ul>
        </div>
      </div>

      <h3>Intersection of Two Circles</h3>

      <p>
        Consider two circles with equations:
      </p>

      <MathBlock>
        {`(x - a_1)^2 + (y - b_1)^2 = r_1^2`}
      </MathBlock>
      <MathBlock>
        {`(x - a_2)^2 + (y - b_2)^2 = r_2^2`}
      </MathBlock>

      <p>
        Expanding these equations and subtracting one from the other eliminates
        the x² and y² terms, leaving a linear equation:
      </p>

      <MathBlock>
        {`2(a_2 - a_1)x + 2(b_2 - b_1)y + r_2^2 - r_1^2 = 0`}
      </MathBlock>

      <Theorem title="Circle Intersection">
        <p>
          The intersection points of two circles lie on a line (called the
          <strong> radical axis</strong>). To find the actual intersection points,
          solve this linear equation along with either circle equation.
        </p>
      </Theorem>

      <h3>Solving the Equations</h3>

      <p>
        When we substitute the solution from the linear equation back into a
        circle equation, we get a quadratic equation. If this equation is of
        the form Ax² + Bx + C = 0, then the solutions are:
      </p>

      <MathBlock>
        {`x = \\frac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}`}
      </MathBlock>

      <Callout type="info">
        <strong>Key Observation:</strong> Solving linear equations requires only
        the operations +, −, ×, and ÷. The quadratic formula shows that √ is the
        only additional operation needed to solve quadratic equations.
      </Callout>

      <h3>The Algebraic Criterion for Constructibility</h3>

      <p>
        Since all intersection points in a straightedge and compass construction
        can be found with the operations +, −, ×, ÷, and √, and these operations
        can all be carried out by straightedge and compass, we get:
      </p>

      <Definition title="Algebraic Criterion for Constructibility">
        <p>
          A point is <strong>constructible</strong> (starting from the points 0 and 1)
          if and only if its coordinates are obtainable from the number 1 by the
          operations +, −, ×, ÷, and √.
        </p>
      </Definition>

      <h3>Impossibility Results</h3>

      <p>
        The algebraic criterion for constructibility, discovered by Descartes,
        enables us to prove that certain figures are <em>not</em> constructible:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-semibold text-red-400">Doubling the Cube</h4>
          <p className="text-slate-300 mt-2">
            The number ∛2 is not constructible because it cannot be expressed
            by a finite number of square roots.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-red-500">
          <h4 className="font-semibold text-red-400">Trisecting an Angle</h4>
          <p className="text-slate-300 mt-2">
            The angle π/3 cannot be trisected because cos(π/9) cannot be expressed
            by a finite number of square roots.
          </p>
        </div>
      </div>

      <Callout type="important">
        <strong>Historical Note:</strong> These impossibility results were not
        proved until the 19th century, by Pierre Wantzel. The proofs require
        sophisticated algebra that goes beyond Descartes' concept of
        constructibility to survey the totality of constructible numbers.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.4.1</h4>
        <p className="text-slate-300">
          Find the intersections of the circles x² + y² = 1 and (x - 1)² + (y - 2)² = 4.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.4.2</h4>
        <p className="text-slate-300">
          Check the plausibility of your answer to Exercise 3.4.1 by sketching
          the two circles.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.4.3</h4>
        <p className="text-slate-300">
          The line x + 2y - 1 = 0 found by eliminating x² and y² from the
          equations of the circles should have some geometric meaning. What is it?
        </p>
      </div>

      <SectionQuiz
        sectionId={18}
        questions={quizMap[18] || []}
        title="Intersections Quiz"
      />
    </LessonLayout>
  );
}
