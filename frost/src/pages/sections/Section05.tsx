import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Schnorr Signature - Step by Step</h2>

      <p>
        The Schnorr signature is elegant in its simplicity. It proves knowledge of a secret
        <InlineMath>{`s`}</InlineMath> corresponding to public key <InlineMath>{`Y = [s]G`}</InlineMath>
        without revealing <InlineMath>{`s`}</InlineMath>.
      </p>

      <h3>Components</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Private</h4>
          <ul className="space-y-1 text-sm">
            <li>Secret key: <InlineMath>{`s \\in \\mathbb{Z}_q`}</InlineMath></li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Public</h4>
          <ul className="space-y-1 text-sm">
            <li>Public key: <InlineMath>{`Y = [s]G \\in G`}</InlineMath></li>
            <li>Message: <InlineMath>{`m`}</InlineMath> (arbitrary bytes)</li>
            <li>Hash: <InlineMath>{`H: \\{0,1\\}^* \\to \\mathbb{Z}_q`}</InlineMath></li>
          </ul>
        </div>
      </div>

      <h3>Signing Algorithm</h3>

      <Definition title="Schnorr Signing">
        <p>To sign message <InlineMath>{`m`}</InlineMath>:</p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>
            <strong>Sample random nonce:</strong>
            <MathBlock>{`k \\xleftarrow{\\$} \\mathbb{Z}_q`}</MathBlock>
          </li>
          <li>
            <strong>Compute commitment:</strong>
            <MathBlock>{`R = [k]G`}</MathBlock>
          </li>
          <li>
            <strong>Compute challenge:</strong>
            <MathBlock>{`c = H(R \\| Y \\| m)`}</MathBlock>
          </li>
          <li>
            <strong>Compute response:</strong>
            <MathBlock>{`z = k + s \\cdot c \\pmod{q}`}</MathBlock>
          </li>
          <li>
            <strong>Output signature:</strong>
            <MathBlock>{`\\sigma = (R, z)`}</MathBlock>
          </li>
        </ol>
      </Definition>

      <Callout type="warning">
        <strong>Critical:</strong> The nonce <InlineMath>{`k`}</InlineMath> must be truly random
        and must <em>never</em> be reused. Reusing a nonce allows attackers to extract your
        private key.
      </Callout>

      <h3>Verification Algorithm</h3>

      <Definition title="Schnorr Verification">
        <p>
          To verify signature <InlineMath>{`\\sigma = (R, z)`}</InlineMath> on message
          <InlineMath>{`m`}</InlineMath> with public key <InlineMath>{`Y`}</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>
            <strong>Parse signature:</strong> Extract <InlineMath>{`R`}</InlineMath> and <InlineMath>{`z`}</InlineMath>
          </li>
          <li>
            <strong>Compute challenge:</strong>
            <MathBlock>{`c = H(R \\| Y \\| m)`}</MathBlock>
          </li>
          <li>
            <strong>Compute left side:</strong>
            <MathBlock>{`L = [z]G`}</MathBlock>
          </li>
          <li>
            <strong>Compute right side:</strong>
            <MathBlock>{`R' = R + [c]Y`}</MathBlock>
          </li>
          <li>
            <strong>Accept if and only if:</strong>
            <MathBlock>{`L = R'`}</MathBlock>
          </li>
        </ol>
      </Definition>

      <Example title="Concrete Signing Example">
        <p>
          Let's trace through with small numbers (not cryptographically secure, just for illustration):
        </p>
        <div className="mt-4 space-y-2 font-mono text-sm">
          <p>Secret key: <InlineMath>{`s = 7`}</InlineMath></p>
          <p>Random nonce: <InlineMath>{`k = 13`}</InlineMath></p>
          <p>Message: <InlineMath>{`m = \\text{"Send 1 BTC"}`}</InlineMath></p>
          <p>Commitment: <InlineMath>{`R = [13]G`}</InlineMath></p>
          <p>Challenge (from hash): <InlineMath>{`c = 5`}</InlineMath></p>
          <p>Response: <InlineMath>{`z = 13 + 7 \\cdot 5 = 48`}</InlineMath></p>
          <p>Signature: <InlineMath>{`\\sigma = (R, 48)`}</InlineMath></p>
        </div>
      </Example>

      <h3>The Verification Equation</h3>

      <p>
        The core verification check is:
      </p>

      <MathBlock>
        {`[z]G \\stackrel{?}{=} R + [c]Y`}
      </MathBlock>

      <p>
        This single equation encapsulates the entire signature verification. Understanding
        <em>why</em> it works is the key to understanding FROST.
      </p>

      <Callout type="info">
        <strong>Signature Structure:</strong> A Schnorr signature consists of:
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`R`}</InlineMath> — A curve point (the "commitment")</li>
          <li><InlineMath>{`z`}</InlineMath> — A scalar (the "response")</li>
        </ul>
        Together they are ~64 bytes, the same size as a single ECDSA signature.
      </Callout>
    </LessonLayout>
  );
}
