import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <p>
        We have established that every positive integer has a unique decimal
        representation. Now we extend this to real numbers. The key difference
        is that real decimals extend <em>infinitely</em> to the right of the
        decimal point.
      </p>

      <h2>Real Decimals</h2>

      <Definition id="B.2.1" title="Real decimals">
        <p>
          A <strong>real decimal</strong> is any sequence of digits, and a
          decimal point, arranged as:
        </p>
        <MathBlock>{String.raw`\pm a_n \ldots a_0 . a_{-1} a_{-2} \ldots`}</MathBlock>
        <p className="mt-2">
          which is <strong>finite</strong> to the left of the decimal point (so{' '}
          <Math>n</Math> is a natural number), but <strong>infinite</strong> to
          the right of the decimal point.
        </p>
        <p className="mt-2">
          Here <Math>\pm</Math> is either <Math>+</Math> or <Math>-</Math>, and{' '}
          <Math>{String.raw`a_n \ldots a_0`}</Math> is a natural number decimal
          (either a positive integer decimal, or 0).
        </p>
        <p className="mt-2">
          This decimal is equated to the real number:
        </p>
        <MathBlock>{String.raw`\pm a_n \ldots a_0 . a_{-1} a_{-2} \ldots \equiv \pm 1 \times \sum_{i=-\infty}^{n} a_i \times 10^i`}</MathBlock>
      </Definition>

      <Callout type="note">
        <p>
          The series <Math>{String.raw`\sum_{i=-\infty}^{n} a_i \times 10^i`}</Math>{' '}
          is always absolutely convergent. This is because the "tail" of the
          series (the terms with negative indices) is bounded by a geometric
          series:
        </p>
        <MathBlock>{String.raw`\sum_{i=-\infty}^{-1} a_i \times 10^i \leq \sum_{i=-\infty}^{-1} 9 \times 10^i = 9 \times \frac{1/10}{1 - 1/10} = 1`}</MathBlock>
      </Callout>

      <Example id="B.2.2" title="Interpreting real decimals">
        <p>
          The decimal <Math>3.14159...</Math> represents:
        </p>
        <MathBlock>{String.raw`3.14159... = 3 \times 10^0 + 1 \times 10^{-1} + 4 \times 10^{-2} + 1 \times 10^{-3} + 5 \times 10^{-4} + 9 \times 10^{-5} + \cdots`}</MathBlock>
        <MathBlock>{String.raw`= 3 + 0.1 + 0.04 + 0.001 + 0.0005 + 0.00009 + \cdots`}</MathBlock>
        <p className="mt-2">
          This is the beginning of the decimal expansion of <Math>\pi</Math>.
        </p>
      </Example>

      <h2>Existence of Decimal Representations</h2>

      <p>
        We now show that every real number has at least one decimal
        representation.
      </p>

      <Theorem id="B.2.3" title="Existence of decimal representations">
        <p>
          Every real number <Math>x</Math> has at least one decimal
          representation{' '}
          <Math>{String.raw`x = \pm a_n \ldots a_0 . a_{-1} a_{-2} \ldots`}</Math>
        </p>
        <div className="proof">
          <p>
            <strong>Step 1:</strong> First note that <Math>x = 0</Math> has the
            decimal representation <Math>0.000...</Math>. Also, once we find a
            decimal representation for <Math>x</Math>, we get one for{' '}
            <Math>-x</Math> by changing the sign. So it suffices to prove the
            theorem for positive real numbers <Math>x</Math>.
          </p>
          <p className="mt-2">
            <strong>Step 2:</strong> Let <Math>{String.raw`n \geq 0`}</Math> be
            any natural number. By the Archimedean property, there exists a
            natural number <Math>M</Math> such that{' '}
            <Math>{String.raw`M \times 10^{-n} > x`}</Math>. Since{' '}
            <Math>{String.raw`0 \times 10^{-n} \leq x`}</Math>, there must exist
            a natural number <Math>{String.raw`s_n`}</Math> such that:
          </p>
          <MathBlock>{String.raw`s_n \times 10^{-n} \leq x < (s_n + 1) \times 10^{-n}`}</MathBlock>
          <p className="mt-2">
            <strong>Step 3:</strong> Consider the sequence{' '}
            <Math>{String.raw`s_0, s_1, s_2, \ldots`}</Math>. From the
            inequalities above, we can show that{' '}
            <Math>{String.raw`10 \times s_n \leq s_{n+1} \leq 10 \times s_n + 9`}</Math>,
            so there exists a digit <Math>{String.raw`a_{n+1}`}</Math> such that{' '}
            <Math>{String.raw`s_{n+1} = 10 \times s_n + a_{n+1}`}</Math>.
          </p>
          <p className="mt-2">
            <strong>Step 4:</strong> By induction, we obtain:
          </p>
          <MathBlock>{String.raw`s_n \times 10^{-n} = s_0 + \sum_{i=0}^{n} a_i \times 10^{-i}`}</MathBlock>
          <p className="mt-2">
            Taking limits and using the squeeze test (since{' '}
            <Math>{String.raw`x - 10^{-n} \leq s_n \times 10^{-n} \leq x`}</Math>):
          </p>
          <MathBlock>{String.raw`x = \lim_{n \to \infty} s_n \times 10^{-n} = s_0 + \sum_{i=0}^{\infty} a_i \times 10^{-i}`}</MathBlock>
          <p className="mt-2">
            Since <Math>{String.raw`s_0`}</Math> has a positive integer decimal
            representation, we have constructed a decimal representation for{' '}
            <Math>x</Math>.
          </p>
        </div>
      </Theorem>

      <h2>Non-Uniqueness of Decimal Representations</h2>

      <p>
        Unlike positive integers, real numbers may have <em>more than one</em>{' '}
        decimal representation. The most famous example is:
      </p>

      <Theorem id="B.2.4" title="Proposition: Failure of uniqueness of decimal representations">
        <p>
          The number 1 has two different decimal representations:{' '}
          <Math>1.000...</Math> and <Math>0.999...</Math>
        </p>
        <div className="proof">
          <p>
            The representation <Math>1 = 1.000...</Math> is clear. Now let's
            compute <Math>0.999...</Math>
          </p>
          <p className="mt-2">
            By definition, <Math>0.999...</Math> is the limit of the Cauchy
            sequence:
          </p>
          <MathBlock>{String.raw`0.9, \quad 0.99, \quad 0.999, \quad 0.9999, \quad \ldots`}</MathBlock>
          <p className="mt-2">
            The <Math>n</Math>-th term of this sequence is:
          </p>
          <MathBlock>{String.raw`\sum_{i=1}^{n} 9 \times 10^{-i} = 9 \times \frac{10^{-1}(1 - 10^{-n})}{1 - 10^{-1}} = \frac{9}{10} \times \frac{1 - 10^{-n}}{9/10} = 1 - 10^{-n}`}</MathBlock>
          <p className="mt-2">
            As <Math>{String.raw`n \to \infty`}</Math>, we have{' '}
            <Math>{String.raw`10^{-n} \to 0`}</Math>, so{' '}
            <Math>{String.raw`0.999... = \lim_{n \to \infty}(1 - 10^{-n}) = 1`}</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>This is not a paradox!</strong> The notation{' '}
          <Math>0.999...</Math> represents an <em>infinite</em> decimal, not a
          finite one. When all infinitely many 9s are included, the sum
          converges exactly to 1. There is no "last 9" that makes it "almost but
          not quite" equal to 1.
        </p>
      </Callout>

      <Example id="B.2.5" title="Other examples of non-unique representations">
        <p>
          The same phenomenon occurs for other terminating decimals:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>0.5 = 0.4999...</Math>
          </li>
          <li>
            <Math>2.37 = 2.36999...</Math>
          </li>
          <li>
            <Math>-1.25 = -1.24999...</Math>
          </li>
        </ul>
        <p className="mt-2">
          In each case, a terminating decimal equals an infinite decimal ending
          in repeating 9s.
        </p>
      </Example>

      <h2>Characterizing Non-Uniqueness</h2>

      <Definition id="B.2.6" title="Terminating decimals">
        <p>
          A real number <Math>x</Math> is said to be a{' '}
          <strong>terminating decimal</strong> if we have{' '}
          <Math>{String.raw`x = n / 10^m`}</Math> for some integers{' '}
          <Math>n</Math> and <Math>m</Math>.
        </p>
        <p className="mt-2">
          Equivalently, <Math>x</Math> is a terminating decimal if its decimal
          expansion eventually becomes all 0s.
        </p>
      </Definition>

      <Theorem id="B.2.7" title="Characterization of decimal representations">
        <p>
          Every real number has either one or two decimal representations:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            If <Math>x</Math> is a terminating decimal, then <Math>x</Math> has{' '}
            <strong>exactly two</strong> decimal representations
          </li>
          <li>
            If <Math>x</Math> is not a terminating decimal, then <Math>x</Math>{' '}
            has <strong>exactly one</strong> decimal representation
          </li>
        </ul>
      </Theorem>

      <Example id="B.2.8" title="Numbers with unique representations">
        <p>
          The following numbers have exactly one decimal representation:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>{String.raw`\pi = 3.14159265358979...`}</Math> (irrational,
            non-repeating)
          </li>
          <li>
            <Math>1/3 = 0.333...</Math> (repeating, but doesn't terminate)
          </li>
          <li>
            <Math>{String.raw`\sqrt{2} = 1.41421356...`}</Math> (irrational,
            non-repeating)
          </li>
        </ul>
        <p className="mt-2">
          None of these can be written as <Math>{String.raw`n/10^m`}</Math> for
          integers <Math>n, m</Math>, so they have no alternative representation
          ending in repeating 9s.
        </p>
      </Example>

      <h2>Rational Numbers and Repeating Decimals</h2>

      <Callout type="info">
        <p>
          <strong>Connection to rationals:</strong> A real number is rational if
          and only if its decimal expansion is eventually periodic (repeating).
          For example:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>1/7 = 0.\overline{"{142857}"}</Math> (period 6)
          </li>
          <li>
            <Math>1/11 = 0.\overline{"{09}"}</Math> (period 2)
          </li>
          <li>
            <Math>5/6 = 0.8\overline{"{3}"}</Math> (period 1 after initial
            digit)
          </li>
        </ul>
        <p className="mt-2">
          Irrational numbers like <Math>\pi</Math>, <Math>e</Math>, and{' '}
          <Math>{String.raw`\sqrt{2}`}</Math> have decimal expansions that never
          repeat.
        </p>
      </Callout>

      <h2>Why Real Decimals Are Less Clean Than Integer Decimals</h2>

      <Callout type="note">
        <p>
          <strong>Comparison with integers:</strong> For positive integers,
          decimal representation is both <em>unique</em> and{' '}
          <em>computationally useful</em>. For real numbers:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Non-uniqueness:</strong> Some numbers have two
            representations
          </li>
          <li>
            <strong>Infinite nature:</strong> Most real numbers require
            infinitely many digits
          </li>
          <li>
            <strong>Computation:</strong> Arithmetic with infinite decimals is
            subtle (e.g., when does carrying propagate infinitely?)
          </li>
        </ul>
        <p className="mt-2">
          This is another reason why we constructed the real numbers using
          Cauchy sequences rather than decimals.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key concepts about decimal representation of real numbers:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Real decimals:</strong> Extend infinitely to the right of
            the decimal point, representing{' '}
            <Math>{String.raw`\sum_{i=-\infty}^{n} a_i \times 10^i`}</Math>
          </li>
          <li>
            <strong>Existence:</strong> Every real number has at least one
            decimal representation (proved using the Archimedean property)
          </li>
          <li>
            <strong>Non-uniqueness:</strong> Terminating decimals have exactly
            two representations (e.g., <Math>1 = 0.999...</Math>)
          </li>
          <li>
            <strong>Uniqueness:</strong> Non-terminating decimals have exactly
            one representation
          </li>
          <li>
            <strong>Rational connection:</strong> Rationals have eventually
            periodic (repeating) decimals; irrationals do not
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
