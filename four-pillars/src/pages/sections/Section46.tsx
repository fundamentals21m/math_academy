import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2>The Distributive Law</h2>

      <p>
        In this section, we prove the distributive law a(b + c) = ab + ac using
        the Pappus theorem. This proof takes advantage of the ability to do
        addition and multiplication on both axes.
      </p>

      <h3>Strategy for the Proof</h3>

      <p>
        The proof proceeds in several steps:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>Construct b + c from b and c on the x-axis</li>
          <li>Map b, c, and b + c to ab, ac, and a(b + c) on the y-axis using parallel lines</li>
          <li>Use addition on the y-axis to construct ab + ac</li>
          <li>Use the Pappus theorem to show that ab + ac and a(b + c) are the same point</li>
        </ol>
      </div>

      <h3>Multiplication via Parallels</h3>

      <p>
        First, we observe that we can map any b on the x-axis to ab on the y-axis
        by sending it along a line parallel to the line from 1 on the x-axis to
        a on the y-axis.
      </p>

      <Callout type="info">
        <strong>Key Observation:</strong> This parallel mapping is the same as
        constructing ab from a and b on the y-axis, because the line from b to
        its image on the y-axis is parallel to the line from 1 to 1, as required
        by the definition of multiplication.
      </Callout>

      <h3>Constructing the Sum on Both Axes</h3>

      <p>
        We add b and c on the x-axis using a special choice of line L: the parallel
        through ab on the y-axis. We also connect b, c, and b + c, respectively,
        to ab, ac, and a(b + c) on the y-axis by parallel lines.
      </p>

      <p>
        The line through c that constructs b + c, namely the parallel M to the
        y-axis, is used in turn to add ab and ac on the y-axis.
      </p>

      <Theorem title="The Distributive Law">
        <p>
          The Pappus theorem implies a(b + c) = ab + ac.
        </p>
        <MathBlock>{`a(b + c) = ab + ac`}</MathBlock>
        <p className="mt-2 text-slate-300">
          The figure has the same structure as the proof that sums correspond
          on both axes—only the labels have changed. The dashed line ends at
          a(b + c), and the dotted line ends at ab + ac. But these endpoints
          coincide by the Pappus theorem.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">The Pappus Configuration</h4>
        <p className="text-slate-300">
          The proof reveals a Pappus configuration of gray, dashed, and dotted
          lines between the y-axis and the line M. The coincidence of endpoints
          follows from the Pappus theorem applied to this configuration.
        </p>
      </div>

      <h3>The Other Distributive Law</h3>

      <p>
        We need not prove the other distributive law, (b + c)a = ba + bc, separately,
        because we are assuming Pappus, which implies that multiplication is commutative.
      </p>

      <MathBlock>{`(b + c)a = a(b + c) = ab + ac = ba + bc`}</MathBlock>

      <Callout type="warning">
        <strong>Important:</strong> In systems with noncommutative multiplication
        (like the quaternions), both distributive laws must be verified independently.
        However, both distributive laws remain valid for quaternions and more generally
        for matrices.
      </Callout>

      <h3>Distributivity in Non-Commutative Systems</h3>

      <p>
        In important systems with noncommutative multiplication, such as the
        quaternions H, both distributive laws remain valid:
      </p>

      <MathBlock>{`a(b + c) = ab + ac \\quad \\text{and} \\quad (b + c)a = ba + ca`}</MathBlock>

      <p>
        This is because the quaternions are defined as 2 × 2 complex matrices,
        and matrix multiplication distributes over matrix addition from both
        sides, regardless of whether the multiplication is commutative.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Matrix Distributivity</h4>
        <p className="text-slate-300">
          For any matrices A, B, C of compatible dimensions:
        </p>
        <MathBlock>{`A(B + C) = AB + AC \\quad \\text{and} \\quad (B + C)A = BA + CA`}</MathBlock>
        <p className="text-slate-300 mt-2">
          This follows directly from the definition of matrix multiplication and
          addition, without requiring commutativity.
        </p>
      </div>

      <h3>Summary of Field Axiom Proofs</h3>

      <p>
        We have now completed the proofs of all nine field axioms from the
        theorems of Pappus and Desargues:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Identity laws</strong> (a + 0 = a, a · 1 = a): Direct from construction</li>
          <li><strong>Inverse laws</strong> (a + (−a) = 0, a · a⁻¹ = 1): Direct from construction</li>
          <li><strong>Commutative laws</strong> (a + b = b + a, ab = ba): From Pappus</li>
          <li><strong>Associative laws</strong> (a + (b + c) = (a + b) + c, a(bc) = (ab)c): From Desargues (scissors theorem)</li>
          <li><strong>Distributive law</strong> (a(b + c) = ab + ac): From Pappus</li>
        </ul>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.7.1</h4>
        <p className="text-slate-300">
          Explain in this case why a(b + c) = ab + ac implies (b + c)a = ba + bc.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.7.2</h4>
        <p className="text-slate-300">
          Explain why both distributive laws are valid for the quaternions.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.7.3</h4>
        <p className="text-slate-300">
          More generally, show that both distributive laws are valid for matrices.
        </p>
      </div>

      <SectionQuiz
        sectionId={46}
        questions={quizMap[46] || []}
        title="The Distributive Law Quiz"
      />
    </LessonLayout>
  );
}
