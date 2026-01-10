import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2 className="text-2xl font-semibold mb-4">Discussion of Main Problem</h2>

      <p className="mb-4">
        In Chapter 7, we study sequences and series of functions, with particular attention to
        the question: <em>Under what conditions can limiting operations be interchanged?</em>
      </p>

      <Callout type="warning" title="The Central Problem">
        <p className="mb-3">
          Suppose <InlineMath>{'\\{f_n\\}'}</InlineMath> is a sequence of functions defined on a
          set <InlineMath>{'E'}</InlineMath>, and suppose that
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} f_n(x) = f(x) \\quad (x \\in E)'}</MathBlock>
        <p>
          This chapter is devoted to investigating how the properties of the
          functions <InlineMath>{'f_n'}</InlineMath> (continuity, differentiability, integrability)
          transfer to the limit function <InlineMath>{'f'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-4">The Main Questions</h3>

      <p className="mb-4">
        We shall be concerned with the following questions:
      </p>

      <Definition title="7.1 - Fundamental Questions">
        <p className="mb-3">
          Let <InlineMath>{'\\{f_n\\}'}</InlineMath> be a sequence of functions converging
          pointwise to a limit function <InlineMath>{'f'}</InlineMath> on a set <InlineMath>{'E'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(a) Continuity:</strong> If each <InlineMath>{'f_n'}</InlineMath> is continuous,
          is <InlineMath>{'f'}</InlineMath> continuous?
        </p>
        <p className="mb-3">
          <strong>(b) Integration:</strong> Is it true that
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b f(x) \\, dx \\, ?'}</MathBlock>
        <p className="mb-3">
          That is, can we interchange the limit and integral?
        </p>
        <p className="mb-3">
          <strong>(c) Differentiation:</strong> Is it true that
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} f_n\'(x) = f\'(x) \\, ?'}</MathBlock>
        <p>
          That is, does <InlineMath>{'\\{f_n\'\\}'}</InlineMath> converge
          to <InlineMath>{'f\''}</InlineMath>?
        </p>
      </Definition>

      <Example title="7.2 - Counterexample: Limit of Continuous Functions Need Not Be Continuous">
        <p className="mb-3">
          Define <InlineMath>{'f_n: [0, 1] \\to \\mathbb{R}'}</InlineMath> by
        </p>
        <MathBlock>{'f_n(x) = x^n'}</MathBlock>
        <p className="mb-3">
          Each <InlineMath>{'f_n'}</InlineMath> is continuous on <InlineMath>{'[0, 1]'}</InlineMath>.
          However,
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} f_n(x) = f(x) = \\begin{cases} 0 & \\text{if } 0 \\le x < 1 \\\\ 1 & \\text{if } x = 1 \\end{cases}'}</MathBlock>
        <p>
          The limit function <InlineMath>{'f'}</InlineMath> is <em>not</em> continuous
          at <InlineMath>{'x = 1'}</InlineMath>. Thus, pointwise convergence does not
          preserve continuity.
        </p>
      </Example>

      <Example title="7.3 - Counterexample: Limit and Integral May Not Commute">
        <p className="mb-3">
          Define <InlineMath>{'f_n: [0, 1] \\to \\mathbb{R}'}</InlineMath> by
        </p>
        <MathBlock>{'f_n(x) = n^2 x(1-x)^n'}</MathBlock>
        <p className="mb-3">
          For each <InlineMath>{'x \\in (0, 1]'}</InlineMath>, we
          have <InlineMath>{'\\lim_{n \\to \\infty} f_n(x) = 0'}</InlineMath>,
          since <InlineMath>{'(1-x)^n \\to 0'}</InlineMath> faster than any polynomial
          grows. Also <InlineMath>{'f_n(0) = 0'}</InlineMath> for all <InlineMath>{'n'}</InlineMath>.
          Thus <InlineMath>{'f_n \\to 0'}</InlineMath> pointwise.
        </p>
        <p className="mb-3">
          However,
        </p>
        <MathBlock>{'\\int_0^1 f_n(x) \\, dx = n^2 \\left[ \\frac{1}{n+1} - \\frac{1}{n+2} \\right] = \\frac{n^2}{(n+1)(n+2)} \\to 1'}</MathBlock>
        <p className="mb-3">
          as <InlineMath>{'n \\to \\infty'}</InlineMath>. But
        </p>
        <MathBlock>{'\\int_0^1 f(x) \\, dx = \\int_0^1 0 \\, dx = 0'}</MathBlock>
        <p>
          The limit of the integrals (<InlineMath>{'1'}</InlineMath>) does not equal the integral
          of the limit (<InlineMath>{'0'}</InlineMath>).
        </p>
      </Example>

      <Example title="7.4 - Counterexample: Derivatives May Not Converge to Derivative of Limit">
        <p className="mb-3">
          Define <InlineMath>{'f_n: \\mathbb{R} \\to \\mathbb{R}'}</InlineMath> by
        </p>
        <MathBlock>{'f_n(x) = \\frac{\\sin(nx)}{\\sqrt{n}}'}</MathBlock>
        <p className="mb-3">
          Then <InlineMath>{'|f_n(x)| \\le 1/\\sqrt{n} \\to 0'}</InlineMath>,
          so <InlineMath>{'f_n \\to 0'}</InlineMath> uniformly. The limit
          function <InlineMath>{'f(x) = 0'}</InlineMath> is differentiable
          with <InlineMath>{'f\'(x) = 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          However,
        </p>
        <MathBlock>{'f_n\'(x) = \\sqrt{n} \\cos(nx)'}</MathBlock>
        <p className="mb-3">
          At <InlineMath>{'x = 0'}</InlineMath>: <InlineMath>{'f_n\'(0) = \\sqrt{n} \\to \\infty'}</InlineMath>.
        </p>
        <p>
          The derivatives <InlineMath>{'f_n\''}</InlineMath> do not converge
          to <InlineMath>{'f\' = 0'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="The Resolution">
        <p className="mb-3">
          These counterexamples show that pointwise convergence is too weak to preserve
          the properties we care about. The key concept that resolves these difficulties
          is <strong>uniform convergence</strong>.
        </p>
        <p>
          Under uniform convergence, we will prove that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The limit of continuous functions is continuous</li>
          <li>Integration and limits can be interchanged</li>
          <li>Under suitable conditions, differentiation and limits can be interchanged</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Pointwise convergence alone does not preserve continuity, integrability, or differentiability</li>
        <li>The limit of continuous functions may be discontinuous under pointwise convergence</li>
        <li>Limits and integrals may not commute under pointwise convergence</li>
        <li>The derivatives of a convergent sequence may fail to converge to the derivative of the limit</li>
        <li>Uniform convergence will provide the conditions needed to interchange these operations</li>
      </ul>
    </LessonLayout>
  );
}
