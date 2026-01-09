import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section89() {
  return (
    <LessonLayout sectionId={89}>
      <h2>Linear Actions and Group Rings</h2>
      <p>
        The <strong>group ring</strong> <InlineMath>k[G]</InlineMath> translates group
        representation theory into module theory. Representations become modules over
        the group ring, allowing us to use powerful tools from ring theory to study
        how groups act on vector spaces.
      </p>

      <Callout type="info">
        <strong>The Bridge:</strong> A representation <InlineMath>\rho: G \to GL(V)</InlineMath>
        is the same as a <InlineMath>k[G]</InlineMath>-module structure on <InlineMath>V</InlineMath>.
        This equivalence lets us apply homological and ring-theoretic methods to representation theory.
      </Callout>

      <h3>The Group Ring</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For a group <InlineMath>G</InlineMath> and commutative ring <InlineMath>k</InlineMath>,
          the <strong>group ring</strong> <InlineMath>k[G]</InlineMath> is the free <InlineMath>k</InlineMath>-module
          with basis <InlineMath>G</InlineMath>, with multiplication extending the group operation:
        </p>
        <MathBlock>{`k[G] = \\left\\{\\sum_{g \\in G} a_g g \\mid a_g \\in k, \\text{ almost all } a_g = 0\\right\\}`}</MathBlock>
        <MathBlock>{`\\left(\\sum a_g g\\right)\\left(\\sum b_h h\\right) = \\sum_{g,h} a_g b_h (gh)`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\mathbb{"{C}"}[\mathbb{"{Z}"}/n] \cong \mathbb{"{C}"}[x]/(x^n - 1)</InlineMath></li>
          <li><InlineMath>\mathbb{"{R}"}[\mathbb{"{Z}"}/2] \cong \mathbb{"{R}"} \times \mathbb{"{R}"}</InlineMath>
            (via <InlineMath>a + bg \mapsto (a+b, a-b)</InlineMath>)</li>
          <li><InlineMath>\mathbb{"{Z}"}[\mathbb{"{Z}"}] = \mathbb{"{Z}"}[t, t^{"{-1}"}]</InlineMath> (Laurent polynomials)</li>
        </ul>
      </div>

      <h3>Representations as Modules</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Equivalence of Categories</h4>
        <p>
          There is an equivalence:
        </p>
        <MathBlock>{`\\{\\text{representations of } G \\text{ over } k\\} \\longleftrightarrow \\{k[G]\\text{-modules}\\}`}</MathBlock>
        <p className="mt-3">
          A representation <InlineMath>\rho: G \to GL(V)</InlineMath> gives <InlineMath>V</InlineMath>
          a <InlineMath>k[G]</InlineMath>-module structure: <InlineMath>g \cdot v = \rho(g)(v)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Dictionary</p>
        <div className="mt-2 text-dark-300">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">Representation</td>
                <td className="py-1"><InlineMath>k[G]</InlineMath>-module</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">Subrepresentation</td>
                <td className="py-1">Submodule</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">Irreducible representation</td>
                <td className="py-1">Simple module</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">Intertwiner</td>
                <td className="py-1">Module homomorphism</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">Completely reducible</td>
                <td className="py-1">Semisimple module</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Structure of Group Rings</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Basic Properties</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><InlineMath>k[G]</InlineMath> is commutative iff <InlineMath>G</InlineMath> is abelian</li>
          <li><InlineMath>\dim_k k[G] = |G|</InlineMath> when <InlineMath>G</InlineMath> is finite</li>
          <li>The center <InlineMath>Z(k[G])</InlineMath> has dimension equal to the number of conjugacy classes</li>
          <li><InlineMath>k[G]</InlineMath> has a natural involution <InlineMath>g \mapsto g^{"{-1}"}</InlineMath></li>
        </ol>
      </div>

      <h3>The Augmentation</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>augmentation map</strong> is the ring homomorphism:
        </p>
        <MathBlock>{`\\varepsilon: k[G] \\to k, \\quad \\sum a_g g \\mapsto \\sum a_g`}</MathBlock>
        <p className="mt-3">
          The <strong>augmentation ideal</strong> is <InlineMath>I(G) = \ker(\varepsilon)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Properties</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>I(G)</InlineMath> is spanned by <InlineMath>\{"{g - 1 \\mid g \\in G}"}\</InlineMath></li>
          <li><InlineMath>k[G]/I(G) \cong k</InlineMath> (the trivial representation)</li>
          <li><InlineMath>I(G)^n / I(G)^{"{n+1}"}</InlineMath> relates to the lower central series of <InlineMath>G</InlineMath></li>
        </ul>
      </div>

      <h3>Semisimplicity</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Maschke)</h4>
        <p>
          If <InlineMath>G</InlineMath> is a finite group and <InlineMath>k</InlineMath> is a field
          with <InlineMath>\text{"{char}"}(k) \nmid |G|</InlineMath>,
          then <InlineMath>k[G]</InlineMath> is semisimple.
        </p>
      </div>

      <Callout type="warning">
        <strong>Modular case:</strong> When <InlineMath>\text{"{char}"}(k) \mid |G|</InlineMath>,
        <InlineMath>k[G]</InlineMath> is NOT semisimple. This is the realm of <strong>modular representation theory</strong>.
      </Callout>

      <h3>Induced Modules</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For <InlineMath>H \leq G</InlineMath> and an <InlineMath>H</InlineMath>-module <InlineMath>V</InlineMath>,
          the <strong>induced module</strong> is:
        </p>
        <MathBlock>{`\\text{Ind}_H^G V = k[G] \\otimes_{k[H]} V`}</MathBlock>
        <p className="mt-3">
          This is the module-theoretic version of induced representations.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Frobenius Reciprocity</h4>
        <MathBlock>{`\\text{Hom}_{k[G]}(\\text{Ind}_H^G V, W) \\cong \\text{Hom}_{k[H]}(V, \\text{Res}_H^G W)`}</MathBlock>
        <p className="mt-3">
          Induction is left adjoint to restriction.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> The group ring <InlineMath>k[G]</InlineMath> converts
        representation theory into module theory. Representations are <InlineMath>k[G]</InlineMath>-modules,
        irreducibles are simple modules, and complete reducibility is semisimplicity.
        Maschke's theorem says <InlineMath>k[G]</InlineMath> is semisimple when characteristic
        doesn't divide the group order. Induction and restriction become tensor and
        restriction of modules, with Frobenius reciprocity as the adjunction.
      </Callout>
    </LessonLayout>
  );
}
