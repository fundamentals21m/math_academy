import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section72() {
  return (
    <LessonLayout sectionId={72}>
      <h2>Alternate Methods for Computing e^tA</h2>

      <p>
        While Putzer's method is completely general, simpler formulas exist for
        certain special cases. In this section we present alternative methods
        for three important cases.
      </p>

      <h3>Case 1: All Eigenvalues Equal</h3>

      <Callout type="info">
        <strong>Formula:</strong> If all eigenvalues of an{' '}
        <InlineMath>n \times n</InlineMath> matrix <InlineMath>A</InlineMath>{' '}
        equal <InlineMath>\lambda</InlineMath>, then:
        <MathBlock>
          {`e^{tA} = e^{\\lambda t} \\sum_{k=0}^{n-1} \\frac{t^k}{k!}(A - \\lambda I)^k`}
        </MathBlock>
      </Callout>

      <p>
        <strong>Derivation:</strong> Write <InlineMath>A = \lambda I + N</InlineMath>{' '}
        where <InlineMath>N = A - \lambda I</InlineMath>. Since{' '}
        <InlineMath>\lambda I</InlineMath> and <InlineMath>N</InlineMath> commute:
      </p>
      <MathBlock>
        {`e^{tA} = e^{t\\lambda I + tN} = e^{t\\lambda I} e^{tN} = e^{\\lambda t} e^{tN}`}
      </MathBlock>

      <p>
        By Cayley-Hamilton, <InlineMath>{`N^n = (A - \\lambda I)^n = 0`}</InlineMath>,
        so the series for <InlineMath>{`e^{tN}`}</InlineMath> terminates.
      </p>

      <h3>Case 2: All Eigenvalues Distinct</h3>

      <Callout type="info">
        <strong>Formula:</strong> If <InlineMath>A</InlineMath> has{' '}
        <InlineMath>n</InlineMath> distinct eigenvalues{' '}
        <InlineMath>{`\\lambda_1, \\ldots, \\lambda_n`}</InlineMath>, then:
        <MathBlock>
          {`e^{tA} = \\sum_{i=1}^n e^{\\lambda_i t} \\prod_{j \\neq i} \\frac{A - \\lambda_j I}{\\lambda_i - \\lambda_j}`}
        </MathBlock>
      </Callout>

      <p>
        This is the Lagrange interpolation formula applied to matrix exponentials.
      </p>

      <h3>Case 3: One Simple Eigenvalue, One Repeated</h3>

      <p>
        For a <InlineMath>3 \times 3</InlineMath> matrix with eigenvalues{' '}
        <InlineMath>\lambda</InlineMath> (multiplicity 1) and{' '}
        <InlineMath>\mu</InlineMath> (multiplicity 2):
      </p>
      <MathBlock>
        {`e^{tA} = e^{\\lambda t} \\frac{(A - \\mu I)^2}{(\\lambda - \\mu)^2} + e^{\\mu t} \\left[ I - \\frac{(A - \\mu I)^2}{(\\lambda - \\mu)^2} + t(A - \\mu I)\\frac{A - \\lambda I}{\\mu - \\lambda} \\right]`}
      </MathBlock>

      <h3>Special 2x2 Matrices</h3>

      <p>
        <strong>Rotation matrix:</strong> For{' '}
        <InlineMath>{`A = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}`}</InlineMath>:
      </p>
      <MathBlock>
        {`e^{tA} = \\begin{bmatrix} \\cos t & \\sin t \\\\ -\\sin t & \\cos t \\end{bmatrix}`}
      </MathBlock>

      <p>
        <strong>General rotation:</strong> For{' '}
        <InlineMath>{`A = \\begin{bmatrix} a & b \\\\ -b & a \\end{bmatrix}`}</InlineMath>:
      </p>
      <MathBlock>
        {`e^{tA} = e^{at} \\begin{bmatrix} \\cos bt & \\sin bt \\\\ -\\sin bt & \\cos bt \\end{bmatrix}`}
      </MathBlock>

      <h3>Summary of Methods</h3>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #444', padding: '0.5rem', textAlign: 'left' }}>Eigenvalue Structure</th>
            <th style={{ border: '1px solid #444', padding: '0.5rem', textAlign: 'left' }}>Best Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>All distinct</td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Diagonalization or Lagrange formula</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>All equal to <InlineMath>\lambda</InlineMath></td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Nilpotent decomposition</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Complex conjugate pair</td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Euler's formula</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>General case</td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Putzer's method</td>
          </tr>
        </tbody>
      </table>

      <Callout type="success">
        <strong>Key Insight:</strong> The choice of method depends on the eigenvalue
        structure of the matrix. For numerical computation with large matrices,
        other approaches (such as Pade approximation or scaling-and-squaring) are
        often more efficient. However, for theoretical work and small matrices,
        these explicit formulas provide closed-form solutions that reveal the
        qualitative behavior of the system.
      </Callout>
    </LessonLayout>
  );
}
