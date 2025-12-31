import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
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
          Vectors <Math>v_1, v_2, \ldots, v_n</Math> are <strong>linearly independent</strong> if the
          only solution to:
        </p>
        <MathBlock>{`c_1 v_1 + c_2 v_2 + \\cdots + c_n v_n = \\mathbf{0}`}</MathBlock>
        <p>
          is the trivial solution <Math>c_1 = c_2 = \cdots = c_n = 0</Math>.
        </p>
        <p className="mt-2">
          Otherwise, the vectors are <strong>linearly dependent</strong>, meaning at least one
          can be written as a linear combination of the others.
        </p>
      </Definition>

      <Example title="Linear Independence in R^3">
        <p>
          The vectors <Math>{`\\mathbf{e}`}_1 = (1, 0, 0)</Math>, <Math>{`\\mathbf{e}`}_2 = (0, 1, 0)</Math>,
          <Math>{`\\mathbf{e}`}_3 = (0, 0, 1)</Math> are linearly independent:
        </p>
        <MathBlock>{`c_1(1, 0, 0) + c_2(0, 1, 0) + c_3(0, 0, 1) = (c_1, c_2, c_3) = (0, 0, 0)`}</MathBlock>
        <p>implies <Math>c_1 = c_2 = c_3 = 0</Math>.</p>
      </Example>

      <Example title="Linear Dependence">
        <p>
          The vectors <Math>(1, 2)</Math>, <Math>(2, 4)</Math> are linearly dependent since:
        </p>
        <MathBlock>{`2(1, 2) - 1(2, 4) = (0, 0)`}</MathBlock>
        <p>has the nontrivial solution <Math>c_1 = 2, c_2 = -1</Math>.</p>
      </Example>

      <Theorem
        title="Dependence on Superset"
        proof={
          <>
            <p>
              If <Math>v_1, \ldots, v_n</Math> are linearly dependent, there exist <Math>c_i</Math> not all
              zero with <Math>\sum c_i v_i = {`\\mathbf{0}`}</Math>.
            </p>
            <p className="mt-2">
              Then <Math>c_1 v_1 + \cdots + c_n v_n + 0 \cdot v_{'{n+1}'} + \cdots + 0 \cdot v_m = {`\\mathbf{0}`}</Math>
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
          A <strong>basis</strong> of a vector space <Math>V</Math> is a linearly independent set
          that spans <Math>V</Math>.
        </p>
      </Definition>

      <Example title="Standard Bases">
        <p><strong>Standard basis of <Math>{`\\mathbb{R}`}^n</Math>:</strong></p>
        <MathBlock>{`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\} = \\{(1, 0, \\ldots, 0), (0, 1, \\ldots, 0), \\ldots, (0, 0, \\ldots, 1)\\}`}</MathBlock>
        
        <p className="mt-4"><strong>Standard basis of <Math>P_n(F)</Math>:</strong></p>
        <MathBlock>{`\\{1, x, x^2, \\ldots, x^n\\}`}</MathBlock>
        
        <p className="mt-4"><strong>Standard basis of <Math>M_{'2×2'}({`\\mathbb{R}`})</Math>:</strong></p>
        <MathBlock>{`\\left\\{ \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}, \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} \\right\\}`}</MathBlock>
      </Example>

      <Theorem
        title="Unique Representation"
        proof={
          <>
            <p><strong>Existence:</strong> Since the basis spans <Math>V</Math>, every vector is a linear combination.</p>
            <p className="mt-2"><strong>Uniqueness:</strong> Suppose <Math>v = \sum c_i v_i = \sum d_i v_i</Math>. Then:</p>
            <MathBlock>{`\\sum (c_i - d_i) v_i = \\mathbf{0}`}</MathBlock>
            <p>By linear independence, <Math>c_i - d_i = 0</Math> for all <Math>i</Math>, so <Math>c_i = d_i</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>{`\\{v_1, \\ldots, v_n\\}`}</Math> is a basis for <Math>V</Math>, then every vector
          <Math>v \in V</Math> can be written <strong>uniquely</strong> as:
        </p>
        <MathBlock>{`v = c_1 v_1 + c_2 v_2 + \\cdots + c_n v_n`}</MathBlock>
      </Theorem>

      <Definition title="Coordinates">
        <p>
          If <Math>\beta = {`\\{v_1, \\ldots, v_n\\}`}</Math> is an ordered basis and <Math>v = \sum c_i v_i</Math>,
          then the <strong>coordinate vector</strong> of <Math>v</Math> with respect to <Math>\beta</Math> is:
        </p>
        <MathBlock>{`[v]_\\beta = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix}`}</MathBlock>
      </Definition>

      <h2>Dimension</h2>

      <Theorem
        title="Steinitz Exchange Lemma"
        proof={
          <>
            <p>We proceed by induction on <Math>n</Math>.</p>
            <p className="mt-2"><strong>Base case:</strong> If <Math>n = 1</Math>, then <Math>w_1 \neq {`\\mathbf{0}`}</Math> can be expressed as <Math>w_1 = \sum a_i v_i</Math> with some <Math>a_j \neq 0</Math>. Reorder so <Math>a_1 \neq 0</Math>. Then:</p>
            <MathBlock>{`v_1 = \\frac{1}{a_1}\\left(w_1 - \\sum_{i=2}^m a_i v_i\\right)`}</MathBlock>
            <p>So <Math>{`\\{w_1, v_2, \\ldots, v_m\\}`}</Math> still spans.</p>
            <p className="mt-2"><strong>Inductive step:</strong> Apply the base case argument to extend from <Math>n-1</Math> to <Math>n</Math>.</p>
          </>
        }
      >
        <p>
          Let <Math>{`\\{v_1, \\ldots, v_m\\}`}</Math> span <Math>V</Math> and let <Math>{`\\{w_1, \\ldots, w_n\\}`}</Math>
          be linearly independent. Then <Math>n \leq m</Math>.
        </p>
      </Theorem>

      <Theorem
        title="Dimension is Well-Defined"
        proof={
          <>
            <p>
              Let <Math>{`\\{v_1, \\ldots, v_m\\}`}</Math> and <Math>{`\\{w_1, \\ldots, w_n\\}`}</Math> be bases.
            </p>
            <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
              <li>Since <Math>{`\\{v_1, \\ldots, v_m\\}`}</Math> spans and <Math>{`\\{w_1, \\ldots, w_n\\}`}</Math> is independent: <Math>n \leq m</Math></li>
              <li>Since <Math>{`\\{w_1, \\ldots, w_n\\}`}</Math> spans and <Math>{`\\{v_1, \\ldots, v_m\\}`}</Math> is independent: <Math>m \leq n</Math></li>
            </ul>
            <p className="mt-2">Therefore <Math>m = n</Math>.</p>
          </>
        }
      >
        <p>
          Any two bases of a finite-dimensional vector space have the same number of vectors.
        </p>
      </Theorem>

      <Definition title="Dimension">
        <p>
          The <strong>dimension</strong> of a finite-dimensional vector space <Math>V</Math>, written
          <Math>\dim(V)</Math>, is the number of vectors in any basis.
        </p>
        <p className="mt-2">
          By convention, <Math>\dim({`\\{\\mathbf{0}\\}`}) = 0</Math> (the empty set is a basis for the zero space).
        </p>
      </Definition>

      <Example title="Dimensions of Common Spaces">
        <ul className="list-disc list-inside text-dark-300 space-y-2">
          <li><Math>\dim({`\\mathbb{R}`}^n) = n</Math></li>
          <li><Math>\dim(P_n(F)) = n + 1</Math> (polynomials of degree at most <Math>n</Math>)</li>
          <li><Math>\dim(M_{'m×n'}(F)) = mn</Math></li>
          <li><Math>\dim_{`\\mathbb{R}`}({`\\mathbb{C}`}) = 2</Math> (viewing <Math>{`\\mathbb{C}`}</Math> as a real vector space)</li>
          <li><Math>\dim_{`\\mathbb{C}`}({`\\mathbb{C}`}) = 1</Math></li>
        </ul>
      </Example>

      <h2>Extending and Reducing Sets</h2>

      <Theorem
        title="Basis Extension Theorem"
        proof={
          <>
            <p>
              Let <Math>S = {`\\{v_1, \\ldots, v_k\\}`}</Math> be linearly independent with <Math>k {'<'} n = \dim(V)</Math>.
            </p>
            <p className="mt-2">
              Since <Math>S</Math> doesn't span <Math>V</Math>, there exists <Math>v_{'{k+1}'} \notin {`\\text{span}`}(S)</Math>.
            </p>
            <p className="mt-2">
              Then <Math>{`\\{v_1, \\ldots, v_k, v_{k+1}\\}`}</Math> is linearly independent.
            </p>
            <p className="mt-2">
              Repeat until we have <Math>n</Math> vectors, which must then be a basis.
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
              If <Math>S</Math> spans but is dependent, some <Math>v_k</Math> is a linear combination of the others.
            </p>
            <p className="mt-2">
              Remove <Math>v_k</Math>; the remaining set still spans.
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

      <Theorem title="Dimension of Subspace">
        <p>
          If <Math>W</Math> is a subspace of finite-dimensional <Math>V</Math>, then:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><Math>W</Math> is finite-dimensional</li>
          <li><Math>\dim(W) \leq \dim(V)</Math></li>
          <li><Math>\dim(W) = \dim(V)</Math> if and only if <Math>W = V</Math></li>
        </ol>
      </Theorem>

      <Theorem title="Dimension of Sum">
        <p>
          For subspaces <Math>W_1</Math> and <Math>W_2</Math> of a finite-dimensional space:
        </p>
        <MathBlock>{`\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)`}</MathBlock>
      </Theorem>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Linearly independent means only the trivial combination gives <Math>{`\\mathbf{0}`}</Math></li>
          <li>A basis is a linearly independent spanning set</li>
          <li>Every vector has unique coordinates relative to an ordered basis</li>
          <li>Dimension is well-defined: all bases have the same size</li>
          <li>Independent sets can be extended to bases; spanning sets can be reduced</li>
          <li>For subspaces: <Math>\dim(W) \leq \dim(V)</Math> with equality iff <Math>W = V</Math></li>
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
