import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>The Parallel Axiom</h2>

      <p>
        Euclid begins the <em>Elements</em> with five axioms. Four of them are
        straightforward and uncontroversial, but the fifth—the <strong>parallel
        axiom</strong>—stands out as more complex and has been the subject of
        much debate throughout history.
      </p>

      <Definition title="Euclid's Parallel Axiom (Postulate 5)">
        <p>
          If a straight line falling on two straight lines makes the interior
          angles on the same side less than two right angles, the two straight
          lines, if produced indefinitely, meet on that side on which are the
          angles less than two right angles.
        </p>
      </Definition>

      <p>
        This axiom describes when two lines are <em>not</em> parallel. Notice
        that it says nothing about what happens when the angles <em>equal</em> two
        right angles—in that case, the lines are parallel and never meet.
      </p>

      <h3>Understanding the Parallel Axiom</h3>

      <p>
        Consider a line <em>L</em> crossing two other lines, creating interior
        angles α and β on one side. Euclid's axiom states:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>If α + β &lt; π (two right angles), the lines meet on that side</li>
        <li>If α + β &gt; π, the lines meet on the <em>other</em> side</li>
        <li>If α + β = π, the lines are parallel (never meet)</li>
      </ul>

      <Callout type="info">
        <strong>Note:</strong> The parallel axiom is equivalent to saying that
        parallel lines exist and are unique—given a line and a point not on it,
        there is exactly one parallel through that point.
      </Callout>

      <h3>The Modern Form: Playfair's Axiom</h3>

      <p>
        In 1795, John Playfair gave an equivalent but simpler statement that is
        now commonly used in modern geometry courses:
      </p>

      <Definition title="Playfair's Axiom">
        <p>
          Given a line <em>L</em> and a point <em>P</em> not on <em>L</em>, there
          is exactly one line through <em>P</em> parallel to <em>L</em>.
        </p>
      </Definition>

      <p>
        This statement is logically equivalent to Euclid's fifth postulate but
        is easier to understand and work with.
      </p>

      <h3>Alternate Interior Angles</h3>

      <p>
        Using the parallel axiom, we can prove a fundamental property of parallel
        lines. When a transversal crosses two parallel lines, it creates pairs of
        <strong>alternate interior angles</strong>.
      </p>

      <Theorem title="Alternate Interior Angles"
        proof={
          <>
            <p>Let lines M and N be parallel, and let transversal L cross M at point P and N at point Q.</p>
            <p className="mt-2">Let α be the angle on the left of L at P (above M), and β be the angle on the left of L at Q (below N).</p>
            <p className="mt-2"><strong>Proof by contradiction:</strong></p>
            <p className="mt-2">Assume α ≠ β. Without loss of generality, assume α &lt; β.</p>
            <p className="mt-2">The interior angles on the right side of L are (π - α) at P and (π - β) at Q.</p>
            <p className="mt-2">Their sum is:</p>
            <MathBlock math="(\pi - \alpha) + (\pi - \beta) = 2\pi - \alpha - \beta" />
            <p className="mt-2">Since α &lt; β, we have α + β &lt; 2β. If β &lt; π, then α + β &lt; 2π.</p>
            <p className="mt-2">The interior angles on the left sum to α + β &lt; 2π - (α + β) = interior angles on right.</p>
            <p className="mt-2">If α + β &lt; π, by Euclid's fifth postulate, M and N meet on the left, contradicting that they are parallel.</p>
            <p className="mt-2">Therefore α = β.</p>
          </>
        }
      >
        <p>
          If a line <em>L</em> crosses two parallel lines, then the alternate
          interior angles are equal.
        </p>
      </Theorem>

      <h3>The Angle Sum of a Triangle</h3>

      <p>
        One of the most important consequences of the parallel axiom is the
        classical theorem about the sum of angles in a triangle.
      </p>

      <Theorem title="Triangle Angle Sum"
        proof={
          <>
            <p>Let triangle ABC have angles α at A, β at B, and γ at C.</p>
            <p className="mt-2"><strong>Step 1:</strong> Through vertex A, draw line DE parallel to side BC.</p>
            <p className="mt-2"><strong>Step 2:</strong> The transversal AB crosses the parallel lines DE and BC.</p>
            <p className="mt-2">By the alternate interior angles theorem, angle DAB = angle ABC = β.</p>
            <p className="mt-2"><strong>Step 3:</strong> Similarly, the transversal AC crosses the parallel lines DE and BC.</p>
            <p className="mt-2">By the alternate interior angles theorem, angle EAC = angle ACB = γ.</p>
            <p className="mt-2"><strong>Step 4:</strong> At vertex A, the angles DAB, BAC, and CAE lie along the straight line DE:</p>
            <MathBlock math="\angle DAB + \angle BAC + \angle CAE = \pi" />
            <p className="mt-2">Substituting: β + α + γ = π.</p>
            <p className="mt-2">Therefore α + β + γ = π.</p>
          </>
        }
      >
        <p>
          The sum of the angles in any triangle equals π (180°):
        </p>
        <MathBlock>
          {`\\alpha + \\beta + \\gamma = \\pi`}
        </MathBlock>
      </Theorem>

      <Callout type="important">
        <strong>Historical Note:</strong> The angle sum theorem depends essentially
        on the parallel axiom. In non-Euclidean geometries (discovered in the 19th
        century), the angle sum of a triangle can be greater than π (spherical
        geometry) or less than π (hyperbolic geometry).
      </Callout>

      <h3>Exterior Angles</h3>

      <p>
        An <strong>exterior angle</strong> of a triangle is formed by extending one
        side. The angle sum theorem immediately gives us:
      </p>

      <Theorem title="Exterior Angle Theorem"
        proof={
          <>
            <p>Let triangle ABC have interior angles α at A, β at B, and γ at C.</p>
            <p className="mt-2">Extend side BC past C to point D, creating exterior angle δ = ∠ACD.</p>
            <p className="mt-2"><strong>Step 1:</strong> Angles γ and δ form a linear pair (they share ray CA and their other rays are opposite):</p>
            <MathBlock math="\gamma + \delta = \pi" />
            <p className="mt-2"><strong>Step 2:</strong> By the triangle angle sum theorem:</p>
            <MathBlock math="\alpha + \beta + \gamma = \pi" />
            <p className="mt-2"><strong>Step 3:</strong> From Step 2, γ = π - α - β. Substituting into Step 1:</p>
            <MathBlock math="(\pi - \alpha - \beta) + \delta = \pi" />
            <p className="mt-2"><strong>Step 4:</strong> Solving for δ:</p>
            <MathBlock math="\delta = \alpha + \beta" />
            <p className="mt-2">Therefore, the exterior angle equals the sum of the two non-adjacent interior angles.</p>
          </>
        }
      >
        <p>
          An exterior angle of a triangle equals the sum of the two non-adjacent
          interior angles.
        </p>
      </Theorem>

      <SectionQuiz
        sectionId={6}
        questions={quizMap[6] || []}
        title="The Parallel Axiom Quiz"
      />
    </LessonLayout>
  );
}
