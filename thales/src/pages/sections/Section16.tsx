import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section16Questions } from '../../data/quizzes';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-semibold mb-4">Non-Euclidean Geometry and Hilbert's Axioms</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        For over 2,000 years, mathematicians tried to prove Euclid's fifth postulate from
        the other four. Their failure led to one of the most revolutionary discoveries in
        mathematics: there exist perfectly consistent geometries where the parallel postulate
        is false. This discovery shattered the ancient belief that Euclid's axioms were
        necessary truths about physical space.
      </p>

      {/* The Problem with Postulate V */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Problem with Postulate V</h3>

      <p className="text-dark-200 mb-4">
        Euclid's fifth postulate—the parallel postulate—always seemed less natural or
        convincing than the others. Ever since Euclid's time, people felt it ought to be
        deducible from the other postulates.
      </p>

      <p className="text-dark-200 mb-4">
        Noteworthy attempts to prove the fifth postulate were made by:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Proclus</strong> (410–485 AD)</li>
          <li>• <strong>Saccheri</strong> (1667–1733)</li>
          <li>• <strong>Thibault</strong> (1775–1822)</li>
          <li>• And many others...</li>
        </ul>
      </div>

      <p className="text-dark-200 mb-4">
        We now know that these attempts were <strong>doomed to fail</strong>. Postulate V
        is independent of Postulates I to IV. One of Euclid's contributions to mathematics
        was his implicit recognition of this fact by presenting V as an axiom.
      </p>

      {/* Equivalent Statements */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Statements Equivalent to the Parallel Postulate</h3>

      <p className="text-dark-200 mb-4">
        Given "absolute geometry" (geometry based only on postulates I to IV), the following
        statements are all equivalent to the parallel postulate:
      </p>

      <div className="space-y-3 mb-6">
        <Card>
          <p className="text-dark-200">
            <strong className="text-amber-400">Playfair's Axiom:</strong> Through a point not on a
            line there is exactly one line parallel to that line.
          </p>
        </Card>
        <Card>
          <p className="text-dark-200">
            <strong className="text-amber-400">Legendre:</strong> Every segment is a side of a
            square (with four right angles).
          </p>
        </Card>
        <Card>
          <p className="text-dark-200">
            <strong className="text-amber-400">Wallis:</strong> Not every pair of similar triangles
            is congruent.
          </p>
        </Card>
        <Card>
          <p className="text-dark-200">
            <strong className="text-amber-400">Legendre:</strong> Every triangle has a circumcircle.
          </p>
        </Card>
        <Card>
          <p className="text-dark-200">
            <strong className="text-amber-400">Legendre:</strong> There is at least one triangle
            whose angle sum is 180°.
          </p>
        </Card>
      </div>

      <p className="text-dark-200 mb-4">
        Each of these was felt to be insufficiently "self-evident" to count as a proper
        axiom. What mathematicians really wanted was a deduction of V from I to IV alone.
      </p>

      {/* Gauss and the Discovery */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Gauss Suspects the Truth</h3>

      <p className="text-dark-200 mb-4">
        <strong>Gauss</strong> may have been the first person to suspect the truth. In a
        letter to Franz Taurinus, written in <strong>1824</strong>, Gauss says that he is
        sure the parallel postulate cannot be proved.
      </p>

      <Callout type="note" title="The Hyperbolic Alternative">
        Consider replacing Euclid's parallel postulate with:
        <p className="mt-2 font-semibold text-amber-400">
          (H) Through any point not on a line, there are at least two lines through that
          point and parallel to that line.
        </p>
        <p className="mt-2">
          If we replace Euclid's postulate V with (H), we get the axioms of
          <strong> hyperbolic geometry</strong>. Gauss believed hyperbolic geometry to be consistent.
        </p>
      </Callout>

      {/* Lobachevsky and Bolyai */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Lobachevsky and Bolyai</h3>

      <p className="text-dark-200 mb-4">
        The first person to publish results in hyperbolic geometry was the Russian
        <strong> N. I. Lobachevsky</strong> (1793–1856), of the University of Kazan, in
        <strong> 1829</strong>. In the same year, essentially the same results were discovered
        independently by the Hungarian <strong>J. Bolyai</strong>.
      </p>

      <p className="text-dark-200 mb-4">
        It was not until <strong>1868</strong> that it was proved that postulates I to IV
        do not imply postulate V. In that year, <strong>E. Beltrami</strong> (1835–1900)
        gave a Euclidean model for hyperbolic geometry.
      </p>

      <Callout type="info" title="Relative Consistency">
        Beltrami showed that if hyperbolic geometry contained any logical contradiction,
        that contradiction could be translated into a contradiction in Euclidean geometry.
        Since (presumably) there is no inconsistency in Euclidean geometry, there is none
        in hyperbolic geometry either.
      </Callout>

      {/* Poincaré's Model */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Poincaré's Disk Model</h3>

      <p className="text-dark-200 mb-4">
        In 1882, in the first article ever published in <em>Acta Mathematica</em>,
        <strong> Henri Poincaré</strong> (1854–1912) gave a second Euclidean model for
        hyperbolic geometry.
      </p>

      <Card className="mb-6">
        <CardHeader>The Poincaré Disk</CardHeader>
        <div className="space-y-3 text-dark-300">
          <p>
            <strong>Points:</strong> Points of the Cartesian plane in the interior of the
            unit circle <InlineMath>{`x^2 + y^2 = 1`}</InlineMath>.
          </p>
          <p>
            <strong>Lines:</strong> Either a diameter of the unit circle (minus endpoints),
            or a circular arc in the interior of the unit circle that is orthogonal to it.
          </p>
          <p>
            <strong>Angles:</strong> The Euclidean angle between the tangents at the point
            where two "lines" meet.
          </p>
          <p>
            <strong>Distance:</strong> Defined using a special formula involving cross-ratios,
            so that two Poincaré segments are "equal" if they have the same hyperbolic length.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Surprisingly, "circles" in the Poincaré sense are ordinary Euclidean circles—it's
        just that their Poincaré centers are not where you would expect.
      </p>

      <p className="text-dark-200 mb-4">
        In this model, postulates I to IV are satisfied, but postulate V is not: through
        the center of the unit circle, for example, one can draw many "lines" that do not
        meet a given orthogonal arc.
      </p>

      {/* Elliptic Geometry */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Elliptic Geometry</h3>

      <p className="text-dark-200 mb-4">
        Besides hyperbolic geometry, mathematicians also consider <strong>elliptic geometry</strong>,
        developed by <strong>Riemann</strong> in 1854. (This is not to be confused with the
        more general "Riemannian geometry.")
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Elliptic Geometry</CardHeader>
          <ul className="text-dark-300 space-y-2">
            <li>• Straight lines are finite</li>
            <li>• There are <em>no</em> parallel lines</li>
            <li>• A "point" is like a pair of antipodal points on a sphere</li>
            <li>• A "line" is like a great circle</li>
            <li>• Angle sum of triangle &gt; 180°</li>
          </ul>
        </Card>
        <Card>
          <CardHeader>Hyperbolic Geometry</CardHeader>
          <ul className="text-dark-300 space-y-2">
            <li>• Straight lines are infinite</li>
            <li>• Infinitely many parallels through a point</li>
            <li>• Space is "saddle-shaped"</li>
            <li>• Angle sum of triangle &lt; 180°</li>
            <li>• Similar triangles must be congruent</li>
          </ul>
        </Card>
      </CardGrid>

      {/* Revolutionary Implications */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A Revolutionary Idea</h3>

      <p className="text-dark-200 mb-4">
        The attitude of modern mathematicians is that one can <strong>vary the postulates
        of Euclid at will</strong>, constructing as many different geometries as one wishes.
        In the 19th century, this was a radical idea. People thought of Euclid's axioms
        as necessary truths about space—truths which underlay all of astronomy and physics.
      </p>

      <Callout type="note" title="Einstein and General Relativity">
        A modern physicist uses whichever geometry suits his purposes. According to the
        <strong> general theory of relativity</strong>, space-time is a four-dimensional
        Riemannian geometry with curvature varying from place to place, depending on the
        local density of matter.
        <p className="mt-2">
          The sum of the angles of a triangle might be 180° (as in Euclidean geometry) in a
          vacuum. But if matter is present, the angle sum differs from 180° due to the bending
          of light rays under gravitational influence. Such ideas would have amazed mathematicians
          living in the early 19th century.
        </p>
      </Callout>

      {/* Hilbert's Axioms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Hilbert's Axioms (1899)</h3>

      <p className="text-dark-200 mb-4">
        We saw that Euclid's postulates were not adequate to describe the system he had
        in mind—gaps existed even in Proposition 1. Surprisingly, it was only in
        <strong> 1899</strong> that <strong>David Hilbert</strong> gave a completely adequate
        axiomatic description of three-dimensional Euclidean space.
      </p>

      <p className="text-dark-200 mb-4">
        Since Hilbert required <strong>21 axioms</strong>, we can only give the flavor of
        his work here.
      </p>

      <Card className="mb-6">
        <CardHeader>Hilbert's Undefined Concepts</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p><strong>Point, Line, Plane</strong> — primitive terms, not defined</p>
          <p><strong>Incidence</strong> — between points and lines, points and planes, lines and planes</p>
          <p><strong>Order</strong> — a ternary relation of "betweenness" for three collinear points</p>
          <p><strong>Congruence</strong> — a binary relation between segments and between angles</p>
        </div>
      </Card>

      <h4 className="text-lg font-semibold mt-6 mb-3">Groups of Axioms</h4>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Incidence (7 axioms):</span>
          <span className="text-dark-300 ml-2">
            E.g., "Given two distinct points A and B, there is a unique line a such that
            A lies on a and B lies on a."
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Order (5 axioms):</span>
          <span className="text-dark-300 ml-2">
            E.g., "If B is between A and C, then B is between C and A." And the crucial
            Pasch's Axiom: "If A, B, C are non-collinear and a line meets segment AB, then
            it meets AC or BC."
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Congruence (6 axioms):</span>
          <span className="text-dark-300 ml-2">
            E.g., "If AB ≡ A′B′ and AB ≡ A″B″, then A′B′ ≡ A″B″."
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Continuity (2 axioms):</span>
          <span className="text-dark-300 ml-2">
            The Axiom of Archimedes, plus the Axiom of Completeness.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Parallels (1 axiom):</span>
          <span className="text-dark-300 ml-2">
            Playfair's form of the parallel postulate.
          </span>
        </div>
      </div>

      {/* Axiom of Completeness */}
      <h4 className="text-lg font-semibold mt-6 mb-3">The Axiom of Completeness</h4>

      <p className="text-dark-200 mb-4">
        Hilbert's most controversial axiom was the <strong>axiom of completeness</strong>.
        He only reluctantly added it to the French translation of his lecture notes when
        it became apparent that otherwise one still could not deduce Euclid's Proposition 1
        (the equilateral triangle construction).
      </p>

      <Callout type="theorem" title="Axiom of Completeness (Bernays's formulation)">
        No points can be added to a straight line so that all other postulates remain valid.
      </Callout>

      <p className="text-dark-200 mb-4">
        This axiom ensures that the line is "complete"—there are no gaps. It's what
        allows two circles to intersect when they should.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• The parallel postulate is <strong>independent</strong> of the other axioms</li>
          <li>• <strong>Hyperbolic geometry</strong> (Lobachevsky, Bolyai) has infinitely many parallels</li>
          <li>• <strong>Elliptic geometry</strong> (Riemann) has no parallels</li>
          <li>• <strong>Euclidean models</strong> (Beltrami, Poincaré) prove consistency</li>
          <li>• Geometry is now seen as a <strong>formal system</strong>, not a description of physical space</li>
          <li>• <strong>Hilbert's 21 axioms</strong> (1899) finally made geometry rigorous</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={16} questions={section16Questions} />
    </LessonLayout>
  );
}
