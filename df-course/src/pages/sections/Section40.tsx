import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2>Euclidean Domains</h2>

      <p>
        Euclidean domains are integral domains equipped with a division algorithm, generalizing
        the familiar properties of the integers. In a Euclidean domain, we can perform division
        with remainder, leading to the Euclidean algorithm for computing greatest common divisors
        and many other computational conveniences.
      </p>

      <h3>Definition and Basic Properties</h3>

      <Definition title="Euclidean Domain">
        <p>
          An integral domain <InlineMath>R</InlineMath> is a <strong>Euclidean domain</strong> if there
          exists a function <InlineMath>{'N: R \\setminus \\{0\\} \\to \\mathbb{Z}_{\\geq 0}'}</InlineMath>
          (called a <strong>Euclidean function</strong> or <strong>norm</strong>) such that:
        </p>
        <p className="mt-2">
          For all <InlineMath>{'a, b \\in R'}</InlineMath> with <InlineMath>{'b \\neq 0'}</InlineMath>,
          there exist <InlineMath>{'q, r \\in R'}</InlineMath> with
        </p>
        <MathBlock>
          {'a = bq + r'}
        </MathBlock>
        <p className="mt-2">
          where either <InlineMath>{'r = 0'}</InlineMath> or <InlineMath>{'N(r) < N(b)'}</InlineMath>.
        </p>
      </Definition>

      <Example title="The Integers">
        <p>
          <InlineMath>{'\\mathbb{Z}'}</InlineMath> is a Euclidean domain with norm <InlineMath>{'N(a) = |a|'}</InlineMath>.
        </p>
        <p className="mt-2">
          The division algorithm: for <InlineMath>{'a, b \\in \\mathbb{Z}'}</InlineMath> with <InlineMath>{'b \\neq 0'}</InlineMath>,
          there exist unique <InlineMath>q</InlineMath> (quotient) and <InlineMath>r</InlineMath> (remainder) with
          <InlineMath>{'a = bq + r'}</InlineMath> and <InlineMath>{'0 \\leq r < |b|'}</InlineMath>.
        </p>
      </Example>

      <Example title="Polynomial Rings over Fields">
        <p>
          If <InlineMath>F</InlineMath> is a field, then <InlineMath>F[x]</InlineMath> is a Euclidean domain
          with norm <InlineMath>{'N(f) = \\deg(f)'}</InlineMath>.
        </p>
        <p className="mt-2">
          For example, in <InlineMath>{'\\mathbb{Q}[x]'}</InlineMath>, dividing <InlineMath>{'x^3 + 1'}</InlineMath>
          by <InlineMath>{'x - 1'}</InlineMath>:
        </p>
        <MathBlock>
          {'x^3 + 1 = (x - 1)(x^2 + x + 1) + 2'}
        </MathBlock>
        <p className="mt-2">
          Here <InlineMath>{'q = x^2 + x + 1'}</InlineMath> and <InlineMath>{'r = 2'}</InlineMath>,
          with <InlineMath>{'\\deg(2) = 0 < 1 = \\deg(x - 1)'}</InlineMath>.
        </p>
      </Example>

      <Example title="Gaussian Integers">
        <p>
          The ring <InlineMath>{'\\mathbb{Z}[i] = \\{a + bi : a, b \\in \\mathbb{Z}\\}'}</InlineMath> is
          a Euclidean domain with norm <InlineMath>{'N(a + bi) = a^2 + b^2'}</InlineMath>.
        </p>
        <p className="mt-2">
          This norm is multiplicative: <InlineMath>{'N(zw) = N(z)N(w)'}</InlineMath>.
        </p>
        <p className="mt-2">
          For example, dividing <InlineMath>{'7 + 2i'}</InlineMath> by <InlineMath>{'3 + i'}</InlineMath>:
          In <InlineMath>{'\\mathbb{Q}[i]'}</InlineMath>, <InlineMath>{'\\frac{7 + 2i}{3 + i} = \\frac{(7+2i)(3-i)}{(3+i)(3-i)} = \\frac{23 - i}{10} = 2.3 - 0.1i'}</InlineMath>.
          Rounding to <InlineMath>{'2 + 0i = 2'}</InlineMath>, the remainder is <InlineMath>{'(7+2i) - 2(3+i) = 1'}</InlineMath>.
        </p>
      </Example>

      <h3>The Euclidean Algorithm</h3>

      <Theorem title="Euclidean Algorithm"
        proof={
          <>
            <p>
              By the Euclidean property, we can write <InlineMath>{'a = bq_1 + r_1'}</InlineMath>.
              If <InlineMath>{'r_1 \\neq 0'}</InlineMath>, then <InlineMath>{'N(r_1) < N(b)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Continuing: <InlineMath>{'b = r_1 q_2 + r_2'}</InlineMath>, etc. The sequence <InlineMath>{'N(b) > N(r_1) > N(r_2) > \\cdots'}</InlineMath>
              is a strictly decreasing sequence of non-negative integers, so it must terminate at 0.
            </p>
            <p className="mt-2">
              If <InlineMath>{'r_{n+1} = 0'}</InlineMath>, then <InlineMath>{'\\gcd(a, b) = r_n'}</InlineMath>
              (or <InlineMath>b</InlineMath> if <InlineMath>{'r_1 = 0'}</InlineMath>).
            </p>
          </>
        }
      >
        <p>
          In a Euclidean domain, the Euclidean algorithm computes the greatest common divisor of any
          two elements in finitely many steps.
        </p>
        <p className="mt-2">
          Moreover, we can express <InlineMath>{'\\gcd(a, b)'}</InlineMath> as a linear combination
          <InlineMath>{'\\gcd(a, b) = sa + tb'}</InlineMath> (Bezout's identity).
        </p>
      </Theorem>

      <Example title="GCD in Z[i]">
        <p>
          Find <InlineMath>{'\\gcd(11 + 7i, 18 - i)'}</InlineMath> in <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath>:
        </p>
        <p className="mt-2">
          Step 1: Divide <InlineMath>{'18 - i'}</InlineMath> by <InlineMath>{'11 + 7i'}</InlineMath>.
        </p>
        <MathBlock>
          {'\\frac{18 - i}{11 + 7i} = \\frac{(18-i)(11-7i)}{(11+7i)(11-7i)} = \\frac{191 - 137i}{170} \\approx 1.12 - 0.81i'}
        </MathBlock>
        <p className="mt-2">
          Round to <InlineMath>{'1 - i'}</InlineMath>. Then <InlineMath>{'r = (18 - i) - (1-i)(11+7i) = (18-i) - (18-4i) = 3i'}</InlineMath>.
        </p>
        <p className="mt-2">
          Step 2: Divide <InlineMath>{'11 + 7i'}</InlineMath> by <InlineMath>{'3i'}</InlineMath>.
          <InlineMath>{'\\frac{11+7i}{3i} = \\frac{7 - 11i}{3i \\cdot (-i/i)} = \\frac{7-11i}{-3} \\cdot (-1) = \\frac{7-11i}{3}'}</InlineMath>...
          This gives <InlineMath>{'2 - 4i'}</InlineMath> with remainder <InlineMath>{'11 + 7i - 3i(2-4i) = 11 + 7i - 6i - 12 = -1 + i'}</InlineMath>.
        </p>
        <p className="mt-2">
          Continuing eventually gives <InlineMath>{'\\gcd = 1 + 2i'}</InlineMath> (up to units).
        </p>
      </Example>

      <h3>Properties of Euclidean Domains</h3>

      <Theorem title="Euclidean Domains are PIDs"
        proof={
          <>
            <p>
              Let <InlineMath>I</InlineMath> be a nonzero ideal of <InlineMath>R</InlineMath>. Among all nonzero
              elements of <InlineMath>I</InlineMath>, choose <InlineMath>d</InlineMath> with minimal norm <InlineMath>N(d)</InlineMath>.
            </p>
            <p className="mt-2">
              We claim <InlineMath>{'I = (d)'}</InlineMath>. Clearly <InlineMath>{'(d) \\subseteq I'}</InlineMath>.
              For the reverse, let <InlineMath>{'a \\in I'}</InlineMath>. By the Euclidean property,
              <InlineMath>{'a = dq + r'}</InlineMath> with <InlineMath>{'r = 0'}</InlineMath> or <InlineMath>{'N(r) < N(d)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{'r = a - dq \\in I'}</InlineMath>, minimality of <InlineMath>N(d)</InlineMath> forces
              <InlineMath>{'r = 0'}</InlineMath>. Thus <InlineMath>{'a = dq \\in (d)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every Euclidean domain is a Principal Ideal Domain (PID).
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Converse is False:</strong> Not every PID is a Euclidean domain. A famous example
        is <InlineMath>{'\\mathbb{Z}[\\frac{1 + \\sqrt{-19}}{2}]'}</InlineMath>, which is a PID but
        admits no Euclidean function.
      </Callout>

      <h3>Examples and Non-Examples</h3>

      <Example title="More Euclidean Domains">
        <p>
          The following are Euclidean domains:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}'}</InlineMath> with <InlineMath>{'N(a) = |a|'}</InlineMath></li>
          <li><InlineMath>F[x]</InlineMath> for any field <InlineMath>F</InlineMath>, with <InlineMath>{'N(f) = \\deg(f)'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}[i]'}</InlineMath> (Gaussian integers) with <InlineMath>{'N(a+bi) = a^2 + b^2'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}[\\omega]'}</InlineMath> where <InlineMath>{'\\omega = e^{2\\pi i/3}'}</InlineMath> (Eisenstein integers)</li>
          <li><InlineMath>{'\\mathbb{Z}[\\sqrt{-2}]'}</InlineMath> with <InlineMath>{'N(a + b\\sqrt{-2}) = a^2 + 2b^2'}</InlineMath></li>
        </ul>
      </Example>

      <Example title="Units in Euclidean Domains">
        <p>
          In a Euclidean domain, the units are often related to the norm function.
        </p>
        <p className="mt-2">
          In <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath>: <InlineMath>u</InlineMath> is a unit iff <InlineMath>{'N(u) = 1'}</InlineMath>,
          so the units are <InlineMath>{'\\{1, -1, i, -i\\}'}</InlineMath>.
        </p>
        <p className="mt-2">
          In <InlineMath>F[x]</InlineMath>: units are nonzero constants (degree 0 polynomials), which are <InlineMath>{'F^\\times'}</InlineMath>.
        </p>
      </Example>

      <Definition title="Associates">
        <p>
          Elements <InlineMath>{'a, b'}</InlineMath> in an integral domain are <strong>associates</strong>
          if <InlineMath>{'a = ub'}</InlineMath> for some unit <InlineMath>u</InlineMath>.
        </p>
        <p className="mt-2">
          Associates differ only by unit factors and generate the same principal ideal: <InlineMath>{'(a) = (b)'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Associates in Z and Z[i]">
        <p>
          In <InlineMath>{'\\mathbb{Z}'}</InlineMath>: <InlineMath>3</InlineMath> and <InlineMath>{'-3'}</InlineMath> are associates.
        </p>
        <p className="mt-2">
          In <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath>: <InlineMath>{'2 + i'}</InlineMath>, <InlineMath>{'-2 - i'}</InlineMath>,
          <InlineMath>{'1 - 2i'}</InlineMath>, and <InlineMath>{'-1 + 2i'}</InlineMath> are all associates
          (differing by factors of <InlineMath>{'1, -1, i, -i'}</InlineMath>).
        </p>
      </Example>

      <Callout type="info">
        <strong>Computational Significance:</strong> The existence of a Euclidean algorithm makes
        many computations practical: finding GCDs, computing inverses modulo an ideal, solving
        linear Diophantine equations, and more. This is why Euclidean domains are particularly
        important in computational algebra.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> A Euclidean domain is an integral domain with a norm function
        enabling division with remainder. The Euclidean algorithm computes GCDs and expresses
        them as linear combinations. Key examples include <InlineMath>{'\\mathbb{Z}'}</InlineMath>,
        <InlineMath>F[x]</InlineMath>, and <InlineMath>{'\\mathbb{Z}[i]'}</InlineMath>. Every Euclidean
        domain is a PID, making ideals particularly tractable.
      </Callout>
    </LessonLayout>
  );
}
