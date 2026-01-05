import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section154() {
  return (
    <LessonLayout sectionId={154}>
      <Proposition
        title="Proposition VI.9"
      >
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30 mb-4">
          <p className="text-dark-200 italic">
            From a given straight line to cut off a prescribed part.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Problem</h3>
        <p className="text-dark-300 mt-2">
          Given a straight line AB and a ratio 1/n, construct a point C on AB such that
          AC is exactly 1/n of AB. In other words, divide a line segment into n equal parts
          and mark off one of them.
        </p>

        <h3 className="text-lg font-semibold mt-6">Construction Diagram</h3>
        <svg viewBox="0 0 400 260" className="w-full max-w-lg mx-auto mt-4">
          {/* Given line AB */}
          <line x1="50" y1="200" x2="350" y2="200" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="40" y="210" fill="#f59e0b" fontSize="14" fontWeight="bold">A</text>
          <text x="355" y="210" fill="#f59e0b" fontSize="14" fontWeight="bold">B</text>

          {/* Auxiliary ray from A */}
          <line x1="50" y1="200" x2="300" y2="50" stroke="#60a5fa" strokeWidth="2" />

          {/* Equal segments on auxiliary ray (for n=3 example) */}
          <circle cx="50" cy="200" r="3" fill="#60a5fa" />
          <circle cx="133" cy="150" r="3" fill="#60a5fa" />
          <circle cx="216" cy="100" r="3" fill="#60a5fa" />
          <circle cx="300" cy="50" r="3" fill="#60a5fa" />

          {/* Labels for points on auxiliary ray */}
          <text x="130" y="165" fill="#60a5fa" fontSize="11">D</text>
          <text x="213" y="115" fill="#60a5fa" fontSize="11">E</text>
          <text x="305" y="50" fill="#60a5fa" fontSize="11">F</text>

          {/* Equal segment markers */}
          <text x="80" y="170" fill="#60a5fa" fontSize="9">1</text>
          <text x="163" y="120" fill="#60a5fa" fontSize="9">1</text>
          <text x="250" y="70" fill="#60a5fa" fontSize="9">1</text>

          {/* Line FB */}
          <line x1="300" y1="50" x2="350" y2="200" stroke="#22c55e" strokeWidth="1.5" />

          {/* Parallel through D */}
          <line x1="133" y1="150" x2="150" y2="200" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,3" />

          {/* Point C on AB */}
          <circle cx="150" cy="200" r="4" fill="#f59e0b" />
          <text x="150" y="220" fill="#f59e0b" fontSize="14" fontWeight="bold">C</text>

          {/* Parallel marks */}
          <path d="M 165,170 L 160,175 M 165,175 L 160,180" stroke="#22c55e" strokeWidth="1" />
          <path d="M 325,115 L 320,120 M 325,120 L 320,125" stroke="#22c55e" strokeWidth="1" />

          {/* Result annotation */}
          <text x="100" y="240" fill="#f59e0b" fontSize="11">AC = (1/3)AB</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Construction Steps</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            To cut off 1/n of line AB (example shown: n = 3):
          </p>
          <ol className="list-decimal list-inside mt-3 text-dark-300 space-y-2">
            <li>Draw any ray from A at an angle to AB</li>
            <li>Mark off n equal segments on this ray: AD = DE = EF (3 equal parts)</li>
            <li>Connect F to B</li>
            <li>Through D, draw a line parallel to FB, meeting AB at C</li>
            <li>Then AC is 1/n of AB</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why It Works</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            By Proposition VI.2 (a line parallel to one side of a triangle divides the
            other sides proportionally):
          </p>
          <p className="text-dark-300 mt-3">
            Since DC is parallel to FB in triangle ABF:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            AD : AF = AC : AB
          </p>
          <p className="text-dark-300 mt-3">
            Since AD is 1/3 of AF (we marked 1 out of 3 equal segments), we have:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            AC = (1/3) AB
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Example: Cutting Off 1/5</h3>
        <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto mt-4">
          {/* Given line AB */}
          <line x1="30" y1="150" x2="370" y2="150" stroke="#f59e0b" strokeWidth="2" />
          <text x="20" y="160" fill="#f59e0b" fontSize="12" fontWeight="bold">A</text>
          <text x="375" y="160" fill="#f59e0b" fontSize="12" fontWeight="bold">B</text>

          {/* Auxiliary ray */}
          <line x1="30" y1="150" x2="280" y2="30" stroke="#60a5fa" strokeWidth="1.5" />

          {/* 5 equal marks */}
          <circle cx="30" cy="150" r="2" fill="#60a5fa" />
          <circle cx="80" cy="126" r="2" fill="#60a5fa" />
          <circle cx="130" cy="102" r="2" fill="#60a5fa" />
          <circle cx="180" cy="78" r="2" fill="#60a5fa" />
          <circle cx="230" cy="54" r="2" fill="#60a5fa" />
          <circle cx="280" cy="30" r="2" fill="#60a5fa" />

          {/* Line from last point to B */}
          <line x1="280" y1="30" x2="370" y2="150" stroke="#22c55e" strokeWidth="1.5" />

          {/* Parallel through first mark */}
          <line x1="80" y1="126" x2="98" y2="150" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3,2" />

          {/* Point C */}
          <circle cx="98" cy="150" r="3" fill="#f59e0b" />
          <text x="98" y="170" fill="#f59e0b" fontSize="12" fontWeight="bold">C</text>

          {/* Result */}
          <text x="200" y="185" fill="#9ca3af" fontSize="10">AC = (1/5)AB</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Generalization</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This construction can be extended to cut off any ratio m/n:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Mark n equal segments on the auxiliary ray</li>
            <li>Draw the parallel through the m-th point</li>
            <li>This gives a segment equal to (m/n) of the original</li>
          </ul>
          <p className="text-dark-300 mt-3">
            For example, to cut off 2/5 of a line, mark 5 equal parts and draw the
            parallel through the 2nd point.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This construction demonstrates that with compass and straightedge, we can:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Divide a line into any number of equal parts</li>
            <li>Cut off any rational fraction of a line</li>
            <li>Transfer proportions from one line to another</li>
          </ul>
          <p className="text-dark-300 mt-3">
            This is foundational for technical drawing, engineering, and any application
            requiring precise geometric division.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Connection to VI.10</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            While VI.9 cuts off a simple fraction, Proposition VI.10 extends this idea
            to copy any arbitrary division from one line to another. Together, these
            propositions give us complete control over dividing line segments in any
            desired proportion.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
