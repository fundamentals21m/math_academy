import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Maxima and Minima</h2>

      <p>
        One of the most practical applications of differential calculus is finding
        where a function reaches its highest or lowest values. These are called
        <strong> maxima</strong> and <strong>minima</strong>.
      </p>

      <Callout type="info">
        <strong>The Key Insight:</strong> At a maximum or minimum, the curve has a
        horizontal tangent, which means dy/dx = 0.
      </Callout>

      <h2>Finding Critical Points</h2>

      <p>To find maxima and minima:</p>

      <ol className="list-decimal list-inside space-y-2 my-6 text-dark-300">
        <li>Find the derivative dy/dx</li>
        <li>Set dy/dx = 0 and solve for x</li>
        <li>These x-values are "critical points"</li>
        <li>Determine if each is a maximum, minimum, or neither</li>
      </ol>

      <h2>Example: y = x³ - 3x</h2>

      <MathBlock latex="\frac{dy}{dx} = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)" />

      <p>Setting dy/dx = 0: x = 1 or x = -1</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">At x = -1</h3>
          <p className="text-dark-300">y = (-1)³ - 3(-1) = -1 + 3 = 2</p>
          <p className="text-dark-400 text-sm mt-2">Local maximum at (-1, 2)</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">At x = 1</h3>
          <p className="text-dark-300">y = (1)³ - 3(1) = 1 - 3 = -2</p>
          <p className="text-dark-400 text-sm mt-2">Local minimum at (1, -2)</p>
        </div>
      </div>

      <h2>The Second Derivative Test</h2>

      <p>
        How do we know if a critical point is a maximum or minimum? Use the second
        derivative:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>If d²y/dx² &lt; 0 at the critical point → <strong>Maximum</strong> (curve bends down)</li>
        <li>If d²y/dx² &gt; 0 at the critical point → <strong>Minimum</strong> (curve bends up)</li>
        <li>If d²y/dx² = 0 → Need more investigation</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Continuing our example</h3>
        <MathBlock latex="\frac{d^2y}{dx^2} = 6x" />
        <p className="text-dark-300 mt-2">At x = -1: d²y/dx² = -6 &lt; 0 → Maximum ✓</p>
        <p className="text-dark-300">At x = 1: d²y/dx² = 6 &gt; 0 → Minimum ✓</p>
      </div>

      <Callout type="success">
        <strong>Practical Uses:</strong> Finding maxima and minima is essential in
        optimization problems—maximizing profits, minimizing costs, finding the
        strongest beam shape, designing efficient containers, and countless other
        real-world applications.
      </Callout>
    </LessonLayout>
  );
}
