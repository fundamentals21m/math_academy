import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Three Fundamental Design Flaws</h2>

      <p className="my-4">
        If a token is intended to be something other than money, the authors anticipate three conceptual
        issues with whatever design is conceived — all of which threaten any previously credible claims
        to "decentralization":
      </p>

      <div className="space-y-6 my-8">
        {/* Flaw 1: Liquidity Fight */}
        <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            i) Everything Fights for Liquidity
          </h3>
          <p className="text-dark-300">
            Why would a non-monetary token need to have a nonzero holding period and hence a non-negligible
            value? Why would anybody hold something that is "money, but only for X" for any period other
            than the nanosecond required to transact it?
          </p>
        </div>

        {/* Flaw 2: Poor Security Signal */}
        <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            ii) Poor Economic Signal for Security
          </h3>
          <p className="text-dark-300">
            If you can't rely on endogenous value as money, there will be no sensible basis on which
            to evaluate the merits of the real cost of security contribution.
          </p>
        </div>

        {/* Flaw 3: Bloat */}
        <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            iii) Timechain Bloat
          </h3>
          <p className="text-dark-300">
            If a timechain contains more than the bare minimum of information, it may become practically
            or economically impossible for many to run a node or contribute to security.
          </p>
        </div>
      </div>

      {/* Casino Chip Analogy */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Casino Chip Problem</h2>

      <p className="my-4">
        The liquidity problem is analogous to the choice between dollar bills and casino chips of the
        same denomination:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200 italic">
          "Why willingly take on the casino's liabilities and restrict the ability to engage in any
          other commerce? Why not buy casino chips when and only when you go to the casino?"
        </p>
      </div>

      <p className="my-4">
        This isn't a death knell in itself, but note it relies on a far more delicate consensus than
        would an asset straightforwardly trying to be money. If you can't rely on others holding it,
        then sustaining its value very likely requires some kind of coordination.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Coordination Problem:</strong> Whatever coordination is arrived at likely has no
          inherent economic incentives that independently motivate coordination and must overcome the
          economic disincentive to just hold money instead. Everything fights for liquidity.
        </p>
      </Callout>

      {/* Yield as the Answer */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The "Yield" Solution</h2>

      <p className="my-4">
        As far as the authors can tell, the current "independent motivation" to fight for liquidity
        and hold most crypto assets for a nonzero period is <strong>"yield."</strong>
      </p>

      <p className="my-4">
        But this creates inherent contradictions:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Contradiction #1</h3>
          <p className="text-dark-300 text-sm">
            A security, and a yield, assumes and requires a <em>separate money</em>. But the system
            was architected to both only require itself and yet not be money.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Contradiction #2</h3>
          <p className="text-dark-300 text-sm">
            A "yield" is not a "utility." Utility can be immediately realized; yield cannot. Utility
            is non-monetary and is priced; yield is defined as a ratio of money flow over stock.
          </p>
        </div>
      </div>

      {/* Security Costs */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Poor Security Coordination</h2>

      <p className="my-4">
        Energy has a real cost. Proof-of-work and the difficulty adjustment provide a way to manipulate
        the effectively free activity of transforming information into a measurably costly process,
        providing a link between the physical and the digital.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200">
          If you can't rely on endogenous value as money, there will be no sensible basis on which
          to evaluate the merits of the real cost of security contribution. The process bakes into
          the calculation an element of <strong>belief</strong> that there is no particular reason
          to expect to be stable or reliable over the long-term.
        </p>
      </div>

      <p className="my-4 font-semibold text-orange-400">
        The solution to the coordination problem is precariously rooted in the desire for there to
        be a solution.
      </p>

      {/* Money as Information */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Money as Pure Information</h2>

      <p className="my-4">
        Money is just a type of information. More specifically, it is the information reflecting the
        <strong> social consensus of the value of time</strong>. Bitcoin is just a ledger of transfers
        of value.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          As a form of money endogenous to distributed consensus, the information in the Bitcoin
          timechain is arguably as pure a representation as possible of precisely what costs and
          what time have been contributed to its security.
        </p>
      </div>

      <p className="my-4">
        Were the token intended for some economic property besides pure information, or too far
        removed from information, then it is likely the signalling mechanism linking the information
        to the cost of its provision and security and the value of time will at some point start
        to falter.
      </p>

      {/* Timechain Bloat */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Bloat Problem</h2>

      <p className="my-4">
        If a timechain is structured to contain more than the bare minimum of information — either
        economically loaded content that takes up far more data than validation of monetary balance
        transfers, or just too much validation — then it may reach such a size that it becomes
        impossible to run a node or contribute to security.
      </p>

      <Callout type="info">
        <p>
          Whether the community input on any technicality of the consensus mechanism remains
          sufficiently decentralized also risks becoming jeopardized. There will be some point
          at which this is concerning, given how degraded immutability and unforgeable costliness
          have become.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Non-monetary tokens face three fundamental design flaws: liquidity fights, poor
              security signals, and bloat.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>"Yield"</strong> as the solution creates contradictions — it requires
              separate money while claiming to not need it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Money is <strong>information</strong> reflecting social consensus of the value of time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              Tokens intended for purposes beyond pure information will see their <strong>security
              signalling falter</strong>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
