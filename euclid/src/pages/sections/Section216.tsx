import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section216() {
  return (
    <LessonLayout sectionId={216}>
      <Proposition
        title="Proposition VII.37"
        proof={
          <>
            <p>
              Let the number <em>A</em> be measured by the number <em>B</em>.
            </p>
            <p className="mt-2">
              I say that <em>A</em> has a part called by the same name as <em>B</em>.
            </p>
            <p className="mt-2">
              For, as many times as <em>B</em> measures <em>A</em>, so many units let there be in{' '}
              <em>C</em>.
            </p>
            <p className="mt-2">
              Since <em>B</em> measures <em>A</em> according to the units in <em>C</em>, and the
              unit <em>D</em> also measures the number <em>C</em> according to the units in it,
              therefore the unit <em>D</em> measures the number <em>C</em> the same number of times
              as <em>B</em> measures <em>A</em>.
            </p>
            <p className="mt-2">
              Therefore, alternately, the unit <em>D</em> measures the number <em>B</em> the same
              number of times as <em>C</em> measures <em>A</em>. [VII.15]
            </p>
            <p className="mt-2">
              Therefore, whatever part the unit <em>D</em> is of the number <em>B</em>, the same
              part is <em>C</em> of <em>A</em> also.
            </p>
            <p className="mt-2 font-medium">
              But the unit <em>D</em> is a part of the number <em>B</em> called by the same name as
              it; therefore <em>C</em> is also a part of <em>A</em> called by the same name as{' '}
              <em>B</em>. So that <em>A</em> has a part <em>C</em> called by the same name as{' '}
              <em>B</em>.
            </p>
          </>
        }
      >
        <p>
          If a number be measured by any number, the number which is measured will have a part
          called by the same name as the measuring number.
        </p>
      </Proposition>

      <h2>Understanding Parts and Measurement</h2>

      <p>
        This proposition connects <strong>divisibility</strong> (measurement) with{' '}
        <strong>fractions</strong> (parts). In Euclid's terminology, if <em>B</em> measures{' '}
        <em>A</em>, then <em>A</em> has a "B-th part" — what we would call a fraction 1/<em>B</em>{' '}
        of <em>A</em>. The proposition shows that divisibility implies the existence of such a
        fractional part.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 220" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            If 3 measures 12, then 12 has a "third"
          </text>

          {/* Bar representing A = 12 */}
          <rect x="50" y="50" width="300" height="40" fill="#3b82f6" fillOpacity="0.2" rx="4" stroke="#3b82f6" strokeWidth="2" />
          <text x="200" y="75" fill="#3b82f6" fontSize="16" textAnchor="middle" fontWeight="bold">A = 12</text>

          {/* Subdivisions by B = 3 */}
          <rect x="50" y="110" width="75" height="35" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <rect x="125" y="110" width="75" height="35" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <rect x="200" y="110" width="75" height="35" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <rect x="275" y="110" width="75" height="35" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />

          {/* Labels */}
          <text x="87" y="132" fill="#22c55e" fontSize="12" textAnchor="middle">3</text>
          <text x="162" y="132" fill="#22c55e" fontSize="12" textAnchor="middle">3</text>
          <text x="237" y="132" fill="#22c55e" fontSize="12" textAnchor="middle">3</text>
          <text x="312" y="132" fill="#22c55e" fontSize="12" textAnchor="middle">3</text>

          <text x="200" y="165" fill="#6b7280" fontSize="11" textAnchor="middle">
            B = 3 measures A = 12 exactly 4 times (C = 4)
          </text>

          {/* One third highlighted */}
          <rect x="50" y="180" width="75" height="30" fill="#f59e0b" fillOpacity="0.3" rx="4" stroke="#f59e0b" strokeWidth="2" />
          <text x="87" y="200" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">C = 4</text>
          <text x="230" y="200" fill="#f59e0b" fontSize="11" textAnchor="middle">
            C = 4 is the "third part" of A = 12
          </text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          If b | a, then a has a part equal to a/b
        </p>
        <p className="text-dark-400 mt-2 text-sm">
          If b divides a, then 1/b of a is a whole number
        </p>
      </div>

      <h3 className="mt-6">Euclid's Terminology: "Parts"</h3>

      <p>
        In Book VII, Euclid uses specific terminology for fractions:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-blue-500/30">
          <h4 className="text-blue-400 font-semibold mb-2">Part (Def. VII.3)</h4>
          <p className="text-dark-300 text-sm">
            A number <em>A</em> is a <em>part</em> of <em>B</em> if <em>A</em> measures <em>B</em>.
          </p>
          <p className="text-dark-400 text-xs mt-2">
            Example: 3 is a part of 12 (specifically, "the third part")
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/30">
          <h4 className="text-emerald-400 font-semibold mb-2">Parts (Def. VII.4)</h4>
          <p className="text-dark-300 text-sm">
            A number <em>A</em> is <em>parts</em> of <em>B</em> if <em>A</em> does not measure{' '}
            <em>B</em> but some factor of <em>A</em> does.
          </p>
          <p className="text-dark-400 text-xs mt-2">
            Example: 4 is "two thirds" of 6 (parts, not a part)
          </p>
        </div>
      </div>

      <h3 className="mt-6">The Naming Convention</h3>

      <p>
        The phrase "called by the same name" refers to the Greek naming of fractions. If <em>B</em>{' '}
        = 3, the corresponding part is "third." If <em>B</em> = 5, the part is "fifth," and so on.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2 text-amber-400">Measuring Number (B)</th>
              <th className="text-left py-2 text-amber-400">Name of Part</th>
              <th className="text-left py-2 text-amber-400">Modern Notation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2">2</td>
              <td className="py-2">Half</td>
              <td className="py-2">1/2</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">3</td>
              <td className="py-2">Third</td>
              <td className="py-2">1/3</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">4</td>
              <td className="py-2">Fourth (Quarter)</td>
              <td className="py-2">1/4</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2">5</td>
              <td className="py-2">Fifth</td>
              <td className="py-2">1/5</td>
            </tr>
            <tr>
              <td className="py-2">n</td>
              <td className="py-2">n-th</td>
              <td className="py-2">1/n</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6">The Proof Explained</h3>

      <p>
        Euclid's proof proceeds by constructing the part explicitly:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            Let <em>B</em> measure <em>A</em>, say <em>A</em> = <em>B</em> × <em>C</em>
          </li>
          <li>
            Then <em>C</em> counts how many times <em>B</em> fits into <em>A</em>
          </li>
          <li>
            Just as 1 is a "<em>B</em>-th part" of <em>B</em> (since <em>B</em> = 1 × <em>B</em>)
          </li>
          <li>
            Similarly, <em>C</em> is a "<em>B</em>-th part" of <em>A</em> (since <em>A</em> ={' '}
            <em>C</em> × <em>B</em>)
          </li>
        </ol>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 180" className="w-full max-w-md">
          {/* Proportion diagram */}
          <text x="200" y="25" fill="#f59e0b" fontSize="13" textAnchor="middle" fontWeight="bold">
            The Proportion: 1:B = C:A
          </text>

          {/* 1 and B */}
          <rect x="50" y="50" width="30" height="30" fill="#3b82f6" fillOpacity="0.3" rx="4" stroke="#3b82f6" strokeWidth="2" />
          <text x="65" y="70" fill="#3b82f6" fontSize="14" textAnchor="middle">1</text>

          <text x="95" y="70" fill="#6b7280" fontSize="14" textAnchor="middle">:</text>

          <rect x="110" y="50" width="60" height="30" fill="#3b82f6" fillOpacity="0.3" rx="4" stroke="#3b82f6" strokeWidth="2" />
          <text x="140" y="70" fill="#3b82f6" fontSize="14" textAnchor="middle">B</text>

          <text x="200" y="70" fill="#f59e0b" fontSize="18" textAnchor="middle">=</text>

          {/* C and A */}
          <rect x="230" y="50" width="50" height="30" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <text x="255" y="70" fill="#22c55e" fontSize="14" textAnchor="middle">C</text>

          <text x="295" y="70" fill="#6b7280" fontSize="14" textAnchor="middle">:</text>

          <rect x="310" y="50" width="70" height="30" fill="#22c55e" fillOpacity="0.3" rx="4" stroke="#22c55e" strokeWidth="2" />
          <text x="345" y="70" fill="#22c55e" fontSize="14" textAnchor="middle">A</text>

          {/* Explanation */}
          <text x="200" y="110" fill="#94a3b8" fontSize="11" textAnchor="middle">
            1 is the B-th part of B (1/B of B = 1)
          </text>
          <text x="200" y="130" fill="#94a3b8" fontSize="11" textAnchor="middle">
            C is the B-th part of A (1/B of A = C)
          </text>

          {/* Numerical example */}
          <rect x="100" y="145" width="200" height="25" fill="#1e293b" rx="4" stroke="#334155" />
          <text x="200" y="163" fill="#f59e0b" fontSize="11" textAnchor="middle">
            Example: 1:5 = 3:15, so 3 is the "fifth" of 15
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Examples</h3>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">4 measures 20</h4>
          <p className="text-dark-300 text-sm">
            20 = 4 × 5<br />
            20 has a "fourth" = 5<br />
            Check: 1/4 of 20 = 5 ✓
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">7 measures 35</h4>
          <p className="text-dark-300 text-sm">
            35 = 7 × 5<br />
            35 has a "seventh" = 5<br />
            Check: 1/7 of 35 = 5 ✓
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">6 measures 42</h4>
          <p className="text-dark-300 text-sm">
            42 = 6 × 7<br />
            42 has a "sixth" = 7<br />
            Check: 1/6 of 42 = 7 ✓
          </p>
        </div>
      </div>

      <h3 className="mt-6">Connection to Modern Fractions</h3>

      <p>
        This proposition is essentially stating that if <em>b</em> | <em>a</em>, then the fraction{' '}
        <em>a</em>/<em>b</em> is a positive integer. In modern terms:
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-xl text-blue-400 font-mono text-center">
          b | a ⟺ a/b ∈ Z⁺ ⟺ a = b × (a/b)
        </p>
        <p className="text-dark-300 mt-3 text-center text-sm">
          Divisibility is equivalent to the quotient being a positive integer
        </p>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Equal division:</strong> To split <em>A</em> items among <em>B</em> people, we
          need <em>B</em> | <em>A</em>
        </li>
        <li>
          <strong>Unit conversion:</strong> Converting between units requires divisibility for
          exact conversion
        </li>
        <li>
          <strong>Tiling:</strong> A floor of area <em>A</em> can be exactly tiled by tiles of
          area <em>B</em> iff <em>B</em> | <em>A</em>
        </li>
        <li>
          <strong>Clock arithmetic:</strong> Dividing time into equal parts
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition VII.3 (what it means to be a "part")</li>
        <li>Proposition VII.15 (alternation of proportions)</li>
        <li>The fundamental relationship between measurement and multiplication</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Context:</strong> Greek mathematics
          avoided "fractions" in the modern sense. Instead, they spoke of "the third part" rather
          than "one-third." This proposition shows that their approach through measurement and
          parts is equivalent to our approach through division and fractions.
        </p>
      </div>
    </LessonLayout>
  );
}
