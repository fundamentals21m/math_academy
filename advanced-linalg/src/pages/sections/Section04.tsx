import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section04Quiz } from '@/data/quizzes';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Bases and Dimension: The Structure of Vector Spaces</h2>

      <p>
        A <strong>basis</strong> is a "minimal spanning set" — the fewest vectors needed to express
        every vector in the space. The number of vectors in a basis, the <strong>dimension</strong>,
        is a fundamental invariant that captures the "size" of a vector space.
      </p>

      <Callout type="info">
        <strong>Why Dimension Matters:</strong> Two finite-dimensional vector spaces over the same
        field are isomorphic if and only if they have the same dimension. Dimension completely
        characterizes finite-dimensional vector spaces up to isomorphism!
      </Callout>

      <h2>Linear Independence</h2>

      <Definition title="Linear Independence">
        <p>
          Vectors <InlineMath>v_1, v_2, \ldots, v_n</InlineMath> are <strong>linearly independent</strong> if the
          only solution to:
        </p>
        <MathBlock>{`c_1 v_1 + c_2 v_2 + \\cdots + c_n v_n = \\mathbf{0}`}</MathBlock>
        <p>
          is the trivial solution <InlineMath>c_1 = c_2 = \cdots = c_n = 0</InlineMath>.
        </p>
        <p className="mt-2">
          Otherwise, the vectors are <strong>linearly dependent</strong>, meaning at least one
          can be written as a linear combination of the others.
        </p>
      </Definition>

      <Example title="Linear Independence in R^3">
        <p>
          The vectors <InlineMath>{`\\mathbf{e}`}_1 = (1, 0, 0)</InlineMath>, <InlineMath>{`\\mathbf{e}`}_2 = (0, 1, 0)</InlineMath>,
          <InlineMath>{`\\mathbf{e}`}_3 = (0, 0, 1)</InlineMath> are linearly independent:
        </p>
        <MathBlock>{`c_1(1, 0, 0) + c_2(0, 1, 0) + c_3(0, 0, 1) = (c_1, c_2, c_3) = (0, 0, 0)`}</MathBlock>
        <p>implies <InlineMath>c_1 = c_2 = c_3 = 0</InlineMath>.</p>
      </Example>

      <Example title="Linear Dependence">
        <p>
          The vectors <InlineMath>(1, 2)</InlineMath>, <InlineMath>(2, 4)</InlineMath> are linearly dependent since:
        </p>
        <MathBlock>{`2(1, 2) - 1(2, 4) = (0, 0)`}</MathBlock>
        <p>has the nontrivial solution <InlineMath>c_1 = 2, c_2 = -1</InlineMath>.</p>
      </Example>

      <Theorem
        title="Dependence on Superset"
        proof={
          <>
            <p>
              If <InlineMath>v_1, \ldots, v_n</InlineMath> are linearly dependent, there exist <InlineMath>c_i</InlineMath> not all
              zero with <InlineMath>\sum c_i v_i = {`\\mathbf{0}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>c_1 v_1 + \cdots + c_n v_n + 0 \cdot v_{'{n+1}'} + \cdots + 0 \cdot v_m = {`\\mathbf{0}`}</InlineMath>
              shows the larger set is also dependent.
            </p>
          </>
        }
      >
        <p>
          If a set of vectors is linearly dependent, then any larger set containing it is also
          linearly dependent.
        </p>
      </Theorem>

      <h2>Basis</h2>

      <Definition title="Basis">
        <p>
          A <strong>basis</strong> of a vector space <InlineMath>V</InlineMath> is a linearly independent set
          that spans <InlineMath>V</InlineMath>.
        </p>
      </Definition>

      <Example title="Standard Bases">
        <p><strong>Standard basis of <InlineMath>{`\\mathbb{R}`}^n</InlineMath>:</strong></p>
        <MathBlock>{`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\} = \\{(1, 0, \\ldots, 0), (0, 1, \\ldots, 0), \\ldots, (0, 0, \\ldots, 1)\\}`}</MathBlock>
        
        <p className="mt-4"><strong>Standard basis of <InlineMath>P_n(F)</InlineMath>:</strong></p>
        <MathBlock>{`\\{1, x, x^2, \\ldots, x^n\\}`}</MathBlock>
        
        <p className="mt-4"><strong>Standard basis of <InlineMath>M_{'2×2'}({`\\mathbb{R}`})</InlineMath>:</strong></p>
        <MathBlock>{`\\left\\{ \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}, \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} \\right\\}`}</MathBlock>
      </Example>

      <Theorem
        title="Unique Representation"
        proof={
          <>
            <p><strong>Existence:</strong> Since the basis spans <InlineMath>V</InlineMath>, every vector is a linear combination.</p>
            <p className="mt-2"><strong>Uniqueness:</strong> Suppose <InlineMath>v = \sum c_i v_i = \sum d_i v_i</InlineMath>. Then:</p>
            <MathBlock>{`\\sum (c_i - d_i) v_i = \\mathbf{0}`}</MathBlock>
            <p>By linear independence, <InlineMath>c_i - d_i = 0</InlineMath> for all <InlineMath>i</InlineMath>, so <InlineMath>c_i = d_i</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\{v_1, \\ldots, v_n\\}`}</InlineMath> is a basis for <InlineMath>V</InlineMath>, then every vector
          <InlineMath>v \in V</InlineMath> can be written <strong>uniquely</strong> as:
        </p>
        <MathBlock>{`v = c_1 v_1 + c_2 v_2 + \\cdots + c_n v_n`}</MathBlock>
      </Theorem>

      <Definition title="Coordinates">
        <p>
          If <InlineMath>\beta = {`\\{v_1, \\ldots, v_n\\}`}</InlineMath> is an ordered basis and <InlineMath>v = \sum c_i v_i</InlineMath>,
          then the <strong>coordinate vector</strong> of <InlineMath>v</InlineMath> with respect to <InlineMath>\beta</InlineMath> is:
        </p>
        <MathBlock>{`[v]_\\beta = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix}`}</MathBlock>
      </Definition>

      <h2>Dimension</h2>

      <Theorem
        title="Steinitz Exchange Lemma"
        proof={
          <>
            <p>We proceed by induction on <InlineMath>n</InlineMath>.</p>
            <p className="mt-2"><strong>Base case:</strong> If <InlineMath>n = 1</InlineMath>, then <InlineMath>w_1 \neq {`\\mathbf{0}`}</InlineMath> can be expressed as <InlineMath>w_1 = \sum a_i v_i</InlineMath> with some <InlineMath>a_j \neq 0</InlineMath>. Reorder so <InlineMath>a_1 \neq 0</InlineMath>. Then:</p>
            <MathBlock>{`v_1 = \\frac{1}{a_1}\\left(w_1 - \\sum_{i=2}^m a_i v_i\\right)`}</MathBlock>
            <p>So <InlineMath>{`\\{w_1, v_2, \\ldots, v_m\\}`}</InlineMath> still spans.</p>
            <p className="mt-2"><strong>Inductive step:</strong> Apply the base case argument to extend from <InlineMath>n-1</InlineMath> to <InlineMath>n</InlineMath>.</p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`\\{v_1, \\ldots, v_m\\}`}</InlineMath> span <InlineMath>V</InlineMath> and let <InlineMath>{`\\{w_1, \\ldots, w_n\\}`}</InlineMath>
          be linearly independent. Then <InlineMath>n \leq m</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Dimension is Well-Defined"
        proof={
          <>
            <p>
              Let <InlineMath>{`\\{v_1, \\ldots, v_m\\}`}</InlineMath> and <InlineMath>{`\\{w_1, \\ldots, w_n\\}`}</InlineMath> be bases.
            </p>
            <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
              <li>Since <InlineMath>{`\\{v_1, \\ldots, v_m\\}`}</InlineMath> spans and <InlineMath>{`\\{w_1, \\ldots, w_n\\}`}</InlineMath> is independent: <InlineMath>n \leq m</InlineMath></li>
              <li>Since <InlineMath>{`\\{w_1, \\ldots, w_n\\}`}</InlineMath> spans and <InlineMath>{`\\{v_1, \\ldots, v_m\\}`}</InlineMath> is independent: <InlineMath>m \leq n</InlineMath></li>
            </ul>
            <p className="mt-2">Therefore <InlineMath>m = n</InlineMath>.</p>
          </>
        }
      >
        <p>
          Any two bases of a finite-dimensional vector space have the same number of vectors.
        </p>
      </Theorem>

      <Definition title="Dimension">
        <p>
          The <strong>dimension</strong> of a finite-dimensional vector space <InlineMath>V</InlineMath>, written
          <InlineMath>\dim(V)</InlineMath>, is the number of vectors in any basis.
        </p>
        <p className="mt-2">
          By convention, <InlineMath>\dim({`\\{\\mathbf{0}\\}`}) = 0</InlineMath> (the empty set is a basis for the zero space).
        </p>
      </Definition>

      <Example title="Dimensions of Common Spaces">
        <ul className="list-disc list-inside text-dark-300 space-y-2">
          <li><InlineMath>\dim({`\\mathbb{R}`}^n) = n</InlineMath></li>
          <li><InlineMath>\dim(P_n(F)) = n + 1</InlineMath> (polynomials of degree at most <InlineMath>n</InlineMath>)</li>
          <li><InlineMath>\dim(M_{'m×n'}(F)) = mn</InlineMath></li>
          <li><InlineMath>\dim_{`\\mathbb{R}`}({`\\mathbb{C}`}) = 2</InlineMath> (viewing <InlineMath>{`\\mathbb{C}`}</InlineMath> as a real vector space)</li>
          <li><InlineMath>\dim_{`\\mathbb{C}`}({`\\mathbb{C}`}) = 1</InlineMath></li>
        </ul>
      </Example>

      <h2>Extending and Reducing Sets</h2>

      <Theorem
        title="Basis Extension Theorem"
        proof={
          <>
            <p>
              Let <InlineMath>S = {`\\{v_1, \\ldots, v_k\\}`}</InlineMath> be linearly independent with <InlineMath>k {'<'} n = \dim(V)</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>S</InlineMath> doesn't span <InlineMath>V</InlineMath>, there exists <InlineMath>v_{'{k+1}'} \notin {`\\text{span}`}(S)</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`\\{v_1, \\ldots, v_k, v_{k+1}\\}`}</InlineMath> is linearly independent.
            </p>
            <p className="mt-2">
              Repeat until we have <InlineMath>n</InlineMath> vectors, which must then be a basis.
            </p>
          </>
        }
      >
        <p>
          Every linearly independent set in a finite-dimensional vector space can be extended to a basis.
        </p>
      </Theorem>

      <Theorem
        title="Basis Reduction Theorem"
        proof={
          <>
            <p>
              If <InlineMath>S</InlineMath> spans but is dependent, some <InlineMath>v_k</InlineMath> is a linear combination of the others.
            </p>
            <p className="mt-2">
              Remove <InlineMath>v_k</InlineMath>; the remaining set still spans.
            </p>
            <p className="mt-2">
              Repeat until independent, obtaining a basis.
            </p>
          </>
        }
      >
        <p>
          Every spanning set of a finite-dimensional vector space contains a basis.
        </p>
      </Theorem>

      <h2>Dimension and Subspaces</h2>

      <Theorem
        title="Dimension of Subspace"
        proof={
          <>
            <p><strong>(1) W is finite-dimensional:</strong></p>
            <p className="mt-2">
              If <InlineMath>W = {`\\{\\mathbf{0}\\}`}</InlineMath>, then <InlineMath>\dim(W) = 0</InlineMath>. Otherwise, choose any nonzero <InlineMath>v_1 \in W</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>W = {`\\text{span}`}(v_1)</InlineMath>, we're done. Otherwise, choose <InlineMath>v_2 \in W \setminus {`\\text{span}`}(v_1)</InlineMath>.
            </p>
            <p className="mt-2">
              Continue: <InlineMath>{`\\{v_1, v_2, \\ldots\\}`}</InlineMath> is linearly independent at each step. By Steinitz, this process must stop after at most <InlineMath>\dim(V)</InlineMath> steps.
            </p>
            <p className="mt-4"><strong>(2) <InlineMath>\dim(W) \leq \dim(V)</InlineMath>:</strong></p>
            <p className="mt-2">
              Any basis of <InlineMath>W</InlineMath> is a linearly independent set in <InlineMath>V</InlineMath>. By Steinitz, it has at most <InlineMath>\dim(V)</InlineMath> elements.
            </p>
            <p className="mt-4"><strong>(3) <InlineMath>\dim(W) = \dim(V) \iff W = V</InlineMath>:</strong></p>
            <p className="mt-2">
              If <InlineMath>W = V</InlineMath>, clearly <InlineMath>\dim(W) = \dim(V)</InlineMath>.
            </p>
            <p className="mt-2">
              Conversely, if <InlineMath>\dim(W) = \dim(V) = n</InlineMath>, let <InlineMath>{`\\{v_1, \\ldots, v_n\\}`}</InlineMath> be a basis of <InlineMath>W</InlineMath>. This is an independent set of <InlineMath>n</InlineMath> vectors in <InlineMath>V</InlineMath>, hence a basis of <InlineMath>V</InlineMath>. Thus <InlineMath>W = {`\\text{span}`}(v_1, \ldots, v_n) = V</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>W</InlineMath> is a subspace of finite-dimensional <InlineMath>V</InlineMath>, then:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><InlineMath>W</InlineMath> is finite-dimensional</li>
          <li><InlineMath>\dim(W) \leq \dim(V)</InlineMath></li>
          <li><InlineMath>\dim(W) = \dim(V)</InlineMath> if and only if <InlineMath>W = V</InlineMath></li>
        </ol>
      </Theorem>

      <Theorem
        title="Dimension of Sum"
        proof={
          <>
            <p>
              Let <InlineMath>k = \dim(W_1 \cap W_2)</InlineMath>, <InlineMath>m = \dim(W_1)</InlineMath>, and <InlineMath>n = \dim(W_2)</InlineMath>.
            </p>
            <p className="mt-2">
              Choose a basis <InlineMath>{`\\{v_1, \\ldots, v_k\\}`}</InlineMath> of <InlineMath>W_1 \cap W_2</InlineMath>.
            </p>
            <p className="mt-2">
              Extend to a basis <InlineMath>{`\\{v_1, \\ldots, v_k, u_1, \\ldots, u_{m-k}\\}`}</InlineMath> of <InlineMath>W_1</InlineMath>.
            </p>
            <p className="mt-2">
              Extend to a basis <InlineMath>{`\\{v_1, \\ldots, v_k, w_1, \\ldots, w_{n-k}\\}`}</InlineMath> of <InlineMath>W_2</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Claim:</strong> <InlineMath>{`\\{v_1, \\ldots, v_k, u_1, \\ldots, u_{m-k}, w_1, \\ldots, w_{n-k}\\}`}</InlineMath> is a basis of <InlineMath>W_1 + W_2</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Spanning:</strong> Any <InlineMath>x \in W_1 + W_2</InlineMath> can be written as <InlineMath>x = x_1 + x_2</InlineMath> with <InlineMath>x_i \in W_i</InlineMath>. Expressing each in terms of its basis gives a combination of <InlineMath>v_i, u_j, w_l</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Independence:</strong> Suppose <InlineMath>\sum a_i v_i + \sum b_j u_j + \sum c_l w_l = {`\\mathbf{0}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>\sum a_i v_i + \sum b_j u_j = -\sum c_l w_l</InlineMath>. The left side is in <InlineMath>W_1</InlineMath>, right side in <InlineMath>W_2</InlineMath>, so both are in <InlineMath>W_1 \cap W_2</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>-\sum c_l w_l = \sum d_i v_i</InlineMath> for some scalars <InlineMath>d_i</InlineMath>. By independence of the <InlineMath>W_2</InlineMath>-basis, all <InlineMath>c_l = 0</InlineMath> and <InlineMath>d_i = 0</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>\sum a_i v_i + \sum b_j u_j = {`\\mathbf{0}`}</InlineMath>, so by independence of the <InlineMath>W_1</InlineMath>-basis, all <InlineMath>a_i = b_j = 0</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Conclusion:</strong> <InlineMath>\dim(W_1 + W_2) = k + (m - k) + (n - k) = m + n - k</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For subspaces <InlineMath>W_1</InlineMath> and <InlineMath>W_2</InlineMath> of a finite-dimensional space:
        </p>
        <MathBlock>{`\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)`}</MathBlock>
      </Theorem>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Linearly independent means only the trivial combination gives <InlineMath>{`\\mathbf{0}`}</InlineMath></li>
          <li>A basis is a linearly independent spanning set</li>
          <li>Every vector has unique coordinates relative to an ordered basis</li>
          <li>Dimension is well-defined: all bases have the same size</li>
          <li>Independent sets can be extended to bases; spanning sets can be reduced</li>
          <li>For subspaces: <InlineMath>\dim(W) \leq \dim(V)</InlineMath> with equality iff <InlineMath>W = V</InlineMath></li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={4}
        questions={section04Quiz}
        title="Bases and Dimension Quiz"
      />
    </LessonLayout>
  );
}
