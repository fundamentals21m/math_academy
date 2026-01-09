import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Introduction */}
      <p>
        Every permutation can be written as a product of transpositions (2-cycles). While this
        decomposition isn't unique, a remarkable fact emerges: the parity (even or odd) of the
        number of transpositions is always the same for a given permutation. This leads to the
        important concept of the sign of a permutation.
      </p>

      <h2>Transpositions</h2>

      <Definition title="Transposition" className="my-6">
        <p>
          A <strong>transposition</strong> is a cycle of length 2, written <InlineMath>(i \, j)</InlineMath>,
          which swaps elements <InlineMath>i</InlineMath> and <InlineMath>j</InlineMath> and fixes
          all other elements.
        </p>
      </Definition>

      <Theorem title="Decomposition into Transpositions" className="my-6">
        <p>
          Every permutation can be written as a product of transpositions.
        </p>
        <p className="mt-2">
          In particular, every <InlineMath>k</InlineMath>-cycle can be written as{' '}
          <InlineMath>k - 1</InlineMath> transpositions:
        </p>
        <MathBlock>{`(a_1 \\, a_2 \\, \\cdots \\, a_k) = (a_1 \\, a_k)(a_1 \\, a_{k-1}) \\cdots (a_1 \\, a_3)(a_1 \\, a_2)`}</MathBlock>
      </Theorem>

      <Example title="Cycle as Transpositions" className="my-6">
        <p>Express <InlineMath>(1 \, 2 \, 3 \, 4)</InlineMath> as transpositions:</p>
        <MathBlock>{`(1 \\, 2 \\, 3 \\, 4) = (1 \\, 4)(1 \\, 3)(1 \\, 2)`}</MathBlock>
        <p className="mt-3">Verify: Apply right-to-left:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>1 \xrightarrow{'{(1\\,2)}'} 2 \xrightarrow{'{(1\\,3)}'} 2 \xrightarrow{'{(1\\,4)}'} 2</InlineMath></li>
          <li><InlineMath>2 \xrightarrow{'{(1\\,2)}'} 1 \xrightarrow{'{(1\\,3)}'} 3 \xrightarrow{'{(1\\,4)}'} 3</InlineMath></li>
          <li><InlineMath>3 \xrightarrow{'{(1\\,2)}'} 3 \xrightarrow{'{(1\\,3)}'} 1 \xrightarrow{'{(1\\,4)}'} 4</InlineMath></li>
          <li><InlineMath>4 \xrightarrow{'{(1\\,2)}'} 4 \xrightarrow{'{(1\\,3)}'} 4 \xrightarrow{'{(1\\,4)}'} 1</InlineMath></li>
        </ul>
        <p className="mt-2">Result: <InlineMath>1 \to 2 \to 3 \to 4 \to 1</InlineMath> ✓</p>
      </Example>

      <h2>The Sign of a Permutation</h2>

      <Definition title="Inversion" className="my-6">
        <p>
          An <strong>inversion</strong> in a permutation <InlineMath>\sigma</InlineMath> is a pair{' '}
          <InlineMath>(i, j)</InlineMath> with <InlineMath>i {'<'} j</InlineMath> but{' '}
          <InlineMath>\sigma(i) {'>'} \sigma(j)</InlineMath>.
        </p>
        <p className="mt-2">
          The number of inversions measures how "out of order" the permutation is.
        </p>
      </Definition>

      <Example title="Counting Inversions" className="my-6">
        <p>
          For <InlineMath>\sigma = \begin{'{pmatrix}'} 1 & 2 & 3 \\ 3 & 1 & 2 \end{'{pmatrix}'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>(1, 2)</InlineMath>: <InlineMath>\sigma(1) = 3 {'>'} 1 = \sigma(2)</InlineMath> ✓
          </li>
          <li>
            <InlineMath>(1, 3)</InlineMath>: <InlineMath>\sigma(1) = 3 {'>'} 2 = \sigma(3)</InlineMath> ✓
          </li>
          <li>
            <InlineMath>(2, 3)</InlineMath>: <InlineMath>\sigma(2) = 1 {'<'} 2 = \sigma(3)</InlineMath> ✗
          </li>
        </ul>
        <p className="mt-2">Number of inversions: 2</p>
      </Example>

      <Definition title="Sign (Parity) of a Permutation" className="my-6">
        <p>
          The <strong>sign</strong> (or <strong>parity</strong>) of a permutation{' '}
          <InlineMath>\sigma</InlineMath> is:
        </p>
        <MathBlock>{`\\text{sgn}(\\sigma) = (-1)^{\\text{number of inversions}}`}</MathBlock>
        <p className="mt-2">
          A permutation is <strong>even</strong> if <InlineMath>\text{'{sgn}'}(\sigma) = +1</InlineMath>{' '}
          (even number of inversions) and <strong>odd</strong> if{' '}
          <InlineMath>\text{'{sgn}'}(\sigma) = -1</InlineMath> (odd number of inversions).
        </p>
      </Definition>

      <Theorem title="Sign via Transpositions" className="my-6">
        <p>
          If <InlineMath>\sigma = \tau_1 \tau_2 \cdots \tau_r</InlineMath> is written as a product
          of <InlineMath>r</InlineMath> transpositions, then:
        </p>
        <MathBlock>{`\\text{sgn}(\\sigma) = (-1)^r`}</MathBlock>
        <p className="mt-2">
          The number <InlineMath>r</InlineMath> may vary between decompositions, but its parity
          (even or odd) is always the same.
        </p>
      </Theorem>

      <Example title="Sign Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            Identity <InlineMath>e</InlineMath>: 0 transpositions, so{' '}
            <InlineMath>\text{'{sgn}'}(e) = +1</InlineMath> (even).
          </li>
          <li>
            Transposition <InlineMath>(1 \, 2)</InlineMath>: 1 transposition, so{' '}
            <InlineMath>\text{'{sgn}'}((1 \, 2)) = -1</InlineMath> (odd).
          </li>
          <li>
            3-cycle <InlineMath>(1 \, 2 \, 3) = (1 \, 3)(1 \, 2)</InlineMath>: 2 transpositions, so{' '}
            <InlineMath>\text{'{sgn}'}((1 \, 2 \, 3)) = +1</InlineMath> (even).
          </li>
          <li>
            4-cycle <InlineMath>(1 \, 2 \, 3 \, 4) = (1 \, 4)(1 \, 3)(1 \, 2)</InlineMath>: 3 transpositions, so{' '}
            <InlineMath>\text{'{sgn}'}((1 \, 2 \, 3 \, 4)) = -1</InlineMath> (odd).
          </li>
        </ul>
      </Example>

      <Theorem title="Sign of a k-Cycle" className="my-6">
        <p>
          A <InlineMath>k</InlineMath>-cycle is even if <InlineMath>k</InlineMath> is odd, and odd
          if <InlineMath>k</InlineMath> is even:
        </p>
        <MathBlock>{`\\text{sgn}((a_1 \\, a_2 \\, \\cdots \\, a_k)) = (-1)^{k-1}`}</MathBlock>
      </Theorem>

      <h2>Properties of the Sign Function</h2>

      <Theorem
        title="Sign is Multiplicative"
        className="my-6"
        proof={
          <>
            <p>
              If <InlineMath>\sigma</InlineMath> uses <InlineMath>r</InlineMath> transpositions and{' '}
              <InlineMath>\tau</InlineMath> uses <InlineMath>s</InlineMath> transpositions, then{' '}
              <InlineMath>\sigma\tau</InlineMath> uses <InlineMath>r + s</InlineMath> transpositions.
            </p>
            <p className="mt-2">
              So <InlineMath>\text{'{sgn}'}(\sigma\tau) = (-1)^{'{r+s}'} = (-1)^r(-1)^s = \text{'{sgn}'}(\sigma) \cdot \text{'{sgn}'}(\tau)</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any permutations <InlineMath>\sigma, \tau \in S_n</InlineMath>:
        </p>
        <MathBlock>{`\\text{sgn}(\\sigma\\tau) = \\text{sgn}(\\sigma) \\cdot \\text{sgn}(\\tau)`}</MathBlock>
      </Theorem>

      <Theorem title="Sign of Inverse" className="my-6">
        <p>
          For any permutation <InlineMath>\sigma</InlineMath>:
        </p>
        <MathBlock>{`\\text{sgn}(\\sigma^{-1}) = \\text{sgn}(\\sigma)`}</MathBlock>
      </Theorem>

      <h2>The Alternating Group</h2>

      <Definition title="Alternating Group" className="my-6">
        <p>
          The <strong>alternating group</strong> <InlineMath>A_n</InlineMath> is the set of all
          even permutations in <InlineMath>S_n</InlineMath>:
        </p>
        <MathBlock>{`A_n = \\{\\sigma \\in S_n : \\text{sgn}(\\sigma) = +1\\}`}</MathBlock>
      </Definition>

      <Theorem title="Size of A_n" className="my-6">
        <p>
          For <InlineMath>n \geq 2</InlineMath>:
        </p>
        <MathBlock>{`|A_n| = \\frac{n!}{2}`}</MathBlock>
        <p className="mt-2">
          Exactly half of all permutations are even.
        </p>
      </Theorem>

      <Example title="The Alternating Group A_3" className="my-6">
        <p>
          <InlineMath>A_3</InlineMath> has <InlineMath>3!/2 = 3</InlineMath> elements:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>e = ()</InlineMath> (identity)
          </li>
          <li>
            <InlineMath>(1 \, 2 \, 3)</InlineMath> (3-cycle, even)
          </li>
          <li>
            <InlineMath>(1 \, 3 \, 2)</InlineMath> (3-cycle, even)
          </li>
        </ul>
        <p className="mt-3">
          The odd permutations are the three transpositions: <InlineMath>(1 \, 2)</InlineMath>,{' '}
          <InlineMath>(1 \, 3)</InlineMath>, <InlineMath>(2 \, 3)</InlineMath>.
        </p>
      </Example>

      <Example title="The Alternating Group A_4" className="my-6">
        <p>
          <InlineMath>A_4</InlineMath> has <InlineMath>4!/2 = 12</InlineMath> elements:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Identity: <InlineMath>e</InlineMath></li>
          <li>
            Eight 3-cycles: <InlineMath>(1 \, 2 \, 3), (1 \, 3 \, 2), (1 \, 2 \, 4), (1 \, 4 \, 2), (1 \, 3 \, 4), (1 \, 4 \, 3), (2 \, 3 \, 4), (2 \, 4 \, 3)</InlineMath>
          </li>
          <li>
            Three products of disjoint transpositions: <InlineMath>(1 \, 2)(3 \, 4), (1 \, 3)(2 \, 4), (1 \, 4)(2 \, 3)</InlineMath>
          </li>
        </ul>
      </Example>

      <Theorem title="A_n is a Group" className="my-6">
        <p>
          <InlineMath>A_n</InlineMath> is closed under composition and inverses, making it a group
          (called the <strong>alternating group</strong>).
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Every permutation is a product of <strong>transpositions</strong>. A <InlineMath>k</InlineMath>-cycle
              needs <InlineMath>k - 1</InlineMath> transpositions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              The <strong>sign</strong> <InlineMath>\text{'{sgn}'}(\sigma) = (-1)^r</InlineMath> where{' '}
              <InlineMath>r</InlineMath> is the number of transpositions. The parity is well-defined.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Even permutation:</strong> <InlineMath>\text{'{sgn}'} = +1</InlineMath>.{' '}
              <strong>Odd permutation:</strong> <InlineMath>\text{'{sgn}'} = -1</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              A <InlineMath>k</InlineMath>-cycle is even when <InlineMath>k</InlineMath> is odd (and vice versa).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Sign is <strong>multiplicative</strong>:{' '}
              <InlineMath>\text{'{sgn}'}(\sigma\tau) = \text{'{sgn}'}(\sigma) \cdot \text{'{sgn}'}(\tau)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              The <strong>alternating group</strong> <InlineMath>A_n</InlineMath> consists of all
              even permutations. It has order <InlineMath>n!/2</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
