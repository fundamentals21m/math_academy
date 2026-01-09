import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2>Abel and Jacobi</h2>

      <p>
        In the 1820s, two young mathematicians independently revolutionized
        the theory of elliptic integrals. Niels Henrik Abel (1802-1829) of
        Norway and Carl Gustav Jacob Jacobi (1804-1851) of Germany discovered
        that by inverting elliptic integrals, one obtains functions with
        extraordinary properties—the elliptic functions.
      </p>

      <Callout type="info">
        <strong>Tragic Genius:</strong> Abel died of tuberculosis at age 26,
        just days before receiving a professorship in Berlin. Jacobi called
        him "the greatest mathematician who ever lived" and devoted himself
        to developing Abel's ideas.
      </Callout>

      <h3>The Inversion Insight</h3>

      <p>
        The key insight was simple but profound. Consider the relationship
        between the integral and its inverse:
      </p>

      <Example title="The Circular Analogy">
        <p>For circular functions:</p>
        <MathBlock>
          {`u = \\int_0^x \\frac{dt}{\\sqrt{1-t^2}} = \\arcsin(x)`}
        </MathBlock>
        <p className="mt-2">
          Inverting: <InlineMath>x = \sin(u)</InlineMath>. The sine function
          is much nicer than arcsine—it's periodic, smooth, and satisfies
          simple differential equations.
        </p>
      </Example>

      <p>
        Abel and Jacobi applied the same idea to elliptic integrals:
      </p>

      <Definition title="Jacobi's Elliptic Functions">
        <p>
          If <InlineMath>{`u = F(\\phi, k) = \\int_0^\\phi \\frac{d\\theta}{\\sqrt{1-k^2\\sin^2\\theta}}`}</InlineMath>,
          then define:
        </p>
        <MathBlock>
          {`\\text{sn}(u, k) = \\sin\\phi, \\quad \\text{cn}(u, k) = \\cos\\phi, \\quad \\text{dn}(u, k) = \\sqrt{1-k^2\\sin^2\\phi}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          These are the Jacobi elliptic functions: sn (elliptic sine),
          cn (elliptic cosine), and dn (delta amplitude).
        </p>
      </Definition>

      <h3>Properties of Elliptic Functions</h3>

      <p>
        The elliptic functions have beautiful properties:
      </p>

      <Theorem title="Fundamental Identity">
        <MathBlock>
          {`\\text{sn}^2(u) + \\text{cn}^2(u) = 1`}
        </MathBlock>
        <MathBlock>
          {`\\text{dn}^2(u) + k^2\\text{sn}^2(u) = 1`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          These generalize <InlineMath>{`\\sin^2 + \\cos^2 = 1`}</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Differential Equations">
        <MathBlock>
          {`\\frac{d}{du}\\text{sn}(u) = \\text{cn}(u)\\,\\text{dn}(u)`}
        </MathBlock>
        <MathBlock>
          {`\\frac{d}{du}\\text{cn}(u) = -\\text{sn}(u)\\,\\text{dn}(u)`}
        </MathBlock>
        <MathBlock>
          {`\\frac{d}{du}\\text{dn}(u) = -k^2\\text{sn}(u)\\,\\text{cn}(u)`}
        </MathBlock>
      </Theorem>

      <h3>Double Periodicity</h3>

      <p>
        The most remarkable property is that elliptic functions have two
        independent periods:
      </p>

      <Theorem title="Double Periodicity">
        <p>
          The function <InlineMath>{`\\text{sn}(u, k)`}</InlineMath> satisfies:
        </p>
        <MathBlock>
          {`\\text{sn}(u + 4K) = \\text{sn}(u)`}
        </MathBlock>
        <MathBlock>
          {`\\text{sn}(u + 2iK') = \\text{sn}(u)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>K = K(k)</InlineMath> and{' '}
          <InlineMath>{`K' = K(\\sqrt{1-k^2})`}</InlineMath> are complete
          elliptic integrals.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Complex Periods:</strong> While trigonometric functions like
        sine have one real period (<InlineMath>2\pi</InlineMath>), elliptic
        functions have two independent periods—one real and one purely
        imaginary. This makes them doubly periodic in the complex plane.
      </Callout>

      <h3>Abel's Contributions</h3>

      <p>
        Abel's approach was more general. He considered the inversion problem
        abstractly and discovered:
      </p>

      <Theorem title="Abel's Theorem">
        <p>
          For algebraic integrals of the form{' '}
          <InlineMath>{`\\int R(x, y)\\,dx`}</InlineMath> where{' '}
          <InlineMath>y</InlineMath> satisfies an algebraic equation{' '}
          <InlineMath>f(x, y) = 0</InlineMath>, there is an addition theorem
          expressing the sum of such integrals in terms of a finite number
          of others.
        </p>
      </Theorem>

      <p>
        Abel also proved the impossibility of solving the general quintic
        equation by radicals, showing his range extended far beyond elliptic
        functions.
      </p>

      <h3>Jacobi's Theta Functions</h3>

      <p>
        Jacobi introduced auxiliary functions that made computations tractable:
      </p>

      <Definition title="Jacobi Theta Functions">
        <MathBlock>
          {`\\theta_3(z, q) = 1 + 2\\sum_{n=1}^{\\infty} q^{n^2} \\cos(2nz)`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`q = e^{-\\pi K'/K}`}</InlineMath> is the nome.
          There are four theta functions (<InlineMath>{`\\theta_1, \\theta_2, \\theta_3, \\theta_4`}</InlineMath>),
          and elliptic functions can be expressed as their ratios.
        </p>
      </Definition>

      <Example title="Expressing Elliptic Functions">
        <MathBlock>
          {`\\text{sn}(u) = \\frac{\\theta_3(0)}{\\theta_2(0)} \\cdot \\frac{\\theta_1(v)}{\\theta_4(v)}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <InlineMath>v = \pi u / 2K</InlineMath>. The theta functions
          converge rapidly, making numerical computation efficient.
        </p>
      </Example>

      <h3>The Addition Theorem</h3>

      <p>
        Elliptic functions satisfy addition formulas, generalizing
        trigonometric identities:
      </p>

      <Theorem title="Addition Formula for sn">
        <MathBlock>
          {`\\text{sn}(u + v) = \\frac{\\text{sn}(u)\\,\\text{cn}(v)\\,\\text{dn}(v) + \\text{sn}(v)\\,\\text{cn}(u)\\,\\text{dn}(u)}{1 - k^2\\text{sn}^2(u)\\,\\text{sn}^2(v)}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Compare with <InlineMath>{`\\sin(u+v) = \\sin u \\cos v + \\cos u \\sin v`}</InlineMath>.
        </p>
      </Theorem>

      <h3>Applications</h3>

      <p>
        Elliptic functions appear throughout mathematics and physics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Pendulum motion:</strong> The exact solution for a
          nonlinear pendulum uses <InlineMath>\text{'{sn}'}</InlineMath>.
        </li>
        <li>
          <strong>Conformal mapping:</strong> Elliptic functions map
          rectangles to half-planes and other regions.
        </li>
        <li>
          <strong>Number theory:</strong> Jacobi's work on theta functions
          led to formulas for counting representations as sums of squares.
        </li>
        <li>
          <strong>Algebraic geometry:</strong> Elliptic curves (the curves
          defined by <InlineMath>{`y^2 = x^3 + ax + b`}</InlineMath>) are
          parametrized by elliptic functions.
        </li>
      </ul>

      <Callout type="info">
        <strong>Jacobi's Four Squares Theorem:</strong> Using theta function
        identities, Jacobi proved that the number of ways to write{' '}
        <InlineMath>n</InlineMath> as a sum of four squares is{' '}
        <InlineMath>8 \times</InlineMath> (sum of divisors of{' '}
        <InlineMath>n</InlineMath> not divisible by 4). This is a beautiful
        application of analytic methods to number theory.
      </Callout>

      <SectionQuiz sectionId={45} questions={quizMap[45] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
