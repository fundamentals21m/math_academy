import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section178() {
  return (
    <LessonLayout sectionId={178}>
      <Proposition
        title="Proposition VI.33"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be equal circles, and let <em>BGC</em>,
              <em> EHF</em> be angles at their centers, and <em>BAC</em>, <em>EDF</em>
              {' '}angles at their circumferences.
            </p>
            <p className="mt-2">
              I say that, as the circumference <em>BC</em> is to the circumference <em>EF</em>,
              so is the angle <em>BGC</em> to the angle <em>EHF</em>, and the angle <em>BAC</em>
              {' '}to the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              Let any number of consecutive circumferences <em>CK</em>, <em>KL</em> be made
              equal to <em>BC</em>, and any number <em>FM</em>, <em>MN</em> equal to <em>EF</em>.
            </p>
            <p className="mt-2">
              And let <em>GK</em>, <em>GL</em>, <em>HM</em>, <em>HN</em> be joined.
            </p>
            <p className="mt-2">
              Since the circumferences <em>BC</em>, <em>CK</em>, <em>KL</em> are equal to one
              another, the angles <em>BGC</em>, <em>CGK</em>, <em>KGL</em> are also equal to
              one another. [III.27]
            </p>
            <p className="mt-2">
              Therefore, whatever multiple the circumference <em>BL</em> is of <em>BC</em>,
              that multiple also is the angle <em>BGL</em> of the angle <em>BGC</em>.
            </p>
            <p className="mt-2">
              For the same reason also, whatever multiple the circumference <em>NE</em> is
              of <em>EF</em>, that multiple also is the angle <em>NHE</em> of the angle <em>EHF</em>.
            </p>
            <p className="mt-2">
              If then the circumference <em>BL</em> is equal to the circumference <em>EN</em>,
              the angle <em>BGL</em> is also equal to the angle <em>EHN</em>. [III.27]
            </p>
            <p className="mt-2">
              If the circumference <em>BL</em> is greater than the circumference <em>EN</em>,
              the angle <em>BGL</em> is also greater than the angle <em>EHN</em>; and if less, less.
            </p>
            <p className="mt-2">
              There being then four magnitudes, two circumferences <em>BC</em>, <em>EF</em>,
              and two angles <em>BGC</em>, <em>EHF</em>, there have been taken equimultiples
              of the circumference <em>BC</em> and the angle <em>BGC</em>, namely the
              circumference <em>BL</em> and the angle <em>BGL</em>, and of the circumference
              <em> EF</em> and the angle <em>EHF</em>, namely the circumference <em>EN</em>
              {' '}and the angle <em>EHN</em>.
            </p>
            <p className="mt-2">
              And it has been proved that, if the circumference <em>BL</em> is in excess of
              the circumference <em>EN</em>, the angle <em>BGL</em> is also in excess of the
              angle <em>EHN</em>; if equal, equal; if less, less.
            </p>
            <p className="mt-2 font-medium">
              Therefore, as the circumference <em>BC</em> is to <em>EF</em>, so is the angle
              <em> BGC</em> to the angle <em>EHF</em>. [V.Def.5]
            </p>
            <p className="mt-2">
              But, as the angle <em>BGC</em> is to the angle <em>EHF</em>, so is the angle
              <em> BAC</em> to the angle <em>EDF</em>; for they are double of them respectively.
              [III.20]
            </p>
            <p className="mt-2 font-medium">
              Therefore in equal circles angles have the same ratio as the circumferences
              on which they stand, whether they stand at the centers or at the circumferences.
            </p>
          </>
        }
      >
        <p>
          In equal circles angles have the same ratio as the circumferences on which
          they stand, whether they stand at the centers or at the circumferences.
        </p>
      </Proposition>

      <h2>Angles and Arcs: The Concluding Proposition</h2>

      <p>
        This proposition establishes the fundamental relationship between angles and
        arcs in circles&mdash;a result that connects Book VI's proportion theory with
        Book III's circle theorems. It is the final proposition of Book VI.
      </p>

      <h3 className="mt-6">The Key Relationship</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          In equal circles:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          angle_1 : angle_2 = arc_1 : arc_2
        </p>
        <p className="text-dark-300">
          This holds for:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Central angles (at the center)</li>
          <li>Inscribed angles (at the circumference)</li>
        </ul>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 450 220" className="w-full max-w-lg">
          {/* First circle */}
          <circle cx="110" cy="110" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />

          {/* Arc BC highlighted */}
          <path
            d="M 170 160 A 80 80 0 0 0 180 80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
          />

          {/* Center G */}
          <circle cx="110" cy="110" r="3" fill="#f59e0b" />
          <text x="100" y="105" fill="#f59e0b" fontSize="12">G</text>

          {/* Radii GB and GC */}
          <line x1="110" y1="110" x2="170" y2="160" stroke="#6b7280" strokeWidth="1" />
          <line x1="110" y1="110" x2="180" y2="80" stroke="#6b7280" strokeWidth="1" />

          {/* Points B and C */}
          <circle cx="170" cy="160" r="4" fill="#3b82f6" />
          <circle cx="180" cy="80" r="4" fill="#3b82f6" />
          <text x="178" y="170" fill="#3b82f6" fontSize="12">B</text>
          <text x="188" y="78" fill="#3b82f6" fontSize="12">C</text>

          {/* Point A on circumference */}
          <circle cx="40" cy="80" r="3" fill="#22c55e" />
          <text x="25" y="78" fill="#22c55e" fontSize="12">A</text>
          <line x1="40" y1="80" x2="170" y2="160" stroke="#22c55e" strokeWidth="1" />
          <line x1="40" y1="80" x2="180" y2="80" stroke="#22c55e" strokeWidth="1" />

          {/* Central angle arc */}
          <path d="M 125 115 A 15 15 0 0 1 120 100" fill="none" stroke="#ec4899" strokeWidth="2" />
          <text x="132" y="95" fill="#ec4899" fontSize="10">BGC</text>

          {/* Second circle */}
          <circle cx="340" cy="110" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />

          {/* Arc EF highlighted (smaller) */}
          <path
            d="M 390 160 A 80 80 0 0 0 410 120"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="4"
          />

          {/* Center H */}
          <circle cx="340" cy="110" r="3" fill="#f59e0b" />
          <text x="330" y="105" fill="#f59e0b" fontSize="12">H</text>

          {/* Radii HE and HF */}
          <line x1="340" y1="110" x2="390" y2="160" stroke="#6b7280" strokeWidth="1" />
          <line x1="340" y1="110" x2="410" y2="120" stroke="#6b7280" strokeWidth="1" />

          {/* Points E and F */}
          <circle cx="390" cy="160" r="4" fill="#8b5cf6" />
          <circle cx="410" cy="120" r="4" fill="#8b5cf6" />
          <text x="398" y="170" fill="#8b5cf6" fontSize="12">E</text>
          <text x="418" y="118" fill="#8b5cf6" fontSize="12">F</text>

          {/* Point D on circumference */}
          <circle cx="270" cy="80" r="3" fill="#22c55e" />
          <text x="255" y="78" fill="#22c55e" fontSize="12">D</text>
          <line x1="270" y1="80" x2="390" y2="160" stroke="#22c55e" strokeWidth="1" />
          <line x1="270" y1="80" x2="410" y2="120" stroke="#22c55e" strokeWidth="1" />

          {/* Central angle arc */}
          <path d="M 353 118 A 15 15 0 0 1 355 108" fill="none" stroke="#ec4899" strokeWidth="2" />
          <text x="360" y="100" fill="#ec4899" fontSize="10">EHF</text>

          {/* Proportion relationship */}
          <text x="225" y="200" fill="#f59e0b" fontSize="11" textAnchor="middle">
            arc BC : arc EF = angle BGC : angle EHF
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Proof Strategy</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The proof uses Eudoxus's definition of proportion (V.Def.5):
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Mark off equal arcs: CK, KL each equal to BC on one circle, and FM, MN
            each equal to EF on the other
          </li>
          <li>
            By III.27, equal arcs subtend equal central angles
          </li>
          <li>
            So multiples of arc BC correspond to the same multiples of angle BGC
          </li>
          <li>
            Same for arc EF and angle EHF
          </li>
          <li>
            If arc BL exceeds, equals, or is less than arc EN, then angle BGL exceeds,
            equals, or is less than angle EHN
          </li>
          <li>
            By V.Def.5, this establishes the proportion arc BC : arc EF = angle BGC : angle EHF
          </li>
          <li>
            For inscribed angles, use III.20: inscribed angle = half central angle
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Equal Arcs, Equal Angles</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 200" className="w-full max-w-sm">
          {/* Circle */}
          <circle cx="175" cy="100" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />

          {/* Center */}
          <circle cx="175" cy="100" r="3" fill="#f59e0b" />
          <text x="180" y="95" fill="#f59e0b" fontSize="10">G</text>

          {/* Multiple equal arcs */}
          {/* Arc BC */}
          <path d="M 115 160 A 80 80 0 0 0 175 180" fill="none" stroke="#3b82f6" strokeWidth="4" />
          {/* Arc CK */}
          <path d="M 175 180 A 80 80 0 0 0 235 160" fill="none" stroke="#22c55e" strokeWidth="4" />
          {/* Arc KL */}
          <path d="M 235 160 A 80 80 0 0 0 255 100" fill="none" stroke="#ec4899" strokeWidth="4" />

          {/* Points */}
          <circle cx="115" cy="160" r="3" fill="#3b82f6" />
          <circle cx="175" cy="180" r="3" fill="#3b82f6" />
          <circle cx="235" cy="160" r="3" fill="#22c55e" />
          <circle cx="255" cy="100" r="3" fill="#ec4899" />

          {/* Labels */}
          <text x="100" y="170" fill="#3b82f6" fontSize="11">B</text>
          <text x="175" y="198" fill="#3b82f6" fontSize="11">C</text>
          <text x="245" y="170" fill="#22c55e" fontSize="11">K</text>
          <text x="265" y="105" fill="#ec4899" fontSize="11">L</text>

          {/* Radii */}
          <line x1="175" y1="100" x2="115" y2="160" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="175" y1="100" x2="175" y2="180" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="175" y1="100" x2="235" y2="160" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="175" y1="100" x2="255" y2="100" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.5" />

          {/* Annotation */}
          <text x="175" y="40" fill="#6b7280" fontSize="10" textAnchor="middle">
            Equal arcs BC = CK = KL
          </text>
          <text x="175" y="55" fill="#6b7280" fontSize="10" textAnchor="middle">
            give equal angles BGC = CGK = KGL
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Modern Perspective: Radian Measure</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          This proposition anticipates the modern concept of <strong>radian measure</strong>,
          where angles are measured by arc length:
        </p>
        <p className="text-amber-400 font-mono text-center my-4">
          theta (in radians) = arc length / radius
        </p>
        <p className="text-dark-300">
          In equal circles (same radius), angle and arc are directly proportional.
          This is exactly what VI.33 establishes using Greek proportion theory.
        </p>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">III.20:</strong> Inscribed angle is half
          the central angle on the same arc
        </li>
        <li>
          <strong className="text-amber-400">III.27:</strong> Equal arcs subtend equal
          central angles in equal circles
        </li>
        <li>
          <strong className="text-amber-400">V.Def.5:</strong> Eudoxus's definition of
          proportion using equimultiples
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Conclusion of Book VI:</strong> This proposition
          elegantly concludes Book VI by applying proportion theory to circles, connecting
          the material from Book III (circles) with Book V (proportion). The result that
          angles and arcs are proportional is foundational for trigonometry and the
          measurement of angles. It shows how deeply interconnected the various books
          of the Elements are&mdash;proportion theory developed in Book V illuminates
          the geometry of circles from Book III, while similarity from Book VI provides
          the framework for understanding these relationships.
        </p>
      </div>

      <h3 className="mt-6">Book VI Summary</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Book VI has covered:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Similar figures and their properties (VI.1-22)</li>
          <li>Equiangular parallelograms and compound ratios (VI.23-26)</li>
          <li>Application of areas&mdash;geometric algebra (VI.27-29)</li>
          <li>The golden ratio construction (VI.30)</li>
          <li>The generalized Pythagorean theorem (VI.31)</li>
          <li>Collinearity conditions for similar triangles (VI.32)</li>
          <li>Proportion of angles and arcs (VI.33)</li>
        </ul>
        <p className="text-amber-400 mt-4">
          With these 33 propositions, Euclid has developed the complete theory of
          similar plane figures, preparing the way for solid geometry in Books XI-XIII.
        </p>
      </div>
    </LessonLayout>
  );
}
