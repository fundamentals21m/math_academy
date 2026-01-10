import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2 className="text-2xl font-semibold mb-4">Fourier Series</h2>

      <p className="mb-4">
        We introduce Fourier series, which represent periodic functions as infinite
        sums of sines and cosines. This is one of the most important tools in analysis,
        with applications throughout mathematics, physics, and engineering.
      </p>

      <Definition title="8.19 - Fourier Coefficients">
        <p className="mb-3">
          Let <InlineMath>{'f'}</InlineMath> be a <InlineMath>{'2\\pi'}</InlineMath>-periodic function
          that is integrable on <InlineMath>{'[-\\pi, \\pi]'}</InlineMath>.
          The <em>Fourier coefficients</em> of <InlineMath>{'f'}</InlineMath> are defined by
        </p>
        <MathBlock>{'c_n = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} f(x) e^{-inx} \\, dx \\quad (n = 0, \\pm 1, \\pm 2, \\ldots)'}</MathBlock>
        <p>
          The <em>Fourier series</em> of <InlineMath>{'f'}</InlineMath> is the formal series
        </p>
        <MathBlock>{'\\sum_{n=-\\infty}^{\\infty} c_n e^{inx}'}</MathBlock>
      </Definition>

      <Definition title="Real Form of Fourier Series">
        <p className="mb-3">
          Using <InlineMath>{'e^{inx} = \\cos(nx) + i\\sin(nx)'}</InlineMath>, the Fourier series
          can be written:
        </p>
        <MathBlock>{'\\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos(nx) + b_n \\sin(nx))'}</MathBlock>
        <p>
          where
        </p>
        <MathBlock>{'a_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(x) \\cos(nx) \\, dx, \\quad b_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(x) \\sin(nx) \\, dx'}</MathBlock>
      </Definition>

      <Callout type="info" title="Orthogonality">
        <p className="mb-3">
          The exponentials <InlineMath>{'\\{e^{inx}\\}_{n \\in \\mathbb{Z}}'}</InlineMath> form an
          orthogonal system on <InlineMath>{'[-\\pi, \\pi]'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_{-\\pi}^{\\pi} e^{imx} \\overline{e^{inx}} \\, dx = \\int_{-\\pi}^{\\pi} e^{i(m-n)x} \\, dx = \\begin{cases} 2\\pi & \\text{if } m = n \\\\ 0 & \\text{if } m \\neq n \\end{cases}'}</MathBlock>
        <p>
          This orthogonality is what determines the Fourier coefficients.
        </p>
      </Callout>

      <Example title="8.20 - Fourier Series of a Square Wave">
        <p className="mb-3">
          Let <InlineMath>{'f(x) = \\text{sgn}(x)'}</InlineMath> for <InlineMath>{'x \\in (-\\pi, \\pi)'}</InlineMath>,
          extended <InlineMath>{'2\\pi'}</InlineMath>-periodically.
        </p>
        <p className="mb-3">
          Since <InlineMath>{'f'}</InlineMath> is odd, <InlineMath>{'a_n = 0'}</InlineMath> for all <InlineMath>{'n'}</InlineMath>. For <InlineMath>{'b_n'}</InlineMath>:
        </p>
        <MathBlock>{'b_n = \\frac{2}{\\pi} \\int_0^{\\pi} \\sin(nx) \\, dx = \\frac{2}{\\pi} \\cdot \\frac{1 - \\cos(n\\pi)}{n} = \\begin{cases} \\frac{4}{n\\pi} & n \\text{ odd} \\\\ 0 & n \\text{ even} \\end{cases}'}</MathBlock>
        <p className="mb-3">
          The Fourier series is:
        </p>
        <MathBlock>{'\\frac{4}{\\pi} \\left( \\sin x + \\frac{\\sin 3x}{3} + \\frac{\\sin 5x}{5} + \\cdots \\right) = \\frac{4}{\\pi} \\sum_{n=0}^{\\infty} \\frac{\\sin((2n+1)x)}{2n+1}'}</MathBlock>
      </Example>

      <Theorem
        title="8.21 - Bessel's Inequality"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'s_N(x) = \\sum_{n=-N}^{N} c_n e^{inx}'}</InlineMath>. Since the exponentials
              are orthogonal:
            </p>
            <MathBlock>{'\\int_{-\\pi}^{\\pi} |f - s_N|^2 \\, dx = \\int_{-\\pi}^{\\pi} |f|^2 \\, dx - 2\\pi \\sum_{n=-N}^{N} |c_n|^2'}</MathBlock>
            <p>
              Since the left side is <InlineMath>{'\\geq 0'}</InlineMath>, we get the inequality.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f'}</InlineMath> is square-integrable on <InlineMath>{'[-\\pi, \\pi]'}</InlineMath>, then
        </p>
        <MathBlock>{'\\sum_{n=-\\infty}^{\\infty} |c_n|^2 \\leq \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} |f(x)|^2 \\, dx'}</MathBlock>
        <p>
          In particular, <InlineMath>{'c_n \\to 0'}</InlineMath> as <InlineMath>{'|n| \\to \\infty'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="8.22 - Parseval's Theorem"
        proof={
          <p>
            The proof shows that <InlineMath>{'\\|f - s_N\\|_2 \\to 0'}</InlineMath> as <InlineMath>{'N \\to \\infty'}</InlineMath>.
            This requires showing that trigonometric polynomials are dense
            in <InlineMath>{'L^2[-\\pi, \\pi]'}</InlineMath>, which follows from the Stone-Weierstrass
            theorem for continuous functions and a density argument.
          </p>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f'}</InlineMath> is square-integrable on <InlineMath>{'[-\\pi, \\pi]'}</InlineMath>,
          then Bessel's inequality becomes an equality:
        </p>
        <MathBlock>{'\\sum_{n=-\\infty}^{\\infty} |c_n|^2 = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} |f(x)|^2 \\, dx'}</MathBlock>
        <p>
          This is <em>Parseval's theorem</em>.
        </p>
      </Theorem>

      <Example title="Application of Parseval's Theorem">
        <p className="mb-3">
          For the function <InlineMath>{'f(x) = x'}</InlineMath> on <InlineMath>{'(-\\pi, \\pi)'}</InlineMath>,
          the Fourier coefficients are <InlineMath>{'c_n = i(-1)^{n+1}/n'}</InlineMath> for <InlineMath>{'n \\neq 0'}</InlineMath> and <InlineMath>{'c_0 = 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          By Parseval:
        </p>
        <MathBlock>{'\\sum_{n \\neq 0} \\frac{1}{n^2} = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} x^2 \\, dx = \\frac{\\pi^2}{3}'}</MathBlock>
        <p className="mb-3">
          Since <InlineMath>{'\\sum_{n \\neq 0} \\frac{1}{n^2} = 2 \\sum_{n=1}^{\\infty} \\frac{1}{n^2}'}</InlineMath>:
        </p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}'}</MathBlock>
      </Example>

      <Callout type="note" title="Pointwise Convergence">
        <p className="mb-3">
          Parseval's theorem gives <InlineMath>{'L^2'}</InlineMath>-convergence of Fourier series.
          Pointwise convergence is more delicate.
        </p>
        <p>
          For continuous, piecewise smooth functions, the Fourier series converges
          pointwise to <InlineMath>{'f(x)'}</InlineMath> where <InlineMath>{'f'}</InlineMath> is continuous,
          and to <InlineMath>{'(f(x^+) + f(x^-))/2'}</InlineMath> at jumps.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Fourier coefficients: <InlineMath>{'c_n = \\frac{1}{2\\pi} \\int f(x) e^{-inx} dx'}</InlineMath></li>
        <li>The exponentials <InlineMath>{'e^{inx}'}</InlineMath> form an orthogonal system</li>
        <li>Bessel's inequality: <InlineMath>{'\\sum |c_n|^2 \\leq \\|f\\|_2^2 / 2\\pi'}</InlineMath></li>
        <li>Parseval's theorem: equality holds in Bessel's inequality</li>
        <li>Fourier series converge in <InlineMath>{'L^2'}</InlineMath> for square-integrable functions</li>
        <li>Application: <InlineMath>{'\\sum 1/n^2 = \\pi^2/6'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
