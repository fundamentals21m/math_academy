import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Major debt categories
const debtCategories = [
  { entity: 'US Government', amount: '$40 trillion', notes: 'Far exceeds GDP, no chance of repayment without devaluation' },
  { entity: 'US Unfunded Liabilities', amount: '$200+ trillion', notes: 'Social Security, Medicare, government pensions' },
  { entity: 'Japan', amount: '$10 trillion', notes: 'Second largest sovereign borrower' },
  { entity: 'Fannie Mae / Freddie Mac', amount: '$7 trillion', notes: 'Government-backed mortgage lending' },
  { entity: 'Auto Loans', amount: '$2 trillion', notes: 'Volkswagen, Toyota, Ford as largest issuers' },
  { entity: 'Student Loans', amount: '$2 trillion', notes: 'Irrevocable, immune to bankruptcy' },
];

// Battery Finance features
const batteryFeatures = [
  { feature: 'Bitcoin as Collateral', description: 'Can be used as 10-30% of collateral alongside traditional assets' },
  { feature: 'No Mark-to-Market Trigger', description: 'Bitcoin\'s market price won\'t factor into LTV ratio for a fixed period (minimum 4 years)' },
  { feature: 'Shared Upside', description: 'Lender and borrower share in bitcoin\'s appreciation over the loan life' },
  { feature: 'Vesting Schedule', description: 'Longer loan duration means greater share of bitcoin appreciation for borrower' },
  { feature: 'Lower Interest Rate', description: 'Using bitcoin as collateral reduces the interest rate on the loan' },
  { feature: 'No Prepayment Penalty', description: 'Loan can be paid off at any time without penalty' },
];

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "If a borrower posts bitcoin as collateral, this loan would automatically become
        the most senior loan. A person will let any other asset go before relinquishing
        their bitcoin to a lender."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        Credit is one of the fundamental features of any high-functioning society. The ability
        to borrow and lend at a healthy equilibrium is what separates the highest functioning
        economies from the lowest ones. <strong className="text-orange-400">Credit is built on
        trust and trustworthiness</strong> - characterized by its own term: creditworthiness.
      </p>

      {/* Understanding Credit */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding Creditworthiness</h2>

      <p className="my-4">
        The distinction between willingness and ability to pay is crucial. When a person owes
        money to ten different lenders, each debt has a varying willingness that is related to
        the severity of consequences from failure to pay.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <span className="text-orange-400 font-bold text-lg">Priority</span>
          <p className="text-dark-200 mt-2">
            Debts are assigned a priority so lenders understand where they stand on each particular loan
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <span className="text-orange-400 font-bold text-lg">Willingness</span>
          <p className="text-dark-200 mt-2">
            People have varying levels of willingness to honor debts, often tied to consequences
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <span className="text-orange-400 font-bold text-lg">Ability</span>
          <p className="text-dark-200 mt-2">
            Financial crises happen - even trustworthy borrowers can find themselves unable to pay
          </p>
        </div>
      </div>

      {/* The Fiat Debt System */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Fiat Debt System</h2>

      <p className="my-4">
        A hallmark of a society built on inflationary money is that debt is ubiquitous. It makes
        sense to borrow money now, use it for something valuable, and pay back your loan in the
        future with debased money. <strong className="text-orange-400">In a world without bitcoin,
        this is how people win in the fiat game - you want to be a borrower.</strong>
      </p>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Entity</th>
              <th className="px-4 py-3 text-left text-orange-400">Debt Amount</th>
              <th className="px-4 py-3 text-left text-orange-400">Notes</th>
            </tr>
          </thead>
          <tbody>
            {debtCategories.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.entity}</td>
                <td className="px-4 py-3 text-orange-400 font-semibold">{item.amount}</td>
                <td className="px-4 py-3 text-dark-400 text-sm">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Biggest Borrower:</strong> The US government has issued close to $40 trillion
          in debt - far in excess of GDP. There is zero likelihood of ever paying it back without
          significant dollar devaluation. If we include unfunded liabilities, we're looking at
          over $200 trillion.
        </p>
      </Callout>

      {/* How Lending Works */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">How Does Lending Work?</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Government Debt</h4>
          <p className="text-sm text-dark-300">
            Governments raise money by selling securities called bonds, backed by the promise
            of future tax revenue and the ability to print currency.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Corporate Debt</h4>
          <p className="text-sm text-dark-300">
            Companies raise money through bonds or equity stakes. Cash flow determines
            creditworthiness; without it, equity stakes or restrictive covenants are required.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Individual Debt</h4>
          <p className="text-sm text-dark-300">
            A healthy W2 salary is very creditworthy. As borrowing increases, lenders look
            for guarantors or collateral before lending more.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Collateralized Debt</h4>
          <p className="text-sm text-dark-300">
            Assets held as collateral (homes, cars, retirement accounts) back loans. When LTV
            ratios breach minimums, borrowers must pledge more collateral or face liquidation.
          </p>
        </Card>
      </CardGrid>

      {/* Collateral Problems */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Collateral Before Bitcoin: Boom and Bust</h2>

      <p className="my-4">
        The story of virtually every market crash going back to Sumeria involves collateral
        becoming devalued significantly over a short period of time. This was the central theme
        of multiple recent crises:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <span className="text-red-400 font-bold">2008</span>
          <p className="text-dark-200 mt-2 text-sm">
            Global Financial Crisis - housing collateral plummeted, people walked away from
            underwater mortgages
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <span className="text-red-400 font-bold">2022</span>
          <p className="text-dark-200 mt-2 text-sm">
            Bank of England Pension Bailout - UK Gilts rapidly devalued by Fed rate rises,
            triggering emergency intervention
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <span className="text-red-400 font-bold">2023</span>
          <p className="text-dark-200 mt-2 text-sm">
            US Banking Crisis - five major banks failed when US Treasuries were devalued by
            unprecedented 5% rate rise
          </p>
        </div>
      </div>

      <p className="my-4 text-orange-400 font-semibold">
        UK Gilts and US Treasuries were no longer reliable collateral. We seem to have reached
        the end of the line. Enter bitcoin and a company called Battery Finance.
      </p>

      {/* Battery Finance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bitcoin as Collateral: Newmarket Capital</h2>

      <p className="my-4">
        Newmarket Capital and their subsidiary, Battery Finance, have developed a loan product
        that might possibly transform credit markets as we know them. Battery Finance enables
        bitcoin to be used as 10-30% of the collateral for loans alongside traditional assets.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-4">Battery Finance Loan Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {batteryFeatures.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-orange-400 font-bold text-lg">{i + 1}.</span>
              <div>
                <p className="text-dark-200 font-semibold">{item.feature}</p>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>The Four-Year Rhythm:</strong> The earliest that bitcoin collateral can be
          wound down is four years, aligned with bitcoin's four-year halving cycle. The loan
          carries a single-digit interest rate and has a maturity of 10 years.
        </p>
      </Callout>

      {/* Subordination Redefined */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Subordination Redefined</h2>

      <p className="my-4">
        Credit markets operate around the concept of <strong className="text-orange-400">subordination</strong> -
        which loans get paid off first if a borrower has multiple loans. The most senior loan
        (paid off first) is the most creditworthy and demands the lowest yield.
      </p>

      <p className="my-4">
        This idea of seniority is about to be flipped on its head by Battery Finance's loan product.
        If a borrower posts bitcoin as collateral, this loan would automatically become the most
        senior loan - not because of contractual priority, but because of <strong className="text-orange-400">behavioral
        priority</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Why Bitcoin Collateral Creates Senior Loans</h4>
        <p className="text-dark-200 mb-4">
          A person will let any other asset go before relinquishing their bitcoin to a lender.
          This behavioral reality, combined with accumulated bitcoin gains over time, means:
        </p>
        <ul className="text-dark-300 space-y-2">
          <li>- Borrowers have extreme incentive to honor bitcoin-collateralized loans first</li>
          <li>- After four years, there will almost certainly be significant gains at stake</li>
          <li>- Default rates on these loans should approach AAA-equivalent behavior</li>
          <li>- Traditional subordination structures become inverted</li>
        </ul>
      </div>

      {/* The Degen vs. The Saver */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Two Types of Bitcoin Borrowers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">The Degen</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>- Accumulated bitcoin through reckless borrowing</li>
            <li>- Not afraid of debt or high yields</li>
            <li>- Would be considered a terrible borrower by traditional lenders</li>
            <li>- Views themselves as speculatively attacking the dollar</li>
            <li>- Will absolutely prioritize the home loan if bitcoin gains are at stake</li>
            <li>- Battery can charge high yield with confidence they'll repay</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700">
          <h4 className="font-semibold text-orange-400 mb-3">The Saver</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>- Typically doesn't like debt and avoids it</li>
            <li>- Considered a good risk to traditional lenders</li>
            <li>- Their bitcoin is everything to them</li>
            <li>- Will go to the ends of the world to protect their stack</li>
            <li>- Using bitcoin as collateral will strongly impact their behavior</li>
            <li>- Should exhibit essentially AAA-equivalent behavior</li>
          </ul>
        </div>
      </div>

      {/* Arbitrage Opportunity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Arbitrage Opportunity</h2>

      <p className="my-4">
        For bond portfolio managers, this creates a significant arbitrage opportunity: buying
        a package of Battery's loans over a similarly rated package without bitcoin as collateral.
        The actual credit quality of bitcoin-collateralized loans should far exceed their rating.
      </p>

      <Callout type="note">
        <p>
          <strong>Long/Short Strategy:</strong> It isn't hard to imagine a fund that buys Battery's
          loans and sells equivalent loans from traditional lenders. The only question is how much
          capacity Battery can create. We might have to wait a few cycles before bitcoin becomes
          less concentrated to see the full utilization potential.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Traditional collateral has failed</strong> - the 2008, 2022, and 2023 crises
              showed that housing, gilts, and treasuries can rapidly become unreliable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Battery Finance enables bitcoin collateral</strong> without mark-to-market
              liquidation triggers, aligned with bitcoin's four-year cycle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Bitcoin collateral redefines subordination</strong> - behaviorally, it
              becomes the most senior loan regardless of contractual priority.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Both degens and savers</strong> will prioritize bitcoin-collateralized
              loans, creating potential AAA-equivalent credit quality.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Credit markets will be transformed</strong> - what creditworthiness actually
              means is being redefined by this innovation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
