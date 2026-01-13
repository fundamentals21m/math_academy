import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { FiniteFieldGrid } from '@/components/visualizations';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Finite Fields</h2>

      <p className="mb-4">
        Real numbers are great for building intuition, but they're useless for cryptography.
        Why? Computers can't represent them exactly, and there are infinitely many of them.
        Instead, we need <strong>finite fields</strong>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem with Real Numbers</h3>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Infinite precision:</strong> Real numbers require infinite storage</li>
        <li><strong>Floating-point errors:</strong> Rounding accumulates and breaks security</li>
        <li><strong>No uniform distribution:</strong> Can't sample "random" real numbers</li>
      </ul>

      <Callout type="warning" title="Security Requirement">
        <p>
          Cryptographic operations must be <strong>exact</strong>. A signature that's
          "close enough" is useless—it either verifies or it doesn't.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Modular Arithmetic</h3>

      <p className="mb-4">
        The solution is <strong>modular arithmetic</strong>—working with remainders after
        division by some number <InlineMath>p</InlineMath>. Think of a clock: after 12
        comes 1, not 13.
      </p>

      <Definition title="Modular Arithmetic">
        <p>
          For integers <InlineMath>a</InlineMath> and <InlineMath>p</InlineMath>, we write:
        </p>
        <MathBlock>
          {`a \\mod p = r`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>r</InlineMath> is the remainder when <InlineMath>a</InlineMath>{' '}
          is divided by <InlineMath>p</InlineMath>, with <InlineMath>0 \leq r {'<'} p</InlineMath>.
        </p>
      </Definition>

      <Example title="Arithmetic mod 7">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold mb-2">Addition:</p>
            <ul className="text-sm space-y-1">
              <li><InlineMath>5 + 4 = 9 \equiv 2 \pmod 7</InlineMath></li>
              <li><InlineMath>6 + 6 = 12 \equiv 5 \pmod 7</InlineMath></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Multiplication:</p>
            <ul className="text-sm space-y-1">
              <li><InlineMath>3 \times 4 = 12 \equiv 5 \pmod 7</InlineMath></li>
              <li><InlineMath>5 \times 5 = 25 \equiv 4 \pmod 7</InlineMath></li>
            </ul>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Division: The Tricky Part</h3>

      <p className="mb-4">
        In modular arithmetic, <strong>division is multiplication by the inverse</strong>.
        The inverse of <InlineMath>a</InlineMath> mod <InlineMath>p</InlineMath> is the
        number <InlineMath>a^{'{-1}'}</InlineMath> such that:
      </p>

      <MathBlock>
        {`a \\cdot a^{-1} \\equiv 1 \\pmod p`}
      </MathBlock>

      <Definition title="Fermat's Little Theorem">
        <p>
          If <InlineMath>p</InlineMath> is prime and <InlineMath>a \not\equiv 0 \pmod p</InlineMath>:
        </p>
        <MathBlock>
          {`a^{p-1} \\equiv 1 \\pmod p`}
        </MathBlock>
        <p className="mt-2">
          This gives us a formula for the inverse:
        </p>
        <MathBlock>
          {`a^{-1} \\equiv a^{p-2} \\pmod p`}
        </MathBlock>
      </Definition>

      <Example title="Finding Inverses mod 7">
        <p>To find <InlineMath>3^{'{-1}'} \mod 7</InlineMath>:</p>
        <p className="mt-2">
          <InlineMath>3^{'{-1}'} \equiv 3^{'{7-2}'} = 3^5 = 243 \equiv 5 \pmod 7</InlineMath>
        </p>
        <p className="mt-2">
          Verify: <InlineMath>3 \times 5 = 15 \equiv 1 \pmod 7</InlineMath> ✓
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Finite Field <InlineMath>\mathbb{'{Z}'}_p</InlineMath></h3>

      <Definition title="Prime Field">
        <p>
          When <InlineMath>p</InlineMath> is prime, the integers{' '}
          <InlineMath>{`\\{0, 1, 2, \\ldots, p-1\\}`}</InlineMath> with modular arithmetic
          form a <strong>finite field</strong> denoted <InlineMath>\mathbb{'{Z}'}_p</InlineMath>.
        </p>
        <p className="mt-2">
          Every non-zero element has a multiplicative inverse—this is what makes it a field.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Elliptic Curves Over Finite Fields</h3>

      <p className="mb-4">
        Now we can define elliptic curves over <InlineMath>\mathbb{'{Z}'}_p</InlineMath>:
      </p>

      <MathBlock>
        {`y^2 \\equiv x^3 + 7 \\pmod p`}
      </MathBlock>

      <p className="mb-4">
        The curve is no longer a smooth shape—it's a <strong>scattered set of points</strong>.
        But the point addition formulas work exactly the same (just mod <InlineMath>p</InlineMath>).
      </p>

      <FiniteFieldGrid className="my-8" />

      <Example title="Curve mod 17">
        <p>
          Consider <InlineMath>y^2 \equiv x^3 + 7 \pmod{'{17}'}</InlineMath>.
        </p>
        <p className="mt-2">Let's find points with <InlineMath>x = 5</InlineMath>:</p>
        <div className="mt-2 space-y-1 text-sm font-mono">
          <p><InlineMath>y^2 \equiv 5^3 + 7 = 125 + 7 = 132 \equiv 13 \pmod{'{17}'}</InlineMath></p>
        </div>
        <p className="mt-2">
          Is 13 a perfect square mod 17? We need <InlineMath>y</InlineMath> where{' '}
          <InlineMath>y^2 \equiv 13 \pmod{'{17}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Checking: <InlineMath>8^2 = 64 \equiv 13 \pmod{'{17}'}</InlineMath> ✓
        </p>
        <p className="mt-2">
          So <InlineMath>(5, 8)</InlineMath> and <InlineMath>(5, -8) = (5, 9)</InlineMath> are on the curve.
        </p>
      </Example>

      <Example title="Point Addition mod 17">
        <p>
          Let <InlineMath>P = (5, 8)</InlineMath> and <InlineMath>Q = (6, 3)</InlineMath> on{' '}
          <InlineMath>y^2 \equiv x^3 + 7 \pmod{'{17}'}</InlineMath>.
        </p>
        <div className="mt-3 space-y-2 font-mono text-sm">
          <p>
            <InlineMath>\lambda = (3 - 8) \cdot (6 - 5)^{'{-1}'} \mod 17</InlineMath>
          </p>
          <p>
            <InlineMath>= (-5) \cdot 1^{'{-1}'} = -5 \equiv 12 \pmod{'{17}'}</InlineMath>
          </p>
          <p>
            <InlineMath>x_3 = 12^2 - 5 - 6 = 144 - 11 = 133 \equiv 14 \pmod{'{17}'}</InlineMath>
          </p>
          <p>
            <InlineMath>y_3 = 12(5 - 14) - 8 = 12(-9) - 8 = -116 \equiv 3 \pmod{'{17}'}</InlineMath>
          </p>
        </div>
        <p className="mt-3">
          So <InlineMath>P + Q = (14, 3)</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why This Is Perfect for Cryptography</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Exact Arithmetic</p>
          <p className="text-sm text-dark-300">
            No rounding errors—operations are perfectly reproducible.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Fixed Size</p>
          <p className="text-sm text-dark-300">
            All values fit in a known number of bits (256 for secp256k1).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Uniform Sampling</p>
          <p className="text-sm text-dark-300">
            Can generate truly random field elements (important for keys).
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">ECDLP Still Hard</p>
          <p className="text-sm text-dark-300">
            The discrete log problem remains computationally infeasible.
          </p>
        </div>
      </div>

      <Callout type="success" title="Ready for secp256k1">
        <p>
          Now we have all the tools: elliptic curves + finite fields. Next, we'll see
          the specific parameters that define Bitcoin's curve.
        </p>
      </Callout>
    </LessonLayout>
  );
}
