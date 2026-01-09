import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2>Variational Principles</h2>

      <p>
        The brachistochrone problem revealed that nature often chooses paths
        that optimize some quantity. This insight led to a profound reformulation
        of mechanics: instead of Newton's forces and accelerations, Lagrange
        and Hamilton described physics through variational principles—nature
        chooses paths that make certain integrals stationary.
      </p>

      <Callout type="info">
        <strong>A New Foundation:</strong> Variational mechanics is mathematically
        equivalent to Newtonian mechanics but often more powerful. It naturally
        handles constraints, generalizes to field theory, and was essential
        for quantum mechanics.
      </Callout>

      <h3>The Euler-Lagrange Equation</h3>

      <p>
        Leonhard Euler and Joseph-Louis Lagrange developed the mathematical
        framework for optimization problems involving integrals:
      </p>

      <Definition title="The Basic Problem">
        <p>
          Find the function <InlineMath>y(x)</InlineMath> that extremizes
          the integral:
        </p>
        <MathBlock>
          {`I[y] = \\int_a^b F(x, y, y')\\, dx`}
        </MathBlock>
        <p className="mt-2">
          subject to boundary conditions <InlineMath>y(a) = y_a</InlineMath>,{' '}
          <InlineMath>y(b) = y_b</InlineMath>.
        </p>
      </Definition>

      <Theorem title="The Euler-Lagrange Equation">
        <p>
          A necessary condition for <InlineMath>y(x)</InlineMath> to extremize{' '}
          <InlineMath>I[y]</InlineMath> is:
        </p>
        <MathBlock>
          {`\\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y'} = 0`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This is a differential equation for the optimal path.
        </p>
      </Theorem>

      <Example title="Shortest Path Between Two Points">
        <p>
          To minimize arc length <InlineMath>{`\\int \\sqrt{1 + y'^2}\\, dx`}</InlineMath>:
        </p>
        <p className="mt-2">
          Here <InlineMath>{`F = \\sqrt{1 + y'^2}`}</InlineMath>. The
          Euler-Lagrange equation gives:
        </p>
        <MathBlock>
          {`\\frac{d}{dx}\\left(\\frac{y'}{\\sqrt{1+y'^2}}\\right) = 0`}
        </MathBlock>
        <p className="mt-2">
          This implies <InlineMath>y' = \text{'{constant}'}</InlineMath>,
          so <InlineMath>y = mx + c</InlineMath>—a straight line, as expected!
        </p>
      </Example>

      <h3>Lagrangian Mechanics</h3>

      <p>
        Lagrange applied variational principles to mechanics, reformulating
        Newton's laws in terms of energy:
      </p>

      <Definition title="The Lagrangian">
        <MathBlock>
          {`L = T - V`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>T</InlineMath> is kinetic energy and{' '}
          <InlineMath>V</InlineMath> is potential energy.
        </p>
      </Definition>

      <Theorem title="Hamilton's Principle (Principle of Least Action)">
        <p>
          The actual path of a mechanical system between times{' '}
          <InlineMath>t_1</InlineMath> and <InlineMath>t_2</InlineMath> is
          the one that makes the action stationary:
        </p>
        <MathBlock>
          {`S = \\int_{t_1}^{t_2} L(q, \\dot{q}, t)\\, dt`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>q</InlineMath> represents generalized coordinates
          and <InlineMath>{`\\dot{q}`}</InlineMath> their time derivatives.
        </p>
      </Theorem>

      <p>
        The Euler-Lagrange equations for the action yield:
      </p>

      <MathBlock>
        {`\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} = 0`}
      </MathBlock>

      <p>
        These are the equations of motion—equivalent to Newton's{' '}
        <InlineMath>F = ma</InlineMath> but in a more general form.
      </p>

      <Example title="The Simple Harmonic Oscillator">
        <p>For a mass on a spring:</p>
        <MathBlock>
          {`T = \\frac{1}{2}m\\dot{x}^2, \\quad V = \\frac{1}{2}kx^2`}
        </MathBlock>
        <MathBlock>
          {`L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2`}
        </MathBlock>
        <p className="mt-2">The Euler-Lagrange equation gives:</p>
        <MathBlock>
          {`m\\ddot{x} + kx = 0`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The familiar equation for simple harmonic motion!
        </p>
      </Example>

      <h3>Hamiltonian Mechanics</h3>

      <p>
        William Rowan Hamilton reformulated mechanics yet again, introducing
        the Hamiltonian:
      </p>

      <Definition title="The Hamiltonian">
        <MathBlock>
          {`H = \\sum_i p_i \\dot{q}_i - L`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`p_i = \\partial L/\\partial \\dot{q}_i`}</InlineMath>{' '}
          is the generalized momentum conjugate to <InlineMath>q_i</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          For many systems, <InlineMath>H = T + V</InlineMath> (total energy).
        </p>
      </Definition>

      <Theorem title="Hamilton's Equations">
        <MathBlock>
          {`\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}, \\quad \\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}`}
        </MathBlock>
        <p className="mt-2">
          These first-order equations are equivalent to the second-order
          Euler-Lagrange equations but reveal the symplectic structure of
          mechanics.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Phase Space:</strong> Hamiltonian mechanics takes place in
        phase space—the space of positions <InlineMath>q</InlineMath> and
        momenta <InlineMath>p</InlineMath>. This perspective was crucial
        for statistical mechanics and quantum mechanics.
      </Callout>

      <h3>The Power of Variational Methods</h3>

      <p>
        Variational principles offer several advantages:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Coordinate freedom:</strong> The Lagrangian formulation
          works in any coordinate system—Cartesian, polar, whatever is
          convenient.
        </li>
        <li>
          <strong>Constraints:</strong> Constraints (like a bead on a wire)
          are handled naturally through generalized coordinates.
        </li>
        <li>
          <strong>Symmetry and conservation:</strong> Noether's theorem
          connects symmetries of <InlineMath>L</InlineMath> to conservation
          laws.
        </li>
        <li>
          <strong>Generalization:</strong> The same framework extends to
          fields, relativity, and quantum mechanics.
        </li>
      </ul>

      <Example title="The Pendulum in Polar Coordinates">
        <p>For a simple pendulum of length <InlineMath>l</InlineMath>:</p>
        <MathBlock>
          {`L = \\frac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta`}
        </MathBlock>
        <p className="mt-2">
          The Euler-Lagrange equation immediately gives:
        </p>
        <MathBlock>
          {`\\ddot{\\theta} + \\frac{g}{l}\\sin\\theta = 0`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          No need to decompose forces into components!
        </p>
      </Example>

      <Callout type="info">
        <strong>Feynman's Path Integrals:</strong> In quantum mechanics,
        Richard Feynman showed that a particle takes "all paths" between
        two points, with each path weighted by{' '}
        <InlineMath>{`e^{iS/\\hbar}`}</InlineMath> where <InlineMath>S</InlineMath>{' '}
        is the action. Classical mechanics emerges when the action is much
        larger than <InlineMath>\hbar</InlineMath>—only the stationary path
        contributes significantly.
      </Callout>

      <SectionQuiz sectionId={48} questions={quizMap[48] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
