import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <p>
        Reed-Solomon codes are a fundamental class of MDS codes with widespread practical applications.
        They are a special case of BCH codes where the code length equals the field size minus one,
        and the field extension degree is 1. In this section, we explore their construction and properties.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Definition and Construction</h2>

      <Definition title="Reed-Solomon Code">
        <p>
          Let <InlineMath>{`F = \\text{GF}(q)`}</InlineMath> be a field of order <InlineMath>{`q`}</InlineMath>
          (where <InlineMath>{`q`}</InlineMath> is a prime power). A <strong>Reed-Solomon code</strong> is a
          BCH code of length <InlineMath>{`n = q - 1`}</InlineMath> over <InlineMath>{`F`}</InlineMath>.
        </p>
      </Definition>

      <p className="mt-4">
        For the construction of a BCH code of length <InlineMath>{`n`}</InlineMath> over <InlineMath>{`F`}</InlineMath>,
        we need to find a primitive element <InlineMath>{`\\alpha`}</InlineMath> in an extension field{' '}
        <InlineMath>{`K`}</InlineMath> of <InlineMath>{`F`}</InlineMath> with degree <InlineMath>{`[K:F] = r`}</InlineMath>,
        where <InlineMath>{`r`}</InlineMath> is the least positive integer satisfying <InlineMath>{`q^r \\geq n + 1`}</InlineMath>.
      </p>

      <Callout type="info" title="Key Simplification">
        For Reed-Solomon codes with <InlineMath>{`n = q - 1`}</InlineMath>, we have <InlineMath>{`r = 1`}</InlineMath>
        since <InlineMath>{`q^1 = q \\geq q - 1 + 1 = q`}</InlineMath>. Thus <InlineMath>{`\\alpha`}</InlineMath> is
        a primitive element of <InlineMath>{`F`}</InlineMath> itself, and the minimal polynomial of{' '}
        <InlineMath>{`\\alpha^i`}</InlineMath> is simply <InlineMath>{`X - \\alpha^i`}</InlineMath>.
      </Callout>

      <Definition title="Generator Polynomial">
        <p>
          The generator polynomial of the Reed-Solomon code <InlineMath>{`\mathcal{C}`}</InlineMath> with
          designed minimum distance <InlineMath>{`d`}</InlineMath> is:
        </p>
        <MathBlock>{`
          g(X) = (X - \\alpha)(X - \\alpha^2) \\cdots (X - \\alpha^\\{d-1\\})
        `}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\alpha`}</InlineMath> is a primitive element of <InlineMath>{`\\text{GF}(q)`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Reed-Solomon Codes are MDS"
        proof={
          <>
            <p>
              The generator polynomial <InlineMath>{`g(X)`}</InlineMath> has degree <InlineMath>{`d - 1`}</InlineMath>
              since it is the product of <InlineMath>{`d - 1`}</InlineMath> linear factors.
            </p>
            <p className="mt-2">
              Therefore, the dimension of the Reed-Solomon code is:
            </p>
            <MathBlock>{`k = n - (d - 1) = n - d + 1`}</MathBlock>
            <p className="mt-2">
              Rearranging: <InlineMath>{`d = n - k + 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              This is precisely the condition for an MDS code, hence Reed-Solomon codes are MDS.
            </p>
          </>
        }
      >
        <p>A Reed-Solomon code is an MDS code.</p>
      </Theorem>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples of Reed-Solomon Codes</h2>

      <Example title="Reed-Solomon Code over GF(7) with d = 5">
        <p>
          Consider <InlineMath>{`F = \\text{GF}(7)`}</InlineMath> in which 3 is a primitive element
          (since <InlineMath>{`3^1 = 3, 3^2 = 2, 3^3 = 6, 3^4 = 4, 3^5 = 5, 3^6 = 1`}</InlineMath>).
        </p>
        <p className="mt-2">
          The Reed-Solomon code with minimum distance <InlineMath>{`d = 5`}</InlineMath> has generator polynomial:
        </p>
        <MathBlock>{`g(X) = (X - 3)(X - 2)(X - 6)(X - 4)`}</MathBlock>
        <p className="mt-2">Computing step by step:</p>
        <MathBlock>{`
          {'\\begin{aligned}'} g(X) &= (X^2 + 2X + 6)(X^2 - 3X + 3) \\\\ &= X^4 + 6X^3 + 3X^2 + 2X + 4 {'\\end{aligned}'}
        `}</MathBlock>
        <p className="mt-2">
          This code has parameters <InlineMath>{`[6, 2, 5]`}</InlineMath> over <InlineMath>{`\\text{GF}(7)`}</InlineMath>.
        </p>
        <p className="mt-2">The code words are given by:</p>
        <MathBlock>{`(aX + b)(X^4 + 6X^3 + 3X^2 + 2X + 4)`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`a, b \in \\text{GF}(7)`}</InlineMath>. Expanding:
        </p>
        <MathBlock>{`aX^5 + (6a + b)X^4 + (3a + 6b)X^3 + (2a + 3b)X^2 + (4a + 2b)X + 4b`}</MathBlock>
      </Example>

      <Example title="Reed-Solomon Code over GF(7) with d = 6">
        <p>
          Again using <InlineMath>{`F = \\text{GF}(7)`}</InlineMath> with primitive element 3.
        </p>
        <p className="mt-2">
          The Reed-Solomon code with minimum distance <InlineMath>{`d = 6`}</InlineMath> has generator polynomial:
        </p>
        <MathBlock>{`g(X) = (X - 3)(X - 2)(X - 6)(X - 4)(X - 5)`}</MathBlock>
        <p className="mt-2">This factors to:</p>
        <MathBlock>{`g(X) = X^5 + X^4 + X^3 + X^2 + X + 1`}</MathBlock>
        <p className="mt-2">
          This code has parameters <InlineMath>{`[6, 1, 6]`}</InlineMath> over <InlineMath>{`\\text{GF}(7)`}</InlineMath>.
        </p>
        <p className="mt-2">
          The code words are <InlineMath>{`aaaaaa`}</InlineMath> where <InlineMath>{`a \in \\text{GF}(7)`}</InlineMath>.
          This is the repetition code!
        </p>
      </Example>

      <Example title="Reed-Solomon Code over GF(4)">
        <p>
          The polynomial <InlineMath>{`X^2 + X + 1`}</InlineMath> is irreducible over <InlineMath>{`\mathbb{B}`}</InlineMath>
          (the binary field), so:
        </p>
        <MathBlock>{`
          F = \\\mathbb{B}[X] / \\langle X^2 + X + 1 \\rangle
        `}</MathBlock>
        <p className="mt-2">
          is a field of 4 elements. If <InlineMath>{`\\alpha = X + \\langle X^2 + X + 1 \\rangle`}</InlineMath>,
          then <InlineMath>{`\\alpha`}</InlineMath> is a primitive element and:
        </p>
        <MathBlock>{`
          F = \\{{0, 1, \\alpha, \\alpha + 1}\\}}
        `}</MathBlock>
        <p className="mt-2">
          (Note: <InlineMath>{`\\alpha^2 = \\alpha + 1`}</InlineMath> and <InlineMath>{`\\alpha^3 = 1`}</InlineMath>.)
        </p>
        <p className="mt-2">
          The Reed-Solomon code of length 3 with minimum distance <InlineMath>{`d = 2`}</InlineMath>
          has generator polynomial:
        </p>
        <MathBlock>{`
          g(X) = X + \\alpha
        `}</MathBlock>
        <p className="mt-2">The code words are <InlineMath>{`(aX + b)(X + \\alpha)`}</InlineMath>:</p>
        <MathBlock>{`
          aX^2 + (b + a\\alpha)X + \\alpha b
        `}</MathBlock>
        <p className="mt-2">where <InlineMath>{`a, b \\in F`}</InlineMath>. The 16 code words are:</p>
        <div className="font-mono text-sm mt-2 p-4 bg-dark-800 rounded-lg overflow-x-auto">
          000, α10, α²α0, 110, 0α1, αα²1, α²01, 111,<br />
          0α²α, αα1α, α²1α², 10α, 01α², α1α1, α²1α, 1αα²
        </div>
        <p className="mt-2">
          This is a <InlineMath>{`[3, 2, 2]`}</InlineMath> MDS code.
        </p>
      </Example>

      <Example title="Reed-Solomon Code over GF(3)">
        <p>
          Let <InlineMath>{`F = \\text{GF}(3) = \\\{0, 1, 2\\}\}`}</InlineMath>. Then 2 is a primitive
          element (since <InlineMath>{`2^1 = 2, 2^2 = 1`}</InlineMath>).
        </p>
        <p className="mt-2">
          The Reed-Solomon code with minimum distance 2 has generator polynomial:
        </p>
        <MathBlock>{`g(X) = X - 2 = X + 1`}</MathBlock>
        <p className="mt-2">
          The code words are <InlineMath>{`(aX + b)(X + 1)`}</InlineMath> where <InlineMath>{`a, b \\in F`}</InlineMath>:
        </p>
        <div className="font-mono text-sm mt-2 p-4 bg-dark-800 rounded-lg">
          000, 110, 220, 011, 121, 201, 022, 102, 212
        </div>
        <p className="mt-2">
          This is a <InlineMath>{`[2, 1, 2]`}</InlineMath> MDS code (though the notation shows length 3,
          but we can take the first two positions as message).
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of Reed-Solomon Codes</h2>

      <Callout type="success" title="Key Properties">
        <ul className="list-disc list-inside space-y-2">
          <li>Reed-Solomon codes are <strong>cyclic</strong> codes</li>
          <li>They are <strong>MDS</strong> codes, achieving the Singleton bound with equality</li>
          <li>They have <strong>maximum error correction capability</strong> for their redundancy</li>
          <li>A <InlineMath>{`[q-1, k]`}</InlineMath> RS code can correct up to <InlineMath>{`\\lfloor (q-1-k)/2 \\rfloor`}</InlineMath> errors</li>
        </ul>
      </Callout>

      <Callout type="info" title="Practical Applications">
        <p>Reed-Solomon codes are widely used in:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>CDs, DVDs, and Blu-ray discs</li>
          <li>QR codes and bar codes</li>
          <li>Digital television (DVB)</li>
          <li>Space communication (Voyager, Mars rovers)</li>
          <li>Data storage systems (RAID 6)</li>
          <li>Wireless communication standards</li>
        </ul>
      </Callout>

      <Theorem
        title="Error Correction Capability"
        proof={
          <>
            <p>
              Since a Reed-Solomon code is MDS with minimum distance <InlineMath>{`d = n - k + 1`}</InlineMath>,
              it can correct up to:
            </p>
            <MathBlock>{`
              t = \\left\\lfloor \\frac{'{d-1}{2}'} \\right\\rfloor = \\left\\lfloor \\frac{'{n-k}{2}'} \\right\\rfloor
            `}</MathBlock>
            <p className="mt-2">
              symbol errors. For a code with <InlineMath>{`n - k`}</InlineMath> redundant symbols,
              this is the maximum possible error correction capability.
            </p>
          </>
        }
      >
        <p>
          An <InlineMath>{`[n, k]`}</InlineMath> Reed-Solomon code over <InlineMath>{`\\text{GF}(q)`}</InlineMath> can
          correct up to <InlineMath>{`t = \\lfloor (n-k)/2 \\rfloor`}</InlineMath> symbol errors.
        </p>
      </Theorem>
    </LessonLayout>
  );
}
