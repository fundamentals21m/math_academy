import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { ThalesProofDemo } from '@/components/visualizations/chapter2';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Proof of the Thales Theorem</h2>

      <p>
        In Chapter 1, we stated the Thales theorem without proof. Now, with
        Euclid's theory of areas at our disposal, we can prove it rigorously.
        This theorem is fundamental to the theory of similar triangles.
      </p>

      <Theorem title="Thales Theorem (Basic Proportionality)"
        proof={
          <>
            <p>Let DE ∥ BC in triangle ABC, with D on AB and E on AC.</p>
            <p className="mt-2"><strong>Step 1:</strong> Consider triangles ADE and DBE. They share vertex E and have bases AD and DB on line AB.</p>
            <p className="mt-2">Since they share the same height (from E to AB):</p>
            <MathBlock math="\frac{\text{Area}(\triangle ADE)}{\text{Area}(\triangle DBE)} = \frac{AD}{DB}" />
            <p className="mt-2"><strong>Step 2:</strong> Consider triangles ADE and DEC. They share vertex D and have bases AE and EC on line AC.</p>
            <p className="mt-2">Since they share the same height (from D to AC):</p>
            <MathBlock math="\frac{\text{Area}(\triangle ADE)}{\text{Area}(\triangle DEC)} = \frac{AE}{EC}" />
            <p className="mt-2"><strong>Step 3:</strong> Triangles DBE and DEC share base DE. Since DE ∥ BC, they have the same height (distance between parallels DE and BC).</p>
            <p className="mt-2">By I.37 (triangles with same base and height have equal area):</p>
            <MathBlock math="\text{Area}(\triangle DBE) = \text{Area}(\triangle DEC)" />
            <p className="mt-2"><strong>Step 4:</strong> Combining Steps 1, 2, and 3:</p>
            <MathBlock math="\frac{AD}{DB} = \frac{\text{Area}(\triangle ADE)}{\text{Area}(\triangle DBE)} = \frac{\text{Area}(\triangle ADE)}{\text{Area}(\triangle DEC)} = \frac{AE}{EC}" />
          </>
        }
      >
        <p>
          A line parallel to one side of a triangle divides the other two sides
          proportionally.
        </p>
        <p className="mt-2">
          More precisely: If line DE is parallel to BC in triangle ABC, with D
          on AB and E on AC, then:
        </p>
        <MathBlock>
          {`\\frac{AD}{DB} = \\frac{AE}{EC}`}
        </MathBlock>
      </Theorem>

      <h3>The Proof Using Areas</h3>

      <p>
        The key insight is that triangles with the same height have areas
        proportional to their bases.
      </p>

      <p>
        <strong>Step 1: Set up the triangles</strong>
      </p>
      <p>
        Consider triangles ADE and DBE. They share the same height (the
        perpendicular distance from E to line AB).
      </p>

      <MathBlock>
        {`\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle DBE)} = \\frac{AD}{DB}`}
      </MathBlock>

      <p>
        <strong>Step 2: Consider another pair</strong>
      </p>
      <p>
        Similarly, triangles ADE and DEC share the same height (the
        perpendicular distance from D to line AC).
      </p>

      <MathBlock>
        {`\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle DEC)} = \\frac{AE}{EC}`}
      </MathBlock>

      <p>
        <strong>Step 3: Key observation</strong>
      </p>
      <p>
        Triangles DBE and DEC have the same base DE. Since DE ∥ BC, these
        triangles also have the same height (the perpendicular distance between
        the parallel lines DE and BC).
      </p>

      <Callout type="info">
        <strong>Critical Point:</strong> Because DE is parallel to BC, the
        triangles DBE and DEC have equal areas. They share base DE and lie
        between the same parallel lines.
      </Callout>

      <p>
        <strong>Step 4: Conclude the proof</strong>
      </p>
      <p>
        Since Area(△DBE) = Area(△DEC), we have:
      </p>

      <MathBlock>
        {`\\frac{AD}{DB} = \\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle DBE)} = \\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle DEC)} = \\frac{AE}{EC}`}
      </MathBlock>

      <p>This completes the proof. ∎</p>

      <h3>The Converse of Thales' Theorem</h3>

      <Theorem title="Converse of Thales Theorem"
        proof={
          <>
            <p>Let D be on AB and E on AC such that AD/DB = AE/EC. We prove DE ∥ BC.</p>
            <p className="mt-2"><strong>Proof by contradiction:</strong></p>
            <p className="mt-2"><strong>Step 1:</strong> Assume DE is not parallel to BC.</p>
            <p className="mt-2"><strong>Step 2:</strong> Draw line through D parallel to BC, meeting AC at point E′.</p>
            <p className="mt-2"><strong>Step 3:</strong> By the Thales theorem:</p>
            <MathBlock math="\frac{AD}{DB} = \frac{AE'}{E'C}" />
            <p className="mt-2"><strong>Step 4:</strong> By hypothesis:</p>
            <MathBlock math="\frac{AD}{DB} = \frac{AE}{EC}" />
            <p className="mt-2"><strong>Step 5:</strong> Therefore:</p>
            <MathBlock math="\frac{AE'}{E'C} = \frac{AE}{EC}" />
            <p className="mt-2"><strong>Step 6:</strong> Cross-multiplying: AE′ · EC = AE · E′C.</p>
            <p className="mt-2">If E′ ≠ E, then either AE′ &lt; AE (so E′ is between A and E) or AE′ &gt; AE (so E is between A and E′).</p>
            <p className="mt-2">In the first case: E′C &gt; EC, so AE′ · EC &lt; AE · E′C, contradiction.</p>
            <p className="mt-2">In the second case: E′C &lt; EC, so AE′ · EC &gt; AE · E′C, contradiction.</p>
            <p className="mt-2"><strong>Step 7:</strong> Therefore E′ = E, so DE ∥ BC.</p>
          </>
        }
      >
        <p>
          If a line divides two sides of a triangle proportionally, then it is
          parallel to the third side.
        </p>
      </Theorem>

      <h3>Applications of Thales' Theorem</h3>

      <p>
        The Thales theorem has many important applications:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">Similar Triangles</h4>
          <p className="text-slate-300 mt-2">
            If a line parallel to one side creates a smaller triangle, that
            triangle is similar to the original with proportional sides.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">Dividing Segments</h4>
          <p className="text-slate-300 mt-2">
            To divide a segment in a given ratio, construct parallel lines
            using the Thales theorem.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-400">The Midpoint Theorem</h4>
          <p className="text-slate-300 mt-2">
            The line joining the midpoints of two sides is parallel to the
            third side and half its length.
          </p>
        </div>
      </div>

      <h3>The Midpoint Theorem</h3>

      <p>
        A special case of the Thales theorem is particularly useful:
      </p>

      <Theorem title="Midpoint Theorem"
        proof={
          <>
            <p>Let D and E be the midpoints of sides AB and AC respectively in triangle ABC.</p>
            <p className="mt-2"><strong>Part 1: DE ∥ BC</strong></p>
            <p className="mt-2"><strong>Step 1:</strong> Since D is the midpoint of AB: AD = DB, so AD/DB = 1.</p>
            <p className="mt-2"><strong>Step 2:</strong> Since E is the midpoint of AC: AE = EC, so AE/EC = 1.</p>
            <p className="mt-2"><strong>Step 3:</strong> Since AD/DB = AE/EC = 1, by the converse of Thales theorem, DE ∥ BC.</p>
            <p className="mt-2"><strong>Part 2: DE = ½BC</strong></p>
            <p className="mt-2"><strong>Step 4:</strong> Since DE ∥ BC, triangles ADE and ABC are similar (AA similarity: ∠A is common, ∠ADE = ∠ABC as corresponding angles).</p>
            <p className="mt-2"><strong>Step 5:</strong> The ratio of similarity is:</p>
            <MathBlock math="\frac{AD}{AB} = \frac{AD}{AD + DB} = \frac{AD}{2 \cdot AD} = \frac{1}{2}" />
            <p className="mt-2"><strong>Step 6:</strong> Corresponding sides of similar triangles are proportional:</p>
            <MathBlock math="\frac{DE}{BC} = \frac{1}{2} \implies DE = \frac{1}{2}BC" />
          </>
        }
      >
        <p>
          The segment joining the midpoints of two sides of a triangle is
          parallel to the third side and equal to half of it.
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Historical Note:</strong> Thales of Miletus (c. 624-546 BCE)
        is often considered the first mathematician in the Greek tradition.
        While the theorem bears his name, the rigorous proof we've seen here
        was formalized by Euclid.
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.6.1</h4>
        <p className="text-slate-300">
          In triangle ABC, D is on AB such that AD = 2·DB, and E is on AC such
          that DE ∥ BC. Find the ratio AE:EC.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.6.2</h4>
        <p className="text-slate-300">
          Prove that the medians of a triangle are concurrent (meet at a single
          point) using the Thales theorem.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.6.3</h4>
        <p className="text-slate-300">
          Use Thales' theorem to construct a line segment that is ⅔ the length
          of a given segment.
        </p>
      </div>

      <ThalesProofDemo className="my-6" />

      <SectionQuiz
        sectionId={11}
        questions={quizMap[11] || []}
        title="Proof of the Thales Theorem Quiz"
      />
    </LessonLayout>
  );
}
