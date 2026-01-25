import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section79() {
  return (
    <LessonLayout sectionId={79}>
      <h2>Limits and Continuity in R^n</h2>

      <p>
        The concepts of limit and continuity extend naturally to scalar and
        vector fields. We formulate the definitions for vector fields; they
        apply equally to scalar fields.
      </p>

      <h3>Limits</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let{' '}
        <InlineMath>{'f: S \\to \\mathbb{R}^m'}</InlineMath> where{' '}
        <InlineMath>{'S \\subseteq \\mathbb{R}^n'}</InlineMath>. We write
        <MathBlock>{`\\lim_{x \\to a} f(x) = b`}</MathBlock>
        to mean
        <MathBlock>{`\\lim_{\\|x-a\\| \\to 0} \\|f(x) - b\\| = 0`}</MathBlock>
        It is not required that <InlineMath>{'f'}</InlineMath> be defined at{' '}
        <InlineMath>{'a'}</InlineMath> itself.
      </Callout>

      <p>
        For points in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>, we write:
      </p>
      <MathBlock>{`\\lim_{(x,y) \\to (a,b)} f(x, y) = L`}</MathBlock>

      <h3>Continuity</h3>

      <Callout type="info">
        <strong>Definition:</strong> A function <InlineMath>{'f'}</InlineMath> is{' '}
        <strong>continuous at</strong> <InlineMath>{'a'}</InlineMath> if{' '}
        <InlineMath>{'f'}</InlineMath> is defined at <InlineMath>{'a'}</InlineMath> and
        <MathBlock>{`\\lim_{x \\to a} f(x) = f(a)`}</MathBlock>
        We say <InlineMath>{'f'}</InlineMath> is <strong>continuous on a set</strong>{' '}
        <InlineMath>{'S'}</InlineMath> if <InlineMath>{'f'}</InlineMath> is continuous
        at each point of <InlineMath>{'S'}</InlineMath>.
      </Callout>

      <h3>Properties of Limits</h3>

      <Callout type="info">
        <strong>Theorem 8.1:</strong> If{' '}
        <InlineMath>{'\\lim_{x \\to a} f(x) = b'}</InlineMath> and{' '}
        <InlineMath>{'\\lim_{x \\to a} g(x) = c'}</InlineMath>, then:
        <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <li><InlineMath>{'\\lim_{x \\to a} [f(x) + g(x)] = b + c'}</InlineMath></li>
          <li><InlineMath>{'\\lim_{x \\to a} \\lambda f(x) = \\lambda b'}</InlineMath> for every scalar <InlineMath>{'\\lambda'}</InlineMath></li>
          <li><InlineMath>{'\\lim_{x \\to a} f(x) \\cdot g(x) = b \\cdot c'}</InlineMath> (dot product)</li>
          <li><InlineMath>{'\\lim_{x \\to a} \\|f(x)\\| = \\|b\\|'}</InlineMath></li>
        </ul>
      </Callout>

      <h3>Continuity of Components</h3>

      <p>
        If a vector field <InlineMath>{'f'}</InlineMath> has values in{' '}
        <InlineMath>{'\\mathbb{R}^m'}</InlineMath>, we write{' '}
        <InlineMath>{'f(x) = (f_1(x), \\ldots, f_m(x))'}</InlineMath>. The
        scalar fields <InlineMath>{'f_1, \\ldots, f_m'}</InlineMath> are called
        the <strong>components</strong> of <InlineMath>{'f'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Component Criterion:</strong> A vector field{' '}
        <InlineMath>{'f'}</InlineMath> is continuous at a point if and only if
        each component <InlineMath>{'f_k'}</InlineMath> is continuous at that point.
      </Callout>

      <h3>Examples of Continuous Functions</h3>

      <p>
        <strong>Linear transformations:</strong> Every linear transformation{' '}
        <InlineMath>{'f: \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath> is
        continuous everywhere. This follows from{' '}
        <InlineMath>{'f(a + h) = f(a) + f(h)'}</InlineMath> and the fact that{' '}
        <InlineMath>{'f(h) \\to 0'}</InlineMath> as <InlineMath>{'h \\to 0'}</InlineMath>.
      </p>

      <p>
        <strong>Polynomials:</strong> Any polynomial in <InlineMath>{'n'}</InlineMath>{' '}
        variables is continuous everywhere in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>.
      </p>

      <p>
        <strong>Rational functions:</strong> A rational function{' '}
        <InlineMath>{'f(x) = P(x)/Q(x)'}</InlineMath> is continuous at each point
        where <InlineMath>{'Q(x) \\neq 0'}</InlineMath>.
      </p>

      <h3>Composition of Continuous Functions</h3>

      <Callout type="info">
        <strong>Theorem 8.2:</strong> Let <InlineMath>{'f'}</InlineMath> and{' '}
        <InlineMath>{'g'}</InlineMath> be functions such that{' '}
        <InlineMath>{'f \\circ g'}</InlineMath> is defined at <InlineMath>{'a'}</InlineMath>.
        If <InlineMath>{'g'}</InlineMath> is continuous at <InlineMath>{'a'}</InlineMath>{' '}
        and <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'g(a)'}</InlineMath>,
        then <InlineMath>{'f \\circ g'}</InlineMath> is continuous at{' '}
        <InlineMath>{'a'}</InlineMath>.
      </Callout>

      <Callout type="warning">
        <strong>Warning:</strong> A function of two variables may be continuous
        in each variable separately yet discontinuous as a function of both
        variables together. For example,{' '}
        <InlineMath>{'f(x,y) = xy/(x^2+y^2)'}</InlineMath> for{' '}
        <InlineMath>{'(x,y) \\neq (0,0)'}</InlineMath> and{' '}
        <InlineMath>{'f(0,0) = 0'}</InlineMath> is continuous in <InlineMath>{'x'}</InlineMath>{' '}
        and in <InlineMath>{'y'}</InlineMath> separately at the origin, but not
        continuous as a function of both variables.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Multivariable limits are more subtle than
        one-dimensional limits. For a limit to exist, the function must approach
        the same value along <em>every</em> path to the point—not just along
        straight lines.
      </Callout>
    </LessonLayout>
  );
}
