import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section10Quiz } from '@/data/quizzes';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>The RSA Cryptosystem</h2>

      <p>
        RSA is the most famous public-key cryptosystem in the world. Invented in 1977 by 
        Ron Rivest, Adi Shamir, and Leonard Adleman, it was the first practical system 
        that allowed secure communication without sharing a secret key in advance.
      </p>

      <Callout type="info">
        <strong>Public-Key Revolution:</strong> Before RSA, if Alice wanted to send Bob 
        a secret message, they first needed to meet in person to exchange a key. RSA 
        changed everything—now Bob can publish a "public key" that anyone can use to 
        encrypt messages that only Bob can decrypt.
      </Callout>

      <h2>Key Generation</h2>

      <p>
        The security of RSA relies on the difficulty of factoring large numbers. Here's 
        how Bob creates his key pair:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Step 1: Choose Two Large Primes</h3>
          <p className="text-dark-300">
            Select two distinct large prime numbers <Math>p</Math> and <Math>q</Math> (in practice, 
            each about 1024 bits).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Step 2: Compute n and φ(n)</h3>
          <p className="text-dark-300 mb-2">Calculate:</p>
          <MathBlock>n = p \cdot q</MathBlock>
          <MathBlock>\phi(n) = (p-1)(q-1)</MathBlock>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Step 3: Choose Public Exponent</h3>
          <p className="text-dark-300">
            Select <Math>e</Math> such that <Math>1 {'<'} e {'<'} \phi(n)</Math> and <Math>\gcd(e, \phi(n)) = 1</Math>.
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Common choice: <Math>e = 65537</Math> (fast and secure).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Step 4: Compute Private Exponent</h3>
          <p className="text-dark-300 mb-2">
            Find <Math>d</Math>, the modular inverse of <Math>e</Math> modulo <Math>\phi(n)</Math>:
          </p>
          <MathBlock>d \equiv e^{'{-1}'} \pmod{'\{\\phi(n)\}'}</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            This means <Math>e \cdot d \equiv 1 \pmod{'\{\\phi(n)\}'}</Math>.
          </p>
        </div>
      </div>

      <Definition title="RSA Key Pair">
        <div className="space-y-3">
          <p>
            <strong className="text-emerald-400">Public Key:</strong> The pair <Math>(e, n)</Math> — 
            shared with everyone.
          </p>
          <p>
            <strong className="text-amber-400">Private Key:</strong> The pair <Math>(d, n)</Math> — 
            kept secret by the owner.
          </p>
        </div>
      </Definition>

      <h2>Encryption and Decryption</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Encrypt (with public key)</h3>
          <p className="text-dark-300 mb-2">To encrypt message <Math>m</Math>:</p>
          <MathBlock>c = m^e \mod n</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Anyone can do this using the public key.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Decrypt (with private key)</h3>
          <p className="text-dark-300 mb-2">To decrypt ciphertext <Math>c</Math>:</p>
          <MathBlock>m = c^d \mod n</MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Only the private key holder can do this.
          </p>
        </div>
      </div>

      <Example title="RSA with Small Numbers">
        <p>Let's work through a complete example with small primes:</p>
        
        <div className="bg-dark-900/50 rounded-lg p-3 mt-3 font-mono text-sm space-y-1">
          <div className="text-dark-400">// Key Generation</div>
          <div>p = 61, q = 53</div>
          <div>n = 61 × 53 = <span className="text-primary-400">3233</span></div>
          <div>φ(n) = 60 × 52 = <span className="text-primary-400">3120</span></div>
          <div>e = <span className="text-emerald-400">17</span> (coprime to 3120)</div>
          <div>d = 17⁻¹ mod 3120 = <span className="text-amber-400">2753</span></div>
        </div>

        <div className="bg-dark-900/50 rounded-lg p-3 mt-3 font-mono text-sm space-y-1">
          <div className="text-dark-400">// Encryption</div>
          <div>Message: m = 65 (ASCII for 'A')</div>
          <div>c = 65^17 mod 3233 = <span className="text-emerald-400">2790</span></div>
        </div>

        <div className="bg-dark-900/50 rounded-lg p-3 mt-3 font-mono text-sm space-y-1">
          <div className="text-dark-400">// Decryption</div>
          <div>m = 2790^2753 mod 3233 = <span className="text-amber-400">65</span> ✓</div>
        </div>
      </Example>

      <h2>Why Does RSA Work?</h2>

      <Theorem
        title="RSA Correctness"
        proof={
          <>
            <p>We need to show that decryption recovers the original message:</p>
            <MathBlock>c^d \equiv (m^e)^d \equiv m^{'{ed}'} \pmod{'{n}'}</MathBlock>
            <p className="mt-2">
              Since <Math>ed \equiv 1 \pmod{'\{\\phi(n)\}'}</Math>, we have <Math>ed = 1 + k\phi(n)</Math> for 
              some integer <Math>k</Math>.
            </p>
            <MathBlock>m^{'{ed}'} = m^{'{1 + k\\phi(n)}'} = m \cdot (m^{'\{\\phi(n)\}'})^k</MathBlock>
            <p className="mt-2">
              By Euler's theorem, <Math>m^{'\{\\phi(n)\}'} \equiv 1 \pmod{'{n}'}</Math> when <Math>\gcd(m,n) = 1</Math>.
            </p>
            <p className="mt-2">
              Therefore: <Math>m^{'{ed}'} \equiv m \cdot 1^k \equiv m \pmod{'{n}'}</Math>
            </p>
          </>
        }
      >
        <p>
          For any message <Math>m</Math> with <Math>0 {'<'} m {'<'} n</Math>, decrypting the 
          encryption of <Math>m</Math> returns <Math>m</Math>:
        </p>
        <MathBlock>(m^e)^d \equiv m \pmod{'{n}'}</MathBlock>
      </Theorem>

      <h2>Security of RSA</h2>

      <p>
        RSA security depends on the difficulty of the <strong>factoring problem</strong>:
      </p>

      <Callout type="warning">
        <strong>The Factoring Problem:</strong> Given <Math>n = p \cdot q</Math> where <Math>p</Math> and <Math>q</Math> are 
        large primes, finding <Math>p</Math> and <Math>q</Math> is computationally infeasible.
      </Callout>

      <p>
        If an attacker could factor <Math>n</Math>, they could:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>Compute <Math>\phi(n) = (p-1)(q-1)</Math></li>
        <li>Find <Math>d = e^{'{-1}'} \mod \phi(n)</Math></li>
        <li>Decrypt any message!</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">RSA Key Sizes in Practice</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="px-3 py-2 text-left text-dark-400">Key Size</th>
              <th className="px-3 py-2 text-left text-dark-400">Security Level</th>
              <th className="px-3 py-2 text-left text-dark-400">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">512 bits</td>
              <td className="px-3 py-2">Very weak</td>
              <td className="px-3 py-2 text-red-400">Broken</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">1024 bits</td>
              <td className="px-3 py-2">Weak</td>
              <td className="px-3 py-2 text-amber-400">Deprecated</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2">2048 bits</td>
              <td className="px-3 py-2">Standard</td>
              <td className="px-3 py-2 text-emerald-400">Recommended</td>
            </tr>
            <tr>
              <td className="px-3 py-2">4096 bits</td>
              <td className="px-3 py-2">High</td>
              <td className="px-3 py-2 text-emerald-400">Recommended</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success">
        <strong>Next Up:</strong> We'll explore Diffie-Hellman key exchange, which solves 
        a different problem: how can two people agree on a shared secret over a public 
        channel, even if they've never met?
      </Callout>

      {/* TODO: Add RSA key generation and encrypt/decrypt visualization */}

      <SectionQuiz sectionId={10} questions={section10Quiz} title="RSA Encryption Quiz" />
    </LessonLayout>
  );
}
