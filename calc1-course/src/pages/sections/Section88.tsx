import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
            to the cube of the semi-major axis: <MathInline>{`T^2 \\propto a^3`}</MathInline>.
          </li>
        </ol>
      </Callout>

      <h2>Newton's Law of Gravitation</h2>

      <Callout type="theorem" title="Universal Gravitation">
        <p>
          The gravitational force on a planet of mass <MathInline>{`m`}</MathInline> due to the
          Sun of mass <MathInline>{`M`}</MathInline> is:
        </p>
        <MathBlock>{`\\mathbf{F} = -\\frac{GMm}{r^2}\\hat{\\mathbf{r}} = -\\frac{GMm}{r^3}\\mathbf{r}`}</MathBlock>
        <p>
          where <MathInline>{`G`}</MathInline> is the gravitational constant, <MathInline>{`r = \\|\\mathbf{r}\\|`}</MathInline>,
          and <MathInline>{`\\hat{\\mathbf{r}} = \\mathbf{r}/r`}</MathInline> is the unit radial vector.
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
          where <MathInline>{`\\mathbf{r}`}</MathInline> is the position and <MathInline>{`\\mathbf{v} = \\dot{\\mathbf{r}}`}</MathInline> is
          the velocity.
        </p>
      </Callout>

      <Callout type="theorem" title="Conservation of Angular Momentum">
        <p>For a central force, angular momentum is conserved: <MathInline>{`\\dot{\\mathbf{h}} = \\mathbf{0}`}</MathInline>.</p>
        <p><strong>Proof:</strong></p>
        <MathBlock>{`\\dot{\\mathbf{h}} = \\frac{d}{dt}(\\mathbf{r} \\times \\mathbf{v}) = \\dot{\\mathbf{r}} \\times \\mathbf{v} + \\mathbf{r} \\times \\dot{\\mathbf{v}}`}</MathBlock>
        <MathBlock>{`= \\mathbf{v} \\times \\mathbf{v} + \\mathbf{r} \\times \\mathbf{a}`}</MathBlock>
        <p>
          The first term is zero. For gravity, <MathInline>{`\\mathbf{a} \\parallel \\mathbf{r}`}</MathInline>,
          so <MathInline>{`\\mathbf{r} \\times \\mathbf{a} = \\mathbf{0}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Motion in a Plane">
        <p>
          Since <MathInline>{`\\mathbf{h}`}</MathInline> is constant and <MathInline>{`\\mathbf{r} \\cdot \\mathbf{h} = 0`}</MathInline>,
          the position vector <MathInline>{`\\mathbf{r}`}</MathInline> always lies in a fixed plane
          perpendicular to <MathInline>{`\\mathbf{h}`}</MathInline>.
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
          where <MathInline>{`h = \\|\\mathbf{h}\\|`}</MathInline> is constant. This proves Kepler's second law.
        </p>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          In a small time <MathInline>{`dt`}</MathInline>, the planet moves from <MathInline>{`\\mathbf{r}`}</MathInline> to <MathInline>{`\\mathbf{r} + \\mathbf{v}\\,dt`}</MathInline>.
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
          where <MathInline>{`e`}</MathInline> is the eccentricity and <MathInline>{`\\theta`}</MathInline> is
          measured from the perihelion (closest approach to the Sun).
        </p>
      </Callout>

      <Callout type="info" title="Conic Sections">
        <p>This is the polar equation of a conic section with focus at the origin:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`e = 0`}</MathInline>: Circle</li>
          <li><MathInline>{`0 < e < 1`}</MathInline>: Ellipse (bound orbit)</li>
          <li><MathInline>{`e = 1`}</MathInline>: Parabola (escape trajectory)</li>
          <li><MathInline>{`e > 1`}</MathInline>: Hyperbola (unbound orbit)</li>
        </ul>
        <p>This proves Kepler's first law for <MathInline>{`e < 1`}</MathInline>.</p>
      </Callout>

      <h2>Deriving the Orbit Equation</h2>

      <Callout type="info" title="Key Steps">
        <p>Starting from Newton's law <MathInline>{`\\mathbf{a} = -\\frac{GM}{r^2}\\hat{\\mathbf{r}}`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Define <MathInline>{`\\mathbf{e} = \\frac{\\mathbf{v} \\times \\mathbf{h}}{GM} - \\hat{\\mathbf{r}}`}</MathInline> (the eccentricity vector)
          </li>
          <li>Show that <MathInline>{`\\dot{\\mathbf{e}} = \\mathbf{0}`}</MathInline> (constant)</li>
          <li>
            Take <MathInline>{`\\mathbf{r} \\cdot \\mathbf{e}`}</MathInline> and use <MathInline>{`\\mathbf{r} \\cdot (\\mathbf{v} \\times \\mathbf{h}) = (\\mathbf{r} \\times \\mathbf{v}) \\cdot \\mathbf{h} = h^2`}</MathInline>
          </li>
          <li>Obtain <MathInline>{`r(1 + e\\cos\\theta) = h^2/GM`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Orbital Elements</h2>

      <Callout type="definition" title="Key Orbital Parameters">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Semi-major axis</strong> <MathInline>{`a`}</MathInline>: Half the longest diameter of the ellipse
          </li>
          <li>
            <strong>Eccentricity</strong> <MathInline>{`e`}</MathInline>: Measures deviation from circular
            (<MathInline>{`e = 0`}</MathInline> is a circle)
          </li>
          <li>
            <strong>Perihelion</strong>: Closest point to Sun, at distance <MathInline>{`r_p = a(1-e)`}</MathInline>
          </li>
          <li>
            <strong>Aphelion</strong>: Farthest point from Sun, at distance <MathInline>{`r_a = a(1+e)`}</MathInline>
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
          The orbital period <MathInline>{`T`}</MathInline> is the total time for one revolution.
          The area of the ellipse is <MathInline>{`\\pi ab`}</MathInline> where <MathInline>{`b = a\\sqrt{1-e^2}`}</MathInline>.
        </p>
        <MathBlock>{`T = \\frac{\\text{Total area}}{\\text{Areal velocity}} = \\frac{\\pi ab}{h/2} = \\frac{2\\pi ab}{h}`}</MathBlock>
        <p>Using <MathInline>{`h^2 = GMa(1-e^2)`}</MathInline> and <MathInline>{`b = a\\sqrt{1-e^2}`}</MathInline>:</p>
        <MathBlock>{`T^2 = \\frac{4\\pi^2 a^3}{GM}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Kepler's Third Law">
        <p>This confirms Kepler's third law: <MathInline>{`T^2 \\propto a^3`}</MathInline>.</p>
        <p>The constant of proportionality depends only on <MathInline>{`GM`}</MathInline>, not on the planet.</p>
        <MathBlock>{`\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM} \\approx 2.97 \\times 10^{-19} \\text{ s}^2/\\text{m}^3`}</MathBlock>
        <p>(for the Sun).</p>
      </Callout>

      <Callout type="example" title="Earth's Orbit">
        <p>
          For Earth: <MathInline>{`a \\approx 1.50 \\times 10^{11}`}</MathInline> m, <MathInline>{`T \\approx 3.16 \\times 10^7`}</MathInline> s (1 year).
        </p>
        <MathBlock>{`\\frac{T^2}{a^3} = \\frac{(3.16 \\times 10^7)^2}{(1.50 \\times 10^{11})^3} \\approx 2.96 \\times 10^{-19}`}</MathBlock>
        <p>This matches the theoretical value.</p>
      </Callout>

      <h2>Energy in Orbital Motion</h2>

      <Callout type="theorem" title="Orbital Energy">
        <p>The total mechanical energy per unit mass is:</p>
        <MathBlock>{`E = \\frac{1}{2}v^2 - \\frac{GM}{r} = -\\frac{GM}{2a}`}</MathBlock>
        <p>For bound orbits (<MathInline>{`e < 1`}</MathInline>), <MathInline>{`E < 0`}</MathInline>.</p>
      </Callout>

      <Callout type="theorem" title="Vis-Viva Equation">
        <p>
          The orbital speed at distance <MathInline>{`r`}</MathInline> from the Sun is:
        </p>
        <MathBlock>{`v^2 = GM\\left(\\frac{2}{r} - \\frac{1}{a}\\right)`}</MathBlock>
        <p>This relates speed to position for any point in the orbit.</p>
      </Callout>

      <Callout type="example" title="Escape Velocity">
        <p>
          For a parabolic orbit (<MathInline>{`e = 1`}</MathInline>, <MathInline>{`a \\to \\infty`}</MathInline>),
          the energy is exactly zero:
        </p>
        <MathBlock>{`E = \\frac{1}{2}v^2 - \\frac{GM}{r} = 0`}</MathBlock>
        <p>The escape velocity from distance <MathInline>{`r`}</MathInline> is:</p>
        <MathBlock>{`v_{\\text{esc}} = \\sqrt{\\frac{2GM}{r}}`}</MathBlock>
        <p>From Earth's surface (<MathInline>{`r = R_E`}</MathInline>): <MathInline>{`v_{\\text{esc}} \\approx 11.2`}</MathInline> km/s.</p>
      </Callout>

      <h2>Circular Orbits</h2>

      <Callout type="theorem" title="Circular Orbital Velocity">
        <p>For a circular orbit of radius <MathInline>{`r`}</MathInline>:</p>
        <MathBlock>{`v_{\\text{circ}} = \\sqrt{\\frac{GM}{r}}`}</MathBlock>
        <p>This is <MathInline>{`1/\\sqrt{2}`}</MathInline> times the escape velocity at the same radius.</p>
      </Callout>

      <Callout type="example" title="Low Earth Orbit">
        <p>
          For a satellite at altitude 400 km above Earth (<MathInline>{`r \\approx 6.77 \\times 10^6`}</MathInline> m):
        </p>
        <MathBlock>{`v_{\\text{circ}} = \\sqrt{\\frac{3.99 \\times 10^{14}}{6.77 \\times 10^6}} \\approx 7.67 \\text{ km/s}`}</MathBlock>
        <MathBlock>{`T = \\frac{2\\pi r}{v} \\approx 92.4 \\text{ minutes}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results">
        <p><strong>Kepler's Laws:</strong></p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Orbits are ellipses with Sun at one focus</li>
          <li>Equal areas in equal times: <MathInline>{`dA/dt = h/2 = \\text{const}`}</MathInline></li>
          <li><MathInline>{`T^2 = 4\\pi^2 a^3/(GM)`}</MathInline></li>
        </ol>

        <p className="mt-4"><strong>Orbital Mechanics:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Angular momentum: <MathInline>{`\\mathbf{h} = \\mathbf{r} \\times \\mathbf{v}`}</MathInline> (conserved)</li>
          <li>Orbit equation: <MathInline>{`r = \\frac{h^2/GM}{1 + e\\cos\\theta}`}</MathInline></li>
          <li>Energy: <MathInline>{`E = -GM/(2a)`}</MathInline></li>
          <li>Vis-viva: <MathInline>{`v^2 = GM(2/r - 1/a)`}</MathInline></li>
          <li>Escape velocity: <MathInline>{`v_{\\text{esc}} = \\sqrt{2GM/r}`}</MathInline></li>
          <li>Circular velocity: <MathInline>{`v_{\\text{circ}} = \\sqrt{GM/r}`}</MathInline></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
