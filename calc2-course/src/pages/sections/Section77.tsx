import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section77() {
  return (
    <LessonLayout sectionId={77}>
      <h2>Functions from R^n to R^m: Scalar and Vector Fields</h2>

      <p>
        In Part 1 we studied linear transformations{' '}
        <InlineMath>{'T: V \\to W'}</InlineMath> between linear spaces. Now we drop
        the linearity requirement but restrict to finite-dimensional spaces.
        Specifically, we study functions with domain in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath> and range in{' '}
        <InlineMath>{'\\mathbb{R}^m'}</InlineMath>.
      </p>

      <h3>Classification of Functions</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let{' '}
        <InlineMath>{'f: S \\to \\mathbb{R}^m'}</InlineMath> where{' '}
        <InlineMath>{'S \\subseteq \\mathbb{R}^n'}</InlineMath>.
        <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <li>
            If <InlineMath>{'n = 1'}</InlineMath> and <InlineMath>{'m = 1'}</InlineMath>:
            a <strong>real-valued function of a real variable</strong>
          </li>
          <li>
            If <InlineMath>{'n = 1'}</InlineMath> and <InlineMath>{'m > 1'}</InlineMath>:
            a <strong>vector-valued function of a real variable</strong>
          </li>
          <li>
            If <InlineMath>{'n > 1'}</InlineMath> and <InlineMath>{'m = 1'}</InlineMath>:
            a <strong>scalar field</strong>
          </li>
          <li>
            If <InlineMath>{'n > 1'}</InlineMath> and <InlineMath>{'m > 1'}</InlineMath>:
            a <strong>vector field</strong>
          </li>
        </ul>
      </Callout>

      <h3>Notation</h3>

      <p>
        For a point <InlineMath>{'x = (x_1, \\ldots, x_n)'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, we use both{' '}
        <InlineMath>{'f(x)'}</InlineMath> and{' '}
        <InlineMath>{'f(x_1, \\ldots, x_n)'}</InlineMath> to denote function values.
        The inner product and norm are:
      </p>
      <MathBlock>{`x \\cdot y = \\sum_{k=1}^n x_k y_k, \\quad \\|x\\| = (x \\cdot x)^{1/2}`}</MathBlock>

      <p>
        Points in <InlineMath>{'\\mathbb{R}^2'}</InlineMath> are usually written
        as <InlineMath>{'(x, y)'}</InlineMath>; points in{' '}
        <InlineMath>{'\\mathbb{R}^3'}</InlineMath> as{' '}
        <InlineMath>{'(x, y, z)'}</InlineMath>.
      </p>

      <h3>Physical Examples</h3>

      <p>
        Scalar and vector fields arise naturally in physics and engineering:
      </p>

      <ul>
        <li>
          <strong>Temperature field:</strong> If <InlineMath>{'f(x)'}</InlineMath>{' '}
          represents temperature at point <InlineMath>{'x'}</InlineMath> in the
          atmosphere, then <InlineMath>{'f'}</InlineMath> is a scalar field.
        </li>
        <li>
          <strong>Velocity field:</strong> If we assign to each point{' '}
          <InlineMath>{'x'}</InlineMath> a vector representing wind velocity, we
          obtain a vector field.
        </li>
      </ul>

      <p>
        The fundamental question is: how does the field change as we move from
        one point to another? In one dimension, derivatives answer this question.
        We now extend derivative theory to higher dimensions.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The transition from functions of one
        variable to scalar and vector fields requires careful generalization.
        Many familiar properties extend naturally, but some—like the relationship
        between derivatives and continuity—become more subtle. The key tools
        are open sets (generalizing open intervals) and the gradient vector
        (generalizing the derivative).
      </Callout>
    </LessonLayout>
  );
}
