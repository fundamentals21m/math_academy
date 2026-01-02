import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section21Questions } from '../../data/quizzes';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-semibold mb-4">Mathematics in Islamic Countries</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        During Europe's Dark Ages, mathematics flourished in the Islamic world. Arabic
        was the common language of intellectuals—just as Latin was in medieval Europe—though
        the mathematicians themselves might have been Persians, Turks, or Arabs. It was
        through Arabic translations that many Greek works survived, and Arabic mathematicians
        gave us two words we use every day: <strong>algebra</strong> and <strong>algorithm</strong>.
      </p>

      {/* The House of Wisdom */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Baghdad and the House of Wisdom</h3>

      <p className="text-dark-200 mb-4">
        The intellectual center of the Arab world was <strong>Baghdad</strong>, founded in
        the 8th century as the seat of the eastern Caliphs. It was visited by Greek and
        Jewish physicians from the West and by Indian and Persian scholars from the East.
      </p>

      <p className="text-dark-200 mb-4">
        At the beginning of the 9th century, Caliph <strong>al-Mamun</strong> established
        a "House of Wisdom"—essentially a university—at Baghdad. He ordered translations
        of many Greek manuscripts, and it was thanks to his policy that many of these
        works were preserved.
      </p>

      <Callout type="info" title="Three Great Mathematicians">
        Three mathematicians associated with the House of Wisdom are:
        <ul className="mt-2 space-y-1">
          <li>• <strong>Al-Khwarizmi</strong> (c. 830)</li>
          <li>• <strong>Thabit Ibn-Qurra</strong> (836–901)</li>
          <li>• <strong>Al-Khayyami (Omar Khayyam)</strong> (c. 1050–1123)</li>
        </ul>
      </Callout>

      {/* Al-Khwarizmi */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Al-Khwarizmi: Algorithm and Algebra</h3>

      <p className="text-dark-200 mb-4">
        <strong>Muhammed ibn-Musa al-Khwarizmi</strong> probably came from Khorezm, south
        of the Aral Sea in central Asia. He wrote a book on Indian numerals whose Latin
        translation began: "Spoken has Algoritmi..."—giving us the word <strong>algorithm</strong>.
      </p>

      <Card className="mb-6">
        <CardHeader>The Birth of Algebra</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Al-Khwarizmi's most important book was the <em>Hisab al-jabr w'al-muqabalah</em>,
            from which we get the word <strong>algebra</strong>.
          </p>
          <p>
            The word "al-jabra" means something like "combining"—as in combining terms to
            solve an equation. The same root shows up in old Spanish as <em>algebrista</em>,
            meaning a <strong>bone-setter</strong>: one who joins together the parts of a
            broken bone!
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Al-Khwarizmi's "Algebra" was based on the work of <strong>Brahmagupta</strong>.
        Although extremely influential, it mathematically contained nothing new beyond what
        the ancient Babylonians or Greeks knew. The book is, however, fascinating as a
        source of sociological information—many problems deal with questions of
        <strong> inheritance according to Muslim religious law</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 font-semibold mb-2">An Example Problem:</p>
        <p className="text-dark-300 italic">
          "A man, in his illness before his death, makes someone a present of a slave girl,
          besides whom he has no property. Then he dies. The slave girl is worth 300 dirhams,
          and her dowry is 100 dirhams. The man to whom she has been presented cohabits with
          her. What is the legacy?"
        </p>
        <p className="text-dark-400 text-sm mt-2">
          Solution: <InlineMath>{`300 - x - \\frac{100}{300}x = 2x`}</InlineMath>, yielding
          x = 90 dirhams.
        </p>
      </div>

      {/* Thabit Ibn-Qurra */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Thabit Ibn-Qurra: Polymath Extraordinaire</h3>

      <p className="text-dark-200 mb-4">
        <strong>Thabit Ibn-Qurra</strong> (836–901) was an extraordinary polymath who lived
        in Baghdad and was a member of a neo-Pythagorean group called the <strong>Sabians</strong>.
        He wrote on politics, grammar, Plato's <em>Republic</em>, smallpox, the anatomy of
        birds, the beam balance, the salinity of seawater, Euclid's Parallel Postulate,
        cubic equations, and much more.
      </p>

      <p className="text-dark-200 mb-4">
        Unlike Aristotle, Thabit believed in <strong>actual infinity</strong> (not just
        potential infinity). He did pioneering work in spherical trigonometry and what we
        would now call calculus.
      </p>

      <Card className="mb-6">
        <CardHeader>Thabit's Rule for Amicable Numbers</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Two numbers are <strong>amicable</strong> if the sum of proper divisors of each
            equals the other. Thabit gave a wholly original rule for finding such pairs:
          </p>
          <Callout type="theorem" title="Thabit's Rule">
            Let n &gt; 1. Define <InlineMath>{`p = 3 \\cdot 2^n - 1`}</InlineMath>,
            <InlineMath>{`q = 3 \\cdot 2^{n-1} - 1`}</InlineMath>, and
            <InlineMath>{`r = 9 \\cdot 2^{2n-1} - 1`}</InlineMath>.
            If p, q, and r are all prime, then <InlineMath>{`2^n pq`}</InlineMath> and
            <InlineMath>{`2^n r`}</InlineMath> are amicable.
          </Callout>
          <div className="bg-dark-900 rounded p-3">
            <p><strong>n = 2:</strong> Gives the amicable pair <strong>220</strong> and <strong>284</strong></p>
            <p><strong>n = 4:</strong> Gives the amicable pair <strong>17,296</strong> and <strong>18,416</strong></p>
          </div>
        </div>
      </Card>

      {/* Omar Khayyam */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Omar Khayyam: Mathematician and Poet</h3>

      <p className="text-dark-200 mb-4">
        <strong>Al-Khayyami</strong> (c. 1050–1123), better known in the West as
        <strong> Omar Khayyam</strong>, wrote in Arabic on astronomy and mathematics. He
        revised the Julian calendar, approaching our Gregorian calendar in accuracy.
      </p>

      <Card className="mb-6">
        <CardHeader>Solving Cubic Equations Geometrically</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            In a book with the same title as al-Khwarizmi's, Omar Khayyam developed a
            <strong> geometric method</strong> for finding positive real roots of cubic
            and quartic equations.
          </p>
          <p>
            For example, to solve <InlineMath>{`x^3 + ax^2 + b^2x + b^2c = 0`}</InlineMath>,
            one intersects the hyperbola <InlineMath>{`y = bc/x + b`}</InlineMath> with a
            certain circle and discards the extraneous point.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        As <strong>Omar Khayyam</strong>, he wrote the famous <em>Rubaiyat</em> in Persian.
        Its 19th-century translation by Edward FitzGerald is still a bestseller. The poem
        expounds a rather Epicurean philosophy:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 italic text-dark-300">
        <p>Oh, threats of Hell and Hopes of Paradise!</p>
        <p>One thing at least is — <em>This</em> Life flies;</p>
        <p>One thing is certain and the rest is Lies;</p>
        <p>The Flower that once has blown for ever dies.</p>
      </div>

      <Callout type="note" title="A Famous Friendship">
        According to one story, Omar made a mutual assistance pact as a youth with two
        fellow students: Nizam-ul-Mulk (who became vizier to two Sultans) and Hasan Ben
        Sabbah. Nizam-ul-Mulk helped Omar to a yearly pension. Hasan, dissatisfied with a
        government post, became head of the Ismailis—surrounded by a group of fanatics
        called the <strong>"assassins"</strong> (from "hashish"). The sect exists today
        (without assassination); its leader is the Agha Khan.
      </Callout>

      {/* Legacy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Islamic Contribution</h3>

      <p className="text-dark-200 mb-4">
        The Islamic mathematicians served as a crucial bridge between ancient and modern
        mathematics. They:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Preserved</strong> Greek mathematical texts through Arabic translations</li>
          <li>• <strong>Transmitted</strong> Indian numerals and methods to Europe</li>
          <li>• <strong>Developed</strong> algebra as a systematic discipline</li>
          <li>• <strong>Advanced</strong> trigonometry and astronomical calculations</li>
          <li>• <strong>Pioneered</strong> geometric methods for solving higher-degree equations</li>
        </ul>
      </div>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• Baghdad's <strong>House of Wisdom</strong> preserved Greek texts and fostered mathematical research</li>
          <li>• <strong>Al-Khwarizmi</strong> gave us "algorithm" and "algebra" (from <em>al-jabr</em> = combining)</li>
          <li>• <strong>Thabit Ibn-Qurra</strong> believed in actual infinity and discovered a rule for amicable numbers</li>
          <li>• <strong>Omar Khayyam</strong> developed geometric methods for cubic equations and wrote the famous <em>Rubaiyat</em></li>
          <li>• The first amicable pair (220 and 284) comes from Thabit's rule with n = 2</li>
          <li>• Islamic mathematics bridged Greek antiquity and the European Renaissance</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={21} questions={section21Questions} />
    </LessonLayout>
  );
}
