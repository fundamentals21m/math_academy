import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Pressure to Centralize</h2>

      <p className="my-4">
        As the interrelated problems of liquidity, security signalling, and bloat start to make
        themselves felt, so too will the pressure to ward off security issues by further
        <strong> centralizing control</strong> of the timechain.
      </p>

      <Callout type="warning">
        <p>
          This does not follow necessarily from the argument — it is in no sense predetermined —
          it is merely unfortunately easy to articulate as an increasingly likely possibility.
        </p>
      </Callout>

      {/* Ammori's Warning */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Scaling vs. Security</h2>

      <p className="my-4">
        Ammori draws attention to this tension:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 italic">
          "The underlying backend infrastructure for DeFi, Ethereum, must continue to scale in order
          to support higher bandwidth demands. Processing approximately 1.5 million unique transactions
          per day, Ethereum is already at its current max capacity, and transaction fees have spiked
          as a result."
        </p>
      </div>

      <p className="my-4">
        But notice "transaction fees spiking" is <strong>good for security</strong>! This creates a
        perverse situation:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200 text-lg font-semibold text-center">
          The more secure the protocol becomes, the more its value proposition suffers.
          <br />
          In order to become "more usable" it has to become <span className="text-orange-400">less secure</span>.
        </p>
      </div>

      {/* Proof of Stake */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Proof-of-Stake: Admitting Defeat</h2>

      <p className="my-4">
        This is all arguably exacerbated by <strong>proof-of-stake</strong>, a consensus algorithm
        proposed in contrast to proof-of-work. Under proof-of-stake:
      </p>

      <ul className="space-y-3 my-6 ml-4">
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>Economic incentive is provided by locking up capital for the right to validate blocks</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>Capital is stripped if deemed by the community to have validated dishonestly</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400">•</span>
          <span>Otherwise rewarded with newly issued tokens and more manageable fees</span>
        </li>
      </ul>

      <Callout type="info">
        <p>
          <strong>The Tacit Admission:</strong> Notice the tacit admission of having lost the fight
          for liquidity: the basis of value grounding has explicitly become "yield," meaning the
          token is fighting for liquidity not on the basis of being money, but of being a security.
        </p>
      </Callout>

      <p className="my-4">
        In a blog post titled <em>Why Proof Of Stake</em>, Ethereum co-founder Vitalik Buterin even
        refers to the validator reward under proof-of-stake as "interest."
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-xl font-semibold text-orange-400 text-center">
          To be clear, money does not bear interest: securities do.
        </p>
      </div>

      {/* Core Philosophical Issue */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Core Philosophical Issue</h2>

      <p className="my-4">
        The core philosophical issue rests on the answer to the rhetorical question: <em>do you need
        a token for that?</em> The answer seems to be: <strong>no, you do not</strong>.
      </p>

      <p className="my-4">
        Because "that," whatever it is, is not money. Hence:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300 text-sm">
            It will <strong>lose the fight for liquidity</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300 text-sm">
            It <strong>won't sustain endogenous value</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300 text-sm">
            It <strong>won't sustain endogenous security</strong>
          </p>
        </div>
      </div>

      {/* The Logical Chain */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Logical Chain</h2>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          For the tokens of a timechain: if value is exogenous, then security must be exogenous.
          If security is exogenous, then value must be exogenous. Without pure and simple "money" —
          concise information on the social value of time — both value and security will likely
          have to end up exogenous and coordinated to a greater or lesser extent, at which point
          we have <strong>sacrificed decentralization almost by definition</strong>.
        </p>
      </div>

      {/* What is Lost */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What Is Lost</h2>

      <p className="my-4">
        From a purely philosophical perspective, the only way to stop the technical and economic
        structure of a non-Bitcoin timechain from breaking is to effectively centralize it. This
        brings us to a curious junction:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            i
          </span>
          <p className="text-dark-200">
            Whatever we are talking about would clearly no longer be <em>decentralized</em> finance,
            however impressive it otherwise may be.
          </p>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            ii
          </span>
          <p className="text-dark-200">
            This centralization introduces an entirely new attack vector: <strong>whoever is
            in charge</strong>.
          </p>
        </div>
      </div>

      {/* The Rebuttal */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Rebuttal to the Steelman</h2>

      <p className="my-4">
        The authors' rebuttal to the Devil's Advocate of what is <em>gained</em> by non-Bitcoin
        crypto is quite simply that what is <em>lost</em> is the credible ability to resist attack.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200 italic">
          "The fanciest cryptography facilitating the most complex securitisation scheme with the
          fastest confirmation time the world has ever seen will be worth precisely zero if or when
          the infrastructure supporting it is attacked in such a way that it can no longer claim to
          be secure, open, and distributed."
        </p>
      </div>

      <p className="my-4">
        Price activity in the meantime is more or less completely irrelevant. If anything, positive
        price activity <strong>attracts attack</strong>, be it from economic speculators, technical
        exploiters, or state-based social actors.
      </p>

      {/* Not Computers, Ledgers */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Ledgers, Not Computers</h2>

      <p className="my-4">
        Timechains are not fundamentally computers. They are (or ought to be) <strong>ledgers</strong>.
      </p>

      <p className="my-4">
        Crypto faces an impossible dilemma: if the timechains are computers in any sense, they are
        surely only valuable as <em>decentralized</em> computers. But Ethereum is much more expensive
        than AWS by every conception of cost: write cost, storage cost, write speed, and sync speed.
      </p>

      <Callout type="warning">
        <p>
          If crypto protocols turn out to be every bit as centralized as cloud computing, the debate
          ends at the point on which they are outcompeted on cost by many orders of magnitude.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Scaling vs. security</strong>: making the protocol more usable requires making
              it less secure.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Proof-of-stake</strong> is a tacit admission of losing the fight for liquidity —
              the token becomes a security, not money.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Without endogenous value and security, <strong>centralization becomes necessary</strong>,
              introducing new attack vectors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              Timechains should be <strong>ledgers</strong>, not computers — otherwise they compete
              poorly with centralized alternatives.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
