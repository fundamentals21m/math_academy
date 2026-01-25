import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section168() {
  return (
    <LessonLayout sectionId={168}>
      <h2>Uniform Distribution</h2>

      <p>
        The <strong>uniform distribution</strong> is the simplest continuous
        distribution. It models situations where all outcomes in an interval
        are equally likely.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> A random variable <InlineMath>X</InlineMath>{' '}
        has a <strong>uniform distribution</strong> over a finite interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath> if its distribution function is:
        <MathBlock>
          {`F(t) = \\begin{cases} 0 & \\text{if } t \\leq a \\\\ \\frac{t-a}{b-a} & \\text{if } a < t < b \\\\ 1 & \\text{if } t \\geq b \\end{cases}`}
        </MathBlock>
      </Callout>

      <h3>Density Function</h3>

      <p>
        The uniform distribution has the constant density:
      </p>
      <MathBlock>
        {`f(t) = \\begin{cases} \\frac{1}{b-a} & \\text{if } a < t < b \\\\ 0 & \\text{otherwise} \\end{cases}`}
      </MathBlock>

      <h3>Characteristic Property</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>X</InlineMath> be a random
        variable with all its values in <InlineMath>{'[a, b]'}</InlineMath>,
        and let <InlineMath>F</InlineMath> be its distribution function. Then{' '}
        <InlineMath>F</InlineMath> is uniform over{' '}
        <InlineMath>{'[a, b]'}</InlineMath> if and only if for every pair of
        subintervals <InlineMath>I</InlineMath> and <InlineMath>J</InlineMath>{' '}
        of <InlineMath>{'[a, b]'}</InlineMath> having the same length:
        <MathBlock>
          {`P(X \\in I) = P(X \\in J)`}
        </MathBlock>
        In this case, <InlineMath>{'P(X \\in I) = h/(b-a)'}</InlineMath>, where{' '}
        <InlineMath>h</InlineMath> is the length of <InlineMath>I</InlineMath>.
      </Callout>

      <p>
        This theorem says that for uniform distributions, the probability
        depends only on the length of an interval, not on its location.
      </p>

      <h3>Example: Breaking a Stick</h3>

      <p>
        A line segment is broken into two pieces at a random point. Let{' '}
        <InlineMath>X</InlineMath> measure the ratio of the left piece to the
        right piece. Determine the distribution of <InlineMath>X</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> Represent the segment as{' '}
        <InlineMath>{'[0, 1]'}</InlineMath> and let{' '}
        <InlineMath>Y</InlineMath> be the break point, uniformly distributed
        on <InlineMath>{'[0, 1]'}</InlineMath>.
      </p>

      <p>
        The ratio is <InlineMath>{'X = Y/(1-Y)'}</InlineMath>. For{' '}
        <InlineMath>{'t \\geq 0'}</InlineMath>:
      </p>
      <MathBlock>
        {`F_X(t) = P(X \\leq t) = P\\left(\\frac{Y}{1-Y} \\leq t\\right) = P\\left(Y \\leq \\frac{t}{1+t}\\right) = \\frac{t}{1+t}`}
      </MathBlock>

      <p>
        The probability that the left piece is at least twice as long as the
        right is:
      </p>
      <MathBlock>
        {`P(X \\geq 2) = 1 - F_X(2) = 1 - \\frac{2}{3} = \\frac{1}{3}`}
      </MathBlock>

      <h3>Connection to Cauchy's Functional Equation</h3>

      <p>
        The proof that uniform distributions are characterized by the equal-length
        property uses <strong>Cauchy's functional equation</strong>:
      </p>
      <MathBlock>
        {`g(u + v) = g(u) + g(v)`}
      </MathBlock>

      <p>
        For nonnegative solutions, this equation implies{' '}
        <InlineMath>{'g(u) = cu'}</InlineMath> for some constant{' '}
        <InlineMath>c</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The uniform distribution represents
        "maximum ignorance"—when we have no reason to prefer any part of an
        interval over any other. It is the natural choice for modeling
        "random" selection from an interval, and it serves as the building
        block for generating other distributions.
      </Callout>
    </LessonLayout>
  );
}
