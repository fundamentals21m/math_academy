import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <p>
        While propositional logic (using connectives like <em>and</em>,{' '}
        <em>or</em>, <em>not</em>, <em>if-then</em>) can take us quite far, to
        do mathematics we need the additional concept of{' '}
        <strong>variables</strong>—those familiar symbols such as{' '}
        <Math>x</Math> or <Math>n</Math> which denote various quantities.
        Mathematical logic is propositional logic with variables added.
      </p>

      <h2>Variables and Their Types</h2>

      <Definition id="A.4.1" title="Variable">
        <p>
          A <strong>variable</strong> is a symbol, such as <Math>n</Math> or{' '}
          <Math>x</Math>, which denotes a certain type of mathematical
          object—an integer, a vector, a matrix, etc.
        </p>
        <p className="mt-2">
          <strong>Important:</strong> In almost all circumstances, the{' '}
          <em>type</em> of object that the variable represents should be
          declared, otherwise it will be difficult to make well-formed
          statements using it.
        </p>
      </Definition>

      <Example id="A.4.2" title="Why types matter">
        <p>
          There are very few true statements one can make about variables
          without knowing their types. For instance:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Given any variable <Math>x</Math>, we have <Math>x = x</Math>{' '}
            (reflexivity)
          </li>
          <li>
            If <Math>x = y</Math>, then <Math>y = x</Math> (symmetry)
          </li>
        </ul>
        <p className="mt-2">
          But we cannot say <Math>x + y = y + x</Math> until we know the types
          of <Math>x</Math> and <Math>y</Math>. For instance, this statement
          is <strong>ill-formed</strong> if <Math>x</Math> is a matrix and{' '}
          <Math>y</Math> is a vector.
        </p>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Always declare types:</strong> If one actually wants to do
          useful mathematics, then every variable should have an explicit type.
          Failing to do so can lead to ill-formed or meaningless statements.
        </p>
      </Callout>

      <h2>Statements Involving Variables</h2>

      <p>
        One can form expressions and statements involving variables. For
        instance, if <Math>x</Math> is a real variable, then{' '}
        <Math>x + 3</Math> is an expression, and <Math>x + 3 = 5</Math> is a
        statement.
      </p>

      <Callout type="note">
        <p>
          <strong>Key difference from propositional logic:</strong> The truth
          of a statement involving a variable may depend on the{' '}
          <em>value</em> of that variable. For instance, <Math>x + 3 = 5</Math>{' '}
          is true if <Math>x = 2</Math>, but false if{' '}
          <Math>{String.raw`x \neq 2`}</Math>.
        </p>
      </Callout>

      <h2>Free and Bound Variables</h2>

      <Definition id="A.4.3" title="Free variable">
        <p>
          A <strong>free variable</strong> is a variable that is not set to any
          particular value (other than specifying its type). Statements with
          free variables might not have a definite truth value.
        </p>
      </Definition>

      <Example id="A.4.4" title="Statements with free variables">
        <p>
          Consider <Math>x + 3 = 5</Math> where <Math>x</Math> is a free real
          variable. This statement does not have a definite truth value—it
          depends on what <Math>x</Math> is.
        </p>
        <p className="mt-2">
          On the other hand, the statement{' '}
          <Math>{String.raw`(x + 1)^2 = x^2 + 2x + 1`}</Math> is true for{' '}
          <em>every</em> real number <Math>x</Math>, so we can regard this as a
          true statement even when <Math>x</Math> is free.
        </p>
      </Example>

      <Definition id="A.4.5" title="Bound variable">
        <p>
          A <strong>bound variable</strong> is a variable that is set to a
          fixed value using statements like "Let <Math>x = 2</Math>" or "Set{' '}
          <Math>x</Math> equal to 2". Statements involving only bound variables
          (and no free variables) do have a definite truth value.
        </p>
      </Definition>

      <Example id="A.4.6" title="Bound vs free">
        <p>
          If we set <Math>x = 342</Math>, then the statement{' '}
          <Math>x + 135 = 477</Math> has a definite truth value (true).
        </p>
        <p className="mt-2">
          However, if <Math>x</Math> is a free real variable, then{' '}
          <Math>x + 135 = 477</Math> could be either true or false depending
          on what <Math>x</Math> is.
        </p>
      </Example>

      <h2>Quantifiers</h2>

      <p>
        One can turn a free variable into a bound variable by using{' '}
        <strong>quantifiers</strong>: "for all" or "for some".
      </p>

      <h3>The Universal Quantifier</h3>

      <Definition id="A.4.7" title="Universal quantifier (for all)">
        <p>
          Let <Math>P(x)</Math> be some statement depending on a free variable{' '}
          <Math>x</Math>. The statement "<Math>P(x)</Math> is true{' '}
          <strong>for all</strong> <Math>x</Math> of type <Math>T</Math>" means
          that given any <Math>x</Math> of type <Math>T</Math>, the statement{' '}
          <Math>P(x)</Math> is true regardless of the exact value of{' '}
          <Math>x</Math>.
        </p>
        <p className="mt-2">
          Equivalently: "if <Math>x</Math> is of type <Math>T</Math>, then{' '}
          <Math>P(x)</Math> is true".
        </p>
        <p className="mt-2">
          <strong>Notation:</strong> The symbol <Math>{String.raw`\forall`}</Math>{' '}
          can be used. For instance,{' '}
          <Math>{String.raw`\forall x \in X: P(x)`}</Math> means{' '}
          "<Math>P(x)</Math> is true for all <Math>{String.raw`x \in X`}</Math>".
        </p>
      </Definition>

      <Example id="A.4.8" title="Using the universal quantifier">
        <p>
          The statement <Math>{String.raw`(x + 1)^2 = x^2 + 2x + 1`}</Math> has
          one free variable <Math>x</Math> and no definite truth value. But:
        </p>
        <MathBlock>{String.raw`(x + 1)^2 = x^2 + 2x + 1 \text{ for all real numbers } x`}</MathBlock>
        <p className="mt-2">
          is a statement with one <em>bound</em> variable <Math>x</Math>, and
          has a definite truth value (true).
        </p>
      </Example>

      <Theorem id="A.4.9" title="Proving and disproving 'for all' statements">
        <p>
          <strong>To prove</strong> "<Math>P(x)</Math> for all <Math>x</Math>{' '}
          of type <Math>T</Math>": Let <Math>x</Math> be an arbitrary object
          of type <Math>T</Math>, then prove <Math>P(x)</Math> for that object.
        </p>
        <p className="mt-2">
          <strong>To disprove:</strong> Produce a single{' '}
          <strong>counterexample</strong>—an element <Math>x</Math> of type{' '}
          <Math>T</Math> for which <Math>P(x)</Math> is false.
        </p>
      </Theorem>

      <Example id="A.4.10" title="Disproving a 'for all' statement">
        <p>
          The statement "<Math>{String.raw`x^2 > x`}</Math> for all positive{' '}
          <Math>x</Math>" is <strong>false</strong>. A single counterexample
          suffices: take <Math>x = 1/2</Math>. Then{' '}
          <Math>{String.raw`x^2 = 1/4 < 1/2 = x`}</Math>.
        </p>
      </Example>

      <Callout type="warning">
        <p>
          <strong>One example doesn't prove a 'for all' statement!</strong>{' '}
          Just because <Math>x + 3 = 5</Math> has a solution when{' '}
          <Math>x = 2</Math> does <em>not</em> imply that <Math>x + 3 = 5</Math>{' '}
          for all real numbers <Math>x</Math>. It only shows that{' '}
          <Math>x + 3 = 5</Math> is true for <em>some</em> real number{' '}
          <Math>x</Math>.
        </p>
      </Callout>

      <h3>Vacuously True Universal Statements</h3>

      <Theorem id="A.4.11" title="Vacuously true universal statements">
        <p>
          If there are no variables <Math>x</Math> of type <Math>T</Math>, then
          the statement "<Math>P(x)</Math> is true for all <Math>x</Math> of
          type <Math>T</Math>" is <strong>vacuously true</strong>—it is true
          but has no content, similar to a vacuous implication.
        </p>
      </Theorem>

      <Example id="A.4.12" title="A vacuously true universal statement">
        <p>
          The statement:
        </p>
        <MathBlock>{String.raw`6 < 2x < 4 \text{ for all } 3 < x < 2`}</MathBlock>
        <p className="mt-2">
          is <strong>true</strong> and easily proven, but it is{' '}
          <strong>vacuous</strong> because no real number <Math>x</Math>{' '}
          satisfies <Math>{String.raw`3 < x < 2`}</Math>.
        </p>
      </Example>

      <h3>The Existential Quantifier</h3>

      <Definition id="A.4.13" title="Existential quantifier (there exists)">
        <p>
          The statement "<Math>P(x)</Math> is true <strong>for some</strong>{' '}
          <Math>x</Math> of type <Math>T</Math>" means that there exists{' '}
          <em>at least one</em> <Math>x</Math> of type <Math>T</Math> for which{' '}
          <Math>P(x)</Math> is true (though there may be more than one such{' '}
          <Math>x</Math>).
        </p>
        <p className="mt-2">
          <strong>Notation:</strong> The symbol <Math>{String.raw`\exists`}</Math>{' '}
          can be used. For instance,{' '}
          <Math>{String.raw`\exists x \in X: P(x)`}</Math> means "there exists{' '}
          <Math>{String.raw`x \in X`}</Math> such that <Math>P(x)</Math> is true".
        </p>
      </Definition>

      <Example id="A.4.14" title="Using the existential quantifier">
        <p>
          The statement <Math>x + 3 = 5</Math> (with <Math>x</Math> free) has
          no definite truth value. But:
        </p>
        <MathBlock>{String.raw`x + 3 = 5 \text{ for some real number } x`}</MathBlock>
        <p className="mt-2">
          is <strong>true</strong>, since it is true for <Math>x = 2</Math>.
        </p>
      </Example>

      <Theorem id="A.4.15" title="Proving and disproving 'there exists' statements">
        <p>
          <strong>To prove</strong> "<Math>P(x)</Math> for some <Math>x</Math>{' '}
          of type <Math>T</Math>": Provide a <em>single example</em> of such an{' '}
          <Math>x</Math>.
        </p>
        <p className="mt-2">
          <strong>To disprove:</strong> Show that <Math>P(x)</Math> is false
          for <em>all</em> <Math>x</Math> of type <Math>T</Math>.
        </p>
      </Theorem>

      <Example id="A.4.16" title="Proving a 'there exists' statement">
        <p>
          To show that <Math>{String.raw`x^2 + 2x - 8 = 0`}</Math> for some
          real number <Math>x</Math>, we just need one example: <Math>x = 2</Math>{' '}
          works since <Math>{String.raw`4 + 4 - 8 = 0`}</Math>.
        </p>
        <p className="mt-2">
          (We could also use <Math>x = -4</Math>, but we only need one example.)
        </p>
      </Example>

      <h2>Comparing 'For All' and 'For Some'</h2>

      <Callout type="info">
        <p>
          <strong>The key difference:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>For all:</strong> Your "opponent" chooses <Math>x</Math>,
            and you must prove <Math>P(x)</Math> regardless of their choice
          </li>
          <li>
            <strong>For some:</strong> <em>You</em> choose <Math>x</Math>, and
            then you prove <Math>P(x)</Math> for that choice
          </li>
        </ul>
        <p className="mt-2">
          Usually, "for all" is much stronger than "for some". However, if
          the condition on <Math>x</Math> is impossible to satisfy, then "for
          all" is vacuously true while "for some" is false.
        </p>
      </Callout>

      <Example id="A.4.17" title="For all vs for some with impossible conditions">
        <p>
          Consider these two statements:
        </p>
        <MathBlock>{String.raw`6 < 2x < 4 \text{ for all } 3 < x < 2`}</MathBlock>
        <p className="mt-2">
          This is <strong>true</strong> (vacuously).
        </p>
        <MathBlock>{String.raw`6 < 2x < 4 \text{ for some } 3 < x < 2`}</MathBlock>
        <p className="mt-2">
          This is <strong>false</strong> (no such <Math>x</Math> exists).
        </p>
      </Example>

      <h2>Using Universal Statements</h2>

      <p>
        If you know that <Math>P(x)</Math> is true for all <Math>x</Math>, then
        you can substitute <em>any</em> specific value for <Math>x</Math> and
        conclude that <Math>P(x)</Math> holds for that value.
      </p>

      <Example id="A.4.18" title="Applying a universal statement">
        <p>
          If we know that{' '}
          <Math>{String.raw`(x + 1)^2 = x^2 + 2x + 1`}</Math> for all real
          numbers <Math>x</Math>, we can conclude:
        </p>
        <MathBlock>{String.raw`(\pi + 1)^2 = \pi^2 + 2\pi + 1`}</MathBlock>
        <p className="mt-2">
          Or, since <Math>{String.raw`\cos(y)`}</Math> is real when{' '}
          <Math>y</Math> is real:
        </p>
        <MathBlock>{String.raw`(\cos(y) + 1)^2 = \cos(y)^2 + 2\cos(y) + 1 \text{ for all real } y`}</MathBlock>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Existential statements are more limited:</strong> If you
          know that <Math>{String.raw`x^2 + 2x - 8 = 0`}</Math> for{' '}
          <em>some</em> real number <Math>x</Math>, you cannot substitute{' '}
          <Math>{String.raw`\pi`}</Math> and conclude{' '}
          <Math>{String.raw`\pi^2 + 2\pi - 8 = 0`}</Math>. You know such an{' '}
          <Math>x</Math> exists, but you don't get to pick which one it is.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key concepts about variables and quantifiers:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Variables</strong> must have declared types to make
            well-formed statements
          </li>
          <li>
            <strong>Free variables:</strong> not bound to any value;
            statements may lack definite truth values
          </li>
          <li>
            <strong>Bound variables:</strong> set to specific values or
            quantified; statements have definite truth values
          </li>
          <li>
            <strong>Universal quantifier (<Math>{String.raw`\forall`}</Math>):</strong>{' '}
            "for all"—prove by letting <Math>x</Math> be arbitrary; disprove
            with one counterexample
          </li>
          <li>
            <strong>Existential quantifier (<Math>{String.raw`\exists`}</Math>):</strong>{' '}
            "there exists"—prove with one example; disprove by showing it
            fails for all
          </li>
          <li>
            <strong>Vacuously true:</strong> "for all <Math>x</Math> in empty
            set" is true; "for some <Math>x</Math> in empty set" is false
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
