import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section214() {
  return (
    <LessonLayout sectionId={214}>
      <Proposition
        title="Proposition VII.35"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em> be two numbers, and let <em>C</em> be their least common
              multiple. Let <em>D</em> be any number measured by <em>A</em>, <em>B</em>.
            </p>
            <p className="mt-2">
              I say that <em>C</em> measures <em>D</em>.
            </p>
            <p className="mt-2">
              For since <em>C</em> is the least number measured by <em>A</em>, <em>B</em>, and{' '}
              <em>D</em> is also measured by <em>A</em>, <em>B</em>, therefore <em>C</em> is less
              than or equal to <em>D</em>.
            </p>
            <p className="mt-2">
              Let <em>D</em> be measured by <em>C</em> as many times as possible, with remainder{' '}
              <em>E</em> less than <em>C</em>. [VII.1]
            </p>
            <p className="mt-2">
              If <em>E</em> = 0, then <em>C</em> measures <em>D</em>, as required.
            </p>
            <p className="mt-2">
              Suppose <em>E</em> is not 0. Since <em>A</em> measures both <em>C</em> and <em>D</em>,{' '}
              <em>A</em> also measures <em>D</em> - (<em>C</em> × some number) = <em>E</em>.
            </p>
            <p className="mt-2">
              Similarly, <em>B</em> measures <em>E</em>.
            </p>
            <p className="mt-2">
              Therefore <em>E</em> is a common multiple of <em>A</em>, <em>B</em>. But <em>E</em> &lt;{' '}
              <em>C</em>, and <em>C</em> is the <em>least</em> common multiple.
            </p>
            <p className="mt-2 font-medium">
              This is impossible. Therefore <em>E</em> = 0, and <em>C</em> measures <em>D</em>.
              Hence the least common multiple of <em>A</em>, <em>B</em> measures every common
              multiple of <em>A</em>, <em>B</em>.
            </p>
          </>
        }
      >
        <p>
          If a number be measured by two numbers, it will also be measured by their least common
          multiple.
        </p>
      </Proposition>

      <h2>LCM Divides All Common Multiples</h2>

      <p>
        This proposition establishes a crucial property of the Least Common Multiple: not only is
        it a common multiple, but it <em>divides every</em> common multiple. This characterizes
        the LCM uniquely and explains why we call it the "least" common multiple.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 280" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            Common Multiples of 4 and 6
          </text>

          {/* LCM */}
          <rect x="150" y="45" width="100" height="35" fill="#22c55e" fillOpacity="0.3" rx="8" stroke="#22c55e" strokeWidth="2" />
          <text x="200" y="68" fill="#22c55e" fontSize="14" textAnchor="middle" fontWeight="bold">LCM = 12</text>

          {/* Arrow down */}
          <line x1="200" y1="85" x2="200" y2="100" stroke="#22c55e" strokeWidth="2" />
          <text x="220" y="95" fill="#22c55e" fontSize="10">divides</text>

          {/* Common multiples grid */}
          <rect x="50" y="105" width="300" height="110" fill="#1e293b" rx="8" stroke="#334155" />
          <text x="200" y="125" fill="#94a3b8" fontSize="11" textAnchor="middle">All Common Multiples of 4 and 6:</text>

          {/* Multiples shown as divisible by 12 */}
          <g>
            <circle cx="100" cy="155" r="22" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
            <text x="100" y="152" fill="#3b82f6" fontSize="12" textAnchor="middle">12</text>
            <text x="100" y="167" fill="#3b82f6" fontSize="9" textAnchor="middle">= 12×1</text>
          </g>
          <g>
            <circle cx="170" cy="155" r="22" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
            <text x="170" y="152" fill="#3b82f6" fontSize="12" textAnchor="middle">24</text>
            <text x="170" y="167" fill="#3b82f6" fontSize="9" textAnchor="middle">= 12×2</text>
          </g>
          <g>
            <circle cx="240" cy="155" r="22" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
            <text x="240" y="152" fill="#3b82f6" fontSize="12" textAnchor="middle">36</text>
            <text x="240" y="167" fill="#3b82f6" fontSize="9" textAnchor="middle">= 12×3</text>
          </g>
          <g>
            <circle cx="310" cy="155" r="22" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
            <text x="310" y="152" fill="#3b82f6" fontSize="12" textAnchor="middle">48</text>
            <text x="310" y="167" fill="#3b82f6" fontSize="9" textAnchor="middle">= 12×4</text>
          </g>
          <text x="200" y="200" fill="#6b7280" fontSize="11" textAnchor="middle">... 60, 72, 84, 96, 108, 120, ...</text>

          {/* Key insight box */}
          <rect x="50" y="225" width="300" height="45" fill="#22c55e" fillOpacity="0.1" rx="8" stroke="#22c55e" strokeWidth="1" strokeDasharray="4" />
          <text x="200" y="245" fill="#22c55e" fontSize="11" textAnchor="middle">Every common multiple is a multiple of the LCM</text>
          <text x="200" y="262" fill="#22c55e" fontSize="12" textAnchor="middle" fontWeight="bold">Common multiples = {"{"}12, 24, 36, 48, ...{"}"} = {"{"}12k : k = 1, 2, 3, ...{"}"}</text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          If a | m and b | m, then LCM(a, b) | m
        </p>
        <p className="text-dark-400 mt-2 text-sm">
          The LCM divides any common multiple
        </p>
      </div>

      <h3 className="mt-6">Proof by Contradiction</h3>

      <p>
        Euclid uses a clever argument combining the division algorithm with the minimality of the LCM:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Let <em>c</em> = LCM(<em>a</em>, <em>b</em>) and let <em>m</em> be any common multiple
          </li>
          <li>
            Write <em>m</em> = <em>c</em> × <em>q</em> + <em>r</em> where 0 ≤ <em>r</em> &lt;{' '}
            <em>c</em>
          </li>
          <li>
            Since <em>a</em> | <em>m</em> and <em>a</em> | <em>c</em>, we have <em>a</em> |{' '}
            (<em>m</em> - <em>cq</em>) = <em>r</em>
          </li>
          <li>
            Similarly, <em>b</em> | <em>r</em>
          </li>
          <li>
            If <em>r</em> &gt; 0, then <em>r</em> is a common multiple smaller than <em>c</em>
          </li>
          <li>
            This contradicts <em>c</em> being the <em>least</em> common multiple
          </li>
          <li>
            Therefore <em>r</em> = 0, so <em>c</em> | <em>m</em>
          </li>
        </ol>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          {/* Division algorithm visualization */}
          <text x="200" y="25" fill="#f59e0b" fontSize="13" textAnchor="middle" fontWeight="bold">
            Division Algorithm: m = c × q + r
          </text>

          {/* Bar representing m */}
          <rect x="40" y="50" width="320" height="30" fill="#3b82f6" fillOpacity="0.3" rx="4" stroke="#3b82f6" strokeWidth="2" />
          <text x="200" y="70" fill="#3b82f6" fontSize="14" textAnchor="middle" fontWeight="bold">m (common multiple)</text>

          {/* Subdivisions showing c repeating */}
          <rect x="40" y="100" width="80" height="25" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <text x="80" y="117" fill="#22c55e" fontSize="10" textAnchor="middle">c</text>

          <rect x="125" y="100" width="80" height="25" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <text x="165" y="117" fill="#22c55e" fontSize="10" textAnchor="middle">c</text>

          <rect x="210" y="100" width="80" height="25" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <text x="250" y="117" fill="#22c55e" fontSize="10" textAnchor="middle">c</text>

          <rect x="295" y="100" width="65" height="25" fill="#ef4444" fillOpacity="0.3" rx="4" stroke="#ef4444" strokeWidth="2" />
          <text x="327" y="117" fill="#ef4444" fontSize="10" textAnchor="middle">r</text>

          {/* Labels */}
          <text x="165" y="145" fill="#22c55e" fontSize="11" textAnchor="middle">q copies of c = LCM</text>
          <text x="327" y="145" fill="#ef4444" fontSize="11" textAnchor="middle">r &lt; c</text>

          {/* Conclusion */}
          <rect x="80" y="160" width="240" height="30" fill="#1e293b" rx="6" stroke="#f59e0b" strokeWidth="1" />
          <text x="200" y="180" fill="#f59e0b" fontSize="11" textAnchor="middle">If r ≠ 0, then a|r and b|r, contradicting c = LCM</text>
        </svg>
      </div>

      <h3 className="mt-6">Equivalent Characterizations of LCM</h3>

      <p>
        This proposition shows that LCM can be characterized in two equivalent ways:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-blue-500/30">
          <h4 className="text-blue-400 font-semibold mb-2">Definition 1: Minimality</h4>
          <p className="text-dark-300 text-sm">
            LCM(a, b) is the <em>smallest</em> positive integer divisible by both a and b
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h4 className="text-emerald-400 font-semibold mb-2">Definition 2: Divisibility</h4>
          <p className="text-dark-300 text-sm">
            LCM(a, b) is the positive integer that divides every common multiple of a and b
          </p>
        </div>
      </div>

      <p className="mt-4">
        VII.35 proves that these definitions are equivalent. The LCM is minimal among common
        multiples, AND it divides all other common multiples.
      </p>

      <h3 className="mt-6">Worked Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-semibold mb-3">Show that LCM(6, 15) divides 90</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>First, find LCM(6, 15)</li>
          <li className="ml-4 text-dark-400">GCD(6, 15) = 3</li>
          <li className="ml-4 text-dark-400">LCM(6, 15) = 6 × 15 / 3 = 30</li>
          <li>Check: 6 | 90? Yes, 90 = 6 × 15</li>
          <li>Check: 15 | 90? Yes, 90 = 15 × 6</li>
          <li>By VII.35: LCM(6, 15) = 30 must divide 90</li>
          <li>Verify: 90 = 30 × 3 ✓</li>
        </ol>
      </div>

      <h3 className="mt-6">Set of Common Multiples</h3>

      <p>
        VII.35 tells us that the set of common multiples of <em>a</em> and <em>b</em> is precisely
        the set of multiples of LCM(<em>a</em>, <em>b</em>):
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-xl text-blue-400 font-mono text-center">
          {"{"} m : a|m and b|m {"}"} = {"{"} k × LCM(a,b) : k ∈ Z+ {"}"}
        </p>
        <p className="text-dark-300 mt-3 text-center text-sm">
          Common multiples form an arithmetic progression with step LCM(a, b)
        </p>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Fraction simplification:</strong> When reducing fractions, we use that the LCM
          generates all common denominators
        </li>
        <li>
          <strong>Scheduling theory:</strong> Finding all times when periodic events coincide
        </li>
        <li>
          <strong>Ring theory:</strong> LCM generates the intersection of ideals
        </li>
        <li>
          <strong>Lattice theory:</strong> LCM is the "join" operation in the divisibility lattice
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition VII.1 (division algorithm)</li>
        <li>Proposition VII.33 (existence and construction of LCM)</li>
        <li>The minimality property of LCM</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Duality with GCD:</strong> Just as the GCD divides
          both numbers (VII.2-3) and is divided by every common divisor, the LCM is a multiple of
          both numbers and divides every common multiple. GCD and LCM are dual concepts in the
          lattice of divisibility.
        </p>
      </div>
    </LessonLayout>
  );
}
