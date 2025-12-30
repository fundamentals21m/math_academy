import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Isometries</h2>

      <p>
        A possible weakness of our model of the plane ℝ² is that it seems to
        single out a particular point (the origin O) and particular lines (the
        x- and y-axes). In Euclid's plane, each point is like any other point
        and each line is like any other line.
      </p>

      <p>
        We can overcome this apparent bias by considering <strong>transformations</strong>
        that allow any point to become the origin and any line to become the x-axis.
        As a bonus, this gives meaning to the idea of "motion" that Euclid used
        in his proof of SAS.
      </p>

      <Definition title="Transformation">
        <p>
          A <strong>transformation</strong> of the plane is simply a function
          f : ℝ² → ℝ²—a function that sends points to points.
        </p>
      </Definition>

      <Definition title="Isometry">
        <p>
          A transformation f is called an <strong>isometry</strong> (from the Greek
          for "same length") if it sends any two points P₁ and P₂ to points f(P₁)
          and f(P₂) the same distance apart:
        </p>
        <MathBlock>
          {`|f(P_1)f(P_2)| = |P_1P_2|`}
        </MathBlock>
        <p className="mt-2">
          Intuitively, an isometry "moves the plane rigidly" because it preserves
          the distance between points.
        </p>
      </Definition>

      <h3>Types of Isometries</h3>

      <p>
        There are many isometries of the plane, but they can be divided into a
        few simple and obvious types.
      </p>

      <h4 className="text-lg font-semibold text-blue-400 mt-6 mb-3">Translations</h4>

      <p>
        A <strong>translation</strong> moves each point of the plane the same
        distance in the same direction.
      </p>

      <Definition title="Translation">
        <p>
          The translation t_{'{a,b}'} sends each point (x, y) to the point (x + a, y + b).
        </p>
        <MathBlock>
          {`t_{a,b}(x, y) = (x + a, y + b)`}
        </MathBlock>
      </Definition>

      <Theorem title="Translations Preserve Distance">
        <p>
          For points P₁ = (x₁, y₁) and P₂ = (x₂, y₂):
        </p>
        <MathBlock>
          {`|t_{a,b}(P_1)t_{a,b}(P_2)| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} = |P_1P_2|`}
        </MathBlock>
      </Theorem>

      <h4 className="text-lg font-semibold text-green-400 mt-6 mb-3">Rotations</h4>

      <p>
        A <strong>rotation</strong> about the origin is described by two numbers
        c and s such that c² + s² = 1 (where c = cos θ and s = sin θ).
      </p>

      <Definition title="Rotation">
        <p>
          The rotation r_{'{c,s}'} sends the point (x, y) to:
        </p>
        <MathBlock>
          {`r_{c,s}(x, y) = (cx - sy, sx + cy)`}
        </MathBlock>
      </Definition>

      <p>
        The rotation r_{'{c,s}'} preserves lengths because:
      </p>

      <MathBlock>
        {`|r_{c,s}(P_1)r_{c,s}(P_2)| = \\sqrt{(c^2 + s^2)(x_2 - x_1)^2 + (c^2 + s^2)(y_2 - y_1)^2} = |P_1P_2|`}
      </MathBlock>

      <Callout type="info">
        <strong>Why It's a Rotation:</strong> The transformation r_{'{c,s}'} sends
        (0, 0) to itself, moves (1, 0) to (c, s), and moves (0, 1) to (-s, c).
        This is exactly what rotation about O through angle θ does!
      </Callout>

      <h4 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">Reflections</h4>

      <p>
        The easiest reflection to describe is <strong>reflection in the x-axis</strong>,
        which sends P = (x, y) to P̄ = (x, -y).
      </p>

      <Definition title="Reflection in the x-axis">
        <MathBlock>
          {`\\text{reflection}(x, y) = (x, -y)`}
        </MathBlock>
      </Definition>

      <p>
        We can reflect the plane in any line by combining reflection in the
        x-axis with translations and rotations. For example, reflection in
        the line y = 1 is the result of:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4">
        <li>t_{'{0,-1}'}, a translation that moves the line y = 1 to the x-axis</li>
        <li>Reflection in the x-axis</li>
        <li>t_{'{0,1}'}, which moves the x-axis back to the line y = 1</li>
      </ol>

      <Callout type="important">
        <strong>Fundamental Fact:</strong> Reflections are the most fundamental
        isometries, because any isometry is a combination of reflections. In
        particular:
        <ul className="list-disc list-inside mt-2">
          <li>Any translation is a combination of two reflections</li>
          <li>Any rotation is a combination of two reflections</li>
        </ul>
      </Callout>

      <h4 className="text-lg font-semibold text-pink-400 mt-6 mb-3">Glide Reflections</h4>

      <p>
        A <strong>glide reflection</strong> is the result of a reflection followed
        by a translation in the direction of the line of reflection.
      </p>

      <Definition title="Glide Reflection">
        <p>
          For example, if we reflect in the x-axis and follow with the translation
          t_{'{1,0}'}, then (x, y) ends up at (x + 1, -y).
        </p>
      </Definition>

      <p>
        A glide reflection with nonzero translation length is different from
        translations, rotations, and reflections:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Not a translation: only one line maps to itself (the reflection line)</li>
        <li>Not a rotation: no fixed point exists</li>
        <li>Not a reflection: no fixed points (reflection has the whole line as fixed)</li>
      </ul>

      <h3>The Power of Isometries</h3>

      <p>
        Translations and rotations make it possible to move the origin to any
        point in the plane and the x-axis to any line. Thus, ℝ² is really like
        Euclid's plane: each point is like any other point and each line is
        like any other line.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.6.1</h4>
        <p className="text-slate-300">
          Check that reflection in the x-axis preserves the distance between
          any two points.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.6.2</h4>
        <p className="text-slate-300">
          Reflect the plane in the x-axis, and then in the line y = 1/2. Show
          that the resulting isometry sends (x, y) to (x, y + 1), so it is the
          translation t_{'{0,1}'}.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.6.3</h4>
        <p className="text-slate-300">
          Generalize to show that the combination of reflections in parallel
          lines, distance d/2 apart, is a translation through distance d,
          perpendicular to the lines of reflection.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.6.4</h4>
        <p className="text-slate-300">
          Show that the combination of reflections in lines that meet at angle
          θ/2 is a rotation through angle θ, about the point of intersection.
        </p>
      </div>

      <SectionQuiz
        sectionId={20}
        questions={quizMap[20] || []}
        title="Isometries Quiz"
      />
    </LessonLayout>
  );
}
