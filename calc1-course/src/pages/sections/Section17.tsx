import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-semibold mb-4">Work and Average Value</h2>

      <p className="text-dark-200 mb-6">
        Our applications of integration have so far been to geometric concepts: area and volume.
        Now we apply integration to <strong>work</strong>, a concept from physics, and introduce
        the <strong>average value</strong> of a function over an interval.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Concept of Work</h2>

      <p className="text-dark-200 mb-4">
        <strong>Work</strong> is a measure of the energy expended by a force in moving a particle
        from one point to another. We consider the simplest case: <em>linear motion</em> along a
        line (the <InlineMath>{'x'}</InlineMath>-axis) from <InlineMath>{'x = a'}</InlineMath> to{' '}
        <InlineMath>{'x = b'}</InlineMath>.
      </p>

      <p className="text-dark-200 mb-4">
        Let <InlineMath>{'f(x)'}</InlineMath> denote the force acting on a particle at position{' '}
        <InlineMath>{'x'}</InlineMath>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-1">
        <li>
          <InlineMath>{'f(x) > 0'}</InlineMath>: force acts in positive{' '}
          <InlineMath>{'x'}</InlineMath>-direction
        </li>
        <li>
          <InlineMath>{'f(x) < 0'}</InlineMath>: force acts in negative{' '}
          <InlineMath>{'x'}</InlineMath>-direction
        </li>
      </ul>

      <Callout type="definition">
        <p className="font-semibold mb-2">Work (Constant Force)</p>
        <p className="mb-2">
          When the force is constant, <InlineMath>{'f(x) = c'}</InlineMath> for all{' '}
          <InlineMath>{'x'}</InlineMath> between <InlineMath>{'a'}</InlineMath> and{' '}
          <InlineMath>{'b'}</InlineMath>, the work done is:
        </p>
        <MathBlock>{'W = c \\cdot (b - a) = \\text{force} \\times \\text{displacement}'}</MathBlock>
        <p className="mt-2">Work may be positive or negative.</p>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Units of Work</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Foot-pounds (ft-lb):</strong> force in pounds, distance in feet
          </li>
          <li>
            <strong>Ergs:</strong> force in dynes, distance in centimeters (1 erg = 1 dyne-cm)
          </li>
          <li>
            <strong>Joules (J):</strong> force in newtons, distance in meters (1 J = 1 N·m)
          </li>
        </ul>
        <p className="mt-2 text-sm">
          Note: 1 newton = 10⁵ dynes, 1 joule = 10⁷ ergs
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of Work</h2>

      <p className="text-dark-200 mb-4">
        For a non-constant force function <InlineMath>{'f'}</InlineMath>, we require work to
        satisfy certain physical properties:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Fundamental Properties of Work</p>
        <p className="mb-2">
          Let <InlineMath>{'W_a^b(f)'}</InlineMath> denote the work done by force{' '}
          <InlineMath>{'f'}</InlineMath> moving a particle from <InlineMath>{'a'}</InlineMath> to{' '}
          <InlineMath>{'b'}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>Additive:</strong> If <InlineMath>{'a < c < b'}</InlineMath>, then{' '}
            <InlineMath>{'W_a^b(f) = W_a^c(f) + W_c^b(f)'}</InlineMath>
          </li>
          <li>
            <strong>Monotone:</strong> If <InlineMath>{'f \\leq g'}</InlineMath> on{' '}
            <InlineMath>{'[a, b]'}</InlineMath>, then{' '}
            <InlineMath>{'W_a^b(f) \\leq W_a^b(g)'}</InlineMath> (greater force does greater work)
          </li>
          <li>
            <strong>Elementary formula:</strong> If <InlineMath>{'f(x) = c'}</InlineMath> is
            constant, then <InlineMath>{'W_a^b(f) = c \\cdot (b - a)'}</InlineMath>
          </li>
        </ol>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Work as an Integral</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.8</p>
        <p className="mb-2">
          Suppose work satisfies properties 1, 2, and 3. Then the work done by an integrable
          force function <InlineMath>{'f'}</InlineMath> in moving a particle from{' '}
          <InlineMath>{'a'}</InlineMath> to <InlineMath>{'b'}</InlineMath> equals the integral:
        </p>
        <MathBlock>{'W_a^b(f) = \\int_a^b f(x)\\,dx'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        The proof uses step functions to approximate <InlineMath>{'f'}</InlineMath> from above
        and below, just as we did for area and volume.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Examples of Work</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Work Against Gravity</p>
        <p className="mb-2">
          A 3-pound stone is thrown upward, rising to 15 feet. With the{' '}
          <InlineMath>{'x'}</InlineMath>-axis pointing up, gravity exerts a constant downward
          force <InlineMath>{'f(x) = -3'}</InlineMath> lb.
        </p>
        <p className="mt-2 mb-2">
          Work done by gravity moving from <InlineMath>{'x = 6'}</InlineMath> ft to{' '}
          <InlineMath>{'x = 15'}</InlineMath> ft:
        </p>
        <MathBlock>{'W = -3 \\cdot (15 - 6) = -27 \\text{ ft-lb}'}</MathBlock>
        <p className="mt-2 mb-2">
          When the stone falls from 15 ft to 6 ft:
        </p>
        <MathBlock>{'W = -3 \\cdot (6 - 15) = 27 \\text{ ft-lb}'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Hooke's Law (Stretching a Spring)</p>
        <p className="mb-2">
          <strong>Hooke's Law:</strong> The force needed to stretch a spring a distance{' '}
          <InlineMath>{'x'}</InlineMath> beyond its natural length is proportional to{' '}
          <InlineMath>{'x'}</InlineMath>:
        </p>
        <MathBlock>{'f(x) = cx'}</MathBlock>
        <p className="mt-2 mb-2">
          where <InlineMath>{'c > 0'}</InlineMath> is the <strong>spring constant</strong>.
        </p>
        <p className="mt-3 mb-2">
          Work required to stretch the spring a distance <InlineMath>{'a'}</InlineMath>:
        </p>
        <MathBlock>{'W = \\int_0^a cx\\,dx = c \\cdot \\frac{x^2}{2}\\Big|_0^a = \\frac{ca^2}{2}'}</MathBlock>
        <p className="mt-2">
          The work is proportional to the <em>square</em> of the displacement.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Average Value of a Function</h2>

      <p className="text-dark-200 mb-4">
        The <strong>arithmetic mean</strong> of <InlineMath>{'n'}</InlineMath> numbers{' '}
        <InlineMath>{'a_1, a_2, \\ldots, a_n'}</InlineMath> is:
      </p>

      <MathBlock>{'\\bar{a} = \\frac{1}{n}\\sum_{k=1}^{n} a_k'}</MathBlock>

      <p className="text-dark-200 mb-4">
        We extend this concept to compute an average of <em>all</em> values of{' '}
        <InlineMath>{'f(x)'}</InlineMath> over an interval:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Average Value of a Function</p>
        <p className="mb-2">
          If <InlineMath>{'f'}</InlineMath> is integrable on <InlineMath>{'[a, b]'}</InlineMath>,
          the <strong>average value</strong> of <InlineMath>{'f'}</InlineMath> on{' '}
          <InlineMath>{'[a, b]'}</InlineMath> is:
        </p>
        <MathBlock>{'A(f) = \\frac{1}{b - a}\\int_a^b f(x)\\,dx'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Geometric Interpretation</h3>

      <p className="text-dark-200 mb-4">
        When <InlineMath>{'f \\geq 0'}</InlineMath>, the formula can be written as:
      </p>

      <MathBlock>{'(b - a) \\cdot A(f) = \\int_a^b f(x)\\,dx'}</MathBlock>

      <p className="text-dark-200 mb-6">
        This says that a rectangle with base <InlineMath>{'[a, b]'}</InlineMath> and height{' '}
        <InlineMath>{'A(f)'}</InlineMath> has the same area as the ordinate set of{' '}
        <InlineMath>{'f'}</InlineMath>. The average value is the height of this "equal-area rectangle."
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Average of <InlineMath>{'x^2'}</InlineMath></p>
        <p className="mb-2">
          Find the average value of <InlineMath>{'f(x) = x^2'}</InlineMath> on{' '}
          <InlineMath>{'[0, 3]'}</InlineMath>:
        </p>
        <MathBlock>{'A(f) = \\frac{1}{3 - 0}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot \\frac{x^3}{3}\\Big|_0^3 = \\frac{1}{3} \\cdot 9 = 3'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Average of <InlineMath>{'\\sin x'}</InlineMath></p>
        <p className="mb-2">
          Find the average value of <InlineMath>{'f(x) = \\sin x'}</InlineMath> on{' '}
          <InlineMath>{'[0, \\pi]'}</InlineMath>:
        </p>
        <MathBlock>{'A(f) = \\frac{1}{\\pi}\\int_0^{\\pi} \\sin x\\,dx = \\frac{1}{\\pi}[-\\cos x]_0^{\\pi} = \\frac{1}{\\pi}(1 - (-1)) = \\frac{2}{\\pi}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Weighted Averages</h2>

      <p className="text-dark-200 mb-4">
        Sometimes different values should carry different "importance." With weights{' '}
        <InlineMath>{'w_1, w_2, \\ldots, w_n \\geq 0'}</InlineMath> (not all zero), the{' '}
        <strong>weighted arithmetic mean</strong> is:
      </p>

      <MathBlock>{'\\bar{a} = \\frac{\\sum_{k=1}^{n} w_k a_k}{\\sum_{k=1}^{n} w_k}'}</MathBlock>

      <Callout type="definition">
        <p className="font-semibold mb-2">Weighted Average of a Function</p>
        <p className="mb-2">
          With a nonnegative weight function <InlineMath>{'w'}</InlineMath> where{' '}
          <InlineMath>{'\\int_a^b w(x)\\,dx \\neq 0'}</InlineMath>:
        </p>
        <MathBlock>{'A(f) = \\frac{\\int_a^b w(x)f(x)\\,dx}{\\int_a^b w(x)\\,dx}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Applications: Center of Mass</h2>

      <p className="text-dark-200 mb-4">
        Consider a rod of length <InlineMath>{'a'}</InlineMath> along the positive{' '}
        <InlineMath>{'x'}</InlineMath>-axis with one end at the origin. If{' '}
        <InlineMath>{'\\rho(x)'}</InlineMath> is the <strong>mass density</strong> (mass per unit length):
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Moments and Center of Mass</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Total mass:</strong>{' '}
            <InlineMath>{'M = \\int_0^a \\rho(x)\\,dx'}</InlineMath>
          </li>
          <li>
            <strong>First moment about origin:</strong>{' '}
            <InlineMath>{'\\int_0^a x\\rho(x)\\,dx'}</InlineMath>
          </li>
          <li>
            <strong>Center of mass:</strong>
            <MathBlock>{'\\bar{x} = \\frac{\\int_0^a x\\rho(x)\\,dx}{\\int_0^a \\rho(x)\\,dx}'}</MathBlock>
          </li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-6">
        The center of mass is the weighted average of position, with mass density as the weight
        function.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Moment of Inertia and Radius of Gyration</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Moment of inertia (second moment):</strong>{' '}
            <InlineMath>{'I = \\int_0^a x^2\\rho(x)\\,dx'}</InlineMath>
          </li>
          <li>
            <strong>Radius of gyration:</strong>
            <MathBlock>{'r^2 = \\frac{\\int_0^a x^2\\rho(x)\\,dx}{\\int_0^a \\rho(x)\\,dx}'}</MathBlock>
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Work formula:</strong>{' '}
          <InlineMath>{'W = \\int_a^b f(x)\\,dx'}</InlineMath> where{' '}
          <InlineMath>{'f(x)'}</InlineMath> is force
        </li>
        <li>
          <strong>Hooke's Law:</strong> <InlineMath>{'f(x) = cx'}</InlineMath>, work ={' '}
          <InlineMath>{'ca^2/2'}</InlineMath>
        </li>
        <li>
          <strong>Average value:</strong>{' '}
          <InlineMath>{'A(f) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx'}</InlineMath>
        </li>
        <li>
          <strong>Weighted average:</strong> Uses weight function{' '}
          <InlineMath>{'w(x)'}</InlineMath> in numerator and denominator
        </li>
        <li>
          <strong>Center of mass:</strong> Weighted average of position with density as weight
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        These applications demonstrate how the integral captures the idea of "summing infinitely
        many infinitesimal contributions"—whether those contributions are force over distance (work),
        function values over an interval (average), or position weighted by mass (center of mass).
      </p>
    </LessonLayout>
  );
}
