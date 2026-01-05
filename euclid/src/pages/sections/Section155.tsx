import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section155() {
  return (
    <LessonLayout sectionId={155}>
      <Proposition
        title="Proposition VI.10"
      >
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30 mb-4">
          <p className="text-dark-200 italic">
            To cut a given uncut straight line similarly to a given cut straight line.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Problem</h3>
        <p className="text-dark-300 mt-2">
          Given a line AB that has been divided at points C and D (creating segments AC, CD, DB),
          and given another line EF, divide EF in the same proportions. That is, find points
          G and H on EF such that:
        </p>
        <p className="text-amber-400 mt-2 font-mono text-center">
          AC : CD : DB = EG : GH : HF
        </p>

        <h3 className="text-lg font-semibold mt-6">Construction Diagram</h3>
        <svg viewBox="0 0 400 300" className="w-full max-w-lg mx-auto mt-4">
          {/* Given divided line AB */}
          <text x="50" y="25" fill="#9ca3af" fontSize="10">Given divided line:</text>
          <line x1="50" y1="50" x2="350" y2="50" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="120" cy="50" r="3" fill="#f59e0b" />
          <circle cx="220" cy="50" r="3" fill="#f59e0b" />
          <text x="40" y="55" fill="#f59e0b" fontSize="12" fontWeight="bold">A</text>
          <text x="117" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold">C</text>
          <text x="217" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold">D</text>
          <text x="355" y="55" fill="#f59e0b" fontSize="12" fontWeight="bold">B</text>

          {/* Line to divide EF */}
          <text x="50" y="105" fill="#9ca3af" fontSize="10">Line to divide:</text>
          <line x1="50" y1="130" x2="280" y2="130" stroke="#60a5fa" strokeWidth="2.5" />
          <text x="40" y="135" fill="#60a5fa" fontSize="12" fontWeight="bold">E</text>
          <text x="285" y="135" fill="#60a5fa" fontSize="12" fontWeight="bold">F</text>

          {/* Construction lines */}
          <text x="50" y="165" fill="#9ca3af" fontSize="10">Construction:</text>

          {/* Ray from E at angle */}
          <line x1="50" y1="200" x2="350" y2="200" stroke="#60a5fa" strokeWidth="2" />
          <line x1="50" y1="200" x2="280" y2="280" stroke="#22c55e" strokeWidth="1.5" />
          <text x="40" y="205" fill="#60a5fa" fontSize="11">E</text>
          <text x="285" y="205" fill="#60a5fa" fontSize="11">F</text>

          {/* Transfer segments from AB onto ray */}
          <circle cx="50" cy="200" r="2" fill="#22c55e" />
          <circle cx="104" cy="228" r="2" fill="#22c55e" />
          <circle cx="181" cy="268" r="2" fill="#22c55e" />
          <circle cx="280" cy="280" r="2" fill="#22c55e" />
          <text x="101" y="243" fill="#22c55e" fontSize="9">C'</text>
          <text x="178" y="283" fill="#22c55e" fontSize="9">D'</text>
          <text x="285" y="283" fill="#22c55e" fontSize="9">B'</text>

          {/* Line B'F */}
          <line x1="280" y1="280" x2="280" y2="200" stroke="#8b5cf6" strokeWidth="1.5" />

          {/* Parallels through C' and D' */}
          <line x1="104" y1="228" x2="104" y2="200" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,2" />
          <line x1="181" y1="268" x2="181" y2="200" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,2" />

          {/* Points G and H on EF */}
          <circle cx="104" cy="200" r="3" fill="#60a5fa" />
          <circle cx="181" cy="200" r="3" fill="#60a5fa" />
          <text x="101" y="195" fill="#60a5fa" fontSize="11" fontWeight="bold">G</text>
          <text x="178" y="195" fill="#60a5fa" fontSize="11" fontWeight="bold">H</text>

          {/* Parallel marks */}
          <path d="M 108,235 L 112,239" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 108,239 L 112,243" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 185,235 L 189,239" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 185,239 L 189,243" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 276,235 L 280,239" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 276,239 L 280,243" stroke="#8b5cf6" strokeWidth="1" />
        </svg>

        <h3 className="text-lg font-semibold mt-6">Construction Steps</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given line AB divided at C and D, and undivided line EF:
          </p>
          <ol className="list-decimal list-inside mt-3 text-dark-300 space-y-2">
            <li>Join E to F (our line to divide)</li>
            <li>Draw any ray from E at an angle to EF</li>
            <li>On this ray, mark off segments equal to AC, CD, DB in order (giving points C', D', B')</li>
            <li>Join B' to F</li>
            <li>Through C' draw a line parallel to B'F, meeting EF at G</li>
            <li>Through D' draw a line parallel to B'F, meeting EF at H</li>
            <li>Then EG : GH : HF = AC : CD : DB</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why It Works</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            By Proposition VI.2, parallel lines cut transversals proportionally.
          </p>
          <p className="text-dark-300 mt-3">
            In triangle EB'F, the parallel lines through C' and D' create:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            EC' : C'D' : D'B' = EG : GH : HF
          </p>
          <p className="text-dark-300 mt-3">
            Since we constructed EC' = AC, C'D' = CD, and D'B' = DB, we have:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            AC : CD : DB = EG : GH : HF
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Relationship to VI.9</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>VI.9</strong> cuts off a simple fraction (1/n) from a line.
          </p>
          <p className="text-dark-300 mt-2">
            <strong>VI.10</strong> generalizes this to copy <em>any</em> division pattern from one
            line to another, no matter how complex.
          </p>
          <p className="text-dark-300 mt-3">
            Together, these propositions show that proportional division is fully achievable
            with compass and straightedge.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Practical Applications</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Architecture</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Scaling a design proportionally while maintaining all internal divisions
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Cartography</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Transferring divisions from one scale to another on maps
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Engineering</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Creating scaled drawings with consistent proportions
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
            <h4 className="text-amber-400 font-semibold">Art</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Maintaining proportions when enlarging or reducing compositions
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Power of Similar Division</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition shows that any ratio that can be expressed geometrically can be
            transferred to any line segment. The construction works regardless of whether
            the ratios are commensurable (expressible as ratios of whole numbers) or not.
          </p>
          <p className="text-dark-300 mt-3">
            This universality was crucial for the Greeks, as they had discovered incommensurable
            magnitudes (like the diagonal of a square) and needed a theory that worked for all cases.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
