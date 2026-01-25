import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section104() {
  return (
    <LessonLayout sectionId={104}>
      <h2>Work as a Line Integral</h2>

      <p>
        Consider a particle which moves along a curve under the action of a force
        field <InlineMath>{'f'}</InlineMath>. If the curve is the graph of a piecewise
        smooth path <InlineMath>{'\\alpha'}</InlineMath>, the <strong>work</strong> done
        by <InlineMath>{'f'}</InlineMath> is defined to be the line integral:
      </p>
      <MathBlock>{`W = \\int f \\cdot d\\alpha`}</MathBlock>

      <h3>Work Done by a Constant Force</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'f = \\mathbf{c}'}</InlineMath> is a
        constant force, the work done by <InlineMath>{'f'}</InlineMath> in moving a
        particle from a point <InlineMath>{'\\mathbf{a}'}</InlineMath> to a point{' '}
        <InlineMath>{'\\mathbf{b}'}</InlineMath> along any piecewise smooth path joining
        them is:
        <MathBlock>{`W = \\mathbf{c} \\cdot (\\mathbf{b} - \\mathbf{a})`}</MathBlock>
        the dot product of the force and the displacement vector.
      </Callout>

      <h3>Proof</h3>

      <p>
        Let <InlineMath>{'\\alpha = (\\alpha_1, \\ldots, \\alpha_n)'}</InlineMath> be
        a path joining <InlineMath>{'\\mathbf{a}'}</InlineMath> and{' '}
        <InlineMath>{'\\mathbf{b}'}</InlineMath>, with{' '}
        <InlineMath>{'\\alpha(a) = \\mathbf{a}'}</InlineMath> and{' '}
        <InlineMath>{'\\alpha(b) = \\mathbf{b}'}</InlineMath>. Write{' '}
        <InlineMath>{'\\mathbf{c} = (c_1, \\ldots, c_n)'}</InlineMath>. Assuming{' '}
        <InlineMath>{`\\alpha'`}</InlineMath> is continuous on <InlineMath>{'[a, b]'}</InlineMath>:
      </p>
      <MathBlock>{`\\int f \\cdot d\\alpha = \\sum_{k=1}^n c_k \\int_a^b \\alpha'_k(t) \\, dt = \\sum_{k=1}^n c_k [\\alpha_k(b) - \\alpha_k(a)] = \\mathbf{c} \\cdot (\\mathbf{b} - \\mathbf{a})`}</MathBlock>

      <p>
        For this force field, the work depends only on the end points{' '}
        <InlineMath>{'\\mathbf{a}'}</InlineMath> and <InlineMath>{'\\mathbf{b}'}</InlineMath>{' '}
        and not on the curve joining them. Not all force fields have this property.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> A force field for which the work depends only on
        the endpoints (and not on the path) is called <strong>conservative</strong>.
      </Callout>

      <h3>The Principle of Work and Energy</h3>

      <p>
        A particle of mass <InlineMath>{'m'}</InlineMath> moves along a curve under the
        action of a force field <InlineMath>{'f'}</InlineMath>. If the speed of the
        particle at time <InlineMath>{'t'}</InlineMath> is <InlineMath>{'v(t)'}</InlineMath>,
        its kinetic energy is defined to be{' '}
        <InlineMath>{'\\frac{1}{2}mv^2(t)'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Theorem (Work-Energy Principle):</strong> The change in kinetic
        energy in any time interval is equal to the work done by{' '}
        <InlineMath>{'f'}</InlineMath> during this time interval:
        <MathBlock>{`\\int_{r(a)}^{r(b)} f \\cdot dr = \\frac{1}{2}mv^2(b) - \\frac{1}{2}mv^2(a)`}</MathBlock>
      </Callout>

      <h3>Proof</h3>

      <p>
        Let <InlineMath>{'r(t)'}</InlineMath> denote the position of the particle at
        time <InlineMath>{'t'}</InlineMath>. From Newton's second law of motion:
      </p>
      <MathBlock>{`f[r(t)] = mr''(t) = mv'(t)`}</MathBlock>

      <p>
        where <InlineMath>{'v(t)'}</InlineMath> denotes the velocity vector. The speed is
        the length of the velocity vector:{' '}
        <InlineMath>{'v(t) = \\|v(t)\\|'}</InlineMath>. Therefore:
      </p>
      <MathBlock>{`f[r(t)] \\cdot r'(t) = f[r(t)] \\cdot v(t) = mv'(t) \\cdot v(t) = \\frac{1}{2}m \\frac{d}{dt}(v(t) \\cdot v(t)) = \\frac{1}{2}m \\frac{d}{dt}(v^2(t))`}</MathBlock>

      <p>
        Integrating from <InlineMath>{'a'}</InlineMath> to <InlineMath>{'b'}</InlineMath>:
      </p>
      <MathBlock>{`\\int_{r(a)}^{r(b)} f \\cdot dr = \\int_a^b f[r(t)] \\cdot r'(t) \\, dt = \\frac{1}{2}mv^2(t) \\Big|_a^b = \\frac{1}{2}mv^2(b) - \\frac{1}{2}mv^2(a)`}</MathBlock>

      <h3>Physical Interpretation</h3>

      <p>
        The work-energy principle states that:
      </p>
      <ul>
        <li>Work done on a particle equals the change in its kinetic energy</li>
        <li>Positive work increases kinetic energy (speeds up the particle)</li>
        <li>Negative work decreases kinetic energy (slows down the particle)</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> Line integrals provide the mathematical framework
        for understanding work in physics. The work-energy theorem connects the geometric
        concept of a line integral with the physical concept of energy transfer. For
        conservative forces, work depends only on endpoints—this is the foundation for
        the concept of potential energy.
      </Callout>
    </LessonLayout>
  );
}
