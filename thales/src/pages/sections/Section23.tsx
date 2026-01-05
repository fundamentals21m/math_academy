import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section23Questions } from '../../data/quizzes';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2 className="text-2xl font-semibold mb-4">Mathematics in the Renaissance</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In the 15th and 16th centuries, there was a sudden spurt of mathematical activity
        that carried mathematics beyond the achievements of the ancients. The catalyst
        was a Chinese invention that reached Europe in 1450: <strong>printing</strong>.
      </p>

      {/* Impact of Printing */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Revolution of Printing</h3>

      <p className="text-dark-200 mb-4">
        It is hard to overemphasize the importance of printing for the spread of
        mathematical knowledge. Copying mathematical texts by hand required much time
        and labor. In ancient times, many texts existed only in a single copy, found
        in the Library of Alexandria—which is why mathematical activity was concentrated
        in one place for 800 years.
      </p>

      <Callout type="info" title="Mathematics Goes Global">
        With printing, mathematical texts became available all over the civilized world.
        People could learn mathematics even in such outlying places as <strong>Bohemia</strong>
        or <strong>Scotland</strong>—no longer needing to travel to centers of learning.
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        The Renaissance saw advances in four key areas:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>1. <strong>Mathematical notation</strong> — symbols we still use today</li>
          <li>2. <strong>Theory of equations</strong> — solving cubic and quartic equations</li>
          <li>3. <strong>Logarithms</strong> — revolutionizing calculation</li>
          <li>4. <strong>Mechanics and astronomy</strong> — mathematics applied to nature</li>
        </ul>
      </div>

      {/* Mathematical Notation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Birth of Modern Notation</h3>

      <p className="text-dark-200 mb-4">
        The symbols we use every day in mathematics were invented during this period.
        Before the Renaissance, algebraists wrote out equations in words!
      </p>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Johannes Regiomontanus (1436–1476):</span>
          <span className="text-dark-300 ml-2">
            From Königsberg, Germany. Gave the first systematic exposition of plane and
            spherical trigonometry using both sines and cosines. He wrote "res" for x
            and "census" for x². Probably died of plague, though rumor says he was
            <strong> poisoned by the sons of a rival scholar</strong>.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Johannes Widman (1462–1500):</span>
          <span className="text-dark-300 ml-2">
            Of Eger (now Czech Republic). In his <em>Mercantile Arithmetic</em> (1489),
            the modern symbols <strong>+ and −</strong> appeared for the first time!
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Robert Recorde (1510–1558):</span>
          <span className="text-dark-300 ml-2">
            English mathematician who was the first to use <strong>=</strong> for equality,
            asserting that "noe 2 thynges can be more equalle." Sadly, he got into a
            dispute with the Earl of Pembroke and <strong>died in jail</strong>.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Christoff Rudolff (1525):</span>
          <span className="text-dark-300 ml-2">
            German mathematician who introduced <strong>√</strong> for "radix" (root).
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Thomas Harriot (1560–1621):</span>
          <span className="text-dark-300 ml-2">
            English mathematician who introduced <strong>&gt; and &lt;</strong> for strict
            inequality. He went to America with Sir Walter Raleigh and became a tobacco
            addict. He also computed the area of a spherical triangle (1603).
          </span>
        </div>
      </div>

      {/* Colorful Characters */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Colorful Characters</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Luca Pacioli (1445–1517)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              A Franciscan monk in Italy who published <em>Divina Proportione</em>
              (Divine Ratio) in 1509—illustrated by <strong>Leonardo da Vinci</strong>!
            </p>
            <p>
              There is a famous painting of Pacioli by Jacopo de' Barbari showing
              the friar with a dodecahedron.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Michael Stifel (1487–1567)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              A German monk who became an early follower of Luther. First to use
              <strong> negative integers as exponents</strong>.
            </p>
            <p>
              Using "mathematics on the Bible," he predicted the end of the world
              for <strong>October 18, 1533</strong>. When the world failed to end,
              he found himself in jail in Wittenberg!
            </p>
          </div>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Adam Riese (1492–1559)</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            This Bavarian mathematician published arithmetic books that went through
            <strong> more than a hundred editions</strong>, establishing the use of
            the + and − signs throughout Europe.
          </p>
          <p>
            To this day, in German, "nach Adam Riese" (according to Adam Riese)
            is an expression meaning "correctly calculated."
          </p>
        </div>
      </Card>

      {/* Columbus and Regiomontanus */}
      <Callout type="info" title="Columbus's Mathematical Trick">
        Columbus took a copy of Regiomontanus's <em>Ephemerides</em> on his fourth
        voyage. When stranded with hostile natives in Jamaica, he used its prediction
        of the <strong>lunar eclipse of February 29, 1504</strong> to intimidate them—
        claiming he would make the moon disappear!
      </Callout>

      {/* Harriot's Spherical Triangle */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Harriot's Spherical Triangle</h3>

      <p className="text-dark-200 mb-4">
        In 1603, Thomas Harriot computed the area of a spherical triangle—a triangle
        drawn on the surface of a sphere, with sides formed by arcs of great circles.
      </p>

      <Card className="mb-6">
        <CardHeader>The Spherical Excess</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            For a spherical triangle with angles A, B, and C on a sphere of radius r:
          </p>
          <MathBlock>{`\\text{Area} = r^2(A + B + C - 180°)`}</MathBlock>
          <p>
            The quantity <InlineMath>{`A + B + C - 180°`}</InlineMath> is called the
            <strong> spherical excess</strong>. Unlike plane triangles (whose angles
            always sum to exactly 180°), a spherical triangle's angles sum to
            <em> more than 180°</em>.
          </p>
          <div className="bg-dark-900 rounded p-3 text-sm">
            <p><strong>Harriot's Rule:</strong> Take the sum of all three angles and
            subtract 180°. Set this as the numerator of a fraction with denominator 360°.
            This fraction tells what portion of the hemisphere the triangle occupies.</p>
          </div>
        </div>
      </Card>

      {/* Preview of Theory of Equations */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Quest for Solutions</h3>

      <p className="text-dark-200 mb-4">
        Ever since the ancient Babylonians, people knew how to solve linear and quadratic
        equations. Omar Khayyam had developed geometric methods for cubics. But in the
        Renaissance, mathematicians finally cracked the algebraic solution to cubic and
        quartic equations—a story full of intrigue, secrecy, and betrayal!
      </p>

      <p className="text-dark-200 mb-4">
        The quest began with <strong>Scipione Ferro</strong> of Bologna (1465–1526), who
        could solve equations of the form <InlineMath>{`x^3 + bx = c`}</InlineMath>.
        He kept his method <strong>secret</strong>—to maintain an advantage in
        mathematical contests—but passed it on to Antonio Fiore just before he died.
      </p>

      <Callout type="info" title="Coming Up">
        The dramatic story of Tartaglia, Cardano, and Ferrari—involving secret formulas,
        broken promises, and public mathematical duels—will be told in the next section
        on the Cubic and Quartic Equations.
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Printing</strong> (1450) revolutionized the spread of mathematical knowledge</li>
          <li>• <strong>Widman</strong> (1489) first used <strong>+ and −</strong></li>
          <li>• <strong>Recorde</strong> (1558) first used <strong>=</strong> ("noe 2 thynges can be more equalle")</li>
          <li>• <strong>Rudolff</strong> (1525) introduced <strong>√</strong></li>
          <li>• <strong>Harriot</strong> introduced <strong>&gt; and &lt;</strong> and computed spherical triangle area</li>
          <li>• <strong>Pacioli</strong>'s <em>Divina Proportione</em> was illustrated by Leonardo da Vinci</li>
          <li>• <strong>Adam Riese</strong>'s arithmetic books went through 100+ editions</li>
          <li>• <strong>Stifel</strong> was first to use negative exponents (and predicted the world would end in 1533)</li>
          <li>• Mathematical notation transformed algebra from words to symbols</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={23} questions={section23Questions} />
    </LessonLayout>
  );
}
