import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2>Dodges, Pitfalls, and Triumphs</h2>

      <p>
        Integration isn't always straightforward. There are clever techniques (dodges),
        common mistakes to avoid (pitfalls), and beautiful results (triumphs). Let's
        explore some key integration methods.
      </p>

      <h2>Substitution (U-Substitution)</h2>

      <p>
        This is the integration equivalent of the chain rule. If you can spot a
        "function within a function," try substituting.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Example</h3>
        <MathBlock latex="\int 2x \cdot e^{x^2} \, dx" />
        <p className="text-dark-300 mt-2">Let u = x², then du = 2x dx:</p>
        <MathBlock latex="= \int e^u \, du = e^u + C = e^{x^2} + C" />
      </div>

      <Callout type="info">
        <strong>The Pattern:</strong> Look for a composite function where the derivative
        of the inner function appears as a factor.
      </Callout>

      <h2>Integration by Parts</h2>

      <p>
        This is the integration equivalent of the product rule. For ∫u dv:
      </p>

      <MathBlock latex="\int u \, dv = uv - \int v \, du" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Example: ∫ x·eˣ dx</h3>
        <p className="text-dark-300">Let u = x, dv = eˣ dx. Then du = dx, v = eˣ:</p>
        <MathBlock latex="= x \cdot e^x - \int e^x \, dx = xe^x - e^x + C = e^x(x-1) + C" />
      </div>

      <h2>Common Pitfalls</h2>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li><strong>Forgetting +C</strong> in indefinite integrals</li>
        <li><strong>Sign errors</strong> when substituting or applying formulas</li>
        <li><strong>Wrong bounds</strong> when changing variables in definite integrals</li>
        <li><strong>Dividing by zero</strong> when n = -1 in the power rule</li>
      </ul>

      <h2>A Triumph: Integrating sin²(x)</h2>

      <p>Using the identity sin²(x) = (1 - cos(2x))/2:</p>

      <MathBlock latex="\int \sin^2(x) \, dx = \int \frac{1 - \cos(2x)}{2} \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C" />

      <Callout type="success">
        <strong>Mastery Tip:</strong> Integration requires practice and pattern
        recognition. The more techniques you learn, the more problems you can solve.
        Don't be discouraged—even experts sometimes need to try several approaches!
      </Callout>
    </LessonLayout>
  );
}
