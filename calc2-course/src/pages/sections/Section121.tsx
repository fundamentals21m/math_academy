import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section121() {
  return (
    <LessonLayout sectionId={121}>
      <h2>Integrability of Bounded Functions with Discontinuities</h2>

      <p>
        In Theorem 11.6 we proved that the double integral of <InlineMath>f</InlineMath>{' '}
        over <InlineMath>Q</InlineMath> exists if <InlineMath>f</InlineMath> is
        continuous everywhere on <InlineMath>Q</InlineMath>. In this section we prove
        that the integral also exists if <InlineMath>f</InlineMath> has discontinuities
        in <InlineMath>Q</InlineMath>, provided the set of discontinuities is not too large.
      </p>

      <h3>Sets of Content Zero</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>A</InlineMath> be a bounded subset
        of the plane. The set <InlineMath>A</InlineMath> is said to have{' '}
        <strong>content zero</strong> if for every <InlineMath>{'\\epsilon > 0'}</InlineMath>{' '}
        there is a finite set of rectangles whose union contains{' '}
        <InlineMath>A</InlineMath> and the sum of whose areas does not exceed{' '}
        <InlineMath>\epsilon</InlineMath>.
      </Callout>

      <p>
        In other words, a bounded plane set of content zero can be enclosed in a union
        of rectangles whose total area is arbitrarily small.
      </p>

      <h3>Properties of Sets of Content Zero</h3>

      <p>
        The following statements about bounded sets of content zero are easy
        consequences of the definition:
      </p>

      <ol>
        <li>Any finite set of points in the plane has content zero.</li>
        <li>
          The union of a finite number of bounded sets of content zero is also of
          content zero.
        </li>
        <li>Every subset of a set of content zero has content zero.</li>
        <li>Every line segment has content zero.</li>
      </ol>

      <h3>The Main Integrability Theorem</h3>

      <Callout type="info">
        <strong>Theorem 11.7:</strong> Let <InlineMath>f</InlineMath> be defined and
        bounded on a rectangle <InlineMath>{'Q = [a, b] \\times [c, d]'}</InlineMath>.
        If the set of discontinuities of <InlineMath>f</InlineMath> in{' '}
        <InlineMath>Q</InlineMath> is a set of content zero, then the double integral{' '}
        <InlineMath>{'\\iint_Q f'}</InlineMath> exists.
      </Callout>

      <h3>Proof Outline</h3>

      <p>
        Let <InlineMath>{'M > 0'}</InlineMath> be such that{' '}
        <InlineMath>{'|f| < M'}</InlineMath> on <InlineMath>Q</InlineMath>. Let{' '}
        <InlineMath>D</InlineMath> denote the set of discontinuities of{' '}
        <InlineMath>f</InlineMath> in <InlineMath>Q</InlineMath>.
      </p>

      <p>
        Given <InlineMath>{'\\delta > 0'}</InlineMath>, let <InlineMath>P</InlineMath>{' '}
        be a partition of <InlineMath>Q</InlineMath> such that the sum of the areas
        of all subrectangles of <InlineMath>P</InlineMath> which contain points of{' '}
        <InlineMath>D</InlineMath> is less than <InlineMath>\delta</InlineMath>.
        (This is possible since <InlineMath>D</InlineMath> has content zero.)
      </p>

      <p>
        On these subrectangles, define step functions <InlineMath>s</InlineMath> and{' '}
        <InlineMath>t</InlineMath> by:
      </p>
      <MathBlock>
        {`s(x) = -M, \\quad t(x) = M`}
      </MathBlock>

      <p>
        On the remaining subrectangles (containing only points of continuity), define{' '}
        <InlineMath>s</InlineMath> and <InlineMath>t</InlineMath> as in the proof of
        Theorem 11.6. Then <InlineMath>{'s \\leq f \\leq t'}</InlineMath> throughout{' '}
        <InlineMath>Q</InlineMath>, and:
      </p>
      <MathBlock>
        {`\\iint_Q t - \\iint_Q s < \\epsilon \\cdot a(Q) + 2M\\delta`}
      </MathBlock>

      <p>
        The first term comes from the subrectangles containing only continuity points;
        the second term comes from those containing points of <InlineMath>D</InlineMath>.
        This gives:
      </p>
      <MathBlock>
        {`0 \\leq \\overline{I}(f) - \\underline{I}(f) \\leq \\epsilon \\cdot a(Q) + 2M\\delta`}
      </MathBlock>

      <p>
        Letting <InlineMath>{'\\epsilon \\to 0'}</InlineMath>, we find{' '}
        <InlineMath>{'0 \\leq \\overline{I}(f) - \\underline{I}(f) \\leq 2M\\delta'}</InlineMath>.
        Since <InlineMath>\delta</InlineMath> is arbitrary, this implies{' '}
        <InlineMath>{'\\overline{I}(f) = \\underline{I}(f)'}</InlineMath>, so{' '}
        <InlineMath>f</InlineMath> is integrable on <InlineMath>Q</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> A bounded function on a rectangle is integrable
        if its set of discontinuities has "content zero"—meaning the discontinuities
        can be covered by finitely many rectangles of arbitrarily small total area.
        This allows functions with jump discontinuities along curves (which have
        content zero) to be integrable.
      </Callout>
    </LessonLayout>
  );
}
