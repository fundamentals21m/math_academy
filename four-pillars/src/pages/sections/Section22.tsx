import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2>Discussion</h2>

      <p>
        The discovery of coordinates is rightly considered a turning point in
        the development of mathematics because it reveals a vast new panorama
        of geometry, open to exploration in at least three different directions.
      </p>

      <h3>Three Directions from Coordinates</h3>

      <div className="space-y-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-400">1. Algebraic Geometry</h4>
          <p className="text-slate-300 mt-2">
            <strong>Description of curves by equations, and their analysis by algebra.</strong>
          </p>
          <p className="text-slate-300 mt-2">
            The curves described by polynomial equations are called
            <em> algebraic curves</em>. Straight lines, described by linear
            equations ax + by + c = 0, are curves of <strong>degree 1</strong>.
            Circles, described by (x - a)² + (y - b)² = r², are curves of
            <strong> degree 2</strong>.
          </p>
          <p className="text-slate-300 mt-2">
            There are curves of arbitrarily high degree, making algebraic geometry
            a vast subject. Even curves of degree 3 (elliptic curves) merit their
            own book!
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-400">2. Linear Algebra</h4>
          <p className="text-slate-300 mt-2">
            <strong>Algebraic study of objects described by linear equations.</strong>
          </p>
          <p className="text-slate-300 mt-2">
            Although technically part of algebraic geometry, linear algebra has
            a special flavor, very close to that of Euclidean geometry. We explore
            plane geometry from the viewpoint of linear algebra in Chapter 4.
          </p>
          <p className="text-slate-300 mt-2">
            The real strength of linear algebra is its ability to describe spaces
            of <em>any number of dimensions</em> in geometric language.
          </p>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-yellow-400">3. Transformation Groups</h4>
          <p className="text-slate-300 mt-2">
            <strong>The study of transformations, drawing on group theory.</strong>
          </p>
          <p className="text-slate-300 mt-2">
            Because many geometric transformations are described by linear equations,
            this overlaps with linear algebra. The role of transformations was first
            emphasized by Felix Klein in his famous <em>Erlanger Programm</em> (1872).
          </p>
        </div>
      </div>

      <h3>The Erlanger Programm</h3>

      <Theorem title="Klein's Vision">
        <p>
          Felix Klein's <em>Erlanger Programm</em> (1872) characterizes geometry
          as the study of <strong>transformation groups</strong> and their
          <strong> invariants</strong>.
        </p>
      </Theorem>

      <p>
        So far, we have seen one transformation group and a handful of invariants:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Group:</strong> The isometries of ℝ²
        </li>
        <li>
          <strong>Invariants:</strong> Length, angle, straightness
        </li>
      </ul>

      <Callout type="info">
        <strong>Looking Ahead:</strong> In Chapter 5, we introduce projective
        transformations and the cross-ratio invariant. In Chapters 7 and 8,
        we develop Klein's idea further with the "non-Euclidean" plane.
      </Callout>

      <h3>What We've Achieved</h3>

      <p>
        In this chapter on coordinates, we have:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Built a model of the Euclidean plane using ordered pairs of real numbers</li>
        <li>Characterized lines by linear equations and circles by quadratic equations</li>
        <li>Derived the distance formula from the Pythagorean theorem</li>
        <li>Found the algebraic criterion for constructibility with straightedge and compass</li>
        <li>Classified all isometries as translations, rotations, or glide reflections</li>
        <li>Proved the Three Reflections Theorem</li>
      </ul>

      <h3>The Power of Arithmetization</h3>

      <Definition title="Arithmetization of Geometry">
        <p>
          Building geometry from numbers is called the <strong>arithmetization
          of geometry</strong>. It accomplishes much:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            It gives an algebraic description of constructibility, making it
            possible to prove that certain figures are <em>not</em> constructible.
          </li>
          <li>
            It enables us to define what it means to "move" a geometric figure,
            providing justification for Euclid's proof of SAS.
          </li>
          <li>
            It gives access to algebra, reducing many geometric problems to
            simple calculations.
          </li>
        </ul>
      </Definition>

      <h3>Recommended Reading</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <p className="text-slate-300 mb-2">For algebraic curves:</p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>McKean, H. P. and Moll, V. <em>Elliptic Curves</em></li>
          <li>Brieskorn, E. and Knörrer, H. <em>Plane Algebraic Curves</em></li>
        </ul>
      </div>

      <h3>Looking Forward</h3>

      <p>
        The next chapter introduces <strong>vectors</strong>, which provide another
        powerful approach to geometry. Vectors can be added and multiplied by numbers,
        and the <strong>inner product</strong> gives an efficient algebraic method
        for handling both lengths and angles.
      </p>

      <Callout type="important">
        <strong>The Four Approaches:</strong> We now have two approaches to geometry:
        <ol className="list-decimal list-inside mt-2">
          <li>Euclid's axiomatic approach (Chapter 2)</li>
          <li>Coordinates (Chapter 3)</li>
        </ol>
        <p className="mt-2">
          Coming up: Vectors (Chapter 4) and Projective Geometry (Chapter 5).
          Each approach offers different insights and techniques, but they all
          describe the same underlying geometric reality.
        </p>
      </Callout>

      <SectionQuiz
        sectionId={22}
        questions={quizMap[22] || []}
        title="Chapter 3 Discussion Quiz"
      />
    </LessonLayout>
  );
}
