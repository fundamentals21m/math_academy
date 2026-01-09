import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Introduction */}
      <p>
        Groups capture systems with one operation. Many mathematical structures have two
        operations—like addition and multiplication in ordinary arithmetic. This section
        introduces rings and fields, which extend the group concept to handle two interacting
        operations.
      </p>

      <h2>Rings</h2>

      <Definition title="Ring" className="my-6">
        <p>
          A <strong>ring</strong> is a set <InlineMath>R</InlineMath> with two binary operations,
          addition (<InlineMath>+</InlineMath>) and multiplication (<InlineMath>\cdot</InlineMath>),
          satisfying:
        </p>
        <ol className="list-decimal list-inside mt-3 space-y-2">
          <li>
            <strong><InlineMath>(R, +)</InlineMath> is an abelian group</strong>
            <ul className="list-disc list-inside ml-4 text-dark-300">
              <li>Associative and commutative addition</li>
              <li>Additive identity <InlineMath>0</InlineMath></li>
              <li>Additive inverses <InlineMath>-a</InlineMath></li>
            </ul>
          </li>
          <li>
            <strong>Multiplication is associative:</strong>{' '}
            <InlineMath>(ab)c = a(bc)</InlineMath>
          </li>
          <li>
            <strong>Distributive laws:</strong>
            <MathBlock>{`a(b + c) = ab + ac \\quad \\text{and} \\quad (a + b)c = ac + bc`}</MathBlock>
          </li>
        </ol>
      </Definition>

      <Definition title="Ring with Identity" className="my-6">
        <p>
          A ring <InlineMath>R</InlineMath> is a <strong>ring with identity</strong> (or{' '}
          <strong>unital ring</strong>) if there exists <InlineMath>1 \in R</InlineMath> such that:
        </p>
        <MathBlock>{`1 \\cdot a = a \\cdot 1 = a \\quad \\text{for all } a \\in R`}</MathBlock>
        <p className="mt-2">
          We require <InlineMath>1 \neq 0</InlineMath> (otherwise <InlineMath>R = \{'{0}'}\</InlineMath>).
        </p>
      </Definition>

      <Definition title="Commutative Ring" className="my-6">
        <p>
          A ring is <strong>commutative</strong> if multiplication is commutative:{' '}
          <InlineMath>ab = ba</InlineMath> for all <InlineMath>a, b</InlineMath>.
        </p>
      </Definition>

      <Example title="Ring Examples" className="my-6">
        <ul className="space-y-4">
          <li>
            <strong><InlineMath>\mathbb{'{Z}'}</InlineMath></strong> — The integers form a commutative
            ring with identity 1. No multiplicative inverses (except for <InlineMath>\pm 1</InlineMath>).
          </li>
          <li>
            <strong><InlineMath>\mathbb{'{Z}'}_n</InlineMath></strong> — Integers mod <InlineMath>n</InlineMath>{' '}
            form a commutative ring with identity <InlineMath>[1]</InlineMath>.
          </li>
          <li>
            <strong><InlineMath>M_n(\mathbb{'{R}'})</InlineMath></strong> — The <InlineMath>n \times n</InlineMath>{' '}
            real matrices form a ring with identity <InlineMath>I_n</InlineMath>. Not commutative
            for <InlineMath>n \geq 2</InlineMath>.
          </li>
          <li>
            <strong><InlineMath>\mathbb{'{Z}'}[x]</InlineMath></strong> — Polynomials with integer
            coefficients form a commutative ring.
          </li>
          <li>
            <strong><InlineMath>2\mathbb{'{Z}'}</InlineMath></strong> — Even integers form a ring
            without identity.
          </li>
        </ul>
      </Example>

      <Theorem title="Basic Ring Properties" className="my-6">
        <p>In any ring <InlineMath>R</InlineMath>:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>a \cdot 0 = 0 \cdot a = 0</InlineMath> for all <InlineMath>a</InlineMath></li>
          <li><InlineMath>(-a)b = a(-b) = -(ab)</InlineMath></li>
          <li><InlineMath>(-a)(-b) = ab</InlineMath></li>
        </ol>
      </Theorem>

      <h2>Zero Divisors and Integral Domains</h2>

      <Definition title="Zero Divisor" className="my-6">
        <p>
          A nonzero element <InlineMath>a</InlineMath> in a ring <InlineMath>R</InlineMath> is a{' '}
          <strong>zero divisor</strong> if there exists a nonzero <InlineMath>b \in R</InlineMath>{' '}
          such that <InlineMath>ab = 0</InlineMath> or <InlineMath>ba = 0</InlineMath>.
        </p>
      </Definition>

      <Example title="Zero Divisors in Z_6" className="my-6">
        <p>
          In <InlineMath>\mathbb{'{Z}'}_6</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>[2] \cdot [3] = [6] = [0]</InlineMath></li>
          <li><InlineMath>[3] \cdot [4] = [12] = [0]</InlineMath></li>
        </ul>
        <p className="mt-2">
          So <InlineMath>[2], [3], [4]</InlineMath> are zero divisors. (Also <InlineMath>[0]</InlineMath>{' '}
          is not counted as a zero divisor by convention.)
        </p>
      </Example>

      <Definition title="Integral Domain" className="my-6">
        <p>
          An <strong>integral domain</strong> is a commutative ring with identity that has no zero
          divisors:
        </p>
        <MathBlock>{`ab = 0 \\Rightarrow a = 0 \\text{ or } b = 0`}</MathBlock>
      </Definition>

      <Example title="Integral Domains" className="my-6">
        <ul className="space-y-2">
          <li>
            <InlineMath>\mathbb{'{Z}'}</InlineMath> is an integral domain.
          </li>
          <li>
            <InlineMath>\mathbb{'{Z}'}_p</InlineMath> for prime <InlineMath>p</InlineMath> is an
            integral domain.
          </li>
          <li>
            <InlineMath>\mathbb{'{Z}'}_6</InlineMath> is <strong>not</strong> an integral domain
            (<InlineMath>[2] \cdot [3] = [0]</InlineMath>).
          </li>
          <li>
            Polynomial rings <InlineMath>R[x]</InlineMath> over an integral domain <InlineMath>R</InlineMath>{' '}
            are integral domains.
          </li>
        </ul>
      </Example>

      <Theorem title="Z_n is an Integral Domain iff n is Prime" className="my-6">
        <p>
          <InlineMath>\mathbb{'{Z}'}_n</InlineMath> is an integral domain if and only if{' '}
          <InlineMath>n</InlineMath> is prime.
        </p>
      </Theorem>

      <h2>Fields</h2>

      <Definition title="Field" className="my-6">
        <p>
          A <strong>field</strong> is a commutative ring with identity in which every nonzero
          element has a multiplicative inverse:
        </p>
        <MathBlock>{`\\text{For all } a \\neq 0, \\text{ there exists } a^{-1} \\text{ with } a \\cdot a^{-1} = 1`}</MathBlock>
        <p className="mt-2">
          Equivalently, a field is a set with two operations where both{' '}
          <InlineMath>(F, +)</InlineMath> and <InlineMath>(F \setminus \{'{0}'}\, \cdot)</InlineMath>{' '}
          are abelian groups, with distributivity linking them.
        </p>
      </Definition>

      <Example title="Field Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <strong><InlineMath>\mathbb{'{Q}'}</InlineMath></strong> — Rational numbers
          </li>
          <li>
            <strong><InlineMath>\mathbb{'{R}'}</InlineMath></strong> — Real numbers
          </li>
          <li>
            <strong><InlineMath>\mathbb{'{C}'}</InlineMath></strong> — Complex numbers
          </li>
          <li>
            <strong><InlineMath>\mathbb{'{Z}'}_p</InlineMath></strong> for prime <InlineMath>p</InlineMath>{' '}
            — The finite field with <InlineMath>p</InlineMath> elements
          </li>
        </ul>
        <p className="mt-3 text-dark-300">
          Note: <InlineMath>\mathbb{'{Z}'}</InlineMath> is not a field (2 has no multiplicative inverse).
        </p>
      </Example>

      <Theorem
        title="Finite Fields from Primes"
        className="my-6"
        proof={
          <>
            <p>
              We already know <InlineMath>\mathbb{'{Z}'}_p</InlineMath> is a commutative ring with
              identity.
            </p>
            <p className="mt-2">
              For <InlineMath>[a] \neq [0]</InlineMath>, we have <InlineMath>\gcd(a, p) = 1</InlineMath>{' '}
              (since <InlineMath>p</InlineMath> is prime and <InlineMath>p \nmid a</InlineMath>).
            </p>
            <p className="mt-2">
              By Theorem 1.4.3, <InlineMath>[a]</InlineMath> has a multiplicative inverse in{' '}
              <InlineMath>\mathbb{'{Z}'}_p</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For any prime <InlineMath>p</InlineMath>, <InlineMath>\mathbb{'{Z}'}_p</InlineMath> is a
          field.
        </p>
      </Theorem>

      <Example title="The Field Z_5" className="my-6">
        <p>Multiplication table for <InlineMath>\mathbb{'{Z}'}_5</InlineMath>:</p>
        <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 overflow-x-auto">
          <table className="text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="py-2 px-3"><InlineMath>\cdot</InlineMath></th>
                <th className="py-2 px-3">[1]</th>
                <th className="py-2 px-3">[2]</th>
                <th className="py-2 px-3">[3]</th>
                <th className="py-2 px-3">[4]</th>
              </tr>
            </thead>
            <tbody className="text-center text-dark-300">
              <tr><td className="py-1 font-semibold">[1]</td><td>[1]</td><td>[2]</td><td>[3]</td><td>[4]</td></tr>
              <tr><td className="py-1 font-semibold">[2]</td><td>[2]</td><td>[4]</td><td>[1]</td><td>[3]</td></tr>
              <tr><td className="py-1 font-semibold">[3]</td><td>[3]</td><td>[1]</td><td>[4]</td><td>[2]</td></tr>
              <tr><td className="py-1 font-semibold">[4]</td><td>[4]</td><td>[3]</td><td>[2]</td><td>[1]</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Inverses: <InlineMath>[1]^{'{-1}'} = [1]</InlineMath>,{' '}
          <InlineMath>[2]^{'{-1}'} = [3]</InlineMath>,{' '}
          <InlineMath>[3]^{'{-1}'} = [2]</InlineMath>,{' '}
          <InlineMath>[4]^{'{-1}'} = [4]</InlineMath>.
        </p>
      </Example>

      <h2>Hierarchy of Structures</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Algebraic Structures Hierarchy</h4>
        <div className="space-y-3 text-dark-200">
          <p>
            <strong>Ring</strong> ⊃ <strong>Commutative Ring</strong> ⊃{' '}
            <strong>Integral Domain</strong> ⊃ <strong>Field</strong>
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Ring:</strong> Abelian group under +, associative multiplication, distributive
            </li>
            <li>
              <strong>Commutative ring:</strong> Ring where <InlineMath>ab = ba</InlineMath>
            </li>
            <li>
              <strong>Integral domain:</strong> Commutative ring with 1, no zero divisors
            </li>
            <li>
              <strong>Field:</strong> Integral domain where every nonzero element has inverse
            </li>
          </ul>
        </div>
      </div>

      <Theorem title="Fields are Integral Domains" className="my-6">
        <p>
          Every field is an integral domain. (In a field, <InlineMath>ab = 0</InlineMath> with{' '}
          <InlineMath>a \neq 0</InlineMath> gives <InlineMath>b = a^{'{-1}'} \cdot 0 = 0</InlineMath>.)
        </p>
      </Theorem>

      <Theorem title="Finite Integral Domains are Fields" className="my-6">
        <p>
          Every finite integral domain is a field.
        </p>
      </Theorem>

      <h2>Characteristic</h2>

      <Definition title="Characteristic" className="my-6">
        <p>
          The <strong>characteristic</strong> of a ring <InlineMath>R</InlineMath> with identity is
          the smallest positive integer <InlineMath>n</InlineMath> such that:
        </p>
        <MathBlock>{`\\underbrace{1 + 1 + \\cdots + 1}_{n \\text{ times}} = 0`}</MathBlock>
        <p className="mt-2">
          If no such <InlineMath>n</InlineMath> exists, the characteristic is 0.
        </p>
      </Definition>

      <Example title="Characteristic Examples" className="my-6">
        <ul className="space-y-2">
          <li>
            <InlineMath>\text{'{char}'}(\mathbb{'{Z}'}) = \text{'{char}'}(\mathbb{'{Q}'}) = \text{'{char}'}(\mathbb{'{R}'}) = 0</InlineMath>
          </li>
          <li>
            <InlineMath>\text{'{char}'}(\mathbb{'{Z}'}_n) = n</InlineMath>
          </li>
          <li>
            <InlineMath>\text{'{char}'}(\mathbb{'{Z}'}_p) = p</InlineMath> for prime <InlineMath>p</InlineMath>
          </li>
        </ul>
      </Example>

      <Theorem title="Characteristic of Integral Domain" className="my-6">
        <p>
          The characteristic of an integral domain is either 0 or a prime number.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>ring</strong> has addition (abelian group) and multiplication (associative),
              linked by distributive laws.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              A <strong>zero divisor</strong> is a nonzero element <InlineMath>a</InlineMath> with{' '}
              <InlineMath>ab = 0</InlineMath> for some nonzero <InlineMath>b</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              An <strong>integral domain</strong> is a commutative ring with 1 and no zero divisors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              A <strong>field</strong> is an integral domain where every nonzero element is
              invertible. Examples: <InlineMath>\mathbb{'{Q}'}, \mathbb{'{R}'}, \mathbb{'{C}'}, \mathbb{'{Z}'}_p</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <InlineMath>\mathbb{'{Z}'}_n</InlineMath> is a field iff <InlineMath>n</InlineMath> is
              prime. Every finite integral domain is a field.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              The <strong>characteristic</strong> of a ring is the smallest <InlineMath>n</InlineMath>{' '}
              with <InlineMath>n \cdot 1 = 0</InlineMath>, or 0 if none exists.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
