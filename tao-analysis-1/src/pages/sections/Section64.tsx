import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <p>
        Now we come to the least intuitive of the commonly used logical
        connectives—<strong>implication</strong>. If <Math>X</Math> is a statement
        and <Math>Y</Math> is a statement, then "if <Math>X</Math>, then{' '}
        <Math>Y</Math>" is the <em>implication</em> from <Math>X</Math> to{' '}
        <Math>Y</Math>.
      </p>

      <h2>The Definition of Implication</h2>

      <Definition id="A.2.1" title="Implication">
        <p>
          The statement "if <Math>X</Math>, then <Math>Y</Math>" (also written
          "when <Math>X</Math> is true, <Math>Y</Math> is true", or{' '}
          "<Math>X</Math> implies <Math>Y</Math>", or{' '}
          "<Math>{String.raw`X \Rightarrow Y`}</Math>") has the following meaning:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            If <Math>X</Math> is <strong>true</strong>, then "if <Math>X</Math>,
            then <Math>Y</Math>" is true when <Math>Y</Math> is true, and false
            when <Math>Y</Math> is false.
          </li>
          <li>
            If <Math>X</Math> is <strong>false</strong>, then "if <Math>X</Math>,
            then <Math>Y</Math>" is <em>always true</em>, regardless of whether{' '}
            <Math>Y</Math> is true or false!
          </li>
        </ul>
      </Definition>

      <Callout type="warning">
        <p>
          <strong>The key insight:</strong> When the hypothesis <Math>X</Math> is
          false, the implication "if <Math>X</Math>, then <Math>Y</Math>" is
          automatically true. Such an implication is called <strong>vacuous</strong>
          —it does not convey any new information beyond the fact that the hypothesis
          is false.
        </p>
      </Callout>

      <Example id="A.2.2" title="Understanding implication">
        <p>
          If <Math>x</Math> is an integer, then the statement "If{' '}
          <Math>{String.raw`x = 2`}</Math>, then <Math>{String.raw`x^2 = 4`}</Math>"
          is true, regardless of whether <Math>x</Math> is actually equal to 2 or
          not.
        </p>
        <p className="mt-2">
          This statement does not assert that <Math>{String.raw`x = 2`}</Math>, and
          does not assert that <Math>{String.raw`x^2 = 4`}</Math>. It only asserts
          that <em>when and if</em> <Math>x</Math> is equal to 2, then{' '}
          <Math>{String.raw`x^2`}</Math> is equal to 4.
        </p>
        <p className="mt-2">
          Some special cases:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            "If <Math>{String.raw`2 = 2`}</Math>, then{' '}
            <Math>{String.raw`2^2 = 4`}</Math>" is <strong>true</strong> (true
            implies true)
          </li>
          <li>
            "If <Math>{String.raw`3 = 2`}</Math>, then{' '}
            <Math>{String.raw`3^2 = 4`}</Math>" is <strong>true</strong> (false
            implies false—vacuous)
          </li>
          <li>
            "If <Math>{String.raw`-2 = 2`}</Math>, then{' '}
            <Math>{String.raw`(-2)^2 = 4`}</Math>" is <strong>true</strong> (false
            implies true—vacuous)
          </li>
        </ul>
      </Example>

      <h2>Disproving an Implication</h2>

      <Theorem id="A.2.3" title="The only way to disprove an implication">
        <p>
          The <strong>only</strong> way to disprove an implication "if{' '}
          <Math>X</Math>, then <Math>Y</Math>" is to show that the hypothesis{' '}
          <Math>X</Math> is true while the conclusion <Math>Y</Math> is false.
        </p>
        <p className="mt-2">
          In other words: <strong>True does not imply false.</strong>
        </p>
      </Theorem>

      <Example id="A.2.4" title="A false implication">
        <p>
          "If <Math>{String.raw`2 + 2 = 4`}</Math>, then{' '}
          <Math>{String.raw`4 + 4 = 2`}</Math>" is a <strong>false</strong>{' '}
          implication, because the hypothesis is true but the conclusion is false.
        </p>
      </Example>

      <Callout type="note">
        <p>
          One can think of "if <Math>X</Math>, then <Math>Y</Math>" as saying{' '}
          "<Math>Y</Math> is <em>at least as true as</em> <Math>X</Math>". If{' '}
          <Math>X</Math> is true, then <Math>Y</Math> also has to be true; but if{' '}
          <Math>X</Math> is false, <Math>Y</Math> could be as false as{' '}
          <Math>X</Math>, or it could also be true.
        </p>
        <p className="mt-2">
          Compare this with "<Math>X</Math> if and only if <Math>Y</Math>", which
          asserts that <Math>X</Math> and <Math>Y</Math> are <em>equally true</em>.
        </p>
      </Callout>

      <h2>Vacuous Implications</h2>

      <p>
        Vacuously true implications are often used in ordinary speech, sometimes
        without realizing it:
      </p>

      <Example id="A.2.5" title="Vacuous implications in everyday language">
        <ul className="list-disc list-inside space-y-2">
          <li>
            "If wishes were wings, then pigs would fly." (Vacuous—wishes are not
            wings)
          </li>
          <li>
            "If John had left work at 5pm, then he would be here by now." (Often
            used when both hypothesis and conclusion are false)
          </li>
        </ul>
      </Example>

      <Callout type="info">
        <p>
          <strong>Vacuous implications are still useful!</strong> The statement
          "If John had left work at 5pm, then he would be here by now" can be used
          for <em>proof by contradiction</em>: if you believe this implication,
          and you know "John is not here by now", then you can conclude "John did
          not leave work at 5pm"—because John leaving at 5pm would lead to a
          contradiction.
        </p>
      </Callout>

      <h2>Proving an Implication</h2>

      <p>
        To prove an implication "If <Math>X</Math>, then <Math>Y</Math>", the
        usual way is to first <em>assume</em> that <Math>X</Math> is true, and use
        this (together with other known facts) to deduce <Math>Y</Math>.
      </p>

      <Theorem id="A.2.6" title="Proposition: A valid proof of a vacuous implication">
        <p>
          If <Math>{String.raw`2 + 2 = 5`}</Math>, then{' '}
          <Math>{String.raw`4 = 10 - 4`}</Math>.
        </p>
        <div className="proof">
          <p>
            Assume <Math>{String.raw`2 + 2 = 5`}</Math>. Multiplying both sides by
            2, we obtain <Math>{String.raw`4 + 4 = 10`}</Math>. Subtracting 4 from
            both sides, we obtain <Math>{String.raw`4 = 10 - 4`}</Math> as desired.
          </p>
        </div>
      </Theorem>

      <p className="mt-4">
        This is a valid proof of a true proposition, even though both hypothesis
        and conclusion of the proposition are false!
      </p>

      <Callout type="warning">
        <p>
          <strong>Common error:</strong> A common mistake is to prove an implication
          by first assuming the <em>conclusion</em> and then arriving at the
          hypothesis. For instance:
        </p>
        <p className="mt-2">
          <strong>Proposition:</strong> Suppose that{' '}
          <Math>{String.raw`2x + 3 = 7`}</Math>. Show that{' '}
          <Math>{String.raw`x = 2`}</Math>.
        </p>
        <p className="mt-2">
          <strong>Incorrect proof:</strong> <Math>{String.raw`x = 2`}</Math>; so{' '}
          <Math>{String.raw`2x = 4`}</Math>; so{' '}
          <Math>{String.raw`2x + 3 = 7`}</Math>. ✗
        </p>
        <p className="mt-2">
          When doing proofs, it is important to distinguish the hypothesis from the
          conclusion!
        </p>
      </Callout>

      <h2>Converse and Contrapositive</h2>

      <Definition id="A.2.7" title="Converse">
        <p>
          The statement "If <Math>Y</Math>, then <Math>X</Math>" is called the{' '}
          <strong>converse</strong> of "If <Math>X</Math>, then <Math>Y</Math>".
        </p>
        <p className="mt-2">
          <strong>Important:</strong> The converse of a true implication is{' '}
          <em>not necessarily</em> a true implication.
        </p>
      </Definition>

      <Example id="A.2.8" title="A true implication with a false converse">
        <p>
          While "If <Math>{String.raw`x = 2`}</Math>, then{' '}
          <Math>{String.raw`x^2 = 4`}</Math>" is true, the converse "If{' '}
          <Math>{String.raw`x^2 = 4`}</Math>, then <Math>{String.raw`x = 2`}</Math>"
          can be false (consider <Math>{String.raw`x = -2`}</Math>).
        </p>
      </Example>

      <Definition id="A.2.9" title="Inverse">
        <p>
          The statement "If <Math>X</Math> is false, then <Math>Y</Math> is false"
          is called the <strong>inverse</strong> of "If <Math>X</Math>, then{' '}
          <Math>Y</Math>".
        </p>
        <p className="mt-2">
          <strong>Important:</strong> The inverse of a true implication is{' '}
          <em>not necessarily</em> a true implication.
        </p>
      </Definition>

      <Definition id="A.2.10" title="Contrapositive">
        <p>
          The statement "If <Math>Y</Math> is false, then <Math>X</Math> is false"
          is called the <strong>contrapositive</strong> of "If <Math>X</Math>, then{' '}
          <Math>Y</Math>".
        </p>
        <p className="mt-2">
          <strong>Key fact:</strong> The contrapositive of an implication is{' '}
          <em>logically equivalent</em> to the original implication. Both statements
          are equally true.
        </p>
      </Definition>

      <Example id="A.2.11" title="Using the contrapositive">
        <p>
          If we know "If <Math>{String.raw`x = 2`}</Math>, then{' '}
          <Math>{String.raw`x^2 = 4`}</Math>", then we also know the contrapositive:
          "If <Math>{String.raw`x^2 \neq 4`}</Math>, then{' '}
          <Math>{String.raw`x \neq 2`}</Math>".
        </p>
        <p className="mt-2">
          Similarly, if we know "If John had left work at 5pm, he would be here by
          now", then we also know "If John isn't here now, then he could not have
          left work at 5pm".
        </p>
      </Example>

      <h2>Proof by Contradiction</h2>

      <Theorem id="A.2.12" title="Proof by contradiction (reductio ad absurdum)">
        <p>
          To show that something must be false, assume first that it is true, and
          show that this implies something which you know to be false (e.g., that
          a statement is simultaneously true and not true).
        </p>
      </Theorem>

      <Theorem id="A.2.13" title="Proposition: Example of proof by contradiction">
        <p>
          Suppose that <Math>x</Math> is a positive number such that{' '}
          <Math>{String.raw`\sin(x) = 1`}</Math>. Then{' '}
          <Math>{String.raw`x \geq \pi/2`}</Math>.
        </p>
        <div className="proof">
          <p>
            Suppose for sake of contradiction that{' '}
            <Math>{String.raw`x < \pi/2`}</Math>. Since <Math>x</Math> is positive,
            we have <Math>{String.raw`0 < x < \pi/2`}</Math>.
          </p>
          <p className="mt-2">
            Since <Math>{String.raw`\sin(x)`}</Math> is increasing for{' '}
            <Math>{String.raw`0 < x < \pi/2`}</Math>, and{' '}
            <Math>{String.raw`\sin(0) = 0`}</Math> and{' '}
            <Math>{String.raw`\sin(\pi/2) = 1`}</Math>, we have{' '}
            <Math>{String.raw`0 < \sin(x) < 1`}</Math>.
          </p>
          <p className="mt-2">
            But this contradicts the hypothesis that{' '}
            <Math>{String.raw`\sin(x) = 1`}</Math>. Hence{' '}
            <Math>{String.raw`x \geq \pi/2`}</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          <strong>A feature of proof by contradiction:</strong> At some point you
          assume a hypothesis which later turns out to be false. However, this does
          not alter the validity of the argument—the ultimate conclusion does not
          rely on that hypothesis being true; it relies on it being <em>false</em>!
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key concepts about implication:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            "If <Math>X</Math>, then <Math>Y</Math>" is false <em>only</em> when{' '}
            <Math>X</Math> is true and <Math>Y</Math> is false
          </li>
          <li>
            When the hypothesis is false, the implication is automatically true
            (but <strong>vacuous</strong>)
          </li>
          <li>
            The <strong>converse</strong> ("If <Math>Y</Math>, then <Math>X</Math>")
            is not equivalent to the original
          </li>
          <li>
            The <strong>contrapositive</strong> ("If not <Math>Y</Math>, then not{' '}
            <Math>X</Math>") <em>is</em> equivalent to the original
          </li>
          <li>
            <strong>Proof by contradiction:</strong> assume the negation, derive a
            contradiction
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
