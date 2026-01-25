import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section106() {
  return (
    <LessonLayout sectionId={106}>
      <h2>Open Connected Sets and Independence of Path</h2>

      <p>
        The concept of path independence is central to the theory of line integrals.
        We begin by defining the type of sets on which path independence makes sense.
      </p>

      <h3>Connected Sets</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>S</InlineMath> be an open set in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>. The set <InlineMath>S</InlineMath>{' '}
        is called <strong>connected</strong> if every pair of points in{' '}
        <InlineMath>S</InlineMath> can be joined by a piecewise smooth path whose
        graph lies in <InlineMath>S</InlineMath>.
        <br /><br />
        That is, for every pair of points <InlineMath>\mathbf{a}</InlineMath> and{' '}
        <InlineMath>\mathbf{b}</InlineMath> in <InlineMath>S</InlineMath>, there is a
        piecewise smooth path <InlineMath>\alpha</InlineMath> defined on an interval{' '}
        <InlineMath>[a, b]</InlineMath> such that{' '}
        <InlineMath>{'\alpha(t) \\in S'}</InlineMath> for each{' '}
        <InlineMath>t</InlineMath> in <InlineMath>[a, b]</InlineMath>, with{' '}
        <InlineMath>{'\alpha(a) = \\mathbf{a}'}</InlineMath> and{' '}
        <InlineMath>{'\alpha(b) = \\mathbf{b}'}</InlineMath>.
      </Callout>

      <h3>Examples of Open Connected Sets</h3>

      <p>
        Three examples of open connected sets in the plane are:
      </p>
      <ul>
        <li>The interior of an ellipse</li>
        <li>The interior of a polygon</li>
        <li>The interior of a torus (annular region)</li>
      </ul>

      <p>
        Examples in 3-space analogous to these would be a solid ellipsoid, a solid
        polyhedron, and a solid torus (in each case only the interior points).
      </p>

      <Callout type="info">
        <strong>Definition:</strong> An open set <InlineMath>S</InlineMath> is said
        to be <strong>disconnected</strong> if <InlineMath>S</InlineMath> is the union
        of two or more disjoint nonempty open sets.
        <br /><br />
        It can be shown that the class of open connected sets is identical with the
        class of open sets that are not disconnected.
      </Callout>

      <h3>Independence of the Path</h3>

      <p>
        Now let <InlineMath>f</InlineMath> be a vector field that is continuous on an
        open connected set <InlineMath>S</InlineMath>. Choose two points{' '}
        <InlineMath>\mathbf{a}</InlineMath> and <InlineMath>\mathbf{b}</InlineMath>{' '}
        in <InlineMath>S</InlineMath> and consider the line integral of{' '}
        <InlineMath>f</InlineMath> from <InlineMath>\mathbf{a}</InlineMath> to{' '}
        <InlineMath>\mathbf{b}</InlineMath> along some piecewise smooth path in{' '}
        <InlineMath>S</InlineMath>.
      </p>

      <p>
        The value of the integral depends, in general, on the path joining{' '}
        <InlineMath>\mathbf{a}</InlineMath> to <InlineMath>\mathbf{b}</InlineMath>.
        However, for some vector fields, the integral depends only on the end points
        and not on the path which joins them.
      </p>

      <Callout type="info">
        <strong>Definitions:</strong>
        <br /><br />
        We say the integral is <strong>independent of the path from{' '}
        <InlineMath>\mathbf{a}</InlineMath> to <InlineMath>\mathbf{b}</InlineMath></strong>{' '}
        if it has the same value for all piecewise smooth paths in{' '}
        <InlineMath>S</InlineMath> joining <InlineMath>\mathbf{a}</InlineMath> to{' '}
        <InlineMath>\mathbf{b}</InlineMath>.
        <br /><br />
        We say the line integral of <InlineMath>f</InlineMath> is{' '}
        <strong>independent of the path in <InlineMath>S</InlineMath></strong> if it
        is independent of the path from <InlineMath>\mathbf{a}</InlineMath> to{' '}
        <InlineMath>\mathbf{b}</InlineMath> for every pair of points{' '}
        <InlineMath>\mathbf{a}</InlineMath> and <InlineMath>\mathbf{b}</InlineMath>{' '}
        in <InlineMath>S</InlineMath>.
      </Callout>

      <h3>The Central Question</h3>

      <p>
        The key question in the theory of line integrals is:
      </p>

      <p style={{ fontStyle: 'italic', marginLeft: '20px' }}>
        Which vector fields have line integrals independent of the path?
      </p>

      <p>
        To answer this question, we will extend the first and second fundamental
        theorems of calculus to line integrals. The answer turns out to be:{' '}
        <strong>exactly the gradient fields</strong> (under appropriate conditions).
      </p>

      <h3>Preview of Main Results</h3>

      <p>
        We will prove that for a continuous vector field <InlineMath>f</InlineMath>{' '}
        on an open connected set <InlineMath>S</InlineMath>, the following are
        equivalent:
      </p>
      <ol>
        <li>
          <InlineMath>f</InlineMath> is the gradient of some potential function in{' '}
          <InlineMath>S</InlineMath>
        </li>
        <li>
          The line integral of <InlineMath>f</InlineMath> is independent of the path
          in <InlineMath>S</InlineMath>
        </li>
        <li>
          The line integral of <InlineMath>f</InlineMath> is zero around every
          piecewise smooth closed path in <InlineMath>S</InlineMath>
        </li>
      </ol>

      <Callout type="success">
        <strong>Key Insight:</strong> Path independence is a geometric property that
        characterizes gradient fields. A vector field has path-independent line
        integrals if and only if it is a gradient. This connects the algebraic
        condition (being a gradient) with the geometric condition (path independence)
        and the topological condition (zero circulation around closed paths).
      </Callout>
    </LessonLayout>
  );
}
