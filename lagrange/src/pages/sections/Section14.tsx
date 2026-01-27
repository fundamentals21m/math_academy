import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">System Dynamics: Momentum and Angular Momentum</h2>

      <p className="mb-4">
        Before diving into the specific mechanics of rigid bodies, we establish the general theorems
        governing systems of particles. These foundational results apply to any collection of interacting
        particles and provide the conceptual framework for understanding rigid body motion.
      </p>

      <p className="mb-4">
        A system of <InlineMath>{'N'}</InlineMath> particles is characterized by their masses
        <InlineMath>{'m_1, \\ldots, m_N'}</InlineMath> and positions <InlineMath>{'\\mathbf{r}_1, \\ldots, \\mathbf{r}_N'}</InlineMath>.
        The particles interact through internal forces <InlineMath>{'\\mathbf{f}_{ij}'}</InlineMath> (force
        on particle <InlineMath>{'i'}</InlineMath> due to particle <InlineMath>{'j'}</InlineMath>) and may
        also experience external forces <InlineMath>{'\\mathbf{F}_i^{\\text{ext}}'}</InlineMath>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Center of Mass</h3>

      <Definition title="Center of Mass">
        <p className="mb-2">
          The center of mass of a system of particles is the mass-weighted average position:
        </p>
        <MathBlock>{'\\mathbf{R} = \\frac{1}{M}\\sum_{i=1}^{N} m_i \\mathbf{r}_i'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'M = \\sum_{i=1}^{N} m_i'}</InlineMath> is the total mass of the system.
        </p>
      </Definition>

      <p className="mb-4">
        The center of mass has a special property: it moves as if all the mass were concentrated there
        and all external forces were applied there. This is the content of the first fundamental theorem.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Total Momentum</h3>

      <Definition title="Total Linear Momentum">
        <p className="mb-2">
          The total linear momentum of a system is the sum of individual momenta:
        </p>
        <MathBlock>{'\\mathbf{P} = \\sum_{i=1}^{N} m_i \\dot{\\mathbf{r}}_i = M\\dot{\\mathbf{R}}'}</MathBlock>
        <p className="mt-2">
          This equals the total mass times the velocity of the center of mass.
        </p>
      </Definition>

      <Theorem
        title="Momentum Theorem"
        proof={
          <>
            <p className="mb-2">
              The equation of motion for particle <InlineMath>{'i'}</InlineMath> is:
            </p>
            <MathBlock>{'m_i\\ddot{\\mathbf{r}}_i = \\mathbf{F}_i^{\\text{ext}} + \\sum_{j \\neq i} \\mathbf{f}_{ij}'}</MathBlock>
            <p className="mb-2">
              Summing over all particles:
            </p>
            <MathBlock>{'\\sum_i m_i\\ddot{\\mathbf{r}}_i = \\sum_i \\mathbf{F}_i^{\\text{ext}} + \\sum_i \\sum_{j \\neq i} \\mathbf{f}_{ij}'}</MathBlock>
            <p className="mb-2">
              By Newton's third law, <InlineMath>{'\\mathbf{f}_{ij} = -\\mathbf{f}_{ji}'}</InlineMath>, so the
              internal forces sum to zero:
            </p>
            <MathBlock>{'\\sum_i \\sum_{j \\neq i} \\mathbf{f}_{ij} = \\sum_{i < j} (\\mathbf{f}_{ij} + \\mathbf{f}_{ji}) = 0'}</MathBlock>
            <p>
              Therefore <InlineMath>{'M\\ddot{\\mathbf{R}} = \\mathbf{F}^{\\text{ext}}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The rate of change of total momentum equals the total external force:
        </p>
        <MathBlock>{'\\frac{d\\mathbf{P}}{dt} = M\\ddot{\\mathbf{R}} = \\mathbf{F}^{\\text{ext}} = \\sum_{i=1}^{N} \\mathbf{F}_i^{\\text{ext}}'}</MathBlock>
        <p className="mt-2">
          Internal forces cancel in pairs by Newton's third law and do not affect the total momentum.
        </p>
      </Theorem>

      <Callout type="info" title="Conservation of Momentum">
        <p>
          If the total external force vanishes, <InlineMath>{'\\mathbf{F}^{\\text{ext}} = 0'}</InlineMath>,
          then the total momentum is conserved: <InlineMath>{'\\mathbf{P} = \\text{const}'}</InlineMath>.
          The center of mass moves uniformly in a straight line.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Angular Momentum</h3>

      <Definition title="Total Angular Momentum">
        <p className="mb-2">
          The total angular momentum of a system about the origin is:
        </p>
        <MathBlock>{'\\mathbf{L} = \\sum_{i=1}^{N} \\mathbf{r}_i \\times (m_i\\dot{\\mathbf{r}}_i)'}</MathBlock>
        <p className="mt-2">
          This can be decomposed into orbital and spin contributions (see below).
        </p>
      </Definition>

      <Theorem
        title="Angular Momentum Theorem"
        proof={
          <>
            <p className="mb-2">
              Differentiating the angular momentum:
            </p>
            <MathBlock>{'\\frac{d\\mathbf{L}}{dt} = \\sum_i \\dot{\\mathbf{r}}_i \\times (m_i\\dot{\\mathbf{r}}_i) + \\sum_i \\mathbf{r}_i \\times (m_i\\ddot{\\mathbf{r}}_i)'}</MathBlock>
            <p className="mb-2">
              The first term vanishes (cross product of parallel vectors). Using the equation of motion:
            </p>
            <MathBlock>{'\\frac{d\\mathbf{L}}{dt} = \\sum_i \\mathbf{r}_i \\times \\mathbf{F}_i^{\\text{ext}} + \\sum_i \\sum_{j \\neq i} \\mathbf{r}_i \\times \\mathbf{f}_{ij}'}</MathBlock>
            <p className="mb-2">
              The internal force contribution can be written as:
            </p>
            <MathBlock>{'\\sum_i \\sum_{j \\neq i} \\mathbf{r}_i \\times \\mathbf{f}_{ij} = \\sum_{i < j} (\\mathbf{r}_i - \\mathbf{r}_j) \\times \\mathbf{f}_{ij}'}</MathBlock>
            <p>
              This vanishes if internal forces act along the line joining particles (strong form of Newton's
              third law), since <InlineMath>{'\\mathbf{r}_i - \\mathbf{r}_j'}</InlineMath> is then parallel
              to <InlineMath>{'\\mathbf{f}_{ij}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The rate of change of angular momentum equals the total external torque:
        </p>
        <MathBlock>{'\\frac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau}^{\\text{ext}} = \\sum_{i=1}^{N} \\mathbf{r}_i \\times \\mathbf{F}_i^{\\text{ext}}'}</MathBlock>
        <p className="mt-2">
          provided internal forces are central (directed along the line joining particles).
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Decomposition of Angular Momentum</h3>

      <p className="mb-4">
        It is often useful to decompose the angular momentum into contributions from the motion of the
        center of mass (orbital) and motion about the center of mass (spin).
      </p>

      <Definition title="Orbital and Spin Angular Momentum">
        <p className="mb-2">
          Let <InlineMath>{'\\mathbf{r}_i\' = \\mathbf{r}_i - \\mathbf{R}'}</InlineMath> denote the position
          of particle <InlineMath>{'i'}</InlineMath> relative to the center of mass. Then:
        </p>
        <MathBlock>{'\\mathbf{L} = \\underbrace{\\mathbf{R} \\times M\\dot{\\mathbf{R}}}_{\\mathbf{L}_{\\text{orbital}}} + \\underbrace{\\sum_i \\mathbf{r}_i\' \\times (m_i\\dot{\\mathbf{r}}_i\')}_{\\mathbf{L}_{\\text{spin}}}'}</MathBlock>
        <p className="mt-2">
          The orbital angular momentum is the angular momentum of a point mass <InlineMath>{'M'}</InlineMath> at
          the center of mass. The spin angular momentum is the angular momentum about the center of mass.
        </p>
      </Definition>

      <Theorem
        title="Koenig's Theorem for Angular Momentum"
        proof={
          <>
            <p className="mb-2">
              Write <InlineMath>{'\\mathbf{r}_i = \\mathbf{R} + \\mathbf{r}_i\''}</InlineMath> and
              <InlineMath>{'\\dot{\\mathbf{r}}_i = \\dot{\\mathbf{R}} + \\dot{\\mathbf{r}}_i\''}</InlineMath>.
            </p>
            <MathBlock>{'\\mathbf{L} = \\sum_i (\\mathbf{R} + \\mathbf{r}_i\') \\times m_i(\\dot{\\mathbf{R}} + \\dot{\\mathbf{r}}_i\')'}</MathBlock>
            <p className="mb-2">
              Expanding:
            </p>
            <MathBlock>{'\\mathbf{L} = \\mathbf{R} \\times M\\dot{\\mathbf{R}} + \\mathbf{R} \\times \\sum_i m_i\\dot{\\mathbf{r}}_i\' + \\left(\\sum_i m_i\\mathbf{r}_i\'\\right) \\times \\dot{\\mathbf{R}} + \\sum_i \\mathbf{r}_i\' \\times m_i\\dot{\\mathbf{r}}_i\''}</MathBlock>
            <p>
              The middle two terms vanish because <InlineMath>{'\\sum_i m_i\\mathbf{r}_i\' = 0'}</InlineMath> and
              <InlineMath>{'\\sum_i m_i\\dot{\\mathbf{r}}_i\' = 0'}</InlineMath> by definition of the center of mass.
            </p>
          </>
        }
      >
        <p>
          The total angular momentum separates exactly into orbital and spin parts:
        </p>
        <MathBlock>{'\\mathbf{L} = \\mathbf{L}_{\\text{orbital}} + \\mathbf{L}_{\\text{spin}}'}</MathBlock>
        <p className="mt-2">
          There are no cross terms between center-of-mass motion and relative motion.
        </p>
      </Theorem>

      <Example title="Earth-Moon System">
        <p className="mb-2">
          Consider the Earth-Moon system orbiting their common center of mass (barycenter).
        </p>
        <p className="mb-2">
          <strong>Orbital angular momentum:</strong> Due to the revolution of the barycenter around the Sun.
        </p>
        <p className="mb-2">
          <strong>Spin angular momentum:</strong> Has two contributions:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Earth and Moon orbiting about the barycenter</li>
          <li>Earth spinning on its axis (and Moon's rotation)</li>
        </ul>
        <p>
          Tidal forces transfer angular momentum from Earth's spin to Moon's orbital motion, causing the
          Moon to slowly recede and Earth's rotation to slow.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Kinetic Energy</h3>

      <Theorem
        title="Koenig's Theorem for Kinetic Energy"
        proof={
          <>
            <p className="mb-2">
              The total kinetic energy is:
            </p>
            <MathBlock>{'T = \\frac{1}{2}\\sum_i m_i |\\dot{\\mathbf{r}}_i|^2 = \\frac{1}{2}\\sum_i m_i |\\dot{\\mathbf{R}} + \\dot{\\mathbf{r}}_i\'|^2'}</MathBlock>
            <p className="mb-2">
              Expanding:
            </p>
            <MathBlock>{'T = \\frac{1}{2}M|\\dot{\\mathbf{R}}|^2 + \\dot{\\mathbf{R}} \\cdot \\sum_i m_i\\dot{\\mathbf{r}}_i\' + \\frac{1}{2}\\sum_i m_i |\\dot{\\mathbf{r}}_i\'|^2'}</MathBlock>
            <p>
              The middle term vanishes since <InlineMath>{'\\sum_i m_i\\dot{\\mathbf{r}}_i\' = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The total kinetic energy separates into center-of-mass and relative contributions:
        </p>
        <MathBlock>{'T = \\frac{1}{2}M|\\dot{\\mathbf{R}}|^2 + \\frac{1}{2}\\sum_i m_i |\\dot{\\mathbf{r}}_i\'|^2'}</MathBlock>
        <p className="mt-2">
          The first term is the kinetic energy of the center of mass; the second is the internal kinetic
          energy (motion relative to the center of mass).
        </p>
      </Theorem>

      <Callout type="note" title="Importance for Rigid Bodies">
        <p>
          Koenig's theorems are especially powerful for rigid bodies because the internal kinetic energy
          depends only on the angular velocity of the body. This leads to the elegant formula
          <InlineMath>{'T = \\frac{1}{2}M|\\dot{\\mathbf{R}}|^2 + \\frac{1}{2}\\boldsymbol{\\Omega} \\cdot \\mathbf{I} \\cdot \\boldsymbol{\\Omega}'}</InlineMath>,
          which we will derive in the following sections.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary of Conservation Laws</h3>

      <p className="mb-4">
        The general theorems lead to important conservation laws:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Momentum conservation:</strong> If <InlineMath>{'\\mathbf{F}^{\\text{ext}} = 0'}</InlineMath>,
          then <InlineMath>{'\\mathbf{P} = \\text{const}'}</InlineMath>.
        </li>
        <li>
          <strong>Angular momentum conservation:</strong> If <InlineMath>{'\\boldsymbol{\\tau}^{\\text{ext}} = 0'}</InlineMath>,
          then <InlineMath>{'\\mathbf{L} = \\text{const}'}</InlineMath>.
        </li>
        <li>
          <strong>Energy conservation:</strong> If all forces are conservative and time-independent, then
          <InlineMath>{'E = T + V = \\text{const}'}</InlineMath>.
        </li>
      </ul>

      <Example title="Collision Analysis">
        <p className="mb-2">
          Two particles collide in the absence of external forces. Before the collision, particle 1 has
          momentum <InlineMath>{'\\mathbf{p}_1'}</InlineMath> and particle 2 has momentum <InlineMath>{'\\mathbf{p}_2'}</InlineMath>.
        </p>
        <p className="mb-2">
          By momentum conservation: <InlineMath>{'\\mathbf{p}_1 + \\mathbf{p}_2 = \\mathbf{p}_1\' + \\mathbf{p}_2\''}</InlineMath>
        </p>
        <p className="mb-2">
          If no external torques act, angular momentum about any point is also conserved.
        </p>
        <p>
          These constraints, combined with energy conservation (for elastic collisions), determine the
          possible outcomes of the collision.
        </p>
      </Example>
    </LessonLayout>
  );
}
