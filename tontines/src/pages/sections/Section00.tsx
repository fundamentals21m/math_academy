import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Tontine Story</h2>

      <p className="mb-4">
        Ten friends contribute to a pot. Each year, the investment returns are split among
        those still alive. When you die, your share doesn't go to your heirs—it goes to
        the survivors. The last person standing gets the entire remaining pool.
      </p>

      <p className="mb-4">
        This is the essence of a <strong>tontine</strong>—a financial instrument that
        transforms mortality into income. It's a mechanism that has funded wars, built
        landmarks, and is now being reconsidered as a solution to the retirement crisis.
      </p>

      <Callout type="info" title="Learning Philosophy">
        <p>
          This course takes you from <em>borrowed belief</em> to <em>earned conviction</em>.
          You'll understand not just <em>that</em> tontines can provide lifetime income,
          but <em>why</em> they work mathematically—and how to design them optimally.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lorenzo Tonti's Innovation</h3>

      <p className="mb-4">
        The story begins in Italy, 1653. A Neapolitan banker named <strong>Lorenzo Tonti</strong>
        was advising Cardinal Mazarin, chief minister to the young King Louis XIV of France.
        The crown needed money—desperately.
      </p>

      <Definition title="Tontine (Original Structure)">
        <p>
          Tonti proposed a scheme where:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Citizens invest a lump sum</li>
          <li>The government pays annual dividends from the pool</li>
          <li>When a member dies, their share goes to survivors</li>
          <li>The last survivor receives the largest annual payout</li>
          <li>When all members die, remaining capital reverts to the crown</li>
        </ol>
        <p className="mt-3">
          It was genius: the government gets money upfront, citizens get growing income,
          and the crown eventually inherits everything.
        </p>
      </Definition>

      <p className="mb-4">
        Although France rejected Tonti's proposal, the idea spread. The first actual tontine
        was launched in <strong>Kampen, Netherlands in 1670</strong>. France eventually adopted
        the concept in 1689, and England followed in 1693.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How the Original Tontine Worked</h3>

      <Example title="Simple Tontine Mechanics">
        <p className="mb-3">Consider a tontine with these parameters:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-1">Members</p>
            <p className="text-sm text-dark-300">
              <InlineMath>N = 100</InlineMath> people, each contributing{' '}
              <InlineMath>C = \$10,000</InlineMath>
            </p>
          </div>
          <div className="bg-dark-700 rounded-lg p-3">
            <p className="text-emerald-400 font-bold mb-1">Total Pool</p>
            <p className="text-sm text-dark-300">
              <InlineMath>P = \$1,000,000</InlineMath>
            </p>
          </div>
        </div>
        <p className="mb-2">
          If the pool earns 5% annual return (<InlineMath>\$50,000</InlineMath>),
          and 2 members die in year 1:
        </p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>98 survivors split <InlineMath>\$50,000</InlineMath></li>
          <li>Each survivor receives <InlineMath>\$50,000 \div 98 \approx \$510</InlineMath></li>
          <li>That's a 5.1% return instead of 5%—the extra comes from the deceased</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Insight</h3>

      <p className="mb-4">
        Tontines work because mortality creates a <strong>redistribution mechanism</strong>.
        When someone dies, their share doesn't disappear—it goes to those who survive.
        This creates two effects:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-emerald-500">
          <p className="text-emerald-400 font-bold mb-2">Mortality Credit</p>
          <p className="text-sm text-dark-300">
            Survivors receive extra income from deceased members' shares.
            This "mortality credit" grows larger as more members die.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-2">Longevity Insurance</p>
          <p className="text-sm text-dark-300">
            Those who live longest receive the most. The tontine protects against
            the risk of outliving your savings.
          </p>
        </div>
      </div>

      <Callout type="note" title="The Fundamental Trade-off">
        <p>
          In a tontine, you trade the right to leave assets to heirs for the right
          to receive income as long as you live. This is the opposite of life insurance—which
          pays when you die. A tontine pays because you <em>don't</em> die.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tontines vs. Annuities</h3>

      <p className="mb-4">
        You might wonder: how is this different from an annuity? The key distinction:
      </p>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="text-left border-b border-dark-700">
            <th className="pb-2 text-dark-400">Feature</th>
            <th className="pb-2 text-dark-400">Life Annuity</th>
            <th className="pb-2 text-dark-400">Tontine</th>
          </tr>
        </thead>
        <tbody className="text-dark-300">
          <tr className="border-b border-dark-800">
            <td className="py-2">Payment Amount</td>
            <td className="py-2">Fixed by contract</td>
            <td className="py-2 text-emerald-400">Variable (depends on deaths)</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Risk Bearer</td>
            <td className="py-2">Insurance company</td>
            <td className="py-2 text-emerald-400">Pool members</td>
          </tr>
          <tr className="border-b border-dark-800">
            <td className="py-2">Longevity Risk</td>
            <td className="py-2">Company absorbs it</td>
            <td className="py-2 text-emerald-400">Shared among members</td>
          </tr>
          <tr>
            <td className="py-2">Cost</td>
            <td className="py-2">Higher (company profit)</td>
            <td className="py-2 text-emerald-400">Lower (no intermediary)</td>
          </tr>
        </tbody>
      </table>

      <Definition title="Longevity Risk">
        <p>
          The financial risk of living longer than expected. If you plan for 20 years
          of retirement but live 30 years, you face longevity risk. Tontines and annuities
          both address this risk—but through different mechanisms.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Study Tontines Now?</h3>

      <p className="mb-4">
        After being largely forgotten for a century, tontines are experiencing a
        <strong> modern revival</strong>. Three forces are driving renewed interest:
      </p>

      <ol className="list-decimal list-inside space-y-3 mb-6">
        <li>
          <strong>The Longevity Crisis:</strong> People are living longer, but savings
          haven't kept pace. Traditional retirement planning is failing.
        </li>
        <li>
          <strong>The Annuity Problem:</strong> Insurance companies charge high fees
          (12-18% loading) for the guarantee they provide. Tontines can be more efficient.
        </li>
        <li>
          <strong>Academic Research:</strong> Mathematicians have discovered how to design
          "optimal" tontines that maximize lifetime utility. The 2015 paper by Milevsky
          and Salisbury sparked particular interest.
        </li>
      </ol>

      <Callout type="success" title="The Promise of Modern Tontines">
        <p>
          Modern tontines aren't the "last survivor takes all" schemes of history.
          They're carefully designed to provide smooth, growing income that adjusts
          to actual mortality. We'll explore exactly how to construct them in this course.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What You'll Learn</h3>

      <p className="mb-4">
        This course builds your understanding systematically:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Part 1: Origins & Fundamentals</p>
          <p className="text-sm text-dark-300">
            History, survival mathematics, life tables, and basic tontine mechanics.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Part 2: Mathematical Construction</p>
          <p className="text-sm text-dark-300">
            Actuarial fairness, utility theory, optimization, and the "natural tontine."
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Part 3: Comparison & Application</p>
          <p className="text-sm text-dark-300">
            Tontines vs. annuities, modern designs, and regulatory landscape.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-emerald-400 font-bold mb-2">Part 4: Future & Integration</p>
          <p className="text-sm text-dark-300">
            Retirement portfolios, policy recommendations, and where tontines are heading.
          </p>
        </div>
      </div>

      <p className="text-dark-400 italic">
        Next, we'll explore the "Golden Age" of tontines—when they funded landmarks,
        financed governments, and became ubiquitous across Europe and America.
      </p>
    </LessonLayout>
  );
}
