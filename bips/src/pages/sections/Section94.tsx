import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section94() {
  return (
    <LessonLayout sectionId={94}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Course Summary & Resources</h2>

      <p className="mb-4">
        This course has covered the essential Bitcoin Improvement Proposals that define
        how Bitcoin works. Let's review the key themes and provide resources for continued
        learning.
      </p>

      <Callout type="success" title="Course Complete">
        <p>
          Congratulations on completing the Bitcoin Improvement Proposals course!
          You now have a comprehensive understanding of Bitcoin's technical foundations.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Themes Reviewed</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">1. BIP Process</p>
          <p className="text-sm text-dark-300">
            Bitcoin changes through formal proposals reviewed by the community.
            BIPs provide transparency and documentation for protocol evolution.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">2. Consensus Rules</p>
          <p className="text-sm text-dark-300">
            Soft forks like SegWit and Taproot extend Bitcoin's capabilities while
            maintaining backward compatibility. Activation requires broad agreement.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">3. Wallet Standards</p>
          <p className="text-sm text-dark-300">
            HD wallets (BIP-32/39/44) and descriptors enable interoperability.
            Derivation paths ensure consistent key generation across implementations.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">4. Transaction Formats</p>
          <p className="text-sm text-dark-300">
            PSBT enables multi-party signing workflows. SegWit and Taproot provide
            efficient, private transaction structures.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">5. Network Protocol</p>
          <p className="text-sm text-dark-300">
            P2P messages, compact blocks, and encrypted transport keep Bitcoin
            decentralized and efficient. Privacy improvements continue.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">6. Layer 2 Solutions</p>
          <p className="text-sm text-dark-300">
            Lightning Network, statechains, and sidechains scale Bitcoin while
            preserving security. HTLCs and covenants enable complex protocols.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Essential BIPs by Category</h3>

      <Example title="BIP Quick Reference">
        <div className="space-y-3 text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Must-Know BIPs:</p>
            <p className="text-dark-300">BIP-32 (HD wallets), BIP-39 (mnemonics), BIP-44 (derivation)</p>
            <p className="text-dark-300">BIP-141 (SegWit), BIP-341 (Taproot), BIP-340 (Schnorr)</p>
            <p className="text-dark-300">BIP-174 (PSBT), BIP-173 (bech32), BIP-350 (bech32m)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Important for Developers:</p>
            <p className="text-dark-300">BIP-68/112 (relative timelocks), BIP-125 (RBF)</p>
            <p className="text-dark-300">BIP-380+ (descriptors), BIP-327 (MuSig2)</p>
            <p className="text-dark-300">BIP-157/158 (compact filters), BIP-324 (v2 transport)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400 font-bold mb-2">Historical Understanding:</p>
            <p className="text-dark-300">BIP-9 (activation), BIP-16 (P2SH), BIP-34 (block v2)</p>
            <p className="text-dark-300">BIP-65/66 (CLTV, DER), BIP-91 (SegWit activation)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Continuing Your Learning</h3>

      <Definition title="Next Steps">
        <p>
          Understanding BIPs is foundational—now apply this knowledge through
          implementation, contribution, or deeper research into specific areas.
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Recommended paths:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Development:</strong> Build wallet features, Lightning apps, or PSBT tools
          </li>
          <li>
            <strong>Protocol:</strong> Dive deep into cryptography, network theory
          </li>
          <li>
            <strong>Research:</strong> Follow mailing lists, review new BIPs
          </li>
          <li>
            <strong>Contribution:</strong> Test implementations, improve documentation
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Primary Resources</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Resource</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">github.com/bitcoin/bips</td>
              <td>Official BIP repository</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">bitcoin-dev mailing list</td>
              <td>Protocol development discussion</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">bitcoinops.org</td>
              <td>Technical newsletter and wiki</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">github.com/bitcoin/bitcoin</td>
              <td>Bitcoin Core reference implementation</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">btctranscripts.com</td>
              <td>Conference talk transcripts</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Books & Deep Dives</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Mastering Bitcoin</p>
          <p className="text-sm text-dark-300">
            Andreas Antonopoulos - Comprehensive technical introduction covering
            transactions, scripts, and network protocol.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Programming Bitcoin</p>
          <p className="text-sm text-dark-300">
            Jimmy Song - Hands-on implementation of Bitcoin primitives from scratch.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Grokking Bitcoin</p>
          <p className="text-sm text-dark-300">
            Kalle Rosenbaum - Visual, intuitive explanation of Bitcoin mechanics.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning & Layer 2</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Lightning resources:</p>
        <p className="text-dark-300">BOLTs: github.com/lightning/bolts</p>
        <p className="text-dark-300">Mastering Lightning: by Antonopoulos & Osuntokun</p>
        <p className="text-dark-300">LN Dev Summit notes: various transcripts</p>
        <p className="text-dark-400 mt-3 mb-2"># Other L2:</p>
        <p className="text-dark-300">RGB: rgb.info</p>
        <p className="text-dark-300">Fedimint: fedimint.org</p>
        <p className="text-dark-300">Statechain: mercurylayer.com</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Final Thoughts</h3>

      <Callout type="info" title="The BIP Philosophy">
        <p>
          Bitcoin's strength comes from its conservative development process. Every BIP
          we've studied represents careful deliberation, extensive review, and consensus
          building. This approach ensures that Bitcoin remains secure, decentralized,
          and trustworthy—qualities that cannot be rushed.
        </p>
      </Callout>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 mb-6">
        <p className="text-lg text-dark-100 mb-4">Remember:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>BIPs document consensus—they don't create it</li>
          <li>Implementation matters as much as specification</li>
          <li>Security comes from simplicity and review</li>
          <li>Backward compatibility preserves network value</li>
          <li>Decentralization requires inclusive processes</li>
        </ul>
      </div>

      <Callout type="success" title="Thank You">
        <p>
          You've completed a comprehensive journey through Bitcoin's technical standards.
          Whether you're building applications, contributing to protocol development, or
          simply seeking deeper understanding, this knowledge provides the foundation
          for meaningful engagement with Bitcoin's future evolution.
        </p>
      </Callout>
    </LessonLayout>
  );
}
