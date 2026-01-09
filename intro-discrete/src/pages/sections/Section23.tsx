import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      {/* Introduction */}
      <p>
        Just as integers factor uniquely into primes, polynomials over a field factor uniquely into
        irreducible polynomials. This section develops the theory of irreducible polynomials and
        proves the unique factorization theorem.
      </p>

      <h2>Irreducible Polynomials</h2>

      <Definition title="Irreducible Polynomial" className="my-6">
        <p>
          A non-constant polynomial <InlineMath>f(x) \in F[x]</InlineMath> is <strong>irreducible</strong>{' '}
          (over <InlineMath>F</InlineMath>) if it cannot be written as a product{' '}
          <InlineMath>f = gh</InlineMath> with <InlineMath>\deg g, \deg h {'>'} 0</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, the only factorizations are <InlineMath>f = c \cdot (f/c)</InlineMath> for
          constants <InlineMath>c \neq 0</InlineMath>.
        </p>
      </Definition>

      <Example title="Irreducibility Depends on the Field" className="my-6">
        <p>
          Consider <InlineMath>f(x) = x^2 + 1</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            Over <InlineMath>\mathbb{'{R}'}</InlineMath>: Irreducible (no real roots)
          </li>
          <li>
            Over <InlineMath>\mathbb{'{C}'}</InlineMath>: Reducible: <InlineMath>x^2 + 1 = (x + i)(x - i)</InlineMath>
          </li>
          <li>
            Over <InlineMath>\mathbb{'{Z}'}_2</InlineMath>: Reducible: <InlineMath>x^2 + 1 = (x + 1)^2</InlineMath>
          </li>
          <li>
            Over <InlineMath>\mathbb{'{Z}'}_3</InlineMath>: Irreducible (check: <InlineMath>0^2 + 1 = 1</InlineMath>,{' '}
            <InlineMath>1^2 + 1 = 2</InlineMath>, <InlineMath>2^2 + 1 = 2</InlineMath>—no roots)
          </li>
        </ul>
      </Example>

      <Theorem title="Low-Degree Test" className="my-6">
        <p>
          A polynomial of degree 2 or 3 over a field <InlineMath>F</InlineMath> is irreducible over{' '}
          <InlineMath>F</InlineMath> if and only if it has no roots in <InlineMath>F</InlineMath>.
        </p>
        <p className="mt-2 text-dark-300">
          (For degree ≥4, lack of roots doesn't guarantee irreducibility.)
        </p>
      </Theorem>

      <Example title="Finding Irreducibles over Z_2" className="my-6">
        <p><strong>Degree 2:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>x^2</InlineMath>: reducible (<InlineMath>= x \cdot x</InlineMath>)</li>
          <li><InlineMath>x^2 + 1</InlineMath>: <InlineMath>0^2 + 1 = 1</InlineMath>, <InlineMath>1^2 + 1 = 0</InlineMath>—has root, reducible</li>
          <li><InlineMath>x^2 + x</InlineMath>: reducible (<InlineMath>= x(x + 1)</InlineMath>)</li>
          <li><InlineMath>x^2 + x + 1</InlineMath>: <InlineMath>0^2 + 0 + 1 = 1</InlineMath>, <InlineMath>1^2 + 1 + 1 = 1</InlineMath>—no roots, <strong>irreducible</strong></li>
        </ul>
        <p className="mt-3"><strong>Degree 3 irreducibles over <InlineMath>\mathbb{'{Z}'}_2</InlineMath>:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>x^3 + x + 1</InlineMath> (no roots, irreducible)</li>
          <li><InlineMath>x^3 + x^2 + 1</InlineMath> (no roots, irreducible)</li>
        </ul>
      </Example>

      <h2>Unique Factorization</h2>

      <Theorem title="Unique Factorization for Polynomials" className="my-6">
        <p>
          Every non-constant polynomial <InlineMath>f(x) \in F[x]</InlineMath> can be written as:
        </p>
        <MathBlock>{`f(x) = c \\cdot p_1(x)^{e_1} p_2(x)^{e_2} \\cdots p_k(x)^{e_k}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>c \in F</InlineMath> is a constant, each <InlineMath>p_i</InlineMath> is
          monic irreducible, and <InlineMath>e_i \geq 1</InlineMath>. This factorization is unique
          up to the order of factors.
        </p>
      </Theorem>

      <Example title="Factorization over Q" className="my-6">
        <p>
          Factor <InlineMath>f(x) = 2x^4 - 2</InlineMath> over <InlineMath>\mathbb{'{Q}'}</InlineMath>:
        </p>
        <MathBlock>{`\\begin{aligned}
2x^4 - 2 &= 2(x^4 - 1) \\\\
&= 2(x^2 - 1)(x^2 + 1) \\\\
&= 2(x - 1)(x + 1)(x^2 + 1)
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Over <InlineMath>\mathbb{'{Q}'}</InlineMath>, <InlineMath>x^2 + 1</InlineMath> is irreducible.
        </p>
      </Example>

      <Example title="Factorization over Z_5" className="my-6">
        <p>
          Factor <InlineMath>x^4 - 1</InlineMath> over <InlineMath>\mathbb{'{Z}'}_5</InlineMath>:
        </p>
        <MathBlock>{`x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)`}</MathBlock>
        <p className="mt-2">
          Check if <InlineMath>x^2 + 1</InlineMath> factors over <InlineMath>\mathbb{'{Z}'}_5</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>0^2 + 1 = 1</InlineMath></li>
          <li><InlineMath>1^2 + 1 = 2</InlineMath></li>
          <li><InlineMath>2^2 + 1 = 0</InlineMath> ← root found!</li>
        </ul>
        <p className="mt-2">
          So <InlineMath>x^2 + 1 = (x - 2)(x + 2) = (x - 2)(x - 3)</InlineMath> in <InlineMath>\mathbb{'{Z}'}_5</InlineMath>.
        </p>
        <MathBlock>{`x^4 - 1 = (x - 1)(x + 1)(x - 2)(x - 3) \\text{ in } \\mathbb{Z}_5`}</MathBlock>
      </Example>

      <h2>Counting Irreducible Polynomials</h2>

      <Theorem title="Number of Irreducibles" className="my-6">
        <p>
          The number of monic irreducible polynomials of degree <InlineMath>n</InlineMath> over{' '}
          <InlineMath>\mathbb{'{Z}'}_p</InlineMath> is:
        </p>
        <MathBlock>{`I_p(n) = \\frac{1}{n} \\sum_{d \\mid n} \\mu(n/d) p^d`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>\mu</InlineMath> is the Möbius function.
        </p>
      </Theorem>

      <Example title="Irreducibles over Z_2" className="my-6">
        <p>Count of monic irreducible polynomials over <InlineMath>\mathbb{'{Z}'}_2</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Degree 1: <InlineMath>I_2(1) = 2</InlineMath> (<InlineMath>x</InlineMath> and <InlineMath>x + 1</InlineMath>)</li>
          <li>Degree 2: <InlineMath>I_2(2) = 1</InlineMath> (<InlineMath>x^2 + x + 1</InlineMath>)</li>
          <li>Degree 3: <InlineMath>I_2(3) = 2</InlineMath></li>
          <li>Degree 4: <InlineMath>I_2(4) = 3</InlineMath></li>
        </ul>
      </Example>

      <h2>Irreducibility Tests</h2>

      <Theorem title="Eisenstein's Criterion (for Z[x])" className="my-6">
        <p>
          Let <InlineMath>f(x) = a_n x^n + \cdots + a_1 x + a_0 \in \mathbb{'{Z}'}[x]</InlineMath>.
          If there exists a prime <InlineMath>p</InlineMath> such that:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>p \nmid a_n</InlineMath></li>
          <li><InlineMath>p \mid a_i</InlineMath> for <InlineMath>i = 0, 1, \ldots, n-1</InlineMath></li>
          <li><InlineMath>p^2 \nmid a_0</InlineMath></li>
        </ol>
        <p className="mt-2">
          Then <InlineMath>f(x)</InlineMath> is irreducible over <InlineMath>\mathbb{'{Q}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Using Eisenstein" className="my-6">
        <p>
          <InlineMath>f(x) = x^4 + 10x^3 + 5x + 15</InlineMath> is irreducible over{' '}
          <InlineMath>\mathbb{'{Q}'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>5 \nmid 1</InlineMath> (leading coefficient)</li>
          <li><InlineMath>5 \mid 10, 5, 15</InlineMath></li>
          <li><InlineMath>25 \nmid 15</InlineMath></li>
        </ul>
        <p className="mt-2">
          Eisenstein with <InlineMath>p = 5</InlineMath> applies.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              An <strong>irreducible</strong> polynomial has no proper factorization. This is the
              polynomial analogue of a prime.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Irreducibility <strong>depends on the field</strong>. A polynomial can be irreducible
              over one field but reducible over another.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Degree 2 or 3:</strong> Irreducible iff no roots. Higher degrees need different
              tests.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>Unique factorization:</strong> Every polynomial factors uniquely into
              irreducibles (up to order and constant multiples).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Eisenstein's criterion:</strong> A useful test for irreducibility over{' '}
              <InlineMath>\mathbb{'{Q}'}</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              Irreducible polynomials over <InlineMath>\mathbb{'{Z}'}_p</InlineMath> are used to
              construct finite fields and error-correcting codes.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
