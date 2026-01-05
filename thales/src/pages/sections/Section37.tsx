import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section37Questions } from '../../data/quizzes';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2 className="text-2xl font-semibold mb-4">The Fundamental Theorem of Algebra</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The negative integers, fractions, irrationals, and imaginary numbers were all
        introduced to supply solutions to polynomial equations. Do we need <em>more</em>{' '}
        numbers? Is there a polynomial equation with complex coefficients whose root is
        not a complex number? The answer is <strong>no</strong>, and this remarkable fact
        is called the <strong>Fundamental Theorem of Algebra</strong>.
      </p>

      {/* History */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Historical Background</h3>

      <p className="text-dark-200 mb-4">
        The theorem was first stated by <strong>Albert Girard</strong> (1595–1632) in 1629.
        Proofs were given by <strong>Jean d'Alembert</strong> (1717–1783) and{' '}
        <strong>Carl Friedrich Gauss</strong> (1777–1855).
      </p>

      <p className="text-dark-200 mb-4">
        However, John Stillwell [1989] argues that there is a flaw in Gauss's proof,
        and the first rigorous proof was given only after <strong>Weierstrass</strong>{' '}
        established the basic properties of continuous functions.
      </p>

      {/* The Theorem */}
      <Callout type="success" title="The Fundamental Theorem of Algebra">
        <p>
          Every polynomial equation with complex coefficients has complex solutions.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        In other words, the complex numbers <InlineMath>{`\\mathbb{C}`}</InlineMath> are{' '}
        <strong>algebraically closed</strong>—no extension is needed to solve any
        polynomial equation.
      </p>

      {/* Proof Outline */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Proof Outline</h3>

      <p className="text-dark-200 mb-4">
        The proof uses topological ideas about winding numbers of curves. Consider a
        polynomial:
      </p>

      <MathBlock>{`w = p(z) = z^m + c_1 z^{m-1} + \\cdots + c_{m-1} z + c_m \\quad (c_m \\neq 0)`}</MathBlock>

      <p className="text-dark-200 mb-4 mt-4">
        We want to show <InlineMath>{`p(z) = 0`}</InlineMath> has a solution. Let:
      </p>

      <MathBlock>{`g(z) = \\frac{p(z)}{z^m} = 1 + \\frac{c_1}{z} + \\cdots + \\frac{c_m}{z^m}`}</MathBlock>

      <Card className="mb-6 mt-4">
        <CardHeader>Key Observation</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            When <InlineMath>{`|z|`}</InlineMath> is large, <InlineMath>{`g(z)`}</InlineMath>{' '}
            is close to <InlineMath>{`1`}</InlineMath>. Since{' '}
            <InlineMath>{`w = z^m g(z)`}</InlineMath>:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              As <InlineMath>{`z`}</InlineMath> moves around a <strong>large circle</strong>,{' '}
              <InlineMath>{`w`}</InlineMath> winds around the origin{' '}
              <InlineMath>{`m`}</InlineMath> times (since <InlineMath>{`z^m`}</InlineMath>{' '}
              contributes <InlineMath>{`m \\cdot 2\\pi`}</InlineMath> to the angle and{' '}
              <InlineMath>{`g(z) \\approx 1`}</InlineMath> contributes nothing)
            </li>
            <li>
              As the circle shrinks to radius <InlineMath>{`0`}</InlineMath>,{' '}
              <InlineMath>{`w`}</InlineMath> approaches{' '}
              <InlineMath>{`p(0) = c_m \\neq 0`}</InlineMath>, no longer winding around the origin
            </li>
          </ul>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        By continuity, as the winding number changes from <InlineMath>{`m`}</InlineMath>{' '}
        to <InlineMath>{`0`}</InlineMath>, the curve <InlineMath>{`w`}</InlineMath> must
        pass through the origin at some point. At that moment,{' '}
        <InlineMath>{`p(z) = 0`}</InlineMath> and we have found a root!
      </p>

      {/* Corollary */}
      <Callout type="success" title="Corollary: Complete Factorization">
        <p className="mb-2">
          A polynomial of degree <InlineMath>{`m`}</InlineMath> with complex coefficients
          has exactly <InlineMath>{`m`}</InlineMath> linear factors (counting multiplicity):
        </p>
        <MathBlock>{`p(z) = (z - z_1)(z - z_2) \\cdots (z - z_m)`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof of Corollary</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            By the theorem, <InlineMath>{`p(z) = 0`}</InlineMath> has a complex root{' '}
            <InlineMath>{`z_1`}</InlineMath>.
          </p>
          <p>
            If <InlineMath>{`p(z) = q(z)(z - z_1) + R`}</InlineMath>, then{' '}
            <InlineMath>{`R = p(z_1) = 0`}</InlineMath>, so <InlineMath>{`(z - z_1)`}</InlineMath>{' '}
            is a factor.
          </p>
          <p>
            Now <InlineMath>{`q(z)`}</InlineMath> has degree <InlineMath>{`m - 1`}</InlineMath>{' '}
            and also has a complex root. Continuing this process{' '}
            <InlineMath>{`m`}</InlineMath> times gives the complete factorization.
          </p>
        </div>
      </Card>

      {/* Analysis vs Algebra */}
      <h3 className="text-xl font-semibold mt-8 mb-4">A Curious Feature</h3>

      <Callout type="info" title="Analysis Meets Algebra">
        <p>
          It is a pity that the proof of the <em>fundamental theorem of algebra</em> makes
          use of the notion of <strong>continuity</strong>, which belongs to{' '}
          <em>analysis</em> rather than <em>algebra</em>.
        </p>
        <p className="mt-2 text-sm">
          It often happens in mathematics that, when we want to prove a basic property
          of a certain system, we have to go outside that system.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Historically, before modern computers, there was a <strong>mechanical device</strong>{' '}
        which traced out the <InlineMath>{`w`}</InlineMath> curve for any given radius{' '}
        <InlineMath>{`|z| = r`}</InlineMath>. As <InlineMath>{`r`}</InlineMath> was gradually
        reduced, a bell would ring as soon as the <InlineMath>{`w`}</InlineMath> curve
        passed through the origin and a solution had been found.
      </p>

      {/* Conjugate Roots */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Conjugate Roots</h3>

      <Callout type="success" title="Conjugate Root Theorem">
        <p>
          If a polynomial <InlineMath>{`p(z)`}</InlineMath> has all <strong>real</strong>{' '}
          coefficients, and <InlineMath>{`x + yi`}</InlineMath> is a root, then so is
          its <strong>complex conjugate</strong> <InlineMath>{`x - yi`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        This explains why polynomials with real coefficients have roots that come in
        conjugate pairs. For example, the roots of <InlineMath>{`z^2 + 1 = 0`}</InlineMath>{' '}
        are <InlineMath>{`i`}</InlineMath> and <InlineMath>{`-i`}</InlineMath>.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• The <strong>Fundamental Theorem of Algebra</strong>: every polynomial
            with complex coefficients has complex roots</li>
          <li>• First stated by <strong>Girard</strong> (1629), proved by{' '}
            <strong>d'Alembert</strong> and <strong>Gauss</strong></li>
          <li>• Rigorous proof requires <strong>continuity</strong> (analysis)</li>
          <li>• Proof idea: winding numbers of curves around the origin</li>
          <li>• <strong>Corollary</strong>: degree-<InlineMath>{`m`}</InlineMath> polynomial
            has exactly <InlineMath>{`m`}</InlineMath> roots (with multiplicity)</li>
          <li>• <InlineMath>{`\\mathbb{C}`}</InlineMath> is <strong>algebraically closed</strong>—no
            further extension needed</li>
          <li>• For real coefficients: complex roots come in <strong>conjugate pairs</strong></li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={37} questions={section37Questions} />
    </LessonLayout>
  );
}
