import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section171() {
  return (
    <LessonLayout sectionId={171}>
      <h2>Normal Distributions</h2>

      <p>
        The <strong>normal distribution</strong> (or <strong>Gaussian
        distribution</strong>) is the most important distribution in probability
        and statistics. Its ubiquity is explained by the Central Limit Theorem.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> A random variable <InlineMath>X</InlineMath>{' '}
        has a <strong>normal distribution</strong> with mean{' '}
        <InlineMath>m</InlineMath> and variance{' '}
        <InlineMath>{'\\sigma^2'}</InlineMath> (where{' '}
        <InlineMath>{'\\sigma > 0'}</InlineMath>) if its density function is:
        <MathBlock>
          {`f(t) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-[(t-m)/\\sigma]^2/2}`}
        </MathBlock>
        The corresponding distribution function is:
        <MathBlock>
          {`F(t) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\int_{-\\infty}^t e^{-[(u-m)/\\sigma]^2/2}\\,du`}
        </MathBlock>
      </Callout>

      <h3>The Standard Normal Distribution</h3>

      <p>
        The <strong>standard normal distribution</strong> has{' '}
        <InlineMath>{'m = 0'}</InlineMath> and{' '}
        <InlineMath>{'\\sigma = 1'}</InlineMath>. Its distribution function
        is denoted <InlineMath>{'\\Phi'}</InlineMath>:
      </p>
      <MathBlock>
        {`\\Phi(t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^t e^{-u^2/2}\\,du`}
      </MathBlock>

      <p>
        Any normal distribution can be expressed in terms of{' '}
        <InlineMath>{'\\Phi'}</InlineMath>:
      </p>
      <MathBlock>
        {`F(t) = \\Phi\\left(\\frac{t-m}{\\sigma}\\right)`}
      </MathBlock>

      <h3>Key Properties</h3>

      <ul>
        <li><InlineMath>{'\\Phi(-t) = 1 - \\Phi(t)'}</InlineMath> (symmetry about 0)</li>
        <li><InlineMath>{'\\Phi(0) = 1/2'}</InlineMath></li>
        <li>The density is bell-shaped with peak at <InlineMath>m</InlineMath></li>
        <li>About 68% of probability lies within one <InlineMath>{'\\sigma'}</InlineMath> of <InlineMath>m</InlineMath></li>
        <li>About 95% lies within two <InlineMath>{'\\sigma'}</InlineMath> of <InlineMath>m</InlineMath></li>
        <li>About 99.7% lies within three <InlineMath>{'\\sigma'}</InlineMath> of <InlineMath>m</InlineMath></li>
      </ul>

      <h3>Important Integrals</h3>

      <p>
        The famous Gaussian integral is:
      </p>
      <MathBlock>
        {`\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}`}
      </MathBlock>

      <p>This ensures the standard normal density integrates to 1:</p>
      <MathBlock>
        {`\\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty} e^{-u^2/2}\\,du = 1`}
      </MathBlock>

      <h3>Normal Approximation to Binomial</h3>

      <p>
        If <InlineMath>X</InlineMath> has a binomial distribution with parameters{' '}
        <InlineMath>n</InlineMath> and <InlineMath>p</InlineMath>, then for large{' '}
        <InlineMath>n</InlineMath>:
      </p>
      <MathBlock>
        {`P(a \\leq X \\leq b) \\approx \\Phi\\left(\\frac{b - np + \\frac{1}{2}}{\\sqrt{npq}}\\right) - \\Phi\\left(\\frac{a - np - \\frac{1}{2}}{\\sqrt{npq}}\\right)`}
      </MathBlock>

      <p>
        where <InlineMath>{'q = 1-p'}</InlineMath>. This is called the{' '}
        <strong>de Moivre-Laplace theorem</strong>.
      </p>

      <h3>Applications</h3>

      <p>Normal distributions arise in many contexts:</p>
      <ul>
        <li><strong>Measurement errors:</strong> Errors in scientific measurements</li>
        <li><strong>Biology:</strong> Heights and other characteristics of organisms</li>
        <li><strong>Physics:</strong> Maxwell's distribution of molecular velocities</li>
        <li><strong>Finance:</strong> Log-returns of assets (approximately)</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The normal distribution's prominence stems
        from the Central Limit Theorem: sums of many independent random
        variables tend to be approximately normal, regardless of the original
        distributions. This explains why the "bell curve" appears so frequently
        in nature and science.
      </Callout>
    </LessonLayout>
  );
}
