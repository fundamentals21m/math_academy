import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section23Questions } from '../../data/quizzes';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2 className="text-2xl font-semibold mb-4">The Euclidean Plane</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Now that we have the line as the set <InlineMath>\mathbb{'{R}'}</InlineMath>{' '}
        of real numbers x, the plane is obtained by a simple trick: it is the set
        of <strong>ordered pairs</strong> of real numbers, (x, y).
      </p>

      {/* Cartesian Product */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Cartesian Product</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Definition of the Plane
        </h4>
        <p className="text-dark-200">
          In honor of Descartes, the set of ordered pairs{' '}
          <InlineMath>(x, y)</InlineMath> is called the{' '}
          <strong>Cartesian product</strong>{' '}
          <InlineMath>\mathbb{'{R}'} \times \mathbb{'{R}'}</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The main difference between Descartes and us is that he supposed the plane
        to exist, then gave each point a coordinate pair (x, y). We suppose only
        that <em>numbers</em> exist, we say the coordinate pair (x, y){' '}
        <em>is</em> a point, and that the set of these points is the plane.
      </p>

      {/* Distance Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euclidean Distance</h3>

      <p className="text-dark-200 mb-6">
        We also have to define the <strong>distance</strong> between points. We
        know what it should be from previous experience with the Pythagorean
        theorem.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Euclidean Distance Formula
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          The Euclidean distance between{' '}
          <InlineMath>P_1 = (x_1, y_1)</InlineMath> and{' '}
          <InlineMath>P_2 = (x_2, y_2)</InlineMath> is:
        </p>
        <MathBlock>{`d(P_1, P_2) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`}</MathBlock>
      </div>

      <Callout type="info">
        <p>
          This is prompted by the <strong>Pythagorean theorem</strong>, because
          the segment from <InlineMath>(x_1, y_1)</InlineMath> to{' '}
          <InlineMath>(x_2, y_2)</InlineMath> is the hypotenuse of a right triangle
          with legs <InlineMath>x_2 - x_1</InlineMath> and{' '}
          <InlineMath>y_2 - y_1</InlineMath>.
        </p>
      </Callout>

      {/* The Euclidean Plane */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Euclidean Plane Defined
      </h3>

      <p className="text-dark-200 mb-6">
        The set <InlineMath>\mathbb{'{R}'} \times \mathbb{'{R}'}</InlineMath> with
        this distance function is called the <strong>Euclidean plane</strong>.
        The Pythagorean theorem is now true <em>by definition</em>!
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Lines" />
          <p className="text-xs text-dark-300">
            A line is the set of points (x, y) satisfying{' '}
            <InlineMath>ax + by = c</InlineMath>.
          </p>
        </Card>
        <Card>
          <CardHeader title="Circles" />
          <p className="text-xs text-dark-300">
            A circle is the set of points at constant distance r from (a, b):{' '}
            <InlineMath>(x-a)^2 + (y-b)^2 = r^2</InlineMath>.
          </p>
        </Card>
      </CardGrid>

      <Callout type="success">
        <p>
          We can re-create Euclid's geometry in terms of numbers, with the added
          advantage that Euclid's unstated assumptions about{' '}
          <strong>existence of intersections</strong> are guaranteed. There are
          enough real numbers to solve all the equations that arise.
        </p>
      </Callout>

      {/* Basic Properties of Distance */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Basic Properties of Distance
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-4 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">1.</span>
            <span>
              The set of points <strong>equidistant</strong> from two distinct
              points is a line.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">2.</span>
            <span>
              Any line is the <strong>equidistant set</strong> of two points.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">3.</span>
            <span>
              Each point is determined by its <strong>distances from three
              points</strong> not in a line.
            </span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        For example, if <InlineMath>P = (-a, 0)</InlineMath> and{' '}
        <InlineMath>Q = (a, 0)</InlineMath>, then a point (x, y) is equidistant
        from P and Q if and only if:
      </p>

      <MathBlock>{`(x + a)^2 + y^2 = (x - a)^2 + y^2`}</MathBlock>

      <p className="text-dark-200 my-4">
        which simplifies to <InlineMath>x = 0</InlineMath>—the equation of the
        y-axis. So the y-axis is the equidistant set of P and Q.
      </p>

      {/* Isometries Preview */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Moving Figures: Isometries
      </h3>

      <p className="text-dark-200 mb-6">
        Another advantage of this definition of the Euclidean plane is that it
        admits a concept of "moving" one figure until it coincides with another,
        like in Pappus' proof about isosceles triangles.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Definition: Isometry
        </h4>
        <p className="text-dark-200">
          A function f on <InlineMath>\mathbb{'{R}'} \times \mathbb{'{R}'}</InlineMath>{' '}
          is an <strong>isometry</strong> (from the Greek for "same distance") if
        </p>
        <MathBlock>{`d(f(P_1), f(P_2)) = d(P_1, P_2)`}</MathBlock>
        <p className="text-dark-400 text-xs mt-2">for any two points P₁ and P₂.</p>
      </div>

      {/* Example: Reflection */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example: Reflection</h3>

      <p className="text-dark-200 mb-6">
        An example of an isometry is the function{' '}
        <InlineMath>\text{'{ref}'}_{'{OY}'}</InlineMath> that sends each point
        (x, y) to (−x, y). This is <strong>reflection in the y-axis</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm mb-4">
          To verify it preserves distances:
        </p>
        <MathBlock>{`d(\\text{ref}_{OY}(P_1), \\text{ref}_{OY}(P_2)) = \\sqrt{(-x_2 + x_1)^2 + (y_2 - y_1)^2}`}</MathBlock>
        <MathBlock>{`= \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} = d(P_1, P_2)`}</MathBlock>
      </div>

      {/* Proving Triangle Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Proving Triangle Properties
      </h3>

      <p className="text-dark-200 mb-6">
        Suppose triangle ABC has CA = CB. We can re-create Pappus' proof by
        placing the triangle with A and B on the x-axis, with O at their midpoint:
        A = (−a, 0) and B = (a, 0).
      </p>

      <p className="text-dark-200 mb-6">
        Because C is equidistant from A and B, it must be on the y-axis. If we
        then <strong>reflect</strong> triangle ABC in the y-axis, it maps onto
        itself. In particular, the angle at A maps onto the angle at B—hence these
        two angles are equal!
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              The <strong>Euclidean plane</strong> is{' '}
              <InlineMath>\mathbb{'{R}'} \times \mathbb{'{R}'}</InlineMath> with
              distance from the Pythagorean theorem.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Lines</strong> have equation ax + by = c;{' '}
              <strong>circles</strong> have equation{' '}
              <InlineMath>(x-a)^2 + (y-b)^2 = r^2</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>equidistant set</strong> of two points is a line; any
              line is the equidistant set of two points.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              An <strong>isometry</strong> is a distance-preserving function.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Reflection</strong> in a line is an isometry that can prove
              theorems about equal angles.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={23} questions={section23Questions} />
    </LessonLayout>
  );
}
