import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Limiting Values of Functions</h2>

      <p className="mb-4">
        Before we talk about limits of sequences of functions, we should first discuss a similar,
        but distinct, notion: that of <strong>limiting values of functions</strong>. This concept
        extends our understanding of limits to more general settings.
      </p>

      <Definition title="Limiting Value of a Function">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath> be
          metric spaces, let <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>,
          and let <InlineMath>{`f : X \\to Y`}</InlineMath> be a function.
        </p>
        <p className="mt-2">
          If <InlineMath>{`x_0 \\in X`}</InlineMath> is an <strong>adherent point</strong> of{' '}
          <InlineMath>E</InlineMath>, and <InlineMath>{`L \\in Y`}</InlineMath>, we say that{' '}
          <InlineMath>{`f(x)`}</InlineMath> <strong>converges to</strong> <InlineMath>L</InlineMath>{' '}
          in <InlineMath>Y</InlineMath> as <InlineMath>x</InlineMath> converges to{' '}
          <InlineMath>x_0</InlineMath> in <InlineMath>E</InlineMath>, written:
        </p>
        <MathBlock>{`\\lim_{x \\to x_0; x \\in E} f(x) = L`}</MathBlock>
        <p className="mt-2">
          if for every <InlineMath>{`\\varepsilon > 0`}</InlineMath> there exists a{' '}
          <InlineMath>{`\\delta > 0`}</InlineMath> such that{' '}
          <InlineMath>{`d_Y(f(x), L) < \\varepsilon`}</InlineMath> for all{' '}
          <InlineMath>{`x \\in E`}</InlineMath> such that{' '}
          <InlineMath>{`d_X(x, x_0) < \\delta`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Connection to Continuity">
        <p>
          Comparing this with the definition of continuity, we see that <InlineMath>f</InlineMath>{' '}
          is continuous at <InlineMath>x_0</InlineMath> if and only if:
        </p>
        <MathBlock>{`\\lim_{x \\to x_0; x \\in X} f(x) = f(x_0)`}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>f</InlineMath> is continuous on <InlineMath>X</InlineMath> iff this
          equality holds for all <InlineMath>{`x_0 \\in X`}</InlineMath>.
        </p>
      </Callout>

      <Example title="Limit of a Polynomial">
        <p>
          If <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> is the function{' '}
          <InlineMath>{`f(x) = x^2 - 4`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\lim_{x \\to 1} f(x) = f(1) = 1 - 4 = -3`}</MathBlock>
        <p className="mt-2">since <InlineMath>f</InlineMath> is continuous.</p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Sequence Characterization
      </h3>

      <Definition title="Equivalent Conditions for Limiting Values">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath> be
          metric spaces, let <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>,
          and let <InlineMath>{`f : X \\to Y`}</InlineMath> be a function. Let{' '}
          <InlineMath>{`x_0 \\in X`}</InlineMath> be an adherent point of{' '}
          <InlineMath>E</InlineMath> and <InlineMath>{`L \\in Y`}</InlineMath>. The following
          are equivalent:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>{`\\lim_{x \\to x_0; x \\in E} f(x) = L`}</InlineMath>
          </li>
          <li>
            For every sequence <InlineMath>{`(x^{(n)})_{n=1}^{\\infty}`}</InlineMath> in{' '}
            <InlineMath>E</InlineMath> which converges to <InlineMath>x_0</InlineMath>, the
            sequence <InlineMath>{`(f(x^{(n)}))_{n=1}^{\\infty}`}</InlineMath> converges to{' '}
            <InlineMath>L</InlineMath>.
          </li>
          <li>
            For every open set <InlineMath>{`V \\subset Y`}</InlineMath> containing{' '}
            <InlineMath>L</InlineMath>, there exists an open set{' '}
            <InlineMath>{`U \\subset X`}</InlineMath> containing <InlineMath>x_0</InlineMath>{' '}
            such that <InlineMath>{`f(U \\cap E) \\subseteq V`}</InlineMath>.
          </li>
          <li>
            If one defines <InlineMath>{`g : E \\cup \\{x_0\\} \\to Y`}</InlineMath> by{' '}
            <InlineMath>{`g(x_0) := L`}</InlineMath> and{' '}
            <InlineMath>{`g(x) := f(x)`}</InlineMath> for{' '}
            <InlineMath>{`x \\in E \\setminus \\{x_0\\}`}</InlineMath>, then{' '}
            <InlineMath>g</InlineMath> is continuous at <InlineMath>x_0</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Callout type="success" title="Uniqueness of Limits">
        <p>
          A function <InlineMath>{`f(x)`}</InlineMath> can converge to at most one limit{' '}
          <InlineMath>L</InlineMath> as <InlineMath>x</InlineMath> converges to{' '}
          <InlineMath>x_0</InlineMath>. In other words, if the limit exists at all, then it can
          only take one value.
        </p>
      </Callout>

      <Callout type="warning" title="Adherent Point Requirement">
        <p>
          The requirement that <InlineMath>x_0</InlineMath> be an adherent point of{' '}
          <InlineMath>E</InlineMath> is necessary for the concept of limiting value to be useful.
          Otherwise <InlineMath>x_0</InlineMath> will lie in the exterior of{' '}
          <InlineMath>E</InlineMath>, and the notion that <InlineMath>{`f(x)`}</InlineMath>{' '}
          converges to <InlineMath>L</InlineMath> becomes vacuous (for{' '}
          <InlineMath>{`\\delta`}</InlineMath> sufficiently small, there are no points{' '}
          <InlineMath>{`x \\in E`}</InlineMath> with{' '}
          <InlineMath>{`d(x, x_0) < \\delta`}</InlineMath>).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Composition of Limits
      </h3>

      <Definition title="Limits and Composition">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath>, <InlineMath>{`(Y, d_Y)`}</InlineMath>,{' '}
          <InlineMath>{`(Z, d_Z)`}</InlineMath> be metric spaces, and let{' '}
          <InlineMath>{`x_0 \\in X`}</InlineMath>, <InlineMath>{`y_0 \\in Y`}</InlineMath>,{' '}
          <InlineMath>{`z_0 \\in Z`}</InlineMath>. Let <InlineMath>{`f : X \\to Y`}</InlineMath>{' '}
          and <InlineMath>{`g : Y \\to Z`}</InlineMath> be functions, and let{' '}
          <InlineMath>E</InlineMath> be a set.
        </p>
        <p className="mt-2">
          If <InlineMath>{`\\lim_{x \\to x_0; x \\in E} f(x) = y_0`}</InlineMath> and{' '}
          <InlineMath>{`\\lim_{y \\to y_0; y \\in f(E)} g(y) = z_0`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\lim_{x \\to x_0; x \\in E} (g \\circ f)(x) = z_0`}</MathBlock>
      </Definition>
    </LessonLayout>
  );
}
