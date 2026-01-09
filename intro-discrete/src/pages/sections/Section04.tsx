import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Introduction */}
      <p>
        A <strong>linear congruence</strong> is an "equation" of the form{' '}
        <InlineMath>ax \equiv b \mod n</InlineMath> where <InlineMath>x</InlineMath> is an
        integer variable. Written in terms of congruence classes, this becomes the equation{' '}
        <InlineMath>[a]_n X = [b]_n</InlineMath> where a solution <InlineMath>X</InlineMath> is
        now a congruence class.
      </p>

      <p>
        Such an equation may have:
      </p>
      <ol className="list-decimal list-inside space-y-1 my-4">
        <li><strong>No solution</strong> (for example, <InlineMath>2x \equiv 1 \mod 4</InlineMath>)</li>
        <li><strong>Exactly one solution</strong> (for example, <InlineMath>2x \equiv 1 \mod 5</InlineMath>)</li>
        <li><strong>More than one solution</strong> (for example, <InlineMath>2x \equiv 0 \mod 4</InlineMath>)</li>
      </ol>

      <h2>Solvability of Linear Congruences</h2>

      <Theorem
        title="Linear Congruence Theorem"
        className="my-6"
        proof={
          <>
            <p><strong>Necessity:</strong></p>
            <p>
              Suppose there is a solution <InlineMath>c</InlineMath>. Then{' '}
              <InlineMath>ac \equiv b \mod n</InlineMath>, so{' '}
              <InlineMath>n</InlineMath> divides <InlineMath>ac - b</InlineMath>. Write{' '}
              <InlineMath>ac - b = nk</InlineMath>, giving <InlineMath>b = ac - nk</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>d = \gcd(a, n)</InlineMath> divides both <InlineMath>a</InlineMath>{' '}
              and <InlineMath>n</InlineMath>, it divides the right side, hence{' '}
              <InlineMath>d</InlineMath> divides <InlineMath>b</InlineMath>.
            </p>

            <p className="mt-4"><strong>Sufficiency:</strong></p>
            <p>
              Suppose <InlineMath>d</InlineMath> divides <InlineMath>b</InlineMath>, say{' '}
              <InlineMath>b = de</InlineMath>. Write <InlineMath>d = ak + nt</InlineMath> for some
              integers <InlineMath>k, t</InlineMath>. Multiply by <InlineMath>e</InlineMath>:
            </p>
            <MathBlock>{`b = ake + nte`}</MathBlock>
            <p>
              This gives <InlineMath>a(ke) \equiv b \mod n</InlineMath>, so{' '}
              <InlineMath>ke</InlineMath> is a solution.
            </p>

            <p className="mt-4"><strong>Number of solutions:</strong></p>
            <p>
              If <InlineMath>c</InlineMath> is a solution, dividing by <InlineMath>d</InlineMath>{' '}
              gives <InlineMath>(a/d)c \equiv b/d \mod (n/d)</InlineMath>. This congruence
              has a unique solution modulo <InlineMath>n/d</InlineMath>, which splits into{' '}
              <InlineMath>d</InlineMath> distinct congruence classes modulo <InlineMath>n</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The linear congruence <InlineMath>ax \equiv b \mod n</InlineMath> has solutions if and
          only if the greatest common divisor <InlineMath>d = \gcd(a, n)</InlineMath> divides{' '}
          <InlineMath>b</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>d</InlineMath> does divide <InlineMath>b</InlineMath>, there are{' '}
          <InlineMath>d</InlineMath> solutions up to congruence modulo <InlineMath>n</InlineMath>,
          and these solutions are all congruent modulo <InlineMath>n/d</InlineMath>.
        </p>
      </Theorem>

      <h2>Method for Solving Linear Congruences</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">
          Algorithm: Solving <InlineMath>ax \equiv b \mod n</InlineMath>
        </h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-200">
          <li>
            Calculate <InlineMath>d = \gcd(a, n)</InlineMath>.
          </li>
          <li>
            Test whether <InlineMath>d</InlineMath> divides <InlineMath>b</InlineMath>:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>If <InlineMath>d</InlineMath> does not divide <InlineMath>b</InlineMath>: <strong>no solution</strong></li>
              <li>If <InlineMath>d</InlineMath> divides <InlineMath>b</InlineMath>: there are <InlineMath>d</InlineMath> solutions mod <InlineMath>n</InlineMath></li>
            </ul>
          </li>
          <li>
            To find solutions, "divide the congruence by <InlineMath>d</InlineMath>" to get:
            <MathBlock>{`(a/d)x \\equiv (b/d) \\mod (n/d)`}</MathBlock>
            Since <InlineMath>\gcd(a/d, n/d) = 1</InlineMath>, this has a unique solution.
          </li>
          <li>
            Calculate the inverse <InlineMath>[e]_{'{n/d}'}</InlineMath> of{' '}
            <InlineMath>[a/d]_{'{n/d}'}</InlineMath>.
          </li>
          <li>
            Multiply to get <InlineMath>[x]_{'{n/d}'} = [e]_{'{n/d}'}[b/d]_{'{n/d}'}</InlineMath>.
          </li>
          <li>
            The solutions modulo <InlineMath>n</InlineMath> are the classes of:
            <MathBlock>{`c, \\, c + (n/d), \\, c + 2(n/d), \\, \\ldots, \\, c + (d-1)(n/d)`}</MathBlock>
          </li>
        </ol>
      </div>

      <Example title="Solving 6x ≡ 5 mod 17" className="my-6">
        <p>
          Since <InlineMath>\gcd(6, 17) = 1</InlineMath> and 1 divides 5, there is a unique
          solution modulo 17.
        </p>
        <p className="mt-2">
          We need <InlineMath>[6]_{'{17}'}^{'{-1}'}</InlineMath>. By inspection,{' '}
          <InlineMath>6 \times 3 = 18 \equiv 1 \mod 17</InlineMath>, so the inverse is 3.
        </p>
        <MathBlock>{`x \\equiv 3 \\times 5 \\equiv 15 \\mod 17`}</MathBlock>
        <p>The solution is <InlineMath>[15]_{'{17}'}</InlineMath>.</p>
      </Example>

      <Example title="Solving 6x ≡ 5 mod 15" className="my-6">
        <p>
          Since <InlineMath>\gcd(6, 15) = 3</InlineMath> and 3 does not divide 5,{' '}
          <strong>there is no solution</strong>.
        </p>
      </Example>

      <Example title="Solving 6x ≡ 9 mod 15" className="my-6">
        <p>
          Since <InlineMath>\gcd(6, 15) = 3</InlineMath> and 3 divides 9, there are{' '}
          <strong>three solutions</strong> modulo 15.
        </p>
        <p className="mt-2">Divide by 3:</p>
        <MathBlock>{`2x \\equiv 3 \\mod 5`}</MathBlock>
        <p>
          Since <InlineMath>\gcd(2, 5) = 1</InlineMath>, there is a unique solution mod 5.
          By inspection, <InlineMath>x \equiv 4 \mod 5</InlineMath>.
        </p>
        <p className="mt-2">
          The congruence class <InlineMath>[4]_5</InlineMath> splits into three classes modulo 15:
        </p>
        <MathBlock>{`[4]_{15}, \\, [9]_{15}, \\, [14]_{15}`}</MathBlock>
      </Example>

      <h2>The Chinese Remainder Theorem</h2>

      <p>
        Suppose we wish to find an integer which has remainder 3 when divided by 7, and
        remainder 6 when divided by 25. Is there such an integer, and if so, how do we find it?
      </p>

      <p>
        The Chinese Remainder Theorem provides the answer. This theorem may have been known
        to the eighth century Buddhist monk Yi Xing. It certainly appears in Qín Jiǔshào's
        <em> Shù shū jiǔ zhāng</em> (Mathematical Treatise in Nine Sections) of 1247.
      </p>

      <Theorem
        title="Chinese Remainder Theorem"
        className="my-6"
        proof={
          <>
            <p>
              Since <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath> are relatively prime,
              there exist integers <InlineMath>k</InlineMath> and <InlineMath>t</InlineMath> such that:
            </p>
            <MathBlock>{`mk + nt = 1`}</MathBlock>

            <p className="mt-3">
              <strong>Existence:</strong> Let <InlineMath>c = bmk + ant</InlineMath>. Then:
            </p>
            <MathBlock>{`c \\equiv ant \\mod m \\equiv a \\cdot 1 = a \\mod m`}</MathBlock>
            <p>(since <InlineMath>nt \equiv 1 \mod m</InlineMath>)</p>
            <p className="mt-2">Similarly, <InlineMath>c \equiv b \mod n</InlineMath>.</p>

            <p className="mt-3">
              <strong>Uniqueness:</strong> Suppose both <InlineMath>c</InlineMath> and{' '}
              <InlineMath>d</InlineMath> are solutions. Then{' '}
              <InlineMath>c - d \equiv 0 \mod m</InlineMath> and{' '}
              <InlineMath>c - d \equiv 0 \mod n</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath> are relatively prime,{' '}
              <InlineMath>c - d</InlineMath> is divisible by <InlineMath>mn</InlineMath>.
              Hence <InlineMath>c \equiv d \mod mn</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Suppose that <InlineMath>m \geq 2</InlineMath> and <InlineMath>n \geq 2</InlineMath> are
          relatively prime integers and that <InlineMath>a</InlineMath> and{' '}
          <InlineMath>b</InlineMath> are any integers. Then there is a simultaneous solution to
          the congruences:
        </p>
        <MathBlock>{`\\begin{aligned}
x &\\equiv a \\mod m \\\\
x &\\equiv b \\mod n
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          The solution is unique up to congruence mod <InlineMath>mn</InlineMath>.
        </p>
      </Theorem>

      <h2>Methods for Solving Simultaneous Congruences</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Method 1: Direct Formula</h4>
        <p className="text-dark-200">
          Given <InlineMath>x \equiv a \mod m</InlineMath> and{' '}
          <InlineMath>x \equiv b \mod n</InlineMath> with <InlineMath>\gcd(m, n) = 1</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-200">
          <li>Find integers <InlineMath>k, t</InlineMath> with <InlineMath>mk + nt = 1</InlineMath></li>
          <li>The solution is <InlineMath>c = bmk + ant \mod mn</InlineMath></li>
        </ol>
        <p className="mt-3 text-dark-300 text-sm">
          Note: "swop over" the coefficients when forming the solution!
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Method 2: Back-Substitution</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-200">
          <li>
            Write a solution to the first congruence as <InlineMath>x = a + mk</InlineMath>
          </li>
          <li>
            Substitute into the second congruence to get a congruence for <InlineMath>k</InlineMath>
          </li>
          <li>Solve for <InlineMath>k</InlineMath> and substitute back</li>
        </ol>
      </div>

      <Example title="Solving x ≡ 3 mod 7 and x ≡ 6 mod 25" className="my-6">
        <p><strong>Method 1:</strong></p>
        <p>Find a combination of 7 and 25 which equals 1:</p>
        <MathBlock>{`7(-7) + 25 \\times 2 = -49 + 50 = 1`}</MathBlock>
        <p>The solution is:</p>
        <MathBlock>{`c = 6 \\cdot 7 \\cdot (-7) + 3 \\cdot 25 \\cdot 2 = -294 + 150 = -144`}</MathBlock>
        <p>
          Converting to standard form: <InlineMath>-144 + 175 = 31</InlineMath>, so{' '}
          <InlineMath>x \equiv 31 \mod 175</InlineMath>.
        </p>

        <p className="mt-4"><strong>Method 2:</strong></p>
        <p>
          Solutions to the first congruence have the form <InlineMath>x = 3 + 7k</InlineMath>.
        </p>
        <p>Substituting into the second: <InlineMath>3 + 7k \equiv 6 \mod 25</InlineMath>.</p>
        <p>So <InlineMath>7k \equiv 3 \mod 25</InlineMath>.</p>
        <p>
          The inverse of 7 modulo 25 is 18 (since <InlineMath>7 \times 18 = 126 = 5 \times 25 + 1</InlineMath>).
        </p>
        <MathBlock>{`k \\equiv 3 \\times 18 \\equiv 54 \\equiv 4 \\mod 25`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`x = 3 + 7(4 + 25r) = 3 + 28 + 175r = 31 + 175r`}</MathBlock>
        <p>So <InlineMath>x \equiv 31 \mod 175</InlineMath>.</p>
      </Example>

      <h2>Systems of Three or More Congruences</h2>

      <p>
        The Chinese Remainder Theorem can be applied iteratively to solve systems of more than
        two congruences, provided the moduli are pairwise relatively prime.
      </p>

      <Example title="Three Simultaneous Congruences" className="my-6">
        <p>Solve:</p>
        <MathBlock>{`\\begin{aligned}
x &\\equiv 2 \\mod 7 \\\\
x &\\equiv 0 \\mod 9 \\\\
2x &\\equiv 6 \\mod 8
\\end{aligned}`}</MathBlock>

        <p className="mt-3"><strong>Step 1:</strong> Simplify the third congruence.</p>
        <p>
          Since <InlineMath>\gcd(2, 8) = 2</InlineMath> and 2 divides 6, we get two solutions:{' '}
          <InlineMath>x \equiv 3 \mod 4</InlineMath> (reducing to modulo 4).
        </p>

        <p className="mt-3"><strong>Step 2:</strong> Solve the first two congruences.</p>
        <p>
          Since <InlineMath>\gcd(7, 9) = 1</InlineMath>, we can apply CRT:{' '}
          <InlineMath>7 \cdot (-5) + 9 \cdot 4 = 1</InlineMath>.
        </p>
        <MathBlock>{`c = 0 \\cdot 7(-5) + 2 \\cdot 9 \\cdot 4 = 72 \\equiv 9 \\mod 63`}</MathBlock>

        <p className="mt-3"><strong>Step 3:</strong> Combine with the third congruence.</p>
        <p>We now solve:</p>
        <MathBlock>{`\\begin{aligned}
x &\\equiv 9 \\mod 63 \\\\
x &\\equiv 3 \\mod 4
\\end{aligned}`}</MathBlock>
        <p>
          We have <InlineMath>16 \cdot 4 - 1 \cdot 63 = 1</InlineMath>, giving:
        </p>
        <MathBlock>{`c = 9 \\cdot 16 \\cdot 4 - 3 \\cdot 1 \\cdot 63 = 576 - 189 = 387 \\equiv 135 \\mod 252`}</MathBlock>
        <p>
          The solution is <InlineMath>x \equiv 135 \mod 252</InlineMath>.
        </p>
      </Example>

      <h2>Non-Linear Congruences</h2>

      <p>
        Non-linear congruences can be much more difficult to solve. Here are some observations:
      </p>

      <Example title="Quadratic Congruence" className="my-6">
        <p>Consider <InlineMath>x^2 + 1 \equiv 0 \mod n</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            When <InlineMath>n = 3</InlineMath>: Testing <InlineMath>[0], [1], [2]</InlineMath> shows{' '}
            <InlineMath>x^2 + 1</InlineMath> is never 0 mod 3. <strong>No solutions.</strong>
          </li>
          <li>
            When <InlineMath>n = 5</InlineMath>: <InlineMath>[2]_5</InlineMath> and{' '}
            <InlineMath>[3]_5</InlineMath> are solutions since <InlineMath>4 + 1 \equiv 0</InlineMath>{' '}
            and <InlineMath>9 + 1 \equiv 0 \mod 5</InlineMath>.
          </li>
          <li>
            When <InlineMath>n = 65</InlineMath>: There are four solutions:{' '}
            <InlineMath>[\pm 8]_{'{65}'}</InlineMath> and <InlineMath>[\pm 18]_{'{65}'}</InlineMath>,
            corresponding to factorizations{' '}
            <InlineMath>x^2 + 1 \equiv (x + 8)(x - 8) \equiv (x + 18)(x - 18) \mod 65</InlineMath>.
          </li>
        </ul>
        <p className="mt-3">
          When <InlineMath>n</InlineMath> is prime, polynomial factorizations are unique (up to constants).
        </p>
      </Example>

      <Example title="Checking for Integer Roots" className="my-6">
        <p>
          To show <InlineMath>x^3 - x^2 + x + 1 = 0</InlineMath> has no integer roots:
        </p>
        <p className="mt-2">
          If <InlineMath>k</InlineMath> were an integer root, then reducing modulo any{' '}
          <InlineMath>n</InlineMath> would give a root in{' '}
          <InlineMath>\mathbb{'{Z}'}_n</InlineMath>.
        </p>
        <p className="mt-2">
          Checking modulo 3: <InlineMath>X^3 - X^2 + X + 1</InlineMath> with{' '}
          <InlineMath>[0], [1], [2]</InlineMath> gives values{' '}
          <InlineMath>[1], [2], [1]</InlineMath>—none is zero.
        </p>
        <p className="mt-2">
          Since there is no root modulo 3, there can be no integer root.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <InlineMath>ax \equiv b \mod n</InlineMath> has solutions iff{' '}
              <InlineMath>\gcd(a, n)</InlineMath> divides <InlineMath>b</InlineMath>. When solvable,
              there are exactly <InlineMath>\gcd(a, n)</InlineMath> solutions modulo{' '}
              <InlineMath>n</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              To solve, divide the congruence by <InlineMath>d = \gcd(a, n)</InlineMath>, find the
              inverse of <InlineMath>a/d</InlineMath> modulo <InlineMath>n/d</InlineMath>, then
              split the solution class.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Chinese Remainder Theorem:</strong> If <InlineMath>\gcd(m, n) = 1</InlineMath>,
              the system <InlineMath>x \equiv a \mod m</InlineMath>,{' '}
              <InlineMath>x \equiv b \mod n</InlineMath> has a unique solution modulo{' '}
              <InlineMath>mn</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              CRT can be applied iteratively to systems with pairwise relatively prime moduli.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Reducing a polynomial modulo <InlineMath>n</InlineMath> can detect the absence of
              integer roots: if no root mod <InlineMath>n</InlineMath>, then no integer root.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
