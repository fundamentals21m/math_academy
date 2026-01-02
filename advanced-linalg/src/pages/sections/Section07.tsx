import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section07Quiz } from '@/data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Linear Functionals and the Dual Space</h2>

      <p>
        A <strong>linear functional</strong> is a linear map from a vector space to its underlying
        field. The collection of all linear functionals on <InlineMath>V</InlineMath> forms a new vector space
        called the <strong>dual space</strong> <InlineMath>V^*</InlineMath>. This seemingly abstract construction
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
          A <strong>linear functional</strong> on a vector space <InlineMath>V</InlineMath> over <InlineMath>F</InlineMath> is
          a linear transformation <InlineMath>f: V \to F</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>F</InlineMath> is 1-dimensional over itself, linear functionals are "scalar-valued"
          linear maps.
        </p>
      </Definition>

      <Example title="Examples of Linear Functionals">
        <p><strong>On <InlineMath>{`\\mathbb{R}`}^n</InlineMath>:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li><InlineMath>f(x_1, \ldots, x_n) = a_1 x_1 + \cdots + a_n x_n</InlineMath> (dot product with fixed vector)</li>
          <li>Every linear functional on <InlineMath>{`\\mathbb{R}`}^n</InlineMath> has this form</li>
        </ul>
        <p className="mt-4"><strong>On <InlineMath>P_n({`\\mathbb{R}`})</InlineMath>:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Evaluation: <InlineMath>{`\\text{ev}`}_c(p) = p(c)</InlineMath> for fixed <InlineMath>c</InlineMath></li>
          <li>Integration: <InlineMath>f(p) = \int_0^1 p(x) dx</InlineMath></li>
          <li>Coefficient extraction: <InlineMath>f(a_0 + a_1x + \cdots) = a_k</InlineMath></li>
        </ul>
        <p className="mt-4"><strong>On <InlineMath>\mathcal{'{C}'}[a, b]</InlineMath>:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Evaluation: <InlineMath>\delta_c(f) = f(c)</InlineMath> (the "Dirac delta" idea)</li>
          <li>Integration: <InlineMath>I(f) = \int_a^b f(x) dx</InlineMath></li>
        </ul>
      </Example>

      <h2>The Dual Space</h2>

      <Definition title="Dual Space">
        <p>
          The <strong>dual space</strong> of <InlineMath>V</InlineMath>, denoted <InlineMath>V^*</InlineMath>, is the set
          of all linear functionals on <InlineMath>V</InlineMath>:
        </p>
        <MathBlock>{`V^* = \\mathcal{L}(V, F) = \\{f: V \\to F : f \\text{ is linear}\\}`}</MathBlock>
        <p className="mt-2">
          <InlineMath>V^*</InlineMath> is a vector space with pointwise operations:
        </p>
        <MathBlock>{`(f + g)(v) = f(v) + g(v), \\quad (cf)(v) = c \\cdot f(v)`}</MathBlock>
      </Definition>

      <h2>The Dual Basis</h2>

      <Theorem
        title="Dual Basis Theorem"
        proof={
          <>
            <p><strong>Construction:</strong> Define <InlineMath>f_i: V \to F</InlineMath> by:</p>
            <MathBlock>{`f_i(v_j) = \\delta_{ij} = \\begin{cases} 1 & i = j \\\\ 0 & i \\neq j \\end{cases}`}</MathBlock>
            <p className="mt-2">
              Extend linearly: <InlineMath>f_i(\sum c_j v_j) = c_i</InlineMath> (the <InlineMath>i</InlineMath>-th coordinate functional).
            </p>
            <p className="mt-2"><strong>Spanning:</strong> For any <InlineMath>f \in V^*</InlineMath>, let <InlineMath>a_i = f(v_i)</InlineMath>. Then for any <InlineMath>v = \sum c_j v_j</InlineMath>:</p>
            <MathBlock>{`f(v) = \\sum c_j f(v_j) = \\sum c_j a_j = \\sum a_i f_i(v)`}</MathBlock>
            <p>So <InlineMath>f = \sum a_i f_i</InlineMath>.</p>
            <p className="mt-2"><strong>Independence:</strong> If <InlineMath>\sum a_i f_i = 0</InlineMath>, evaluate at <InlineMath>v_j</InlineMath> to get <InlineMath>a_j = 0</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\{v_1, \\ldots, v_n\\}`}</InlineMath> is a basis for <InlineMath>V</InlineMath>, there exists a unique
          basis <InlineMath>{`\\{f_1, \\ldots, f_n\\}`}</InlineMath> for <InlineMath>V^*</InlineMath>, called the <strong>dual basis</strong>,
          satisfying:
        </p>
        <MathBlock>{`f_i(v_j) = \\delta_{ij}`}</MathBlock>
      </Theorem>

      <Theorem title="Dimension of Dual Space">
        <p>If <InlineMath>V</InlineMath> is finite-dimensional, then <InlineMath>\dim(V^*) = \dim(V)</InlineMath>.</p>
      </Theorem>

      <Example title="Dual Basis for R^3">
        <p>
          For the standard basis <InlineMath>{`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}`}</InlineMath> of <InlineMath>{`\\mathbb{R}`}^3</InlineMath>,
          the dual basis consists of coordinate functionals:
        </p>
        <MathBlock>{`f_1(x, y, z) = x, \\quad f_2(x, y, z) = y, \\quad f_3(x, y, z) = z`}</MathBlock>
        <p className="mt-2">
          Each <InlineMath>f_i</InlineMath> "picks out" the <InlineMath>i</InlineMath>-th coordinate.
        </p>
      </Example>

      <h2>Annihilators</h2>

      <Definition title="Annihilator">
        <p>
          For a subspace <InlineMath>W \subseteq V</InlineMath>, the <strong>annihilator</strong> of <InlineMath>W</InlineMath> is:
        </p>
        <MathBlock>{`W^0 = \\{f \\in V^* : f(w) = 0 \\text{ for all } w \\in W\\}`}</MathBlock>
        <p className="mt-2">
          <InlineMath>W^0</InlineMath> consists of all linear functionals that "vanish on <InlineMath>W</InlineMath>."
        </p>
      </Definition>

      <Theorem
        title="Annihilator is a Subspace"
        proof={
          <>
            <p><strong>Non-empty:</strong> The zero functional <InlineMath>0 \in W^0</InlineMath>.</p>
            <p className="mt-2"><strong>Closure:</strong> If <InlineMath>f, g \in W^0</InlineMath> and <InlineMath>w \in W</InlineMath>:</p>
            <MathBlock>{`(f + g)(w) = f(w) + g(w) = 0 + 0 = 0`}</MathBlock>
            <MathBlock>{`(cf)(w) = c \\cdot f(w) = c \\cdot 0 = 0`}</MathBlock>
          </>
        }
      >
        <p>For any subspace <InlineMath>W \subseteq V</InlineMath>, <InlineMath>W^0</InlineMath> is a subspace of <InlineMath>V^*</InlineMath>.</p>
      </Theorem>

      <Theorem
        title="Annihilator Dimension"
        proof={
          <>
            <p>Define <InlineMath>\phi: V^* \to W^*</InlineMath> by <InlineMath>\phi(f) = f|_W</InlineMath> (restriction to <InlineMath>W</InlineMath>).</p>
            <p className="mt-2"><InlineMath>\phi</InlineMath> is linear and surjective (extend any <InlineMath>g \in W^*</InlineMath> to <InlineMath>f \in V^*</InlineMath>).</p>
            <p className="mt-2"><InlineMath>\ker(\phi) = W^0</InlineMath> (functionals that vanish on <InlineMath>W</InlineMath>).</p>
            <p className="mt-2">By rank-nullity:</p>
            <MathBlock>{`\\dim(V^*) = \\dim(W^*) + \\dim(W^0)`}</MathBlock>
            <MathBlock>{`\\dim(V) = \\dim(W) + \\dim(W^0)`}</MathBlock>
          </>
        }
      >
        <p>
          For a subspace <InlineMath>W</InlineMath> of finite-dimensional <InlineMath>V</InlineMath>:
        </p>
        <MathBlock>{`\\dim(W^0) = \\dim(V) - \\dim(W)`}</MathBlock>
      </Theorem>

      <Example title="Annihilator of a Plane">
        <p>
          Let <InlineMath>W = {`\\{(x, y, 0) : x, y \\in \\mathbb{R}\\}`}</InlineMath> (the xy-plane in <InlineMath>{`\\mathbb{R}`}^3</InlineMath>).
        </p>
        <p className="mt-2">
          Then <InlineMath>W^0 = {`\\{f_3\\}`} = {`\\text{span}`}{`\\{f_3\\}`}</InlineMath> where <InlineMath>f_3(x, y, z) = z</InlineMath>.
        </p>
        <p className="mt-2">
          Check: <InlineMath>\dim(W^0) = 1 = 3 - 2 = \dim({`\\mathbb{R}`}^3) - \dim(W)</InlineMath>.
        </p>
      </Example>

      <h2>The Double Dual</h2>

      <Definition title="Double Dual">
        <p>
          The <strong>double dual</strong> of <InlineMath>V</InlineMath> is <InlineMath>V^{'{**}'} = (V^*)^*</InlineMath>,
          the dual of the dual space.
        </p>
      </Definition>

      <Theorem
        title="Natural Isomorphism to Double Dual"
        proof={
          <>
            <p>Define <InlineMath>\Phi: V \to V^{'{**}'}</InlineMath> by <InlineMath>\Phi(v)(f) = f(v)</InlineMath> for <InlineMath>v \in V</InlineMath>, <InlineMath>f \in V^*</InlineMath>.</p>
            <p className="mt-2"><strong>Linearity:</strong></p>
            <MathBlock>{`\\Phi(u + v)(f) = f(u + v) = f(u) + f(v) = \\Phi(u)(f) + \\Phi(v)(f)`}</MathBlock>
            <p className="mt-2"><strong>Injectivity:</strong> If <InlineMath>\Phi(v) = 0</InlineMath>, then <InlineMath>f(v) = 0</InlineMath> for all <InlineMath>f \in V^*</InlineMath>.</p>
            <p>If <InlineMath>v \neq {`\\mathbf{0}`}</InlineMath>, extend to a basis <InlineMath>{`\\{v, v_2, \\ldots, v_n\\}`}</InlineMath>. The dual basis element <InlineMath>f_1</InlineMath> satisfies <InlineMath>f_1(v) = 1 \neq 0</InlineMath>. Contradiction.</p>
            <p className="mt-2"><strong>Dimension:</strong> <InlineMath>\dim(V) = \dim(V^*) = \dim(V^{'{**}'})</InlineMath>, so <InlineMath>\Phi</InlineMath> is surjective.</p>
          </>
        }
      >
        <p>
          The map <InlineMath>\Phi: V \to V^{'{**}'}</InlineMath> defined by <InlineMath>\Phi(v)(f) = f(v)</InlineMath> is a
          <strong>natural isomorphism</strong> for finite-dimensional <InlineMath>V</InlineMath>.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Natural vs. Not Natural:</strong> While <InlineMath>V \cong V^*</InlineMath> (same dimension), this
        isomorphism requires choosing a basis. The isomorphism <InlineMath>V \cong V^{'{**}'}</InlineMath> is
        "natural" — it doesn't depend on any choices. This is a profound distinction in mathematics.
      </Callout>

      <h2>The Transpose (Dual) of a Linear Map</h2>

      <Definition title="Transpose of a Linear Map">
        <p>
          For <InlineMath>T: V \to W</InlineMath>, the <strong>transpose</strong> (or <strong>dual</strong>)
          <InlineMath>T^*: W^* \to V^*</InlineMath> is defined by:
        </p>
        <MathBlock>{`T^*(g) = g \\circ T`}</MathBlock>
        <p className="mt-2">For <InlineMath>g \in W^*</InlineMath>, <InlineMath>T^*(g)</InlineMath> is the composition <InlineMath>V \xrightarrow{'{T}'} W \xrightarrow{'{g}'} F</InlineMath>.</p>
      </Definition>

      <Theorem title="Matrix of Transpose">
        <p>
          If <InlineMath>[T]_\beta^\gamma = A</InlineMath>, then <InlineMath>[T^*]_{'{\\gamma^*}'}^{'{\\beta^*}'} = A^T</InlineMath> (the matrix transpose).
        </p>
      </Theorem>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Linear functional: a linear map <InlineMath>f: V \to F</InlineMath></li>
          <li>Dual space <InlineMath>V^*</InlineMath> has the same dimension as <InlineMath>V</InlineMath></li>
          <li>Dual basis: <InlineMath>f_i(v_j) = \delta_{'ij'}</InlineMath> (Kronecker delta)</li>
          <li>Annihilator: <InlineMath>\dim(W^0) = \dim(V) - \dim(W)</InlineMath></li>
          <li><InlineMath>V \cong V^{'{**}'}</InlineMath> naturally (without choosing a basis)</li>
          <li>Transpose of linear map: <InlineMath>T^*(g) = g \circ T</InlineMath></li>
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
