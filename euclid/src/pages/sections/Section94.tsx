import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section94() {
  return (
    <LessonLayout sectionId={94}>
      <Proposition
        title="Proposition III.30"
        proof={
          <>
            <p>
              Let <em>ADB</em> be the given arc; thus it is required to bisect it.
            </p>
            <p className="mt-2">
              Let <em>AB</em> be joined and bisected at <em>C</em>; from the point <em>C</em> let{' '}
              <em>CD</em> be drawn at right angles to the straight line <em>AB</em>, and let{' '}
              <em>AD</em>, <em>DB</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AC</em> is equal to <em>CB</em>, and <em>CD</em> is common, the two
              sides <em>AC</em>, <em>CD</em> are equal to the two sides <em>BC</em>, <em>CD</em>;
              and the angle <em>ACD</em> is equal to the angle <em>BCD</em>, for each is right;
            </p>
            <p className="mt-2">
              therefore the base <em>AD</em> is equal to the base <em>DB</em>. [I. 4]
            </p>
            <p className="mt-2">
              But equal straight lines cut off equal arcs, the greater equal to the greater and
              the less to the less; [III. 28] and each of the arcs <em>AD</em>, <em>DB</em> is
              less than a semicircle; therefore the arc <em>AD</em> is equal to the arc{' '}
              <em>DB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the given arc has been bisected at the point <em>D</em>.
            </p>
          </>
        }
      >
        <p>To bisect a given arc.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction shows how to find the midpoint of a given arc—a fundamental
        construction for dividing circles into equal parts.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 220" className="w-72 h-56">
          {/* Circle */}
          <circle cx="140" cy="120" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Arc ADB */}
          <path d="M 70 80 A 80 80 0 0 1 210 80" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Chord AB */}
          <line x1="70" y1="80" x2="210" y2="80" stroke="#3b82f6" strokeWidth="2" />
          {/* Perpendicular bisector */}
          <line x1="140" y1="80" x2="140" y2="40" stroke="#ef4444" strokeWidth="2" />
          {/* Points */}
          <circle cx="70" cy="80" r="3" fill="#3b82f6" />
          <circle cx="210" cy="80" r="3" fill="#3b82f6" />
          <circle cx="140" cy="80" r="3" fill="#ef4444" />
          <circle cx="140" cy="40" r="4" fill="#22c55e" />
          {/* Right angle */}
          <path d="M 130 80 L 130 70 L 140 70" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="60" y="75" fill="#3b82f6" fontSize="11">A</text>
          <text x="215" y="75" fill="#3b82f6" fontSize="11">B</text>
          <text x="145" y="93" fill="#ef4444" fontSize="11">C</text>
          <text x="145" y="35" fill="#22c55e" fontSize="11">D</text>
          {/* Arc labels */}
          <text x="100" y="55" fill="#22c55e" fontSize="10">arc AD</text>
          <text x="165" y="55" fill="#22c55e" fontSize="10">arc DB</text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw chord <em>AB</em> connecting the endpoints of the arc</li>
        <li>Bisect <em>AB</em> at point <em>C</em> (using I.10)</li>
        <li>Draw perpendicular to <em>AB</em> at <em>C</em> (using I.11)</li>
        <li>Let this perpendicular meet the arc at <em>D</em></li>
        <li><em>D</em> is the midpoint of the arc!</li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p>By SAS congruence (I.4):</p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>AC</em> = <em>CB</em> (C is midpoint)</li>
        <li><em>CD</em> = <em>CD</em> (common)</li>
        <li>∠<em>ACD</em> = ∠<em>BCD</em> = 90°</li>
        <li>Therefore <em>AD</em> = <em>DB</em></li>
      </ul>

      <p className="mt-4">By III.28, equal chords cut off equal arcs, so arc <em>AD</em> = arc <em>DB</em>.</p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition III.28 (equal chords → equal arcs)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Applications:</strong> This construction is used
          repeatedly in Book IV for inscribing regular polygons in circles—each side requires
          bisecting arcs.
        </p>
      </div>
    </LessonLayout>
  );
}
