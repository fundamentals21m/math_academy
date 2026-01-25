import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Output Script Descriptors General Operation</h2>

      <p className="mb-4">
        BIP-380 introduces <strong>output script descriptors</strong>—a language for precisely
        describing which scripts and addresses a wallet can produce. Descriptors solve the
        "what can this key spend?" problem by encoding complete spending policy information.
      </p>

      <Callout type="info" title="Beyond Derivation Paths">
        <p>
          Traditional wallet backups (seed + derivation path) can't describe complex scripts
          like multisig or timelocks. Descriptors capture the full picture: keys, scripts,
          derivation paths, and how they combine.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Backup Problem</h3>

      <p className="mb-4">
        Consider what you need to recover funds:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Traditional Backup</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Seed phrase ✓</li>
            <li>Derivation path ✓</li>
            <li>Script type? (P2PKH, P2WPKH, ...)</li>
            <li>Multisig config? (M, N, other keys)</li>
            <li>Timelock conditions?</li>
          </ul>
          <p className="text-rose-400 text-xs mt-2">Missing pieces = lost funds</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Descriptor Backup</p>
          <p className="text-sm text-dark-300">
            One string encodes everything needed to reconstruct all addresses and
            spending conditions.
          </p>
          <p className="text-emerald-400 text-xs mt-2">Complete and unambiguous</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Descriptor Syntax</h3>

      <Definition title="Basic Structure">
        <p>A descriptor has this general form:</p>
        <div className="font-mono text-lg text-amber-400 mt-3">
          SCRIPT(KEY)#checksum
        </div>
        <ul className="list-disc list-inside mt-3 space-y-1 text-dark-300">
          <li><strong>SCRIPT:</strong> The output type (pkh, wpkh, sh, wsh, tr, ...)</li>
          <li><strong>KEY:</strong> Public key, xpub with derivation, or nested descriptor</li>
          <li><strong>#checksum:</strong> 8-character error-detection code</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Types</h3>

      <Example title="Common Descriptor Patterns">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># P2PKH (legacy)</p>
            <p className="text-amber-400">pkh(xpub.../44h/0h/0h/0/*)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># P2WPKH (native SegWit)</p>
            <p className="text-amber-400">wpkh(xpub.../84h/0h/0h/0/*)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># P2SH-P2WPKH (nested SegWit)</p>
            <p className="text-amber-400">sh(wpkh(xpub.../49h/0h/0h/0/*))</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># P2TR (Taproot)</p>
            <p className="text-amber-400">tr(xpub.../86h/0h/0h/0/*)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Expressions</h3>

      <p className="mb-4">
        Keys in descriptors can take several forms:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <div className="space-y-2">
          <p className="text-dark-400"># Literal public key</p>
          <p className="text-dark-300">wpkh(02c6047f...)</p>

          <p className="text-dark-400 mt-3"># Extended key with derivation</p>
          <p className="text-dark-300">wpkh(xpub.../0/*)</p>

          <p className="text-dark-400 mt-3"># With key origin (fingerprint + path)</p>
          <p className="text-amber-400">wpkh([d34db33f/84h/0h/0h]xpub.../0/*)</p>
        </div>
      </div>

      <Definition title="Key Origin Info">
        <p>
          The bracketed prefix provides crucial backup information:
        </p>
        <div className="font-mono text-sm mt-2">
          <span className="text-amber-400">[d34db33f/84h/0h/0h]</span>
        </div>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>d34db33f:</strong> Master key fingerprint (identifies the seed)</li>
          <li><strong>/84h/0h/0h:</strong> Derivation from master to this xpub</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wildcards and Ranges</h3>

      <p className="mb-4">
        Descriptors support patterns for generating multiple addresses:
      </p>

      <Example title="Derivation Patterns">
        <div className="space-y-3 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Single address</p>
            <p className="text-dark-300">wpkh(xpub.../0/0)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Wildcard (all indices)</p>
            <p className="text-amber-400">wpkh(xpub.../0/*)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># Range</p>
            <p className="text-dark-300">wpkh(xpub.../0/*) with range [0,1000]</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Checksums</h3>

      <p className="mb-4">
        Every descriptor has an 8-character checksum:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="font-mono text-amber-400 break-all">
          wpkh([d34db33f/84h/0h/0h]xpub6ERApfZwUNrhLCkDt...)#<span className="text-emerald-400">2qsndvp8</span>
        </p>
        <p className="text-dark-500 text-sm mt-3">
          The checksum detects transcription errors and verifies the descriptor wasn't
          corrupted during storage or transmission.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Wallet Uses</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Import/Export</p>
          <p className="text-sm text-dark-300">
            Move wallet configurations between software without losing information
            about script types or derivation paths.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Watch-Only Wallets</p>
          <p className="text-sm text-dark-300">
            Create a watch-only wallet from an xpub descriptor. The wallet knows
            exactly which scripts to monitor without private keys.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Backup Documentation</p>
          <p className="text-sm text-dark-300">
            Store the public descriptor alongside your seed backup. Even if wallet
            software disappears, funds are recoverable.
          </p>
        </div>
      </div>

      <Callout type="warning" title="Private vs Public">
        <p>
          Descriptors can contain either private keys (for signing) or public keys (for
          watch-only). Never share private descriptors! Use xpub versions for backups
          stored in less secure locations.
        </p>
      </Callout>

      <Callout type="success" title="Core Wallet Integration">
        <p>
          Bitcoin Core has fully adopted descriptors as its native wallet format. Commands
          like `importdescriptors` and `listdescriptors` make it easy to manage complex
          wallet configurations with precision.
        </p>
      </Callout>
    </LessonLayout>
  );
}
