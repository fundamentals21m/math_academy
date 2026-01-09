import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Chapter II: Transformation of Coordinates</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput II: De permutatione Coordinatarum
      </p>

      <p>
        Having established the connection between functions and curves in Chapter I, Euler now
        addresses a fundamental question: how does the equation of a curve change when we choose
        a different coordinate system? This chapter develops the theory of <strong>coordinate
        transformations</strong>.
      </p>

      <Callout type="info">
        <strong>Why This Matters:</strong> The same curve can be described by many different
        equations, depending on where we place the origin and how we orient the axes. Understanding
        these transformations allows us to choose coordinates that simplify our analysis.
      </Callout>

      <h2>Translation of the Origin</h2>

      <p>
        Suppose we have a curve defined by an equation relating abscissa <InlineMath>x</InlineMath>
        and ordinate <InlineMath>y</InlineMath> with respect to an axis <InlineMath>RS</InlineMath>
        and origin <InlineMath>A</InlineMath>. Now we wish to move the origin to a new point
        <InlineMath>D</InlineMath> while keeping the axis parallel.
      </p>

      <p>
        Let the new origin <InlineMath>D</InlineMath> be located at position <InlineMath>(f, g)</InlineMath>
        in the old system. If we denote the new coordinates as <InlineMath>t</InlineMath> and
        <InlineMath>u</InlineMath>, the transformation is:
      </p>

      <MathBlock>{`x = t + f`}</MathBlock>
      <MathBlock>{`y = u + g`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Translating a Parabola</p>
        <p>
          Consider the parabola <InlineMath>{`y^2 = ax`}</InlineMath> with vertex at the origin.
          If we translate the origin to <InlineMath>(f, g)</InlineMath>, substituting gives:
        </p>
        <MathBlock>{`(u + g)^2 = a(t + f)`}</MathBlock>
        <p className="mt-2">
          Expanding: <InlineMath>{`u^2 + 2gu + g^2 = at + af`}</InlineMath>
        </p>
        <p>
          The parabola's equation in the new coordinates is more complex, showing how
          the choice of origin affects the equation's form.
        </p>
      </div>

      <h2>Rotation of Axes</h2>

      <p>
        A more profound transformation occurs when we rotate the axes while keeping the origin
        fixed. Let the new axis <InlineMath>rs</InlineMath> make an angle <InlineMath>\phi</InlineMath>
        with the original axis <InlineMath>RS</InlineMath>.
      </p>

      <p>
        Writing <InlineMath>m = \sin\phi</InlineMath> and <InlineMath>n = \cos\phi</InlineMath>
        (noting that <InlineMath>{`m^2 + n^2 = 1`}</InlineMath>), the transformation equations are:
      </p>

      <MathBlock>{`x = nt - mu`}</MathBlock>
      <MathBlock>{`y = mt + nu`}</MathBlock>

      <p>And inversely:</p>

      <MathBlock>{`t = nx + my`}</MathBlock>
      <MathBlock>{`u = -mx + ny`}</MathBlock>

      <Callout type="success">
        <strong>Key Property:</strong> Notice that <InlineMath>{`m^2 + n^2 = 1`}</InlineMath> ensures
        that distances are preserved under rotation. This is the condition for an
        <strong> orthogonal transformation</strong>.
      </Callout>

      <h2>The General Coordinate Transformation</h2>

      <p>
        Combining both translation and rotation, we can transform from any coordinate system
        to any other. If the new origin is at <InlineMath>(f, g)</InlineMath> and the new
        axis makes angle <InlineMath>\phi</InlineMath> with the old, then:
      </p>

      <MathBlock>{`x = mt + nu - f`}</MathBlock>
      <MathBlock>{`y = nt - mu - g`}</MathBlock>

      <p>
        where <InlineMath>m = \sin\phi</InlineMath> and <InlineMath>n = \cos\phi</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">The General Equation</h3>
        <p className="mb-4">
          This transformation is called the <strong>general equation</strong> for a curve
          because it encompasses all possible coordinate systems in the plane.
        </p>
        <p>
          By varying the parameters <InlineMath>f</InlineMath>, <InlineMath>g</InlineMath>,
          <InlineMath>m</InlineMath>, and <InlineMath>n</InlineMath> (subject to
          <InlineMath>{`m^2 + n^2 = 1`}</InlineMath>), we can obtain every possible
          equation for the same curve.
        </p>
      </div>

      <h2>Determining if Two Equations Represent the Same Curve</h2>

      <p>
        A natural question arises: given two different equations, how can we tell if they
        represent the same curve or different curves?
      </p>

      <p>
        Euler provides the answer: two equations represent the same curve if and only if
        one can be transformed into the other through the general coordinate transformation.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Worked Example</p>
        <p>
          Euler shows that these two equations represent the same curve:
        </p>
        <MathBlock>{`y^2 - ax = 0`}</MathBlock>
        <MathBlock>{`16u^2 - 24tu + 9t^2 - 55au + 10at = 0`}</MathBlock>
        <p className="mt-2">
          By finding appropriate values <InlineMath>{`m = \\frac{3}{5}`}</InlineMath>,
          <InlineMath>{`n = \\frac{4}{5}`}</InlineMath>, <InlineMath>{`g = \\frac{a}{4}`}</InlineMath>,
          and <InlineMath>{`f = -\\frac{a}{4}`}</InlineMath>, the second equation transforms
          into the first. Both represent the same parabola!
        </p>
      </div>

      <h2>The Order of an Equation</h2>

      <p>
        A crucial observation: coordinate transformations <strong>preserve the order</strong>
        (degree) of an equation. If an equation is of degree <InlineMath>n</InlineMath> in
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>, the transformed equation
        will also be of degree <InlineMath>n</InlineMath> in <InlineMath>t</InlineMath>
        and <InlineMath>u</InlineMath>.
      </p>

      <Callout type="warning">
        <strong>Important Consequence:</strong> If two equations have different degrees
        (different orders), they <em>must</em> represent different curves. There is no
        transformation that can change a first-degree equation into a second-degree one,
        or vice versa.
      </Callout>

      <h2>Equations of Straight Lines</h2>

      <p>
        Euler applies this theory to the simplest case: straight lines. A line parallel
        to the axis has equation <InlineMath>y = a</InlineMath> (constant ordinate).
      </p>

      <p>
        Transforming this through a general coordinate change yields:
      </p>

      <MathBlock>{`nu - mt - g - a = 0`}</MathBlock>

      <p>
        Multiplying by a constant <InlineMath>k</InlineMath> and setting
        <InlineMath>{`nk = \\alpha`}</InlineMath>, <InlineMath>{`-mk = \\beta`}</InlineMath>,
        and <InlineMath>{`-(g+a)k = -b`}</InlineMath>, we obtain:
      </p>

      <MathBlock>{`\\alpha t + \\beta u + b = 0`}</MathBlock>

      <p>
        This is the <strong>general equation of a straight line</strong>. Since it is
        first-degree, any first-degree equation represents a straight line—never a curved line.
      </p>

      <h2>Oblique Coordinates</h2>

      <p>
        So far, we have assumed the ordinates are perpendicular to the axis (orthogonal
        coordinates). Euler now considers <strong>oblique coordinates</strong>, where the
        ordinate makes an arbitrary angle <InlineMath>\phi</InlineMath> with the axis.
      </p>

      <p>
        If <InlineMath>\mu = \sin\phi</InlineMath> and <InlineMath>\nu = \cos\phi</InlineMath>,
        then to convert from oblique coordinates <InlineMath>(t, u)</InlineMath> to rectangular
        coordinates <InlineMath>(x, y)</InlineMath>:
      </p>

      <MathBlock>{`y = \\mu u`}</MathBlock>
      <MathBlock>{`x = t + \\nu u`}</MathBlock>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The equation of a curve depends on our choice of
        coordinate system. By translating the origin and rotating the axes, we can transform
        any equation into infinitely many equivalent forms. This flexibility allows us to
        choose coordinates that simplify analysis—a technique we will use extensively when
        studying conic sections and higher-order curves.
      </Callout>
    </LessonLayout>
  );
}
