import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section218() {
  return (
    <LessonLayout sectionId={218}>
      <Proposition
        title="Proposition VII.39"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em> be the given numbers.
            </p>
            <p className="mt-2">
              It is required to find the least number which has <em>A</em>, <em>B</em>, <em>C</em> as
              parts.
            </p>
            <p className="mt-2">
              Let <em>D</em> be the least number measured by <em>A</em>, <em>B</em>, <em>C</em>.
              [VII.36]
            </p>
            <p className="mt-2">
              I say that <em>D</em> is the least number which has the parts called by the same names
              as <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              For since <em>A</em>, <em>B</em>, <em>C</em> measure <em>D</em>, <em>D</em> has parts
              called by the same names as <em>A</em>, <em>B</em>, <em>C</em>. [VII.37]
            </p>
            <p className="mt-2">
              I say next that <em>D</em> is the least such number.
            </p>
            <p className="mt-2">
              For if not, there will be some number less than <em>D</em> which has the parts called
              by the same names as <em>A</em>, <em>B</em>, <em>C</em>. Let it be <em>E</em>.
            </p>
            <p className="mt-2">
              Since <em>E</em> has the parts called by the same names as <em>A</em>, <em>B</em>,{' '}
              <em>C</em>, therefore <em>A</em>, <em>B</em>, <em>C</em> measure <em>E</em>. [VII.38]
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>D</em> measures <em>E</em>, the greater the less: which is impossible.
              [VII.35] Therefore there is no number less than <em>D</em> which has the parts called
              by the same names as <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
          </>
        }
      >
        <p>
          To find the number which is the least that will have given parts.
        </p>
      </Proposition>

      <h2>Finding the Smallest Number with Given Fractional Parts</h2>

      <p>
        This proposition completes Book VII's treatment of parts and measurement. Given a
        collection of fractions (like "a third", "a fourth", and "a sixth"), we want to find the
        smallest number that has all these as exact parts. The answer is precisely the LCM of
        the denominators.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 280" className="w-full max-w-lg">
          {/* Title */}
          <text x="210" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            Find the least number with a third, fourth, and sixth
          </text>

          {/* The problem: we want 1/3, 1/4, 1/6 to all be whole */}
          <rect x="30" y="45" width="360" height="50" fill="#1e293b" rx="8" stroke="#334155" />
          <text x="210" y="65" fill="#94a3b8" fontSize="11" textAnchor="middle">
            Need: n/3, n/4, and n/6 all to be whole numbers
          </text>
          <text x="210" y="82" fill="#94a3b8" fontSize="11" textAnchor="middle">
            Equivalently: 3 | n, 4 | n, and 6 | n
          </text>

          {/* Solution: LCM */}
          <rect x="100" y="110" width="220" height="40" fill="#22c55e" fillOpacity="0.2" rx="8" stroke="#22c55e" strokeWidth="2" />
          <text x="210" y="135" fill="#22c55e" fontSize="13" textAnchor="middle" fontWeight="bold">
            Solution: LCM(3, 4, 6) = 12
          </text>

          {/* Visual representation of 12 with parts */}
          <rect x="60" y="170" width="300" height="40" fill="#3b82f6" fillOpacity="0.2" rx="4" stroke="#3b82f6" strokeWidth="2" />
          <text x="210" y="195" fill="#3b82f6" fontSize="16" textAnchor="middle" fontWeight="bold">12</text>

          {/* Thirds */}
          <rect x="60" y="220" width="100" height="25" fill="#f59e0b" fillOpacity="0.3" rx="3" stroke="#f59e0b" strokeWidth="1" />
          <rect x="160" y="220" width="100" height="25" fill="#f59e0b" fillOpacity="0.15" rx="3" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3" />
          <rect x="260" y="220" width="100" height="25" fill="#f59e0b" fillOpacity="0.15" rx="3" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3" />
          <text x="110" y="238" fill="#f59e0b" fontSize="10" textAnchor="middle">4 (third)</text>

          {/* Fourths - offset for visibility */}
          <text x="30" y="268" fill="#9333ea" fontSize="10">Fourths:</text>
          <rect x="80" y="255" width="75" height="20" fill="#9333ea" fillOpacity="0.3" rx="3" stroke="#9333ea" strokeWidth="1" />
          <text x="117" y="270" fill="#9333ea" fontSize="9" textAnchor="middle">3</text>

          {/* Sixths */}
          <text x="200" y="268" fill="#22c55e" fontSize="10">Sixths:</text>
          <rect x="245" y="255" width="50" height="20" fill="#22c55e" fillOpacity="0.3" rx="3" stroke="#22c55e" strokeWidth="1" />
          <text x="270" y="270" fill="#22c55e" fontSize="9" textAnchor="middle">2</text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          The least n with 1/a, 1/b, 1/c as exact parts is LCM(a, b, c)
        </p>
        <p className="text-dark-400 mt-2 text-sm">
          Finding common denominators = finding the LCM
        </p>
      </div>

      <h3 className="mt-6">The Key Insight</h3>

      <p>
        This proposition beautifully connects the concepts developed throughout Book VII:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            <strong className="text-blue-400">VII.37:</strong> If <em>a</em> | <em>n</em>, then{' '}
            <em>n</em> has an <em>a</em>-th part
          </li>
          <li>
            <strong className="text-emerald-400">VII.38:</strong> If <em>n</em> has an <em>a</em>-th
            part, then <em>a</em> | <em>n</em>
          </li>
          <li>
            <strong className="text-amber-400">VII.36:</strong> LCM(<em>a</em>, <em>b</em>,{' '}
            <em>c</em>) is the least number measured by all three
          </li>
          <li>
            <strong className="text-purple-400">VII.39:</strong> Combining these: LCM is the least
            with all three parts
          </li>
        </ul>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 180" className="w-full max-w-md">
          {/* Logical chain */}
          <text x="200" y="20" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
            The Chain of Equivalences
          </text>

          {/* "n has parts a, b, c" */}
          <rect x="30" y="40" width="150" height="45" fill="#3b82f6" fillOpacity="0.15" rx="6" stroke="#3b82f6" strokeWidth="2" />
          <text x="105" y="58" fill="#3b82f6" fontSize="10" textAnchor="middle">n has parts named</text>
          <text x="105" y="72" fill="#3b82f6" fontSize="11" textAnchor="middle" fontWeight="bold">1/a, 1/b, 1/c</text>

          {/* Arrow with VII.37, VII.38 */}
          <line x1="185" y1="62" x2="215" y2="62" stroke="#6b7280" strokeWidth="1.5" />
          <polygon points="213,58 223,62 213,66" fill="#6b7280" />
          <text x="200" y="54" fill="#6b7280" fontSize="8" textAnchor="middle">VII.37</text>
          <text x="200" y="78" fill="#6b7280" fontSize="8" textAnchor="middle">VII.38</text>

          {/* "a, b, c all measure n" */}
          <rect x="220" y="40" width="150" height="45" fill="#22c55e" fillOpacity="0.15" rx="6" stroke="#22c55e" strokeWidth="2" />
          <text x="295" y="58" fill="#22c55e" fontSize="10" textAnchor="middle">a, b, c all</text>
          <text x="295" y="72" fill="#22c55e" fontSize="11" textAnchor="middle" fontWeight="bold">measure n</text>

          {/* Arrow down */}
          <line x1="295" y1="90" x2="295" y2="110" stroke="#6b7280" strokeWidth="1.5" />
          <polygon points="291,108 295,118 299,108" fill="#6b7280" />
          <text x="315" y="105" fill="#6b7280" fontSize="8">VII.36</text>

          {/* Conclusion */}
          <rect x="120" y="125" width="180" height="40" fill="#f59e0b" fillOpacity="0.2" rx="6" stroke="#f59e0b" strokeWidth="2" />
          <text x="210" y="142" fill="#f59e0b" fontSize="10" textAnchor="middle">Least such n is</text>
          <text x="210" y="157" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">LCM(a, b, c)</text>
        </svg>
      </div>

      <h3 className="mt-6">Worked Examples</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">
            Least number with halves, thirds, and fourths
          </h4>
          <p className="text-dark-300 text-sm mb-2">
            Find: LCM(2, 3, 4)
          </p>
          <ul className="list-disc list-inside text-dark-400 text-sm space-y-1">
            <li>LCM(2, 3) = 6</li>
            <li>LCM(6, 4) = 12</li>
            <li>Answer: <strong className="text-amber-400">12</strong></li>
          </ul>
          <p className="text-dark-500 text-xs mt-2">
            12/2 = 6, 12/3 = 4, 12/4 = 3 (all integers)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">
            Least with fifths, sixths, and tenths
          </h4>
          <p className="text-dark-300 text-sm mb-2">
            Find: LCM(5, 6, 10)
          </p>
          <ul className="list-disc list-inside text-dark-400 text-sm space-y-1">
            <li>LCM(5, 6) = 30</li>
            <li>10 | 30, so LCM(30, 10) = 30</li>
            <li>Answer: <strong className="text-amber-400">30</strong></li>
          </ul>
          <p className="text-dark-500 text-xs mt-2">
            30/5 = 6, 30/6 = 5, 30/10 = 3 (all integers)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">
            Least with eighths and twelfths
          </h4>
          <p className="text-dark-300 text-sm mb-2">
            Find: LCM(8, 12)
          </p>
          <ul className="list-disc list-inside text-dark-400 text-sm space-y-1">
            <li>8 = 2³, 12 = 2² × 3</li>
            <li>LCM = 2³ × 3 = 24</li>
            <li>Answer: <strong className="text-amber-400">24</strong></li>
          </ul>
          <p className="text-dark-500 text-xs mt-2">
            24/8 = 3, 24/12 = 2 (all integers)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">
            Least with thirds, fifths, and sevenths
          </h4>
          <p className="text-dark-300 text-sm mb-2">
            Find: LCM(3, 5, 7)
          </p>
          <ul className="list-disc list-inside text-dark-400 text-sm space-y-1">
            <li>All coprime</li>
            <li>LCM = 3 × 5 × 7 = 105</li>
            <li>Answer: <strong className="text-amber-400">105</strong></li>
          </ul>
          <p className="text-dark-500 text-xs mt-2">
            105/3 = 35, 105/5 = 21, 105/7 = 15
          </p>
        </div>
      </div>

      <h3 className="mt-6">Application: Finding Common Denominators</h3>

      <p>
        VII.39 is directly applicable to adding fractions. To add 1/3 + 1/4 + 1/6, we need a
        common denominator — the least is LCM(3, 4, 6) = 12:
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-lg text-blue-400 font-mono text-center">
          1/3 + 1/4 + 1/6 = 4/12 + 3/12 + 2/12 = 9/12 = 3/4
        </p>
        <p className="text-dark-300 mt-3 text-center text-sm">
          12 is the least number allowing all three fractions to have integer numerators
        </p>
      </div>

      <h3 className="mt-6">The Proof Structure</h3>

      <p>
        Euclid's proof is elegant and relies on the chain of equivalences:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Let D = LCM(A, B, C) via VII.36
          </li>
          <li>
            Since A, B, C all measure D, D has parts 1/A, 1/B, 1/C by VII.37
          </li>
          <li>
            Suppose E &lt; D also has these parts
          </li>
          <li>
            Then A, B, C all measure E by VII.38
          </li>
          <li>
            Then D = LCM(A, B, C) divides E by VII.35
          </li>
          <li>
            But D &gt; E, so D cannot divide E — contradiction!
          </li>
          <li>
            Therefore D is the least such number
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Fraction arithmetic:</strong> Finding common denominators for adding/subtracting
        </li>
        <li>
          <strong>Recipe scaling:</strong> Finding the smallest batch that divides evenly into
          portions
        </li>
        <li>
          <strong>Time synchronization:</strong> Finding when events with different periods align
        </li>
        <li>
          <strong>Resource allocation:</strong> Finding the smallest pool divisible among groups
        </li>
        <li>
          <strong>Music:</strong> Finding the shortest phrase containing multiple rhythmic patterns
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition VII.35 (LCM divides all common multiples)</li>
        <li>Proposition VII.36 (finding LCM of three numbers)</li>
        <li>Proposition VII.37 (measurement implies parts exist)</li>
        <li>Proposition VII.38 (parts existing implies measurement)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold mb-2">End of Book VII</h4>
        <p className="text-dark-200">
          Proposition VII.39 concludes Book VII, which has developed the theory of divisibility
          and measurement for positive integers. Starting from basic definitions and the Euclidean
          algorithm, Euclid has established the foundations of number theory: GCD, LCM, prime
          numbers, coprimeness, and the relationship between divisibility and fractions. This
          groundwork is essential for Books VIII and IX, which will explore proportions among
          numbers and prove the infinitude of primes.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-cyan-400 font-semibold mb-2">Looking Ahead</h4>
        <p className="text-dark-200">
          Book VIII continues the study of numbers with proportions and geometric progressions,
          while Book IX contains the famous proof that there are infinitely many prime numbers
          (Proposition IX.20), building directly on the foundations laid in Book VII.
        </p>
      </div>
    </LessonLayout>
  );
}
