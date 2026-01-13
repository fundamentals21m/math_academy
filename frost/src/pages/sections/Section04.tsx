import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Group Theory Foundations</h2>

      <p>
        Schnorr signatures are built on elliptic curve groups. Before diving into the signature
        scheme, we need to understand the mathematical structure that makes it all work.
      </p>

      <Definition title="Abelian Group">
        <p>
          An <strong>abelian group</strong> <InlineMath>{`(G, +)`}</InlineMath> consists of:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>A set <InlineMath>{`G`}</InlineMath> with operation <InlineMath>{`+`}</InlineMath></li>
          <li>
            <strong>Identity:</strong> <InlineMath>{`\\exists I \\in G`}</InlineMath> such that
            <InlineMath>{`g + I = g`}</InlineMath> for all <InlineMath>{`g \\in G`}</InlineMath>
          </li>
          <li>
            <strong>Inverses:</strong> For each <InlineMath>{`g`}</InlineMath>, there exists
            <InlineMath>{`-g`}</InlineMath> such that <InlineMath>{`g + (-g) = I`}</InlineMath>
          </li>
          <li>
            <strong>Associativity:</strong> <InlineMath>{`(g_1 + g_2) + g_3 = g_1 + (g_2 + g_3)`}</InlineMath>
          </li>
          <li>
            <strong>Commutativity:</strong> <InlineMath>{`g_1 + g_2 = g_2 + g_1`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3>Bitcoin's Group: secp256k1</h3>

      <p>
        Bitcoin uses the secp256k1 elliptic curve. This curve is defined by the equation:
      </p>

      <MathBlock>
        {`y^2 = x^3 + 7 \\pmod{p}`}
      </MathBlock>

      <p>
        where <InlineMath>{`p`}</InlineMath> is a large prime:
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 my-4 font-mono text-sm overflow-x-auto">
        p = 2<sup>256</sup> - 2<sup>32</sup> - 977
      </div>

      <Definition title="Elliptic Curve Points">
        <p>
          Points on the curve form a group under "point addition":
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>Generator point:</strong> <InlineMath>{`G`}</InlineMath> (the base point)</li>
          <li><strong>Order:</strong> <InlineMath>{`q`}</InlineMath> (number of distinct points)</li>
          <li><strong>Identity:</strong> The "point at infinity" <InlineMath>{`\\mathcal{O}`}</InlineMath></li>
        </ul>
      </Definition>

      <h3>Scalar Multiplication</h3>

      <p>
        For a scalar <InlineMath>{`s \\in \\mathbb{Z}_q`}</InlineMath>, we write:
      </p>

      <MathBlock>
        {`[s]G = \\underbrace{G + G + \\cdots + G}_{s \\text{ times}}`}
      </MathBlock>

      <p>
        This is called <strong>scalar multiplication</strong>. Throughout this course, we use
        <InlineMath>{`[s]G`}</InlineMath> notation to emphasize that <InlineMath>{`s`}</InlineMath>
        is a scalar and <InlineMath>{`G`}</InlineMath> is a group element.
      </p>

      <Example title="Key Generation">
        <p>
          To generate a key pair:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Choose random secret <InlineMath>{`s \\in \\mathbb{Z}_q`}</InlineMath></li>
          <li>Compute public key <InlineMath>{`Y = [s]G`}</InlineMath></li>
        </ol>
        <p className="mt-3">
          The secret <InlineMath>{`s`}</InlineMath> is a 256-bit number. The public key
          <InlineMath>{`Y`}</InlineMath> is a point on the curve (two 256-bit coordinates).
        </p>
      </Example>

      <h3>The Discrete Logarithm Problem</h3>

      <Theorem title="Discrete Log Hardness">
        <p>
          Given <InlineMath>{`Y = [s]G`}</InlineMath>, computing <InlineMath>{`s`}</InlineMath>
          is computationally infeasible.
        </p>
        <p className="mt-2">
          More precisely: no known algorithm can compute <InlineMath>{`s`}</InlineMath> from
          <InlineMath>{`Y`}</InlineMath> in less than approximately <InlineMath>{`2^{128}`}</InlineMath>
          operations for secp256k1.
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Security Foundation:</strong> The discrete logarithm problem is the security
        foundation of all elliptic curve cryptography. It's easy to compute
        <InlineMath>{`Y = [s]G`}</InlineMath> (just repeated addition), but essentially
        impossible to reverse the operation.
      </Callout>

      <h3>Why This Matters for FROST</h3>

      <p>
        In FROST, we'll work with:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Secret shares:</strong> Scalars <InlineMath>{`s_i \\in \\mathbb{Z}_q`}</InlineMath>
        </li>
        <li>
          <strong>Public verification shares:</strong> Points <InlineMath>{`Y_i = [s_i]G`}</InlineMath>
        </li>
        <li>
          <strong>Nonces:</strong> Random scalars <InlineMath>{`k_i`}</InlineMath> that must never be reused
        </li>
        <li>
          <strong>Commitments:</strong> Points <InlineMath>{`R_i = [k_i]G`}</InlineMath>
        </li>
      </ul>

      <p>
        The group structure allows us to combine partial computations:
      </p>

      <MathBlock>
        {`[s_1]G + [s_2]G = [s_1 + s_2]G`}
      </MathBlock>

      <p>
        This "linearity" is what makes threshold signatures possible - we can combine
        contributions from multiple parties without ever revealing individual secrets.
      </p>
    </LessonLayout>
  );
}
