import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { DistributiveLawVisualizer } from '@/components/visualizations';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>Chapter 1: Arithmetic Review</h2>

      <p>
        Before diving into more advanced mathematical concepts, let's ensure we have a solid
        foundation in arithmetic. This chapter reviews the fundamental rules that govern
        numbers and their operations.
      </p>

      <Callout type="info">
        <strong>Why This Matters:</strong> Every mathematical structure—from algebra to
        calculus—is built upon these basic arithmetic principles. Understanding <em>why</em>
        these rules work, not just <em>how</em> to apply them, is the key to mathematical fluency.
      </Callout>

      <h2>1.1 Basic Rules of Arithmetic</h2>

      <p>
        The operations of addition, subtraction, multiplication, and division follow specific
        rules that mathematicians call <strong>properties</strong>. These aren't arbitrary—they
        emerge naturally from how numbers represent quantities.
      </p>

      <h3>Commutative Laws</h3>
      <p>
        For addition and multiplication, the order of operands doesn't matter:
      </p>
      <MathBlock>{`a + b = b + a`}</MathBlock>
      <MathBlock>{`a \\times b = b \\times a`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example</p>
        <p>
          <Math>{`3 + 5 = 5 + 3 = 8`}</Math> and <Math>{`4 \\times 7 = 7 \\times 4 = 28`}</Math>
        </p>
      </div>

      <h3>Associative Laws</h3>
      <p>
        When combining three or more numbers, grouping doesn't affect the result:
      </p>
      <MathBlock>{`(a + b) + c = a + (b + c)`}</MathBlock>
      <MathBlock>{`(a \\times b) \\times c = a \\times (b \\times c)`}</MathBlock>

      <h3>Distributive Law</h3>
      <p>
        This crucial law connects multiplication with addition:
      </p>
      <MathBlock>{`a \\times (b + c) = a \\times b + a \\times c`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example</p>
        <p>
          <Math>{`3 \\times (4 + 5) = 3 \\times 4 + 3 \\times 5 = 12 + 15 = 27`}</Math>
        </p>
        <p className="mt-2 text-dark-300">
          Verify: <Math>{`3 \\times 9 = 27`}</Math> ✓
        </p>
      </div>

      <DistributiveLawVisualizer />

      <h2>1.2 Division, Fractions, and Exponents</h2>

      <h3>Division as Multiplication</h3>
      <p>
        Division by a number is equivalent to multiplication by its reciprocal:
      </p>
      <MathBlock>{`a \\div b = a \\times \\frac{1}{b} = \\frac{a}{b}`}</MathBlock>

      <Callout type="warning">
        <strong>Important:</strong> Division by zero is undefined. There is no number that,
        when multiplied by 0, gives any nonzero result.
      </Callout>

      <h3>Fraction Operations</h3>
      <p><strong>Multiplication of fractions:</strong></p>
      <MathBlock>{`\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}`}</MathBlock>

      <p><strong>Division of fractions</strong> (invert and multiply):</p>
      <MathBlock>{`\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c}`}</MathBlock>

      <p><strong>Addition of fractions</strong> (common denominator required):</p>
      <MathBlock>{`\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}`}</MathBlock>

      <h3>Laws of Exponents</h3>
      <p>For any base <Math>a</Math> and exponents <Math>m, n</Math>:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Product Rule</p>
          <MathBlock>{`a^m \\times a^n = a^{m+n}`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Quotient Rule</p>
          <MathBlock>{`\\frac{a^m}{a^n} = a^{m-n}`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Power Rule</p>
          <MathBlock>{`(a^m)^n = a^{m \\times n}`}</MathBlock>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold mb-2">Zero Exponent</p>
          <MathBlock>{`a^0 = 1 \\quad (a \\neq 0)`}</MathBlock>
        </div>
      </div>

      <h2>1.3 Percentages</h2>

      <p>
        The word "percent" means "per hundred." Thus 25% means 25 per hundred, or
        <Math>{`\\frac{25}{100} = 0.25`}</Math>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> To find <Math>p\%</Math> of a quantity <Math>Q</Math>,
        multiply: <Math>{`\\frac{p}{100} \\times Q`}</Math>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Sales Tax</p>
        <p>
          If an item costs $80 and sales tax is 7.5%, what is the total?
        </p>
        <p className="mt-2">
          Tax = <Math>{`0.075 \\times 80 = \\$6.00`}</Math>
        </p>
        <p>
          Total = <Math>{`\\$80 + \\$6 = \\$86`}</Math>
        </p>
      </div>

      <h3>Percentage Increase and Decrease</h3>
      <MathBlock>{`\\text{Percentage change} = \\frac{\\text{New value} - \\text{Old value}}{\\text{Old value}} \\times 100\\%`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Price Increase</p>
        <p>
          If a stock rises from $40 to $50, what is the percentage increase?
        </p>
        <MathBlock>{`\\frac{50 - 40}{40} \\times 100\\% = \\frac{10}{40} \\times 100\\% = 25\\%`}</MathBlock>
      </div>

      <h2>1.4 Rates and Proportions</h2>

      <p>
        A <strong>rate</strong> expresses how one quantity changes with respect to another.
        Common examples include speed (distance per time), price (cost per unit), and
        density (mass per volume).
      </p>

      <h3>Unit Rates</h3>
      <p>
        A unit rate has a denominator of 1, making comparisons easy.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Comparing Prices</p>
        <p>
          Which is a better deal: 12 ounces for $2.40 or 20 ounces for $3.60?
        </p>
        <p className="mt-2">
          12 oz for $2.40: <Math>{`\\frac{\\$2.40}{12\\text{ oz}} = \\$0.20/\\text{oz}`}</Math>
        </p>
        <p>
          20 oz for $3.60: <Math>{`\\frac{\\$3.60}{20\\text{ oz}} = \\$0.18/\\text{oz}`}</Math>
        </p>
        <p className="mt-2 text-emerald-400">
          The 20 oz option is the better deal (lower price per ounce).
        </p>
      </div>

      <h3>Proportions</h3>
      <p>
        A proportion states that two ratios are equal. If <Math>{`\\frac{a}{b} = \\frac{c}{d}`}</Math>,
        then <Math>{`a \\times d = b \\times c`}</Math> (cross-multiplication).
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Map Scale</p>
        <p>
          On a map, 1 inch represents 50 miles. If two cities are 3.5 inches apart on
          the map, how far apart are they in reality?
        </p>
        <MathBlock>{`\\frac{1\\text{ in}}{50\\text{ mi}} = \\frac{3.5\\text{ in}}{x\\text{ mi}}`}</MathBlock>
        <p className="mt-2">
          Cross-multiply: <Math>{`1 \\times x = 50 \\times 3.5`}</Math>
        </p>
        <p>
          Therefore: <Math>{`x = 175\\text{ miles}`}</Math>
        </p>
      </div>

      <h2>1.5 Order of Operations</h2>

      <p>
        When an expression contains multiple operations, we follow a standard order
        to ensure everyone gets the same answer. The convention is often remembered
        as <strong>PEMDAS</strong>:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-primary-400">P</strong>arentheses (or other grouping symbols)</li>
        <li><strong className="text-primary-400">E</strong>xponents</li>
        <li><strong className="text-primary-400">M</strong>ultiplication and <strong className="text-primary-400">D</strong>ivision (left to right)</li>
        <li><strong className="text-primary-400">A</strong>ddition and <strong className="text-primary-400">S</strong>ubtraction (left to right)</li>
      </ol>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example</p>
        <p>Evaluate: <Math>{`3 + 4 \\times 2^2`}</Math></p>
        <ol className="list-decimal list-inside mt-2 text-dark-300">
          <li>Exponent: <Math>{`2^2 = 4`}</Math></li>
          <li>Multiplication: <Math>{`4 \\times 4 = 16`}</Math></li>
          <li>Addition: <Math>{`3 + 16 = 19`}</Math></li>
        </ol>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> These arithmetic fundamentals—the commutative,
        associative, and distributive laws; fraction and exponent rules; percentages and
        rates—form the bedrock upon which all of algebra is built. In the next chapter,
        we'll explore prime numbers and see how every integer has a unique factorization.
      </Callout>
    </LessonLayout>
  );
}
