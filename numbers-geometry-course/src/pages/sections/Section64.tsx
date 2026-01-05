import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section64Questions } from '../../data/quizzes';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2 className="text-2xl font-semibold mb-4">
        Too Much, Too Little, and Just Right
      </h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        <strong>Conic sections</strong> are curves obtained by cutting a cone
        with a plane. They have been studied since ancient times and appear
        throughout mathematics and physics—in the paths of planets and comets,
        in optics, and in the construction of numbers.
      </p>

      {/* Why Conics are Important */}
      <Callout type="info">
        <p>
          Conic sections are the <em>simplest</em> curves after straight lines.
          Their equations have degree 2, making them natural to study and
          surprisingly ubiquitous in applications.
        </p>
      </Callout>

      {/* The Cone */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Cone</h3>

      <p className="text-dark-200 mb-6">
        Consider the cone defined by:
      </p>

      <MathBlock>
        {`x^2 + y^2 = k^2 z^2`}
      </MathBlock>

      <p className="text-dark-200 my-6">
        Horizontal sections <InlineMath>z = \text{'{constant}'}</InlineMath> are
        circles, and vertical sections through the z-axis are pairs of lines.
        The surface is formed by rotating the lines <InlineMath>y = \pm kz</InlineMath>{' '}
        about the z-axis.
      </p>

      {/* Three Types of Sections */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Three Types of Sections
      </h3>

      <p className="text-dark-200 mb-6">
        A plane not passing through the origin can cut the cone in three
        different ways, yielding curves named from Greek:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Hyperbola" />
          <p className="text-xs text-dark-300">"Too much"</p>
          <p className="text-xs text-dark-400 mt-2">Plane cuts both halves of cone</p>
        </Card>
        <Card>
          <CardHeader title="Ellipse" />
          <p className="text-xs text-dark-300">"Too little"</p>
          <p className="text-xs text-dark-400 mt-2">Plane cuts cone in closed curve</p>
        </Card>
        <Card>
          <CardHeader title="Parabola" />
          <p className="text-xs text-dark-300">"Just right"</p>
          <p className="text-xs text-dark-400 mt-2">Plane parallel to a line in cone</p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        The parabola is the exceptional, transitional case between hyperbola
        and ellipse. This "too much, too little, just right" classification
        appears throughout mathematics!
      </p>

      {/* Standard Form Equations */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Standard Form Equations
      </h3>

      <p className="text-dark-200 mb-6">
        By choosing suitable coordinates, every conic can be written in one of
        these standard forms:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-purple-400 font-semibold">Hyperbola:</p>
            <MathBlock>
              {`\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1`}
            </MathBlock>
          </div>
          <div>
            <p className="text-purple-400 font-semibold">Ellipse:</p>
            <MathBlock>
              {`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1`}
            </MathBlock>
          </div>
          <div>
            <p className="text-purple-400 font-semibold">Parabola:</p>
            <MathBlock>
              {`y = ax^2`}
            </MathBlock>
          </div>
        </div>
      </div>

      {/* Algebraic Classification */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Algebraic Classification
      </h3>

      <p className="text-dark-200 mb-6">
        The type of conic section can be recognized by the signs of the
        coefficients of <InlineMath>x^2</InlineMath> and <InlineMath>y^2</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span>
              <strong>Hyperbola:</strong> Opposite signs (one positive, one negative)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Ellipse:</strong> Same signs (both positive or both negative)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Parabola:</strong> One coefficient is zero
            </span>
          </li>
        </ul>
      </div>

      {/* Example */}
      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> Classify <InlineMath>9x^2 - 4y^2 = 36</InlineMath>
        </p>
        <p className="text-dark-200">
          The coefficients 9 and -4 have opposite signs, so this is a{' '}
          <strong>hyperbola</strong>. Dividing by 36 gives the standard form:
        </p>
        <MathBlock>
          {`\\frac{x^2}{4} - \\frac{y^2}{9} = 1`}
        </MathBlock>
      </div>

      {/* The Circle as Special Case */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Circle as a Special Case
      </h3>

      <p className="text-dark-200 mb-6">
        The circle <InlineMath>x^2 + y^2 = r^2</InlineMath> is a special case of
        the ellipse where <InlineMath>a = b = r</InlineMath>. It's also a conic
        section—a horizontal cut through the cone!
      </p>

      <Callout type="info">
        <p>
          The discovery that all conic sections are quadratic curves (degree 2)
          was made independently by <strong>Fermat</strong> and{' '}
          <strong>Descartes</strong> when they invented analytic geometry. This
          showed that algebraic degree is geometrically significant.
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Conic sections are curves from cutting a cone with a plane
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Three types: hyperbola, ellipse, parabola
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              All conics are degree 2 (quadratic) curves
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Classification by coefficient signs determines type
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={64} questions={section64Questions} />
    </LessonLayout>
  );
}
