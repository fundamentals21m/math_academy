import { LessonLayout } from '@/components/layout/LessonLayout';

export default function Section102() {
  return (
    <LessonLayout sectionId={102}>
      <h2>Book IV: Inscribed and Circumscribed Figures</h2>

      <p>
        Book IV focuses on the construction of regular polygons inscribed in and circumscribed about
        circles. This book contains some of the most elegant constructions in the Elements, including
        the famous construction of the regular pentagon.
      </p>

      <h3 className="mt-6">Definitions</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 1</h4>
          <p className="text-dark-200 mt-2">
            A rectilinear figure is said to be <strong>inscribed</strong> in a rectilinear figure
            when the respective angles of the inscribed figure lie on the respective sides of that
            in which it is inscribed.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 2</h4>
          <p className="text-dark-200 mt-2">
            Similarly a figure is said to be <strong>circumscribed</strong> about a figure when the
            respective sides of the circumscribed figure pass through the respective angles of that
            about which it is circumscribed.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 3</h4>
          <p className="text-dark-200 mt-2">
            A rectilinear figure is said to be <strong>inscribed in a circle</strong> when each
            angle of the inscribed figure lies on the circumference of the circle.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 4</h4>
          <p className="text-dark-200 mt-2">
            A rectilinear figure is said to be <strong>circumscribed about a circle</strong> when
            each side of the circumscribed figure touches the circumference of the circle.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 5</h4>
          <p className="text-dark-200 mt-2">
            Similarly a <strong>circle is said to be inscribed in a figure</strong> when the
            circumference of the circle touches each side of the figure in which it is inscribed.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 6</h4>
          <p className="text-dark-200 mt-2">
            A <strong>circle is said to be circumscribed about a figure</strong> when the
            circumference of the circle passes through each angle of the figure about which it is
            circumscribed.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 7</h4>
          <p className="text-dark-200 mt-2">
            A straight line is said to be <strong>fitted into a circle</strong> when its extremities
            are on the circumference of the circle.
          </p>
        </div>
      </div>

      <h3 className="mt-8">Visualizing Inscribed and Circumscribed</h3>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-center text-amber-400 mb-2">Inscribed in Circle</h4>
          <svg viewBox="0 0 200 200" className="w-full h-40">
            <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
            {/* Inscribed triangle - vertices ON the circle */}
            <polygon
              points="100,30 170,140 30,140"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <circle cx="100" cy="30" r="4" fill="#3b82f6" />
            <circle cx="170" cy="140" r="4" fill="#3b82f6" />
            <circle cx="30" cy="140" r="4" fill="#3b82f6" />
          </svg>
          <p className="text-sm text-dark-300 text-center">
            Triangle inscribed in circle (vertices on circumference)
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-center text-amber-400 mb-2">Circumscribed about Circle</h4>
          <svg viewBox="0 0 200 200" className="w-full h-40">
            <circle cx="100" cy="100" r="50" fill="none" stroke="#f59e0b" strokeWidth="2" />
            {/* Circumscribed triangle - sides TANGENT to circle */}
            <polygon
              points="100,13 186,150 14,150"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
            />
          </svg>
          <p className="text-sm text-dark-300 text-center">
            Triangle circumscribed about circle (sides tangent)
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-center text-amber-400 mb-2">Circle Inscribed in Triangle</h4>
          <svg viewBox="0 0 200 200" className="w-full h-40">
            <polygon
              points="100,20 180,170 20,170"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            {/* Incircle - tangent to all sides */}
            <circle cx="100" cy="120" r="40" fill="none" stroke="#f59e0b" strokeWidth="2" />
          </svg>
          <p className="text-sm text-dark-300 text-center">
            Circle inscribed in triangle (incircle)
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-center text-amber-400 mb-2">Circle Circumscribed about Triangle</h4>
          <svg viewBox="0 0 200 200" className="w-full h-40">
            <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <polygon
              points="100,30 170,140 30,140"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <circle cx="100" cy="30" r="3" fill="#3b82f6" />
            <circle cx="170" cy="140" r="3" fill="#3b82f6" />
            <circle cx="30" cy="140" r="3" fill="#3b82f6" />
          </svg>
          <p className="text-sm text-dark-300 text-center">
            Circle circumscribed about triangle (circumcircle)
          </p>
        </div>
      </div>

      <h3 className="mt-8">Overview of Book IV</h3>

      <p>Book IV contains 16 propositions organized as follows:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>IV.1:</strong> Fitting a chord equal to a given line
        </li>
        <li>
          <strong>IV.2-5:</strong> Triangles and circles (inscribing/circumscribing)
        </li>
        <li>
          <strong>IV.6-9:</strong> Squares and circles (inscribing/circumscribing)
        </li>
        <li>
          <strong>IV.10:</strong> Constructing the "golden triangle" (key to the pentagon)
        </li>
        <li>
          <strong>IV.11-14:</strong> Pentagons and circles (inscribing/circumscribing)
        </li>
        <li>
          <strong>IV.15:</strong> Inscribing a regular hexagon
        </li>
        <li>
          <strong>IV.16:</strong> Inscribing a regular 15-gon
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Golden Ratio Connection:</strong> The construction
          of the regular pentagon (IV.11) requires the golden ratio from II.11. This connection
          between algebraic and geometric properties is one of the most beautiful results in the
          Elements.
        </p>
      </div>
    </LessonLayout>
  );
}
