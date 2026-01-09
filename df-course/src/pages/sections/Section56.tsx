import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2>Dual Vector Spaces</h2>

      <p>
        The dual of a vector space consists of all linear functionals on that space. This
        construction is fundamental to linear algebra and has far-reaching applications in
        functional analysis, differential geometry, and physics.
      </p>

      <h3>The Dual Space</h3>

      <Definition title="Linear Functional">
        <p>
          A <strong>linear functional</strong> on a vector space <InlineMath>V</InlineMath> over <InlineMath>F</InlineMath>
          is a linear map <InlineMath>{'f: V \\to F'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Dual Space">
        <p>
          The <strong>dual space</strong> of <InlineMath>V</InlineMath> is
        </p>
        <MathBlock>
          {'V^* = \\text{Hom}_F(V, F) = \\mathcal{L}(V, F)'}
        </MathBlock>
        <p className="mt-2">
          Elements of <InlineMath>{'V^*'}</InlineMath> are called <strong>covectors</strong> or <strong>linear forms</strong>.
        </p>
      </Definition>

      <Theorem title="Dimension of Dual Space"
        proof={
          <>
            <p>
              By the general formula for <InlineMath>{'\\dim \\mathcal{L}(V, W)'}</InlineMath>:
            </p>
            <MathBlock>
              {'\\dim V^* = \\dim V \\cdot \\dim F = n \\cdot 1 = n'}
            </MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>V</InlineMath> is finite-dimensional, then <InlineMath>{'\\dim V^* = \\dim V'}</InlineMath>.
        </p>
      </Theorem>

      <h3>The Dual Basis</h3>

      <Definition title="Dual Basis">
        <p>
          Let <InlineMath>{'\\mathcal{B} = \\{v_1, \\ldots, v_n\\}'}</InlineMath> be a basis for <InlineMath>V</InlineMath>.
          The <strong>dual basis</strong> <InlineMath>{'\\mathcal{B}^* = \\{v_1^*, \\ldots, v_n^*\\}'}</InlineMath>
          for <InlineMath>{'V^*'}</InlineMath> is defined by:
        </p>
        <MathBlock>
          {'v_i^*(v_j) = \\delta_{ij} = \\begin{cases} 1 & \\text{if } i = j \\\\ 0 & \\text{if } i \\neq j \\end{cases}'}
        </MathBlock>
      </Definition>

      <Theorem title="Dual Basis is a Basis"
        proof={
          <>
            <p>
              The functionals <InlineMath>{'v_i^*'}</InlineMath> are well-defined by linear extension of their
              values on the basis.
            </p>
            <p className="mt-2">
              They are linearly independent: if <InlineMath>{'\\sum c_i v_i^* = 0'}</InlineMath>, evaluate at
              <InlineMath>{'v_j'}</InlineMath> to get <InlineMath>{'c_j = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              They span <InlineMath>{'V^*'}</InlineMath>: any <InlineMath>{'f \\in V^*'}</InlineMath> equals
              <InlineMath>{'\\sum f(v_i) v_i^*'}</InlineMath> (check by evaluating on the basis).
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'\\mathcal{B}^*'}</InlineMath> is indeed a basis for <InlineMath>{'V^*'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Dual Basis of R^n">
        <p>
          For the standard basis <InlineMath>{'\\{e_1, \\ldots, e_n\\}'}</InlineMath> of <InlineMath>{'\\mathbb{R}^n'}</InlineMath>,
          the dual basis consists of the coordinate functionals:
        </p>
        <MathBlock>
          {'e_i^*(x_1, \\ldots, x_n) = x_i'}
        </MathBlock>
        <p className="mt-2">
          These are just the projection maps onto each coordinate.
        </p>
      </Example>

      <h3>The Double Dual</h3>

      <Definition title="Double Dual">
        <p>
          The <strong>double dual</strong> of <InlineMath>V</InlineMath> is <InlineMath>{'V^{**} = (V^*)^*'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Canonical Isomorphism"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\Phi: V \\to V^{**}'}</InlineMath> by <InlineMath>{'\\Phi(v)(f) = f(v)'}</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>{'\\Phi'}</InlineMath> is linear: <InlineMath>{'\\Phi(av + bw)(f) = f(av + bw) = af(v) + bf(w)'}</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>{'\\Phi'}</InlineMath> is injective: if <InlineMath>{'\\Phi(v) = 0'}</InlineMath>, then
              <InlineMath>{'f(v) = 0'}</InlineMath> for all <InlineMath>f</InlineMath>. Take <InlineMath>f</InlineMath>
              in the dual basis to show <InlineMath>{'v = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{'\\dim V = \\dim V^{**}'}</InlineMath>, <InlineMath>{'\\Phi'}</InlineMath> is an isomorphism.
            </p>
          </>
        }
      >
        <p>
          There is a <strong>canonical</strong> (basis-independent) isomorphism <InlineMath>{'\\Phi: V \\to V^{**}'}</InlineMath>
          for finite-dimensional <InlineMath>V</InlineMath>:
        </p>
        <MathBlock>
          {'\\Phi(v)(f) = f(v) \\quad \\text{for } v \\in V, f \\in V^*'}
        </MathBlock>
      </Theorem>

      <Callout type="warning">
        <strong>V and V* are NOT Canonically Isomorphic:</strong> While <InlineMath>{'\\dim V = \\dim V^*'}</InlineMath>
        implies they are isomorphic, there is no natural isomorphism. An isomorphism <InlineMath>{'V \\to V^*'}</InlineMath>
        requires choosing a basis or an inner product. The double dual isomorphism <InlineMath>{'V \\to V^{**}'}</InlineMath>
        is special because it is canonical.
      </Callout>

      <h3>Transpose of a Linear Map</h3>

      <Definition title="Transpose (Dual Map)">
        <p>
          For a linear map <InlineMath>{'T: V \\to W'}</InlineMath>, the <strong>transpose</strong>
          (or <strong>dual map</strong>) is <InlineMath>{'T^*: W^* \\to V^*'}</InlineMath> defined by:
        </p>
        <MathBlock>
          {'T^*(g) = g \\circ T'}
        </MathBlock>
        <p className="mt-2">
          That is, <InlineMath>{'(T^* g)(v) = g(T(v))'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Matrix of Transpose"
        proof={
          <>
            <p>
              Let <InlineMath>{'[T]_{\\mathcal{B}}^{\\mathcal{C}} = (a_{ij})'}</InlineMath>. This means
              <InlineMath>{'T(v_j) = \\sum_i a_{ij} w_i'}</InlineMath>.
            </p>
            <p className="mt-2">
              Compute <InlineMath>{'T^*(w_i^*)(v_j) = w_i^*(T(v_j)) = w_i^*(\\sum_k a_{kj} w_k) = a_{ij}'}</InlineMath>.
            </p>
            <p className="mt-2">
              So <InlineMath>{'T^*(w_i^*) = \\sum_j a_{ij} v_j^*'}</InlineMath>, meaning the matrix of <InlineMath>{'T^*'}</InlineMath>
              has <InlineMath>{'a_{ij}'}</InlineMath> in position <InlineMath>{'(j, i)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          With dual bases, the matrix of <InlineMath>{'T^*'}</InlineMath> is the transpose of the matrix of <InlineMath>T</InlineMath>:
        </p>
        <MathBlock>
          {'[T^*]_{\\mathcal{C}^*}^{\\mathcal{B}^*} = ([T]_{\\mathcal{B}}^{\\mathcal{C}})^t'}
        </MathBlock>
      </Theorem>

      <h3>Annihilators</h3>

      <Definition title="Annihilator">
        <p>
          For a subspace <InlineMath>{'W \\subseteq V'}</InlineMath>, the <strong>annihilator</strong> of <InlineMath>W</InlineMath> is:
        </p>
        <MathBlock>
          {'W^0 = \\{f \\in V^* : f(w) = 0 \\text{ for all } w \\in W\\}'}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{'W^0'}</InlineMath> is a subspace of <InlineMath>{'V^*'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Dimension of Annihilator"
        proof={
          <>
            <p>
              Extend a basis <InlineMath>{'\\{w_1, \\ldots, w_k\\}'}</InlineMath> of <InlineMath>W</InlineMath>
              to a basis <InlineMath>{'\\{w_1, \\ldots, w_k, v_1, \\ldots, v_{n-k}\\}'}</InlineMath> of <InlineMath>V</InlineMath>.
            </p>
            <p className="mt-2">
              The dual basis elements <InlineMath>{'v_1^*, \\ldots, v_{n-k}^*'}</InlineMath> form a basis for <InlineMath>{'W^0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'\\dim W^0 = \\dim V - \\dim W'}</InlineMath>
        </p>
        <p className="mt-2">
          Furthermore, under the canonical isomorphism <InlineMath>{'V \\cong V^{**}'}</InlineMath>:
          <InlineMath>{'(W^0)^0 = W'}</InlineMath>.
        </p>
      </Theorem>

      <h3>Inner Product and Duality</h3>

      <Theorem title="Riesz Representation"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\Psi: V \\to V^*'}</InlineMath> by <InlineMath>{'\\Psi(v)(w) = \\langle w, v \\rangle'}</InlineMath>.
            </p>
            <p className="mt-2">
              This is linear (conjugate-linear for complex spaces) and injective (by non-degeneracy of inner product).
              By dimension count, it is an isomorphism.
            </p>
          </>
        }
      >
        <p>
          On an inner product space <InlineMath>V</InlineMath>, every linear functional <InlineMath>{'f \\in V^*'}</InlineMath>
          has the form <InlineMath>{'f(v) = \\langle v, u \\rangle'}</InlineMath> for a unique <InlineMath>{'u \\in V'}</InlineMath>.
        </p>
        <p className="mt-2">
          This gives an isomorphism <InlineMath>{'V \\cong V^*'}</InlineMath> (conjugate-linear for complex spaces).
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Physics Notation:</strong> In physics (Dirac notation), vectors in <InlineMath>V</InlineMath>
        are "kets" <InlineMath>{'|v\\rangle'}</InlineMath> and dual vectors are "bras" <InlineMath>{'\\langle f|'}</InlineMath>.
        The pairing is written <InlineMath>{'\\langle f | v \\rangle'}</InlineMath>. With an inner product,
        the correspondence <InlineMath>{'|v\\rangle \\leftrightarrow \\langle v|'}</InlineMath> is the Riesz isomorphism.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> The dual space <InlineMath>{'V^*'}</InlineMath> consists of linear functionals
        on <InlineMath>V</InlineMath>. The dual basis <InlineMath>{'\\{v_i^*\\}'}</InlineMath> satisfies
        <InlineMath>{'v_i^*(v_j) = \\delta_{ij}'}</InlineMath>. The double dual <InlineMath>{'V^{**}'}</InlineMath>
        is canonically isomorphic to <InlineMath>V</InlineMath>. The transpose <InlineMath>{'T^*'}</InlineMath>
        has the transposed matrix. Annihilators complement subspaces in the dual.
      </Callout>
    </LessonLayout>
  );
}
