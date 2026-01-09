import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section90() {
  return (
    <LessonLayout sectionId={90}>
      <h2>Wedderburn's Theorem</h2>
      <p>
        <strong>Wedderburn's theorem</strong> describes the structure of semisimple rings,
        showing they decompose as products of matrix rings over division rings. Combined
        with Maschke's theorem, this gives the complete structure of group algebras in
        characteristic not dividing the group order.
      </p>

      <Callout type="info">
        <strong>The Culmination:</strong> Wedderburn's theorem is the structure theorem
        for semisimple rings, analogous to the structure theorem for finitely generated
        abelian groups or the spectral theorem in linear algebra.
      </Callout>

      <h3>Semisimple Rings and Modules</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A module <InlineMath>M</InlineMath> is <strong>semisimple</strong> (or <strong>completely reducible</strong>)
          if it is a direct sum of simple modules.
        </p>
        <p className="mt-3">
          A ring <InlineMath>R</InlineMath> is <strong>(left) semisimple</strong> if it is semisimple
          as a left module over itself.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Equivalent Conditions</h4>
        <p>
          For a ring <InlineMath>R</InlineMath>, the following are equivalent:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>R</InlineMath> is left semisimple</li>
          <li>Every left <InlineMath>R</InlineMath>-module is semisimple</li>
          <li>Every left <InlineMath>R</InlineMath>-module is projective</li>
          <li>Every left <InlineMath>R</InlineMath>-module is injective</li>
          <li>Every short exact sequence of left <InlineMath>R</InlineMath>-modules splits</li>
        </ol>
      </div>

      <h3>The Wedderburn-Artin Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Wedderburn-Artin)</h4>
        <p>
          A ring <InlineMath>R</InlineMath> is semisimple if and only if:
        </p>
        <MathBlock>{`R \\cong M_{n_1}(D_1) \\times M_{n_2}(D_2) \\times \\cdots \\times M_{n_r}(D_r)`}</MathBlock>
        <p className="mt-3">
          where each <InlineMath>D_i</InlineMath> is a division ring
          and <InlineMath>M_n(D)</InlineMath> denotes <InlineMath>n \times n</InlineMath>
          matrices over <InlineMath>D</InlineMath>.
        </p>
        <p className="mt-3">
          The decomposition is unique up to permutation and isomorphism.
        </p>
      </div>

      <h3>Simple Modules</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Corollary</h4>
        <p>
          For semisimple <InlineMath>R \cong \prod_i M_{"{n_i}"}(D_i)</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li>There are exactly <InlineMath>r</InlineMath> isomorphism classes of simple <InlineMath>R</InlineMath>-modules</li>
          <li>The <InlineMath>i</InlineMath>-th simple module is <InlineMath>D_i^{"{n_i}"}</InlineMath>
            (column vectors)</li>
          <li>Each simple module appears with multiplicity <InlineMath>n_i</InlineMath>
            in <InlineMath>R</InlineMath></li>
        </ul>
      </div>

      <h3>Group Algebras</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Wedderburn for Group Algebras</h4>
        <p>
          Let <InlineMath>G</InlineMath> be a finite group and <InlineMath>k</InlineMath>
          an algebraically closed field with <InlineMath>\text{"{char}"}(k) \nmid |G|</InlineMath>. Then:
        </p>
        <MathBlock>{`k[G] \\cong M_{n_1}(k) \\times M_{n_2}(k) \\times \\cdots \\times M_{n_r}(k)`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>r</InlineMath> = number of conjugacy classes of <InlineMath>G</InlineMath>,
          and <InlineMath>n_i</InlineMath> = dimension of the <InlineMath>i</InlineMath>-th irreducible representation.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Dimension Formula</h4>
        <MathBlock>{`|G| = \\sum_{i=1}^r n_i^2`}</MathBlock>
        <p className="mt-3">
          The sum of squares of irreducible representation dimensions equals the group order.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: <InlineMath>S_3</InlineMath></p>
        <p className="mt-2">
          <InlineMath>|S_3| = 6</InlineMath>, with 3 conjugacy classes.
        </p>
        <p className="mt-2">
          Need <InlineMath>n_1^2 + n_2^2 + n_3^2 = 6</InlineMath>.
          Only solution: <InlineMath>1^2 + 1^2 + 2^2 = 6</InlineMath>.
        </p>
        <p className="mt-2">
          So: <InlineMath>\mathbb{"{C}"}[S_3] \cong \mathbb{"{C}"} \times \mathbb{"{C}"} \times M_2(\mathbb{"{C}"})</InlineMath>
        </p>
        <p className="mt-2">
          Two 1-dimensional irreps (trivial and sign) and one 2-dimensional (standard).
        </p>
      </div>

      <h3>Schur's Lemma Revisited</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Schur's Lemma</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>A nonzero homomorphism between simple modules is an isomorphism</li>
          <li><InlineMath>\text{"{End}"}_R(S)</InlineMath> is a division ring for simple module <InlineMath>S</InlineMath></li>
          <li>Over <InlineMath>\mathbb{"{C}"}</InlineMath>: <InlineMath>\text{"{End}"}_{"{\\mathbb{C}[G]}"}(V) = \mathbb{"{C}"}</InlineMath>
            for irreducible <InlineMath>V</InlineMath></li>
        </ol>
      </div>

      <h3>The Artin-Wedderburn Theorem (Full Version)</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          A ring <InlineMath>R</InlineMath> is simple Artinian (simple and Artinian)
          if and only if <InlineMath>R \cong M_n(D)</InlineMath> for some division
          ring <InlineMath>D</InlineMath> and integer <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-3">
          A ring <InlineMath>R</InlineMath> is semisimple Artinian if and only if
          it is a finite product of simple Artinian rings.
        </p>
      </div>

      <h3>Over Non-Algebraically Closed Fields</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>\mathbb{"{R}"}[C_4]</InlineMath></p>
        <p className="mt-2">
          <InlineMath>C_4 = \langle g \mid g^4 = 1 \rangle</InlineMath>.
        </p>
        <MathBlock>{`\\mathbb{R}[C_4] \\cong \\mathbb{R}[x]/(x^4 - 1) \\cong \\mathbb{R}[x]/(x-1) \\times \\mathbb{R}[x]/(x+1) \\times \\mathbb{R}[x]/(x^2+1)`}</MathBlock>
        <MathBlock>{`\\cong \\mathbb{R} \\times \\mathbb{R} \\times \\mathbb{C}`}</MathBlock>
        <p className="mt-2">
          Three irreps over <InlineMath>\mathbb{"{R}"}</InlineMath>: two 1-dimensional real, one 2-dimensional
          (but 1-dimensional over <InlineMath>\mathbb{"{C}"}</InlineMath>).
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Wedderburn's theorem states that semisimple rings
        are products of matrix rings over division rings. For group algebras over
        algebraically closed fields (characteristic not dividing group order), we
        get <InlineMath>k[G] \cong \prod M_{"{n_i}"}(k)</InlineMath> where <InlineMath>r</InlineMath>
        equals the number of conjugacy classes and <InlineMath>\sum n_i^2 = |G|</InlineMath>.
        This completely describes the representation theory of finite groups in
        the semisimple case.
      </Callout>
    </LessonLayout>
  );
}
