import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section137() {
  return (
    <LessonLayout sectionId={137}>
      <h2>Parametric Representation of a Surface</h2>

      <p>
        Surface integrals can be thought of as two-dimensional analogs of line
        integrals, where the region of integration is a surface rather than a
        curve. Before discussing surface integrals, we must agree on what we shall
        mean by a surface.
      </p>

      <h3>Ways to Describe a Surface</h3>

      <p>
        Roughly speaking, a surface is the locus of a point moving in space with
        two degrees of freedom. There are several methods for describing such a
        locus:
      </p>

      <ul>
        <li>
          <strong>Implicit representation:</strong> A set of points{' '}
          <InlineMath>(x, y, z)</InlineMath> satisfying an equation of the form{' '}
          <InlineMath>{'F(x, y, z) = 0'}</InlineMath>
        </li>
        <li>
          <strong>Explicit representation:</strong> An equation of the form{' '}
          <InlineMath>{'z = f(x, y)'}</InlineMath>
        </li>
        <li>
          <strong>Parametric representation:</strong> Three equations expressing{' '}
          <InlineMath>x</InlineMath>, <InlineMath>y</InlineMath>, and{' '}
          <InlineMath>z</InlineMath> in terms of two parameters{' '}
          <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>
        </li>
      </ul>

      <h3>Parametric Equations</h3>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>parametric surface</strong> is
        described by three equations of the form:
        <MathBlock>
          {`x = X(u, v), \\quad y = Y(u, v), \\quad z = Z(u, v)`}
        </MathBlock>
        where the point <InlineMath>(u, v)</InlineMath> varies over a connected
        region <InlineMath>T</InlineMath> in the uv-plane.
      </Callout>

      <p>
        The presence of two parameters makes it possible to transmit two degrees
        of freedom to the point <InlineMath>(x, y, z)</InlineMath>. Another way of
        describing the same idea is to say that a surface is the image of a plane
        region <InlineMath>T</InlineMath> under the mapping defined by the
        parametric equations.
      </p>

      <h3>Vector Equation</h3>

      <p>
        If we introduce the radius vector <InlineMath>{'\\mathbf{r}'}</InlineMath>{' '}
        from the origin to a general point <InlineMath>(x, y, z)</InlineMath> of
        the surface, we may combine the three parametric equations into one
        <strong> vector equation</strong>:
      </p>
      <MathBlock>
        {`\\mathbf{r}(u, v) = X(u, v)\\mathbf{i} + Y(u, v)\\mathbf{j} + Z(u, v)\\mathbf{k}, \\quad (u, v) \\in T`}
      </MathBlock>

      <h3>Example: Parametric Representation of a Sphere</h3>

      <p>
        The three equations:
      </p>
      <MathBlock>
        {`x = a \\cos u \\cos v, \\quad y = a \\sin u \\cos v, \\quad z = a \\sin v`}
      </MathBlock>

      <p>
        serve as parametric equations for a sphere of radius{' '}
        <InlineMath>a</InlineMath> and center at the origin. If we square and add
        these equations we find <InlineMath>{'x^2 + y^2 + z^2 = a^2'}</InlineMath>.
        The parameters <InlineMath>u</InlineMath> and <InlineMath>v</InlineMath>{' '}
        may be interpreted geometrically as angles related to longitude and
        latitude.
      </p>

      <p>
        If we let the point <InlineMath>(u, v)</InlineMath> vary over the
        rectangle{' '}
        <InlineMath>{'T = [0, 2\\pi] \\times [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]'}</InlineMath>,
        the points determined by these equations trace out the whole sphere.
      </p>

      <h3>Example: Parametric Representation of a Cone</h3>

      <p>
        The vector equation:
      </p>
      <MathBlock>
        {`\\mathbf{r}(u, v) = v \\sin \\alpha \\cos u \\, \\mathbf{i} + v \\sin \\alpha \\sin u \\, \\mathbf{j} + v \\cos \\alpha \\, \\mathbf{k}`}
      </MathBlock>

      <p>
        represents the right circular cone with half-vertex angle{' '}
        <InlineMath>\alpha</InlineMath>. The parameter <InlineMath>v</InlineMath>{' '}
        is the distance from the vertex to the point{' '}
        <InlineMath>(x, y, z)</InlineMath> on the cone, and{' '}
        <InlineMath>u</InlineMath> is the polar-coordinate angle.
      </p>

      <h3>Simple Parametric Surfaces</h3>

      <Callout type="info">
        <strong>Definition:</strong> If the function{' '}
        <InlineMath>{'\\mathbf{r}'}</InlineMath> is one-to-one on{' '}
        <InlineMath>T</InlineMath>, the image{' '}
        <InlineMath>{'\\mathbf{r}(T)'}</InlineMath> is called a{' '}
        <strong>simple parametric surface</strong>. In such a case, distinct
        points of <InlineMath>T</InlineMath> map onto distinct points of the
        surface.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Parametric representation is the most
        flexible method for describing surfaces, analogous to the representation
        of space curves by parametric equations. It allows us to describe complex
        surfaces that cannot be written as graphs{' '}
        <InlineMath>{'z = f(x, y)'}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
