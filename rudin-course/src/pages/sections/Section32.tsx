import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <h2 className="text-2xl font-semibold mb-4">Monotonic Functions</h2>

      <p className="mb-4">
        Monotonic functions have especially nice properties regarding continuity. In particular,
        their discontinuities are always of a simple type (jumps), and there can be at most
        countably many of them. This section establishes these fundamental results.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Definition of Monotonicity</h3>

      <Definition title="4.28 Monotonic Function">
        <p>
          Let <InlineMath>f</InlineMath> be real on <InlineMath>{'(a, b)'}</InlineMath>. Then{' '}
          <InlineMath>f</InlineMath> is said to be <em>monotonically increasing</em> on{' '}
          <InlineMath>{'(a, b)'}</InlineMath> if <InlineMath>{'a < x < y < b'}</InlineMath> implies{' '}
          <InlineMath>{'f(x) \\leq f(y)'}</InlineMath>.
        </p>
        <p className="mt-2">
          If the last inequality is replaced by <InlineMath>{'f(x) \\geq f(y)'}</InlineMath>, we
          obtain the definition of a <em>monotonically decreasing</em> function. The class of
          monotonic functions consists of both the increasing and the decreasing functions.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">One-Sided Limits of Monotonic Functions</h3>

      <Theorem
        title="4.29 One-Sided Limits Exist"
        proof={
          <>
            <p>
              Suppose <InlineMath>f</InlineMath> is monotonically increasing on{' '}
              <InlineMath>{'(a, b)'}</InlineMath>. Let <InlineMath>{'x \\in (a, b)'}</InlineMath>.
              Consider the set
            </p>
            <MathBlock>{'A = \\{f(t) : a < t < x\\}.'}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>f</InlineMath> is monotonically increasing,{' '}
              <InlineMath>{'f(t) \\leq f(x)'}</InlineMath> for all{' '}
              <InlineMath>{'t < x'}</InlineMath>. Thus <InlineMath>A</InlineMath> is bounded
              above by <InlineMath>{'f(x)'}</InlineMath>, and so{' '}
              <InlineMath>{'\\sup A'}</InlineMath> exists.
            </p>
            <p className="mt-2">
              Put <InlineMath>{'L = \\sup A'}</InlineMath>. We claim{' '}
              <InlineMath>{'f(x-) = L'}</InlineMath>. Given{' '}
              <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there exists{' '}
              <InlineMath>{'t_0 < x'}</InlineMath> with{' '}
              <InlineMath>{'L - \\varepsilon < f(t_0) \\leq L'}</InlineMath>. For{' '}
              <InlineMath>{'t_0 < t < x'}</InlineMath>, monotonicity gives{' '}
              <InlineMath>{'L - \\varepsilon < f(t_0) \\leq f(t) \\leq L'}</InlineMath>. Taking{' '}
              <InlineMath>{'\\delta = x - t_0'}</InlineMath> completes the proof.
            </p>
            <p className="mt-2">
              The proof for <InlineMath>{'f(x+)'}</InlineMath> is similar, using{' '}
              <InlineMath>{'\\inf \\{f(t) : x < t < b\\}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>f</InlineMath> be monotonically increasing on{' '}
          <InlineMath>{'(a, b)'}</InlineMath>. Then <InlineMath>{'f(x+)'}</InlineMath> and{' '}
          <InlineMath>{'f(x-)'}</InlineMath> exist at every point{' '}
          <InlineMath>{'x \\in (a, b)'}</InlineMath>. More precisely,
        </p>
        <MathBlock>{'\\sup_{a < t < x} f(t) = f(x-) \\leq f(x) \\leq f(x+) = \\inf_{x < t < b} f(t).'}</MathBlock>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Corollary:</strong> Monotonic functions can have only simple discontinuities
          (discontinuities of the first kind). This is because both one-sided limits always exist.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Countability of Discontinuities</h3>

      <Theorem
        title="4.30 At Most Countably Many Discontinuities"
        proof={
          <>
            <p>
              Let <InlineMath>f</InlineMath> be monotonically increasing on{' '}
              <InlineMath>{'(a, b)'}</InlineMath>. By Theorem 4.29, if <InlineMath>f</InlineMath>{' '}
              is discontinuous at <InlineMath>x</InlineMath>, then{' '}
              <InlineMath>{'f(x-) < f(x+)'}</InlineMath> (the left and right limits both exist but
              are not equal).
            </p>
            <p className="mt-2">
              For each point of discontinuity <InlineMath>x</InlineMath>, associate a rational
              number <InlineMath>{'r(x)'}</InlineMath> in the nonempty open interval{' '}
              <InlineMath>{'(f(x-), f(x+))'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'x < y'}</InlineMath> are both points of discontinuity, then by
              monotonicity, <InlineMath>{'f(x+) \\leq f(y-)'}</InlineMath>. Therefore the intervals{' '}
              <InlineMath>{'(f(x-), f(x+))'}</InlineMath> and{' '}
              <InlineMath>{'(f(y-), f(y+))'}</InlineMath> are disjoint.
            </p>
            <p className="mt-2">
              This means the function <InlineMath>r</InlineMath> from the set of discontinuities
              into <InlineMath>{'\\mathbb{Q}'}</InlineMath> is one-to-one. Since{' '}
              <InlineMath>{'\\mathbb{Q}'}</InlineMath> is countable, the set of discontinuities
              is at most countable.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>f</InlineMath> be monotonic on <InlineMath>{'(a, b)'}</InlineMath>.
          Then the set of points of <InlineMath>{'(a, b)'}</InlineMath> at which{' '}
          <InlineMath>f</InlineMath> is discontinuous is at most countable.
        </p>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Sharp Result:</strong> The bound "countable" is best possible. There exist
          monotonic functions that are discontinuous at every rational point, hence at a
          countably infinite set.
        </p>
      </Callout>

      <Example title="Function Discontinuous at All Rationals">
        <p>
          Let <InlineMath>{'\\{r_n\\}'}</InlineMath> be an enumeration of the rationals in{' '}
          <InlineMath>{'(0, 1)'}</InlineMath>. Define
        </p>
        <MathBlock>{'f(x) = \\sum_{r_n < x} 2^{-n}.'}</MathBlock>
        <p className="mt-2">
          Then <InlineMath>f</InlineMath> is monotonically increasing on{' '}
          <InlineMath>{'(0, 1)'}</InlineMath>. At each rational{' '}
          <InlineMath>{'r_n'}</InlineMath>, the function has a jump discontinuity of size{' '}
          <InlineMath>{'2^{-n}'}</InlineMath>. At each irrational, <InlineMath>f</InlineMath> is
          continuous.
        </p>
      </Example>

      <Example title="Dirichlet Function is Not Monotonic">
        <p>
          The Dirichlet function <InlineMath>{'f(x) = 1'}</InlineMath> if{' '}
          <InlineMath>x</InlineMath> is rational, <InlineMath>{'f(x) = 0'}</InlineMath> otherwise,
          is discontinuous everywhere. This does not contradict Theorem 4.30 because this function
          is not monotonic.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Definition 4.28: Monotonically increasing means{' '}
          <InlineMath>{'x < y \\Rightarrow f(x) \\leq f(y)'}</InlineMath>
        </li>
        <li>
          Theorem 4.29: One-sided limits always exist for monotonic functions, with{' '}
          <InlineMath>{'f(x-) \\leq f(x) \\leq f(x+)'}</InlineMath>
        </li>
        <li>
          Corollary: Monotonic functions can only have simple (jump) discontinuities
        </li>
        <li>
          Theorem 4.30: A monotonic function has at most countably many discontinuities
        </li>
        <li>
          The bound is sharp: there exist monotonic functions discontinuous at all rationals
        </li>
      </ul>
    </LessonLayout>
  );
}
