import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section169() {
  return (
    <LessonLayout sectionId={169}>
      <h2>Cauchy's Distribution</h2>

      <p>
        The <strong>Cauchy distribution</strong> is a continuous distribution
        with heavy tails. It arises naturally in problems involving ratios and
        angles.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> A random variable <InlineMath>X</InlineMath>{' '}
        has a <strong>Cauchy distribution</strong> if its distribution function
        is:
        <MathBlock>
          {`F(t) = \\frac{1}{2} + \\frac{1}{\\pi}\\arctan t`}
        </MathBlock>
        The corresponding density function is:
        <MathBlock>
          {`f(t) = \\frac{1}{\\pi(1 + t^2)}`}
        </MathBlock>
      </Callout>

      <h3>Verification</h3>

      <p>
        We can verify that <InlineMath>f</InlineMath> integrates to 1:
      </p>
      <MathBlock>
        {`\\int_{-\\infty}^{\\infty} \\frac{1}{\\pi(1 + t^2)}\\,dt = \\frac{1}{\\pi}\\arctan t\\Big|_{-\\infty}^{\\infty} = \\frac{1}{\\pi}\\left(\\frac{\\pi}{2} - \\left(-\\frac{\\pi}{2}\\right)\\right) = 1`}
      </MathBlock>

      <h3>Physical Origin: The Spinning Pointer</h3>

      <p>
        Consider a pointer pivoted at the point <InlineMath>(-1, 0)</InlineMath>{' '}
        on the x-axis. When spun and allowed to rest, it makes an angle{' '}
        <InlineMath>{'\\theta'}</InlineMath> with the x-axis, where{' '}
        <InlineMath>{'-\\pi/2 < \\theta \\leq \\pi/2'}</InlineMath>.
      </p>

      <p>
        Let <InlineMath>Y</InlineMath> be the y-intercept of the line through
        the pointer. Then <InlineMath>{'Y = \\tan\\theta'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> If the angle <InlineMath>{'\\theta'}</InlineMath>{' '}
        has a uniform distribution on{' '}
        <InlineMath>{'[-\\pi/2, \\pi/2]'}</InlineMath>, then{' '}
        <InlineMath>{'Y = \\tan\\theta'}</InlineMath> has a Cauchy distribution.
      </Callout>

      <p>
        <strong>Proof:</strong> For <InlineMath>{'a < t'}</InlineMath>, let{' '}
        <InlineMath>{'\\alpha = \\arctan a'}</InlineMath> and{' '}
        <InlineMath>{'\\beta = \\arctan t'}</InlineMath>. Then:
      </p>
      <MathBlock>
        {`F_Y(t) - F_Y(a) = P(a < Y \\leq t) = P(\\alpha < \\theta \\leq \\beta) = \\frac{\\beta - \\alpha}{\\pi}`}
      </MathBlock>

      <p>
        Taking <InlineMath>{'a \\to -\\infty'}</InlineMath> gives{' '}
        <InlineMath>{'F_Y(t) = (\\arctan t + \\pi/2)/\\pi = 1/2 + (1/\\pi)\\arctan t'}</InlineMath>.
      </p>

      <h3>The Heavy Tails</h3>

      <p>
        The Cauchy distribution has "heavy tails"—the density decays slowly:
      </p>
      <MathBlock>
        {`f(t) \\sim \\frac{1}{\\pi t^2} \\quad \\text{as } |t| \\to \\infty`}
      </MathBlock>

      <p>
        This slow decay has a remarkable consequence:
      </p>

      <Callout type="warning">
        <strong>Important:</strong> The Cauchy distribution has{' '}
        <strong>no finite expectation</strong>. The integral{' '}
        <InlineMath>{'\\int_{-\\infty}^{\\infty} t f(t)\\,dt'}</InlineMath> does
        not converge (absolutely). Similarly, it has no finite variance.
      </Callout>

      <h3>Generalized Cauchy Distribution</h3>

      <p>
        The Cauchy distribution with parameters <InlineMath>a</InlineMath> and{' '}
        <InlineMath>{'b'}</InlineMath> (where <InlineMath>{'a > 0'}</InlineMath>)
        has density:
      </p>
      <MathBlock>
        {`f(t) = \\frac{1}{\\pi} \\cdot \\frac{a}{a^2 + (t-b)^2}`}
      </MathBlock>

      <p>
        Here <InlineMath>b</InlineMath> is a location parameter (the median)
        and <InlineMath>a</InlineMath> is a scale parameter.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The Cauchy distribution demonstrates that
        not all distributions have finite expectations or variances. Its heavy
        tails make it useful for modeling phenomena with occasional extreme
        values, such as certain financial returns or resonance phenomena in
        physics.
      </Callout>
    </LessonLayout>
  );
}
