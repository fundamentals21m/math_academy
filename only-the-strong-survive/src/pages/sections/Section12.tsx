import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Jenga Tower Model</h2>

      <p className="my-4">
        As a final metaphor that is easier to understand than mathematical logic, and still accurate
        enough, consider the following model of crypto funding:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-4">The Game</h3>
        <ol className="space-y-3 text-dark-200">
          <li>
            <strong>1.</strong> Venture capitalists build a Jenga tower, contributing 100 blocks.
            They are invested to the tune of 100.
          </li>
          <li>
            <strong>2.</strong> An iterative game begins: VCs take 1 block from wherever they like,
            while retail adds 2 exclusively to the top.
          </li>
          <li>
            <strong>3.</strong> By the time VCs have taken 20 blocks from throughout the structure,
            they have a paper return of 20%.
          </li>
          <li>
            <strong>4.</strong> When "returns" are impressive enough, VCs raise more primary capital
            that does go to the bottom to buttress the structure.
          </li>
        </ol>
      </div>

      {/* The Problem */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Structural Problem</h2>

      <p className="my-4">
        Of course, the "returns" are "paper" only because, unlike a real yield from a real asset,
        there is <strong>absolutely no reason to believe the par value of the principal is assured</strong>.
      </p>

      <p className="my-4">
        The point of Jenga is to <em>not be the one who collapses the tower</em> — because it will
        eventually collapse.
      </p>

      {/* Musical Chairs */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Musical Chairs</h2>

      <p className="my-4">
        At the risk of mixed metaphors, this is all rather like a game of musical chairs:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          There mathematically is <strong>not enough for everybody to make whole</strong>, never mind
          make a "return." But, as long as the music is still playing, nobody seems to care.
        </p>
      </div>

      <p className="my-4">
        The crypto game, as of today, is ever-so-slightly more complicated: to recoup a non-paper
        return by extracting more Jenga blocks than you contributed... before eventually the music
        stops and the tower collapses.
      </p>

      {/* Why It Hasn't Collapsed */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why It Hasn't Collapsed Yet</h2>

      <Callout type="info">
        <p>
          None of these "towers" have collapsed in the way alluded to, but the authors suspect this
          is because <strong>capital has continued to flow in</strong>. If or when this stops,
          collapses are likely to follow.
        </p>
      </Callout>

      {/* The Speculation on Speculation */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Speculation on Speculation</h2>

      <p className="my-4">
        The value involved is clearly speculative — even proponents would not deny this. But there
        has been curiously little thought put towards <em>why</em> speculative value ever comes about
        in the first place.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200">
          In this case, what is being speculated on is that something will cease to be speculative
          and become real. The problem is that these are the same thing:
        </p>
        <p className="text-dark-200 mt-4 text-xl font-semibold text-orange-400 text-center">
          It is a speculation that this speculation will stop being speculative.
        </p>
      </div>

      {/* The Greater Fool */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Greater Fool Dynamic</h2>

      <p className="my-4">
        The secondary trades, hence the returns, depend on liquidity, and liquidity depends on
        permanence. If market participants know a security is worth zero, then liquidity will only
        continue to exist so long as there is belief in a <strong>greater fool</strong> to sell to.
      </p>

      <p className="my-4">
        In this case, that greater fool is retail. Or, put another way: we must not mistake
        <strong> market liquidity</strong> and <strong>market depth</strong>. Perfectly deep markets
        are liquid, right up until everybody wants to sell.
      </p>

      {/* Incentive Structure */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Incentive Problem</h2>

      <p className="my-4">
        It is worth briefly drawing attention to the incentives of current market participants:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">End Clients</h3>
          <p className="text-dark-300 text-sm">
            Retail and institutional end clients are <strong>chasing yield</strong> because every
            other asset class is inflated by central bank intervention.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">VCs</h3>
          <p className="text-dark-300 text-sm">
            VCs benefit from <strong>skimming flows</strong> (2 and 20) as long as "returns" continue.
            If paid-in capital <em>looks</em> solvent, the skimming continues.
          </p>
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          VCs' skin in the game is not a stock, but the promise of skimming flows of this stock.
          They benefit directly from however long they can continue to deliver "returns" on which
          they are entitled to skim 2 and 20, and only <em>indirectly</em> from the solvency of
          the paid-in capital.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              The <strong>Jenga model</strong>: VCs extract blocks while retail adds to the top,
              creating "paper returns" until collapse.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Like <strong>musical chairs</strong>, there isn't enough for everyone — the game
              continues only while the music plays.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              The speculation is <strong>self-referential</strong>: betting that speculation
              will stop being speculative.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>VC incentives</strong> are aligned with continued flow-skimming, not
              actual solvency of investments.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
