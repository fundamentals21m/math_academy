import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section109() {
  return (
    <LessonLayout sectionId={109}>
      <h2>First Fundamental Theorem for Line Integrals</h2>

      <p>
        The first fundamental theorem states that every indefinite integral of a
        continuous function <InlineMath>{'f'}</InlineMath> has a derivative equal to{' '}
        <InlineMath>{'f'}</InlineMath>. That is, if{' '}
        <InlineMath>{'\\varphi(x) = \\int_a^x f(t) \\, dt'}</InlineMath>, then at
        points of continuity of <InlineMath>{'f'}</InlineMath> we have{' '}
        <InlineMath>{`\\varphi'(x) = f(x)`}</InlineMath>.
      </p>

      <p>
        We now extend this theorem to line integrals.
      </p>

      <h3>The Setup</h3>

      <p>
        We begin with a vector field <InlineMath>{'f'}</InlineMath>, continuous on an
        open connected set <InlineMath>{'S'}</InlineMath>, and integrate it along a
        piecewise smooth curve <InlineMath>{'C'}</InlineMath> from a fixed point{' '}
        <InlineMath>{'\\mathbf{a}'}</InlineMath> in <InlineMath>{'S'}</InlineMath> to an
        arbitrary point <InlineMath>{'\\mathbf{x}'}</InlineMath>. Then we let{' '}
        <InlineMath>{'\\varphi'}</InlineMath> denote the scalar field defined by the line
        integral:
      </p>
      <MathBlock>{`\\varphi(\\mathbf{x}) = \\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha`}</MathBlock>
      <p>
        where <InlineMath>{'\\alpha'}</InlineMath> describes <InlineMath>{'C'}</InlineMath>.
      </p>

      <p>
        Since <InlineMath>{'S'}</InlineMath> is connected, each point{' '}
        <InlineMath>{'\\mathbf{x}'}</InlineMath> in <InlineMath>{'S'}</InlineMath> can be
        reached by such a curve. For this definition of{' '}
        <InlineMath>{'\\varphi(\\mathbf{x})'}</InlineMath> to be unambiguous, we need
        the integral to depend only on <InlineMath>{'\\mathbf{x}'}</InlineMath> and not on
        the particular path used. Therefore, we require the line integral of{' '}
        <InlineMath>{'f'}</InlineMath> to be <strong>independent of the path</strong> in{' '}
        <InlineMath>{'S'}</InlineMath>.
      </p>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 10.4 (First Fundamental Theorem for Line Integrals):</strong>{' '}
        Let <InlineMath>{'f'}</InlineMath> be a vector field that is continuous on an
        open connected set <InlineMath>{'S'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, and assume that the line integral
        of <InlineMath>{'f'}</InlineMath> is independent of the path in{' '}
        <InlineMath>{'S'}</InlineMath>. Let <InlineMath>{'\\mathbf{a}'}</InlineMath> be a
        fixed point of <InlineMath>{'S'}</InlineMath> and define a scalar field{' '}
        <InlineMath>{'\\varphi'}</InlineMath> on <InlineMath>{'S'}</InlineMath> by:
        <MathBlock>{`\\varphi(\\mathbf{x}) = \\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha`}</MathBlock>
        where <InlineMath>{'\\alpha'}</InlineMath> is any piecewise smooth path in{' '}
        <InlineMath>{'S'}</InlineMath> joining <InlineMath>{'\\mathbf{a}'}</InlineMath> to{' '}
        <InlineMath>{'\\mathbf{x}'}</InlineMath>. Then the gradient of{' '}
        <InlineMath>{'\\varphi'}</InlineMath> exists and equals <InlineMath>{'f'}</InlineMath>;
        that is:
        <MathBlock>{`\\nabla\\varphi(\\mathbf{x}) = f(\\mathbf{x}) \\quad \\text{for every} \\quad \\mathbf{x} \\in S`}</MathBlock>
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        We prove that the partial derivative{' '}
        <InlineMath>{'D_k\\varphi(\\mathbf{x})'}</InlineMath> exists and equals{' '}
        <InlineMath>{'f_k(\\mathbf{x})'}</InlineMath>, the <InlineMath>{'k'}</InlineMath>th
        component of <InlineMath>{'f(\\mathbf{x})'}</InlineMath>, for each{' '}
        <InlineMath>{'k = 1, 2, \\ldots, n'}</InlineMath>.
      </p>

      <p>
        Let <InlineMath>{'B(\\mathbf{x}; r)'}</InlineMath> be an{' '}
        <InlineMath>{'n'}</InlineMath>-ball with center at{' '}
        <InlineMath>{'\\mathbf{x}'}</InlineMath> and radius <InlineMath>{'r'}</InlineMath>{' '}
        lying in <InlineMath>{'S'}</InlineMath>. If <InlineMath>{'\\mathbf{y}'}</InlineMath>{' '}
        is a unit vector, then{' '}
        <InlineMath>{'\\mathbf{x} + h\\mathbf{y}'}</InlineMath> also lies in{' '}
        <InlineMath>{'S'}</InlineMath> for every real <InlineMath>{'h'}</InlineMath>{' '}
        satisfying <InlineMath>{'0 < |h| < r'}</InlineMath>.
      </p>

      <p>
        By the additive property of line integrals:
      </p>
      <MathBlock>{`\\varphi(\\mathbf{x} + h\\mathbf{y}) - \\varphi(\\mathbf{x}) = \\int_{\\mathbf{x}}^{\\mathbf{x} + h\\mathbf{y}} f \\cdot d\\alpha`}</MathBlock>

      <p>
        Using the line segment from <InlineMath>{'\\mathbf{x}'}</InlineMath> to{' '}
        <InlineMath>{'\\mathbf{x} + h\\mathbf{y}'}</InlineMath> parametrized by{' '}
        <InlineMath>{'\\alpha(t) = \\mathbf{x} + th\\mathbf{y}'}</InlineMath> for{' '}
        <InlineMath>{'0 \\leq t \\leq 1'}</InlineMath>, we get:
      </p>
      <MathBlock>{`\\frac{\\varphi(\\mathbf{x} + h\\mathbf{y}) - \\varphi(\\mathbf{x})}{h} = \\int_0^1 f(\\mathbf{x} + th\\mathbf{y}) \\cdot \\mathbf{y} \\, dt`}</MathBlock>

      <p>
        Taking <InlineMath>{'\\mathbf{y} = \\mathbf{e}_k'}</InlineMath> (the{' '}
        <InlineMath>{'k'}</InlineMath>th unit coordinate vector), the integrand becomes{' '}
        <InlineMath>{'f_k(\\mathbf{x} + th\\mathbf{e}_k)'}</InlineMath>. Define:
      </p>
      <MathBlock>{`g(t) = \\int_0^t f_k(\\mathbf{x} + u\\mathbf{e}_k) \\, du`}</MathBlock>

      <p>
        Since <InlineMath>{'f_k'}</InlineMath> is continuous, the ordinary first
        fundamental theorem tells us{' '}
        <InlineMath>{`g'(t) = f_k(\\mathbf{x} + t\\mathbf{e}_k)`}</InlineMath>. In
        particular, <InlineMath>{`g'(0) = f_k(\\mathbf{x})`}</InlineMath>. Taking{' '}
        <InlineMath>{'h \\to 0'}</InlineMath>:
      </p>
      <MathBlock>{`D_k\\varphi(\\mathbf{x}) = \\lim_{h \\to 0} \\frac{\\varphi(\\mathbf{x} + h\\mathbf{e}_k) - \\varphi(\\mathbf{x})}{h} = g'(0) = f_k(\\mathbf{x})`}</MathBlock>

      <h3>Significance</h3>

      <p>
        This theorem shows that if a vector field has path-independent line integrals,
        then it must be a gradient. Combined with Theorem 10.3, we have a complete
        characterization: a continuous vector field is a gradient if and only if its
        line integral is independent of the path.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The first fundamental theorem for line integrals
        is the converse of the second: if line integrals are path-independent, then{' '}
        <InlineMath>{'f'}</InlineMath> must be a gradient. The "indefinite line integral"
        <InlineMath>{'\\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha'}</InlineMath>{' '}
        serves as a potential function whose gradient recovers <InlineMath>{'f'}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
