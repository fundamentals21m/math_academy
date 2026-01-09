import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section83() {
  return (
    <LessonLayout sectionId={83}>
      <h2>Discrete Valuation Rings</h2>
      <p>
        <strong>Discrete valuation rings (DVRs)</strong> are one-dimensional local
        principal ideal domains. They capture the notion of "order of vanishing" at a
        point and are fundamental in algebraic number theory and algebraic geometry.
        DVRs provide the algebraic framework for studying local properties of curves.
      </p>

      <Callout type="info">
        <strong>Geometric Intuition:</strong> Think of a DVR as the ring of functions
        defined at a smooth point of a curve. The valuation measures the order of
        vanishing (or pole) at that point.
      </Callout>

      <h3>Discrete Valuations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A <strong>discrete valuation</strong> on a field <InlineMath>K</InlineMath> is a
          surjective function <InlineMath>v: K^* \to \mathbb{"{Z}"}</InlineMath> satisfying:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>v(xy) = v(x) + v(y)</InlineMath></li>
          <li><InlineMath>v(x + y) \geq \min(v(x), v(y))</InlineMath></li>
        </ol>
        <p className="mt-3">
          We extend by setting <InlineMath>v(0) = +\infty</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Key Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><strong>p-adic valuation:</strong> <InlineMath>v_p: \mathbb{"{Q}"}^* \to \mathbb{"{Z}"}</InlineMath>
            with <InlineMath>v_p(p^n \cdot a/b) = n</InlineMath> when <InlineMath>p \nmid ab</InlineMath></li>
          <li><strong>Order at a point:</strong> For <InlineMath>k(x)</InlineMath>,
            <InlineMath>v_a(f) = \text{"{ord}"}_a(f)</InlineMath> = order of zero/pole at <InlineMath>a</InlineMath></li>
          <li><strong>Degree valuation:</strong> <InlineMath>v_\infty(f/g) = \deg g - \deg f</InlineMath>
            on <InlineMath>k(x)</InlineMath></li>
        </ul>
      </div>

      <h3>Discrete Valuation Rings</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>valuation ring</strong> of a discrete valuation <InlineMath>v</InlineMath> is:
        </p>
        <MathBlock>{`R = \\{x \\in K \\mid v(x) \\geq 0\\} \\cup \\{0\\}`}</MathBlock>
        <p className="mt-3">
          A ring arising this way is called a <strong>discrete valuation ring (DVR)</strong>.
        </p>
      </div>

      <h3>Characterizations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Equivalent Conditions</h4>
        <p>
          For an integral domain <InlineMath>R</InlineMath>, the following are equivalent:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>R</InlineMath> is a DVR</li>
          <li><InlineMath>R</InlineMath> is a local PID that is not a field</li>
          <li><InlineMath>R</InlineMath> is a Noetherian local ring with principal maximal ideal <InlineMath>\neq 0</InlineMath></li>
          <li><InlineMath>R</InlineMath> is a local Dedekind domain that is not a field</li>
          <li><InlineMath>R</InlineMath> is a one-dimensional regular local ring</li>
        </ol>
      </div>

      <h3>Structure of DVRs</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          Let <InlineMath>R</InlineMath> be a DVR with maximal ideal <InlineMath>\mathfrak{"{m}"}</InlineMath>.
          Then:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>\mathfrak{"{m}"} = (\pi)</InlineMath> for some <InlineMath>\pi</InlineMath>
            (called a <strong>uniformizer</strong>)</li>
          <li>Every nonzero ideal is <InlineMath>(\pi^n)</InlineMath> for some <InlineMath>n \geq 0</InlineMath></li>
          <li>Every nonzero <InlineMath>x \in R</InlineMath> can be written <InlineMath>x = u\pi^n</InlineMath>
            for unit <InlineMath>u</InlineMath> and unique <InlineMath>n = v(x)</InlineMath></li>
          <li>The ideals form a chain: <InlineMath>R \supsetneq (\pi) \supsetneq (\pi^2) \supsetneq \cdots</InlineMath></li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>\mathbb{"{Z}"}_{"{(p)}"}</InlineMath></p>
        <p className="mt-2">
          The localization of <InlineMath>\mathbb{"{Z}"}</InlineMath> at <InlineMath>(p)</InlineMath>:
        </p>
        <MathBlock>{`\\mathbb{Z}_{(p)} = \\left\\{\\frac{a}{b} \\in \\mathbb{Q} \\mid p \\nmid b\\right\\}`}</MathBlock>
        <p className="mt-2">
          This is a DVR with uniformizer <InlineMath>\pi = p</InlineMath>
          and valuation <InlineMath>v_p</InlineMath>.
        </p>
        <p className="mt-2">
          Residue field: <InlineMath>\mathbb{"{Z}"}_{"{(p)}"}/p\mathbb{"{Z}"}_{"{(p)}"} \cong \mathbb{"{F}"}_p</InlineMath>
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: <InlineMath>k[[t]]</InlineMath></p>
        <p className="mt-2">
          Formal power series over a field form a DVR:
        </p>
        <MathBlock>{`k[[t]] = \\left\\{\\sum_{n=0}^{\\infty} a_n t^n \\mid a_n \\in k\\right\\}`}</MathBlock>
        <p className="mt-2">
          Uniformizer: <InlineMath>\pi = t</InlineMath>
        </p>
        <p className="mt-2">
          Valuation: <InlineMath>v(f) = \min\{"{n \\mid a_n \\neq 0}"}\</InlineMath> (order of vanishing)
        </p>
        <p className="mt-2">
          Fraction field: <InlineMath>k((t))</InlineMath> = Laurent series
        </p>
      </div>

      <h3>The p-adic Integers</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The ring of <strong>p-adic integers</strong> is:
        </p>
        <MathBlock>{`\\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}`}</MathBlock>
        <p className="mt-3">
          This is the completion of <InlineMath>\mathbb{"{Z}"}</InlineMath>
          with respect to the <InlineMath>p</InlineMath>-adic valuation.
        </p>
      </div>

      <p>
        <InlineMath>\mathbb{"{Z}"}_p</InlineMath> is a DVR with uniformizer <InlineMath>p</InlineMath>
        and residue field <InlineMath>\mathbb{"{F}"}_p</InlineMath>. Its fraction
        field <InlineMath>\mathbb{"{Q}"}_p</InlineMath> is the field of p-adic numbers.
      </p>

      <h3>Geometric Interpretation</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Local Ring of a Curve</p>
        <p className="mt-2">
          For a smooth curve <InlineMath>C</InlineMath> over <InlineMath>k</InlineMath>
          and point <InlineMath>P \in C</InlineMath>, the local
          ring <InlineMath>\mathcal{"{O}"}_{"{C,P}"}</InlineMath> is a DVR.
        </p>
        <p className="mt-2">
          A uniformizer is any function with a simple zero at <InlineMath>P</InlineMath>.
        </p>
        <p className="mt-2">
          The valuation measures order of zero/pole at <InlineMath>P</InlineMath>.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> DVRs are local PIDs of dimension 1, characterized by
        having a principal maximal ideal generated by a uniformizer <InlineMath>\pi</InlineMath>.
        Every ideal is <InlineMath>(\pi^n)</InlineMath>, and the valuation measures
        the exponent. Key examples: <InlineMath>\mathbb{"{Z}"}_{"{(p)}"}</InlineMath>,
        <InlineMath>k[[t]]</InlineMath>, and local rings of smooth curve points.
        DVRs are the building blocks of Dedekind domains and essential for local
        analysis in algebraic geometry and number theory.
      </Callout>
    </LessonLayout>
  );
}
