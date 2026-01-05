import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section159() {
  return (
    <LessonLayout sectionId={159}>
      <Proposition
        title="Proposition VI.14"
      >
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30 mb-4">
          <p className="text-dark-200 italic">
            In equal parallelograms which have one angle equal to one angle the sides about the
            equal angles are reciprocally proportional; and those parallelograms which have one
            angle equal to one angle and in which the sides about the equal angles are reciprocally
            proportional are equal.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Understanding the Statement</h3>
        <p className="text-dark-300 mt-2">
          This is a biconditional (if and only if) statement about parallelograms:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
            <h4 className="text-amber-400 font-semibold">Part 1 (Forward)</h4>
            <p className="text-dark-300 mt-2 text-sm">
              If two parallelograms have equal area and share an angle, then the sides
              forming that angle are <em>reciprocally proportional</em>.
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
            <h4 className="text-amber-400 font-semibold">Part 2 (Converse)</h4>
            <p className="text-dark-300 mt-2 text-sm">
              If two parallelograms share an angle and the sides about that angle are
              reciprocally proportional, then they have equal area.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">Reciprocal Proportion</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            If parallelogram ABCD has sides a and b about an angle, and parallelogram EFGH
            has sides c and d about the equal angle, then:
          </p>
          <p className="text-amber-400 mt-3 font-mono text-center text-lg">
            a : c = d : b
          </p>
          <p className="text-dark-300 mt-3">
            Note: This is NOT a : b = c : d (direct proportion), but rather a : c = d : b
            (reciprocal proportion). The ratio of first sides equals the <em>inverse</em>
            ratio of second sides.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Diagram: Equal Area Parallelograms</h3>
        <svg viewBox="0 0 400 280" className="w-full max-w-lg mx-auto mt-4">
          {/* First parallelogram - wider, shorter */}
          <polygon
            points="30,180 180,180 200,100 50,100"
            fill="#3b82f6"
            fillOpacity="0.2"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <text x="110" y="150" fill="#3b82f6" fontSize="11">Area = k</text>
          <text x="25" y="195" fill="#3b82f6" fontSize="11" fontWeight="bold">A</text>
          <text x="180" y="195" fill="#3b82f6" fontSize="11" fontWeight="bold">B</text>
          <text x="200" y="95" fill="#3b82f6" fontSize="11" fontWeight="bold">C</text>
          <text x="45" y="95" fill="#3b82f6" fontSize="11" fontWeight="bold">D</text>
          <text x="100" y="195" fill="#3b82f6" fontSize="10">a (base)</text>
          <text x="25" y="140" fill="#3b82f6" fontSize="10">b</text>

          {/* Second parallelogram - narrower, taller */}
          <polygon
            points="250,220 330,220 370,60 290,60"
            fill="#22c55e"
            fillOpacity="0.2"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <text x="300" y="150" fill="#22c55e" fontSize="11">Area = k</text>
          <text x="245" y="235" fill="#22c55e" fontSize="11" fontWeight="bold">E</text>
          <text x="330" y="235" fill="#22c55e" fontSize="11" fontWeight="bold">F</text>
          <text x="370" y="55" fill="#22c55e" fontSize="11" fontWeight="bold">G</text>
          <text x="285" y="55" fill="#22c55e" fontSize="11" fontWeight="bold">H</text>
          <text x="280" y="235" fill="#22c55e" fontSize="10">c (base)</text>
          <text x="250" y="140" fill="#22c55e" fontSize="10">d</text>

          {/* Equal angle markers */}
          <path
            d="M 40,180 L 45,170 L 55,172"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <path
            d="M 260,220 L 265,208 L 275,212"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />

          {/* Explanation */}
          <text x="30" y="260" fill="#f59e0b" fontSize="11">Equal angles at A and E</text>
          <text x="30" y="275" fill="#f59e0b" fontSize="11">Reciprocal: a : c = d : b</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Algebraic Interpretation</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            For parallelograms with an equal angle:
          </p>
          <p className="text-dark-300 mt-2">
            Area = base × height = base × (side × sin(angle))
          </p>
          <p className="text-dark-300 mt-3">
            If the areas are equal and the angles are equal:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            a × b × sin(θ) = c × d × sin(θ)
          </p>
          <p className="text-dark-300 mt-3">
            Therefore: a × b = c × d, which rearranges to:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            a/c = d/b (reciprocal proportion)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Consider two parallelograms with equal angles:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Parallelogram 1: sides a = 6 and b = 4</li>
            <li>Parallelogram 2: sides c = 3 and d = 8</li>
          </ul>
          <p className="text-dark-300 mt-3">
            Check reciprocal proportion: a : c = 6 : 3 = 2 : 1
          </p>
          <p className="text-dark-300 mt-2">
            And d : b = 8 : 4 = 2 : 1 ✓
          </p>
          <p className="text-dark-300 mt-3">
            Check areas: 6 × 4 = 24 and 3 × 8 = 24 ✓
          </p>
          <p className="text-amber-400 mt-2">
            Both have equal area (times sin of the common angle).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto mt-4">
          {/* Position parallelograms at common vertex */}
          <polygon
            points="50,150 170,150 190,80 70,80"
            fill="#3b82f6"
            fillOpacity="0.15"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <polygon
            points="50,150 110,150 140,50 80,50"
            fill="#22c55e"
            fillOpacity="0.15"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* Common vertex */}
          <circle cx="50" cy="150" r="3" fill="#f59e0b" />

          {/* Extended line to form rectangle for comparison */}
          <line x1="110" y1="150" x2="110" y2="80" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,2" />
          <line x1="170" y1="150" x2="170" y2="80" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,2" />
          <line x1="80" y1="50" x2="80" y2="80" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,2" />

          {/* Labels */}
          <text x="200" y="50" fill="#9ca3af" fontSize="10">Place parallelograms at</text>
          <text x="200" y="65" fill="#9ca3af" fontSize="10">common vertex with equal angle</text>
          <text x="200" y="100" fill="#9ca3af" fontSize="10">Use auxiliary rectangle</text>
          <text x="200" y="115" fill="#9ca3af" fontSize="10">to compare areas via VI.1</text>
        </svg>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-4">
          <p className="text-dark-300">
            <strong>For the forward direction:</strong>
          </p>
          <ol className="list-decimal list-inside mt-2 text-dark-300 space-y-1">
            <li>Place the parallelograms at a common vertex with the equal angles coinciding</li>
            <li>Extend sides to form auxiliary parallelogram/rectangle</li>
            <li>Use VI.1 (parallelograms with same height have areas as bases)</li>
            <li>The equal area condition forces the reciprocal proportion</li>
          </ol>
          <p className="text-dark-300 mt-4">
            <strong>For the converse:</strong>
          </p>
          <ol className="list-decimal list-inside mt-2 text-dark-300 space-y-1">
            <li>Given reciprocal proportion a : c = d : b</li>
            <li>This means a × b = c × d</li>
            <li>With equal angles, the areas must be equal</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-6">Connection to VI.15 and VI.16</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition extends to:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li><strong>VI.15:</strong> Same result for equal triangles with one angle equal</li>
            <li><strong>VI.16:</strong> If four lines are proportional, the rectangle on the
              extremes equals the rectangle on the means</li>
          </ul>
          <p className="text-dark-300 mt-3">
            Together, these propositions establish the fundamental relationship between
            proportions and areas.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition reveals a deep connection between:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li><strong>Area:</strong> A measurement of 2D space</li>
            <li><strong>Proportion:</strong> A relationship between magnitudes</li>
          </ul>
          <p className="text-dark-300 mt-3">
            Equal areas with a common angle force a specific proportional relationship.
            This is an early example of what we now call an <strong>invariant</strong>:
            a quantity (area) that remains constant constrains other quantities (side ratios).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Application: Similar Rectangles</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            For rectangles (where all angles are equal), this becomes:
          </p>
          <p className="text-dark-300 mt-2">
            Two rectangles have equal area if and only if their sides are reciprocally
            proportional.
          </p>
          <p className="text-dark-300 mt-3">
            <strong>Example:</strong> A 3×8 rectangle and a 4×6 rectangle both have area 24.
            Check: 3:4 = 6:8 ✓
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
