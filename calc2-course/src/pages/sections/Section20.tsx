import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Introduction to Determinants</h2>

      <p>
        In many applications of linear algebra to geometry and analysis, the concept of a
        determinant plays an important part. We begin by recalling the definitions for
        small matrices and then develop the general theory.
      </p>

      <h3>Determinants of Order Two</h3>

      <Callout type="info">
        <strong>Definition:</strong> The determinant of a{' '}
        <InlineMath>2 \times 2</InlineMath> matrix is defined by:
        <MathBlock>{`\\det \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix} = a_{11}a_{22} - a_{12}a_{21}`}</MathBlock>
      </Callout>

      <p>
        The determinant is a <em>number</em> assigned to the matrix. We use vertical bars
        to denote determinants and square brackets for matrices:
      </p>
      <MathBlock>{`\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = \\det \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}`}</MathBlock>

      <h3>Determinants of Order Three</h3>

      <Callout type="info">
        <strong>Definition:</strong> The determinant of a{' '}
        <InlineMath>3 \times 3</InlineMath> matrix is defined in terms of{' '}
        <InlineMath>2 \times 2</InlineMath> determinants:
        <MathBlock>{`\\det \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix} = a_{11} \\begin{vmatrix} a_{22} & a_{23} \\\\ a_{32} & a_{33} \\end{vmatrix} - a_{12} \\begin{vmatrix} a_{21} & a_{23} \\\\ a_{31} & a_{33} \\end{vmatrix} + a_{13} \\begin{vmatrix} a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{vmatrix}`}</MathBlock>
      </Callout>

      <h3>Geometric Interpretation</h3>

      <p>
        The scalar triple product of three vectors{' '}
        <InlineMath>A_1, A_2, A_3</InlineMath> in 3-space can be expressed as:
      </p>
      <MathBlock>{`A_1 \\times A_2 \\cdot A_3 = \\det \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix}`}</MathBlock>

      <p>
        where the rows are the components of the vectors. The absolute value of this
        determinant equals the <strong>volume</strong> of the parallelepiped determined
        by the three vectors. If the rows are linearly dependent, the determinant is
        zero—the parallelepiped degenerates to a plane figure of zero volume.
      </p>

      <h3>Properties Suggested by Geometry</h3>

      <p>
        Viewing the determinant as a function <InlineMath>d(A_1, A_2, A_3)</InlineMath>{' '}
        of the row vectors, the scalar triple product has these key properties:
      </p>

      <ul>
        <li>
          <strong>Homogeneity:</strong>{' '}
          <InlineMath>d(tA_1, A_2, A_3) = t \cdot d(A_1, A_2, A_3)</InlineMath>
        </li>
        <li>
          <strong>Additivity:</strong>{' '}
          <InlineMath>d(A_1, A_2 + C, A_3) = d(A_1, A_2, A_3) + d(A_1, C, A_3)</InlineMath>
        </li>
        <li>
          <strong>Vanishing:</strong> The determinant is zero if two rows are equal
        </li>
        <li>
          <strong>Normalization:</strong>{' '}
          <InlineMath>d(i, j, k) = 1</InlineMath> for unit coordinate vectors
        </li>
      </ul>

      <p>
        These properties will serve as the axioms for defining determinants of any order.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The determinant captures fundamental geometric
        information about a linear transformation: it measures how the transformation
        scales volumes (in the appropriate dimension). A zero determinant indicates
        the transformation collapses the space to a lower dimension, while a negative
        determinant indicates an orientation reversal.
      </Callout>
    </LessonLayout>
  );
}
