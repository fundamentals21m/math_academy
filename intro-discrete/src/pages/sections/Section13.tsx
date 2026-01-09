import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Introduction */}
      <p>
        A permutation is a rearrangement of objects. Permutations arise naturally when studying
        symmetry, card shuffling, and cryptography. They also provide our first important examples
        of groups—algebraic structures that capture the essence of symmetry.
      </p>

      <h2>Basic Definitions</h2>

      <Definition title="Permutation" className="my-6">
        <p>
          A <strong>permutation</strong> of a set <InlineMath>X</InlineMath> is a bijection{' '}
          <InlineMath>\sigma: X \to X</InlineMath>.
        </p>
        <p className="mt-2">
          For a finite set <InlineMath>X = \{'{1, 2, \\ldots, n}'}\</InlineMath>, we often write
          permutations using <strong>two-line notation</strong>:
        </p>
        <MathBlock>{`\\sigma = \\begin{pmatrix} 1 & 2 & 3 & \\cdots & n \\\\ \\sigma(1) & \\sigma(2) & \\sigma(3) & \\cdots & \\sigma(n) \\end{pmatrix}`}</MathBlock>
      </Definition>

      <Example title="Two-Line Notation" className="my-6">
        <p>
          The permutation <InlineMath>\sigma</InlineMath> of <InlineMath>\{'{1, 2, 3, 4}'}\</InlineMath>{' '}
          defined by <InlineMath>\sigma(1) = 3</InlineMath>, <InlineMath>\sigma(2) = 1</InlineMath>,{' '}
          <InlineMath>\sigma(3) = 4</InlineMath>, <InlineMath>\sigma(4) = 2</InlineMath> is written:
        </p>
        <MathBlock>{`\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 3 & 1 & 4 & 2 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          This means: 1 maps to 3, 2 maps to 1, 3 maps to 4, and 4 maps to 2.
        </p>
      </Example>

      <Definition title="Symmetric Group" className="my-6">
        <p>
          The set of all permutations of <InlineMath>\{'{1, 2, \\ldots, n}'}\</InlineMath> is called
          the <strong>symmetric group</strong> and is denoted <InlineMath>S_n</InlineMath>.
        </p>
        <p className="mt-2">
          The number of permutations in <InlineMath>S_n</InlineMath> is <InlineMath>n!</InlineMath>.
        </p>
      </Definition>

      <Example title="The Symmetric Group S_3" className="my-6">
        <p>
          <InlineMath>S_3</InlineMath> has <InlineMath>3! = 6</InlineMath> elements:
        </p>
        <MathBlock>{`\\begin{aligned}
e &= \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 2 & 3 \\end{pmatrix} &
\\sigma_1 &= \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 3 \\end{pmatrix} &
\\sigma_2 &= \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix} \\\\[4pt]
\\sigma_3 &= \\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 2 & 1 \\end{pmatrix} &
\\sigma_4 &= \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix} &
\\sigma_5 &= \\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 1 & 2 \\end{pmatrix}
\\end{aligned}`}</MathBlock>
      </Example>

      <h2>Composition of Permutations</h2>

      <Definition title="Composition" className="my-6">
        <p>
          Given permutations <InlineMath>\sigma</InlineMath> and <InlineMath>\tau</InlineMath>, their{' '}
          <strong>composition</strong> (or <strong>product</strong>){' '}
          <InlineMath>\sigma \circ \tau</InlineMath> is the permutation defined by:
        </p>
        <MathBlock>{`(\\sigma \\circ \\tau)(x) = \\sigma(\\tau(x))`}</MathBlock>
        <p className="mt-2">
          We often write <InlineMath>\sigma\tau</InlineMath> instead of{' '}
          <InlineMath>\sigma \circ \tau</InlineMath>.
        </p>
      </Definition>

      <Example title="Computing a Product" className="my-6">
        <p>
          Let <InlineMath>\sigma = \begin{'{pmatrix}'} 1 & 2 & 3 \\ 2 & 3 & 1 \end{'{pmatrix}'}</InlineMath>{' '}
          and <InlineMath>\tau = \begin{'{pmatrix}'} 1 & 2 & 3 \\ 2 & 1 & 3 \end{'{pmatrix}'}</InlineMath>.
        </p>
        <p className="mt-3">
          To compute <InlineMath>\sigma\tau</InlineMath>, apply <InlineMath>\tau</InlineMath> first,
          then <InlineMath>\sigma</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>(\sigma\tau)(1) = \sigma(\tau(1)) = \sigma(2) = 3</InlineMath>
          </li>
          <li>
            <InlineMath>(\sigma\tau)(2) = \sigma(\tau(2)) = \sigma(1) = 2</InlineMath>
          </li>
          <li>
            <InlineMath>(\sigma\tau)(3) = \sigma(\tau(3)) = \sigma(3) = 1</InlineMath>
          </li>
        </ul>
        <p className="mt-3">
          So <InlineMath>\sigma\tau = \begin{'{pmatrix}'} 1 & 2 & 3 \\ 3 & 2 & 1 \end{'{pmatrix}'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="Properties of Permutation Composition" className="my-6">
        <p>
          For permutations in <InlineMath>S_n</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>
            <strong>Closure:</strong> <InlineMath>\sigma\tau \in S_n</InlineMath>
          </li>
          <li>
            <strong>Associativity:</strong> <InlineMath>(\sigma\tau)\rho = \sigma(\tau\rho)</InlineMath>
          </li>
          <li>
            <strong>Identity:</strong> The identity permutation <InlineMath>e</InlineMath> satisfies{' '}
            <InlineMath>e\sigma = \sigma e = \sigma</InlineMath>
          </li>
          <li>
            <strong>Inverses:</strong> Every <InlineMath>\sigma</InlineMath> has an inverse{' '}
            <InlineMath>\sigma^{'{-1}'}</InlineMath> with <InlineMath>\sigma\sigma^{'{-1}'} = \sigma^{'{-1}'}\sigma = e</InlineMath>
          </li>
        </ol>
      </Theorem>

      <h2>Cycle Notation</h2>

      <Definition title="Cycle" className="my-6">
        <p>
          A <strong>cycle</strong> <InlineMath>(a_1 \, a_2 \, \cdots \, a_k)</InlineMath> is a permutation
          that sends:
        </p>
        <MathBlock>{`a_1 \\mapsto a_2 \\mapsto a_3 \\mapsto \\cdots \\mapsto a_k \\mapsto a_1`}</MathBlock>
        <p className="mt-2">
          and fixes all other elements. The number <InlineMath>k</InlineMath> is the <strong>length</strong>{' '}
          of the cycle.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A cycle of length 2 is called a <strong>transposition</strong></li>
          <li>A cycle of length 1 is the identity (often omitted)</li>
        </ul>
      </Definition>

      <Example title="Cycle Notation Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>(1 \, 3 \, 4)</InlineMath> means <InlineMath>1 \mapsto 3 \mapsto 4 \mapsto 1</InlineMath>,
            with 2 fixed.
            <p className="text-dark-300 ml-4">
              In two-line: <InlineMath>\begin{'{pmatrix}'} 1 & 2 & 3 & 4 \\ 3 & 2 & 4 & 1 \end{'{pmatrix}'}</InlineMath>
            </p>
          </li>
          <li>
            <InlineMath>(1 \, 2)</InlineMath> is a transposition swapping 1 and 2.
          </li>
          <li>
            <InlineMath>(1)(2)(3) = e</InlineMath> (the identity).
          </li>
        </ul>
      </Example>

      <Definition title="Disjoint Cycles" className="my-6">
        <p>
          Two cycles are <strong>disjoint</strong> if they have no elements in common. Disjoint
          cycles commute: <InlineMath>(a_1 \cdots a_k)(b_1 \cdots b_m) = (b_1 \cdots b_m)(a_1 \cdots a_k)</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Disjoint Cycle Decomposition" className="my-6">
        <p>
          Every permutation can be written uniquely (up to order) as a product of disjoint cycles.
        </p>
      </Theorem>

      <Example title="Finding the Cycle Decomposition" className="my-6">
        <p>
          Let <InlineMath>\sigma = \begin{'{pmatrix}'} 1 & 2 & 3 & 4 & 5 \\ 3 & 4 & 1 & 5 & 2 \end{'{pmatrix}'}</InlineMath>.
        </p>
        <p className="mt-3">
          Follow where each element goes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Starting at 1: <InlineMath>1 \to 3 \to 1</InlineMath> gives cycle <InlineMath>(1 \, 3)</InlineMath></li>
          <li>Starting at 2: <InlineMath>2 \to 4 \to 5 \to 2</InlineMath> gives cycle <InlineMath>(2 \, 4 \, 5)</InlineMath></li>
        </ul>
        <p className="mt-3">
          So <InlineMath>\sigma = (1 \, 3)(2 \, 4 \, 5)</InlineMath>.
        </p>
      </Example>

      <h2>Computing with Cycles</h2>

      <Example title="Multiplying Cycles" className="my-6">
        <p>
          Compute <InlineMath>(1 \, 2 \, 3)(1 \, 3)</InlineMath> (applying right-to-left):
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1: <InlineMath>(1 \, 3)</InlineMath> sends <InlineMath>1 \to 3</InlineMath>, then <InlineMath>(1 \, 2 \, 3)</InlineMath> sends <InlineMath>3 \to 1</InlineMath>. Result: <InlineMath>1 \to 1</InlineMath></li>
          <li>2: <InlineMath>(1 \, 3)</InlineMath> fixes 2, then <InlineMath>(1 \, 2 \, 3)</InlineMath> sends <InlineMath>2 \to 3</InlineMath>. Result: <InlineMath>2 \to 3</InlineMath></li>
          <li>3: <InlineMath>(1 \, 3)</InlineMath> sends <InlineMath>3 \to 1</InlineMath>, then <InlineMath>(1 \, 2 \, 3)</InlineMath> sends <InlineMath>1 \to 2</InlineMath>. Result: <InlineMath>3 \to 2</InlineMath></li>
        </ul>
        <p className="mt-3">
          So <InlineMath>(1 \, 2 \, 3)(1 \, 3) = (2 \, 3)</InlineMath>.
        </p>
      </Example>

      <Example title="Powers and Inverses" className="my-6">
        <p>
          For <InlineMath>\sigma = (1 \, 2 \, 3 \, 4)</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>\sigma^2 = (1 \, 3)(2 \, 4)</InlineMath>
          </li>
          <li>
            <InlineMath>\sigma^3 = (1 \, 4 \, 3 \, 2)</InlineMath>
          </li>
          <li>
            <InlineMath>\sigma^4 = e</InlineMath>
          </li>
          <li>
            <InlineMath>\sigma^{'{-1}'} = \sigma^3 = (1 \, 4 \, 3 \, 2)</InlineMath>
          </li>
        </ul>
        <p className="mt-3">
          In general, the inverse of <InlineMath>(a_1 \, a_2 \, \cdots \, a_k)</InlineMath> is{' '}
          <InlineMath>(a_k \, a_{'{k-1}'} \, \cdots \, a_1)</InlineMath>.
        </p>
      </Example>

      <h2>Order of a Permutation</h2>

      <Definition title="Order" className="my-6">
        <p>
          The <strong>order</strong> of a permutation <InlineMath>\sigma</InlineMath> is the smallest
          positive integer <InlineMath>k</InlineMath> such that <InlineMath>\sigma^k = e</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Order of a Cycle" className="my-6">
        <p>
          The order of a <InlineMath>k</InlineMath>-cycle is <InlineMath>k</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Order of a Product of Disjoint Cycles" className="my-6">
        <p>
          If <InlineMath>\sigma</InlineMath> is a product of disjoint cycles of lengths{' '}
          <InlineMath>k_1, k_2, \ldots, k_m</InlineMath>, then the order of <InlineMath>\sigma</InlineMath>{' '}
          is <InlineMath>\text{'{lcm}'}(k_1, k_2, \ldots, k_m)</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing Order" className="my-6">
        <p>
          The order of <InlineMath>\sigma = (1 \, 3)(2 \, 4 \, 5)</InlineMath> is{' '}
          <InlineMath>\text{'{lcm}'}(2, 3) = 6</InlineMath>.
        </p>
        <p className="mt-2">
          Check: <InlineMath>\sigma^2 = (2 \, 5 \, 4)</InlineMath>,{' '}
          <InlineMath>\sigma^3 = (1 \, 3)</InlineMath>,{' '}
          <InlineMath>\sigma^6 = e</InlineMath>.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>permutation</strong> is a bijection from a set to itself. The set{' '}
              <InlineMath>S_n</InlineMath> of all permutations of{' '}
              <InlineMath>\{'{1, \\ldots, n}'}\</InlineMath> has <InlineMath>n!</InlineMath> elements.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Two-line notation:</strong> List where each element maps to.{' '}
              <strong>Cycle notation:</strong> Write cycles like <InlineMath>(a_1 \, a_2 \, \cdots \, a_k)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              Every permutation is uniquely a product of <strong>disjoint cycles</strong>. Disjoint
              cycles commute.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Composition:</strong> <InlineMath>(\sigma\tau)(x) = \sigma(\tau(x))</InlineMath>.
              Apply right permutation first.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The <strong>order</strong> of a permutation is the lcm of its cycle lengths.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              The inverse of cycle <InlineMath>(a_1 \, \cdots \, a_k)</InlineMath> is{' '}
              <InlineMath>(a_k \, \cdots \, a_1)</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
