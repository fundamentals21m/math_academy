import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section27Questions } from '../../data/quizzes';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2 className="text-2xl font-semibold mb-4">The Seventeenth Century Continued</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Mathematics in the 17th century was by no means confined to France. Across Europe,
        a remarkable constellation of mathematicians—<strong>Cavalieri</strong>, <strong>Wallis</strong>,
        <strong> Huygens</strong>, <strong>Barrow</strong>, <strong>Gregory</strong>, and above all
        <strong> Newton</strong>—developed the tools that would become the calculus and laid the
        foundations for modern physics.
      </p>

      {/* The Mathematicians */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Great Mathematicians of Europe</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Bonaventura Cavalieri (1598–1647)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              An Italian mathematician who rediscovered Archimedes's <strong>method of
              indivisibles</strong> for calculating areas and volumes. He thought of areas
              as "sums" of infinitely many lines.
            </p>
            <p>
              His most important result: <InlineMath>{`\\int_0^a x^n \\, dx = \\frac{a^{n+1}}{n+1}`}</InlineMath>
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>John Wallis (1616–1703)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Professor of geometry at Oxford, chaplain to Charles II. He invented a
              method for teaching deaf mutes and introduced <strong>negative and
              fractional exponents</strong>: <InlineMath>{`x^{-n} = 1/x^n`}</InlineMath> and{' '}
              <InlineMath>{`x^{p/q} = \\sqrt[q]{x^p}`}</InlineMath>.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Nicolaus Mercator (1620–1687)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Worked in Germany and England. Calculated the area under{' '}
              <InlineMath>{`y = 1/(1+x)`}</InlineMath>, discovering the series:
            </p>
            <p className="text-center">
              <InlineMath>{`\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots`}</InlineMath>
            </p>
            <p className="text-xs italic">
              (Not to be confused with Gerhardus Mercator of map projection fame.)
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Christian Huygens (1629–1695)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Dutch mathematician and physicist. Studied the <strong>cycloid</strong> (the
              curve traced by a point on a rolling wheel) and discovered that a pendulum
              must swing in a cycloidal arc for perfectly isochronous motion.
            </p>
            <p>
              His <strong>wave theory of light</strong> explained reflection and refraction
              better than Newton's particle theory.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Isaac Barrow (1630–1677)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Professor of geometry at Cambridge who, in 1669, <strong>resigned his
              professorship</strong> so that the young Newton might take his place.
              Thereafter, Barrow devoted himself to divinity.
            </p>
            <p className="text-xs italic">
              A model of academic generosity rarely imitated!
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>James Gregory (1638–1675)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Scottish mathematician who obtained <strong>Gregory's series</strong>:
            </p>
            <p className="text-center">
              <InlineMath>{`x = \\tan x - \\frac{1}{3}\\tan^3 x + \\frac{1}{5}\\tan^5 x - \\cdots`}</InlineMath>
            </p>
            <p>
              Setting <InlineMath>{`x = \\pi/4`}</InlineMath> gives:{' '}
              <InlineMath>{`\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots`}</InlineMath>
            </p>
          </div>
        </Card>
      </CardGrid>

      {/* Wallis's Product */}
      <Callout type="theorem" title="Wallis's Product for π">
        <p className="mb-2">
          Wallis discovered this remarkable infinite product:
        </p>
        <MathBlock>{`\\frac{\\pi}{2} = \\frac{2}{1} \\cdot \\frac{2}{3} \\cdot \\frac{4}{3} \\cdot \\frac{4}{5} \\cdot \\frac{6}{5} \\cdot \\frac{6}{7} \\cdot \\frac{8}{7} \\cdot \\frac{8}{9} \\cdots`}</MathBlock>
        <p className="text-sm mt-2">
          Although Wallis could not give a rigorous proof, this was one of the first
          infinite product formulas for <InlineMath>{`\\pi`}</InlineMath>.
        </p>
      </Callout>

      {/* Newton */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Isaac Newton (1642–1727)</h3>

      <Card className="mb-6">
        <CardHeader>The Life of Newton</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Newton never knew his father, who had died before his birth. He was supposed
            to learn farming but spent his time doing experiments and building mechanical
            models. Finally, his uncle sent him to <strong>Cambridge</strong>, where he
            read Euclid, Descartes, Kepler, and Wallis, and attended the lectures of
            Isaac Barrow.
          </p>
          <p>
            By the time he got his B.A., Newton had discovered <strong>derivatives</strong>
            (which he called "fluxions") and established the <strong>Binomial Theorem</strong>{' '}
            for integer and fractional exponents.
          </p>
          <p>
            During the <strong>plague of 1665–66</strong>, Newton withdrew to the family
            farm and thought about gravitation. Back in Cambridge, he took over Barrow's
            professorship in 1669 and discovered the decomposition of white light by a prism.
          </p>
        </div>
      </Card>

      <Callout type="theorem" title="Newton's Binomial Theorem">
        <p className="mb-2">
          For any real exponent <InlineMath>{`n`}</InlineMath> (not just positive integers):
        </p>
        <MathBlock>{`(1 + x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\cdots`}</MathBlock>
        <p className="text-sm mt-2">
          Newton used this to expand functions into power series, then integrated
          term by term using Wallis's method (replacing <InlineMath>{`x^n`}</InlineMath>{' '}
          by <InlineMath>{`x^{n+1}/(n+1)`}</InlineMath>).
        </p>
      </Callout>

      {/* Universal Gravitation */}
      <h4 className="text-lg font-semibold mt-6 mb-3">Universal Gravitation</h4>

      <p className="text-dark-200 mb-4">
        Newton's greatest contribution was his theory of <strong>universal gravitation</strong>,
        which provided a rational explanation for the motions of the heavenly bodies. The
        fundamental idea was simple: <em>the same force which causes an apple to fall must
        act on the moon and the planets</em>.
      </p>

      <Card className="mb-6">
        <CardHeader>Newton's Law of Gravitation</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Given two bodies with masses <InlineMath>{`M`}</InlineMath> and{' '}
            <InlineMath>{`m`}</InlineMath>, at distance <InlineMath>{`r`}</InlineMath> apart,
            the gravitational force between them is:
          </p>
          <MathBlock>{`F = \\frac{GMm}{r^2}`}</MathBlock>
          <p>
            where <InlineMath>{`G`}</InlineMath> is a universal constant. This{' '}
            <strong>inverse square law</strong> implies Kepler's laws of planetary motion,
            and conversely Kepler's laws imply the inverse square law.
          </p>
          <p className="text-sm">
            At first Newton assumed planets were points. It took him <strong>20 years</strong>{' '}
            to prove that a solid sphere gravitates as if all its mass were concentrated
            at the center—only then did he publish.
          </p>
        </div>
      </Card>

      {/* Principia */}
      <Card className="mb-6">
        <CardHeader>The Principia (1686)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Newton's epoch-making <em>Principia Mathematica</em> presented his theory of
            mechanics and gravitation. To avoid controversy about his calculus methods, he
            replaced his original arguments with <strong>classical geometrical proofs</strong>{' '}
            in the style of Euclid.
          </p>
          <div className="bg-dark-900 rounded p-3">
            <p className="font-semibold text-amber-400 mb-2">Contents of the Principia:</p>
            <ul className="space-y-1 text-sm">
              <li>• Book I: The laws of motion and mechanics</li>
              <li>• Book II: Hydrostatics and hydrodynamics (refuting Descartes's vortices)</li>
              <li>• Book III: The system of the world (planetary motions, tides, comets)</li>
            </ul>
          </div>
          <p className="text-sm italic">
            Newton's theories were soon accepted everywhere. Even in France, Voltaire
            advocated Newton against Descartes (in 1733).
          </p>
        </div>
      </Card>

      {/* Newton's Notation */}
      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 mb-2"><strong>Newton's Calculus Notation:</strong></p>
        <ul className="text-dark-300 space-y-2 text-sm">
          <li>• <strong>Fluxions:</strong> Newton wrote <InlineMath>{`\\dot{x}`}</InlineMath> and{' '}
            <InlineMath>{`\\ddot{x}`}</InlineMath> for first and second derivatives with respect to time</li>
          <li>• <strong>Fluents:</strong> His name for indefinite integrals (antiderivatives)</li>
          <li>• <strong>Quadratures:</strong> His name for definite integrals (areas under curves)</li>
        </ul>
        <p className="text-dark-300 text-sm mt-2">
          Newton's dot notation is still used in physics today for time derivatives!
        </p>
      </div>

      {/* Newton's Later Life */}
      <p className="text-dark-200 mb-4">
        In 1696, Newton abandoned his Cambridge professorship for a government position
        in London, and three years later he was <strong>Master of the Mint</strong>. He
        was knighted in 1705.
      </p>

      <Callout type="note" title="Newton's Humility">
        <blockquote className="italic text-dark-300">
          "I do not know what I may appear to the world; but to myself I seem to have
          been only like a boy, playing on the sea-shore, and diverting myself, in now
          and then finding a smoother pebble, or a prettier shell than ordinary, whilst
          the great ocean of truth lay all undiscovered before me."
        </blockquote>
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Cavalieri</strong> developed the method of indivisibles:{' '}
            <InlineMath>{`\\int_0^a x^n dx = a^{n+1}/(n+1)`}</InlineMath></li>
          <li>• <strong>Wallis</strong> introduced fractional/negative exponents and found an infinite product for{' '}
            <InlineMath>{`\\pi`}</InlineMath></li>
          <li>• <strong>Mercator</strong> discovered the series for{' '}
            <InlineMath>{`\\ln(1+x)`}</InlineMath></li>
          <li>• <strong>Huygens</strong> studied the cycloid and developed the wave theory of light</li>
          <li>• <strong>Barrow</strong> resigned his Cambridge chair so Newton could have it</li>
          <li>• <strong>Gregory</strong> found <InlineMath>{`\\pi/4 = 1 - 1/3 + 1/5 - 1/7 + \\cdots`}</InlineMath></li>
          <li>• <strong>Newton</strong> discovered fluxions (derivatives) and the generalized Binomial Theorem</li>
          <li>• Newton's <strong>Law of Gravitation</strong>: <InlineMath>{`F = GMm/r^2`}</InlineMath> explains planetary motion</li>
          <li>• The <strong>Principia</strong> (1686) unified mechanics and astronomy</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={27} questions={section27Questions} />
    </LessonLayout>
  );
}
