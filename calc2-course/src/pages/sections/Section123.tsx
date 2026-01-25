import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section123() {
  return (
    <LessonLayout sectionId={123}>
      <h2>Applications to Area and Volume</h2>

      <p>
        Double integrals can be used to compute areas of plane regions and volumes
        of solids.
      </p>

      <h3>Area as a Double Integral</h3>

      <p>
        Let <InlineMath>{'S'}</InlineMath> be a region of Type I given by:
      </p>
      <MathBlock>{`S = \\{(x, y) \\mid a \\leq x \\leq b \\;\\text{ and }\\; \\varphi_1(x) \\leq y \\leq \\varphi_2(x)\\}`}</MathBlock>

      <p>
        Applying Theorem 11.9 with <InlineMath>{'f(x, y) = 1'}</InlineMath> for all{' '}
        <InlineMath>{'(x, y)'}</InlineMath> in <InlineMath>{'S'}</InlineMath>, we obtain:
      </p>
      <MathBlock>{`\\iint_S dx \\, dy = \\int_a^b [\\varphi_2(x) - \\varphi_1(x)] \\, dx`}</MathBlock>

      <Callout type="info">
        <strong>Area Formula:</strong> The double integral{' '}
        <InlineMath>{'\\iint_S dx \\, dy'}</InlineMath> equals the area of the region{' '}
        <InlineMath>{'S'}</InlineMath>:
        <MathBlock>{`a(S) = \\iint_S dx \\, dy`}</MathBlock>
      </Callout>

      <h3>Volume as a Double Integral</h3>

      <p>
        If <InlineMath>{'f'}</InlineMath> is nonnegative and continuous on{' '}
        <InlineMath>{'S'}</InlineMath>, the set of points{' '}
        <InlineMath>{'(x, y, z)'}</InlineMath> in 3-space such that{' '}
        <InlineMath>{'(x, y) \\in S'}</InlineMath> and{' '}
        <InlineMath>{'0 \\leq z \\leq f(x, y)'}</InlineMath> is called the{' '}
        <strong>ordinate set</strong> of <InlineMath>{'f'}</InlineMath> over{' '}
        <InlineMath>{'S'}</InlineMath>.
      </p>

      <p>
        For a Type I region <InlineMath>{'S'}</InlineMath>, the integral:
      </p>
      <MathBlock>{`\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x, y) \\, dy`}</MathBlock>

      <p>
        represents the area of a cross section of the ordinate set cut by a plane
        parallel to the yz-plane. Formula (11.11) of Theorem 11.9 shows that the
        double integral of <InlineMath>{'f'}</InlineMath> over <InlineMath>{'S'}</InlineMath>{' '}
        is equal to the integral of this cross-sectional area:
      </p>

      <Callout type="info">
        <strong>Volume Formula:</strong> The double integral{' '}
        <InlineMath>{'\\iint_S f'}</InlineMath> equals the volume of the ordinate set
        of <InlineMath>{'f'}</InlineMath> over <InlineMath>{'S'}</InlineMath>.
      </Callout>

      <h3>Volume Between Two Surfaces</h3>

      <p>
        More generally, if <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath>{' '}
        are both continuous on <InlineMath>{'S'}</InlineMath> with{' '}
        <InlineMath>{'f \\leq g'}</InlineMath>, then the double integral:
      </p>
      <MathBlock>{`\\iint_S (g - f) \\, dx \\, dy`}</MathBlock>

      <p>
        equals the volume of the solid lying between the graphs of the functions{' '}
        <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath>.
      </p>

      <h3>Example: Volume of an Ellipsoid</h3>

      <p>
        Compute the volume of the solid enclosed by the ellipsoid:
      </p>
      <MathBlock>{`\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1`}</MathBlock>

      <p>
        <strong>Solution:</strong> The solid lies between the graphs of two functions{' '}
        <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath>, where:
      </p>
      <MathBlock>{`g(x, y) = c\\sqrt{1 - x^2/a^2 - y^2/b^2}, \\quad f(x, y) = -g(x, y)`}</MathBlock>

      <p>
        Here <InlineMath>{'(x, y) \\in S'}</InlineMath>, where <InlineMath>{'S'}</InlineMath>{' '}
        is the elliptical region{' '}
        <InlineMath>{'\\{(x, y) \\mid x^2/a^2 + y^2/b^2 \\leq 1\\}'}</InlineMath>.
      </p>

      <p>
        Using symmetry:
      </p>
      <MathBlock>{`V = \\iint_S (g - f) = 2 \\iint_S g = 8c \\int_0^a \\left[ \\int_0^{b\\sqrt{1-x^2/a^2}} \\sqrt{1 - x^2/a^2 - y^2/b^2} \\, dy \\right] dx`}</MathBlock>

      <p>
        After evaluation (using trigonometric substitution), the result is:
      </p>
      <MathBlock>{`V = \\frac{4}{3} \\pi abc`}</MathBlock>

      <p>
        In the special case <InlineMath>{'a = b = c'}</InlineMath>, the solid is a
        sphere of radius <InlineMath>{'a'}</InlineMath> and the volume is{' '}
        <InlineMath>{'\\frac{4}{3}\\pi a^3'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Double integrals provide a systematic way to
        compute areas and volumes. The area of a region is the double integral of 1
        over that region. The volume under a surface is the double integral of the
        height function. These formulas extend the "area under a curve" concept from
        single-variable calculus to two dimensions.
      </Callout>
    </LessonLayout>
  );
}
