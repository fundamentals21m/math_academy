import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Properties of the Integers</h2>
      <p>
        The integers <InlineMath>\mathbb{'{'}Z{'}'} = \{'{'}..., -2, -1, 0, 1, 2, ...\{'}'}</InlineMath> possess rich arithmetic properties
        that serve as the prototype for many algebraic structures. This section develops the fundamental
        theory of divisibility, the Division Algorithm, and the Greatest Common Divisor.
      </p>

      <h3>The Division Algorithm</h3>
      <p>
        The Division Algorithm is a cornerstone of number theory and algebra. It guarantees that we can
        always perform division with remainder.
      </p>

      <Callout type="info">
        <strong>Theorem (Division Algorithm):</strong> For any integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> with <InlineMath>b {'>'} 0</InlineMath>,
        there exist unique integers <InlineMath>q</InlineMath> (quotient) and <InlineMath>r</InlineMath> (remainder) such that:
        <MathBlock>a = bq + r \quad \text{'{'}where{'}'} \quad 0 \le r {'<'} b</MathBlock>
      </Callout>

      <p>
        The proof uses the Well-Ordering Principle: consider the set of non-negative integers of the form <InlineMath>a - bq</InlineMath>.
        This set is non-empty and has a least element <InlineMath>r</InlineMath>, which must satisfy <InlineMath>0 \le r {'<'} b</InlineMath>.
      </p>

      <h3>Divisibility</h3>
      <p>
        We say <InlineMath>a</InlineMath> <strong>divides</strong> <InlineMath>b</InlineMath>, written <InlineMath>a \mid b</InlineMath>, if there exists an integer <InlineMath>c</InlineMath> such
        that <InlineMath>b = ac</InlineMath>. Key properties include:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>If <InlineMath>a \mid b</InlineMath> and <InlineMath>b \mid c</InlineMath>, then <InlineMath>a \mid c</InlineMath> (transitivity)</li>
        <li>If <InlineMath>a \mid b</InlineMath> and <InlineMath>a \mid c</InlineMath>, then <InlineMath>a \mid (bx + cy)</InlineMath> for any integers <InlineMath>x, y</InlineMath></li>
        <li>If <InlineMath>a \mid b</InlineMath> and <InlineMath>b \neq 0</InlineMath>, then <InlineMath>|a| \le |b|</InlineMath></li>
      </ul>

      <h3>Greatest Common Divisor</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>greatest common divisor</strong> of integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>,
        not both zero, denoted <InlineMath>\gcd(a, b)</InlineMath> or <InlineMath>(a, b)</InlineMath>, is the largest positive integer that divides both <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
      </Callout>

      <p>
        The <strong>Euclidean Algorithm</strong> computes the GCD efficiently using repeated application of the Division Algorithm:
      </p>
      <MathBlock>
        {`\\begin{aligned}
a &= bq_1 + r_1 \\\\
b &= r_1 q_2 + r_2 \\\\
r_1 &= r_2 q_3 + r_3 \\\\
&\\vdots \\\\
r_{n-2} &= r_{n-1} q_n + r_n \\\\
r_{n-1} &= r_n q_{n+1} + 0
\\end{aligned}`}
      </MathBlock>
      <p>Then <InlineMath>\gcd(a, b) = r_n</InlineMath>, the last non-zero remainder.</p>

      <h3>Bezout's Identity</h3>
      <Callout type="info">
        <strong>Theorem (Bezout's Identity):</strong> For any integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>, not both zero,
        there exist integers <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> such that:
        <MathBlock>\gcd(a, b) = ax + by</MathBlock>
        Moreover, <InlineMath>\gcd(a, b)</InlineMath> is the smallest positive integer expressible in this form.
      </Callout>

      <p>
        Integers <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are <strong>relatively prime</strong> (or <strong>coprime</strong>) if <InlineMath>\gcd(a, b) = 1</InlineMath>.
        By Bezout's Identity, this is equivalent to the existence of integers <InlineMath>x, y</InlineMath> with <InlineMath>ax + by = 1</InlineMath>.
      </p>

      <h3>Prime Numbers</h3>
      <Callout type="info">
        <strong>Definition:</strong> An integer <InlineMath>p {'>'} 1</InlineMath> is <strong>prime</strong> if its only positive divisors
        are <InlineMath>1</InlineMath> and <InlineMath>p</InlineMath>. An integer <InlineMath>n {'>'} 1</InlineMath> that is not prime is <strong>composite</strong>.
      </Callout>

      <p>Key properties of primes:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>Euclid's Lemma:</strong> If <InlineMath>p</InlineMath> is prime and <InlineMath>p \mid ab</InlineMath>, then <InlineMath>p \mid a</InlineMath> or <InlineMath>p \mid b</InlineMath></li>
        <li>There are infinitely many primes (Euclid's proof)</li>
      </ul>

      <h3>The Fundamental Theorem of Arithmetic</h3>
      <Callout type="info">
        <strong>Theorem (Fundamental Theorem of Arithmetic):</strong> Every integer <InlineMath>n {'>'} 1</InlineMath> can be written
        as a product of prime numbers:
        <MathBlock>n = p_1^{'{'}a_1{'}'} p_2^{'{'}a_2{'}'} \cdots p_k^{'{'}a_k{'}'}</MathBlock>
        and this factorization is unique up to the order of the factors.
      </Callout>

      <p>
        The uniqueness of prime factorization is a deep property that fails in some number systems (like <InlineMath>\mathbb{'{'}Z{'}'}[\sqrt{'{-5}'}]</InlineMath>),
        motivating the study of unique factorization domains in ring theory.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> The integers possess a rich divisibility theory centered on the Division Algorithm,
        the Euclidean Algorithm for computing GCDs, and the Fundamental Theorem of Arithmetic. These properties
        serve as the model for more general algebraic structures studied throughout this course.
      </Callout>
    </LessonLayout>
  );
}
