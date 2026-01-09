import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2>Unique Factorization Domains (UFDs)</h2>

      <p>
        Unique Factorization Domains generalize the Fundamental Theorem of Arithmetic to broader
        classes of rings. While not every integral domain has unique factorization, UFDs capture
        exactly those domains where every element factors uniquely into irreducibles (up to order
        and units).
      </p>

      <h3>Definition</h3>

      <Definition title="Unique Factorization Domain">
        <p>
          An integral domain <InlineMath>R</InlineMath> is a <strong>Unique Factorization Domain</strong> (UFD)
          if every nonzero, non-unit element <InlineMath>{'a \\in R'}</InlineMath> satisfies:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Existence:</strong> <InlineMath>a</InlineMath> can be written as a product of irreducibles:
            <MathBlock>
              {'a = p_1 p_2 \\cdots p_n'}
            </MathBlock>
          </li>
          <li><strong>Uniqueness:</strong> If <InlineMath>{'a = p_1 \\cdots p_n = q_1 \\cdots q_m'}</InlineMath>,
            then <InlineMath>{'n = m'}</InlineMath> and (after reordering) <InlineMath>{'p_i'}</InlineMath> and
            <InlineMath>{'q_i'}</InlineMath> are associates for each <InlineMath>i</InlineMath>.
          </li>
        </ol>
      </Definition>

      <Example title="The Integers as a UFD">
        <p>
          <InlineMath>{'\\mathbb{Z}'}</InlineMath> is the prototypical UFD. The Fundamental Theorem of
          Arithmetic states:
        </p>
        <MathBlock>
          {'n = \\pm p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}'}
        </MathBlock>
        <p className="mt-2">
          where the <InlineMath>{'p_i'}</InlineMath> are distinct primes and <InlineMath>{'e_i \\geq 1'}</InlineMath>.
          The sign accounts for units <InlineMath>{'\\{\\pm 1\\}'}</InlineMath>.
        </p>
      </Example>

      <h3>PIDs are UFDs</h3>

      <Theorem title="Every PID is a UFD"
        proof={
          <>
            <p>
              <strong>Existence of factorization:</strong> We use the ACC. Suppose some nonzero non-unit
              <InlineMath>a</InlineMath> cannot be written as a product of irreducibles. Then <InlineMath>a</InlineMath>
              is not irreducible, so <InlineMath>{'a = a_1 b_1'}</InlineMath> with neither a unit.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'(a) \\subsetneq (a_1)'}</InlineMath>. If <InlineMath>{'a_1'}</InlineMath> doesn't factor,
              write <InlineMath>{'a_1 = a_2 b_2'}</InlineMath>, getting <InlineMath>{'(a_1) \\subsetneq (a_2)'}</InlineMath>.
              This creates an infinite ascending chain, contradicting ACC in a PID.
            </p>
            <p className="mt-2">
              <strong>Uniqueness:</strong> In a PID, irreducibles are prime. If <InlineMath>{'p_1 \\cdots p_n = q_1 \\cdots q_m'}</InlineMath>,
              then <InlineMath>{'p_1 \\mid q_1 \\cdots q_m'}</InlineMath>. Since <InlineMath>{'p_1'}</InlineMath> is prime,
              <InlineMath>{'p_1 \\mid q_j'}</InlineMath> for some <InlineMath>j</InlineMath>. Since <InlineMath>{'q_j'}</InlineMath>
              is irreducible, <InlineMath>{'p_1 \\sim q_j'}</InlineMath>. Cancel and proceed by induction.
            </p>
          </>
        }
      >
        <p>
          Every Principal Ideal Domain is a Unique Factorization Domain.
        </p>
      </Theorem>

      <h3>Primes vs. Irreducibles in UFDs</h3>

      <Theorem title="In UFDs, Irreducible = Prime"
        proof={
          <>
            <p>
              We already know prime implies irreducible in any domain. For the converse in a UFD:
            </p>
            <p className="mt-2">
              Let <InlineMath>p</InlineMath> be irreducible and suppose <InlineMath>{'p \\mid ab'}</InlineMath>.
              Write <InlineMath>{'pc = ab'}</InlineMath>. Factor all elements into irreducibles:
            </p>
            <MathBlock>
              {'p \\cdot (\\text{irreducibles from } c) = (\\text{irreducibles from } a)(\\text{irreducibles from } b)'}
            </MathBlock>
            <p className="mt-2">
              By uniqueness, <InlineMath>p</InlineMath> must be associate to some irreducible on the right,
              which comes from <InlineMath>a</InlineMath> or <InlineMath>b</InlineMath>. Thus
              <InlineMath>{'p \\mid a'}</InlineMath> or <InlineMath>{'p \\mid b'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          In a UFD, an element is irreducible if and only if it is prime.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Failure of Unique Factorization:</strong> In <InlineMath>{'\\mathbb{Z}[\\sqrt{-5}]'}</InlineMath>:
        <MathBlock>
          {'6 = 2 \\cdot 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})'}
        </MathBlock>
        These are two essentially different factorizations. The elements <InlineMath>{'2, 3, 1 \\pm \\sqrt{-5}'}</InlineMath>
        are all irreducible but not prime, so this ring is not a UFD.
      </Callout>

      <h3>GCDs and LCMs in UFDs</h3>

      <Definition title="GCD and LCM">
        <p>
          In a UFD, for nonzero elements <InlineMath>a, b</InlineMath> with factorizations
        </p>
        <MathBlock>
          {'a = u \\prod p_i^{a_i}, \\quad b = v \\prod p_i^{b_i}'}
        </MathBlock>
        <p className="mt-2">
          (where <InlineMath>{'u, v'}</InlineMath> are units and the product is over all primes appearing in either):
        </p>
        <MathBlock>
          {'\\gcd(a, b) = \\prod p_i^{\\min(a_i, b_i)}'}
        </MathBlock>
        <MathBlock>
          {'\\text{lcm}(a, b) = \\prod p_i^{\\max(a_i, b_i)}'}
        </MathBlock>
      </Definition>

      <Example title="GCD in Z[i]">
        <p>
          In <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath>, find <InlineMath>{'\\gcd(6, 3 + 3i)'}</InlineMath>.
        </p>
        <p className="mt-2">
          Factor: <InlineMath>{'6 = 2 \\cdot 3 = (-i)(1+i)^2 \\cdot 3'}</InlineMath> (since <InlineMath>{'2 = -i(1+i)^2'}</InlineMath>)
        </p>
        <p className="mt-2">
          And: <InlineMath>{'3 + 3i = 3(1+i)'}</InlineMath>
        </p>
        <p className="mt-2">
          Taking minimum powers: <InlineMath>{'\\gcd = (1+i) \\cdot 3 = 3 + 3i'}</InlineMath>. But wait, that's
          <InlineMath>b</InlineMath> itself! Let's redo: <InlineMath>{'3 + 3i = 3(1+i)'}</InlineMath> and
          <InlineMath>{'6 = (1+i)^2 \\cdot 3 \\cdot (-i)'}</InlineMath>. So <InlineMath>{'\\gcd = 3(1+i) = 3 + 3i'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="GCD-LCM Relationship"
        proof={
          <>
            <p>
              From the definitions using min and max of exponents:
            </p>
            <MathBlock>
              {'\\min(a_i, b_i) + \\max(a_i, b_i) = a_i + b_i'}
            </MathBlock>
            <p className="mt-2">
              Taking the product over all primes gives the result.
            </p>
          </>
        }
      >
        <p>
          In a UFD, for any nonzero <InlineMath>{'a, b'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\gcd(a, b) \\cdot \\text{lcm}(a, b) \\sim ab'}
        </MathBlock>
        <p className="mt-2">
          (equality up to associates)
        </p>
      </Theorem>

      <h3>Important Examples of UFDs</h3>

      <Example title="Polynomial Rings over UFDs">
        <p>
          A fundamental result (which we'll prove later):
        </p>
        <MathBlock>
          {'R \\text{ is a UFD} \\implies R[x] \\text{ is a UFD}'}
        </MathBlock>
        <p className="mt-2">
          In particular, since <InlineMath>{'\\mathbb{Z}'}</InlineMath> is a UFD:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}[x]'}</InlineMath> is a UFD</li>
          <li><InlineMath>{'\\mathbb{Z}[x_1, \\ldots, x_n]'}</InlineMath> is a UFD (by induction)</li>
          <li><InlineMath>{'F[x_1, \\ldots, x_n]'}</InlineMath> is a UFD for any field <InlineMath>F</InlineMath></li>
        </ul>
      </Example>

      <Example title="Gaussian Integers">
        <p>
          <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath> is a UFD (in fact, a Euclidean domain, hence a PID).
          The primes of <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath> are:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'1 + i'}</InlineMath> (the unique prime over 2)</li>
          <li><InlineMath>{'a + bi'}</InlineMath> where <InlineMath>{'a^2 + b^2 = p'}</InlineMath> for a prime <InlineMath>{'p \\equiv 1 \\pmod{4}'}</InlineMath></li>
          <li>Primes <InlineMath>{'p \\equiv 3 \\pmod{4}'}</InlineMath> (remain prime in <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath>)</li>
        </ul>
      </Example>

      <h3>Characterization of UFDs</h3>

      <Theorem title="Characterization of UFDs"
        proof={
          <>
            <p>
              (1) <InlineMath>{'\\Rightarrow'}</InlineMath> (2): In a UFD, irreducibles are prime,
              so principal ideals generated by irreducibles are prime ideals.
            </p>
            <p className="mt-2">
              (2) <InlineMath>{'\\Rightarrow'}</InlineMath> (1): Given ACC and "irreducible = prime,"
              existence of factorization follows from ACC, and uniqueness follows from the prime property.
            </p>
          </>
        }
      >
        <p>
          An integral domain <InlineMath>R</InlineMath> is a UFD if and only if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>R</InlineMath> satisfies ACC on principal ideals</li>
          <li>Every irreducible element is prime</li>
        </ol>
      </Theorem>

      <Callout type="info">
        <strong>Beyond UFDs:</strong> Rings that fail unique factorization can still be understood
        through ideal factorization. In a Dedekind domain (like the ring of integers in a number field),
        while elements may not factor uniquely, ideals do factor uniquely into prime ideals. This leads
        to the theory of ideal class groups.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> A UFD is an integral domain where every element factors uniquely
        (up to order and units) into irreducibles. Every PID is a UFD. In a UFD, irreducible and
        prime are equivalent, and GCDs/LCMs can be computed from prime factorizations. Key examples
        include <InlineMath>{'\\mathbb{Z}'}</InlineMath>, <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath>,
        and polynomial rings over UFDs.
      </Callout>
    </LessonLayout>
  );
}
