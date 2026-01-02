import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section06Questions } from '../../data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-semibold mb-4">Pythagoras and His School</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        <strong>Pythagoras</strong> (570–500 BC) was born in Samos, a Greek island off
        the coast of what is now Turkey. According to ancient sources (Iamblichus,
        Porphyry, and Diogenes Laertius), he traveled and studied in the Persian
        empire, which extended from northern Greece to the Indus Valley and included
        ancient Mesopotamia.
      </p>

      <Callout type="info">
        <p>
          We know from <strong>Plimpton 322</strong> that the Babylonians understood
          what is now called the "theorem of Pythagoras," although Pythagoras may
          have given the first proof. He may have learned the theory of Pythagorean
          triangles from the Babylonians during his travels.
        </p>
      </Callout>

      {/* Eastern Influences */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Eastern Influences</h3>

      <p className="text-dark-200 mb-6">
        According to ancient sources, Pythagoras studied under the Zoroastrian
        priests, the so-called <strong>"Magi"</strong>. However, judging from his
        belief in <strong>reincarnation</strong> and his <strong>vegetarianism</strong>,
        it is more likely that he was influenced by Hindu tradition. Even his
        mathematics has an Indian flavor.
      </p>

      {/* The Pythagorean Brotherhood */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Pythagorean Brotherhood</h3>

      <p className="text-dark-200 mb-6">
        About <strong>525 BC</strong>, Pythagoras emigrated to Croton (modern Crotone)
        in southern Italy, where he founded a society, half-way between a political
        party and a religious cult, which came to be known as the{' '}
        <strong>"Pythagorean Brotherhood"</strong>. Some members were admitted to an
        inner circle consisting of the so-called "mathematicians."
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">The Word "Mathematics"</h4>
        <p className="text-dark-200">
          The word <strong>"mathematics"</strong> was in fact introduced by Pythagoras.
          The first part of this word is an old Indo-European root, related to the
          English word "mind." The modern meaning of "mathematics" is due to Aristotle.
        </p>
      </div>

      {/* All is Number */}
      <h3 className="text-xl font-semibold mt-10 mb-4">"All is Number"</h3>

      <p className="text-dark-200 mb-6">
        Whereas Thales had claimed that "all is water," Pythagoras taught that{' '}
        <strong>"all is number"</strong>. For Pythagoras, this implied that everything
        could be understood in terms of whole numbers and their ratios. In particular,
        he expected that every line segment was a whole number or a ratio of whole
        numbers (in terms of a given unit length).
      </p>

      <Callout type="warning">
        <p>
          It seems that the discovery of the <strong>irrationality of{' '}
          <InlineMath>{`\\sqrt{2}`}</InlineMath></strong> — the diagonal of a unit
          square — was made by his followers, and that Pythagoras himself was not
          aware of this. This discovery would create a profound crisis in Greek
          mathematics.
        </p>
      </Callout>

      {/* The Divine Number 10 */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Divine Number 10</h3>

      <p className="text-dark-200 mb-6">
        In his philosophy, Pythagoras reserved a special place for the number{' '}
        <strong>10</strong>. He called it the <strong>"divine number"</strong>, noting
        that:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Triangular Number" />
          <p className="text-sm text-dark-300 mb-2">
            10 is a <strong>triangular number</strong>: <InlineMath>{`10 = 1 + 2 + 3 + 4`}</InlineMath>
          </p>
          <p className="text-xs text-dark-400">
            The fourth triangular number, represented as a triangle of dots
          </p>
        </Card>
        <Card>
          <CardHeader title="Pythagorean Star" />
          <p className="text-sm text-dark-300 mb-2">
            The five-pointed <strong>Pythagorean star</strong> (pentagram) has{' '}
            <strong>10 vertices</strong>
          </p>
          <p className="text-xs text-dark-400">
            5 outer points + 5 inner points of the pentagon
          </p>
        </Card>
      </CardGrid>

      {/* Amicable Numbers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Amicable Numbers and Friendship</h3>

      <p className="text-dark-200 mb-6">
        The Pythagoreans ascribed all their mathematical discoveries to Pythagoras,
        but there is not, in fact, a single theorem which we can safely credit to
        him alone. However, according to a famous anecdote:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">What is Friendship?</h4>
        <p className="text-dark-200 mb-4">
          When someone challenged his slogan "all is number" by asking{' '}
          <em>"then what is friendship?"</em>, Pythagoras replied:
        </p>
        <p className="text-dark-200 text-lg font-semibold text-center">
          "Friendship is as 220 is to 284."
        </p>
        <p className="text-dark-400 mt-4 text-sm">
          Two natural numbers are <strong>amicable</strong> if each is the sum of
          the proper divisors of the other. The pair (220, 284) is the smallest
          amicable pair.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Let's verify: The proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44,
        55, 110, which sum to <strong>284</strong>. The proper divisors of 284 are
        1, 2, 4, 71, 142, which sum to <strong>220</strong>.
      </p>

      {/* Accomplishments of the Pythagoreans */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Accomplishments of the Pythagoreans</h3>

      <p className="text-dark-200 mb-6">
        Although primarily a religious and political group, the Pythagoreans did a
        fair amount of work in arithmetic, geometry, astronomy, and music — the four
        subjects later forming the medieval <strong>quadrivium</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-amber-400">Key Contributions</h4>
        <div className="space-y-4">
          <div>
            <h5 className="text-cyan-400 font-semibold">Theorem of Pythagoras</h5>
            <p className="text-dark-300 text-sm">
              The Pythagoreans are probably responsible for the proof found in
              Euclid's <em>Elements</em>, Book I, Proposition 47. They also found
              a proof of the converse.
            </p>
          </div>
          <div>
            <h5 className="text-cyan-400 font-semibold">The Three Means</h5>
            <p className="text-dark-300 text-sm mb-2">
              They examined relationships between:
            </p>
            <ul className="text-dark-400 text-sm space-y-1 ml-4">
              <li>• Arithmetic mean: <InlineMath>{`\\frac{a + b}{2}`}</InlineMath></li>
              <li>• Geometric mean: <InlineMath>{`\\sqrt{ab}`}</InlineMath></li>
              <li>• Harmonic mean: <InlineMath>{`\\frac{2ab}{a + b}`}</InlineMath></li>
            </ul>
          </div>
          <div>
            <h5 className="text-cyan-400 font-semibold">Perfect Numbers</h5>
            <p className="text-dark-300 text-sm">
              They found a formula giving perfect numbers (numbers equal to the
              sum of their proper divisors).
            </p>
          </div>
          <div>
            <h5 className="text-cyan-400 font-semibold">Regular Solids</h5>
            <p className="text-dark-300 text-sm">
              They discovered the <strong>dodecahedron</strong> (12-faced regular polyhedron).
            </p>
          </div>
          <div>
            <h5 className="text-cyan-400 font-semibold">Irrationality of √2</h5>
            <p className="text-dark-300 text-sm">
              They discovered that <InlineMath>{`\\sqrt{2}`}</InlineMath> is not rational.
              They used integer solutions of <InlineMath>{`x^2 - 2y^2 = \\pm 1`}</InlineMath>{' '}
              to find approximations to it.
            </p>
          </div>
        </div>
      </div>

      {/* Figurative Numbers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Figurative Numbers</h3>

      <p className="text-dark-200 mb-6">
        The Pythagoreans found proofs for several algebraic relations by means of
        studying <strong>figurative numbers</strong> — numbers represented as geometric
        arrangements of pebbles.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Square Numbers" />
          <p className="text-sm text-dark-300 mb-2">
            Looking at the sequence of squares as pebble arrays, they noticed:
          </p>
          <MathBlock>{`n^2 + (2n + 1) = (n + 1)^2`}</MathBlock>
          <p className="text-xs text-dark-400 mt-2">
            Hence: <InlineMath>{`1 + 3 + 5 + \\cdots + (2n-1) = n^2`}</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Triangular Numbers" />
          <p className="text-sm text-dark-300 mb-2">
            Fitting two triangular numbers into a parallelogram:
          </p>
          <MathBlock>{`1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}`}</MathBlock>
          <p className="text-xs text-dark-400 mt-2">
            The <InlineMath>n</InlineMath>th triangular number
          </p>
        </Card>
      </CardGrid>

      <Callout type="success">
        <p>
          The study of figurative numbers is alive and well today. Recently, very
          advanced mathematics was used to show that there are exactly{' '}
          <strong>six triangular numbers</strong> that are products of three
          consecutive integers.
        </p>
      </Callout>

      {/* Sum of Cubes */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Sum of Cubes</h3>

      <p className="text-dark-200 mb-6">
        One of the beautiful results known to the Pythagoreans:
      </p>

      <MathBlock>{`1^3 + 2^3 + 3^3 + \\cdots + n^3 = \\left(1 + 2 + 3 + \\cdots + n\\right)^2 = \\left(\\frac{n(n+1)}{2}\\right)^2`}</MathBlock>

      <p className="text-dark-200 mt-6 mb-6">
        In other words, <strong>the sum of the first <InlineMath>n</InlineMath> cubes
        equals the square of the sum of the first <InlineMath>n</InlineMath> numbers</strong>.
        This can be proved by constructing a square with sides of length{' '}
        <InlineMath>{`1 + 2 + \\cdots + n`}</InlineMath> and dividing it into figures
        whose areas are the first <InlineMath>n</InlineMath> perfect cubes.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Pythagoras</strong> (570–500 BC) founded the Pythagorean
              Brotherhood in Croton, Italy — part religious cult, part mathematical school.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              His philosophy of <strong>"all is number"</strong> held that everything
              could be understood in terms of whole numbers and their ratios.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The Pythagoreans proved the <strong>Pythagorean theorem</strong>,
              discovered <strong>amicable numbers</strong> (220 and 284), and studied
              the three means (arithmetic, geometric, harmonic).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              They discovered the <strong>irrationality of <InlineMath>{`\\sqrt{2}`}</InlineMath></strong>,
              which challenged the "all is number" philosophy and caused a crisis in
              Greek mathematics.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Figurative numbers</strong> (triangular, square) allowed them
              to prove algebraic identities geometrically, including the formula for
              the sum of cubes.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={6} questions={section06Questions} />
    </LessonLayout>
  );
}
