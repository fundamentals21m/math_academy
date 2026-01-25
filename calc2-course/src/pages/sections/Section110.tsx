import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section110() {
  return (
    <LessonLayout sectionId={110}>
      <h2>Necessary and Sufficient Conditions for a Gradient</h2>

      <p>
        The first and second fundamental theorems for line integrals together
        characterize gradient fields completely.
      </p>

      <h3>The Equivalence Theorem</h3>

      <Callout type="info">
        <strong>Theorem 10.5:</strong> Let <InlineMath>{'f'}</InlineMath> be a vector
        field continuous on an open connected set <InlineMath>{'S'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>. Then the following three
        statements are equivalent:
        <br /><br />
        <strong>(a)</strong> <InlineMath>{'f'}</InlineMath> is the gradient of some
        potential function in <InlineMath>{'S'}</InlineMath>.
        <br /><br />
        <strong>(b)</strong> The line integral of <InlineMath>{'f'}</InlineMath> is
        independent of the path in <InlineMath>{'S'}</InlineMath>.
        <br /><br />
        <strong>(c)</strong> The line integral of <InlineMath>{'f'}</InlineMath> is zero
        around every piecewise smooth closed path in <InlineMath>{'S'}</InlineMath>.
      </Callout>

      <h3>Proof</h3>

      <p>
        We prove that (b) implies (a), (a) implies (c), and (c) implies (b).
      </p>

      <p>
        <strong>(b) implies (a):</strong> This follows from the first fundamental theorem
        (Theorem 10.4).
      </p>

      <p>
        <strong>(a) implies (c):</strong> This follows from the second fundamental theorem
        (Theorem 10.3). If <InlineMath>{'f = \\nabla\\varphi'}</InlineMath> and{' '}
        <InlineMath>{'\\mathbf{b} = \\mathbf{a}'}</InlineMath> (closed path), then:
      </p>
      <MathBlock>{`\\oint f \\cdot d\\alpha = \\varphi(\\mathbf{a}) - \\varphi(\\mathbf{a}) = 0`}</MathBlock>

      <p>
        <strong>(c) implies (b):</strong> Assume (c) holds. Let <InlineMath>{'C_1'}</InlineMath>{' '}
        and <InlineMath>{'C_2'}</InlineMath> be any two piecewise smooth curves in{' '}
        <InlineMath>{'S'}</InlineMath> with the same end points. Let{' '}
        <InlineMath>{'C_1'}</InlineMath> be the graph of a function{' '}
        <InlineMath>{'\\alpha'}</InlineMath> defined on <InlineMath>{'[a, b]'}</InlineMath>,
        and let <InlineMath>{'C_2'}</InlineMath> be the graph of a function{' '}
        <InlineMath>{'\\beta'}</InlineMath> defined on <InlineMath>{'[c, d]'}</InlineMath>.
      </p>

      <p>
        Define a new function <InlineMath>{'\\gamma'}</InlineMath> as follows:
      </p>
      <MathBlock>{`\\gamma(t) = \\begin{cases} \\alpha(t) & \\text{if} \\; a \\leq t \\leq b \\\\ \\beta(b + d - t) & \\text{if} \\; b < t \\leq b + d - c \\end{cases}`}</MathBlock>

      <p>
        Then <InlineMath>{'\\gamma'}</InlineMath> describes a closed curve{' '}
        <InlineMath>{'C'}</InlineMath> such that:
      </p>
      <MathBlock>{`\\oint_C f \\cdot d\\gamma = \\int_{C_1} f \\cdot d\\alpha - \\int_{C_2} f \\cdot d\\beta`}</MathBlock>

      <p>
        Since <InlineMath>{'\\oint_C f \\cdot d\\gamma = 0'}</InlineMath> by
        assumption (c), we have{' '}
        <InlineMath>{'\\int_{C_1} f \\cdot d\\alpha = \\int_{C_2} f \\cdot d\\beta'}</InlineMath>,
        so the integral is independent of the path.
      </p>

      <h3>Important Caution</h3>

      <Callout type="warning">
        <strong>Note:</strong> If{' '}
        <InlineMath>{'\\oint_C f \\neq 0'}</InlineMath> for a particular closed curve{' '}
        <InlineMath>{'C'}</InlineMath>, then <InlineMath>{'f'}</InlineMath> is{' '}
        <strong>not</strong> a gradient.
        <br /><br />
        However, if a line integral <InlineMath>{'\\oint_C f'}</InlineMath> is zero
        for a particular closed curve <InlineMath>{'C'}</InlineMath> (or even for
        infinitely many closed curves), it does <strong>not</strong> necessarily
        follow that <InlineMath>{'f'}</InlineMath> is a gradient.
        <br /><br />
        For example, the line integral of{' '}
        <InlineMath>{'f(x, y) = x\\mathbf{i} + xy\\mathbf{j}'}</InlineMath> is zero
        for every circle with center at the origin. Nevertheless, this vector field
        is not a gradient.
      </Callout>

      <h3>Necessary Conditions (Component Test)</h3>

      <Callout type="info">
        <strong>Theorem 10.6:</strong> Let{' '}
        <InlineMath>{'f = (f_1, \\ldots, f_n)'}</InlineMath> be a continuously
        differentiable vector field on an open set <InlineMath>{'S'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>. If <InlineMath>{'f'}</InlineMath> is
        a gradient on <InlineMath>{'S'}</InlineMath>, then:
        <MathBlock>{`D_i f_j(\\mathbf{x}) = D_j f_i(\\mathbf{x})`}</MathBlock>
        for <InlineMath>{'i, j = 1, 2, \\ldots, n'}</InlineMath> and every{' '}
        <InlineMath>{'\\mathbf{x}'}</InlineMath> in <InlineMath>{'S'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> If <InlineMath>{'f'}</InlineMath> is a gradient, then{' '}
        <InlineMath>{'f = \\nabla\\varphi'}</InlineMath> for some potential{' '}
        <InlineMath>{'\\varphi'}</InlineMath>. This means{' '}
        <InlineMath>{'f_j = D_j\\varphi'}</InlineMath> for each{' '}
        <InlineMath>{'j'}</InlineMath>. Differentiating:
      </p>
      <MathBlock>{`D_i f_j = D_i D_j \\varphi \\quad \\text{and} \\quad D_j f_i = D_j D_i \\varphi`}</MathBlock>

      <p>
        Since the partial derivatives <InlineMath>{'D_if_j'}</InlineMath> and{' '}
        <InlineMath>{'D_jf_i'}</InlineMath> are continuous on <InlineMath>{'S'}</InlineMath>,
        the two mixed partial derivatives{' '}
        <InlineMath>{'D_iD_j\\varphi'}</InlineMath> and{' '}
        <InlineMath>{'D_jD_i\\varphi'}</InlineMath> must be equal on{' '}
        <InlineMath>{'S'}</InlineMath>.
      </p>

      <h3>In Two and Three Dimensions</h3>

      <p>
        For <InlineMath>{'f(x, y) = P(x, y)\\mathbf{i} + Q(x, y)\\mathbf{j}'}</InlineMath>:
      </p>
      <MathBlock>{`\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}`}</MathBlock>

      <p>
        For <InlineMath>{'f(x, y, z) = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}'}</InlineMath>:
      </p>
      <MathBlock>{`\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}, \\quad \\frac{\\partial P}{\\partial z} = \\frac{\\partial R}{\\partial x}, \\quad \\frac{\\partial Q}{\\partial z} = \\frac{\\partial R}{\\partial y}`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Three equivalent conditions characterize
        gradients: (1) being a gradient, (2) path-independent integrals, (3) zero
        circulation. The component test{' '}
        <InlineMath>{'D_if_j = D_jf_i'}</InlineMath> is a necessary condition that
        can rule out non-gradients without computing integrals. However, it is not
        always sufficient—the topology of <InlineMath>{'S'}</InlineMath> matters!
      </Callout>
    </LessonLayout>
  );
}
