import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section78() {
  return (
    <LessonLayout sectionId={78}>
      <h2>Open Balls and Open Sets</h2>

      <p>
        To extend derivative theory from <InlineMath>{'\\mathbb{R}'}</InlineMath>{' '}
        to <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, we need to generalize the
        concept of an open interval. The appropriate generalization is the{' '}
        <strong>open ball</strong>.
      </p>

      <h3>Open Balls</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let{' '}
        <InlineMath>{'a \\in \\mathbb{R}^n'}</InlineMath> and{' '}
        <InlineMath>{'r > 0'}</InlineMath>. The <strong>open n-ball</strong> of
        radius <InlineMath>{'r'}</InlineMath> and center <InlineMath>{'a'}</InlineMath>{' '}
        is:
        <MathBlock>{`B(a; r) = \\{x \\in \\mathbb{R}^n : \\|x - a\\| < r\\}`}</MathBlock>
        This consists of all points whose distance from{' '}
        <InlineMath>{'a'}</InlineMath> is less than <InlineMath>{'r'}</InlineMath>.
      </Callout>

      <p>
        The geometric interpretation depends on the dimension:
      </p>
      <ul>
        <li>
          In <InlineMath>{'\\mathbb{R}^1'}</InlineMath>: an open interval{' '}
          <InlineMath>{'(a - r, a + r)'}</InlineMath>
        </li>
        <li>
          In <InlineMath>{'\\mathbb{R}^2'}</InlineMath>: a circular disk
        </li>
        <li>
          In <InlineMath>{'\\mathbb{R}^3'}</InlineMath>: a spherical solid
        </li>
      </ul>

      <h3>Interior Points and Open Sets</h3>

      <Callout type="info">
        <strong>Definition (Interior Point):</strong> Let{' '}
        <InlineMath>{'S \\subseteq \\mathbb{R}^n'}</InlineMath> and{' '}
        <InlineMath>{'a \\in S'}</InlineMath>. Then <InlineMath>{'a'}</InlineMath> is an{' '}
        <strong>interior point</strong> of <InlineMath>{'S'}</InlineMath> if there
        exists an open n-ball <InlineMath>{'B(a; r)'}</InlineMath> such that{' '}
        <InlineMath>{'B(a; r) \\subseteq S'}</InlineMath>.
      </Callout>

      <p>
        The set of all interior points of <InlineMath>{'S'}</InlineMath> is called
        the <strong>interior</strong> of <InlineMath>{'S'}</InlineMath>, denoted{' '}
        <InlineMath>{'\\text{int } S'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition (Open Set):</strong> A set{' '}
        <InlineMath>{'S'}</InlineMath> in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>{' '}
        is <strong>open</strong> if all its points are interior points. That is,{' '}
        <InlineMath>{'S'}</InlineMath> is open if and only if{' '}
        <InlineMath>{'S = \\text{int } S'}</InlineMath>.
      </Callout>

      <h3>Examples</h3>

      <p>
        <strong>Open intervals:</strong> In{' '}
        <InlineMath>{'\\mathbb{R}^1'}</InlineMath>, every open interval is an
        open set. The union of open intervals is also open. A closed interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath> is not open because neither endpoint
        can be enclosed in a ball lying within the interval.
      </p>

      <p>
        <strong>Cartesian products:</strong> If{' '}
        <InlineMath>{'A_1'}</InlineMath> and <InlineMath>{'A_2'}</InlineMath> are open
        subsets of <InlineMath>{'\\mathbb{R}^1'}</InlineMath>, then{' '}
        <InlineMath>{'A_1 \\times A_2'}</InlineMath> is an open subset of{' '}
        <InlineMath>{'\\mathbb{R}^2'}</InlineMath>. For example, the product of
        two open intervals is an open rectangle.
      </p>

      <h3>Exterior and Boundary</h3>

      <Callout type="info">
        <strong>Definitions:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <li>
            A point <InlineMath>{'x'}</InlineMath> is <strong>exterior</strong> to{' '}
            <InlineMath>{'S'}</InlineMath> if there exists <InlineMath>{'B(x)'}</InlineMath>{' '}
            containing no points of <InlineMath>{'S'}</InlineMath>.
          </li>
          <li>
            The <strong>exterior</strong> of <InlineMath>{'S'}</InlineMath>, denoted{' '}
            <InlineMath>{'\\text{ext } S'}</InlineMath>, is the set of all exterior points.
          </li>
          <li>
            A point that is neither interior nor exterior is a{' '}
            <strong>boundary point</strong>.
          </li>
          <li>
            The <strong>boundary</strong> of <InlineMath>{'S'}</InlineMath>, denoted{' '}
            <InlineMath>{'\\partial S'}</InlineMath>, is the set of all boundary points.
          </li>
        </ul>
      </Callout>

      <p>
        For the open disk <InlineMath>{'B(0; 1) \\subset \\mathbb{R}^2'}</InlineMath>:
        the exterior is all <InlineMath>{'x'}</InlineMath> with{' '}
        <InlineMath>{'\\|x\\| > 1'}</InlineMath>, and the boundary is all{' '}
        <InlineMath>{'x'}</InlineMath> with <InlineMath>{'\\|x\\| = 1'}</InlineMath>{' '}
        (the unit circle).
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> We always have{' '}
        <InlineMath>{'\\mathbb{R}^n = (\\text{int } S) \\cup (\\text{ext } S) \\cup \\partial S'}</InlineMath>,
        a union of disjoint sets. The boundary <InlineMath>{'\\partial S'}</InlineMath>{' '}
        is always closed. An open set in{' '}
        <InlineMath>{'\\mathbb{R}^1'}</InlineMath> is no longer open when viewed
        as a subset of <InlineMath>{'\\mathbb{R}^2'}</InlineMath> (it cannot
        contain a 2-ball).
      </Callout>
    </LessonLayout>
  );
}
