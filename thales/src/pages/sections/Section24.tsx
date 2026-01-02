import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section24Questions } from '../../data/quizzes';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2 className="text-2xl font-semibold mb-4">The Cubic and Quartic Equations</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The solution of cubic and quartic equations is one of the great dramas in the
        history of mathematics—a story of secret formulas, broken promises, and public
        mathematical duels. It was also the first major advance in algebra since the
        ancient Babylonians solved quadratics nearly 4000 years earlier.
      </p>

      {/* The Players */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Dramatis Personae</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Niccolo Tartaglia (1500–1557)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Born in Brescia, Italy, which was captured by the French in 1512. Most
              inhabitants were massacred, and young Niccolo's <strong>jaws were split
              by a soldier's sword</strong>—hence his name, which means "the stammerer."
            </p>
            <p>
              He lectured at Verona and Venice, becoming famous for solving cubic
              equations and publishing on ballistics.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Girolamo Cardano (1501–1576)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              A famous physician in Milan who once traveled to Scotland to cure an
              Archbishop of asthma. Applied mathematics to mechanics, gambling (he
              might be called the discoverer of probability theory), and astrology.
            </p>
            <p>
              His son was executed for poisoning his wife. Cardano himself was
              <strong> imprisoned for heresy</strong> for publishing a horoscope of Jesus Christ!
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Ludovico Ferrari (1522–1565)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Cardano's brilliant student who solved the <strong>quartic equation</strong>.
              He became rich in service of Cardinal Fernando Gonzalo but retired due
              to ill health.
            </p>
            <p>
              According to one account, he was murdered by his sister or her boyfriend.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Scipione Ferro (1465–1526)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Professor at Bologna who first solved equations of the form
              <InlineMath>{`x^3 + bx = c`}</InlineMath>. He kept his method
              <strong> secret</strong>—to maintain an advantage in mathematical
              contests—passing it to Antonio Fiore only on his deathbed.
            </p>
          </div>
        </Card>
      </CardGrid>

      {/* The Contest */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Great Mathematical Duel</h3>

      <p className="text-dark-200 mb-4">
        In 1530, Zuanne da Coi sent Tartaglia two challenge problems:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-4 text-center">
        <MathBlock>{`x^3 + 3x^2 = 5`}</MathBlock>
        <MathBlock>{`x^3 + 6x^2 + 8x = 1000`}</MathBlock>
      </div>

      <p className="text-dark-200 mb-4">
        When Tartaglia announced he could solve these, <strong>Antonio Fiore</strong>
        (who had inherited Ferro's secret) challenged him to a contest. Each contestant
        deposited money with a notary and proposed problems for his rival. Whoever
        solved more within 30 days won all the money.
      </p>

      <Card className="mb-6">
        <CardHeader>Tartaglia's Victory</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Suspecting Fiore would pose equations of the form <InlineMath>{`x^3 + bx = c`}</InlineMath>,
            Tartaglia quickly worked out a general method. Indeed, all of Fiore's problems
            were of this type, and <strong>Tartaglia solved them all</strong>.
          </p>
          <p>
            Tartaglia himself posed equations of the form <InlineMath>{`x^3 + ax^2 = c`}</InlineMath>,
            which he could solve but which were too difficult for Fiore.
          </p>
        </div>
      </Card>

      {/* The Betrayal */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Broken Promise</h3>

      <p className="text-dark-200 mb-4">
        Cardano persuaded Tartaglia to reveal his secret method, but only on the
        condition that Cardano would <strong>never publish it</strong>. Tartaglia agreed.
      </p>

      <p className="text-dark-200 mb-4">
        However, years later Cardano learned of Ferro's prior work. He decided to
        publish the method in his <em>Ars Magna</em> (1545)—giving credit to Tartaglia,
        but <strong>breaking his promise</strong> to keep it secret.
      </p>

      <Callout type="note" title="Tartaglia's Fury">
        Tartaglia was furious! Henceforth, he would have no special advantage in
        mathematical contests. He challenged Cardano to a competition, but Cardano
        sent his student Ferrari instead. Ferrari did better than Tartaglia, and
        Tartaglia lost both prestige and income.
      </Callout>

      {/* The Ars Magna */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Cardano's Ars Magna (1545)</h3>

      <p className="text-dark-200 mb-4">
        Despite the controversy, Cardano's <em>Ars Magna</em> was the best book on
        algebra to that date. It still used geometry to prove algebraic identities
        and still avoided negative numbers, listing equations like these separately:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 text-center font-mono text-dark-200">
        <p><InlineMath>{`x^3 + px = q`}</InlineMath></p>
        <p><InlineMath>{`x^3 = px + q`}</InlineMath></p>
        <p><InlineMath>{`x^3 + px + q = 0`}</InlineMath></p>
        <p><InlineMath>{`x^3 + q = px`}</InlineMath></p>
      </div>

      <p className="text-dark-200 mb-4">
        Nonetheless, the <em>Ars Magna</em> contained a full explanation of the cubic
        equation, including a treatment of <strong>imaginary numbers</strong>. Cardano
        was the first person to use imaginary numbers in print!
      </p>

      {/* The Cubic Formula */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Solving the Cubic Equation</h3>

      <Card className="mb-6">
        <CardHeader>Tartaglia's Trick: Eliminating the Square Term</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The general cubic <InlineMath>{`x^3 + ax^2 + bx + c = 0`}</InlineMath> can
            be transformed. Substituting <InlineMath>{`x = y - a/3`}</InlineMath>
            eliminates the <InlineMath>{`x^2`}</InlineMath> term, giving the
            <strong> reduced cubic</strong>:
          </p>
          <MathBlock>{`y^3 - 3py - 2q = 0`}</MathBlock>
        </div>
      </Card>

      <Card className="mb-6">
        <CardHeader>Cardano's Formula</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            For the reduced cubic <InlineMath>{`y^3 - 3py - 2q = 0`}</InlineMath>, put
            <InlineMath>{`y = u + v`}</InlineMath> with <InlineMath>{`uv = p`}</InlineMath>.
            Then <InlineMath>{`u^3`}</InlineMath> and <InlineMath>{`v^3`}</InlineMath>
            satisfy the quadratic:
          </p>
          <MathBlock>{`t^2 - 2qt + p^3 = 0`}</MathBlock>
          <p>Therefore:</p>
          <MathBlock>{`u^3 = q + \\sqrt{q^2 - p^3}, \\quad v^3 = q - \\sqrt{q^2 - p^3}`}</MathBlock>
          <p>And the solution is <InlineMath>{`y = u + v`}</InlineMath>, where <InlineMath>{`u`}</InlineMath> is a cube root of <InlineMath>{`q + \\sqrt{q^2 - p^3}`}</InlineMath>.</p>
        </div>
      </Card>

      <Callout type="theorem" title="The Three Cases">
        <ul className="space-y-2">
          <li><strong>Case 1:</strong> <InlineMath>{`q^2 - p^3 > 0`}</InlineMath> → One real root, two complex conjugates</li>
          <li><strong>Case 2:</strong> <InlineMath>{`q^2 - p^3 = 0`}</InlineMath> → Two distinct roots (one is repeated)</li>
          <li><strong>Case 3:</strong> <InlineMath>{`q^2 - p^3 < 0`}</InlineMath> → Three distinct real roots (the "irreducible case")</li>
        </ul>
      </Callout>

      {/* Ferrari's Quartic */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Ferrari's Solution to the Quartic</h3>

      <p className="text-dark-200 mb-4">
        Ferrari extended the work of Tartaglia and Cardano, solving the general
        fourth-degree equation. His clever idea: reduce the quartic to a cubic!
      </p>

      <Card className="mb-6">
        <CardHeader>Ferrari's Method</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            For <InlineMath>{`x^4 + ax^3 + bx^2 + cx + d = 0`}</InlineMath>, Ferrari
            introduced a parameter <InlineMath>{`t`}</InlineMath> and showed that
            choosing <InlineMath>{`t`}</InlineMath> to satisfy a certain <strong>cubic
            equation</strong> allows the quartic to be written as two perfect squares:
          </p>
          <MathBlock>{`\\left(x^2 + \\frac{a}{2}x + \\frac{t}{2}\\right)^2 = (\\sqrt{A}\\,x + B/2\\sqrt{A})^2`}</MathBlock>
          <p>
            Taking square roots gives a <strong>quadratic</strong>, which we can solve!
          </p>
        </div>
      </Card>

      {/* Later Developments */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Later Developments</h3>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Rafael Bombelli (1526–1572):</span>
          <span className="text-dark-300 ml-2">
            Published an algebra book in 1572 that discussed complex radicals at length.
            He showed that the "irreducible case" of the cubic (Case 3) actually leads
            to three <em>real</em> roots! He also noted that trisecting an angle is
            equivalent to solving a cubic equation.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">François Viète (1540–1603):</span>
          <span className="text-dark-300 ml-2">
            A French lawyer whose avocation was mathematics. He applied algebra to
            geometry (reversing the ancient practice), deciphered a Spanish code for
            France, and when challenged by King Henry IV to solve an equation of degree
            45, gave the answer in minutes by recognizing it involved the chord of
            <InlineMath>{`360°/45`}</InlineMath>.
          </span>
        </div>
      </div>

      {/* The Quintic */}
      <Callout type="info" title="The Impossible Quintic">
        For several centuries, mathematicians tried to find similar formulas for
        equations of degree 5 or higher. They failed. In the 19th century,
        <strong> Ruffini</strong>, <strong>Abel</strong>, and <strong>Galois</strong>
        proved that the general equation of degree 5 or more <em>cannot</em> be solved
        by radicals (roots). This impossibility result was a profound discovery.
      </Callout>

      {/* The Colorful Fates */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Colorful Fates</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Tartaglia:</strong> Lost prestige after his defeat by Ferrari; died embittered</li>
          <li>• <strong>Cardano:</strong> Imprisoned for heresy; legend says he predicted his own death by astrology and committed suicide to make it come true</li>
          <li>• <strong>Ferrari:</strong> Possibly murdered by his sister or her boyfriend</li>
          <li>• <strong>Bombelli:</strong> His algebra book was so advanced it wasn't fully appreciated for decades</li>
        </ul>
      </div>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Scipione Ferro</strong> first solved the cubic but kept it secret</li>
          <li>• <strong>Tartaglia</strong> rediscovered the method and won a contest against Fiore</li>
          <li>• <strong>Cardano</strong> published the cubic solution in <em>Ars Magna</em> (1545), breaking his promise</li>
          <li>• <strong>Ferrari</strong> solved the quartic by reducing it to a cubic</li>
          <li>• <strong>Cardano</strong> was the first to use imaginary numbers in print</li>
          <li>• <strong>Bombelli</strong> showed the "irreducible case" gives three real roots</li>
          <li>• <strong>Viète</strong> applied algebra to geometry and solved a degree-45 equation</li>
          <li>• The quintic cannot be solved by radicals (proved in the 19th century)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={24} questions={section24Questions} />
    </LessonLayout>
  );
}
