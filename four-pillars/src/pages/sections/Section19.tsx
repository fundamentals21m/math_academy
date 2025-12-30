import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { AngleSlopeDemo } from '@/components/visualizations/chapter3';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Angle and Slope</h2>

      <p>
        The concept of distance is easy to handle in coordinate geometry because
        the distance between points is an algebraic function of their coordinates.
        However, the concept of <strong>angle</strong> is more subtle.
      </p>

      <h3>Distance vs. Angle</h3>

      <p>
        The distance between points (x₁, y₁) and (x₂, y₂) is:
      </p>

      <MathBlock>
        {`\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`}
      </MathBlock>

      <p>
        This is an <em>algebraic function</em> of the coordinates. However, the
        angle θ between a line y = tx and the x-axis is tan⁻¹(t), and tan⁻¹(t)
        is <em>not</em> an algebraic function. Nor is tan θ, sin θ, or cos θ.
      </p>

      <Callout type="info">
        <strong>Staying Algebraic:</strong> To remain in the world of algebra,
        we work with the <strong>slope</strong> t rather than the angle θ. Lines
        make the same angle with the x-axis if they have the same slope.
      </Callout>

      <h3>Relative Slope</h3>

      <p>
        To test equality of angles in general, we need the concept of
        <strong> relative slope</strong>.
      </p>

      <Definition title="Relative Slope">
        <p>
          If line L₁ has slope t₁ and line L₂ has slope t₂, then the
          <strong> slope of L₁ relative to L₂</strong> is defined to be:
        </p>
        <MathBlock>
          {`\\pm \\left| \\frac{t_1 - t_2}{1 + t_1 t_2} \\right|`}
        </MathBlock>
      </Definition>

      <p>
        This definition comes from the trigonometric identity:
      </p>

      <MathBlock>
        {`\\tan(\\theta_1 - \\theta_2) = \\frac{\\tan\\theta_1 - \\tan\\theta_2}{1 + \\tan\\theta_1 \\tan\\theta_2}`}
      </MathBlock>

      <p>
        The ± sign and absolute value arise because slopes t₁, t₂ alone specify
        only a pair of lines and hence a pair of angles that add to a straight angle.
      </p>

      <h3>Perpendicular Lines</h3>

      <p>
        The most useful case of relative slope is when lines are perpendicular.
      </p>

      <Theorem title="Condition for Perpendicularity">
        <p>
          Lines of slopes t₁ and t₂ are <strong>perpendicular</strong> if and only if:
        </p>
        <MathBlock>
          {`t_1 \\cdot t_2 = -1`}
        </MathBlock>
        <p className="mt-2 text-sm text-slate-400">
          In other words, the product of the slopes of perpendicular lines is -1.
        </p>
      </Theorem>

      <h3>Rotations in Coordinates</h3>

      <p>
        A <strong>rotation about the origin O</strong> can be described as a
        transformation r_{'{c,s}'} of ℝ² depending on two real numbers c and s
        such that c² + s² = 1.
      </p>

      <Definition title="Rotation Transformation">
        <p>
          The rotation r_{'{c,s}'} sends the point (x, y) to the point:
        </p>
        <MathBlock>
          {`(cx - sy, sx + cy)`}
        </MathBlock>
        <p className="mt-2">
          Here c = cos θ and s = sin θ, where θ is the angle of rotation.
        </p>
      </Definition>

      <h3>Addition Formulas from Rotations</h3>

      <p>
        Composing two rotations leads to proofs of the trigonometric addition
        formulas. If r_{'{c₁,s₁}'} and r_{'{c₂,s₂}'} are rotations with:
      </p>

      <MathBlock>
        {`c_1 = \\cos\\theta_1, \\quad s_1 = \\sin\\theta_1; \\quad c_2 = \\cos\\theta_2, \\quad s_2 = \\sin\\theta_2`}
      </MathBlock>

      <p>
        Then composing these rotations yields:
      </p>

      <Theorem title="Trigonometric Addition Formulas">
        <MathBlock>
          {`\\cos(\\theta_1 + \\theta_2) = \\cos\\theta_1 \\cos\\theta_2 - \\sin\\theta_1 \\sin\\theta_2`}
        </MathBlock>
        <MathBlock>
          {`\\sin(\\theta_1 + \\theta_2) = \\sin\\theta_1 \\cos\\theta_2 + \\cos\\theta_1 \\sin\\theta_2`}
        </MathBlock>
      </Theorem>

      <p>
        From these, we can derive:
      </p>

      <MathBlock>
        {`\\tan(\\theta_1 + \\theta_2) = \\frac{\\tan\\theta_1 + \\tan\\theta_2}{1 - \\tan\\theta_1 \\tan\\theta_2}`}
      </MathBlock>

      <Callout type="important">
        <strong>Looking Ahead:</strong> With coordinates, it becomes possible to
        <em> define</em> the concept of "motion" that Euclid appealed to in his
        proof of SAS. This will be done in the next section on isometries.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.5.1</h4>
        <p className="text-slate-300">
          Show that lines of slopes t₁ and t₂ are perpendicular just in case
          t₁t₂ = -1.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.5.2</h4>
        <p className="text-slate-300">
          Use the condition for perpendicularity to show that the line from
          (1, 0) to (3, 4) is perpendicular to the line from (0, 2) to (4, 0).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.5.3</h4>
        <p className="text-slate-300">
          Show that the outcome of r_{'{c₁,s₁}'} followed by r_{'{c₂,s₂}'} sends (x, y) to:
          <br />
          ((c₁c₂ - s₁s₂)x - (s₁c₂ + c₁s₂)y, (s₁c₂ + c₁s₂)x + (c₁c₂ - s₁s₂)y)
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 3.5.4</h4>
        <p className="text-slate-300">
          Assuming r_{'{c₁,s₁}'} is a rotation through angle θ₁ and r_{'{c₂,s₂}'} is
          a rotation through angle θ₂, deduce the addition formulas for cos and sin.
        </p>
      </div>

      <AngleSlopeDemo className="my-6" />

      <SectionQuiz
        sectionId={19}
        questions={quizMap[19] || []}
        title="Angle and Slope Quiz"
      />
    </LessonLayout>
  );
}
