import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Recommended books
const recommendedBooks = [
  { title: 'The Bitcoin Standard', author: 'Saifedean Ammous' },
  { title: 'Sovereignty Through Mathematics', author: 'Knut Svanholm' },
  { title: 'Bitcoin is Venice', author: 'Allen Farrington & Sacha Meyers' },
  { title: 'Atlas Shrugged', author: 'Ayn Rand' },
  { title: 'Broken Money', author: 'Lyn Alden' },
  { title: 'Mastering Bitcoin', author: 'Andreas Antonopoulos' },
];

// Key metrics needed
const newMetrics = [
  { institution: 'Pensions', metric: 'Overall funded status or projected time to termination' },
  { institution: 'Corporate Balance Sheets', metric: 'Redefinition of balance sheet strength emphasizing future value over present value' },
  { institution: 'Structured Credit', metric: 'Redefinition of credit quality factoring in bitcoin\'s impact on seniority' },
  { institution: 'Asset Managers (BlackRock)', metric: 'Client\'s overall allocation to bitcoin' },
];

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Opening */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "If bitcoin is going to help the current financial system transcend the problems
        of previous systems, then institutions that wish to utilize it are going to need
        to develop optics and metrics that demonstrate success and failure."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Brian Hirschfield, Bitcoin for Institutions
        </footer>
      </blockquote>

      <p className="text-lg text-dark-300 mb-6">
        After 30 years as an actuary - determining investment strategies for pensions,
        running hedging operations, and explaining P/L performance for guaranteed annuities -
        my career has followed a trajectory that fits perfectly with the moment we find
        ourselves in with bitcoin. <strong className="text-orange-400">The lessons learned
        from institutional failures apply directly to bitcoin adoption today.</strong>
      </p>

      {/* Professional Journey */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Reflections From Professional Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <span className="text-orange-400 font-bold">1990s-2003</span>
          <p className="text-dark-200 mt-2 text-sm">
            Traditional pensions - right as the heyday was ending and the hangover was setting
            into boardrooms after the dot-com crash
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <span className="text-orange-400 font-bold">2003-2005</span>
          <p className="text-dark-200 mt-2 text-sm">
            Developed Liability Driven Investing (LDI) with a mentor to fix pension problems,
            only to face ruthless institutional resistance
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <span className="text-orange-400 font-bold">2005+</span>
          <p className="text-dark-200 mt-2 text-sm">
            Walked away from pensions, following CFA ethical guidelines to disassociate from
            a space that could be saved but willfully refused
          </p>
        </div>
      </div>

      {/* LDI Story */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Liability Driven Investing Story</h2>

      <p className="my-4">
        In 2003, a mentor came up with a novel idea about how to manage pensions that would become
        known as <strong className="text-orange-400">Liability Driven Investing (LDI)</strong>.
        The message was clear: investment returns aren't the key driver of a pension's ability
        to meet its liabilities - protection against rates dropping is.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The LDI Insight</h4>
        <p className="text-dark-200 mb-4">
          Liabilities had large exposures to rates but very small exposures to equities. Equity
          returns were prioritized because of a confluence of incentives, and those with executives'
          ears were ignorant of the risks we were illustrating.
        </p>
        <p className="text-dark-400 text-sm">
          <strong>The Parallel to Bitcoin:</strong> This is the most pertinent parallel to where
          we are today with bitcoin - the ruthless intractability of institutional incentives.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The UK LDI Disaster:</strong> LDI became very popular in the UK, but companies
          that offset liability increases with investment gains ultimately leveraged them via
          borrowing, causing the very Bank of England bailout that demonstrated the system's fragility.
        </p>
      </Callout>

      {/* Inadequate Reporting */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Inadequate Reporting</h2>

      <p className="my-4">
        The agency problem that caused US corporate pensions to willfully ignore LDI was driven
        by <strong className="text-orange-400">inadequate reporting</strong>. This will be a
        common theme for all companies regarding bitcoin.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Problem</h4>
          <p className="text-sm text-dark-300">
            Pension managers only saw asset returns from investment consultants. Everything was
            in an "asset-only framework" that defined benchmarks, strategies, and the goal of
            "beating the S&P 500."
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">The Misunderstanding</h4>
          <p className="text-sm text-dark-300">
            Beating the S&P by 50 bps when it returns -20% doesn't help the pension at all.
            But without liability-integrated reporting, managers couldn't see this truth.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Career Risk</h4>
          <p className="text-sm text-dark-300">
            A CFO telling the CEO "the pension is doing great" when bonds lost 30% was too
            much career risk - even if liabilities also dropped 30%.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Bitcoin Parallel</h4>
          <p className="text-sm text-dark-300">
            The market doesn't know how to value Strategy (MSTR) because they don't know
            how to associate value with their bitcoin treasury. Same problem, new asset.
          </p>
        </Card>
      </CardGrid>

      {/* Bad Accounting Incentives */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bad Incentives Enforced by Accounting Standards</h2>

      <p className="my-4">
        The accounting standards FAS87 and FAS132 will go down in history as one of the great
        unintended consequences ever. Any chance of course-correcting was derailed by these
        standards - just as the goodwill treatment of bitcoin dissuaded companies from
        substantial balance sheet allocations.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-red-600/30 my-6">
        <h4 className="font-semibold text-red-400 mb-3">The FAS87/FAS132 Problem</h4>
        <div className="space-y-3">
          <p className="text-dark-200">
            <strong>Expected Return on Assets (ERoA):</strong> Companies could assume an 8%
            return regardless of actual performance, taking a direct credit of $80 million
            towards earnings on a $1 billion plan.
          </p>
          <p className="text-dark-200">
            <strong>Smoothing Mechanism:</strong> Bad years were amortized over 15+ years,
            masking the true impact of underperformance.
          </p>
          <p className="text-dark-200">
            <strong>The Result:</strong> CFOs derived bonuses from these earnings and were
            obstinately unwilling to put them at risk. The tail wagged the dog - equity-heavy
            strategies were chosen to hit 8% regardless of liability exposure.
          </p>
        </div>
      </div>

      {/* New Metrics Needed */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">New Metrics Required for Bitcoin Success</h2>

      <p className="my-4">
        If bitcoin is going to help the current financial system transcend the problems of
        previous systems, institutions will need to develop optics and metrics that demonstrate
        success and failure:
      </p>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-4 py-3 text-left text-orange-400">Institution Type</th>
              <th className="px-4 py-3 text-left text-orange-400">New Metric Needed</th>
            </tr>
          </thead>
          <tbody>
            {newMetrics.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-4 py-3 text-dark-200">{item.institution}</td>
                <td className="px-4 py-3 text-dark-300">{item.metric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="note">
        <p>
          <strong>The Warning:</strong> In the absence of these new optics, any institution's
          efforts to take advantage of bitcoin will be temporary, and they will be no more
          resilient to a calamity than they were before their participation in the space.
        </p>
      </Callout>

      {/* Additional Resources */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Additional Resources</h2>

      <p className="my-4">
        This book attempted to cover new ground rather than rehash the many great books already
        written. Here are seminal works to deepen understanding:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {recommendedBooks.map((book, i) => (
          <div key={i} className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <p className="text-orange-400 font-semibold">{book.title}</p>
            <p className="text-dark-400 text-sm">{book.author}</p>
          </div>
        ))}
      </div>

      <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Seminal Essays (Available on Bitcoin Audible)</h4>
        <ul className="text-dark-300 text-sm space-y-1">
          <li>- "Only The Strong Survive" - Farrington/Larsen</li>
          <li>- "Orange is the New Green" - Mogonet</li>
        </ul>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-5 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Recommended Podcasts</h4>
        <ul className="text-dark-300 text-sm space-y-1">
          <li>- The Reorg (Pierre Rochard and Michael Goldstein)</li>
          <li>- The Path to Bitcoin</li>
          <li>- The Block Reward (Scott Dedels)</li>
          <li>- Rock Paper Bitcoin (Brian Hirschfield and BusinessCat)</li>
        </ul>
      </div>

      {/* Final Thoughts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Final Thoughts</h2>

      <p className="my-4">
        The lessons from three decades of institutional finance are clear: incentives matter
        more than logic, reporting frameworks determine strategy, and accounting standards
        can derail even the most sensible reforms.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Path Forward</h4>
        <p className="text-dark-200">
          Bitcoin represents the opportunity to transcend these systemic failures - but only
          if institutions develop the right frameworks for measuring success. Without new
          metrics that capture bitcoin's unique properties, institutional adoption will
          remain temporary and fragile.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Institutional resistance is ruthless</strong> - incentives, not logic,
              drive corporate decision-making. The LDI story proves this.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Inadequate reporting kills innovation</strong> - without proper metrics,
              even obvious improvements get rejected due to career risk.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Accounting standards shape behavior</strong> - FAS87's treatment of
              pensions caused irrational equity allocations, just as goodwill treatment
              discouraged bitcoin treasury adoption.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>New metrics are essential</strong> - each institution type needs
              bitcoin-specific measures of success to make adoption sustainable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>The opportunity is real</strong> - bitcoin can help transcend previous
              system failures, but only with proper institutional frameworks.
            </span>
          </li>
        </ul>
      </div>

      {/* Closing */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-8 text-center">
        <p className="text-dark-200 text-lg">
          For consulting services through Actuarial Bitcoin Advisors, reach out on Twitter
          <strong className="text-orange-400"> @Fundamentals21m</strong> or email
          <strong className="text-orange-400"> bh1r@pm.me</strong>
        </p>
      </div>
    </LessonLayout>
  );
}
