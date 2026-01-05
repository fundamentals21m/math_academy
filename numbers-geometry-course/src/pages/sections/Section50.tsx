import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section50Questions } from '../../data/quizzes';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2 className="text-2xl font-semibold mb-4">
        The Theorems of Fermat and Wilson
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Two fundamental theorems about arithmetic modulo a prime{' '}
        <InlineMath>p</InlineMath> reveal deep structure in the group of units.
        These results, due to Fermat and Wilson, are cornerstones of number theory.
      </p>

      {/* Fermat's Little Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Fermat's Little Theorem</h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Fermat's Little Theorem
        </h4>
        <p className="text-dark-200 mb-4">
          If <InlineMath>p</InlineMath> is prime and{' '}
          <InlineMath>\gcd(a, p) = 1</InlineMath>, then:
        </p>
        <MathBlock>{`a^{p-1} \\equiv 1 \\pmod p`}</MathBlock>
        <p className="text-dark-200 mt-4">
          Equivalently, for any integer <InlineMath>a</InlineMath>:
        </p>
        <MathBlock>{`a^p \\equiv a \\pmod p`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof:</strong> Consider the <InlineMath>p - 1</InlineMath>{' '}
        non-zero residues mod <InlineMath>p</InlineMath>:{' '}
        <InlineMath>1, 2, 3, \ldots, p-1</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        Multiply each by <InlineMath>a</InlineMath> to get{' '}
        <InlineMath>a, 2a, 3a, \ldots, (p-1)a</InlineMath>. Since{' '}
        <InlineMath>\gcd(a, p) = 1</InlineMath>, multiplication by{' '}
        <InlineMath>a</InlineMath> is a bijection on{' '}
        <InlineMath>(\mathbb{'{Z}'}/p\mathbb{'{Z}'})^*</InlineMath>. So this is
        just a rearrangement of <InlineMath>1, 2, \ldots, p-1</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        Taking products:
      </p>

      <MathBlock>
        {`(a)(2a)(3a)\\cdots((p-1)a) \\equiv 1 \\cdot 2 \\cdot 3 \\cdots (p-1) \\pmod p`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This gives <InlineMath>a^{'{p-1}'} \cdot (p-1)! \equiv (p-1)!</InlineMath>.
        Since <InlineMath>(p-1)!</InlineMath> is coprime to <InlineMath>p</InlineMath>,
        we can divide both sides to get <InlineMath>a^{'{p-1}'} \equiv 1</InlineMath>.
      </p>

      {/* Applications of Fermat */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Applications</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> Compute <InlineMath>2^{'{100}'} \pmod{13}</InlineMath>
        </p>
        <p className="text-dark-200 mb-2">
          By Fermat's theorem, <InlineMath>2^{'{12}'} \equiv 1 \pmod{13}</InlineMath>
        </p>
        <p className="text-dark-200 mb-2">
          Since <InlineMath>100 = 12 \times 8 + 4</InlineMath>:
        </p>
        <MathBlock>{`2^{100} = (2^{12})^8 \\cdot 2^4 \\equiv 1^8 \\cdot 16 \\equiv 3 \\pmod{13}`}</MathBlock>
      </div>

      <Callout type="info">
        <p>
          Fermat's Little Theorem is the basis of <strong>primality testing</strong>.
          If <InlineMath>a^{'{n-1}'} \not\equiv 1 \pmod n</InlineMath> for some{' '}
          <InlineMath>a</InlineMath>, then <InlineMath>n</InlineMath> is definitely
          composite.
        </p>
      </Callout>

      {/* Wilson's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Wilson's Theorem</h3>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">
          Wilson's Theorem
        </h4>
        <p className="text-dark-200 mb-4">
          An integer <InlineMath>p {'>'} 1</InlineMath> is prime if and only if:
        </p>
        <MathBlock>{`(p-1)! \\equiv -1 \\pmod p`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof (for prime p):</strong> In{' '}
        <InlineMath>(\mathbb{'{Z}'}/p\mathbb{'{Z}'})^*</InlineMath>, every element
        except 1 and <InlineMath>-1</InlineMath> can be paired with its inverse
        (which is distinct from itself).
      </p>

      <p className="text-dark-200 mb-6">
        These pairs multiply to 1, so:
      </p>

      <MathBlock>
        {`(p-1)! = 1 \\cdot 2 \\cdot 3 \\cdots (p-1) \\equiv 1 \\cdot (-1) = -1 \\pmod p`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        All the middle terms pair up and cancel (multiply to 1), leaving just{' '}
        <InlineMath>1</InlineMath> and <InlineMath>p - 1 \equiv -1</InlineMath>.
      </p>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples of Wilson's Theorem</h3>

      <CardGrid>
        <Card>
          <CardHeader title="p = 5" />
          <p className="text-xs text-dark-300">
            <InlineMath>4! = 24 = 5 \times 5 - 1 \equiv -1</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 7" />
          <p className="text-xs text-dark-300">
            <InlineMath>6! = 720 = 7 \times 103 - 1 \equiv -1</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 11" />
          <p className="text-xs text-dark-300">
            <InlineMath>10! = 3628800 \equiv -1</InlineMath> (mod 11)
          </p>
        </Card>
      </CardGrid>

      {/* Comparison */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Comparing the Two Theorems
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-600">
              <th className="text-left p-3">Aspect</th>
              <th className="text-left p-3">Fermat's Little Theorem</th>
              <th className="text-left p-3">Wilson's Theorem</th>
            </tr>
          </thead>
          <tbody className="text-dark-200">
            <tr className="border-b border-dark-700">
              <td className="p-3">Statement</td>
              <td className="p-3">
                <InlineMath>a^{'{p-1}'} \equiv 1</InlineMath>
              </td>
              <td className="p-3">
                <InlineMath>(p-1)! \equiv -1</InlineMath>
              </td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="p-3">Characterizes primes?</td>
              <td className="p-3">No (pseudoprimes exist)</td>
              <td className="p-3">Yes (if and only if)</td>
            </tr>
            <tr>
              <td className="p-3">Practical for testing?</td>
              <td className="p-3">Yes (fast to compute)</td>
              <td className="p-3">No (factorial too large)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Euler's Generalization */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Euler's Generalization
      </h3>

      <p className="text-dark-200 mb-6">
        Euler extended Fermat's theorem to composite moduli:
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Euler's Theorem
        </h4>
        <p className="text-dark-200">
          If <InlineMath>\gcd(a, n) = 1</InlineMath>, then:
        </p>
        <MathBlock>{`a^{\\phi(n)} \\equiv 1 \\pmod n`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        When <InlineMath>n = p</InlineMath> is prime,{' '}
        <InlineMath>\phi(p) = p - 1</InlineMath>, recovering Fermat's theorem.
        Euler's theorem is fundamental to RSA encryption.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Fermat: <InlineMath>a^{'{p-1}'} \equiv 1 \pmod p</InlineMath>{' '}
              for <InlineMath>\gcd(a, p) = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Wilson: <InlineMath>(p-1)! \equiv -1 \pmod p</InlineMath> iff{' '}
              <InlineMath>p</InlineMath> is prime
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Euler generalizes Fermat:{' '}
              <InlineMath>a^{'{\\phi(n)}'} \equiv 1 \pmod n</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              These theorems are essential for cryptography and primality testing
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={50} questions={section50Questions} />
    </LessonLayout>
  );
}
