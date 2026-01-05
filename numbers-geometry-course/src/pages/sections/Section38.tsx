import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section38Questions } from '../../data/quizzes';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2 className="text-2xl font-semibold mb-4">Circular Functions</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        We first meet <strong>sine</strong> and <strong>cosine</strong> as ratios
        of sides in right triangles. But this definition limits them to angles
        less than <InlineMath>\pi/2</InlineMath>. The circle gives us a way to
        extend them to all real numbers.
      </p>

      {/* Triangle Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Triangle Definition
      </h3>

      <p className="text-dark-200 mb-6">
        In a right triangle with angle <InlineMath>\theta</InlineMath>,
        adjacent side <InlineMath>a</InlineMath>, opposite side{' '}
        <InlineMath>b</InlineMath>, and hypotenuse <InlineMath>c</InlineMath>:
      </p>

      <MathBlock>
        {`\\cos\\theta = \\frac{a}{c}, \\qquad \\sin\\theta = \\frac{b}{c}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        These ratios depend only on <InlineMath>\theta</InlineMath>, not on the
        size of the triangle, because similar triangles have proportional sides.
      </p>

      {/* Circular Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Circular Definition
      </h3>

      <p className="text-dark-200 mb-6">
        To extend cos and sin beyond acute angles, we use the{' '}
        <strong>unit circle</strong>. A point <InlineMath>P</InlineMath> on the
        unit circle at angle <InlineMath>\theta</InlineMath> has coordinates:
      </p>

      <MathBlock>{`P = (\\cos\\theta, \\sin\\theta)`}</MathBlock>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Key Extension
        </h4>
        <p className="text-dark-200">
          This definition works for all <InlineMath>\theta</InlineMath> from{' '}
          <InlineMath>0</InlineMath> to <InlineMath>2\pi</InlineMath>, and we
          extend further by making cos and sin <strong>periodic</strong>:
        </p>
        <MathBlock>
          {`\\cos(\\theta + 2\\pi) = \\cos\\theta, \\qquad \\sin(\\theta + 2\\pi) = \\sin\\theta`}
        </MathBlock>
      </div>

      {/* The Fundamental Identity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Pythagorean Identity
      </h3>

      <p className="text-dark-200 mb-6">
        Since <InlineMath>(\cos\theta, \sin\theta)</InlineMath> lies on the
        unit circle <InlineMath>x^2 + y^2 = 1</InlineMath>, we have:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <MathBlock>{`\\cos^2\\theta + \\sin^2\\theta = 1`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This allows us to express either function in terms of the other:
      </p>

      <MathBlock>
        {`\\cos\\theta = \\sqrt{1 - \\sin^2\\theta}, \\qquad \\sin\\theta = \\sqrt{1 - \\cos^2\\theta}`}
      </MathBlock>

      {/* Applications */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Why Circular Functions?
      </h3>

      <CardGrid>
        <Card>
          <CardHeader title="Rotation & Vibration" />
          <p className="text-xs text-dark-300">
            If <InlineMath>P</InlineMath> moves around the circle at constant
            speed, its coordinates are cos and sin of time.
          </p>
        </Card>
        <Card>
          <CardHeader title="Simple Harmonic Motion" />
          <p className="text-xs text-dark-300">
            The shadow of a rotating point under vertical light traces out{' '}
            <InlineMath>x = \cos\theta</InlineMath>—the basis of musical tones.
          </p>
        </Card>
        <Card>
          <CardHeader title="Waves" />
          <p className="text-xs text-dark-300">
            The graphs of cos and sin are <em>sine waves</em>, fundamental to
            physics and engineering.
          </p>
        </Card>
        <Card>
          <CardHeader title="Addition Formulas" />
          <p className="text-xs text-dark-300">
            There are beautiful formulas for{' '}
            <InlineMath>\cos(\theta + \phi)</InlineMath> and{' '}
            <InlineMath>\sin(\theta + \phi)</InlineMath>.
          </p>
        </Card>
      </CardGrid>

      {/* Transcendental Functions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Transcendental Functions
      </h3>

      <p className="text-dark-200 mb-6">
        The circular functions are <strong>transcendental</strong>—they cannot
        be expressed as algebraic functions (roots of polynomials). The key
        observation: <InlineMath>y = \sin x</InlineMath> meets the line{' '}
        <InlineMath>y = 0</InlineMath> infinitely often (at{' '}
        <InlineMath>x = n\pi</InlineMath> for all integers{' '}
        <InlineMath>n</InlineMath>), but a polynomial can only have finitely
        many roots.
      </p>

      <Callout type="info">
        <p>
          Any <strong>periodic</strong> function (where{' '}
          <InlineMath>f(x + \alpha) = f(x)</InlineMath> for some{' '}
          <InlineMath>\alpha \neq 0</InlineMath>) is transcendental, because
          its graph meets horizontal lines infinitely often.
        </p>
      </Callout>

      {/* Important Limit */}
      <h3 className="text-xl font-semibold mt-10 mb-4">A Fundamental Limit</h3>

      <p className="text-dark-200 mb-6">
        One of the most important properties of the sine function is:
      </p>

      <MathBlock>{`\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1`}</MathBlock>

      <p className="text-dark-200 my-6">
        This can be seen geometrically: for small angles,{' '}
        <InlineMath>\sin\theta {'<'} \theta {'<'} \tan\theta</InlineMath>,
        which gives{' '}
        <InlineMath>
          \cos\theta {'<'} \frac{'{\\sin\\theta}{\\theta}'} {'<'} 1
        </InlineMath>
        . As <InlineMath>\theta \to 0</InlineMath>,{' '}
        <InlineMath>\cos\theta \to 1</InlineMath>, so the ratio is squeezed to
        1.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <InlineMath>\cos\theta</InlineMath> and{' '}
              <InlineMath>\sin\theta</InlineMath> are coordinates of a point on
              the unit circle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              They satisfy{' '}
              <InlineMath>\cos^2\theta + \sin^2\theta = 1</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              They are <strong>periodic</strong> with period{' '}
              <InlineMath>2\pi</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              They are <strong>transcendental</strong>, not algebraic.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <InlineMath>\lim_{'\\theta \\to 0'} \sin\theta/\theta = 1</InlineMath>{' '}
              is fundamental to calculus.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={38} questions={section38Questions} />
    </LessonLayout>
  );
}
