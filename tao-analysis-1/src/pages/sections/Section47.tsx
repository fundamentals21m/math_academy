import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <p>
        Until now, we have discussed what it means for a function <Math>{String.raw`f: X \to \mathbb{R}`}</Math> to
        have a limit as <Math>{String.raw`x \to x_0`}</Math> as long as <Math>{String.raw`x_0`}</Math> is a <em>real</em> number.
        We now briefly discuss what it would mean to take limits when <Math>{String.raw`x_0`}</Math> is
        equal to <Math>+\infty</Math> or <Math>-\infty</Math>.
      </p>

      <p className="mt-4">
        This is part of a more general theory of continuous functions on a topological space,
        which we will explore further in Chapter 13.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Infinite Adherent Points</h2>

      <p>
        First, we need a notion of what it means for <Math>+\infty</Math> or <Math>-\infty</Math> to
        be adherent to a set.
      </p>

      <Definition id="definition-9.10.1" title="Definition 9.10.1 (Infinite Adherent Points)">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            We say that <Math>+\infty</Math> is <strong>adherent</strong> to <Math>X</Math> iff for
            every <Math>{String.raw`M \in \mathbb{R}`}</Math> there exists an <Math>{String.raw`x \in X`}</Math> such
            that <Math>{String.raw`x > M`}</Math>.
          </li>
          <li>
            We say that <Math>-\infty</Math> is <strong>adherent</strong> to <Math>X</Math> iff for
            every <Math>{String.raw`M \in \mathbb{R}`}</Math> there exists an <Math>{String.raw`x \in X`}</Math> such
            that <Math>{String.raw`x < M`}</Math>.
          </li>
        </ul>
      </Definition>

      <Callout type="info">
        <p>
          <strong>Equivalent characterizations:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>+\infty</Math> is adherent to <Math>X</Math> iff <Math>X</Math> has no upper bound, i.e., <Math>{String.raw`\sup(X) = +\infty`}</Math>.</li>
          <li><Math>-\infty</Math> is adherent to <Math>X</Math> iff <Math>X</Math> has no lower bound, i.e., <Math>{String.raw`\inf(X) = -\infty`}</Math>.</li>
        </ul>
        <p className="mt-2">
          Thus a set is bounded if and only if <Math>+\infty</Math> and <Math>-\infty</Math> are <em>not</em> adherent points.
        </p>
      </Callout>

      <Example id="example-infinite-adherent" title="Examples of Infinite Adherent Points">
        <ul className="list-disc list-inside space-y-2">
          <li>
            For <Math>X = [0, \infty)</Math>, we have <Math>+\infty</Math> adherent to <Math>X</Math> (since <Math>X</Math> is
            unbounded above), but <Math>-\infty</Math> is not adherent (since <Math>X</Math> is bounded below by <Math>0</Math>).
          </li>
          <li>
            For <Math>{String.raw`X = \mathbb{R}`}</Math>, both <Math>+\infty</Math> and <Math>-\infty</Math> are
            adherent to <Math>X</Math>.
          </li>
          <li>
            For <Math>X = [0, 1]</Math>, neither <Math>+\infty</Math> nor <Math>-\infty</Math> is
            adherent to <Math>X</Math> (since <Math>X</Math> is bounded).
          </li>
          <li>
            For <Math>{String.raw`X = \mathbb{N} = \{0, 1, 2, 3, \ldots\}`}</Math>, <Math>+\infty</Math> is
            adherent but <Math>-\infty</Math> is not.
          </li>
        </ul>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Limits at Infinity</h2>

      <Definition id="definition-9.10.3" title="Definition 9.10.3 (Limits at Infinity)">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math> with <Math>+\infty</Math> as
          an adherent point, and let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function.
        </p>
        <p className="mt-2">
          We say that <Math>f(x)</Math> <strong>converges to <Math>L</Math></strong> as <Math>{String.raw`x \to +\infty`}</Math> in <Math>X</Math>,
          and write
        </p>
        <MathBlock>{String.raw`\lim_{x \to +\infty; x \in X} f(x) = L,`}</MathBlock>
        <p>
          iff for every <Math>{String.raw`\varepsilon > 0`}</Math> there exists an <Math>M</Math> such
          that <Math>f</Math> is <Math>\varepsilon</Math>-close to <Math>L</Math> on <Math>{String.raw`X \cap (M, +\infty)`}</Math>,
          i.e., <Math>{String.raw`|f(x) - L| \leq \varepsilon`}</Math> for all <Math>{String.raw`x \in X`}</Math> such
          that <Math>{String.raw`x > M`}</Math>.
        </p>
        <p className="mt-4">
          Similarly, if <Math>-\infty</Math> is adherent to <Math>X</Math>, we say that <Math>f(x)</Math> <strong>converges
          to <Math>L</Math></strong> as <Math>{String.raw`x \to -\infty`}</Math> in <Math>X</Math>, and write
        </p>
        <MathBlock>{String.raw`\lim_{x \to -\infty; x \in X} f(x) = L,`}</MathBlock>
        <p>
          iff for every <Math>{String.raw`\varepsilon > 0`}</Math> there exists an <Math>M</Math> such
          that <Math>f</Math> is <Math>\varepsilon</Math>-close to <Math>L</Math> on <Math>{String.raw`X \cap (-\infty, M)`}</Math>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          <strong>Intuition:</strong> <Math>{String.raw`\lim_{x \to +\infty} f(x) = L`}</Math> means that <Math>f(x)</Math> gets
          arbitrarily close to <Math>L</Math> as <Math>x</Math> becomes sufficiently large. The larger
          we make <Math>x</Math>, the closer <Math>f(x)</Math> is to <Math>L</Math>.
        </p>
      </Callout>

      <Example id="example-9.10.4" title="Example 9.10.4">
        <p>
          Let <Math>{String.raw`f: (0, \infty) \to \mathbb{R}`}</Math> be the function <Math>f(x) := 1/x</Math>.
          Then
        </p>
        <MathBlock>{String.raw`\lim_{x \to +\infty; x \in (0, \infty)} \frac{1}{x} = 0.`}</MathBlock>
        <p className="mt-2">
          <strong>Proof:</strong> Let <Math>{String.raw`\varepsilon > 0`}</Math>. We need to find <Math>M</Math> such
          that <Math>{String.raw`|1/x - 0| \leq \varepsilon`}</Math> for all <Math>{String.raw`x > M`}</Math>.
        </p>
        <p className="mt-2">
          Choose <Math>M = 1/\varepsilon</Math>. Then for <Math>{String.raw`x > M = 1/\varepsilon`}</Math>, we have
        </p>
        <MathBlock>{String.raw`\left|\frac{1}{x}\right| = \frac{1}{x} < \frac{1}{M} = \varepsilon.`}</MathBlock>
        <p>
          Thus <Math>1/x</Math> is <Math>\varepsilon</Math>-close to <Math>0</Math> for all <Math>{String.raw`x > M`}</Math>.
        </p>
      </Example>

      <Example id="example-polynomial-limits" title="Example: Polynomial Limits at Infinity">
        <p>
          For a polynomial <Math>{String.raw`p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_0`}</Math> with <Math>{String.raw`a_n \neq 0`}</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            If <Math>{String.raw`a_n > 0`}</Math>, then <Math>{String.raw`\lim_{x \to +\infty} p(x) = +\infty`}</Math> (diverges to positive infinity).
          </li>
          <li>
            If <Math>{String.raw`a_n < 0`}</Math>, then <Math>{String.raw`\lim_{x \to +\infty} p(x) = -\infty`}</Math> (diverges to negative infinity).
          </li>
        </ul>
        <p className="mt-2">
          More generally, for a rational function <Math>{String.raw`f(x) = \frac{p(x)}{q(x)}`}</Math> where <Math>p</Math> and <Math>q</Math> are
          polynomials:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            If <Math>{String.raw`\deg(p) < \deg(q)`}</Math>, then <Math>{String.raw`\lim_{x \to +\infty} f(x) = 0`}</Math>.
          </li>
          <li>
            If <Math>{String.raw`\deg(p) = \deg(q)`}</Math>, then <Math>{String.raw`\lim_{x \to +\infty} f(x)`}</Math> equals
            the ratio of leading coefficients.
          </li>
          <li>
            If <Math>{String.raw`\deg(p) > \deg(q)`}</Math>, then <Math>{String.raw`\lim_{x \to +\infty} f(x)`}</Math> diverges
            to <Math>\pm\infty</Math>.
          </li>
        </ul>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of Limits at Infinity</h2>

      <p>
        One can do many of the same things with these limits at infinity as we have been doing
        with limits at finite points. In particular, all of the limit laws continue to hold:
      </p>

      <Theorem
        id="theorem-limit-laws-infinity"
        title="Theorem: Limit Laws at Infinity"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math> with <Math>+\infty</Math> adherent,
            and let <Math>{String.raw`f, g: X \to \mathbb{R}`}</Math> be functions with
            <MathBlock>{String.raw`\lim_{x \to +\infty} f(x) = L \quad \text{and} \quad \lim_{x \to +\infty} g(x) = M.`}</MathBlock>
            Then:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><Math>{String.raw`\lim_{x \to +\infty} (f(x) + g(x)) = L + M`}</Math></li>
              <li><Math>{String.raw`\lim_{x \to +\infty} (f(x) - g(x)) = L - M`}</Math></li>
              <li><Math>{String.raw`\lim_{x \to +\infty} (f(x) \cdot g(x)) = L \cdot M`}</Math></li>
              <li><Math>{String.raw`\lim_{x \to +\infty} (cf(x)) = cL`}</Math> for any constant <Math>c</Math></li>
              <li><Math>{String.raw`\lim_{x \to +\infty} \frac{f(x)}{g(x)} = \frac{L}{M}`}</Math> if <Math>{String.raw`M \neq 0`}</Math></li>
            </ul>
            Similar results hold for limits as <Math>{String.raw`x \to -\infty`}</Math>.
          </>
        }
        proof={
          <>
            <p>
              The proofs are analogous to those for finite limits (Proposition 9.3.14).
              One simply replaces "for all <Math>x</Math> sufficiently close to <Math>{String.raw`x_0`}</Math>" with
              "for all <Math>x</Math> sufficiently large."
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Connection to Sequence Limits</h2>

      <p>
        The definition of limits at infinity for functions is consistent with the notion of a
        limit <Math>{String.raw`\lim_{n \to \infty} a_n`}</Math> of a sequence.
      </p>

      <Theorem
        id="theorem-9.10.1"
        title="Theorem: Compatibility of Function and Sequence Limits (Exercise 9.10.1)"
        statement={
          <>
            Let <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> be a sequence of real numbers. View <Math>{String.raw`a_n`}</Math> as
            a function from <Math>{String.raw`\mathbb{N}`}</Math> to <Math>{String.raw`\mathbb{R}`}</Math>. Then
            <MathBlock>{String.raw`\lim_{n \to +\infty; n \in \mathbb{N}} a_n = \lim_{n \to \infty} a_n`}</MathBlock>
            where the left-hand limit is defined by Definition 9.10.3 and the right-hand limit is
            defined by Definition 6.1.8 (the sequence limit). More precisely, if one of the above
            limits exists then so does the other, and they have the same value.
          </>
        }
        proof={
          <>
            <p>
              <strong>(<Math>\Rightarrow</Math>)</strong> Suppose <Math>{String.raw`\lim_{n \to +\infty; n \in \mathbb{N}} a_n = L`}</Math> in
              the sense of Definition 9.10.3. Then for every <Math>{String.raw`\varepsilon > 0`}</Math>, there
              exists <Math>M</Math> such that <Math>{String.raw`|a_n - L| \leq \varepsilon`}</Math> for all
              natural numbers <Math>{String.raw`n > M`}</Math>.
            </p>
            <p className="mt-2">
              Let <Math>N</Math> be any natural number greater than <Math>M</Math>. Then for all <Math>{String.raw`n \geq N`}</Math>,
              we have <Math>{String.raw`n > M`}</Math>, so <Math>{String.raw`|a_n - L| \leq \varepsilon`}</Math>.
              This is exactly the definition of <Math>{String.raw`\lim_{n \to \infty} a_n = L`}</Math>.
            </p>
            <p className="mt-2">
              <strong>(<Math>\Leftarrow</Math>)</strong> Conversely, suppose <Math>{String.raw`\lim_{n \to \infty} a_n = L`}</Math>.
              For any <Math>{String.raw`\varepsilon > 0`}</Math>, there exists <Math>N</Math> such
              that <Math>{String.raw`|a_n - L| \leq \varepsilon`}</Math> for all <Math>{String.raw`n \geq N`}</Math>.
              Setting <Math>M = N</Math>, for all <Math>{String.raw`n \in \mathbb{N}`}</Math> with <Math>{String.raw`n > M`}</Math>,
              we have <Math>{String.raw`n \geq N`}</Math>, so <Math>{String.raw`|a_n - L| \leq \varepsilon`}</Math>.
            </p>
          </>
        }
      />

      <Callout type="info">
        <p>
          <strong>Why this matters:</strong> This theorem tells us that the two notions of "limit
          at infinity" are compatible. When studying sequences, we can use either the sequence
          definition (Definition 6.1.8) or view the sequence as a function and use Definition 9.10.3.
          Both approaches give the same answer.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Horizontal Asymptotes</h2>

      <p>
        Limits at infinity have a natural geometric interpretation in terms of asymptotes.
      </p>

      <Definition id="definition-horizontal-asymptote" title="Definition: Horizontal Asymptote">
        <p>
          Let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function. We say that the line <Math>y = L</Math> is
          a <strong>horizontal asymptote</strong> of <Math>f</Math> if
        </p>
        <MathBlock>{String.raw`\lim_{x \to +\infty} f(x) = L \quad \text{or} \quad \lim_{x \to -\infty} f(x) = L.`}</MathBlock>
      </Definition>

      <Example id="example-horizontal-asymptote" title="Example: Horizontal Asymptotes">
        <p>
          The function <Math>f(x) = 1/x</Math> has <Math>y = 0</Math> as a horizontal asymptote (as <Math>{String.raw`x \to +\infty`}</Math> and
          as <Math>{String.raw`x \to -\infty`}</Math>).
        </p>
        <p className="mt-2">
          The function <Math>{String.raw`g(x) = \frac{2x + 1}{x - 1}`}</Math> has <Math>y = 2</Math> as a horizontal asymptote, since
        </p>
        <MathBlock>{String.raw`\lim_{x \to \pm\infty} \frac{2x + 1}{x - 1} = \lim_{x \to \pm\infty} \frac{2 + 1/x}{1 - 1/x} = \frac{2 + 0}{1 - 0} = 2.`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-slate-600">
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-slate-600 px-4 py-2 text-left">Concept</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Finite Limit Point</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Infinite Limit Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Adherent condition</td>
              <td className="border border-slate-600 px-4 py-2">Points arbitrarily close to x₀</td>
              <td className="border border-slate-600 px-4 py-2">Points arbitrarily large (or small)</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Limit condition</td>
              <td className="border border-slate-600 px-4 py-2">|f(x) - L| {"<"} ε when |x - x₀| {"<"} δ</td>
              <td className="border border-slate-600 px-4 py-2">|f(x) - L| {"<"} ε when x {">"} M</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Limit laws</td>
              <td className="border border-slate-600 px-4 py-2">Hold</td>
              <td className="border border-slate-600 px-4 py-2">Hold</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.10.1</p>
          <p>
            Let <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> be a sequence of real numbers. View <Math>{String.raw`a_n`}</Math> as
            a function from <Math>{String.raw`\mathbb{N}`}</Math> to <Math>{String.raw`\mathbb{R}`}</Math>. Show that
          </p>
          <MathBlock>{String.raw`\lim_{n \to +\infty; n \in \mathbb{N}} a_n = \lim_{n \to \infty} a_n`}</MathBlock>
          <p>
            where the left-hand limit is defined by Definition 9.10.3 and the right-hand limit is
            defined by Definition 6.1.8. More precisely, show that if one of the above two limits
            exists then so does the other, and then they both have the same value.
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise (Additional 1)</p>
          <p>
            Prove that <Math>{String.raw`\lim_{x \to +\infty} \frac{x^2 + 3x}{2x^2 - 1} = \frac{1}{2}`}</Math>.
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise (Additional 2)</p>
          <p>
            Let <Math>{String.raw`f: (0, \infty) \to \mathbb{R}`}</Math> be defined by <Math>{String.raw`f(x) = \frac{\sin x}{x}`}</Math>.
            Use the squeeze theorem to show that <Math>{String.raw`\lim_{x \to +\infty} f(x) = 0`}</Math>.
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise (Additional 3)</p>
          <p>
            Determine all horizontal asymptotes of <Math>{String.raw`f(x) = \frac{x}{\sqrt{x^2 + 1}}`}</Math>.
            (Hint: consider limits as <Math>{String.raw`x \to +\infty`}</Math> and <Math>{String.raw`x \to -\infty`}</Math> separately.)
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
