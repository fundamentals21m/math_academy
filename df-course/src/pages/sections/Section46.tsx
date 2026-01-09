import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2>Irreducibility Criteria</h2>

      <p>
        Determining whether a polynomial is irreducible is a fundamental problem in algebra.
        While there is no universal algorithm, several powerful criteria can resolve many cases.
        The most famous is Eisenstein's criterion, but reduction modulo primes and other
        techniques are equally important.
      </p>

      <h3>Eisenstein's Criterion</h3>

      <Theorem title="Eisenstein's Criterion"
        proof={
          <>
            <p>
              Work in <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath>; the general case follows similarly.
              Suppose <InlineMath>{'f = gh'}</InlineMath> with <InlineMath>{'g = \\sum b_i x^i'}</InlineMath>
              and <InlineMath>{'h = \\sum c_j x^j'}</InlineMath>, both having positive degree.
            </p>
            <p className="mt-2">
              Consider coefficients mod <InlineMath>p</InlineMath>. Since <InlineMath>{'p \\mid a_0'}</InlineMath>
              and <InlineMath>{'a_0 = b_0 c_0'}</InlineMath>, we have <InlineMath>{'p \\mid b_0 c_0'}</InlineMath>.
              Since <InlineMath>{'p^2 \\nmid a_0'}</InlineMath>, exactly one of <InlineMath>{'b_0, c_0'}</InlineMath>
              is divisible by <InlineMath>p</InlineMath>. Say <InlineMath>{'p \\mid b_0'}</InlineMath>, <InlineMath>{'p \\nmid c_0'}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{'p \\nmid a_n = b_r c_s'}</InlineMath> (where <InlineMath>{'r = \\deg g'}</InlineMath>,
              <InlineMath>{'s = \\deg h'}</InlineMath>), we have <InlineMath>{'p \\nmid b_r'}</InlineMath>.
              Let <InlineMath>k</InlineMath> be the smallest index with <InlineMath>{'p \\nmid b_k'}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{'a_k = b_0 c_k + b_1 c_{k-1} + \\cdots + b_k c_0'}</InlineMath>. All terms except
              <InlineMath>{'b_k c_0'}</InlineMath> are divisible by <InlineMath>p</InlineMath>, so
              <InlineMath>{'p \\mid a_k'}</InlineMath> implies <InlineMath>{'p \\mid b_k c_0'}</InlineMath>.
              Since <InlineMath>{'p \\nmid c_0'}</InlineMath>, we get <InlineMath>{'p \\mid b_k'}</InlineMath>, contradiction.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>R</InlineMath> be a UFD and <InlineMath>{'f(x) = a_n x^n + \\cdots + a_1 x + a_0 \\in R[x]'}</InlineMath>.
          If there exists a prime <InlineMath>{'p \\in R'}</InlineMath> such that:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'p \\nmid a_n'}</InlineMath> (doesn't divide leading coefficient)</li>
          <li><InlineMath>{'p \\mid a_i'}</InlineMath> for all <InlineMath>{'i < n'}</InlineMath> (divides all other coefficients)</li>
          <li><InlineMath>{'p^2 \\nmid a_0'}</InlineMath> (square doesn't divide constant term)</li>
        </ol>
        <p className="mt-2">
          then <InlineMath>f</InlineMath> is irreducible in <InlineMath>{'K[x]'}</InlineMath> where <InlineMath>{'K = \\text{Frac}(R)'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Cyclotomic Polynomial">
        <p>
          The <InlineMath>p</InlineMath>-th cyclotomic polynomial is
        </p>
        <MathBlock>
          {'\\Phi_p(x) = \\frac{x^p - 1}{x - 1} = x^{p-1} + x^{p-2} + \\cdots + x + 1'}
        </MathBlock>
        <p className="mt-2">
          To apply Eisenstein, substitute <InlineMath>{'x \\mapsto x + 1'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\Phi_p(x+1) = \\frac{(x+1)^p - 1}{x} = \\sum_{k=1}^{p} \\binom{p}{k} x^{k-1}'}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{'= x^{p-1} + px^{p-2} + \\binom{p}{2}x^{p-3} + \\cdots + \\binom{p}{p-1}x + p'}</InlineMath>
        </p>
        <p className="mt-2">
          Eisenstein with <InlineMath>p</InlineMath>: leading coeff is 1, all other binomial coefficients
          are divisible by <InlineMath>p</InlineMath>, and the constant <InlineMath>p</InlineMath> is not
          divisible by <InlineMath>{'p^2'}</InlineMath>. So <InlineMath>{'\\Phi_p(x+1)'}</InlineMath> is
          irreducible, hence so is <InlineMath>{'\\Phi_p(x)'}</InlineMath>.
        </p>
      </Example>

      <Example title="Irreducibility of x^n - p">
        <p>
          For any prime <InlineMath>p</InlineMath> and <InlineMath>{'n \\geq 1'}</InlineMath>, the polynomial
          <InlineMath>{'x^n - p'}</InlineMath> is irreducible over <InlineMath>{'\\mathbb{Q}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Apply Eisenstein with <InlineMath>p</InlineMath>: leading coeff 1, constant term <InlineMath>{'-p'}</InlineMath>
          (divisible by <InlineMath>p</InlineMath>, not by <InlineMath>{'p^2'}</InlineMath>), all middle
          coefficients are 0 (divisible by <InlineMath>p</InlineMath>).
        </p>
      </Example>

      <h3>Reduction Modulo Primes</h3>

      <Theorem title="Reduction Criterion"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'f = gh'}</InlineMath> in <InlineMath>{'\\mathbb{Z}[x]'}</InlineMath> with
              <InlineMath>{'\\deg g, \\deg h \\geq 1'}</InlineMath>. Reducing mod <InlineMath>p</InlineMath>:
              <InlineMath>{'\\bar{f} = \\bar{g}\\bar{h}'}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{'p \\nmid'}</InlineMath> the leading coefficient of <InlineMath>f</InlineMath>,
              we have <InlineMath>{'\\deg \\bar{f} = \\deg f'}</InlineMath> and <InlineMath>{'\\deg \\bar{g} = \\deg g'}</InlineMath>,
              <InlineMath>{'\\deg \\bar{h} = \\deg h'}</InlineMath>. This contradicts irreducibility of <InlineMath>{'\\bar{f}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'f(x) \\in \\mathbb{Z}[x]'}</InlineMath> be primitive with <InlineMath>{'\\deg f \\geq 1'}</InlineMath>.
          If there exists a prime <InlineMath>p</InlineMath> such that:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>p</InlineMath> does not divide the leading coefficient of <InlineMath>f</InlineMath></li>
          <li>The reduction <InlineMath>{'\\bar{f} \\in \\mathbb{Z}_p[x]'}</InlineMath> is irreducible</li>
        </ul>
        <p className="mt-2">
          then <InlineMath>f</InlineMath> is irreducible over <InlineMath>{'\\mathbb{Q}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Using Reduction">
        <p>
          Is <InlineMath>{'x^4 + x + 1'}</InlineMath> irreducible over <InlineMath>{'\\mathbb{Q}'}</InlineMath>?
        </p>
        <p className="mt-2">
          Reduce mod 2: <InlineMath>{'\\bar{f} = x^4 + x + 1 \\in \\mathbb{Z}_2[x]'}</InlineMath>.
        </p>
        <p className="mt-2">
          Check for roots: <InlineMath>{'\\bar{f}(0) = 1 \\neq 0'}</InlineMath>, <InlineMath>{'\\bar{f}(1) = 1 + 1 + 1 = 1 \\neq 0'}</InlineMath>. No linear factors.
        </p>
        <p className="mt-2">
          Check for quadratic factors in <InlineMath>{'\\mathbb{Z}_2[x]'}</InlineMath>: the only irreducible
          quadratic is <InlineMath>{'x^2 + x + 1'}</InlineMath>. Does <InlineMath>{'(x^2 + x + 1)^2 = x^4 + x + 1'}</InlineMath>?
        </p>
        <p className="mt-2">
          <InlineMath>{'(x^2 + x + 1)^2 = x^4 + 2x^3 + 3x^2 + 2x + 1 = x^4 + x^2 + 1 \\neq x^4 + x + 1'}</InlineMath> in <InlineMath>{'\\mathbb{Z}_2'}</InlineMath>.
        </p>
        <p className="mt-2">
          So <InlineMath>{'\\bar{f}'}</InlineMath> is irreducible mod 2, hence <InlineMath>f</InlineMath> is irreducible over <InlineMath>{'\\mathbb{Q}'}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning">
        <strong>Reduction Can Fail:</strong> If <InlineMath>{'\\bar{f}'}</InlineMath> is reducible for all primes
        <InlineMath>p</InlineMath>, this tells us nothing about <InlineMath>f</InlineMath>. For example,
        <InlineMath>{'x^4 + 1'}</InlineMath> is irreducible over <InlineMath>{'\\mathbb{Q}'}</InlineMath> but
        reducible mod every prime!
      </Callout>

      <h3>The Rational Root Theorem</h3>

      <Theorem title="Rational Root Theorem"
        proof={
          <>
            <p>
              If <InlineMath>{'f(r/s) = 0'}</InlineMath> with <InlineMath>{'\\gcd(r, s) = 1'}</InlineMath>, then
            </p>
            <MathBlock>
              {'a_n \\frac{r^n}{s^n} + \\cdots + a_1 \\frac{r}{s} + a_0 = 0'}
            </MathBlock>
            <p className="mt-2">
              Multiply by <InlineMath>{'s^n'}</InlineMath>: <InlineMath>{'a_n r^n + a_{n-1} r^{n-1} s + \\cdots + a_0 s^n = 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>{'s \\mid a_n r^n'}</InlineMath>. Since <InlineMath>{'\\gcd(r, s) = 1'}</InlineMath>,
              we have <InlineMath>{'\\gcd(r^n, s) = 1'}</InlineMath>, so <InlineMath>{'s \\mid a_n'}</InlineMath>.
              Similarly, <InlineMath>{'r \\mid a_0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'f(x) = a_n x^n + \\cdots + a_0 \\in \\mathbb{Z}[x]'}</InlineMath> has a rational root
          <InlineMath>{'r/s'}</InlineMath> in lowest terms, then:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>r</InlineMath> divides <InlineMath>{'a_0'}</InlineMath></li>
          <li><InlineMath>s</InlineMath> divides <InlineMath>{'a_n'}</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Applying the Rational Root Theorem">
        <p>
          Find rational roots of <InlineMath>{'f(x) = 2x^3 - 3x^2 - 8x - 3'}</InlineMath>.
        </p>
        <p className="mt-2">
          Possible <InlineMath>r</InlineMath>: divisors of <InlineMath>{'-3'}</InlineMath>: <InlineMath>{'\\pm 1, \\pm 3'}</InlineMath>
        </p>
        <p className="mt-2">
          Possible <InlineMath>s</InlineMath>: divisors of 2: <InlineMath>{'\\pm 1, \\pm 2'}</InlineMath>
        </p>
        <p className="mt-2">
          Candidates: <InlineMath>{'\\pm 1, \\pm 3, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}'}</InlineMath>
        </p>
        <p className="mt-2">
          Test: <InlineMath>{'f(3) = 54 - 27 - 24 - 3 = 0'}</InlineMath>. Yes! So <InlineMath>{'(x - 3)'}</InlineMath> is a factor.
        </p>
      </Example>

      <h3>Other Techniques</h3>

      <Definition title="Newton Polygon">
        <p>
          For <InlineMath>{'f(x) = \\sum a_i x^i \\in \\mathbb{Q}_p[x]'}</InlineMath>, the <strong>Newton polygon</strong>
          is the lower convex hull of points <InlineMath>{'(i, v_p(a_i))'}</InlineMath> where <InlineMath>{'v_p'}</InlineMath>
          is the <InlineMath>p</InlineMath>-adic valuation.
        </p>
        <p className="mt-2">
          The slopes of the Newton polygon determine the <InlineMath>p</InlineMath>-adic valuations of
          the roots of <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Irreducibility via Newton Polygon"
        proof={
          <>
            <p>
              If the Newton polygon has a single segment of length <InlineMath>n = \\deg f</InlineMath>,
              then all roots have the same <InlineMath>p</InlineMath>-adic valuation. For a product
              of lower-degree polynomials, the Newton polygon would decompose.
            </p>
          </>
        }
      >
        <p>
          If the Newton polygon of <InlineMath>f</InlineMath> consists of a single segment of slope
          <InlineMath>{'m/n'}</InlineMath> (in lowest terms) with <InlineMath>n = \\deg f</InlineMath>,
          then <InlineMath>f</InlineMath> is irreducible over <InlineMath>{'\\mathbb{Q}_p'}</InlineMath>
          (and hence over <InlineMath>{'\\mathbb{Q}'}</InlineMath>).
        </p>
      </Theorem>

      <Example title="Applying Newton Polygon">
        <p>
          For <InlineMath>{'f(x) = x^3 - 5'}</InlineMath> with <InlineMath>{'p = 5'}</InlineMath>:
        </p>
        <p className="mt-2">
          Points: <InlineMath>{'(0, v_5(-5)) = (0, 1)'}</InlineMath>, <InlineMath>{'(3, v_5(1)) = (3, 0)'}</InlineMath>.
        </p>
        <p className="mt-2">
          Newton polygon has single segment from <InlineMath>{'(0, 1)'}</InlineMath> to <InlineMath>{'(3, 0)'}</InlineMath>
          with slope <InlineMath>{'-1/3'}</InlineMath>. Since <InlineMath>{'\\gcd(1, 3) = 1'}</InlineMath> and
          length is 3 = deg <InlineMath>f</InlineMath>, <InlineMath>f</InlineMath> is irreducible.
        </p>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> Eisenstein's criterion is a powerful tool when a prime can be found
        that divides all coefficients except the leading one, with its square not dividing the constant.
        Reduction mod <InlineMath>p</InlineMath> can prove irreducibility when the reduced polynomial
        is irreducible. The Rational Root Theorem limits candidates for rational roots. For more
        difficult cases, Newton polygons and other <InlineMath>p</InlineMath>-adic methods are available.
      </Callout>
    </LessonLayout>
  );
}
