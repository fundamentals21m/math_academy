import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Algebraic Operations on Linear Transformations</h2>

      <p>
        Linear transformations can be combined using algebraic operations. We can add them,
        multiply them by scalars, and compose them. These operations give the set of linear
        transformations the structure of a linear space itself.
      </p>

      <h3>Addition and Scalar Multiplication</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>S: V \to W</InlineMath> and{' '}
        <InlineMath>T: V \to W</InlineMath> be functions with common domain{' '}
        <InlineMath>V</InlineMath> and values in a linear space <InlineMath>W</InlineMath>.
        For any scalar <InlineMath>c</InlineMath>, we define the sum{' '}
        <InlineMath>S + T</InlineMath> and the product <InlineMath>cT</InlineMath> by:
        <MathBlock>(S + T)(x) = S(x) + T(x), \quad (cT)(x) = cT(x)</MathBlock>
        for all <InlineMath>x</InlineMath> in <InlineMath>V</InlineMath>.
      </Callout>

      <p>
        We denote by <InlineMath>{'\\mathcal{L}(V, W)'}</InlineMath> the set of all linear
        transformations from <InlineMath>V</InlineMath> to <InlineMath>W</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Theorem 2.4:</strong> The set{' '}
        <InlineMath>{'\\mathcal{L}(V, W)'}</InlineMath> of all linear transformations from{' '}
        <InlineMath>V</InlineMath> to <InlineMath>W</InlineMath> is itself a linear space
        with the operations of addition and scalar multiplication defined above.
      </Callout>

      <p>
        The zero transformation serves as the zero element, and{' '}
        <InlineMath>(-1)T</InlineMath> is the negative of <InlineMath>T</InlineMath>.
      </p>

      <h3>Composition of Transformations</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>U, V, W</InlineMath> be sets. Let{' '}
        <InlineMath>T: U \to V</InlineMath> and <InlineMath>S: V \to W</InlineMath>. The{' '}
        <strong>composition</strong> <InlineMath>ST</InlineMath> is the function{' '}
        <InlineMath>ST: U \to W</InlineMath> defined by:
        <MathBlock>{`(ST)(x) = S[T(x)] \\quad \\text{for every $x$ in $U$}`}</MathBlock>
      </Callout>

      <p>
        To map <InlineMath>x</InlineMath> by <InlineMath>ST</InlineMath>, we first map{' '}
        <InlineMath>x</InlineMath> by <InlineMath>T</InlineMath> and then map{' '}
        <InlineMath>T(x)</InlineMath> by <InlineMath>S</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Theorem 2.5 (Associative Law):</strong> If{' '}
        <InlineMath>T: U \to V</InlineMath>, <InlineMath>S: V \to W</InlineMath>, and{' '}
        <InlineMath>R: W \to X</InlineMath>, then:
        <MathBlock>R(ST) = (RS)T</MathBlock>
      </Callout>

      <h3>Powers of Transformations</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>T: V \to V</InlineMath> map{' '}
        <InlineMath>V</InlineMath> into itself. We define integral powers inductively:
        <MathBlock>{`T^0 = I, \\quad T^n = TT^{n-1} \\text{ for $n \\geq 1$}`}</MathBlock>
      </Callout>

      <p>
        The associative law implies the law of exponents:{' '}
        <InlineMath>{'T^m T^n = T^{m+n}'}</InlineMath>.
      </p>

      <h3>Composition Preserves Linearity</h3>

      <Callout type="info">
        <strong>Theorem 2.6:</strong> If <InlineMath>U, V, W</InlineMath> are linear spaces
        with the same scalars, and if <InlineMath>T: U \to V</InlineMath> and{' '}
        <InlineMath>S: V \to W</InlineMath> are linear transformations, then the
        composition <InlineMath>ST: U \to W</InlineMath> is linear.
      </Callout>

      <p>
        <strong>Proof:</strong> For all <InlineMath>x, y</InlineMath> in{' '}
        <InlineMath>U</InlineMath> and scalars <InlineMath>a, b</InlineMath>:
      </p>
      <MathBlock>
        (ST)(ax + by) = S[T(ax + by)] = S[aT(x) + bT(y)] = a(ST)(x) + b(ST)(y)
      </MathBlock>

      <h3>Distributive Laws</h3>

      <Callout type="info">
        <strong>Theorem 2.7:</strong> Let <InlineMath>U, V, W</InlineMath> be linear spaces
        with the same scalars. For <InlineMath>{'S, T \\in \\mathcal{L}(V, W)'}</InlineMath>{' '}
        and scalar <InlineMath>c</InlineMath>:
        <br /><br />
        (a) For any function <InlineMath>R</InlineMath> with values in{' '}
        <InlineMath>V</InlineMath>:
        <MathBlock>(S + T)R = SR + TR, \quad (cS)R = c(SR)</MathBlock>
        (b) For any linear transformation <InlineMath>R: W \to U</InlineMath>:
        <MathBlock>R(S + T) = RS + RT, \quad R(cS) = c(RS)</MathBlock>
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The space of linear transformations{' '}
        <InlineMath>{'\\mathcal{L}(V, W)'}</InlineMath> is itself a linear space, and
        composition provides an additional "multiplication" operation. When{' '}
        <InlineMath>V = W</InlineMath>, the space{' '}
        <InlineMath>{'\\mathcal{L}(V, V)'}</InlineMath> becomes an algebra with identity
        (the identity transformation). These algebraic structures are fundamental to
        understanding how linear transformations behave.
      </Callout>
    </LessonLayout>
  );
}
