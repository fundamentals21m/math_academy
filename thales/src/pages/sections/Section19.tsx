import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section19Questions } from '../../data/quizzes';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-semibold mb-4">Alexandria from 200 BC to 500 AD</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        After the golden age of Euclid, Archimedes, and Apollonius, Alexandria remained
        the mathematical center of the ancient world for another 700 years. This period
        saw the founding of trigonometry, the birth of algebra, and the last great
        encyclopedic works of Greek mathematics—before the closing of the pagan schools
        and the fall of the library.
      </p>

      {/* Hipparchus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Hipparchus: The Founder of Trigonometry</h3>

      <p className="text-dark-200 mb-4">
        <strong>Hipparchus</strong> (190–120 BC) was primarily an astronomer, but his
        astronomical work required him to invent a new branch of mathematics:
        <strong> trigonometry</strong>.
      </p>

      <p className="text-dark-200 mb-4">
        Hipparchus made remarkably accurate astronomical measurements:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• The length of the year, to within <strong>6 minutes</strong></li>
          <li>• The angle between the ecliptic and the equator</li>
          <li>• The annual precession of the equinoxes</li>
          <li>• The lunar parallax and eccentricity of the solar orbit</li>
        </ul>
      </div>

      <Card className="mb-6">
        <CardHeader>The First Trigonometric Table</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Hipparchus drew up a table giving, for each angle at the center of a unit
            circle, the length of the chord it cuts off. For example:
          </p>
          <MathBlock>{`\\text{chord}(30°) = \\frac{31.06}{60}`}</MathBlock>
          <p>
            In modern terms, <InlineMath>{`\\text{chord}(x) = 2\\sin(x/2)`}</InlineMath>.
            To construct this table, Hipparchus used formulas equivalent to:
          </p>
          <MathBlock>{`\\sin(x \\pm y) = \\sin x \\cos y \\pm \\cos x \\sin y`}</MathBlock>
          <MathBlock>{`2\\sin^2(x/2) = 1 - \\cos x`}</MathBlock>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Hipparchus also recognized that the moon's orbit is not a perfect circle centered
        on Earth—a better approximation uses an <strong>epicycle</strong>. He suggested
        that higher-order epicycles were necessary to describe planetary motions.
      </p>

      {/* Heron and Menelaus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Heron and Menelaus</h3>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Heron's Formula</CardHeader>
          <div className="text-dark-300 space-y-2">
            <p>
              <strong>Heron</strong> (c. 10–70 AD) is known for the formula (probably
              discovered by Archimedes) for the area of a triangle:
            </p>
            <MathBlock>{`A = \\sqrt{s(s-a)(s-b)(s-c)}`}</MathBlock>
            <p className="text-sm text-dark-400">
              where <InlineMath>{`s = (a+b+c)/2`}</InlineMath> is the semi-perimeter.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Menelaus's Theorem</CardHeader>
          <div className="text-dark-300 space-y-2">
            <p>
              <strong>Menelaus</strong> (c. 70–140 AD) founded <strong>spherical
              trigonometry</strong> and proved a fundamental theorem about collinearity.
            </p>
            <p className="text-sm text-dark-400">
              If D, E, F lie on lines BC, AC, AB of triangle ABC, they are collinear
              if and only if <InlineMath>{`BD \\cdot CE \\cdot AF = CD \\cdot AE \\cdot BF`}</InlineMath>.
            </p>
          </div>
        </Card>
      </CardGrid>

      {/* Ptolemy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Ptolemy: The Almagest</h3>

      <p className="text-dark-200 mb-4">
        <strong>Claudius Ptolemy</strong> (c. 100–170 AD) did for astronomy what Euclid
        had done for geometry: he wrote the definitive textbook, known by its Arabic
        name, the <em>Almagest</em> ("Greatest"). Like Hipparchus, Ptolemy gave a table
        of chords.
      </p>

      <Card className="mb-6">
        <CardHeader>Ptolemy's Theorem</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Book I of the Almagest contains a beautiful result about cyclic quadrilaterals:
          </p>
          <Callout type="theorem" title="Ptolemy's Theorem">
            In a cyclic quadrilateral (one inscribed in a circle), the product of the
            diagonals equals the sum of the products of the two pairs of opposite sides.
          </Callout>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Ptolemy used Greek letters to denote numbers, employing 27 symbols (including
        two obsolete Phoenician letters) to represent 1–9, 10–90, and 100–900. He also
        used a small circle to denote <strong>zero</strong> and employed the Babylonian
        sexagesimal system for angles and lengths.
      </p>

      {/* Diophantus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Diophantus: The Father of Algebra</h3>

      <p className="text-dark-200 mb-4">
        In 250 AD, while Plotinus was teaching Platonism in Rome, <strong>Diophantus</strong>
        was writing the <em>Arithmetica</em> in Alexandria. This work originally contained
        13 books—we had only 6 until 1973, when 3 more were discovered in Arabic translation.
      </p>

      <Card className="mb-6">
        <CardHeader>A Problem from the Arithmetica</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            <strong>Book II, Problem 9:</strong> "To divide a given number which is the
            sum of two squares into two other squares."
          </p>
          <p>
            Given <InlineMath>{`a^2 + b^2`}</InlineMath>, find another representation
            <InlineMath>{`x^2 + y^2 = a^2 + b^2`}</InlineMath>.
          </p>
          <p>
            For <InlineMath>{`a = 2, b = 3`}</InlineMath> (so <InlineMath>{`a^2 + b^2 = 13`}</InlineMath>),
            Diophantus sets <InlineMath>{`(x+2)^2`}</InlineMath> as the first square and
            <InlineMath>{`(2x-3)^2`}</InlineMath> as the second, obtaining <InlineMath>{`x = 8/5`}</InlineMath>,
            giving squares <InlineMath>{`324/25`}</InlineMath> and <InlineMath>{`1/25`}</InlineMath>.
          </p>
        </div>
      </Card>

      <Callout type="note" title="What Is a 'Diophantine Equation'?">
        Curiously, what we now call a "Diophantine equation" is one whose unknowns must
        be <strong>integers</strong>. Diophantus himself, however, accepted any
        <strong> rational</strong> solution!
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Diophantus was the first to make systematic use of <strong>symbolic notation</strong>
        for algebraic expressions. He denoted addition by juxtaposition, subtraction by
        a special symbol, and used symbols for powers of the unknown.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 font-semibold mb-2">Diophantus's Notation:</p>
        <ul className="text-dark-300 space-y-1 font-mono">
          <li>• <InlineMath>{`K^\\nu`}</InlineMath> for <InlineMath>{`x^3`}</InlineMath></li>
          <li>• <InlineMath>{`\\Delta^\\nu`}</InlineMath> for <InlineMath>{`x^2`}</InlineMath></li>
          <li>• <InlineMath>{`\\varsigma`}</InlineMath> for <InlineMath>{`x`}</InlineMath></li>
          <li>• <InlineMath>{`M^\\circ`}</InlineMath> for <InlineMath>{`x^0`}</InlineMath> (constants)</li>
        </ul>
      </div>

      {/* Pappus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Pappus: The Last Geometer</h3>

      <p className="text-dark-200 mb-4">
        By the time of <strong>Pappus</strong> (c. 290–350 AD), the school of mathematics
        at Alexandria had declined. Pappus was its last, lone member, and he wrote an
        encyclopedic <em>Collection</em> of earlier mathematical works.
      </p>

      <Card className="mb-6">
        <CardHeader>The Theorem of Pappus</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Book VII of the <em>Collection</em> contains a theorem far more important
            than Pappus realized—it expresses the <strong>commutativity of multiplication</strong>
            and is fundamental to projective geometry.
          </p>
          <Callout type="theorem" title="Pappus's Theorem">
            Given points A, B, C on one line and A′, B′, C′ on another, the three
            intersection points P = BC′ ∩ CB′, Q = AB′ ∩ BA′, and R = CA′ ∩ AC′
            are collinear.
          </Callout>
          <p className="text-sm text-dark-400">
            Hilbert made use of this theorem in his axiomatic presentation of Euclidean geometry.
          </p>
        </div>
      </Card>

      {/* Other Mathematicians */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Other Notable Figures</h3>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Nicomachus (c. 100 AD):</span>
          <span className="text-dark-300 ml-2">
            A Pythagorean from Palestine who published a book on number theory—the basis
            for much of our knowledge of Pythagorean mathematics.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Hypatia (c. 360–415 AD):</span>
          <span className="text-dark-300 ml-2">
            Daughter of Theon of Alexandria; wrote commentaries on Apollonius and Diophantus.
            Murdered by a mob during an anti-pagan riot—the first female mathematician
            known to history.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Proclus (410–485 AD):</span>
          <span className="text-dark-300 ml-2">
            Studied in Alexandria, worked in Athens. His commentary on Euclid's first book
            contains valuable information about the history of Greek mathematics.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Boethius (c. 480–524 AD):</span>
          <span className="text-dark-300 ml-2">
            Studied in Athens, lived in Rome. His <em>Arithmetic</em> and <em>Geometry</em>
            were standard textbooks in the Middle Ages, though they contained less
            mathematics than Euclid's <em>Elements</em>.
          </span>
        </div>
      </div>

      {/* The End of an Era */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The End of an Era</h3>

      <p className="text-dark-200 mb-4">
        In <strong>320 AD</strong>, the Roman Empire had its first Christian emperor,
        Constantine. In <strong>529 AD</strong>, Emperor Justinian closed the pagan
        schools of philosophy at Athens. The "Dark Ages" of Europe had begun.
      </p>

      <Callout type="note" title="The Fate of the Library">
        When the Arabs conquered Alexandria in <strong>641 AD</strong>, there probably
        was not much left of the famous library. According to a story from 13th-century
        Muslim sources, Caliph Omar I ordered its destruction, arguing: "If the books
        of the Greeks confirm what is written in the Koran, they are superfluous; if
        they contradict it, they are dangerous." Modern historians doubt this story—it
        may have been invented to justify the later destruction of a different library.
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        It is interesting that we know of few mathematicians from this period (50–500 AD)
        who converted to Christianity. The Academy at Athens and the University at
        Alexandria both rejected the new religion. A dialogue between reason and faith
        would only emerge in the later Middle Ages, with thinkers like Aquinas (c. 1250 AD).
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Hipparchus</strong> founded trigonometry with his table of chords</li>
          <li>• <strong>Heron's formula</strong>: <InlineMath>{`A = \\sqrt{s(s-a)(s-b)(s-c)}`}</InlineMath></li>
          <li>• <strong>Ptolemy's Theorem</strong>: In a cyclic quadrilateral, diagonals' product = sum of opposite sides' products</li>
          <li>• <strong>Diophantus</strong> wrote the <em>Arithmetica</em>—the first algebra textbook with symbolic notation</li>
          <li>• <strong>Pappus's Theorem</strong> is fundamental to projective geometry</li>
          <li>• <strong>Hypatia</strong> (d. 415) was the first known female mathematician</li>
          <li>• <strong>529 AD</strong>: Justinian closes pagan schools; <strong>641 AD</strong>: Arabs conquer Alexandria</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={19} questions={section19Questions} />
    </LessonLayout>
  );
}
