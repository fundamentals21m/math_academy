import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Introduction */}
      <p>
        Now we solve <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> when <InlineMath>{`\\mathbf{b} \\neq \\mathbf{0}`}</InlineMath>. The complete
        solution combines one <strong>particular solution</strong> with the general <strong>nullspace solution</strong>.
      </p>

      <h2>The Structure of Solutions</h2>

      <Theorem
        title="Complete Solution"
        className="my-6"
        proof={
          <>
            <p><strong>Every such vector is a solution:</strong> If <InlineMath>{`A\\mathbf{x}_p = \\mathbf{b}`}</InlineMath> and <InlineMath>{`A\\mathbf{x}_n = \\mathbf{0}`}</InlineMath>, then:</p>
            <MathBlock>{`A(\\mathbf{x}_p + \\mathbf{x}_n) = A\\mathbf{x}_p + A\\mathbf{x}_n = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}`}</MathBlock>
            <p className="mt-2"><strong>Every solution has this form:</strong> Suppose <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>. Then:</p>
            <MathBlock>{`A(\\mathbf{x} - \\mathbf{x}_p) = A\\mathbf{x} - A\\mathbf{x}_p = \\mathbf{b} - \\mathbf{b} = \\mathbf{0}`}</MathBlock>
            <p>So <InlineMath>{`\\mathbf{x} - \\mathbf{x}_p`}</InlineMath> is in the nullspace, meaning <InlineMath>{`\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_n`}</InlineMath> for some <InlineMath>{`\\mathbf{x}_n \\in N(A)`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          The complete solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_n`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`\\mathbf{x}_p`}</InlineMath> = one <strong>particular solution</strong> (any solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>)<br />
          <InlineMath>{`\\mathbf{x}_n`}</InlineMath> = general solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath> (the nullspace)
        </p>
      </Theorem>

      <p>
        Why does this work? If <InlineMath>{`A\\mathbf{x}_p = \\mathbf{b}`}</InlineMath> and <InlineMath>{`A\\mathbf{x}_n = \\mathbf{0}`}</InlineMath>, then
        <InlineMath>{`A(\\mathbf{x}_p + \\mathbf{x}_n) = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}`}</InlineMath>.
      </p>

      <h2>The Augmented Matrix</h2>

      <Definition title="Augmented Matrix" className="my-6">
        <p>
          To solve <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>, we augment <InlineMath>A</InlineMath> with <InlineMath>{`\\mathbf{b}`}</InlineMath>:
        </p>
        <MathBlock>
          {`[A \\mid \\mathbf{b}] = \\begin{bmatrix} 1 & 3 & 0 & 2 & 1 \\\\ 0 & 0 & 1 & 4 & 6 \\\\ 1 & 3 & 1 & 6 & 7 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Apply elimination to <InlineMath>{`[A \\mid \\mathbf{b}]`}</InlineMath> to reach <InlineMath>{`[R \\mid \\mathbf{d}]`}</InlineMath>.
        </p>
      </Definition>

      <h2>When Is <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> Solvable?</h2>

      <Theorem
        title="Solvability Conditions"
        className="my-6"
        proof={
          <>
            <p><strong>Condition 1:</strong> <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> means <InlineMath>{`\\mathbf{b}`}</InlineMath> is a linear combination of the columns of <InlineMath>A</InlineMath>. By definition, this is exactly the column space <InlineMath>C(A)</InlineMath>.</p>
            <p className="mt-2"><strong>Condition 2:</strong> A zero row in <InlineMath>R</InlineMath> means that row was a combination of other rows. When we apply the same operations to <InlineMath>{`[A \\mid \\mathbf{b}]`}</InlineMath>, if <InlineMath>{`\\mathbf{b}`}</InlineMath> is in <InlineMath>C(A)</InlineMath>, the corresponding entry in <InlineMath>{`\\mathbf{d}`}</InlineMath> must be zero.</p>
            <p className="mt-2">Conversely, a zero row in <InlineMath>R</InlineMath> with nonzero entry in <InlineMath>{`\\mathbf{d}`}</InlineMath> gives an equation <InlineMath>0 = c</InlineMath> where <InlineMath>c \neq 0</InlineMath>, which is impossible. So the system has no solution.</p>
          </>
        }
      >
        <p>
          <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is solvable if and only if:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`\\mathbf{b}`}</InlineMath> is in the column space <InlineMath>C(A)</InlineMath></li>
          <li>If a row of <InlineMath>R</InlineMath> is all zeros, the same row of <InlineMath>{`\\mathbf{d}`}</InlineMath> must be zero</li>
        </ul>
      </Theorem>

      <Example title="Checking Solvability" className="my-6">
        <MathBlock>
          {`[R \\mid \\mathbf{d}] = \\begin{bmatrix} 1 & 3 & 0 & 2 & 1 \\\\ 0 & 0 & 1 & 4 & 6 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Row 3 has all zeros in <InlineMath>R</InlineMath> and zero in <InlineMath>{`\\mathbf{d}`}</InlineMath>. The system <strong>is solvable</strong>.
        </p>
        <p className="mt-2 text-amber-400">
          If the last entry were nonzero (like <InlineMath>0 = 5</InlineMath>), the system would have <strong>no solution</strong>.
        </p>
      </Example>

      <h2>Finding the Particular Solution</h2>

      <Definition title="Particular Solution" className="my-6">
        <p>
          To find <InlineMath>{`\\mathbf{x}_p`}</InlineMath>: set all <strong>free variables to zero</strong> and solve for the pivot variables.
        </p>
      </Definition>

      <Example title="Finding x_p" className="my-6">
        <p>From the system above with free variables <InlineMath>x_2, x_4</InlineMath>:</p>
        <MathBlock>
          {`x_2 = 0, \\quad x_4 = 0`}
        </MathBlock>
        <p className="mt-2">Then from <InlineMath>{`R\\mathbf{x} = \\mathbf{d}`}</InlineMath>:</p>
        <MathBlock>
          {`x_1 + 3(0) + 2(0) = 1 \\Rightarrow x_1 = 1`}
        </MathBlock>
        <MathBlock>
          {`x_3 + 4(0) = 6 \\Rightarrow x_3 = 6`}
        </MathBlock>
        <p className="mt-2">
          Particular solution: <InlineMath>{`\\mathbf{x}_p = (1, 0, 6, 0)`}</InlineMath>
        </p>
      </Example>

      <h2>The Four Cases</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-3">Number of solutions to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-emerald-400 font-semibold"><InlineMath>r = m = n</InlineMath></p>
            <p className="text-dark-300">Square, full rank: <strong>1 solution</strong></p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-amber-400 font-semibold"><InlineMath>r = m &lt; n</InlineMath></p>
            <p className="text-dark-300">Short, wide: <InlineMath>\infty</InlineMath> <strong>solutions</strong></p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-cyan-400 font-semibold"><InlineMath>r = n &lt; m</InlineMath></p>
            <p className="text-dark-300">Tall, thin: <strong>0 or 1 solution</strong></p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-rose-400 font-semibold"><InlineMath>r &lt; m, r &lt; n</InlineMath></p>
            <p className="text-dark-300">Not full rank: <strong>0 or </strong><InlineMath>\infty</InlineMath></p>
          </div>
        </div>
      </div>

      <Theorem
        title="The Rank and Solutions"
        className="my-6"
        proof={
          <>
            <p><strong><InlineMath>r = n</InlineMath>:</strong> All columns are pivot columns, so there are no free columns and no free variables. The nullspace is just <InlineMath>{`\\{\\mathbf{0}\\}`}</InlineMath>, giving at most one solution.</p>
            <p className="mt-2"><strong><InlineMath>r = m</InlineMath>:</strong> There are <InlineMath>r = m</InlineMath> pivots, one in each row of <InlineMath>R</InlineMath>. No row is all zeros, so the solvability condition is always satisfied for any <InlineMath>{`\\mathbf{b}`}</InlineMath>.</p>
            <p className="mt-2"><strong><InlineMath>r &lt; n</InlineMath>:</strong> There are <InlineMath>n - r &gt; 0</InlineMath> free variables. If a particular solution exists, we can add any nullspace vector (a nontrivial subspace) to get infinitely many solutions.</p>
            <p className="mt-2"><strong><InlineMath>r &lt; m</InlineMath>:</strong> Some rows of <InlineMath>R</InlineMath> are all zeros. For most choices of <InlineMath>{`\\mathbf{b}`}</InlineMath>, the corresponding entries of <InlineMath>{`\\mathbf{d}`}</InlineMath> will be nonzero, making the system unsolvable.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>r = n</InlineMath> means <strong>no free variables</strong>: at most 1 solution</li>
          <li><InlineMath>r = m</InlineMath> means <strong>every <InlineMath>{`\\mathbf{b}`}</InlineMath> is solvable</strong></li>
          <li><InlineMath>r &lt; n</InlineMath> means <strong>free variables exist</strong>: <InlineMath>\infty</InlineMath> solutions (if solvable)</li>
          <li><InlineMath>r &lt; m</InlineMath> means <strong>some <InlineMath>{`\\mathbf{b}`}</InlineMath> have no solution</strong></li>
        </ul>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Complete solution: <InlineMath>{`\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_n`}</InlineMath> (particular + nullspace).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Elimination on <InlineMath>{`[A \\mid \\mathbf{b}]`}</InlineMath> leads to <InlineMath>{`[R \\mid \\mathbf{d}]`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is solvable when all zero rows of <InlineMath>R</InlineMath> have zeros in <InlineMath>{`\\mathbf{d}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>For <InlineMath>{`\\mathbf{x}_p`}</InlineMath>: set free variables to zero, solve for pivot variables.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The rank <InlineMath>r</InlineMath> determines existence (<InlineMath>r = m</InlineMath>) and uniqueness (<InlineMath>r = n</InlineMath>).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
