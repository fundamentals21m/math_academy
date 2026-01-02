import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section88() {
  return (
    <LessonLayout sectionId={88}>
      <h1>Planetary Motion</h1>

      <p>
        The motion of planets around the Sun is one of the great triumphs of mathematical
        physics. Johannes Kepler discovered the laws of planetary motion empirically, and
        Isaac Newton later showed they follow from his law of universal gravitation. This
        section applies vector calculus to derive and understand these fundamental laws.
      </p>

      <h2>Kepler's Laws</h2>

      <Callout type="theorem" title="Kepler's Three Laws">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Law of Ellipses:</strong> Each planet moves in an ellipse with the Sun at
            one focus.
          </li>
          <li>
            <strong>Law of Equal Areas:</strong> The line from the Sun to a planet sweeps out
            equal areas in equal times.
          </li>
          <li>
            <strong>Law of Periods:</strong> The square of the orbital period is proportional
            to the cube of the semi-major axis: <InlineMath>{`T^2 \\propto a^3`}</InlineMath>.
          </li>
        </ol>
      </Callout>

      <h2>Newton's Law of Gravitation</h2>

      <Callout type="theorem" title="Universal Gravitation">
        <p>
          The gravitational force on a planet of mass <InlineMath>{`m`}</InlineMath> due to the
          Sun of mass <InlineMath>{`M`}</InlineMath> is:
        </p>
        <MathBlock>{`\\mathbf{F} = -\\frac{GMm}{r^2}\\hat{\\mathbf{r}} = -\\frac{GMm}{r^3}\\mathbf{r}`}</MathBlock>
        <p>
          where <InlineMath>{`G`}</InlineMath> is the gravitational constant, <InlineMath>{`r = \\|\\mathbf{r}\\|`}</InlineMath>,
          and <InlineMath>{`\\hat{\\mathbf{r}} = \\mathbf{r}/r`}</InlineMath> is the unit radial vector.
        </p>
      </Callout>

      <Callout type="info" title="Central Force">
        <p>
          Gravity is a <strong>central force</strong>: it always points toward (or away from)
          a fixed point (the Sun). This has profound consequences for the motion.
        </p>
      </Callout>

      <h2>Conservation of Angular Momentum</h2>

      <Callout type="definition" title="Angular Momentum">
        <p>
          The <strong>angular momentum</strong> per unit mass is:
        </p>
        <MathBlock>{`\\mathbf{h} = \\mathbf{r} \\times \\mathbf{v}`}</MathBlock>
        <p>
          where <InlineMath>{`\\mathbf{r}`}</InlineMath> is the position and <InlineMath>{`\\mathbf{v} = \\dot{\\mathbf{r}}`}</InlineMath> is
          the velocity.
        </p>
      </Callout>

      <Callout type="theorem" title="Conservation of Angular Momentum">
        <p>For a central force, angular momentum is conserved: <InlineMath>{`\\dot{\\mathbf{h}} = \\mathbf{0}`}</InlineMath>.</p>
        <p><strong>Proof:</strong></p>
        <MathBlock>{`\\dot{\\mathbf{h}} = \\frac{d}{dt}(\\mathbf{r} \\times \\mathbf{v}) = \\dot{\\mathbf{r}} \\times \\mathbf{v} + \\mathbf{r} \\times \\dot{\\mathbf{v}}`}</MathBlock>
        <MathBlock>{`= \\mathbf{v} \\times \\mathbf{v} + \\mathbf{r} \\times \\mathbf{a}`}</MathBlock>
        <p>
          The first term is zero. For gravity, <InlineMath>{`\\mathbf{a} \\parallel \\mathbf{r}`}</InlineMath>,
          so <InlineMath>{`\\mathbf{r} \\times \\mathbf{a} = \\mathbf{0}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Motion in a Plane">
        <p>
          Since <InlineMath>{`\\mathbf{h}`}</InlineMath> is constant and <InlineMath>{`\\mathbf{r} \\cdot \\mathbf{h} = 0`}</InlineMath>,
          the position vector <InlineMath>{`\\mathbf{r}`}</InlineMath> always lies in a fixed plane
          perpendicular to <InlineMath>{`\\mathbf{h}`}</InlineMath>.
        </p>
        <p>
          <strong>Planetary orbits are planar.</strong>
        </p>
      </Callout>

      <h2>Kepler's Second Law: Equal Areas</h2>

      <Callout type="theorem" title="Areal Velocity">
        <p>
          The rate at which the position vector sweeps out area is:
        </p>
        <MathBlock>{`\\frac{dA}{dt} = \\frac{1}{2}\\|\\mathbf{r} \\times \\mathbf{v}\\| = \\frac{1}{2}h`}</MathBlock>
        <p>
          where <InlineMath>{`h = \\|\\mathbf{h}\\|`}</InlineMath> is constant. This proves Kepler's second law.
        </p>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          In a small time <InlineMath>{`dt`}</InlineMath>, the planet moves from <InlineMath>{`\\mathbf{r}`}</InlineMath> to <InlineMath>{`\\mathbf{r} + \\mathbf{v}\\,dt`}</InlineMath>.
          The area of the triangle swept out is approximately:
        </p>
        <MathBlock>{`dA = \\frac{1}{2}\\|\\mathbf{r} \\times (\\mathbf{v}\\,dt)\\| = \\frac{1}{2}\\|\\mathbf{r} \\times \\mathbf{v}\\|\\,dt`}</MathBlock>
      </Callout>

      <h2>The Orbit Equation</h2>

      <Callout type="theorem" title="Orbit in Polar Coordinates">
        <p>
          The orbit of a planet under gravity satisfies:
        </p>
        <MathBlock>{`r = \\frac{h^2/GM}{1 + e\\cos\\theta}`}</MathBlock>
        <p>
          where <InlineMath>{`e`}</InlineMath> is the eccentricity and <InlineMath>{`\\theta`}</InlineMath> is
          measured from the perihelion (closest approach to the Sun).
        </p>
      </Callout>

      <Callout type="info" title="Conic Sections">
        <p>This is the polar equation of a conic section with focus at the origin:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`e = 0`}</InlineMath>: Circle</li>
          <li><InlineMath>{`0 < e < 1`}</InlineMath>: Ellipse (bound orbit)</li>
          <li><InlineMath>{`e = 1`}</InlineMath>: Parabola (escape trajectory)</li>
          <li><InlineMath>{`e > 1`}</InlineMath>: Hyperbola (unbound orbit)</li>
        </ul>
        <p>This proves Kepler's first law for <InlineMath>{`e < 1`}</InlineMath>.</p>
      </Callout>

      <h2>Deriving the Orbit Equation</h2>

      <Callout type="info" title="Key Steps">
        <p>Starting from Newton's law <InlineMath>{`\\mathbf{a} = -\\frac{GM}{r^2}\\hat{\\mathbf{r}}`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Define <InlineMath>{`\\mathbf{e} = \\frac{\\mathbf{v} \\times \\mathbf{h}}{GM} - \\hat{\\mathbf{r}}`}</InlineMath> (the eccentricity vector)
          </li>
          <li>Show that <InlineMath>{`\\dot{\\mathbf{e}} = \\mathbf{0}`}</InlineMath> (constant)</li>
          <li>
            Take <InlineMath>{`\\mathbf{r} \\cdot \\mathbf{e}`}</InlineMath> and use <InlineMath>{`\\mathbf{r} \\cdot (\\mathbf{v} \\times \\mathbf{h}) = (\\mathbf{r} \\times \\mathbf{v}) \\cdot \\mathbf{h} = h^2`}</InlineMath>
          </li>
          <li>Obtain <InlineMath>{`r(1 + e\\cos\\theta) = h^2/GM`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Orbital Elements</h2>

      <Callout type="definition" title="Key Orbital Parameters">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Semi-major axis</strong> <InlineMath>{`a`}</InlineMath>: Half the longest diameter of the ellipse
          </li>
          <li>
            <strong>Eccentricity</strong> <InlineMath>{`e`}</InlineMath>: Measures deviation from circular
            (<InlineMath>{`e = 0`}</InlineMath> is a circle)
          </li>
          <li>
            <strong>Perihelion</strong>: Closest point to Sun, at distance <InlineMath>{`r_p = a(1-e)`}</InlineMath>
          </li>
          <li>
            <strong>Aphelion</strong>: Farthest point from Sun, at distance <InlineMath>{`r_a = a(1+e)`}</InlineMath>
          </li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Orbital Relationships">
        <p>For an elliptical orbit:</p>
        <MathBlock>{`a = \\frac{r_p + r_a}{2}, \\quad e = \\frac{r_a - r_p}{r_a + r_p}`}</MathBlock>
        <MathBlock>{`\\frac{h^2}{GM} = a(1-e^2)`}</MathBlock>
      </Callout>

      <h2>Kepler's Third Law: Periods</h2>

      <Callout type="theorem" title="Period of an Orbit">
        <p>
          The orbital period <InlineMath>{`T`}</InlineMath> is the total time for one revolution.
          The area of the ellipse is <InlineMath>{`\\pi ab`}</InlineMath> where <InlineMath>{`b = a\\sqrt{1-e^2}`}</InlineMath>.
        </p>
        <MathBlock>{`T = \\frac{\\text{Total area}}{\\text{Areal velocity}} = \\frac{\\pi ab}{h/2} = \\frac{2\\pi ab}{h}`}</MathBlock>
        <p>Using <InlineMath>{`h^2 = GMa(1-e^2)`}</InlineMath> and <InlineMath>{`b = a\\sqrt{1-e^2}`}</InlineMath>:</p>
        <MathBlock>{`T^2 = \\frac{4\\pi^2 a^3}{GM}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Kepler's Third Law">
        <p>This confirms Kepler's third law: <InlineMath>{`T^2 \\propto a^3`}</InlineMath>.</p>
        <p>The constant of proportionality depends only on <InlineMath>{`GM`}</InlineMath>, not on the planet.</p>
        <MathBlock>{`\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM} \\approx 2.97 \\times 10^{-19} \\text{ s}^2/\\text{m}^3`}</MathBlock>
        <p>(for the Sun).</p>
      </Callout>

      <Callout type="example" title="Earth's Orbit">
        <p>
          For Earth: <InlineMath>{`a \\approx 1.50 \\times 10^{11}`}</InlineMath> m, <InlineMath>{`T \\approx 3.16 \\times 10^7`}</InlineMath> s (1 year).
        </p>
        <MathBlock>{`\\frac{T^2}{a^3} = \\frac{(3.16 \\times 10^7)^2}{(1.50 \\times 10^{11})^3} \\approx 2.96 \\times 10^{-19}`}</MathBlock>
        <p>This matches the theoretical value.</p>
      </Callout>

      <h2>Energy in Orbital Motion</h2>

      <Callout type="theorem" title="Orbital Energy">
        <p>The total mechanical energy per unit mass is:</p>
        <MathBlock>{`E = \\frac{1}{2}v^2 - \\frac{GM}{r} = -\\frac{GM}{2a}`}</MathBlock>
        <p>For bound orbits (<InlineMath>{`e < 1`}</InlineMath>), <InlineMath>{`E < 0`}</InlineMath>.</p>
      </Callout>

      <Callout type="theorem" title="Vis-Viva Equation">
        <p>
          The orbital speed at distance <InlineMath>{`r`}</InlineMath> from the Sun is:
        </p>
        <MathBlock>{`v^2 = GM\\left(\\frac{2}{r} - \\frac{1}{a}\\right)`}</MathBlock>
        <p>This relates speed to position for any point in the orbit.</p>
      </Callout>

      <Callout type="example" title="Escape Velocity">
        <p>
          For a parabolic orbit (<InlineMath>{`e = 1`}</InlineMath>, <InlineMath>{`a \\to \\infty`}</InlineMath>),
          the energy is exactly zero:
        </p>
        <MathBlock>{`E = \\frac{1}{2}v^2 - \\frac{GM}{r} = 0`}</MathBlock>
        <p>The escape velocity from distance <InlineMath>{`r`}</InlineMath> is:</p>
        <MathBlock>{`v_{\\text{esc}} = \\sqrt{\\frac{2GM}{r}}`}</MathBlock>
        <p>From Earth's surface (<InlineMath>{`r = R_E`}</InlineMath>): <InlineMath>{`v_{\\text{esc}} \\approx 11.2`}</InlineMath> km/s.</p>
      </Callout>

      <h2>Circular Orbits</h2>

      <Callout type="theorem" title="Circular Orbital Velocity">
        <p>For a circular orbit of radius <InlineMath>{`r`}</InlineMath>:</p>
        <MathBlock>{`v_{\\text{circ}} = \\sqrt{\\frac{GM}{r}}`}</MathBlock>
        <p>This is <InlineMath>{`1/\\sqrt{2}`}</InlineMath> times the escape velocity at the same radius.</p>
      </Callout>

      <Callout type="example" title="Low Earth Orbit">
        <p>
          For a satellite at altitude 400 km above Earth (<InlineMath>{`r \\approx 6.77 \\times 10^6`}</InlineMath> m):
        </p>
        <MathBlock>{`v_{\\text{circ}} = \\sqrt{\\frac{3.99 \\times 10^{14}}{6.77 \\times 10^6}} \\approx 7.67 \\text{ km/s}`}</MathBlock>
        <MathBlock>{`T = \\frac{2\\pi r}{v} \\approx 92.4 \\text{ minutes}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results">
        <p><strong>Kepler's Laws:</strong></p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Orbits are ellipses with Sun at one focus</li>
          <li>Equal areas in equal times: <InlineMath>{`dA/dt = h/2 = \\text{const}`}</InlineMath></li>
          <li><InlineMath>{`T^2 = 4\\pi^2 a^3/(GM)`}</InlineMath></li>
        </ol>

        <p className="mt-4"><strong>Orbital Mechanics:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Angular momentum: <InlineMath>{`\\mathbf{h} = \\mathbf{r} \\times \\mathbf{v}`}</InlineMath> (conserved)</li>
          <li>Orbit equation: <InlineMath>{`r = \\frac{h^2/GM}{1 + e\\cos\\theta}`}</InlineMath></li>
          <li>Energy: <InlineMath>{`E = -GM/(2a)`}</InlineMath></li>
          <li>Vis-viva: <InlineMath>{`v^2 = GM(2/r - 1/a)`}</InlineMath></li>
          <li>Escape velocity: <InlineMath>{`v_{\\text{esc}} = \\sqrt{2GM/r}`}</InlineMath></li>
          <li>Circular velocity: <InlineMath>{`v_{\\text{circ}} = \\sqrt{GM/r}`}</InlineMath></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
