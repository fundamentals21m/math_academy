import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <h2>Cyclotomic Polynomials</h2>
      <p>
        The <strong>cyclotomic polynomials</strong> <InlineMath>\Phi_n(x)</InlineMath> are the
        minimal polynomials of primitive <InlineMath>n</InlineMath>-th roots of unity
        over <InlineMath>\mathbb{"{Q}"}</InlineMath>. They play a fundamental role in algebraic
        number theory, Galois theory, and the study of regular polygons.
      </p>

      <Callout type="info">
        <strong>Etymology:</strong> "Cyclotomic" comes from Greek roots meaning "circle-dividing,"
        referring to the division of a circle into <InlineMath>n</InlineMath> equal parts by
        the <InlineMath>n</InlineMath>-th roots of unity.
      </Callout>

      <h3>Roots of Unity</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          An <InlineMath>n</InlineMath><strong>-th root of unity</strong> is a complex
          number <InlineMath>\zeta</InlineMath> satisfying <InlineMath>\zeta^n = 1</InlineMath>.
        </p>
        <p className="mt-3">
          A <strong>primitive</strong> <InlineMath>n</InlineMath>-th root of unity is
          an <InlineMath>n</InlineMath>-th root of unity whose order is exactly <InlineMath>n</InlineMath>.
        </p>
      </div>

      <p>
        The <InlineMath>n</InlineMath>-th roots of unity are:
      </p>
      <MathBlock>{`\\zeta_n^k = e^{2\\pi i k/n} = \\cos\\left(\\frac{2\\pi k}{n}\\right) + i\\sin\\left(\\frac{2\\pi k}{n}\\right), \\quad k = 0, 1, \\ldots, n-1`}</MathBlock>

      <p>
        These form a cyclic group of order <InlineMath>n</InlineMath> under multiplication.
        The primitive roots are exactly those <InlineMath>\zeta_n^k</InlineMath>
        where <InlineMath>\gcd(k, n) = 1</InlineMath>.
      </p>

      <h3>Definition of Cyclotomic Polynomials</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Definition</h4>
        <p>
          The <InlineMath>n</InlineMath><strong>-th cyclotomic polynomial</strong> is:
        </p>
        <MathBlock>{`\\Phi_n(x) = \\prod_{\\substack{1 \\leq k \\leq n \\\\ \\gcd(k,n)=1}} (x - \\zeta_n^k)`}</MathBlock>
        <p className="mt-3">
          The degree of <InlineMath>\Phi_n(x)</InlineMath> is <InlineMath>\varphi(n)</InlineMath>,
          Euler's totient function.
        </p>
      </div>

      <h3>The Fundamental Factorization</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          For all positive integers <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>{`x^n - 1 = \\prod_{d \\mid n} \\Phi_d(x)`}</MathBlock>
        <p className="mt-3">
          This expresses <InlineMath>x^n - 1</InlineMath> as a product over all divisors of <InlineMath>n</InlineMath>.
        </p>
      </div>

      <p>
        This follows because every <InlineMath>n</InlineMath>-th root of unity is a primitive
        <InlineMath>d</InlineMath>-th root of unity for exactly one divisor <InlineMath>d</InlineMath> of <InlineMath>n</InlineMath>.
      </p>

      <h3>Computing Cyclotomic Polynomials</h3>

      <p>
        Using the factorization <InlineMath>x^n - 1 = \prod_{"{d \\mid n}"} \Phi_d(x)</InlineMath>,
        we can compute <InlineMath>\Phi_n(x)</InlineMath> recursively:
      </p>
      <MathBlock>{`\\Phi_n(x) = \\frac{x^n - 1}{\\prod_{\\substack{d \\mid n \\\\ d < n}} \\Phi_d(x)}`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">First Several Cyclotomic Polynomials</p>
        <div className="mt-2 space-y-1 text-dark-300">
          <p><InlineMath>\Phi_1(x) = x - 1</InlineMath></p>
          <p><InlineMath>\Phi_2(x) = x + 1</InlineMath></p>
          <p><InlineMath>\Phi_3(x) = x^2 + x + 1</InlineMath></p>
          <p><InlineMath>\Phi_4(x) = x^2 + 1</InlineMath></p>
          <p><InlineMath>\Phi_5(x) = x^4 + x^3 + x^2 + x + 1</InlineMath></p>
          <p><InlineMath>\Phi_6(x) = x^2 - x + 1</InlineMath></p>
          <p><InlineMath>\Phi_8(x) = x^4 + 1</InlineMath></p>
          <p><InlineMath>\Phi_{"{12}"}(x) = x^4 - x^2 + 1</InlineMath></p>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p className="font-semibold text-blue-400">Example: Computing <InlineMath>\Phi_6(x)</InlineMath></p>
        <p className="mt-2">
          The divisors of 6 are 1, 2, 3, 6. So:
        </p>
        <MathBlock>{`x^6 - 1 = \\Phi_1(x)\\Phi_2(x)\\Phi_3(x)\\Phi_6(x)`}</MathBlock>
        <MathBlock>{`x^6 - 1 = (x-1)(x+1)(x^2+x+1)\\Phi_6(x)`}</MathBlock>
        <p className="mt-2">
          We have <InlineMath>(x-1)(x+1) = x^2 - 1</InlineMath>
          and <InlineMath>(x^2-1)(x^2+x+1) = x^4 + x^3 - x - 1</InlineMath>.
        </p>
        <p className="mt-2">
          Dividing: <InlineMath>\Phi_6(x) = (x^6-1)/(x^4+x^3-x-1) = x^2 - x + 1</InlineMath>.
        </p>
      </div>

      <h3>Key Properties</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Integer Coefficients</h4>
        <p>
          For all <InlineMath>n \geq 1</InlineMath>, <InlineMath>\Phi_n(x) \in \mathbb{"{Z}"}[x]</InlineMath>.
        </p>
      </div>

      <p>
        <strong>Proof:</strong> By induction using the recursive formula. Since <InlineMath>x^n - 1</InlineMath>
        and all <InlineMath>\Phi_d(x)</InlineMath> for <InlineMath>d &lt; n</InlineMath> are monic
        with integer coefficients, the quotient <InlineMath>\Phi_n(x)</InlineMath> is also
        monic with integer coefficients.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem: Irreducibility</h4>
        <p>
          For all <InlineMath>n \geq 1</InlineMath>, <InlineMath>\Phi_n(x)</InlineMath> is
          irreducible over <InlineMath>\mathbb{"{Q}"}</InlineMath>.
        </p>
      </div>

      <Callout type="warning">
        <strong>Subtlety:</strong> This is a non-trivial theorem. While easy to prove
        for <InlineMath>n = p</InlineMath> prime (using Eisenstein after substitution),
        the general case requires more work.
      </Callout>

      <h3>Special Cases</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">Prime n = p</h4>
          <MathBlock>{`\\Phi_p(x) = \\frac{x^p - 1}{x - 1} = x^{p-1} + x^{p-2} + \\cdots + x + 1`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-blue-400 font-semibold mb-2">Prime power n = p^k</h4>
          <MathBlock>{`\\Phi_{p^k}(x) = \\Phi_p(x^{p^{k-1}})`}</MathBlock>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: <InlineMath>\Phi_8(x)</InlineMath></p>
        <p className="mt-2">
          Since <InlineMath>8 = 2^3</InlineMath>:
        </p>
        <MathBlock>{`\\Phi_8(x) = \\Phi_2(x^{2^2}) = \\Phi_2(x^4) = x^4 + 1`}</MathBlock>
      </div>

      <h3>Values at Specific Points</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="text-primary-400 mb-4">Theorem</h4>
        <p>
          For <InlineMath>n &gt; 1</InlineMath>:
        </p>
        <MathBlock>{`\\Phi_n(1) = \\begin{cases} p & \\text{if } n = p^k \\text{ for prime } p \\\\ 1 & \\text{otherwise} \\end{cases}`}</MathBlock>
      </div>

      <h3>Coefficients of Cyclotomic Polynomials</h3>

      <p>
        For small <InlineMath>n</InlineMath>, all coefficients of <InlineMath>\Phi_n(x)</InlineMath>
        are <InlineMath>0, 1,</InlineMath> or <InlineMath>-1</InlineMath>. However, this fails
        for larger <InlineMath>n</InlineMath>:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-purple-500">
        <p className="font-semibold text-purple-400">Surprising Fact</p>
        <p className="mt-2">
          <InlineMath>\Phi_{"{105}"}(x)</InlineMath> is the first cyclotomic polynomial with a
          coefficient outside <InlineMath>\{"{-1, 0, 1}"}\</InlineMath>. It contains the coefficient <InlineMath>-2</InlineMath>.
        </p>
        <p className="mt-2 text-dark-300">
          In fact, cyclotomic polynomial coefficients can be arbitrarily large!
        </p>
      </div>

      <Callout type="success">
        <strong>Summary:</strong> The <InlineMath>n</InlineMath>-th cyclotomic
        polynomial <InlineMath>\Phi_n(x)</InlineMath> is the minimal polynomial of primitive
        <InlineMath>n</InlineMath>-th roots of unity over <InlineMath>\mathbb{"{Q}"}</InlineMath>.
        It has degree <InlineMath>\varphi(n)</InlineMath> and integer coefficients.
        The key identity <InlineMath>x^n - 1 = \prod_{"{d \\mid n}"} \Phi_d(x)</InlineMath>
        enables recursive computation. Cyclotomic polynomials are always irreducible
        over <InlineMath>\mathbb{"{Q}"}</InlineMath>, a fundamental result for Galois theory
        and number theory.
      </Callout>
    </LessonLayout>
  );
}
