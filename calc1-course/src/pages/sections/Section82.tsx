import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          point <MathInline>{`F`}</MathInline> (the <strong>focus</strong>) and a fixed
          line <MathInline>{`\\ell`}</MathInline> (the <strong>directrix</strong>).
        </p>
      </Callout>

      <Callout type="theorem" title="Standard Form of a Parabola">
        <p>
          A parabola with vertex at the origin and focus on the <MathInline>{`y`}</MathInline>-axis:
        </p>
        <MathBlock>{`x^2 = 4py`}</MathBlock>
        <p>
          where <MathInline>{`p`}</MathInline> is the distance from vertex to focus. The focus
          is at <MathInline>{`(0, p)`}</MathInline> and the directrix is <MathInline>{`y = -p`}</MathInline>.
        </p>
        <p>For a parabola opening along the <MathInline>{`x`}</MathInline>-axis:</p>
        <MathBlock>{`y^2 = 4px`}</MathBlock>
        <p>
          Focus at <MathInline>{`(p, 0)`}</MathInline>, directrix <MathInline>{`x = -p`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Finding Focus and Directrix">
        <p>Find the focus and directrix of <MathInline>{`x^2 = 12y`}</MathInline>.</p>
        <p><strong>Solution:</strong> Comparing with <MathInline>{`x^2 = 4py`}</MathInline>:</p>
        <MathBlock>{`4p = 12 \\implies p = 3`}</MathBlock>
        <p>Focus: <MathInline>{`(0, 3)`}</MathInline></p>
        <p>Directrix: <MathInline>{`y = -3`}</MathInline></p>
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
          An <strong>ellipse</strong> is the set of all points <MathInline>{`P`}</MathInline> such that
          the sum of distances from <MathInline>{`P`}</MathInline> to two fixed
          points <MathInline>{`F_1`}</MathInline> and <MathInline>{`F_2`}</MathInline> (the <strong>foci</strong>) is constant:
        </p>
        <MathBlock>{`|PF_1| + |PF_2| = 2a`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Standard Form of an Ellipse">
        <p>
          An ellipse centered at the origin with semi-major axis <MathInline>{`a`}</MathInline> along
          the <MathInline>{`x`}</MathInline>-axis and semi-minor axis <MathInline>{`b`}</MathInline> along
          the <MathInline>{`y`}</MathInline>-axis (<MathInline>{`a > b`}</MathInline>):
        </p>
        <MathBlock>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</MathBlock>
        <p>The foci are at <MathInline>{`(\\pm c, 0)`}</MathInline> where:</p>
        <MathBlock>{`c^2 = a^2 - b^2`}</MathBlock>
      </Callout>

      <Callout type="info" title="Key Relationships">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`a`}</MathInline> = semi-major axis (half the longer diameter)</li>
          <li><MathInline>{`b`}</MathInline> = semi-minor axis (half the shorter diameter)</li>
          <li><MathInline>{`c`}</MathInline> = distance from center to each focus</li>
          <li><strong>Relationship:</strong> <MathInline>{`a^2 = b^2 + c^2`}</MathInline></li>
          <li><strong>Eccentricity:</strong> <MathInline>{`e = c/a`}</MathInline> (measures "flatness", <MathInline>{`0 < e < 1`}</MathInline>)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Analyzing an Ellipse">
        <p>
          For the ellipse <MathInline>{`\\frac{x^2}{25} + \\frac{y^2}{9} = 1`}</MathInline>, find
          the semi-axes, foci, and eccentricity.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`a^2 = 25 \\implies a = 5, \\quad b^2 = 9 \\implies b = 3`}</MathBlock>
        <MathBlock>{`c^2 = a^2 - b^2 = 25 - 9 = 16 \\implies c = 4`}</MathBlock>
        <p>Semi-major axis: <MathInline>{`a = 5`}</MathInline> (along <MathInline>{`x`}</MathInline>-axis)</p>
        <p>Semi-minor axis: <MathInline>{`b = 3`}</MathInline> (along <MathInline>{`y`}</MathInline>-axis)</p>
        <p>Foci: <MathInline>{`(\\pm 4, 0)`}</MathInline></p>
        <p>Eccentricity: <MathInline>{`e = 4/5 = 0.8`}</MathInline></p>
      </Callout>

      <Callout type="example" title="Ellipse with Vertical Major Axis">
        <p>
          If <MathInline>{`b > a`}</MathInline>, the major axis is vertical. For <MathInline>{`\\frac{x^2}{9} + \\frac{y^2}{25} = 1`}</MathInline>:
        </p>
        <MathBlock>{`a = 3, \\; b = 5, \\; c = \\sqrt{25 - 9} = 4`}</MathBlock>
        <p>Foci: <MathInline>{`(0, \\pm 4)`}</MathInline> (on the <MathInline>{`y`}</MathInline>-axis)</p>
      </Callout>

      <h2>Hyperbolas</h2>

      <Callout type="definition" title="Hyperbola">
        <p>
          A <strong>hyperbola</strong> is the set of all points <MathInline>{`P`}</MathInline> such that
          the absolute difference of distances from <MathInline>{`P`}</MathInline> to two fixed
          points <MathInline>{`F_1`}</MathInline> and <MathInline>{`F_2`}</MathInline> (the <strong>foci</strong>) is constant:
        </p>
        <MathBlock>{`||PF_1| - |PF_2|| = 2a`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Standard Form of a Hyperbola">
        <p>A hyperbola centered at the origin with transverse axis along the <MathInline>{`x`}</MathInline>-axis:</p>
        <MathBlock>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</MathBlock>
        <p>The foci are at <MathInline>{`(\\pm c, 0)`}</MathInline> where:</p>
        <MathBlock>{`c^2 = a^2 + b^2`}</MathBlock>
        <p>The asymptotes are the lines:</p>
        <MathBlock>{`y = \\pm \\frac{b}{a}x`}</MathBlock>
      </Callout>

      <Callout type="info" title="Key Relationships for Hyperbolas">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`a`}</MathInline> = semi-transverse axis (vertex to center distance)</li>
          <li><MathInline>{`b`}</MathInline> = semi-conjugate axis</li>
          <li><MathInline>{`c`}</MathInline> = distance from center to each focus</li>
          <li><strong>Relationship:</strong> <MathInline>{`c^2 = a^2 + b^2`}</MathInline> (note the + sign!)</li>
          <li><strong>Eccentricity:</strong> <MathInline>{`e = c/a > 1`}</MathInline></li>
          <li>Vertices at <MathInline>{`(\\pm a, 0)`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Analyzing a Hyperbola">
        <p>
          For <MathInline>{`\\frac{x^2}{16} - \\frac{y^2}{9} = 1`}</MathInline>, find vertices, foci, and asymptotes.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`a^2 = 16 \\implies a = 4, \\quad b^2 = 9 \\implies b = 3`}</MathBlock>
        <MathBlock>{`c^2 = 16 + 9 = 25 \\implies c = 5`}</MathBlock>
        <p>Vertices: <MathInline>{`(\\pm 4, 0)`}</MathInline></p>
        <p>Foci: <MathInline>{`(\\pm 5, 0)`}</MathInline></p>
        <p>Asymptotes: <MathInline>{`y = \\pm \\frac{3}{4}x`}</MathInline></p>
        <p>Eccentricity: <MathInline>{`e = 5/4 = 1.25`}</MathInline></p>
      </Callout>

      <Callout type="theorem" title="Vertical Transverse Axis">
        <p>If the transverse axis is along the <MathInline>{`y`}</MathInline>-axis:</p>
        <MathBlock>{`\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1`}</MathBlock>
        <p>Vertices at <MathInline>{`(0, \\pm a)`}</MathInline>, foci at <MathInline>{`(0, \\pm c)`}</MathInline>, asymptotes <MathInline>{`y = \\pm \\frac{a}{b}x`}</MathInline></p>
      </Callout>

      <h2>Eccentricity: A Unified View</h2>

      <Callout type="theorem" title="Eccentricity and Conic Type">
        <p>The eccentricity <MathInline>{`e`}</MathInline> determines the type of conic:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`e = 0`}</MathInline>: Circle</li>
          <li><MathInline>{`0 < e < 1`}</MathInline>: Ellipse</li>
          <li><MathInline>{`e = 1`}</MathInline>: Parabola</li>
          <li><MathInline>{`e > 1`}</MathInline>: Hyperbola</li>
        </ul>
      </Callout>

      <Callout type="definition" title="Focus-Directrix Definition">
        <p>
          All conics can be defined as: the set of points <MathInline>{`P`}</MathInline> such that
          the ratio of distance to a focus <MathInline>{`F`}</MathInline> and distance to a
          directrix <MathInline>{`\\ell`}</MathInline> equals the eccentricity:
        </p>
        <MathBlock>{`\\frac{|PF|}{d(P, \\ell)} = e`}</MathBlock>
      </Callout>

      <h2>Translated Conics</h2>

      <p>
        When a conic is centered at <MathInline>{`(h, k)`}</MathInline> instead of the origin,
        replace <MathInline>{`x`}</MathInline> with <MathInline>{`(x - h)`}</MathInline> and <MathInline>{`y`}</MathInline> with <MathInline>{`(y - k)`}</MathInline>.
      </p>

      <Callout type="example" title="Translated Ellipse">
        <p>
          The ellipse <MathInline>{`\\frac{(x-2)^2}{9} + \\frac{(y+1)^2}{4} = 1`}</MathInline> has:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Center: <MathInline>{`(2, -1)`}</MathInline></li>
          <li>Semi-axes: <MathInline>{`a = 3`}</MathInline>, <MathInline>{`b = 2`}</MathInline></li>
          <li><MathInline>{`c = \\sqrt{9-4} = \\sqrt{5}`}</MathInline></li>
          <li>Foci: <MathInline>{`(2 \\pm \\sqrt{5}, -1)`}</MathInline></li>
        </ul>
      </Callout>

      <h2>General Second-Degree Equation</h2>

      <Callout type="theorem" title="General Conic Equation">
        <p>The general equation of a conic section is:</p>
        <MathBlock>{`Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0`}</MathBlock>
        <p>
          The discriminant <MathInline>{`B^2 - 4AC`}</MathInline> determines the type (assuming a non-degenerate conic):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`B^2 - 4AC < 0`}</MathInline>: Ellipse (or circle if <MathInline>{`A = C`}</MathInline> and <MathInline>{`B = 0`}</MathInline>)</li>
          <li><MathInline>{`B^2 - 4AC = 0`}</MathInline>: Parabola</li>
          <li><MathInline>{`B^2 - 4AC > 0`}</MathInline>: Hyperbola</li>
        </ul>
      </Callout>

      <Callout type="example" title="Identifying a Conic">
        <p>Identify: <MathInline>{`4x^2 - 9y^2 + 16x + 18y - 29 = 0`}</MathInline></p>
        <p><strong>Solution:</strong> Here <MathInline>{`A = 4`}</MathInline>, <MathInline>{`B = 0`}</MathInline>, <MathInline>{`C = -9`}</MathInline></p>
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
        <p><strong>Parabola</strong> (<MathInline>{`e = 1`}</MathInline>):</p>
        <p className="pl-4"><MathInline>{`x^2 = 4py`}</MathInline> (opens up/down) or <MathInline>{`y^2 = 4px`}</MathInline> (opens left/right)</p>

        <p className="mt-4"><strong>Ellipse</strong> (<MathInline>{`0 < e < 1`}</MathInline>):</p>
        <p className="pl-4"><MathInline>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</MathInline>, with <MathInline>{`c^2 = a^2 - b^2`}</MathInline></p>

        <p className="mt-4"><strong>Hyperbola</strong> (<MathInline>{`e > 1`}</MathInline>):</p>
        <p className="pl-4"><MathInline>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</MathInline>, with <MathInline>{`c^2 = a^2 + b^2`}</MathInline></p>
        <p className="pl-4">Asymptotes: <MathInline>{`y = \\pm (b/a)x`}</MathInline></p>

        <p className="mt-4"><strong>Discriminant test:</strong> For <MathInline>{`Ax^2 + Bxy + Cy^2 + \\cdots = 0`}</MathInline></p>
        <p className="pl-4"><MathInline>{`B^2 - 4AC`}</MathInline>: negative → ellipse, zero → parabola, positive → hyperbola</p>
      </Callout>
    </LessonLayout>
  );
}
