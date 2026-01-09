import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2>Pascal's Theorem</h2>

      <p>
        In 1640, <strong>Blaise Pascal</strong>—then just 16 years old—discovered
        one of the most beautiful theorems in geometry. His "hexagrammum mysticum"
        (mystic hexagon) reveals a deep connection between conics and projective
        geometry.
      </p>

      <Callout type="info">
        <strong>A Prodigy's Discovery:</strong> Pascal proved his theorem at 16
        and derived over 400 corollaries from it. His original proof is lost,
        but he used it as the foundation for a comprehensive treatise on conics,
        impressing even Descartes—who initially didn't believe a teenager could
        have written it.
      </Callout>

      <h3>The Mystic Hexagon</h3>

      <Theorem title="Pascal's Theorem (1640)">
        <p>
          If a hexagon <InlineMath>ABCDEF</InlineMath> is inscribed in a conic
          section (ellipse, parabola, or hyperbola), then the three pairs of
          opposite sides meet in collinear points.
        </p>
        <p className="mt-2">
          Specifically:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>P = AB \cap DE</InlineMath> (opposite sides)</li>
          <li><InlineMath>Q = BC \cap EF</InlineMath> (opposite sides)</li>
          <li><InlineMath>R = CD \cap FA</InlineMath> (opposite sides)</li>
        </ul>
        <p className="mt-2">
          are collinear. The line <InlineMath>PQR</InlineMath> is called the
          <strong> Pascal line</strong> of the hexagon.
        </p>
      </Theorem>

      {/* Visualization of Pascal's theorem */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Pascal's Mystic Hexagon
        </h4>
        <svg viewBox="0 0 500 350" className="w-full h-auto">
          {/* Ellipse */}
          <ellipse cx="250" cy="150" rx="180" ry="110" fill="none" stroke="#64748b" strokeWidth="1.5"/>
          
          {/* Six points on the conic */}
          <circle cx="80" cy="120" r="5" fill="#10b981"/>
          <circle cx="140" cy="55" r="5" fill="#10b981"/>
          <circle cx="300" cy="45" r="5" fill="#10b981"/>
          <circle cx="410" cy="100" r="5" fill="#10b981"/>
          <circle cx="400" cy="200" r="5" fill="#10b981"/>
          <circle cx="150" cy="240" r="5" fill="#10b981"/>
          
          {/* Labels for points */}
          <text x="65" y="120" fill="#10b981" fontSize="14" fontWeight="bold">A</text>
          <text x="135" y="45" fill="#10b981" fontSize="14" fontWeight="bold">B</text>
          <text x="300" y="35" fill="#10b981" fontSize="14" fontWeight="bold">C</text>
          <text x="420" y="100" fill="#10b981" fontSize="14" fontWeight="bold">D</text>
          <text x="410" y="205" fill="#10b981" fontSize="14" fontWeight="bold">E</text>
          <text x="135" y="250" fill="#10b981" fontSize="14" fontWeight="bold">F</text>
          
          {/* Hexagon sides */}
          <line x1="80" y1="120" x2="140" y2="55" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="140" y1="55" x2="300" y2="45" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="300" y1="45" x2="410" y2="100" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="410" y1="100" x2="400" y2="200" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="400" y1="200" x2="150" y2="240" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="150" y1="240" x2="80" y2="120" stroke="#818cf8" strokeWidth="1.5"/>
          
          {/* Extended opposite sides to find intersections */}
          {/* AB extended and DE extended */}
          <line x1="80" y1="120" x2="20" y2="280" stroke="#ef4444" strokeWidth="1" strokeDasharray="3"/>
          <line x1="410" y1="100" x2="20" y2="280" stroke="#ef4444" strokeWidth="1" strokeDasharray="3"/>
          
          {/* BC extended and EF extended */}
          <line x1="140" y1="55" x2="480" y2="300" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3"/>
          <line x1="400" y1="200" x2="480" y2="300" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3"/>
          
          {/* CD extended and FA extended */}
          <line x1="300" y1="45" x2="250" y2="300" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3"/>
          <line x1="150" y1="240" x2="250" y2="300" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3"/>
          
          {/* Pascal line */}
          <line x1="0" y1="300" x2="500" y2="300" stroke="#f43f5e" strokeWidth="2.5"/>
          
          {/* Intersection points P, Q, R */}
          <circle cx="30" cy="300" r="5" fill="#f43f5e"/>
          <circle cx="250" cy="300" r="5" fill="#f43f5e"/>
          <circle cx="470" cy="300" r="5" fill="#f43f5e"/>
          
          <text x="25" y="320" fill="#f43f5e" fontSize="12" fontWeight="bold">P</text>
          <text x="245" y="320" fill="#f43f5e" fontSize="12" fontWeight="bold">R</text>
          <text x="465" y="320" fill="#f43f5e" fontSize="12" fontWeight="bold">Q</text>
          
          {/* Legend */}
          <text x="250" y="340" fill="#f43f5e" fontSize="11" textAnchor="middle">Pascal Line: P, Q, R are collinear!</text>
        </svg>
      </div>

      <h3>Why "Mystic"?</h3>

      <p>
        Pascal called it the "mystic hexagon" because of its surprising and
        almost magical properties. The theorem is remarkable for several reasons:
      </p>

      <Example title="The Richness of Pascal's Theorem">
        <p>Given 6 points on a conic, there are multiple ways to form a hexagon:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>60 different hexagons</strong> can be formed from 6 points
            (by choosing different orderings)
          </li>
          <li>
            Each hexagon gives a <strong>different Pascal line</strong>
          </li>
          <li>
            These 60 lines have intricate intersection patterns, forming
            configurations studied for centuries
          </li>
        </ul>
      </Example>

      <h3>Special Cases</h3>

      <p>
        Pascal's theorem includes several classical results as special cases:
      </p>

      <Theorem title="Pappus' Theorem as a Special Case">
        <p>
          When the "conic" degenerates into two lines, Pascal's theorem becomes
          <strong> Pappus' theorem</strong> (c. 340 CE):
        </p>
        <p className="mt-2">
          If <InlineMath>A, B, C</InlineMath> lie on one line and{' '}
          <InlineMath>D, E, F</InlineMath> lie on another, then the intersections
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>AE \cap BD</InlineMath></li>
          <li><InlineMath>AF \cap CD</InlineMath></li>
          <li><InlineMath>BF \cap CE</InlineMath></li>
        </ul>
        <p className="mt-2">are collinear.</p>
      </Theorem>

      <Example title="When Vertices Coincide">
        <p>
          If two adjacent vertices of the hexagon coincide (say{' '}
          <InlineMath>B = C</InlineMath>), then side <InlineMath>BC</InlineMath>{' '}
          becomes the <strong>tangent</strong> to the conic at that point.
        </p>
        <p className="mt-2">
          This gives a method to construct tangent lines to conics using only
          a straightedge!
        </p>
      </Example>

      <h3>The Converse</h3>

      <p>
        Pascal's theorem has a powerful converse:
      </p>

      <Theorem title="Converse of Pascal's Theorem">
        <p>
          If a hexagon <InlineMath>ABCDEF</InlineMath> has the property that
          opposite sides meet in collinear points, then the six vertices lie
          on a conic.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Constructing Conics:</strong> The converse provides a method to
        construct additional points on a conic. Given 5 points on a conic, you
        can find any number of additional points using Pascal's theorem.
      </Callout>

      <h3>Proof Idea</h3>

      <p>
        While Pascal's original proof is lost, here's a modern approach using
        projective coordinates:
      </p>

      <Example title="Sketch of Proof">
        <p>
          The key insight is that the condition for three points to be collinear
          can be expressed as the vanishing of a certain determinant. For points
          on a conic, this determinant factors in a way that guarantees the
          collinearity of <InlineMath>P, Q, R</InlineMath>.
        </p>
        <p className="mt-2">
          Alternatively, in projective coordinates, one can choose coordinates
          so that the conic is the "unit circle" <InlineMath>x^2 + y^2 = z^2</InlineMath>,
          and the algebra becomes manageable.
        </p>
      </Example>

      <h3>Pascal and Desargues</h3>

      <p>
        There's a deep connection between Pascal's and Desargues' theorems:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Desargues' Theorem</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>About <strong>two triangles</strong></li>
            <li>In perspective from a <strong>point</strong></li>
            <li>Implies perspective from a <strong>line</strong></li>
            <li>A theorem of <em>incidence geometry</em></li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Pascal's Theorem</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>About a <strong>hexagon</strong> on a conic</li>
            <li>Opposite sides meet in <strong>collinear points</strong></li>
            <li>Characterizes when 6 points lie on a conic</li>
            <li>A theorem of <em>conic geometry</em></li>
          </ul>
        </div>
      </div>

      <Theorem title="Relationship to Desargues">
        <p>
          Pascal's theorem can be proved using Desargues' theorem! The hexagon
          inscribed in a conic can be viewed as giving rise to pairs of triangles
          in perspective.
        </p>
      </Theorem>

      <h3>Historical Note</h3>

      <p>
        Pascal's interest in projective geometry was inspired by Desargues, whom
        he met through his father. At 16, Pascal wrote the <em>Essay pour les coniques</em>,
        a one-page summary announcing his theorem. He planned a full treatise,
        but it was never published and is now lost.
      </p>

      <Callout type="info">
        <strong>Pascal's Other Contributions:</strong> Pascal went on to make
        fundamental contributions to probability theory, fluid mechanics (Pascal's
        law), and philosophy (the <em>Pensées</em>). He built one of the first
        mechanical calculators. He died at 39, having abandoned mathematics for
        religious contemplation in his final years.
      </Callout>

      <p>
        Pascal's theorem stands as one of the jewels of projective geometry—a
        subject that remained dormant for nearly 200 years after Pascal's death,
        before being revived by Poncelet and others in the 19th century.
      </p>

      <SectionQuiz
        sectionId={31}
        questions={quizMap[31] || []}
        title="Pascal's Theorem Quiz"
      />
    </LessonLayout>
  );
}
