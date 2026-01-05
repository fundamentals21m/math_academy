import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section187() {
  return (
    <LessonLayout sectionId={187}>
      <Proposition
        title="Proposition VII.8"
        proof={
          <>
            <p>
              Let <em>AB</em> be a number, and let <em>CD</em> be the same part of <em>AB</em> that{' '}
              <em>AE</em> is of <em>CF</em>.
            </p>
            <p className="mt-2">
              I say that the remainder <em>EB</em> is also the same part of the remainder <em>FD</em>{' '}
              that <em>AB</em> is of <em>CD</em>.
            </p>
            <p className="mt-2">
              For, whatever part <em>AE</em> is of <em>CF</em>, the same part also let <em>EB</em> be
              of <em>CG</em>.
            </p>
            <p className="mt-2">
              Now since, whatever part <em>AE</em> is of <em>CF</em>, the same part also is <em>EB</em>{' '}
              of <em>CG</em>, therefore, whatever part <em>AE</em> is of <em>CF</em>, the same part
              also is <em>AB</em> of <em>GF</em>. [VII.5]
            </p>
            <p className="mt-2">
              But, whatever part <em>AE</em> is of <em>CF</em>, the same part also, by hypothesis, is{' '}
              <em>CD</em> of <em>AB</em>; therefore, whatever part <em>CD</em> is of <em>AB</em>, the
              same part also is <em>AB</em> of <em>GF</em>.
            </p>
            <p className="mt-2">
              Therefore <em>CD</em> measures <em>GF</em> the same number of times that <em>AB</em>{' '}
              measures <em>CD</em>.
            </p>
            <p className="mt-2">
              But <em>AB</em> measures <em>CD</em> once; therefore <em>GF</em> is equal to <em>CD</em>.
            </p>
            <p className="mt-2">
              Let <em>CF</em> be subtracted from each; therefore the remainder <em>GC</em> is equal
              to the remainder <em>FD</em>.
            </p>
            <p className="mt-2">
              Now since, whatever part <em>AE</em> is of <em>CF</em>, the same part also is <em>EB</em>{' '}
              of <em>GC</em>, while <em>GC</em> is equal to <em>FD</em>, therefore, whatever part{' '}
              <em>AE</em> is of <em>CF</em>, the same part also is <em>EB</em> of <em>FD</em>.
            </p>
            <p className="mt-2">
              But, whatever part <em>AE</em> is of <em>CF</em>, the same part also is <em>AB</em> of{' '}
              <em>CD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the remainder <em>EB</em> is also the same part of the remainder <em>FD</em>{' '}
              that the whole <em>AB</em> is of the whole <em>CD</em>.
            </p>
          </>
        }
      >
        <p>
          If a number be the same part of a number that a part subtracted is of a part subtracted,
          the remainder will also be the same part of the remainder that the whole is of the whole.
        </p>
      </Proposition>

      <h2>Subtraction Preserves Fractional Relationships</h2>

      <p>
        This proposition extends the idea from VII.7 to subtraction. If two numbers have the same
        fractional relationship as their parts, then their remainders maintain that same relationship.
        This is fundamental to arithmetic reasoning about proportions.
      </p>

      <h3 className="mt-6">Understanding the Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          In modern notation, if we have:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>AB = n times CD (so CD is 1/n of AB)</li>
          <li>AE = n times CF (so CF is 1/n of AE)</li>
        </ul>
        <p className="text-amber-400 font-mono text-center my-4">
          Then: (AB - AE) = n times (CD - CF)
        </p>
        <p className="text-dark-300">
          That is, the remainder EB is also n times the remainder FD.
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          {/* Number AB as units */}
          <g>
            <text x="20" y="30" fill="#f59e0b" fontSize="12" fontWeight="bold">AB (whole)</text>
            {/* 12 unit segments */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <rect
                key={`ab-${i}`}
                x={40 + i * 25}
                y={40}
                width="23"
                height="20"
                fill={i < 4 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(34, 197, 94, 0.3)'}
                stroke={i < 4 ? '#3b82f6' : '#22c55e'}
                strokeWidth="1"
              />
            ))}
            <text x="100" y="75" fill="#3b82f6" fontSize="10">AE</text>
            <text x="230" y="75" fill="#22c55e" fontSize="10">EB (remainder)</text>
          </g>

          {/* Number CD as units */}
          <g>
            <text x="20" y="110" fill="#f59e0b" fontSize="12" fontWeight="bold">CD (part)</text>
            {/* 4 unit segments (1/3 of 12) */}
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={`cd-${i}`}
                x={40 + i * 25}
                y={120}
                width="23"
                height="20"
                fill={i < 1 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(34, 197, 94, 0.3)'}
                stroke={i < 1 ? '#3b82f6' : '#22c55e'}
                strokeWidth="1"
              />
            ))}
            <text x="45" y="155" fill="#3b82f6" fontSize="10">CF</text>
            <text x="90" y="155" fill="#22c55e" fontSize="10">FD (rem)</text>
          </g>

          {/* Relationship arrows */}
          <path d="M 160 85 L 160 115" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3" />
          <text x="170" y="105" fill="#94a3b8" fontSize="10">1/3</text>

          {/* Key insight box */}
          <rect x="220" y="100" width="170" height="50" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="235" y="120" fill="#f59e0b" fontSize="10">CD = 1/3 of AB</text>
          <text x="235" y="138" fill="#22c55e" fontSize="10">FD = 1/3 of EB</text>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Let AB = 12 and CD = 4 (so CD is 1/3 of AB)
        </p>
        <p className="text-dark-300 mb-3">
          Let AE = 3 and CF = 1 (so CF is 1/3 of AE)
        </p>
        <p className="text-amber-400 mt-4">
          Then the remainders are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>EB = AB - AE = 12 - 3 = 9</li>
          <li>FD = CD - CF = 4 - 1 = 3</li>
        </ul>
        <p className="text-amber-400 mt-4">
          And indeed: FD = 3 is 1/3 of EB = 9
        </p>
      </div>

      <h3 className="mt-6">Modern Algebraic Form</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg mb-2">
          If b = a/n and d = c/n
        </p>
        <p className="text-amber-400 font-mono text-lg">
          Then (b - d) = (a - c)/n
        </p>
      </div>

      <p className="mt-4">
        This is equivalent to the distributive property of division over subtraction, which we take
        for granted today but Euclid proves from first principles.
      </p>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.5:</strong> If a number is a part of a number,
          and another is the same part of another, the sum is also the same part of the sum
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.3:</strong> Definition of "part" (a number
          measures another)
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Arithmetic Foundation:</strong> This proposition,
          together with VII.5, VII.6, and VII.7, establishes the basic arithmetic of fractions
          for addition and subtraction. These results are used throughout the rest of Book VII
          to develop the theory of divisibility, greatest common divisors, and prime numbers.
        </p>
      </div>
    </LessonLayout>
  );
}
