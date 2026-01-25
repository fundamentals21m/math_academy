import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2>The Bessel Equation</h2>

      <p>
        The <strong>Bessel equation</strong> is one of the most important
        equations in applied mathematics, arising in problems with cylindrical
        symmetry: vibrations of membranes, heat flow in cylinders, and
        propagation of electric currents in cylindrical conductors.
      </p>

      <h3>The Equation</h3>

      <Callout type="info">
        <strong>Bessel Equation:</strong> For a nonnegative constant{' '}
        <InlineMath>{`\\alpha`}</InlineMath>:
        <MathBlock>
          {`x^2 y'' + xy' + (x^2 - \\alpha^2)y = 0`}
        </MathBlock>
      </Callout>

      <p>
        This equation has a regular singular point at{' '}
        <InlineMath>{`x = 0`}</InlineMath> with{' '}
        <InlineMath>{`P(x) = 1`}</InlineMath> and{' '}
        <InlineMath>{`Q(x) = x^2 - \\alpha^2`}</InlineMath>.
      </p>

      <h3>The Indicial Equation</h3>

      <p>
        Seeking solutions of the form{' '}
        <InlineMath>{`y = |x|^t \\sum a_n x^n`}</InlineMath>, the indicial equation is:
      </p>
      <MathBlock>{`t^2 - \\alpha^2 = 0`}</MathBlock>

      <p>
        The roots are <InlineMath>{`t = \\alpha`}</InlineMath> and{' '}
        <InlineMath>{`t = -\\alpha`}</InlineMath>.
      </p>

      <h3>Bessel Functions of the First Kind</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>Bessel function of the first
        kind</strong> of order <InlineMath>{`\\alpha`}</InlineMath> is:
        <MathBlock>
          {`J_\\alpha(x) = \\left(\\frac{x}{2}\\right)^\\alpha \\sum_{n=0}^\\infty \\frac{(-1)^n}{n! \\Gamma(n+1+\\alpha)} \\left(\\frac{x}{2}\\right)^{2n}`}
        </MathBlock>
        where <InlineMath>{`\\Gamma`}</InlineMath> is the gamma function.
      </Callout>

      <p>
        For nonnegative integers <InlineMath>{`\\alpha = p`}</InlineMath>:
      </p>
      <MathBlock>
        {`J_p(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n}{n!(n+p)!} \\left(\\frac{x}{2}\\right)^{2n+p}`}
      </MathBlock>

      <h3>Key Properties</h3>

      <p><strong>Recurrence relations:</strong></p>
      <MathBlock>
        {`\\frac{d}{dx}\\left(x^\\alpha J_\\alpha(x)\\right) = x^\\alpha J_{\\alpha-1}(x)`}
      </MathBlock>
      <MathBlock>
        {`\\frac{d}{dx}\\left(x^{-\\alpha} J_\\alpha(x)\\right) = -x^{-\\alpha} J_{\\alpha+1}(x)`}
      </MathBlock>

      <p><strong>Combined recurrence:</strong></p>
      <MathBlock>
        {`J_{\\alpha-1}(x) + J_{\\alpha+1}(x) = \\frac{2\\alpha}{x} J_\\alpha(x)`}
      </MathBlock>
      <MathBlock>
        {`J_{\\alpha-1}(x) - J_{\\alpha+1}(x) = 2J_\\alpha'(x)`}
      </MathBlock>

      <h3>Special Cases</h3>

      <p>
        When <InlineMath>{`\\alpha = 1/2`}</InlineMath>:
      </p>
      <MathBlock>
        {`J_{1/2}(x) = \\sqrt{\\frac{2}{\\pi x}} \\sin x, \\quad J_{-1/2}(x) = \\sqrt{\\frac{2}{\\pi x}} \\cos x`}
      </MathBlock>

      <p>
        More generally, <InlineMath>{`J_\\alpha(x)`}</InlineMath> is an elementary
        function when <InlineMath>{`\\alpha`}</InlineMath> is half an odd integer.
      </p>

      <h3>Bessel Functions of the Second Kind</h3>

      <p>
        When <InlineMath>{`\\alpha = p`}</InlineMath> is a nonnegative integer,{' '}
        <InlineMath>{`J_p`}</InlineMath> and <InlineMath>{`J_{-p}`}</InlineMath> are
        not independent. A second solution is the{' '}
        <strong>Bessel function of the second kind</strong>:
      </p>
      <MathBlock>
        {`K_p(x) = J_p(x) \\log x + x^{-p} \\sum_{n=0}^\\infty C_n x^n`}
      </MathBlock>

      <p>
        The general solution for integer order <InlineMath>p</InlineMath> is:
      </p>
      <MathBlock>
        {`y = c_1 J_p(x) + c_2 K_p(x)`}
      </MathBlock>

      <h3>Zeros and Oscillations</h3>

      <p>
        The Bessel functions <InlineMath>{`J_\\alpha`}</InlineMath> and{' '}
        <InlineMath>{`J_{\\alpha+1}`}</InlineMath> have interlacing positive
        zeros: between any two positive zeros of one, there is exactly one zero
        of the other. This follows from Rolle's theorem applied to the
        recurrence relations.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Bessel functions are to cylindrical
        coordinates what sines and cosines are to Cartesian coordinates. They
        arise naturally when separating variables in the Laplacian operator in
        cylindrical coordinates. The parameter{' '}
        <InlineMath>{`\\alpha`}</InlineMath> typically corresponds to an angular
        mode number, and the zeros of <InlineMath>{`J_\\alpha`}</InlineMath>{' '}
        determine the natural frequencies of vibrating drums and cylinders.
      </Callout>
    </LessonLayout>
  );
}
