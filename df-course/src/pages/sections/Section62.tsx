import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2>Field Extensions</h2>

      <p>
        Field extensions form the foundation of Galois theory and algebraic number theory.
        Understanding how fields extend to larger fields, and the interplay between algebraic
        and transcendental elements, is essential for solving polynomial equations and
        understanding algebraic structures.
      </p>

      <h3>Basic Definitions</h3>

      <Definition title="Field Extension">
        <p>
          A <strong>field extension</strong> is an inclusion of fields <InlineMath>{'F \\subseteq K'}</InlineMath>
          (or a field homomorphism <InlineMath>{'F \\to K'}</InlineMath>). We write <InlineMath>{'K/F'}</InlineMath>
          and call <InlineMath>F</InlineMath> the <strong>base field</strong> and <InlineMath>K</InlineMath>
          the <strong>extension field</strong>.
        </p>
      </Definition>

      <Definition title="Degree of Extension">
        <p>
          The <strong>degree</strong> of <InlineMath>{'K/F'}</InlineMath> is the dimension of <InlineMath>K</InlineMath>
          as an <InlineMath>F</InlineMath>-vector space:
        </p>
        <MathBlock>
          {'[K : F] = \\dim_F K'}
        </MathBlock>
        <p className="mt-2">
          The extension is <strong>finite</strong> if <InlineMath>{'[K : F] < \\infty'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Degrees of Common Extensions">
        <p>
          <InlineMath>{'[\\mathbb{C} : \\mathbb{R}] = 2'}</InlineMath> (basis <InlineMath>{'\\{1, i\\}'}</InlineMath>)
        </p>
        <p className="mt-2">
          <InlineMath>{'[\\mathbb{Q}(\\sqrt{2}) : \\mathbb{Q}] = 2'}</InlineMath> (basis <InlineMath>{'\\{1, \\sqrt{2}\\}'}</InlineMath>)
        </p>
        <p className="mt-2">
          <InlineMath>{'[\\mathbb{Q}(\\sqrt[3]{2}) : \\mathbb{Q}] = 3'}</InlineMath> (basis <InlineMath>{'\\{1, \\sqrt[3]{2}, \\sqrt[3]{4}\\}'}</InlineMath>)
        </p>
        <p className="mt-2">
          <InlineMath>{'[\\mathbb{R} : \\mathbb{Q}] = \\infty'}</InlineMath> (uncountable over countable)
        </p>
      </Example>

      <Theorem title="Tower Law"
        proof={
          <>
            <p>
              If <InlineMath>{'\\{e_i\\}'}</InlineMath> is an <InlineMath>F</InlineMath>-basis for <InlineMath>K</InlineMath>
              and <InlineMath>{'\\{f_j\\}'}</InlineMath> is a <InlineMath>K</InlineMath>-basis for <InlineMath>L</InlineMath>,
              then <InlineMath>{'\\{e_i f_j\\}'}</InlineMath> is an <InlineMath>F</InlineMath>-basis for <InlineMath>L</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'F \\subseteq K \\subseteq L'}</InlineMath> are fields, then:
        </p>
        <MathBlock>
          {'[L : F] = [L : K] \\cdot [K : F]'}
        </MathBlock>
      </Theorem>

      <Example title="Applying the Tower Law">
        <p>
          <InlineMath>{'[\\mathbb{Q}(\\sqrt{2}, \\sqrt{3}) : \\mathbb{Q}]'}</InlineMath>:
        </p>
        <p className="mt-2">
          <InlineMath>{'[\\mathbb{Q}(\\sqrt{2}) : \\mathbb{Q}] = 2'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>{'[\\mathbb{Q}(\\sqrt{2}, \\sqrt{3}) : \\mathbb{Q}(\\sqrt{2})] = 2'}</InlineMath> (since
          <InlineMath>{'\\sqrt{3} \\notin \\mathbb{Q}(\\sqrt{2})'}</InlineMath>)
        </p>
        <p className="mt-2">
          Therefore <InlineMath>{'[\\mathbb{Q}(\\sqrt{2}, \\sqrt{3}) : \\mathbb{Q}] = 2 \\cdot 2 = 4'}</InlineMath>
        </p>
        <p className="mt-2">
          Basis: <InlineMath>{'\\{1, \\sqrt{2}, \\sqrt{3}, \\sqrt{6}\\}'}</InlineMath>
        </p>
      </Example>

      <h3>Algebraic and Transcendental Elements</h3>

      <Definition title="Algebraic Element">
        <p>
          An element <InlineMath>{'\\alpha \\in K'}</InlineMath> is <strong>algebraic</strong> over <InlineMath>F</InlineMath>
          if <InlineMath>{'f(\\alpha) = 0'}</InlineMath> for some nonzero polynomial <InlineMath>{'f \\in F[x]'}</InlineMath>.
        </p>
        <p className="mt-2">
          Otherwise, <InlineMath>{'\\alpha'}</InlineMath> is <strong>transcendental</strong> over <InlineMath>F</InlineMath>.
        </p>
      </Definition>

      <Definition title="Minimal Polynomial">
        <p>
          If <InlineMath>{'\\alpha'}</InlineMath> is algebraic over <InlineMath>F</InlineMath>, its
          <strong>minimal polynomial</strong> <InlineMath>{'m_\\alpha(x) \\in F[x]'}</InlineMath> is the unique
          monic polynomial of least degree with <InlineMath>{'m_\\alpha(\\alpha) = 0'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Properties of Minimal Polynomial"
        proof={
          <>
            <p>
              Let <InlineMath>I</InlineMath> be the ideal of polynomials vanishing at <InlineMath>{'\\alpha'}</InlineMath>.
              Since <InlineMath>F[x]</InlineMath> is a PID, <InlineMath>{'I = (m)'}</InlineMath> for some monic
              <InlineMath>m</InlineMath>. This is the minimal polynomial.
            </p>
            <p className="mt-2">
              If <InlineMath>m</InlineMath> factored, one factor would have <InlineMath>{'\\alpha'}</InlineMath> as a root
              (fields have no zero divisors), contradicting minimality.
            </p>
          </>
        }
      >
        <p>
          The minimal polynomial <InlineMath>{'m_\\alpha'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Is irreducible over <InlineMath>F</InlineMath></li>
          <li>Divides every polynomial in <InlineMath>F[x]</InlineMath> having <InlineMath>{'\\alpha'}</InlineMath> as a root</li>
          <li>Has degree equal to <InlineMath>{'[F(\\alpha) : F]'}</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Minimal Polynomials">
        <p>
          <InlineMath>{'\\sqrt{2}'}</InlineMath> over <InlineMath>{'\\mathbb{Q}'}</InlineMath>:
          <InlineMath>{'m_{\\sqrt{2}}(x) = x^2 - 2'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>{'\\sqrt[3]{2}'}</InlineMath> over <InlineMath>{'\\mathbb{Q}'}</InlineMath>:
          <InlineMath>{'m_{\\sqrt[3]{2}}(x) = x^3 - 2'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>i</InlineMath> over <InlineMath>{'\\mathbb{R}'}</InlineMath>:
          <InlineMath>{'m_i(x) = x^2 + 1'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>i</InlineMath> over <InlineMath>{'\\mathbb{C}'}</InlineMath>:
          <InlineMath>{'m_i(x) = x - i'}</InlineMath>
        </p>
      </Example>

      <h3>Simple Extensions</h3>

      <Definition title="Simple Extension">
        <p>
          A field extension <InlineMath>{'K/F'}</InlineMath> is <strong>simple</strong> if <InlineMath>{'K = F(\\alpha)'}</InlineMath>
          for some <InlineMath>{'\\alpha \\in K'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Structure of Simple Algebraic Extensions"
        proof={
          <>
            <p>
              The evaluation map <InlineMath>{'\\text{ev}_\\alpha: F[x] \\to F(\\alpha)'}</InlineMath> is surjective
              (since <InlineMath>{'F(\\alpha)'}</InlineMath> is generated by <InlineMath>{'\\alpha'}</InlineMath>)
              with kernel <InlineMath>{'(m_\\alpha)'}</InlineMath>.
            </p>
            <p className="mt-2">
              By the first isomorphism theorem, <InlineMath>{'F[x]/(m_\\alpha) \\cong F(\\alpha)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\alpha'}</InlineMath> is algebraic over <InlineMath>F</InlineMath> with minimal
          polynomial <InlineMath>m</InlineMath> of degree <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>
          {'F(\\alpha) \\cong F[x]/(m(x))'}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{'[F(\\alpha) : F] = n = \\deg m'}</InlineMath>, with basis <InlineMath>{'\\{1, \\alpha, \\alpha^2, \\ldots, \\alpha^{n-1}\\}'}</InlineMath>.
        </p>
      </Theorem>

      <h3>Algebraic Extensions</h3>

      <Definition title="Algebraic Extension">
        <p>
          An extension <InlineMath>{'K/F'}</InlineMath> is <strong>algebraic</strong> if every element of <InlineMath>K</InlineMath>
          is algebraic over <InlineMath>F</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Finite Implies Algebraic"
        proof={
          <>
            <p>
              If <InlineMath>{'[K : F] = n'}</InlineMath> and <InlineMath>{'\\alpha \\in K'}</InlineMath>, the elements
              <InlineMath>{'1, \\alpha, \\alpha^2, \\ldots, \\alpha^n'}</InlineMath> are <InlineMath>{'n + 1'}</InlineMath>
              vectors in an <InlineMath>n</InlineMath>-dimensional space, hence linearly dependent.
            </p>
            <p className="mt-2">
              A dependency relation gives a polynomial with <InlineMath>{'\\alpha'}</InlineMath> as a root.
            </p>
          </>
        }
      >
        <p>
          Every finite extension is algebraic.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Converse is False:</strong> The algebraic closure <InlineMath>{'\\overline{\\mathbb{Q}}'}</InlineMath>
        is algebraic over <InlineMath>{'\\mathbb{Q}'}</InlineMath> but infinite-dimensional.
      </Callout>

      <Theorem title="Transitivity of Algebraic Extensions"
        proof={
          <>
            <p>
              If <InlineMath>{'\\gamma \\in L'}</InlineMath> is algebraic over <InlineMath>K</InlineMath>,
              let <InlineMath>{'m(x) = x^n + a_{n-1}x^{n-1} + \\cdots + a_0 \\in K[x]'}</InlineMath> be its minimal polynomial.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'\\gamma'}</InlineMath> is algebraic over <InlineMath>{'F(a_0, \\ldots, a_{n-1})'}</InlineMath>.
              Since the <InlineMath>{'a_i'}</InlineMath> are algebraic over <InlineMath>F</InlineMath>,
              <InlineMath>{'[F(a_0, \\ldots, a_{n-1}) : F] < \\infty'}</InlineMath>.
            </p>
            <p className="mt-2">
              By the tower law, <InlineMath>{'[F(\\gamma) : F] < \\infty'}</InlineMath>, so <InlineMath>{'\\gamma'}</InlineMath>
              is algebraic over <InlineMath>F</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'K/F'}</InlineMath> and <InlineMath>{'L/K'}</InlineMath> are algebraic, then <InlineMath>{'L/F'}</InlineMath> is algebraic.
        </p>
      </Theorem>

      <h3>Algebraic Closure</h3>

      <Definition title="Algebraically Closed">
        <p>
          A field <InlineMath>F</InlineMath> is <strong>algebraically closed</strong> if every non-constant
          polynomial in <InlineMath>F[x]</InlineMath> has a root in <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, the only algebraic extension of <InlineMath>F</InlineMath> is <InlineMath>F</InlineMath> itself.
        </p>
      </Definition>

      <Definition title="Algebraic Closure">
        <p>
          An <strong>algebraic closure</strong> of <InlineMath>F</InlineMath>, denoted <InlineMath>{'\\bar{F}'}</InlineMath>,
          is an algebraic extension that is algebraically closed.
        </p>
      </Definition>

      <Theorem title="Existence and Uniqueness"
        proof={
          <>
            <p>
              Existence uses Zorn's lemma on algebraic extensions. Uniqueness (up to isomorphism) uses
              extension of embeddings.
            </p>
          </>
        }
      >
        <p>
          Every field has an algebraic closure, unique up to isomorphism.
        </p>
      </Theorem>

      <Example title="Algebraic Closures">
        <p>
          <InlineMath>{'\\overline{\\mathbb{R}} = \\mathbb{C}'}</InlineMath> (Fundamental Theorem of Algebra)
        </p>
        <p className="mt-2">
          <InlineMath>{'\\overline{\\mathbb{Q}}'}</InlineMath> = algebraic numbers (roots of polynomials over <InlineMath>{'\\mathbb{Q}'}</InlineMath>)
        </p>
        <p className="mt-2">
          <InlineMath>{'\\overline{\\mathbb{F}_p}'}</InlineMath> = <InlineMath>{'\\bigcup_{n=1}^{\\infty} \\mathbb{F}_{p^n}'}</InlineMath>
        </p>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> Field extensions <InlineMath>{'K/F'}</InlineMath> are measured by their
        degree <InlineMath>{'[K:F]'}</InlineMath>. The tower law relates degrees in chains of extensions.
        Elements are algebraic (root of a polynomial) or transcendental. For algebraic <InlineMath>{'\\alpha'}</InlineMath>,
        <InlineMath>{'F(\\alpha) \\cong F[x]/(m_\\alpha)'}</InlineMath>. Every field has an algebraic closure
        containing roots of all polynomials.
      </Callout>
    </LessonLayout>
  );
}
