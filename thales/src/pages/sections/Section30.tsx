import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section30Questions } from '../../data/quizzes';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2 className="text-2xl font-semibold mb-4">The Law of Quadratic Reciprocity</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In this section we single out a great 19th century mathematician and present
        one of his most elegant proofs. The 19th century was so rich in mathematics
        that it really deserves a book of its own—but we focus here on{' '}
        <strong>Carl Friedrich Gauss</strong> and the beautiful theorem that he called
        the <em>golden theorem</em>.
      </p>

      {/* Gauss Biography */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Carl Friedrich Gauss (1777–1855)</h3>

      <Card className="mb-6">
        <CardHeader>The Prince of Mathematicians</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Gauss was inspired to become a mathematician by his discovery of a{' '}
            <strong>ruler and compass construction for the regular 17-gon</strong>—this
            when he was only a teenager. But his gift had revealed itself much earlier:
            as a <strong>three year old</strong>, he had pointed out an error in his
            father's payroll accounts!
          </p>
          <p>
            Gauss's first major contribution was his number theory book{' '}
            <em>Disquisitiones Arithmeticae</em>, which appeared in <strong>1801</strong>.
            This monumental work included:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm ml-4">
            <li>The first construction for the regular 17-gon</li>
            <li>The first proof of the <strong>Fundamental Theorem of Arithmetic</strong></li>
            <li>The first proof that every prime <InlineMath>{`p`}</InlineMath> has a{' '}
              <strong>primitive root</strong></li>
            <li>The first proof that every natural number is a sum of{' '}
              <strong>three triangular numbers</strong></li>
            <li>The first proof of the <strong>Law of Quadratic Reciprocity</strong></li>
          </ul>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Gauss was also an astronomer and a physicist. In 1807, subsequent to his
        calculation of the position of the asteroid <strong>Ceres</strong>, he was
        appointed director of the observatory at Göttingen. In 1809, he published a
        book on planetary astronomy.
      </p>

      <p className="text-dark-200 mb-4">
        In physics, Gauss did pioneering work in <strong>electromagnetism</strong>;
        the <em>gauss</em> is a unit of measure denoting magnetic intensity.
      </p>

      {/* The Legendre Symbol */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Legendre Symbol</h3>

      <p className="text-dark-200 mb-4">
        Before stating the Law of Quadratic Reciprocity, we need to understand the
        notation introduced by Legendre.
      </p>

      <Callout type="definition" title="Legendre Symbol">
        <p className="mb-2">
          For a prime <InlineMath>{`p`}</InlineMath> and an integer{' '}
          <InlineMath>{`n`}</InlineMath> not divisible by <InlineMath>{`p`}</InlineMath>,
          the <strong>Legendre symbol</strong> <InlineMath>{`\\left(\\frac{n}{p}\\right)`}</InlineMath>{' '}
          is defined as:
        </p>
        <MathBlock>{`\\left(\\frac{n}{p}\\right) = \\begin{cases} 1 & \\text{if } n \\equiv r^2 \\pmod{p} \\text{ for some } r \\\\ -1 & \\text{otherwise} \\end{cases}`}</MathBlock>
        <p className="text-sm mt-2">
          In other words, <InlineMath>{`\\left(\\frac{n}{p}\\right) = 1`}</InlineMath> if{' '}
          <InlineMath>{`n`}</InlineMath> is a <strong>quadratic residue</strong> mod{' '}
          <InlineMath>{`p`}</InlineMath>, and <InlineMath>{`-1`}</InlineMath> if it is a{' '}
          <strong>quadratic non-residue</strong>.
        </p>
      </Callout>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 mt-4">
        <p className="text-dark-200 mb-2"><strong>Euler's Criterion:</strong></p>
        <p className="text-dark-300 text-sm mb-2">
          The Legendre symbol can be calculated using Euler's observation:
        </p>
        <MathBlock>{`n^{\\frac{p-1}{2}} \\equiv \\left(\\frac{n}{p}\\right) \\pmod{p}`}</MathBlock>
        <p className="text-dark-300 text-sm mt-2">
          This follows from Fermat's Little Theorem: since{' '}
          <InlineMath>{`n^{p-1} \\equiv 1 \\pmod{p}`}</InlineMath>, we have{' '}
          <InlineMath>{`n^{\\frac{p-1}{2}} \\equiv \\pm 1 \\pmod{p}`}</InlineMath>.
        </p>
      </div>

      {/* The Law */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Law of Quadratic Reciprocity</h3>

      <p className="text-dark-200 mb-4">
        Euler had conjectured this theorem, but could not prove it. Legendre found
        proofs for some special cases. It was <strong>Gauss</strong> who published
        the first complete proof in 1801. Gauss later gave <strong>five other proofs</strong>{' '}
        of the same result!
      </p>

      <Callout type="theorem" title="Law of Quadratic Reciprocity">
        <p className="mb-2">
          If <InlineMath>{`p`}</InlineMath> and <InlineMath>{`q`}</InlineMath> are
          distinct odd primes, then:
        </p>
        <MathBlock>{`\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{(p-1)(q-1)}{4}}`}</MathBlock>
        <p className="text-sm mt-2">
          Equivalently: the Legendre symbols <InlineMath>{`\\left(\\frac{p}{q}\\right)`}</InlineMath>{' '}
          and <InlineMath>{`\\left(\\frac{q}{p}\\right)`}</InlineMath> are equal unless both{' '}
          <InlineMath>{`p \\equiv 3 \\pmod{4}`}</InlineMath> and{' '}
          <InlineMath>{`q \\equiv 3 \\pmod{4}`}</InlineMath>, in which case they are opposite.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Example: p = 5, q = 13</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Let's verify the law for <InlineMath>{`p = 5`}</InlineMath> and{' '}
            <InlineMath>{`q = 13`}</InlineMath>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li>
              <InlineMath>{`\\left(\\frac{5}{13}\\right)`}</InlineMath>: Is 5 a square mod 13?
              Since <InlineMath>{`5^2 = 25 \\equiv 12 \\equiv -1 \\pmod{13}`}</InlineMath>,
              we have <InlineMath>{`5^6 = (5^2)^3 \\equiv (-1)^3 = -1`}</InlineMath>.
              So <InlineMath>{`\\left(\\frac{5}{13}\\right) = -1`}</InlineMath>.
            </li>
            <li>
              <InlineMath>{`\\left(\\frac{13}{5}\\right) = \\left(\\frac{3}{5}\\right)`}</InlineMath>:
              Is 3 a square mod 5? The squares mod 5 are 1 and 4, so{' '}
              <InlineMath>{`\\left(\\frac{3}{5}\\right) = -1`}</InlineMath>.
            </li>
            <li>
              Product: <InlineMath>{`(-1)(-1) = 1`}</InlineMath>
            </li>
            <li>
              Check: <InlineMath>{`(-1)^{\\frac{4 \\cdot 12}{4}} = (-1)^{12} = 1`}</InlineMath> ✓
            </li>
          </ul>
        </div>
      </Card>

      {/* Gauss's Lemma */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Gauss's Lemma</h3>

      <p className="text-dark-200 mb-4">
        The key to Gauss's proof is an elegant lemma that provides another way to
        compute the Legendre symbol.
      </p>

      <Callout type="theorem" title="Gauss's Lemma">
        <p className="mb-2">
          Let <InlineMath>{`p`}</InlineMath> be an odd prime and <InlineMath>{`q`}</InlineMath> an
          integer not divisible by <InlineMath>{`p`}</InlineMath>. Consider the integers{' '}
          <InlineMath>{`q, 2q, 3q, \\ldots, \\frac{p-1}{2}q`}</InlineMath> reduced modulo{' '}
          <InlineMath>{`p`}</InlineMath> to lie in the range{' '}
          <InlineMath>{`\\{-\\frac{p-1}{2}, \\ldots, \\frac{p-1}{2}\\}`}</InlineMath>. Let{' '}
          <InlineMath>{`\\mu`}</InlineMath> be the number of these that are negative. Then:
        </p>
        <MathBlock>{`\\left(\\frac{q}{p}\\right) = (-1)^{\\mu}`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Gauss used this lemma along with a clever geometric argument involving
        counting lattice points in a rectangle to prove the Law of Quadratic Reciprocity.
        The proof divides the rectangle into regions and uses symmetry to relate the
        counts that determine the Legendre symbols.
      </p>

      {/* Significance */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Why Quadratic Reciprocity Matters</h3>

      <Card className="mb-6">
        <CardHeader>The Golden Theorem</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Gauss called quadratic reciprocity the <strong>theorema aureum</strong>{' '}
            (golden theorem) and considered it one of the most beautiful results in
            number theory. Its importance lies in several aspects:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li>
              <strong>Computational power:</strong> It allows efficient determination of
              whether a number is a quadratic residue without computing square roots
            </li>
            <li>
              <strong>Unexpected symmetry:</strong> The relationship between{' '}
              <InlineMath>{`\\left(\\frac{p}{q}\\right)`}</InlineMath> and{' '}
              <InlineMath>{`\\left(\\frac{q}{p}\\right)`}</InlineMath> is not at all obvious
            </li>
            <li>
              <strong>Gateway to higher reciprocity:</strong> Led to cubic, quartic, and
              higher reciprocity laws, culminating in class field theory
            </li>
            <li>
              <strong>Multiple proofs:</strong> Over 200 different proofs exist, each
              revealing different aspects of number theory
            </li>
          </ul>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Gauss</strong> (1777–1855): child prodigy, constructed regular 17-gon as teenager</li>
          <li>• <em>Disquisitiones Arithmeticae</em> (1801): first proofs of fundamental results</li>
          <li>• <strong>Legendre symbol</strong> <InlineMath>{`\\left(\\frac{n}{p}\\right)`}</InlineMath>:{' '}
            1 if <InlineMath>{`n`}</InlineMath> is a quadratic residue mod <InlineMath>{`p`}</InlineMath>, −1 otherwise</li>
          <li>• <strong>Euler's criterion:</strong>{' '}
            <InlineMath>{`n^{(p-1)/2} \\equiv \\left(\\frac{n}{p}\\right) \\pmod{p}`}</InlineMath></li>
          <li>• <strong>Law of Quadratic Reciprocity:</strong>{' '}
            <InlineMath>{`\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{(p-1)(q-1)/4}`}</InlineMath></li>
          <li>• <strong>Gauss's Lemma:</strong> key tool for the proof, counts negative residues</li>
          <li>• Gauss gave <strong>six different proofs</strong>; over 200 proofs now exist</li>
          <li>• Gauss also: director of Göttingen observatory, pioneered electromagnetism</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={30} questions={section30Questions} />
    </LessonLayout>
  );
}
