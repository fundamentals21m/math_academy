import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2>Properties of Ideals: Prime and Maximal Ideals</h2>

      <p>
        Among all ideals of a ring, two special types stand out: prime ideals and maximal ideals.
        These notions generalize the concepts of prime numbers and maximal divisibility from the
        integers, and they play a central role in commutative algebra and algebraic geometry.
      </p>

      <h3>Prime Ideals</h3>

      <Definition title="Prime Ideal">
        <p>
          An ideal <InlineMath>P</InlineMath> of a commutative ring <InlineMath>R</InlineMath> is
          <strong>prime</strong> if <InlineMath>{'P \\neq R'}</InlineMath> and for all <InlineMath>{'a, b \\in R'}</InlineMath>:
        </p>
        <MathBlock>
          {'ab \\in P \\implies a \\in P \\text{ or } b \\in P'}
        </MathBlock>
      </Definition>

      <Theorem title="Characterization via Quotient"
        proof={
          <>
            <p>
              <InlineMath>{'(\\Rightarrow)'}</InlineMath> Suppose <InlineMath>P</InlineMath> is prime. If
              <InlineMath>{'(a + P)(b + P) = ab + P = 0 + P'}</InlineMath> in <InlineMath>R/P</InlineMath>,
              then <InlineMath>{'ab \\in P'}</InlineMath>, so <InlineMath>{'a \\in P'}</InlineMath> or
              <InlineMath>{'b \\in P'}</InlineMath>, meaning <InlineMath>{'a + P = 0'}</InlineMath> or
              <InlineMath>{'b + P = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>{'(\\Leftarrow)'}</InlineMath> Suppose <InlineMath>R/P</InlineMath> is an integral domain.
              If <InlineMath>{'ab \\in P'}</InlineMath>, then <InlineMath>{'(a+P)(b+P) = 0'}</InlineMath> in <InlineMath>R/P</InlineMath>,
              so <InlineMath>{'a+P = 0'}</InlineMath> or <InlineMath>{'b+P = 0'}</InlineMath>, meaning
              <InlineMath>{'a \\in P'}</InlineMath> or <InlineMath>{'b \\in P'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          An ideal <InlineMath>P</InlineMath> is prime if and only if <InlineMath>R/P</InlineMath> is an integral domain.
        </p>
      </Theorem>

      <Example title="Prime Ideals in Z">
        <p>
          In <InlineMath>{'\\mathbb{Z}'}</InlineMath>, the prime ideals are:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'(0)'}</InlineMath> — since <InlineMath>{'\\mathbb{Z}/(0) \\cong \\mathbb{Z}'}</InlineMath> is an integral domain</li>
          <li><InlineMath>{'(p)'}</InlineMath> for prime <InlineMath>p</InlineMath> — since <InlineMath>{'\\mathbb{Z}/(p) \\cong \\mathbb{Z}_p'}</InlineMath> is a field</li>
        </ul>
        <p className="mt-2">
          Note that <InlineMath>{'(6)'}</InlineMath> is NOT prime because <InlineMath>{'2 \\cdot 3 = 6 \\in (6)'}</InlineMath> but
          <InlineMath>{'2 \\notin (6)'}</InlineMath> and <InlineMath>{'3 \\notin (6)'}</InlineMath>.
        </p>
      </Example>

      <Example title="Prime Ideal in Polynomial Ring">
        <p>
          In <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>, the ideal <InlineMath>{'(x)'}</InlineMath> is prime because
        </p>
        <MathBlock>
          {'\\mathbb{Z}[x]/(x) \\cong \\mathbb{Z}'}
        </MathBlock>
        <p className="mt-2">
          (evaluating at <InlineMath>{'x = 0'}</InlineMath>), which is an integral domain.
        </p>
      </Example>

      <h3>Maximal Ideals</h3>

      <Definition title="Maximal Ideal">
        <p>
          An ideal <InlineMath>M</InlineMath> of a ring <InlineMath>R</InlineMath> is <strong>maximal</strong>
          if <InlineMath>{'M \\neq R'}</InlineMath> and there is no ideal <InlineMath>I</InlineMath> with
          <InlineMath>{'M \\subsetneq I \\subsetneq R'}</InlineMath>.
        </p>
        <p className="mt-2">
          In other words, <InlineMath>M</InlineMath> is maximal among proper ideals under inclusion.
        </p>
      </Definition>

      <Theorem title="Characterization via Quotient"
        proof={
          <>
            <p>
              By the correspondence theorem, ideals of <InlineMath>R/M</InlineMath> correspond bijectively
              to ideals of <InlineMath>R</InlineMath> containing <InlineMath>M</InlineMath>.
            </p>
            <p className="mt-2">
              <InlineMath>M</InlineMath> is maximal if and only if the only ideals containing <InlineMath>M</InlineMath>
              are <InlineMath>M</InlineMath> and <InlineMath>R</InlineMath>, which corresponds to <InlineMath>R/M</InlineMath>
              having only ideals <InlineMath>{'(0)'}</InlineMath> and <InlineMath>R/M</InlineMath> itself.
            </p>
            <p className="mt-2">
              A commutative ring with unity whose only ideals are <InlineMath>{'(0)'}</InlineMath> and the
              whole ring is a field.
            </p>
          </>
        }
      >
        <p>
          An ideal <InlineMath>M</InlineMath> is maximal if and only if <InlineMath>R/M</InlineMath> is a field.
        </p>
      </Theorem>

      <Theorem title="Maximal Implies Prime"
        proof={
          <>
            <p>
              If <InlineMath>M</InlineMath> is maximal, then <InlineMath>R/M</InlineMath> is a field.
              Every field is an integral domain, so <InlineMath>R/M</InlineMath> is an integral domain,
              which means <InlineMath>M</InlineMath> is prime.
            </p>
          </>
        }
      >
        <p>
          Every maximal ideal is prime.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>The Converse is False:</strong> Not every prime ideal is maximal. For example,
        <InlineMath>{'(0)'}</InlineMath> is prime in <InlineMath>{'\\mathbb{Z}'}</InlineMath> (since
        <InlineMath>{'\\mathbb{Z}'}</InlineMath> is an integral domain) but not maximal (since
        <InlineMath>{'(0) \\subsetneq (2) \\subsetneq \\mathbb{Z}'}</InlineMath>).
      </Callout>

      <Example title="Maximal Ideals in Z">
        <p>
          In <InlineMath>{'\\mathbb{Z}'}</InlineMath>, the maximal ideals are exactly <InlineMath>{'(p)'}</InlineMath>
          for prime <InlineMath>p</InlineMath>, since <InlineMath>{'\\mathbb{Z}/(p) \\cong \\mathbb{Z}_p'}</InlineMath>
          is a field.
        </p>
        <p className="mt-2">
          Note: <InlineMath>{'(0)'}</InlineMath> is prime but not maximal in <InlineMath>{'\\mathbb{Z}'}</InlineMath>.
        </p>
      </Example>

      <Example title="Maximal Ideals in F[x]">
        <p>
          Let <InlineMath>F</InlineMath> be a field. The maximal ideals of <InlineMath>F[x]</InlineMath> are
          precisely <InlineMath>{'(f(x))'}</InlineMath> where <InlineMath>f(x)</InlineMath> is irreducible.
        </p>
        <p className="mt-2">
          For example, in <InlineMath>{'\\mathbb{R}[x]'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'(x - a)'}</InlineMath> is maximal for any <InlineMath>{'a \\in \\mathbb{R}'}</InlineMath></li>
          <li><InlineMath>{'(x^2 + 1)'}</InlineMath> is maximal (irreducible over <InlineMath>{'\\mathbb{R}'}</InlineMath>)</li>
        </ul>
      </Example>

      <h3>Existence of Maximal Ideals</h3>

      <Theorem title="Existence of Maximal Ideals"
        proof={
          <>
            <p>
              Consider the set <InlineMath>{'\\mathcal{S}'}</InlineMath> of all proper ideals of <InlineMath>R</InlineMath>,
              ordered by inclusion. This is non-empty (contains <InlineMath>{'(0)'}</InlineMath>).
            </p>
            <p className="mt-2">
              For any chain <InlineMath>{'I_1 \\subseteq I_2 \\subseteq \\cdots'}</InlineMath> in <InlineMath>{'\\mathcal{S}'}</InlineMath>,
              the union <InlineMath>{'\\bigcup I_\\alpha'}</InlineMath> is an ideal. It is proper because
              <InlineMath>{'1 \\notin I_\\alpha'}</InlineMath> for any <InlineMath>{'\\alpha'}</InlineMath>,
              so <InlineMath>{'1 \\notin \\bigcup I_\\alpha'}</InlineMath>.
            </p>
            <p className="mt-2">
              By Zorn's Lemma, <InlineMath>{'\\mathcal{S}'}</InlineMath> has a maximal element.
            </p>
          </>
        }
      >
        <p>
          Every ring with unity <InlineMath>{'1 \\neq 0'}</InlineMath> has at least one maximal ideal.
        </p>
      </Theorem>

      <h3>Operations on Ideals</h3>

      <Definition title="Sum, Product, and Intersection">
        <p>
          For ideals <InlineMath>I</InlineMath> and <InlineMath>J</InlineMath> of a ring <InlineMath>R</InlineMath>:
        </p>
        <MathBlock>
          {'I + J = \\{a + b : a \\in I, b \\in J\\}'}
        </MathBlock>
        <MathBlock>
          {'IJ = \\left\\{\\sum_{\\text{finite}} a_i b_i : a_i \\in I, b_i \\in J\\right\\}'}
        </MathBlock>
        <MathBlock>
          {'I \\cap J = \\{a : a \\in I \\text{ and } a \\in J\\}'}
        </MathBlock>
        <p className="mt-2">
          All three are ideals of <InlineMath>R</InlineMath>, and <InlineMath>{'IJ \\subseteq I \\cap J'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Coprime Ideals">
        <p>
          Ideals <InlineMath>I</InlineMath> and <InlineMath>J</InlineMath> are <strong>coprime</strong>
          (or <strong>comaximal</strong>) if <InlineMath>{'I + J = R'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Coprime Ideals in Z">
        <p>
          In <InlineMath>{'\\mathbb{Z}'}</InlineMath>, the ideals <InlineMath>{'(m)'}</InlineMath> and
          <InlineMath>{'(n)'}</InlineMath> are coprime if and only if <InlineMath>{'\\gcd(m, n) = 1'}</InlineMath>.
        </p>
        <p className="mt-2">
          For example, <InlineMath>{'(6) + (35) = (1) = \\mathbb{Z}'}</InlineMath> since <InlineMath>{'\\gcd(6, 35) = 1'}</InlineMath>.
        </p>
        <p className="mt-2">
          Indeed: <InlineMath>{'6 \\cdot 6 - 35 = 1'}</InlineMath>, so <InlineMath>{'1 = 36 - 35 \\in (6) + (35)'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="Product of Coprime Ideals"
        proof={
          <>
            <p>
              We always have <InlineMath>{'IJ \\subseteq I \\cap J'}</InlineMath>. For the reverse inclusion,
              suppose <InlineMath>{'I + J = R'}</InlineMath>, so <InlineMath>{'1 = a + b'}</InlineMath> for some
              <InlineMath>{'a \\in I'}</InlineMath>, <InlineMath>{'b \\in J'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'x \\in I \\cap J'}</InlineMath>, then <InlineMath>{'x = x \\cdot 1 = x(a + b) = xa + xb'}</InlineMath>.
              Since <InlineMath>{'x \\in J'}</InlineMath> and <InlineMath>{'a \\in I'}</InlineMath>, we have <InlineMath>{'xa \\in IJ'}</InlineMath>.
              Similarly <InlineMath>{'xb \\in IJ'}</InlineMath>. Thus <InlineMath>{'x \\in IJ'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>I</InlineMath> and <InlineMath>J</InlineMath> are coprime ideals, then <InlineMath>{'IJ = I \\cap J'}</InlineMath>.
        </p>
      </Theorem>

      <h3>The Radical of an Ideal</h3>

      <Definition title="Radical">
        <p>
          The <strong>radical</strong> of an ideal <InlineMath>I</InlineMath> is
        </p>
        <MathBlock>
          {'\\sqrt{I} = \\{a \\in R : a^n \\in I \\text{ for some } n \\geq 1\\}'}
        </MathBlock>
        <p className="mt-2">
          An ideal is <strong>radical</strong> if <InlineMath>{'I = \\sqrt{I}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Prime Ideals are Radical"
        proof={
          <>
            <p>
              Let <InlineMath>P</InlineMath> be prime and suppose <InlineMath>{'a^n \\in P'}</InlineMath>.
              We show <InlineMath>{'a \\in P'}</InlineMath> by induction on <InlineMath>n</InlineMath>.
            </p>
            <p className="mt-2">
              Base: <InlineMath>{'n = 1'}</InlineMath> is trivial. For <InlineMath>{'n > 1'}</InlineMath>:
              <InlineMath>{'a^n = a \\cdot a^{n-1} \\in P'}</InlineMath>, so <InlineMath>{'a \\in P'}</InlineMath>
              or <InlineMath>{'a^{n-1} \\in P'}</InlineMath>. By induction, either way <InlineMath>{'a \\in P'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every prime ideal is radical. Furthermore, the radical of any ideal is the intersection
          of all prime ideals containing it.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>Summary:</strong> Prime ideals are characterized by the property that <InlineMath>R/P</InlineMath>
        is an integral domain; maximal ideals by <InlineMath>R/M</InlineMath> being a field. Every maximal
        ideal is prime. The operations of sum, product, and intersection on ideals parallel addition,
        multiplication, and gcd for integers. Coprime ideals satisfy <InlineMath>{'IJ = I \\cap J'}</InlineMath>.
        The radical of an ideal consists of elements with some power in the ideal.
      </Callout>
    </LessonLayout>
  );
}
