import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { GoldenRatio } from '@/components/visualizations';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <GoldenRatio />

      <Proposition
        title="Proposition II.11"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line; thus it is required to cut <em>AB</em> so
              that the rectangle contained by the whole and one of the segments is equal to the
              square on the remaining segment.
            </p>
            <p className="mt-2">
              For let the square <em>ABDC</em> be described on <em>AB</em>; [I. 46] let <em>AC</em>{' '}
              be bisected at the point <em>E</em>, and let <em>BE</em> be joined; let <em>CA</em> be
              drawn through to <em>F</em>, and let <em>EF</em> be made equal to <em>BE</em>; [I. 3]
              let the square <em>FH</em> be described on <em>AF</em>, and let <em>GH</em> be drawn
              through to <em>K</em>.
            </p>
            <p className="mt-2">
              I say that <em>AB</em> has been cut at <em>H</em> so as to make the rectangle
              contained by <em>AB</em>, <em>BH</em> equal to the square on <em>AH</em>.
            </p>
            <p className="mt-2">
              For, since the straight line <em>AC</em> has been bisected at <em>E</em>, and{' '}
              <em>FA</em> is added to it, the rectangle contained by <em>CF</em>, <em>FA</em>{' '}
              together with the square on <em>AE</em> is equal to the square on <em>EF</em>. [II. 6]
            </p>
            <p className="mt-2">
              But <em>EF</em> is equal to <em>EB</em>; therefore the rectangle <em>CF</em>,{' '}
              <em>FA</em> together with the square on <em>AE</em> is equal to the square on{' '}
              <em>EB</em>.
            </p>
            <p className="mt-2">
              But the squares on <em>BA</em>, <em>AE</em> are equal to the square on <em>EB</em>,
              for the angle at <em>A</em> is right; [I. 47] therefore the rectangle <em>CF</em>,{' '}
              <em>FA</em> together with the square on <em>AE</em> is equal to the squares on{' '}
              <em>BA</em>, <em>AE</em>.
            </p>
            <p className="mt-2">
              Let the square on <em>AE</em> be subtracted from each; therefore the rectangle{' '}
              <em>CF</em>, <em>FA</em> which remains is equal to the square on <em>AB</em>.
            </p>
            <p className="mt-2">
              Now the rectangle <em>CF</em>, <em>FA</em> is <em>FK</em>, for <em>AF</em> is equal
              to <em>FG</em>; and the square on <em>AB</em> is <em>AD</em>; therefore <em>FK</em>{' '}
              is equal to <em>AD</em>.
            </p>
            <p className="mt-2">
              Let <em>AK</em> be subtracted from each; therefore <em>FH</em> which remains is equal
              to <em>HD</em>.
            </p>
            <p className="mt-2">
              And <em>HD</em> is the rectangle <em>AB</em>, <em>BH</em>, for <em>AB</em> is equal to{' '}
              <em>BD</em>; and <em>FH</em> is the square on <em>AH</em>;
            </p>
            <p className="mt-2">
              therefore the rectangle contained by <em>AB</em>, <em>BH</em> is equal to the square
              on <em>HA</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the given straight line <em>AB</em> has been cut at <em>H</em> so as to
              make the rectangle contained by <em>AB</em>, <em>BH</em> equal to the square on{' '}
              <em>AH</em>.
            </p>
          </>
        }
      >
        <p>
          To cut a given straight line so that the rectangle contained by the whole and one of the
          segments is equal to the square on the remaining segment.
        </p>
      </Proposition>

      <h2>The Golden Ratio</h2>

      <p>
        This proposition constructs what we now call the <strong>golden ratio</strong> or{' '}
        <strong>divine proportion</strong>. If <em>AB</em> has length 1 and is cut at <em>H</em>{' '}
        with <em>AH = φ - 1</em> and <em>HB = 2 - φ</em> (where <em>φ ≈ 1.618</em>), then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          AB · BH = AH²
        </p>
      </div>

      <p className="mt-4">
        Euclid calls this dividing a line in <strong>"extreme and mean ratio"</strong>: the whole
        is to the larger part as the larger part is to the smaller.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          AB : AH = AH : HB
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 80" className="w-full max-w-md">
          {/* Line */}
          <line x1="20" y1="40" x2="280" y2="40" stroke="#f59e0b" strokeWidth="2" />
          {/* Points */}
          <circle cx="20" cy="40" r="4" fill="#f59e0b" />
          <circle cx="180" cy="40" r="4" fill="#f59e0b" />
          <circle cx="280" cy="40" r="4" fill="#f59e0b" />
          {/* Labels */}
          <text x="20" y="65" fill="#f59e0b" fontSize="12" textAnchor="middle">A</text>
          <text x="180" y="65" fill="#f59e0b" fontSize="12" textAnchor="middle">H</text>
          <text x="280" y="65" fill="#f59e0b" fontSize="12" textAnchor="middle">B</text>
          {/* Segment labels */}
          <text x="100" y="25" fill="#d1d5db" fontSize="11" textAnchor="middle">φ - 1</text>
          <text x="230" y="25" fill="#d1d5db" fontSize="11" textAnchor="middle">2 - φ</text>
          {/* Bracket for whole */}
          <path d="M 20 10 L 20 15 L 280 15 L 280 10" fill="none" stroke="#6b7280" strokeWidth="1" />
          <text x="150" y="8" fill="#6b7280" fontSize="10" textAnchor="middle">1</text>
        </svg>
      </div>

      <h3 className="mt-6">The Golden Ratio Value</h3>

      <p>
        If we set <em>AB = 1</em> and <em>AH = x</em>, then <em>HB = 1 - x</em>, and the condition
        becomes:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono">
          1 · (1 - x) = x²
        </p>
        <p className="text-amber-400 font-mono mt-2">
          x² + x - 1 = 0
        </p>
        <p className="text-amber-400 font-mono mt-2">
          x = (√5 - 1) / 2 ≈ 0.618
        </p>
      </div>

      <p className="mt-4">
        The golden ratio <em>φ = (1 + √5) / 2 ≈ 1.618</em> satisfies <em>φ = 1 + 1/φ</em>.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting off equal lengths)</li>
        <li>Proposition I.46 (constructing squares)</li>
        <li>Proposition I.47 (Pythagorean theorem)</li>
        <li>Proposition II.6 (extended line rectangle)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Significance:</strong> The golden ratio
          appears throughout the Elements, particularly in Book XIII where it's used to construct
          the regular pentagon and the five Platonic solids. It has fascinated mathematicians,
          artists, and architects for millennia.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Properties of φ:</strong> The golden ratio satisfies{' '}
          <em>φ² = φ + 1</em>, <em>1/φ = φ - 1</em>, and its continued fraction representation is
          [1; 1, 1, 1, ...], the simplest possible.
        </p>
      </div>
    </LessonLayout>
  );
}
