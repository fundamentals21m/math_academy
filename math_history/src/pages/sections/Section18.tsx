import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>The Chinese Remainder Theorem</h2>

      <p>
        While Greek mathematics flourished around the Mediterranean, remarkable
        mathematical developments occurred independently in China. One of the
        most important Chinese contributions to number theory is the{' '}
        <strong>Chinese Remainder Theorem</strong>, which solves systems of
        simultaneous congruences.
      </p>

      <h3>The Historical Problem</h3>

      <p>
        The theorem first appears in the <em>Sunzi Suanjing</em> (Master Sun's
        Mathematical Manual), dating from the 3rd-5th century CE:
      </p>

      <Example title="The Original Problem">
        <p className="italic text-dark-300">
          "There are certain things whose number is unknown. If we count them
          by threes, we have two left over; by fives, we have three left over;
          by sevens, two are left over. How many things are there?"
        </p>
        <p className="mt-4">
          In modern notation, we seek <InlineMath>n</InlineMath> such that:
        </p>
        <MathBlock>
          {`\\begin{align}
n &\\equiv 2 \\pmod{3} \\\\
n &\\equiv 3 \\pmod{5} \\\\
n &\\equiv 2 \\pmod{7}
\\end{align}`}
        </MathBlock>
      </Example>

      <h3>Modular Arithmetic</h3>

      <Definition title="Congruence">
        <p>
          We say <InlineMath>a</InlineMath> is <strong>congruent</strong> to{' '}
          <InlineMath>b</InlineMath> modulo <InlineMath>m</InlineMath>, written:
        </p>
        <MathBlock>
          {`a \\equiv b \\pmod{m}`}
        </MathBlock>
        <p className="mt-2">
          if <InlineMath>m</InlineMath> divides <InlineMath>a - b</InlineMath>.
          Equivalently, <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>
          have the same remainder when divided by <InlineMath>m</InlineMath>.
        </p>
      </Definition>

      <Example title="Congruence Examples">
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>17 \equiv 2 \pmod{5}</InlineMath> because <InlineMath>17 = 3 \times 5 + 2</InlineMath></li>
          <li><InlineMath>23 \equiv 2 \pmod{7}</InlineMath> because <InlineMath>23 = 3 \times 7 + 2</InlineMath></li>
          <li><InlineMath>100 \equiv 1 \pmod{9}</InlineMath> because <InlineMath>100 = 11 \times 9 + 1</InlineMath></li>
        </ul>
      </Example>

      <h3>The Theorem</h3>

      <Theorem title="Chinese Remainder Theorem">
        <p>
          Let <InlineMath>m_1, m_2, \ldots, m_k</InlineMath> be pairwise coprime
          positive integers (i.e., <InlineMath>{`\\gcd(m_i, m_j) = 1`}</InlineMath>
          for <InlineMath>i \neq j</InlineMath>). Then the system:
        </p>
        <MathBlock>
          {`\\begin{align}
x &\\equiv a_1 \\pmod{m_1} \\\\
x &\\equiv a_2 \\pmod{m_2} \\\\
&\\vdots \\\\
x &\\equiv a_k \\pmod{m_k}
\\end{align}`}
        </MathBlock>
        <p className="mt-2">
          has a unique solution modulo <InlineMath>M = m_1 m_2 \cdots m_k</InlineMath>.
        </p>
      </Theorem>

      <h3>Solving the Original Problem</h3>

      <Example title="Solution Method">
        <p>
          For the system <InlineMath>n \equiv 2 \pmod 3</InlineMath>,{' '}
          <InlineMath>n \equiv 3 \pmod 5</InlineMath>,{' '}
          <InlineMath>n \equiv 2 \pmod 7</InlineMath>:
        </p>
        <p className="mt-2">
          <strong>Step 1:</strong> Compute <InlineMath>M = 3 \times 5 \times 7 = 105</InlineMath>
        </p>
        <p className="mt-2">
          <strong>Step 2:</strong> Find partial products:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><InlineMath>M_1 = 105/3 = 35</InlineMath></li>
          <li><InlineMath>M_2 = 105/5 = 21</InlineMath></li>
          <li><InlineMath>M_3 = 105/7 = 15</InlineMath></li>
        </ul>
        <p className="mt-2">
          <strong>Step 3:</strong> Find inverses <InlineMath>y_i</InlineMath> such that{' '}
          <InlineMath>M_i y_i \equiv 1 \pmod{'{m_i}'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><InlineMath>35 y_1 \equiv 1 \pmod 3</InlineMath> → <InlineMath>2 y_1 \equiv 1 \pmod 3</InlineMath> → <InlineMath>y_1 = 2</InlineMath></li>
          <li><InlineMath>21 y_2 \equiv 1 \pmod 5</InlineMath> → <InlineMath>1 y_2 \equiv 1 \pmod 5</InlineMath> → <InlineMath>y_2 = 1</InlineMath></li>
          <li><InlineMath>15 y_3 \equiv 1 \pmod 7</InlineMath> → <InlineMath>1 y_3 \equiv 1 \pmod 7</InlineMath> → <InlineMath>y_3 = 1</InlineMath></li>
        </ul>
        <p className="mt-2">
          <strong>Step 4:</strong> Compute:
        </p>
        <MathBlock>
          {`n = a_1 M_1 y_1 + a_2 M_2 y_2 + a_3 M_3 y_3 = 2(35)(2) + 3(21)(1) + 2(15)(1)`}
        </MathBlock>
        <MathBlock>
          {`n = 140 + 63 + 30 = 233 \\equiv 23 \\pmod{105}`}
        </MathBlock>
        <p className="mt-2">
          <strong>Answer:</strong> <InlineMath>n = 23</InlineMath> (or 23, 128, 233, ...)
        </p>
      </Example>

      {/* Verification visualization */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Verifying the Solution: n = 23
        </h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-dark-700 p-3 rounded">
            <div className="text-primary-400 font-mono">23 ÷ 3</div>
            <div className="text-2xl my-2">7 r <span className="text-green-400">2</span></div>
            <div className="text-sm text-dark-400">23 ≡ 2 (mod 3) ✓</div>
          </div>
          <div className="bg-dark-700 p-3 rounded">
            <div className="text-primary-400 font-mono">23 ÷ 5</div>
            <div className="text-2xl my-2">4 r <span className="text-green-400">3</span></div>
            <div className="text-sm text-dark-400">23 ≡ 3 (mod 5) ✓</div>
          </div>
          <div className="bg-dark-700 p-3 rounded">
            <div className="text-primary-400 font-mono">23 ÷ 7</div>
            <div className="text-2xl my-2">3 r <span className="text-green-400">2</span></div>
            <div className="text-sm text-dark-400">23 ≡ 2 (mod 7) ✓</div>
          </div>
        </div>
      </div>

      <h3>Why It Works</h3>

      <p>
        The key insight is that each term <InlineMath>a_i M_i y_i</InlineMath>
        contributes <InlineMath>a_i</InlineMath> to the <InlineMath>i</InlineMath>-th
        congruence and 0 to all others:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <InlineMath>M_i</InlineMath> is divisible by all moduli except{' '}
          <InlineMath>m_i</InlineMath>
        </li>
        <li>
          So <InlineMath>M_i y_i \equiv 0 \pmod{'{m_j}'}</InlineMath> for{' '}
          <InlineMath>j \neq i</InlineMath>
        </li>
        <li>
          And <InlineMath>M_i y_i \equiv 1 \pmod{'{m_i}'}</InlineMath> by construction
        </li>
        <li>
          Therefore <InlineMath>a_i M_i y_i \equiv a_i \pmod{'{m_i}'}</InlineMath>
          and <InlineMath>\equiv 0 \pmod{'{m_j}'}</InlineMath>
        </li>
      </ul>

      <h3>Applications</h3>

      <Callout type="info">
        <strong>Modern Uses:</strong> The Chinese Remainder Theorem is fundamental
        in computer science and cryptography:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>RSA Cryptography:</strong> Speeds up decryption by a factor of 4</li>
          <li><strong>Computer Arithmetic:</strong> Enables parallel computation on large numbers</li>
          <li><strong>Error-Correcting Codes:</strong> Reed-Solomon codes use CRT</li>
          <li><strong>Hash Functions:</strong> Some hash algorithms use modular residues</li>
        </ul>
      </Callout>

      <h3>Historical Development</h3>

      <p>
        The theorem was developed independently in several cultures:
      </p>

      <div className="my-6">
        <svg viewBox="0 0 500 120" className="w-full h-auto">
          {/* Timeline */}
          <line x1="50" y1="60" x2="450" y2="60" stroke="#4b5563" strokeWidth="2"/>
          
          {/* China ~300 CE */}
          <circle cx="100" cy="60" r="8" fill="#ef4444"/>
          <text x="100" y="35" fill="#fca5a5" fontSize="10" textAnchor="middle">~300 CE</text>
          <text x="100" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Sunzi</text>
          <text x="100" y="97" fill="#94a3b8" fontSize="9" textAnchor="middle">(China)</text>
          
          {/* India ~600 CE */}
          <circle cx="180" cy="60" r="8" fill="#f59e0b"/>
          <text x="180" y="35" fill="#fcd34d" fontSize="10" textAnchor="middle">~600 CE</text>
          <text x="180" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Āryabhaṭa</text>
          <text x="180" y="97" fill="#94a3b8" fontSize="9" textAnchor="middle">(India)</text>
          
          {/* Qin Jiushao 1247 */}
          <circle cx="280" cy="60" r="8" fill="#10b981"/>
          <text x="280" y="35" fill="#a7f3d0" fontSize="10" textAnchor="middle">1247</text>
          <text x="280" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Qin Jiushao</text>
          <text x="280" y="97" fill="#94a3b8" fontSize="9" textAnchor="middle">(general method)</text>
          
          {/* Euler/Gauss ~1800 */}
          <circle cx="380" cy="60" r="8" fill="#4f46e5"/>
          <text x="380" y="35" fill="#c7d2fe" fontSize="10" textAnchor="middle">~1800</text>
          <text x="380" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Euler, Gauss</text>
          <text x="380" y="97" fill="#94a3b8" fontSize="9" textAnchor="middle">(modern form)</text>
        </svg>
      </div>

      <Callout type="note">
        <strong>Qin Jiushao's Contribution:</strong> In 1247, the Chinese
        mathematician Qin Jiushao published the <em>Shushu Jiuzhang</em>
        (Mathematical Treatise in Nine Sections), which contained the first
        general algorithm for solving systems of congruences—centuries before
        the equivalent European developments.
      </Callout>

      <SectionQuiz
        sectionId={18}
        questions={quizMap[18] || []}
        title="Chinese Remainder Theorem Quiz"
      />
    </LessonLayout>
  );
}
