import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { CompassConstructionDemo } from '@/components/visualizations/chapter1';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Some Basic Constructions</h2>

      <p>
        The equilateral triangle construction comes first in the <em>Elements</em> because
        several other constructions follow from it. Among them are constructions for
        bisecting a line segment and bisecting an angle. ("Bisect" is from the Latin
        for "cut in two.")
      </p>

      <h3>Bisecting a Line Segment</h3>

      <p>
        To bisect a given line segment AB, we use a variation of the equilateral triangle
        construction:
      </p>

      <Definition title="Line Segment Bisection">
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>Draw the circle with center A and radius AB.</li>
          <li>Draw the circle with center B and radius AB.</li>
          <li>Find <em>both</em> intersection points C and D of the two circles.</li>
          <li>Draw the line CD connecting these points.</li>
        </ol>
        <p className="mt-4">
          The line CD bisects the line segment AB at its midpoint.
        </p>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 300" className="w-full max-w-md">
          {/* Circle centered at A */}
          <circle cx="100" cy="150" r="80" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Circle centered at B */}
          <circle cx="200" cy="150" r="80" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Line AB */}
          <line x1="100" y1="150" x2="200" y2="150" stroke="#f472b6" strokeWidth="2" />

          {/* Perpendicular bisector CD */}
          <line x1="150" y1="80" x2="150" y2="220" stroke="#fbbf24" strokeWidth="2" />

          {/* Point A */}
          <circle cx="100" cy="150" r="4" fill="#60a5fa" />
          <text x="85" y="175" fill="#60a5fa" fontSize="16" fontStyle="italic">A</text>

          {/* Point B */}
          <circle cx="200" cy="150" r="4" fill="#34d399" />
          <text x="205" y="175" fill="#34d399" fontSize="16" fontStyle="italic">B</text>

          {/* Point C (top intersection) */}
          <circle cx="150" cy="80" r="4" fill="#fbbf24" />
          <text x="155" y="75" fill="#fbbf24" fontSize="16" fontStyle="italic">C</text>

          {/* Point D (bottom intersection) */}
          <circle cx="150" cy="220" r="4" fill="#fbbf24" />
          <text x="155" y="240" fill="#fbbf24" fontSize="16" fontStyle="italic">D</text>

          {/* Midpoint */}
          <circle cx="150" cy="150" r="4" fill="#f472b6" />
        </svg>
      </div>

      <Callout type="info">
        <strong>Important Observation:</strong> Notice that CD is <em>perpendicular</em> to AB.
        This construction can be adapted to construct perpendiculars in general.
      </Callout>

      <h3>Constructing Perpendiculars</h3>

      <p>
        The bisection construction gives us a method to construct perpendicular lines:
      </p>

      <Example title="Perpendicular at a Point on a Line">
        <p>To construct the perpendicular to a line L at a point E on the line:</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Draw a circle with center E, cutting L at points A and B.</li>
          <li>Construct the bisector CD of segment AB (as above).</li>
          <li>The line CD is the perpendicular through E.</li>
        </ol>
      </Example>

      <Example title="Perpendicular Through a Point Not on a Line">
        <p>To construct the perpendicular to a line L through a point E not on L:</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Draw a circle with center E large enough to cut L at two points A and B.</li>
          <li>Construct the bisector CD of segment AB.</li>
          <li>The line CD passes through E and is perpendicular to L.</li>
        </ol>
      </Example>

      <h3>Bisecting an Angle</h3>

      <p>
        To bisect an angle POQ, we use a similar technique:
      </p>

      <Definition title="Angle Bisection">
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>Draw a circle with center O, cutting OP at A and OQ at B.</li>
          <li>Construct the perpendicular bisector CD of line segment AB.</li>
          <li>The line CD (passing through O) bisects the angle POQ.</li>
        </ol>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 350 250" className="w-full max-w-lg">
          {/* Angle arms */}
          <line x1="50" y1="200" x2="300" y2="200" stroke="#475569" strokeWidth="1.5" />
          <line x1="50" y1="200" x2="200" y2="50" stroke="#475569" strokeWidth="1.5" />

          {/* Arc showing angle */}
          <path d="M 100 200 A 50 50 0 0 1 85 165" fill="none" stroke="#60a5fa" strokeWidth="2" />

          {/* Points A and B on the arc */}
          <circle cx="130" cy="200" r="4" fill="#34d399" />
          <text x="130" y="220" fill="#34d399" fontSize="14" fontStyle="italic">B</text>

          <circle cx="105" cy="140" r="4" fill="#34d399" />
          <text x="85" y="140" fill="#34d399" fontSize="14" fontStyle="italic">A</text>

          {/* Angle bisector */}
          <line x1="50" y1="200" x2="250" y2="100" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6,4" />

          {/* Point O */}
          <circle cx="50" cy="200" r="4" fill="#f472b6" />
          <text x="35" y="215" fill="#f472b6" fontSize="16" fontStyle="italic">O</text>

          {/* Labels */}
          <text x="280" y="195" fill="#475569" fontSize="14" fontStyle="italic">Q</text>
          <text x="195" y="45" fill="#475569" fontSize="14" fontStyle="italic">P</text>
        </svg>
      </div>

      <h3>A Crucial Distinction</h3>

      <p>
        It seems from these two constructions that bisecting a line segment and bisecting
        an angle are virtually the same problem. However, a crucial distinction emerges
        when we attempt <em>division into three or more parts</em>.
      </p>

      <Callout type="warning">
        <strong>Key Difference:</strong> There is a simple tool for dividing a line segment
        into any number of equal parts—parallel lines—but no corresponding tool for dividing
        angles. This is why angle trisection became one of the famous "impossible problems"
        of ancient geometry.
      </Callout>

      <h3>Constructing Parallel Lines</h3>

      <p>
        We use two perpendicular constructions to construct a parallel:
      </p>

      <Definition title="Parallel Line Construction">
        <p>Given a line L and a point P outside L:</p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>Construct the perpendicular line M to L through P.</li>
          <li>Construct the perpendicular to M through P.</li>
          <li>This second perpendicular is the parallel to L through P.</li>
        </ol>
      </Definition>

      <h3>Dividing a Line Segment into n Equal Parts</h3>

      <p>
        Given a line segment AB, we can divide it into any number n of equal parts:
      </p>

      <Definition title="Division into Equal Parts">
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>Draw any other line L through A.</li>
          <li>Mark n successive, equally spaced points A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>n</sub> along L using a fixed compass radius.</li>
          <li>Connect A<sub>n</sub> to B.</li>
          <li>Draw parallels to BA<sub>n</sub> through each of A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>n-1</sub>.</li>
        </ol>
        <p className="mt-4">These parallels divide AB into n equal parts.</p>
      </Definition>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 400 200" className="w-full max-w-lg">
          {/* Main line AB */}
          <line x1="50" y1="150" x2="350" y2="150" stroke="#f472b6" strokeWidth="2" />

          {/* Auxiliary line L */}
          <line x1="50" y1="150" x2="200" y2="30" stroke="#60a5fa" strokeWidth="1.5" />

          {/* Points on L */}
          <circle cx="80" cy="126" r="3" fill="#60a5fa" />
          <text x="65" y="120" fill="#60a5fa" fontSize="11">A₁</text>

          <circle cx="110" cy="102" r="3" fill="#60a5fa" />
          <text x="95" y="96" fill="#60a5fa" fontSize="11">A₂</text>

          <circle cx="140" cy="78" r="3" fill="#60a5fa" />
          <text x="125" y="72" fill="#60a5fa" fontSize="11">A₃</text>

          <circle cx="170" cy="54" r="3" fill="#60a5fa" />
          <text x="155" y="48" fill="#60a5fa" fontSize="11">A₄</text>

          <circle cx="200" cy="30" r="3" fill="#60a5fa" />
          <text x="185" y="24" fill="#60a5fa" fontSize="11">A₅</text>

          {/* Line from A_n to B */}
          <line x1="200" y1="30" x2="350" y2="150" stroke="#34d399" strokeWidth="1.5" />

          {/* Parallel lines */}
          <line x1="80" y1="126" x2="110" y2="150" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="110" y1="102" x2="170" y2="150" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="140" y1="78" x2="230" y2="150" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="170" y1="54" x2="290" y2="150" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" />

          {/* Division points on AB */}
          <circle cx="110" cy="150" r="3" fill="#fbbf24" />
          <circle cx="170" cy="150" r="3" fill="#fbbf24" />
          <circle cx="230" cy="150" r="3" fill="#fbbf24" />
          <circle cx="290" cy="150" r="3" fill="#fbbf24" />

          {/* Points A and B */}
          <circle cx="50" cy="150" r="4" fill="#f472b6" />
          <text x="40" y="170" fill="#f472b6" fontSize="14" fontStyle="italic">A</text>

          <circle cx="350" cy="150" r="4" fill="#f472b6" />
          <text x="345" y="170" fill="#f472b6" fontSize="14" fontStyle="italic">B</text>

          {/* Label for L */}
          <text x="205" y="25" fill="#60a5fa" fontSize="12" fontStyle="italic">L</text>
        </svg>
      </div>

      <Theorem title="The Thales Theorem"
        proof={
          <>
            <p>Let line L be parallel to BC, intersecting AB at P and AC at Q. We prove that |AP|/|PB| = |AQ|/|QC|.</p>
            <p className="mt-2"><strong>Step 1:</strong> Consider triangles APQ and ABQ. They share the same height from Q to line AB.</p>
            <MathBlock math="\frac{\text{Area}(\triangle APQ)}{\text{Area}(\triangle BPQ)} = \frac{|AP|}{|PB|}" />
            <p className="mt-2"><strong>Step 2:</strong> Similarly, triangles APQ and AQC share the same height from P to line AC:</p>
            <MathBlock math="\frac{\text{Area}(\triangle APQ)}{\text{Area}(\triangle PQC)} = \frac{|AQ|}{|QC|}" />
            <p className="mt-2"><strong>Step 3:</strong> Since PQ is parallel to BC, triangles BPQ and PQC have the same base PQ and equal heights (the perpendicular distance between parallel lines PQ and BC).</p>
            <MathBlock math="\text{Area}(\triangle BPQ) = \text{Area}(\triangle PQC)" />
            <p className="mt-2"><strong>Step 4:</strong> Therefore:</p>
            <MathBlock math="\frac{|AP|}{|PB|} = \frac{\text{Area}(\triangle APQ)}{\text{Area}(\triangle BPQ)} = \frac{\text{Area}(\triangle APQ)}{\text{Area}(\triangle PQC)} = \frac{|AQ|}{|QC|}" />
          </>
        }
      >
        <p>
          This construction depends on a property of parallel lines attributed to Thales
          (Greek mathematician, c. 600 BCE):
        </p>
        <p className="mt-4 font-semibold text-blue-400">
          Parallels cut any lines they cross in proportional segments.
        </p>
        <p className="mt-4">
          More precisely: If a line L parallel to side BC of a triangle cuts sides AB
          and AC at points P and Q respectively, then:
        </p>
        <MathBlock>
          {`\\frac{|AP|}{|PB|} = \\frac{|AQ|}{|QC|}`}
        </MathBlock>
      </Theorem>

      <Callout type="important">
        <strong>Fundamental Importance:</strong> The Thales theorem is the key to using
        algebra in geometry. It enables us to multiply and divide line segments, as we
        will see in the next section.
      </Callout>

      <CompassConstructionDemo className="my-6" />

      <SectionQuiz
        sectionId={2}
        questions={quizMap[2] || []}
        title="Basic Constructions Quiz"
      />
    </LessonLayout>
  );
}
