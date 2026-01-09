import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Introduction */}
      <p>
        Relations generalize the concept of functions by allowing an element to be related to
        multiple elements (or none at all). This section covers two particularly important types:
        equivalence relations (which partition sets) and order relations (which arrange elements).
      </p>

      <h2>Basic Definitions</h2>

      <Definition title="Relation" className="my-6">
        <p>
          A <strong>relation</strong> <InlineMath>R</InlineMath> from a set <InlineMath>A</InlineMath>{' '}
          to a set <InlineMath>B</InlineMath> is a subset <InlineMath>R \subseteq A \times B</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>(a, b) \in R</InlineMath>, we write <InlineMath>a \mathrel{'{R}'} b</InlineMath>{' '}
          and say "<InlineMath>a</InlineMath> is related to <InlineMath>b</InlineMath>".
        </p>
        <p className="mt-2">
          A relation from <InlineMath>A</InlineMath> to itself is called a <strong>relation on{' '}
          <InlineMath>A</InlineMath></strong>.
        </p>
      </Definition>

      <Example title="Relation Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            The <strong>less than</strong> relation on <InlineMath>\mathbb{'{Z}'}</InlineMath>:{' '}
            <InlineMath>R = \{'{(a, b) : a < b}'}\</InlineMath>
          </li>
          <li>
            The <strong>divisibility</strong> relation on <InlineMath>\mathbb{'{N}'}</InlineMath>:{' '}
            <InlineMath>R = \{'{(a, b) : a \\mid b}'}\</InlineMath>
          </li>
          <li>
            The <strong>congruence</strong> relation modulo <InlineMath>n</InlineMath>:{' '}
            <InlineMath>R = \{'{(a, b) : a \\equiv b \\mod n}'}\</InlineMath>
          </li>
          <li>
            The <strong>subset</strong> relation on <InlineMath>\mathcal{'{P}'}(S)</InlineMath>:{' '}
            <InlineMath>R = \{'{(A, B) : A \\subseteq B}'}\</InlineMath>
          </li>
        </ul>
      </Example>

      <h2>Properties of Relations</h2>

      <Definition title="Properties of Relations" className="my-6">
        <p>
          Let <InlineMath>R</InlineMath> be a relation on a set <InlineMath>A</InlineMath>. We say
          <InlineMath>R</InlineMath> is:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <strong>Reflexive</strong> if <InlineMath>a \mathrel{'{R}'} a</InlineMath> for all{' '}
            <InlineMath>a \in A</InlineMath>
          </li>
          <li>
            <strong>Symmetric</strong> if <InlineMath>a \mathrel{'{R}'} b</InlineMath> implies{' '}
            <InlineMath>b \mathrel{'{R}'} a</InlineMath>
          </li>
          <li>
            <strong>Antisymmetric</strong> if <InlineMath>a \mathrel{'{R}'} b</InlineMath> and{' '}
            <InlineMath>b \mathrel{'{R}'} a</InlineMath> implies <InlineMath>a = b</InlineMath>
          </li>
          <li>
            <strong>Transitive</strong> if <InlineMath>a \mathrel{'{R}'} b</InlineMath> and{' '}
            <InlineMath>b \mathrel{'{R}'} c</InlineMath> implies <InlineMath>a \mathrel{'{R}'} c</InlineMath>
          </li>
        </ul>
      </Definition>

      <Example title="Properties Examples" className="my-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2 pr-4">Relation</th>
                <th className="px-2 py-2">Refl</th>
                <th className="px-2 py-2">Sym</th>
                <th className="px-2 py-2">Antisym</th>
                <th className="px-2 py-2">Trans</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-800">
                <td className="py-2 pr-4"><InlineMath>{'<'}</InlineMath> on <InlineMath>\mathbb{'{Z}'}</InlineMath></td>
                <td className="px-2 py-2 text-center">✗</td>
                <td className="px-2 py-2 text-center">✗</td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✓</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 pr-4"><InlineMath>\leq</InlineMath> on <InlineMath>\mathbb{'{Z}'}</InlineMath></td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✗</td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✓</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 pr-4"><InlineMath>=</InlineMath> on any set</td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✓</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 pr-4"><InlineMath>\equiv \mod n</InlineMath></td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✗</td>
                <td className="px-2 py-2 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><InlineMath>\mid</InlineMath> on <InlineMath>\mathbb{'{N}'}</InlineMath></td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✗</td>
                <td className="px-2 py-2 text-center">✓</td>
                <td className="px-2 py-2 text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Example>

      <h2>Equivalence Relations</h2>

      <Definition title="Equivalence Relation" className="my-6">
        <p>
          A relation <InlineMath>R</InlineMath> on a set <InlineMath>A</InlineMath> is an{' '}
          <strong>equivalence relation</strong> if it is reflexive, symmetric, and transitive.
        </p>
        <p className="mt-2">
          We often use the symbol <InlineMath>\sim</InlineMath> for equivalence relations.
        </p>
      </Definition>

      <Example title="Equivalence Relation Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <strong>Equality</strong> on any set is an equivalence relation.
          </li>
          <li>
            <strong>Congruence modulo <InlineMath>n</InlineMath></strong> on <InlineMath>\mathbb{'{Z}'}</InlineMath>{' '}
            is an equivalence relation.
          </li>
          <li>
            <strong>Same birthday</strong> on a set of people is an equivalence relation.
          </li>
          <li>
            On <InlineMath>\mathbb{'{Z}'} \times (\mathbb{'{Z}'} \setminus \{'{0}'}\)</InlineMath>, define{' '}
            <InlineMath>(a, b) \sim (c, d)</InlineMath> iff <InlineMath>ad = bc</InlineMath>. This is
            an equivalence relation (fractions representing the same rational number).
          </li>
        </ul>
      </Example>

      <Definition title="Equivalence Class" className="my-6">
        <p>
          Let <InlineMath>\sim</InlineMath> be an equivalence relation on <InlineMath>A</InlineMath>.
          The <strong>equivalence class</strong> of an element <InlineMath>a \in A</InlineMath> is:
        </p>
        <MathBlock>{`[a] = \\{x \\in A : x \\sim a\\}`}</MathBlock>
        <p className="mt-2">
          Any element of an equivalence class is called a <strong>representative</strong> of that class.
        </p>
      </Definition>

      <Example title="Equivalence Classes Mod 3" className="my-6">
        <p>
          The congruence classes modulo 3 partition <InlineMath>\mathbb{'{Z}'}</InlineMath> into three classes:
        </p>
        <MathBlock>{`\\begin{aligned}
[0] &= \\{\\ldots, -6, -3, 0, 3, 6, 9, \\ldots\\} \\\\
[1] &= \\{\\ldots, -5, -2, 1, 4, 7, 10, \\ldots\\} \\\\
[2] &= \\{\\ldots, -4, -1, 2, 5, 8, 11, \\ldots\\}
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Note: <InlineMath>[0] = [3] = [6]</InlineMath>, etc.—different representatives give the
          same class.
        </p>
      </Example>

      <h2>Partitions</h2>

      <Definition title="Partition" className="my-6">
        <p>
          A <strong>partition</strong> of a set <InlineMath>A</InlineMath> is a collection of
          non-empty, pairwise disjoint subsets whose union is <InlineMath>A</InlineMath>.
        </p>
        <p className="mt-2">
          Formally, <InlineMath>\{'{A_i}'}\_{'{i \\in I}'}</InlineMath> is a partition of{' '}
          <InlineMath>A</InlineMath> if:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>A_i \neq \emptyset</InlineMath> for all <InlineMath>i \in I</InlineMath></li>
          <li>
            <InlineMath>A_i \cap A_j = \emptyset</InlineMath> whenever <InlineMath>i \neq j</InlineMath>
          </li>
          <li><InlineMath>\bigcup_{'{i \\in I}'} A_i = A</InlineMath></li>
        </ol>
      </Definition>

      <Example title="Partition Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>\{'{\\{1, 3\\}, \\{2, 4\\}, \\{5\\}}'}\</InlineMath> is a partition of{' '}
            <InlineMath>\{'{1, 2, 3, 4, 5}'}\</InlineMath>.
          </li>
          <li>
            The sets of even and odd integers partition <InlineMath>\mathbb{'{Z}'}</InlineMath>.
          </li>
          <li>
            The congruence classes mod <InlineMath>n</InlineMath> partition{' '}
            <InlineMath>\mathbb{'{Z}'}</InlineMath>.
          </li>
        </ul>
      </Example>

      <Theorem
        title="Equivalence Relations and Partitions"
        className="my-6"
        proof={
          <>
            <p>
              <strong>(⟹)</strong> Let <InlineMath>\sim</InlineMath> be an equivalence relation on{' '}
              <InlineMath>A</InlineMath>. We show the equivalence classes form a partition.
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                <InlineMath>[a] \neq \emptyset</InlineMath> since <InlineMath>a \in [a]</InlineMath>{' '}
                (reflexivity).
              </li>
              <li>
                If <InlineMath>[a] \cap [b] \neq \emptyset</InlineMath>, say{' '}
                <InlineMath>c \in [a] \cap [b]</InlineMath>, then <InlineMath>c \sim a</InlineMath>{' '}
                and <InlineMath>c \sim b</InlineMath>. By symmetry and transitivity,{' '}
                <InlineMath>a \sim b</InlineMath>, so <InlineMath>[a] = [b]</InlineMath>.
              </li>
              <li>
                <InlineMath>\bigcup [a] = A</InlineMath> since each <InlineMath>a \in [a]</InlineMath>.
              </li>
            </ol>
            <p className="mt-3">
              <strong>(⟸)</strong> Given a partition <InlineMath>\{'{A_i}'}\</InlineMath>, define{' '}
              <InlineMath>a \sim b</InlineMath> iff <InlineMath>a, b</InlineMath> belong to the same{' '}
              <InlineMath>A_i</InlineMath>. Verify reflexivity, symmetry, and transitivity.
            </p>
          </>
        }
      >
        <p>
          There is a one-to-one correspondence between equivalence relations on a set{' '}
          <InlineMath>A</InlineMath> and partitions of <InlineMath>A</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Given an equivalence relation, the equivalence classes form a partition.
          </li>
          <li>
            Given a partition, "belonging to the same block" defines an equivalence relation.
          </li>
        </ul>
      </Theorem>

      <Definition title="Quotient Set" className="my-6">
        <p>
          Let <InlineMath>\sim</InlineMath> be an equivalence relation on <InlineMath>A</InlineMath>.
          The <strong>quotient set</strong> (or <strong>quotient space</strong>){' '}
          <InlineMath>{'A / {\\sim}'}</InlineMath> is the set of all equivalence classes:
        </p>
        <MathBlock>{`A / {\\sim} = \\{[a] : a \\in A\\}`}</MathBlock>
      </Definition>

      <Example title="Quotient Set Example" className="my-6">
        <p>
          <InlineMath>{'\\mathbb{Z} / {\\equiv_n}'}</InlineMath> is the set of congruence classes
          modulo <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>{`\\mathbb{Z}_n = \\{[0], [1], [2], \\ldots, [n-1]\\}`}</MathBlock>
        <p className="mt-2">
          This is the set we studied in Chapter 1, now understood as a quotient set.
        </p>
      </Example>

      <h2>Order Relations</h2>

      <Definition title="Partial Order" className="my-6">
        <p>
          A relation <InlineMath>\leq</InlineMath> on a set <InlineMath>A</InlineMath> is a{' '}
          <strong>partial order</strong> if it is reflexive, antisymmetric, and transitive.
        </p>
        <p className="mt-2">
          A set with a partial order is called a <strong>partially ordered set</strong> (or{' '}
          <strong>poset</strong>).
        </p>
      </Definition>

      <Example title="Partial Order Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>\leq</InlineMath> on <InlineMath>\mathbb{'{R}'}</InlineMath> (the usual
            ordering of real numbers).
          </li>
          <li>
            <InlineMath>\subseteq</InlineMath> on <InlineMath>\mathcal{'{P}'}(S)</InlineMath> (set
            inclusion on the power set).
          </li>
          <li>
            <InlineMath>\mid</InlineMath> (divides) on <InlineMath>\mathbb{'{N}'}</InlineMath>.
          </li>
        </ul>
      </Example>

      <Definition title="Comparable Elements" className="my-6">
        <p>
          In a poset <InlineMath>(A, \leq)</InlineMath>, elements <InlineMath>a</InlineMath> and{' '}
          <InlineMath>b</InlineMath> are <strong>comparable</strong> if{' '}
          <InlineMath>a \leq b</InlineMath> or <InlineMath>b \leq a</InlineMath>. Otherwise they
          are <strong>incomparable</strong>.
        </p>
      </Definition>

      <Example title="Incomparable Elements" className="my-6">
        <p>
          In the divisibility order on <InlineMath>\mathbb{'{N}'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>2</InlineMath> and <InlineMath>6</InlineMath> are comparable since{' '}
            <InlineMath>2 \mid 6</InlineMath>.
          </li>
          <li>
            <InlineMath>2</InlineMath> and <InlineMath>3</InlineMath> are incomparable since{' '}
            <InlineMath>2 \nmid 3</InlineMath> and <InlineMath>3 \nmid 2</InlineMath>.
          </li>
        </ul>
      </Example>

      <Definition title="Total Order" className="my-6">
        <p>
          A partial order <InlineMath>\leq</InlineMath> on <InlineMath>A</InlineMath> is a{' '}
          <strong>total order</strong> (or <strong>linear order</strong>) if every two elements
          are comparable:
        </p>
        <MathBlock>{`\\forall a, b \\in A: \\quad a \\leq b \\text{ or } b \\leq a`}</MathBlock>
        <p className="mt-2">
          A totally ordered set is called a <strong>chain</strong>.
        </p>
      </Definition>

      <Example title="Total vs Partial Orders" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>\leq</InlineMath> on <InlineMath>\mathbb{'{R}'}</InlineMath> is a{' '}
            <strong>total order</strong> (any two reals can be compared).
          </li>
          <li>
            <InlineMath>\subseteq</InlineMath> on <InlineMath>\mathcal{'{P}'}(\{'{1, 2}'}\)</InlineMath>{' '}
            is a <strong>partial order</strong> but not total:{' '}
            <InlineMath>\{'{1}'}\</InlineMath> and <InlineMath>\{'{2}'}\</InlineMath> are incomparable.
          </li>
        </ul>
      </Example>

      <h2>Special Elements in Posets</h2>

      <Definition title="Bounds and Extrema" className="my-6">
        <p>
          In a poset <InlineMath>(A, \leq)</InlineMath>, let <InlineMath>S \subseteq A</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>a \in A</InlineMath> is an <strong>upper bound</strong> for{' '}
            <InlineMath>S</InlineMath> if <InlineMath>s \leq a</InlineMath> for all{' '}
            <InlineMath>s \in S</InlineMath>.
          </li>
          <li>
            <InlineMath>a \in A</InlineMath> is a <strong>lower bound</strong> for{' '}
            <InlineMath>S</InlineMath> if <InlineMath>a \leq s</InlineMath> for all{' '}
            <InlineMath>s \in S</InlineMath>.
          </li>
          <li>
            <InlineMath>m \in S</InlineMath> is the <strong>maximum</strong> (or{' '}
            <strong>greatest element</strong>) of <InlineMath>S</InlineMath> if{' '}
            <InlineMath>s \leq m</InlineMath> for all <InlineMath>s \in S</InlineMath>.
          </li>
          <li>
            <InlineMath>m \in S</InlineMath> is the <strong>minimum</strong> (or{' '}
            <strong>least element</strong>) of <InlineMath>S</InlineMath> if{' '}
            <InlineMath>m \leq s</InlineMath> for all <InlineMath>s \in S</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Definition title="Maximal and Minimal Elements" className="my-6">
        <p>
          In a poset, <InlineMath>m \in S</InlineMath> is:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Maximal</strong> if there is no <InlineMath>s \in S</InlineMath> with{' '}
            <InlineMath>m {'<'} s</InlineMath> (nothing in <InlineMath>S</InlineMath> is strictly
            larger).
          </li>
          <li>
            <strong>Minimal</strong> if there is no <InlineMath>s \in S</InlineMath> with{' '}
            <InlineMath>s {'<'} m</InlineMath> (nothing in <InlineMath>S</InlineMath> is strictly
            smaller).
          </li>
        </ul>
        <p className="mt-3">
          Note: Maximum implies maximal, but a poset can have multiple maximal elements without
          having a maximum.
        </p>
      </Definition>

      <Example title="Maximal vs Maximum" className="my-6">
        <p>
          Consider <InlineMath>S = \{'{2, 3, 4, 6, 8, 12}'}\</InlineMath> with divisibility order:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>8</InlineMath> and <InlineMath>12</InlineMath> are both <strong>maximal</strong>{' '}
            (nothing in <InlineMath>S</InlineMath> divides them except themselves).
          </li>
          <li>
            <InlineMath>S</InlineMath> has <strong>no maximum</strong> since <InlineMath>8</InlineMath>{' '}
            and <InlineMath>12</InlineMath> are incomparable.
          </li>
          <li>
            <InlineMath>2</InlineMath> and <InlineMath>3</InlineMath> are <strong>minimal</strong>.
          </li>
          <li>
            <InlineMath>S</InlineMath> has <strong>no minimum</strong> since <InlineMath>2</InlineMath>{' '}
            and <InlineMath>3</InlineMath> are incomparable.
          </li>
        </ul>
      </Example>

      <h2>Well-Orders</h2>

      <Definition title="Well-Ordering" className="my-6">
        <p>
          A total order <InlineMath>\leq</InlineMath> on <InlineMath>A</InlineMath> is a{' '}
          <strong>well-ordering</strong> if every non-empty subset of <InlineMath>A</InlineMath>{' '}
          has a minimum element.
        </p>
      </Definition>

      <Example title="Well-Order Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>\mathbb{'{N}'}</InlineMath> with the usual <InlineMath>\leq</InlineMath>{' '}
            is <strong>well-ordered</strong>. This is the Well-Ordering Principle we used in Chapter 1.
          </li>
          <li>
            <InlineMath>\mathbb{'{Z}'}</InlineMath> with the usual <InlineMath>\leq</InlineMath>{' '}
            is <strong>not</strong> well-ordered: the set of negative integers has no minimum.
          </li>
          <li>
            <InlineMath>[0, 1]</InlineMath> with the usual <InlineMath>\leq</InlineMath> is{' '}
            <strong>not</strong> well-ordered: the open interval <InlineMath>(0, 1)</InlineMath>{' '}
            has no minimum.
          </li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>relation</strong> on <InlineMath>A</InlineMath> is a subset of{' '}
              <InlineMath>A \times A</InlineMath>. Key properties: reflexive, symmetric,
              antisymmetric, transitive.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              An <strong>equivalence relation</strong> (reflexive + symmetric + transitive)
              partitions a set into equivalence classes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Equivalence relations and partitions are in one-to-one correspondence. The{' '}
              <strong>quotient set</strong> <InlineMath>{'A/{\\sim}'}</InlineMath> is the set of
              equivalence classes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              A <strong>partial order</strong> (reflexive + antisymmetric + transitive) allows
              comparing some pairs. A <strong>total order</strong> allows comparing all pairs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Maximal</strong> means nothing is larger; <strong>maximum</strong> means
              larger than everything. A poset may have multiple maximal elements but at most one
              maximum.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              A <strong>well-ordering</strong> is a total order where every non-empty subset has
              a minimum. <InlineMath>\mathbb{'{N}'}</InlineMath> is well-ordered.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
