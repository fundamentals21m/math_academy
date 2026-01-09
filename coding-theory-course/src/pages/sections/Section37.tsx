import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <p>
        For non-binary codes over larger alphabets, the definition of automorphism needs to be
        extended to include not just permutations of coordinates, but also scalar multiplications
        of individual coordinates. This leads to the concept of monomial matrices.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Monomial Matrices</h2>

      <Definition title="Monomial Matrix">
        <p>
          A <strong>monomial matrix</strong> over a field <InlineMath>{`F`}</InlineMath> is a square matrix
          with exactly one non-zero entry in every row and in every column.
        </p>
      </Definition>

      <Example title="Monomial vs Non-monomial">
        <p>The matrix:</p>
        <MathBlock>{`
          \\begin\\{pmatrix\\} 0 & 2 & 0 \\\\ 3 & 0 & 0 \\\\ 0 & 0 & 1 \\end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">is a monomial matrix of order 3.</p>
        <p className="mt-2">The matrix:</p>
        <MathBlock>{`
          \\begin\\{pmatrix\\} 0 & 2 & 0 \\\\ 3 & 0 & 0 \\\\ 1 & 0 & 0 \\end\\{pmatrix\\}
        `}</MathBlock>
        <p className="mt-2">is <strong>not</strong> a monomial matrix (first column has two non-zero entries).</p>
      </Example>

      <Callout type="info" title="Structure of Monomial Matrices">
        <p>
          A monomial matrix over <InlineMath>{`\\mathbb{B}`}</InlineMath> (the binary field) is just a
          permutation matrix.
        </p>
        <p className="mt-2">
          If <InlineMath>{`\mathbf{M}`}</InlineMath> is a monomial matrix of order <InlineMath>{`n`}</InlineMath>
          over a field <InlineMath>{`F`}</InlineMath> with <InlineMath>{`d_i`}</InlineMath> being the non-zero
          entry in the <InlineMath>{`i`}</InlineMath>th row, then:
        </p>
        <MathBlock>{`
          \\mathbf{M} = \\mathbf{DP}
        `}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\mathbf{D} = \\text{diag}(d_1, d_2, \ldots, d_n)`}</InlineMath> and{' '}
          <InlineMath>{`\mathbf{P}`}</InlineMath> is the permutation matrix obtained from{' '}
          <InlineMath>{`\mathbf{M}`}</InlineMath> by replacing every non-zero entry by 1.
        </p>
      </Callout>

      <Theorem
        title="Monomial Group"
        proof={
          <>
            <p>
              Every monomial matrix is invertible (its determinant is the product of all non-zero
              entries, times <InlineMath>{`\\pm 1`}</InlineMath>).
            </p>
            <p className="mt-2">
              If <InlineMath>{`\mathbf{M}_1 = \mathbf{D}_1\mathbf{P}_1`}</InlineMath> and{' '}
              <InlineMath>{`\mathbf{M}_2 = \mathbf{D}_2\mathbf{P}_2`}</InlineMath> are monomial, then:
            </p>
            <MathBlock>{`
              \\mathbf{M}_1\\mathbf{M}_2 = \\mathbf{D}_1\\mathbf{P}_1\\mathbf{D}_2\\mathbf{P}_2 = \\mathbf{D}_1(\\mathbf{P}_1\\mathbf{D}_2\\mathbf{P}_1^\\{-1\\})(\\mathbf{P}_1\\mathbf{P}_2)
            `}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{`\mathbf{P}_1\mathbf{D}_2\mathbf{P}_1^\\{-1\\}`}</InlineMath> is diagonal
              and <InlineMath>{`\mathbf{P}_1\mathbf{P}_2`}</InlineMath> is a permutation matrix,{' '}
              <InlineMath>{`\mathbf{M}_1\mathbf{M}_2`}</InlineMath> is monomial.
            </p>
          </>
        }
      >
        <p>
          Every monomial matrix of order <InlineMath>{`n`}</InlineMath> over <InlineMath>{`\\text{GF}(q)`}</InlineMath>
          is invertible, and the set of all monomial matrices of order <InlineMath>{`n`}</InlineMath> forms
          a group under multiplication called the <strong>monomial group</strong> of degree{' '}
          <InlineMath>{`n`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Automorphisms of Non-Binary Codes</h2>

      <Definition title="Automorphism Group of Non-Binary Code">
        <p>
          The <strong>automorphism group</strong> <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath>
          of a linear code <InlineMath>{`\\mathcal{C}`}</InlineMath> over <InlineMath>{`\\text{GF}(q)`}</InlineMath>
          (<InlineMath>{`q`}</InlineMath> a prime) is the set of all monomial matrices{' '}
          <InlineMath>{`\mathbf{M}`}</InlineMath> over <InlineMath>{`\\text{GF}(q)`}</InlineMath> such that{' '}
          <InlineMath>{`\mathbf{cM} \in \\mathcal{C}`}</InlineMath> for all{' '}
          <InlineMath>{`c \in \\mathcal{C}`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Order of Automorphism Group for 1-Dimensional Codes"
        proof={
          <>
            <p>
              Let <InlineMath>{`\mathbf{x} = (x_1, x_2, \ldots, x_n)`}</InlineMath> be a basis vector of{' '}
              <InlineMath>{`\\mathcal{C}`}</InlineMath>. If <InlineMath>{`\mathbf{y}`}</InlineMath> also generates{' '}
              <InlineMath>{`\\mathcal{C}`}</InlineMath>, then <InlineMath>{`\mathbf{y}`}</InlineMath> is a multiple
              of <InlineMath>{`\mathbf{x}`}</InlineMath>, so <InlineMath>{`y_i = 0`}</InlineMath> iff{' '}
              <InlineMath>{`x_i = 0`}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{`\mathbf{M} = \mathbf{PD}`}</InlineMath> where <InlineMath>{`\mathbf{P}`}</InlineMath>
              corresponds to permutation <InlineMath>{`\\sigma`}</InlineMath> and{' '}
              <InlineMath>{`\mathbf{D} = \\text{diag}(d_1, \ldots, d_n)`}</InlineMath> with all{' '}
              <InlineMath>{`d_i \\neq 0`}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`\mathbf{xPD} = (d_1 x_\\{\sigma(1)\\}, \ldots, d_n x_\\{\sigma(n)\\})`}</InlineMath>.
              For <InlineMath>{`\mathbf{xPD} = a\mathbf{x}`}</InlineMath> for some <InlineMath>{`a \\neq 0`}</InlineMath>:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><InlineMath>{`\\sigma`}</InlineMath> must permute the non-zero positions among themselves</li>
              <li><InlineMath>{`d_i x_\\{\sigma(i)\\} = ax_i`}</InlineMath> for some <InlineMath>{`a \\neq 0`}</InlineMath></li>
            </ul>
            <p className="mt-2">
              There are <InlineMath>{`m!`}</InlineMath> choices for <InlineMath>{`\\sigma`}</InlineMath>,{' '}
              <InlineMath>{`q-1`}</InlineMath> choices for <InlineMath>{`a`}</InlineMath>, and{' '}
              <InlineMath>{`(q-1)^\\{n-m\\}`}</InlineMath> choices for the diagonal entries corresponding
              to zero positions. Hence the order is <InlineMath>{`(q-1)^\\{n-m+1\\} \cdot m!`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{`\\mathcal{C}`}</InlineMath> is a linear <InlineMath>{`[n, 1, -]`}</InlineMath> code
          over <InlineMath>{`F = \\text{GF}(q)`}</InlineMath> (<InlineMath>{`q`}</InlineMath> prime), then the
          order of <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath> is:
        </p>
        <MathBlock>{`
          (q-1)^\\{n-m+1\\} \\cdot m!
        `}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`m`}</InlineMath> is the number of non-zero components in a basis vector of{' '}
          <InlineMath>{`\\mathcal{C}`}</InlineMath>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples</h2>

      <Example title="[3,1,2] Ternary Code">
        <p>For the ternary code:</p>
        <MathBlock>{`
          \\\mathcal{C} = \\{{000, 110, 220}\\}}
        `}</MathBlock>
        <p className="mt-2">
          The basis vector <InlineMath>{`(1, 1, 0)`}</InlineMath> has <InlineMath>{`m = 2`}</InlineMath> non-zero
          components. The automorphism group has order:
        </p>
        <MathBlock>{`
          (3-1)^\\{3-2+1\\} \\cdot 2! = 2^2 \\cdot 2 = 8
        `}</MathBlock>
        <p className="mt-2">The elements are:</p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = \\left\\{{'} \\mathbf{I}, \\begin\\{pmatrix\\} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & d \\end\\{pmatrix\\}, 2\\mathbf{I}, 2\\begin\\{pmatrix\\} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & d \\end\\{pmatrix\\} : d = 1, 2 \\right\\{}'}
        `}</MathBlock>
      </Example>

      <Example title="[3,1,3] Ternary Code">
        <p>For the ternary code:</p>
        <MathBlock>{`
          \\\mathcal{C} = \\{{000, 111, 222}\\}}
        `}</MathBlock>
        <p className="mt-2">
          The basis vector <InlineMath>{`(1, 1, 1)`}</InlineMath> has <InlineMath>{`m = 3`}</InlineMath> non-zero
          components. Every element of <InlineMath>{`S_3`}</InlineMath> leaves this vector invariant
          (up to scalar multiple).
        </p>
        <p className="mt-2">The order of <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath> is:</p>
        <MathBlock>{`
          (3-1)^\\{3-3+1\\} \\cdot 3! = 2 \\cdot 6 = 12
        `}</MathBlock>
      </Example>

      <Example title="[3,1,3] Code over GF(5)">
        <p>Consider the <InlineMath>{`[3, 1, 3]`}</InlineMath> code over <InlineMath>{`\\text{GF}(5)`}</InlineMath> generated by <InlineMath>{`(1, 2, 3)`}</InlineMath>.</p>
        <p className="mt-2">
          Let <InlineMath>{`\mathbf{P}`}</InlineMath> be a permutation matrix with corresponding permutation{' '}
          <InlineMath>{`\\sigma`}</InlineMath>, and <InlineMath>{`\mathbf{D} = \\text{diag}(d_1, d_2, d_3)`}</InlineMath>
          with <InlineMath>{`d_1 d_2 d_3 \\neq 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          For <InlineMath>{`(1, 2, 3)\mathbf{PD} = a(1, 2, 3)`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`d_1 = a \cdot \sigma(1)^\\{-1\\}`}</InlineMath></li>
          <li><InlineMath>{`d_2 = 2a \cdot \sigma(2)^\\{-1\\}`}</InlineMath></li>
          <li><InlineMath>{`d_3 = 3a \cdot \sigma(3)^\\{-1\\}`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          For each of the 6 permutations <InlineMath>{`\\sigma`}</InlineMath> and 4 choices of{' '}
          <InlineMath>{`a \\neq 0`}</InlineMath>, we get a valid automorphism.
          The order is <InlineMath>{`6 \\cdot 4 = 24`}</InlineMath>.
        </p>
      </Example>

      <Example title="[3,2,-] Code over GF(5)">
        <p>
          Consider the linear code of length 3 over <InlineMath>{`\\text{GF}(5)`}</InlineMath> generated
          by <InlineMath>{`(1, 0, 2)`}</InlineMath> and <InlineMath>{`(2, 0, 1)`}</InlineMath>.
        </p>
        <p className="mt-2">
          These are linearly independent, so <InlineMath>{`\\mathcal{C}`}</InlineMath> has dimension 2.
          The code has <InlineMath>{`5^2 = 25`}</InlineMath> elements.
        </p>
        <p className="mt-2">
          Analysis shows that a monomial matrix with non-zero <InlineMath>{`(1, 2)`}</InlineMath> or{' '}
          <InlineMath>{`(3, 2)`}</InlineMath> entry cannot be an automorphism. Hence:
        </p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = \\left\\{{'} \\begin\\{pmatrix\\} a & 0 & 0 \\\\ 0 & b & 0 \\\\ 0 & 0 & c \\end\\{pmatrix\\}, \\begin\\{pmatrix\\} 0 & 0 & a \\\\ 0 & b & 0 \\\\ c & 0 & 0 \\end\\{pmatrix\\} : abc \\neq 0 \\right\\{}'}
        `}</MathBlock>
        <p className="mt-2">
          The order is <InlineMath>{`2 \\cdot (q-1)^3 = 2 \\cdot 4^3 = 128`}</InlineMath>.
        </p>
      </Example>

      <Callout type="note" title="Relationship to Binary Case">
        Every monomial matrix over <InlineMath>{`\\mathbb{B}`}</InlineMath> is a permutation matrix, so
        the definition of <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath> for binary codes as
        permutation groups is consistent with this more general definition.
      </Callout>
    </LessonLayout>
  );
}
