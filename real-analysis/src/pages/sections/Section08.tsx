import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section08Quiz } from '@/data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Power Series</h2>

      <p>
        Power series are infinite series of the form <Math>{"\\sum c_n (x - a)^n"}</Math>. They provide
        a way to represent functions as infinite polynomials and are fundamental to complex analysis
        and approximation theory.
      </p>

      <Definition title="Power Series">
        <p>
          A power series centered at <Math>{"a"}</Math> is a series of the form:
        </p>
        <MathBlock>
          {`\\sum_{n=0}^\\infty c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \\cdots`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Radius of Convergence"
        proof={
          <>
            <p className="mb-3">Let <Math>{`R = 1/\\limsup|c_n|^{1/n}`}</Math> (with <Math>{`R = \\infty`}</Math> if limsup <Math>{`= 0`}</Math>, <Math>{`R = 0`}</Math> if limsup <Math>{`= \\infty`}</Math>).</p>
            <p className="mb-3">For <Math>{`|x - a| < R`}</Math>: <Math>{`|c_n(x-a)^n|^{1/n} = |c_n|^{1/n}|x-a| \\to L|x-a| < 1`}</Math> where <Math>{`L = \\limsup|c_n|^{1/n}`}</Math>.</p>
            <p className="mb-3">By the root test, the series converges absolutely.</p>
            <p className="mb-3">For <Math>{`|x - a| > R`}</Math>: similarly, the root test shows divergence since <Math>{`L|x-a| > 1`}</Math>.</p>
          </>
        }
      >
        <p>
          For every power series <Math>{"\\sum c_n (x-a)^n"}</Math>, there exists <Math>{"R \\in [0, \\infty]"}</Math>
          called the radius of convergence such that:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>The series converges absolutely for <Math>{"|x - a| < R"}</Math></li>
          <li>The series diverges for <Math>{"|x - a| > R"}</Math></li>
          <li>At <Math>{"|x - a| = R"}</Math>, convergence must be checked separately</li>
        </ul>
      </Theorem>

      <Theorem
        title="Cauchy-Hadamard Formula"
        proof={
          <>
            <p className="mb-3">This follows from the root test applied to <Math>{`\\sum c_n(x-a)^n`}</Math>.</p>
            <p className="mb-3">The series converges when:</p>
            <MathBlock>{`\\limsup|c_n(x-a)^n|^{1/n} = \\limsup|c_n|^{1/n} \\cdot |x-a| < 1`}</MathBlock>
            <p className="mb-3">This gives <Math>{`|x-a| < 1/\\limsup|c_n|^{1/n} = R`}</Math>.</p>
            <p className="mb-3">The formula unifies the treatment: <Math>{`R = 0`}</Math> means the series only converges at <Math>{`x = a`}</Math>; <Math>{`R = \\infty`}</Math> means it converges everywhere.</p>
          </>
        }
      >
        <p>The radius of convergence is given by:</p>
        <MathBlock>
          {`\\frac{1}{R} = \\limsup_{n \\to \\infty} |c_n|^{1/n}`}
        </MathBlock>
      </Theorem>

      <Example title="Common Power Series">
        <p>The exponential function has radius <Math>{"R = \\infty"}</Math>:</p>
        <MathBlock>
          {`e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots`}
        </MathBlock>
      </Example>

      <h3>Properties of Power Series</h3>

      <Theorem
        title="Differentiation and Integration"
        proof={
          <>
            <p className="mb-3"><strong>Radius preserved:</strong> For the derivative series <Math>{`\\sum n c_n x^{n-1}`}</Math>, note that <Math>{`n^{1/n} \\to 1`}</Math>.</p>
            <p className="mb-3">So <Math>{`\\limsup|nc_n|^{1/n} = \\limsup(n^{1/n}|c_n|^{1/n}) = \\limsup|c_n|^{1/n}`}</Math>. Same radius!</p>
            <p className="mb-3"><strong>Term-by-term validity:</strong> For <Math>{`|x| < r < R`}</Math>, the series <Math>{`\\sum n c_n x^{n-1}`}</Math> converges uniformly on <Math>{`[-r, r]`}</Math>.</p>
            <p className="mb-3">By uniform convergence theorems, we can differentiate term by term, and the result equals the derivative of the sum.</p>
          </>
        }
      >
        <p>
          Inside the interval of convergence, a power series can be differentiated and
          integrated term by term:
        </p>
        <MathBlock>
          {`\\frac{d}{dx} \\sum c_n x^n = \\sum n c_n x^{n-1}`}
        </MathBlock>
        <p>The radius of convergence is preserved.</p>
      </Theorem>

      <Callout type="important">
        <strong>Analytic Functions:</strong> A function that equals its power series in a
        neighborhood of a point is called analytic. Not all smooth (<Math>{"C^\\infty"}</Math>) functions
        are analytic!
      </Callout>

      <Example title="Non-Analytic Smooth Function">
        <p>The function <Math>{"f(x) = e^{-1/x^2}"}</Math> for <Math>{"x \\neq 0"}</Math> and <Math>{"f(0) = 0"}</Math>{" "}
        is smooth but not analytic at 0. Its Taylor series is identically 0!</p>
      </Example>

      <SectionQuiz
        sectionId={8}
        questions={section08Quiz}
        title="Power Series Quiz"
      />
    </LessonLayout>
  );
}
