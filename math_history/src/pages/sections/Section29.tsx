import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2>Perspective and Projection</h2>

      <p>
        The mathematics of <strong>projective geometry</strong> arose from two
        seemingly unrelated sources: Renaissance artists studying perspective
        drawing, and Newton's observation that all cubic curves are "shadows"
        of just five basic types. Both involve the idea of <strong>projection</strong>—viewing
        figures from different vantage points.
      </p>

      <Callout type="info">
        <strong>Historical Origins:</strong> Projective geometry began with
        Renaissance artists like Brunelleschi (1413) and Alberti (1435) who
        sought mathematical principles for realistic painting. The mathematical
        theory was developed by Desargues (1639) and Pascal (1640), forgotten,
        then revived by Poncelet in the 1820s.
      </Callout>

      <h3>The Problem of Perspective</h3>

      <p>
        When we draw a three-dimensional scene on a flat canvas, we perform
        a <strong>projection</strong>. Parallel lines that recede into the
        distance appear to meet at a <strong>vanishing point</strong>—think of
        railroad tracks converging on the horizon.
      </p>

      <Definition title="Central Projection">
        <p>
          A <strong>central projection</strong> from a point <InlineMath>O</InlineMath>{' '}
          (the "eye" or "center of projection") maps each point <InlineMath>P</InlineMath>{' '}
          to the intersection of line <InlineMath>OP</InlineMath> with a plane
          (the "picture plane").
        </p>
        <p className="mt-2">
          Points on a line through <InlineMath>O</InlineMath> parallel to the
          picture plane have no image—they project "to infinity."
        </p>
      </Definition>

      {/* Visualization of perspective projection */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Central Projection and Vanishing Points
        </h4>
        <svg viewBox="0 0 500 250" className="w-full h-auto">
          {/* Eye/center of projection */}
          <circle cx="50" cy="125" r="6" fill="#f59e0b"/>
          <text x="50" y="155" fill="#94a3b8" fontSize="11" textAnchor="middle">Eye (O)</text>
          
          {/* Picture plane */}
          <line x1="150" y1="30" x2="150" y2="220" stroke="#818cf8" strokeWidth="2"/>
          <text x="150" y="240" fill="#818cf8" fontSize="10" textAnchor="middle">Picture Plane</text>
          
          {/* Parallel lines in 3D converging to vanishing point */}
          <line x1="200" y1="50" x2="450" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="4"/>
          <line x1="200" y1="200" x2="450" y2="200" stroke="#334155" strokeWidth="1" strokeDasharray="4"/>
          
          {/* Projection rays */}
          <line x1="50" y1="125" x2="450" y2="50" stroke="#10b981" strokeWidth="1.5"/>
          <line x1="50" y1="125" x2="450" y2="200" stroke="#10b981" strokeWidth="1.5"/>
          <line x1="50" y1="125" x2="450" y2="125" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4"/>
          
          {/* Intersection points on picture plane */}
          <circle cx="150" cy="97" r="4" fill="#10b981"/>
          <circle cx="150" cy="153" r="4" fill="#10b981"/>
          
          {/* Vanishing point indicator */}
          <circle cx="450" cy="125" r="5" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" fillOpacity="0.3"/>
          <text x="450" y="115" fill="#f59e0b" fontSize="10" textAnchor="middle">Vanishing</text>
          <text x="450" y="145" fill="#f59e0b" fontSize="10" textAnchor="middle">Point</text>
          
          {/* Labels */}
          <text x="325" y="40" fill="#94a3b8" fontSize="9">Parallel lines in 3D space</text>
          <text x="325" y="215" fill="#94a3b8" fontSize="9">appear to meet at vanishing point</text>
        </svg>
      </div>

      <h3>What Projection Preserves</h3>

      <p>
        Central projection dramatically changes the appearance of figures:
        circles become ellipses, squares become arbitrary quadrilaterals,
        and parallel lines meet. What <em>is</em> preserved?
      </p>

      <Theorem title="Properties Preserved Under Projection">
        <p>Central projection preserves:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Collinearity:</strong> Points on a line remain on a line</li>
          <li><strong>Concurrence:</strong> Lines through a point remain through a point</li>
          <li><strong>Cross-ratio:</strong> A ratio of ratios along a line (see below)</li>
          <li><strong>Tangency:</strong> A line tangent to a curve remains tangent</li>
        </ul>
        <p className="mt-2">
          Projection does <em>not</em> preserve: distances, angles, ratios of lengths,
          parallelism, or the distinction between ellipse, parabola, and hyperbola.
        </p>
      </Theorem>

      <h3>The Cross-Ratio</h3>

      <p>
        The fundamental invariant of projective geometry is the <strong>cross-ratio</strong>
        of four collinear points:
      </p>

      <Definition title="Cross-Ratio">
        <p>
          For four collinear points <InlineMath>A, B, C, D</InlineMath>, the
          cross-ratio is:
        </p>
        <MathBlock>
          {`(A, B; C, D) = \\frac{AC \\cdot BD}{AD \\cdot BC}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>AC</InlineMath> denotes the signed distance from{' '}
          <InlineMath>A</InlineMath> to <InlineMath>C</InlineMath>.
        </p>
      </Definition>

      <Example title="Cross-Ratio Calculation">
        <p>
          Let <InlineMath>A = 0, B = 1, C = 2, D = 4</InlineMath> on a number line.
        </p>
        <MathBlock>
          {`(A, B; C, D) = \\frac{(2-0)(4-1)}{(4-0)(2-1)} = \\frac{2 \\cdot 3}{4 \\cdot 1} = \\frac{3}{2}`}
        </MathBlock>
        <p className="mt-2">
          This ratio is preserved under any projection of these four points to
          another line!
        </p>
      </Example>

      <h3>Newton's "Genesis by Shadows"</h3>

      <p>
        Newton made a remarkable observation about cubic curves: all 72+ species
        can be obtained as "shadows" (projections) of just <strong>five</strong>{' '}
        basic curves.
      </p>

      <Callout type="note">
        <strong>Newton (1695):</strong> "If onto an infinite plane, lit by a
        point source of light, the shadows of figures are projected...then the
        shadow of a conic will always be a conic, and that of a curve of the
        second genus [cubic] will always be a curve of the second genus."
      </Callout>

      <p>
        This means projective geometry provides a <strong>unifying principle</strong>{' '}
        for curve classification. Curves that look completely different in
        Cartesian coordinates can be "projectively equivalent."
      </p>

      <Example title="Projective Equivalence of Conics">
        <p>
          Under projection, a circle can become any conic:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Project from outside the cone's axis → <strong>ellipse</strong></li>
          <li>Project parallel to a generator → <strong>parabola</strong></li>
          <li>Project cutting both nappes → <strong>hyperbola</strong></li>
        </ul>
        <p className="mt-2">
          Thus projectively, <em>all conics are equivalent</em>—they are all
          projections of the same circle.
        </p>
      </Example>

      <h3>Points at Infinity</h3>

      <p>
        To make projection well-defined, we add <strong>points at infinity</strong>
        where parallel lines "meet":
      </p>

      <Definition title="The Projective Plane">
        <p>
          The <strong>projective plane</strong> is the ordinary Euclidean plane
          plus one "point at infinity" for each direction (parallel class of lines).
          All these points at infinity lie on a single "line at infinity."
        </p>
        <p className="mt-2">
          In the projective plane:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Any two distinct points determine exactly one line</li>
          <li>Any two distinct lines meet in exactly one point</li>
        </ul>
      </Definition>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Euclidean Plane</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Parallel lines never meet</li>
            <li>A line may have 0, 1, or 2 intersection points with a conic</li>
            <li>Distances and angles are meaningful</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Projective Plane</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Any two lines meet (at infinity if "parallel")</li>
            <li>A line always meets a conic in exactly 2 points (counting multiplicity)</li>
            <li>Only cross-ratio is meaningful</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <strong>Bézout's Theorem Perfected:</strong> In the projective plane
        with complex coordinates, two curves of degrees <InlineMath>m</InlineMath>{' '}
        and <InlineMath>n</InlineMath> meet in <em>exactly</em>{' '}
        <InlineMath>mn</InlineMath> points (counted with multiplicity). The
        "exceptions" in ordinary geometry come from intersections at infinity
        or with complex coordinates.
      </Callout>

      <h3>The Renaissance Artists</h3>

      <p>
        The pioneers of perspective drawing faced practical problems that led
        to mathematical discoveries:
      </p>

      <Example title="Brunelleschi's Demonstration (1413)">
        <p>
          Filippo Brunelleschi painted the Florentine Baptistery on a small panel
          with a peephole. Looking through the hole at a mirror reflecting the
          painting, the image was indistinguishable from the actual building.
          This demonstrated that mathematical perspective could achieve perfect
          realism.
        </p>
      </Example>

      <p>
        Leon Battista Alberti's <em>De Pictura</em> (1435) gave the first written
        account of perspective methods. Later, <strong>Girard Desargues</strong>{' '}
        (1639) developed these ideas into a mathematical theory, proving the
        theorem that bears his name—the subject of our next section.
      </p>

      <SectionQuiz
        sectionId={29}
        questions={quizMap[29] || []}
        title="Perspective and Projection Quiz"
      />
    </LessonLayout>
  );
}
