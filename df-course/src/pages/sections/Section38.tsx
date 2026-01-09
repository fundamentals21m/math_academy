import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2>Rings of Fractions (Localization)</h2>

      <p>
        The construction of rational numbers from integers generalizes to an important operation
        on commutative rings called <em>localization</em>. This allows us to "invert" certain
        elements, creating new rings where division by those elements becomes possible.
      </p>

      <h3>Multiplicative Sets</h3>

      <Definition title="Multiplicative Set">
        <p>
          A subset <InlineMath>S</InlineMath> of a commutative ring <InlineMath>R</InlineMath> is a
          <strong>multiplicative set</strong> (or <strong>multiplicatively closed</strong>) if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'1 \\in S'}</InlineMath></li>
          <li>If <InlineMath>{'a, b \\in S'}</InlineMath>, then <InlineMath>{'ab \\in S'}</InlineMath></li>
        </ol>
      </Definition>

      <Example title="Important Multiplicative Sets">
        <p>
          In a commutative ring <InlineMath>R</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{'S = R \\setminus \\{0\\}'}</InlineMath> when <InlineMath>R</InlineMath> is an integral domain</li>
          <li><InlineMath>{'S = \\{1, f, f^2, f^3, \\ldots\\}'}</InlineMath> for any <InlineMath>{'f \\in R'}</InlineMath></li>
          <li><InlineMath>{'S = R \\setminus P'}</InlineMath> for any prime ideal <InlineMath>P</InlineMath></li>
        </ul>
      </Example>

      <h3>Construction of the Localization</h3>

      <Definition title="Localization (Ring of Fractions)">
        <p>
          Let <InlineMath>S</InlineMath> be a multiplicative set in a commutative ring <InlineMath>R</InlineMath>.
          The <strong>localization</strong> of <InlineMath>R</InlineMath> at <InlineMath>S</InlineMath>,
          denoted <InlineMath>{'S^{-1}R'}</InlineMath> or <InlineMath>{'R[S^{-1}]'}</InlineMath>, is constructed as follows:
        </p>
        <p className="mt-2">
          On <InlineMath>{'R \\times S'}</InlineMath>, define an equivalence relation:
        </p>
        <MathBlock>
          {'(r, s) \\sim (r\', s\') \\iff \\exists u \\in S : u(rs\' - r\'s) = 0'}
        </MathBlock>
        <p className="mt-2">
          Write <InlineMath>{'\\frac{r}{s}'}</InlineMath> or <InlineMath>{'r/s'}</InlineMath> for the equivalence class of <InlineMath>{'(r, s)'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Operations on Fractions">
        <p>
          In <InlineMath>{'S^{-1}R'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\frac{r_1}{s_1} + \\frac{r_2}{s_2} = \\frac{r_1 s_2 + r_2 s_1}{s_1 s_2}'}
        </MathBlock>
        <MathBlock>
          {'\\frac{r_1}{s_1} \\cdot \\frac{r_2}{s_2} = \\frac{r_1 r_2}{s_1 s_2}'}
        </MathBlock>
        <p className="mt-2">
          These are well-defined and make <InlineMath>{'S^{-1}R'}</InlineMath> a commutative ring with unity <InlineMath>{'\\frac{1}{1}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Universal Property of Localization"
        proof={
          <>
            <p>
              Define <InlineMath>{'\\phi: S^{-1}R \\to T'}</InlineMath> by <InlineMath>{'\\phi(r/s) = f(r)f(s)^{-1}'}</InlineMath>.
              This is well-defined because if <InlineMath>{'r/s = r\'/s\''}</InlineMath>, then
              <InlineMath>{'u(rs\' - r\'s) = 0'}</InlineMath> for some <InlineMath>{'u \\in S'}</InlineMath>.
            </p>
            <p className="mt-2">
              Applying <InlineMath>f</InlineMath>: <InlineMath>{'f(u)(f(r)f(s\') - f(r\')f(s)) = 0'}</InlineMath>.
              Since <InlineMath>{'f(u)'}</InlineMath> is a unit, <InlineMath>{'f(r)f(s\') = f(r\')f(s)'}</InlineMath>,
              giving <InlineMath>{'f(r)f(s)^{-1} = f(r\')f(s\')^{-1}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The natural map <InlineMath>{'\\iota: R \\to S^{-1}R'}</InlineMath> given by <InlineMath>{'\\iota(r) = r/1'}</InlineMath>
          is a ring homomorphism. For any ring homomorphism <InlineMath>{'f: R \\to T'}</InlineMath> such that
          <InlineMath>f(s)</InlineMath> is a unit in <InlineMath>T</InlineMath> for all <InlineMath>{'s \\in S'}</InlineMath>,
          there exists a unique homomorphism <InlineMath>{'\\phi: S^{-1}R \\to T'}</InlineMath> with <InlineMath>{'\\phi \\circ \\iota = f'}</InlineMath>.
        </p>
      </Theorem>

      <h3>The Field of Fractions</h3>

      <Example title="Field of Fractions of an Integral Domain">
        <p>
          If <InlineMath>R</InlineMath> is an integral domain and <InlineMath>{'S = R \\setminus \\{0\\}'}</InlineMath>,
          then <InlineMath>{'S^{-1}R'}</InlineMath> is a field, called the <strong>field of fractions</strong>
          of <InlineMath>R</InlineMath>, denoted <InlineMath>{'\\text{Frac}(R)'}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{'\\text{Frac}(\\mathbb{Z}) = \\mathbb{Q}'}</InlineMath>
        </p>
        <p className="mt-2">
          <InlineMath>{'\\text{Frac}(F[x]) = F(x)'}</InlineMath> (rational functions over <InlineMath>F</InlineMath>)
        </p>
      </Example>

      <Theorem title="Field of Fractions is Smallest"
        proof={
          <>
            <p>
              If <InlineMath>R</InlineMath> embeds in a field <InlineMath>K</InlineMath>, then every nonzero
              element of <InlineMath>R</InlineMath> has an inverse in <InlineMath>K</InlineMath>. By the
              universal property, there is a unique homomorphism <InlineMath>{'\\text{Frac}(R) \\to K'}</InlineMath>
              extending the embedding.
            </p>
            <p className="mt-2">
              This homomorphism is injective (fields have no nontrivial ideals), so <InlineMath>{'\\text{Frac}(R)'}</InlineMath>
              embeds in <InlineMath>K</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The field of fractions <InlineMath>{'\\text{Frac}(R)'}</InlineMath> is the smallest field containing
          <InlineMath>R</InlineMath>: any field containing <InlineMath>R</InlineMath> also contains an
          isomorphic copy of <InlineMath>{'\\text{Frac}(R)'}</InlineMath>.
        </p>
      </Theorem>

      <h3>Localization at a Prime Ideal</h3>

      <Definition title="Localization at a Prime">
        <p>
          For a prime ideal <InlineMath>P</InlineMath> of <InlineMath>R</InlineMath>, the localization at
          <InlineMath>P</InlineMath> is
        </p>
        <MathBlock>
          {'R_P = (R \\setminus P)^{-1}R'}
        </MathBlock>
        <p className="mt-2">
          This inverts all elements outside <InlineMath>P</InlineMath>.
        </p>
      </Definition>

      <Theorem title="R_P is a Local Ring"
        proof={
          <>
            <p>
              The unique maximal ideal of <InlineMath>{'R_P'}</InlineMath> is <InlineMath>{'PR_P = \\{r/s : r \\in P, s \\notin P\\}'}</InlineMath>.
            </p>
            <p className="mt-2">
              If <InlineMath>{'r/s \\notin PR_P'}</InlineMath>, then <InlineMath>{'r \\notin P'}</InlineMath>,
              so <InlineMath>{'r/s'}</InlineMath> has inverse <InlineMath>{'s/r'}</InlineMath> in <InlineMath>{'R_P'}</InlineMath>.
              Thus elements outside <InlineMath>{'PR_P'}</InlineMath> are units.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'R_P'}</InlineMath> is a <strong>local ring</strong>: it has a unique maximal ideal,
          namely <InlineMath>{'PR_P'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Localization of Z at (p)">
        <p>
          For a prime <InlineMath>p</InlineMath>, the localization <InlineMath>{'\\mathbb{Z}_{(p)}'}</InlineMath>
          consists of fractions <InlineMath>{'a/b'}</InlineMath> where <InlineMath>{'p \\nmid b'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\mathbb{Z}_{(p)} = \\left\\{\\frac{a}{b} \\in \\mathbb{Q} : \\gcd(b, p) = 1\\right\\}'}
        </MathBlock>
        <p className="mt-2">
          The unique maximal ideal is <InlineMath>{'p\\mathbb{Z}_{(p)}'}</InlineMath>, consisting of
          fractions whose numerator is divisible by <InlineMath>p</InlineMath>.
        </p>
      </Example>

      <h3>Localization Away from an Element</h3>

      <Definition title="Localization at f">
        <p>
          For <InlineMath>{'f \\in R'}</InlineMath>, define
        </p>
        <MathBlock>
          {'R_f = R[1/f] = S^{-1}R \\quad \\text{where } S = \\{1, f, f^2, f^3, \\ldots\\}'}
        </MathBlock>
        <p className="mt-2">
          This inverts powers of <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <Example title="Z[1/2]">
        <p>
          <InlineMath>{'\\mathbb{Z}[1/2]'}</InlineMath> consists of fractions with denominators that are powers of 2:
        </p>
        <MathBlock>
          {'\\mathbb{Z}[1/2] = \\left\\{\\frac{a}{2^n} : a \\in \\mathbb{Z}, n \\geq 0\\right\\}'}
        </MathBlock>
        <p className="mt-2">
          This is the ring of "dyadic rationals."
        </p>
      </Example>

      <h3>Properties of Localization</h3>

      <Theorem title="Localization is Exact"
        proof={
          <>
            <p>
              The key is that <InlineMath>{'S^{-1}'}</InlineMath> preserves exact sequences: if
              <InlineMath>{'0 \\to M\' \\to M \\to M\'\' \\to 0'}</InlineMath> is exact, then so is
              <InlineMath>{'0 \\to S^{-1}M\' \\to S^{-1}M \\to S^{-1}M\'\' \\to 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              This is because <InlineMath>{'S^{-1}R'}</InlineMath> is a "flat" <InlineMath>R</InlineMath>-algebra.
            </p>
          </>
        }
      >
        <p>
          Localization preserves many ring-theoretic properties:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>If <InlineMath>R</InlineMath> is an integral domain and <InlineMath>{'0 \\notin S'}</InlineMath>, so is <InlineMath>{'S^{-1}R'}</InlineMath></li>
          <li>Localization commutes with taking quotients</li>
          <li>Localization is a flat functor (preserves exact sequences)</li>
        </ul>
      </Theorem>

      <Theorem title="Ideals in Localization"
        proof={
          <>
            <p>
              The extension <InlineMath>{'I^e = S^{-1}I'}</InlineMath> consists of <InlineMath>{'r/s'}</InlineMath>
              where <InlineMath>{'r \\in I'}</InlineMath>. The contraction <InlineMath>{'\\iota^{-1}(J)'}</InlineMath>
              is the preimage in <InlineMath>R</InlineMath>.
            </p>
            <p className="mt-2">
              The bijection follows from showing <InlineMath>{'(I^e)^c = I'}</InlineMath> when <InlineMath>{'I \\cap S = \\emptyset'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          There is a bijection between:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Ideals of <InlineMath>{'S^{-1}R'}</InlineMath></li>
          <li>Ideals of <InlineMath>R</InlineMath> that are disjoint from <InlineMath>S</InlineMath></li>
        </ul>
        <p className="mt-2">
          Prime ideals in <InlineMath>{'S^{-1}R'}</InlineMath> correspond to prime ideals of <InlineMath>R</InlineMath>
          disjoint from <InlineMath>S</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Geometric Interpretation:</strong> In algebraic geometry, <InlineMath>{'\\text{Spec}(R)'}</InlineMath>
        is the set of prime ideals of <InlineMath>R</InlineMath>. Localization at a prime <InlineMath>P</InlineMath>
        corresponds to "zooming in" on the point <InlineMath>P</InlineMath>. The local ring <InlineMath>{'R_P'}</InlineMath>
        captures the local behavior of functions near that point.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Localization <InlineMath>{'S^{-1}R'}</InlineMath> inverts elements of a
        multiplicative set <InlineMath>S</InlineMath>, creating fractions <InlineMath>r/s</InlineMath>.
        The field of fractions of an integral domain inverts all nonzero elements. Localization at a
        prime ideal <InlineMath>P</InlineMath> produces a local ring with unique maximal ideal. These
        constructions are fundamental in commutative algebra and algebraic geometry.
      </Callout>
    </LessonLayout>
  );
}
