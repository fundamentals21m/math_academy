import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2>Fermat's Last Theorem</h2>

      <p>
        In the margin of his copy of Diophantus's <em>Arithmetica</em>,
        Pierre de Fermat wrote around 1637 that he had discovered "a truly
        marvelous proof" of a remarkable claim—a proof that the margin was
        too narrow to contain. This marginal note launched a 358-year quest
        that transformed mathematics.
      </p>

      <Theorem title="Fermat's Last Theorem">
        <p>The equation</p>
        <MathBlock>
          {`x^n + y^n = z^n`}
        </MathBlock>
        <p className="mt-2">
          has no positive integer solutions for any integer{' '}
          <InlineMath>{`n > 2`}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>The Famous Margin:</strong> "I have discovered a truly
        marvelous demonstration of this proposition which this margin is
        too narrow to contain." Historians doubt Fermat had a valid proof—
        modern techniques required to prove it weren't developed until
        the 20th century.
      </Callout>

      <h3>Pythagorean Triples</h3>

      <p>
        The case <InlineMath>n = 2</InlineMath> is different—it has infinitely
        many solutions:
      </p>

      <Example title="Pythagorean Triples">
        <p>Solutions to <InlineMath>{`x^2 + y^2 = z^2`}</InlineMath>:</p>
        <ul className="list-disc list-inside mt-2">
          <li><InlineMath>{`3^2 + 4^2 = 5^2`}</InlineMath></li>
          <li><InlineMath>{`5^2 + 12^2 = 13^2`}</InlineMath></li>
          <li><InlineMath>{`8^2 + 15^2 = 17^2`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          All primitive solutions (with <InlineMath>{`\\gcd(x,y,z) = 1`}</InlineMath>)
          have the form:
        </p>
        <MathBlock>
          {`x = m^2 - n^2, \\quad y = 2mn, \\quad z = m^2 + n^2`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          for positive integers <InlineMath>{`m > n`}</InlineMath> with{' '}
          <InlineMath>{`\\gcd(m,n) = 1`}</InlineMath> and opposite parity.
        </p>
      </Example>

      <h3>Early Progress</h3>

      <p>
        Mathematicians slowly chipped away at special cases:
      </p>

      <Theorem title="Case n = 4 (Fermat, ~1640)">
        <p>
          Fermat himself proved there are no solutions for <InlineMath>n = 4</InlineMath>{' '}
          using his method of infinite descent—if a solution existed, a smaller
          one would too, leading to an impossible infinite regression.
        </p>
      </Theorem>

      <Theorem title="Case n = 3 (Euler, 1770)">
        <p>
          Euler proved the case <InlineMath>n = 3</InlineMath>, though his
          original proof had a gap that was later filled. He used the
          factorization in <InlineMath>{`\\mathbb{Z}[\\omega]`}</InlineMath>{' '}
          where <InlineMath>{`\\omega = e^{2\\pi i/3}`}</InlineMath>.
        </p>
      </Theorem>

      <p>
        Through the 19th century, more cases were proven:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li><strong>n = 5:</strong> Dirichlet and Legendre (1825)</li>
        <li><strong>n = 7:</strong> Lamé (1839)</li>
        <li><strong>n = 14:</strong> Dirichlet (1832)</li>
      </ul>

      <h3>Kummer's Breakthrough</h3>

      <p>
        Ernst Kummer made the most significant 19th-century progress. He
        realized that the natural approach—factoring in{' '}
        <InlineMath>{`\\mathbb{Z}[\\zeta_n]`}</InlineMath> where{' '}
        <InlineMath>{`\\zeta_n = e^{2\\pi i/n}`}</InlineMath>—failed because
        unique factorization doesn't always hold:
      </p>

      <Callout type="warning">
        <strong>The Failure of Unique Factorization:</strong> In{' '}
        <InlineMath>{`\\mathbb{Z}[\\sqrt{-5}]`}</InlineMath>, the number 6
        factors two ways: <InlineMath>{`6 = 2 \\cdot 3 = (1+\\sqrt{-5})(1-\\sqrt{-5})`}</InlineMath>.
        None of these factors are "units" times each other.
      </Callout>

      <p>
        Kummer invented "ideal numbers" to restore unique factorization at
        the level of ideals:
      </p>

      <Theorem title="Kummer's Theorem (1847)">
        <p>
          Fermat's Last Theorem holds for all <strong>regular primes</strong>{' '}
          <InlineMath>p</InlineMath>—those for which <InlineMath>p</InlineMath>{' '}
          does not divide the class number of{' '}
          <InlineMath>{`\\mathbb{Q}(\\zeta_p)`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          This covered all primes up to 100 except 37, 59, and 67, which
          Kummer handled with additional arguments.
        </p>
      </Theorem>

      <h3>The 20th Century</h3>

      <p>
        By the mid-20th century, computers had verified FLT for all exponents
        up to millions, but no general proof existed. The breakthrough came
        from an unexpected direction: elliptic curves.
      </p>

      <Definition title="Elliptic Curve">
        <p>An elliptic curve over <InlineMath>{'\\mathbb{Q}'}</InlineMath> has the form:</p>
        <MathBlock>
          {`y^2 = x^3 + ax + b`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>a, b</InlineMath> are rational and the curve
          is non-singular.
        </p>
      </Definition>

      <h3>The Taniyama-Shimura-Weil Conjecture</h3>

      <p>
        In the 1950s, Yutaka Taniyama and Goro Shimura conjectured that every
        elliptic curve over <InlineMath>{'\\mathbb{Q}'}</InlineMath> is "modular"—
        connected to modular forms, which are special functions on the
        complex upper half-plane.
      </p>

      <p>
        In 1984, Gerhard Frey had a stunning insight:
      </p>

      <Theorem title="Frey's Observation">
        <p>
          If <InlineMath>{`a^p + b^p = c^p`}</InlineMath> were a counterexample
          to FLT, the elliptic curve:
        </p>
        <MathBlock>
          {`y^2 = x(x - a^p)(x + b^p)`}
        </MathBlock>
        <p className="mt-2">
          would have such strange properties that it couldn't be modular.
        </p>
      </Theorem>

      <p>
        Ken Ribet proved in 1986 that Frey's curve would indeed violate the
        Taniyama-Shimura-Weil conjecture:
      </p>

      <Callout type="note">
        <strong>The Reduction:</strong> Ribet showed that proving TSW (for
        a specific class of elliptic curves) would prove FLT. This transformed
        the problem from Diophantine equations to the theory of modular forms.
      </Callout>

      <h3>Wiles's Proof</h3>

      <p>
        Andrew Wiles, who had dreamed of proving FLT since childhood, worked
        in secret for seven years. In June 1993, he announced his proof of
        (enough of) the Taniyama-Shimura-Weil conjecture:
      </p>

      <Theorem title="Wiles's Theorem (1995)">
        <p>
          Every semistable elliptic curve over <InlineMath>{'\\mathbb{Q}'}</InlineMath>{' '}
          is modular.
        </p>
        <p className="mt-2 text-dark-400">
          Combined with Ribet's work, this implies Fermat's Last Theorem.
        </p>
      </Theorem>

      <Example title="The Proof Structure">
        <p>Wiles's proof involved:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Galois representations attached to elliptic curves</li>
          <li>Modular forms and Hecke algebras</li>
          <li>Deformation theory of Galois representations</li>
          <li>The Euler system technique (completed with Richard Taylor)</li>
        </ul>
        <p className="mt-2">
          The final paper was over 100 pages of deep modern mathematics.
        </p>
      </Example>

      <Callout type="info">
        <strong>The Gap:</strong> When Wiles's proof was checked, a gap was
        found. He and Richard Taylor spent over a year finding a fix, finally
        succeeding in September 1994. The corrected proof was published in
        1995 in the <em>Annals of Mathematics</em>.
      </Callout>

      <h3>Legacy</h3>

      <p>
        The proof of Fermat's Last Theorem was not just an ending but a
        beginning:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Modularity Theorem:</strong> The full TSW conjecture was
          proved by Breuil, Conrad, Diamond, and Taylor in 2001.
        </li>
        <li>
          <strong>New techniques:</strong> Wiles's methods opened new avenues
          in arithmetic geometry.
        </li>
        <li>
          <strong>Langlands Program:</strong> The proof is a cornerstone of
          this vast program connecting number theory to representation theory.
        </li>
        <li>
          <strong>Public interest:</strong> FLT's proof showed the world that
          pure mathematics can captivate popular imagination.
        </li>
      </ul>

      <SectionQuiz sectionId={43} questions={quizMap[43] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
