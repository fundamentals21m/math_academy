import { LessonLayout } from '@/components/layout/LessonLayout';

export default function Section179() {
  return (
    <LessonLayout sectionId={179}>
      <h2>Book VII: The Foundations of Number Theory</h2>

      <p>
        Book VII marks a dramatic shift in the <em>Elements</em>. After six books devoted to
        plane geometry, Euclid turns to <strong>number theory</strong>---the study of whole
        numbers and their properties. Books VII, VIII, and IX form a unified treatment of
        arithmetic, establishing results about divisibility, prime numbers, and proportions
        among numbers.
      </p>

      <p className="mt-4">
        Euclid represents numbers as <strong>line segments</strong>, where each number is
        visualized as a collection of unit lengths. This geometric representation allows him
        to apply the rigorous methods developed in earlier books while exploring purely
        arithmetic concepts.
      </p>

      <h3 className="mt-8">Diagram: Numbers as Line Segments</h3>

      <svg viewBox="0 0 400 150" className="w-full max-w-lg mx-auto mt-4">
        {/* Unit */}
        <line x1="50" y1="30" x2="80" y2="30" stroke="#f59e0b" strokeWidth="3" />
        <text x="65" y="50" textAnchor="middle" fill="#9ca3af" fontSize="12">Unit (1)</text>

        {/* Number 3 */}
        <line x1="50" y1="80" x2="140" y2="80" stroke="#10b981" strokeWidth="3" />
        <circle cx="80" cy="80" r="2" fill="#9ca3af" />
        <circle cx="110" cy="80" r="2" fill="#9ca3af" />
        <text x="95" y="100" textAnchor="middle" fill="#9ca3af" fontSize="12">Three (3)</text>

        {/* Number 5 */}
        <line x1="50" y1="130" x2="200" y2="130" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="80" cy="130" r="2" fill="#9ca3af" />
        <circle cx="110" cy="130" r="2" fill="#9ca3af" />
        <circle cx="140" cy="130" r="2" fill="#9ca3af" />
        <circle cx="170" cy="130" r="2" fill="#9ca3af" />
        <text x="125" y="150" textAnchor="middle" fill="#9ca3af" fontSize="12">Five (5)</text>

        {/* Labels on right */}
        <text x="220" y="30" textAnchor="start" fill="#f59e0b" fontSize="11">1 unit</text>
        <text x="220" y="80" textAnchor="start" fill="#10b981" fontSize="11">3 units</text>
        <text x="220" y="130" textAnchor="start" fill="#3b82f6" fontSize="11">5 units</text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        Numbers represented as multitudes of units, following Euclid's geometric approach
      </p>

      <h3 className="mt-8">The 22 Definitions of Book VII</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 1: Unit</h4>
          <p className="text-dark-200 mt-2">
            A <strong>unit</strong> is that by virtue of which each of the things that exist
            is called one.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            The unit is the fundamental building block of all numbers. It represents the
            concept of "oneness" and cannot itself be divided into smaller parts (in the
            context of whole numbers).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 2: Number</h4>
          <p className="text-dark-200 mt-2">
            A <strong>number</strong> is a multitude composed of units.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            For Euclid, a number is always 2 or greater---it is a collection of units.
            The unit itself is not considered a number, and neither is zero (which the
            Greeks did not use as a number).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 3: Part</h4>
          <p className="text-dark-200 mt-2">
            A number is a <strong>part</strong> of a number, the less of the greater, when
            it measures the greater.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If A divides B exactly (with no remainder), then A is a "part" of B. For example,
            3 is a part of 12 because 3 measures 12 (divides it exactly four times). In modern
            terms: A is a part of B if B = nA for some integer n.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 4: Parts</h4>
          <p className="text-dark-200 mt-2">
            But <strong>parts</strong> when it does not measure it.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            When A does not divide B exactly, A is called "parts" of B. For example, 4 is
            "parts" of 10 because 4 does not measure 10. The number 4 is "two fifths" of 10---
            multiple parts of the whole. This corresponds to proper fractions with numerator
            greater than 1.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 5: Multiple</h4>
          <p className="text-dark-200 mt-2">
            The greater number is a <strong>multiple</strong> of the less when it is measured
            by the less.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            This is the converse of Definition 3. If 3 measures 12, then 12 is a multiple of 3.
            In modern notation: B is a multiple of A if B = nA for some positive integer n.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 6: Even Number</h4>
          <p className="text-dark-200 mt-2">
            An <strong>even number</strong> is that which is divisible into two equal parts.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A number is even if it can be divided by 2 with no remainder: 2, 4, 6, 8, 10, ...
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 7: Odd Number</h4>
          <p className="text-dark-200 mt-2">
            An <strong>odd number</strong> is that which is not divisible into two equal
            parts, or that which differs by a unit from an even number.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A number is odd if it leaves a remainder of 1 when divided by 2: 1, 3, 5, 7, 9, ...
            Euclid gives two equivalent characterizations.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 8: Even-times Even</h4>
          <p className="text-dark-200 mt-2">
            An <strong>even-times even number</strong> is that which is measured by an even
            number according to an even number.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A number of the form 2n x 2m = even x even. For example, 24 = 4 x 6 (both factors even).
            More precisely, this means numbers that can be expressed as a product of two even numbers.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 9: Even-times Odd</h4>
          <p className="text-dark-200 mt-2">
            An <strong>even-times odd number</strong> is that which is measured by an even
            number according to an odd number.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A number of the form 2n x (2m+1) = even x odd. For example, 6 = 2 x 3, or 10 = 2 x 5.
            These are even numbers that, when repeatedly divided by 2, eventually yield an odd number.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 10: Odd-times Odd</h4>
          <p className="text-dark-200 mt-2">
            An <strong>odd-times odd number</strong> is that which is measured by an odd
            number according to an odd number.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A number of the form (2n+1) x (2m+1) = odd x odd. For example, 15 = 3 x 5, or
            21 = 3 x 7. The product of two odd numbers is always odd.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 11: Prime Number</h4>
          <p className="text-dark-200 mt-2">
            A <strong>prime number</strong> is that which is measured by a unit alone.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A prime has no divisors other than 1 and itself. The primes are: 2, 3, 5, 7, 11,
            13, 17, 19, 23, ... Note that 1 is not considered a prime (or even a number) by
            Euclid, and 2 is the only even prime.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 12: Numbers Prime to One Another</h4>
          <p className="text-dark-200 mt-2">
            Numbers <strong>prime to one another</strong> are those which are measured by a
            unit alone as a common measure.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            Two numbers are "relatively prime" or "coprime" if their only common divisor is 1.
            For example, 8 and 15 are prime to one another (gcd(8,15) = 1), even though neither
            is itself a prime number.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 13: Composite Number</h4>
          <p className="text-dark-200 mt-2">
            A <strong>composite number</strong> is that which is measured by some number.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A composite has at least one divisor other than 1 and itself. Examples: 4, 6, 8,
            9, 10, 12, ... Every number greater than 1 is either prime or composite.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 14: Numbers Composite to One Another</h4>
          <p className="text-dark-200 mt-2">
            Numbers <strong>composite to one another</strong> are those which are measured by
            some number as a common measure.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            Two numbers are "composite to one another" if they share a common divisor greater
            than 1. For example, 12 and 18 are composite to one another because they are both
            measured by 6 (and also by 2 and 3).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 15: Multiply</h4>
          <p className="text-dark-200 mt-2">
            A number is said to <strong>multiply</strong> a number when that which is multiplied
            is added to itself as many times as there are units in the other, and thus some
            number is produced.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            Multiplication is defined as repeated addition. To compute 3 x 4, we add 4 to
            itself 3 times: 4 + 4 + 4 = 12.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 16: Plane Number</h4>
          <p className="text-dark-200 mt-2">
            And, when two numbers having multiplied one another make some number, the number
            so produced is called <strong>plane</strong>, and its sides are the numbers which
            have multiplied one another.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A plane number is the product of two numbers, visualized as a rectangle. For
            example, 12 = 3 x 4 is a plane number with sides 3 and 4. This connects arithmetic
            to geometry.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 17: Solid Number</h4>
          <p className="text-dark-200 mt-2">
            And, when three numbers having multiplied one another make some number, the number
            so produced is <strong>solid</strong>, and its sides are the numbers which have
            multiplied one another.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A solid number is the product of three numbers, visualized as a rectangular box.
            For example, 24 = 2 x 3 x 4 is a solid number with sides 2, 3, and 4.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 18: Square Number</h4>
          <p className="text-dark-200 mt-2">
            A <strong>square number</strong> is equal multiplied by equal, or a number which
            is contained by two equal numbers.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A square number is the product of a number with itself: 1, 4, 9, 16, 25, 36, ...
            These can be visualized as actual geometric squares.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 19: Cube Number</h4>
          <p className="text-dark-200 mt-2">
            A <strong>cube number</strong> is equal multiplied by equal and again by equal,
            or a number which is contained by three equal numbers.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            A cube number is a number multiplied by itself twice: 1, 8, 27, 64, 125, ...
            These can be visualized as geometric cubes.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 20: Numbers in Proportion</h4>
          <p className="text-dark-200 mt-2">
            Numbers are <strong>proportional</strong> when the first is the same multiple,
            or the same part, or the same parts, of the second that the third is of the fourth.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            Four numbers a, b, c, d are in proportion (a:b :: c:d) when a/b = c/d. This is
            the arithmetic analog of the geometric proportion theory from Book V.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 21: Similar Plane Numbers</h4>
          <p className="text-dark-200 mt-2">
            <strong>Similar plane numbers</strong> are those which have their sides proportional.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            Two plane numbers are similar if the ratios of their sides are equal. For example,
            6 = 2 x 3 and 24 = 4 x 6 are similar because 2:4 = 3:6.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 22: Similar Solid Numbers</h4>
          <p className="text-dark-200 mt-2">
            <strong>Similar solid numbers</strong> are those which have their sides proportional.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            Two solid numbers are similar if the ratios of corresponding sides are equal.
            For example, 6 = 1 x 2 x 3 and 48 = 2 x 4 x 6 are similar because 1:2 = 2:4 = 3:6.
          </p>
        </div>
      </div>

      <h3 className="mt-8">The Significance of Book VII</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200">
          Book VII contains some of the most important algorithms in mathematics, including:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-dark-300">
          <li>The <strong>Euclidean algorithm</strong> for finding the greatest common divisor</li>
          <li>Methods for testing if numbers are relatively prime</li>
          <li>Foundations for the theory of rational numbers</li>
          <li>The basis for unique factorization (developed in Book IX)</li>
        </ul>
        <p className="text-dark-200 mt-4">
          These definitions establish the vocabulary that Euclid uses throughout Books VII-IX.
          The concepts of "measures," "part," and "parts" are essential to understanding his
          treatment of divisibility and fractions.
        </p>
      </div>

      <h3 className="mt-8">Diagram: Prime vs Composite Numbers</h3>

      <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto mt-4">
        {/* Prime number 7 */}
        <text x="100" y="25" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">Prime: 7</text>
        <line x1="20" y1="40" x2="180" y2="40" stroke="#f59e0b" strokeWidth="3" />
        <circle cx="43" cy="40" r="2" fill="#9ca3af" />
        <circle cx="66" cy="40" r="2" fill="#9ca3af" />
        <circle cx="89" cy="40" r="2" fill="#9ca3af" />
        <circle cx="112" cy="40" r="2" fill="#9ca3af" />
        <circle cx="135" cy="40" r="2" fill="#9ca3af" />
        <circle cx="158" cy="40" r="2" fill="#9ca3af" />
        <text x="100" y="60" textAnchor="middle" fill="#9ca3af" fontSize="11">Only divisible by 1 and 7</text>

        {/* Composite number 12 */}
        <text x="100" y="95" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">Composite: 12</text>

        {/* Show as 3 x 4 grid */}
        <g transform="translate(40, 105)">
          {/* Row 1 */}
          <rect x="0" y="0" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="25" y="0" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="50" y="0" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="75" y="0" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          {/* Row 2 */}
          <rect x="0" y="20" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="25" y="20" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="50" y="20" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="75" y="20" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          {/* Row 3 */}
          <rect x="0" y="40" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="25" y="40" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="50" y="40" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <rect x="75" y="40" width="25" height="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </g>
        <text x="100" y="185" textAnchor="middle" fill="#9ca3af" fontSize="11">12 = 3 x 4 (a plane number)</text>

        {/* Right side labels */}
        <text x="180" y="135" textAnchor="start" fill="#10b981" fontSize="11">3 rows</text>
        <text x="90" y="100" textAnchor="middle" fill="#10b981" fontSize="11">4 columns</text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        A prime can only be arranged as a single row; a composite can form a rectangle
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Historical Note:</strong> The Greek word for
          unit is "monas" (meaning "alone" or "unique"), emphasizing its role as the
          indivisible foundation of all numbers. Euclid's number theory influenced mathematicians
          for over two millennia and remains foundational to modern algebra and cryptography.
        </p>
      </div>
    </LessonLayout>
  );
}
