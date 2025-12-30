import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Proof of the Thales Theorem</h2>

      <p>
        In Chapter 1, we stated the Thales theorem without proof. Now, with
        Euclid's theory of areas at our disposal, we can prove it rigorously.
        This theorem is fundamental to the theory of similar triangles.
      </p>

      <Theorem title="Thales Theorem (Basic Proportionality)">
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

      <Theorem title="Converse of Thales Theorem">
        <p>
          If a line divides two sides of a triangle proportionally, then it is
          parallel to the third side.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> Suppose D is on AB and E is on AC with
        AD/DB = AE/EC. We want to show DE ∥ BC.
      </p>

      <p>
        Assume, for contradiction, that DE is not parallel to BC. Then draw
        the line through D parallel to BC, meeting AC at some point E'.
        By the Thales theorem:
      </p>

      <MathBlock>
        {`\\frac{AD}{DB} = \\frac{AE'}{E'C}`}
      </MathBlock>

      <p>
        But we also have AD/DB = AE/EC. Therefore AE'/E'C = AE/EC, which
        means E' = E. So DE is indeed parallel to BC. ∎
      </p>

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

      <Theorem title="Midpoint Theorem">
        <p>
          The segment joining the midpoints of two sides of a triangle is
          parallel to the third side and equal to half of it.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> If D and E are midpoints of AB and AC
        respectively, then AD/DB = AE/EC = 1. By the converse of Thales'
        theorem, DE ∥ BC.
      </p>

      <p>
        For the length, note that triangles ADE and ABC are similar with
        ratio 1:2 (since AD = ½AB and AE = ½AC). Therefore DE = ½BC. ∎
      </p>

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

      <SectionQuiz
        sectionId={11}
        questions={quizMap[11] || []}
        title="Proof of the Thales Theorem Quiz"
      />
    </LessonLayout>
  );
}
