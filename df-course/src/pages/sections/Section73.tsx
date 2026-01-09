import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section73() {
  return (
    <LessonLayout sectionId={73}>
      <h2>Galois Groups of Polynomials</h2>
      <p>
        The <strong>Galois group of a polynomial</strong> is the Galois group of its splitting
        field. This group encodes how the roots can be permuted by field automorphisms and
        determines whether the polynomial is solvable by radicals.
      </p>

      <Callout type="info">
        <strong>The Connection:</strong> The Galois group of a polynomial <InlineMath>f(x)</InlineMath>
        acts on its roots by permutations. Understanding this group is the key to determining
        whether <InlineMath>f</InlineMath> can be solved using radicals.
      </Callout>

      <h3>Definition and Basic Properties</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Let <InlineMath>f(x) \in F[x]</InlineMath> be a polynomial and <InlineMath>K</InlineMath>
          its splitting field over <InlineMath>F</InlineMath>. The <strong>Galois group</strong>
          of <InlineMath>f</InlineMath> over <InlineMath>F</InlineMath> is:
        </p>
        <MathBlock>{`\\text{Gal}(f) = \\text{Gal}(K/F)`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Embedding in Symmetric Group</h4>
        <p>
          If <InlineMath>f(x)</InlineMath> has degree <InlineMath>n</InlineMath> and roots
          <InlineMath>\alpha_1, \ldots, \alpha_n</InlineMath>, then <InlineMath>\text{"{Gal}"}(f)</InlineMath>
          embeds in <InlineMath>S_n</InlineMath> via its action on the roots.
        </p>
        <MathBlock>{`\\text{Gal}(f) \\hookrightarrow S_n`}</MathBlock>
      </div>

      <p>
        The embedding depends on how we label the roots, but the image is well-defined up to conjugacy.
      </p>

      <h3>Properties Related to Irreducibility</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Transitive Action</h4>
        <p>
          <InlineMath>f(x)</InlineMath> is irreducible over <InlineMath>F</InlineMath> if and only
          if <InlineMath>\text{"{Gal}"}(f)</InlineMath> acts transitively on the roots.
        </p>
      </div>

      <p>
        <strong>Consequence:</strong> For irreducible <InlineMath>f</InlineMath> of degree <InlineMath>n</InlineMath>,
        we have <InlineMath>n \mid |\text{"{Gal}"}(f)|</InlineMath>.
      </p>

      <h3>The Discriminant</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>discriminant</strong> of a polynomial <InlineMath>f(x)</InlineMath> with
          roots <InlineMath>\alpha_1, \ldots, \alpha_n</InlineMath> is:
        </p>
        <MathBlock>{`\\Delta = \\prod_{i < j} (\\alpha_i - \\alpha_j)^2`}</MathBlock>
        <p className="mt-3">
          Equivalently, <InlineMath>\Delta = (-1)^{"{n(n-1)/2}"} \text{"{Res}"}(f, f')</InlineMath>,
          where <InlineMath>\text{"{Res}"}</InlineMath> is the resultant.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Discriminants of Low-Degree Polynomials</p>
        <p className="mt-2">
          For <InlineMath>f(x) = x^2 + bx + c</InlineMath>: <InlineMath>\Delta = b^2 - 4c</InlineMath>
        </p>
        <p className="mt-2">
          For <InlineMath>f(x) = x^3 + px + q</InlineMath>: <InlineMath>\Delta = -4p^3 - 27q^2</InlineMath>
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Discriminant Test</h4>
        <p>
          Let <InlineMath>f(x) \in F[x]</InlineMath> be separable. Then <InlineMath>\text{"{Gal}"}(f) \subseteq A_n</InlineMath>
          if and only if <InlineMath>\Delta</InlineMath> is a square in <InlineMath>F</InlineMath>.
        </p>
      </div>

      <h3>Galois Groups of Cubics</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Galois Groups of Irreducible Cubics</h4>
        <p>
          Let <InlineMath>f(x) \in \mathbb{"{Q}"}[x]</InlineMath> be an irreducible cubic. Then:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>\text{"{Gal}"}(f) = S_3</InlineMath> if <InlineMath>\Delta</InlineMath>
            is not a square in <InlineMath>\mathbb{"{Q}"}</InlineMath></li>
          <li><InlineMath>\text{"{Gal}"}(f) = A_3 \cong \mathbb{"{Z}"}/3\mathbb{"{Z}"}</InlineMath>
            if <InlineMath>\Delta</InlineMath> is a square in <InlineMath>\mathbb{"{Q}"}</InlineMath></li>
        </ul>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>f(x) = x^3 - 2</InlineMath></p>
        <p className="mt-2">
          Discriminant: <InlineMath>\Delta = -4(0)^3 - 27(-2)^2 = -108 = -27 \cdot 4</InlineMath>
        </p>
        <p className="mt-2">
          Since <InlineMath>-108</InlineMath> is not a perfect square, <InlineMath>\text{"{Gal}"}(x^3-2) = S_3</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: <InlineMath>f(x) = x^3 - 3x - 1</InlineMath></p>
        <p className="mt-2">
          Discriminant: <InlineMath>\Delta = -4(-3)^3 - 27(-1)^2 = 108 - 27 = 81 = 9^2</InlineMath>
        </p>
        <p className="mt-2">
          Since <InlineMath>\Delta = 81</InlineMath> is a perfect square, <InlineMath>\text{"{Gal}"}(f) = A_3</InlineMath>.
        </p>
        <p className="mt-2 text-dark-300">
          (This polynomial's roots are <InlineMath>2\cos(2\pi k/9)</InlineMath> for <InlineMath>k = 1, 2, 4</InlineMath>.)
        </p>
      </div>

      <h3>Galois Groups of Quartics</h3>

      <p>
        For irreducible quartics, there are five possible Galois groups (subgroups
        of <InlineMath>S_4</InlineMath> acting transitively on 4 elements):
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2"><InlineMath>S_4</InlineMath> (order 24)</h4>
          <p className="text-dark-300 text-sm">Full symmetric group</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2"><InlineMath>A_4</InlineMath> (order 12)</h4>
          <p className="text-dark-300 text-sm">Alternating group</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-purple-400 font-semibold mb-2"><InlineMath>D_4</InlineMath> (order 8)</h4>
          <p className="text-dark-300 text-sm">Dihedral group</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2"><InlineMath>V_4</InlineMath> (order 4)</h4>
          <p className="text-dark-300 text-sm">Klein four-group</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 md:col-span-2">
          <h4 className="text-red-400 font-semibold mb-2"><InlineMath>\mathbb{"{Z}"}/4\mathbb{"{Z}"}</InlineMath> (order 4)</h4>
          <p className="text-dark-300 text-sm">Cyclic group</p>
        </div>
      </div>

      <h3>The Resolvent Cubic</h3>

      <p>
        To distinguish quartic Galois groups, we use the <strong>resolvent cubic</strong>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          For quartic <InlineMath>f(x) = x^4 + px^2 + qx + r</InlineMath>, the resolvent cubic is:
        </p>
        <MathBlock>{`g(x) = x^3 - 2px^2 + (p^2 - 4r)x + q^2`}</MathBlock>
        <p className="mt-3">
          Its roots are <InlineMath>\alpha_1\alpha_2 + \alpha_3\alpha_4</InlineMath>,
          <InlineMath>\alpha_1\alpha_3 + \alpha_2\alpha_4</InlineMath>,
          <InlineMath>\alpha_1\alpha_4 + \alpha_2\alpha_3</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Algorithm for Quartic Galois Groups</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Compute the discriminant <InlineMath>\Delta</InlineMath> of <InlineMath>f</InlineMath></li>
          <li>Factor the resolvent cubic <InlineMath>g(x)</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath></li>
          <li>Use the following table:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li><InlineMath>\Delta</InlineMath> not square, <InlineMath>g</InlineMath> irreducible: <InlineMath>S_4</InlineMath></li>
              <li><InlineMath>\Delta</InlineMath> square, <InlineMath>g</InlineMath> irreducible: <InlineMath>A_4</InlineMath></li>
              <li><InlineMath>g</InlineMath> has one rational root: <InlineMath>D_4</InlineMath> or <InlineMath>\mathbb{"{Z}"}/4\mathbb{"{Z}"}</InlineMath></li>
              <li><InlineMath>g</InlineMath> splits completely: <InlineMath>V_4</InlineMath></li>
            </ul>
          </li>
        </ol>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> The Galois group of a polynomial embeds in <InlineMath>S_n</InlineMath>
        via its action on roots. Irreducibility corresponds to transitive action, and the
        discriminant determines whether the group is contained in <InlineMath>A_n</InlineMath>.
        For cubics, there are two possibilities (<InlineMath>S_3</InlineMath> or <InlineMath>A_3</InlineMath>).
        For quartics, five groups are possible, distinguished using the resolvent cubic.
        These techniques are essential for the solvability theory we'll explore next.
      </Callout>
    </LessonLayout>
  );
}
