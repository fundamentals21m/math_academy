import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section59Questions } from '../../data/quizzes';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2 className="text-2xl font-semibold mb-4">
        The Gaussian Integers
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Just as we extended the integers <InlineMath>\mathbb{'{Z}'}</InlineMath>{' '}
        to rational numbers, we can extend them to include <InlineMath>i</InlineMath>.
        The <strong>Gaussian integers</strong> form a beautiful number system with
        its own arithmetic.
      </p>

      {/* Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Definition</h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Gaussian Integers
        </h4>
        <p className="text-dark-200">
          The <strong>Gaussian integers</strong> are complex numbers of the form{' '}
          <InlineMath>a + bi</InlineMath> where <InlineMath>a, b \in \mathbb{'{Z}'}</InlineMath>:
        </p>
        <MathBlock>
          {`\\mathbb{Z}[i] = \\{a + bi : a, b \\in \\mathbb{Z}\\}`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The Gaussian integers form a <strong>ring</strong>: they are closed
        under addition, subtraction, and multiplication.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example calculations:</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            <InlineMath>(3 + 2i) + (1 - 4i) = 4 - 2i</InlineMath> ✓ (Gaussian integer)
          </li>
          <li>
            <InlineMath>(2 + i)(3 + i) = 6 + 2i + 3i + i^2 = 5 + 5i</InlineMath> ✓ (Gaussian integer)
          </li>
          <li>
            <InlineMath>(1 + i)^2 = 1 + 2i + i^2 = 2i</InlineMath> ✓ (Gaussian integer)
          </li>
        </ul>
      </div>

      {/* The Norm */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Norm</h3>

      <p className="text-dark-200 mb-6">
        The <strong>norm</strong> of a Gaussian integer is the square of its
        absolute value:
      </p>

      <MathBlock>
        {`N(a + bi) = a^2 + b^2 = |a + bi|^2`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        The norm can also be computed as:
      </p>

      <MathBlock>
        {`N(z) = z \\cdot \\bar{z}`}
      </MathBlock>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Key Property: Multiplicativity
        </h4>
        <p className="text-dark-200">
          The norm is <strong>multiplicative</strong>:
        </p>
        <MathBlock>
          {`N(z_1 z_2) = N(z_1) \\cdot N(z_2)`}
        </MathBlock>
        <p className="text-dark-300 text-sm mt-3">
          This follows from the multiplicativity of the absolute value.
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> <InlineMath>N(3 + 4i) = 9 + 16 = 25</InlineMath>
        </p>
        <p className="text-dark-200">
          <strong>Verify:</strong> <InlineMath>(3 + 4i)(3 - 4i) = 9 + 16 = 25</InlineMath> ✓
        </p>
      </div>

      {/* Units */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Units</h3>

      <p className="text-dark-200 mb-6">
        A <strong>unit</strong> in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath> is
        a Gaussian integer that has a multiplicative inverse that is also a
        Gaussian integer.
      </p>

      <p className="text-dark-200 mb-6">
        The units are exactly the Gaussian integers with norm 1:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="1" />
          <p className="text-xs text-dark-300">N(1) = 1</p>
        </Card>
        <Card>
          <CardHeader title="-1" />
          <p className="text-xs text-dark-300">N(-1) = 1</p>
        </Card>
        <Card>
          <CardHeader title="i" />
          <p className="text-xs text-dark-300">N(i) = 1</p>
        </Card>
        <Card>
          <CardHeader title="-i" />
          <p className="text-xs text-dark-300">N(-i) = 1</p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        These are exactly the fourth roots of unity! Any other Gaussian integer
        has norm at least 2, so its inverse is not a Gaussian integer.
      </p>

      <Callout type="info">
        <p>
          In the ordinary integers, the only units are <InlineMath>\pm 1</InlineMath>.
          The Gaussian integers have four units because of the extra symmetry
          provided by <InlineMath>i</InlineMath>.
        </p>
      </Callout>

      {/* Divisibility */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Divisibility</h3>

      <p className="text-dark-200 mb-6">
        We say <InlineMath>\alpha</InlineMath> <strong>divides</strong>{' '}
        <InlineMath>\beta</InlineMath> in <InlineMath>\mathbb{'{Z}'}[i]</InlineMath>{' '}
        if <InlineMath>\beta = \alpha \gamma</InlineMath> for some{' '}
        <InlineMath>\gamma \in \mathbb{'{Z}'}[i]</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Key observation:</strong> If{' '}
          <InlineMath>\alpha | \beta</InlineMath>, then{' '}
          <InlineMath>N(\alpha) | N(\beta)</InlineMath> in{' '}
          <InlineMath>\mathbb{'{Z}'}</InlineMath>.
        </p>
        <p className="text-dark-200">
          This is because <InlineMath>N(\beta) = N(\alpha)N(\gamma)</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Example:</strong> Does <InlineMath>1 + i</InlineMath> divide{' '}
        <InlineMath>2</InlineMath>?
      </p>

      <MathBlock>
        {`\\frac{2}{1+i} = \\frac{2(1-i)}{(1+i)(1-i)} = \\frac{2-2i}{2} = 1 - i`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Yes! Since <InlineMath>1 - i \in \mathbb{'{Z}'}[i]</InlineMath>, we have{' '}
        <InlineMath>2 = (1 + i)(1 - i)</InlineMath>.
      </p>

      {/* Division with Remainder */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Division with Remainder
      </h3>

      <p className="text-dark-200 mb-6">
        Like the integers, Gaussian integers have a division algorithm:
      </p>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Gaussian Division Algorithm
        </h4>
        <p className="text-dark-200">
          For any <InlineMath>\alpha, \beta \in \mathbb{'{Z}'}[i]</InlineMath>{' '}
          with <InlineMath>\beta \neq 0</InlineMath>, there exist{' '}
          <InlineMath>\gamma, \rho \in \mathbb{'{Z}'}[i]</InlineMath> such that:
        </p>
        <MathBlock>
          {`\\alpha = \\beta \\gamma + \\rho \\quad \\text{with} \\quad N(\\rho) < N(\\beta)`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The idea: divide <InlineMath>\alpha/\beta</InlineMath> in{' '}
        <InlineMath>\mathbb{'{C}'}</InlineMath>, then round to the nearest
        Gaussian integer to get <InlineMath>\gamma</InlineMath>.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Gaussian integers: <InlineMath>\mathbb{'{Z}'}[i] = \{'{a + bi : a, b \\in \\mathbb{Z}}'}\</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Norm: <InlineMath>N(a + bi) = a^2 + b^2</InlineMath>, multiplicative
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Units: <InlineMath>1, -1, i, -i</InlineMath> (norm 1 elements)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Division algorithm works with <InlineMath>N(\rho) &lt; N(\beta)</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={59} questions={section59Questions} />
    </LessonLayout>
  );
}
