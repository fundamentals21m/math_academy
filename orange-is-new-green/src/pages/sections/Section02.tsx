import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        In the realm of economic theory, the rationale for holding cash and its
        equivalents is rooted in the anticipation of future uncertainty. In practice,
        however, the erosion of fiat currency's value fundamentally distorts this
        simple logic.
      </p>

      {/* Section 1: The Economic Rationale for Cash */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. The Economic Rationale for Cash</h2>

      <p className="my-4">
        Classical economic theory identifies several motives for holding cash:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Transaction Motive</h4>
          <p className="text-sm text-dark-300">
            Cash needed for regular transactions—daily purchases, bills, and
            routine expenses.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Precautionary Motive</h4>
          <p className="text-sm text-dark-300">
            Buffer against unexpected expenses—emergencies, repairs, or
            unforeseen opportunities.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Speculative Motive</h4>
          <p className="text-sm text-dark-300">
            Keeping powder dry for investment opportunities when assets
            become attractively priced.
          </p>
        </Card>
      </CardGrid>

      {/* Section 2: Fiat Erosion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. The Fiat Erosion Problem</h2>

      <p className="my-4">
        In a sound money system, holding cash preserves purchasing power. But in
        the modern fiat system, predicated on never-ending increases in money supply,
        cash holders face a cruel tax: <strong className="text-amber-400">inflation</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Inflation Tax</h4>
        <p className="text-dark-200 mb-4">
          Central banks target 2%+ annual inflation, meaning cash loses purchasing
          power by design. Over time:
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-red-400">-18%</p>
            <p className="text-sm text-dark-400">After 10 years</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">-33%</p>
            <p className="text-sm text-dark-400">After 20 years</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">-45%</p>
            <p className="text-sm text-dark-400">After 30 years</p>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-4">
          At 2% annual inflation (often exceeded in practice)
        </p>
      </div>

      {/* Section 3: Flight to "Liquid Securities" */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Flight to "Highly Liquid Securities"</h2>

      <p className="my-4">
        This erosion compels economic agents to seek refuge in "highly liquid
        securities"—assets that can supposedly be quickly converted to cash
        while also protecting purchasing power.
      </p>

      <p className="my-4">
        These securities serve a dual purpose:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">Collateral for Credit</p>
            <p className="text-sm text-dark-400 mt-1">
              Can be offered to credit suppliers when cash is needed quickly
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Purchasing Power Protection</p>
            <p className="text-sm text-dark-400 mt-1">
              Yield helps offset inflation's erosion—something cash alone cannot achieve
            </p>
          </div>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The trap:</strong> By forcing savers out of cash and into
          securities, the fiat system creates a false sense of security. These
          "liquid" assets carry hidden risks that only manifest during crises.
        </p>
      </Callout>

      {/* Section 4: The Money Market Fund */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Enter the Money Market Fund</h2>

      <p className="my-4">
        Money market funds emerged as the solution: pooled investments in short-term,
        high-quality debt instruments that offer:
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Stable NAV</h4>
          <p className="text-sm text-dark-300">
            Typically maintain $1.00 per share, providing perceived stability
            similar to a bank account.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Modest Yield</h4>
          <p className="text-sm text-dark-300">
            Returns slightly above zero to offset inflation, better than pure cash.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Quick Access</h4>
          <p className="text-sm text-dark-300">
            Generally redeemable within a day or two, maintaining liquidity.
          </p>
        </Card>
      </CardGrid>

      <p className="my-4">
        Money market fund assets have grown to over <strong className="text-amber-400">
        $5.5 trillion</strong>, reflecting the massive demand for short-term
        cash-equivalent investments.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Economic theory justifies holding cash for <strong>transactions,
              precaution, and speculation</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Fiat inflation acts as a <strong>hidden tax</strong> on cash
              holders, eroding purchasing power over time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              This drives savers into <strong>"highly liquid securities"</strong>
              to preserve value while maintaining access to funds.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Money market funds</strong> ($5.5T+) emerged to serve this
              need for yield with stability.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
