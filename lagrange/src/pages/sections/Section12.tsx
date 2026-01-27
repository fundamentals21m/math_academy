import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Inertial Forces</h2>

      <p className="mb-4">
        In an inertial frame, Newton's second law takes its familiar form <InlineMath>{'\\mathbf{F} = m\\mathbf{a}'}</InlineMath>.
        But what happens when we observe motion from a non-inertial frame? The acceleration we measure differs
        from the true inertial acceleration, yet we can still write equations that look like Newton's law if we
        introduce additional "fictitious" or "inertial" forces.
      </p>

      <p className="mb-4">
        These forces are not caused by physical interactions; rather, they arise from the acceleration of the
        reference frame itself. Despite being fictitious in origin, they have very real effects on observers
        in the accelerating frame and must be included to correctly predict motion.
      </p>

      <Definition title="Inertial Forces">
        <p className="mb-2">
          In a non-inertial reference frame with angular velocity <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath>,
          angular acceleration <InlineMath>{'\\dot{\\boldsymbol{\\omega}}'}</InlineMath>, and translational
          acceleration <InlineMath>{'\\ddot{\\mathbf{b}}'}</InlineMath> of its origin, the equation of motion
          for a particle of mass <InlineMath>{'m'}</InlineMath> becomes:
        </p>
        <MathBlock>{'m\\mathbf{a}_{\\text{rel}} = \\mathbf{F} + \\mathbf{F}_{\\text{inertial}}'}</MathBlock>
        <p className="mt-2">
          where the total inertial force is:
        </p>
        <MathBlock>{'\\mathbf{F}_{\\text{inertial}} = -m\\ddot{\\mathbf{b}} - 2m\\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}} - m\\dot{\\boldsymbol{\\omega}} \\times \\mathbf{r}_{\\text{rel}} - m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}})'}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Coriolis Force</h3>

      <p className="mb-4">
        The Coriolis force is perhaps the most subtle and fascinating of the inertial forces:
      </p>

      <Definition title="Coriolis Force">
        <MathBlock>{'\\mathbf{F}_{\\text{Cor}} = -2m\\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}}'}</MathBlock>
        <p className="mt-2">
          This force acts perpendicular to both the angular velocity vector and the velocity of the particle
          relative to the rotating frame. It vanishes when the particle is stationary in the rotating frame.
        </p>
      </Definition>

      <p className="mb-4">
        The Coriolis force deflects moving objects to the right in the Northern Hemisphere and to the left in
        the Southern Hemisphere. This effect is responsible for:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>The rotation of cyclones and anticyclones</li>
        <li>The deflection of ocean currents</li>
        <li>The precession of the Foucault pendulum</li>
        <li>Corrections needed for long-range artillery</li>
      </ul>

      <Example title="Coriolis Deflection on Earth">
        <p className="mb-2">
          A ball is thrown horizontally northward at the equator with speed <InlineMath>{'v = 20'}</InlineMath> m/s.
          Earth's angular velocity is <InlineMath>{'\\Omega \\approx 7.3 \\times 10^{-5}'}</InlineMath> rad/s.
        </p>
        <p className="mb-2">
          At the equator, the angular velocity vector points out of the North Pole, so it is horizontal and
          points north. The velocity is also northward.
        </p>
        <p className="mb-2">
          <InlineMath>{'\\mathbf{F}_{\\text{Cor}} = -2m\\boldsymbol{\\Omega} \\times \\mathbf{v}'}</InlineMath>
        </p>
        <p className="mb-2">
          The cross product <InlineMath>{'\\boldsymbol{\\Omega} \\times \\mathbf{v}'}</InlineMath> points
          eastward (by the right-hand rule), so the Coriolis force points westward.
        </p>
        <p>
          For a 1 kg ball: <InlineMath>{'|\\mathbf{F}_{\\text{Cor}}| = 2(1)(7.3 \\times 10^{-5})(20) \\approx 2.9 \\times 10^{-3}'}</InlineMath> N
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Centrifugal Force</h3>

      <Definition title="Centrifugal Force">
        <MathBlock>{'\\mathbf{F}_{\\text{centrif}} = -m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}})'}</MathBlock>
        <p className="mt-2">
          Using the vector identity <InlineMath>{'\\mathbf{A} \\times (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B}(\\mathbf{A} \\cdot \\mathbf{C}) - \\mathbf{C}(\\mathbf{A} \\cdot \\mathbf{B})'}</InlineMath>,
          this can be rewritten as:
        </p>
        <MathBlock>{'\\mathbf{F}_{\\text{centrif}} = m\\omega^2 \\mathbf{r}_\\perp'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\mathbf{r}_\\perp'}</InlineMath> is the component of position perpendicular to
          the rotation axis. The force points radially outward from the axis of rotation.
        </p>
      </Definition>

      <p className="mb-4">
        Unlike the Coriolis force, the centrifugal force does not depend on the particle's velocity. It acts
        on all objects in the rotating frame, whether moving or stationary, pushing them away from the axis
        of rotation.
      </p>

      <Theorem
        title="Effective Gravity"
        proof={
          <>
            <p className="mb-2">
              At latitude <InlineMath>{'\\lambda'}</InlineMath>, the centrifugal acceleration is:
            </p>
            <p className="mb-2">
              <InlineMath>{'a_{\\text{centrif}} = \\Omega^2 R \\cos\\lambda'}</InlineMath>
            </p>
            <p className="mb-2">
              where <InlineMath>{'R \\cos\\lambda'}</InlineMath> is the distance from the Earth's axis.
              This acceleration is directed away from the rotation axis.
            </p>
            <p className="mb-2">
              The component opposing gravity is <InlineMath>{'a_{\\text{centrif}} \\cos\\lambda = \\Omega^2 R \\cos^2\\lambda'}</InlineMath>.
            </p>
            <p>
              At the equator (<InlineMath>{'\\lambda = 0'}</InlineMath>):
              <InlineMath>{'a_{\\text{centrif}} = (7.3 \\times 10^{-5})^2 (6.4 \\times 10^6) \\approx 0.034'}</InlineMath> m/s<sup>2</sup>
            </p>
          </>
        }
      >
        <p>
          On the surface of a rotating planet, the effective gravitational acceleration includes the
          centrifugal effect:
        </p>
        <MathBlock>{'\\mathbf{g}_{\\text{eff}} = \\mathbf{g} + \\Omega^2 R \\cos\\lambda \\, \\hat{\\mathbf{r}}_\\perp'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\lambda'}</InlineMath> is the latitude. This explains why objects weigh
          slightly less at the equator than at the poles.
        </p>
      </Theorem>

      <Example title="Weight Difference: Poles vs Equator">
        <p className="mb-2">
          Consider a 100 kg person. At the poles, they experience the full gravitational acceleration
          <InlineMath>{'g \\approx 9.83'}</InlineMath> m/s<sup>2</sup>.
        </p>
        <p className="mb-2">
          At the equator, the centrifugal effect reduces this by approximately 0.034 m/s<sup>2</sup>, and
          the Earth's equatorial bulge adds another reduction.
        </p>
        <p className="mb-2">
          Total difference: <InlineMath>{'\\Delta g \\approx 0.052'}</InlineMath> m/s<sup>2</sup>
        </p>
        <p>
          Weight difference: <InlineMath>{'\\Delta W = m\\Delta g \\approx 5.2'}</InlineMath> N, or about
          0.5% of body weight.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Euler Force</h3>

      <Definition title="Euler Force (Transverse Force)">
        <MathBlock>{'\\mathbf{F}_{\\text{Euler}} = -m\\dot{\\boldsymbol{\\omega}} \\times \\mathbf{r}_{\\text{rel}}'}</MathBlock>
        <p className="mt-2">
          This force arises when the angular velocity of the reference frame changes in time. It is
          tangential to the circle of rotation and acts to oppose the angular acceleration.
        </p>
      </Definition>

      <p className="mb-4">
        The Euler force is often negligible for Earth-based calculations since Earth's rotation rate is
        essentially constant. However, it becomes important in systems where the rotation speed is changing,
        such as a spinning centrifuge that is accelerating or decelerating.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Entrainment Force</h3>

      <Definition title="Entrainment Force (d'Alembert Force)">
        <MathBlock>{'\\mathbf{F}_{\\text{entr}} = -m\\ddot{\\mathbf{b}}'}</MathBlock>
        <p className="mt-2">
          This force arises from the translational acceleration of the reference frame's origin. It is the
          simplest of the inertial forces and acts uniformly on all particles regardless of their position
          or velocity within the frame.
        </p>
      </Definition>

      <Example title="Accelerating Elevator">
        <p className="mb-2">
          An elevator accelerates upward at <InlineMath>{'a = 2'}</InlineMath> m/s<sup>2</sup>. A 70 kg
          person stands on a scale inside.
        </p>
        <p className="mb-2">
          In the elevator's frame, the entrainment force is
          <InlineMath>{'F_{\\text{entr}} = -ma = -70 \\times 2 = -140'}</InlineMath> N (downward).
        </p>
        <p className="mb-2">
          The equation of motion in the elevator frame (with the person stationary):
        </p>
        <p className="mb-2">
          <InlineMath>{'0 = N - mg + F_{\\text{entr}} = N - 70(9.8) - 140'}</InlineMath>
        </p>
        <p>
          Therefore <InlineMath>{'N = 70(9.8) + 140 = 826'}</InlineMath> N. The apparent weight increases
          by 20%.
        </p>
      </Example>

      <Callout type="note" title="Conservation Laws in Non-Inertial Frames">
        <p>
          Energy and momentum are generally not conserved in non-inertial frames because the inertial forces
          do work on particles. However, if the Lagrangian formalism is used with the correct kinetic energy
          in the rotating frame, energy can be conserved in a modified sense. The Jacobi integral in rotating
          systems is an example of this.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary: All Inertial Forces</h3>

      <p className="mb-4">
        In a frame rotating with angular velocity <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath> and
        translating with acceleration <InlineMath>{'\\ddot{\\mathbf{b}}'}</InlineMath>, the complete set
        of inertial forces is:
      </p>

      <MathBlock>{'\\mathbf{F}_{\\text{inertial}} = \\underbrace{-m\\ddot{\\mathbf{b}}}_{\\text{Entrainment}} \\underbrace{- 2m\\boldsymbol{\\omega} \\times \\mathbf{v}_{\\text{rel}}}_{\\text{Coriolis}} \\underbrace{- m\\dot{\\boldsymbol{\\omega}} \\times \\mathbf{r}_{\\text{rel}}}_{\\text{Euler}} \\underbrace{- m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{\\text{rel}})}_{\\text{Centrifugal}}'}</MathBlock>

      <Callout type="warning" title="Physical Reality of Inertial Forces">
        <p>
          Although called "fictitious," inertial forces have measurable physical effects. The distinction is
          that they arise from the choice of reference frame rather than from physical interactions. In
          general relativity, this distinction becomes blurred: gravity itself can be viewed as an inertial
          force in a curved spacetime.
        </p>
      </Callout>
    </LessonLayout>
  );
}
