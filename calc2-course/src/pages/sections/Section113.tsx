import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section113() {
  return (
    <LessonLayout sectionId={113}>
      <h2>Introduction to Multiple Integrals</h2>

      <p>
        Volume I discussed integrals <InlineMath>{'\\int_a^b f(x) \\, dx'}</InlineMath>, first
        for functions defined and bounded on finite intervals, and later for unbounded
        functions and infinite intervals. Chapter 10 of Volume II generalized the concept
        by introducing line integrals. This chapter extends the concept in yet another
        direction.
      </p>

      <h3>From One to Two Dimensions</h3>

      <p>
        The one-dimensional interval <InlineMath>{'[a, b]'}</InlineMath> is replaced by a
        two-dimensional set <InlineMath>{'Q'}</InlineMath>, called the{' '}
        <strong>region of integration</strong>. First we consider rectangular regions;
        later we consider more general regions with curvilinear boundaries.
      </p>

      <p>
        The integrand is a scalar field <InlineMath>{'f'}</InlineMath> defined and bounded
        on <InlineMath>{'Q'}</InlineMath>. The resulting integral is called a{' '}
        <strong>double integral</strong> and is denoted by the symbol:
      </p>
      <MathBlock>{`\\iint_Q f \\quad \\text{or} \\quad \\iint_Q f(x, y) \\, dx \\, dy`}</MathBlock>

      <p>
        As in the one-dimensional case, the symbols <InlineMath>{'dx'}</InlineMath> and{' '}
        <InlineMath>{'dy'}</InlineMath> play no role in the definition of the double integral;
        however, they are useful in computations and transformations of integrals.
      </p>

      <h3>The Program</h3>

      <p>
        The program in this chapter consists of several stages:
      </p>

      <ol>
        <li>
          <strong>Definition:</strong> The integral is defined first for step functions
          and then for more general functions. The approach is analogous to the
          one-dimensional case treated in Volume I.
        </li>
        <li>
          <strong>Computation:</strong> Most double integrals occurring in practice can
          be computed by repeated one-dimensional integration (iterated integrals).
        </li>
        <li>
          <strong>Connection to line integrals:</strong> We shall find a connection
          between double integrals and line integrals (Green's theorem).
        </li>
        <li>
          <strong>Applications:</strong> Area, volume, mass, center of mass, and
          related concepts.
        </li>
        <li>
          <strong>Extension to n-space:</strong> Finally, we indicate how the concepts
          can be extended to higher dimensions.
        </li>
      </ol>

      <h3>Rectangular Regions</h3>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>rectangle</strong>{' '}
        <InlineMath>{'Q'}</InlineMath> in the plane is the Cartesian product of two closed
        intervals:
        <MathBlock>{`Q = [a, b] \\times [c, d] = \\{(x, y) \\mid x \\in [a, b] \\text{ and } y \\in [c, d]\\}`}</MathBlock>
      </Callout>

      <p>
        The rectangle <InlineMath>{'Q'}</InlineMath> consists of all points{' '}
        <InlineMath>{'(x, y)'}</InlineMath> such that{' '}
        <InlineMath>{'a \\leq x \\leq b'}</InlineMath> and{' '}
        <InlineMath>{'c \\leq y \\leq d'}</InlineMath>. The sides of the rectangle
        are parallel to the coordinate axes.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The double integral extends one-dimensional
        integration to two dimensions. The definition follows the same pattern: first
        for step functions (where the integral is a sum), then for general bounded
        functions (using approximation by step functions). The key computational tool
        is iterated integration, which reduces double integrals to successive
        one-dimensional integrals.
      </Callout>
    </LessonLayout>
  );
}
