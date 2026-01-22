import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Conditional Survival</h2>

      <p className="mb-4">
        A 65-year-old planning retirement doesn't care about the probability of surviving
        <em>from birth</em> to age 85. They want to know: given that I've made it to 65,
        what are my chances of reaching 85?
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Actuarial Notation</h3>

      <Definition title="Conditional Survival Probability">
        <p>
          The notation <InlineMath>{'_tp_x'}</InlineMath> denotes the probability of surviving
          <InlineMath>t</InlineMath> more years given current age <InlineMath>x</InlineMath>:
        </p>
        <MathBlock>
          {`{}_tp_x = P(\\text{survive } t \\text{ more years} \\mid \\text{currently age } x)`}
        </MathBlock>
        <p className="mt-2">
          In terms of the survival function:
        </p>
        <MathBlock>
          {`{}_tp_x = \\frac{S(x+t)}{S(x)}`}
        </MathBlock>
      </Definition>

      <Example title="Calculating Conditional Survival">
        <p className="mb-3">
          What's the probability a 65-year-old survives to 75?
        </p>
        <MathBlock>
          {`{}_{10}p_{65} = \\frac{S(75)}{S(65)} = \\frac{0.70}{0.85} = 0.824`}
        </MathBlock>
        <p className="mt-3 text-emerald-400">
          An 82.4% chance of making it 10 more years.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Concrete Numbers</h3>

      <p className="mb-4">
        Using U.S. Social Security life tables, here are actual survival probabilities:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-3">65-year-old Male</p>
          <ul className="space-y-1 text-sm">
            <li><InlineMath>{'_1p_{65}'}</InlineMath> = 0.989 (98.9% survive 1 more year)</li>
            <li><InlineMath>{'_{20}p_{65}'}</InlineMath> = 0.691 (69.1% survive to 85)</li>
            <li><InlineMath>e_{'{65}'}</InlineMath> = 18.0 years (life expectancy)</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-3">65-year-old Female</p>
          <ul className="space-y-1 text-sm">
            <li><InlineMath>{'_1p_{65}'}</InlineMath> = 0.993 (99.3% survive 1 more year)</li>
            <li><InlineMath>{'_{20}p_{65}'}</InlineMath> = 0.792 (79.2% survive to 85)</li>
            <li><InlineMath>e_{'{65}'}</InlineMath> = 20.7 years (life expectancy)</li>
          </ul>
        </div>
      </div>

      <Callout type="note" title="The Subscript Convention">
        <p>
          In actuarial notation, subscripts denote time and age:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'_tp_x'}</InlineMath> = probability of surviving <InlineMath>t</InlineMath> years from age <InlineMath>x</InlineMath></li>
          <li><InlineMath>{'_tq_x'}</InlineMath> = probability of dying within <InlineMath>t</InlineMath> years = <InlineMath>{'1 - {}_tp_x'}</InlineMath></li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Matters for Tontines</h3>

      <p className="mb-4">
        When designing a tontine, we need to know:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>How many members will likely survive to each future year</li>
        <li>How to weight contributions for people of different ages</li>
        <li>What payouts are "fair" given different mortality risks</li>
      </ul>

      <p className="text-dark-400 italic">
        These conditional probabilities come from life tables—standardized mortality
        data collected by governments and actuaries. Let's examine them next.
      </p>
    </LessonLayout>
  );
}
