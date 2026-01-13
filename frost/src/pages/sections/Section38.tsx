import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2>Concrete Security Bound</h2>

      <p>
        Abstract security proofs tell us FROST is "as secure as discrete log." But what does
        this mean in practice? Let's examine the concrete security parameters.
      </p>

      <h3>The Security Theorem (Quantified)</h3>

      <Theorem title="Concrete Security Bound">
        <p>
          If the discrete log problem has security parameter <InlineMath>{`\\lambda`}</InlineMath>{' '}
          (bit security), FROST has security:
        </p>
        <MathBlock>{`\\varepsilon_{\\text{FROST}} \\leq \\varepsilon_{\\text{DL}} + \\frac{q^2}{2^\\lambda} + \\text{negl}(\\lambda)`}</MathBlock>
        <p className="mt-3">where:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <InlineMath>{`\\varepsilon_{\\text{DL}}`}</InlineMath>: probability of breaking
            discrete log
          </li>
          <li>
            <InlineMath>{`q`}</InlineMath>: number of random oracle queries
          </li>
          <li>
            <InlineMath>{`\\lambda`}</InlineMath>: bit security of the group
          </li>
        </ul>
      </Theorem>

      <h3>Bitcoin Parameters (secp256k1)</h3>

      <Definition title="secp256k1 Security Parameters">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Group order:</strong>{' '}
            <InlineMath>{`q \\approx 2^{256}`}</InlineMath>
          </li>
          <li>
            <strong>Discrete log security:</strong> ~128 bits (due to Pollard's rho algorithm,
            which runs in <InlineMath>{`O(\\sqrt{q})`}</InlineMath>)
          </li>
          <li>
            <strong>Hash output:</strong> 256 bits (SHA-256)
          </li>
        </ul>
      </Definition>

      <Example title="Practical Security Calculation">
        <p>Assume an attacker can make:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <InlineMath>{`q = 2^{40}`}</InlineMath> hash queries (about 1 trillion)
          </li>
          <li>
            <InlineMath>{`2^{80}`}</InlineMath> group operations per second (optimistic)
          </li>
        </ul>
        <p className="mt-3">The birthday bound term:</p>
        <MathBlock>{`\\frac{q^2}{2^{256}} = \\frac{(2^{40})^2}{2^{256}} = \\frac{2^{80}}{2^{256}} = 2^{-176}`}</MathBlock>
        <p className="mt-3">This is negligibly small!</p>
        <p className="mt-3">The discrete log term:</p>
        <MathBlock>{`\\varepsilon_{\\text{DL}} \\approx 2^{-128}`}</MathBlock>
        <p className="mt-3">Total security:</p>
        <MathBlock>{`\\varepsilon_{\\text{FROST}} \\approx 2^{-128} + 2^{-176} \\approx 2^{-128}`}</MathBlock>
      </Example>

      <Callout type="success">
        <strong>Interpretation:</strong> An attacker would need approximately{' '}
        <InlineMath>{`2^{128}`}</InlineMath> operations to have a reasonable chance of forging a
        FROST signature. This is the same security level as single-party Schnorr signatures on
        secp256k1.
      </Callout>

      <h3>Comparison with Computational Power</h3>

      <Definition title="How Much Is 2^128?">
        <p>To put <InlineMath>{`2^{128}`}</InlineMath> operations in perspective:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Bitcoin network:</strong> ~<InlineMath>{`2^{70}`}</InlineMath> hashes/second
            (as of 2024)
          </li>
          <li>
            <strong>Time to break:</strong>{' '}
            <InlineMath>{`2^{128} / 2^{70} = 2^{58}`}</InlineMath> seconds{' '}
            <InlineMath>{`\\approx 10^{10}`}</InlineMath> years
          </li>
          <li>
            <strong>Age of universe:</strong> ~<InlineMath>{`10^{10}`}</InlineMath> years
          </li>
        </ul>
        <p className="mt-3">
          Even the entire Bitcoin network running for the age of the universe would not break
          FROST.
        </p>
      </Definition>

      <h3>Security Margin Analysis</h3>

      <Example title="What If Parameters Are Weaker?">
        <p>
          Suppose we use a curve with only 80-bit security (not recommended, but illustrative):
        </p>
        <MathBlock>{`\\varepsilon_{\\text{DL}} \\approx 2^{-80}`}</MathBlock>
        <p className="mt-3">
          With <InlineMath>{`q = 2^{40}`}</InlineMath> queries:
        </p>
        <MathBlock>{`\\frac{q^2}{2^{160}} = \\frac{2^{80}}{2^{160}} = 2^{-80}`}</MathBlock>
        <p className="mt-3">
          Total: <InlineMath>{`2^{-80} + 2^{-80} \\approx 2^{-79}`}</InlineMath>
        </p>
        <p className="mt-3">
          Still secure by modern standards, but with less margin.
        </p>
      </Example>

      <h3>Tightness of the Bound</h3>

      <Theorem title="Tight Reduction">
        <p>
          FROST's security proof is considered <strong>tight</strong>, meaning:
        </p>
        <MathBlock>{`\\varepsilon_{\\text{FROST}} \\approx \\varepsilon_{\\text{DL}}`}</MathBlock>
        <p className="mt-3">
          There is minimal security loss in the reduction. Breaking FROST is essentially as hard
          as breaking discrete log - we don't lose security factors like{' '}
          <InlineMath>{`n`}</InlineMath> or <InlineMath>{`t`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Why Tightness Matters:</strong> Non-tight reductions might say "breaking the
        protocol is as hard as solving <InlineMath>{`2^{40}`}</InlineMath> DL instances" - which
        would effectively reduce 128-bit security to 88-bit security. FROST avoids this problem.
      </Callout>

      <h3>Post-Quantum Considerations</h3>

      <Definition title="Quantum Threat">
        <p>
          Shor's algorithm solves discrete log in polynomial time on a quantum computer:
        </p>
        <MathBlock>{`O((\\log q)^3) \\text{ quantum operations}`}</MathBlock>
        <p className="mt-3">
          For secp256k1, this is roughly <InlineMath>{`O(256^3) \\approx 2^{24}`}</InlineMath>{' '}
          operations - easily tractable for a large quantum computer.
        </p>
        <p className="mt-3">
          <strong>Timeline:</strong> Cryptographically relevant quantum computers are estimated to
          be 10-20+ years away. FROST remains secure until then.
        </p>
      </Definition>

      <h3>Summary: Security in Numbers</h3>

      <Definition title="FROST on secp256k1">
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Parameter</th>
              <th className="text-left py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Classical security</td>
              <td className="py-2">128 bits</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Quantum security</td>
              <td className="py-2">0 bits (broken by Shor)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Signature size</td>
              <td className="py-2">64 bytes</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Public key size</td>
              <td className="py-2">32 bytes</td>
            </tr>
            <tr>
              <td className="py-2">Security compared to single-sig</td>
              <td className="py-2">Identical</td>
            </tr>
          </tbody>
        </table>
      </Definition>

      <p>
        The concrete security bound confirms that FROST provides the same security as standard
        Schnorr signatures, with no degradation from the threshold mechanism.
      </p>
    </LessonLayout>
  );
}
