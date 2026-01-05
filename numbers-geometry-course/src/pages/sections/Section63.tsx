import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section63Questions } from '../../data/quizzes';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2 className="text-2xl font-semibold mb-4">
        Discussion
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The journey through complex numbers reveals deep connections between
        algebra, geometry, and number theory. Let's reflect on the major themes
        and look ahead to further developments.
      </p>

      {/* Historical Development */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Historical Perspective
      </h3>

      <p className="text-dark-200 mb-6">
        Complex numbers emerged reluctantly from the solution of polynomial
        equations. For centuries, mathematicians computed with them while
        questioning their legitimacy.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="16th Century" />
          <p className="text-xs text-dark-300">
            Cardano, Bombelli: Use √(-1) to solve cubics
          </p>
        </Card>
        <Card>
          <CardHeader title="1797" />
          <p className="text-xs text-dark-300">
            Wessel, Argand: Geometric interpretation
          </p>
        </Card>
        <Card>
          <CardHeader title="1833" />
          <p className="text-xs text-dark-300">
            Hamilton: Ordered pairs definition
          </p>
        </Card>
        <Card>
          <CardHeader title="1832" />
          <p className="text-xs text-dark-300">
            Gauss: Gaussian integers, unique factorization
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        Hamilton's definition as ordered pairs finally put complex numbers on a
        rigorous foundation. His bold approach—defining <InlineMath>i</InlineMath>{' '}
        rather than discovering it—revolutionized algebra.
      </p>

      {/* Key Themes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Unifying Themes
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4">1. Algebra and Geometry Unite</h4>
        <p className="text-dark-200">
          Complex multiplication is rotation. This simple fact connects abstract
          algebra with Euclidean geometry. The formula{' '}
          <InlineMath>e^{'{i\\theta}'} = \cos\theta + i\sin\theta</InlineMath>{' '}
          (Euler's formula) encapsulates this unity.
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4">2. Number Theory Deepens</h4>
        <p className="text-dark-200">
          The Gaussian integers <InlineMath>\mathbb{'{Z}'}[i]</InlineMath> extend
          unique factorization to a new domain. This revealed that ordinary
          primes can split, remain inert, or ramify—a pattern that recurs
          throughout algebraic number theory.
        </p>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4">3. The Norm as Bridge</h4>
        <p className="text-dark-200">
          The multiplicative norm <InlineMath>N(a + bi) = a^2 + b^2</InlineMath>{' '}
          connects complex arithmetic to sums of squares. Fermat's two squares
          theorem becomes a statement about norms, revealing hidden structure.
        </p>
      </div>

      {/* Further Directions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Further Directions
      </h3>

      <p className="text-dark-200 mb-6">
        Complex numbers open doors to rich mathematical territories:
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Quaternions
        </h4>
        <p className="text-dark-200">
          Hamilton spent years seeking a 3D extension of complex numbers. In
          1843, he discovered that you need <em>four</em> dimensions: the{' '}
          <strong>quaternions</strong>{' '}
          <InlineMath>a + bi + cj + dk</InlineMath>. Fascinatingly,
          multiplication is no longer commutative!
        </p>
      </div>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Algebraic Number Theory
        </h4>
        <p className="text-dark-200">
          The Gaussian integers are just the beginning. Rings like{' '}
          <InlineMath>\mathbb{'{Z}'}[\sqrt{'{-5}'}]</InlineMath> and{' '}
          <InlineMath>\mathbb{'{Z}'}[\omega]</InlineMath> (where{' '}
          <InlineMath>\omega = e^{'{2\\pi i/3}'}</InlineMath>) lead to the
          study of general algebraic integers—a vast generalization of what
          we've seen.
        </p>
      </div>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Complex Analysis
        </h4>
        <p className="text-dark-200">
          Calculus with complex functions leads to profound results. The
          connection between integrals and sums (residue calculus), the Riemann
          hypothesis about the zeros of the zeta function, and conformal
          mappings all depend on complex numbers.
        </p>
      </div>

      {/* Failure of Unique Factorization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        A Cautionary Tale
      </h3>

      <p className="text-dark-200 mb-6">
        Not all extensions of integers have unique factorization. In{' '}
        <InlineMath>\mathbb{'{Z}'}[\sqrt{'{-5}'}]</InlineMath>:
      </p>

      <MathBlock>
        {`6 = 2 \\times 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Both factorizations are into irreducibles, but they're different!
        Kummer's solution (ideal numbers, 1840s) led to modern algebraic number
        theory.
      </p>

      <Callout type="info">
        <p>
          The Gaussian integers are special: unique factorization holds because
          the norm satisfies the <strong>Euclidean property</strong>. This
          fails for some other rings, requiring deeper tools to restore order.
        </p>
      </Callout>

      {/* Summary of Chapter */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Chapter Summary
      </h3>

      <p className="text-dark-200 mb-6">
        In this chapter, we have seen:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Complex operations:</strong> Addition is component-wise;
              multiplication uses <InlineMath>i^2 = -1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Polar form:</strong> Arguments add under multiplication,
              giving rotation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Isometries:</strong> Complex numbers describe all
              distance-preserving plane transformations
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Gaussian integers:</strong> A ring with unique prime
              factorization
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Fermat's theorem:</strong> Primes{' '}
              <InlineMath>p \equiv 1 \pmod 4</InlineMath> are sums of two
              squares
            </span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        The complex numbers stand at the crossroads of algebra, geometry, and
        analysis. As Hadamard famously said: "The shortest path between two
        truths in the real domain passes through the complex domain."
      </p>

      {/* Section Quiz */}
      <SectionQuiz sectionId={63} questions={section63Questions} />
    </LessonLayout>
  );
}
