import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section05Questions } from '../../data/quizzes';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-semibold mb-4">The Dawn of Greek Mathematics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The ancient Greek world was not confined to what we now call Greece, but
        extended to <strong>Ionia</strong> (western Turkey) in the east, southern Italy
        and Sicily in the west, and later to <strong>Alexandria</strong> (Egypt) in the
        south. Greek philosophy and mathematics began in Ionia, where the influence
        of the older civilizations of the east was greatest.
      </p>

      <Callout type="info">
        <p>
          After the war between a Greek coalition and the Persians ended in Greek
          victory (<strong>490 BC</strong>), philosophy and mathematics flourished in
          Athens. Ultimately, after the founding of Alexandria (<strong>331 BC</strong>),
          it was there that most of the major scientific developments took place until
          about 500 AD.
        </p>
      </Callout>

      {/* Thales of Miletus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Thales of Miletus</h3>

      <p className="text-dark-200 mb-6">
        The first Greek mathematician and philosopher is <strong>Thales of Miletus</strong>{' '}
        (600 BC). According to Proclus, Thales visited Egypt and brought back the
        knowledge of geometry from there. He may also have been influenced by Indian
        thought via Persia. He is said to have predicted the solar eclipse which
        occurred over the Near East in <strong>May of 585 BC</strong>. To do this, he
        may have made use of observations which the Babylonians had accumulated over
        many centuries.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Anecdotes about Thales</h4>
        <p className="text-dark-200 mb-4">
          Plato tells a story about Thales being an <em>absent-minded professor</em>,
          who was so preoccupied with celestial matters that he did not observe what
          was in front of his feet and once fell into a well (<em>Theaetetus</em> 174a).
        </p>
        <p className="text-dark-200">
          However, Thales could turn his mind to practical matters when necessary.
          He constructed an almanac and used the theory of similar triangles to
          calculate the distance of ships from shore and the height of pyramids.
          To impress his business-minded fellow citizens, he once <strong>cornered
          the market in olive oil</strong> and made himself rich.
        </p>
      </div>

      {/* Thales's Theorems */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Thales's Theorems</h3>

      <p className="text-dark-200 mb-6">
        Thales's name is associated with a number of elementary theorems in geometry:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ol className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>A circle is bisected by a diameter.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>The base angles of an isosceles triangle are equal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>When two lines intersect, vertically opposite angles are equal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>The angle-angle-side congruence theorem.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Thales's Theorem:</strong> The angle subtended by a diameter
              of a circle is a right angle. (If <InlineMath>A</InlineMath>,{' '}
              <InlineMath>B</InlineMath>, <InlineMath>C</InlineMath> are points
              on a circle and <InlineMath>AC</InlineMath> is a diameter, then{' '}
              <InlineMath>{`\\angle ABC`}</InlineMath> is a right angle.)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">6.</span>
            <span>
              The sum of the angles in a triangle equals two right angles
              (or, as we now say, <InlineMath>{`180°`}</InlineMath>).
            </span>
          </li>
        </ol>
      </div>

      <Callout type="success">
        <p>
          All of these theorems must have been known <em>empirically</em> by the
          Egyptians and Babylonians. The reason they are associated with Thales
          is not that he discovered them, but that <strong>he was the first to
          prove them</strong>. This was the essential difference between pre-Greek
          and Greek mathematics: the Greeks established the logical connections
          among their results; they gave the first <strong>abstract proofs</strong>{' '}
          in mathematics.
        </p>
      </Callout>

      {/* Philosophy: All is Water */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Philosophy: "All is Water"</h3>

      <p className="text-dark-200 mb-6">
        As a philosopher, Thales is known for his statement that{' '}
        <strong>"everything is made of water."</strong> How should we interpret
        this, and what is its relevance to mathematics?
      </p>

      <p className="text-dark-200 mb-6">
        As we look around us, we observe that there are two kinds of things:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Discrete (Countable)" />
          <p className="text-sm text-dark-300 mb-2">
            Things that can be <strong>counted</strong>: pebbles, cows, people
          </p>
          <p className="text-xs text-dark-400">
            "One cow, two cows" — these are called <em>count nouns</em>
          </p>
        </Card>
        <Card>
          <CardHeader title="Continuous (Measurable)" />
          <p className="text-sm text-dark-300 mb-2">
            Things that can only be <strong>measured</strong>: butter, water, air
          </p>
          <p className="text-xs text-dark-400">
            "One butter, two butters" sounds odd — these are <em>mass nouns</em>
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        A fundamental question which physicists are still working on: Is the material
        universe ultimately <strong>discrete</strong> — consisting of unconnected
        fragments — or <strong>continuous</strong> — best understood as a connected
        continuum?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">The Deep Question</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400">•</span>
            <span>
              If the universe is <strong>discrete</strong>: How do we explain the
              unity of nature? How do we understand the continuity of change and motion?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400">•</span>
            <span>
              If the universe is <strong>continuous</strong>: How do we explain the
              diversity of nature? How do we understand the individuality of distinct objects?
            </span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Thales took the view that "all is water" — the material universe is best
        understood in terms of a single, continuous substance. Thales had
        undoubtedly noticed that ice and steam are both forms of water. What is
        important is not that he overlooked other possibilities, but that he raised
        a <strong>fascinating problem about the universe</strong>, which has not
        been resolved to this day.
      </p>

      {/* Other Ionian Philosophers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Ionian Philosophers</h3>

      <p className="text-dark-200 mb-6">
        Other Ionian philosophers agreed with Thales that there was a single primal
        substance, but not that it was water:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <h4 className="text-amber-400 font-semibold mb-2">Anaximenes of Miletus</h4>
          <p className="text-dark-300 text-sm">
            <strong>550 BC</strong> — Identified the primal substance as <strong>air</strong>.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <h4 className="text-amber-400 font-semibold mb-2">Heraclitus of Ephesus</h4>
          <p className="text-dark-300 text-sm">
            <strong>500 BC</strong> — Held that everything is made of <strong>fire</strong>.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 md:col-span-2">
          <h4 className="text-amber-400 font-semibold mb-2">Anaximander of Miletus</h4>
          <p className="text-dark-300 text-sm">
            A follower and compatriot of Thales. He thought the primal substance was
            something he called <strong>the Infinite</strong> (apeiron), which could
            take on the forms of earth, water, air, and fire. Today we might refer to
            solid, liquid, gas, and energy, respectively.
          </p>
        </div>
      </div>

      {/* The Opposing View: Pythagoras and Democritus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Opposing View</h3>

      <p className="text-dark-200 mb-6">
        In contrast to Thales's continuous view of reality, <strong>Pythagoras</strong>{' '}
        and <strong>Democritus</strong> took the view that reality is basically{' '}
        <strong>discrete</strong>. They tried to understand apparently continuous
        entities in terms of discrete entities — for example, understanding lengths
        as ratios of whole numbers.
      </p>

      <Callout type="warning">
        <p>
          Pythagoras taught that <strong>"all is number"</strong> — everything could
          be understood in terms of whole numbers and their ratios. This belief would
          eventually be challenged by the discovery that <InlineMath>{`\\sqrt{2}`}</InlineMath>{' '}
          is irrational, leading to a profound crisis in Greek mathematics.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Greek mathematics began in <strong>Ionia</strong> (modern Turkey),
              where Eastern influences were strongest, then spread to Italy and
              ultimately to Alexandria.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Thales of Miletus</strong> (600 BC) was the first Greek
              mathematician and philosopher. He visited Egypt and predicted the
              solar eclipse of 585 BC.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              Thales was the first to give <strong>proofs</strong> of geometric
              theorems. This was the essential difference between Greek and
              pre-Greek mathematics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Thales's Theorem</strong>: An angle inscribed in a semicircle
              (subtended by a diameter) is always a right angle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The philosophical debate between <strong>discrete</strong> (Pythagoras)
              and <strong>continuous</strong> (Thales) views of reality remains
              fundamental to mathematics and physics today.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={5} questions={section05Questions} />
    </LessonLayout>
  );
}
