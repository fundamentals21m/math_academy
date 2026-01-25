import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section172() {
  return (
    <LessonLayout sectionId={172}>
      <h2>Two-Dimensional Random Variables</h2>

      <p>
        When studying relationships between random quantities, we need{' '}
        <strong>two-dimensional random variables</strong> (or{' '}
        <strong>random vectors</strong>). These are pairs{' '}
        <InlineMath>{'(X, Y)'}</InlineMath> of random variables defined on the
        same sample space.
      </p>

      <h3>Joint Distribution Functions</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>joint distribution function</strong>{' '}
        (or <strong>joint distribution</strong>) of the two-dimensional random
        variable <InlineMath>{'(X, Y)'}</InlineMath> is the function{' '}
        <InlineMath>F</InlineMath> defined for all real{' '}
        <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> by:
        <MathBlock>
          {`F(a, b) = P(X \\leq a, Y \\leq b)`}
        </MathBlock>
      </Callout>

      <h3>Properties of Joint Distributions</h3>

      <p>
        The joint distribution <InlineMath>F</InlineMath> satisfies:
      </p>
      <ul>
        <li><InlineMath>{'0 \\leq F(a,b) \\leq 1'}</InlineMath></li>
        <li><InlineMath>F</InlineMath> is monotonically increasing in each variable</li>
        <li><InlineMath>{'\\lim_{a \\to -\\infty} F(a,b) = \\lim_{b \\to -\\infty} F(a,b) = 0'}</InlineMath></li>
        <li><InlineMath>{'\\lim_{a,b \\to +\\infty} F(a,b) = 1'}</InlineMath></li>
      </ul>

      <h3>Computing Rectangular Probabilities</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>F</InlineMath> is the joint
        distribution of <InlineMath>{'(X, Y)'}</InlineMath> and{' '}
        <InlineMath>{'a < b'}</InlineMath>, <InlineMath>{'c < d'}</InlineMath>,
        then:
        <MathBlock>
          {`P(a < X \\leq b, c < Y \\leq d) = F(b,d) - F(a,d) - F(b,c) + F(a,c)`}
        </MathBlock>
      </Callout>

      <p>
        This is the two-dimensional analog of{' '}
        <InlineMath>{'P(a < X \\leq b) = F(b) - F(a)'}</InlineMath>.
      </p>

      <h3>Marginal Distributions</h3>

      <p>
        The <strong>marginal distributions</strong>{' '}
        <InlineMath>{'F_X'}</InlineMath> and <InlineMath>{'F_Y'}</InlineMath>{' '}
        of the individual random variables can be recovered from the joint
        distribution:
      </p>
      <MathBlock>
        {`F_X(t) = P(X \\leq t) = \\lim_{b \\to \\infty} F(t, b)`}
      </MathBlock>
      <MathBlock>
        {`F_Y(t) = P(Y \\leq t) = \\lim_{a \\to \\infty} F(a, t)`}
      </MathBlock>

      <h3>Independence</h3>

      <Callout type="info">
        <strong>Definition:</strong> Random variables <InlineMath>X</InlineMath>{' '}
        and <InlineMath>Y</InlineMath> are <strong>independent</strong> if
        their joint distribution factors:
        <MathBlock>
          {`F(a, b) = F_X(a) \\cdot F_Y(b) \\quad \\text{for all } a, b`}
        </MathBlock>
      </Callout>

      <p>
        Equivalently, <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath>{' '}
        are independent if and only if:
      </p>
      <MathBlock>
        {`P(a < X \\leq b, c < Y \\leq d) = P(a < X \\leq b) \\cdot P(c < Y \\leq d)`}
      </MathBlock>

      <h3>The Mass Analogy</h3>

      <p>
        Think of total mass 1 distributed over the plane. The number{' '}
        <InlineMath>{'F(a, b)'}</InlineMath> represents the mass in the
        infinite rectangular region <InlineMath>{'\\{(x,y) : x \\leq a, y \\leq b\\}'}</InlineMath>.
      </p>

      <ul>
        <li><strong>Discrete:</strong> Mass concentrated in lumps at isolated points</li>
        <li><strong>Continuous:</strong> Mass smeared over the plane</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> Joint distributions capture not only the
        individual behavior of <InlineMath>X</InlineMath> and{' '}
        <InlineMath>Y</InlineMath>, but also their relationship. Knowing the
        marginal distributions alone is not enough—the joint distribution tells
        us how the variables interact, including whether they are independent.
      </Callout>
    </LessonLayout>
  );
}
