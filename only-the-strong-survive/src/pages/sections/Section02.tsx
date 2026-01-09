import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "One Ring to rule them all, One Ring to find them,
        One Ring to bring them all, and in the darkness bind them."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — J.R.R. Tolkien on "Crypto"
        </footer>
      </blockquote>

      <Callout type="info">
        <p>
          <strong>TLDR:</strong> In this section, we provide a philosophical and technical analysis of
          what we believe to be the real innovation in Bitcoin: proof-of-work and the difficulty adjustment
          enabling distributed consensus and "money" as an emergent and endogenous use case.
        </p>
      </Callout>

      {/* The Question */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">What Is the Innovation of Bitcoin?</h2>

      <p className="my-4">
        Is Bitcoin a decentralized computer? Is it digital real estate? Is it a peer-to-peer payments tool?
        Is it a solution to the Byzantine Generals Problem?
      </p>

      <p className="my-4">
        The authors offer two contexts of their own, and hence two answers:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Technically</h3>
          <p className="text-dark-300 text-sm">
            The innovation is the proof-of-work algorithm, the difficulty adjustment, and the native
            monetary unit that is able to endogenously emerge.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Socially</h3>
          <p className="text-dark-300 text-sm">
            The innovation is an immutable and uncheatable distributed ledger.
          </p>
        </div>
      </div>

      {/* Technical Innovation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Technical Breakthrough</h2>

      <p className="my-4">
        The proof-of-work algorithm and difficulty adjustment enabling distributed consensus on
        censorship-resistant, integrity-assured, floating value <em>is the breakthrough</em>.
      </p>

      <p className="my-4">
        In purely technical terms, nothing else about Bitcoin is either original or all that interesting.
        Public key cryptography and hash functions have been perfectly well understood for decades and
        implemented across industries and applications without much fanfare.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">Achieving Permissionless Consensus</h3>
        <p className="text-dark-300">
          Every actor may have an incentive to manipulate consensus to their own benefit. The innovation
          of Bitcoin is the creation of an incentive to protect honest contributions to consensus from a
          distributed network that is <strong>greater than the incentive</strong> to either attack honest
          contributions or to submit dishonest contributions.
        </p>
      </div>

      <p className="my-4">
        This innovation is implemented via proof-of-work: value is programmatically escrowed and
        probabilistically returned on the basis of valid and honest contributions, and is otherwise
        confiscated. These contributions are both perfectly competitive and auditable.
      </p>

      <p className="my-4 font-semibold text-orange-400">
        It is the work that is respected, not the worker. The worker need not be known to the rest of
        the network.
      </p>

      {/* Endogenous Money */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Money as an Emergent Property</h2>

      <p className="my-4">
        That the resulting protocol can be considered "money" is endogenous to this incentive scheme –
        but it is also necessary. The reward for honesty must have a denomination that can reliably be
        weighed up against the cost of escrow, dishonesty, or overt attack.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-center italic">
          "Bitcoin's distributed security is endogenous and depends on its value as money; and its value
          as money is endogenous and depends on its distributed security."
        </p>
      </div>

      <p className="my-4">
        The difficulty adjustment enables cryptanalytic stability in the provision of security via work,
        allowing decentralized timing as well as decentralized truth.
      </p>

      {/* Previous Attempts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Previous Attempts Failed</h2>

      <p className="my-4">
        This breakthrough allowed Bitcoin to advance beyond previous attempts at digital cash, in which
        the hoped-for digital value was assumed to correspond to an external yardstick, almost always a
        given denomination of fiat money.
      </p>

      <p className="my-4">
        Previous attempts disallowed a workable incentive scheme to protect the integrity of the asset
        in a distributed manner. Without such a scheme, value and timestamping had to be guaranteed
        centrally. This grounded that value in trust in the issuing authority – making the asset little
        more than an IOU in digital guise.
      </p>

      {/* Key Characteristics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Five Key Characteristics</h2>

      <p className="my-4">
        There are a handful of interrelated characteristics that constitute the real innovation of Bitcoin
        and that delicately balance to give it unprecedented functionality:
      </p>

      <ol className="space-y-4 my-6">
        {[
          { num: 'i', text: 'The proof-of-work algorithm' },
          { num: 'ii', text: 'The difficulty adjustment' },
          { num: 'iii', text: 'The native unit of (only) monetary value' },
          { num: 'iv', text: 'The lack of a founder or acknowledged leader' },
          {
            num: 'v',
            text: 'The economic incentive created for distrusting individual actors to achieve distributed consensus, unforgeably and immutably',
          },
        ].map((item) => (
          <li key={item.num} className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-xs shrink-0">
              {item.num}
            </span>
            <p className="text-dark-200">{item.text}</p>
          </li>
        ))}
      </ol>

      {/* Core Thesis */}
      <Callout type="warning">
        <p>
          <strong>The Core Thesis:</strong> All non-Bitcoin crypto projects, usually in an attempt to
          add functionality deemed to be an improvement on that offered by Bitcoin, necessarily sacrifice
          at least one element just outlined. This short-termism puts decentralization at risk.
        </p>
      </Callout>
    </LessonLayout>
  );
}
