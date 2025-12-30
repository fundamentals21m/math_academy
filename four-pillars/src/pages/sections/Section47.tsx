import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2>Discussion</h2>

      <p>
        The idea of developing projective geometry without the use of numbers
        comes from the German mathematician <strong>Christian von Staudt</strong> in 1847.
        His compatriots Hermann Wiener and David Hilbert took the idea further in
        the 1890s, and it reached a high point with the publication of Hilbert's
        book, <em>Grundlagen der Geometrie</em> (Foundations of Geometry), in 1899.
      </p>

      <h3>Hilbert's Correlation</h3>

      <p>
        It was Hilbert who first established a clear correlation between geometric
        and algebraic structure:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Pappus</strong> ↔ commutative multiplication</li>
          <li><strong>Desargues</strong> ↔ associative multiplication</li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Historical Note:</strong> The correlation is significant because
        some important algebraic systems satisfy all the field axioms except
        commutative multiplication. The best-known example is the quaternions,
        known since 1843, but for some reason, Hilbert did not mention it.
        To construct a non-Pappian plane, he created a rather artificial
        noncommutative coordinate system.
      </Callout>

      <h3>Hessenberg's Discovery</h3>

      <p>
        It is perhaps a lucky accident of history that Hilbert discovered the role
        of the Desargues theorem at all. He was forced to use it because, in 1899,
        it was still not known that Pappus implies Desargues.
      </p>

      <Theorem title="Hessenberg's Theorem (1904)">
        <p>
          The Pappus theorem implies the Desargues theorem.
        </p>
        <p className="mt-2 text-slate-300">
          This implication was first proved by Gerhard Hessenberg in 1904.
          Even then the proof was faulty, and the mistake was not corrected
          until years later.
        </p>
      </Theorem>

      <h3>Ruth Moufang's Contributions</h3>

      <p>
        The whole circle of ideas was neatly tied up by yet another German
        mathematician, <strong>Ruth Moufang</strong>, in 1930. She found that the
        little Desargues theorem also has algebraic significance.
      </p>

      <Definition title="Alternativity">
        <p>
          In a projective plane satisfying the little Desargues theorem, with
          addition and multiplication defined as in Section 6.4, one can prove
          all the field axioms except commutativity and associativity. One can
          even prove a partial associativity law called <strong>cancellation</strong> or
          <strong> alternativity</strong>:
        </p>
        <MathBlock>{`a^{-1}(ab) = b = (ba)a^{-1}`}</MathBlock>
      </Definition>

      <h3>Multiplication on Euclidean Spaces</h3>

      <p>
        The commutative, associative, and alternative laws are beautifully exemplified
        by the possible multiplication operations that can be defined "reasonably"
        on the Euclidean spaces ℝⁿ. ("Reasonably" means respecting at least the
        dimension of the space.)
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Number Systems by Dimension</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Commutative multiplication</strong> is possible only on ℝ¹ and ℝ²,
            yielding the number systems <strong>ℝ</strong> (real numbers) and <strong>ℂ</strong> (complex numbers).
          </li>
          <li>
            <strong>Associative, but noncommutative, multiplication</strong> is possible
            only on ℝ⁴, yielding the <strong>quaternions H</strong>.
          </li>
          <li>
            <strong>Alternative, but nonassociative, multiplication</strong> is possible
            only on ℝ⁸, yielding the <strong>octonions O</strong>.
          </li>
        </ul>
      </div>

      <h3>The Octonions</h3>

      <p>
        The octonions were discovered by a friend of Hamilton called John Graves
        in 1843, and they were discovered independently by Cayley in 1845.
      </p>

      <Callout type="warning">
        <strong>Moufang's Recognition:</strong> Ruth Moufang was the first to
        recognize the importance of quaternions and octonions in projective geometry.
        She pointed out the quaternion projective plane HP² as a natural example of
        a non-Pappian plane, and was the first to discuss the octonion projective
        plane OP².
      </Callout>

      <p>
        OP² is the most natural example of a plane that satisfies little Desargues
        but not Desargues.
      </p>

      <h3>Higher-Dimensional Projective Spaces</h3>

      <p>
        In Section 5.4, we sketched the construction of the real projective space
        ℝP³ by means of homogeneous coordinates. This idea is easily generalized
        to obtain the n-dimensional real projective space ℝPⁿ, and one can obtain
        ℂPⁿ and HPⁿ in precisely the same way.
      </p>

      <p>
        Surprisingly, the idea does <em>not</em> work for the octonions. The only
        octonion projective spaces are:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>The octonion projective line OP¹ = O ∪ {'{'}∞{'}'}</li>
          <li>The octonion projective plane OP² discovered by Moufang</li>
        </ul>
      </div>

      <h3>Why OP³ Cannot Exist</h3>

      <p>
        The reason for the nonexistence of OP³ is extremely interesting and has
        to do with the nature of the Desargues theorem in three dimensions.
      </p>

      <Theorem title="The Spatial Desargues Theorem">
        <p>
          If two triangles lie in three-dimensional space, the Desargues conclusion
          follows by basic incidence properties of points, lines, and planes.
        </p>
        <p className="mt-2 text-slate-300">
          The planes containing the two triangles meet in a line L, where the
          pairs of corresponding sides necessarily meet also.
        </p>
      </Theorem>

      <p>
        The argument is a little trickier if the two triangles lie in the same
        plane. But, provided the plane lies in a projective space, it can be
        carried out (one shows that the planar configuration is a "shadow" of
        a spatial configuration).
      </p>

      <Callout type="info">
        <strong>Key Result:</strong> The Desargues theorem holds in any projective
        space of at least three dimensions.
      </Callout>

      <p>
        This is why OP³ cannot exist. If it did, the Desargues theorem would hold
        in it, and we could then show that O is associative—which it is not. Q.E.D.
      </p>

      <h3>Summary: The Hierarchy of Projective Planes</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <table className="w-full text-slate-300">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-2 text-blue-400">Geometric Axiom</th>
              <th className="text-left py-2 text-blue-400">Algebraic Property</th>
              <th className="text-left py-2 text-blue-400">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700">
              <td className="py-2">Little Desargues</td>
              <td className="py-2">Alternativity</td>
              <td className="py-2">OP² (octonions)</td>
            </tr>
            <tr className="border-b border-slate-700">
              <td className="py-2">Desargues</td>
              <td className="py-2">Associativity</td>
              <td className="py-2">HP² (quaternions)</td>
            </tr>
            <tr>
              <td className="py-2">Pappus</td>
              <td className="py-2">Commutativity</td>
              <td className="py-2">ℝP², ℂP²</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Conclusion</h3>

      <p>
        The connection between geometry and algebra established in this chapter
        is one of the great achievements of nineteenth-century mathematics.
        It shows that the theorems of Pappus and Desargues, which seem to be
        merely curious facts about lines and points, actually contain the seeds
        of all arithmetic and algebra.
      </p>

      <p>
        In a Pappian plane, we can define coordinates satisfying all the field
        axioms—and this is the foundation for doing calculus and analysis in
        geometric settings. Geometry and algebra, far from being separate subjects,
        are two aspects of the same mathematical reality.
      </p>

      <SectionQuiz
        sectionId={47}
        questions={quizMap[47] || []}
        title="Discussion Quiz"
      />
    </LessonLayout>
  );
}
