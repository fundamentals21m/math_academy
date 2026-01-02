import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section07Quiz } from '@/data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Counting Numbers with Inverses</h2>

      <p>
        Euler's totient function, denoted <InlineMath>{'\\varphi(n)'}</InlineMath> (phi of n), counts 
        how many integers from 1 to n are coprime to n. This seemingly simple counting 
        function turns out to be absolutely essential for RSA encryption.
      </p>

      <Definition title="Euler's Totient Function">
        <p>
          For a positive integer <InlineMath>n</InlineMath>, the <strong>totient function</strong>{' '}
          <InlineMath>{'\\varphi(n)'}</InlineMath> is defined as:
        </p>
        <MathBlock>
          {`\\varphi(n) = |\\{k : 1 \\leq k \\leq n \\text{ and } \\gcd(k, n) = 1\\}|`}
        </MathBlock>
        <p className="mt-2">
          In other words, <InlineMath>{'\\varphi(n)'}</InlineMath> counts how many integers in the 
          range [1, n] have a modular inverse modulo n.
        </p>
      </Definition>

      <Example title="Computing φ(12)">
        <p>Let's find all numbers from 1 to 12 that are coprime to 12:</p>
        <div className="mt-4 grid grid-cols-4 gap-2 font-mono text-sm">
          <div className="p-2 bg-emerald-500/10 rounded text-center border border-emerald-500/20">
            <span className="text-emerald-400">1</span>
            <span className="text-dark-500 text-xs block">gcd=1</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">2</span>
            <span className="text-dark-600 text-xs block">gcd=2</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">3</span>
            <span className="text-dark-600 text-xs block">gcd=3</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">4</span>
            <span className="text-dark-600 text-xs block">gcd=4</span>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded text-center border border-emerald-500/20">
            <span className="text-emerald-400">5</span>
            <span className="text-dark-500 text-xs block">gcd=1</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">6</span>
            <span className="text-dark-600 text-xs block">gcd=6</span>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded text-center border border-emerald-500/20">
            <span className="text-emerald-400">7</span>
            <span className="text-dark-500 text-xs block">gcd=1</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">8</span>
            <span className="text-dark-600 text-xs block">gcd=4</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">9</span>
            <span className="text-dark-600 text-xs block">gcd=3</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">10</span>
            <span className="text-dark-600 text-xs block">gcd=2</span>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded text-center border border-emerald-500/20">
            <span className="text-emerald-400">11</span>
            <span className="text-dark-500 text-xs block">gcd=1</span>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <span className="text-dark-500">12</span>
            <span className="text-dark-600 text-xs block">gcd=12</span>
          </div>
        </div>
        <p className="mt-4">
          The coprime numbers are: 1, 5, 7, 11. So <InlineMath>{'\\varphi(12) = 4'}</InlineMath>.
        </p>
      </Example>

      <h2>Formulas for Computing φ(n)</h2>

      <p>
        Rather than checking every number, we have efficient formulas:
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">For a Prime p</h3>
          <MathBlock>
            {`\\varphi(p) = p - 1`}
          </MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            Every number from 1 to p-1 is coprime to a prime p.
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">For a Prime Power p^k</h3>
          <MathBlock>
            {`\\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p - 1)`}
          </MathBlock>
          <p className="text-dark-400 text-sm mt-2">
            The only non-coprime numbers are multiples of p.
          </p>
        </div>

        <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">For a Product of Two Distinct Primes</h3>
          <MathBlock>
            {`\\varphi(pq) = (p-1)(q-1)`}
          </MathBlock>
          <p className="text-amber-300 text-sm mt-2">
            <strong>This formula is crucial for RSA!</strong> It's why RSA uses the product of two primes.
          </p>
        </div>
      </div>

      <Example title="φ(15) = φ(3 × 5)">
        <p>Using the formula for a product of distinct primes:</p>
        <MathBlock>
          {`\\varphi(15) = \\varphi(3 \\times 5) = (3-1)(5-1) = 2 \\times 4 = 8`}
        </MathBlock>
        <p className="mt-4">Let's verify by listing: 1, 2, 4, 7, 8, 11, 13, 14 are coprime to 15.</p>
        <p className="text-dark-400 mt-2">
          That's 8 numbers. ✓
        </p>
      </Example>

      <h2>Euler's Theorem</h2>

      <p>
        Euler discovered a remarkable property: when you raise any number coprime to n 
        to the power φ(n), you always get 1 (mod n).
      </p>

      <Theorem
        title="Euler's Theorem"
        proof={
          <>
            <p>
              Let <InlineMath>{'\\{r_1, r_2, \\ldots, r_{\\varphi(n)}\\}'}</InlineMath> be the complete 
              set of residues coprime to n (called a reduced residue system).
            </p>
            <p className="mt-2">
              Since <InlineMath>{'\\gcd(a, n) = 1'}</InlineMath>, multiplying each <InlineMath>{'r_i'}</InlineMath> by{' '}
              <InlineMath>a</InlineMath> permutes this set: <InlineMath>{'\\{ar_1, ar_2, \\ldots, ar_{\\varphi(n)}\\}'}</InlineMath>{' '}
              is the same set (mod n), just reordered.
            </p>
            <p className="mt-2">
              Therefore, the products of both sets are congruent:
            </p>
            <MathBlock>
              {`(ar_1)(ar_2)\\cdots(ar_{\\varphi(n)}) \\equiv r_1 r_2 \\cdots r_{\\varphi(n)} \\pmod{n}`}
            </MathBlock>
            <p className="mt-2">
              This simplifies to:
            </p>
            <MathBlock>
              {`a^{\\varphi(n)} \\cdot (r_1 r_2 \\cdots r_{\\varphi(n)}) \\equiv r_1 r_2 \\cdots r_{\\varphi(n)} \\pmod{n}`}
            </MathBlock>
            <p className="mt-2">
              Since each <InlineMath>{'r_i'}</InlineMath> is coprime to n, their product is also coprime 
              to n and has an inverse. Multiply both sides by this inverse:
            </p>
            <MathBlock>
              {`a^{\\varphi(n)} \\equiv 1 \\pmod{n}`}
            </MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\gcd(a, n) = 1'}</InlineMath>, then:
        </p>
        <MathBlock>
          {`a^{\\varphi(n)} \\equiv 1 \\pmod{n}`}
        </MathBlock>
      </Theorem>

      <Example title="Euler's Theorem in Action">
        <p>
          Let's verify with <InlineMath>a = 3</InlineMath> and <InlineMath>n = 10</InlineMath>:
        </p>
        <div className="mt-4 space-y-2">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <InlineMath>{'\\varphi(10) = \\varphi(2 \\times 5) = (2-1)(5-1) = 4'}</InlineMath>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <InlineMath>{'3^4 = 81 = 8 \\times 10 + 1 \\equiv 1 \\pmod{10}'}</InlineMath> ✓
          </div>
        </div>
      </Example>

      <Theorem title="Fermat's Little Theorem (Special Case)">
        <p>
          When <InlineMath>n = p</InlineMath> is prime, we have <InlineMath>{'\\varphi(p) = p - 1'}</InlineMath>, 
          so Euler's Theorem becomes:
        </p>
        <MathBlock>
          {`a^{p-1} \\equiv 1 \\pmod{p}`}
        </MathBlock>
        <p className="mt-2">
          Equivalently: <InlineMath>{'a^p \\equiv a \\pmod{p}'}</InlineMath> for any <InlineMath>a</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Why This Matters for RSA:</strong>
        <p className="mt-2">
          In RSA, we encrypt message <InlineMath>m</InlineMath> to get ciphertext <InlineMath>{'c = m^e \\mod n'}</InlineMath>, 
          where <InlineMath>{'n = pq'}</InlineMath>. To decrypt, we need <InlineMath>{'c^d = m'}</InlineMath>.
        </p>
        <p className="mt-2">
          By Euler's Theorem, if <InlineMath>{'ed \\equiv 1 \\pmod{\\varphi(n)}'}</InlineMath>, then:
        </p>
        <MathBlock>
          {`c^d = m^{ed} = m^{1 + k\\varphi(n)} = m \\cdot (m^{\\varphi(n)})^k \\equiv m \\cdot 1^k = m \\pmod{n}`}
        </MathBlock>
        <p className="mt-2">
          This is why computing <InlineMath>{'\\varphi(n) = (p-1)(q-1)'}</InlineMath> is essential for 
          generating RSA keys!
        </p>
      </Callout>

      <Callout type="success">
        <strong>Coming Up:</strong> We'll learn how to efficiently compute{' '}
        <InlineMath>{'a^{huge} \\mod n'}</InlineMath> using the square-and-multiply algorithm—essential 
        for practical RSA encryption.
      </Callout>

      {/* TODO: Add totient grid visualization showing coprime numbers */}

      <SectionQuiz sectionId={7} questions={section07Quiz} title="Euler's Totient Quiz" />
    </LessonLayout>
  );
}
