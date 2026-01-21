import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Musig2London() {
  return (
    <TranscriptLayout transcriptId="musig2-london">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>BIP340's x-only keys save space but add implementation complexity</li>
          <li>MuSig2 can precompute nonces before knowing the message</li>
          <li>FROST offers better key-loss protection than MuSig but requires interactive DKG</li>
          <li>ROAST adds robustness to FROST for asynchronous networks</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP340 Design Decisions</h3>

      <p className="mb-4">
        Tim Ruffing and Elizabeth Crites discuss the trade-offs made in Bitcoin's Schnorr
        implementation:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "X-only public keys save one byte but introduce engineering complexity for
          advanced cryptographic operations like key tweaking and aggregation."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Definition title="X-Only Public Keys">
        <p>
          BIP340 represents public keys by their x-coordinate only:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Benefit:</strong> 32 bytes instead of 33 bytes</li>
          <li><strong>Cost:</strong> Y-coordinate is implicitly "even"</li>
          <li><strong>Complexity:</strong> Key tweaking must account for parity</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Models Deep Dive</h3>

      <p className="mb-4">
        The discussion covers the cryptographic assumptions underlying MuSig2:
      </p>

      <Example title="Security Assumptions Explained">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-100">Random Oracle Model (ROM)</p>
            <p className="text-sm text-dark-300 mt-1">
              Treats hash functions as truly random functions. Standard assumption
              for most practical cryptographic proofs.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Algebraic Group Model (AGM)</p>
            <p className="text-sm text-dark-300 mt-1">
              Assumes adversaries can only produce group elements by combining
              elements they've seen. Stronger than ROM alone.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">One-More Discrete Log (OMDL)</p>
            <p className="text-sm text-dark-300 mt-1">
              Given n discrete log challenges and access to an oracle that solves
              n-1 of them, computing the n-th is hard.
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">MuSig2 Precomputation</h3>

      <p className="mb-4">
        A key practical advantage discussed is nonce precomputation:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "MuSig2 can precompute the first round without having a message, enabling
          more efficient Lightning channel operations with only one network message
          needed for signing."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Practical Impact:</strong> Lightning nodes can
          prepare for future channel updates in advance, reducing latency when the actual
          transaction needs to be signed.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">FROST vs MuSig2</h3>

      <p className="mb-4">
        Elizabeth Crites explains when to choose threshold vs multi-signatures:
      </p>

      <Example title="Choosing the Right Scheme">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Consideration</th>
              <th className="pb-2">MuSig2</th>
              <th className="pb-2">FROST</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Signing requirement</td>
              <td>All n signers</td>
              <td className="text-indigo-400">Any t signers</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Key generation</td>
              <td className="text-indigo-400">Simple</td>
              <td>Interactive DKG required</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Key loss tolerance</td>
              <td>None (all keys needed)</td>
              <td className="text-indigo-400">Tolerates n-t losses</td>
            </tr>
            <tr>
              <td className="py-2">Complexity</td>
              <td className="text-indigo-400">Lower</td>
              <td>Higher</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Status</h3>

      <p className="mb-4">
        The discussion covers where implementations exist:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">libsecp256k1-zkp</p>
          <p className="text-sm text-dark-300">
            Experimental MuSig2 implementation, not yet in main library.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">BIP Draft</p>
          <p className="text-sm text-dark-300">
            BIP327 specifies MuSig2 for Bitcoin standardization.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Hardware Wallets</p>
          <p className="text-sm text-dark-300">
            Support pending BIP finalization and library maturity.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">FROST</p>
          <p className="text-sm text-dark-300">
            Implementations exist but no Bitcoin BIP yet proposed.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">ROAST Introduction</h3>

      <p className="mb-4">
        The seminar introduces ROAST as a solution to FROST's robustness issues:
      </p>

      <Callout type="info" title="Why ROAST Matters">
        <p>
          FROST alone can stall if signers go offline. ROAST is a wrapper protocol that:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Runs multiple FROST sessions in parallel</li>
          <li>Guarantees completion with any t honest signers</li>
          <li>Works in asynchronous networks without timeouts</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Recommendations</h3>

      <p className="mb-4">
        The speakers offer guidance for implementers:
      </p>

      <ul className="space-y-2 text-dark-300">
        <li className="flex items-start gap-2">
          <span className="text-indigo-400">1.</span>
          <span>Use MuSig2 when all parties must agree (e.g., 2-of-2 channels)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-indigo-400">2.</span>
          <span>Use FROST when key loss tolerance is important</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-indigo-400">3.</span>
          <span>Add ROAST when operating in unreliable network conditions</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-indigo-400">4.</span>
          <span>Wait for stable implementations before production use</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/4"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 4: From MuSig to FROST
          </p>
          <p className="text-sm text-dark-500">Evolution of schemes</p>
        </a>
        <a
          href="#/section/6"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 6: Security Models
          </p>
          <p className="text-sm text-dark-500">ROM, AGM, and OMDL explained</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
