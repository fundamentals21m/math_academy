import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { SectionQuiz } from '../../components/quiz';
import { section12Questions } from '../../data/quizzes';
import { PhysicsCalculus } from '../../components/visualizations';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-semibold mb-4">Calculus and Physics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Calculus wasn't invented as an abstract mathematical exercise—it was created to describe
        the physical world. From Newton's laws of motion to Maxwell's equations of electromagnetism
        to Einstein's general relativity, <strong>the language of physics is calculus</strong>.
        Understanding this connection reveals why calculus is so central to science.
      </p>

      <Callout type="info">
        <p className="italic">
          "The book of nature is written in the language of mathematics... its characters are
          triangles, circles, and other geometric figures, without which it is humanly impossible
          to understand a single word of it."
        </p>
        <p className="text-sm text-dark-400 mt-2">— Galileo Galilei (though he didn't yet have calculus!)</p>
      </Callout>

      {/* Newton's Revolution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Newton's Unification</h2>

      <p className="text-dark-200 mb-6">
        Before Newton, the heavens and Earth were thought to follow different laws. Celestial
        objects moved in perfect circles (or epicycles); earthly objects fell straight down.
        Newton's calculus-based physics unified everything under a single framework.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">Newton's Second Law</h4>
        <MathBlock>{`F = ma = m\\frac{d^2x}{dt^2}`}</MathBlock>
        <p className="text-dark-200 mt-4">
          Force equals mass times acceleration. Since acceleration is the second derivative of
          position, this law is fundamentally a <em>differential equation</em>—a statement about
          derivatives that determines how objects move.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Combined with the law of gravity (<InlineMath>{'F = Gm_1m_2/r^2'}</InlineMath>), Newton
        could derive Kepler's laws of planetary motion, explain the tides, predict the return
        of comets, and much more—all from a few basic principles expressed through calculus.
      </p>

      {/* Classical Mechanics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Language of Motion</h2>

      <CardGrid>
        <Card>
          <CardHeader title="Position, Velocity, Acceleration" />
          <div className="space-y-2 text-sm text-dark-300">
            <p><InlineMath>{'x(t)'}</InlineMath> — position</p>
            <p><InlineMath>{'v(t) = \\frac{dx}{dt}'}</InlineMath> — velocity</p>
            <p><InlineMath>{'a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}'}</InlineMath> — acceleration</p>
          </div>
        </Card>
        <Card>
          <CardHeader title="Work and Energy" />
          <div className="space-y-2 text-sm text-dark-300">
            <p><InlineMath>{'W = \\int F\\,dx'}</InlineMath> — work</p>
            <p><InlineMath>{'KE = \\frac{1}{2}mv^2'}</InlineMath> — kinetic energy</p>
            <p><InlineMath>{'P = \\frac{dW}{dt}'}</InlineMath> — power</p>
          </div>
        </Card>
        <Card>
          <CardHeader title="Momentum" />
          <div className="space-y-2 text-sm text-dark-300">
            <p><InlineMath>{'p = mv'}</InlineMath> — momentum</p>
            <p><InlineMath>{'F = \\frac{dp}{dt}'}</InlineMath> — Newton's law (general form)</p>
            <p>Impulse = <InlineMath>{'\\int F\\,dt'}</InlineMath></p>
          </div>
        </Card>
        <Card>
          <CardHeader title="Rotation" />
          <div className="space-y-2 text-sm text-dark-300">
            <p><InlineMath>{'\\omega = \\frac{d\\theta}{dt}'}</InlineMath> — angular velocity</p>
            <p><InlineMath>{'\\alpha = \\frac{d\\omega}{dt}'}</InlineMath> — angular acceleration</p>
            <p><InlineMath>{'\\tau = I\\alpha'}</InlineMath> — torque equation</p>
          </div>
        </Card>
      </CardGrid>

      {/* Interactive Visualization */}
      <PhysicsCalculus />

      {/* Electromagnetism */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Maxwell's Equations</h2>

      <p className="text-dark-200 mb-6">
        In the 1860s, James Clerk Maxwell unified electricity and magnetism into a single theory,
        expressed through four differential equations. These equations predicted electromagnetic
        waves traveling at the speed of light—revealing that light itself is electromagnetic.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-dark-800 rounded-xl p-4">
          <p className="text-sm text-dark-400 mb-2">Gauss's Law (Electric)</p>
          <MathBlock>{`\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0}`}</MathBlock>
        </div>
        <div className="bg-dark-800 rounded-xl p-4">
          <p className="text-sm text-dark-400 mb-2">Gauss's Law (Magnetic)</p>
          <MathBlock>{`\\nabla \\cdot \\mathbf{B} = 0`}</MathBlock>
        </div>
        <div className="bg-dark-800 rounded-xl p-4">
          <p className="text-sm text-dark-400 mb-2">Faraday's Law</p>
          <MathBlock>{`\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}`}</MathBlock>
        </div>
        <div className="bg-dark-800 rounded-xl p-4">
          <p className="text-sm text-dark-400 mb-2">Ampère-Maxwell Law</p>
          <MathBlock>{`\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\epsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t}`}</MathBlock>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>From Equations to Technology:</strong> Maxwell's equations—pure calculus—gave
          us radio, television, radar, cell phones, WiFi, and countless other technologies. The
          mathematics predicted phenomena that were later engineered into devices.
        </p>
      </Callout>

      {/* Thermodynamics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Heat and Entropy</h2>

      <p className="text-dark-200 mb-6">
        Thermodynamics—the physics of heat and energy—relies heavily on calculus:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-amber-400 text-xl">🔥</span>
          <div>
            <p className="font-semibold">Heat Equation</p>
            <MathBlock>{`\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u`}</MathBlock>
            <p className="text-sm text-dark-400 mt-2">
              Describes how heat diffuses through a material over time.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-blue-400 text-xl">❄️</span>
          <div>
            <p className="font-semibold">Entropy</p>
            <MathBlock>{`dS = \\frac{\\delta Q}{T}`}</MathBlock>
            <p className="text-sm text-dark-400 mt-2">
              The second law says entropy (disorder) always increases in closed systems.
            </p>
          </div>
        </div>
      </div>

      {/* Quantum Mechanics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Quantum World</h2>

      <p className="text-dark-200 mb-6">
        Even quantum mechanics—where particles behave as waves and certainty gives way to
        probability—is built on calculus. Schrödinger's equation, the fundamental law of
        quantum physics, is a differential equation:
      </p>

      <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border border-purple-700/30 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-300 mb-4">Schrödinger Equation</h4>
        <MathBlock>{`i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\nabla^2\\Psi + V\\Psi`}</MathBlock>
        <p className="text-dark-200 mt-4">
          This equation determines how the wave function <InlineMath>{'\\Psi'}</InlineMath>{' '}
          evolves in time. The wave function's absolute square gives the probability of
          finding a particle at any location.
        </p>
      </div>

      {/* General Relativity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Einstein's Curved Spacetime</h2>

      <p className="text-dark-200 mb-6">
        Einstein's general relativity—our best theory of gravity—describes gravity not as a
        force but as curvature of spacetime. The mathematics requires differential geometry,
        a generalization of calculus to curved spaces.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">Einstein Field Equations</h4>
        <MathBlock>{`G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}`}</MathBlock>
        <p className="text-dark-200 mt-4">
          Matter tells spacetime how to curve; curved spacetime tells matter how to move.
          Behind the compact notation lies an intricate system of differential equations.
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Challenge:</strong> These equations are notoriously difficult to solve.
          Only a handful of exact solutions are known, and numerical methods (computer simulations
          using calculus) are essential for understanding phenomena like black hole mergers.
        </p>
      </Callout>

      {/* Why Calculus Works */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Does Calculus Describe Physics?</h2>

      <p className="text-dark-200 mb-6">
        This is a deep question. Some observations:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-4 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>Local laws, global effects:</strong> Physical laws are often stated locally
              (at each point in space and time), but we observe global behavior. Calculus
              connects the two through integration.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>Continuous change:</strong> Nature seems to change smoothly rather than in
              discrete jumps (at least at scales we normally observe). Calculus is the mathematics
              of smooth change.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>Optimization:</strong> Many physical systems minimize or maximize something
              (energy, action, entropy). Calculus finds extrema—exactly what nature seems to do.
            </span>
          </li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Newton invented calculus to describe motion; physics and calculus have been intertwined ever since.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The fundamental laws of physics—from F = ma to Maxwell's equations to Schrödinger's equation—are differential equations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Calculus enables us to go from local laws (what happens at each point) to global predictions (what we observe).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Modern technology—from electronics to GPS to medical imaging—rests on physics expressed through calculus.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={12} questions={section12Questions} />
    </LessonLayout>
  );
}
