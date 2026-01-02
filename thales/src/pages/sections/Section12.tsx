import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section12Questions } from '../../data/quizzes';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-semibold mb-4">Plato and Aristotle on Mathematics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The philosophical foundations of mathematics were shaped by two towering
        figures of ancient Greece: <strong>Plato</strong> and his student{' '}
        <strong>Aristotle</strong>. Their contrasting views on the nature of
        mathematical objects continue to influence philosophical debates to this day.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Timeline</h4>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li><strong>Socrates</strong> — 469–399 BC (Plato's mentor)</li>
          <li><strong>Plato</strong> — 429–349 BC (founded the Academy)</li>
          <li><strong>Aristotle</strong> — 384–322 BC (Plato's student)</li>
          <li><strong>Theaetetus</strong> — died 369 BC (Plato's brilliant student)</li>
          <li><strong>Eudoxus</strong> — 408–355 BC (studied at the Academy)</li>
        </ul>
      </div>

      {/* Socrates and the Meno */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Socrates: Knowledge as Recollection</h3>

      <p className="text-dark-200 mb-6">
        <strong>Socrates</strong> (469–399 BC) was Plato's mentor. In Plato's dialogue{' '}
        <em>Meno</em>, Socrates claimed that <strong>all knowledge is recollection</strong>.
        To prove this, he bet Meno that he could make an uneducated slave "remember"
        a geometric construction and its proof.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          The Slave Boy Demonstration
        </h4>
        <p className="text-dark-300 mb-3">
          Asked to double the area of a unit square, the slave first offered to
          double its side (giving area 4, not 2). Socrates then showed him a
          square with the midpoints of its sides joined, forming an inner square.
        </p>
        <p className="text-dark-300">
          The slave was led to "remember" that the square on the{' '}
          <strong>diagonal</strong> of the original square has exactly{' '}
          <strong>double the area</strong> — since the diagonal has length{' '}
          <InlineMath>{`\\sqrt{2}`}</InlineMath>.
        </p>
      </div>

      {/* Plato's Academy */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Plato and the Academy</h3>

      <p className="text-dark-200 mb-6">
        After Socrates' death, <strong>Plato</strong> (429–349 BC) travelled to
        Africa, studying in Heliopolis (near modern Cairo) and Cyrene in Libya
        with <strong>Theodorus</strong>, who had proved the irrationality of square
        roots of non-square integers up to 17. He also visited Italy and met{' '}
        <strong>Archytas</strong>, head of the Pythagorean school.
      </p>

      <p className="text-dark-200 mb-6">
        Around <strong>380 BC</strong>, Plato returned to Athens and founded the
        famous <strong>Academy</strong>. At its entrance was the famous inscription:
      </p>

      <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-lg p-6 mb-6 border border-amber-600/50">
        <p className="text-xl text-center text-amber-200 italic">
          "Let no one ignorant of geometry enter here"
        </p>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="Mathematical Rigor" />
          <p className="text-sm text-dark-300">
            Plato insisted that geometric constructions use only{' '}
            <strong>straightedge and compass</strong>. He rejected solutions
            using other curves as "inelegant."
          </p>
        </Card>
        <Card>
          <CardHeader title="Clear Foundations" />
          <p className="text-sm text-dark-300">
            Plato emphasized the importance of <strong>clear definitions
            and postulates</strong> — principles that would later be
            systematized by Euclid.
          </p>
        </Card>
        <Card>
          <CardHeader title="Mathematics and Virtue" />
          <p className="text-sm text-dark-300">
            Plato believed studying mathematics would help people become{' '}
            <strong>wise and therefore virtuous</strong>.
          </p>
        </Card>
      </CardGrid>

      {/* Plato's Philosophy */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Plato's Philosophy of Mathematics</h3>

      <p className="text-dark-200 mb-6">
        Plato believed that objects in the universe fall into two very different
        classes: the <strong>material</strong> and the <strong>immaterial</strong>.
        A chair or an ox belongs to the material world. A soul or a number belongs
        to the immaterial realm. The <em>drawing</em> of a square is material, but
        the square <em>itself</em> is immaterial.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          From the Republic (510d)
        </h4>
        <p className="text-dark-300 italic">
          "[Geometers] make use of the visible forms and talk about them, though
          they are not thinking of them but of those things of which they are a
          likeness, pursuing their inquiry for the sake of the square as such and
          the diagonal as such, and not for the sake of the image of it which
          they draw."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-dark-800 rounded-lg p-5">
          <h4 className="font-semibold text-red-400 mb-2">Material Realm</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Characterized by <strong>change</strong></li>
            <li>• Subject to <strong>uncertainty</strong></li>
            <li>• Known through <strong>imperfect</strong> perception</li>
            <li>• A drawn square may be erased</li>
            <li>• Its angles may not be exactly 90°</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-5">
          <h4 className="font-semibold text-green-400 mb-2">Immaterial Realm</h4>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>• Characterized by <strong>constancy</strong></li>
            <li>• Known with <strong>certainty</strong></li>
            <li>• Objects are <strong>perfect</strong></li>
            <li>• The ideal square has perfectly straight sides</li>
            <li>• Its diagonals are provably equal</li>
          </ul>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        For Plato, mathematical truths are <strong>absolute, necessary truths</strong>.
        By studying them, we become better positioned to know what is good and right.
        One studies number theory "for facilitating the conversion of the soul itself
        from the world of generation to essence and truth" (<em>Republic</em> 525c).
      </p>

      <Callout type="info">
        <p>
          <strong>Platonism</strong> as a philosophy of mathematics holds that
          mathematical objects (like real numbers and Euclidean squares) actually
          exist, independently of the human mind. Their properties are{' '}
          <strong>discovered</strong>, not created.
        </p>
      </Callout>

      {/* Aristotle's Philosophy */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Aristotle's Disagreement</h3>

      <p className="text-dark-200 mb-6">
        <strong>Aristotle</strong> (384–322 BC) was Plato's student but disagreed
        profoundly with his teacher about the nature of mathematics. In Book XIII
        of the <em>Metaphysics</em>, Aristotle asserts:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <p className="text-dark-300 italic">
          "Conclusions contrary alike to truth and to the usual views follow,
          if one is to suppose the objects of mathematics to exist thus as
          separate entities."
        </p>
        <p className="text-dark-400 text-sm mt-2">— Metaphysics 1077a</p>
      </div>

      <p className="text-dark-200 mb-6">
        For Aristotle, a word like "two" is not a noun designating an abstract
        object but rather an <strong>adjective describing a concrete object</strong>{' '}
        — "the two-yard ladder" or "a two-year period." Mathematical objects do
        not exist independently; they are abstractions from physical reality.
      </p>

      {/* Aristotle as Finitist */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Aristotle the Finitist</h3>

      <p className="text-dark-200 mb-6">
        While Platonism is compatible with actual infinities — infinite lines,
        sets with infinitely many elements — Aristotle was a <strong>staunch
        finitist</strong>. He made several key rejections:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">×</span>
            <span>
              <strong>Infinite sets</strong> — rejected entirely
              (<em>Physics</em> III)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">×</span>
            <span>
              <strong>Infinite magnitudes</strong> — no actual infinities exist
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">×</span>
            <span>
              <strong>Infinitesimals</strong> — rejected as incoherent
              (<em>Physics</em> 266b)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">×</span>
            <span>
              Would have rejected Cantor's <strong>aleph-null</strong>{' '}
              (<em>Metaphysics</em> 1084a)
            </span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          For Aristotle, a geometer can have <strong>as much as he needs</strong>{' '}
          of an infinite line, but he cannot have the whole line in its infinite
          totality. This is the distinction between <strong>potential infinity</strong>{' '}
          (always being able to extend) and <strong>actual infinity</strong>{' '}
          (a completed infinite whole).
        </p>
      </Callout>

      {/* Bivalence and Future Contingents */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Truth, Falsity, and the Future</h3>

      <p className="text-dark-200 mb-6">
        Under Plato's influence, Aristotle accepted that every mathematical
        statement is either <strong>true or false</strong> (the principle of
        bivalence). However, he had doubts about applying this to statements
        about the future.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-cyan-400">
        <h4 className="text-lg font-semibold mb-3 text-cyan-400">
          The Sea Battle Problem
        </h4>
        <p className="text-dark-300 mb-3">
          Aristotle wondered: Is the statement "there will be a sea battle
          tomorrow" either true or false? (<em>On Interpretation</em> 9)
        </p>
        <ul className="text-dark-300 text-sm space-y-1">
          <li>• How can it be <em>true</em> if the battle may not occur?</li>
          <li>• How can it be <em>false</em> if the fight is a real possibility?</li>
        </ul>
      </div>

      {/* Comparison */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Platonism vs. Aristotelianism</h3>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-3 px-4 text-amber-400">Aspect</th>
              <th className="text-left py-3 px-4 text-purple-400">Plato</th>
              <th className="text-left py-3 px-4 text-cyan-400">Aristotle</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Mathematical objects</td>
              <td className="py-3 px-4">Exist independently</td>
              <td className="py-3 px-4">Abstractions from physical things</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Numbers</td>
              <td className="py-3 px-4">Real entities in another realm</td>
              <td className="py-3 px-4">Adjectives describing things</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Infinite sets</td>
              <td className="py-3 px-4">Compatible with Platonism</td>
              <td className="py-3 px-4">Rejected entirely</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Mathematical truths</td>
              <td className="py-3 px-4">Discovered</td>
              <td className="py-3 px-4">Human-centered abstractions</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Modern echoes</td>
              <td className="py-3 px-4">Set theory, mathematical realism</td>
              <td className="py-3 px-4">Intuitionism, constructivism</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark-200 mb-6">
        Like 20th-century <strong>intuitionists</strong>, Aristotle's view is
        human-centered. The reality of numbers has to do not with some alien
        heaven, but with the way we describe our surroundings. The infinite
        must be rejected because we humans work in a finite way.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Socrates</strong> demonstrated in the <em>Meno</em> that
              an uneducated slave could "recollect" how to double the area of
              a square — by using the diagonal.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Plato</strong> founded the Academy (380 BC) with its
              famous inscription requiring knowledge of geometry. He believed
              mathematical objects exist in an immaterial realm.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Platonism</strong> holds that mathematical truths are
              absolute and necessary, and mathematical objects are discovered,
              not invented.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Aristotle</strong> disagreed: mathematical objects are
              abstractions from physical reality, not independent entities.
              He was a finitist who rejected actual infinities.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Aristotle distinguished between <strong>potential infinity</strong>{' '}
              (always extendable) and <strong>actual infinity</strong> (a
              completed infinite whole) — accepting only the former.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={12} questions={section12Questions} />
    </LessonLayout>
  );
}
