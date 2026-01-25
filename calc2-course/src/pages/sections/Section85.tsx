import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section85() {
  return (
    <LessonLayout sectionId={85}>
      <h2>A Sufficient Condition for Differentiability</h2>

      <p>
        We have seen that if <InlineMath>{'f'}</InlineMath> is differentiable at{' '}
        <InlineMath>{'a'}</InlineMath>, then all partial derivatives{' '}
        <InlineMath>{'D_1 f(a), \\ldots, D_n f(a)'}</InlineMath> exist. However,
        the converse is false: existence of partial derivatives does not
        guarantee differentiability.
      </p>

      <p>
        The following theorem provides a practical sufficient condition for
        differentiability.
      </p>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 8.7 (Sufficient Condition for Differentiability):</strong>{' '}
        Assume that the partial derivatives{' '}
        <InlineMath>{'D_1 f, \\ldots, D_n f'}</InlineMath> exist in some n-ball{' '}
        <InlineMath>{'B(a)'}</InlineMath> and are continuous at <InlineMath>{'a'}</InlineMath>.
        Then <InlineMath>{'f'}</InlineMath> is differentiable at <InlineMath>{'a'}</InlineMath>.
      </Callout>

      <p>
        A scalar field satisfying this hypothesis is said to be{' '}
        <strong>continuously differentiable</strong> at <InlineMath>{'a'}</InlineMath>.
      </p>

      <h3>Proof Outline</h3>

      <p>
        We must show that{' '}
        <InlineMath>{'f(a + v) - f(a) = \\nabla f(a) \\cdot v + \\|v\\| E(a, v)'}</InlineMath>{' '}
        where <InlineMath>{'E(a, v) \\to 0'}</InlineMath> as{' '}
        <InlineMath>{'\\|v\\| \\to 0'}</InlineMath>.
      </p>

      <p>
        Let <InlineMath>{'\\lambda = \\|v\\|'}</InlineMath>, so{' '}
        <InlineMath>{'v = \\lambda u'}</InlineMath> where{' '}
        <InlineMath>{'\\|u\\| = 1'}</InlineMath>. Write{' '}
        <InlineMath>{'u = u_1 e_1 + \\cdots + u_n e_n'}</InlineMath> and express
        the difference as a telescoping sum:
      </p>
      <MathBlock>{`f(a + v) - f(a) = \\sum_{k=1}^n \\{f(a + \\lambda v_k) - f(a + \\lambda v_{k-1})\\}`}</MathBlock>
      <p>
        where <InlineMath>{'v_0 = 0'}</InlineMath> and{' '}
        <InlineMath>{'v_k = u_1 e_1 + \\cdots + u_k e_k'}</InlineMath>.
      </p>

      <p>
        The <InlineMath>{'k'}</InlineMath>th term involves a change only in the{' '}
        <InlineMath>{'k'}</InlineMath>th component. By the one-dimensional
        mean-value theorem:
      </p>
      <MathBlock>{`f(b_k + \\lambda u_k e_k) - f(b_k) = \\lambda u_k D_k f(c_k)`}</MathBlock>
      <p>
        where <InlineMath>{'b_k = a + \\lambda v_{k-1}'}</InlineMath> and{' '}
        <InlineMath>{'c_k'}</InlineMath> is between <InlineMath>{'b_k'}</InlineMath>{' '}
        and <InlineMath>{'b_k + \\lambda u_k e_k'}</InlineMath>.
      </p>

      <p>
        Summing and rearranging:
      </p>
      <MathBlock>{`f(a + v) - f(a) - \\nabla f(a) \\cdot v = \\|v\\| E(a, v)`}</MathBlock>
      <p>
        where:
      </p>
      <MathBlock>{`E(a, v) = \\sum_{k=1}^n \\{D_k f(c_k) - D_k f(a)\\} u_k`}</MathBlock>

      <p>
        Since <InlineMath>{'c_k \\to a'}</InlineMath> as{' '}
        <InlineMath>{'\\|v\\| \\to 0'}</InlineMath> and each{' '}
        <InlineMath>{'D_k f'}</InlineMath> is continuous at <InlineMath>{'a'}</InlineMath>,
        we have <InlineMath>{'E(a, v) \\to 0'}</InlineMath>.
      </p>

      <h3>Practical Implications</h3>

      <p>
        In practice, most functions encountered in applications have continuous
        partial derivatives. Theorem 8.7 tells us these functions are
        differentiable, and we can use the gradient to compute directional
        derivatives:
      </p>
      <MathBlock>{`f'(a; y) = \\nabla f(a) \\cdot y`}</MathBlock>

      <h3>Example</h3>

      <p>
        The function <InlineMath>{'f(x, y) = x^2 + y^2 \\sin(xy)'}</InlineMath>{' '}
        is continuously differentiable everywhere in{' '}
        <InlineMath>{'\\mathbb{R}^2'}</InlineMath> because its partial derivatives:
      </p>
      <MathBlock>{`\\frac{\\partial f}{\\partial x} = 2x + y^2 \\cos(xy) \\cdot y = 2x + y^3 \\cos(xy)`}</MathBlock>
      <MathBlock>{`\\frac{\\partial f}{\\partial y} = 2y \\sin(xy) + y^2 \\cos(xy) \\cdot x`}</MathBlock>
      <p>
        are compositions of continuous functions, hence continuous everywhere.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Continuous differentiability is the
        "standard" case in applications. The condition is easy to verify:
        simply check that all partial derivatives exist and are continuous.
        Functions built from polynomials, exponentials, trigonometric functions,
        and their compositions are continuously differentiable wherever defined.
      </Callout>
    </LessonLayout>
  );
}
