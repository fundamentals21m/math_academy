import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      {/* Introduction */}
      <p>
        Lagrange's theorem is one of the most important results in group theory. It says that the
        order of any subgroup divides the order of the group. The proof uses the concept of cosets,
        which partition the group into equal-sized pieces.
      </p>

      <h2>Cosets</h2>

      <Definition title="Left and Right Cosets" className="my-6">
        <p>
          Let <InlineMath>H</InlineMath> be a subgroup of <InlineMath>G</InlineMath> and{' '}
          <InlineMath>g \in G</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            The <strong>left coset</strong> of <InlineMath>H</InlineMath> by <InlineMath>g</InlineMath> is:
            <MathBlock>{`gH = \\{gh : h \\in H\\}`}</MathBlock>
          </li>
          <li>
            The <strong>right coset</strong> of <InlineMath>H</InlineMath> by <InlineMath>g</InlineMath> is:
            <MathBlock>{`Hg = \\{hg : h \\in H\\}`}</MathBlock>
          </li>
        </ul>
      </Definition>

      <Example title="Cosets in S_3" className="my-6">
        <p>
          Let <InlineMath>H = \{'{e, (1 \\, 2)}'}\</InlineMath>, a subgroup of <InlineMath>S_3</InlineMath>.
        </p>
        <p className="mt-3"><strong>Left cosets:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>eH = \{'{e, (1 \\, 2)}'}\= H</InlineMath></li>
          <li><InlineMath>(1 \, 3)H = \{'{(1 \\, 3), (1 \\, 3)(1 \\, 2)}'}\= \{'{(1 \\, 3), (1 \\, 2 \\, 3)}'}\</InlineMath></li>
          <li><InlineMath>(2 \, 3)H = \{'{(2 \\, 3), (2 \\, 3)(1 \\, 2)}'}\= \{'{(2 \\, 3), (1 \\, 3 \\, 2)}'}\</InlineMath></li>
        </ul>
        <p className="mt-2">
          These three cosets partition <InlineMath>S_3</InlineMath>.
        </p>
      </Example>

      <Theorem title="Properties of Cosets" className="my-6">
        <p>Let <InlineMath>H \leq G</InlineMath>. Then:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            <InlineMath>|gH| = |H|</InlineMath> (every coset has the same size as <InlineMath>H</InlineMath>)
          </li>
          <li>
            <InlineMath>g \in gH</InlineMath> (each element is in its own coset)
          </li>
          <li>
            <InlineMath>gH = H</InlineMath> if and only if <InlineMath>g \in H</InlineMath>
          </li>
          <li>
            Two cosets are either equal or disjoint: <InlineMath>aH = bH</InlineMath> or{' '}
            <InlineMath>aH \cap bH = \emptyset</InlineMath>
          </li>
          <li>
            <InlineMath>aH = bH</InlineMath> if and only if <InlineMath>a^{'{-1}'}b \in H</InlineMath>
          </li>
        </ol>
      </Theorem>

      <Theorem
        title="Cosets Partition the Group"
        className="my-6"
        proof={
          <>
            <p>
              Define a relation on <InlineMath>G</InlineMath>: <InlineMath>a \sim b</InlineMath> iff{' '}
              <InlineMath>a^{'{-1}'}b \in H</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Reflexive:</strong> <InlineMath>a^{'{-1}'}a = e \in H</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Symmetric:</strong> If <InlineMath>a^{'{-1}'}b \in H</InlineMath>, then{' '}
              <InlineMath>b^{'{-1}'}a = (a^{'{-1}'}b)^{'{-1}'} \in H</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Transitive:</strong> If <InlineMath>a^{'{-1}'}b, b^{'{-1}'}c \in H</InlineMath>,
              then <InlineMath>a^{'{-1}'}c = (a^{'{-1}'}b)(b^{'{-1}'}c) \in H</InlineMath>.
            </p>
            <p className="mt-2">
              This equivalence relation partitions <InlineMath>G</InlineMath>. The equivalence class
              of <InlineMath>a</InlineMath> is exactly <InlineMath>aH</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The left cosets of <InlineMath>H</InlineMath> in <InlineMath>G</InlineMath> partition{' '}
          <InlineMath>G</InlineMath>.
        </p>
      </Theorem>

      <h2>Lagrange's Theorem</h2>

      <Definition title="Index" className="my-6">
        <p>
          The <strong>index</strong> of a subgroup <InlineMath>H</InlineMath> in <InlineMath>G</InlineMath>,
          denoted <InlineMath>[G : H]</InlineMath>, is the number of distinct left cosets of{' '}
          <InlineMath>H</InlineMath> in <InlineMath>G</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Lagrange's Theorem"
        className="my-6"
        proof={
          <>
            <p>
              The left cosets of <InlineMath>H</InlineMath> partition <InlineMath>G</InlineMath>.
            </p>
            <p className="mt-2">
              Each coset has <InlineMath>|H|</InlineMath> elements, and there are{' '}
              <InlineMath>[G : H]</InlineMath> cosets.
            </p>
            <p className="mt-2">
              Therefore <InlineMath>|G| = |H| \cdot [G : H]</InlineMath>, so{' '}
              <InlineMath>|H|</InlineMath> divides <InlineMath>|G|</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>G</InlineMath> is a finite group and <InlineMath>H \leq G</InlineMath>, then:
        </p>
        <MathBlock>{`|H| \\text{ divides } |G|`}</MathBlock>
        <p className="mt-2">Moreover:</p>
        <MathBlock>{`|G| = |H| \\cdot [G : H]`}</MathBlock>
      </Theorem>

      <Example title="Applying Lagrange's Theorem" className="my-6">
        <p>
          <InlineMath>|S_3| = 6</InlineMath>. Possible subgroup orders: 1, 2, 3, 6.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Order 1: <InlineMath>\{'{e}'}\</InlineMath></li>
          <li>Order 2: <InlineMath>\{'{e, (1 \\, 2)}'}\</InlineMath>, etc. (3 such subgroups)</li>
          <li>Order 3: <InlineMath>A_3 = \{'{e, (1 \\, 2 \\, 3), (1 \\, 3 \\, 2)}'}\</InlineMath></li>
          <li>Order 6: <InlineMath>S_3</InlineMath> itself</li>
        </ul>
        <p className="mt-2">
          There is no subgroup of order 4 or 5 (don't divide 6).
        </p>
      </Example>

      <h2>Corollaries</h2>

      <Theorem title="Order of Element Divides Group Order" className="my-6">
        <p>
          If <InlineMath>G</InlineMath> is finite and <InlineMath>g \in G</InlineMath>, then{' '}
          <InlineMath>|g|</InlineMath> divides <InlineMath>|G|</InlineMath>.
        </p>
        <p className="mt-2 text-dark-300">
          (Proof: <InlineMath>|\langle g \rangle| = |g|</InlineMath> and{' '}
          <InlineMath>\langle g \rangle \leq G</InlineMath>.)
        </p>
      </Theorem>

      <Theorem title="Power Equal to Identity" className="my-6">
        <p>
          For any element <InlineMath>g</InlineMath> of a finite group <InlineMath>G</InlineMath>:
        </p>
        <MathBlock>{`g^{|G|} = e`}</MathBlock>
      </Theorem>

      <Theorem title="Groups of Prime Order" className="my-6">
        <p>
          If <InlineMath>|G| = p</InlineMath> (prime), then <InlineMath>G</InlineMath> is cyclic.
        </p>
        <p className="mt-2 text-dark-300">
          (Proof: For any <InlineMath>g \neq e</InlineMath>, <InlineMath>|\langle g \rangle|</InlineMath>{' '}
          divides <InlineMath>p</InlineMath> and is <InlineMath>{'>'}1</InlineMath>, so{' '}
          <InlineMath>|\langle g \rangle| = p = |G|</InlineMath>.)
        </p>
      </Theorem>

      <Example title="Fermat's Little Theorem Revisited" className="my-6">
        <p>
          For prime <InlineMath>p</InlineMath>, the multiplicative group{' '}
          <InlineMath>(\mathbb{'{Z}'}/p\mathbb{'{Z}'})^*</InlineMath> has order{' '}
          <InlineMath>p - 1</InlineMath>.
        </p>
        <p className="mt-2">
          By Lagrange, for any <InlineMath>[a] \neq [0]</InlineMath>:
        </p>
        <MathBlock>{`[a]^{p-1} = [1] \\quad \\Rightarrow \\quad a^{p-1} \\equiv 1 \\mod p`}</MathBlock>
        <p className="mt-2">
          This is Fermat's Little Theorem from Chapter 1!
        </p>
      </Example>

      <h2>Euler's Theorem via Lagrange</h2>

      <Example title="Euler's Theorem Revisited" className="my-6">
        <p>
          The group <InlineMath>(\mathbb{'{Z}'}/n\mathbb{'{Z}'})^*</InlineMath> has order{' '}
          <InlineMath>\phi(n)</InlineMath>.
        </p>
        <p className="mt-2">
          By Lagrange, for any <InlineMath>[a]</InlineMath> with <InlineMath>\gcd(a, n) = 1</InlineMath>:
        </p>
        <MathBlock>{`[a]^{\\phi(n)} = [1] \\quad \\Rightarrow \\quad a^{\\phi(n)} \\equiv 1 \\mod n`}</MathBlock>
        <p className="mt-2">
          This is Euler's Theorem!
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <strong>Left coset:</strong> <InlineMath>gH = \{'{gh : h \\in H}'}\</InlineMath>.
              All cosets have the same size as <InlineMath>H</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Cosets <strong>partition</strong> the group: any two cosets are equal or disjoint.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Lagrange's Theorem:</strong> <InlineMath>|H|</InlineMath> divides{' '}
              <InlineMath>|G|</InlineMath>. Also <InlineMath>|G| = |H| \cdot [G : H]</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Corollary:</strong> Order of any element divides the group order.{' '}
              <InlineMath>g^{'{|G|}'} = e</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Prime order:</strong> Groups of prime order are cyclic.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              Lagrange implies <strong>Fermat's Little</strong> and <strong>Euler's</strong> theorems.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
