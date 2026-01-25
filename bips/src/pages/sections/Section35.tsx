import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Output Descriptor Extensions</h2>

      <p className="mb-4">
        BIPs 381-384 extend the base descriptor language (BIP-380) with additional script
        functions. These extensions enable descriptors for non-segwit scripts, multisig
        configurations, and complex spending conditions.
      </p>

      <Callout type="info" title="Building Blocks">
        <p>
          While BIP-380 defines the core syntax, these extension BIPs add the specific
          functions needed to describe the full range of Bitcoin output scripts.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-381: Non-SegWit Descriptors</h3>

      <p className="mb-4">
        BIP-381 defines functions for legacy (non-SegWit) script types:
      </p>

      <div className="space-y-4 mb-6">
        <Definition title="pk(KEY)">
          <p>
            Pay-to-Public-Key: The simplest script type. Rarely used today but historically
            important (early Bitcoin transactions).
          </p>
          <div className="font-mono text-sm mt-2">
            <p className="text-dark-400"># Script:</p>
            <p className="text-amber-400">&lt;pubkey&gt; OP_CHECKSIG</p>
          </div>
        </Definition>

        <Definition title="pkh(KEY)">
          <p>
            Pay-to-Public-Key-Hash: Classic "1..." addresses. Hides the public key until
            spending.
          </p>
          <div className="font-mono text-sm mt-2">
            <p className="text-dark-400"># Descriptor:</p>
            <p className="text-amber-400">pkh(xpub.../44h/0h/0h/0/*)</p>
          </div>
        </Definition>

        <Definition title="sh(SCRIPT)">
          <p>
            Pay-to-Script-Hash: Wraps any script in a P2SH output ("3..." address).
            Used for nested SegWit and legacy multisig.
          </p>
          <div className="font-mono text-sm mt-2">
            <p className="text-dark-400"># Nested SegWit:</p>
            <p className="text-amber-400">sh(wpkh(KEY))</p>
          </div>
        </Definition>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-382: SegWit Descriptors</h3>

      <p className="mb-4">
        BIP-382 adds native SegWit script functions:
      </p>

      <Example title="SegWit Functions">
        <div className="space-y-3 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># wpkh - Native SegWit single-key</p>
            <p className="text-amber-400">wpkh(xpub.../84h/0h/0h/0/*)</p>
            <p className="text-dark-500 text-xs mt-1">→ bc1q... addresses</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># wsh - Native SegWit script</p>
            <p className="text-amber-400">wsh(multi(2,KEY1,KEY2,KEY3))</p>
            <p className="text-dark-500 text-xs mt-1">→ bc1q... (longer) addresses</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-383: Multisig Descriptors</h3>

      <p className="mb-4">
        BIP-383 defines functions for threshold multisig scripts:
      </p>

      <Definition title="multi(K, KEY1, KEY2, ...)">
        <p>
          Standard K-of-N multisig. Keys are used in the exact order specified.
        </p>
        <div className="font-mono text-sm mt-2">
          <p className="text-dark-400"># 2-of-3 multisig:</p>
          <p className="text-amber-400">multi(2, xpub1/.../0/*, xpub2/.../0/*, xpub3/.../0/*)</p>
        </div>
      </Definition>

      <Definition title="sortedmulti(K, KEY1, KEY2, ...)">
        <p>
          K-of-N multisig with keys sorted lexicographically. Produces consistent
          scripts regardless of the order keys are specified.
        </p>
        <div className="font-mono text-sm mt-2">
          <p className="text-dark-400"># Order-independent 2-of-3:</p>
          <p className="text-amber-400">sortedmulti(2, xpub1/...*, xpub2/...*, xpub3/...*)</p>
        </div>
      </Definition>

      <Example title="Multisig Descriptor Examples">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Legacy P2SH multisig (3... address)</p>
            <p className="text-dark-300">sh(sortedmulti(2,[fp1/45h]xpub1/0/*,[fp2/45h]xpub2/0/*,[fp3/45h]xpub3/0/*))</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Native SegWit multisig (bc1q... address)</p>
            <p className="text-amber-400">wsh(sortedmulti(2,[fp1/48h/0h/0h/2h]xpub1/0/*,...))</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-384: Combo Descriptor</h3>

      <p className="mb-4">
        BIP-384 defines a convenience function for wallet scanning:
      </p>

      <Definition title="combo(KEY)">
        <p>
          Represents multiple output types for the same key. Useful for scanning
          when you don't know which script type was used.
        </p>
        <p className="text-dark-400 mt-2">Expands to:</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-dark-300">
          <li>pk(KEY) — if uncompressed</li>
          <li>pkh(KEY)</li>
          <li>wpkh(KEY) — if compressed</li>
          <li>sh(wpkh(KEY)) — if compressed</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nesting Rules</h3>

      <p className="mb-4">
        Not all combinations are valid. The rules follow Bitcoin consensus:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Outer</th>
              <th className="text-left py-3 text-dark-300">Can Contain</th>
              <th className="text-left py-3 text-dark-300">Example</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">sh()</td>
              <td>wpkh, wsh, multi, sortedmulti</td>
              <td className="font-mono text-xs">sh(wpkh(KEY))</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">wsh()</td>
              <td>pk, pkh, multi, sortedmulti</td>
              <td className="font-mono text-xs">wsh(multi(...))</td>
            </tr>
            <tr>
              <td className="py-3 font-mono">sh(wsh())</td>
              <td>pk, pkh, multi, sortedmulti</td>
              <td className="font-mono text-xs">sh(wsh(multi(...)))</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Invalid Nestings">
        <p>
          Some combinations are invalid:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><code>wsh(wpkh(KEY))</code> — Can't nest witness inside witness</li>
          <li><code>sh(sh(...))</code> — Can't double-wrap P2SH</li>
          <li><code>wpkh(multi(...))</code> — wpkh only takes single keys</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Usage</h3>

      <Example title="Complete Multisig Wallet">
        <div className="space-y-2 font-mono text-xs break-all">
          <p className="text-dark-400"># External (receiving) addresses:</p>
          <p className="text-dark-300">
            wsh(sortedmulti(2,[aabbccdd/48h/0h/0h/2h]xpub1/0/*,[11223344/48h/0h/0h/2h]xpub2/0/*))#checksum
          </p>

          <p className="text-dark-400 mt-3"># Internal (change) addresses:</p>
          <p className="text-dark-300">
            wsh(sortedmulti(2,[aabbccdd/48h/0h/0h/2h]xpub1/1/*,[11223344/48h/0h/0h/2h]xpub2/1/*))#checksum
          </p>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          Two descriptors fully define a 2-of-2 native SegWit multisig wallet
        </p>
      </Example>

      <Callout type="success" title="Complete Description">
        <p>
          Together, BIPs 380-384 provide a complete language for describing any standard
          Bitcoin output script. This enables precise wallet backup, restoration, and
          interoperability across different software implementations.
        </p>
      </Callout>
    </LessonLayout>
  );
}
