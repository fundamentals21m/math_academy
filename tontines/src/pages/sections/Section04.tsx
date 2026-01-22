import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SurvivalCurveExplorer } from '@/components/visualizations';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Survival Probability Basics</h2>

      <p className="mb-4">
        "How long will I live?" No one knows the answer for any individual. But for populations,
        we have remarkably precise statistics. This is enough to pool risk effectively.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Fundamental Question</h3>

      <Definition title="Random Lifetime">
        <p>
          Let <InlineMath>T</InlineMath> be a random variable representing the time of death
          (measured from birth). We can ask: what's the probability of surviving to various ages?
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Survival Function</h3>

      <Definition title="Survival Function S(t)">
        <p>
          The probability of surviving to at least age <InlineMath>t</InlineMath>:
        </p>
        <MathBlock>
          {`S(t) = P(T > t) = \\text{Probability of surviving to age } t`}
        </MathBlock>
        <p className="mt-2">
          Properties:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>S(0) = 1</InlineMath> (everyone is alive at birth)</li>
          <li><InlineMath>S(t)</InlineMath> decreases as <InlineMath>t</InlineMath> increases</li>
          <li><InlineMath>{'S(\\infty) = 0'}</InlineMath> (everyone eventually dies)</li>
        </ul>
      </Definition>

      <Example title="Typical Survival Probabilities">
        <p className="mb-3">For a general population:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2">S(t)</th>
              <th className="pb-2">Interpretation</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">0</td>
              <td className="py-2">1.000</td>
              <td className="py-2">100% alive at birth</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">30</td>
              <td className="py-2">0.99</td>
              <td className="py-2">99% survive to 30</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">0.85</td>
              <td className="py-2">85% survive to 65</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">0.40</td>
              <td className="py-2">40% survive to 85</td>
            </tr>
            <tr>
              <td className="py-2">110</td>
              <td className="py-2">~0.0000001</td>
              <td className="py-2">Virtually nobody</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive Explorer</h3>

      <p className="mb-4">
        Explore survival curves using the Gompertz-Makeham mortality model. Adjust the starting age
        and compare male versus female survival probabilities.
      </p>

      <SurvivalCurveExplorer />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Death Distribution</h3>

      <Definition title="Cumulative Death Probability F(t)">
        <p>
          The probability of dying by age <InlineMath>t</InlineMath>:
        </p>
        <MathBlock>
          {`F(t) = P(T \\leq t) = 1 - S(t)`}
        </MathBlock>
      </Definition>

      <Callout type="info" title="Why These Functions Matter">
        <p>
          Every tontine calculation depends on survival probabilities. When we ask
          "how much should person X receive?", the answer depends on how likely they
          are to be alive to receive it.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        The survival function tells us probability from birth. But for retirement planning,
        we need something more: the probability of surviving <em>additional</em> years
        given that you're already a certain age. That's next.
      </p>
    </LessonLayout>
  );
}
