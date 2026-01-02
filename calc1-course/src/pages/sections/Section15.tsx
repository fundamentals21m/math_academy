import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-semibold mb-4">Polar Coordinates</h2>

      <p className="text-dark-200 mb-6">
        Up to now we have located points in the plane with rectangular (Cartesian) coordinates.
        We can also locate them with <strong>polar coordinates</strong>, which are often more
        natural for curves with rotational symmetry or for problems involving angles.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Definition of Polar Coordinates</h2>

      <p className="text-dark-200 mb-4">
        Let <InlineMath>{'P'}</InlineMath> be a point distinct from the origin. The line segment
        joining <InlineMath>{'P'}</InlineMath> to the origin has some length{' '}
        <InlineMath>{'r > 0'}</InlineMath> and makes an angle of <InlineMath>{'\\theta'}</InlineMath>{' '}
        radians with the positive <InlineMath>{'x'}</InlineMath>-axis.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Polar Coordinates</p>
        <p className="mb-2">
          The two numbers <InlineMath>{'r'}</InlineMath> and <InlineMath>{'\\theta'}</InlineMath> are
          called <strong>polar coordinates</strong> of <InlineMath>{'P'}</InlineMath>. They are
          related to the rectangular coordinates <InlineMath>{'(x, y)'}</InlineMath> by:
        </p>
        <MathBlock>{'x = r\\cos\\theta, \\quad y = r\\sin\\theta'}</MathBlock>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <InlineMath>{'r'}</InlineMath> is the <strong>radial distance</strong> of{' '}
            <InlineMath>{'P'}</InlineMath> from the origin
          </li>
          <li>
            <InlineMath>{'\\theta'}</InlineMath> is a <strong>polar angle</strong>
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Non-Uniqueness of Polar Coordinates</h3>

      <p className="text-dark-200 mb-4">
        Unlike rectangular coordinates, polar coordinates are <em>not unique</em>. If{' '}
        <InlineMath>{'\\theta'}</InlineMath> is a polar angle for <InlineMath>{'P'}</InlineMath>,
        then so is <InlineMath>{'\\theta + 2n\\pi'}</InlineMath> for any integer{' '}
        <InlineMath>{'n'}</InlineMath>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Properties</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            The radial distance is unique: <InlineMath>{'r = \\sqrt{x^2 + y^2}'}</InlineMath>
          </li>
          <li>
            The polar angle is determined only up to multiples of{' '}
            <InlineMath>{'2\\pi'}</InlineMath>
          </li>
          <li>
            At the origin, <InlineMath>{'r = 0'}</InlineMath> and <em>any</em> value of{' '}
            <InlineMath>{'\\theta'}</InlineMath> may be used
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Graphs in Polar Coordinates</h2>

      <p className="text-dark-200 mb-4">
        Let <InlineMath>{'f'}</InlineMath> be a nonnegative function defined on an interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath>. The set of all points with polar coordinates{' '}
        <InlineMath>{'(r, \\theta)'}</InlineMath> satisfying <InlineMath>{'r = f(\\theta)'}</InlineMath>{' '}
        is called the <strong>graph of <InlineMath>{'f'}</InlineMath> in polar coordinates</strong>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Circle</p>
        <p className="mb-2">
          The circle with Cartesian equation <InlineMath>{'x^2 + y^2 = 4'}</InlineMath> has the
          simpler polar equation <InlineMath>{'r = 2'}</InlineMath>.
        </p>
        <p>
          In general, a circle of radius <InlineMath>{'c'}</InlineMath> centered at the origin has
          polar equation <InlineMath>{'r = c'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Figure-Eight Curve</p>
        <p className="mb-2">
          Consider the curve with Cartesian equation <InlineMath>{'(x^2 + y^2)^3 = y^2'}</InlineMath>.
        </p>
        <p className="mb-2">
          Using <InlineMath>{'x^2 + y^2 = r^2'}</InlineMath> and <InlineMath>{'y = r\\sin\\theta'}</InlineMath>:
        </p>
        <MathBlock>{'r^6 = r^2\\sin^2\\theta \\implies r^2 = |\\sin\\theta| \\implies r = \\sqrt{|\\sin\\theta|}'}</MathBlock>
        <p className="mt-2">
          This polar equation makes the curve much easier to sketch: as{' '}
          <InlineMath>{'\\theta'}</InlineMath> varies from <InlineMath>{'0'}</InlineMath> to{' '}
          <InlineMath>{'\\pi/2'}</InlineMath>, <InlineMath>{'\\sin\\theta'}</InlineMath> increases
          from 0 to 1, so <InlineMath>{'r'}</InlineMath> increases from 0 to 1.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Area in Polar Coordinates</h2>

      <p className="text-dark-200 mb-4">
        The polar coordinate system leads to a natural integral formula for areas of regions
        bounded by curves given in polar form.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Radial Set</p>
        <p className="mb-2">
          Let <InlineMath>{'f'}</InlineMath> be a nonnegative function on{' '}
          <InlineMath>{'[a, b]'}</InlineMath>, where <InlineMath>{'0 \\leq b - a \\leq 2\\pi'}</InlineMath>.
          The <strong>radial set</strong> of <InlineMath>{'f'}</InlineMath> over{' '}
          <InlineMath>{'[a, b]'}</InlineMath> is the set of all points with polar coordinates{' '}
          <InlineMath>{'(r, \\theta)'}</InlineMath> satisfying:
        </p>
        <MathBlock>{'0 \\leq r \\leq f(\\theta), \\quad a \\leq \\theta \\leq b'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Area of a Circular Sector</h3>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{'f'}</InlineMath> is constant on <InlineMath>{'[a, b]'}</InlineMath>, say{' '}
        <InlineMath>{'f(\\theta) = c'}</InlineMath>, its radial set is a circular sector of radius{' '}
        <InlineMath>{'c'}</InlineMath> subtending an angle of <InlineMath>{'b - a'}</InlineMath> radians.
        By our definition of angular measure, this sector has area:
      </p>

      <MathBlock>{'\\text{Area} = \\frac{1}{2}c^2(b - a) = \\frac{1}{2}\\int_a^b c^2\\,d\\theta'}</MathBlock>

      <h3 className="text-xl font-semibold mt-6 mb-3">Area for Step Functions</h3>

      <p className="text-dark-200 mb-4">
        If <InlineMath>{'s'}</InlineMath> is a step function constant on subintervals, its radial
        set is a union of circular sectors. The total area is:
      </p>

      <MathBlock>{'a(S) = \\frac{1}{2}\\sum_{k=1}^{n} s_k^2(\\theta_k - \\theta_{k-1}) = \\frac{1}{2}\\int_a^b s^2(\\theta)\\,d\\theta'}</MathBlock>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Area Integral Formula</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.6 (Area in Polar Coordinates)</p>
        <p className="mb-2">
          Let <InlineMath>{'R'}</InlineMath> denote the radial set of a nonnegative function{' '}
          <InlineMath>{'f'}</InlineMath> over an interval <InlineMath>{'[a, b]'}</InlineMath>, where{' '}
          <InlineMath>{'0 \\leq b - a \\leq 2\\pi'}</InlineMath>, and assume that{' '}
          <InlineMath>{'R'}</InlineMath> is measurable. If <InlineMath>{'f^2'}</InlineMath> is
          integrable on <InlineMath>{'[a, b]'}</InlineMath>, the area of{' '}
          <InlineMath>{'R'}</InlineMath> is given by:
        </p>
        <MathBlock>{'a(R) = \\frac{1}{2}\\int_a^b f^2(\\theta)\\,d\\theta'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Idea</h3>

      <p className="text-dark-200 mb-4">
        Choose step functions <InlineMath>{'s'}</InlineMath> and <InlineMath>{'t'}</InlineMath> with{' '}
        <InlineMath>{'0 \\leq s(\\theta) \\leq f(\\theta) \\leq t(\\theta)'}</InlineMath>. Their
        radial sets <InlineMath>{'S'}</InlineMath> and <InlineMath>{'T'}</InlineMath> satisfy{' '}
        <InlineMath>{'S \\subseteq R \\subseteq T'}</InlineMath>. By the monotone property of area:
      </p>

      <MathBlock>{'\\frac{1}{2}\\int_a^b s^2(\\theta)\\,d\\theta \\leq a(R) \\leq \\frac{1}{2}\\int_a^b t^2(\\theta)\\,d\\theta'}</MathBlock>

      <p className="text-dark-200 mb-6">
        Since <InlineMath>{'s^2'}</InlineMath> and <InlineMath>{'t^2'}</InlineMath> are arbitrary
        step functions with <InlineMath>{'s^2 \\leq f^2 \\leq t^2'}</InlineMath>, and{' '}
        <InlineMath>{'f^2'}</InlineMath> is integrable, we must have{' '}
        <InlineMath>{'2a(R) = \\int_a^b f^2(\\theta)\\,d\\theta'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Worked Examples</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Area of the Figure-Eight</p>
        <p className="mb-2">
          Find the area enclosed by the figure-eight curve <InlineMath>{'r = \\sqrt{|\\sin\\theta|}'}</InlineMath>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          By symmetry, we calculate the area in the first quadrant and multiply by 4. For{' '}
          <InlineMath>{'0 \\leq \\theta \\leq \\pi/2'}</InlineMath>, we have{' '}
          <InlineMath>{'f^2(\\theta) = |\\sin\\theta| = \\sin\\theta'}</InlineMath>:
        </p>
        <MathBlock>{'a(R) = 4 \\cdot \\frac{1}{2}\\int_0^{\\pi/2} \\sin\\theta\\,d\\theta = 2\\int_0^{\\pi/2} \\sin\\theta\\,d\\theta'}</MathBlock>
        <MathBlock>{'= 2\\left[-\\cos\\theta\\right]_0^{\\pi/2} = 2\\left(0 - (-1)\\right) = 2'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Area of a Cardioid</p>
        <p className="mb-2">
          The cardioid has polar equation <InlineMath>{'r = 1 + \\cos\\theta'}</InlineMath> for{' '}
          <InlineMath>{'0 \\leq \\theta \\leq 2\\pi'}</InlineMath>. Its area is:
        </p>
        <MathBlock>{'a(R) = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta'}</MathBlock>
        <p className="mt-2 mb-2">
          Expanding <InlineMath>{'(1 + \\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta'}</InlineMath>:
        </p>
        <MathBlock>{'= \\frac{1}{2}\\int_0^{2\\pi} \\left(1 + 2\\cos\\theta + \\frac{1 + \\cos 2\\theta}{2}\\right)d\\theta'}</MathBlock>
        <MathBlock>{'= \\frac{1}{2}\\left[\\theta + 2\\sin\\theta + \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4}\\right]_0^{2\\pi} = \\frac{1}{2} \\cdot \\frac{3}{2} \\cdot 2\\pi = \\frac{3\\pi}{2}'}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Converting Between Coordinate Systems</h2>

      <Callout type="info">
        <p className="font-semibold mb-2">Conversion Formulas</p>
        <p className="mb-2"><strong>Polar to Rectangular:</strong></p>
        <MathBlock>{'x = r\\cos\\theta, \\quad y = r\\sin\\theta'}</MathBlock>
        <p className="mt-3 mb-2"><strong>Rectangular to Polar:</strong></p>
        <MathBlock>{'r = \\sqrt{x^2 + y^2}, \\quad \\tan\\theta = \\frac{y}{x} \\text{ (for } x \\neq 0\\text{)}'}</MathBlock>
        <p className="mt-2 text-sm">
          Note: When finding <InlineMath>{'\\theta'}</InlineMath>, consider which quadrant the point
          is in to determine the correct angle.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Polar coordinates:</strong> <InlineMath>{'(r, \\theta)'}</InlineMath> where{' '}
          <InlineMath>{'r'}</InlineMath> is radial distance and <InlineMath>{'\\theta'}</InlineMath>{' '}
          is angle from positive <InlineMath>{'x'}</InlineMath>-axis
        </li>
        <li>
          <strong>Conversion:</strong> <InlineMath>{'x = r\\cos\\theta'}</InlineMath>,{' '}
          <InlineMath>{'y = r\\sin\\theta'}</InlineMath>
        </li>
        <li>
          <strong>Non-uniqueness:</strong> <InlineMath>{'\\theta'}</InlineMath> is determined only
          up to multiples of <InlineMath>{'2\\pi'}</InlineMath>
        </li>
        <li>
          <strong>Area formula:</strong>{' '}
          <InlineMath>{'a(R) = \\frac{1}{2}\\int_a^b f^2(\\theta)\\,d\\theta'}</InlineMath>
        </li>
      </ul>

      <p className="text-dark-200 mb-4">
        Polar coordinates provide an elegant way to describe curves with rotational symmetry and
        lead to a natural area formula. Many curves that have complicated Cartesian equations
        become simple in polar form, making them easier to analyze and sketch.
      </p>
    </LessonLayout>
  );
}
