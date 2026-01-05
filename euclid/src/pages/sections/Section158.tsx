import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section158() {
  return (
    <LessonLayout sectionId={158}>
      <Proposition
        title="Proposition VI.13"
      >
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30 mb-4">
          <p className="text-dark-200 italic">
            To two given straight lines to find a mean proportional.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Problem</h3>
        <p className="text-dark-300 mt-2">
          Given two line segments A and B, construct a segment C such that:
        </p>
        <p className="text-amber-400 mt-2 font-mono text-center text-lg">
          A : C = C : B
        </p>
        <p className="text-dark-300 mt-2">
          In modern terms, C is the <strong>geometric mean</strong> of A and B:
          C = √(A × B).
        </p>

        <h3 className="text-lg font-semibold mt-6">The Semicircle Construction</h3>
        <svg viewBox="0 0 400 260" className="w-full max-w-lg mx-auto mt-4">
          {/* Given segments */}
          <text x="30" y="20" fill="#9ca3af" fontSize="10">Given segments:</text>
          <line x1="30" y1="40" x2="100" y2="40" stroke="#3b82f6" strokeWidth="3" />
          <text x="60" y="55" fill="#3b82f6" fontSize="11" fontWeight="bold">A</text>
          <line x1="120" y1="40" x2="220" y2="40" stroke="#22c55e" strokeWidth="3" />
          <text x="165" y="55" fill="#22c55e" fontSize="11" fontWeight="bold">B</text>

          {/* Diameter AB */}
          <line x1="50" y1="200" x2="350" y2="200" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="50" cy="200" r="4" fill="#f59e0b" />
          <circle cx="350" cy="200" r="4" fill="#f59e0b" />
          <text x="40" y="220" fill="#f59e0b" fontSize="12" fontWeight="bold">D</text>
          <text x="355" y="220" fill="#f59e0b" fontSize="12" fontWeight="bold">E</text>

          {/* Point F where A and B meet */}
          <circle cx="120" cy="200" r="4" fill="#f59e0b" />
          <text x="115" y="220" fill="#f59e0b" fontSize="12" fontWeight="bold">F</text>

          {/* Segment labels */}
          <text x="80" y="190" fill="#3b82f6" fontSize="11">A</text>
          <text x="225" y="190" fill="#22c55e" fontSize="11">B</text>

          {/* Semicircle */}
          <path
            d="M 50,200 A 150,150 0 0,1 350,200"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Perpendicular from F */}
          <line x1="120" y1="200" x2="120" y2="60" stroke="#60a5fa" strokeWidth="2" />

          {/* Point G on semicircle */}
          <circle cx="120" cy="63" r="4" fill="#60a5fa" />
          <text x="125" y="58" fill="#60a5fa" fontSize="12" fontWeight="bold">G</text>

          {/* Right angle marker at F */}
          <path
            d="M 120,190 L 130,190 L 130,200"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />

          {/* Lines DG and GE (to show right angle at G) */}
          <line x1="50" y1="200" x2="120" y2="63" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4,2" />
          <line x1="120" y1="63" x2="350" y2="200" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4,2" />

          {/* Right angle marker at G */}
          <path
            d="M 110,72 L 115,82 L 125,77"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.5"
          />

          {/* Result: FG = C */}
          <line x1="30" y1="245" x2="115" y2="245" stroke="#ec4899" strokeWidth="3" />
          <text x="65" y="260" fill="#ec4899" fontSize="11" fontWeight="bold">C (= FG)</text>

          {/* Annotation */}
          <text x="280" y="100" fill="#9ca3af" fontSize="10">Angle in semicircle</text>
          <text x="280" y="115" fill="#9ca3af" fontSize="10">is always 90°</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Construction Steps</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given segments A and B, to find C such that A : C = C : B:
          </p>
          <ol className="list-decimal list-inside mt-3 text-dark-300 space-y-2">
            <li>Place A and B end-to-end on a line, giving points D, F, E (with DF = A and FE = B)</li>
            <li>Draw a semicircle with DE as diameter</li>
            <li>Erect a perpendicular to DE at F</li>
            <li>Let this perpendicular meet the semicircle at G</li>
            <li>Then FG = C is the required mean proportional</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why It Works</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            By <strong>Thales' theorem</strong> (III.31), angle DGE is a right angle
            (angle inscribed in a semicircle).
          </p>
          <p className="text-dark-300 mt-3">
            Therefore triangle DGE is a right triangle with the right angle at G.
          </p>
          <p className="text-dark-300 mt-3">
            FG is the altitude from the right angle to the hypotenuse. By Proposition VI.8
            (the altitude theorem):
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            DF : FG = FG : FE
          </p>
          <p className="text-dark-300 mt-3">
            Substituting A = DF, C = FG, B = FE:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            A : C = C : B
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Geometric Mean</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            From A : C = C : B, we get C² = A × B, so:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center text-lg">
            C = √(A × B)
          </p>
          <p className="text-dark-300 mt-3">
            This construction gives us a <strong>geometric method for taking square roots</strong>!
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 4 and B = 9. The mean proportional C satisfies 4 : C = C : 9.
          </p>
          <p className="text-dark-300 mt-2">
            So C² = 4 × 9 = 36, giving C = 6.
          </p>
          <p className="text-dark-300 mt-2">
            Check: 4 : 6 = 2 : 3 and 6 : 9 = 2 : 3 ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Special Case: Finding Square Roots</h3>
        <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto mt-4">
          {/* Base line */}
          <line x1="50" y1="150" x2="350" y2="150" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="50" cy="150" r="3" fill="#f59e0b" />
          <circle cx="350" cy="150" r="3" fill="#f59e0b" />

          {/* Unit segment */}
          <circle cx="100" cy="150" r="3" fill="#3b82f6" />
          <text x="70" y="140" fill="#3b82f6" fontSize="10">1</text>

          {/* Given segment n */}
          <text x="210" y="140" fill="#22c55e" fontSize="10">n</text>

          {/* Semicircle */}
          <path
            d="M 50,150 A 150,150 0 0,1 350,150"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />

          {/* Perpendicular */}
          <line x1="100" y1="150" x2="100" y2="56" stroke="#60a5fa" strokeWidth="2" />
          <circle cx="100" cy="56" r="3" fill="#60a5fa" />

          {/* Result */}
          <text x="105" y="100" fill="#ec4899" fontSize="11">√n</text>

          {/* Labels */}
          <text x="40" y="165" fill="#f59e0b" fontSize="10">D</text>
          <text x="97" y="165" fill="#f59e0b" fontSize="10">F</text>
          <text x="355" y="165" fill="#f59e0b" fontSize="10">E</text>

          {/* Annotation */}
          <text x="200" y="25" fill="#9ca3af" fontSize="11">If DF = 1 and FE = n,</text>
          <text x="200" y="40" fill="#9ca3af" fontSize="11">then FG = √n</text>
        </svg>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-4">
          <p className="text-dark-300">
            To find √n geometrically:
          </p>
          <ol className="list-decimal list-inside mt-2 text-dark-300 space-y-1">
            <li>Mark off a unit length DF = 1</li>
            <li>Mark FE = n</li>
            <li>Construct the semicircle and perpendicular</li>
            <li>FG = √n</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-6">Historical Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition is one of the most important in Greek geometry:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>It provides a geometric method for square roots</li>
            <li>It connects the circle (curved) to proportions (arithmetic)</li>
            <li>It uses Thales' theorem (III.31) and the altitude theorem (VI.8)</li>
            <li>It's essential for doubling the square (the altar problem)</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Duplication of the Cube</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            The Greeks sought to extend this to finding <strong>two</strong> mean proportionals:
            given A and B, find C and D such that A : C = C : D = D : B.
          </p>
          <p className="text-dark-300 mt-2">
            This would give cube roots: if A = 1 and B = 2, then C = ∛2.
          </p>
          <p className="text-amber-400 mt-2">
            However, this is impossible with compass and straightedge alone—it's one of the
            famous problems of antiquity!
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Applications</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Statistics</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Geometric mean is used for averaging rates and ratios
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Finance</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Compound annual growth rate (CAGR) uses geometric mean
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Image Processing</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Screen aspect ratios and image scaling
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Music</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Equal temperament tuning uses geometric means
            </p>
          </div>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
