import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>Elliptic Curve Factorization</h2>

      <p>
        Lenstra's elliptic curve factorization method (ECM) is a powerful algorithm for finding
        small to medium-sized factors of large numbers. Unlike the quadratic sieve or NFS,
        ECM's running time depends on the size of the factor, not the number being factored.
      </p>

      <h3>The Basic Idea</h3>

      <p>
        ECM generalizes Pollard's <MathBlock math="p-1" inline /> method. Recall that{' '}
        <MathBlock math="p-1" inline /> works when <MathBlock math="p-1" inline /> is smooth.
        ECM uses elliptic curves where the group order <MathBlock math="\#E(\mathbb{F}_p)" inline />{' '}
        varies, giving many chances to find a smooth order.
      </p>

      <Theorem title="Key Observation"
        proof={
          <>
            <p>We establish why varying elliptic curves gives ECM its power.</p>
            <p><strong>Hasse's bound:</strong> For any elliptic curve <em>E</em> over <MathBlock math="\mathbb{F}_p" inline />, the group order <MathBlock math="\#E(\mathbb{F}_p) = p + 1 - t" inline /> where <MathBlock math="|t| \leq 2\sqrt{p}" inline />. The trace <em>t</em> depends on the curve.</p>
            <p><strong>Distribution of orders:</strong> By the Sato-Tate theorem (proven by Taylor et al., 2008), as we vary over elliptic curves mod <em>p</em>, the normalized trace <MathBlock math="t/(2\sqrt{p})" inline /> is distributed according to a semicircular distribution on <MathBlock math="[-1, 1]" inline />.</p>
            <p>More precisely, the number of isomorphism classes of elliptic curves over <MathBlock math="\mathbb{F}_p" inline /> with order <MathBlock math="m = p + 1 - t" inline /> is given by the Kronecker class number <MathBlock math="H(t^2 - 4p)" inline /> (for <MathBlock math="|t| < 2\sqrt{p}" inline />).</p>
            <p><strong>Smoothness probability:</strong> If <MathBlock math="m = \#E(\mathbb{F}_p)" inline /> happens to be <em>B</em>-smooth, the ECM computation of <MathBlock math="M \cdot P" inline /> (where <MathBlock math="M = \text{lcm}(1,2,\ldots,B)" inline />) will yield the identity mod <em>p</em> but not necessarily mod <em>n</em>, revealing <em>p</em>.</p>
            <p><strong>Key advantage:</strong> Unlike Pollard's <MathBlock math="p-1" inline /> method (which is stuck with <MathBlock math="p-1" inline />), ECM can try <MathBlock math="p + 1 - t" inline /> for various <em>t</em> in the Hasse interval. Since there are <MathBlock math="\sim 4\sqrt{p}" inline /> possible orders, if any one is smooth, ECM succeeds. The probability that at least one of many random integers near <em>p</em> is smooth is much higher than for a single fixed value.</p>
          </>
        }
      >
        For an elliptic curve <em>E</em> and prime factor <em>p</em> of <em>n</em>:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><MathBlock math="\#E(\mathbb{F}_p) \in [p + 1 - 2\sqrt{p}, p + 1 + 2\sqrt{p}]" inline /></li>
          <li>Different curves give different orders in this range</li>
          <li>If we're unlucky with one curve, try another!</li>
        </ul>
      </Theorem>

      <h3>Lenstra's ECM Algorithm</h3>

      <Definition title="ECM Algorithm">
        <p><strong>Input:</strong> Composite <em>n</em>, smoothness bound <em>B</em></p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Choose random curve <em>E</em> and point <em>P</em> (mod <em>n</em>)</li>
          <li>Compute <MathBlock math="M = \text{lcm}(1, 2, \ldots, B)" inline /></li>
          <li>Try to compute <MathBlock math="Q = MP" inline /> using group law mod <em>n</em></li>
          <li>If computation fails (GCD gives factor), output factor</li>
          <li>If no factor found, try new curve and repeat</li>
        </ol>
      </Definition>

      <p>
        The computation fails when we need to invert a number <em>d</em> with{' '}
        <MathBlock math="1 < \gcd(d, n) < n" inline />. This happens exactly when{' '}
        <MathBlock math="MP = \mathcal{O}" inline /> mod <em>p</em> but not mod <em>n</em>.
      </p>

      <Example title="ECM Example">
        <p>Factor <MathBlock math="n = 455839" inline /> using curve <MathBlock math="y^2 = x^3 + 5x - 5" inline />,
        point <MathBlock math="P = (1, 1)" inline /></p>
        <p className="mt-2">Compute <MathBlock math="2! \cdot P = 2P" inline />:</p>
        <p>Slope <MathBlock math="\lambda = (3 \cdot 1^2 + 5)/(2 \cdot 1) = 8/2 = 4" inline /></p>
        <p><MathBlock math="2P = (14, -57)" inline /></p>
        <p className="mt-2">Compute <MathBlock math="3! \cdot P = 6P = 3 \cdot 2P" inline />:</p>
        <p>During calculation of <MathBlock math="3 \cdot 2P" inline />, need to invert some denominator <em>d</em>...</p>
        <p>If <MathBlock math="\gcd(d, 455839) = 599" inline />, we found factor 599!</p>
        <p className="mt-2">Check: <MathBlock math="455839 = 599 \times 761" inline /></p>
      </Example>

      <h3>Stage 2 Improvement</h3>

      <Definition title="ECM Stage 2">
        After Stage 1 with bound <em>B1</em>, the group order may have one large prime factor{' '}
        <MathBlock math="q \in (B_1, B_2]" inline />. Stage 2 handles this:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>After Stage 1, we have <MathBlock math="Q = M \cdot P" inline /> where{' '}
              <MathBlock math="M = \prod_{p^a \leq B_1} p^a" inline /></li>
          <li>For each prime <MathBlock math="q \in (B_1, B_2]" inline />, check if <MathBlock math="qQ = \mathcal{O}" inline /></li>
          <li>Efficiently: precompute <MathBlock math="Q, 2Q, 4Q, 6Q, \ldots" inline /> and{' '}
              use differences between consecutive primes</li>
        </ol>
        Stage 2 significantly increases success probability with moderate extra cost.
      </Definition>

      <h3>Complexity Analysis</h3>

      <Theorem title="ECM Complexity"
        proof={
          <>
            <p>We derive the subexponential complexity of ECM for finding a prime factor <em>p</em>.</p>
            <p><strong>Success probability per curve:</strong> The group order <MathBlock math="m = \#E(\mathbb{F}_p)" inline /> is a random-looking integer in the interval <MathBlock math="[p + 1 - 2\sqrt{p}, p + 1 + 2\sqrt{p}]" inline />. By the Canfield-Erdos-Pomerance theorem, the probability that <em>m</em> is <em>B</em>-smooth is approximately:</p>
            <MathBlock math="\rho(u) \approx u^{-u}, \quad u = \frac{\ln p}{\ln B}" />
            <p><strong>Cost per curve:</strong> Computing <MathBlock math="M \cdot P" inline /> where <MathBlock math="M = \text{lcm}(1, \ldots, B) \approx e^B" inline /> requires <MathBlock math="O(B)" inline /> elliptic curve operations (via prime-by-prime multiplication). Each EC operation costs <MathBlock math="O((\log n)^2)" inline />.</p>
            <p><strong>Expected curves needed:</strong> <MathBlock math="1/\rho(u) \approx u^u" inline /> curves on average.</p>
            <p><strong>Total cost:</strong> <MathBlock math="T(B) = B \cdot u^u \cdot (\log n)^{O(1)}" inline /></p>
            <p><strong>Optimization:</strong> Set <MathBlock math="B = L(p)^{1/\sqrt{2}}" inline /> where <MathBlock math="L(p) = e^{\sqrt{\ln p \ln \ln p}}" inline />. Then:</p>
            <MathBlock math="u = \frac{\ln p}{\ln B} = \frac{\ln p}{(1/\sqrt{2})\sqrt{\ln p \ln \ln p}} = \sqrt{2} \cdot \sqrt{\frac{\ln p}{\ln \ln p}}" />
            <MathBlock math="u \ln u = \sqrt{2} \cdot \sqrt{\frac{\ln p}{\ln \ln p}} \cdot \frac{1}{2}\ln\left(\frac{\ln p}{\ln \ln p}\right) = \frac{1}{\sqrt{2}} \sqrt{\ln p \ln \ln p} + o(\cdot)" />
            <p>Thus <MathBlock math="u^u = L(p)^{1/\sqrt{2} + o(1)}" inline /> and:</p>
            <MathBlock math="T = B \cdot u^u = L(p)^{1/\sqrt{2}} \cdot L(p)^{1/\sqrt{2}} = L(p)^{\sqrt{2} + o(1)}" />
            <p>Crucially, this depends only on <em>p</em>, not on the size of <em>n</em>. ECM is thus optimal for finding "small" factors of large numbers.</p>
          </>
        }
      >
        To find a prime factor <em>p</em> of <em>n</em>, ECM requires expected time:
        <MathBlock math="L(p)^{\sqrt{2} + o(1)} = \exp\left((1 + o(1))\sqrt{2 \ln p \ln \ln p}\right)" />
        <p className="mt-2">Note: The complexity depends on <em>p</em>, not on <em>n</em>!</p>
      </Theorem>

      <Callout type="info">
        <strong>Optimal for Small Factors:</strong> ECM excels when <em>n</em> has a "small" factor
        (up to ~60 digits). For balanced semiprimes where <MathBlock math="p \approx q \approx \sqrt{n}" inline />,
        NFS is faster.
      </Callout>

      <h3>Parameter Selection</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Recommended ECM Parameters</h4>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Factor Size</th>
              <th className="text-left py-2">B1</th>
              <th className="text-left py-2">B2</th>
              <th className="text-left py-2">Curves</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">20 digits</td>
              <td className="py-2">11,000</td>
              <td className="py-2">1.9M</td>
              <td className="py-2">74</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">30 digits</td>
              <td className="py-2">250,000</td>
              <td className="py-2">130M</td>
              <td className="py-2">214</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">40 digits</td>
              <td className="py-2">3M</td>
              <td className="py-2">5.7B</td>
              <td className="py-2">430</td>
            </tr>
            <tr>
              <td className="py-2">50 digits</td>
              <td className="py-2">43M</td>
              <td className="py-2">240B</td>
              <td className="py-2">904</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Montgomery Curves</h3>

      <Definition title="Montgomery Form">
        For efficiency, ECM often uses curves in <strong>Montgomery form</strong>:
        <MathBlock math="By^2 = x^3 + Ax^2 + x" />
        Point addition uses only x-coordinates (projective), avoiding expensive field inversions.
        This gives approximately 3× speedup over Weierstrass form.
      </Definition>

      <h3>Comparison with Other Methods</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">Complexity</th>
              <th className="text-left py-2">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Trial Division</td>
              <td className="py-2"><MathBlock math="O(p)" inline /></td>
              <td className="py-2">Very small factors</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Pollard Rho</td>
              <td className="py-2"><MathBlock math="O(\sqrt{p})" inline /></td>
              <td className="py-2">Small factors</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Pollard p-1</td>
              <td className="py-2">Depends on smoothness</td>
              <td className="py-2">Smooth p-1</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">ECM</td>
              <td className="py-2"><MathBlock math="L(p)^{\sqrt{2}}" inline /></td>
              <td className="py-2">Medium factors (~60 digits)</td>
            </tr>
            <tr>
              <td className="py-2">QS/NFS</td>
              <td className="py-2"><MathBlock math="L(n)^{c}" inline /></td>
              <td className="py-2">Balanced semiprimes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>ECM Records</h3>

      <p>
        ECM is primarily used to find factors in the 30-70 digit range. Record factors found:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>2019: 83-digit factor (using special hardware)</li>
        <li>Commonly finds 50-60 digit factors in large-scale searches</li>
        <li>Essential preprocessing step before running NFS</li>
      </ul>

      <Callout type="success">
        <strong>Practical Impact:</strong> ECM is the method of choice for finding medium-sized
        factors. It's used routinely to remove small factors before attempting expensive NFS
        factorizations, and for factoring numbers in computational number theory research.
      </Callout>
    </LessonLayout>
  );
}
