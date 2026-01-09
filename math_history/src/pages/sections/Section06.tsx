import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Constructions with Straightedge and Compass</h2>

      <p>
        The ancient Greeks developed geometry using only two tools: an unmarked
        straightedge for drawing straight lines, and a compass for drawing circles.
        These simple instruments became the foundation for a rich theory of
        geometric construction that occupied mathematicians for over two millennia.
      </p>

      <h3>The Basic Tools</h3>

      <Definition title="Straightedge and Compass">
        <p>
          A <strong>straightedge</strong> is an unmarked ruler—it can draw a straight
          line through any two points, but cannot measure distances.
        </p>
        <p className="mt-2">
          A <strong>compass</strong> can draw a circle with any given center and radius.
          It can also "transfer" a length from one location to another.
        </p>
      </Definition>

      <Callout type="note">
        <strong>Why Unmarked?</strong> Euclid deliberately separated the concept
        of "straightness" from the concept of "length." The straightedge handles
        direction; the compass handles distance. This separation turned out to be
        fundamental for understanding the foundations of geometry.
      </Callout>

      <h3>Basic Constructions</h3>

      <p>
        From these two tools, the Greeks could perform a remarkable variety of
        constructions:
      </p>

      <Example title="Bisecting a Line Segment">
        <p>Given a segment AB, find its midpoint M:</p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Draw a circle with center A passing through B</li>
          <li>Draw a circle with center B passing through A</li>
          <li>These circles intersect at two points, P and Q</li>
          <li>The line PQ intersects AB at the midpoint M</li>
        </ol>
      </Example>

      <div className="my-8 flex justify-center">
        <svg viewBox="0 0 300 200" className="w-full max-w-md">
          {/* Line AB */}
          <line x1="50" y1="100" x2="250" y2="100" stroke="#60a5fa" strokeWidth="2" />
          
          {/* Points A and B */}
          <circle cx="50" cy="100" r="4" fill="#60a5fa" />
          <circle cx="250" cy="100" r="4" fill="#60a5fa" />
          <text x="40" y="120" fill="#60a5fa" fontSize="14">A</text>
          <text x="255" y="120" fill="#60a5fa" fontSize="14">B</text>
          
          {/* Construction circles */}
          <circle cx="50" cy="100" r="200" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
          <circle cx="250" cy="100" r="200" fill="none" stroke="#f472b6" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
          
          {/* Intersection points P and Q */}
          <circle cx="150" cy="27" r="4" fill="#fbbf24" />
          <circle cx="150" cy="173" r="4" fill="#fbbf24" />
          <text x="155" y="22" fill="#fbbf24" fontSize="14">P</text>
          <text x="155" y="190" fill="#fbbf24" fontSize="14">Q</text>
          
          {/* Perpendicular bisector */}
          <line x1="150" y1="27" x2="150" y2="173" stroke="#fbbf24" strokeWidth="1.5" />
          
          {/* Midpoint M */}
          <circle cx="150" cy="100" r="4" fill="#ef4444" />
          <text x="155" y="95" fill="#ef4444" fontSize="14">M</text>
        </svg>
      </div>

      <Example title="Bisecting an Angle">
        <p>Given an angle BAC, construct its bisector:</p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Draw a circle centered at A, intersecting AB at D and AC at E</li>
          <li>Draw circles of equal radius centered at D and E</li>
          <li>These circles intersect at a point F</li>
          <li>The line AF bisects the angle BAC</li>
        </ol>
      </Example>

      <Example title="Constructing a Perpendicular">
        <p>Given a line and a point P on it, construct a perpendicular through P:</p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Draw a circle centered at P, intersecting the line at A and B</li>
          <li>Draw circles of equal radius centered at A and B</li>
          <li>These circles intersect at a point Q</li>
          <li>The line PQ is perpendicular to the original line</li>
        </ol>
      </Example>

      <h3>What Can Be Constructed?</h3>

      <p>
        With straightedge and compass, the Greeks could construct:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Any length that can be obtained from given lengths by addition, subtraction, multiplication, or division</li>
        <li>Square roots of constructible lengths</li>
        <li>Regular polygons with 3, 4, 5, 6, 8, 10, 12, 15, 16, ... sides</li>
      </ul>

      <Theorem title="Algebraic Characterization">
        <p>
          A length is constructible with straightedge and compass if and only if
          it can be expressed using only rational numbers and the operations
          <InlineMath>{'+, -, \\times, \\div'}</InlineMath>, and <InlineMath>{'\\sqrt{\\phantom{x}}'}</InlineMath>.
        </p>
      </Theorem>

      <h3>The Three Classical Problems</h3>

      <p>
        The Greeks posed three famous construction problems that remained unsolved
        for over two thousand years:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-6">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">The Three Classical Problems</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-200">
          <li>
            <strong>Doubling the Cube:</strong> Given a cube, construct a cube
            with exactly twice the volume.
          </li>
          <li>
            <strong>Trisecting the Angle:</strong> Given an arbitrary angle,
            divide it into three equal parts.
          </li>
          <li>
            <strong>Squaring the Circle:</strong> Given a circle, construct a
            square with the same area.
          </li>
        </ol>
      </div>

      <p>
        In the 19th century, mathematicians finally proved that <em>all three
        problems are impossible</em> with straightedge and compass alone.
      </p>

      <Callout type="warning">
        <strong>Why Impossible?</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Doubling the cube requires constructing <InlineMath>{'\\sqrt[3]{2}'}</InlineMath>,
            which is not a combination of square roots.
          </li>
          <li>
            Trisecting a general angle requires solving a cubic equation that
            cannot be reduced to square roots.
          </li>
          <li>
            Squaring the circle requires constructing <InlineMath>{'\\sqrt{\\pi}'}</InlineMath>,
            but <InlineMath>{'\\pi'}</InlineMath> is transcendental (not algebraic at all).
          </li>
        </ul>
      </Callout>

      <SectionQuiz
        sectionId={6}
        questions={quizMap[6] || []}
        title="Straightedge and Compass Quiz"
      />
    </LessonLayout>
  );
}
