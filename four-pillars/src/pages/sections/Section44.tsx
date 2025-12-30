import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2>The Field Axioms</h2>

      <p>
        In calculating with numbers, and particularly in calculating with symbols
        ("algebra"), we assume several things: that there are particular numbers 0
        and 1; that each number a has an additive inverse, −a; that each number
        a ≠ 0 has a reciprocal, a⁻¹; and that the following field axioms hold.
      </p>

      <Definition title="The Field Axioms">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-blue-400">Commutative Laws:</p>
            <MathBlock>{`a + b = b + a, \\quad ab = ba`}</MathBlock>
          </div>
          <div>
            <p className="font-semibold text-blue-400">Associative Laws:</p>
            <MathBlock>{`a + (b + c) = (a + b) + c, \\quad a(bc) = (ab)c`}</MathBlock>
          </div>
          <div>
            <p className="font-semibold text-blue-400">Identity Laws:</p>
            <MathBlock>{`a + 0 = a, \\quad a \\cdot 1 = a`}</MathBlock>
          </div>
          <div>
            <p className="font-semibold text-blue-400">Inverse Laws:</p>
            <MathBlock>{`a + (-a) = 0, \\quad a \\cdot a^{-1} = 1`}</MathBlock>
          </div>
          <div>
            <p className="font-semibold text-blue-400">Distributive Law:</p>
            <MathBlock>{`a(b + c) = ab + ac`}</MathBlock>
          </div>
        </div>
      </Definition>

      <p>
        We generally use these laws unconsciously. They are used so often, and
        they are so obviously true of numbers, that we do not notice them. But
        for the projective sum and product of points, they are <em>not</em> obviously
        true.
      </p>

      <Callout type="warning">
        <strong>Key Observation:</strong> It is not even clear that a + b = b + a,
        because the construction of a + b is different from the construction of
        b + a. It is truly a coincidence that a + b = b + a in projective geometry,
        the result of a geometric coincidence of the type discussed in Section 6.2.
      </Callout>

      <h3>Pappus and Desargues Imply the Field Axioms</h3>

      <p>
        In this chapter, we show that just two coincidences—the theorems of Pappus
        and Desargues—imply all nine field axioms. In fact, it is known that Pappus
        alone is sufficient, because it implies Desargues.
      </p>

      <p>
        We do not prove this latter fact here, partly because it is difficult, and
        partly because the Desargues theorem itself is interesting: It implies all
        the field axioms except ab = ba. Thus, the theorems of Pappus and Desargues
        have algebraic content that can be measured accurately by the field axioms
        they imply.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Summary of Implications</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Pappus</strong> implies all nine field axioms</li>
          <li><strong>Desargues</strong> implies eight field axioms (all but ab = ba)</li>
        </ul>
      </div>

      <h3>Proof of the Commutative Laws</h3>

      <p>
        We begin with the law ab = ba, which is the most important consequence of
        the Pappus theorem. The construction of ba from a and b is different from
        the construction of ab. When we show both constructions on the same diagram,
        we see that ab = ba because the gray and dotted lines end at the same place,
        by the Pappus theorem.
      </p>

      <Theorem title="Commutative Law of Multiplication">
        <p>
          The Pappus theorem implies ab = ba.
        </p>
        <p className="mt-2 text-slate-300">
          The Pappus configuration consists of all the lines in the construction
          except the line joining 1 on the x-axis to 1 on the y-axis.
        </p>
      </Theorem>

      <p>
        There is a similar proof that a + b = b + a. Remember from Section 6.4 that
        a + b is the result of attaching the segment Oa at b. Thus, b + a is the
        result of attaching Ob at a, which is different from the construction of
        a + b.
      </p>

      <Theorem title="Commutative Law of Addition">
        <p>
          The Pappus theorem implies a + b = b + a.
        </p>
        <p className="mt-2 text-slate-300">
          Looking at both constructions together, we see that the gray line leads to
          a + b and the dotted line leads to b + a. However, both of these lines end
          at the same point, thanks to the Pappus theorem.
        </p>
      </Theorem>

      <h3>The Little Pappus Theorem</h3>

      <p>
        The Pappus configuration that proves a + b = b + a is actually a special one,
        because the vertices of the hexagon lie on parallel lines. The same special
        configuration also occurs in the proof in Section 6.4 that sums correspond
        on the x- and y-axes.
      </p>

      <Definition title="Little Pappus Theorem">
        <p>
          The special Pappus configuration with vertices on parallel lines corresponds
          to a special Pappus theorem, sometimes called the <strong>little Pappus theorem</strong>.
        </p>
        <p className="mt-2">
          Given a hexagon with vertices on two lines that meet at a point P, and two
          pairs of opposite sides meeting on a line L that goes through P, the third
          pair of opposite sides also meets on L.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Connection to Little Desargues:</strong> It is known that the little
        Desargues theorem implies the little Pappus theorem; a proof is in
        <em> Fundamentals of Mathematics, II</em> by Behnke et al. Thus, the results
        deduced from the little Pappus theorem can also be deduced from the little
        Desargues theorem (although generally not as easily).
      </Callout>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.5.1</h4>
        <p className="text-slate-300">
          Look back to the vector proof of the Pappus theorem in Section 4.2, and
          point out where it uses the assumption ab = ba.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 6.5.2</h4>
        <p className="text-slate-300">
          Given that the assumptions of the little Pappus theorem are a hexagon with
          vertices on two lines that meet at a point P, and two pairs of opposite sides
          meeting on a line L that goes through P, what is the conclusion?
        </p>
      </div>

      <SectionQuiz
        sectionId={44}
        questions={quizMap[44] || []}
        title="The Field Axioms Quiz"
      />
    </LessonLayout>
  );
}
