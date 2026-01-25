import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <p>
        One can create statements by starting with expressions and asking
        whether two expressions are related by some relation (such as{' '}
        <Math>=</Math>, <Math>{String.raw`\leq`}</Math>,{' '}
        <Math>{String.raw`\in`}</Math>, etc.). Among all relations, the most
        important one is <strong>equality</strong>, and it is worth spending
        some time understanding this fundamental concept.
      </p>

      <h2>What Is Equality?</h2>

      <Definition id="A.7.1" title="Equality">
        <p>
          <strong>Equality</strong> is a relation linking two objects{' '}
          <Math>x</Math> and <Math>y</Math> of the same type <Math>T</Math>{' '}
          (e.g., two integers, two matrices, two vectors, etc.). Given two such
          objects, the statement <Math>x = y</Math> may or may not be true; it
          depends on:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The values of <Math>x</Math> and <Math>y</Math></li>
          <li>
            How equality is <em>defined</em> for the class of objects under
            consideration
          </li>
        </ul>
      </Definition>

      <Example id="A.7.2" title="Equality depends on context">
        <p>
          <strong>As real numbers:</strong> The two numbers{' '}
          <Math>0.9999...</Math> and <Math>1</Math> are <em>equal</em>. (This
          follows from the theory of limits and infinite series.)
        </p>
        <p className="mt-2">
          <strong>In modular arithmetic (mod 10):</strong> The numbers{' '}
          <Math>12</Math> and <Math>2</Math> are considered <em>equal</em>,
          written <Math>12 = 2</Math>, because they have the same remainder
          when divided by 10. This is not true in ordinary arithmetic.
        </p>
      </Example>

      <Callout type="note">
        <p>
          How equality is defined depends on the class <Math>T</Math> of
          objects under consideration, and to some extent is just a matter of
          definition. However, for the purposes of logic, we require that
          equality obeys certain fundamental axioms.
        </p>
      </Callout>

      <h2>The Axioms of Equality</h2>

      <p>
        For equality to be a well-behaved concept, it must satisfy the
        following four axioms:
      </p>

      <Definition id="A.7.3" title="Reflexive axiom">
        <p>
          Given any object <Math>x</Math>, we have <Math>x = x</Math>.
        </p>
        <p className="mt-2">
          In other words, every object is equal to itself.
        </p>
      </Definition>

      <Definition id="A.7.4" title="Symmetry axiom">
        <p>
          Given any two objects <Math>x</Math> and <Math>y</Math> of the same
          type, if <Math>x = y</Math>, then <Math>y = x</Math>.
        </p>
        <p className="mt-2">
          Equality is symmetric: it doesn't matter which side is written first.
        </p>
      </Definition>

      <Definition id="A.7.5" title="Transitive axiom">
        <p>
          Given any three objects <Math>x</Math>, <Math>y</Math>, <Math>z</Math>{' '}
          of the same type, if <Math>x = y</Math> and <Math>y = z</Math>, then{' '}
          <Math>x = z</Math>.
        </p>
        <p className="mt-2">
          Equality "chains": if <Math>x</Math> equals <Math>y</Math>, and{' '}
          <Math>y</Math> equals <Math>z</Math>, then <Math>x</Math> equals{' '}
          <Math>z</Math>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          The first three axioms together assert that equality is an{' '}
          <strong>equivalence relation</strong>. An equivalence relation
          partitions objects into equivalence classes, where all objects within
          a class are equal to each other.
        </p>
      </Callout>

      <Definition id="A.7.6" title="Substitution axiom">
        <p>
          Given any two objects <Math>x</Math> and <Math>y</Math> of the same
          type, if <Math>x = y</Math>, then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>f(x) = f(y)</Math> for all functions or operations{' '}
            <Math>f</Math>
          </li>
          <li>
            For any property <Math>P(x)</Math> depending on <Math>x</Math>, the
            statements <Math>P(x)</Math> and <Math>P(y)</Math> are equivalent
          </li>
        </ul>
        <p className="mt-2">
          In other words, equal objects are <strong>interchangeable</strong> in
          any expression or statement.
        </p>
      </Definition>

      <h2>Examples of the Substitution Axiom</h2>

      <Example id="A.7.7" title="Substitution with functions">
        <p>
          Let <Math>x</Math> and <Math>y</Math> be real numbers. If{' '}
          <Math>x = y</Math>, then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>2x = 2y</Math>
          </li>
          <li>
            <Math>{String.raw`\sin(x) = \sin(y)`}</Math>
          </li>
          <li>
            <Math>x + z = y + z</Math> for any real number <Math>z</Math>
          </li>
        </ul>
      </Example>

      <Example id="A.7.8" title="Substitution with properties">
        <p>
          Let <Math>n</Math> and <Math>m</Math> be integers.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            If <Math>n</Math> is odd and <Math>n = m</Math>, then{' '}
            <Math>m</Math> must also be odd.
          </li>
          <li>
            If we have a third integer <Math>k</Math>, and we know that{' '}
            <Math>{String.raw`n > k`}</Math> and <Math>n = m</Math>, then we
            also know that <Math>{String.raw`m > k`}</Math>.
          </li>
        </ul>
      </Example>

      <Example id="A.7.9" title="Chaining substitutions">
        <p>
          Let <Math>x</Math>, <Math>y</Math>, <Math>z</Math> be real numbers.
          If we know that:
        </p>
        <MathBlock>{String.raw`x = \sin(y) \quad \text{and} \quad y = z^2`}</MathBlock>
        <p className="mt-2">
          then by the substitution axiom:
        </p>
        <MathBlock>{String.raw`\sin(y) = \sin(z^2)`}</MathBlock>
        <p className="mt-2">
          and hence by the transitive axiom:
        </p>
        <MathBlock>{String.raw`x = \sin(z^2)`}</MathBlock>
      </Example>

      <h2>Defining New Equalities</h2>

      <Theorem id="A.7.10" title="Requirements for defining equality">
        <p>
          From the point of view of logic, we can define equality on a class of
          objects however we please, <strong>so long as</strong>:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>It obeys the reflexive axiom</li>
          <li>It obeys the symmetry axiom</li>
          <li>It obeys the transitive axiom</li>
          <li>
            It is consistent with all operations on that class (substitution
            axiom)
          </li>
        </ol>
      </Theorem>

      <Example id="A.7.11" title="Modular arithmetic equality">
        <p>
          If we want to define equality on integers so that{' '}
          <Math>12 = 2</Math> (modular arithmetic mod 10), we must ensure:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>2 = 12</Math> as well (symmetry)
          </li>
          <li>
            <Math>f(2) = f(12)</Math> for any operation <Math>f</Math>{' '}
            (substitution)
          </li>
        </ul>
        <p className="mt-2">
          For instance, we need <Math>2 + 5 = 12 + 5</Math>, i.e.,{' '}
          <Math>7 = 17</Math> (which is true mod 10).
        </p>
        <p className="mt-2">
          Pursuing this line of reasoning leads to the full structure of
          modular arithmetic with modulus 10.
        </p>
      </Example>

      <h2>Why These Axioms Matter</h2>

      <Callout type="info">
        <p>
          <strong>The power of substitution:</strong> The substitution axiom is
          what makes equality so useful in proofs. Whenever you have{' '}
          <Math>x = y</Math>, you can replace <Math>x</Math> with{' '}
          <Math>y</Math> (or vice versa) anywhere in your argument. This allows
          you to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            Simplify expressions by substituting equal quantities
          </li>
          <li>
            Transfer properties from one object to an equal object
          </li>
          <li>
            Chain together multiple equalities to derive new ones
          </li>
        </ul>
      </Callout>

      <Example id="A.7.12" title="Using equality in a proof">
        <p>
          Suppose we want to show that if <Math>a = b</Math> and{' '}
          <Math>c = d</Math>, then <Math>a + d = b + c</Math>.
        </p>
        <div className="proof mt-2">
          <p>
            Since <Math>a = b</Math>, by substitution we have{' '}
            <Math>a + d = b + d</Math>.
          </p>
          <p className="mt-2">
            Since <Math>c = d</Math>, by symmetry we have <Math>d = c</Math>.
          </p>
          <p className="mt-2">
            By substitution, <Math>b + d = b + c</Math>.
          </p>
          <p className="mt-2">
            By transitivity, <Math>a + d = b + c</Math>.
          </p>
        </div>
      </Example>

      <h2>Equality vs. Other Relations</h2>

      <Callout type="warning">
        <p>
          <strong>Not all relations satisfy these axioms!</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Less than (<Math>{String.raw`<`}</Math>):</strong> Not
            reflexive (<Math>{String.raw`x < x`}</Math> is false), not symmetric
          </li>
          <li>
            <strong>Less than or equal (<Math>{String.raw`\leq`}</Math>):</strong>{' '}
            Reflexive and transitive, but not symmetric
          </li>
          <li>
            <strong>Approximately equal (<Math>{String.raw`\approx`}</Math>):</strong>{' '}
            May not be transitive (if <Math>a \approx b</Math> and{' '}
            <Math>b \approx c</Math>, it doesn't always follow that{' '}
            <Math>a \approx c</Math>)
          </li>
        </ul>
        <p className="mt-2">
          Equality is special because it satisfies <em>all four</em> axioms.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>The four axioms of equality:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Reflexive:</strong> <Math>x = x</Math>
          </li>
          <li>
            <strong>Symmetric:</strong> If <Math>x = y</Math>, then{' '}
            <Math>y = x</Math>
          </li>
          <li>
            <strong>Transitive:</strong> If <Math>x = y</Math> and{' '}
            <Math>y = z</Math>, then <Math>x = z</Math>
          </li>
          <li>
            <strong>Substitution:</strong> If <Math>x = y</Math>, then{' '}
            <Math>f(x) = f(y)</Math> and <Math>P(x) \Leftrightarrow P(y)</Math>
          </li>
        </ul>
        <p className="mt-2">
          These axioms make equality an <strong>equivalence relation</strong>{' '}
          that respects all operations and properties. Any notion of equality
          must satisfy these axioms to be logically coherent.
        </p>
      </Callout>
    </LessonLayout>
  );
}
