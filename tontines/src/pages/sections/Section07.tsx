import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Force of Mortality</h2>

      <p className="mb-4">
        The death rate <InlineMath>q_x</InlineMath> measures mortality over a full year.
        But what about the <em>instantaneous</em> risk of death at any moment? This is
        the <strong>force of mortality</strong>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Definition</h3>

      <Definition title="Force of Mortality">
        <p>
          The force of mortality <InlineMath>{`\\mu(t)`}</InlineMath> is the instantaneous
          death rate at age <InlineMath>t</InlineMath>:
        </p>
        <MathBlock>
          {`\\mu(t) = \\lim_{\\delta t \\to 0} \\frac{P(\\text{die in } [t, t+\\delta t] \\mid \\text{alive at } t)}{\\delta t}`}
        </MathBlock>
        <p className="mt-2">
          In terms of the survival function:
        </p>
        <MathBlock>
          {`\\mu(t) = -\\frac{S'(t)}{S(t)} = -\\frac{d}{dt} \\ln S(t)`}
        </MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interpretation</h3>

      <p className="mb-4">
        Think of <InlineMath>{`\\mu(t)`}</InlineMath> like an interest rate, but for death.
        Just as an interest rate tells you the instantaneous rate of growth of money,
        the force of mortality tells you the instantaneous rate of dying.
      </p>

      <Example title="Force of Mortality by Age (U.S. Males, approximate)">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Age</th>
              <th className="pb-2"><InlineMath>{`\\mu(t)`}</InlineMath></th>
              <th className="pb-2">Interpretation</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">30</td>
              <td className="py-2">0.001</td>
              <td className="py-2">0.1% per year</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">65</td>
              <td className="py-2">0.012</td>
              <td className="py-2">1.2% per year</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">75</td>
              <td className="py-2">0.025</td>
              <td className="py-2">2.5% per year</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">85</td>
              <td className="py-2">0.080</td>
              <td className="py-2">8.0% per year</td>
            </tr>
            <tr>
              <td className="py-2">95</td>
              <td className="py-2">0.200</td>
              <td className="py-2">20% per year</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Gompertz-Makeham Law</h3>

      <p className="mb-4">
        In 1825, Benjamin Gompertz discovered that human mortality follows a remarkably
        simple pattern: the death rate increases exponentially with age.
      </p>

      <Definition title="Gompertz-Makeham Law">
        <p>The force of mortality can be modeled as:</p>
        <MathBlock>
          {`\\mu(t) = A + B \\cdot e^{ct}`}
        </MathBlock>
        <p className="mt-2">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>A</InlineMath> = baseline mortality (accidents, disease)</li>
          <li><InlineMath>{'B \\cdot e^{ct}'}</InlineMath> = age-dependent mortality (grows exponentially)</li>
          <li><InlineMath>c</InlineMath> = rate of mortality acceleration (~0.085)</li>
        </ul>
      </Definition>

      <Callout type="success" title="The Exponential Pattern">
        <p>
          Remarkably, human mortality roughly doubles every 8-10 years after middle age.
          This exponential growth is why longevity risk is so significant: even small
          increases in life expectancy have large effects on financial planning.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Connecting to Survival</h3>

      <p className="mb-4">
        The force of mortality and survival function are intimately related:
      </p>

      <MathBlock>
        {`S(t) = e^{-\\int_0^t \\mu(s) ds}`}
      </MathBlock>

      <p className="mb-4">
        This means if we know how the death rate changes with age, we can calculate
        survival probabilities at any point.
      </p>

      <p className="text-dark-400 italic">
        We now have all the mortality mathematics we need. Next, let's see how to
        apply these concepts to the basic tontine mechanism.
      </p>
    </LessonLayout>
  );
}
