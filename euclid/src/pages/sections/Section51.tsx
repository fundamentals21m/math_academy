import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <Proposition
        title="Proposition II.2"
        proof={
          <>
            <p>
              Let <em>AB</em> be a straight line, and let it be cut at random at <em>C</em>.
            </p>
            <p className="mt-2">
              I say that the rectangle contained by <em>AB</em>, <em>BC</em> together with the
              rectangle contained by <em>BA</em>, <em>AC</em> is equal to the square on <em>AB</em>.
            </p>
            <p className="mt-2">
              For let the square <em>ADEB</em> be described on <em>AB</em>, [I. 46] and let{' '}
              <em>CF</em> be drawn through <em>C</em> parallel to either <em>AD</em> or <em>BE</em>.
              [I. 31]
            </p>
            <p className="mt-2">
              Then <em>AE</em> is equal to <em>AF</em>, <em>CE</em>.
            </p>
            <p className="mt-2">
              Now <em>AE</em> is the square on <em>AB</em>;
            </p>
            <p className="mt-2">
              <em>AF</em> is the rectangle contained by <em>BA</em>, <em>AC</em>, for it is
              contained by <em>DA</em>, <em>AC</em>, and <em>AD</em> is equal to <em>AB</em>;
            </p>
            <p className="mt-2">
              and <em>CE</em> is the rectangle <em>AB</em>, <em>BC</em>, for <em>BE</em> is equal to{' '}
              <em>AB</em>.
            </p>
            <p className="mt-2">
              Therefore the rectangle <em>BA</em>, <em>AC</em> together with the rectangle{' '}
              <em>AB</em>, <em>BC</em> is equal to the square on <em>AB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be cut at random, the rectangle contained by the whole and both of the
          segments is equal to the square on the whole.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition states that if a line of length <em>a</em> is divided at point <em>C</em>{' '}
        into segments <em>b</em> and <em>c</em> (where <em>a = b + c</em>), then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          a · b + a · c = a²
        </p>
      </div>

      <p className="mt-4">
        This is a special case of II.1 where the uncut line equals the cut line. Since{' '}
        <em>b + c = a</em>, we have <em>a(b + c) = a · a = a²</em>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 220 220" className="w-64 h-64">
          {/* Square */}
          <rect x="20" y="20" width="180" height="180" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Vertical divider */}
          <line x1="110" y1="20" x2="110" y2="200" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          {/* Labels on top */}
          <text x="65" y="15" fill="#f59e0b" fontSize="12" textAnchor="middle">b</text>
          <text x="155" y="15" fill="#f59e0b" fontSize="12" textAnchor="middle">c</text>
          {/* Label on left */}
          <text x="10" y="115" fill="#f59e0b" fontSize="12" textAnchor="end">a</text>
          {/* Area labels */}
          <text x="65" y="115" fill="#d1d5db" fontSize="12" textAnchor="middle">a·b</text>
          <text x="155" y="115" fill="#d1d5db" fontSize="12" textAnchor="middle">a·c</text>
          {/* Vertices */}
          <text x="15" y="25" fill="#6b7280" fontSize="10">A</text>
          <text x="205" y="25" fill="#6b7280" fontSize="10">D</text>
          <text x="205" y="205" fill="#6b7280" fontSize="10">E</text>
          <text x="15" y="205" fill="#6b7280" fontSize="10">B</text>
          <text x="105" y="205" fill="#6b7280" fontSize="10">C</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.46 (constructing squares)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Interpretation:</strong> This proposition shows that a
          square can be divided into two rectangles by a line parallel to one side. The sum of the
          rectangle areas equals the square's area.
        </p>
      </div>
    </LessonLayout>
  );
}
