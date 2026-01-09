import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      {/* Introduction */}
      <p>
        Understanding small groups helps build intuition for group theory. Using Lagrange's theorem
        and the properties of cyclic groups, we can classify all groups up to a certain order.
        This section examines groups of orders 2, 3, 4, and 6.
      </p>

      <h2>Groups of Order 2</h2>

      <Theorem title="Groups of Order 2" className="my-6">
        <p>
          Every group of order 2 is isomorphic to <InlineMath>\mathbb{'{Z}'}_2</InlineMath>.
        </p>
      </Theorem>

      <Example title="The Group Z_2" className="my-6">
        <p>
          <InlineMath>\mathbb{'{Z}'}_2 = \{'{[0], [1]}'}\</InlineMath> under addition mod 2:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>+</InlineMath></th>
                <th className="py-2 px-4">[0]</th>
                <th className="py-2 px-4">[1]</th>
              </tr>
            </thead>
            <tbody className="text-center text-dark-300">
              <tr><td className="py-1 font-semibold">[0]</td><td>[0]</td><td>[1]</td></tr>
              <tr><td className="py-1 font-semibold">[1]</td><td>[1]</td><td>[0]</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Since 2 is prime, this is the only group of order 2.
        </p>
      </Example>

      <h2>Groups of Order 3</h2>

      <Theorem title="Groups of Order 3" className="my-6">
        <p>
          Every group of order 3 is isomorphic to <InlineMath>\mathbb{'{Z}'}_3</InlineMath>.
        </p>
      </Theorem>

      <Example title="The Group Z_3" className="my-6">
        <p>
          <InlineMath>\mathbb{'{Z}'}_3 = \{'{[0], [1], [2]}'}\</InlineMath> under addition mod 3:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>+</InlineMath></th>
                <th className="py-2 px-4">[0]</th>
                <th className="py-2 px-4">[1]</th>
                <th className="py-2 px-4">[2]</th>
              </tr>
            </thead>
            <tbody className="text-center text-dark-300">
              <tr><td className="py-1 font-semibold">[0]</td><td>[0]</td><td>[1]</td><td>[2]</td></tr>
              <tr><td className="py-1 font-semibold">[1]</td><td>[1]</td><td>[2]</td><td>[0]</td></tr>
              <tr><td className="py-1 font-semibold">[2]</td><td>[2]</td><td>[0]</td><td>[1]</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Since 3 is prime, this is the only group of order 3.
        </p>
      </Example>

      <h2>Groups of Order 4</h2>

      <Theorem title="Groups of Order 4" className="my-6">
        <p>
          There are exactly two non-isomorphic groups of order 4:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>\mathbb{'{Z}'}_4</InlineMath> (cyclic group)
          </li>
          <li>
            <InlineMath>V_4 \cong \mathbb{'{Z}'}_2 \times \mathbb{'{Z}'}_2</InlineMath> (Klein four-group)
          </li>
        </ul>
      </Theorem>

      <Example title="The Cyclic Group Z_4" className="my-6">
        <p>
          <InlineMath>\mathbb{'{Z}'}_4 = \{'{[0], [1], [2], [3]}'}\</InlineMath> has an element of
          order 4 (namely [1]).
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-3"><InlineMath>+</InlineMath></th>
                <th className="py-2 px-3">[0]</th>
                <th className="py-2 px-3">[1]</th>
                <th className="py-2 px-3">[2]</th>
                <th className="py-2 px-3">[3]</th>
              </tr>
            </thead>
            <tbody className="text-center text-dark-300">
              <tr><td className="py-1 font-semibold">[0]</td><td>[0]</td><td>[1]</td><td>[2]</td><td>[3]</td></tr>
              <tr><td className="py-1 font-semibold">[1]</td><td>[1]</td><td>[2]</td><td>[3]</td><td>[0]</td></tr>
              <tr><td className="py-1 font-semibold">[2]</td><td>[2]</td><td>[3]</td><td>[0]</td><td>[1]</td></tr>
              <tr><td className="py-1 font-semibold">[3]</td><td>[3]</td><td>[0]</td><td>[1]</td><td>[2]</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Element orders: <InlineMath>|[0]| = 1</InlineMath>, <InlineMath>|[1]| = 4</InlineMath>,{' '}
          <InlineMath>|[2]| = 2</InlineMath>, <InlineMath>|[3]| = 4</InlineMath>.
        </p>
      </Example>

      <Example title="The Klein Four-Group V_4" className="my-6">
        <p>
          <InlineMath>V_4 = \{'{e, a, b, c}'}\</InlineMath> where every non-identity element has
          order 2:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
          <table className="text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-4"><InlineMath>\cdot</InlineMath></th>
                <th className="py-2 px-4">e</th>
                <th className="py-2 px-4">a</th>
                <th className="py-2 px-4">b</th>
                <th className="py-2 px-4">c</th>
              </tr>
            </thead>
            <tbody className="text-center text-dark-300">
              <tr><td className="py-1 font-semibold">e</td><td>e</td><td>a</td><td>b</td><td>c</td></tr>
              <tr><td className="py-1 font-semibold">a</td><td>a</td><td>e</td><td>c</td><td>b</td></tr>
              <tr><td className="py-1 font-semibold">b</td><td>b</td><td>c</td><td>e</td><td>a</td></tr>
              <tr><td className="py-1 font-semibold">c</td><td>c</td><td>b</td><td>a</td><td>e</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          <InlineMath>V_4</InlineMath> is <strong>not cyclic</strong>—no element has order 4.
        </p>
        <p className="mt-2">
          Example: <InlineMath>V_4 \cong \{'{e, (1 \\, 2)(3 \\, 4), (1 \\, 3)(2 \\, 4), (1 \\, 4)(2 \\, 3)}'}\leq S_4</InlineMath>.
        </p>
      </Example>

      <h2>Groups of Order 6</h2>

      <Theorem title="Groups of Order 6" className="my-6">
        <p>
          There are exactly two non-isomorphic groups of order 6:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>\mathbb{'{Z}'}_6</InlineMath> (cyclic, abelian)
          </li>
          <li>
            <InlineMath>S_3 \cong D_3</InlineMath> (symmetric group on 3 elements, non-abelian)
          </li>
        </ul>
      </Theorem>

      <Example title="The Cyclic Group Z_6" className="my-6">
        <p>
          <InlineMath>\mathbb{'{Z}'}_6 = \langle [1] \rangle</InlineMath> is abelian with element orders:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>|[0]| = 1</InlineMath>, <InlineMath>|[1]| = 6</InlineMath>, <InlineMath>|[2]| = 3</InlineMath></li>
          <li><InlineMath>|[3]| = 2</InlineMath>, <InlineMath>|[4]| = 3</InlineMath>, <InlineMath>|[5]| = 6</InlineMath></li>
        </ul>
      </Example>

      <Example title="The Symmetric Group S_3" className="my-6">
        <p>
          <InlineMath>S_3</InlineMath> is the group of permutations of <InlineMath>\{'{1, 2, 3}'}\</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Identity: <InlineMath>e</InlineMath></li>
          <li>Three transpositions: <InlineMath>(1 \, 2), (1 \, 3), (2 \, 3)</InlineMath> (order 2)</li>
          <li>Two 3-cycles: <InlineMath>(1 \, 2 \, 3), (1 \, 3 \, 2)</InlineMath> (order 3)</li>
        </ul>
        <p className="mt-3">
          <InlineMath>S_3</InlineMath> is <strong>non-abelian</strong>:{' '}
          <InlineMath>(1 \, 2)(1 \, 3) = (1 \, 3 \, 2) \neq (1 \, 2 \, 3) = (1 \, 3)(1 \, 2)</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>S_3</InlineMath> is not cyclic (no element of order 6).
        </p>
      </Example>

      <h2>Distinguishing Groups</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">How to Tell Groups Apart</h4>
        <ul className="space-y-3 text-dark-200">
          <li>
            <strong>Abelian vs Non-abelian:</strong> Check if <InlineMath>ab = ba</InlineMath> for
            all elements. <InlineMath>\mathbb{'{Z}'}_6</InlineMath> is abelian,{' '}
            <InlineMath>S_3</InlineMath> is not.
          </li>
          <li>
            <strong>Cyclic vs Non-cyclic:</strong> A group is cyclic iff it has an element whose
            order equals the group order. <InlineMath>\mathbb{'{Z}'}_4</InlineMath> is cyclic,{' '}
            <InlineMath>V_4</InlineMath> is not.
          </li>
          <li>
            <strong>Element orders:</strong> Compare the distribution of element orders.
          </li>
          <li>
            <strong>Number of subgroups:</strong> Count subgroups of each order.
          </li>
        </ul>
      </div>

      <Example title="Summary Table" className="my-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2 px-2">Order</th>
                <th className="text-left py-2 px-2">Groups</th>
                <th className="text-left py-2 px-2">Cyclic?</th>
                <th className="text-left py-2 px-2">Abelian?</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">1</td>
                <td><InlineMath>\{'{e}'}\</InlineMath></td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">2</td>
                <td><InlineMath>\mathbb{'{Z}'}_2</InlineMath></td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">3</td>
                <td><InlineMath>\mathbb{'{Z}'}_3</InlineMath></td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">4</td>
                <td><InlineMath>\mathbb{'{Z}'}_4</InlineMath></td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">4</td>
                <td><InlineMath>V_4</InlineMath></td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">5</td>
                <td><InlineMath>\mathbb{'{Z}'}_5</InlineMath></td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="py-2 px-2">6</td>
                <td><InlineMath>\mathbb{'{Z}'}_6</InlineMath></td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td className="py-2 px-2">6</td>
                <td><InlineMath>S_3</InlineMath></td>
                <td>No</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              Groups of <strong>prime order</strong> are always cyclic (unique up to isomorphism).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <strong>Order 4:</strong> <InlineMath>\mathbb{'{Z}'}_4</InlineMath> (cyclic) and{' '}
              <InlineMath>V_4</InlineMath> (Klein four-group, not cyclic).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Order 6:</strong> <InlineMath>\mathbb{'{Z}'}_6</InlineMath> (abelian) and{' '}
              <InlineMath>S_3</InlineMath> (non-abelian).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The <strong>Klein four-group</strong> <InlineMath>V_4</InlineMath> has every
              non-identity element of order 2.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <InlineMath>S_3</InlineMath> is the <strong>smallest non-abelian group</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              To distinguish groups: compare abelian/non-abelian, cyclic/non-cyclic, and element orders.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
