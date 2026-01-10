import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout
      title="1.4 Combinations"
      sectionId={4}
    >
      <p className="text-lg text-dark-200 mb-6">
        While permutations count ordered arrangements, <strong>combinations</strong> count 
        unordered selections. When order doesn't matter, we count combinations.
      </p>

      <Definition title="Combination">
        <p>
          A <strong>combination</strong> of <InlineMath>r</InlineMath> objects from <InlineMath>n</InlineMath> objects is 
          an unordered selection of <InlineMath>r</InlineMath> objects from the <InlineMath>n</InlineMath> objects. The number 
          of such combinations is denoted <InlineMath>\binom{'{n}'}{'{r}'}</InlineMath> (read "n choose r") or 
          <InlineMath>C(n,r)</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Binomial Coefficient">
        <p className="mb-2">
          The number of ways to choose <InlineMath>r</InlineMath> objects from <InlineMath>n</InlineMath> distinct objects is:
        </p>
        <MathBlock>{`\\binom{n}{r} = \\frac{n!}{r!(n-r)!} = \\frac{n(n-1)\\cdots(n-r+1)}{r!}`}</MathBlock>
        <p className="mt-2">
          For <InlineMath>0 \leq r \leq n</InlineMath>. By convention, <InlineMath>\binom{'{n}'}{'{r}'} = 0</InlineMath> if <InlineMath>r {'>'} n</InlineMath> or <InlineMath>r {'<'} 0</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Deriving the Formula</h2>

      <p className="text-dark-300 mb-4">
        We can derive <InlineMath>\binom{'{n}'}{'{r}'}</InlineMath> from <InlineMath>P(n,r)</InlineMath>. Every combination of 
        <InlineMath>r</InlineMath> objects can be arranged in <InlineMath>r!</InlineMath> ways. So:
      </p>

      <MathBlock>{`P(n,r) = \\binom{n}{r} \\cdot r!`}</MathBlock>

      <p className="text-dark-300 mb-4">Solving for <InlineMath>\binom{'{n}'}{'{r}'}</InlineMath>:</p>

      <MathBlock>{`\\binom{n}{r} = \\frac{P(n,r)}{r!} = \\frac{n!}{(n-r)! \\cdot r!}`}</MathBlock>

      <Example title="Committee Selection">
        <p className="mb-2">
          How many ways can a committee of 3 be chosen from a group of 10 people?
        </p>
        <p className="mb-2">
          Order doesn't matter (a committee is just a set of people), so we use combinations:
        </p>
        <MathBlock>{`\\binom{10}{3} = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120`}</MathBlock>
      </Example>

      <Example title="Poker Hands">
        <p className="mb-2">
          How many 5-card poker hands can be dealt from a standard 52-card deck?
        </p>
        <MathBlock>{`\\binom{52}{5} = \\frac{52!}{5! \\cdot 47!} = \\frac{52 \\cdot 51 \\cdot 50 \\cdot 49 \\cdot 48}{120} = 2,598,960`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Properties of Binomial Coefficients</h2>

      <Theorem title="Symmetry Property">
        <MathBlock>{`\\binom{n}{r} = \\binom{n}{n-r}`}</MathBlock>
        <p className="mt-2">
          Choosing <InlineMath>r</InlineMath> objects to include is equivalent to choosing <InlineMath>n-r</InlineMath> objects to exclude.
        </p>
      </Theorem>

      <Theorem title="Pascal's Identity">
        <MathBlock>{`\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}`}</MathBlock>
        <p className="mt-2">
          To choose <InlineMath>r</InlineMath> from <InlineMath>n</InlineMath>, either include a specific element (and choose 
          <InlineMath>r-1</InlineMath> more from the remaining <InlineMath>n-1</InlineMath>) or exclude it (and choose all 
          <InlineMath>r</InlineMath> from the remaining <InlineMath>n-1</InlineMath>).
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Pascal's Triangle</h2>

      <p className="text-dark-300 mb-4">
        Pascal's triangle displays binomial coefficients, with <InlineMath>\binom{'{n}'}{'{r}'}</InlineMath> in row <InlineMath>n</InlineMath>, position <InlineMath>r</InlineMath>:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg mb-6 font-mono text-sm text-center">
        <pre className="text-dark-200 inline-block text-left">
{`n=0:           1
n=1:          1   1
n=2:        1   2   1
n=3:       1   3   3   1
n=4:     1   4   6   4   1
n=5:    1   5  10  10   5   1`}
        </pre>
      </div>

      <p className="text-dark-300 mb-4">
        Each entry is the sum of the two entries above it (Pascal's identity).
      </p>

      <Theorem title="Binomial Theorem">
        <p className="mb-2">For any real <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> and non-negative integer <InlineMath>n</InlineMath>:</p>
        <MathBlock>{`(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k y^{n-k}`}</MathBlock>
      </Theorem>

      <p className="text-dark-300 mb-4">
        This explains why <InlineMath>\binom{'{n}'}{'{r}'}</InlineMath> is called a "binomial coefficient"—it's the 
        coefficient of <InlineMath>x^r y^{'{n-r}'}</InlineMath> in the expansion of <InlineMath>(x+y)^n</InlineMath>.
      </p>

      <Example title="Special Cases of Binomial Theorem">
        <p className="mb-2">Setting <InlineMath>x = y = 1</InlineMath>:</p>
        <MathBlock>{`2^n = \\sum_{k=0}^{n} \\binom{n}{k}`}</MathBlock>
        <p className="mb-4">
          This counts all subsets of an <InlineMath>n</InlineMath>-element set (including the empty set).
        </p>
        <p className="mb-2">Setting <InlineMath>x = 1, y = -1</InlineMath>:</p>
        <MathBlock>{`0 = \\sum_{k=0}^{n} (-1)^{n-k} \\binom{n}{k}`}</MathBlock>
        <p>
          This shows that the number of even-sized subsets equals the number of odd-sized subsets.
        </p>
      </Example>

      <Example title="Counting Paths in a Grid">
        <p className="mb-2">
          How many paths are there from (0,0) to (m,n) using only right (R) and up (U) moves?
        </p>
        <p className="mb-2">
          Every path consists of <InlineMath>m</InlineMath> R's and <InlineMath>n</InlineMath> U's, for a total of <InlineMath>m+n</InlineMath> moves.
          We need to choose which <InlineMath>m</InlineMath> of the <InlineMath>m+n</InlineMath> positions are R's:
        </p>
        <MathBlock>{`\\binom{m+n}{m} = \\binom{m+n}{n}`}</MathBlock>
      </Example>
    </LessonLayout>
  );
}
