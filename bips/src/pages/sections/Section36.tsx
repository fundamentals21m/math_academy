import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Multipath Descriptors</h2>

      <p className="mb-4">
        BIP-389 introduces multipath expressions in output descriptors, allowing a single
        descriptor to specify multiple derivation paths. This elegant extension enables
        one descriptor to represent both receiving and change addresses—a critical
        improvement for wallet backup and restoration.
      </p>

      <Callout type="info" title="Unified Backup">
        <p>
          Before BIP-389, wallets needed separate descriptors for external (receiving) and
          internal (change) address chains. Multipath descriptors combine them into one,
          simplifying backup and reducing the chance of incomplete restoration.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Standard BIP-44 wallets have two address chains:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-amber-400 font-semibold mb-2">External Chain (0)</p>
            <p className="font-mono text-xs text-dark-300">m/84h/0h/0h/0/*</p>
            <p className="text-dark-500 text-sm mt-1">For receiving addresses</p>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">Internal Chain (1)</p>
            <p className="font-mono text-xs text-dark-300">m/84h/0h/0h/1/*</p>
            <p className="text-dark-500 text-sm mt-1">For change addresses</p>
          </div>
        </div>
        <p className="text-rose-400 text-sm mt-4">
          Without BIP-389: Two separate descriptors needed for complete wallet
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multipath Syntax</h3>

      <Definition title="Angle Bracket Notation">
        <p>
          BIP-389 uses angle brackets to specify multiple path options:
        </p>
        <div className="font-mono text-lg text-amber-400 mt-3">
          xpub.../&lt;0;1&gt;/*
        </div>
        <p className="mt-2">
          This expands to both <code>.../0/*</code> and <code>.../1/*</code>, representing
          both address chains in a single expression.
        </p>
      </Definition>

      <Example title="Single vs Multipath Descriptor">
        <div className="space-y-4">
          <div>
            <p className="text-dark-400 mb-2">Traditional (two descriptors):</p>
            <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs space-y-2">
              <p className="text-dark-300">wpkh([fp/84h/0h/0h]xpub.../0/*)</p>
              <p className="text-dark-300">wpkh([fp/84h/0h/0h]xpub.../1/*)</p>
            </div>
          </div>
          <div>
            <p className="text-dark-400 mb-2">Multipath (one descriptor):</p>
            <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
              <p className="text-amber-400">wpkh([fp/84h/0h/0h]xpub.../&lt;0;1&gt;/*)</p>
            </div>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Expansion Rules</h3>

      <p className="mb-4">
        The multipath expression expands predictably:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Input:</p>
        <p className="text-dark-300 mb-4">wpkh(xpub.../&lt;0;1&gt;/*)</p>

        <p className="text-dark-400 mb-2"># Expands to:</p>
        <p className="text-dark-300">[0] wpkh(xpub.../0/*) ← external</p>
        <p className="text-dark-300">[1] wpkh(xpub.../1/*) ← internal</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multiple Multipaths</h3>

      <p className="mb-4">
        In multisig descriptors, each key can have its own multipath:
      </p>

      <Example title="Multisig with Multipaths">
        <div className="space-y-2 font-mono text-xs break-all">
          <p className="text-dark-400"># 2-of-2 with both chains:</p>
          <p className="text-amber-400">
            wsh(sortedmulti(2,[fp1/48h/0h/0h/2h]xpub1/&lt;0;1&gt;/*,[fp2/48h/0h/0h/2h]xpub2/&lt;0;1&gt;/*))
          </p>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          All keys must have the same number of multipath options
        </p>
      </Example>

      <Callout type="warning" title="Matching Paths Required">
        <p>
          When using multipaths in multi-key descriptors, each key expression must have
          the same number of path options. The wallet expands all multipaths together:
          first option from each key forms descriptor 0, second option forms descriptor 1, etc.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Beyond 0/1</h3>

      <p className="mb-4">
        While the common case is external/internal (0/1), the syntax supports any values:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-3 font-mono text-sm">
          <p className="text-dark-400"># Standard external/internal:</p>
          <p className="text-dark-300">xpub/&lt;0;1&gt;/*</p>

          <p className="text-dark-400 mt-3"># Multiple receive accounts:</p>
          <p className="text-dark-300">xpub/&lt;0;1;2;3&gt;/*</p>

          <p className="text-dark-400 mt-3"># Hardened paths:</p>
          <p className="text-dark-300">xpub/&lt;0h;1h&gt;/*</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wallet Support</h3>

      <p className="mb-4">
        When importing a multipath descriptor, wallets should:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">1. Expand to Component Descriptors</p>
          <p className="text-sm text-dark-300">
            Split the multipath descriptor into individual descriptors, one per path option.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">2. Assign Semantic Meaning</p>
          <p className="text-sm text-dark-300">
            Conventionally, index 0 = external (receiving), index 1 = internal (change).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">3. Preserve Original</p>
          <p className="text-sm text-dark-300">
            When exporting, reconstruct the multipath form if the components match
            the expected pattern.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Checksum Handling</h3>

      <p className="mb-4">
        Checksums for multipath descriptors work on the unexpanded form:
      </p>

      <Example title="Checksum Calculation">
        <div className="space-y-2 font-mono text-xs">
          <p className="text-dark-400"># Checksum covers the multipath syntax:</p>
          <p className="text-amber-400">wpkh([fp/84h/0h/0h]xpub.../&lt;0;1&gt;/*)#<span className="text-emerald-400">abcd1234</span></p>

          <p className="text-dark-400 mt-3"># NOT computed from expanded forms:</p>
          <p className="text-dark-500">wpkh([fp/84h/0h/0h]xpub.../0/*)#different1</p>
          <p className="text-dark-500">wpkh([fp/84h/0h/0h]xpub.../1/*)#different2</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Complete Wallet Descriptor</h3>

      <Example title="Full BIP-84 Wallet in One Line">
        <div className="space-y-2 font-mono text-xs break-all">
          <p className="text-dark-400"># Complete native SegWit wallet backup:</p>
          <p className="text-amber-400">
            wpkh([d34db33f/84h/0h/0h]xpub6ERApfZwUNrhLCkDtcHTcxvPn4SEKBsmMKrVDCDZxsgnipnb8V5bwPaFZ8bpRVuXuKNhT3r3v2aK6XBqNEYj3RMzCFZHbP1bCMKKMuhCmTz/&lt;0;1&gt;/*)#9d0s498j
          </p>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          One string captures everything: key origin, xpub, both address chains, and checksum
        </p>
      </Example>

      <Callout type="success" title="Simplified Backups">
        <p>
          BIP-389 is a quality-of-life improvement that makes descriptor backups more
          practical. A single line can now fully describe a wallet's address derivation,
          reducing the chance of incomplete backups that would miss change addresses.
        </p>
      </Callout>
    </LessonLayout>
  );
}
