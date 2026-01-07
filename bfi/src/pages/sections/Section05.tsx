import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

// Bearer asset comparison
const bearerAssetComparison = [
  { asset: 'Gold/Silver', custody: 'Physical vault, possibly military', validation: 'Must be melted and assayed', portability: 'Heavy, can be seized' },
  { asset: 'Cash (pre-1971)', custody: 'Bank or safe', validation: 'Relatively easy', portability: 'Represented claim on gold' },
  { asset: 'Bitcoin', custody: '12-24 word seed phrase', validation: 'Digital signature (trivial)', portability: 'Unlimited value in your mind' },
];

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Opening */}
      <p className="text-lg text-dark-300 mb-6">
        If you are a typical institution wanting to use bitcoin, chances are that you are
        unfamiliar with bearer assets. You may be wondering why you are even reading about them.
        A lot of the confusion that exists around bitcoin stems from the <strong className="text-orange-400">extraordinary
        property</strong> that it has of being a bearer asset.
      </p>

      {/* What is a Bearer Asset */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What is a Bearer Asset?</h2>

      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-dark-300 bg-dark-800/50 rounded-r-lg p-4">
        "A bearer asset is a type of financial asset where ownership is determined by physical
        possession, rather than by registration or the holder's identity. In the past, traditional
        bearer assets included cash, because back in the gold standard era, cash represented a
        claim on the Central Bank gold reserve."
        <footer className="text-sm text-dark-500 mt-2">
          — River.com
        </footer>
      </blockquote>

      <p className="my-4">
        The key characteristic of these assets was that <strong className="text-orange-400">whoever physically
        held cash could claim the value it represented</strong>. However, in modern times, cash is no
        longer considered a bearer asset because it no longer means a direct claim on gold or any
        other asset.
      </p>

      {/* Bitcoin as Bearer Asset */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bitcoin as a Bearer Asset</h2>

      <p className="my-4">
        Bitcoin can be viewed as a bearer asset due to its ownership model. Ownership of bitcoin
        is established through the possession of private keys, which allow the holder to control
        and transfer the bitcoin associated with a specific address.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Key Difference from Traditional Bearer Assets</h4>
        <p className="text-dark-200">
          Unlike traditional bearer assets, bitcoin does not represent a claim on any other asset;
          instead, it is a <strong className="text-orange-400">digital asset directly owned and controlled
          by the key holder</strong>. This digital form of bearer asset emphasizes the importance of
          securing private keys.
        </p>
      </div>

      {/* The Problem with Physical Bearer Assets */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Problem with Physical Bearer Assets</h2>

      <p className="my-4">
        The key feature of a bearer asset is that its ownership is entirely determined by physical
        possession. This property exists with other assets like gold and silver, but the
        <strong className="text-orange-400"> cost of custodying a bearer asset with a physical form is
        prohibitively expensive</strong>.
      </p>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Security Costs</h4>
          <p className="text-sm text-dark-300">
            Depending on how much you have, you might need a military to secure it. The value
            must justify the costs of defending it.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Validation Costs</h4>
          <p className="text-sm text-dark-300">
            Even if secured, it's extremely expensive to prove its existence and authenticity.
            Gold bars need to be melted down and assayed.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Authenticity Risk</h4>
          <p className="text-sm text-dark-300">
            Gold and silver bars must be verified to ensure they are not just gold-plated tungsten.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-orange-400 mb-2">Value in Crisis</h4>
          <p className="text-sm text-dark-300">
            When legal structures break down in society, these assets don't require institutions
            to retain their value.
          </p>
        </Card>
      </CardGrid>

      {/* Bearer Asset Comparison Table */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bearer Asset Comparison</h2>

      <div className="bg-dark-800 rounded-lg overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-3 py-3 text-left text-orange-400">Asset</th>
              <th className="px-3 py-3 text-left text-orange-400">Custody</th>
              <th className="px-3 py-3 text-left text-orange-400">Validation</th>
              <th className="px-3 py-3 text-left text-orange-400">Portability</th>
            </tr>
          </thead>
          <tbody>
            {bearerAssetComparison.map((item, i) => (
              <tr key={i} className="border-t border-dark-700">
                <td className="px-3 py-3 text-dark-200 font-medium">{item.asset}</td>
                <td className="px-3 py-3 text-dark-300">{item.custody}</td>
                <td className="px-3 py-3 text-dark-400">{item.validation}</td>
                <td className="px-3 py-3 text-dark-400">{item.portability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The History of Cash as Bearer Asset */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Rise and Fall of Cash as a Bearer Asset</h2>

      <p className="my-4">
        Banks were born to secure and validate gold. Prior to Nixon's closing of the gold window
        in 1971, cash was considered to be a bearer asset because it represented a claim on gold
        owned by the central bank without the need to prove ownership outside of possession.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Cash's Technological Advantage</h4>
        <p className="text-dark-200">
          Cash was a technological breakthrough as a bearer asset because, while it still required
          professional protection at a high enough value, <strong>authenticity was typically not
          difficult or expensive to validate</strong>.
        </p>
      </div>

      <p className="my-4">
        When cash could no longer be exchanged directly for gold, it lost its power as a bearer
        asset. It put a significant friction between the paper and the gold it represented, and
        people didn't want to be holding a significant amount of it out of fear of their government
        placing further frictions on it.
      </p>

      {/* Bitcoin: The Special Bearer Asset */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Bitcoin: A Very Special Bearer Asset</h2>

      <p className="my-4">
        That leaves us with bitcoin, a very special bearer asset. It has all the benefits of
        frictionless proof of ownership and validation that reserve notes had over gold,
        <strong className="text-orange-400"> and much much more</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-5 border border-green-600/30">
          <h4 className="font-semibold text-green-400 mb-3">No Central Issuer</h4>
          <p className="text-dark-300 text-sm">
            There is no risk of devaluation or frictions imposed by a central issuer because
            there is no central issuer. Bitcoin is created and issued by the protocol set in
            motion by Satoshi Nakamoto on January 3, 2009.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-5 border border-green-600/30">
          <h4 className="font-semibold text-green-400 mb-3">Decentralized Network</h4>
          <p className="text-dark-300 text-sm">
            It runs on a decentralized network of "nodes"—validating computers all over the world
            that run the open source Bitcoin software and contain a record of every block ever
            issued and every transaction ever made.
          </p>
        </div>
      </div>

      <Callout type="info">
        <p>
          No node or even group of nodes has the power to change the rules of the protocol, nor
          can they be exempted. Every node does its own validation, but it is part of the larger
          network. A node that wants to run different rules is free to do so, but they are unlikely
          to be able to spend their version of bitcoin as other nodes will not recognize their coins
          as valid.
        </p>
      </Callout>

      {/* The Power of Non-Physical Existence */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Power of Non-Physical Existence</h2>

      <p className="my-4">
        The cryptographic model behind bitcoin is based on the fact that <strong className="text-orange-400">private
        keys do not exist physically</strong> and are virtually impossible to guess, yet are incredibly
        easy to validate.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">The Most Powerful Bearer Asset Ever</h4>
        <p className="text-dark-200 text-lg mb-4">
          The non-physical nature of bitcoin is what makes it the most powerful bearer asset
          to have ever existed.
        </p>
        <ul className="text-dark-300 space-y-2">
          <li>Your bitcoin cannot be stolen through violence</li>
          <li>If you memorize a 12- or 24-word private key, you can store an unlimited
              amount of wealth in your mind</li>
          <li>Anyone who has been a refugee, experienced a bank run, or crossed a border
              fearing seizure understands this power</li>
        </ul>
      </div>

      {/* Diamonds from Kiev */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Diamonds from Kiev</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200 italic mb-4">
          "My great-grandmother came to the US in the early 1900s from Ukraine at the age of ten,
          when she was put on a boat by herself with five diamond stones sewn into her pillowcase."
        </p>
        <p className="text-dark-300">
          The miraculous end of the story—somehow finding family and not being robbed—is one of
          the great inspirations when thinking about what a special store of wealth bitcoin
          private keys are.
        </p>
      </div>

      <p className="my-4">
        Imagine that those diamonds were bought with whatever money the family could muster.
        Instead, they could have bought bitcoin and stored them in a 12-word seed. The great-grandmother
        could have just <strong className="text-orange-400">memorized the 12 words—maybe in a song</strong>—and
        never had the terrorizing thoughts of her family's life work being stolen.
      </p>

      <p className="my-4">
        All she would have needed upon arrival is a phone with internet access, and she could
        convert all of that bitcoin into the local currency.
      </p>

      {/* The Institutional Discount */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Institutional Discount</h2>

      <p className="my-4">
        Institutions will struggle with the tradeoff between trusting third parties and taking
        personal responsibility for custody for a long time. It will take several generations of
        individuals resolving these tradeoffs before institutions can effectively navigate them.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Market Premium:</strong> Institutions must understand that the people they
          share the bitcoin market with will place a significant premium on bearer ownership, and
          they are going to apply a <strong>deep discount</strong> towards every layer of institutional
          ownership they have to yield this power to.
        </p>
      </Callout>

      {/* The Personal Transformation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Personal Transformation</h2>

      <p className="my-4">
        There is a personal transformation that occurs when one takes personal responsibility
        over their bitcoin custody:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <span className="text-orange-400 font-bold text-lg">1</span>
          <h4 className="font-semibold text-dark-200 mt-2 mb-1">Personal Power</h4>
          <p className="text-dark-400 text-sm">
            Like learning to drive and no longer depending on others for rides
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <span className="text-orange-400 font-bold text-lg">2</span>
          <h4 className="font-semibold text-dark-200 mt-2 mb-1">Protection from Seizure</h4>
          <p className="text-dark-400 text-sm">
            Like becoming skilled and responsible enough to own a gun
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <span className="text-orange-400 font-bold text-lg">3</span>
          <h4 className="font-semibold text-dark-200 mt-2 mb-1">Monetary Sovereignty</h4>
          <p className="text-dark-400 text-sm">
            Not beholden to government or Fed monetary policy
          </p>
        </div>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h4 className="font-semibold text-orange-400 mb-3">Ultimate Sovereignty</h4>
        <p className="text-dark-200 text-lg">
          Knowing one can just sell everything they own and put it on a 12-word seed and go
          anywhere they want in the world is a level of individual sovereignty
          <strong className="text-orange-400"> previously unavailable to human beings</strong>.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Bearer assets derive ownership from possession</strong>—whoever holds
              it owns it, without requiring registration or identity.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Bitcoin is the most powerful bearer asset ever created</strong>—non-physical,
              easy to validate, and impossible to seize without consent.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Physical bearer assets have prohibitive costs</strong>—gold requires
              military-level security and expensive assaying for validation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>Cash lost its bearer status in 1971</strong>—when Nixon closed the gold
              window, breaking the direct link to gold.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">5.</span>
            <span>
              <strong>Self-custody enables unprecedented sovereignty</strong>—unlimited wealth
              stored in a 12-word seed phrase, accessible anywhere on Earth.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
