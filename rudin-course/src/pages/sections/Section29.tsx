import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2 className="text-2xl font-semibold mb-4">Continuity and Compactness</h2>

      <p className="mb-4">
        Compactness plays a crucial role in the theory of continuous functions. In this section,
        we establish several fundamental theorems connecting continuity with compactness, including
        the preservation of compactness under continuous maps and the important concept of uniform
        continuity.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Bounded Mappings</h3>

      <Definition title="4.13 Bounded Mapping">
        <p>
          A mapping <InlineMath>{'\\mathbf{f}'}</InlineMath> of a set{' '}
          <InlineMath>{'E'}</InlineMath> into <InlineMath>{'R^k'}</InlineMath> is said to be{' '}
          <em>bounded</em> if there is a real number <InlineMath>{'M'}</InlineMath> such that{' '}
          <InlineMath>{'|\\mathbf{f}(x)| \\leq M'}</InlineMath> for all{' '}
          <InlineMath>{'x \\in E'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="4.14 Continuous Images of Compact Sets"
        proof={
          <>
            <p>
              Let <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath> be an open cover of{' '}
              <InlineMath>{'f(X)'}</InlineMath>. Since <InlineMath>{'f'}</InlineMath> is
              continuous, Theorem 4.8 shows that each of the sets{' '}
              <InlineMath>{'f^{-1}(V_\\alpha)'}</InlineMath> is open. Since{' '}
              <InlineMath>{'X'}</InlineMath> is compact, there are finitely many indices, say{' '}
              <InlineMath>{'\\alpha_1, \\ldots, \\alpha_n'}</InlineMath>, such that
            </p>
            <MathBlock>{'X \\subset f^{-1}(V_{\\alpha_1}) \\cup \\cdots \\cup f^{-1}(V_{\\alpha_n}).'}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{'f(f^{-1}(E)) \\subset E'}</InlineMath> for every{' '}
              <InlineMath>{'E \\subset Y'}</InlineMath>, this implies that
            </p>
            <MathBlock>{'f(X) \\subset V_{\\alpha_1} \\cup \\cdots \\cup V_{\\alpha_n}.'}</MathBlock>
            <p className="mt-2">This completes the proof.</p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'f'}</InlineMath> is a continuous mapping of a compact metric
          space <InlineMath>{'X'}</InlineMath> into a metric space <InlineMath>{'Y'}</InlineMath>.
          Then <InlineMath>{'f(X)'}</InlineMath> is compact.
        </p>
      </Theorem>

      <Theorem title="4.15 Continuous Functions on Compact Sets are Bounded">
        <p>
          If <InlineMath>{'\\mathbf{f}'}</InlineMath> is a continuous mapping of a compact metric
          space <InlineMath>{'X'}</InlineMath> into <InlineMath>{'R^k'}</InlineMath>, then{' '}
          <InlineMath>{'\\mathbf{f}(X)'}</InlineMath> is closed and bounded. Thus,{' '}
          <InlineMath>{'\\mathbf{f}'}</InlineMath> is bounded.
        </p>
      </Theorem>

      <p className="my-4">
        This follows from Theorem 2.41. The result is particularly important when{' '}
        <InlineMath>{'f'}</InlineMath> is real:
      </p>

      <Theorem title="4.16 Extreme Value Theorem">
        <p>
          Suppose <InlineMath>{'f'}</InlineMath> is a continuous real function on a compact metric
          space <InlineMath>{'X'}</InlineMath>, and
        </p>
        <MathBlock>{'M = \\sup_{p \\in X} f(p), \\quad m = \\inf_{p \\in X} f(p).'}</MathBlock>
        <p>
          Then there exist points <InlineMath>{'p, q \\in X'}</InlineMath> such that{' '}
          <InlineMath>{'f(p) = M'}</InlineMath> and <InlineMath>{'f(q) = m'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        The conclusion may also be stated as follows: There exist points{' '}
        <InlineMath>{'p'}</InlineMath> and <InlineMath>{'q'}</InlineMath> in{' '}
        <InlineMath>{'X'}</InlineMath> such that{' '}
        <InlineMath>{'f(q) \\leq f(x) \\leq f(p)'}</InlineMath> for all{' '}
        <InlineMath>{'x \\in X'}</InlineMath>; that is, <InlineMath>{'f'}</InlineMath> attains its
        maximum (at <InlineMath>{'p'}</InlineMath>) and its minimum (at{' '}
        <InlineMath>{'q'}</InlineMath>).
      </p>

      <Theorem
        title="4.17 Continuous Bijections on Compact Sets"
        proof={
          <>
            <p>
              Applying Theorem 4.8 to <InlineMath>{'f^{-1}'}</InlineMath> in place of{' '}
              <InlineMath>{'f'}</InlineMath>, we see that it suffices to prove that{' '}
              <InlineMath>{'f(V)'}</InlineMath> is an open set in <InlineMath>{'Y'}</InlineMath>{' '}
              for every open set <InlineMath>{'V'}</InlineMath> in <InlineMath>{'X'}</InlineMath>.
            </p>
            <p className="mt-2">
              The complement <InlineMath>{'V^c'}</InlineMath> of <InlineMath>{'V'}</InlineMath> is
              closed in <InlineMath>{'X'}</InlineMath>, hence compact (Theorem 2.35); hence{' '}
              <InlineMath>{'f(V^c)'}</InlineMath> is a compact subset of{' '}
              <InlineMath>{'Y'}</InlineMath> (Theorem 4.14) and so is closed in{' '}
              <InlineMath>{'Y'}</InlineMath> (Theorem 2.34). Since <InlineMath>{'f'}</InlineMath> is
              one-to-one and onto, <InlineMath>{'f(V)'}</InlineMath> is the complement of{' '}
              <InlineMath>{'f(V^c)'}</InlineMath>. Hence <InlineMath>{'f(V)'}</InlineMath> is open.
            </p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'f'}</InlineMath> is a continuous 1-1 mapping of a compact metric
          space <InlineMath>{'X'}</InlineMath> onto a metric space <InlineMath>{'Y'}</InlineMath>.
          Then the inverse mapping <InlineMath>{'f^{-1}'}</InlineMath> defined on{' '}
          <InlineMath>{'Y'}</InlineMath> by
        </p>
        <MathBlock>{'f^{-1}(f(x)) = x \\quad (x \\in X)'}</MathBlock>
        <p>
          is a continuous mapping of <InlineMath>{'Y'}</InlineMath> onto{' '}
          <InlineMath>{'X'}</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Uniform Continuity</h3>

      <Definition title="4.18 Uniform Continuity">
        <p>
          Let <InlineMath>{'f'}</InlineMath> be a mapping of a metric space{' '}
          <InlineMath>{'X'}</InlineMath> into a metric space <InlineMath>{'Y'}</InlineMath>. We say
          that <InlineMath>{'f'}</InlineMath> is <em>uniformly continuous</em> on{' '}
          <InlineMath>{'X'}</InlineMath> if for every <InlineMath>{'\\varepsilon > 0'}</InlineMath>{' '}
          there exists <InlineMath>{'\\delta > 0'}</InlineMath> such that
        </p>
        <MathBlock>{'d_Y(f(p), f(q)) < \\varepsilon'}</MathBlock>
        <p>
          for all <InlineMath>{'p'}</InlineMath> and <InlineMath>{'q'}</InlineMath> in{' '}
          <InlineMath>{'X'}</InlineMath> for which{' '}
          <InlineMath>{'d_X(p, q) < \\delta'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning">
        <p>
          <strong>Continuity vs. Uniform Continuity:</strong> First, uniform continuity is a
          property of a function on a set, whereas continuity can be defined at a single point.
          Second, if <InlineMath>{'f'}</InlineMath> is continuous on{' '}
          <InlineMath>{'X'}</InlineMath>, then for each{' '}
          <InlineMath>{'\\varepsilon > 0'}</InlineMath> and each point{' '}
          <InlineMath>{'p'}</InlineMath>, we find <InlineMath>{'\\delta > 0'}</InlineMath> depending
          on both <InlineMath>{'\\varepsilon'}</InlineMath> <em>and</em>{' '}
          <InlineMath>{'p'}</InlineMath>. If <InlineMath>{'f'}</InlineMath> is uniformly continuous,
          then for each <InlineMath>{'\\varepsilon > 0'}</InlineMath>, we can find <em>one</em>{' '}
          <InlineMath>{'\\delta > 0'}</InlineMath> which works for <em>all</em> points{' '}
          <InlineMath>{'p'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="4.19 Continuous on Compact Implies Uniformly Continuous"
        proof={
          <>
            <p>
              Let <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given. Since{' '}
              <InlineMath>{'f'}</InlineMath> is continuous, we can associate to each point{' '}
              <InlineMath>{'p \\in X'}</InlineMath> a positive number{' '}
              <InlineMath>{'\\phi(p)'}</InlineMath> such that
            </p>
            <MathBlock>{'d_X(p, q) < \\phi(p) \\implies d_Y(f(p), f(q)) < \\frac{\\varepsilon}{2}.'}</MathBlock>
            <p className="mt-2">
              Let <InlineMath>{'J(p)'}</InlineMath> be the set of all{' '}
              <InlineMath>{'q \\in X'}</InlineMath> for which{' '}
              <InlineMath>{'d_X(p, q) < \\frac{1}{2}\\phi(p)'}</InlineMath>. Since{' '}
              <InlineMath>{'p \\in J(p)'}</InlineMath>, these sets cover{' '}
              <InlineMath>{'X'}</InlineMath>. By compactness, finitely many suffice:
            </p>
            <MathBlock>{'X \\subset J(p_1) \\cup \\cdots \\cup J(p_n).'}</MathBlock>
            <p className="mt-2">Put</p>
            <MathBlock>{'\\delta = \\frac{1}{2} \\min [\\phi(p_1), \\ldots, \\phi(p_n)] > 0.'}</MathBlock>
            <p className="mt-2">
              Now if <InlineMath>{'d_X(p, q) < \\delta'}</InlineMath>, there is some{' '}
              <InlineMath>{'p_m'}</InlineMath> with <InlineMath>{'p \\in J(p_m)'}</InlineMath>. Then
            </p>
            <MathBlock>{'d_X(q, p_m) \\leq d_X(p, q) + d_X(p, p_m) < \\delta + \\frac{1}{2}\\phi(p_m) \\leq \\phi(p_m).'}</MathBlock>
            <p className="mt-2">Therefore</p>
            <MathBlock>{'d_Y(f(p), f(q)) \\leq d_Y(f(p), f(p_m)) + d_Y(f(p_m), f(q)) < \\varepsilon.'}</MathBlock>
          </>
        }
      >
        <p>
          Let <InlineMath>{'f'}</InlineMath> be a continuous mapping of a compact metric space{' '}
          <InlineMath>{'X'}</InlineMath> into a metric space <InlineMath>{'Y'}</InlineMath>. Then{' '}
          <InlineMath>{'f'}</InlineMath> is uniformly continuous on <InlineMath>{'X'}</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Theorem 4.14: Continuous images of compact sets are compact</li>
        <li>Theorem 4.15: Continuous functions on compact sets are bounded</li>
        <li>
          Theorem 4.16 (Extreme Value Theorem): A continuous real function on a compact set attains
          its maximum and minimum
        </li>
        <li>Theorem 4.17: A continuous bijection from a compact space has a continuous inverse</li>
        <li>
          Definition 4.18: Uniform continuity requires{' '}
          <InlineMath>{'\\delta'}</InlineMath> to work uniformly for all points
        </li>
        <li>Theorem 4.19: Continuous functions on compact sets are uniformly continuous</li>
      </ul>
    </LessonLayout>
  );
}
