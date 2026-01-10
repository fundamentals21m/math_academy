import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-semibold mb-4">Appendix: Construction of the Real Numbers</h2>

      <p className="mb-4">
        In this appendix, we prove Theorem 1.19 by constructing <InlineMath>{'R'}</InlineMath> from <InlineMath>{'Q'}</InlineMath>.
        We shall divide the construction into several steps. The key idea is to define real
        numbers as certain subsets of <InlineMath>{'Q'}</InlineMath>, called <em>Dedekind cuts</em>.
      </p>

      <Definition title="Dedekind Cut">
        <p className="mb-3">
          The members of <InlineMath>{'R'}</InlineMath> will be certain subsets of <InlineMath>{'Q'}</InlineMath>,
          called <em>cuts</em>. A cut is, by definition, any set <InlineMath>{'\\alpha \\subset Q'}</InlineMath> with
          the following three properties:
        </p>
        <ul className="list-none space-y-2">
          <li>(I) <InlineMath>{'\\alpha'}</InlineMath> is not empty, and <InlineMath>{'\\alpha \\neq Q'}</InlineMath>.</li>
          <li>(II) If <InlineMath>{'p \\in \\alpha'}</InlineMath>, <InlineMath>{'q \\in Q'}</InlineMath>, and <InlineMath>{'q < p'}</InlineMath>, then <InlineMath>{'q \\in \\alpha'}</InlineMath>.</li>
          <li>(III) If <InlineMath>{'p \\in \\alpha'}</InlineMath>, then <InlineMath>{'p < r'}</InlineMath> for some <InlineMath>{'r \\in \\alpha'}</InlineMath>.</li>
        </ul>
        <p className="mt-3">
          The letters <InlineMath>{'p, q, r, \\ldots'}</InlineMath> will always denote rational numbers,
          and <InlineMath>{'\\alpha, \\beta, \\gamma, \\ldots'}</InlineMath> will denote cuts.
        </p>
      </Definition>

      <Callout type="info" title="Understanding Cuts">
        <p className="mb-3">
          Note that (III) simply says that <InlineMath>{'\\alpha'}</InlineMath> has no largest member;
          (II) implies two facts which will be used freely:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>If <InlineMath>{'p \\in \\alpha'}</InlineMath> and <InlineMath>{'q \\notin \\alpha'}</InlineMath> then <InlineMath>{'p < q'}</InlineMath>.</li>
          <li>If <InlineMath>{'r \\notin \\alpha'}</InlineMath> and <InlineMath>{'r < s'}</InlineMath> then <InlineMath>{'s \\notin \\alpha'}</InlineMath>.</li>
        </ul>
      </Callout>

      <Definition title="Step 2: Order on R">
        <p className="mb-3">
          Define "<InlineMath>{'\\alpha < \\beta'}</InlineMath>" to mean: <InlineMath>{'\\alpha'}</InlineMath> is
          a proper subset of <InlineMath>{'\\beta'}</InlineMath>.
        </p>
        <p className="mb-3">
          Let us check that this meets the requirements of Definition 1.5.
        </p>
        <p className="mb-3">
          If <InlineMath>{'\\alpha < \\beta'}</InlineMath> and <InlineMath>{'\\beta < \\gamma'}</InlineMath> it
          is clear that <InlineMath>{'\\alpha < \\gamma'}</InlineMath>. (A proper subset of a proper subset
          is a proper subset.)
        </p>
        <p>
          It is also clear that at most one of the three relations
        </p>
        <MathBlock>{'\\alpha < \\beta, \\quad \\alpha = \\beta, \\quad \\beta < \\alpha'}</MathBlock>
        <p className="mt-3">
          can hold for any pair <InlineMath>{'\\alpha'}</InlineMath>, <InlineMath>{'\\beta'}</InlineMath>.
          To show that at least one holds, assume that the first two fail. Then <InlineMath>{'\\alpha'}</InlineMath> is
          not a subset of <InlineMath>{'\\beta'}</InlineMath>. Hence there is
          a <InlineMath>{'p \\in \\alpha'}</InlineMath> with <InlineMath>{'p \\notin \\beta'}</InlineMath>.
          If <InlineMath>{'q \\in \\beta'}</InlineMath>, it follows that <InlineMath>{'q < p'}</InlineMath> (since <InlineMath>{'p \\notin \\beta'}</InlineMath>),
          hence <InlineMath>{'q \\in \\alpha'}</InlineMath>, by (II). Thus <InlineMath>{'\\beta \\subset \\alpha'}</InlineMath>.
          Since <InlineMath>{'\\beta \\neq \\alpha'}</InlineMath>, we conclude: <InlineMath>{'\\beta < \\alpha'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Step 3: R has the least-upper-bound property"
        proof={
          <>
            <p className="mb-3">
              To prove this, let <InlineMath>{'A'}</InlineMath> be a nonempty subset of <InlineMath>{'R'}</InlineMath>,
              and assume that <InlineMath>{'\\beta \\in R'}</InlineMath> is an upper bound of <InlineMath>{'A'}</InlineMath>.
              Define <InlineMath>{'\\gamma'}</InlineMath> to be the union of all <InlineMath>{'\\alpha \\in A'}</InlineMath>.
              In other words, <InlineMath>{'p \\in \\gamma'}</InlineMath> if and only
              if <InlineMath>{'p \\in \\alpha'}</InlineMath> for some <InlineMath>{'\\alpha \\in A'}</InlineMath>.
              We shall prove that <InlineMath>{'\\gamma \\in R'}</InlineMath> and
              that <InlineMath>{'\\gamma = \\sup A'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'A'}</InlineMath> is not empty, there exists
              an <InlineMath>{'\\alpha_0 \\in A'}</InlineMath>. This <InlineMath>{'\\alpha_0'}</InlineMath> is
              not empty. Since <InlineMath>{'\\alpha_0 \\subset \\gamma'}</InlineMath>, <InlineMath>{'\\gamma'}</InlineMath> is
              not empty. Next, <InlineMath>{'\\gamma \\subset \\beta'}</InlineMath> (since <InlineMath>{'\\alpha \\subset \\beta'}</InlineMath> for
              every <InlineMath>{'\\alpha \\in A'}</InlineMath>), and therefore <InlineMath>{'\\gamma \\neq Q'}</InlineMath>.
              Thus <InlineMath>{'\\gamma'}</InlineMath> satisfies property (I).
            </p>
            <p className="mb-3">
              To prove (II) and (III), pick <InlineMath>{'p \\in \\gamma'}</InlineMath>. Then <InlineMath>{'p \\in \\alpha_1'}</InlineMath> for
              some <InlineMath>{'\\alpha_1 \\in A'}</InlineMath>. If <InlineMath>{'q < p'}</InlineMath>,
              then <InlineMath>{'q \\in \\alpha_1'}</InlineMath>, hence <InlineMath>{'q \\in \\gamma'}</InlineMath>;
              this proves (II). If <InlineMath>{'r \\in \\alpha_1'}</InlineMath> is so chosen
              that <InlineMath>{'r > p'}</InlineMath>, we see that <InlineMath>{'r \\in \\gamma'}</InlineMath> (since <InlineMath>{'\\alpha_1 \\subset \\gamma'}</InlineMath>),
              and this proves (III).
            </p>
            <p className="mb-3">
              Thus <InlineMath>{'\\gamma \\in R'}</InlineMath>.
            </p>
            <p className="mb-3">
              It is clear that <InlineMath>{'\\alpha \\leq \\gamma'}</InlineMath> for
              every <InlineMath>{'\\alpha \\in A'}</InlineMath>.
            </p>
            <p className="mb-3">
              Suppose <InlineMath>{'\\delta < \\gamma'}</InlineMath>. Then there is
              an <InlineMath>{'s \\in \\gamma'}</InlineMath> and that <InlineMath>{'s \\notin \\delta'}</InlineMath>.
              Since <InlineMath>{'s \\in \\gamma'}</InlineMath>, <InlineMath>{'s \\in \\alpha'}</InlineMath> for
              some <InlineMath>{'\\alpha \\in A'}</InlineMath>. Hence <InlineMath>{'\\delta < \\alpha'}</InlineMath>,
              and <InlineMath>{'\\delta'}</InlineMath> is not an upper bound of <InlineMath>{'A'}</InlineMath>.
            </p>
            <p>
              This gives the desired result: <InlineMath>{'\\gamma = \\sup A'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The ordered set <InlineMath>{'R'}</InlineMath> has the least-upper-bound property.
        </p>
      </Theorem>

      <Definition title="Step 4: Addition in R">
        <p className="mb-3">
          If <InlineMath>{'\\alpha \\in R'}</InlineMath> and <InlineMath>{'\\beta \\in R'}</InlineMath> we
          define <InlineMath>{'\\alpha + \\beta'}</InlineMath> to be the set of
          all sums <InlineMath>{'r + s'}</InlineMath>, where <InlineMath>{'r \\in \\alpha'}</InlineMath> and <InlineMath>{'s \\in \\beta'}</InlineMath>.
        </p>
        <p className="mb-3">
          We define <InlineMath>{'0^*'}</InlineMath> to be the set of all negative rational numbers.
          It is clear that <InlineMath>{'0^*'}</InlineMath> is a cut.
        </p>
        <p>
          We verify that <InlineMath>{'\\alpha + \\beta'}</InlineMath> is a cut and
          that <InlineMath>{'\\alpha + 0^* = \\alpha'}</InlineMath>. The addition axioms (A) of Definition 1.12
          hold in <InlineMath>{'R'}</InlineMath>, with <InlineMath>{'0^*'}</InlineMath> playing the role of 0.
        </p>
      </Definition>

      <Definition title="Step 5: Additive Inverses">
        <p className="mb-3">
          Fix <InlineMath>{'\\alpha \\in R'}</InlineMath>. Let <InlineMath>{'\\beta'}</InlineMath> be
          the set of all <InlineMath>{'p'}</InlineMath> with the following property:
        </p>
        <p className="mb-3 ml-4">
          There exists <InlineMath>{'r > 0'}</InlineMath> such that <InlineMath>{'-p - r \\notin \\alpha'}</InlineMath>.
        </p>
        <p className="mb-3">
          In other words, some rational number smaller than <InlineMath>{'-p'}</InlineMath> fails to be
          in <InlineMath>{'\\alpha'}</InlineMath>.
        </p>
        <p>
          We show that <InlineMath>{'\\beta \\in R'}</InlineMath> and
          that <InlineMath>{'\\alpha + \\beta = 0^*'}</InlineMath>. This <InlineMath>{'\\beta'}</InlineMath> will
          of course be denoted by <InlineMath>{'-\\alpha'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="note" title="Ordered Field Properties">
        <p className="mb-3">
          Having proved that the addition defined in Step 4 satisfies Axioms (A) of Definition 1.12,
          it follows that Proposition 1.14 is valid in <InlineMath>{'R'}</InlineMath>, and we can prove
          one of the requirements of Definition 1.17:
        </p>
        <p>
          If <InlineMath>{'\\alpha, \\beta, \\gamma \\in R'}</InlineMath> and <InlineMath>{'\\beta < \\gamma'}</InlineMath>,
          then <InlineMath>{'\\alpha + \\beta < \\alpha + \\gamma'}</InlineMath>.
        </p>
      </Callout>

      <Definition title="Step 6: Multiplication in R">
        <p className="mb-3">
          Multiplication is a little more bothersome than addition in the present context, since
          products of negative rationals are positive. For this reason we confine ourselves
          first to <InlineMath>{'R^+'}</InlineMath>, the set of all <InlineMath>{'\\alpha \\in R'}</InlineMath> with <InlineMath>{'\\alpha > 0^*'}</InlineMath>.
        </p>
        <p className="mb-3">
          If <InlineMath>{'\\alpha \\in R^+'}</InlineMath> and <InlineMath>{'\\beta \\in R^+'}</InlineMath>,
          we define <InlineMath>{'\\alpha\\beta'}</InlineMath> to be the set of
          all <InlineMath>{'p'}</InlineMath> such that <InlineMath>{'p \\leq rs'}</InlineMath> for some
          choice of <InlineMath>{'r \\in \\alpha'}</InlineMath>, <InlineMath>{'s \\in \\beta'}</InlineMath>,
          <InlineMath>{'r > 0'}</InlineMath>, <InlineMath>{'s > 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          We define <InlineMath>{'1^*'}</InlineMath> to be the set of all <InlineMath>{'q < 1'}</InlineMath>.
        </p>
        <p>
          Then the axioms (M) and (D) of Definition 1.12 hold, with <InlineMath>{'1^*'}</InlineMath> in
          the role of 1, and the second requirement of Definition 1.17 is satisfied.
        </p>
      </Definition>

      <Definition title="Step 7: Completing Multiplication">
        <p className="mb-3">
          We complete the definition of multiplication by setting <InlineMath>{'\\alpha 0^* = 0^*\\alpha = 0^*'}</InlineMath>,
          and by setting
        </p>
        <MathBlock>{'\\alpha\\beta = \\begin{cases} (-\\alpha)(-\\beta) & \\text{if } \\alpha < 0^*, \\beta < 0^* \\\\ -[(-\\alpha)\\beta] & \\text{if } \\alpha < 0^*, \\beta > 0^* \\\\ -[\\alpha \\cdot (-\\beta)] & \\text{if } \\alpha > 0^*, \\beta < 0^* \\end{cases}'}</MathBlock>
        <p className="mt-3">
          The products on the right were defined in Step 6.
        </p>
      </Definition>

      <Theorem
        title="Step 8: Q is a Subfield of R"
        proof={
          <>
            <p className="mb-3">
              We associate with each <InlineMath>{'r \\in Q'}</InlineMath> the
              set <InlineMath>{'r^*'}</InlineMath> which consists of all <InlineMath>{'p \\in Q'}</InlineMath> such
              that <InlineMath>{'p < r'}</InlineMath>. It is clear that each <InlineMath>{'r^*'}</InlineMath> is a cut;
              that is, <InlineMath>{'r^* \\in R'}</InlineMath>. These cuts satisfy the following relations:
            </p>
            <ul className="list-none space-y-1 mb-3">
              <li>(a) <InlineMath>{'r^* + s^* = (r + s)^*'}</InlineMath>,</li>
              <li>(b) <InlineMath>{'r^*s^* = (rs)^*'}</InlineMath>,</li>
              <li>(c) <InlineMath>{'r^* < s^*'}</InlineMath> if and only if <InlineMath>{'r < s'}</InlineMath>.</li>
            </ul>
            <p>
              To prove (a), choose <InlineMath>{'p \\in r^* + s^*'}</InlineMath>. Then <InlineMath>{'p = u + v'}</InlineMath>,
              where <InlineMath>{'u < r'}</InlineMath>, <InlineMath>{'v < s'}</InlineMath>.
              Hence <InlineMath>{'p < r + s'}</InlineMath>, which says that <InlineMath>{'p \\in (r + s)^*'}</InlineMath>.
              The proofs of (b) and (c) are similar.
            </p>
          </>
        }
      >
        <p>
          The replacement of the rational numbers <InlineMath>{'r'}</InlineMath> by the
          corresponding "rational cuts" <InlineMath>{'r^* \\in R'}</InlineMath> preserves sums, products,
          and order. This fact may be expressed by saying that the ordered
          field <InlineMath>{'Q'}</InlineMath> is <em>isomorphic</em> to the ordered
          field <InlineMath>{'Q^*'}</InlineMath> whose elements are the rational
          cuts. It is this identification of <InlineMath>{'Q'}</InlineMath> with <InlineMath>{'Q^*'}</InlineMath> which
          allows us to regard <InlineMath>{'Q'}</InlineMath> as a subfield of <InlineMath>{'R'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Step 9: Conclusion">
        <p className="mb-3">
          We saw in Step 8 that the replacement of the rational numbers <InlineMath>{'r'}</InlineMath> by
          the corresponding "rational cuts" <InlineMath>{'r^*'}</InlineMath> preserves sums, products, and order.
          This fact may be expressed by saying that the ordered field <InlineMath>{'Q'}</InlineMath> is
          isomorphic to the ordered field <InlineMath>{'Q^*'}</InlineMath> whose elements are the rational cuts.
        </p>
        <p>
          It is this identification of <InlineMath>{'Q'}</InlineMath> with <InlineMath>{'Q^*'}</InlineMath> which
          allows us to regard <InlineMath>{'Q'}</InlineMath> as a subfield of <InlineMath>{'R'}</InlineMath>.
          The second part of Theorem 1.19 is to be understood in terms of this identification.
          Note that the same symbol is used for corresponding elements of <InlineMath>{'Q'}</InlineMath> and <InlineMath>{'Q^*'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Real numbers can be constructed as Dedekind cuts of rational numbers</li>
        <li>A cut is a proper, nonempty subset of <InlineMath>{'Q'}</InlineMath> that is "downward closed" and has no largest element</li>
        <li>Order on <InlineMath>{'R'}</InlineMath> is defined by set inclusion</li>
        <li>The least-upper-bound property follows from taking unions of cuts</li>
        <li>Addition of cuts is defined via sums of elements</li>
        <li>Multiplication requires careful handling of signs</li>
        <li><InlineMath>{'Q'}</InlineMath> embeds into <InlineMath>{'R'}</InlineMath> via rational cuts <InlineMath>{'r^* = \\{p \\in Q : p < r\\}'}</InlineMath></li>
        <li>This construction proves the existence of an ordered field with the least-upper-bound property</li>
      </ul>
    </LessonLayout>
  );
}
