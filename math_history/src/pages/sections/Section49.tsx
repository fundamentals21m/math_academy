import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2>Conservation Laws</h2>

      <p>
        Why is energy conserved? Why is momentum conserved? For centuries,
        these were taken as empirical facts or divine decrees. In 1918,
        Emmy Noether proved the profound connection: every continuous
        symmetry of a physical system corresponds to a conserved quantity.
        This is one of the deepest results in all of physics.
      </p>

      <Callout type="info">
        <strong>Emmy Noether (1882-1935):</strong> Despite facing discrimination
        as a woman in academia, Noether became one of the most influential
        mathematicians of the 20th century. Einstein called her theorem
        "a monument of mathematical thinking."
      </Callout>

      <h3>Symmetry and Conservation</h3>

      <p>
        The intuition is elegant: if a system looks the same after some
        transformation, that "sameness" manifests as something being conserved.
      </p>

      <Definition title="Symmetry of the Lagrangian">
        <p>
          A transformation is a <strong>symmetry</strong> if it leaves the
          Lagrangian unchanged (or changes it only by a total time derivative).
        </p>
        <p className="mt-2 text-dark-400">
          If the physics doesn't depend on "where" or "when," something is
          conserved.
        </p>
      </Definition>

      <Theorem title="Noether's Theorem (1918)">
        <p>
          Every continuous symmetry of the action corresponds to a conserved
          quantity. Specifically, if the Lagrangian is invariant under an
          infinitesimal transformation{' '}
          <InlineMath>{`q_i \\to q_i + \\varepsilon\\eta_i(q,t)`}</InlineMath>,
          then the quantity:
        </p>
        <MathBlock>
          {`Q = \\sum_i \\frac{\\partial L}{\\partial \\dot{q}_i} \\eta_i`}
        </MathBlock>
        <p className="mt-2">
          is conserved: <InlineMath>{`\\frac{dQ}{dt} = 0`}</InlineMath>.
        </p>
      </Theorem>

      <h3>Energy Conservation</h3>

      <p>
        The most familiar conservation law comes from time-translation
        symmetry:
      </p>

      <Theorem title="Time Translation → Energy Conservation">
        <p>
          If the Lagrangian does not explicitly depend on time
          (<InlineMath>{`\\partial L/\\partial t = 0`}</InlineMath>), then
          the <strong>Hamiltonian</strong> (total energy) is conserved:
        </p>
        <MathBlock>
          {`H = \\sum_i p_i \\dot{q}_i - L = \\text{constant}`}
        </MathBlock>
      </Theorem>

      <Example title="Why Energy is Conserved">
        <p>
          The laws of physics today are the same as yesterday and will be
          the same tomorrow. This time-translation symmetry—nothing special
          about any particular moment—implies energy conservation.
        </p>
        <p className="mt-2 text-dark-400">
          If the laws changed over time, energy wouldn't be conserved!
        </p>
      </Example>

      <h3>Momentum Conservation</h3>

      <p>
        Space-translation symmetry gives momentum conservation:
      </p>

      <Theorem title="Space Translation → Momentum Conservation">
        <p>
          If the Lagrangian is invariant under translations in direction{' '}
          <InlineMath>\vec{n}</InlineMath>, then the component of total
          momentum in that direction is conserved:
        </p>
        <MathBlock>
          {`\\vec{P} \\cdot \\vec{n} = \\text{constant}`}
        </MathBlock>
      </Theorem>

      <Example title="Why Momentum is Conserved">
        <p>
          If space is homogeneous—no point is special—then the total momentum
          of an isolated system is conserved. This is why collisions conserve
          momentum: the physics doesn't care where the collision happens.
        </p>
      </Example>

      <h3>Angular Momentum Conservation</h3>

      <p>
        Rotational symmetry yields angular momentum conservation:
      </p>

      <Theorem title="Rotation → Angular Momentum Conservation">
        <p>
          If the Lagrangian is invariant under rotations about an axis,
          the component of angular momentum about that axis is conserved:
        </p>
        <MathBlock>
          {`L_z = \\sum_i (x_i p_{yi} - y_i p_{xi}) = \\text{constant}`}
        </MathBlock>
      </Theorem>

      <Example title="The Spinning Skater">
        <p>
          A figure skater pulling in their arms spins faster. No external
          torques act, so angular momentum <InlineMath>L = I\omega</InlineMath>{' '}
          is conserved. Reducing moment of inertia <InlineMath>I</InlineMath>{' '}
          increases angular velocity <InlineMath>\omega</InlineMath>.
        </p>
      </Example>

      <h3>The Correspondence Table</h3>

      <p>
        Noether's theorem provides a complete dictionary between symmetries
        and conservation laws:
      </p>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-dark-700">
          <thead>
            <tr className="bg-dark-800">
              <th className="border border-dark-700 px-4 py-2 text-left">Symmetry</th>
              <th className="border border-dark-700 px-4 py-2 text-left">Conserved Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-dark-700 px-4 py-2">Time translation</td>
              <td className="border border-dark-700 px-4 py-2">Energy</td>
            </tr>
            <tr>
              <td className="border border-dark-700 px-4 py-2">Space translation</td>
              <td className="border border-dark-700 px-4 py-2">Linear momentum</td>
            </tr>
            <tr>
              <td className="border border-dark-700 px-4 py-2">Rotation</td>
              <td className="border border-dark-700 px-4 py-2">Angular momentum</td>
            </tr>
            <tr>
              <td className="border border-dark-700 px-4 py-2">Gauge symmetry (electromagnetism)</td>
              <td className="border border-dark-700 px-4 py-2">Electric charge</td>
            </tr>
            <tr>
              <td className="border border-dark-700 px-4 py-2">Lorentz invariance</td>
              <td className="border border-dark-700 px-4 py-2">Relativistic 4-momentum</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Beyond Classical Mechanics</h3>

      <p>
        Noether's theorem extends far beyond classical mechanics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Quantum mechanics:</strong> Conservation laws become
          operators that commute with the Hamiltonian.
        </li>
        <li>
          <strong>Field theory:</strong> Symmetries lead to conserved
          currents, not just conserved quantities.
        </li>
        <li>
          <strong>Particle physics:</strong> Gauge symmetries explain
          conservation of charge, color, and other quantum numbers.
        </li>
        <li>
          <strong>General relativity:</strong> The theorem becomes more
          subtle but still applies.
        </li>
      </ul>

      <Callout type="note">
        <strong>Discrete Symmetries:</strong> Noether's theorem applies to
        continuous symmetries. Discrete symmetries (like reflection or
        time reversal) lead to multiplicative quantum numbers rather than
        conserved quantities, and can be violated (as with parity violation
        in weak interactions).
      </Callout>

      <h3>Historical Impact</h3>

      <p>
        Noether's theorem unified centuries of empirical observations:
      </p>

      <Example title="From Empiricism to Understanding">
        <p>Before Noether:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Energy conservation: observed empirically, puzzling</li>
          <li>Momentum conservation: a separate law</li>
          <li>Angular momentum conservation: yet another principle</li>
        </ul>
        <p className="mt-2">After Noether:</p>
        <ul className="list-disc list-inside mt-2">
          <li>All are consequences of spacetime symmetries</li>
          <li>If spacetime has structure, conservation laws follow</li>
          <li>New symmetries predict new conservation laws</li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>The Modern View:</strong> Today, physicists often work
        backwards—postulating symmetries and deriving their consequences.
        The Standard Model of particle physics is built on gauge symmetries,
        with Noether's theorem guaranteeing the conservation laws we observe.
      </Callout>

      <SectionQuiz sectionId={49} questions={quizMap[49] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
