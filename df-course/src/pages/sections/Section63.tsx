import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2>Algebraic Extensions</h2>
      <p>
        We now begin our systematic study of field extensions, focusing on those elements
        that satisfy polynomial equations over the base field. These <strong>algebraic extensions</strong>
        form the foundation for Galois theory and the study of polynomial solvability.
      </p>

      <Callout type="info">
        <strong>Central Theme:</strong> An element is algebraic over a field if it is a root
        of some nonzero polynomial with coefficients in that field. Understanding such elements
        and the extensions they generate is fundamental to abstract algebra.
      </Callout>

      <h3>Definitions</h3>

      <p>
        Let <InlineMath>F</InlineMath> be a field and <InlineMath>K</InlineMath> an extension
        field of <InlineMath>F</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Algebraic and Transcendental Elements</h4>
        <p>
          An element <InlineMath>\alpha \in K</InlineMath> is <strong>algebraic over F</strong> if
          there exists a nonzero polynomial <InlineMath>f(x) \in F[x]</InlineMath> such that
          <InlineMath>f(\alpha) = 0</InlineMath>.
        </p>
        <p className="mt-3">
          An element that is not algebraic over <InlineMath>F</InlineMath> is called
          <strong> transcendental over F</strong>.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li><InlineMath>\sqrt{"{2}"}</InlineMath> is algebraic over <InlineMath>\mathbb{"{Q}"}</InlineMath> since
            it satisfies <InlineMath>x^2 - 2 = 0</InlineMath></li>
          <li><InlineMath>i</InlineMath> is algebraic over <InlineMath>\mathbb{"{R}"}</InlineMath> since
            it satisfies <InlineMath>x^2 + 1 = 0</InlineMath></li>
          <li><InlineMath>\pi</InlineMath> and <InlineMath>e</InlineMath> are transcendental
            over <InlineMath>\mathbb{"{Q}"}</InlineMath> (deep results from analysis)</li>
        </ul>
      </div>

      <h3>The Minimal Polynomial</h3>

      <p>
        Among all polynomials having <InlineMath>\alpha</InlineMath> as a root, one plays a special role:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Minimal Polynomial</h4>
        <p>
          If <InlineMath>\alpha</InlineMath> is algebraic over <InlineMath>F</InlineMath>, the
          <strong> minimal polynomial</strong> of <InlineMath>\alpha</InlineMath> over <InlineMath>F</InlineMath>,
          denoted <InlineMath>m_\alpha(x)</InlineMath> or <InlineMath>\min(F, \alpha)</InlineMath>, is
          the unique monic polynomial of smallest degree in <InlineMath>F[x]</InlineMath> having
          <InlineMath>\alpha</InlineMath> as a root.
        </p>
      </div>

      <MathBlock>{`\\text{Key Properties of } m_\\alpha(x):`}</MathBlock>
      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><InlineMath>m_\alpha(x)</InlineMath> is irreducible over <InlineMath>F</InlineMath></li>
        <li>If <InlineMath>f(x) \in F[x]</InlineMath> and <InlineMath>f(\alpha) = 0</InlineMath>,
          then <InlineMath>m_\alpha(x) \mid f(x)</InlineMath></li>
        <li><InlineMath>m_\alpha(x)</InlineMath> generates the ideal <InlineMath>\ker(\phi)</InlineMath>
          where <InlineMath>\phi: F[x] \to K</InlineMath> is the evaluation homomorphism at <InlineMath>\alpha</InlineMath></li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Minimal Polynomials</p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-dark-300">
          <li>The minimal polynomial of <InlineMath>\sqrt{"{2}"}</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath> is <InlineMath>x^2 - 2</InlineMath></li>
          <li>The minimal polynomial of <InlineMath>\sqrt[3]{"{2}"}</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath> is <InlineMath>x^3 - 2</InlineMath></li>
          <li>The minimal polynomial of <InlineMath>i</InlineMath> over <InlineMath>\mathbb{"{R}"}</InlineMath> is <InlineMath>x^2 + 1</InlineMath></li>
          <li>The minimal polynomial of <InlineMath>\zeta_n = e^{"{2\\pi i/n}"}</InlineMath> over <InlineMath>\mathbb{"{Q}"}</InlineMath>
            is the <InlineMath>n</InlineMath>-th cyclotomic polynomial <InlineMath>\Phi_n(x)</InlineMath></li>
        </ul>
      </div>

      <h3>The Degree of an Extension</h3>

      <p>
        The <strong>degree</strong> of a field extension <InlineMath>K/F</InlineMath>,
        denoted <InlineMath>[K:F]</InlineMath>, is the dimension of <InlineMath>K</InlineMath>
        as a vector space over <InlineMath>F</InlineMath>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Degree Equals Degree of Minimal Polynomial</h4>
        <p>
          If <InlineMath>\alpha</InlineMath> is algebraic over <InlineMath>F</InlineMath> with
          minimal polynomial <InlineMath>m_\alpha(x)</InlineMath> of degree <InlineMath>n</InlineMath>, then:
        </p>
        <MathBlock>{`[F(\\alpha):F] = n`}</MathBlock>
        <p className="mt-3">
          Moreover, <InlineMath>{`\\{1, \\alpha, \\alpha^2, \\ldots, \\alpha^{n-1}\\}`}</InlineMath> is a
          basis for <InlineMath>F(\alpha)</InlineMath> over <InlineMath>F</InlineMath>.
        </p>
      </div>

      <h3>The Tower Law</h3>

      <p>
        When extensions are stacked, their degrees multiply:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Tower Law (Multiplicativity of Degrees)</h4>
        <p>
          If <InlineMath>F \subseteq K \subseteq L</InlineMath> are fields, then:
        </p>
        <MathBlock>{`[L:F] = [L:K] \\cdot [K:F]`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Applying the Tower Law</p>
        <p className="mt-2">
          Consider <InlineMath>\mathbb{"{Q}"} \subseteq \mathbb{"{Q}"}(\sqrt{"{2}"}) \subseteq \mathbb{"{Q}"}(\sqrt{"{2}"}, \sqrt{"{3}"})</InlineMath>.
        </p>
        <p className="mt-2">
          We have <InlineMath>[\mathbb{"{Q}"}(\sqrt{"{2}"}):\mathbb{"{Q}"}] = 2</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>\sqrt{"{3}"} \notin \mathbb{"{Q}"}(\sqrt{"{2}"})</InlineMath>,
          we have <InlineMath>[\mathbb{"{Q}"}(\sqrt{"{2}"}, \sqrt{"{3}"}):\mathbb{"{Q}"}(\sqrt{"{2}"})] = 2</InlineMath>.
        </p>
        <p className="mt-2">
          By the Tower Law: <InlineMath>[\mathbb{"{Q}"}(\sqrt{"{2}"}, \sqrt{"{3}"}):\mathbb{"{Q}"}] = 2 \cdot 2 = 4</InlineMath>.
        </p>
      </div>

      <h3>Algebraic Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition: Algebraic Extension</h4>
        <p>
          An extension <InlineMath>K/F</InlineMath> is called <strong>algebraic</strong> if every
          element of <InlineMath>K</InlineMath> is algebraic over <InlineMath>F</InlineMath>.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Finite Extensions are Algebraic</h4>
        <p>
          If <InlineMath>[K:F] &lt; \infty</InlineMath>, then <InlineMath>K/F</InlineMath> is algebraic.
        </p>
      </div>

      <p>
        <strong>Proof sketch:</strong> If <InlineMath>\alpha \in K</InlineMath> and <InlineMath>[K:F] = n</InlineMath>,
        then <InlineMath>1, \alpha, \alpha^2, \ldots, \alpha^n</InlineMath> are <InlineMath>n+1</InlineMath>
        elements in an <InlineMath>n</InlineMath>-dimensional vector space, hence linearly dependent.
        This gives a nonzero polynomial relation.
      </p>

      <Callout type="warning">
        <strong>Caution:</strong> The converse is false! There exist algebraic extensions of infinite
        degree. For example, the algebraic closure <InlineMath>\overline{"{\\mathbb{Q}}"}</InlineMath>
        of <InlineMath>\mathbb{"{Q}"}</InlineMath> is algebraic but <InlineMath>[\overline{"{\\mathbb{Q}}"}:\mathbb{"{Q}"}] = \infty</InlineMath>.
      </Callout>

      <h3>Transitivity of Algebraic Extensions</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          If <InlineMath>K/F</InlineMath> and <InlineMath>L/K</InlineMath> are both algebraic
          extensions, then <InlineMath>L/F</InlineMath> is algebraic.
        </p>
      </div>

      <h3>The Algebraic Closure</h3>

      <p>
        Within any extension <InlineMath>K/F</InlineMath>, the algebraic elements form a subfield:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          The set of all elements in <InlineMath>K</InlineMath> that are algebraic
          over <InlineMath>F</InlineMath> forms a subfield of <InlineMath>K</InlineMath>
          containing <InlineMath>F</InlineMath>.
        </p>
      </div>

      <p>
        This motivates the definition of the algebraic closure, which we'll study in a later section.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> Algebraic extensions arise from adjoining roots of polynomials.
        The minimal polynomial uniquely characterizes an algebraic element and determines the degree
        of the simple extension it generates. The Tower Law shows that degrees multiply in towers
        of extensions. Finite extensions are always algebraic, but algebraic extensions need not be finite.
        These concepts provide the vocabulary for Galois theory.
      </Callout>
    </LessonLayout>
  );
}
