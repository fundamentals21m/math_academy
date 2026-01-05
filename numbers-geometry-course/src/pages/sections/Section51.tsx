import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section51Questions } from '../../data/quizzes';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2 className="text-2xl font-semibold mb-4">
        The Chinese Remainder Theorem
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The <strong>Chinese Remainder Theorem</strong> (CRT) is one of the oldest
        and most useful results in number theory. It tells us when we can solve
        simultaneous congruences with different moduli.
      </p>

      {/* Historical Context */}
      <Callout type="info">
        <p>
          The theorem dates back to the 3rd century Chinese mathematician{' '}
          <strong>Sun Zi</strong>, who posed the problem: "Find a number that
          leaves remainder 2 when divided by 3, remainder 3 when divided by 5,
          and remainder 2 when divided by 7."
        </p>
      </Callout>

      {/* Statement of CRT */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Theorem</h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Chinese Remainder Theorem
        </h4>
        <p className="text-dark-200 mb-4">
          Let <InlineMath>m_1, m_2, \ldots, m_k</InlineMath> be pairwise coprime
          positive integers (i.e., <InlineMath>\gcd(m_i, m_j) = 1</InlineMath>{' '}
          for <InlineMath>i \neq j</InlineMath>). Then the system of congruences:
        </p>
        <MathBlock>
          {`\\begin{aligned}
x &\\equiv a_1 \\pmod{m_1} \\\\
x &\\equiv a_2 \\pmod{m_2} \\\\
&\\vdots \\\\
x &\\equiv a_k \\pmod{m_k}
\\end{aligned}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          has a <strong>unique solution</strong> modulo{' '}
          <InlineMath>M = m_1 m_2 \cdots m_k</InlineMath>.
        </p>
      </div>

      {/* Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Sun Zi's Example</h3>

      <p className="text-dark-200 mb-6">
        Find <InlineMath>x</InlineMath> such that:
      </p>

      <MathBlock>
        {`x \\equiv 2 \\pmod 3, \\quad x \\equiv 3 \\pmod 5, \\quad x \\equiv 2 \\pmod 7`}
      </MathBlock>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200 mb-4">
          <strong>Solution:</strong> Let <InlineMath>M = 3 \times 5 \times 7 = 105</InlineMath>
        </p>
        <p className="text-dark-200 mb-2">
          Define <InlineMath>M_1 = M/3 = 35</InlineMath>,{' '}
          <InlineMath>M_2 = M/5 = 21</InlineMath>,{' '}
          <InlineMath>M_3 = M/7 = 15</InlineMath>
        </p>
        <p className="text-dark-200 mb-4">
          Find inverses: <InlineMath>35^{'{-1}'} \equiv 2 \pmod 3</InlineMath>,{' '}
          <InlineMath>21^{'{-1}'} \equiv 1 \pmod 5</InlineMath>,{' '}
          <InlineMath>15^{'{-1}'} \equiv 1 \pmod 7</InlineMath>
        </p>
        <p className="text-dark-200 mb-2">
          Then:
        </p>
        <MathBlock>
          {`x = 2 \\cdot 35 \\cdot 2 + 3 \\cdot 21 \\cdot 1 + 2 \\cdot 15 \\cdot 1 = 140 + 63 + 30 = 233`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          Reducing: <InlineMath>233 \equiv 23 \pmod{105}</InlineMath>
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Let's verify: <InlineMath>23 = 7 \times 3 + 2 \equiv 2 \pmod 3</InlineMath>,{' '}
        <InlineMath>23 = 4 \times 5 + 3 \equiv 3 \pmod 5</InlineMath>,{' '}
        <InlineMath>23 = 3 \times 7 + 2 \equiv 2 \pmod 7</InlineMath>. ✓
      </p>

      {/* The Construction */}
      <h3 className="text-xl font-semibold mt-10 mb-4">General Construction</h3>

      <p className="text-dark-200 mb-6">
        The proof gives an explicit formula. For each <InlineMath>i</InlineMath>,
        define <InlineMath>M_i = M/m_i</InlineMath>, and let{' '}
        <InlineMath>y_i</InlineMath> be the inverse of{' '}
        <InlineMath>M_i</InlineMath> mod <InlineMath>m_i</InlineMath>.
      </p>

      <MathBlock>{`x = \\sum_{i=1}^k a_i M_i y_i \\pmod M`}</MathBlock>

      <p className="text-dark-200 my-6">
        Each term <InlineMath>a_i M_i y_i</InlineMath> is designed to contribute{' '}
        <InlineMath>a_i</InlineMath> to the <InlineMath>i</InlineMath>-th
        congruence and 0 to all others.
      </p>

      {/* Ring Isomorphism */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Ring Isomorphism View
      </h3>

      <p className="text-dark-200 mb-6">
        The Chinese Remainder Theorem can be stated more elegantly as a{' '}
        <strong>ring isomorphism</strong>:
      </p>

      <MathBlock>
        {`\\mathbb{Z}/M\\mathbb{Z} \\cong \\mathbb{Z}/m_1\\mathbb{Z} \\times \\mathbb{Z}/m_2\\mathbb{Z} \\times \\cdots \\times \\mathbb{Z}/m_k\\mathbb{Z}`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        This says that arithmetic mod <InlineMath>M</InlineMath> "decomposes"
        into independent arithmetic mod each <InlineMath>m_i</InlineMath>.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Forward Map" />
          <p className="text-xs text-dark-300">
            <InlineMath>x \mapsto (x \bmod m_1, \ldots, x \bmod m_k)</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Inverse Map" />
          <p className="text-xs text-dark-300">
            Given by the CRT construction: recover{' '}
            <InlineMath>x</InlineMath> from its remainders
          </p>
        </Card>
      </CardGrid>

      {/* Applications */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Applications</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 font-bold">•</span>
            <span>
              <strong>RSA Speedup:</strong> Private key operations can be done
              mod <InlineMath>p</InlineMath> and mod <InlineMath>q</InlineMath>{' '}
              separately, then combined
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Parallel Computation:</strong> Large problems decompose
              into smaller independent ones
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 font-bold">•</span>
            <span>
              <strong>Secret Sharing:</strong> Split a secret into shares that
              only reconstruct when combined
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Calendar Calculations:</strong> Days, weeks, months involve
              coprime cycles
            </span>
          </li>
        </ul>
      </div>

      {/* Euler's Totient */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Multiplicativity of φ
      </h3>

      <p className="text-dark-200 mb-6">
        CRT implies that Euler's totient function is <strong>multiplicative</strong>:
        if <InlineMath>\gcd(m, n) = 1</InlineMath>, then
      </p>

      <MathBlock>{`\\phi(mn) = \\phi(m) \\phi(n)`}</MathBlock>

      <p className="text-dark-200 my-6">
        This follows because the units{' '}
        <InlineMath>(\mathbb{'{Z}'}/mn\mathbb{'{Z}'})^*</InlineMath> correspond
        bijectively to pairs in{' '}
        <InlineMath>(\mathbb{'{Z}'}/m\mathbb{'{Z}'})^* \times (\mathbb{'{Z}'}/n\mathbb{'{Z}'})^*</InlineMath>.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              CRT: Simultaneous congruences with coprime moduli have unique
              solutions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The solution is constructive via the formula{' '}
              <InlineMath>x = \sum a_i M_i y_i</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Algebraically:{' '}
              <InlineMath>\mathbb{'{Z}'}/mn\mathbb{'{Z}'} \cong \mathbb{'{Z}'}/m\mathbb{'{Z}'} \times \mathbb{'{Z}'}/n\mathbb{'{Z}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              CRT is used in cryptography, computing, and calendar calculations
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={51} questions={section51Questions} />
    </LessonLayout>
  );
}
