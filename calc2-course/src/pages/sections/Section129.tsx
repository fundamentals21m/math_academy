import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section129() {
  return (
    <LessonLayout sectionId={129}>
      <h2>Green's Theorem for Multiply Connected Regions</h2>

      <p>
        Green's theorem can be generalized to apply to certain multiply connected
        regions—regions with one or more "holes."
      </p>

      <h3>Statement for Multiply Connected Regions</h3>

      <Callout type="info">
        <strong>Theorem 11.12:</strong> Let{' '}
        <InlineMath>{'C_1, \\ldots, C_n'}</InlineMath> be <InlineMath>n</InlineMath>{' '}
        piecewise smooth Jordan curves having the following properties:
        <ol>
          <li>No two of the curves intersect.</li>
          <li>
            The curves <InlineMath>{'C_2, \\ldots, C_n'}</InlineMath> all lie in the
            interior of <InlineMath>C_1</InlineMath>.
          </li>
          <li>
            Curve <InlineMath>C_i</InlineMath> lies in the exterior of curve{' '}
            <InlineMath>C_j</InlineMath> for each{' '}
            <InlineMath>{'i \\neq j'}</InlineMath>, <InlineMath>{'i > 1'}</InlineMath>,{' '}
            <InlineMath>{'j > 1'}</InlineMath>.
          </li>
        </ol>
        Let <InlineMath>R</InlineMath> denote the region consisting of the union of{' '}
        <InlineMath>C_1</InlineMath> with that portion of the interior of{' '}
        <InlineMath>C_1</InlineMath> that is not inside any of the curves{' '}
        <InlineMath>{'C_2, C_3, \\ldots, C_n'}</InlineMath>. Let{' '}
        <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> be continuously
        differentiable on an open set <InlineMath>S</InlineMath> containing{' '}
        <InlineMath>R</InlineMath>. Then:
        <MathBlock>
          {`\\iint_R \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx \\, dy = \\oint_{C_1} (P \\, dx + Q \\, dy) - \\sum_{k=2}^n \\oint_{C_k} (P \\, dx + Q \\, dy)`}
        </MathBlock>
      </Callout>

      <h3>Proof Idea</h3>

      <p>
        The theorem can be proved by introducing <strong>crosscuts</strong> which
        transform <InlineMath>R</InlineMath> into a union of a finite number of
        simply connected regions bounded by Jordan curves. Green's theorem is applied
        to each part separately, and the results are added together.
      </p>

      <p>
        For example, when <InlineMath>{'n = 2'}</InlineMath> (a region with one hole),
        we can introduce two crosscuts connecting <InlineMath>C_1</InlineMath> and{' '}
        <InlineMath>C_2</InlineMath>. This creates two simply connected regions. When
        we apply Green's theorem to each and add the results, the line integrals along
        the crosscuts cancel (since each crosscut is traversed once in each direction),
        resulting in:
      </p>
      <MathBlock>
        {`\\iint_R \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx \\, dy = \\oint_{C_1} (P \\, dx + Q \\, dy) - \\oint_{C_2} (P \\, dx + Q \\, dy)`}
      </MathBlock>

      <p>
        The minus sign appears because of the direction in which{' '}
        <InlineMath>C_2</InlineMath> is traversed (clockwise when viewed as an inner
        boundary).
      </p>

      <h3>Invariance Under Deformation</h3>

      <Callout type="info">
        <strong>Theorem 11.13 (Invariance Under Deformation):</strong> Let{' '}
        <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> be continuously
        differentiable on an open connected set <InlineMath>S</InlineMath> in the
        plane, and assume that{' '}
        <InlineMath>{'\\partial P/\\partial y = \\partial Q/\\partial x'}</InlineMath>{' '}
        everywhere on <InlineMath>S</InlineMath>. Let <InlineMath>C_1</InlineMath>{' '}
        and <InlineMath>C_2</InlineMath> be two piecewise smooth Jordan curves lying
        in <InlineMath>S</InlineMath> such that:
        <ol>
          <li>
            <InlineMath>C_2</InlineMath> lies in the interior of{' '}
            <InlineMath>C_1</InlineMath>.
          </li>
          <li>
            Those points inside <InlineMath>C_1</InlineMath> which lie outside{' '}
            <InlineMath>C_2</InlineMath> are in <InlineMath>S</InlineMath>.
          </li>
        </ol>
        Then:
        <MathBlock>
          {`\\oint_{C_1} P \\, dx + Q \\, dy = \\oint_{C_2} P \\, dx + Q \\, dy`}
        </MathBlock>
        where both curves are traversed in the same direction.
      </Callout>

      <h3>Proof</h3>

      <p>
        Under the conditions stated, Theorem 11.12 applies when{' '}
        <InlineMath>{'n = 2'}</InlineMath>. The region <InlineMath>R</InlineMath>{' '}
        consists of those points lying between the two curves{' '}
        <InlineMath>C_1</InlineMath> and <InlineMath>C_2</InlineMath>. Since{' '}
        <InlineMath>{'\\partial P/\\partial y = \\partial Q/\\partial x'}</InlineMath>{' '}
        in <InlineMath>S</InlineMath>, the left member of the equation in Theorem
        11.12 is zero, and we obtain the result.
      </p>

      <h3>Interpretation</h3>

      <p>
        Theorem 11.13 says that if{' '}
        <InlineMath>{'\\partial P/\\partial y = \\partial Q/\\partial x'}</InlineMath>{' '}
        in <InlineMath>S</InlineMath>, the value of a line integral along a piecewise
        smooth simple closed curve in <InlineMath>S</InlineMath> is unaltered if the
        path is <strong>deformed</strong> to any other piecewise smooth simple closed
        curve in <InlineMath>S</InlineMath>, provided all intermediate curves remain
        within the set <InlineMath>S</InlineMath> during the deformation.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> On multiply connected domains, Green's theorem
        still applies but with contributions from all boundary components (with
        appropriate signs). The deformation theorem shows that line integrals around
        curves enclosing the same "holes" are equal—the integral only depends on
        which holes are enclosed, not on the precise shape of the curve.
      </Callout>
    </LessonLayout>
  );
}
