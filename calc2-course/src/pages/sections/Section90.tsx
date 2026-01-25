import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section90() {
  return (
    <LessonLayout sectionId={90}>
      <h2>Summary: Differential Calculus in Higher Dimensions</h2>

      <p>
        This chapter extended differential calculus from functions of one
        variable to scalar and vector fields. Here we summarize the key
        concepts and their relationships.
      </p>

      <h3>Hierarchy of Derivative Concepts</h3>

      <Callout type="info">
        <strong>From Weakest to Strongest:</strong>
        <ol style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <li>
            <strong>Partial derivatives exist:</strong>{' '}
            <InlineMath>{`D_1 f(a), \\ldots, D_n f(a)`}</InlineMath> all exist
          </li>
          <li>
            <strong>All directional derivatives exist:</strong>{' '}
            <InlineMath>f'(a; y)</InlineMath> exists for all <InlineMath>y</InlineMath>
          </li>
          <li>
            <strong>Differentiable:</strong> Taylor formula holds with linear
            approximation
          </li>
          <li>
            <strong>Continuously differentiable:</strong> All partial derivatives
            continuous at <InlineMath>a</InlineMath>
          </li>
        </ol>
      </Callout>

      <p>
        Each level implies the previous ones. The implications do not reverse:
        partial derivatives can exist without directional derivatives existing
        in all directions; all directional derivatives can exist without
        differentiability (the{' '}
        <InlineMath>{`xy^2/(x^2+y^4)`}</InlineMath> example).
      </p>

      <h3>Key Formulas for Scalar Fields</h3>

      <p>
        <strong>Gradient:</strong>
      </p>
      <MathBlock>
        \nabla f(a) = (D_1 f(a), \ldots, D_n f(a))
      </MathBlock>

      <p>
        <strong>Directional derivative:</strong>
      </p>
      <MathBlock>
        f'(a; y) = \nabla f(a) \cdot y
      </MathBlock>

      <p>
        <strong>Taylor formula:</strong>
      </p>
      <MathBlock>
        f(a + v) = f(a) + \nabla f(a) \cdot v + \|v\| E(a, v)
      </MathBlock>

      <p>
        <strong>Chain rule:</strong> If <InlineMath>g(t) = f[r(t)]</InlineMath>:
      </p>
      <MathBlock>
        g'(t) = \nabla f(r(t)) \cdot r'(t)
      </MathBlock>

      <h3>Key Formulas for Vector Fields</h3>

      <p>
        <strong>Jacobian matrix:</strong> For{' '}
        <InlineMath>{`f: \\mathbb{R}^n \\to \\mathbb{R}^m`}</InlineMath>:
      </p>
      <MathBlock>{`Df(a) = [D_j f_i(a)]_{i,j}`}</MathBlock>

      <p>
        <strong>Total derivative:</strong>
      </p>
      <MathBlock>
        f'(a)(y) = Df(a) \cdot y
      </MathBlock>

      <p>
        <strong>Chain rule:</strong> If <InlineMath>h = f \circ g</InlineMath>:
      </p>
      <MathBlock>
        Dh(a) = Df(g(a)) \cdot Dg(a)
      </MathBlock>

      <h3>Geometric Interpretations</h3>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #444', padding: '0.5rem', textAlign: 'left' }}>Concept</th>
            <th style={{ border: '1px solid #444', padding: '0.5rem', textAlign: 'left' }}>Geometric Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Gradient <InlineMath>\nabla f</InlineMath></td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Points in direction of steepest increase</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}><InlineMath>{`\\|\\nabla f\\|`}</InlineMath></td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Rate of steepest increase</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Level set <InlineMath>f = c</InlineMath></td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Perpendicular to gradient</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Jacobian <InlineMath>Df</InlineMath></td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Best linear approximation to <InlineMath>f</InlineMath></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}><InlineMath>|\det Df|</InlineMath></td>
            <td style={{ border: '1px solid #444', padding: '0.5rem' }}>Local volume magnification factor</td>
          </tr>
        </tbody>
      </table>

      <h3>Sufficient Condition</h3>

      <Callout type="info">
        <strong>Practical Test:</strong> If all partial derivatives{' '}
        <InlineMath>{`D_j f_i`}</InlineMath> exist in a neighborhood of{' '}
        <InlineMath>a</InlineMath> and are continuous at <InlineMath>a</InlineMath>,
        then <InlineMath>f</InlineMath> is differentiable at <InlineMath>a</InlineMath>.
      </Callout>

      <p>
        This covers essentially all functions encountered in applications:
        compositions of polynomials, exponentials, trigonometric functions,
        logarithms, etc.
      </p>

      <h3>Looking Ahead</h3>

      <p>
        The concepts developed in this chapter form the foundation for:
      </p>
      <ul>
        <li>
          <strong>Line integrals:</strong> Integrating along curves using the
          chain rule
        </li>
        <li>
          <strong>Multiple integrals:</strong> Change of variables using Jacobians
        </li>
        <li>
          <strong>Surface integrals:</strong> Extending integration to surfaces
        </li>
        <li>
          <strong>Vector calculus:</strong> Divergence, curl, and the classical
          theorems (Green, Stokes, divergence)
        </li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The unifying theme is{' '}
        <strong>linear approximation</strong>. A differentiable function is
        one that can be well-approximated by a linear function near any point.
        The gradient (for scalar fields) or Jacobian (for vector fields)
        encodes this linear approximation. The chain rule says that linearizing
        a composition equals composing the linearizations—a principle that
        powers much of modern analysis and its applications.
      </Callout>
    </LessonLayout>
  );
}
