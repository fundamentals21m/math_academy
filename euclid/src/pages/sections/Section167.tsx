import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section167() {
  return (
    <LessonLayout sectionId={167}>
      <Proposition
        title="Proposition VI.22"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em> be four proportional straight lines,
              so that, as <em>A</em> is to <em>B</em>, so is <em>C</em> to <em>D</em>; and let there
              be described on <em>A</em>, <em>B</em> the similar and similarly situated rectilinear
              figures <em>EAF</em>, <em>GBH</em>, and on <em>C</em>, <em>D</em> the similar and
              similarly situated rectilinear figures <em>KCL</em>, <em>MDN</em>.
            </p>
            <p className="mt-2">
              I say that, as <em>EAF</em> is to <em>GBH</em>, so is <em>KCL</em> to <em>MDN</em>.
            </p>
            <p className="mt-2">
              For let there be taken a third proportional <em>P</em> to <em>A</em>, <em>B</em>, and
              a third proportional <em>Q</em> to <em>C</em>, <em>D</em>. [VI.11]
            </p>
            <p className="mt-2">
              Then, since as <em>A</em> is to <em>B</em>, so is <em>C</em> to <em>D</em>, and as{' '}
              <em>B</em> is to <em>P</em>, so is <em>D</em> to <em>Q</em>, therefore, ex aequali, as{' '}
              <em>A</em> is to <em>P</em>, so is <em>C</em> to <em>Q</em>. [V.22]
            </p>
            <p className="mt-2">
              But, as <em>A</em> is to <em>P</em>, so is the figure <em>EAF</em> to the figure{' '}
              <em>GBH</em>, and, as <em>C</em> is to <em>Q</em>, so is the figure <em>KCL</em> to the
              figure <em>MDN</em>. [VI.19, Por.]
            </p>
            <p className="mt-2 font-medium">
              Therefore also, as <em>EAF</em> is to <em>GBH</em>, so is <em>KCL</em> to <em>MDN</em>.
              [V.11]
            </p>
            <p className="mt-4">
              [The converse is proved similarly using the preceding propositions in reverse.]
            </p>
          </>
        }
      >
        <p>
          If four straight lines be proportional, the rectilinear figures similar and similarly
          described upon them will also be proportional; and, if the rectilinear figures similar
          and similarly described upon them be proportional, the straight lines will themselves
          also be proportional.
        </p>
      </Proposition>

      <h2>Similar Figures on Proportional Lines</h2>

      <p>
        This proposition establishes a fundamental relationship: proportionality of lines extends to
        proportionality of similar figures constructed on those lines. The ratio of the figures
        equals the duplicate ratio of the lines.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 280" className="w-full max-w-md">
          {/* First pair of similar figures */}
          <g>
            {/* Line A with triangle EAF */}
            <line x1="30" y1="80" x2="110" y2="80" stroke="#f59e0b" strokeWidth="2" />
            <polygon
              points="30,80 110,80 70,30"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <text x="65" y="95" fill="#f59e0b" fontSize="10">A</text>
            <text x="65" y="55" fill="#3b82f6" fontSize="10">EAF</text>
          </g>

          <g>
            {/* Line B with triangle GBH (smaller) */}
            <line x1="140" y1="80" x2="200" y2="80" stroke="#f59e0b" strokeWidth="2" />
            <polygon
              points="140,80 200,80 170,45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <text x="165" y="95" fill="#f59e0b" fontSize="10">B</text>
            <text x="165" y="60" fill="#3b82f6" fontSize="10">GBH</text>
          </g>

          {/* Second pair of similar figures */}
          <g>
            {/* Line C with triangle KCL */}
            <line x1="30" y1="200" x2="130" y2="200" stroke="#f59e0b" strokeWidth="2" />
            <polygon
              points="30,200 130,200 80,140"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
            />
            <text x="75" y="215" fill="#f59e0b" fontSize="10">C</text>
            <text x="75" y="170" fill="#22c55e" fontSize="10">KCL</text>
          </g>

          <g>
            {/* Line D with triangle MDN (smaller) */}
            <line x1="160" y1="200" x2="235" y2="200" stroke="#f59e0b" strokeWidth="2" />
            <polygon
              points="160,200 235,200 197.5,157"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
            />
            <text x="192" y="215" fill="#f59e0b" fontSize="10">D</text>
            <text x="192" y="177" fill="#22c55e" fontSize="10">MDN</text>
          </g>

          {/* Proportion indicators */}
          <text x="280" y="70" fill="#94a3b8" fontSize="11">A : B = C : D</text>
          <text x="280" y="90" fill="#94a3b8" fontSize="11">implies</text>
          <text x="280" y="110" fill="#94a3b8" fontSize="11">EAF : GBH = KCL : MDN</text>
        </svg>
      </div>

      <h3>Key Insight</h3>

      <p>
        The proportion between similar figures follows from the duplicate ratio property (VI.19):
        similar figures on straight lines have the ratio of the squares of those lines. When
        lines are proportional, their squares maintain that proportionality.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-lg text-amber-400 font-mono mb-2">
          If A : B = C : D
        </p>
        <p className="text-lg text-amber-400 font-mono">
          Then A² : B² = C² : D²
        </p>
      </div>

      <h3 className="mt-6">Proof Structure</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Given A : B = C : D (four proportional lines)</li>
        <li>Find third proportionals: A : B = B : P and C : D = D : Q</li>
        <li>By ex aequali (V.22): A : P = C : Q</li>
        <li>By VI.19 porism: Figure(A) : Figure(B) = A : P</li>
        <li>Similarly: Figure(C) : Figure(D) = C : Q</li>
        <li>Therefore the figures are proportional</li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition V.11 (transitivity of proportions)</li>
        <li>Proposition V.22 (ex aequali for proportions)</li>
        <li>Proposition VI.11 (finding a third proportional)</li>
        <li>Proposition VI.19 and its porism (duplicate ratio of similar figures)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Application:</strong> This proposition underlies
          scaling arguments in architecture and engineering. If you scale a model by a factor k,
          all similar areas scale by k², and this scaling preserves proportional relationships
          between different components.
        </p>
      </div>
    </LessonLayout>
  );
}
