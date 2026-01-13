import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { LagrangeInterpolator } from '@/components/visualizations/LagrangeInterpolator';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Lagrange Interpolation</h2>

      <p>
        Given <InlineMath>{`t`}</InlineMath> points on a polynomial, how do we find the polynomial
        itself? Lagrange interpolation provides an elegant answer.
      </p>

      <h3>The Goal</h3>

      <p>
        Given <InlineMath>{`t`}</InlineMath> points <InlineMath>{`(x_1, y_1), (x_2, y_2), \\ldots, (x_t, y_t)`}</InlineMath>,
        find the unique polynomial <InlineMath>{`f(x)`}</InlineMath> of degree at most
        <InlineMath>{`t-1`}</InlineMath> passing through all of them.
      </p>

      <h3>Lagrange Basis Polynomials</h3>

      <Definition title="Lagrange Basis Polynomial">
        <p>
          For point <InlineMath>{`(x_i, y_i)`}</InlineMath>, define:
        </p>
        <MathBlock>
          {`L_i(x) = \\prod_{j=1, j \\neq i}^{t} \\frac{x - x_j}{x_i - x_j}`}
        </MathBlock>
      </Definition>

      <p>
        The key properties of <InlineMath>{`L_i(x)`}</InlineMath>:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">At its own point</h4>
          <MathBlock>{`L_i(x_i) = 1`}</MathBlock>
          <p className="text-sm mt-2">
            All terms in the product become <InlineMath>{`\\frac{x_i - x_j}{x_i - x_j} = 1`}</InlineMath>
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">At other points</h4>
          <MathBlock>{`L_i(x_j) = 0 \\text{ for } j \\neq i`}</MathBlock>
          <p className="text-sm mt-2">
            One term in the product becomes <InlineMath>{`\\frac{x_j - x_j}{x_i - x_j} = 0`}</InlineMath>
          </p>
        </div>
      </div>

      <h3>The Interpolation Formula</h3>

      <Theorem title="Lagrange Interpolation">
        <p>
          The unique polynomial passing through <InlineMath>{`(x_1, y_1), \\ldots, (x_t, y_t)`}</InlineMath> is:
        </p>
        <MathBlock>
          {`f(x) = \\sum_{i=1}^{t} y_i \\cdot L_i(x)`}
        </MathBlock>
      </Theorem>

      <p>
        Each basis polynomial <InlineMath>{`L_i(x)`}</InlineMath> "picks out" just the contribution
        from point <InlineMath>{`i`}</InlineMath>, weighted by <InlineMath>{`y_i`}</InlineMath>.
      </p>

      <h3>Recovering the Secret</h3>

      <p>
        To recover <InlineMath>{`s = f(0)`}</InlineMath>, we evaluate at <InlineMath>{`x = 0`}</InlineMath>:
      </p>

      <MathBlock>
        {`s = f(0) = \\sum_{i=1}^{t} y_i \\cdot L_i(0)`}
      </MathBlock>

      <Definition title="Lagrange Coefficients">
        <p>
          The <strong>Lagrange coefficients</strong> are the basis polynomials evaluated at 0:
        </p>
        <MathBlock>
          {`\\lambda_i = L_i(0) = \\prod_{j=1, j \\neq i}^{t} \\frac{0 - x_j}{x_i - x_j} = \\prod_{j=1, j \\neq i}^{t} \\frac{-x_j}{x_i - x_j}`}
        </MathBlock>
        <p className="mt-3">
          The secret is then:
        </p>
        <MathBlock>
          {`s = \\sum_{i=1}^{t} y_i \\cdot \\lambda_i`}
        </MathBlock>
      </Definition>

      <Example title="Computing Lagrange Coefficients">
        <p>For shares at <InlineMath>{`x = 1, 2, 3`}</InlineMath>:</p>
        <div className="mt-4 space-y-4 font-mono text-sm">
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-indigo-400 mb-1">For participant 1:</p>
            <MathBlock>
              {`\\lambda_1 = \\frac{(0-2)(0-3)}{(1-2)(1-3)} = \\frac{(-2)(-3)}{(-1)(-2)} = \\frac{6}{2} = 3`}
            </MathBlock>
          </div>
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-emerald-400 mb-1">For participant 2:</p>
            <MathBlock>
              {`\\lambda_2 = \\frac{(0-1)(0-3)}{(2-1)(2-3)} = \\frac{(-1)(-3)}{(1)(-1)} = \\frac{3}{-1} = -3`}
            </MathBlock>
          </div>
          <div className="p-3 rounded-lg bg-dark-800/50">
            <p className="text-amber-400 mb-1">For participant 3:</p>
            <MathBlock>
              {`\\lambda_3 = \\frac{(0-1)(0-2)}{(3-1)(3-2)} = \\frac{(-1)(-2)}{(2)(1)} = \\frac{2}{2} = 1`}
            </MathBlock>
          </div>
        </div>
      </Example>

      <Callout type="info">
        <strong>Key Property:</strong> The Lagrange coefficients sum to 1:
        <MathBlock>{`\\sum_{i=1}^{t} \\lambda_i = 1`}</MathBlock>
        This is because <InlineMath>{`\\sum_i L_i(x) = 1`}</InlineMath> for all <InlineMath>{`x`}</InlineMath>
        (the basis polynomials form a partition of unity).
      </Callout>

      <LagrangeInterpolator />

      <h3>For FROST</h3>

      <p>
        In FROST, Lagrange coefficients let participants compute with their shares
        <em>without</em> reconstructing the secret:
      </p>

      <MathBlock>
        {`s = \\sum_i s_i \\cdot \\lambda_i`}
      </MathBlock>

      <p>
        Each participant <InlineMath>{`i`}</InlineMath> computes <InlineMath>{`s_i \\cdot \\lambda_i`}</InlineMath>
        locally, and these contributions combine to give the effect of using <InlineMath>{`s`}</InlineMath>,
        without anyone ever computing <InlineMath>{`s`}</InlineMath> directly.
      </p>
    </LessonLayout>
  );
}
