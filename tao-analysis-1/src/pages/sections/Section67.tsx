import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <p>
        One can nest two or more quantifiers together to create more complex
        mathematical statements. Understanding how nested quantifiers work is
        essential for reading and writing mathematical proofs, as many important
        definitions (such as limits, continuity, and convergence) involve
        multiple quantifiers.
      </p>

      <h2>Understanding Nested Quantifiers</h2>

      <Example id="A.5.1" title="A statement with nested quantifiers">
        <p>
          Consider the statement:
        </p>
        <MathBlock>{String.raw`\text{For every positive number } x, \text{ there exists a positive number } y \text{ such that } y^2 = x.`}</MathBlock>
        <p className="mt-2">
          What does this mean? It means that for each positive number{' '}
          <Math>x</Math>, the statement "there exists a positive number{' '}
          <Math>y</Math> such that <Math>{String.raw`y^2 = x`}</Math>" is true.
        </p>
        <p className="mt-2">
          In other words: <strong>every positive number has a positive square
          root</strong>. This statement is true.
        </p>
      </Example>

      <Callout type="info">
        <p>
          <strong>The gaming metaphor:</strong> Suppose you play a game where
          your opponent first picks a positive number <Math>x</Math>, and then
          you pick a positive number <Math>y</Math>. You win if{' '}
          <Math>{String.raw`y^2 = x`}</Math>.
        </p>
        <p className="mt-2">
          If you can <em>always</em> win regardless of what your opponent does,
          then you have proven that for every positive <Math>x</Math>, there
          exists a positive <Math>y</Math> such that{' '}
          <Math>{String.raw`y^2 = x`}</Math>.
        </p>
      </Callout>

      <h2>Negating Quantified Statements</h2>

      <Theorem id="A.5.2" title="Negating a universal statement">
        <p>
          Negating a universal statement produces an existential statement:
        </p>
        <MathBlock>{String.raw`\neg(\forall x: P(x)) \iff \exists x: \neg P(x)`}</MathBlock>
        <p className="mt-2">
          The negation of "All swans are white" is <strong>not</strong> "All
          swans are not white", but rather "There is some swan which is not
          white".
        </p>
      </Theorem>

      <Example id="A.5.3" title="Negating a 'for all' statement">
        <p>
          The negation of "For every{' '}
          <Math>{String.raw`0 < x < \pi/2`}</Math>, we have{' '}
          <Math>{String.raw`\cos(x) \geq 0`}</Math>" is:
        </p>
        <p className="mt-2">
          "For some <Math>{String.raw`0 < x < \pi/2`}</Math>, we have{' '}
          <Math>{String.raw`\cos(x) < 0`}</Math>."
        </p>
        <p className="mt-2">
          It is <strong>not</strong>: "For every{' '}
          <Math>{String.raw`0 < x < \pi/2`}</Math>, we have{' '}
          <Math>{String.raw`\cos(x) < 0`}</Math>."
        </p>
      </Example>

      <Theorem id="A.5.4" title="Negating an existential statement">
        <p>
          Negating an existential statement produces a universal statement:
        </p>
        <MathBlock>{String.raw`\neg(\exists x: P(x)) \iff \forall x: \neg P(x)`}</MathBlock>
        <p className="mt-2">
          The negation of "There exists a black swan" is <strong>not</strong>{' '}
          "There exists a swan which is non-black", but rather "All swans are
          non-black".
        </p>
      </Theorem>

      <Example id="A.5.5" title="Negating a 'there exists' statement">
        <p>
          The negation of "There exists a real number <Math>x</Math> such that{' '}
          <Math>{String.raw`x^2 + x + 1 = 0`}</Math>" is:
        </p>
        <p className="mt-2">
          "For every real number <Math>x</Math>,{' '}
          <Math>{String.raw`x^2 + x + 1 \neq 0`}</Math>."
        </p>
        <p className="mt-2">
          It is <strong>not</strong>: "There exists a real number{' '}
          <Math>x</Math> such that <Math>{String.raw`x^2 + x + 1 \neq 0`}</Math>."
        </p>
      </Example>

      <Callout type="note">
        <p>
          The situation here is very similar to how "and" and "or" behave with
          respect to negations (De Morgan's Laws). In fact, "for all" can be
          thought of as a kind of generalized "and", while "there exists" can
          be thought of as a generalized "or".
        </p>
      </Callout>

      <h2>Using Universal Statements</h2>

      <p>
        If you know that <Math>P(x)</Math> is true for all <Math>x</Math>, then
        you can set <Math>x</Math> to be anything you want, and{' '}
        <Math>P(x)</Math> will be true for that value. Universal statements are
        very versatile in their applicability.
      </p>

      <Example id="A.5.6" title="Applying a universal statement">
        <p>
          If we know that:
        </p>
        <MathBlock>{String.raw`(x + 1)^2 = x^2 + 2x + 1 \text{ for all real numbers } x`}</MathBlock>
        <p className="mt-2">
          then we can conclude:
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
          <strong>Existential statements are more limited:</strong> If you know
          that <Math>{String.raw`x^2 + 2x - 8 = 0`}</Math> for some real{' '}
          <Math>x</Math>, you cannot substitute <Math>\pi</Math> and conclude{' '}
          <Math>{String.raw`\pi^2 + 2\pi - 8 = 0`}</Math>. You know such an{' '}
          <Math>x</Math> exists, but you don't get to pick which one.
        </p>
      </Callout>

      <h2>The Order of Quantifiers Matters</h2>

      <p>
        Swapping the order of two quantifiers may or may not make a difference
        to the truth of a statement.
      </p>

      <h3>Swapping Two Universal Quantifiers</h3>

      <Theorem id="A.5.7" title="Swapping two 'for all' quantifiers">
        <p>
          Swapping two "for all" quantifiers is harmless. The statement:
        </p>
        <MathBlock>{String.raw`\text{For all real } a, \text{ for all real } b: (a + b)^2 = a^2 + 2ab + b^2`}</MathBlock>
        <p className="mt-2">
          is logically equivalent to:
        </p>
        <MathBlock>{String.raw`\text{For all real } b, \text{ for all real } a: (a + b)^2 = a^2 + 2ab + b^2`}</MathBlock>
      </Theorem>

      <h3>Swapping Two Existential Quantifiers</h3>

      <Theorem id="A.5.8" title="Swapping two 'there exists' quantifiers">
        <p>
          Similarly, swapping two "there exists" quantifiers has no effect:
        </p>
        <MathBlock>{String.raw`\exists a \in \mathbb{R}, \exists b \in \mathbb{R}: a^2 + b^2 = 0`}</MathBlock>
        <p className="mt-2">
          is logically equivalent to:
        </p>
        <MathBlock>{String.raw`\exists b \in \mathbb{R}, \exists a \in \mathbb{R}: a^2 + b^2 = 0`}</MathBlock>
      </Theorem>

      <h3>Swapping 'For All' with 'There Exists'</h3>

      <Callout type="warning">
        <p>
          <strong>Critical:</strong> Swapping a "for all" with a "there exists"
          makes a <em>lot</em> of difference! The order matters significantly.
        </p>
      </Callout>

      <Example id="A.5.9" title="The order of mixed quantifiers matters">
        <p>
          Consider these two statements about integers:
        </p>
        <p className="mt-2">
          <strong>(a)</strong> For every integer <Math>n</Math>, there exists
          an integer <Math>m</Math> which is larger than <Math>n</Math>.
        </p>
        <p className="mt-2">
          <strong>(b)</strong> There exists an integer <Math>m</Math> such that{' '}
          <Math>m</Math> is larger than <Math>n</Math> for every integer{' '}
          <Math>n</Math>.
        </p>
      </Example>

      <Theorem id="A.5.10" title="Analysis of the two statements">
        <p>
          <strong>Statement (a) is TRUE:</strong> If your opponent hands you an
          integer <Math>n</Math>, you can always find an integer <Math>m</Math>{' '}
          larger than <Math>n</Math> (for example, <Math>m = n + 1</Math>).
        </p>
        <p className="mt-2">
          <strong>Statement (b) is FALSE:</strong> If you must choose{' '}
          <Math>m</Math> first, then you cannot ensure that <Math>m</Math> is
          larger than every integer <Math>n</Math>—your opponent can easily
          pick an <Math>n</Math> bigger than your chosen <Math>m</Math>.
        </p>
      </Theorem>

      <Definition id="A.5.11" title="Why order matters">
        <p>
          The crucial difference between the two statements is:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            In statement (a), <Math>n</Math> is chosen first, and{' '}
            <Math>m</Math> can then be chosen <em>depending on</em>{' '}
            <Math>n</Math>.
          </li>
          <li>
            In statement (b), <Math>m</Math> must be chosen first, without
            knowing in advance what <Math>n</Math> will be.
          </li>
        </ul>
        <p className="mt-2">
          <strong>Key principle:</strong> Inner variables may depend on outer
          variables, but not vice versa.
        </p>
      </Definition>

      <h2>The Gaming Metaphor for Nested Quantifiers</h2>

      <Callout type="info">
        <p>
          <strong>A useful way to think about quantifiers:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>For all (<Math>{String.raw`\forall`}</Math>):</strong> Your{' '}
            <em>opponent</em> chooses the variable
          </li>
          <li>
            <strong>There exists (<Math>{String.raw`\exists`}</Math>):</strong>{' '}
            <em>You</em> choose the variable
          </li>
        </ul>
        <p className="mt-2">
          Variables are chosen in order from left to right. Later choices can
          depend on earlier choices.
        </p>
      </Callout>

      <Example id="A.5.12" title="Gaming metaphor applied">
        <p>
          For the statement "<Math>{String.raw`\forall x > 0, \exists y > 0: y^2 = x`}</Math>":
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Opponent picks a positive number <Math>x</Math></li>
          <li>You pick a positive number <Math>y</Math></li>
          <li>You win if <Math>{String.raw`y^2 = x`}</Math></li>
        </ol>
        <p className="mt-2">
          Since you pick <Math>y</Math> <em>after</em> seeing <Math>x</Math>,
          you can set <Math>{String.raw`y = \sqrt{x}`}</Math> and always win.
          Hence the statement is true.
        </p>
      </Example>

      <Example id="A.5.13" title="Gaming metaphor with reversed quantifiers">
        <p>
          For the statement "<Math>{String.raw`\exists y > 0, \forall x > 0: y^2 = x`}</Math>":
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>You pick a positive number <Math>y</Math></li>
          <li>Opponent picks a positive number <Math>x</Math></li>
          <li>You win if <Math>{String.raw`y^2 = x`}</Math></li>
        </ol>
        <p className="mt-2">
          You must pick <Math>y</Math> <em>before</em> knowing <Math>x</Math>.
          Whatever <Math>y</Math> you choose, your opponent can pick{' '}
          <Math>{String.raw`x = y^2 + 1`}</Math>, and you lose. Hence the
          statement is false.
        </p>
      </Example>

      <h2>Negating Nested Quantifiers</h2>

      <Theorem id="A.5.14" title="Negating nested quantifiers">
        <p>
          When negating a statement with multiple quantifiers, flip each
          quantifier and negate the inner statement:
        </p>
        <MathBlock>{String.raw`\neg(\forall x \exists y: P(x, y)) \iff \exists x \forall y: \neg P(x, y)`}</MathBlock>
        <MathBlock>{String.raw`\neg(\exists x \forall y: P(x, y)) \iff \forall x \exists y: \neg P(x, y)`}</MathBlock>
      </Theorem>

      <Example id="A.5.15" title="Negating a definition from analysis">
        <p>
          The definition of a limit says: "<Math>{String.raw`\lim_{n \to \infty} a_n = L`}</Math>" means:
        </p>
        <MathBlock>{String.raw`\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall n \geq N: |a_n - L| < \varepsilon`}</MathBlock>
        <p className="mt-2">
          The negation (the sequence does <em>not</em> converge to{' '}
          <Math>L</Math>) is:
        </p>
        <MathBlock>{String.raw`\exists \varepsilon > 0, \forall N \in \mathbb{N}, \exists n \geq N: |a_n - L| \geq \varepsilon`}</MathBlock>
      </Example>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key concepts about nested quantifiers:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Negation flips quantifiers:</strong>{' '}
            <Math>{String.raw`\neg\forall`}</Math> becomes{' '}
            <Math>{String.raw`\exists`}</Math>, and{' '}
            <Math>{String.raw`\neg\exists`}</Math> becomes{' '}
            <Math>{String.raw`\forall`}</Math>
          </li>
          <li>
            <strong>Same-type swapping is safe:</strong> Swapping{' '}
            <Math>{String.raw`\forall\forall`}</Math> or{' '}
            <Math>{String.raw`\exists\exists`}</Math> doesn't change meaning
          </li>
          <li>
            <strong>Mixed swapping changes meaning:</strong> Swapping{' '}
            <Math>{String.raw`\forall\exists`}</Math> to{' '}
            <Math>{String.raw`\exists\forall`}</Math> creates a different
            (usually stronger) statement
          </li>
          <li>
            <strong>Order determines dependency:</strong> Inner variables can
            depend on outer variables, not vice versa
          </li>
          <li>
            <strong>Gaming metaphor:</strong>{' '}
            <Math>{String.raw`\forall`}</Math> = opponent chooses,{' '}
            <Math>{String.raw`\exists`}</Math> = you choose
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
