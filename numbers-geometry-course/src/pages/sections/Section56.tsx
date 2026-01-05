import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section56Questions } from '../../data/quizzes';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2 className="text-2xl font-semibold mb-4">
        Addition, Multiplication, and Absolute Value
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Complex numbers are objects of the form <InlineMath>a + bi</InlineMath>,
        where <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are real
        numbers and <InlineMath>i = \sqrt{'{-1}'}</InlineMath>. They extend our
        number system in a beautiful way, uniting algebra and geometry.
      </p>

      {/* Historical Introduction */}
      <Callout type="info">
        <p>
          Mathematicians worried about what <InlineMath>\sqrt{'{-1}'}</InlineMath>{' '}
          "really is" for centuries. As Hilbert said: "In mathematics, existence
          means freedom from contradiction." Complex numbers were accepted because
          they <em>worked</em>, not because they could be defined easily.
        </p>
      </Callout>

      {/* The Imaginary Unit */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Imaginary Unit
      </h3>

      <p className="text-dark-200 mb-6">
        We assume there exists a number <InlineMath>i</InlineMath> with the
        property:
      </p>

      <MathBlock>{`i^2 = -1`}</MathBlock>

      <p className="text-dark-200 my-6">
        The number <InlineMath>i</InlineMath> behaves like any other number in
        arithmetic, except for this special property. A <strong>complex number</strong>{' '}
        is any expression <InlineMath>a + bi</InlineMath> where{' '}
        <InlineMath>a, b \in \mathbb{'{R}'}</InlineMath>.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Real Part" />
          <p className="text-xs text-dark-300">
            <InlineMath>\text{'{Re}'}(a + bi) = a</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Imaginary Part" />
          <p className="text-xs text-dark-300">
            <InlineMath>\text{'{Im}'}(a + bi) = b</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Addition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Addition</h3>

      <p className="text-dark-200 mb-6">
        Addition of complex numbers is straightforward—just add the real and
        imaginary parts separately:
      </p>

      <MathBlock>
        {`(a_1 + ib_1) + (a_2 + ib_2) = (a_1 + a_2) + i(b_1 + b_2)`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        If we think of <InlineMath>a + bi</InlineMath> as an ordered pair{' '}
        <InlineMath>(a, b)</InlineMath>, addition is component-wise:
      </p>

      <MathBlock>{`(a_1, b_1) + (a_2, b_2) = (a_1 + a_2, b_1 + b_2)`}</MathBlock>

      {/* Multiplication */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Multiplication</h3>

      <p className="text-dark-200 mb-6">
        Multiplication is where <InlineMath>i^2 = -1</InlineMath> becomes
        important. Using the distributive law:
      </p>

      <MathBlock>
        {`(a_1 + ib_1)(a_2 + ib_2) = a_1a_2 + ia_1b_2 + ib_1a_2 + i^2b_1b_2`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Since <InlineMath>i^2 = -1</InlineMath>:
      </p>

      <MathBlock>
        {`(a_1 + ib_1)(a_2 + ib_2) = (a_1a_2 - b_1b_2) + i(a_1b_2 + b_1a_2)`}
      </MathBlock>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> Compute <InlineMath>(2 + 3i)(1 + 4i)</InlineMath>
        </p>
        <MathBlock>
          {`(2 + 3i)(1 + 4i) = 2 \\cdot 1 - 3 \\cdot 4 + i(2 \\cdot 4 + 3 \\cdot 1) = -10 + 11i`}
        </MathBlock>
      </div>

      {/* Ordered Pairs Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Hamilton's Definition
      </h3>

      <p className="text-dark-200 mb-6">
        In 1833, Hamilton gave a rigorous definition of complex numbers as{' '}
        <strong>ordered pairs</strong> <InlineMath>(a, b)</InlineMath> with
        specific addition and multiplication rules:
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <MathBlock>
          {`(a_1, b_1) + (a_2, b_2) = (a_1 + a_2, b_1 + b_2)`}
        </MathBlock>
        <MathBlock>
          {`(a_1, b_1) \\times (a_2, b_2) = (a_1a_2 - b_1b_2, b_1a_2 + a_1b_2)`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          With this definition, <InlineMath>i = (0, 1)</InlineMath> and{' '}
          <InlineMath>(0, 1)^2 = (-1, 0)</InlineMath>.
        </p>
      </div>

      {/* Absolute Value */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Absolute Value</h3>

      <p className="text-dark-200 mb-6">
        The <strong>absolute value</strong> (or <strong>modulus</strong>) of a
        complex number is its distance from the origin in the complex plane:
      </p>

      <MathBlock>{`|a + bi| = \\sqrt{a^2 + b^2}`}</MathBlock>

      <p className="text-dark-200 my-6">
        This is just the Pythagorean theorem! The complex number{' '}
        <InlineMath>a + bi</InlineMath> corresponds to the point{' '}
        <InlineMath>(a, b)</InlineMath>, and its absolute value is the
        hypotenuse of the right triangle with legs{' '}
        <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
      </p>

      {/* Multiplicative Property */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Multiplicative Property
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Key Property
        </h4>
        <p className="text-dark-200 mb-4">
          The absolute value is <strong>multiplicative</strong>:
        </p>
        <MathBlock>
          {`|z_1 z_2| = |z_1| \\cdot |z_2|`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This is equivalent to the <strong>Diophantus identity</strong>:
      </p>

      <MathBlock>
        {`(a_1^2 + b_1^2)(a_2^2 + b_2^2) = (a_1a_2 - b_1b_2)^2 + (a_1b_2 + b_1a_2)^2`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Diophantus knew this identity in the 3rd century A.D.! He observed that
        the product of sums of two squares is itself a sum of two squares.
      </p>

      {/* The Complex Plane */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Complex Plane</h3>

      <p className="text-dark-200 mb-6">
        We visualize complex numbers as points in a plane, with the real part
        on the horizontal axis and the imaginary part on the vertical axis.
        This is called the <strong>complex plane</strong> or{' '}
        <strong>Argand diagram</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              Addition is vector addition (parallelogram rule)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              Absolute value is distance from origin
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              Real numbers lie on the horizontal axis
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              Pure imaginary numbers lie on the vertical axis
            </span>
          </li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Complex numbers: <InlineMath>z = a + bi</InlineMath> with{' '}
              <InlineMath>i^2 = -1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Addition: <InlineMath>(a_1 + ib_1) + (a_2 + ib_2) = (a_1 + a_2) + i(b_1 + b_2)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Multiplication: <InlineMath>(a_1 + ib_1)(a_2 + ib_2) = (a_1a_2 - b_1b_2) + i(a_1b_2 + b_1a_2)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Absolute value: <InlineMath>|a + bi| = \sqrt{'{a^2 + b^2}'}</InlineMath>{' '}
              is multiplicative
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={56} questions={section56Questions} />
    </LessonLayout>
  );
}
