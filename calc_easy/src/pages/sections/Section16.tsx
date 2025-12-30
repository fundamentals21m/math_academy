import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>On True Compound Interest and the Law of Organic Growth</h2>

      <p>
        One of the most remarkable functions in mathematics is the exponential
        function e^x, where e ≈ 2.71828... This number appears naturally in compound
        interest, population growth, and countless other phenomena.
      </p>

      <Callout type="info">
        <strong>The Magic of e:</strong> The function y = eˣ has a remarkable property—it
        is its own derivative! dy/dx = eˣ.
      </Callout>

      <h2>Compound Interest</h2>

      <p>
        If you invest P dollars at annual interest rate r, compounded n times per year,
        after t years you have:
      </p>

      <MathBlock latex="A = P\left(1 + \frac{r}{n}\right)^{nt}" />

      <p>
        What if interest is compounded continuously—infinitely many times per year?
        Taking the limit as n → ∞:
      </p>

      <MathBlock latex="A = Pe^{rt}" />

      <h2>The Number e</h2>

      <p>The number e is defined as:</p>

      <MathBlock latex="e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n = 2.71828..." />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Computing e</h3>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2">n</th>
              <th className="text-left py-2">(1 + 1/n)ⁿ</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-1">1</td><td>2.00000</td></tr>
            <tr><td className="py-1">10</td><td>2.59374</td></tr>
            <tr><td className="py-1">100</td><td>2.70481</td></tr>
            <tr><td className="py-1">1000</td><td>2.71692</td></tr>
            <tr><td className="py-1">∞</td><td>2.71828...</td></tr>
          </tbody>
        </table>
      </div>

      <h2>The Law of Organic Growth</h2>

      <p>
        Many natural processes follow exponential growth or decay:
      </p>

      <MathBlock latex="\frac{dy}{dt} = ky" />

      <p>
        This says: the rate of growth is proportional to the current amount. The
        solution is always:
      </p>

      <MathBlock latex="y = y_0 e^{kt}" />

      <p>where y₀ is the initial value.</p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li><strong>k &gt; 0:</strong> Exponential growth (population, bacteria, investments)</li>
        <li><strong>k &lt; 0:</strong> Exponential decay (radioactive decay, cooling, depreciation)</li>
      </ul>

      <Callout type="success">
        <strong>Universal Pattern:</strong> The exponential function eˣ appears
        throughout nature and science because it describes processes where the rate of
        change is proportional to the quantity itself—a surprisingly common situation!
      </Callout>
    </LessonLayout>
  );
}
