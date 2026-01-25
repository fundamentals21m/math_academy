import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section91() {
  return (
    <LessonLayout sectionId={91}>
      <h2>Introduction to Partial Differential Equations</h2>

      <p>
        The theorems of differential calculus developed in Chapter 8 have a wide
        variety of applications. This chapter illustrates their use in examples
        related to partial differential equations, implicit functions, and
        extremum problems.
      </p>

      <h3>What is a Partial Differential Equation?</h3>

      <Callout type="info">
        <strong>Definition:</strong> An equation involving a scalar field{' '}
        <InlineMath>f</InlineMath> and its partial derivatives is called a{' '}
        <strong>partial differential equation</strong> (PDE).
      </Callout>

      <p>
        Two simple examples for a function <InlineMath>f</InlineMath> of two
        variables are:
      </p>

      <p>
        <strong>First-order equation:</strong>
      </p>
      <MathBlock>{`\\frac{\\partial f(x, y)}{\\partial x} = 0`}</MathBlock>

      <p>
        <strong>Second-order equation (Laplace's equation):</strong>
      </p>
      <MathBlock>{`\\frac{\\partial^2 f(x, y)}{\\partial x^2} + \\frac{\\partial^2 f(x, y)}{\\partial y^2} = 0`}</MathBlock>

      <h3>Linear PDEs</h3>

      <p>
        Each of the equations above is a <strong>homogeneous linear partial
        differential equation</strong>. That is, each has the form{' '}
        <InlineMath>L(f) = 0</InlineMath>, where <InlineMath>L</InlineMath> is a
        linear differential operator involving one or more partial derivatives.
      </p>

      <Callout type="info">
        <strong>Property:</strong> For homogeneous linear PDEs like those above,
        the set of solutions forms a <strong>linear space</strong>. That is, if{' '}
        <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are solutions,
        so is <InlineMath>af + bg</InlineMath> for any constants{' '}
        <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
      </Callout>

      <h3>Key Difference from ODEs</h3>

      <p>
        There is an important difference between ordinary and partial linear
        differential equations. Compare the PDE:
      </p>
      <MathBlock>{`\\frac{\\partial f(x, y)}{\\partial x} = 0`}</MathBlock>

      <p>
        with the ODE:
      </p>
      <MathBlock>
        f'(x) = 0
      </MathBlock>

      <p>
        The most general function satisfying the ODE is{' '}
        <InlineMath>f(x) = C</InlineMath>, where <InlineMath>C</InlineMath> is an
        arbitrary constant. The solution space is <strong>one-dimensional</strong>.
      </p>

      <p>
        But the most general function satisfying the PDE is:
      </p>
      <MathBlock>
        f(x, y) = g(y)
      </MathBlock>
      <p>
        where <InlineMath>g</InlineMath> is <em>any</em> function of{' '}
        <InlineMath>y</InlineMath>. Since <InlineMath>g</InlineMath> is arbitrary,
        we can easily obtain infinitely many independent solutions (for example,
        taking <InlineMath>{`g(y) = e^{cy}`}</InlineMath> for all real{' '}
        <InlineMath>c</InlineMath>). The solution space is{' '}
        <strong>infinite-dimensional</strong>.
      </p>

      <h3>Arbitrary Functions in Solutions</h3>

      <p>
        This example is typical of what happens in general. Somewhere in the
        process of solving a first-order PDE, an integration is required to
        remove each partial derivative. At this step, an{' '}
        <strong>arbitrary function</strong> is introduced in the solution. This
        results in an infinite-dimensional solution space.
      </p>

      <h3>Auxiliary Conditions</h3>

      <p>
        In many problems involving PDEs it is necessary to select from the
        wealth of solutions a particular solution satisfying one or more{' '}
        <strong>auxiliary conditions</strong> (such as initial conditions or
        boundary conditions). The nature of these conditions has a profound
        effect on the existence or uniqueness of solutions.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Unlike ODEs where solutions depend on
        arbitrary constants, PDEs have solutions depending on arbitrary
        functions. This makes the solution space infinite-dimensional, and
        auxiliary conditions (initial/boundary values) are needed to select
        particular solutions. The techniques of Chapter 8—gradients, chain
        rule, level sets—provide powerful tools for analyzing PDEs.
      </Callout>
    </LessonLayout>
  );
}
