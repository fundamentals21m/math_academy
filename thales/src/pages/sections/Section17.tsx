import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section17Questions } from '../../data/quizzes';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-semibold mb-4">Alexandria from 300 BC to 200 BC</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The school of mathematics established by Euclid in Alexandria produced some
        first-rate mathematicians in the third century BC. This golden age saw remarkable
        applications of geometry to astronomy, the systematic study of conic sections,
        and one of the most impressive calculations in ancient science: measuring the
        size of the Earth.
      </p>

      {/* The Four Great Mathematicians */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Great Mathematicians of the Third Century BC</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Aristarchus of Samos</CardHeader>
          <p className="text-dark-300">310–250 BC</p>
          <p className="text-dark-400 mt-2">
            Pioneer of mathematical astronomy; first to propose a heliocentric model
          </p>
        </Card>
        <Card>
          <CardHeader>Archimedes of Syracuse</CardHeader>
          <p className="text-dark-300">287–212 BC</p>
          <p className="text-dark-400 mt-2">
            Greatest mathematician and physicist before Newton
          </p>
        </Card>
        <Card>
          <CardHeader>Apollonius of Perga</CardHeader>
          <p className="text-dark-300">260–190 BC</p>
          <p className="text-dark-400 mt-2">
            Master of conic sections; wrote 400 propositions on conics
          </p>
        </Card>
        <Card>
          <CardHeader>Eratosthenes of Cyrene</CardHeader>
          <p className="text-dark-300">275–195 BC</p>
          <p className="text-dark-400 mt-2">
            Chief librarian; measured the circumference of the Earth
          </p>
        </Card>
      </CardGrid>

      {/* Aristarchus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Aristarchus: Measuring the Heavens</h3>

      <p className="text-dark-200 mb-4">
        <strong>Aristarchus</strong> came from Samos, the same Greek island as Pythagoras.
        He gave a remarkable application of mathematics to astronomy: determining the
        relative distances of the Sun and Moon from Earth.
      </p>

      <Card className="mb-6">
        <CardHeader>The Sun-Earth-Moon Triangle</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Consider the triangle with vertices at the Sun (S), Earth (E), and Moon (M).
            Aristarchus noted that when the Moon is at its <strong>first quarter</strong>,
            the angle SME is a right angle—this is why we see exactly half of the Moon's
            visible surface illuminated.
          </p>
          <p>
            At this moment, both Sun and Moon are visible in the sky together, so Aristarchus
            could measure the angle SEM. He found it to be <InlineMath>{`\\frac{29}{30}`}</InlineMath> of
            a right angle (about 87°). The actual value is closer to 89.85°.
          </p>
          <p>
            From this, he calculated that the Sun is about <strong>19 times farther</strong> from
            Earth than the Moon. Had his angle measurement been accurate, he would have found
            the Sun is about 400 times farther—still, his <em>method</em> was brilliant.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Since the Sun and Moon appear approximately the same size during a solar eclipse,
        their actual diameters must be in the same ratio as their distances from Earth.
        By observing Earth's shadow on the Moon during a lunar eclipse, Aristarchus also
        estimated:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 text-center">
        <p className="text-dark-200 text-lg">
          <InlineMath>{`\\frac{\\text{diameter of Earth}}{\\text{diameter of Moon}} \\approx 7`}</InlineMath>
        </p>
        <p className="text-dark-400 text-sm mt-2">(The actual ratio is about 4)</p>
      </div>

      <Callout type="info" title="The First Heliocentric Model">
        According to Plutarch, Aristarchus also proposed that "the Earth moves in an
        oblique circle about the Sun at the same time as it turns around its axis."
        This heliocentric hypothesis predates Copernicus by nearly 1,800 years! It
        seems Copernicus suppressed his acquaintance with Aristarchus's work.
      </Callout>

      {/* Apollonius */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Apollonius: The Great Geometer</h3>

      <p className="text-dark-200 mb-4">
        <strong>Apollonius</strong> (260–190 BC) came from Perga in southern Turkey.
        He wrote a treatise on <em>Conics</em> containing <strong>400 propositions</strong>
        arranged in eight books. Four books survived in the original Greek, and three
        more survived in Arabic translation.
      </p>

      <p className="text-dark-200 mb-4">
        We rarely read this treatise today because analytic geometry allows us to handle
        the same problems more easily. However, Apollonius's work was the definitive
        treatment of conic sections for nearly two thousand years.
      </p>

      <Card className="mb-6">
        <CardHeader>Conic Sections and Eccentricity</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            A <strong>conic section</strong> is the set of all points P in a plane such that
            P's distance from a fixed point (the <em>focus</em>) bears a constant ratio to its
            distance from a fixed line (the <em>directrix</em>). This ratio is called the
            <strong> eccentricity</strong>.
          </p>
          <div className="bg-dark-900 rounded p-3 mt-2">
            <ul className="space-y-1">
              <li>• <strong>Ellipse:</strong> eccentricity &lt; 1 (circle has eccentricity 0)</li>
              <li>• <strong>Parabola:</strong> eccentricity = 1</li>
              <li>• <strong>Hyperbola:</strong> eccentricity &gt; 1</li>
            </ul>
          </div>
          <p className="text-dark-400 text-sm">
            Interestingly, Apollonius did not give this definition—it is doubtful whether
            he was aware of the eccentricity concept at all.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Apollonius also wrote a treatise on <em>Tangencies</em>, showing how to construct
        (with ruler and compass) a circle tangent to three given circles—a famous problem
        known as the <strong>Problem of Apollonius</strong>.
      </p>

      {/* Eratosthenes */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Eratosthenes: Measuring the Earth</h3>

      <p className="text-dark-200 mb-4">
        <strong>Eratosthenes of Cyrene</strong> (in North Africa) became the chief librarian
        at Alexandria. He was interested in many subjects: philosophy, poetry, history,
        philology, geography, astronomy, and mathematics.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 font-semibold mb-2">Contributions of Eratosthenes:</p>
        <ul className="text-dark-300 space-y-2">
          <li>• The <strong>Sieve of Eratosthenes</strong> for finding prime numbers</li>
          <li>• Invented the <strong>Julian calendar</strong> (with leap years every 4 years)</li>
          <li>• Measured the <strong>circumference of the Earth</strong></li>
        </ul>
      </div>

      <p className="text-dark-200 mb-4">
        His students called him "Beta" (the second letter of the Greek alphabet)—perhaps
        because, although he studied many things, he never considered himself the leading
        expert in any one field. It is reported that in old age, Eratosthenes went blind
        and committed suicide by starvation.
      </p>

      <Callout type="info" title="Measuring the Earth's Circumference">
        Eratosthenes's greatest achievement was calculating the circumference of the Earth
        using only geometry, observation, and measurement.
      </Callout>

      <h4 className="text-lg font-semibold mt-6 mb-3">The Method</h4>

      <p className="text-dark-200 mb-4">
        Eratosthenes knew that <strong>Syene</strong> (modern Aswan) lies almost exactly on
        the Tropic of Cancer. At noon on midsummer's day (June 21), the Sun is directly
        overhead there—one could see this by looking down a deep well.
      </p>

      <p className="text-dark-200 mb-4">
        He observed that at <strong>Alexandria</strong>, at noon on the same day, the Sun
        was <InlineMath>{`\\frac{360°}{50}`}</InlineMath> = 7.2° from directly overhead. Using Aristarchus's
        result that Sun rays reaching Earth are essentially parallel (because the Sun is
        so far away), Eratosthenes reasoned:
      </p>

      <Card className="mb-6">
        <CardHeader>The Calculation</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The angle of 7.2° at Alexandria equals the angle subtended at Earth's center
            by the arc from Alexandria to Syene. By Euclid's theorem, arc length is
            proportional to central angle.
          </p>
          <p>
            Eratosthenes measured the distance from Alexandria to Syene as <strong>5,000 stadia</strong>
            (a stadium being the length of the Olympic track, about 180 meters).
          </p>
          <div className="bg-dark-900 rounded p-3 text-center">
            <p className="text-lg">
              <InlineMath>{`\\text{Circumference} = 5000 \\times 50 = 250{,}000 \\text{ stadia}`}</InlineMath>
            </p>
            <p className="mt-2">
              <InlineMath>{`\\approx 250{,}000 \\times 180\\text{ m} = 45{,}000 \\text{ km}`}</InlineMath>
            </p>
          </div>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        This is remarkably accurate! The correct value is almost exactly <strong>40,000 km</strong>—in
        fact, the kilometer was originally defined as 1/40,000 of the Earth's circumference.
      </p>

      <Callout type="info" title="Columbus and the Size of the Earth">
        Had Columbus known Eratosthenes's correct calculation, he might never have set out
        on his voyage—or at least would not have called the inhabitants of the New World
        "Indians." Columbus used a much smaller (and incorrect) estimate of Earth's size,
        thinking Asia was much closer to Europe by sailing west.
      </Callout>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Aristarchus</strong>: First heliocentric model; measured relative distances of Sun and Moon</li>
          <li>• <strong>Apollonius</strong>: Definitive treatise on conic sections (400 propositions)</li>
          <li>• <strong>Eratosthenes</strong>: Measured Earth's circumference with remarkable accuracy (~45,000 km vs actual 40,000 km)</li>
          <li>• <strong>Archimedes</strong>: Greatest of all—covered in the next section</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={17} questions={section17Questions} />
    </LessonLayout>
  );
}
