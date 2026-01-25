import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Armed now with the limit laws and the squeeze test, we can compute a large number
          of limits. In this section, we collect several important "standard limits" that
          arise frequently in analysis. These results form a toolkit that we'll use repeatedly
          when studying series, continuity, and differentiation.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The key limits we'll establish involve powers, roots, and their combinations. The
          proofs typically use the monotone bounded sequence theorem, limit laws, and the
          squeeze test that we developed in previous sections.
        </p>
      </section>

      {/* Constant Sequences */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">The Simplest Limits</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          A particularly simple limit is that of the <strong>constant sequence</strong> <Math>{'c, c, c, c, \\ldots'}</Math>;
          we clearly have:
        </p>

        <MathBlock>{`\\lim_{n \\to \\infty} c = c`}</MathBlock>

        <p className="text-slate-300 leading-relaxed mt-4 mb-4">
          for any constant <Math>{'c'}</Math>. This follows immediately from the definition of convergence:
          for any <Math>{'\\varepsilon > 0'}</Math>, we have <Math>{'|c - c| = 0 \\leq \\varepsilon'}</Math> for all <Math>{'n'}</Math>.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          We also proved in Proposition 6.1.11 that <Math>{'\\lim_{n \\to \\infty} 1/n = 0'}</Math>. This
          fundamental limit, combined with the limit laws, gives us many more results.
        </p>
      </section>

      {/* Powers of 1/n */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Powers of 1/n</h2>

        <Theorem
          id="6.5.1"
          title="Corollary: Roots of 1/n converge to 0"
          proof={`From Lemma 5.6.6 we know that 1/n^{1/k} is a decreasing function of n (since 1/n decreases and taking kth roots preserves order for positive numbers), while being bounded below by 0.

By Proposition 6.3.8 (monotone bounded sequences converge, applied to decreasing sequences), the sequence (1/n^{1/k})_{n=1}^∞ converges to some limit L ≥ 0:

L = lim_{n→∞} 1/n^{1/k}

Raising this to the kth power and using the limit laws (Theorem 6.1.19(b) applied k times), we obtain:

L^k = lim_{n→∞} 1/n

By Proposition 6.1.11, we have L^k = 0. But this means L cannot be positive (else L^k would be positive), so L = 0.`}
        >
          <p>
            We have <Math>{'\\lim_{n \\to \\infty} 1/n^{1/k} = 0'}</Math> for every
            integer <Math>{'k \\geq 1'}</Math>.
          </p>
        </Theorem>

        <Example id="6.5.1.1" title="Application">
          <p>
            From Corollary 6.5.1 and the limit laws, we can deduce:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><Math>{'\\lim_{n \\to \\infty} 1/\\sqrt{n} = 0'}</Math> (take <Math>{'k = 2'}</Math>)</li>
            <li><Math>{'\\lim_{n \\to \\infty} 1/\\sqrt[3]{n} = 0'}</Math> (take <Math>{'k = 3'}</Math>)</li>
            <li><Math>{'\\lim_{n \\to \\infty} 1/n^{1/k} = 0'}</Math> for any positive integer <Math>{'k'}</Math></li>
          </ul>
        </Example>

        <Callout type="info" className="mt-4">
          <p>
            More generally, one can show that <Math>{'\\lim_{n \\to \\infty} 1/n^q = 0'}</Math> for
            any rational <Math>{'q > 0'}</Math>. This follows from Corollary 6.5.1 and the limit
            laws (see Exercise 6.5.1).
          </p>
          <p className="mt-2">
            As a consequence, <Math>{'\\lim_{n \\to \\infty} n^q'}</Math> does <strong>not exist</strong> (as
            a finite limit) for any rational <Math>{'q > 0'}</Math>, since <Math>{'n^q \\to +\\infty'}</Math>.
          </p>
        </Callout>
      </section>

      {/* Powers of x */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Powers of x</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          We now completely characterize the behavior of <Math>{'x^n'}</Math> as <Math>{'n \\to \\infty'}</Math> for
          all real <Math>{'x'}</Math>.
        </p>

        <Theorem
          id="6.5.2"
          title="Lemma: Behavior of x^n"
          proof={`We consider several cases:

Case |x| < 1: We already proved in Proposition 6.3.10 that lim_{n→∞} x^n = 0 when 0 < x < 1. For -1 < x < 0, we have 0 < |x| < 1, so |x^n| = |x|^n → 0. By the zero test (Corollary 6.4.17), x^n → 0.

Case x = 1: The sequence is constant: 1, 1, 1, ..., so lim_{n→∞} 1^n = 1.

Case x = -1: The sequence is -1, 1, -1, 1, ..., which oscillates and never gets eventually ε-close to any value for ε < 1. Thus it diverges.

Case |x| > 1: Suppose x > 1. The sequence (x^n) is increasing (since x^{n+1} = x · x^n > x^n) and unbounded (it exceeds any bound M for large enough n). Thus it diverges to +∞.

For x < -1, the sequence |x^n| = |x|^n → +∞, but the signs alternate, so the sequence oscillates between arbitrarily large positive and negative values, hence diverges.`}
        >
          <p>
            Let <Math>{'x'}</Math> be a real number. Then the limit <Math>{'\\lim_{n \\to \\infty} x^n'}</Math>:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>exists and is equal to <Math>{'0'}</Math> when <Math>{'|x| < 1'}</Math></li>
            <li>exists and is equal to <Math>{'1'}</Math> when <Math>{'x = 1'}</Math></li>
            <li>diverges when <Math>{'x = -1'}</Math> or when <Math>{'|x| > 1'}</Math></li>
          </ul>
        </Theorem>

        <Example id="6.5.2.1" title="Examples of x^n">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Math>{'\\lim_{n \\to \\infty} (1/2)^n = 0'}</Math> since <Math>{'|1/2| < 1'}</Math>
            </li>
            <li>
              <Math>{'\\lim_{n \\to \\infty} (-1/3)^n = 0'}</Math> since <Math>{'|-1/3| < 1'}</Math>
            </li>
            <li>
              <Math>{'\\lim_{n \\to \\infty} (0.999)^n = 0'}</Math> since <Math>{'|0.999| < 1'}</Math>
            </li>
            <li>
              <Math>{'(2)^n = 2, 4, 8, 16, \\ldots'}</Math> diverges to <Math>{'+\\infty'}</Math>
            </li>
            <li>
              <Math>{'(-1)^n = -1, 1, -1, 1, \\ldots'}</Math> diverges (oscillates)
            </li>
            <li>
              <Math>{'(-2)^n = -2, 4, -8, 16, \\ldots'}</Math> diverges (oscillates with growing magnitude)
            </li>
          </ul>
        </Example>
      </section>

      {/* Roots of x */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Roots of x</h2>

        <Theorem
          id="6.5.3"
          title="Lemma: nth roots converge to 1"
          proof={`We consider two cases: x ≥ 1 and 0 < x < 1.

Case x ≥ 1: The sequence (x^{1/n}) is decreasing (since x^{1/(n+1)} < x^{1/n} when x > 1) and bounded below by 1. By the monotone bounded sequence theorem, it converges to some limit L ≥ 1.

We need to show L = 1. If L > 1, then for any ε > 0, eventually x^{1/n} ≤ L + ε. But we can show (using Lemma 6.5.2) that for any M > 0 and any ε > 0, there exists n such that M^{1/n} ≤ 1 + ε. Taking M = x and ε = (L-1)/2, we get a contradiction for large n. Thus L = 1.

Case 0 < x < 1: We have x^{1/n} = 1/(1/x)^{1/n}. Since 1/x > 1, by the previous case, (1/x)^{1/n} → 1. By limit laws for quotients, x^{1/n} → 1/1 = 1.

Case x = 1: Trivially, 1^{1/n} = 1 for all n, so the limit is 1.`}
        >
          <p>
            For any <Math>{'x > 0'}</Math>, we have:
          </p>
          <MathBlock>{`\\lim_{n \\to \\infty} x^{1/n} = 1`}</MathBlock>
        </Theorem>

        <Example id="6.5.3.1" title="Examples of x^{1/n}">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Math>{'\\lim_{n \\to \\infty} 2^{1/n} = 1'}</Math> (the sequence <Math>{'2, \\sqrt{2}, \\sqrt[3]{2}, \\sqrt[4]{2}, \\ldots'}</Math> approaches 1)
            </li>
            <li>
              <Math>{'\\lim_{n \\to \\infty} 100^{1/n} = 1'}</Math>
            </li>
            <li>
              <Math>{'\\lim_{n \\to \\infty} (1/2)^{1/n} = 1'}</Math> (the sequence <Math>{'1/2, 1/\\sqrt{2}, 1/\\sqrt[3]{2}, \\ldots'}</Math> approaches 1)
            </li>
            <li>
              <Math>{'\\lim_{n \\to \\infty} (0.001)^{1/n} = 1'}</Math>
            </li>
          </ul>
        </Example>

        <Callout type="info" className="mt-4">
          <p>
            <strong>Intuition:</strong> No matter how large or small a positive number <Math>{'x'}</Math> is,
            taking higher and higher roots brings it closer and closer to 1. This is because <Math>{'x^{1/n}'}</Math> is
            the number whose <Math>{'n'}</Math>th power equals <Math>{'x'}</Math>—and for large <Math>{'n'}</Math>,
            this number must be very close to 1 (since <Math>{'1^n = 1'}</Math> for any <Math>{'n'}</Math>).
          </p>
        </Callout>
      </section>

      {/* Summary Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Summary of Standard Limits</h2>

        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <table className="w-full text-slate-300">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-2 text-amber-400">Sequence</th>
                <th className="text-left py-2 text-amber-400">Limit</th>
                <th className="text-left py-2 text-amber-400">Conditions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-2"><Math>{'c'}</Math> (constant)</td>
                <td className="py-2"><Math>{'c'}</Math></td>
                <td className="py-2">Always</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2"><Math>{'1/n'}</Math></td>
                <td className="py-2"><Math>{'0'}</Math></td>
                <td className="py-2">Always</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2"><Math>{'1/n^{1/k}'}</Math></td>
                <td className="py-2"><Math>{'0'}</Math></td>
                <td className="py-2"><Math>{'k \\geq 1'}</Math> integer</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2"><Math>{'1/n^q'}</Math></td>
                <td className="py-2"><Math>{'0'}</Math></td>
                <td className="py-2"><Math>{'q > 0'}</Math> rational</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2"><Math>{'x^n'}</Math></td>
                <td className="py-2"><Math>{'0'}</Math></td>
                <td className="py-2"><Math>{'|x| < 1'}</Math></td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2"><Math>{'x^n'}</Math></td>
                <td className="py-2"><Math>{'1'}</Math></td>
                <td className="py-2"><Math>{'x = 1'}</Math></td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2"><Math>{'x^n'}</Math></td>
                <td className="py-2">Diverges</td>
                <td className="py-2"><Math>{'x = -1'}</Math> or <Math>{'|x| > 1'}</Math></td>
              </tr>
              <tr>
                <td className="py-2"><Math>{'x^{1/n}'}</Math></td>
                <td className="py-2"><Math>{'1'}</Math></td>
                <td className="py-2"><Math>{'x > 0'}</Math></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.5.1</p>
            <p className="text-slate-300">
              Show that <Math>{'\\lim_{n \\to \\infty} 1/n^q = 0'}</Math> for any
              rational <Math>{'q > 0'}</Math>. (Hint: use Corollary 6.5.1 and the limit laws,
              Theorem 6.1.19.) Conclude that the limit <Math>{'\\lim_{n \\to \\infty} n^q'}</Math> does
              not exist. (Hint: argue by contradiction using Theorem 6.1.19(e).)
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.5.2</p>
            <p className="text-slate-300">
              Prove Lemma 6.5.2. (Hint: use Proposition 6.3.10, Exercise 6.3.4, and the squeeze test.)
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.5.3</p>
            <p className="text-slate-300">
              Prove Lemma 6.5.3. (Hint: you may need to treat the cases <Math>{'x \\geq 1'}</Math> and <Math>{'x < 1'}</Math> separately.
              You might wish to first use Lemma 6.5.2 to prove the preliminary result that for
              every <Math>{'\\varepsilon > 0'}</Math> and every real number <Math>{'M > 0'}</Math>, there
              exists an <Math>{'n'}</Math> such that <Math>{'M^{1/n} \\leq 1 + \\varepsilon'}</Math>.)
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.5.4</p>
            <p className="text-slate-300">
              Use the standard limits to evaluate:
            </p>
            <ul className="list-alpha pl-6 mt-2 text-slate-300 space-y-1">
              <li><Math>{'\\lim_{n \\to \\infty} \\frac{3^n + 2^n}{4^n}'}</Math></li>
              <li><Math>{'\\lim_{n \\to \\infty} \\frac{n + 1}{n^2}'}</Math></li>
              <li><Math>{'\\lim_{n \\to \\infty} (1 + 1/n)^{1/n}'}</Math></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            Constant sequences converge to themselves: <Math>{'\\lim c = c'}</Math>.
          </li>
          <li>
            <Math>{'\\lim_{n \\to \\infty} 1/n^{1/k} = 0'}</Math> for any positive integer <Math>{'k'}</Math>.
          </li>
          <li>
            More generally, <Math>{'\\lim_{n \\to \\infty} 1/n^q = 0'}</Math> for any rational <Math>{'q > 0'}</Math>.
          </li>
          <li>
            <Math>{'\\lim_{n \\to \\infty} x^n = 0'}</Math> iff <Math>{'|x| < 1'}</Math>; equals 1 iff <Math>{'x = 1'}</Math>; diverges otherwise.
          </li>
          <li>
            <Math>{'\\lim_{n \\to \\infty} x^{1/n} = 1'}</Math> for all <Math>{'x > 0'}</Math>.
          </li>
          <li>
            These standard limits, combined with limit laws and the squeeze test, allow us to
            compute many other limits.
          </li>
        </ul>
      </section>

      {/* Looking Ahead */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Looking Ahead</h2>
        <p className="text-slate-300 leading-relaxed">
          In the next section, we will study <strong>subsequences</strong>—sequences obtained by
          selecting elements from a larger sequence while preserving order. This leads to the
          important <strong>Bolzano-Weierstrass theorem</strong>, which states that every bounded
          sequence has a convergent subsequence. We will also see how subsequences relate to
          limit points and provide another way to characterize convergence.
        </p>
      </section>
    </LessonLayout>
  );
}
