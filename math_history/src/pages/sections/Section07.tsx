import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>The Parallel Postulate</h2>

      <p>
        Among Euclid's five postulates, the fifth stands out. While the first four
        are simple and self-evident, the parallel postulate is complex and awkward.
        For over two thousand years, mathematicians tried to prove it from the other
        four. This seemingly technical question ultimately led to a revolution in
        our understanding of space itself.
      </p>

      <h3>The Fifth Postulate</h3>

      <p>
        Here is Euclid's original statement of the fifth postulate:
      </p>

      <Definition title="Euclid's Fifth Postulate">
        <p>
          If a straight line falling on two straight lines makes the interior angles
          on the same side less than two right angles, the two straight lines, if
          produced indefinitely, meet on that side on which the angles are less than
          two right angles.
        </p>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 350 200" className="w-full max-w-lg">
          {/* Two lines */}
          <line x1="50" y1="50" x2="300" y2="80" stroke="#60a5fa" strokeWidth="2" />
          <line x1="50" y1="150" x2="300" y2="120" stroke="#60a5fa" strokeWidth="2" />
          
          {/* Transversal */}
          <line x1="120" y1="20" x2="150" y2="180" stroke="#f472b6" strokeWidth="2" />
          
          {/* Angle arcs */}
          <path d="M 140 65 A 20 20 0 0 0 125 55" fill="none" stroke="#34d399" strokeWidth="2" />
          <path d="M 142 140 A 20 20 0 0 1 127 148" fill="none" stroke="#34d399" strokeWidth="2" />
          
          {/* Angle labels */}
          <text x="145" y="50" fill="#34d399" fontSize="14">α</text>
          <text x="145" y="165" fill="#34d399" fontSize="14">β</text>
          
          {/* Meeting point */}
          <circle cx="320" cy="95" r="4" fill="#fbbf24" />
          <text x="325" y="100" fill="#fbbf24" fontSize="12">meet here</text>
          
          {/* Label */}
          <text x="100" y="195" fill="#94a3b8" fontSize="12">If α + β &lt; 180°, lines meet on this side</text>
        </svg>
      </div>

      <h3>Equivalent Formulations</h3>

      <p>
        Over the centuries, mathematicians found many statements equivalent to the
        fifth postulate. The most famous is <strong>Playfair's Axiom</strong>:
      </p>

      <Theorem title="Playfair's Axiom (1795)">
        <p>
          Through a point not on a given line, there is exactly one line parallel
          to the given line.
        </p>
      </Theorem>

      <p>
        Other equivalent statements include:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>The sum of angles in a triangle equals 180°</li>
        <li>The Pythagorean theorem holds</li>
        <li>Similar triangles of different sizes exist</li>
        <li>There exist rectangles (four right angles)</li>
        <li>The area of a triangle can be arbitrarily large</li>
      </ul>

      <Callout type="note">
        <strong>Remarkable Equivalences:</strong> These equivalences reveal deep
        connections in Euclidean geometry. The Pythagorean theorem, angle sums,
        and the existence of parallel lines are all essentially the same fact!
      </Callout>

      <h3>Two Thousand Years of Attempts</h3>

      <p>
        Many brilliant mathematicians attempted to prove the fifth postulate from
        the other four:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Ptolemy (c. 150 CE)</strong> gave a "proof" that was later found
          to be circular.
        </li>
        <li>
          <strong>Proclus (c. 450 CE)</strong> tried another approach, but also
          made hidden assumptions.
        </li>
        <li>
          <strong>Omar Khayyam (c. 1100)</strong> made significant progress studying
          quadrilaterals with right angles.
        </li>
        <li>
          <strong>Saccheri (1733)</strong> explored what would happen if the postulate
          were false, hoping to derive a contradiction.
        </li>
        <li>
          <strong>Lambert (1766)</strong> went further, deriving many strange but
          consistent results.
        </li>
      </ul>

      <Example title="Saccheri's Approach">
        <p>
          Saccheri considered a quadrilateral ABCD with right angles at A and B,
          and equal sides AD and BC. He then asked: what angle do the sides make at
          C and D?
        </p>
        <p className="mt-2">
          There are three possibilities:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Right angles:</strong> This is equivalent to the parallel postulate</li>
          <li><strong>Obtuse angles:</strong> Saccheri "proved" this impossible</li>
          <li><strong>Acute angles:</strong> Saccheri derived many strange theorems but couldn't find a contradiction</li>
        </ul>
        <p className="mt-2 text-dark-400">
          What Saccheri called "repugnant to the nature of straight lines" turned
          out to be a perfectly valid geometry!
        </p>
      </Example>

      <h3>The Resolution</h3>

      <p>
        In the early 19th century, three mathematicians independently realized the
        truth: <em>the parallel postulate cannot be proven because there are
        consistent geometries where it fails</em>.
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Gauss</strong> (Germany, c. 1816) discovered this but didn't publish</li>
        <li><strong>Bolyai</strong> (Hungary, 1832) published the first account</li>
        <li><strong>Lobachevsky</strong> (Russia, 1829) published independently</li>
      </ul>

      <Callout type="info">
        <strong>The Aftermath:</strong> Non-Euclidean geometry was initially
        considered a mathematical curiosity. But in 1915, Einstein's general
        theory of relativity showed that physical space is actually non-Euclidean—
        curved by the presence of matter. The "impractical" mathematics of Bolyai
        and Lobachevsky turned out to describe the universe itself.
      </Callout>

      <SectionQuiz
        sectionId={7}
        questions={quizMap[7] || []}
        title="The Parallel Postulate Quiz"
      />
    </LessonLayout>
  );
}
