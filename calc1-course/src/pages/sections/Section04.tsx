import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-semibold mb-4">Mathematical Induction</h2>

      <p className="text-dark-200 mb-6">
        Mathematical induction is a powerful method for proving statements about
        positive integers. It allows us to establish that a property holds for
        infinitely many cases through a finite proof.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">An Example of Proof by Mathematical Induction</h2>

      <p className="text-dark-200 mb-4">
        Before stating the general principle, let's examine a concrete example.
        Consider the formula for the sum of the first <InlineMath>{'n'}</InlineMath> squares:
      </p>

      <MathBlock>{'1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}'}</MathBlock>

      <p className="text-dark-200 mb-4">
        We can verify this formula for small values of <InlineMath>{'n'}</InlineMath>:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-2">
        <li>For <InlineMath>{'n = 1'}</InlineMath>: <InlineMath>{'1^2 = 1'}</InlineMath> and <InlineMath>{'\\frac{1 \\cdot 2 \\cdot 3}{6} = 1'}</InlineMath> ✓</li>
        <li>For <InlineMath>{'n = 2'}</InlineMath>: <InlineMath>{'1 + 4 = 5'}</InlineMath> and <InlineMath>{'\\frac{2 \\cdot 3 \\cdot 5}{6} = 5'}</InlineMath> ✓</li>
        <li>For <InlineMath>{'n = 3'}</InlineMath>: <InlineMath>{'1 + 4 + 9 = 14'}</InlineMath> and <InlineMath>{'\\frac{3 \\cdot 4 \\cdot 7}{6} = 14'}</InlineMath> ✓</li>
      </ul>

      <p className="text-dark-200 mb-6">
        But checking finitely many cases doesn't prove the formula holds for{' '}
        <em>all</em> positive integers. Mathematical induction provides a way to
        bridge this gap.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Principle of Mathematical Induction</h2>

      <p className="text-dark-200 mb-4">
        The proof by induction consists of two steps:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Two Steps of Mathematical Induction</p>
        <p className="mb-2">
          <strong>Step 1 (Base Case):</strong> Prove that the statement is true
          for <InlineMath>{'n = 1'}</InlineMath>.
        </p>
        <p>
          <strong>Step 2 (Inductive Step):</strong> Prove that <em>if</em> the
          statement is true for <InlineMath>{'n = k'}</InlineMath>, <em>then</em> it is
          also true for <InlineMath>{'n = k + 1'}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4">
        Let's apply this to our sum of squares formula. Let <InlineMath>{'A(n)'}</InlineMath>{' '}
        denote the assertion that
      </p>

      <MathBlock>{'1^2 + 2^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}'}</MathBlock>

      <Callout type="example">
        <p className="font-semibold mb-2">Proof: Sum of Squares Formula</p>
        <p className="mb-2"><strong>Base Case:</strong> We verify <InlineMath>{'A(1)'}</InlineMath>:</p>
        <MathBlock>{'1^2 = 1 = \\frac{1 \\cdot 2 \\cdot 3}{6}'}</MathBlock>
        <p className="mb-4">So <InlineMath>{'A(1)'}</InlineMath> is true.</p>

        <p className="mb-2"><strong>Inductive Step:</strong> Assume <InlineMath>{'A(k)'}</InlineMath> is true for some positive integer <InlineMath>{'k'}</InlineMath>:</p>
        <MathBlock>{'1^2 + 2^2 + \\cdots + k^2 = \\frac{k(k+1)(2k+1)}{6}'}</MathBlock>

        <p className="mb-2">We must prove <InlineMath>{'A(k+1)'}</InlineMath>, i.e., that</p>
        <MathBlock>{'1^2 + 2^2 + \\cdots + k^2 + (k+1)^2 = \\frac{(k+1)(k+2)(2k+3)}{6}'}</MathBlock>

        <p className="mb-2">Starting with the left side and using the inductive hypothesis:</p>
        <MathBlock>{'\\begin{aligned} 1^2 + \\cdots + k^2 + (k+1)^2 &= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2 \\[8pt] &= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6} \\[8pt] &= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6} \\[8pt] &= \\frac{(k+1)(2k^2 + 7k + 6)}{6} \\[8pt] &= \\frac{(k+1)(k+2)(2k+3)}{6} \\end{aligned}'}</MathBlock>

        <p>This is exactly <InlineMath>{'A(k+1)'}</InlineMath>, completing the proof.</p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Formal Statement</h2>

      <p className="text-dark-200 mb-4">
        The principle of mathematical induction is stated formally as follows:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.36 (Principle of Mathematical Induction)</p>
        <p className="mb-2">
          Let <InlineMath>{'S'}</InlineMath> be a set of positive integers with the
          following properties:
        </p>
        <ol className="list-decimal list-inside mb-2 space-y-1">
          <li>The number <InlineMath>{'1'}</InlineMath> belongs to <InlineMath>{'S'}</InlineMath>.</li>
          <li>If an integer <InlineMath>{'k'}</InlineMath> belongs to <InlineMath>{'S'}</InlineMath>, then so does <InlineMath>{'k + 1'}</InlineMath>.</li>
        </ol>
        <p>
          Then <InlineMath>{'S'}</InlineMath> contains every positive integer.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        The proof follows from the properties of positive integers. Think of the
        positive integers as an infinite row of toy soldiers. Property (1) says
        that the first soldier falls. Property (2) says that whenever one soldier
        falls, the next one falls too. Together, these guarantee that all soldiers fall.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">The Inductive Hypothesis</p>
        <p>
          In the inductive step, we assume the statement is true for <InlineMath>{'n = k'}</InlineMath>.
          This assumption is called the <strong>inductive hypothesis</strong>. It is{' '}
          <em>not</em> circular reasoning—we are proving a conditional statement:
          "if true for <InlineMath>{'k'}</InlineMath>, then true for <InlineMath>{'k+1'}</InlineMath>."
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Well-Ordering Principle</h2>

      <p className="text-dark-200 mb-4">
        There is an equivalent formulation of the induction principle known as
        the well-ordering principle:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Theorem I.37 (Well-Ordering Principle)</p>
        <p>
          Every nonempty set of positive integers contains a smallest member.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        This principle and mathematical induction are logically equivalent—each
        can be derived from the other.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Using Well-Ordering for Proof</p>
        <p>
          To prove a statement <InlineMath>{'A(n)'}</InlineMath> using well-ordering,
          suppose <InlineMath>{'A(n)'}</InlineMath> fails for some positive integer.
          Then the set of counterexamples is nonempty and has a smallest
          element <InlineMath>{'m'}</InlineMath>. Show this leads to a contradiction
          (often by constructing a smaller counterexample), proving no
          counterexamples exist.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Variations of Induction</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Starting at a Different Base</h3>

      <p className="text-dark-200 mb-4">
        Induction need not start at <InlineMath>{'n = 1'}</InlineMath>. If we want to
        prove <InlineMath>{'A(n)'}</InlineMath> for all integers <InlineMath>{'n \\geq n_0'}</InlineMath>,
        we verify <InlineMath>{'A(n_0)'}</InlineMath> in the base case.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Strong Induction</h3>

      <p className="text-dark-200 mb-4">
        In <strong>strong induction</strong> (also called complete induction),
        the inductive step assumes the statement is true for <em>all</em> values
        from <InlineMath>{'n_0'}</InlineMath> up to <InlineMath>{'k'}</InlineMath>, then proves
        it for <InlineMath>{'k + 1'}</InlineMath>:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Strong Induction</p>
        <p className="mb-2">
          <strong>Base Case:</strong> Prove <InlineMath>{'A(n_0)'}</InlineMath>.
        </p>
        <p>
          <strong>Inductive Step:</strong> Prove that if <InlineMath>{'A(j)'}</InlineMath>{' '}
          is true for all <InlineMath>{'n_0 \\leq j \\leq k'}</InlineMath>, then{' '}
          <InlineMath>{'A(k+1)'}</InlineMath> is true.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        Strong induction is particularly useful when proving <InlineMath>{'A(k+1)'}</InlineMath>{' '}
        requires knowing more than just <InlineMath>{'A(k)'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Common Pitfalls</h2>

      <Callout type="warning">
        <p className="font-semibold mb-2">Avoid These Mistakes</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Forgetting the base case:</strong> The inductive step alone
            proves nothing. Both steps are essential.
          </li>
          <li>
            <strong>Circular reasoning:</strong> In the inductive step, you assume{' '}
            <InlineMath>{'A(k)'}</InlineMath> and prove <InlineMath>{'A(k+1)'}</InlineMath>. Never
            assume what you're trying to prove.
          </li>
          <li>
            <strong>Invalid base case:</strong> Ensure the base case actually works.
            A flawed formula might accidentally satisfy <InlineMath>{'n = 1'}</InlineMath>{' '}
            but fail the inductive step.
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        Mathematical induction is a fundamental proof technique for statements
        about positive integers. The two-step process—verifying a base case and
        proving an inductive step—allows us to establish truths about infinitely
        many cases. The well-ordering principle provides an equivalent perspective:
        every nonempty set of positive integers has a least element. Together,
        these principles form the foundation for much of discrete mathematics
        and analysis.
      </p>
    </LessonLayout>
  );
}
