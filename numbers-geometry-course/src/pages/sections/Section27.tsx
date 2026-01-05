import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section27Questions } from '../../data/quizzes';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2 className="text-2xl font-semibold mb-4">The Non-Euclidean Plane</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        A beautiful example of how isometries create geometry is the{' '}
        <strong>non-Euclidean plane</strong> of Henri Poincaré (1882). Poincaré
        found a geometry in which there is <em>more than one parallel</em> to a
        given "line" through a given point.
      </p>

      {/* Poincaré's Model */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Poincaré's Upper Half-Plane</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          The Non-Euclidean "Plane"
        </h4>
        <p className="text-dark-200 mb-4">
          The upper half (y {">"} 0) of{' '}
          <InlineMath>\mathbb{'{R}'} \times \mathbb{'{R}'}</InlineMath>.
        </p>
        <p className="text-dark-300 text-sm">
          The "reflection" is a generalization of ordinary reflection called{' '}
          <strong>reflection in a circle</strong>.
        </p>
      </div>

      {/* Reflection in a Circle */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Reflection in a Circle</h3>

      <p className="text-dark-200 mb-6">
        The reflection of a point P in a circle C with center Z and radius r is
        defined to be the point P' on the Euclidean line ZP such that:
      </p>

      <MathBlock>{`ZP \\cdot ZP' = r^2`}</MathBlock>

      <p className="text-dark-200 my-6">
        Ordinary reflection can be regarded as the limiting case of reflection in
        a circle as the center Z tends to infinity.
      </p>

      {/* Non-Euclidean Lines */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Non-Euclidean "Lines"</h3>

      <p className="text-dark-200 mb-6">
        The reflections generating non-Euclidean isometries include:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Vertical Half-Lines" />
          <p className="text-xs text-dark-300">
            Ordinary reflections in vertical lines x = constant. These are "lines"
            in the non-Euclidean plane.
          </p>
        </Card>
        <Card>
          <CardHeader title="Semicircles" />
          <p className="text-xs text-dark-300">
            Reflections in circles with centers on the x-axis. The resulting
            semicircles are also "lines."
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        The "lines" of the non-Euclidean plane are obtained as the{' '}
        <strong>fixed point sets</strong> of the reflections: vertical Euclidean
        half-lines and Euclidean semicircles with centers on the x-axis.
      </p>

      {/* Multiple Parallels */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Failure of the Parallel Axiom
      </h3>

      <Callout type="warning">
        <p>
          Through any point P not on a "line" L, there are{' '}
          <strong>multiple "lines"</strong> that do not meet L. The{' '}
          <strong>parallel axiom fails</strong> in non-Euclidean geometry!
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        Apart from the parallel axiom, all other axioms of Euclid's geometry hold
        in the non-Euclidean plane. For example, there is exactly one "line"
        through any two points P and Q, and it can be found by ruler and compass
        construction.
      </p>

      {/* Construction of Lines */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Constructing Non-Euclidean Lines
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm mb-4">
          To find the non-Euclidean "line" through P and Q:
        </p>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>1. Draw the Euclidean line PQ.</li>
          <li>2. If PQ is not vertical, construct its perpendicular bisector.</li>
          <li>
            3. The bisector meets the x-axis at the center of the semicircle that
            is the non-Euclidean "line" PQ.
          </li>
        </ul>
      </div>

      {/* Pleasant Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Pleasant Properties of the Model
      </h3>

      <p className="text-dark-200 mb-6">
        Poincaré's model has some nice features:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Angles</strong> are ordinary angles (between tangent lines
              at intersection points).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              Non-Euclidean <strong>"circles"</strong> are Euclidean circles (with
              different centers).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              Non-Euclidean constructions can all be done within{' '}
              <strong>Euclidean geometry</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Types of Isometries */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Non-Euclidean Isometries
      </h3>

      <p className="text-dark-200 mb-6">
        The orientation-preserving isometries (composites of two reflections)
        come in three types, depending on how the "lines" of reflection meet:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Rotations" />
          <p className="text-xs text-dark-300">
            "Lines" meet at a point in the half-plane. Non-Euclidean rotations
            about that point.
          </p>
        </Card>
        <Card>
          <CardHeader title="Limit Rotations" />
          <p className="text-xs text-dark-300">
            "Lines" meet on the x-axis (at infinity). The center is infinitely far
            away.
          </p>
        </Card>
        <Card>
          <CardHeader title="Translations" />
          <p className="text-xs text-dark-300">
            "Lines" do not meet at all. Non-Euclidean translations along a common
            perpendicular.
          </p>
        </Card>
      </CardGrid>

      {/* The x-axis is at Infinity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Infinite Distance to the x-Axis
      </h3>

      <p className="text-dark-200 mb-6">
        An example of a non-Euclidean "translation" is the composite of
        reflections in semicircles with center O and radii 1 and 2. This sends
        each (x, y) to (4x, 4y).
      </p>

      <Callout type="info">
        <p>
          The points (0, 1), (0, 1/4), (0, 1/16), ... are equally spaced in{' '}
          <strong>non-Euclidean distance</strong> because each is mapped to its
          predecessor by this translation. This explains why the{' '}
          <strong>x-axis is infinitely far away</strong> from all points of the
          non-Euclidean plane, and why non-Euclidean lines are infinitely long.
        </p>
      </Callout>

      {/* Why Study Non-Euclidean Geometry? */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Why Study Non-Euclidean Geometry?
      </h3>

      <p className="text-dark-200 mb-6">
        This may seem like a strange geometry, with semicircles called "lines" of
        infinite "length." But because all but one of Euclid's axioms hold, it is
        feasible to use ordinary geometric reasoning.
      </p>

      <p className="text-dark-200 mb-6">
        Poincaré introduced this model because he wanted to study transformations
        generated by reflections in circles, and he found that{' '}
        <strong>geometric language made them easier to understand</strong>.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Poincaré's <strong>non-Euclidean plane</strong> is the upper
              half-plane with reflection in circles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              "Lines" are vertical half-lines and semicircles centered on the
              x-axis.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>parallel axiom fails</strong>: multiple "parallels"
              exist through a point.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Angles</strong> in the model are ordinary Euclidean angles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The <strong>x-axis is infinitely far away</strong> in non-Euclidean
              distance; "lines" are infinitely long.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={27} questions={section27Questions} />
    </LessonLayout>
  );
}
