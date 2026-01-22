import { LessonLayout } from '@/components/layout';
import { Example } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Why Natural is Near-Optimal</h2>

      <p className="mb-4">
        The natural tontine isn't mathematically perfect for any specific risk aversion.
        But Milevsky and Salisbury proved it's remarkably close to optimal for <em>all</em>
        reasonable risk aversions.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Result</h3>

      <Callout type="success" title="Milevsky & Salisbury (2015)">
        <p>
          For any risk aversion <InlineMath>{`\\gamma`}</InlineMath>:
        </p>
        <p className="mt-2 text-lg font-semibold">
          Utility loss from using natural tontine vs. truly optimal tontine:{' '}
          <span className="text-emerald-400">{'< 1%'}</span> of lifetime wealth
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Optimality by Risk Aversion</h3>

      <Example title="Efficiency Across γ">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Risk Aversion <InlineMath>{`\\gamma`}</InlineMath></th>
              <th className="pb-2">Type</th>
              <th className="pb-2">Natural Efficiency</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">0</td>
              <td className="py-2">Risk neutral</td>
              <td className="py-2 text-emerald-400">98%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">1</td>
              <td className="py-2">Log utility</td>
              <td className="py-2 text-emerald-400">99.5%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">3</td>
              <td className="py-2">High risk aversion</td>
              <td className="py-2 text-emerald-400">97%</td>
            </tr>
            <tr>
              <td className="py-2">→∞</td>
              <td className="py-2">Extreme</td>
              <td className="py-2 text-amber-400">92%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400">
          For most realistic values (γ = 1-5), natural tontine captures {'>'}97% of optimal utility.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Does It Work?</h3>

      <p className="mb-4">
        The natural tontine works because it automatically:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Adjusts for mortality:</strong> Higher payouts when fewer survive
        </li>
        <li>
          <strong>Maintains actuarial fairness:</strong> EPV = contribution for all members
        </li>
        <li>
          <strong>Provides smooth growth:</strong> Payouts increase gradually, not explosively
        </li>
        <li>
          <strong>Works for heterogeneous groups:</strong> Fair regardless of age/sex differences
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Practical Advantage</h3>

      <Callout type="info" title="One Design for All">
        <p>
          Unlike the optimal tontine (which depends on each person's <InlineMath>{`\\gamma`}</InlineMath>),
          the natural tontine can be used without knowing individual preferences. It's
          "approximately right" for everyone—a huge practical advantage.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        But what if participants have different risk preferences? Let's explore how
        the optimal design changes with <InlineMath>{`\\gamma`}</InlineMath>.
      </p>
    </LessonLayout>
  );
}
