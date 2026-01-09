import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2>Complex Functions</h2>

      <p>
        Extending calculus from real to complex variables reveals a remarkably
        rich theory. Functions that are differentiable in the complex sense
        have extraordinary properties: they are automatically infinitely
        differentiable, equal to their Taylor series, and determined globally
        by their local behavior. This is the world of analytic functions.
      </p>

      <Callout type="info">
        <strong>A Stricter Condition:</strong> Complex differentiability is
        much more demanding than real differentiability. The derivative must
        exist and be the same regardless of the direction of approach in the
        complex plane.
      </Callout>

      <h3>Complex Differentiation</h3>

      <p>
        A function <InlineMath>{`f: \\mathbb{C} \\to \\mathbb{C}`}</InlineMath>{' '}
        is differentiable at <InlineMath>z_0</InlineMath> if the limit exists:
      </p>

      <Definition title="Complex Derivative">
        <MathBlock>
          {`f'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0 + h) - f(z_0)}{h}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Here <InlineMath>h</InlineMath> is complex and can approach 0 from
          any direction. The limit must be the same for all approaches.
        </p>
      </Definition>

      <Example title="The Crucial Difference">
        <p>
          Consider <InlineMath>{`f(z) = \\bar{z}`}</InlineMath> (complex conjugate).
          At <InlineMath>z_0 = 0</InlineMath>:
        </p>
        <MathBlock>
          {`\\frac{f(h) - f(0)}{h} = \\frac{\\bar{h}}{h}`}
        </MathBlock>
        <p className="mt-2">
          If <InlineMath>h = r</InlineMath> (real), this equals 1. If{' '}
          <InlineMath>h = ri</InlineMath> (imaginary), this equals -1.
        </p>
        <p className="mt-2 text-dark-400">
          The limit depends on direction, so <InlineMath>{'\\bar{z}'}</InlineMath>{' '}
          is nowhere complex-differentiable!
        </p>
      </Example>

      <h3>The Cauchy-Riemann Equations</h3>

      <p>
        Writing <InlineMath>{`f(x + iy) = u(x,y) + iv(x,y)`}</InlineMath>,
        complex differentiability imposes conditions on the real and imaginary
        parts:
      </p>

      <Theorem title="Cauchy-Riemann Equations">
        <p>
          If <InlineMath>f = u + iv</InlineMath> is complex differentiable, then:
        </p>
        <MathBlock>
          {`\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}`}
        </MathBlock>
        <p className="mt-2">
          Conversely, if these hold and the partials are continuous,{' '}
          <InlineMath>f</InlineMath> is complex differentiable.
        </p>
      </Theorem>

      <Example title="Verifying Analyticity">
        <p>For <InlineMath>{`f(z) = z^2 = (x+iy)^2 = (x^2-y^2) + 2ixy`}</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`u = x^2 - y^2`}</InlineMath>, <InlineMath>{`v = 2xy`}</InlineMath></li>
          <li><InlineMath>{`u_x = 2x = v_y`}</InlineMath> ✓</li>
          <li><InlineMath>{`u_y = -2y = -v_x`}</InlineMath> ✓</li>
        </ul>
        <p className="mt-2 text-dark-400">
          The Cauchy-Riemann equations hold, confirming <InlineMath>z^2</InlineMath>{' '}
          is analytic.
        </p>
      </Example>

      <h3>Analytic Functions</h3>

      <Definition title="Analytic (Holomorphic) Function">
        <p>
          A function is <strong>analytic</strong> (or <strong>holomorphic</strong>)
          on a domain <InlineMath>D</InlineMath> if it is complex differentiable
          at every point of <InlineMath>D</InlineMath>.
        </p>
      </Definition>

      <p>
        Analytic functions have remarkable properties:
      </p>

      <Theorem title="Properties of Analytic Functions">
        <p>If <InlineMath>f</InlineMath> is analytic on a domain <InlineMath>D</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <InlineMath>f</InlineMath> is infinitely differentiable (all
            derivatives exist and are analytic)
          </li>
          <li>
            <InlineMath>f</InlineMath> equals its Taylor series at every point
          </li>
          <li>
            <InlineMath>f</InlineMath> is determined by its values on any
            curve (analytic continuation)
          </li>
          <li>
            Real and imaginary parts are harmonic:{' '}
            <InlineMath>{`\\nabla^2 u = \\nabla^2 v = 0`}</InlineMath>
          </li>
        </ul>
      </Theorem>

      <Callout type="note">
        <strong>Rigidity:</strong> Unlike real analysis, where{' '}
        <InlineMath>C^\infty</InlineMath> functions need not be analytic,
        complex differentiability <em>once</em> implies infinite differentiability
        and local power series representation. Analytic functions are very
        "rigid."
      </Callout>

      <h3>Important Examples</h3>

      <Example title="The Exponential Function">
        <MathBlock>
          {`e^z = e^{x+iy} = e^x(\\cos y + i\\sin y)`}
        </MathBlock>
        <p className="mt-2">
          This is entire (analytic everywhere) and satisfies{' '}
          <InlineMath>{`(e^z)' = e^z`}</InlineMath>.
        </p>
      </Example>

      <Example title="Trigonometric Functions">
        <MathBlock>
          {`\\sin z = \\frac{e^{iz} - e^{-iz}}{2i}, \\quad \\cos z = \\frac{e^{iz} + e^{-iz}}{2}`}
        </MathBlock>
        <p className="mt-2">
          These extend real trig functions to the complex plane, revealing
          connections like <InlineMath>{`\\sin(iz) = i\\sinh(z)`}</InlineMath>.
        </p>
      </Example>

      <Example title="The Logarithm">
        <p>
          The complex logarithm is multi-valued: if{' '}
          <InlineMath>{`w = e^z`}</InlineMath>, then{' '}
          <InlineMath>{`z = \\ln|w| + i(\\arg w + 2\\pi k)`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          This multi-valuedness leads to Riemann surfaces.
        </p>
      </Example>

      <h3>Conformal Mappings</h3>

      <p>
        Analytic functions preserve angles—they are conformal maps:
      </p>

      <Theorem title="Conformal Property">
        <p>
          If <InlineMath>f</InlineMath> is analytic and{' '}
          <InlineMath>{`f'(z_0) \\neq 0`}</InlineMath>, then <InlineMath>f</InlineMath>{' '}
          preserves the angle between curves passing through <InlineMath>z_0</InlineMath>.
        </p>
      </Theorem>

      <Example title="The Map w = z²">
        <p>
          The function <InlineMath>{`w = z^2`}</InlineMath> doubles angles at
          the origin. A ray at angle <InlineMath>{'\\theta'}</InlineMath> maps to
          a ray at angle <InlineMath>{'2\\theta'}</InlineMath>.
        </p>
        <p className="mt-2">
          The right half-plane <InlineMath>{`\\text{Re}(z) > 0`}</InlineMath>{' '}
          maps to the slit plane <InlineMath>{`\\mathbb{C} \\setminus (-\\infty, 0]`}</InlineMath>.
        </p>
      </Example>

      <h3>The Power of Complex Analysis</h3>

      <p>
        Complex analysis provides powerful tools:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Evaluation of real integrals:</strong> Many difficult real
          integrals become easy using complex contours.
        </li>
        <li>
          <strong>Fluid dynamics:</strong> Potential flow is described by
          analytic functions.
        </li>
        <li>
          <strong>Electrostatics:</strong> Electric potential in 2D satisfies
          Laplace's equation—real parts of analytic functions.
        </li>
        <li>
          <strong>Number theory:</strong> The Riemann zeta function is the
          prime example of analytic number theory.
        </li>
      </ul>

      <SectionQuiz sectionId={53} questions={quizMap[53] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
