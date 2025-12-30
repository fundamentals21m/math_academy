import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2>Variations on the Desargues Theorem</h2>

      <p>
        In Section 6.1, we stated the Desargues theorem in the form: If two triangles
        are in perspective from a point, then their three pairs of corresponding sides
        meet on a line. The Desargues theorem is a very flexible theorem, which appears
        in many forms. Two that we need later are the following.
      </p>

      <h3>The Converse Desargues Theorem</h3>

      <Theorem title="Converse Desargues Theorem">
        <p>
          If corresponding sides of two triangles meet on a line, then the two
          triangles are in perspective from a point.
        </p>
      </Theorem>

      <p>
        To deduce this result from the Desargues theorem, let ABC and A′B′C′ be
        two triangles whose corresponding sides meet on the line L. Let P be the
        intersection of AA′ and BB′, so we want to prove that P lies on CC′ as well.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof Outline</h4>
        <ol className="list-decimal list-inside space-y-2">
          <li>Suppose that PC meets the line B′C′ at C″ (hypothetically unequal to C′)</li>
          <li>Then the triangles ABC and A′B′C″ are in perspective from P</li>
          <li>By the Desargues theorem, their corresponding sides meet on a line</li>
          <li>We already know AB meets A′B′ on L, and BC meets B′C″ on L</li>
          <li>Hence, AC meets A′C″ on L, necessarily at the point Q where AC meets L</li>
          <li>It follows that QA′ goes through C″. But QA′ meets B′C′ at C′</li>
          <li>Hence, C″ = C′, so C′ is indeed on the line PC</li>
        </ol>
      </div>

      <h3>The Scissors Theorem</h3>

      <p>
        The second consequence of the Desargues theorem is called the "scissors theorem."
        It is an apt name, as you will see from the configuration.
      </p>

      <Theorem title="Scissors Theorem">
        <p>
          If ABCD and A′B′C′D′ are quadrilaterals with vertices alternately on two
          lines, and if AB is parallel to A′B′, BC to B′C′, and AD to A′D′, then
          also CD is parallel to C′D′.
        </p>
      </Theorem>

      <p>
        To prove this theorem, let E be the intersection of AD and BC, and let E′ be
        the intersection of A′D′ and B′C′. Then the triangles ABE and A′B′E′ have
        corresponding sides parallel. Hence, they are in perspective from the
        intersection P of AA′ and BB′, by the converse Desargues theorem.
      </p>

      <p>
        But then the triangles CDE and C′D′E′ are also in perspective from P.
        Because their sides CE and C′E′, DE and D′E′ are parallel by assumption,
        it follows from the Desargues theorem that CD and C′D′ are also parallel,
        as required.
      </p>

      <h3>Second Case of the Scissors Theorem</h3>

      <p>
        The scissors theorem just proved says that if the black, gray, and dashed
        lines are parallel, then so are the dotted lines. What if the black, gray,
        and dotted lines are parallel: Are the dashed lines again parallel?
      </p>

      <Callout type="info">
        <strong>Yes!</strong> The proof is similar, but with a slightly different
        picture. We extend the black and dotted lines until they meet, forming
        triangles with their corresponding black, gray, and dotted sides parallel.
        Then it follows from the converse Desargues theorem that these triangles
        are in perspective from P. But then so are the triangles with dashed, black,
        and dotted sides. Hence, their dashed sides are parallel by the Desargues theorem.
      </Callout>

      <h3>Applying the Scissors Theorem</h3>

      <p>
        In practice, the scissors theorem is often used in the following way. We
        have a pair of scissors ABCD and another figure D′A′B′C′F with parallel
        pairs of black, gray, dashed, and dotted lines. We want to prove that D′ = F
        (so the ends of the gray and dotted lines coincide, and the second figure
        is also a pair of scissors).
      </p>

      <Definition title="Scissors Coincidence">
        <p>
          This coincidence happens because the line C′D′ is parallel to CD by the
          scissors theorem, so C′D′ is the same line as C′F, and hence D′ = F.
        </p>
      </Definition>

      <h3>Failure in the Moulton Plane</h3>

      <p>
        Because the Desargues theorem implies its converse, another way to show that
        the Desargues theorem fails in the Moulton plane is to show that its converse
        fails. This plan is easily implemented.
      </p>

      <p>
        Moulton himself used this approach when he introduced the Moulton plane in
        1902.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.3.1</h4>
        <p className="text-slate-300">
          Explain why a figure showing triangles in perspective from a point P with
          their corresponding sides meeting on a line through P demonstrates the
          failure of the converse Desargues theorem in the Moulton plane.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.3.2</h4>
        <p className="text-slate-300">
          Formulate a converse to the little Desargues theorem, and show that it
          follows from the little Desargues theorem.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.3.3</h4>
        <p className="text-slate-300">
          Show that the converse little Desargues theorem implies a "little scissors
          theorem" in which the quadrilaterals have their vertices on parallel lines.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.3.4</h4>
        <p className="text-slate-300">
          Design a figure that directly shows the failure of the little scissors
          theorem in the Moulton plane.
        </p>
      </div>

      <SectionQuiz
        sectionId={42}
        questions={quizMap[42] || []}
        title="Variations on the Desargues Theorem Quiz"
      />
    </LessonLayout>
  );
}
