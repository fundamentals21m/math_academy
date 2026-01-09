import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section88() {
  return (
    <LessonLayout sectionId={88}>
      <h2>Group Extensions and H^2</h2>
      <p>
        The second cohomology group <InlineMath>H^2(G, A)</InlineMath> classifies
        <strong> group extensions</strong> of <InlineMath>G</InlineMath> by <InlineMath>A</InlineMath>.
        This profound connection between cohomology and group structure is essential for
        understanding how groups can be built from simpler pieces.
      </p>

      <Callout type="info">
        <strong>Central Problem:</strong> Given groups <InlineMath>A</InlineMath>
        and <InlineMath>G</InlineMath>, what groups <InlineMath>E</InlineMath> fit into
        a short exact sequence <InlineMath>1 \to A \to E \to G \to 1</InlineMath>?
        The answer involves <InlineMath>H^2</InlineMath>.
      </Callout>

      <h3>Group Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An <strong>extension</strong> of <InlineMath>G</InlineMath> by <InlineMath>A</InlineMath>
          is a short exact sequence:
        </p>
        <MathBlock>{`1 \\to A \\xrightarrow{\\iota} E \\xrightarrow{\\pi} G \\to 1`}</MathBlock>
        <p className="mt-3">
          We identify <InlineMath>A</InlineMath> with its image <InlineMath>\iota(A) \trianglelefteq E</InlineMath>,
          and <InlineMath>E/A \cong G</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><strong>Split extension:</strong> <InlineMath>E = A \rtimes G</InlineMath> (semidirect product)</li>
          <li><strong>Direct product:</strong> <InlineMath>E = A \times G</InlineMath> (when <InlineMath>A</InlineMath> is central)</li>
          <li><InlineMath>1 \to \mathbb{"{Z}"}/2 \to \mathbb{"{Z}"}/4 \to \mathbb{"{Z}"}/2 \to 1</InlineMath> (non-split)</li>
          <li><InlineMath>1 \to \mathbb{"{Z}"} \to \mathbb{"{R}"} \to \mathbb{"{R}"}/\mathbb{"{Z}"} \to 1</InlineMath></li>
        </ul>
      </div>

      <h3>Equivalence of Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Two extensions <InlineMath>E</InlineMath> and <InlineMath>E'</InlineMath> are
          <strong> equivalent</strong> if there exists an isomorphism <InlineMath>\phi: E \to E'</InlineMath>
          making the diagram commute:
        </p>
        <MathBlock>{`\\begin{array}{ccccccccc}
1 & \\to & A & \\to & E & \\to & G & \\to & 1 \\\\
& & \\| & & \\downarrow \\phi & & \\| & & \\\\
1 & \\to & A & \\to & E' & \\to & G & \\to & 1
\\end{array}`}</MathBlock>
      </div>

      <h3>The Action on A</h3>

      <p>
        An extension determines an action of <InlineMath>G</InlineMath> on <InlineMath>A</InlineMath>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Construction</h4>
        <p>
          Choose a section <InlineMath>s: G \to E</InlineMath> (set-theoretic, with <InlineMath>\pi \circ s = \text{"{id}"}</InlineMath>).
        </p>
        <p className="mt-3">
          Define the action: <InlineMath>g \cdot a = s(g) a s(g)^{"{-1}"}</InlineMath>.
        </p>
        <p className="mt-3">
          This is well-defined (independent of section choice) because <InlineMath>A</InlineMath> is normal.
        </p>
      </div>

      <h3>Factor Sets and 2-Cocycles</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Given a section <InlineMath>s: G \to E</InlineMath>, the <strong>factor set</strong>
          (or <strong>2-cocycle</strong>) <InlineMath>f: G \times G \to A</InlineMath> is defined by:
        </p>
        <MathBlock>{`s(g)s(h) = f(g,h) \\cdot s(gh)`}</MathBlock>
        <p className="mt-3">
          This measures the failure of <InlineMath>s</InlineMath> to be a homomorphism.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Cocycle Condition</h4>
        <p>
          The factor set satisfies the <strong>2-cocycle identity</strong>:
        </p>
        <MathBlock>{`f(g,h) + g \\cdot f(h,k) = f(gh, k) + f(g, hk)`}</MathBlock>
        <p className="mt-3">
          This follows from associativity in <InlineMath>E</InlineMath>.
        </p>
      </div>

      <h3>The Classification Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          Let <InlineMath>A</InlineMath> be an abelian group with a fixed <InlineMath>G</InlineMath>-action.
          Then there is a bijection:
        </p>
        <MathBlock>{`H^2(G, A) \\longleftrightarrow \\{\\text{equivalence classes of extensions with given action}\\}`}</MathBlock>
        <p className="mt-3">
          The zero element of <InlineMath>H^2(G, A)</InlineMath> corresponds to the
          split extension <InlineMath>A \rtimes G</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Extensions of <InlineMath>\mathbb{"{Z}"}/2</InlineMath> by <InlineMath>\mathbb{"{Z}"}/2</InlineMath></p>
        <p className="mt-2">
          With trivial action: <InlineMath>H^2(\mathbb{"{Z}"}/2, \mathbb{"{Z}"}/2) = \mathbb{"{Z}"}/2</InlineMath>
        </p>
        <p className="mt-2">
          Two extensions:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-dark-300">
          <li><InlineMath>\mathbb{"{Z}"}/2 \times \mathbb{"{Z}"}/2</InlineMath> (split, Klein four-group)</li>
          <li><InlineMath>\mathbb{"{Z}"}/4</InlineMath> (non-split)</li>
        </ul>
      </div>

      <h3>Central Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An extension is <strong>central</strong> if <InlineMath>A \subseteq Z(E)</InlineMath>
          (equivalently, <InlineMath>G</InlineMath> acts trivially on <InlineMath>A</InlineMath>).
        </p>
      </div>

      <p>
        Central extensions are classified by <InlineMath>H^2(G, A)</InlineMath> with trivial <InlineMath>G</InlineMath>-action.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: The Heisenberg Group</p>
        <p className="mt-2">
          The Heisenberg group <InlineMath>H_3(\mathbb{"{Z}"})</InlineMath> is a central extension:
        </p>
        <MathBlock>{`1 \\to \\mathbb{Z} \\to H_3(\\mathbb{Z}) \\to \\mathbb{Z}^2 \\to 1`}</MathBlock>
        <p className="mt-2">
          Matrices of the form <InlineMath>\begin{"{pmatrix}"} 1 & a & c \\ 0 & 1 & b \\ 0 & 0 & 1 \end{"{pmatrix}"}</InlineMath>.
        </p>
      </div>

      <h3>Schur Multiplier</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>Schur multiplier</strong> of <InlineMath>G</InlineMath> is:
        </p>
        <MathBlock>{`M(G) = H^2(G, \\mathbb{C}^*) \\cong H_2(G, \\mathbb{Z})`}</MathBlock>
        <p className="mt-3">
          It classifies central extensions by <InlineMath>\mathbb{"{C}"}^*</InlineMath>,
          which are important for projective representations.
        </p>
      </div>

      <h3>Computing H^2</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">For Cyclic Groups</p>
        <p className="mt-2">
          <InlineMath>H^2(\mathbb{"{Z}"}/n, A) = A^G / nA</InlineMath> when <InlineMath>G = \mathbb{"{Z}"}/n</InlineMath>
          acts on <InlineMath>A</InlineMath>.
        </p>
        <p className="mt-2">
          For trivial action: <InlineMath>H^2(\mathbb{"{Z}"}/n, A) = A/nA</InlineMath>.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> <InlineMath>H^2(G, A)</InlineMath> classifies group
        extensions of <InlineMath>G</InlineMath> by <InlineMath>A</InlineMath> with a
        given action. Extensions are described by factor sets (2-cocycles), and equivalent
        extensions differ by coboundaries. The zero element corresponds to the split
        extension. Central extensions occur when <InlineMath>G</InlineMath> acts trivially.
        The Schur multiplier <InlineMath>H^2(G, \mathbb{"{C}"}^*)</InlineMath> controls
        projective representations.
      </Callout>
    </LessonLayout>
  );
}
