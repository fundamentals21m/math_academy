import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section89() {
  return (
    <LessonLayout sectionId={89}>
      <h2>The Chain Rule for Vector Fields</h2>

      <p>
        The chain rule for scalar fields generalizes to vector fields. For
        compositions <InlineMath>h = f \circ g</InlineMath>, the total
        derivative of <InlineMath>h</InlineMath> is the composition of the
        total derivatives of <InlineMath>f</InlineMath> and{' '}
        <InlineMath>g</InlineMath>.
      </p>

      <h3>The Chain Rule</h3>

      <Callout type="info">
        <strong>Theorem 8.11 (Chain Rule):</strong> Let <InlineMath>f</InlineMath>{' '}
        and <InlineMath>g</InlineMath> be vector fields such that{' '}
        <InlineMath>h = f \circ g</InlineMath> is defined in a neighborhood of{' '}
        <InlineMath>a</InlineMath>. Assume <InlineMath>g</InlineMath> is
        differentiable at <InlineMath>a</InlineMath> with total derivative{' '}
        <InlineMath>g'(a)</InlineMath>, and <InlineMath>f</InlineMath> is
        differentiable at <InlineMath>b = g(a)</InlineMath> with total
        derivative <InlineMath>f'(b)</InlineMath>. Then <InlineMath>h</InlineMath>{' '}
        is differentiable at <InlineMath>a</InlineMath> and:
        <MathBlock>
          h'(a) = f'(b) \circ g'(a)
        </MathBlock>
        the composition of the linear transformations <InlineMath>f'(b)</InlineMath>{' '}
        and <InlineMath>g'(a)</InlineMath>.
      </Callout>

      <h3>Matrix Form</h3>

      <p>
        Since composition of linear transformations corresponds to matrix
        multiplication, we have the <strong>matrix form of the chain rule</strong>:
      </p>
      <MathBlock>{`Dh(a) = Df(b) \\cdot Dg(a), \\quad \\text{where } b = g(a)`}</MathBlock>

      <h3>Component Form</h3>

      <p>
        Suppose <InlineMath>{`a \\in \\mathbb{R}^p`}</InlineMath>,{' '}
        <InlineMath>{`b = g(a) \\in \\mathbb{R}^n`}</InlineMath>, and{' '}
        <InlineMath>{`f(b) \\in \\mathbb{R}^m`}</InlineMath>. Write:
      </p>
      <MathBlock>
        g = (g_1, \ldots, g_n), \quad f = (f_1, \ldots, f_m), \quad h = (h_1, \ldots, h_m)
      </MathBlock>

      <p>
        The matrix equation gives <InlineMath>mp</InlineMath> scalar equations:
      </p>
      <MathBlock>{`D_j h_i(a) = \\sum_{k=1}^n D_k f_i(b) D_j g_k(a)`}</MathBlock>
      <p>
        for <InlineMath>i = 1, \ldots, m</InlineMath> and{' '}
        <InlineMath>j = 1, \ldots, p</InlineMath>.
      </p>

      <h3>Special Case: Scalar Fields</h3>

      <p>
        When <InlineMath>f</InlineMath> is a scalar field (<InlineMath>m = 1</InlineMath>),
        the chain rule gives <InlineMath>p</InlineMath> equations:
      </p>
      <MathBlock>{`D_j h(a) = \\sum_{k=1}^n D_k f(b) D_j g_k(a), \\quad j = 1, \\ldots, p`}</MathBlock>

      <p>
        For <InlineMath>p = 2</InlineMath>, <InlineMath>n = 2</InlineMath>,
        with <InlineMath>a = (s, t)</InlineMath> and <InlineMath>b = (x, y)</InlineMath>:
      </p>
      <MathBlock>{`\\frac{\\partial h}{\\partial s} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial s} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial s}`}</MathBlock>
      <MathBlock>{`\\frac{\\partial h}{\\partial t} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial t}`}</MathBlock>

      <h3>Example: Polar Coordinates</h3>

      <p>
        Let <InlineMath>\varphi(r, \theta) = f(r\cos\theta, r\sin\theta)</InlineMath>.
        Express <InlineMath>{`\\partial\\varphi/\\partial r`}</InlineMath> and{' '}
        <InlineMath>{`\\partial\\varphi/\\partial\\theta`}</InlineMath> in terms
        of partial derivatives of <InlineMath>f</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> With <InlineMath>x = r\cos\theta</InlineMath>{' '}
        and <InlineMath>y = r\sin\theta</InlineMath>:
      </p>
      <MathBlock>{`\\frac{\\partial x}{\\partial r} = \\cos\\theta, \\quad \\frac{\\partial y}{\\partial r} = \\sin\\theta`}</MathBlock>
      <MathBlock>{`\\frac{\\partial x}{\\partial\\theta} = -r\\sin\\theta, \\quad \\frac{\\partial y}{\\partial\\theta} = r\\cos\\theta`}</MathBlock>

      <p>
        By the chain rule:
      </p>
      <MathBlock>{`\\frac{\\partial\\varphi}{\\partial r} = \\frac{\\partial f}{\\partial x} \\cos\\theta + \\frac{\\partial f}{\\partial y} \\sin\\theta`}</MathBlock>
      <MathBlock>{`\\frac{\\partial\\varphi}{\\partial\\theta} = -r\\frac{\\partial f}{\\partial x} \\sin\\theta + r\\frac{\\partial f}{\\partial y} \\cos\\theta`}</MathBlock>

      <h3>Second-Order Derivatives</h3>

      <p>
        To find <InlineMath>{`\\partial^2\\varphi/\\partial\\theta^2`}</InlineMath>,
        differentiate{' '}
        <InlineMath>{`\\partial\\varphi/\\partial\\theta`}</InlineMath> with
        respect to <InlineMath>\theta</InlineMath>, keeping in mind that{' '}
        <InlineMath>{`\\partial f/\\partial x`}</InlineMath> and{' '}
        <InlineMath>{`\\partial f/\\partial y`}</InlineMath> are themselves
        composite functions requiring the chain rule.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The chain rule for vector fields states
        that the derivative of a composition is the composition of derivatives.
        In matrix form: Jacobians multiply. This powerful principle reduces
        complex derivative computations to matrix multiplication—enabling
        systematic handling of coordinate transformations and general mappings.
      </Callout>
    </LessonLayout>
  );
}
