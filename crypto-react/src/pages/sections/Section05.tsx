import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';
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
          The <strong>greatest common divisor</strong> of two integers <Math>a</Math> and{' '}
          <Math>b</Math>, written <Math>{'\\gcd(a, b)'}</Math>, is the largest positive 
          integer that divides both <Math>a</Math> and <Math>b</Math>.
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
        This works because any common divisor of <Math>a</Math> and <Math>b</Math> must 
        also divide <Math>{'a \\mod b'}</Math> (since <Math>{'a \\mod b = a - qb'}</Math> for 
        some quotient <Math>q</Math>).
      </p>

      <Callout type="info">
        <strong>The Algorithm:</strong> Keep replacing <Math>(a, b)</Math> with{' '}
        <Math>{'(b, a \\mod b)'}</Math> until you reach <Math>{'(d, 0)'}</Math>. 
        Then <Math>{'d = \\gcd(a, b)'}</Math>.
      </Callout>

      <Example title="Computing GCD(252, 105)">
        <p>Let's trace through the Euclidean Algorithm step by step:</p>
        <div className="mt-4 space-y-2 font-mono text-sm">
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Step 1:</span>
            <span><Math>{'\\gcd(252, 105)'}</Math></span>
            <span className="text-dark-500">→</span>
            <span>252 = 2 × 105 + 42</span>
          </div>
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Step 2:</span>
            <span><Math>{'\\gcd(105, 42)'}</Math></span>
            <span className="text-dark-500">→</span>
            <span>105 = 2 × 42 + 21</span>
          </div>
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Step 3:</span>
            <span><Math>{'\\gcd(42, 21)'}</Math></span>
            <span className="text-dark-500">→</span>
            <span>42 = 2 × 21 + 0</span>
          </div>
          <div className="flex gap-4">
            <span className="text-dark-500 w-12">Result:</span>
            <span><Math>{'\\gcd(21, 0) = 21'}</Math></span>
          </div>
        </div>
        <p className="mt-4">
          Therefore, <Math>{'\\gcd(252, 105) = 21'}</Math>.
        </p>
      </Example>

      <h2>The Extended Euclidean Algorithm</h2>

      <p>
        The <strong>Extended Euclidean Algorithm</strong> goes further: it finds integers{' '}
        <Math>x</Math> and <Math>y</Math> such that:
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
          <Math>21 = 252x + 105y</Math>:
        </p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p>From Step 2: <Math>21 = 105 - 2 \times 42</Math></p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p>From Step 1: <Math>42 = 252 - 2 \times 105</Math></p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p>Substituting: <Math>{'21 = 105 - 2(252 - 2 \\times 105)'}</Math></p>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
            <p>Simplifying: <Math>{'21 = 5 \\times 105 + (-2) \\times 252'}</Math></p>
          </div>
        </div>
        <p className="mt-4">
          So <Math>x = -2</Math> and <Math>y = 5</Math>. You can verify:{' '}
          <Math>{'252(-2) + 105(5) = -504 + 525 = 21'}</Math> ✓
        </p>
      </Example>

      <Theorem
        title="Bézout's Identity"
        proof={
          <>
            <p>
              Consider the set <Math>{'S = \\{ax + by : x, y \\in \\mathbb{Z}, ax + by > 0\\}'}</Math>.
            </p>
            <p className="mt-2">
              This set is non-empty (take <Math>x = a, y = 0</Math> if <Math>{'a > 0'}</Math>), 
              so by the Well-Ordering Principle, <Math>S</Math> has a smallest element{' '}
              <Math>{'d = as + bt'}</Math>.
            </p>
            <p className="mt-2">
              We claim <Math>{'d = \\gcd(a, b)'}</Math>. First, divide <Math>a</Math> by{' '}
              <Math>d</Math>: we get <Math>a = qd + r</Math> where <Math>{'0 \\leq r < d'}</Math>.
            </p>
            <p className="mt-2">
              Then <Math>{'r = a - qd = a - q(as + bt) = a(1 - qs) + b(-qt)'}</Math>.
            </p>
            <p className="mt-2">
              If <Math>{'r > 0'}</Math>, then <Math>{'r \\in S'}</Math> contradicts <Math>d</Math> being 
              smallest. So <Math>r = 0</Math>, meaning <Math>{'d \\mid a'}</Math>. Similarly,{' '}
              <Math>{'d \\mid b'}</Math>.
            </p>
            <p className="mt-2">
              Finally, any common divisor <Math>c</Math> of <Math>a</Math> and <Math>b</Math> must 
              divide <Math>{'d = as + bt'}</Math>, so <Math>{'c \\leq d'}</Math>. Thus{' '}
              <Math>{'d = \\gcd(a, b)'}</Math>.
            </p>
          </>
        }
      >
        <p>
          For any integers <Math>a</Math> and <Math>b</Math> (not both zero), there exist 
          integers <Math>x</Math> and <Math>y</Math> such that:
        </p>
        <MathBlock>
          {`ax + by = \\gcd(a, b)`}
        </MathBlock>
        <p className="mt-2">
          Moreover, <Math>{'\\gcd(a, b)'}</Math> is the smallest positive integer that can 
          be expressed in this form.
        </p>
      </Theorem>

      <h2>Why GCD Matters for Cryptography</h2>

      <p>
        The GCD is essential for cryptography because:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Modular inverses:</strong> The inverse of <Math>a</Math> mod <Math>n</Math>{' '}
          exists only when <Math>{'\\gcd(a, n) = 1'}</Math>
        </li>
        <li>
          <strong>Finding inverses:</strong> The Extended Euclidean Algorithm directly 
          computes modular inverses
        </li>
        <li>
          <strong>RSA key generation:</strong> We need to ensure <Math>e</Math> and{' '}
          <Math>{'\\phi(n)'}</Math> are coprime
        </li>
        <li>
          <strong>Efficiency:</strong> The algorithm runs in <Math>{'O(\\log(\\min(a, b)))'}</Math>{' '}
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
