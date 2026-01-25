import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section108() {
  return (
    <LessonLayout sectionId={108}>
      <h2>Applications to Mechanics: Potential Functions</h2>

      <p>
        If a vector field <InlineMath>{'f'}</InlineMath> is the gradient of a scalar
        field <InlineMath>{'\\varphi'}</InlineMath>, then <InlineMath>{'\\varphi'}</InlineMath>{' '}
        is called a <strong>potential function</strong> for{' '}
        <InlineMath>{'f'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Terminology:</strong> In 3-space, the level sets of{' '}
        <InlineMath>{'\\varphi'}</InlineMath> are called <strong>equipotential surfaces</strong>;
        in 2-space they are called <strong>equipotential lines</strong>.
        <br /><br />
        (If <InlineMath>{'\\varphi'}</InlineMath> denotes temperature, the word
        "equipotential" is replaced by "isothermal"; if <InlineMath>{'\\varphi'}</InlineMath>{' '}
        denotes pressure, the word "isobaric" is used.)
      </Callout>

      <h3>Example: The Potential <InlineMath>{'r^n'}</InlineMath></h3>

      <p>
        In 3-space, let{' '}
        <InlineMath>{'\\varphi(x, y, z) = r^n'}</InlineMath>, where{' '}
        <InlineMath>{'r = (x^2 + y^2 + z^2)^{1/2}'}</InlineMath>. For every integer{' '}
        <InlineMath>{'n'}</InlineMath> we have:
      </p>
      <MathBlock>{`\\nabla(r^n) = nr^{n-2}\\mathbf{r}`}</MathBlock>
      <p>
        where <InlineMath>{'\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}'}</InlineMath>.
        Therefore <InlineMath>{'\\varphi'}</InlineMath> is a potential of the vector field:
      </p>
      <MathBlock>{`f(x, y, z) = nr^{n-2}\\mathbf{r}`}</MathBlock>

      <p>
        The equipotential surfaces of <InlineMath>{'\\varphi'}</InlineMath> are concentric
        spheres centered at the origin.
      </p>

      <h3>The Newtonian Potential</h3>

      <p>
        Newton's gravitation law states that the force <InlineMath>{'f'}</InlineMath>{' '}
        which a particle of mass <InlineMath>{'M'}</InlineMath> exerts on another particle
        of mass <InlineMath>{'m'}</InlineMath> is a vector of length{' '}
        <InlineMath>{'GmM/r^2'}</InlineMath>, where <InlineMath>{'G'}</InlineMath> is a
        constant and <InlineMath>{'r'}</InlineMath> is the distance between the particles.
      </p>

      <p>
        Place the origin at the particle of mass <InlineMath>{'M'}</InlineMath>, and let{' '}
        <InlineMath>{'\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}'}</InlineMath>{' '}
        be the position vector from the origin to the particle of mass{' '}
        <InlineMath>{'m'}</InlineMath>. Then{' '}
        <InlineMath>{'r = \\|\\mathbf{r}\\|'}</InlineMath> and{' '}
        <InlineMath>{'-\\mathbf{r}/r'}</InlineMath> is a unit vector with the same
        direction as <InlineMath>{'f'}</InlineMath>, so Newton's law becomes:
      </p>
      <MathBlock>{`f = -GmMr^{-3}\\mathbf{r}`}</MathBlock>

      <p>
        Taking <InlineMath>{'n = -1'}</InlineMath> in the previous example, we see
        that the gravitational force <InlineMath>{'f'}</InlineMath> is the gradient of:
      </p>
      <MathBlock>{`\\varphi(x, y, z) = GmMr^{-1}`}</MathBlock>

      <Callout type="info">
        <strong>The Newtonian Potential:</strong> The function{' '}
        <InlineMath>{'\\varphi(x, y, z) = GmM/r'}</InlineMath> is called the{' '}
        <strong>Newtonian potential</strong>.
      </Callout>

      <p>
        The work done by the gravitational force in moving the particle of mass{' '}
        <InlineMath>{'m'}</InlineMath> from{' '}
        <InlineMath>{'(x_1, y_1, z_1)'}</InlineMath> to{' '}
        <InlineMath>{'(x_2, y_2, z_2)'}</InlineMath> is:
      </p>
      <MathBlock>{`\\varphi(x_1, y_1, z_1) - \\varphi(x_2, y_2, z_2) = GmM \\left( \\frac{1}{r_1} - \\frac{1}{r_2} \\right)`}</MathBlock>
      <p>
        where <InlineMath>{'r_1 = (x_1^2 + y_1^2 + z_1^2)^{1/2}'}</InlineMath> and{' '}
        <InlineMath>{'r_2 = (x_2^2 + y_2^2 + z_2^2)^{1/2}'}</InlineMath>. If the two
        points lie on the same equipotential surface, then{' '}
        <InlineMath>{'r_1 = r_2'}</InlineMath> and <strong>no work is done</strong>.
      </p>

      <h3>Conservation of Mechanical Energy</h3>

      <p>
        Let <InlineMath>{'f'}</InlineMath> be a continuous force field having a potential{' '}
        <InlineMath>{'\\varphi'}</InlineMath> in an open connected set{' '}
        <InlineMath>{'S'}</InlineMath>. Theorem 10.3 tells us that the work done by{' '}
        <InlineMath>{'f'}</InlineMath> in moving a particle from{' '}
        <InlineMath>{'\\mathbf{a}'}</InlineMath> to <InlineMath>{'\\mathbf{x}'}</InlineMath>{' '}
        along any piecewise smooth path in <InlineMath>{'S'}</InlineMath> is:
      </p>
      <MathBlock>{`\\varphi(\\mathbf{x}) - \\varphi(\\mathbf{a})`}</MathBlock>

      <p>
        From the work-energy theorem, this equals the change in kinetic energy:
      </p>
      <MathBlock>{`k(\\mathbf{x}) - k(\\mathbf{a}) = \\varphi(\\mathbf{x}) - \\varphi(\\mathbf{a})`}</MathBlock>
      <p>
        where <InlineMath>{'k(\\mathbf{x})'}</InlineMath> denotes the kinetic energy
        at <InlineMath>{'\\mathbf{x}'}</InlineMath>. Rearranging:
      </p>
      <MathBlock>{`k(\\mathbf{x}) - \\varphi(\\mathbf{x}) = k(\\mathbf{a}) - \\varphi(\\mathbf{a})`}</MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> The scalar{' '}
        <InlineMath>{'-\\varphi(\\mathbf{x})'}</InlineMath> is called the{' '}
        <strong>potential energy</strong> of the particle at{' '}
        <InlineMath>{'\\mathbf{x}'}</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Principle of Conservation of Mechanical Energy:</strong> If a force
        field is a gradient, the sum of the kinetic and potential energies of a
        particle moving in this field is constant:
        <MathBlock>{`k(\\mathbf{x}) + [-\\varphi(\\mathbf{x})] = \\text{constant}`}</MathBlock>
      </Callout>

      <h3>Conservative Force Fields</h3>

      <p>
        A force field with a potential function is said to be{' '}
        <strong>conservative</strong> because the total energy (kinetic plus potential)
        is conserved. In a conservative field, no net work is done in moving a
        particle around a closed curve back to its starting point.
      </p>

      <p>
        A force field will <strong>not</strong> be conservative if friction or
        viscosity exists in the system, since these tend to convert mechanical
        energy into heat energy.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The connection between gradient fields and
        conservation of energy is fundamental to physics. The Newtonian potential
        shows that gravity is conservative—energy is exchanged between kinetic and
        potential forms but the total is preserved. Non-conservative forces like
        friction cannot be written as gradients.
      </Callout>
    </LessonLayout>
  );
}
