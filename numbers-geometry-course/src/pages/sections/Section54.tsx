import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section54Questions } from '../../data/quizzes';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2 className="text-2xl font-semibold mb-4">Quadratic Reciprocity</h2>

      <Callout type="warning">
        <p>
          <strong>Advanced Section:</strong> Quadratic reciprocity is called
          "the most beautiful theorem in number theory" by many mathematicians.
          Gauss gave eight different proofs and called it the{' '}
          <em>theorema aureum</em> (golden theorem).
        </p>
      </Callout>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed mt-6">
        Given two distinct odd primes <InlineMath>p</InlineMath> and{' '}
        <InlineMath>q</InlineMath>, the <strong>quadratic reciprocity law</strong>{' '}
        relates the questions "Is <InlineMath>p</InlineMath> a square mod{' '}
        <InlineMath>q</InlineMath>?" and "Is <InlineMath>q</InlineMath> a square
        mod <InlineMath>p</InlineMath>?"
      </p>

      {/* The Law */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Quadratic Reciprocity Law
      </h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">
          Theorem (Gauss, 1796)
        </h4>
        <p className="text-dark-200 mb-4">
          For distinct odd primes <InlineMath>p</InlineMath> and{' '}
          <InlineMath>q</InlineMath>:
        </p>
        <MathBlock>
          {`\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2} \\cdot \\frac{q-1}{2}}`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        This can be restated more explicitly: the two Legendre symbols{' '}
        <InlineMath>(p/q)</InlineMath> and <InlineMath>(q/p)</InlineMath> are:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Equal</strong> if at least one of{' '}
              <InlineMath>p, q \equiv 1 \pmod 4</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span>
              <strong>Opposite</strong> if both{' '}
              <InlineMath>p, q \equiv 3 \pmod 4</InlineMath>
            </span>
          </li>
        </ul>
      </div>

      {/* Examples */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Examples</h3>

      <CardGrid>
        <Card>
          <CardHeader title="p = 3, q = 7" />
          <p className="text-xs text-dark-300">
            Both ≡ 3 (mod 4): signs are opposite
            <br />
            <InlineMath>(3/7) = -1</InlineMath>,{' '}
            <InlineMath>(7/3) = (1/3) = 1</InlineMath>
            <br />
            Product: <InlineMath>(-1)(1) = -1</InlineMath> ✓
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 5, q = 7" />
          <p className="text-xs text-dark-300">
            5 ≡ 1 (mod 4): signs are equal
            <br />
            <InlineMath>(5/7)</InlineMath> and <InlineMath>(7/5) = (2/5)</InlineMath>
            <br />
            Both compute to <InlineMath>-1</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 5, q = 11" />
          <p className="text-xs text-dark-300">
            5 ≡ 1 (mod 4): signs are equal
            <br />
            <InlineMath>(5/11) = (11/5) = (1/5) = 1</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="p = 11, q = 19" />
          <p className="text-xs text-dark-300">
            Both ≡ 3 (mod 4): signs are opposite
            <br />
            Use reciprocity to compute one from the other
          </p>
        </Card>
      </CardGrid>

      {/* Computational Power */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Power of Reciprocity
      </h3>

      <p className="text-dark-200 mb-6">
        Reciprocity, combined with the formulas for <InlineMath>(-1/p)</InlineMath>{' '}
        and <InlineMath>(2/p)</InlineMath>, allows efficient computation of any
        Legendre symbol without finding square roots.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Example:</strong> Compute <InlineMath>(713/1009)</InlineMath>
          where both are prime
        </p>
        <p className="text-dark-200 mb-2">
          Since <InlineMath>713 \equiv 1 \pmod 4</InlineMath>:
        </p>
        <MathBlock>{`\\left(\\frac{713}{1009}\\right) = \\left(\\frac{1009}{713}\\right)`}</MathBlock>
        <p className="text-dark-200 my-2">
          Now <InlineMath>1009 \equiv 296 \pmod{713}</InlineMath>:
        </p>
        <MathBlock>{`= \\left(\\frac{296}{713}\\right) = \\left(\\frac{8}{713}\\right)\\left(\\frac{37}{713}\\right)`}</MathBlock>
        <p className="text-dark-200 mt-2">
          Continue reducing using <InlineMath>(8/713) = (2/713)^3</InlineMath>{' '}
          and reciprocity for <InlineMath>(37/713)</InlineMath>...
        </p>
      </div>

      {/* Historical Significance */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Historical Significance</h3>

      <p className="text-dark-200 mb-6">
        Quadratic reciprocity was conjectured by Euler and Legendre, but
        first proved by Gauss at age 18. He later published eight different
        proofs, each revealing different aspects of the theorem.
      </p>

      <Callout type="info">
        <p>
          The quest to generalize quadratic reciprocity drove much of
          19th and 20th century number theory, leading to class field theory
          and the Langlands program—some of the deepest mathematics ever created.
        </p>
      </Callout>

      {/* The Supplements */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Complete Package
      </h3>

      <p className="text-dark-200 mb-6">
        Together with the "supplementary laws" for −1 and 2, quadratic
        reciprocity gives a complete algorithm:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ol className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <InlineMath>(-1/p) = (-1)^{'{(p-1)/2}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <InlineMath>(2/p) = (-1)^{'{(p^2-1)/8}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <InlineMath>(p/q)(q/p) = (-1)^{'{\\frac{p-1}{2} \\cdot \\frac{q-1}{2}}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              Multiplicativity: <InlineMath>(ab/p) = (a/p)(b/p)</InlineMath>
            </span>
          </li>
        </ol>
      </div>

      {/* Proof Sketch */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Proof Idea</h3>

      <p className="text-dark-200 mb-6">
        One elegant proof uses <strong>Gauss sums</strong>. Define the quadratic
        Gauss sum:
      </p>

      <MathBlock>{`g = \\sum_{a=1}^{p-1} \\left(\\frac{a}{p}\\right) e^{2\\pi i a/p}`}</MathBlock>

      <p className="text-dark-200 my-6">
        Then one can show <InlineMath>g^2 = (-1)^{'{(p-1)/2}'} p</InlineMath>, and
        by computing <InlineMath>g^q \pmod q</InlineMath> in two ways, the
        reciprocity law emerges.
      </p>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              QR relates <InlineMath>(p/q)</InlineMath> to{' '}
              <InlineMath>(q/p)</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The product equals <InlineMath>(-1)^{'{(p-1)(q-1)/4}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Equal signs unless both primes are ≡ 3 (mod 4)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              First proved by Gauss; central to modern number theory
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={54} questions={section54Questions} />
    </LessonLayout>
  );
}
