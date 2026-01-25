import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section173() {
  return (
    <LessonLayout sectionId={173}>
      <h2>Two-Dimensional Discrete Distributions</h2>

      <p>
        A two-dimensional random variable <InlineMath>{'(X, Y)'}</InlineMath> is{' '}
        <strong>discrete</strong> (or <strong>jointly discrete</strong>) if its
        possible values form a finite or countably infinite set of points in the
        plane.
      </p>

      <h3>Joint Probability Mass Function</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>probability mass function</strong>{' '}
        of a discrete random variable <InlineMath>{'(X, Y)'}</InlineMath> is the
        function <InlineMath>p</InlineMath> defined by:
        <MathBlock>
          {`p(x, y) = P(X = x, Y = y)`}
        </MathBlock>
        The points <InlineMath>{'(x, y)'}</InlineMath> with{' '}
        <InlineMath>{'p(x, y) > 0'}</InlineMath> are called the{' '}
        <strong>mass points</strong>.
      </Callout>

      <h3>Properties</h3>

      <p>
        If <InlineMath>T</InlineMath> denotes the set of mass points, then:
      </p>
      <MathBlock>
        {`\\sum_{(x,y) \\in T} p(x, y) = 1`}
      </MathBlock>

      <p>The joint distribution function is:</p>
      <MathBlock>
        {`F(a, b) = \\sum_{x_i \\leq a} \\sum_{y_j \\leq b} p(x_i, y_j)`}
      </MathBlock>

      <h3>Marginal Mass Functions</h3>

      <p>
        The marginal probability mass functions are obtained by summing over
        the other variable:
      </p>
      <MathBlock>
        {`p_X(x_i) = P(X = x_i) = \\sum_{j=1}^{\\infty} p(x_i, y_j)`}
      </MathBlock>
      <MathBlock>
        {`p_Y(y_j) = P(Y = y_j) = \\sum_{i=1}^{\\infty} p(x_i, y_j)`}
      </MathBlock>

      <h3>Conditional Probabilities</h3>

      <p>
        The conditional probability mass function of <InlineMath>X</InlineMath>{' '}
        given <InlineMath>{'Y = y_j'}</InlineMath> is:
      </p>
      <MathBlock>
        {`P(X = x_i \\mid Y = y_j) = \\frac{p(x_i, y_j)}{p_Y(y_j)}`}
      </MathBlock>

      <p>This leads to <strong>Bayes' formulas</strong>:</p>
      <MathBlock>
        {`P(X = x_k \\mid Y = y_j) = \\frac{P(X = x_k) \\cdot P(Y = y_j \\mid X = x_k)}{\\sum_i P(X = x_i) \\cdot P(Y = y_j \\mid X = x_i)}`}
      </MathBlock>

      <h3>Independence Criterion</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Discrete random variables{' '}
        <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath> are independent
        if and only if:
        <MathBlock>
          {`p(x_i, y_j) = p_X(x_i) \\cdot p_Y(y_j) \\quad \\text{for all } i, j`}
        </MathBlock>
      </Callout>

      <h3>Example: Two Dice</h3>

      <p>
        Roll two fair dice. Let <InlineMath>X</InlineMath> be the value on the
        first die and <InlineMath>Y</InlineMath> the value on the second. The
        joint mass function is:
      </p>
      <MathBlock>
        {`p(i, j) = \\frac{1}{36} \\quad \\text{for } i, j \\in \\{1, 2, 3, 4, 5, 6\\}`}
      </MathBlock>

      <p>
        The marginal mass functions are{' '}
        <InlineMath>{'p_X(i) = p_Y(j) = 1/6'}</InlineMath>. Since{' '}
        <InlineMath>{'p(i,j) = (1/6)(1/6) = p_X(i) p_Y(j)'}</InlineMath>,{' '}
        <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath> are independent.
      </p>

      <p>
        However, if <InlineMath>{'Z = X + Y'}</InlineMath> is the sum, then{' '}
        <InlineMath>X</InlineMath> and <InlineMath>Z</InlineMath> are{' '}
        <strong>not</strong> independent.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> For discrete distributions, joint
        probabilities are specified by listing the probability at each mass
        point. The marginal distributions are obtained by summing, and
        independence means the joint probabilities factor into products of
        marginal probabilities.
      </Callout>
    </LessonLayout>
  );
}
