import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section82() {
  return (
    <LessonLayout sectionId={82}>
      <h1>Conic Sections</h1>

      <p>
        The <strong>conic sections</strong>—circles, ellipses, parabolas, and hyperbolas—are curves
        obtained by intersecting a cone with a plane. These curves appear throughout mathematics,
        physics, and engineering, from planetary orbits to satellite dishes.
      </p>

      <h2>The Cone and Its Sections</h2>

      <Callout type="info" title="Why 'Conic Sections'?">
        <p>
          Consider a double cone (two cones joined at their vertices). Slicing this cone with
          a plane at different angles produces:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Circle:</strong> Plane perpendicular to the axis</li>
          <li><strong>Ellipse:</strong> Plane at an angle, cutting through one cone</li>
          <li><strong>Parabola:</strong> Plane parallel to a generating line of the cone</li>
          <li><strong>Hyperbola:</strong> Plane cutting through both cones</li>
        </ul>
      </Callout>

      <h2>Parabolas</h2>

      <Callout type="definition" title="Parabola">
        <p>
          A <strong>parabola</strong> is the set of all points equidistant from a fixed
          point <InlineMath>{`F`}</InlineMath> (the <strong>focus</strong>) and a fixed
          line <InlineMath>{`\\ell`}</InlineMath> (the <strong>directrix</strong>).
        </p>
      </Callout>

      <Callout type="theorem" title="Standard Form of a Parabola">
        <p>
          A parabola with vertex at the origin and focus on the <InlineMath>{`y`}</InlineMath>-axis:
        </p>
        <MathBlock>{`x^2 = 4py`}</MathBlock>
        <p>
          where <InlineMath>{`p`}</InlineMath> is the distance from vertex to focus. The focus
          is at <InlineMath>{`(0, p)`}</InlineMath> and the directrix is <InlineMath>{`y = -p`}</InlineMath>.
        </p>
        <p>For a parabola opening along the <InlineMath>{`x`}</InlineMath>-axis:</p>
        <MathBlock>{`y^2 = 4px`}</MathBlock>
        <p>
          Focus at <InlineMath>{`(p, 0)`}</InlineMath>, directrix <InlineMath>{`x = -p`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Finding Focus and Directrix">
        <p>Find the focus and directrix of <InlineMath>{`x^2 = 12y`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Comparing with <InlineMath>{`x^2 = 4py`}</InlineMath>:</p>
        <MathBlock>{`4p = 12 \\implies p = 3`}</MathBlock>
        <p>Focus: <InlineMath>{`(0, 3)`}</InlineMath></p>
        <p>Directrix: <InlineMath>{`y = -3`}</InlineMath></p>
      </Callout>

      <Callout type="info" title="Reflective Property of Parabolas">
        <p>
          Light rays parallel to the axis of a parabola reflect through the focus.
          This principle is used in satellite dishes, telescopes, and car headlights.
        </p>
      </Callout>

      <h2>Ellipses</h2>

      <Callout type="definition" title="Ellipse">
        <p>
          An <strong>ellipse</strong> is the set of all points <InlineMath>{`P`}</InlineMath> such that
          the sum of distances from <InlineMath>{`P`}</InlineMath> to two fixed
          points <InlineMath>{`F_1`}</InlineMath> and <InlineMath>{`F_2`}</InlineMath> (the <strong>foci</strong>) is constant:
        </p>
        <MathBlock>{`|PF_1| + |PF_2| = 2a`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Standard Form of an Ellipse">
        <p>
          An ellipse centered at the origin with semi-major axis <InlineMath>{`a`}</InlineMath> along
          the <InlineMath>{`x`}</InlineMath>-axis and semi-minor axis <InlineMath>{`b`}</InlineMath> along
          the <InlineMath>{`y`}</InlineMath>-axis (<InlineMath>{`a > b`}</InlineMath>):
        </p>
        <MathBlock>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</MathBlock>
        <p>The foci are at <InlineMath>{`(\\pm c, 0)`}</InlineMath> where:</p>
        <MathBlock>{`c^2 = a^2 - b^2`}</MathBlock>
      </Callout>

      <Callout type="info" title="Key Relationships">
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`a`}</InlineMath> = semi-major axis (half the longer diameter)</li>
          <li><InlineMath>{`b`}</InlineMath> = semi-minor axis (half the shorter diameter)</li>
          <li><InlineMath>{`c`}</InlineMath> = distance from center to each focus</li>
          <li><strong>Relationship:</strong> <InlineMath>{`a^2 = b^2 + c^2`}</InlineMath></li>
          <li><strong>Eccentricity:</strong> <InlineMath>{`e = c/a`}</InlineMath> (measures "flatness", <InlineMath>{`0 < e < 1`}</InlineMath>)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Analyzing an Ellipse">
        <p>
          For the ellipse <InlineMath>{`\\frac{x^2}{25} + \\frac{y^2}{9} = 1`}</InlineMath>, find
          the semi-axes, foci, and eccentricity.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`a^2 = 25 \\implies a = 5, \\quad b^2 = 9 \\implies b = 3`}</MathBlock>
        <MathBlock>{`c^2 = a^2 - b^2 = 25 - 9 = 16 \\implies c = 4`}</MathBlock>
        <p>Semi-major axis: <InlineMath>{`a = 5`}</InlineMath> (along <InlineMath>{`x`}</InlineMath>-axis)</p>
        <p>Semi-minor axis: <InlineMath>{`b = 3`}</InlineMath> (along <InlineMath>{`y`}</InlineMath>-axis)</p>
        <p>Foci: <InlineMath>{`(\\pm 4, 0)`}</InlineMath></p>
        <p>Eccentricity: <InlineMath>{`e = 4/5 = 0.8`}</InlineMath></p>
      </Callout>

      <Callout type="example" title="Ellipse with Vertical Major Axis">
        <p>
          If <InlineMath>{`b > a`}</InlineMath>, the major axis is vertical. For <InlineMath>{`\\frac{x^2}{9} + \\frac{y^2}{25} = 1`}</InlineMath>:
        </p>
        <MathBlock>{`a = 3, \\; b = 5, \\; c = \\sqrt{25 - 9} = 4`}</MathBlock>
        <p>Foci: <InlineMath>{`(0, \\pm 4)`}</InlineMath> (on the <InlineMath>{`y`}</InlineMath>-axis)</p>
      </Callout>

      <h2>Hyperbolas</h2>

      <Callout type="definition" title="Hyperbola">
        <p>
          A <strong>hyperbola</strong> is the set of all points <InlineMath>{`P`}</InlineMath> such that
          the absolute difference of distances from <InlineMath>{`P`}</InlineMath> to two fixed
          points <InlineMath>{`F_1`}</InlineMath> and <InlineMath>{`F_2`}</InlineMath> (the <strong>foci</strong>) is constant:
        </p>
        <MathBlock>{`||PF_1| - |PF_2|| = 2a`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Standard Form of a Hyperbola">
        <p>A hyperbola centered at the origin with transverse axis along the <InlineMath>{`x`}</InlineMath>-axis:</p>
        <MathBlock>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</MathBlock>
        <p>The foci are at <InlineMath>{`(\\pm c, 0)`}</InlineMath> where:</p>
        <MathBlock>{`c^2 = a^2 + b^2`}</MathBlock>
        <p>The asymptotes are the lines:</p>
        <MathBlock>{`y = \\pm \\frac{b}{a}x`}</MathBlock>
      </Callout>

      <Callout type="info" title="Key Relationships for Hyperbolas">
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`a`}</InlineMath> = semi-transverse axis (vertex to center distance)</li>
          <li><InlineMath>{`b`}</InlineMath> = semi-conjugate axis</li>
          <li><InlineMath>{`c`}</InlineMath> = distance from center to each focus</li>
          <li><strong>Relationship:</strong> <InlineMath>{`c^2 = a^2 + b^2`}</InlineMath> (note the + sign!)</li>
          <li><strong>Eccentricity:</strong> <InlineMath>{`e = c/a > 1`}</InlineMath></li>
          <li>Vertices at <InlineMath>{`(\\pm a, 0)`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Analyzing a Hyperbola">
        <p>
          For <InlineMath>{`\\frac{x^2}{16} - \\frac{y^2}{9} = 1`}</InlineMath>, find vertices, foci, and asymptotes.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`a^2 = 16 \\implies a = 4, \\quad b^2 = 9 \\implies b = 3`}</MathBlock>
        <MathBlock>{`c^2 = 16 + 9 = 25 \\implies c = 5`}</MathBlock>
        <p>Vertices: <InlineMath>{`(\\pm 4, 0)`}</InlineMath></p>
        <p>Foci: <InlineMath>{`(\\pm 5, 0)`}</InlineMath></p>
        <p>Asymptotes: <InlineMath>{`y = \\pm \\frac{3}{4}x`}</InlineMath></p>
        <p>Eccentricity: <InlineMath>{`e = 5/4 = 1.25`}</InlineMath></p>
      </Callout>

      <Callout type="theorem" title="Vertical Transverse Axis">
        <p>If the transverse axis is along the <InlineMath>{`y`}</InlineMath>-axis:</p>
        <MathBlock>{`\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1`}</MathBlock>
        <p>Vertices at <InlineMath>{`(0, \\pm a)`}</InlineMath>, foci at <InlineMath>{`(0, \\pm c)`}</InlineMath>, asymptotes <InlineMath>{`y = \\pm \\frac{a}{b}x`}</InlineMath></p>
      </Callout>

      <h2>Eccentricity: A Unified View</h2>

      <Callout type="theorem" title="Eccentricity and Conic Type">
        <p>The eccentricity <InlineMath>{`e`}</InlineMath> determines the type of conic:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`e = 0`}</InlineMath>: Circle</li>
          <li><InlineMath>{`0 < e < 1`}</InlineMath>: Ellipse</li>
          <li><InlineMath>{`e = 1`}</InlineMath>: Parabola</li>
          <li><InlineMath>{`e > 1`}</InlineMath>: Hyperbola</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Focus-Directrix Definition">
        <p>
          All conics can be defined as: the set of points <InlineMath>{`P`}</InlineMath> such that
          the ratio of distance to a focus <InlineMath>{`F`}</InlineMath> and distance to a
          directrix <InlineMath>{`\\ell`}</InlineMath> equals the eccentricity:
        </p>
        <MathBlock>{`\\frac{|PF|}{d(P, \\ell)} = e`}</MathBlock>
      </Callout>

      <h2>Translated Conics</h2>

      <p>
        When a conic is centered at <InlineMath>{`(h, k)`}</InlineMath> instead of the origin,
        replace <InlineMath>{`x`}</InlineMath> with <InlineMath>{`(x - h)`}</InlineMath> and <InlineMath>{`y`}</InlineMath> with <InlineMath>{`(y - k)`}</InlineMath>.
      </p>

      <Callout type="example" title="Translated Ellipse">
        <p>
          The ellipse <InlineMath>{`\\frac{(x-2)^2}{9} + \\frac{(y+1)^2}{4} = 1`}</InlineMath> has:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Center: <InlineMath>{`(2, -1)`}</InlineMath></li>
          <li>Semi-axes: <InlineMath>{`a = 3`}</InlineMath>, <InlineMath>{`b = 2`}</InlineMath></li>
          <li><InlineMath>{`c = \\sqrt{9-4} = \\sqrt{5}`}</InlineMath></li>
          <li>Foci: <InlineMath>{`(2 \\pm \\sqrt{5}, -1)`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>General Second-Degree Equation</h2>

      <Callout type="theorem" title="General Conic Equation">
        <p>The general equation of a conic section is:</p>
        <MathBlock>{`Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0`}</MathBlock>
        <p>
          The discriminant <InlineMath>{`B^2 - 4AC`}</InlineMath> determines the type (assuming a non-degenerate conic):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`B^2 - 4AC < 0`}</InlineMath>: Ellipse (or circle if <InlineMath>{`A = C`}</InlineMath> and <InlineMath>{`B = 0`}</InlineMath>)</li>
          <li><InlineMath>{`B^2 - 4AC = 0`}</InlineMath>: Parabola</li>
          <li><InlineMath>{`B^2 - 4AC > 0`}</InlineMath>: Hyperbola</li>
        </ul>
      </Callout>

      <Callout type="example" title="Identifying a Conic">
        <p>Identify: <InlineMath>{`4x^2 - 9y^2 + 16x + 18y - 29 = 0`}</InlineMath></p>
        <p><strong>Solution:</strong> Here <InlineMath>{`A = 4`}</InlineMath>, <InlineMath>{`B = 0`}</InlineMath>, <InlineMath>{`C = -9`}</InlineMath></p>
        <MathBlock>{`B^2 - 4AC = 0 - 4(4)(-9) = 144 > 0`}</MathBlock>
        <p>This is a <strong>hyperbola</strong>.</p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="info" title="Conics in Nature and Technology">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Planetary orbits:</strong> Ellipses (Kepler's first law)</li>
          <li><strong>Comets:</strong> Often parabolic or hyperbolic paths</li>
          <li><strong>Satellite dishes:</strong> Parabolic reflectors focus signals</li>
          <li><strong>Whispering galleries:</strong> Elliptical rooms focus sound</li>
          <li><strong>Navigation:</strong> LORAN uses hyperbolas for positioning</li>
        </ul>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Parabola</strong> (<InlineMath>{`e = 1`}</InlineMath>):</p>
        <p className="pl-4"><InlineMath>{`x^2 = 4py`}</InlineMath> (opens up/down) or <InlineMath>{`y^2 = 4px`}</InlineMath> (opens left/right)</p>

        <p className="mt-4"><strong>Ellipse</strong> (<InlineMath>{`0 < e < 1`}</InlineMath>):</p>
        <p className="pl-4"><InlineMath>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</InlineMath>, with <InlineMath>{`c^2 = a^2 - b^2`}</InlineMath></p>

        <p className="mt-4"><strong>Hyperbola</strong> (<InlineMath>{`e > 1`}</InlineMath>):</p>
        <p className="pl-4"><InlineMath>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</InlineMath>, with <InlineMath>{`c^2 = a^2 + b^2`}</InlineMath></p>
        <p className="pl-4">Asymptotes: <InlineMath>{`y = \\pm (b/a)x`}</InlineMath></p>

        <p className="mt-4"><strong>Discriminant test:</strong> For <InlineMath>{`Ax^2 + Bxy + Cy^2 + \\cdots = 0`}</InlineMath></p>
        <p className="pl-4"><InlineMath>{`B^2 - 4AC`}</InlineMath>: negative → ellipse, zero → parabola, positive → hyperbola</p>
      </Callout>
    </LessonLayout>
  );
}
