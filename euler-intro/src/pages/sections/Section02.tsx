import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Chapter III: Algebraic Curves by Order</h2>
      <p className="text-lg text-dark-300 italic mb-6">
        Caput III: De divisione Linearum curvarum in ordines
      </p>

      <p>
        Having established how curves relate to equations and how coordinate systems can be
        transformed, Euler now develops a systematic classification of curves based on the
        <strong> degree</strong> (or <strong>order</strong>) of their defining equations.
      </p>

      <Callout type="info">
        <strong>The Principle:</strong> Since coordinate transformations preserve the degree
        of an equation, the degree provides a natural and invariant way to classify curves.
        All curves of the same degree share fundamental properties that distinguish them
        from curves of other degrees.
      </Callout>

      <h2>Definition of Order</h2>

      <p>
        The <strong>order</strong> of an algebraic curve is the highest total degree of any
        term in its equation, when the equation is cleared of fractions and radicals.
      </p>

      <MathBlock>{`\\text{Order} = \\max(\\text{degree of each term in } x \\text{ and } y)`}</MathBlock>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Examples</h3>
        <ul className="space-y-3">
          <li>
            <InlineMath>{`3x + 2y - 5 = 0`}</InlineMath> is of <strong>first order</strong>
            (straight line)
          </li>
          <li>
            <InlineMath>{`x^2 + y^2 = r^2`}</InlineMath> is of <strong>second order</strong>
            (circle)
          </li>
          <li>
            <InlineMath>{`y^2 = x^3 - x`}</InlineMath> is of <strong>third order</strong>
            (cubic curve)
          </li>
          <li>
            <InlineMath>{`x^4 + y^4 = 1`}</InlineMath> is of <strong>fourth order</strong>
            (quartic curve)
          </li>
        </ul>
      </div>

      <h2>The General Equation of Order n</h2>

      <p>
        An algebraic curve of order <InlineMath>n</InlineMath> has a general equation containing
        all possible terms of degree <InlineMath>n</InlineMath> or less:
      </p>

      <MathBlock>{`\\sum_{i+j \\leq n} a_{ij} x^i y^j = 0`}</MathBlock>

      <p>
        The number of coefficients in such an equation is:
      </p>

      <MathBlock>{`\\frac{(n+1)(n+2)}{2}`}</MathBlock>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Order 1</h4>
          <p className="text-dark-300 text-sm mb-2">3 coefficients</p>
          <MathBlock>{`ax + by + c = 0`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Order 2</h4>
          <p className="text-dark-300 text-sm mb-2">6 coefficients</p>
          <MathBlock>{`ax^2 + bxy + cy^2`}</MathBlock>
          <MathBlock>{`+ dx + ey + f = 0`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-purple-400 font-semibold mb-2">Order 3</h4>
          <p className="text-dark-300 text-sm mb-2">10 coefficients</p>
          <p className="text-dark-400 text-sm">Contains all terms up to <InlineMath>x^3, y^3, x^2y, xy^2</InlineMath></p>
        </div>
      </div>

      <h2>First-Order Curves: Straight Lines</h2>

      <p>
        As established in the previous chapter, curves of the first order are precisely
        the <strong>straight lines</strong>. The general equation:
      </p>

      <MathBlock>{`ax + by + c = 0`}</MathBlock>

      <p>
        represents a line for any choice of constants <InlineMath>a, b, c</InlineMath>
        (not both <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> zero).
        Since every first-degree equation represents a line, and lines have degree one,
        we have a perfect correspondence.
      </p>

      <Callout type="success">
        <strong>Theorem:</strong> All curves of the first order are straight lines,
        and all straight lines are curves of the first order.
      </Callout>

      <h2>Second-Order Curves: Conic Sections</h2>

      <p>
        Curves of the second order are defined by equations of degree 2:
      </p>

      <MathBlock>{`\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0`}</MathBlock>

      <p>
        These curves are called <strong>conic sections</strong> because they can be obtained
        by cutting a cone with a plane. The family includes:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Circle:</strong> <InlineMath>{`x^2 + y^2 = r^2`}</InlineMath></li>
        <li><strong>Ellipse:</strong> <InlineMath>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}</InlineMath></li>
        <li><strong>Parabola:</strong> <InlineMath>{`y^2 = 4px`}</InlineMath></li>
        <li><strong>Hyperbola:</strong> <InlineMath>{`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}</InlineMath></li>
      </ul>

      <p>
        We will study these extensively in the following chapters.
      </p>

      <h2>Higher-Order Curves</h2>

      <p>
        As the order increases, the variety and complexity of curves grows dramatically:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-primary-400 mb-4">Curves by Order</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="pb-2">Order</th>
              <th className="pb-2">Name</th>
              <th className="pb-2">Coefficients</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-2">1</td>
              <td>Lines</td>
              <td>3</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">2</td>
              <td>Conics</td>
              <td>6</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">3</td>
              <td>Cubic curves</td>
              <td>10</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">4</td>
              <td>Quartic curves</td>
              <td>15</td>
            </tr>
            <tr>
              <td className="py-2">n</td>
              <td>n-th order curves</td>
              <td><InlineMath>{`\\frac{(n+1)(n+2)}{2}`}</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Reducible vs. Irreducible Curves</h2>

      <p>
        An important distinction: some equations can be factored into lower-degree parts.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: A Reducible Curve</p>
        <p>
          The equation <InlineMath>{`xy = 0`}</InlineMath> is second-degree, but it factors as:
        </p>
        <MathBlock>{`x \\cdot y = 0`}</MathBlock>
        <p className="mt-2">
          This represents the union of two lines (<InlineMath>x = 0</InlineMath> and
          <InlineMath>y = 0</InlineMath>), not a genuine second-order curve.
        </p>
      </div>

      <p>
        A curve is <strong>irreducible</strong> if its equation cannot be factored into
        lower-degree polynomials. True curves of order <InlineMath>n</InlineMath> are
        those whose equations are irreducible.
      </p>

      <Callout type="warning">
        <strong>Caution:</strong> When classifying curves by order, we consider only
        irreducible curves. A product of two lines counts as "two first-order curves,"
        not one second-order curve.
      </Callout>

      <h2>Transcendental Curves</h2>

      <p>
        Not all curves are algebraic. <strong>Transcendental curves</strong> are defined
        by equations involving non-algebraic functions:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Exponential: <InlineMath>{`y = e^x`}</InlineMath></li>
        <li>Logarithmic: <InlineMath>{`y = \\ln x`}</InlineMath></li>
        <li>Trigonometric: <InlineMath>{`y = \\sin x`}</InlineMath></li>
      </ul>

      <p>
        These curves cannot be classified by order in the same way as algebraic curves.
        We will study them in later chapters.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Algebraic curves are classified by the degree
        of their defining equations. First-order curves are lines, second-order curves
        are conics, and higher orders yield increasingly complex curves. This classification
        is invariant under coordinate transformations, making it a fundamental organizing
        principle for the study of curves.
      </Callout>
    </LessonLayout>
  );
}
