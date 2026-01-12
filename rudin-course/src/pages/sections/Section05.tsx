import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mb-4">The Complex Field</h2>

      <p className="mb-4">
        We now introduce the complex numbers as ordered pairs of real numbers with
        specially defined addition and multiplication. This construction shows that
        the complex numbers form a field containing <InlineMath>{'R'}</InlineMath> as a subfield.
      </p>

      <Definition title="1.24 - Complex Numbers">
        <p className="mb-3">
          A <em>complex number</em> is an ordered pair <InlineMath>{'(a, b)'}</InlineMath> of real numbers.
          "Ordered" means that <InlineMath>{'(a, b)'}</InlineMath> and <InlineMath>{'(b, a)'}</InlineMath> are
          regarded as distinct if <InlineMath>{'a \\neq b'}</InlineMath>.
        </p>
        <p className="mb-3">
          Let <InlineMath>{'x = (a, b)'}</InlineMath>, <InlineMath>{'y = (c, d)'}</InlineMath> be two complex numbers.
          We write <InlineMath>{'x = y'}</InlineMath> if and only if <InlineMath>{'a = c'}</InlineMath> and <InlineMath>{'b = d'}</InlineMath>.
          (Note that this definition is not entirely superfluous; think of equality of rational numbers,
          represented as quotients of integers.) We define
        </p>
        <MathBlock>{'x + y = (a + c, b + d)'}</MathBlock>
        <MathBlock>{'xy = (ac - bd, ad + bc)'}</MathBlock>
      </Definition>

      <Theorem
        title="1.25 - Complex Numbers Form a Field"
        proof={
          <>
            <p className="mb-3">
              We simply verify the field axioms, as listed in Definition 1.12.
              Let <InlineMath>{'x = (a, b)'}</InlineMath>, <InlineMath>{'y = (c, d)'}</InlineMath>, <InlineMath>{'z = (e, f)'}</InlineMath>.
            </p>
            <p className="mb-2">(A1) is clear.</p>
            <p className="mb-2">
              (A2) <InlineMath>{'x + y = (a + c, b + d) = (c + a, d + b) = y + x'}</InlineMath>.
            </p>
            <p className="mb-2">
              (A3) <InlineMath>{'(x + y) + z = (a + c, b + d) + (e, f) = (a + c + e, b + d + f) = x + (y + z)'}</InlineMath>.
            </p>
            <p className="mb-2">
              (A4) <InlineMath>{'x + 0 = (a, b) + (0, 0) = (a, b) = x'}</InlineMath>.
            </p>
            <p className="mb-2">
              (A5) Put <InlineMath>{'-x = (-a, -b)'}</InlineMath>. Then <InlineMath>{'x + (-x) = (0, 0) = 0'}</InlineMath>.
            </p>
            <p className="mb-2">(M1) is clear.</p>
            <p className="mb-2">
              (M2) <InlineMath>{'xy = (ac - bd, ad + bc) = (ca - db, da + cb) = yx'}</InlineMath>.
            </p>
            <p className="mb-2">
              (M3) <InlineMath>{'(xy)z = (ac - bd, ad + bc)(e, f)'}</InlineMath>
            </p>
            <MathBlock>{'= (ace - bde - adf - bcf, acf - bdf + ade + bce)'}</MathBlock>
            <MathBlock>{'= (a, b)(ce - df, cf + de) = x(yz)'}</MathBlock>
            <p className="mb-2">
              (M4) <InlineMath>{'1x = (1, 0)(a, b) = (a, b) = x'}</InlineMath>.
            </p>
            <p className="mb-3">
              (M5) If <InlineMath>{'x \\neq 0'}</InlineMath> then <InlineMath>{'(a, b) \\neq (0, 0)'}</InlineMath>,
              which means that at least one of the real numbers <InlineMath>{'a'}</InlineMath>, <InlineMath>{'b'}</InlineMath> is
              different from 0. Hence <InlineMath>{'a^2 + b^2 > 0'}</InlineMath>, by Proposition 1.18(d),
              and we can define
            </p>
            <MathBlock>{'\\frac{1}{x} = \\left(\\frac{a}{a^2 + b^2}, \\frac{-b}{a^2 + b^2}\\right)'}</MathBlock>
            <p className="mb-2">Then</p>
            <MathBlock>{'x \\cdot \\frac{1}{x} = (a, b)\\left(\\frac{a}{a^2 + b^2}, \\frac{-b}{a^2 + b^2}\\right) = (1, 0) = 1'}</MathBlock>
            <p>
              (D) <InlineMath>{'x(y + z) = (a, b)(c + e, d + f)'}</InlineMath>
            </p>
            <MathBlock>{'= (ac + ae - bd - bf, ad + af + bc + be)'}</MathBlock>
            <MathBlock>{'= (ac - bd, ad + bc) + (ae - bf, af + be) = xy + xz'}</MathBlock>
          </>
        }
      >
        <p>
          These definitions of addition and multiplication turn the set of all complex numbers
          into a field, with <InlineMath>{'(0, 0)'}</InlineMath> and <InlineMath>{'(1, 0)'}</InlineMath> in
          the role of <InlineMath>{'0'}</InlineMath> and <InlineMath>{'1'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="1.26 - Real Numbers as Complex Numbers"
        proof={<p>The proof is trivial.</p>}
      >
        <p>For any real numbers <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath> we have</p>
        <MathBlock>{'(a, 0) + (b, 0) = (a + b, 0), \\quad (a, 0)(b, 0) = (ab, 0)'}</MathBlock>
      </Theorem>

      <p className="mb-4">
        Theorem 1.26 shows that the complex numbers of the form <InlineMath>{'(a, 0)'}</InlineMath> have
        the same arithmetic properties as the corresponding real numbers <InlineMath>{'a'}</InlineMath>.
        We can therefore identify <InlineMath>{'(a, 0)'}</InlineMath> with <InlineMath>{'a'}</InlineMath>.
        This identification gives us the real field as a subfield of the complex field.
      </p>

      <Definition title="1.27 - The Imaginary Unit">
        <MathBlock>{'i = (0, 1)'}</MathBlock>
      </Definition>

      <Theorem
        title="1.28 - i squared equals -1"
        proof={
          <MathBlock>{'i^2 = (0, 1)(0, 1) = (-1, 0) = -1'}</MathBlock>
        }
      >
        <MathBlock>{'i^2 = -1'}</MathBlock>
      </Theorem>

      <Theorem
        title="1.29 - Standard Form of Complex Numbers"
        proof={
          <MathBlock>{'a + bi = (a, 0) + (b, 0)(0, 1) = (a, 0) + (0, b) = (a, b)'}</MathBlock>
        }
      >
        <p>If <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath> are real, then <InlineMath>{'(a, b) = a + bi'}</InlineMath>.</p>
      </Theorem>

      <Definition title="1.30 - Complex Conjugate">
        <p className="mb-3">
          If <InlineMath>{'a'}</InlineMath>, <InlineMath>{'b'}</InlineMath> are real
          and <InlineMath>{'z = a + bi'}</InlineMath>, then the complex number <InlineMath>{'\\bar{z} = a - bi'}</InlineMath> is
          called the <em>conjugate</em> of <InlineMath>{'z'}</InlineMath>.
        </p>
        <p>
          The numbers <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath> are the <em>real part</em> and
          the <em>imaginary part</em> of <InlineMath>{'z'}</InlineMath>, respectively.
          We shall occasionally write <InlineMath>{'a = \\text{Re}(z)'}</InlineMath>, <InlineMath>{'b = \\text{Im}(z)'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="1.31 - Properties of Conjugates"
        proof={
          <>
            <p className="mb-3">
              (a), (b), and (c) are quite trivial. To prove (d), write <InlineMath>{'z = a + bi'}</InlineMath>,
              and note that <InlineMath>{'z\\bar{z} = a^2 + b^2'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">If <InlineMath>{'z'}</InlineMath> and <InlineMath>{'w'}</InlineMath> are complex, then</p>
        <ul className="list-none space-y-1">
          <li>(a) <InlineMath>{'\\overline{z + w} = \\bar{z} + \\bar{w}'}</InlineMath>,</li>
          <li>(b) <InlineMath>{'\\overline{zw} = \\bar{z} \\cdot \\bar{w}'}</InlineMath>,</li>
          <li>(c) <InlineMath>{'z + \\bar{z} = 2\\,\\text{Re}(z)'}</InlineMath>, <InlineMath>{'z - \\bar{z} = 2i\\,\\text{Im}(z)'}</InlineMath>,</li>
          <li>(d) <InlineMath>{'z\\bar{z}'}</InlineMath> is real and positive (except when <InlineMath>{'z = 0'}</InlineMath>).</li>
        </ul>
      </Theorem>

      <Definition title="1.32 - Absolute Value (Modulus)">
        <p className="mb-3">
          If <InlineMath>{'z'}</InlineMath> is a complex number, its <em>absolute value</em> <InlineMath>{'|z|'}</InlineMath> is
          the nonnegative square root of <InlineMath>{'z\\bar{z}'}</InlineMath>; that is, <InlineMath>{'|z| = (z\\bar{z})^{1/2}'}</InlineMath>.
        </p>
        <p>
          The existence (and uniqueness) of <InlineMath>{'|z|'}</InlineMath> follows from Theorem 1.21
          and part (d) of Theorem 1.31.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          Note that when <InlineMath>{'x'}</InlineMath> is real, then <InlineMath>{'\\bar{x} = x'}</InlineMath>,
          hence <InlineMath>{'|x| = \\sqrt{x^2}'}</InlineMath>. Thus <InlineMath>{'|x| = x'}</InlineMath> if <InlineMath>{'x \\geq 0'}</InlineMath>,
          and <InlineMath>{'|x| = -x'}</InlineMath> if <InlineMath>{'x < 0'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="1.33 - Properties of Absolute Value"
        proof={
          <>
            <p className="mb-3">
              (a) and (b) are trivial. Put <InlineMath>{'z = a + bi'}</InlineMath>, <InlineMath>{'w = c + di'}</InlineMath>,
              with <InlineMath>{'a, b, c, d'}</InlineMath> real. Then
            </p>
            <MathBlock>{'|zw|^2 = (ac - bd)^2 + (ad + bc)^2 = (a^2 + b^2)(c^2 + d^2) = |z|^2|w|^2'}</MathBlock>
            <p className="mb-3">
              or <InlineMath>{'|zw|^2 = (|z||w|)^2'}</InlineMath>. Now (c) follows from the uniqueness
              assertion of Theorem 1.21.
            </p>
            <p className="mb-3">
              To prove (d), note that <InlineMath>{'a^2 \\leq a^2 + b^2'}</InlineMath>, hence
            </p>
            <MathBlock>{'|a| = \\sqrt{a^2} \\leq \\sqrt{a^2 + b^2}'}</MathBlock>
            <p className="mb-3">
              To prove (e), note that <InlineMath>{'\\bar{z}w'}</InlineMath> is the conjugate
              of <InlineMath>{'z\\bar{w}'}</InlineMath>, so that <InlineMath>{'z\\bar{w} + \\bar{z}w = 2\\,\\text{Re}(z\\bar{w})'}</InlineMath>. Hence
            </p>
            <MathBlock>{'|z + w|^2 = (z + w)(\\bar{z} + \\bar{w}) = z\\bar{z} + z\\bar{w} + \\bar{z}w + w\\bar{w}'}</MathBlock>
            <MathBlock>{'= |z|^2 + 2\\,\\text{Re}(z\\bar{w}) + |w|^2'}</MathBlock>
            <MathBlock>{'\\leq |z|^2 + 2|z\\bar{w}| + |w|^2'}</MathBlock>
            <MathBlock>{'= |z|^2 + 2|z||w| + |w|^2 = (|z| + |w|)^2'}</MathBlock>
            <p>Now (e) follows by taking square roots.</p>
          </>
        }
      >
        <p className="mb-3">Let <InlineMath>{'z'}</InlineMath> and <InlineMath>{'w'}</InlineMath> be complex numbers. Then</p>
        <ul className="list-none space-y-1">
          <li>(a) <InlineMath>{'|z| > 0'}</InlineMath> unless <InlineMath>{'z = 0'}</InlineMath>, <InlineMath>{'|0| = 0'}</InlineMath>,</li>
          <li>(b) <InlineMath>{'|\\bar{z}| = |z|'}</InlineMath>,</li>
          <li>(c) <InlineMath>{'|zw| = |z||w|'}</InlineMath>,</li>
          <li>(d) <InlineMath>{'|\\text{Re}\\,z| \\leq |z|'}</InlineMath>,</li>
          <li>(e) <InlineMath>{'|z + w| \\leq |z| + |w|'}</InlineMath> (triangle inequality).</li>
        </ul>
      </Theorem>

      <Theorem
        title="1.35 - The Schwarz Inequality"
        proof={
          <>
            <p className="mb-3">
              Put <InlineMath>{'A = \\sum|a_j|^2'}</InlineMath>, <InlineMath>{'B = \\sum|b_j|^2'}</InlineMath>,
              <InlineMath>{'C = \\sum a_j\\bar{b}_j'}</InlineMath> (in all sums in this proof,
              <InlineMath>{'j'}</InlineMath> runs over the values <InlineMath>{'1, \\ldots, n'}</InlineMath>).
              If <InlineMath>{'B = 0'}</InlineMath>, then <InlineMath>{'b_1 = \\cdots = b_n = 0'}</InlineMath>, and the
              conclusion is trivial. Assume therefore that <InlineMath>{'B > 0'}</InlineMath>. By Theorem 1.31 we have
            </p>
            <MathBlock>{'\\sum |Ba_j - Cb_j|^2 = \\sum (Ba_j - Cb_j)(B\\bar{a}_j - \\bar{C}\\bar{b}_j)'}</MathBlock>
            <MathBlock>{'= B^2\\sum|a_j|^2 - B\\bar{C}\\sum a_j\\bar{b}_j - BC\\sum\\bar{a}_jb_j + |C|^2\\sum|b_j|^2'}</MathBlock>
            <MathBlock>{'= B^2A - B|C|^2'}</MathBlock>
            <MathBlock>{'= B(AB - |C|^2)'}</MathBlock>
            <p>
              Since <InlineMath>{'B > 0'}</InlineMath>, it follows that <InlineMath>{'AB - |C|^2 \\geq 0'}</InlineMath>.
              This is the desired inequality.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'a_1, \\ldots, a_n'}</InlineMath> and <InlineMath>{'b_1, \\ldots, b_n'}</InlineMath> are
          complex numbers, then
        </p>
        <MathBlock>{'\\left|\\sum_{j=1}^n a_j\\bar{b}_j\\right|^2 \\leq \\sum_{j=1}^n|a_j|^2 \\sum_{j=1}^n|b_j|^2'}</MathBlock>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Complex numbers are ordered pairs <InlineMath>{'(a, b)'}</InlineMath> of reals with special operations</li>
        <li>The complex numbers form a field with <InlineMath>{'0 = (0, 0)'}</InlineMath> and <InlineMath>{'1 = (1, 0)'}</InlineMath></li>
        <li>The imaginary unit <InlineMath>{'i = (0, 1)'}</InlineMath> satisfies <InlineMath>{'i^2 = -1'}</InlineMath></li>
        <li>Every complex number can be written as <InlineMath>{'a + bi'}</InlineMath></li>
        <li>The conjugate of <InlineMath>{'z = a + bi'}</InlineMath> is <InlineMath>{'\\bar{z} = a - bi'}</InlineMath></li>
        <li>The absolute value is <InlineMath>{'|z| = \\sqrt{a^2 + b^2}'}</InlineMath></li>
        <li>The triangle inequality holds: <InlineMath>{'|z + w| \\leq |z| + |w|'}</InlineMath></li>
        <li>The Schwarz inequality bounds the inner product by the product of norms</li>
      </ul>
    </LessonLayout>
  );
}
