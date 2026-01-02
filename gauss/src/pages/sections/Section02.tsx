import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout, MathBlock, InlineMath } from '@/components/common';
import { PrimitiveRootExplorer } from '@/components/visualizations';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Residues of Powers</h2>

      <p>
        In Section III of the Disquisitiones, Gauss investigates a beautiful question:
        What patterns emerge when we compute successive powers of a number modulo{' '}
        <InlineMath>{`m`}</InlineMath>? This investigation leads to <strong>Fermat's Little Theorem</strong>,
        the concept of <strong>primitive roots</strong>, and powerful tools for computation.
      </p>

      <h2>Periodic Behavior of Powers</h2>

      <p>
        Consider computing powers of 2 modulo 7:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="font-mono text-dark-300">
          2<sup>1</sup> ≡ 2 (mod 7)<br />
          2<sup>2</sup> ≡ 4 (mod 7)<br />
          2<sup>3</sup> ≡ 8 ≡ 1 (mod 7)<br />
          2<sup>4</sup> ≡ 2 (mod 7)<br />
          2<sup>5</sup> ≡ 4 (mod 7)<br />
          2<sup>6</sup> ≡ 1 (mod 7)<br />
          ...
        </p>
        <p className="text-amber-400 mt-4">The sequence 2, 4, 1, 2, 4, 1, ... repeats with period 3.</p>
      </div>

      <p>
        Gauss proves that for any base <InlineMath>{`a`}</InlineMath> coprime to the modulus{' '}
        <InlineMath>{`m`}</InlineMath>, the sequence of powers <InlineMath>{`a, a^2, a^3, \ldots`}</InlineMath>{' '}
        is <strong>eventually periodic</strong>, and in fact must return to 1.
      </p>

      <h2>Fermat's Little Theorem</h2>

      <p>
        When the modulus is a prime <InlineMath>{`p`}</InlineMath>, Gauss presents the celebrated
        theorem first stated by Pierre de Fermat:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Fermat's Little Theorem</h3>
        <p className="text-dark-200 mb-4">
          If <InlineMath>{`p`}</InlineMath> is a prime and <InlineMath>{`a`}</InlineMath> is any
          integer not divisible by <InlineMath>{`p`}</InlineMath>, then:
        </p>
        <MathBlock>{`a^{p-1} \\equiv 1 \\pmod{p}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          Equivalently: <InlineMath>{`a^p \\equiv a \\pmod{p}`}</InlineMath> for all integers <InlineMath>{`a`}</InlineMath>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Example: p = 7</h3>
          <p className="text-dark-300 mb-2">For any a not divisible by 7:</p>
          <p className="font-mono text-emerald-400">a<sup>6</sup> ≡ 1 (mod 7)</p>
          <p className="text-dark-400 text-sm mt-2">
            Check: 3<sup>6</sup> = 729 = 104×7 + 1 ✓
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Example: p = 11</h3>
          <p className="text-dark-300 mb-2">For any a not divisible by 11:</p>
          <p className="font-mono text-emerald-400">a<sup>10</sup> ≡ 1 (mod 11)</p>
          <p className="text-dark-400 text-sm mt-2">
            Check: 2<sup>10</sup> = 1024 = 93×11 + 1 ✓
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Historical Note:</strong> Fermat stated this theorem in 1640 but never
        published a proof. Euler gave the first proof in 1736. Gauss provides a particularly
        elegant proof in the Disquisitiones.
      </Callout>

      <h2>The Order of an Element</h2>

      <p>
        While <InlineMath>{`a^{p-1} \\equiv 1 \\pmod{p}`}</InlineMath>, the power might
        reach 1 sooner. The smallest positive exponent <InlineMath>{`d`}</InlineMath> such that{' '}
        <InlineMath>{`a^d \\equiv 1 \\pmod{p}`}</InlineMath> is called the <strong>order</strong>{' '}
        of <InlineMath>{`a`}</InlineMath> modulo <InlineMath>{`p`}</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Key Property</h3>
        <p className="text-dark-200">
          The order of <InlineMath>{`a`}</InlineMath> modulo <InlineMath>{`p`}</InlineMath> always
          divides <InlineMath>{`p - 1`}</InlineMath>.
        </p>
        <MathBlock>{`\\text{ord}_p(a) \\mid (p-1)`}</MathBlock>
      </div>

      <p>
        For <InlineMath>{`p = 7`}</InlineMath>, we have <InlineMath>{`p - 1 = 6`}</InlineMath>,
        so possible orders are 1, 2, 3, and 6:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="p-3 text-dark-300">a</th>
              <th className="p-3 text-dark-300">Powers mod 7</th>
              <th className="p-3 text-dark-300">Order</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">1</td>
              <td className="p-3 font-mono text-dark-400">1</td>
              <td className="p-3 text-amber-400">1</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">2</td>
              <td className="p-3 font-mono text-dark-400">2, 4, 1, ...</td>
              <td className="p-3 text-amber-400">3</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">3</td>
              <td className="p-3 font-mono text-dark-400">3, 2, 6, 4, 5, 1, ...</td>
              <td className="p-3 text-emerald-400">6</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">4</td>
              <td className="p-3 font-mono text-dark-400">4, 2, 1, ...</td>
              <td className="p-3 text-amber-400">3</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">5</td>
              <td className="p-3 font-mono text-dark-400">5, 4, 6, 2, 3, 1, ...</td>
              <td className="p-3 text-emerald-400">6</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3 font-mono">6</td>
              <td className="p-3 font-mono text-dark-400">6, 1, ...</td>
              <td className="p-3 text-amber-400">2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Primitive Roots</h2>

      <p>
        Elements with the maximum possible order <InlineMath>{`p - 1`}</InlineMath> are
        especially important. Gauss calls them <strong>primitive roots</strong>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Definition: Primitive Root</h3>
        <p className="text-dark-200 mb-4">
          An integer <InlineMath>{`g`}</InlineMath> is a <strong>primitive root</strong> modulo{' '}
          <InlineMath>{`p`}</InlineMath> if its order is <InlineMath>{`p - 1`}</InlineMath>, i.e.,
          the powers <InlineMath>{`g, g^2, \\ldots, g^{p-1}`}</InlineMath> produce all
          non-zero residues modulo <InlineMath>{`p`}</InlineMath>.
        </p>
      </div>

      <p>
        From our table, <InlineMath>{`3`}</InlineMath> and <InlineMath>{`5`}</InlineMath> are
        primitive roots modulo 7. Their powers cycle through all of 1, 2, 3, 4, 5, 6.
      </p>

      <Callout type="info">
        <strong>Gauss's Theorem:</strong> For every prime <InlineMath>{`p`}</InlineMath>,
        primitive roots exist! Moreover, there are exactly <InlineMath>{`\phi(p-1)`}</InlineMath>{' '}
        of them, where <InlineMath>{`\phi`}</InlineMath> is Euler's totient function.
      </Callout>

      <h2>Try It: Primitive Root Explorer</h2>

      <p>
        Explore which elements are primitive roots for a given prime. Select different
        bases to see their powers and orders, and discover the generators of the
        multiplicative group:
      </p>

      <PrimitiveRootExplorer className="my-6" />

      <h2>Indices (Discrete Logarithms)</h2>

      <p>
        If <InlineMath>{`g`}</InlineMath> is a primitive root modulo <InlineMath>{`p`}</InlineMath>,
        then every non-zero residue <InlineMath>{`a`}</InlineMath> can be written as{' '}
        <InlineMath>{`a \\equiv g^k \\pmod{p}`}</InlineMath> for some unique{' '}
        <InlineMath>{`k \\in \\{0, 1, \\ldots, p-2\\}`}</InlineMath>. Gauss calls <InlineMath>{`k`}</InlineMath>{' '}
        the <strong>index</strong> of <InlineMath>{`a`}</InlineMath> (what we now call the{' '}
        <strong>discrete logarithm</strong>).
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">Index Table for p = 7, g = 3</h3>
        <p className="text-dark-300 mb-4">
          Since 3 is a primitive root, we can write every residue as a power of 3:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="p-2 text-dark-300">a</th>
                <td className="p-2">1</td>
                <td className="p-2">2</td>
                <td className="p-2">3</td>
                <td className="p-2">4</td>
                <td className="p-2">5</td>
                <td className="p-2">6</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="p-2 text-dark-300">ind(a)</th>
                <td className="p-2 text-amber-400">6</td>
                <td className="p-2 text-amber-400">2</td>
                <td className="p-2 text-amber-400">1</td>
                <td className="p-2 text-amber-400">4</td>
                <td className="p-2 text-amber-400">5</td>
                <td className="p-2 text-amber-400">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-dark-400 text-sm mt-4">
          (Note: ind(1) = 6 since 3<sup>6</sup> ≡ 1, and we can use 0 or 6 interchangeably.)
        </p>
      </div>

      <p>
        Indices convert multiplication to addition: <InlineMath>{`\\text{ind} (ab) \\equiv \\text{ind} (a) + \\text{ind} (b) \\pmod{p-1}`}</InlineMath>.
        This is analogous to ordinary logarithms!
      </p>

      <h2>Wilson's Theorem</h2>

      <p>
        As a beautiful application of primitive roots, Gauss proves Wilson's Theorem:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-500/30 my-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Wilson's Theorem</h3>
        <p className="text-dark-200 mb-4">
          For any prime <InlineMath>{`p`}</InlineMath>:
        </p>
        <MathBlock>{`(p-1)! \\equiv -1 \\pmod{p}`}</MathBlock>
        <p className="text-dark-300 mt-4">
          Example: <InlineMath>{`6! = 720 = 103 \times 7 - 1 \equiv -1 \pmod 7`}</InlineMath> ✓
        </p>
      </div>

      <h2>Prime Power and Composite Moduli</h2>

      <p>
        Gauss extends the theory of primitive roots beyond prime moduli:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong>Powers of odd primes:</strong> Primitive roots exist modulo{' '}
          <InlineMath>{`p^k`}</InlineMath> for any odd prime <InlineMath>{`p`}</InlineMath>.
        </li>
        <li>
          <strong>Powers of 2:</strong> Primitive roots exist modulo 2 and 4, but
          <em>not</em> modulo <InlineMath>{`2^k`}</InlineMath> for <InlineMath>{`k \ge 3`}</InlineMath>.
        </li>
        <li>
          <strong>Composite moduli:</strong> Primitive roots exist modulo <InlineMath>{`n`}</InlineMath>{' '}
          if and only if <InlineMath>{`n = 1, 2, 4, p^k, \\text{ or } 2p^k`}</InlineMath> for an odd prime{' '}
          <InlineMath>{`p`}</InlineMath>.
        </li>
      </ul>

      <Callout type="success">
        <strong>Looking Ahead:</strong> The theory of primitive roots and indices provides
        the foundation for Section IV, where Gauss tackles the deep question: Which numbers
        are <em>squares</em> modulo <InlineMath>{`p`}</InlineMath>? This leads to the celebrated
        Law of Quadratic Reciprocity.
      </Callout>
    </LessonLayout>
  );
}
