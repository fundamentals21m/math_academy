import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Matrix Representations</h2>

      <p>
        A linear transformation <InlineMath>T: V \to W</InlineMath> of finite-dimensional
        spaces is completely determined by its action on a basis. When we choose bases for
        both <InlineMath>V</InlineMath> and <InlineMath>W</InlineMath>, we can represent{' '}
        <InlineMath>T</InlineMath> by a rectangular array of numbers called a{' '}
        <strong>matrix</strong>.
      </p>

      <h3>Constructing the Matrix</h3>

      <p>
        Let <InlineMath>\dim V = n</InlineMath>, <InlineMath>\dim W = m</InlineMath>, and
        choose ordered bases <InlineMath>(e_1, \ldots, e_n)</InlineMath> for{' '}
        <InlineMath>V</InlineMath> and <InlineMath>(w_1, \ldots, w_m)</InlineMath> for{' '}
        <InlineMath>W</InlineMath>. Each image <InlineMath>T(e_k)</InlineMath> can be
        expressed as:
      </p>
      <MathBlock>{`T(e_k) = \\sum_{i=1}^m t_{ik}w_i`}</MathBlock>

      <p>
        The scalars <InlineMath>{'t_{1k}, \\ldots, t_{mk}'}</InlineMath> form a
        column vector. Arranging these columns side by side gives the{' '}
        <strong>matrix representation</strong>:
      </p>
      <MathBlock>{`\\begin{bmatrix} t_{11} & t_{12} & \\cdots & t_{1n} \\\\ t_{21} & t_{22} & \\cdots & t_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ t_{m1} & t_{m2} & \\cdots & t_{mn} \\end{bmatrix}`}</MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> A rectangular array with <InlineMath>m</InlineMath> rows
        and <InlineMath>n</InlineMath> columns is called an{' '}
        <InlineMath>m \times n</InlineMath> <strong>matrix</strong>. The entry{' '}
        <InlineMath>{'t_{ik}'}</InlineMath> is the <strong>ik-entry</strong>, where{' '}
        <InlineMath>i</InlineMath> indicates the row and <InlineMath>k</InlineMath> the column.
      </Callout>

      <h3>Computing Images Using Matrices</h3>

      <Callout type="info">
        <strong>Theorem 2.13:</strong> Let <InlineMath>{'T \\in \\mathcal{L}(V, W)'}</InlineMath>{' '}
        with <InlineMath>\dim V = n</InlineMath>, <InlineMath>\dim W = m</InlineMath>. Let{' '}
        <InlineMath>{'(t_{ik})'}</InlineMath> be the matrix determined by:
        <MathBlock>{`T(e_k) = \\sum_{i=1}^m t_{ik}w_i`}</MathBlock>
        Then an element <InlineMath>{'x = \\sum_{k=1}^n x_k e_k'}</InlineMath> with
        components <InlineMath>(x_1, \ldots, x_n)</InlineMath> is mapped to{' '}
        <InlineMath>{'T(x) = \\sum_{i=1}^m y_i w_i'}</InlineMath> where:
        <MathBlock>{`y_i = \\sum_{k=1}^n t_{ik}x_k \\quad \\text{for $i = 1, \\ldots, m$}`}</MathBlock>
      </Callout>

      <h3>Examples</h3>

      <p>
        <strong>Example 1:</strong> The <InlineMath>2 \times 3</InlineMath> matrix:
      </p>
      <MathBlock>{`\\begin{bmatrix} 3 & 1 & -2 \\\\ 1 & 0 & 4 \\end{bmatrix}`}</MathBlock>
      <p>
        represents <InlineMath>T: V_3 \to V_2</InlineMath> mapping{' '}
        <InlineMath>(x_1, x_2, x_3)</InlineMath> to{' '}
        <InlineMath>(3x_1 + x_2 - 2x_3, x_1 + 4x_3)</InlineMath>.
      </p>

      <p>
        <strong>Example 2 (Differentiation):</strong> Let <InlineMath>D</InlineMath> map
        polynomials of degree <InlineMath>\leq 3</InlineMath> to polynomials of degree{' '}
        <InlineMath>\leq 2</InlineMath>. Using basis <InlineMath>(1, x, x^2, x^3)</InlineMath>{' '}
        for domain and <InlineMath>(1, x, x^2)</InlineMath> for codomain:
      </p>
      <MathBlock>
        D(1) = 0, \quad D(x) = 1, \quad D(x^2) = 2x, \quad D(x^3) = 3x^2
      </MathBlock>
      <p>The matrix representation is:</p>
      <MathBlock>{`\\begin{bmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 0 & 0 & 3 \\end{bmatrix}`}</MathBlock>

      <h3>Dependence on Basis Choice</h3>

      <p>
        The matrix representation depends on the choice of bases. Using a different basis
        gives a different matrix representing the same transformation. For example, using
        basis <InlineMath>(x^2, x, 1)</InlineMath> for the codomain instead reverses the
        order of rows.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Matrix representations convert abstract linear
        transformations into concrete arrays of numbers. Once we have a matrix, computing
        images reduces to arithmetic. Different basis choices give different matrices, but
        they all represent the same underlying transformation. This flexibility is both
        powerful and a source of rich theory about how matrices transform under basis changes.
      </Callout>
    </LessonLayout>
  );
}
