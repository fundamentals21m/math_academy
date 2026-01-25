import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <p>
        In our construction of the natural numbers, integers, rationals, and
        reals, we made very little use of the <strong>decimal system</strong>.
        Indeed, except for a few examples, the only decimals we really used were
        0, 1, and 2—and even these can be written as <Math>0</Math>,{' '}
        <Math>0{'+'}{'+'}</Math>, and <Math>(0{'+'}{'+'}){'+'}{'+'}{'}'}</Math>.
      </p>

      <Callout type="info">
        <p>
          <strong>Why avoid decimals?</strong> The decimal system itself is{' '}
          <em>not essential to mathematics</em>. It is very convenient for
          computations, but in the history of mathematics it is actually a
          comparatively recent invention. Numbers have been around for about ten
          thousand years, but the modern Hindu-Arabic base 10 system only dates
          from the 11th century or so.
        </p>
      </Callout>

      <h2>Historical Context</h2>

      <p>
        Different civilizations have used different number systems:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
          The <strong>Babylonians</strong> used a base 60 system (which still
          survives in our time system of hours, minutes, and seconds)
        </li>
        <li>
          The <strong>ancient Greeks</strong> used Roman numerals (I, II, III,
          IV, ...), which was horrendous for computations
        </li>
        <li>
          <strong>Modern computing</strong> relies on binary, hexadecimal, or
          byte-based (base 256) arithmetic
        </li>
      </ul>

      <p className="mt-4">
        Nevertheless, the decimal system deserves attention because it is so
        integral to how we use mathematics in everyday life.
      </p>

      <h2>Digits and the Number Ten</h2>

      <Definition id="B.1.1" title="Digits">
        <p>
          A <strong>digit</strong> is any one of the ten symbols{' '}
          <Math>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</Math>. We equate these digits with
          natural numbers by the formulae:
        </p>
        <MathBlock>{String.raw`0 \equiv 0, \quad 1 \equiv 0\text{++}, \quad 2 \equiv 1\text{++}, \quad \ldots \quad 9 \equiv 8\text{++}`}</MathBlock>
        <p className="mt-2">
          We also define the number <strong>ten</strong> by the formula{' '}
          <Math>{String.raw`\text{ten} := 9\text{++}`}</Math>.
        </p>
      </Definition>

      <Callout type="note">
        <p>
          We cannot use the decimal notation "10" to denote ten yet, because
          that presumes knowledge of the decimal system and would be circular.
          Once we establish the decimal system, we will show that{' '}
          <Math>{String.raw`\text{ten} = 10`}</Math>.
        </p>
      </Callout>

      <h2>Positive Integer Decimals</h2>

      <Definition id="B.1.2" title="Positive integer decimals">
        <p>
          A <strong>positive integer decimal</strong> is any string{' '}
          <Math>{String.raw`a_n a_{n-1} \ldots a_0`}</Math> of digits, where{' '}
          <Math>{String.raw`n \geq 0`}</Math> is a natural number, and the first
          digit <Math>{String.raw`a_n`}</Math> is non-zero.
        </p>
        <p className="mt-2">
          For instance, <Math>3049</Math> is a positive integer decimal, but{' '}
          <Math>0493</Math> or <Math>0</Math> is not.
        </p>
        <p className="mt-2">
          We equate each positive integer decimal with a positive integer by the
          formula:
        </p>
        <MathBlock>{String.raw`a_n a_{n-1} \ldots a_0 \equiv \sum_{i=0}^{n} a_i \times \text{ten}^i`}</MathBlock>
      </Definition>

      <Example id="B.1.3" title="Interpreting decimals">
        <p>
          The decimal <Math>3049</Math> represents:
        </p>
        <MathBlock>{String.raw`3049 = 9 \times \text{ten}^0 + 4 \times \text{ten}^1 + 0 \times \text{ten}^2 + 3 \times \text{ten}^3`}</MathBlock>
        <MathBlock>{String.raw`= 9 \times 1 + 4 \times 10 + 0 \times 100 + 3 \times 1000`}</MathBlock>
        <MathBlock>{String.raw`= 9 + 40 + 0 + 3000 = 3049`}</MathBlock>
      </Example>

      <Callout type="info">
        <p>
          <strong>Important observations:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The definition implies that{' '}
            <Math>{String.raw`10 = 0 \times \text{ten}^0 + 1 \times \text{ten}^1 = \text{ten}`}</Math>,
            so we can write "ten" as the more familiar 10.
          </li>
          <li>
            A single digit decimal is exactly equal to that digit itself. For
            example, the decimal 3 equals{' '}
            <Math>{String.raw`3 \times \text{ten}^0 = 3`}</Math>.
          </li>
        </ul>
      </Callout>

      <h2>Uniqueness and Existence of Decimal Representations</h2>

      <p>
        Every positive decimal representation clearly gives a positive integer
        (since the sum consists entirely of natural numbers, and{' '}
        <Math>{String.raw`a_n \times \text{ten}^n`}</Math> is non-zero). The key
        theorem shows the converse is also true, and the representation is
        unique.
      </p>

      <Theorem id="B.1.4" title="Uniqueness and existence of decimal representations">
        <p>
          Every positive integer <Math>m</Math> is equal to exactly one positive
          integer decimal.
        </p>
        <div className="proof">
          <p>
            We use the principle of strong induction. For any positive integer{' '}
            <Math>m</Math>, let <Math>P(m)</Math> denote the statement "
            <Math>m</Math> is equal to exactly one positive integer decimal".
          </p>
          <p className="mt-2">
            Suppose <Math>P(m')</Math> is true for all positive integers{' '}
            <Math>{String.raw`m' < m`}</Math>. We show <Math>P(m)</Math>.
          </p>
          <p className="mt-2">
            <strong>Case 1:</strong> If{' '}
            <Math>{String.raw`m \in \{1, 2, 3, 4, 5, 6, 7, 8, 9\}`}</Math>, then{' '}
            <Math>m</Math> equals a single-digit decimal, and this is the only
            such decimal. No multi-digit decimal can equal <Math>m</Math>,
            because any decimal{' '}
            <Math>{String.raw`a_n \ldots a_0`}</Math> with{' '}
            <Math>{String.raw`n > 0`}</Math> satisfies{' '}
            <Math>{String.raw`a_n \ldots a_0 \geq a_n \times \text{ten}^n \geq \text{ten} > m`}</Math>.
          </p>
          <p className="mt-2">
            <strong>Case 2:</strong> If{' '}
            <Math>{String.raw`m \geq \text{ten}`}</Math>, then by the Euclidean
            algorithm we can write{' '}
            <Math>{String.raw`m = s \times \text{ten} + r`}</Math> where{' '}
            <Math>s</Math> is a positive integer and{' '}
            <Math>{String.raw`r \in \{0, 1, \ldots, 9\}`}</Math>.
          </p>
          <p className="mt-2">
            Since{' '}
            <Math>{String.raw`s < s \times \text{ten} \leq m`}</Math>, by the
            strong induction hypothesis, <Math>s</Math> has a unique decimal
            representation{' '}
            <Math>{String.raw`s = b_p \ldots b_0`}</Math>.
          </p>
          <p className="mt-2">
            Multiplying by ten:{' '}
            <Math>{String.raw`s \times \text{ten} = b_p \ldots b_0 0`}</Math>,
            and adding <Math>r</Math>:{' '}
            <Math>{String.raw`m = b_p \ldots b_0 r`}</Math>.
          </p>
          <p className="mt-2">
            <strong>Uniqueness:</strong> Suppose{' '}
            <Math>{String.raw`m = a_n \ldots a_0 = a'_{n'} \ldots a'_0`}</Math>.
            Then{' '}
            <Math>{String.raw`a_n \ldots a_0 = (a_n \ldots a_1) \times \text{ten} + a_0`}</Math>{' '}
            and similarly for the primed representation. This gives{' '}
            <Math>{String.raw`a'_0 - a_0 = (a_n \ldots a_1 - a'_{n'} \ldots a'_1) \times \text{ten}`}</Math>.
            The left side is between <Math>{String.raw`-\text{ten}`}</Math> and{' '}
            <Math>{String.raw`+\text{ten}`}</Math>, so both sides must be 0.
            Thus <Math>{String.raw`a_0 = a'_0`}</Math> and{' '}
            <Math>{String.raw`a_n \ldots a_1 = a'_{n'} \ldots a'_1`}</Math>. By
            the induction hypothesis, the latter representation is unique, so
            the two decimals are identical.
          </p>
        </div>
      </Theorem>

      <h2>Extending to All Integers</h2>

      <Definition id="B.1.5" title="Decimal representation of all integers">
        <p>
          Once we have decimal representations for positive integers:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Negative integers</strong> can be represented using the −
            sign (e.g., <Math>-42</Math>)
          </li>
          <li>
            <strong>Zero</strong> is represented as <Math>0</Math>
          </li>
          <li>
            <strong>Rationals</strong> are ratios of two decimals (e.g.,{' '}
            <Math>335/113</Math> or <Math>-1/2</Math>)
          </li>
        </ul>
      </Definition>

      <Callout type="note">
        <p>
          Since <Math>{String.raw`\text{ten} = 10`}</Math>, from now on we will
          use 10 instead of "ten" throughout, as is customary.
        </p>
      </Callout>

      <h2>Long Addition Algorithm</h2>

      <p>
        Once one has the decimal representation, one can derive the usual{' '}
        <strong>long addition</strong> algorithm to connect the decimal
        representation of <Math>x + y</Math> to that of <Math>x</Math> and{' '}
        <Math>y</Math>.
      </p>

      <Example id="B.1.6" title="Long addition algorithm">
        <p>
          Let <Math>{String.raw`A = a_n \ldots a_0`}</Math> and{' '}
          <Math>{String.raw`B = b_m \ldots b_0`}</Math> be positive integer
          decimals. The long addition algorithm works as follows:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Set <Math>{String.raw`\varepsilon_0 := 0`}</Math> (the initial carry
            digit)
          </li>
          <li>
            For each digit position <Math>i</Math>: if{' '}
            <Math>{String.raw`a_i + b_i + \varepsilon_i < 10`}</Math>, set{' '}
            <Math>{String.raw`c_i := a_i + b_i + \varepsilon_i`}</Math> and{' '}
            <Math>{String.raw`\varepsilon_{i+1} := 0`}</Math>
          </li>
          <li>
            Otherwise, set{' '}
            <Math>{String.raw`c_i := a_i + b_i + \varepsilon_i - 10`}</Math> and{' '}
            <Math>{String.raw`\varepsilon_{i+1} := 1`}</Math>
          </li>
        </ul>
        <p className="mt-2">
          The resulting decimal{' '}
          <Math>{String.raw`c_l c_{l-1} \ldots c_1 c_0`}</Math> is the decimal
          representation of <Math>A + B</Math>.
        </p>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Why we avoided decimals in our construction:</strong> One
          could in fact use the long addition algorithm to <em>define</em>{' '}
          addition, but it would look extremely complicated. To prove even such
          simple facts as <Math>(a + b) + c = a + (b + c)</Math> would be rather
          difficult. This is one of the reasons why we avoided the decimal
          system in our construction of the natural numbers.
        </p>
        <p className="mt-2">
          The procedures for long multiplication, long subtraction, and long
          division are even worse to lay out rigorously!
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key concepts about decimal representation of natural numbers:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Digits:</strong> The ten symbols{' '}
            <Math>0, 1, 2, \ldots, 9</Math>, each corresponding to a natural
            number
          </li>
          <li>
            <strong>Positive integer decimal:</strong> A string{' '}
            <Math>{String.raw`a_n a_{n-1} \ldots a_0`}</Math> with{' '}
            <Math>{String.raw`a_n \neq 0`}</Math>, representing{' '}
            <Math>{String.raw`\sum_{i=0}^{n} a_i \times 10^i`}</Math>
          </li>
          <li>
            <strong>Existence and uniqueness:</strong> Every positive integer
            has exactly one decimal representation
          </li>
          <li>
            <strong>Historical note:</strong> The decimal system is convenient
            but not essential to mathematics
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
