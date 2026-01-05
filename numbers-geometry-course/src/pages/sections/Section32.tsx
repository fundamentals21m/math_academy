import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section32Questions } from '../../data/quizzes';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2 className="text-2xl font-semibold mb-4">Rational Triangles</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        After the discovery of rational right-angled triangles, one might ask
        about <strong>rational triangles in general</strong>. Any three rational
        numbers can be sides of a triangle, but a "rational triangle" should be
        rational in more than just its sides.
      </p>

      {/* Definition */}
      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Rational Triangle
        </h4>
        <p className="text-dark-200">
          A <strong>rational triangle</strong> is one with{' '}
          <em>rational side lengths</em> and <em>rational area</em>.
        </p>
        <p className="text-dark-300 text-sm mt-3">
          Since Area = ½ base × height, a triangle with rational sides has
          rational area if and only if all its altitudes are rational.
        </p>
      </div>

      {/* Historical Context */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Brahmagupta's Discovery
      </h3>

      <p className="text-dark-200 mb-6">
        Questions about rational triangles rarely occur in Greek mathematics.
        The first thorough treatment was by the Indian mathematician{' '}
        <strong>Brahmagupta</strong> in his <em>Brahma-sphuta-siddhanta</em> of{' '}
        <strong>628 A.D.</strong>
      </p>

      {/* Parameterization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Parameterization of Rational Triangles
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Brahmagupta's Formula
        </h4>
        <p className="text-dark-200 mb-3">
          A triangle with rational sides <InlineMath>a, b, c</InlineMath> and
          rational area is of the form:
        </p>
        <MathBlock>{`a = \\frac{u^2 + v^2}{v}, \\quad b = \\frac{u^2 + w^2}{w}, \\quad c = \\frac{u^2 - v^2}{v} + \\frac{u^2 - w^2}{w}`}</MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          for some rational numbers <InlineMath>u, v, w</InlineMath>.
        </p>
      </div>

      {/* Key Insight */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Key Insight</h3>

      <Callout type="info">
        <p>
          <strong>Any rational triangle splits into two rational right-angled
          triangles.</strong> This follows from the parameterization of rational
          right-angled triangles.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        The altitude <InlineMath>h = 2u</InlineMath> splits side{' '}
        <InlineMath>c</InlineMath> into segments{' '}
        <InlineMath>c_1 = \frac{'{u^2 - v^2}{v}'}</InlineMath> and{' '}
        <InlineMath>c_2 = \frac{'{u^2 - w^2}{w}'}</InlineMath>.
      </p>

      {/* Proof Sketch */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Why It Works</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-300 text-sm mb-4">
          For any triangle with rational sides <InlineMath>a, b, c</InlineMath>,
          the altitude <InlineMath>h</InlineMath> splits{' '}
          <InlineMath>c</InlineMath> into segments{' '}
          <InlineMath>c_1</InlineMath> and <InlineMath>c_2</InlineMath>. By the
          Pythagorean theorem:
        </p>
        <MathBlock>{`a^2 = c_1^2 + h^2, \\quad b^2 = c_2^2 + h^2`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          Subtracting:{' '}
          <InlineMath>a^2 - b^2 = c_1^2 - c_2^2 = (c_1 - c_2)(c_1 + c_2)</InlineMath>
          . Since <InlineMath>c_1 + c_2 = c</InlineMath>, we get{' '}
          <InlineMath>c_1 - c_2 = (a^2 - b^2)/c</InlineMath>, which is rational.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Thus if the area (and hence the altitude <InlineMath>h</InlineMath>) is
        also rational, the triangle splits into two rational right-angled
        triangles with sides <InlineMath>c_1, h, a</InlineMath> and{' '}
        <InlineMath>c_2, h, b</InlineMath>.
      </p>

      {/* From Diophantus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Using Diophantus's Method
      </h3>

      <p className="text-dark-200 mb-6">
        From Diophantus, any rational right-angled triangle with altitude{' '}
        <InlineMath>2u</InlineMath> has sides:
      </p>

      <MathBlock>{`\\frac{u^2 - v^2}{v}, \\quad 2u, \\quad \\frac{u^2 + v^2}{v}`}</MathBlock>

      <p className="text-dark-200 my-6">
        Any <em>two</em> such triangles (with the same altitude) have the form:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="First Triangle" />
          <p className="text-xs text-dark-300">
            Sides:{' '}
            <InlineMath>
              \frac{'{u^2 - v^2}{v}'}, 2u, \frac{'{u^2 + v^2}{v}'}
            </InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Second Triangle" />
          <p className="text-xs text-dark-300">
            Sides:{' '}
            <InlineMath>
              \frac{'{u^2 - w^2}{w}'}, 2u, \frac{'{u^2 + w^2}{w}'}
            </InlineMath>
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        Putting them together (sharing the altitude) gives an arbitrary rational
        triangle.
      </p>

      {/* Heronian Triangles */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Heronian Triangles</h3>

      <p className="text-dark-200 mb-6">
        Triangles with rational (or integer) sides and rational (or integer)
        area are sometimes called <strong>Heronian</strong>, after the Greek
        mathematician Hero (first century A.D.).
      </p>

      <Callout type="success">
        <p>
          <strong>Hero's Formula:</strong> The area of a triangle with sides{' '}
          <InlineMath>a, b, c</InlineMath> and semiperimeter{' '}
          <InlineMath>s = (a + b + c)/2</InlineMath> is:
        </p>
        <MathBlock>{`\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}`}</MathBlock>
      </Callout>

      <p className="text-dark-200 my-6">
        Hero's formula can be derived from Brahmagupta's parameterization. It
        defies the Greek geometric tradition by multiplying four lengths—usually
        rejected as physically meaningless!
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example: (13, 14, 15)</h3>

      <p className="text-dark-200 mb-6">
        The triangle with sides 13, 14, 15 splits into two integer right-angled
        triangles:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-300 text-sm">
          <li>
            • <InlineMath>(5, 12, 13)</InlineMath> — a classic Pythagorean triple
          </li>
          <li>
            • <InlineMath>(9, 12, 15) = 3 \times (3, 4, 5)</InlineMath>
          </li>
        </ul>
        <p className="text-dark-300 text-sm mt-4">
          The altitude is <InlineMath>h = 12</InlineMath>, and side{' '}
          <InlineMath>c = 14</InlineMath> is split into{' '}
          <InlineMath>c_1 = 5</InlineMath> and{' '}
          <InlineMath>c_2 = 9</InlineMath>.
        </p>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              A <strong>rational triangle</strong> has rational sides and
              rational area.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Brahmagupta</strong> (628 A.D.) found a complete
              parameterization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Every rational triangle <strong>splits</strong> into two rational
              right triangles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Hero's formula</strong> gives area from side lengths.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={32} questions={section32Questions} />
    </LessonLayout>
  );
}
