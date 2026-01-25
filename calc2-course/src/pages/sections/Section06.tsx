import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Inner Products and Euclidean Spaces</h2>

      <p>
        We now introduce the important concept of an inner product, which allows us to define
        notions of length, angle, and orthogonality in a linear space. A linear space equipped
        with an inner product is called a Euclidean space.
      </p>

      <h3>Definition of Inner Product</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>V</InlineMath> be a real linear space. A
        function that assigns to each pair of elements <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> in <InlineMath>V</InlineMath> a real number{' '}
        <InlineMath>{'(x, y)'}</InlineMath>, called the <strong>inner product</strong> of{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>, is said to be an inner
        product if it satisfies the following axioms for all elements{' '}
        <InlineMath>{'x, y, z'}</InlineMath> in <InlineMath>V</InlineMath> and all real numbers{' '}
        <InlineMath>c</InlineMath>:
        <br /><br />
        (1) <InlineMath>{'(x, y) = (y, x)'}</InlineMath> (symmetry)
        <br />
        (2) <InlineMath>{'(x + y, z) = (x, z) + (y, z)'}</InlineMath> (additivity)
        <br />
        (3) <InlineMath>{'(cx, y) = c(x, y)'}</InlineMath> (homogeneity)
        <br />
        (4) <InlineMath>{'(x, x) \\geq 0'}</InlineMath>, and <InlineMath>{'(x, x) = 0'}</InlineMath> if
        and only if <InlineMath>{'x = 0'}</InlineMath> (positivity)
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> A real linear space with an inner product is called a{' '}
        <strong>Euclidean space</strong>.
      </Callout>

      <h3>Examples of Inner Products</h3>

      <p>
        <strong>Example 1:</strong> In <InlineMath>{'V_n'}</InlineMath>, define the inner product as:
      </p>
      <MathBlock>{`(x, y) = \\sum_{i=1}^n x_i y_i`}</MathBlock>
      <p>
        This is called the <strong>standard inner product</strong> or <strong>dot product</strong>.
      </p>

      <p>
        <strong>Example 2:</strong> In the space <InlineMath>{'C(a, b)'}</InlineMath> of continuous
        functions on <InlineMath>{'[a, b]'}</InlineMath>, define:
      </p>
      <MathBlock>{`(f, g) = \\int_a^b f(t)g(t)\\, dt`}</MathBlock>

      <p>
        <strong>Example 3:</strong> In <InlineMath>{'C(a, b)'}</InlineMath>, with a fixed positive
        weight function <InlineMath>w</InlineMath>:
      </p>
      <MathBlock>{`(f, g) = \\int_a^b w(t)f(t)g(t)\\, dt`}</MathBlock>

      <p>
        <strong>Example 4:</strong> In the space of all real polynomials:
      </p>
      <MathBlock>{`(f, g) = \\int_0^\\infty e^{-t}f(t)g(t)\\, dt`}</MathBlock>

      <h3>The Cauchy-Schwarz Inequality</h3>

      <Callout type="info">
        <strong>Theorem 1.8 (Cauchy-Schwarz Inequality):</strong> In a Euclidean space{' '}
        <InlineMath>V</InlineMath>, every inner product satisfies:
        <MathBlock>{`|(x, y)|^2 \\leq (x, x)(y, y) \\quad \\text{for all } x \\text{ and } y \\text{ in } V`}</MathBlock>
        Moreover, the equality sign holds if and only if <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> are dependent.
      </Callout>

      <p>
        <strong>Proof Outline:</strong> If either <InlineMath>{'x = 0'}</InlineMath> or{' '}
        <InlineMath>{'y = 0'}</InlineMath>, the result holds trivially. Otherwise, let{' '}
        <InlineMath>{'z = ax + by'}</InlineMath> where <InlineMath>a</InlineMath> and{' '}
        <InlineMath>b</InlineMath> are scalars. Using <InlineMath>{'(z, z) \\geq 0'}</InlineMath> with
        appropriate choices <InlineMath>{'a = (y, y)'}</InlineMath> and{' '}
        <InlineMath>{'b = -(x, y)'}</InlineMath>, we obtain the inequality.
      </p>

      <h3>Norms in Euclidean Spaces</h3>

      <Callout type="info">
        <strong>Definition:</strong> In a Euclidean space <InlineMath>V</InlineMath>, the{' '}
        <strong>norm</strong> of an element <InlineMath>x</InlineMath> is defined by:
        <MathBlock>{`\\|x\\| = (x, x)^{1/2}`}</MathBlock>
      </Callout>

      <p>
        In terms of norms, the Cauchy-Schwarz inequality becomes:
      </p>
      <MathBlock>{`|(x, y)| \\leq \\|x\\| \\|y\\|`}</MathBlock>

      <Callout type="info">
        <strong>Theorem 1.9:</strong> In a Euclidean space, every norm has the following
        properties for all elements <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>{' '}
        and all scalars <InlineMath>c</InlineMath>:
        <br /><br />
        (a) <InlineMath>{'\\|x\\| = 0'}</InlineMath> if <InlineMath>{'x = 0'}</InlineMath>
        <br />
        (b) <InlineMath>{'\\|x\\| > 0'}</InlineMath> if <InlineMath>{'x \\neq 0'}</InlineMath> (positivity)
        <br />
        (c) <InlineMath>{'\\|cx\\| = |c|\\|x\\|'}</InlineMath> (homogeneity)
        <br />
        (d) <InlineMath>{'\\|x + y\\| \\leq \\|x\\| + \\|y\\|'}</InlineMath> (triangle inequality)
      </Callout>

      <h3>Angles in Euclidean Spaces</h3>

      <Callout type="info">
        <strong>Definition:</strong> In a real Euclidean space <InlineMath>V</InlineMath>, the{' '}
        <strong>angle</strong> between two nonzero elements <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> is defined to be that number <InlineMath>{'\\theta'}</InlineMath>{' '}
        in the interval <InlineMath>{'0 \\leq \\theta \\leq \\pi'}</InlineMath> which satisfies:
        <MathBlock>{`\\cos \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}`}</MathBlock>
      </Callout>

      <p>
        Note: The Cauchy-Schwarz inequality guarantees that the quotient on the right lies in
        the interval <InlineMath>{'[-1, 1]'}</InlineMath>, so there is exactly one{' '}
        <InlineMath>{'\\theta'}</InlineMath> in <InlineMath>{'[0, \\pi]'}</InlineMath> whose cosine equals
        this quotient.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The inner product structure allows us to bring geometric
        concepts—length, distance, and angle—into abstract linear spaces. This geometric
        intuition is invaluable for understanding linear algebra and its applications to
        analysis, physics, and engineering.
      </Callout>
    </LessonLayout>
  );
}
