import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-semibold mb-4">Fields</h2>

      <p className="mb-4">
        A field is a set equipped with two operations (addition and multiplication)
        satisfying certain axioms. The rational numbers <InlineMath>{'Q'}</InlineMath> form
        a field, and understanding the field axioms is essential for the construction
        of the real numbers.
      </p>

      <Definition title="1.12 - Field">
        <p className="mb-3">
          A <em>field</em> is a set <InlineMath>{'F'}</InlineMath> with two operations, called <em>addition</em> and <em>multiplication</em>,
          which satisfy the following so-called "field axioms" (A), (M), and (D):
        </p>

        <h4 className="font-semibold mt-4 mb-2">(A) Axioms for addition</h4>
        <ul className="list-none space-y-2 mb-4">
          <li>(A1) If <InlineMath>{'x \\in F'}</InlineMath> and <InlineMath>{'y \\in F'}</InlineMath>, then their sum <InlineMath>{'x + y'}</InlineMath> is in <InlineMath>{'F'}</InlineMath>.</li>
          <li>(A2) Addition is commutative: <InlineMath>{'x + y = y + x'}</InlineMath> for all <InlineMath>{'x, y \\in F'}</InlineMath>.</li>
          <li>(A3) Addition is associative: <InlineMath>{'(x + y) + z = x + (y + z)'}</InlineMath> for all <InlineMath>{'x, y, z \\in F'}</InlineMath>.</li>
          <li>(A4) <InlineMath>{'F'}</InlineMath> contains an element <InlineMath>{'0'}</InlineMath> such that <InlineMath>{'0 + x = x'}</InlineMath> for every <InlineMath>{'x \\in F'}</InlineMath>.</li>
          <li>(A5) To every <InlineMath>{'x \\in F'}</InlineMath> corresponds an element <InlineMath>{'-x \\in F'}</InlineMath> such that <InlineMath>{'x + (-x) = 0'}</InlineMath>.</li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">(M) Axioms for multiplication</h4>
        <ul className="list-none space-y-2 mb-4">
          <li>(M1) If <InlineMath>{'x \\in F'}</InlineMath> and <InlineMath>{'y \\in F'}</InlineMath>, then their product <InlineMath>{'xy'}</InlineMath> is in <InlineMath>{'F'}</InlineMath>.</li>
          <li>(M2) Multiplication is commutative: <InlineMath>{'xy = yx'}</InlineMath> for all <InlineMath>{'x, y \\in F'}</InlineMath>.</li>
          <li>(M3) Multiplication is associative: <InlineMath>{'(xy)z = x(yz)'}</InlineMath> for all <InlineMath>{'x, y, z \\in F'}</InlineMath>.</li>
          <li>(M4) <InlineMath>{'F'}</InlineMath> contains an element <InlineMath>{'1 \\neq 0'}</InlineMath> such that <InlineMath>{'1x = x'}</InlineMath> for every <InlineMath>{'x \\in F'}</InlineMath>.</li>
          <li>(M5) If <InlineMath>{'x \\in F'}</InlineMath> and <InlineMath>{'x \\neq 0'}</InlineMath> then there exists an element <InlineMath>{'1/x \\in F'}</InlineMath> such that <InlineMath>{'x \\cdot (1/x) = 1'}</InlineMath>.</li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">(D) The distributive law</h4>
        <MathBlock>{'x(y + z) = xy + xz'}</MathBlock>
        <p>holds for all <InlineMath>{'x, y, z \\in F'}</InlineMath>.</p>
      </Definition>

      <Callout type="info" title="1.13 - Remarks">
        <p className="mb-2">
          <strong>(a)</strong> One usually writes in any field:
        </p>
        <MathBlock>{'x - y, \\quad \\frac{x}{y}, \\quad x + y + z, \\quad xyz, \\quad x^2, \\quad x^3, \\quad 2x, \\quad 3x, \\ldots'}</MathBlock>
        <p className="mb-2">in place of</p>
        <MathBlock>{'x + (-y), \\quad x \\cdot \\left(\\frac{1}{y}\\right), \\quad (x + y) + z, \\quad (xy)z, \\quad xx, \\quad xxx, \\quad x + x, \\quad x + x + x, \\ldots'}</MathBlock>
        <p className="mb-3">
          <strong>(b)</strong> The field axioms clearly hold in <InlineMath>{'Q'}</InlineMath>, the set of all rational numbers,
          if addition and multiplication have their customary meaning. Thus <InlineMath>{'Q'}</InlineMath> is a field.
        </p>
        <p>
          <strong>(c)</strong> Although it is not our purpose to study fields (or any other algebraic structures)
          in detail, it is worthwhile to prove that some familiar properties of <InlineMath>{'Q'}</InlineMath> are
          consequences of the field axioms; once we do this, we will not need to do it again for the
          real numbers and for the complex numbers.
        </p>
      </Callout>

      <Theorem
        title="1.14 - Proposition (Consequences of Addition Axioms)"
        proof={
          <>
            <p className="mb-3">
              If <InlineMath>{'x + y = x + z'}</InlineMath>, the axioms (A) give
            </p>
            <MathBlock>{'y = 0 + y = (-x + x) + y = -x + (x + y) = -x + (x + z) = (-x + x) + z = 0 + z = z'}</MathBlock>
            <p className="mb-3">
              This proves (a). Take <InlineMath>{'z = 0'}</InlineMath> in (a) to obtain (b).
              Take <InlineMath>{'z = -x'}</InlineMath> in (a) to obtain (c).
              Since <InlineMath>{'-x + x = 0'}</InlineMath>, (c) (with <InlineMath>{'-x'}</InlineMath> in
              place of <InlineMath>{'x'}</InlineMath>) gives (d).
            </p>
          </>
        }
      >
        <p className="mb-3">The axioms for addition imply the following statements.</p>
        <ul className="list-none space-y-1">
          <li>(a) If <InlineMath>{'x + y = x + z'}</InlineMath> then <InlineMath>{'y = z'}</InlineMath>.</li>
          <li>(b) If <InlineMath>{'x + y = x'}</InlineMath> then <InlineMath>{'y = 0'}</InlineMath>.</li>
          <li>(c) If <InlineMath>{'x + y = 0'}</InlineMath> then <InlineMath>{'y = -x'}</InlineMath>.</li>
          <li>(d) <InlineMath>{'-(-x) = x'}</InlineMath>.</li>
        </ul>
      </Theorem>

      <p className="mb-4">
        Statement (a) is a cancellation law. Note that (b) asserts the uniqueness of the element
        whose existence is assumed in (A4), and that (c) does the same for (A5).
      </p>

      <Theorem
        title="1.15 - Proposition (Consequences of Multiplication Axioms)"
        proof={
          <p>The proof is so similar to that of Proposition 1.14 that we omit it.</p>
        }
      >
        <p className="mb-3">The axioms for multiplication imply the following statements.</p>
        <ul className="list-none space-y-1">
          <li>(a) If <InlineMath>{'x \\neq 0'}</InlineMath> and <InlineMath>{'xy = xz'}</InlineMath> then <InlineMath>{'y = z'}</InlineMath>.</li>
          <li>(b) If <InlineMath>{'x \\neq 0'}</InlineMath> and <InlineMath>{'xy = x'}</InlineMath> then <InlineMath>{'y = 1'}</InlineMath>.</li>
          <li>(c) If <InlineMath>{'x \\neq 0'}</InlineMath> and <InlineMath>{'xy = 1'}</InlineMath> then <InlineMath>{'y = 1/x'}</InlineMath>.</li>
          <li>(d) If <InlineMath>{'x \\neq 0'}</InlineMath> then <InlineMath>{'1/(1/x) = x'}</InlineMath>.</li>
        </ul>
      </Theorem>

      <Theorem
        title="1.16 - Proposition (Consequences of Field Axioms)"
        proof={
          <>
            <p className="mb-3">
              <InlineMath>{'0x + 0x = (0 + 0)x = 0x'}</InlineMath>. Hence 1.14(b) implies
              that <InlineMath>{'0x = 0'}</InlineMath>, and (a) holds.
            </p>
            <p className="mb-3">
              Next, assume <InlineMath>{'x \\neq 0'}</InlineMath>, <InlineMath>{'y \\neq 0'}</InlineMath>,
              but <InlineMath>{'xy = 0'}</InlineMath>. Then (a) gives
            </p>
            <MathBlock>{'1 = \\left(\\frac{1}{y}\\right)\\left(\\frac{1}{x}\\right)xy = \\left(\\frac{1}{y}\\right)\\left(\\frac{1}{x}\\right)0 = 0'}</MathBlock>
            <p className="mb-3">a contradiction. Thus (b) holds.</p>
            <p className="mb-3">
              The first equality in (c) comes from
            </p>
            <MathBlock>{'(-x)y + xy = (-x + x)y = 0y = 0'}</MathBlock>
            <p className="mb-3">
              combined with 1.14(c); the other half of (c) is proved in the same way.
            </p>
            <p>
              Finally,
            </p>
            <MathBlock>{'(-x)(-y) = -[x(-y)] = -[-(xy)] = xy'}</MathBlock>
            <p>by (c) and 1.14(d).</p>
          </>
        }
      >
        <p className="mb-3">The field axioms imply the following statements, for any <InlineMath>{'x, y, z \\in F'}</InlineMath>.</p>
        <ul className="list-none space-y-1">
          <li>(a) <InlineMath>{'0x = 0'}</InlineMath>.</li>
          <li>(b) If <InlineMath>{'x \\neq 0'}</InlineMath> and <InlineMath>{'y \\neq 0'}</InlineMath> then <InlineMath>{'xy \\neq 0'}</InlineMath>.</li>
          <li>(c) <InlineMath>{'(-x)y = -(xy) = x(-y)'}</InlineMath>.</li>
          <li>(d) <InlineMath>{'(-x)(-y) = xy'}</InlineMath>.</li>
        </ul>
      </Theorem>

      <Definition title="1.17 - Ordered Field">
        <p className="mb-3">
          An <em>ordered field</em> is a field <InlineMath>{'F'}</InlineMath> which is also
          an <em>ordered set</em>, such that
        </p>
        <ul className="list-none space-y-2">
          <li>(i) <InlineMath>{'x + y < x + z'}</InlineMath> if <InlineMath>{'x, y, z \\in F'}</InlineMath> and <InlineMath>{'y < z'}</InlineMath>,</li>
          <li>(ii) <InlineMath>{'xy > 0'}</InlineMath> if <InlineMath>{'x \\in F'}</InlineMath>, <InlineMath>{'y \\in F'}</InlineMath>, <InlineMath>{'x > 0'}</InlineMath>, and <InlineMath>{'y > 0'}</InlineMath>.</li>
        </ul>
        <p className="mt-3">
          If <InlineMath>{'x > 0'}</InlineMath>, we call <InlineMath>{'x'}</InlineMath> <em>positive</em>;
          if <InlineMath>{'x < 0'}</InlineMath>, <InlineMath>{'x'}</InlineMath> is <em>negative</em>.
          For example, <InlineMath>{'Q'}</InlineMath> is an ordered field.
        </p>
      </Definition>

      <Theorem
        title="1.18 - Proposition (Properties of Ordered Fields)"
        proof={
          <>
            <p className="mb-3">
              <strong>(a)</strong> If <InlineMath>{'x > 0'}</InlineMath> then <InlineMath>{'0 = -x + x > -x + 0'}</InlineMath>,
              so that <InlineMath>{'-x < 0'}</InlineMath>. If <InlineMath>{'x < 0'}</InlineMath> then <InlineMath>{'0 = -x + x < -x + 0'}</InlineMath>,
              so that <InlineMath>{'-x > 0'}</InlineMath>. This proves (a).
            </p>
            <p className="mb-3">
              <strong>(b)</strong> Since <InlineMath>{'z > y'}</InlineMath>, we have <InlineMath>{'z - y > y - y = 0'}</InlineMath>,
              hence <InlineMath>{'x(z - y) > 0'}</InlineMath>, and therefore
            </p>
            <MathBlock>{'xz = x(z - y) + xy > 0 + xy = xy'}</MathBlock>
            <p className="mb-3">
              <strong>(c)</strong> By (a), (b), and Proposition 1.16(c), <InlineMath>{'-[x(z - y)] = (-x)(z - y) > 0'}</InlineMath>,
              so that <InlineMath>{'x(z - y) < 0'}</InlineMath>, hence <InlineMath>{'xz < xy'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>(d)</strong> If <InlineMath>{'x > 0'}</InlineMath>, part (ii) of Definition 1.17 gives <InlineMath>{'x^2 > 0'}</InlineMath>.
              If <InlineMath>{'x < 0'}</InlineMath>, then <InlineMath>{'-x > 0'}</InlineMath>,
              hence <InlineMath>{'(-x)^2 > 0'}</InlineMath>. But <InlineMath>{'x^2 = (-x)^2'}</InlineMath>,
              by Proposition 1.16(d). Since <InlineMath>{'1 = 1^2'}</InlineMath>, <InlineMath>{'1 > 0'}</InlineMath>.
            </p>
            <p>
              <strong>(e)</strong> If <InlineMath>{'y > 0'}</InlineMath> and <InlineMath>{'v \\leq 0'}</InlineMath>,
              then <InlineMath>{'yv \\leq 0'}</InlineMath>. But <InlineMath>{'y \\cdot (1/y) = 1 > 0'}</InlineMath>.
              Hence <InlineMath>{'1/y > 0'}</InlineMath>. Likewise, <InlineMath>{'1/x > 0'}</InlineMath>. If we multiply both
              sides of the inequality <InlineMath>{'x < y'}</InlineMath> by the positive
              quantity <InlineMath>{'(1/x)(1/y)'}</InlineMath>, we obtain <InlineMath>{'1/y < 1/x'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">The following statements are true in every ordered field.</p>
        <ul className="list-none space-y-1">
          <li>(a) If <InlineMath>{'x > 0'}</InlineMath> then <InlineMath>{'-x < 0'}</InlineMath>, and vice versa.</li>
          <li>(b) If <InlineMath>{'x > 0'}</InlineMath> and <InlineMath>{'y < z'}</InlineMath> then <InlineMath>{'xy < xz'}</InlineMath>.</li>
          <li>(c) If <InlineMath>{'x < 0'}</InlineMath> and <InlineMath>{'y < z'}</InlineMath> then <InlineMath>{'xy > xz'}</InlineMath>.</li>
          <li>(d) If <InlineMath>{'x \\neq 0'}</InlineMath> then <InlineMath>{'x^2 > 0'}</InlineMath>. In particular, <InlineMath>{'1 > 0'}</InlineMath>.</li>
          <li>(e) If <InlineMath>{'0 < x < y'}</InlineMath> then <InlineMath>{'0 < 1/y < 1/x'}</InlineMath>.</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>A field is a set with addition and multiplication satisfying specific axioms</li>
        <li>The addition axioms include closure, commutativity, associativity, identity (0), and inverse (-x)</li>
        <li>The multiplication axioms include closure, commutativity, associativity, identity (1), and inverse (1/x for x nonzero)</li>
        <li>The distributive law connects addition and multiplication: <InlineMath>{'x(y + z) = xy + xz'}</InlineMath></li>
        <li><InlineMath>{'Q'}</InlineMath> (the rationals) is a field</li>
        <li>An ordered field combines field structure with an order relation compatible with the operations</li>
        <li>In any ordered field, squares of nonzero elements are positive</li>
      </ul>
    </LessonLayout>
  );
}
