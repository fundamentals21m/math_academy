import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common';
import { MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Finite Fields</h2>

      <p>
        Finite fields are algebraic structures that play a fundamental role in cryptography.
        They provide the mathematical foundation for many cryptographic systems, including
        AES, elliptic curve cryptography, and error-correcting codes.
      </p>

      <h3>Basic Definitions</h3>

      <Definition title="Field">
        A <strong>field</strong> is a set <em>F</em> with two operations (addition and multiplication)
        satisfying:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><em>(F, +)</em> is an abelian group with identity 0</li>
          <li><em>(F \ {'{0}'}, ·)</em> is an abelian group with identity 1</li>
          <li>Distributivity: <MathBlock math="a(b + c) = ab + ac" inline /></li>
        </ul>
      </Definition>

      <Definition title="Finite Field">
        A <strong>finite field</strong> (or <strong>Galois field</strong>) is a field with finitely
        many elements. The number of elements is called the <strong>order</strong> of the field.
      </Definition>

      <Theorem title="Classification of Finite Fields"
        proof={
          <>
            <p><strong>(1) Order is a prime power:</strong> Let <em>F</em> be a finite field. Its characteristic <em>p</em> must be prime (if <MathBlock math="p = ab" inline /> with <MathBlock math="a, b > 1" inline />, then <MathBlock math="a \cdot b = 0" inline /> in <em>F</em> implies <MathBlock math="a = 0" inline /> or <MathBlock math="b = 0" inline /> by field properties, contradiction).</p>
            <p>The prime field <MathBlock math="\mathbb{F}_p" inline /> is contained in <em>F</em>. Thus <em>F</em> is a vector space over <MathBlock math="\mathbb{F}_p" inline />.</p>
            <p>If <MathBlock math="\dim_{\mathbb{F}_p}(F) = n" inline />, then <MathBlock math="|F| = p^n" inline /> (each of <em>n</em> coordinates can take <em>p</em> values).</p>
            <p><strong>(2) Existence:</strong> Consider the polynomial <MathBlock math="x^{p^n} - x" inline /> over <MathBlock math="\mathbb{F}_p" inline />. Its splitting field has exactly <MathBlock math="p^n" inline /> elements (the roots of this polynomial), and these elements form a field under the inherited operations.</p>
            <p><strong>(2) Uniqueness:</strong> Every element <em>a</em> of a field with <MathBlock math="p^n" inline /> elements satisfies <MathBlock math="a^{p^n} = a" inline /> (by Lagrange's theorem applied to the multiplicative group). Thus any field of order <MathBlock math="p^n" inline /> is a splitting field for <MathBlock math="x^{p^n} - x" inline />, and splitting fields are unique up to isomorphism.</p>
            <p><strong>(3)</strong> The map <MathBlock math="\mathbb{Z} \to F" inline /> sending <MathBlock math="1 \mapsto 1_F" inline /> has kernel <MathBlock math="p\mathbb{Z}" inline />, inducing an isomorphism <MathBlock math="\mathbb{Z}/p\mathbb{Z} \cong \mathbb{F}_p" inline />.</p>
          </>
        }
      >
        <ol className="list-decimal list-inside space-y-2">
          <li>The order of any finite field is a prime power <MathBlock math="q = p^n" inline /></li>
          <li>For every prime power <MathBlock math="q = p^n" inline />, there exists a unique (up to isomorphism)
              finite field of order <em>q</em>, denoted <MathBlock math="\mathbb{F}_q" inline /> or <MathBlock math="GF(q)" inline /></li>
          <li><MathBlock math="\mathbb{F}_p \cong \mathbb{Z}/p\mathbb{Z}" inline /> for prime <em>p</em></li>
        </ol>
      </Theorem>

      <h3>The Prime Field</h3>

      <p>
        The simplest finite fields are <MathBlock math="\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}" inline />{' '}
        for prime <em>p</em>. These are the integers modulo <em>p</em> with standard addition and
        multiplication.
      </p>

      <Example title="Arithmetic in F₅">
        <p>In <MathBlock math="\mathbb{F}_5 = \{0, 1, 2, 3, 4\}" inline />:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><MathBlock math="3 + 4 = 7 \equiv 2 \pmod{5}" inline /></li>
          <li><MathBlock math="3 \times 4 = 12 \equiv 2 \pmod{5}" inline /></li>
          <li><MathBlock math="3^{-1} = 2" inline /> since <MathBlock math="3 \times 2 = 6 \equiv 1 \pmod{5}" inline /></li>
        </ul>
      </Example>

      <h3>Extension Fields</h3>

      <p>
        For <MathBlock math="q = p^n" inline /> with <MathBlock math="n > 1" inline />, we construct{' '}
        <MathBlock math="\mathbb{F}_q" inline /> using irreducible polynomials.
      </p>

      <Definition title="Irreducible Polynomial">
        A polynomial <MathBlock math="f(x) \in \mathbb{F}_p[x]" inline /> is <strong>irreducible</strong>{' '}
        if it cannot be factored as a product of polynomials of lower degree over <MathBlock math="\mathbb{F}_p" inline />.
      </Definition>

      <Theorem title="Extension Field Construction"
        proof={
          <>
            <p>Let <MathBlock math="f(x) \in \mathbb{F}_p[x]" inline /> be irreducible of degree <em>n</em>. We show <MathBlock math="R = \mathbb{F}_p[x]/(f(x))" inline /> is a field with <MathBlock math="p^n" inline /> elements.</p>
            <p><strong>R is a field:</strong> Since <MathBlock math="f(x)" inline /> is irreducible over <MathBlock math="\mathbb{F}_p" inline />, the ideal <MathBlock math="(f(x))" inline /> is maximal in the principal ideal domain <MathBlock math="\mathbb{F}_p[x]" inline />. Quotients by maximal ideals are fields.</p>
            <p><strong>Elements of R:</strong> By the division algorithm, every polynomial <MathBlock math="g(x) \in \mathbb{F}_p[x]" inline /> can be written as:</p>
            <MathBlock math="g(x) = f(x) \cdot q(x) + r(x), \quad \deg(r) < n" />
            <p>Thus each coset in <em>R</em> has a unique representative of degree less than <em>n</em>:</p>
            <MathBlock math="r(x) = a_0 + a_1 x + \cdots + a_{n-1}x^{n-1}, \quad a_i \in \mathbb{F}_p" />
            <p><strong>Counting elements:</strong> There are <em>p</em> choices for each of the <em>n</em> coefficients, giving <MathBlock math="|R| = p^n" inline /> elements.</p>
            <p><strong>Isomorphism:</strong> By uniqueness of finite fields, <MathBlock math="R \cong \mathbb{F}_{p^n}" inline />.</p>
            <p>If <MathBlock math="\alpha = x + (f(x))" inline /> is the image of <em>x</em> in <em>R</em>, then <MathBlock math="f(\alpha) = 0" inline /> in <em>R</em>, and we can identify <MathBlock math="R = \mathbb{F}_p(\alpha)" inline />.</p>
          </>
        }
      >
        If <MathBlock math="f(x)" inline /> is an irreducible polynomial of degree <em>n</em> over{' '}
        <MathBlock math="\mathbb{F}_p" inline />, then:
        <MathBlock math="\mathbb{F}_{p^n} \cong \mathbb{F}_p[x]/(f(x))" />
        Elements are polynomials of degree less than <em>n</em> with coefficients in <MathBlock math="\mathbb{F}_p" inline />.
      </Theorem>

      <Example title="Constructing F₄">
        <p>
          Let <MathBlock math="f(x) = x^2 + x + 1" inline />, which is irreducible over{' '}
          <MathBlock math="\mathbb{F}_2" inline />. Then:
        </p>
        <MathBlock math="\mathbb{F}_4 = \{0, 1, \alpha, \alpha + 1\}" />
        <p className="mt-2">where <MathBlock math="\alpha^2 = \alpha + 1" inline /> (using <MathBlock math="\alpha^2 + \alpha + 1 = 0" inline />).</p>
        <p className="mt-2">Multiplication table (partial):</p>
        <ul className="list-disc list-inside mt-2">
          <li><MathBlock math="\alpha \cdot \alpha = \alpha^2 = \alpha + 1" inline /></li>
          <li><MathBlock math="\alpha \cdot (\alpha + 1) = \alpha^2 + \alpha = (\alpha + 1) + \alpha = 1" inline /></li>
        </ul>
      </Example>

      <h3>The Multiplicative Group</h3>

      <Theorem title="Cyclic Multiplicative Group"
        proof={
          <>
            <p>Let <MathBlock math="G = \mathbb{F}_q^*" inline />, a finite abelian group of order <MathBlock math="q - 1" inline />.</p>
            <p>We prove <em>G</em> is cyclic by showing it has at most <em>d</em> elements of order dividing <em>d</em> for each <MathBlock math="d \mid (q-1)" inline />.</p>
            <p><strong>Key observation:</strong> In a field, the polynomial <MathBlock math="x^d - 1" inline /> has at most <em>d</em> roots. Elements <MathBlock math="g \in G" inline /> with <MathBlock math="g^d = 1" inline /> are exactly the roots of <MathBlock math="x^d - 1" inline />.</p>
            <p>Let <MathBlock math="\psi(d)" inline /> denote the number of elements of order exactly <em>d</em> in <em>G</em>. We have:</p>
            <MathBlock math="\sum_{e \mid d} \psi(e) \leq d" />
            <p>since the left side counts elements whose order divides <em>d</em>.</p>
            <p>By Mobius inversion and the fact that <MathBlock math="\sum_{e \mid d} \varphi(e) = d" inline />, if we had <MathBlock math="\psi(d) < \varphi(d)" inline /> for some <em>d</em>, summing over all divisors of <MathBlock math="q-1" inline /> would give:</p>
            <MathBlock math="|G| = \sum_{d \mid (q-1)} \psi(d) < \sum_{d \mid (q-1)} \varphi(d) = q - 1 = |G|" />
            <p>a contradiction. Therefore <MathBlock math="\psi(d) = \varphi(d)" inline /> for all <MathBlock math="d \mid (q-1)" inline />.</p>
            <p>In particular, <MathBlock math="\psi(q-1) = \varphi(q-1) \geq 1" inline />, so there exists an element of order <MathBlock math="q - 1" inline />, proving <em>G</em> is cyclic.</p>
          </>
        }
      >
        The multiplicative group <MathBlock math="\mathbb{F}_q^* = \mathbb{F}_q \setminus \{0\}" inline />{' '}
        is cyclic of order <MathBlock math="q - 1" inline />.
      </Theorem>

      <Definition title="Primitive Element">
        A <strong>primitive element</strong> (or <strong>generator</strong>) of <MathBlock math="\mathbb{F}_q" inline />{' '}
        is an element <em>g</em> such that <MathBlock math="\mathbb{F}_q^* = \{g^0, g^1, g^2, \ldots, g^{q-2}\}" inline />.
      </Definition>

      <Example title="Primitive Element of F₇">
        <p>Find a primitive element of <MathBlock math="\mathbb{F}_7" inline />.</p>
        <p className="mt-2"><strong>Solution:</strong> Check powers of 3:</p>
        <MathBlock math="3^1 = 3, \quad 3^2 = 2, \quad 3^3 = 6, \quad 3^4 = 4, \quad 3^5 = 5, \quad 3^6 = 1" />
        <p>Since 3 generates all nonzero elements, <MathBlock math="g = 3" inline /> is a primitive element.</p>
      </Example>

      <Callout type="info">
        <strong>Finding Primitive Elements:</strong> About <MathBlock math="\varphi(q-1)/(q-1)" inline />{' '}
        of all nonzero elements are primitive. For large <em>q</em>, randomly chosen elements are
        primitive with high probability.
      </Callout>

      <h3>Subfields</h3>

      <Theorem title="Subfield Criterion"
        proof={
          <>
            <p><strong>Necessity (if <MathBlock math="\mathbb{F}_{p^m} \subseteq \mathbb{F}_{p^n}" inline />, then <MathBlock math="m \mid n" inline />):</strong></p>
            <p>If <MathBlock math="\mathbb{F}_{p^m}" inline /> is a subfield of <MathBlock math="\mathbb{F}_{p^n}" inline />, then <MathBlock math="\mathbb{F}_{p^n}" inline /> is a vector space over <MathBlock math="\mathbb{F}_{p^m}" inline />.</p>
            <p>Let <MathBlock math="k = \dim_{\mathbb{F}_{p^m}}(\mathbb{F}_{p^n})" inline />. Then:</p>
            <MathBlock math="p^n = |\mathbb{F}_{p^n}| = |\mathbb{F}_{p^m}|^k = (p^m)^k = p^{mk}" />
            <p>Therefore <MathBlock math="n = mk" inline />, so <MathBlock math="m \mid n" inline />.</p>
            <p><strong>Sufficiency (if <MathBlock math="m \mid n" inline />, then <MathBlock math="\mathbb{F}_{p^m} \subseteq \mathbb{F}_{p^n}" inline />):</strong></p>
            <p>If <MathBlock math="m \mid n" inline />, write <MathBlock math="n = mk" inline />. Then <MathBlock math="(p^m - 1) \mid (p^n - 1)" inline /> because:</p>
            <MathBlock math="p^n - 1 = (p^m)^k - 1 = (p^m - 1)(p^{m(k-1)} + p^{m(k-2)} + \cdots + p^m + 1)" />
            <p>Elements of <MathBlock math="\mathbb{F}_{p^m}" inline /> are roots of <MathBlock math="x^{p^m} - x" inline />. Since <MathBlock math="(p^m - 1) \mid (p^n - 1)" inline />, we have <MathBlock math="(x^{p^m} - x) \mid (x^{p^n} - x)" inline /> in <MathBlock math="\mathbb{F}_p[x]" inline />.</p>
            <p>Since <MathBlock math="\mathbb{F}_{p^n}" inline /> consists of all roots of <MathBlock math="x^{p^n} - x" inline />, it contains all roots of <MathBlock math="x^{p^m} - x" inline />, namely <MathBlock math="\mathbb{F}_{p^m}" inline />.</p>
            <p><strong>Characterization:</strong> An element <MathBlock math="x \in \mathbb{F}_{p^n}" inline /> lies in <MathBlock math="\mathbb{F}_{p^m}" inline /> iff it satisfies <MathBlock math="x^{p^m} = x" inline />, by definition of <MathBlock math="\mathbb{F}_{p^m}" inline /> as the splitting field of <MathBlock math="x^{p^m} - x" inline />.</p>
          </>
        }
      >
        <MathBlock math="\mathbb{F}_{p^m}" inline /> is a subfield of <MathBlock math="\mathbb{F}_{p^n}" inline />{' '}
        if and only if <MathBlock math="m \mid n" inline />. In this case, elements of{' '}
        <MathBlock math="\mathbb{F}_{p^m}" inline /> are exactly those <MathBlock math="x \in \mathbb{F}_{p^n}" inline />{' '}
        satisfying <MathBlock math="x^{p^m} = x" inline />.
      </Theorem>

      <h3>Frobenius Automorphism</h3>

      <Definition title="Frobenius Map">
        The <strong>Frobenius automorphism</strong> of <MathBlock math="\mathbb{F}_{p^n}" inline />{' '}
        is the map <MathBlock math="\sigma: x \mapsto x^p" inline />. It generates the Galois group{' '}
        <MathBlock math="\text{Gal}(\mathbb{F}_{p^n}/\mathbb{F}_p)" inline />, which is cyclic of order <em>n</em>.
      </Definition>

      <h3>Cryptographic Applications</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-4">
        <h4 className="text-lg font-semibold text-primary-400 mb-3">Applications in Cryptography</h4>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>AES:</strong> Uses <MathBlock math="\mathbb{F}_{2^8}" inline /> for the S-box and MixColumns</li>
          <li><strong>Elliptic Curves:</strong> Curves over <MathBlock math="\mathbb{F}_p" inline /> or <MathBlock math="\mathbb{F}_{2^n}" inline /></li>
          <li><strong>Secret Sharing:</strong> Shamir's scheme uses polynomial interpolation over <MathBlock math="\mathbb{F}_p" inline /></li>
          <li><strong>Error Correction:</strong> Reed-Solomon codes use <MathBlock math="\mathbb{F}_{2^n}" inline /></li>
        </ul>
      </div>

      <Callout type="success">
        <strong>Why Finite Fields?</strong> Finite fields provide exact arithmetic (no rounding errors),
        efficient implementation, and rich algebraic structure - perfect for cryptographic applications.
      </Callout>
    </LessonLayout>
  );
}
