import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section29Questions } from '../../data/quizzes';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2 className="text-2xl font-semibold mb-4">The Eighteenth Century</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The eighteenth century was an age of prodigious mathematical activity.
        Great mathematicians like <strong>Taylor</strong>, <strong>Maclaurin</strong>,
        <strong> de Moivre</strong>, <strong>Euler</strong>, <strong>Lagrange</strong>,
        <strong> Laplace</strong>, and <strong>Legendre</strong> expanded the frontiers
        of analysis, number theory, and mathematical physics.
      </p>

      {/* Taylor and Maclaurin */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Taylor and Maclaurin</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Brook Taylor (1685–1731)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              An ardent admirer of Newton who discovered the <strong>Taylor series</strong>
              in 1715:
            </p>
            <MathBlock>{`f(a+x) = f(a) + xf'(a) + \\frac{x^2}{2!}f''(a) + \\cdots`}</MathBlock>
          </div>
        </Card>
        <Card>
          <CardHeader>Colin Maclaurin (1698–1746)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              A Scottish mathematician best known for the special case{' '}
              <InlineMath>{`a = 0`}</InlineMath> of Taylor's series, published
              in his <em>Treatise of Fluxions</em> (1742):
            </p>
            <MathBlock>{`f(x) = f(0) + xf'(0) + \\frac{x^2}{2!}f''(0) + \\cdots`}</MathBlock>
          </div>
        </Card>
      </CardGrid>

      {/* De Moivre */}
      <Card className="mb-6 mt-4">
        <CardHeader>Abraham de Moivre (1667–1754)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Born in France but lived in England. He published an important book
            on probability called the <em>Doctrine of Chances</em> and is famous
            for his formula:
          </p>
          <MathBlock>{`(\\cos x + i \\sin x)^n = \\cos nx + i \\sin nx`}</MathBlock>
          <p className="text-sm">
            Despite letters of recommendation from both Newton and Leibniz, de Moivre
            was never given a proper job in mathematics. He earned a meager living
            by private tutoring and answering gamblers' questions on probability.
          </p>
          <p className="text-sm italic">
            Legend says that as he approached the end of his life, de Moivre slept
            fifteen minutes longer each day. When he reached a full twenty-four
            hours, he died.
          </p>
        </div>
      </Card>

      {/* Euler */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Leonhard Euler (1707–1783)</h3>

      <p className="text-dark-200 mb-4">
        Although Swiss, Euler spent part of his professional life in Berlin and most
        of it in St. Petersburg. Towards the end of his life he became <strong>blind</strong>,
        but this did not slow down his mathematical output. It has been said that
        <em> Euler picked all the raisins out of the mathematical cake</em>. His collected
        works run to about <strong>75 volumes</strong>.
      </p>

      <Callout type="theorem" title="Some of Euler's Results">
        <ol className="space-y-3">
          <li>
            <strong>Euler's Formula for Polyhedra:</strong> If a convex polyhedron has{' '}
            <InlineMath>{`V`}</InlineMath> vertices, <InlineMath>{`F`}</InlineMath> faces,
            and <InlineMath>{`E`}</InlineMath> edges, then{' '}
            <InlineMath>{`V + F - E = 2`}</InlineMath>
          </li>
          <li>
            <strong>Euler's Identity:</strong>{' '}
            <InlineMath>{`e^{i\\pi} = -1`}</InlineMath>, where{' '}
            <InlineMath>{`e = \\lim_{n \\to \\infty}(1 + 1/n)^n`}</InlineMath>
          </li>
          <li>
            <strong>Basel Problem:</strong>{' '}
            <InlineMath>{`\\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{3^2} + \\cdots = \\frac{\\pi^2}{6}`}</InlineMath>
          </li>
          <li>
            <strong>Perfect Numbers:</strong> Every even perfect number has the form{' '}
            <InlineMath>{`2^{n-1}(2^n - 1)`}</InlineMath> where{' '}
            <InlineMath>{`2^n - 1`}</InlineMath> is prime
          </li>
          <li>
            <strong>Euler's Totient Theorem:</strong> If <InlineMath>{`\\gcd(a, n) = 1`}</InlineMath>,
            then <InlineMath>{`a^{\\phi(n)} \\equiv 1 \\pmod{n}`}</InlineMath> (generalizes
            Fermat's Little Theorem)
          </li>
          <li>
            <strong>Euler Line:</strong> The circumcenter, orthocenter, and centroid
            of any triangle are collinear
          </li>
        </ol>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Euler also disproved Fermat's conjecture that all numbers of the form{' '}
        <InlineMath>{`2^{2^n} + 1`}</InlineMath> are prime by showing that{' '}
        <InlineMath>{`2^{32} + 1 = 4294967297`}</InlineMath> is divisible by 641.
      </p>

      {/* Lagrange */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Joseph Louis Lagrange (1736–1813)</h3>

      <Card className="mb-6">
        <CardHeader>The Life of Lagrange</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Born in Italy of mixed French and Italian parentage. His father lost the
            family fortune through speculation, but Lagrange later commented that,
            if it had not been for this, he might never have turned to mathematics.
          </p>
          <p>
            At age 23, Lagrange explained why the <strong>moon always shows the same
            face to the earth</strong>, using Newton's theory of gravitation. He spent
            25 years in Prussia at Frederick II's invitation, then moved to Paris,
            where he became a favorite of Marie Antoinette.
          </p>
          <p className="text-sm italic">
            When people pleaded the advantages of base 12 for the metric system,
            Lagrange would ironically defend base 11!
          </p>
        </div>
      </Card>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 mb-2"><strong>Lagrange's Achievements:</strong></p>
        <ul className="text-dark-300 space-y-2 text-sm">
          <li>• First proof of <strong>Wilson's Theorem</strong>: if <InlineMath>{`p`}</InlineMath> is
            prime, then <InlineMath>{`p`}</InlineMath> divides <InlineMath>{`(p-1)! + 1`}</InlineMath></li>
          <li>• Complete solution of <strong>Pell's equation</strong>:{' '}
            <InlineMath>{`x^2 - Ry^2 = 1`}</InlineMath></li>
          <li>• First proof that every natural number is a <strong>sum of four squares</strong></li>
          <li>• Systematic theory of <strong>differential equations</strong></li>
          <li>• The <em>Mécanique</em> and <strong>Lagrangian mechanics</strong>:{' '}
            <InlineMath>{`\\frac{d}{dt}\\frac{\\partial T}{\\partial \\dot{\\theta}} - \\frac{\\partial T}{\\partial \\theta} + \\frac{\\partial V}{\\partial \\theta} = 0`}</InlineMath></li>
          <li>• Invented the <strong>calculus of variations</strong></li>
        </ul>
      </div>

      <Callout type="note" title="Euler's Generosity">
        When Lagrange wrote to Euler about his results in the calculus of variations,
        Euler was so impressed that he <strong>withheld his own results from publication</strong>{' '}
        so that Lagrange could publish first. Such unselfish acts are rare in mathematics.
      </Callout>

      {/* Laplace */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Pierre Simon Laplace (1749–1827)</h3>

      <Card className="mb-6">
        <CardHeader>Laplace</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The son of humble parents who ended up as a marquis under the restored
            Bourbons. Politically an opportunist, but occasionally stood up for his
            principles.
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic my-3">
            Napoleon once told him, "You have written a big book on the universe
            without mentioning its creator," to which Laplace replied: <strong>"I
            don't need that hypothesis."</strong>
          </blockquote>
          <p>
            Laplace was more of a mathematical physicist than a pure mathematician.
            He introduced the potential <InlineMath>{`V`}</InlineMath> and showed it
            satisfies <strong>Laplace's equation</strong>:
          </p>
          <MathBlock>{`\\frac{\\partial^2 V}{\\partial x^2} + \\frac{\\partial^2 V}{\\partial y^2} + \\frac{\\partial^2 V}{\\partial z^2} = 0`}</MathBlock>
          <p className="text-sm italic">
            His greatest contribution to mathematics was the useful phrase "it is
            easy to see," which peppers his <em>Mécanique Céleste</em>. The American
            astronomer Nathaniel Bowditch who translated it observed: "I never came
            across one of Laplace's 'Thus it plainly appears' without feeling sure
            that I had hours of hard work before me."
          </p>
        </div>
      </Card>

      {/* Legendre */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Adrien Marie Legendre (1752–1833)</h3>

      <Card className="mb-6">
        <CardHeader>Legendre</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            A great promoter of Euclid who showed that the <strong>Parallel Postulate</strong>{' '}
            follows from the assumption that the plane contains real squares. He also
            did important work on the <strong>method of least squares</strong>.
          </p>
          <p>
            Legendre is best known for his work in number theory. He was the first
            to prove that <InlineMath>{`x^5 + y^5 = z^5`}</InlineMath> has no nonzero
            integer solutions (a special case of Fermat's Last Theorem).
          </p>
          <p>
            He introduced the <strong>Legendre symbol</strong>{' '}
            <InlineMath>{`\\left(\\frac{n}{p}\\right)`}</InlineMath>, which equals 1
            if <InlineMath>{`n`}</InlineMath> is a quadratic residue mod{' '}
            <InlineMath>{`p`}</InlineMath>, and −1 otherwise.
          </p>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Taylor</strong> discovered the Taylor series (1715); <strong>Maclaurin</strong>{' '}
            the special case <InlineMath>{`a = 0`}</InlineMath></li>
          <li>• <strong>De Moivre</strong>: <InlineMath>{`(\\cos x + i\\sin x)^n = \\cos nx + i\\sin nx`}</InlineMath></li>
          <li>• <strong>Euler</strong>: <InlineMath>{`V + F - E = 2`}</InlineMath>,{' '}
            <InlineMath>{`e^{i\\pi} = -1`}</InlineMath>,{' '}
            <InlineMath>{`\\sum 1/n^2 = \\pi^2/6`}</InlineMath>, totient theorem, Euler line</li>
          <li>• <strong>Lagrange</strong>: Wilson's theorem, four squares theorem, Pell equation,
            calculus of variations, Lagrangian mechanics</li>
          <li>• <strong>Laplace</strong>: Laplace's equation, celestial mechanics, "I don't need
            that hypothesis"</li>
          <li>• <strong>Legendre</strong>: proved <InlineMath>{`x^5 + y^5 = z^5`}</InlineMath> has
            no solutions, Legendre symbol, partial proofs of quadratic reciprocity</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={29} questions={section29Questions} />
    </LessonLayout>
  );
}
