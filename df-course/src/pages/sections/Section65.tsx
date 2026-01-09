import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2>Splitting Fields and Algebraic Closures</h2>
      <p>
        Every polynomial deserves a field where it factors completely into linear factors.
        <strong> Splitting fields</strong> are the minimal such extensions, while the
        <strong> algebraic closure</strong> is the universal extension where all polynomials split.
        These concepts are essential for understanding Galois theory.
      </p>

      <Callout type="info">
        <strong>Motivation:</strong> Over <InlineMath>\mathbb{"{R}"}</InlineMath>, the polynomial
        <InlineMath>x^2 + 1</InlineMath> doesn't split. Over <InlineMath>\mathbb{"{C}"}</InlineMath>,
        it factors as <InlineMath>(x-i)(x+i)</InlineMath>. We want to understand such extensions systematically.
      </Callout>

      <h3>Splitting Fields</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Splitting Field</h4>
        <p>
          Let <InlineMath>f(x) \in F[x]</InlineMath> be a polynomial of degree <InlineMath>n</InlineMath>.
          A <strong>splitting field</strong> for <InlineMath>f</InlineMath> over <InlineMath>F</InlineMath>
          is an extension <InlineMath>K/F</InlineMath> such that:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li><InlineMath>f</InlineMath> factors completely in <InlineMath>K[x]</InlineMath>:
            <MathBlock>{`f(x) = c(x - \\alpha_1)(x - \\alpha_2)\\cdots(x - \\alpha_n)`}</MathBlock>
            for some <InlineMath>\alpha_i \in K</InlineMath></li>
          <li><InlineMath>K = F(\alpha_1, \alpha_2, \ldots, \alpha_n)</InlineMath> (minimality)</li>
        </ol>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>The splitting field of <InlineMath>x^2 + 1</InlineMath> over <InlineMath>\mathbb{"{R}"}</InlineMath>
            is <InlineMath>\mathbb{"{C}"} = \mathbb{"{R}"}(i)</InlineMath></li>
          <li>The splitting field of <InlineMath>x^2 - 2</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath>
            is <InlineMath>\mathbb{"{Q}"}(\sqrt{"{2}"}) = \mathbb{"{Q}"}(\sqrt{"{2}"}, -\sqrt{"{2}"})</InlineMath></li>
          <li>The splitting field of <InlineMath>x^3 - 2</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath>
            is <InlineMath>\mathbb{"{Q}"}(\sqrt[3]{"{2}"}, \omega)</InlineMath> where <InlineMath>\omega = e^{"{2\\pi i/3}"}</InlineMath></li>
        </ul>
      </div>

      <h3>Existence and Uniqueness</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Existence</h4>
        <p>
          Every polynomial <InlineMath>f(x) \in F[x]</InlineMath> has a splitting field over <InlineMath>F</InlineMath>.
        </p>
      </div>

      <p>
        <strong>Proof sketch:</strong> Adjoin a root <InlineMath>\alpha_1</InlineMath> of an
        irreducible factor of <InlineMath>f</InlineMath>. In <InlineMath>F(\alpha_1)[x]</InlineMath>,
        factor out <InlineMath>(x - \alpha_1)</InlineMath> and repeat. Since degree decreases,
        this terminates.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Uniqueness (up to isomorphism)</h4>
        <p>
          Any two splitting fields of <InlineMath>f(x)</InlineMath> over <InlineMath>F</InlineMath>
          are isomorphic as <InlineMath>F</InlineMath>-algebras.
        </p>
      </div>

      <Callout type="info">
        <strong>Key Point:</strong> While the splitting field is unique up to isomorphism,
        the isomorphism itself is generally not unique. The collection of all such isomorphisms
        forms the Galois group.
      </Callout>

      <h3>Degree of Splitting Fields</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Degree Bounds</h4>
        <p>
          If <InlineMath>f(x) \in F[x]</InlineMath> has degree <InlineMath>n</InlineMath> and
          <InlineMath>K</InlineMath> is its splitting field, then:
        </p>
        <MathBlock>{`[K:F] \\leq n!`}</MathBlock>
        <p className="mt-3">
          If <InlineMath>f</InlineMath> is irreducible, then <InlineMath>n \mid [K:F]</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Splitting Field of x^3 - 2</p>
        <p className="mt-2">
          The roots are <InlineMath>\sqrt[3]{"{2}"}, \omega\sqrt[3]{"{2}"}, \omega^2\sqrt[3]{"{2}"}</InlineMath>
          where <InlineMath>\omega = e^{"{2\\pi i/3}"}</InlineMath>.
        </p>
        <p className="mt-2">
          The splitting field is <InlineMath>K = \mathbb{"{Q}"}(\sqrt[3]{"{2}"}, \omega)</InlineMath>.
        </p>
        <p className="mt-2">
          We have <InlineMath>[\mathbb{"{Q}"}(\sqrt[3]{"{2}"}):\mathbb{"{Q}"}] = 3</InlineMath> and
          <InlineMath>[\mathbb{"{Q}"}(\sqrt[3]{"{2}"}, \omega):\mathbb{"{Q}"}(\sqrt[3]{"{2}"})] = 2</InlineMath>.
        </p>
        <p className="mt-2">
          So <InlineMath>[K:\mathbb{"{Q}"}] = 6</InlineMath>, which divides <InlineMath>3! = 6</InlineMath>.
        </p>
      </div>

      <h3>Algebraic Closures</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Algebraically Closed Field</h4>
        <p>
          A field <InlineMath>K</InlineMath> is <strong>algebraically closed</strong> if every
          non-constant polynomial in <InlineMath>K[x]</InlineMath> has a root in <InlineMath>K</InlineMath>.
        </p>
        <p className="mt-3">
          Equivalently, every polynomial in <InlineMath>K[x]</InlineMath> splits completely into linear factors.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Algebraic Closure</h4>
        <p>
          An <strong>algebraic closure</strong> of a field <InlineMath>F</InlineMath>,
          denoted <InlineMath>\overline{"{F}"}</InlineMath>, is an algebraic extension of
          <InlineMath>F</InlineMath> that is algebraically closed.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\mathbb{"{C}"}</InlineMath> is the algebraic closure of <InlineMath>\mathbb{"{R}"}</InlineMath>
            (Fundamental Theorem of Algebra)</li>
          <li><InlineMath>\mathbb{"{C}"}</InlineMath> is also algebraically closed, so <InlineMath>\overline{"{\\mathbb{C}}"} = \mathbb{"{C}"}</InlineMath></li>
          <li><InlineMath>\overline{"{\\mathbb{Q}}"}</InlineMath>, the algebraic numbers, is a proper subfield
            of <InlineMath>\mathbb{"{C}"}</InlineMath></li>
          <li>Every finite field <InlineMath>\mathbb{"{F}"}_p</InlineMath> has an algebraic closure
            <InlineMath>\overline{"{\\mathbb{F}}"}_p</InlineMath></li>
        </ul>
      </div>

      <h3>Existence and Uniqueness of Algebraic Closures</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem (Steinitz)</h4>
        <p>
          Every field <InlineMath>F</InlineMath> has an algebraic closure, and any two algebraic
          closures of <InlineMath>F</InlineMath> are isomorphic (as <InlineMath>F</InlineMath>-algebras).
        </p>
      </div>

      <Callout type="warning">
        <strong>Set-theoretic subtlety:</strong> The proof of existence requires the axiom of choice
        (specifically, Zorn's lemma). The algebraic closure is constructed as a union of all
        algebraic extensions, which requires careful handling.
      </Callout>

      <h3>Properties of Algebraic Closures</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          Let <InlineMath>\overline{"{F}"}</InlineMath> be an algebraic closure of <InlineMath>F</InlineMath>. Then:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3 text-dark-300">
          <li>Every polynomial <InlineMath>f(x) \in F[x]</InlineMath> splits
            in <InlineMath>\overline{"{F}"}[x]</InlineMath></li>
          <li>The splitting field of any <InlineMath>f(x) \in F[x]</InlineMath> is isomorphic
            to a subfield of <InlineMath>\overline{"{F}"}</InlineMath></li>
          <li>Every algebraic extension of <InlineMath>F</InlineMath> embeds
            into <InlineMath>\overline{"{F}"}</InlineMath></li>
          <li><InlineMath>\overline{"{F}"}</InlineMath> is the union of all finite extensions of <InlineMath>F</InlineMath>
            inside <InlineMath>\overline{"{F}"}</InlineMath></li>
        </ol>
      </div>

      <h3>Splitting Fields as Subfields of the Algebraic Closure</h3>

      <p>
        We can view all splitting fields as living inside a fixed algebraic closure:
      </p>

      <MathBlock>{`F \\subseteq K_1 \\subseteq K_2 \\subseteq \\cdots \\subseteq \\overline{F}`}</MathBlock>

      <p>
        where each <InlineMath>K_i</InlineMath> is the splitting field of some polynomial.
        This perspective simplifies many arguments in Galois theory.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">The Algebraic Numbers</p>
        <p className="mt-2">
          The algebraic closure <InlineMath>\overline{"{\\mathbb{Q}}"}</InlineMath> is called the field
          of <strong>algebraic numbers</strong>. It is countable (surprising!) because there are
          only countably many polynomials over <InlineMath>\mathbb{"{Q}"}</InlineMath>, each with
          finitely many roots.
        </p>
        <MathBlock>{`|\\overline{\\mathbb{Q}}| = \\aleph_0`}</MathBlock>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> A splitting field is the smallest extension where a polynomial
        factors completely. Every polynomial has a splitting field, unique up to isomorphism.
        The algebraic closure <InlineMath>\overline{"{F}"}</InlineMath> is the ultimate extension
        where all polynomials split; it exists and is unique up to isomorphism by Steinitz's theorem.
        Working inside a fixed algebraic closure provides a convenient framework for Galois theory.
      </Callout>
    </LessonLayout>
  );
}
