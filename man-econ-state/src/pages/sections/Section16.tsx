import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Government spending shifts resources from private to political allocation."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Murray N. Rothbard, Power and Market
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        Having examined taxation (the extraction side of binary intervention), we now analyze
        <strong className="text-emerald-400"> government expenditures</strong>—what government
        does with the resources it takes. Every dollar spent by government is a dollar not
        allocated by the market.
      </p>

      {/* Section 1: Government Spending vs. Private Spending */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Government Spending vs. Private Spending</h2>

      <p className="my-4">
        When individuals spend their own money, they seek maximum value for their preferences.
        Government spending operates under fundamentally different incentives.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-emerald-400 mb-3">Private Spending</h4>
            <ul className="text-dark-400 text-sm space-y-2">
              <li>• Spender bears cost</li>
              <li>• Spender receives benefit</li>
              <li>• Strong incentive to economize</li>
              <li>• Reveals true preferences</li>
              <li>• Competitive suppliers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-rose-400 mb-3">Government Spending</h4>
            <ul className="text-dark-400 text-sm space-y-2">
              <li>• Taxpayers bear cost</li>
              <li>• Politicians/bureaucrats decide</li>
              <li>• Weak incentive to economize</li>
              <li>• Political preferences dominate</li>
              <li>• Often monopoly suppliers</li>
            </ul>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>Milton Friedman's matrix:</strong> There are four ways to spend money—
          your money on yourself (most careful), your money on others, others' money on
          yourself, others' money on others (least careful). Government is the last category.
        </p>
      </Callout>

      {/* Section 2: Types of Government Expenditures */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Types of Government Expenditures</h2>

      <p className="my-4">
        Government expenditures fall into several categories, each with distinct economic effects:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            type: 'Resource-Using Expenditures',
            description: 'Government employs labor and capital directly.',
            examples: 'Military, bureaucracy, public works',
            effect: 'Diverts real resources from market-directed production.',
          },
          {
            type: 'Transfer Payments',
            description: 'Government takes from some and gives to others.',
            examples: 'Welfare, Social Security, subsidies',
            effect: 'Redistributes wealth; creates dependency; reduces work incentives.',
          },
          {
            type: 'Interest Payments',
            description: 'Payment on government debt.',
            examples: 'Treasury bond interest',
            effect: 'Rewards past lending to government; perpetuates deficits.',
          },
          {
            type: 'Subsidies to Producers',
            description: 'Direct payments or tax breaks to businesses.',
            examples: 'Farm subsidies, export subsidies, corporate welfare',
            effect: 'Protects inefficient producers; distorts competition.',
          },
        ].map(({ type, description, examples, effect }, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-10 h-10 flex items-center justify-center bg-rose-600 rounded-full text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-dark-100">{type}</p>
              <p className="text-sm text-dark-400">{description}</p>
              <p className="text-sm text-dark-500">Examples: {examples}</p>
              <p className="text-sm text-dark-500 italic">Effect: {effect}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3: Government Services */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. The Myth of "Free" Government Services</h2>

      <p className="my-4">
        Government services are never "free"—they are paid for through taxation. The
        question is whether they represent the best use of those resources.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Hidden Costs</h4>
          <p className="text-sm text-dark-300">
            "Free" roads, schools, and healthcare are paid by taxpayers. The cost is
            hidden, not eliminated.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">No Price Signals</h4>
          <p className="text-sm text-dark-300">
            Without prices, there's no way to know if the service is worth its cost
            to consumers.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Overconsumption</h4>
          <p className="text-sm text-dark-300">
            Zero-price services are overused. Long waits, congestion, and rationing result.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Quality Decline</h4>
          <p className="text-sm text-dark-300">
            Without consumer choice, there's no competitive pressure to maintain quality.
          </p>
        </Card>
      </CardGrid>

      <Callout type="warning">
        <p>
          <strong>The calculation problem:</strong> Even well-intentioned government
          officials cannot allocate resources rationally because they lack the price
          signals that markets provide.
        </p>
      </Callout>

      {/* Section 4: Transfer Payments */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Transfer Payments and Redistribution</h2>

      <p className="my-4">
        Transfer payments—taking from some to give to others—are the largest category
        of modern government spending. Rothbard examines their effects.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-600/30 my-6">
        <h4 className="font-semibold text-rose-400 mb-3">The Problem with Transfers</h4>
        <ul className="text-dark-300 space-y-2">
          <li>• <strong>Reduces work incentive for recipients:</strong> Why work if paid not to?</li>
          <li>• <strong>Reduces work incentive for taxpayers:</strong> Why produce if confiscated?</li>
          <li>• <strong>Administrative costs:</strong> Resources lost to bureaucracy</li>
          <li>• <strong>Political allocation:</strong> Favors organized groups, not the neediest</li>
          <li>• <strong>Dependency:</strong> Creates permanent class of recipients</li>
        </ul>
      </div>

      <p className="my-4">
        The welfare state does not eliminate poverty—it institutionalizes it. By
        subsidizing non-work and penalizing production, it creates the conditions
        it claims to remedy.
      </p>

      {/* Section 5: Government Deficits and Debt */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Government Deficits and Debt</h2>

      <p className="my-4">
        When government spends more than it taxes, it runs a <strong className="text-emerald-400">
        deficit</strong> financed by borrowing. The accumulated deficits become the
        <strong className="text-emerald-400"> national debt</strong>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Crowding Out</h4>
          <p className="text-sm text-dark-300">
            Government borrowing competes with private borrowing, raising interest
            rates and reducing private investment.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Future Taxation</h4>
          <p className="text-sm text-dark-300">
            Debt is future taxes. Today's spending burdens tomorrow's taxpayers
            who had no voice.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Inflation Temptation</h4>
          <p className="text-sm text-dark-300">
            Governments may inflate the currency to reduce the real value of their
            debt—a hidden tax on holders of money.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-rose-400 mb-2">Fiscal Illusion</h4>
          <p className="text-sm text-dark-300">
            Deficits hide the true cost of government, making spending seem
            cheaper than it is.
          </p>
        </Card>
      </CardGrid>

      {/* Section 6: The Welfare-Warfare State */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">6. The Welfare-Warfare State</h2>

      <p className="my-4">
        Rothbard critiques both the welfare state and the warfare state. Both transfer
        resources from productive to unproductive uses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Welfare State</h3>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Subsidizes non-production</li>
            <li>• Creates dependency</li>
            <li>• Empowers bureaucracy</li>
            <li>• Politicizes charity</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-600/30">
          <h3 className="text-lg font-semibold text-rose-400 mb-2">Warfare State</h3>
          <ul className="text-dark-400 text-sm space-y-1">
            <li>• Destroys resources</li>
            <li>• Kills and maims</li>
            <li>• Empowers military-industrial complex</li>
            <li>• Justifies domestic controls</li>
          </ul>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>The ratchet effect:</strong> Government spending tends to rise
          during crises (wars, depressions) but never fully returns to pre-crisis
          levels. Each crisis becomes a floor for future spending.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>
              <strong>Government spending lacks market discipline</strong>—no price
              signals, weak economizing incentives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              <strong>"Free" services</strong> are never free—costs are hidden through
              taxation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              <strong>Transfer payments</strong> reduce work incentives for both
              recipients and taxpayers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">4.</span>
            <span>
              <strong>Deficits</strong> crowd out private investment and burden
              future generations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">5.</span>
            <span>
              Both <strong>welfare and warfare</strong> states consume resources that
              would otherwise serve consumers.
            </span>
          </li>
        </ul>
      </div>

      {/* Next Section Preview */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Coming Next</h2>

      <p className="my-4">
        Chapter 6 examines <strong>Antimarket Ethics: A Praxeological Critique</strong>—
        the ethical arguments used to justify intervention and why they fail.
      </p>
    </LessonLayout>
  );
}
