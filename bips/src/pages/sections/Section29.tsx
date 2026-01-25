import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Derivation Scheme for P2WPKH-nested-in-P2SH</h2>

      <p className="mb-4">
        BIP-49 defines the derivation path for "wrapped" SegWit addresses—P2WPKH scripts
        nested inside P2SH. These addresses start with "3" and were the first widely-adopted
        SegWit format, offering backward compatibility with older wallets.
      </p>

      <Callout type="info" title="Transitional Format">
        <p>
          BIP-49 addresses (3...) bridge old and new: they use SegWit internally for lower fees,
          but wrap it in P2SH so legacy wallets can send to them. This enabled SegWit adoption
          before native bech32 addresses became universal.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Nested SegWit?</h3>

      <p className="mb-4">
        When SegWit activated in 2017, many wallets couldn't send to native bech32 addresses:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">The Problem</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Native SegWit uses bech32 encoding</li>
            <li>Many exchanges/wallets only supported base58</li>
            <li>Users couldn't receive from non-upgraded services</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">BIP-49 Solution</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Wraps SegWit script in P2SH</li>
            <li>Uses familiar "3..." address format</li>
            <li>Any wallet can send to it</li>
            <li>Still gets SegWit fee discount</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Derivation Path</h3>

      <Definition title="BIP-49 Path">
        <div className="font-mono text-lg text-amber-400 mb-4">
          m / 49' / coin_type' / account' / change / address_index
        </div>
        <p className="text-dark-300">
          Identical structure to BIP-44, but with purpose 49' to indicate P2SH-wrapped
          P2WPKH addresses.
        </p>
      </Definition>

      <Example title="BIP-49 vs BIP-44 Paths">
        <div className="space-y-3 font-mono text-sm">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-44 (legacy P2PKH → 1...)</p>
            <p className="text-dark-300">m/44'/0'/0'/0/0</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-1"># BIP-49 (nested SegWit → 3...)</p>
            <p className="text-amber-400">m/49'/0'/0'/0/0</p>
          </div>
        </div>
        <p className="text-dark-500 text-sm mt-2">
          Same seed generates different addresses based on purpose path
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Script Structure</h3>

      <p className="mb-4">
        BIP-49 addresses use a specific nested script construction:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Inner witness script (P2WPKH)</p>
        <p className="text-emerald-400 mb-3">OP_0 &lt;20-byte-key-hash&gt;</p>

        <p className="text-dark-400 mb-2"># Outer P2SH scriptPubKey</p>
        <p className="text-amber-400">OP_HASH160 &lt;20-byte-script-hash&gt; OP_EQUAL</p>

        <p className="text-xs text-dark-500 mt-3">
          The script hash is: HASH160(OP_0 || HASH160(pubkey))
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Derivation Steps</h3>

      <p className="mb-4">
        To derive a BIP-49 address from a key:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Derive the private key at path m/49'/0'/account'/change/index</li>
          <li>Compute the compressed public key (33 bytes)</li>
          <li>Create the witness program: <span className="font-mono text-amber-400">0x0014</span> + HASH160(pubkey)</li>
          <li>Compute HASH160 of the witness program (redeemScript)</li>
          <li>Encode as Base58Check with version byte 0x05 (mainnet)</li>
        </ol>
      </div>

      <Example title="Complete Address Derivation">
        <div className="space-y-2 font-mono text-xs break-all">
          <p className="text-dark-400"># Public key (compressed)</p>
          <p className="text-dark-300">03a1af804ac108a8a51782198c2d034b28bf90c8803f5a53f76276fa69a4eae77f</p>

          <p className="text-dark-400 mt-2"># Key hash (HASH160 of pubkey)</p>
          <p className="text-dark-300">38971f73930f6c141d977ac4fd4a727c854935b3</p>

          <p className="text-dark-400 mt-2"># Witness program (redeemScript)</p>
          <p className="text-emerald-400">001438971f73930f6c141d977ac4fd4a727c854935b3</p>

          <p className="text-dark-400 mt-2"># Script hash (HASH160 of redeemScript)</p>
          <p className="text-dark-300">89ab5cb7a91c8a3f8d2c8e5e7f0c3d1a4b2c6e8f</p>

          <p className="text-dark-400 mt-2"># Final address (Base58Check with 0x05)</p>
          <p className="text-amber-400">3Dwz1GEhh7A4grdJkLPT4sdEb5tRPcMVNM</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Spending from BIP-49</h3>

      <p className="mb-4">
        To spend from a P2SH-P2WPKH output, you provide:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># ScriptSig (reveals the redeemScript)</p>
        <p className="text-amber-400 mb-3">&lt;redeemScript: 0x0014{'{'}keyhash{'}'}&gt;</p>

        <p className="text-dark-400 mb-2"># Witness (signature and pubkey)</p>
        <p className="text-emerald-400">&lt;signature&gt; &lt;pubkey&gt;</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fee Comparison</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Format</th>
              <th className="text-left py-3 text-dark-300">Address</th>
              <th className="text-left py-3 text-dark-300">Spending vBytes</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Legacy P2PKH</td>
              <td className="font-mono text-xs">1...</td>
              <td>~148 vB</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">Nested SegWit (BIP-49)</td>
              <td className="font-mono text-xs">3...</td>
              <td className="text-amber-400">~91 vB</td>
            </tr>
            <tr>
              <td className="py-3 text-emerald-400">Native SegWit (BIP-84)</td>
              <td className="font-mono text-xs">bc1q...</td>
              <td className="text-emerald-400">~68 vB</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Migration Encouraged">
        <p>
          While BIP-49 addresses still work, they're less efficient than native SegWit.
          The scriptSig revealing the redeemScript adds overhead that native bech32 addresses
          avoid. Most wallets now default to BIP-84 (native SegWit) or BIP-86 (Taproot).
        </p>
      </Callout>

      <Callout type="success" title="Historical Importance">
        <p>
          BIP-49 was crucial for SegWit adoption. By providing a backward-compatible address
          format, it allowed users to benefit from SegWit fee savings even when receiving from
          legacy services. Today it serves as a stepping stone in wallet migration paths.
        </p>
      </Callout>
    </LessonLayout>
  );
}
