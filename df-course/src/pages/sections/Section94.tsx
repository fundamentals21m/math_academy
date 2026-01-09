import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section94() {
  return (
    <LessonLayout sectionId={94}>
      <h2>Induced Characters</h2>
      <p>
        <strong>Induced representations</strong> construct representations of a group <InlineMath>G</InlineMath>
        from representations of a subgroup <InlineMath>H</InlineMath>. The induced character
        formula and <strong>Frobenius reciprocity</strong> are central tools in representation
        theory, connecting induction and restriction operations.
      </p>

      <Callout type="info">
        <strong>Building Representations:</strong> Induction lets us build "big" representations
        from "small" ones. Combined with restriction, this gives powerful tools for analyzing
        the representation theory of groups via their subgroups.
      </Callout>

      <h3>Induced Representations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Let <InlineMath>H \leq G</InlineMath> and <InlineMath>W</InlineMath> a representation
          of <InlineMath>H</InlineMath>. The <strong>induced representation</strong>
          <InlineMath>\text{"{Ind}"}_H^G(W)</InlineMath> is:
        </p>
        <MathBlock>{`\\text{Ind}_H^G(W) = \\mathbb{C}[G] \\otimes_{\\mathbb{C}[H]} W`}</MathBlock>
        <p className="mt-3">
          As a vector space:
        </p>
        <MathBlock>{`\\text{Ind}_H^G(W) = \\bigoplus_{g \\in G/H} gW`}</MathBlock>
        <p className="mt-3">
          with dimension <InlineMath>\dim(\text{"{Ind}"}_H^G(W)) = [G:H] \cdot \dim(W)</InlineMath>.
        </p>
      </div>

      <h3>The Induced Character Formula</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          If <InlineMath>\psi</InlineMath> is a character of <InlineMath>H</InlineMath>, the
          induced character <InlineMath>\text{"{Ind}"}_H^G(\psi)</InlineMath> is given by:
        </p>
        <MathBlock>{`\\text{Ind}_H^G(\\psi)(g) = \\frac{1}{|H|} \\sum_{x \\in G, x^{-1}gx \\in H} \\psi(x^{-1}gx)`}</MathBlock>
        <p className="mt-3">Equivalently:</p>
        <MathBlock>{`\\text{Ind}_H^G(\\psi)(g) = \\sum_{x \\in G/H, x^{-1}gx \\in H} \\psi(x^{-1}gx)`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Key Properties</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\text{"{Ind}"}_H^G(\psi)(1) = [G:H] \cdot \psi(1)</InlineMath></li>
          <li><InlineMath>\text{"{Ind}"}_H^G(\psi_1 + \psi_2) = \text{"{Ind}"}_H^G(\psi_1) + \text{"{Ind}"}_H^G(\psi_2)</InlineMath></li>
          <li><InlineMath>\text{"{Ind}"}_H^G(1_H) = 1_G^{"{\\uparrow H}"}</InlineMath> is the permutation character
            on <InlineMath>G/H</InlineMath></li>
        </ul>
      </div>

      <h3>Frobenius Reciprocity</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Frobenius Reciprocity)</h4>
        <p>
          For characters <InlineMath>\chi</InlineMath> of <InlineMath>G</InlineMath>
          and <InlineMath>\psi</InlineMath> of <InlineMath>H \leq G</InlineMath>:
        </p>
        <MathBlock>{`\\langle \\text{Ind}_H^G(\\psi), \\chi \\rangle_G = \\langle \\psi, \\text{Res}_H^G(\\chi) \\rangle_H`}</MathBlock>
        <p className="mt-3">
          Induction is adjoint to restriction!
        </p>
      </div>

      <Callout type="info">
        <strong>What This Means:</strong> The multiplicity of an irreducible <InlineMath>\chi</InlineMath>
        in an induced representation equals the multiplicity of <InlineMath>\psi</InlineMath>
        in the restriction of <InlineMath>\chi</InlineMath>.
      </Callout>

      <h3>Computing Examples</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Inducing from <InlineMath>A_3</InlineMath> to <InlineMath>S_3</InlineMath></p>
        <p className="mt-2">
          <InlineMath>A_3 = \{"{1, (123), (132)}"}\} \cong \mathbb{"{Z}"}/3</InlineMath> has irreducible
          characters <InlineMath>\psi_0 = 1</InlineMath>, <InlineMath>\psi_1</InlineMath>, <InlineMath>\psi_2</InlineMath>
          (sending generator to <InlineMath>1, \omega, \omega^2</InlineMath>).
        </p>
        <p className="mt-2">
          <InlineMath>\text{"{Ind}"}_{"{A_3}"}^{"{S_3}"}(\psi_0) = \text{"{Ind}"}(1) = 1 + \chi_{"{\\text{sign}}"}</InlineMath>
          (the induced trivial character is the permutation character on <InlineMath>S_3/A_3</InlineMath>).
        </p>
        <p className="mt-2">
          <InlineMath>\text{"{Ind}"}_{"{A_3}"}^{"{S_3}"}(\psi_1) = \text{"{Ind}"}_{"{A_3}"}^{"{S_3}"}(\psi_2) = \chi_{"{\\text{std}}"}</InlineMath>
          (the 2-dimensional standard representation).
        </p>
      </div>

      <h3>Mackey's Formula</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Mackey)</h4>
        <p>
          For subgroups <InlineMath>H, K \leq G</InlineMath> and <InlineMath>H</InlineMath>-module <InlineMath>W</InlineMath>:
        </p>
        <MathBlock>{`\\text{Res}_K^G(\\text{Ind}_H^G(W)) \\cong \\bigoplus_{s \\in K \\backslash G / H} \\text{Ind}_{K \\cap sHs^{-1}}^K(sW)`}</MathBlock>
        <p className="mt-3">
          where the sum is over double coset representatives.
        </p>
      </div>

      <p>
        Mackey's formula describes how induction and restriction interact, which is
        essential for analyzing induced representations.
      </p>

      <h3>Monomial Groups</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A group <InlineMath>G</InlineMath> is <strong>monomial</strong> if every irreducible
          character is induced from a 1-dimensional character of some subgroup.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>All abelian groups (trivially)</li>
          <li>All supersolvable groups</li>
          <li><InlineMath>S_n</InlineMath> for all <InlineMath>n</InlineMath></li>
          <li><InlineMath>A_4</InlineMath> is monomial, but <InlineMath>A_5</InlineMath> is not</li>
        </ul>
      </div>

      <h3>The Artin Induction Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Artin)</h4>
        <p>
          Every character of <InlineMath>G</InlineMath> is a <InlineMath>\mathbb{"{Q}"}</InlineMath>-linear
          combination of characters induced from cyclic subgroups.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Brauer)</h4>
        <p>
          Every character is a <InlineMath>\mathbb{"{Z}"}</InlineMath>-linear combination of
          characters induced from elementary subgroups (direct products of cyclic
          and <InlineMath>p</InlineMath>-groups).
        </p>
      </div>

      <h3>Applications</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Counting Fixed Points</p>
        <p className="mt-2">
          If <InlineMath>G</InlineMath> acts on a set <InlineMath>X</InlineMath>, the permutation
          character <InlineMath>\chi(g) = |X^g|</InlineMath> (fixed points of <InlineMath>g</InlineMath>).
        </p>
        <p className="mt-2">
          Decomposing <InlineMath>\chi</InlineMath> into irreducibles using Frobenius reciprocity
          gives information about the action.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Induced representations extend <InlineMath>H</InlineMath>-representations
        to <InlineMath>G</InlineMath>-representations, with explicit character formula.
        Frobenius reciprocity makes induction adjoint to restriction, enabling powerful
        calculations. Mackey's formula describes the interaction of induction and
        restriction. The Artin induction theorem shows all characters come from
        induced characters of cyclic subgroups. These tools are fundamental for
        analyzing group representations through their subgroups.
      </Callout>
    </LessonLayout>
  );
}
