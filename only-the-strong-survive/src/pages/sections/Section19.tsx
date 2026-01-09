import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { MathBlock } from '../../components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Mathematics of Rehypothecation</h2>

      <p className="my-4">
        This appendix provides the full algebra behind the rehypothecation dynamics discussed
        in Section 8. Understanding this mathematics reveals why "overcollateralization" is
        not the safety net it appears to be.
      </p>

      <Callout type="info">
        <p>
          <strong>TLDR:</strong> Only 200% or greater collateralization prevents synthetic
          exposure from exceeding initial collateral under unbounded rehypothecation.
        </p>
      </Callout>

      {/* The Basic Setup */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Basic Setup</h2>

      <p className="my-4">
        Consider 150% collateralization (or 50% "overcollateralization"). This means we require
        $150 as collateral to mint $100 of new synthetic assets.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          If these new assets can be reused as collateral for another operation, we apply the
          same ratio (100/150 = 2/3) to get:
        </p>
        <ul className="space-y-2 mt-4 text-dark-300">
          <li>• First mint: $100</li>
          <li>• Second mint: $100 × (2/3) = $67</li>
          <li>• Third mint: $67 × (2/3) = $44</li>
          <li>• And so on, ad infinitum...</li>
        </ul>
      </div>

      {/* The Tipping Point */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Tipping Point</h2>

      <p className="my-4">
        It takes only <strong>two iterations</strong> for the total synthetic value to exceed
        the original collateral:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6 text-center">
        <p className="text-xl text-dark-200">
          $100 + $67 = <span className="text-orange-400 font-bold">$167</span>
        </p>
        <p className="text-dark-400 mt-2">
          (exceeds the $150 of "real" collateral)
        </p>
      </div>

      {/* The Limit */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Infinite Series Limit</h2>

      <p className="my-4">
        The limit of outstanding asset value approached can be calculated using the geometric
        series formula:
      </p>

      <MathBlock>
        {`$100 \\times \\sum_{n=0}^{\\infty} \\left(\\frac{2}{3}\\right)^n = $100 \\times 3 = $300`}
      </MathBlock>

      <p className="my-4">
        So with 150% collateralization, unbounded rehypothecation approaches <strong>$300</strong>
        of synthetic value on only $150 of real collateral — a 2:1 ratio!
      </p>

      {/* General Formula */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The General Formula</h2>

      <p className="my-4">
        In general, if the collateralization ratio is x%, for x ≥ 100, let k = (100% / x%).
        Our formula becomes:
      </p>

      <MathBlock>
        {`$100 \\times \\sum_{n=0}^{\\infty} \\left(\\frac{1}{k}\\right)^n = $100 \\times \\left(\\frac{k}{k-1}\\right)`}
      </MathBlock>

      <p className="my-4">
        This is valid only for (1/k) {"<"} 1, i.e., collateralization greater than 100%.
      </p>

      {/* Examples Table */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Collateralization Examples</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="p-3 text-orange-400">Collateralization</th>
              <th className="p-3 text-orange-400">k value</th>
              <th className="p-3 text-orange-400">Limit</th>
              <th className="p-3 text-orange-400">Iterations to Exceed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="p-3 text-dark-300">150%</td>
              <td className="p-3 text-dark-300">1.5</td>
              <td className="p-3 text-dark-300">$300</td>
              <td className="p-3 text-dark-300">2</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="p-3 text-dark-300">175%</td>
              <td className="p-3 text-dark-300">1.75</td>
              <td className="p-3 text-dark-300">$233</td>
              <td className="p-3 text-dark-300">3</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="p-3 text-green-400 font-semibold">200%</td>
              <td className="p-3 text-dark-300">2.0</td>
              <td className="p-3 text-green-400 font-semibold">$200</td>
              <td className="p-3 text-green-400 font-semibold">Never</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="p-3 text-dark-300">250%</td>
              <td className="p-3 text-dark-300">2.5</td>
              <td className="p-3 text-dark-300">$167</td>
              <td className="p-3 text-dark-300">Never</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Critical Point */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Critical 200% Threshold</h2>

      <p className="my-4">
        The single point at which synthetic value equals (but never exceeds) collateral is at
        <strong> 200% collateralization</strong>. This is easy to see practically:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          Putting up $200 to generate:
        </p>
        <p className="text-dark-300 mt-2">
          $100 + $50 + $25 + $12.50 + ... = <span className="text-green-400 font-bold">$200</span>
        </p>
        <p className="text-dark-400 mt-2">
          (Converges exactly to the collateral amount)
        </p>
      </div>

      <Callout type="warning">
        <p>
          Collateralization ratios <strong>above 200%</strong> are "safer" in the sense that
          unboundedly many reuses will never reach synthetic exposure exceeding the initial
          collateral.
        </p>
      </Callout>

      {/* The Implication */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Implication for Crypto</h2>

      <p className="my-4">
        Most crypto protocols use collateralization ratios between 150% and 175%. This means
        that even though each individual position appears "overcollateralized," the system
        as a whole is <strong>undercapitalized</strong> once rehypothecation is accounted for.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200 text-center">
          The idea of "overcollateralization" means something very different in isolation
          versus in an environment where assets can be endlessly rehypothecated.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>150% collateralization</strong> allows $300 of synthetic value on $150
              of real collateral — 2× leverage.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Only <strong>200%+ collateralization</strong> prevents synthetic value from
              exceeding real collateral.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              The <strong>geometric series formula</strong> reveals the true systemic exposure.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              Most crypto uses 150-175% collateralization — <strong>systemically
              undercapitalized</strong>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
