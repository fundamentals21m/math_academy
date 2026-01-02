import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section22Questions } from '../../data/quizzes';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-semibold mb-4">New Beginnings in Europe</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Europeans only began to rouse themselves from the intellectual slumber of the
        Dark Ages as they came in contact with Arab civilization, mostly in Spain.
        In the thousand years from 400 to 1400 AD, there was exactly <strong>one</strong>
        outstanding European mathematician: Leonardo of Pisa, better known as Fibonacci.
      </p>

      {/* Early Figures */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The First Stirrings</h3>

      <Card className="mb-6">
        <CardHeader>Gerbert: The Mathematical Pope</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            <strong>Gerbert</strong> (940–1003) studied in Spain, where he learned the
            Indian numerals (but not zero). He wrote on arithmetic and geometry, which
            so overawed his contemporaries that <strong>they believed he had a pact
            with the devil</strong>!
          </p>
          <p>
            In spite of this reputation, he became Pope and was known as <strong>Sylvester II</strong>
            from 999 to 1003. One of the most difficult problems in his <em>Geometry</em>
            was to find x and y such that <InlineMath>{`x^2 + y^2 = a^2`}</InlineMath> and
            <InlineMath>{`\\frac{1}{2}xy = b`}</InlineMath>—a problem that would have been
            an easy exercise for a Babylonian scribe!
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Contemporary with Gerbert was another mathematician and church person,
        <strong> Hrotsvitha of Saxony</strong> (932–1002), who had an interest in
        perfect numbers—one of the earliest known female mathematicians in Europe.
      </p>

      {/* Adelhard and Translators */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Translators</h3>

      <div className="space-y-3 mb-6">
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Adelhard of Bath (1075–1160):</span>
          <span className="text-dark-300 ml-2">
            Attended lectures at Cordova in Spain around 1120, <strong>disguising himself
            as a Muslim</strong>. There he obtained a copy of Euclid's <em>Elements</em>
            in Arabic, which he translated into Latin. All European editions were based
            on this translation until the Greek original became available in 1533.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Abraham Ben Ezra (ca. 1095–1167):</span>
          <span className="text-dark-300 ml-2">
            Based in Spain, he travelled widely between Egypt and England. His book
            <em> Sefer ha-Mispar</em> explained Hindu arithmetic using Hebrew letters
            for numerals, with a zero added. He also wrote pessimistic poetry, asserting
            that if he were to trade in candles, it would always be noon!
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Jordanus Nemorarius (early 13th c.):</span>
          <span className="text-dark-300 ml-2">
            Wrote about triangles, circles, regular polygons, Arabic numerals, primes,
            perfect numbers, and progressions. Like Diophantus, he used letters to denote
            unknowns in equations.
          </span>
        </div>
        <div className="bg-dark-800 rounded-lg p-3">
          <span className="text-amber-400 font-semibold">Nicole Oresme (1320–1382):</span>
          <span className="text-dark-300 ml-2">
            A French bishop who gave the <strong>first proof of the divergence of the
            harmonic series</strong>: <InlineMath>{`1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots = \\infty`}</InlineMath>.
          </span>
        </div>
      </div>

      {/* Fibonacci */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Fibonacci: The Lone Genius</h3>

      <p className="text-dark-200 mb-4">
        <strong>Leonardo of Pisa</strong> (1180–1250), known as <strong>Fibonacci</strong>,
        was a contemporary of St. Francis of Assisi. He learned his mathematics in
        Algeria, where his father was a custom house official.
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Liber abaci (1202)</CardHeader>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>• Explained the Indian system of numerals</li>
            <li>• Introduced the Fibonacci sequence</li>
            <li>• Popularized Hindu-Arabic numerals in Europe</li>
          </ul>
        </Card>
        <Card>
          <CardHeader>Liber quadratorum</CardHeader>
          <ul className="text-dark-300 space-y-1 text-sm">
            <li>• Original work in number theory</li>
            <li>• First proof of the two-squares identity</li>
            <li>• Advanced Diophantine analysis</li>
          </ul>
        </Card>
      </CardGrid>

      <Card className="mb-6 mt-4">
        <CardHeader>Fibonacci's Two-Squares Identity</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            In his <em>Liber quadratorum</em>, Fibonacci gave the first proof of:
          </p>
          <MathBlock>{`(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (bc + ad)^2`}</MathBlock>
          <p>
            This identity implies that if each of two integers is a sum of two squares,
            then so is their product. In modern terms, this is equivalent to the fact
            that the product of the norms of two complex numbers equals the norm of
            their product.
          </p>
        </div>
      </Card>

      <Callout type="note" title="Emperor Frederick II's Math Contest">
        In 1225, Emperor Frederick II delayed his departure on a crusade to organize
        a mathematical contest. Fibonacci answered all challenges with flying colors,
        including problems like:
        <ul className="mt-2 space-y-1">
          <li>• Find a fraction a/b such that (a/b)² ± 5 are both squares of fractions</li>
          <li>• Solve x³ + 2x² + 10x = 20</li>
        </ul>
        Fibonacci also understood negative numbers, interpreting them as "losses."
      </Callout>

      {/* The Fibonacci Sequence */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Fibonacci Sequence</h3>

      <p className="text-dark-200 mb-4">
        The famous <strong>Fibonacci sequence</strong> arose from a problem in the
        <em> Liber abaci</em>:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 italic text-dark-300">
        How many pairs of rabbits will be produced in a year, beginning with a single
        pair, if every month each pair bears a new pair which becomes productive from
        the second month on?
      </div>

      <p className="text-dark-200 mb-4">
        The answer gives the sequence:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 text-center">
        <p className="text-2xl font-mono text-amber-400">
          1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
        </p>
        <p className="text-dark-400 text-sm mt-2">
          Each number is the sum of the two preceding numbers
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>The Fibonacci Formula</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The nth Fibonacci number has a beautiful closed form, discovered by
            A. de Moivre in 1730:
          </p>
          <MathBlock>{`u_n = \\frac{1}{\\sqrt{5}} \\left[ \\left( \\frac{1 + \\sqrt{5}}{2} \\right)^n - \\left( \\frac{1 - \\sqrt{5}}{2} \\right)^n \\right]`}</MathBlock>
          <p>
            The number <InlineMath>{`\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618`}</InlineMath>
            is called the <strong>golden ratio</strong>. It played a role in Euclid's
            construction of the regular pentagon, and <InlineMath>{`u_{n+1}/u_n`}</InlineMath>
            approaches φ as n → ∞.
          </p>
        </div>
      </Card>

      <h4 className="text-lg font-semibold mt-6 mb-3">Fibonacci Numbers in Nature and Mathematics</h4>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Sunflowers:</strong> Seeds form two sets of spirals—if there are 21 clockwise arcs, there are 13 counterclockwise arcs. These are always consecutive Fibonacci numbers!</li>
          <li>• <strong>Hilbert's Tenth Problem:</strong> A crucial element in Matiyasevič's 1970 proof that there is no general procedure for solving Diophantine equations</li>
          <li>• <strong>The Fibonacci Quarterly:</strong> An entire academic journal devoted to these remarkable numbers</li>
        </ul>
      </div>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• Europeans learned mathematics from Arab civilization, especially in Spain</li>
          <li>• <strong>Gerbert</strong> (Pope Sylvester II) learned Indian numerals but was suspected of devilry</li>
          <li>• <strong>Adelhard of Bath</strong> disguised himself as Muslim to translate Euclid (1120)</li>
          <li>• <strong>Nicole Oresme</strong> proved the harmonic series diverges</li>
          <li>• <strong>Fibonacci</strong> (1180–1250) was the only outstanding European mathematician in 1000 years</li>
          <li>• The <strong>Fibonacci sequence</strong> (1, 1, 2, 3, 5, 8, ...) appears in nature and advanced mathematics</li>
          <li>• The <strong>golden ratio</strong> <InlineMath>{`\\varphi = (1 + \\sqrt{5})/2`}</InlineMath> connects to Fibonacci numbers</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={22} questions={section22Questions} />
    </LessonLayout>
  );
}
