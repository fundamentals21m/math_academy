import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Postulate, CommonNotion } from '@/components/common/ContentBlocks';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Introduction */}
      <p>
        Book I of Euclid's <em>Elements</em> lays the foundation for all of geometry. It begins with{' '}
        <strong>23 definitions</strong> that establish the basic vocabulary, followed by{' '}
        <strong>5 postulates</strong> (assumptions specific to geometry) and{' '}
        <strong>5 common notions</strong> (general axioms about equality and magnitude).
      </p>

      <p>
        These foundational statements form the axiomatic basis from which all subsequent propositions
        are derived. Euclid's method of building complex truths from simple, self-evident principles
        became the model for rigorous mathematical reasoning for over two thousand years.
      </p>

      <h2>Definitions</h2>

      <Definition title="Definition 1" className="my-4">
        <p>A <strong>point</strong> is that which has no part.</p>
      </Definition>

      <Definition title="Definition 2" className="my-4">
        <p>A <strong>line</strong> is breadthless length.</p>
      </Definition>

      <Definition title="Definition 3" className="my-4">
        <p>The <strong>extremities of a line</strong> are points.</p>
      </Definition>

      <Definition title="Definition 4" className="my-4">
        <p>A <strong>straight line</strong> is a line which lies evenly with the points on itself.</p>
      </Definition>

      <Definition title="Definition 5" className="my-4">
        <p>A <strong>surface</strong> is that which has length and breadth only.</p>
      </Definition>

      <Definition title="Definition 6" className="my-4">
        <p>The <strong>extremities of a surface</strong> are lines.</p>
      </Definition>

      <Definition title="Definition 7" className="my-4">
        <p>A <strong>plane surface</strong> is a surface which lies evenly with the straight lines on itself.</p>
      </Definition>

      <Definition title="Definition 8" className="my-4">
        <p>
          A <strong>plane angle</strong> is the inclination to one another of two lines in a plane
          which meet one another and do not lie in a straight line.
        </p>
      </Definition>

      <Definition title="Definition 9" className="my-4">
        <p>
          When the lines containing the angle are straight, the angle is called <strong>rectilineal</strong>.
        </p>
      </Definition>

      <Definition title="Definition 10" className="my-4">
        <p>
          When a straight line set up on a straight line makes the adjacent angles equal to one another,
          each of the equal angles is <strong>right</strong>, and the straight line standing on the other
          is called a <strong>perpendicular</strong> to that on which it stands.
        </p>
      </Definition>

      <Definition title="Definition 11" className="my-4">
        <p>An <strong>obtuse angle</strong> is an angle greater than a right angle.</p>
      </Definition>

      <Definition title="Definition 12" className="my-4">
        <p>An <strong>acute angle</strong> is an angle less than a right angle.</p>
      </Definition>

      <Definition title="Definition 13" className="my-4">
        <p>A <strong>boundary</strong> is that which is an extremity of anything.</p>
      </Definition>

      <Definition title="Definition 14" className="my-4">
        <p>A <strong>figure</strong> is that which is contained by any boundary or boundaries.</p>
      </Definition>

      <Definition title="Definition 15" className="my-4">
        <p>
          A <strong>circle</strong> is a plane figure contained by one line such that all the straight
          lines falling upon it from one point among those lying within the figure are equal to one another.
        </p>
      </Definition>

      <Definition title="Definition 16" className="my-4">
        <p>And the point is called the <strong>centre</strong> of the circle.</p>
      </Definition>

      <Definition title="Definition 17" className="my-4">
        <p>
          A <strong>diameter</strong> of the circle is any straight line drawn through the centre and
          terminated in both directions by the circumference of the circle, and such a straight line
          also bisects the circle.
        </p>
      </Definition>

      <Definition title="Definition 18" className="my-4">
        <p>
          A <strong>semicircle</strong> is the figure contained by the diameter and the circumference
          cut off by it. And the centre of the semicircle is the same as that of the circle.
        </p>
      </Definition>

      <Definition title="Definition 19" className="my-4">
        <p>
          <strong>Rectilineal figures</strong> are those which are contained by straight lines,{' '}
          <strong>trilateral figures</strong> being those contained by three,{' '}
          <strong>quadrilateral</strong> those contained by four, and <strong>multilateral</strong>{' '}
          those contained by more than four straight lines.
        </p>
      </Definition>

      <Definition title="Definition 20" className="my-4">
        <p>
          Of trilateral figures, an <strong>equilateral triangle</strong> is that which has its three
          sides equal, an <strong>isosceles triangle</strong> that which has two of its sides alone
          equal, and a <strong>scalene triangle</strong> that which has its three sides unequal.
        </p>
      </Definition>

      <Definition title="Definition 21" className="my-4">
        <p>
          Further, of trilateral figures, a <strong>right-angled triangle</strong> is that which has
          a right angle, an <strong>obtuse-angled triangle</strong> that which has an obtuse angle,
          and an <strong>acute-angled triangle</strong> that which has its three angles acute.
        </p>
      </Definition>

      <Definition title="Definition 22" className="my-4">
        <p>
          Of quadrilateral figures, a <strong>square</strong> is that which is both equilateral and
          right-angled; an <strong>oblong</strong> that which is right-angled but not equilateral;
          a <strong>rhombus</strong> that which is equilateral but not right-angled; and a{' '}
          <strong>rhomboid</strong> that which has its opposite sides and angles equal to one another
          but is neither equilateral nor right-angled. And let quadrilaterals other than these be
          called <strong>trapezia</strong>.
        </p>
      </Definition>

      <Definition title="Definition 23" className="my-4">
        <p>
          <strong>Parallel straight lines</strong> are straight lines which, being in the same plane
          and being produced indefinitely in both directions, do not meet one another in either direction.
        </p>
      </Definition>

      <h2>Postulates</h2>

      <p>
        The postulates are the fundamental assumptions specific to geometry. They describe what
        constructions we are allowed to perform and what properties we take as given.
      </p>

      <Postulate title="Postulate 1" className="my-4">
        <p>To draw a straight line from any point to any point.</p>
      </Postulate>

      <Postulate title="Postulate 2" className="my-4">
        <p>To produce a finite straight line continuously in a straight line.</p>
      </Postulate>

      <Postulate title="Postulate 3" className="my-4">
        <p>To describe a circle with any centre and distance.</p>
      </Postulate>

      <Postulate title="Postulate 4" className="my-4">
        <p>That all right angles are equal to one another.</p>
      </Postulate>

      <Postulate title="Postulate 5" className="my-4">
        <p>
          That, if a straight line falling on two straight lines make the interior angles on the
          same side less than two right angles, the two straight lines, if produced indefinitely,
          meet on that side on which are the angles less than the two right angles.
        </p>
        <p className="mt-2 text-dark-400 text-sm">
          <em>
            This is the famous "parallel postulate" which distinguishes Euclidean geometry from
            non-Euclidean geometries.
          </em>
        </p>
      </Postulate>

      <h2>Common Notions</h2>

      <p>
        The common notions are general axioms about equality and magnitude that apply not just to
        geometry but to all of mathematics and reasoning.
      </p>

      <CommonNotion title="Common Notion 1" className="my-4">
        <p>Things which are equal to the same thing are also equal to one another.</p>
      </CommonNotion>

      <CommonNotion title="Common Notion 2" className="my-4">
        <p>If equals be added to equals, the wholes are equal.</p>
      </CommonNotion>

      <CommonNotion title="Common Notion 3" className="my-4">
        <p>If equals be subtracted from equals, the remainders are equal.</p>
      </CommonNotion>

      <CommonNotion title="Common Notion 4" className="my-4">
        <p>Things which coincide with one another are equal to one another.</p>
      </CommonNotion>

      <CommonNotion title="Common Notion 5" className="my-4">
        <p>The whole is greater than the part.</p>
      </CommonNotion>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              The <strong>definitions</strong> establish the vocabulary of geometry: points, lines,
              angles, and figures.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              The first three <strong>postulates</strong> describe the basic tools of construction:
              the straightedge and compass.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Postulate 5</strong> (the parallel postulate) is the most famous and controversial,
              leading to the development of non-Euclidean geometry in the 19th century.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The <strong>common notions</strong> express basic logical principles about equality
              and comparison.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              From these simple foundations, Euclid derives all 48 propositions of Book I, including
              the famous Pythagorean theorem (Proposition 47).
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
