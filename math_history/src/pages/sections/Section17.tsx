import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2>Potential vs. Actual Infinity</h2>

      <p>
        The ancient Greeks grappled with a fundamental question that would shape
        mathematics for millennia: <em>What is infinity?</em> Their answers,
        particularly the distinction between <strong>potential</strong> and{' '}
        <strong>actual</strong> infinity, dominated mathematical thought until
        the 19th century.
      </p>

      <h3>The Two Concepts of Infinity</h3>

      <Definition title="Potential Infinity">
        <p>
          <strong>Potential infinity</strong> refers to a process that can be
          continued indefinitely. It is never "complete"—you can always go further.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The natural numbers: you can always add 1 more</li>
          <li>Division: a line can always be divided further</li>
          <li>Inscribed polygons: you can always double the sides</li>
        </ul>
      </Definition>

      <Definition title="Actual Infinity">
        <p>
          <strong>Actual infinity</strong> treats infinity as a completed totality—
          something that exists as a whole, all at once.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The set of all natural numbers, considered as one object</li>
          <li>A line containing infinitely many points</li>
          <li>An infinite decimal expansion, fully determined</li>
        </ul>
      </Definition>

      <h3>Aristotle's View</h3>

      <p>
        <strong>Aristotle</strong> (384-322 BCE) profoundly influenced the Greek
        attitude toward infinity. He argued that actual infinity leads to paradoxes
        and should be rejected:
      </p>

      <Theorem title="Aristotle on Infinity">
        <p>
          "The infinite has a potential existence... There will not be an actual
          infinite... The infinite is potential, never actual."
        </p>
        <p className="mt-2 text-dark-400">
          — Aristotle, <em>Physics</em>, Book III
        </p>
      </Theorem>

      <Example title="Aristotle's Arguments">
        <p>Aristotle gave several arguments against actual infinity:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Physical:</strong> An actually infinite body couldn't exist,
            because it would have no boundary and fill all of space
          </li>
          <li>
            <strong>Logical:</strong> You cannot traverse an actual infinity,
            so an infinite past is impossible (Zeno's paradoxes)
          </li>
          <li>
            <strong>Mathematical:</strong> Infinite quantities can't be compared
            or manipulated like finite ones
          </li>
        </ul>
      </Example>

      <h3>Greek Mathematics and Potential Infinity</h3>

      <p>
        Greek mathematicians carefully avoided actual infinity. Consider how
        Euclid's famous theorem is worded:
      </p>

      <Theorem title="Euclid's Theorem on Primes">
        <p>
          <strong>Not:</strong> "There are infinitely many primes" (actual infinity)
        </p>
        <p className="mt-2">
          <strong>Instead:</strong> "Prime numbers are more than any assigned
          multitude of prime numbers" (potential infinity)
        </p>
        <p className="mt-2 text-dark-400">
          Given any finite collection of primes, you can always find another—
          but the collection is never "complete."
        </p>
      </Theorem>

      {/* Visualization comparing the two concepts */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Potential vs. Actual Infinity
        </h4>
        <svg viewBox="0 0 500 200" className="w-full h-auto">
          {/* Potential infinity (left) */}
          <g transform="translate(125, 100)">
            <text x="0" y="-70" fill="#c7d2fe" fontSize="13" textAnchor="middle" fontWeight="bold">
              Potential Infinity
            </text>
            
            {/* Growing sequence of dots */}
            <circle cx="-80" cy="0" r="6" fill="#4f46e5"/>
            <circle cx="-50" cy="0" r="6" fill="#4f46e5"/>
            <circle cx="-20" cy="0" r="6" fill="#4f46e5"/>
            <circle cx="10" cy="0" r="6" fill="#4f46e5"/>
            <circle cx="40" cy="0" r="5" fill="#4f46e5" fillOpacity="0.7"/>
            <circle cx="60" cy="0" r="4" fill="#4f46e5" fillOpacity="0.5"/>
            <circle cx="75" cy="0" r="3" fill="#4f46e5" fillOpacity="0.3"/>
            
            {/* Arrow indicating continuation */}
            <path d="M 85 0 L 100 0" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)"/>
            
            <text x="0" y="35" fill="#94a3b8" fontSize="10" textAnchor="middle">
              "Always more..."
            </text>
            <text x="0" y="50" fill="#94a3b8" fontSize="10" textAnchor="middle">
              Never complete
            </text>
          </g>
          
          {/* Actual infinity (right) */}
          <g transform="translate(375, 100)">
            <text x="0" y="-70" fill="#a7f3d0" fontSize="13" textAnchor="middle" fontWeight="bold">
              Actual Infinity
            </text>
            
            {/* Completed set (oval containing dots) */}
            <ellipse cx="0" cy="0" rx="90" ry="35" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2"/>
            
            {/* Many dots inside */}
            <circle cx="-60" cy="0" r="4" fill="#10b981"/>
            <circle cx="-40" cy="5" r="4" fill="#10b981"/>
            <circle cx="-20" cy="-5" r="4" fill="#10b981"/>
            <circle cx="0" cy="0" r="4" fill="#10b981"/>
            <circle cx="20" cy="5" r="4" fill="#10b981"/>
            <circle cx="40" cy="-5" r="4" fill="#10b981"/>
            <circle cx="60" cy="0" r="4" fill="#10b981"/>
            <text x="0" y="3" fill="#10b981" fontSize="8">...</text>
            
            <text x="0" y="55" fill="#94a3b8" fontSize="10" textAnchor="middle">
              All at once
            </text>
            <text x="0" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">
              A completed totality
            </text>
          </g>
          
          {/* Arrow marker definition */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#818cf8"/>
            </marker>
          </defs>
        </svg>
      </div>

      <h3>The Method of Exhaustion Revisited</h3>

      <p>
        The method of exhaustion explicitly avoided actual infinity:
      </p>

      <Example title="Avoiding Actual Infinity">
        <p>
          When proving the area of a circle, Archimedes never said "take infinitely
          many polygons." Instead:
        </p>
        <blockquote className="border-l-4 border-primary-500 pl-4 my-4 text-dark-300 italic">
          "Given any positive difference ε, I can find a polygon whose area
          differs from the claimed value by less than ε."
        </blockquote>
        <p>
          This is purely potential: for any ε you specify, I can respond. No
          actual infinity is invoked.
        </p>
      </Example>

      <Callout type="note">
        <strong>Modern Limits:</strong> The epsilon-delta definition of limits
        in calculus is essentially a formalization of this Greek approach. We
        never say "as x approaches infinity"; we say "for any ε {'>'} 0, there
        exists δ {'>'} 0 such that..."
      </Callout>

      <h3>Problems with Avoiding Actual Infinity</h3>

      <p>
        While philosophically careful, the rejection of actual infinity created
        difficulties:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Irrational numbers:</strong> Is <InlineMath>\sqrt{2}</InlineMath>
          a number, or just a process for approximation?
        </li>
        <li>
          <strong>Infinite series:</strong> Does{' '}
          <InlineMath>1/2 + 1/4 + 1/8 + \cdots</InlineMath> <em>equal</em> 1,
          or just <em>approach</em> 1?
        </li>
        <li>
          <strong>The continuum:</strong> Is a line composed of points, or
          is it fundamentally different from any collection of points?
        </li>
      </ul>

      <h3>The Medieval Debate</h3>

      <p>
        Medieval philosophers and mathematicians continued the debate:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">For Potential Only</h4>
          <p className="text-sm text-dark-300">
            <strong>Thomas Aquinas</strong> argued that only God is actually
            infinite; created things can only be potentially infinite. An
            actual infinity of created objects would rival God's infinity.
          </p>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">For Actual Infinity</h4>
          <p className="text-sm text-dark-300">
            <strong>Gregory of Rimini</strong> (14th c.) argued that God, being
            omnipotent, <em>could</em> create actually infinite collections.
            He distinguished different "sizes" of infinity!
          </p>
        </div>
      </div>

      <h3>Galileo's Paradox</h3>

      <p>
        <strong>Galileo</strong> (1564-1642) discovered a troubling paradox that
        seemed to show actual infinity was incoherent:
      </p>

      <Example title="Galileo's Paradox">
        <p>
          Consider the natural numbers and the perfect squares:
        </p>
        <MathBlock>
          {`\\begin{array}{ccccccc}
1 & 2 & 3 & 4 & 5 & 6 & \\cdots \\\\
\\updownarrow & \\updownarrow & \\updownarrow & \\updownarrow & \\updownarrow & \\updownarrow & \\\\
1 & 4 & 9 & 16 & 25 & 36 & \\cdots
\\end{array}`}
        </MathBlock>
        <p className="mt-2">
          Each natural number corresponds to exactly one square, so there are
          "equally many" of each. But the squares are a <em>proper subset</em>
          of the naturals—there should be fewer!
        </p>
      </Example>

      <p>
        Galileo concluded that concepts like "equal," "greater," and "less" simply
        don't apply to infinite collections.
      </p>

      <Callout type="info">
        <strong>Looking Ahead:</strong> In the 19th century, Georg Cantor would
        resolve Galileo's paradox by embracing it. He defined infinite sets as
        precisely those that can be put in one-to-one correspondence with a proper
        subset. This bold move opened the door to a rigorous theory of actual
        infinity and revolutionized mathematics.
      </Callout>

      <h3>Legacy</h3>

      <p>
        The Greek distinction between potential and actual infinity shaped
        mathematical thought for over two thousand years:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Calculus</strong> initially used potential infinity through limits
        </li>
        <li>
          <strong>Cantor's set theory</strong> (1870s-80s) finally legitimized
          actual infinity
        </li>
        <li>
          <strong>Constructive mathematics</strong> today still debates whether
          actual infinity is meaningful
        </li>
      </ul>

      <SectionQuiz
        sectionId={17}
        questions={quizMap[17] || []}
        title="Potential vs. Actual Infinity Quiz"
      />
    </LessonLayout>
  );
}
