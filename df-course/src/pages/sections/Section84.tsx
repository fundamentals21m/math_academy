import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section84() {
  return (
    <LessonLayout sectionId={84}>
      <h2>Dedekind Domains</h2>
      <p>
        <strong>Dedekind domains</strong> generalize the integers to rings where unique
        factorization of ideals (not elements) holds. They are the algebraic foundation
        of algebraic number theory, with rings of integers in number fields being the
        primary examples.
      </p>

      <Callout type="info">
        <strong>Historical Motivation:</strong> Kummer and Dedekind developed ideal theory
        to rescue unique factorization. While <InlineMath>\mathbb{"{Z}"}[\sqrt{"{-5}"}]</InlineMath>
        lacks unique element factorization, it has unique ideal factorization.
      </Callout>

      <h3>Definition and Characterizations</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An integral domain <InlineMath>R</InlineMath> is a <strong>Dedekind domain</strong>
          if it is:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li>Noetherian</li>
          <li>Integrally closed in its fraction field</li>
          <li>Every nonzero prime ideal is maximal (dimension 1 or 0)</li>
        </ol>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Equivalent Conditions</h4>
        <p>
          For a Noetherian integral domain <InlineMath>R</InlineMath>, these are equivalent:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>R</InlineMath> is a Dedekind domain</li>
          <li>Every nonzero ideal factors uniquely into prime ideals</li>
          <li><InlineMath>R_\mathfrak{"{p}"}</InlineMath> is a DVR for every nonzero prime <InlineMath>\mathfrak{"{p}"}</InlineMath></li>
          <li>Every nonzero fractional ideal is invertible</li>
        </ol>
      </div>

      <h3>Key Examples</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples of Dedekind Domains</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\mathbb{"{Z}"}</InlineMath> (the prototypical example)</li>
          <li>Any PID (PIDs are Dedekind domains with all ideals principal)</li>
          <li>Rings of integers <InlineMath>\mathcal{"{O}"}_K</InlineMath> in number fields <InlineMath>K</InlineMath></li>
          <li>Coordinate rings of smooth affine curves over a field</li>
          <li>Localization of Dedekind domains at multiplicative sets</li>
        </ul>
      </div>

      <h3>Unique Factorization of Ideals</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Fundamental Theorem</h4>
        <p>
          In a Dedekind domain, every nonzero ideal <InlineMath>I</InlineMath> factors uniquely as:
        </p>
        <MathBlock>{`I = \\mathfrak{p}_1^{e_1} \\mathfrak{p}_2^{e_2} \\cdots \\mathfrak{p}_r^{e_r}`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>\mathfrak{"{p}"}_i</InlineMath> are distinct prime ideals
          and <InlineMath>e_i \geq 1</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: <InlineMath>\mathbb{"{Z}"}[\sqrt{"{-5}"}]</InlineMath></p>
        <p className="mt-2">
          This is the ring of integers in <InlineMath>\mathbb{"{Q}"}(\sqrt{"{-5}"})</InlineMath>.
        </p>
        <p className="mt-2">
          Element factorization fails: <InlineMath>6 = 2 \cdot 3 = (1+\sqrt{"{-5}"})(1-\sqrt{"{-5}"})</InlineMath>
        </p>
        <p className="mt-2">
          But ideal factorization works. Let <InlineMath>\mathfrak{"{p}"} = (2, 1+\sqrt{"{-5}"})</InlineMath>,
          <InlineMath>\mathfrak{"{q}"} = (3, 1+\sqrt{"{-5}"})</InlineMath>,
          <InlineMath>\bar{"{\\mathfrak{q}}"} = (3, 1-\sqrt{"{-5}"})</InlineMath>.
        </p>
        <p className="mt-2">
          Then: <InlineMath>(6) = \mathfrak{"{p}"}^2 \mathfrak{"{q}"} \bar{"{\\mathfrak{q}}"}</InlineMath>
        </p>
      </div>

      <h3>Fractional Ideals</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          A <strong>fractional ideal</strong> of <InlineMath>R</InlineMath> is an
          <InlineMath>R</InlineMath>-submodule <InlineMath>I \subseteq K</InlineMath>
          (fraction field) such that <InlineMath>dI \subseteq R</InlineMath> for some nonzero <InlineMath>d \in R</InlineMath>.
        </p>
      </div>

      <p>
        Equivalently, a fractional ideal has the form <InlineMath>\frac{"{1}"}{"{d}"}J</InlineMath>
        for some ordinary ideal <InlineMath>J \subseteq R</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          In a Dedekind domain, the nonzero fractional ideals form a group under multiplication,
          with identity <InlineMath>R</InlineMath> and inverse:
        </p>
        <MathBlock>{`I^{-1} = \\{x \\in K \\mid xI \\subseteq R\\}`}</MathBlock>
      </div>

      <h3>The Class Group</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>ideal class group</strong> of a Dedekind domain <InlineMath>R</InlineMath> is:
        </p>
        <MathBlock>{`\\text{Cl}(R) = \\frac{\\{\\text{fractional ideals}\\}}{\\{\\text{principal fractional ideals}\\}}`}</MathBlock>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li><InlineMath>\text{"{Cl}"}(R) = 1</InlineMath> iff <InlineMath>R</InlineMath> is a PID</li>
          <li>For rings of integers in number fields, <InlineMath>\text{"{Cl}"}(\mathcal{"{O}"}_K)</InlineMath> is finite</li>
          <li>The order <InlineMath>h_K = |\text{"{Cl}"}(\mathcal{"{O}"}_K)|</InlineMath> is called the <strong>class number</strong></li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Example: Class Numbers</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>h_{"{\\mathbb{Q}(\\sqrt{-1})}"} = 1</InlineMath> (Gaussian integers are a PID)</li>
          <li><InlineMath>h_{"{\\mathbb{Q}(\\sqrt{-5})}"} = 2</InlineMath></li>
          <li><InlineMath>h_{"{\\mathbb{Q}(\\sqrt{-23})}"} = 3</InlineMath></li>
          <li><InlineMath>h_{"{\\mathbb{Q}(\\sqrt{5})}"} = 1</InlineMath></li>
        </ul>
      </div>

      <h3>Ramification</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          Let <InlineMath>R \subseteq S</InlineMath> be Dedekind domains
          with <InlineMath>\mathfrak{"{p}"}</InlineMath> a prime of <InlineMath>R</InlineMath>.
          The factorization:
        </p>
        <MathBlock>{`\\mathfrak{p}S = \\mathfrak{P}_1^{e_1} \\cdots \\mathfrak{P}_g^{e_g}`}</MathBlock>
        <p className="mt-3">
          has <strong>ramification indices</strong> <InlineMath>e_i</InlineMath>.
          We say <InlineMath>\mathfrak{"{p}"}</InlineMath> is <strong>ramified</strong>
          if some <InlineMath>e_i &gt; 1</InlineMath>.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> Dedekind domains are Noetherian, integrally closed,
        one-dimensional domains. They have unique factorization of ideals into primes.
        Fractional ideals form a group, and the quotient by principal ideals is the
        class group. For rings of integers, the class number measures deviation from
        being a PID. This theory, developed by Dedekind, rescued unique factorization
        in algebraic number theory and remains central to the field.
      </Callout>
    </LessonLayout>
  );
}
