import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      {/* Introduction */}
      <p>
        <strong>Markov matrices</strong> describe transitions between states. They model population dynamics,
        web browsing, queuing systems, and many random processes. The key question: what happens in the long run?
      </p>

      <h2>Markov Matrices</h2>

      <Definition title="Markov (Stochastic) Matrix" className="my-6">
        <p>
          A matrix <InlineMath>P</InlineMath> is a <strong>Markov matrix</strong> if:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>All entries are nonnegative: <InlineMath>{`p_{ij} \\geq 0`}</InlineMath></li>
          <li>Each column sums to 1: <InlineMath>{`\\sum_i p_{ij} = 1`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          Entry <InlineMath>{`p_{ij}`}</InlineMath> = probability of moving from state <InlineMath>j</InlineMath> to state <InlineMath>i</InlineMath>.
        </p>
      </Definition>

      <Example title="Weather Model" className="my-6">
        <p>Tomorrow's weather depends on today's (sunny or rainy):</p>
        <MathBlock>
          {`P = \\begin{bmatrix} 0.9 & 0.5 \\\\ 0.1 & 0.5 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          If sunny today: 90% chance sunny tomorrow, 10% rainy.<br />
          If rainy today: 50% sunny tomorrow, 50% rainy.
        </p>
      </Example>

      <h2>Properties of Markov Matrices</h2>

      <Theorem
        title="Eigenvalue 1"
        className="my-6"
        proof={
          <>
            <p><strong>Eigenvalue 1 exists:</strong> Since columns sum to 1, <InlineMath>{`\\mathbf{e}^T P = \\mathbf{e}^T`}</InlineMath> where <InlineMath>{`\\mathbf{e} = (1, 1, \\ldots, 1)`}</InlineMath>.</p>
            <p className="mt-2">This means <InlineMath>{`P^T \\mathbf{e} = \\mathbf{e}`}</InlineMath>, so <InlineMath>{`\\lambda = 1`}</InlineMath> is an eigenvalue of <InlineMath>{`P^T`}</InlineMath>, hence also of <InlineMath>P</InlineMath>.</p>
            <p className="mt-2"><strong>All <InlineMath>{`|\\lambda| \\leq 1`}</InlineMath>:</strong> Suppose <InlineMath>{`P\\mathbf{x} = \\lambda \\mathbf{x}`}</InlineMath>. Let <InlineMath>{`|x_k| = \\max_i |x_i|`}</InlineMath>. Then:</p>
            <MathBlock>{`|\\lambda x_k| = |\\sum_j p_{kj} x_j| \\leq \\sum_j p_{kj} |x_j| \\leq |x_k| \\sum_j p_{kj} = |x_k|`}</MathBlock>
            <p className="mt-2">Thus <InlineMath>|\\lambda| \\leq 1</InlineMath>.</p>
          </>
        }
      >
        <p>Every Markov matrix has:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Eigenvalue <InlineMath>\lambda = 1</InlineMath></strong> (guaranteed)</li>
          <li>All other eigenvalues: <InlineMath>|\lambda| \leq 1</InlineMath></li>
        </ul>
        <p className="mt-2">
          The eigenvector for <InlineMath>\lambda = 1</InlineMath> gives the <strong>steady state</strong>.
        </p>
      </Theorem>

      <Example title="Finding the Steady State" className="my-6">
        <p>For the weather matrix, find <InlineMath>{`\\mathbf{x}`}</InlineMath> with <InlineMath>{`P\\mathbf{x} = \\mathbf{x}`}</InlineMath>:</p>
        <MathBlock>
          {`(P - I)\\mathbf{x} = \\begin{bmatrix} -0.1 & 0.5 \\\\ 0.1 & -0.5 \\end{bmatrix}\\mathbf{x} = \\mathbf{0}`}
        </MathBlock>
        <p className="mt-2">
          Solution: <InlineMath>{`\\mathbf{x} = \\frac{1}{6}(5, 1) = (5/6, 1/6)`}</InlineMath><br />
          Long-term: 5/6 sunny days, 1/6 rainy days.
        </p>
      </Example>

      <h2>Convergence to Steady State</h2>

      <Theorem
        title="Convergence"
        className="my-6"
        proof={
          <>
            <p><strong>Perron-Frobenius:</strong> For a positive matrix, <InlineMath>\\lambda = 1</InlineMath> is the unique eigenvalue of maximum modulus (all others have <InlineMath>|\\lambda_i| &lt; 1</InlineMath>).</p>
            <p className="mt-2"><strong>Diagonalization:</strong> If <InlineMath>P = X \\Lambda X^{-1}</InlineMath>, then <InlineMath>P^k = X \\Lambda^k X^{-1}</InlineMath>.</p>
            <p className="mt-2">As <InlineMath>k \\to \\infty</InlineMath>, <InlineMath>\\lambda_i^k \\to 0</InlineMath> for all <InlineMath>|\\lambda_i| &lt; 1</InlineMath>. Only <InlineMath>\\lambda_1 = 1</InlineMath> survives:</p>
            <MathBlock>{`P^k \\to \\mathbf{x}_1 \\mathbf{y}_1^T`}</MathBlock>
            <p className="mt-2">where <InlineMath>{`\\mathbf{x}_1`}</InlineMath> is the steady-state right eigenvector and <InlineMath>{`\\mathbf{y}_1`}</InlineMath> is the left eigenvector. Since columns of <InlineMath>P</InlineMath> sum to 1, <InlineMath>{`\\mathbf{y}_1 = \\mathbf{e}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          For a positive Markov matrix (all entries positive), as <InlineMath>k \to \infty</InlineMath>:
        </p>
        <MathBlock>
          {`P^k \\to \\mathbf{x}_1 \\mathbf{e}^T`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\mathbf{x}_1`}</InlineMath> is the steady-state eigenvector and <InlineMath>{`\\mathbf{e} = (1, 1, \\ldots, 1)`}</InlineMath>.
          Every initial distribution converges to the steady state.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Rate of Convergence</p>
        <p className="text-dark-300 text-sm">
          The second largest eigenvalue <InlineMath>|\lambda_2|</InlineMath> controls the speed of convergence.
          Smaller <InlineMath>|\lambda_2|</InlineMath> means faster convergence to steady state.
        </p>
      </div>

      <h2>Population Models</h2>

      <Definition title="Leslie Matrix (Age-Structured Population)" className="my-6">
        <p>
          A <strong>Leslie matrix</strong> models population by age groups:
        </p>
        <MathBlock>
          {`L = \\begin{bmatrix} f_1 & f_2 & f_3 & \\cdots \\\\ s_1 & 0 & 0 & \\cdots \\\\ 0 & s_2 & 0 & \\cdots \\\\ \\vdots & \\ddots & \\ddots & \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>f_i</InlineMath> = fertility rates, <InlineMath>s_i</InlineMath> = survival rates.
          The dominant eigenvalue determines if population grows or shrinks.
        </p>
      </Definition>

      <h2>Economics: Input-Output Models</h2>

      <Definition title="Leontief Model" className="my-6">
        <p>
          In the <strong>Leontief input-output model</strong>:
        </p>
        <MathBlock>
          {`\\mathbf{x} = A\\mathbf{x} + \\mathbf{d} \\quad \\Rightarrow \\quad \\mathbf{x} = (I - A)^{-1}\\mathbf{d}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`\\mathbf{x}`}</InlineMath> = production levels, <InlineMath>{`\\mathbf{d}`}</InlineMath> = final demand,
          <InlineMath>A</InlineMath> = consumption coefficients.
        </p>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Markov matrix: nonnegative entries, columns sum to 1.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Eigenvalue <InlineMath>\lambda = 1</InlineMath> is always present; eigenvector = steady state.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Positive Markov matrices: <InlineMath>P^k</InlineMath> converges to steady state.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Leslie matrices model age-structured populations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Leontief model: <InlineMath>{`\\mathbf{x} = (I - A)^{-1}\\mathbf{d}`}</InlineMath> for production planning.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
