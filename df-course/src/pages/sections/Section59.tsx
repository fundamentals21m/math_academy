import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2>Modules over PIDs: Basic Theory</h2>

      <p>
        The structure theory of finitely generated modules over a Principal Ideal Domain (PID)
        is one of the most beautiful results in algebra. It simultaneously generalizes the
        classification of finite abelian groups and the theory of canonical forms for matrices.
      </p>

      <h3>Finitely Generated Modules over PIDs</h3>

      <Theorem title="Structure Theorem (Invariant Factor Form)"
        proof={
          <>
            <p>
              The proof uses the fact that submodules of free modules over PIDs are free.
              Start with a surjection <InlineMath>{'R^n \\to M'}</InlineMath>; the kernel is free.
              Use row and column operations (Smith normal form) to diagonalize the presentation matrix.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>R</InlineMath> be a PID and <InlineMath>M</InlineMath> a finitely generated <InlineMath>R</InlineMath>-module.
          Then:
        </p>
        <MathBlock>
          {'M \\cong R^r \\oplus R/(a_1) \\oplus R/(a_2) \\oplus \\cdots \\oplus R/(a_k)'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>r \\geq 0</InlineMath> and <InlineMath>{'a_1 \\mid a_2 \\mid \\cdots \\mid a_k'}</InlineMath>
          are nonzero non-units. The <InlineMath>{'a_i'}</InlineMath> are called <strong>invariant factors</strong>.
        </p>
      </Theorem>

      <Definition title="Torsion and Torsion-Free">
        <p>
          For an <InlineMath>R</InlineMath>-module <InlineMath>M</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'m \\in M'}</InlineMath> is a <strong>torsion element</strong> if <InlineMath>{'rm = 0'}</InlineMath> for some <InlineMath>{'r \\neq 0'}</InlineMath></li>
          <li>The <strong>torsion submodule</strong> is <InlineMath>{'T(M) = \\{m \\in M : rm = 0 \\text{ for some } r \\neq 0\\}'}</InlineMath></li>
          <li><InlineMath>M</InlineMath> is <strong>torsion-free</strong> if <InlineMath>{'T(M) = 0'}</InlineMath></li>
          <li><InlineMath>M</InlineMath> is a <strong>torsion module</strong> if <InlineMath>{'T(M) = M'}</InlineMath></li>
        </ul>
      </Definition>

      <Theorem title="Decomposition into Torsion and Free Parts"
        proof={
          <>
            <p>
              The torsion submodule <InlineMath>{'T(M)'}</InlineMath> corresponds to the terms <InlineMath>{'R/(a_i)'}</InlineMath>,
              and <InlineMath>{'M/T(M) \\cong R^r'}</InlineMath> is free.
            </p>
          </>
        }
      >
        <p>
          For a finitely generated module <InlineMath>M</InlineMath> over a PID:
        </p>
        <MathBlock>
          {'M \\cong T(M) \\oplus R^r'}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{'T(M)'}</InlineMath> is the torsion submodule and <InlineMath>r</InlineMath> is the <strong>rank</strong> of <InlineMath>M</InlineMath>.
        </p>
      </Theorem>

      <h3>The Elementary Divisor Form</h3>

      <Theorem title="Structure Theorem (Elementary Divisor Form)"
        proof={
          <>
            <p>
              Factor each invariant factor <InlineMath>{'a_i'}</InlineMath> into prime powers.
              Use the Chinese Remainder Theorem: <InlineMath>{'R/(p_1^{e_1} \\cdots p_k^{e_k}) \\cong R/(p_1^{e_1}) \\times \\cdots \\times R/(p_k^{e_k})'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Alternatively, <InlineMath>M</InlineMath> can be written:
        </p>
        <MathBlock>
          {'M \\cong R^r \\oplus R/(p_1^{e_1}) \\oplus R/(p_2^{e_2}) \\oplus \\cdots \\oplus R/(p_m^{e_m})'}
        </MathBlock>
        <p className="mt-2">
          where the <InlineMath>{'p_i'}</InlineMath> are (not necessarily distinct) primes of <InlineMath>R</InlineMath>.
          The prime powers <InlineMath>{'p_i^{e_i}'}</InlineMath> are called <strong>elementary divisors</strong>.
        </p>
      </Theorem>

      <Example title="Finite Abelian Groups">
        <p>
          For <InlineMath>{'R = \\mathbb{Z}'}</InlineMath>, the structure theorem classifies finitely generated
          abelian groups:
        </p>
        <MathBlock>
          {'G \\cong \\mathbb{Z}^r \\oplus \\mathbb{Z}/d_1\\mathbb{Z} \\oplus \\cdots \\oplus \\mathbb{Z}/d_k\\mathbb{Z}'}
        </MathBlock>
        <p className="mt-2">
          with <InlineMath>{'d_1 \\mid d_2 \\mid \\cdots \\mid d_k'}</InlineMath>.
        </p>
        <p className="mt-2">
          Or in elementary divisor form:
        </p>
        <MathBlock>
          {'G \\cong \\mathbb{Z}^r \\oplus \\mathbb{Z}/p_1^{e_1}\\mathbb{Z} \\oplus \\cdots \\oplus \\mathbb{Z}/p_m^{e_m}\\mathbb{Z}'}
        </MathBlock>
      </Example>

      <Example title="Groups of Order 12">
        <p>
          Abelian groups of order 12 (so <InlineMath>{'r = 0'}</InlineMath> and product of elementary divisors = 12):
        </p>
        <p className="mt-2">
          <strong>Invariant factor form:</strong>
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}/12\\mathbb{Z}'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}/2\\mathbb{Z} \\oplus \\mathbb{Z}/6\\mathbb{Z}'}</InlineMath></li>
        </ul>
        <p className="mt-2">
          <strong>Elementary divisor form:</strong>
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'\\mathbb{Z}/4\\mathbb{Z} \\oplus \\mathbb{Z}/3\\mathbb{Z}'}</InlineMath></li>
          <li><InlineMath>{'\\mathbb{Z}/2\\mathbb{Z} \\oplus \\mathbb{Z}/2\\mathbb{Z} \\oplus \\mathbb{Z}/3\\mathbb{Z}'}</InlineMath></li>
        </ul>
      </Example>

      <h3>Uniqueness</h3>

      <Theorem title="Uniqueness of Invariant Factors"
        proof={
          <>
            <p>
              The invariant factors can be recovered from the module structure:
              <InlineMath>{'a_k'}</InlineMath> is the annihilator of <InlineMath>M</InlineMath>,
              <InlineMath>{'a_{k-1}'}</InlineMath> relates to <InlineMath>{'a_k M'}</InlineMath>, etc.
            </p>
            <p className="mt-2">
              Alternatively, use the Fitting ideals or Smith normal form uniqueness.
            </p>
          </>
        }
      >
        <p>
          The invariant factors <InlineMath>{'a_1, \\ldots, a_k'}</InlineMath> (up to units) and the rank <InlineMath>r</InlineMath>
          are uniquely determined by <InlineMath>M</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, the elementary divisors (up to units and ordering) are uniquely determined.
        </p>
      </Theorem>

      <h3>Computing the Structure</h3>

      <Definition title="Smith Normal Form">
        <p>
          For a matrix <InlineMath>A</InlineMath> with entries in a PID <InlineMath>R</InlineMath>, the
          <strong>Smith normal form</strong> is a diagonal matrix <InlineMath>D</InlineMath> such that
          <InlineMath>{'D = UAV'}</InlineMath> for invertible matrices <InlineMath>{'U, V'}</InlineMath>, with
          diagonal entries <InlineMath>{'d_1, d_2, \\ldots'}</InlineMath> satisfying <InlineMath>{'d_1 \\mid d_2 \\mid \\cdots'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Structure from Presentation"
        proof={
          <>
            <p>
              The module <InlineMath>M</InlineMath> with presentation <InlineMath>{'R^m \\xrightarrow{A} R^n \\to M \\to 0'}</InlineMath>
              satisfies <InlineMath>{'M \\cong R^n / \\text{Im}(A)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Computing Smith normal form <InlineMath>{'D = UAV'}</InlineMath> gives
              <InlineMath>{'M \\cong R^n / \\text{Im}(D) = R/(d_1) \\oplus \\cdots \\oplus R/(d_r) \\oplus R^{n-r}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>M</InlineMath> is presented as <InlineMath>{'\\text{coker}(A: R^m \\to R^n)'}</InlineMath>,
          the invariant factors of <InlineMath>M</InlineMath> are the non-unit diagonal entries of the Smith normal form of <InlineMath>A</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing Structure">
        <p>
          Find the structure of the <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module presented by:
        </p>
        <MathBlock>
          {'A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 6 \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          Row operations: <InlineMath>{'R_2 \\to R_2 - R_1'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          Swap rows, then <InlineMath>{'R_2 \\to R_2 - 2R_1'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          Column operation <InlineMath>{'C_2 \\to C_2 - 2C_1'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          Smith form is <InlineMath>{'\\text{diag}(1, 0)'}</InlineMath>. The module is
          <InlineMath>{'\\mathbb{Z}^2/(1, 0) \\cong \\mathbb{Z}'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info">
        <strong>Application to Matrices:</strong> For <InlineMath>{'R = F[x]'}</InlineMath> and
        <InlineMath>{'M = V'}</InlineMath> viewed as an <InlineMath>F[x]</InlineMath>-module via a linear
        operator <InlineMath>T</InlineMath> (where <InlineMath>x</InlineMath> acts as <InlineMath>T</InlineMath>),
        the structure theorem yields the rational canonical form. This is explored in the next sections.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Every finitely generated module over a PID decomposes as a free
        part plus cyclic torsion components. The invariant factors <InlineMath>{'a_1 \\mid a_2 \\mid \\cdots'}</InlineMath>
        or elementary divisors (prime power factors) uniquely characterize the module. The Smith
        normal form algorithm computes this decomposition from a presentation matrix.
      </Callout>
    </LessonLayout>
  );
}
