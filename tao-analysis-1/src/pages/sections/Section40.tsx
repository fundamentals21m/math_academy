import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { FunctionLimitExplorer } from '@/components/visualizations';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <p>
        In Chapter 6 we defined what it means for a sequence <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> to
        converge to a limit <Math>L</Math>. We now define a similar notion for what it means for a
        function <Math>f</Math> defined on the real line, or on some subset of the real line, to
        converge to some value at a point. Just as we used the notions of ε-closeness and
        eventual ε-closeness to deal with limits of sequences, we shall need a notion of
        ε-closeness and <em>local</em> ε-closeness to deal with limits of functions.
      </p>

      <Definition id="9.3.1" title="ε-closeness">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>f: X \to \mathbb{'{R}'}</Math> be
          a function, let <Math>L</Math> be a real number, and let <Math>{String.raw`\varepsilon > 0`}</Math> be a
          real number. We say that the function <Math>f</Math> is <strong>ε-close to <Math>L</Math></strong> iff <Math>f(x)</Math> is
          ε-close to <Math>L</Math> for every <Math>x \in X</Math>.
        </p>
      </Definition>

      <Example id="9.3.2" title="ε-closeness of a quadratic function">
        <p>
          When the function <Math>f(x) := x^2</Math> is restricted to the interval <Math>[1, 3]</Math>,
          then it is 5-close to 4, since when <Math>x \in [1, 3]</Math> then <Math>{String.raw`1 \leq f(x) \leq 9`}</Math>,
          and hence <Math>{String.raw`|f(x) - 4| \leq 5`}</Math>.
        </p>
        <p className="mt-2">
          When instead it is restricted to the smaller interval <Math>[1.9, 2.1]</Math>, then it is
          0.41-close to 4, since if <Math>x \in [1.9, 2.1]</Math>, then <Math>{String.raw`3.61 \leq f(x) \leq 4.41`}</Math>,
          and hence <Math>{String.raw`|f(x) - 4| \leq 0.41`}</Math>.
        </p>
      </Example>

      <Definition id="9.3.3" title="Local ε-closeness">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>f: X \to \mathbb{'{R}'}</Math> be
          a function, let <Math>L</Math> be a real number, <Math>x_0</Math> be an adherent point
          of <Math>X</Math>, and <Math>{String.raw`\varepsilon > 0`}</Math> be a real number. We say that <Math>f</Math> is{' '}
          <strong>ε-close to <Math>L</Math> near <Math>x_0</Math></strong> iff there exists a <Math>{String.raw`\delta > 0`}</Math> such
          that <Math>f</Math> becomes ε-close to <Math>L</Math> when restricted to the set{' '}
          <Math>{String.raw`\{x \in X : |x - x_0| < \delta\}`}</Math>.
        </p>
      </Definition>

      <Example id="9.3.4" title="Local ε-closeness near a point">
        <p>
          Let <Math>f: [1, 3] \to \mathbb{'{R}'}</Math> be the function <Math>f(x) := x^2</Math> restricted to
          the interval <Math>[1, 3]</Math>. This function is not 0.1-close to 4, since for
          instance <Math>f(1)</Math> is not 0.1-close to 4.
        </p>
        <p className="mt-2">
          However, <Math>f</Math> is 0.1-close to 4 <em>near 2</em>, since when restricted to the
          set <Math>{String.raw`\{x \in [1, 3] : |x - 2| < 0.01\}`}</Math>, the function <Math>f</Math> is
          indeed 0.1-close to 4. This is because when <Math>{String.raw`|x - 2| < 0.01`}</Math>, we
          have <Math>{String.raw`1.99 < x < 2.01`}</Math>, and hence <Math>{String.raw`3.9601 < f(x) < 4.0401`}</Math>, so{' '}
          <Math>f(x)</Math> is 0.1-close to 4.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Convergence of Functions at a Point</h2>

      {/* Interactive Visualization */}
      <div className="my-8">
        <FunctionLimitExplorer />
      </div>

      <Definition id="9.3.6" title="Convergence of functions at a point">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>f: X \to \mathbb{'{R}'}</Math> be
          a function, let <Math>E</Math> be a subset of <Math>X</Math>, <Math>x_0</Math> be an adherent point
          of <Math>E</Math>, and let <Math>L</Math> be a real number. We say that <Math>f</Math>{' '}
          <strong>converges to <Math>L</Math> at <Math>x_0</Math> in <Math>E</Math></strong>, and write
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in E} f(x) = L,`}</MathBlock>
        <p>
          iff <Math>f</Math> is ε-close to <Math>L</Math> near <Math>x_0</Math> for every <Math>{String.raw`\varepsilon > 0`}</Math>.
          If <Math>f</Math> does not converge to any number <Math>L</Math> at <Math>x_0</Math>, we say
          that <Math>f</Math> <strong>diverges</strong> at <Math>x_0</Math>, and leave <Math>{String.raw`\lim_{x \to x_0; x \in E} f(x)`}</Math> undefined.
        </p>
        <p className="mt-2">
          In other words, we have <Math>{String.raw`\lim_{x \to x_0; x \in E} f(x) = L`}</Math> iff for
          every <Math>{String.raw`\varepsilon > 0`}</Math>, there exists a <Math>{String.raw`\delta > 0`}</Math> such
          that <Math>{String.raw`|f(x) - L| \leq \varepsilon`}</Math> for all <Math>x \in E</Math> such
          that <Math>{String.raw`|x - x_0| < \delta`}</Math>.
        </p>
      </Definition>

      <Callout type="warning" title="Notation caution">
        <p>
          In many cases we will omit the set <Math>E</Math> from the notation (i.e., we will just say
          that <Math>f</Math> converges to <Math>L</Math> at <Math>x_0</Math>, or that <Math>{String.raw`\lim_{x \to x_0} f(x) = L`}</Math>),
          although this is slightly dangerous. For instance, it sometimes makes a difference
          whether <Math>E</Math> actually contains <Math>x_0</Math> or not.
        </p>
        <p className="mt-2">
          To give an example, if <Math>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> is the function defined
          by setting <Math>f(x) = 1</Math> when <Math>x = 0</Math> and <Math>f(x) = 0</Math> when <Math>x \neq 0</Math>,
          then one has <Math>{String.raw`\lim_{x \to 0; x \in \mathbb{R} \setminus \{0\}} f(x) = 0`}</Math>,
          but <Math>{String.raw`\lim_{x \to 0; x \in \mathbb{R}} f(x)`}</Math> is undefined.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sequential Characterization of Limits</h2>

      <p>
        Definition 9.3.6 is rather unwieldy. However, we can rewrite this definition in terms of
        a more familiar one, involving limits of sequences.
      </p>

      <Theorem id="9.3.9" title="Proposition: Sequential characterization of limits">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>f: X \to \mathbb{'{R}'}</Math> be
          a function, let <Math>E</Math> be a subset of <Math>X</Math>, let <Math>x_0</Math> be an adherent point
          of <Math>E</Math>, and let <Math>L</Math> be a real number. Then the following two statements are
          logically equivalent:
        </p>
        <ol className="list-alpha ml-6 mt-2 space-y-2">
          <li><Math>f</Math> converges to <Math>L</Math> at <Math>x_0</Math> in <Math>E</Math>.</li>
          <li>
            For every sequence <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> which consists entirely of elements
            of <Math>E</Math>, which converges to <Math>x_0</Math>, the sequence <Math>{String.raw`(f(a_n))_{n=0}^\infty`}</Math> converges
            to <Math>L</Math>.
          </li>
        </ol>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof sketch</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              <strong>(a) ⇒ (b):</strong> If <Math>f</Math> converges to <Math>L</Math> at <Math>x_0</Math>, then for
              any <Math>{String.raw`\varepsilon > 0`}</Math>, there exists <Math>{String.raw`\delta > 0`}</Math> such
              that <Math>{String.raw`|f(x) - L| < \varepsilon`}</Math> for <Math>x \in E</Math> with <Math>{String.raw`|x - x_0| < \delta`}</Math>.
              If <Math>a_n \to x_0</Math>, then for large enough <Math>n</Math>, <Math>{String.raw`|a_n - x_0| < \delta`}</Math>,
              so <Math>{String.raw`|f(a_n) - L| < \varepsilon`}</Math>.
            </p>
            <p className="mt-2">
              <strong>(b) ⇒ (a):</strong> Suppose (a) fails. Then for some <Math>{String.raw`\varepsilon > 0`}</Math>,
              for every <Math>{String.raw`\delta = 1/n`}</Math>, there exists <Math>a_n \in E</Math> with{' '}
              <Math>{String.raw`|a_n - x_0| < 1/n`}</Math> but <Math>{String.raw`|f(a_n) - L| \geq \varepsilon`}</Math>.
              Then <Math>a_n \to x_0</Math> but <Math>f(a_n) \not\to L</Math>, contradicting (b).
            </p>
          </div>
        </details>
      </Theorem>

      <Callout type="info" title="Alternative notation">
        <p>
          In view of the above proposition, we will sometimes write "<Math>f(x) \to L</Math> as <Math>x \to x_0</Math> in <Math>E</Math>"
          or "<Math>f</Math> has a limit <Math>L</Math> at <Math>x_0</Math> in <Math>E</Math>" instead of
          "<Math>f</Math> converges to <Math>L</Math> at <Math>x_0</Math>".
        </p>
      </Callout>

      <Theorem id="9.3.13" title="Corollary: Uniqueness of limits">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>E</Math> be a subset
          of <Math>X</Math>, let <Math>x_0</Math> be an adherent point of <Math>E</Math>, and let <Math>f: X \to \mathbb{'{R}'}</Math> be
          a function. Then <Math>f</Math> can have <strong>at most one limit</strong> at <Math>x_0</Math> in <Math>E</Math>.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              Suppose for contradiction that there are two distinct numbers <Math>L</Math> and <Math>L'</Math> such
              that <Math>f</Math> has limit <Math>L</Math> at <Math>x_0</Math> in <Math>E</Math>, and also has
              limit <Math>L'</Math> at <Math>x_0</Math> in <Math>E</Math>.
            </p>
            <p className="mt-2">
              Since <Math>x_0</Math> is an adherent point of <Math>E</Math>, by Lemma 9.1.14 there is a
              sequence <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> consisting of elements in <Math>E</Math> which converges
              to <Math>x_0</Math>. By Proposition 9.3.9, <Math>{String.raw`(f(a_n))_{n=0}^\infty`}</Math> converges to both <Math>L</Math> and <Math>L'</Math>.
              But this contradicts the uniqueness of limits of sequences (Proposition 6.1.7).
            </p>
          </div>
        </details>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Limit Laws for Functions</h2>

      <p>
        Using the limit laws for sequences, one can now deduce the limit laws for functions:
      </p>

      <Theorem id="9.3.14" title="Proposition: Limit laws for functions">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>E</Math> be a subset of <Math>X</Math>,
          let <Math>x_0</Math> be an adherent point of <Math>E</Math>, and let <Math>f: X \to \mathbb{'{R}'}</Math> and{' '}
          <Math>g: X \to \mathbb{'{R}'}</Math> be functions. Suppose that <Math>f</Math> has a limit <Math>L</Math> at <Math>x_0</Math> in <Math>E</Math>,
          and <Math>g</Math> has a limit <Math>M</Math> at <Math>x_0</Math> in <Math>E</Math>. Then:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><Math>f + g</Math> has a limit <Math>L + M</Math> at <Math>x_0</Math> in <Math>E</Math></li>
          <li><Math>f - g</Math> has a limit <Math>L - M</Math> at <Math>x_0</Math> in <Math>E</Math></li>
          <li><Math>{String.raw`\max(f, g)`}</Math> has a limit <Math>{String.raw`\max(L, M)`}</Math> at <Math>x_0</Math> in <Math>E</Math></li>
          <li><Math>{String.raw`\min(f, g)`}</Math> has a limit <Math>{String.raw`\min(L, M)`}</Math> at <Math>x_0</Math> in <Math>E</Math></li>
          <li><Math>fg</Math> has a limit <Math>LM</Math> at <Math>x_0</Math> in <Math>E</Math></li>
          <li>If <Math>c</Math> is a real number, then <Math>cf</Math> has a limit <Math>cL</Math> at <Math>x_0</Math> in <Math>E</Math></li>
          <li>If <Math>g</Math> is non-zero on <Math>E</Math> and <Math>M \neq 0</Math>, then <Math>f/g</Math> has a limit <Math>L/M</Math> at <Math>x_0</Math> in <Math>E</Math></li>
        </ul>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof (for sum)</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              Since <Math>x_0</Math> is an adherent point of <Math>E</Math>, by Lemma 9.1.14 there is a
              sequence <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> in <Math>E</Math> converging to <Math>x_0</Math>.
              Since <Math>f</Math> has limit <Math>L</Math> at <Math>x_0</Math> in <Math>E</Math>, by
              Proposition 9.3.9, <Math>{String.raw`(f(a_n))_{n=0}^\infty`}</Math> converges to <Math>L</Math>.
              Similarly <Math>{String.raw`(g(a_n))_{n=0}^\infty`}</Math> converges to <Math>M</Math>.
            </p>
            <p className="mt-2">
              By the limit laws for sequences (Theorem 6.1.19), <Math>{String.raw`((f+g)(a_n))_{n=0}^\infty`}</Math> converges
              to <Math>L + M</Math>. By Proposition 9.3.9 again, <Math>f + g</Math> has limit <Math>L + M</Math> at <Math>x_0</Math> in <Math>E</Math>.
            </p>
          </div>
        </details>
      </Theorem>

      <p className="mt-4">
        One can phrase Proposition 9.3.14 more informally as:
      </p>
      <MathBlock>{String.raw`\lim_{x \to x_0}(f \pm g)(x) = \lim_{x \to x_0} f(x) \pm \lim_{x \to x_0} g(x)`}</MathBlock>
      <MathBlock>{String.raw`\lim_{x \to x_0}(fg)(x) = \lim_{x \to x_0} f(x) \cdot \lim_{x \to x_0} g(x)`}</MathBlock>
      <MathBlock>{String.raw`\lim_{x \to x_0}(f/g)(x) = \frac{\lim_{x \to x_0} f(x)}{\lim_{x \to x_0} g(x)}`}</MathBlock>

      <Callout type="warning" title="When limit laws apply">
        <p>
          Bear in mind that these identities are only true when the right-hand side makes sense,
          and furthermore for the quotient identity we need <Math>g</Math> to be non-zero, and also{' '}
          <Math>{String.raw`\lim_{x \to x_0} g(x)`}</Math> to be non-zero.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Basic Limits</h2>

      <p>
        Using the limit laws, we can deduce several limits. First, it is easy to check the basic limits:
      </p>
      <MathBlock>{String.raw`\lim_{x \to x_0; x \in \mathbb{R}} c = c \quad \text{and} \quad \lim_{x \to x_0; x \in \mathbb{R}} x = x_0`}</MathBlock>
      <p>
        for any real numbers <Math>x_0</Math> and <Math>c</Math>. By the limit laws we can thus conclude:
      </p>
      <MathBlock>{String.raw`\lim_{x \to x_0; x \in \mathbb{R}} x^2 = x_0^2, \quad \lim_{x \to x_0; x \in \mathbb{R}} cx = cx_0, \quad \lim_{x \to x_0; x \in \mathbb{R}} (x^2 + cx + d) = x_0^2 + cx_0 + d`}</MathBlock>
      <p>
        etc., where <Math>c, d</Math> are arbitrary real numbers.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Limits are Local</h2>

      <p>
        If <Math>f</Math> converges to <Math>L</Math> at <Math>x_0</Math> in <Math>X</Math>, and <Math>Y</Math> is any subset
        of <Math>X</Math> such that <Math>x_0</Math> is still an adherent point of <Math>Y</Math>, then <Math>f</Math> will
        also converge to <Math>L</Math> at <Math>x_0</Math> in <Math>Y</Math>. Thus convergence on a large set implies
        convergence on a smaller set. The converse, however, is not true.
      </p>

      <Theorem id="9.3.18" title="Proposition: Limits are local">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, let <Math>E</Math> be a subset of <Math>X</Math>,
          let <Math>x_0</Math> be an adherent point of <Math>E</Math>, let <Math>f: X \to \mathbb{'{R}'}</Math> be a function,
          and let <Math>L</Math> be a real number. Let <Math>{String.raw`\delta > 0`}</Math>. Then we have
        </p>
        <MathBlock>{String.raw`\lim_{x \to x_0; x \in E} f(x) = L \quad \text{if and only if} \quad \lim_{x \to x_0; x \in E \cap (x_0 - \delta, x_0 + \delta)} f(x) = L.`}</MathBlock>
        <p className="mt-2">
          Thus the limit of a function at <Math>x_0</Math>, if it exists, only depends on the values
          of <Math>f</Math> near <Math>x_0</Math>; the values far away do not actually influence the limit.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples of Limits and Non-Limits</h2>

      <Example id="9.3.16" title="The signum function">
        <p>
          Consider the <strong>signum function</strong> <Math>{String.raw`\text{sgn}: \mathbb{R} \to \mathbb{R}`}</Math> defined by:
        </p>
        <MathBlock>{String.raw`\text{sgn}(x) := \begin{cases} 1 & \text{if } x > 0 \\ 0 & \text{if } x = 0 \\ -1 & \text{if } x < 0 \end{cases}`}</MathBlock>
        <p className="mt-2">
          Then <Math>{String.raw`\lim_{x \to 0; x \in (0, \infty)} \text{sgn}(x) = 1`}</Math> (since <Math>{String.raw`\text{sgn}(x) = 1`}</Math> for
          all <Math>{String.raw`x > 0`}</Math>), whereas <Math>{String.raw`\lim_{x \to 0; x \in (-\infty, 0)} \text{sgn}(x) = -1`}</Math> (since{' '}
          <Math>{String.raw`\text{sgn}(x) = -1`}</Math> for all <Math>{String.raw`x < 0`}</Math>), and <Math>{String.raw`\lim_{x \to 0; x \in \mathbb{R}} \text{sgn}(x)`}</Math> is
          undefined.
        </p>
        <p className="mt-2">
          Thus it is sometimes dangerous to drop the set <Math>X</Math> from the notation of limit.
        </p>
      </Example>

      <Example id="9.3.17" title="A removable singularity">
        <p>
          Let <Math>f(x)</Math> be the function:
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1 & \text{if } x = 0 \\ 0 & \text{if } x \neq 0 \end{cases}`}</MathBlock>
        <p className="mt-2">
          Then <Math>{String.raw`\lim_{x \to 0; x \in \mathbb{R} \setminus \{0\}} f(x) = 0`}</Math>, but{' '}
          <Math>{String.raw`\lim_{x \to 0; x \in \mathbb{R}} f(x)`}</Math> is undefined. When this happens, we say
          that <Math>f</Math> has a <strong>removable singularity</strong> or <strong>removable discontinuity</strong> at 0.
        </p>
        <p className="mt-2">
          Because of such singularities, it is sometimes the convention when writing{' '}
          <Math>{String.raw`\lim_{x \to x_0} f(x)`}</Math> to automatically exclude <Math>x_0</Math> from the set.
        </p>
      </Example>

      <Example id="9.3.20" title="Limit via algebraic simplification">
        <p>
          Consider the function <Math>{String.raw`f: \mathbb{R} \setminus \{1\} \to \mathbb{R}`}</Math> defined
          by <Math>f(x) := (x^2 - 1)/(x - 1)</Math>. This function is well-defined for every real number
          except 1, so <Math>f(1)</Math> is undefined.
        </p>
        <p className="mt-2">
          However, 1 is still an adherent point of <Math>{String.raw`\mathbb{R} \setminus \{1\}`}</Math>, and
          the limit <Math>{String.raw`\lim_{x \to 1; x \in \mathbb{R} \setminus \{1\}} f(x)`}</Math> is still defined.
          This is because on the domain <Math>{String.raw`\mathbb{R} \setminus \{1\}`}</Math> we have:
        </p>
        <MathBlock>{String.raw`\frac{x^2 - 1}{x - 1} = \frac{(x+1)(x-1)}{x-1} = x + 1`}</MathBlock>
        <p>
          and <Math>{String.raw`\lim_{x \to 1; x \in \mathbb{R} \setminus \{1\}} (x + 1) = 2`}</Math>.
        </p>
      </Example>

      <Example id="9.3.21" title="A function with no limit">
        <p>
          Let <Math>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</Math> be the function:
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q} \\ 0 & \text{if } x \notin \mathbb{Q} \end{cases}`}</MathBlock>
        <p className="mt-2">
          We will show that <Math>f(x)</Math> has no limit at 0 in <Math>{String.raw`\mathbb{R}`}</Math>. Suppose for sake
          of contradiction that <Math>f(x)</Math> had some limit <Math>L</Math> at 0 in <Math>{String.raw`\mathbb{R}`}</Math>. Then
          we would have <Math>{String.raw`\lim_{n \to \infty} f(a_n) = L`}</Math> whenever <Math>{String.raw`(a_n)_{n=0}^\infty`}</Math> is
          a sequence of non-zero numbers converging to 0.
        </p>
        <p className="mt-2">
          Since <Math>{String.raw`(1/n)_{n=1}^\infty`}</Math> is such a sequence (of rationals), we would have:
        </p>
        <MathBlock>{String.raw`L = \lim_{n \to \infty} f(1/n) = \lim_{n \to \infty} 1 = 1.`}</MathBlock>
        <p className="mt-2">
          On the other hand, since <Math>{String.raw`(\sqrt{2}/n)_{n=1}^\infty`}</Math> is another sequence of non-zero
          numbers converging to 0 — but now these numbers are irrational instead of rational — we have:
        </p>
        <MathBlock>{String.raw`L = \lim_{n \to \infty} f(\sqrt{2}/n) = \lim_{n \to \infty} 0 = 0.`}</MathBlock>
        <p className="mt-2">
          Since <Math>1 \neq 0</Math>, we have a contradiction. Thus this function does not have a limit at 0.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.3.1</p>
          <p className="mt-2">Prove Proposition 9.3.9.</p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.3.2</p>
          <p className="mt-2">Prove the remaining claims in Proposition 9.3.14.</p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.3.3</p>
          <p className="mt-2">Prove Proposition 9.3.18.</p>
        </div>
      </div>
    </LessonLayout>
  );
}
