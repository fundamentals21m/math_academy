import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section84() {
  return (
    <LessonLayout sectionId={84}>
      <h2 className="text-2xl font-semibold mb-4">Integration of Complex Functions</h2>

      <p className="mb-4">
        The Lebesgue integral extends naturally to complex-valued functions by integrating
        real and imaginary parts separately. This leads to the space of integrable functions
        forming a vector space over <InlineMath>{'\\mathbb{C}'}</InlineMath>.
      </p>

      <Definition title="11.34 - Complex-Valued Measurable Functions">
        <p className="mb-3">
          A function <InlineMath>{'f: X \\to \\mathbb{C}'}</InlineMath> is <em>measurable</em> if
          <InlineMath>{'\\text{Re}(f)'}</InlineMath> and <InlineMath>{'\\text{Im}(f)'}</InlineMath> are both measurable.
        </p>
        <p>
          Equivalently, <InlineMath>{'f^{-1}(U)'}</InlineMath> is measurable for every open <InlineMath>{'U \\subset \\mathbb{C}'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="11.35 - Complex Lebesgue Integral">
        <p className="mb-3">
          For a complex-valued measurable function <InlineMath>{'f = u + iv'}</InlineMath> (where <InlineMath>{'u, v'}</InlineMath> are real), define
        </p>
        <MathBlock>{'\\int_E f \\, d\\mu = \\int_E u \\, d\\mu + i \\int_E v \\, d\\mu'}</MathBlock>
        <p className="mb-3">
          provided both integrals on the right exist. We say <InlineMath>{'f'}</InlineMath> is <em>integrable</em>
          (written <InlineMath>{'f \\in L^1(\\mu)'}</InlineMath>) if
        </p>
        <MathBlock>{'\\int_E |f| \\, d\\mu < \\infty'}</MathBlock>
      </Definition>

      <Theorem
        title="11.36 - Properties of Complex Integration"
        proof={
          <>
            <p className="mb-3">
              For linearity, write <InlineMath>{'f = u + iv'}</InlineMath> and <InlineMath>{'g = s + it'}</InlineMath>.
              Then <InlineMath>{'f + g = (u + s) + i(v + t)'}</InlineMath>, and linearity follows from
              the real case.
            </p>
            <p className="mb-3">
              For the triangle inequality: if <InlineMath>{'\\int f = 0'}</InlineMath>, it holds trivially.
              Otherwise, write <InlineMath>{'\\int f = re^{i\\theta}'}</InlineMath> with <InlineMath>{'r > 0'}</InlineMath>. Then
            </p>
            <MathBlock>{'\\left|\\int f \\, d\\mu\\right| = e^{-i\\theta} \\int f \\, d\\mu = \\int e^{-i\\theta} f \\, d\\mu = \\int \\text{Re}(e^{-i\\theta} f) \\, d\\mu'}</MathBlock>
            <p>
              Since <InlineMath>{'\\text{Re}(e^{-i\\theta} f) \\leq |f|'}</InlineMath>, we get <InlineMath>{'|\\int f| \\leq \\int |f|'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          For <InlineMath>{'f, g \\in L^1(\\mu)'}</InlineMath> and <InlineMath>{'\\alpha \\in \\mathbb{C}'}</InlineMath>:
        </p>
        <p className="mb-2">(a) <InlineMath>{'\\int (\\alpha f + g) = \\alpha \\int f + \\int g'}</InlineMath> (linearity)</p>
        <p>(b) <InlineMath>{'\\left|\\int f \\, d\\mu\\right| \\leq \\int |f| \\, d\\mu'}</InlineMath> (triangle inequality)</p>
      </Theorem>

      <Example title="Fourier Coefficients">
        <p className="mb-3">
          For <InlineMath>{'f \\in L^1([0, 2\\pi])'}</InlineMath>, the <em>Fourier coefficients</em> are
        </p>
        <MathBlock>{'c_n = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(x) e^{-inx} \\, dx'}</MathBlock>
        <p>
          These are well-defined complex integrals. The triangle inequality gives
          <InlineMath>{'|c_n| \\leq \\frac{1}{2\\pi} \\int |f| \\, dx = \\frac{\\|f\\|_1}{2\\pi}'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="11.37 - Dominated Convergence for Complex Functions"
        proof={
          <>
            <p>
              Apply DCT separately to <InlineMath>{'\\text{Re}(f_n)'}</InlineMath> and <InlineMath>{'\\text{Im}(f_n)'}</InlineMath>.
              Both are dominated by <InlineMath>{'g'}</InlineMath> since
              <InlineMath>{'|\\text{Re}(f_n)|, |\\text{Im}(f_n)| \\leq |f_n| \\leq g'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'g \\in L^1(\\mu)'}</InlineMath>, <InlineMath>{'g \\geq 0'}</InlineMath>, and <InlineMath>{'\\{f_n\\}'}</InlineMath>
          are complex measurable with <InlineMath>{'|f_n| \\leq g'}</InlineMath> and <InlineMath>{'f_n \\to f'}</InlineMath> pointwise, then
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} \\int f_n \\, d\\mu = \\int f \\, d\\mu'}</MathBlock>
      </Theorem>

      <Definition title="11.38 - L^p Spaces">
        <p className="mb-3">
          For <InlineMath>{'1 \\leq p < \\infty'}</InlineMath>, define
        </p>
        <MathBlock>{'L^p(\\mu) = \\left\\{f : \\int |f|^p \\, d\\mu < \\infty\\right\\}'}</MathBlock>
        <p className="mb-3">
          with norm
        </p>
        <MathBlock>{'\\|f\\|_p = \\left(\\int |f|^p \\, d\\mu\\right)^{1/p}'}</MathBlock>
        <p>
          Functions are identified if they differ only on a set of measure zero.
        </p>
      </Definition>

      <Callout type="info" title="Complex Analysis Connection">
        <p>
          Complex Lebesgue integration is essential for harmonic analysis, Fourier analysis,
          and functional analysis. The spaces <InlineMath>{'L^p(\\mu)'}</InlineMath> are complex Banach spaces,
          and <InlineMath>{'L^2(\\mu)'}</InlineMath> is a Hilbert space.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Complex functions are integrable if their modulus is integrable</li>
        <li>The complex integral is linear over <InlineMath>{'\\mathbb{C}'}</InlineMath></li>
        <li>Triangle inequality: <InlineMath>{'|\\int f| \\leq \\int |f|'}</InlineMath></li>
        <li>Convergence theorems extend to complex functions</li>
        <li><InlineMath>{'L^p'}</InlineMath> spaces are defined using the <InlineMath>{'p'}</InlineMath>-th power of modulus</li>
        <li>Fourier coefficients are examples of complex Lebesgue integrals</li>
      </ul>
    </LessonLayout>
  );
}
