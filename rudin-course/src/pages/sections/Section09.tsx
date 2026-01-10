import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2 className="text-2xl font-semibold mb-4">Metric Spaces</h2>

      <p className="mb-4">
        This section introduces metric spaces, one of the most important abstractions in analysis.
        A metric space is a set equipped with a notion of "distance" between points. This framework
        allows us to generalize concepts like convergence, continuity, and compactness from the
        real line to much more general settings.
      </p>

      <Callout type="info">
        <p>
          The metric space concept was introduced by Maurice Frechet in 1906. It provides the
          natural setting for studying topological properties through the lens of distance,
          including the fundamental notions of open and closed sets, limit points, and
          neighborhoods.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Definition and Basic Properties</h3>

      <Definition title="2.15 Metric Space">
        <p>
          A set <InlineMath>{'X'}</InlineMath>, whose elements we shall call <em>points</em>, is
          said to be a <em>metric space</em> if with any two points{' '}
          <InlineMath>{'p'}</InlineMath> and <InlineMath>{'q'}</InlineMath> of{' '}
          <InlineMath>{'X'}</InlineMath> there is associated a real number{' '}
          <InlineMath>{'d(p, q)'}</InlineMath>, called the <em>distance</em> from{' '}
          <InlineMath>{'p'}</InlineMath> to <InlineMath>{'q'}</InlineMath>, such that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{'d(p, q) > 0'}</InlineMath> if{' '}
            <InlineMath>{'p \\neq q'}</InlineMath>; <InlineMath>{'d(p, p) = 0'}</InlineMath>;
          </li>
          <li>
            <InlineMath>{'d(p, q) = d(q, p)'}</InlineMath>;
          </li>
          <li>
            <InlineMath>{'d(p, q) \\leq d(p, r) + d(r, q)'}</InlineMath>, for any{' '}
            <InlineMath>{'r \\in X'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-2">
          Any function with these three properties is called a <em>distance function</em>, or a{' '}
          <em>metric</em>.
        </p>
      </Definition>

      <Example title="2.16 Euclidean Spaces">
        <p>
          The most important examples of metric spaces, from our standpoint, are the euclidean
          spaces <InlineMath>{'R^k'}</InlineMath>, especially <InlineMath>{'R^1'}</InlineMath> (the
          real line) and <InlineMath>{'R^2'}</InlineMath> (the complex plane); the distance in{' '}
          <InlineMath>{'R^k'}</InlineMath> is defined by
        </p>
        <MathBlock>{'d(\\mathbf{x}, \\mathbf{y}) = |\\mathbf{x} - \\mathbf{y}| \\quad (\\mathbf{x}, \\mathbf{y} \\in R^k).'}</MathBlock>
        <p className="mt-2">
          By Theorem 1.37, the conditions of Definition 2.15 are satisfied by (19).
        </p>
        <p className="mt-2">
          It is important to observe that every subset <InlineMath>{'Y'}</InlineMath> of a metric
          space <InlineMath>{'X'}</InlineMath> is a metric space in its own right, with the same
          distance function. For it is clear that if conditions (a) to (c) of Definition 2.15 hold
          for <InlineMath>{'p, q, r \\in X'}</InlineMath>, they also hold if we restrict{' '}
          <InlineMath>{'p, q, r'}</InlineMath> to lie in <InlineMath>{'Y'}</InlineMath>.
        </p>
        <p className="mt-2">
          Thus every subset of a euclidean space is a metric space.
        </p>
      </Example>

      <Definition title="2.17 Segment and Interval">
        <p>
          By the <em>segment</em> <InlineMath>{'(a, b)'}</InlineMath> we mean the set of all real
          numbers <InlineMath>{'x'}</InlineMath> such that{' '}
          <InlineMath>{'a < x < b'}</InlineMath>.
        </p>
        <p className="mt-2">
          By the <em>interval</em> <InlineMath>{'[a, b]'}</InlineMath> we mean the set of all real
          numbers <InlineMath>{'x'}</InlineMath> such that{' '}
          <InlineMath>{'a \\leq x \\leq b'}</InlineMath>.
        </p>
        <p className="mt-2">
          Occasionally we shall also encounter "half-open intervals"{' '}
          <InlineMath>{'[a, b)'}</InlineMath> and <InlineMath>{'(a, b]'}</InlineMath>; the first
          consists of all <InlineMath>{'x'}</InlineMath> such that{' '}
          <InlineMath>{'a \\leq x < b'}</InlineMath>, the second of all{' '}
          <InlineMath>{'x'}</InlineMath> such that <InlineMath>{'a < x \\leq b'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{'a_i < b_i'}</InlineMath> for{' '}
          <InlineMath>{'i = 1, \\ldots, k'}</InlineMath>, the set of all points{' '}
          <InlineMath>{'\\mathbf{x} = (x_1, \\ldots, x_k)'}</InlineMath> in{' '}
          <InlineMath>{'R^k'}</InlineMath> whose coordinates satisfy the inequalities{' '}
          <InlineMath>{'a_i \\leq x_i \\leq b_i'}</InlineMath> (
          <InlineMath>{'1 \\leq i \\leq k'}</InlineMath>) is called a <em>k-cell</em>. Thus a
          1-cell is an interval, a 2-cell is a rectangle, etc.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Neighborhoods and Topological Concepts</h3>

      <Definition title="2.18 Neighborhoods, Limit Points, and Related Concepts">
        <p>
          Let <InlineMath>{'X'}</InlineMath> be a metric space. All points and sets mentioned below
          are understood to be elements and subsets of <InlineMath>{'X'}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>(a) Neighborhood:</strong> A <em>neighborhood</em> of{' '}
            <InlineMath>{'p'}</InlineMath> is a set <InlineMath>{'N_r(p)'}</InlineMath> consisting
            of all <InlineMath>{'q'}</InlineMath> such that{' '}
            <InlineMath>{'d(p, q) < r'}</InlineMath>, for some{' '}
            <InlineMath>{'r > 0'}</InlineMath>. The number <InlineMath>{'r'}</InlineMath> is called
            the <em>radius</em> of <InlineMath>{'N_r(p)'}</InlineMath>.
          </li>
          <li>
            <strong>(b) Limit Point:</strong> A point <InlineMath>{'p'}</InlineMath> is a{' '}
            <em>limit point</em> of the set <InlineMath>{'E'}</InlineMath> if <em>every</em>{' '}
            neighborhood of <InlineMath>{'p'}</InlineMath> contains a point{' '}
            <InlineMath>{'q \\neq p'}</InlineMath> such that{' '}
            <InlineMath>{'q \\in E'}</InlineMath>.
          </li>
          <li>
            <strong>(c) Isolated Point:</strong> If{' '}
            <InlineMath>{'p \\in E'}</InlineMath> and <InlineMath>{'p'}</InlineMath> is not a limit
            point of <InlineMath>{'E'}</InlineMath>, then <InlineMath>{'p'}</InlineMath> is called
            an <em>isolated point</em> of <InlineMath>{'E'}</InlineMath>.
          </li>
          <li>
            <strong>(d) Closed:</strong> <InlineMath>{'E'}</InlineMath> is <em>closed</em> if every
            limit point of <InlineMath>{'E'}</InlineMath> is a point of{' '}
            <InlineMath>{'E'}</InlineMath>.
          </li>
          <li>
            <strong>(e) Interior Point:</strong> A point <InlineMath>{'p'}</InlineMath> is an{' '}
            <em>interior point</em> of <InlineMath>{'E'}</InlineMath> if there is a neighborhood{' '}
            <InlineMath>{'N'}</InlineMath> of <InlineMath>{'p'}</InlineMath> such that{' '}
            <InlineMath>{'N \\subset E'}</InlineMath>.
          </li>
          <li>
            <strong>(f) Open:</strong> <InlineMath>{'E'}</InlineMath> is <em>open</em> if every
            point of <InlineMath>{'E'}</InlineMath> is an interior point of{' '}
            <InlineMath>{'E'}</InlineMath>.
          </li>
          <li>
            <strong>(g) Complement:</strong> The <em>complement</em> of{' '}
            <InlineMath>{'E'}</InlineMath> (denoted by <InlineMath>{'E^c'}</InlineMath>) is the set
            of all points <InlineMath>{'p \\in X'}</InlineMath> such that{' '}
            <InlineMath>{'p \\notin E'}</InlineMath>.
          </li>
          <li>
            <strong>(h) Perfect:</strong> <InlineMath>{'E'}</InlineMath> is <em>perfect</em> if{' '}
            <InlineMath>{'E'}</InlineMath> is closed and if every point of{' '}
            <InlineMath>{'E'}</InlineMath> is a limit point of <InlineMath>{'E'}</InlineMath>.
          </li>
          <li>
            <strong>(i) Bounded:</strong> <InlineMath>{'E'}</InlineMath> is <em>bounded</em> if
            there is a real number <InlineMath>{'M'}</InlineMath> and a point{' '}
            <InlineMath>{'q \\in X'}</InlineMath> such that{' '}
            <InlineMath>{'d(p, q) < M'}</InlineMath> for all{' '}
            <InlineMath>{'p \\in E'}</InlineMath>.
          </li>
          <li>
            <strong>(j) Dense:</strong> <InlineMath>{'E'}</InlineMath> is <em>dense in X</em> if
            every point of <InlineMath>{'X'}</InlineMath> is a limit point of{' '}
            <InlineMath>{'E'}</InlineMath>, or a point of <InlineMath>{'E'}</InlineMath> (or both).
          </li>
        </ul>
      </Definition>

      <p className="my-4">
        Let us note that in <InlineMath>{'R^1'}</InlineMath> neighborhoods are segments, whereas in{' '}
        <InlineMath>{'R^2'}</InlineMath> neighborhoods are interiors of circles.
      </p>

      <Theorem
        title="2.19 Every Neighborhood is an Open Set"
        proof={
          <>
            <p>
              Consider a neighborhood <InlineMath>{'E = N_r(p)'}</InlineMath>, and let{' '}
              <InlineMath>{'q'}</InlineMath> be any point of <InlineMath>{'E'}</InlineMath>. Then
              there is a positive real number <InlineMath>{'h'}</InlineMath> such that
            </p>
            <MathBlock>{'d(p, q) = r - h.'}</MathBlock>
            <p className="mt-2">
              For all points <InlineMath>{'s'}</InlineMath> such that{' '}
              <InlineMath>{'d(q, s) < h'}</InlineMath>, we have then
            </p>
            <MathBlock>{'d(p, s) \\leq d(p, q) + d(q, s) < r - h + h = r,'}</MathBlock>
            <p className="mt-2">
              so that <InlineMath>{'s \\in E'}</InlineMath>. Thus{' '}
              <InlineMath>{'q'}</InlineMath> is an interior point of{' '}
              <InlineMath>{'E'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>Every neighborhood is an open set.</p>
      </Theorem>

      <Theorem
        title="2.20 Limit Points and Neighborhoods"
        proof={
          <>
            <p>
              Suppose there is a neighborhood <InlineMath>{'N'}</InlineMath> of{' '}
              <InlineMath>{'p'}</InlineMath> which contains only a finite number of points of{' '}
              <InlineMath>{'E'}</InlineMath>. Let <InlineMath>{'q_1, \\ldots, q_n'}</InlineMath> be
              those points of <InlineMath>{'N \\cap E'}</InlineMath>, which are distinct from{' '}
              <InlineMath>{'p'}</InlineMath>, and put
            </p>
            <MathBlock>{'r = \\min_{1 \\leq m \\leq n} d(p, q_m)'}</MathBlock>
            <p className="mt-2">
              [we use this notation to denote the smallest of the numbers{' '}
              <InlineMath>{'d(p, q_1), \\ldots, d(p, q_n)'}</InlineMath>]. The minimum of a finite
              set of positive numbers is clearly positive, so that{' '}
              <InlineMath>{'r > 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              The neighborhood <InlineMath>{'N_r(p)'}</InlineMath> contains no point{' '}
              <InlineMath>{'q'}</InlineMath> of <InlineMath>{'E'}</InlineMath> such that{' '}
              <InlineMath>{'q \\neq p'}</InlineMath>, so that <InlineMath>{'p'}</InlineMath> is not
              a limit point of <InlineMath>{'E'}</InlineMath>. This contradiction establishes the
              theorem.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'p'}</InlineMath> is a limit point of a set{' '}
          <InlineMath>{'E'}</InlineMath>, then every neighborhood of{' '}
          <InlineMath>{'p'}</InlineMath> contains infinitely many points of{' '}
          <InlineMath>{'E'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> A finite point set has no limit points.
      </p>

      <Example title="2.21 Examples of Subsets of R^2">
        <p>
          Let us consider the following subsets of <InlineMath>{'R^2'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>(a)</strong> The set of all complex <InlineMath>{'z'}</InlineMath> such that{' '}
            <InlineMath>{'|z| < 1'}</InlineMath>.
          </li>
          <li>
            <strong>(b)</strong> The set of all complex <InlineMath>{'z'}</InlineMath> such that{' '}
            <InlineMath>{'|z| \\leq 1'}</InlineMath>.
          </li>
          <li>
            <strong>(c)</strong> A nonempty finite set.
          </li>
          <li>
            <strong>(d)</strong> The set of all integers.
          </li>
          <li>
            <strong>(e)</strong> The set consisting of the numbers{' '}
            <InlineMath>{'1/n'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>).
            Let us note that this set <InlineMath>{'E'}</InlineMath> has a limit point (namely,{' '}
            <InlineMath>{'z = 0'}</InlineMath>) but that no point of <InlineMath>{'E'}</InlineMath>{' '}
            is a limit point of <InlineMath>{'E'}</InlineMath>; we wish to stress the difference
            between having a limit point and containing one.
          </li>
          <li>
            <strong>(f)</strong> The set of all complex numbers (that is,{' '}
            <InlineMath>{'R^2'}</InlineMath>).
          </li>
          <li>
            <strong>(g)</strong> The segment <InlineMath>{'(a, b)'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-2">
          Let us note that (d), (e), (g) can be regarded also as subsets of{' '}
          <InlineMath>{'R^1'}</InlineMath>. Some properties of these sets are tabulated below:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="px-4 py-2 text-left">Set</th>
                <th className="px-4 py-2 text-center">Closed</th>
                <th className="px-4 py-2 text-center">Open</th>
                <th className="px-4 py-2 text-center">Perfect</th>
                <th className="px-4 py-2 text-center">Bounded</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-700">
                <td className="px-4 py-2">(a)</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">Yes</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="px-4 py-2">(b)</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">Yes</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="px-4 py-2">(c)</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">Yes</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="px-4 py-2">(d)</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">No</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="px-4 py-2">(e)</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">Yes</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="px-4 py-2">(f)</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">Yes</td>
                <td className="px-4 py-2 text-center">No</td>
              </tr>
              <tr>
                <td className="px-4 py-2">(g)</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">*</td>
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-center">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-dark-400">
          In (g), we left the second entry blank. The reason is that the segment{' '}
          <InlineMath>{'(a, b)'}</InlineMath> is not open if we regard it as a subset of{' '}
          <InlineMath>{'R^2'}</InlineMath>, but it is an open subset of{' '}
          <InlineMath>{'R^1'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Open and Closed Sets</h3>

      <Theorem
        title="2.23 Open and Closed Complements"
        proof={
          <>
            <p>
              First, suppose <InlineMath>{'E^c'}</InlineMath> is closed. Choose{' '}
              <InlineMath>{'x \\in E'}</InlineMath>. Then{' '}
              <InlineMath>{'x \\notin E^c'}</InlineMath>, and <InlineMath>{'x'}</InlineMath> is
              not a limit point of <InlineMath>{'E^c'}</InlineMath>. Hence there exists a
              neighborhood <InlineMath>{'N'}</InlineMath> of <InlineMath>{'x'}</InlineMath> such
              that <InlineMath>{'E^c \\cap N'}</InlineMath> is empty, that is,{' '}
              <InlineMath>{'N \\subset E'}</InlineMath>. Thus <InlineMath>{'x'}</InlineMath> is an
              interior point of <InlineMath>{'E'}</InlineMath>, and <InlineMath>{'E'}</InlineMath>{' '}
              is open.
            </p>
            <p className="mt-2">
              Next, suppose <InlineMath>{'E'}</InlineMath> is open. Let{' '}
              <InlineMath>{'x'}</InlineMath> be a limit point of{' '}
              <InlineMath>{'E^c'}</InlineMath>. Then every neighborhood of{' '}
              <InlineMath>{'x'}</InlineMath> contains a point of{' '}
              <InlineMath>{'E^c'}</InlineMath>, so that <InlineMath>{'x'}</InlineMath> is not an
              interior point of <InlineMath>{'E'}</InlineMath>. Since{' '}
              <InlineMath>{'E'}</InlineMath> is open, this means that{' '}
              <InlineMath>{'x \\in E^c'}</InlineMath>. It follows that{' '}
              <InlineMath>{'E^c'}</InlineMath> is closed.
            </p>
          </>
        }
      >
        <p>
          A set <InlineMath>{'E'}</InlineMath> is open if and only if its complement is closed.
        </p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> A set <InlineMath>{'F'}</InlineMath> is closed if and only if
        its complement is open.
      </p>

      <Theorem
        title="2.24 Properties of Open and Closed Sets"
        proof={
          <>
            <p>
              <strong>(a)</strong> Put <InlineMath>{'G = \\bigcup_\\alpha G_\\alpha'}</InlineMath>.
              If <InlineMath>{'x \\in G'}</InlineMath>, then{' '}
              <InlineMath>{'x \\in G_\\alpha'}</InlineMath> for some{' '}
              <InlineMath>{'\\alpha'}</InlineMath>. Since <InlineMath>{'x'}</InlineMath> is an
              interior point of <InlineMath>{'G_\\alpha'}</InlineMath>,{' '}
              <InlineMath>{'x'}</InlineMath> is also an interior point of{' '}
              <InlineMath>{'G'}</InlineMath>, and <InlineMath>{'G'}</InlineMath> is open. This
              proves (a).
            </p>
            <p className="mt-2">
              By Theorem 2.22,
            </p>
            <MathBlock>{'\\left( \\bigcap_\\alpha F_\\alpha \\right)^c = \\bigcup_\\alpha (F_\\alpha^c),'}</MathBlock>
            <p className="mt-2">
              and <InlineMath>{'F_\\alpha^c'}</InlineMath> is open, by Theorem 2.23. Hence (a)
              implies that (21) is open so that{' '}
              <InlineMath>{'\\bigcap_\\alpha F_\\alpha'}</InlineMath> is closed. This proves (b).
            </p>
            <p className="mt-2">
              Next, put <InlineMath>{'H = \\bigcap_{i=1}^{n} G_i'}</InlineMath>. For any{' '}
              <InlineMath>{'x \\in H'}</InlineMath>, there exist neighborhoods{' '}
              <InlineMath>{'N_i'}</InlineMath> of <InlineMath>{'x'}</InlineMath>, with radii{' '}
              <InlineMath>{'r_i'}</InlineMath>, such that{' '}
              <InlineMath>{'N_i \\subset G_i'}</InlineMath> (
              <InlineMath>{'i = 1, \\ldots, n'}</InlineMath>). Put
            </p>
            <MathBlock>{'r = \\min(r_1, \\ldots, r_n),'}</MathBlock>
            <p className="mt-2">
              and let <InlineMath>{'N'}</InlineMath> be the neighborhood of{' '}
              <InlineMath>{'x'}</InlineMath> of radius <InlineMath>{'r'}</InlineMath>. Then{' '}
              <InlineMath>{'N \\subset G_i'}</InlineMath> for{' '}
              <InlineMath>{'i = 1, \\ldots, n'}</InlineMath>, so that{' '}
              <InlineMath>{'N \\subset H'}</InlineMath>, and <InlineMath>{'H'}</InlineMath> is
              open. By taking complements, (d) follows from (c).
            </p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>(a)</strong> For any collection{' '}
            <InlineMath>{'\\{G_\\alpha\\}'}</InlineMath> of open sets,{' '}
            <InlineMath>{'\\bigcup_\\alpha G_\\alpha'}</InlineMath> is open.
          </li>
          <li>
            <strong>(b)</strong> For any collection{' '}
            <InlineMath>{'\\{F_\\alpha\\}'}</InlineMath> of closed sets,{' '}
            <InlineMath>{'\\bigcap_\\alpha F_\\alpha'}</InlineMath> is closed.
          </li>
          <li>
            <strong>(c)</strong> For any finite collection{' '}
            <InlineMath>{'G_1, \\ldots, G_n'}</InlineMath> of open sets,{' '}
            <InlineMath>{'\\bigcap_{i=1}^{n} G_i'}</InlineMath> is open.
          </li>
          <li>
            <strong>(d)</strong> For any finite collection{' '}
            <InlineMath>{'F_1, \\ldots, F_n'}</InlineMath> of closed sets,{' '}
            <InlineMath>{'\\bigcup_{i=1}^{n} F_i'}</InlineMath> is closed.
          </li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Important:</strong> In parts (c) and (d) of Theorem 2.24, the finiteness of the
          collections is essential. For let <InlineMath>{'G_n'}</InlineMath> be the segment{' '}
          <InlineMath>{'(-1/n, 1/n)'}</InlineMath> (<InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>
          ). Then <InlineMath>{'G_n'}</InlineMath> is an open subset of{' '}
          <InlineMath>{'R^1'}</InlineMath>. Put{' '}
          <InlineMath>{'G = \\bigcap_{n=1}^{\\infty} G_n'}</InlineMath>. Then{' '}
          <InlineMath>{'G'}</InlineMath> consists of a single point (namely,{' '}
          <InlineMath>{'x = 0'}</InlineMath>) and is therefore not an open subset of{' '}
          <InlineMath>{'R^1'}</InlineMath>.
        </p>
        <p className="mt-2">
          Thus the intersection of an infinite collection of open sets need not be open. Similarly,
          the union of an infinite collection of closed sets need not be closed.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Closure of a Set</h3>

      <Definition title="2.26 Closure">
        <p>
          If <InlineMath>{'X'}</InlineMath> is a metric space, if{' '}
          <InlineMath>{'E \\subset X'}</InlineMath>, and if <InlineMath>{"E'"}</InlineMath>{' '}
          denotes the set of all limit points of <InlineMath>{'E'}</InlineMath> in{' '}
          <InlineMath>{'X'}</InlineMath>, then the <em>closure</em> of{' '}
          <InlineMath>{'E'}</InlineMath> is the set{' '}
          <InlineMath>{"\\bar{E} = E \\cup E'"}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="2.27 Properties of Closure"
        proof={
          <>
            <p>
              <strong>(a)</strong> If <InlineMath>{'p \\in X'}</InlineMath> and{' '}
              <InlineMath>{'p \\notin \\bar{E}'}</InlineMath> then{' '}
              <InlineMath>{'p'}</InlineMath> is neither a point of{' '}
              <InlineMath>{'E'}</InlineMath> nor a limit point of{' '}
              <InlineMath>{'E'}</InlineMath>. Hence <InlineMath>{'p'}</InlineMath> has a
              neighborhood which does not intersect <InlineMath>{'E'}</InlineMath>. The complement
              of <InlineMath>{'\\bar{E}'}</InlineMath> is therefore open. Hence{' '}
              <InlineMath>{'\\bar{E}'}</InlineMath> is closed.
            </p>
            <p className="mt-2">
              <strong>(b)</strong> If <InlineMath>{'E = \\bar{E}'}</InlineMath>, (a) implies that{' '}
              <InlineMath>{'E'}</InlineMath> is closed. If <InlineMath>{'E'}</InlineMath> is
              closed, then <InlineMath>{"E' \\subset E"}</InlineMath> [by Definitions 2.18(d) and
              2.26], hence <InlineMath>{'\\bar{E} = E'}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>(c)</strong> If <InlineMath>{'F'}</InlineMath> is closed and{' '}
              <InlineMath>{'F \\supset E'}</InlineMath>, then{' '}
              <InlineMath>{"F \\supset F'"}</InlineMath>, hence{' '}
              <InlineMath>{"F \\supset E'"}</InlineMath>. Thus{' '}
              <InlineMath>{'F \\supset \\bar{E}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'X'}</InlineMath> is a metric space and{' '}
          <InlineMath>{'E \\subset X'}</InlineMath>, then
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>(a)</strong> <InlineMath>{'\\bar{E}'}</InlineMath> is closed,
          </li>
          <li>
            <strong>(b)</strong> <InlineMath>{'E = \\bar{E}'}</InlineMath> if and only if{' '}
            <InlineMath>{'E'}</InlineMath> is closed,
          </li>
          <li>
            <strong>(c)</strong> <InlineMath>{'\\bar{E} \\subset F'}</InlineMath> for every closed
            set <InlineMath>{'F \\subset X'}</InlineMath> such that{' '}
            <InlineMath>{'E \\subset F'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-2">
          By (a) and (c), <InlineMath>{'\\bar{E}'}</InlineMath> is the <em>smallest</em> closed
          subset of <InlineMath>{'X'}</InlineMath> that contains{' '}
          <InlineMath>{'E'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="2.28 Closure and Supremum"
        proof={
          <>
            <p>
              If <InlineMath>{'y \\in E'}</InlineMath> then{' '}
              <InlineMath>{'y \\in \\bar{E}'}</InlineMath>. Assume{' '}
              <InlineMath>{'y \\notin E'}</InlineMath>. Assume{' '}
              <InlineMath>{'y \\notin \\bar{E}'}</InlineMath>. For every{' '}
              <InlineMath>{'h > 0'}</InlineMath> there exists then a point{' '}
              <InlineMath>{'x \\in E'}</InlineMath> such that{' '}
              <InlineMath>{'y - h < x < y'}</InlineMath>, for otherwise{' '}
              <InlineMath>{'y - h'}</InlineMath> would be an upper bound of{' '}
              <InlineMath>{'E'}</InlineMath>. Thus <InlineMath>{'y'}</InlineMath> is a limit point
              of <InlineMath>{'E'}</InlineMath>. Hence{' '}
              <InlineMath>{'y \\in \\bar{E}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'E'}</InlineMath> be a nonempty set of real numbers which is bounded
          above. Let <InlineMath>{'y = \\sup E'}</InlineMath>. Then{' '}
          <InlineMath>{'y \\in \\bar{E}'}</InlineMath>. Hence{' '}
          <InlineMath>{'y \\in E'}</InlineMath> if <InlineMath>{'E'}</InlineMath> is closed.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">
        The key concepts introduced in this section are:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Metric space:</strong> A set with a distance function satisfying positivity,
          symmetry, and the triangle inequality
        </li>
        <li>
          <strong>Neighborhoods:</strong> Open balls <InlineMath>{'N_r(p)'}</InlineMath> around a
          point
        </li>
        <li>
          <strong>Open sets:</strong> Every point is an interior point
        </li>
        <li>
          <strong>Closed sets:</strong> Contains all its limit points (equivalently, complement is
          open)
        </li>
        <li>
          <strong>Closure:</strong> The smallest closed set containing{' '}
          <InlineMath>{'E'}</InlineMath>, namely{' '}
          <InlineMath>{"\\bar{E} = E \\cup E'"}</InlineMath>
        </li>
      </ul>
    </LessonLayout>
  );
}
