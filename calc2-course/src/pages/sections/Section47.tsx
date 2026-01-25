import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2>Linear Differential Equations of Order n</h2>

      <p>
        We now develop the general theory of linear differential equations of
        arbitrary order <InlineMath>n</InlineMath>. The key insight is that the
        solution space forms a finite-dimensional vector space.
      </p>

      <h3>The General Form</h3>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>linear differential equation of
        order n</strong> is one of the form:
        <MathBlock>
          {`P_0(x)y^{(n)} + P_1(x)y^{(n-1)} + \\cdots + P_n(x)y = R(x)`}
        </MathBlock>
        The functions <InlineMath>{`P_0, P_1, \\ldots, P_n`}</InlineMath> are called
        the <strong>coefficients</strong> of the equation.
      </Callout>

      <h3>Singular Points</h3>

      <p>
        The leading coefficient <InlineMath>{`P_0`}</InlineMath> plays a special
        role. Points where <InlineMath>{`P_0(x) = 0`}</InlineMath> are called{' '}
        <strong>singular points</strong>. To avoid complications, we assume{' '}
        <InlineMath>{`P_0`}</InlineMath> is never zero on the interval{' '}
        <InlineMath>J</InlineMath> under consideration.
      </p>

      <h3>Standard Form</h3>

      <p>
        Dividing by <InlineMath>{`P_0`}</InlineMath>, we can write the equation in
        standard form with leading coefficient 1:
      </p>
      <MathBlock>
        {`y^{(n)} + P_1(x)y^{(n-1)} + \\cdots + P_n(x)y = R(x)`}
      </MathBlock>

      <h3>Operator Notation</h3>

      <p>
        Let <InlineMath>{`\\mathscr{C}(J)`}</InlineMath> denote the space of
        continuous functions on <InlineMath>J</InlineMath>, and{' '}
        <InlineMath>{`\\mathscr{C}^n(J)`}</InlineMath> the subspace of functions
        with <InlineMath>n</InlineMath> continuous derivatives.
      </p>

      <p>
        Define the <strong>linear differential operator</strong>{' '}
        <InlineMath>{`L: \\mathscr{C}^n(J) \\to \\mathscr{C}(J)`}</InlineMath>:
      </p>
      <MathBlock>
        {`L(f) = f^{(n)} + P_1 f^{(n-1)} + \\cdots + P_n f`}
      </MathBlock>

      <p>
        Or using the derivative operator <InlineMath>D</InlineMath>:
      </p>
      <MathBlock>{`L = D^n + P_1 D^{n-1} + \\cdots + P_n`}</MathBlock>

      <p>
        The differential equation becomes simply:
      </p>
      <MathBlock>{`L(y) = R`}</MathBlock>

      <h3>Linearity</h3>

      <p>
        The operator <InlineMath>L</InlineMath> is <strong>linear</strong>:
      </p>
      <ul>
        <li>
          <InlineMath>{`L(y_1 + y_2) = L(y_1) + L(y_2)`}</InlineMath>
        </li>
        <li>
          <InlineMath>{`L(cy) = cL(y)`}</InlineMath> for any constant{' '}
          <InlineMath>c</InlineMath>
        </li>
      </ul>

      <h3>Homogeneous and Nonhomogeneous Equations</h3>

      <Callout type="info">
        <strong>Definitions:</strong>
        <br /><br />
        • The equation <InlineMath>{`L(y) = 0`}</InlineMath> is called{' '}
        <strong>homogeneous</strong>.
        <br />
        • The equation <InlineMath>{`L(y) = R`}</InlineMath> (with{' '}
        <InlineMath>{`R \\neq 0`}</InlineMath>) is called{' '}
        <strong>nonhomogeneous</strong>.
      </Callout>

      <h3>The Solution Space</h3>

      <p>
        The set of solutions of the homogeneous equation <InlineMath>{`L(y) = 0`}</InlineMath>{' '}
        is the <strong>null space</strong> <InlineMath>{`N(L)`}</InlineMath> of the
        operator <InlineMath>L</InlineMath>. This is also called the{' '}
        <strong>solution space</strong> of the equation.
      </p>

      <p>
        Key facts about the solution space:
      </p>
      <ul>
        <li>
          <InlineMath>{`N(L)`}</InlineMath> is a subspace of{' '}
          <InlineMath>{`\\mathscr{C}^n(J)`}</InlineMath>
        </li>
        <li>
          Although <InlineMath>{`\\mathscr{C}^n(J)`}</InlineMath> is
          infinite-dimensional, <InlineMath>{`N(L)`}</InlineMath> is{' '}
          <strong>finite-dimensional</strong>
        </li>
        <li>
          In fact: <InlineMath>{`\\dim N(L) = n`}</InlineMath>
        </li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The solution space of an{' '}
        <InlineMath>n</InlineMath>th-order homogeneous linear equation is an{' '}
        <InlineMath>n</InlineMath>-dimensional vector space. This means any
        solution can be expressed as a linear combination of{' '}
        <InlineMath>n</InlineMath> independent solutions—the "general solution"
        involves <InlineMath>n</InlineMath> arbitrary constants, matching the{' '}
        <InlineMath>n</InlineMath> initial conditions needed to specify a unique
        solution.
      </Callout>
    </LessonLayout>
  );
}
