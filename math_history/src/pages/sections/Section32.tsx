import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2>Duality</h2>

      <p>
        One of the most striking features of projective geometry is{' '}
        <strong>duality</strong>: the interchangeability of points and lines.
        Every theorem about points and lines has a "dual" theorem obtained by
        swapping these concepts—and both theorems are automatically true!
      </p>

      <Callout type="info">
        <strong>The Principle of Duality:</strong> In the projective plane, the
        words "point" and "line" can be interchanged throughout any valid statement
        to produce another valid statement. This is not true in Euclidean geometry,
        where parallel lines behave differently from intersecting ones.
      </Callout>

      <h3>The Duality Dictionary</h3>

      <p>
        To dualize a statement, we apply the following substitutions:
      </p>

      <Definition title="Duality Correspondences">
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="font-semibold text-primary-400">Original</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Point</li>
              <li>Line</li>
              <li>Points are collinear</li>
              <li>Lines are concurrent</li>
              <li>Point lies on line</li>
              <li>Line passes through point</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-primary-400">Dual</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Line</li>
              <li>Point</li>
              <li>Lines are concurrent</li>
              <li>Points are collinear</li>
              <li>Line passes through point</li>
              <li>Point lies on line</li>
            </ul>
          </div>
        </div>
      </Definition>

      <h3>Examples of Dual Statements</h3>

      <Example title="Basic Axioms and Their Duals">
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Axiom:</p>
            <p>"Two distinct <em>points</em> determine a unique <em>line</em>."</p>
            <p className="font-semibold mt-2">Dual:</p>
            <p>"Two distinct <em>lines</em> determine a unique <em>point</em>."</p>
          </div>
          <p className="text-dark-400">
            Both are true in the projective plane! (The dual fails in Euclidean
            geometry because parallel lines don't meet.)
          </p>
        </div>
      </Example>

      <h3>Desargues Dualizes to... Desargues</h3>

      <p>
        One of the most elegant examples of duality is Desargues' theorem:
      </p>

      <Theorem title="Desargues' Theorem (Original)">
        <p>
          If two triangles are in perspective from a <strong>point</strong>{' '}
          (corresponding vertices lie on concurrent <strong>lines</strong>),
          then they are in perspective from a <strong>line</strong>{' '}
          (corresponding sides meet in collinear <strong>points</strong>).
        </p>
      </Theorem>

      <Theorem title="Desargues' Theorem (Dual = Converse!)">
        <p>
          If two triangles are in perspective from a <strong>line</strong>{' '}
          (corresponding sides meet in collinear <strong>points</strong>),
          then they are in perspective from a <strong>point</strong>{' '}
          (corresponding vertices lie on concurrent <strong>lines</strong>).
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Self-Dual Theorem:</strong> Desargues' theorem is "self-dual"—its
        dual is its own converse! This makes it exceptionally elegant and shows
        why the theorem and its converse are equally fundamental.
      </Callout>

      <h3>Pascal and Brianchon</h3>

      <p>
        Pascal's theorem has a beautiful dual discovered by{' '}
        <strong>Charles-Julien Brianchon</strong> in 1806:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Pascal's Theorem</h4>
          <p className="text-sm text-dark-300">
            If a hexagon is <strong>inscribed</strong> in a conic (vertices on
            the conic), then opposite <strong>sides</strong> meet in{' '}
            <strong>collinear points</strong>.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Brianchon's Theorem (Dual)</h4>
          <p className="text-sm text-dark-300">
            If a hexagon is <strong>circumscribed</strong> about a conic (sides
            tangent to the conic), then opposite <strong>vertices</strong> are
            joined by <strong>concurrent lines</strong>.
          </p>
        </div>
      </div>

      {/* Visualization of Brianchon's theorem */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Brianchon's Theorem (Dual of Pascal)
        </h4>
        <svg viewBox="0 0 500 300" className="w-full h-auto">
          {/* Ellipse (conic) */}
          <ellipse cx="250" cy="150" rx="80" ry="60" fill="none" stroke="#64748b" strokeWidth="1.5"/>
          
          {/* Circumscribed hexagon - 6 tangent lines forming the sides */}
          <polygon 
            points="100,50 400,50 450,150 400,250 100,250 50,150" 
            fill="none" 
            stroke="#818cf8" 
            strokeWidth="2"
          />
          
          {/* Vertices */}
          <circle cx="100" cy="50" r="4" fill="#10b981"/>
          <circle cx="400" cy="50" r="4" fill="#10b981"/>
          <circle cx="450" cy="150" r="4" fill="#10b981"/>
          <circle cx="400" cy="250" r="4" fill="#10b981"/>
          <circle cx="100" cy="250" r="4" fill="#10b981"/>
          <circle cx="50" cy="150" r="4" fill="#10b981"/>
          
          {/* Labels */}
          <text x="90" y="40" fill="#10b981" fontSize="12" fontWeight="bold">A</text>
          <text x="405" y="40" fill="#10b981" fontSize="12" fontWeight="bold">B</text>
          <text x="460" y="155" fill="#10b981" fontSize="12" fontWeight="bold">C</text>
          <text x="405" y="265" fill="#10b981" fontSize="12" fontWeight="bold">D</text>
          <text x="90" y="265" fill="#10b981" fontSize="12" fontWeight="bold">E</text>
          <text x="30" y="155" fill="#10b981" fontSize="12" fontWeight="bold">F</text>
          
          {/* Diagonals connecting opposite vertices - all through one point! */}
          <line x1="100" y1="50" x2="400" y2="250" stroke="#f43f5e" strokeWidth="1.5"/>
          <line x1="400" y1="50" x2="100" y2="250" stroke="#f43f5e" strokeWidth="1.5"/>
          <line x1="450" y1="150" x2="50" y2="150" stroke="#f43f5e" strokeWidth="1.5"/>
          
          {/* Brianchon point */}
          <circle cx="250" cy="150" r="6" fill="#f59e0b"/>
          <text x="265" y="145" fill="#f59e0b" fontSize="11" fontWeight="bold">Brianchon</text>
          <text x="265" y="160" fill="#f59e0b" fontSize="11" fontWeight="bold">Point</text>
          
          {/* Caption */}
          <text x="250" y="290" fill="#94a3b8" fontSize="10" textAnchor="middle">
            Diagonals AD, BE, CF all pass through a single point!
          </text>
        </svg>
      </div>

      <h3>Why Duality Works</h3>

      <p>
        Duality isn't just a coincidence—it has a rigorous algebraic foundation:
      </p>

      <Definition title="Homogeneous Coordinates">
        <p>
          In the projective plane, a point is represented by{' '}
          <strong>homogeneous coordinates</strong> <InlineMath>(x : y : z)</InlineMath>,
          where proportional triples represent the same point:
        </p>
        <MathBlock>
          {`(x : y : z) = (\\lambda x : \\lambda y : \\lambda z) \\text{ for any } \\lambda \\neq 0`}
        </MathBlock>
        <p className="mt-2">
          A line is given by an equation <InlineMath>ax + by + cz = 0</InlineMath>,
          so it too is determined by a triple <InlineMath>(a : b : c)</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Algebraic Basis of Duality">
        <p>
          A point <InlineMath>(x : y : z)</InlineMath> lies on the line{' '}
          <InlineMath>(a : b : c)</InlineMath> if and only if:
        </p>
        <MathBlock>
          {`ax + by + cz = 0`}
        </MathBlock>
        <p className="mt-2">
          This equation is <em>symmetric</em> in the roles of{' '}
          <InlineMath>(x, y, z)</InlineMath> and <InlineMath>(a, b, c)</InlineMath>.
          Swapping points and lines preserves incidence!
        </p>
      </Theorem>

      <h3>The Dual Conic</h3>

      <p>
        Even conics have duals:
      </p>

      <Example title="Point Conic vs. Line Conic">
        <p>
          A <strong>point conic</strong> is the set of points satisfying a
          quadratic equation like <InlineMath>x^2 + y^2 = z^2</InlineMath>.
        </p>
        <p className="mt-2">
          Its <strong>dual</strong> (or <strong>line conic</strong>) is the set
          of tangent lines to that conic. Remarkably, these tangent lines also
          satisfy a quadratic equation in their coordinates!
        </p>
        <p className="mt-2">
          For a circle, the dual is another conic with the same equation (in
          line coordinates). For other conics, the dual conic has a different shape.
        </p>
      </Example>

      <h3>Duality in Practice</h3>

      <p>
        Duality is a powerful tool for proving theorems:
      </p>

      <Callout type="note">
        <strong>Two Proofs for the Price of One:</strong> Once you prove any
        theorem in projective geometry, you automatically get its dual theorem
        for free. This doubles the output of every proof!
      </Callout>

      <Example title="Using Duality">
        <p>
          <strong>Theorem:</strong> Three non-collinear points determine a unique
          triangle.
        </p>
        <p className="mt-2">
          <strong>Dual:</strong> Three non-concurrent lines determine a unique
          triangle.
        </p>
        <p className="mt-2 text-dark-400">
          Both are obviously true, but duality guarantees we can pass from one
          to the other automatically.
        </p>
      </Example>

      <h3>The Principle's Limits</h3>

      <p>
        Duality has some limitations:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Duality Works For</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Statements about incidence (points on lines)</li>
            <li>Projective properties (preserved under projection)</li>
            <li>Theorems provable from axioms alone</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Duality Doesn't Apply To</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Metric properties (distance, angle)</li>
            <li>Statements involving "parallel"</li>
            <li>Euclidean-specific concepts</li>
          </ul>
        </div>
      </div>

      <h3>Historical Development</h3>

      <p>
        The principle of duality was discovered gradually:
      </p>

      <Example title="History of Duality">
        <ul className="space-y-2">
          <li>
            <strong>1822:</strong> Poncelet's <em>Traité des propriétés projectives</em>{' '}
            used duality extensively but justified it case-by-case
          </li>
          <li>
            <strong>1826:</strong> Gergonne introduced the term "duality" and
            stated it as a general principle
          </li>
          <li>
            <strong>1830s:</strong> Plücker developed homogeneous coordinates,
            giving duality a rigorous algebraic foundation
          </li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>A New Way of Thinking:</strong> Duality represents a profound
        shift in mathematical thinking—from studying individual objects to
        studying structural relationships that can be transformed. This
        perspective became central to modern algebra and geometry.
      </Callout>

      <p>
        With duality, we complete our introduction to projective geometry. The
        ideas developed here—projection, cross-ratio, points at infinity, and
        duality—became essential tools for 19th-century mathematics and remain
        fundamental to modern algebraic geometry, computer graphics, and beyond.
      </p>

      <SectionQuiz
        sectionId={32}
        questions={quizMap[32] || []}
        title="Duality Quiz"
      />
    </LessonLayout>
  );
}
