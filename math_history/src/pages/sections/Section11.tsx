import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Prime Numbers</h2>

      <p>
        The ancient Greeks recognized that certain numbers have a special
        property: they cannot be broken down into smaller factors. These
        <strong> prime numbers</strong> are the fundamental building blocks
        of arithmetic, and understanding them was one of the great achievements
        of Greek mathematics.
      </p>

      <h3>What is a Prime?</h3>

      <Definition title="Prime Number">
        <p>
          A <strong>prime number</strong> is an integer <InlineMath>p &gt; 1</InlineMath>
          whose only positive divisors are 1 and <InlineMath>p</InlineMath> itself.
        </p>
        <p className="mt-2">
          An integer <InlineMath>n &gt; 1</InlineMath> that is not prime is called
          <strong> composite</strong>.
        </p>
      </Definition>

      <p>
        The first few primes are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...
      </p>

      <Callout type="note">
        <strong>Why 1 is not prime:</strong> The Greeks considered 1 to be
        neither prime nor composite—it's a "unit." Modern convention follows
        this, primarily because including 1 as prime would break the uniqueness
        of prime factorization.
      </Callout>

      <h3>The Sieve of Eratosthenes</h3>

      <p>
        <strong>Eratosthenes</strong> (c. 276-194 BCE), librarian at Alexandria,
        devised an elegant method for finding all primes up to a given limit.
      </p>

      <Example title="The Sieve Method">
        <p>To find all primes up to 30:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Write numbers 2 through 30</li>
          <li>Circle 2 (prime); cross out all multiples of 2</li>
          <li>Circle 3 (prime); cross out all multiples of 3</li>
          <li>5 is next uncrossed—circle it; cross out multiples of 5</li>
          <li>Since <InlineMath>{'\\sqrt{30} < 6'}</InlineMath>, we're done</li>
        </ol>
        <p className="mt-2">
          Remaining: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
        </p>
      </Example>

      {/* Interactive SVG visualization of the sieve */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Sieve of Eratosthenes (1-50)
        </h4>
        <svg viewBox="0 0 500 220" className="w-full h-auto">
          {/* Generate grid of numbers 1-50 */}
          {Array.from({ length: 50 }, (_, i) => {
            const num = i + 1;
            const row = Math.floor(i / 10);
            const col = i % 10;
            const x = 25 + col * 48;
            const y = 30 + row * 40;
            
            // Determine if prime
            const isPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47].includes(num);
            const isOne = num === 1;
            
            return (
              <g key={num}>
                <rect
                  x={x - 18}
                  y={y - 15}
                  width={36}
                  height={28}
                  rx={4}
                  fill={isPrime ? '#4f46e5' : isOne ? '#374151' : '#1f2937'}
                  fillOpacity={isPrime ? 0.6 : 0.5}
                  stroke={isPrime ? '#818cf8' : '#4b5563'}
                  strokeWidth={isPrime ? 2 : 1}
                />
                <text
                  x={x}
                  y={y + 5}
                  fill={isPrime ? '#e0e7ff' : isOne ? '#6b7280' : '#9ca3af'}
                  fontSize="14"
                  textAnchor="middle"
                  fontWeight={isPrime ? 'bold' : 'normal'}
                  style={{ textDecoration: !isPrime && !isOne ? 'line-through' : 'none' }}
                >
                  {num}
                </text>
              </g>
            );
          })}
          
          {/* Legend */}
          <rect x="20" y="195" width="20" height="14" rx="2" fill="#4f46e5" fillOpacity="0.6" stroke="#818cf8" strokeWidth="2"/>
          <text x="48" y="206" fill="#94a3b8" fontSize="11">Prime</text>
          
          <rect x="120" y="195" width="20" height="14" rx="2" fill="#1f2937" stroke="#4b5563"/>
          <text x="148" y="206" fill="#94a3b8" fontSize="11">Composite (crossed out)</text>
          
          <rect x="300" y="195" width="20" height="14" rx="2" fill="#374151" stroke="#4b5563"/>
          <text x="328" y="206" fill="#94a3b8" fontSize="11">Unit (1)</text>
        </svg>
      </div>

      <h3>Euclid's Proof of Infinitely Many Primes</h3>

      <p>
        One of the most beautiful results in all of mathematics appears in
        Book IX of Euclid's <em>Elements</em>:
      </p>

      <Theorem
        title="Theorem (Euclid, c. 300 BCE)"
        proof={
          <>
            <p>
              Suppose, for contradiction, that there are only finitely many
              primes: <InlineMath>p_1, p_2, \ldots, p_n</InlineMath>.
            </p>
            <p className="mt-2">
              Consider the number:
            </p>
            <MathBlock>
              {`N = p_1 \\cdot p_2 \\cdots p_n + 1`}
            </MathBlock>
            <p className="mt-2">
              Now, <InlineMath>N</InlineMath> must have a prime factor
              (either <InlineMath>N</InlineMath> itself if prime, or some
              prime dividing it). Call this prime <InlineMath>p</InlineMath>.
            </p>
            <p className="mt-2">
              But <InlineMath>p</InlineMath> cannot be any of{' '}
              <InlineMath>p_1, p_2, \ldots, p_n</InlineMath>, because
              dividing <InlineMath>N</InlineMath> by any of these leaves
              remainder 1.
            </p>
            <p className="mt-2">
              Therefore <InlineMath>p</InlineMath> is a prime not in our
              list—contradiction!
            </p>
          </>
        }
      >
        <p>There are infinitely many prime numbers.</p>
      </Theorem>

      <Example title="Euclid's Construction">
        <p>
          Starting with primes 2, 3, 5:
        </p>
        <MathBlock>
          {`N = 2 \\times 3 \\times 5 + 1 = 31`}
        </MathBlock>
        <p className="mt-2">
          Here <InlineMath>N = 31</InlineMath> is itself prime! But even if
          <InlineMath>N</InlineMath> weren't prime, its prime factors would
          be new primes not in our original list.
        </p>
        <p className="mt-2">
          Try <InlineMath>2 \times 3 \times 5 \times 7 + 1 = 211</InlineMath>
          (also prime), or <InlineMath>2 \times 3 \times 5 \times 7 \times 11 + 1 = 2311</InlineMath>
          (also prime).
        </p>
      </Example>

      <h3>Distribution of Primes</h3>

      <p>
        While the Greeks knew primes were infinite, the question of <em>how
        many</em> primes exist up to a given number remained mysterious for
        millennia.
      </p>

      <Definition title="Prime Counting Function">
        <p>
          The function <InlineMath>\pi(n)</InlineMath> counts the number of
          primes less than or equal to <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <div className="bg-dark-800 p-3 rounded text-center">
          <div className="text-primary-400 font-bold"><InlineMath>\pi(10)</InlineMath></div>
          <div className="text-2xl">4</div>
        </div>
        <div className="bg-dark-800 p-3 rounded text-center">
          <div className="text-primary-400 font-bold"><InlineMath>\pi(100)</InlineMath></div>
          <div className="text-2xl">25</div>
        </div>
        <div className="bg-dark-800 p-3 rounded text-center">
          <div className="text-primary-400 font-bold"><InlineMath>\pi(1000)</InlineMath></div>
          <div className="text-2xl">168</div>
        </div>
        <div className="bg-dark-800 p-3 rounded text-center">
          <div className="text-primary-400 font-bold"><InlineMath>\pi(10000)</InlineMath></div>
          <div className="text-2xl">1229</div>
        </div>
      </div>

      <Callout type="info">
        <strong>The Prime Number Theorem:</strong> In 1896, Hadamard and
        de la Vallée Poussin independently proved that{' '}
        <InlineMath>{'\\pi(n) \\approx n / \\ln n'}</InlineMath>. This means primes
        become rarer as numbers get larger, but not too rare—there's always
        another prime nearby.
      </Callout>

      <h3>Prime Gaps and Twin Primes</h3>

      <p>
        Primes often appear in clusters—pairs like (3, 5), (11, 13), (17, 19)
        differing by 2 are called <strong>twin primes</strong>.
      </p>

      <Example title="Twin Primes">
        <p>The first several twin prime pairs:</p>
        <p className="mt-2 font-mono">
          (3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73), ...
        </p>
        <p className="mt-2 text-dark-400">
          Are there infinitely many twin primes? This remains one of mathematics'
          greatest unsolved problems!
        </p>
      </Example>

      <Callout type="note">
        <strong>Recent Progress:</strong> In 2013, Yitang Zhang proved that
        there are infinitely many pairs of primes differing by at most
        70,000,000. This bound has since been reduced to 246 (assuming certain
        conjectures).
      </Callout>

      <SectionQuiz
        sectionId={11}
        questions={quizMap[11] || []}
        title="Prime Numbers Quiz"
      />
    </LessonLayout>
  );
}
