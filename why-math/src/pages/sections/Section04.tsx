import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { EquationBalanceVisualizer } from '@/components/visualizations';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Chapter 4: Elementary Equations</h2>

      <p>
        One of the most powerful applications of mathematics is solving equations—translating
        real-world problems into mathematical language and finding unknown quantities. In this
        chapter, we develop a systematic approach to solving equations in one unknown.
      </p>

      <h2>4.1 Equations in One Unknown</h2>

      <Callout type="info">
        <strong>The Four-Step Method:</strong>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Define x:</strong> Clearly state what the unknown represents</li>
          <li><strong>Translate:</strong> Convert the problem into an equation</li>
          <li><strong>Solve:</strong> Find the value of x using algebraic rules</li>
          <li><strong>Check:</strong> Verify the answer makes sense in the original context</li>
        </ol>
      </Callout>

      <p>
        This systematic approach works for a surprisingly wide variety of problems. Let's see
        it in action.
      </p>

      <h3>Example 1: Years of Experience</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Problem</p>
        <p>
          A TV repair shop has two repairmen. One has worked there for 5 years longer than
          the other. Together they have 23 years of experience. How long has each worked there?
        </p>
        <div className="mt-4 space-y-2">
          <p><strong className="text-primary-400">Step 1:</strong> Let <InlineMath>x</InlineMath> = years the newer repairman has worked</p>
          <p>Then <InlineMath>{`x + 5`}</InlineMath> = years the senior repairman has worked</p>
          <p><strong className="text-primary-400">Step 2:</strong> Total experience equation:</p>
          <MathBlock>{`x + (x + 5) = 23`}</MathBlock>
          <p><strong className="text-primary-400">Step 3:</strong> Solve:</p>
          <MathBlock>{`2x + 5 = 23`}</MathBlock>
          <MathBlock>{`2x = 18`}</MathBlock>
          <MathBlock>{`x = 9`}</MathBlock>
          <p><strong className="text-primary-400">Step 4:</strong> Check: <InlineMath>{`9 + 14 = 23`}</InlineMath> ✓</p>
          <p className="text-emerald-400 mt-2">
            The newer repairman has 9 years; the senior has 14 years.
          </p>
        </div>
      </div>

      <h3>Example 2: Currency Exchange</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Problem</p>
        <p>
          At a currency exchange, 1 Canadian dollar equals $0.82 US. If you exchange
          some Canadian dollars and receive $123 US, how many Canadian dollars did you exchange?
        </p>
        <div className="mt-4 space-y-2">
          <p><strong className="text-primary-400">Step 1:</strong> Let <InlineMath>x</InlineMath> = number of Canadian dollars exchanged</p>
          <p><strong className="text-primary-400">Step 2:</strong> Exchange rate equation:</p>
          <MathBlock>{`0.82x = 123`}</MathBlock>
          <p><strong className="text-primary-400">Step 3:</strong> Solve:</p>
          <MathBlock>{`x = \\frac{123}{0.82} = 150`}</MathBlock>
          <p><strong className="text-primary-400">Step 4:</strong> Check: <InlineMath>{`150 \\times 0.82 = 123`}</InlineMath> ✓</p>
          <p className="text-emerald-400 mt-2">
            You exchanged 150 Canadian dollars.
          </p>
        </div>
      </div>

      <EquationBalanceVisualizer />

      <h2>4.2 Distance, Rate, and Time</h2>

      <Callout type="info">
        <strong>The Fundamental Formula:</strong>
        <MathBlock>{`\\text{Distance} = \\text{Rate} \\times \\text{Time}`}</MathBlock>
        Or equivalently: <InlineMath>{`d = rt`}</InlineMath>
      </Callout>

      <h3>Example 3: Average Speed</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Problem</p>
        <p>
          A car travels from city A to city B (180 miles) at 60 mph, then returns at 45 mph.
          What is the average speed for the entire trip?
        </p>
        <div className="mt-4 space-y-2">
          <p><strong className="text-primary-400">Analysis:</strong></p>
          <p>Time going: <InlineMath>{`\\frac{180}{60} = 3`}</InlineMath> hours</p>
          <p>Time returning: <InlineMath>{`\\frac{180}{45} = 4`}</InlineMath> hours</p>
          <p>Total distance: <InlineMath>{`180 + 180 = 360`}</InlineMath> miles</p>
          <p>Total time: <InlineMath>{`3 + 4 = 7`}</InlineMath> hours</p>
          <MathBlock>{`\\text{Average speed} = \\frac{360}{7} \\approx 51.4 \\text{ mph}`}</MathBlock>
          <p className="text-rose-400 mt-2">
            <strong>Note:</strong> The average speed is NOT <InlineMath>{`\\frac{60 + 45}{2} = 52.5`}</InlineMath> mph!
            Average speed is total distance divided by total time.
          </p>
        </div>
      </div>

      <h2>4.3 Mixture Problems</h2>

      <p>
        Mixture problems involve combining substances of different concentrations or prices.
        The key insight: the total amount of "stuff" is conserved.
      </p>

      <h3>Example 4: Antifreeze Mixture</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Problem</p>
        <p>
          A radiator contains 12 quarts of a 20% antifreeze solution. How much pure antifreeze
          must be added to obtain a 50% solution?
        </p>
        <div className="mt-4 space-y-2">
          <p><strong className="text-primary-400">Step 1:</strong> Let <InlineMath>x</InlineMath> = quarts of pure antifreeze to add</p>
          <p><strong className="text-primary-400">Step 2:</strong> Set up the equation:</p>
          <p className="text-dark-300">
            Initial antifreeze: <InlineMath>{`0.20 \\times 12 = 2.4`}</InlineMath> quarts
          </p>
          <p className="text-dark-300">
            After adding x quarts of pure antifreeze:
          </p>
          <MathBlock>{`\\frac{2.4 + x}{12 + x} = 0.50`}</MathBlock>
          <p><strong className="text-primary-400">Step 3:</strong> Solve:</p>
          <MathBlock>{`2.4 + x = 0.50(12 + x)`}</MathBlock>
          <MathBlock>{`2.4 + x = 6 + 0.5x`}</MathBlock>
          <MathBlock>{`0.5x = 3.6`}</MathBlock>
          <MathBlock>{`x = 7.2`}</MathBlock>
          <p><strong className="text-primary-400">Step 4:</strong> Check: <InlineMath>{`\\frac{2.4 + 7.2}{12 + 7.2} = \\frac{9.6}{19.2} = 0.50`}</InlineMath> ✓</p>
          <p className="text-emerald-400 mt-2">
            Add 7.2 quarts of pure antifreeze.
          </p>
        </div>
      </div>

      <h2>4.4 Temperature Conversions</h2>

      <p>
        The relationship between Celsius and Fahrenheit temperatures is a linear equation:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Celsius to Fahrenheit</p>
          <MathBlock>{`F = \\frac{9}{5}C + 32`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Fahrenheit to Celsius</p>
          <MathBlock>{`C = \\frac{5}{9}(F - 32)`}</MathBlock>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: When Are They Equal?</p>
        <p>At what temperature do Celsius and Fahrenheit readings coincide?</p>
        <p className="mt-2">Set <InlineMath>{`F = C`}</InlineMath>:</p>
        <MathBlock>{`C = \\frac{9}{5}C + 32`}</MathBlock>
        <MathBlock>{`C - \\frac{9}{5}C = 32`}</MathBlock>
        <MathBlock>{`-\\frac{4}{5}C = 32`}</MathBlock>
        <MathBlock>{`C = -40`}</MathBlock>
        <p className="text-emerald-400 mt-2">
          At -40°, Celsius and Fahrenheit are equal!
        </p>
      </div>

      <h2>4.5 Lever Problems</h2>

      <Callout type="info">
        <strong>The Law of the Lever:</strong> For a lever in balance,
        <MathBlock>{`\\text{Weight}_1 \\times \\text{Distance}_1 = \\text{Weight}_2 \\times \\text{Distance}_2`}</MathBlock>
        Discovered by Archimedes (c. 287–212 BCE), who said: "Give me a place to stand,
        and I will move the Earth."
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Balancing a Seesaw</p>
        <p>
          A 120-pound person sits 6 feet from the fulcrum. Where should a 90-pound person
          sit to balance the seesaw?
        </p>
        <div className="mt-2">
          <MathBlock>{`120 \\times 6 = 90 \\times x`}</MathBlock>
          <MathBlock>{`x = \\frac{720}{90} = 8 \\text{ feet}`}</MathBlock>
        </div>
      </div>

      <h2>Common Pitfalls</h2>

      <Callout type="warning">
        <strong>Watch out for these common mistakes:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Forgetting to check if the answer makes sense in context</li>
          <li>Averaging rates directly instead of using total/total</li>
          <li>Confusing percentage of what with percentage of the whole</li>
          <li>Setting up the equation with inconsistent units</li>
        </ul>
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The four-step method—define, translate, solve,
        check—provides a systematic approach to word problems. We applied it to problems
        involving work experience, currency exchange, distance-rate-time, mixtures,
        temperature conversions, and levers. The key is careful translation from words
        to equations. In the next chapter, we'll extend these techniques to systems of
        simultaneous equations.
      </Callout>
    </LessonLayout>
  );
}
