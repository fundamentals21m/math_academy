import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section49Questions } from '../../data/quizzes';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2 className="text-2xl font-semibold mb-4">Inverses mod n</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Understanding when an element has a <strong>multiplicative inverse</strong>{' '}
        in <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> is crucial for
        modular arithmetic and its applications to cryptography.
      </p>

      {/* Multiplicative Inverse Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        What is a Multiplicative Inverse?
      </h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">Definition</h4>
        <p className="text-dark-200">
          An element <InlineMath>a</InlineMath> has a <strong>multiplicative
          inverse</strong> mod <InlineMath>n</InlineMath> if there exists{' '}
          <InlineMath>b</InlineMath> such that:
        </p>
        <MathBlock>{`ab \\equiv 1 \\pmod n`}</MathBlock>
        <p className="text-dark-200 mt-4">
          We write <InlineMath>b = a^{'{-1}'}</InlineMath> and call it the{' '}
          <strong>inverse of a mod n</strong>.
        </p>
      </div>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              <InlineMath>3^{'{-1}'} \equiv 2 \pmod 5</InlineMath> because{' '}
              <InlineMath>3 \times 2 = 6 \equiv 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span>
              <InlineMath>7^{'{-1}'} \equiv 7 \pmod{48}</InlineMath> because{' '}
              <InlineMath>7 \times 7 = 49 \equiv 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">✗</span>
            <span>
              <InlineMath>2</InlineMath> has no inverse mod 6 (since{' '}
              <InlineMath>\gcd(2, 6) = 2 \neq 1</InlineMath>)
            </span>
          </li>
        </ul>
      </div>

      {/* The Criterion */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        When Does an Inverse Exist?
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">Theorem</h4>
        <p className="text-dark-200">
          <InlineMath>a</InlineMath> has a multiplicative inverse mod{' '}
          <InlineMath>n</InlineMath> if and only if{' '}
          <InlineMath>\gcd(a, n) = 1</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof sketch:</strong> If <InlineMath>\gcd(a, n) = 1</InlineMath>,
        then by Bézout's identity there exist integers <InlineMath>x, y</InlineMath>{' '}
        with <InlineMath>ax + ny = 1</InlineMath>. Taking this equation mod{' '}
        <InlineMath>n</InlineMath> gives <InlineMath>ax \equiv 1</InlineMath>, so{' '}
        <InlineMath>x</InlineMath> is the inverse.
      </p>

      <p className="text-dark-200 mb-6">
        Conversely, if <InlineMath>d = \gcd(a, n) {'>'} 1</InlineMath>, then for
        any <InlineMath>b</InlineMath>, the product <InlineMath>ab</InlineMath>{' '}
        is divisible by <InlineMath>d</InlineMath>, so{' '}
        <InlineMath>ab \not\equiv 1 \pmod n</InlineMath>.
      </p>

      {/* Finding Inverses */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Finding Inverses with Extended Euclidean Algorithm
      </h3>

      <p className="text-dark-200 mb-6">
        The <strong>extended Euclidean algorithm</strong> not only computes{' '}
        <InlineMath>\gcd(a, n)</InlineMath> but also finds the coefficients in
        Bézout's identity, giving us the inverse.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> Find <InlineMath>11^{'{-1}'} \pmod{26}</InlineMath>
        </p>
        <p className="text-dark-200 mb-2">
          Apply extended Euclidean algorithm to find{' '}
          <InlineMath>\gcd(26, 11)</InlineMath>:
        </p>
        <ul className="space-y-1 text-dark-300 text-sm font-mono">
          <li>26 = 2 × 11 + 4</li>
          <li>11 = 2 × 4 + 3</li>
          <li>4 = 1 × 3 + 1</li>
          <li>3 = 3 × 1 + 0</li>
        </ul>
        <p className="text-dark-200 mt-4">
          Working backwards: <InlineMath>1 = 4 - 1 \times 3 = 4 - (11 - 2 \times 4) = 3 \times 4 - 11 = 3(26 - 2 \times 11) - 11 = 3 \times 26 - 7 \times 11</InlineMath>
        </p>
        <p className="text-dark-200 mt-2">
          So <InlineMath>-7 \times 11 \equiv 1 \pmod{26}</InlineMath>, meaning{' '}
          <InlineMath>11^{'{-1}'} \equiv -7 \equiv 19 \pmod{26}</InlineMath>
        </p>
      </div>

      {/* The Group of Units */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Group of Units
      </h3>

      <p className="text-dark-200 mb-6">
        The elements of <InlineMath>\mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath> that have
        inverses form a <strong>group</strong> under multiplication, called the{' '}
        <strong>group of units</strong>:
      </p>

      <MathBlock>
        {`(\\mathbb{Z}/n\\mathbb{Z})^* = \\{a \\in \\mathbb{Z}/n\\mathbb{Z} : \\gcd(a, n) = 1\\}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        The size of this group is given by <strong>Euler's totient function</strong>{' '}
        <InlineMath>\phi(n)</InlineMath>: the count of integers from 1 to{' '}
        <InlineMath>n</InlineMath> that are coprime to <InlineMath>n</InlineMath>.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="φ(p)" />
          <p className="text-xs text-dark-300">
            For prime <InlineMath>p</InlineMath>:{' '}
            <InlineMath>\phi(p) = p - 1</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="φ(p^k)" />
          <p className="text-xs text-dark-300">
            <InlineMath>\phi(p^k) = p^{'{k-1}'}(p - 1)</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="φ(mn)" />
          <p className="text-xs text-dark-300">
            If <InlineMath>\gcd(m, n) = 1</InlineMath>:{' '}
            <InlineMath>\phi(mn) = \phi(m)\phi(n)</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Examples of Groups of Units */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <InlineMath>(\mathbb{'{Z}'}/5\mathbb{'{Z}'})^* = \{'{'}1, 2, 3, 4\{'}'}</InlineMath>{' '}
              with <InlineMath>\phi(5) = 4</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <InlineMath>(\mathbb{'{Z}'}/8\mathbb{'{Z}'})^* = \{'{'}1, 3, 5, 7\{'}'}</InlineMath>{' '}
              with <InlineMath>\phi(8) = 4</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <InlineMath>(\mathbb{'{Z}'}/12\mathbb{'{Z}'})^* = \{'{'}1, 5, 7, 11\{'}'}</InlineMath>{' '}
              with <InlineMath>\phi(12) = 4</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          The group of units is central to <strong>RSA cryptography</strong>. The
          security of RSA relies on the difficulty of computing{' '}
          <InlineMath>\phi(n)</InlineMath> when <InlineMath>n = pq</InlineMath>{' '}
          is a product of two large primes.
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>a^{'{-1}'}</InlineMath> exists mod <InlineMath>n</InlineMath>{' '}
              iff <InlineMath>\gcd(a, n) = 1</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The extended Euclidean algorithm computes inverses
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>(\mathbb{'{Z}'}/n\mathbb{'{Z}'})^*</InlineMath> has{' '}
              <InlineMath>\phi(n)</InlineMath> elements
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <InlineMath>\phi(p) = p - 1</InlineMath> for prime{' '}
              <InlineMath>p</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={49} questions={section49Questions} />
    </LessonLayout>
  );
}
