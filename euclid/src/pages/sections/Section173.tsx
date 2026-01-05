import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section173() {
  return (
    <LessonLayout sectionId={173}>
      <Proposition
        title="Proposition VI.28"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line, <em>C</em> the given rectilinear figure
              to which the figure to be applied to <em>AB</em> is required to be equal, and{' '}
              <em>D</em> the parallelogrammic figure to which the defect is required to be similar.
            </p>
            <p className="mt-2">
              Thus it is required to apply to the straight line <em>AB</em> a parallelogram equal
              to the given rectilinear figure <em>C</em> and deficient by a parallelogrammic
              figure similar to <em>D</em>.
            </p>
            <p className="mt-2">
              Let <em>AB</em> be bisected at the point <em>E</em>, and let <em>EBFG</em> be
              described on <em>EB</em> similar and similarly situated to <em>D</em>; [VI.18] and
              let the parallelogram <em>AG</em> be completed.
            </p>
            <p className="mt-2">
              If then <em>AG</em> is equal to <em>C</em>, that which was enjoined will have been
              done; for there has been applied to the straight line <em>AB</em> the parallelogram{' '}
              <em>AG</em> equal to the given rectilinear figure <em>C</em> and deficient by a
              parallelogrammic figure <em>GB</em> similar to <em>D</em>.
            </p>
            <p className="mt-2">
              But, if not, let <em>HE</em> be greater than <em>C</em>. Now <em>HE</em> is equal
              to <em>GB</em>; therefore <em>GB</em> is also greater than <em>C</em>.
            </p>
            <p className="mt-2">
              Let <em>KLMN</em> be constructed at once equal to the excess by which <em>GB</em>{' '}
              is greater than <em>C</em>, and similar and similarly situated to <em>D</em>. [VI.25]
            </p>
            <p className="mt-2">
              But <em>D</em> is similar to <em>GB</em>; therefore <em>KM</em> is also similar to{' '}
              <em>GB</em>. [VI.21]
            </p>
            <p className="mt-2">
              Let, then, <em>KL</em> correspond to <em>GE</em>, and <em>LM</em> to <em>GF</em>.
            </p>
            <p className="mt-2">
              Now, since <em>GB</em> is equal to <em>C</em>, <em>KM</em>, therefore <em>GB</em>{' '}
              is greater than <em>KM</em>; therefore also <em>GE</em> is greater than <em>KL</em>,
              and <em>GF</em> than <em>LM</em>.
            </p>
            <p className="mt-2">
              Let <em>GO</em> be made equal to <em>KL</em>, and <em>GP</em> equal to <em>LM</em>;
              and let the parallelogram <em>OGPQ</em> be completed; therefore it is equal and
              similar to <em>KM</em>.
            </p>
            <p className="mt-2">
              Therefore <em>GQ</em> is also similar to <em>GB</em>; [VI.21] therefore <em>GQ</em>{' '}
              is about the same diameter with <em>GB</em>. [VI.26]
            </p>
            <p className="mt-2">
              Let <em>GQB</em> be their diameter, and let the figure be described.
            </p>
            <p className="mt-2">
              Then, since <em>BG</em> is equal to <em>C</em>, <em>KM</em>, and in them <em>GQ</em>{' '}
              is equal to <em>KM</em>, therefore the remainder, the gnomon <em>UWV</em>, is equal
              to the remainder <em>C</em>.
            </p>
            <p className="mt-2">
              And, since <em>PR</em> is equal to <em>OS</em>, let <em>QB</em> be added to each;
              therefore the whole <em>PB</em> is equal to the whole <em>OB</em>.
            </p>
            <p className="mt-2">
              But <em>OB</em> is equal to <em>TE</em>, since the side <em>AE</em> is also equal
              to the side <em>EB</em>; [I.36] therefore <em>TE</em> is also equal to <em>PB</em>.
            </p>
            <p className="mt-2">
              Let <em>OS</em> be added to each; therefore the whole <em>TS</em> is equal to the
              whole, the gnomon <em>VWU</em>.
            </p>
            <p className="mt-2 font-medium">
              But the gnomon <em>VWU</em> was proved equal to <em>C</em>; therefore <em>TS</em>{' '}
              is also equal to <em>C</em>. Therefore to the given straight line <em>AB</em> there
              has been applied the parallelogram <em>ST</em> equal to the given rectilinear
              figure <em>C</em> and deficient by the parallelogrammic figure <em>QB</em> which is
              similar to <em>D</em>.
            </p>
          </>
        }
      >
        <p>
          To a given straight line to apply a parallelogram equal to a given rectilinear figure
          and deficient by a parallelogrammic figure similar to a given one: thus the given
          rectilinear figure must not be greater than the parallelogram described on the half of
          the straight line and similar to the defect.
        </p>
      </Proposition>

      <h2>Application of Areas with Similar Defect</h2>

      <p>
        This proposition solves a complex construction problem: given a line AB and a figure C,
        construct a parallelogram along part of AB that equals C in area, with the remaining
        part (the defect) similar to a given parallelogram D. The crucial condition is that C
        must not exceed the maximum possible area (given by VI.27).
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 240" className="w-full max-w-lg">
          {/* Given elements */}
          <g>
            {/* Given line AB */}
            <line x1="40" y1="60" x2="200" y2="60" stroke="#f59e0b" strokeWidth="2" />
            <text x="35" y="55" fill="#f59e0b" fontSize="10">A</text>
            <text x="195" y="55" fill="#f59e0b" fontSize="10">B</text>
            <text x="100" y="80" fill="#94a3b8" fontSize="9">Given line</text>

            {/* Given figure C */}
            <polygon
              points="230,40 280,40 280,75 230,75"
              fill="rgba(239, 68, 68, 0.2)"
              stroke="#ef4444"
              strokeWidth="1.5"
            />
            <text x="248" y="62" fill="#ef4444" fontSize="10">C</text>
            <text x="230" y="90" fill="#94a3b8" fontSize="9">Given area</text>

            {/* Given shape D for defect */}
            <polygon
              points="310,35 360,35 370,80 320,80"
              fill="rgba(168, 85, 247, 0.15)"
              stroke="#a855f7"
              strokeWidth="1.5"
            />
            <text x="335" y="62" fill="#a855f7" fontSize="10">D</text>
            <text x="305" y="95" fill="#94a3b8" fontSize="9">Defect shape</text>
          </g>

          {/* Construction result */}
          <g transform="translate(0, 100)">
            {/* Base line */}
            <line x1="40" y1="100" x2="360" y2="100" stroke="#f59e0b" strokeWidth="2" />
            <text x="35" y="120" fill="#f59e0b" fontSize="10">A</text>
            <text x="355" y="120" fill="#f59e0b" fontSize="10">B</text>

            {/* Midpoint E */}
            <circle cx="200" cy="100" r="3" fill="#94a3b8" />
            <text x="195" y="120" fill="#94a3b8" fontSize="10">E</text>

            {/* Applied parallelogram ST (equals C) */}
            <polygon
              points="40,100 260,100 280,40 60,40"
              fill="rgba(34, 197, 94, 0.2)"
              stroke="#22c55e"
              strokeWidth="2"
            />
            <text x="140" y="75" fill="#22c55e" fontSize="11">ST = C</text>

            {/* Defect QB (similar to D) */}
            <polygon
              points="260,100 360,100 380,40 280,40"
              fill="rgba(168, 85, 247, 0.15)"
              stroke="#a855f7"
              strokeWidth="2"
              strokeDasharray="5"
            />
            <text x="300" y="75" fill="#a855f7" fontSize="10">QB ~ D</text>
          </g>
        </svg>
      </div>

      <h3>The Necessity Condition</h3>

      <p>
        The proposition includes a crucial constraint: <em>"the given rectilinear figure must
        not be greater than the parallelogram described on the half of the straight line and
        similar to the defect."</em>
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-mono text-center">
          Area(C) ≤ Area(parallelogram on AB/2 similar to D)
        </p>
      </div>

      <p className="mt-4">
        This follows from VI.27: the maximum area for such an applied parallelogram occurs when
        it's on the half-line. If C exceeds this maximum, the construction is impossible.
      </p>

      <h3 className="mt-6">Construction Method</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Bisect AB at E</li>
        <li>Construct parallelogram EBFG on EB similar to D</li>
        <li>Complete parallelogram AG</li>
        <li>If AG = C, we're done (lucky case)</li>
        <li>Otherwise, GB {'>'} C, so construct KM equal to (GB - C) and similar to D (using VI.25)</li>
        <li>Cut off GQ from GB equal and similar to KM</li>
        <li>The gnomon (GB minus GQ) equals C</li>
        <li>Rearrange to get the applied parallelogram TS equal to C</li>
      </ol>

      <h3 className="mt-6">The Gnomon Technique</h3>

      <p>
        The proof relies heavily on the <strong>gnomon</strong> - the L-shaped region remaining
        when a similar parallelogram is removed from a larger one. By carefully constructing
        the inner parallelogram GQ, Euclid ensures the gnomon has exactly the area C.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.36 (parallelograms on equal bases)</li>
        <li>Proposition VI.18 (constructing a similar figure on a given line)</li>
        <li>Proposition VI.21 (transitivity of similarity)</li>
        <li>Proposition VI.25 (constructing similar figure with given area)</li>
        <li>Proposition VI.26 (similar parallelograms about the diagonal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Algebraic Connection:</strong> This proposition is
          the geometric equivalent of solving a quadratic equation. The condition that C must
          not exceed the maximum corresponds to requiring the discriminant to be non-negative.
          The construction finds a length x such that x(AB - x) equals a given value (proportionally
          adjusted for the shape D) - exactly the form of a quadratic equation.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-dark-200">
          <strong className="text-blue-400">Historical Note:</strong> Together with VI.29
          (application with excess), this proposition allowed Greek mathematicians to solve
          what we now call quadratic equations geometrically. The "deficient" application
          corresponds to equations of the form ax - bx² = c, while VI.29 handles ax + bx² = c.
        </p>
      </div>
    </LessonLayout>
  );
}
