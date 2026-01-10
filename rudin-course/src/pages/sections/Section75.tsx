import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section75() {
  return (
    <LessonLayout sectionId={75}>
      <h2 className="text-2xl font-semibold mb-4">Closed and Exact Forms</h2>

      <p className="mb-4">
        A form <InlineMath>{'\\omega'}</InlineMath> is closed if <InlineMath>{'d\\omega = 0'}</InlineMath> and
        exact if <InlineMath>{'\\omega = d\\eta'}</InlineMath> for some form <InlineMath>{'\\eta'}</InlineMath>.
        Every exact form is closed (since <InlineMath>{'d^2 = 0'}</InlineMath>), but the converse depends on topology.
      </p>

      <Definition title="10.25 - Closed and Exact Forms">
        <p className="mb-3">
          Let <InlineMath>{'\\omega'}</InlineMath> be a <InlineMath>{'k'}</InlineMath>-form in an open set <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath>.
        </p>
        <p className="mb-2">
          (a) <InlineMath>{'\\omega'}</InlineMath> is <em>closed</em> if <InlineMath>{'d\\omega = 0'}</InlineMath>.
        </p>
        <p>
          (b) <InlineMath>{'\\omega'}</InlineMath> is <em>exact</em> if <InlineMath>{'\\omega = d\\eta'}</InlineMath> for
          some <InlineMath>{'(k-1)'}</InlineMath>-form <InlineMath>{'\\eta'}</InlineMath> in <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="10.26 - Exact Implies Closed"
        proof={
          <>
            <p>
              If <InlineMath>{'\\omega = d\\eta'}</InlineMath>, then <InlineMath>{'d\\omega = d(d\\eta) = d^2\\eta = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every exact form is closed.
        </p>
      </Theorem>

      <Definition title="10.27 - Convex Sets">
        <p className="mb-3">
          A set <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is <em>convex</em> if for
          all <InlineMath>{'x, y \\in E'}</InlineMath> and <InlineMath>{'0 \\leq t \\leq 1'}</InlineMath>,
        </p>
        <MathBlock>{'(1-t)x + ty \\in E'}</MathBlock>
        <p>
          More generally, <InlineMath>{'E'}</InlineMath> is <em>star-shaped</em> with respect to a point <InlineMath>{'p'}</InlineMath> if
          every line segment from <InlineMath>{'p'}</InlineMath> to a point in <InlineMath>{'E'}</InlineMath> lies in <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="10.28 - Poincare Lemma"
        proof={
          <>
            <p className="mb-3">
              Assume <InlineMath>{'E'}</InlineMath> is star-shaped with respect to the origin.
              Define a <em>homotopy operator</em> <InlineMath>{'H'}</InlineMath> that maps <InlineMath>{'k'}</InlineMath>-forms
              to <InlineMath>{'(k-1)'}</InlineMath>-forms:
            </p>
            <MathBlock>{'(H\\omega)(x) = \\int_0^1 t^{k-1} i_x(\\omega(tx)) \\, dt'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'i_x'}</InlineMath> is interior multiplication by the position vector <InlineMath>{'x'}</InlineMath>.
            </p>
            <p className="mb-3">
              One can verify the <em>homotopy formula</em>:
            </p>
            <MathBlock>{'d(H\\omega) + H(d\\omega) = \\omega'}</MathBlock>
            <p className="mb-3">
              If <InlineMath>{'d\\omega = 0'}</InlineMath>, this becomes <InlineMath>{'d(H\\omega) = \\omega'}</InlineMath>,
              so <InlineMath>{'\\eta = H\\omega'}</InlineMath> satisfies <InlineMath>{'d\\eta = \\omega'}</InlineMath>.
            </p>
            <p>
              The calculation involves differentiating under the integral sign and using the
              properties of the exterior derivative and interior multiplication.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is convex (or more generally, star-shaped),
          then every closed form in <InlineMath>{'E'}</InlineMath> is exact.
        </p>
        <p>
          That is, if <InlineMath>{'d\\omega = 0'}</InlineMath> in <InlineMath>{'E'}</InlineMath>, there exists
          <InlineMath>{'\\eta'}</InlineMath> with <InlineMath>{'\\omega = d\\eta'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="A Closed Form That Is Not Exact">
        <p className="mb-3">
          Let <InlineMath>{'E = \\mathbb{R}^2 \\setminus \\{0\\}'}</InlineMath> and consider the 1-form
        </p>
        <MathBlock>{'\\omega = \\frac{-y \\, dx + x \\, dy}{x^2 + y^2}'}</MathBlock>
        <p className="mb-3">
          A calculation shows <InlineMath>{'d\\omega = 0'}</InlineMath>, so <InlineMath>{'\\omega'}</InlineMath> is closed.
          However, integrating around the unit circle:
        </p>
        <MathBlock>{'\\oint_{|z|=1} \\omega = \\int_0^{2\\pi} d\\theta = 2\\pi \\neq 0'}</MathBlock>
        <p>
          If <InlineMath>{'\\omega = d\\eta'}</InlineMath> were exact, Stokes would give <InlineMath>{'\\oint \\omega = 0'}</InlineMath>.
          Thus <InlineMath>{'\\omega'}</InlineMath> is closed but not exact in <InlineMath>{'E'}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning" title="Topology Matters">
        <p>
          The Poincare lemma fails for non-simply-connected domains. The form <InlineMath>{'\\omega = d\\theta'}</InlineMath>
          above is locally exact (locally <InlineMath>{'\\omega = d(\\arctan(y/x))'}</InlineMath>) but not
          globally exact because the angle function is multivalued around the origin.
        </p>
      </Callout>

      <Definition title="10.29 - de Rham Cohomology">
        <p className="mb-3">
          The <em>k-th de Rham cohomology</em> of <InlineMath>{'E'}</InlineMath> is
        </p>
        <MathBlock>{'H^k(E) = \\frac{\\{\\text{closed } k\\text{-forms}\\}}{\\{\\text{exact } k\\text{-forms}\\}}'}</MathBlock>
        <p>
          It measures the "failure" of closed forms to be exact and encodes topological information about <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Closed forms satisfy <InlineMath>{'d\\omega = 0'}</InlineMath>; exact forms satisfy <InlineMath>{'\\omega = d\\eta'}</InlineMath></li>
        <li>Exact implies closed, but closed does not always imply exact</li>
        <li>The Poincare lemma: closed implies exact on convex or star-shaped domains</li>
        <li>The form <InlineMath>{'d\\theta'}</InlineMath> on <InlineMath>{'\\mathbb{R}^2 \\setminus \\{0\\}'}</InlineMath> is closed but not exact</li>
        <li>De Rham cohomology measures the gap between closed and exact forms</li>
        <li>Topology (holes, connectivity) determines whether closed forms are exact</li>
      </ul>
    </LessonLayout>
  );
}
