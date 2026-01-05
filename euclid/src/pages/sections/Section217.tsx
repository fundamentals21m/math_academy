import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section217() {
  return (
    <LessonLayout sectionId={217}>
      <Proposition
        title="Proposition VII.38"
        proof={
          <>
            <p>
              Let the number <em>A</em> have a part called by the same name as the number <em>B</em>.
            </p>
            <p className="mt-2">
              I say that <em>B</em> measures <em>A</em>.
            </p>
            <p className="mt-2">
              For let <em>C</em> be the part of <em>A</em> called by the same name as <em>B</em>.
            </p>
            <p className="mt-2">
              Since <em>C</em> is a part of <em>A</em> called by the same name as <em>B</em>,
              therefore the unit <em>D</em> is also a part of <em>B</em> called by the same name as
              it.
            </p>
            <p className="mt-2">
              Therefore, whatever part the unit <em>D</em> is of the number <em>B</em>, the same
              part is <em>C</em> of <em>A</em>; therefore the unit <em>D</em> measures the number{' '}
              <em>B</em> the same number of times as <em>C</em> measures <em>A</em>.
            </p>
            <p className="mt-2">
              Therefore, alternately, the unit <em>D</em> measures the number <em>C</em> the same
              number of times as <em>B</em> measures <em>A</em>. [VII.15]
            </p>
            <p className="mt-2 font-medium">
              But the unit <em>D</em> measures <em>C</em>; therefore <em>B</em> also measures{' '}
              <em>A</em>.
            </p>
          </>
        }
      >
        <p>
          If a number have any part whatever, it will be measured by a number called by the same
          name as the part.
        </p>
      </Proposition>

      <h2>The Converse: Parts Imply Divisibility</h2>

      <p>
        This proposition is the converse of VII.37. While VII.37 showed that if <em>B</em> measures{' '}
        <em>A</em>, then <em>A</em> has a <em>B</em>-th part, VII.38 shows the reverse: if{' '}
        <em>A</em> has a <em>B</em>-th part, then <em>B</em> must measure <em>A</em>. Together,
        these propositions establish the equivalence between divisibility and the existence of
        exact fractional parts.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            If 15 has a "fifth", then 5 measures 15
          </text>

          {/* Bar representing A = 15 with its fifth highlighted */}
          <rect x="50" y="50" width="300" height="35" fill="#3b82f6" fillOpacity="0.2" rx="4" stroke="#3b82f6" strokeWidth="2" />

          {/* Divisions showing fifths */}
          <rect x="50" y="50" width="60" height="35" fill="#f59e0b" fillOpacity="0.3" rx="4" stroke="#f59e0b" strokeWidth="2" />
          <line x1="110" y1="50" x2="110" y2="85" stroke="#6b7280" strokeWidth="1" strokeDasharray="3" />
          <line x1="170" y1="50" x2="170" y2="85" stroke="#6b7280" strokeWidth="1" strokeDasharray="3" />
          <line x1="230" y1="50" x2="230" y2="85" stroke="#6b7280" strokeWidth="1" strokeDasharray="3" />
          <line x1="290" y1="50" x2="290" y2="85" stroke="#6b7280" strokeWidth="1" strokeDasharray="3" />

          <text x="80" y="72" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">3</text>
          <text x="140" y="72" fill="#6b7280" fontSize="11" textAnchor="middle">3</text>
          <text x="200" y="72" fill="#6b7280" fontSize="11" textAnchor="middle">3</text>
          <text x="260" y="72" fill="#6b7280" fontSize="11" textAnchor="middle">3</text>
          <text x="320" y="72" fill="#6b7280" fontSize="11" textAnchor="middle">3</text>

          <text x="200" y="105" fill="#3b82f6" fontSize="13" textAnchor="middle" fontWeight="bold">A = 15</text>

          {/* Arrow and conclusion */}
          <text x="80" y="130" fill="#f59e0b" fontSize="11" textAnchor="middle">
            C = 3 is the "fifth"
          </text>

          {/* Logic box */}
          <rect x="60" y="145" width="280" height="45" fill="#1e293b" rx="6" stroke="#22c55e" strokeWidth="1" />
          <text x="200" y="165" fill="#94a3b8" fontSize="11" textAnchor="middle">
            A has a B-th part means: A = B × C for some C
          </text>
          <text x="200" y="182" fill="#22c55e" fontSize="12" textAnchor="middle" fontWeight="bold">
            Therefore B measures A (B | A)
          </text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          If a/b ∈ Z⁺, then b | a
        </p>
        <p className="text-dark-400 mt-2 text-sm">
          If 1/b of a is a whole number, then b divides a
        </p>
      </div>

      <h3 className="mt-6">The Equivalence of VII.37 and VII.38</h3>

      <p>
        Together, VII.37 and VII.38 establish a fundamental equivalence:
      </p>

      <div className="bg-gradient-to-br from-emerald-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-emerald-500/20">
        <p className="text-xl text-emerald-400 font-mono text-center">
          b | a ⟺ a has a b-th part
        </p>
        <p className="text-dark-300 mt-3 text-center">
          Divisibility and exact fractional parts are two sides of the same coin
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 150" className="w-full max-w-md">
          {/* Two-way equivalence diagram */}
          <text x="200" y="25" fill="#f59e0b" fontSize="13" textAnchor="middle" fontWeight="bold">
            The Equivalence
          </text>

          {/* Left side: Divisibility */}
          <rect x="30" y="50" width="140" height="70" fill="#3b82f6" fillOpacity="0.1" rx="8" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="75" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">b divides a</text>
          <text x="100" y="95" fill="#3b82f6" fontSize="11" textAnchor="middle">a = b × k</text>
          <text x="100" y="112" fill="#3b82f6" fontSize="10" textAnchor="middle">(k is a positive integer)</text>

          {/* Right side: Part exists */}
          <rect x="230" y="50" width="140" height="70" fill="#22c55e" fillOpacity="0.1" rx="8" stroke="#22c55e" strokeWidth="2" />
          <text x="300" y="75" fill="#22c55e" fontSize="12" textAnchor="middle" fontWeight="bold">a has b-th part</text>
          <text x="300" y="95" fill="#22c55e" fontSize="11" textAnchor="middle">a/b = k</text>
          <text x="300" y="112" fill="#22c55e" fontSize="10" textAnchor="middle">(k is a positive integer)</text>

          {/* Bidirectional arrows */}
          <line x1="175" y1="75" x2="225" y2="75" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowRight)" />
          <line x1="225" y1="95" x2="175" y2="95" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowLeft)" />
          <defs>
            <marker id="arrowRight" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
            <marker id="arrowLeft" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
              <polygon points="10 0, 0 3.5, 10 7" fill="#f59e0b" />
            </marker>
          </defs>
          <text x="200" y="68" fill="#f59e0b" fontSize="9" textAnchor="middle">VII.37</text>
          <text x="200" y="107" fill="#f59e0b" fontSize="9" textAnchor="middle">VII.38</text>
        </svg>
      </div>

      <h3 className="mt-6">The Proof Explained</h3>

      <p>
        Euclid's proof uses the proportionality principle (VII.15):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Let <em>C</em> be the <em>B</em>-th part of <em>A</em>
          </li>
          <li>
            By definition, 1 is the <em>B</em>-th part of <em>B</em> (since <em>B</em> = 1 ×{' '}
            <em>B</em>)
          </li>
          <li>
            So we have the proportion: 1:<em>B</em> = <em>C</em>:<em>A</em>
          </li>
          <li>
            By alternation (VII.15): 1:<em>C</em> = <em>B</em>:<em>A</em>
          </li>
          <li>
            Since 1 measures <em>C</em> (any integer is measured by 1), <em>B</em> measures{' '}
            <em>A</em>
          </li>
        </ol>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 380 130" className="w-full max-w-md">
          {/* Proportion chain */}
          <text x="190" y="20" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
            Proportion and Alternation
          </text>

          {/* Original proportion */}
          <rect x="30" y="40" width="140" height="35" fill="#3b82f6" fillOpacity="0.2" rx="6" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="63" fill="#3b82f6" fontSize="14" textAnchor="middle">1 : B = C : A</text>

          {/* Arrow */}
          <line x1="175" y1="57" x2="205" y2="57" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#grayArrow)" />
          <text x="190" y="50" fill="#6b7280" fontSize="8">VII.15</text>
          <defs>
            <marker id="grayArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
            </marker>
          </defs>

          {/* Alternated proportion */}
          <rect x="210" y="40" width="140" height="35" fill="#22c55e" fillOpacity="0.2" rx="6" stroke="#22c55e" strokeWidth="2" />
          <text x="280" y="63" fill="#22c55e" fontSize="14" textAnchor="middle">1 : C = B : A</text>

          {/* Conclusion */}
          <rect x="100" y="90" width="180" height="30" fill="#f59e0b" fillOpacity="0.15" rx="6" stroke="#f59e0b" strokeWidth="1" />
          <text x="190" y="110" fill="#f59e0b" fontSize="11" textAnchor="middle">
            1 | C implies B | A (by the proportion)
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Examples</h3>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">24 has a "sixth"</h4>
          <p className="text-dark-300 text-sm">
            The sixth of 24 is 4<br />
            24 = 6 × 4<br />
            Therefore 6 | 24 ✓
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">100 has a "fourth"</h4>
          <p className="text-dark-300 text-sm">
            The fourth of 100 is 25<br />
            100 = 4 × 25<br />
            Therefore 4 | 100 ✓
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">63 has a "ninth"</h4>
          <p className="text-dark-300 text-sm">
            The ninth of 63 is 7<br />
            63 = 9 × 7<br />
            Therefore 9 | 63 ✓
          </p>
        </div>
      </div>

      <h3 className="mt-6">Contrapositive: No Part Means No Divisibility</h3>

      <p>
        The contrapositive of VII.38 is equally useful: if <em>A</em> does not have a <em>B</em>-th
        part (i.e., <em>A</em>/<em>B</em> is not a whole number), then <em>B</em> does not divide{' '}
        <em>A</em>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          <strong className="text-rose-400">Example:</strong> 17 has no "third"
        </p>
        <ul className="list-disc list-inside ml-4 text-dark-400 text-sm space-y-1">
          <li>17/3 = 5.666... (not a whole number)</li>
          <li>Therefore 3 does not divide 17</li>
          <li>17 = 3 × 5 + 2 (remainder 2)</li>
        </ul>
      </div>

      <h3 className="mt-6">Application: Testing Divisibility</h3>

      <p>
        VII.38 provides an alternative way to test divisibility: instead of asking "does <em>B</em>{' '}
        divide <em>A</em>?", we can ask "is <em>A</em>/<em>B</em> a whole number?"
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <h4 className="text-blue-400 font-semibold mb-3">Divisibility Test via Parts</h4>
        <p className="text-dark-300">
          To check if <em>b</em> | <em>a</em>:
        </p>
        <ol className="list-decimal list-inside mt-2 text-dark-400 space-y-1">
          <li>
            Compute <em>a</em> ÷ <em>b</em>
          </li>
          <li>If the result is a whole number, then <em>b</em> | <em>a</em></li>
          <li>If not, then <em>b</em> does not divide <em>a</em></li>
        </ol>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Fair division:</strong> Can we split <em>A</em> items equally among <em>B</em>{' '}
          people? Iff <em>A</em> has a <em>B</em>-th part
        </li>
        <li>
          <strong>Computer memory:</strong> Can a block of size <em>A</em> be evenly divided into{' '}
          <em>B</em> sub-blocks?
        </li>
        <li>
          <strong>Currency:</strong> Can $<em>A</em> be split into <em>B</em> equal amounts without
          cents?
        </li>
        <li>
          <strong>Scheduling:</strong> Can <em>A</em> hours be divided into <em>B</em> equal shifts?
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition VII.3 (what it means to be a "part")</li>
        <li>Proposition VII.15 (alternation of proportions)</li>
        <li>The fact that 1 measures every positive integer</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Logical Completeness:</strong> VII.37 and VII.38
          together form a biconditional (if and only if) statement. This pattern—proving both a
          statement and its converse—is fundamental in mathematics. Euclid frequently uses this
          approach to establish complete characterizations.
        </p>
      </div>
    </LessonLayout>
  );
}
