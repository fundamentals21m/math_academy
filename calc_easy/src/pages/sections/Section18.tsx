import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Partial Differentiation</h2>

      <p>
        So far, our functions have depended on a single variable. But what if a
        quantity depends on <em>several</em> variables? For example, the volume of a
        box depends on its length, width, and height.
      </p>

      <Callout type="info">
        <strong>The Idea:</strong> When a function has multiple variables, we can
        differentiate with respect to one variable while treating the others as constants.
      </Callout>

      <h2>Notation</h2>

      <p>
        For a function f(x, y), we write partial derivatives with the "curly d" symbol ∂:
      </p>

      <MathBlock latex="\frac{\partial f}{\partial x} \quad \text{and} \quad \frac{\partial f}{\partial y}" />

      <h2>Example: f(x, y) = x²y + 3xy²</h2>

      <p>To find ∂f/∂x, treat y as a constant:</p>

      <MathBlock latex="\frac{\partial f}{\partial x} = 2xy + 3y^2" />

      <p>To find ∂f/∂y, treat x as a constant:</p>

      <MathBlock latex="\frac{\partial f}{\partial y} = x^2 + 6xy" />

      <h2>Geometric Interpretation</h2>

      <p>
        If z = f(x, y) represents a surface in 3D space:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>∂z/∂x is the slope of the surface in the x-direction</li>
        <li>∂z/∂y is the slope of the surface in the y-direction</li>
      </ul>

      <h2>The Total Differential</h2>

      <p>
        If both x and y change simultaneously, the total change in f is approximately:
      </p>

      <MathBlock latex="df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Physical Example</h3>
        <p className="text-dark-300">
          The pressure P of an ideal gas depends on volume V and temperature T:
          P = nRT/V. The partial derivatives tell us how pressure changes when we vary
          volume (at constant T) or temperature (at constant V) independently.
        </p>
      </div>

      <Callout type="success">
        <strong>Key Point:</strong> Partial differentiation extends calculus to
        functions of multiple variables. It's essential for physics, economics,
        machine learning, and any field dealing with systems affected by multiple factors.
      </Callout>
    </LessonLayout>
  );
}
