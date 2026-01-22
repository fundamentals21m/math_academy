import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Present Value with Interest</h2>

      <p className="mb-4">
        A dollar today is worth more than a dollar next year. To compare payments at
        different times, we need to discount future amounts to their present value.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Discount Factor</h3>

      <Definition title="Discount Factor">
        <p>
          Given an annual interest rate <InlineMath>i</InlineMath>, the discount factor is:
        </p>
        <MathBlock>
          {`v = \\frac{1}{1+i}`}
        </MathBlock>
        <p className="mt-2">
          This tells us the present value of $1 to be received one year from now.
        </p>
      </Definition>

      <Example title="Discounting with i = 4%">
        <p className="mb-3">If the interest rate is 4%:</p>
        <MathBlock>
          {`v = \\frac{1}{1.04} = 0.9615`}
        </MathBlock>
        <p className="mt-3">
          So $1 next year is worth $0.9615 today. Equivalently, $0.9615 invested
          today at 4% becomes $1 in one year.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multi-Year Discounting</h3>

      <p className="mb-4">
        For payments <InlineMath>t</InlineMath> years in the future:
      </p>

      <MathBlock>
        {`\\text{Present Value of } \\$1 \\text{ in } t \\text{ years} = v^t`}
      </MathBlock>

      <Example title="Present Values Over Time (i = 4%)">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Years</th>
              <th className="pb-2"><InlineMath>v^t</InlineMath></th>
              <th className="pb-2">Meaning</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">1</td>
              <td className="py-2">0.9615</td>
              <td className="py-2">$1 next year worth $0.96 today</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">5</td>
              <td className="py-2">0.8219</td>
              <td className="py-2">$1 in 5 years worth $0.82 today</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">10</td>
              <td className="py-2">0.6756</td>
              <td className="py-2">$1 in 10 years worth $0.68 today</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">20</td>
              <td className="py-2">0.4564</td>
              <td className="py-2">$1 in 20 years worth $0.46 today</td>
            </tr>
            <tr>
              <td className="py-2">30</td>
              <td className="py-2">0.3083</td>
              <td className="py-2">$1 in 30 years worth $0.31 today</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Discounting Matters</h3>

      <p className="mb-4">
        When evaluating a tontine's fairness, we'll receive payments over many years.
        We can't just add up $4,000 + $4,500 + $5,000 + ... because these occur at
        different times. We need to discount them all to present value first.
      </p>

      <p className="text-dark-400 italic">
        But there's another factor: we might not be alive to receive those future payments.
        Next, we combine discounting with survival probabilities.
      </p>
    </LessonLayout>
  );
}
