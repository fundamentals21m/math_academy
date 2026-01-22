import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Future of Tontines</h2>

      <p className="mb-4">
        We've traveled from Lorenzo de Tonti's 17th-century invention through modern portfolio
        theory. Now let's step back and ask: where is this field heading?
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Recap: The Journey</h3>

      <p className="mb-4">
        Let's recall the key insights from our exploration:
      </p>

      <Example title="Course Highlights">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-100">Part 1: Foundations</p>
            <ul className="list-disc list-inside mt-1 text-dark-300 space-y-1">
              <li>Tontines originated in 1653 as a novel financing mechanism</li>
              <li>They flourished for centuries before scandal led to prohibition</li>
              <li>The core idea—pooling mortality risk—remains mathematically sound</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Part 2: Mathematics</p>
            <ul className="list-disc list-inside mt-1 text-dark-300 space-y-1">
              <li>Survival functions and life tables quantify mortality</li>
              <li>Mortality credits boost returns for survivors</li>
              <li>The natural tontine achieves near-optimal utility</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Part 3: Design</p>
            <ul className="list-disc list-inside mt-1 text-dark-300 space-y-1">
              <li>Actuarial fairness ensures no cross-subsidies</li>
              <li>Heterogeneous pools require careful share allocation</li>
              <li>Pool size and end-game planning are crucial practical issues</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Part 4: Application</p>
            <ul className="list-disc list-inside mt-1 text-dark-300 space-y-1">
              <li>The retirement crisis creates urgent need for better solutions</li>
              <li>Tontines fit naturally into a three-bucket portfolio</li>
              <li>Regulatory reform is needed but achievable</li>
            </ul>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Mathematical Core</h3>

      <p className="mb-4">
        At its heart, the tontine represents an elegant mathematical principle:
      </p>

      <MathBlock>
        {`\\boxed{\\text{Mortality} + \\text{Pooling} + \\text{Optimization} = \\text{Efficient Lifetime Income}}`}
      </MathBlock>

      <Definition title="The Three Pillars">
        <ul className="space-y-3">
          <li>
            <strong>Mortality Mathematics:</strong> Survival functions, hazard rates,
            and life tables give us the tools to model human lifespans with precision.
          </li>
          <li>
            <strong>Risk Pooling:</strong> By sharing mortality risk across many participants,
            individual uncertainty becomes collective predictability.
          </li>
          <li>
            <strong>Utility Optimization:</strong> The natural tontine achieves near-optimal
            expected utility without requiring knowledge of individual preferences.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Future Products</h3>

      <p className="mb-4">
        Researchers and entrepreneurs are developing new tontine-inspired products:
      </p>

      <Definition title="Tontine-Annuity Hybrid">
        <p>
          Combines a guaranteed annuity floor with tontine upside. Members receive a
          minimum payment (like traditional annuity) plus variable mortality credits.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Floor:</strong> 4% guaranteed payout (insurance-backed)</li>
          <li><strong>Upside:</strong> Additional 0-3% from mortality credits</li>
          <li><strong>Appeal:</strong> Security of annuity + efficiency of tontine</li>
        </ul>
      </Definition>

      <Definition title="Healthcare Tontine">
        <p>
          A tontine specifically designed to cover healthcare costs in retirement.
          Structured to increase payouts faster than standard mortality credits,
          matching the rising cost curve of healthcare.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Payouts indexed to healthcare inflation</li>
          <li>Higher mortality weighting for ages 75+</li>
          <li>Optional long-term care rider</li>
        </ul>
      </Definition>

      <Definition title="DeFi Tontine">
        <p>
          A blockchain-based tontine using smart contracts to automate payments and
          verify deaths. Eliminates the need for a trusted third party.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Smart contracts:</strong> Automatic, trustless payment distribution</li>
          <li><strong>Oracle problem:</strong> Death verification remains challenging</li>
          <li><strong>Potential:</strong> Global, permissionless retirement pools</li>
        </ul>
      </Definition>

      <Definition title="401(k) Tontine Option">
        <p>
          Integration of tontine payouts as a distribution option within employer-sponsored
          retirement plans. Employees could elect to convert part of their 401(k) balance
          to a tontine at retirement.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Built-in pool size (all company retirees)</li>
          <li>Employer fiduciary oversight</li>
          <li>Familiar regulatory framework (ERISA)</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Policy Recommendations</h3>

      <Callout type="info" title="What Policymakers Should Do">
        <ul className="space-y-2">
          <li>
            <strong>1. Clarify legal status:</strong> Create a distinct regulatory category
            for "mortality-pooled retirement products" separate from insurance and securities.
          </li>
          <li>
            <strong>2. Permit in qualified plans:</strong> Allow tontines as a distribution
            option in <InlineMath>401(k)</InlineMath> and IRA accounts.
          </li>
          <li>
            <strong>3. Fund research:</strong> Support academic research on optimal tontine
            design and long-term outcomes.
          </li>
          <li>
            <strong>4. Pilot programs:</strong> Enable regulatory sandboxes for testing
            new tontine products with limited populations.
          </li>
          <li>
            <strong>5. Consumer education:</strong> Develop standardized disclosures so
            retirees can compare tontines to annuities fairly.
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Academic Frontiers</h3>

      <p className="mb-4">
        Researchers continue to push the boundaries of tontine science:
      </p>

      <Example title="Open Research Questions">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Behavioral factors:</strong> How do psychological biases affect
            tontine participation and satisfaction?
          </li>
          <li>
            <strong>Dynamic tontines:</strong> Can participants adjust their stake over
            time based on changing health or needs?
          </li>
          <li>
            <strong>Multi-period optimization:</strong> What's the optimal allocation
            strategy when tontines are just one of many options?
          </li>
          <li>
            <strong>Mortality selection:</strong> How to handle adverse selection when
            healthier individuals avoid tontines?
          </li>
          <li>
            <strong>International comparisons:</strong> What can we learn from VPLA
            (Canada), CDC (UK), and GSA implementations?
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Long View</h3>

      <p className="mb-4">
        Tontines have survived for nearly 400 years—banned, revived, and reinvented.
        Their mathematical elegance and practical utility ensure they'll continue evolving.
      </p>

      <Callout type="success" title="The Tontine Promise">
        <p>
          In a world facing a retirement crisis, tontines offer something remarkable:
        </p>
        <MathBlock>
          {`\\text{Lifetime Income} = f(\\text{Your Savings}, \\text{Group Mortality})`}
        </MathBlock>
        <p className="mt-3">
          By linking your income to the mortality of a group rather than the profitability
          of an insurance company, tontines align incentives, reduce costs, and provide
          growing income precisely when retirees need it most.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Final Thoughts</h3>

      <p className="mb-4">
        Lorenzo de Tonti couldn't have imagined where his idea would lead. From financing
        European wars to solving the 21st-century retirement crisis, tontines demonstrate
        the power of simple mathematical ideas applied to human problems.
      </p>

      <p className="mb-4">
        The core insight remains as relevant today as it was in 1653:
      </p>

      <Example title="The Tontine Principle">
        <p className="text-lg text-center text-emerald-400 font-semibold">
          "When we pool our mortality risk, everyone who lives benefits—and nobody
          needs to profit from our longevity except ourselves."
        </p>
      </Example>

      <p className="mb-6">
        Whether tontines return as a mainstream financial product depends on regulators,
        entrepreneurs, and consumers. But the mathematics is clear: for those seeking
        efficient lifetime income, the tontine principle offers a path forward.
      </p>

      <Callout type="note" title="Course Complete">
        <p>
          Congratulations on completing <strong>The Mathematics of Tontines</strong>. You now
          understand the mathematical foundations, design principles, and practical applications
          of one of history's most elegant financial instruments.
        </p>
        <p className="mt-2">
          May your own longevity be long, your mortality credits be generous, and your
          retirement income be sufficient.
        </p>
      </Callout>
    </LessonLayout>
  );
}
