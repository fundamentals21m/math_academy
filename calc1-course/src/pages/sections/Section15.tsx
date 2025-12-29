import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        Let <MathInline>{'P'}</MathInline> be a point distinct from the origin. The line segment
        joining <MathInline>{'P'}</MathInline> to the origin has some length{' '}
        <MathInline>{'r > 0'}</MathInline> and makes an angle of <MathInline>{'\\theta'}</MathInline>{' '}
        radians with the positive <MathInline>{'x'}</MathInline>-axis.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Polar Coordinates</p>
        <p className="mb-2">
          The two numbers <MathInline>{'r'}</MathInline> and <MathInline>{'\\theta'}</MathInline> are
          called <strong>polar coordinates</strong> of <MathInline>{'P'}</MathInline>. They are
          related to the rectangular coordinates <MathInline>{'(x, y)'}</MathInline> by:
        </p>
        <MathBlock>{'x = r\\cos\\theta, \\quad y = r\\sin\\theta'}</MathBlock>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <MathInline>{'r'}</MathInline> is the <strong>radial distance</strong> of{' '}
            <MathInline>{'P'}</MathInline> from the origin
          </li>
          <li>
            <MathInline>{'\\theta'}</MathInline> is a <strong>polar angle</strong>
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Non-Uniqueness of Polar Coordinates</h3>

      <p className="text-dark-200 mb-4">
        Unlike rectangular coordinates, polar coordinates are <em>not unique</em>. If{' '}
        <MathInline>{'\\theta'}</MathInline> is a polar angle for <MathInline>{'P'}</MathInline>,
        then so is <MathInline>{'\\theta + 2n\\pi'}</MathInline> for any integer{' '}
        <MathInline>{'n'}</MathInline>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Properties</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            The radial distance is unique: <MathInline>{'r = \\sqrt{x^2 + y^2}'}</MathInline>
          </li>
          <li>
            The polar angle is determined only up to multiples of{' '}
            <MathInline>{'2\\pi'}</MathInline>
          </li>
          <li>
            At the origin, <MathInline>{'r = 0'}</MathInline> and <em>any</em> value of{' '}
            <MathInline>{'\\theta'}</MathInline> may be used
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Graphs in Polar Coordinates</h2>

      <p className="text-dark-200 mb-4">
        Let <MathInline>{'f'}</MathInline> be a nonnegative function defined on an interval{' '}
        <MathInline>{'[a, b]'}</MathInline>. The set of all points with polar coordinates{' '}
        <MathInline>{'(r, \\theta)'}</MathInline> satisfying <MathInline>{'r = f(\\theta)'}</MathInline>{' '}
        is called the <strong>graph of <MathInline>{'f'}</MathInline> in polar coordinates</strong>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Circle</p>
        <p className="mb-2">
          The circle with Cartesian equation <MathInline>{'x^2 + y^2 = 4'}</MathInline> has the
          simpler polar equation <MathInline>{'r = 2'}</MathInline>.
        </p>
        <p>
          In general, a circle of radius <MathInline>{'c'}</MathInline> centered at the origin has
          polar equation <MathInline>{'r = c'}</MathInline>.
        </p>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Figure-Eight Curve</p>
        <p className="mb-2">
          Consider the curve with Cartesian equation <MathInline>{'(x^2 + y^2)^3 = y^2'}</MathInline>.
        </p>
        <p className="mb-2">
          Using <MathInline>{'x^2 + y^2 = r^2'}</MathInline> and <MathInline>{'y = r\\sin\\theta'}</MathInline>:
        </p>
        <MathBlock>{'r^6 = r^2\\sin^2\\theta \\implies r^2 = |\\sin\\theta| \\implies r = \\sqrt{|\\sin\\theta|}'}</MathBlock>
        <p className="mt-2">
          This polar equation makes the curve much easier to sketch: as{' '}
          <MathInline>{'\\theta'}</MathInline> varies from <MathInline>{'0'}</MathInline> to{' '}
          <MathInline>{'\\pi/2'}</MathInline>, <MathInline>{'\\sin\\theta'}</MathInline> increases
          from 0 to 1, so <MathInline>{'r'}</MathInline> increases from 0 to 1.
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
          Let <MathInline>{'f'}</MathInline> be a nonnegative function on{' '}
          <MathInline>{'[a, b]'}</MathInline>, where <MathInline>{'0 \\leq b - a \\leq 2\\pi'}</MathInline>.
          The <strong>radial set</strong> of <MathInline>{'f'}</MathInline> over{' '}
          <MathInline>{'[a, b]'}</MathInline> is the set of all points with polar coordinates{' '}
          <MathInline>{'(r, \\theta)'}</MathInline> satisfying:
        </p>
        <MathBlock>{'0 \\leq r \\leq f(\\theta), \\quad a \\leq \\theta \\leq b'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Area of a Circular Sector</h3>

      <p className="text-dark-200 mb-4">
        If <MathInline>{'f'}</MathInline> is constant on <MathInline>{'[a, b]'}</MathInline>, say{' '}
        <MathInline>{'f(\\theta) = c'}</MathInline>, its radial set is a circular sector of radius{' '}
        <MathInline>{'c'}</MathInline> subtending an angle of <MathInline>{'b - a'}</MathInline> radians.
        By our definition of angular measure, this sector has area:
      </p>

      <MathBlock>{'\\text{Area} = \\frac{1}{2}c^2(b - a) = \\frac{1}{2}\\int_a^b c^2\\,d\\theta'}</MathBlock>

      <h3 className="text-xl font-semibold mt-6 mb-3">Area for Step Functions</h3>

      <p className="text-dark-200 mb-4">
        If <MathInline>{'s'}</MathInline> is a step function constant on subintervals, its radial
        set is a union of circular sectors. The total area is:
      </p>

      <MathBlock>{'a(S) = \\frac{1}{2}\\sum_{k=1}^{n} s_k^2(\\theta_k - \\theta_{k-1}) = \\frac{1}{2}\\int_a^b s^2(\\theta)\\,d\\theta'}</MathBlock>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Area Integral Formula</h2>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem 2.6 (Area in Polar Coordinates)</p>
        <p className="mb-2">
          Let <MathInline>{'R'}</MathInline> denote the radial set of a nonnegative function{' '}
          <MathInline>{'f'}</MathInline> over an interval <MathInline>{'[a, b]'}</MathInline>, where{' '}
          <MathInline>{'0 \\leq b - a \\leq 2\\pi'}</MathInline>, and assume that{' '}
          <MathInline>{'R'}</MathInline> is measurable. If <MathInline>{'f^2'}</MathInline> is
          integrable on <MathInline>{'[a, b]'}</MathInline>, the area of{' '}
          <MathInline>{'R'}</MathInline> is given by:
        </p>
        <MathBlock>{'a(R) = \\frac{1}{2}\\int_a^b f^2(\\theta)\\,d\\theta'}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold mt-6 mb-3">Proof Idea</h3>

      <p className="text-dark-200 mb-4">
        Choose step functions <MathInline>{'s'}</MathInline> and <MathInline>{'t'}</MathInline> with{' '}
        <MathInline>{'0 \\leq s(\\theta) \\leq f(\\theta) \\leq t(\\theta)'}</MathInline>. Their
        radial sets <MathInline>{'S'}</MathInline> and <MathInline>{'T'}</MathInline> satisfy{' '}
        <MathInline>{'S \\subseteq R \\subseteq T'}</MathInline>. By the monotone property of area:
      </p>

      <MathBlock>{'\\frac{1}{2}\\int_a^b s^2(\\theta)\\,d\\theta \\leq a(R) \\leq \\frac{1}{2}\\int_a^b t^2(\\theta)\\,d\\theta'}</MathBlock>

      <p className="text-dark-200 mb-6">
        Since <MathInline>{'s^2'}</MathInline> and <MathInline>{'t^2'}</MathInline> are arbitrary
        step functions with <MathInline>{'s^2 \\leq f^2 \\leq t^2'}</MathInline>, and{' '}
        <MathInline>{'f^2'}</MathInline> is integrable, we must have{' '}
        <MathInline>{'2a(R) = \\int_a^b f^2(\\theta)\\,d\\theta'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Worked Examples</h2>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Area of the Figure-Eight</p>
        <p className="mb-2">
          Find the area enclosed by the figure-eight curve <MathInline>{'r = \\sqrt{|\\sin\\theta|}'}</MathInline>.
        </p>
        <p className="mt-3 mb-2"><strong>Solution:</strong></p>
        <p className="mb-2">
          By symmetry, we calculate the area in the first quadrant and multiply by 4. For{' '}
          <MathInline>{'0 \\leq \\theta \\leq \\pi/2'}</MathInline>, we have{' '}
          <MathInline>{'f^2(\\theta) = |\\sin\\theta| = \\sin\\theta'}</MathInline>:
        </p>
        <MathBlock>{'a(R) = 4 \\cdot \\frac{1}{2}\\int_0^{\\pi/2} \\sin\\theta\\,d\\theta = 2\\int_0^{\\pi/2} \\sin\\theta\\,d\\theta'}</MathBlock>
        <MathBlock>{'= 2\\left[-\\cos\\theta\\right]_0^{\\pi/2} = 2\\left(0 - (-1)\\right) = 2'}</MathBlock>
      </Callout>

      <Callout type="example">
        <p className="font-semibold mb-2">Example: Area of a Cardioid</p>
        <p className="mb-2">
          The cardioid has polar equation <MathInline>{'r = 1 + \\cos\\theta'}</MathInline> for{' '}
          <MathInline>{'0 \\leq \\theta \\leq 2\\pi'}</MathInline>. Its area is:
        </p>
        <MathBlock>{'a(R) = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta'}</MathBlock>
        <p className="mt-2 mb-2">
          Expanding <MathInline>{'(1 + \\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta'}</MathInline>:
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
          Note: When finding <MathInline>{'\\theta'}</MathInline>, consider which quadrant the point
          is in to determine the correct angle.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>
          <strong>Polar coordinates:</strong> <MathInline>{'(r, \\theta)'}</MathInline> where{' '}
          <MathInline>{'r'}</MathInline> is radial distance and <MathInline>{'\\theta'}</MathInline>{' '}
          is angle from positive <MathInline>{'x'}</MathInline>-axis
        </li>
        <li>
          <strong>Conversion:</strong> <MathInline>{'x = r\\cos\\theta'}</MathInline>,{' '}
          <MathInline>{'y = r\\sin\\theta'}</MathInline>
        </li>
        <li>
          <strong>Non-uniqueness:</strong> <MathInline>{'\\theta'}</MathInline> is determined only
          up to multiples of <MathInline>{'2\\pi'}</MathInline>
        </li>
        <li>
          <strong>Area formula:</strong>{' '}
          <MathInline>{'a(R) = \\frac{1}{2}\\int_a^b f^2(\\theta)\\,d\\theta'}</MathInline>
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
