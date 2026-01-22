import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function DonnellyPooling() {
  return (
    <TranscriptLayout transcriptId="donnelly-pooling">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Mortality credits quantify the benefit of longevity pooling</li>
          <li>Group self-annuitization (GSA) is mathematically equivalent to a fair tontine</li>
          <li>Credit allocation methods affect both fairness and stability</li>
          <li>Actuarial formulas ensure intergenerational equity</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Mathematics of Mortality Credits</h3>

      <p className="mb-4">
        Professor Donnelly presents the formal framework for longevity pooling:
      </p>

      <Definition title="Mortality Credit Rate">
        <p>
          The mortality credit rate <InlineMath>{`\\mu_x`}</InlineMath> at age <InlineMath>x</InlineMath> is:
        </p>
        <MathBlock>
          {`\\mu_x = \\frac{q_x}{1 - q_x}`}
        </MathBlock>
        <p className="mt-3">
          Where <InlineMath>{`q_x`}</InlineMath> is the one-year mortality probability. This represents
          the additional return survivors receive from deceased members' contributions.
        </p>
      </Definition>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Think of mortality credits as a dividend paid by those who die to those who live.
          It's not morbid—it's insurance theory. The pool provides what no individual can:
          certainty that you won't outlive your money."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Catherine Donnelly</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Group Self-Annuitization</h3>

      <p className="mb-4">
        Donnelly explains the GSA framework:
      </p>

      <Example title="GSA Payment Formula">
        <p className="mb-3">
          In a group self-annuity, periodic payments are calculated as:
        </p>
        <MathBlock>
          {`P_t = \\frac{W_t}{\\sum_{i \\in \\text{alive}} a_{x_i}}`}
        </MathBlock>
        <p className="mt-3">
          Where:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm mt-2">
          <li><InlineMath>{`W_t`}</InlineMath> = total wealth in the pool at time <InlineMath>t</InlineMath></li>
          <li><InlineMath>{`a_{x_i}`}</InlineMath> = annuity factor for member <InlineMath>i</InlineMath> at age <InlineMath>{`x_i`}</InlineMath></li>
        </ul>
        <p className="mt-3 text-dark-400">
          As members die, the denominator shrinks, increasing payments to survivors.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Credit Allocation Methods</h3>

      <p className="mb-4">
        Different methods for distributing mortality credits:
      </p>

      <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700/50 mb-6">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Allocation Approaches</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">1</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Pro-rata by Account Value</p>
              <p className="text-sm text-dark-400">
                Each survivor receives credits proportional to their account balance.
                Simple but may disadvantage younger members.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">2</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Actuarially Weighted</p>
              <p className="text-sm text-dark-400">
                Credits distributed based on each member's mortality risk contribution.
                More complex but maintains actuarial fairness.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-400 font-bold">3</span>
            </span>
            <div>
              <p className="text-dark-200 font-medium">Age-Cohort Based</p>
              <p className="text-sm text-dark-400">
                Separate pools by age band, simpler allocation within cohorts.
                Reduces complexity at cost of pool size.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Fairness Condition</h3>

      <Definition title="Actuarially Fair Allocation">
        <p>
          An allocation is actuarially fair if:
        </p>
        <MathBlock>
          {`E[\\text{Credits Received}_i] = E[\\text{Credits Contributed}_i] \\quad \\forall i`}
        </MathBlock>
        <p className="mt-3">
          In other words, the expected value of mortality credits received equals the expected
          value of the account forfeited upon death, for every member at entry.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment Volatility Analysis</h3>

      <p className="mb-4">
        Donnelly quantifies the stability of pooled arrangements:
      </p>

      <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The standard deviation of payments decreases with <InlineMath>{`1/\\sqrt{n}`}</InlineMath>
          where <InlineMath>n</InlineMath> is pool size. A pool of 1,000 has payment volatility
          roughly one-tenth that of a pool of 10. This is why scale matters so much."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Catherine Donnelly</cite>
      </blockquote>

      <Example title="Volatility Calculation">
        <p className="mb-3">
          For a homogeneous pool with mortality rate <InlineMath>q</InlineMath>:
        </p>
        <MathBlock>
          {`\\sigma_{\\text{payment}} \\approx \\frac{\\sqrt{q(1-q)}}{\\sqrt{n} \\cdot (1-q)}`}
        </MathBlock>
        <p className="mt-3">
          With <InlineMath>{`q = 0.02`}</InlineMath> and <InlineMath>{`n = 1000`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\sigma \\approx \\frac{\\sqrt{0.0196}}{31.6 \\cdot 0.98} \\approx 0.45\\%`}
        </MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Implementation</h3>

      <Callout type="info" title="Implementation Considerations">
        <p>
          Donnelly identifies key practical factors:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Mortality tables:</strong> Which tables to use; updating frequency</li>
          <li><strong>Death verification:</strong> Timing and method of confirmation</li>
          <li><strong>Rebalancing:</strong> How often to recalculate payments</li>
          <li><strong>Anti-selection:</strong> Preventing adverse selection at entry</li>
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
          <p className="text-sm text-dark-500">Chen & Rach on utility optimization</p>
        </a>
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Mortality Credit Mathematics
          </p>
          <p className="text-sm text-dark-500">Formal derivations and proofs</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
