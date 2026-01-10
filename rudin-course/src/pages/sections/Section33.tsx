import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2 className="text-2xl font-semibold mb-4">Infinite Limits and Limits at Infinity</h2>

      <p className="mb-4">
        To complete our treatment of limits, we extend the definitions to include infinite limits
        and limits at infinity. This allows us to handle functions that grow without bound or to
        describe the behavior of functions as the argument becomes arbitrarily large.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Infinite Limits</h3>

      <Definition title="4.31 Infinite Limit at a Point">
        <p>
          Let <InlineMath>f</InlineMath> be a real function defined on{' '}
          <InlineMath>{'E \\subset \\mathbb{R}'}</InlineMath>. We say
        </p>
        <MathBlock>{'\\lim_{x \\to p} f(x) = +\\infty'}</MathBlock>
        <p>
          if for every real <InlineMath>M</InlineMath> there exists{' '}
          <InlineMath>{'\\delta > 0'}</InlineMath> such that{' '}
          <InlineMath>{'f(x) > M'}</InlineMath> for all <InlineMath>{'x \\in E'}</InlineMath> with{' '}
          <InlineMath>{'0 < |x - p| < \\delta'}</InlineMath>.
        </p>
        <p className="mt-2">
          Similarly, <InlineMath>{'\\lim_{x \\to p} f(x) = -\\infty'}</InlineMath> means that for
          every real <InlineMath>M</InlineMath> there exists{' '}
          <InlineMath>{'\\delta > 0'}</InlineMath> such that{' '}
          <InlineMath>{'f(x) < M'}</InlineMath> when{' '}
          <InlineMath>{'0 < |x - p| < \\delta'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Reciprocal Function">
        <p>
          For <InlineMath>{'f(x) = 1/x^2'}</InlineMath>, we have
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty.'}</MathBlock>
        <p className="mt-2">
          Given any <InlineMath>{'M > 0'}</InlineMath>, take{' '}
          <InlineMath>{'\\delta = 1/\\sqrt{M}'}</InlineMath>. Then{' '}
          <InlineMath>{'0 < |x| < \\delta'}</InlineMath> implies{' '}
          <InlineMath>{'1/x^2 > M'}</InlineMath>.
        </p>
      </Example>

      <Example title="One-Sided Infinite Limits">
        <p>
          For <InlineMath>{'f(x) = 1/x'}</InlineMath>,
        </p>
        <MathBlock>{'\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty, \\quad \\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty.'}</MathBlock>
        <p className="mt-2">
          Note that <InlineMath>{'\\lim_{x \\to 0} 1/x'}</InlineMath> does not exist (not even as
          an infinite limit), because the left and right limits are different.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Limits at Infinity</h3>

      <Definition title="4.32 Limit as x Approaches Infinity">
        <p>
          Let <InlineMath>f</InlineMath> be defined on <InlineMath>{'(a, +\\infty)'}</InlineMath>.
          We say
        </p>
        <MathBlock>{'\\lim_{x \\to +\\infty} f(x) = L'}</MathBlock>
        <p>
          if for every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there exists{' '}
          <InlineMath>{'M \\in \\mathbb{R}'}</InlineMath> such that{' '}
          <InlineMath>{'|f(x) - L| < \\varepsilon'}</InlineMath> whenever{' '}
          <InlineMath>{'x > M'}</InlineMath>.
        </p>
        <p className="mt-2">
          Similarly, <InlineMath>{'\\lim_{x \\to -\\infty} f(x) = L'}</InlineMath> means that
          for every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there exists{' '}
          <InlineMath>M</InlineMath> such that <InlineMath>{'|f(x) - L| < \\varepsilon'}</InlineMath>{' '}
          whenever <InlineMath>{'x < M'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Rational Functions at Infinity">
        <p>Consider</p>
        <MathBlock>{'f(x) = \\frac{2x^2 + 1}{x^2 - 3x} = \\frac{2 + 1/x^2}{1 - 3/x}.'}</MathBlock>
        <p className="mt-2">
          As <InlineMath>{'x \\to +\\infty'}</InlineMath>, both{' '}
          <InlineMath>{'1/x^2 \\to 0'}</InlineMath> and <InlineMath>{'3/x \\to 0'}</InlineMath>,
          so
        </p>
        <MathBlock>{'\\lim_{x \\to +\\infty} f(x) = \\frac{2 + 0}{1 - 0} = 2.'}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Infinite Limits at Infinity</h3>

      <Definition title="4.33 Combining Both Extensions">
        <p>
          We can combine both extensions. For instance,{' '}
          <InlineMath>{'\\lim_{x \\to +\\infty} f(x) = +\\infty'}</InlineMath> means: for every
          real <InlineMath>M</InlineMath>, there exists <InlineMath>N</InlineMath> such that{' '}
          <InlineMath>{'f(x) > M'}</InlineMath> whenever <InlineMath>{'x > N'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Polynomial Growth">
        <p>
          For any polynomial <InlineMath>{'P(x) = a_n x^n + \\cdots + a_0'}</InlineMath> with{' '}
          <InlineMath>{'a_n > 0'}</InlineMath> and <InlineMath>{'n \\geq 1'}</InlineMath>,
        </p>
        <MathBlock>{'\\lim_{x \\to +\\infty} P(x) = +\\infty.'}</MathBlock>
        <p className="mt-2">
          This is because <InlineMath>{'P(x) = x^n(a_n + a_{n-1}/x + \\cdots + a_0/x^n)'}</InlineMath>,
          and as <InlineMath>{'x \\to +\\infty'}</InlineMath>, the expression in parentheses
          approaches <InlineMath>{'a_n > 0'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">The Extended Real Line</h3>

      <Callout type="info">
        <p>
          <strong>Remark:</strong> It is sometimes convenient to adjoin{' '}
          <InlineMath>{'+\\infty'}</InlineMath> and <InlineMath>{'-\\infty'}</InlineMath> to the
          real numbers, obtaining the <em>extended real number system</em>{' '}
          <InlineMath>{'\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}'}</InlineMath>.
          The conventions are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{'-\\infty < x < +\\infty'}</InlineMath> for all{' '}
            <InlineMath>{'x \\in \\mathbb{R}'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'x + (+\\infty) = +\\infty'}</InlineMath> for{' '}
            <InlineMath>{'x \\neq -\\infty'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'x \\cdot (+\\infty) = +\\infty'}</InlineMath> if{' '}
            <InlineMath>{'x > 0'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'x / (+\\infty) = 0'}</InlineMath> for finite{' '}
            <InlineMath>x</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          Some operations like <InlineMath>{'0 \\cdot (+\\infty)'}</InlineMath> and{' '}
          <InlineMath>{'(+\\infty) - (+\\infty)'}</InlineMath> are left undefined.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Algebra of Infinite Limits</h3>

      <Theorem
        title="Operations with Infinite Limits"
        proof={
          <>
            <p>
              For the first statement: Given <InlineMath>M</InlineMath>, choose{' '}
              <InlineMath>{'\\delta_1'}</InlineMath> so that{' '}
              <InlineMath>{'f(x) > M'}</InlineMath> when{' '}
              <InlineMath>{'0 < |x - p| < \\delta_1'}</InlineMath>. Choose{' '}
              <InlineMath>{'\\delta_2'}</InlineMath> so that{' '}
              <InlineMath>{'g(x) > L/2 > 0'}</InlineMath> when{' '}
              <InlineMath>{'0 < |x - p| < \\delta_2'}</InlineMath>. Then for{' '}
              <InlineMath>{'\\delta = \\min(\\delta_1, \\delta_2)'}</InlineMath>, we have{' '}
              <InlineMath>{'f(x) + g(x) > M + L/2 > M'}</InlineMath>.
            </p>
            <p className="mt-2">
              For the third: Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, choose{' '}
              <InlineMath>\\delta</InlineMath> so that{' '}
              <InlineMath>{'f(x) > 1/\\varepsilon'}</InlineMath> when{' '}
              <InlineMath>{'0 < |x - p| < \\delta'}</InlineMath>. Then{' '}
              <InlineMath>{'1/f(x) < \\varepsilon'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'\\lim_{x \\to p} f(x) = +\\infty'}</InlineMath> and{' '}
          <InlineMath>{'\\lim_{x \\to p} g(x) = L'}</InlineMath> where{' '}
          <InlineMath>{'L > 0'}</InlineMath>. Then:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <InlineMath>{'\\lim_{x \\to p} [f(x) + g(x)] = +\\infty'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'\\lim_{x \\to p} [f(x) \\cdot g(x)] = +\\infty'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'\\lim_{x \\to p} 1/f(x) = 0'}</InlineMath>
          </li>
        </ul>
      </Theorem>

      <Example title="L'Hopital-Style Indeterminate Forms">
        <p>
          Many limits at infinity produce indeterminate forms that require careful analysis. For
          example, consider
        </p>
        <MathBlock>{'\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2 + x} - x\\right).'}</MathBlock>
        <p className="mt-2">
          This is of the form <InlineMath>{'+\\infty - (+\\infty)'}</InlineMath>, which is
          indeterminate. Rationalizing:
        </p>
        <MathBlock>{'\\sqrt{x^2 + x} - x = \\frac{x}{\\sqrt{x^2 + x} + x} = \\frac{1}{\\sqrt{1 + 1/x} + 1} \\to \\frac{1}{2}.'}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Definition 4.31: <InlineMath>{'\\lim_{x \\to p} f(x) = +\\infty'}</InlineMath> means{' '}
          <InlineMath>f</InlineMath> exceeds any bound <InlineMath>M</InlineMath> near{' '}
          <InlineMath>p</InlineMath>
        </li>
        <li>
          Definition 4.32: <InlineMath>{'\\lim_{x \\to +\\infty} f(x) = L'}</InlineMath> means{' '}
          <InlineMath>f</InlineMath> approaches <InlineMath>L</InlineMath> for large{' '}
          <InlineMath>x</InlineMath>
        </li>
        <li>
          Both extensions can be combined for limits like{' '}
          <InlineMath>{'\\lim_{x \\to +\\infty} f(x) = +\\infty'}</InlineMath>
        </li>
        <li>
          The extended real line <InlineMath>{'\\overline{\\mathbb{R}}'}</InlineMath> provides
          a convenient framework for these limits
        </li>
        <li>
          Indeterminate forms require careful algebraic manipulation
        </li>
      </ul>
    </LessonLayout>
  );
}
