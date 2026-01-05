import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>The Idea of Public Key Cryptography</h2>

      <p>
        Public key cryptography, introduced by Diffie and Hellman in 1976, revolutionized
        cryptography by solving the key distribution problem. It enables secure communication
        without prior secret key exchange.
      </p>

      <h3>The Key Distribution Problem</h3>

      <p>
        In symmetric cryptography, Alice and Bob need to share a secret key before communicating
        securely. This creates a chicken-and-egg problem: how do they securely exchange the key
        in the first place?
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Symmetric Key Problems</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Key distribution:</strong> How to securely share keys?</li>
          <li><strong>Key management:</strong> For <em>n</em> users, need <MathBlock math="\binom{n}{2} = \frac{n(n-1)}{2}" inline /> keys</li>
          <li><strong>Scalability:</strong> 1000 users need 499,500 keys!</li>
        </ul>
      </div>

      <h3>The Public Key Revolution</h3>

      <Definition title="Public Key Cryptosystem">
        A <strong>public key cryptosystem</strong> consists of:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Public key:</strong> Known to everyone, used for encryption</li>
          <li><strong>Private key:</strong> Known only to owner, used for decryption</li>
          <li><strong>Key generation:</strong> Algorithm producing public-private key pairs</li>
          <li><strong>Encryption:</strong> <MathBlock math="C = E_{\text{pub}}(P)" inline /></li>
          <li><strong>Decryption:</strong> <MathBlock math="P = D_{\text{priv}}(C)" inline /></li>
        </ul>
      </Definition>

      <Callout type="info">
        <strong>Analogy:</strong> Think of a public key as a padlock that anyone can close (encrypt),
        but only the owner with the private key can open (decrypt).
      </Callout>

      <h3>One-Way Functions</h3>

      <Definition title="One-Way Function">
        A function <MathBlock math="f: X \to Y" inline /> is <strong>one-way</strong> if:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Easy to compute:</strong> Given <em>x</em>, computing <MathBlock math="f(x)" inline /> is efficient (polynomial time)</li>
          <li><strong>Hard to invert:</strong> Given <em>y</em>, finding any <em>x</em> with <MathBlock math="f(x) = y" inline /> is computationally infeasible</li>
        </ul>
      </Definition>

      <Definition title="Trapdoor One-Way Function">
        A <strong>trapdoor one-way function</strong> is a one-way function that becomes easy to
        invert given some extra secret information (the "trapdoor").
      </Definition>

      <Example title="Candidate One-Way Functions">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Multiplication vs. Factoring:</strong> Computing <MathBlock math="n = pq" inline /> is easy;
              factoring <em>n</em> to find <em>p, q</em> is believed hard</li>
          <li><strong>Modular exponentiation vs. Discrete log:</strong> Computing <MathBlock math="g^x \bmod p" inline /> is easy;
              finding <em>x</em> given <MathBlock math="g^x" inline /> is believed hard</li>
          <li><strong>Elliptic curve point multiplication:</strong> <MathBlock math="nP" inline /> is easy;
              finding <em>n</em> given <em>P</em> and <MathBlock math="nP" inline /> is believed hard</li>
        </ul>
      </Example>

      <h3>Diffie-Hellman Key Exchange</h3>

      <Theorem
        title="Diffie-Hellman Protocol"
        proof={
          <>
            <p>
              <strong>Correctness:</strong> We prove that Alice and Bob compute the same shared secret <MathBlock math="K" inline />.
            </p>
            <p className="mt-2">
              Alice receives <MathBlock math="B = g^b \bmod p" inline /> from Bob and computes:
            </p>
            <MathBlock math="K_A = B^a \bmod p = (g^b)^a \bmod p = g^{ba} \bmod p" />
            <p className="mt-2">
              Bob receives <MathBlock math="A = g^a \bmod p" inline /> from Alice and computes:
            </p>
            <MathBlock math="K_B = A^b \bmod p = (g^a)^b \bmod p = g^{ab} \bmod p" />
            <p className="mt-2">
              Since exponentiation in <MathBlock math="\mathbb{Z}_p^*" inline /> is commutative (the group is abelian):
            </p>
            <MathBlock math="g^{ab} = g^{ba} \pmod{p}" />
            <p className="mt-2">
              Therefore <MathBlock math="K_A = K_B = K" inline />, and both parties obtain the same shared secret.
            </p>
            <p className="mt-2">
              <strong>Security intuition:</strong> An eavesdropper observes <MathBlock math="g, p, g^a, g^b" inline /> but
              must compute <MathBlock math="g^{ab}" inline /> to recover the shared secret. This is the Computational
              Diffie-Hellman (CDH) problem. Under the CDH assumption, no efficient algorithm can compute
              <MathBlock math="g^{ab}" inline /> from <MathBlock math="g^a" inline /> and <MathBlock math="g^b" inline /> alone.
            </p>
          </>
        }
      >
        Alice and Bob can establish a shared secret over an insecure channel:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Setup:</strong> Public prime <em>p</em> and generator <em>g</em></li>
          <li><strong>Alice:</strong> Chooses secret <em>a</em>, sends <MathBlock math="A = g^a \bmod p" inline /></li>
          <li><strong>Bob:</strong> Chooses secret <em>b</em>, sends <MathBlock math="B = g^b \bmod p" inline /></li>
          <li><strong>Shared secret:</strong> Both compute <MathBlock math="K = g^{ab} \bmod p" inline /></li>
        </ol>
        Alice computes <MathBlock math="K = B^a" inline />, Bob computes <MathBlock math="K = A^b" inline />.
      </Theorem>

      <Example title="Diffie-Hellman Example">
        <p>Let <MathBlock math="p = 23, g = 5" inline />.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Alice: <MathBlock math="a = 6" inline />, sends <MathBlock math="A = 5^6 \bmod 23 = 8" inline /></li>
          <li>Bob: <MathBlock math="b = 15" inline />, sends <MathBlock math="B = 5^{15} \bmod 23 = 19" inline /></li>
          <li>Alice computes: <MathBlock math="K = 19^6 \bmod 23 = 2" inline /></li>
          <li>Bob computes: <MathBlock math="K = 8^{15} \bmod 23 = 2" inline /></li>
        </ul>
        <p className="mt-2">Shared secret: <strong>K = 2</strong></p>
      </Example>

      <h3>Security Assumptions</h3>

      <Definition title="Computational Diffie-Hellman (CDH)">
        Given <MathBlock math="g, g^a, g^b" inline />, it is hard to compute <MathBlock math="g^{ab}" inline />.
      </Definition>

      <Definition title="Decisional Diffie-Hellman (DDH)">
        Given <MathBlock math="g, g^a, g^b, g^c" inline />, it is hard to decide whether <MathBlock math="c = ab" inline />.
      </Definition>

      <Callout type="warning">
        <strong>Man-in-the-Middle Attack:</strong> Basic Diffie-Hellman is vulnerable to active
        attackers who intercept and substitute their own values. Authentication (digital signatures)
        is needed to prevent this.
      </Callout>

      <h3>Digital Signatures</h3>

      <Definition title="Digital Signature">
        A <strong>digital signature</strong> provides:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Authentication:</strong> Proves the signer's identity</li>
          <li><strong>Integrity:</strong> Detects message modification</li>
          <li><strong>Non-repudiation:</strong> Signer cannot deny signing</li>
        </ul>
        Sign with private key; verify with public key (opposite of encryption).
      </Definition>

      <h3>Comparison: Symmetric vs. Asymmetric</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Aspect</th>
              <th className="text-left py-2">Symmetric</th>
              <th className="text-left py-2">Asymmetric</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Keys</td>
              <td className="py-2">One shared</td>
              <td className="py-2">Public + Private</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Speed</td>
              <td className="py-2">Fast (1000×)</td>
              <td className="py-2">Slow</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Key distribution</td>
              <td className="py-2">Problem</td>
              <td className="py-2">Easy</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Key size (128-bit)</td>
              <td className="py-2">128 bits</td>
              <td className="py-2">3072+ bits</td>
            </tr>
            <tr>
              <td className="py-2">Use case</td>
              <td className="py-2">Bulk encryption</td>
              <td className="py-2">Key exchange, signatures</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Hybrid Systems:</strong> In practice, we use both: asymmetric crypto for key exchange,
        then symmetric crypto (AES) for bulk data encryption. This combines the best of both worlds.
      </Callout>
    </LessonLayout>
  );
}
