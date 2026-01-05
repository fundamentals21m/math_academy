import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { CircleAngleTheorem } from '@/components/visualizations/chapter2';

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

      <Theorem title="Inscribed Angle Theorem (Euclid III.20)"
        proof={
          <>
            <p>Let ∠BAC be an inscribed angle subtending arc BC, and let O be the center.</p>
            <p className="mt-2"><strong>Case 1: O lies on side AC</strong></p>
            <p className="mt-2">Draw radius OB. Since OA = OB (radii), triangle OAB is isosceles.</p>
            <p className="mt-2">Let ∠OAB = ∠OBA = α (base angles of isosceles triangle).</p>
            <p className="mt-2">Central angle ∠BOC is an exterior angle of △OAB:</p>
            <MathBlock math="\angle BOC = \angle OAB + \angle OBA = \alpha + \alpha = 2\alpha" />
            <p className="mt-2"><strong>Case 2: O lies inside angle BAC</strong></p>
            <p className="mt-2">Draw diameter AD through A. By Case 1:</p>
            <MathBlock math="\angle BAD = \frac{1}{2}\angle BOD \text{ and } \angle DAC = \frac{1}{2}\angle DOC" />
            <p className="mt-2">Adding: ∠BAC = ∠BAD + ∠DAC = ½(∠BOD + ∠DOC) = ½∠BOC.</p>
            <p className="mt-2"><strong>Case 3: O lies outside angle BAC</strong></p>
            <p className="mt-2">Draw diameter AD. By Case 1:</p>
            <MathBlock math="\angle BAD = \frac{1}{2}\angle BOD \text{ and } \angle CAD = \frac{1}{2}\angle COD" />
            <p className="mt-2">Subtracting: ∠BAC = ∠BAD - ∠CAD = ½(∠BOD - ∠COD) = ½∠BOC.</p>
          </>
        }
      >
        <p>
          An inscribed angle is half the central angle that subtends the same arc.
        </p>
        <p className="mt-2">
          Equivalently: All inscribed angles subtending the same arc are equal.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>General Case:</strong> When the center doesn't lie on either
        side of the inscribed angle, we draw a diameter through the vertex
        and apply the result to each half separately.
      </Callout>

      <h3>Corollary: Angles on the Same Arc</h3>

      <Theorem title="Equal Inscribed Angles"
        proof={
          <>
            <p>Let ∠BAC and ∠BDC be two inscribed angles subtending the same arc BC.</p>
            <p className="mt-2"><strong>Step 1:</strong> Let the central angle subtending arc BC be ∠BOC.</p>
            <p className="mt-2"><strong>Step 2:</strong> By the Inscribed Angle Theorem:</p>
            <MathBlock math="\angle BAC = \frac{1}{2}\angle BOC" />
            <p className="mt-2"><strong>Step 3:</strong> Similarly:</p>
            <MathBlock math="\angle BDC = \frac{1}{2}\angle BOC" />
            <p className="mt-2"><strong>Step 4:</strong> Therefore ∠BAC = ∠BDC.</p>
          </>
        }
      >
        <p>
          All inscribed angles subtending the same arc are equal.
        </p>
      </Theorem>

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

      <Theorem title="Thales' Circle Theorem (Euclid III.31)"
        proof={
          <>
            <p>Let AB be a diameter of a circle with center O, and let C be any point on the circle (other than A or B).</p>
            <p className="mt-2"><strong>Step 1:</strong> The central angle ∠AOB subtending arc ACB is 180° (since AOB is a straight line through the center).</p>
            <p className="mt-2"><strong>Step 2:</strong> By the Inscribed Angle Theorem, the inscribed angle ∠ACB is half the central angle:</p>
            <MathBlock math="\angle ACB = \frac{1}{2} \cdot 180° = 90°" />
            <p className="mt-2">Alternatively, draw radius OC. Since OA = OC = OB (all radii):</p>
            <p className="mt-2">Triangle OAC is isosceles: ∠OAC = ∠OCA = α</p>
            <p className="mt-2">Triangle OBC is isosceles: ∠OBC = ∠OCB = β</p>
            <p className="mt-2">In triangle ABC: ∠CAB + ∠ABC + ∠ACB = 180°</p>
            <MathBlock math="\alpha + \beta + (\alpha + \beta) = 180° \implies 2(\alpha + \beta) = 180° \implies \angle ACB = \alpha + \beta = 90°" />
          </>
        }
      >
        <p>
          An angle inscribed in a semicircle is a right angle.
        </p>
        <MathBlock>
          {`\\text{If } AB \\text{ is a diameter and } C \\text{ is on the circle, then } \\angle ACB = 90°`}
        </MathBlock>
      </Theorem>

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

      <Theorem title="Converse of Thales' Circle Theorem"
        proof={
          <>
            <p>Let ∠ACB = 90° for points A, B, C. We prove C lies on the circle with diameter AB.</p>
            <p className="mt-2"><strong>Step 1:</strong> Let M be the midpoint of AB. This is the center of the circle with diameter AB.</p>
            <p className="mt-2"><strong>Step 2:</strong> Draw segment MC. We must show MC = MA = MB (so C is on the circle).</p>
            <p className="mt-2"><strong>Step 3:</strong> Complete rectangle ACBD by drawing CD ∥ AB and AD ∥ CB.</p>
            <p className="mt-2"><strong>Step 4:</strong> In a rectangle, the diagonals bisect each other and are equal.</p>
            <p className="mt-2">The diagonals AB and CD meet at M (since M is the midpoint of AB, and diagonals bisect).</p>
            <p className="mt-2"><strong>Step 5:</strong> Therefore MA = MB = MC = MD (each is half a diagonal).</p>
            <p className="mt-2"><strong>Step 6:</strong> Since MC = MA = radius of circle with diameter AB, point C lies on this circle.</p>
          </>
        }
      >
        <p>
          If ∠ACB = 90°, then C lies on the circle with diameter AB.
        </p>
      </Theorem>

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

      <Theorem title="Cyclic Quadrilateral Theorem"
        proof={
          <>
            <p>Let ABCD be a cyclic quadrilateral with vertices on a circle, with angles α at A, β at B, γ at C, δ at D.</p>
            <p className="mt-2"><strong>Step 1:</strong> Angle α at A is an inscribed angle subtending arc BCD (the arc not containing A).</p>
            <p className="mt-2">Angle γ at C is an inscribed angle subtending arc BAD (the arc not containing C).</p>
            <p className="mt-2"><strong>Step 2:</strong> Together, arcs BCD and BAD form the complete circle.</p>
            <p className="mt-2">The central angles subtending these arcs sum to 360°.</p>
            <p className="mt-2"><strong>Step 3:</strong> By the Inscribed Angle Theorem:</p>
            <MathBlock math="\alpha = \frac{1}{2}(\text{central angle for arc } BCD)" />
            <MathBlock math="\gamma = \frac{1}{2}(\text{central angle for arc } BAD)" />
            <p className="mt-2"><strong>Step 4:</strong> Adding:</p>
            <MathBlock math="\alpha + \gamma = \frac{1}{2}(360°) = 180°" />
            <p className="mt-2"><strong>Step 5:</strong> Similarly, β + δ = 180° (since arcs ACD and ABD form the complete circle).</p>
          </>
        }
      >
        <p>
          In a cyclic quadrilateral, opposite angles sum to 180°.
        </p>
        <MathBlock>
          {`\\alpha + \\gamma = 180° \\quad \\text{and} \\quad \\beta + \\delta = 180°`}
        </MathBlock>
      </Theorem>

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

      <CircleAngleTheorem className="my-6" />

      <SectionQuiz
        sectionId={12}
        questions={quizMap[12] || []}
        title="Angles in a Circle Quiz"
      />
    </LessonLayout>
  );
}
