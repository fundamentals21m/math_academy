import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { CircleAngleTheorem } from '@/components/visualizations/chapter2';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>The Pythagorean Theorem Revisited</h2>

      <p>
        Having developed the theory of similar triangles, we can now give a
        different proof of the Pythagorean theorem—one that many consider
        more elegant than Euclid's original proof. This approach also leads
        directly to a fundamental construction: the square root.
      </p>

      <h3>Similar Triangles in a Right Triangle</h3>

      <p>
        Consider a right triangle ABC with the right angle at C. Drop the
        altitude from C to the hypotenuse AB, meeting it at point H.
      </p>

      <Theorem title="Altitude Creates Similar Triangles"
        proof={
          <>
            <p>Let ABC be a right triangle with right angle at C. Let H be the foot of the altitude from C to hypotenuse AB.</p>
            <p className="mt-2"><strong>Part 1: △ACH ∼ △ABC</strong></p>
            <p className="mt-2">In triangle ACH:</p>
            <ul className="list-disc list-inside mt-1">
              <li>∠AHC = 90° (altitude is perpendicular)</li>
              <li>∠CAH = ∠CAB = ∠A (same angle)</li>
            </ul>
            <p className="mt-2">By AA similarity (two equal angles), △ACH ∼ △ABC.</p>
            <p className="mt-2"><strong>Part 2: △CBH ∼ △ABC</strong></p>
            <p className="mt-2">In triangle CBH:</p>
            <ul className="list-disc list-inside mt-1">
              <li>∠CHB = 90° (altitude is perpendicular)</li>
              <li>∠CBH = ∠CBA = ∠B (same angle)</li>
            </ul>
            <p className="mt-2">By AA similarity, △CBH ∼ △ABC.</p>
            <p className="mt-2"><strong>Part 3: △ACH ∼ △CBH</strong></p>
            <p className="mt-2">Since both are similar to △ABC, they are similar to each other (transitivity).</p>
          </>
        }
      >
        <p>
          The altitude from the right angle to the hypotenuse divides the
          right triangle into two smaller triangles, each similar to the
          original and to each other.
        </p>
        <MathBlock>
          {`\\triangle ACH \\sim \\triangle ABC \\sim \\triangle CBH`}
        </MathBlock>
      </Theorem>

      <h3>Proof of Pythagorean Theorem via Similar Triangles</h3>

      <p>
        From the similarity △ACH ∼ △ABC, we get the proportion:
      </p>

      <MathBlock>
        {`\\frac{AC}{AB} = \\frac{AH}{AC}`}
      </MathBlock>

      <p>Cross-multiplying: AC² = AB · AH, or b² = c · AH.</p>

      <p>From △CBH ∼ △ABC:</p>

      <MathBlock>
        {`\\frac{BC}{AB} = \\frac{BH}{BC}`}
      </MathBlock>

      <p>Cross-multiplying: BC² = AB · BH, or a² = c · BH.</p>

      <p>
        <strong>Adding these equations:</strong>
      </p>

      <MathBlock>
        {`a^2 + b^2 = c \\cdot BH + c \\cdot AH = c(AH + BH) = c \\cdot c = c^2`}
      </MathBlock>

      <p>This completes the proof. ∎</p>

      <Callout type="info">
        <strong>Comparison with Euclid's Proof:</strong> While Euclid's proof
        uses area-shearing arguments, this proof uses the theory of similar
        triangles and proportions. Both are valid, but the similar triangles
        proof is often considered more intuitive.
      </Callout>

      <h3>The Geometric Mean</h3>

      <p>
        The altitude construction reveals another important relationship:
      </p>

      <Theorem title="Altitude as Geometric Mean"
        proof={
          <>
            <p>Let H be the foot of the altitude from C to hypotenuse AB in right triangle ABC.</p>
            <p className="mt-2"><strong>Step 1:</strong> From the previous theorem, △ACH ∼ △CBH.</p>
            <p className="mt-2"><strong>Step 2:</strong> In △ACH, the sides opposite to corresponding angles are:</p>
            <ul className="list-disc list-inside mt-1">
              <li>CH opposite to ∠A</li>
              <li>AH opposite to ∠ACH</li>
            </ul>
            <p className="mt-2"><strong>Step 3:</strong> In △CBH, the corresponding sides are:</p>
            <ul className="list-disc list-inside mt-1">
              <li>HB opposite to ∠HCB (= ∠A by similarity)</li>
              <li>CH opposite to ∠B (= ∠ACH by similarity)</li>
            </ul>
            <p className="mt-2"><strong>Step 4:</strong> By similarity, corresponding sides are proportional:</p>
            <MathBlock math="\frac{AH}{CH} = \frac{CH}{HB}" />
            <p className="mt-2"><strong>Step 5:</strong> Cross-multiplying:</p>
            <MathBlock math="CH^2 = AH \cdot HB" />
          </>
        }
      >
        <p>
          The altitude to the hypotenuse is the geometric mean of the two
          segments it creates.
        </p>
        <MathBlock>
          {`CH^2 = AH \\cdot HB`}
        </MathBlock>
        <p className="mt-2">
          Equivalently: CH = √(AH · HB)
        </p>
      </Theorem>

      <h3>Constructing Square Roots</h3>

      <p>
        This geometric mean relationship gives us a powerful construction:
      </p>

      <Definition title="Square Root Construction">
        <p>
          To construct √a using straightedge and compass:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Draw a line segment of length a + 1</li>
          <li>Mark the point dividing it into lengths a and 1</li>
          <li>Draw a semicircle with this segment as diameter</li>
          <li>Draw a perpendicular at the dividing point</li>
          <li>The perpendicular meets the semicircle at height √a</li>
        </ol>
      </Definition>

      <p>
        <strong>Why it works:</strong> By Thales' theorem, the triangle formed
        has a right angle at the top of the perpendicular. By the geometric
        mean theorem, the height h satisfies h² = a · 1 = a, so h = √a.
      </p>

      <Callout type="important">
        <strong>Significance:</strong> This construction shows that square
        roots of integers are constructible with straightedge and compass.
        This is the key to understanding which lengths can be constructed
        and which cannot.
      </Callout>

      <h3>The Regular Pentagon Revisited</h3>

      <p>
        With the square root construction, we can now understand why the
        regular pentagon is constructible. Recall from Chapter 1 that
        constructing a pentagon requires the golden ratio φ = (1 + √5)/2.
      </p>

      <p>Since √5 is constructible (take a = 5 in our construction), and we
        can add 1 and divide by 2, the golden ratio φ is constructible.
        Therefore the regular pentagon is constructible. ∎
      </p>

      <h3>Constructible Numbers</h3>

      <p>
        A number is <strong>constructible</strong> if a segment of that length
        can be created starting from a unit segment using only straightedge
        and compass.
      </p>

      <Theorem title="Constructible Numbers Form a Field"
        proof={
          <>
            <p>We show each operation preserves constructibility.</p>
            <p className="mt-2"><strong>Addition (a + b):</strong> Copy segment b at the end of segment a along a line.</p>
            <p className="mt-2"><strong>Subtraction (a - b):</strong> Copy segment b from the end of segment a backwards.</p>
            <p className="mt-2"><strong>Multiplication (a · b):</strong></p>
            <ol className="list-decimal list-inside mt-1">
              <li>Draw rays from point O forming an angle</li>
              <li>Mark segment OA = 1 and OB = a on one ray</li>
              <li>Mark segment OC = b on the other ray</li>
              <li>Draw line AC, then line through B parallel to AC</li>
              <li>This line meets the second ray at D with OD = ab (by Thales)</li>
            </ol>
            <p className="mt-2"><strong>Division (a/b):</strong></p>
            <ol className="list-decimal list-inside mt-1">
              <li>Mark OA = a and OB = b on one ray, OC = 1 on another</li>
              <li>Draw BC, then line through A parallel to BC</li>
              <li>This meets the second ray at D with OD = a/b (by Thales)</li>
            </ol>
            <p className="mt-2"><strong>Square root (√a):</strong> Use the semicircle construction with segments of length a and 1.</p>
          </>
        }
      >
        <p>
          If a and b are constructible, then so are:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>a + b and a - b (addition and subtraction)</li>
          <li>a · b and a/b (multiplication and division)</li>
          <li>√a (if a &gt; 0)</li>
        </ul>
      </Theorem>

      <p>
        We've seen constructions for all of these operations:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Addition/Subtraction:</strong> Copying segments along a line</li>
        <li><strong>Multiplication:</strong> Using similar triangles (Thales)</li>
        <li><strong>Division:</strong> Using similar triangles (inverse of multiplication)</li>
        <li><strong>Square root:</strong> The semicircle construction above</li>
      </ul>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.8.1</h4>
        <p className="text-slate-300">
          Construct √3 using straightedge and compass. Verify your construction
          by measuring.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.8.2</h4>
        <p className="text-slate-300">
          Show how to construct a segment of length √(a + b) given segments
          of lengths a and b.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.8.3</h4>
        <p className="text-slate-300">
          Prove that if a is constructible, then so is ∜a (the fourth root).
          Hint: Apply the square root construction twice.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.8.4</h4>
        <p className="text-slate-300">
          Using the fact that φ² = φ + 1, show that 1/φ = φ - 1 and construct
          a segment of length 1/φ.
        </p>
      </div>

      <CircleAngleTheorem className="my-6" />

      <SectionQuiz
        sectionId={13}
        questions={quizMap[13] || []}
        title="Pythagorean Theorem Revisited Quiz"
      />
    </LessonLayout>
  );
}
