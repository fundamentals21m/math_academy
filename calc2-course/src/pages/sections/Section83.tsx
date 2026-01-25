import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section83() {
  return (
    <LessonLayout sectionId={83}>
      <h2>The Total Derivative</h2>

      <p>
        In one-dimensional calculus, a function with a derivative can be
        approximated near <InlineMath>a</InlineMath> by a linear function.
        If <InlineMath>f'(a)</InlineMath> exists, we have the Taylor formula:
      </p>
      <MathBlock>
        f(a + h) = f(a) + f'(a)h + hE(a, h)
      </MathBlock>
      <p>
        where <InlineMath>E(a, h) \to 0</InlineMath> as{' '}
        <InlineMath>h \to 0</InlineMath>. This property of linear approximation
        motivates the definition of differentiability in higher dimensions.
      </p>

      <h3>The Definition</h3>

      <Callout type="info">
        <strong>Definition (Differentiable Scalar Field):</strong> Let{' '}
        <InlineMath>{`f: S \\to \\mathbb{R}`}</InlineMath> where{' '}
        <InlineMath>{`S \\subseteq \\mathbb{R}^n`}</InlineMath>, and let{' '}
        <InlineMath>a</InlineMath> be an interior point of <InlineMath>S</InlineMath>.
        We say <InlineMath>f</InlineMath> is <strong>differentiable at a</strong>{' '}
        if there exists a linear transformation{' '}
        <InlineMath>{`T_a: \\mathbb{R}^n \\to \\mathbb{R}`}</InlineMath> and a
        scalar function <InlineMath>E(a, v)</InlineMath> such that:
        <MathBlock>
          f(a + v) = f(a) + T_a(v) + \|v\| E(a, v)
        </MathBlock>
        for <InlineMath>{`\\|v\\| < r`}</InlineMath> (some{' '}
        <InlineMath>{`r > 0`}</InlineMath>), where{' '}
        <InlineMath>{`E(a, v) \\to 0`}</InlineMath> as{' '}
        <InlineMath>{`\\|v\\| \\to 0`}</InlineMath>. The linear transformation{' '}
        <InlineMath>T_a</InlineMath> is called the <strong>total derivative</strong>{' '}
        of <InlineMath>f</InlineMath> at <InlineMath>a</InlineMath>.
      </Callout>

      <p>
        <strong>Note:</strong> The total derivative <InlineMath>T_a</InlineMath>{' '}
        is a <em>linear transformation</em>, not a number. The function value{' '}
        <InlineMath>T_a(v)</InlineMath> is a real number defined for every{' '}
        <InlineMath>{`v \\in \\mathbb{R}^n`}</InlineMath>.
      </p>

      <p>
        Equation (8.7) is called the <strong>first-order Taylor formula</strong>{' '}
        for <InlineMath>f(a + v)</InlineMath>. It gives a linear approximation{' '}
        <InlineMath>T_a(v)</InlineMath> to the difference{' '}
        <InlineMath>f(a + v) - f(a)</InlineMath>. The error is{' '}
        <InlineMath>{`\\|v\\| E(a, v)`}</InlineMath>, which is of smaller
        order than <InlineMath>{`\\|v\\|`}</InlineMath> as{' '}
        <InlineMath>{`\\|v\\| \\to 0`}</InlineMath>.
      </p>

      <h3>Uniqueness and Computation</h3>

      <Callout type="info">
        <strong>Theorem 8.5:</strong> Assume <InlineMath>f</InlineMath> is
        differentiable at <InlineMath>a</InlineMath> with total derivative{' '}
        <InlineMath>T_a</InlineMath>. Then the derivative{' '}
        <InlineMath>f'(a; y)</InlineMath> exists for every{' '}
        <InlineMath>{`y \\in \\mathbb{R}^n`}</InlineMath> and:
        <MathBlock>
          T_a(y) = f'(a; y)
        </MathBlock>
        Moreover, if <InlineMath>{`y = (y_1, \\ldots, y_n)`}</InlineMath>:
        <MathBlock>{`f'(a; y) = \\sum_{k=1}^n D_k f(a) y_k`}</MathBlock>
      </Callout>

      <p>
        This theorem tells us two important things:
      </p>
      <ol>
        <li>The total derivative, if it exists, is unique.</li>
        <li>
          The total derivative can be computed using partial derivatives:{' '}
          <InlineMath>T_a(y)</InlineMath> is a linear combination of the
          components of <InlineMath>y</InlineMath>, with coefficients given
          by the partial derivatives of <InlineMath>f</InlineMath> at{' '}
          <InlineMath>a</InlineMath>.
        </li>
      </ol>

      <h3>Differentiability Implies Existence of Partials</h3>

      <p>
        The proof of Theorem 8.5 shows that if <InlineMath>f</InlineMath> is
        differentiable at <InlineMath>a</InlineMath>, then all partial
        derivatives <InlineMath>{`D_1 f(a), \\ldots, D_n f(a)`}</InlineMath>{' '}
        exist.
      </p>

      <Callout type="warning">
        <strong>Important:</strong> The converse is <strong>not</strong> true!
        The existence of all partial derivatives at a point does not guarantee
        differentiability. The counterexample from the previous section
        (the function <InlineMath>{`xy^2/(x^2 + y^4)`}</InlineMath>) has both
        partial derivatives at the origin but is not even continuous there,
        hence not differentiable.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The total derivative captures the idea
        that a differentiable function can be well-approximated by a linear
        function near any point. This is stronger than merely having directional
        derivatives—it requires the linear approximation to work uniformly in
        all directions, with an error that vanishes faster than the distance
        to the point.
      </Callout>
    </LessonLayout>
  );
}
