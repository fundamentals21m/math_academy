import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

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

      <Theorem title="Altitude Creates Similar Triangles">
        <p>
          The altitude from the right angle to the hypotenuse divides the
          right triangle into two smaller triangles, each similar to the
          original and to each other.
        </p>
        <MathBlock>
          {`\\triangle ACH \\sim \\triangle ABC \\sim \\triangle CBH`}
        </MathBlock>
      </Theorem>

      <p>
        <strong>Proof:</strong> In triangle ACH:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>∠AHC = 90° (by construction)</li>
        <li>∠A is shared with triangle ABC</li>
        <li>Therefore ∠ACH = ∠B (angle sum)</li>
      </ul>

      <p>
        So triangle ACH has the same angles as triangle ABC, making them
        similar. The same argument applies to triangle CBH. ∎
      </p>

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

      <Theorem title="Altitude as Geometric Mean">
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

      <p>
        <strong>Proof:</strong> From the similarity △ACH ∼ △CBH:
      </p>

      <MathBlock>
        {`\\frac{AH}{CH} = \\frac{CH}{HB}`}
      </MathBlock>

      <p>Cross-multiplying gives CH² = AH · HB. ∎</p>

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

      <Theorem title="Constructible Numbers Form a Field">
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

      <SectionQuiz
        sectionId={13}
        questions={quizMap[13] || []}
        title="Pythagorean Theorem Revisited Quiz"
      />
    </LessonLayout>
  );
}
