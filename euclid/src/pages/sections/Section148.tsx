import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section148() {
  return (
    <LessonLayout sectionId={148}>
      <Proposition
        title="Proposition VI.3"
        proof={
          <>
            <p>
              Let the angle <em>BAC</em> of the triangle <em>ABC</em> be bisected by the straight
              line <em>AD</em>.
            </p>
            <p className="mt-2">
              I say that, as <em>BD</em> is to <em>CD</em>, so is <em>BA</em> to <em>AC</em>.
            </p>
            <p className="mt-2">
              For let <em>CE</em> be drawn through <em>C</em> parallel to <em>DA</em>, and let{' '}
              <em>BA</em> be carried through and meet it at <em>E</em>.
            </p>
            <p className="mt-2">
              Now, since the straight line <em>AC</em> falls upon the parallels <em>AD</em>,{' '}
              <em>EC</em>, the angle <em>ACE</em> is equal to the angle <em>CAD</em>. [I.29]
            </p>
            <p className="mt-2">
              But the angle <em>CAD</em> is by hypothesis equal to the angle <em>BAD</em>; therefore
              the angle <em>BAD</em> is also equal to the angle <em>ACE</em>.
            </p>
            <p className="mt-2">
              Again, since the straight line <em>BAE</em> falls upon the parallels <em>AD</em>,{' '}
              <em>EC</em>, the exterior angle <em>BAD</em> is equal to the interior angle{' '}
              <em>AEC</em>. [I.29]
            </p>
            <p className="mt-2">
              But the angle <em>ACE</em> was also proved equal to the angle <em>BAD</em>; therefore
              the angle <em>ACE</em> is also equal to the angle <em>AEC</em>, so that the side{' '}
              <em>AE</em> is also equal to the side <em>AC</em>. [I.6]
            </p>
            <p className="mt-2">
              And, since <em>AD</em> has been drawn parallel to <em>EC</em>, one of the sides of
              the triangle <em>BCE</em>, therefore, proportionally, as <em>BD</em> is to <em>DC</em>,
              so is <em>BA</em> to <em>AE</em>. [VI.2]
            </p>
            <p className="mt-2">
              But <em>AE</em> is equal to <em>AC</em>; therefore, as <em>BD</em> is to <em>DC</em>,
              so is <em>BA</em> to <em>AC</em>.
            </p>
            <p className="mt-2 font-medium">
              [The converse is proved similarly, showing that if the segments have the given
              proportion, the line must bisect the angle.]
            </p>
          </>
        }
      >
        <p>
          If an angle of a triangle be bisected and the straight line cutting the angle cut the
          base also, the segments of the base will have the same ratio as the remaining sides of
          the triangle; and, if the segments of the base have the same ratio as the remaining sides
          of the triangle, the straight line joined from the vertex to the point of section will
          bisect the angle of the triangle.
        </p>
      </Proposition>

      <h2>The Angle Bisector Theorem</h2>

      <p>
        This is one of the most famous and useful theorems in elementary geometry. It relates the
        angle bisector to the proportional division of the opposite side.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 380 280" className="w-full max-w-md">
          {/* Triangle ABC */}
          <polygon
            points="190,40 50,240 330,240"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Angle bisector AD */}
          <line x1="190" y1="40" x2="155" y2="240" stroke="#3b82f6" strokeWidth="2" />

          {/* Point D on BC */}
          <circle cx="155" cy="240" r="4" fill="#3b82f6" />

          {/* Angle arc showing bisection */}
          <path
            d="M 175,70 A 30,30 0 0,1 205,70"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <path
            d="M 168,75 A 35,35 0 0,0 190,90"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* Vertex labels */}
          <text x="190" y="28" textAnchor="middle" fill="#f59e0b" fontSize="13">
            A
          </text>
          <text x="40" y="250" textAnchor="middle" fill="#f59e0b" fontSize="13">
            B
          </text>
          <text x="340" y="250" textAnchor="middle" fill="#f59e0b" fontSize="13">
            C
          </text>
          <text x="155" y="262" textAnchor="middle" fill="#3b82f6" fontSize="13">
            D
          </text>

          {/* Segment labels */}
          <text x="95" y="255" textAnchor="middle" fill="#ef4444" fontSize="11">
            BD
          </text>
          <text x="240" y="255" textAnchor="middle" fill="#10b981" fontSize="11">
            DC
          </text>
          <text x="105" y="140" textAnchor="middle" fill="#ef4444" fontSize="11">
            AB
          </text>
          <text x="275" y="140" textAnchor="middle" fill="#10b981" fontSize="11">
            AC
          </text>

          {/* Equal angle marks */}
          <text x="180" y="85" textAnchor="middle" fill="#22c55e" fontSize="10">
            =
          </text>
        </svg>
      </div>

      <h3>The Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">BD : DC = AB : AC</p>
      </div>

      <p className="mt-4">
        The angle bisector divides the opposite side in the ratio of the adjacent sides.
      </p>

      <h3 className="mt-6">Two Parts</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Part 1 (Direct)</h4>
          <p className="text-dark-200 mt-2">
            If <em>AD</em> bisects angle <em>BAC</em>, then <em>BD</em> : <em>DC</em> = <em>AB</em>{' '}
            : <em>AC</em>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Part 2 (Converse)</h4>
          <p className="text-dark-200 mt-2">
            If <em>BD</em> : <em>DC</em> = <em>AB</em> : <em>AC</em>, then <em>AD</em> bisects angle{' '}
            <em>BAC</em>
          </p>
        </div>
      </div>

      <h3 className="mt-6">Proof Strategy</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 280" className="w-full max-w-md">
          {/* Extended construction */}
          {/* Triangle ABC */}
          <polygon
            points="200,60 70,230 300,230"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Angle bisector AD extended to E through parallel */}
          <line x1="200" y1="60" x2="160" y2="230" stroke="#3b82f6" strokeWidth="2" />

          {/* Extended line BA to E */}
          <line x1="70" y1="230" x2="380" y2="60" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Parallel CE to AD */}
          <line x1="300" y1="230" x2="340" y2="115" stroke="#22c55e" strokeWidth="2" />

          {/* Point labels */}
          <text x="200" y="48" textAnchor="middle" fill="#f59e0b" fontSize="12">A</text>
          <text x="60" y="240" textAnchor="middle" fill="#f59e0b" fontSize="12">B</text>
          <text x="310" y="240" textAnchor="middle" fill="#f59e0b" fontSize="12">C</text>
          <text x="155" y="250" textAnchor="middle" fill="#3b82f6" fontSize="12">D</text>
          <text x="355" y="105" textAnchor="middle" fill="#22c55e" fontSize="12">E</text>

          {/* Parallel symbol */}
          <text x="275" y="175" fill="#9ca3af" fontSize="10">CE || AD</text>
        </svg>
      </div>

      <p>The key insight is to construct a parallel line:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Draw <em>CE</em> parallel to <em>AD</em>, meeting <em>BA</em> extended at <em>E</em>
        </li>
        <li>
          Use I.29 (alternate/corresponding angles with parallels) to show triangle <em>ACE</em> is
          isosceles
        </li>
        <li>
          Therefore <em>AE</em> = <em>AC</em>
        </li>
        <li>
          Apply VI.2 to triangle <em>BCE</em> with parallel <em>AD</em>
        </li>
        <li>
          Get <em>BD</em> : <em>DC</em> = <em>BA</em> : <em>AE</em> = <em>BA</em> : <em>AC</em>
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Dependencies:</strong> This proof elegantly
          combines results from Book I (parallel lines and angles), Book V (proportion theory), and
          VI.2 (Basic Proportionality Theorem).
        </p>
      </div>

      <h3 className="mt-6">Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Finding Incenter:</strong> The incenter is where all three angle bisectors meet
        </li>
        <li>
          <strong>Construction Problems:</strong> Dividing a segment in a given ratio
        </li>
        <li>
          <strong>Triangle Centers:</strong> Properties of the incircle
        </li>
        <li>
          <strong>Competitive Mathematics:</strong> A fundamental tool for olympiad geometry
        </li>
      </ul>
    </LessonLayout>
  );
}
