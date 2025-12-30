import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2>Linear Fractional Functions</h2>

      <p>
        The functions sending x to 1/x, kx, and x + l are among the functions called
        <strong> linear fractional</strong>, each of which has the form:
      </p>

      <MathBlock>
        {`f(x) = \\frac{ax + b}{cx + d} \\quad \\text{where } ad - bc \\neq 0`}
      </MathBlock>

      <h3>Why ad − bc ≠ 0?</h3>

      <p>
        The condition ad − bc ≠ 0 ensures that f(x) is not constant. Constancy
        occurs only if ax + b = (a/c)(cx + d), in which case ad − bc = 0.
      </p>

      <Theorem title="Decomposition of Linear Fractional Functions">
        <p>By algebraic manipulation, any linear fractional function with c ≠ 0 may be written as:</p>
        <MathBlock>
          {`f(x) = \\frac{a}{c} + \\frac{bc - ad}{c(cx + d)}`}
        </MathBlock>
        <p className="mt-2">
          Such a function can therefore be composed from the generating transformations:
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>First multiply x by c</li>
          <li>Then add d</li>
          <li>Then multiply again by c</li>
          <li>Then reciprocate (take 1/x)</li>
          <li>Then multiply by bc − ad</li>
          <li>Finally add a/c</li>
        </ol>
      </Theorem>

      <p>
        When c = 0, the linear fractional function is simply (ax + b)/d = (a/d)x + b/d,
        composed by multiplying by a/d and adding b/d.
      </p>

      <Callout type="info">
        <strong>Key Result:</strong> Any linear fractional function is composed from
        functions that reciprocate, multiply by k, and add l. Hence, any linear
        fractional function on the number line is realized by a sequence of projections.
      </Callout>

      <h3>The Converse</h3>

      <p>
        We now prove the converse: <strong>Any sequence of projections of the number
        line realizes a linear fractional function.</strong>
      </p>

      <p>
        Consider projecting a line onto a perpendicular line from point (a, b). To find
        where point t on the x-axis goes on the y-axis, we use the slope of the line
        through t and (a, b):
      </p>

      <MathBlock>
        {`f(t) = \\frac{bt}{t - a}`}
      </MathBlock>

      <p>
        This is a linear fractional function! For the general case of intersecting
        lines (not necessarily perpendicular), projecting the x-axis from (a, b) onto
        the line y = cx gives:
      </p>

      <MathBlock>
        {`x = \\frac{bt}{ct - ac + b}`}
      </MathBlock>

      <p>
        This is also a linear fractional function of t.
      </p>

      <Theorem title="Linear Fractional = Projection">
        <p>
          Any single projection of a line can be represented by a linear fractional
          function. Since composing linear fractional functions gives a linear fractional
          function, any finite sequence of projections is represented by a linear
          fractional function.
        </p>
      </Theorem>

      <h3>Dividing by Zero</h3>

      <p>
        Division by zero is generally not valid, but in carefully controlled situations,
        it is permissible. The function f(x) = 1/x cannot send x = 0 anywhere (since 1/0
        is undefined), nor can it send any point to y = 0.
      </p>

      <Definition title="The Projective Line ℝ ∪ {'{'}∞{'}'}">
        <p>
          This defect is fixed by extending f(x) = 1/x to include x = ∞, declaring:
        </p>
        <MathBlock>
          {`\\frac{1}{\\infty} = 0 \\quad \\text{and} \\quad \\frac{1}{0} = \\infty`}
        </MathBlock>
        <p className="mt-2">
          The new object ∞ is the point at infinity of the line. The function f(x) = 1/x
          works properly not on ℝ, but on the <strong>real projective line</strong> ℝ ∪ {'{'}&infin;{'}'}.
        </p>
      </Definition>

      <h3>The Real Projective Line ℝP¹</h3>

      <Definition title="ℝP¹">
        <p>
          The <strong>real projective line ℝP¹</strong> is the set ℝ ∪ {'{'}∞{'}'} together
          with all the linear fractional functions mapping it onto itself.
        </p>
        <p className="mt-2">
          Any function f(x) = (ax + b)/(cx + d) with ad − bc ≠ 0 maps ℝ ∪ {'{'}∞{'}'} onto itself.
          The denominator is 0 when x = −d/c, and the correct value is f(−d/c) = ∞.
          Conversely, f(∞) = a/c.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Elasticity of ℝP¹:</strong> Unlike the ordinary line ℝ, where every point
        is determined once we know 0 and 1, the projective line is more "elastic." There
        exists a projection sending 0 to 0, 1 to 1, but 2 to 3. However, if we know where
        three points go, the destination of every other point is determined.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.6.1</h4>
        <p className="text-slate-300">
          Solve the equation y = (ax + b)/(cx + d) for x, and note where your solution
          assumes ad − bc ≠ 0.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.6.2</h4>
        <p className="text-slate-300">
          If f₁(x) = (a₁x + b₁)/(c₁x + d₁) and f₂(x) = (a₂x + b₂)/(c₂x + d₂), compute
          f₁(f₂(x)) and verify that it is of the form (Ax + B)/(Cx + D).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.6.3</h4>
        <p className="text-slate-300">
          Verify that the matrix product gives the coefficients of the composition:
        </p>
        <MathBlock>
          {`\\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix} = \\begin{pmatrix} a_1 & b_1 \\\\ c_1 & d_1 \\end{pmatrix} \\begin{pmatrix} a_2 & b_2 \\\\ c_2 & d_2 \\end{pmatrix}`}
        </MathBlock>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 5.6.4</h4>
        <p className="text-slate-300">
          Show that if a₁d₁ − b₁c₁ ≠ 0 for f₁(x) and a₂d₂ − b₂c₂ ≠ 0 for f₂(x), then
          AD − BC ≠ 0 for f₁(f₂(x)). Why?
        </p>
      </div>

      <SectionQuiz
        sectionId={36}
        questions={quizMap[36] || []}
        title="Linear Fractional Functions Quiz"
      />
    </LessonLayout>
  );
}
