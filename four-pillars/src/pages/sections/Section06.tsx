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

      <Theorem title="Alternate Interior Angles">
        <p>
          If a line <em>L</em> crosses two parallel lines, then the alternate
          interior angles are equal.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> Suppose lines <em>M</em> and <em>N</em> are parallel,
        and line <em>L</em> crosses them, making angles α and β as alternate
        interior angles. If α ≠ β, then the sum of angles on one side would be
        either less than or greater than π, meaning the lines would meet—contradicting
        that they are parallel. Therefore α = β. ∎
      </p>

      <h3>The Angle Sum of a Triangle</h3>

      <p>
        One of the most important consequences of the parallel axiom is the
        classical theorem about the sum of angles in a triangle.
      </p>

      <Theorem title="Triangle Angle Sum">
        <p>
          The sum of the angles in any triangle equals π (180°):
        </p>
        <MathBlock>
          {`\\alpha + \\beta + \\gamma = \\pi`}
        </MathBlock>
      </Theorem>

      <p>
        <strong>Proof:</strong> Consider a triangle ABC with angles α at A, β at B,
        and γ at C. Draw a line through A parallel to BC.
      </p>

      <p>
        By the alternate interior angles theorem:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>The angle between the parallel line and AB equals β</li>
        <li>The angle between the parallel line and AC equals γ</li>
      </ul>

      <p>
        Since these three angles (β, α, γ) form a straight line at A, their sum
        is π. Therefore α + β + γ = π. ∎
      </p>

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

      <Theorem title="Exterior Angle Theorem">
        <p>
          An exterior angle of a triangle equals the sum of the two non-adjacent
          interior angles.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> If the interior angles are α, β, γ and we extend
        the side opposite to γ, the exterior angle δ satisfies γ + δ = π (they
        form a straight line). Since α + β + γ = π, we have δ = α + β. ∎
      </p>

      <SectionQuiz
        sectionId={6}
        questions={quizMap[6] || []}
        title="The Parallel Axiom Quiz"
      />
    </LessonLayout>
  );
}
