import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "I don't really care about being right, I just care about success. I don't mind being wrong,
        and I'll admit that I'm wrong a lot."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Steve Jobs on "Crypto"
        </footer>
      </blockquote>

      <Callout type="info">
        <p>
          In the interests of intellectual honesty (and hence professional seriousness), the authors
          present reasons why their analysis may turn out to be mistaken.
        </p>
      </Callout>

      {/* Reasons They Might Be Wrong */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Potential Reasons for Error</h2>

      <p className="my-4">
        This is clearly not an exhaustive list, but the authors may turn out to be wrong for any
        or all of the following reasons:
      </p>

      {/* Reason 1 */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">1. Underestimating Social Strengths</h3>
        <p className="text-dark-300">
          The authors may have overestimated crypto's technical flaws and underestimated its social
          strengths. Ever-growing inflows of capital, talent, and interlinked network effects may
          contribute to overcoming whatever flaws exist.
        </p>
      </div>

      {/* Reason 2 */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">2. Crypto Becomes Bitcoin Sidechains</h3>
        <p className="text-dark-300">
          Crypto programmability may never be truly matched on Bitcoin, and the value spiral problem
          is solved by provably enforceable atomic swaps such that Ethereum, Solana, Cardano, etc.,
          effectively become <strong>sidechains</strong> to Bitcoin.
        </p>
      </div>

      {/* Reason 3 */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">3. DeFi on Bitcoin Just Doesn't Work</h3>
        <p className="text-dark-300">
          DeFi on Bitcoin might not work for reasons beyond lack of programmability. Maybe all the
          higher-layer projects fail for technical reasons while their social utility has become clear
          and hence is serviced by crypto.
        </p>
      </div>

      {/* Reason 4 */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">4. Staking Bootstraps Viability</h3>
        <p className="text-dark-300">
          Staking might bootstrap financial viability by representing an actual, provable yield to
          ecosystem participants, short-circuiting what the authors described as a logical death spiral
          and forming a robust foundation for capital formation.
        </p>
      </div>

      {/* Reason 5 */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">5. Bitcoin Itself Fails</h3>
        <p className="text-dark-300">
          Bitcoin itself might fail and everything in this analysis becomes moot because crypto is all
          we have left. Perhaps due to some cryptographic vulnerability too grave to hard fork out, or
          coordinated government attacks making it untenable for legal capital formation.
        </p>
      </div>

      {/* Reason 6 */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">6. Social Factors / UX</h3>
        <p className="text-dark-300">
          It all works but people don't like using it because it's too clunky. There's precedent in
          Web 2.0 — we could have all cared about privacy and sovereignty, but the vast majority
          preferred the slick utility of Facebook and Google.
        </p>
      </div>

      {/* Caveat */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Important Caveat</h2>

      <Callout type="warning">
        <p>
          The analysis has only focused on crypto ecosystems that explicitly try to capture
          "decentralized finance" — whether as competitive monetary base layers or as infrastructure
          for financial applications. Other use cases may have entirely different dynamics.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Intellectual honesty</strong> requires acknowledging potential errors in
              one's analysis.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              <strong>Network effects and talent</strong> might overcome technical flaws.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Crypto could <strong>become sidechains</strong> to Bitcoin rather than competitors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              <strong>User experience</strong> might trump technical superiority, as in Web 2.0.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
