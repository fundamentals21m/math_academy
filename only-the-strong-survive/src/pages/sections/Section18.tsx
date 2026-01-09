import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">What Are Common Pool Resources?</h2>

      <p className="my-4">
        All "crypto assets," Bitcoin included, are properly understood as <strong>common pool
        resources</strong> (CPRs). According to Elinor Ostrom's analysis (for which she won the
        Nobel Prize in Economics), Bitcoin's governance characteristics are excellent while those
        typical of crypto are mediocre to poor.
      </p>

      <Callout type="info">
        <p>
          A common pool resource is a type of good consisting of a natural or human-made resource
          system whose size or characteristics makes it costly, but not impossible, to exclude
          potential beneficiaries from obtaining benefits from its use.
        </p>
      </Callout>

      {/* Ostrom's Principles */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ostrom's Design Principles</h2>

      <p className="my-4">
        Ostrom identified eight design principles for stable, long-enduring CPR institutions.
        Here we compare Bitcoin and Ethereum on key principles:
      </p>

      {/* Principle I */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">
          I. Clearly Defined Boundaries
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-green-400">Bitcoin: Yes</p>
            <p className="text-dark-300 text-sm mt-1">
              Near complete consensus about what constitutes the resource, the rule set for appropriation,
              and a fixed inflation schedule.
            </p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-yellow-400">Ethereum: Largely Yes</p>
            <p className="text-dark-300 text-sm mt-1">
              Some caveats: changes underway will alter the inflation schedule, and current supply
              is unreasonably difficult to verify.
            </p>
          </div>
        </div>
      </div>

      {/* Principle III */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">
          III. Collective Choice Arrangements
        </h3>
        <p className="text-dark-300 mb-4">
          Most individuals affected by the operational rules can participate in modifying them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-green-400">Bitcoin: Yes</p>
            <p className="text-dark-300 text-sm mt-1">
              Near consensus of users is required for rule changes.
            </p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-red-400">Ethereum: Not Strong Enough</p>
            <p className="text-dark-300 text-sm mt-1">
              Clear authority wielded by a few core investors and developers. Proof-of-stake may
              worsen this as "oligarchs" retain even more control.
            </p>
          </div>
        </div>
      </div>

      {/* Principle IV */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">
          IV. Monitors Accountable to Appropriators
        </h3>
        <p className="text-dark-300 mb-4">
          Those who audit CPR conditions and appropriator behavior are accountable to participants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-green-400">Bitcoin: The Best CPR in History</p>
            <p className="text-dark-300 text-sm mt-1">
              Anybody can monitor miner behavior for effectively no cost. Auditing makes it
              impossible for appropriators to do anything not allowed.
            </p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-yellow-400">Ethereum: Yes and No</p>
            <p className="text-dark-300 text-sm mt-1">
              Yes in theory (similar proof-of-work). No in practice: data structure is so large
              that few monitors exist, many relying on third-party infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Principle V */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">
          V. Graduated Sanctions for Violations
        </h3>
        <p className="text-dark-300 mb-4">
          Appropriators who violate rules are assessed sanctions by other appropriators.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-green-400">Bitcoin: The Best CPR in History</p>
            <p className="text-dark-300 text-sm mt-1">
              Appropriators cannot appropriate outside the rules. If they try, rule-abiding
              appropriators instantly benefit at their expense.
            </p>
          </div>
          <div className="p-3 bg-dark-800 rounded-lg">
            <p className="font-semibold text-yellow-400">Ethereum: Similar with Caveat</p>
            <p className="text-dark-300 text-sm mt-1">
              Very similar to Bitcoin, but a far lower proportion of appropriators is required
              to change the rules than in Bitcoin.
            </p>
          </div>
        </div>
      </div>

      {/* The Assessment */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Overall Assessment</h2>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          According to Ostrom's framework for evaluating common pool resources, Bitcoin is
          arguably <strong>the single best designed CPR in history</strong> in several key
          respects. Crypto assets like Ethereum score well on some criteria but poorly on others,
          particularly around governance centralization and practical monitoring.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Crypto assets are <strong>common pool resources</strong> and can be evaluated
              using Ostrom's framework.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Bitcoin scores <strong>excellently</strong> on all of Ostrom's design principles
              for stable CPRs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Ethereum scores <strong>poorly on governance</strong> — too much authority with
              core developers and investors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              Ethereum's monitoring is <strong>impractical</strong> — the data structure is too
              large for independent verification.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
