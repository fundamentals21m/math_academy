import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Euclid's Elements</h2>

      <p>
        Euclid's <em>Elements</em>, written around 300 BCE, is arguably the most
        influential mathematics textbook ever written. For over two thousand years,
        it served as the standard introduction to geometry, and its method of
        logical deduction from axioms became the model for mathematical reasoning
        itself.
      </p>

      <Callout type="note">
        <strong>The Hobbes Anecdote:</strong> The philosopher Thomas Hobbes
        (1588-1679) first encountered the Elements at age 40. Opening the book
        at random to Pythagoras' theorem, he exclaimed "By God, this is impossible!"
        He then traced the proof back through its dependencies, proposition by
        proposition, until he was "demonstratively convinced of that truth."
        This experience made him fall in love with geometry.
      </Callout>

      <h3>The Deductive Method</h3>

      <p>
        The revolutionary contribution of Greek geometry was not just the
        theorems themselves, but the <em>method</em> by which they were established.
        The Greeks were the first to construct mathematics by deduction from
        previously established results, ultimately resting on the most evident
        possible statements, called <strong>axioms</strong>.
      </p>

      <Definition title="The Axiomatic Method">
        <p>
          The <strong>axiomatic method</strong> consists of:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Starting with a small set of self-evident statements (axioms)</li>
          <li>Deriving new statements (theorems) using logical rules</li>
          <li>Building a chain of theorems, each depending only on axioms and previously proven theorems</li>
        </ol>
      </Definition>

      <h3>Euclid's Postulates</h3>

      <p>
        Euclid began his <em>Elements</em> with five postulates—assumptions about
        geometry that he considered self-evident:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-6">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">The Five Postulates</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-200">
          <li>A straight line can be drawn from any point to any other point.</li>
          <li>A finite straight line can be extended continuously in a straight line.</li>
          <li>A circle can be drawn with any center and any radius.</li>
          <li>All right angles are equal to one another.</li>
          <li>
            If a line crosses two other lines so that the interior angles on one
            side sum to less than two right angles, then the two lines will meet
            on that side if extended far enough.
          </li>
        </ol>
      </div>

      <p>
        The first four postulates are simple and intuitive. The fifth postulate—the
        famous <em>parallel postulate</em>—is noticeably more complex. For over
        two thousand years, mathematicians tried to prove it from the other four.
        They failed, and we now know why: there are perfectly consistent geometries
        in which the parallel postulate is false.
      </p>

      <h3>Common Notions</h3>

      <p>
        In addition to the geometric postulates, Euclid stated five "common notions"—
        general principles of reasoning:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-6">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">The Common Notions</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-200">
          <li>Things equal to the same thing are equal to each other.</li>
          <li>If equals are added to equals, the wholes are equal.</li>
          <li>If equals are subtracted from equals, the remainders are equal.</li>
          <li>Things that coincide with one another are equal to one another.</li>
          <li>The whole is greater than the part.</li>
        </ol>
      </div>

      <h3>The Structure of the Elements</h3>

      <p>
        The <em>Elements</em> consists of 13 books covering:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Books I-IV:</strong> Plane geometry (triangles, circles, constructions)</li>
        <li><strong>Book V:</strong> Theory of proportions (handling irrational ratios)</li>
        <li><strong>Book VI:</strong> Similar figures</li>
        <li><strong>Books VII-IX:</strong> Number theory</li>
        <li><strong>Book X:</strong> Classification of irrational magnitudes</li>
        <li><strong>Books XI-XIII:</strong> Solid geometry, culminating in the regular polyhedra</li>
      </ul>

      <Example title="Proposition I.1: Constructing an Equilateral Triangle">
        <p>
          The very first proposition shows how to construct an equilateral triangle
          on a given line segment AB:
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Draw a circle with center A and radius AB</li>
          <li>Draw a circle with center B and radius BA</li>
          <li>Let C be a point where the circles intersect</li>
          <li>Then ABC is equilateral</li>
        </ol>
        <p className="mt-2 text-dark-400">
          (This proof actually contains a subtle gap—Euclid assumes the circles
          intersect, which requires an unstated axiom about continuity.)
        </p>
      </Example>

      <Theorem title="The Lasting Influence of the Elements">
        <p>
          The <em>Elements</em> remained the standard geometry textbook until the
          19th century—a run of over 2000 years. It has been estimated that only
          the Bible has been more widely studied in the Western world.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Looking Ahead:</strong> In the 19th century, mathematicians finally
        understood why the parallel postulate couldn't be proven: alternative
        "non-Euclidean" geometries exist where it fails. This discovery revolutionized
        our understanding of geometry and ultimately led to Einstein's theory of
        general relativity.
      </Callout>

      <SectionQuiz
        sectionId={5}
        questions={quizMap[5] || []}
        title="Euclid's Elements Quiz"
      />
    </LessonLayout>
  );
}
