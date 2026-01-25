import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <p>
        We now discuss a class of functions which is distinct from the class of continuous
        functions, but has somewhat similar properties: the class of <em>monotone</em> (or
        <em>monotonic</em>) functions.
      </p>

      <Definition id="definition-9.8.1" title="Definition 9.8.1 (Monotonic Functions)">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
          let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            We say that <Math>f</Math> is <strong>monotone increasing</strong> iff <Math>{String.raw`f(y) \geq f(x)`}</Math> whenever <Math>{String.raw`x, y \in X`}</Math> and <Math>{String.raw`y > x`}</Math>.
          </li>
          <li>
            We say that <Math>f</Math> is <strong>strictly monotone increasing</strong> iff <Math>{String.raw`f(y) > f(x)`}</Math> whenever <Math>{String.raw`x, y \in X`}</Math> and <Math>{String.raw`y > x`}</Math>.
          </li>
          <li>
            We say that <Math>f</Math> is <strong>monotone decreasing</strong> iff <Math>{String.raw`f(y) \leq f(x)`}</Math> whenever <Math>{String.raw`x, y \in X`}</Math> and <Math>{String.raw`y > x`}</Math>.
          </li>
          <li>
            We say that <Math>f</Math> is <strong>strictly monotone decreasing</strong> iff <Math>{String.raw`f(y) < f(x)`}</Math> whenever <Math>{String.raw`x, y \in X`}</Math> and <Math>{String.raw`y > x`}</Math>.
          </li>
        </ul>
        <p className="mt-2">
          We say that <Math>f</Math> is <strong>monotone</strong> if it is monotone increasing or
          monotone decreasing, and <strong>strictly monotone</strong> if it is strictly monotone
          increasing or strictly monotone decreasing.
        </p>
      </Definition>

      <Example id="examples-9.8.2" title="Examples 9.8.2">
        <p>
          The function <Math>f(x) := x^2</Math>, when restricted to the domain <Math>[0, \infty)</Math>,
          is strictly monotone increasing. Indeed, if <Math>{String.raw`0 \leq x < y`}</Math>, then
        </p>
        <MathBlock>{String.raw`y^2 - x^2 = (y-x)(y+x) > 0`}</MathBlock>
        <p>
          since <Math>{String.raw`y - x > 0`}</Math> and <Math>{String.raw`y + x > 0`}</Math>.
        </p>
        <p className="mt-2">
          However, when restricted to the domain <Math>(-\infty, 0]</Math>, the same
          function <Math>f(x) = x^2</Math> is strictly monotone <em>decreasing</em>.
          If <Math>{String.raw`x < y \leq 0`}</Math>, then <Math>{String.raw`y^2 - x^2 = (y-x)(y+x) < 0`}</Math> since <Math>{String.raw`y - x > 0`}</Math> but <Math>{String.raw`y + x < 0`}</Math>.
        </p>
        <p className="mt-2">
          Thus <Math>f(x) = x^2</Math> is strictly monotone on both <Math>(-\infty, 0]</Math> and <Math>[0, \infty)</Math>,
          but is <em>not</em> monotone (or strictly monotone) on the full real line <Math>(-\infty, \infty)</Math>.
        </p>
        <p className="mt-2">
          Note that if a function is strictly monotone on a domain <Math>X</Math>, it is automatically
          monotone as well on the same domain <Math>X</Math>.
        </p>
        <p className="mt-2">
          The constant function <Math>f(x) := 6</Math>, when restricted to an arbitrary
          domain <Math>{String.raw`X \subseteq \mathbb{R}`}</Math>, is both monotone increasing and
          monotone decreasing, but is not strictly monotone (unless <Math>X</Math> consists of at
          most one point).
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Monotonicity vs. Continuity</h2>

      <p>
        The classes of continuous functions and monotone functions are distinct—neither is a
        subset of the other.
      </p>

      <Example id="example-continuous-not-monotone" title="Continuous but Not Monotone">
        <p>
          The function <Math>{String.raw`f(x) = x^2`}</Math> on <Math>{String.raw`\mathbb{R}`}</Math> is
          continuous everywhere, but is not monotone on all of <Math>{String.raw`\mathbb{R}`}</Math>.
          It decreases on <Math>(-\infty, 0]</Math> and increases on <Math>[0, \infty)</Math>.
        </p>
      </Example>

      <Example id="example-monotone-not-continuous" title="Monotone but Not Continuous">
        <p>
          Consider the function <Math>{String.raw`f: [-1, 1] \to \mathbb{R}`}</Math> defined by:
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} -1 & \text{if } x \leq 0 \\ 1 & \text{if } x > 0 \end{cases}`}</MathBlock>
        <p>
          This function is monotone increasing (in fact, monotone non-decreasing), but it is
          discontinuous at <Math>x = 0</Math>.
        </p>
      </Example>

      <Callout type="info">
        <p>
          <strong>Key observation:</strong> Monotone functions obey the maximum principle
          (Exercise 9.8.1), but not the intermediate value principle (Exercise 9.8.2). This is
          the opposite of what one might expect: monotonicity alone is not enough to guarantee
          that a function takes all intermediate values.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of Monotone Functions</h2>

      <Theorem
        id="theorem-monotone-maximum"
        title="Theorem: Monotone Functions and the Maximum Principle (Exercise 9.8.1)"
        statement={
          <>
            Let <Math>{String.raw`a < b`}</Math> be real numbers, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
            a monotone function. Then <Math>f</Math> attains its maximum and minimum on <Math>[a, b]</Math>.
          </>
        }
        proof={
          <>
            <p>
              If <Math>f</Math> is monotone increasing, then <Math>{String.raw`f(a) \leq f(x) \leq f(b)`}</Math> for
              all <Math>{String.raw`x \in [a, b]`}</Math>. Thus <Math>f</Math> attains its minimum
              at <Math>a</Math> and its maximum at <Math>b</Math>.
            </p>
            <p className="mt-2">
              If <Math>f</Math> is monotone decreasing, then <Math>{String.raw`f(b) \leq f(x) \leq f(a)`}</Math> for
              all <Math>{String.raw`x \in [a, b]`}</Math>. Thus <Math>f</Math> attains its minimum
              at <Math>b</Math> and its maximum at <Math>a</Math>.
            </p>
          </>
        }
      />

      <Theorem
        id="theorem-monotone-ivt-fails"
        title="Theorem: IVT Fails for Monotone Functions (Exercise 9.8.2)"
        statement={
          <>
            The intermediate value theorem does not hold if continuity is replaced by monotonicity.
          </>
        }
        proof={
          <>
            <p>
              Consider the monotone increasing function <Math>{String.raw`f: [-1, 1] \to \mathbb{R}`}</Math>:
            </p>
            <MathBlock>{String.raw`f(x) := \begin{cases} -1 & \text{if } x \leq 0 \\ 1 & \text{if } x > 0 \end{cases}`}</MathBlock>
            <p>
              We have <Math>f(-1) = -1</Math> and <Math>f(1) = 1</Math>, so <Math>0</Math> is between <Math>f(-1)</Math> and <Math>f(1)</Math>.
              However, there is no <Math>{String.raw`c \in [-1, 1]`}</Math> such that <Math>f(c) = 0</Math>.
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Strictly Monotone Continuous Functions</h2>

      <p>
        If a function is <em>both</em> strictly monotone and continuous, then it has many nice
        properties. In particular, it is invertible:
      </p>

      <Theorem
        id="proposition-9.8.3"
        title="Proposition 9.8.3 (Invertibility of Strictly Monotone Continuous Functions)"
        statement={
          <>
            Let <Math>{String.raw`a < b`}</Math> be real numbers, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
            a function which is both continuous and strictly monotone increasing. Then <Math>f</Math> is
            a bijection from <Math>[a, b]</Math> to <Math>[f(a), f(b)]</Math>, and the
            inverse <Math>{String.raw`f^{-1}: [f(a), f(b)] \to [a, b]`}</Math> is also continuous and
            strictly monotone increasing.
          </>
        }
        proof={
          <>
            <p>
              <strong>Step 1: <Math>f</Math> is injective.</strong> If <Math>{String.raw`x \neq y`}</Math> in <Math>[a, b]</Math>,
              then either <Math>{String.raw`x < y`}</Math> or <Math>{String.raw`y < x`}</Math>. In either case, strict
              monotonicity implies <Math>{String.raw`f(x) \neq f(y)`}</Math>.
            </p>
            <p className="mt-2">
              <strong>Step 2: <Math>f</Math> is surjective onto <Math>[f(a), f(b)]</Math>.</strong> Since <Math>f</Math> is
              strictly monotone increasing, we have <Math>{String.raw`f(a) < f(b)`}</Math>. By Corollary 9.7.4
              (images of continuous functions), <Math>f([a, b]) = [m, M]</Math> where <Math>m</Math> and <Math>M</Math> are
              the minimum and maximum of <Math>f</Math>. Since <Math>f</Math> is strictly increasing, <Math>m = f(a)</Math> and <Math>M = f(b)</Math>.
              Thus <Math>f([a, b]) = [f(a), f(b)]</Math>.
            </p>
            <p className="mt-2">
              <strong>Step 3: <Math>{String.raw`f^{-1}`}</Math> is strictly monotone increasing.</strong> Let <Math>{String.raw`y_1 < y_2`}</Math> in <Math>[f(a), f(b)]</Math>.
              Let <Math>{String.raw`x_1 = f^{-1}(y_1)`}</Math> and <Math>{String.raw`x_2 = f^{-1}(y_2)`}</Math>.
              If <Math>{String.raw`x_1 \geq x_2`}</Math>, then by monotonicity of <Math>f</Math>,
              we'd have <Math>{String.raw`f(x_1) \geq f(x_2)`}</Math>, i.e., <Math>{String.raw`y_1 \geq y_2`}</Math>, contradiction.
              Thus <Math>{String.raw`x_1 < x_2`}</Math>, proving <Math>{String.raw`f^{-1}`}</Math> is strictly increasing.
            </p>
            <p className="mt-2">
              <strong>Step 4: <Math>{String.raw`f^{-1}`}</Math> is continuous.</strong> We use the ε-δ definition.
              Let <Math>{String.raw`y_0 \in [f(a), f(b)]`}</Math> and <Math>{String.raw`\varepsilon > 0`}</Math>.
              Let <Math>{String.raw`x_0 = f^{-1}(y_0)`}</Math>. We need to find <Math>{String.raw`\delta > 0`}</Math> such
              that <Math>{String.raw`|f^{-1}(y) - x_0| < \varepsilon`}</Math> whenever <Math>{String.raw`|y - y_0| < \delta`}</Math>.
            </p>
            <p className="mt-2">
              Choose <Math>{String.raw`\varepsilon' = \min(\varepsilon, x_0 - a, b - x_0)`}</Math> (adjusting at
              endpoints). Since <Math>f</Math> is strictly increasing and continuous,
              set <Math>{String.raw`\delta = \min(f(x_0) - f(x_0 - \varepsilon'), f(x_0 + \varepsilon') - f(x_0))`}</Math>.
              Then <Math>{String.raw`|y - y_0| < \delta`}</Math> implies <Math>{String.raw`|f^{-1}(y) - x_0| < \varepsilon`}</Math>.
            </p>
          </>
        }
      />

      <Callout type="info">
        <p>
          <strong>Analogous result:</strong> There is a similar proposition for functions which are
          strictly monotone decreasing: if <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> is continuous
          and strictly monotone decreasing, then <Math>f</Math> is a bijection from <Math>[a, b]</Math> to <Math>[f(b), f(a)]</Math>,
          and <Math>{String.raw`f^{-1}`}</Math> is also continuous and strictly monotone decreasing.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Application: nth Roots</h2>

      <Example id="example-9.8.4" title="Example 9.8.4 (nth Roots via Inverse Functions)">
        <p>
          Let <Math>n</Math> be a positive integer and <Math>{String.raw`R > 0`}</Math>. The
          function <Math>f(x) := x^n</Math> is strictly increasing on the interval <Math>[0, R]</Math>.
        </p>
        <p className="mt-2">
          By Proposition 9.8.3, this function is a bijection from <Math>[0, R]</Math> to <Math>[0, R^n]</Math>,
          and hence there is a continuous, strictly increasing inverse from <Math>[0, R^n]</Math> to <Math>[0, R]</Math>.
        </p>
        <p className="mt-2">
          This provides an alternate means to construct the <Math>n</Math>th root <Math>x^{'{1/n}'}</Math> of
          a number <Math>{String.raw`x \in [0, R^n]`}</Math> compared to what was done in Lemma 5.6.5. The
          inverse function approach also immediately gives us continuity of the <Math>n</Math>th root function.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Continuous Injective Functions</h2>

      <Theorem
        id="theorem-continuous-injective"
        title="Theorem: Continuous Injective Functions are Strictly Monotone (Exercise 9.8.3)"
        statement={
          <>
            Let <Math>{String.raw`a < b`}</Math> be real numbers, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
            a function which is both continuous and one-to-one. Then <Math>f</Math> is strictly monotone.
          </>
        }
        proof={
          <>
            <p>
              We divide into three cases: <Math>{String.raw`f(a) < f(b)`}</Math>, <Math>f(a) = f(b)</Math>,
              or <Math>{String.raw`f(a) > f(b)`}</Math>.
            </p>
            <p className="mt-2">
              <strong>Case 2:</strong> <Math>f(a) = f(b)</Math>. Since <Math>f</Math> is one-to-one
              and <Math>{String.raw`a \neq b`}</Math>, we must have <Math>{String.raw`f(a) \neq f(b)`}</Math>.
              This is a contradiction, so this case is impossible.
            </p>
            <p className="mt-2">
              <strong>Case 1:</strong> <Math>{String.raw`f(a) < f(b)`}</Math>. We claim <Math>f</Math> is
              strictly monotone increasing. Suppose not; then there exist <Math>{String.raw`x < y`}</Math> in <Math>[a, b]</Math> with <Math>{String.raw`f(x) \geq f(y)`}</Math>.
            </p>
            <p className="mt-2 ml-4">
              If <Math>f(x) = f(y)</Math>, this contradicts injectivity since <Math>{String.raw`x \neq y`}</Math>.
            </p>
            <p className="mt-2 ml-4">
              If <Math>{String.raw`f(x) > f(y)`}</Math>, consider the value <Math>f(y)</Math>. We
              have <Math>{String.raw`f(a) < f(b)`}</Math>. By considering the positions of <Math>x, y</Math> relative
              to <Math>a, b</Math> and applying the IVT, we can find another point <Math>z</Math> with <Math>f(z) = f(y)</Math>,
              contradicting injectivity.
            </p>
            <p className="mt-2">
              <strong>Case 3:</strong> <Math>{String.raw`f(a) > f(b)`}</Math>. By a similar argument, <Math>f</Math> is
              strictly monotone decreasing.
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Discontinuities of Monotone Functions</h2>

      <p>
        While monotone functions need not be continuous, they cannot have "too many" discontinuities.
        In fact, monotone functions can only have jump discontinuities, and the set of discontinuities
        is at most countable.
      </p>

      <Theorem
        id="theorem-monotone-discontinuities"
        title="Theorem: Monotone Functions Have Only Jump Discontinuities"
        statement={
          <>
            Let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be a monotone function. Then at every
            point <Math>{String.raw`x_0 \in (a, b)`}</Math>, both one-sided limits <Math>{String.raw`f(x_0^-)`}</Math> and <Math>{String.raw`f(x_0^+)`}</Math> exist.
            Furthermore, if <Math>f</Math> is monotone increasing:
            <MathBlock>{String.raw`f(x_0^-) \leq f(x_0) \leq f(x_0^+)`}</MathBlock>
            with <Math>f</Math> continuous at <Math>{String.raw`x_0`}</Math> if and only if equality holds throughout.
          </>
        }
        proof={
          <>
            <p>
              Assume <Math>f</Math> is monotone increasing (the decreasing case is similar).
              For <Math>{String.raw`x_0 \in (a, b)`}</Math>, consider the
              set <Math>{String.raw`\{f(x) : x \in [a, x_0)\}`}</Math>. This set is bounded above
              by <Math>{String.raw`f(x_0)`}</Math>, so it has a supremum <Math>L^- = f(x_0^-)</Math>.
            </p>
            <p className="mt-2">
              For any <Math>{String.raw`\varepsilon > 0`}</Math>, there exists <Math>{String.raw`x < x_0`}</Math> with <Math>{String.raw`f(x) > L^- - \varepsilon`}</Math>.
              For all <Math>y</Math> with <Math>{String.raw`x < y < x_0`}</Math>, monotonicity
              gives <Math>{String.raw`L^- - \varepsilon < f(x) \leq f(y) \leq L^-`}</Math>.
              Thus <Math>{String.raw`\lim_{x \to x_0^-} f(x) = L^-`}</Math>.
            </p>
            <p className="mt-2">
              Similarly, <Math>{String.raw`f(x_0^+) = \inf\{f(x) : x \in (x_0, b]\}`}</Math> exists.
              The inequalities follow from the definitions and monotonicity.
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary Table</h2>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-slate-600">
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-slate-600 px-4 py-2 text-left">Property</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Continuous</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Monotone</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Both</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Maximum principle</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">IVT</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
              <td className="border border-slate-600 px-4 py-2">No</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Invertible (if injective)</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Inverse continuous</td>
              <td className="border border-slate-600 px-4 py-2">Not always</td>
              <td className="border border-slate-600 px-4 py-2">Not always</td>
              <td className="border border-slate-600 px-4 py-2">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.8.1</p>
          <p>
            Explain why the maximum principle remains true if the hypothesis that <Math>f</Math> is
            continuous is replaced with <Math>f</Math> being monotone, or with <Math>f</Math> being
            strictly monotone. (You can use the same explanation for both cases.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.8.2</p>
          <p>
            Give an example to show that the intermediate value theorem becomes false if the
            hypothesis that <Math>f</Math> is continuous is replaced with <Math>f</Math> being
            monotone, or with <Math>f</Math> being strictly monotone. (You can use the same
            counterexample for both cases.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.8.3</p>
          <p>
            Let <Math>{String.raw`a < b`}</Math> be real numbers, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
            a function which is both continuous and one-to-one. Show that <Math>f</Math> is strictly
            monotone. (Hint: divide into the three cases <Math>{String.raw`f(a) < f(b)`}</Math>, <Math>f(a) = f(b)</Math>, <Math>{String.raw`f(a) > f(b)`}</Math>.
            The second case leads directly to a contradiction. In the first case, use contradiction
            and the intermediate value theorem to show that <Math>f</Math> is strictly monotone increasing;
            in the third case, argue similarly to show <Math>f</Math> is strictly monotone decreasing.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.8.4</p>
          <p>
            Prove Proposition 9.8.3. (Hint: to show that <Math>{String.raw`f^{-1}`}</Math> is continuous,
            it is easiest to use the "epsilon-delta" definition of continuity, Proposition 9.4.7(c).)
            Is the proposition still true if the continuity assumption is dropped, or if strict
            monotonicity is replaced just by monotonicity? How should one modify the proposition to
            deal with strictly monotone decreasing functions instead of strictly monotone increasing functions?
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.8.5</p>
          <p>
            This exercise constructs a function which has a discontinuity at every rational point,
            but is continuous at every irrational. Since the rationals are countable, we can write
            them as <Math>{String.raw`\mathbb{Q} = \{q(0), q(1), q(2), \ldots\}`}</Math>,
            where <Math>{String.raw`q: \mathbb{N} \to \mathbb{Q}`}</Math> is a bijection.
            Define <Math>{String.raw`g: \mathbb{Q} \to \mathbb{R}`}</Math> by <Math>g(q(n)) := 2^{'{-n}'}</Math>.
            Then define <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> by:
          </p>
          <MathBlock>{String.raw`f(x) := \sum_{r \in \mathbb{Q}: r < x} g(r).`}</MathBlock>
          <p className="mt-2">
            (a) Show that <Math>f</Math> is strictly monotone increasing.<br />
            (b) Show that for every rational number <Math>r</Math>, <Math>f</Math> is discontinuous at <Math>r</Math>.<br />
            (c) Show that for every irrational number <Math>x</Math>, <Math>f</Math> is continuous at <Math>x</Math>.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
