import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section91() {
  return (
    <LessonLayout sectionId={91}>
      <h2>Character Theory</h2>
      <p>
        <strong>Characters</strong> are traces of representation matrices. Despite being
        just complex numbers, they capture essential information about representations and
        satisfy beautiful <strong>orthogonality relations</strong>. Character theory provides
        the most powerful computational tool in representation theory.
      </p>

      <Callout type="info">
        <strong>The Power of Characters:</strong> Characters determine representations
        up to isomorphism, are constant on conjugacy classes, and satisfy orthogonality
        relations that enable explicit calculations.
      </Callout>

      <h3>Definition of Characters</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>character</strong> of a representation <InlineMath>\rho: G \to GL(V)</InlineMath>
          is the function <InlineMath>\chi: G \to \mathbb{"{C}"}</InlineMath> defined by:
        </p>
        <MathBlock>{`\\chi(g) = \\text{tr}(\\rho(g))`}</MathBlock>
        <p className="mt-3">
          An <strong>irreducible character</strong> is the character of an irreducible representation.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Basic Properties</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\chi(1) = \dim(V)</InlineMath> (the degree of the representation)</li>
          <li><InlineMath>\chi(g^{"{-1}"}) = \overline{"{\\chi(g)}"}</InlineMath></li>
          <li><InlineMath>\chi(hgh^{"{-1}"}) = \chi(g)</InlineMath> (class function)</li>
          <li><InlineMath>\chi_1 \oplus \chi_2 = \chi_1 + \chi_2</InlineMath></li>
          <li><InlineMath>\chi_1 \otimes \chi_2</InlineMath> corresponds to pointwise product</li>
        </ul>
      </div>

      <h3>Class Functions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A <strong>class function</strong> is a function <InlineMath>f: G \to \mathbb{"{C}"}</InlineMath>
          that is constant on conjugacy classes: <InlineMath>f(hgh^{"{-1}"}) = f(g)</InlineMath>.
        </p>
        <p className="mt-3">
          The space of class functions forms a complex vector space of
          dimension = number of conjugacy classes.
        </p>
      </div>

      <h3>The First Orthogonality Relations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Row Orthogonality</h4>
        <p>
          For irreducible characters <InlineMath>\chi_i, \chi_j</InlineMath>:
        </p>
        <MathBlock>{`\\langle \\chi_i, \\chi_j \\rangle = \\frac{1}{|G|} \\sum_{g \\in G} \\chi_i(g) \\overline{\\chi_j(g)} = \\delta_{ij}`}</MathBlock>
        <p className="mt-3">
          The irreducible characters form an orthonormal set with respect to this inner product.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Completeness</h4>
        <p>
          The irreducible characters form an <strong>orthonormal basis</strong> for the
          space of class functions.
        </p>
        <p className="mt-3">
          In particular: number of irreducible characters = number of conjugacy classes.
        </p>
      </div>

      <h3>The Second Orthogonality Relations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Column Orthogonality</h4>
        <p>
          For conjugacy classes <InlineMath>C_i, C_j</InlineMath> with representatives <InlineMath>g_i, g_j</InlineMath>:
        </p>
        <MathBlock>{`\\sum_{\\chi \\text{ irred}} \\chi(g_i) \\overline{\\chi(g_j)} = \\frac{|G|}{|C_i|} \\delta_{ij}`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>|C_i|</InlineMath> is the size of the conjugacy class.
        </p>
      </div>

      <h3>The Character Table</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>character table</strong> of <InlineMath>G</InlineMath> is the matrix
          whose rows are indexed by irreducible characters and columns by conjugacy classes,
          with entry <InlineMath>\chi_i(g_j)</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Character Table of <InlineMath>S_3</InlineMath></p>
        <div className="mt-2 overflow-x-auto">
          <table className="text-dark-300 text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="py-1 pr-4"></th>
                <th className="py-1 px-3"><InlineMath>(1)</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>(12)</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>(123)</InlineMath></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_1</InlineMath> (trivial)</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_2</InlineMath> (sign)</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr>
                <td className="py-1 pr-4"><InlineMath>\chi_3</InlineMath> (standard)</td>
                <td className="py-1 px-3 text-center">2</td>
                <td className="py-1 px-3 text-center">0</td>
                <td className="py-1 px-3 text-center">-1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-dark-300 text-sm">
          Class sizes: 1, 3, 2
        </p>
      </div>

      <h3>Applications</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Decomposing Representations</h4>
        <p>
          If <InlineMath>\chi = \sum_i n_i \chi_i</InlineMath> (multiplicities <InlineMath>n_i</InlineMath>),
          then:
        </p>
        <MathBlock>{`n_i = \\langle \\chi, \\chi_i \\rangle = \\frac{1}{|G|} \\sum_{g \\in G} \\chi(g) \\overline{\\chi_i(g)}`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Criterion for Irreducibility</h4>
        <MathBlock>{`\\chi \\text{ is irreducible} \\iff \\langle \\chi, \\chi \\rangle = 1`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Characters Determine Representations</h4>
        <p>
          Two representations are isomorphic if and only if they have the same character.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Characters are traces of representation matrices,
        constant on conjugacy classes. The irreducible characters form an orthonormal
        basis for class functions (first orthogonality). Column orthogonality gives
        relations between character values at different classes. The character table
        encodes all representation-theoretic information. Characters can decompose
        representations and test irreducibility, making them the primary computational
        tool in representation theory.
      </Callout>
    </LessonLayout>
  );
}
