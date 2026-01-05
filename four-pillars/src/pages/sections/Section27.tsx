import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { DotProductAngleDemo } from '@/components/visualizations/chapter4';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2>Inner Product and Cosine</h2>

      <p>
        The inner product of vectors <strong>u</strong> and <strong>v</strong> depends
        not only on their lengths |<strong>u</strong>| and |<strong>v</strong>| but also
        on the angle θ between them. The simplest way to express this dependence is
        with the help of the <strong>cosine function</strong>.
      </p>

      <h3>Cosine as a Ratio</h3>

      <Definition title="Cosine Definition">
        <p>
          For a right-angled triangle with vertices <strong>0</strong>, <strong>u</strong>,
          and <strong>v</strong> (where the right angle is at <strong>u</strong>), the
          cosine of angle θ at the origin is defined as:
        </p>
        <MathBlock>
          {`\\cos\\theta = \\frac{|\\mathbf{u}|}{|\\mathbf{v}|}`}
        </MathBlock>
        <p className="mt-2">
          The cosine is the ratio of the adjacent side to the hypotenuse.
        </p>
      </Definition>

      <h3>The Inner Product Formula</h3>

      <p>
        We can use the inner product criterion for perpendicularity to derive the
        fundamental formula relating inner product to angle.
      </p>

      <Theorem title="Inner Product Formula"
        proof={
          <>
            <p>Consider vectors u and v emanating from the origin, with angle θ between them.</p>
            <p className="mt-2"><strong>Step 1:</strong> Drop a perpendicular from the tip of v to the line containing u, meeting it at point P.</p>
            <p className="mt-2">The vector from 0 to P is the projection of v onto u: proj_u(v) = (|v|cos θ) (u/|u|).</p>
            <p className="mt-2"><strong>Step 2:</strong> The perpendicularity condition (v - proj_u(v)) · u = 0 gives:</p>
            <MathBlock math="v \cdot u - \text{proj}_u(v) \cdot u = 0" />
            <p className="mt-2"><strong>Step 3:</strong> Since proj_u(v) = (|v|cos θ)(u/|u|):</p>
            <MathBlock math="\text{proj}_u(v) \cdot u = |v|\cos\theta \cdot \frac{u \cdot u}{|u|} = |v|\cos\theta \cdot |u|" />
            <p className="mt-2"><strong>Step 4:</strong> Substituting back:</p>
            <MathBlock math="u \cdot v = |u||v|\cos\theta" />
          </>
        }
      >
        <p>
          If θ is the angle between vectors <strong>u</strong> and <strong>v</strong>, then:
        </p>
        <MathBlock>
          {`\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta`}
        </MathBlock>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300 mb-2">
          In a right triangle with <strong>0</strong>, <strong>u</strong>, <strong>v</strong>
          where <strong>v</strong> − <strong>u</strong> is perpendicular to <strong>u</strong>:
        </p>
        <MathBlock>
          {`0 = \\mathbf{u} \\cdot (\\mathbf{v} - \\mathbf{u}) = \\mathbf{u} \\cdot \\mathbf{v} - \\mathbf{u} \\cdot \\mathbf{u}`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          Therefore:
        </p>
        <MathBlock>
          {`\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u} \\cdot \\mathbf{u} = |\\mathbf{u}|^2 = |\\mathbf{u}||\\mathbf{v}|\\frac{|\\mathbf{u}|}{|\\mathbf{v}|} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta`}
        </MathBlock>
      </div>

      <Callout type="info">
        This formula gives a convenient way to calculate the angle (or at least its
        cosine) between any two lines, because we know how to calculate |<strong>u</strong>|
        and |<strong>v</strong>| from their components.
      </Callout>

      <h3>The Cosine Rule</h3>

      <p>
        The inner product formula also gives us the "cosine rule" of trigonometry
        directly from the calculation of (<strong>u</strong> − <strong>v</strong>) ·
        (<strong>u</strong> − <strong>v</strong>).
      </p>

      <Theorem title="Cosine Rule (Law of Cosines)"
        proof={
          <>
            <p>Consider a triangle with vertices at 0, u, and v. The side opposite to the origin has length |u - v|.</p>
            <p className="mt-2"><strong>Step 1:</strong> Compute |u - v|² using the dot product:</p>
            <MathBlock math="|u - v|^2 = (u - v) \cdot (u - v)" />
            <p className="mt-2"><strong>Step 2:</strong> Expand using distributivity:</p>
            <MathBlock math="= u \cdot u - u \cdot v - v \cdot u + v \cdot v" />
            <MathBlock math="= |u|^2 - 2(u \cdot v) + |v|^2" />
            <p className="mt-2"><strong>Step 3:</strong> Apply the inner product formula u · v = |u||v|cos θ:</p>
            <MathBlock math="= |u|^2 + |v|^2 - 2|u||v|\cos\theta" />
          </>
        }
      >
        <p>
          In any triangle with sides <strong>u</strong>, <strong>v</strong>, and
          <strong> u</strong> − <strong>v</strong>, and angle θ opposite to the side
          <strong> u</strong> − <strong>v</strong>:
        </p>
        <MathBlock>
          {`|\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta`}
        </MathBlock>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300 mb-2">
          The proof is purely algebraic:
        </p>
        <MathBlock>
          {`\\begin{aligned}
|\\mathbf{u} - \\mathbf{v}|^2 &= (\\mathbf{u} - \\mathbf{v}) \\cdot (\\mathbf{u} - \\mathbf{v}) \\\\
&= \\mathbf{u} \\cdot \\mathbf{u} - 2\\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{v} \\cdot \\mathbf{v} \\\\
&= |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2\\mathbf{u} \\cdot \\mathbf{v} \\\\
&= |\\mathbf{u}|^2 + |\\mathbf{v}|^2 - 2|\\mathbf{u}||\\mathbf{v}|\\cos\\theta
\\end{aligned}`}
        </MathBlock>
      </div>

      <h3>The Pythagorean Theorem as a Special Case</h3>

      <p>
        Consider the special case where <strong>u</strong> and <strong>v</strong> are
        the sides of a right-angled triangle and <strong>u</strong> − <strong>v</strong>
        is the hypotenuse. In this case, <strong>u</strong> is perpendicular to
        <strong> v</strong>, so <strong>u</strong> · <strong>v</strong> = 0, and the
        cosine rule becomes:
      </p>

      <MathBlock>
        {`\\text{hypotenuse}^2 = |\\mathbf{u} - \\mathbf{v}|^2 = |\\mathbf{u}|^2 + |\\mathbf{v}|^2`}
      </MathBlock>

      <Callout type="info">
        This is the <strong>Pythagorean theorem</strong>! This should not be surprising,
        because the Pythagorean theorem is built into the definition of distance in ℝ²
        and hence into the inner product.
      </Callout>

      <h3>Angle in a Semicircle</h3>

      <p>
        A useful formula for studying right-angled triangles is:
      </p>

      <MathBlock>
        {`(\\mathbf{v} + \\mathbf{u}) \\cdot (\\mathbf{v} - \\mathbf{u}) = |\\mathbf{v}|^2 - |\\mathbf{u}|^2`}
      </MathBlock>

      <Theorem title="Angle in a Semicircle">
        <p>
          Take a circle with center <strong>0</strong> and a diameter with ends
          <strong> u</strong> and −<strong>u</strong>. Let <strong>v</strong> be any
          other point on the circle. Then the sides of the triangle meeting at
          <strong> v</strong> have directions <strong>v</strong> + <strong>u</strong>
          and <strong>v</strong> − <strong>u</strong>.
        </p>
        <p className="mt-2">
          Since |<strong>v</strong>| = |<strong>u</strong>| (both are radii), we have
          (<strong>v</strong> + <strong>u</strong>) · (<strong>v</strong> − <strong>u</strong>) =
          |<strong>v</strong>|² − |<strong>u</strong>|² = 0, so these sides are
          <strong> perpendicular</strong>.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.5.1</h4>
        <p className="text-slate-300">
          Show that |<strong>v</strong> − <strong>u</strong>|² = |<strong>u</strong>|² +
          |<strong>v</strong>|² when <strong>u</strong> and <strong>v</strong> are
          perpendicular, and explain why this is the Pythagorean theorem.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.5.2</h4>
        <p className="text-slate-300">
          Show that (<strong>v</strong> + <strong>u</strong>) · (<strong>v</strong> − <strong>u</strong>) =
          |<strong>v</strong>|² − |<strong>u</strong>|².
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.5.3</h4>
        <p className="text-slate-300">
          For a point <strong>v</strong> on a semicircle with diameter endpoints
          <strong> u</strong> and −<strong>u</strong>, show that the sides of the
          triangle meeting at <strong>v</strong> have directions <strong>v</strong> + <strong>u</strong>
          and <strong>v</strong> − <strong>u</strong>, and hence are perpendicular.
        </p>
      </div>

      <DotProductAngleDemo className="my-6" />

      <SectionQuiz
        sectionId={27}
        questions={quizMap[27] || []}
        title="Inner Product and Cosine Quiz"
      />
    </LessonLayout>
  );
}
