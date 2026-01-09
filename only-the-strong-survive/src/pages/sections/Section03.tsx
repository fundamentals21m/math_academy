import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Social Innovation</h2>

      <p className="my-4">
        Bitcoin is not a computer, it is a <strong>ledger</strong>. This is not to deny Bitcoin is
        "money." Of course, it has a monetary aspect, but only because money is arguably the most
        important ledger, in whatever form it happens to take.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">Satoshi's Key Insight</h3>
        <p className="text-dark-300">
          Adam Back essentially made this point on Preston Pysh's podcast recently: one way of
          conceiving the real breakthrough of Bitcoin is that Satoshi realized stable value could
          not be robustly targeted. The robustness of the ledger itself would have to be paramount,
          from which value might endogenously emerge.
        </p>
      </div>

      {/* Computers are a Red Herring */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Computers Are a Red Herring</h2>

      <p className="my-4">
        The presence of computers in the workings of Bitcoin is a red herring as far as this analysis
        goes. Computers are useful because they allow the introduction of mathematical precision into
        the necessarily probabilistic proving of work.
      </p>

      <p className="my-4">
        Also, "the Internet" is useful because it allows the desired consensus to be reached and
        verified globally nearly instantaneously. But neither technically matter.
      </p>

      <Callout type="info">
        <p>
          Bitcoin could work in principle with pen and paper and carrier pigeons bringing the result
          of computations-by-hand back and forth to a public square: the ledger would work, but its
          intended use case as money likely would not. Computers make Bitcoin far more useful, but
          they do not <em>make</em> Bitcoin.
        </p>
      </Callout>

      {/* Consensus is What Matters */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Consensus Is What Matters</h2>

      <p className="my-4">
        The consensus (i.e., the ledger) is what matters. The breakthrough of proof-of-work and the
        difficulty adjustment is far more about <strong>harnessing energy</strong> and existing
        communications infrastructure to calibrate incentives than it has to do with computation.
      </p>

      <p className="my-4">
        Computation is a tool that makes the process more efficient and reliable, but Bitcoin is not
        itself a "computer."
      </p>

      {/* Inefficient Database? */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Not an "Inefficient Database"</h2>

      <p className="my-4">
        Calling Bitcoin an "inefficient database" is equally unhelpful. A car is an inefficient stove
        if you run the engine hot enough to fry an egg on the hood, but only because you are using it
        for something other than its intended purpose.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          What matters is that Bitcoin is an <strong>append-only ledger</strong>, appendable by
          anybody, and verifiable by anybody that it has only ever been appended. In other words,
          a ledger that is <em>censorship resistant</em> and <em>integrity assured</em>.
        </p>
      </div>

      <p className="my-4">
        This could be implemented by hand and then all discarded besides the UTXO set: an unordered
        list of mostly optical gibberish – hardly a "database."
      </p>

      {/* Endogenous Value and Security */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Virtuous Circle</h2>

      <p className="my-4">
        This all allows Bitcoin to realize:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Endogenous Value</h3>
          <p className="text-dark-300 text-sm">
            Value as an asset grounded in its security
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-orange-600/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Endogenous Security</h3>
          <p className="text-dark-300 text-sm">
            Provision of security as incentivized by this asset
          </p>
        </div>
      </div>

      <p className="my-4">
        These two elements reinforce each other in a virtuous circle that makes Bitcoin uniquely
        robust as a form of digital money.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Bitcoin is fundamentally a <strong>ledger</strong>, not a computer or database.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              The consensus mechanism is about harnessing <strong>energy</strong>, not just computation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Value and security are <strong>endogenous</strong> and mutually reinforcing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              The core properties are <strong>censorship resistance</strong> and <strong>integrity assurance</strong>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
