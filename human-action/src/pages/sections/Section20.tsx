import { useState } from 'react';
import { LessonLayout } from '@/components/layout';
import { Callout, Card, CardGrid } from '@/components/common';

// Interactive demo showing the boom-bust cycle
function BusinessCycleDemo() {
  const [phase, setPhase] = useState(0);

  const phases = [
    {
      title: 'Credit Expansion Begins',
      description: 'Banks create new credit not backed by real savings. Interest rates fall below the natural rate.',
      marketRate: 3,
      naturalRate: 5,
      investment: 'Rising',
      consumption: 'Stable',
      status: 'boom-start',
    },
    {
      title: 'The Boom',
      description: 'Low rates make previously unprofitable projects seem viable. Capital flows into longer production processes.',
      marketRate: 3,
      naturalRate: 5,
      investment: 'High',
      consumption: 'Rising',
      status: 'boom',
    },
    {
      title: 'The Turning Point',
      description: 'Real resources are scarce. Consumer goods prices rise. The mismatch between real savings and investment becomes apparent.',
      marketRate: 4,
      naturalRate: 6,
      investment: 'Strained',
      consumption: 'Competing',
      status: 'turning',
    },
    {
      title: 'The Bust',
      description: 'Malinvestments are revealed. Projects must be abandoned. Unemployment rises as the economy restructures.',
      marketRate: 7,
      naturalRate: 5,
      investment: 'Collapsing',
      consumption: 'Falling',
      status: 'bust',
    },
    {
      title: 'Recovery',
      description: 'Resources reallocate to sustainable uses. The capital structure adjusts to actual time preferences.',
      marketRate: 5,
      naturalRate: 5,
      investment: 'Recovering',
      consumption: 'Stabilizing',
      status: 'recovery',
    },
  ];

  const current = phases[phase];

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">The Austrian Business Cycle</h4>
      <p className="text-dark-400 text-sm mb-4">
        Click through the phases to see how credit expansion creates unsustainable booms.
      </p>

      <div className="flex gap-1 mb-6 flex-wrap">
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => setPhase(i)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              phase === i
                ? p.status === 'bust' ? 'bg-red-600 text-white' :
                  p.status === 'boom' || p.status === 'boom-start' ? 'bg-green-600 text-white' :
                  'bg-amber-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <h5 className={`font-medium mb-2 ${
          current.status === 'bust' ? 'text-red-400' :
          current.status === 'boom' || current.status === 'boom-start' ? 'text-green-400' :
          'text-amber-400'
        }`}>
          {current.title}
        </h5>
        <p className="text-dark-300 text-sm mb-4">{current.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <span className="text-dark-400 text-xs block mb-1">Market Rate</span>
            <span className="text-xl font-bold text-blue-400">{current.marketRate}%</span>
          </div>
          <div className="text-center">
            <span className="text-dark-400 text-xs block mb-1">Natural Rate</span>
            <span className="text-xl font-bold text-amber-400">{current.naturalRate}%</span>
          </div>
          <div className="text-center">
            <span className="text-dark-400 text-xs block mb-1">Investment</span>
            <span className={`text-sm font-medium ${
              current.investment === 'Collapsing' ? 'text-red-400' :
              current.investment === 'High' || current.investment === 'Rising' ? 'text-green-400' :
              'text-amber-400'
            }`}>{current.investment}</span>
          </div>
          <div className="text-center">
            <span className="text-dark-400 text-xs block mb-1">Consumption</span>
            <span className={`text-sm font-medium ${
              current.consumption === 'Falling' ? 'text-red-400' :
              current.consumption === 'Rising' ? 'text-green-400' :
              'text-amber-400'
            }`}>{current.consumption}</span>
          </div>
        </div>

        {current.marketRate !== current.naturalRate && (
          <div className="mt-4 p-3 bg-dark-800 rounded text-center">
            <span className="text-dark-400 text-xs">
              {current.marketRate < current.naturalRate
                ? '⚠️ Market rate below natural rate → Malinvestment occurring'
                : '⚠️ Market rate above natural rate → Correction underway'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Malinvestment visualization
function MalinvestmentDemo() {
  const [withCredit, setWithCredit] = useState(true);

  return (
    <div className="bg-dark-800 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Malinvestment: The Core Problem</h4>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setWithCredit(false)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !withCredit ? 'bg-green-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          With Real Savings
        </button>
        <button
          onClick={() => setWithCredit(true)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            withCredit ? 'bg-red-600 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          With Credit Expansion
        </button>
      </div>

      <div className="bg-dark-900 rounded-lg p-4">
        {!withCredit ? (
          <div>
            <h5 className="text-green-400 font-medium mb-3">Sustainable Investment</h5>
            <p className="text-dark-300 text-sm mb-4">
              When investment is funded by real savings, consumers have voluntarily reduced
              their present consumption. The resources freed up are genuinely available for
              longer production processes.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-dark-800 rounded">
                <span className="text-green-400 text-2xl block mb-1">✓</span>
                <span className="text-dark-300 text-xs">Resources Available</span>
              </div>
              <div className="p-3 bg-dark-800 rounded">
                <span className="text-green-400 text-2xl block mb-1">✓</span>
                <span className="text-dark-300 text-xs">Time Preferences Matched</span>
              </div>
              <div className="p-3 bg-dark-800 rounded">
                <span className="text-green-400 text-2xl block mb-1">✓</span>
                <span className="text-dark-300 text-xs">Sustainable Growth</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h5 className="text-red-400 font-medium mb-3">Malinvestment</h5>
            <p className="text-dark-300 text-sm mb-4">
              When investment is funded by credit expansion (new money), no one has reduced
              consumption. The low interest rate signals that resources are available for
              longer processes, but they aren't. Conflict between investment and consumption
              is inevitable.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-dark-800 rounded">
                <span className="text-red-400 text-2xl block mb-1">✗</span>
                <span className="text-dark-300 text-xs">Resources NOT Available</span>
              </div>
              <div className="p-3 bg-dark-800 rounded">
                <span className="text-red-400 text-2xl block mb-1">✗</span>
                <span className="text-dark-300 text-xs">False Signal Sent</span>
              </div>
              <div className="p-3 bg-dark-800 rounded">
                <span className="text-red-400 text-2xl block mb-1">✗</span>
                <span className="text-dark-300 text-xs">Bust Inevitable</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <div className="prose prose-invert max-w-none">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-dark-100 mb-6">
          XX. Interest, Credit Expansion, and the Trade Cycle
        </h2>

        <p className="text-dark-300 text-lg leading-relaxed mb-6">
          This chapter presents one of Mises' most influential contributions to economics:
          the Austrian theory of the trade cycle. This theory explains how monetary expansion
          through credit creation leads to unsustainable booms that must inevitably end in
          busts. The cycle is not a natural feature of the market economy but a consequence
          of interference with the monetary system.
        </p>

        {/* The Problems */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          1. The Problems
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The recurrence of periods of boom and depression has led many to believe that
          such cycles are inherent to capitalism. But careful analysis reveals that the
          trade cycle is not a necessary feature of the market economy. It results from
          attempts to lower interest rates through credit expansion—creating new money
          and lending it into existence.
        </p>

        <Callout type="info" title="The Central Question">
          Why do businessmen, normally alert to profit opportunities and dangers, repeatedly
          make the same mistakes? Why do booms regularly turn to busts? The answer lies in
          the manipulation of interest rates through credit expansion, which sends false
          signals about the availability of real savings.
        </Callout>

        {/* Credit Expansion */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          2. Credit Expansion and Its Effects
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Credit expansion occurs when banks increase the supply of credit beyond the amount
          backed by real savings. This is possible because of fractional reserve banking—
          banks can lend more than they hold in reserves. The newly created credit enters
          the economy as if it were real savings, but it is not.
        </p>

        <CardGrid>
          <Card title="Real Savings" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              When people save, they reduce present consumption and free up real resources.
              These resources become available for investment in longer production processes.
              Interest rates fall naturally as the supply of savings increases.
            </p>
          </Card>
          <Card title="Credit Expansion" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              When banks create new credit, no real resources are freed up. Present consumption
              is not reduced. But interest rates fall anyway, sending a false signal that
              savings have increased when they have not.
            </p>
          </Card>
        </CardGrid>

        <p className="text-dark-300 leading-relaxed mt-4 mb-4">
          The crucial point is that credit expansion cannot create real resources. It can
          only redistribute existing resources by distorting the price signals (especially
          interest rates) that coordinate economic activity across time.
        </p>

        {/* The Monetary Theory of the Trade Cycle */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          3. The Monetary Theory of the Trade Cycle
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The Austrian theory of the trade cycle explains the boom-bust pattern as follows:
        </p>

        <BusinessCycleDemo />

        <ol className="list-decimal list-inside text-dark-300 space-y-3 mb-6">
          <li>
            <strong>Credit expansion lowers interest rates</strong> below the "natural" rate
            that would prevail based on actual time preferences and real savings.
          </li>
          <li>
            <strong>Entrepreneurs respond to the lower rates</strong> by investing in longer,
            more capital-intensive production processes that would not have been profitable
            at the higher natural rate.
          </li>
          <li>
            <strong>A boom ensues</strong> as these new investments drive up factor prices
            and create an appearance of prosperity.
          </li>
          <li>
            <strong>But real resources are limited.</strong> The new investments compete
            with consumer goods production for the same scarce resources. Prices rise.
          </li>
          <li>
            <strong>The malinvestments are revealed.</strong> Projects that seemed profitable
            at artificial interest rates prove unprofitable at realistic rates. They must
            be abandoned or restructured.
          </li>
          <li>
            <strong>The bust arrives.</strong> The economy must reallocate resources from
            the malinvested sectors to sustainable uses. This reallocation is the recession.
          </li>
        </ol>

        {/* Malinvestment */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          4. Malinvestment: The Heart of the Problem
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          The key concept is <em>malinvestment</em>—investment in the wrong lines of
          production, investment that does not correspond to the actual preferences of
          consumers and savers. Credit expansion creates malinvestment by distorting the
          interest rate signal.
        </p>

        <MalinvestmentDemo />

        <Callout type="warning" title="Why the Bust Is Necessary">
          The bust is not the problem—it is the cure. The boom created malinvestments that
          misallocated resources. The bust is the period during which these errors are
          corrected and resources are redirected to their proper uses. Attempts to prevent
          or delay the bust only prolong the misallocation and make the eventual correction
          more painful.
        </Callout>

        {/* Why Booms Must End */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          5. Why Credit-Induced Booms Must End
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          A boom induced by credit expansion cannot last indefinitely. There are only
          two possible outcomes:
        </p>

        <CardGrid>
          <Card title="Option 1: Stop the Expansion" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              If credit expansion stops, interest rates rise to their natural level.
              Malinvestments are revealed as unprofitable. The boom ends and the bust
              begins. This is painful but necessary for recovery.
            </p>
          </Card>
          <Card title="Option 2: Continue Expanding" className="bg-dark-800">
            <p className="text-dark-300 text-sm">
              If credit expansion accelerates to postpone the bust, the result is
              ever-increasing inflation. Eventually this leads to a crack-up boom
              and the destruction of the currency. The final collapse is far worse.
            </p>
          </Card>
        </CardGrid>

        <p className="text-dark-300 leading-relaxed mt-4 mb-4">
          There is no third option. Credit expansion cannot permanently maintain an
          artificial boom. The choice is only between a smaller bust now or a larger
          catastrophe later.
        </p>

        {/* The Fallacy of Countercyclical Policy */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          6. The Fallacy of "Countercyclical" Policy
        </h3>

        <p className="text-dark-300 leading-relaxed mb-4">
          Many economists and policymakers believe that government can smooth out the
          trade cycle through "countercyclical" monetary and fiscal policy—expanding
          during busts and contracting during booms. But this view misunderstands
          the nature of the cycle.
        </p>

        <Callout type="warning" title="The Cure That Perpetuates the Disease">
          Responding to a bust with further credit expansion does not solve the problem—
          it merely postpones and worsens it. The new credit creates new malinvestments
          on top of the old ones. Each cycle of expansion and bust leaves behind a larger
          residue of misallocated capital and distorted prices.
        </Callout>

        <p className="text-dark-300 leading-relaxed mb-4">
          The only genuine cure for the trade cycle is to prevent credit expansion in
          the first place. Once a boom has begun, the only question is how and when the
          correction will occur—not whether it can be avoided.
        </p>

        {/* Summary */}
        <h3 className="text-2xl font-semibold text-dark-100 mt-10 mb-4">
          Summary: The Austrian Theory of the Trade Cycle
        </h3>

        <div className="bg-dark-800 rounded-lg p-6 mb-6">
          <ul className="space-y-3 text-dark-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">1.</span>
              <span>
                The trade cycle is not inherent to capitalism but results from credit
                expansion—the creation of money through bank lending beyond real savings.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">2.</span>
              <span>
                Credit expansion lowers interest rates below the natural rate, sending
                false signals about the availability of real savings.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">3.</span>
              <span>
                Entrepreneurs respond by investing in longer production processes that
                would not be profitable at the natural rate—this is malinvestment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">4.</span>
              <span>
                The boom cannot last because real resources have not increased. Eventually
                the malinvestments are revealed and must be liquidated.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">5.</span>
              <span>
                The bust is the necessary correction period during which resources are
                reallocated from malinvested sectors to sustainable uses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">6.</span>
              <span>
                "Countercyclical" policy through further credit expansion does not cure
                the cycle but perpetuates and worsens it.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
