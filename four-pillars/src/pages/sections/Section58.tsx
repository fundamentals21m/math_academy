import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2>Complex Conjugation</h2>

      <p>
        To understand the full group of transformations of the upper half plane,
        we need to introduce a fundamental operation on complex numbers:
        <strong> complex conjugation</strong>. This operation will allow us to
        define reflections in non-Euclidean geometry.
      </p>

      <h3>The Conjugate of a Complex Number</h3>

      <Definition title="Complex Conjugate">
        <p>
          If z = x + iy is a complex number (where x and y are real), then the
          <strong> complex conjugate</strong> of z is:
        </p>
        <MathBlock>{`\\bar{z} = x - iy`}</MathBlock>
        <p className="mt-2">
          Geometrically, z̄ is the reflection of z across the real axis.
        </p>
      </Definition>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Examples</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>If z = 3 + 4i, then z̄ = 3 - 4i</li>
          <li>If z = -2 + i, then z̄ = -2 - i</li>
          <li>If z = 5 (real), then z̄ = 5</li>
          <li>If z = 2i (pure imaginary), then z̄ = -2i</li>
        </ul>
      </div>

      <h3>Properties of Complex Conjugation</h3>

      <Theorem title="Algebraic Properties">
        <p>
          Complex conjugation satisfies the following properties for any complex
          numbers z and w:
        </p>
        <MathBlock>{`\\overline{z + w} = \\bar{z} + \\bar{w}`}</MathBlock>
        <MathBlock>{`\\overline{z \\cdot w} = \\bar{z} \\cdot \\bar{w}`}</MathBlock>
        <MathBlock>{`\\overline{z / w} = \\bar{z} / \\bar{w} \\quad (w \\neq 0)`}</MathBlock>
        <MathBlock>{`\\overline{\\bar{z}} = z`}</MathBlock>
      </Theorem>

      <p>
        The first three properties say that conjugation "respects" addition,
        multiplication, and division. The fourth says that conjugating twice
        returns the original number.
      </p>

      <Callout type="info">
        <strong>Automorphism:</strong> These properties make complex conjugation
        an automorphism of the complex numbers — it preserves the algebraic
        structure while not being the identity map.
      </Callout>

      <h3>Conjugation and Absolute Value</h3>

      <p>
        There is an important relationship between conjugation and the absolute
        value (modulus) of a complex number.
      </p>

      <Theorem title="Modulus via Conjugation">
        <p>
          For any complex number z = x + iy:
        </p>
        <MathBlock>{`z \\cdot \\bar{z} = |z|^2 = x^2 + y^2`}</MathBlock>
        <p className="mt-2">
          This gives us a way to find |z| using conjugation, and also provides
          a formula for division:
        </p>
        <MathBlock>{`\\frac{1}{z} = \\frac{\\bar{z}}{|z|^2}`}</MathBlock>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300">
          If z = x + iy, then:
        </p>
        <MathBlock>{`z \\cdot \\bar{z} = (x + iy)(x - iy) = x^2 - (iy)^2 = x^2 - i^2y^2 = x^2 + y^2`}</MathBlock>
        <p className="text-slate-300 mt-2">
          Since i² = -1, the imaginary terms cancel, leaving a real number.
        </p>
      </div>

      <h3>Extended Linear Fractional Transformations</h3>

      <p>
        Using complex conjugation, we can extend our family of transformations
        to include reflections.
      </p>

      <Definition title="Extended Möbius Transformations">
        <p>
          An <strong>extended Möbius transformation</strong> is either:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            A linear fractional transformation: f(z) = (az + b)/(cz + d)
          </li>
          <li>
            A conjugate-linear transformation: f(z) = (az̄ + b)/(cz̄ + d)
          </li>
        </ul>
        <p className="mt-2">
          where a, b, c, d are real and ad - bc ≠ 0.
        </p>
      </Definition>

      <p>
        The transformations of the first type preserve orientation, while those
        of the second type reverse orientation (like reflections).
      </p>

      <h3>The Effect of Conjugation on the Upper Half Plane</h3>

      <Theorem title="Conjugation Maps">
        <p>
          The map z → -z̄ sends the upper half plane to itself (reflection across
          the imaginary axis), while z → z̄ sends the upper half plane to the
          lower half plane (reflection across the real axis).
        </p>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Verification</h4>
        <p className="text-slate-300 mb-2">
          Let z = x + iy with y &gt; 0 (so z is in the upper half plane).
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            z̄ = x - iy has imaginary part -y &lt; 0, so it's in the lower half plane.
          </li>
          <li>
            -z̄ = -(x - iy) = -x + iy has imaginary part y &gt; 0, so it's in the
            upper half plane.
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <strong>Orientation:</strong> The map z → -z̄ reverses orientation. When
        we compose an odd number of such orientation-reversing maps, we get a
        reflection. When we compose an even number, we get an ordinary
        (orientation-preserving) transformation.
      </Callout>

      <h3>Real and Imaginary Parts</h3>

      <p>
        Conjugation gives us a way to extract the real and imaginary parts of
        a complex number.
      </p>

      <Theorem title="Extracting Parts">
        <p>
          For z = x + iy:
        </p>
        <MathBlock>{`\\text{Re}(z) = x = \\frac{z + \\bar{z}}{2}`}</MathBlock>
        <MathBlock>{`\\text{Im}(z) = y = \\frac{z - \\bar{z}}{2i}`}</MathBlock>
      </Theorem>

      <p>
        These formulas will be useful when we analyze how transformations affect
        points in the upper half plane.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.2.1</h4>
        <p className="text-slate-300">
          Verify that (z₁z₂)̄ = z̄₁z̄₂ by direct calculation using z₁ = a + bi
          and z₂ = c + di.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.2.2</h4>
        <p className="text-slate-300">
          Show that z is real if and only if z = z̄.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.2.3</h4>
        <p className="text-slate-300">
          Show that z is pure imaginary if and only if z = -z̄.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 8.2.4</h4>
        <p className="text-slate-300">
          Prove that |z̄| = |z| for any complex number z.
        </p>
      </div>

      <SectionQuiz
        sectionId={58}
        questions={quizMap[58] || []}
        title="Complex Conjugation Quiz"
      />
    </LessonLayout>
  );
}
