import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { IVTVisualizer } from '@/components/visualizations';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <p>
        We have just shown that a continuous function on a closed interval attains both its
        maximum value and its minimum value. We now show that <Math>f</Math> also attains
        every value in between. This is one of the most intuitive and powerful results about
        continuous functions.
      </p>

      {/* Interactive Visualization */}
      <div className="my-8">
        <IVTVisualizer />
      </div>

      <Theorem
        id="theorem-9.7.1"
        title="Theorem 9.7.1 (Intermediate Value Theorem)"
        statement={
          <>
            Let <Math>{String.raw`a < b`}</Math>, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
            a continuous function on <Math>[a, b]</Math>. Let <Math>y</Math> be a real number
            between <Math>f(a)</Math> and <Math>f(b)</Math>, i.e.,
            either <Math>{String.raw`f(a) \leq y \leq f(b)`}</Math> or <Math>{String.raw`f(a) \geq y \geq f(b)`}</Math>.
            Then there exists <Math>{String.raw`c \in [a, b]`}</Math> such that <Math>f(c) = y</Math>.
          </>
        }
        proof={
          <>
            <p>
              We have two cases: <Math>{String.raw`f(a) \leq y \leq f(b)`}</Math> or <Math>{String.raw`f(a) \geq y \geq f(b)`}</Math>.
              We will assume the former; the latter is proven similarly.
            </p>
            <p className="mt-2">
              If <Math>y = f(a)</Math> or <Math>y = f(b)</Math>, the claim is easy as we can
              set <Math>c = a</Math> or <Math>c = b</Math>. So assume <Math>{String.raw`f(a) < y < f(b)`}</Math>.
            </p>
            <p className="mt-2">
              Let <Math>E</Math> denote the set:
            </p>
            <MathBlock>{String.raw`E := \{x \in [a, b] : f(x) < y\}.`}</MathBlock>
            <p>
              Clearly <Math>E</Math> is a subset of <Math>[a, b]</Math> and hence bounded.
              Since <Math>{String.raw`f(a) < y`}</Math>, we see that <Math>a \in E</Math>, so <Math>E</Math> is
              non-empty. By the least upper bound principle, the supremum
            </p>
            <MathBlock>{String.raw`c := \sup(E)`}</MathBlock>
            <p>
              is finite. Since <Math>E</Math> is bounded by <Math>b</Math>, we have <Math>{String.raw`c \leq b`}</Math>;
              since <Math>E</Math> contains <Math>a</Math>, we have <Math>{String.raw`c \geq a`}</Math>.
              Thus <Math>{String.raw`c \in [a, b]`}</Math>.
            </p>
            <p className="mt-2">
              We now show <Math>f(c) = y</Math> by working from both sides.
            </p>
            <p className="mt-2">
              <strong>From the left (<Math>{String.raw`f(c) \leq y`}</Math>):</strong> For
              any <Math>{String.raw`n \geq 1`}</Math>, the number <Math>{String.raw`c - \frac{1}{n}`}</Math> is
              less than <Math>c = \sup(E)</Math>, so it cannot be an upper bound for <Math>E</Math>.
              Thus there exists <Math>{String.raw`x_n \in E`}</Math> with <Math>{String.raw`c - \frac{1}{n} \leq x_n \leq c`}</Math>.
              By the squeeze test, <Math>{String.raw`\lim_{n \to \infty} x_n = c`}</Math>. Since <Math>f</Math> is
              continuous at <Math>c</Math>, <Math>{String.raw`\lim_{n \to \infty} f(x_n) = f(c)`}</Math>.
              But <Math>{String.raw`f(x_n) < y`}</Math> for all <Math>n</Math>, so by the comparison
              principle, <Math>{String.raw`f(c) \leq y`}</Math>. Since <Math>{String.raw`f(b) > f(c)`}</Math>,
              we conclude <Math>{String.raw`c \neq b`}</Math>.
            </p>
            <p className="mt-2">
              <strong>From the right (<Math>{String.raw`f(c) \geq y`}</Math>):</strong> Since <Math>{String.raw`c \neq b`}</Math> and <Math>{String.raw`c \in [a, b]`}</Math>,
              we have <Math>{String.raw`c < b`}</Math>. For sufficiently large <Math>N</Math>, we
              have <Math>{String.raw`c + \frac{1}{n} < b`}</Math> for all <Math>{String.raw`n > N`}</Math>.
              Since <Math>c</Math> is the supremum of <Math>E</Math> and <Math>{String.raw`c + \frac{1}{n} > c`}</Math>,
              we have <Math>{String.raw`c + \frac{1}{n} \notin E`}</Math> for <Math>{String.raw`n > N`}</Math>.
              Since <Math>{String.raw`c + \frac{1}{n} \in [a, b]`}</Math>, this
              means <Math>{String.raw`f(c + \frac{1}{n}) \geq y`}</Math>.
              As <Math>{String.raw`c + \frac{1}{n} \to c`}</Math> and <Math>f</Math> is continuous, <Math>{String.raw`f(c) \geq y`}</Math>.
            </p>
            <p className="mt-2">
              Combining <Math>{String.raw`f(c) \leq y`}</Math> and <Math>{String.raw`f(c) \geq y`}</Math>,
              we get <Math>f(c) = y</Math>.
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Intuition and Significance</h2>

      <p>
        The intermediate value theorem says that if <Math>f</Math> takes the values <Math>f(a)</Math> and <Math>f(b)</Math>,
        then it must also take all the values in between. Intuitively, a continuous function
        cannot "jump" over values—it must pass through every intermediate value.
      </p>

      <Example id="example-discontinuous-jump" title="Discontinuous Functions Can Jump">
        <p>
          If <Math>f</Math> is not continuous, then the intermediate value theorem no longer applies.
          Consider the function <Math>{String.raw`f: [-1, 1] \to \mathbb{R}`}</Math> defined by:
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} -1 & \text{if } x \leq 0 \\ 1 & \text{if } x > 0 \end{cases}`}</MathBlock>
        <p>
          Then <Math>f(-1) = -1</Math> and <Math>f(1) = 1</Math>, but there is
          no <Math>{String.raw`c \in [-1, 1]`}</Math> for which <Math>f(c) = 0</Math>. The discontinuity
          at <Math>x = 0</Math> allows the function to "jump" past the intermediate value <Math>0</Math>.
        </p>
      </Example>

      <Callout type="info">
        <p>
          <strong>Key insight:</strong> Continuity is the essential hypothesis. The IVT fails
          for discontinuous functions precisely because they can jump over intermediate values.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Multiple Intermediate Values</h2>

      <Example id="example-multiple-roots" title="Multiple Roots (Remark 9.7.2)">
        <p>
          A continuous function may take an intermediate value multiple times.
          Consider <Math>{String.raw`f: [-2, 2] \to \mathbb{R}`}</Math> defined by <Math>f(x) := x^3 - x</Math>.
        </p>
        <p className="mt-2">
          We have <Math>f(-2) = -6</Math> and <Math>f(2) = 6</Math>, so we know there
          exists <Math>{String.raw`c \in [-2, 2]`}</Math> with <Math>f(c) = 0</Math>. In fact, there
          are <em>three</em> such values: <Math>f(-1) = f(0) = f(1) = 0</Math>.
        </p>
        <p className="mt-2">
          The IVT guarantees existence of at least one root, but does not guarantee uniqueness.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Application: Existence of Roots</h2>

      <Example id="example-nth-roots" title="Existence of nth Roots (Remark 9.7.3)">
        <p>
          The intermediate value theorem provides another way to show that one can take
          <Math>n</Math>th roots of a number.
        </p>
        <p className="mt-2">
          To construct the square root of <Math>2</Math>, consider <Math>{String.raw`f: [0, 2] \to \mathbb{R}`}</Math> defined
          by <Math>f(x) = x^2</Math>. This function is continuous with <Math>f(0) = 0</Math> and <Math>f(2) = 4</Math>.
        </p>
        <p className="mt-2">
          Since <Math>2</Math> is between <Math>0</Math> and <Math>4</Math>, by the IVT there
          exists <Math>{String.raw`c \in [0, 2]`}</Math> such that <Math>f(c) = 2</Math>,
          i.e., <Math>c^2 = 2</Math>.
        </p>
        <p className="mt-2">
          This argument proves that there is <em>at least one</em> square root of <Math>2</Math>.
          (To show uniqueness, we would need to use the fact that <Math>x^2</Math> is strictly
          increasing on <Math>[0, \infty)</Math>.)
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Images of Continuous Functions</h2>

      <Theorem
        id="corollary-9.7.4"
        title="Corollary 9.7.4 (Images of Continuous Functions)"
        statement={
          <>
            Let <Math>{String.raw`a < b`}</Math> and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
            a continuous function on <Math>[a, b]</Math>.
            Let <Math>{String.raw`M := \sup_{x \in [a,b]} f(x)`}</Math> be the maximum value
            of <Math>f</Math>, and let <Math>{String.raw`m := \inf_{x \in [a,b]} f(x)`}</Math> be
            the minimum value. Let <Math>y</Math> be a real number between <Math>m</Math> and <Math>M</Math> (i.e., <Math>{String.raw`m \leq y \leq M`}</Math>).
            Then there exists <Math>{String.raw`c \in [a, b]`}</Math> such that <Math>f(c) = y</Math>.
            Furthermore, <Math>f([a, b]) = [m, M]</Math>.
          </>
        }
        proof={
          <>
            <p>
              By the maximum principle (Proposition 9.6.7), <Math>f</Math> attains its maximum
              at some point <Math>{String.raw`x_{\max} \in [a, b]`}</Math> and its minimum at
              some <Math>{String.raw`x_{\min} \in [a, b]`}</Math>.
              So <Math>{String.raw`f(x_{\min}) = m`}</Math> and <Math>{String.raw`f(x_{\max}) = M`}</Math>.
            </p>
            <p className="mt-2">
              Let <Math>{String.raw`m \leq y \leq M`}</Math>. If <Math>{String.raw`x_{\min} < x_{\max}`}</Math>, apply
              the IVT to <Math>{String.raw`f|_{[x_{\min}, x_{\max}]}`}</Math>;
              if <Math>{String.raw`x_{\min} > x_{\max}`}</Math>, apply it
              to <Math>{String.raw`f|_{[x_{\max}, x_{\min}]}`}</Math>. In either case, there
              exists <Math>c</Math> with <Math>f(c) = y</Math>.
            </p>
            <p className="mt-2">
              Thus every value in <Math>[m, M]</Math> is achieved, so <Math>{String.raw`[m, M] \subseteq f([a, b])`}</Math>.
              Conversely, for any <Math>{String.raw`x \in [a, b]`}</Math>, we
              have <Math>{String.raw`m \leq f(x) \leq M`}</Math>, so <Math>{String.raw`f([a, b]) \subseteq [m, M]`}</Math>.
              Therefore <Math>f([a, b]) = [m, M]</Math>.
            </p>
          </>
        }
      />

      <Callout type="info">
        <p>
          <strong>Important consequence:</strong> The image of a closed interval under a continuous
          function is again a closed interval. This combines the maximum principle (which gives us
          that the image is bounded and the bounds are achieved) with the IVT (which gives us all
          intermediate values).
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Fixed Point Theorem</h2>

      <Theorem
        id="theorem-fixed-point"
        title="Theorem: Fixed Point Theorem (Exercise 9.7.2)"
        statement={
          <>
            Let <Math>{String.raw`f: [0, 1] \to [0, 1]`}</Math> be a continuous function. Then there
            exists a real number <Math>{String.raw`x \in [0, 1]`}</Math> such that <Math>f(x) = x</Math>.
          </>
        }
        proof={
          <>
            <p>
              Consider the function <Math>g(x) := f(x) - x</Math> on <Math>[0, 1]</Math>.
              Since <Math>f</Math> and the identity function are both continuous, <Math>g</Math> is continuous.
            </p>
            <p className="mt-2">
              We have:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><Math>{String.raw`g(0) = f(0) - 0 = f(0) \geq 0`}</Math> (since <Math>{String.raw`f(0) \in [0, 1]`}</Math>)</li>
              <li><Math>{String.raw`g(1) = f(1) - 1 \leq 0`}</Math> (since <Math>{String.raw`f(1) \in [0, 1]`}</Math>)</li>
            </ul>
            <p className="mt-2">
              If <Math>g(0) = 0</Math>, then <Math>x = 0</Math> is a fixed point.
              If <Math>g(1) = 0</Math>, then <Math>x = 1</Math> is a fixed point.
            </p>
            <p className="mt-2">
              Otherwise, <Math>{String.raw`g(0) > 0`}</Math> and <Math>{String.raw`g(1) < 0`}</Math>,
              so <Math>0</Math> is between <Math>g(1)</Math> and <Math>g(0)</Math>. By the IVT, there
              exists <Math>{String.raw`x \in [0, 1]`}</Math> such that <Math>g(x) = 0</Math>,
              i.e., <Math>f(x) = x</Math>.
            </p>
          </>
        }
      />

      <Definition id="definition-fixed-point" title="Definition: Fixed Point">
        <p>
          A point <Math>x</Math> is called a <strong>fixed point</strong> of a
          function <Math>f</Math> if <Math>f(x) = x</Math>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          <strong>Significance:</strong> Fixed point theorems play an important role in many areas
          of analysis. This basic result is a one-dimensional version of the celebrated Brouwer
          fixed point theorem, which states that every continuous function from a closed ball to
          itself has a fixed point.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>

      <p>The key results for continuous functions on closed intervals are:</p>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-slate-600">
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-slate-600 px-4 py-2 text-left">Property</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Theorem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Bounded</td>
              <td className="border border-slate-600 px-4 py-2">Lemma 9.6.3</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Attains maximum and minimum</td>
              <td className="border border-slate-600 px-4 py-2">Maximum Principle (Prop. 9.6.7)</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Attains all intermediate values</td>
              <td className="border border-slate-600 px-4 py-2">Intermediate Value Theorem (Thm. 9.7.1)</td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2">Image is a closed interval</td>
              <td className="border border-slate-600 px-4 py-2">Corollary 9.7.4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.7.1</p>
          <p>Prove Corollary 9.7.4. (Hint: you may need Exercise 9.4.6 in addition to the intermediate value theorem.)</p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 9.7.2</p>
          <p>
            Let <Math>{String.raw`f: [0, 1] \to [0, 1]`}</Math> be a continuous function. Show that there
            exists a real number <Math>x</Math> in <Math>[0, 1]</Math> such that <Math>f(x) = x</Math>.
            (Hint: apply the intermediate value theorem to the function <Math>f(x) - x</Math>.)
            This point <Math>x</Math> is known as a <em>fixed point</em> of <Math>f</Math>.
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise (Additional)</p>
          <p>
            Use the intermediate value theorem to prove that every polynomial of odd degree has at
            least one real root. (Hint: consider the behavior of the polynomial as <Math>{String.raw`x \to \pm\infty`}</Math>.)
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
