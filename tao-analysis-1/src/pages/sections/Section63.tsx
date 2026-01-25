import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <p>
        Any mathematical argument proceeds in a sequence of{' '}
        <strong>mathematical statements</strong>. These are precise statements
        concerning various mathematical objects (numbers, vectors, functions, etc.)
        and relations between them (addition, equality, differentiation, etc.).
        Statements are either <em>true</em> or <em>false</em>.
      </p>

      <h2>Well-Formed and Ill-Formed Statements</h2>

      <Example id="A.1.1" title="True and false statements">
        <p>
          <Math>{String.raw`2 + 2 = 4`}</Math> is a <strong>true</strong> statement;{' '}
          <Math>{String.raw`2 + 2 = 5`}</Math> is a <strong>false</strong> statement.
        </p>
      </Example>

      <p className="mt-4">
        Not every combination of mathematical symbols is a statement. For instance:
      </p>
      <MathBlock>{String.raw`= 2 + + 4 = - = 2`}</MathBlock>
      <p className="mt-2">
        is not a statement; we call it <strong>ill-formed</strong> or{' '}
        <strong>ill-defined</strong>. The statements in the previous example are{' '}
        <strong>well-formed</strong> or <strong>well-defined</strong>. Well-formed
        statements can be either true or false; ill-formed statements are considered
        to be neither true nor false.
      </p>

      <Example id="A.1.2" title="A subtle ill-formed statement">
        <p>
          The expression <Math>{String.raw`0/0 = 1`}</Math> is ill-formed because
          division by zero is undefined. A logical argument should not contain any
          ill-formed statements.
        </p>
        <p className="mt-2">
          Thus, if an argument uses a statement such as <Math>x/y = z</Math>, it
          needs to first ensure that <Math>{String.raw`y \neq 0`}</Math>. Many
          purported proofs of "0 = 1" or other false statements rely on overlooking
          this requirement.
        </p>
      </Example>

      <Callout type="warning">
        <p>
          It is important, especially when just learning a subject, to take care in
          keeping statements well-formed and precise. Writing ill-formed statements
          can quickly confuse you into writing more and more nonsense.
        </p>
      </Callout>

      <h2>The Law of the Excluded Middle</h2>

      <p>
        One of the basic axioms of mathematical logic is that every well-formed
        statement is either true or false, but <em>not both</em>. Furthermore, the
        truth or falsity of a statement is intrinsic to the statement and does not
        depend on the opinion of the person viewing the statement (as long as all
        definitions and notations are agreed upon).
      </p>

      <Callout type="info">
        <p>
          To prove that a statement is true, it suffices to show that it is not false.
          To show that a statement is false, it suffices to show that it is not true.
          This is the principle underlying the powerful technique of{' '}
          <strong>proof by contradiction</strong>.
        </p>
      </Callout>

      <h2>Statements vs. Expressions</h2>

      <Definition id="A.1.3" title="Statements and expressions">
        <p>
          <strong>Statements</strong> are true or false.{' '}
          <strong>Expressions</strong> are sequences of mathematical symbols which
          produce some mathematical object (a number, matrix, function, set, etc.)
          as their value.
        </p>
      </Definition>

      <Example id="A.1.4" title="Distinguishing statements from expressions">
        <p>
          The expression <Math>{String.raw`2 + 3 \times 5`}</Math> is an{' '}
          <em>expression</em>, not a statement; it produces a number (17) as its
          value.
        </p>
        <p className="mt-2">
          Meanwhile, <Math>{String.raw`2 + 3 \times 5 = 17`}</Math> is a{' '}
          <em>statement</em>, not an expression.
        </p>
        <p className="mt-2">
          It does not make sense to ask whether <Math>{String.raw`2 + 3 \times 5`}</Math>{' '}
          is true or false. As with statements, expressions can be well-defined or
          ill-defined; <Math>{String.raw`2 + 3/0`}</Math>, for instance, is ill-defined.
        </p>
      </Example>

      <h2>Logical Connectives</h2>

      <p>
        One can make <strong>compound statements</strong> from more primitive
        statements by using <strong>logical connectives</strong> such as{' '}
        <em>and</em>, <em>or</em>, <em>not</em>, <em>if-then</em>,{' '}
        <em>if-and-only-if</em>, and so forth.
      </p>

      <h3>Conjunction (And)</h3>

      <Definition id="A.1.5" title="Conjunction">
        <p>
          If <Math>X</Math> is a statement and <Math>Y</Math> is a statement, the
          statement "<Math>X</Math> and <Math>Y</Math>" is true if <Math>X</Math>{' '}
          and <Math>Y</Math> are <em>both</em> true, and is false otherwise.
        </p>
      </Definition>

      <Example id="A.1.6" title="Conjunction examples">
        <ul className="list-disc list-inside space-y-1">
          <li>
            "<Math>{String.raw`2 + 2 = 4`}</Math> and <Math>{String.raw`3 + 3 = 6`}</Math>"
            is <strong>true</strong>.
          </li>
          <li>
            "<Math>{String.raw`2 + 2 = 4`}</Math> and <Math>{String.raw`3 + 3 = 5`}</Math>"
            is <strong>false</strong>.
          </li>
          <li>
            "<Math>{String.raw`2 + 2 = 4`}</Math> and <Math>{String.raw`2 + 2 = 4`}</Math>"
            is <strong>true</strong>, even if redundant. Logic is concerned with
            truth, not efficiency.
          </li>
        </ul>
      </Example>

      <h3>Disjunction (Or)</h3>

      <Definition id="A.1.7" title="Disjunction">
        <p>
          If <Math>X</Math> is a statement and <Math>Y</Math> is a statement, the
          statement "<Math>X</Math> or <Math>Y</Math>" is true if either{' '}
          <Math>X</Math> or <Math>Y</Math> is true, <em>or both</em>.
        </p>
      </Definition>

      <Example id="A.1.8" title="Disjunction examples">
        <ul className="list-disc list-inside space-y-1">
          <li>
            "<Math>{String.raw`2 + 2 = 4`}</Math> or <Math>{String.raw`3 + 3 = 5`}</Math>"
            is <strong>true</strong>.
          </li>
          <li>
            "<Math>{String.raw`2 + 2 = 5`}</Math> or <Math>{String.raw`3 + 3 = 5`}</Math>"
            is <strong>false</strong>.
          </li>
          <li>
            "<Math>{String.raw`2 + 2 = 4`}</Math> or <Math>{String.raw`3 + 3 = 6`}</Math>"
            is <strong>true</strong> (even if inefficient—it would be stronger to
            say "and").
          </li>
        </ul>
      </Example>

      <Callout type="note">
        <p>
          By default, "or" in mathematical logic means <strong>inclusive or</strong>.
          To verify "<Math>X</Math> or <Math>Y</Math>", it suffices to verify that
          just one of <Math>X</Math> or <Math>Y</Math> is true; we don't need to
          show that the other one is false.
        </p>
        <p className="mt-2">
          If you want <strong>exclusive or</strong>, use a statement such as
          "Either <Math>X</Math> or <Math>Y</Math> is true, but not both."
        </p>
      </Callout>

      <h3>Negation (Not)</h3>

      <Definition id="A.1.9" title="Negation">
        <p>
          The statement "<Math>X</Math> is not true" or "<Math>X</Math> is false",
          called the <strong>negation</strong> of <Math>X</Math>, is true if and
          only if <Math>X</Math> is false, and is false if and only if <Math>X</Math>{' '}
          is true.
        </p>
      </Definition>

      <Example id="A.1.10" title="Negation example">
        <p>
          The statement "It is not the case that <Math>{String.raw`2 + 2 = 5`}</Math>"
          is a true statement. We could abbreviate this to{' '}
          <Math>{String.raw`2 + 2 \neq 5`}</Math>.
        </p>
      </Example>

      <Theorem id="A.1.11" title="De Morgan's Laws for negation">
        <p>
          Negations convert "and" into "or", and "or" into "and":
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The negation of "<Math>X</Math> and <Math>Y</Math>" is "not{' '}
            <Math>X</Math> <em>or</em> not <Math>Y</Math>".
          </li>
          <li>
            The negation of "<Math>X</Math> or <Math>Y</Math>" is "not{' '}
            <Math>X</Math> <em>and</em> not <Math>Y</Math>".
          </li>
        </ul>
      </Theorem>

      <Example id="A.1.12" title="Applying De Morgan's Laws">
        <p>
          If <Math>x</Math> is an integer:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The negation of "<Math>x</Math> is even and non-negative" is{' '}
            "<Math>x</Math> is odd <em>or</em> negative", not "<Math>x</Math> is
            odd and negative".
          </li>
          <li>
            The negation of "<Math>{String.raw`x \geq 2`}</Math> and{' '}
            <Math>{String.raw`x \leq 6`}</Math>" (i.e.,{' '}
            <Math>{String.raw`2 \leq x \leq 6`}</Math>) is{' '}
            "<Math>{String.raw`x < 2`}</Math> <em>or</em>{' '}
            <Math>{String.raw`x > 6`}</Math>".
          </li>
        </ul>
      </Example>

      <h3>If and Only If (Iff)</h3>

      <Definition id="A.1.13" title="Logical equivalence">
        <p>
          If <Math>X</Math> is a statement and <Math>Y</Math> is a statement, we
          say "<Math>X</Math> is true <strong>if and only if</strong>{' '}
          <Math>Y</Math> is true" whenever:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Whenever <Math>X</Math> is true, <Math>Y</Math> has to be also
          </li>
          <li>
            Whenever <Math>Y</Math> is true, <Math>X</Math> has to be also
          </li>
        </ul>
        <p className="mt-2">
          We also say "<Math>X</Math> and <Math>Y</Math> are logically equivalent",
          or write "<Math>X</Math> iff <Math>Y</Math>" or{' '}
          "<Math>{String.raw`X \Leftrightarrow Y`}</Math>".
        </p>
      </Definition>

      <Example id="A.1.14" title="If and only if examples">
        <p>
          Let <Math>x</Math> be a real number.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            "<Math>{String.raw`x = 3`}</Math> if and only if{' '}
            <Math>{String.raw`2x = 6`}</Math>" is <strong>true</strong>: whenever{' '}
            <Math>{String.raw`x = 3`}</Math>, we have <Math>{String.raw`2x = 6`}</Math>,
            and whenever <Math>{String.raw`2x = 6`}</Math>, we have{' '}
            <Math>{String.raw`x = 3`}</Math>.
          </li>
          <li>
            "<Math>{String.raw`x = 3`}</Math> if and only if{' '}
            <Math>{String.raw`x^2 = 9`}</Math>" is <strong>false</strong>: while{' '}
            <Math>{String.raw`x = 3`}</Math> implies <Math>{String.raw`x^2 = 9`}</Math>,
            it is not the case that <Math>{String.raw`x^2 = 9`}</Math> implies{' '}
            <Math>{String.raw`x = 3`}</Math> (consider <Math>{String.raw`x = -3`}</Math>).
          </li>
        </ul>
      </Example>

      <Callout type="info">
        <p>
          <strong>Equally true means equally false:</strong> If <Math>X</Math> and{' '}
          <Math>Y</Math> are logically equivalent, and <Math>X</Math> is false, then{' '}
          <Math>Y</Math> has to be false also (because if <Math>Y</Math> were true,
          then <Math>X</Math> would also have to be true).
        </p>
        <p className="mt-2">
          Thus, for instance, "<Math>{String.raw`2 + 2 = 5`}</Math> if and only if{' '}
          <Math>{String.raw`4 + 4 = 10`}</Math>" is true, since both statements
          are equally false.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key concepts about mathematical statements:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            Statements are either <strong>true</strong> or <strong>false</strong>,
            but not both
          </li>
          <li>
            <strong>Ill-formed</strong> statements (like <Math>0/0 = 1</Math>) are
            neither true nor false
          </li>
          <li>
            <strong>Expressions</strong> produce values; <strong>statements</strong>{' '}
            have truth values
          </li>
          <li>
            Logical connectives (<em>and</em>, <em>or</em>, <em>not</em>,{' '}
            <em>iff</em>) combine statements into compound statements
          </li>
          <li>
            "Or" in mathematics defaults to <strong>inclusive or</strong>
          </li>
          <li>
            Negation swaps "and" with "or" (De Morgan's Laws)
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
