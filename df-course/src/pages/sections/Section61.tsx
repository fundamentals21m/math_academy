import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2>Jordan Canonical Form</h2>

      <p>
        The Jordan canonical form provides another canonical matrix representation, closely related
        to the rational canonical form. It uses elementary divisors (prime power factors) instead
        of invariant factors, making it particularly useful when the characteristic polynomial
        splits completely.
      </p>

      <h3>Jordan Blocks</h3>

      <Definition title="Jordan Block">
        <p>
          A <strong>Jordan block</strong> <InlineMath>{'J_k(\\lambda)'}</InlineMath> of size <InlineMath>k</InlineMath>
          for eigenvalue <InlineMath>{'\\lambda'}</InlineMath> is the <InlineMath>{'k \\times k'}</InlineMath> matrix:
        </p>
        <MathBlock>
          {'J_k(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 & \\cdots & 0 \\\\ 0 & \\lambda & 1 & \\cdots & 0 \\\\ \\vdots & & \\ddots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & \\lambda & 1 \\\\ 0 & 0 & \\cdots & 0 & \\lambda \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          with <InlineMath>{'\\lambda'}</InlineMath> on the diagonal and 1s on the superdiagonal.
        </p>
      </Definition>

      <Theorem title="Jordan Block Properties"
        proof={
          <>
            <p>
              Direct computation: <InlineMath>{'(J_k(\\lambda) - \\lambda I)^i'}</InlineMath> has 1s on the
              <InlineMath>i</InlineMath>-th superdiagonal and 0s elsewhere, so
              <InlineMath>{'(J_k(\\lambda) - \\lambda I)^k = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For <InlineMath>{'J = J_k(\\lambda)'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Characteristic polynomial: <InlineMath>{'\\chi_J(x) = (x - \\lambda)^k'}</InlineMath></li>
          <li>Minimal polynomial: <InlineMath>{'\\mu_J(x) = (x - \\lambda)^k'}</InlineMath></li>
          <li><InlineMath>{'\\ker(J - \\lambda I) = \\text{span}(e_1)'}</InlineMath> (1-dimensional)</li>
          <li><InlineMath>J</InlineMath> is the companion matrix of <InlineMath>{'(x - \\lambda)^k'}</InlineMath> (similar)</li>
        </ul>
      </Theorem>

      <h3>The Jordan Canonical Form</h3>

      <Theorem title="Jordan Canonical Form"
        proof={
          <>
            <p>
              Apply the structure theorem with elementary divisors. Each factor <InlineMath>{'(x - \\lambda)^k'}</InlineMath>
              contributes an <InlineMath>F[x]</InlineMath>-module isomorphic to <InlineMath>{'F[x]/(x - \\lambda)^k'}</InlineMath>.
            </p>
            <p className="mt-2">
              The action of <InlineMath>x</InlineMath> on this module corresponds to <InlineMath>{'J_k(\\lambda)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>F</InlineMath> be algebraically closed (e.g., <InlineMath>{'F = \\mathbb{C}'}</InlineMath>).
          Every matrix <InlineMath>{'A \\in M_n(F)'}</InlineMath> is similar to a unique (up to block ordering)
          <strong>Jordan canonical form</strong>:
        </p>
        <MathBlock>
          {'J = \\begin{pmatrix} J_{k_1}(\\lambda_1) & & \\\\ & J_{k_2}(\\lambda_2) & \\\\ & & \\ddots \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          where the <InlineMath>{'(x - \\lambda_i)^{k_i}'}</InlineMath> are the elementary divisors of <InlineMath>A</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Algebraic Closure Required:</strong> Jordan form exists over <InlineMath>F</InlineMath>
        iff the characteristic polynomial splits completely over <InlineMath>F</InlineMath>. Over
        <InlineMath>{'\\mathbb{R}'}</InlineMath>, matrices with complex eigenvalues don't have Jordan form;
        use rational canonical form instead.
      </Callout>

      <Example title="Finding Jordan Form">
        <p>
          Find the Jordan form of <InlineMath>{'A = \\begin{pmatrix} 5 & 4 & 2 & 1 \\\\ 0 & 1 & -1 & -1 \\\\ -1 & -1 & 3 & 0 \\\\ 1 & 1 & -1 & 2 \\end{pmatrix}'}</InlineMath>
        </p>
        <p className="mt-2">
          Suppose <InlineMath>{'\\chi_A = (x - 2)^2(x - 3)^2'}</InlineMath>.
        </p>
        <p className="mt-2">
          To find Jordan blocks, compute <InlineMath>{'\\dim \\ker(A - \\lambda I)'}</InlineMath> and
          <InlineMath>{'\\dim \\ker(A - \\lambda I)^2'}</InlineMath> for each eigenvalue.
        </p>
        <p className="mt-2">
          If <InlineMath>{'\\dim \\ker(A - 2I) = 1'}</InlineMath> and <InlineMath>{'\\dim \\ker(A - 2I)^2 = 2'}</InlineMath>:
          one Jordan block <InlineMath>{'J_2(2)'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{'\\dim \\ker(A - 3I) = 2'}</InlineMath>: two blocks <InlineMath>{'J_1(3), J_1(3)'}</InlineMath>.
        </p>
        <MathBlock>
          {'J = \\begin{pmatrix} 2 & 1 & 0 & 0 \\\\ 0 & 2 & 0 & 0 \\\\ 0 & 0 & 3 & 0 \\\\ 0 & 0 & 0 & 3 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      <h3>Relationship to Rational Canonical Form</h3>

      <Theorem title="Invariant vs Elementary Divisors"
        proof={
          <>
            <p>
              Factor each invariant factor into prime powers (over the algebraic closure).
              Elementary divisors are the prime power factors. The CRT shows
              <InlineMath>{'F[x]/(f) \\cong \\prod F[x]/(p_i^{e_i})'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The invariant factors and elementary divisors determine each other:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Elementary divisors are obtained by factoring invariant factors into prime powers</li>
          <li>Invariant factors are recovered: <InlineMath>{'f_k'}</InlineMath> is the product of the highest power
            of each prime appearing, <InlineMath>{'f_{k-1}'}</InlineMath> is the next highest, etc.</li>
        </ul>
      </Theorem>

      <Example title="Converting Between Forms">
        <p>
          If elementary divisors are <InlineMath>{'(x-1)^2, (x-1), (x-2)^3, (x-2)'}</InlineMath>:
        </p>
        <p className="mt-2">
          For each prime, list powers: <InlineMath>{'(x-1): 2, 1'}</InlineMath> and <InlineMath>{'(x-2): 3, 1'}</InlineMath>.
        </p>
        <p className="mt-2">
          Invariant factors (matching highest to highest, etc.):
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'f_2 = (x-1)^2 (x-2)^3'}</InlineMath></li>
          <li><InlineMath>{'f_1 = (x-1)(x-2)'}</InlineMath></li>
        </ul>
      </Example>

      <h3>Computing Jordan Bases</h3>

      <Definition title="Generalized Eigenspace">
        <p>
          The <strong>generalized eigenspace</strong> for eigenvalue <InlineMath>{'\\lambda'}</InlineMath> is:
        </p>
        <MathBlock>
          {'E_\\lambda = \\ker(T - \\lambda I)^n = \\bigcup_{k=1}^{\\infty} \\ker(T - \\lambda I)^k'}
        </MathBlock>
        <p className="mt-2">
          (The union stabilizes at <InlineMath>{'k = n = \\dim V'}</InlineMath>.)
        </p>
      </Definition>

      <Theorem title="Generalized Eigenspace Decomposition"
        proof={
          <>
            <p>
              This follows from the elementary divisor form: components with the same eigenvalue
              combine to give the generalized eigenspace.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\chi_T = (x - \\lambda_1)^{n_1} \\cdots (x - \\lambda_r)^{n_r}'}</InlineMath>
          (distinct <InlineMath>{'\\lambda_i'}</InlineMath>), then:
        </p>
        <MathBlock>
          {'V = E_{\\lambda_1} \\oplus E_{\\lambda_2} \\oplus \\cdots \\oplus E_{\\lambda_r}'}
        </MathBlock>
        <p className="mt-2">
          with <InlineMath>{'\\dim E_{\\lambda_i} = n_i'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem title="Finding Jordan Blocks"
        proof={
          <>
            <p>
              Each Jordan block of size <InlineMath>k</InlineMath> contributes 1 to <InlineMath>{'\\dim \\ker(A-\\lambda I)^i'}</InlineMath>
              for <InlineMath>{'i \\geq k'}</InlineMath>. Count blocks by taking differences.
            </p>
          </>
        }
      >
        <p>
          The number of Jordan blocks of size <InlineMath>{'\\geq k'}</InlineMath> for eigenvalue <InlineMath>{'\\lambda'}</InlineMath> is:
        </p>
        <MathBlock>
          {'\\dim \\ker(A - \\lambda I)^k - \\dim \\ker(A - \\lambda I)^{k-1}'}
        </MathBlock>
      </Theorem>

      <h3>Applications</h3>

      <Example title="Powers of Matrices">
        <p>
          Jordan form makes computing <InlineMath>{'A^n'}</InlineMath> easy. If <InlineMath>{'A = PJP^{-1}'}</InlineMath>:
        </p>
        <MathBlock>
          {'A^n = PJ^nP^{-1}'}
        </MathBlock>
        <p className="mt-2">
          For Jordan blocks: <InlineMath>{'J_k(\\lambda)^n = \\sum_{i=0}^{k-1} \\binom{n}{i} \\lambda^{n-i} N^i'}</InlineMath>
          where <InlineMath>N</InlineMath> is the nilpotent part.
        </p>
      </Example>

      <Example title="Matrix Exponential">
        <p>
          For <InlineMath>{'e^A = Pe^JP^{-1}'}</InlineMath>, and for a Jordan block:
        </p>
        <MathBlock>
          {'e^{J_k(\\lambda)} = e^\\lambda \\begin{pmatrix} 1 & 1 & 1/2! & \\cdots \\\\ 0 & 1 & 1 & \\cdots \\\\ \\vdots & & \\ddots & \\\\ 0 & 0 & \\cdots & 1 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      <Callout type="success">
        <strong>Summary:</strong> The Jordan canonical form uses Jordan blocks <InlineMath>{'J_k(\\lambda)'}</InlineMath>
        corresponding to elementary divisors <InlineMath>{'(x - \\lambda)^k'}</InlineMath>. It exists when
        the characteristic polynomial splits. The number and sizes of Jordan blocks for each eigenvalue
        are determined by the dimensions of <InlineMath>{'\\ker(A - \\lambda I)^k'}</InlineMath>. Jordan
        form simplifies matrix computations like powers and exponentials.
      </Callout>
    </LessonLayout>
  );
}
