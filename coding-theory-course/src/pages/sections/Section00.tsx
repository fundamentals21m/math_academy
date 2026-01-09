import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Chapter 1: Group Codes</h2>
      <h3>1.1 Elementary Properties</h3>

      <p>
        Coding theory emerged in the late 1940s to address engineering problems in reliable
        communication. The field developed by using sophisticated mathematical techniques,
        and the aspect using algebraic methods became known as <strong>Algebraic Coding Theory</strong>.
        The subject is concerned with devising efficient encoding and decoding procedures.
      </p>

      <Callout type="info">
        <strong>The Communication Problem:</strong> When a message is transmitted through a
        noisy channel, errors may occur. Coding theory provides methods to detect and correct
        these errors by adding redundancy to the message in a structured way.
      </Callout>

      <h3>Algebraic Foundations</h3>

      <Definition title="Group">
        <p>
          A non-empty set <InlineMath>G</InlineMath> with a binary composition is called
          a <strong>group</strong> if the following hold:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            <strong>Associativity:</strong> <InlineMath>{`(ab)c = a(bc)`}</InlineMath> for
            all <InlineMath>{`a, b, c \\in G`}</InlineMath>
          </li>
          <li>
            <strong>Identity:</strong> There exists an element <InlineMath>{`e \\in G`}</InlineMath> such
            that <InlineMath>{`ea = ae = a`}</InlineMath> for all <InlineMath>{`a \\in G`}</InlineMath>
          </li>
          <li>
            <strong>Inverse:</strong> For every <InlineMath>{`a \\in G`}</InlineMath>, there
            exists <InlineMath>{`b \\in G`}</InlineMath> such that <InlineMath>{`ab = ba = e`}</InlineMath>
          </li>
        </ol>
        <p className="mt-2">
          The element <InlineMath>e</InlineMath> is called the <strong>identity</strong> of <InlineMath>G</InlineMath>,
          and <InlineMath>b</InlineMath> is called the <strong>inverse</strong> of <InlineMath>a</InlineMath>,
          denoted <InlineMath>{`a^{-1}`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Abelian Group">
        <p>
          A group <InlineMath>G</InlineMath> is called <strong>Abelian</strong> (or commutative)
          if <InlineMath>{`ab = ba`}</InlineMath> for all <InlineMath>{`a, b \\in G`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Ring">
        <p>
          A non-empty set <InlineMath>R</InlineMath> with two binary compositions (addition and
          multiplication) is called a <strong>ring</strong> if:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li><InlineMath>R</InlineMath> is an Abelian group with respect to addition</li>
          <li>
            Multiplication is associative: <InlineMath>{`(ab)c = a(bc)`}</InlineMath> for
            all <InlineMath>{`a, b, c \\in R`}</InlineMath>
          </li>
          <li>
            The distributive laws hold: <InlineMath>{`a(b + c) = ab + ac`}</InlineMath> and <InlineMath>{`(a + b)c = ac + bc`}</InlineMath>
          </li>
        </ol>
        <p className="mt-2">
          A ring is <strong>commutative</strong> if <InlineMath>{`ab = ba`}</InlineMath> for
          all <InlineMath>{`a, b \\in R`}</InlineMath>. A ring with an element <InlineMath>{`1 \\in R`}</InlineMath> such
          that <InlineMath>{`1a = a = a1`}</InlineMath> for all <InlineMath>{`a \\in R`}</InlineMath> is
          called a <strong>ring with identity</strong>.
        </p>
      </Definition>

      <Definition title="Field">
        <p>
          A set <InlineMath>F</InlineMath> having at least two elements with two compositions
          (addition and multiplication) is called a <strong>field</strong> if:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li><InlineMath>F</InlineMath> is a commutative ring with identity</li>
          <li>Every non-zero element of <InlineMath>F</InlineMath> is invertible with respect to multiplication</li>
        </ol>
        <p className="mt-2">
          The set <InlineMath>{`F^*`}</InlineMath> of all non-zero elements of <InlineMath>F</InlineMath> forms
          an Abelian group under multiplication.
        </p>
      </Definition>

      <h3>The Binary Field</h3>

      <p>
        Of special importance in coding theory is the <strong>binary field</strong>,
        denoted <InlineMath>{`\\mathbb{B}`}</InlineMath> or <InlineMath>{`\\mathbb{F}_2`}</InlineMath>.
      </p>

      <Definition title="Binary Field">
        <p>
          The <strong>binary field</strong> <InlineMath>{`\\mathbb{B} = \\{0, 1\\}`}</InlineMath> has
          addition and multiplication defined modulo 2:
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-800/50 p-4 rounded-lg">
            <p className="font-semibold text-primary-400 mb-2">Addition</p>
            <MathBlock>{`\\begin{array}{c|cc} + & 0 & 1 \\\\ \\hline 0 & 0 & 1 \\\\ 1 & 1 & 0 \\end{array}`}</MathBlock>
          </div>
          <div className="bg-dark-800/50 p-4 rounded-lg">
            <p className="font-semibold text-primary-400 mb-2">Multiplication</p>
            <MathBlock>{`\\begin{array}{c|cc} \\times & 0 & 1 \\\\ \\hline 0 & 0 & 0 \\\\ 1 & 0 & 1 \\end{array}`}</MathBlock>
          </div>
        </div>
        <p className="mt-2">
          Note that <InlineMath>{`1 + 1 = 0`}</InlineMath> in this field, so every element is its own additive inverse.
        </p>
      </Definition>

      <p>
        Let <InlineMath>{`\\mathbb{B}^n`}</InlineMath> denote the set of all ordered <InlineMath>n</InlineMath>-tuples
        (or sequences of length <InlineMath>n</InlineMath>) with entries in <InlineMath>{`\\mathbb{B}`}</InlineMath>.
        We define addition component-wise: if <InlineMath>{`a = a_1a_2\\cdots a_n`}</InlineMath> and <InlineMath>{`b = b_1b_2\\cdots b_n`}</InlineMath>, then:
      </p>
      <MathBlock>{`a + b = c_1c_2\\cdots c_n \\text{ where } c_i = a_i + b_i`}</MathBlock>

      <p>
        With this composition, <InlineMath>{`\\mathbb{B}^n`}</InlineMath> becomes an Abelian group.
        The zero sequence is the identity, and every element is its own inverse.
      </p>

      <h3>Block Codes and Code Words</h3>

      <Definition title="Binary Block Code">
        <p>
          A <strong>binary block <InlineMath>(m, n)</InlineMath>-code</strong> consists of:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>An <strong>encoding function</strong> <InlineMath>{`E: \\mathbb{B}^m \\to \\mathbb{B}^n`}</InlineMath></li>
          <li>A <strong>decoding function</strong> <InlineMath>{`D: \\mathbb{B}^n \\to \\mathbb{B}^m`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          The elements of <InlineMath>{`\\text{Im}(E)`}</InlineMath> (the image of <InlineMath>E</InlineMath>)
          are called <strong>code words</strong>.
        </p>
      </Definition>

      <h3>Distance and Weight Functions</h3>

      <Definition title="Hamming Distance">
        <p>
          For <InlineMath>{`a, b \\in \\mathbb{B}^n`}</InlineMath>, the <strong>distance</strong> <InlineMath>{`d(a, b)`}</InlineMath> between <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> is defined as:
        </p>
        <MathBlock>{`d(a, b) = \\sum_{i=1}^{n} x_i \\quad \\text{where } x_i = \\begin{cases} 0 & \\text{if } a_i = b_i \\\\ 1 & \\text{if } a_i \\neq b_i \\end{cases}`}</MathBlock>
        <p className="mt-2">
          In other words, <InlineMath>{`d(a, b)`}</InlineMath> counts the number of positions where <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> differ.
        </p>
      </Definition>

      <Example title="Computing Hamming Distance">
        <p>Let <InlineMath>{`a = 10011011`}</InlineMath> and <InlineMath>{`b = 11001101`}</InlineMath>.</p>
        <p className="mt-2">Comparing position by position:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Position 1: <InlineMath>{`a_1 = 1 = b_1`}</InlineMath> (same)</li>
          <li>Position 2: <InlineMath>{`a_2 = 0 \\neq 1 = b_2`}</InlineMath> (different)</li>
          <li>Position 3: <InlineMath>{`a_3 = 0 = b_3`}</InlineMath> (same)</li>
          <li>Position 4: <InlineMath>{`a_4 = 1 \\neq 0 = b_4`}</InlineMath> (different)</li>
          <li>Position 5: <InlineMath>{`a_5 = 1 = b_5`}</InlineMath> (same)</li>
          <li>Position 6: <InlineMath>{`a_6 = 0 \\neq 1 = b_6`}</InlineMath> (different)</li>
          <li>Position 7: <InlineMath>{`a_7 = 1 \\neq 0 = b_7`}</InlineMath> (different)</li>
          <li>Position 8: <InlineMath>{`a_8 = 1 = b_8`}</InlineMath> (same)</li>
        </ul>
        <p className="mt-2 text-emerald-400">
          Therefore, <InlineMath>{`d(a, b) = 4`}</InlineMath>.
        </p>
      </Example>

      <Definition title="Weight Function">
        <p>
          For <InlineMath>{`a \\in \\mathbb{B}^n`}</InlineMath>, the <strong>weight</strong> <InlineMath>{`\\text{wt}(a)`}</InlineMath> of <InlineMath>a</InlineMath> is the number of non-zero components in the sequence.
        </p>
      </Definition>

      <Theorem
        title="Distance-Weight Relationship"
        proof={
          <>
            <p>
              Let <InlineMath>{`a = a_1a_2\\cdots a_n`}</InlineMath> and <InlineMath>{`b = b_1b_2\\cdots b_n`}</InlineMath>.
            </p>
            <p className="mt-2">
              For any <InlineMath>i</InlineMath> with <InlineMath>{`1 \\leq i \\leq n`}</InlineMath>:
            </p>
            <MathBlock>{`a_i + b_i = 1 \\iff a_i \\neq b_i`}</MathBlock>
            <p className="mt-2">
              Hence the pair <InlineMath>{`(a_i, b_i)`}</InlineMath> contributes 1 to <InlineMath>{`\\text{wt}(a + b)`}</InlineMath> if
              and only if it contributes 1 to <InlineMath>{`d(a, b)`}</InlineMath>.
            </p>
            <p className="mt-2">
              Therefore, <InlineMath>{`d(a, b) = \\text{wt}(a + b)`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For <InlineMath>{`a, b \\in \\mathbb{B}^n`}</InlineMath>:
        </p>
        <MathBlock>{`d(a, b) = \\text{wt}(a + b)`}</MathBlock>
      </Theorem>

      <Theorem
        title="Triangle Inequality"
        proof={
          <>
            <p>
              Let <InlineMath>{`a = a_1\\cdots a_n`}</InlineMath>, <InlineMath>{`b = b_1\\cdots b_n`}</InlineMath>,
              and <InlineMath>{`c = c_1\\cdots c_n`}</InlineMath>.
            </p>
            <p className="mt-2">
              For any <InlineMath>i</InlineMath>, define <InlineMath>{`d(a_i, b_i) = 1`}</InlineMath> if <InlineMath>{`a_i \\neq b_i`}</InlineMath> and
              0 otherwise. Similarly for <InlineMath>{`d(a_i, c_i)`}</InlineMath> and <InlineMath>{`d(b_i, c_i)`}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{`a_i = b_i`}</InlineMath>, then <InlineMath>{`d(a_i, b_i) = 0 \\leq d(a_i, c_i) + d(b_i, c_i)`}</InlineMath> trivially.
            </p>
            <p className="mt-2">
              If <InlineMath>{`a_i \\neq b_i`}</InlineMath>, then <InlineMath>{`d(a_i, b_i) = 1`}</InlineMath>.
              If <InlineMath>{`a_i = c_i`}</InlineMath>, then <InlineMath>{`b_i \\neq c_i`}</InlineMath>, so <InlineMath>{`d(b_i, c_i) = 1`}</InlineMath>.
              Similarly, if <InlineMath>{`b_i = c_i`}</InlineMath>, then <InlineMath>{`d(a_i, c_i) = 1`}</InlineMath>.
            </p>
            <p className="mt-2">
              In either case, <InlineMath>{`d(a_i, b_i) \\leq d(a_i, c_i) + d(b_i, c_i)`}</InlineMath>.
            </p>
            <p className="mt-2">
              Summing over all <InlineMath>i</InlineMath> gives the result.
            </p>
          </>
        }
      >
        <p>
          For <InlineMath>{`a, b, c \\in \\mathbb{B}^n`}</InlineMath>:
        </p>
        <MathBlock>{`d(a, b) \\leq d(a, c) + d(b, c)`}</MathBlock>
      </Theorem>

      <h3>Error Detection and Correction</h3>

      <Definition title="Nearest-Neighbor Decoding">
        <p>
          The <strong>nearest-neighbor decoding principle</strong> states:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If a received word <InlineMath>r</InlineMath> is a code word, decode it as <InlineMath>{`D(r) = r`}</InlineMath></li>
          <li>If <InlineMath>r</InlineMath> is not a code word, find the code word <InlineMath>a</InlineMath> with minimum <InlineMath>{`d(a, r)`}</InlineMath></li>
          <li>If this code word is unique, decode <InlineMath>{`D(r) = a`}</InlineMath></li>
          <li>If multiple code words achieve the minimum distance, declare a <strong>decoding failure</strong></li>
        </ul>
      </Definition>

      <Theorem
        title="Error Detection Criterion"
        proof={
          <>
            <p>
              Let <InlineMath>C</InlineMath> be the set of all code words of length <InlineMath>n</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Sufficiency:</strong> Suppose <InlineMath>{`d(b, b') \\geq k + 1`}</InlineMath> for
              all <InlineMath>{`b, b' \\in C`}</InlineMath>. Let <InlineMath>{`b \\in C`}</InlineMath> be
              transmitted and an error word <InlineMath>e</InlineMath> with <InlineMath>{`\\text{wt}(e) \\leq k`}</InlineMath> is added.
            </p>
            <p className="mt-2">
              The received word is <InlineMath>{`b + e`}</InlineMath>, and:
            </p>
            <MathBlock>{`d(b + e, b) = \\text{wt}(e) \\leq k`}</MathBlock>
            <p className="mt-2">
              Since the minimum distance is at least <InlineMath>{`k + 1`}</InlineMath>, <InlineMath>{`b + e`}</InlineMath> cannot
              be a code word. Thus the error is detected.
            </p>
            <p className="mt-2">
              <strong>Necessity:</strong> Suppose the code detects all sets of <InlineMath>k</InlineMath> or fewer errors.
              If <InlineMath>{`d(b, b') \\leq k`}</InlineMath> for some <InlineMath>{`b, b' \\in C`}</InlineMath>,
              let <InlineMath>{`e = b + b'`}</InlineMath>. Then <InlineMath>{`\\text{wt}(e) \\leq k`}</InlineMath> and <InlineMath>{`b + e = b'`}</InlineMath> is
              a code word, so the error goes undetected. Contradiction.
            </p>
          </>
        }
      >
        <p>
          For a code to detect all sets of <InlineMath>k</InlineMath> or fewer errors, it is necessary
          and sufficient that the minimum distance between any two code words be at least <InlineMath>{`k + 1`}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="Error Correction Criterion"
        proof={
          <>
            <p>
              Suppose <InlineMath>{`d(a, b) \\leq 2k`}</InlineMath> for code words <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`\\text{wt}(a + b) = l \\leq 2k`}</InlineMath>. We can find words <InlineMath>e, e'</InlineMath> with
              <InlineMath>{`\\text{wt}(e) \\leq k`}</InlineMath>, <InlineMath>{`\\text{wt}(e') \\leq k`}</InlineMath>, and <InlineMath>{`a + b = e + e'`}</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>{`a + e = b + e'`}</InlineMath>. If <InlineMath>b</InlineMath> is transmitted with error <InlineMath>e'</InlineMath>:
            </p>
            <MathBlock>{`d(b + e', a) = d(a + e, a) \\leq d(b + e', b)`}</MathBlock>
            <p className="mt-2">
              By nearest-neighbor decoding, <InlineMath>{`b + e'`}</InlineMath> may be decoded incorrectly.
            </p>
            <p className="mt-2">
              Conversely, if the minimum distance is at least <InlineMath>{`2k + 1`}</InlineMath> and <InlineMath>{`\\text{wt}(e) \\leq k`}</InlineMath>,
              for any code word <InlineMath>{`b^* \\neq b`}</InlineMath>:
            </p>
            <MathBlock>{`d(b + e, b^*) = \\text{wt}(b + b^* + e) \\geq k + 1 > k \\geq d(b + e, b)`}</MathBlock>
            <p className="mt-2">
              Thus <InlineMath>b</InlineMath> is uniquely the nearest code word to <InlineMath>{`b + e`}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For a code to correct all sets of <InlineMath>k</InlineMath> or fewer errors, it is necessary
          and sufficient that the minimum distance between code words be at least <InlineMath>{`2k + 1`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="(2, 3) Parity Check Code">
        <p>Consider the encoding function:</p>
        <MathBlock>{`00 \\to 000, \\quad 01 \\to 011, \\quad 10 \\to 101, \\quad 11 \\to 110`}</MathBlock>
        <p className="mt-2">The code words are <InlineMath>{`C = \\{000, 011, 101, 110\\}`}</InlineMath>.</p>
        <p className="mt-2">
          The three possible error vectors of weight 1 are: <InlineMath>001, 010, 100</InlineMath>.
          Adding any one of these to any code word does not yield a code word.
        </p>
        <p className="mt-2 text-emerald-400">
          Thus, every single error is detected by this code.
        </p>
        <p className="mt-2">
          However, if <InlineMath>011</InlineMath> is transmitted and error <InlineMath>100</InlineMath> is added,
          the received word is <InlineMath>111</InlineMath>. This is equidistant from three code words,
          so this single error cannot be corrected.
        </p>
      </Example>

      <Definition title="Triple Repetition Code">
        <p>
          The <strong>(m, 3m) triple repetition code</strong> has encoding function <InlineMath>{`E: \\mathbb{B}^m \\to \\mathbb{B}^{3m}`}</InlineMath> defined by:
        </p>
        <MathBlock>{`E(a_1a_2\\cdots a_m) = a_1a_2\\cdots a_m a_1a_2\\cdots a_m a_1a_2\\cdots a_m`}</MathBlock>
        <p className="mt-2">
          Each message word is repeated three times. If <InlineMath>{`a \\neq b`}</InlineMath>,
          then <InlineMath>{`d(a, b) \\geq 1`}</InlineMath>, so <InlineMath>{`d(E(a), E(b)) \\geq 3`}</InlineMath>.
        </p>
        <p className="mt-2 text-emerald-400">
          Thus, the triple repetition code can detect any two errors and correct any single error.
        </p>
      </Definition>

      <Callout type="success">
        <strong>Section Summary:</strong> We have established the algebraic foundations of coding
        theory, including groups, rings, and fields. The binary field <InlineMath>{`\\mathbb{B}`}</InlineMath> is
        fundamental for binary codes. The Hamming distance measures how different two words are,
        and the minimum distance of a code determines its error-detecting and error-correcting capabilities.
        A code with minimum distance <InlineMath>d</InlineMath> can detect <InlineMath>{`d - 1`}</InlineMath> errors
        and correct <InlineMath>{`\\lfloor (d-1)/2 \\rfloor`}</InlineMath> errors.
      </Callout>
    </LessonLayout>
  );
}
