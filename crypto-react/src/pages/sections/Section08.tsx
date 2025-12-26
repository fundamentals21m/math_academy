import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section08Quiz } from '@/data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>The Problem of Huge Exponents</h2>

      <p>
        In RSA encryption, we need to compute things like <Math>{'m^{65537} \\mod n'}</Math> where{' '}
        <Math>n</Math> might be a 2048-bit number. Computing this naively would require 
        65,536 multiplications—and with 600-digit numbers!
      </p>

      <Callout type="warning">
        <strong>The Challenge:</strong> How do we compute <Math>{'a^b \\mod n'}</Math> efficiently 
        when <Math>b</Math> could be astronomically large?
      </Callout>

      <p>
        The answer is the <strong>square-and-multiply</strong> algorithm (also called 
        binary exponentiation or exponentiation by squaring). It reduces the number of 
        operations from <Math>{'O(b)'}</Math> to <Math>{'O(\\log b)'}</Math>—an enormous speedup.
      </p>

      <h2>The Key Insight</h2>

      <p>
        The algorithm exploits the binary representation of the exponent. Every exponent 
        can be written as a sum of powers of 2:
      </p>

      <MathBlock>
        {`13 = 8 + 4 + 1 = 2^3 + 2^2 + 2^0 = (1101)_2`}
      </MathBlock>

      <p>
        And we can use two simple rules:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Squaring Rule</h3>
          <MathBlock>
            {`a^{2k} = (a^k)^2`}
          </MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Double the exponent by squaring the result.
          </p>
        </div>
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Multiplication Rule</h3>
          <MathBlock>
            {`a^{2k+1} = a \\cdot a^{2k}`}
          </MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Odd exponent = multiply by base once.
          </p>
        </div>
      </div>

      <Definition title="Square-and-Multiply Algorithm">
        <p>To compute <Math>{'a^b \\mod n'}</Math>:</p>
        <ol className="list-decimal list-inside mt-3 space-y-1">
          <li>Write <Math>b</Math> in binary: <Math>{'b = (b_k b_{k-1} \\cdots b_1 b_0)_2'}</Math></li>
          <li>Start with result = 1</li>
          <li>For each bit from left to right:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Square the result (always)</li>
              <li>If the bit is 1, multiply by <Math>a</Math></li>
            </ul>
          </li>
          <li>Take mod <Math>n</Math> after each operation to keep numbers small</li>
        </ol>
      </Definition>

      <Example title="Computing 3^13 mod 7">
        <p>
          First, convert 13 to binary: <Math>{'13 = (1101)_2'}</Math>
        </p>
        <p className="mt-2">
          Process each bit from left to right:
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left p-2 text-dark-400">Step</th>
                <th className="text-left p-2 text-dark-400">Bit</th>
                <th className="text-left p-2 text-dark-400">Operation</th>
                <th className="text-left p-2 text-dark-400">Result</th>
                <th className="text-left p-2 text-dark-400">mod 7</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              <tr className="border-b border-dark-800">
                <td className="p-2">Init</td>
                <td className="p-2">—</td>
                <td className="p-2">—</td>
                <td className="p-2">1</td>
                <td className="p-2 text-emerald-400">1</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2">1</td>
                <td className="p-2 text-amber-400">1</td>
                <td className="p-2">1² × 3</td>
                <td className="p-2">3</td>
                <td className="p-2 text-emerald-400">3</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2">2</td>
                <td className="p-2 text-amber-400">1</td>
                <td className="p-2">3² × 3</td>
                <td className="p-2">27</td>
                <td className="p-2 text-emerald-400">6</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2">3</td>
                <td className="p-2 text-dark-500">0</td>
                <td className="p-2">6²</td>
                <td className="p-2">36</td>
                <td className="p-2 text-emerald-400">1</td>
              </tr>
              <tr>
                <td className="p-2">4</td>
                <td className="p-2 text-amber-400">1</td>
                <td className="p-2">1² × 3</td>
                <td className="p-2">3</td>
                <td className="p-2 text-emerald-400">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Therefore, <Math>{'3^{13} \\equiv 3 \\pmod{7}'}</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Verification: <Math>{'3^{13} = 1594323 = 227760 \\times 7 + 3'}</Math> ✓
        </p>
      </Example>

      <h2>Why This Is So Much Faster</h2>

      <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-500/20">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Performance Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-dark-800/50 rounded-xl">
            <h4 className="font-semibold text-red-400 mb-2">Naive Method: O(b)</h4>
            <p className="text-dark-300 text-sm">
              Multiply <Math>a</Math> by itself <Math>b</Math> times.
            </p>
            <p className="text-dark-400 text-sm mt-2">
              For <Math>{'b = 2^{1000}'}</Math>, need ~10^301 operations!
            </p>
          </div>
          <div className="p-4 bg-dark-800/50 rounded-xl">
            <h4 className="font-semibold text-emerald-400 mb-2">Square-and-Multiply: O(log b)</h4>
            <p className="text-dark-300 text-sm">
              Only <Math>{'\\lfloor \\log_2 b \\rfloor'}</Math> iterations needed.
            </p>
            <p className="text-dark-400 text-sm mt-2">
              For <Math>{'b = 2^{1000}'}</Math>, need only 1000 operations!
            </p>
          </div>
        </div>
        <p className="text-dark-300 mt-4 text-sm">
          This is the difference between "impossible" and "instant" on modern computers.
        </p>
      </div>

      <Example title="A Larger Example: 5^117 mod 19">
        <p>
          Binary: <Math>{'117 = (1110101)_2'}</Math> = 64 + 32 + 16 + 4 + 1
        </p>
        <div className="mt-4 space-y-1 font-mono text-sm">
          <div className="grid grid-cols-4 gap-2 p-2 bg-dark-800/30 rounded">
            <span>Bit 1:</span>
            <span className="text-amber-400">1</span>
            <span>1² × 5 = 5</span>
            <span className="text-emerald-400">≡ 5</span>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2 bg-dark-800/30 rounded">
            <span>Bit 2:</span>
            <span className="text-amber-400">1</span>
            <span>5² × 5 = 125</span>
            <span className="text-emerald-400">≡ 11</span>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2 bg-dark-800/30 rounded">
            <span>Bit 3:</span>
            <span className="text-amber-400">1</span>
            <span>11² × 5 = 605</span>
            <span className="text-emerald-400">≡ 16</span>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2 bg-dark-800/30 rounded">
            <span>Bit 4:</span>
            <span className="text-dark-500">0</span>
            <span>16² = 256</span>
            <span className="text-emerald-400">≡ 9</span>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2 bg-dark-800/30 rounded">
            <span>Bit 5:</span>
            <span className="text-amber-400">1</span>
            <span>9² × 5 = 405</span>
            <span className="text-emerald-400">≡ 6</span>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2 bg-dark-800/30 rounded">
            <span>Bit 6:</span>
            <span className="text-dark-500">0</span>
            <span>6² = 36</span>
            <span className="text-emerald-400">≡ 17</span>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
            <span>Bit 7:</span>
            <span className="text-amber-400">1</span>
            <span>17² × 5 = 1445</span>
            <span className="text-emerald-400">≡ 1</span>
          </div>
        </div>
        <p className="mt-4">
          Result: <Math>{'5^{117} \\equiv 1 \\pmod{19}'}</Math>
        </p>
        <p className="text-dark-400 text-sm mt-2">
          Note: This confirms Fermat's Little Theorem since <Math>{'117 = 6 \\times 18 + 9'}</Math> and{' '}
          <Math>{'5^{18} \\equiv 1 \\pmod{19}'}</Math>.
        </p>
      </Example>

      <Theorem title="Complexity Analysis">
        <p>
          For computing <Math>{'a^b \\mod n'}</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Number of iterations: <Math>{'\\lfloor \\log_2 b \\rfloor + 1'}</Math></li>
          <li>Each iteration: at most 2 multiplications + 1 modular reduction</li>
          <li>Total multiplications: <Math>{'O(\\log b)'}</Math></li>
        </ul>
        <p className="mt-2">
          If we use fast multiplication algorithms, this becomes{' '}
          <Math>{'O((\\log b)(\\log n)^2)'}</Math> bit operations.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Implementation Tip:</strong> Always reduce mod <Math>n</Math> after 
        every multiplication to keep intermediate results small. This prevents overflow 
        and keeps the algorithm fast.
      </Callout>

      <div className="my-6 p-4 bg-dark-800/50 rounded-xl border border-dark-700 font-mono text-sm">
        <p className="text-dark-400 mb-2">// Pseudocode for modular exponentiation</p>
        <pre className="text-dark-200">
{`function modPow(base, exp, mod):
    result = 1
    base = base % mod
    
    while exp > 0:
        if exp is odd:
            result = (result * base) % mod
        exp = exp >> 1        // divide by 2
        base = (base * base) % mod
    
    return result`}
        </pre>
      </div>

      <Callout type="success">
        <strong>Next Up:</strong> We'll explore the discrete logarithm problem—the 
        mathematical foundation that makes Diffie-Hellman key exchange and elliptic 
        curve cryptography secure.
      </Callout>

      {/* TODO: Add step-by-step exponentiation visualization with binary display */}

      <SectionQuiz sectionId={8} questions={section08Quiz} title="Modular Exponentiation Quiz" />
    </LessonLayout>
  );
}
