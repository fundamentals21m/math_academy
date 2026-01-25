import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-352: Silent Payments</h2>

      <p className="mb-4">
        BIP-352 introduces Silent Payments, a protocol for receiving Bitcoin to a static
        address without creating a visible link between payments. Each payment creates a
        unique on-chain address derived from the sender's and receiver's keys.
      </p>

      <Callout type="info" title="Solving Address Reuse">
        <p>
          Address reuse harms privacy for both sender and receiver. Silent Payments let
          receivers share one address publicly while each payment goes to a unique,
          unlinkable address.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Regular Addresses</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Reuse links all payments together</li>
            <li>Fresh addresses require interaction</li>
            <li>Donation addresses reveal income</li>
            <li>Static addresses = privacy leak</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Silent Payments</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Each payment to unique address</li>
            <li>No interaction needed</li>
            <li>Safe for public posting</li>
            <li>Static address, dynamic outputs</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How It Works</h3>

      <Definition title="Silent Payment Address">
        <p>
          A Silent Payment address encodes two public keys: a scan key (B_scan) for
          detecting payments and a spend key (B_spend) for spending them.
        </p>
        <div className="font-mono text-sm text-amber-400 mt-3">
          sp1q...{'{'}B_scan || B_spend{'}'}
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sender's Process</h3>

      <Example title="Creating a Silent Payment">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Compute shared secret from inputs:</p>
            <p className="text-dark-300">input_hash = hash(outpoint₁ || outpoint₂ || ...)</p>
            <p className="text-dark-300 mt-1">A = sum of input public keys</p>
            <p className="text-dark-300 mt-1">a = sum of input private keys</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. ECDH with receiver's scan key:</p>
            <p className="text-dark-300">shared_secret = input_hash · a · B_scan</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Derive output key:</p>
            <p className="text-dark-300">t = hash(shared_secret || counter)</p>
            <p className="text-amber-400 mt-1">P_output = B_spend + t·G</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Create Taproot output to P_output</p>
            <p className="text-dark-500">Only receiver can compute the private key</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Receiver's Process</h3>

      <p className="mb-4">
        The receiver scans the blockchain for potential payments:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># For each transaction:</p>
        <p className="text-dark-300">1. Extract sum of input public keys (A)</p>
        <p className="text-dark-300">2. Compute: shared_secret = input_hash · b_scan · A</p>
        <p className="text-dark-300">3. Derive expected output keys</p>
        <p className="text-dark-300">4. Check if any output matches</p>
        <p className="text-dark-400 mt-3"># If match found:</p>
        <p className="text-amber-400">private_key = b_spend + t</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Format</h3>

      <p className="mb-4">
        Silent Payment addresses use Bech32m encoding with a new HRP:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Network</th>
              <th className="text-left py-3 text-dark-300">Prefix</th>
              <th className="text-left py-3 text-dark-300">Example</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Mainnet</td>
              <td className="font-mono text-amber-400">sp1</td>
              <td className="font-mono text-xs">sp1qq...</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Testnet</td>
              <td className="font-mono text-amber-400">tsp1</td>
              <td className="font-mono text-xs">tsp1qq...</td>
            </tr>
            <tr>
              <td className="py-3">Signet</td>
              <td className="font-mono text-amber-400">sp1</td>
              <td className="font-mono text-xs">sp1qq...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Labels</h3>

      <p className="mb-4">
        Silent Payments support labels for organizing incoming payments:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Labeled addresses:</strong> Add a tweak for different "sub-addresses"
          </li>
          <li>
            <strong>Change detection:</strong> Wallets can label self-sends
          </li>
          <li>
            <strong>Organization:</strong> Different labels for different purposes
          </li>
          <li>
            <strong>Scanning cost:</strong> Labels add minimal overhead
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Scanning Trade-offs</h3>

      <Callout type="warning" title="Scanning Requirements">
        <p>
          Silent Payments require scanning the blockchain differently:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Must examine eligible inputs of every transaction</li>
          <li>Cannot use simple address-based filtering</li>
          <li>Light clients need new infrastructure</li>
          <li>Full node with txindex ideal for receiving</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Input Requirements</h3>

      <p className="mb-4">
        Not all inputs can contribute to Silent Payments:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Eligible Inputs</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>P2PKH</li>
            <li>P2WPKH</li>
            <li>P2SH-P2WPKH</li>
            <li>P2TR (key path)</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Ineligible Inputs</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Bare multisig</li>
            <li>P2SH (non-standard)</li>
            <li>P2WSH</li>
            <li>P2TR script path</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Public Donations</p>
          <p className="text-sm text-dark-300">
            Post one address; each donor's payment is unlinkable to others.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Business Payments</p>
          <p className="text-sm text-dark-300">
            Receive payments without revealing transaction history to observers.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Cold Storage</p>
          <p className="text-sm text-dark-300">
            Generate receiving address without exposing spend key. Scan with
            watch-only scan key.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison to Alternatives</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Protocol</th>
              <th className="text-left py-3 text-dark-300">Interaction</th>
              <th className="text-left py-3 text-dark-300">On-chain</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">Silent Payments</td>
              <td>None required</td>
              <td>Standard Taproot</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">BIP-47 Payment Codes</td>
              <td>Notification TX</td>
              <td>Extra output</td>
            </tr>
            <tr>
              <td className="py-3">Fresh addresses</td>
              <td>Each payment</td>
              <td>Standard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Privacy by Default">
        <p>
          Silent Payments bring stealth address functionality to Bitcoin with minimal
          overhead for senders. While receivers pay a scanning cost, the privacy benefits
          make it ideal for public-facing addresses that receive many payments.
        </p>
      </Callout>
    </LessonLayout>
  );
}
