import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section09Quiz } from '@/data/quizzes';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>The Discrete Logarithm Problem</h2>

      <p>
        The discrete logarithm problem is one of the most important hard problems in 
        cryptography. It provides the mathematical foundation for Diffie-Hellman key 
        exchange and many other protocols that secure the internet.
      </p>

      <Definition title="Discrete Logarithm">
        <p>
          Given a prime <InlineMath>p</InlineMath>, a generator <InlineMath>g</InlineMath>, and a 
          value <InlineMath>h</InlineMath>, the <strong>discrete logarithm</strong> of <InlineMath>h</InlineMath> base <InlineMath>g</InlineMath> modulo <InlineMath>p</InlineMath> is 
          the integer <InlineMath>x</InlineMath> such that:
        </p>
        <MathBlock>{`g^x \\equiv h \\pmod{p}`}</MathBlock>
        <p>
          We write <InlineMath>{`x = \\log_g h \\pmod{p}`}</InlineMath>.
        </p>
      </Definition>

      <h2>One-Way Property</h2>

      <p>
        The discrete logarithm problem has a beautiful asymmetry that makes it perfect 
        for cryptography:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Forward Direction (Easy)</h3>
          <p className="text-dark-300 mb-2">Computing <InlineMath>{`g^x \\mod p`}</InlineMath>:</p>
          <p className="font-mono text-emerald-400">3^5 mod 17 = 5</p>
          <p className="text-dark-400 text-sm mt-2">
            Uses modular exponentiation. Even for huge numbers, this takes milliseconds.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Reverse Direction (Hard)</h3>
          <p className="text-dark-300 mb-2">Finding <InlineMath>x</InlineMath> given <InlineMath>{`g^x \\mod p`}</InlineMath>:</p>
          <p className="font-mono text-amber-400">3^? mod 17 = 5</p>
          <p className="text-dark-400 text-sm mt-2">
            No efficient algorithm known! For large primes, this could take billions of years.
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Why "Discrete"?</strong> Unlike continuous logarithms where we can use 
        calculus, discrete logarithms work in finite groups where values "wrap around." 
        This eliminates approaches like binary search or Newton's method.
      </Callout>

      <h2>Cyclic Behavior</h2>

      <p>
        To understand why discrete logarithms are hard, let's look at how powers cycle 
        through values. With <InlineMath>g = 3</InlineMath> and <InlineMath>p = 17</InlineMath>:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="px-3 py-2 text-left text-dark-400">x</th>
              <th className="px-3 py-2 text-left text-primary-400">0</th>
              <th className="px-3 py-2 text-left text-primary-400">1</th>
              <th className="px-3 py-2 text-left text-primary-400">2</th>
              <th className="px-3 py-2 text-left text-primary-400">3</th>
              <th className="px-3 py-2 text-left text-primary-400">4</th>
              <th className="px-3 py-2 text-left text-primary-400">5</th>
              <th className="px-3 py-2 text-left text-primary-400">6</th>
              <th className="px-3 py-2 text-left text-primary-400">7</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="px-3 py-2 text-dark-400"><InlineMath>{`3^x \\mod 17`}</InlineMath></td>
              <td className="px-3 py-2 font-mono">1</td>
              <td className="px-3 py-2 font-mono">3</td>
              <td className="px-3 py-2 font-mono">9</td>
              <td className="px-3 py-2 font-mono">10</td>
              <td className="px-3 py-2 font-mono">13</td>
              <td className="px-3 py-2 font-mono text-emerald-400">5</td>
              <td className="px-3 py-2 font-mono">15</td>
              <td className="px-3 py-2 font-mono">11</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Notice how the values jump around unpredictably. If I tell you <InlineMath>{`3^x \\equiv 5 \\pmod{17}`}</InlineMath>,
        finding <InlineMath>{`x = 5`}</InlineMath> requires checking each power—there's no pattern to exploit.
      </p>

      <Example title="Solving a Small Discrete Log">
        <p>Find <InlineMath>{`x`}</InlineMath> where <InlineMath>{`2^x \\equiv 11 \\pmod{13}`}</InlineMath>.</p>
        <p className="mt-2">For small numbers, we can compute powers of 2 mod 13:</p>
        <div className="bg-dark-900/50 rounded-lg p-3 mt-3 font-mono text-sm">
          <div>2^1 = 2</div>
          <div>2^2 = 4</div>
          <div>2^3 = 8</div>
          <div>2^4 = 16 ≡ 3 (mod 13)</div>
          <div>2^5 = 6</div>
          <div>2^6 = 12</div>
          <div className="text-emerald-400">2^7 = 24 ≡ 11 (mod 13) ✓</div>
        </div>
        <p className="mt-3">
          So <InlineMath>x = 7</InlineMath>. But imagine if <InlineMath>p</InlineMath> had 300 digits—checking each 
          power would take longer than the age of the universe!
        </p>
      </Example>

      <h2>The Foundation of Modern Cryptography</h2>

      <Theorem title="Discrete Log Hardness Assumption">
        <p>
          For a prime <InlineMath>p</InlineMath> with 2048+ bits and a generator <InlineMath>g</InlineMath>, 
          there is no known algorithm that can solve the discrete logarithm problem 
          in polynomial time.
        </p>
      </Theorem>

      <p>
        The best known algorithms for discrete logarithm are:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>
          <strong className="text-dark-100">Baby-step Giant-step:</strong> <InlineMath>{`O(\\sqrt{p})`}</InlineMath> time and space
        </li>
        <li>
          <strong className="text-dark-100">Pollard's rho:</strong> <InlineMath>{`O(\\sqrt{p})`}</InlineMath> time, constant space
        </li>
        <li>
          <strong className="text-dark-100">Index calculus:</strong> Sub-exponential, but still infeasible for large <InlineMath>p</InlineMath>
        </li>
      </ul>

      <Callout type="success">
        <strong>Cryptographic Applications:</strong> The hardness of discrete logarithms 
        directly enables Diffie-Hellman key exchange, DSA digital signatures, and ElGamal 
        encryption. We'll explore Diffie-Hellman in the next section!
      </Callout>

      {/* TODO: Add discrete log demo visualization */}

      <SectionQuiz sectionId={9} questions={section09Quiz} title="Discrete Logarithm Quiz" />
    </LessonLayout>
  );
}
