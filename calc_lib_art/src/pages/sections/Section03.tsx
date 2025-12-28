import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section03Questions } from '../../data/quizzes';
import { NewtonFluxions } from '../../components/visualizations';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-semibold mb-4">Newton and the Falling Apple</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In the summer of 1665, the Great Plague swept through England, and Cambridge University
        sent its students home. A 23-year-old named <strong>Isaac Newton</strong> retreated to
        his family's farm in Woolsthorpe. In the next 18 months, isolated from the world, he would
        revolutionize mathematics, physics, and our understanding of the universe.
      </p>

      <Callout type="info">
        <p className="italic">
          "In those days I was in the prime of my age for invention, and minded Mathematics
          and Philosophy more than at any time since."
        </p>
        <p className="text-sm text-dark-400 mt-2">— Isaac Newton, recalling his "year of wonders"</p>
      </Callout>

      {/* The Apple */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Apple and the Moon</h2>

      <p className="text-dark-200 mb-6">
        According to legend, Newton saw an apple fall and wondered: if the force that pulls
        the apple downward extends to the treetops, does it reach even higher? To the mountains?
        To the Moon?
      </p>

      <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border border-amber-700/30 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4">
          The Moon is constantly falling toward Earth—but it also moves sideways fast enough
          that it keeps missing! The same force that drops the apple curves the Moon's path
          into an orbit.
        </p>
        <p className="text-sm text-dark-400">
          To prove this, Newton needed to calculate how fast objects accelerate under gravity
          at different distances. This required inventing calculus.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Newton's insight was breathtaking: <strong>the same mathematics describes the falling
        apple and the orbiting Moon</strong>. The laws of physics are universal. But expressing
        these laws required a new kind of mathematics—one that could handle continuous change.
      </p>

      {/* The Method of Fluxions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Method of Fluxions</h2>

      <p className="text-dark-200 mb-6">
        Newton called his new mathematics the "method of fluxions." He imagined quantities as
        <em> flowing</em> through time, like water in a river.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Fluent (x)" />
          <p className="text-sm text-dark-300 mb-3">
            A quantity that flows or changes over time. We might call it a variable today.
            Position, velocity, and any changing quantity are fluents.
          </p>
          <p className="text-xs text-dark-500">Newton's notation: x, y, z</p>
        </Card>
        <Card>
          <CardHeader title="Fluxion (ẋ)" />
          <p className="text-sm text-dark-300 mb-3">
            The rate at which a fluent changes—its velocity or derivative. Newton marked
            fluxions with a dot above the variable.
          </p>
          <p className="text-xs text-dark-500">Newton's notation: ẋ, ẏ, ż</p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        If position is <MathInline>{'x'}</MathInline>, then velocity is its fluxion{' '}
        <MathInline>{'\\dot{x}'}</MathInline>, and acceleration is the fluxion of the fluxion:{' '}
        <MathInline>{'\\ddot{x}'}</MathInline>.
      </p>

      <MathBlock>{`\\text{Position: } x \\quad \\longrightarrow \\quad \\text{Velocity: } \\dot{x} \\quad \\longrightarrow \\quad \\text{Acceleration: } \\ddot{x}`}</MathBlock>

      {/* Interactive Visualization */}
      <NewtonFluxions />

      {/* Newton's Laws */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Physics Written in Calculus</h2>

      <p className="text-dark-200 mb-6">
        Newton's laws of motion and gravitation are naturally expressed using calculus:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-dark-800 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-primary-300 mb-2">Newton's Second Law</h4>
          <MathBlock>{`F = ma = m\\ddot{x}`}</MathBlock>
          <p className="text-sm text-dark-400 mt-3">
            Force equals mass times acceleration. Acceleration is the second derivative
            of position—the rate of change of the rate of change.
          </p>
        </div>

        <div className="bg-dark-800 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-primary-300 mb-2">Universal Gravitation</h4>
          <MathBlock>{`F = G\\frac{m_1 m_2}{r^2}`}</MathBlock>
          <p className="text-sm text-dark-400 mt-3">
            Every mass attracts every other mass with a force proportional to their masses
            and inversely proportional to the square of the distance between them.
          </p>
        </div>

        <div className="bg-dark-800 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-primary-300 mb-2">Planetary Motion</h4>
          <MathBlock>{`\\frac{d^2\\vec{r}}{dt^2} = -\\frac{GM}{r^2}\\hat{r}`}</MathBlock>
          <p className="text-sm text-dark-400 mt-3">
            This differential equation, combining Newton's laws, explains why planets move
            in ellipses—a fact Kepler had discovered empirically but could not explain.
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Power of Calculus:</strong> With his new mathematics, Newton could derive
          Kepler's laws of planetary motion from first principles. What had been mysterious
          patterns in astronomical data became logical consequences of universal laws.
        </p>
      </Callout>

      {/* The Reluctant Publisher */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Reluctant Publisher</h2>

      <p className="text-dark-200 mb-6">
        Remarkably, Newton kept his discoveries largely secret for nearly 20 years. He had
        developed calculus by 1666, but his masterwork, the <em>Principia Mathematica</em>,
        wasn't published until 1687—and even then, only because Edmund Halley (of comet fame)
        persuaded and funded him.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">Why the Delay?</h4>
        <ul className="space-y-2 text-dark-300">
          <li className="flex items-start gap-2">
            <span className="text-primary-400">•</span>
            Newton was notoriously secretive and feared criticism
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-400">•</span>
            He spent years on alchemy and theology
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-400">•</span>
            He struggled to prove his theory worked for spheres (not just point masses)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-400">•</span>
            He had bitter disputes with other scientists (especially Robert Hooke)
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>A Fateful Choice:</strong> In the <em>Principia</em>, Newton deliberately
          presented his physics using classical geometry rather than his new calculus, believing
          it would be more acceptable to readers. This made the book nearly unreadable and
          slowed the adoption of his methods.
        </p>
      </Callout>

      {/* Newton's Character */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Man Behind the Mathematics</h2>

      <p className="text-dark-200 mb-6">
        Newton was brilliant but difficult—paranoid, vindictive, and obsessive. His feuds with
        Hooke, Leibniz, and others consumed years of his life. Yet his achievements are staggering:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Mathematics" />
          <p className="text-sm text-dark-300">
            Invented calculus. Developed the binomial theorem for arbitrary exponents.
            Founded the theory of power series.
          </p>
        </Card>
        <Card>
          <CardHeader title="Physics" />
          <p className="text-sm text-dark-300">
            Laws of motion. Universal gravitation. Mechanics of fluids. Theory of tides.
            Speed of sound.
          </p>
        </Card>
        <Card>
          <CardHeader title="Optics" />
          <p className="text-sm text-dark-300">
            Discovered that white light is a mixture of colors. Built the first reflecting
            telescope. Studied interference patterns.
          </p>
        </Card>
        <Card>
          <CardHeader title="Later Life" />
          <p className="text-sm text-dark-300">
            Became Warden of the Royal Mint. President of the Royal Society. Knighted in 1705.
            Died wealthy and famous in 1727.
          </p>
        </Card>
      </CardGrid>

      <div className="mt-8">
        <Callout type="info">
          <p className="italic">
            "If I have seen further, it is by standing on the shoulders of giants."
          </p>
          <p className="text-sm text-dark-400 mt-2">
            — Newton, in a letter to Hooke (1675). Some scholars think this was actually
            a veiled insult, as Hooke was short.
          </p>
        </Callout>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Newton invented calculus (the "method of fluxions") to solve problems in physics, particularly planetary motion.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>He used dots (ẋ, ẍ) to denote derivatives with respect to time—notation still used in physics today.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Newton's laws of motion and gravitation, expressed through calculus, unified terrestrial and celestial mechanics.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Despite his genius, Newton was secretive and combative, leading to the famous priority dispute with Leibniz.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={3} questions={section03Questions} />
    </LessonLayout>
  );
}
