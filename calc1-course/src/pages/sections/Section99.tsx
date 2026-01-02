import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section99() {
  return (
    <LessonLayout sectionId={99}>
      <h1>Systems of Linear Equations</h1>

      <p>
        Linear systems arise throughout mathematics and its applications. Matrix notation provides
        a compact way to represent and solve these systems, connecting the theory of linear
        transformations to practical computation.
      </p>

      <h2>Matrix Representation of Linear Systems</h2>

      <Callout type="definition" title="System of Linear Equations">
        <p>
          A <strong>system of <InlineMath>m</InlineMath> linear equations in <InlineMath>n</InlineMath> unknowns</strong> has the form:
        </p>
        <MathBlock>{`\\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n &= b_1 \\\\
a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n &= b_2 \\\\
&\\vdots \\\\
a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n &= b_m
\\end{aligned}`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Matrix Form">
        <p>The system can be written compactly as:</p>
        <MathBlock>{`A\\mathbf{x} = \\mathbf{b}`}</MathBlock>
        <p>where:</p>
        <MathBlock>{`A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}, \\quad \\mathbf{x} = \\begin{pmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{pmatrix}, \\quad \\mathbf{b} = \\begin{pmatrix} b_1 \\\\ b_2 \\\\ \\vdots \\\\ b_m \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Augmented Matrix">
        <p>
          The <strong>augmented matrix</strong> includes the right-hand side:
        </p>
        <MathBlock>{`[A | \\mathbf{b}] = \\left(\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right)`}</MathBlock>
      </Callout>

      <h2>Elementary Row Operations</h2>

      <Callout type="definition" title="Elementary Row Operations">
        <p>Three operations that do not change the solution set:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Row swap:</strong> Exchange rows <InlineMath>i</InlineMath> and <InlineMath>j</InlineMath> (<InlineMath>{`R_i \\leftrightarrow R_j`}</InlineMath>)</li>
          <li><strong>Row scaling:</strong> Multiply row <InlineMath>i</InlineMath> by <InlineMath>{`c \\neq 0`}</InlineMath> (<InlineMath>{`R_i \\to cR_i`}</InlineMath>)</li>
          <li><strong>Row addition:</strong> Add <InlineMath>c</InlineMath> times row <InlineMath>j</InlineMath> to row <InlineMath>i</InlineMath> (<InlineMath>{`R_i \\to R_i + cR_j`}</InlineMath>)</li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Row Equivalence">
        <p>
          Two augmented matrices are <strong>row equivalent</strong> if one can be obtained from the
          other by a sequence of elementary row operations. Row equivalent systems have the same
          solution set.
        </p>
      </Callout>

      <h2>Row Echelon Form</h2>

      <Callout type="definition" title="Row Echelon Form (REF)">
        <p>A matrix is in <strong>row echelon form</strong> if:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>All zero rows are at the bottom</li>
          <li>The leading entry (pivot) of each nonzero row is to the right of pivots in rows above</li>
          <li>All entries below a pivot are zero</li>
        </ol>
        <MathBlock>{`\\begin{pmatrix} \\boxed{2} & 3 & 1 & 4 \\\\ 0 & \\boxed{1} & 5 & 2 \\\\ 0 & 0 & 0 & \\boxed{3} \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Reduced Row Echelon Form (RREF)">
        <p>A matrix is in <strong>reduced row echelon form</strong> if:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>It is in row echelon form</li>
          <li>Each pivot is 1</li>
          <li>Each pivot is the only nonzero entry in its column</li>
        </ol>
        <MathBlock>{`\\begin{pmatrix} 1 & 0 & 3 & 0 \\\\ 0 & 1 & 5 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Uniqueness of RREF">
        <p>
          Every matrix is row equivalent to exactly one matrix in reduced row echelon form.
        </p>
      </Callout>

      <h2>Gaussian Elimination</h2>

      <Callout type="info" title="Gaussian Elimination Algorithm">
        <p>To solve <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Form the augmented matrix <InlineMath>{`[A | \\mathbf{b}]`}</InlineMath></li>
          <li>Use row operations to reach row echelon form (forward elimination)</li>
          <li>Use back substitution to find the solution</li>
        </ol>
        <p className="mt-2">For <strong>Gauss-Jordan elimination</strong>, continue to RREF (no back substitution needed).</p>
      </Callout>

      <Callout type="example" title="Gaussian Elimination">
        <p>Solve the system:</p>
        <MathBlock>{`\\begin{aligned}
x + 2y + z &= 9 \\\\
2x + 4y + 3z &= 21 \\\\
3x + 6y + 5z &= 33
\\end{aligned}`}</MathBlock>
        <p><strong>Step 1:</strong> Form augmented matrix:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 9 \\\\ 2 & 4 & 3 & 21 \\\\ 3 & 6 & 5 & 33 \\end{array}\\right)`}</MathBlock>
        <p><strong>Step 2:</strong> <InlineMath>{`R_2 \\to R_2 - 2R_1`}</InlineMath> and <InlineMath>{`R_3 \\to R_3 - 3R_1`}</InlineMath>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 9 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 2 & 6 \\end{array}\\right)`}</MathBlock>
        <p><strong>Step 3:</strong> <InlineMath>{`R_3 \\to R_3 - 2R_2`}</InlineMath>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 9 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)`}</MathBlock>
        <p><strong>Back substitution:</strong> <InlineMath>z = 3</InlineMath>, and <InlineMath>x + 2y + 3 = 9</InlineMath>, so <InlineMath>x + 2y = 6</InlineMath>.</p>
        <p><strong>Solution:</strong> <InlineMath>x = 6 - 2t</InlineMath>, <InlineMath>y = t</InlineMath>, <InlineMath>z = 3</InlineMath> for any <InlineMath>{`t \\in \\mathbb{R}`}</InlineMath>.</p>
      </Callout>

      <h2>Types of Solutions</h2>

      <Callout type="theorem" title="Solution Possibilities">
        <p>A system <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has exactly one of:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No solution</strong> (inconsistent system)</li>
          <li><strong>Exactly one solution</strong> (unique solution)</li>
          <li><strong>Infinitely many solutions</strong> (underdetermined system)</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Determining Solution Type">
        <p>After row reduction of the augmented matrix:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Inconsistent:</strong> A row of form <InlineMath>{`(0 \\ 0 \\ \\cdots \\ 0 | c)`}</InlineMath> with <InlineMath>{`c \\neq 0`}</InlineMath></li>
          <li><strong>Unique:</strong> Every variable is a pivot variable (each column has a pivot)</li>
          <li><strong>Infinitely many:</strong> Consistent with free variables (columns without pivots)</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Pivot and Free Variables">
        <p>
          Variables corresponding to pivot columns are <strong>pivot variables</strong> (basic variables).
          Variables corresponding to non-pivot columns are <strong>free variables</strong>.
        </p>
        <p className="mt-2">
          Free variables can take any value; pivot variables are determined by them.
        </p>
      </Callout>

      <h2>Homogeneous Systems</h2>

      <Callout type="definition" title="Homogeneous System">
        <p>
          A system is <strong>homogeneous</strong> if <InlineMath>{`\\mathbf{b} = \\mathbf{0}`}</InlineMath>:
        </p>
        <MathBlock>{`A\\mathbf{x} = \\mathbf{0}`}</MathBlock>
        <p>The trivial solution <InlineMath>{`\\mathbf{x} = \\mathbf{0}`}</InlineMath> always exists.</p>
      </Callout>

      <Callout type="theorem" title="Homogeneous Solutions">
        <p>For <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The solution set is always nonempty (contains <InlineMath>{`\\mathbf{0}`}</InlineMath>)</li>
          <li>The solution set is the null space <InlineMath>N(A)</InlineMath></li>
          <li>If there are free variables, there are infinitely many solutions</li>
          <li>If <InlineMath>n &gt; m</InlineMath> (more unknowns than equations), there are always nontrivial solutions</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Structure of General Solution">
        <p>For <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> with particular solution <InlineMath>{`\\mathbf{x}_p`}</InlineMath>:</p>
        <MathBlock>{`\\text{General solution} = \\mathbf{x}_p + N(A)`}</MathBlock>
        <p>
          Every solution is <InlineMath>{`\\mathbf{x}_p + \\mathbf{x}_h`}</InlineMath> where <InlineMath>{`\\mathbf{x}_h`}</InlineMath> solves the
          homogeneous system <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Homogeneous System">
        <p>Solve <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath> where:</p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 2 & -1 & 3 \\\\ 2 & 4 & -1 & 8 \\\\ 3 & 6 & -2 & 11 \\end{pmatrix}`}</MathBlock>
        <p><strong>Row reduce:</strong></p>
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & -1 & 3 \\\\ 0 & 0 & 1 & 2 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <p>Pivots in columns 1 and 3. Free variables: <InlineMath>{`x_2, x_4`}</InlineMath>.</p>
        <p>From row 2: <InlineMath>{`x_3 = -2x_4`}</InlineMath></p>
        <p>From row 1: <InlineMath>{`x_1 = -2x_2 + x_3 - 3x_4 = -2x_2 - 5x_4`}</InlineMath></p>
        <MathBlock>{`\\mathbf{x} = x_2 \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + x_4 \\begin{pmatrix} -5 \\\\ 0 \\\\ -2 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <p>The null space is 2-dimensional, spanned by these vectors.</p>
      </Callout>

      <h2>Rank and Solvability</h2>

      <Callout type="definition" title="Rank of a Matrix">
        <p>
          The <strong>rank</strong> of matrix <InlineMath>A</InlineMath>, denoted <InlineMath>{`\\text{rank}(A)`}</InlineMath> or <InlineMath>r(A)</InlineMath>,
          is the number of pivot positions (nonzero rows in REF).
        </p>
      </Callout>

      <Callout type="theorem" title="Rank and Solutions">
        <p>For the system <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> with <InlineMath>A</InlineMath> an <InlineMath>{`m \\times n`}</InlineMath> matrix:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Consistent</strong> iff <InlineMath>{`\\text{rank}(A) = \\text{rank}([A|\\mathbf{b}])`}</InlineMath></li>
          <li><strong>Unique solution</strong> iff <InlineMath>{`\\text{rank}(A) = n`}</InlineMath> (full column rank)</li>
          <li><strong>Infinitely many solutions</strong> iff consistent and <InlineMath>{`\\text{rank}(A) < n`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Rank-Nullity Connection">
        <p>The number of free variables equals:</p>
        <MathBlock>{`n - \\text{rank}(A) = \\text{nullity}(A) = \\dim(N(A))`}</MathBlock>
      </Callout>

      <h2>Square Systems</h2>

      <Callout type="theorem" title="Square Systems (n × n)">
        <p>For a square matrix <InlineMath>A</InlineMath> (<InlineMath>{`n \\times n`}</InlineMath>), these are equivalent:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has a unique solution for every <InlineMath>{`\\mathbf{b}`}</InlineMath></li>
          <li><InlineMath>A</InlineMath> is invertible</li>
          <li><InlineMath>{`\\text{rank}(A) = n`}</InlineMath></li>
          <li><InlineMath>{`N(A) = \\{\\mathbf{0}\\}`}</InlineMath></li>
          <li>The columns of <InlineMath>A</InlineMath> are linearly independent</li>
          <li>The rows of <InlineMath>A</InlineMath> are linearly independent</li>
          <li><InlineMath>{`\\det(A) \\neq 0`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Solution via Inverse">
        <p>If <InlineMath>A</InlineMath> is invertible:</p>
        <MathBlock>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</MathBlock>
      </Callout>

      <h2>Computational Considerations</h2>

      <Callout type="info" title="Numerical Stability">
        <p>In practice:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Partial pivoting:</strong> Always choose the largest pivot to reduce rounding errors</li>
          <li><strong>Avoid computing inverse:</strong> Solving <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is more efficient than computing <InlineMath>{`A^{-1}`}</InlineMath></li>
          <li><strong>LU factorization:</strong> For solving with multiple right-hand sides, factor <InlineMath>A = LU</InlineMath> once</li>
        </ul>
      </Callout>

      <Callout type="info" title="Complexity">
        <p>Gaussian elimination on an <InlineMath>{`n \\times n`}</InlineMath> system requires:</p>
        <MathBlock>{`O\\left(\\frac{2n^3}{3}\\right) \\text{ operations}`}</MathBlock>
        <p>This is much more efficient than computing the inverse (approximately <InlineMath>{`O(n^3)`}</InlineMath> also, but with larger constant).</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Matrix form:</strong> <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath></p>

        <p className="mt-3"><strong>Solution method:</strong></p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Form augmented matrix <InlineMath>{`[A|\\mathbf{b}]`}</InlineMath></li>
          <li>Row reduce to REF or RREF</li>
          <li>Read off solution (back substitution if REF)</li>
        </ol>

        <p className="mt-3"><strong>Solution types:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>No solution: row <InlineMath>{`(0 \\cdots 0 | c)`}</InlineMath> with <InlineMath>{`c \\neq 0`}</InlineMath></li>
          <li>Unique: all variables are pivot variables</li>
          <li>Infinite: consistent with free variables</li>
        </ul>

        <p className="mt-3"><strong>Key relation:</strong></p>
        <MathBlock>{`\\text{(General solution)} = \\text{(Particular solution)} + N(A)`}</MathBlock>

        <p className="mt-3"><strong>Rank determines solvability:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Consistent iff <InlineMath>{`\\text{rank}(A) = \\text{rank}([A|\\mathbf{b}])`}</InlineMath></li>
          <li>Unique iff <InlineMath>{`\\text{rank}(A) = n`}</InlineMath></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
