import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section05Quiz } from '@/data/quizzes';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Finding Common Ground</h2>

      <p>
        The Greatest Common Divisor (GCD) is one of the oldest and most important 
        algorithms in mathematics. Dating back to Euclid around 300 BCE, it remains 
        fundamental to modern cryptography—particularly for computing modular inverses.
      </p>

      <Definition title="Greatest Common Divisor">
        <p>
          The <strong>greatest common divisor</strong> of two integers <InlineMath>a</InlineMath> and{' '}
          <InlineMath>b</InlineMath>, written <InlineMath>{'\\gcd(a, b)'}</InlineMath>, is the largest positive 
          integer that divides both <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
        </p>
        <MathBlock>
          {`\\gcd(a, b) = \\max\\{d > 0 : d \\mid a \\text{ and } d \\mid b\\}`}
        </MathBlock>
      </Definition>

      <h2>The Euclidean Algorithm</h2>

      <p>
        Euclid's brilliant insight was that finding the GCD can be reduced to a series 
        of simpler problems. The key observation is:
      </p>

      <MathBlock>
        {`\\gcd(a, b) = \\gcd(b, a \\mod b)`}
      </MathBlock>

      <p>
        This works because any common divisor of <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> must 
        also divide <InlineMath>{'a \\mod b'}</InlineMath> (since <InlineMath>{'a \\mod b = a - qb'}</InlineMath> for 
        some quotient <InlineMath>q</InlineMath>).
      </p>

      <Callout type="info">
        <strong>The Algorithm:</strong> Keep replacing <InlineMath>(a, b)</InlineMath> with{' '}
        <InlineMath>{'(b, a \\mod b)'}</InlineMath> until you reach <InlineMath>{'(d, 0)'}</InlineMath>. 
        Then <InlineMath>{'d = \\gcd(a, b)'}</InlineMath>.
      </Callout>

      <Example title="Computing GCD(252, 105)">
        <p>Let's trace through the Euclidean Algorithm step by step:</p>
        <div className="mt-4 space-y-2 font-mono text-sm">
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Step 1:</span>
            <span><InlineMath>{'\\gcd(252, 105)'}</InlineMath></span>
            <span className="text-dark-500">→</span>
            <span>252 = 2 × 105 + 42</span>
          </div>
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Step 2:</span>
            <span><InlineMath>{'\\gcd(105, 42)'}</InlineMath></span>
            <span className="text-dark-500">→</span>
            <span>105 = 2 × 42 + 21</span>
          </div>
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Step 3:</span>
            <span><InlineMath>{'\\gcd(42, 21)'}</InlineMath></span>
            <span className="text-dark-500">→</span>
            <span>42 = 2 × 21 + 0</span>
          </div>
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Result:</span>
            <span><InlineMath>{'\\gcd(21, 0) = 21'}</InlineMath></span>
          </div>
        </div>
        <p className="mt-4">
          Therefore, <InlineMath>{'\\gcd(252, 105) = 21'}</InlineMath>.
        </p>
      </Example>

      <h2>The Extended Euclidean Algorithm</h2>

      <p>
        The <strong>Extended Euclidean Algorithm</strong> goes further: it finds integers{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> such that:
      </p>

      <MathBlock>
        {`ax + by = \\gcd(a, b)`}
      </MathBlock>

      <p>
        This "back-substitution" through the algorithm is the key to finding modular 
        inverses, which we'll need for RSA encryption.
      </p>

      <Example title="Extended GCD: Finding x and y">
        <p>
          Continuing our example, we can work backwards to express{' '}
          <InlineMath>21 = 252x + 105y</InlineMath>:
        </p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p>From Step 2: <InlineMath>{`21 = 105 - 2 \\times 42`}</InlineMath></p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p>From Step 1: <InlineMath>{`42 = 252 - 2 \\times 105`}</InlineMath></p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p>Substituting: <InlineMath>{'21 = 105 - 2(252 - 2 \\times 105)'}</InlineMath></p>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
            <p>Simplifying: <InlineMath>{'21 = 5 \\times 105 + (-2) \\times 252'}</InlineMath></p>
          </div>
        </div>
        <p className="mt-4">
          So <InlineMath>x = -2</InlineMath> and <InlineMath>y = 5</InlineMath>. You can verify:{' '}
          <InlineMath>{'252(-2) + 105(5) = -504 + 525 = 21'}</InlineMath> ✓
        </p>
      </Example>

      <Theorem
        title="Bézout's Identity"
        proof={
          <>
            <p>
              Consider the set <InlineMath>{'S = \\{ax + by : x, y \\in \\mathbb{Z}, ax + by > 0\\}'}</InlineMath>.
            </p>
            <p className="mt-2">
              This set is non-empty (take <InlineMath>x = a, y = 0</InlineMath> if <InlineMath>{'a > 0'}</InlineMath>), 
              so by the Well-Ordering Principle, <InlineMath>S</InlineMath> has a smallest element{' '}
              <InlineMath>{'d = as + bt'}</InlineMath>.
            </p>
            <p className="mt-2">
              We claim <InlineMath>{'d = \\gcd(a, b)'}</InlineMath>. First, divide <InlineMath>a</InlineMath> by{' '}
              <InlineMath>d</InlineMath>: we get <InlineMath>a = qd + r</InlineMath> where <InlineMath>{'0 \\leq r < d'}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'r = a - qd = a - q(as + bt) = a(1 - qs) + b(-qt)'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'r > 0'}</InlineMath>, then <InlineMath>{'r \\in S'}</InlineMath> contradicts <InlineMath>d</InlineMath> being 
              smallest. So <InlineMath>r = 0</InlineMath>, meaning <InlineMath>{'d \\mid a'}</InlineMath>. Similarly,{' '}
              <InlineMath>{'d \\mid b'}</InlineMath>.
            </p>
            <p className="mt-2">
              Finally, any common divisor <InlineMath>c</InlineMath> of <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> must 
              divide <InlineMath>{'d = as + bt'}</InlineMath>, so <InlineMath>{'c \\leq d'}</InlineMath>. Thus{' '}
              <InlineMath>{'d = \\gcd(a, b)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> (not both zero), there exist 
          integers <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> such that:
        </p>
        <MathBlock>
          {`ax + by = \\gcd(a, b)`}
        </MathBlock>
        <p className="mt-2">
          Moreover, <InlineMath>{'\\gcd(a, b)'}</InlineMath> is the smallest positive integer that can 
          be expressed in this form.
        </p>
      </Theorem>

      <h2>Why GCD Matters for Cryptography</h2>

      <p>
        The GCD is essential for cryptography because:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Modular inverses:</strong> The inverse of <InlineMath>a</InlineMath> mod <InlineMath>n</InlineMath>{' '}
          exists only when <InlineMath>{'\\gcd(a, n) = 1'}</InlineMath>
        </li>
        <li>
          <strong>Finding inverses:</strong> The Extended Euclidean Algorithm directly 
          computes modular inverses
        </li>
        <li>
          <strong>RSA key generation:</strong> We need to ensure <InlineMath>e</InlineMath> and{' '}
          <InlineMath>{'\\phi(n)'}</InlineMath> are coprime
        </li>
        <li>
          <strong>Efficiency:</strong> The algorithm runs in <InlineMath>{'O(\\log(\\min(a, b)))'}</InlineMath>{' '}
          steps—very fast even for huge numbers
        </li>
      </ul>

      <Callout type="success">
        <strong>Connection to Next Section:</strong> In the next section, we'll use the 
        Extended Euclidean Algorithm to compute modular inverses—the "division" operation 
        in modular arithmetic.
      </Callout>

      {/* TODO: Add GCD step visualization with interactive trace */}

      <SectionQuiz sectionId={5} questions={section05Quiz} title="GCD Quiz" />
    </LessonLayout>
  );
}
