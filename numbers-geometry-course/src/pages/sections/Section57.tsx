import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section57Questions } from '../../data/quizzes';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2 className="text-2xl font-semibold mb-4">
        Argument and the Square Root of −1
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The geometric picture of complex numbers becomes complete when we
        introduce the <strong>argument</strong>—the angle that a complex number
        makes with the positive real axis. This reveals the deep connection
        between multiplication and rotation.
      </p>

      {/* Polar Form */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Polar Form</h3>

      <p className="text-dark-200 mb-6">
        A complex number <InlineMath>z = a + bi</InlineMath> can be written in{' '}
        <strong>polar form</strong> using its absolute value{' '}
        <InlineMath>r = |z|</InlineMath> and its <strong>argument</strong>{' '}
        <InlineMath>\theta</InlineMath>:
      </p>

      <MathBlock>
        {`z = r(\\cos\\theta + i\\sin\\theta)`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Here <InlineMath>r = \sqrt{'{a^2 + b^2}'}</InlineMath> is the distance
        from the origin, and <InlineMath>\theta</InlineMath> is the angle
        measured counterclockwise from the positive real axis.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          The conversion between forms:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>a = r\cos\theta</InlineMath>
          </li>
          <li>
            <InlineMath>b = r\sin\theta</InlineMath>
          </li>
          <li>
            <InlineMath>r = \sqrt{'{a^2 + b^2}'}</InlineMath>
          </li>
          <li>
            <InlineMath>\tan\theta = b/a</InlineMath> (when <InlineMath>a \neq 0</InlineMath>)
          </li>
        </ul>
      </div>

      {/* Multiplication in Polar Form */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Multiplication in Polar Form
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Key Discovery
        </h4>
        <p className="text-dark-200 mb-4">
          When we multiply two complex numbers in polar form:
        </p>
        <MathBlock>
          {`r_1(\\cos\\theta_1 + i\\sin\\theta_1) \\cdot r_2(\\cos\\theta_2 + i\\sin\\theta_2) = r_1r_2(\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2))`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          Absolute values <strong>multiply</strong>, arguments <strong>add</strong>!
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This remarkable fact was discovered by Viète around 1590. It follows
        from the addition formulas for sine and cosine.
      </p>

      {/* i as Rotation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Meaning of <InlineMath>i</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        In polar form, <InlineMath>i</InlineMath> has absolute value 1 and
        argument <InlineMath>\pi/2</InlineMath>:
      </p>

      <MathBlock>
        {`i = \\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Since multiplication by <InlineMath>i</InlineMath> adds{' '}
        <InlineMath>\pi/2</InlineMath> to the argument:
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Geometric Interpretation
        </h4>
        <p className="text-dark-200">
          <strong>Multiplication by <InlineMath>i</InlineMath> is rotation by
          90° counterclockwise.</strong>
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This makes <InlineMath>i^2 = -1</InlineMath> completely natural: two
        90° rotations give a 180° rotation, which is multiplication by{' '}
        <InlineMath>-1</InlineMath>!
      </p>

      {/* Powers of i */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Powers of i</h3>

      <p className="text-dark-200 mb-6">
        The powers of <InlineMath>i</InlineMath> cycle with period 4:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="i⁰ = 1" />
          <p className="text-xs text-dark-300">0° rotation</p>
        </Card>
        <Card>
          <CardHeader title="i¹ = i" />
          <p className="text-xs text-dark-300">90° rotation</p>
        </Card>
        <Card>
          <CardHeader title="i² = −1" />
          <p className="text-xs text-dark-300">180° rotation</p>
        </Card>
        <Card>
          <CardHeader title="i³ = −i" />
          <p className="text-xs text-dark-300">270° rotation</p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        Then <InlineMath>i^4 = 1</InlineMath>, and the cycle repeats. To find{' '}
        <InlineMath>i^n</InlineMath>, just reduce <InlineMath>n</InlineMath> mod 4.
      </p>

      {/* Roots of Unity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Roots of Unity</h3>

      <p className="text-dark-200 mb-6">
        From the additive property of argument, we can find nth roots of 1:
      </p>

      <MathBlock>
        {`\\left(\\cos\\frac{2\\pi}{n} + i\\sin\\frac{2\\pi}{n}\\right)^n = \\cos 2\\pi + i\\sin 2\\pi = 1`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        So <InlineMath>\cos(2\pi/n) + i\sin(2\pi/n)</InlineMath> is an{' '}
        <strong>nth root of unity</strong>. The nth roots of 1 are evenly
        spaced around the unit circle.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Examples:</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            Square roots of 1: <InlineMath>1, -1</InlineMath>
          </li>
          <li>
            Cube roots of 1: <InlineMath>1, \omega, \omega^2</InlineMath> where{' '}
            <InlineMath>\omega = -\frac{'{1}'}{'{2}'} + \frac{'\sqrt{3}'}{'{2}'}i</InlineMath>
          </li>
          <li>
            Fourth roots of 1: <InlineMath>1, i, -1, -i</InlineMath>
          </li>
        </ul>
      </div>

      {/* Fundamental Theorem Preview */}
      <Callout type="info">
        <p>
          The <strong>Fundamental Theorem of Algebra</strong> states that every
          polynomial equation <InlineMath>p(x) = 0</InlineMath> with complex
          coefficients has a solution in <InlineMath>\mathbb{'{C}'}</InlineMath>.
          Complex numbers are <em>algebraically closed</em>—no further extension
          is needed!
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Polar form: <InlineMath>z = r(\cos\theta + i\sin\theta)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Multiplication: multiply absolute values, add arguments
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>i = \cos(\pi/2) + i\sin(\pi/2)</InlineMath> represents
              90° rotation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Powers of <InlineMath>i</InlineMath> cycle with period 4
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={57} questions={section57Questions} />
    </LessonLayout>
  );
}
