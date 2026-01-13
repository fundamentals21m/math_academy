import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2>Finite Field Arithmetic</h2>

      <p>
        All the mathematics in FROST operates within finite fields. Understanding finite field
        arithmetic is essential for implementing FROST correctly and securely.
      </p>

      <h3>The Field</h3>

      <Definition title="Integers Modulo q">
        <p>
          FROST operates in <InlineMath>{`\\mathbb{Z}_q`}</InlineMath>, the integers modulo{' '}
          <InlineMath>{`q`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbb{Z}_q = \\{0, 1, 2, \\ldots, q-1\\}`}</MathBlock>
        <p className="mt-3">
          For secp256k1, the group order is:
        </p>
        <MathBlock>{`q = \\texttt{FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE}`}</MathBlock>
        <MathBlock>{`\\quad\\; \\texttt{BAAEDCE6 AF48A03B BFD25E8C D0364141}`}</MathBlock>
        <p className="mt-3">
          This is approximately <InlineMath>{`2^{256}`}</InlineMath>.
        </p>
      </Definition>

      <h3>Basic Operations</h3>

      <Definition title="Addition">
        <MathBlock>{`(a + b) \\mod q`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>{`a + b \\geq q`}</InlineMath>, subtract <InlineMath>{`q`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Subtraction">
        <MathBlock>{`(a - b) \\mod q`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>{`a - b < 0`}</InlineMath>, add <InlineMath>{`q`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Multiplication">
        <MathBlock>{`(a \\cdot b) \\mod q`}</MathBlock>
        <p className="mt-2">
          Compute <InlineMath>{`a \\cdot b`}</InlineMath> as multi-precision integer, then reduce
          modulo <InlineMath>{`q`}</InlineMath>.
        </p>
      </Definition>

      <h3>Division (Multiplicative Inverse)</h3>

      <Definition title="Modular Inverse">
        <p>
          Division in <InlineMath>{`\\mathbb{Z}_q`}</InlineMath> is multiplication by the inverse:
        </p>
        <MathBlock>{`a / b \\equiv a \\cdot b^{-1} \\pmod{q}`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>{`b^{-1}`}</InlineMath> is the unique element such that:
        </p>
        <MathBlock>{`b \\cdot b^{-1} \\equiv 1 \\pmod{q}`}</MathBlock>
      </Definition>

      <Example title="Computing Inverse">
        <p>Two main methods:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Extended Euclidean Algorithm:</strong> <InlineMath>{`O(\\log q)`}</InlineMath>{' '}
            operations
          </li>
          <li>
            <strong>Fermat's Little Theorem:</strong>{' '}
            <InlineMath>{`b^{-1} \\equiv b^{q-2} \\pmod{q}`}</InlineMath>
          </li>
        </ul>
      </Example>

      <Theorem title="Fermat's Little Theorem">
        <p>
          For prime <InlineMath>{`q`}</InlineMath> and{' '}
          <InlineMath>{`b \\not\\equiv 0 \\pmod{q}`}</InlineMath>:
        </p>
        <MathBlock>{`b^{q-1} \\equiv 1 \\pmod{q}`}</MathBlock>
        <p className="mt-3">Therefore:</p>
        <MathBlock>{`b^{-1} \\equiv b^{q-2} \\pmod{q}`}</MathBlock>
      </Theorem>

      <h3>Lagrange Coefficients in Practice</h3>

      <Example title="Correct Computation">
        <p>
          The Lagrange coefficient for participant <InlineMath>{`i`}</InlineMath> in signing set{' '}
          <InlineMath>{`S`}</InlineMath>:
        </p>
        <MathBlock>{`\\lambda_i = \\prod_{j \\in S, j \\neq i} \\frac{-j}{i - j}`}</MathBlock>
        <p className="mt-3">Implementation:</p>
        <pre className="bg-gray-800 p-4 rounded mt-2 text-sm overflow-x-auto">
{`// Compute Lagrange coefficient for participant i in set S
fn lagrange_coefficient(i: u32, S: &[u32], q: &BigInt) -> BigInt {
    let mut numerator = BigInt::one();
    let mut denominator = BigInt::one();

    for &j in S {
        if j != i {
            // numerator *= -j (mod q)
            numerator = (numerator * (q - BigInt::from(j))) % q;
            // denominator *= (i - j) (mod q)
            let diff = if i > j {
                BigInt::from(i - j)
            } else {
                q - BigInt::from(j - i)
            };
            denominator = (denominator * diff) % q;
        }
    }

    // lambda_i = numerator * denominator^(-1) (mod q)
    (numerator * mod_inverse(&denominator, q)) % q
}`}
        </pre>
      </Example>

      <h3>Implementation Challenges</h3>

      <Definition title="Big Integer Arithmetic">
        <p>
          Native 64-bit integers cannot hold 256-bit values. Solutions:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Multi-precision libraries:</strong> GMP, OpenSSL BIGNUM
          </li>
          <li>
            <strong>Fixed-size big integers:</strong> uint256 types
          </li>
          <li>
            <strong>Language-specific:</strong> Python's native arbitrary precision
          </li>
        </ul>
      </Definition>

      <Definition title="Constant-Time Operations">
        <p>
          Naive implementations leak information via timing:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <InlineMath>{`\\texttt{if (bit == 1)}`}</InlineMath> takes different time based on bit
            value
          </li>
          <li>
            Memory access patterns reveal secret data
          </li>
          <li>
            CPU branch prediction leaks information
          </li>
        </ul>
        <p className="mt-3">
          <strong>Solution:</strong> Use constant-time conditional operations:
        </p>
        <MathBlock>{`\\texttt{result = (mask \\& a) | ((!mask) \\& b)}`}</MathBlock>
      </Definition>

      <Definition title="Modular Reduction">
        <p>Efficient reduction modulo <InlineMath>{`q`}</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Barrett reduction:</strong> Precompute approximate inverse of{' '}
            <InlineMath>{`q`}</InlineMath>
          </li>
          <li>
            <strong>Montgomery form:</strong> Work in transformed representation
          </li>
          <li>
            <strong>Special primes:</strong> secp256k1's <InlineMath>{`q`}</InlineMath> allows
            faster reduction
          </li>
        </ul>
      </Definition>

      <h3>Elliptic Curve Operations</h3>

      <Definition title="Point Addition">
        <p>
          For points <InlineMath>{`P = (x_1, y_1)`}</InlineMath> and{' '}
          <InlineMath>{`Q = (x_2, y_2)`}</InlineMath> on secp256k1:
        </p>
        <MathBlock>{`\\lambda = \\frac{y_2 - y_1}{x_2 - x_1}`}</MathBlock>
        <MathBlock>{`x_3 = \\lambda^2 - x_1 - x_2`}</MathBlock>
        <MathBlock>{`y_3 = \\lambda(x_1 - x_3) - y_1`}</MathBlock>
        <p className="mt-3">All operations are modulo the field prime <InlineMath>{`p`}</InlineMath>.</p>
      </Definition>

      <Definition title="Scalar Multiplication">
        <p>
          Compute <InlineMath>{`[k]G`}</InlineMath> (add <InlineMath>{`G`}</InlineMath> to itself{' '}
          <InlineMath>{`k`}</InlineMath> times) efficiently using double-and-add:
        </p>
        <pre className="bg-gray-800 p-4 rounded mt-2 text-sm overflow-x-auto">
{`fn scalar_multiply(k: &BigInt, G: &Point) -> Point {
    let mut result = Point::infinity(); // identity
    let mut temp = G.clone();

    for bit in k.bits() {
        if bit {
            result = point_add(&result, &temp);
        }
        temp = point_double(&temp);
    }
    result
}`}
        </pre>
        <p className="mt-3">
          <strong>Warning:</strong> This naive version has timing side channels. Use constant-time
          implementations in production.
        </p>
      </Definition>

      <h3>Summary</h3>

      <Callout type="info">
        <strong>Key Implementation Requirements:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Use vetted big integer libraries</li>
          <li>All operations in constant time</li>
          <li>Careful modular arithmetic (handle negatives correctly)</li>
          <li>Secure random number generation</li>
          <li>Zero memory containing secrets when done</li>
        </ul>
      </Callout>

      <p>
        The mathematics of finite fields is beautiful, but the implementation details matter
        enormously for security. A mathematically correct but poorly implemented FROST is still
        vulnerable. Use established libraries and follow cryptographic engineering best practices.
      </p>

      <Callout type="success">
        <strong>Congratulations!</strong>
        <p className="mt-2">
          You've completed the mathematical journey through FROST. From the single point of
          failure problem to finite field arithmetic, you now understand not just <em>what</em>{' '}
          FROST does, but <em>why</em> and <em>how</em> it works. This knowledge enables you to
          evaluate implementations, understand security properties, and appreciate the elegant
          mathematics that makes threshold signatures possible.
        </p>
      </Callout>
    </LessonLayout>
  );
}
