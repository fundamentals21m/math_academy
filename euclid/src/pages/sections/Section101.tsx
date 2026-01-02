import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section101() {
  return (
    <LessonLayout sectionId={101}>
      <Proposition
        title="Proposition III.37"
        proof={
          <>
            <p>
              Let a point <em>D</em> be taken outside the circle <em>ABC</em>; from <em>D</em> let
              two straight lines <em>DCA</em>, <em>DB</em> fall on the circle; let <em>DCA</em>{' '}
              cut the circle and <em>DB</em> meet it; and let the rectangle <em>AD</em>,{' '}
              <em>DC</em> be equal to the square on <em>DB</em>.
            </p>
            <p className="mt-2">
              I say that <em>DB</em> touches the circle <em>ABC</em>.
            </p>
            <p className="mt-2">
              For let <em>DE</em> be drawn touching the circle <em>ABC</em>; [III. 17] let the
              center of the circle <em>ABC</em> be taken, and let it be <em>F</em>; let{' '}
              <em>FE</em>, <em>FB</em>, <em>FD</em> be joined.
            </p>
            <p className="mt-2">
              Thus the angle <em>FED</em> is right. [III. 18]
            </p>
            <p className="mt-2">
              And, since <em>DE</em> touches the circle <em>ABC</em>, and <em>DCA</em> cuts it,
              the rectangle <em>AD</em>, <em>DC</em> is equal to the square on <em>DE</em>. [III. 36]
            </p>
            <p className="mt-2">
              But the rectangle <em>AD</em>, <em>DC</em> was also supposed equal to the square
              on <em>DB</em>; therefore the square on <em>DE</em> is equal to the square on{' '}
              <em>DB</em>; therefore <em>DE</em> is equal to <em>DB</em>.
            </p>
            <p className="mt-2">
              And <em>FE</em> is equal to <em>FB</em>; therefore the two sides <em>DE</em>,{' '}
              <em>EF</em> are equal to the two sides <em>DB</em>, <em>BF</em>; and <em>FD</em>{' '}
              is the common base of the triangles; therefore the angle <em>DEF</em> is equal to
              the angle <em>DBF</em>. [I. 8]
            </p>
            <p className="mt-2">
              But the angle <em>DEF</em> is right; therefore the angle <em>DBF</em> is also
              right.
            </p>
            <p className="mt-2">
              And <em>FB</em> produced is a diameter; and the straight line drawn at right
              angles to the diameter of a circle, from its extremity, touches the circle;
              [III. 16]
            </p>
            <p className="mt-2 font-medium">
              therefore <em>DB</em> touches the circle <em>ABC</em>.
            </p>
          </>
        }
      >
        <p>
          If a point be taken outside a circle, and from the point there fall on the circle two
          straight lines, if one of them cut the circle, and the other fall on it, and if the
          rectangle contained by the whole of the straight line which cuts the circle and the
          part of it outside the circle be equal to the square on the straight line which falls
          on the circle, the straight line which falls on the circle will touch the circle.
        </p>
      </Proposition>

      <h2>Converse of the Tangent-Secant Theorem</h2>

      <p>
        This is the converse of III.36. If a line from an external point satisfies the
        tangent-secant relation, it must be a tangent.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 260" className="w-80 h-66">
          {/* Circle */}
          <circle cx="180" cy="130" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* External point D */}
          <circle cx="50" cy="130" r="4" fill="#ef4444" />
          {/* Secant DCA */}
          <line x1="50" y1="130" x2="260" y2="130" stroke="#3b82f6" strokeWidth="2" />
          {/* Line DB meeting circle */}
          <line x1="50" y1="130" x2="130" y2="55" stroke="#22c55e" strokeWidth="2" />
          {/* Points on circle */}
          <circle cx="100" cy="130" r="3" fill="#3b82f6" />
          <circle cx="260" cy="130" r="3" fill="#3b82f6" />
          <circle cx="130" cy="55" r="4" fill="#22c55e" />
          {/* Question: is DB tangent? */}
          <text x="85" y="75" fill="#22c55e" fontSize="10">tangent?</text>
          {/* Labels */}
          <text x="40" y="145" fill="#ef4444" fontSize="11">D</text>
          <text x="90" y="145" fill="#3b82f6" fontSize="11">C</text>
          <text x="265" y="135" fill="#3b82f6" fontSize="11">A</text>
          <text x="125" y="45" fill="#22c55e" fontSize="11">B</text>
        </svg>
      </div>

      <h3>The Condition</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono mb-2">
          If DA × DC = DB²
        </p>
        <p className="text-xl text-amber-400 font-mono">
          then DB is tangent to the circle
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw the actual tangent <em>DE</em> from <em>D</em> (using III.17)</li>
        <li>By III.36, DA × DC = DE²</li>
        <li>Given: DA × DC = DB²</li>
        <li>Therefore DE² = DB², so DE = DB</li>
        <li>Triangles <em>DEF</em> and <em>DBF</em> are congruent (SSS)</li>
        <li>∠<em>DEF</em> = 90° (tangent ⊥ radius), so ∠<em>DBF</em> = 90°</li>
        <li>By III.16, <em>DB</em> is tangent</li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Proposition III.16 (perpendicular to diameter is tangent)</li>
        <li>Proposition III.17 (drawing a tangent)</li>
        <li>Proposition III.18 (tangent ⊥ radius)</li>
        <li>Proposition III.36 (tangent-secant theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Conclusion of Book III:</strong> This proposition
          completes Book III by showing that the tangent-secant relation characterizes tangent
          lines. The power of a point provides a complete criterion for tangency.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <h3 className="text-amber-400 font-semibold mb-2">Book III Summary</h3>
        <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
          <li>III.1-15: Properties of chords and their distance from center</li>
          <li>III.16-19: Tangent lines and their construction</li>
          <li>III.20-22: Inscribed angles and central angles</li>
          <li>III.23-25: Similar segments of circles</li>
          <li>III.26-30: Arcs, chords, and angles</li>
          <li>III.31: Angle in semicircle is right (Thales)</li>
          <li>III.32-34: Tangent-chord angles and constructions</li>
          <li>III.35-37: Power of a point (intersecting chords, tangent-secant)</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
