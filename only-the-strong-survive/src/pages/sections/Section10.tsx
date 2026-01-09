import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Philosophical Discordance</h2>

      <p className="my-4">
        The most likely trigger for a systemic crisis is a fall in the price of <strong>Ether</strong>.
        If this is not a specific trigger, it is likely at the front of the queue of consequences and
        will quickly become a compounding trigger.
      </p>

      <p className="my-4">
        But what is Ether itself? Why does it have value?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200">
          Ether is (allegedly) the right to claim decentralized computation. To make the link more
          obvious, it is <em>the right to run a crypto application</em>. Its price is a reflection
          of "how much running a crypto application is worth" — somewhat tautologically.
        </p>
      </div>

      {/* The Operating Expense Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Operating Expense Problem</h2>

      <p className="my-4">
        Surely this is something of an <strong>operating expense</strong> in the scheme of things?
        What should this have to do with the solvency of the "decentralized financial" enterprise
        on which it runs?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">The Bank Analogy</h3>
        <p className="text-dark-300">
          A strict analogy would be a bank that not only has an office and an electricity bill but
          which also decides to <strong>index its leverage ratio to the price it is paying for
          wholesale electricity or rent</strong>.
        </p>
        <p className="text-dark-300 mt-4">
          And just to rub it in: "Costs" going up are a good thing and costs going down are a bad
          thing! A borrower could receive a margin call, not because of anything to do with financing,
          but solely because the bank's bills went down!
        </p>
      </div>

      {/* The Circular Value */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Circular Value Problem</h2>

      <p className="my-4">
        This is the paradoxical core of all the securitized values pointing at something else and
        at each other in the absence of real economic productivity:
      </p>

      <Callout type="warning">
        <p>
          The financial health of the ecosystem depends on the price of an asset that can only
          conceivably have value as a proxy for <strong>enthusiasm about the ecosystem</strong>
          given it is a cost that all must pay to participate.
        </p>
      </Callout>

      <p className="my-4">
        But is this really to say anything more than: <em>the value depends on everybody thinking
        it ought to have value</em>? The authors do not think it is.
      </p>

      {/* Bitcoin Comparison */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Bitcoin Is Different</h2>

      <p className="my-4">
        Bitcoin arguably fits this description too, but there is a very good reason for people to
        believe it has value. Or rather: there is good reason for people to believe <em>other people
        will believe</em> Bitcoin has value.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200">
          Crypto appears not to have this philosophical buttress. As such, crypto is incredibly
          systemically fragile. What if people stop thinking this? What does this perverse mechanism
          of justifying value churn out at that point?
        </p>
      </div>

      {/* The Expectation Reset */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Coming Reset</h2>

      <p className="my-4">
        Is there any reason not to expect an eventual catastrophic crash, except precisely as
        perpetually staved off by fresh capital?
      </p>

      <p className="my-4">
        New investors daring enough to buy during the bad times would be forced to take a harder
        look at what "value" they are actually buying into. When investors cannot simply ride the
        coat-tails of high beta, the "value" they will see will be far lower than what is being
        perceived today.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          This scenario does not necessarily imply the "end of crypto," but instead a <strong>reset
          of expectations and beliefs</strong> that will bring to the surface important questions
          about how the ecosystem is structured.
        </p>
      </div>

      {/* The Prediction */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Authors' Prediction</h2>

      <p className="my-4">
        It will be fascinating to see those passionate about crypto cast their arguments during
        such times. Those who will still have conviction during and after a mass liquidation event
        are likely the most thoughtful and worth listening to.
      </p>

      <Callout type="info">
        <p>
          <strong>The Prediction:</strong> At such a time, activity will move to then-more-mature
          higher layers of Bitcoin, where true decentralized finance can finally emerge on a
          robust foundation.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Ether's value is <strong>circular</strong> — it's worth what running a crypto app
              is worth, which depends on Ether having value.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              The ecosystem's <strong>leverage is indexed to an operating expense</strong>,
              creating perverse dynamics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Unlike Bitcoin, crypto lacks a <strong>philosophical buttress</strong> for belief
              in sustained value.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              A <strong>reset of expectations</strong> is likely — activity may then move to
              Bitcoin's higher layers.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
