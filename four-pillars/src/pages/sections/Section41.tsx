import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2>Coincidences</h2>

      <p>
        Two points A, B always lie on a line. But it is accidental, so to speak,
        if a third point C lies on the line through A and B. Such an accidental
        meeting is called a "coincidence" in everyday life, and this is a good
        name for it in projective geometry too.
      </p>

      <Definition title="Coincidence">
        <p>
          A <strong>coincidence</strong> is the occurrence of two incidences together—in
          this case, the incidence of A and B with a line, and the incidence of C with
          the same line.
        </p>
        <p className="mt-2">
          Coincidence = co-incidence = two incidences together.
        </p>
      </Definition>

      <h3>Coincidences in Theorems</h3>

      <p>
        The theorems of Pappus and Desargues state that certain coincidences occur.
        In fact, they are coincidences of the type just described, in which two
        points lie on a line and a third point lies on the same line.
      </p>

      <h3>The Tiled Floor Construction</h3>

      <p>
        The perspective picture of the tiled floor also involves certain coincidences,
        as becomes clear when we look at the steps in its construction:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>Draw diagonal of first tile, extended to the horizon</li>
          <li>Extend diagonal of second tile to the horizon</li>
          <li>Draw side of second tile, through the new intersection</li>
          <li>Draw second column of tiles, through the new intersection</li>
        </ol>
      </div>

      <p>
        At the final step, a coincidence occurs: three of the points we have
        constructed lie on a straight line. This is shown as a dashed line in
        the construction.
      </p>

      <h3>Tracing the Coincidence</h3>

      <p>
        This coincidence can be traced to a special case of the little Desargues
        theorem. The construction involves two shaded triangles that form a little
        Desargues configuration.
      </p>

      <Theorem title="Tiled Floor Coincidence">
        <p>
          The case of little Desargues in the tiled floor construction says that
          the two dotted lines (diagonals of "double tiles") meet on the horizon.
        </p>
        <p className="mt-2 text-slate-300">
          These lines give us a second little Desargues configuration, from which
          we conclude that the dashed diagonals also meet on the horizon, as required
          to explain the coincidence.
        </p>
      </Theorem>

      <h3>The Parallel Formulation</h3>

      <p>
        The occurrence of the little Desargues configuration in the tiled floor may
        be easier to see if we draw the lines meeting on the horizon as actual
        parallels. The little Desargues theorem itself is easier to state in terms
        of actual parallels.
      </p>

      <Callout type="info">
        <strong>Parallel Little Desargues:</strong> When lines that would meet on
        the horizon L are drawn as parallels, the little Desargues configuration
        becomes more visually intuitive. Lines meeting at infinity are simply
        parallel lines in ordinary Euclidean geometry.
      </Callout>

      <h3>A Special Case</h3>

      <p>
        The theorem that proves the coincidence in the drawing of the tiled floor
        is actually a special case of the little Desargues theorem: the case in
        which a vertex of one triangle lies on a side of the other.
      </p>

      <p>
        Thus, it is not clear that the coincidence is false in the Moulton plane,
        where we know only that the general little Desargues theorem is false from
        the exercises in Section 6.1. However, one can show that the tiled floor
        coincidence does fail in the Moulton plane by placing an x-axis in a
        suitable position.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.2.1</h4>
        <p className="text-slate-300">
          Formulate an appropriate statement of the little Desargues theorem when
          one has parallels instead of lines meeting on L.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.2.2</h4>
        <p className="text-slate-300">
          Redraw the tiled floor figures so that the lines meeting on L are shown
          as actual parallels.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.2.3</h4>
        <p className="text-slate-300">
          What is the nature of the "coincidence" when lines are drawn as parallels?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.2.4</h4>
        <p className="text-slate-300">
          Find occurrences of the little Desargues configuration in your parallel
          diagrams. Hence, explain why the "coincidence" follows from your statement
          of the little Desargues theorem.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.2.5</h4>
        <p className="text-slate-300">
          By placing an x-axis in a suitable position, show that the tiled floor
          coincidence fails in the Moulton plane.
        </p>
      </div>

      <SectionQuiz
        sectionId={41}
        questions={quizMap[41] || []}
        title="Coincidences Quiz"
      />
    </LessonLayout>
  );
}
