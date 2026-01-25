import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <p>
        We finally return to the topic of exponentiation of real numbers that we started in Section 20.
        In that section, we defined <Math latex="x^q" /> for all rational <Math latex="q" /> and positive
        real numbers <Math latex="x" />, but we have not yet defined <Math latex="x^\alpha" /> when
        <Math latex="\alpha" /> is a general real number. We now rectify this situation using limits,
        in a similar way to how we defined all the other standard operations on the real numbers.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Continuity of Exponentiation</h2>

      <p>
        Before we can define <Math latex="x^\alpha" /> for real <Math latex="\alpha" />, we need to
        establish that exponentiation behaves continuously with respect to the exponent. This means
        that if we have a sequence of rational exponents converging to a real number, the corresponding
        powers should also converge.
      </p>

      <Theorem
        id="6.7.1"
        title="Lemma: Continuity of exponentiation"
        statement={
          <>
            <p>
              Let <Math latex="x > 0" />, and let <Math latex="\alpha" /> be a real number. Let
              <Math latex="(q_n)_{n=1}^{\infty}" /> be any sequence of rational numbers converging to
              <Math latex="\alpha" />. Then <Math latex="(x^{q_n})_{n=1}^{\infty}" /> is also a convergent sequence.
            </p>
            <p className="mt-2">
              Furthermore, if <Math latex="(q'_n)_{n=1}^{\infty}" /> is any other sequence of rational numbers
              converging to <Math latex="\alpha" />, then <Math latex="(x^{q'_n})_{n=1}^{\infty}" /> has the
              same limit as <Math latex="(x^{q_n})_{n=1}^{\infty}" />:
            </p>
            <MathBlock latex="\lim_{n \to \infty} x^{q_n} = \lim_{n \to \infty} x^{q'_n}." />
          </>
        }
        proof={
          <>
            <p>
              There are three cases: <Math latex="x < 1" />, <Math latex="x = 1" />, and <Math latex="x > 1" />.
              The case <Math latex="x = 1" /> is easy (because <Math latex="x^q = 1" /> for all rational
              <Math latex="q" />). We shall prove the case <Math latex="x > 1" />; the case <Math latex="x < 1" />
              is similar.
            </p>
            <p className="mt-2">
              <strong>Step 1: Show <Math latex="(x^{q_n})" /> converges.</strong> By Proposition 6.4.18,
              it suffices to show that <Math latex="(x^{q_n})" /> is a Cauchy sequence. We need to estimate
              the distance between <Math latex="x^{q_n}" /> and <Math latex="x^{q_m}" />. Assuming
              <Math latex="q_n \geq q_m" /> (so that <Math latex="x^{q_n} \geq x^{q_m}" /> since <Math latex="x > 1" />),
              we have:
            </p>
            <MathBlock latex="d(x^{q_n}, x^{q_m}) = x^{q_n} - x^{q_m} = x^{q_m}(x^{q_n - q_m} - 1)." />
            <p className="mt-2">
              Since <Math latex="(q_n)" /> is convergent, it has some upper bound <Math latex="M" />.
              Since <Math latex="x > 1" />, we have <Math latex="x^{q_m} \leq x^M" />. Thus:
            </p>
            <MathBlock latex="d(x^{q_n}, x^{q_m}) = |x^{q_n} - x^{q_m}| \leq x^M(x^{q_n - q_m} - 1)." />
            <p className="mt-2">
              Now let <Math latex="\varepsilon > 0" />. By Lemma 6.5.3, the sequence <Math latex="(x^{1/k})_{k=1}^{\infty}" />
              converges to 1, so it is eventually <Math latex="\varepsilon x^{-M}" />-close to 1. Thus there
              exists some <Math latex="K \geq 1" /> such that <Math latex="|x^{1/K} - 1| \leq \varepsilon x^{-M}" />.
            </p>
            <p className="mt-2">
              Since <Math latex="(q_n)" /> is convergent, it is a Cauchy sequence, so there exists
              <Math latex="N \geq 1" /> such that <Math latex="q_n" /> and <Math latex="q_m" /> are
              <Math latex="1/K" />-close for all <Math latex="n, m \geq N" />. Thus for <Math latex="n, m \geq N" />
              with <Math latex="q_n \geq q_m" />:
            </p>
            <MathBlock latex="d(x^{q_n}, x^{q_m}) \leq x^M(x^{1/K} - 1) \leq x^M \cdot \varepsilon x^{-M} = \varepsilon." />
            <p className="mt-2">
              By symmetry, this also holds when <Math latex="q_n \leq q_m" />. Thus <Math latex="(x^{q_n})" />
              is eventually <Math latex="\varepsilon" />-steady for every <Math latex="\varepsilon > 0" />,
              and is thus a Cauchy sequence, hence convergent.
            </p>
            <p className="mt-2">
              <strong>Step 2: Show both sequences have the same limit.</strong> It suffices to show that
              <Math latex="\lim_{n \to \infty} x^{q_n - q'_n} = 1" />, since the claim would then follow from
              limit laws (as <Math latex="x^{q_n} = x^{q_n - q'_n} \cdot x^{q'_n}" />).
            </p>
            <p className="mt-2">
              Write <Math latex="r_n := q_n - q'_n" />. By limit laws, <Math latex="(r_n)" /> converges to 0.
              We must show that <Math latex="(x^{r_n})" /> is eventually <Math latex="\varepsilon" />-close to 1
              for every <Math latex="\varepsilon > 0" />. By Lemma 6.5.3, both <Math latex="(x^{1/k})" /> and
              <Math latex="(x^{-1/k})" /> converge to 1, so we can find <Math latex="K" /> such that both
              <Math latex="x^{1/K}" /> and <Math latex="x^{-1/K}" /> are <Math latex="\varepsilon" />-close to 1.
              Since <Math latex="(r_n)" /> converges to 0, it is eventually <Math latex="1/K" />-close to 0,
              so eventually <Math latex="-1/K \leq r_n \leq 1/K" />, and thus
              <Math latex="x^{-1/K} \leq x^{r_n} \leq x^{1/K}" />. This means <Math latex="x^{r_n}" /> is
              eventually <Math latex="\varepsilon" />-close to 1.
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Definition of Real Exponentiation</h2>

      <p>
        With Lemma 6.7.1 established, we can now define exponentiation to a real exponent.
      </p>

      <Definition id="6.7.2" title="Exponentiation to a real exponent">
        <p>
          Let <Math latex="x > 0" /> be real, and let <Math latex="\alpha" /> be a real number. We define
          the quantity <Math latex="x^\alpha" /> by the formula
        </p>
        <MathBlock latex="x^\alpha = \lim_{n \to \infty} x^{q_n}," />
        <p>
          where <Math latex="(q_n)_{n=1}^{\infty}" /> is any sequence of rational numbers converging to
          <Math latex="\alpha" />.
        </p>
      </Definition>

      <Callout type="info" title="Well-definedness of real exponentiation">
        <p>
          Let us verify that this definition is well-defined:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            Given any real number <Math latex="\alpha" />, we always have at least one sequence
            <Math latex="(q_n)" /> of rationals converging to <Math latex="\alpha" /> (by the definition
            of real numbers and Proposition 6.1.15).
          </li>
          <li>
            Given any such sequence, the limit <Math latex="\lim_{n \to \infty} x^{q_n}" /> exists by
            Lemma 6.7.1.
          </li>
          <li>
            Even though there can be multiple choices for the sequence <Math latex="(q_n)" />, they all
            give the same limit by Lemma 6.7.1.
          </li>
        </ol>
        <p className="mt-2">
          Thus the definition is well-defined.
        </p>
      </Callout>

      <Callout type="warning" title="Consistency with rational exponents">
        <p>
          If <Math latex="\alpha" /> is not just real but rational, i.e., <Math latex="\alpha = q" /> for
          some rational <Math latex="q" />, then this definition could in principle be inconsistent with
          our earlier definition from Section 20. But in this case, <Math latex="\alpha" /> is clearly the
          limit of the constant sequence <Math latex="(q)_{n=1}^{\infty}" />, so by definition:
        </p>
        <MathBlock latex="x^\alpha = \lim_{n \to \infty} x^q = x^q." />
        <p>
          Thus the new definition of exponentiation is consistent with the old one.
        </p>
      </Callout>

      <Example id="6.7.sqrt2" title="Computing an irrational power">
        <p>
          Consider <Math latex="2^{\sqrt{2}}" />. To compute this, we can use any sequence of rationals
          converging to <Math latex="\sqrt{2}" />. For instance, using decimal approximations:
        </p>
        <MathBlock latex="q_1 = 1.4, \quad q_2 = 1.41, \quad q_3 = 1.414, \quad q_4 = 1.4142, \ldots" />
        <p>Then:</p>
        <MathBlock latex="2^{\sqrt{2}} = \lim_{n \to \infty} 2^{q_n} = \lim_{n \to \infty} 2^{1.4}, 2^{1.41}, 2^{1.414}, \ldots" />
        <p>
          This limit exists and equals approximately <Math latex="2.6651..." />.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of Real Exponentiation</h2>

      <p>
        The key result is that all the properties we established for rational exponents in Section 20
        continue to hold for real exponents.
      </p>

      <Theorem
        id="6.7.3"
        title="Proposition: Properties of real exponentiation"
        statement={
          <p>
            All the results of Lemma 5.6.9 (from Section 20), which held for rational numbers <Math latex="q" />
            and <Math latex="r" />, continue to hold for real numbers <Math latex="q" /> and <Math latex="r" />.
            Specifically, for <Math latex="x, y > 0" /> and <Math latex="q, r \in \mathbb{R}" />:
          </p>
        }
      />

      <div className="ml-4 space-y-2 mt-4">
        <p><strong>(a)</strong> <Math latex="x^0 = 1" /></p>
        <p><strong>(b)</strong> <Math latex="x^{q+r} = x^q \cdot x^r" /> and <Math latex="x^{q-r} = x^q / x^r" /></p>
        <p><strong>(c)</strong> <Math latex="(x^q)^r = x^{qr}" /></p>
        <p><strong>(d)</strong> <Math latex="(xy)^q = x^q y^q" /></p>
        <p><strong>(e)</strong> If <Math latex="q > 0" />, then <Math latex="x > y > 0" /> iff <Math latex="x^q > y^q" /></p>
        <p><strong>(f)</strong> If <Math latex="x > 1" />, then <Math latex="x^q > x^r" /> iff <Math latex="q > r" />;
        if <Math latex="x < 1" />, then <Math latex="x^q > x^r" /> iff <Math latex="q < r" /></p>
      </div>

      <Theorem
        id="6.7.3.proof"
        title="Proof of property (b)"
        statement={
          <p>
            We demonstrate the proof for the identity <Math latex="x^{q+r} = x^q x^r" />; the other parts are similar.
          </p>
        }
        proof={
          <>
            <p>
              Let <Math latex="q" /> and <Math latex="r" /> be real numbers. Then we can write
              <Math latex="q = \lim_{n \to \infty} q_n" /> and <Math latex="r = \lim_{n \to \infty} r_n" />
              for some sequences <Math latex="(q_n)" /> and <Math latex="(r_n)" /> of rationals (by the
              definition of real numbers and Proposition 6.1.15).
            </p>
            <p className="mt-2">
              By the limit laws, <Math latex="q + r" /> is the limit of <Math latex="(q_n + r_n)_{n=1}^{\infty}" />.
              By definition of real exponentiation:
            </p>
            <MathBlock latex="x^{q+r} = \lim_{n \to \infty} x^{q_n + r_n}; \quad x^q = \lim_{n \to \infty} x^{q_n}; \quad x^r = \lim_{n \to \infty} x^{r_n}." />
            <p className="mt-2">
              But by Lemma 5.6.9(b) applied to <em>rational</em> exponents, we have
              <Math latex="x^{q_n + r_n} = x^{q_n} x^{r_n}" />. Thus by limit laws:
            </p>
            <MathBlock latex="x^{q+r} = \lim_{n \to \infty} x^{q_n + r_n} = \lim_{n \to \infty} x^{q_n} x^{r_n} = \left(\lim_{n \to \infty} x^{q_n}\right)\left(\lim_{n \to \infty} x^{r_n}\right) = x^q x^r." />
          </>
        }
      />

      <Example id="6.7.verify" title="Verifying properties with irrational exponents">
        <p>
          Let's verify <Math latex="x^{q+r} = x^q x^r" /> for <Math latex="x = 2" />,
          <Math latex="q = \sqrt{2}" />, and <Math latex="r = \sqrt{3}" />:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math latex="2^{\sqrt{2}} \approx 2.6651" /></li>
          <li><Math latex="2^{\sqrt{3}} \approx 3.3220" /></li>
          <li><Math latex="2^{\sqrt{2}} \cdot 2^{\sqrt{3}} \approx 8.8537" /></li>
          <li><Math latex="2^{\sqrt{2} + \sqrt{3}} \approx 8.8537" /></li>
        </ul>
        <p className="mt-2">
          The values match (up to rounding), confirming the property.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Exponential Function</h2>

      <p>
        With real exponentiation fully defined, we can now consider <Math latex="x^\alpha" /> as a
        function of either variable:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Power function</strong>: For fixed <Math latex="\alpha" />, the function
          <Math latex="x \mapsto x^\alpha" /> (for <Math latex="x > 0" />) is the power function with
          exponent <Math latex="\alpha" />.
        </li>
        <li>
          <strong>Exponential function</strong>: For fixed <Math latex="x > 0" />, the function
          <Math latex="\alpha \mapsto x^\alpha" /> is the exponential function with base <Math latex="x" />.
        </li>
      </ul>

      <Callout type="info" title="Monotonicity of exponential functions">
        <p>
          From property (f) above:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <Math latex="x > 1" />, then <Math latex="\alpha \mapsto x^\alpha" /> is strictly increasing.</li>
          <li>If <Math latex="x = 1" />, then <Math latex="x^\alpha = 1" /> for all <Math latex="\alpha" />.</li>
          <li>If <Math latex="0 < x < 1" />, then <Math latex="\alpha \mapsto x^\alpha" /> is strictly decreasing.</li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.7.1</p>
          <p className="mt-1">
            Prove the remaining components of Proposition 6.7.3. That is, show that properties (a), (c),
            (d), (e), and (f) from Lemma 5.6.9 extend from rational to real exponents.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.7.2</p>
          <p className="mt-1">
            Let <Math latex="x > 0" /> and let <Math latex="\alpha" /> be a real number. Show that
            <Math latex="\lim_{n \to \infty} x^{\alpha + 1/n} = x^\alpha" /> and
            <Math latex="\lim_{n \to \infty} x^{\alpha - 1/n} = x^\alpha" />.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.7.3</p>
          <p className="mt-1">
            Let <Math latex="x, y > 0" /> be positive reals with <Math latex="x \neq y" />. Let
            <Math latex="\alpha" /> be a non-zero real number. Show that <Math latex="x^\alpha = y^\alpha" />
            if and only if <Math latex="x = y" />.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.7.4</p>
          <p className="mt-1">
            Let <Math latex="x > 1" /> and let <Math latex="\alpha, \beta" /> be real numbers with
            <Math latex="\alpha < \beta" />. Show that there exists a rational <Math latex="q" /> such
            that <Math latex="x^\alpha < x^q < x^\beta" />.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Real exponentiation</strong>: For <Math latex="x > 0" /> and real <Math latex="\alpha" />,
            we define <Math latex="x^\alpha = \lim_{n \to \infty} x^{q_n}" /> where <Math latex="(q_n)" /> is
            any sequence of rationals converging to <Math latex="\alpha" />.
          </li>
          <li>
            <strong>Lemma 6.7.1</strong> guarantees this definition is well-defined: the limit exists and
            is independent of the choice of sequence.
          </li>
          <li>
            <strong>All properties extend</strong>: The exponent laws (<Math latex="x^{q+r} = x^q x^r" />,
            <Math latex="(x^q)^r = x^{qr}" />, etc.) hold for real exponents, proved by taking limits
            of the rational case.
          </li>
          <li>
            This completes Chapter 6: we have developed the theory of limits of sequences and used it to
            extend exponentiation from rationals to reals.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>

      <p>
        With the theory of limits of sequences complete, including the extension of exponentiation to
        real exponents, we are now ready to move on to <strong>Chapter 7: Series</strong>. We will use
        our theory of limits to develop the theory of infinite series
        <Math latex="\sum_{n=m}^{\infty} a_n = a_m + a_{m+1} + a_{m+2} + \cdots" />, building on the
        finite series we developed earlier. This will lead to important results about convergence tests,
        absolute convergence, and rearrangements of series.
      </p>
    </LessonLayout>
  );
}
