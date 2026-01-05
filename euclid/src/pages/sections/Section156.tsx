import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section156() {
  return (
    <LessonLayout sectionId={156}>
      <Proposition
        title="Proposition VI.11"
      >
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30 mb-4">
          <p className="text-dark-200 italic">
            To two given straight lines to find a third proportional.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Problem</h3>
        <p className="text-dark-300 mt-2">
          Given two line segments A and B, construct a third segment C such that:
        </p>
        <p className="text-amber-400 mt-2 font-mono text-center text-lg">
          A : B = B : C
        </p>
        <p className="text-dark-300 mt-2">
          In other words, B is the geometric mean of A and C, or equivalently, C = B²/A.
        </p>

        <h3 className="text-lg font-semibold mt-6">Construction Diagram</h3>
        <svg viewBox="0 0 400 280" className="w-full max-w-lg mx-auto mt-4">
          {/* Given segments */}
          <text x="30" y="25" fill="#9ca3af" fontSize="10">Given segments:</text>
          <line x1="30" y1="45" x2="130" y2="45" stroke="#3b82f6" strokeWidth="3" />
          <text x="75" y="60" fill="#3b82f6" fontSize="12" fontWeight="bold">A</text>
          <line x1="150" y1="45" x2="220" y2="45" stroke="#22c55e" strokeWidth="3" />
          <text x="180" y="60" fill="#22c55e" fontSize="12" fontWeight="bold">B</text>

          {/* Construction */}
          <text x="30" y="90" fill="#9ca3af" fontSize="10">Construction:</text>

          {/* First ray from D */}
          <line x1="50" y1="130" x2="350" y2="130" stroke="#f59e0b" strokeWidth="2" />
          <text x="40" y="135" fill="#f59e0b" fontSize="12" fontWeight="bold">D</text>

          {/* Second ray at angle */}
          <line x1="50" y1="130" x2="250" y2="250" stroke="#f59e0b" strokeWidth="2" />

          {/* Mark A on first ray */}
          <line x1="50" y1="125" x2="50" y2="135" stroke="#3b82f6" strokeWidth="2" />
          <line x1="150" y1="125" x2="150" y2="135" stroke="#3b82f6" strokeWidth="2" />
          <text x="95" y="150" fill="#3b82f6" fontSize="11">A</text>
          <text x="150" y="120" fill="#f59e0b" fontSize="12" fontWeight="bold">E</text>

          {/* Mark B on first ray starting from E */}
          <line x1="220" y1="125" x2="220" y2="135" stroke="#22c55e" strokeWidth="2" />
          <text x="180" y="150" fill="#22c55e" fontSize="11">B</text>
          <text x="220" y="120" fill="#f59e0b" fontSize="12" fontWeight="bold">F</text>

          {/* Mark B on second ray from D */}
          <circle cx="50" cy="130" r="2" fill="#f59e0b" />
          <circle cx="110" cy="178" r="2" fill="#22c55e" />
          <text x="75" y="165" fill="#22c55e" fontSize="11">B</text>
          <text x="115" y="185" fill="#f59e0b" fontSize="12" fontWeight="bold">G</text>

          {/* Join E to G */}
          <line x1="150" y1="130" x2="110" y2="178" stroke="#8b5cf6" strokeWidth="1.5" />

          {/* Parallel through F */}
          <line x1="220" y1="130" x2="180" y2="178" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,2" />

          {/* Point H where parallel meets second ray */}
          <circle cx="180" cy="234" r="3" fill="#f59e0b" />
          <text x="185" y="242" fill="#f59e0b" fontSize="12" fontWeight="bold">H</text>

          {/* Extended parallel line to H */}
          <line x1="220" y1="130" x2="180" y2="234" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,2" />

          {/* Result C = DH */}
          <line x1="50" y1="258" x2="180" y2="258" stroke="#ec4899" strokeWidth="3" />
          <text x="110" y="275" fill="#ec4899" fontSize="12" fontWeight="bold">C (= GH)</text>

          {/* Parallel marks */}
          <path d="M 127,150 L 131,154" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 127,154 L 131,158" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 197,150 L 201,154" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M 197,154 L 201,158" stroke="#8b5cf6" strokeWidth="1" />
        </svg>

        <h3 className="text-lg font-semibold mt-6">Construction Steps</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given segments A and B, to find C such that A : B = B : C:
          </p>
          <ol className="list-decimal list-inside mt-3 text-dark-300 space-y-2">
            <li>Draw two rays from point D making any angle</li>
            <li>On the first ray, mark DE = A and EF = B</li>
            <li>On the second ray, mark DG = B</li>
            <li>Join E to G</li>
            <li>Through F, draw a line parallel to EG, meeting the second ray at H</li>
            <li>Then GH = C is the required third proportional</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why It Works</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            By VI.2, since FH is parallel to EG in triangle DGF extended:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            DE : EF = DG : GH
          </p>
          <p className="text-dark-300 mt-3">
            Substituting our constructed lengths:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            A : B = B : C
          </p>
          <p className="text-dark-300 mt-3">
            Therefore C = B²/A, which is exactly what we wanted.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 4 and B = 6. We want C such that 4 : 6 = 6 : C.
          </p>
          <p className="text-dark-300 mt-2">
            Cross-multiplying: 4C = 36, so C = 9.
          </p>
          <p className="text-dark-300 mt-2">
            Check: 4 : 6 = 2 : 3 and 6 : 9 = 2 : 3 ✓
          </p>
          <p className="text-amber-400 mt-3">
            The sequence 4, 6, 9 is in <strong>continued proportion</strong>.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Relationship to Powers</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If A = 1, then A : B = B : C gives us C = B².
          </p>
          <p className="text-dark-300 mt-2">
            This provides a geometric construction for squaring any magnitude!
          </p>
          <p className="text-dark-300 mt-3">
            More generally, if we continue the proportion:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A : B = B : C gives C = B²/A</li>
            <li>B : C = C : D gives D = C²/B = B³/A²</li>
            <li>And so on for higher powers</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Connection to Later Propositions</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
            <h4 className="text-amber-400 font-semibold">VI.12</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Finds a <strong>fourth</strong> proportional: given A, B, C, find D such that A:B = C:D
            </p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
            <h4 className="text-amber-400 font-semibold">VI.13</h4>
            <p className="text-dark-300 mt-2 text-sm">
              Finds a <strong>mean</strong> proportional: given A, B, find C such that A:C = C:B
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">Historical Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This construction was crucial for Greek mathematics because:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>It allows computation of squares geometrically</li>
            <li>It's foundational for the theory of similar figures</li>
            <li>It connects arithmetic progressions to geometric progressions</li>
            <li>It was used in solving problems involving areas and volumes</li>
          </ul>
          <p className="text-dark-300 mt-3">
            The Greeks thought of ratios geometrically, and this construction showed that
            the theory of proportions was complete: any proportion could be constructed.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
