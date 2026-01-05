import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section176() {
  return (
    <LessonLayout sectionId={176}>
      <Proposition
        title="Proposition VI.31"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a right-angled triangle having the angle <em>BAC</em> right.
            </p>
            <p className="mt-2">
              I say that the figure on <em>BC</em> is equal to the similar and similarly
              described figures on <em>BA</em>, <em>AC</em>.
            </p>
            <p className="mt-2">
              Let <em>AD</em> be drawn perpendicular to <em>BC</em>. [I.12]
            </p>
            <p className="mt-2">
              Since in the right-angled triangle <em>ABC</em>, <em>AD</em> has been drawn
              from the right angle <em>A</em> perpendicular to the base <em>BC</em>, the
              triangles <em>ABD</em>, <em>ADC</em> adjoining the perpendicular are similar
              both to the whole <em>ABC</em> and to one another. [VI.8]
            </p>
            <p className="mt-2">
              And, since <em>ABC</em> is similar to <em>ABD</em>, therefore as <em>CB</em> is
              to <em>BA</em>, so is <em>AB</em> to <em>BD</em>. [VI.Def.1]
            </p>
            <p className="mt-2">
              And, since three straight lines are proportional, as the first is to the third,
              so is the figure on the first to the similar and similarly described figure on
              the second. [VI.19, Porism]
            </p>
            <p className="mt-2">
              Therefore, as <em>CB</em> is to <em>BD</em>, so is the figure on <em>CB</em> to
              the similar and similarly described figure on <em>BA</em>.
            </p>
            <p className="mt-2">
              For the same reason also, as <em>BC</em> is to <em>CD</em>, so is the figure on
              <em> BC</em> to that on <em>CA</em>.
            </p>
            <p className="mt-2">
              So that, as <em>BC</em> is to <em>BD</em>, <em>DC</em>, so is the figure on
              <em> BC</em> to the similar and similarly described figures on <em>BA</em>, <em>AC</em>.
            </p>
            <p className="mt-2">
              But <em>BC</em> is equal to <em>BD</em>, <em>DC</em>; therefore the figure on
              <em> BC</em> is also equal to the similar and similarly described figures on
              <em> BA</em>, <em>AC</em>. [V.24]
            </p>
            <p className="mt-2 font-medium">
              Therefore in right-angled triangles the figure on the side subtending the
              right angle is equal to the similar and similarly described figures on the
              sides containing the right angle.
            </p>
          </>
        }
      >
        <p>
          In right-angled triangles the figure on the side subtending the right angle
          is equal to the similar and similarly described figures on the sides containing
          the right angle.
        </p>
      </Proposition>

      <h2>The Generalized Pythagorean Theorem</h2>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200 text-lg">
          <strong className="text-amber-400">This is the climax of Book VI.</strong> Proposition
          VI.31 generalizes the famous Pythagorean theorem (I.47) from squares to{' '}
          <em>any similar figures</em>. Where I.47 proves a^2 + b^2 = c^2 using squares,
          VI.31 proves this works for semicircles, equilateral triangles, pentagons, or
          any similar shapes built on the three sides.
        </p>
      </div>

      <h3 className="mt-6">The Classical vs. Generalized Theorem</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 500 280" className="w-full max-w-xl">
          {/* Title for classical */}
          <text x="125" y="20" fill="#6b7280" fontSize="11" textAnchor="middle">
            Classical (I.47): Squares
          </text>

          {/* Classical Pythagorean - right triangle with squares */}
          <polygon
            points="50,200 150,200 50,120"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Square on AB (vertical leg) */}
          <rect
            x="0"
            y="120"
            width="50"
            height="80"
            fill="#3b82f6"
            fillOpacity="0.2"
            stroke="#3b82f6"
            strokeWidth="1"
          />

          {/* Square on BC (horizontal leg) */}
          <rect
            x="50"
            y="200"
            width="100"
            height="100"
            fill="#22c55e"
            fillOpacity="0.2"
            stroke="#22c55e"
            strokeWidth="1"
          />

          {/* Square on AC (hypotenuse) - rotated */}
          <polygon
            points="50,120 150,200 230,100 130,20"
            fill="#ec4899"
            fillOpacity="0.2"
            stroke="#ec4899"
            strokeWidth="1"
          />

          <text x="100" y="260" fill="#22c55e" fontSize="10" textAnchor="middle">b^2</text>
          <text x="25" y="165" fill="#3b82f6" fontSize="10" textAnchor="middle">a^2</text>
          <text x="140" y="100" fill="#ec4899" fontSize="10" textAnchor="middle">c^2</text>

          {/* Equals sign */}
          <text x="25" y="240" fill="#6b7280" fontSize="14">a^2 + b^2 = c^2</text>

          {/* Divider */}
          <line x1="250" y1="30" x2="250" y2="270" stroke="#374151" strokeWidth="1" strokeDasharray="4" />

          {/* Title for generalized */}
          <text x="375" y="20" fill="#f59e0b" fontSize="11" textAnchor="middle">
            Generalized (VI.31): Any Similar Figures
          </text>

          {/* Generalized - right triangle with semicircles */}
          <polygon
            points="300,200 400,200 300,120"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Semicircle on vertical leg (AB) */}
          <path
            d="M 300 120 A 40 40 0 0 0 300 200"
            fill="#3b82f6"
            fillOpacity="0.2"
            stroke="#3b82f6"
            strokeWidth="1"
          />

          {/* Semicircle on horizontal leg (BC) */}
          <path
            d="M 300 200 A 50 50 0 0 0 400 200"
            fill="#22c55e"
            fillOpacity="0.2"
            stroke="#22c55e"
            strokeWidth="1"
          />

          {/* Semicircle on hypotenuse (AC) - calculated */}
          <path
            d="M 300 120 A 64 64 0 0 1 400 200"
            fill="#ec4899"
            fillOpacity="0.2"
            stroke="#ec4899"
            strokeWidth="1"
          />

          <text x="300" y="250" fill="#6b7280" fontSize="11" textAnchor="middle">
            Also works!
          </text>
          <text x="400" y="250" fill="#6b7280" fontSize="11" textAnchor="middle">
            (semicircles)
          </text>

          {/* Annotation showing the key insight */}
          <rect x="280" y="40" width="190" height="50" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="375" y="60" fill="#f59e0b" fontSize="10" textAnchor="middle">
            Similar figures on the three sides:
          </text>
          <text x="375" y="80" fill="#22c55e" fontSize="11" textAnchor="middle">
            [Figure on a] + [Figure on b] = [Figure on c]
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Why Does This Work?</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          The key insight is <strong>VI.19</strong>: similar figures are in the
          <em> duplicate ratio</em> (square) of their corresponding sides.
        </p>
        <p className="text-dark-300 mt-3">
          If figures are similar and built on sides in ratio k:1, their areas are in
          ratio k^2:1.
        </p>
        <p className="text-dark-300 mt-3">
          So any similar figures scale as the <em>squares</em> of their sides, making
          the Pythagorean relationship hold for all of them!
        </p>
      </div>

      <h3 className="mt-6">Examples of Similar Figures</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 450 200" className="w-full max-w-lg">
          {/* Semicircles */}
          <g>
            <path d="M 30 120 A 35 35 0 0 0 100 120" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
            <line x1="30" y1="120" x2="100" y2="120" stroke="#3b82f6" strokeWidth="1" />
            <text x="65" y="145" fill="#3b82f6" fontSize="10" textAnchor="middle">Semicircles</text>
          </g>

          {/* Equilateral triangles */}
          <g>
            <polygon
              points="140,120 190,120 165,76"
              fill="#22c55e"
              fillOpacity="0.3"
              stroke="#22c55e"
              strokeWidth="1"
            />
            <text x="165" y="145" fill="#22c55e" fontSize="10" textAnchor="middle">Equilateral</text>
          </g>

          {/* Regular pentagons (approximated) */}
          <g>
            <polygon
              points="265,90 290,110 280,140 250,140 240,110"
              fill="#ec4899"
              fillOpacity="0.3"
              stroke="#ec4899"
              strokeWidth="1"
            />
            <text x="265" y="165" fill="#ec4899" fontSize="10" textAnchor="middle">Pentagons</text>
          </g>

          {/* Any similar shape */}
          <g>
            <path
              d="M 340 100 Q 360 80 380 95 Q 400 110 385 130 Q 370 150 350 135 Q 330 120 340 100"
              fill="#8b5cf6"
              fillOpacity="0.3"
              stroke="#8b5cf6"
              strokeWidth="1"
            />
            <text x="365" y="165" fill="#8b5cf6" fontSize="10" textAnchor="middle">Any Shape!</text>
          </g>

          {/* Label */}
          <text x="225" y="30" fill="#f59e0b" fontSize="12" textAnchor="middle">
            VI.31 applies to ALL of these:
          </text>
        </svg>
      </div>

      <h3 className="mt-6">The Proof Structure</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Draw altitude <em>AD</em> from the right angle to the hypotenuse
          </li>
          <li>
            By VI.8, triangles ABD, ADC, and ABC are all similar to each other
          </li>
          <li>
            From similarity: CB : BA = BA : BD and CB : CA = CA : CD
          </li>
          <li>
            By VI.19 porism: CB : BD = (Figure on CB) : (Figure on BA)
          </li>
          <li>
            Similarly: CB : CD = (Figure on CB) : (Figure on CA)
          </li>
          <li>
            Adding these ratios: CB : (BD + CD) = (Figure on CB) : (Figures on BA + CA)
          </li>
          <li>
            But BD + CD = BC, so the figures are equal!
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Diagram of the Proof</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 220" className="w-full max-w-sm">
          {/* Right triangle ABC */}
          <polygon
            points="50,180 250,180 50,50"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Altitude AD */}
          <line x1="50" y1="50" x2="97" y2="180" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />

          {/* Points */}
          <circle cx="50" cy="50" r="4" fill="#f59e0b" />
          <circle cx="50" cy="180" r="4" fill="#f59e0b" />
          <circle cx="250" cy="180" r="4" fill="#f59e0b" />
          <circle cx="97" cy="180" r="4" fill="#3b82f6" />

          {/* Labels */}
          <text x="40" y="45" fill="#f59e0b" fontSize="14" fontWeight="bold">A</text>
          <text x="40" y="195" fill="#f59e0b" fontSize="14" fontWeight="bold">B</text>
          <text x="255" y="195" fill="#f59e0b" fontSize="14" fontWeight="bold">C</text>
          <text x="97" y="200" fill="#3b82f6" fontSize="14" fontWeight="bold">D</text>

          {/* Right angle marker at A */}
          <path d="M 50 65 L 60 65 L 60 50" fill="none" stroke="#f59e0b" strokeWidth="1" />

          {/* Right angle marker at D */}
          <path d="M 90 172 L 90 180 L 97 180" fill="none" stroke="#3b82f6" strokeWidth="1" />

          {/* Segment labels */}
          <text x="70" y="175" fill="#22c55e" fontSize="10">BD</text>
          <text x="170" y="175" fill="#ec4899" fontSize="10">DC</text>
          <text x="30" y="115" fill="#8b5cf6" fontSize="10">AB</text>
          <text x="160" y="100" fill="#a855f7" fontSize="10">AC</text>

          {/* Similar triangles indication */}
          <text x="200" y="50" fill="#6b7280" fontSize="10">
            Triangle ABD ~ ABC ~ ACD
          </text>
          <text x="200" y="65" fill="#6b7280" fontSize="9">
            (all three similar - VI.8)
          </text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Power of Abstraction:</strong> VI.31
          demonstrates that the Pythagorean theorem is not really about squares at all&mdash;it
          is about the scaling relationship inherent in right triangles. The altitude from
          the right angle creates similar triangles that embody this relationship, and
          since similar figures scale as the squares of their sides, any similar figures
          work equally well. This is a profound insight into the nature of geometric
          proportion.
        </p>
      </div>

      <h3 className="mt-6">Modern Formulation</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          If similar figures are constructed on the sides of a right triangle with legs
          a, b and hypotenuse c, and if the figure on a side of length s has area k times s^2
          (for some constant k depending on the shape), then:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          k * a^2 + k * b^2 = k * c^2
        </p>
        <p className="text-dark-300">
          Dividing by k gives the classic Pythagorean theorem. The constant k cancels,
          showing that the shape does not matter&mdash;only similarity does.
        </p>
      </div>
    </LessonLayout>
  );
}
