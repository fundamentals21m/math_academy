import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <p>
        The automorphism group of a code captures its internal symmetries. Understanding these
        symmetries is important for both theoretical analysis and practical applications of codes.
        In this section, we study the automorphism group of binary codes.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Definition of Automorphisms</h2>

      <Definition title="Automorphism of a Binary Code">
        <p>
          Let <InlineMath>{`\\mathcal{C}`}</InlineMath> be a binary code of length <InlineMath>{`n`}</InlineMath>.
          If <InlineMath>{`\\sigma`}</InlineMath> is a permutation of the set <InlineMath>{`S = \\\{1, 2, \ldots, n\\}\}`}</InlineMath>,
          then <InlineMath>{`\\mathcal{C}' = \\\{\sigma(c) : c \in \mathcal{C\\}'}\}`}</InlineMath> is a
          code equivalent to <InlineMath>{`\\mathcal{C}`}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{`\\mathcal{C}' = \\mathcal{C}`}</InlineMath>, then <InlineMath>{`\\sigma`}</InlineMath>
          is called an <strong>automorphism</strong> of the code <InlineMath>{`\\mathcal{C}`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Automorphism Group">
        <p>
          Let <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath> denote the set of all automorphisms
          of <InlineMath>{`\\mathcal{C}`}</InlineMath>. If <InlineMath>{`\sigma, \tau \in \\text{Aut}(\\mathcal{C})`}</InlineMath>,
          then so is <InlineMath>{`\\sigma\\tau`}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{`S_n`}</InlineMath> (the set of all permutations of <InlineMath>{`S`}</InlineMath>) is
          a finite group, it follows that <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath> is
          a subgroup of <InlineMath>{`S_n`}</InlineMath>.
        </p>
        <p className="mt-2">
          The subgroup <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath> of <InlineMath>{`S_n`}</InlineMath>
          is called the <strong>automorphism group</strong> of the code <InlineMath>{`\\mathcal{C}`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Matrix Representation">
        <p>
          To every permutation <InlineMath>{`\\sigma`}</InlineMath> of <InlineMath>{`S`}</InlineMath> corresponds
          a permutation matrix <InlineMath>{`\mathbf{P}`}</InlineMath> of order <InlineMath>{`n`}</InlineMath>
          such that <InlineMath>{`\sigma(\mathbf{c}) = \mathbf{cP}`}</InlineMath> for <InlineMath>{`\mathbf{c}`}</InlineMath>
          the vector associated with <InlineMath>{`c \in \\mathcal{C}`}</InlineMath>.
        </p>
        <p className="mt-2">We may thus have (up to isomorphism):</p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = \\{{'} \\mathbf{P} : \\mathbf{P} \\\text{ is a permutation matrix of order } n \\\text{ with } \\mathbf{cP} \\in \\\mathcal{C} \\; \\forall c \\in \\\mathcal{C} \\{}'}
        `}</MathBlock>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples of Automorphism Groups</h2>

      <Example title="Repetition Code">
        <p>Consider the repetition code:</p>
        <MathBlock>{`
          \\\mathcal{C} = \\{{00\\cdots0, 11\\cdots1}\\}}
        `}</MathBlock>
        <p className="mt-2">
          Every transposition <InlineMath>{`(1 \; i) \in \\text{Aut}(\\mathcal{C})`}</InlineMath>, so:
        </p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = S_n
        `}</MathBlock>
        <p className="mt-2">
          The full symmetric group is the automorphism group because any permutation of coordinates
          maps an all-zeros word to itself and an all-ones word to itself.
        </p>
      </Example>

      <Example title="Parity Check Code">
        <p>
          Let <InlineMath>{`\\mathcal{C}`}</InlineMath> be the <InlineMath>{`(n, n+1)`}</InlineMath> parity
          check code. This code is obtained from all words of length <InlineMath>{`n`}</InlineMath> by
          adding an overall parity check.
        </p>
        <p className="mt-2">
          <InlineMath>{`\\mathcal{C}`}</InlineMath> is a linear code of dimension <InlineMath>{`n`}</InlineMath>
          with a basis consisting of the <InlineMath>{`n`}</InlineMath> elements of weight 2 with{' '}
          <InlineMath>{`c_\\{n+1\\} = 1`}</InlineMath>.
        </p>
        <p className="mt-2">
          The transpositions <InlineMath>{`(1 \\; 2), (1 \\; 3), \\ldots, (1 \\; n)`}</InlineMath> leave the
          basis elements unchanged and are therefore in <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath>.
        </p>
        <p className="mt-2">
          For any <InlineMath>{`c = (c_1, c_2, \ldots, c_n, c_\\{n+1\\}) \in \\mathcal{C}`}</InlineMath>,
          we have <InlineMath>{`c_\\{n+1\\} = \sum_\\{i=1\\}^\\{n\\} c_i`}</InlineMath>. Applying{' '}
          <InlineMath>{`\\sigma = (1, n+1)`}</InlineMath>:
        </p>
        <MathBlock>{`
          \\sigma(\\mathbf{c}) = (c_\\{n+1\\}, c_2, \\ldots, c_n, c_1)
        `}</MathBlock>
        <p className="mt-2">
          And <InlineMath>{`c_1 = \sum_\\{i=2\\}^\\{n+1\\} c_i`}</InlineMath>, so <InlineMath>{`\sigma(\mathbf{c}) \in \\mathcal{C}`}</InlineMath>.
        </p>
        <p className="mt-2">
          Since the transpositions <InlineMath>{`(1 \\; 2), \\ldots, (1 \\; n+1)`}</InlineMath> generate{' '}
          <InlineMath>{`S_\\{n+1\\}`}</InlineMath>:
        </p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = S_\\{n+1\\}
        `}</MathBlock>
      </Example>

      <Example title="A Code with Small Automorphism Group">
        <p>Let <InlineMath>{`\\mathcal{C}`}</InlineMath> be the code of length 4 generated by 1011, 1001:</p>
        <MathBlock>{`
          \\\mathcal{C} = \\{{0000, 1011, 1001, 0010}\\}}
        `}</MathBlock>
        <p className="mt-2">Clearly:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{`(1 \; 4) \in \\text{Aut}(\\mathcal{C})`}</InlineMath></li>
          <li>But none of <InlineMath>{`(1 \\; 2), (1 \\; 3), (2 \\; 3), (2 \\; 4), (3 \\; 4)`}</InlineMath> is in <InlineMath>{`\\text{Aut}(\\mathcal{C})`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          By checking all elements, we find that no 3-cycles or 4-cycles are automorphisms.
        </p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = \\{{1, (1 \\; 4)}\\}}
        `}</MathBlock>
      </Example>

      <Example title="A Larger Code">
        <p>Let:</p>
        <MathBlock>{`
          \\\mathcal{C} = \\{{0000, 1011, 1001, 0010, 1100, 0111, 0101, 1110}\\}}
        `}</MathBlock>
        <p className="mt-2">Clearly:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>{`(1 \; 2), (1 \; 4), (2 \; 4) \in \\text{Aut}(\\mathcal{C})`}</InlineMath></li>
          <li>But <InlineMath>{`(1 \; 3), (2 \; 3), (3 \; 4) \notin \\text{Aut}(\\mathcal{C})`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          The products involving <InlineMath>{`(1 \\; 3)`}</InlineMath>, <InlineMath>{`(2 \\; 3)`}</InlineMath>,
          or <InlineMath>{`(3 \\; 4)`}</InlineMath> are also not automorphisms. Hence:
        </p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = \\{{1, (1 \\; 2), (1 \\; 4), (2 \\; 4), (1 \\; 2 \\; 4), (1 \\; 4 \\; 2)}\\}}
        `}</MathBlock>
        <p className="mt-2">This is isomorphic to <InlineMath>{`S_3`}</InlineMath>.</p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Properties of Automorphism Groups</h2>

      <Theorem
        title="Automorphism Group of Dual Code"
        proof={
          <>
            <p>
              Let <InlineMath>{`\sigma \in \\text{Aut}(\\mathcal{C})`}</InlineMath>. For{' '}
              <InlineMath>{`c' \in \\mathcal{C}^\perp`}</InlineMath>,{' '}
              <InlineMath>{`\mathbf{c}(\mathbf{c}')^t = 0`}</InlineMath> for all{' '}
              <InlineMath>{`c \in \\mathcal{C}`}</InlineMath>.
            </p>
            <p className="mt-2">
              This implies <InlineMath>{`\sigma(\mathbf{c})\sigma(\mathbf{c}')^t = 0`}</InlineMath> for
              all <InlineMath>{`c \in \\mathcal{C}`}</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>{`\sigma(\\mathcal{C}) = \\mathcal{C}`}</InlineMath>, it follows that{' '}
              <InlineMath>{`\mathbf{c}\sigma(\mathbf{c}')^t = 0`}</InlineMath> for all{' '}
              <InlineMath>{`c \in \\mathcal{C}`}</InlineMath>. Thus{' '}
              <InlineMath>{`\sigma(c') \in \\mathcal{C}^\perp`}</InlineMath>, so{' '}
              <InlineMath>{`\sigma \in \\text{Aut}(\\mathcal{C}^\perp)`}</InlineMath>.
            </p>
            <p className="mt-2">
              Hence <InlineMath>{`\\text{Aut}(\\mathcal{C}) \subseteq \\text{Aut}(\\mathcal{C}^\perp)`}</InlineMath>.
              Since <InlineMath>{`(\\mathcal{C}^\perp)^\perp = \\mathcal{C}`}</InlineMath>, we also have{' '}
              <InlineMath>{`\\text{Aut}(\\mathcal{C}^\perp) \subseteq \\text{Aut}(\\mathcal{C})`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>If <InlineMath>{`\\mathcal{C}`}</InlineMath> is a linear code, then:</p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = \\\text{Aut}(\\\mathcal{C}^\\perp)
        `}</MathBlock>
      </Theorem>

      <Callout type="warning" title="Non-Linear Codes">
        The equality <InlineMath>{`\\text{Aut}(\\mathcal{C}) = \\text{Aut}(\\mathcal{C}^\perp)`}</InlineMath>
        does not hold for non-linear codes. For example, if{' '}
        <InlineMath>{`\\mathcal{C} = \\\{000, 100, 010, 001, 110, 111\\}\}`}</InlineMath>, then{' '}
        <InlineMath>{`\\text{Aut}(\\mathcal{C}) = \\\{1, (1 \; 2)\\}\}`}</InlineMath> while{' '}
        <InlineMath>{`\\mathcal{C}^\perp = \\\{000\\}\}`}</InlineMath> and{' '}
        <InlineMath>{`\\text{Aut}(\\mathcal{C}^\perp) = S_3`}</InlineMath>.
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Automorphisms of Cyclic Codes</h2>

      <Theorem
        title="Cyclic Permutation as Automorphism"
        proof={
          <>
            <p>
              The cyclic code <InlineMath>{`\\mathcal{C}`}</InlineMath> is by definition closed under
              cyclic shifts. If <InlineMath>{`\\sigma`}</InlineMath> is a cyclic permutation
              (i.e., <InlineMath>{`\sigma(i) = i + 1 \pmod{n}`}</InlineMath>), then for any code word{' '}
              <InlineMath>{`c = (c_0, c_1, \ldots, c_\\{n-1\\})`}</InlineMath>:
            </p>
            <MathBlock>{`
              \\sigma(c) = (c_\\{n-1\\}, c_0, c_1, \\ldots, c_\\{n-2\\})
            `}</MathBlock>
            <p className="mt-2">
              This is the cyclic shift of <InlineMath>{`c`}</InlineMath>, which is in{' '}
              <InlineMath>{`\\mathcal{C}`}</InlineMath>. Thus <InlineMath>{`\sigma \in \\text{Aut}(\\mathcal{C})`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The automorphism group of a cyclic code contains all cycles of length <InlineMath>{`n`}</InlineMath>
          (i.e., cyclic permutations) and their powers.
        </p>
      </Theorem>

      <Example title="Cyclic Code of Length 5">
        <p>
          The cyclic code of length 5 generated by <InlineMath>{`1 + X`}</InlineMath> is:
        </p>
        <MathBlock>{`
          \\\mathcal{C} = \\{{'} (a_0, a_0 + a_1, a_1 + a_2, a_2 + a_3, a_3) : a_i \\in \\\mathbb{B} \\{}'}
        `}</MathBlock>
        <p className="mt-2">
          The permutation <InlineMath>{`\\sigma_2`}</InlineMath> defined by <InlineMath>{`\\sigma_2(X + I) = X^2 + I`}</InlineMath>
          maps:
        </p>
        <MathBlock>{`
          1 \\to 1, X \\to X^2, X^2 \\to X^4, X^3 \\to X, X^4 \\to X^3
        `}</MathBlock>
        <p className="mt-2">
          So <InlineMath>{`\\sigma_2 = (2 \\; 3 \\; 5 \\; 4)`}</InlineMath>, a 4-cycle.
        </p>
        <p className="mt-2">
          By checking, <InlineMath>{`(1 \; 2), (1 \; 3), (1 \; 4), (1 \; 5) \in \\text{Aut}(\\mathcal{C})`}</InlineMath>,
          so:
        </p>
        <MathBlock>{`
          \\\text{Aut}(\\\mathcal{C}) = S_5
        `}</MathBlock>
      </Example>
    </LessonLayout>
  );
}
