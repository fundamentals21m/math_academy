import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Insurance Company's Problem</h2>

      <p className="mb-4">
        When an insurance company sells you a life annuity, they're making a bet:
        they're betting they can invest your premium and earn enough to pay you
        for however long you live. If you live longer than expected, they lose money.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Longevity Risk</h3>

      <Definition title="Longevity Risk">
        <p>
          <strong>Longevity risk</strong> is the financial risk that arises from uncertainty
          about how long people will live. For annuity providers, it's the risk that
          annuitants will live longer than projected, requiring more payments than anticipated.
        </p>
      </Definition>

      <p className="mb-4">
        This might seem manageable—after all, some people die early and some late,
        shouldn't it average out? The answer depends on what <em>type</em> of longevity
        risk we're talking about.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Two Types of Risk</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Idiosyncratic Risk</p>
          <p className="text-sm text-dark-300 mb-3">
            Individual variation around the expected mortality. Alice might live to 90
            while Bob dies at 75—random variation around the mean.
          </p>
          <p className="text-emerald-400 font-semibold">
            Can be diversified away with large pools
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
          <p className="text-rose-400 font-bold mb-2">Aggregate Risk</p>
          <p className="text-sm text-dark-300 mb-3">
            Systematic changes in mortality affecting everyone. What if average lifespan
            increases by 2 years due to medical advances?
          </p>
          <p className="text-rose-400 font-semibold">
            Cannot be diversified—affects all annuitants
          </p>
        </div>
      </div>

      <p className="mb-4">
        Idiosyncratic risk is manageable through the law of large numbers. With thousands
        of annuitants, individual variations cancel out. But aggregate risk is the killer:
        if <em>everyone</em> starts living longer, the insurance company is in trouble.
      </p>

      <Example title="The Aggregate Risk Problem">
        <p className="mb-3">
          An insurance company sells 10,000 annuities to 65-year-olds, expecting average
          lifespan of 85 (20 years of payments).
        </p>
        <p className="mb-3">
          Medical advance: new heart disease treatment adds 2 years to average lifespan.
        </p>
        <MathBlock>
          {`\\text{Extra liability} = 10{,}000 \\times \\$6{,}000 \\times 2 = \\$120{,}000{,}000`}
        </MathBlock>
        <p className="mt-3 text-rose-400">
          A $120 million unexpected loss—and no way to diversify it away.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Historical Example: UK Annuity Crisis</h3>

      <Callout type="warning" title="UK 2000s: Longevity Risk Realized">
        <p className="mb-2">
          In the early 2000s, UK insurance companies faced massive losses on their annuity
          portfolios. Life expectancy had increased faster than their actuaries had projected,
          and they were locked into paying annuities priced using outdated mortality assumptions.
        </p>
        <p>
          Several major insurers reported <strong>billions of pounds</strong> in reserve
          strengthening—money they had to set aside to cover the longer-than-expected
          payment obligations.
        </p>
      </Callout>

      <p className="mb-4">
        This experience made insurance companies much more cautious. They now:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Use more conservative mortality assumptions</li>
        <li>Build larger buffers into their pricing</li>
        <li>Hold substantial capital reserves</li>
        <li>Sometimes refuse to sell new annuities entirely</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Capital Requirements</h3>

      <p className="mb-4">
        Regulators require insurance companies to hold capital to protect policyholders.
        The key framework in Europe is Solvency II.
      </p>

      <Definition title="Solvency II Capital Requirements">
        <p>
          Under Solvency II, insurance companies must hold enough capital to survive a
          <strong> 1-in-200 year event</strong>—a scenario so bad it would only occur
          once in 200 years on average.
        </p>
        <p className="mt-2">
          For longevity risk, this means holding capital against the possibility that
          mortality improvements are much faster than expected.
        </p>
      </Definition>

      <Example title="Capital Calculation">
        <p className="mb-3">
          For a typical annuity portfolio, Solvency II longevity stress testing requires:
        </p>
        <MathBlock>
          {`\\text{Required Capital} \\approx 8\\%\\text{-}12\\% \\text{ of annuity liabilities}`}
        </MathBlock>
        <p className="mt-3">
          On a $1 billion annuity book, that's <strong>$80-120 million</strong> in capital
          tied up just for longevity risk, earning minimal returns but required by regulation.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Who Bears the Risk?</h3>

      <p className="mb-4">
        The fundamental question is: who should bear longevity risk?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Arrangement</th>
              <th className="pb-2">Risk Bearer</th>
              <th className="pb-2">Consequence</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Life Annuity</td>
              <td className="py-2">Insurance company</td>
              <td className="py-2">High loading factors (15%+)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Self-Insurance</td>
              <td className="py-2">Individual</td>
              <td className="py-2">Risk of running out of money</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-dark-100">Tontine</td>
              <td className="py-2">Pool of members</td>
              <td className="py-2">Variable but shared risk</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="The Insurance Premium">
        <p>
          The high loading factors in annuities aren't pure profit—they reflect the real
          cost of bearing longevity risk. Insurance companies charge a premium for taking
          on a risk that cannot be diversified away and could potentially bankrupt them.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        Tontines offer an alternative: instead of transferring longevity risk to an
        insurance company (at great cost), members share it among themselves. Let's
        examine the advantages of this approach.
      </p>
    </LessonLayout>
  );
}
