import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section215() {
  return (
    <LessonLayout sectionId={215}>
      <Proposition
        title="Proposition VII.36"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em> be three given numbers.
            </p>
            <p className="mt-2">
              It is required to find the least number which they measure.
            </p>
            <p className="mt-2">
              Let <em>D</em>, the least number measured by <em>A</em>, <em>B</em>, be taken.
              [VII.34, VII.33]
            </p>
            <p className="mt-2">
              Then either <em>C</em> measures <em>D</em>, or it does not.
            </p>
            <p className="mt-2">
              First, let <em>C</em> measure <em>D</em>. But <em>A</em>, <em>B</em> also measure{' '}
              <em>D</em>. Therefore <em>A</em>, <em>B</em>, <em>C</em> all measure <em>D</em>.
            </p>
            <p className="mt-2">
              I say that <em>D</em> is the least such number. For if not, <em>A</em>, <em>B</em>,{' '}
              <em>C</em> will measure some number less than <em>D</em>. Let them measure <em>E</em>.
              Since <em>A</em>, <em>B</em> measure <em>E</em>, therefore <em>D</em> measures{' '}
              <em>E</em>. [VII.35] But <em>D</em> is greater than <em>E</em>: which is impossible.
            </p>
            <p className="mt-2">
              Now let <em>C</em> not measure <em>D</em>. Let <em>E</em>, the least number measured
              by <em>C</em>, <em>D</em>, be taken. [VII.34, VII.33]
            </p>
            <p className="mt-2">
              Since <em>A</em>, <em>B</em> measure <em>D</em>, and <em>D</em> measures <em>E</em>,
              therefore <em>A</em>, <em>B</em> also measure <em>E</em>. But <em>C</em> also
              measures <em>E</em>. Therefore <em>A</em>, <em>B</em>, <em>C</em> measure <em>E</em>.
            </p>
            <p className="mt-2 font-medium">
              I say that <em>E</em> is the least such number. For if not, let <em>A</em>, <em>B</em>,{' '}
              <em>C</em> measure some <em>F</em> less than <em>E</em>. Since <em>A</em>, <em>B</em>{' '}
              measure <em>F</em>, therefore <em>D</em> measures <em>F</em>. [VII.35] But <em>C</em>{' '}
              also measures <em>F</em>. Therefore <em>C</em>, <em>D</em> measure <em>F</em>.
              Therefore <em>E</em> measures <em>F</em>. [VII.35] But <em>E</em> &gt; <em>F</em>:
              which is impossible. Therefore <em>E</em> is the least number measured by <em>A</em>,{' '}
              <em>B</em>, <em>C</em>.
            </p>
          </>
        }
      >
        <p>
          Given three numbers, to find the least number which they measure.
        </p>
      </Proposition>

      <h2>LCM of Three Numbers</h2>

      <p>
        This proposition extends the LCM algorithm to three numbers, establishing the iterative
        principle that underlies computing the LCM of any finite collection of integers. The key
        insight is that we can reduce the three-number problem to two successive two-number
        problems.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 300" className="w-full max-w-lg">
          {/* Title */}
          <text x="210" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            Computing LCM(4, 6, 9)
          </text>

          {/* Step 1: LCM(4, 6) */}
          <rect x="30" y="50" width="160" height="80" fill="#3b82f6" fillOpacity="0.1" rx="8" stroke="#3b82f6" strokeWidth="2" />
          <text x="110" y="70" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">Step 1: LCM(4, 6)</text>

          <circle cx="70" cy="100" r="18" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="70" y="105" fill="#3b82f6" fontSize="14" textAnchor="middle">4</text>

          <circle cx="150" cy="100" r="18" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="150" y="105" fill="#3b82f6" fontSize="14" textAnchor="middle">6</text>

          <text x="110" y="120" fill="#6b7280" fontSize="10" textAnchor="middle">GCD = 2</text>

          {/* Arrow to result */}
          <line x1="195" y1="90" x2="225" y2="90" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
            </marker>
          </defs>

          {/* Result: 12 */}
          <rect x="230" y="65" width="60" height="50" fill="#22c55e" fillOpacity="0.2" rx="8" stroke="#22c55e" strokeWidth="2" />
          <text x="260" y="85" fill="#22c55e" fontSize="10" textAnchor="middle">LCM =</text>
          <text x="260" y="105" fill="#22c55e" fontSize="18" textAnchor="middle" fontWeight="bold">12</text>

          {/* Step 2: LCM(12, 9) */}
          <rect x="30" y="150" width="260" height="80" fill="#9333ea" fillOpacity="0.1" rx="8" stroke="#9333ea" strokeWidth="2" />
          <text x="160" y="170" fill="#9333ea" fontSize="12" textAnchor="middle" fontWeight="bold">Step 2: LCM(12, 9)</text>

          <circle cx="90" cy="200" r="20" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="90" y="205" fill="#22c55e" fontSize="14" textAnchor="middle">12</text>
          <text x="90" y="228" fill="#6b7280" fontSize="9" textAnchor="middle">from Step 1</text>

          <circle cx="230" cy="200" r="20" fill="#9333ea" fillOpacity="0.3" stroke="#9333ea" strokeWidth="2" />
          <text x="230" y="205" fill="#9333ea" fontSize="14" textAnchor="middle">9</text>

          <text x="160" y="205" fill="#6b7280" fontSize="10" textAnchor="middle">GCD = 3</text>

          {/* Arrow to final result */}
          <line x1="295" y1="190" x2="330" y2="190" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow2)" />
          <defs>
            <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Final result */}
          <rect x="335" y="165" width="70" height="50" fill="#f59e0b" fillOpacity="0.2" rx="8" stroke="#f59e0b" strokeWidth="2" />
          <text x="370" y="185" fill="#f59e0b" fontSize="10" textAnchor="middle">LCM =</text>
          <text x="370" y="205" fill="#f59e0b" fontSize="18" textAnchor="middle" fontWeight="bold">36</text>

          {/* Verification */}
          <rect x="80" y="250" width="260" height="40" fill="#1e293b" rx="6" stroke="#334155" />
          <text x="210" y="268" fill="#94a3b8" fontSize="11" textAnchor="middle">Verify: 36 = 4×9 = 6×6 = 9×4</text>
          <text x="210" y="283" fill="#22c55e" fontSize="11" textAnchor="middle" fontWeight="bold">LCM(4, 6, 9) = 36</text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          LCM(a, b, c) = LCM(LCM(a, b), c)
        </p>
        <p className="text-dark-400 mt-2 text-sm">
          The LCM operation is associative
        </p>
      </div>

      <h3 className="mt-6">The Two Cases</h3>

      <p>
        Euclid considers two scenarios after finding D = LCM(A, B):
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h4 className="text-emerald-400 font-semibold mb-2">Case 1: C | D</h4>
          <p className="text-dark-300 text-sm">
            If the third number C already divides LCM(A, B), then D = LCM(A, B, C).
          </p>
          <p className="text-dark-400 text-xs mt-2">
            Example: LCM(4, 6, 3) = LCM(4, 6) = 12, since 3 | 12
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/30">
          <h4 className="text-rose-400 font-semibold mb-2">Case 2: C does not divide D</h4>
          <p className="text-dark-300 text-sm">
            Otherwise, compute LCM(D, C) = LCM(LCM(A, B), C) to get the final answer.
          </p>
          <p className="text-dark-400 text-xs mt-2">
            Example: LCM(4, 6, 9) = LCM(12, 9) = 36
          </p>
        </div>
      </div>

      <h3 className="mt-6">Proof of Minimality</h3>

      <p>
        The key insight in Euclid's proof is using VII.35 repeatedly:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Let E = LCM(A, B, C) be the proposed answer
          </li>
          <li>
            Suppose F &lt; E is also divisible by A, B, C
          </li>
          <li>
            Since A | F and B | F, by VII.35, LCM(A, B) | F, so D | F
          </li>
          <li>
            Since C | F and D | F, by VII.35, LCM(C, D) | F, so E | F
          </li>
          <li>
            But E &gt; F, so E cannot divide F — contradiction!
          </li>
        </ol>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 380 150" className="w-full max-w-md">
          {/* Chain of divisibility */}
          <text x="190" y="20" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
            Chain of Divisibility
          </text>

          {/* A, B */}
          <circle cx="50" cy="60" r="15" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="50" y="65" fill="#3b82f6" fontSize="12" textAnchor="middle">A</text>

          <circle cx="100" cy="60" r="15" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="65" fill="#3b82f6" fontSize="12" textAnchor="middle">B</text>

          {/* Arrow to D */}
          <line x1="120" y1="60" x2="155" y2="60" stroke="#6b7280" strokeWidth="1.5" />
          <text x="137" y="55" fill="#6b7280" fontSize="8">LCM</text>

          {/* D = LCM(A,B) */}
          <circle cx="180" cy="60" r="18" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="180" y="65" fill="#22c55e" fontSize="12" textAnchor="middle">D</text>

          {/* C */}
          <circle cx="180" cy="120" r="15" fill="#9333ea" fillOpacity="0.3" stroke="#9333ea" strokeWidth="2" />
          <text x="180" y="125" fill="#9333ea" fontSize="12" textAnchor="middle">C</text>

          {/* Arrow from D and C to E */}
          <line x1="200" y1="65" x2="250" y2="80" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="200" y1="115" x2="250" y2="95" stroke="#6b7280" strokeWidth="1.5" />
          <text x="235" y="75" fill="#6b7280" fontSize="8">LCM</text>

          {/* E = LCM(A,B,C) */}
          <circle cx="280" cy="90" r="22" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
          <text x="280" y="95" fill="#f59e0b" fontSize="12" textAnchor="middle">E</text>

          {/* Arrow to any multiple F */}
          <line x1="305" y1="90" x2="340" y2="90" stroke="#6b7280" strokeWidth="1.5" />
          <text x="322" y="85" fill="#6b7280" fontSize="8">divides</text>

          {/* F */}
          <circle cx="360" cy="90" r="15" fill="#6b7280" fillOpacity="0.3" stroke="#6b7280" strokeWidth="2" />
          <text x="360" y="95" fill="#6b7280" fontSize="11" textAnchor="middle">F</text>
        </svg>
      </div>

      <h3 className="mt-6">Extension to n Numbers</h3>

      <p>
        The iterative principle extends naturally to any number of arguments:
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-lg text-blue-400 font-mono text-center">
          LCM(a₁, a₂, ..., aₙ) = LCM(LCM(a₁, ..., aₙ₋₁), aₙ)
        </p>
        <p className="text-dark-300 mt-3 text-center text-sm">
          Recursively reduce to the two-number case
        </p>
      </div>

      <h3 className="mt-6">Worked Examples</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(6, 8, 12)</h4>
          <p className="text-dark-300 text-sm">
            Step 1: LCM(6, 8) = 24<br />
            <span className="text-dark-500">GCD(6,8)=2, so LCM=48/2=24</span><br />
            Step 2: Does 12 | 24? <strong className="text-emerald-400">Yes!</strong><br />
            LCM(6, 8, 12) = <strong className="text-amber-400">24</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(5, 7, 11)</h4>
          <p className="text-dark-300 text-sm">
            Step 1: LCM(5, 7) = 35<br />
            <span className="text-dark-500">(coprime, so 5×7=35)</span><br />
            Step 2: LCM(35, 11) = 385<br />
            <span className="text-dark-500">(coprime, so 35×11=385)</span><br />
            LCM(5, 7, 11) = <strong className="text-amber-400">385</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(12, 18, 24)</h4>
          <p className="text-dark-300 text-sm">
            Step 1: LCM(12, 18) = 36<br />
            <span className="text-dark-500">GCD=6, so 216/6=36</span><br />
            Step 2: LCM(36, 24) = 72<br />
            <span className="text-dark-500">GCD=12, so 864/12=72</span><br />
            LCM(12, 18, 24) = <strong className="text-amber-400">72</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(2, 3, 5)</h4>
          <p className="text-dark-300 text-sm">
            Step 1: LCM(2, 3) = 6<br />
            <span className="text-dark-500">(coprime)</span><br />
            Step 2: LCM(6, 5) = 30<br />
            <span className="text-dark-500">(coprime)</span><br />
            LCM(2, 3, 5) = <strong className="text-amber-400">30</strong>
          </p>
        </div>
      </div>

      <h3 className="mt-6">Using Prime Factorization</h3>

      <p>
        For three (or more) numbers, prime factorization gives a direct formula:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          For each prime, take the <em>maximum</em> power appearing in any of the numbers:
        </p>
        <p className="text-amber-400 font-mono text-center">
          LCM(12, 18, 30) where 12 = 2²×3, 18 = 2×3², 30 = 2×3×5
        </p>
        <p className="text-dark-400 text-center text-sm mt-2">
          max powers: 2² from 12, 3² from 18, 5¹ from 30
        </p>
        <p className="text-emerald-400 font-mono text-center mt-2">
          LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180
        </p>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Planetary alignments:</strong> Finding when multiple celestial bodies align
        </li>
        <li>
          <strong>Music rhythm:</strong> Finding when multiple rhythmic patterns repeat together
        </li>
        <li>
          <strong>Network scheduling:</strong> Synchronizing multiple periodic processes
        </li>
        <li>
          <strong>Gear trains:</strong> Designing gear ratios for specific mechanical purposes
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition VII.33 or VII.34 (LCM of two numbers)</li>
        <li>Proposition VII.35 (LCM divides all common multiples)</li>
        <li>Induction (implicit in extending to any number of arguments)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Computational Efficiency:</strong> While Euclid's
          iterative approach is mathematically elegant, modern implementations often use prime
          factorization or the formula LCM(a,b) = ab/GCD(a,b) with efficient GCD algorithms. For
          very large numbers with known factorizations, taking max powers of primes is fastest.
        </p>
      </div>
    </LessonLayout>
  );
}
