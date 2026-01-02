import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Introduction */}
      <p>
        The heart of linear algebra is in two operations—both with vectors. We <strong>add</strong> vectors
        to get <InlineMath>v + w</InlineMath>. We <strong>multiply</strong> them by numbers <InlineMath>c</InlineMath> and <InlineMath>d</InlineMath> to
        get <InlineMath>cv</InlineMath> and <InlineMath>dw</InlineMath>. Combining those two operations gives the <em>linear combination</em>{` `}
        <InlineMath>cv + dw</InlineMath>.
      </p>

      {/* Definition of Linear Combination */}
      <Definition title="Linear Combination" className="my-6">
        <p>
          A <strong>linear combination</strong> of vectors <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> is
          any expression of the form:
        </p>
        <MathBlock>{`c\\mathbf{v} + d\\mathbf{w}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>c</InlineMath> and <InlineMath>d</InlineMath> are scalars (real numbers).
        </p>
      </Definition>

      <h2>Column Vectors</h2>

      <p>
        "You can't add apples and oranges." In a strange way, this is the reason for vectors.
        We have two separate numbers <InlineMath>v_1</InlineMath> and <InlineMath>v_2</InlineMath>. That pair produces
        a <strong>two-dimensional vector</strong> <InlineMath>{`\\mathbf{v}`}</InlineMath>:
      </p>

      <MathBlock className="my-4">
        {`\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} \\quad \\text{where } v_1 = \\text{first component}, \\quad v_2 = \\text{second component}`}
      </MathBlock>

      <p>
        We write <InlineMath>{`\\mathbf{v}`}</InlineMath> as a <strong>column</strong>, not as a row. The main point is to have
        a single letter <InlineMath>{`\\mathbf{v}`}</InlineMath> (in <strong>boldface</strong>) for this pair of numbers.
      </p>

      <h2>Vector Addition</h2>

      <p>
        Even if we don't add <InlineMath>v_1</InlineMath> to <InlineMath>v_2</InlineMath>, we do <strong>add vectors</strong>.
        The first components of <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath> stay separate from the second components:
      </p>

      <Definition title="Vector Addition" className="my-6">
        <p>
          If <InlineMath>{`\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix}`}</InlineMath> and{` `}
          <InlineMath>{`\\mathbf{w} = \\begin{bmatrix} w_1 \\\\ w_2 \\end{bmatrix}`}</InlineMath>, then:
        </p>
        <MathBlock>
          {`\\mathbf{v} + \\mathbf{w} = \\begin{bmatrix} v_1 + w_1 \\\\ v_2 + w_2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Subtraction follows the same idea: <InlineMath>{`\\mathbf{v} - \\mathbf{w} = \\begin{bmatrix} v_1 - w_1 \\\\ v_2 - w_2 \\end{bmatrix}`}</InlineMath>
        </p>
      </Definition>

      <Example title="Adding Two Vectors" className="my-6">
        <p>
          Let <InlineMath>{`\\mathbf{v} = \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix}`}</InlineMath> and{` `}
          <InlineMath>{`\\mathbf{w} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}`}</InlineMath>. Then:
        </p>
        <MathBlock>
          {`\\mathbf{v} + \\mathbf{w} = \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 4 + (-1) \\\\ 2 + 2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Scalar Multiplication</h2>

      <p>
        The other basic operation is <strong>scalar multiplication</strong>. Vectors can be multiplied
        by 2 or by <InlineMath>-1</InlineMath> or by any number <InlineMath>c</InlineMath>. To find <InlineMath>{`2\\mathbf{v}`}</InlineMath>,
        multiply each component of <InlineMath>{`\\mathbf{v}`}</InlineMath> by 2:
      </p>

      <Definition title="Scalar Multiplication" className="my-6">
        <p>
          If <InlineMath>{`\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix}`}</InlineMath> and <InlineMath>c</InlineMath> is a scalar, then:
        </p>
        <MathBlock>
          {`c\\mathbf{v} = \\begin{bmatrix} cv_1 \\\\ cv_2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The number <InlineMath>c</InlineMath> is called a <strong>scalar</strong>.
        </p>
      </Definition>

      <Example title="Scalar Multiplication" className="my-6">
        <p>
          If <InlineMath>{`\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix}`}</InlineMath>, then:
        </p>
        <MathBlock>
          {`2\\mathbf{v} = \\begin{bmatrix} 2v_1 \\\\ 2v_2 \\end{bmatrix} = \\mathbf{v} + \\mathbf{v} \\quad \\text{and} \\quad -\\mathbf{v} = \\begin{bmatrix} -v_1 \\\\ -v_2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Notice that the sum of <InlineMath>{`-\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath> is the <strong>zero vector</strong>{` `}
          <InlineMath>{`\\mathbf{0}`}</InlineMath>, which has components 0 and 0.
        </p>
      </Example>

      <h2>Linear Combinations</h2>

      <p>
        Now we combine addition with scalar multiplication to produce a "linear combination"
        of <InlineMath>{`\\mathbf{v}`}</InlineMath> and <InlineMath>{`\\mathbf{w}`}</InlineMath>. Multiply <InlineMath>{`\\mathbf{v}`}</InlineMath> by <InlineMath>c</InlineMath> and
        multiply <InlineMath>{`\\mathbf{w}`}</InlineMath> by <InlineMath>d</InlineMath>. Then add <InlineMath>{`c\\mathbf{v} + d\\mathbf{w}`}</InlineMath>.
      </p>

      <Theorem
        title="Linear Combinations Fill the Plane"
        className="my-6"
        proof={
          <>
            <p>
              We need to show that for any point <InlineMath>(x, y)</InlineMath>, there exist scalars <InlineMath>c</InlineMath> and <InlineMath>d</InlineMath> such that:
            </p>
            <MathBlock>{`c\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + d\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} x \\\\ y \\end{bmatrix}`}</MathBlock>
            <p>This gives us the system of equations:</p>
            <MathBlock>{`c + 2d = x \\quad \\text{and} \\quad c + 3d = y`}</MathBlock>
            <p>Subtracting the first equation from the second:</p>
            <MathBlock>{`d = y - x`}</MathBlock>
            <p>Substituting back into the first equation:</p>
            <MathBlock>{`c = x - 2d = x - 2(y - x) = 3x - 2y`}</MathBlock>
            <p>
              Since we can always find <InlineMath>c = 3x - 2y</InlineMath> and <InlineMath>d = y - x</InlineMath> for any <InlineMath>(x, y)</InlineMath>,
              every point in the plane can be reached as a linear combination of these two vectors.
            </p>
          </>
        }
      >
        <p>
          The combinations <InlineMath>{`c\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + d\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}`}</InlineMath> fill
          the whole <InlineMath>xy</InlineMath> plane. They produce every <InlineMath>{`\\begin{bmatrix} x \\\\ y \\end{bmatrix}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="A Specific Linear Combination" className="my-6">
        <p>
          Let <InlineMath>{`\\mathbf{v} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}`}</InlineMath> and{` `}
          <InlineMath>{`\\mathbf{w} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}`}</InlineMath>. Find <InlineMath>{`3\\mathbf{v} + 5\\mathbf{w}`}</InlineMath>.
        </p>
        <MathBlock>
          {`3\\mathbf{v} + 5\\mathbf{w} = 3\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + 5\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 3 \\end{bmatrix} + \\begin{bmatrix} 10 \\\\ 15 \\end{bmatrix} = \\begin{bmatrix} 13 \\\\ 18 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Three Ways to Represent Vectors</h2>

      <p>
        The figures show how you can visualize vectors. For algebra, we just need the components.
        That vector <InlineMath>{`\\mathbf{v}`}</InlineMath> is represented by an arrow. The arrow goes <InlineMath>v_1 = 4</InlineMath> units
        to the right and <InlineMath>v_2 = 2</InlineMath> units up. It ends at the point whose <InlineMath>x, y</InlineMath> coordinates are (4, 2).
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-dark-700">
        <p className="text-center text-dark-200 font-medium mb-2">Three ways to describe a vector <InlineMath>{`\\mathbf{v}`}</InlineMath>:</p>
        <div className="grid grid-cols-3 gap-4 text-center text-dark-300">
          <div>
            <p className="font-semibold text-primary-400">Two numbers</p>
            <p><InlineMath>{`\\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix}`}</InlineMath></p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Arrow from (0,0)</p>
            <p>Direction & length</p>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Point in the plane</p>
            <p><InlineMath>(v_1, v_2)</InlineMath></p>
          </div>
        </div>
      </div>

      <h2>The Parallelogram Rule</h2>

      <p>
        Vector addition <InlineMath>{`\\mathbf{v} + \\mathbf{w}`}</InlineMath> produces the diagonal of a parallelogram.
        We travel along <InlineMath>{`\\mathbf{v}`}</InlineMath> and then along <InlineMath>{`\\mathbf{w}`}</InlineMath>. Or we take the
        diagonal shortcut along <InlineMath>{`\\mathbf{v} + \\mathbf{w}`}</InlineMath>. We could also go
        along <InlineMath>{`\\mathbf{w}`}</InlineMath> and then <InlineMath>{`\\mathbf{v}`}</InlineMath>. In other words, <InlineMath>{`\\mathbf{w} + \\mathbf{v}`}</InlineMath> gives
        the same answer as <InlineMath>{`\\mathbf{v} + \\mathbf{w}`}</InlineMath>.
      </p>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>A vector <InlineMath>{`\\mathbf{v}`}</InlineMath> in two-dimensional space has two components <InlineMath>v_1</InlineMath> and <InlineMath>v_2</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>{`\\mathbf{v} + \\mathbf{w} = (v_1 + w_1, v_2 + w_2)`}</InlineMath> and <InlineMath>{`c\\mathbf{v} = (cv_1, cv_2)`}</InlineMath> are found a component at a time.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>A linear combination of three vectors <InlineMath>{`\\mathbf{u}`}</InlineMath>, <InlineMath>{`\\mathbf{v}`}</InlineMath>, <InlineMath>{`\\mathbf{w}`}</InlineMath> is <InlineMath>{`c\\mathbf{u} + d\\mathbf{v} + e\\mathbf{w}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Linear algebra is built on the operations <InlineMath>{`\\mathbf{v} + \\mathbf{w}`}</InlineMath> and <InlineMath>{`c\\mathbf{v}`}</InlineMath> and <InlineMath>{`d\\mathbf{w}`}</InlineMath>—adding vectors and multiplying by scalars.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
