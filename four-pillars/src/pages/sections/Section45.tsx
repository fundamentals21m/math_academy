import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2>The Associative Laws</h2>

      <p>
        In this section, we prove the associative laws for both addition and
        multiplication using the scissors theorem from Section 6.3. These proofs
        demonstrate how the Desargues theorem implies algebraic structure.
      </p>

      <h3>The Associative Law of Addition</h3>

      <p>
        We begin with the associative law of addition: a + (b + c) = (a + b) + c.
        To prove this, we must first construct a + (b + c), which means constructing
        b + c from b and c, and then adding a to the result.
      </p>

      <Theorem title="Associative Law of Addition">
        <p>
          The Desargues theorem (specifically, the scissors theorem) implies
          a + (b + c) = (a + b) + c.
        </p>
        <MathBlock>{`a + (b + c) = (a + b) + c`}</MathBlock>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Construction of a + (b + c)</h4>
        <p className="text-slate-300">
          To construct a + (b + c), we first construct b + c from b and c using our
          standard addition construction. Then we add a to b + c using the same method.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Construction of (a + b) + c</h4>
        <p className="text-slate-300">
          To construct (a + b) + c, we first construct a + b from a and b.
          Then we add this result to c.
        </p>
      </div>

      <p>
        When we show both constructions on the same diagram, we see two pairs of
        scissors, each consisting of dashed, dotted, black, and gray lines. In the
        scissors on the right, the gray line ends at a + (b + c) and the dotted
        line ends at (a + b) + c.
      </p>

      <Callout type="info">
        <strong>Key Observation:</strong> The ends of these lines coincide by
        the scissors theorem. Hence a + (b + c) = (a + b) + c.
      </Callout>

      <p>
        Because the scissors in this proof lie between parallel lines, we need only
        the little scissors theorem (and hence only the little Desargues theorem).
      </p>

      <h3>The Associative Law of Multiplication</h3>

      <p>
        Next we consider the associative law of multiplication: a(bc) = (ab)c.
        The diagram is similar to the addition case, except that the pairs of
        scissors lie between nonparallel lines (the x- and y-axes), so now we
        need the full Desargues theorem.
      </p>

      <Theorem title="Associative Law of Multiplication">
        <p>
          The Desargues theorem (specifically, the scissors theorem) implies
          a(bc) = (ab)c.
        </p>
        <MathBlock>{`a(bc) = (ab)c`}</MathBlock>
        <p className="mt-2 text-slate-300">
          The gray line ends at a(bc) and the dotted line ends at (ab)c.
          But the ends of these lines coincide by the scissors theorem,
          so a(bc) = (ab)c.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Why Full Desargues is Required</h4>
        <p className="text-slate-300">
          For addition, the scissors lie between parallel lines (both parallel to
          the x-axis), so only the little Desargues theorem is needed. For multiplication,
          the scissors lie between the x- and y-axes, which are not parallel, so the
          full Desargues theorem is required.
        </p>
      </div>

      <h3>The Quaternions: A Non-Commutative Example</h3>

      <p>
        There is an algebraic system that satisfies all of the field axioms except
        the commutative law of multiplication. It is called the <strong>quaternions</strong> and
        is denoted by H, after Sir William Rowan Hamilton, who discovered them in 1843.
      </p>

      <Callout type="warning">
        <strong>Non-Commutative Multiplication:</strong> The quaternions provide a
        natural example of a system where multiplication is associative but not
        commutative. This shows that the Desargues theorem (which implies associativity)
        is strictly weaker than the Pappus theorem (which implies commutativity).
      </Callout>

      <p>
        In 1845, Arthur Cayley showed that the quaternions could be defined as
        2 × 2 complex matrices of the form:
      </p>

      <MathBlock>{`\\mathbf{q} = \\begin{pmatrix} a + ib & c + id \\\\ -c + id & a - ib \\end{pmatrix}`}</MathBlock>

      <p>
        Most properties of quaternions follow from general properties of matrices.
        All the laws of algebra are immediate except the existence of q⁻¹ and
        commutative multiplication.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Hamilton's Description</h4>
        <p className="text-slate-300 mb-2">
          Any quaternion can be written as q = a·1 + b·i + c·j + d·k, where:
        </p>
        <MathBlock>{`\\mathbf{i}^2 = \\mathbf{j}^2 = \\mathbf{k}^2 = \\mathbf{ijk} = -1`}</MathBlock>
        <p className="text-slate-300 mt-2">
          This is Hamilton's famous description of the quaternions, which he
          discovered in 1843 and reportedly carved into Brougham Bridge in Dublin.
        </p>
      </div>

      <h3>The Quaternion Projective Plane</h3>

      <p>
        It is possible to define the quaternion projective plane HP² using quaternion
        coordinates. HP² satisfies the Desargues theorem because it is possible to do
        the necessary calculations without using commutative multiplication.
      </p>

      <p>
        However, HP² does <em>not</em> satisfy the Pappus theorem, because Pappus implies
        commutative multiplication for H, which the quaternions do not have.
        HP² is therefore a <strong>non-Pappian plane</strong>—probably the most natural example.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.6.1</h4>
        <p className="text-slate-300">
          Show that q has determinant a² + b² + c² + d² and hence that q⁻¹ exists
          for any nonzero quaternion q.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.6.2</h4>
        <p className="text-slate-300">
          Find specific quaternions s and t such that st ≠ ts.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.6.3</h4>
        <p className="text-slate-300">
          Verify that i² = j² = k² = ijk = −1 (Hamilton's description of the quaternions).
        </p>
      </div>

      <SectionQuiz
        sectionId={45}
        questions={quizMap[45] || []}
        title="The Associative Laws Quiz"
      />
    </LessonLayout>
  );
}
