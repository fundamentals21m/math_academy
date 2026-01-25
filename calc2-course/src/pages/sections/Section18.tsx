import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Computation Techniques</h2>

      <p>
        We now develop systematic methods for solving systems of linear equations and
        computing ranks. The key technique is <strong>Gaussian elimination</strong>, which
        transforms a matrix into a simpler form through elementary row operations.
      </p>

      <h3>Elementary Row Operations</h3>

      <Callout type="info">
        <strong>Definition:</strong> The three <strong>elementary row operations</strong> on
        a matrix are:
        <br /><br />
        <strong>Type I:</strong> Interchange two rows
        <br />
        <strong>Type II:</strong> Multiply a row by a nonzero scalar
        <br />
        <strong>Type III:</strong> Add a multiple of one row to another row
      </Callout>

      <p>
        These operations do not change the solution set of <InlineMath>AX = B</InlineMath>.
        They correspond to applying invertible linear transformations to both sides.
      </p>

      <h3>Row Echelon Form</h3>

      <Callout type="info">
        <strong>Definition:</strong> A matrix is in <strong>row echelon form</strong> if:
        <br /><br />
        (a) All zero rows are at the bottom
        <br />
        (b) The first nonzero entry (pivot) in each nonzero row is to the right of the
        pivot in the row above
        <br />
        (c) Each pivot is 1 and is the only nonzero entry in its column (for{' '}
        <strong>reduced</strong> row echelon form)
      </Callout>

      <h3>Gaussian Elimination</h3>

      <p>
        The algorithm proceeds column by column from left to right:
      </p>
      <ol>
        <li>Find the leftmost nonzero column (pivot column)</li>
        <li>If necessary, interchange rows to get a nonzero entry at the top</li>
        <li>Scale the pivot row to make the pivot equal to 1</li>
        <li>Use Type III operations to create zeros below (and above, for reduced form) the pivot</li>
        <li>Repeat for the remaining submatrix</li>
      </ol>

      <h3>Augmented Matrix</h3>

      <p>
        To solve <InlineMath>AX = B</InlineMath>, we work with the{' '}
        <strong>augmented matrix</strong> <InlineMath>[A | B]</InlineMath>:
      </p>
      <MathBlock>{`[A | B] = \\left[\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right]`}</MathBlock>

      <h3>Back Substitution</h3>

      <p>
        After reducing to echelon form, the system can be solved by{' '}
        <strong>back substitution</strong>: solve for variables starting from the last
        equation and working upward.
      </p>

      <h3>Computing Rank</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The rank of a matrix equals the number of nonzero rows
        (pivot rows) in its row echelon form.
      </Callout>

      <p>
        The nullity (dimension of null space) equals{' '}
        <InlineMath>{'n - \\text{rank}'}</InlineMath>, which is the number of free
        variables (columns without pivots).
      </p>

      <h3>Example</h3>

      <p>Solve the system:</p>
      <MathBlock>{`\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ x + 3y + 5z &= 10 \\end{aligned}`}</MathBlock>

      <p>Augmented matrix and reduction:</p>
      <MathBlock>{`\\left[\\begin{array}{ccc|c} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 1 & 3 & 5 & 10 \\end{array}\\right] \\to \\left[\\begin{array}{ccc|c} 1 & 2 & 3 & 6 \\\\ 0 & 1 & 1 & 2 \\\\ 0 & 0 & 1 & 2 \\end{array}\\right]`}</MathBlock>

      <p>Back substitution gives: <InlineMath>z = 2, y = 0, x = 0</InlineMath>.</p>

      <Callout type="success">
        <strong>Key Insight:</strong> Gaussian elimination is a systematic algorithm that
        can solve any system of linear equations or determine that no solution exists. It
        also reveals the rank and null space structure. This algorithm, implemented
        efficiently, is the foundation of most numerical linear algebra software.
      </Callout>
    </LessonLayout>
  );
}
