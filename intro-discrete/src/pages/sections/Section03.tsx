import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Introduction */}
      <p>
        The main concepts in this section are the idea of integers being congruent modulo some
        fixed integer and the notion of congruence class. These concepts were fairly explicit
        in the work of Fermat and his contemporaries, and both concepts occur in Euler's later
        works in the mid-eighteenth century. The notation we use now was introduced by Carl
        Friedrich Gauss (1777–1855) in his <em>Disquisitiones Arithmeticae</em> published in 1801.
      </p>

      <h2>Congruence Modulo n</h2>

      <Definition title="Congruence" className="my-6">
        <p>
          Suppose that <InlineMath>n</InlineMath> is an integer greater than 1, and let{' '}
          <InlineMath>a, b</InlineMath> be integers. We say that <InlineMath>a</InlineMath> is{' '}
          <strong>congruent to</strong> <InlineMath>b</InlineMath> <strong>modulo</strong>{' '}
          <InlineMath>n</InlineMath> if <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>{' '}
          have the same remainder when divided by <InlineMath>n</InlineMath>. We write:
        </p>
        <MathBlock>{`a \\equiv b \\mod n`}</MathBlock>
        <p className="mt-2">
          Equivalently, <InlineMath>a \equiv b \mod n</InlineMath> if and only if{' '}
          <InlineMath>n</InlineMath> divides <InlineMath>a - b</InlineMath>.
        </p>
      </Definition>

      <Example title="Basic Congruences" className="my-6">
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{`-1 \\equiv 4 \\mod 5`}</InlineMath></li>
          <li><InlineMath>{`6 \\equiv 18 \\mod 12`}</InlineMath></li>
          <li><InlineMath>{`19 \\equiv -5 \\mod 12`}</InlineMath></li>
        </ul>
      </Example>

      <h2>Everyday Examples</h2>

      <p>
        The notion of congruence is actually familiar from everyday life:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Days of the week:</strong> Day <InlineMath>k</InlineMath> and day{' '}
          <InlineMath>m</InlineMath> fall on the same day of the week if{' '}
          <InlineMath>k \equiv m \mod 7</InlineMath>.
        </li>
        <li>
          <strong>Clock arithmetic:</strong> A 12-hour clock works modulo 12 (or 24 for a 24-hour clock).
        </li>
        <li>
          <strong>Angles:</strong> It is often appropriate to work modulo 360 degrees.
        </li>
      </ul>

      <h2>Properties of Congruence</h2>

      <Theorem title="Arithmetic with Congruences" className="my-6">
        <p>
          If <InlineMath>a, b, c</InlineMath> are integers and{' '}
          <InlineMath>a \equiv b \mod n</InlineMath>, then:
        </p>
        <MathBlock>{`\\begin{aligned}
a + c &\\equiv b + c \\mod n \\\\
a - c &\\equiv b - c \\mod n \\\\
ca &\\equiv cb \\mod n
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          However, the situation for <strong>division</strong> is more complicated, as we shall see.
        </p>
      </Theorem>

      <Example title="Sum of Two Squares" className="my-6">
        <p>
          We can prove that no number of the form <InlineMath>4k + 3</InlineMath> can be a sum of
          two squares.
        </p>
        <p className="mt-2">
          If <InlineMath>m \equiv 0, 1, 2, 3 \mod 4</InlineMath>, then{' '}
          <InlineMath>m^2 \equiv 0, 1, 4, 9 \mod 4</InlineMath>, which are congruent to{' '}
          <InlineMath>0, 1, 0, 1 \mod 4</InlineMath> respectively.
        </p>
        <p className="mt-2">
          If <InlineMath>k = n^2 + m^2</InlineMath>, then modulo 4, the possibilities for{' '}
          <InlineMath>k</InlineMath> are <InlineMath>{`(0 \\text{ or } 1) + (0 \\text{ or } 1)`}</InlineMath>,
          which gives <InlineMath>{`0, 1, \\text{ or } 2`}</InlineMath>.
        </p>
        <p className="mt-2">
          In particular, <InlineMath>k</InlineMath> cannot be congruent to 3 modulo 4.
        </p>
      </Example>

      <h2>Congruence Classes</h2>

      <Definition title="Congruence Class" className="my-6">
        <p>
          Fix an integer <InlineMath>n {'>'} 1</InlineMath> and let <InlineMath>a</InlineMath> be
          any integer. The <strong>congruence class</strong> of <InlineMath>a</InlineMath> modulo{' '}
          <InlineMath>n</InlineMath> is the set of all integers which are congruent to{' '}
          <InlineMath>a</InlineMath> modulo <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>{`[a]_n = \\{b : b \\equiv a \\mod n\\}`}</MathBlock>
        <p className="mt-2">
          The set of all congruence classes modulo <InlineMath>n</InlineMath> is called the{' '}
          <strong>set of integers modulo n</strong> and is denoted <InlineMath>\mathbb{'{Z}'}_n</InlineMath>.
        </p>
      </Definition>

      <p>
        Note that <InlineMath>[a]_n = [b]_n</InlineMath> if and only if{' '}
        <InlineMath>a \equiv b \mod n</InlineMath>.
      </p>

      <Example title="Congruence Classes" className="my-6">
        <p><strong>When n = 2:</strong></p>
        <p>
          There are two congruence classes: <InlineMath>[0]_2</InlineMath> (the set of even integers)
          and <InlineMath>[1]_2</InlineMath> (the set of odd integers).
        </p>
        <p className="mt-3"><strong>When n = 10:</strong></p>
        <p>
          The positive integers in a given congruence class are those which have the same last
          digit when written in base 10.
        </p>
      </Example>

      <p>
        Since every element of <InlineMath>\mathbb{'{Z}'}_n</InlineMath> may be represented in
        infinitely many ways, it is useful to fix a set of <strong>standard representatives</strong>:
        these are usually taken to be the integers from 0 to <InlineMath>n - 1</InlineMath>. Thus:
      </p>
      <MathBlock>{`\\mathbb{Z}_n = \\{[0]_n, [1]_n, [2]_n, \\ldots, [n-2]_n, [n-1]_n\\}`}</MathBlock>

      <h2>Arithmetic on Congruence Classes</h2>

      <Definition title="Addition and Multiplication in Z_n" className="my-6">
        <p>
          Fix an integer <InlineMath>n {'>'} 1</InlineMath> and let <InlineMath>a, b</InlineMath> be
          any integers. Define the <strong>sum</strong> and <strong>product</strong> of the
          congruence classes of <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> by:
        </p>
        <MathBlock>{`\\begin{aligned}
[a]_n + [b]_n &= [a + b]_n \\\\
[a]_n \\times [b]_n &= [a \\times b]_n
\\end{aligned}`}</MathBlock>
      </Definition>

      <Theorem
        title="Well-Defined Operations"
        className="my-6"
        proof={
          <>
            <p><strong>(i) Addition:</strong></p>
            <p>
              Since <InlineMath>[a]_n = [c]_n</InlineMath>,{' '}
              <InlineMath>n</InlineMath> divides <InlineMath>c - a</InlineMath>. So we can write{' '}
              <InlineMath>c = a + kn</InlineMath> for some integer <InlineMath>k</InlineMath>.
            </p>
            <MathBlock>{`[c + b]_n = [a + kn + b]_n = [a + b + kn]_n = [a + b]_n`}</MathBlock>
            <p className="mt-3"><strong>(ii) Multiplication:</strong></p>
            <p>With the same notation:</p>
            <MathBlock>{`[cb]_n = [(a + kn)b]_n = [ab + nkb]_n = [ab]_n`}</MathBlock>
          </>
        }
      >
        <p>
          Let <InlineMath>n</InlineMath> be an integer greater than 1 and let{' '}
          <InlineMath>a, b, c</InlineMath> be any integers. Suppose that{' '}
          <InlineMath>[a]_n = [c]_n</InlineMath>. Then:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>[a + b]_n = [c + b]_n</InlineMath></li>
          <li><InlineMath>[ab]_n = [cb]_n</InlineMath></li>
        </ol>
      </Theorem>

      <Example title="Computing in Z_11" className="my-6">
        <p>
          Show that 11 divides <InlineMath>10! + 1</InlineMath>. We reduce modulo 11 as we compute:
        </p>
        <MathBlock>{`\\begin{aligned}
2 \\times 3 \\times 4 &= 24 \\equiv 2 \\mod 11 \\\\
6! &\\equiv 2 \\times 5 \\times 6 \\equiv 60 \\equiv 5 \\mod 11 \\\\
7! &\\equiv 5 \\times 7 \\equiv 35 \\equiv 2 \\mod 11 \\\\
8! &\\equiv 2 \\times 8 \\equiv 16 \\equiv 5 \\mod 11 \\\\
10! &\\equiv 5 \\times 9 \\times 10 \\equiv 5 \\times (-2) \\times (-1) \\equiv 10 \\mod 11
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Therefore <InlineMath>10! + 1 \equiv 10 + 1 \equiv 0 \mod 11</InlineMath>.
        </p>
      </Example>

      <h2>Addition and Multiplication Tables</h2>

      <p>
        We can make addition and multiplication tables for <InlineMath>\mathbb{'{Z}'}_n</InlineMath>.
        Here are the tables for <InlineMath>\mathbb{'{Z}'}_8</InlineMath>:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-center text-dark-200 mb-3 font-semibold">Addition in Z₈</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-dark-200 font-mono">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="p-2 text-primary-400">+</th>
                  {[0,1,2,3,4,5,6,7].map(i => <th key={i} className="p-2">{i}</th>)}
                </tr>
              </thead>
              <tbody>
                {[0,1,2,3,4,5,6,7].map(i => (
                  <tr key={i} className="border-b border-dark-700">
                    <td className="p-2 text-primary-400 font-semibold">{i}</td>
                    {[0,1,2,3,4,5,6,7].map(j => <td key={j} className="p-2 text-center">{(i+j)%8}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-center text-dark-200 mb-3 font-semibold">Multiplication in Z₈</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-dark-200 font-mono">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="p-2 text-primary-400">×</th>
                  {[0,1,2,3,4,5,6,7].map(i => <th key={i} className="p-2">{i}</th>)}
                </tr>
              </thead>
              <tbody>
                {[0,1,2,3,4,5,6,7].map(i => (
                  <tr key={i} className="border-b border-dark-700">
                    <td className="p-2 text-primary-400 font-semibold">{i}</td>
                    {[0,1,2,3,4,5,6,7].map(j => <td key={j} className="p-2 text-center">{(i*j)%8}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h2>Invertible Elements and Zero-Divisors</h2>

      <Definition title="Invertible Elements and Zero-Divisors" className="my-6">
        <p>
          Fix an integer <InlineMath>n {'>'} 1</InlineMath>, and let <InlineMath>a</InlineMath> be
          any integer.
        </p>
        <p className="mt-2">
          We say that <InlineMath>[a]_n</InlineMath> is <strong>invertible</strong> (or{' '}
          <InlineMath>a</InlineMath> is invertible modulo <InlineMath>n</InlineMath>) if there is
          an integer <InlineMath>b</InlineMath> such that:
        </p>
        <MathBlock>{`[a]_n[b]_n = [1]_n`}</MathBlock>
        <p>
          In this case, <InlineMath>[b]_n</InlineMath> is the <strong>inverse</strong> of{' '}
          <InlineMath>[a]_n</InlineMath>, written <InlineMath>[b]_n = [a]_n^{'{-1}'}</InlineMath>.
        </p>
        <p className="mt-3">
          We say that a non-zero congruence class <InlineMath>[a]_n</InlineMath> is a{' '}
          <strong>zero-divisor</strong> if there exists an integer <InlineMath>b</InlineMath> with:
        </p>
        <MathBlock>{`[b]_n \\neq [0]_n \\quad \\text{and} \\quad [a]_n[b]_n = [0]_n`}</MathBlock>
      </Definition>

      <Example title="Invertibles and Zero-Divisors in Z₈" className="my-6">
        <p>
          In <InlineMath>\mathbb{'{Z}'}_8</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>[5]_8</InlineMath> has a multiplicative inverse:{' '}
            <InlineMath>[5]_8 \cdot [5]_8 = [25]_8 = [1]_8</InlineMath>
          </li>
          <li>
            <InlineMath>[2]_8</InlineMath> is a zero-divisor:{' '}
            <InlineMath>[2]_8 \cdot [4]_8 = [0]_8</InlineMath>
          </li>
        </ul>
      </Example>

      <Theorem
        title="Criterion for Invertibility"
        className="my-6"
        proof={
          <>
            <p>
              Suppose first that <InlineMath>[a]</InlineMath> has an inverse,{' '}
              <InlineMath>[k]</InlineMath> say. So <InlineMath>[a][k] = [1]</InlineMath>, hence{' '}
              <InlineMath>ak \equiv 1 \mod n</InlineMath>, that is,{' '}
              <InlineMath>n</InlineMath> divides <InlineMath>ak - 1</InlineMath>. So{' '}
              <InlineMath>ak - nt = 1</InlineMath> for some <InlineMath>t</InlineMath>, which by
              Corollary 1.1.3 means <InlineMath>\gcd(a, n) = 1</InlineMath>.
            </p>
            <p className="mt-2">
              Conversely, suppose <InlineMath>\gcd(a, n) = 1</InlineMath> and let{' '}
              <InlineMath>r, s</InlineMath> be integers such that{' '}
              <InlineMath>ar + ns = 1</InlineMath>. Then{' '}
              <InlineMath>ar - 1</InlineMath> is divisible by <InlineMath>n</InlineMath>, so{' '}
              <InlineMath>ar \equiv 1 \mod n</InlineMath>, giving{' '}
              <InlineMath>[a][r] = [1]</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>n \geq 2</InlineMath> and let <InlineMath>a</InlineMath> be any integer.
          Then <InlineMath>[a]_n</InlineMath> has an inverse if and only if{' '}
          <InlineMath>\gcd(a, n) = 1</InlineMath>.
        </p>
        <p className="mt-2">
          In fact, if <InlineMath>r</InlineMath> and <InlineMath>s</InlineMath> are integers such that{' '}
          <InlineMath>ar + ns = 1</InlineMath>, then the inverse of{' '}
          <InlineMath>[a]_n</InlineMath> is <InlineMath>[r]_n</InlineMath>.
        </p>
      </Theorem>

      <Example title="Finding Inverses" className="my-6">
        <p><strong>Example 1:</strong> From Section 1.1, we know that:</p>
        <MathBlock>{`1 = -91 \\cdot 507 + 118 \\cdot 391`}</MathBlock>
        <p>So the inverse of 391 modulo 507 is 118.</p>

        <p className="mt-4"><strong>Example 2:</strong> To find the inverse of 8 modulo 11:</p>
        <p>
          Look for a multiple of 11 plus 1 that is divisible by 8:{' '}
          <InlineMath>55 + 1 = 56 = 7 \times 8</InlineMath>.
        </p>
        <p>So the inverse of 8 modulo 11 is 7.</p>

        <p className="mt-4"><strong>Example 3:</strong></p>
        <p>
          Since <InlineMath>11^2 = 121 \equiv 1 \mod 20</InlineMath>,{' '}
          <InlineMath>[11]_{'20'}</InlineMath> is its own inverse:{' '}
          <InlineMath>[11]_{'20'}^{'{-1}'} = [11]_{'20'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="Cancellation Law" className="my-6">
        <p>
          Let <InlineMath>n \geq 2</InlineMath> and let <InlineMath>a, b, c</InlineMath> be any
          integers. If <InlineMath>n</InlineMath> and <InlineMath>c</InlineMath> are relatively
          prime and if <InlineMath>ac \equiv bc \mod n</InlineMath>, then{' '}
          <InlineMath>a \equiv b \mod n</InlineMath>.
        </p>
      </Theorem>

      <p>
        <strong>Warning:</strong> The assumption that <InlineMath>\gcd(c, n) = 1</InlineMath> is
        needed. For example, <InlineMath>30 \equiv 6 \mod 8</InlineMath>, but dividing by 2 would
        give <InlineMath>15 \equiv 3 \mod 8</InlineMath>, which is false.
      </p>

      <Theorem
        title="Invertible or Zero-Divisor"
        className="my-6"
        proof={
          <>
            <p>
              Suppose <InlineMath>[a]_n</InlineMath> is not invertible. By Theorem 1.4.3, the
              greatest common divisor <InlineMath>d</InlineMath> of <InlineMath>n</InlineMath> and{' '}
              <InlineMath>a</InlineMath> is greater than 1.
            </p>
            <p className="mt-2">
              Since <InlineMath>d</InlineMath> divides both, we have{' '}
              <InlineMath>a = kd</InlineMath> and <InlineMath>n = td</InlineMath> where{' '}
              <InlineMath>t</InlineMath> is a positive integer less than <InlineMath>n</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>at = ktd</InlineMath> is divisible by <InlineMath>n</InlineMath>,
              so <InlineMath>[a]_n[t]_n = [0]_n</InlineMath>. Since{' '}
              <InlineMath>[t]_n \neq [0]_n</InlineMath>, <InlineMath>[a]_n</InlineMath> is a zero-divisor.
            </p>
            <p className="mt-2">
              To see that an element cannot be both: if <InlineMath>[a]_n</InlineMath> is invertible
              and <InlineMath>[a]_n[b]_n = [0]_n</InlineMath>, multiply both sides by{' '}
              <InlineMath>[a]_n^{'{-1}'}</InlineMath> to get <InlineMath>[b]_n = [0]_n</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>n</InlineMath> be an integer greater than 1. Then each non-zero element
          of <InlineMath>\mathbb{'{Z}'}_n</InlineMath> is either invertible or a zero-divisor,
          but not both.
        </p>
      </Theorem>

      <Theorem title="Primes Give Fields" className="my-6">
        <p>
          Let <InlineMath>p</InlineMath> be a prime. Then every non-zero element of{' '}
          <InlineMath>\mathbb{'{Z}'}_p</InlineMath> is invertible.
        </p>
      </Theorem>

      <h2>The Group of Units G_n</h2>

      <Definition title="The Set G_n" className="my-6">
        <p>
          Let <InlineMath>n</InlineMath> be an integer greater than 1. We denote by{' '}
          <InlineMath>G_n</InlineMath> (some authors write <InlineMath>\mathbb{'{Z}'}_n^*</InlineMath>)
          the set of invertible congruence classes of <InlineMath>\mathbb{'{Z}'}_n</InlineMath>.
        </p>
        <p className="mt-2">
          By Theorem 1.4.3, <InlineMath>[a]_n</InlineMath> is in <InlineMath>G_n</InlineMath> if
          and only if <InlineMath>a</InlineMath> is relatively prime to <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Closure Under Multiplication" className="my-6">
        <p>
          Let <InlineMath>n \geq 2</InlineMath>. The product of any two elements of{' '}
          <InlineMath>G_n</InlineMath> is in <InlineMath>G_n</InlineMath>.
        </p>
      </Theorem>

      <Example title="The Multiplication Table of G₂₀" className="my-6">
        <p>
          When <InlineMath>n = 20</InlineMath>, <InlineMath>G_n</InlineMath> consists of the classes:
        </p>
        <MathBlock>{`[1], [3], [7], [9], [11], [13], [17], [19]`}</MathBlock>
        <p className="mt-2">These are the integers from 1 to 19 that are relatively prime to 20.</p>

        <div className="overflow-x-auto mt-4">
          <table className="text-sm text-dark-200 font-mono mx-auto">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="p-2 text-primary-400">×</th>
                <th className="p-2">1</th><th className="p-2">3</th><th className="p-2">7</th>
                <th className="p-2">9</th><th className="p-2">11</th><th className="p-2">13</th>
                <th className="p-2">17</th><th className="p-2">19</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">1</td>
                <td className="p-2">1</td><td className="p-2">3</td><td className="p-2">7</td>
                <td className="p-2">9</td><td className="p-2">11</td><td className="p-2">13</td>
                <td className="p-2">17</td><td className="p-2">19</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">3</td>
                <td className="p-2">3</td><td className="p-2">9</td><td className="p-2">1</td>
                <td className="p-2">7</td><td className="p-2">13</td><td className="p-2">19</td>
                <td className="p-2">11</td><td className="p-2">17</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">7</td>
                <td className="p-2">7</td><td className="p-2">1</td><td className="p-2">9</td>
                <td className="p-2">3</td><td className="p-2">17</td><td className="p-2">11</td>
                <td className="p-2">19</td><td className="p-2">13</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">9</td>
                <td className="p-2">9</td><td className="p-2">7</td><td className="p-2">3</td>
                <td className="p-2">1</td><td className="p-2">19</td><td className="p-2">17</td>
                <td className="p-2">13</td><td className="p-2">11</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">11</td>
                <td className="p-2">11</td><td className="p-2">13</td><td className="p-2">17</td>
                <td className="p-2">19</td><td className="p-2">1</td><td className="p-2">3</td>
                <td className="p-2">7</td><td className="p-2">9</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">13</td>
                <td className="p-2">13</td><td className="p-2">19</td><td className="p-2">11</td>
                <td className="p-2">17</td><td className="p-2">3</td><td className="p-2">9</td>
                <td className="p-2">1</td><td className="p-2">7</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">17</td>
                <td className="p-2">17</td><td className="p-2">11</td><td className="p-2">19</td>
                <td className="p-2">13</td><td className="p-2">7</td><td className="p-2">1</td>
                <td className="p-2">9</td><td className="p-2">3</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="p-2 text-primary-400">19</td>
                <td className="p-2">19</td><td className="p-2">17</td><td className="p-2">13</td>
                <td className="p-2">11</td><td className="p-2">9</td><td className="p-2">7</td>
                <td className="p-2">3</td><td className="p-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-dark-400">
          Observe how the 8×8 table breaks into four 4×4 blocks. We shall see later (in Section 5.3)
          why this happens.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Two integers are <strong>congruent modulo n</strong> if they have the same remainder
              when divided by <InlineMath>n</InlineMath>, equivalently if <InlineMath>n</InlineMath>{' '}
              divides their difference.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              A <strong>congruence class</strong> <InlineMath>[a]_n</InlineMath> is the set of all
              integers congruent to <InlineMath>a</InlineMath> modulo <InlineMath>n</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The set <InlineMath>\mathbb{'{Z}'}_n</InlineMath> has exactly{' '}
              <InlineMath>n</InlineMath> elements and inherits arithmetic operations from{' '}
              <InlineMath>\mathbb{'{Z}'}</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <InlineMath>[a]_n</InlineMath> is <strong>invertible</strong> if and only if{' '}
              <InlineMath>\gcd(a, n) = 1</InlineMath>. The inverse can be found using the
              Extended Euclidean Algorithm.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Every non-zero element of <InlineMath>\mathbb{'{Z}'}_n</InlineMath> is either
              invertible or a zero-divisor. If <InlineMath>p</InlineMath> is prime, every non-zero
              element of <InlineMath>\mathbb{'{Z}'}_p</InlineMath> is invertible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              The set <InlineMath>G_n</InlineMath> of invertible elements is closed under
              multiplication and forms the <strong>group of units</strong>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
