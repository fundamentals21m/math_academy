import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section73Questions } from '../../data/quizzes';

export default function Section73() {
  return (
    <LessonLayout sectionId={73}>
      <h2 className="text-2xl font-semibold mb-4">
        The Area Bounded by a Curve
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Just as we define the length of a curve as the least upper bound of
        polygon lengths, we can define the area under a curve as the least
        upper bound of polygon areas. This concept will lead us to the
        logarithm and exponential functions.
      </p>

      {/* Definition of Area */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Defining Area Under a Curve
      </h3>

      <p className="text-dark-200 mb-6">
        Consider the curve <InlineMath>y = f(x)</InlineMath> and the region
        bounded by the curve, the x-axis, and the vertical lines{' '}
        <InlineMath>x = a</InlineMath> and <InlineMath>x = b</InlineMath>.
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Definition of Area
        </h4>
        <p className="text-dark-200">
          The <strong>area</strong> of the region is the{' '}
          <em>least upper bound</em> of the areas of all polygons{' '}
          <InlineMath>\Pi</InlineMath> contained in it.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This definition exists whenever there is an upper bound to the polygon
        areas—for example, when <InlineMath>f(x)</InlineMath> is bounded on the
        interval from <InlineMath>a</InlineMath> to <InlineMath>b</InlineMath>.
      </p>

      <Callout type="info">
        <p>
          Students of calculus will recognize this as essentially the{' '}
          <strong>definite integral</strong> of <InlineMath>f(x)</InlineMath>{' '}
          from <InlineMath>a</InlineMath> to <InlineMath>b</InlineMath>. But we
          shall derive basic properties of area without calculus!
        </p>
      </Callout>

      {/* Magnification Property */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Magnification Property
      </h3>

      <p className="text-dark-200 mb-6">
        A fundamental property inherited from polygon areas:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Scaling of Area
        </h4>
        <p className="text-dark-200">
          If a region is magnified by a factor <InlineMath>M</InlineMath> in
          the x-direction and a factor <InlineMath>N</InlineMath> in the
          y-direction, then its area is magnified by a factor{' '}
          <InlineMath>MN</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Special case:</strong> Magnification by <InlineMath>M</InlineMath>{' '}
        in all directions magnifies area by <InlineMath>M^2</InlineMath>. This
        is why the area of a circle of radius <InlineMath>R</InlineMath> is
        proportional to <InlineMath>R^2</InlineMath>.
      </p>

      {/* Historical Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Historical Examples
      </h3>

      <h4 className="text-lg font-medium mt-6 mb-3">
        The Lune of Hippocrates (430 BC)
      </h4>

      <p className="text-dark-200 mb-6">
        <strong>Hippocrates of Chios</strong> made the first determination of
        a curved area. He found that a certain <em>lune</em> (crescent-shaped
        region between two circular arcs) has the same area as a triangle.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200">
          This was groundbreaking: it showed curved areas are within the grasp
          of mathematics! However, the result doesn't tell us the area of the
          circle itself—the circular areas cancel out.
        </p>
      </div>

      <h4 className="text-lg font-medium mt-6 mb-3">
        Archimedes and the Parabola (250 BC)
      </h4>

      <p className="text-dark-200 mb-6">
        <strong>Archimedes</strong> found the area under the parabola{' '}
        <InlineMath>y = x^2</InlineMath> from <InlineMath>x = 0</InlineMath> to{' '}
        <InlineMath>x = 1</InlineMath> by approximating with step polygons.
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Area Under the Parabola
        </h4>
        <p className="text-dark-200 mb-4">
          The area of a step polygon with <InlineMath>n</InlineMath> steps is:
        </p>
        <MathBlock>
          {`\\frac{1^2 + 2^2 + 3^2 + \\cdots + (n-1)^2}{n^3}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          Using the formula{' '}
          <InlineMath>1^2 + 2^2 + \cdots + k^2 = \frac{'{k(k+1)(2k+1)}'}{'{6}'}</InlineMath>,
          this approaches <InlineMath>\frac{'{1}'}{'{3}'}</InlineMath> as{' '}
          <InlineMath>n \to \infty</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The parabola is special: its area function is <strong>algebraic</strong>.
        Most curves, including the circle and hyperbola, have transcendental
        area functions.
      </p>

      {/* Why Area is Better Than Arc Length */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Area vs. Arc Length
      </h3>

      <p className="text-dark-200 mb-6">
        For most curves, the area function is more manageable than arc length.
        This is why we will use area (not arc length) to define the
        transcendental functions in the remainder of this chapter.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Special case: the circle</strong>
        </p>
        <p className="text-dark-200">
          For the unit circle, arc length and area are closely related: a
          sector with angle <InlineMath>\theta</InlineMath> has area{' '}
          <InlineMath>\theta/2</InlineMath>. So the parameter{' '}
          <InlineMath>\theta</InlineMath> in{' '}
          <InlineMath>x = \cos\theta</InlineMath>,{' '}
          <InlineMath>y = \sin\theta</InlineMath> is twice the sector area.
        </p>
      </div>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Area under a curve = least upper bound of polygon areas
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Magnification by <InlineMath>M \times N</InlineMath> scales area
              by <InlineMath>MN</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Hippocrates found the first curved area (lune); Archimedes found
              the area under a parabola
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The parabola has an algebraic area function ({' '}
              <InlineMath>x^3/3</InlineMath>); most curves are transcendental
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={73} questions={section73Questions} />
    </LessonLayout>
  );
}
