import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Discussion</h2>

      <p>
        Euclid's <em>Elements</em> is the most influential book in the history of
        mathematics. Written around 300 BCE, it was used in school mathematics
        instruction until the 20th century. Anyone interested in geometry should
        be familiar with this foundational work.
      </p>

      <h3>The Legacy of Euclid</h3>

      <p>
        The <em>Elements</em> is not easy reading, but you will find yourself returning
        to it year after year and noticing something new. The standard edition in English
        is Heath's translation, first published in 1925 and still available today.
      </p>

      <Callout type="info">
        <strong>Recommended Resources:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Heath's translation of Euclid's <em>Elements</em> (Dover reprint)</li>
          <li>David Joyce's online interactive <em>Elements</em></li>
          <li>Benno Artmann's <em>Euclid: The Creation of Mathematics</em></li>
          <li>Robin Hartshorne's <em>Geometry: Euclid and Beyond</em></li>
        </ul>
      </Callout>

      <h3>The Regular Polyhedra</h3>

      <p>
        The climax of the <em>Elements</em> is the theory of regular polyhedra in Book XIII.
        Only <strong>five regular polyhedra</strong> exist, and they are:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">△</div>
          <h4 className="font-semibold text-blue-400">Tetrahedron</h4>
          <p className="text-sm text-slate-400">4 triangular faces</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">▢</div>
          <h4 className="font-semibold text-green-400">Cube</h4>
          <p className="text-sm text-slate-400">6 square faces</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">◇</div>
          <h4 className="font-semibold text-yellow-400">Octahedron</h4>
          <p className="text-sm text-slate-400">8 triangular faces</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">⬡</div>
          <h4 className="font-semibold text-pink-400">Dodecahedron</h4>
          <p className="text-sm text-slate-400">12 pentagonal faces</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <div className="text-4xl mb-2">⬢</div>
          <h4 className="font-semibold text-purple-400">Icosahedron</h4>
          <p className="text-sm text-slate-400">20 triangular faces</p>
        </div>
      </div>

      <p>
        Notice that three of them are built from <strong>equilateral triangles</strong>,
        one from <strong>squares</strong>, and one from <strong>regular pentagons</strong>.
        This remarkable phenomenon underlines the importance of equilateral triangles and
        squares, and draws attention to the regular pentagon.
      </p>

      <Callout type="important">
        <strong>Historical Significance:</strong> Some geometers believe that the material
        in the <em>Elements</em> was chosen very much with the theory of regular polyhedra
        in mind. Euclid needs to construct the equilateral triangle, square, and pentagon
        in order to construct the regular polyhedra.
      </Callout>

      <h3>Constructible Regular Polygons</h3>

      <p>
        It is fortunate that Euclid did not need regular polygons more complex than the
        pentagon, because none were constructed until modern times.
      </p>

      <Theorem title="Gauss's Discovery (1796)">
        <p>
          The regular 17-gon was constructed by the 19-year-old Carl Friedrich Gauss in 1796.
          This discovery was the key to answering: <em>For which n is the regular n-gon
          constructible?</em>
        </p>
      </Theorem>

      <p>
        Gauss showed (with some steps filled in by Pierre Wantzel in 1837) that a regular
        polygon with a <strong>prime number p of sides</strong> is constructible by
        straightedge and compass if and only if p is a <em>Fermat prime</em>:
      </p>

      <Definition title="Fermat Primes">
        <p>
          A <strong>Fermat prime</strong> is a prime number of the form:
        </p>
        <MathBlock>
          {`F_m = 2^{2^m} + 1`}
        </MathBlock>
        <p className="mt-4">
          The known Fermat primes are:
        </p>
        <MathBlock>
          {`F_0 = 3, \\quad F_1 = 5, \\quad F_2 = 17, \\quad F_3 = 257, \\quad F_4 = 65537`}
        </MathBlock>
      </Definition>

      <p>
        This result gives three constructible p-gons not known to the Greeks:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>The regular <strong>17-gon</strong> (F<sub>2</sub> = 17)</li>
        <li>The regular <strong>257-gon</strong> (F<sub>3</sub> = 257)</li>
        <li>The regular <strong>65537-gon</strong> (F<sub>4</sub> = 65537)</li>
      </ul>

      <Callout type="warning">
        <strong>Open Problem:</strong> No larger prime numbers of the form 2<sup>2<sup>m</sup></sup> + 1
        are known! Fermat himself conjectured that all numbers of this form are prime,
        but Euler showed in 1732 that F<sub>5</sub> = 4,294,967,297 is composite
        (divisible by 641). Thus we do not know whether a larger constructible p-gon exists.
      </Callout>

      <h3>The Scope of Straightedge and Compass</h3>

      <p>
        These results show that the <em>Elements</em> is not all of geometry, even if one
        accepts the same subject matter as Euclid. Many questions about straightedge and
        compass constructions require tools from algebra and number theory.
      </p>

      <Theorem title="Complete Characterization">
        <p>
          A regular n-gon is constructible by straightedge and compass if and only if n
          is of the form:
        </p>
        <MathBlock>
          {`n = 2^k \\cdot p_1 \\cdot p_2 \\cdots p_r`}
        </MathBlock>
        <p className="mt-4">
          where k &ge; 0 and p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>r</sub> are
          <em>distinct</em> Fermat primes (or r = 0, meaning no Fermat primes).
        </p>
      </Theorem>

      <h3>Looking Ahead: The Four Pillars</h3>

      <p>
        In this chapter, we have explored the first pillar of geometry: <strong>Euclid-style
        constructions</strong>. The constructions with straightedge and compass reveal the
        interplay between geometric intuition and logical reasoning.
      </p>

      <p>
        In the chapters ahead, we will explore three more approaches to geometry:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">Coordinates (Chapter 3)</h4>
          <p className="text-slate-300 mt-2">
            Using algebra to describe geometric objects with numbers and equations.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">Projective Geometry (Chapters 5-6)</h4>
          <p className="text-slate-300 mt-2">
            Understanding perspective, vanishing points, and the geometry of projection.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-pink-500">
          <h4 className="font-semibold text-pink-400">Transformations (Chapters 7-8)</h4>
          <p className="text-slate-300 mt-2">
            Studying geometry through the lens of symmetry and transformation groups.
          </p>
        </div>
      </div>

      <p>
        But first, in Chapter 2, we will examine <strong>Euclid's axiomatic approach</strong>
        more carefully, exploring how he builds his theory on a foundation of axioms and
        logical deduction.
      </p>

      <SectionQuiz
        sectionId={5}
        questions={quizMap[5] || []}
        title="Chapter 1 Discussion Quiz"
      />
    </LessonLayout>
  );
}
