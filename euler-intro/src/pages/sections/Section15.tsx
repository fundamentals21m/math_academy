import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Chapter XVI: Finding Curves from Ordinates</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput XVI: De inventione Curvarum ex datis Ordinatarum proprietatibus
      </p>

      <p>
        A powerful problem in the study of curves: given a property of the ordinates,
        what curve satisfies that property? Euler develops methods for <em>reverse
        engineering</em>—finding the equation of a curve from conditions it must satisfy.
      </p>

      <Callout type="info">
        <strong>The Inverse Problem:</strong> Instead of starting with an equation and
        deducing properties, we start with a desired property and seek the equation.
        This is fundamental to applications in physics and engineering.
      </Callout>

      <h2>Curves from Sum Conditions</h2>

      <p>
        Suppose we want a curve where, for any abscissa <InlineMath>x</InlineMath>,
        the sum of the ordinates satisfies a given relation:
      </p>

      <MathBlock>{`y_1 + y_2 + \\cdots + y_n = g(x)`}</MathBlock>

      <p>
        By Vieta's formulas, if the curve has equation:
      </p>

      <MathBlock>{`a_n(x)y^n + a_{n-1}(x)y^{n-1} + \\cdots + a_0(x) = 0`}</MathBlock>

      <p>
        then the sum of roots equals <InlineMath>-a_{n-1}(x)/a_n(x)</InlineMath>.
        Setting this equal to <InlineMath>g(x)</InlineMath> constrains the coefficients.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Sum Equals Zero</p>
        <p>
          Find a conic where <InlineMath>y_1 + y_2 = 0</InlineMath> for all <InlineMath>x</InlineMath>.
        </p>
        <p className="mt-2">
          This means <InlineMath>-(\beta x + \varepsilon)/\gamma = 0</InlineMath>, so
          <InlineMath>\beta = \varepsilon = 0</InlineMath>.
        </p>
        <MathBlock>{`\\alpha x^2 + \\gamma y^2 + \\delta x + \\zeta = 0`}</MathBlock>
        <p className="mt-2">
          These are ellipses/hyperbolas with the <InlineMath>x</InlineMath>-axis as
          a principal axis—symmetric about the <InlineMath>x</InlineMath>-axis.
        </p>
      </div>

      <h2>Curves from Product Conditions</h2>

      <p>
        We can also specify the product of ordinates:
      </p>

      <MathBlock>{`y_1 \\cdot y_2 \\cdots y_n = h(x)`}</MathBlock>

      <p>
        By Vieta, this equals <InlineMath>(-1)^n a_0(x)/a_n(x)</InlineMath>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Constant Product</p>
        <p>
          Find a curve where <InlineMath>y_1 \cdot y_2 = k^2</InlineMath> (constant).
        </p>
        <MathBlock>{`\\gamma y^2 + (\\beta x + \\varepsilon)y + (\\alpha x^2 + \\delta x + \\zeta) = 0`}</MathBlock>
        <p className="mt-2">
          Product: <InlineMath>(\alpha x^2 + \delta x + \zeta)/\gamma = k^2</InlineMath>
        </p>
        <p>
          This requires <InlineMath>\alpha = \delta = 0</InlineMath> and <InlineMath>\zeta/\gamma = k^2</InlineMath>.
        </p>
        <p className="mt-2">
          Result: <InlineMath>y^2 + (\beta x + \varepsilon)y + k^2 = 0</InlineMath> (a degenerate conic).
        </p>
      </div>

      <h2>The Quadrature Problem</h2>

      <p>
        A classic problem: find a curve whose area under the curve from 0 to <InlineMath>x</InlineMath>
        equals a given function <InlineMath>A(x)</InlineMath>.
      </p>

      <MathBlock>{`\\int_0^x y \\, dx = A(x)`}</MathBlock>

      <p>
        By differentiation:
      </p>

      <MathBlock>{`y = \\frac{dA}{dx} = A'(x)`}</MathBlock>

      <p>
        The curve is simply the derivative of the area function!
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Examples</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="pb-2">Area Function</th>
              <th className="pb-2">Curve</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2"><InlineMath>A(x) = x^2/2</InlineMath></td>
              <td><InlineMath>y = x</InlineMath> (line)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><InlineMath>A(x) = x^3/3</InlineMath></td>
              <td><InlineMath>y = x^2</InlineMath> (parabola)</td>
            </tr>
            <tr>
              <td className="py-2"><InlineMath>A(x) = e^x - 1</InlineMath></td>
              <td><InlineMath>y = e^x</InlineMath> (exponential)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Arc Length Conditions</h2>

      <p>
        Find a curve whose arc length from 0 to <InlineMath>x</InlineMath> equals
        <InlineMath>s(x)</InlineMath>:
      </p>

      <MathBlock>{`\\int_0^x \\sqrt{1 + (y')^2} \\, dx = s(x)`}</MathBlock>

      <p>
        Differentiating: <InlineMath>{`\\sqrt{1 + (y')^2} = s'(x)`}</InlineMath>
      </p>

      <MathBlock>{`y' = \\sqrt{(s')^2 - 1}`}</MathBlock>

      <p>
        Integrating gives <InlineMath>y</InlineMath>. This leads to differential
        equations for the curve.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: Arc Length Equals <InlineMath>2x</InlineMath></p>
        <p className="mt-2">
          If <InlineMath>s(x) = 2x</InlineMath>, then <InlineMath>s'(x) = 2</InlineMath>.
        </p>
        <MathBlock>{`y' = \\sqrt{4 - 1} = \\sqrt{3}`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>y = \sqrt{3}x + C</InlineMath>—a line making angle 60° with the axis.
        </p>
      </div>

      <h2>Curves with Given Tangent Property</h2>

      <p>
        Suppose we want curves where the tangent at each point satisfies a condition.
        For instance, if the tangent always passes through a fixed point:
      </p>

      <Callout type="success">
        <strong>Tractrix:</strong> The curve where the tangent segment to the
        <InlineMath>x</InlineMath>-axis has constant length <InlineMath>a</InlineMath>
        is the <strong>tractrix</strong>:
        <MathBlock>{`x = a\\left(\\text{sech}^{-1}\\frac{y}{a} - \\sqrt{1 - \\frac{y^2}{a^2}}\\right)`}</MathBlock>
      </Callout>

      <h2>General Method</h2>

      <p>
        Euler's general approach to inverse problems:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li>Express the given condition mathematically</li>
        <li>Use calculus or algebraic relations to derive a differential equation</li>
        <li>Solve the differential equation (if possible)</li>
        <li>Verify the solution satisfies the original condition</li>
      </ol>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Finding curves from ordinate properties is
        an inverse problem that uses Vieta's formulas (for algebraic conditions) or
        calculus (for integral/differential conditions). Sum and product conditions
        constrain polynomial coefficients. Area, arc length, and tangent conditions
        lead to differential equations. This reverse approach is essential for physics,
        where curves must satisfy physical constraints.
      </Callout>
    </LessonLayout>
  );
}
