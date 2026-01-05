import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section157() {
  return (
    <LessonLayout sectionId={157}>
      <Proposition
        title="Proposition VI.12"
      >
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30 mb-4">
          <p className="text-dark-200 italic">
            To three given straight lines to find a fourth proportional.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Problem</h3>
        <p className="text-dark-300 mt-2">
          Given three line segments A, B, and C, construct a fourth segment D such that:
        </p>
        <p className="text-amber-400 mt-2 font-mono text-center text-lg">
          A : B = C : D
        </p>
        <p className="text-dark-300 mt-2">
          Equivalently, D = (B × C) / A. This is the fundamental "rule of three" construction.
        </p>

        <h3 className="text-lg font-semibold mt-6">Construction Diagram</h3>
        <svg viewBox="0 0 400 280" className="w-full max-w-lg mx-auto mt-4">
          {/* Given segments */}
          <text x="20" y="20" fill="#9ca3af" fontSize="10">Given segments:</text>
          <line x1="20" y1="40" x2="100" y2="40" stroke="#3b82f6" strokeWidth="3" />
          <text x="55" y="55" fill="#3b82f6" fontSize="11" fontWeight="bold">A</text>
          <line x1="120" y1="40" x2="200" y2="40" stroke="#22c55e" strokeWidth="3" />
          <text x="155" y="55" fill="#22c55e" fontSize="11" fontWeight="bold">B</text>
          <line x1="220" y1="40" x2="340" y2="40" stroke="#8b5cf6" strokeWidth="3" />
          <text x="275" y="55" fill="#8b5cf6" fontSize="11" fontWeight="bold">C</text>

          {/* Construction */}
          <text x="20" y="85" fill="#9ca3af" fontSize="10">Construction:</text>

          {/* Two rays from E */}
          <circle cx="40" cy="130" r="3" fill="#f59e0b" />
          <text x="30" y="125" fill="#f59e0b" fontSize="12" fontWeight="bold">E</text>

          {/* First ray (horizontal) */}
          <line x1="40" y1="130" x2="350" y2="130" stroke="#f59e0b" strokeWidth="2" />

          {/* Second ray (angled down) */}
          <line x1="40" y1="130" x2="300" y2="260" stroke="#f59e0b" strokeWidth="2" />

          {/* Mark A on first ray */}
          <line x1="120" y1="125" x2="120" y2="135" stroke="#3b82f6" strokeWidth="2" />
          <text x="75" y="150" fill="#3b82f6" fontSize="10">A</text>
          <text x="120" y="120" fill="#f59e0b" fontSize="11" fontWeight="bold">F</text>

          {/* Mark B on first ray from F */}
          <line x1="200" y1="125" x2="200" y2="135" stroke="#22c55e" strokeWidth="2" />
          <text x="155" y="150" fill="#22c55e" fontSize="10">B</text>
          <text x="200" y="120" fill="#f59e0b" fontSize="11" fontWeight="bold">G</text>

          {/* Mark C on second ray */}
          <circle cx="160" cy="198" r="3" fill="#8b5cf6" />
          <text x="95" y="175" fill="#8b5cf6" fontSize="10">C</text>
          <text x="165" y="205" fill="#f59e0b" fontSize="11" fontWeight="bold">H</text>

          {/* Join F to H */}
          <line x1="120" y1="130" x2="160" y2="198" stroke="#60a5fa" strokeWidth="1.5" />

          {/* Parallel through G to second ray */}
          <line x1="200" y1="130" x2="253" y2="251" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4,2" />

          {/* Point K where parallel meets second ray */}
          <circle cx="253" cy="251" r="3" fill="#f59e0b" />
          <text x="258" y="258" fill="#f59e0b" fontSize="11" fontWeight="bold">K</text>

          {/* Result D = HK */}
          <text x="200" y="235" fill="#ec4899" fontSize="10">D</text>

          {/* Parallel marks */}
          <path d="M 137,160 L 141,164" stroke="#60a5fa" strokeWidth="1" />
          <path d="M 137,164 L 141,168" stroke="#60a5fa" strokeWidth="1" />
          <path d="M 223,186 L 227,190" stroke="#60a5fa" strokeWidth="1" />
          <path d="M 223,190 L 227,194" stroke="#60a5fa" strokeWidth="1" />

          {/* Result line */}
          <line x1="40" y1="270" x2="173" y2="270" stroke="#ec4899" strokeWidth="3" />
          <text x="100" y="285" fill="#ec4899" fontSize="11" fontWeight="bold">D (= HK)</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Construction Steps</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given segments A, B, and C, to find D such that A : B = C : D:
          </p>
          <ol className="list-decimal list-inside mt-3 text-dark-300 space-y-2">
            <li>Draw two rays from point E making any angle</li>
            <li>On the first ray, mark EF = A and FG = B (so EG = A + B)</li>
            <li>On the second ray, mark EH = C</li>
            <li>Join F to H</li>
            <li>Through G, draw a line parallel to FH, meeting the second ray extended at K</li>
            <li>Then HK = D is the required fourth proportional</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why It Works</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            By VI.2, since GK is parallel to FH:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            EF : FG = EH : HK
          </p>
          <p className="text-dark-300 mt-3">
            Substituting our constructed lengths:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            A : B = C : D
          </p>
          <p className="text-dark-300 mt-3">
            This is exactly the required proportion.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 2, B = 3, and C = 5. We want D such that 2 : 3 = 5 : D.
          </p>
          <p className="text-dark-300 mt-2">
            Cross-multiplying: 2D = 15, so D = 7.5.
          </p>
          <p className="text-dark-300 mt-2">
            Check: 2 : 3 = 5 : 7.5 ✓ (both equal 2/3)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The "Rule of Three"</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition is the geometric version of the <strong>"rule of three"</strong>
            (or "golden rule") used in arithmetic:
          </p>
          <p className="text-amber-400 mt-3 font-mono text-center">
            D = (B × C) / A
          </p>
          <p className="text-dark-300 mt-3">
            The Greeks performed this calculation purely geometrically, without numbers,
            making it valid for all magnitudes including incommensurable ones.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Comparison with VI.11</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800/50 rounded-xl p-4 border border-blue-500/20">
            <h4 className="text-blue-400 font-semibold">VI.11: Third Proportional</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Given A, B, find C such that A : B = B : C
            </p>
            <p className="text-dark-400 mt-1 text-sm italic">
              (continued proportion)
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
            <h4 className="text-amber-400 font-semibold">VI.12: Fourth Proportional</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Given A, B, C, find D such that A : B = C : D
            </p>
            <p className="text-dark-400 mt-1 text-sm italic">
              (independent proportion)
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">Applications</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            Finding fourth proportionals is fundamental to:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li><strong>Scale drawings:</strong> If 1 inch represents 5 feet, how long should 12 feet be?</li>
            <li><strong>Similar figures:</strong> If two triangles are similar with scale factor A:B, find corresponding sides</li>
            <li><strong>Unit conversion:</strong> Converting between different measurement systems</li>
            <li><strong>Proportion problems:</strong> "If 3 workers finish in 5 days, how long for 4 workers?"</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Geometric Multiplication and Division</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This construction effectively performs multiplication and division geometrically:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>If A = 1 (unit length), then D = B × C (multiplication)</li>
            <li>If B = 1 (unit length), then D = C/A (division)</li>
          </ul>
          <p className="text-dark-300 mt-3">
            This shows that all four arithmetic operations can be performed with compass
            and straightedge, making geometry a complete "calculating engine."
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Historical Note</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition, along with VI.11 and VI.13, forms the core of Greek
            "geometric algebra"—a way of performing algebraic operations using geometric
            constructions. This approach was standard in mathematics for nearly 2000 years
            and influenced the development of analytic geometry by Descartes in the 17th century.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
