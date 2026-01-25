import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Orthogonal Complements and Projections</h2>

      <p>
        In this section, we study orthogonal complements and projections, which are essential
        tools for approximation problems in Euclidean spaces. The key result is the
        orthogonal decomposition theorem.
      </p>

      <h3>Orthogonal Complements</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>S</InlineMath> be a subset of a Euclidean
        space <InlineMath>V</InlineMath>. An element in <InlineMath>V</InlineMath> is said to
        be <strong>orthogonal to <InlineMath>S</InlineMath></strong> if it is orthogonal to
        every element of <InlineMath>S</InlineMath>. The set of all elements orthogonal to{' '}
        <InlineMath>S</InlineMath> is denoted by <InlineMath>S^\perp</InlineMath> and is
        called "<InlineMath>S</InlineMath> perpendicular."
      </Callout>

      <p>
        The set <InlineMath>S^\perp</InlineMath> is always a subspace of{' '}
        <InlineMath>V</InlineMath>, whether or not <InlineMath>S</InlineMath> itself is one.
        When <InlineMath>S</InlineMath> is a subspace, <InlineMath>S^\perp</InlineMath> is
        called the <strong>orthogonal complement</strong> of <InlineMath>S</InlineMath>.
      </p>

      <p>
        <strong>Example:</strong> If <InlineMath>S</InlineMath> is a plane through the origin
        in <InlineMath>V_3</InlineMath>, then <InlineMath>S^\perp</InlineMath> is the line
        through the origin perpendicular to this plane.
      </p>

      <h3>The Orthogonal Decomposition Theorem</h3>

      <Callout type="info">
        <strong>Theorem 1.15 (Orthogonal Decomposition Theorem):</strong> Let{' '}
        <InlineMath>V</InlineMath> be a Euclidean space and let <InlineMath>S</InlineMath> be
        a finite-dimensional subspace of <InlineMath>V</InlineMath>. Then every element{' '}
        <InlineMath>x</InlineMath> in <InlineMath>V</InlineMath> can be represented uniquely
        as a sum:
        <MathBlock>{`x = s + s^\\perp, \\quad \\text{where $s \\in S$ and $s^\\perp \\in S^\\perp$}`}</MathBlock>
        Moreover, the norm of <InlineMath>x</InlineMath> is given by the Pythagorean formula:
        <MathBlock>\|x\|^2 = \|s\|^2 + \|s^\perp\|^2</MathBlock>
      </Callout>

      <p>
        <strong>Proof Outline:</strong> Let <InlineMath>{'\\{e_1, \\ldots, e_n\\}'}</InlineMath>{' '}
        be an orthonormal basis for <InlineMath>S</InlineMath>. Define:
      </p>
      <MathBlock>{`s = \\sum_{i=1}^n (x, e_i)e_i, \\quad s^\\perp = x - s`}</MathBlock>
      <p>
        The element <InlineMath>s</InlineMath> is the sum of the projections of{' '}
        <InlineMath>x</InlineMath> along each basis element. Since <InlineMath>s</InlineMath>{' '}
        is a linear combination of basis elements, <InlineMath>s \in S</InlineMath>. One can
        verify that <InlineMath>s^\perp</InlineMath> is orthogonal to each{' '}
        <InlineMath>e_j</InlineMath>, hence to all of <InlineMath>S</InlineMath>, so{' '}
        <InlineMath>s^\perp \in S^\perp</InlineMath>.
      </p>

      <h3>Projection onto a Subspace</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>S</InlineMath> be a finite-dimensional
        subspace of a Euclidean space <InlineMath>V</InlineMath>, with orthonormal basis{' '}
        <InlineMath>{'\\{e_1, \\ldots, e_n\\}'}</InlineMath>. For <InlineMath>x \in V</InlineMath>,
        the element:
        <MathBlock>{`s = \\sum_{i=1}^n (x, e_i)e_i`}</MathBlock>
        is called the <strong>projection of <InlineMath>x</InlineMath> on the subspace{' '}
        <InlineMath>S</InlineMath></strong>.
      </Callout>

      <h3>Best Approximation Theorem</h3>

      <Callout type="info">
        <strong>Theorem 1.16 (Approximation Theorem):</strong> Let <InlineMath>S</InlineMath>{' '}
        be a finite-dimensional subspace of a Euclidean space <InlineMath>V</InlineMath>, and
        let <InlineMath>x</InlineMath> be any element of <InlineMath>V</InlineMath>. Then the
        projection of <InlineMath>x</InlineMath> on <InlineMath>S</InlineMath> is nearer to{' '}
        <InlineMath>x</InlineMath> than any other element of <InlineMath>S</InlineMath>. That
        is, if <InlineMath>s</InlineMath> is the projection of <InlineMath>x</InlineMath> on{' '}
        <InlineMath>S</InlineMath>:
        <MathBlock>\|x - s\| \leq \|x - t\|</MathBlock>
        for all <InlineMath>t</InlineMath> in <InlineMath>S</InlineMath>; equality holds if
        and only if <InlineMath>t = s</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> By the orthogonal decomposition theorem,{' '}
        <InlineMath>x = s + s^\perp</InlineMath>. For any <InlineMath>t \in S</InlineMath>:
      </p>
      <MathBlock>x - t = (x - s) + (s - t) = s^\perp + (s - t)</MathBlock>
      <p>
        Since <InlineMath>s - t \in S</InlineMath> and{' '}
        <InlineMath>s^\perp \in S^\perp</InlineMath>, this is an orthogonal decomposition:
      </p>
      <MathBlock>\|x - t\|^2 = \|s^\perp\|^2 + \|s - t\|^2 \geq \|s^\perp\|^2 = \|x - s\|^2</MathBlock>

      <h3>Applications</h3>

      <p>
        <strong>Example 1: Approximation by Trigonometric Polynomials.</strong> In{' '}
        <InlineMath>C(0, 2\pi)</InlineMath> with inner product{' '}
        <InlineMath>{'(f, g) = \\int_0^{2\\pi} f(x)g(x)\\, dx'}</InlineMath>, let{' '}
        <InlineMath>S</InlineMath> be the subspace spanned by the orthonormal functions:
      </p>
      <MathBlock>{`\\varphi_0(x) = \\frac{1}{\\sqrt{2\\pi}}, \\quad \\varphi_{2k-1}(x) = \\frac{\\cos kx}{\\sqrt{\\pi}}, \\quad \\varphi_{2k}(x) = \\frac{\\sin kx}{\\sqrt{\\pi}}`}</MathBlock>
      <p>
        The projection <InlineMath>f_n</InlineMath> of <InlineMath>f</InlineMath> on{' '}
        <InlineMath>S</InlineMath> is the trigonometric polynomial that best approximates{' '}
        <InlineMath>f</InlineMath>:
      </p>
      <MathBlock>{`f_n(x) = \\frac{1}{2}a_0 + \\sum_{k=1}^n (a_k \\cos kx + b_k \\sin kx)`}</MathBlock>
      <p>where the Fourier coefficients are:</p>
      <MathBlock>{`a_k = \\frac{1}{\\pi} \\int_0^{2\\pi} f(x)\\cos kx\\, dx, \\quad b_k = \\frac{1}{\\pi} \\int_0^{2\\pi} f(x)\\sin kx\\, dx`}</MathBlock>

      <p>
        <strong>Example 2: Approximation by Polynomials.</strong> In{' '}
        <InlineMath>C(-1, 1)</InlineMath> with <InlineMath>{'(f, g) = \\int_{-1}^1 f(x)g(x)\\, dx'}</InlineMath>,
        using the normalized Legendre polynomials as an orthonormal basis for polynomials of
        degree <InlineMath>\leq n</InlineMath>, the projection of{' '}
        <InlineMath>f</InlineMath> gives the best polynomial approximation of degree{' '}
        <InlineMath>\leq n</InlineMath>.
      </p>

      <p>
        For example, the linear polynomial nearest to <InlineMath>\sin(\pi t)</InlineMath> on{' '}
        <InlineMath>[-1, 1]</InlineMath> is:
      </p>
      <MathBlock>{`f_1(t) = \\frac{3}{\\pi} t`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The approximation theorem is one of the most useful
        results in applied mathematics. It tells us that the best approximation to an element
        in a Euclidean space by elements in a subspace is achieved by the orthogonal
        projection. This is the theoretical foundation for least-squares approximation,
        Fourier analysis, and many numerical methods.
      </Callout>
    </LessonLayout>
  );
}
