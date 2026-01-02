import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section06Quiz } from '@/data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Division in Modular Arithmetic</h2>

      <p>
        In regular arithmetic, we can divide any non-zero number: <InlineMath>{'6 \\div 3 = 2'}</InlineMath>. 
        But in modular arithmetic, division isn't straightforward. Instead, we use the concept 
        of a <strong>modular inverse</strong>—a number that "undoes" multiplication.
      </p>

      <Definition title="Modular Inverse">
        <p>
          The <strong>modular inverse</strong> of <InlineMath>a</InlineMath> modulo <InlineMath>n</InlineMath>, 
          written <InlineMath>{'a^{-1}'}</InlineMath>, is an integer <InlineMath>x</InlineMath> such that:
        </p>
        <MathBlock>
          {`a \\cdot x \\equiv 1 \\pmod{n}`}
        </MathBlock>
        <p className="mt-2">
          In other words, multiplying <InlineMath>a</InlineMath> by its inverse gives 1 (mod <InlineMath>n</InlineMath>).
        </p>
      </Definition>

      <Example title="Finding the Inverse of 3 mod 7">
        <p>We want to find <InlineMath>x</InlineMath> such that <InlineMath>{'3x \\equiv 1 \\pmod{7}'}</InlineMath>.</p>
        <div className="mt-4 space-y-2 font-mono text-sm">
          <div className="grid grid-cols-2 gap-4">
            <span><InlineMath>{'3 \\times 1 = 3 \\equiv 3'}</InlineMath></span>
            <span className="text-dark-500">not 1</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <span><InlineMath>{'3 \\times 2 = 6 \\equiv 6'}</InlineMath></span>
            <span className="text-dark-500">not 1</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <span><InlineMath>{'3 \\times 3 = 9 \\equiv 2'}</InlineMath></span>
            <span className="text-dark-500">not 1</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <span><InlineMath>{'3 \\times 4 = 12 \\equiv 5'}</InlineMath></span>
            <span className="text-dark-500">not 1</span>
          </div>
          <div className="grid grid-cols-2 gap-4 p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
            <span><InlineMath>{'3 \\times 5 = 15 \\equiv 1'}</InlineMath></span>
            <span className="text-emerald-400">Found it!</span>
          </div>
        </div>
        <p className="mt-4">
          Therefore, <InlineMath>{'3^{-1} \\equiv 5 \\pmod{7}'}</InlineMath>.
        </p>
      </Example>

      <h2>When Does an Inverse Exist?</h2>

      <p>
        Not every number has a modular inverse. The key condition involves the GCD:
      </p>

      <Theorem
        title="Existence of Modular Inverse"
        proof={
          <>
            <p>
              <strong>(⇒)</strong> Suppose <InlineMath>{'a^{-1}'}</InlineMath> exists, so{' '}
              <InlineMath>{'ax \\equiv 1 \\pmod{n}'}</InlineMath> for some <InlineMath>x</InlineMath>. This means{' '}
              <InlineMath>ax = 1 + kn</InlineMath> for some integer <InlineMath>k</InlineMath>, or equivalently:
            </p>
            <MathBlock>
              {`ax - kn = 1`}
            </MathBlock>
            <p>
              By Bézout's Identity, if <InlineMath>{`d = \\gcd(a, n)`}</InlineMath>, then <InlineMath>{`d`}</InlineMath> divides 
              any linear combination of <InlineMath>a</InlineMath> and <InlineMath>n</InlineMath>. So{' '}
              <InlineMath>{'d \\mid 1'}</InlineMath>, which means <InlineMath>d = 1</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>(⇐)</strong> Conversely, if <InlineMath>{`\\gcd(a, n) = 1`}</InlineMath>, then by the 
              Extended Euclidean Algorithm, there exist <InlineMath>x, y</InlineMath> with <InlineMath>ax + ny = 1</InlineMath>.
            </p>
            <p className="mt-2">
              Taking this equation mod <InlineMath>n</InlineMath>: <InlineMath>{'ax \\equiv 1 \\pmod{n}'}</InlineMath>, 
              so <InlineMath>x</InlineMath> is the inverse.
            </p>
          </>
        }
      >
        <p>
          The modular inverse of <InlineMath>a</InlineMath> modulo <InlineMath>n</InlineMath> exists if and only if:
        </p>
        <MathBlock>
          {`\\gcd(a, n) = 1`}
        </MathBlock>
        <p className="mt-2">
          In other words, <InlineMath>a</InlineMath> and <InlineMath>n</InlineMath> must be <strong>coprime</strong>.
        </p>
      </Theorem>

      <Example title="Why 4⁻¹ mod 8 Doesn't Exist">
        <p>
          Let's check if <InlineMath>{'4^{-1} \\pmod{8}'}</InlineMath> exists:
        </p>
        <div className="mt-4 p-4 bg-dark-800/50 rounded-xl">
          <p><InlineMath>{'\\gcd(4, 8) = 4 \\neq 1'}</InlineMath></p>
        </div>
        <p className="mt-4">
          Since 4 and 8 share a common factor (4), no inverse exists. We can verify by 
          checking all possibilities:
        </p>
        <div className="mt-4 space-y-1 font-mono text-sm">
          <div><InlineMath>{'4 \\times 1 = 4 \\equiv 4'}</InlineMath></div>
          <div><InlineMath>{'4 \\times 3 = 12 \\equiv 4'}</InlineMath></div>
          <div><InlineMath>{'4 \\times 5 = 20 \\equiv 4'}</InlineMath></div>
          <div><InlineMath>{'4 \\times 7 = 28 \\equiv 4'}</InlineMath></div>
        </div>
        <p className="mt-4 text-amber-400">
          Every product is ≡ 4 (mod 8)—we can never get 1!
        </p>
      </Example>

      <h2>Finding Inverses with Extended Euclidean Algorithm</h2>

      <p>
        The Extended Euclidean Algorithm gives us a direct method to compute inverses. 
        If <InlineMath>{'\\gcd(a, n) = 1'}</InlineMath>, we find <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> such that:
      </p>

      <MathBlock>
        {`ax + ny = 1`}
      </MathBlock>

      <p>
        Taking this equation mod <InlineMath>n</InlineMath>, the term <InlineMath>ny</InlineMath> vanishes, leaving:
      </p>

      <MathBlock>
        {`ax \\equiv 1 \\pmod{n}`}
      </MathBlock>

      <p>
        So <InlineMath>x</InlineMath> (reduced mod <InlineMath>n</InlineMath>) is our inverse!
      </p>

      <Example title="Finding 17⁻¹ mod 43">
        <p>
          Apply the Extended Euclidean Algorithm to find <InlineMath>x</InlineMath> where{' '}
          <InlineMath>{'17x + 43y = 1'}</InlineMath>:
        </p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="p-3 bg-dark-800/50 rounded-lg font-mono">
            <p>43 = 2 × 17 + 9</p>
            <p>17 = 1 × 9 + 8</p>
            <p>9 = 1 × 8 + 1</p>
            <p>8 = 8 × 1 + 0</p>
          </div>
          <p className="text-dark-400">Back-substitution:</p>
          <div className="p-3 bg-dark-800/50 rounded-lg font-mono">
            <p>1 = 9 - 1 × 8</p>
            <p>1 = 9 - 1 × (17 - 1 × 9) = 2 × 9 - 1 × 17</p>
            <p>1 = 2 × (43 - 2 × 17) - 1 × 17 = 2 × 43 - 5 × 17</p>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
            <p>So <InlineMath>{'17 \\times (-5) + 43 \\times 2 = 1'}</InlineMath></p>
            <p className="mt-1">
              <InlineMath>{'x = -5 \\equiv 38 \\pmod{43}'}</InlineMath>
            </p>
          </div>
        </div>
        <p className="mt-4">
          Verification: <InlineMath>{'17 \\times 38 = 646 = 15 \\times 43 + 1 \\equiv 1 \\pmod{43}'}</InlineMath> ✓
        </p>
      </Example>

      <Callout type="info">
        <strong>Why Modular Inverses Matter:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>RSA decryption requires computing <InlineMath>{'d = e^{-1} \\mod \\phi(n)'}</InlineMath></li>
          <li>Solving linear congruences <InlineMath>{'ax \\equiv b \\pmod{n}'}</InlineMath></li>
          <li>The Chinese Remainder Theorem uses inverses</li>
        </ul>
      </Callout>

      <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-500/20">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Quick Reference: Inverses mod 7</h3>
        <p className="text-dark-300 mb-4">
          For prime <InlineMath>p = 7</InlineMath>, every non-zero element has an inverse:
        </p>
        <div className="grid grid-cols-3 gap-2 font-mono text-sm">
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <InlineMath>{'1^{-1} = 1'}</InlineMath>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <InlineMath>{'2^{-1} = 4'}</InlineMath>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <InlineMath>{'3^{-1} = 5'}</InlineMath>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <InlineMath>{'4^{-1} = 2'}</InlineMath>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <InlineMath>{'5^{-1} = 3'}</InlineMath>
          </div>
          <div className="p-2 bg-dark-800/50 rounded text-center">
            <InlineMath>{'6^{-1} = 6'}</InlineMath>
          </div>
        </div>
        <p className="text-dark-400 text-sm mt-3">
          Notice: inverses come in pairs! (1,1), (2,4), (3,5), (6,6)
        </p>
      </div>

      <Callout type="success">
        <strong>Up Next:</strong> We'll explore Euler's totient function, which counts 
        how many numbers have inverses modulo <InlineMath>n</InlineMath>—a crucial function for RSA.
      </Callout>

      {/* TODO: Add inverse calculator visualization */}

      <SectionQuiz sectionId={6} questions={section06Quiz} title="Modular Inverse Quiz" />
    </LessonLayout>
  );
}
