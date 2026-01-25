import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Elementary Consequences of the Axioms</h2>
      <p>
        The following theorems are easily deduced from the axioms for a linear space.
        These fundamental properties govern elementary algebraic manipulations in any linear space.
      </p>

      <h3>Uniqueness of the Zero Element</h3>

      <Callout type="info">
        <strong>Theorem 1.1 (Uniqueness of Zero):</strong> In any linear space there is one and only one zero element.
      </Callout>

      <p><strong>Proof:</strong> Axiom 5 tells us that there is at least one zero element. Suppose there were two,
        say <InlineMath>O_1</InlineMath> and <InlineMath>O_2</InlineMath>. Taking <InlineMath>x = O_1</InlineMath>
        and <InlineMath>0 = O_2</InlineMath> in Axiom 5, we obtain:
      </p>
      <MathBlock>O_1 + O_2 = O_1</MathBlock>
      <p>
        Similarly, taking <InlineMath>x = O_2</InlineMath> and <InlineMath>0 = O_1</InlineMath>, we find:
      </p>
      <MathBlock>O_2 + O_1 = O_2</MathBlock>
      <p>
        But <InlineMath>O_1 + O_2 = O_2 + O_1</InlineMath> because of the commutative law, so <InlineMath>O_1 = O_2</InlineMath>.
      </p>

      <h3>Uniqueness of Negatives</h3>

      <Callout type="info">
        <strong>Theorem 1.2 (Uniqueness of Negatives):</strong> In any linear space every element
        has exactly one negative. That is, for every <InlineMath>x</InlineMath> there is one and only
        one <InlineMath>y</InlineMath> such that <InlineMath>x + y = 0</InlineMath>.
      </Callout>

      <p><strong>Proof:</strong> Axiom 6 tells us that each <InlineMath>x</InlineMath> has at least one negative,
        namely <InlineMath>(-1)x</InlineMath>. Suppose <InlineMath>x</InlineMath> has two negatives, say <InlineMath>y_1</InlineMath>
        and <InlineMath>y_2</InlineMath>. Then <InlineMath>x + y_1 = 0</InlineMath> and <InlineMath>x + y_2 = 0</InlineMath>.
        Adding <InlineMath>y_2</InlineMath> to both members of the first equation and using the axioms:
      </p>
      <MathBlock>y_2 + (x + y_1) = (y_2 + x) + y_1 = 0 + y_1 = y_1 + 0 = y_1</MathBlock>
      <p>and</p>
      <MathBlock>y_2 + (x + y_1) = y_2 + 0 = y_2</MathBlock>
      <p>
        Therefore <InlineMath>y_1 = y_2</InlineMath>, so <InlineMath>x</InlineMath> has exactly one negative.
      </p>

      <p><strong>Notation:</strong> The negative of <InlineMath>x</InlineMath> is denoted by <InlineMath>-x</InlineMath>.
        The difference <InlineMath>y - x</InlineMath> is defined to be the sum <InlineMath>y + (-x)</InlineMath>.
      </p>

      <h3>Algebraic Properties</h3>

      <Callout type="info">
        <strong>Theorem 1.3:</strong> In a given linear space, let <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>
        denote arbitrary elements and let <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> denote arbitrary scalars.
        Then we have the following properties:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>(a) <InlineMath>0 \cdot x = 0</InlineMath></li>
          <li>(b) <InlineMath>a \cdot 0 = 0</InlineMath></li>
          <li>(c) <InlineMath>(-a)x = -(ax) = a(-x)</InlineMath></li>
          <li>(d) If <InlineMath>ax = 0</InlineMath>, then either <InlineMath>a = 0</InlineMath> or <InlineMath>x = 0</InlineMath></li>
          <li>(e) If <InlineMath>ax = ay</InlineMath> and <InlineMath>a \neq 0</InlineMath>, then <InlineMath>x = y</InlineMath></li>
          <li>(f) If <InlineMath>ax = bx</InlineMath> and <InlineMath>x \neq 0</InlineMath>, then <InlineMath>a = b</InlineMath></li>
          <li>(g) <InlineMath>-(x + y) = (-x) + (-y) = -x - y</InlineMath></li>
          <li>(h) <InlineMath>x + x = 2x</InlineMath>, <InlineMath>x + x + x = 3x</InlineMath>, and in general, <InlineMath>{'\\sum_{i=1}^n x = nx'}</InlineMath></li>
        </ul>
      </Callout>

      <h4>Proof of (a)</h4>
      <p>
        Let <InlineMath>z = 0 \cdot x</InlineMath>. We wish to prove that <InlineMath>z = 0</InlineMath>.
        Adding <InlineMath>z</InlineMath> to itself and using Axiom 9:
      </p>
      <MathBlock>z + z = 0 \cdot x + 0 \cdot x = (0 + 0)x = 0 \cdot x = z</MathBlock>
      <p>Now add <InlineMath>-z</InlineMath> to both members to get <InlineMath>z = 0</InlineMath>.</p>

      <h4>Proof of (b)</h4>
      <p>Let <InlineMath>z = a \cdot 0</InlineMath>, add <InlineMath>z</InlineMath> to itself, and use Axiom 8.</p>

      <h4>Proof of (c)</h4>
      <p>
        Let <InlineMath>z = (-a)x</InlineMath>. Adding <InlineMath>z</InlineMath> to <InlineMath>ax</InlineMath> and using Axiom 9:
      </p>
      <MathBlock>z + ax = (-a)x + ax = (-a + a)x = 0 \cdot x = 0</MathBlock>
      <p>
        so <InlineMath>z</InlineMath> is the negative of <InlineMath>ax</InlineMath>, meaning <InlineMath>z = -(ax)</InlineMath>.
        Similarly, if we add <InlineMath>a(-x)</InlineMath> to <InlineMath>ax</InlineMath> and use Axiom 8 and
        property (b), we find that <InlineMath>a(-x) = -(ax)</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> These fundamental properties show that linear spaces behave algebraically
        much like we would expect. The zero element is unique, negatives are unique, and the familiar rules
        of arithmetic extend naturally to abstract linear spaces.
      </Callout>
    </LessonLayout>
  );
}
