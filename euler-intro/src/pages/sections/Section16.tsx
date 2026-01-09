import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>Chapter XVII: Finding Curves from Other Properties</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XVII: De inventione Curvarum ex aliis proprietatibus
      </p>

      <p>
        Continuing the inverse problem theme, Euler explores how to find curves
        satisfying geometric conditions beyond ordinate relations—conditions involving
        tangents, normals, radii of curvature, and other differential properties.
      </p>

      <Callout type="info">
        <strong>The Power of Calculus:</strong> These problems typically require
        differential equations. Euler's mastery of calculus allows him to solve
        problems that would have been impossible for earlier geometers.
      </Callout>

      <h2>Curves from Tangent Conditions</h2>

      <p>
        The tangent line to <InlineMath>y = f(x)</InlineMath> at point <InlineMath>(x_0, y_0)</InlineMath>:
      </p>

      <MathBlock>{`Y - y_0 = f'(x_0)(X - x_0)`}</MathBlock>

      <h3>Subtangent</h3>
      <p>
        The <strong>subtangent</strong> is the horizontal projection from the point
        to where the tangent meets the axis:
      </p>

      <MathBlock>{`\\text{Subtangent} = \\frac{y}{y'}`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Constant Subtangent</p>
        <p>
          Find curves where the subtangent equals a constant <InlineMath>a</InlineMath>.
        </p>
        <MathBlock>{`\\frac{y}{y'} = a \\implies y' = \\frac{y}{a} \\implies \\frac{dy}{y} = \\frac{dx}{a}`}</MathBlock>
        <p className="mt-2">
          Integrating: <InlineMath>\ln y = x/a + C</InlineMath>, so:
        </p>
        <MathBlock>{`y = Ce^{x/a}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          The exponential curve has constant subtangent!
        </p>
      </div>

      <h3>Subnormal</h3>
      <p>
        The <strong>subnormal</strong> is the horizontal projection from the foot
        of the normal to the point:
      </p>

      <MathBlock>{`\\text{Subnormal} = y \\cdot y'`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Constant Subnormal</p>
        <p>
          If subnormal = <InlineMath>2p</InlineMath> (constant):
        </p>
        <MathBlock>{`yy' = 2p \\implies y \\, dy = 2p \\, dx`}</MathBlock>
        <p className="mt-2">
          Integrating: <InlineMath>y^2/2 = 2px + C</InlineMath>, giving:
        </p>
        <MathBlock>{`y^2 = 4px + C`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          The parabola has constant subnormal!
        </p>
      </div>

      <h2>Curves from Normal Conditions</h2>

      <p>
        The normal line at <InlineMath>(x_0, y_0)</InlineMath> is perpendicular to the tangent:
      </p>

      <MathBlock>{`Y - y_0 = -\\frac{1}{f'(x_0)}(X - x_0)`}</MathBlock>

      <p>
        The length of normal from point to axis:
      </p>

      <MathBlock>{`\\text{Normal length} = |y|\\sqrt{1 + (y')^2}`}</MathBlock>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Constant Normal Length</h3>
        <p className="mb-2">
          Curves where normal length = <InlineMath>a</InlineMath>:
        </p>
        <MathBlock>{`y^2(1 + (y')^2) = a^2`}</MathBlock>
        <p className="mt-2">
          This differential equation's solution includes circles of radius <InlineMath>a</InlineMath>!
        </p>
      </div>

      <h2>The Isochrone Problem</h2>

      <p>
        Find a curve along which a bead sliding under gravity reaches the bottom
        in the same time regardless of starting point.
      </p>

      <Callout type="success">
        <strong>Solution:</strong> The isochrone (tautochrone) is the <strong>cycloid</strong>.
        A bead sliding without friction on a cycloid always takes the same time to
        reach the lowest point—a remarkable property discovered by Huygens.
      </Callout>

      <MathBlock>{`x = a(\\theta - \\sin\\theta), \\quad y = a(1 - \\cos\\theta)`}</MathBlock>

      <h2>The Brachistochrone Problem</h2>

      <p>
        Find the curve of <em>fastest descent</em> under gravity from point
        <InlineMath>A</InlineMath> to point <InlineMath>B</InlineMath>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Historical Note</p>
        <p>
          Johann Bernoulli posed this challenge in 1696. Solutions came from Newton,
          Leibniz, L'Hôpital, Jakob Bernoulli, and Johann himself. The answer is
          again the <strong>cycloid</strong>—a stunning coincidence that the curve
          of equal time is also the curve of least time.
        </p>
      </div>

      <h2>Curves with Given Curvature</h2>

      <p>
        The <strong>radius of curvature</strong> at a point is:
      </p>

      <MathBlock>{`R = \\frac{(1 + (y')^2)^{3/2}}{|y''|}`}</MathBlock>

      <p>
        Specifying how <InlineMath>R</InlineMath> depends on position yields a
        second-order differential equation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Constant Curvature</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>R = a</InlineMath> (constant) gives circles:
          </p>
          <MathBlock>{`(x-h)^2 + (y-k)^2 = a^2`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Curvature = Arc Length</h4>
          <p className="text-dark-300 text-sm">
            <InlineMath>R = s</InlineMath> gives the clothoid (Euler spiral).
          </p>
        </div>
      </div>

      <h2>The Catenary Revisited</h2>

      <p>
        The catenary can be characterized by the condition: the radius of curvature
        at each point equals the length of the normal to the axis.
      </p>

      <MathBlock>{`R = y\\sqrt{1 + (y')^2}`}</MathBlock>

      <p>
        Solving this differential equation yields:
      </p>

      <MathBlock>{`y = a\\cosh\\frac{x}{a}`}</MathBlock>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Curves can be determined from conditions
        on tangents (constant subtangent → exponential), normals (constant subnormal
        → parabola), curvature (constant → circle), or optimization principles
        (fastest descent → cycloid). Each condition translates to a differential
        equation whose solution gives the curve. This approach connects geometry
        to physics: the brachistochrone and catenary problems have physical origins.
      </Callout>
    </LessonLayout>
  );
}
