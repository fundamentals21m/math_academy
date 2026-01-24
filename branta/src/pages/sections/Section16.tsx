import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { ZeroKnowledgeDemo } from '@/components/visualizations';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Zero Knowledge Verification</h2>

      <p className="mb-4">
        In 2025, Branta introduced zero-knowledge verification, a privacy-preserving approach
        that allows address verification without exposing the plaintext address to Branta's
        servers. This represents a significant advancement in balancing security with privacy.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Privacy Problem</h3>

      <p className="mb-4">
        Traditional verification has a privacy tradeoff:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>To verify an address, you must send it to Branta</li>
        <li>This reveals what addresses you're interacting with</li>
        <li>Over time, this builds a picture of your transaction patterns</li>
        <li>Privacy-conscious users may hesitate to use verification</li>
      </ul>

      <Definition title="Zero-Knowledge Proof (ZKP)">
        A cryptographic method that allows one party (the prover) to prove to another party
        (the verifier) that a statement is true, without revealing any information beyond
        the validity of the statement itself.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Zero-Knowledge Verification Works</h3>

      <p className="mb-4">
        Zero-knowledge verification allows you to ask "Is this address registered?" without
        telling Branta what address you're asking about:
      </p>

      <Example title="Traditional vs. Zero-Knowledge">
        <div className="space-y-4">
          <div className="bg-dark-800 p-4 rounded">
            <p className="text-dark-400 text-sm mb-2">Traditional Verification</p>
            <p className="font-mono text-sm">
              You: "Is bc1qmerchant... registered?"<br />
              Branta: "Yes, it belongs to MerchantCo"
            </p>
            <p className="text-red-400 text-sm mt-2">
              Branta learns which address you're checking
            </p>
          </div>
          <div className="bg-dark-800 p-4 rounded">
            <p className="text-dark-400 text-sm mb-2">Zero-Knowledge Verification</p>
            <p className="font-mono text-sm">
              You: "[cryptographic commitment]"<br />
              Branta: "[cryptographic proof of registration status]"
            </p>
            <p className="text-green-400 text-sm mt-2">
              Branta cannot determine which address was checked
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cryptographic Foundations</h3>

      <p className="mb-4">
        Zero-knowledge verification uses several cryptographic primitives:
      </p>

      <Definition title="Commitment Scheme">
        A cryptographic method that allows you to "commit" to a value without revealing it.
        Later, you can "open" the commitment to prove what value you committed to.
      </Definition>

      <Definition title="Hash-Based Commitment">
        A simple commitment scheme where you hash the address with a random nonce. The hash
        reveals nothing about the address, but you can prove the commitment later by revealing
        both values.
      </Definition>

      <Definition title="Set Membership Proof">
        A proof that an element belongs to a set without revealing which element. Used to
        prove an address is in the set of registered addresses without identifying it.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Overview</h3>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Client computes commitment</strong> - Hash(address || nonce)</li>
        <li><strong>Client sends commitment</strong> - Only the hash is transmitted</li>
        <li><strong>Branta checks set membership</strong> - Without learning the address</li>
        <li><strong>Branta returns proof</strong> - Cryptographic proof of membership/non-membership</li>
        <li><strong>Client verifies proof</strong> - Confirms the answer is correct</li>
      </ol>

      <Example title="Simplified Protocol">
        <pre className="font-mono text-sm bg-dark-800 p-4 rounded overflow-x-auto">
{`// Client side
const address = 'bc1qmerchant...';
const nonce = crypto.randomBytes(32);
const commitment = hash(address + nonce);

// Send only the commitment to Branta
const proof = await branta.zkVerify(commitment);

// Verify the proof locally
const isRegistered = verifyProof(proof, commitment);`}
        </pre>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Guarantees</h3>

      <Callout type="success" title="What Branta Learns">
        With zero-knowledge verification, Branta learns only that someone made a verification
        request—not which address was verified, who made the request, or when the address
        was registered.
      </Callout>

      <p className="mb-4">
        The privacy guarantees include:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Address privacy</strong> - The address being verified is never revealed</li>
        <li><strong>Query unlinkability</strong> - Multiple queries can't be linked together</li>
        <li><strong>Registration privacy</strong> - Which registrations are being checked stays private</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Tradeoffs</h3>

      <p className="mb-4">
        Zero-knowledge verification has some tradeoffs compared to traditional verification:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 text-dark-200">Aspect</th>
              <th className="text-left py-2 text-dark-200">Traditional</th>
              <th className="text-left py-2 text-dark-200">Zero-Knowledge</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Privacy</td>
              <td className="py-2">Lower (address revealed)</td>
              <td className="py-2 text-green-400">Higher (address hidden)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Speed</td>
              <td className="py-2 text-green-400">Faster</td>
              <td className="py-2">Slower (proof computation)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Complexity</td>
              <td className="py-2 text-green-400">Simpler</td>
              <td className="py-2">More complex</td>
            </tr>
            <tr>
              <td className="py-2">Merchant info</td>
              <td className="py-2 text-green-400">Returns merchant name</td>
              <td className="py-2">Only yes/no answer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="Use Case Dependent">
        Choose the verification method based on your needs. For maximum privacy, use
        zero-knowledge. When you need to display which merchant owns an address, use
        traditional verification.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Future Developments</h3>

      <p className="mb-4">
        Zero-knowledge technology in Bitcoin is evolving rapidly:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>STARKs</strong> - Scalable, transparent proofs without trusted setup</li>
        <li><strong>Privacy pools</strong> - Proving funds are "clean" without revealing history</li>
        <li><strong>Proof of reserves</strong> - Exchanges proving solvency without revealing addresses</li>
        <li><strong>Selective disclosure</strong> - Reveal only what's necessary for compliance</li>
      </ul>

      <p className="mb-4">
        Branta's zero-knowledge framework positions the platform to adopt these advances as
        they mature, continually improving the privacy-security balance for users.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary</h3>

      <p className="mb-4">
        Zero-knowledge verification represents a significant step forward in Bitcoin
        transaction security. It allows users to benefit from pre-payment verification
        without sacrificing their financial privacy. As the technology matures, expect
        to see broader adoption of privacy-preserving verification across the ecosystem.
      </p>

      <Callout type="success" title="The Best of Both Worlds">
        With zero-knowledge verification, you no longer have to choose between security
        and privacy. You can verify payment addresses without revealing your transaction
        patterns to anyone—including Branta.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Zero-Knowledge Demo</h3>

      <p className="mb-4">
        Explore how commitment schemes work and see the privacy difference between
        traditional and zero-knowledge verification:
      </p>

      <ZeroKnowledgeDemo />
    </LessonLayout>
  );
}
