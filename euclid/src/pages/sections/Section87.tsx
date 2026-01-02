import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section87() {
  return (
    <LessonLayout sectionId={87}>
      <Proposition
        title="Proposition III.23"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be similar segments of circles on the same straight
              line <em>AB</em>, <em>DE</em>, and on the same side of it.
            </p>
            <p className="mt-2">
              I say that they cannot both be on the same base and on the same side.
            </p>
            <p className="mt-2">
              For, if possible, let them be on the same side, and let the segment <em>AEB</em> be
              on the base <em>AB</em>; let <em>ACB</em> be the other segment; let the point{' '}
              <em>C</em> be taken at random on the arc <em>ACB</em>, and let <em>CA</em>,{' '}
              <em>CB</em> be joined.
            </p>
            <p className="mt-2">
              Since the segments <em>AEB</em>, <em>ACB</em> are similar, and similar segments are
              those which admit equal angles, [III. Def. 11] therefore the angle <em>ACB</em> is
              equal to some angle in the segment <em>AEB</em>.
            </p>
            <p className="mt-2">
              Let the angle <em>AEB</em> be that angle; therefore the angle <em>ACB</em> is equal
              to the angle <em>AEB</em>, the exterior to the interior: which is impossible. [I. 16]
            </p>
            <p className="mt-2 font-medium">
              Therefore on the same straight line there cannot be constructed two similar and
              unequal segments of circles on the same side.
            </p>
          </>
        }
      >
        <p>
          On the same straight line there cannot be constructed two similar and unequal segments
          of circles on the same side.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition states that similar but unequal circular segments cannot share the same
        base (chord) on the same side. In essence, the inscribed angle uniquely determines the
        segment.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 200" className="w-72 h-52">
          {/* Chord AB */}
          <line x1="60" y1="150" x2="220" y2="150" stroke="#3b82f6" strokeWidth="2" />
          {/* First arc (larger) */}
          <path d="M 60 150 A 100 60 0 0 1 220 150" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Second arc (smaller) - impossible if similar! */}
          <path d="M 60 150 A 100 40 0 0 1 220 150" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" />
          {/* Points */}
          <circle cx="60" cy="150" r="3" fill="#3b82f6" />
          <circle cx="220" cy="150" r="3" fill="#3b82f6" />
          {/* Point on larger arc */}
          <circle cx="140" cy="90" r="3" fill="#f59e0b" />
          {/* Point on smaller arc */}
          <circle cx="140" cy="110" r="3" fill="#ef4444" />
          {/* Labels */}
          <text x="50" y="165" fill="#3b82f6" fontSize="11">A</text>
          <text x="225" y="165" fill="#3b82f6" fontSize="11">B</text>
          {/* X mark showing impossible */}
          <text x="140" y="180" fill="#ef4444" fontSize="12" textAnchor="middle">if similar → same arc!</text>
        </svg>
      </div>

      <h3>Why Is This Impossible?</h3>

      <p>
        Suppose two similar but unequal segments existed on the same chord <em>AB</em>. Pick
        point <em>C</em> on the larger arc and point <em>E</em> on the smaller arc.
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Similar segments admit equal inscribed angles (Definition III.11)</li>
        <li>So ∠<em>ACB</em> = ∠<em>AEB</em></li>
        <li>But ∠<em>AEB</em> is an exterior angle to triangle <em>ACE</em> (or similar)</li>
        <li>By I.16, exterior angle &gt; any remote interior angle</li>
        <li>This contradicts ∠<em>ACB</em> = ∠<em>AEB</em></li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition III.11 (similar segments admit equal angles)</li>
        <li>Proposition I.16 (exterior angle theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Uniqueness:</strong> This shows that given a chord
          and an inscribed angle, there is exactly one circular arc (on each side of the chord)
          that contains that angle. The inscribed angle determines the arc uniquely.
        </p>
      </div>
    </LessonLayout>
  );
}
