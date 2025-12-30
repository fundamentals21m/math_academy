import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2>Integrating as the Reverse of Differentiating</h2>

      <p>
        Now let's develop systematic methods for integration. The key insight is that
        integration reverses differentiation, so we can build a table of integrals by
        "reading backwards" from our differentiation rules.
      </p>

      <h2>The Power Rule for Integration</h2>

      <p>
        Since d/dx(xⁿ) = nxⁿ⁻¹, working backwards:
      </p>

      <MathBlock latex="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)" />

      <Callout type="info">
        <strong>The Pattern:</strong> Increase the exponent by 1, then divide by the
        new exponent. The opposite of what we do when differentiating!
      </Callout>

      <h2>Examples</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <MathBlock latex="\int x^3 \, dx = \frac{x^4}{4} + C" />
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <MathBlock latex="\int x^{-2} \, dx = \frac{x^{-1}}{-1} + C = -\frac{1}{x} + C" />
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <MathBlock latex="\int \sqrt{x} \, dx = \int x^{1/2} \, dx = \frac{x^{3/2}}{3/2} + C = \frac{2}{3}x^{3/2} + C" />
        </div>
      </div>

      <h2>The Special Case: n = -1</h2>

      <p>
        When n = -1, our formula would give division by zero. This case is special:
      </p>

      <MathBlock latex="\int \frac{1}{x} \, dx = \ln|x| + C" />

      <p>
        The natural logarithm appears! This is because d/dx(ln x) = 1/x.
      </p>

      <h2>Standard Integrals</h2>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>∫ eˣ dx = eˣ + C</li>
        <li>∫ sin(x) dx = -cos(x) + C</li>
        <li>∫ cos(x) dx = sin(x) + C</li>
        <li>∫ sec²(x) dx = tan(x) + C</li>
      </ul>

      <Callout type="success">
        <strong>Strategy:</strong> When integrating, ask yourself: "What function has
        this as its derivative?" Building familiarity with derivatives makes integration
        much easier.
      </Callout>
    </LessonLayout>
  );
}
