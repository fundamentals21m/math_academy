import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <h2>Separable and Inseparable Extensions</h2>
      <p>
        In characteristic zero, irreducible polynomials have no repeated roots. This fails
        in characteristic <InlineMath>p</InlineMath>, leading to subtle phenomena. Understanding
        <strong> separable</strong> and <strong>inseparable</strong> extensions is crucial for
        the full development of Galois theory.
      </p>

      <Callout type="info">
        <strong>Why This Matters:</strong> Galois theory works most cleanly for separable extensions.
        The Fundamental Theorem of Galois Theory requires separability. Understanding when and
        why inseparability occurs reveals deep arithmetic structure.
      </Callout>

      <h3>Separable Polynomials</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Separable Polynomial</h4>
        <p>
          A polynomial <InlineMath>f(x) \in F[x]</InlineMath> is <strong>separable</strong> if it
          has no repeated roots in any extension field (equivalently, in the algebraic closure).
        </p>
        <p className="mt-3">
          Equivalently, <InlineMath>f(x)</InlineMath> is separable if and only
          if <InlineMath>\gcd(f, f') = 1</InlineMath> where <InlineMath>f'</InlineMath>
          is the formal derivative.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Checking Separability</p>
        <p className="mt-2">
          Consider <InlineMath>f(x) = x^3 - 2 \in \mathbb{"{Q}"}[x]</InlineMath>.
        </p>
        <p className="mt-2">
          The derivative is <InlineMath>f'(x) = 3x^2</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>\gcd(x^3 - 2, 3x^2) = 1</InlineMath>, this polynomial is separable.
        </p>
      </div>

      <h3>Characteristic Zero vs Characteristic p</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Characteristic Zero</h4>
        <p>
          If <InlineMath>\text{"{char}"}(F) = 0</InlineMath>, then every irreducible polynomial
          in <InlineMath>F[x]</InlineMath> is separable.
        </p>
      </div>

      <p>
        <strong>Proof:</strong> If <InlineMath>f(x)</InlineMath> is irreducible of degree <InlineMath>n</InlineMath>,
        then <InlineMath>f'(x)</InlineMath> has degree <InlineMath>n-1</InlineMath> and leading
        coefficient <InlineMath>n \cdot a_n \neq 0</InlineMath> (since <InlineMath>n \neq 0</InlineMath>
        in characteristic zero). Thus <InlineMath>f \nmid f'</InlineMath>, so they share no common
        factor since <InlineMath>f</InlineMath> is irreducible.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Characteristic p</h4>
        <p>
          If <InlineMath>\text{"{char}"}(F) = p &gt; 0</InlineMath>, an irreducible polynomial
          <InlineMath>f(x) \in F[x]</InlineMath> is inseparable if and only
          if <InlineMath>f(x) = g(x^p)</InlineMath> for some polynomial <InlineMath>g(x) \in F[x]</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-red-500">
        <p className="font-semibold text-red-400">Example: Inseparable Polynomial</p>
        <p className="mt-2">
          Let <InlineMath>F = \mathbb{"{F}"}_p(t)</InlineMath>, the field of rational functions over <InlineMath>\mathbb{"{F}"}_p</InlineMath>.
        </p>
        <p className="mt-2">
          Consider <InlineMath>f(x) = x^p - t \in F[x]</InlineMath>.
        </p>
        <p className="mt-2">
          This is irreducible (Eisenstein with <InlineMath>t</InlineMath>), but if <InlineMath>\alpha^p = t</InlineMath>:
        </p>
        <MathBlock>{`f(x) = x^p - t = x^p - \\alpha^p = (x - \\alpha)^p`}</MathBlock>
        <p className="mt-2">
          The polynomial has <InlineMath>\alpha</InlineMath> as a root of multiplicity <InlineMath>p</InlineMath>!
        </p>
      </div>

      <h3>Separable Elements and Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Separable Element</h4>
        <p>
          An algebraic element <InlineMath>\alpha</InlineMath> over <InlineMath>F</InlineMath>
          is <strong>separable over F</strong> if its minimal polynomial <InlineMath>m_\alpha(x)</InlineMath>
          is separable.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Separable Extension</h4>
        <p>
          An algebraic extension <InlineMath>K/F</InlineMath> is <strong>separable</strong> if
          every element of <InlineMath>K</InlineMath> is separable over <InlineMath>F</InlineMath>.
        </p>
      </div>

      <Callout type="info">
        <strong>Key Fact:</strong> All algebraic extensions in characteristic zero are separable.
        Over finite fields, all algebraic extensions are also separable. Inseparability only
        occurs in characteristic <InlineMath>p</InlineMath> over imperfect fields.
      </Callout>

      <h3>Perfect Fields</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Perfect Field</h4>
        <p>
          A field <InlineMath>F</InlineMath> is <strong>perfect</strong> if every algebraic
          extension of <InlineMath>F</InlineMath> is separable.
        </p>
        <p className="mt-3">
          Equivalently (in characteristic <InlineMath>p</InlineMath>), <InlineMath>F</InlineMath>
          is perfect if the Frobenius map <InlineMath>x \mapsto x^p</InlineMath> is surjective.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-emerald-500">
        <p className="font-semibold text-emerald-400">Examples of Perfect Fields</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>All fields of characteristic 0 (e.g., <InlineMath>\mathbb{"{Q}"}, \mathbb{"{R}"}, \mathbb{"{C}"}</InlineMath>)</li>
          <li>All finite fields <InlineMath>\mathbb{"{F}"}_q</InlineMath></li>
          <li>All algebraically closed fields</li>
        </ul>
        <p className="mt-3 font-semibold text-red-400">Example of Imperfect Field</p>
        <p className="mt-1 text-dark-300">
          <InlineMath>\mathbb{"{F}"}_p(t)</InlineMath> — the element <InlineMath>t</InlineMath>
          has no <InlineMath>p</InlineMath>-th root in this field
        </p>
      </div>

      <h3>The Separable Degree</h3>

      <p>
        For finite extensions, we can measure "how separable" an extension is:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Separable and Inseparable Degrees</h4>
        <p>
          For a finite extension <InlineMath>K/F</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-dark-300">
          <li>The <strong>separable degree</strong> <InlineMath>[K:F]_s</InlineMath> is the number
            of <InlineMath>F</InlineMath>-embeddings of <InlineMath>K</InlineMath> into <InlineMath>\overline{"{F}"}</InlineMath></li>
          <li>The <strong>inseparable degree</strong> <InlineMath>[K:F]_i = [K:F]/[K:F]_s</InlineMath></li>
        </ul>
        <MathBlock>{`[K:F] = [K:F]_s \\cdot [K:F]_i`}</MathBlock>
      </div>

      <p>
        The extension is separable iff <InlineMath>[K:F]_s = [K:F]</InlineMath>, i.e., <InlineMath>[K:F]_i = 1</InlineMath>.
      </p>

      <h3>Separable Closure</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <strong>separable closure</strong> of <InlineMath>F</InlineMath>
          in <InlineMath>K</InlineMath>, denoted <InlineMath>F^{"{\\text{sep}}"}</InlineMath>
          or <InlineMath>K^{"{\\text{sep}}"}/F</InlineMath>, is the set of all elements
          of <InlineMath>K</InlineMath> that are separable over <InlineMath>F</InlineMath>.
        </p>
      </div>

      <p>
        The separable closure is a field, and <InlineMath>K/F^{"{\\text{sep}}"}</InlineMath> is purely inseparable.
      </p>

      <h3>Purely Inseparable Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An algebraic extension <InlineMath>K/F</InlineMath> is <strong>purely inseparable</strong>
          if for every <InlineMath>\alpha \in K</InlineMath>, there exists <InlineMath>n \geq 0</InlineMath>
          such that <InlineMath>\alpha^{"{p^n}"} \in F</InlineMath>
          (where <InlineMath>p = \text{"{char}"}(F)</InlineMath>).
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Structure of Finite Extensions</h4>
        <p>
          Every finite extension <InlineMath>K/F</InlineMath> can be factored as:
        </p>
        <MathBlock>{`F \\subseteq K^{\\text{sep}} \\subseteq K`}</MathBlock>
        <p className="mt-3">
          where <InlineMath>K^{"{\\text{sep}}"}/F</InlineMath> is separable
          and <InlineMath>K/K^{"{\\text{sep}}"}</InlineMath> is purely inseparable.
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> A polynomial is separable if it has no repeated roots (checked
        via <InlineMath>\gcd(f, f') = 1</InlineMath>). In characteristic 0, all irreducible
        polynomials are separable. In characteristic <InlineMath>p</InlineMath>, inseparable
        polynomials have the form <InlineMath>g(x^p)</InlineMath>. Perfect fields (including
        characteristic 0 and finite fields) have only separable extensions. The degree of a
        finite extension factors as separable times inseparable degree. This structure is
        essential for Galois theory.
      </Callout>
    </LessonLayout>
  );
}
