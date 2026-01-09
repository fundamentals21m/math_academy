import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2>Fermat's Little Theorem</h2>

      <p>
        After the Greeks and before Fermat, number theory lay dormant for
        centuries. Pierre de Fermat (1601-1665), a French lawyer and amateur
        mathematician, revived the subject with a stream of remarkable
        discoveries, communicated mostly through letters. His "little theorem"
        became a cornerstone of modern number theory and cryptography.
      </p>

      <Callout type="info">
        <strong>The Amateur Genius:</strong> Fermat never published his
        mathematical work formally. His theorems were scattered in letters
        to Mersenne, Pascal, and others, often without proofs. He claimed
        to have proofs that were "too long for the margin."
      </Callout>

      <h3>Modular Arithmetic</h3>

      <p>
        Fermat's insights are best understood through modular arithmetic—the
        mathematics of remainders:
      </p>

      <Definition title="Congruence Modulo n">
        <p>
          We write <InlineMath>{`a \\equiv b \\pmod{n}`}</InlineMath> (read
          "a is congruent to b modulo n") if <InlineMath>n</InlineMath> divides{' '}
          <InlineMath>{`a - b`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          Equivalently, <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>{' '}
          have the same remainder when divided by <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <Example title="Clock Arithmetic">
        <p>
          On a 12-hour clock, 14:00 and 2:00 are the same:{' '}
          <InlineMath>{`14 \\equiv 2 \\pmod{12}`}</InlineMath>.
        </p>
        <p className="mt-2">Similarly:</p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`17 \\equiv 2 \\pmod{5}`}</InlineMath> (both leave remainder 2)</li>
          <li><InlineMath>{`100 \\equiv 2 \\pmod{7}`}</InlineMath> (since 100 = 14×7 + 2)</li>
          <li><InlineMath>{`-3 \\equiv 4 \\pmod{7}`}</InlineMath> (since -3 + 7 = 4)</li>
        </ul>
      </Example>

      <h3>Fermat's Little Theorem</h3>

      <p>
        Fermat stated this theorem in a letter to Frénicle de Bessy in 1640:
      </p>

      <Theorem title="Fermat's Little Theorem">
        <p>
          If <InlineMath>p</InlineMath> is a prime and <InlineMath>a</InlineMath>{' '}
          is not divisible by <InlineMath>p</InlineMath>, then:
        </p>
        <MathBlock>
          {`a^{p-1} \\equiv 1 \\pmod{p}`}
        </MathBlock>
        <p className="mt-2">Equivalently, for any integer <InlineMath>a</InlineMath>:</p>
        <MathBlock>
          {`a^p \\equiv a \\pmod{p}`}
        </MathBlock>
      </Theorem>

      <Example title="Verification with p = 5">
        <p>Let's check with <InlineMath>p = 5</InlineMath> and various values of <InlineMath>a</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`2^4 = 16 \\equiv 1 \\pmod{5}`}</InlineMath> ✓</li>
          <li><InlineMath>{`3^4 = 81 \\equiv 1 \\pmod{5}`}</InlineMath> ✓</li>
          <li><InlineMath>{`4^4 = 256 \\equiv 1 \\pmod{5}`}</InlineMath> ✓</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Each calculation confirms that <InlineMath>{`a^{p-1} \\equiv 1`}</InlineMath>.
        </p>
      </Example>

      <h3>Euler's Generalization</h3>

      <p>
        Leonhard Euler proved Fermat's theorem (Fermat never published a proof)
        and generalized it to all moduli, not just primes:
      </p>

      <Definition title="Euler's Totient Function">
        <p>
          <InlineMath>{`\\phi(n)`}</InlineMath> = the count of integers from 1 to{' '}
          <InlineMath>n</InlineMath> that are relatively prime to{' '}
          <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-2">Examples:</p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`\\phi(5) = 4`}</InlineMath> (1, 2, 3, 4 are all coprime to 5)</li>
          <li><InlineMath>{`\\phi(6) = 2`}</InlineMath> (only 1 and 5 are coprime to 6)</li>
          <li><InlineMath>{`\\phi(p) = p-1`}</InlineMath> for any prime <InlineMath>p</InlineMath></li>
        </ul>
      </Definition>

      <Theorem title="Euler's Theorem">
        <p>
          If <InlineMath>{`\\gcd(a, n) = 1`}</InlineMath>, then:
        </p>
        <MathBlock>
          {`a^{\\phi(n)} \\equiv 1 \\pmod{n}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          When <InlineMath>n = p</InlineMath> is prime,{' '}
          <InlineMath>{`\\phi(p) = p - 1`}</InlineMath>, recovering Fermat's
          Little Theorem.
        </p>
      </Theorem>

      <h3>Applications</h3>

      <p>
        Fermat's Little Theorem has powerful applications in computation:
      </p>

      <Example title="Computing Large Powers">
        <p>
          To find the last digit of <InlineMath>7^{'{222}'}</InlineMath>
          (i.e., <InlineMath>{`7^{222} \\pmod{10}`}</InlineMath>):
        </p>
        <p className="mt-2">
          Since <InlineMath>{`\\phi(10) = 4`}</InlineMath> and{' '}
          <InlineMath>{`\\gcd(7, 10) = 1`}</InlineMath>:
        </p>
        <MathBlock>
          {`7^4 \\equiv 1 \\pmod{10}`}
        </MathBlock>
        <p className="mt-2">
          Since <InlineMath>222 = 4 \times 55 + 2</InlineMath>:
        </p>
        <MathBlock>
          {`7^{222} = (7^4)^{55} \\cdot 7^2 \\equiv 1^{55} \\cdot 49 \\equiv 9 \\pmod{10}`}
        </MathBlock>
      </Example>

      <Callout type="note">
        <strong>Modular Inverses:</strong> Fermat's theorem gives a way to find
        multiplicative inverses: if <InlineMath>p</InlineMath> is prime and{' '}
        <InlineMath>{`\\gcd(a, p) = 1`}</InlineMath>, then{' '}
        <InlineMath>{`a^{-1} \\equiv a^{p-2} \\pmod{p}`}</InlineMath>.
      </Callout>

      <h3>RSA Cryptography</h3>

      <p>
        The most famous modern application is the RSA encryption algorithm,
        which secures internet communications:
      </p>

      <Example title="RSA Key Idea">
        <p>RSA uses two large primes <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath>:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            Compute <InlineMath>n = pq</InlineMath> and{' '}
            <InlineMath>{`\\phi(n) = (p-1)(q-1)`}</InlineMath>
          </li>
          <li>
            Choose public exponent <InlineMath>e</InlineMath> and find private
            exponent <InlineMath>d</InlineMath> with{' '}
            <InlineMath>{`ed \\equiv 1 \\pmod{\\phi(n)}`}</InlineMath>
          </li>
          <li>
            Encryption: <InlineMath>{`c \\equiv m^e \\pmod{n}`}</InlineMath>
          </li>
          <li>
            Decryption: <InlineMath>{`m \\equiv c^d \\pmod{n}`}</InlineMath>
          </li>
        </ol>
        <p className="mt-2 text-dark-400">
          Euler's theorem guarantees that decryption recovers the message:{' '}
          <InlineMath>{`(m^e)^d = m^{ed} \\equiv m \\pmod{n}`}</InlineMath>.
        </p>
      </Example>

      <h3>Primality Testing</h3>

      <p>
        Fermat's theorem also provides a test for compositeness:
      </p>

      <Theorem title="Fermat Primality Test">
        <p>
          If <InlineMath>{`a^{n-1} \\not\\equiv 1 \\pmod{n}`}</InlineMath> for
          some <InlineMath>a</InlineMath> with <InlineMath>{`\\gcd(a, n) = 1`}</InlineMath>,
          then <InlineMath>n</InlineMath> is definitely composite.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Carmichael Numbers:</strong> Some composite numbers pass the
        Fermat test for all bases—these are called Carmichael numbers. The
        smallest is 561 = 3 × 11 × 17. More sophisticated tests (Miller-Rabin)
        are needed for reliable primality testing.
      </Callout>

      <h3>Fermat's Legacy</h3>

      <p>
        Fermat's little theorem launched modern number theory. His other
        contributions include:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Fermat primes:</strong> Primes of the form{' '}
          <InlineMath>{`2^{2^n} + 1`}</InlineMath>, connected to constructibility
          of regular polygons.
        </li>
        <li>
          <strong>Sums of two squares:</strong> A prime <InlineMath>p</InlineMath>{' '}
          is a sum of two squares iff <InlineMath>{`p \\equiv 1 \\pmod{4}`}</InlineMath>.
        </li>
        <li>
          <strong>Method of descent:</strong> A proof technique that influenced
          all later number theory.
        </li>
        <li>
          <strong>Fermat's Last Theorem:</strong> His most famous conjecture,
          proved 350 years later.
        </li>
      </ul>

      <SectionQuiz sectionId={41} questions={quizMap[41] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
