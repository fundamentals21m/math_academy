import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-semibold mb-4">Connected Sets</h2>

      <p className="mb-4">
        Connectedness captures the intuitive idea of a set being "in one piece." A connected set
        cannot be split into two nonempty parts that are "separated" from each other. This section
        introduces the formal definition and proves that in the real line, the connected subsets
        are precisely the intervals.
      </p>

      <Callout type="info">
        <p>
          Connectedness plays a crucial role in analysis, particularly in the Intermediate Value
          Theorem. The fact that connected subsets of <InlineMath>{'R^1'}</InlineMath> are exactly
          the intervals is fundamental to understanding continuous functions on the real line.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Separated Sets and Connectedness</h3>

      <Definition title="2.45 Separated Sets">
        <p>
          Two subsets <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> of a metric
          space <InlineMath>{'X'}</InlineMath> are said to be <em>separated</em> if both{' '}
          <InlineMath>{'A \\cap \\bar{B}'}</InlineMath> and{' '}
          <InlineMath>{'\\bar{A} \\cap B'}</InlineMath> are empty, i.e., if no point of{' '}
          <InlineMath>{'A'}</InlineMath> lies in the closure of <InlineMath>{'B'}</InlineMath> and
          no point of <InlineMath>{'B'}</InlineMath> lies in the closure of{' '}
          <InlineMath>{'A'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="2.46 Connected Set">
        <p>
          A set <InlineMath>{'E \\subset X'}</InlineMath> is said to be <em>connected</em> if{' '}
          <InlineMath>{'E'}</InlineMath> is <em>not</em> a union of two nonempty separated sets.
        </p>
      </Definition>

      <p className="my-4">
        <strong>Remark 2.46:</strong> Separated sets are of course disjoint, but disjoint sets need
        not be separated. For example, the interval <InlineMath>{'[0, 1]'}</InlineMath> and the
        segment <InlineMath>{'(1, 2)'}</InlineMath> are <em>not</em> separated, since 1 is a limit
        point of <InlineMath>{'(1, 2)'}</InlineMath>. However, the segments{' '}
        <InlineMath>{'(0, 1)'}</InlineMath> and <InlineMath>{'(1, 2)'}</InlineMath>{' '}
        <em>are</em> separated.
      </p>

      <p className="my-4">
        The connected subsets of the line have a particularly simple structure:
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Connected Subsets of the Real Line</h3>

      <Theorem
        title="2.47 Connected Subsets of R^1 are Intervals"
        proof={
          <>
            <p>
              If <InlineMath>{'E'}</InlineMath> is not connected, then there exist{' '}
              <InlineMath>{'x \\in E'}</InlineMath>, <InlineMath>{'y \\in E'}</InlineMath>, and some{' '}
              <InlineMath>{'z \\in (x, y)'}</InlineMath> such that{' '}
              <InlineMath>{'z \\notin E'}</InlineMath>. To see this, write{' '}
              <InlineMath>{'E = A \\cup B'}</InlineMath>, where{' '}
              <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are nonempty
              separated sets. Pick <InlineMath>{'x \\in A'}</InlineMath>,{' '}
              <InlineMath>{'y \\in B'}</InlineMath>, and assume (without loss of generality) that{' '}
              <InlineMath>{'x < y'}</InlineMath>. Define
            </p>
            <MathBlock>{'z = \\sup (A \\cap [x, y]).'}</MathBlock>
            <p className="mt-2">
              By Theorem 2.28, <InlineMath>{'z \\in \\bar{A}'}</InlineMath>; hence{' '}
              <InlineMath>{'z \\notin B'}</InlineMath>. In particular,{' '}
              <InlineMath>{'x \\leq z < y'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'z \\notin A'}</InlineMath>, it follows that{' '}
              <InlineMath>{'x < z < y'}</InlineMath> and <InlineMath>{'z \\notin E'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'z \\in A'}</InlineMath>, then <InlineMath>{'z \\notin \\bar{B}'}</InlineMath>,
              hence there exists <InlineMath>{'z_1'}</InlineMath> such that{' '}
              <InlineMath>{'z < z_1 < y'}</InlineMath> and{' '}
              <InlineMath>{'z_1 \\notin B'}</InlineMath>. Then{' '}
              <InlineMath>{'x < z_1 < y'}</InlineMath> and{' '}
              <InlineMath>{'z_1 \\notin E'}</InlineMath>.
            </p>
            <p className="mt-2">
              To prove the converse, suppose there exist{' '}
              <InlineMath>{'x \\in E'}</InlineMath>, <InlineMath>{'y \\in E'}</InlineMath>, and some{' '}
              <InlineMath>{'z \\in (x, y)'}</InlineMath> such that{' '}
              <InlineMath>{'z \\notin E'}</InlineMath>. Put{' '}
              <InlineMath>{'A_z = E \\cap (-\\infty, z)'}</InlineMath>,{' '}
              <InlineMath>{'B_z = E \\cap (z, \\infty)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{'x \\in A_z'}</InlineMath> and{' '}
              <InlineMath>{'y \\in B_z'}</InlineMath>, <InlineMath>{'A'}</InlineMath> and{' '}
              <InlineMath>{'B'}</InlineMath> are nonempty. Since{' '}
              <InlineMath>{'A_z \\subset (-\\infty, z)'}</InlineMath> and{' '}
              <InlineMath>{'B_z \\subset (z, \\infty)'}</InlineMath>,{' '}
              <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are separated.
              Hence <InlineMath>{'E'}</InlineMath> is not connected.
            </p>
          </>
        }
      >
        <p>
          A subset <InlineMath>{'E'}</InlineMath> of the real line{' '}
          <InlineMath>{'R^1'}</InlineMath> is connected if and only if it has the following
          property: If <InlineMath>{'x \\in E'}</InlineMath>,{' '}
          <InlineMath>{'y \\in E'}</InlineMath>, and <InlineMath>{'x < z < y'}</InlineMath>, then{' '}
          <InlineMath>{'z \\in E'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        In other words, a subset of <InlineMath>{'R^1'}</InlineMath> is connected if and only if it
        is an <em>interval</em>. This includes:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Bounded intervals: <InlineMath>{'(a, b)'}</InlineMath>,{' '}
          <InlineMath>{'[a, b]'}</InlineMath>, <InlineMath>{'[a, b)'}</InlineMath>,{' '}
          <InlineMath>{'(a, b]'}</InlineMath>
        </li>
        <li>
          Unbounded intervals: <InlineMath>{'(-\\infty, a)'}</InlineMath>,{' '}
          <InlineMath>{'(-\\infty, a]'}</InlineMath>, <InlineMath>{'(a, \\infty)'}</InlineMath>,{' '}
          <InlineMath>{'[a, \\infty)'}</InlineMath>, <InlineMath>{'(-\\infty, \\infty) = R^1'}</InlineMath>
        </li>
        <li>
          Singleton sets <InlineMath>{'\\{a\\}'}</InlineMath> and the empty set
        </li>
      </ul>

      <Example title="Examples of Connected and Disconnected Sets">
        <p>
          <strong>Connected sets in <InlineMath>{'R^1'}</InlineMath>:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{'[0, 1]'}</InlineMath> is connected (a closed interval)
          </li>
          <li>
            <InlineMath>{'(0, 1)'}</InlineMath> is connected (an open interval)
          </li>
          <li>
            <InlineMath>{'[0, \\infty)'}</InlineMath> is connected (a half-line)
          </li>
          <li>
            <InlineMath>{'R^1'}</InlineMath> itself is connected
          </li>
        </ul>
        <p className="mt-4">
          <strong>Disconnected sets in <InlineMath>{'R^1'}</InlineMath>:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{'[0, 1] \\cup [2, 3]'}</InlineMath> is not connected (union of two
            separated intervals)
          </li>
          <li>
            <InlineMath>{'\\mathbb{Q}'}</InlineMath> (the rationals) is not connected, since if{' '}
            <InlineMath>{'x, y \\in \\mathbb{Q}'}</InlineMath> with <InlineMath>{'x < y'}</InlineMath>,
            the irrational <InlineMath>{'x + (y-x)/\\sqrt{2}'}</InlineMath> lies between them but
            not in <InlineMath>{'\\mathbb{Q}'}</InlineMath>
          </li>
          <li>
            The Cantor set is not connected (it contains no intervals)
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Connectedness in Higher Dimensions</h3>

      <Example title="Connected Sets in R^2">
        <p>In <InlineMath>{'R^2'}</InlineMath> (the plane), examples of connected sets include:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Open disks <InlineMath>{'\\{(x, y) : x^2 + y^2 < r^2\\}'}</InlineMath>
          </li>
          <li>
            Closed disks <InlineMath>{'\\{(x, y) : x^2 + y^2 \\leq r^2\\}'}</InlineMath>
          </li>
          <li>
            The entire plane <InlineMath>{'R^2'}</InlineMath>
          </li>
          <li>
            Any convex set (a set <InlineMath>{'E'}</InlineMath> is convex if for any{' '}
            <InlineMath>{'x, y \\in E'}</InlineMath>, the line segment from{' '}
            <InlineMath>{'x'}</InlineMath> to <InlineMath>{'y'}</InlineMath> lies entirely in{' '}
            <InlineMath>{'E'}</InlineMath>)
          </li>
        </ul>
        <p className="mt-4">
          Disconnected sets in <InlineMath>{'R^2'}</InlineMath> include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Two disjoint disks
          </li>
          <li>
            <InlineMath>{'R^2 \\setminus \\{0\\}'}</InlineMath> is still connected (removing a
            single point from the plane does not disconnect it)
          </li>
          <li>
            However, removing a line from <InlineMath>{'R^2'}</InlineMath> does disconnect it
          </li>
        </ul>
      </Example>

      <Callout type="warning">
        <p>
          <strong>Important Distinction:</strong> In <InlineMath>{'R^1'}</InlineMath>, removing a
          single point from an interval disconnects it. In <InlineMath>{'R^2'}</InlineMath>,
          removing a single point from a connected set typically does not disconnect it. This
          reflects a fundamental difference in the topology of these spaces.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Path Connectedness</h3>

      <p className="my-4">
        A related but distinct concept is <em>path connectedness</em>. A set{' '}
        <InlineMath>{'E'}</InlineMath> is path connected if any two points in{' '}
        <InlineMath>{'E'}</InlineMath> can be joined by a continuous curve lying entirely in{' '}
        <InlineMath>{'E'}</InlineMath>.
      </p>

      <Definition title="Path Connected Set">
        <p>
          A set <InlineMath>{'E'}</InlineMath> in a metric space <InlineMath>{'X'}</InlineMath> is{' '}
          <em>path connected</em> if for any two points{' '}
          <InlineMath>{'\\mathbf{a}, \\mathbf{b} \\in E'}</InlineMath>, there exists a continuous
          function <InlineMath>{'\\gamma: [0, 1] \\to E'}</InlineMath> such that{' '}
          <InlineMath>{'\\gamma(0) = \\mathbf{a}'}</InlineMath> and{' '}
          <InlineMath>{'\\gamma(1) = \\mathbf{b}'}</InlineMath>.
        </p>
      </Definition>

      <p className="my-4">
        Every path connected set is connected, but the converse is not always true. However, for
        open subsets of <InlineMath>{'R^k'}</InlineMath>, the two notions are equivalent.
      </p>

      <Example title="Connected but Not Path Connected">
        <p>
          The "topologist's sine curve" is an example of a connected set that is not path connected.
          Consider the set
        </p>
        <MathBlock>
          {'S = \\left\\{ \\left(x, \\sin\\frac{1}{x}\\right) : 0 < x \\leq 1 \\right\\} \\cup \\{(0, y) : -1 \\leq y \\leq 1\\}'}
        </MathBlock>
        <p className="mt-2">
          This set is connected (the graph of <InlineMath>{'\\sin(1/x)'}</InlineMath> "accumulates"
          on the vertical segment), but there is no continuous path from a point on the vertical
          segment to a point on the sine curve.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">
        The key results of this section on connected sets are:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Separated sets:</strong> Sets where neither contains a limit point of the other
        </li>
        <li>
          <strong>Connected set:</strong> Cannot be written as a union of two nonempty separated
          sets
        </li>
        <li>
          <strong>Characterization in <InlineMath>{'R^1'}</InlineMath>:</strong> A set is connected
          if and only if it is an interval
        </li>
        <li>
          The rationals <InlineMath>{'\\mathbb{Q}'}</InlineMath> and the Cantor set are examples of
          disconnected subsets of <InlineMath>{'R^1'}</InlineMath>
        </li>
        <li>
          Path connectedness is a stronger condition that implies connectedness
        </li>
      </ul>

      <p className="my-4">
        This completes Chapter 2 on Basic Topology. The concepts introduced here - metric spaces,
        open and closed sets, compactness, and connectedness - form the foundation for the study of
        continuous functions in the next chapter.
      </p>
    </LessonLayout>
  );
}
