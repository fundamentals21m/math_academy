import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2>The Inner Product</h2>

      <p>
        The inner product is a powerful algebraic tool that captures geometric
        information about length and angle in a vector space.
      </p>

      <Definition title="Inner Product">
        <p>
          If <strong>u</strong> = (u₁, u₂) and <strong>v</strong> = (v₁, v₂) are
          vectors in ℝ², we define their <strong>inner product</strong>
          <strong> u</strong> · <strong>v</strong> to be:
        </p>
        <MathBlock>
          {`\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2`}
        </MathBlock>
        <p className="mt-2">
          The inner product of two vectors is not another vector, but a real number
          (or "scalar"). For this reason, <strong>u</strong> · <strong>v</strong> is
          also called the <strong>scalar product</strong>.
        </p>
      </Definition>

      <h3>Algebraic Properties</h3>

      <p>
        It is easy to check, from the definition, that the inner product has the
        following algebraic properties:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <MathBlock>{`\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}`}</MathBlock>
        <MathBlock>{`\\mathbf{u} \\cdot (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{w}`}</MathBlock>
        <MathBlock>{`(a\\mathbf{u}) \\cdot \\mathbf{v} = \\mathbf{u} \\cdot (a\\mathbf{v}) = a(\\mathbf{u} \\cdot \\mathbf{v})`}</MathBlock>
      </div>

      <h3>Length from the Inner Product</h3>

      <Theorem title="Length Formula">
        <p>
          The length |<strong>u</strong>| is the distance of <strong>u</strong> = (u₁, u₂)
          from the origin <strong>0</strong>. By the definition of distance in ℝ²:
        </p>
        <MathBlock>
          {`|\\mathbf{u}|^2 = u_1^2 + u_2^2 = \\mathbf{u} \\cdot \\mathbf{u}`}
        </MathBlock>
      </Theorem>

      <p>
        It follows that the square of the distance from <strong>u</strong> to
        <strong> v</strong> is:
      </p>

      <MathBlock>
        {`|\\mathbf{v} - \\mathbf{u}|^2 = (\\mathbf{v} - \\mathbf{u}) \\cdot (\\mathbf{v} - \\mathbf{u}) = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2\\mathbf{u} \\cdot \\mathbf{v}`}
      </MathBlock>

      <h3>Perpendicularity Criterion</h3>

      <Theorem title="Perpendicularity Test">
        <p>
          Vectors <strong>u</strong> and <strong>v</strong> are <strong>perpendicular</strong>
          if and only if <strong>u</strong> · <strong>v</strong> = 0.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300 mb-2">
          <strong>u</strong> has slope u₂/u₁ and <strong>v</strong> has slope v₂/v₁.
          From Section 3.5, we know they are perpendicular if and only if the product
          of their slopes is −1:
        </p>
        <MathBlock>
          {`\\frac{u_2}{u_1} = -\\frac{v_1}{v_2} \\implies u_2 v_2 = -u_1 v_1`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          This equation holds if and only if 0 = u₁v₁ + u₂v₂ = <strong>u</strong> · <strong>v</strong>.
        </p>
      </div>

      <h3>Concurrence of Altitudes</h3>

      <p>
        Even just the criterion for perpendicularity gives a simple proof of a
        far-from-obvious theorem:
      </p>

      <Theorem title="Concurrence of Altitudes">
        <p>
          In any triangle, the perpendiculars from the vertices to opposite sides
          (the <strong>altitudes</strong>) have a common point.
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300 mb-2">
          Take <strong>0</strong> at the intersection of two altitudes, say those
          through the vertices <strong>u</strong> and <strong>v</strong>. Then it
          remains to show that the line from <strong>0</strong> to the third vertex
          <strong> w</strong> is perpendicular to the side <strong>v</strong> − <strong>u</strong>.
        </p>
        <p className="text-slate-300 mb-2">
          Because <strong>u</strong> is perpendicular to the opposite side <strong>w</strong> − <strong>v</strong>:
        </p>
        <MathBlock>{`\\mathbf{u} \\cdot (\\mathbf{w} - \\mathbf{v}) = 0 \\implies \\mathbf{u} \\cdot \\mathbf{w} - \\mathbf{u} \\cdot \\mathbf{v} = 0`}</MathBlock>
        <p className="text-slate-300 mt-2 mb-2">
          Because <strong>v</strong> is perpendicular to the opposite side <strong>u</strong> − <strong>w</strong>:
        </p>
        <MathBlock>{`\\mathbf{v} \\cdot (\\mathbf{u} - \\mathbf{w}) = 0 \\implies \\mathbf{v} \\cdot \\mathbf{u} - \\mathbf{v} \\cdot \\mathbf{w} = 0`}</MathBlock>
        <p className="text-slate-300 mt-2">
          Adding these equations: <strong>u</strong> · <strong>w</strong> − <strong>v</strong> · <strong>w</strong> = 0,
          so <strong>w</strong> · (<strong>v</strong> − <strong>u</strong>) = 0.
          Thus, <strong>w</strong> is perpendicular to <strong>v</strong> − <strong>u</strong>.
        </p>
      </div>

      <Callout type="info">
        <strong>The Orthocenter:</strong> The point where all three altitudes of a
        triangle meet is called the <strong>orthocenter</strong>.
      </Callout>

      <h3>Perpendicular Bisector</h3>

      <p>
        The inner product also gives a concise way to show that the equidistant
        line of two points is the perpendicular bisector of the line connecting them.
      </p>

      <Theorem title="Perpendicular Bisector Characterization">
        <p>
          The condition for <strong>w</strong> to be equidistant from <strong>u</strong>
          and <strong>v</strong> is equivalent to:
        </p>
        <MathBlock>
          {`\\left(\\mathbf{w} - \\frac{\\mathbf{u} + \\mathbf{v}}{2}\\right) \\cdot (\\mathbf{u} - \\mathbf{v}) = 0`}
        </MathBlock>
        <p className="mt-2">
          This says <strong>w</strong> is on the perpendicular bisector of the line
          from <strong>u</strong> to <strong>v</strong>.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.4.1</h4>
        <p className="text-slate-300">
          Suppose a parallelogram has vertices at <strong>0</strong>, <strong>u</strong>,
          <strong> v</strong>, and <strong>u</strong> + <strong>v</strong>. Show that
          its diagonals have directions <strong>u</strong> + <strong>v</strong> and
          <strong> u</strong> − <strong>v</strong>.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.4.2</h4>
        <p className="text-slate-300">
          Deduce from Exercise 4.4.1 that the inner product of these diagonal directions
          is |<strong>u</strong>|² − |<strong>v</strong>|², and explain why this is
          zero for a rhombus.
        </p>
      </div>

      <SectionQuiz
        sectionId={26}
        questions={quizMap[26] || []}
        title="Inner Product Quiz"
      />
    </LessonLayout>
  );
}
