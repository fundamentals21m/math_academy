import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Introduction */}
      <p>
        Functions are among the most important concepts in mathematics. They describe relationships
        between sets where each input has exactly one output. In this section, we study the basic
        properties of functions, including injectivity, surjectivity, and composition.
      </p>

      <h2>Basic Definitions</h2>

      <Definition title="Function" className="my-6">
        <p>
          A <strong>function</strong> <InlineMath>f</InlineMath> from a set <InlineMath>A</InlineMath>{' '}
          to a set <InlineMath>B</InlineMath>, written <InlineMath>f: A \to B</InlineMath>, is a
          rule that assigns to each element <InlineMath>a \in A</InlineMath> exactly one element{' '}
          <InlineMath>f(a) \in B</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <InlineMath>A</InlineMath> is called the <strong>domain</strong> of <InlineMath>f</InlineMath>
          </li>
          <li>
            <InlineMath>B</InlineMath> is called the <strong>codomain</strong> of <InlineMath>f</InlineMath>
          </li>
          <li>
            <InlineMath>f(a)</InlineMath> is called the <strong>image</strong> of <InlineMath>a</InlineMath>{' '}
            under <InlineMath>f</InlineMath>
          </li>
        </ul>
      </Definition>

      <p>
        Formally, a function <InlineMath>f: A \to B</InlineMath> is a subset{' '}
        <InlineMath>f \subseteq A \times B</InlineMath> such that for each{' '}
        <InlineMath>a \in A</InlineMath>, there is exactly one <InlineMath>b \in B</InlineMath> with{' '}
        <InlineMath>(a, b) \in f</InlineMath>.
      </p>

      <Definition title="Image and Preimage" className="my-6">
        <p>
          For a function <InlineMath>f: A \to B</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            The <strong>image</strong> (or <strong>range</strong>) of <InlineMath>f</InlineMath> is:
            <MathBlock>{`\\text{Im}(f) = f(A) = \\{f(a) : a \\in A\\} \\subseteq B`}</MathBlock>
          </li>
          <li>
            For a subset <InlineMath>S \subseteq A</InlineMath>, the <strong>image of S</strong> is:
            <MathBlock>{`f(S) = \\{f(s) : s \\in S\\}`}</MathBlock>
          </li>
          <li>
            For a subset <InlineMath>T \subseteq B</InlineMath>, the <strong>preimage of T</strong> is:
            <MathBlock>{`f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}`}</MathBlock>
          </li>
        </ul>
      </Definition>

      <Example title="Function Examples" className="my-6">
        <p>
          <strong>Example 1:</strong> Let <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath>{' '}
          be defined by <InlineMath>f(x) = x^2</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Domain: <InlineMath>\mathbb{'{R}'}</InlineMath></li>
          <li>Codomain: <InlineMath>\mathbb{'{R}'}</InlineMath></li>
          <li>
            Image: <InlineMath>\text{'{Im}'}(f) = [0, \infty)</InlineMath> (non-negative reals)
          </li>
        </ul>

        <p className="mt-4">
          <strong>Example 2:</strong> Let <InlineMath>f: \{'{1, 2, 3}'}\to \{'{a, b, c}'}\</InlineMath>{' '}
          be defined by <InlineMath>f(1) = a</InlineMath>, <InlineMath>f(2) = b</InlineMath>,{' '}
          <InlineMath>f(3) = a</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>f^{'{-1}'}(\{'{a}'}\) = \{'{1, 3}'}\</InlineMath>
          </li>
          <li>
            <InlineMath>f^{'{-1}'}(\{'{c}'}\) = \emptyset</InlineMath>
          </li>
        </ul>
      </Example>

      <h2>Injective Functions</h2>

      <Definition title="Injection (One-to-One)" className="my-6">
        <p>
          A function <InlineMath>f: A \to B</InlineMath> is <strong>injective</strong> (or{' '}
          <strong>one-to-one</strong>) if different elements of <InlineMath>A</InlineMath> have
          different images:
        </p>
        <MathBlock>{`\\forall a_1, a_2 \\in A: \\quad f(a_1) = f(a_2) \\Rightarrow a_1 = a_2`}</MathBlock>
        <p className="mt-2">
          Equivalently: <InlineMath>a_1 \neq a_2 \Rightarrow f(a_1) \neq f(a_2)</InlineMath>.
        </p>
      </Definition>

      <Example title="Injective Function Examples" className="my-6">
        <ul className="space-y-4">
          <li>
            <strong>Injective:</strong> <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath>{' '}
            given by <InlineMath>f(x) = 2x + 1</InlineMath>.
            <p className="text-dark-300 mt-1">
              Proof: If <InlineMath>f(a) = f(b)</InlineMath>, then <InlineMath>2a + 1 = 2b + 1</InlineMath>,
              so <InlineMath>a = b</InlineMath>.
            </p>
          </li>
          <li>
            <strong>Not injective:</strong> <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath>{' '}
            given by <InlineMath>f(x) = x^2</InlineMath>.
            <p className="text-dark-300 mt-1">
              Counterexample: <InlineMath>f(-2) = f(2) = 4</InlineMath>, but <InlineMath>-2 \neq 2</InlineMath>.
            </p>
          </li>
        </ul>
      </Example>

      <h2>Surjective Functions</h2>

      <Definition title="Surjection (Onto)" className="my-6">
        <p>
          A function <InlineMath>f: A \to B</InlineMath> is <strong>surjective</strong> (or{' '}
          <strong>onto</strong>) if every element of <InlineMath>B</InlineMath> is the image of
          at least one element of <InlineMath>A</InlineMath>:
        </p>
        <MathBlock>{`\\forall b \\in B, \\exists a \\in A: \\quad f(a) = b`}</MathBlock>
        <p className="mt-2">
          Equivalently: <InlineMath>\text{'{Im}'}(f) = B</InlineMath>.
        </p>
      </Definition>

      <Example title="Surjective Function Examples" className="my-6">
        <ul className="space-y-4">
          <li>
            <strong>Surjective:</strong> <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath>{' '}
            given by <InlineMath>f(x) = 2x + 1</InlineMath>.
            <p className="text-dark-300 mt-1">
              For any <InlineMath>y \in \mathbb{'{R}'}</InlineMath>, we have{' '}
              <InlineMath>f((y-1)/2) = y</InlineMath>.
            </p>
          </li>
          <li>
            <strong>Not surjective:</strong> <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath>{' '}
            given by <InlineMath>f(x) = x^2</InlineMath>.
            <p className="text-dark-300 mt-1">
              No real number maps to <InlineMath>-1</InlineMath> (squares are non-negative).
            </p>
          </li>
          <li>
            <strong>Surjective by restricting codomain:</strong>{' '}
            <InlineMath>f: \mathbb{'{R}'} \to [0, \infty)</InlineMath> given by{' '}
            <InlineMath>f(x) = x^2</InlineMath> is surjective.
          </li>
        </ul>
      </Example>

      <h2>Bijective Functions</h2>

      <Definition title="Bijection" className="my-6">
        <p>
          A function <InlineMath>f: A \to B</InlineMath> is <strong>bijective</strong> (or a{' '}
          <strong>one-to-one correspondence</strong>) if it is both injective and surjective.
        </p>
        <p className="mt-2">
          A bijection establishes a perfect pairing between elements of <InlineMath>A</InlineMath>{' '}
          and <InlineMath>B</InlineMath>: each element of <InlineMath>A</InlineMath> maps to a
          unique element of <InlineMath>B</InlineMath>, and every element of <InlineMath>B</InlineMath>{' '}
          is "hit" exactly once.
        </p>
      </Definition>

      <Theorem title="Bijection and Cardinality" className="my-6">
        <p>
          For finite sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>, there exists a
          bijection <InlineMath>f: A \to B</InlineMath> if and only if{' '}
          <InlineMath>|A| = |B|</InlineMath>.
        </p>
      </Theorem>

      <Example title="Bijection Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath> given by{' '}
            <InlineMath>f(x) = 2x + 1</InlineMath> is a bijection.
          </li>
          <li>
            <InlineMath>f: \mathbb{'{Z}'} \to \mathbb{'{Z}'}</InlineMath> given by{' '}
            <InlineMath>f(n) = n + 5</InlineMath> is a bijection.
          </li>
          <li>
            <InlineMath>f: \mathbb{'{N}'} \to \text{'{\\{even positive integers\\}}'}</InlineMath>{' '}
            given by <InlineMath>f(n) = 2n</InlineMath> is a bijection.
          </li>
        </ul>
      </Example>

      <h2>Function Composition</h2>

      <Definition title="Composition" className="my-6">
        <p>
          Let <InlineMath>f: A \to B</InlineMath> and <InlineMath>g: B \to C</InlineMath> be
          functions. The <strong>composition</strong> of <InlineMath>g</InlineMath> with{' '}
          <InlineMath>f</InlineMath>, written <InlineMath>g \circ f</InlineMath> (read "g composed
          with f" or "g after f"), is the function <InlineMath>g \circ f: A \to C</InlineMath>{' '}
          defined by:
        </p>
        <MathBlock>{`(g \\circ f)(a) = g(f(a))`}</MathBlock>
      </Definition>

      <Example title="Composition Example" className="my-6">
        <p>
          Let <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath> and{' '}
          <InlineMath>g: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath> be defined by{' '}
          <InlineMath>f(x) = x^2</InlineMath> and <InlineMath>g(x) = x + 1</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>(g \circ f)(x) = g(f(x)) = g(x^2) = x^2 + 1</InlineMath>
          </li>
          <li>
            <InlineMath>(f \circ g)(x) = f(g(x)) = f(x + 1) = (x + 1)^2 = x^2 + 2x + 1</InlineMath>
          </li>
        </ul>
        <p className="mt-3 text-dark-300">
          Note: <InlineMath>g \circ f \neq f \circ g</InlineMath> in general—composition is not
          commutative!
        </p>
      </Example>

      <Theorem title="Associativity of Composition" className="my-6">
        <p>
          If <InlineMath>f: A \to B</InlineMath>, <InlineMath>g: B \to C</InlineMath>, and{' '}
          <InlineMath>h: C \to D</InlineMath>, then:
        </p>
        <MathBlock>{`(h \\circ g) \\circ f = h \\circ (g \\circ f)`}</MathBlock>
      </Theorem>

      <Theorem
        title="Composition Preserves Injectivity and Surjectivity"
        className="my-6"
        proof={
          <>
            <p>
              <strong>Injectivity:</strong> Suppose <InlineMath>f</InlineMath> and{' '}
              <InlineMath>g</InlineMath> are injective. If{' '}
              <InlineMath>(g \circ f)(a_1) = (g \circ f)(a_2)</InlineMath>, then{' '}
              <InlineMath>g(f(a_1)) = g(f(a_2))</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>g</InlineMath> is injective, <InlineMath>f(a_1) = f(a_2)</InlineMath>.
              Since <InlineMath>f</InlineMath> is injective, <InlineMath>a_1 = a_2</InlineMath>.
            </p>
            <p className="mt-3">
              <strong>Surjectivity:</strong> Suppose <InlineMath>f</InlineMath> and{' '}
              <InlineMath>g</InlineMath> are surjective. For any <InlineMath>c \in C</InlineMath>,
              since <InlineMath>g</InlineMath> is surjective, there exists{' '}
              <InlineMath>b \in B</InlineMath> with <InlineMath>g(b) = c</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>f</InlineMath> is surjective, there exists{' '}
              <InlineMath>a \in A</InlineMath> with <InlineMath>f(a) = b</InlineMath>. Then{' '}
              <InlineMath>(g \circ f)(a) = g(f(a)) = g(b) = c</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>f: A \to B</InlineMath> and <InlineMath>g: B \to C</InlineMath>.
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            If <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are injective, then{' '}
            <InlineMath>g \circ f</InlineMath> is injective.
          </li>
          <li>
            If <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are surjective, then{' '}
            <InlineMath>g \circ f</InlineMath> is surjective.
          </li>
          <li>
            If <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are bijective, then{' '}
            <InlineMath>g \circ f</InlineMath> is bijective.
          </li>
        </ol>
      </Theorem>

      <h2>Inverse Functions</h2>

      <Definition title="Identity Function" className="my-6">
        <p>
          The <strong>identity function</strong> on a set <InlineMath>A</InlineMath>, denoted{' '}
          <InlineMath>\text{'{id}'}_A</InlineMath> or <InlineMath>1_A</InlineMath>, is defined by:
        </p>
        <MathBlock>{`\\text{id}_A(a) = a \\quad \\text{for all } a \\in A`}</MathBlock>
      </Definition>

      <Definition title="Inverse Function" className="my-6">
        <p>
          Let <InlineMath>f: A \to B</InlineMath> be a function. A function{' '}
          <InlineMath>g: B \to A</InlineMath> is called an <strong>inverse</strong> of{' '}
          <InlineMath>f</InlineMath> if:
        </p>
        <MathBlock>{`g \\circ f = \\text{id}_A \\quad \\text{and} \\quad f \\circ g = \\text{id}_B`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>f</InlineMath> has an inverse, we denote it by <InlineMath>f^{'{-1}'}</InlineMath>{' '}
          and say that <InlineMath>f</InlineMath> is <strong>invertible</strong>.
        </p>
      </Definition>

      <Theorem
        title="Bijections are Invertible"
        className="my-6"
        proof={
          <>
            <p>
              <strong>(⟹)</strong> Suppose <InlineMath>f</InlineMath> is bijective. For each{' '}
              <InlineMath>b \in B</InlineMath>, since <InlineMath>f</InlineMath> is surjective, there
              exists <InlineMath>a \in A</InlineMath> with <InlineMath>f(a) = b</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>f</InlineMath> is injective, this <InlineMath>a</InlineMath> is unique.
              Define <InlineMath>g(b) = a</InlineMath>. Then <InlineMath>g \circ f = \text{'{id}'}_A</InlineMath>{' '}
              and <InlineMath>f \circ g = \text{'{id}'}_B</InlineMath>.
            </p>
            <p className="mt-3">
              <strong>(⟸)</strong> Suppose <InlineMath>f</InlineMath> has an inverse{' '}
              <InlineMath>g</InlineMath>.
            </p>
            <p className="mt-2">
              <em>Injectivity:</em> If <InlineMath>f(a_1) = f(a_2)</InlineMath>, then{' '}
              <InlineMath>a_1 = g(f(a_1)) = g(f(a_2)) = a_2</InlineMath>.
            </p>
            <p className="mt-2">
              <em>Surjectivity:</em> For any <InlineMath>b \in B</InlineMath>,{' '}
              <InlineMath>f(g(b)) = b</InlineMath>, so <InlineMath>b</InlineMath> is in the image.
            </p>
          </>
        }
      >
        <p>
          A function <InlineMath>f: A \to B</InlineMath> has an inverse if and only if{' '}
          <InlineMath>f</InlineMath> is bijective.
        </p>
      </Theorem>

      <Example title="Inverse Function Example" className="my-6">
        <p>
          Let <InlineMath>f: \mathbb{'{R}'} \to \mathbb{'{R}'}</InlineMath> be defined by{' '}
          <InlineMath>f(x) = 2x + 3</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Finding the inverse:</strong> Solve <InlineMath>y = 2x + 3</InlineMath> for{' '}
          <InlineMath>x</InlineMath>:
        </p>
        <MathBlock>{`x = \\frac{y - 3}{2}`}</MathBlock>
        <p>
          So <InlineMath>f^{'{-1}'}(y) = \frac{'{y - 3}{2}'}</InlineMath>.
        </p>
        <p className="mt-3">
          <strong>Verification:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath>(f^{'{-1}'} \circ f)(x) = f^{'{-1}'}(2x + 3) = \frac{'{(2x+3)-3}{2}'} = x</InlineMath>
          </li>
          <li>
            <InlineMath>(f \circ f^{'{-1}'})(y) = f\left(\frac{'{y-3}{2}'}\right) = 2 \cdot \frac{'{y-3}{2}'} + 3 = y</InlineMath>
          </li>
        </ul>
      </Example>

      <Theorem title="Inverse of Composition" className="my-6">
        <p>
          If <InlineMath>f: A \to B</InlineMath> and <InlineMath>g: B \to C</InlineMath> are bijections, then:
        </p>
        <MathBlock>{`(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}`}</MathBlock>
        <p className="mt-2">
          Note the reversal of order: to "undo" doing <InlineMath>f</InlineMath> then{' '}
          <InlineMath>g</InlineMath>, we "undo" <InlineMath>g</InlineMath> first, then "undo"{' '}
          <InlineMath>f</InlineMath>.
        </p>
      </Theorem>

      <h2>Counting Functions</h2>

      <Theorem title="Number of Functions" className="my-6">
        <p>
          Let <InlineMath>|A| = m</InlineMath> and <InlineMath>|B| = n</InlineMath>. The number of
          functions from <InlineMath>A</InlineMath> to <InlineMath>B</InlineMath> is:
        </p>
        <MathBlock>{`|B^A| = n^m`}</MathBlock>
      </Theorem>

      <Theorem title="Number of Injections" className="my-6">
        <p>
          Let <InlineMath>|A| = m</InlineMath> and <InlineMath>|B| = n</InlineMath>. The number of
          injective functions from <InlineMath>A</InlineMath> to <InlineMath>B</InlineMath> is:
        </p>
        <MathBlock>{`n \\cdot (n-1) \\cdot (n-2) \\cdots (n-m+1) = \\frac{n!}{(n-m)!}`}</MathBlock>
        <p className="mt-2">
          This is zero if <InlineMath>m {'>'} n</InlineMath> (can't inject a larger set into a smaller one).
        </p>
      </Theorem>

      <Example title="Counting Functions Example" className="my-6">
        <p>
          Let <InlineMath>A = \{'{1, 2, 3}'}\</InlineMath> and <InlineMath>B = \{'{a, b, c, d}'}\</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Total functions: <InlineMath>4^3 = 64</InlineMath>
          </li>
          <li>
            Injective functions: <InlineMath>4 \cdot 3 \cdot 2 = 24</InlineMath>
          </li>
          <li>
            Bijections: 0 (since <InlineMath>|A| \neq |B|</InlineMath>)
          </li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>function</strong> <InlineMath>f: A \to B</InlineMath> assigns to each{' '}
              <InlineMath>a \in A</InlineMath> exactly one <InlineMath>f(a) \in B</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Injective:</strong> <InlineMath>f(a_1) = f(a_2) \Rightarrow a_1 = a_2</InlineMath>{' '}
              (no two elements map to the same image).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Surjective:</strong> Every <InlineMath>b \in B</InlineMath> has a preimage
              (<InlineMath>\text{'{Im}'}(f) = B</InlineMath>).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Bijective:</strong> Both injective and surjective. Bijections have inverses.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Composition:</strong> <InlineMath>(g \circ f)(a) = g(f(a))</InlineMath>. It
              preserves injectivity and surjectivity.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              <strong>Counting:</strong> There are <InlineMath>n^m</InlineMath> functions and{' '}
              <InlineMath>n!/(n-m)!</InlineMath> injections from an{' '}
              <InlineMath>m</InlineMath>-set to an <InlineMath>n</InlineMath>-set.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
