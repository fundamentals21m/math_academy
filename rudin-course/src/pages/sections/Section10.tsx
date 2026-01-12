import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-semibold mb-4">Compact Sets</h2>

      <p className="mb-4">
        Compactness is one of the most important concepts in analysis. A compact set has the
        remarkable property that any collection of open sets covering it has a finite subcollection
        that still covers it. This seemingly simple property has far-reaching consequences,
        including the fact that continuous functions on compact sets are bounded and attain their
        bounds.
      </p>

      <Callout type="info">
        <p>
          The Heine-Borel theorem provides the key characterization in Euclidean spaces: a subset
          of <InlineMath>{'R^k'}</InlineMath> is compact if and only if it is closed and bounded.
          This elegant equivalence simplifies many arguments in real analysis.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Open Covers and Compactness</h3>

      <Definition title="2.31 Open Cover">
        <p>
          By an <em>open cover</em> of a set <InlineMath>{'E'}</InlineMath> in a metric space{' '}
          <InlineMath>{'X'}</InlineMath> we mean a collection{' '}
          <InlineMath>{'\\{G_\\alpha\\}'}</InlineMath> of open subsets of{' '}
          <InlineMath>{'X'}</InlineMath> such that{' '}
          <InlineMath>{'E \\subset \\bigcup_\\alpha G_\\alpha'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="2.32 Compact Set">
        <p>
          A subset <InlineMath>{'K'}</InlineMath> of a metric space{' '}
          <InlineMath>{'X'}</InlineMath> is said to be <em>compact</em> if every open cover of{' '}
          <InlineMath>{'K'}</InlineMath> contains a <em>finite</em> subcover.
        </p>
        <p className="mt-2">
          More explicitly, the requirement is that if{' '}
          <InlineMath>{'\\{G_\\alpha\\}'}</InlineMath> is an open cover of{' '}
          <InlineMath>{'K'}</InlineMath>, then there are finitely many indices{' '}
          <InlineMath>{'\\alpha_1, \\ldots, \\alpha_n'}</InlineMath> such that
        </p>
        <MathBlock>{'K \\subset G_{\\alpha_1} \\cup \\cdots \\cup G_{\\alpha_n}.'}</MathBlock>
      </Definition>

      <p className="my-4">
        The notion of compactness is of great importance in analysis, especially in connection with
        continuity (Chap. 4).
      </p>

      <p className="my-4">
        It is clear that every finite set is compact. The existence of a large class of infinite
        compact sets in <InlineMath>{'R^k'}</InlineMath> will follow from Theorem 2.41.
      </p>

      <p className="my-4">
        We observed earlier (in Sec. 2.29) that if <InlineMath>{'E \\subset Y \\subset X'}</InlineMath>,
        then <InlineMath>{'E'}</InlineMath> may be open relative to <InlineMath>{'Y'}</InlineMath>{' '}
        without being open relative to <InlineMath>{'X'}</InlineMath>. The property of being open
        thus depends on the space in which <InlineMath>{'E'}</InlineMath> is embedded. The same is
        true of the property of being closed.
      </p>

      <p className="my-4">
        Compactness, however, behaves better, as we shall now see. To formulate the next theorem,
        let us say, temporarily, that <InlineMath>{'K'}</InlineMath> is compact relative to{' '}
        <InlineMath>{'X'}</InlineMath> if the requirements of Definition 2.32 are met.
      </p>

      <Theorem
        title="2.33 Compactness is Intrinsic"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'K'}</InlineMath> is compact relative to{' '}
              <InlineMath>{'X'}</InlineMath>, and let{' '}
              <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath> be a collection of sets, open relative to{' '}
              <InlineMath>{'Y'}</InlineMath>, such that{' '}
              <InlineMath>{'K \\subset \\bigcup_\\alpha V_\\alpha'}</InlineMath>. By Theorem 2.30,
              there are sets <InlineMath>{'G_\\alpha'}</InlineMath>, open relative to{' '}
              <InlineMath>{'X'}</InlineMath>, such that{' '}
              <InlineMath>{'V_\\alpha = Y \\cap G_\\alpha'}</InlineMath>, for all{' '}
              <InlineMath>{'\\alpha'}</InlineMath>; and since{' '}
              <InlineMath>{'K'}</InlineMath> is compact relative to{' '}
              <InlineMath>{'X'}</InlineMath>, we have
            </p>
            <MathBlock>{'K \\subset G_{\\alpha_1} \\cup \\cdots \\cup G_{\\alpha_n}'}</MathBlock>
            <p className="mt-2">
              for some choice of finitely many indices{' '}
              <InlineMath>{'\\alpha_1, \\ldots, \\alpha_n'}</InlineMath>. Since{' '}
              <InlineMath>{'K \\subset Y'}</InlineMath>, (22) implies
            </p>
            <MathBlock>{'K \\subset V_{\\alpha_1} \\cup \\cdots \\cup V_{\\alpha_n}.'}</MathBlock>
            <p className="mt-2">
              This proves that <InlineMath>{'K'}</InlineMath> is compact relative to{' '}
              <InlineMath>{'Y'}</InlineMath>.
            </p>
            <p className="mt-2">
              Conversely, suppose <InlineMath>{'K'}</InlineMath> is compact relative to{' '}
              <InlineMath>{'Y'}</InlineMath>, let{' '}
              <InlineMath>{'\\{G_\\alpha\\}'}</InlineMath> be a collection of open subsets of{' '}
              <InlineMath>{'X'}</InlineMath> which covers <InlineMath>{'K'}</InlineMath>, and put{' '}
              <InlineMath>{'V_\\alpha = Y \\cap G_\\alpha'}</InlineMath>. Then (23) will hold for
              some choice of <InlineMath>{'\\alpha_1, \\ldots, \\alpha_n'}</InlineMath>; and since{' '}
              <InlineMath>{'V_\\alpha \\subset G_\\alpha'}</InlineMath>, (23) implies (22).
            </p>
            <p className="mt-2">This completes the proof.</p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'K \\subset Y \\subset X'}</InlineMath>. Then{' '}
          <InlineMath>{'K'}</InlineMath> is compact relative to <InlineMath>{'X'}</InlineMath> if
          and only if <InlineMath>{'K'}</InlineMath> is compact relative to{' '}
          <InlineMath>{'Y'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        By virtue of this theorem we are able, in many situations, to regard compact sets as metric
        spaces in their own right, without paying any attention to any embedding space. In
        particular, although it makes little sense to talk of <em>open</em> spaces, or of{' '}
        <em>closed</em> spaces (every metric space <InlineMath>{'X'}</InlineMath> is an open subset
        of itself, and is a closed subset of itself), it does make sense to talk of <em>compact</em>{' '}
        metric spaces.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Properties of Compact Sets</h3>

      <Theorem
        title="2.34 Compact Subsets of Metric Spaces are Closed"
        proof={
          <>
            <p>
              Let <InlineMath>{'K'}</InlineMath> be a compact subset of a metric space{' '}
              <InlineMath>{'X'}</InlineMath>. We shall prove that the complement of{' '}
              <InlineMath>{'K'}</InlineMath> is an open subset of <InlineMath>{'X'}</InlineMath>.
            </p>
            <p className="mt-2">
              Suppose <InlineMath>{'p \\in X'}</InlineMath>,{' '}
              <InlineMath>{'p \\notin K'}</InlineMath>. If{' '}
              <InlineMath>{'q \\in K'}</InlineMath>, let <InlineMath>{'V_q'}</InlineMath> and{' '}
              <InlineMath>{'W_q'}</InlineMath> be neighborhoods of <InlineMath>{'p'}</InlineMath>{' '}
              and <InlineMath>{'q'}</InlineMath>, respectively, of radius less than{' '}
              <InlineMath>{'\\frac{1}{2}d(p, q)'}</InlineMath> [see Definition 2.18(a)]. Since{' '}
              <InlineMath>{'K'}</InlineMath> is compact, there are finitely many points{' '}
              <InlineMath>{'q_1, \\ldots, q_n'}</InlineMath> in <InlineMath>{'K'}</InlineMath> such
              that
            </p>
            <MathBlock>{'K \\subset W_{q_1} \\cup \\cdots \\cup W_{q_n} = W.'}</MathBlock>
            <p className="mt-2">
              If <InlineMath>{'V = V_{q_1} \\cap \\cdots \\cap V_{q_n}'}</InlineMath>, then{' '}
              <InlineMath>{'V'}</InlineMath> is a neighborhood of <InlineMath>{'p'}</InlineMath>{' '}
              which does not intersect <InlineMath>{'W'}</InlineMath>. Hence{' '}
              <InlineMath>{'V \\subset K^c'}</InlineMath>, so that <InlineMath>{'p'}</InlineMath> is
              an interior point of <InlineMath>{'K^c'}</InlineMath>. The theorem follows.
            </p>
          </>
        }
      >
        <p>Compact subsets of metric spaces are closed.</p>
      </Theorem>

      <Theorem
        title="2.35 Closed Subsets of Compact Sets are Compact"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'F \\subset K \\subset X'}</InlineMath>,{' '}
              <InlineMath>{'F'}</InlineMath> is closed (relative to <InlineMath>{'X'}</InlineMath>),
              and <InlineMath>{'K'}</InlineMath> is compact. Let{' '}
              <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath> be an open cover of{' '}
              <InlineMath>{'F'}</InlineMath>. If <InlineMath>{'F^c'}</InlineMath> is adjoined to{' '}
              <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath>, we obtain an open cover{' '}
              <InlineMath>{'\\Omega'}</InlineMath> of <InlineMath>{'K'}</InlineMath>. Since{' '}
              <InlineMath>{'K'}</InlineMath> is compact, there is a finite subcollection{' '}
              <InlineMath>{'\\Phi'}</InlineMath> of <InlineMath>{'\\Omega'}</InlineMath> which
              covers <InlineMath>{'K'}</InlineMath>, and hence <InlineMath>{'F'}</InlineMath>. If{' '}
              <InlineMath>{'F^c'}</InlineMath> is a member of <InlineMath>{'\\Phi'}</InlineMath>, we
              may remove it from <InlineMath>{'\\Phi'}</InlineMath> and still retain an open cover of{' '}
              <InlineMath>{'F'}</InlineMath>. We have thus shown that a finite subcollection of{' '}
              <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath> covers{' '}
              <InlineMath>{'F'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>Closed subsets of compact sets are compact.</p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> If <InlineMath>{'F'}</InlineMath> is closed and{' '}
        <InlineMath>{'K'}</InlineMath> is compact, then{' '}
        <InlineMath>{'F \\cap K'}</InlineMath> is compact.
      </p>
      <p className="my-4">
        <em>Proof:</em> Theorems 2.24(b) and 2.34 show that{' '}
        <InlineMath>{'F \\cap K'}</InlineMath> is closed; since{' '}
        <InlineMath>{'F \\cap K \\subset K'}</InlineMath>, Theorem 2.35 shows that{' '}
        <InlineMath>{'F \\cap K'}</InlineMath> is compact.
      </p>

      <Theorem
        title="2.36 Finite Intersection Property"
        proof={
          <>
            <p>
              Fix a member <InlineMath>{'K_1'}</InlineMath> of{' '}
              <InlineMath>{'\\{K_\\alpha\\}'}</InlineMath> and put{' '}
              <InlineMath>{'G_\\alpha = K_\\alpha^c'}</InlineMath>. Assume that no point of{' '}
              <InlineMath>{'K_1'}</InlineMath> belongs to every{' '}
              <InlineMath>{'K_\\alpha'}</InlineMath>. Then the sets{' '}
              <InlineMath>{'G_\\alpha'}</InlineMath> form an open cover of{' '}
              <InlineMath>{'K_1'}</InlineMath>; and since <InlineMath>{'K_1'}</InlineMath> is
              compact, there are finitely many indices{' '}
              <InlineMath>{'\\alpha_1, \\ldots, \\alpha_n'}</InlineMath> such that{' '}
              <InlineMath>{'K_1 \\subset G_{\\alpha_1} \\cup \\cdots \\cup G_{\\alpha_n}'}</InlineMath>.
              But this means that
            </p>
            <MathBlock>{'K_1 \\cap K_{\\alpha_1} \\cap \\cdots \\cap K_{\\alpha_n}'}</MathBlock>
            <p className="mt-2">
              is empty, in contradiction to our hypothesis.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\{K_\\alpha\\}'}</InlineMath> is a collection of compact subsets of a
          metric space <InlineMath>{'X'}</InlineMath> such that the intersection of every finite
          subcollection of <InlineMath>{'\\{K_\\alpha\\}'}</InlineMath> is nonempty, then{' '}
          <InlineMath>{'\\bigcap_\\alpha K_\\alpha'}</InlineMath> is nonempty.
        </p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> If <InlineMath>{'\\{K_n\\}'}</InlineMath> is a sequence of
        nonempty compact sets such that{' '}
        <InlineMath>{'K_n \\supset K_{n+1}'}</InlineMath> (
        <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>), then{' '}
        <InlineMath>{'\\bigcap_1^\\infty K_n'}</InlineMath> is not empty.
      </p>

      <Theorem
        title="2.37 Infinite Subsets of Compact Sets Have Limit Points"
        proof={
          <>
            <p>
              If no point of <InlineMath>{'K'}</InlineMath> were a limit point of{' '}
              <InlineMath>{'E'}</InlineMath>, then each <InlineMath>{'q \\in K'}</InlineMath> would
              have a neighborhood <InlineMath>{'V_q'}</InlineMath> which contains at most one point
              of <InlineMath>{'E'}</InlineMath> (namely, <InlineMath>{'q'}</InlineMath>, if{' '}
              <InlineMath>{'q \\in E'}</InlineMath>). It is clear that no finite subcollection of{' '}
              <InlineMath>{'\\{V_q\\}'}</InlineMath> can cover{' '}
              <InlineMath>{'E'}</InlineMath>; and the same is true of{' '}
              <InlineMath>{'K'}</InlineMath>, since{' '}
              <InlineMath>{'E \\subset K'}</InlineMath>. This contradicts the compactness of{' '}
              <InlineMath>{'K'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'E'}</InlineMath> is an infinite subset of a compact set{' '}
          <InlineMath>{'K'}</InlineMath>, then <InlineMath>{'E'}</InlineMath> has a limit point in{' '}
          <InlineMath>{'K'}</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Nested Intervals and k-Cells</h3>

      <Theorem
        title="2.38 Nested Intervals Theorem"
        proof={
          <>
            <p>
              If <InlineMath>{'I_n = [a_n, b_n]'}</InlineMath>, let{' '}
              <InlineMath>{'E'}</InlineMath> be the set of all <InlineMath>{'a_n'}</InlineMath>.
              Then <InlineMath>{'E'}</InlineMath> is nonempty and bounded above (by{' '}
              <InlineMath>{'b_1'}</InlineMath>). Let <InlineMath>{'x'}</InlineMath> be the sup of{' '}
              <InlineMath>{'E'}</InlineMath>. If <InlineMath>{'m'}</InlineMath> and{' '}
              <InlineMath>{'n'}</InlineMath> are positive integers, then
            </p>
            <MathBlock>{'a_n \\leq a_{m+n} \\leq b_{m+n} \\leq b_m,'}</MathBlock>
            <p className="mt-2">
              so that <InlineMath>{'x \\leq b_m'}</InlineMath> for each{' '}
              <InlineMath>{'m'}</InlineMath>. Since it is obvious that{' '}
              <InlineMath>{'a_m \\leq x'}</InlineMath>, we see that{' '}
              <InlineMath>{'x \\in I_m'}</InlineMath> for{' '}
              <InlineMath>{'m = 1, 2, 3, \\ldots'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\{I_n\\}'}</InlineMath> is a sequence of intervals in{' '}
          <InlineMath>{'R^1'}</InlineMath>, such that{' '}
          <InlineMath>{'I_n \\supset I_{n+1}'}</InlineMath> (
          <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>), then{' '}
          <InlineMath>{'\\bigcap_1^\\infty I_n'}</InlineMath> is not empty.
        </p>
      </Theorem>

      <Theorem
        title="2.39 Nested k-Cells Theorem"
        proof={
          <>
            <p>
              Let <InlineMath>{'I_n'}</InlineMath> consist of all points{' '}
              <InlineMath>{'\\mathbf{x} = (x_1, \\ldots, x_k)'}</InlineMath> such that
            </p>
            <MathBlock>{'a_{n,j} \\leq x_j \\leq b_{n,j} \\quad (1 \\leq j \\leq k; n = 1, 2, 3, \\ldots),'}</MathBlock>
            <p className="mt-2">
              and put <InlineMath>{'I_{n,j} = [a_{n,j}, b_{n,j}]'}</InlineMath>. For each{' '}
              <InlineMath>{'j'}</InlineMath>, the sequence{' '}
              <InlineMath>{'\\{I_{n,j}\\}'}</InlineMath> satisfies the hypotheses of Theorem 2.38.
              Hence there are real numbers <InlineMath>{'x_j^*'}</InlineMath> (
              <InlineMath>{'1 \\leq j \\leq k'}</InlineMath>) such that
            </p>
            <MathBlock>{'a_{n,j} \\leq x_j^* \\leq b_{n,j} \\quad (1 \\leq j \\leq k; n = 1, 2, 3, \\ldots).'}</MathBlock>
            <p className="mt-2">
              Setting <InlineMath>{'\\mathbf{x}^* = (x_1^*, \\ldots, x_k^*)'}</InlineMath>, we see
              that <InlineMath>{'\\mathbf{x}^* \\in I_n'}</InlineMath> for{' '}
              <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>. The theorem follows.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'k'}</InlineMath> be a positive integer. If{' '}
          <InlineMath>{'\\{I_n\\}'}</InlineMath> is a sequence of <InlineMath>{'k'}</InlineMath>
          -cells such that <InlineMath>{'I_n \\supset I_{n+1}'}</InlineMath> (
          <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>), then{' '}
          <InlineMath>{'\\bigcap_1^\\infty I_n'}</InlineMath> is not empty.
        </p>
      </Theorem>

      <Theorem
        title="2.40 Every k-Cell is Compact"
        proof={
          <>
            <p>
              Let <InlineMath>{'I'}</InlineMath> be a <InlineMath>{'k'}</InlineMath>-cell,
              consisting of all points <InlineMath>{'\\mathbf{x} = (x_1, \\ldots, x_k)'}</InlineMath>{' '}
              such that <InlineMath>{'a_j \\leq x_j \\leq b_j'}</InlineMath> (
              <InlineMath>{'1 \\leq j \\leq k'}</InlineMath>). Put
            </p>
            <MathBlock>{'\\delta = \\left\\{ \\sum_{j=1}^{k} (b_j - a_j)^2 \\right\\}^{1/2}.'}</MathBlock>
            <p className="mt-2">
              Then <InlineMath>{'|\\mathbf{x} - \\mathbf{y}| \\leq \\delta'}</InlineMath>, if{' '}
              <InlineMath>{'\\mathbf{x} \\in I'}</InlineMath>,{' '}
              <InlineMath>{'\\mathbf{y} \\in I'}</InlineMath>.
            </p>
            <p className="mt-2">
              Suppose, to get a contradiction, that there exists an open cover{' '}
              <InlineMath>{'\\{G_\\alpha\\}'}</InlineMath> of <InlineMath>{'I'}</InlineMath> which
              contains no finite subcover of <InlineMath>{'I'}</InlineMath>. Put{' '}
              <InlineMath>{'c_j = (a_j + b_j)/2'}</InlineMath>. The intervals{' '}
              <InlineMath>{'[a_j, c_j]'}</InlineMath> and <InlineMath>{'[c_j, b_j]'}</InlineMath>{' '}
              then determine <InlineMath>{'2^k'}</InlineMath> <InlineMath>{'k'}</InlineMath>-cells{' '}
              <InlineMath>{'Q_i'}</InlineMath> whose union is <InlineMath>{'I'}</InlineMath>.
              At least one of these sets <InlineMath>{'Q_i'}</InlineMath>, call it{' '}
              <InlineMath>{'I_1'}</InlineMath>, cannot be covered by any finite subcollection of{' '}
              <InlineMath>{'\\{G_\\alpha\\}'}</InlineMath> (otherwise{' '}
              <InlineMath>{'I'}</InlineMath> could be so covered). We next subdivide{' '}
              <InlineMath>{'I_1'}</InlineMath> and continue the process. We obtain a sequence{' '}
              <InlineMath>{'\\{I_n\\}'}</InlineMath> with the following properties:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                (a) <InlineMath>{'I \\supset I_1 \\supset I_2 \\supset I_3 \\supset \\cdots'}</InlineMath>;
              </li>
              <li>
                (b) <InlineMath>{'I_n'}</InlineMath> is not covered by any finite subcollection of{' '}
                <InlineMath>{'\\{G_\\alpha\\}'}</InlineMath>;
              </li>
              <li>
                (c) if <InlineMath>{'\\mathbf{x} \\in I_n'}</InlineMath> and{' '}
                <InlineMath>{'\\mathbf{y} \\in I_n'}</InlineMath>, then{' '}
                <InlineMath>{'|\\mathbf{x} - \\mathbf{y}| \\leq 2^{-n}\\delta'}</InlineMath>.
              </li>
            </ul>
            <p className="mt-2">
              By (a) and Theorem 2.39, there is a point{' '}
              <InlineMath>{'\\mathbf{x}^*'}</InlineMath> which lies in every{' '}
              <InlineMath>{'I_n'}</InlineMath>. For some <InlineMath>{'\\alpha'}</InlineMath>,{' '}
              <InlineMath>{'\\mathbf{x}^* \\in G_\\alpha'}</InlineMath>. Since{' '}
              <InlineMath>{'G_\\alpha'}</InlineMath> is open, there exists{' '}
              <InlineMath>{'r > 0'}</InlineMath> such that{' '}
              <InlineMath>{'|\\mathbf{y} - \\mathbf{x}^*| < r'}</InlineMath> implies{' '}
              <InlineMath>{'\\mathbf{y} \\in G_\\alpha'}</InlineMath>. If{' '}
              <InlineMath>{'n'}</InlineMath> is so large that{' '}
              <InlineMath>{'2^{-n}\\delta < r'}</InlineMath> (there is such an{' '}
              <InlineMath>{'n'}</InlineMath>, since <InlineMath>{'R'}</InlineMath> is archimedean),
              then (c) implies that <InlineMath>{'I_n \\subset G_\\alpha'}</InlineMath>, which
              contradicts (b).
            </p>
            <p className="mt-2">This completes the proof.</p>
          </>
        }
      >
        <p>
          Every <InlineMath>{'k'}</InlineMath>-cell is compact.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">The Heine-Borel Theorem</h3>

      <Theorem
        title="2.41 Heine-Borel Theorem"
        proof={
          <>
            <p>
              <strong>(a) implies (b):</strong> If (a) holds, then{' '}
              <InlineMath>{'E \\subset I'}</InlineMath> for some <InlineMath>{'k'}</InlineMath>
              -cell <InlineMath>{'I'}</InlineMath>, and (b) follows from Theorems 2.40 and 2.35.
              Theorem 2.37 shows that (b) implies (c). It remains to be shown that (c) implies (a).
            </p>
            <p className="mt-2">
              <strong>(c) implies (a):</strong> If <InlineMath>{'E'}</InlineMath> is not bounded,
              then <InlineMath>{'E'}</InlineMath> contains points{' '}
              <InlineMath>{'\\mathbf{x}_n'}</InlineMath> with
            </p>
            <MathBlock>{'|\\mathbf{x}_n| > n \\quad (n = 1, 2, 3, \\ldots).'}</MathBlock>
            <p className="mt-2">
              The set <InlineMath>{'S'}</InlineMath> consisting of these points{' '}
              <InlineMath>{'\\mathbf{x}_n'}</InlineMath> is infinite and clearly has no limit point
              in <InlineMath>{'R^k'}</InlineMath>, hence has none in{' '}
              <InlineMath>{'E'}</InlineMath>. Thus (c) implies that{' '}
              <InlineMath>{'E'}</InlineMath> is bounded.
            </p>
            <p className="mt-2">
              If <InlineMath>{'E'}</InlineMath> is not closed, then there is a point{' '}
              <InlineMath>{'\\mathbf{x}_0 \\in R^k'}</InlineMath> which is a limit point of{' '}
              <InlineMath>{'E'}</InlineMath> but not a point of <InlineMath>{'E'}</InlineMath>. For{' '}
              <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>, there are points{' '}
              <InlineMath>{'\\mathbf{x}_n \\in E'}</InlineMath> such that{' '}
              <InlineMath>{'|\\mathbf{x}_n - \\mathbf{x}_0| < 1/n'}</InlineMath>. Let{' '}
              <InlineMath>{'S'}</InlineMath> be the set of these points{' '}
              <InlineMath>{'\\mathbf{x}_n'}</InlineMath>. Then <InlineMath>{'S'}</InlineMath> is
              infinite (otherwise <InlineMath>{'|\\mathbf{x}_n - \\mathbf{x}_0|'}</InlineMath> would
              have a constant positive value, for infinitely many <InlineMath>{'n'}</InlineMath>),{' '}
              <InlineMath>{'S'}</InlineMath> has <InlineMath>{'\\mathbf{x}_0'}</InlineMath> as a
              limit point, and <InlineMath>{'S'}</InlineMath> has no other limit point in{' '}
              <InlineMath>{'R^k'}</InlineMath>. For if{' '}
              <InlineMath>{'\\mathbf{y} \\in R^k'}</InlineMath>,{' '}
              <InlineMath>{'\\mathbf{y} \\neq \\mathbf{x}_0'}</InlineMath>, then
            </p>
            <MathBlock>
              {'|\\mathbf{x}_n - \\mathbf{y}| \\geq |\\mathbf{x}_0 - \\mathbf{y}| - |\\mathbf{x}_n - \\mathbf{x}_0| \\geq |\\mathbf{x}_0 - \\mathbf{y}| - \\frac{1}{n} \\geq \\frac{1}{2}|\\mathbf{x}_0 - \\mathbf{y}|'}
            </MathBlock>
            <p className="mt-2">
              for all but finitely many <InlineMath>{'n'}</InlineMath>; this shows that{' '}
              <InlineMath>{'\\mathbf{y}'}</InlineMath> is not a limit point of{' '}
              <InlineMath>{'S'}</InlineMath> (Theorem 2.20).
            </p>
            <p className="mt-2">
              Thus <InlineMath>{'S'}</InlineMath> has no limit point in{' '}
              <InlineMath>{'E'}</InlineMath>; hence <InlineMath>{'E'}</InlineMath> must be closed
              if (c) holds.
            </p>
          </>
        }
      >
        <p>
          If a set <InlineMath>{'E'}</InlineMath> in <InlineMath>{'R^k'}</InlineMath> has one of
          the following three properties, then it has the other two:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>(a)</strong> <InlineMath>{'E'}</InlineMath> is closed and bounded.
          </li>
          <li>
            <strong>(b)</strong> <InlineMath>{'E'}</InlineMath> is compact.
          </li>
          <li>
            <strong>(c)</strong> Every infinite subset of <InlineMath>{'E'}</InlineMath> has a
            limit point in <InlineMath>{'E'}</InlineMath>.
          </li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Important:</strong> The Heine-Borel theorem characterizes compact subsets of{' '}
          <InlineMath>{'R^k'}</InlineMath>. Note that (b) and (c) are equivalent in any metric space
          (Exercise 26), but that (a) does not, in general, imply (b) and (c). Examples are
          furnished by Exercise 16 and by the space <InlineMath>{'\\mathscr{L}^2'}</InlineMath>,
          which is discussed in Chap. 11.
        </p>
      </Callout>

      <Theorem
        title="2.42 Weierstrass Theorem"
        proof={
          <>
            <p>
              Being bounded, the set <InlineMath>{'E'}</InlineMath> in question is a subset of a{' '}
              <InlineMath>{'k'}</InlineMath>-cell <InlineMath>{'I \\subset R^k'}</InlineMath>. By
              Theorem 2.40, <InlineMath>{'I'}</InlineMath> is compact, and so{' '}
              <InlineMath>{'E'}</InlineMath> has a limit point in <InlineMath>{'I'}</InlineMath>, by
              Theorem 2.37.
            </p>
          </>
        }
      >
        <p>
          Every bounded infinite subset of <InlineMath>{'R^k'}</InlineMath> has a limit point in{' '}
          <InlineMath>{'R^k'}</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">
        The key results of this section on compact sets are:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Compact set:</strong> Every open cover has a finite subcover
        </li>
        <li>
          <strong>Intrinsic property:</strong> Compactness does not depend on the ambient space
        </li>
        <li>
          Compact sets are closed; closed subsets of compact sets are compact
        </li>
        <li>
          <strong>Heine-Borel:</strong> In <InlineMath>{'R^k'}</InlineMath>, compact = closed and
          bounded
        </li>
        <li>
          <strong>Finite intersection property:</strong> Nested nonempty compact sets have nonempty
          intersection
        </li>
        <li>
          <strong>Bolzano-Weierstrass:</strong> Infinite subsets of compact sets have limit points
        </li>
      </ul>
    </LessonLayout>
  );
}
