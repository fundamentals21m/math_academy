import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { ContinuityTester } from '@/components/visualizations';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <p>
        We now introduce one of the most fundamental notions in the theory of functions — that
        of <strong>continuity</strong>. Intuitively, a function is continuous if small changes in the
        input produce small changes in the output. This notion is central to analysis and has
        profound consequences for the behavior of functions.
      </p>

      {/* Interactive Visualization */}
      <div className="my-8">
        <ContinuityTester />
      </div>

      <Definition id="9.4.1" title="Continuity">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be
          a function. Let <Math>x_0</Math> be an element of <Math>X</Math>. We say that <Math>f</Math> is{' '}
          <strong>continuous at <Math>x_0</Math></strong> iff we have
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in X} f(x) = f(x_0);`}</MathBlock>
        <p>
          in other words, the limit of <Math>f(x)</Math> as <Math>x</Math> converges to <Math>x_0</Math> in <Math>X</Math> exists
          and is equal to <Math>f(x_0)</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>f</Math> is <strong>continuous on <Math>X</Math></strong> (or simply <strong>continuous</strong>) iff <Math>f</Math> is
          continuous at <Math>x_0</Math> for every <Math>x_0 \in X</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>f</Math> is <strong>discontinuous at <Math>x_0</Math></strong> iff it is not continuous at <Math>x_0</Math>.
        </p>
      </Definition>

      <Example id="9.4.2" title="Constant functions are continuous">
        <p>
          Let <Math>c</Math> be a real number, and let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be the constant
          function <Math>f(x) := c</Math>. Then for every real number <Math>{String.raw`x_0 \in \mathbb{R}`}</Math>, we have
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in \mathbb{R}} f(x) = \lim_{x \to x_0; x \in \mathbb{R}} c = c = f(x_0),`}</MathBlock>
        <p>
          thus <Math>f</Math> is continuous at every point <Math>{String.raw`x_0 \in \mathbb{R}`}</Math>, or in other words <Math>f</Math> is
          continuous on <Math>{String.raw`\mathbb{R}`}</Math>.
        </p>
      </Example>

      <Example id="9.4.3" title="The identity function is continuous">
        <p>
          Let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be the identity function <Math>f(x) := x</Math>.
          Then for every real number <Math>{String.raw`x_0 \in \mathbb{R}`}</Math>, we have
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in \mathbb{R}} f(x) = \lim_{x \to x_0; x \in \mathbb{R}} x = x_0 = f(x_0),`}</MathBlock>
        <p>
          thus <Math>f</Math> is continuous at every point <Math>{String.raw`x_0 \in \mathbb{R}`}</Math>, or in other words <Math>f</Math> is
          continuous on <Math>{String.raw`\mathbb{R}`}</Math>.
        </p>
      </Example>

      <Example id="9.4.4" title="The signum function">
        <p>
          Let <Math>{String.raw`\text{sgn}: \mathbb{R} \to \mathbb{R}`}</Math> be the signum function defined in
          Example 9.3.16. Then <Math>{String.raw`\text{sgn}(x)`}</Math> is continuous at every non-zero value
          of <Math>x</Math>; for instance, at 1, we have (using Proposition 9.3.18)
        </p>
        <MathBlock>{String.raw`\lim_{x \to 1; x \in \mathbb{R}} \text{sgn}(x) = \lim_{x \to 1; x \in (0.9, 1.1)} \text{sgn}(x) = \lim_{x \to 1; x \in (0.9, 1.1)} 1 = 1 = \text{sgn}(1).`}</MathBlock>
        <p className="mt-2">
          On the other hand, sgn is <strong>not continuous at 0</strong>, since the
          limit <Math>{String.raw`\lim_{x \to 0; x \in \mathbb{R}} \text{sgn}(x)`}</Math> does not exist.
        </p>
      </Example>

      <Example id="9.4.5" title="The Dirichlet function is nowhere continuous">
        <p>
          Let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be the function
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q} \\ 0 & \text{if } x \notin \mathbb{Q} \end{cases}`}</MathBlock>
        <p className="mt-2">
          Then by the discussion in the previous section, <Math>f</Math> is not continuous at 0. In fact,
          it turns out that <Math>f</Math> is <strong>not continuous at any real number</strong> <Math>x_0</Math>. This
          is because every neighborhood of any real number contains both rationals and irrationals,
          so the limit <Math>{String.raw`\lim_{x \to x_0} f(x)`}</Math> never exists.
        </p>
      </Example>

      <Example id="9.4.6" title="Restricting domains can restore continuity">
        <p>
          Let <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> be the function
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1 & \text{if } x \geq 0 \\ 0 & \text{if } x < 0 \end{cases}`}</MathBlock>
        <p className="mt-2">
          Then <Math>f</Math> is continuous at every non-zero real number, but is not continuous at 0.
          However, if we restrict <Math>f</Math> to the right-hand line <Math>{String.raw`[0, \infty)`}</Math>, then the
          resulting function <Math>{String.raw`f|_{[0,\infty)}`}</Math> now becomes continuous everywhere in its
          domain, including 0.
        </p>
        <p className="mt-2">
          Thus restricting the domain of a function can make a discontinuous function continuous again.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Equivalent Formulations of Continuity</h2>

      <p>
        There are several ways to phrase the statement that "<Math>f</Math> is continuous at <Math>x_0</Math>":
      </p>

      <Theorem id="9.4.7" title="Proposition: Equivalent formulations of continuity">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function,
          and let <Math>x_0</Math> be an element of <Math>X</Math>. Then the following three statements are
          logically equivalent:
        </p>
        <ol className="list-alpha ml-6 mt-2 space-y-2">
          <li><Math>f</Math> is continuous at <Math>x_0</Math>.</li>
          <li>
            For every sequence <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> consisting of elements of <Math>X</Math> with{' '}
            <Math>{String.raw`\lim_{n \to \infty} a_n = x_0`}</Math>, we have{' '}
            <Math>{String.raw`\lim_{n \to \infty} f(a_n) = f(x_0)`}</Math>.
          </li>
          <li>
            For every <Math>{String.raw`\varepsilon > 0`}</Math>, there exists a <Math>{String.raw`\delta > 0`}</Math> such
            that <Math>{String.raw`|f(x) - f(x_0)| < \varepsilon`}</Math> for all <Math>x \in X</Math> with{' '}
            <Math>{String.raw`|x - x_0| < \delta`}</Math>.
          </li>
        </ol>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof sketch</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              The equivalence follows from Proposition 9.3.9 (sequential characterization of limits)
              and Definition 9.3.6. The three statements are just different ways of expressing that
              the limit of <Math>f(x)</Math> as <Math>x \to x_0</Math> equals <Math>f(x_0)</Math>.
            </p>
          </div>
        </details>
      </Theorem>

      <Callout type="info" title="The ε-δ definition">
        <p>
          Statement (c) is the famous <strong>ε-δ definition</strong> of continuity. It says that for any
          desired precision ε in the output, we can find a neighborhood of size δ around <Math>x_0</Math> such
          that all inputs in that neighborhood produce outputs within ε of <Math>f(x_0)</Math>.
        </p>
      </Callout>

      <Callout type="info" title="Continuity and limits">
        <p>
          A particularly useful consequence of Proposition 9.4.7 is the following: if <Math>f</Math> is
          continuous at <Math>x_0</Math>, and <Math>a_n \to x_0</Math> as <Math>n \to \infty</Math>,
          then <Math>f(a_n) \to f(x_0)</Math> as <Math>n \to \infty</Math> (provided that all the elements
          of the sequence <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> lie in the domain of <Math>f</Math>).
        </p>
        <p className="mt-2">
          Thus continuous functions are very useful in computing limits.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Arithmetic Preserves Continuity</h2>

      <p>
        The limit laws in Proposition 9.3.14, combined with the definition of continuity,
        immediately imply the following:
      </p>

      <Theorem id="9.4.9" title="Proposition: Arithmetic preserves continuity">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> and{' '}
          <Math>{String.raw`g: X \to \mathbb{R}`}</Math> be functions. Let <Math>x_0 \in X</Math>. Then if <Math>f</Math> and <Math>g</Math> are
          both continuous at <Math>x_0</Math>, then the functions
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><Math>f + g</Math></li>
          <li><Math>f - g</Math></li>
          <li><Math>{String.raw`\max(f, g)`}</Math></li>
          <li><Math>{String.raw`\min(f, g)`}</Math></li>
          <li><Math>fg</Math></li>
        </ul>
        <p className="mt-2">
          are also continuous at <Math>x_0</Math>. If <Math>g</Math> is non-zero on <Math>X</Math>,
          then <Math>f/g</Math> is also continuous at <Math>x_0</Math>.
        </p>
      </Theorem>

      <p className="mt-4">
        In particular, the sum, difference, maximum, minimum, and product of continuous functions
        are continuous; and the quotient of two continuous functions is continuous as long as the
        denominator does not become zero.
      </p>

      <p className="mt-4">
        One can use Proposition 9.4.9 to show that a lot of functions are continuous. For instance,
        just by starting from the fact that constant functions are continuous, and the identity
        function <Math>f(x) = x</Math> is continuous, one can show that the function
      </p>
      <MathBlock>{String.raw`g(x) := \frac{\max(x^3 + 4x^2 + x + 5, x^4 - x^3)}{x^2 - 4}`}</MathBlock>
      <p>
        is continuous at every point of <Math>{String.raw`\mathbb{R}`}</Math> except the two
        points <Math>x = +2</Math>, <Math>x = -2</Math> where the denominator vanishes.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exponentiation is Continuous</h2>

      <Theorem id="9.4.10" title="Proposition: Exponentiation is continuous, I">
        <p>
          Let <Math>{String.raw`a > 0`}</Math> be a positive real number. Then the function <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> defined
          by <Math>f(x) := a^x</Math> is continuous.
        </p>
      </Theorem>

      <Theorem id="9.4.11" title="Proposition: Exponentiation is continuous, II">
        <p>
          Let <Math>p</Math> be a real number. Then the function <Math>{String.raw`f: (0, \infty) \to \mathbb{R}`}</Math> defined
          by <Math>f(x) := x^p</Math> is continuous.
        </p>
      </Theorem>

      <Callout type="info" title="Joint continuity">
        <p>
          There is a stronger statement than Propositions 9.4.10 and 9.4.11, namely that
          exponentiation is <em>jointly continuous</em> in both the exponent and the base, but this
          is harder to show.
        </p>
      </Callout>

      <Theorem id="9.4.12" title="Proposition: Absolute value is continuous">
        <p>
          The function <Math>{String.raw`f: \mathbb{R} \to \mathbb{R}`}</Math> defined by <Math>f(x) := |x|</Math> is continuous.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              This follows since <Math>{String.raw`|x| = \max(x, -x)`}</Math> and the functions <Math>x</Math> and <Math>-x</Math> are
              already continuous.
            </p>
          </div>
        </details>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Composition Preserves Continuity</h2>

      <p>
        The class of continuous functions is not only closed under addition, subtraction,
        multiplication, and division, but is also closed under composition:
      </p>

      <Theorem id="9.4.13" title="Proposition: Composition preserves continuity">
        <p>
          Let <Math>X</Math> and <Math>Y</Math> be subsets of <Math>{String.raw`\mathbb{R}`}</Math>, and let <Math>{String.raw`f: X \to Y`}</Math> and{' '}
          <Math>{String.raw`g: Y \to \mathbb{R}`}</Math> be functions. Let <Math>x_0</Math> be a point in <Math>X</Math>.
          If <Math>f</Math> is continuous at <Math>x_0</Math>, and <Math>g</Math> is continuous at <Math>f(x_0)</Math>,
          then the composition <Math>{String.raw`g \circ f: X \to \mathbb{R}`}</Math> is continuous at <Math>x_0</Math>.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof sketch</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              If <Math>a_n \to x_0</Math> in <Math>X</Math>, then since <Math>f</Math> is continuous at <Math>x_0</Math>,
              we have <Math>f(a_n) \to f(x_0)</Math>. Since <Math>g</Math> is continuous at <Math>f(x_0)</Math>,
              we have <Math>g(f(a_n)) \to g(f(x_0))</Math>. Thus <Math>{String.raw`g \circ f`}</Math> is continuous at <Math>x_0</Math>.
            </p>
          </div>
        </details>
      </Theorem>

      <Example id="9.4.14" title="Composition of continuous functions">
        <p>
          Since the function <Math>f(x) := 3x + 1</Math> is continuous on all of <Math>{String.raw`\mathbb{R}`}</Math>, and
          the function <Math>g(x) := 5^x</Math> is continuous on all of <Math>{String.raw`\mathbb{R}`}</Math>, the function
        </p>
        <MathBlock>{String.raw`g \circ f(x) = 5^{3x+1}`}</MathBlock>
        <p>
          is continuous on all of <Math>{String.raw`\mathbb{R}`}</Math>.
        </p>
        <p className="mt-2">
          By several applications of the above propositions, one can show that far more complicated
          functions, e.g.,
        </p>
        <MathBlock>{String.raw`h(x) := \frac{|x^2 - 8x + 7|^{\sqrt{2}}}{x^2 + 1}`}</MathBlock>
        <p>
          are also continuous on all of <Math>{String.raw`\mathbb{R}`}</Math>. (Why is this function continuous? The
          numerator involves absolute value (continuous), polynomial (continuous), and exponentiation
          (continuous), while the denominator is a polynomial that never vanishes.)
        </p>
      </Example>

      <Callout type="warning" title="Functions requiring more machinery">
        <p>
          There are still a few functions that are not yet easy to test for continuity,
          such as <Math>k(x) := x^x</Math>. This function can be dealt with more easily once we have
          the machinery of logarithms.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summary: Building Continuous Functions</h2>

      <p>
        We now have a powerful toolkit for constructing continuous functions:
      </p>

      <div className="bg-gray-800 p-4 rounded-lg mt-4">
        <p className="font-medium mb-2">Basic continuous functions:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Constant functions <Math>f(x) = c</Math></li>
          <li>The identity function <Math>f(x) = x</Math></li>
          <li>Exponential functions <Math>f(x) = a^x</Math> for <Math>{String.raw`a > 0`}</Math></li>
          <li>Power functions <Math>f(x) = x^p</Math> on <Math>{String.raw`(0, \infty)`}</Math></li>
          <li>Absolute value <Math>f(x) = |x|</Math></li>
        </ul>
        <p className="font-medium mt-4 mb-2">Operations that preserve continuity:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Addition: <Math>f + g</Math></li>
          <li>Subtraction: <Math>f - g</Math></li>
          <li>Multiplication: <Math>fg</Math></li>
          <li>Division: <Math>f/g</Math> (where <Math>g \neq 0</Math>)</li>
          <li>Maximum and minimum: <Math>{String.raw`\max(f,g)`}</Math>, <Math>{String.raw`\min(f,g)`}</Math></li>
          <li>Composition: <Math>{String.raw`g \circ f`}</Math></li>
          <li>Scalar multiplication: <Math>cf</Math></li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.4.1</p>
          <p className="mt-2">Prove Proposition 9.4.7.</p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.4.2</p>
          <p className="mt-2">
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and let <Math>{String.raw`c \in \mathbb{R}`}</Math>. Show that the
            constant function <Math>{String.raw`f: X \to \mathbb{R}`}</Math> defined by <Math>f(x) := c</Math> is continuous,
            and show that the identity function <Math>{String.raw`g: X \to \mathbb{R}`}</Math> defined by <Math>g(x) := x</Math> is
            also continuous.
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.4.5</p>
          <p className="mt-2">Prove Proposition 9.4.13.</p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.4.6</p>
          <p className="mt-2">
            Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a
            continuous function. If <Math>Y</Math> is a subset of <Math>X</Math>, show that the
            restriction <Math>{String.raw`f|_Y: Y \to \mathbb{R}`}</Math> of <Math>f</Math> to <Math>Y</Math> is also a continuous function.
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.4.7</p>
          <p className="mt-2">
            Let <Math>{String.raw`n \geq 0`}</Math> be an integer, and for each <Math>{String.raw`0 \leq i \leq n`}</Math> let <Math>c_i</Math> be a
            real number. Let <Math>{String.raw`P: \mathbb{R} \to \mathbb{R}`}</Math> be the function
          </p>
          <MathBlock>{String.raw`P(x) := \sum_{i=0}^n c_i x^i;`}</MathBlock>
          <p className="mt-2">
            such a function is known as a <strong>polynomial of one variable</strong>; a typical example
            is <Math>P(x) = 6x^4 - 3x^2 + 4</Math>. Show that <Math>P</Math> is continuous.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
