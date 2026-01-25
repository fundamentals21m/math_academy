import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section165() {
  return (
    <LessonLayout sectionId={165}>
      <h2>Distribution Functions</h2>

      <p>
        The <strong>distribution function</strong> of a random variable
        captures all probabilistic information about that variable. It is the
        fundamental object connecting random variables to analysis.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>X</InlineMath> be a
        one-dimensional random variable. The <strong>distribution function</strong>{' '}
        (or <strong>cumulative distribution function</strong>) of{' '}
        <InlineMath>X</InlineMath> is the function{' '}
        <InlineMath>{'F: \\mathbb{R} \\to [0,1]'}</InlineMath> defined by:
        <MathBlock>
          {`F(t) = P(X \\leq t)`}
        </MathBlock>
        for every real number <InlineMath>t</InlineMath>.
      </Callout>

      <h3>Basic Properties</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Every distribution function{' '}
        <InlineMath>F</InlineMath> satisfies:
        <ol>
          <li><InlineMath>{'0 \\leq F(t) \\leq 1'}</InlineMath> for all <InlineMath>t</InlineMath></li>
          <li><InlineMath>F</InlineMath> is monotonically increasing: if <InlineMath>{'a < b'}</InlineMath>, then <InlineMath>{'F(a) \\leq F(b)'}</InlineMath></li>
          <li><InlineMath>{'\\lim_{t \\to -\\infty} F(t) = 0'}</InlineMath></li>
          <li><InlineMath>{'\\lim_{t \\to +\\infty} F(t) = 1'}</InlineMath></li>
          <li><InlineMath>F</InlineMath> is continuous from the right: <InlineMath>{'\\lim_{h \\to 0^+} F(t+h) = F(t)'}</InlineMath></li>
        </ol>
      </Callout>

      <h3>Computing Probabilities from F</h3>

      <p>
        The distribution function allows us to compute many probabilities:
      </p>

      <MathBlock>
        {`P(a < X \\leq b) = F(b) - F(a)`}
      </MathBlock>

      <MathBlock>
        {`P(X > t) = 1 - F(t)`}
      </MathBlock>

      <MathBlock>
        {`P(X = t) = F(t) - \\lim_{s \\to t^-} F(s)`}
      </MathBlock>

      <p>
        The last formula shows that <InlineMath>{'P(X = t) > 0'}</InlineMath> if
        and only if <InlineMath>F</InlineMath> has a jump discontinuity at{' '}
        <InlineMath>t</InlineMath>.
      </p>

      <h3>Types of Distributions</h3>

      <p>
        Distribution functions fall into three main types:
      </p>

      <p>
        <strong>Discrete distributions:</strong> <InlineMath>F</InlineMath> is a
        step function with jumps at countably many points. All the probability
        mass is concentrated at these points.
      </p>

      <p>
        <strong>Continuous distributions:</strong> <InlineMath>F</InlineMath> is
        continuous everywhere. No single point has positive probability.
      </p>

      <p>
        <strong>Mixed distributions:</strong> <InlineMath>F</InlineMath> is a
        combination of discrete and continuous parts.
      </p>

      <h3>Example: Geometric Distribution</h3>

      <p>
        Let <InlineMath>X</InlineMath> count the number of coin tosses until
        the first head. The distribution function is:
      </p>
      <MathBlock>
        {`F(t) = P(X \\leq t) = \\sum_{k=1}^{\\lfloor t \\rfloor} (1-p)^{k-1}p = 1 - (1-p)^{\\lfloor t \\rfloor}`}
      </MathBlock>
      <p>
        for <InlineMath>{'t \\geq 1'}</InlineMath>, and{' '}
        <InlineMath>{'F(t) = 0'}</InlineMath> for <InlineMath>{'t < 1'}</InlineMath>.
      </p>

      <p>
        This is a discrete distribution—<InlineMath>F</InlineMath> is a step
        function with jumps at the positive integers.
      </p>

      <h3>The Mass Analogy</h3>

      <p>
        Think of probability as distributed mass on the real line, with total
        mass 1. The distribution function <InlineMath>{'F(t)'}</InlineMath>{' '}
        represents the total mass located to the left of (and including) the
        point <InlineMath>t</InlineMath>.
      </p>

      <ul>
        <li><strong>Discrete:</strong> Mass is concentrated in lumps at isolated points</li>
        <li><strong>Continuous:</strong> Mass is smeared smoothly along the line</li>
        <li><strong>Mixed:</strong> Some lumps plus some smearing</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The distribution function{' '}
        <InlineMath>F</InlineMath> completely characterizes a random variable's
        probabilistic behavior. Two random variables with the same distribution
        function are said to be <strong>identically distributed</strong>—they
        are probabilistically indistinguishable, even if defined on different
        sample spaces.
      </Callout>
    </LessonLayout>
  );
}
