import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section67Questions } from '../../data/quizzes';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <h2 className="text-2xl font-semibold mb-4">Intersections</h2>

      <Callout type="info">
        <p>
          <strong>Advanced Topic:</strong> This section explores how
          intersections of curves can solve algebraic problems, including the
          ancient problem of doubling the cube.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        The intersection of two curves can yield remarkable information. The
        Greeks discovered that conic sections could solve problems beyond
        compass-and-straightedge constructions.
      </p>

      {/* Menaechmus and Cube Root */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Menaechmus and <InlineMath>\sqrt[3]{'{2}'}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Around 350 B.C., <strong>Menaechmus</strong> discovered that doubling
        the cube—constructing <InlineMath>\sqrt[3]{'{2}'}</InlineMath>—can be
        achieved by intersecting two parabolas.
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Menaechmus's Construction
        </h4>
        <p className="text-dark-200 mb-4">
          Consider the two parabolas:
        </p>
        <MathBlock>
          {`y = x^2 \\quad \\text{and} \\quad x = \\frac{y^2}{2}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          Substituting <InlineMath>y = x^2</InlineMath> into the second
          equation:
        </p>
        <MathBlock>
          {`x = \\frac{(x^2)^2}{2} = \\frac{x^4}{2}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          So <InlineMath>2x = x^4</InlineMath>, giving{' '}
          <InlineMath>x^3 = 2</InlineMath>, hence{' '}
          <InlineMath>x = \sqrt[3]{'{2}'}</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        This was groundbreaking: Menaechmus showed that problems unsolvable
        with compass and straightedge could be solved with conic sections!
      </p>

      {/* Bezout's Theorem */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Bézout's Theorem
      </h3>

      <p className="text-dark-200 mb-6">
        A fundamental principle governs curve intersections:
      </p>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">
          Bézout's Theorem
        </h4>
        <p className="text-dark-200">
          A curve of degree <InlineMath>m</InlineMath> and a curve of degree{' '}
          <InlineMath>n</InlineMath> intersect in at most{' '}
          <InlineMath>mn</InlineMath> points (counted with multiplicity, in the
          projective plane over <InlineMath>\mathbb{'{C}'}</InlineMath>).
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        For example:
      </p>
      <ul className="space-y-2 text-dark-200 mb-6 ml-4">
        <li>
          • Two lines (<InlineMath>m = n = 1</InlineMath>): at most{' '}
          <InlineMath>1 \times 1 = 1</InlineMath> point
        </li>
        <li>
          • A line and a conic (<InlineMath>m = 1, n = 2</InlineMath>): at most{' '}
          <InlineMath>1 \times 2 = 2</InlineMath> points
        </li>
        <li>
          • Two conics (<InlineMath>m = n = 2</InlineMath>): at most{' '}
          <InlineMath>2 \times 2 = 4</InlineMath> points
        </li>
      </ul>

      {/* Ferrari's Method */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Ferrari's Method for Quartics
      </h3>

      <p className="text-dark-200 mb-6">
        <strong>Lodovico Ferrari</strong> (1522–1565) discovered that quartic
        equations can be solved by finding intersections of conics.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          To solve a quartic equation like <InlineMath>x^4 + px^2 + qx + r = 0</InlineMath>,
          we can write it as an intersection:
        </p>
        <MathBlock>
          {`y = x^2 \\quad \\text{(parabola)}`}
        </MathBlock>
        <MathBlock>
          {`y^2 + py + qx + r = 0 \\quad \\text{(conic)}`}
        </MathBlock>
        <p className="text-dark-200 mt-4">
          By Bézout's theorem, these degree-2 curves meet in at most 4 points,
          corresponding to the 4 roots of the quartic!
        </p>
      </div>

      {/* Higher Degree Equations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Solving Higher Degree Equations
      </h3>

      <p className="text-dark-200 mb-6">
        This geometric approach extends to higher degrees:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Degree 3:</strong> Line meets cubic in 3 points (hence
              the "depressed cubic" technique)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Degree 4:</strong> Two conics meet in 4 points (Ferrari)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Degree 6:</strong> A conic and cubic meet in 6 points
            </span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          The power of algebraic geometry: geometric intersections correspond
          to algebraic solutions. This connection, fully developed in the 19th
          century, became one of the most profound branches of mathematics.
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Menaechmus constructed <InlineMath>\sqrt[3]{'{2}'}</InlineMath>{' '}
              by intersecting parabolas
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Bézout's theorem: degree <InlineMath>m</InlineMath> and{' '}
              <InlineMath>n</InlineMath> curves meet in ≤{' '}
              <InlineMath>mn</InlineMath> points
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Ferrari solved quartics via conic intersections
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Algebraic equations ↔ geometric intersections
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={67} questions={section67Questions} />
    </LessonLayout>
  );
}
