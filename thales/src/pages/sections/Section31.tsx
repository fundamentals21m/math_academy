import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section31Questions } from '../../data/quizzes';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <h2 className="text-2xl font-semibold mb-4">The Number System</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        We now begin Part II, which examines the <strong>foundations of mathematics</strong>.
        Much of 19th and 20th century mathematics is not accessible at the undergraduate
        level, but we can examine some important and up-to-date material, including
        exciting recent discoveries. We start with the number systems.
      </p>

      {/* Standard Notation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Standard Notation for Number Sets</h3>

      <p className="text-dark-200 mb-4">
        The following letters are now widely used to represent sets of numbers.
        This notation was first proposed by <strong>N. Bourbaki</strong>—actually
        a slowly changing group of French mathematicians who have been engaged for
        decades in writing up the <em>Elements of Mathematics</em> in a systematic
        and trend-setting fashion.
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <table className="w-full text-dark-200">
          <tbody>
            <tr className="border-b border-dark-600">
              <td className="py-2 font-bold text-amber-400"><InlineMath>{`\\mathbb{N}`}</InlineMath></td>
              <td className="py-2">the <strong>natural numbers</strong> 0, 1, 2, ...</td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 font-bold text-amber-400"><InlineMath>{`\\mathbb{Z}`}</InlineMath></td>
              <td className="py-2">the <strong>integers</strong> (<InlineMath>{`\\mathbb{Z}`}</InlineMath> is for "Zahlen")</td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 font-bold text-amber-400"><InlineMath>{`\\mathbb{Q}`}</InlineMath></td>
              <td className="py-2">the <strong>rationals</strong> (<InlineMath>{`\\mathbb{Q}`}</InlineMath> is for "quotients")</td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 font-bold text-amber-400"><InlineMath>{`\\mathbb{R}`}</InlineMath></td>
              <td className="py-2">the <strong>real numbers</strong></td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 font-bold text-amber-400"><InlineMath>{`\\mathbb{C}`}</InlineMath></td>
              <td className="py-2">the <strong>complex numbers</strong> <InlineMath>{`a + bi`}</InlineMath></td>
            </tr>
            <tr>
              <td className="py-2 font-bold text-amber-400"><InlineMath>{`\\mathbb{H}`}</InlineMath></td>
              <td className="py-2">the <strong>quaternions</strong> (<InlineMath>{`\\mathbb{H}`}</InlineMath> is for Hamilton)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Logical vs Historical Order */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Logical Order vs. Historical Order</h3>

      <p className="text-dark-200 mb-4">
        The number systems are arranged here in what mathematicians conceive to be
        the correct <strong>logical order</strong>, which differs from the historical one.
        Zero was not originally considered to be a natural number, and positive rationals
        and reals were studied before negative integers were considered.
      </p>

      <Callout type="note" title="Extending Number Systems">
        <p className="mb-2">
          Each set after <InlineMath>{`\\mathbb{N}`}</InlineMath> "extends" the preceding
          one and, with the exception of <InlineMath>{`\\mathbb{H}`}</InlineMath>, is
          motivated by our desire to solve equations which are otherwise unsolvable:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
          <li><InlineMath>{`\\mathbb{Z}`}</InlineMath> is needed to solve{' '}
            <InlineMath>{`x + 2 = 0`}</InlineMath></li>
          <li><InlineMath>{`\\mathbb{Q}`}</InlineMath> is needed to solve{' '}
            <InlineMath>{`2x = 3`}</InlineMath></li>
          <li><InlineMath>{`\\mathbb{R}`}</InlineMath> is needed to solve{' '}
            <InlineMath>{`x^2 = 2`}</InlineMath></li>
          <li><InlineMath>{`\\mathbb{C}`}</InlineMath> is needed to solve{' '}
            <InlineMath>{`x^2 + 1 = 0`}</InlineMath></li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Mathematicians often "construct" a set on this list from the set just above it.
        For example, they build the rationals out of the integers by equating rationals
        with certain classes of pairs of integers: the fraction <InlineMath>{`2/3`}</InlineMath>{' '}
        is equated with <InlineMath>{`\\{(2,3), (4,6), \\ldots, (-2,-3), \\ldots\\}`}</InlineMath>.
      </p>

      <Card className="mb-6">
        <CardHeader>Kronecker's Quote</CardHeader>
        <div className="text-dark-300 space-y-3">
          <blockquote className="border-l-4 border-amber-500 pl-4 italic">
            "God created the natural numbers, all the other numbers were made by man."
          </blockquote>
          <p className="text-sm">
            — Leopold Kronecker (1823–1891)
          </p>
          <p className="text-sm">
            Still, as we shall see, some people have tried to construct the natural
            numbers also. This has led one wit to suggest that "man created the natural
            numbers, all the others were Dieudonné."
          </p>
        </div>
      </Card>

      {/* What Are Numbers? */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What Are the Natural Numbers?</h3>

      <p className="text-dark-200 mb-4">
        In particular, what <em>is</em> the number 2? We know it is not just the sign
        or numeral "2" (or "II"). It is not something perishable or changing.
        But what is it? There is more than one answer, depending on one's philosophical
        school.
      </p>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Platonists</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Numbers are <strong>abstract, necessarily existing objects</strong>.
              The number two is that Platonic "form" or "idea" in virtue of which
              things have the property of two-ness.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Logicists (Russell)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Numbers can be defined in terms of <strong>logic</strong>. For Bertrand
              Russell, 2 is the <strong>set of all unordered pairs</strong>:
            </p>
            <MathBlock>{`2 = \\{x \\mid \\exists_y \\exists_z (y \\neq z \\land x = \\{y,z\\})\\}`}</MathBlock>
          </div>
        </Card>
        <Card>
          <CardHeader>Von Neumann</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Von Neumann defined <strong>2 as the set</strong> <InlineMath>{`\\{0, 1\\}`}</InlineMath>,
              where <InlineMath>{`1 = \\{0\\}`}</InlineMath> and{' '}
              <InlineMath>{`0`}</InlineMath> is the empty set <InlineMath>{`\\emptyset`}</InlineMath>.
            </p>
            <p>
              Each natural number <InlineMath>{`n`}</InlineMath> is the set of all
              smaller natural numbers.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Church</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Church held that 2 is the <strong>process of iteration</strong>:
            </p>
            <MathBlock>{`\\lambda f(f \\circ f)`}</MathBlock>
            <p>
              The mapping which assigns to every function <InlineMath>{`f`}</InlineMath>{' '}
              its iterate <InlineMath>{`f \\circ f`}</InlineMath>, defined by{' '}
              <InlineMath>{`(f \\circ f)(x) = f(f(x))`}</InlineMath>.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Formalists (Peano)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              For formalists, 2 is just a class of expressions manipulated according
              to certain rules. Peano sees <strong>2 as SS0</strong>, where "SS0" is
              a string of symbols manipulated according to axioms.
            </p>
            <p>
              <InlineMath>{`S`}</InlineMath> is the successor function, so{' '}
              <InlineMath>{`SS0 = S(S(0))`}</InlineMath>.
            </p>
          </div>
        </Card>
        <Card>
          <CardHeader>Intuitionists (Brouwer)</CardHeader>
          <div className="text-dark-300 text-sm space-y-2">
            <p>
              Numbers are <strong>mental entities</strong> which would not exist
              unless people thought about them. For Brouwer, 2 is the concept which
              expresses the principle of <strong>"two-ity"</strong>.
            </p>
          </div>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4 text-sm italic">
        What is the true answer? Fortunately, Professor Tournesol was able to
        discover this when attending a conference in France: the number 2 is a
        pair of platinum balls kept at room temperature in the second drawer at
        the Bureau of Standards in Paris. (A mathematical joke!)
      </p>

      {/* Other Numbers */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Beyond the Standard Number Systems</h3>

      <p className="text-dark-200 mb-4">
        We should note that there are other kinds of numbers that do not appear on our
        list, such as:
      </p>

      <ul className="text-dark-300 space-y-2 mb-6 ml-4">
        <li>• <strong>Transfinite numbers</strong> (Cantor's cardinals and ordinals)</li>
        <li>• <strong>Infinitesimals</strong> (from nonstandard analysis)</li>
        <li>• <strong>p-adic numbers</strong> (alternative completions of the rationals)</li>
        <li>• <strong>Surreal numbers</strong> (Conway's construction encompassing reals and ordinals)</li>
      </ul>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Bourbaki notation:</strong>{' '}
            <InlineMath>{`\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}, \\mathbb{H}`}</InlineMath></li>
          <li>• Each number system <strong>extends</strong> the previous to solve new equations</li>
          <li>• <strong>Logical order</strong> differs from historical development</li>
          <li>• Kronecker: "God created the natural numbers..."</li>
          <li>• Multiple philosophical views on what numbers <em>are</em>:
            <ul className="ml-6 mt-1 space-y-1 text-sm">
              <li>– Platonists: abstract objects</li>
              <li>– Logicists (Russell): sets of pairs</li>
              <li>– Von Neumann: sets of predecessors</li>
              <li>– Formalists (Peano): formal symbols (SS0)</li>
              <li>– Intuitionists (Brouwer): mental constructions</li>
            </ul>
          </li>
          <li>• Numbers can be <strong>constructed</strong> from simpler systems</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={31} questions={section31Questions} />
    </LessonLayout>
  );
}
