import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section117() {
  return (
    <LessonLayout sectionId={117}>
      <h2>Definition of the Double Integral</h2>

      <p>
        We now extend the definition of the double integral from step functions to
        general bounded functions on a rectangle.
      </p>

      <h3>Bounded Functions on a Rectangle</h3>

      <p>
        Let <InlineMath>f</InlineMath> be a function that is defined and bounded on
        a rectangle <InlineMath>Q</InlineMath>; specifically, suppose that:
      </p>
      <MathBlock>
        {`|f(x, y)| \\leq M \\quad \\text{if} \\quad (x, y) \\in Q`}
      </MathBlock>

      <p>
        Then <InlineMath>f</InlineMath> may be surrounded from above and from below
        by two constant step functions <InlineMath>s</InlineMath> and{' '}
        <InlineMath>t</InlineMath>, where <InlineMath>{'s(x, y) = -M'}</InlineMath>{' '}
        and <InlineMath>{'t(x, y) = M'}</InlineMath> for all <InlineMath>(x, y)</InlineMath>{' '}
        in <InlineMath>Q</InlineMath>.
      </p>

      <h3>Approximation by Step Functions</h3>

      <p>
        More generally, consider any two step functions <InlineMath>s</InlineMath>{' '}
        and <InlineMath>t</InlineMath>, defined on <InlineMath>Q</InlineMath>, such that:
      </p>
      <MathBlock>
        {`s(x, y) \\leq f(x, y) \\leq t(x, y) \\quad \\text{for every point} \\quad (x, y) \\in Q`}
      </MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> If there is one and only one number{' '}
        <InlineMath>I</InlineMath> such that:
        <MathBlock>
          {`\\iint_Q s \\leq I \\leq \\iint_Q t`}
        </MathBlock>
        for every pair of step functions <InlineMath>s</InlineMath> and{' '}
        <InlineMath>t</InlineMath> satisfying{' '}
        <InlineMath>{'s \\leq f \\leq t'}</InlineMath> on <InlineMath>Q</InlineMath>,
        this number <InlineMath>I</InlineMath> is called the{' '}
        <strong>double integral</strong> of <InlineMath>f</InlineMath> over{' '}
        <InlineMath>Q</InlineMath> and is denoted by:
        <MathBlock>
          {`\\iint_Q f \\quad \\text{or} \\quad \\iint_Q f(x, y) \\, dx \\, dy`}
        </MathBlock>
        When such an <InlineMath>I</InlineMath> exists, the function{' '}
        <InlineMath>f</InlineMath> is said to be <strong>integrable</strong> on{' '}
        <InlineMath>Q</InlineMath>.
      </Callout>

      <h3>Upper and Lower Integrals</h3>

      <p>
        Assume <InlineMath>f</InlineMath> is bounded on a rectangle{' '}
        <InlineMath>Q</InlineMath> and let <InlineMath>s</InlineMath> and{' '}
        <InlineMath>t</InlineMath> be step functions satisfying{' '}
        <InlineMath>{'s \\leq f \\leq t'}</InlineMath>. We say that{' '}
        <InlineMath>s</InlineMath> is <strong>below</strong> <InlineMath>f</InlineMath>,
        and <InlineMath>t</InlineMath> is <strong>above</strong> <InlineMath>f</InlineMath>.
      </p>

      <p>
        Let <InlineMath>S</InlineMath> denote the set of all numbers{' '}
        <InlineMath>{'\\iint_Q s'}</InlineMath> as <InlineMath>s</InlineMath> runs
        through all step functions below <InlineMath>f</InlineMath>, and let{' '}
        <InlineMath>T</InlineMath> be the set of all numbers{' '}
        <InlineMath>{'\\iint_Q t'}</InlineMath> as <InlineMath>t</InlineMath> runs
        through all step functions above <InlineMath>f</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definitions:</strong>
        <ul>
          <li>
            The <strong>lower integral</strong> of <InlineMath>f</InlineMath> is{' '}
            <InlineMath>{'\\underline{I}(f) = \\sup S'}</InlineMath>.
          </li>
          <li>
            The <strong>upper integral</strong> of <InlineMath>f</InlineMath> is{' '}
            <InlineMath>{'\\overline{I}(f) = \\inf T'}</InlineMath>.
          </li>
        </ul>
      </Callout>

      <Callout type="info">
        <strong>Theorem 11.4:</strong> Every function <InlineMath>f</InlineMath> which
        is bounded on a rectangle <InlineMath>Q</InlineMath> has a lower integral{' '}
        <InlineMath>{'\\underline{I}(f)'}</InlineMath> and an upper integral{' '}
        <InlineMath>{'\\overline{I}(f)'}</InlineMath> satisfying:
        <MathBlock>
          {`\\iint_Q s \\leq \\underline{I}(f) \\leq \\overline{I}(f) \\leq \\iint_Q t`}
        </MathBlock>
        for all step functions <InlineMath>s</InlineMath> and <InlineMath>t</InlineMath>{' '}
        with <InlineMath>{'s \\leq f \\leq t'}</InlineMath>. The function{' '}
        <InlineMath>f</InlineMath> is integrable on <InlineMath>Q</InlineMath> if and
        only if its upper and lower integrals are equal, in which case:
        <MathBlock>
          {`\\iint_Q f = \\underline{I}(f) = \\overline{I}(f)`}
        </MathBlock>
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The definition of the double integral parallels
        the Darboux definition of the one-dimensional integral. A bounded function is
        integrable exactly when it can be approximated arbitrarily well from above and
        below by step functions. This approach extends naturally to higher dimensions.
      </Callout>
    </LessonLayout>
  );
}
