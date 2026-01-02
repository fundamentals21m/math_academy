import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section10Questions } from '../../data/quizzes';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2 className="text-2xl font-semibold mb-4">From Heraclitus to Democritus</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The century following Pythagoras saw a remarkable flowering of
        philosophical thought in Greece. These <strong>pre-Socratic philosophers</strong>{' '}
        grappled with fundamental questions about change, motion, and the nature
        of matter — questions that would profoundly influence the development of
        mathematics and physics.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Timeline</h4>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li><strong>Heraclitus</strong> of Ephesus — flourished ~500 BC</li>
          <li><strong>Parmenides</strong> of Elea — flourished ~480 BC</li>
          <li><strong>Zeno</strong> of Elea — flourished ~460 BC</li>
          <li><strong>Empedocles</strong> of Sicily — flourished ~440 BC</li>
          <li><strong>Democritus</strong> of Abdera — flourished ~420 BC</li>
        </ul>
      </div>

      {/* Heraclitus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Heraclitus: Everything is Flux</h3>

      <p className="text-dark-200 mb-6">
        <strong>Heraclitus of Ephesus</strong> (in western Turkey) took the view that
        everything is constantly changing. He is famous for declaring that{' '}
        <em>"one cannot step into the same river twice"</em> — the waters are always
        flowing, so it is never truly the same river.
      </p>

      <p className="text-dark-200 mb-6">
        According to Aristotle, the Pythagoreans had a list of opposites: one and
        many, finite and infinite, male and female. Heraclitus extended this idea,
        proclaiming that <strong>all change is the result of strife between
        opposites</strong>.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Fire as Primal Substance" />
          <p className="text-sm text-dark-300">
            Heraclitus believed <strong>fire</strong> was the fundamental substance.
            All matter can be transformed into fire, just as goods can be
            exchanged for gold.
          </p>
        </Card>
        <Card>
          <CardHeader title="Modern Influence" />
          <p className="text-sm text-dark-300">
            Heraclitus influenced <strong>Hegel</strong> and his dialectic of
            thesis, antithesis, and synthesis — later adopted by <strong>Marx</strong>{' '}
            in materialist form.
          </p>
        </Card>
      </CardGrid>

      <Callout type="info">
        <p>
          Did Heraclitus anticipate Einstein? His belief that all matter can be
          transformed into fire (energy) echoes the modern discovery that mass
          can be converted to energy via <InlineMath>{`E = mc^2`}</InlineMath>.
        </p>
      </Callout>

      {/* Parmenides */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Parmenides: Change is Illusion</h3>

      <p className="text-dark-200 mb-6">
        <strong>Parmenides of Elea</strong> took the opposite view from Heraclitus.
        He proclaimed that <strong>nothing changes</strong> — change is merely an
        illusion. From the point of view of the "goddess," the past and future
        are all there at the same time.
      </p>

      <p className="text-dark-200 mb-6">
        This sounds strange, but it resembles the modern physicist's view of
        <strong> four-dimensional space-time</strong>, where ever-changing events
        are replaced by unchanging world-lines. The physicist Richard Feynman
        showed that viewing the universe this way allows elegant explanations of
        fundamental processes — for example, a <strong>positron</strong> can be
        understood as an electron traveling <em>backwards in time</em>.
      </p>

      {/* Zeno's Paradoxes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Zeno's Paradoxes</h3>

      <p className="text-dark-200 mb-6">
        <strong>Zeno of Elea</strong> was a disciple of Parmenides. He produced four
        famous arguments attempting to prove that <strong>motion is impossible</strong>.
        What Zeno really showed was that if you do not allow infinite processes
        (what we now call <em>limits</em>), you cannot use mathematics to analyze
        motion. These paradoxes, recorded in Aristotle's <em>Physics</em>, probed
        the very foundations of mathematics.
      </p>

      <div className="space-y-6 mb-6">
        {/* Paradox 1: Dichotomy */}
        <div className="bg-dark-800 rounded-lg p-6 border-l-4 border-cyan-400">
          <h4 className="text-lg font-semibold mb-3 text-cyan-400">
            1. The Dichotomy
          </h4>
          <p className="text-dark-300 mb-3">
            A point moving from 0 to 1 must first cover half the distance (1/2),
            then half of what remains (1/4), then half again (1/8), and so on.
            After <InlineMath>n</InlineMath> steps, it has covered:
          </p>
          <MathBlock>{`\\frac{1}{2} + \\frac{1}{4} + \\cdots + \\frac{1}{2^n} = 1 - \\frac{1}{2^n}`}</MathBlock>
          <p className="text-dark-400 mt-3 text-sm">
            Since there is no <InlineMath>n</InlineMath> such that{' '}
            <InlineMath>{`1 - 1/2^n = 1`}</InlineMath>, Zeno concluded the point
            can <em>never</em> reach 1.
          </p>
        </div>

        {/* Paradox 2: Achilles and Tortoise */}
        <div className="bg-dark-800 rounded-lg p-6 border-l-4 border-amber-400">
          <h4 className="text-lg font-semibold mb-3 text-amber-400">
            2. Achilles and the Tortoise
          </h4>
          <p className="text-dark-300 mb-3">
            Achilles (starting at 0) races a tortoise (starting at 1). Achilles
            runs twice as fast. When Achilles reaches 1, the tortoise is at 1½.
            When Achilles reaches 1½, the tortoise is at 1¾. In general:
          </p>
          <p className="text-dark-300">
            When Achilles reaches <InlineMath>{`2 - 1/2^{n-1}`}</InlineMath>, the
            tortoise is at <InlineMath>{`2 - 1/2^n`}</InlineMath> — always ahead!
          </p>
          <p className="text-dark-400 mt-3 text-sm">
            Zeno concluded that Achilles can never catch the tortoise.
          </p>
        </div>

        {/* Paradox 3: The Arrow */}
        <div className="bg-dark-800 rounded-lg p-6 border-l-4 border-red-400">
          <h4 className="text-lg font-semibold mb-3 text-red-400">
            3. The Flying Arrow
          </h4>
          <p className="text-dark-300 mb-3">
            At any single instant, a flying arrow occupies exactly one position.
            If you took a high-speed photograph, it would appear perfectly still.
            At that instant, the arrow is <em>motionless</em>.
          </p>
          <p className="text-dark-400 mt-3 text-sm">
            If the arrow is motionless at every instant, how can it ever move?
          </p>
        </div>

        {/* Paradox 4: The Stadium */}
        <div className="bg-dark-800 rounded-lg p-6 border-l-4 border-purple-400">
          <h4 className="text-lg font-semibold mb-3 text-purple-400">
            4. The Stadium
          </h4>
          <p className="text-dark-300 mb-3">
            Three rows of people: A's are stationary, B's move right, C's move
            left at the same speed. If it takes one "instant" for B to pass an A,
            then it takes half an instant for B to pass a C.
          </p>
          <p className="text-dark-400 mt-3 text-sm">
            This implies there is no indivisible "quantum of time" — time must be
            infinitely divisible.
          </p>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Modern Solution:</strong> We resolve Zeno's paradoxes using
          the concept of a <strong>limit</strong>. For example,{' '}
          <InlineMath>{`\\lim_{n \\to \\infty}(1 - 1/2^n) = 1`}</InlineMath>. The
          infinite sum <InlineMath>{`1/2 + 1/4 + 1/8 + \\cdots`}</InlineMath>{' '}
          equals exactly 1.
        </p>
      </Callout>

      {/* Empedocles */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Empedocles: Love and Strife</h3>

      <p className="text-dark-200 mb-6">
        <strong>Empedocles of Sicily</strong> was important in experimental science
        and cosmology. He demonstrated that <strong>air is a substance</strong> by
        pushing an inverted cup into water — the water did not rush in to fill
        the apparent vacuum.
      </p>

      <p className="text-dark-200 mb-6">
        Beyond the four traditional elements (earth, water, air, fire), Empedocles
        postulated two forces: <strong>love</strong> and <strong>strife</strong>.
        When love prevails, the cosmos contracts; when strife prevails, it expands.
        He seems to have anticipated modern astronomers in recognizing that our
        universe is in an <strong>expanding phase</strong>.
      </p>

      <Callout type="warning">
        <p>
          As his final experiment, Empedocles allegedly leaped into the volcano
          Mount Etna to demonstrate his immortality. The experiment was not
          successful.
        </p>
      </Callout>

      {/* Democritus */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Democritus: The Atomic Theory</h3>

      <p className="text-dark-200 mb-6">
        <strong>Democritus of Abdera</strong> finally did away with continuous
        substances and replaced them with <strong>atoms</strong>. These were assumed
        to be:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span><strong>Physically indivisible</strong> (though not geometrically)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span><strong>Indestructible</strong> and constantly moving</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span>Separated by <strong>empty space</strong> (the void)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">•</span>
            <span><strong>Infinite in number</strong>, but varying in shape and size</span>
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        Democritus was a <strong>determinist</strong> — he believed that everything
        that happens must happen. He wrote books on geometry (now lost) and is
        said to have emphasized the importance of proofs. He discovered how to
        calculate the <strong>volume of a pyramid or cone</strong>:
      </p>

      <MathBlock>{`V = \\frac{1}{3} \\times \\text{base area} \\times \\text{height}`}</MathBlock>

      <Callout type="info">
        <p>
          In the 19th century, scientists thought they had identified Democritus's
          atoms. Then Rutherford showed these "atoms" were divisible! Perhaps the
          word "atom" should have been reserved for electrons and quarks — if
          these are indeed the ultimate constituents of matter.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Heraclitus</strong> believed everything is in constant flux,
              with fire as the primal substance and change driven by strife
              between opposites.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Parmenides</strong> took the opposite view: change is an
              illusion, foreshadowing the four-dimensional space-time of modern
              physics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Zeno's four paradoxes</strong> (Dichotomy, Achilles, Arrow,
              Stadium) showed that analyzing motion requires the concept of
              limits and infinite processes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Empedocles</strong> recognized air as a substance and
              proposed love and strife as cosmic forces governing expansion
              and contraction.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Democritus</strong> proposed the atomic theory: matter
              consists of indivisible atoms moving through empty space. He also
              discovered the formula for pyramid volume.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={10} questions={section10Questions} />
    </LessonLayout>
  );
}
