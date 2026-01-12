import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-semibold mb-4">The Extended Real Number System</h2>

      <p className="mb-4">
        The extended real number system is obtained by adding two symbols, <InlineMath>{'+\\infty'}</InlineMath> and <InlineMath>{'-\\infty'}</InlineMath>,
        to the real field <InlineMath>{'R'}</InlineMath>. This extension is convenient for dealing with
        unbounded sets and makes certain statements about limits and bounds more elegant.
      </p>

      <Definition title="1.23 - Extended Real Numbers">
        <p className="mb-3">
          The <em>extended real number system</em> consists of the real field <InlineMath>{'R'}</InlineMath> and
          two symbols, <InlineMath>{'+\\infty'}</InlineMath> and <InlineMath>{'-\\infty'}</InlineMath>. We preserve
          the original order in <InlineMath>{'R'}</InlineMath>, and define
        </p>
        <MathBlock>{'-\\infty < x < +\\infty'}</MathBlock>
        <p>for every <InlineMath>{'x \\in R'}</InlineMath>.</p>
      </Definition>

      <Callout type="info" title="Upper and Lower Bounds">
        <p className="mb-3">
          It is then clear that <InlineMath>{'+\\infty'}</InlineMath> is an upper bound of every subset of the
          extended real number system, and that every nonempty subset has a least upper bound.
        </p>
        <p>
          If, for example, <InlineMath>{'E'}</InlineMath> is a nonempty set of real numbers which is
          not bounded above in <InlineMath>{'R'}</InlineMath>, then <InlineMath>{'\\sup E = +\\infty'}</InlineMath> in
          the extended real number system. Exactly the same remarks apply to lower bounds.
        </p>
      </Callout>

      <Callout type="warning" title="Not a Field">
        <p>
          The extended real number system does <strong>not</strong> form a field, but it is customary
          to make the following conventions for arithmetic operations:
        </p>
      </Callout>

      <Definition title="Arithmetic Conventions">
        <p className="mb-3">
          <strong>(a)</strong> If <InlineMath>{'x'}</InlineMath> is real then
        </p>
        <MathBlock>{'x + \\infty = +\\infty, \\quad x - \\infty = -\\infty, \\quad \\frac{x}{+\\infty} = \\frac{x}{-\\infty} = 0'}</MathBlock>

        <p className="mb-3">
          <strong>(b)</strong> If <InlineMath>{'x > 0'}</InlineMath> then <InlineMath>{'x \\cdot (+\\infty) = +\\infty'}</InlineMath>, <InlineMath>{'x \\cdot (-\\infty) = -\\infty'}</InlineMath>.
        </p>

        <p className="mb-3">
          <strong>(c)</strong> If <InlineMath>{'x < 0'}</InlineMath> then <InlineMath>{'x \\cdot (+\\infty) = -\\infty'}</InlineMath>, <InlineMath>{'x \\cdot (-\\infty) = +\\infty'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="note" title="Finite vs. Infinite">
        <p>
          When it is desired to make the distinction between real numbers on the one hand
          and the symbols <InlineMath>{'+\\infty'}</InlineMath> and <InlineMath>{'-\\infty'}</InlineMath> on the
          other quite explicit, the former are called <em>finite</em>.
        </p>
      </Callout>

      <Example title="Using the Extended Reals">
        <p className="mb-3">
          Consider the set <InlineMath>{'E = \\{n : n \\text{ is a positive integer}\\}'}</InlineMath>.
          In <InlineMath>{'R'}</InlineMath>, this set has no upper bound, and hence no supremum in <InlineMath>{'R'}</InlineMath>.
        </p>
        <p className="mb-3">
          However, in the extended real number system, we can write:
        </p>
        <MathBlock>{'\\sup E = +\\infty'}</MathBlock>
        <p className="mb-3">
          Similarly, for <InlineMath>{'F = \\{-n : n \\text{ is a positive integer}\\}'}</InlineMath>:
        </p>
        <MathBlock>{'\\inf F = -\\infty'}</MathBlock>
        <p>
          This notation is convenient because it allows us to state that every nonempty subset of the
          extended real number system has both a supremum and an infimum.
        </p>
      </Example>

      <Callout type="warning" title="Undefined Operations">
        <p className="mb-3">
          Some operations are <strong>not defined</strong> in the extended real number system:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{'+\\infty + (-\\infty)'}</InlineMath> is undefined</li>
          <li><InlineMath>{'0 \\cdot (\\pm\\infty)'}</InlineMath> is undefined</li>
          <li><InlineMath>{'\\frac{\\pm\\infty}{\\pm\\infty}'}</InlineMath> is undefined</li>
        </ul>
        <p className="mt-3">
          These are the so-called "indeterminate forms" that arise in calculus.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The extended real number system adds <InlineMath>{'+\\infty'}</InlineMath> and <InlineMath>{'-\\infty'}</InlineMath> to <InlineMath>{'R'}</InlineMath></li>
        <li>Every real number lies between <InlineMath>{'-\\infty'}</InlineMath> and <InlineMath>{'+\\infty'}</InlineMath></li>
        <li>Every nonempty subset of the extended reals has a supremum and infimum</li>
        <li>The extended real number system is NOT a field</li>
        <li>Certain arithmetic conventions are adopted for operations involving <InlineMath>{'\\pm\\infty'}</InlineMath></li>
        <li>Some operations (like <InlineMath>{'+\\infty + (-\\infty)'}</InlineMath>) remain undefined</li>
      </ul>
    </LessonLayout>
  );
}
