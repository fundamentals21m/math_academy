import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section163() {
  return (
    <LessonLayout sectionId={163}>
      <Proposition
        title="Proposition VI.18"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line, and <em>CE</em> the given rectilinear
              figure. It is required to describe on AB a figure similar and similarly situated to
              CE.
            </p>
            <p className="mt-2">
              Join DF. On AB, construct angle GAB equal to angle C, and angle ABG equal to angle
              CDF. [I.23]
            </p>
            <p className="mt-2">
              Therefore the remaining angle CFD equals the remaining angle AGB. [I.32] So triangle
              AGB is equiangular to triangle CFD.
            </p>
            <p className="mt-2">
              Similarly, construct triangle BGH equiangular to triangle DFE on BG.
            </p>
            <p className="mt-2">
              Since the triangles are equiangular, by VI.4, the sides about the equal angles are
              proportional.
            </p>
            <p className="mt-2">
              Therefore KAB and LCDE have their angles severally equal and the sides about the
              equal angles proportional.
            </p>
            <p className="mt-2 font-medium">
              Therefore KAB is similar to LCDE, described on the given line AB.
            </p>
          </>
        }
      >
        <p>
          On a given straight line to describe a rectilinear figure similar and similarly situated
          to a given rectilinear figure.
        </p>
      </Proposition>

      <h2>Constructing Similar Polygons</h2>

      <p>
        This is a construction proposition: given any polygon and a line segment, Euclid shows how
        to construct a new polygon that is similar to the original, with the given line as one of
        its sides.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-lg h-52">
          {/* Original polygon (quadrilateral) */}
          <polygon
            points="50,150 100,80 170,90 180,160"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Diagonal dividing into triangles */}
          <line x1="50" y1="150" x2="170" y2="90" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          {/* Labels for original */}
          <text x="40" y="160" textAnchor="end" fill="#f59e0b" fontSize="10">C</text>
          <text x="100" y="70" textAnchor="middle" fill="#f59e0b" fontSize="10">D</text>
          <text x="180" y="85" textAnchor="start" fill="#f59e0b" fontSize="10">E</text>
          <text x="190" y="165" textAnchor="start" fill="#f59e0b" fontSize="10">F</text>
          <text x="115" y="180" textAnchor="middle" fill="#f59e0b" fontSize="11">Given figure</text>

          {/* Arrow */}
          <text x="215" y="120" textAnchor="middle" fill="#9ca3af" fontSize="20">→</text>

          {/* Similar polygon (larger) */}
          <polygon
            points="250,170 320,60 410,75 425,180"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Diagonal */}
          <line x1="250" y1="170" x2="410" y2="75" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" />
          {/* Given line highlighted */}
          <line x1="250" y1="170" x2="425" y2="180" stroke="#22c55e" strokeWidth="3" />
          {/* Labels for similar */}
          <text x="240" y="175" textAnchor="end" fill="#3b82f6" fontSize="10">A</text>
          <text x="320" y="50" textAnchor="middle" fill="#3b82f6" fontSize="10">G</text>
          <text x="420" y="65" textAnchor="start" fill="#3b82f6" fontSize="10">H</text>
          <text x="435" y="185" textAnchor="start" fill="#3b82f6" fontSize="10">B</text>
          <text x="340" y="195" textAnchor="middle" fill="#22c55e" fontSize="11">Given line AB</text>
        </svg>
      </div>

      <h3 className="mt-6">The Construction Method</h3>

      <p>
        Euclid's method relies on dividing any polygon into triangles, then constructing similar
        triangles on the given line:
      </p>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Step 1: Triangulate</h4>
          <p className="text-dark-300 mt-2">
            Draw diagonals from one vertex of the given polygon to divide it into triangles. Any
            n-sided polygon can be divided into (n-2) triangles.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Step 2: Copy Angles</h4>
          <p className="text-dark-300 mt-2">
            On the given line, construct angles equal to the angles of the first triangle using
            I.23 (copying an angle).
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Step 3: Build Successively</h4>
          <p className="text-dark-300 mt-2">
            Continue building similar triangles on the sides of the previous triangles until the
            entire similar polygon is constructed.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Why This Works</h3>

      <p>
        The key insight is that similar polygons can be decomposed into similar triangles. By VI.4,
        equiangular triangles have proportional sides. Since we copy all angles exactly, the
        resulting triangles are equiangular to the originals, and the entire polygon scales
        uniformly.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 180" className="w-72 h-44">
          {/* Small triangle */}
          <polygon
            points="40,140 90,60 120,140"
            fill="#f59e0b20"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Large similar triangle */}
          <polygon
            points="160,150 245,30 295,150"
            fill="#3b82f620"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Angle marks - small triangle */}
          <path d="M 50,140 Q 55,130 65,135" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 88,75 Q 95,80 90,90" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 110,140 Q 105,130 100,135" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Angle marks - large triangle */}
          <path d="M 175,150 Q 185,135 200,145" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 242,52 Q 255,60 248,75" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 280,150 Q 270,135 260,145" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Labels */}
          <text x="80" y="170" textAnchor="middle" fill="#f59e0b" fontSize="11">Original</text>
          <text x="227" y="170" textAnchor="middle" fill="#3b82f6" fontSize="11">Similar</text>
          {/* Similarity symbol */}
          <text x="140" y="100" textAnchor="middle" fill="#9ca3af" fontSize="16">~</text>
        </svg>
      </div>

      <h3 className="mt-6">Scale Factor</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          If the given line AB has length k times the corresponding side of the original figure,
          then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>All sides of the new figure are k times the corresponding original sides</li>
          <li>All angles remain exactly the same</li>
          <li>The area of the new figure is k² times the original area (by VI.19-20)</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold">Practical Applications</h4>
        <p className="text-dark-300 mt-2">
          This construction is fundamental to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Architecture:</strong> Scaling blueprints to actual building dimensions</li>
          <li><strong>Cartography:</strong> Creating maps at different scales</li>
          <li><strong>Manufacturing:</strong> Producing models and prototypes</li>
          <li><strong>Computer graphics:</strong> Scaling vector images without distortion</li>
        </ul>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-amber-500/30">
        <h4 className="text-amber-400 font-semibold">Key Dependencies</h4>
        <p className="text-dark-300 mt-2">
          This construction relies on:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>I.23: Copying an angle</li>
          <li>I.32: Angle sum of a triangle equals two right angles</li>
          <li>VI.4: Equiangular triangles have proportional sides</li>
          <li>Definition VI.1: Similar figures have equal angles and proportional sides</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
