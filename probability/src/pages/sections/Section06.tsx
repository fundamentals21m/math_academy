import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout
      title="1.6 The Number of Integer Solutions of Equations"
      sectionId={6}
    >
      <p className="text-lg text-dark-200 mb-6">
        A powerful combinatorial technique is counting the number of non-negative integer solutions 
        to equations. This "stars and bars" method has wide applications in probability.
      </p>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">The Stars and Bars Method</h2>

      <Theorem title="Non-negative Integer Solutions">
        <p className="mb-2">
          The number of non-negative integer solutions to the equation
        </p>
        <MathBlock>{`x_1 + x_2 + \\cdots + x_r = n`}</MathBlock>
        <p className="mb-2">is:</p>
        <MathBlock>{`\\binom{n + r - 1}{r - 1} = \\binom{n + r - 1}{n}`}</MathBlock>
      </Theorem>

      <p className="text-dark-300 mb-4">
        <strong>Intuition:</strong> Think of <InlineMath>n</InlineMath> stars (representing the total) and <InlineMath>r-1</InlineMath> bars 
        (dividing the stars into <InlineMath>r</InlineMath> groups). Each arrangement corresponds to one solution.
      </p>

      <Example title="Stars and Bars Visualization">
        <p className="mb-2">
          Count solutions to <InlineMath>x_1 + x_2 + x_3 = 5</InlineMath>.
        </p>
        <p className="mb-2">
          Using 5 stars and 2 bars, here are some arrangements:
        </p>
        <div className="bg-dark-800 p-3 rounded font-mono text-sm mb-2">
          <p>★★★|★|★ → <InlineMath>x_1 = 3, x_2 = 1, x_3 = 1</InlineMath></p>
          <p>★★|★★★| → <InlineMath>x_1 = 2, x_2 = 3, x_3 = 0</InlineMath></p>
          <p>||★★★★★ → <InlineMath>x_1 = 0, x_2 = 0, x_3 = 5</InlineMath></p>
        </div>
        <p className="mb-2">
          Total arrangements = ways to choose 2 positions for bars among 7 positions:
        </p>
        <MathBlock>{`\\binom{5 + 3 - 1}{3 - 1} = \\binom{7}{2} = 21`}</MathBlock>
      </Example>

      <Example title="Distributing Identical Objects">
        <p className="mb-2">
          How many ways can 10 identical cookies be distributed among 4 children?
        </p>
        <p className="mb-2">
          Let <InlineMath>x_i</InlineMath> be the number of cookies child <InlineMath>i</InlineMath> receives. We need non-negative 
          integer solutions to <InlineMath>x_1 + x_2 + x_3 + x_4 = 10</InlineMath>:
        </p>
        <MathBlock>{`\\binom{10 + 4 - 1}{4 - 1} = \\binom{13}{3} = 286`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Positive Integer Solutions</h2>

      <p className="text-dark-300 mb-4">
        If we require each <InlineMath>x_i \geq 1</InlineMath> (positive integers), we can substitute <InlineMath>y_i = x_i - 1</InlineMath>.
      </p>

      <Theorem title="Positive Integer Solutions">
        <p className="mb-2">
          The number of positive integer solutions to <InlineMath>x_1 + x_2 + \cdots + x_r = n</InlineMath> is:
        </p>
        <MathBlock>{`\\binom{n - 1}{r - 1}`}</MathBlock>
      </Theorem>

      <Example title="Distributing with Minimum">
        <p className="mb-2">
          Distribute 10 cookies among 4 children so each child gets at least one cookie.
        </p>
        <MathBlock>{`\\binom{10 - 1}{4 - 1} = \\binom{9}{3} = 84`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Solutions with Upper Bounds</h2>

      <p className="text-dark-300 mb-4">
        When variables have upper bounds, we use inclusion-exclusion (covered later). Here's a 
        basic example using subtraction.
      </p>

      <Example title="Upper Bound Example">
        <p className="mb-2">
          Count non-negative integer solutions to <InlineMath>x_1 + x_2 + x_3 = 10</InlineMath> where <InlineMath>x_i \leq 5</InlineMath>.
        </p>
        <p className="mb-2">
          Total without bounds: <InlineMath>\binom{'{12}'}{'{2}'} = 66</InlineMath>
        </p>
        <p className="mb-2">
          Solutions violating <InlineMath>x_1 \leq 5</InlineMath>: Set <InlineMath>y_1 = x_1 - 6</InlineMath>, count solutions to 
          <InlineMath>y_1 + x_2 + x_3 = 4</InlineMath>: <InlineMath>\binom{'{6}'}{'{2}'} = 15</InlineMath>
        </p>
        <p className="mb-2">
          By symmetry, 15 solutions violate each bound. But solutions violating two bounds get 
          subtracted twice, so we need inclusion-exclusion for the full answer.
        </p>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Applications in Probability</h2>

      <p className="text-dark-300 mb-4">
        These counting techniques are essential for probability. For example:
      </p>

      <Example title="Dice Rolling">
        <p className="mb-2">
          How many ways can 4 distinguishable dice show a total of 15?
        </p>
        <p className="mb-2">
          Let <InlineMath>x_i</InlineMath> be the value on die <InlineMath>i</InlineMath>. We need <InlineMath>x_1 + x_2 + x_3 + x_4 = 15</InlineMath> where <InlineMath>1 \leq x_i \leq 6</InlineMath>.
        </p>
        <p className="mb-2">
          Substituting <InlineMath>y_i = x_i - 1</InlineMath>, we need <InlineMath>y_1 + y_2 + y_3 + y_4 = 11</InlineMath> where <InlineMath>0 \leq y_i \leq 5</InlineMath>.
        </p>
        <p>
          This requires inclusion-exclusion (Chapter 2) to fully solve, but the setup uses our stars-and-bars framework.
        </p>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Summary of Chapter 1</h2>

      <div className="bg-dark-800 p-4 rounded-lg">
        <table className="w-full text-dark-200">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2">Problem Type</th>
              <th className="text-left py-2">Formula</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">Permutations of <InlineMath>n</InlineMath> objects</td>
              <td className="py-2"><InlineMath>n!</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><InlineMath>r</InlineMath>-permutations of <InlineMath>n</InlineMath> objects</td>
              <td className="py-2"><InlineMath>P(n,r) = n!/(n-r)!</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Combinations (<InlineMath>r</InlineMath> from <InlineMath>n</InlineMath>)</td>
              <td className="py-2"><InlineMath>\binom{'{n}'}{'{r}'} = n!/[r!(n-r)!]</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">Multinomial coefficient</td>
              <td className="py-2"><InlineMath>n!/(n_1! \cdots n_r!)</InlineMath></td>
            </tr>
            <tr>
              <td className="py-2">Stars and bars</td>
              <td className="py-2"><InlineMath>\binom{'{n+r-1}'}{'{r-1}'}</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </div>
    </LessonLayout>
  );
}
