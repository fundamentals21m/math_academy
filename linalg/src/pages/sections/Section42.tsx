import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      {/* Introduction */}
      <p>
        <strong>Fourier series</strong> extend linear algebra to function spaces. Functions become
        "infinite-dimensional vectors," and Fourier coefficients are coordinates in an orthonormal basis.
      </p>

      <h2>Function Spaces</h2>

      <Definition title="Inner Product of Functions" className="my-6">
        <p>
          For functions on <InlineMath>[0, 2\pi]</InlineMath>, define the inner product:
        </p>
        <MathBlock>
          {`\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx`}
        </MathBlock>
        <p className="mt-2">
          This makes functions into "vectors" with length <InlineMath>{`\\|f\\| = \\sqrt{\\\\langle f, f \\\\rangle}`}</InlineMath>.
        </p>
      </Definition>

      <h2>Orthonormal Basis</h2>

      <Theorem
        title="Fourier Basis"
        className="my-6"
        proof={
          <>
            <p><strong>Orthogonality of cosines:</strong> For <InlineMath>{`m \\neq n`}</InlineMath>:</p>
            <MathBlock>{`\\int_0^{2\\pi} \\cos(mx)\\cos(nx)\\,dx = \\frac{1}{2}\\int_0^{2\\pi} [\\cos((m-n)x) + \\cos((m+n)x)]\\,dx = 0`}</MathBlock>
            <p className="mt-2">Each integral vanishes because we integrate complete periods of cosines.</p>
            <p className="mt-2"><strong>Orthogonality of sines:</strong> Similarly, <InlineMath>{`\\int_0^{2\\pi} \\sin(mx)\\sin(nx)\\,dx = 0`}</InlineMath> for <InlineMath>{`m \\neq n`}</InlineMath>.</p>
            <p className="mt-2"><strong>Cosine-sine orthogonality:</strong> <InlineMath>{`\\int_0^{2\\pi} \\cos(mx)\\sin(nx)\\,dx = 0`}</InlineMath> for all <InlineMath>m, n</InlineMath> (odd function over symmetric interval).</p>
            <p className="mt-2"><strong>Normalization:</strong> <InlineMath>{`\\int_0^{2\\pi} \\cos^2(nx)\\,dx = \\pi`}</InlineMath> for <InlineMath>{`n \\geq 1`}</InlineMath>, hence the <InlineMath>{`1/\\sqrt{\\pi}`}</InlineMath> factors.</p>
          </>
        }
      >
        <p>
          The functions form an orthonormal basis:
        </p>
        <MathBlock>
          {`\\frac{1}{\\sqrt{2\\pi}}, \\quad \\frac{\\cos x}{\\sqrt{\\pi}}, \\quad \\frac{\\sin x}{\\sqrt{\\pi}}, \\quad \\frac{\\cos 2x}{\\sqrt{\\pi}}, \\quad \\frac{\\sin 2x}{\\sqrt{\\pi}}, \\ldots`}
        </MathBlock>
        <p className="mt-2">
          These are orthogonal: <InlineMath>{`\\int_0^{2\\\\pi} \\cos(mx)\\cos(nx)\\,dx = 0`}</InlineMath> for <InlineMath>m \neq n</InlineMath>.
        </p>
      </Theorem>

      <h2>Fourier Series</h2>

      <Definition title="Fourier Series Expansion" className="my-6">
        <p>
          Any (reasonable) function can be expanded:
        </p>
        <MathBlock>
          {`f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)`}
        </MathBlock>
        <p className="mt-2">where the <strong>Fourier coefficients</strong> are:</p>
        <MathBlock>
          {`a_n = \\frac{1}{\\pi}\\int_0^{2\\pi} f(x)\\cos(nx)\\,dx, \\quad b_n = \\frac{1}{\\pi}\\int_0^{2\\pi} f(x)\\sin(nx)\\,dx`}
        </MathBlock>
      </Definition>

      <Example title="Square Wave" className="my-6">
        <p>
          The square wave <InlineMath>f(x) = 1</InlineMath> for <InlineMath>0 &lt; x &lt; \pi</InlineMath>, <InlineMath>f(x) = -1</InlineMath> for <InlineMath>\pi &lt; x &lt; 2\pi</InlineMath>:
        </p>
        <MathBlock>
          {`f(x) = \\frac{4}{\\pi}\\left(\\sin x + \\frac{\\sin 3x}{3} + \\frac{\\sin 5x}{5} + \\cdots\\right)`}
        </MathBlock>
        <p className="mt-2">
          Only odd harmonics appear (the function is odd).
        </p>
      </Example>

      <h2>Parseval's Theorem</h2>

      <Theorem
        title="Parseval's Identity"
        className="my-6"
        proof={
          <>
            <p><strong>Expand the integral:</strong> Substitute the Fourier series for <InlineMath>f(x)</InlineMath>:</p>
            <MathBlock>{`\\int_0^{2\\pi} |f(x)|^2\\,dx = \\int_0^{2\\pi} \\left(\\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)\\right)^2 dx`}</MathBlock>
            <p className="mt-2"><strong>Orthogonality:</strong> Cross terms vanish by orthogonality. Only squared terms survive:</p>
            <MathBlock>{`= \\frac{a_0^2}{4} \\cdot 2\\pi + \\sum_{n=1}^{\\infty} (a_n^2 \\cdot \\pi + b_n^2 \\cdot \\pi)`}</MathBlock>
            <p className="mt-2">Dividing by <InlineMath>\\pi</InlineMath> gives Parseval's identity. This is exactly <InlineMath>\\|f\\|^2 = \\sum |\\langle f, e_n \\rangle|^2</InlineMath> for an orthonormal basis.</p>
          </>
        }
      >
        <p>
          Energy is preserved in the Fourier representation:
        </p>
        <MathBlock>
          {`\\frac{1}{\\pi}\\int_0^{2\\pi} |f(x)|^2\\,dx = \\frac{a_0^2}{2} + \\sum_{n=1}^{\\infty} (a_n^2 + b_n^2)`}
        </MathBlock>
        <p className="mt-2">
          This is the <strong>Pythagorean theorem</strong> for functions!
        </p>
      </Theorem>

      <h2>Best Approximation</h2>

      <Theorem
        title="Best L² Approximation"
        className="my-6"
        proof={
          <>
            <p><strong>Projection interpretation:</strong> <InlineMath>S_N</InlineMath> is the orthogonal projection of <InlineMath>f</InlineMath> onto the subspace spanned by <InlineMath>{`\\{1, \\cos x, \\sin x, \\ldots, \\cos Nx, \\sin Nx\\}`}</InlineMath>.</p>
            <p className="mt-2">For any function <InlineMath>g</InlineMath> in this subspace, write <InlineMath>{`g = S_N + (g - S_N)`}</InlineMath>:</p>
            <MathBlock>{`\\|f - g\\|^2 = \\|f - S_N + S_N - g\\|^2 = \\|f - S_N\\|^2 + \\|S_N - g\\|^2`}</MathBlock>
            <p className="mt-2">The cross term vanishes because <InlineMath>{`f - S_N`}</InlineMath> is orthogonal to the subspace (projection property).</p>
            <p className="mt-2">Since <InlineMath>{`\\|S_N - g\\|^2 \\geq 0`}</InlineMath>, we have <InlineMath>{`\\|f - g\\| \\geq \\|f - S_N\\|`}</InlineMath> with equality iff <InlineMath>{`g = S_N`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          The partial sum <InlineMath>{`S_N(x) = \\frac{a_0}{2} + \\sum_{n=1}^{N} (a_n \\cos nx + b_n \\sin nx)`}</InlineMath>
          is the <strong>best approximation</strong> to <InlineMath>f</InlineMath> using <InlineMath>N</InlineMath> harmonics:
        </p>
        <MathBlock>
          {`\\|f - S_N\\| \\leq \\|f - g\\| \\quad \\text{for any } g \\text{ with } N \\text{ terms}`}
        </MathBlock>
        <p className="mt-2">
          This is exactly like least squares projection!
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Fourier = Orthogonal Projection</p>
        <p className="text-dark-300 text-sm">
          Fourier coefficients are projections onto basis functions:<br />
          <InlineMath>{`a_n = \\frac{\\langle f, \\cos nx \\rangle}{\\langle \\cos nx, \\cos nx \\rangle}`}</InlineMath><br /><br />
          Same formula as projecting onto any orthogonal basis!
        </p>
      </div>

      <h2>Complex Form</h2>

      <Definition title="Complex Fourier Series" className="my-6">
        <p>
          Using <InlineMath>{`e^{inx} = \\cos nx + i\\sin nx`}</InlineMath>:
        </p>
        <MathBlock>
          {`f(x) = \\sum_{n=-\\infty}^{\\infty} c_n e^{inx}, \\quad c_n = \\frac{1}{2\\pi}\\int_0^{2\\pi} f(x)e^{-inx}\\,dx`}
        </MathBlock>
        <p className="mt-2">
          This connects directly to the DFT and FFT.
        </p>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Functions are vectors; inner product = <InlineMath>\int fg\,dx</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>\cos nx</InlineMath> and <InlineMath>\sin nx</InlineMath> form an orthonormal basis.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Fourier coefficients = projections onto basis functions.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Parseval: <InlineMath>\|f\|^2 = \sum(a_n^2 + b_n^2)</InlineMath> (Pythagorean theorem).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Partial sums give best approximation (least squares).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
