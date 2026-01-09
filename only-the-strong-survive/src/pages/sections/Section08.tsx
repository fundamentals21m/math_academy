import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Rehypothecation Machine</h2>

      <p className="my-4">
        The first thing to highlight is the immense amount of <strong>rehypothecation</strong> of
        assets happening in the crypto ecosystem today. By "rehypothecation" the authors mean:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200">
          A given asset can be used as "collateral" in one protocol, contributing to a new asset
          being minted, and then either itself reused, its collateralized "end product" reused, or
          its securitized governance rights reused — all again and again throughout multiple
          different protocols.
        </p>
      </div>

      <p className="my-4">
        It is difficult to disentangle three separate concepts, hence treating them all at once:
        <strong> leverage</strong>, <strong>securitization</strong>, and <strong>rehypothecation</strong>.
      </p>

      {/* The Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">A Concrete Example</h2>

      <p className="my-4">
        Consider how assets in the crypto ecosystem can be reused and recycled:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            1
          </span>
          <p className="text-dark-200">
            A user takes <strong>$1500 of Ether</strong>, deposits it into Maker, and gets
            <strong> $1000 of DAI stablecoin</strong> in return (150% collateralization ratio).
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            2
          </span>
          <p className="text-dark-200">
            The user deposits the new DAI plus <strong>$1000 of Tether</strong> into the Curve 3pool,
            becoming an LP with <strong>$2000 total staked</strong>.
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            3
          </span>
          <p className="text-dark-200">
            As an LP, the user receives <strong>CRV tokens</strong> as a "governance" token, whose
            value supposedly derives from voting rights over protocol treasuries.
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            4
          </span>
          <p className="text-dark-200">
            The CRV token can be <strong>lent out</strong> using Aave — deposit to earn interest,
            or collateralize against for stablecoins in yet another protocol.
          </p>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            5
          </span>
          <p className="text-dark-200">
            Once "stablecoins" are generated from the CRV used as collateral, the user is free to
            <strong> reuse them for another round</strong>, going back to step 2.
          </p>
        </div>
      </div>

      {/* What This Creates */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Implicit Leverage and Securitization</h2>

      <p className="my-4">
        Starting with $1500 of ETH and $1000 of Tether leads to multiple different steps of assets
        being created and recycled, either via implicit leverage or implicit securitization:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Implicit Leverage</h3>
          <p className="text-dark-300 text-sm">
            Some protocols (like MakerDAO) take "deposits" and mint new assets — credit instruments
            determined to have value as a function of the deposit. This is essentially the role of
            a <strong>bank</strong> in creating leverage.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Implicit Securitization</h3>
          <p className="text-dark-300 text-sm">
            Other protocols (like Curve) mint new assets — securities — on the basis of value
            ascribed to control of some resource. This is the role of <strong>investment banks</strong>
            in securitization.
          </p>
        </div>
      </div>

      {/* The Overcollateralization Myth */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Overcollateralization Myth</h2>

      <p className="my-4">
        Crypto proponents often cite "overcollateralization" as reassurance that things can only go
        so wrong. But there's a naive arithmetic glitch in this reasoning:
      </p>

      <Callout type="warning">
        <p>
          <strong>Only 200% collateralization (or greater) can achieve systemic safety.</strong> For
          any lower ratio, there will be some number of iterations of rehypothecating collateral such
          that the value outstanding exceeds the initial collateral.
        </p>
      </Callout>

      {/* The Math */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Arithmetic of Rehypothecation</h2>

      <p className="my-4">
        Let's use a simple example of 150% collateralization:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6 space-y-4">
        <p className="text-dark-200">
          $150 (of actual dollars) is required as collateral to issue $100 of StableAliceCoin,
          and likewise to issue $100 of StableBobCoin.
        </p>
        <p className="text-dark-200">
          If we take our $100 of SAC and pledge it as 150% overcollateralization to issue $67 of SBC,
          our gross synthetic exposure is already <strong>$167</strong> on only <strong>$150</strong>
          of "real" collateral.
        </p>
        <p className="text-dark-200">
          We can keep iterating — pledging SBC to issue more SAC, back and forth indefinitely —
          and approach a limit of <strong>$300</strong> aggregate synthetic value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-2xl font-bold text-orange-400">150%</p>
          <p className="text-dark-300 text-sm">Approaches $300 limit</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-2xl font-bold text-orange-400">175%</p>
          <p className="text-dark-300 text-sm">Approaches $233 limit</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-2xl font-bold text-green-400">200%</p>
          <p className="text-dark-300 text-sm">Never exceeds collateral</p>
        </div>
      </div>

      {/* The Core Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Pseudo-Leverage and Undercapitalization</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200">
          What we arrive at is really <strong>pseudo-leverage</strong>. Nobody thinks of themselves
          as having put capital at meaningful risk, because everything is overcollateralized.
          And yet the ecosystem as a whole is <strong>undercapitalized</strong>.
        </p>
        <p className="text-dark-200 mt-4">
          Far from enabling greater transparency and security, this connectedness of potentially
          individually robust elements perversely creates <strong>systemic vulnerability</strong>.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Rehypothecation</strong> allows assets to be used as collateral repeatedly
              across multiple protocols.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              This creates <strong>implicit leverage and securitization</strong> that isn't openly
              described as such.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Only 200%+ collateralization</strong> can prevent synthetic value from exceeding
              real collateral.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              The ecosystem appears overcollateralized individually but is <strong>undercapitalized
              systemically</strong>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
