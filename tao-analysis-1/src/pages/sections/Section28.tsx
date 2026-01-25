import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <p>
        Now that we have developed a reasonable theory of limits of sequences, we will use that theory
        to develop a theory of <strong>infinite series</strong>:
      </p>
      <MathBlock latex="\sum_{n=m}^{\infty} a_n = a_m + a_{m+1} + a_{m+2} + \cdots" />
      <p>
        But before we develop infinite series, we must first develop the theory of <strong>finite series</strong>.
        This section establishes the foundations of summation notation and proves the basic properties that
        will be essential for our study of infinite series.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Definition of Finite Series</h2>

      <Definition id="7.1.1" title="Finite series">
        <p>
          Let <Math latex="m, n" /> be integers, and let <Math latex="(a_i)_{i=m}^{n}" /> be a finite sequence
          of real numbers, assigning a real number <Math latex="a_i" /> to each integer <Math latex="i" /> with
          <Math latex="m \leq i \leq n" />. Then we define the <strong>finite sum</strong> (or <strong>finite series</strong>)
          <Math latex="\sum_{i=m}^{n} a_i" /> by the recursive formula:
        </p>
        <MathBlock latex="\sum_{i=m}^{n} a_i := 0 \quad \text{whenever } n < m;" />
        <MathBlock latex="\sum_{i=m}^{n+1} a_i := \left(\sum_{i=m}^{n} a_i\right) + a_{n+1} \quad \text{whenever } n \geq m - 1." />
      </Definition>

      <Example id="7.1.instances" title="Instances of finite series">
        <p>
          From the recursive definition, we have the following instances:
        </p>
        <MathBlock latex="\sum_{i=m}^{m-2} a_i = 0; \quad \sum_{i=m}^{m-1} a_i = 0; \quad \sum_{i=m}^{m} a_i = a_m;" />
        <MathBlock latex="\sum_{i=m}^{m+1} a_i = a_m + a_{m+1}; \quad \sum_{i=m}^{m+2} a_i = a_m + a_{m+1} + a_{m+2}." />
        <p className="mt-2">
          Because of this pattern, we sometimes express <Math latex="\sum_{i=m}^{n} a_i" /> less formally as:
        </p>
        <MathBlock latex="\sum_{i=m}^{n} a_i = a_m + a_{m+1} + \cdots + a_n." />
      </Example>

      <Callout type="info" title="Sum vs. Series">
        <p>
          The difference between "sum" and "series" is a subtle linguistic one. Strictly speaking:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A <strong>series</strong> is an expression of the form <Math latex="\sum_{i=m}^{n} a_i" /></li>
          <li>The <strong>sum</strong> of that series is the real number it equals</li>
        </ul>
        <p className="mt-2">
          For instance, <Math latex="1 + 2 + 3 + 4 + 5" /> is a series, whose sum is 15. If one were very
          pedantic, one would not consider 15 a series and would not consider <Math latex="1 + 2 + 3 + 4 + 5" />
          a sum. However, since the two expressions have the same mathematical value, they are interchangeable
          by the axiom of substitution, even if they are not semantically interchangeable.
        </p>
      </Callout>

      <Callout type="warning" title="Index of summation is a dummy variable">
        <p>
          The variable <Math latex="i" /> (sometimes called the <strong>index of summation</strong>) is a
          <strong>bound variable</strong> (or <strong>dummy variable</strong>). The expression
          <Math latex="\sum_{i=m}^{n} a_i" /> does not actually depend on any quantity named <Math latex="i" />.
          In particular, one can replace the index with any other symbol:
        </p>
        <MathBlock latex="\sum_{i=m}^{n} a_i = \sum_{j=m}^{n} a_j = \sum_{k=m}^{n} a_k." />
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of Finite Sums</h2>

      <Theorem
        id="7.1.4"
        title="Lemma: Basic properties of finite sums"
        statement={
          <p>
            Let <Math latex="m \leq n" /> be integers, and let <Math latex="a_i, b_i" /> be real numbers
            assigned to each integer <Math latex="i" /> with <Math latex="m \leq i \leq n" />. Then the
            following properties hold:
          </p>
        }
      />

      <div className="space-y-6 mt-4">
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
          <p className="font-semibold">(a) Splitting sums</p>
          <p className="mt-2">
            Let <Math latex="m \leq n < p" /> be integers, and let <Math latex="a_i" /> be assigned to each
            <Math latex="m \leq i \leq p" />. Then:
          </p>
          <MathBlock latex="\sum_{i=m}^{n} a_i + \sum_{i=n+1}^{p} a_i = \sum_{i=m}^{p} a_i." />
        </div>

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
          <p className="font-semibold">(b) Index shifting</p>
          <p className="mt-2">
            Let <Math latex="k" /> be another integer. Then:
          </p>
          <MathBlock latex="\sum_{i=m}^{n} a_i = \sum_{j=m+k}^{n+k} a_{j-k}." />
        </div>

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
          <p className="font-semibold">(c) Linearity (addition)</p>
          <MathBlock latex="\sum_{i=m}^{n} (a_i + b_i) = \left(\sum_{i=m}^{n} a_i\right) + \left(\sum_{i=m}^{n} b_i\right)." />
        </div>

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
          <p className="font-semibold">(d) Linearity (scalar multiplication)</p>
          <p className="mt-2">Let <Math latex="c" /> be a real number. Then:</p>
          <MathBlock latex="\sum_{i=m}^{n} (c \cdot a_i) = c \cdot \left(\sum_{i=m}^{n} a_i\right)." />
        </div>

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
          <p className="font-semibold">(e) Triangle inequality for finite series</p>
          <MathBlock latex="\left|\sum_{i=m}^{n} a_i\right| \leq \sum_{i=m}^{n} |a_i|." />
        </div>

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
          <p className="font-semibold">(f) Comparison test for finite series</p>
          <p className="mt-2">
            Suppose <Math latex="a_i \leq b_i" /> for all <Math latex="m \leq i \leq n" />. Then:
          </p>
          <MathBlock latex="\sum_{i=m}^{n} a_i \leq \sum_{i=m}^{n} b_i." />
        </div>
      </div>

      <Theorem
        id="7.1.4.proof"
        title="Proof of property (a)"
        statement={
          <p>We prove property (a) by induction on <Math latex="p" />.</p>
        }
        proof={
          <>
            <p>
              <strong>Base case:</strong> When <Math latex="p = n" />, the left side is
              <Math latex="\sum_{i=m}^{n} a_i + \sum_{i=n+1}^{n} a_i = \sum_{i=m}^{n} a_i + 0 = \sum_{i=m}^{n} a_i" />,
              which equals the right side.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> Assume the result holds for some <Math latex="p \geq n" />.
              For <Math latex="p + 1" />:
            </p>
            <MathBlock latex="\sum_{i=m}^{n} a_i + \sum_{i=n+1}^{p+1} a_i = \sum_{i=m}^{n} a_i + \left(\sum_{i=n+1}^{p} a_i + a_{p+1}\right)" />
            <MathBlock latex="= \left(\sum_{i=m}^{n} a_i + \sum_{i=n+1}^{p} a_i\right) + a_{p+1} = \sum_{i=m}^{p} a_i + a_{p+1} = \sum_{i=m}^{p+1} a_i." />
            <p>The other properties are proved similarly by induction.</p>
          </>
        }
      />

      <Example id="7.1.splitting" title="Splitting a sum">
        <p>
          Consider <Math latex="\sum_{i=1}^{5} i = 1 + 2 + 3 + 4 + 5 = 15" />.
        </p>
        <p className="mt-2">
          We can split this at <Math latex="n = 3" />:
        </p>
        <MathBlock latex="\sum_{i=1}^{3} i + \sum_{i=4}^{5} i = (1 + 2 + 3) + (4 + 5) = 6 + 9 = 15." />
      </Example>

      <Example id="7.1.shifting" title="Index shifting">
        <p>
          Consider <Math latex="\sum_{i=0}^{3} i^2 = 0 + 1 + 4 + 9 = 14" />.
        </p>
        <p className="mt-2">
          Shifting by <Math latex="k = 2" />:
        </p>
        <MathBlock latex="\sum_{j=2}^{5} (j-2)^2 = 0 + 1 + 4 + 9 = 14." />
        <p className="mt-2">
          The values are the same because <Math latex="(j-2)^2" /> at <Math latex="j = 2, 3, 4, 5" /> gives
          <Math latex="0^2, 1^2, 2^2, 3^2" />.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Summation over Finite Sets</h2>

      <p>
        We can extend the definition of finite series to summations over arbitrary finite sets, not just
        consecutive integers.
      </p>

      <Definition id="7.1.6" title="Summations over finite sets">
        <p>
          Let <Math latex="X" /> be a finite set with <Math latex="n" /> elements (where <Math latex="n \in \mathbb{N}" />),
          and let <Math latex="f: X \to \mathbb{R}" /> be a function from <Math latex="X" /> to the real numbers
          (i.e., <Math latex="f" /> assigns a real number <Math latex="f(x)" /> to each element <Math latex="x" />
          of <Math latex="X" />). Then we define the finite sum <Math latex="\sum_{x \in X} f(x)" /> as follows:
        </p>
        <p className="mt-2">
          First select any bijection <Math latex="g" /> from <Math latex="\{i \in \mathbb{N} : 1 \leq i \leq n\}" />
          to <Math latex="X" />; such a bijection exists since <Math latex="X" /> has <Math latex="n" /> elements.
          Then define:
        </p>
        <MathBlock latex="\sum_{x \in X} f(x) := \sum_{i=1}^{n} f(g(i))." />
      </Definition>

      <Example id="7.1.7" title="Summation over a finite set">
        <p>
          Let <Math latex="X = \{a, b, c\}" /> where <Math latex="a, b, c" /> are distinct objects, and let
          <Math latex="f: X \to \mathbb{R}" /> be defined by <Math latex="f(a) = 2" />, <Math latex="f(b) = 5" />,
          <Math latex="f(c) = -1" />.
        </p>
        <p className="mt-2">
          To compute <Math latex="\sum_{x \in X} f(x)" />, we select a bijection <Math latex="g: \{1, 2, 3\} \to X" />,
          e.g., <Math latex="g(1) = a" />, <Math latex="g(2) = b" />, <Math latex="g(3) = c" />. Then:
        </p>
        <MathBlock latex="\sum_{x \in X} f(x) = \sum_{i=1}^{3} f(g(i)) = f(a) + f(b) + f(c) = 2 + 5 + (-1) = 6." />
        <p className="mt-2">
          We could pick another bijection, e.g., <Math latex="h(1) = c" />, <Math latex="h(2) = b" />,
          <Math latex="h(3) = a" />, but the result is the same:
        </p>
        <MathBlock latex="\sum_{i=1}^{3} f(h(i)) = f(c) + f(b) + f(a) = -1 + 5 + 2 = 6." />
      </Example>

      <Callout type="warning" title="Well-definedness requires proof">
        <p>
          The definition of <Math latex="\sum_{x \in X} f(x)" /> uses an arbitrary choice of bijection
          <Math latex="g" />. For this definition to be well-defined, we must prove that different
          bijections give the same sum. This is Proposition 7.1.8 below.
        </p>
      </Callout>

      <Theorem
        id="7.1.8"
        title="Proposition: Finite summations are well-defined"
        statement={
          <p>
            Let <Math latex="X" /> be a finite set with <Math latex="n" /> elements (where <Math latex="n \in \mathbb{N}" />),
            let <Math latex="f: X \to \mathbb{R}" /> be a function, and let
            <Math latex="g: \{i \in \mathbb{N} : 1 \leq i \leq n\} \to X" /> and
            <Math latex="h: \{i \in \mathbb{N} : 1 \leq i \leq n\} \to X" /> be bijections. Then:
          </p>
        }
      />
      <MathBlock latex="\sum_{i=1}^{n} f(g(i)) = \sum_{i=1}^{n} f(h(i))." />

      <Theorem
        id="7.1.8.proof"
        title="Proof sketch"
        statement={<p>We prove this by induction on <Math latex="n" />.</p>}
        proof={
          <>
            <p>
              <strong>Base case <Math latex="n = 0" />:</strong> Both sums equal 0 by definition.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> Assume the result holds for sets of size <Math latex="n" />.
              Let <Math latex="X" /> have <Math latex="n + 1" /> elements, and let <Math latex="g, h" /> be
              bijections from <Math latex="\{1, \ldots, n+1\}" /> to <Math latex="X" />.
            </p>
            <p className="mt-2">
              Let <Math latex="x = g(n+1)" />. Since <Math latex="h" /> is a bijection, there exists some
              <Math latex="j" /> with <Math latex="1 \leq j \leq n+1" /> such that <Math latex="h(j) = x" />.
            </p>
            <p className="mt-2">
              By definition: <Math latex="\sum_{i=1}^{n+1} f(g(i)) = \sum_{i=1}^{n} f(g(i)) + f(x)" />.
            </p>
            <p className="mt-2">
              For the other sum, we can split at position <Math latex="j" /> and rearrange, ultimately
              showing it also equals <Math latex="\sum_{i=1}^{n} f(\tilde{h}(i)) + f(x)" /> where
              <Math latex="\tilde{h}" /> is a bijection from <Math latex="\{1, \ldots, n\}" /> to
              <Math latex="X \setminus \{x\}" />.
            </p>
            <p className="mt-2">
              By the induction hypothesis applied to <Math latex="X \setminus \{x\}" /> (which has
              <Math latex="n" /> elements), the sums over the restricted bijections are equal, completing
              the proof.
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of Summation over Finite Sets</h2>

      <Theorem
        id="7.1.11"
        title="Proposition: Basic properties of summation over finite sets"
        statement={<p>The following properties hold:</p>}
      />

      <div className="space-y-4 mt-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(a) Empty set</p>
          <p className="mt-1">
            If <Math latex="X" /> is empty and <Math latex="f: X \to \mathbb{R}" /> is a function (the empty
            function), then <Math latex="\sum_{x \in X} f(x) = 0" />.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(b) Singleton</p>
          <p className="mt-1">
            If <Math latex="X = \{x_0\}" /> consists of a single element and <Math latex="f: X \to \mathbb{R}" />
            is a function, then <Math latex="\sum_{x \in X} f(x) = f(x_0)" />.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(c) Substitution (Part I)</p>
          <p className="mt-1">
            If <Math latex="X" /> is finite, <Math latex="f: X \to \mathbb{R}" /> is a function, and
            <Math latex="g: Y \to X" /> is a bijection, then:
          </p>
          <MathBlock latex="\sum_{x \in X} f(x) = \sum_{y \in Y} f(g(y))." />
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(d) Substitution (Part II)</p>
          <p className="mt-1">
            Let <Math latex="n \leq m" /> be integers, and let <Math latex="X = \{i \in \mathbb{Z} : n \leq i \leq m\}" />.
            If <Math latex="a_i" /> is a real number assigned to each <Math latex="i \in X" />, then:
          </p>
          <MathBlock latex="\sum_{i=n}^{m} a_i = \sum_{i \in X} a_i." />
        </div>
      </div>

      <Callout type="info" title="Notation conventions">
        <p>
          We often abbreviate <Math latex="\sum_{x \in \{y \in X : P(y) \text{ is true}\}} f(x)" /> as
          <Math latex="\sum_{x \in X : P(x)} f(x)" /> or even <Math latex="\sum_{P(x)} f(x)" /> when there
          is no ambiguity.
        </p>
        <p className="mt-2">
          For instance, <Math latex="\sum_{n \in \mathbb{N} : 2 \leq n \leq 4} f(n)" /> or
          <Math latex="\sum_{2 \leq n \leq 4} f(n)" /> is shorthand for
          <Math latex="\sum_{n \in \{2, 3, 4\}} f(n) = f(2) + f(3) + f(4)" />.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.1.1</p>
          <p className="mt-1">
            Prove Lemma 7.1.4 (all parts). Each property can be proved by induction on
            <Math latex="n - m" /> or on the upper limit of summation.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.1.2</p>
          <p className="mt-1">
            Prove the formula for the sum of an arithmetic progression:
          </p>
          <MathBlock latex="\sum_{i=0}^{n} i = \frac{n(n+1)}{2}." />
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.1.3</p>
          <p className="mt-1">
            Prove the formula for the sum of a geometric series:
          </p>
          <MathBlock latex="\sum_{i=0}^{n} x^i = \frac{x^{n+1} - 1}{x - 1} \quad \text{for } x \neq 1." />
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.1.4</p>
          <p className="mt-1">
            Let <Math latex="X, Y" /> be disjoint finite sets, and let <Math latex="f: X \cup Y \to \mathbb{R}" />
            be a function. Show that:
          </p>
          <MathBlock latex="\sum_{z \in X \cup Y} f(z) = \sum_{x \in X} f(x) + \sum_{y \in Y} f(y)." />
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.1.5</p>
          <p className="mt-1">
            Let <Math latex="X" /> be a finite set, and let <Math latex="f: X \to \mathbb{R}" /> and
            <Math latex="g: X \to \mathbb{R}" /> be functions. Show that:
          </p>
          <MathBlock latex="\sum_{x \in X} (f(x) + g(x)) = \sum_{x \in X} f(x) + \sum_{x \in X} g(x)." />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Finite series</strong> <Math latex="\sum_{i=m}^{n} a_i" /> is defined recursively:
            empty sums equal 0, and we add one term at a time.
          </li>
          <li>
            The <strong>index of summation</strong> is a dummy variable—it can be renamed without changing
            the sum.
          </li>
          <li>
            Key properties include <strong>splitting sums</strong>, <strong>index shifting</strong>,
            <strong>linearity</strong>, the <strong>triangle inequality</strong>, and the
            <strong>comparison test</strong>.
          </li>
          <li>
            <strong>Summation over finite sets</strong> <Math latex="\sum_{x \in X} f(x)" /> is well-defined:
            the order of summation doesn't matter (Proposition 7.1.8).
          </li>
          <li>
            These foundations will be essential when we extend to infinite series.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>

      <p>
        With the theory of finite series established, we are now ready to tackle <strong>infinite series</strong>.
        In the next section, we will define what it means for an infinite series
        <Math latex="\sum_{n=m}^{\infty} a_n" /> to converge, building on our theory of limits of sequences.
        We will see that an infinite series converges precisely when its sequence of partial sums converges.
      </p>
    </LessonLayout>
  );
}
