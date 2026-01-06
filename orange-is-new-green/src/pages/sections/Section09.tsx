import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        Beyond yield, a Bitcoin-based money market fund offers two crucial
        advantages over traditional alternatives: <strong className="text-amber-400">
        24/7 availability</strong> and <strong className="text-amber-400">
        seizure resistance</strong>.
      </p>

      {/* Section 1: 24/7/365 Operation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Open 24/7/365</h2>

      <p className="my-4">
        Bitcoin takes no vacations and rings no trading bells. This seemingly
        simple fact has profound implications for liquidity management.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Scenario: Silicon Valley Bank (March 2023)</h4>
        <p className="text-dark-200 mb-4">
          It's Friday evening. Scrolling through Twitter on your way home, you
          discover that Silicon Valley Bank is in deep trouble and the FDIC is
          poised to take over.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/50">
            <h5 className="font-semibold text-red-400 mb-2">Traditional Markets</h5>
            <p className="text-sm text-dark-300">
              Wait 3 days (until Monday) to take any action. Markets closed.
              No ability to reposition.
            </p>
          </div>
          <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/50">
            <h5 className="font-semibold text-green-400 mb-2">Bitcoin MMF</h5>
            <p className="text-sm text-dark-300">
              Immediately unpeg your Bitcoin in a few clicks. Make a directional
              bet on Bitcoin rallying through the turmoil.
            </p>
          </div>
        </div>
      </div>

      <p className="my-4">
        Once we grasp the contextuality of liquidity, can we genuinely classify
        something as liquid if it's rarely tradable?
      </p>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-red-400">252</p>
          <p className="text-sm text-dark-400">Trading days per year</p>
          <p className="text-xs text-dark-500">Traditional markets</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-3xl font-bold text-green-400">365</p>
          <p className="text-sm text-dark-400">Trading days per year</p>
          <p className="text-xs text-dark-500">Bitcoin (24/7)</p>
        </div>
      </div>

      <Callout type="info">
        <p>
          <strong>True liquidity:</strong> Bitcoin may still lag in total volume
          compared to established asset classes, but it holds the potential to
          become the most liquid asset globally—a pure form of cash that can
          settle around the clock, every day of the year.
        </p>
      </Callout>

      {/* Section 2: Seizure Resistance */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Seizure Resistance</h2>

      <p className="my-4">
        A Bitcoin-based MMF outshines incumbents thanks to its relative resilience
        against political and regulatory capture. The investment involves holding
        Bitcoin in a margin account, hedged against the USD.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">No Central Authority</h4>
          <p className="text-sm text-dark-300">
            No single government or institution can freeze Bitcoin held in
            self-custody or on global exchanges.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Jurisdiction Flexibility</h4>
          <p className="text-sm text-dark-300">
            Access to global exchanges means you can choose jurisdictions
            based on regulatory friendliness.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Dollar Exposure Without Banks</h4>
          <p className="text-sm text-dark-300">
            Maintain dollar-denominated value without relying on the US
            banking system.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Portable Wealth</h4>
          <p className="text-sm text-dark-300">
            Unlike traditional assets, Bitcoin positions can be moved
            globally with internet access.
          </p>
        </Card>
      </CardGrid>

      {/* Section 3: Appeal to Diverse Actors */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Appeal to Diverse Actors</h2>

      <p className="my-4">
        For USD holders facing apprehension from the US State Department, a
        Bitcoin-based MMF offers a more flexible and reassuring option compared
        to an account with a Federal Reserve-regulated bank.
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">🏢</span>
          <div>
            <p className="font-semibold text-dark-100">Corporations</p>
            <p className="text-sm text-dark-400">
              International businesses facing regulatory uncertainty in
              traditional banking relationships
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">💰</span>
          <div>
            <p className="font-semibold text-dark-100">High Net Worth Individuals</p>
            <p className="text-sm text-dark-400">
              Those seeking to diversify beyond any single government's control
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="text-amber-400 text-xl">🌍</span>
          <div>
            <p className="font-semibold text-dark-100">Sovereign Entities</p>
            <p className="text-sm text-dark-400">
              Nations seeking alternatives to USD-dominated payment rails
              that can be weaponized
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Catalyst for Adoption */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">4. A Catalyst for Bitcoin Adoption</h2>

      <p className="my-4">
        More importantly, such an opportunity could be a huge catalyst for
        Bitcoin adoption and price appreciation:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Virtuous Cycle</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">1</span>
            <p className="text-dark-200">Running covered shorts requires buying spot Bitcoin first</p>
          </div>
          <div className="text-center text-amber-400">↓</div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">2</span>
            <p className="text-dark-200">New participants seeking yield buy Bitcoin</p>
          </div>
          <div className="text-center text-amber-400">↓</div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">3</span>
            <p className="text-dark-200">Increased buy pressure in spot markets</p>
          </div>
          <div className="text-center text-amber-400">↓</div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full text-sm font-bold">4</span>
            <p className="text-dark-200">Higher liquidity allows more entities to access the trade</p>
          </div>
          <div className="text-center text-amber-400">↓</div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full text-sm font-bold">!</span>
            <p className="text-dark-200">Virtuous cycle fueling Bitcoin adoption</p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The key insight:</strong> A Bitcoin MMF doesn't just serve
          its users—it actively contributes to Bitcoin's adoption by requiring
          spot purchases, creating buy pressure, and expanding the ecosystem.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Bitcoin operates <strong>24/7/365</strong>, allowing repositioning
              during crises when traditional markets are closed.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Seizure resistance</strong> makes Bitcoin MMFs attractive
              to those facing political or regulatory risk.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The strategy appeals to <strong>diverse actors</strong>—corporations,
              HNWIs, and even sovereign entities.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Bitcoin MMFs create a <strong>virtuous cycle</strong> of adoption
              by requiring spot Bitcoin purchases.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
