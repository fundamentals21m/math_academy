import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>The Integers Modulo n</h2>
      <p>
        Modular arithmetic, sometimes called "clock arithmetic," is one of the most important constructions in algebra.
        The integers modulo <InlineMath>n</InlineMath> form our first example of a quotient structure and provide a fundamental
        example of a ring and, when <InlineMath>n</InlineMath> is prime, a field.
      </p>

      <h3>Congruence Classes</h3>
      <p>
        Recall that for a positive integer <InlineMath>n</InlineMath>, we say <InlineMath>a</InlineMath> is <strong>congruent</strong> to <InlineMath>b</InlineMath> modulo <InlineMath>n</InlineMath>, written:
      </p>
      <MathBlock>a \equiv b \pmod{'{'}n{'}'}</MathBlock>
      <p>
        if <InlineMath>n</InlineMath> divides <InlineMath>a - b</InlineMath>. This is an equivalence relation on <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>residue class</strong> (or <strong>congruence class</strong>) of <InlineMath>a</InlineMath> modulo <InlineMath>n</InlineMath> is:
        <MathBlock>\bar{'{'}a{'}'} = [a] = \{'{'}a + kn : k \in \mathbb{'{'}Z{'}'}\{'}'} = \{'{'}..., a-2n, a-n, a, a+n, a+2n, ...\{'}'}</MathBlock>
      </Callout>

      <p>
        There are exactly <InlineMath>n</InlineMath> distinct residue classes, and they partition <InlineMath>\mathbb{'{'}Z{'}'}</InlineMath>:
      </p>
      <MathBlock>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'} = \{'{'}\bar{'{'}0{'}'}, \bar{'{'}1{'}'}, \bar{'{'}2{'}'}, \ldots, \bar{'{'}n-1{'}'}\{'}'}</MathBlock>

      <h3>Arithmetic in Z/nZ</h3>
      <p>
        We define addition and multiplication on <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> by:
      </p>
      <MathBlock>\bar{'{'}a{'}'} + \bar{'{'}b{'}'} = \overline{'{'}a + b{'}'} \quad \text{'{'}and{'}'} \quad \bar{'{'}a{'}'} \cdot \bar{'{'}b{'}'} = \overline{'{'}ab{'}'}</MathBlock>

      <Callout type="warning">
        <strong>Well-definedness:</strong> These operations are <em>well-defined</em>, meaning the result does not depend
        on the choice of representatives. If <InlineMath>{`\\bar{a} = \\bar{a'}`}</InlineMath> and <InlineMath>{`\\bar{b} = \\bar{b'}`}</InlineMath>,
        then <InlineMath>{`\\overline{a + b} = \\overline{a' + b'}`}</InlineMath> and <InlineMath>{`\\overline{ab} = \\overline{a'b'}`}</InlineMath>.
      </Callout>

      <p>With these operations, <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> forms a commutative ring with identity.</p>

      <h3>Units and Zero Divisors</h3>
      <Callout type="info">
        <strong>Definition:</strong> An element <InlineMath>\bar{'{'}a{'}'} \in \mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> is:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>A <strong>unit</strong> if there exists <InlineMath>\bar{'{'}b{'}'}</InlineMath> with <InlineMath>\bar{'{'}a{'}'}\bar{'{'}b{'}'} = \bar{'{'}1{'}'}</InlineMath></li>
          <li>A <strong>zero divisor</strong> if <InlineMath>\bar{'{'}a{'}'} \neq \bar{'{'}0{'}'}</InlineMath> but <InlineMath>\bar{'{'}a{'}'}\bar{'{'}b{'}'} = \bar{'{'}0{'}'}</InlineMath> for some <InlineMath>\bar{'{'}b{'}'} \neq \bar{'{'}0{'}'}</InlineMath></li>
        </ul>
      </Callout>

      <p>
        <strong>Theorem:</strong> <InlineMath>\bar{'{'}a{'}'}</InlineMath> is a unit in <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> if and only if <InlineMath>\gcd(a, n) = 1</InlineMath>.
      </p>
      <p>
        <em>Proof:</em> If <InlineMath>\gcd(a, n) = 1</InlineMath>, then by Bezout's Identity there exist <InlineMath>x, y</InlineMath> with <InlineMath>ax + ny = 1</InlineMath>.
        Taking this modulo <InlineMath>n</InlineMath> gives <InlineMath>\bar{'{'}a{'}'}\bar{'{'}x{'}'} = \bar{'{'}1{'}'}</InlineMath>, so <InlineMath>\bar{'{'}a{'}'}</InlineMath> is a unit with inverse <InlineMath>\bar{'{'}x{'}'}</InlineMath>.
      </p>

      <h3>The Group of Units</h3>
      <p>
        The set of units in <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> forms a group under multiplication:
      </p>
      <MathBlock>(\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'})^\times = \{'{'}\bar{'{'}a{'}'} : \gcd(a, n) = 1\{'}'}</MathBlock>
      <p>
        The order of this group is <InlineMath>\phi(n)</InlineMath>, Euler's totient function.
      </p>

      <h3>When is Z/nZ a Field?</h3>
      <Callout type="info">
        <strong>Theorem:</strong> <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> is a field if and only if <InlineMath>n</InlineMath> is prime.
      </Callout>
      <p>
        When <InlineMath>p</InlineMath> is prime, we often write <InlineMath>\mathbb{'{'}F{'}'}_p</InlineMath> or <InlineMath>\mathbb{'{'}Z{'}'}_p</InlineMath> for this field. In a field, every non-zero
        element is a unit and there are no zero divisors.
      </p>

      <h3>Examples</h3>
      <p><strong>Example 1:</strong> In <InlineMath>\mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath>:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Units: <InlineMath>\bar{'{'}1{'}'}, \bar{'{'}5{'}'}</InlineMath> (since <InlineMath>\gcd(1,6) = \gcd(5,6) = 1</InlineMath>)</li>
        <li>Zero divisors: <InlineMath>\bar{'{'}2{'}'}, \bar{'{'}3{'}'}, \bar{'{'}4{'}'}</InlineMath> (e.g., <InlineMath>\bar{'{'}2{'}'} \cdot \bar{'{'}3{'}'} = \bar{'{'}6{'}'} = \bar{'{'}0{'}'}</InlineMath>)</li>
      </ul>

      <p><strong>Example 2:</strong> In <InlineMath>\mathbb{'{'}Z{'}'}/7\mathbb{'{'}Z{'}'}</InlineMath> (a field):</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Every non-zero element is a unit</li>
        <li><InlineMath>\bar{'{'}3{'}'} \cdot \bar{'{'}5{'}'} = \bar{'{'}15{'}'} = \bar{'{'}1{'}'}</InlineMath>, so <InlineMath>\bar{'{'}3{'}'}^{'{-1}'} = \bar{'{'}5{'}'}</InlineMath></li>
      </ul>

      <h3>Fermat's Little Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Fermat's Little Theorem):</strong> If <InlineMath>p</InlineMath> is prime and <InlineMath>p \nmid a</InlineMath>, then:
        <MathBlock>a^{'{'}p-1{'}'} \equiv 1 \pmod{'{'}p{'}'}</MathBlock>
        Equivalently, <InlineMath>a^p \equiv a \pmod{'{'}p{'}'}</InlineMath> for all integers <InlineMath>a</InlineMath>.
      </Callout>

      <p>
        This can be generalized to Euler's Theorem: if <InlineMath>\gcd(a, n) = 1</InlineMath>, then <InlineMath>a^{'{'}\phi(n){'}'} \equiv 1 \pmod{'{'}n{'}'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> The integers modulo <InlineMath>n</InlineMath> form a ring <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> that is a field exactly when <InlineMath>n</InlineMath> is prime.
        The units are precisely the elements coprime to <InlineMath>n</InlineMath>. This construction is the prototype for quotient
        structures throughout algebra.
      </Callout>
    </LessonLayout>
  );
}
