import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Introduction */}
      <p>
        We can regard the positive integers as having been constructed in the following way: Start
        with the number 1. Then add 1 to get 2. Then add 1 to get 3. And so on. This kind of
        construction—beginning with a base case and then applying a rule again and again—is called
        an <strong>inductive construction</strong>.
      </p>

      <p>
        The principle of mathematical induction is a powerful proof technique that mirrors this
        construction. If we can prove a statement for the base case and show that whenever it holds
        for some integer, it also holds for the next integer, then we can conclude it holds for all
        positive integers.
      </p>

      <h2>The Induction Principle</h2>

      <Definition title="Induction Principle" className="my-6">
        <p>
          Let <InlineMath>P(n)</InlineMath> be an assertion involving the positive integer variable{' '}
          <InlineMath>n</InlineMath>. If:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Base Case:</strong> <InlineMath>P(1)</InlineMath> holds, and</li>
          <li>
            <strong>Induction Step:</strong> Whenever <InlineMath>P(k)</InlineMath> holds, so does{' '}
            <InlineMath>P(k + 1)</InlineMath>
          </li>
        </ol>
        <p className="mt-2">
          then <InlineMath>P(n)</InlineMath> holds for <strong>every</strong> positive integer{' '}
          <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <p>
        The typical structure of a proof by induction is:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4">
        <li><strong>Base case:</strong> Show <InlineMath>P(1)</InlineMath></li>
        <li>
          <strong>Induction step:</strong> Assume <InlineMath>P(k)</InlineMath> holds (the{' '}
          <strong>induction hypothesis</strong>) and deduce that <InlineMath>P(k + 1)</InlineMath> follows
        </li>
        <li><strong>Conclusion:</strong> By induction, <InlineMath>P(n)</InlineMath> holds for all positive integers</li>
      </ol>

      <h2>Classic Example: Sum of First n Integers</h2>

      <Theorem
        title="Sum of First n Positive Integers"
        className="my-6"
        proof={
          <>
            <p><strong>Base case (n = 1):</strong></p>
            <p>
              Left side: <InlineMath>1</InlineMath>. Right side: <InlineMath>1(1 + 1)/2 = 1</InlineMath>.
              They are equal, so the base case holds.
            </p>
            <p className="mt-3"><strong>Induction step:</strong></p>
            <p>
              Assume the formula holds for <InlineMath>n = k</InlineMath> (induction hypothesis):
            </p>
            <MathBlock>{`1 + 2 + \\cdots + k = \\frac{k(k + 1)}{2}`}</MathBlock>
            <p>We must show it holds for <InlineMath>n = k + 1</InlineMath>. Adding <InlineMath>(k + 1)</InlineMath> to both sides:</p>
            <MathBlock>{`1 + 2 + \\cdots + k + (k + 1) = \\frac{k(k + 1)}{2} + (k + 1)`}</MathBlock>
            <p>Simplifying the right side:</p>
            <MathBlock>{`\\frac{k(k + 1)}{2} + (k + 1) = (k + 1)\\left(\\frac{k}{2} + 1\\right) = (k + 1) \\cdot \\frac{k + 2}{2} = \\frac{(k + 1)(k + 2)}{2}`}</MathBlock>
            <p>
              This is exactly the formula with <InlineMath>k + 1</InlineMath> in place of{' '}
              <InlineMath>n</InlineMath>. The induction step is complete.
            </p>
          </>
        }
      >
        <p>
          For all positive integers <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>{`1 + 2 + \\cdots + n = \\frac{n(n + 1)}{2}`}</MathBlock>
      </Theorem>

      <Example title="Verifying the Formula" className="my-6">
        <p>Let's verify for small values:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>n = 1</InlineMath>: Sum = 1, Formula = <InlineMath>1 \cdot 2 / 2 = 1</InlineMath></li>
          <li><InlineMath>n = 2</InlineMath>: Sum = 1 + 2 = 3, Formula = <InlineMath>2 \cdot 3 / 2 = 3</InlineMath></li>
          <li><InlineMath>n = 3</InlineMath>: Sum = 1 + 2 + 3 = 6, Formula = <InlineMath>3 \cdot 4 / 2 = 6</InlineMath></li>
          <li><InlineMath>n = 10</InlineMath>: Sum = 55, Formula = <InlineMath>10 \cdot 11 / 2 = 55</InlineMath></li>
        </ul>
      </Example>

      <h2>Divisibility Proof by Induction</h2>

      <Theorem
        title="Divisibility by 13"
        className="my-6"
        proof={
          <>
            <p><strong>Base case (n = 1):</strong></p>
            <MathBlock>{`a_1 = 4^{2(1)-1} + 3^{1+1} = 4^1 + 3^2 = 4 + 9 = 13`}</MathBlock>
            <p>Since 13 divides 13, the base case holds.</p>
            <p className="mt-3"><strong>Induction step:</strong></p>
            <p>
              Assume <InlineMath>a_k = 4^{'{2k-1}'} + 3^{'{k+1}'}</InlineMath> is divisible by 13,
              say <InlineMath>4^{'{2k-1}'} + 3^{'{k+1}'} = 13r</InlineMath> for some integer{' '}
              <InlineMath>r</InlineMath>.
            </p>
            <p>We need to show 13 divides:</p>
            <MathBlock>{`a_{k+1} = 4^{2(k+1)-1} + 3^{(k+1)+1} = 4^{2k+1} + 3^{k+2}`}</MathBlock>
            <p>Note that:</p>
            <MathBlock>{`\\begin{aligned}
4^{2k+1} + 3^{k+2} &= 4^2 \\cdot 4^{2k-1} + 3 \\cdot 3^{k+1} \\\\
&= 16 \\cdot 4^{2k-1} + 3 \\cdot 3^{k+1} \\\\
&= 16(4^{2k-1} + 3^{k+1}) - 16 \\cdot 3^{k+1} + 3 \\cdot 3^{k+1} \\\\
&= 16(13r) - 13 \\cdot 3^{k+1} \\\\
&= 13(16r - 3^{k+1})
\\end{aligned}`}</MathBlock>
            <p>This is clearly divisible by 13.</p>
          </>
        }
      >
        <p>
          For each positive integer <InlineMath>n</InlineMath>, the number{' '}
          <InlineMath>a_n = 4^{'{2n-1}'} + 3^{'{n+1}'}</InlineMath> is divisible by 13.
        </p>
      </Theorem>

      <h2>The Binomial Theorem</h2>

      <p>
        One of the most important applications of induction is proving the Binomial Theorem, which
        gives a formula for expanding <InlineMath>(x + y)^n</InlineMath>.
      </p>

      <Definition title="Binomial Coefficient" className="my-6">
        <p>
          For <InlineMath>0 \leq k \leq n</InlineMath>, the <strong>binomial coefficient</strong> is:
        </p>
        <MathBlock>{`\\binom{n}{k} = \\frac{n!}{k!(n-k)!}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>n! = n \cdot (n-1) \cdot \ldots \cdot 2 \cdot 1</InlineMath> is the{' '}
          <strong>factorial</strong> of <InlineMath>n</InlineMath>, with <InlineMath>0! = 1</InlineMath>.
        </p>
      </Definition>

      <p>
        The binomial coefficients form Pascal's Triangle:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-dark-700 text-center font-mono">
        <pre className="text-dark-200">
{`        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
   1 5 10 10 5 1`}
        </pre>
      </div>

      <p>
        Each number is the sum of the two numbers above it:{' '}
        <InlineMath>{`\\binom{n}{k} + \\binom{n}{k-1} = \\binom{n+1}{k}`}</InlineMath>.
      </p>

      <Theorem title="Binomial Theorem" className="my-6">
        <p>
          Let <InlineMath>n</InlineMath> be a positive integer and let <InlineMath>x, y</InlineMath> be
          any numbers. Then:
        </p>
        <MathBlock>{`(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i} x^{n-i} y^i = \\binom{n}{0}x^n + \\binom{n}{1}x^{n-1}y + \\cdots + \\binom{n}{n}y^n`}</MathBlock>
      </Theorem>

      <Example title="Binomial Expansion Examples" className="my-6">
        <p><strong>n = 2:</strong></p>
        <MathBlock>{`(x + y)^2 = x^2 + 2xy + y^2`}</MathBlock>
        <p className="mt-3"><strong>n = 3:</strong></p>
        <MathBlock>{`(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3`}</MathBlock>
        <p className="mt-3"><strong>n = 4:</strong></p>
        <MathBlock>{`(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4`}</MathBlock>
      </Example>

      <h2>Induction and the Well-Ordering Principle</h2>

      <Theorem
        title="Well-Ordering Implies Induction"
        className="my-6"
        proof={
          <>
            <p>
              Suppose <InlineMath>P(n)</InlineMath> satisfies the conditions for induction: so{' '}
              <InlineMath>P(1)</InlineMath> holds, and whenever <InlineMath>P(k)</InlineMath> holds,
              so does <InlineMath>P(k + 1)</InlineMath>.
            </p>
            <p>
              Let <InlineMath>S</InlineMath> be the set of positive integers{' '}
              <InlineMath>m</InlineMath> for which <InlineMath>P(m)</InlineMath> is false. We want
              to show <InlineMath>S</InlineMath> is empty.
            </p>
            <p>
              Suppose <InlineMath>S</InlineMath> is non-empty. By the well-ordering principle,{' '}
              <InlineMath>S</InlineMath> has a least element <InlineMath>t</InlineMath>. Since{' '}
              <InlineMath>P(1)</InlineMath> holds, <InlineMath>t \neq 1</InlineMath>, so{' '}
              <InlineMath>t {'>'} 1</InlineMath>.
            </p>
            <p>
              Since <InlineMath>t</InlineMath> is the least element of <InlineMath>S</InlineMath>,
              we have <InlineMath>P(t - 1)</InlineMath> is true. But then by our assumption,{' '}
              <InlineMath>P(t)</InlineMath> must be true—contradiction to{' '}
              <InlineMath>t \in S</InlineMath>.
            </p>
            <p>
              Therefore <InlineMath>S</InlineMath> must be empty, and <InlineMath>P(n)</InlineMath>{' '}
              holds for all positive integers.
            </p>
          </>
        }
      >
        <p>
          The well-ordering principle implies the principle of mathematical induction.
        </p>
      </Theorem>

      <p>
        In fact, the converse is also true: the principle of induction implies the well-ordering
        principle. So the two principles are logically equivalent.
      </p>

      <h2>Strong Induction</h2>

      <Definition title="Strong Induction (Complete Induction)" className="my-6">
        <p>
          Let <InlineMath>P(n)</InlineMath> be an assertion. If:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>P(0)</InlineMath> holds, and</li>
          <li>
            For each <InlineMath>k \geq 0</InlineMath>, if <InlineMath>P(m)</InlineMath> holds for
            all <InlineMath>m \leq k</InlineMath>, then <InlineMath>P(k + 1)</InlineMath> holds
          </li>
        </ol>
        <p className="mt-2">
          then <InlineMath>P(n)</InlineMath> holds for every natural number <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <p>
        Strong induction allows us to use all previous cases, not just the immediately preceding one,
        to prove the next case. This is particularly useful when proving properties about recursive
        definitions or when the inductive step requires information from multiple previous values.
      </p>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              <strong>Mathematical Induction</strong> proves statements for all positive integers by
              verifying a base case and an induction step.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              The <strong>base case</strong> proves <InlineMath>P(1)</InlineMath>. The{' '}
              <strong>induction step</strong> proves: if <InlineMath>P(k)</InlineMath> then{' '}
              <InlineMath>P(k + 1)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Strong induction</strong> allows assuming <InlineMath>P(m)</InlineMath> for all{' '}
              <InlineMath>m \leq k</InlineMath> when proving <InlineMath>P(k + 1)</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The <strong>Binomial Theorem</strong> gives{' '}
              <InlineMath>(x + y)^n = \sum_i \binom{'{n}{i}'} x^{'{n-i}'} y^i</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Mathematical induction and the well-ordering principle are <strong>logically equivalent</strong>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
