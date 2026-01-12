import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { InlineMath } from '@/components/common/MathBlock';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2>Groups of Small Order</h2>
      <p>
        Understanding groups of small order provides valuable examples and intuition. This section surveys
        the classification of groups up to order 15, illustrating the techniques of group theory.
      </p>

      <h3>Order 1</h3>
      <p>Only one group: the trivial group <InlineMath>\{'{'}e\{'}'}</InlineMath>.</p>

      <h3>Order 2</h3>
      <p>Only one group: <InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} = \{'{'}0, 1\{'}'}</InlineMath>.</p>

      <h3>Prime Order p</h3>
      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>|G| = p</InlineMath> prime, then <InlineMath>G \cong \mathbb{'{'}Z{'}'}/p\mathbb{'{'}Z{'}'}</InlineMath>.
      </Callout>
      <p>Orders 2, 3, 5, 7, 11, 13: one group each (cyclic).</p>

      <h3>Order 4</h3>
      <p>Two groups:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'}</InlineMath> — cyclic, has element of order 4</li>
        <li><InlineMath>V_4 = \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> — Klein four-group, all non-identity elements have order 2</li>
      </ul>

      <h3>Order 6</h3>
      <p>Two groups:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath> — abelian</li>
        <li><InlineMath>S_3 \cong D_6</InlineMath> — non-abelian, smallest non-abelian group</li>
      </ul>

      <h3>Order 8</h3>
      <p>Five groups:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/8\mathbb{'{'}Z{'}'}</InlineMath> — cyclic</li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> — abelian</li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> — abelian</li>
        <li><InlineMath>D_8</InlineMath> — dihedral, 5 elements of order 2</li>
        <li><InlineMath>Q_8</InlineMath> — quaternion, 1 element of order 2</li>
      </ul>

      <h3>Order 9</h3>
      <p>Two groups (both abelian, since <InlineMath>9 = 3^2</InlineMath>):</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/9\mathbb{'{'}Z{'}'}</InlineMath> — cyclic</li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'}</InlineMath></li>
      </ul>

      <Callout type="info">
        <strong>Theorem:</strong> Groups of order <InlineMath>p^2</InlineMath> are abelian.
      </Callout>

      <h3>Order 10</h3>
      <p>Two groups:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/10\mathbb{'{'}Z{'}'}</InlineMath> — abelian</li>
        <li><InlineMath>D_{'{'}10{'}'}</InlineMath> — dihedral</li>
      </ul>

      <h3>Order 12</h3>
      <p>Five groups:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/12\mathbb{'{'}Z{'}'}</InlineMath> — cyclic</li>
        <li><InlineMath>\mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> — abelian</li>
        <li><InlineMath>A_4</InlineMath> — alternating group</li>
        <li><InlineMath>D_{'{'}12{'}'}</InlineMath> — dihedral</li>
        <li><InlineMath>\text{'{'}Dic{'}'}_3</InlineMath> — dicyclic (generalized quaternion)</li>
      </ul>

      <h3>Order 14</h3>
      <p>Two groups:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/14\mathbb{'{'}Z{'}'}</InlineMath></li>
        <li><InlineMath>D_{'{'}14{'}'}</InlineMath></li>
      </ul>

      <h3>Order 15</h3>
      <p>
        One group: <InlineMath>\mathbb{'{'}Z{'}'}/15\mathbb{'{'}Z{'}'}</InlineMath>.
        By Sylow theory, both Sylow subgroups are normal, so <InlineMath>G \cong \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/5\mathbb{'{'}Z{'}'}</InlineMath>.
      </p>

      <h3>Summary Table</h3>
      <table className="w-full text-dark-300 mb-6">
        <thead>
          <tr className="border-b border-dark-600">
            <th className="text-left p-2">Order</th>
            <th className="text-left p-2"># of Groups</th>
            <th className="text-left p-2">Groups</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-dark-700"><td className="p-2">1</td><td className="p-2">1</td><td className="p-2">trivial</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">2,3,5,7,11,13</td><td className="p-2">1 each</td><td className="p-2">cyclic</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">cyclic, Klein</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">6</td><td className="p-2">2</td><td className="p-2">cyclic, S3</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">8</td><td className="p-2">5</td><td className="p-2">3 abelian, D8, Q8</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">9</td><td className="p-2">2</td><td className="p-2">both abelian</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">10</td><td className="p-2">2</td><td className="p-2">cyclic, D10</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">12</td><td className="p-2">5</td><td className="p-2">2 abelian, A4, D12, Dic3</td></tr>
          <tr className="border-b border-dark-700"><td className="p-2">14</td><td className="p-2">2</td><td className="p-2">cyclic, D14</td></tr>
          <tr><td className="p-2">15</td><td className="p-2">1</td><td className="p-2">cyclic</td></tr>
        </tbody>
      </table>

      <Callout type="success">
        <strong>Summary:</strong> Groups of small order are classified using Lagrange's theorem, Sylow theory,
        and the structure of abelian groups. Key patterns: prime order implies cyclic; order <InlineMath>p^2</InlineMath> implies abelian;
        order <InlineMath>2p</InlineMath> gives cyclic or dihedral. The quaternion group <InlineMath>Q_8</InlineMath> is exceptional at order 8.
      </Callout>
    </LessonLayout>
  );
}
