import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section08Quiz } from '@/data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Power Series</h2>

      <p>
        Power series are infinite series of the form <InlineMath>{"\\sum c_n (x - a)^n"}</InlineMath>. They provide
        a way to represent functions as infinite polynomials and are fundamental to complex analysis
        and approximation theory.
      </p>

      <Definition title="Power Series">
        <p>
          A power series centered at <InlineMath>{"a"}</InlineMath> is a series of the form:
        </p>
        <MathBlock>
          {`\\sum_{n=0}^\\infty c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \\cdots`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Radius of Convergence"
        proof={
          <>
            <p className="mb-3">Let <InlineMath>{`R = 1/\\limsup|c_n|^{1/n}`}</InlineMath> (with <InlineMath>{`R = \\infty`}</InlineMath> if limsup <InlineMath>{`= 0`}</InlineMath>, <InlineMath>{`R = 0`}</InlineMath> if limsup <InlineMath>{`= \\infty`}</InlineMath>).</p>
            <p className="mb-3">For <InlineMath>{`|x - a| < R`}</InlineMath>: <InlineMath>{`|c_n(x-a)^n|^{1/n} = |c_n|^{1/n}|x-a| \\to L|x-a| < 1`}</InlineMath> where <InlineMath>{`L = \\limsup|c_n|^{1/n}`}</InlineMath>.</p>
            <p className="mb-3">By the root test, the series converges absolutely.</p>
            <p className="mb-3">For <InlineMath>{`|x - a| > R`}</InlineMath>: similarly, the root test shows divergence since <InlineMath>{`L|x-a| > 1`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          For every power series <InlineMath>{"\\sum c_n (x-a)^n"}</InlineMath>, there exists <InlineMath>{"R \\in [0, \\infty]"}</InlineMath>
          called the radius of convergence such that:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>The series converges absolutely for <InlineMath>{"|x - a| < R"}</InlineMath></li>
          <li>The series diverges for <InlineMath>{"|x - a| > R"}</InlineMath></li>
          <li>At <InlineMath>{"|x - a| = R"}</InlineMath>, convergence must be checked separately</li>
        </ul>
      </Theorem>

      <Theorem
        title="Cauchy-Hadamard Formula"
        proof={
          <>
            <p className="mb-3">This follows from the root test applied to <InlineMath>{`\\sum c_n(x-a)^n`}</InlineMath>.</p>
            <p className="mb-3">The series converges when:</p>
            <MathBlock>{`\\limsup|c_n(x-a)^n|^{1/n} = \\limsup|c_n|^{1/n} \\cdot |x-a| < 1`}</MathBlock>
            <p className="mb-3">This gives <InlineMath>{`|x-a| < 1/\\limsup|c_n|^{1/n} = R`}</InlineMath>.</p>
            <p className="mb-3">The formula unifies the treatment: <InlineMath>{`R = 0`}</InlineMath> means the series only converges at <InlineMath>{`x = a`}</InlineMath>; <InlineMath>{`R = \\infty`}</InlineMath> means it converges everywhere.</p>
          </>
        }
      >
        <p>The radius of convergence is given by:</p>
        <MathBlock>
          {`\\frac{1}{R} = \\limsup_{n \\to \\infty} |c_n|^{1/n}`}
        </MathBlock>
      </Theorem>

      <Example title="Common Power Series">
        <p>The exponential function has radius <InlineMath>{"R = \\infty"}</InlineMath>:</p>
        <MathBlock>
          {`e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots`}
        </MathBlock>
      </Example>

      <h3>Properties of Power Series</h3>

      <Theorem
        title="Differentiation and Integration"
        proof={
          <>
            <p className="mb-3"><strong>Radius preserved:</strong> For the derivative series <InlineMath>{`\\sum n c_n x^{n-1}`}</InlineMath>, note that <InlineMath>{`n^{1/n} \\to 1`}</InlineMath>.</p>
            <p className="mb-3">So <InlineMath>{`\\limsup|nc_n|^{1/n} = \\limsup(n^{1/n}|c_n|^{1/n}) = \\limsup|c_n|^{1/n}`}</InlineMath>. Same radius!</p>
            <p className="mb-3"><strong>Term-by-term validity:</strong> For <InlineMath>{`|x| < r < R`}</InlineMath>, the series <InlineMath>{`\\sum n c_n x^{n-1}`}</InlineMath> converges uniformly on <InlineMath>{`[-r, r]`}</InlineMath>.</p>
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
        neighborhood of a point is called analytic. Not all smooth (<InlineMath>{"C^\\infty"}</InlineMath>) functions
        are analytic!
      </Callout>

      <Example title="Non-Analytic Smooth Function">
        <p>The function <InlineMath>{"f(x) = e^{-1/x^2}"}</InlineMath> for <InlineMath>{"x \\neq 0"}</InlineMath> and <InlineMath>{"f(0) = 0"}</InlineMath>{" "}
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
