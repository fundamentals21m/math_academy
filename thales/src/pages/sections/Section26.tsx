import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section26Questions } from '../../data/quizzes';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2 className="text-2xl font-semibold mb-4">The Seventeenth Century in France</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The seventeenth century saw France emerge as the center of mathematical activity.
        A remarkable group of mathematicians—<strong>Mersenne</strong>, <strong>Desargues</strong>,
        <strong> Descartes</strong>, <strong>Fermat</strong>, and <strong>Pascal</strong>—transformed
        mathematics through their development of analytic geometry, projective geometry,
        number theory, and probability theory.
      </p>

      {/* Mersenne */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Mersenne: The Mathematical Postmaster</h3>

      <Card className="mb-6">
        <CardHeader>Marin Mersenne (1588–1648)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            A Franciscan friar who served as the <strong>clearinghouse for mathematical
            ideas</strong> in France. He corresponded with virtually all active mathematicians
            of his day, including Descartes, Fermat, and Pascal, as well as figures abroad
            like Galileo and Torricelli.
          </p>
          <p>
            His cell in Paris became a meeting place where mathematicians could exchange
            ideas. In an age before scientific journals, Mersenne's correspondence network
            was crucial for disseminating mathematical discoveries.
          </p>
        </div>
      </Card>

      <Callout type="info" title="Mersenne Primes">
        A <strong>Mersenne prime</strong> is a prime number of the form{' '}
        <InlineMath>{`2^p - 1`}</InlineMath> where <InlineMath>{`p`}</InlineMath> is also prime.
        For example, <InlineMath>{`2^2 - 1 = 3`}</InlineMath>, <InlineMath>{`2^3 - 1 = 7`}</InlineMath>,
        <InlineMath>{`2^5 - 1 = 31`}</InlineMath>, and <InlineMath>{`2^7 - 1 = 127`}</InlineMath> are
        all Mersenne primes. As of today, the largest known primes are Mersenne primes.
      </Callout>

      {/* Desargues */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Desargues and Projective Geometry</h3>

      <Card className="mb-6">
        <CardHeader>Girard Desargues (1591–1661)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            An architect from Lyon who founded <strong>projective geometry</strong>—the study
            of properties preserved under projection. His work introduced the revolutionary
            concept of <strong>points at infinity</strong>, where parallel lines meet.
          </p>
          <p>
            Though largely ignored in his own time (Descartes's analytic geometry overshadowed
            projective methods), Desargues's ideas were rediscovered in the 19th century and
            became central to modern geometry and art.
          </p>
        </div>
      </Card>

      <Callout type="success" title="Desargues's Theorem">
        <p className="mb-3">
          If two triangles <InlineMath>{`ABC`}</InlineMath> and <InlineMath>{`A'B'C'`}</InlineMath>{' '}
          are <strong>perspective from a point</strong> (meaning lines <InlineMath>{`AA'`}</InlineMath>,{' '}
          <InlineMath>{`BB'`}</InlineMath>, and <InlineMath>{`CC'`}</InlineMath> meet at a single
          point <InlineMath>{`O`}</InlineMath>), then they are <strong>perspective from a line</strong>{' '}
          (meaning the intersections of <InlineMath>{`AB`}</InlineMath> with <InlineMath>{`A'B'`}</InlineMath>,{' '}
          <InlineMath>{`BC`}</InlineMath> with <InlineMath>{`B'C'`}</InlineMath>, and{' '}
          <InlineMath>{`CA`}</InlineMath> with <InlineMath>{`C'A'`}</InlineMath> are collinear).
        </p>
        <p className="text-sm italic">
          This fundamental theorem of projective geometry is self-dual: swapping "point" and
          "line" gives the converse, which is also true.
        </p>
      </Callout>

      {/* Descartes */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Descartes: The Father of Analytic Geometry</h3>

      <Card className="mb-6">
        <CardHeader>René Descartes (1596–1650)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Born in Touraine, France, Descartes was educated by Jesuits and became a soldier
            before devoting himself to philosophy and mathematics. His <em>Discourse on Method</em>{' '}
            (1637) contained three appendices, one of which—<strong>La Géométrie</strong>—revolutionized
            mathematics.
          </p>
          <div className="bg-dark-900 rounded p-3">
            <p className="font-semibold text-amber-400 mb-2">Key Contributions:</p>
            <ul className="space-y-1 text-sm">
              <li>• Founded <strong>analytic geometry</strong>: representing geometric curves by algebraic equations</li>
              <li>• Introduced the convention of using <InlineMath>{`x, y, z`}</InlineMath> for unknowns and <InlineMath>{`a, b, c`}</InlineMath> for known quantities</li>
              <li>• Formulated <strong>Descartes's Rule of Signs</strong> for counting roots of polynomials</li>
              <li>• Made contributions to optics and physics</li>
            </ul>
          </div>
          <p className="text-sm italic">
            In 1649, Queen Christina of Sweden invited Descartes to teach her philosophy.
            Unfortunately, she insisted on lessons at <strong>5 AM</strong>. The cold Swedish
            winter and early hours proved fatal—Descartes caught pneumonia and died in 1650.
          </p>
        </div>
      </Card>

      <Callout type="success" title="Descartes's Rule of Signs">
        <p className="mb-2">
          For a polynomial <InlineMath>{`p(x)`}</InlineMath> with real coefficients:
        </p>
        <ul className="space-y-1">
          <li>• The number of <strong>positive roots</strong> equals the number of sign changes in the
            coefficients of <InlineMath>{`p(x)`}</InlineMath>, or less by an even number</li>
          <li>• The number of <strong>negative roots</strong> equals the number of sign changes in
            <InlineMath>{`p(-x)`}</InlineMath>, or less by an even number</li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Analytic geometry unified algebra and geometry, allowing geometric problems to be
        solved algebraically and vice versa. A curve could now be studied through its
        equation <InlineMath>{`f(x, y) = 0`}</InlineMath>, and the intersection of curves
        reduced to solving simultaneous equations.
      </p>

      {/* Fermat */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Fermat: The Prince of Amateurs</h3>

      <Card className="mb-6">
        <CardHeader>Pierre de Fermat (1601–1665)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            A lawyer and magistrate in Toulouse who pursued mathematics as a hobby—yet made
            contributions that rival any professional mathematician. He independently discovered
            analytic geometry (around the same time as Descartes) and made fundamental advances
            in <strong>number theory</strong>, optics, and the foundations of calculus.
          </p>
          <p>
            Fermat rarely published his work, preferring to announce results in letters and
            challenge other mathematicians to prove them. Many of his theorems were stated
            without proof, leaving later generations to fill in the details.
          </p>
        </div>
      </Card>

      <Callout type="success" title="Fermat's Little Theorem">
        <p className="mb-2">
          If <InlineMath>{`p`}</InlineMath> is a prime number and <InlineMath>{`a`}</InlineMath>{' '}
          is any integer not divisible by <InlineMath>{`p`}</InlineMath>, then:
        </p>
        <MathBlock>{`a^{p-1} \\equiv 1 \\pmod{p}`}</MathBlock>
        <p className="text-sm mt-2">
          Equivalently: <InlineMath>{`a^p \\equiv a \\pmod{p}`}</InlineMath> for all integers{' '}
          <InlineMath>{`a`}</InlineMath>. This theorem is fundamental in modern cryptography,
          including RSA encryption.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Fermat's Last Theorem</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            In the margin of his copy of Diophantus's <em>Arithmetica</em>, Fermat wrote his
            most famous claim:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic my-3">
            "It is impossible to separate a cube into two cubes, or a fourth power into two
            fourth powers, or in general, any power higher than the second, into two like powers.
            I have discovered a truly marvelous proof of this, which this margin is too narrow
            to contain."
          </blockquote>
          <p>
            In modern notation: <InlineMath>{`x^n + y^n = z^n`}</InlineMath> has no positive
            integer solutions for <InlineMath>{`n > 2`}</InlineMath>.
          </p>
          <p className="text-sm italic">
            This "theorem" resisted proof for <strong>358 years</strong>. It was finally proved
            by Andrew Wiles in 1994 using advanced techniques from algebraic geometry that
            Fermat could not have known.
          </p>
        </div>
      </Card>

      {/* Pascal */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Pascal: Prodigy and Philosopher</h3>

      <Card className="mb-6">
        <CardHeader>Blaise Pascal (1623–1662)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            A child prodigy who began making mathematical discoveries at age 16 and built a
            <strong> calculating machine</strong> at 18 to help his father with tax calculations.
            Pascal made fundamental contributions to geometry, probability, and physics before
            a religious experience in 1654 led him to largely abandon mathematics for theology.
          </p>
          <div className="bg-dark-900 rounded p-3">
            <p className="font-semibold text-amber-400 mb-2">Key Contributions:</p>
            <ul className="space-y-1 text-sm">
              <li>• Wrote an essay on conic sections at age 16</li>
              <li>• Invented the <strong>Pascaline</strong>, an early mechanical calculator</li>
              <li>• Co-founded probability theory with Fermat</li>
              <li>• Developed <strong>Pascal's triangle</strong> and its properties</li>
              <li>• Made discoveries in hydrostatics (Pascal's principle)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Callout type="info" title="Pascal's Triangle">
        <p className="mb-3">
          While not invented by Pascal (it was known to Chinese and Islamic mathematicians
          centuries earlier), Pascal systematically studied its properties. The{' '}
          <InlineMath>{`n`}</InlineMath>th row gives the <strong>binomial coefficients</strong>{' '}
          <InlineMath>{`\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}`}</InlineMath>:
        </p>
        <div className="text-center font-mono text-sm">
          <p>1</p>
          <p>1 &nbsp; 1</p>
          <p>1 &nbsp; 2 &nbsp; 1</p>
          <p>1 &nbsp; 3 &nbsp; 3 &nbsp; 1</p>
          <p>1 &nbsp; 4 &nbsp; 6 &nbsp; 4 &nbsp; 1</p>
          <p>1 &nbsp; 5 &nbsp; 10 &nbsp; 10 &nbsp; 5 &nbsp; 1</p>
        </div>
        <p className="mt-3 text-sm">
          Each entry is the sum of the two entries above it. The triangle reveals patterns
          in binomial expansions, Fibonacci numbers, and combinatorics.
        </p>
      </Callout>

      {/* Probability */}
      <h4 className="text-lg font-semibold mt-6 mb-3">The Birth of Probability Theory</h4>

      <p className="text-dark-200 mb-4">
        In 1654, a gambler named the <strong>Chevalier de Méré</strong> posed a problem to
        Pascal: how should stakes be divided if a game of chance is interrupted before
        completion? Pascal corresponded with Fermat about this <strong>problem of points</strong>,
        and their exchange is considered the birth of probability theory.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 mb-2"><strong>The Problem of Points:</strong></p>
        <p className="text-dark-300 text-sm">
          Two players are playing a fair game where the first to win a certain number of
          rounds takes the stakes. If the game is interrupted when one player needs{' '}
          <InlineMath>{`r`}</InlineMath> more wins and the other needs <InlineMath>{`s`}</InlineMath>{' '}
          more wins, how should the stakes be divided fairly?
        </p>
        <p className="text-dark-300 text-sm mt-2">
          Pascal and Fermat's solution involved computing the probabilities of each player
          winning from the current position—a revolutionary approach that founded the
          mathematical theory of probability.
        </p>
      </div>

      {/* Pascal's Wager */}
      <Card className="mb-6">
        <CardHeader>Pascal's Wager</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            After his religious conversion, Pascal applied probabilistic reasoning to theology
            in his famous <strong>wager</strong>:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic my-3">
            "If God exists and you believe, you gain eternal happiness. If God exists and you
            don't believe, you suffer eternal damnation. If God doesn't exist, you lose little
            either way. Therefore, the rational choice is to believe."
          </blockquote>
          <p className="text-sm">
            This argument applies expected value reasoning to decision-making under
            uncertainty—an early application of decision theory.
          </p>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Mersenne</strong> served as a clearinghouse for mathematical ideas; Mersenne primes are of the form <InlineMath>{`2^p - 1`}</InlineMath></li>
          <li>• <strong>Desargues</strong> founded projective geometry with points at infinity</li>
          <li>• <strong>Descartes</strong> created analytic geometry, unifying algebra and geometry</li>
          <li>• <strong>Descartes's Rule of Signs</strong> counts positive/negative roots via sign changes</li>
          <li>• <strong>Fermat's Little Theorem</strong>: <InlineMath>{`a^{p-1} \\equiv 1 \\pmod{p}`}</InlineMath> for prime <InlineMath>{`p`}</InlineMath></li>
          <li>• <strong>Fermat's Last Theorem</strong> (<InlineMath>{`x^n + y^n = z^n`}</InlineMath> has no solutions for <InlineMath>{`n > 2`}</InlineMath>) was proved in 1994</li>
          <li>• <strong>Pascal</strong> built a calculating machine and co-founded probability theory</li>
          <li>• <strong>Pascal's triangle</strong> encodes binomial coefficients and many patterns</li>
          <li>• The <strong>problem of points</strong> led to the mathematical theory of probability</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={26} questions={section26Questions} />
    </LessonLayout>
  );
}
