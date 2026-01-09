import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Introduction */}
      <p>
        Groups are one of the most fundamental structures in abstract algebra. They capture the
        essence of symmetry and appear throughout mathematics and its applications. In this
        section, we define groups axiomatically and explore many important examples.
      </p>

      <h2>The Group Axioms</h2>

      <Definition title="Group" className="my-6">
        <p>
          A <strong>group</strong> is a set <InlineMath>G</InlineMath> together with a binary
          operation <InlineMath>*</InlineMath> (written <InlineMath>a * b</InlineMath> or simply{' '}
          <InlineMath>ab</InlineMath>) satisfying:
        </p>
        <ol className="list-decimal list-inside mt-3 space-y-3">
          <li>
            <strong>Closure:</strong> For all <InlineMath>a, b \in G</InlineMath>,{' '}
            <InlineMath>a * b \in G</InlineMath>.
          </li>
          <li>
            <strong>Associativity:</strong> For all <InlineMath>a, b, c \in G</InlineMath>,{' '}
            <InlineMath>(a * b) * c = a * (b * c)</InlineMath>.
          </li>
          <li>
            <strong>Identity:</strong> There exists <InlineMath>e \in G</InlineMath> such that{' '}
            <InlineMath>e * a = a * e = a</InlineMath> for all <InlineMath>a \in G</InlineMath>.
          </li>
          <li>
            <strong>Inverses:</strong> For each <InlineMath>a \in G</InlineMath>, there exists{' '}
            <InlineMath>a^{'{-1}'} \in G</InlineMath> such that{' '}
            <InlineMath>a * a^{'{-1}'} = a^{'{-1}'} * a = e</InlineMath>.
          </li>
        </ol>
      </Definition>

      <Definition title="Abelian Group" className="my-6">
        <p>
          A group <InlineMath>G</InlineMath> is <strong>abelian</strong> (or <strong>commutative</strong>)
          if additionally:
        </p>
        <MathBlock>{`a * b = b * a \\quad \\text{for all } a, b \\in G`}</MathBlock>
        <p className="mt-2">
          Named after Niels Henrik Abel (1802–1829).
        </p>
      </Definition>

      <h2>Examples of Groups</h2>

      <Example title="Integers Under Addition" className="my-6">
        <p>
          <InlineMath>(\mathbb{'{Z}'}, +)</InlineMath> is an abelian group:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Closure: Sum of integers is an integer</li>
          <li>Associativity: <InlineMath>(a + b) + c = a + (b + c)</InlineMath></li>
          <li>Identity: <InlineMath>e = 0</InlineMath></li>
          <li>Inverse of <InlineMath>a</InlineMath>: <InlineMath>-a</InlineMath></li>
          <li>Commutative: <InlineMath>a + b = b + a</InlineMath></li>
        </ul>
        <p className="mt-2">
          Similarly, <InlineMath>(\mathbb{'{Q}'}, +)</InlineMath>, <InlineMath>(\mathbb{'{R}'}, +)</InlineMath>,
          and <InlineMath>(\mathbb{'{C}'}, +)</InlineMath> are abelian groups.
        </p>
      </Example>

      <Example title="Nonzero Reals Under Multiplication" className="my-6">
        <p>
          <InlineMath>(\mathbb{'{R}'}^*, \cdot)</InlineMath> where{' '}
          <InlineMath>\mathbb{'{R}'}^* = \mathbb{'{R}'} \setminus \{'{0}'}\</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Closure: Product of nonzero reals is nonzero</li>
          <li>Associativity: <InlineMath>(ab)c = a(bc)</InlineMath></li>
          <li>Identity: <InlineMath>e = 1</InlineMath></li>
          <li>Inverse of <InlineMath>a</InlineMath>: <InlineMath>1/a</InlineMath></li>
        </ul>
        <p className="mt-2">
          This is abelian. Note: <InlineMath>\mathbb{'{R}'}</InlineMath> with multiplication is
          <em>not</em> a group (0 has no inverse).
        </p>
      </Example>

      <Example title="Symmetric Group" className="my-6">
        <p>
          <InlineMath>(S_n, \circ)</InlineMath>, the permutations of{' '}
          <InlineMath>\{'{1, \\ldots, n}'}\</InlineMath> under composition:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Closure: Composition of bijections is a bijection</li>
          <li>Associativity: Function composition is associative</li>
          <li>Identity: The identity permutation <InlineMath>e</InlineMath></li>
          <li>Inverse: Every bijection has an inverse</li>
        </ul>
        <p className="mt-2">
          <InlineMath>S_n</InlineMath> is <strong>not</strong> abelian for <InlineMath>n \geq 3</InlineMath>.
        </p>
      </Example>

      <Example title="Integers Modulo n" className="my-6">
        <p>
          <InlineMath>(\mathbb{'{Z}'}_n, +)</InlineMath>, addition modulo <InlineMath>n</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Elements: <InlineMath>\{'{[0], [1], \\ldots, [n-1]}'}\</InlineMath></li>
          <li>Identity: <InlineMath>[0]</InlineMath></li>
          <li>Inverse of <InlineMath>[a]</InlineMath>: <InlineMath>[n - a]</InlineMath></li>
        </ul>
        <p className="mt-2">
          This is a finite abelian group of order <InlineMath>n</InlineMath>.
        </p>
      </Example>

      <Example title="Units Modulo n" className="my-6">
        <p>
          <InlineMath>((\mathbb{'{Z}'}/n\mathbb{'{Z}'})^*, \cdot)</InlineMath>, the invertible elements
          under multiplication:
        </p>
        <MathBlock>{`(\\mathbb{Z}/n\\mathbb{Z})^* = \\{[a] : \\gcd(a, n) = 1\\}`}</MathBlock>
        <p className="mt-2">
          This is the group of <strong>units</strong> modulo <InlineMath>n</InlineMath>, with order{' '}
          <InlineMath>\phi(n)</InlineMath> (Euler's totient).
        </p>
        <p className="mt-2">
          For example, <InlineMath>(\mathbb{'{Z}'}/8\mathbb{'{Z}'})^* = \{'{[1], [3], [5], [7]}'}\</InlineMath>{' '}
          has order <InlineMath>\phi(8) = 4</InlineMath>.
        </p>
      </Example>

      <Example title="Matrix Groups" className="my-6">
        <p>
          <InlineMath>GL_n(\mathbb{'{R}'}) = \{'{A \\in M_n(\\mathbb{R}) : \\det(A) \\neq 0}'}\</InlineMath>,
          the <strong>general linear group</strong> of invertible <InlineMath>n \times n</InlineMath>{' '}
          real matrices under multiplication:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Identity: <InlineMath>I_n</InlineMath> (identity matrix)</li>
          <li>Inverse: <InlineMath>A^{'{-1}'}</InlineMath> exists since <InlineMath>\det(A) \neq 0</InlineMath></li>
        </ul>
        <p className="mt-2">
          Not abelian for <InlineMath>n \geq 2</InlineMath> (matrix multiplication doesn't commute).
        </p>
      </Example>

      <h2>Basic Properties</h2>

      <Theorem
        title="Uniqueness of Identity"
        className="my-6"
        proof={
          <>
            <p>
              Suppose <InlineMath>e</InlineMath> and <InlineMath>e'</InlineMath> are both identities.
            </p>
            <p className="mt-2">
              Then <InlineMath>e = e * e' = e'</InlineMath>.
            </p>
            <p className="mt-2">
              (The first equality uses that <InlineMath>e'</InlineMath> is an identity; the second
              uses that <InlineMath>e</InlineMath> is an identity.)
            </p>
          </>
        }
      >
        <p>A group has exactly one identity element.</p>
      </Theorem>

      <Theorem
        title="Uniqueness of Inverses"
        className="my-6"
        proof={
          <>
            <p>
              Suppose <InlineMath>b</InlineMath> and <InlineMath>c</InlineMath> are both inverses
              of <InlineMath>a</InlineMath>.
            </p>
            <p className="mt-2">
              Then <InlineMath>b = b * e = b * (a * c) = (b * a) * c = e * c = c</InlineMath>.
            </p>
          </>
        }
      >
        <p>Each element in a group has exactly one inverse.</p>
      </Theorem>

      <Theorem title="Cancellation Laws" className="my-6">
        <p>In a group:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Left cancellation:</strong> <InlineMath>a * b = a * c \Rightarrow b = c</InlineMath>
          </li>
          <li>
            <strong>Right cancellation:</strong> <InlineMath>b * a = c * a \Rightarrow b = c</InlineMath>
          </li>
        </ul>
      </Theorem>

      <Theorem title="Inverse Properties" className="my-6">
        <p>For all <InlineMath>a, b</InlineMath> in a group:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>(a^{'{-1}'})^{'{-1}'} = a</InlineMath></li>
          <li><InlineMath>(ab)^{'{-1}'} = b^{'{-1}'}a^{'{-1}'}</InlineMath> (note the reversal)</li>
        </ol>
      </Theorem>

      <h2>Order of Elements</h2>

      <Definition title="Order of an Element" className="my-6">
        <p>
          The <strong>order</strong> of an element <InlineMath>a</InlineMath> in a group, denoted{' '}
          <InlineMath>|a|</InlineMath> or <InlineMath>\text{'{ord}'}(a)</InlineMath>, is the smallest
          positive integer <InlineMath>n</InlineMath> such that <InlineMath>a^n = e</InlineMath>.
        </p>
        <p className="mt-2">
          If no such <InlineMath>n</InlineMath> exists, we say <InlineMath>a</InlineMath> has{' '}
          <strong>infinite order</strong>.
        </p>
      </Definition>

      <Example title="Orders in Z_6" className="my-6">
        <p>In <InlineMath>(\mathbb{'{Z}'}_6, +)</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>|[0]| = 1</InlineMath> (identity)</li>
          <li><InlineMath>|[1]| = 6</InlineMath> (need 6 copies of [1] to get [0])</li>
          <li><InlineMath>|[2]| = 3</InlineMath> (<InlineMath>[2] + [2] + [2] = [6] = [0]</InlineMath>)</li>
          <li><InlineMath>|[3]| = 2</InlineMath> (<InlineMath>[3] + [3] = [0]</InlineMath>)</li>
          <li><InlineMath>|[4]| = 3</InlineMath></li>
          <li><InlineMath>|[5]| = 6</InlineMath></li>
        </ul>
      </Example>

      <h2>Cyclic Groups</h2>

      <Definition title="Cyclic Group" className="my-6">
        <p>
          A group <InlineMath>G</InlineMath> is <strong>cyclic</strong> if there exists an element{' '}
          <InlineMath>g \in G</InlineMath> such that every element of <InlineMath>G</InlineMath> can
          be written as a power of <InlineMath>g</InlineMath>:
        </p>
        <MathBlock>{`G = \\langle g \\rangle = \\{g^n : n \\in \\mathbb{Z}\\}`}</MathBlock>
        <p className="mt-2">
          The element <InlineMath>g</InlineMath> is called a <strong>generator</strong>.
        </p>
      </Definition>

      <Example title="Cyclic Group Examples" className="my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>\mathbb{'{Z}'}_n = \langle [1] \rangle</InlineMath> is cyclic of order{' '}
            <InlineMath>n</InlineMath>.
          </li>
          <li>
            <InlineMath>\mathbb{'{Z}'} = \langle 1 \rangle</InlineMath> is the infinite cyclic group.
          </li>
          <li>
            <InlineMath>\{'{1, -1, i, -i}'}\</InlineMath> under multiplication is cyclic:{' '}
            <InlineMath>\langle i \rangle</InlineMath>.
          </li>
        </ul>
      </Example>

      <Theorem title="Cyclic Groups are Abelian" className="my-6">
        <p>Every cyclic group is abelian.</p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>group</strong> is a set with an associative operation, identity, and
              inverses. An <strong>abelian</strong> group is also commutative.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Examples: <InlineMath>(\mathbb{'{Z}'}, +)</InlineMath>,{' '}
              <InlineMath>(\mathbb{'{R}'}^*, \cdot)</InlineMath>, <InlineMath>(S_n, \circ)</InlineMath>,{' '}
              <InlineMath>(\mathbb{'{Z}'}_n, +)</InlineMath>, <InlineMath>GL_n(\mathbb{'{R}'})</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              The identity and inverses are <strong>unique</strong>. Groups satisfy cancellation laws.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <InlineMath>(ab)^{'{-1}'} = b^{'{-1}'}a^{'{-1}'}</InlineMath> (order reverses for
              inverses of products).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              The <strong>order</strong> of element <InlineMath>a</InlineMath> is the smallest{' '}
              <InlineMath>n</InlineMath> with <InlineMath>a^n = e</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              A <strong>cyclic group</strong> is generated by a single element. Cyclic groups are
              abelian.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
