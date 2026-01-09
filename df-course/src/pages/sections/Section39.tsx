import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2>Chinese Remainder Theorem for Rings</h2>

      <p>
        The Chinese Remainder Theorem (CRT) is a classical result in number theory that extends
        beautifully to the setting of commutative rings. It provides a way to decompose quotient
        rings by coprime ideals into direct products, with applications ranging from solving
        systems of congruences to structure theorems in algebra.
      </p>

      <h3>The Classical Result</h3>

      <Theorem title="Chinese Remainder Theorem (Classical)"
        proof={
          <>
            <p>
              <strong>Existence:</strong> By Bezout's identity, since <InlineMath>{'\\gcd(m, n) = 1'}</InlineMath>,
              there exist <InlineMath>{'s, t \\in \\mathbb{Z}'}</InlineMath> with <InlineMath>{'sm + tn = 1'}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{'x = atn + bsm'}</InlineMath>. Then <InlineMath>{'x \\equiv a(1 - sm) \\equiv a \\pmod{m}'}</InlineMath>
              and <InlineMath>{'x \\equiv b(1 - tn) \\equiv b \\pmod{n}'}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Uniqueness:</strong> If <InlineMath>{'x_1, x_2'}</InlineMath> both work, then <InlineMath>{'x_1 - x_2'}</InlineMath>
              is divisible by both <InlineMath>m</InlineMath> and <InlineMath>n</InlineMath>, hence by <InlineMath>mn</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'m, n \\in \\mathbb{Z}'}</InlineMath> with <InlineMath>{'\\gcd(m, n) = 1'}</InlineMath>.
          For any <InlineMath>{'a, b \\in \\mathbb{Z}'}</InlineMath>, the system
        </p>
        <MathBlock>
          {'x \\equiv a \\pmod{m}, \\quad x \\equiv b \\pmod{n}'}
        </MathBlock>
        <p className="mt-2">
          has a unique solution modulo <InlineMath>mn</InlineMath>.
        </p>
      </Theorem>

      <Example title="Solving a System of Congruences">
        <p>
          Solve: <InlineMath>{'x \\equiv 2 \\pmod{3}'}</InlineMath> and <InlineMath>{'x \\equiv 3 \\pmod{5}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{'\\gcd(3, 5) = 1'}</InlineMath>, we find <InlineMath>{'2 \\cdot 3 - 1 \\cdot 5 = 1'}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{'x = 2 \\cdot (-1) \\cdot 5 + 3 \\cdot 2 \\cdot 3 = -10 + 18 = 8'}</InlineMath>.
        </p>
        <p className="mt-2">
          Check: <InlineMath>{'8 = 2 \\cdot 3 + 2 \\equiv 2 \\pmod{3}'}</InlineMath> and
          <InlineMath>{'8 = 1 \\cdot 5 + 3 \\equiv 3 \\pmod{5}'}</InlineMath>. Verified!
        </p>
      </Example>

      <h3>The Ring-Theoretic Formulation</h3>

      <Theorem title="Chinese Remainder Theorem (Ring Version)"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: R \\to R/I \\times R/J'}</InlineMath> by <InlineMath>{'\\phi(r) = (r + I, r + J)'}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Kernel:</strong> <InlineMath>{'\\ker(\\phi) = \\{r : r \\in I \\text{ and } r \\in J\\} = I \\cap J'}</InlineMath>.
              Since <InlineMath>I</InlineMath> and <InlineMath>J</InlineMath> are coprime, <InlineMath>{'I \\cap J = IJ'}</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Surjectivity:</strong> Since <InlineMath>{'I + J = R'}</InlineMath>, write <InlineMath>{'1 = e_I + e_J'}</InlineMath>
              with <InlineMath>{'e_I \\in I'}</InlineMath>, <InlineMath>{'e_J \\in J'}</InlineMath>.
            </p>
            <p className="mt-2">
              For <InlineMath>{'(a + I, b + J) \\in R/I \\times R/J'}</InlineMath>, let <InlineMath>{'r = ae_J + be_I'}</InlineMath>.
              Then <InlineMath>{'r \\equiv ae_J \\equiv a(1 - e_I) \\equiv a \\pmod{I}'}</InlineMath>, and similarly for <InlineMath>J</InlineMath>.
            </p>
            <p className="mt-2">
              By the First Isomorphism Theorem, <InlineMath>{'R/IJ \\cong R/I \\times R/J'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>I</InlineMath> and <InlineMath>J</InlineMath> be coprime ideals of a commutative ring
          <InlineMath>R</InlineMath> (i.e., <InlineMath>{'I + J = R'}</InlineMath>). Then:
        </p>
        <MathBlock>
          {'R/(I \\cap J) \\cong R/I \\times R/J'}
        </MathBlock>
        <p className="mt-2">
          Since <InlineMath>I</InlineMath> and <InlineMath>J</InlineMath> are coprime, <InlineMath>{'I \\cap J = IJ'}</InlineMath>, so:
        </p>
        <MathBlock>
          {'R/IJ \\cong R/I \\times R/J'}
        </MathBlock>
      </Theorem>

      <Example title="Z/6Z as a Product">
        <p>
          In <InlineMath>{'\\mathbb{Z}'}</InlineMath>, the ideals <InlineMath>{'(2)'}</InlineMath> and
          <InlineMath>{'(3)'}</InlineMath> are coprime since <InlineMath>{'(2) + (3) = (1) = \\mathbb{Z}'}</InlineMath>.
        </p>
        <p className="mt-2">
          By CRT:
        </p>
        <MathBlock>
          {'\\mathbb{Z}/6\\mathbb{Z} \\cong \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/3\\mathbb{Z}'}
        </MathBlock>
        <p className="mt-2">
          The isomorphism maps <InlineMath>{'a \\mapsto (a \\mod 2, a \\mod 3)'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'0 \\mapsto (0, 0)'}</InlineMath></li>
          <li><InlineMath>{'1 \\mapsto (1, 1)'}</InlineMath></li>
          <li><InlineMath>{'2 \\mapsto (0, 2)'}</InlineMath></li>
          <li><InlineMath>{'3 \\mapsto (1, 0)'}</InlineMath></li>
          <li><InlineMath>{'4 \\mapsto (0, 1)'}</InlineMath></li>
          <li><InlineMath>{'5 \\mapsto (1, 2)'}</InlineMath></li>
        </ul>
      </Example>

      <h3>Multiple Ideals</h3>

      <Theorem title="CRT for Multiple Coprime Ideals"
        proof={
          <>
            <p>
              Proceed by induction on <InlineMath>n</InlineMath>. The base case <InlineMath>{'n = 2'}</InlineMath>
              is the main theorem.
            </p>
            <p className="mt-2">
              For the inductive step, show that <InlineMath>{'I_1'}</InlineMath> and <InlineMath>{'I_2 \\cdots I_n'}</InlineMath>
              are coprime, then apply the two-ideal case and the inductive hypothesis.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'I_1, I_2, \\ldots, I_n'}</InlineMath> be pairwise coprime ideals of <InlineMath>R</InlineMath>.
          Then:
        </p>
        <MathBlock>
          {'R/(I_1 I_2 \\cdots I_n) \\cong R/I_1 \\times R/I_2 \\times \\cdots \\times R/I_n'}
        </MathBlock>
      </Theorem>

      <Example title="Structure of Z/60Z">
        <p>
          Since <InlineMath>{'60 = 4 \\cdot 3 \\cdot 5 = 2^2 \\cdot 3 \\cdot 5'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\mathbb{Z}/60\\mathbb{Z} \\cong \\mathbb{Z}/4\\mathbb{Z} \\times \\mathbb{Z}/3\\mathbb{Z} \\times \\mathbb{Z}/5\\mathbb{Z}'}
        </MathBlock>
        <p className="mt-2">
          This tells us about the structure of <InlineMath>{'(\\mathbb{Z}/60\\mathbb{Z})^\\times'}</InlineMath>:
        </p>
        <MathBlock>
          {'(\\mathbb{Z}/60\\mathbb{Z})^\\times \\cong (\\mathbb{Z}/4\\mathbb{Z})^\\times \\times (\\mathbb{Z}/3\\mathbb{Z})^\\times \\times (\\mathbb{Z}/5\\mathbb{Z})^\\times'}
        </MathBlock>
        <MathBlock>
          {'\\cong \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/4\\mathbb{Z}'}
        </MathBlock>
        <p className="mt-2">
          So <InlineMath>{'|(\\mathbb{Z}/60\\mathbb{Z})^\\times| = 2 \\cdot 2 \\cdot 4 = 16 = \\varphi(60)'}</InlineMath>.
        </p>
      </Example>

      <h3>Applications</h3>

      <Example title="Idempotents from CRT">
        <p>
          In <InlineMath>{'\\mathbb{Z}/15\\mathbb{Z} \\cong \\mathbb{Z}/3\\mathbb{Z} \\times \\mathbb{Z}/5\\mathbb{Z}'}</InlineMath>,
          the idempotents (elements with <InlineMath>{'e^2 = e'}</InlineMath>) correspond to
          <InlineMath>{'(0, 0), (1, 1), (0, 1), (1, 0)'}</InlineMath>.
        </p>
        <p className="mt-2">
          These are <InlineMath>{'0, 1, 10, 6'}</InlineMath> in <InlineMath>{'\\mathbb{Z}/15\\mathbb{Z}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Verify: <InlineMath>{'10^2 = 100 = 6 \\cdot 15 + 10 \\equiv 10 \\pmod{15}'}</InlineMath>.
        </p>
        <p className="mt-2">
          And: <InlineMath>{'6^2 = 36 = 2 \\cdot 15 + 6 \\equiv 6 \\pmod{15}'}</InlineMath>.
        </p>
      </Example>

      <Definition title="Orthogonal Idempotents">
        <p>
          Elements <InlineMath>{'e_1, \\ldots, e_n'}</InlineMath> are <strong>orthogonal idempotents</strong> if:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'e_i^2 = e_i'}</InlineMath> for all <InlineMath>i</InlineMath></li>
          <li><InlineMath>{'e_i e_j = 0'}</InlineMath> for <InlineMath>{'i \\neq j'}</InlineMath></li>
          <li><InlineMath>{'e_1 + e_2 + \\cdots + e_n = 1'}</InlineMath></li>
        </ul>
        <p className="mt-2">
          The CRT produces orthogonal idempotents: the elements mapping to
          <InlineMath>{'(1, 0, \\ldots, 0)'}</InlineMath>, <InlineMath>{'(0, 1, \\ldots, 0)'}</InlineMath>, etc.
        </p>
      </Definition>

      <Theorem title="CRT and Polynomial Factorization"
        proof={
          <>
            <p>
              The ideals <InlineMath>{'(x - a_i)'}</InlineMath> are coprime since <InlineMath>{'(x - a_i) + (x - a_j)'}</InlineMath>
              contains <InlineMath>{'(x - a_i) - (x - a_j) = a_j - a_i \\neq 0'}</InlineMath>, hence contains a unit in <InlineMath>F</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'f(x) = (x - a_1)(x - a_2) \\cdots (x - a_n)'}</InlineMath> where <InlineMath>{'a_i'}</InlineMath>
          are distinct elements of a field <InlineMath>F</InlineMath>. Then:
        </p>
        <MathBlock>
          {'F[x]/(f(x)) \\cong F \\times F \\times \\cdots \\times F \\quad (n \\text{ copies})'}
        </MathBlock>
      </Theorem>

      <Example title="Lagrange Interpolation">
        <p>
          The CRT provides a conceptual proof of Lagrange interpolation. Given points
          <InlineMath>{'(a_1, b_1), \\ldots, (a_n, b_n)'}</InlineMath> with distinct <InlineMath>{'a_i'}</InlineMath>,
          find a polynomial <InlineMath>{'p(x)'}</InlineMath> of degree <InlineMath>{'< n'}</InlineMath> with <InlineMath>{'p(a_i) = b_i'}</InlineMath>.
        </p>
        <p className="mt-2">
          The evaluation map <InlineMath>{'F[x] \\to F^n'}</InlineMath> given by <InlineMath>{'p \\mapsto (p(a_1), \\ldots, p(a_n))'}</InlineMath>
          is surjective, and by CRT, the kernel is the principal ideal generated by <InlineMath>{'\\prod(x - a_i)'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info">
        <strong>Categorical Viewpoint:</strong> The Chinese Remainder Theorem can be viewed as saying
        that the quotient functor <InlineMath>{'R \\mapsto R/I'}</InlineMath> preserves finite products
        when the ideals are coprime. This perspective generalizes to other algebraic structures.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> The Chinese Remainder Theorem states that for coprime ideals
        <InlineMath>{'I_1, \\ldots, I_n'}</InlineMath>, the ring <InlineMath>{'R/(I_1 \\cdots I_n)'}</InlineMath>
        decomposes as a direct product <InlineMath>{'R/I_1 \\times \\cdots \\times R/I_n'}</InlineMath>.
        This powerful result has applications to solving systems of congruences, understanding
        unit groups, finding idempotents, and polynomial interpolation.
      </Callout>
    </LessonLayout>
  );
}
