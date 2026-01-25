import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section170() {
  return (
    <LessonLayout sectionId={170}>
      <h2>Exponential Distributions</h2>

      <p>
        The <strong>exponential distribution</strong> models waiting times and
        lifetimes. It is characterized by the remarkable "memoryless" property.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> A random variable <InlineMath>X</InlineMath>{' '}
        has an <strong>exponential distribution</strong> with parameter{' '}
        <InlineMath>{'\\lambda > 0'}</InlineMath> if its distribution function
        is:
        <MathBlock>
          {`F(t) = \\begin{cases} 1 - e^{-\\lambda t} & \\text{if } t \\geq 0 \\\\ 0 & \\text{if } t < 0 \\end{cases}`}
        </MathBlock>
        The density function is:
        <MathBlock>
          {`f(t) = \\begin{cases} \\lambda e^{-\\lambda t} & \\text{if } t \\geq 0 \\\\ 0 & \\text{if } t < 0 \\end{cases}`}
        </MathBlock>
      </Callout>

      <h3>The Memoryless Property</h3>

      <p>
        Let <InlineMath>X</InlineMath> represent the waiting time until a piece
        of equipment fails. The conditional probability of survival in{' '}
        <InlineMath>{'[t, t+s]'}</InlineMath> given survival in{' '}
        <InlineMath>{'[0, t]'}</InlineMath> is:
      </p>
      <MathBlock>
        {`P(X > t+s \\mid X > t) = \\frac{P(X > t+s)}{P(X > t)} = \\frac{e^{-\\lambda(t+s)}}{e^{-\\lambda t}} = e^{-\\lambda s} = P(X > s)`}
      </MathBlock>

      <Callout type="info">
        <strong>Theorem:</strong> A probability distribution <InlineMath>F</InlineMath>{' '}
        satisfies the functional equation
        <MathBlock>
          {`\\frac{1 - F(t+s)}{1 - F(t)} = 1 - F(s) \\quad \\text{for all } t, s > 0`}
        </MathBlock>
        with <InlineMath>{'F(t) < 1'}</InlineMath> for all{' '}
        <InlineMath>{'t > 0'}</InlineMath> if and only if{' '}
        <InlineMath>F</InlineMath> is exponential with some parameter{' '}
        <InlineMath>{'\\lambda > 0'}</InlineMath>.
      </Callout>

      <p>
        This means the probability of continued survival depends only on the
        length of the additional time interval, not on the current age. The
        equipment "doesn't remember" how old it is!
      </p>

      <h3>Example: Vacuum Tube Lifetime</h3>

      <p>
        Let <InlineMath>X</InlineMath> measure the lifetime (in hours) of a
        vacuum tube with exponential distribution, parameter{' '}
        <InlineMath>{'\\lambda = 0.001'}</InlineMath>. The manufacturer wants
        to guarantee tubes for <InlineMath>T</InlineMath> hours with{' '}
        <InlineMath>{'P(X > T) = 0.95'}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> We need{' '}
        <InlineMath>{'e^{-\\lambda T} = 0.95'}</InlineMath>, so:
      </p>
      <MathBlock>
        {`T = -\\frac{\\log 0.95}{\\lambda} = -1000 \\log 0.95 \\approx 51.25 \\text{ hours}`}
      </MathBlock>

      <h3>Connection to Radioactive Decay</h3>

      <p>
        If <InlineMath>{'g(t)'}</InlineMath> represents the number of atoms
        surviving at time <InlineMath>t</InlineMath>, and each atom has
        exponential lifetime, then:
      </p>
      <MathBlock>
        {`\\frac{g(0) - g(t)}{g(0)} = 1 - e^{-\\lambda t}`}
      </MathBlock>

      <p>This gives the exponential decay law:</p>
      <MathBlock>
        {`g(t) = g(0)e^{-\\lambda t}`}
      </MathBlock>

      <p>
        The <strong>half-life</strong> <InlineMath>{'t_{1/2}'}</InlineMath> is
        related to <InlineMath>{'\\lambda'}</InlineMath> by:
      </p>
      <MathBlock>
        {`\\lambda = \\frac{\\log 2}{t_{1/2}}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The exponential distribution is the unique
        continuous memoryless distribution. This makes it the natural model for
        situations where the probability of an event in the next instant doesn't
        depend on how long we've been waiting—such as radioactive decay, arrival
        times in a Poisson process, and certain types of equipment failure.
      </Callout>
    </LessonLayout>
  );
}
