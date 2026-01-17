import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Some Point-Set Topology of Metric Spaces</h2>

      <p className="mb-4">
        Having defined the operation of convergence on metric spaces, we now define a couple
        other related notions, including that of open set, closed set, interior, exterior,
        boundary, and adherent point. The study of such notions is known as{' '}
        <strong>point-set topology</strong>.
      </p>

      <Definition title="Metric Ball">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, let{' '}
          <InlineMath>x_0</InlineMath> be a point in <InlineMath>X</InlineMath>, and let{' '}
          <InlineMath>{`r > 0`}</InlineMath>. We define the <strong>ball</strong>{' '}
          <InlineMath>{`B_{(X,d)}(x_0, r)`}</InlineMath> in <InlineMath>X</InlineMath>,
          centered at <InlineMath>x_0</InlineMath>, and with radius <InlineMath>r</InlineMath>,
          in the metric <InlineMath>d</InlineMath>, to be the set:
        </p>
        <MathBlock>
          {`B_{(X,d)}(x_0, r) := \\{x \\in X : d(x, x_0) < r\\}`}
        </MathBlock>
      </Definition>

      <Example title="Balls in Different Metrics">
        <p className="mb-3">
          In <InlineMath>{`\\mathbf{R}^2`}</InlineMath> with different metrics, the ball
          centered at <InlineMath>(0,0)</InlineMath> with radius 1 looks different:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Euclidean metric:</strong> An open disc{' '}
            <InlineMath>{`\\{(x,y) : x^2 + y^2 < 1\\}`}</InlineMath>
          </li>
          <li>
            <strong>Taxicab metric:</strong> A diamond{' '}
            <InlineMath>{`\\{(x,y) : |x| + |y| < 1\\}`}</InlineMath>
          </li>
          <li>
            <strong>Discrete metric:</strong> Just the single point{' '}
            <InlineMath>{`\\{(0,0)\\}`}</InlineMath>
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interior, Exterior, and Boundary</h3>

      <Definition title="Interior, Exterior, and Boundary Points">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>, and let{' '}
          <InlineMath>x_0</InlineMath> be a point in <InlineMath>X</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>x_0</InlineMath> is an <strong>interior point</strong> of{' '}
            <InlineMath>E</InlineMath> if there exists <InlineMath>{`r > 0`}</InlineMath> such
            that <InlineMath>{`B(x_0, r) \\subseteq E`}</InlineMath>
          </li>
          <li>
            <InlineMath>x_0</InlineMath> is an <strong>exterior point</strong> of{' '}
            <InlineMath>E</InlineMath> if there exists <InlineMath>{`r > 0`}</InlineMath> such
            that <InlineMath>{`B(x_0, r) \\cap E = \\emptyset`}</InlineMath>
          </li>
          <li>
            <InlineMath>x_0</InlineMath> is a <strong>boundary point</strong> of{' '}
            <InlineMath>E</InlineMath> if it is neither an interior point nor an exterior point
          </li>
        </ul>
        <p className="mt-3">
          The set of all interior points is denoted <InlineMath>{`\\text{int}(E)`}</InlineMath>,
          the set of exterior points is <InlineMath>{`\\text{ext}(E)`}</InlineMath>,
          and the boundary is <InlineMath>{`\\partial E`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Half-Open Interval">
        <p>
          Consider the half-open interval <InlineMath>{`E = [1, 2)`}</InlineMath> in{' '}
          <InlineMath>{`\\mathbf{R}`}</InlineMath> with the standard metric:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`\\text{int}(E) = (1, 2)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\text{ext}(E) = (-\\infty, 1) \\cup (2, \\infty)`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\partial E = \\{1, 2\\}`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2 text-dark-400">
          Note that 1 is a boundary point in <InlineMath>E</InlineMath>, while 2 is a
          boundary point not in <InlineMath>E</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Closure and Adherent Points</h3>

      <Definition title="Closure">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>, and let{' '}
          <InlineMath>x_0</InlineMath> be a point in <InlineMath>X</InlineMath>. We say that{' '}
          <InlineMath>x_0</InlineMath> is an <strong>adherent point</strong> of{' '}
          <InlineMath>E</InlineMath> if for every radius <InlineMath>{`r > 0`}</InlineMath>,
          the ball <InlineMath>{`B(x_0, r)`}</InlineMath> has a non-empty intersection with{' '}
          <InlineMath>E</InlineMath>. The set of all adherent points of{' '}
          <InlineMath>E</InlineMath> is called the <strong>closure</strong> of{' '}
          <InlineMath>E</InlineMath> and is denoted <InlineMath>{`\\overline{E}`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Characterization of Adherent Points">
        <p>
          The following are equivalent for a point <InlineMath>x_0</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>x_0</InlineMath> is an adherent point of <InlineMath>E</InlineMath>
          </li>
          <li>
            <InlineMath>x_0</InlineMath> is either an interior point or a boundary point of{' '}
            <InlineMath>E</InlineMath>
          </li>
          <li>
            There exists a sequence <InlineMath>{`(x_n)_{n=1}^{\\infty}`}</InlineMath> in{' '}
            <InlineMath>E</InlineMath> which converges to <InlineMath>x_0</InlineMath>
          </li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Open and Closed Sets</h3>

      <Definition title="Open and Closed Sets">
        <p>
          Let <InlineMath>(X, d)</InlineMath> be a metric space, and let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>E</InlineMath> is <strong>closed</strong> if it contains all of its
            boundary points: <InlineMath>{`\\partial E \\subseteq E`}</InlineMath>
          </li>
          <li>
            <InlineMath>E</InlineMath> is <strong>open</strong> if it contains none of its
            boundary points: <InlineMath>{`\\partial E \\cap E = \\emptyset`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Callout type="warning" title="Open and Closed Are Not Opposites">
        <p>
          A set can be:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Open but not closed (e.g., <InlineMath>(0, 1)</InlineMath>)</li>
          <li>Closed but not open (e.g., <InlineMath>[0, 1]</InlineMath>)</li>
          <li>Both open and closed (e.g., <InlineMath>\\emptyset</InlineMath> and <InlineMath>X</InlineMath>)</li>
          <li>Neither open nor closed (e.g., <InlineMath>[0, 1)</InlineMath>)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Properties of Open and Closed Sets</h3>

      <Definition title="Basic Properties">
        <p>Let <InlineMath>(X, d)</InlineMath> be a metric space.</p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>E</InlineMath> is open iff <InlineMath>{`E = \\text{int}(E)`}</InlineMath>
          </li>
          <li>
            <InlineMath>E</InlineMath> is closed iff <InlineMath>E</InlineMath> contains all
            its adherent points (i.e., <InlineMath>{`E = \\overline{E}`}</InlineMath>)
          </li>
          <li>
            For any <InlineMath>{`x_0 \\in X`}</InlineMath> and <InlineMath>{`r > 0`}</InlineMath>,
            the ball <InlineMath>{`B(x_0, r)`}</InlineMath> is open
          </li>
          <li>
            <InlineMath>E</InlineMath> is open iff <InlineMath>{`X \\setminus E`}</InlineMath> is closed
          </li>
          <li>
            Finite intersections of open sets are open; arbitrary unions of open sets are open
          </li>
          <li>
            Finite unions of closed sets are closed; arbitrary intersections of closed sets are closed
          </li>
        </ul>
      </Definition>
    </LessonLayout>
  );
}
