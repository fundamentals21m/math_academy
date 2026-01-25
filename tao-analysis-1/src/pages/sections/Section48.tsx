import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { DerivativeExplorer } from '@/components/visualizations';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <p>
        We can now begin the rigorous treatment of calculus in earnest, starting with the notion
        of a <em>derivative</em>. We define derivatives analytically, using limits, in contrast to
        the geometric definition using tangents.
      </p>

      <p className="mt-4">
        The advantage of working analytically is that (a) we do not need to know the axioms of
        geometry, and (b) these definitions can be modified to handle functions of several variables,
        or functions whose values are vectors instead of scalars. Furthermore, one's geometric
        intuition becomes difficult to rely on once one has more than three dimensions.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Definition of the Derivative</h2>

      {/* Interactive Visualization */}
      <div className="my-8">
        <DerivativeExplorer />
      </div>

      <Definition id="definition-10.1.1" title="Definition 10.1.1 (Differentiability at a Point)">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
          let <Math>{String.raw`x_0 \in X`}</Math> be an element of <Math>X</Math> which is also a <em>limit
          point</em> of <Math>X</Math>. Let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function. If the limit
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in X \setminus \{x_0\}} \frac{f(x) - f(x_0)}{x - x_0}`}</MathBlock>
        <p>
          converges to some real number <Math>L</Math>, then we say that <Math>f</Math> is
          <strong> differentiable at <Math>{String.raw`x_0`}</Math></strong> on <Math>X</Math> with
          derivative <Math>L</Math>, and write <Math>{String.raw`f'(x_0) := L`}</Math>.
        </p>
        <p className="mt-2">
          If the limit does not exist, or if <Math>{String.raw`x_0`}</Math> is not an element of <Math>X</Math> or
          not a limit point of <Math>X</Math>, we leave <Math>{String.raw`f'(x_0)`}</Math> undefined and say
          that <Math>f</Math> is <strong>not differentiable at <Math>{String.raw`x_0`}</Math></strong> on <Math>X</Math>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          <strong>Why limit points?</strong> We need <Math>{String.raw`x_0`}</Math> to be a limit point so
          that <Math>{String.raw`x_0`}</Math> is adherent to <Math>{String.raw`X \setminus \{x_0\}`}</Math>. Otherwise,
          the limit would automatically be undefined. We do not define the derivative at an isolated point.
        </p>
        <p className="mt-2">
          In practice, the domain <Math>X</Math> will almost always be an interval, and by Lemma 9.1.21
          all elements of <Math>X</Math> will automatically be limit points.
        </p>
      </Callout>

      <Example id="example-10.1.3" title="Example 10.1.3 (Derivative of x²)">
        <p>
          Let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be the function <Math>f(x) := x^2</Math>,
          and let <Math>{String.raw`x_0`}</Math> be any real number. To find the derivative:
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in \mathbb{R} \setminus \{x_0\}} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x \to x_0; x \neq x_0} \frac{x^2 - x_0^2}{x - x_0}.`}</MathBlock>
        <p>
          We factor the numerator: <Math>{String.raw`x^2 - x_0^2 = (x - x_0)(x + x_0)`}</Math>.
          Since <Math>{String.raw`x \neq x_0`}</Math>, we can cancel:
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \neq x_0} \frac{(x - x_0)(x + x_0)}{x - x_0} = \lim_{x \to x_0; x \neq x_0} (x + x_0) = 2x_0.`}</MathBlock>
        <p>
          Thus <Math>f(x) = x^2</Math> is differentiable at <Math>{String.raw`x_0`}</Math> with
          derivative <Math>{String.raw`f'(x_0) = 2x_0`}</Math>.
        </p>
      </Example>

      <Example id="example-10.1.6" title="Example 10.1.6 (|x| is Not Differentiable at 0)">
        <p>
          Let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be the function <Math>f(x) := |x|</Math>,
          and let <Math>{String.raw`x_0 = 0`}</Math>. We compute:
        </p>
        <MathBlock>{String.raw`\lim_{x \to 0; x \neq 0} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0; x \neq 0} \frac{|x|}{x}.`}</MathBlock>
        <p>
          The right limit is:
        </p>
        <MathBlock>{String.raw`\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1.`}</MathBlock>
        <p>
          The left limit is:
        </p>
        <MathBlock>{String.raw`\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1.`}</MathBlock>
        <p>
          Since the left and right limits do not match, the limit does not exist,
          and <Math>f(x) = |x|</Math> is <strong>not differentiable</strong> at <Math>0</Math>.
        </p>
        <p className="mt-2">
          However, if we restrict <Math>f</Math> to <Math>[0, \infty)</Math>, then <Math>{String.raw`f|_{[0, \infty)}`}</Math> is
          differentiable at <Math>0</Math> with derivative <Math>1</Math>. Similarly, <Math>{String.raw`f|_{(-\infty, 0]}`}</Math> is
          differentiable at <Math>0</Math> with derivative <Math>-1</Math>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Newton's Approximation</h2>

      <p>
        If a function is differentiable at <Math>{String.raw`x_0`}</Math>, then it is approximately
        linear near <Math>{String.raw`x_0`}</Math>:
      </p>

      <Theorem
        id="proposition-10.1.7"
        title="Proposition 10.1.7 (Newton's Approximation)"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>,
            let <Math>{String.raw`x_0`}</Math> be a limit point of <Math>X</Math>,
            let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function, and let <Math>L</Math> be
            a real number. Then the following are equivalent:
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li><Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math> on <Math>X</Math> with derivative <Math>L</Math>.</li>
              <li>
                For every <Math>{String.raw`\varepsilon > 0`}</Math>, there exists <Math>{String.raw`\delta > 0`}</Math> such
                that <Math>f(x)</Math> is <Math>{String.raw`\varepsilon|x - x_0|`}</Math>-close
                to <Math>{String.raw`f(x_0) + L(x - x_0)`}</Math> whenever <Math>{String.raw`x \in X`}</Math> is <Math>\delta</Math>-close
                to <Math>{String.raw`x_0`}</Math>. That is:
                <MathBlock>{String.raw`|f(x) - (f(x_0) + L(x - x_0))| \leq \varepsilon|x - x_0|`}</MathBlock>
                whenever <Math>{String.raw`x \in X`}</Math> and <Math>{String.raw`|x - x_0| \leq \delta`}</Math>.
              </li>
            </ol>
          </>
        }
        proof={
          <>
            <p>See Exercise 10.1.2. (Hint: treat the cases <Math>{String.raw`x = x_0`}</Math> and <Math>{String.raw`x \neq x_0`}</Math> separately.)</p>
          </>
        }
      />

      <Callout type="info">
        <p>
          <strong>Informal statement:</strong> If <Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, then
        </p>
        <MathBlock>{String.raw`f(x) \approx f(x_0) + f'(x_0)(x - x_0)`}</MathBlock>
        <p>
          for <Math>x</Math> near <Math>{String.raw`x_0`}</Math>. This is the <em>linear approximation</em> or <em>tangent
          line approximation</em> to <Math>f</Math> at <Math>{String.raw`x_0`}</Math>.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Differentiability Implies Continuity</h2>

      <Theorem
        id="proposition-10.1.10"
        title="Proposition 10.1.10 (Differentiability Implies Continuity)"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>,
            let <Math>{String.raw`x_0`}</Math> be a limit point of <Math>X</Math>,
            and let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function.
            If <Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, then <Math>f</Math> is
            also continuous at <Math>{String.raw`x_0`}</Math>.
          </>
        }
        proof={
          <>
            <p>
              Suppose <Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math> with derivative <Math>L</Math>.
              By Proposition 10.1.7 with <Math>\varepsilon = 1</Math>, there exists <Math>{String.raw`\delta > 0`}</Math> such that
            </p>
            <MathBlock>{String.raw`|f(x) - f(x_0) - L(x - x_0)| \leq |x - x_0|`}</MathBlock>
            <p>
              whenever <Math>{String.raw`|x - x_0| \leq \delta`}</Math>. By the triangle inequality:
            </p>
            <MathBlock>{String.raw`|f(x) - f(x_0)| \leq |f(x) - f(x_0) - L(x - x_0)| + |L||x - x_0| \leq (1 + |L|)|x - x_0|.`}</MathBlock>
            <p>
              Thus <Math>{String.raw`f(x) \to f(x_0)`}</Math> as <Math>{String.raw`x \to x_0`}</Math>, so <Math>f</Math> is continuous at <Math>{String.raw`x_0`}</Math>.
            </p>
          </>
        }
      />

      <Callout type="warning">
        <p>
          <strong>The converse is false!</strong> As Example 10.1.6 shows, <Math>f(x) = |x|</Math> is
          continuous at <Math>0</Math> but not differentiable there. Continuity is necessary but
          not sufficient for differentiability.
        </p>
      </Callout>

      <Definition id="definition-10.1.11" title="Definition 10.1.11 (Differentiability on a Domain)">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
          let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function. We say that <Math>f</Math> is
          <strong> differentiable on <Math>X</Math></strong> if, for every <Math>{String.raw`x_0 \in X`}</Math>,
          the function <Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math> on <Math>X</Math>.
        </p>
      </Definition>

      <Theorem
        id="corollary-10.1.12"
        title="Corollary 10.1.12"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and
            let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function which is differentiable on <Math>X</Math>.
            Then <Math>f</Math> is also continuous on <Math>X</Math>.
          </>
        }
        proof={
          <>
            <p>Immediate from Proposition 10.1.10.</p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Differentiation Rules</h2>

      <Theorem
        id="theorem-10.1.13"
        title="Theorem 10.1.13 (Differential Calculus)"
        statement={
          <>
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>,
            let <Math>{String.raw`x_0`}</Math> be a limit point of <Math>X</Math>, and
            let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> and <Math>{String.raw`g: X \to \mathbb{R}`}</Math> be functions.
            <ol className="list-[lower-alpha] list-inside mt-2 space-y-2">
              <li>
                <strong>(Constant rule)</strong> If <Math>f(x) = c</Math> for all <Math>{String.raw`x \in X`}</Math>,
                then <Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math> and <Math>{String.raw`f'(x_0) = 0`}</Math>.
              </li>
              <li>
                <strong>(Identity rule)</strong> If <Math>f(x) = x</Math> for all <Math>{String.raw`x \in X`}</Math>,
                then <Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math> and <Math>{String.raw`f'(x_0) = 1`}</Math>.
              </li>
              <li>
                <strong>(Sum rule)</strong> If <Math>f</Math> and <Math>g</Math> are differentiable at <Math>{String.raw`x_0`}</Math>,
                then <Math>f + g</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, and <Math>{String.raw`(f + g)'(x_0) = f'(x_0) + g'(x_0)`}</Math>.
              </li>
              <li>
                <strong>(Product rule / Leibniz rule)</strong> If <Math>f</Math> and <Math>g</Math> are differentiable at <Math>{String.raw`x_0`}</Math>,
                then <Math>fg</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, and
                <MathBlock>{String.raw`(fg)'(x_0) = f'(x_0)g(x_0) + f(x_0)g'(x_0).`}</MathBlock>
              </li>
              <li>
                <strong>(Scalar rule)</strong> If <Math>f</Math> is differentiable at <Math>{String.raw`x_0`}</Math> and <Math>c</Math> is
                a real number, then <Math>cf</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, and <Math>{String.raw`(cf)'(x_0) = cf'(x_0)`}</Math>.
              </li>
              <li>
                <strong>(Difference rule)</strong> If <Math>f</Math> and <Math>g</Math> are differentiable at <Math>{String.raw`x_0`}</Math>,
                then <Math>f - g</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, and <Math>{String.raw`(f - g)'(x_0) = f'(x_0) - g'(x_0)`}</Math>.
              </li>
              <li>
                <strong>(Reciprocal rule)</strong> If <Math>g</Math> is differentiable at <Math>{String.raw`x_0`}</Math> and <Math>{String.raw`g(x) \neq 0`}</Math> for
                all <Math>{String.raw`x \in X`}</Math>, then <Math>1/g</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, and
                <MathBlock>{String.raw`\left(\frac{1}{g}\right)'(x_0) = -\frac{g'(x_0)}{g(x_0)^2}.`}</MathBlock>
              </li>
              <li>
                <strong>(Quotient rule)</strong> If <Math>f</Math> and <Math>g</Math> are differentiable at <Math>{String.raw`x_0`}</Math> and <Math>{String.raw`g(x) \neq 0`}</Math> for
                all <Math>{String.raw`x \in X`}</Math>, then <Math>f/g</Math> is differentiable at <Math>{String.raw`x_0`}</Math>, and
                <MathBlock>{String.raw`\left(\frac{f}{g}\right)'(x_0) = \frac{f'(x_0)g(x_0) - f(x_0)g'(x_0)}{g(x_0)^2}.`}</MathBlock>
              </li>
            </ol>
          </>
        }
        proof={
          <>
            <p>See Exercise 10.1.4. Use the limit laws (Proposition 9.3.14).</p>
            <p className="mt-2">
              For the product rule, use the identity:
            </p>
            <MathBlock>{String.raw`f(x)g(x) - f(x_0)g(x_0) = f(x)(g(x) - g(x_0)) + (f(x) - f(x_0))g(x_0).`}</MathBlock>
            <p>
              This "middle-man trick" of adding and subtracting an intermediate term is very useful.
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">The Chain Rule</h2>

      <Theorem
        id="theorem-10.1.15"
        title="Theorem 10.1.15 (Chain Rule)"
        statement={
          <>
            Let <Math>X, Y</Math> be subsets of <Math>{String.raw`\mathbb{R}`}</Math>,
            let <Math>{String.raw`x_0 \in X`}</Math> be a limit point of <Math>X</Math>,
            and let <Math>{String.raw`y_0 \in Y`}</Math> be a limit point of <Math>Y</Math>.
            Let <Math>{String.raw`f: X \to Y`}</Math> be a function such that <Math>{String.raw`f(x_0) = y_0`}</Math> and <Math>f</Math> is
            differentiable at <Math>{String.raw`x_0`}</Math>. Suppose that <Math>{String.raw`g: Y \to \mathbb{R}`}</Math> is
            differentiable at <Math>{String.raw`y_0`}</Math>. Then the function <Math>{String.raw`g \circ f: X \to \mathbb{R}`}</Math> is
            differentiable at <Math>{String.raw`x_0`}</Math>, and
            <MathBlock>{String.raw`(g \circ f)'(x_0) = g'(y_0) \cdot f'(x_0).`}</MathBlock>
          </>
        }
        proof={
          <>
            <p>
              See Exercise 10.1.7. One approach uses Newton's approximation (Proposition 10.1.7).
              Another uses sequences, but requires treating <Math>{String.raw`f'(x_0) = 0`}</Math> separately
              due to division-by-zero issues.
            </p>
          </>
        }
      />

      <Example id="example-10.1.16" title="Example 10.1.16">
        <p>
          Let <Math>{String.raw`f: \mathbb{R} \setminus \{1\} \to \mathbb{R}`}</Math> be <Math>{String.raw`f(x) := \frac{x-2}{x-1}`}</Math>,
          and <Math>{String.raw`g: \mathbb{R} \to \mathbb{R}`}</Math> be <Math>g(y) := y^2</Math>.
          Then <Math>{String.raw`(g \circ f)(x) = \left(\frac{x-2}{x-1}\right)^2`}</Math>.
        </p>
        <p className="mt-2">
          By the chain rule:
        </p>
        <MathBlock>{String.raw`(g \circ f)'(x_0) = g'(f(x_0)) \cdot f'(x_0) = 2 \cdot \frac{x_0 - 2}{x_0 - 1} \cdot \frac{1}{(x_0 - 1)^2}.`}</MathBlock>
      </Example>

      <Callout type="warning">
        <p>
          <strong>On the notation <Math>{String.raw`\frac{df}{dx}`}</Math>:</strong> This notation is
          convenient but can be misleading. It suggests that <Math>df</Math>, <Math>dx</Math> are
          quantities that can be manipulated like real numbers. They are not—we have not assigned
          any meaning to them individually.
        </p>
        <p className="mt-2">
          The chain rule <Math>{String.raw`\frac{dz}{dx} = \frac{dz}{dy} \cdot \frac{dy}{dx}`}</Math> looks
          like "cancellation," but this is merely a mnemonic. In several variables, this notation
          can lead to serious ambiguities.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary: Computing Derivatives</h2>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-slate-600">
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-slate-600 px-4 py-2 text-left">Function</th>
              <th className="border border-slate-600 px-4 py-2 text-left">Derivative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 px-4 py-2"><Math>c</Math> (constant)</td>
              <td className="border border-slate-600 px-4 py-2"><Math>0</Math></td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2"><Math>x</Math></td>
              <td className="border border-slate-600 px-4 py-2"><Math>1</Math></td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2"><Math>x^n</Math> (n natural)</td>
              <td className="border border-slate-600 px-4 py-2"><Math>nx^{'{n-1}'}</Math></td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2"><Math>f + g</Math></td>
              <td className="border border-slate-600 px-4 py-2"><Math>{String.raw`f' + g'`}</Math></td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2"><Math>fg</Math></td>
              <td className="border border-slate-600 px-4 py-2"><Math>{String.raw`f'g + fg'`}</Math></td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2"><Math>f/g</Math></td>
              <td className="border border-slate-600 px-4 py-2"><Math>{String.raw`\frac{f'g - fg'}{g^2}`}</Math></td>
            </tr>
            <tr>
              <td className="border border-slate-600 px-4 py-2"><Math>{String.raw`g \circ f`}</Math></td>
              <td className="border border-slate-600 px-4 py-2"><Math>{String.raw`(g' \circ f) \cdot f'`}</Math></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 10.1.1</p>
          <p>
            Suppose <Math>X</Math> is a subset of <Math>{String.raw`\mathbb{R}`}</Math>, <Math>{String.raw`x_0`}</Math> is
            a limit point of <Math>X</Math>, and <Math>{String.raw`f: X \to \mathbb{R}`}</Math> is differentiable
            at <Math>{String.raw`x_0`}</Math>. Let <Math>{String.raw`Y \subset X`}</Math> be such that <Math>{String.raw`x_0`}</Math> is
            also a limit point of <Math>Y</Math>. Prove that <Math>{String.raw`f|_Y: Y \to \mathbb{R}`}</Math> is
            also differentiable at <Math>{String.raw`x_0`}</Math>, and has the same derivative.
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 10.1.2</p>
          <p>
            Prove Proposition 10.1.7. (Hint: treat the cases <Math>{String.raw`x = x_0`}</Math> and <Math>{String.raw`x \neq x_0`}</Math> separately.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 10.1.3</p>
          <p>
            Prove Proposition 10.1.10. (Hint: use either the limit laws or Proposition 10.1.7.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 10.1.4</p>
          <p>
            Prove Theorem 10.1.13. For the product rule, use the identity:
          </p>
          <MathBlock>{String.raw`f(x)g(x) - f(x_0)g(x_0) = f(x)(g(x) - g(x_0)) + (f(x) - f(x_0))g(x_0).`}</MathBlock>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 10.1.5</p>
          <p>
            Let <Math>n</Math> be a natural number, and let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be <Math>f(x) := x^n</Math>.
            Show that <Math>f</Math> is differentiable on <Math>{String.raw`\mathbb{R}`}</Math> and <Math>{String.raw`f'(x) = nx^{n-1}`}</Math> for
            all <Math>{String.raw`x \in \mathbb{R}`}</Math>. (Hint: use Theorem 10.1.13 and induction.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 10.1.6</p>
          <p>
            Let <Math>n</Math> be a negative integer, and let <Math>{String.raw`f: \mathbb{R} \setminus \{0\} \to \mathbb{R}`}</Math> be <Math>f(x) := x^n</Math>.
            Show that <Math>f</Math> is differentiable and <Math>{String.raw`f'(x) = nx^{n-1}`}</Math> for
            all <Math>{String.raw`x \in \mathbb{R} \setminus \{0\}`}</Math>. (Hint: use Theorem 10.1.13 and Exercise 10.1.5.)
          </p>
        </div>

        <div className="p-4 border border-slate-600 rounded">
          <p className="font-semibold">Exercise 10.1.7</p>
          <p>
            Prove Theorem 10.1.15 (the chain rule). One way uses Newton's approximation. Another
            uses sequences, but requires treating <Math>{String.raw`f'(x_0) = 0`}</Math> separately.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
