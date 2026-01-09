import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2>The Class Equation</h2>
      <p>
        The <strong>class equation</strong> is a powerful tool derived from the conjugation action.
        It relates the order of a group to its center and the sizes of conjugacy classes.
      </p>

      <h3>The Conjugation Action</h3>
      <p>
        Every group <InlineMath>G</InlineMath> acts on itself by <strong>conjugation</strong>:
      </p>
      <MathBlock>g \cdot x = gxg^{'{-1}'}</MathBlock>

      <p>For this action:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>Orbit of x:</strong> the <strong>conjugacy class</strong> <InlineMath>\text{'{'}cl{'}'}(x) = \{'{'}gxg^{'{-1}'} : g \in G\{'}'}</InlineMath></li>
        <li><strong>Stabilizer of x:</strong> the <strong>centralizer</strong> <InlineMath>C_G(x) = \{'{'}g \in G : gx = xg\{'}'}</InlineMath></li>
      </ul>

      <h3>The Class Equation</h3>
      <p>
        Since conjugacy classes partition <InlineMath>G</InlineMath>, we have:
      </p>
      <MathBlock>|G| = \sum_{'{'}\text{'{'}classes{'}'}{'}'} |\text{'{'}cl{'}'}(x)|</MathBlock>

      <p>
        The classes of size 1 are exactly the elements of the center <InlineMath>Z(G)</InlineMath>.
        Let <InlineMath>x_1, \ldots, x_r</InlineMath> be representatives of the non-central conjugacy classes.
      </p>

      <Callout type="info">
        <strong>The Class Equation:</strong>
        <MathBlock>|G| = |Z(G)| + \sum_{'{'}i=1{'}'}^r [G : C_G(x_i)]</MathBlock>
        where the sum runs over representatives of conjugacy classes with more than one element.
      </Callout>

      <h3>Properties</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Each term <InlineMath>[G : C_G(x_i)]</InlineMath> divides <InlineMath>|G|</InlineMath> and is greater than 1</li>
        <li><InlineMath>|Z(G)|</InlineMath> divides <InlineMath>|G|</InlineMath></li>
        <li>If <InlineMath>|G| = p^n</InlineMath> for a prime <InlineMath>p</InlineMath>, then <InlineMath>p</InlineMath> divides each non-trivial class size</li>
      </ul>

      <h3>Application: p-Groups Have Non-Trivial Centers</h3>
      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>|G| = p^n</InlineMath> for a prime <InlineMath>p</InlineMath> and <InlineMath>n \geq 1</InlineMath>, then <InlineMath>Z(G) \neq \{'{'}e\{'}'}</InlineMath>.
        In fact, <InlineMath>p \mid |Z(G)|</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> By the class equation:
      </p>
      <MathBlock>p^n = |Z(G)| + \sum_{'{'}i=1{'}'}^r [G : C_G(x_i)]</MathBlock>
      <p>
        Each <InlineMath>[G : C_G(x_i)]</InlineMath> divides <InlineMath>p^n</InlineMath> and is greater than 1, so <InlineMath>p</InlineMath> divides each term in the sum.
        Since <InlineMath>p</InlineMath> divides <InlineMath>p^n</InlineMath> and the sum, we have <InlineMath>p \mid |Z(G)|</InlineMath>.
      </p>

      <h3>Example: Classes in S_3</h3>
      <p>Conjugacy classes in <InlineMath>S_3</InlineMath> (by cycle type):</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\{'{'}e\{'}'}</InlineMath> — size 1</li>
        <li><InlineMath>\{'{'}(1\,2), (1\,3), (2\,3)\{'}'}</InlineMath> — size 3 (transpositions)</li>
        <li><InlineMath>\{'{'}(1\,2\,3), (1\,3\,2)\{'}'}</InlineMath> — size 2 (3-cycles)</li>
      </ul>
      <p>Class equation: <InlineMath>6 = 1 + 3 + 2</InlineMath>. Since only <InlineMath>e</InlineMath> has class size 1, <InlineMath>Z(S_3) = \{'{'}e\{'}'}</InlineMath>.</p>

      <h3>Example: Classes in D_8</h3>
      <p>
        For <InlineMath>D_8 = \langle r, s \mid r^4 = s^2 = 1, rs = sr^{'{-1}'} \rangle</InlineMath>:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>\{'{'}1\{'}'}</InlineMath> — size 1</li>
        <li><InlineMath>\{'{'}r^2\{'}'}</InlineMath> — size 1 (central)</li>
        <li><InlineMath>\{'{'}r, r^3\{'}'}</InlineMath> — size 2</li>
        <li><InlineMath>\{'{'}s, sr^2\{'}'}</InlineMath> — size 2</li>
        <li><InlineMath>\{'{'}sr, sr^3\{'}'}</InlineMath> — size 2</li>
      </ul>
      <p>Class equation: <InlineMath>8 = 1 + 1 + 2 + 2 + 2</InlineMath>. Center: <InlineMath>Z(D_8) = \{'{'}1, r^2\{'}'}</InlineMath>.</p>

      <h3>Cauchy's Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Cauchy):</strong> If <InlineMath>p</InlineMath> is a prime dividing <InlineMath>|G|</InlineMath>, then <InlineMath>G</InlineMath> has an element of order <InlineMath>p</InlineMath>.
      </Callout>

      <p>
        <strong>Proof sketch (for p dividing |Z(G)|):</strong> If <InlineMath>|G| = p^n</InlineMath>, the center is non-trivial.
        <InlineMath>Z(G)</InlineMath> is abelian, so if <InlineMath>p \mid |Z(G)|</InlineMath>, we can find an element of order <InlineMath>p</InlineMath> in <InlineMath>Z(G)</InlineMath>.
        General case uses induction and the class equation.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> The class equation <InlineMath>|G| = |Z(G)| + \sum [G : C_G(x_i)]</InlineMath> partitions <InlineMath>G</InlineMath> by
        conjugacy classes. It proves that p-groups have non-trivial centers and implies Cauchy's theorem
        that if <InlineMath>p \mid |G|</InlineMath>, then <InlineMath>G</InlineMath> has an element of order <InlineMath>p</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
