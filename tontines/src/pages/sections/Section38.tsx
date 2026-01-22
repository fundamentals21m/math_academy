import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Adverse Selection Problem</h2>

      <p className="mb-4">
        Perhaps the most serious challenge facing tontines is <strong>adverse selection</strong>—
        the tendency for healthier people to join longevity pools while unhealthier people
        avoid them. This self-selection can undermine the economics of the entire pool.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Core Problem</h3>

      <Definition title="Adverse Selection in Tontines">
        <p>
          Adverse selection occurs when people have private information about their own
          mortality risk that the pool cannot observe:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Healthy individuals</strong> expect to live long and benefit from mortality credits, so they <strong>join</strong></li>
          <li><strong>Unhealthy individuals</strong> expect to die early and subsidize others, so they <strong>avoid</strong></li>
          <li><strong>Result:</strong> The pool has better (lower) mortality than the general population</li>
        </ul>
      </Definition>

      <p className="mb-4 mt-6">
        This creates a self-reinforcing cycle:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Pool is designed assuming <strong>average population mortality</strong>
          </li>
          <li>
            Only <strong>healthier-than-average</strong> people find it attractive
          </li>
          <li>
            Actual mortality is <strong>lower than expected</strong>
          </li>
          <li>
            Payouts are <strong>lower than promised</strong> (fewer deaths = fewer credits)
          </li>
          <li>
            Product becomes <strong>even less attractive</strong> to borderline-healthy people
          </li>
          <li>
            Pool becomes <strong>increasingly select</strong> over time
          </li>
        </ol>
      </div>

      <Callout type="warning" title="The Death Spiral">
        <p>
          In extreme cases, adverse selection leads to a "death spiral" where the pool
          becomes so select that only the healthiest people remain, payouts plummet,
          and the product fails entirely. This happened to some voluntary annuity markets
          in the 1990s and 2000s.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mathematical Impact</h3>

      <p className="mb-4">
        We can quantify adverse selection's impact using annuity factors. Recall that
        <InlineMath>{'\\ddot{a}_x'}</InlineMath> measures the present value of a life annuity due:
      </p>

      <MathBlock>
        {`\\ddot{a}_x = \\sum_{t=0}^{\\omega-x} {}_tp_x \\cdot v^t`}
      </MathBlock>

      <p className="mb-4 mt-6">
        When adverse selection occurs, the actual survival probabilities in the pool exceed
        general population rates:
      </p>

      <Example title="Adverse Selection Impact">
        <p className="mb-3">
          Consider a tontine priced for general population 65-year-olds:
        </p>
        <div className="bg-dark-900 rounded p-3 mb-4">
          <ul className="space-y-2 text-sm">
            <li>
              <strong>General population:</strong> <InlineMath>{'\\ddot{a}_{65}'}</InlineMath> = 14.2 years
            </li>
            <li>
              <strong>Actual pool (select lives):</strong> <InlineMath>{'\\ddot{a}_{65}^{\\text{select}}'}</InlineMath> = 15.6 years
            </li>
          </ul>
        </div>
        <p className="mb-3">
          <strong>Expected payout rate (pricing assumption):</strong>
        </p>
        <MathBlock>
          {`\\text{Payout Rate}_{\\text{expected}} = \\frac{1}{\\ddot{a}_{65}} = \\frac{1}{14.2} = 7.04\\%`}
        </MathBlock>
        <p className="mb-3 mt-4">
          <strong>Actual sustainable payout rate:</strong>
        </p>
        <MathBlock>
          {`\\text{Payout Rate}_{\\text{actual}} = \\frac{1}{\\ddot{a}_{65}^{\\text{select}}} = \\frac{1}{15.6} = 6.41\\%`}
        </MathBlock>
        <p className="mt-4 text-rose-400">
          <strong>Impact:</strong> Payouts are 9% lower than advertised!
        </p>
        <MathBlock>
          {`\\text{Shortfall} = \\frac{7.04\\% - 6.41\\%}{7.04\\%} = 8.9\\%`}
        </MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Evidence from Annuity Markets</h3>

      <p className="mb-4">
        Research on voluntary annuity markets confirms adverse selection is real and
        substantial:
      </p>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2">Population</th>
            <th className="pb-2"><InlineMath>e_{65}</InlineMath></th>
            <th className="pb-2">vs. General Pop.</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">US General Population</td>
            <td className="py-2">18.5 years</td>
            <td className="py-2">Baseline</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">UK Annuity Purchasers</td>
            <td className="py-2">21.3 years</td>
            <td className="py-2 text-amber-400">+15%</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">US Private Annuitants</td>
            <td className="py-2">22.1 years</td>
            <td className="py-2 text-rose-400">+19%</td>
          </tr>
          <tr>
            <td className="py-2">Pension Plan Members</td>
            <td className="py-2">19.2 years</td>
            <td className="py-2 text-emerald-400">+4%</td>
          </tr>
        </tbody>
      </table>

      <p className="text-dark-400 text-sm mb-6">
        Note: Pension plan members show much smaller adverse selection because participation
        is typically mandatory or strongly encouraged.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Solutions to Adverse Selection</h3>

      <p className="mb-4">
        Three main approaches can mitigate adverse selection:
      </p>

      <div className="space-y-6 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Solution A: Health Underwriting</p>
          <p className="text-dark-300 mb-3">
            Require medical examinations and stratify members into health-based pools.
            Healthier members get lower payouts; sicker members get higher payouts.
          </p>
          <div className="bg-dark-900 rounded p-3">
            <p className="text-sm mb-2"><strong>Health Categories:</strong></p>
            <ul className="space-y-1 text-sm text-dark-400">
              <li><span className="text-emerald-400">Preferred:</span> <InlineMath>{'\\ddot{a}_{65}'}</InlineMath> = 16.0 → 6.25% payout</li>
              <li><span className="text-amber-400">Standard:</span> <InlineMath>{'\\ddot{a}_{65}'}</InlineMath> = 14.2 → 7.04% payout</li>
              <li><span className="text-rose-400">Substandard:</span> <InlineMath>{'\\ddot{a}_{65}'}</InlineMath> = 11.5 → 8.70% payout</li>
            </ul>
          </div>
          <p className="text-dark-400 text-sm mt-3">
            <strong>Drawback:</strong> Increases cost and complexity; raises privacy concerns.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-400 font-bold mb-2">Solution B: Implicit Stratification</p>
          <p className="text-dark-300 mb-3">
            Use observable characteristics (age, sex, geography) as proxies for health status.
            This doesn't eliminate adverse selection but reduces it without medical exams.
          </p>
          <div className="bg-dark-900 rounded p-3">
            <p className="text-sm mb-2"><strong>Stratification Factors:</strong></p>
            <ul className="space-y-1 text-sm text-dark-400">
              <li><strong>Age:</strong> Separate cohorts by 5-year age bands</li>
              <li><strong>Sex:</strong> Different rates for males and females</li>
              <li><strong>Geography:</strong> Regional mortality adjustments</li>
              <li><strong>Occupation:</strong> White-collar vs. blue-collar</li>
            </ul>
          </div>
          <p className="text-dark-400 text-sm mt-3">
            <strong>Drawback:</strong> Imperfect proxy; may face discrimination concerns.
          </p>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-purple-400 font-bold mb-2">Solution C: Mandatory Participation</p>
          <p className="text-dark-300 mb-3">
            Require participation as part of employment or pension plan membership.
            This eliminates self-selection entirely because everyone must join.
          </p>
          <div className="bg-dark-900 rounded p-3">
            <p className="text-sm mb-2"><strong>Implementation:</strong></p>
            <ul className="space-y-1 text-sm text-dark-400">
              <li>Employer-sponsored tontine as default retirement option</li>
              <li>Government pension with tontine component</li>
              <li>Auto-enrollment with opt-out (behavioral default)</li>
            </ul>
          </div>
          <p className="text-dark-400 text-sm mt-3">
            <strong>Drawback:</strong> Reduces individual choice; requires institutional adoption.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Quantifying the Solutions</h3>

      <Example title="Impact of Mandatory Participation">
        <p className="mb-3">
          Compare adverse selection under voluntary vs. mandatory participation:
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Design</th>
              <th className="pb-2"><InlineMath>{'\\ddot{a}_{65}'}</InlineMath></th>
              <th className="pb-2">Payout Rate</th>
              <th className="pb-2">Selection Cost</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Pricing assumption</td>
              <td className="py-2">14.2</td>
              <td className="py-2">7.04%</td>
              <td className="py-2">—</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 text-rose-400">Voluntary (no underwriting)</td>
              <td className="py-2">15.6</td>
              <td className="py-2">6.41%</td>
              <td className="py-2 text-rose-400">-9%</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 text-amber-400">Voluntary (with underwriting)</td>
              <td className="py-2">14.8</td>
              <td className="py-2">6.76%</td>
              <td className="py-2 text-amber-400">-4%</td>
            </tr>
            <tr>
              <td className="py-2 text-emerald-400">Mandatory participation</td>
              <td className="py-2">14.3</td>
              <td className="py-2">6.99%</td>
              <td className="py-2 text-emerald-400">-1%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-emerald-400">
          Mandatory participation nearly eliminates adverse selection costs.
        </p>
      </Example>

      <Callout type="info" title="The Netherlands Approach">
        <p>
          The Dutch pension reform addresses adverse selection through <strong>mandatory
          participation</strong>. All employees in covered industries must participate
          in their sector's pension fund. Because participation is compulsory, adverse
          selection is minimal—the pool reflects the actual workforce mortality rather
          than a self-selected subset.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Implications</h3>

      <p className="mb-4">
        For modern tontine designers, adverse selection has several implications:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Pricing conservatively:</strong> Assume healthier-than-average participants
          when setting initial payout rates
        </li>
        <li>
          <strong>Building reserves:</strong> Maintain buffers to absorb mortality deviations
        </li>
        <li>
          <strong>Targeting institutions:</strong> Focus on employer-sponsored plans where
          participation can be mandated or strongly encouraged
        </li>
        <li>
          <strong>Transparent communication:</strong> Explain to members that payouts may
          vary based on pool mortality experience
        </li>
      </ul>

      <p className="text-dark-400 italic">
        Adverse selection is a fundamental challenge but not an insurmountable one.
        With appropriate design—particularly mandatory or quasi-mandatory participation—
        modern tontines can achieve mortality pools representative of the broader population.
      </p>
    </LessonLayout>
  );
}
