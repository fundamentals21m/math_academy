import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section149() {
  return (
    <LessonLayout sectionId={149}>
      <Proposition
        title="Proposition VI.4"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DCE</em> be equiangular triangles having the angle <em>ABC</em>{' '}
              equal to the angle <em>DCE</em>, the angle <em>BAC</em> to the angle <em>CDE</em>, and
              further the angle <em>ACB</em> to the angle <em>DEC</em>.
            </p>
            <p className="mt-2">
              I say that in the triangles <em>ABC</em>, <em>DCE</em> the sides about the equal
              angles are proportional, and those are corresponding sides which subtend the equal
              angles.
            </p>
            <p className="mt-2">
              For let <em>BC</em> be placed in a straight line with <em>CE</em>.
            </p>
            <p className="mt-2">
              Then, since the angles <em>ABC</em>, <em>ACB</em> are less than two right angles
              [I.17], and the angle <em>ACB</em> is equal to the angle <em>DEC</em>, therefore the
              angles <em>ABC</em>, <em>DEC</em> are less than two right angles; therefore{' '}
              <em>BA</em>, <em>ED</em>, when produced, will meet. [I. Post. 5]
            </p>
            <p className="mt-2">
              Let them be produced and meet at <em>F</em>.
            </p>
            <p className="mt-2">
              Now, since the angle <em>DCE</em> is equal to the angle <em>ABC</em>, <em>BF</em> is
              parallel to <em>CD</em>. [I.28]
            </p>
            <p className="mt-2">
              Again, since the angle <em>ACB</em> is equal to the angle <em>DEC</em>, <em>AC</em> is
              parallel to <em>FE</em>. [I.28]
            </p>
            <p className="mt-2">
              Therefore <em>FACD</em> is a parallelogram; therefore <em>FA</em> is equal to{' '}
              <em>DC</em>, and <em>AC</em> to <em>FD</em>. [I.34]
            </p>
            <p className="mt-2">
              And, since <em>AC</em> has been drawn parallel to <em>FE</em>, one of the sides of
              the triangle <em>FBE</em>, therefore, as <em>BA</em> is to <em>AF</em>, so is{' '}
              <em>BC</em> to <em>CE</em>. [VI.2]
            </p>
            <p className="mt-2">
              But <em>AF</em> is equal to <em>CD</em>; therefore, as <em>BA</em> is to <em>CD</em>,
              so is <em>BC</em> to <em>CE</em>, and alternately, as <em>AB</em> is to <em>BC</em>,
              so is <em>DC</em> to <em>CE</em>. [V.16]
            </p>
            <p className="mt-2">
              Again, since <em>CD</em> is parallel to <em>BF</em>, as <em>BC</em> is to <em>CE</em>,
              so is <em>FD</em> to <em>DE</em>. [VI.2]
            </p>
            <p className="mt-2">
              But <em>FD</em> is equal to <em>AC</em>; therefore, as <em>BC</em> is to <em>CE</em>,
              so is <em>AC</em> to <em>DE</em>, and alternately, as <em>BC</em> is to <em>CA</em>,
              so is <em>CE</em> to <em>ED</em>. [V.16]
            </p>
            <p className="mt-2">
              Since then it was proved that, as <em>AB</em> is to <em>BC</em>, so is <em>DC</em> to{' '}
              <em>CE</em>, and, as <em>BC</em> is to <em>CA</em>, so is <em>CE</em> to <em>ED</em>;
              therefore, ex aequali, as <em>BA</em> is to <em>AC</em>, so is <em>CD</em> to{' '}
              <em>DE</em>. [V.22]
            </p>
          </>
        }
      >
        <p>
          In equiangular triangles the sides about the equal angles are proportional, and those are
          corresponding sides which subtend the equal angles.
        </p>
      </Proposition>

      <h2>The AA Similarity Criterion</h2>

      <p>
        This is one of the most important theorems in geometry: if two triangles have equal angles,
        their corresponding sides are proportional. This is the{' '}
        <strong>Angle-Angle (AA) similarity criterion</strong>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 220" className="w-full max-w-lg">
          {/* First triangle ABC (smaller) */}
          <polygon
            points="50,180 150,180 100,60"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Second triangle DCE (larger) */}
          <polygon
            points="230,190 380,190 305,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Angle marks for triangle ABC */}
          <path d="M 60,180 A 15,15 0 0,1 75,172" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 140,180 A 15,15 0 0,0 125,172" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 95,75 A 12,12 0 0,1 105,75" fill="none" stroke="#a855f7" strokeWidth="1.5" />

          {/* Angle marks for triangle DCE (matching) */}
          <path d="M 245,190 A 20,20 0 0,1 265,178" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 365,190 A 20,20 0 0,0 345,178" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 298,52 A 15,15 0 0,1 312,52" fill="none" stroke="#a855f7" strokeWidth="1.5" />

          {/* Vertex labels */}
          <text x="100" y="50" textAnchor="middle" fill="#f59e0b" fontSize="12">A</text>
          <text x="40" y="190" textAnchor="middle" fill="#f59e0b" fontSize="12">B</text>
          <text x="160" y="190" textAnchor="middle" fill="#f59e0b" fontSize="12">C</text>

          <text x="305" y="22" textAnchor="middle" fill="#3b82f6" fontSize="12">D</text>
          <text x="220" y="200" textAnchor="middle" fill="#3b82f6" fontSize="12">C</text>
          <text x="390" y="200" textAnchor="middle" fill="#3b82f6" fontSize="12">E</text>

          {/* Similarity symbol */}
          <text x="190" y="120" textAnchor="middle" fill="#9ca3af" fontSize="20">~</text>
        </svg>
      </div>

      <h3>What Does "Equiangular" Mean?</h3>

      <p>Two triangles are equiangular if their corresponding angles are equal:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono mb-2">Angle A = Angle D</p>
        <p className="text-amber-400 font-mono mb-2">Angle B = Angle C'</p>
        <p className="text-amber-400 font-mono">Angle C = Angle E</p>
      </div>

      <h3 className="mt-6">The Proportionality Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          AB : DC = BC : CE = CA : ED
        </p>
      </div>

      <p className="mt-4">
        The sides opposite equal angles are in proportion. This common ratio is the{' '}
        <strong>scale factor</strong> between the similar triangles.
      </p>

      <h3 className="mt-6">Proof Strategy</h3>

      <p>
        Euclid's proof is ingenious. He places the triangles so that their bases lie on the same
        line, then shows that extending certain sides creates a parallelogram:
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 240" className="w-full max-w-lg">
          {/* Base line BCE */}
          <line x1="50" y1="180" x2="350" y2="180" stroke="#6b7280" strokeWidth="1" />

          {/* Triangle ABC */}
          <polygon
            points="50,180 200,180 120,80"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Triangle DCE (sharing point C) */}
          <polygon
            points="200,180 350,180 280,50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Extended lines meeting at F */}
          <line x1="120" y1="80" x2="50" y2="30" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" />
          <line x1="280" y1="50" x2="50" y2="30" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Point F */}
          <circle cx="50" cy="30" r="3" fill="#22c55e" />

          {/* Parallelogram indication */}
          <line x1="50" y1="30" x2="280" y2="50" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,3" />

          {/* Labels */}
          <text x="120" y="70" textAnchor="middle" fill="#f59e0b" fontSize="11">A</text>
          <text x="40" y="190" textAnchor="middle" fill="#f59e0b" fontSize="11">B</text>
          <text x="200" y="195" textAnchor="middle" fill="#9ca3af" fontSize="11">C</text>
          <text x="280" y="40" textAnchor="middle" fill="#3b82f6" fontSize="11">D</text>
          <text x="360" y="190" textAnchor="middle" fill="#3b82f6" fontSize="11">E</text>
          <text x="40" y="25" textAnchor="middle" fill="#22c55e" fontSize="11">F</text>
        </svg>
      </div>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Place triangles so that BC and CE are collinear</li>
        <li>Extend BA and ED to meet at F (they must meet by the parallel postulate)</li>
        <li>Show FACD is a parallelogram using the equal angles</li>
        <li>Apply VI.2 twice to establish the proportions</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Central Theorem of Similarity:</strong> This
          proposition is the foundation of the theory of similar figures. Together with VI.5 and
          VI.6, it establishes that equal angles and proportional sides are equivalent conditions
          for similarity.
        </p>
      </div>

      <h3 className="mt-6">Why Only Two Angles Matter</h3>

      <p>
        Since the angles of a triangle sum to two right angles (I.32), if two angles are equal, the
        third must be equal too. So to prove similarity, we only need to show two pairs of equal
        angles (hence "AA" criterion).
      </p>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Indirect Measurement:</strong> Heights of buildings, distances to stars
        </li>
        <li>
          <strong>Map Making:</strong> Scale models preserve angles
        </li>
        <li>
          <strong>Trigonometry:</strong> Ratios depend only on angles, not size
        </li>
        <li>
          <strong>Photography:</strong> Perspective and scaling
        </li>
      </ul>
    </LessonLayout>
  );
}
