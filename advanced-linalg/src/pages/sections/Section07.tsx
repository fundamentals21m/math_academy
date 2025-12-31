import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section07Quiz } from '@/data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Linear Functionals and the Dual Space</h2>

      <p>
        A <strong>linear functional</strong> is a linear map from a vector space to its underlying
        field. The collection of all linear functionals on <Math>V</Math> forms a new vector space
        called the <strong>dual space</strong> <Math>V^*</Math>. This seemingly abstract construction
        has profound applications throughout mathematics.
      </p>

      <Callout type="info">
        <strong>Why Study Duality?</strong> The dual space provides a different perspective on
        vectors — viewing them through the "lens" of linear functionals. This duality is fundamental
        in functional analysis, differential geometry, and physics (e.g., bras and kets in quantum mechanics).
      </Callout>

      <h2>Linear Functionals</h2>

      <Definition title="Linear Functional">
        <p>
          A <strong>linear functional</strong> on a vector space <Math>V</Math> over <Math>F</Math> is
          a linear transformation <Math>f: V \to F</Math>.
        </p>
        <p className="mt-2">
          Since <Math>F</Math> is 1-dimensional over itself, linear functionals are "scalar-valued"
          linear maps.
        </p>
      </Definition>

      <Example title="Examples of Linear Functionals">
        <p><strong>On <Math>{`\\mathbb{R}`}^n</Math>:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li><Math>f(x_1, \ldots, x_n) = a_1 x_1 + \cdots + a_n x_n</Math> (dot product with fixed vector)</li>
          <li>Every linear functional on <Math>{`\\mathbb{R}`}^n</Math> has this form</li>
        </ul>
        <p className="mt-4"><strong>On <Math>P_n({`\\mathbb{R}`})</Math>:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Evaluation: <Math>{`\\text{ev}`}_c(p) = p(c)</Math> for fixed <Math>c</Math></li>
          <li>Integration: <Math>f(p) = \int_0^1 p(x) dx</Math></li>
          <li>Coefficient extraction: <Math>f(a_0 + a_1x + \cdots) = a_k</Math></li>
        </ul>
        <p className="mt-4"><strong>On <Math>\mathcal{'{C}'}[a, b]</Math>:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Evaluation: <Math>\delta_c(f) = f(c)</Math> (the "Dirac delta" idea)</li>
          <li>Integration: <Math>I(f) = \int_a^b f(x) dx</Math></li>
        </ul>
      </Example>

      <h2>The Dual Space</h2>

      <Definition title="Dual Space">
        <p>
          The <strong>dual space</strong> of <Math>V</Math>, denoted <Math>V^*</Math>, is the set
          of all linear functionals on <Math>V</Math>:
        </p>
        <MathBlock>{`V^* = \\mathcal{L}(V, F) = \\{f: V \\to F : f \\text{ is linear}\\}`}</MathBlock>
        <p className="mt-2">
          <Math>V^*</Math> is a vector space with pointwise operations:
        </p>
        <MathBlock>{`(f + g)(v) = f(v) + g(v), \\quad (cf)(v) = c \\cdot f(v)`}</MathBlock>
      </Definition>

      <h2>The Dual Basis</h2>

      <Theorem
        title="Dual Basis Theorem"
        proof={
          <>
            <p><strong>Construction:</strong> Define <Math>f_i: V \to F</Math> by:</p>
            <MathBlock>{`f_i(v_j) = \\delta_{ij} = \\begin{cases} 1 & i = j \\\\ 0 & i \\neq j \\end{cases}`}</MathBlock>
            <p className="mt-2">
              Extend linearly: <Math>f_i(\sum c_j v_j) = c_i</Math> (the <Math>i</Math>-th coordinate functional).
            </p>
            <p className="mt-2"><strong>Spanning:</strong> For any <Math>f \in V^*</Math>, let <Math>a_i = f(v_i)</Math>. Then for any <Math>v = \sum c_j v_j</Math>:</p>
            <MathBlock>{`f(v) = \\sum c_j f(v_j) = \\sum c_j a_j = \\sum a_i f_i(v)`}</MathBlock>
            <p>So <Math>f = \sum a_i f_i</Math>.</p>
            <p className="mt-2"><strong>Independence:</strong> If <Math>\sum a_i f_i = 0</Math>, evaluate at <Math>v_j</Math> to get <Math>a_j = 0</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>{`\\{v_1, \\ldots, v_n\\}`}</Math> is a basis for <Math>V</Math>, there exists a unique
          basis <Math>{`\\{f_1, \\ldots, f_n\\}`}</Math> for <Math>V^*</Math>, called the <strong>dual basis</strong>,
          satisfying:
        </p>
        <MathBlock>{`f_i(v_j) = \\delta_{ij}`}</MathBlock>
      </Theorem>

      <Theorem title="Dimension of Dual Space">
        <p>If <Math>V</Math> is finite-dimensional, then <Math>\dim(V^*) = \dim(V)</Math>.</p>
      </Theorem>

      <Example title="Dual Basis for R^3">
        <p>
          For the standard basis <Math>{`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}`}</Math> of <Math>{`\\mathbb{R}`}^3</Math>,
          the dual basis consists of coordinate functionals:
        </p>
        <MathBlock>{`f_1(x, y, z) = x, \\quad f_2(x, y, z) = y, \\quad f_3(x, y, z) = z`}</MathBlock>
        <p className="mt-2">
          Each <Math>f_i</Math> "picks out" the <Math>i</Math>-th coordinate.
        </p>
      </Example>

      <h2>Annihilators</h2>

      <Definition title="Annihilator">
        <p>
          For a subspace <Math>W \subseteq V</Math>, the <strong>annihilator</strong> of <Math>W</Math> is:
        </p>
        <MathBlock>{`W^0 = \\{f \\in V^* : f(w) = 0 \\text{ for all } w \\in W\\}`}</MathBlock>
        <p className="mt-2">
          <Math>W^0</Math> consists of all linear functionals that "vanish on <Math>W</Math>."
        </p>
      </Definition>

      <Theorem
        title="Annihilator is a Subspace"
        proof={
          <>
            <p><strong>Non-empty:</strong> The zero functional <Math>0 \in W^0</Math>.</p>
            <p className="mt-2"><strong>Closure:</strong> If <Math>f, g \in W^0</Math> and <Math>w \in W</Math>:</p>
            <MathBlock>{`(f + g)(w) = f(w) + g(w) = 0 + 0 = 0`}</MathBlock>
            <MathBlock>{`(cf)(w) = c \\cdot f(w) = c \\cdot 0 = 0`}</MathBlock>
          </>
        }
      >
        <p>For any subspace <Math>W \subseteq V</Math>, <Math>W^0</Math> is a subspace of <Math>V^*</Math>.</p>
      </Theorem>

      <Theorem
        title="Annihilator Dimension"
        proof={
          <>
            <p>Define <Math>\phi: V^* \to W^*</Math> by <Math>\phi(f) = f|_W</Math> (restriction to <Math>W</Math>).</p>
            <p className="mt-2"><Math>\phi</Math> is linear and surjective (extend any <Math>g \in W^*</Math> to <Math>f \in V^*</Math>).</p>
            <p className="mt-2"><Math>\ker(\phi) = W^0</Math> (functionals that vanish on <Math>W</Math>).</p>
            <p className="mt-2">By rank-nullity:</p>
            <MathBlock>{`\\dim(V^*) = \\dim(W^*) + \\dim(W^0)`}</MathBlock>
            <MathBlock>{`\\dim(V) = \\dim(W) + \\dim(W^0)`}</MathBlock>
          </>
        }
      >
        <p>
          For a subspace <Math>W</Math> of finite-dimensional <Math>V</Math>:
        </p>
        <MathBlock>{`\\dim(W^0) = \\dim(V) - \\dim(W)`}</MathBlock>
      </Theorem>

      <Example title="Annihilator of a Plane">
        <p>
          Let <Math>W = {`\\{(x, y, 0) : x, y \\in \\mathbb{R}\\}`}</Math> (the xy-plane in <Math>{`\\mathbb{R}`}^3</Math>).
        </p>
        <p className="mt-2">
          Then <Math>W^0 = {`\\{f_3\\}`} = {`\\text{span}`}{`\\{f_3\\}`}</Math> where <Math>f_3(x, y, z) = z</Math>.
        </p>
        <p className="mt-2">
          Check: <Math>\dim(W^0) = 1 = 3 - 2 = \dim({`\\mathbb{R}`}^3) - \dim(W)</Math>.
        </p>
      </Example>

      <h2>The Double Dual</h2>

      <Definition title="Double Dual">
        <p>
          The <strong>double dual</strong> of <Math>V</Math> is <Math>V^{'{**}'} = (V^*)^*</Math>,
          the dual of the dual space.
        </p>
      </Definition>

      <Theorem
        title="Natural Isomorphism to Double Dual"
        proof={
          <>
            <p>Define <Math>\Phi: V \to V^{'{**}'}</Math> by <Math>\Phi(v)(f) = f(v)</Math> for <Math>v \in V</Math>, <Math>f \in V^*</Math>.</p>
            <p className="mt-2"><strong>Linearity:</strong></p>
            <MathBlock>{`\\Phi(u + v)(f) = f(u + v) = f(u) + f(v) = \\Phi(u)(f) + \\Phi(v)(f)`}</MathBlock>
            <p className="mt-2"><strong>Injectivity:</strong> If <Math>\Phi(v) = 0</Math>, then <Math>f(v) = 0</Math> for all <Math>f \in V^*</Math>.</p>
            <p>If <Math>v \neq {`\\mathbf{0}`}</Math>, extend to a basis <Math>{`\\{v, v_2, \\ldots, v_n\\}`}</Math>. The dual basis element <Math>f_1</Math> satisfies <Math>f_1(v) = 1 \neq 0</Math>. Contradiction.</p>
            <p className="mt-2"><strong>Dimension:</strong> <Math>\dim(V) = \dim(V^*) = \dim(V^{'{**}'})</Math>, so <Math>\Phi</Math> is surjective.</p>
          </>
        }
      >
        <p>
          The map <Math>\Phi: V \to V^{'{**}'}</Math> defined by <Math>\Phi(v)(f) = f(v)</Math> is a
          <strong>natural isomorphism</strong> for finite-dimensional <Math>V</Math>.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Natural vs. Not Natural:</strong> While <Math>V \cong V^*</Math> (same dimension), this
        isomorphism requires choosing a basis. The isomorphism <Math>V \cong V^{'{**}'}</Math> is
        "natural" — it doesn't depend on any choices. This is a profound distinction in mathematics.
      </Callout>

      <h2>The Transpose (Dual) of a Linear Map</h2>

      <Definition title="Transpose of a Linear Map">
        <p>
          For <Math>T: V \to W</Math>, the <strong>transpose</strong> (or <strong>dual</strong>)
          <Math>T^*: W^* \to V^*</Math> is defined by:
        </p>
        <MathBlock>{`T^*(g) = g \\circ T`}</MathBlock>
        <p className="mt-2">For <Math>g \in W^*</Math>, <Math>T^*(g)</Math> is the composition <Math>V \xrightarrow{'{T}'} W \xrightarrow{'{g}'} F</Math>.</p>
      </Definition>

      <Theorem title="Matrix of Transpose">
        <p>
          If <Math>[T]_\beta^\gamma = A</Math>, then <Math>[T^*]_{'{\\gamma^*}'}^{'{\\beta^*}'} = A^T</Math> (the matrix transpose).
        </p>
      </Theorem>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Linear functional: a linear map <Math>f: V \to F</Math></li>
          <li>Dual space <Math>V^*</Math> has the same dimension as <Math>V</Math></li>
          <li>Dual basis: <Math>f_i(v_j) = \delta_{'ij'}</Math> (Kronecker delta)</li>
          <li>Annihilator: <Math>\dim(W^0) = \dim(V) - \dim(W)</Math></li>
          <li><Math>V \cong V^{'{**}'}</Math> naturally (without choosing a basis)</li>
          <li>Transpose of linear map: <Math>T^*(g) = g \circ T</Math></li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={7}
        questions={section07Quiz}
        title="Dual Spaces Quiz"
      />
    </LessonLayout>
  );
}
