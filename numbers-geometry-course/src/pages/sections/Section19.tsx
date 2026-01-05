import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section19Questions } from '../../data/quizzes';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-semibold mb-4">Lines and Circles</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The most important step in geometry since ancient times was the
        introduction of <strong>coordinates</strong> by Descartes in his{' '}
        <em>Geometry</em> of 1637. Coordinates are a simple idea, but not much
        use without algebra and symbolic notation.
      </p>

      <Callout type="info">
        <p>
          Fermat in 1629 hit on the same idea as Descartes, but his results were
          not published at the time. The development of algebra over the
          preceding century made coordinates practical.
        </p>
      </Callout>

      {/* Coordinates */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Coordinates of a Point</h3>

      <p className="text-dark-200 mb-6">
        The <strong>coordinates</strong> of a point P in the plane are its
        distances <InlineMath>(x, y)</InlineMath> from perpendicular axes OY and
        OX. The point O is called the <strong>origin</strong>, with coordinates{' '}
        <InlineMath>(0, 0)</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">Extending to All Quadrants</h4>
        <p className="text-dark-300 text-sm mb-4">
          Fermat and Descartes only considered the <strong>positive
          quadrant</strong> (x {">"} 0, y {">"} 0). But if we allow negative
          coordinates:
        </p>
        <ul className="text-dark-300 text-sm space-y-1">
          <li>• Points to the left of O have negative x coordinates</li>
          <li>• Points below O have negative y coordinates</li>
          <li>• Everything works smoothly thanks to the rules for negative numbers</li>
        </ul>
      </div>

      {/* Equation of a Line */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Equation of a Straight Line</h3>

      <p className="text-dark-200 mb-6">
        A straight line through the origin (other than the y-axis) has the
        property that the ratio <InlineMath>y/x</InlineMath> is constant:
      </p>

      <MathBlock>{`y = mx`}</MathBlock>

      <p className="text-dark-200 my-6">
        This is why we call equations like <InlineMath>ax + by = c</InlineMath>{' '}
        <strong>linear</strong>—they describe straight lines.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          General Equation of a Line
        </h4>
        <MathBlock>{`ax + by = c`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          By suitable choice of constants a, b, and c, this equation gives any
          straight line in the plane.
        </p>
      </div>

      {/* Equation of a Circle */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Equation of a Circle</h3>

      <p className="text-dark-200 mb-6">
        A circle consists of all points at constant distance r (the{' '}
        <strong>radius</strong>) from its center. Using the Pythagorean theorem,
        if the center is at the origin:
      </p>

      <MathBlock>{`x^2 + y^2 = r^2`}</MathBlock>

      <p className="text-dark-200 my-6">
        For a circle with center at an arbitrary point{' '}
        <InlineMath>(a, b)</InlineMath>:
      </p>

      <MathBlock>{`(x - a)^2 + (y - b)^2 = r^2`}</MathBlock>

      {/* Euclidean Geometry and Coordinates */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Coordinates Define Euclidean Geometry
      </h3>

      <p className="text-dark-200 mb-6">
        In deriving these equations, we used several facts characteristic of
        <strong> Euclidean geometry</strong>:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Rectangles" />
          <p className="text-xs text-dark-300">
            We assumed rectangles exist (to set up perpendicular axes).
          </p>
        </Card>
        <Card>
          <CardHeader title="Similar Triangles" />
          <p className="text-xs text-dark-300">
            Similar triangles of different sizes exist (used for the line
            equation).
          </p>
        </Card>
        <Card>
          <CardHeader title="Pythagoras" />
          <p className="text-xs text-dark-300">
            The Pythagorean theorem holds (used for the circle equation).
          </p>
        </Card>
        <Card>
          <CardHeader title="Parallel Axiom" />
          <p className="text-xs text-dark-300">
            All of these are equivalent to the parallel axiom.
          </p>
        </Card>
      </CardGrid>

      <Callout type="success">
        <p>
          Coordinates give yet another way to <strong>define</strong> Euclidean
          geometry. When we look at geometry this way, Euclidean geometry turns
          out to be the one with the <strong>simplest equations</strong>.
        </p>
      </Callout>

      {/* Analytic vs Synthetic */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Analytic vs. Synthetic Geometry</h3>

      <p className="text-dark-200 mb-6">
        Coordinate geometry is called <strong>analytic</strong> because
        situations are "analyzed" rather than "synthesized":
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">Synthetic:</span>
            <span>Ruler and compass constructions (Euclid's approach)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">Analytic:</span>
            <span>Solving equations to find points, lines, and circles</span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Thanks to the power of algebra, analysis has much greater scope. It can
        even show the <strong>impossibility</strong> of certain constructions
        sought by the Greeks.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Coordinates</strong> (x, y) locate points by distances from
              perpendicular axes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Lines</strong> have equation ax + by = c (linear).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Circles</strong> have equation{' '}
              <InlineMath>(x-a)^2 + (y-b)^2 = r^2</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              These equations assume <strong>Euclidean geometry</strong>{' '}
              (parallel axiom).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Analytic geometry</strong> uses algebra instead of ruler
              and compass.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={19} questions={section19Questions} />
    </LessonLayout>
  );
}
