import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section92() {
  return (
    <LessonLayout sectionId={92}>
      <h2>Characters of Small Groups</h2>
      <p>
        Computing character tables for small groups illustrates the general theory
        and develops computational skill. We examine cyclic groups, dihedral groups,
        symmetric groups, and the quaternion group, revealing patterns that generalize.
      </p>

      <Callout type="info">
        <strong>Learning by Example:</strong> Understanding specific character tables
        builds intuition for the general theory and reveals important patterns like
        the behavior of abelian vs. non-abelian groups.
      </Callout>

      <h3>Cyclic Groups</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Characters of <InlineMath>\mathbb{"{Z}"}/n\mathbb{"{Z}"}</InlineMath></h4>
        <p>
          All irreducible representations are 1-dimensional (abelian group).
          Let <InlineMath>\zeta = e^{"{2\\pi i/n}"}</InlineMath>. The irreducible characters are:
        </p>
        <MathBlock>{`\\chi_k(g^j) = \\zeta^{jk} = e^{2\\pi ijk/n}, \\quad k = 0, 1, \\ldots, n-1`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Character Table of <InlineMath>\mathbb{"{Z}"}/4\mathbb{"{Z}"} = \langle g \rangle</InlineMath></p>
        <div className="mt-2 overflow-x-auto">
          <table className="text-dark-300 text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="py-1 pr-4"></th>
                <th className="py-1 px-3"><InlineMath>1</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>g</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>g^2</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>g^3</InlineMath></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_0</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_1</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center"><InlineMath>i</InlineMath></td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center"><InlineMath>-i</InlineMath></td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_2</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
              </tr>
              <tr>
                <td className="py-1 pr-4"><InlineMath>\chi_3</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center"><InlineMath>-i</InlineMath></td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center"><InlineMath>i</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Dihedral Groups</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">The Group <InlineMath>D_n</InlineMath></h4>
        <p>
          <InlineMath>D_n = \langle r, s \mid r^n = s^2 = 1, srs = r^{"{-1}"} \rangle</InlineMath>
          has order <InlineMath>2n</InlineMath>.
        </p>
        <p className="mt-3">
          Conjugacy classes (for <InlineMath>n</InlineMath> odd): <InlineMath>\{"{1}"}\</InlineMath>,
          <InlineMath>\{"{r^k, r^{-k}}"}\</InlineMath> for <InlineMath>1 \leq k \leq (n-1)/2</InlineMath>,
          and <InlineMath>\{"{sr^j}"}\</InlineMath> (all reflections).
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Character Table of <InlineMath>D_3 \cong S_3</InlineMath></p>
        <p className="mt-2 text-dark-300 text-sm">
          Classes: <InlineMath>\{"{1}"}\</InlineMath>, <InlineMath>\{"{r, r^2}"}\</InlineMath>, <InlineMath>\{"{s, sr, sr^2}"}\</InlineMath>
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="text-dark-300 text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="py-1 pr-4"></th>
                <th className="py-1 px-3">1</th>
                <th className="py-1 px-3"><InlineMath>r</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>s</InlineMath></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">trivial</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">sign</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">2-dim</td>
                <td className="py-1 px-3 text-center">2</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>The Quaternion Group</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4"><InlineMath>Q_8 = \{"\pm 1, \pm i, \pm j, \pm k"}\</InlineMath></h4>
        <p>
          Relations: <InlineMath>i^2 = j^2 = k^2 = ijk = -1</InlineMath>
        </p>
        <p className="mt-3">
          Conjugacy classes: <InlineMath>\{"{1}"}\</InlineMath>, <InlineMath>\{"{-1}"}\</InlineMath>,
          <InlineMath>\{"{\pm i}"}\</InlineMath>, <InlineMath>\{"{\pm j}"}\</InlineMath>,
          <InlineMath>\{"{\pm k}"}\</InlineMath>
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Character Table of <InlineMath>Q_8</InlineMath></p>
        <div className="mt-2 overflow-x-auto">
          <table className="text-dark-300 text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="py-1 pr-4"></th>
                <th className="py-1 px-3">1</th>
                <th className="py-1 px-3">-1</th>
                <th className="py-1 px-3"><InlineMath>i</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>j</InlineMath></th>
                <th className="py-1 px-3"><InlineMath>k</InlineMath></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_1</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_2</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">-1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_3</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4"><InlineMath>\chi_4</InlineMath></td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr>
                <td className="py-1 pr-4"><InlineMath>\chi_5</InlineMath></td>
                <td className="py-1 px-3 text-center">2</td>
                <td className="py-1 px-3 text-center">-2</td>
                <td className="py-1 px-3 text-center">0</td>
                <td className="py-1 px-3 text-center">0</td>
                <td className="py-1 px-3 text-center">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-dark-300 text-sm">
          Check: <InlineMath>1 + 1 + 1 + 1 + 4 = 8 = |Q_8|</InlineMath>
        </p>
      </div>

      <h3>The Symmetric Group S_4</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Conjugacy Classes of <InlineMath>S_4</InlineMath></h4>
        <p>
          Cycle types: <InlineMath>(1), (12), (123), (1234), (12)(34)</InlineMath>
        </p>
        <p className="mt-3">
          Class sizes: 1, 6, 8, 6, 3
        </p>
        <p className="mt-3">
          Five irreps with dimensions: <InlineMath>1^2 + 1^2 + 2^2 + 3^2 + 3^2 = 24</InlineMath>
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Character Table of <InlineMath>S_4</InlineMath></p>
        <div className="mt-2 overflow-x-auto">
          <table className="text-dark-300 text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="py-1 pr-4"></th>
                <th className="py-1 px-3">1</th>
                <th className="py-1 px-3">(12)</th>
                <th className="py-1 px-3">(123)</th>
                <th className="py-1 px-3">(1234)</th>
                <th className="py-1 px-3">(12)(34)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">trivial</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">sign</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">std</td>
                <td className="py-1 px-3 text-center">3</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">0</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">-1</td>
              </tr>
              <tr className="border-b border-dark-600">
                <td className="py-1 pr-4">std <InlineMath>\otimes</InlineMath> sgn</td>
                <td className="py-1 px-3 text-center">3</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">0</td>
                <td className="py-1 px-3 text-center">1</td>
                <td className="py-1 px-3 text-center">-1</td>
              </tr>
              <tr>
                <td className="py-1 pr-4">2-dim</td>
                <td className="py-1 px-3 text-center">2</td>
                <td className="py-1 px-3 text-center">0</td>
                <td className="py-1 px-3 text-center">-1</td>
                <td className="py-1 px-3 text-center">0</td>
                <td className="py-1 px-3 text-center">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Computing character tables reveals structural patterns.
        Abelian groups have only 1-dimensional characters. Dihedral groups mix 1- and
        2-dimensional representations. The quaternion group <InlineMath>Q_8</InlineMath>
        has the same character table format as <InlineMath>D_4</InlineMath> but different
        structure. Symmetric groups have representations indexed by partitions. These
        examples illustrate the power of character theory for understanding groups.
      </Callout>
    </LessonLayout>
  );
}
