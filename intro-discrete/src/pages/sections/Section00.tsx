import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Introduction */}
      <p>
        This chapter is concerned with the properties of the <strong>set of integers</strong>{' '}
        <InlineMath>{`\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}`}</InlineMath> under the
        arithmetic operations of addition and multiplication. We begin with the fundamental concepts
        of divisibility and the greatest common divisor.
      </p>

      <p>
        By the end of this section, you will be able to determine whether one integer divides another,
        compute greatest common divisors using the Euclidean algorithm, and express the GCD as a
        linear combination of two integers.
      </p>

      <h2>The Well-Ordering Principle</h2>

      <p>
        Before diving into divisibility, we need a foundational property of the positive integers
        that underlies many proofs in number theory.
      </p>

      <Definition title="Well-Ordering Principle" className="my-6">
        <p>
          Any non-empty set <InlineMath>X</InlineMath> of positive integers has a <strong>smallest element</strong>{' '}
          (meaning an element which is less than or equal to every other member of <InlineMath>X</InlineMath>).
        </p>
      </Definition>

      <p>
        This principle may seem obvious, but it is a key ingredient in many proofs. An equivalent
        statement is that one cannot have an unending, strictly decreasing sequence of positive integers.
      </p>

      <p>
        Note that the principle remains valid if we replace positive integers with natural numbers{' '}
        <InlineMath>{`\\mathbb{N} = \\{0, 1, 2, \\ldots\\}`}</InlineMath>. However, the principle fails for all
        integers <InlineMath>{`\\mathbb{Z}`}</InlineMath> or for positive rational numbers.
      </p>

      <h2>The Division Theorem</h2>

      <p>
        The Division Theorem formalizes what we do when we divide one positive integer by another:
        we get a quotient and a remainder. This seemingly simple idea is fundamental to number theory.
      </p>

      <Theorem
        title="Division Theorem"
        className="my-6"
        proof={
          <>
            <p>
              If <InlineMath>a {'>'} b</InlineMath>, take <InlineMath>q = 0</InlineMath> and{' '}
              <InlineMath>r = b</InlineMath>. So assume <InlineMath>a \leq b</InlineMath>.
            </p>
            <p>
              Consider the set of non-negative differences between <InlineMath>b</InlineMath> and
              integer multiples of <InlineMath>a</InlineMath>:
            </p>
            <MathBlock>{`D = \\{b - ak : b - ak \\geq 0 \\text{ and } k \\text{ is a natural number}\\}`}</MathBlock>
            <p>
              This set is non-empty since it contains <InlineMath>b = b - a \cdot 0</InlineMath>. By the
              well-ordering principle, <InlineMath>D</InlineMath> has a least element{' '}
              <InlineMath>r = b - aq</InlineMath> for some <InlineMath>q</InlineMath>.
            </p>
            <p>
              If <InlineMath>r</InlineMath> were not strictly less than <InlineMath>a</InlineMath>, then{' '}
              <InlineMath>r - a \geq 0</InlineMath>, and:
            </p>
            <MathBlock>{`r - a = (b - aq) - a = b - a(q + 1)`}</MathBlock>
            <p>
              This would be a member of <InlineMath>D</InlineMath> strictly less than <InlineMath>r</InlineMath>,
              contradicting the minimality of <InlineMath>r</InlineMath>. Hence{' '}
              <InlineMath>0 \leq r {'<'} a</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> be natural numbers with{' '}
          <InlineMath>a {'>'} 0</InlineMath>. Then there exist natural numbers <InlineMath>q</InlineMath>{' '}
          (the <strong>quotient</strong>) and <InlineMath>r</InlineMath> (the <strong>remainder</strong>) with{' '}
          <InlineMath>0 \leq r {'<'} a</InlineMath> such that:
        </p>
        <MathBlock>{`b = aq + r`}</MathBlock>
      </Theorem>

      <Example title="Division Examples" className="my-6">
        <p>
          <strong>Example 1:</strong> Divide 7 by 3.
        </p>
        <MathBlock>{`7 = 3 \\cdot 2 + 1`}</MathBlock>
        <p>Here <InlineMath>q = 2</InlineMath> and <InlineMath>r = 1</InlineMath>.</p>

        <p className="mt-4">
          <strong>Example 2:</strong> Divide 12 by 4.
        </p>
        <MathBlock>{`12 = 4 \\cdot 3 + 0`}</MathBlock>
        <p>Here <InlineMath>q = 3</InlineMath> and <InlineMath>r = 0</InlineMath> (4 divides 12 exactly).</p>

        <p className="mt-4">
          <strong>Example 3:</strong> Divide 175 by 11.
        </p>
        <MathBlock>{`175 = 11 \\cdot 15 + 10`}</MathBlock>
        <p>Here <InlineMath>q = 15</InlineMath> and <InlineMath>r = 10</InlineMath>.</p>
      </Example>

      <h2>Divisibility</h2>

      <Definition title="Divisibility" className="my-6">
        <p>
          Given two integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, we say that{' '}
          <InlineMath>a</InlineMath> <strong>divides</strong> <InlineMath>b</InlineMath> (written{' '}
          <InlineMath>a \mid b</InlineMath>) if there is an integer <InlineMath>k</InlineMath> such that{' '}
          <InlineMath>ak = b</InlineMath>.
        </p>
      </Definition>

      <p>
        For example, <InlineMath>7 \mid 42</InlineMath> because <InlineMath>7 \cdot 6 = 42</InlineMath>.
        However, 7 does not divide 40 (written <InlineMath>7 \nmid 40</InlineMath>).
      </p>

      <p>
        Notice that <InlineMath>a</InlineMath> divides <InlineMath>b</InlineMath> exactly when, in the
        Division Theorem, the remainder <InlineMath>r = 0</InlineMath>. Also, every integer divides 0
        (take <InlineMath>k = 0</InlineMath>).
      </p>

      <h2>Greatest Common Divisor</h2>

      <p>
        The <strong>greatest common divisor</strong> (or GCD) of two integers is the largest positive
        integer that divides both of them. But the GCD has a stronger property: every common divisor
        actually <em>divides</em> the GCD.
      </p>

      <Theorem
        title="Existence and Properties of GCD"
        className="my-6"
        proof={
          <>
            <p>
              Let <InlineMath>D</InlineMath> be the set of all positive integers of the form{' '}
              <InlineMath>as + bt</InlineMath> where <InlineMath>s</InlineMath> and{' '}
              <InlineMath>t</InlineMath> vary over all integers:
            </p>
            <MathBlock>{`D = \\{as + bt : s, t \\in \\mathbb{Z} \\text{ and } as + bt > 0\\}`}</MathBlock>
            <p>
              Since <InlineMath>a = a \cdot 1 + b \cdot 0</InlineMath> is in <InlineMath>D</InlineMath>,
              the set is non-empty. By the well-ordering principle, <InlineMath>D</InlineMath> has a
              least element <InlineMath>d = as + bt</InlineMath> for some integers{' '}
              <InlineMath>s, t</InlineMath>.
            </p>
            <p>
              <strong>Condition (ii):</strong> If <InlineMath>c</InlineMath> divides both{' '}
              <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, say{' '}
              <InlineMath>a = cg</InlineMath> and <InlineMath>b = ch</InlineMath>, then{' '}
              <InlineMath>c</InlineMath> divides <InlineMath>d = as + bt = cgs + cht = c(gs + ht)</InlineMath>.
            </p>
            <p>
              <strong>Condition (i):</strong> We show <InlineMath>d</InlineMath> divides{' '}
              <InlineMath>a</InlineMath>. By the Division Theorem:{' '}
              <InlineMath>a = dq + r</InlineMath> with <InlineMath>0 \leq r {'<'} d</InlineMath>.
            </p>
            <MathBlock>{`r = a - dq = a - (as + bt)q = a(1 - sq) + b(-tq)`}</MathBlock>
            <p>
              If <InlineMath>r {'>'} 0</InlineMath>, then <InlineMath>r \in D</InlineMath>, contradicting
              that <InlineMath>d</InlineMath> is minimal. So <InlineMath>r = 0</InlineMath>, meaning{' '}
              <InlineMath>d \mid a</InlineMath>. Similarly, <InlineMath>d \mid b</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Given positive integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, there
          exists a positive integer <InlineMath>d</InlineMath> such that:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>d</InlineMath> divides <InlineMath>a</InlineMath> and <InlineMath>d</InlineMath> divides <InlineMath>b</InlineMath></li>
          <li>If <InlineMath>c</InlineMath> is any positive integer dividing both <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, then <InlineMath>c</InlineMath> divides <InlineMath>d</InlineMath></li>
        </ol>
      </Theorem>

      <Definition title="Greatest Common Divisor" className="my-6">
        <p>
          The integer <InlineMath>d</InlineMath> satisfying conditions (i) and (ii) above is called the{' '}
          <strong>greatest common divisor</strong> (or <strong>GCD</strong>) of <InlineMath>a</InlineMath>{' '}
          and <InlineMath>b</InlineMath>, denoted <InlineMath>{`\\gcd(a, b)`}</InlineMath> or{' '}
          <InlineMath>(a, b)</InlineMath>.
        </p>
      </Definition>

      <p>
        For example: <InlineMath>(8, 12) = 4</InlineMath>, <InlineMath>(3, 21) = 3</InlineMath>,{' '}
        <InlineMath>(4, 15) = 1</InlineMath>, <InlineMath>(250, 486) = 2</InlineMath>.
      </p>

      <Theorem title="GCD as Linear Combination" className="my-6">
        <p>
          Let <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> be positive integers. Then their
          greatest common divisor <InlineMath>d = \gcd(a, b)</InlineMath> is the smallest positive
          <strong> integral linear combination</strong> of <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
          That is, <InlineMath>d = as + bt</InlineMath> for some integers <InlineMath>s</InlineMath> and <InlineMath>t</InlineMath>.
        </p>
      </Theorem>

      <Example title="GCD as Linear Combination" className="my-6">
        <p>
          The GCD of 12 and 30 is 6. We can express 6 as:
        </p>
        <MathBlock>{`6 = 30 \\cdot 1 - 12 \\cdot 2 = 30 - 24`}</MathBlock>
      </Example>

      <h2>The Euclidean Algorithm</h2>

      <p>
        The Euclidean Algorithm provides an efficient method to compute the GCD of any two positive
        integers. It dates back to Euclid's <em>Elements</em> (around 300 BC).
      </p>

      <Theorem title="Key Lemma for the Euclidean Algorithm" className="my-6">
        <p>
          Let <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> be natural numbers with{' '}
          <InlineMath>a</InlineMath> non-zero. If <InlineMath>b = aq + r</InlineMath> with{' '}
          <InlineMath>q</InlineMath> and <InlineMath>r</InlineMath> positive integers, then:
        </p>
        <MathBlock>{`\\gcd(b, a) = \\gcd(a, r)`}</MathBlock>
      </Theorem>

      <Theorem
        title="Euclidean Algorithm"
        className="my-6"
        proof={
          <>
            <p>
              Apply the Division Theorem repeatedly. Since{' '}
              <InlineMath>a, r_1, r_2, \ldots</InlineMath> is a decreasing sequence of positive
              integers, it must eventually terminate with some <InlineMath>r_n</InlineMath> that
              divides the previous remainder exactly.
            </p>
            <p>
              By the Key Lemma, applying it to each equation working backwards:
            </p>
            <MathBlock>{`\\gcd(b, a) = \\gcd(a, r_1) = \\gcd(r_1, r_2) = \\cdots = \\gcd(r_{n-1}, r_n) = r_n`}</MathBlock>
          </>
        }
      >
        <p>
          Let <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> be positive integers. If{' '}
          <InlineMath>a</InlineMath> divides <InlineMath>b</InlineMath>, then{' '}
          <InlineMath>\gcd(a, b) = a</InlineMath>. Otherwise, apply the Division Theorem repeatedly:
        </p>
        <MathBlock>{`\\begin{aligned}
b &= aq_1 + r_1 \\quad (0 < r_1 < a) \\\\
a &= r_1 q_2 + r_2 \\quad (0 < r_2 < r_1) \\\\
&\\vdots \\\\
r_{n-2} &= r_{n-1} q_n + r_n \\quad (0 < r_n < r_{n-1}) \\\\
r_{n-1} &= r_n q_{n+1}
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Then <InlineMath>r_n = \gcd(a, b)</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing GCD with the Euclidean Algorithm" className="my-6">
        <p>
          Find <InlineMath>\gcd(171, 30)</InlineMath>:
        </p>
        <MathBlock>{`\\begin{aligned}
171 &= 5 \\cdot 30 + 21 \\quad \\Rightarrow \\quad \\gcd(171, 30) = \\gcd(30, 21) \\\\
30 &= 1 \\cdot 21 + 9 \\quad \\Rightarrow \\quad \\gcd(30, 21) = \\gcd(21, 9) \\\\
21 &= 2 \\cdot 9 + 3 \\quad \\Rightarrow \\quad \\gcd(21, 9) = \\gcd(9, 3) \\\\
9 &= 3 \\cdot 3 + 0 \\quad \\Rightarrow \\quad \\gcd(9, 3) = 3
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Therefore, <InlineMath>\gcd(171, 30) = 3</InlineMath>.
        </p>
      </Example>

      <h3>Expressing the GCD as a Linear Combination</h3>

      <p>
        To express the GCD as a linear combination, work backwards through the Euclidean algorithm:
      </p>

      <Example title="GCD as Linear Combination via Back-Substitution" className="my-6">
        <p>
          Express <InlineMath>\gcd(171, 30) = 3</InlineMath> as a linear combination:
        </p>
        <MathBlock>{`\\begin{aligned}
3 &= 21 - 2 \\cdot 9 \\\\
&= 21 - 2(30 - 21) \\\\
&= 3 \\cdot 21 - 2 \\cdot 30 \\\\
&= 3(171 - 5 \\cdot 30) - 2 \\cdot 30 \\\\
&= 3 \\cdot 171 - 17 \\cdot 30
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>3 = 3 \cdot 171 + (-17) \cdot 30</InlineMath>.
        </p>
      </Example>

      <h2>Relatively Prime Integers</h2>

      <Definition title="Relatively Prime" className="my-6">
        <p>
          Two positive integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are said to be{' '}
          <strong>relatively prime</strong> (or <strong>coprime</strong>) if their greatest common
          divisor is 1: <InlineMath>\gcd(a, b) = 1</InlineMath>.
        </p>
      </Definition>

      <p>
        For example, 15 and 8 are relatively prime since <InlineMath>\gcd(15, 8) = 1</InlineMath>.
        Also, 507 and 391 are relatively prime.
      </p>

      <Theorem
        title="Properties of Relatively Prime Integers"
        className="my-6"
        proof={
          <>
            <p>
              <strong>(i)</strong> Since <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are
              relatively prime, there exist integers <InlineMath>r</InlineMath> and{' '}
              <InlineMath>s</InlineMath> such that <InlineMath>1 = ar + bs</InlineMath>.
              Multiply both sides by <InlineMath>c</InlineMath>:
            </p>
            <MathBlock>{`c = car + cbs`}</MathBlock>
            <p>
              Since <InlineMath>a</InlineMath> divides <InlineMath>bc</InlineMath>, it divides the
              right-hand side <InlineMath>car + cbs</InlineMath>, and hence divides{' '}
              <InlineMath>c</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>(ii)</strong> Using the same equation, since <InlineMath>a</InlineMath> divides{' '}
              <InlineMath>c</InlineMath>, we have <InlineMath>ab</InlineMath> divides{' '}
              <InlineMath>cbs</InlineMath>. Since <InlineMath>b</InlineMath> divides{' '}
              <InlineMath>c</InlineMath>, we have <InlineMath>ab</InlineMath> divides{' '}
              <InlineMath>car</InlineMath>. Thus <InlineMath>ab</InlineMath> divides{' '}
              <InlineMath>c = car + cbs</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>a</InlineMath>, <InlineMath>b</InlineMath>, <InlineMath>c</InlineMath> be
          positive integers with <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> relatively prime. Then:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>If <InlineMath>a</InlineMath> divides <InlineMath>bc</InlineMath>, then <InlineMath>a</InlineMath> divides <InlineMath>c</InlineMath></li>
          <li>If <InlineMath>a</InlineMath> divides <InlineMath>c</InlineMath> and <InlineMath>b</InlineMath> divides <InlineMath>c</InlineMath>, then <InlineMath>ab</InlineMath> divides <InlineMath>c</InlineMath></li>
        </ol>
      </Theorem>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 my-6">
        <p className="text-amber-200">
          <strong>Warning:</strong> Neither property holds without the assumption that{' '}
          <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are relatively prime.
          For example, <InlineMath>4 \mid 12</InlineMath> (that is, <InlineMath>4 \mid 6 \cdot 2</InlineMath>),
          but <InlineMath>4 \nmid 6</InlineMath> and <InlineMath>4 \nmid 2</InlineMath>.
        </p>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              The <strong>Well-Ordering Principle</strong> states that every non-empty set of positive
              integers has a smallest element.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              The <strong>Division Theorem</strong> says <InlineMath>b = aq + r</InlineMath> with{' '}
              <InlineMath>0 \leq r {'<'} a</InlineMath>. The integer <InlineMath>a</InlineMath> divides{' '}
              <InlineMath>b</InlineMath> exactly when <InlineMath>r = 0</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The <strong>GCD</strong> <InlineMath>\gcd(a, b)</InlineMath> is the largest integer dividing
              both <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, and every common divisor divides it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The <strong>Euclidean Algorithm</strong> computes the GCD by repeatedly applying the
              Division Theorem until the remainder is zero.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The GCD can always be expressed as a <strong>linear combination</strong>:{' '}
              <InlineMath>\gcd(a, b) = as + bt</InlineMath> for some integers <InlineMath>s, t</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              Two integers are <strong>relatively prime</strong> if <InlineMath>\gcd(a, b) = 1</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
