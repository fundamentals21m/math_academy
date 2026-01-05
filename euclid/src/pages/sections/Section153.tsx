import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section153() {
  return (
    <LessonLayout sectionId={153}>
      <Proposition
        title="Proposition VI.8"
      >
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30 mb-4">
          <p className="text-dark-200 italic">
            If in a right-angled triangle a perpendicular be drawn from the right angle to the base,
            the triangles adjoining the perpendicular are similar both to the whole and to one another.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Setup</h3>
        <p className="text-dark-300 mt-2">
          Consider a right-angled triangle ABC with the right angle at C. Drop a perpendicular
          CD from C to the hypotenuse AB. This creates two smaller triangles: ACD and BCD.
        </p>

        <h3 className="text-lg font-semibold mt-6">Diagram</h3>
        <svg viewBox="0 0 400 280" className="w-full max-w-lg mx-auto mt-4">
          {/* Main triangle ABC */}
          <polygon
            points="50,230 350,230 120,50"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Altitude from C to AB */}
          <line
            x1="120"
            y1="50"
            x2="120"
            y2="230"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeDasharray="5,3"
          />

          {/* Right angle marker at C */}
          <path
            d="M 110,50 L 110,60 L 120,60"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />

          {/* Right angle marker at D */}
          <path
            d="M 120,220 L 130,220 L 130,230"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />

          {/* Triangle ACD shading */}
          <polygon
            points="50,230 120,230 120,50"
            fill="#3b82f6"
            fillOpacity="0.15"
          />

          {/* Triangle BCD shading */}
          <polygon
            points="120,230 350,230 120,50"
            fill="#22c55e"
            fillOpacity="0.15"
          />

          {/* Labels */}
          <text x="35" y="240" fill="#f59e0b" fontSize="14" fontWeight="bold">A</text>
          <text x="355" y="240" fill="#f59e0b" fontSize="14" fontWeight="bold">B</text>
          <text x="120" y="40" fill="#f59e0b" fontSize="14" fontWeight="bold">C</text>
          <text x="125" y="245" fill="#60a5fa" fontSize="14" fontWeight="bold">D</text>

          {/* Triangle labels */}
          <text x="85" y="180" fill="#3b82f6" fontSize="11">ACD</text>
          <text x="180" y="180" fill="#22c55e" fontSize="11">BCD</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">The Three Similar Triangles</h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
            <h4 className="text-amber-400 font-semibold">Original</h4>
            <p className="text-dark-300 mt-2">Triangle ABC</p>
            <p className="text-dark-400 text-sm">The whole right triangle</p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-blue-500/20">
            <h4 className="text-blue-400 font-semibold">Left Triangle</h4>
            <p className="text-dark-300 mt-2">Triangle ACD</p>
            <p className="text-dark-400 text-sm">Similar to ABC</p>
          </div>
          <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/20">
            <h4 className="text-emerald-400 font-semibold">Right Triangle</h4>
            <p className="text-dark-300 mt-2">Triangle BCD</p>
            <p className="text-dark-400 text-sm">Similar to ABC</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why They Are Similar</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Triangle ACD ~ Triangle ABC:</strong>
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Both have a right angle (at D and at C respectively)</li>
            <li>They share angle A</li>
            <li>Therefore all three angles match (AA similarity)</li>
          </ul>

          <p className="text-dark-300 mt-4">
            <strong>Triangle BCD ~ Triangle ABC:</strong>
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Both have a right angle (at D and at C respectively)</li>
            <li>They share angle B</li>
            <li>Therefore all three angles match (AA similarity)</li>
          </ul>

          <p className="text-dark-300 mt-4">
            <strong>Triangle ACD ~ Triangle BCD:</strong>
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Both are similar to ABC</li>
            <li>Therefore they are similar to each other (transitivity)</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Key Proportions</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            From the similarity of these triangles, we get powerful relationships:
          </p>
          <ul className="list-disc list-inside mt-3 text-dark-300">
            <li>AD : CD = CD : BD (the altitude is the geometric mean of the segments)</li>
            <li>AD : AC = AC : AB (leg AC is geometric mean of hypotenuse and adjacent segment)</li>
            <li>BD : BC = BC : AB (leg BC is geometric mean of hypotenuse and adjacent segment)</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Formulation</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If h is the altitude to the hypotenuse, and p and q are the segments it creates:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>h² = p · q (altitude squared equals product of segments)</li>
            <li>a² = p · c (leg squared equals its adjacent segment times hypotenuse)</li>
            <li>b² = q · c (leg squared equals its adjacent segment times hypotenuse)</li>
          </ul>
          <p className="text-dark-300 mt-3">
            Note: Adding the last two equations gives a² + b² = pc + qc = c(p + q) = c²,
            which is the Pythagorean theorem!
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Applications</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition is fundamental to:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Constructing geometric means (used in VI.13)</li>
            <li>Proving the Pythagorean theorem (an alternative proof)</li>
            <li>Solving geometric problems involving right triangles</li>
            <li>Finding the geometric mean of two lengths using a semicircle</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Historical Note</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition is sometimes called the "Right Triangle Altitude Theorem" or
            the "Geometric Mean Altitude Theorem." It provides one of the most elegant
            connections between similarity and the Pythagorean theorem, showing that
            they are intimately related concepts.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
