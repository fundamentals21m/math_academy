import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section15Questions } from '../../data/quizzes';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-semibold mb-4">Euclid</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The <em>Elements</em> of Euclid is the most influential scientific textbook
        in history. For over 2,000 years, it served not only as the foundation of
        geometry but as the model for rigorous mathematical reasoning. Its logical
        structure—definitions, axioms, postulates, and propositions—shaped how we
        think about mathematics to this day.
      </p>

      {/* Alexandria and the Museum */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Alexandria: The New Center of Learning</h3>

      <p className="text-dark-200 mb-4">
        The city of Alexandria, on the Mediterranean coast of Egypt, was founded by
        Alexander the Great in 332 BC. One of his generals, <strong>Ptolemy I</strong>,
        made Alexandria the capital of his kingdom and founded a dynasty that would
        rule until the famous queen Cleopatra.
      </p>

      <p className="text-dark-200 mb-4">
        Ptolemy established a university called the <strong>Museum</strong>, which
        soon acquired a library holding more than <strong>600,000 papyrus scrolls</strong>.
        For well over 600 years, Alexandria was the mathematical and scientific center
        of the world. Philosophy schools survived in Athens, but Alexandria dominated
        mathematics until its conquest by the Arabs in 641 AD.
      </p>

      <Callout type="info" title="The First Professor">
        The first chair of mathematics at the Museum was occupied by <strong>Euclid</strong>
        (330–275 BC), said to have been a student of a student of Plato. We know little
        about his life—some ancient authors even thought he was a committee, like the
        20th century Nicolas Bourbaki!
      </Callout>

      {/* Anecdotes */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Two Famous Anecdotes</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>No Royal Road</CardHeader>
          <p className="text-dark-300">
            When the impatient King Ptolemy asked if there was a shorter way to learn
            geometry, Euclid replied: <em>"There is no royal road to learning."</em>
          </p>
        </Card>
        <Card>
          <CardHeader>Practical Value?</CardHeader>
          <p className="text-dark-300">
            When a student demanded to know the practical value of what he was learning,
            Euclid gave him a small coin, saying in effect: "He must make gain out of
            what he learns."
          </p>
        </Card>
      </CardGrid>

      {/* The Elements */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Elements</h3>

      <p className="text-dark-200 mb-4">
        Euclid wrote books on optics, music, and astronomy, but his fame rests on
        the <em>Elements</em>—a collection of 13 "books" (what we would now call chapters)
        that presented the foundations of all mathematics known in his day. Nothing
        comparable was published again until the 20th century, when Bourbaki issued
        a similar encyclopedic collection.
      </p>

      <p className="text-dark-200 mb-4">
        None of the theorems in the 13 books can with certainty be ascribed to Euclid
        himself. The content came from many sources:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Pythagoreans</strong> (including Archytas): Books I, II, VI, VII, VIII, IX, XI</li>
          <li>• <strong>Hippocrates</strong>: Books III and IV</li>
          <li>• <strong>Eudoxus</strong>: Books V and XII</li>
          <li>• <strong>Theaetetus</strong>: Books X and XIII</li>
        </ul>
      </div>

      <p className="text-dark-200 mb-4">
        However, the <strong>logical organization</strong> of the <em>Elements</em> is
        undoubtedly Euclid's contribution. Its success can be measured by the fact that,
        after more than 2,000 years, it was still used as a textbook in British schools.
        Its structure was imitated by Thomas Aquinas in his <em>Summa</em>, Newton in
        his <em>Principia</em>, and Spinoza in his <em>Ethics</em>.
      </p>

      <Callout type="note" title="The Axiomatic Method">
        Euclid's grandiose plan was to deduce all of mathematics from a small number
        of initial definitions and assumptions. The assumptions are subdivided into
        <strong> axioms</strong> (dealing with mathematics in general) and <strong>postulates</strong> (dealing
        with geometry in particular).
      </Callout>

      {/* Definitions */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Euclid's Definitions</h3>

      <p className="text-dark-200 mb-4">
        The <em>Elements</em> begins with a list of 23 definitions. Here are the first four:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ol className="text-dark-200 space-y-2 list-decimal list-inside">
          <li>A <em>point</em> is that which has no parts.</li>
          <li>A <em>line</em> is length without width.</li>
          <li>The extremities of a line are points.</li>
          <li>A <em>straight line</em> is a line which lies evenly with the points on itself.</li>
        </ol>
      </div>

      <p className="text-dark-200 mb-4">
        These are not definitions in the modern sense, though they make clear that a
        point has no extension, that a line is not necessarily straight, and that it
        has finite length. Today we prefer to regard points and straight lines as
        <strong> undefined primitive concepts</strong>.
      </p>

      {/* The Five Postulates */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Five Postulates</h3>

      <p className="text-dark-200 mb-4">
        Euclid lists five postulates specific to geometry. These are the foundation
        stones upon which all of Euclidean geometry rests:
      </p>

      <Card className="mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-semibold">Postulate I</p>
            <p className="text-dark-300">To draw a straight line from any point to any other point.</p>
            <p className="text-dark-400 text-sm mt-1">
              <em>This means a unique straight line exists joining any two distinct points.</em>
            </p>
          </div>

          <div>
            <p className="text-amber-400 font-semibold">Postulate II</p>
            <p className="text-dark-300">To produce a finite straight line continuously in a straight line.</p>
            <p className="text-dark-400 text-sm mt-1">
              <em>"Continuously" implies indefinitely, ruling out spherical geometry.</em>
            </p>
          </div>

          <div>
            <p className="text-amber-400 font-semibold">Postulate III</p>
            <p className="text-dark-300">To describe a circle with any center and any distance [as radius].</p>
            <p className="text-dark-400 text-sm mt-1">
              <em>A circle can be constructed given its center and radius.</em>
            </p>
          </div>

          <div>
            <p className="text-amber-400 font-semibold">Postulate IV</p>
            <p className="text-dark-300">That all right angles are equal to one another.</p>
            <p className="text-dark-400 text-sm mt-1">
              <em>Already in antiquity, some argued this should be an axiom instead.</em>
            </p>
          </div>

          <div>
            <p className="text-amber-400 font-semibold">Postulate V (The Parallel Postulate)</p>
            <p className="text-dark-300">
              That, if a straight line falling on two straight lines makes the interior
              angles on the same side less than two right angles, the two straight lines,
              if produced indefinitely, meet on that side on which are the angles less
              than two right angles.
            </p>
            <p className="text-dark-400 text-sm mt-1">
              <em>This is the most famous of Euclid's postulates—it would take 2,000 years
              to understand its true significance.</em>
            </p>
          </div>
        </div>
      </Card>

      {/* Proposition 1 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The First Proposition</h3>

      <p className="text-dark-200 mb-4">
        On these definitions and assumptions, Euclid builds his edifice of logical
        deductions. Here is how he begins:
      </p>

      <Callout type="theorem" title="Proposition 1">
        On a finite straight line to construct an equilateral triangle.
      </Callout>

      <p className="text-dark-200 mb-4">
        In his proof, Euclid considers a segment AB and constructs circles with centers
        A and B, both with radius AB. He then considers the point C where the two
        circles intersect and shows that triangle ABC is equilateral.
      </p>

      <p className="text-dark-200 mb-4">
        This proof, however, <strong>falls short of modern standards of rigor</strong>.
        Two circles may meet in two points, touch at one point, or not meet at all.
        In this situation they do meet in two points—but this does not follow from
        Euclid's explicit assumptions! This gap would not be addressed until Hilbert's
        rigorous axiomatization in the 20th century.
      </p>

      {/* Overview of the 13 Books */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Thirteen Books</h3>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book I:</span>
          <span className="text-dark-300 ml-2">
            Basic plane geometry, concluding with the Pythagorean Theorem and its converse.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book II:</span>
          <span className="text-dark-300 ml-2">
            Geometric algebra—identities like a(b + c) = ab + ac using areas of rectangles.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book III:</span>
          <span className="text-dark-300 ml-2">
            Properties of circles, with rigorous proofs even for "obvious" facts.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book IV:</span>
          <span className="text-dark-300 ml-2">
            Constructions for regular polygons, culminating with the 15-gon.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book V:</span>
          <span className="text-dark-300 ml-2">
            Eudoxus's theory of proportion—arithmetic for line segments.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book VI:</span>
          <span className="text-dark-300 ml-2">
            Similar triangles and arc length proportional to central angle.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Books VII–IX:</span>
          <span className="text-dark-300 ml-2">
            Number theory: Euclid's Algorithm, unique factorization, infinitude of primes,
            geometric series, perfect numbers.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book X:</span>
          <span className="text-dark-300 ml-2">
            Classification of irrationals—field extensions of degree 4 over rationals.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book XI:</span>
          <span className="text-dark-300 ml-2">
            Solid geometry fundamentals.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book XII:</span>
          <span className="text-dark-300 ml-2">
            Eudoxus's masterpiece—rigorous treatment of volumes of pyramids, cones, and spheres.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Book XIII:</span>
          <span className="text-dark-300 ml-2">
            The apex—complete theory of the five regular polyhedra (Platonic solids).
          </span>
        </div>
      </div>

      {/* Euclid's Approach to Area */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Euclid's Theory of Area</h3>

      <p className="text-dark-200 mb-4">
        To prove the Pythagorean Theorem, Euclid needed a theory of area. Today we
        define the area of a rectangle as "length times width"—but this presupposes
        knowing how to multiply irrationals!
      </p>

      <p className="text-dark-200 mb-4">
        Euclid approached area more carefully: two polygons have the same area if one
        can be <strong>dissected into triangles</strong> which can be reassembled, like
        a jigsaw puzzle, to form a polygon congruent to the second. Only in Book VI,
        after presenting Eudoxus's theory of irrationals, is the "length times width"
        formula justified.
      </p>

      {/* Legacy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A 2,000-Year Legacy</h3>

      <p className="text-dark-200 mb-4">
        The <em>Elements</em> was used for over 2,000 years to teach not only geometry
        but rigorous thinking. After World War II, a reaction set in—educators argued
        that Euclid was not rigorous enough (those gaps in proofs!) while Hilbert's
        rigorous treatment was too cumbersome.
      </p>

      <p className="text-dark-200 mb-4">
        Geometry was swept away in favor of "New Mathematics." The French mathematician
        Dieudonné, a founding member of the Bourbaki group, famously suggested that
        linear algebra should replace what he contemptuously called "the theory of the
        triangle."
      </p>

      <Callout type="note" title="Looking Ahead">
        Euclid's Fifth Postulate—the parallel postulate—would prove to be far more
        significant than anyone imagined. For over 2,000 years, mathematicians tried
        to prove it from the other postulates. Their failure led to one of the greatest
        discoveries in mathematics: non-Euclidean geometry.
      </Callout>

      {/* Section Quiz */}
      <SectionQuiz sectionId={15} questions={section15Questions} />
    </LessonLayout>
  );
}
