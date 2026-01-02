import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section25Questions } from '../../data/quizzes';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2 className="text-2xl font-semibold mb-4">Renaissance Mathematics Continued</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The Renaissance saw two more revolutionary developments: the invention of
        <strong> logarithms</strong>, which transformed calculation, and the birth of
        <strong> modern astronomy</strong>, which applied mathematics to understand the
        heavens. These advances set the stage for the scientific revolution.
      </p>

      {/* Logarithms */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Invention of Logarithms</h3>

      <Card className="mb-6">
        <CardHeader>John Napier (1550–1617)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            A Scottish aristocrat who spent <strong>20 years</strong> constructing tables
            of logarithms. Like Stifel, he was interested in proving that the Pope was
            the Antichrist and was convinced the world would end before 1700.
          </p>
          <p>
            His <em>Mirifici Logarithmorum Canonis Constructio</em> (Construction of
            the Wonderful Canon of Logarithms) was published in 1619, two years after
            his death.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Napier's ingenious idea was to imagine a particle moving toward the origin at
        a speed <strong>proportional to its distance</strong> from the origin. Starting
        at position −1 at time 0, the "logarithm" of any distance d is the time when
        the particle reaches that distance.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 mb-2"><strong>Napier's Three Key Ideas:</strong></p>
        <ul className="text-dark-300 space-y-2">
          <li>1. When z is very small, <InlineMath>{`\\log(1-z) \\approx z`}</InlineMath></li>
          <li>2. Powers of <InlineMath>{`(1-10^{-m})`}</InlineMath> are easy to calculate by shifting decimals</li>
          <li>3. Near 1, the logarithm is smooth, so linear interpolation works well</li>
        </ul>
      </div>

      <Card className="mb-6">
        <CardHeader>Henry Briggs (1561–1631)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Briggs traveled to Edinburgh in 1615 to discuss logarithms with Napier.
            They agreed that <strong>base 10</strong> had many practical advantages.
            After Napier died in 1617, Briggs continued the work, publishing tables
            for base-10 logarithms in 1624.
          </p>
          <p>
            Briggs introduced the terms <strong>mantissa</strong> and <strong>characteristic</strong>.
            The advantage of base 10: numbers like 173, 17.3, 1.73, 0.173 all have
            the same mantissa—only the characteristic (2, 1, 0, −1) differs!
          </p>
        </div>
      </Card>

      <Callout type="note" title="Why Logarithms Mattered">
        Before electronic calculators, logarithms transformed multiplication and division
        into addition and subtraction! To multiply two numbers, you looked up their logs,
        added them, and looked up the antilog. This made complex astronomical calculations
        feasible. Briggs persuaded many contemporaries, including Kepler, of their importance.
      </Callout>

      {/* Mechanics and Astronomy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Mechanics and Astronomy</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Nicholas Copernicus (1473–1543)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Of Polish origin. Conjectured that the Earth and planets move around
              the Sun—the <strong>heliocentric model</strong>.
            </p>
            <p>
              He said this assumption gives a simpler explanation, though he still
              used epicycles like Ptolemy and relied on Ptolemy's observational data.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Simon Stevin (1548–1620)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Lived in the Netherlands. One of the earliest expositors of
              <strong> decimal fractions</strong>, which he compared to "an unknown
              island having beautiful fruits, pleasant plains, precious minerals."
            </p>
            <p>
              His <em>Statics and Hydrostatics</em> (1586) discussed the triangle of
              forces, resolution of forces, and pressure—advancing beyond Archimedes.
            </p>
          </div>
        </Card>
      </CardGrid>

      {/* Galileo */}
      <Card className="mb-6 mt-4">
        <CardHeader>Galileo Galilei (1564–1642)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Often regarded as the <strong>father of modern physics</strong>. According
            to legend, instead of paying attention to church services, he used his
            pulse to time the oscillations of a swinging lamp—discovering that the
            period doesn't depend on amplitude. This led to pendulum clocks.
          </p>
          <div className="bg-dark-900 rounded p-3">
            <p className="font-semibold text-amber-400 mb-2">Galileo's Discoveries:</p>
            <ul className="space-y-1 text-sm">
              <li>• Falling bodies undergo uniform acceleration independent of weight</li>
              <li>• First to use the telescope for astronomy (1609)</li>
              <li>• Discovered the moons of Jupiter (1610)</li>
              <li>• Advocated the Copernican system</li>
            </ul>
          </div>
          <p className="text-sm italic">
            In 1633, the Inquisition forced him to recant the Copernican view.
            Legend says he muttered "And yet it moves" under his breath.
          </p>
        </div>
      </Card>

      {/* Kepler */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Kepler and the Laws of Planetary Motion</h3>

      <p className="text-dark-200 mb-4">
        <strong>Johann Kepler</strong> (1571–1630) studied in Tübingen and became a
        professor in Graz. His early support for the Copernican system led him to seek
        mathematical patterns in planetary distances.
      </p>

      <Card className="mb-6">
        <CardHeader>Kepler's Cosmic Mystery</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Kepler's first idea was Pythagorean: he tried to explain planetary distances
            using the <strong>five Platonic solids</strong> nested between the six known
            planetary orbits. Remarkably, there were exactly five intervals to explain!
          </p>
          <p>
            Though we don't attribute significance to this today, it led Kepler to seek
            better observational data—which he found with <strong>Tycho Brahe</strong>.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        <strong>Tycho Brahe</strong> (1546–1601), a Danish astronomer, made the most
        accurate celestial observations of the pre-telescope era. When Brahe became
        "imperial mathematicus" in Prague, Kepler became his assistant in 1599. Brahe
        set Kepler to work on <strong>Mars</strong>—whose orbit deviated from a circle
        more than any other planet's.
      </p>

      <Callout type="theorem" title="Kepler's Three Laws of Planetary Motion">
        <ol className="space-y-3">
          <li>
            <strong>First Law (1609):</strong> Each planet describes an <strong>ellipse</strong>
            with the Sun at one focus.
          </li>
          <li>
            <strong>Second Law (1609):</strong> The line joining the Sun to a planet sweeps
            out <strong>equal areas in equal times</strong>.
          </li>
          <li>
            <strong>Third Law (1619):</strong> The square of a planet's period is proportional
            to the cube of its orbital semi-major axis: <InlineMath>{`T^2 \\propto a^3`}</InlineMath>
          </li>
        </ol>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        These three laws were later to confirm Newton's theory of universal gravitation.
      </p>

      {/* Kepler's Life */}
      <h4 className="text-lg font-semibold mt-6 mb-3">Kepler's Colorful Life</h4>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• His job as imperial mathematicus included <strong>casting horoscopes</strong> for the emperor</li>
          <li>• On astrology, he wrote that "the daughter must support the mother by her charms"—astronomers couldn't make a living otherwise!</li>
          <li>• He used mathematics to decide <strong>which woman to marry</strong> as his second wife</li>
          <li>• When his mother was accused of <strong>witchcraft</strong>, he used his court connections to get the case dismissed</li>
        </ul>
      </div>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Napier</strong> invented logarithms (published 1619), spending 20 years on the tables</li>
          <li>• <strong>Briggs</strong> introduced base-10 logarithms and the terms "mantissa" and "characteristic"</li>
          <li>• <strong>Copernicus</strong> proposed the heliocentric model of the solar system</li>
          <li>• <strong>Stevin</strong> popularized decimal fractions and advanced statics beyond Archimedes</li>
          <li>• <strong>Galileo</strong> discovered pendulum properties, falling body laws, and Jupiter's moons</li>
          <li>• <strong>Kepler</strong> formulated three laws of planetary motion using Tycho Brahe's data</li>
          <li>• Kepler's laws: elliptical orbits, equal areas in equal times, <InlineMath>{`T^2 \\propto a^3`}</InlineMath></li>
          <li>• These discoveries set the stage for Newton's gravitational theory</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={25} questions={section25Questions} />
    </LessonLayout>
  );
}
