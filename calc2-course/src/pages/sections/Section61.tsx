import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2>The Method of Frobenius</h2>

      <p>
        When a differential equation has a <strong>singular point</strong>—where
        the coefficient functions are not analytic—the simple power series
        method may fail. The <strong>method of Frobenius</strong> extends the
        power series approach to handle certain types of singularities.
      </p>

      <h3>Regular Singular Points</h3>

      <p>
        Consider the equation:
      </p>
      <MathBlock>
        {`y'' + P_1(x)y' + P_2(x)y = 0`}
      </MathBlock>

      <p>
        A point <InlineMath>{`x_0`}</InlineMath> is called a{' '}
        <strong>regular singular point</strong> if{' '}
        <InlineMath>{`P_1`}</InlineMath> or <InlineMath>{`P_2`}</InlineMath> is not
        analytic at <InlineMath>{`x_0`}</InlineMath>, but the functions:
      </p>
      <MathBlock>
        {`(x - x_0)P_1(x) \\quad \\text{and} \\quad (x - x_0)^2 P_2(x)`}
      </MathBlock>
      <p>are analytic at <InlineMath>{`x_0`}</InlineMath>.</p>

      <h3>The Frobenius Series</h3>

      <p>
        At a regular singular point, we seek solutions of the form:
      </p>
      <MathBlock>
        {`y = x^s \\sum_{n=0}^\\infty a_n x^n = \\sum_{n=0}^\\infty a_n x^{n+s}`}
      </MathBlock>

      <p>
        where <InlineMath>s</InlineMath> is a constant (possibly non-integer) to
        be determined. This is called a <strong>Frobenius series</strong>.
      </p>

      <h3>The Indicial Equation</h3>

      <p>
        Substituting the Frobenius series into the differential equation, the
        coefficient of the lowest power of <InlineMath>x</InlineMath> gives the{' '}
        <strong>indicial equation</strong>—a quadratic equation for{' '}
        <InlineMath>s</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Indicial Equation:</strong> For the equation{' '}
        <InlineMath>{`x^2 y'' + xp(x)y' + q(x)y = 0`}</InlineMath> where{' '}
        <InlineMath>{`p(x) = \\sum p_n x^n`}</InlineMath> and{' '}
        <InlineMath>{`q(x) = \\sum q_n x^n`}</InlineMath>, the indicial equation is:
        <MathBlock>
          {`s(s-1) + p_0 s + q_0 = 0`}
        </MathBlock>
      </Callout>

      <h3>Example</h3>

      <p>
        Consider <InlineMath>{`x^2 y'' - y' - y = 0`}</InlineMath> near{' '}
        <InlineMath>{`x = 0`}</InlineMath>.
      </p>

      <p>
        <strong>Step 1:</strong> Try{' '}
        <InlineMath>{`y = \\sum a_k x^{k+s}`}</InlineMath>.
      </p>

      <p>
        <strong>Step 2:</strong> Substitute and collect terms.
      </p>

      <p>
        <strong>Step 3:</strong> The indicial equation determines{' '}
        <InlineMath>s</InlineMath>.
      </p>

      <p>
        <strong>Step 4:</strong> The recursion formula determines{' '}
        <InlineMath>{`a_1, a_2, \\ldots`}</InlineMath> in terms of{' '}
        <InlineMath>{`a_0`}</InlineMath>.
      </p>

      <h3>Two Solutions</h3>

      <p>
        Let <InlineMath>{`s_1`}</InlineMath> and <InlineMath>{`s_2`}</InlineMath> be the
        roots of the indicial equation with{' '}
        <InlineMath>{`\\text{Re}(s_1) \\geq \\text{Re}(s_2)`}</InlineMath>.
      </p>

      <ul>
        <li>
          <strong>Case 1:</strong> If <InlineMath>{`s_1 - s_2`}</InlineMath> is not
          a nonnegative integer, two independent Frobenius series solutions
          exist.
        </li>
        <li>
          <strong>Case 2:</strong> If <InlineMath>{`s_1 = s_2`}</InlineMath>, one
          Frobenius series solution exists. The second involves{' '}
          <InlineMath>{`\\log x`}</InlineMath>.
        </li>
        <li>
          <strong>Case 3:</strong> If <InlineMath>{`s_1 - s_2`}</InlineMath> is a
          positive integer, one Frobenius series always exists for{' '}
          <InlineMath>{`s_1`}</InlineMath>. The second may or may not be a simple
          Frobenius series.
        </li>
      </ul>

      <h3>Important Special Equations</h3>

      <p>
        Many classical differential equations have regular singular points and
        are solved using Frobenius' method:
      </p>

      <ul>
        <li>
          <strong>Bessel equation:</strong>{' '}
          <InlineMath>{`x^2 y'' + xy' + (x^2 - n^2)y = 0`}</InlineMath>
        </li>
        <li>
          <strong>Legendre equation</strong> (at <InlineMath>{`x = \\pm 1`}</InlineMath>)
        </li>
        <li>
          <strong>Hypergeometric equation</strong>
        </li>
        <li>
          <strong>Laguerre equation:</strong>{' '}
          <InlineMath>{`xy'' + (1-x)y' + ny = 0`}</InlineMath>
        </li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The method of Frobenius generalizes power
        series solutions by allowing a fractional or negative leading exponent.
        The indicial equation captures the singular behavior at{' '}
        <InlineMath>{`x_0`}</InlineMath>. This method is essential for solving the
        classical equations of mathematical physics, whose singularities often
        occur at natural boundaries of the problem domain.
      </Callout>
    </LessonLayout>
  );
}
