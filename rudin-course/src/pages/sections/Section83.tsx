import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section83() {
  return (
    <LessonLayout sectionId={83}>
      <h2 className="text-2xl font-semibold mb-4">Comparison with the Riemann Integral</h2>

      <p className="mb-4">
        The Lebesgue integral extends the Riemann integral: every Riemann integrable function
        is Lebesgue integrable, and the two integrals agree. Moreover, the Lebesgue theory
        integrates many functions that are not Riemann integrable.
      </p>

      <Theorem
        title="11.32 - Riemann Implies Lebesgue Integrable"
        proof={
          <>
            <p className="mb-3">
              For a partition <InlineMath>{'P = \\{x_0, \\ldots, x_n\\}'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath>, define
            </p>
            <MathBlock>{'L(P, f) = \\sum_{i=1}^n m_i (x_i - x_{i-1}), \\quad U(P, f) = \\sum_{i=1}^n M_i (x_i - x_{i-1})'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'m_i = \\inf_{[x_{i-1}, x_i]} f'}</InlineMath> and <InlineMath>{'M_i = \\sup_{[x_{i-1}, x_i]} f'}</InlineMath>.
            </p>
            <p className="mb-3">
              Take partitions <InlineMath>{'P_n'}</InlineMath> with <InlineMath>{'\\|P_n\\| \\to 0'}</InlineMath>.
              The lower sums <InlineMath>{'L(P_n, f)'}</InlineMath> define simple functions <InlineMath>{'s_n \\leq f'}</InlineMath>,
              and upper sums define <InlineMath>{'t_n \\geq f'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'f'}</InlineMath> is Riemann integrable, <InlineMath>{'U(P_n, f) - L(P_n, f) \\to 0'}</InlineMath>.
              By dominated convergence (or MCT), the Lebesgue integral <InlineMath>{'\\int f \\, dm'}</InlineMath>
              equals the Riemann integral.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'f'}</InlineMath> is Riemann integrable on <InlineMath>{'[a, b]'}</InlineMath>, then
          <InlineMath>{'f'}</InlineMath> is Lebesgue integrable on <InlineMath>{'[a, b]'}</InlineMath> and
        </p>
        <MathBlock>{'\\int_a^b f(x) \\, dx = \\int_{[a,b]} f \\, dm'}</MathBlock>
      </Theorem>

      <Theorem
        title="11.33 - Riemann Integrability Criterion"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'D'}</InlineMath> be the set of discontinuities of <InlineMath>{'f'}</InlineMath>.
              For <InlineMath>{'\\epsilon > 0'}</InlineMath>, let <InlineMath>{'D_\\epsilon = \\{x : \\omega_f(x) \\geq \\epsilon\\}'}</InlineMath>,
              where <InlineMath>{'\\omega_f(x)'}</InlineMath> is the oscillation of <InlineMath>{'f'}</InlineMath> at <InlineMath>{'x'}</InlineMath>.
            </p>
            <p className="mb-3">
              <InlineMath>{'D = \\bigcup_{n=1}^\\infty D_{1/n}'}</InlineMath>. So <InlineMath>{'m(D) = 0'}</InlineMath> iff
              <InlineMath>{'m(D_{1/n}) = 0'}</InlineMath> for all <InlineMath>{'n'}</InlineMath>.
            </p>
            <p>
              One shows that <InlineMath>{'m(D_\\epsilon) = 0'}</InlineMath> iff <InlineMath>{'U(P, f) - L(P, f)'}</InlineMath>
              can be made arbitrarily small, which characterizes Riemann integrability.
            </p>
          </>
        }
      >
        <p>
          A bounded function <InlineMath>{'f: [a, b] \\to \\mathbb{R}'}</InlineMath> is Riemann integrable if and only if
          it is continuous almost everywhere (i.e., discontinuous only on a set of measure zero).
        </p>
      </Theorem>

      <Example title="Dirichlet Function">
        <p className="mb-3">
          The function <InlineMath>{'f = \\chi_\\mathbb{Q}'}</InlineMath> on <InlineMath>{'[0, 1]'}</InlineMath>
          (1 on rationals, 0 on irrationals) is discontinuous everywhere.
        </p>
        <p className="mb-3">
          It is <em>not</em> Riemann integrable, but it <em>is</em> Lebesgue integrable:
        </p>
        <MathBlock>{'\\int_{[0,1]} \\chi_\\mathbb{Q} \\, dm = m(\\mathbb{Q} \\cap [0,1]) = 0'}</MathBlock>
      </Example>

      <Example title="Cantor Function">
        <p className="mb-3">
          The Cantor function <InlineMath>{'c: [0, 1] \\to [0, 1]'}</InlineMath> is continuous and increasing.
          It is constant on each interval removed during Cantor set construction.
        </p>
        <p className="mb-3">
          <InlineMath>{'c\'(x) = 0'}</InlineMath> almost everywhere (on the complement of the Cantor set),
          yet <InlineMath>{'c(0) = 0'}</InlineMath> and <InlineMath>{'c(1) = 1'}</InlineMath>, so
        </p>
        <MathBlock>{'\\int_0^1 c\'(x) \\, dx = 0 \\neq c(1) - c(0)'}</MathBlock>
        <p>
          The Fundamental Theorem of Calculus fails for this singular function.
        </p>
      </Example>

      <Callout type="info" title="Advantages of Lebesgue Integration">
        <p>
          The Lebesgue integral handles: (1) functions with dense discontinuities,
          (2) limits of sequences without uniform convergence, (3) functions on general measure spaces.
          The convergence theorems (MCT, DCT, Fatou) have no Riemann analogs.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Every Riemann integrable function is Lebesgue integrable with the same value</li>
        <li>Riemann integrability is equivalent to continuity almost everywhere</li>
        <li>The Dirichlet function is Lebesgue integrable but not Riemann integrable</li>
        <li>The Lebesgue integral is strictly more general than the Riemann integral</li>
        <li>Convergence theorems are the main advantage of Lebesgue theory</li>
        <li>Some functions satisfy <InlineMath>{'f\' = 0'}</InlineMath> a.e. but are not constant</li>
      </ul>
    </LessonLayout>
  );
}
