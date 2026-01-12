import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section11Questions } from '../../data/quizzes';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-semibold mb-4">Constructions</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The aim of Euclid's geometry is to study the properties of the simplest
        curves—the straight line and the circle. These are drawn by the simplest
        instruments: the <strong>ruler</strong> and the <strong>compass</strong>.
      </p>

      {/* Euclid's Axioms */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclid's Construction Axioms</h3>

      <p className="text-dark-200 mb-6">
        Two of Euclid's axioms state the basic constructions that are possible:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">The Two Basic Constructions</h4>
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>To draw a <strong>straight line</strong> from any point to any other point.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>To draw a <strong>circle</strong> with any center and radius.</span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Euclid's axioms do not state the existence of anything else, so all other
        figures are shown to exist by actually <em>constructing</em> them. Given
        certain points, lines, and circles, new ones are constructed using ruler
        and compass until the required figure is obtained.
      </p>

      {/* First Proposition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Equilateral Triangle</h3>

      <p className="text-dark-200 mb-6">
        Euclid's first proposition is that it is possible to construct an{' '}
        <strong>equilateral triangle</strong> with a given side{' '}
        <InlineMath>AB</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Construction</h4>
        <ol className="space-y-2 text-dark-200 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">1.</span>
            <span>
              Draw the circle with center <InlineMath>A</InlineMath> and radius{' '}
              <InlineMath>AB</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">2.</span>
            <span>
              Draw the circle with center <InlineMath>B</InlineMath> and radius{' '}
              <InlineMath>BA</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">3.</span>
            <span>
              Connect <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> by
              straight lines to one intersection, <InlineMath>C</InlineMath>, of
              these circles
            </span>
          </li>
        </ol>
        <p className="text-dark-300 mt-4 text-sm">
          Triangle <InlineMath>ABC</InlineMath> is equilateral because{' '}
          <InlineMath>AC = AB</InlineMath> (radius of first circle) and{' '}
          <InlineMath>BC = BA</InlineMath> (radius of second circle).
        </p>
      </div>

      {/* Derived Constructions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Important Derived Constructions</h3>

      <CardGrid>
        <Card>
          <CardHeader title="1. Bisecting an Angle" />
          <p className="text-sm text-dark-300">
            Draw a circle centered at the apex to mark equal sides. Construct an
            equilateral triangle on those points. The line from apex to the new
            vertex bisects the angle.
          </p>
        </Card>
        <Card>
          <CardHeader title="2. Bisecting a Segment" />
          <p className="text-sm text-dark-300">
            Given segment <InlineMath>AB</InlineMath>, construct equilateral
            triangle <InlineMath>ABC</InlineMath>. The bisector of angle{' '}
            <InlineMath>ACB</InlineMath> also bisects <InlineMath>AB</InlineMath>.
          </p>
        </Card>
      </CardGrid>

      <div className="bg-dark-800 rounded-lg p-6 mt-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          3. Perpendicular Through External Point
        </h4>
        <p className="text-dark-200 text-sm">
          To construct the perpendicular to a line through a point{' '}
          <InlineMath>O</InlineMath> not on it:
        </p>
        <ol className="mt-3 space-y-1 text-dark-300 text-sm">
          <li>1. Draw a circle centered at <InlineMath>O</InlineMath>, large enough to cut the line at points <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath></li>
          <li>2. The bisector of angle <InlineMath>AOB</InlineMath> is the required perpendicular</li>
        </ol>
      </div>

      {/* Replication */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Replicating Lengths and Angles</h3>

      <p className="text-dark-200 mb-6">
        The compass gives an easy way to <strong>replicate a line segment</strong>—just
        set the compass to the given length and draw an arc from a new point. It
        is also possible to <strong>replicate a given angle</strong>.
      </p>

      <Callout type="info">
        <p>
          Euclid uses angle replication to construct a <strong>parallel</strong>{' '}
          to a given line through a given point. He chooses a point on the line,
          joins it to the given point, then replicates the angle at the new point.
        </p>
      </Callout>

      {/* Dividing Segments */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Dividing into Equal Parts</h3>

      <p className="text-dark-200 mb-6">
        The construction of parallels allows us to divide a line segment{' '}
        <InlineMath>AB</InlineMath> into <InlineMath>n</InlineMath> equal parts
        for any natural number <InlineMath>n</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Dividing <InlineMath>AB</InlineMath> into <InlineMath>n</InlineMath> Equal Parts
        </h4>
        <ol className="space-y-2 text-dark-200 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">1.</span>
            <span>
              Along any line through <InlineMath>A</InlineMath> (other than{' '}
              <InlineMath>AB</InlineMath>), mark <InlineMath>n</InlineMath> equally
              spaced points <InlineMath>P_1, P_2, \ldots, P_n</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">2.</span>
            <span>
              Join <InlineMath>P_n</InlineMath> to <InlineMath>B</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">3.</span>
            <span>
              Draw parallels to <InlineMath>P_nB</InlineMath> through{' '}
              <InlineMath>P_1, P_2, \ldots, P_{'{n-1}'}</InlineMath>
            </span>
          </li>
        </ol>
        <p className="text-dark-300 mt-3 text-sm">
          These parallels cut <InlineMath>AB</InlineMath> into{' '}
          <InlineMath>n</InlineMath> equal parts.
        </p>
      </div>

      {/* Gauss and the 17-gon */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Gauss and the Regular 17-gon</h3>

      <p className="text-dark-200 mb-6">
        The Greeks found constructions for the equilateral triangle, square,
        pentagon, and hexagon, but no essentially new constructions were found
        until <strong>Gauss in 1796</strong> discovered how to construct the
        regular <strong>17-gon</strong>!
      </p>

      <Callout type="success">
        <p>
          Gauss's discovery led to an algebraic theory of constructibility,
          completed by <strong>Pierre Wantzel</strong> (1837). The astonishing
          result: the regular <InlineMath>n</InlineMath>-gon is constructible if
          and only if <InlineMath>n</InlineMath> is a product of a power of 2 by
          distinct <strong>Fermat primes</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mt-6 mb-6">
        This explains why no constructions had been found for the regular 7-gon,
        11-gon, and others—they are provably <em>impossible</em> with ruler and
        compass!
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Euclidean geometry studies lines and circles using{' '}
              <strong>ruler and compass</strong> constructions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Euclid's first proposition constructs an <strong>equilateral
              triangle</strong> using two intersecting circles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Key constructions include <strong>bisecting angles</strong>,{' '}
              <strong>bisecting segments</strong>, and <strong>drawing
              perpendiculars</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Parallels allow dividing any segment into <InlineMath>n</InlineMath>{' '}
              equal parts.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Gauss</strong> (1796) discovered the 17-gon construction,
              leading to a complete theory of which regular polygons are
              constructible.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={11} questions={section11Questions} />
    </LessonLayout>
  );
}
