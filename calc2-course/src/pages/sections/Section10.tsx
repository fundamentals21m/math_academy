import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Linear Transformations</h2>

      <p>
        One of the ultimate goals of analysis is a comprehensive study of functions whose
        domains and ranges are subsets of linear spaces. Such functions are called{' '}
        <strong>transformations</strong>, <strong>mappings</strong>, or{' '}
        <strong>operators</strong>. This chapter treats the simplest examples, called{' '}
        <strong>linear transformations</strong>, which occur in all branches of mathematics.
      </p>

      <h3>Definition of Linear Transformation</h3>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>V</InlineMath> and{' '}
        <InlineMath>W</InlineMath> are linear spaces, a function{' '}
        <InlineMath>T: V \to W</InlineMath> is called a{' '}
        <strong>linear transformation</strong> of <InlineMath>V</InlineMath> into{' '}
        <InlineMath>W</InlineMath> if it has the following two properties:
        <br /><br />
        (a) <InlineMath>T(x + y) = T(x) + T(y)</InlineMath> for all{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> in <InlineMath>V</InlineMath>
        <br />
        (b) <InlineMath>T(cx) = cT(x)</InlineMath> for all <InlineMath>x</InlineMath> in{' '}
        <InlineMath>V</InlineMath> and all scalars <InlineMath>c</InlineMath>
      </Callout>

      <p>
        These properties can be combined into one formula:
      </p>
      <MathBlock>T(ax + by) = aT(x) + bT(y)</MathBlock>
      <p>
        for all <InlineMath>x, y</InlineMath> in <InlineMath>V</InlineMath> and all scalars{' '}
        <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>. By induction:
      </p>
      <MathBlock>{`T\\left(\\sum_{i=1}^n a_i x_i\\right) = \\sum_{i=1}^n a_i T(x_i)`}</MathBlock>

      <h3>Examples of Linear Transformations</h3>

      <p>
        <strong>Example 1 (Identity transformation):</strong> The transformation{' '}
        <InlineMath>T: V \to V</InlineMath> where <InlineMath>T(x) = x</InlineMath> for each{' '}
        <InlineMath>x</InlineMath> is called the <strong>identity transformation</strong>,
        denoted by <InlineMath>I</InlineMath> or <InlineMath>I_V</InlineMath>.
      </p>

      <p>
        <strong>Example 2 (Zero transformation):</strong> The transformation{' '}
        <InlineMath>T: V \to V</InlineMath> which maps each element onto{' '}
        <InlineMath>0</InlineMath> is called the <strong>zero transformation</strong>,
        denoted by <InlineMath>0</InlineMath>.
      </p>

      <p>
        <strong>Example 3 (Scalar multiplication):</strong>{' '}
        <InlineMath>T: V \to V</InlineMath> where <InlineMath>T(x) = cx</InlineMath> for a
        fixed scalar <InlineMath>c</InlineMath>.
      </p>

      <p>
        <strong>Example 4 (Linear equations):</strong> Let <InlineMath>V = V_n</InlineMath>{' '}
        and <InlineMath>W = V_m</InlineMath>. Given <InlineMath>mn</InlineMath> real numbers{' '}
        <InlineMath>{'a_{ik}'}</InlineMath>, define <InlineMath>T: V_n \to V_m</InlineMath>{' '}
        by:
      </p>
      <MathBlock>{`y_i = \\sum_{k=1}^n a_{ik}x_k \\quad \\text{for $i = 1, 2, \\ldots, m$}`}</MathBlock>

      <p>
        <strong>Example 5 (Differentiation operator):</strong> Let <InlineMath>V</InlineMath>{' '}
        be the space of all real differentiable functions. The transformation{' '}
        <InlineMath>D: V \to W</InlineMath> mapping <InlineMath>f</InlineMath> to its
        derivative <InlineMath>f'</InlineMath> is called the{' '}
        <strong>differentiation operator</strong>.
      </p>

      <p>
        <strong>Example 6 (Integration operator):</strong> Let <InlineMath>V</InlineMath> be
        the space of functions continuous on <InlineMath>[a, b]</InlineMath>. The
        transformation <InlineMath>T(f) = g</InlineMath> where{' '}
        <InlineMath>g(x) = \int_a^x f(t)\, dt</InlineMath> is the{' '}
        <strong>integration operator</strong>.
      </p>

      <h3>Null Space and Range</h3>

      <Callout type="info">
        <strong>Theorem 2.1:</strong> The range <InlineMath>T(V)</InlineMath> of a linear
        transformation <InlineMath>T: V \to W</InlineMath> is a subspace of{' '}
        <InlineMath>W</InlineMath>. Moreover, <InlineMath>T</InlineMath> maps the zero
        element of <InlineMath>V</InlineMath> onto the zero element of{' '}
        <InlineMath>W</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> The set of all elements in <InlineMath>V</InlineMath>{' '}
        that <InlineMath>T</InlineMath> maps onto <InlineMath>0</InlineMath> is called the{' '}
        <strong>null space</strong> (or <strong>kernel</strong>) of <InlineMath>T</InlineMath>,
        denoted <InlineMath>N(T)</InlineMath>:
        <MathBlock>{`N(T) = \\{x \\mid x \\in V \\text{ and } T(x) = 0\\}`}</MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Theorem 2.2:</strong> The null space of <InlineMath>T</InlineMath> is a
        subspace of <InlineMath>V</InlineMath>.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Linear transformations preserve the algebraic structure
        of linear spaces. They map subspaces to subspaces, linear combinations to linear
        combinations, and zero to zero. The null space and range are fundamental concepts
        that help us understand the behavior of any linear transformation.
      </Callout>
    </LessonLayout>
  );
}
