import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout
      title="1.5 Multinomial Coefficients"
      sectionId={5}
    >
      <p className="text-lg text-dark-200 mb-6">
        The <strong>multinomial coefficient</strong> generalizes the binomial coefficient to 
        partitioning objects into more than two groups.
      </p>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Partitioning Objects</h2>

      <p className="text-dark-300 mb-4">
        Consider dividing <InlineMath>n</InlineMath> distinct objects into <InlineMath>r</InlineMath> groups, where group <InlineMath>i</InlineMath> has 
        <InlineMath>n_i</InlineMath> objects (with <InlineMath>n_1 + n_2 + \cdots + n_r = n</InlineMath>).
      </p>

      <Theorem title="Multinomial Coefficient">
        <p className="mb-2">
          The number of ways to divide <InlineMath>n</InlineMath> distinct objects into <InlineMath>r</InlineMath> groups of 
          sizes <InlineMath>n_1, n_2, \ldots, n_r</InlineMath> is:
        </p>
        <MathBlock>{`\\binom{n}{n_1, n_2, \\ldots, n_r} = \\frac{n!}{n_1! \\cdot n_2! \\cdots n_r!}`}</MathBlock>
      </Theorem>

      <p className="text-dark-300 mb-4">
        Note that when <InlineMath>r = 2</InlineMath>, this reduces to the binomial coefficient:
      </p>
      <MathBlock>{`\\binom{n}{n_1, n_2} = \\frac{n!}{n_1! \\cdot n_2!} = \\binom{n}{n_1}`}</MathBlock>

      <Example title="Dividing Students">
        <p className="mb-2">
          A class of 12 students is to be divided into 3 groups of 4 students each. How many 
          ways can this be done?
        </p>
        <MathBlock>{`\\binom{12}{4, 4, 4} = \\frac{12!}{4! \\cdot 4! \\cdot 4!} = \\frac{479001600}{24 \\cdot 24 \\cdot 24} = 34650`}</MathBlock>
      </Example>

      <Example title="Assigning Tasks">
        <p className="mb-2">
          Ten workers are to be assigned to three jobs: Job A needs 2 workers, Job B needs 3 workers, 
          and Job C needs 5 workers. How many assignments are possible?
        </p>
        <MathBlock>{`\\binom{10}{2, 3, 5} = \\frac{10!}{2! \\cdot 3! \\cdot 5!} = \\frac{3628800}{2 \\cdot 6 \\cdot 120} = 2520`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">The Multinomial Theorem</h2>

      <Theorem title="Multinomial Theorem">
        <p className="mb-2">
          For any positive integer <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>{`(x_1 + x_2 + \\cdots + x_r)^n = \\sum_{n_1 + n_2 + \\cdots + n_r = n} \\binom{n}{n_1, n_2, \\ldots, n_r} x_1^{n_1} x_2^{n_2} \\cdots x_r^{n_r}`}</MathBlock>
        <p className="mt-2">
          where the sum is over all non-negative integer sequences <InlineMath>(n_1, n_2, \ldots, n_r)</InlineMath> that sum to <InlineMath>n</InlineMath>.
        </p>
      </Theorem>

      <p className="text-dark-300 mb-4">
        This generalizes the binomial theorem: when <InlineMath>r = 2</InlineMath>, it reduces to <InlineMath>(x_1 + x_2)^n</InlineMath>.
      </p>

      <Example title="Expanding a Trinomial">
        <p className="mb-2">
          Find the coefficient of <InlineMath>x^2 y^2 z</InlineMath> in <InlineMath>(x + y + z)^5</InlineMath>.
        </p>
        <p className="mb-2">
          We need <InlineMath>n_1 = 2, n_2 = 2, n_3 = 1</InlineMath> (for <InlineMath>x^2 y^2 z^1</InlineMath>):
        </p>
        <MathBlock>{`\\binom{5}{2, 2, 1} = \\frac{5!}{2! \\cdot 2! \\cdot 1!} = \\frac{120}{4} = 30`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Counting Arrangements with Repetition</h2>

      <p className="text-dark-300 mb-4">
        Notice that the formula for permutations with identical objects is the same as the 
        multinomial coefficient. This is because arranging <InlineMath>n</InlineMath> objects with <InlineMath>n_i</InlineMath> copies 
        of type <InlineMath>i</InlineMath> is equivalent to partitioning the <InlineMath>n</InlineMath> positions among the <InlineMath>r</InlineMath> types.
      </p>

      <Example title="Anagram Counting Revisited">
        <p className="mb-2">
          How many arrangements of the letters in "PROBABILITY" are there?
        </p>
        <p className="mb-2">
          PROBABILITY has 11 letters: P(1), R(1), O(1), B(2), A(1), I(2), L(1), T(1), Y(1)
        </p>
        <p className="mb-2">
          Wait—let's recount: P-R-O-B-A-B-I-L-I-T-Y
        </p>
        <p className="mb-2">
          P(1), R(1), O(1), B(2), A(1), I(2), L(1), T(1), Y(1) — that's 11 letters with B appearing twice and I appearing twice.
        </p>
        <MathBlock>{`\\frac{11!}{1! \\cdot 1! \\cdot 1! \\cdot 2! \\cdot 1! \\cdot 2! \\cdot 1! \\cdot 1! \\cdot 1!} = \\frac{39916800}{4} = 9979200`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">When Groups Are Indistinguishable</h2>

      <p className="text-dark-300 mb-4">
        If the groups themselves are indistinguishable (not labeled), we must divide by the number 
        of ways to arrange identical groups.
      </p>

      <Example title="Indistinguishable Groups">
        <p className="mb-2">
          Divide 12 students into 3 <em>unlabeled</em> groups of 4 each.
        </p>
        <p className="mb-2">
          With labeled groups: <InlineMath>\binom{'{12}'}{'{4,4,4}'} = 34650</InlineMath>
        </p>
        <p className="mb-2">
          Since the 3 groups are interchangeable, we divide by <InlineMath>3!</InlineMath>:
        </p>
        <MathBlock>{`\\frac{34650}{3!} = \\frac{34650}{6} = 5775`}</MathBlock>
      </Example>
    </LessonLayout>
  );
}
