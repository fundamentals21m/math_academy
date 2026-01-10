import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section85() {
  return (
    <LessonLayout sectionId={85}>
      <h2 className="text-2xl font-semibold mb-4">Functions of Class L^2</h2>

      <p className="mb-4">
        The space <InlineMath>{'L^2(\\mu)'}</InlineMath> of square-integrable functions is a Hilbert space,
        making it the natural setting for Fourier analysis and quantum mechanics. The Riesz-Fischer
        theorem establishes its completeness.
      </p>

      <Definition title="11.39 - Inner Product on L^2">
        <p className="mb-3">
          For <InlineMath>{'f, g \\in L^2(\\mu)'}</InlineMath>, define the <em>inner product</em>
        </p>
        <MathBlock>{'\\langle f, g \\rangle = \\int_X f \\overline{g} \\, d\\mu'}</MathBlock>
        <p className="mb-3">
          The associated norm is
        </p>
        <MathBlock>{'\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\left(\\int |f|^2 \\, d\\mu\\right)^{1/2}'}</MathBlock>
      </Definition>

      <Theorem
        title="11.40 - Cauchy-Schwarz Inequality"
        proof={
          <>
            <p className="mb-3">
              For any <InlineMath>{'\\lambda \\in \\mathbb{C}'}</InlineMath>:
            </p>
            <MathBlock>{'0 \\leq \\|f + \\lambda g\\|_2^2 = \\|f\\|_2^2 + 2\\text{Re}(\\lambda \\langle f, g \\rangle) + |\\lambda|^2 \\|g\\|_2^2'}</MathBlock>
            <p className="mb-3">
              If <InlineMath>{'g \\neq 0'}</InlineMath>, choose <InlineMath>{'\\lambda = -\\langle f, g \\rangle / \\|g\\|_2^2'}</InlineMath>.
              Substituting and simplifying gives
            </p>
            <MathBlock>{'0 \\leq \\|f\\|_2^2 - \\frac{|\\langle f, g \\rangle|^2}{\\|g\\|_2^2}'}</MathBlock>
            <p>
              which rearranges to the desired inequality.
            </p>
          </>
        }
      >
        <p>
          For <InlineMath>{'f, g \\in L^2(\\mu)'}</InlineMath>:
        </p>
        <MathBlock>{'|\\langle f, g \\rangle| \\leq \\|f\\|_2 \\|g\\|_2'}</MathBlock>
      </Theorem>

      <Theorem
        title="11.41 - Triangle Inequality"
        proof={
          <>
            <p className="mb-3">
              <InlineMath>{'\\|f + g\\|_2^2 = \\|f\\|_2^2 + 2\\text{Re}\\langle f, g \\rangle + \\|g\\|_2^2'}</InlineMath>
            </p>
            <p className="mb-3">
              By Cauchy-Schwarz, <InlineMath>{'\\text{Re}\\langle f, g \\rangle \\leq |\\langle f, g \\rangle| \\leq \\|f\\|_2 \\|g\\|_2'}</InlineMath>.
            </p>
            <p>
              Hence <InlineMath>{'\\|f + g\\|_2^2 \\leq (\\|f\\|_2 + \\|g\\|_2)^2'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For <InlineMath>{'f, g \\in L^2(\\mu)'}</InlineMath>:
        </p>
        <MathBlock>{'\\|f + g\\|_2 \\leq \\|f\\|_2 + \\|g\\|_2'}</MathBlock>
      </Theorem>

      <Theorem
        title="11.42 - Riesz-Fischer Theorem"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\{f_n\\}'}</InlineMath> be Cauchy in <InlineMath>{'L^2'}</InlineMath>. Choose a subsequence
              <InlineMath>{'\\{f_{n_k}\\}'}</InlineMath> with <InlineMath>{'\\|f_{n_{k+1}} - f_{n_k}\\|_2 < 2^{-k}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Define <InlineMath>{'g_m = \\sum_{k=1}^m |f_{n_{k+1}} - f_{n_k}|'}</InlineMath>. By Minkowski's inequality,
              <InlineMath>{'\\|g_m\\|_2 \\leq 1'}</InlineMath>. Let <InlineMath>{'g = \\lim g_m'}</InlineMath>; by MCT, <InlineMath>{'g \\in L^2'}</InlineMath>.
            </p>
            <p className="mb-3">
              The series <InlineMath>{'f_{n_1} + \\sum_{k=1}^\\infty (f_{n_{k+1}} - f_{n_k})'}</InlineMath> converges
              absolutely a.e. (dominated by <InlineMath>{'|f_{n_1}| + g'}</InlineMath>). Call its limit <InlineMath>{'f'}</InlineMath>.
            </p>
            <p>
              Since <InlineMath>{'|f_{n_k} - f|^2 \\leq (|f_{n_1}| + g + |f|)^2 \\in L^1'}</InlineMath>, DCT gives
              <InlineMath>{'\\|f_{n_k} - f\\|_2 \\to 0'}</InlineMath>. Since <InlineMath>{'\\{f_n\\}'}</InlineMath> is Cauchy,
              <InlineMath>{'f_n \\to f'}</InlineMath> in <InlineMath>{'L^2'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'L^2(\\mu)'}</InlineMath> is <em>complete</em>: every Cauchy sequence converges in <InlineMath>{'L^2'}</InlineMath>-norm.
          Thus <InlineMath>{'L^2(\\mu)'}</InlineMath> is a Hilbert space.
        </p>
      </Theorem>

      <Example title="Fourier Series in L^2">
        <p className="mb-3">
          The functions <InlineMath>{'e_n(x) = e^{inx}/\\sqrt{2\\pi}'}</InlineMath> form an orthonormal system
          in <InlineMath>{'L^2([0, 2\\pi])'}</InlineMath>:
        </p>
        <MathBlock>{'\\langle e_n, e_m \\rangle = \\frac{1}{2\\pi} \\int_0^{2\\pi} e^{i(n-m)x} dx = \\delta_{nm}'}</MathBlock>
        <p>
          For <InlineMath>{'f \\in L^2'}</InlineMath>, the Fourier series <InlineMath>{'\\sum c_n e_n'}</InlineMath> converges
          to <InlineMath>{'f'}</InlineMath> in <InlineMath>{'L^2'}</InlineMath>-norm (Parseval's theorem).
        </p>
      </Example>

      <Definition title="11.43 - Orthogonal Complement">
        <p className="mb-3">
          For a subset <InlineMath>{'S \\subset L^2(\\mu)'}</InlineMath>, the <em>orthogonal complement</em> is
        </p>
        <MathBlock>{'S^\\perp = \\{g \\in L^2 : \\langle f, g \\rangle = 0 \\text{ for all } f \\in S\\}'}</MathBlock>
        <p>
          <InlineMath>{'S^\\perp'}</InlineMath> is always a closed subspace of <InlineMath>{'L^2'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Applications">
        <p>
          <InlineMath>{'L^2'}</InlineMath> spaces are the foundation of: (1) Fourier analysis and signal processing,
          (2) Quantum mechanics (wave functions live in <InlineMath>{'L^2'}</InlineMath>),
          (3) Probability (random variables with finite variance), (4) PDEs (weak solutions).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li><InlineMath>{'L^2(\\mu)'}</InlineMath> has an inner product <InlineMath>{'\\langle f, g \\rangle = \\int f \\bar{g} \\, d\\mu'}</InlineMath></li>
        <li>Cauchy-Schwarz: <InlineMath>{'|\\langle f, g \\rangle| \\leq \\|f\\|_2 \\|g\\|_2'}</InlineMath></li>
        <li>Riesz-Fischer: <InlineMath>{'L^2'}</InlineMath> is complete, hence a Hilbert space</li>
        <li>Fourier series converge in <InlineMath>{'L^2'}</InlineMath>-norm</li>
        <li>Orthogonality and projections are well-defined in <InlineMath>{'L^2'}</InlineMath></li>
        <li><InlineMath>{'L^2'}</InlineMath> is the natural setting for spectral theory and quantum mechanics</li>
      </ul>
    </LessonLayout>
  );
}
