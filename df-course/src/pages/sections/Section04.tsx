import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Dihedral Groups</h2>
      <p>
        The <strong>dihedral groups</strong> are among the most important and intuitive examples of non-abelian groups.
        They capture the symmetries of regular polygons and serve as a source of examples throughout group theory.
      </p>

      <h3>Symmetries of a Regular n-gon</h3>
      <p>
        Consider a regular <InlineMath>n</InlineMath>-gon with vertices labeled <InlineMath>1, 2, \ldots, n</InlineMath>. A <strong>symmetry</strong> is a rigid motion
        of the plane that maps the polygon to itself. There are two types:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>Rotations:</strong> Rotating the polygon by <InlineMath>360k/n</InlineMath> degrees for <InlineMath>k = 0, 1, \ldots, n-1</InlineMath></li>
        <li><strong>Reflections:</strong> Reflecting across an axis of symmetry</li>
      </ul>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>dihedral group</strong> <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> is the group of symmetries of a regular <InlineMath>n</InlineMath>-gon.
        It has order <InlineMath>2n</InlineMath>: there are <InlineMath>n</InlineMath> rotations and <InlineMath>n</InlineMath> reflections.
      </Callout>

      <Callout type="warning">
        <strong>Notation Warning:</strong> Some books use <InlineMath>D_n</InlineMath> instead of <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> for the symmetry group of an <InlineMath>n</InlineMath>-gon.
        Dummit-Foote uses <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> where the subscript indicates the order of the group.
      </Callout>

      <h3>Generators and Relations</h3>
      <p>
        Let <InlineMath>r</InlineMath> denote rotation by <InlineMath>360/n</InlineMath> degrees counterclockwise, and let <InlineMath>s</InlineMath> denote a fixed reflection.
        Then:
      </p>
      <MathBlock>D_{'{'}{'{'}2n{'}'}{'{}'} = \{'{'}1, r, r^2, \ldots, r^{'{'}n-1{'}'}, s, sr, sr^2, \ldots, sr^{'{'}n-1{'}'}\{'}'}</MathBlock>

      <p>The elements satisfy the relations:</p>
      <MathBlock>r^n = 1, \quad s^2 = 1, \quad rs = sr^{'{-1}'}</MathBlock>

      <p>These relations completely determine the group structure. The last relation is crucial:</p>
      <MathBlock>rs = sr^{'{-1}'} \quad \Leftrightarrow \quad srs = r^{'{-1}'} \quad \Leftrightarrow \quad sr = r^{'{-1}'}s</MathBlock>

      <h3>Properties of Dihedral Groups</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> is non-abelian for <InlineMath>n \geq 3</InlineMath> (since <InlineMath>rs \neq sr</InlineMath>)</li>
        <li><InlineMath>D_4 \cong \mathbb{'{'}Z{'}'}_2 \times \mathbb{'{'}Z{'}'}_2</InlineMath> is the Klein four-group (abelian)</li>
        <li>The rotations form a cyclic subgroup <InlineMath>\langle r \rangle \cong \mathbb{'{'}Z{'}'}_n</InlineMath></li>
        <li>Every reflection has order 2</li>
        <li>If <InlineMath>n</InlineMath> is odd, all reflections are conjugate; if <InlineMath>n</InlineMath> is even, there are two conjugacy classes of reflections</li>
      </ul>

      <h3>Example: D_6 (Symmetries of an Equilateral Triangle)</h3>
      <p>
        <InlineMath>D_6</InlineMath> has 6 elements: <InlineMath>\{'{'}1, r, r^2, s, sr, sr^2\{'}'}</InlineMath>
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>1</InlineMath>: identity (do nothing)</li>
        <li><InlineMath>r</InlineMath>: rotate 120 degrees counterclockwise</li>
        <li><InlineMath>r^2</InlineMath>: rotate 240 degrees counterclockwise</li>
        <li><InlineMath>s, sr, sr^2</InlineMath>: reflections through axes of symmetry</li>
      </ul>

      <p>Multiplication table snippet:</p>
      <MathBlock>r \cdot s = sr^{'{-1}'} = sr^2, \quad s \cdot r = r^{'{-1}'}s = r^2 s = sr^2 \cdot r^2 = sr^4 = sr</MathBlock>

      <h3>Example: D_8 (Symmetries of a Square)</h3>
      <p>
        <InlineMath>D_8</InlineMath> has 8 elements. The rotations are by 0, 90, 180, and 270 degrees.
        There are 4 reflections: 2 through opposite vertices and 2 through midpoints of opposite sides.
      </p>
      <MathBlock>D_8 = \{'{'}1, r, r^2, r^3, s, sr, sr^2, sr^3\{'}'}</MathBlock>

      <h3>Geometric Interpretation</h3>
      <p>
        The key insight is that <InlineMath>rs = sr^{'{-1}'}</InlineMath> reflects the geometric fact: performing a reflection
        then a rotation is the same as performing the inverse rotation then the reflection.
        This is because reflection "reverses orientation."
      </p>

      <Callout type="info">
        <strong>Presentation:</strong> We can describe <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> by generators and relations:
        <MathBlock>D_{'{'}{'{'}2n{'}'}{'{}'} = \langle r, s \mid r^n = s^2 = 1, \, rs = sr^{'{-1}'} \rangle</MathBlock>
      </Callout>

      <h3>Center of D_{'{'}2n{'}'}</h3>
      <p>
        The <strong>center</strong> of a group (elements that commute with all others) of <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> is:
      </p>
      <MathBlock>Z(D_{'{'}{'{'}2n{'}'}{'{}'}) = \begin{'{'}cases{'}'} \{'{'}1\{'}'} & \text{'{'}if {'}'} n \text{'{'} is odd{'}'} \\ \{'{'}1, r^{'{'}n/2{'}'}\{'}'} & \text{'{'}if {'}'} n \text{'{'} is even{'}'} \end{'{'}cases{'}'}</MathBlock>

      <Callout type="success">
        <strong>Summary:</strong> The dihedral group <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> of order <InlineMath>2n</InlineMath> describes the symmetries of a regular <InlineMath>n</InlineMath>-gon.
        It is generated by a rotation <InlineMath>r</InlineMath> of order <InlineMath>n</InlineMath> and a reflection <InlineMath>s</InlineMath> of order 2, subject to the relation <InlineMath>rs = sr^{'{-1}'}</InlineMath>.
        Dihedral groups are our first important examples of non-abelian groups.
      </Callout>
    </LessonLayout>
  );
}
