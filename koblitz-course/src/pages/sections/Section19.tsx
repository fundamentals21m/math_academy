import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Elliptic Curve Cryptosystems</h2>

      <p>
        Elliptic curve cryptography (ECC) translates classical public-key protocols to the
        setting of elliptic curves. The hardness of the elliptic curve discrete logarithm
        problem (ECDLP) provides security with much smaller keys than RSA.
      </p>

      <h3>The ECDLP</h3>

      <Definition title="Elliptic Curve Discrete Logarithm Problem">
        Given points <em>P</em> and <MathBlock math="Q = nP" inline /> on an elliptic curve,
        find the integer <em>n</em>. This is believed hard (no subexponential algorithm known).
      </Definition>

      <Theorem title="Best Known Attacks on ECDLP"
        proof={
          <>
            <p>We analyze the complexity of known attacks on the ECDLP and explain why index calculus fails.</p>
            <p><strong>Pollard rho attack:</strong> This generic algorithm works on any cyclic group. Given <MathBlock math="Q = nP" inline />, we compute a pseudo-random walk:</p>
            <MathBlock math="W_i = a_i P + b_i Q" />
            <p>using a deterministic iteration function. By the birthday paradox, after <MathBlock math="O(\sqrt{|G|})" inline /> steps, we expect a collision <MathBlock math="W_i = W_j" inline />, giving:</p>
            <MathBlock math="a_i P + b_i Q = a_j P + b_j Q \implies (a_i - a_j)P = (b_j - b_i)nP" />
            <MathBlock math="\implies n \equiv (a_i - a_j)(b_j - b_i)^{-1} \pmod{|G|}" />
            <p>With <MathBlock math="|G| \approx p" inline />, the complexity is <MathBlock math="O(\sqrt{p})" inline /> group operations.</p>
            <p><strong>Why index calculus fails:</strong> Index calculus on <MathBlock math="\mathbb{Z}_p^*" inline /> works by expressing random elements as products of a small factor base. On elliptic curves, there is no known efficient way to decompose points: given random <MathBlock math="R \in E(\mathbb{F}_p)" inline />, finding <MathBlock math="R = P_1 + P_2 + \cdots + P_k" inline /> for "small" points <MathBlock math="P_i" inline /> appears as hard as the ECDLP itself. The group <MathBlock math="E(\mathbb{F}_p)" inline /> lacks the multiplicative structure that makes factorization meaningful.</p>
            <p><strong>Supersingular exception:</strong> For supersingular curves (<MathBlock math="\#E(\mathbb{F}_p) = p + 1" inline />), the MOV attack uses the Weil pairing to embed the ECDLP into <MathBlock math="\mathbb{F}_{p^k}^*" inline /> where index calculus applies. For properly chosen ordinary curves with large embedding degree <em>k</em>, this attack is infeasible.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Generic attacks:</strong> Pollard rho in <MathBlock math="O(\sqrt{n})" inline /></li>
          <li><strong>No index calculus:</strong> Unlike <MathBlock math="\mathbb{Z}_p^*" inline />, the group structure prevents subexponential attacks</li>
          <li>Exception: Supersingular curves have efficient attacks (avoid in crypto)</li>
        </ul>
      </Theorem>

      <h3>ECDH: Key Exchange</h3>

      <Definition title="Elliptic Curve Diffie-Hellman">
        <p><strong>Setup:</strong> Public curve <em>E</em> over <MathBlock math="\mathbb{F}_p" inline />,
        base point <em>G</em> of prime order <em>n</em></p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Alice: secret <MathBlock math="a \in [1, n-1]" inline />, public <MathBlock math="A = aG" inline /></li>
          <li>Bob: secret <MathBlock math="b \in [1, n-1]" inline />, public <MathBlock math="B = bG" inline /></li>
          <li>Shared secret: <MathBlock math="K = aB = bA = abG" inline /></li>
        </ol>
      </Definition>

      <Example title="ECDH on Small Curve">
        <p>Curve <MathBlock math="y^2 = x^3 + x + 6" inline /> over <MathBlock math="\mathbb{F}_{11}" inline />,
        base point <MathBlock math="G = (2, 7)" inline />, order 7</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Alice: <MathBlock math="a = 3" inline />, <MathBlock math="A = 3G = (7, 2)" inline /></li>
          <li>Bob: <MathBlock math="b = 5" inline />, <MathBlock math="B = 5G = (8, 3)" inline /></li>
          <li>Alice: <MathBlock math="K = 3B = 3 \cdot 5G = 15G = G" inline /> (since 15 ≡ 1 mod 7)</li>
          <li>Bob: <MathBlock math="K = 5A = 5 \cdot 3G = 15G = G = (2, 7)" inline /></li>
        </ul>
        <p className="mt-2">Shared secret: <MathBlock math="K = (2, 7)" inline /></p>
      </Example>

      <h3>ECDSA: Digital Signatures</h3>

      <Definition title="Elliptic Curve Digital Signature Algorithm">
        <p><strong>Setup:</strong> Curve <em>E</em>, base point <em>G</em> of order <em>n</em>,
        hash function <em>H</em></p>
        <p><strong>Keys:</strong> Private <MathBlock math="d \in [1, n-1]" inline />,
        public <MathBlock math="Q = dG" inline /></p>

        <p className="mt-2"><strong>Sign message M:</strong></p>
        <ol className="list-decimal list-inside">
          <li>Choose random <MathBlock math="k \in [1, n-1]" inline /></li>
          <li>Compute <MathBlock math="(x_1, y_1) = kG" inline /></li>
          <li><MathBlock math="r = x_1 \bmod n" inline /> (if <MathBlock math="r = 0" inline />, retry)</li>
          <li><MathBlock math="s = k^{-1}(H(M) + dr) \bmod n" inline /> (if <MathBlock math="s = 0" inline />, retry)</li>
          <li>Signature: <MathBlock math="(r, s)" inline /></li>
        </ol>

        <p className="mt-2"><strong>Verify:</strong></p>
        <ol className="list-decimal list-inside">
          <li><MathBlock math="w = s^{-1} \bmod n" inline /></li>
          <li><MathBlock math="u_1 = H(M) \cdot w \bmod n" inline />, <MathBlock math="u_2 = r \cdot w \bmod n" inline /></li>
          <li>Compute <MathBlock math="(x_1, y_1) = u_1 G + u_2 Q" inline /></li>
          <li>Accept if <MathBlock math="r \equiv x_1 \pmod{n}" inline /></li>
        </ol>
      </Definition>

      <Callout type="warning">
        <strong>Critical:</strong> The nonce <em>k</em> must be truly random and unique for each
        signature. Reusing <em>k</em> or using a biased <em>k</em> allows recovery of the private key!
      </Callout>

      <h3>ElGamal Encryption on EC</h3>

      <Definition title="EC ElGamal">
        <p><strong>Encrypt message point M:</strong></p>
        <ol className="list-decimal list-inside">
          <li>Choose random <MathBlock math="k" inline /></li>
          <li>Ciphertext: <MathBlock math="(kG, M + kQ)" inline /> where <em>Q</em> is receiver's public key</li>
        </ol>
        <p className="mt-2"><strong>Decrypt:</strong></p>
        <MathBlock math="M = (M + kQ) - d(kG) = M + kQ - kdG = M + kQ - kQ = M" />
      </Definition>

      <p>
        Note: Messages must be encoded as curve points. This is typically done using{' '}
        <strong>Koblitz encoding</strong> or ECIES (a hybrid scheme).
      </p>

      <h3>ECIES: Integrated Encryption</h3>

      <Definition title="Elliptic Curve Integrated Encryption Scheme">
        Hybrid encryption combining EC key agreement with symmetric encryption:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Generate ephemeral key pair <MathBlock math="(r, R = rG)" inline /></li>
          <li>Compute shared point <MathBlock math="S = rQ" inline /></li>
          <li>Derive symmetric key <MathBlock math="K = \text{KDF}(S)" inline /></li>
          <li>Encrypt: <MathBlock math="C = \text{Enc}_K(M)" inline /></li>
          <li>Send <MathBlock math="(R, C, \text{MAC})" inline /></li>
        </ol>
      </Definition>

      <h3>Key Size Comparison</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Equivalent Security Levels</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Security</th>
              <th className="text-left py-2">Symmetric</th>
              <th className="text-left py-2">RSA/DH</th>
              <th className="text-left py-2">ECC</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">80-bit</td>
              <td className="py-2">80</td>
              <td className="py-2">1024</td>
              <td className="py-2">160</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">112-bit</td>
              <td className="py-2">112</td>
              <td className="py-2">2048</td>
              <td className="py-2">224</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">128-bit</td>
              <td className="py-2">128</td>
              <td className="py-2">3072</td>
              <td className="py-2">256</td>
            </tr>
            <tr>
              <td className="py-2">256-bit</td>
              <td className="py-2">256</td>
              <td className="py-2">15360</td>
              <td className="py-2">512</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Implementation Considerations</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Security Concerns</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Side-channel attacks:</strong> Use constant-time scalar multiplication</li>
          <li><strong>Invalid curve attacks:</strong> Validate points are on the curve</li>
          <li><strong>Small subgroup attacks:</strong> Use cofactor multiplication or prime-order curves</li>
          <li><strong>Twist attacks:</strong> Validate points are not on the twist</li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Modern Curves:</strong> Curve25519 and Ed25519 are designed to be "safe" by
        construction - their parameters avoid known attack classes and enable constant-time
        implementations.
      </Callout>
    </LessonLayout>
  );
}
