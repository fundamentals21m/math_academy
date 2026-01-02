import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section88() {
  return (
    <LessonLayout sectionId={88}>
      <Proposition
        title="Proposition III.24"
        proof={
          <>
            <p>
              Let <em>AEB</em>, <em>CFD</em> be similar segments of circles on equal straight
              lines <em>AB</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              I say that the segment <em>AEB</em> is equal to the segment <em>CFD</em>.
            </p>
            <p className="mt-2">
              For, if the segment <em>AEB</em> be applied to <em>CFD</em>, and if the point{' '}
              <em>A</em> be placed on <em>C</em> and the straight line <em>AB</em> on <em>CD</em>,
              the point <em>B</em> will also coincide with the point <em>D</em>, because{' '}
              <em>AB</em> is equal to <em>CD</em>;
            </p>
            <p className="mt-2">
              and, <em>AB</em> coinciding with <em>CD</em>, the segment <em>AEB</em> will also
              coincide with <em>CFD</em>.
            </p>
            <p className="mt-2">
              For, if the straight line <em>AB</em> coincide with <em>CD</em> but the segment{' '}
              <em>AEB</em> do not coincide with <em>CFD</em>, it will either fall within it, or
              without it; or it will fall awry, as <em>CGD</em>, and a circle cuts a circle at
              more than two points: which is impossible. [III. 10]
            </p>
            <p className="mt-2 font-medium">
              Therefore, if the straight line <em>AB</em> be applied to <em>CD</em>, the segment{' '}
              <em>AEB</em> will not fail to coincide with <em>CFD</em> also; therefore it will
              coincide with it and will be equal to it.
            </p>
          </>
        }
      >
        <p>Similar segments of circles on equal straight lines are equal to one another.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        If two circular segments are similar (admit equal inscribed angles) and have equal
        chords, then the segments are congruent.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 150" className="w-80 h-40">
          {/* First segment */}
          <line x1="40" y1="100" x2="140" y2="100" stroke="#3b82f6" strokeWidth="2" />
          <path d="M 40 100 A 60 40 0 0 1 140 100" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="40" cy="100" r="3" fill="#3b82f6" />
          <circle cx="140" cy="100" r="3" fill="#3b82f6" />
          <text x="40" y="120" fill="#3b82f6" fontSize="11">A</text>
          <text x="140" y="120" fill="#3b82f6" fontSize="11">B</text>
          <text x="90" y="75" fill="#f59e0b" fontSize="10">segment 1</text>

          {/* Second segment */}
          <line x1="180" y1="100" x2="280" y2="100" stroke="#22c55e" strokeWidth="2" />
          <path d="M 180 100 A 60 40 0 0 1 280 100" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="180" cy="100" r="3" fill="#22c55e" />
          <circle cx="280" cy="100" r="3" fill="#22c55e" />
          <text x="180" y="120" fill="#22c55e" fontSize="11">C</text>
          <text x="280" y="120" fill="#22c55e" fontSize="11">D</text>
          <text x="230" y="75" fill="#f59e0b" fontSize="10">segment 2</text>

          {/* Equals sign */}
          <text x="160" y="90" fill="#6b7280" fontSize="16">=</text>
        </svg>
      </div>

      <h3>The Proof</h3>

      <p>
        The proof uses the method of superposition. Place segment <em>AEB</em> onto segment{' '}
        <em>CFD</em> so that:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Point <em>A</em> coincides with <em>C</em></li>
        <li>Line <em>AB</em> lies along <em>CD</em></li>
        <li>Since <em>AB</em> = <em>CD</em>, point <em>B</em> coincides with <em>D</em></li>
      </ul>

      <p className="mt-4">Now the arcs must coincide. If they didn't:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>One would fall inside the other, or outside, or "awry"</li>
        <li>If awry, the two circles would intersect at more than two points</li>
        <li>But III.10 says circles can't intersect at more than two points</li>
        <li>Contradiction!</li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.10 (two circles intersect at most at two points)</li>
        <li>The method of superposition (Common Notion 4)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">In Modern Terms:</strong> Similar segments on
          equal chords come from circles with the same radius. Since the inscribed angle
          determines the ratio of chord to radius, equal angles + equal chords → same radius →
          congruent segments.
        </p>
      </div>
    </LessonLayout>
  );
}
