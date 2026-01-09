import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2>Taylor and Maclaurin Series</h2>

      <p>
        One of the most powerful ideas in mathematics is representing functions
        as infinite polynomials. This allows us to compute values of transcendental
        functions, solve differential equations, and understand function behavior
        near a point. The development of these series spans from Newton through
        Taylor and Maclaurin.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> Any "well-behaved" function can be
        represented as an infinite sum of powers of <InlineMath>x</InlineMath>.
        This turns transcendental functions into something we can compute
        term by term.
      </Callout>

      <h3>Newton's Series</h3>

      <p>
        Newton discovered many infinite series through clever algebraic
        manipulation. One of his earliest and most important was the binomial
        series for fractional exponents:
      </p>

      <Theorem title="Newton's Generalized Binomial Series (1665)">
        <p>For any exponent <InlineMath>\alpha</InlineMath> (not just positive integers):</p>
        <MathBlock>
          {`(1 + x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\frac{\\alpha(\\alpha-1)(\\alpha-2)}{3!}x^3 + \\cdots`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          When <InlineMath>\alpha</InlineMath> is a positive integer, this terminates
          (giving the familiar binomial theorem). For other values, it continues forever.
        </p>
      </Theorem>

      <Example title="Computing Square Roots">
        <p>Setting <InlineMath>{`\\alpha = 1/2`}</InlineMath>:</p>
        <MathBlock>
          {`\\sqrt{1+x} = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{1}{16}x^3 - \\cdots`}
        </MathBlock>
        <p className="mt-2">
          This allows numerical calculation of square roots without the square
          root algorithm—just polynomial arithmetic!
        </p>
      </Example>

      <p>
        Newton also discovered the series for inverse sine and logarithm through
        term-by-term integration:
      </p>

      <MathBlock>
        {`\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots`}
      </MathBlock>

      <h3>Brook Taylor's General Method</h3>

      <p>
        In 1715, Brook Taylor published his <em>Methodus Incrementorum</em>,
        which contained a general formula for expressing any function as a
        power series:
      </p>

      <Definition title="Taylor Series">
        <p>
          If <InlineMath>f</InlineMath> has derivatives of all orders at{' '}
          <InlineMath>a</InlineMath>, its Taylor series centered at{' '}
          <InlineMath>a</InlineMath> is:
        </p>
        <MathBlock>
          {`f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\cdots`}
        </MathBlock>
        <p className="mt-2">Or in compact notation:</p>
        <MathBlock>
          {`f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n`}
        </MathBlock>
      </Definition>

      <Callout type="warning">
        <strong>Convergence Matters:</strong> Not every Taylor series converges to
        its function. Some converge only near <InlineMath>a</InlineMath>, some
        converge everywhere, and some (like for <InlineMath>{`e^{-1/x^2}`}</InlineMath>)
        converge to the wrong function!
      </Callout>

      <h3>Maclaurin Series</h3>

      <p>
        Colin Maclaurin, a Scottish mathematician and student of Newton,
        published his <em>Treatise of Fluxions</em> in 1742. He focused on
        the special case where <InlineMath>a = 0</InlineMath>:
      </p>

      <Definition title="Maclaurin Series">
        <p>
          A Taylor series centered at <InlineMath>a = 0</InlineMath>:
        </p>
        <MathBlock>
          {`f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\cdots`}
        </MathBlock>
      </Definition>

      <p>
        Though Maclaurin didn't claim originality—acknowledging Taylor's
        priority—the special case became associated with his name.
      </p>

      <h3>The Fundamental Series</h3>

      <p>
        Several series became the workhorses of analysis, discovered by
        Newton, Euler, and others:
      </p>

      <Example title="The Exponential Series">
        <p>Perhaps the most beautiful of all:</p>
        <MathBlock>
          {`e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This series converges for all <InlineMath>x</InlineMath>, making{' '}
          <InlineMath>e^x</InlineMath> entire (analytic everywhere).
        </p>
      </Example>

      <Example title="Trigonometric Series">
        <p>The sine and cosine series, displaying remarkable symmetry:</p>
        <MathBlock>
          {`\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots`}
        </MathBlock>
        <MathBlock>
          {`\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Sine uses only odd powers; cosine uses only even powers—reflecting
          their odd and even symmetry.
        </p>
      </Example>

      <Theorem title="The Geometric Series">
        <p>The simplest convergent series (for <InlineMath>{`|x| < 1`}</InlineMath>):</p>
        <MathBlock>
          {`\\frac{1}{1-x} = 1 + x + x^2 + x^3 + x^4 + \\cdots = \\sum_{n=0}^{\\infty} x^n`}
        </MathBlock>
        <p className="mt-2">
          This series is the mother of many others—differentiate or integrate
          it to get new series.
        </p>
      </Theorem>

      <h3>Computing with Series</h3>

      <p>
        Before calculators, Taylor series were essential for numerical
        computation. To calculate <InlineMath>e</InlineMath>, sum the series:
      </p>

      <Example title="Computing e">
        <MathBlock>
          {`e = 1 + 1 + \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{24} + \\frac{1}{120} + \\cdots \\approx 2.71828`}
        </MathBlock>
        <p className="mt-2">
          The factorial in the denominator makes this series converge rapidly—
          each term is smaller than the previous by a factor of at least{' '}
          <InlineMath>n</InlineMath>.
        </p>
      </Example>

      <Callout type="note">
        <strong>Practical Impact:</strong> Tables of logarithms and
        trigonometric values, essential for navigation and astronomy, were
        computed using these series. Even today, computers often use series
        (with clever modifications) to calculate special functions.
      </Callout>

      <h3>The Remainder Term</h3>

      <p>
        Taylor's original work included a formula for the error when
        truncating the series after <InlineMath>n</InlineMath> terms:
      </p>

      <Theorem title="Taylor's Theorem with Remainder">
        <MathBlock>
          {`f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)`}
        </MathBlock>
        <p className="mt-2">
          where the remainder <InlineMath>R_n(x)</InlineMath> can be expressed as:
        </p>
        <MathBlock>
          {`R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          for some <InlineMath>c</InlineMath> between <InlineMath>a</InlineMath>{' '}
          and <InlineMath>x</InlineMath> (Lagrange form of the remainder).
        </p>
      </Theorem>

      <p>
        This remainder formula was crucial for rigorously establishing when
        series converge to their functions, becoming a key tool in
        19th-century analysis.
      </p>

      <h3>Historical Significance</h3>

      <p>
        Taylor series represent a profound shift in how mathematicians think
        about functions:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Local information determines global behavior:</strong> The
          derivatives at one point determine the function everywhere (within
          the radius of convergence).
        </li>
        <li>
          <strong>Transcendental becomes algebraic:</strong> Complex functions
          reduce to polynomial arithmetic.
        </li>
        <li>
          <strong>Foundation for complex analysis:</strong> The theory of
          analytic functions rests on Taylor series in the complex plane.
        </li>
      </ul>

      <SectionQuiz sectionId={37} questions={quizMap[37] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
