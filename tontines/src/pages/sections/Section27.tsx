import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">How Life Annuities Work</h2>

      <p className="mb-4">
        To fairly compare tontines with annuities, we need to understand how annuity
        pricing works. Insurance companies use actuarial mathematics to determine
        what premium they should charge for a guaranteed lifetime income.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Basic Structure</h3>

      <p className="mb-4">
        A life annuity is a simple contract: you pay a lump sum <InlineMath>P</InlineMath> (the premium),
        and the insurance company pays you <InlineMath>A</InlineMath> dollars per year for as long
        as you live.
      </p>

      <Definition title="Annuity-Due Present Value">
        <p>
          The actuarially fair premium for a life annuity starting at age <InlineMath>x</InlineMath> is:
        </p>
        <MathBlock>
          {`P = A \\times \\ddot{a}_x`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\ddot{a}_x`}</InlineMath> is the <strong>annuity-due factor</strong>:
        </p>
        <MathBlock>
          {`\\ddot{a}_x = \\sum_{t=0}^{\\infty} {}_tp_x \\cdot v^t`}
        </MathBlock>
        <p className="mt-2">
          Here <InlineMath>{'_tp_x'}</InlineMath> is the probability of surviving <InlineMath>t</InlineMath> years
          from age <InlineMath>x</InlineMath>, and <InlineMath>{'v = 1/(1+r)'}</InlineMath> is the discount factor.
        </p>
      </Definition>

      <p className="mb-4">
        The annuity-due factor tells us the expected present value of receiving $1 per year
        for life, with payments starting immediately (hence "due" rather than ordinary annuity).
      </p>

      <Example title="Pricing a Fair Annuity">
        <p className="mb-3">
          A 65-year-old wants to buy a life annuity. Using standard mortality tables and
          a 4% discount rate, the annuity-due factor is <InlineMath>{`\\ddot{a}_{65} = 14.2`}</InlineMath>.
        </p>
        <p className="mb-3">
          With a $100,000 premium, the <strong>actuarially fair</strong> annual payout is:
        </p>
        <MathBlock>
          {`A = \\frac{P}{\\ddot{a}_{65}} = \\frac{\\$100{,}000}{14.2} = \\$7{,}042/\\text{year}`}
        </MathBlock>
        <p className="mt-3 text-emerald-400">
          A fair annuity would pay $7,042 annually for life.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Reality: Loading Factors</h3>

      <p className="mb-4">
        Insurance companies don't sell actuarially fair annuities. They add <strong>loading
        factors</strong> to cover their costs and risks:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Loading Factor</th>
              <th className="pb-2">Typical Rate</th>
              <th className="pb-2">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Administrative costs</td>
              <td className="py-2">5%</td>
              <td className="py-2">Staff, systems, compliance</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Profit margin</td>
              <td className="py-2">3-5%</td>
              <td className="py-2">Shareholder returns</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-medium text-dark-100">Capital reserves</td>
              <td className="py-2">5%</td>
              <td className="py-2">Regulatory requirements</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-dark-100">Adverse selection buffer</td>
              <td className="py-2">2%</td>
              <td className="py-2">Buyers tend to be healthier</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-dark-400 text-sm">
          Total loading: approximately 15-17% of actuarially fair value
        </p>
      </div>

      <Callout type="warning" title="Adverse Selection">
        <p>
          People who buy annuities tend to be healthier than average—they expect to live
          longer, making the annuity a good deal for them. Insurance companies know this
          and adjust their pricing upward to compensate.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What You Actually Get</h3>

      <Example title="Market Reality">
        <p className="mb-3">
          Our 65-year-old with $100,000 would get a <strong>fair</strong> annuity of $7,042/year.
        </p>
        <p className="mb-3">
          But in the real market, typical quotes are around:
        </p>
        <MathBlock>
          {`A_{\\text{market}} \\approx \\$6{,}000/\\text{year}`}
        </MathBlock>
        <p className="mt-3">
          This is <span className="text-rose-400 font-semibold">15% less</span> than the
          actuarially fair value. Equivalently, it's as if the effective annuity factor were:
        </p>
        <MathBlock>
          {`\\ddot{a}_{\\text{loaded}} = \\frac{\\$100{,}000}{\\$6{,}000} = 16.67`}
        </MathBlock>
        <p className="mt-3 text-dark-400">
          The loaded factor (16.67) is higher than the fair factor (14.2), meaning you pay
          more per dollar of annual income.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Money Left on the Table</h3>

      <p className="mb-4">
        Over a 20-year retirement, that 15% loading adds up significantly:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Fair Annuity</p>
          <p className="text-2xl font-bold text-dark-100">$7,042/year</p>
          <p className="text-sm text-dark-400 mt-2">
            20 years = $140,840 total received
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-rose-500">
          <p className="text-rose-400 font-bold mb-2">Market Annuity</p>
          <p className="text-2xl font-bold text-dark-100">$6,000/year</p>
          <p className="text-sm text-dark-400 mt-2">
            20 years = $120,000 total received
          </p>
        </div>
      </div>

      <p className="mb-4">
        The difference—over <strong>$20,000</strong> in expected lifetime income—goes to
        the insurance company, not to you. This is the inefficiency that tontines can address.
      </p>

      <Callout type="info" title="Key Takeaway">
        <p>
          Life annuities provide guaranteed income, but the guarantee comes at a substantial
          cost. Loading factors of 15% or more represent a significant transfer of wealth
          from annuitants to insurance companies. Understanding this pricing helps us
          evaluate when tontines might offer better value.
        </p>
      </Callout>

      <p className="text-dark-400 italic">
        But why do insurance companies charge such high loadings? The answer lies in the
        risks they face, which we'll examine next.
      </p>
    </LessonLayout>
  );
}
