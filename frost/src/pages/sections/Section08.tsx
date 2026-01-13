import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>The Nonce Catastrophe</h2>

      <p>
        There is one critical rule in Schnorr signatures that, if violated, completely
        destroys security:
      </p>

      <Callout type="warning">
        <strong>CRITICAL RULE:</strong> NEVER reuse a nonce <InlineMath>{`k`}</InlineMath>.
        A single nonce reuse allows an attacker to extract your private key.
      </Callout>

      <h3>The Attack</h3>

      <p>
        Suppose you sign two different messages with the same nonce <InlineMath>{`k`}</InlineMath>:
      </p>

      <div className="p-4 rounded-xl bg-red-900/20 border border-red-700/50 my-6">
        <h4 className="font-semibold text-red-400 mb-3">Two Signatures, Same Nonce</h4>
        <div className="space-y-2 font-mono text-sm">
          <p>Signature 1 for message <InlineMath>{`m_1`}</InlineMath>:</p>
          <MathBlock>{`\\sigma_1 = (R, z_1) \\text{ where } z_1 = k + s \\cdot c_1`}</MathBlock>
          <p className="mt-3">Signature 2 for message <InlineMath>{`m_2`}</InlineMath>:</p>
          <MathBlock>{`\\sigma_2 = (R, z_2) \\text{ where } z_2 = k + s \\cdot c_2`}</MathBlock>
          <p className="mt-3 text-red-300">
            Note: Same <InlineMath>{`R`}</InlineMath> means same <InlineMath>{`k`}</InlineMath>!
          </p>
        </div>
      </div>

      <Theorem title="Nonce Reuse Attack">
        <p>
          Given two signatures with the same nonce but different messages, an attacker
          can extract the private key <InlineMath>{`s`}</InlineMath>.
        </p>
      </Theorem>

      <h3>The Extraction</h3>

      <p>The attacker computes:</p>

      <MathBlock>
        {`z_1 - z_2 = (k + s \\cdot c_1) - (k + s \\cdot c_2)`}
      </MathBlock>

      <MathBlock>
        {`z_1 - z_2 = s \\cdot (c_1 - c_2)`}
      </MathBlock>

      <MathBlock>
        {`s = \\frac{z_1 - z_2}{c_1 - c_2}`}
      </MathBlock>

      <Callout type="important">
        <strong>Game Over:</strong> With <InlineMath>{`s`}</InlineMath> extracted, the attacker
        can forge any signature and steal all funds controlled by that key.
      </Callout>

      <Example title="Concrete Numbers">
        <p>Let's see this with actual numbers:</p>
        <div className="mt-3 space-y-2 font-mono text-sm">
          <p>Secret: <InlineMath>{`s = 7`}</InlineMath></p>
          <p>Nonce: <InlineMath>{`k = 13`}</InlineMath></p>
          <p>Challenge 1: <InlineMath>{`c_1 = 5`}</InlineMath></p>
          <p>Challenge 2: <InlineMath>{`c_2 = 3`}</InlineMath></p>
          <p className="mt-2">Response 1: <InlineMath>{`z_1 = 13 + 7 \\cdot 5 = 48`}</InlineMath></p>
          <p>Response 2: <InlineMath>{`z_2 = 13 + 7 \\cdot 3 = 34`}</InlineMath></p>
          <p className="mt-2 text-red-400">
            Attacker computes: <InlineMath>{`s = (48 - 34)/(5 - 3) = 14/2 = 7`}</InlineMath>
          </p>
        </div>
      </Example>

      <h3>Real-World Incidents</h3>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">PlayStation 3 Hack (2010)</h4>
          <p className="text-sm">
            Sony used a constant nonce for all ECDSA signatures on PS3. Hackers extracted
            Sony's private key and could sign any code to run on PS3.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-amber-400 mb-2">Android Bitcoin Wallets (2013)</h4>
          <p className="text-sm">
            A bug in Android's random number generator caused nonce reuse. Multiple
            Bitcoin thefts resulted from the vulnerability.
          </p>
        </div>
      </div>

      <h3>Implications for FROST</h3>

      <p>In FROST, each participant must ensure their nonce contribution is never reused:</p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          Each participant generates <InlineMath>{`(d_i, e_i)`}</InlineMath> pairs in preprocessing
        </li>
        <li>
          Each pair is used <strong>exactly once</strong>
        </li>
        <li>
          After use, the nonces must be <strong>securely deleted</strong>
        </li>
        <li>
          State management ensures no reuse even across restarts
        </li>
      </ul>

      <Callout type="info">
        <strong>Defense in Depth:</strong> FROST uses two nonce components
        <InlineMath>{`d_i`}</InlineMath> and <InlineMath>{`e_i`}</InlineMath> combined with
        binding values. This provides extra protection, but the fundamental rule remains:
        each commitment pair must be used at most once.
      </Callout>

      <h3>Best Practices</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-emerald-900/20 border border-emerald-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Do</h4>
          <ul className="text-sm space-y-1">
            <li>Use cryptographic RNG for nonces</li>
            <li>Delete nonces immediately after use</li>
            <li>Track used nonces persistently</li>
            <li>Use deterministic nonces (RFC 6979)</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-red-900/20 border border-red-700/50">
          <h4 className="font-semibold text-red-400 mb-2">Don't</h4>
          <ul className="text-sm space-y-1">
            <li>Use predictable RNG</li>
            <li>Reuse nonces across messages</li>
            <li>Store nonces without encryption</li>
            <li>Ignore nonce management in threshold schemes</li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
