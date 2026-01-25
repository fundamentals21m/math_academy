import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <p>
        In the previous sections we saw that a large number of functions were continuous, though
        certainly not all functions were continuous. We now show that continuous functions enjoy
        a number of other useful properties, especially if their domain is a <em>closed interval</em>.
        It is here that we shall begin exploiting the full power of the Heine-Borel theorem
        (Theorem 9.1.24).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Bounded Functions</h2>

      <Definition id="9.6.1" title="Bounded functions">
        <p>
          Let <Math>X</Math> be a subset of <Math>{String.raw`\mathbb{R}`}</Math>, and let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be
          a function.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            We say that <Math>f</Math> is <strong>bounded from above</strong> if there exists a real
            number <Math>M</Math> such that <Math>{String.raw`f(x) \leq M`}</Math> for all <Math>x \in X</Math>.
          </li>
          <li>
            We say that <Math>f</Math> is <strong>bounded from below</strong> if there exists a real
            number <Math>M</Math> such that <Math>{String.raw`f(x) \geq -M`}</Math> for all <Math>x \in X</Math>.
          </li>
          <li>
            We say that <Math>f</Math> is <strong>bounded</strong> if there exists a real number <Math>M</Math> such
            that <Math>{String.raw`|f(x)| \leq M`}</Math> for all <Math>x \in X</Math>.
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="Equivalent characterizations">
        <p>
          A function is bounded if and only if it is bounded both from above and below. Also, a
          function <Math>{String.raw`f: X \to \mathbb{R}`}</Math> is bounded if and only if its image <Math>f(X)</Math> is
          a bounded set in the sense of Definition 9.1.22.
        </p>
      </Callout>

      <p className="mt-4">
        Not all continuous functions are bounded. For instance:
      </p>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          The function <Math>f(x) := x</Math> on the domain <Math>{String.raw`\mathbb{R}`}</Math> is continuous but
          unbounded, although it is bounded on some smaller domains, such as <Math>[1, 2]</Math>.
        </li>
        <li>
          The function <Math>f(x) := 1/x</Math> is continuous but unbounded on <Math>(0, 1)</Math>, though
          it is continuous and bounded on <Math>[1, 2]</Math>.
        </li>
      </ul>

      <p className="mt-4">
        However, if the domain of the continuous function is a <em>closed and bounded</em> interval,
        then we do have boundedness:
      </p>

      <Theorem id="9.6.3" title="Lemma: Continuous functions on closed intervals are bounded">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be
          a function continuous on <Math>[a, b]</Math>. Then <Math>f</Math> is a bounded function.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              Suppose for sake of contradiction that <Math>f</Math> is not bounded. Thus for every real
              number <Math>M</Math> there exists an element <Math>x \in [a, b]</Math> such that <Math>{String.raw`|f(x)| \geq M`}</Math>.
            </p>
            <p className="mt-2">
              In particular, for every natural number <Math>n</Math>, the set{' '}
              <Math>{String.raw`\{x \in [a, b] : |f(x)| \geq n\}`}</Math> is non-empty. We can thus choose a
              sequence <Math>{String.raw`(x_n)_{n=0}^\infty`}</Math> in <Math>[a, b]</Math> such
              that <Math>{String.raw`|f(x_n)| \geq n`}</Math> for all <Math>n</Math>.
            </p>
            <p className="mt-2">
              This sequence lies in <Math>[a, b]</Math>, and so by the Heine-Borel theorem (Theorem 9.1.24)
              there exists a subsequence <Math>{String.raw`(x_{n_j})_{j=0}^\infty`}</Math> which converges to some
              limit <Math>L \in [a, b]</Math>.
            </p>
            <p className="mt-2">
              Since <Math>f</Math> is continuous on <Math>[a, b]</Math>, it is continuous at <Math>L</Math>, and in
              particular we see that
            </p>
            <MathBlock>{String.raw`\lim_{j \to \infty} f(x_{n_j}) = f(L).`}</MathBlock>
            <p>
              Thus the sequence <Math>{String.raw`(f(x_{n_j}))_{j=0}^\infty`}</Math> is convergent, and hence bounded.
              On the other hand, we know from construction that <Math>{String.raw`|f(x_{n_j})| \geq n_j \geq j`}</Math> for
              all <Math>j</Math>, so the sequence is not bounded — a contradiction.
            </p>
          </div>
        </details>
      </Theorem>

      <Callout type="info" title="Proof technique">
        <p>
          There are two things about this proof worth noting:
        </p>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>It shows how useful the Heine-Borel theorem (Theorem 9.1.24) is.</li>
          <li>
            It is an <em>indirect proof</em>; it doesn't say how to find the bound for <Math>f</Math>,
            but it shows that having <Math>f</Math> unbounded leads to a contradiction.
          </li>
        </ol>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Maxima and Minima</h2>

      <p>
        We now improve Lemma 9.6.3 to say something more. Not only is a continuous function on
        a closed interval bounded, but it actually <em>attains</em> its bounds.
      </p>

      <Definition id="9.6.5" title="Maxima and minima">
        <p>
          Let <Math>{String.raw`f: X \to \mathbb{R}`}</Math> be a function, and let <Math>x_0 \in X</Math>.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            We say that <Math>f</Math> <strong>attains its maximum</strong> at <Math>x_0</Math> if we
            have <Math>{String.raw`f(x_0) \geq f(x)`}</Math> for all <Math>x \in X</Math> (i.e., the value
            of <Math>f</Math> at the point <Math>x_0</Math> is larger than or equal to the value
            of <Math>f</Math> at any other point in <Math>X</Math>).
          </li>
          <li>
            We say that <Math>f</Math> <strong>attains its minimum</strong> at <Math>x_0</Math> if we
            have <Math>{String.raw`f(x_0) \leq f(x)`}</Math> for all <Math>x \in X</Math>.
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="Boundedness from attaining extrema">
        <p>
          If a function attains its maximum somewhere, then it must be bounded from above. Similarly
          if it attains its minimum somewhere, then it must be bounded from below. These notions of
          maxima and minima are <em>global</em>; local versions will be defined in Definition 10.2.1.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Maximum Principle (Extreme Value Theorem)</h2>

      <Theorem id="9.6.7" title="Proposition: Maximum principle (Extreme value theorem)">
        <p>
          Let <Math>{String.raw`a < b`}</Math> be real numbers, and let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be a
          function continuous on <Math>[a, b]</Math>. Then <Math>f</Math> attains its maximum at some
          point <Math>{String.raw`x_{\max} \in [a, b]`}</Math>, and also attains its minimum at some
          point <Math>{String.raw`x_{\min} \in [a, b]`}</Math>.
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer text-amber-600 hover:text-amber-500 font-medium">Proof (for maximum)</summary>
          <div className="mt-2 pl-4 border-l-2 border-amber-200">
            <p>
              We shall just show that <Math>f</Math> attains its maximum somewhere; the proof for the
              minimum is similar.
            </p>
            <p className="mt-2">
              From Lemma 9.6.3 we know that <Math>f</Math> is bounded, thus there exists
              an <Math>M</Math> such that <Math>{String.raw`-M \leq f(x) \leq M`}</Math> for each <Math>x \in [a, b]</Math>.
              Now let <Math>E</Math> denote the set
            </p>
            <MathBlock>{String.raw`E := \{f(x) : x \in [a, b]\} = f([a, b]).`}</MathBlock>
            <p>
              This set is a subset of <Math>[-M, M]</Math> and is non-empty (it contains <Math>f(a)</Math>). Hence
              by the least upper bound principle, <Math>m := \sup(E)</Math> is a real number.
            </p>
            <p className="mt-2">
              By definition of supremum, we know that <Math>{String.raw`f(x) \leq m`}</Math> for all <Math>x \in [a, b]</Math>.
              Thus to show that <Math>f</Math> attains its maximum, it suffices to find
              an <Math>{String.raw`x_{\max} \in [a, b]`}</Math> such that <Math>{String.raw`f(x_{\max}) = m`}</Math>.
            </p>
            <p className="mt-2">
              For each integer <Math>{String.raw`n \geq 1`}</Math>, since <Math>m - 1/n</Math> is not an upper bound
              for <Math>E</Math>, there exists <Math>x_n \in [a, b]</Math> such that <Math>{String.raw`m - 1/n < f(x_n)`}</Math>.
              By the Heine-Borel theorem, there is a subsequence <Math>{String.raw`(x_{n_j})_{j=1}^\infty`}</Math> converging
              to some limit <Math>{String.raw`x_{\max} \in [a, b]`}</Math>.
            </p>
            <p className="mt-2">
              Since <Math>f</Math> is continuous at <Math>{String.raw`x_{\max}`}</Math>:
            </p>
            <MathBlock>{String.raw`f(x_{\max}) = \lim_{j \to \infty} f(x_{n_j}) \geq \lim_{j \to \infty} \left(m - \frac{1}{n_j}\right) = m.`}</MathBlock>
            <p>
              But we also know <Math>{String.raw`f(x_{\max}) \leq m`}</Math>, so <Math>{String.raw`f(x_{\max}) = m`}</Math> as desired.
            </p>
          </div>
        </details>
      </Theorem>

      <Callout type="warning" title="Terminology">
        <p>
          Strictly speaking, "maximum principle" is a misnomer, since the principle also concerns
          the minimum. Perhaps a more precise name would have been "extremum principle"; the
          word <em>extremum</em> is used to denote either a maximum or a minimum. This result is
          also commonly known as the <strong>Extreme Value Theorem</strong>.
        </p>
      </Callout>

      <Example id="9.6.7a" title="Multiple extrema">
        <p>
          Note that the maximum principle does not prevent a function from attaining its maximum
          or minimum at more than one point. For instance, the function <Math>f(x) := x^2</Math> on
          the interval <Math>[-2, 2]</Math> attains its maximum at two different points: at <Math>-2</Math> and
          at <Math>2</Math>.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Supremum and Infimum Notation</h2>

      <p>
        Let us write <Math>{String.raw`\sup_{x \in [a,b]} f(x)`}</Math> as shorthand
        for <Math>{String.raw`\sup\{f(x) : x \in [a, b]\}`}</Math>, and similarly
        define <Math>{String.raw`\inf_{x \in [a,b]} f(x)`}</Math>. The maximum principle thus asserts that:
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>
          <Math>{String.raw`m := \sup_{x \in [a,b]} f(x)`}</Math> is a real number and is the <strong>maximum
          value</strong> of <Math>f</Math> on <Math>[a, b]</Math>, i.e., there is at least one
          point <Math>{String.raw`x_{\max} \in [a, b]`}</Math> for which <Math>{String.raw`f(x_{\max}) = m`}</Math>, and for every
          other <Math>x \in [a, b]</Math>, <Math>{String.raw`f(x) \leq m`}</Math>.
        </li>
        <li>
          Similarly <Math>{String.raw`\inf_{x \in [a,b]} f(x)`}</Math> is the <strong>minimum value</strong> of <Math>f</Math> on <Math>[a, b]</Math>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">When the Maximum Principle Fails</h2>

      <p>
        We now know that on a closed interval, every continuous function is bounded and attains
        its maximum at least once and minimum at least once. The same is <strong>not true</strong> for
        open or infinite intervals.
      </p>

      <div className="bg-gray-800 p-4 rounded-lg mt-4">
        <p className="font-medium mb-2">Critical hypotheses for the maximum principle:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Domain must be closed</strong>: The interval must include its endpoints</li>
          <li><strong>Domain must be bounded</strong>: The interval cannot extend to infinity</li>
          <li><strong>Function must be continuous</strong>: No jumps or gaps in the function</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400">
          If any of these conditions fails, the maximum principle may not hold.
        </p>
      </div>

      <Example id="9.6.9a" title="Why closedness matters">
        <p>
          Consider <Math>f(x) := x</Math> on the open interval <Math>(0, 1)</Math>. The function is continuous
          and bounded (values lie in <Math>(0, 1)</Math>), but:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><Math>{String.raw`\sup f = 1`}</Math> is never attained (no <Math>x \in (0, 1)</Math> has <Math>f(x) = 1</Math>)</li>
          <li><Math>{String.raw`\inf f = 0`}</Math> is never attained (no <Math>x \in (0, 1)</Math> has <Math>f(x) = 0</Math>)</li>
        </ul>
      </Example>

      <Example id="9.6.9b" title="Why boundedness matters">
        <p>
          Consider <Math>f(x) := x</Math> on the closed but unbounded interval <Math>[0, \infty)</Math>. The
          function is continuous and attains its minimum at <Math>x = 0</Math>, but has no maximum
          since <Math>f</Math> is unbounded above.
        </p>
      </Example>

      <Example id="9.6.9c" title="Why continuity matters">
        <p>
          Consider the function on <Math>[-1, 1]</Math>:
        </p>
        <MathBlock>{String.raw`f(x) := \begin{cases} 1/x & \text{if } x \neq 0 \\ 0 & \text{if } x = 0 \end{cases}`}</MathBlock>
        <p className="mt-2">
          The domain is closed and bounded, but <Math>f</Math> is discontinuous at 0. The function is
          unbounded (it goes to <Math>\pm \infty</Math> as <Math>x \to 0</Math> from the right/left).
        </p>
      </Example>

      <Callout type="info" title="Other maximum principles">
        <p>
          You may encounter a rather different "maximum principle" in complex analysis or partial
          differential equations, involving analytic functions and harmonic functions respectively,
          instead of continuous functions. Those maximum principles are not directly related to
          this one (though they are also concerned with whether maxima exist, and where the maxima
          are located).
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.6.1</p>
          <p className="mt-2">Give examples of:</p>
          <ol className="list-alpha ml-6 mt-2 space-y-2">
            <li>
              A function <Math>{String.raw`f: (1, 2) \to \mathbb{R}`}</Math> which is continuous and bounded,
              attains its minimum somewhere, but does not attain its maximum anywhere.
            </li>
            <li>
              A function <Math>{String.raw`f: [0, \infty) \to \mathbb{R}`}</Math> which is continuous, bounded,
              attains its maximum somewhere, but does not attain its minimum anywhere.
            </li>
            <li>
              A function <Math>{String.raw`f: [-1, 1] \to \mathbb{R}`}</Math> which is bounded but does not
              attain its minimum anywhere or its maximum anywhere.
            </li>
            <li>
              A function <Math>{String.raw`f: [-1, 1] \to \mathbb{R}`}</Math> which has no upper bound and no
              lower bound.
            </li>
          </ol>
          <p className="mt-2">
            Explain why none of the examples you construct violate the maximum principle.
            (Note: read the assumptions carefully!)
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.6.2</p>
          <p className="mt-2">
            Let <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be continuous. Show
            that <Math>{String.raw`|f|: [a, b] \to \mathbb{R}`}</Math> defined by <Math>|f|(x) := |f(x)|</Math> also
            attains its maximum and minimum.
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <p className="font-medium">Exercise 9.6.3</p>
          <p className="mt-2">
            Let <Math>{String.raw`f, g: [a, b] \to \mathbb{R}`}</Math> be continuous functions. Show that the
            functions <Math>{String.raw`\max(f, g)`}</Math> and <Math>{String.raw`\min(f, g)`}</Math> defined
            by <Math>{String.raw`\max(f, g)(x) := \max(f(x), g(x))`}</Math> also attain their maxima and minima
            on <Math>[a, b]</Math>.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
