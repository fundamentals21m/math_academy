import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2>Rational Canonical Form</h2>

      <p>
        The rational canonical form provides a canonical matrix representation for any linear
        operator on a finite-dimensional vector space. It arises from viewing the vector space
        as a module over the polynomial ring and applying the structure theorem for modules over PIDs.
      </p>

      <h3>The Module Viewpoint</h3>

      <Definition title="F[x]-Module Structure">
        <p>
          Let <InlineMath>T: V \\to V</InlineMath> be a linear operator on a finite-dimensional
          <InlineMath>F</InlineMath>-vector space. We make <InlineMath>V</InlineMath> into an
          <InlineMath>F[x]</InlineMath>-module by defining:
        </p>
        <MathBlock>
          {'f(x) \\cdot v = f(T)(v) = a_0 v + a_1 T(v) + a_2 T^2(v) + \\cdots + a_n T^n(v)'}
        </MathBlock>
        <p className="mt-2">
          for <InlineMath>{'f(x) = a_0 + a_1 x + \\cdots + a_n x^n'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Finitely Generated Torsion Module"
        proof={
          <>
            <p>
              <InlineMath>V</InlineMath> is finite-dimensional over <InlineMath>F</InlineMath>, hence finitely
              generated over <InlineMath>F[x]</InlineMath> (any <InlineMath>F</InlineMath>-basis works).
            </p>
            <p className="mt-2">
              For torsion: the characteristic polynomial <InlineMath>{'\\chi_T(x)'}</InlineMath> annihilates
              <InlineMath>T</InlineMath> (Cayley-Hamilton), so <InlineMath>{'\\chi_T(x) \\cdot v = 0'}</InlineMath>
              for all <InlineMath>{'v \\in V'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          As an <InlineMath>F[x]</InlineMath>-module, <InlineMath>V</InlineMath> is finitely generated and
          torsion (no free part).
        </p>
      </Theorem>

      <h3>The Rational Canonical Form</h3>

      <Definition title="Companion Matrix">
        <p>
          For a monic polynomial <InlineMath>{'f(x) = x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0'}</InlineMath>,
          the <strong>companion matrix</strong> is:
        </p>
        <MathBlock>
          {'C(f) = \\begin{pmatrix} 0 & 0 & \\cdots & 0 & -a_0 \\\\ 1 & 0 & \\cdots & 0 & -a_1 \\\\ 0 & 1 & \\cdots & 0 & -a_2 \\\\ \\vdots & & \\ddots & & \\vdots \\\\ 0 & 0 & \\cdots & 1 & -a_{n-1} \\end{pmatrix}'}
        </MathBlock>
      </Definition>

      <Theorem title="Companion Matrix Properties"
        proof={
          <>
            <p>
              Let <InlineMath>{'e_1, \\ldots, e_n'}</InlineMath> be the standard basis. Then
              <InlineMath>{'C(f)e_i = e_{i+1}'}</InlineMath> for <InlineMath>{'i < n'}</InlineMath> and
              <InlineMath>{'C(f)e_n = -a_0 e_1 - \\cdots - a_{n-1} e_n'}</InlineMath>.
            </p>
            <p className="mt-2">
              Thus <InlineMath>{'C(f)^n + a_{n-1}C(f)^{n-1} + \\cdots + a_0 I = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The characteristic polynomial and minimal polynomial of <InlineMath>{'C(f)'}</InlineMath> both equal <InlineMath>f</InlineMath>:
        </p>
        <MathBlock>
          {'\\chi_{C(f)}(x) = \\mu_{C(f)}(x) = f(x)'}
        </MathBlock>
        <p className="mt-2">
          The module <InlineMath>{'F^n'}</InlineMath> with <InlineMath>{'C(f)'}</InlineMath> acting is isomorphic
          to <InlineMath>{'F[x]/(f)'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Rational Canonical Form"
        proof={
          <>
            <p>
              Apply the structure theorem for <InlineMath>F[x]</InlineMath>-modules:
            </p>
            <MathBlock>
              {'V \\cong F[x]/(f_1) \\oplus F[x]/(f_2) \\oplus \\cdots \\oplus F[x]/(f_k)'}
            </MathBlock>
            <p className="mt-2">
              with <InlineMath>{'f_1 \\mid f_2 \\mid \\cdots \\mid f_k'}</InlineMath>. Each summand corresponds
              to a companion matrix block.
            </p>
          </>
        }
      >
        <p>
          Every linear operator <InlineMath>{'T: V \\to V'}</InlineMath> has a matrix in
          <strong>rational canonical form</strong>:
        </p>
        <MathBlock>
          {'\\begin{pmatrix} C(f_1) & & & \\\\ & C(f_2) & & \\\\ & & \\ddots & \\\\ & & & C(f_k) \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'f_1 \\mid f_2 \\mid \\cdots \\mid f_k'}</InlineMath> are the <strong>invariant factors</strong> of <InlineMath>T</InlineMath>.
        </p>
      </Theorem>

      <h3>Properties of Invariant Factors</h3>

      <Theorem title="Invariant Factors and Standard Polynomials"
        proof={
          <>
            <p>
              The minimal polynomial is the largest invariant factor (annihilates all of <InlineMath>V</InlineMath>).
              The characteristic polynomial is the product of invariant factors (determinant of <InlineMath>{'xI - T'}</InlineMath>).
            </p>
          </>
        }
      >
        <p>
          For the invariant factors <InlineMath>{'f_1 \\mid f_2 \\mid \\cdots \\mid f_k'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Minimal polynomial: <InlineMath>{'\\mu_T(x) = f_k'}</InlineMath></li>
          <li>Characteristic polynomial: <InlineMath>{'\\chi_T(x) = f_1 \\cdot f_2 \\cdots f_k'}</InlineMath></li>
          <li><InlineMath>{'\\mu_T'}</InlineMath> divides <InlineMath>{'\\chi_T'}</InlineMath></li>
          <li><InlineMath>{'\\mu_T'}</InlineMath> and <InlineMath>{'\\chi_T'}</InlineMath> have the same roots</li>
        </ul>
      </Theorem>

      <Example title="Finding Rational Canonical Form">
        <p>
          Find the rational canonical form of <InlineMath>{'T: \\mathbb{R}^4 \\to \\mathbb{R}^4'}</InlineMath>
          with characteristic polynomial <InlineMath>{'\\chi_T = (x-1)^2(x-2)^2'}</InlineMath> and
          minimal polynomial <InlineMath>{'\\mu_T = (x-1)(x-2)'}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{'\\mu_T = f_k'}</InlineMath>, the largest invariant factor is <InlineMath>{'(x-1)(x-2)'}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{'\\chi_T = \\prod f_i'}</InlineMath> and <InlineMath>{'f_1 \\mid f_2 \\mid \\cdots \\mid f_k'}</InlineMath>:
          We need <InlineMath>{'f_1 \\cdots f_k = (x-1)^2(x-2)^2'}</InlineMath> with <InlineMath>{'f_k = (x-1)(x-2)'}</InlineMath>.
        </p>
        <p className="mt-2">
          So <InlineMath>{'f_1 = (x-1)(x-2)'}</InlineMath> also. The invariant factors are <InlineMath>{'(x-1)(x-2), (x-1)(x-2)'}</InlineMath>.
        </p>
        <p className="mt-2">
          Rational canonical form:
        </p>
        <MathBlock>
          {'\\begin{pmatrix} C((x-1)(x-2)) & 0 \\\\ 0 & C((x-1)(x-2)) \\end{pmatrix} = \\begin{pmatrix} 0 & -2 & 0 & 0 \\\\ 1 & 3 & 0 & 0 \\\\ 0 & 0 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      <h3>Similarity and Canonical Forms</h3>

      <Theorem title="Similarity Criterion"
        proof={
          <>
            <p>
              Two matrices are similar iff they represent the same linear transformation in different bases.
              This happens iff the corresponding <InlineMath>F[x]</InlineMath>-modules are isomorphic,
              which by the structure theorem happens iff they have the same invariant factors.
            </p>
          </>
        }
      >
        <p>
          Two matrices <InlineMath>{'A, B \\in M_n(F)'}</InlineMath> are similar (over <InlineMath>F</InlineMath>)
          if and only if they have the same rational canonical form, i.e., the same invariant factors.
        </p>
      </Theorem>

      <Example title="Non-Similar Matrices">
        <p>
          Consider <InlineMath>{'A = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}'}</InlineMath> and
          <InlineMath>{'B = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}'}</InlineMath>.
        </p>
        <p className="mt-2">
          Both have <InlineMath>{'\\chi = x^2'}</InlineMath>, but:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>A</InlineMath>: minimal polynomial <InlineMath>x</InlineMath>, invariant factors <InlineMath>{'(x, x)'}</InlineMath></li>
          <li><InlineMath>B</InlineMath>: minimal polynomial <InlineMath>{'x^2'}</InlineMath>, invariant factors <InlineMath>{'(x^2)'}</InlineMath></li>
        </ul>
        <p className="mt-2">
          Different invariant factors, so not similar.
        </p>
      </Example>

      <Callout type="info">
        <strong>Computing Invariant Factors:</strong> To find invariant factors, compute the Smith
        normal form of <InlineMath>{'xI - A'}</InlineMath> over <InlineMath>F[x]</InlineMath>. The
        non-unit diagonal entries (divided appropriately) give the invariant factors.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> The rational canonical form represents a linear operator as a block
        diagonal matrix of companion matrices. The blocks correspond to invariant factors, which
        satisfy <InlineMath>{'f_1 \\mid \\cdots \\mid f_k'}</InlineMath>. The minimal polynomial is
        the largest invariant factor; the characteristic polynomial is their product. Two matrices
        are similar iff they have the same invariant factors.
      </Callout>
    </LessonLayout>
  );
}
