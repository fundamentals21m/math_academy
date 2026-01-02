import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { PrimeFactorizationVisualizer } from '@/components/visualizations';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Chapter 2: Prime Numbers and Fractions</h2>

      <p>
        Prime numbers are the atoms of arithmetic—the indivisible building blocks from which
        all integers are constructed. Understanding primes gives us powerful tools for working
        with fractions and leads us to one of mathematics' most elegant results: the distinction
        between rational and irrational numbers.
      </p>

      <h2>2.1 Prime Numbers and Factorization</h2>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>prime number</strong> is a positive integer greater
        than 1 that has exactly two distinct positive divisors: 1 and itself.
      </Callout>

      <p>
        The first several primes are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...
      </p>

      <p>
        Note that 1 is <em>not</em> prime (it has only one divisor), and 2 is the only even prime.
      </p>

      <h3>Divisibility Tests</h3>
      <p>Quick tests to check if a number is divisible by small primes:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Divisible by 2</p>
          <p className="text-dark-300">Last digit is even (0, 2, 4, 6, 8)</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Divisible by 3</p>
          <p className="text-dark-300">Sum of digits is divisible by 3</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Divisible by 5</p>
          <p className="text-dark-300">Last digit is 0 or 5</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Divisible by 9</p>
          <p className="text-dark-300">Sum of digits is divisible by 9</p>
        </div>
      </div>

      <h3>The Fundamental Theorem of Arithmetic</h3>

      <Callout type="success">
        <strong>Theorem:</strong> Every integer greater than 1 can be expressed as a product
        of prime numbers in exactly one way (up to the order of the factors).
      </Callout>

      <p>This is why primes are called the "building blocks" of integers.</p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Prime Factorization</p>
        <p>Find the prime factorization of 171.</p>
        <p className="mt-2">
          171 is odd (not divisible by 2). Check 3: <InlineMath>{`1 + 7 + 1 = 9`}</InlineMath>, which is
          divisible by 3.
        </p>
        <MathBlock>{`171 = 3 \\times 57`}</MathBlock>
        <p>
          Is 57 divisible by 3? <InlineMath>{`5 + 7 = 12`}</InlineMath>, yes!
        </p>
        <MathBlock>{`57 = 3 \\times 19`}</MathBlock>
        <p>19 is prime, so:</p>
        <MathBlock>{`171 = 3^2 \\times 19`}</MathBlock>
      </div>

      <PrimeFactorizationVisualizer />

      <h2>2.2 Greatest Common Factor (The Euclidean Algorithm)</h2>

      <p>
        The <strong>greatest common factor</strong> (GCF) of two integers is the largest
        integer that divides both of them. Euclid discovered an elegant algorithm for
        finding the GCF around 300 BCE.
      </p>

      <Callout type="info">
        <strong>Euclidean Algorithm:</strong> To find GCF(a, b) where a &gt; b:
        <ol className="list-decimal list-inside mt-2">
          <li>Divide a by b to get remainder r</li>
          <li>If r = 0, then GCF = b</li>
          <li>Otherwise, replace a with b and b with r, and repeat</li>
        </ol>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Find GCF(252, 105)</p>
        <div className="mt-2 font-mono text-dark-300">
          <p>252 = 2 × 105 + 42</p>
          <p>105 = 2 × 42 + 21</p>
          <p>42 = 2 × 21 + 0</p>
        </div>
        <p className="mt-2 text-emerald-400">Therefore, GCF(252, 105) = 21</p>
      </div>

      <h3>Application: Simplifying Fractions</h3>
      <p>
        To reduce a fraction <InlineMath>{`\\frac{a}{b}`}</InlineMath> to lowest terms, divide both
        numerator and denominator by their GCF.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example</p>
        <p>
          Simplify <InlineMath>{`\\frac{252}{105}`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{252}{105} = \\frac{252 \\div 21}{105 \\div 21} = \\frac{12}{5}`}</MathBlock>
      </div>

      <h2>2.3 Rationals and Irrationals</h2>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>rational number</strong> is any number that can
        be expressed as a ratio <InlineMath>{`\\frac{p}{q}`}</InlineMath> where p and q are integers
        and <InlineMath>{`q \\neq 0`}</InlineMath>.
      </Callout>

      <p>
        Examples of rationals: <InlineMath>{`\\frac{3}{4}`}</InlineMath>, <InlineMath>{`-\\frac{7}{2}`}</InlineMath>,
        <InlineMath>{`5 = \\frac{5}{1}`}</InlineMath>, <InlineMath>{`0.333... = \\frac{1}{3}`}</InlineMath>
      </p>

      <h3>Decimal Representations</h3>
      <p>
        Every rational number has a decimal expansion that either terminates or repeats:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Terminating</p>
          <p className="text-dark-300">
            <InlineMath>{`\\frac{3}{8} = 0.375`}</InlineMath>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Repeating</p>
          <p className="text-dark-300">
            <InlineMath>{`\\frac{2}{11} = 0.\\overline{18} = 0.181818...`}</InlineMath>
          </p>
        </div>
      </div>

      <h3>Irrational Numbers</h3>

      <Callout type="warning">
        <strong>Definition:</strong> An <strong>irrational number</strong> is a real number
        that cannot be expressed as a ratio of integers. Its decimal expansion neither
        terminates nor repeats.
      </Callout>

      <p>
        Famous irrationals include <InlineMath>{`\\sqrt{2}`}</InlineMath>, <InlineMath>{`\\pi`}</InlineMath>, and <InlineMath>e</InlineMath>.
        We'll prove that <InlineMath>{`\\sqrt{2}`}</InlineMath> is irrational in the next chapter.
      </p>

      <h3>Why This Distinction Matters</h3>
      <p>
        The Pythagoreans believed all quantities could be expressed as ratios of whole numbers.
        The discovery that <InlineMath>{`\\sqrt{2}`}</InlineMath> is irrational was reportedly so disturbing
        that they tried to keep it secret. Legend has it that Hippasus, who revealed the proof,
        was drowned at sea for his transgression!
      </p>

      <p>
        Today, we understand that irrational numbers are not "broken" rationals—they're simply
        a different kind of number. The real number line contains both types, and together they
        form a complete, continuous whole.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Prime numbers provide the unique factorization of
        every integer. The Euclidean algorithm efficiently finds greatest common factors,
        which helps us simplify fractions. Rational numbers have terminating or repeating
        decimals, while irrationals—like <InlineMath>{`\\sqrt{2}`}</InlineMath>—cannot be expressed as
        fractions at all. In the next chapter, we'll explore the Pythagorean theorem and
        prove this remarkable fact about <InlineMath>{`\\sqrt{2}`}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
