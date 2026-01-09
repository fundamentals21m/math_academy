import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Indian Mathematics</h2>

      <p>
        Ancient and medieval India produced some of the most profound advances
        in mathematics. Indian mathematicians invented the decimal place-value
        system, developed sophisticated algebra and trigonometry, and made
        remarkable contributions to number theory—often centuries before similar
        discoveries in Europe.
      </p>

      <h3>The Decimal System</h3>

      <p>
        Perhaps the greatest mathematical gift from India to the world is the
        <strong> decimal place-value system</strong> with zero as a number.
      </p>

      <Definition title="Place-Value Notation">
        <p>
          In place-value notation, a digit's value depends on its position.
          For example, in 352:
        </p>
        <MathBlock>
          {`352 = 3 \\times 10^2 + 5 \\times 10^1 + 2 \\times 10^0 = 300 + 50 + 2`}
        </MathBlock>
        <p className="mt-2">
          This system requires a symbol for "nothing in this place"—zero.
        </p>
      </Definition>

      <Callout type="note">
        <strong>Zero as a Number:</strong> The concept of zero as a number
        (not just a placeholder) was developed in India by the 7th century CE.
        <strong> Brahmagupta</strong> (598-668 CE) was the first to describe
        arithmetic operations involving zero and negative numbers.
      </Callout>

      <h3>Brahmagupta's Rules</h3>

      <p>
        Brahmagupta gave the first systematic treatment of zero and negative
        numbers in his <em>Brāhmasphuṭasiddhānta</em> (628 CE):
      </p>

      <Theorem title="Brahmagupta's Rules for Zero">
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>a + 0 = a</InlineMath> (zero is the additive identity)</li>
          <li><InlineMath>a - 0 = a</InlineMath></li>
          <li><InlineMath>a \times 0 = 0</InlineMath></li>
          <li><InlineMath>0 - a = -a</InlineMath> (introducing negative numbers)</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Brahmagupta struggled with <InlineMath>0 \div 0</InlineMath>, incorrectly
          claiming it equals 0. The true nature of this expression wasn't
          understood until calculus developed limits.
        </p>
      </Theorem>

      <h3>Negative Numbers</h3>

      <p>
        Indian mathematicians accepted negative numbers centuries before Europeans.
        Brahmagupta called positive numbers "fortunes" and negative numbers "debts":
      </p>

      <Example title="Brahmagupta's Rules for Signs">
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-dark-800 p-3 rounded">
            <p className="text-primary-400 font-semibold">Addition</p>
            <ul className="text-sm mt-1 space-y-1">
              <li>fortune + fortune = fortune</li>
              <li>debt + debt = debt</li>
              <li>fortune + debt = their difference</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-3 rounded">
            <p className="text-primary-400 font-semibold">Multiplication</p>
            <ul className="text-sm mt-1 space-y-1">
              <li>fortune × fortune = fortune</li>
              <li>debt × debt = fortune</li>
              <li>fortune × debt = debt</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-dark-400">
          In modern terms: <InlineMath>(+)(+) = +</InlineMath>,{' '}
          <InlineMath>(-)(-)  = +</InlineMath>,{' '}
          <InlineMath>(+)(-) = -</InlineMath>
        </p>
      </Example>

      <h3>The Kerala School</h3>

      <p>
        The <strong>Kerala School</strong> of mathematics (c. 1350-1550 CE) in
        South India made discoveries that anticipated calculus by centuries:
      </p>

      <Theorem title="Madhava's Series (c. 1400)">
        <p>
          <strong>Mādhava of Sangamagrāma</strong> discovered infinite series
          for trigonometric functions:
        </p>
        <MathBlock>
          {`\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots`}
        </MathBlock>
        <MathBlock>
          {`\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots`}
        </MathBlock>
        <p className="mt-2">
          These are now called the Taylor series, though Madhava found them
          about 250 years before Taylor!
        </p>
      </Theorem>

      <Example title="Madhava's Series for Pi">
        <p>
          Madhava also discovered:
        </p>
        <MathBlock>
          {`\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\frac{1}{9} - \\cdots`}
        </MathBlock>
        <p className="mt-2">
          This is now called the Leibniz formula (1676), but Madhava knew it
          around 1400 CE—nearly three centuries earlier!
        </p>
      </Example>

      <h3>Major Indian Mathematicians</h3>

      <div className="my-6 space-y-4">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold">Āryabhaṭa (476-550 CE)</h4>
          <ul className="text-sm text-dark-300 mt-2 space-y-1">
            <li>Calculated <InlineMath>\pi \approx 3.1416</InlineMath></li>
            <li>Gave the formula for the sum <InlineMath>1 + 2 + \cdots + n = n(n+1)/2</InlineMath></li>
            <li>Developed algorithms for square and cube roots</li>
            <li>Proposed a heliocentric model of the solar system</li>
          </ul>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold">Brahmagupta (598-668 CE)</h4>
          <ul className="text-sm text-dark-300 mt-2 space-y-1">
            <li>Systematized rules for zero and negative numbers</li>
            <li>Solved the general quadratic equation</li>
            <li>Found the formula for the area of a cyclic quadrilateral</li>
            <li>Made major advances on Pell's equation</li>
          </ul>
        </div>
        
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold">Bhāskara II (1114-1185 CE)</h4>
          <ul className="text-sm text-dark-300 mt-2 space-y-1">
            <li>Wrote the influential <em>Līlāvatī</em> (arithmetic) and <em>Bījagaṇita</em> (algebra)</li>
            <li>Solved Pell's equation for many values of <InlineMath>N</InlineMath></li>
            <li>Anticipated differential calculus concepts</li>
            <li>Computed <InlineMath>\pi</InlineMath> to 5 decimal places</li>
          </ul>
        </div>
      </div>

      <h3>Brahmagupta's Formula</h3>

      <Theorem title="Brahmagupta's Formula">
        <p>
          For a cyclic quadrilateral (one inscribed in a circle) with sides
          <InlineMath>a, b, c, d</InlineMath> and semiperimeter <InlineMath>s = (a+b+c+d)/2</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{Area} = \\sqrt{(s-a)(s-b)(s-c)(s-d)}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This generalizes Heron's formula for triangles (where <InlineMath>d = 0</InlineMath>).
        </p>
      </Theorem>

      {/* Visual comparison of Heron and Brahmagupta */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Heron's vs. Brahmagupta's Formula
        </h4>
        <svg viewBox="0 0 450 150" className="w-full h-auto">
          {/* Triangle */}
          <g transform="translate(100, 75)">
            <polygon points="0,-50 60,40 -60,40" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="2"/>
            <text x="0" y="70" fill="#c7d2fe" fontSize="11" textAnchor="middle">Triangle (d = 0)</text>
            <text x="0" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Heron's Formula</text>
          </g>
          
          {/* Quadrilateral in circle */}
          <g transform="translate(330, 75)">
            <circle cx="0" cy="0" r="55" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="3"/>
            <polygon points="50,-20 20,50 -45,30 -30,-45" fill="#10b981" fillOpacity="0.3" stroke="#34d399" strokeWidth="2"/>
            <text x="0" y="70" fill="#a7f3d0" fontSize="11" textAnchor="middle">Cyclic Quadrilateral</text>
            <text x="0" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Brahmagupta's Formula</text>
          </g>
          
          {/* Arrow */}
          <path d="M 170 75 L 230 75" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="200" y="65" fill="#6b7280" fontSize="10" textAnchor="middle">generalizes</text>
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
            </marker>
          </defs>
        </svg>
      </div>

      <Callout type="info">
        <strong>Transmission to the West:</strong> Indian mathematical knowledge
        traveled westward through Arab intermediaries. The decimal system and
        algebra reached Europe via Arabic translations, which is why we call our
        numerals "Arabic numerals"—though they originated in India. The word
        "algorithm" comes from the name of the Persian mathematician al-Khwarizmi,
        who transmitted Indian methods to the Islamic world.
      </Callout>

      <SectionQuiz
        sectionId={19}
        questions={quizMap[19] || []}
        title="Indian Mathematics Quiz"
      />
    </LessonLayout>
  );
}
