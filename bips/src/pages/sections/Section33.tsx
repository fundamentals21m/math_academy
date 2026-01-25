import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Bitcoin Secure Multisig Setup (BSMS)</h2>

      <p className="mb-4">
        BIP-129 defines a standard protocol for setting up multisig wallets across different
        devices and software. BSMS solves the coordination problem: how do multiple hardware
        wallets and software wallets agree on addresses without compromising security?
      </p>

      <Callout type="info" title="Interoperability Standard">
        <p>
          Before BIP-129, setting up a multisig wallet across different vendors (Coldcard,
          Ledger, Trezor, etc.) was error-prone and vendor-specific. BSMS provides a
          universal protocol for secure coordination.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Multisig Setup Problem</h3>

      <p className="mb-4">
        Creating a secure multisig wallet requires careful coordination:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Challenges:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Each signer must share their extended public key</li>
          <li>All signers must agree on the exact script template</li>
          <li>Keys must be combined in the same order everywhere</li>
          <li>Each device must verify it's part of the correct quorum</li>
          <li>MITM attacks during setup could redirect funds</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BSMS Protocol Overview</h3>

      <Definition title="BSMS Roles">
        <p>BIP-129 defines two participant roles:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Coordinator:</strong> Initiates setup, collects keys, distributes final config</li>
          <li><strong>Signer:</strong> Provides extended public key, verifies and stores final config</li>
        </ul>
        <p className="text-dark-500 text-sm mt-2">
          The coordinator may also be a signer, but the roles are logically separate.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Rounds</h3>

      <p className="mb-4">
        BSMS uses a two-round protocol:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-5">
          <p className="text-amber-400 font-bold mb-2">Round 1: Key Collection</p>
          <ol className="list-decimal list-inside space-y-1 text-dark-300">
            <li>Coordinator creates setup token with parameters</li>
            <li>Each signer generates SIGNER token with their xpub</li>
            <li>Signers transmit tokens to coordinator</li>
            <li>Coordinator verifies all tokens received</li>
          </ol>
        </div>

        <div className="bg-dark-800 rounded-lg p-5">
          <p className="text-emerald-400 font-bold mb-2">Round 2: Configuration Distribution</p>
          <ol className="list-decimal list-inside space-y-1 text-dark-300">
            <li>Coordinator builds final descriptor from all xpubs</li>
            <li>Coordinator creates COORDINATOR token with descriptor</li>
            <li>Each signer imports and verifies the token</li>
            <li>Signers confirm their key is included correctly</li>
          </ol>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Token Format</h3>

      <Example title="BSMS Token Structure">
        <div className="space-y-3 font-mono text-xs">
          <p className="text-dark-400"># SIGNER token (Round 1)</p>
          <div className="bg-dark-800 rounded-lg p-4 break-all">
            <p className="text-amber-400">BSMS 1.0</p>
            <p className="text-dark-300">00</p>
            <p className="text-dark-300">[xpub661MyMwAqRbcF...]</p>
            <p className="text-dark-300">/48h/0h/0h/2h</p>
            <p className="text-emerald-400">My Coldcard</p>
          </div>

          <p className="text-dark-400 mt-4"># COORDINATOR token (Round 2)</p>
          <div className="bg-dark-800 rounded-lg p-4 break-all">
            <p className="text-amber-400">BSMS 1.0</p>
            <p className="text-dark-300">00</p>
            <p className="text-dark-300">wsh(sortedmulti(2,[fp1/48h/0h/0h/2h]xpub1,...,[fp2/48h/0h/0h/2h]xpub2,...))</p>
            <p className="text-dark-300">/0/*,/1/*</p>
            <p className="text-emerald-400">Family Vault 2-of-3</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Features</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Key Origin Info</p>
          <p className="text-sm text-dark-300">
            Each xpub includes its derivation path and parent fingerprint, enabling
            verification of the complete key lineage.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Descriptor Commitment</p>
          <p className="text-sm text-dark-300">
            The final descriptor is signed/verified by each device, preventing
            coordinator manipulation.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Human Verification</p>
          <p className="text-sm text-dark-300">
            Descriptive labels allow users to verify they're joining the correct
            multisig on each device.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Encryption Option</p>
          <p className="text-sm text-dark-300">
            Tokens can be encrypted with a shared password for transmission over
            insecure channels.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Supported Script Types</h3>

      <p className="mb-4">
        BSMS supports modern multisig formats:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Script</th>
              <th className="text-left py-3 text-dark-300">Address</th>
              <th className="text-left py-3 text-dark-300">Path</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">P2SH</td>
              <td className="font-mono text-xs">3...</td>
              <td className="font-mono text-xs">m/45'/0'/...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">P2SH-P2WSH</td>
              <td className="font-mono text-xs">3...</td>
              <td className="font-mono text-xs">m/48'/0'/0'/1'</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">P2WSH (native)</td>
              <td className="font-mono text-xs">bc1q...</td>
              <td className="font-mono text-xs">m/48'/0'/0'/2'</td>
            </tr>
            <tr>
              <td className="py-3 text-emerald-400">P2TR (Taproot)</td>
              <td className="font-mono text-xs">bc1p...</td>
              <td className="font-mono text-xs">TBD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Workflow</h3>

      <Example title="2-of-3 Multisig Setup">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            <strong>Coordinator creates setup:</strong><br/>
            <span className="text-dark-500">Specifies 2-of-3, P2WSH, and descriptive name</span>
          </li>
          <li>
            <strong>Each signer exports their token:</strong><br/>
            <span className="text-dark-500">Via QR code, SD card, or NFC</span>
          </li>
          <li>
            <strong>Coordinator combines tokens:</strong><br/>
            <span className="text-dark-500">Creates final sortedmulti descriptor</span>
          </li>
          <li>
            <strong>Signers import final config:</strong><br/>
            <span className="text-dark-500">Each device verifies its key is present</span>
          </li>
          <li>
            <strong>Test receive and sign:</strong><br/>
            <span className="text-dark-500">Verify all devices show same addresses</span>
          </li>
        </ol>
      </Example>

      <Callout type="warning" title="Verify on Device">
        <p>
          Always verify the multisig configuration on each hardware wallet's screen.
          The coordinator could be compromised—only trust what each signing device displays.
        </p>
      </Callout>

      <Callout type="success" title="Industry Adoption">
        <p>
          BSMS is supported by major hardware wallets including Coldcard, Passport,
          and Keystone, as well as coordinator software like Sparrow and Specter.
          This enables true vendor-agnostic multisig security.
        </p>
      </Callout>
    </LessonLayout>
  );
}
