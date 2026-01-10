import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2 className="text-2xl font-semibold mb-4">Continuous Functions</h2>

      <p className="mb-4">
        We now turn to the central concept of this chapter: continuity. The definition of continuous
        functions given here is a natural extension of the concept of limit.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Definition of Continuity</h3>

      <Definition title="4.5 Continuity at a Point">
        <p>
          Suppose <InlineMath>{'X'}</InlineMath> and <InlineMath>{'Y'}</InlineMath> are metric spaces,{' '}
          <InlineMath>{'E \\subset X'}</InlineMath>, <InlineMath>{'p \\in E'}</InlineMath>, and{' '}
          <InlineMath>{'f'}</InlineMath> maps <InlineMath>{'E'}</InlineMath> into{' '}
          <InlineMath>{'Y'}</InlineMath>. Then <InlineMath>{'f'}</InlineMath> is said to be{' '}
          <em>continuous at</em> <InlineMath>{'p'}</InlineMath> if for every{' '}
          <InlineMath>{'\\varepsilon > 0'}</InlineMath> there exists a{' '}
          <InlineMath>{'\\delta > 0'}</InlineMath> such that
        </p>
        <MathBlock>{'d_Y(f(x), f(p)) < \\varepsilon'}</MathBlock>
        <p>
          for all points <InlineMath>{'x \\in E'}</InlineMath> for which{' '}
          <InlineMath>{'d_X(x, p) < \\delta'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{'f'}</InlineMath> is continuous at every point of{' '}
          <InlineMath>{'E'}</InlineMath>, then <InlineMath>{'f'}</InlineMath> is said to be{' '}
          <em>continuous on</em> <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <p className="my-4">
        It should be noted that <InlineMath>{'f'}</InlineMath> has to be defined at the point{' '}
        <InlineMath>{'p'}</InlineMath> in order to be continuous at <InlineMath>{'p'}</InlineMath>.
        (Compare this with the remark following Definition 4.1.)
      </p>

      <p className="my-4">
        If <InlineMath>{'p'}</InlineMath> is an isolated point of <InlineMath>{'E'}</InlineMath>,
        then our definition implies that every function <InlineMath>{'f'}</InlineMath> which has{' '}
        <InlineMath>{'E'}</InlineMath> as its domain of definition is continuous at{' '}
        <InlineMath>{'p'}</InlineMath>. For, no matter which <InlineMath>{'\\varepsilon > 0'}</InlineMath>{' '}
        we choose, we can pick <InlineMath>{'\\delta > 0'}</InlineMath> so that the only point{' '}
        <InlineMath>{'x \\in E'}</InlineMath> for which{' '}
        <InlineMath>{'d_X(x, p) < \\delta'}</InlineMath> is <InlineMath>{'x = p'}</InlineMath>; then
      </p>
      <MathBlock>{'d_Y(f(x), f(p)) = 0 < \\varepsilon.'}</MathBlock>

      <Theorem title="4.6 Continuity via Limits">
        <p>
          In the situation given in Definition 4.5, assume also that <InlineMath>{'p'}</InlineMath>{' '}
          is a limit point of <InlineMath>{'E'}</InlineMath>. Then{' '}
          <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'p'}</InlineMath> if and
          only if <InlineMath>{'\\lim_{x \\to p} f(x) = f(p)'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        <em>Proof:</em> This is clear if we compare Definitions 4.1 and 4.5.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Composition of Continuous Functions</h3>

      <p className="my-4">
        We now turn to compositions of functions. A brief statement of the following theorem is
        that a continuous function of a continuous function is continuous.
      </p>

      <Theorem
        title="4.7 Continuity of Compositions"
        proof={
          <>
            <p>
              Let <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given. Since{' '}
              <InlineMath>{'g'}</InlineMath> is continuous at <InlineMath>{'f(p)'}</InlineMath>,
              there exists <InlineMath>{'\\eta > 0'}</InlineMath> such that
            </p>
            <MathBlock>{'d_Z(g(y), g(f(p))) < \\varepsilon \\text{ if } d_Y(y, f(p)) < \\eta \\text{ and } y \\in f(E).'}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'p'}</InlineMath>,
              there exists <InlineMath>{'\\delta > 0'}</InlineMath> such that
            </p>
            <MathBlock>{'d_Y(f(x), f(p)) < \\eta \\text{ if } d_X(x, p) < \\delta \\text{ and } x \\in E.'}</MathBlock>
            <p className="mt-2">It follows that</p>
            <MathBlock>{'d_Z(h(x), h(p)) = d_Z(g(f(x)), g(f(p))) < \\varepsilon'}</MathBlock>
            <p>
              if <InlineMath>{'d_X(x, p) < \\delta'}</InlineMath> and{' '}
              <InlineMath>{'x \\in E'}</InlineMath>. Thus <InlineMath>{'h'}</InlineMath> is
              continuous at <InlineMath>{'p'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'X'}</InlineMath>, <InlineMath>{'Y'}</InlineMath>,{' '}
          <InlineMath>{'Z'}</InlineMath> are metric spaces, <InlineMath>{'E \\subset X'}</InlineMath>,{' '}
          <InlineMath>{'f'}</InlineMath> maps <InlineMath>{'E'}</InlineMath> into{' '}
          <InlineMath>{'Y'}</InlineMath>, <InlineMath>{'g'}</InlineMath> maps the range of{' '}
          <InlineMath>{'f'}</InlineMath>, <InlineMath>{'f(E)'}</InlineMath>, into{' '}
          <InlineMath>{'Z'}</InlineMath>, and <InlineMath>{'h'}</InlineMath> is the mapping of{' '}
          <InlineMath>{'E'}</InlineMath> into <InlineMath>{'Z'}</InlineMath> defined by
        </p>
        <MathBlock>{'h(x) = g(f(x)) \\quad (x \\in E).'}</MathBlock>
        <p>
          If <InlineMath>{'f'}</InlineMath> is continuous at a point{' '}
          <InlineMath>{'p \\in E'}</InlineMath> and if <InlineMath>{'g'}</InlineMath> is
          continuous at the point <InlineMath>{'f(p)'}</InlineMath>, then{' '}
          <InlineMath>{'h'}</InlineMath> is continuous at <InlineMath>{'p'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        This function <InlineMath>{'h'}</InlineMath> is called the <em>composition</em> or the{' '}
        <em>composite</em> of <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath>. The
        notation
      </p>
      <MathBlock>{'h = g \\circ f'}</MathBlock>
      <p className="my-4">is frequently used in this context.</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Characterization via Open Sets</h3>

      <Theorem
        title="4.8 Continuity via Inverse Images of Open Sets"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'f'}</InlineMath> is continuous on{' '}
              <InlineMath>{'X'}</InlineMath> and <InlineMath>{'V'}</InlineMath> is an open set in{' '}
              <InlineMath>{'Y'}</InlineMath>. We have to show that every point of{' '}
              <InlineMath>{'f^{-1}(V)'}</InlineMath> is an interior point of{' '}
              <InlineMath>{'f^{-1}(V)'}</InlineMath>. So, suppose{' '}
              <InlineMath>{'p \\in X'}</InlineMath> and <InlineMath>{'f(p) \\in V'}</InlineMath>.
              Since <InlineMath>{'V'}</InlineMath> is open, there exists{' '}
              <InlineMath>{'\\varepsilon > 0'}</InlineMath> such that{' '}
              <InlineMath>{'y \\in V'}</InlineMath> if{' '}
              <InlineMath>{'d_Y(f(p), y) < \\varepsilon'}</InlineMath>; and since{' '}
              <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'p'}</InlineMath>, there
              exists <InlineMath>{'\\delta > 0'}</InlineMath> such that{' '}
              <InlineMath>{'d_Y(f(x), f(p)) < \\varepsilon'}</InlineMath> if{' '}
              <InlineMath>{'d_X(x, p) < \\delta'}</InlineMath>. Thus{' '}
              <InlineMath>{'x \\in f^{-1}(V)'}</InlineMath> as soon as{' '}
              <InlineMath>{'d_X(x, p) < \\delta'}</InlineMath>.
            </p>
            <p className="mt-2">
              Conversely, suppose <InlineMath>{'f^{-1}(V)'}</InlineMath> is open in{' '}
              <InlineMath>{'X'}</InlineMath> for every open set <InlineMath>{'V'}</InlineMath> in{' '}
              <InlineMath>{'Y'}</InlineMath>. Fix <InlineMath>{'p \\in X'}</InlineMath> and{' '}
              <InlineMath>{'\\varepsilon > 0'}</InlineMath>, let <InlineMath>{'V'}</InlineMath> be
              the set of all <InlineMath>{'y \\in Y'}</InlineMath> such that{' '}
              <InlineMath>{'d_Y(y, f(p)) < \\varepsilon'}</InlineMath>. Then{' '}
              <InlineMath>{'V'}</InlineMath> is open; hence <InlineMath>{'f^{-1}(V)'}</InlineMath>{' '}
              is open; hence there exists <InlineMath>{'\\delta > 0'}</InlineMath> such that{' '}
              <InlineMath>{'x \\in f^{-1}(V)'}</InlineMath> if{' '}
              <InlineMath>{'d_X(p, x) < \\delta'}</InlineMath>. But if{' '}
              <InlineMath>{'x \\in f^{-1}(V)'}</InlineMath>, then{' '}
              <InlineMath>{'f(x) \\in V'}</InlineMath>, so that{' '}
              <InlineMath>{'d_Y(f(x), f(p)) < \\varepsilon'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          A mapping <InlineMath>{'f'}</InlineMath> of a metric space{' '}
          <InlineMath>{'X'}</InlineMath> into a metric space <InlineMath>{'Y'}</InlineMath> is
          continuous on <InlineMath>{'X'}</InlineMath> if and only if{' '}
          <InlineMath>{'f^{-1}(V)'}</InlineMath> is open in <InlineMath>{'X'}</InlineMath> for
          every open set <InlineMath>{'V'}</InlineMath> in <InlineMath>{'Y'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> A mapping <InlineMath>{'f'}</InlineMath> of a metric space{' '}
        <InlineMath>{'X'}</InlineMath> into a metric space <InlineMath>{'Y'}</InlineMath> is
        continuous if and only if <InlineMath>{'f^{-1}(C)'}</InlineMath> is closed in{' '}
        <InlineMath>{'X'}</InlineMath> for every closed set <InlineMath>{'C'}</InlineMath> in{' '}
        <InlineMath>{'Y'}</InlineMath>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Algebra of Continuous Functions</h3>

      <Theorem title="4.9 Algebraic Operations on Continuous Functions">
        <p>
          Let <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> be complex
          continuous functions on a metric space <InlineMath>{'X'}</InlineMath>. Then{' '}
          <InlineMath>{'f + g'}</InlineMath>, <InlineMath>{'fg'}</InlineMath>, and{' '}
          <InlineMath>{'f/g'}</InlineMath> are continuous on <InlineMath>{'X'}</InlineMath>.
        </p>
        <p className="mt-2">
          In the last case, we must of course assume that{' '}
          <InlineMath>{'g(x) \\neq 0'}</InlineMath>, for all <InlineMath>{'x \\in X'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="4.10 Vector-valued Functions and Components">
        <p>
          (a) Let <InlineMath>{'f_1, \\ldots, f_k'}</InlineMath> be real functions on a metric space{' '}
          <InlineMath>{'X'}</InlineMath>, and let <InlineMath>{'\\mathbf{f}'}</InlineMath> be the
          mapping of <InlineMath>{'X'}</InlineMath> into <InlineMath>{'R^k'}</InlineMath> defined by
        </p>
        <MathBlock>{'\\mathbf{f}(x) = (f_1(x), \\ldots, f_k(x)) \\quad (x \\in X);'}</MathBlock>
        <p>
          then <InlineMath>{'\\mathbf{f}'}</InlineMath> is continuous if and only if each of the
          functions <InlineMath>{'f_1, \\ldots, f_k'}</InlineMath> is continuous.
        </p>
        <p className="mt-2">
          (b) If <InlineMath>{'\\mathbf{f}'}</InlineMath> and <InlineMath>{'\\mathbf{g}'}</InlineMath>{' '}
          are continuous mappings of <InlineMath>{'X'}</InlineMath> into{' '}
          <InlineMath>{'R^k'}</InlineMath>, then{' '}
          <InlineMath>{'\\mathbf{f} + \\mathbf{g}'}</InlineMath> and{' '}
          <InlineMath>{'\\mathbf{f} \\cdot \\mathbf{g}'}</InlineMath> are continuous on{' '}
          <InlineMath>{'X'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="4.11 Coordinate Functions">
        <p>
          If <InlineMath>{'x_1, \\ldots, x_k'}</InlineMath> are the coordinates of the point{' '}
          <InlineMath>{'\\mathbf{x} \\in R^k'}</InlineMath>, the functions{' '}
          <InlineMath>{'\\phi_i'}</InlineMath> defined by
        </p>
        <MathBlock>{'\\phi_i(\\mathbf{x}) = x_i \\quad (\\mathbf{x} \\in R^k)'}</MathBlock>
        <p>
          are continuous on <InlineMath>{'R^k'}</InlineMath>, since the inequality
        </p>
        <MathBlock>{'|\\phi_i(\\mathbf{x}) - \\phi_i(\\mathbf{y})| \\leq |\\mathbf{x} - \\mathbf{y}|'}</MathBlock>
        <p>
          shows that we may take <InlineMath>{'\\delta = \\varepsilon'}</InlineMath> in Definition
          4.5. The functions <InlineMath>{'\\phi_i'}</InlineMath> are sometimes called the{' '}
          <em>coordinate functions</em>.
        </p>
      </Example>

      <Callout type="info">
        <p>
          <strong>Remark 4.12:</strong> We defined the notion of continuity for functions defined on
          a subset <InlineMath>{'E'}</InlineMath> of a metric space <InlineMath>{'X'}</InlineMath>.
          However, the complement of <InlineMath>{'E'}</InlineMath> in{' '}
          <InlineMath>{'X'}</InlineMath> plays no role whatever in this definition. Accordingly, we
          lose nothing by discarding the complement of the domain of <InlineMath>{'f'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Definition 4.5 defines continuity at a point using the{' '}
          <InlineMath>{'\\varepsilon'}</InlineMath>-<InlineMath>{'\\delta'}</InlineMath> formulation
        </li>
        <li>
          Theorem 4.6: <InlineMath>{'f'}</InlineMath> is continuous at{' '}
          <InlineMath>{'p'}</InlineMath> iff{' '}
          <InlineMath>{'\\lim_{x \\to p} f(x) = f(p)'}</InlineMath>
        </li>
        <li>Theorem 4.7: The composition of continuous functions is continuous</li>
        <li>
          Theorem 4.8: Continuity is equivalent to inverse images of open sets being open
        </li>
        <li>
          Theorem 4.10: A vector-valued function is continuous iff all its components are continuous
        </li>
      </ul>
    </LessonLayout>
  );
}
