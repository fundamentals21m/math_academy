import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section81() {
  return (
    <LessonLayout sectionId={81}>
      <h2 className="text-2xl font-semibold mb-4">Simple Functions</h2>

      <p className="mb-4">
        Simple functions are finite linear combinations of characteristic functions. They serve
        as the building blocks for the Lebesgue integral, just as step functions do for the Riemann integral.
      </p>

      <Definition title="11.22 - Characteristic Function">
        <p className="mb-3">
          For any set <InlineMath>{'E \\subset X'}</InlineMath>, the <em>characteristic function</em> (or indicator function)
          of <InlineMath>{'E'}</InlineMath> is
        </p>
        <MathBlock>{'\\chi_E(x) = \\begin{cases} 1 & \\text{if } x \\in E \\\\ 0 & \\text{if } x \\notin E \\end{cases}'}</MathBlock>
        <p>
          If <InlineMath>{'E'}</InlineMath> is measurable, then <InlineMath>{'\\chi_E'}</InlineMath> is a measurable function.
        </p>
      </Definition>

      <Definition title="11.23 - Simple Function">
        <p className="mb-3">
          A function <InlineMath>{'s: X \\to [0, \\infty)'}</InlineMath> is <em>simple</em> if it takes only finitely many values.
          Every simple function can be written as
        </p>
        <MathBlock>{'s = \\sum_{i=1}^n c_i \\chi_{E_i}'}</MathBlock>
        <p>
          where <InlineMath>{'c_1, \\ldots, c_n \\geq 0'}</InlineMath> and <InlineMath>{'E_1, \\ldots, E_n'}</InlineMath>
          are measurable sets (not necessarily disjoint).
        </p>
      </Definition>

      <Definition title="11.24 - Standard Representation">
        <p className="mb-3">
          The <em>standard representation</em> of a simple function <InlineMath>{'s'}</InlineMath> is
        </p>
        <MathBlock>{'s = \\sum_{i=1}^n a_i \\chi_{A_i}'}</MathBlock>
        <p>
          where <InlineMath>{'a_1, \\ldots, a_n'}</InlineMath> are the <em>distinct</em> nonzero values of <InlineMath>{'s'}</InlineMath>,
          and <InlineMath>{'A_i = \\{x : s(x) = a_i\\}'}</InlineMath>. The sets <InlineMath>{'A_i'}</InlineMath> are disjoint.
        </p>
      </Definition>

      <Theorem
        title="11.25 - Approximation by Simple Functions"
        proof={
          <>
            <p className="mb-3">
              For <InlineMath>{'n \\geq 1'}</InlineMath> and <InlineMath>{'i = 0, 1, \\ldots, n2^n - 1'}</InlineMath>, define
            </p>
            <MathBlock>{'E_{n,i} = \\left\\{x : \\frac{i}{2^n} \\leq f(x) < \\frac{i+1}{2^n}\\right\\}'}</MathBlock>
            <p className="mb-3">
              and <InlineMath>{'F_n = \\{x : f(x) \\geq n\\}'}</InlineMath>. Set
            </p>
            <MathBlock>{'s_n = \\sum_{i=0}^{n2^n - 1} \\frac{i}{2^n} \\chi_{E_{n,i}} + n \\chi_{F_n}'}</MathBlock>
            <p className="mb-3">
              Then <InlineMath>{'0 \\leq s_n \\leq f'}</InlineMath> and <InlineMath>{'s_n \\leq s_{n+1}'}</InlineMath>.
              If <InlineMath>{'f(x) < n'}</InlineMath>, then <InlineMath>{'0 \\leq f(x) - s_n(x) < 2^{-n}'}</InlineMath>.
            </p>
            <p>
              Hence <InlineMath>{'s_n \\to f'}</InlineMath> pointwise. If <InlineMath>{'f'}</InlineMath> is bounded,
              the convergence is uniform.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'f: X \\to [0, \\infty]'}</InlineMath> be measurable. Then there exists a sequence
          <InlineMath>{'\\{s_n\\}'}</InlineMath> of simple measurable functions such that:
        </p>
        <p className="mb-2">(a) <InlineMath>{'0 \\leq s_1 \\leq s_2 \\leq \\cdots \\leq f'}</InlineMath></p>
        <p className="mb-2">(b) <InlineMath>{'s_n(x) \\to f(x)'}</InlineMath> as <InlineMath>{'n \\to \\infty'}</InlineMath> for every <InlineMath>{'x'}</InlineMath></p>
        <p>(c) If <InlineMath>{'f'}</InlineMath> is bounded, the convergence is uniform</p>
      </Theorem>

      <Example title="Approximating a Continuous Function">
        <p className="mb-3">
          Let <InlineMath>{'f(x) = x^2'}</InlineMath> on <InlineMath>{'[0, 1]'}</InlineMath>. The simple functions
        </p>
        <MathBlock>{'s_n = \\sum_{i=0}^{n2^n - 1} \\frac{i}{2^n} \\chi_{[\\sqrt{i/2^n}, \\sqrt{(i+1)/2^n})}'}</MathBlock>
        <p>
          approximate <InlineMath>{'f'}</InlineMath> from below, converging uniformly to <InlineMath>{'f'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Why Simple Functions?">
        <p>
          The Lebesgue integral is defined first for simple functions, then extended to
          general measurable functions via approximation. This is more natural than Riemann's
          approach because simple functions are defined in terms of the measure of level sets,
          not the domain partition.
        </p>
      </Callout>

      <Definition title="11.26 - Integral of Simple Functions">
        <p className="mb-3">
          For a nonnegative simple function <InlineMath>{'s = \\sum_{i=1}^n a_i \\chi_{A_i}'}</InlineMath>
          (in standard representation) and measurable <InlineMath>{'E'}</InlineMath>, define
        </p>
        <MathBlock>{'\\int_E s \\, d\\mu = \\sum_{i=1}^n a_i \\mu(A_i \\cap E)'}</MathBlock>
        <p>
          This is well-defined and finite if <InlineMath>{'\\mu(A_i \\cap E) < \\infty'}</InlineMath> for all <InlineMath>{'i'}</InlineMath> with <InlineMath>{'a_i > 0'}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Simple functions take only finitely many values</li>
        <li>They are linear combinations of characteristic functions</li>
        <li>Every nonnegative measurable function is a pointwise limit of simple functions</li>
        <li>The approximating sequence can be chosen to be increasing</li>
        <li>Bounded functions are uniformly approximated by simple functions</li>
        <li>The integral of simple functions is a weighted sum of measures</li>
      </ul>
    </LessonLayout>
  );
}
