import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <Proposition
        title="Proposition II.3"
        proof={
          <>
            <p>
              Let <em>AB</em> be a straight line cut at random at <em>C</em>.
            </p>
            <p className="mt-2">
              I say that the rectangle contained by <em>AB</em>, <em>BC</em> is equal to the
              rectangle contained by <em>AC</em>, <em>CB</em> together with the square on{' '}
              <em>BC</em>.
            </p>
            <p className="mt-2">
              For let the square <em>CDEB</em> be described on <em>CB</em>; [I. 46] let <em>ED</em>{' '}
              be drawn through to <em>F</em>, and through <em>A</em> let <em>AF</em> be drawn
              parallel to either <em>CD</em> or <em>BE</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then <em>AE</em> is equal to <em>AD</em>, <em>CE</em>.
            </p>
            <p className="mt-2">
              Now <em>AE</em> is the rectangle contained by <em>AB</em>, <em>BC</em>, for it is
              contained by <em>AB</em>, <em>BE</em>, and <em>BE</em> is equal to <em>BC</em>;
            </p>
            <p className="mt-2">
              <em>AD</em> is the rectangle <em>AC</em>, <em>CB</em>, for <em>DC</em> is equal to{' '}
              <em>CB</em>;
            </p>
            <p className="mt-2">
              and <em>DB</em> is the square on <em>CB</em>.
            </p>
            <p className="mt-2">
              Therefore the rectangle contained by <em>AB</em>, <em>BC</em> is equal to the
              rectangle contained by <em>AC</em>, <em>CB</em> together with the square on{' '}
              <em>BC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be cut at random, the rectangle contained by the whole and one of the
          segments is equal to the rectangle contained by the segments together with the square on
          the aforesaid segment.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        If a line <em>AB</em> is divided at <em>C</em> into segments <em>AC = a</em> and{' '}
        <em>CB = b</em>, then the whole line has length <em>a + b</em>. This proposition states:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          (a + b) · b = a · b + b²
        </p>
      </div>

      <p className="mt-4">
        This is another form of the distributive law, showing that a rectangle can be decomposed
        into a smaller rectangle plus a square.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 180" className="w-full max-w-sm">
          {/* Main rectangle */}
          <rect x="20" y="20" width="240" height="120" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Vertical divider */}
          <line x1="140" y1="20" x2="140" y2="140" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          {/* Square highlight */}
          <rect x="140" y="20" width="120" height="120" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1" />
          {/* Labels */}
          <text x="80" y="15" fill="#f59e0b" fontSize="12" textAnchor="middle">a</text>
          <text x="200" y="15" fill="#f59e0b" fontSize="12" textAnchor="middle">b</text>
          <text x="270" y="80" fill="#f59e0b" fontSize="12" textAnchor="start">b</text>
          {/* Area labels */}
          <text x="80" y="80" fill="#d1d5db" fontSize="12" textAnchor="middle">a·b</text>
          <text x="200" y="80" fill="#d1d5db" fontSize="12" textAnchor="middle">b²</text>
          {/* Vertices */}
          <text x="15" y="25" fill="#6b7280" fontSize="10">A</text>
          <text x="135" y="25" fill="#6b7280" fontSize="10">C</text>
          <text x="265" y="25" fill="#6b7280" fontSize="10">B</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.46 (constructing squares)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Pattern:</strong> Propositions II.1, II.2, and II.3 all
          express variations of the distributive law. They form the foundation for the more complex
          identities that follow.
        </p>
      </div>
    </LessonLayout>
  );
}
