import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function FullmerTontineDesign() {
  return (
    <TranscriptLayout transcriptId="fullmer-tontine-design">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Actuarial fairness ensures equal expected value at entry regardless of age</li>
          <li>Redistribution rules determine how mortality credits flow</li>
          <li>Optimal design balances simplicity with mathematical rigor</li>
          <li>Pool size affects payment volatility significantly</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Defining Actuarial Fairness</h3>

      <p className="mb-4">
        Richard Fullmer begins with the fundamental principle of fair tontine design:
      </p>

      <Definition title="Actuarial Fairness">
        <p>
          A tontine is actuarially fair if, at entry, every member has the same expected
          present value of future payments per dollar contributed:
        </p>
        <MathBlock>
          {`E[PV_i] = E[PV_j] \\quad \\forall i, j`}
        </MathBlock>
        <p className="mt-3">
          This means a 65-year-old and an 85-year-old can join the same pool—but they'll
          contribute different amounts per unit of expected income.
        </p>
      </Definition>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Fair doesn't mean everyone pays the same. Fair means everyone gets the same
          expected deal. A 30-year-old expects to collect for decades; an 80-year-old
          for maybe a decade. Contributions must reflect this."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Richard Fullmer</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Redistribution Problem</h3>

      <p className="mb-4">
        When a member dies, how should their share be distributed?
      </p>

      <Example title="Redistribution Methods">
        <p className="mb-3">
          Fullmer compares three approaches:
        </p>
        <div className="space-y-4 text-sm">
          <div className="p-3 bg-dark-700/50 rounded">
            <p className="text-emerald-400 font-semibold">1. Equal Redistribution</p>
            <p className="text-dark-300 mt-1">
              All survivors get equal shares. Simple but favors younger members.
            </p>
          </div>
          <div className="p-3 bg-dark-700/50 rounded">
            <p className="text-amber-400 font-semibold">2. Proportional to Holdings</p>
            <p className="text-dark-300 mt-1">
              Distribution based on current account value. More intuitive but complex.
            </p>
          </div>
          <div className="p-3 bg-dark-700/50 rounded">
            <p className="text-cyan-400 font-semibold">3. Age-Weighted (Fair)</p>
            <p className="text-dark-300 mt-1">
              Distribution based on actuarial value. Maintains fairness over time.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mathematical Framework</h3>

      <p className="mb-4">
        Fullmer presents the mathematical foundation:
      </p>

      <Definition title="Fair Share Formula">
        <p>
          For a fair tontine, each member's share <InlineMath>s_i</InlineMath> is:
        </p>
        <MathBlock>
          {`s_i = \\frac{w_i \\cdot a_i}{\\sum_{j \\in \\text{alive}} w_j \\cdot a_j}`}
        </MathBlock>
        <p className="mt-3">
          Where <InlineMath>w_i</InlineMath> is member <InlineMath>i</InlineMath>'s contribution and <InlineMath>a_i</InlineMath> is
          their actuarial annuity factor based on age and mortality tables.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Pool Size and Volatility</h3>

      <p className="mb-4">
        The relationship between pool size and payment stability:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "With 100 members, you'll see 5-10% payment volatility. With 1,000 members,
          it drops to 1-3%. At 10,000, you're under 1%. The law of large numbers is
          the tontine's best friend."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Richard Fullmer</cite>
      </blockquote>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Volatility vs Pool Size</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-dark-400 w-24">100 members</span>
            <div className="flex-1 bg-dark-700 rounded-full h-4">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <span className="text-dark-300 w-16">~8%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-dark-400 w-24">1,000 members</span>
            <div className="flex-1 bg-dark-700 rounded-full h-4">
              <div className="bg-amber-500 h-4 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <span className="text-dark-300 w-16">~2.5%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-dark-400 w-24">10,000 members</span>
            <div className="flex-1 bg-dark-700 rounded-full h-4">
              <div className="bg-emerald-500 h-4 rounded-full" style={{ width: '8%' }}></div>
            </div>
            <span className="text-dark-300 w-16">~0.8%</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Design Trade-offs</h3>

      <Callout type="info" title="Key Design Decisions">
        <p>
          Fullmer identifies critical trade-offs in tontine design:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Simplicity vs Fairness:</strong> Complex formulas may be more fair but harder to explain</li>
          <li><strong>Flexibility vs Stability:</strong> Allowing withdrawals reduces pool stability</li>
          <li><strong>Age Mixing vs Homogeneity:</strong> Mixed-age pools are larger but more complex</li>
          <li><strong>Transparency vs Privacy:</strong> Full disclosure aids trust but may reveal sensitive data</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Resources</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/chen-optimal-tontine"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-emerald-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-emerald-400 transition-colors">
            Optimal Tontine Design
          </p>
          <p className="text-sm text-dark-500">Chen & Rach on utility theory</p>
        </a>
        <a
          href="#/section/10"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 10: Fair Redistribution
          </p>
          <p className="text-sm text-dark-500">Mathematical redistribution rules</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
