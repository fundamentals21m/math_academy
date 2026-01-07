import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { PythagoreanTheoremDemo } from '@/components/visualizations/chapter2';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>The Pythagorean Theorem</h2>

      <p>
        The Pythagorean theorem is perhaps the most famous result in all of
        mathematics. It appears as Proposition I.47 in Euclid's <em>Elements</em>,
        and Euclid's proof is a masterpiece of geometric reasoning that uses
        the area concepts developed in the previous sections.
      </p>

      <Theorem title="Pythagorean Theorem (Euclid I.47)"
        proof={
          <>
            <p>Let ABC be a right triangle with right angle at C, legs a = BC and b = AC, and hypotenuse c = AB.</p>
            <p className="mt-2"><strong>Step 1:</strong> Construct squares on all three sides: BCHI on BC, ACFG on AC, and ABDE on AB.</p>
            <p className="mt-2"><strong>Step 2:</strong> Draw altitude CK from C perpendicular to AB, extended to meet DE at L.</p>
            <p className="mt-2"><strong>Step 3:</strong> Draw lines AD and CF.</p>
            <p className="mt-2"><strong>Step 4:</strong> Consider triangles ABD and FBC:</p>
            <ul className="list-disc list-inside mt-1">
              <li>AB = BD (sides of square ABDE)</li>
              <li>FB = BC (sides of square BCHI)</li>
              <li>∠ABD = ∠FBC (both equal 90° + ∠ABC)</li>
            </ul>
            <p className="mt-2">By SAS, △ABD ≅ △FBC.</p>
            <p className="mt-2"><strong>Step 5:</strong> Rectangle BDLK has the same base BD and height as △ABD (between parallels BD and AL).</p>
            <p className="mt-2">By I.41: Area(BDLK) = 2 · Area(△ABD).</p>
            <p className="mt-2"><strong>Step 6:</strong> Square BCHI has the same base BC and height as △FBC.</p>
            <p className="mt-2">By I.41: Area(BCHI) = 2 · Area(△FBC).</p>
            <p className="mt-2"><strong>Step 7:</strong> Since △ABD ≅ △FBC: Area(BDLK) = Area(BCHI) = a².</p>
            <p className="mt-2"><strong>Step 8:</strong> Similarly, Area(ALKE) = Area(ACFG) = b².</p>
            <p className="mt-2"><strong>Step 9:</strong> Area(ABDE) = Area(BDLK) + Area(ALKE) = a² + b² = c².</p>
          </>
        }
      >
        <p>
          In a right triangle, the square on the hypotenuse equals the sum of
          the squares on the other two sides.
        </p>
        <MathBlock>
          {`a^2 + b^2 = c^2`}
        </MathBlock>
        <p className="mt-2">
          where c is the hypotenuse and a, b are the legs.
        </p>
      </Theorem>

      <h3>Euclid's Proof</h3>

      <p>
        Euclid's proof is constructive and elegant. Given a right triangle ABC
        with the right angle at C, construct squares on all three sides.
      </p>

      <p>
        <strong>Step 1: Set up the construction</strong>
      </p>
      <p>
        Draw the altitude from C to the hypotenuse AB, meeting it at H. Extend
        this line to meet the opposite side of the square on AB.
      </p>

      <Callout type="info">
        <strong>Key Insight:</strong> The altitude CH divides the large square
        into two rectangles. Euclid shows that each rectangle equals one of the
        smaller squares.
      </Callout>

      <p>
        <strong>Step 2: Connect key points</strong>
      </p>
      <p>
        Draw lines AC and BC extended through the construction. These create
        triangles that we can compare using congruence.
      </p>

      <p>
        <strong>Step 3: Apply shearing</strong>
      </p>
      <p>
        The square on side AC can be "sheared" (using the principle from I.35)
        into a parallelogram with the same base and height, which is then
        sheared again to align with the rectangle portion of the square on AB.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">The Shearing Argument</h4>
        <p className="text-slate-300">
          Consider the square on AC. By Euclid I.35, this square has the same
          area as any parallelogram with the same base and height. We can
          shear this square into a rectangle that exactly matches one piece
          of the square on the hypotenuse.
        </p>
      </div>

      <p>
        <strong>Step 4: Complete the proof</strong>
      </p>
      <p>
        The same argument applied to the square on BC shows it equals the
        other rectangle. Since the two rectangles together form the square
        on AB:
      </p>

      <MathBlock>
        {`\\text{square on } AC + \\text{square on } BC = \\text{square on } AB`}
      </MathBlock>

      <h3>Why This Proof Matters</h3>

      <p>
        Euclid's proof is significant because it:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Uses only the theorems developed earlier in Book I</li>
        <li>Relies on the shearing principle (area-preserving transformations)</li>
        <li>Works with areas directly, without needing numerical values</li>
        <li>Demonstrates the power of axiomatic reasoning</li>
      </ul>

      <Callout type="important">
        <strong>The Windmill Proof:</strong> Euclid's proof is sometimes called
        the "windmill proof" because the construction with its extended lines
        resembles a windmill. It's considerably more complex than some modern
        proofs but uses only the basic tools available to Euclid.
      </Callout>

      <h3>The Converse</h3>

      <p>
        Euclid also proves the converse (I.48):
      </p>

      <Theorem title="Converse of Pythagorean Theorem (Euclid I.48)"
        proof={
          <>
            <p>Let triangle ABC have sides a = BC, b = AC, c = AB with a² + b² = c².</p>
            <p className="mt-2"><strong>Step 1:</strong> Construct a right triangle DEF with:</p>
            <ul className="list-disc list-inside mt-1">
              <li>Right angle at E</li>
              <li>DE = a = BC</li>
              <li>EF = b = AC</li>
            </ul>
            <p className="mt-2"><strong>Step 2:</strong> By the Pythagorean theorem (I.47) applied to △DEF:</p>
            <MathBlock math="DF^2 = DE^2 + EF^2 = a^2 + b^2" />
            <p className="mt-2"><strong>Step 3:</strong> By hypothesis, a² + b² = c², so DF² = c².</p>
            <p className="mt-2">Therefore DF = c = AB.</p>
            <p className="mt-2"><strong>Step 4:</strong> Triangles ABC and DEF have:</p>
            <ul className="list-disc list-inside mt-1">
              <li>BC = DE = a</li>
              <li>AC = EF = b</li>
              <li>AB = DF = c</li>
            </ul>
            <p className="mt-2"><strong>Step 5:</strong> By SSS congruence, △ABC ≅ △DEF.</p>
            <p className="mt-2"><strong>Step 6:</strong> Therefore ∠ACB = ∠DEF = 90°.</p>
          </>
        }
      >
        <p>
          If the square on one side of a triangle equals the sum of the squares
          on the other two sides, then the angle opposite that side is a right
          angle.
        </p>
      </Theorem>

      <h3>Historical Context</h3>

      <p>
        The Pythagorean theorem was known before Euclid and even before
        Pythagoras. Babylonian clay tablets from around 1800 BCE show
        knowledge of Pythagorean triples like (3, 4, 5) and (5, 12, 13).
      </p>

      <p>
        What makes Euclid's contribution significant is the <em>proof</em>—
        demonstrating that the theorem follows logically from basic axioms
        rather than being an empirical observation.
      </p>

      <h3>Pythagorean Triples</h3>

      <p>
        A <strong>Pythagorean triple</strong> is a set of three positive
        integers (a, b, c) satisfying a² + b² = c².
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-blue-400">(3, 4, 5)</p>
          <p className="text-sm text-slate-400">9 + 16 = 25</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-green-400">(5, 12, 13)</p>
          <p className="text-sm text-slate-400">25 + 144 = 169</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-yellow-400">(8, 15, 17)</p>
          <p className="text-sm text-slate-400">64 + 225 = 289</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-pink-400">(7, 24, 25)</p>
          <p className="text-sm text-slate-400">49 + 576 = 625</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-purple-400">(20, 21, 29)</p>
          <p className="text-sm text-slate-400">400 + 441 = 841</p>
        </div>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.5.1</h4>
        <p className="text-slate-300">
          Verify that if m &gt; n are positive integers, then (m² − n², 2mn, m² + n²)
          is a Pythagorean triple.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.5.2</h4>
        <p className="text-slate-300">
          In Euclid's proof, explain why the altitude from C to the hypotenuse
          creates two triangles that are each similar to the original triangle.
        </p>
      </div>

      <PythagoreanTheoremDemo className="my-6" />

      <SectionQuiz
        sectionId={10}
        questions={quizMap[10] || []}
        title="The Pythagorean Theorem Quiz"
      />
    </LessonLayout>
  );
}
