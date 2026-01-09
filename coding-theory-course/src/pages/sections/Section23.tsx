import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <p>
        In this section, we study the problem of factoring <InlineMath>{`X^n - 1`}</InlineMath> as a product
        of irreducible polynomials over finite fields. This factorization is fundamental to understanding
        cyclic codes and their construction.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Subfields of Finite Fields</h2>

      <p>
        Before diving into factorization, we need some results about the structure of finite fields
        and their subfields.
      </p>

      <Theorem
        title="Subfield Criterion"
        proof={
          <>
            <p>
              <strong>Part (i):</strong> Suppose <InlineMath>{`s | r`}</InlineMath> and let{' '}
              <InlineMath>{`k`}</InlineMath> be a positive integer such that <InlineMath>{`r = ks`}</InlineMath>.
              Let <InlineMath>{`\\alpha`}</InlineMath> be a primitive element of{' '}
              <InlineMath>{`\\text{GF}(p^r)`}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`F = \{'{'} \beta \in \\text{GF}(p^r) \mid \beta^\\{p^s\\} = \beta \{'}'}`}</InlineMath>.
              Since <InlineMath>{`\\text{GF}(p^r)`}</InlineMath> is of characteristic <InlineMath>{`p`}</InlineMath>,
              if elements <InlineMath>{`\\beta, \\gamma \\in F`}</InlineMath>, then so do{' '}
              <InlineMath>{`\\beta \\pm \\gamma`}</InlineMath> and <InlineMath>{`\beta\gamma^\\{-1\\}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>{`F`}</InlineMath> is a subfield. Taking{' '}
              <InlineMath>{`\lambda = \alpha^\\{1 + p^s + \cdots + p^{(k-1)s\\}'} = \alpha^{'{(p^{ks} - 1)/(p^s - 1)}'}`}</InlineMath>,
              the elements <InlineMath>{`1, \lambda, \lambda^2, \ldots, \lambda^\\{p^s - 2\\}`}</InlineMath> are
              distinct and satisfy <InlineMath>{`\lambda^\\{ip^s\\} = \lambda^i`}</InlineMath>.
              Therefore <InlineMath>{`O(F) \\geq p^s`}</InlineMath> and <InlineMath>{`F`}</InlineMath> is a
              subfield of order <InlineMath>{`p^s`}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Part (ii):</strong> The condition <InlineMath>{`\beta^\\{p^s\\} = \beta`}</InlineMath>
              for <InlineMath>{`\beta \in \\text{GF}(p^s)`}</InlineMath> follows directly from the
              construction of <InlineMath>{`F`}</InlineMath> in the proof above.
            </p>
          </>
        }
      >
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <InlineMath>{`\\text{GF}(p^r)`}</InlineMath>, where <InlineMath>{`p`}</InlineMath> is prime,
            contains a subfield of order <InlineMath>{`p^s`}</InlineMath> if and only if{' '}
            <InlineMath>{`s | r`}</InlineMath>.
          </li>
          <li>
            If <InlineMath>{`\\text{GF}(p^s)`}</InlineMath> is a subfield of{' '}
            <InlineMath>{`\\text{GF}(p^r)`}</InlineMath> and{' '}
            <InlineMath>{`\beta \in \\text{GF}(p^r)`}</InlineMath>, then{' '}
            <InlineMath>{`\beta \in \\text{GF}(p^s)`}</InlineMath> if and only if{' '}
            <InlineMath>{`\beta^\\{p^s\\} = \beta`}</InlineMath>.
          </li>
        </ol>
      </Theorem>

      <Theorem
        title="Divisibility of Powers"
        proof={
          <>
            <p>
              Write <InlineMath>{`r = sa + b`}</InlineMath> where <InlineMath>0 \\leq b {'<'} s</InlineMath>. Then:
            </p>
            <MathBlock>{`\\frac{n^r - 1}{n^s - 1} = \\frac{n^{sa+b} - n^b + n^b - 1}{n^s - 1} = n^b \\cdot \\frac{n^{sa} - 1}{n^s - 1} + \\frac{n^b - 1}{n^s - 1}`}</MathBlock>
            <p>
              Since <InlineMath>{`(n^s - 1) | (n^\\{sa\\} - 1)`}</InlineMath>, it follows that{' '}
              <InlineMath>{`(n^s - 1) | (n^r - 1)`}</InlineMath> if and only if <InlineMath>{`b = 0`}</InlineMath>,
              i.e., if and only if <InlineMath>{`s | r`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{`n, r, s`}</InlineMath> be positive integers with <InlineMath>{`n \\geq 2`}</InlineMath>.
          Then <InlineMath>{`n^s - 1 | n^r - 1`}</InlineMath> if and only if <InlineMath>{`s | r`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Factorization of <InlineMath>{`X^\\{p^m\\} - X`}</InlineMath></h2>

      <Theorem
        title="Factorization into Irreducible Polynomials"
        proof={
          <>
            <p>
              Let <InlineMath>{`f(X)`}</InlineMath> be an irreducible monic polynomial over{' '}
              <InlineMath>{`\\text{GF}(p)`}</InlineMath> of degree <InlineMath>{`d`}</InlineMath>, where{' '}
              <InlineMath>{`d | m`}</InlineMath>. Assume <InlineMath>{`f(X) \\neq X`}</InlineMath>.
            </p>
            <p className="mt-2">
              Use <InlineMath>{`f(X)`}</InlineMath> to construct a field <InlineMath>{`F`}</InlineMath> of
              order <InlineMath>{`p^d`}</InlineMath>. Then <InlineMath>{`f(X)`}</InlineMath> is the minimal
              polynomial of one of the elements of <InlineMath>{`F`}</InlineMath>, so{' '}
              <InlineMath>{`f(X) | X^\\{p^d - 1\\} - 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`d | m`}</InlineMath>, we have <InlineMath>{`(p^d - 1) | (p^m - 1)`}</InlineMath>,
              which implies <InlineMath>{`X^\\{p^d - 1\\} - 1 | X^\\{p^m - 1\\} - 1`}</InlineMath>.
              Hence <InlineMath>{`f(X) | X^\\{p^m\\} - X`}</InlineMath>.
            </p>
            <p className="mt-2">
              Conversely, if <InlineMath>{`f(X)`}</InlineMath> divides <InlineMath>{`X^\\{p^m\\} - X`}</InlineMath>
              and is irreducible of degree <InlineMath>{`d`}</InlineMath>, then by analyzing primitive
              elements of the extension field, we can show <InlineMath>{`(p^d - 1) | (p^m - 1)`}</InlineMath>,
              hence <InlineMath>{`d | m`}</InlineMath>.
            </p>
            <p className="mt-2">
              Finally, since <InlineMath>{`X^\\{p^m\\} - X`}</InlineMath> has derivative{' '}
              <InlineMath>{`p^m X^\\{p^m - 1\\} - 1 = -1`}</InlineMath>, it has no repeated roots.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`p`}</InlineMath> is a prime, then <InlineMath>{`X^\\{p^m\\} - X`}</InlineMath> is a
          product of all monic polynomials, irreducible over <InlineMath>{`\\text{GF}(p)`}</InlineMath>,
          whose degree divides <InlineMath>{`m`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples of Factorization</h2>

      <Example title="Factorizations over GF(2)">
        <p>As applications of the theorem, we have the following factorizations over the binary field:</p>
        <MathBlock>{`X^2 + X = X(X + 1)`}</MathBlock>
        <MathBlock>{`X^4 + X = X(X + 1)(X^2 + X + 1)`}</MathBlock>
        <MathBlock>{`X^8 + X = X(X + 1)(X^3 + X + 1)(X^3 + X^2 + 1)`}</MathBlock>
        <MathBlock>{`X^\\{16\\} + X = X(X + 1)(X^2 + X + 1)(X^4 + X + 1)(X^4 + X^3 + 1)`}</MathBlock>
      </Example>

      <Example title="Factorizations over GF(3)">
        <p>Over the field of 3 elements:</p>
        <MathBlock>{`X^3 - X = X(X + 1)(X + 2)`}</MathBlock>
        <MathBlock>{`X^9 - X = X(X + 1)(X + 2)(X^2 + 1)(X^2 + X + 2)(X^2 + 2X + 2)`}</MathBlock>
        <p className="mt-2">
          The factorization of <InlineMath>{`X^\\{27\\} - X`}</InlineMath> involves all monic irreducible
          polynomials of degrees 1 and 3 over <InlineMath>{`\\text{GF}(3)`}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Connection to Cyclic Codes">
        <p>
          The factorization of <InlineMath>{`X^n - 1`}</InlineMath> is essential for constructing cyclic
          codes. Each divisor of <InlineMath>{`X^n - 1`}</InlineMath> generates a cyclic code, and
          understanding the irreducible factors helps us design codes with specific properties.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Results</h2>

      <p>
        The main takeaways from this section are:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>
          Finite fields <InlineMath>{`\\text{GF}(p^r)`}</InlineMath> contain unique subfields of
          order <InlineMath>{`p^s`}</InlineMath> for each divisor <InlineMath>{`s`}</InlineMath> of{' '}
          <InlineMath>{`r`}</InlineMath>.
        </li>
        <li>
          The polynomial <InlineMath>{`X^\\{p^m\\} - X`}</InlineMath> factors completely into linear
          factors over <InlineMath>{`\\text{GF}(p^m)`}</InlineMath>.
        </li>
        <li>
          The irreducible factors over <InlineMath>{`\\text{GF}(p)`}</InlineMath> are precisely those
          whose degrees divide <InlineMath>{`m`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
