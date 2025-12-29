import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-semibold mb-4">Trigonometric Functions</h2>

      <p className="text-dark-200 mb-6">
        The trigonometric functions are important in calculus not because of their relation to
        triangles, but because of their <strong>periodicity</strong>. Many problems in physics and
        engineering deal with periodic phenomena (vibrations, planetary motion, waves), and sine
        and cosine form the mathematical foundation for analyzing such problems.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Fundamental Properties of Sine and Cosine</h2>

      <p className="text-dark-200 mb-4">
        Rather than starting from geometric definitions, we take an axiomatic approach: we list
        four fundamental properties and derive everything else from them.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Fundamental Properties of Sine and Cosine</p>
        <ol className="list-decimal list-inside space-y-3 mt-3">
          <li>
            <strong>Domain:</strong> The sine and cosine are defined everywhere on the real line.
          </li>
          <li>
            <strong>Special values:</strong>{' '}
            <MathInline>{'\\cos 0 = \\sin \\frac{\\pi}{2} = 1'}</MathInline>,{' '}
            <MathInline>{'\\cos \\pi = -1'}</MathInline>.
          </li>
          <li>
            <strong>Cosine of a difference:</strong> For all <MathInline>{'x'}</MathInline> and{' '}
            <MathInline>{'y'}</MathInline>:
            <MathBlock>{'\\cos(y - x) = \\cos y \\cos x + \\sin y \\sin x'}</MathBlock>
          </li>
          <li>
            <strong>Fundamental inequalities:</strong> For{' '}
            <MathInline>{'0 < x < \\frac{\\pi}{2}'}</MathInline>:
            <MathBlock>{'0 < \\cos x < \\frac{\\sin x}{x} < \\frac{1}{\\cos x}'}</MathBlock>
          </li>
        </ol>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties Derived from the Axioms</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.3</p>
        <p className="mb-3">
          If two functions sin and cos satisfy properties 1 through 4, then they also satisfy:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Pythagorean identity:</strong>{' '}
            <MathInline>{'\\sin^2 x + \\cos^2 x = 1'}</MathInline> for all{' '}
            <MathInline>{'x'}</MathInline>
          </li>
          <li>
            <strong>Special values:</strong>{' '}
            <MathInline>{'\\sin 0 = \\cos \\frac{\\pi}{2} = \\sin \\pi = 0'}</MathInline>
          </li>
          <li>
            <strong>Even/Odd:</strong> Cosine is even, sine is odd:{' '}
            <MathInline>{'\\cos(-x) = \\cos x'}</MathInline>,{' '}
            <MathInline>{'\\sin(-x) = -\\sin x'}</MathInline>
          </li>
          <li>
            <strong>Co-relations:</strong>{' '}
            <MathInline>{'\\sin(\\frac{\\pi}{2} + x) = \\cos x'}</MathInline>,{' '}
            <MathInline>{'\\cos(\\frac{\\pi}{2} + x) = -\\sin x'}</MathInline>
          </li>
          <li>
            <strong>Periodicity:</strong>{' '}
            <MathInline>{'\\sin(x + 2\\pi) = \\sin x'}</MathInline>,{' '}
            <MathInline>{'\\cos(x + 2\\pi) = \\cos x'}</MathInline>
          </li>
          <li>
            <strong>Monotonicity:</strong> On <MathInline>{'[0, \\frac{\\pi}{2}]'}</MathInline>,
            sine is strictly increasing and cosine is strictly decreasing
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Addition Formulas</h3>

      <Callout type="info">
        <p className="font-semibold mb-2">Addition Formulas</p>
        <p className="mb-2">For all <MathInline>{'x'}</MathInline> and <MathInline>{'y'}</MathInline>:</p>
        <MathBlock>{'\\cos(x + y) = \\cos x \\cos y - \\sin x \\sin y'}</MathBlock>
        <MathBlock>{'\\sin(x + y) = \\sin x \\cos y + \\cos x \\sin y'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Difference Formulas</p>
        <p className="mb-2">For all <MathInline>{'a'}</MathInline> and <MathInline>{'b'}</MathInline>:</p>
        <MathBlock>{'\\sin a - \\sin b = 2 \\sin\\frac{a-b}{2} \\cos\\frac{a+b}{2}'}</MathBlock>
        <MathBlock>{'\\cos a - \\cos b = -2 \\sin\\frac{a-b}{2} \\sin\\frac{a+b}{2}'}</MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Double-Angle Formulas</p>
        <MathBlock>{'\\sin 2x = 2 \\sin x \\cos x'}</MathBlock>
        <MathBlock>{'\\cos 2x = \\cos^2 x - \\sin^2 x = 1 - 2\\sin^2 x'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Integration Formulas</h2>

      <p className="text-dark-200 mb-4">
        Since sine and cosine are piecewise monotonic on every interval (by the monotonicity
        properties and periodicity), they are integrable on every finite interval.
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.5 (Integration of Sine and Cosine)</p>
        <p className="mb-2">
          If sin and cos satisfy the fundamental properties 1 through 4, then for every real{' '}
          <MathInline>{'a'}</MathInline>:
        </p>
        <MathBlock>{'\\int_0^a \\cos x\\,dx = \\sin a'}</MathBlock>
        <MathBlock>{'\\int_0^a \\sin x\\,dx = 1 - \\cos a'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">General Integration Formulas</p>
        <p className="mb-2">Using the additive property of integrals:</p>
        <MathBlock>{'\\int_a^b \\cos x\\,dx = \\sin x \\Big|_a^b = \\sin b - \\sin a'}</MathBlock>
        <MathBlock>{'\\int_a^b \\sin x\\,dx = -\\cos x \\Big|_a^b = -(\\cos b - \\cos a)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Scaling the Argument</p>
        <p className="mb-2">
          Using the expansion property with <MathInline>{'c \\neq 0'}</MathInline>:
        </p>
        <MathBlock>{'\\int_a^b \\cos(cx)\\,dx = \\frac{1}{c}(\\sin cb - \\sin ca)'}</MathBlock>
        <MathBlock>{'\\int_a^b \\sin(cx)\\,dx = -\\frac{1}{c}(\\cos cb - \\cos ca)'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Integrating Squared Functions</p>
        <p className="mb-2">
          Using <MathInline>{'\\sin^2 x = \\frac{1}{2}(1 - \\cos 2x)'}</MathInline>:
        </p>
        <MathBlock>{'\\int_0^a \\sin^2 x\\,dx = \\frac{a}{2} - \\frac{1}{4}\\sin 2a'}</MathBlock>
        <MathBlock>{'\\int_0^a \\cos^2 x\\,dx = \\frac{a}{2} + \\frac{1}{4}\\sin 2a'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Geometric Description</h2>

      <p className="text-dark-200 mb-4">
        Geometrically, we define the sine and cosine using the <strong>unit circle</strong>. Consider
        a circle of radius 1 centered at the origin, with point <MathInline>{'A = (1, 0)'}</MathInline>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Radian Measure</p>
        <p className="mb-2">
          For an angle <MathInline>{'\\angle AOP'}</MathInline>, where{' '}
          <MathInline>{'P'}</MathInline> is a point on the unit circle, the measure in{' '}
          <strong>radians</strong> is defined as:
        </p>
        <MathBlock>{'x = \\frac{2 \\cdot (\\text{area of sector } AOP)}{r^2}'}</MathBlock>
        <p className="mt-2">
          For a unit circle (<MathInline>{'r = 1'}</MathInline>), this equals twice the area of the
          sector. Later, we will see this equals the arc length from{' '}
          <MathInline>{'A'}</MathInline> to <MathInline>{'P'}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition">
        <p className="font-semibold mb-2">Geometric Definition of Sine and Cosine</p>
        <p className="mb-2">
          For <MathInline>{'0 < x < 2\\pi'}</MathInline>, let <MathInline>{'P = (a, b)'}</MathInline>{' '}
          be the point on the unit circle such that the sector <MathInline>{'AOP'}</MathInline> has
          area <MathInline>{'x/2'}</MathInline>. Then:
        </p>
        <MathBlock>{'\\cos x = a \\quad \\text{(the abscissa of } P\\text{)}'}</MathBlock>
        <MathBlock>{'\\sin x = b \\quad \\text{(the ordinate of } P\\text{)}'}</MathBlock>
        <p className="mt-2">
          We extend to all real <MathInline>{'x'}</MathInline> using{' '}
          <MathInline>{'\\sin 0 = 0'}</MathInline>, <MathInline>{'\\cos 0 = 1'}</MathInline>, and periodicity.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        From this geometric definition:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          When <MathInline>{'x = \\pi'}</MathInline>, <MathInline>{'P = (-1, 0)'}</MathInline>, so{' '}
          <MathInline>{'\\cos \\pi = -1'}</MathInline> and <MathInline>{'\\sin \\pi = 0'}</MathInline>
        </li>
        <li>
          When <MathInline>{'x = \\frac{\\pi}{2}'}</MathInline>, <MathInline>{'P = (0, 1)'}</MathInline>, so{' '}
          <MathInline>{'\\cos \\frac{\\pi}{2} = 0'}</MathInline> and{' '}
          <MathInline>{'\\sin \\frac{\\pi}{2} = 1'}</MathInline>
        </li>
        <li>
          The Pythagorean identity follows from <MathInline>{'a^2 + b^2 = 1'}</MathInline> (on the unit circle)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Other Trigonometric Functions</h2>

      <p className="text-dark-200 mb-4">
        The remaining four trigonometric functions are defined in terms of sine and cosine:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Derived Trigonometric Functions</p>
        <MathBlock>{'\\tan x = \\frac{\\sin x}{\\cos x}, \\quad \\cot x = \\frac{\\cos x}{\\sin x}'}</MathBlock>
        <MathBlock>{'\\sec x = \\frac{1}{\\cos x}, \\quad \\csc x = \\frac{1}{\\sin x}'}</MathBlock>
        <p className="mt-2">
          These are defined for all <MathInline>{'x'}</MathInline> except where the denominators are zero.
          All satisfy <MathInline>{'f(x + 2\\pi) = f(x)'}</MathInline>; tangent and cotangent also
          have the smaller period <MathInline>{'\\pi'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Special Values</h2>

      <Callout type="info">
        <p className="font-semibold mb-2">Common Values to Know</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <MathInline>{'\\sin \\frac{\\pi}{6} = \\frac{1}{2}'}</MathInline>,{' '}
            <MathInline>{'\\cos \\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}'}</MathInline>
          </li>
          <li>
            <MathInline>{'\\sin \\frac{\\pi}{4} = \\cos \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}'}</MathInline>
          </li>
          <li>
            <MathInline>{'\\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}'}</MathInline>,{' '}
            <MathInline>{'\\cos \\frac{\\pi}{3} = \\frac{1}{2}'}</MathInline>
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Axiomatic approach:</strong> Sine and cosine can be characterized by four fundamental properties
        </li>
        <li>
          <strong>Pythagorean identity:</strong> <MathInline>{'\\sin^2 x + \\cos^2 x = 1'}</MathInline>
        </li>
        <li>
          <strong>Periodicity:</strong> Both have period <MathInline>{'2\\pi'}</MathInline>
        </li>
        <li>
          <strong>Integration:</strong> <MathInline>{'\\int \\cos x\\,dx = \\sin x'}</MathInline>,{' '}
          <MathInline>{'\\int \\sin x\\,dx = -\\cos x'}</MathInline>
        </li>
        <li>
          <strong>Geometric meaning:</strong> Coordinates of a point on the unit circle
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        The trigonometric functions, with their periodicity and rich algebraic structure, are
        essential tools throughout calculus. The integration formulas we've derived will be used
        extensively in applications involving periodic phenomena.
      </p>
    </LessonLayout>
  );
}
