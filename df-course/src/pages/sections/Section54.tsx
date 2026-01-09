import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2>Vector Space Definitions</h2>

      <p>
        Vector spaces are modules over fields. The added structure of a field—namely, that every
        nonzero element has a multiplicative inverse—leads to much stronger results: every vector
        space has a basis, and the dimension is well-defined. This section develops these fundamental
        concepts.
      </p>

      <h3>Basic Definitions</h3>

      <Definition title="Vector Space">
        <p>
          A <strong>vector space</strong> over a field <InlineMath>F</InlineMath> is an <InlineMath>F</InlineMath>-module.
          That is, an abelian group <InlineMath>V</InlineMath> with scalar multiplication
          <InlineMath>{'F \\times V \\to V'}</InlineMath> satisfying the module axioms.
        </p>
        <p className="mt-2">
          Elements of <InlineMath>V</InlineMath> are called <strong>vectors</strong>; elements of <InlineMath>F</InlineMath>
          are called <strong>scalars</strong>.
        </p>
      </Definition>

      <Example title="Standard Examples">
        <p>
          <strong><InlineMath>{'F^n'}</InlineMath>:</strong> The set of <InlineMath>n</InlineMath>-tuples
          <InlineMath>{'(a_1, \\ldots, a_n)'}</InlineMath> with componentwise operations.
        </p>
        <p className="mt-2">
          <strong><InlineMath>F[x]</InlineMath>:</strong> Polynomials over <InlineMath>F</InlineMath> with
          usual addition and scalar multiplication.
        </p>
        <p className="mt-2">
          <strong><InlineMath>{'F^{m \\times n}'}</InlineMath>:</strong> The set of <InlineMath>{'m \\times n'}</InlineMath>
          matrices over <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2">
          <strong><InlineMath>{'C[a, b]'}</InlineMath>:</strong> Continuous real-valued functions on <InlineMath>{'[a, b]'}</InlineMath>
          (a vector space over <InlineMath>{'\\mathbb{R}'}</InlineMath>).
        </p>
      </Example>

      <Definition title="Subspace">
        <p>
          A <strong>subspace</strong> of a vector space <InlineMath>V</InlineMath> is a subset <InlineMath>W</InlineMath>
          that is itself a vector space under the same operations.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>{'W \\neq \\emptyset'}</InlineMath> and <InlineMath>W</InlineMath> is closed under
          addition and scalar multiplication.
        </p>
      </Definition>

      <h3>Linear Independence and Span</h3>

      <Definition title="Linear Combination">
        <p>
          A <strong>linear combination</strong> of vectors <InlineMath>{'v_1, \\ldots, v_n'}</InlineMath> is
          an expression <InlineMath>{'a_1 v_1 + a_2 v_2 + \\cdots + a_n v_n'}</InlineMath> where <InlineMath>{'a_i \\in F'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Span">
        <p>
          The <strong>span</strong> of a set <InlineMath>S</InlineMath> of vectors is the set of all finite
          linear combinations of vectors from <InlineMath>S</InlineMath>:
        </p>
        <MathBlock>
          {'\\text{span}(S) = \\left\\{\\sum_{i=1}^{n} a_i v_i : n \\geq 0, a_i \\in F, v_i \\in S\\right\\}'}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{'\\text{span}(S)'}</InlineMath> is the smallest subspace containing <InlineMath>S</InlineMath>.
        </p>
      </Definition>

      <Definition title="Linear Independence">
        <p>
          Vectors <InlineMath>{'v_1, \\ldots, v_n'}</InlineMath> are <strong>linearly independent</strong> if
        </p>
        <MathBlock>
          {'a_1 v_1 + a_2 v_2 + \\cdots + a_n v_n = 0 \\implies a_1 = a_2 = \\cdots = a_n = 0'}
        </MathBlock>
        <p className="mt-2">
          Otherwise, they are <strong>linearly dependent</strong>.
        </p>
      </Definition>

      <Example title="Testing Linear Independence">
        <p>
          Are <InlineMath>{'v_1 = (1, 2, 3)'}</InlineMath>, <InlineMath>{'v_2 = (4, 5, 6)'}</InlineMath>,
          <InlineMath>{'v_3 = (7, 8, 9)'}</InlineMath> linearly independent in <InlineMath>{'\\mathbb{R}^3'}</InlineMath>?
        </p>
        <p className="mt-2">
          Solve <InlineMath>{'a_1 v_1 + a_2 v_2 + a_3 v_3 = 0'}</InlineMath>. This gives the system:
        </p>
        <MathBlock>
          {'a_1 + 4a_2 + 7a_3 = 0, \\quad 2a_1 + 5a_2 + 8a_3 = 0, \\quad 3a_1 + 6a_2 + 9a_3 = 0'}
        </MathBlock>
        <p className="mt-2">
          Row reduction shows <InlineMath>{'a_1 = 1, a_2 = -2, a_3 = 1'}</InlineMath> is a solution, so they are
          linearly dependent: <InlineMath>{'v_1 - 2v_2 + v_3 = 0'}</InlineMath>.
        </p>
      </Example>

      <h3>Bases and Dimension</h3>

      <Definition title="Basis">
        <p>
          A <strong>basis</strong> of a vector space <InlineMath>V</InlineMath> is a set <InlineMath>B</InlineMath>
          of vectors that is:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>Linearly independent</li>
          <li>Spans <InlineMath>V</InlineMath>: <InlineMath>{'\\text{span}(B) = V'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          Equivalently, every vector in <InlineMath>V</InlineMath> can be uniquely written as a finite
          linear combination of basis vectors.
        </p>
      </Definition>

      <Theorem title="Existence of Bases"
        proof={
          <>
            <p>
              Use Zorn's Lemma on the collection of linearly independent sets, ordered by inclusion.
              The union of a chain of linearly independent sets is linearly independent.
            </p>
            <p className="mt-2">
              A maximal linearly independent set must span (otherwise we could add more vectors).
            </p>
          </>
        }
      >
        <p>
          Every vector space has a basis.
        </p>
      </Theorem>

      <Theorem title="All Bases Have Same Cardinality"
        proof={
          <>
            <p>
              For finite-dimensional spaces: if <InlineMath>{'\\{v_1, \\ldots, v_m\\}'}</InlineMath> spans and
              <InlineMath>{'\\{w_1, \\ldots, w_n\\}'}</InlineMath> is independent, then <InlineMath>{'n \\leq m'}</InlineMath>.
              This is the Steinitz exchange lemma.
            </p>
            <p className="mt-2">
              Apply in both directions to show two bases have the same size.
            </p>
            <p className="mt-2">
              For infinite-dimensional spaces, cardinal arithmetic arguments apply.
            </p>
          </>
        }
      >
        <p>
          Any two bases of a vector space have the same cardinality.
        </p>
      </Theorem>

      <Definition title="Dimension">
        <p>
          The <strong>dimension</strong> of a vector space <InlineMath>V</InlineMath>, denoted <InlineMath>{'\\dim V'}</InlineMath>
          or <InlineMath>{'\\dim_F V'}</InlineMath>, is the cardinality of any basis.
        </p>
        <p className="mt-2">
          <InlineMath>V</InlineMath> is <strong>finite-dimensional</strong> if it has a finite basis.
        </p>
      </Definition>

      <Example title="Dimensions of Standard Spaces">
        <p>
          <InlineMath>{'\\dim F^n = n'}</InlineMath> (standard basis <InlineMath>{'e_1, \\ldots, e_n'}</InlineMath>)
        </p>
        <p className="mt-2">
          <InlineMath>{'\\dim F[x] = \\infty'}</InlineMath> (basis <InlineMath>{'\\{1, x, x^2, \\ldots\\}'}</InlineMath>)
        </p>
        <p className="mt-2">
          <InlineMath>{'\\dim F[x]_{\\leq n} = n + 1'}</InlineMath> (polynomials of degree <InlineMath>{'\\leq n'}</InlineMath>)
        </p>
        <p className="mt-2">
          <InlineMath>{'\\dim F^{m \\times n} = mn'}</InlineMath> (matrix units <InlineMath>{'E_{ij}'}</InlineMath>)
        </p>
      </Example>

      <Theorem title="Dimension of Subspaces"
        proof={
          <>
            <p>
              A linearly independent set in <InlineMath>W</InlineMath> is linearly independent in <InlineMath>V</InlineMath>,
              so its size is bounded by <InlineMath>{'\\dim V'}</InlineMath>.
            </p>
            <p className="mt-2">
              Equality forces <InlineMath>{'W = V'}</InlineMath> because a maximal independent set in <InlineMath>W</InlineMath>
              of size <InlineMath>{'\\dim V'}</InlineMath> spans <InlineMath>V</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>W</InlineMath> is a subspace of a finite-dimensional <InlineMath>V</InlineMath>, then
        </p>
        <MathBlock>
          {'\\dim W \\leq \\dim V'}
        </MathBlock>
        <p className="mt-2">
          with equality iff <InlineMath>{'W = V'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Dimension Formula for Sum"
        proof={
          <>
            <p>
              Start with a basis for <InlineMath>{'U \\cap W'}</InlineMath>, extend to a basis for <InlineMath>U</InlineMath>,
              and separately extend to a basis for <InlineMath>W</InlineMath>. Together these span <InlineMath>{'U + W'}</InlineMath>.
              Count carefully.
            </p>
          </>
        }
      >
        <p>
          For subspaces <InlineMath>{'U, W'}</InlineMath> of a finite-dimensional space:
        </p>
        <MathBlock>
          {'\\dim(U + W) = \\dim U + \\dim W - \\dim(U \\cap W)'}
        </MathBlock>
      </Theorem>

      <h3>Coordinates</h3>

      <Definition title="Coordinate Vector">
        <p>
          If <InlineMath>{'\\mathcal{B} = (v_1, \\ldots, v_n)'}</InlineMath> is an ordered basis for <InlineMath>V</InlineMath>
          and <InlineMath>{'v = a_1 v_1 + \\cdots + a_n v_n'}</InlineMath>, then the <strong>coordinate vector</strong>
          of <InlineMath>v</InlineMath> with respect to <InlineMath>{'\\mathcal{B}'}</InlineMath> is:
        </p>
        <MathBlock>
          {'[v]_{\\mathcal{B}} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n \\end{pmatrix}'}
        </MathBlock>
      </Definition>

      <Theorem title="Coordinate Map is an Isomorphism"
        proof={
          <>
            <p>
              The map <InlineMath>{'v \\mapsto [v]_{\\mathcal{B}}'}</InlineMath> is clearly linear.
              It is injective (distinct vectors have distinct coordinates) and surjective
              (every tuple gives a vector).
            </p>
          </>
        }
      >
        <p>
          The coordinate map <InlineMath>{'[\\cdot]_{\\mathcal{B}}: V \\to F^n'}</InlineMath> is an isomorphism
          of vector spaces. Thus every <InlineMath>n</InlineMath>-dimensional vector space is isomorphic to <InlineMath>{'F^n'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Summary:</strong> Vector spaces are modules over fields. Every vector space has a basis,
        and all bases have the same cardinality (dimension). A basis provides coordinates, identifying
        any <InlineMath>n</InlineMath>-dimensional space with <InlineMath>{'F^n'}</InlineMath>. The dimension
        formula <InlineMath>{'\\dim(U + W) = \\dim U + \\dim W - \\dim(U \\cap W)'}</InlineMath> relates subspace dimensions.
      </Callout>
    </LessonLayout>
  );
}
