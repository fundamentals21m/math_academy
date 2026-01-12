import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section78Questions } from '../../data/quizzes';

export default function Section78() {
  return (
    <LessonLayout sectionId={78}>
      <h2 className="text-2xl font-semibold mb-4">Discussion</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        We have reached the end of our journey through <em>Numbers and Geometry</em>.
        This final chapter reveals that arithmetic and geometry, far from being
        separate subjects, are deeply unified through the language of functions.
      </p>

      {/* From Natural Numbers to Complex Numbers */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        From Natural Numbers to Complex Numbers
      </h3>

      <p className="text-dark-200 mb-6">
        The march of the number concept from <InlineMath>\mathbb{'{N}'}</InlineMath>{' '}
        to <InlineMath>\mathbb{'{C}'}</InlineMath> is one of the great sagas of
        mathematics:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">
              <InlineMath>\mathbb{'{N}'} \to \mathbb{'{Z}'}</InlineMath>
            </span>
            <span>Adding negatives, enabling unlimited subtraction</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">
              <InlineMath>\mathbb{'{Z}'} \to \mathbb{'{Q}'}</InlineMath>
            </span>
            <span>Adding fractions, enabling division (except by 0)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">
              <InlineMath>\mathbb{'{Q}'} \to \mathbb{'{R}'}</InlineMath>
            </span>
            <span>Completing the rationals, modeling the geometric line</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">
              <InlineMath>\mathbb{'{R}'} \to \mathbb{'{C}'}</InlineMath>
            </span>
            <span>Adding <InlineMath>i = \sqrt{'{-1}'}</InlineMath>, completing algebra</span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          Each extension preserves <strong>field structure</strong>—the ability
          to add, subtract, multiply, and divide (except by 0). This structure
          is so fruitful that it guides all further extensions.
        </p>
      </Callout>

      {/* The Step to R */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Profound Step to <InlineMath>\mathbb{'{R}'}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        The step from <InlineMath>\mathbb{'{Q}'}</InlineMath> to{' '}
        <InlineMath>\mathbb{'{R}'}</InlineMath> is the deepest, because it bridges
        discrete and continuous. It commits us to <strong>set theory</strong>:
        we need infinite sets and uncountably many of them!
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          <strong>Cantor's discoveries (1874):</strong>
        </p>
        <ul className="space-y-2 text-dark-200">
          <li>
            • <InlineMath>\mathbb{'{Q}'}</InlineMath> is countable (can be listed)
          </li>
          <li>
            • Algebraic numbers are countable (roots of polynomials)
          </li>
          <li>
            • <InlineMath>\mathbb{'{R}'}</InlineMath> is <em>uncountable</em>
          </li>
          <li>
            • Therefore <strong>transcendental numbers exist</strong> (and are
            the vast majority!)
          </li>
        </ul>
      </div>

      {/* The Exponential Function */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Exponential Function
      </h3>

      <p className="text-dark-200 mb-6">
        The exponential function is an amazing confluence of arithmetic and
        geometric ideas:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="In ℕ" />
          <p className="text-xs text-dark-300">Powers of 2: 2ᵐ · 2ⁿ = 2ᵐ⁺ⁿ</p>
          <p className="text-xs text-dark-400 mt-2">Exponents add when multiplying</p>
        </Card>
        <Card>
          <CardHeader title="In ℝ" />
          <p className="text-xs text-dark-300">eˣ for all real x</p>
          <p className="text-xs text-dark-400 mt-2">Extends to continuous domain</p>
        </Card>
        <Card>
          <CardHeader title="In ℂ" />
          <p className="text-xs text-dark-300">eⁱᶿ = cos θ + i sin θ</p>
          <p className="text-xs text-dark-400 mt-2">Unifies with trigonometry</p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        The logarithm provides an <strong>isomorphism</strong> between the
        multiplicative group of positive reals and the additive group of all
        reals. This was the key to practical computation before electronic
        calculators!
      </p>

      {/* Unity of Mathematics */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Unity of Mathematics
      </h3>

      <p className="text-dark-200 mb-6">
        Throughout this book, we have seen the same themes reappear in
        different guises:
      </p>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <div className="space-y-4 text-dark-200">
          <div>
            <p className="text-purple-400 font-semibold">The circle</p>
            <p>
              Parametrized by <InlineMath>(\cos\theta, \sin\theta)</InlineMath>,
              generating Pythagorean triples, connected to{' '}
              <InlineMath>i = \sqrt{'{-1}'}</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-purple-400 font-semibold">The hyperbola</p>
            <p>
              Parametrized by <InlineMath>(\cosh\theta, \sinh\theta)</InlineMath>,
              generating Pell equation solutions, connected to{' '}
              <InlineMath>\sqrt{'{d}'}</InlineMath>
            </p>
          </div>
          <div>
            <p className="text-purple-400 font-semibold">The exponential</p>
            <p>
              Unifies circle and hyperbola via{' '}
              <InlineMath>e^{'{i\\theta}'} = \cos\theta + i\sin\theta</InlineMath>
            </p>
          </div>
        </div>
      </div>

      {/* Looking Forward */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Looking Forward</h3>

      <p className="text-dark-200 mb-6">
        The ideas in this book are the foundation for advanced mathematics:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Algebraic number theory:</strong> Studying{' '}
              <InlineMath>\mathbb{'{Z}'}[\sqrt{'{d}'}]</InlineMath> and other
              number rings
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Algebraic geometry:</strong> Curves like elliptic curves
              (degree 3), building on conics
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Complex analysis:</strong> The exponential and its inverse
              in the complex plane
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>
              <strong>Group theory:</strong> The groups we've seen on curves
              and in modular arithmetic
            </span>
          </li>
        </ul>
      </div>

      {/* Final Reflection */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Final Reflection</h3>

      <p className="text-dark-200 mb-6">
        The tension between arithmetic and geometry has been creative
        throughout history. Numbers forced us to go beyond counting;
        geometry forced us to go beyond algebra. Yet at every step, the
        two domains have enriched each other.
      </p>

      <Callout type="info">
        <p>
          <InlineMath>\sqrt{'{2}'}</InlineMath> challenged arithmetic but
          proved its worth by solving <InlineMath>x^2 - 2y^2 = 1</InlineMath>.{' '}
          <InlineMath>i = \sqrt{'{-1}'}</InlineMath> seemed impossible but
          completed algebra and unified geometry. The transcendental
          functions go beyond both, yet reveal the deepest connections
          between numbers and curves.
        </p>
      </Callout>

      {/* Course Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Course Summary</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 1</span>
            <span>Arithmetic: primes, factorization, induction</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 2</span>
            <span>Geometry: Euclid, constructions, area, volume</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 3</span>
            <span>Coordinates: the real line and plane, isometries</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 4</span>
            <span>Rational points: Pythagorean triples, Diophantine problems</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 5</span>
            <span>Trigonometry: angles, addition formulas, Dehn invariant</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 6</span>
            <span>Finite arithmetic: modular arithmetic, quadratic reciprocity</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 7</span>
            <span>Complex numbers: Gaussian integers, sums of squares</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 8</span>
            <span>Conic sections: conics, Pell's equation, continued fractions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">Ch 9</span>
            <span>Elementary functions: log, exp, hyperbolic functions</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={78} questions={section78Questions} />
    </LessonLayout>
  );
}
