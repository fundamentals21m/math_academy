import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section37Questions } from '../../data/quizzes';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2 className="text-2xl font-semibold mb-4">Angle Measure</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The word <em>trigonometry</em> comes from the Greek for "triangle
        measurement." But Euclid never actually <em>measures</em> angles—he
        compares them but doesn't assign numbers. This suggests that angle
        measure is a deep concept, perhaps beyond traditional geometry.
      </p>

      {/* Why Angle Measure is Deep */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Mystery of Angle Measure
      </h3>

      <p className="text-dark-200 mb-6">
        Euclid has theorems about equal angles, sums of angles, and one angle
        being twice another—but he never represents angles by numbers, lengths,
        or areas. The Greeks had some inkling of the depth of this concept when
        they tried unsuccessfully to <strong>square the circle</strong>.
      </p>

      <Callout type="info">
        <p>
          Squaring the circle amounts to constructing the number{' '}
          <InlineMath>\pi</InlineMath>, which is the area of the unit circle,
          half its circumference, and the natural measure of a straight angle
          (two right angles). So constructing <InlineMath>\pi</InlineMath> is a
          fundamental question about measuring angles!
        </p>
      </Callout>

      {/* Defining Arc Length */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Measuring Angles via Arc Length
      </h3>

      <p className="text-dark-200 mb-6">
        To measure an angle <InlineMath>AOB</InlineMath>, we draw a unit circle
        centered at <InlineMath>O</InlineMath> and define the angle's measure as
        the <strong>length of the arc</strong> between the rays.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Arc Length Definition
        </h4>
        <p className="text-dark-200">
          The length of an arc from <InlineMath>P</InlineMath> to{' '}
          <InlineMath>Q</InlineMath> on the unit circle is defined as the{' '}
          <strong>least upper bound</strong> of the lengths of polygons{' '}
          <InlineMath>P_1 P_2 \ldots P_n</InlineMath> joining points on the arc
          in order.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This least upper bound exists by the <strong>completeness</strong> of
        the real numbers (Chapter 3). We can then define{' '}
        <InlineMath>\pi</InlineMath> as the length of a semicircle of radius 1.
      </p>

      {/* Approximating Pi */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Approximating <InlineMath>\pi</InlineMath>
      </h3>

      <CardGrid>
        <Card>
          <CardHeader title="Biblical Approximation" />
          <p className="text-xs text-dark-300">
            1 Kings 7:23 describes a "molten sea" 10 cubits across and 30 cubits
            around, implying <InlineMath>\pi = 3</InlineMath>. Too small!
          </p>
        </Card>
        <Card>
          <CardHeader title="Archimedes (250 B.C.)" />
          <p className="text-xs text-dark-300">
            Used 96-sided polygons to prove{' '}
            <InlineMath>3\frac{'{10}{71}'} {'<'} \pi {'<'} 3\frac{'{1}{7}'}</InlineMath>,
            giving <InlineMath>\pi \approx 3.14</InlineMath>.
          </p>
        </Card>
        <Card>
          <CardHeader title="Inner Polygons" />
          <p className="text-xs text-dark-300">
            A regular hexagon inscribed in a circle has perimeter 6, showing{' '}
            <InlineMath>\pi {'>'} 3</InlineMath>.
          </p>
        </Card>
        <Card>
          <CardHeader title="Outer Polygons" />
          <p className="text-xs text-dark-300">
            Circumscribed polygons give upper bounds. Inner and outer bounds can
            be made arbitrarily close.
          </p>
        </Card>
      </CardGrid>

      {/* Radians */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Radians vs. Degrees
      </h3>

      <p className="text-dark-200 mb-6">
        When angle measure equals arc length on the unit circle, we measure in{' '}
        <strong>radians</strong>. This is the natural choice for mathematics,
        though degrees (where a full circle = 360°) are traditional.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <MathBlock>
          {`\\text{Full circle} = 2\\pi \\text{ radians} = 360°`}
        </MathBlock>
        <MathBlock>{`\\text{Right angle} = \\frac{\\pi}{2} \\text{ radians} = 90°`}</MathBlock>
        <MathBlock>
          {`\\text{Straight angle} = \\pi \\text{ radians} = 180°`}
        </MathBlock>
      </div>

      {/* Additivity of Arc Length */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Addition of Angles
      </h3>

      <p className="text-dark-200 mb-6">
        When angles are added by joining them along a common ray, their arcs are
        joined at a common point. The key property is that arc length is{' '}
        <strong>additive</strong>:
      </p>

      <MathBlock>
        {`\\text{length}(AC) = \\text{length}(AB) + \\text{length}(BC)`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This follows from the definition as a least upper bound: any polygon
        inside the combined arc can be split at the joining point into polygons
        inside the two pieces.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Angle measure</strong> is a deep concept that Euclid
              avoided.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              We define angle measure as <strong>arc length</strong> on the unit
              circle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Arc length is defined via the <strong>least upper bound</strong>{' '}
              of inscribed polygon lengths.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <InlineMath>\pi</InlineMath> is defined as the length of a
              semicircle (half the circumference).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Radians</strong> are the natural unit for angle measure.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={37} questions={section37Questions} />
    </LessonLayout>
  );
}
