import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { ECDSASigningFlow } from '@/components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">ECDSA Signatures</h2>

      <p className="mb-4">
        The Elliptic Curve Digital Signature Algorithm (ECDSA) is how Bitcoin proves ownership.
        A signature proves you know the private key without revealing it—the fundamental mechanism
        for spending Bitcoin.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Signature Problem</h3>

      <p className="mb-4">
        Alice wants to prove she owns the private key <InlineMath>d</InlineMath> corresponding
        to public key <InlineMath>Q</InlineMath>, without revealing <InlineMath>d</InlineMath>.
        The signature must be:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Authentic:</strong> Only someone with <InlineMath>d</InlineMath> can produce it</li>
        <li><strong>Unforgeable:</strong> Cannot be created without <InlineMath>d</InlineMath></li>
        <li><strong>Bound to message:</strong> Cannot be transferred to different messages</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">ECDSA Signing Algorithm</h3>

      <Definition title="ECDSA Signature Generation">
        <p><strong>Input:</strong> Message <InlineMath>m</InlineMath>, private key <InlineMath>d</InlineMath></p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm">
          <p>1: <InlineMath>z \leftarrow H(m)</InlineMath> (hash the message)</p>
          <p>2: <InlineMath>k \leftarrow \text{'{random}'} \in [1, n-1]</InlineMath> (nonce)</p>
          <p>3: <InlineMath>R = kG</InlineMath> (ephemeral point)</p>
          <p>4: <InlineMath>r = x_R \mod n</InlineMath> (x-coordinate of R)</p>
          <p>5: <InlineMath>s = k^{'{-1}'}(z + rd) \mod n</InlineMath></p>
          <p>6: Return <InlineMath>(r, s)</InlineMath></p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">ECDSA Verification Algorithm</h3>

      <Definition title="ECDSA Signature Verification">
        <p>
          <strong>Input:</strong> Message <InlineMath>m</InlineMath>, signature <InlineMath>(r, s)</InlineMath>,
          public key <InlineMath>Q</InlineMath>
        </p>
        <div className="bg-dark-800 rounded-lg p-4 mt-3 font-mono text-sm">
          <p>1: <InlineMath>z \leftarrow H(m)</InlineMath></p>
          <p>2: <InlineMath>w = s^{'{-1}'} \mod n</InlineMath></p>
          <p>3: <InlineMath>u_1 = zw \mod n</InlineMath></p>
          <p>4: <InlineMath>u_2 = rw \mod n</InlineMath></p>
          <p>5: <InlineMath>P = u_1 G + u_2 Q</InlineMath></p>
          <p>6: Accept if <InlineMath>x_P \equiv r \pmod n</InlineMath></p>
        </div>
      </Definition>

      <ECDSASigningFlow className="my-8" />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Verification Works</h3>

      <Example title="Mathematical Justification">
        <p>Starting from the signature equation:</p>
        <MathBlock>
          {`s = k^{-1}(z + rd) \\mod n`}
        </MathBlock>
        <p className="mt-2">Rearranging:</p>
        <MathBlock>
          {`k = s^{-1}(z + rd) = s^{-1}z + s^{-1}rd = wz + wrd = u_1 + u_2 d`}
        </MathBlock>
        <p className="mt-2">Therefore:</p>
        <MathBlock>
          {`R = kG = (u_1 + u_2 d)G = u_1 G + u_2 dG = u_1 G + u_2 Q = P`}
        </MathBlock>
        <p className="mt-2">
          So <InlineMath>P = R</InlineMath>, and <InlineMath>x_P = x_R = r</InlineMath> ✓
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        THE NONCE CATASTROPHE
      </h3>

      <Callout type="danger" title="Critical Security Warning">
        <p className="font-bold text-lg">
          Never reuse the nonce <InlineMath>k</InlineMath>!
        </p>
        <p className="mt-2">
          If the same <InlineMath>k</InlineMath> is used for two different messages, an attacker
          can extract the private key. This has caused real-world losses.
        </p>
      </Callout>

      <Example title="Nonce Reuse Attack">
        <p>Suppose Alice signs two messages with the same <InlineMath>k</InlineMath>:</p>
        <MathBlock>
          {`s_1 = k^{-1}(z_1 + rd) \\quad s_2 = k^{-1}(z_2 + rd)`}
        </MathBlock>
        <p className="mt-2">Subtracting:</p>
        <MathBlock>
          {`s_1 - s_2 = k^{-1}(z_1 - z_2)`}
        </MathBlock>
        <p className="mt-2">Solving for <InlineMath>k</InlineMath>:</p>
        <MathBlock>
          {`k = (z_1 - z_2)(s_1 - s_2)^{-1}`}
        </MathBlock>
        <p className="mt-2">Then the private key:</p>
        <MathBlock>
          {`d = r^{-1}(sk - z)`}
        </MathBlock>
        <p className="mt-3 text-rose-400">
          <strong>Game over.</strong> The attacker has the private key.
        </p>
      </Example>

      <h4 className="text-lg font-semibold text-dark-100 mt-6 mb-3">Real-World Disasters</h4>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>PlayStation 3 (2010):</strong> Sony used the same <InlineMath>k</InlineMath> for all
          game signatures. Hackers extracted the private key, enabling piracy.
        </li>
        <li>
          <strong>Android Bitcoin wallets (2013):</strong> Weak RNG caused nonce collisions.
          Attackers drained wallets.
        </li>
        <li>
          <strong>Blockchain.info (2014):</strong> A bug caused nonce reuse. Funds were stolen.
        </li>
      </ul>

      <Callout type="success" title="The Solution: RFC 6979">
        <p>
          RFC 6979 defines <strong>deterministic nonces</strong>:
        </p>
        <MathBlock>
          {`k = \\text{HMAC-SHA256}(d, z)`}
        </MathBlock>
        <p className="mt-2">
          The nonce is derived deterministically from the private key and message. Same inputs
          = same <InlineMath>k</InlineMath>. Different messages = different <InlineMath>k</InlineMath>.
          No randomness required, no reuse possible.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Malleability</h3>

      <p className="mb-4">
        Given a valid signature <InlineMath>(r, s)</InlineMath>, there's always another valid
        signature for the same message: <InlineMath>(r, n - s)</InlineMath>.
      </p>

      <Definition title="Malleability Problem">
        <p>Why does <InlineMath>(r, -s)</InlineMath> also verify?</p>
        <p className="mt-2">
          In the verification equation, negating <InlineMath>s</InlineMath> negates{' '}
          <InlineMath>u_1</InlineMath> and <InlineMath>u_2</InlineMath>, but the point{' '}
          <InlineMath>-P</InlineMath> has the same x-coordinate as <InlineMath>P</InlineMath>,
          so the check still passes.
        </p>
      </Definition>

      <p className="mb-4">
        This was a problem for Bitcoin because it allowed changing transaction IDs without
        invalidating signatures. The solution:
      </p>

      <Callout type="info" title="Low-s Requirement (BIP 62)">
        <p>
          Bitcoin requires <InlineMath>s \leq n/2</InlineMath>. If a signature has high-s,
          it must be converted to low-s. This is enforced since 2014.
        </p>
      </Callout>
    </LessonLayout>
  );
}
