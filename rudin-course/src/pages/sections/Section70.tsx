import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <h2 className="text-2xl font-semibold mb-4">Partitions of Unity</h2>

      <p className="mb-4">
        Partitions of unity are smooth functions that sum to 1 and allow us to localize
        global problems. They are essential tools for extending local results to global
        settings in differential geometry and analysis on manifolds.
      </p>

      <Definition title="10.8 - Support of a Function">
        <p className="mb-3">
          Let <InlineMath>{'\\varphi'}</InlineMath> be a real function defined in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>.
          The <em>support</em> of <InlineMath>{'\\varphi'}</InlineMath>, denoted <InlineMath>{'\\text{supp}(\\varphi)'}</InlineMath>,
          is the closure of the set of all points <InlineMath>{'x'}</InlineMath> where <InlineMath>{'\\varphi(x) \\neq 0'}</InlineMath>:
        </p>
        <MathBlock>{'\\text{supp}(\\varphi) = \\overline{\\{x \\in \\mathbb{R}^n : \\varphi(x) \\neq 0\\}}'}</MathBlock>
        <p>
          We say <InlineMath>{'\\varphi'}</InlineMath> has <em>compact support</em> if <InlineMath>{'\\text{supp}(\\varphi)'}</InlineMath> is a compact set.
        </p>
      </Definition>

      <Definition title="10.9 - Partition of Unity">
        <p className="mb-3">
          Let <InlineMath>{'K'}</InlineMath> be a compact subset of <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, and
          let <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath> be an open cover of <InlineMath>{'K'}</InlineMath>.
          A <em>partition of unity subordinate to</em> <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath> is a
          finite collection of functions <InlineMath>{'\\psi_1, \\ldots, \\psi_s \\in \\mathscr{C}^\\infty(\\mathbb{R}^n)'}</InlineMath> such that:
        </p>
        <p className="mb-2">
          (a) <InlineMath>{'0 \\leq \\psi_i(x) \\leq 1'}</InlineMath> for all <InlineMath>{'x \\in \\mathbb{R}^n'}</InlineMath> and <InlineMath>{'1 \\leq i \\leq s'}</InlineMath>.
        </p>
        <p className="mb-2">
          (b) Each <InlineMath>{'\\psi_i'}</InlineMath> has compact support contained in some <InlineMath>{'V_\\alpha'}</InlineMath>.
        </p>
        <p>
          (c) <InlineMath>{'\\psi_1(x) + \\cdots + \\psi_s(x) = 1'}</InlineMath> for every <InlineMath>{'x \\in K'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="10.10 - Existence of Partitions of Unity"
        proof={
          <>
            <p className="mb-3">
              We first construct a <InlineMath>{'\\mathscr{C}^\\infty'}</InlineMath> function with suitable support properties.
              Define <InlineMath>{'\\varphi : \\mathbb{R} \\to \\mathbb{R}'}</InlineMath> by
            </p>
            <MathBlock>{'\\varphi(t) = \\begin{cases} e^{-1/t} & \\text{if } t > 0 \\\\ 0 & \\text{if } t \\leq 0 \\end{cases}'}</MathBlock>
            <p className="mb-3">
              Then <InlineMath>{'\\varphi \\in \\mathscr{C}^\\infty(\\mathbb{R})'}</InlineMath>. For <InlineMath>{'0 < a < b'}</InlineMath>, define
            </p>
            <MathBlock>{'\\psi(t) = \\frac{\\varphi(t-a)}{\\varphi(t-a) + \\varphi(b-t)}'}</MathBlock>
            <p className="mb-3">
              Then <InlineMath>{'\\psi \\in \\mathscr{C}^\\infty(\\mathbb{R})'}</InlineMath>, <InlineMath>{'\\psi(t) = 0'}</InlineMath> for <InlineMath>{'t \\leq a'}</InlineMath>,
              and <InlineMath>{'\\psi(t) = 1'}</InlineMath> for <InlineMath>{'t \\geq b'}</InlineMath>.
            </p>
            <p className="mb-3">
              Using this, we can construct smooth "bump functions" in <InlineMath>{'\\mathbb{R}^n'}</InlineMath>.
              For each <InlineMath>{'x \\in K'}</InlineMath>, choose <InlineMath>{'V_\\alpha'}</InlineMath> containing <InlineMath>{'x'}</InlineMath>,
              and a smooth bump function <InlineMath>{'\\theta_x'}</InlineMath> with <InlineMath>{'\\theta_x(x) = 1'}</InlineMath> and
              <InlineMath>{'\\text{supp}(\\theta_x) \\subset V_\\alpha'}</InlineMath>.
            </p>
            <p className="mb-3">
              The sets <InlineMath>{'\\{y : \\theta_x(y) > 1/2\\}'}</InlineMath> cover <InlineMath>{'K'}</InlineMath>.
              By compactness, finitely many suffice: <InlineMath>{'\\theta_1, \\ldots, \\theta_s'}</InlineMath>.
            </p>
            <p>
              Define <InlineMath>{'\\psi_i = \\theta_i / \\sum_{j=1}^s \\theta_j'}</InlineMath> on <InlineMath>{'K'}</InlineMath>.
              The denominator is positive on <InlineMath>{'K'}</InlineMath>, so each <InlineMath>{'\\psi_i'}</InlineMath> is smooth,
              and <InlineMath>{'\\sum \\psi_i = 1'}</InlineMath> on <InlineMath>{'K'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'K'}</InlineMath> is a compact subset of <InlineMath>{'\\mathbb{R}^n'}</InlineMath> and
          <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath> is an open cover of <InlineMath>{'K'}</InlineMath>, then there
          exists a partition of unity subordinate to <InlineMath>{'\\{V_\\alpha\\}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Partition of Unity on a Circle">
        <p className="mb-3">
          Let <InlineMath>{'K = S^1'}</InlineMath> be the unit circle in <InlineMath>{'\\mathbb{R}^2'}</InlineMath>,
          covered by <InlineMath>{'V_1 = \\{(x,y) : x > -1/2\\}'}</InlineMath> and <InlineMath>{'V_2 = \\{(x,y) : x < 1/2\\}'}</InlineMath>.
        </p>
        <p className="mb-3">
          We can construct smooth bump functions <InlineMath>{'\\theta_1, \\theta_2'}</InlineMath> where
          <InlineMath>{'\\theta_1 = 1'}</InlineMath> near <InlineMath>{'(1,0)'}</InlineMath> with support in <InlineMath>{'V_1'}</InlineMath>,
          and <InlineMath>{'\\theta_2 = 1'}</InlineMath> near <InlineMath>{'(-1,0)'}</InlineMath> with support in <InlineMath>{'V_2'}</InlineMath>.
        </p>
        <p>
          Setting <InlineMath>{'\\psi_i = \\theta_i/(\\theta_1 + \\theta_2)'}</InlineMath> gives a partition of unity
          with <InlineMath>{'\\psi_1 + \\psi_2 = 1'}</InlineMath> on <InlineMath>{'S^1'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Application">
        <p>
          Partitions of unity allow us to define integration on manifolds and to extend local
          differential forms to global ones. They are the key tool for "gluing" local constructions together.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The support of a function is the closure of where it is nonzero</li>
        <li>A partition of unity consists of smooth functions summing to 1</li>
        <li>Each function in the partition has compact support in some open set of the cover</li>
        <li>Smooth bump functions can be constructed using <InlineMath>{'e^{-1/t}'}</InlineMath></li>
        <li>Partitions of unity always exist for compact sets with open covers</li>
        <li>They allow localization of global problems to local settings</li>
      </ul>
    </LessonLayout>
  );
}
