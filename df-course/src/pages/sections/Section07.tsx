import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>The Quaternion Group</h2>
      <p>
        The <strong>quaternion group</strong> <InlineMath>Q_8</InlineMath> is a fascinating non-abelian group of order 8.
        It arises from Hamilton's quaternions and has properties that distinguish it from other groups of the same order.
      </p>

      <h3>Definition of Q_8</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>quaternion group</strong> <InlineMath>Q_8</InlineMath> is the group:
        <MathBlock>Q_8 = \{'{'}1, -1, i, -i, j, -j, k, -k\{'}'}</MathBlock>
        with multiplication determined by:
        <MathBlock>i^2 = j^2 = k^2 = ijk = -1</MathBlock>
      </Callout>

      <p>From these relations, we derive the multiplication rules:</p>
      <MathBlock>
        {`\\begin{aligned}
ij &= k, \\quad ji = -k \\\\
jk &= i, \\quad kj = -i \\\\
ki &= j, \\quad ik = -j
\\end{aligned}`}
      </MathBlock>

      <p>Note that <InlineMath>(-1)^2 = 1</InlineMath> and <InlineMath>-1</InlineMath> commutes with all elements.</p>

      <h3>Group Properties</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>|Q_8| = 8</InlineMath></li>
        <li><InlineMath>Q_8</InlineMath> is non-abelian: <InlineMath>ij = k \neq -k = ji</InlineMath></li>
        <li>The identity is <InlineMath>1</InlineMath></li>
        <li>Every element except <InlineMath>\pm 1</InlineMath> has order 4</li>
        <li>The element <InlineMath>-1</InlineMath> has order 2</li>
      </ul>

      <h3>Orders of Elements</h3>
      <MathBlock>
        {`\\begin{aligned}
|1| &= 1 \\\\
|-1| &= 2 \\\\
|i| = |-i| = |j| = |-j| = |k| = |-k| &= 4
\\end{aligned}`}
      </MathBlock>

      <h3>Center of Q_8</h3>
      <p>
        The <strong>center</strong> <InlineMath>Z(Q_8)</InlineMath> consists of elements that commute with everything:
      </p>
      <MathBlock>Z(Q_8) = \{'{'}1, -1\{'}'} \cong \mathbb{'{'}Z{'}'}_2</MathBlock>

      <h3>Subgroups of Q_8</h3>
      <p>The proper subgroups of <InlineMath>Q_8</InlineMath> are:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\{'{'}1\{'}'}</InlineMath> (trivial subgroup)</li>
        <li><InlineMath>\{'{'}1, -1\{'}'} \cong \mathbb{'{'}Z{'}'}_2</InlineMath> (the center)</li>
        <li><InlineMath>\langle i \rangle = \{'{'}1, i, -1, -i\{'}'} \cong \mathbb{'{'}Z{'}'}_4</InlineMath></li>
        <li><InlineMath>\langle j \rangle = \{'{'}1, j, -1, -j\{'}'} \cong \mathbb{'{'}Z{'}'}_4</InlineMath></li>
        <li><InlineMath>\langle k \rangle = \{'{'}1, k, -1, -k\{'}'} \cong \mathbb{'{'}Z{'}'}_4</InlineMath></li>
      </ul>

      <Callout type="warning">
        <strong>Important:</strong> Every subgroup of <InlineMath>Q_8</InlineMath> is normal! This makes <InlineMath>Q_8</InlineMath> a
        <strong>Hamiltonian group</strong>: a non-abelian group in which every subgroup is normal.
      </Callout>

      <h3>Q_8 vs D_8</h3>
      <p>
        Both <InlineMath>Q_8</InlineMath> and <InlineMath>D_8</InlineMath> are non-abelian groups of order 8, but they are not isomorphic:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>D_8</InlineMath> has 5 elements of order 2: the identity and 4 reflections</li>
        <li><InlineMath>Q_8</InlineMath> has only 1 element of order 2: namely <InlineMath>-1</InlineMath></li>
      </ul>
      <p>Since they have different numbers of elements of order 2, <InlineMath>Q_8 \not\cong D_8</InlineMath>.</p>

      <h3>Matrix Representation</h3>
      <p>
        <InlineMath>Q_8</InlineMath> can be realized as a subgroup of <InlineMath>GL_2(\mathbb{'{'}C{'}'})</InlineMath>:
      </p>
      <MathBlock>
        {`1 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\quad
-1 = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}`}
      </MathBlock>
      <MathBlock>
        {`i = \\begin{pmatrix} \\sqrt{-1} & 0 \\\\ 0 & -\\sqrt{-1} \\end{pmatrix}, \\quad
j = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}, \\quad
k = \\begin{pmatrix} 0 & \\sqrt{-1} \\\\ \\sqrt{-1} & 0 \\end{pmatrix}`}
      </MathBlock>

      <h3>Connection to Quaternions</h3>
      <p>
        Hamilton's quaternions <InlineMath>\mathbb{'{'}H{'}'}</InlineMath> form a 4-dimensional algebra over <InlineMath>\mathbb{'{'}R{'}'}</InlineMath>:
      </p>
      <MathBlock>\mathbb{'{'}H{'}'} = \{'{'}a + bi + cj + dk : a, b, c, d \in \mathbb{'{'}R{'}'}\{'}'}</MathBlock>
      <p>
        The group <InlineMath>Q_8</InlineMath> is the group of unit quaternions <InlineMath>{`\\{\\pm 1, \\pm i, \\pm j, \\pm k\\}`}</InlineMath>.
      </p>

      <h3>Presentation</h3>
      <Callout type="info">
        <strong>Presentation:</strong> <InlineMath>Q_8</InlineMath> can be presented as:
        <MathBlock>Q_8 = \langle i, j \mid i^4 = 1, \, i^2 = j^2, \, jij^{'{-1}'} = i^{'{-1}'} \rangle</MathBlock>
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> The quaternion group <InlineMath>Q_8</InlineMath> is a non-abelian group of order 8 with elements <InlineMath>{`\\{\\pm 1, \\pm i, \\pm j, \\pm k\\}`}</InlineMath>.
        It has a unique element of order 2 (<InlineMath>-1</InlineMath>), and all other non-identity elements have order 4.
        Every subgroup of <InlineMath>Q_8</InlineMath> is normal, making it a Hamiltonian group. <InlineMath>Q_8</InlineMath> and <InlineMath>D_8</InlineMath> are
        the only non-abelian groups of order 8, and they are not isomorphic.
      </Callout>
    </LessonLayout>
  );
}
