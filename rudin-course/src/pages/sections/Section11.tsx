import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-semibold mb-4">Perfect Sets</h2>

      <p className="mb-4">
        Perfect sets are closed sets with no isolated points - every point is a limit point of the
        set. This section introduces the concept and presents the famous Cantor set, which provides
        a remarkable example of an uncountable perfect set that contains no segment. The Cantor set
        demonstrates that uncountable sets can have measure zero, a foundational concept in measure
        theory.
      </p>

      <Callout type="info">
        <p>
          The Cantor set, constructed by repeatedly removing middle thirds from an interval, is one
          of the most important constructions in analysis. It shows that perfect sets in{' '}
          <InlineMath>{'R^1'}</InlineMath> can be uncountable even without containing any interval,
          challenging our intuition about the structure of the real line.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Perfect Sets</h3>

      <Definition title="Perfect Set (Recall Definition 2.18(h))">
        <p>
          A set <InlineMath>{'E'}</InlineMath> is <em>perfect</em> if <InlineMath>{'E'}</InlineMath>{' '}
          is closed and if every point of <InlineMath>{'E'}</InlineMath> is a limit point of{' '}
          <InlineMath>{'E'}</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, <InlineMath>{'E'}</InlineMath> is perfect if{' '}
          <InlineMath>{"E = E'"}</InlineMath> (where <InlineMath>{"E'"}</InlineMath> is the set of
          all limit points of <InlineMath>{'E'}</InlineMath>), or if{' '}
          <InlineMath>{'E = \\bar{E}'}</InlineMath> and <InlineMath>{'E'}</InlineMath> has no
          isolated points.
        </p>
      </Definition>

      <Example title="Examples of Perfect Sets">
        <p>Common examples of perfect sets include:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The closed interval <InlineMath>{'[a, b]'}</InlineMath> is perfect: it is closed, and
            every point in it is a limit point.
          </li>
          <li>
            The closed disk <InlineMath>{'\\{z \\in \\mathbb{C} : |z| \\leq 1\\}'}</InlineMath> is
            perfect in <InlineMath>{'R^2'}</InlineMath>.
          </li>
          <li>
            The entire space <InlineMath>{'R^k'}</InlineMath> is perfect.
          </li>
        </ul>
        <p className="mt-2">
          A finite set is never perfect (it has no limit points). The set{' '}
          <InlineMath>{'\\mathbb{Z}'}</InlineMath> of integers is closed but not perfect (every
          integer is an isolated point).
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Perfect Sets are Uncountable</h3>

      <Theorem
        title="2.43 Nonempty Perfect Sets in R^k are Uncountable"
        proof={
          <>
            <p>
              Since <InlineMath>{'P'}</InlineMath> has limit points,{' '}
              <InlineMath>{'P'}</InlineMath> must be infinite. Suppose{' '}
              <InlineMath>{'P'}</InlineMath> is countable, and denote the points of{' '}
              <InlineMath>{'P'}</InlineMath> by{' '}
              <InlineMath>{'\\mathbf{x}_1, \\mathbf{x}_2, \\mathbf{x}_3, \\ldots'}</InlineMath>. We
              shall construct a sequence <InlineMath>{'\\{V_n\\}'}</InlineMath> of neighborhoods,
              as follows.
            </p>
            <p className="mt-2">
              Let <InlineMath>{'V_1'}</InlineMath> be any neighborhood of{' '}
              <InlineMath>{'\\mathbf{x}_1'}</InlineMath>. If <InlineMath>{'V_1'}</InlineMath>{' '}
              consists of all <InlineMath>{'\\mathbf{y} \\in R^k'}</InlineMath> such that{' '}
              <InlineMath>{'|\\mathbf{y} - \\mathbf{x}_1| < r'}</InlineMath>, the closure{' '}
              <InlineMath>{'\\bar{V}_1'}</InlineMath> of <InlineMath>{'V_1'}</InlineMath> is the set
              of all <InlineMath>{'\\mathbf{y} \\in R^k'}</InlineMath> such that{' '}
              <InlineMath>{'|\\mathbf{y} - \\mathbf{x}_1| \\leq r'}</InlineMath>.
            </p>
            <p className="mt-2">
              Suppose <InlineMath>{'V_n'}</InlineMath> has been constructed, so that{' '}
              <InlineMath>{'V_n \\cap P'}</InlineMath> is not empty. Since every point of{' '}
              <InlineMath>{'P'}</InlineMath> is a limit point of <InlineMath>{'P'}</InlineMath>,
              there is a neighborhood <InlineMath>{'V_{n+1}'}</InlineMath> such that (i){' '}
              <InlineMath>{'\\bar{V}_{n+1} \\subset V_n'}</InlineMath>, (ii){' '}
              <InlineMath>{'\\mathbf{x}_n \\notin \\bar{V}_{n+1}'}</InlineMath>, (iii){' '}
              <InlineMath>{'V_{n+1} \\cap P'}</InlineMath> is not empty. By (iii),{' '}
              <InlineMath>{'V_{n+1}'}</InlineMath> satisfies our induction hypothesis, and the
              construction can proceed.
            </p>
            <p className="mt-2">
              Put <InlineMath>{'K_n = \\bar{V}_n \\cap P'}</InlineMath>. Since{' '}
              <InlineMath>{'\\bar{V}_n'}</InlineMath> is closed and bounded,{' '}
              <InlineMath>{'\\bar{V}_n'}</InlineMath> is compact. Since{' '}
              <InlineMath>{'\\mathbf{x}_n \\notin K_{n+1}'}</InlineMath>, no point of{' '}
              <InlineMath>{'P'}</InlineMath> lies in{' '}
              <InlineMath>{'\\bigcap_1^{\\infty} K_n'}</InlineMath>. Since{' '}
              <InlineMath>{'K_n \\subset P'}</InlineMath>, this implies that{' '}
              <InlineMath>{'\\bigcap_1^{\\infty} K_n'}</InlineMath> is empty. But each{' '}
              <InlineMath>{'K_n'}</InlineMath> is nonempty, by (iii), and{' '}
              <InlineMath>{'K_n \\supset K_{n+1}'}</InlineMath>, by (i); this contradicts the
              Corollary to Theorem 2.36.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'P'}</InlineMath> be a nonempty perfect set in{' '}
          <InlineMath>{'R^k'}</InlineMath>. Then <InlineMath>{'P'}</InlineMath> is uncountable.
        </p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> Every interval <InlineMath>{'[a, b]'}</InlineMath> (
        <InlineMath>{'a < b'}</InlineMath>) is uncountable. In particular, the set of all real
        numbers is uncountable.
      </p>

      <p className="my-4">
        This provides a second proof that <InlineMath>{'\\mathbb{R}'}</InlineMath> is uncountable,
        different from the diagonal argument we saw in Theorem 2.14.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">The Cantor Set</h3>

      <p className="my-4">
        <strong>2.44 The Cantor set</strong> The set which we are now going to construct shows that
        there exist perfect sets in <InlineMath>{'R^1'}</InlineMath> which contain no segment.
      </p>

      <Definition title="Construction of the Cantor Set">
        <p>
          Let <InlineMath>{'E_0'}</InlineMath> be the interval{' '}
          <InlineMath>{'[0, 1]'}</InlineMath>. Remove the segment{' '}
          <InlineMath>{'(\\frac{1}{3}, \\frac{2}{3})'}</InlineMath>, and let{' '}
          <InlineMath>{'E_1'}</InlineMath> be the union of the intervals
        </p>
        <MathBlock>
          {'[0, \\frac{1}{3}] \\quad \\text{and} \\quad [\\frac{2}{3}, 1].'}
        </MathBlock>
        <p className="mt-2">
          Remove the middle thirds of these intervals, and let <InlineMath>{'E_2'}</InlineMath> be
          the union of the intervals
        </p>
        <MathBlock>
          {'[0, \\frac{1}{9}], \\quad [\\frac{2}{9}, \\frac{3}{9}], \\quad [\\frac{6}{9}, \\frac{7}{9}], \\quad [\\frac{8}{9}, 1].'}
        </MathBlock>
        <p className="mt-2">
          Continuing in this way, we obtain a sequence of compact sets{' '}
          <InlineMath>{'E_n'}</InlineMath>, such that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            (a) <InlineMath>{'E_1 \\supset E_2 \\supset E_3 \\supset \\cdots'}</InlineMath>;
          </li>
          <li>
            (b) <InlineMath>{'E_n'}</InlineMath> is the union of{' '}
            <InlineMath>{'2^n'}</InlineMath> intervals, each of length{' '}
            <InlineMath>{'3^{-n}'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-2">The set</p>
        <MathBlock>{'P = \\bigcap_{n=1}^{\\infty} E_n'}</MathBlock>
        <p className="mt-2">
          is called the <em>Cantor set</em>. <InlineMath>{'P'}</InlineMath> is clearly compact, and
          Theorem 2.36 shows that <InlineMath>{'P'}</InlineMath> is not empty.
        </p>
      </Definition>

      <Theorem
        title="The Cantor Set Contains No Segment"
        proof={
          <>
            <p>
              No segment of the form
            </p>
            <MathBlock>
              {'\\left( \\frac{3k+1}{3^m}, \\frac{3k+2}{3^m} \\right),'}
            </MathBlock>
            <p className="mt-2">
              where <InlineMath>{'k'}</InlineMath> and <InlineMath>{'m'}</InlineMath> are positive
              integers, has a point in common with <InlineMath>{'P'}</InlineMath>. Since every
              segment <InlineMath>{'(\\alpha, \\beta)'}</InlineMath> contains a segment of the form
              (24), if
            </p>
            <MathBlock>{'3^{-m} < \\frac{\\beta - \\alpha}{6},'}</MathBlock>
            <p className="mt-2">
              <InlineMath>{'P'}</InlineMath> contains no segment.
            </p>
          </>
        }
      >
        <p>The Cantor set contains no segment.</p>
      </Theorem>

      <Theorem
        title="The Cantor Set is Perfect"
        proof={
          <>
            <p>
              To show that <InlineMath>{'P'}</InlineMath> is perfect, it is enough to show that{' '}
              <InlineMath>{'P'}</InlineMath> contains no isolated point. Let{' '}
              <InlineMath>{'x \\in P'}</InlineMath>, and let <InlineMath>{'S'}</InlineMath> be any
              segment containing <InlineMath>{'x'}</InlineMath>. Let{' '}
              <InlineMath>{'I_n'}</InlineMath> be that interval of{' '}
              <InlineMath>{'E_n'}</InlineMath> which contains <InlineMath>{'x'}</InlineMath>.
              Choose <InlineMath>{'n'}</InlineMath> large enough, so that{' '}
              <InlineMath>{'I_n \\subset S'}</InlineMath>. Let{' '}
              <InlineMath>{'x_n'}</InlineMath> be an endpoint of <InlineMath>{'I_n'}</InlineMath>,
              such that <InlineMath>{'x_n \\neq x'}</InlineMath>.
            </p>
            <p className="mt-2">
              It follows from the construction of <InlineMath>{'P'}</InlineMath> that{' '}
              <InlineMath>{'x_n \\in P'}</InlineMath>. Hence <InlineMath>{'x'}</InlineMath> is a
              limit point of <InlineMath>{'P'}</InlineMath>, and{' '}
              <InlineMath>{'P'}</InlineMath> is perfect.
            </p>
          </>
        }
      >
        <p>The Cantor set is perfect.</p>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Key Properties of the Cantor Set:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{'P'}</InlineMath> is compact (closed and bounded in{' '}
            <InlineMath>{'R^1'}</InlineMath>)
          </li>
          <li>
            <InlineMath>{'P'}</InlineMath> is perfect (every point is a limit point)
          </li>
          <li>
            <InlineMath>{'P'}</InlineMath> contains no segment (intervals are removed)
          </li>
          <li>
            <InlineMath>{'P'}</InlineMath> is uncountable (by Theorem 2.43)
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Measure Zero and the Cantor Set</h3>

      <p className="my-4">
        One of the most interesting properties of the Cantor set is that it provides us with an
        example of an uncountable set of <em>measure zero</em> (the concept of measure will be
        discussed in Chap. 11).
      </p>

      <Example title="The Cantor Set Has Measure Zero">
        <p>
          The total length of the intervals comprising <InlineMath>{'E_n'}</InlineMath> is
        </p>
        <MathBlock>{'2^n \\cdot 3^{-n} = \\left( \\frac{2}{3} \\right)^n.'}</MathBlock>
        <p className="mt-2">
          As <InlineMath>{'n \\to \\infty'}</InlineMath>, this tends to 0. Therefore, the Cantor
          set <InlineMath>{'P'}</InlineMath> has measure zero, even though it is uncountable.
        </p>
        <p className="mt-2">
          Alternatively, the total length removed is
        </p>
        <MathBlock>
          {'\\frac{1}{3} + \\frac{2}{9} + \\frac{4}{27} + \\cdots = \\frac{1}{3} \\cdot \\frac{1}{1 - 2/3} = 1,'}
        </MathBlock>
        <p className="mt-2">
          which means we have removed "all" of <InlineMath>{'[0, 1]'}</InlineMath> in terms of
          length, yet the Cantor set remains uncountable.
        </p>
      </Example>

      <Example title="Ternary Representation of the Cantor Set">
        <p>
          The Cantor set can be characterized in terms of ternary (base 3) expansions. A number{' '}
          <InlineMath>{'x \\in [0, 1]'}</InlineMath> belongs to the Cantor set{' '}
          <InlineMath>{'P'}</InlineMath> if and only if <InlineMath>{'x'}</InlineMath> has a
          ternary expansion using only the digits 0 and 2 (no 1s).
        </p>
        <p className="mt-2">For example:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{'0 = 0.000\\ldots_3 \\in P'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'1 = 0.222\\ldots_3 \\in P'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'1/3 = 0.0222\\ldots_3 = 0.1_3 \\in P'}</InlineMath> (on the boundary)
          </li>
          <li>
            <InlineMath>{'1/4 = 0.020202\\ldots_3 \\in P'}</InlineMath>
          </li>
          <li>
            <InlineMath>{'1/2 = 0.111\\ldots_3 \\notin P'}</InlineMath> (has digit 1)
          </li>
        </ul>
        <p className="mt-2">
          This characterization provides another proof that <InlineMath>{'P'}</InlineMath> is
          uncountable: there is a bijection between <InlineMath>{'P'}</InlineMath> and the set of
          all binary sequences (replace each 2 with 1), which is uncountable by Theorem 2.14.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">
        The key results of this section on perfect sets are:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Perfect set:</strong> Closed with every point a limit point (no isolated points)
        </li>
        <li>
          <strong>Uncountability:</strong> Every nonempty perfect set in{' '}
          <InlineMath>{'R^k'}</InlineMath> is uncountable
        </li>
        <li>
          <strong>Cantor set:</strong> A perfect set in <InlineMath>{'[0, 1]'}</InlineMath> that
          contains no segment
        </li>
        <li>
          The Cantor set is uncountable yet has measure zero
        </li>
        <li>
          The Cantor set demonstrates that "size" in terms of cardinality and "size" in terms of
          measure are very different concepts
        </li>
      </ul>
    </LessonLayout>
  );
}
