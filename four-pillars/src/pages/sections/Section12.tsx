import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Angles in a Circle</h2>

      <p>
        One of the most beautiful results in Euclidean geometry concerns the
        angles formed by points on a circle. The <strong>inscribed angle
        theorem</strong> shows that these angles have a remarkable invariance
        property.
      </p>

      <h3>Central and Inscribed Angles</h3>

      <Definition title="Central Angle">
        <p>
          A <strong>central angle</strong> is an angle whose vertex is at the
          center of the circle. It "subtends" an arc of the circle.
        </p>
      </Definition>

      <Definition title="Inscribed Angle">
        <p>
          An <strong>inscribed angle</strong> is an angle whose vertex lies on
          the circle and whose sides are chords of the circle.
        </p>
      </Definition>

      <h3>The Inscribed Angle Theorem</h3>

      <Theorem title="Inscribed Angle Theorem (Euclid III.20)">
        <p>
          An inscribed angle is half the central angle that subtends the same arc.
        </p>
        <p className="mt-2">
          Equivalently: All inscribed angles subtending the same arc are equal.
        </p>
      </Theorem>

      <p>
        <strong>Proof (Case 1: Center lies on one side)</strong>
      </p>

      <p>
        Consider an inscribed angle ∠BAC where the center O lies on one of
        the sides, say AC. Draw the radius OB.
      </p>

      <p>
        Since OA = OB (both radii), triangle OAB is isosceles. Therefore
        ∠OAB = ∠OBA = α (say).
      </p>

      <p>
        The central angle ∠BOC is an exterior angle of triangle OAB, so:
      </p>

      <MathBlock>
        {`\\angle BOC = \\angle OAB + \\angle OBA = \\alpha + \\alpha = 2\\alpha`}
      </MathBlock>

      <p>
        Thus the inscribed angle α is half the central angle. ∎
      </p>

      <Callout type="info">
        <strong>General Case:</strong> When the center doesn't lie on either
        side of the inscribed angle, we draw a diameter through the vertex
        and apply the result to each half separately.
      </Callout>

      <h3>Corollary: Angles on the Same Arc</h3>

      <Theorem title="Equal Inscribed Angles">
        <p>
          All inscribed angles subtending the same arc are equal.
        </p>
      </Theorem>

      <p>
        This follows immediately because each inscribed angle is half of the
        same central angle.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Visualization</h4>
        <p className="text-slate-300">
          Imagine fixing two points A and B on a circle. As a third point C
          moves along the arc on one side of AB, the angle ∠ACB remains
          constant! This invariance is the key geometric insight.
        </p>
      </div>

      <h3>Thales' Circle Theorem</h3>

      <p>
        A special case of enormous importance occurs when the inscribed angle
        subtends a diameter:
      </p>

      <Theorem title="Thales' Circle Theorem (Euclid III.31)">
        <p>
          An angle inscribed in a semicircle is a right angle.
        </p>
        <MathBlock>
          {`\\text{If } AB \\text{ is a diameter and } C \\text{ is on the circle, then } \\angle ACB = 90°`}
        </MathBlock>
      </Theorem>

      <p>
        <strong>Proof:</strong> The central angle subtending a diameter is 180°
        (a straight line through the center). By the inscribed angle theorem,
        the inscribed angle is half of 180°, which is 90°. ∎
      </p>

      <Callout type="important">
        <strong>Historical Note:</strong> This theorem is attributed to Thales
        of Miletus and is sometimes called "Thales' theorem" (distinct from
        the proportionality theorem we proved earlier). Legend says Thales
        sacrificed an ox to the gods in gratitude for this discovery!
      </Callout>

      <h3>The Converse</h3>

      <p>
        The converse of Thales' circle theorem is equally important:
      </p>

      <Theorem title="Converse of Thales' Circle Theorem">
        <p>
          If ∠ACB = 90°, then C lies on the circle with diameter AB.
        </p>
      </Theorem>

      <p>
        This means the locus of points from which a segment AB subtends a
        right angle is exactly the circle with AB as diameter.
      </p>

      <h3>Applications</h3>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">Constructing Right Angles</h4>
          <p className="text-slate-300 mt-2">
            Given a point P and a line L, we can construct a perpendicular from
            P to L by using a semicircle.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">Finding Circle Centers</h4>
          <p className="text-slate-300 mt-2">
            If we have three points on a circle, we can find the center by
            constructing perpendicular bisectors.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-400">Square Root Construction</h4>
          <p className="text-slate-300 mt-2">
            Thales' theorem provides a method to construct the geometric mean
            (and hence square roots), which we'll see in the next section.
          </p>
        </div>
      </div>

      <h3>Cyclic Quadrilaterals</h3>

      <p>
        A quadrilateral whose vertices all lie on a circle is called
        <strong>cyclic</strong>. The inscribed angle theorem gives us:
      </p>

      <Theorem title="Cyclic Quadrilateral Theorem">
        <p>
          In a cyclic quadrilateral, opposite angles sum to 180°.
        </p>
        <MathBlock>
          {`\\alpha + \\gamma = 180° \\quad \\text{and} \\quad \\beta + \\delta = 180°`}
        </MathBlock>
      </Theorem>

      <p>
        <strong>Proof:</strong> The opposite angles subtend arcs that together
        form the entire circle. Since the full circle corresponds to a central
        angle of 360°, the sum of the two inscribed angles is 180°. ∎
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.7.1</h4>
        <p className="text-slate-300">
          Prove that a parallelogram inscribed in a circle must be a rectangle.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.7.2</h4>
        <p className="text-slate-300">
          Given a circle and a point P outside it, construct the tangent lines
          from P to the circle using only the properties proved in this section.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.7.3</h4>
        <p className="text-slate-300">
          Prove that if a quadrilateral has opposite angles summing to 180°,
          then it is cyclic.
        </p>
      </div>

      <SectionQuiz
        sectionId={12}
        questions={quizMap[12] || []}
        title="Angles in a Circle Quiz"
      />
    </LessonLayout>
  );
}
