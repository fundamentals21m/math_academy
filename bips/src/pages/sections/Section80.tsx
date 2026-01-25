import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section80() {
  return (
    <LessonLayout sectionId={80}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-320: nVersion Bits General Purpose</h2>

      <p className="mb-4">
        BIP-320 proposes allowing miners to use previously restricted version bits in
        block headers for general purposes like overt ASICBoost. This acknowledges that
        miners should be able to optimize their operations using available header space.
      </p>

      <Callout type="info" title="Mining Optimization">
        <p>
          Block version bits not used for soft fork signaling were effectively "wasted."
          BIP-320 formalizes their use for mining optimization, particularly overt ASICBoost.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Background: ASICBoost</h3>

      <p className="mb-4">
        ASICBoost is a mining optimization technique:
      </p>

      <Definition title="ASICBoost">
        <p>
          A patented optimization that reduces the energy required for mining by reusing
          partial SHA256 computations. It comes in "covert" (hidden) and "overt" (visible)
          forms.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># SHA256 block structure:</p>
        <p className="text-dark-300">Block header: 80 bytes = 2 SHA256 chunks</p>
        <p className="text-dark-300">Chunk 1: version + prev_hash + merkle_root[0:4]</p>
        <p className="text-dark-300">Chunk 2: merkle_root[4:32] + time + bits + nonce</p>
        <p className="text-dark-400 mt-3 mb-2"># ASICBoost insight:</p>
        <p className="text-amber-400">Vary chunk 1 independently → reuse chunk 2 computation</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Overt vs Covert</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Overt ASICBoost</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Varies version bits</li>
            <li>Visible on-chain</li>
            <li>Transparent to network</li>
            <li>Compatible with SegWit</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Covert ASICBoost</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Varies merkle root</li>
            <li>Hidden (looks normal)</li>
            <li>Requires specific tx ordering</li>
            <li>Incompatible with SegWit</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Version Field Structure</h3>

      <p className="mb-4">
        The block version field has multiple purposes:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># 32-bit version field allocation:</p>
        <p className="text-dark-300">Bits 0-2:   Reserved (must be 001 for v2+)</p>
        <p className="text-dark-300">Bits 3-15:  BIP-9 soft fork signaling (13 bits)</p>
        <p className="text-amber-400">Bits 16-31: General purpose (BIP-320)</p>
        <p className="text-dark-500 mt-3">
          BIP-320 allows free use of upper 16 bits
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-320 Proposal</h3>

      <Example title="Version Bit Usage">
        <div className="space-y-3 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-400 mb-2"># Before BIP-320:</p>
            <p className="text-dark-300">Version must match specific patterns</p>
            <p className="text-dark-300">Random high bits → non-standard block</p>
            <p className="text-dark-400 mt-3 mb-2"># With BIP-320:</p>
            <p className="text-emerald-400">Miners can set bits 16-31 freely</p>
            <p className="text-emerald-400">Enables ~65,536 extra nonce space</p>
            <p className="text-emerald-400">Overt ASICBoost legitimate</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mining Benefits</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Energy savings:</strong> ~15-20% reduction in power per hash
          </li>
          <li>
            <strong>Nonce space:</strong> 16 additional bits for rolling
          </li>
          <li>
            <strong>Transparency:</strong> Overt use is visible, verifiable
          </li>
          <li>
            <strong>Fairness:</strong> All miners can use the same optimization
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Network Impact</h3>

      <Callout type="info" title="Observable Effects">
        <p>
          With BIP-320, you can see version bits being used for ASICBoost:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Blocks with varying high version bits</li>
          <li>Version numbers like 0x20000000, 0x20400000, etc.</li>
          <li>Same pool producing different version patterns</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Historical Context</h3>

      <p className="mb-4">
        ASICBoost was controversial:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>2016-2017:</strong> Covert ASICBoost suspected in some pools
          </li>
          <li>
            <strong>SegWit debate:</strong> Some argued SegWit was blocked to preserve covert ASICBoost
          </li>
          <li>
            <strong>Post-SegWit:</strong> Covert ASICBoost broken, overt became standard
          </li>
          <li>
            <strong>BIP-320:</strong> Formalizes overt use as legitimate
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Stratum V2 Integration</h3>

      <p className="mb-4">
        Modern mining protocols support version rolling:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Stratum V2 version rolling:</p>
        <p className="text-dark-300">Pool provides: base_version, version_mask</p>
        <p className="text-dark-300">Miner uses: (base_version & ~mask) | (roll & mask)</p>
        <p className="text-dark-500 mt-3">
          Mask typically allows bits 16-31 for ASICBoost
        </p>
      </div>

      <Callout type="success" title="Legitimizing Optimization">
        <p>
          BIP-320 transformed ASICBoost from a controversial secret into an accepted
          mining optimization. By formalizing the use of version bits, it ensures all
          miners can compete fairly while maximizing hardware efficiency.
        </p>
      </Callout>
    </LessonLayout>
  );
}
