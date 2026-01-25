import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section88() {
  return (
    <LessonLayout sectionId={88}>
      <h2>Derivatives of Vector Fields</h2>

      <p>
        We now extend derivative theory from scalar fields to vector fields.
        The extension is straightforward: we apply the scalar field definitions
        component by component.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let{' '}
        <InlineMath>{`f: S \\to \\mathbb{R}^m`}</InlineMath> be a vector field
        defined on <InlineMath>{`S \\subseteq \\mathbb{R}^n`}</InlineMath>. If{' '}
        <InlineMath>a</InlineMath> is an interior point and{' '}
        <InlineMath>{`y \\in \\mathbb{R}^n`}</InlineMath>, the{' '}
        <strong>derivative of f at a with respect to y</strong> is:
        <MathBlock>{`f'(a; y) = \\lim_{h \\to 0} \\frac{f(a + hy) - f(a)}{h}`}</MathBlock>
        when this limit exists. The derivative{' '}
        <InlineMath>f'(a; y)</InlineMath> is a vector in{' '}
        <InlineMath>{`\\mathbb{R}^m`}</InlineMath>.
      </Callout>

      <p>
        Let <InlineMath>f_k</InlineMath> denote the <InlineMath>k</InlineMath>th
        component of <InlineMath>f</InlineMath>. The derivative{' '}
        <InlineMath>f'(a; y)</InlineMath> exists if and only if{' '}
        <InlineMath>{`f'_k(a; y)`}</InlineMath> exists for each{' '}
        <InlineMath>k = 1, \ldots, m</InlineMath>, in which case:
      </p>
      <MathBlock>{`f'(a; y) = (f'_1(a; y), \\ldots, f'_m(a; y)) = \\sum_{k=1}^m f'_k(a; y) e_k`}</MathBlock>

      <h3>Differentiability of Vector Fields</h3>

      <Callout type="info">
        <strong>Definition:</strong> A vector field{' '}
        <InlineMath>{`f: S \\to \\mathbb{R}^m`}</InlineMath> is{' '}
        <strong>differentiable at a</strong> if there exists a linear
        transformation{' '}
        <InlineMath>{`T_a: \\mathbb{R}^n \\to \\mathbb{R}^m`}</InlineMath>{' '}
        such that:
        <MathBlock>
          f(a + v) = f(a) + T_a(v) + \|v\| E(a, v)
        </MathBlock>
        where <InlineMath>{`E(a, v) \\to 0`}</InlineMath> as{' '}
        <InlineMath>{`\\|v\\| \\to 0`}</InlineMath>. The term{' '}
        <InlineMath>E(a, v)</InlineMath> is a vector in{' '}
        <InlineMath>{`\\mathbb{R}^m`}</InlineMath>. The transformation{' '}
        <InlineMath>T_a</InlineMath> is the <strong>total derivative</strong>.
      </Callout>

      <h3>The Total Derivative for Vector Fields</h3>

      <Callout type="info">
        <strong>Theorem 8.9:</strong> Assume <InlineMath>f</InlineMath> is
        differentiable at <InlineMath>a</InlineMath> with total derivative{' '}
        <InlineMath>T_a</InlineMath>. Then <InlineMath>f'(a; y)</InlineMath>{' '}
        exists for every <InlineMath>{`y \\in \\mathbb{R}^n`}</InlineMath> and:
        <MathBlock>
          T_a(y) = f'(a; y)
        </MathBlock>
        Moreover, if <InlineMath>{`f = (f_1, \\ldots, f_m)`}</InlineMath>:
        <MathBlock>
          T_a(y) = (\nabla f_1(a) \cdot y, \ldots, \nabla f_m(a) \cdot y)
        </MathBlock>
      </Callout>

      <h3>The Jacobian Matrix</h3>

      <p>
        The formula <InlineMath>T_a(y)</InlineMath> can be written as a matrix product:
      </p>
      <MathBlock>
        T_a(y) = Df(a) \cdot y
      </MathBlock>
      <p>
        where <InlineMath>Df(a)</InlineMath> is the{' '}
        <InlineMath>m \times n</InlineMath> matrix whose{' '}
        <InlineMath>k</InlineMath>th row is{' '}
        <InlineMath>\nabla f_k(a)</InlineMath>. This is called the{' '}
        <strong>Jacobian matrix</strong> of <InlineMath>f</InlineMath> at{' '}
        <InlineMath>a</InlineMath>:
      </p>
      <MathBlock>{`Df(a) = \\begin{bmatrix} D_1 f_1(a) & D_2 f_1(a) & \\cdots & D_n f_1(a) \\\\ D_1 f_2(a) & D_2 f_2(a) & \\cdots & D_n f_2(a) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ D_1 f_m(a) & D_2 f_m(a) & \\cdots & D_n f_m(a) \\end{bmatrix}`}</MathBlock>

      <p>
        The <InlineMath>(k, j)</InlineMath> entry is the partial derivative{' '}
        <InlineMath>D_j f_k(a)</InlineMath>.
      </p>

      <h3>Notation</h3>

      <p>
        The total derivative <InlineMath>T_a</InlineMath> is also written as{' '}
        <InlineMath>f'(a)</InlineMath>:
      </p>
      <ul>
        <li>
          <InlineMath>f'(a)</InlineMath>: the total derivative (a linear
          transformation)
        </li>
        <li>
          <InlineMath>Df(a)</InlineMath>: the Jacobian matrix (the matrix
          representation)
        </li>
      </ul>

      <p>
        The Taylor formula becomes:
      </p>
      <MathBlock>
        f(a + v) = f(a) + f'(a)(v) + \|v\| E(a, v)
      </MathBlock>

      <h3>Differentiability Implies Continuity</h3>

      <Callout type="info">
        <strong>Theorem 8.10:</strong> If a vector field <InlineMath>f</InlineMath>{' '}
        is differentiable at <InlineMath>a</InlineMath>, then{' '}
        <InlineMath>f</InlineMath> is continuous at <InlineMath>a</InlineMath>.
      </Callout>

      <p>
        The proof uses the Taylor formula: as <InlineMath>v \to 0</InlineMath>,
        both <InlineMath>{`\\|v\\| E(a, v)`}</InlineMath> and{' '}
        <InlineMath>f'(a)(v)</InlineMath> tend to 0 (the latter because linear
        transformations are continuous at 0).
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> For vector fields, the total derivative
        is a linear transformation rather than a number or vector. Its matrix
        representation—the Jacobian—contains all partial derivatives of all
        components. The Jacobian generalizes the derivative to mappings between
        spaces of any dimension.
      </Callout>
    </LessonLayout>
  );
}
