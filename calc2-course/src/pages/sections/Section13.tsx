import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Inverses and One-to-One Transformations</h2>

      <p>
        Given a function <InlineMath>T</InlineMath>, our goal is to find, if possible,
        another function <InlineMath>S</InlineMath> whose composition with{' '}
        <InlineMath>T</InlineMath> is the identity transformation. Since composition is
        generally not commutative, we distinguish between left and right inverses.
      </p>

      <h3>Left and Right Inverses</h3>

      <Callout type="info">
        <strong>Definition:</strong> Given <InlineMath>T: V \to W</InlineMath>:
        <br /><br />
        A function <InlineMath>S: T(V) \to V</InlineMath> is a <strong>left inverse</strong>{' '}
        of <InlineMath>T</InlineMath> if <InlineMath>S[T(x)] = x</InlineMath> for all{' '}
        <InlineMath>x</InlineMath> in <InlineMath>V</InlineMath>, i.e.,{' '}
        <InlineMath>ST = I_V</InlineMath>.
        <br /><br />
        A function <InlineMath>R: T(V) \to V</InlineMath> is a <strong>right inverse</strong>{' '}
        of <InlineMath>T</InlineMath> if <InlineMath>T[R(y)] = y</InlineMath> for all{' '}
        <InlineMath>y</InlineMath> in <InlineMath>T(V)</InlineMath>, i.e.,{' '}
        <InlineMath>{'TR = I_{T(V)}'}</InlineMath>.
      </Callout>

      <h3>Uniqueness of Left Inverses</h3>

      <Callout type="info">
        <strong>Theorem 2.8:</strong> A function <InlineMath>T: V \to W</InlineMath> can have
        at most one left inverse. If <InlineMath>T</InlineMath> has a left inverse{' '}
        <InlineMath>S</InlineMath>, then <InlineMath>S</InlineMath> is also a right inverse.
      </Callout>

      <p>
        <strong>Proof:</strong> If <InlineMath>S</InlineMath> and{' '}
        <InlineMath>S'</InlineMath> are both left inverses, then for any{' '}
        <InlineMath>y = T(x)</InlineMath> in <InlineMath>T(V)</InlineMath>:
      </p>
      <MathBlock>S(y) = S[T(x)] = x = S'[T(x)] = S'(y)</MathBlock>
      <p>
        So <InlineMath>S = S'</InlineMath>. To show <InlineMath>S</InlineMath> is also a
        right inverse: for any <InlineMath>y = T(x) \in T(V)</InlineMath>, we have{' '}
        <InlineMath>x = S[T(x)] = S(y)</InlineMath>, so{' '}
        <InlineMath>T[S(y)] = T(x) = y</InlineMath>.
      </p>

      <h3>Characterization of Invertible Functions</h3>

      <Callout type="info">
        <strong>Theorem 2.9:</strong> A function <InlineMath>T: V \to W</InlineMath> has a
        left inverse if and only if <InlineMath>T</InlineMath> is <strong>one-to-one</strong>{' '}
        on <InlineMath>V</InlineMath>; that is, for all <InlineMath>x, y</InlineMath> in{' '}
        <InlineMath>V</InlineMath>:
        <MathBlock>x \neq y \implies T(x) \neq T(y)</MathBlock>
        or equivalently:
        <MathBlock>T(x) = T(y) \implies x = y</MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>T: V \to W</InlineMath> be one-to-one.
        The unique left inverse (which is also a right inverse) is denoted{' '}
        <InlineMath>{'T^{-1}'}</InlineMath> and called the <strong>inverse</strong> of{' '}
        <InlineMath>T</InlineMath>. We say <InlineMath>T</InlineMath> is{' '}
        <strong>invertible</strong>.
      </Callout>

      <h3>One-to-One Linear Transformations</h3>

      <Callout type="info">
        <strong>Theorem 2.10:</strong> Let <InlineMath>T: V \to W</InlineMath> be a linear
        transformation. The following statements are equivalent:
        <br /><br />
        (a) <InlineMath>T</InlineMath> is one-to-one on <InlineMath>V</InlineMath>.
        <br />
        (b) <InlineMath>T</InlineMath> is invertible and{' '}
        <InlineMath>{'T^{-1}: T(V) \\to V'}</InlineMath> is linear.
        <br />
        (c) For all <InlineMath>x</InlineMath> in <InlineMath>V</InlineMath>,{' '}
        <InlineMath>T(x) = 0</InlineMath> implies <InlineMath>x = 0</InlineMath>. That is,{' '}
        <InlineMath>{'N(T) = \\{0\\}'}</InlineMath>.
      </Callout>

      <h3>Finite-Dimensional Characterizations</h3>

      <Callout type="info">
        <strong>Theorem 2.11:</strong> Let <InlineMath>T: V \to W</InlineMath> be linear with{' '}
        <InlineMath>\dim V = n</InlineMath>. The following are equivalent:
        <br /><br />
        (a) <InlineMath>T</InlineMath> is one-to-one on <InlineMath>V</InlineMath>.
        <br />
        (b) If <InlineMath>e_1, \ldots, e_p</InlineMath> are independent in{' '}
        <InlineMath>V</InlineMath>, then <InlineMath>T(e_1), \ldots, T(e_p)</InlineMath> are
        independent in <InlineMath>T(V)</InlineMath>.
        <br />
        (c) <InlineMath>\dim T(V) = n</InlineMath>.
        <br />
        (d) If <InlineMath>{'\\{e_1, \\ldots, e_n\\}'}</InlineMath> is a basis for{' '}
        <InlineMath>V</InlineMath>, then{' '}
        <InlineMath>{'\\{T(e_1), \\ldots, T(e_n)\\}'}</InlineMath> is a basis for{' '}
        <InlineMath>T(V)</InlineMath>.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> For linear transformations, being one-to-one is
        equivalent to having a trivial null space. This is a powerful result: to check if a
        linear transformation is invertible, we only need to verify that{' '}
        <InlineMath>T(x) = 0</InlineMath> implies <InlineMath>x = 0</InlineMath>. The inverse
        of a linear transformation is automatically linear, which is not true for general
        functions.
      </Callout>
    </LessonLayout>
  );
}
