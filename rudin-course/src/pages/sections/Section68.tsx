import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h2 className="text-2xl font-semibold mb-4">Integration</h2>

      <p className="mb-4">
        This section begins Chapter 10 on differential forms. We start by developing
        integration over rectangles in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, extending the one-dimensional
        Riemann integral. The key result is Fubini's theorem, which allows us to compute
        multiple integrals as iterated integrals.
      </p>

      <Definition title="10.1 - Rectangles and Partitions">
        <p className="mb-3">
          A <em>closed rectangle</em> (or <em>closed interval</em>) in <InlineMath>{'\\mathbb{R}^n'}</InlineMath> is a set of the form
        </p>
        <MathBlock>{'I = [a_1, b_1] \\times [a_2, b_2] \\times \\cdots \\times [a_n, b_n]'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'a_i \\leq b_i'}</InlineMath> for each <InlineMath>{'i'}</InlineMath>.
          The <em>volume</em> of <InlineMath>{'I'}</InlineMath> is
        </p>
        <MathBlock>{'|I| = \\prod_{i=1}^n (b_i - a_i)'}</MathBlock>
        <p className="mb-3">
          A <em>partition</em> <InlineMath>{'P'}</InlineMath> of <InlineMath>{'I'}</InlineMath> consists of partitions <InlineMath>{'P_i'}</InlineMath> of each
          interval <InlineMath>{'[a_i, b_i]'}</InlineMath>. This divides <InlineMath>{'I'}</InlineMath> into a finite collection of subrectangles.
        </p>
      </Definition>

      <Definition title="10.2 - Riemann Sum">
        <p className="mb-3">
          Let <InlineMath>{'f: I \\to \\mathbb{R}'}</InlineMath> be bounded. For a partition <InlineMath>{'P'}</InlineMath> of <InlineMath>{'I'}</InlineMath>
          into subrectangles <InlineMath>{'I_1, \\ldots, I_N'}</InlineMath>, a <em>Riemann sum</em> is
        </p>
        <MathBlock>{'S(P, f) = \\sum_{j=1}^N f(\\mathbf{t}_j) |I_j|'}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{'\\mathbf{t}_j \\in I_j'}</InlineMath> is an arbitrary sample point in each subrectangle.
        </p>
      </Definition>

      <Definition title="10.3 - Upper and Lower Sums">
        <p className="mb-3">
          For a partition <InlineMath>{'P'}</InlineMath> with subrectangles <InlineMath>{'I_j'}</InlineMath>, define:
        </p>
        <MathBlock>{'M_j = \\sup_{\\mathbf{x} \\in I_j} f(\\mathbf{x}), \\quad m_j = \\inf_{\\mathbf{x} \\in I_j} f(\\mathbf{x})'}</MathBlock>
        <p className="mb-3">
          The <em>upper sum</em> and <em>lower sum</em> are
        </p>
        <MathBlock>{'U(P, f) = \\sum_j M_j |I_j|, \\quad L(P, f) = \\sum_j m_j |I_j|'}</MathBlock>
        <p className="mt-3">
          Always <InlineMath>{'L(P, f) \\leq S(P, f) \\leq U(P, f)'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="10.4 - Riemann Integrability">
        <p className="mb-3">
          A bounded function <InlineMath>{'f: I \\to \\mathbb{R}'}</InlineMath> is <em>Riemann integrable</em> over <InlineMath>{'I'}</InlineMath>
          if for every <InlineMath>{'\\epsilon > 0'}</InlineMath>, there exists a partition <InlineMath>{'P'}</InlineMath> such that
        </p>
        <MathBlock>{'U(P, f) - L(P, f) < \\epsilon'}</MathBlock>
        <p className="mb-3">
          In this case, the <em>Riemann integral</em> is the unique number <InlineMath>{'\\int_I f'}</InlineMath> satisfying
        </p>
        <MathBlock>{'L(P, f) \\leq \\int_I f \\leq U(P, f)'}</MathBlock>
        <p className="mt-3">
          for all partitions <InlineMath>{'P'}</InlineMath>. We also write <InlineMath>{'\\int_I f(\\mathbf{x}) \\, d\\mathbf{x}'}</InlineMath>
          or <InlineMath>{'\\int \\cdots \\int_I f(x_1, \\ldots, x_n) \\, dx_1 \\cdots dx_n'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="10.5 - Continuous Functions are Integrable"
        proof={
          <>
            <p className="mb-3">
              Since <InlineMath>{'I'}</InlineMath> is compact and <InlineMath>{'f'}</InlineMath> is continuous, <InlineMath>{'f'}</InlineMath> is uniformly continuous.
              Given <InlineMath>{'\\epsilon > 0'}</InlineMath>, choose <InlineMath>{'\\delta > 0'}</InlineMath> such that
              <InlineMath>{'|f(\\mathbf{x}) - f(\\mathbf{y})| < \\epsilon / |I|'}</InlineMath> whenever <InlineMath>{'|\\mathbf{x} - \\mathbf{y}| < \\delta'}</InlineMath>.
            </p>
            <p className="mb-3">
              Take a partition <InlineMath>{'P'}</InlineMath> with subrectangles of diameter <InlineMath>{'< \\delta'}</InlineMath>. Then
              <InlineMath>{'M_j - m_j < \\epsilon / |I|'}</InlineMath> for each subrectangle <InlineMath>{'I_j'}</InlineMath>.
            </p>
            <MathBlock>{'U(P, f) - L(P, f) = \\sum_j (M_j - m_j)|I_j| < \\frac{\\epsilon}{|I|} \\sum_j |I_j| = \\epsilon'}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{'f: I \\to \\mathbb{R}'}</InlineMath> is continuous on the closed rectangle <InlineMath>{'I'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> is Riemann integrable over <InlineMath>{'I'}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="10.6 - Iterated Integrals">
        <p className="mb-3">
          For a rectangle <InlineMath>{'I = [a_1, b_1] \\times [a_2, b_2]'}</InlineMath> in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>
          and a function <InlineMath>{'f: I \\to \\mathbb{R}'}</InlineMath>, the <em>iterated integrals</em> are
        </p>
        <MathBlock>{'\\int_{a_1}^{b_1} \\left( \\int_{a_2}^{b_2} f(x, y) \\, dy \\right) dx'}</MathBlock>
        <MathBlock>{'\\int_{a_2}^{b_2} \\left( \\int_{a_1}^{b_1} f(x, y) \\, dx \\right) dy'}</MathBlock>
        <p className="mt-3">
          These are computed by integrating first with respect to one variable (treating the other as constant),
          then integrating the result with respect to the remaining variable.
        </p>
      </Definition>

      <Theorem
        title="10.7 - Fubini's Theorem"
        proof={
          <>
            <p className="mb-3">
              We sketch the proof for continuous <InlineMath>{'f'}</InlineMath>.
              Define <InlineMath>{'\\varphi(x) = \\int_{a_2}^{b_2} f(x, y) \\, dy'}</InlineMath>.
              This is well-defined and continuous in <InlineMath>{'x'}</InlineMath>.
            </p>
            <p className="mb-3">
              For a partition <InlineMath>{'P'}</InlineMath> of <InlineMath>{'I'}</InlineMath> into small subrectangles, the Riemann sums satisfy:
            </p>
            <MathBlock>{'S(P, f) = \\sum_{i,j} f(\\xi_i, \\eta_j) \\Delta x_i \\Delta y_j'}</MathBlock>
            <p className="mb-3">
              For fixed <InlineMath>{'\\xi_i'}</InlineMath>, the inner sum <InlineMath>{'\\sum_j f(\\xi_i, \\eta_j) \\Delta y_j'}</InlineMath>
              approximates <InlineMath>{'\\varphi(\\xi_i)'}</InlineMath>.
            </p>
            <p className="mb-3">
              The outer sum <InlineMath>{'\\sum_i \\varphi(\\xi_i) \\Delta x_i'}</InlineMath> approximates <InlineMath>{'\\int_{a_1}^{b_1} \\varphi(x) \\, dx'}</InlineMath>.
            </p>
            <p>
              Making this rigorous shows that as the partition is refined, both limits equal <InlineMath>{'\\int_I f'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'I = I_1 \\times I_2'}</InlineMath> be a rectangle in <InlineMath>{'\\mathbb{R}^{n+m}'}</InlineMath>,
          where <InlineMath>{'I_1 \\subset \\mathbb{R}^n'}</InlineMath> and <InlineMath>{'I_2 \\subset \\mathbb{R}^m'}</InlineMath>.
          If <InlineMath>{'f: I \\to \\mathbb{R}'}</InlineMath> is continuous, then
        </p>
        <MathBlock>{'\\int_I f = \\int_{I_1} \\left( \\int_{I_2} f(\\mathbf{x}, \\mathbf{y}) \\, d\\mathbf{y} \\right) d\\mathbf{x} = \\int_{I_2} \\left( \\int_{I_1} f(\\mathbf{x}, \\mathbf{y}) \\, d\\mathbf{x} \\right) d\\mathbf{y}'}</MathBlock>
        <p className="mt-3">
          In particular, the order of integration can be interchanged.
        </p>
      </Theorem>

      <Example title="10.8 - Computing a Double Integral">
        <p className="mb-3">
          Compute <InlineMath>{'\\int_I xy^2 \\, dA'}</InlineMath> where <InlineMath>{'I = [0, 1] \\times [0, 2]'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>Method 1:</strong> Integrate <InlineMath>{'y'}</InlineMath> first:
        </p>
        <MathBlock>{'\\int_0^1 \\left( \\int_0^2 xy^2 \\, dy \\right) dx = \\int_0^1 x \\left[ \\frac{y^3}{3} \\right]_0^2 dx = \\int_0^1 \\frac{8x}{3} \\, dx = \\frac{8}{3} \\left[ \\frac{x^2}{2} \\right]_0^1 = \\frac{4}{3}'}</MathBlock>
        <p className="mb-3">
          <strong>Method 2:</strong> Integrate <InlineMath>{'x'}</InlineMath> first:
        </p>
        <MathBlock>{'\\int_0^2 \\left( \\int_0^1 xy^2 \\, dx \\right) dy = \\int_0^2 y^2 \\left[ \\frac{x^2}{2} \\right]_0^1 dy = \\int_0^2 \\frac{y^2}{2} \\, dy = \\frac{1}{2} \\left[ \\frac{y^3}{3} \\right]_0^2 = \\frac{4}{3}'}</MathBlock>
        <p>
          Both methods give the same answer, as guaranteed by Fubini's theorem.
        </p>
      </Example>

      <Callout type="warning" title="When Fubini Fails">
        <p className="mb-3">
          Fubini's theorem requires integrability. Without it, iterated integrals may differ.
        </p>
        <p className="mb-3">
          Consider <InlineMath>{'f(x, y) = \\frac{x^2 - y^2}{(x^2 + y^2)^2}'}</InlineMath> on <InlineMath>{'(0, 1] \\times (0, 1]'}</InlineMath>.
        </p>
        <MathBlock>{'\\int_0^1 \\left( \\int_0^1 f(x, y) \\, dy \\right) dx = \\frac{\\pi}{4}'}</MathBlock>
        <MathBlock>{'\\int_0^1 \\left( \\int_0^1 f(x, y) \\, dx \\right) dy = -\\frac{\\pi}{4}'}</MathBlock>
        <p>
          The two iterated integrals are different because <InlineMath>{'f'}</InlineMath> is not absolutely integrable over the region.
        </p>
      </Callout>

      <Definition title="10.9 - Integration over More General Sets">
        <p className="mb-3">
          If <InlineMath>{'E \\subset I'}</InlineMath> is a bounded set contained in a rectangle <InlineMath>{'I'}</InlineMath>, we define
        </p>
        <MathBlock>{'\\int_E f = \\int_I f \\cdot \\chi_E'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'\\chi_E'}</InlineMath> is the characteristic function of <InlineMath>{'E'}</InlineMath>:
        </p>
        <MathBlock>{'\\chi_E(\\mathbf{x}) = \\begin{cases} 1 & \\mathbf{x} \\in E \\\\ 0 & \\mathbf{x} \\notin E \\end{cases}'}</MathBlock>
        <p className="mt-3">
          This is well-defined (independent of the choice of <InlineMath>{'I'}</InlineMath>) when <InlineMath>{'f \\cdot \\chi_E'}</InlineMath> is integrable.
        </p>
      </Definition>

      <Theorem
        title="10.10 - Properties of the Integral"
        proof={
          <p>These follow from the definition and properties of upper and lower sums.</p>
        }
      >
        <p className="mb-3">
          For integrable functions <InlineMath>{'f, g: I \\to \\mathbb{R}'}</InlineMath>:
        </p>
        <ul className="list-none space-y-2">
          <li>(a) <em>Linearity:</em> <InlineMath>{'\\int_I (af + bg) = a\\int_I f + b\\int_I g'}</InlineMath></li>
          <li>(b) <em>Monotonicity:</em> If <InlineMath>{'f \\leq g'}</InlineMath> on <InlineMath>{'I'}</InlineMath>, then <InlineMath>{'\\int_I f \\leq \\int_I g'}</InlineMath></li>
          <li>(c) <em>Triangle inequality:</em> <InlineMath>{'\\left|\\int_I f\\right| \\leq \\int_I |f|'}</InlineMath></li>
          <li>(d) <em>Additivity:</em> If <InlineMath>{'I = I_1 \\cup I_2'}</InlineMath> with disjoint interiors, then <InlineMath>{'\\int_I f = \\int_{I_1} f + \\int_{I_2} f'}</InlineMath></li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Multiple integrals are defined via Riemann sums over rectangles in <InlineMath>{'\\mathbb{R}^n'}</InlineMath></li>
        <li>Continuous functions on closed rectangles are Riemann integrable</li>
        <li>Fubini's theorem: <InlineMath>{'\\int_I f = \\int\\cdots\\int f \\, dx_1 \\cdots dx_n'}</InlineMath> (iterated integrals)</li>
        <li>The order of integration can be interchanged for integrable functions</li>
        <li>Without integrability, iterated integrals may give different values</li>
        <li>Integration over general sets uses characteristic functions</li>
      </ul>
    </LessonLayout>
  );
}
