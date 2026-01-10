import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2 className="text-2xl font-semibold mb-4">Continuity and Connectedness</h2>

      <p className="mb-4">
        Just as continuous functions preserve compactness, they also preserve connectedness. This
        fundamental property leads to the Intermediate Value Theorem, one of the most important
        results in elementary analysis.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Preservation of Connectedness</h3>

      <Theorem
        title="4.22 Continuous Images of Connected Sets"
        proof={
          <>
            <p>
              Assume, on the contrary, that{' '}
              <InlineMath>{'f(E) = A \\cup B'}</InlineMath>, where{' '}
              <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are nonempty
              separated subsets of <InlineMath>{'Y'}</InlineMath>. Put{' '}
              <InlineMath>{'G = E \\cap f^{-1}(A)'}</InlineMath>,{' '}
              <InlineMath>{'H = E \\cap f^{-1}(B)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'E = G \\cup H'}</InlineMath>, and neither{' '}
              <InlineMath>{'G'}</InlineMath> nor <InlineMath>{'H'}</InlineMath> is empty.
            </p>
            <p className="mt-2">
              Since <InlineMath>{'A \\subset \\overline{A}'}</InlineMath> (the closure of{' '}
              <InlineMath>{'A'}</InlineMath>), we have{' '}
              <InlineMath>{'G \\subset f^{-1}(\\overline{A})'}</InlineMath>; the latter set is
              closed, since <InlineMath>{'f'}</InlineMath> is continuous; hence{' '}
              <InlineMath>{'\\overline{G} \\subset f^{-1}(\\overline{A})'}</InlineMath>. It follows
              that <InlineMath>{'f(\\overline{G}) \\subset \\overline{A}'}</InlineMath>. Since{' '}
              <InlineMath>{'f(H) = B'}</InlineMath> and{' '}
              <InlineMath>{'\\overline{A} \\cap B'}</InlineMath> is empty, we conclude that{' '}
              <InlineMath>{'\\overline{G} \\cap H'}</InlineMath> is empty.
            </p>
            <p className="mt-2">
              The same argument shows that{' '}
              <InlineMath>{'G \\cap \\overline{H}'}</InlineMath> is empty. Thus{' '}
              <InlineMath>{'G'}</InlineMath> and <InlineMath>{'H'}</InlineMath> are separated. This
              is impossible if <InlineMath>{'E'}</InlineMath> is connected.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'f'}</InlineMath> is a continuous mapping of a metric space{' '}
          <InlineMath>{'X'}</InlineMath> into a metric space <InlineMath>{'Y'}</InlineMath>, and
          if <InlineMath>{'E'}</InlineMath> is a connected subset of <InlineMath>{'X'}</InlineMath>,
          then <InlineMath>{'f(E)'}</InlineMath> is connected.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">The Intermediate Value Theorem</h3>

      <Theorem
        title="4.23 Intermediate Value Theorem"
        proof={
          <>
            <p>
              By Theorem 2.47, <InlineMath>{'[a, b]'}</InlineMath> is connected; hence{' '}
              Theorem 4.22 shows that <InlineMath>{'f([a, b])'}</InlineMath> is a connected subset
              of <InlineMath>{'R^1'}</InlineMath>, and the assertion follows if we appeal once
              more to Theorem 2.47.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'f'}</InlineMath> be a continuous real function on the interval{' '}
          <InlineMath>{'[a, b]'}</InlineMath>. If <InlineMath>{'f(a) < c < f(b)'}</InlineMath> and
          if <InlineMath>{'c'}</InlineMath> is a number such that{' '}
          <InlineMath>{'f(a) < c < f(b)'}</InlineMath>, then there exists a point{' '}
          <InlineMath>{'x \\in (a, b)'}</InlineMath> such that{' '}
          <InlineMath>{'f(x) = c'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        A similar result holds of course if <InlineMath>{'f(a) > f(b)'}</InlineMath>. Roughly
        speaking, the theorem says that a continuous real function assumes all intermediate values
        on an interval.
      </p>

      <Callout type="info">
        <p>
          <strong>Remark 4.24:</strong> At first glance, it might seem that Theorem 4.23 has a
          converse. That is, one might think that if for any two points{' '}
          <InlineMath>{'x_1 < x_2'}</InlineMath> and for any number{' '}
          <InlineMath>{'c'}</InlineMath> between <InlineMath>{'f(x_1)'}</InlineMath> and{' '}
          <InlineMath>{'f(x_2)'}</InlineMath> there is a point <InlineMath>{'x'}</InlineMath> in{' '}
          <InlineMath>{'(x_1, x_2)'}</InlineMath> such that{' '}
          <InlineMath>{'f(x) = c'}</InlineMath>, then <InlineMath>{'f'}</InlineMath> must be
          continuous.
        </p>
        <p className="mt-2">That this is not so may be concluded from Example 4.27(d).</p>
      </Callout>

      <Example title="4.21 Mapping onto the Unit Circle">
        <p>
          Let <InlineMath>{'X'}</InlineMath> be the half-open interval{' '}
          <InlineMath>{'[0, 2\\pi)'}</InlineMath> on the real line, and let{' '}
          <InlineMath>{'\\mathbf{f}'}</InlineMath> be the mapping of{' '}
          <InlineMath>{'X'}</InlineMath> onto the circle{' '}
          <InlineMath>{'Y'}</InlineMath> consisting of all points whose distance from the origin
          is 1, given by
        </p>
        <MathBlock>{'\\mathbf{f}(t) = (\\cos t, \\sin t) \\quad (0 \\leq t < 2\\pi).'}</MathBlock>
        <p className="mt-2">
          The continuity of the trigonometric functions cosine and sine, as well as their
          periodicity properties, will be established in Chap. 8. These results show that{' '}
          <InlineMath>{'\\mathbf{f}'}</InlineMath> is a continuous 1-1 mapping of{' '}
          <InlineMath>{'X'}</InlineMath> onto <InlineMath>{'Y'}</InlineMath>.
        </p>
        <p className="mt-2">
          However, the inverse mapping (which exists, since{' '}
          <InlineMath>{'\\mathbf{f}'}</InlineMath> is one-to-one and onto) fails to be continuous
          at the point <InlineMath>{'(1, 0) = \\mathbf{f}(0)'}</InlineMath>. Of course,{' '}
          <InlineMath>{'X'}</InlineMath> is not compact in this example. (It may be of interest
          to observe that <InlineMath>{'\\mathbf{f}^{-1}'}</InlineMath> fails to be continuous in
          spite of the fact that <InlineMath>{'Y'}</InlineMath> is compact!)
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Applications</h3>

      <Example title="Existence of nth Roots">
        <p>
          The Intermediate Value Theorem can be used to prove the existence of{' '}
          <InlineMath>{'n'}</InlineMath>th roots. For any positive real number{' '}
          <InlineMath>{'y'}</InlineMath> and positive integer <InlineMath>{'n'}</InlineMath>,
          consider <InlineMath>{'f(x) = x^n'}</InlineMath> on <InlineMath>{'[0, b]'}</InlineMath>{' '}
          where <InlineMath>{'b > \\max(1, y)'}</InlineMath>.
        </p>
        <p className="mt-2">
          We have <InlineMath>{'f(0) = 0 < y'}</InlineMath> and{' '}
          <InlineMath>{'f(b) = b^n > y'}</InlineMath>. Since <InlineMath>{'f'}</InlineMath> is
          continuous (being a polynomial), the Intermediate Value Theorem guarantees that there
          exists <InlineMath>{'x \\in (0, b)'}</InlineMath> with{' '}
          <InlineMath>{'f(x) = x^n = y'}</InlineMath>. This <InlineMath>{'x'}</InlineMath> is{' '}
          <InlineMath>{'\\sqrt[n]{y}'}</InlineMath>.
        </p>
      </Example>

      <Example title="Fixed Point on [0,1]">
        <p>
          Let <InlineMath>{'f: [0, 1] \\to [0, 1]'}</InlineMath> be continuous. Then{' '}
          <InlineMath>{'f'}</InlineMath> has a <em>fixed point</em>, i.e., there exists{' '}
          <InlineMath>{'c \\in [0, 1]'}</InlineMath> with <InlineMath>{'f(c) = c'}</InlineMath>.
        </p>
        <p className="mt-2">
          <em>Proof:</em> Consider <InlineMath>{'g(x) = f(x) - x'}</InlineMath>. Then{' '}
          <InlineMath>{'g'}</InlineMath> is continuous on{' '}
          <InlineMath>{'[0, 1]'}</InlineMath>. We have{' '}
          <InlineMath>{'g(0) = f(0) - 0 = f(0) \\geq 0'}</InlineMath> (since{' '}
          <InlineMath>{'f(0) \\in [0, 1]'}</InlineMath>) and{' '}
          <InlineMath>{'g(1) = f(1) - 1 \\leq 0'}</InlineMath> (since{' '}
          <InlineMath>{'f(1) \\in [0, 1]'}</InlineMath>).
        </p>
        <p className="mt-2">
          If <InlineMath>{'g(0) = 0'}</InlineMath>, then <InlineMath>{'f(0) = 0'}</InlineMath> and
          we are done. If <InlineMath>{'g(1) = 0'}</InlineMath>, then{' '}
          <InlineMath>{'f(1) = 1'}</InlineMath>. Otherwise, by the Intermediate Value Theorem,
          there exists <InlineMath>{'c \\in (0, 1)'}</InlineMath> with{' '}
          <InlineMath>{'g(c) = 0'}</InlineMath>, i.e., <InlineMath>{'f(c) = c'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Theorem 4.22: Continuous images of connected sets are connected</li>
        <li>
          Theorem 4.23 (Intermediate Value Theorem): A continuous real function on{' '}
          <InlineMath>{'[a, b]'}</InlineMath> takes on every value between{' '}
          <InlineMath>{'f(a)'}</InlineMath> and <InlineMath>{'f(b)'}</InlineMath>
        </li>
        <li>
          The IVT is used to prove existence of roots, fixed points, and solutions to equations
        </li>
        <li>
          The converse of IVT is false: a function can satisfy the intermediate value property
          without being continuous
        </li>
      </ul>
    </LessonLayout>
  );
}
