import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section52Questions } from '../../data/quizzes';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2 className="text-2xl font-semibold mb-4">Squares mod p</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Which elements of <InlineMath>(\mathbb{'{Z}'}/p\mathbb{'{Z}'})^*</InlineMath>{' '}
        are perfect squares? This question leads to the elegant theory of{' '}
        <strong>quadratic residues</strong> and the celebrated{' '}
        <strong>quadratic reciprocity law</strong>.
      </p>

      {/* Quadratic Residues */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Quadratic Residues</h3>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-3">Definition</h4>
        <p className="text-dark-200">
          Let <InlineMath>p</InlineMath> be an odd prime. A non-zero element{' '}
          <InlineMath>a</InlineMath> mod <InlineMath>p</InlineMath> is a{' '}
          <strong>quadratic residue</strong> if there exists{' '}
          <InlineMath>x</InlineMath> such that{' '}
          <InlineMath>x^2 \equiv a \pmod p</InlineMath>. Otherwise,{' '}
          <InlineMath>a</InlineMath> is a <strong>quadratic non-residue</strong>.
        </p>
      </div>

      {/* Example */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example: Squares mod 7</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          Computing <InlineMath>x^2 \pmod 7</InlineMath> for{' '}
          <InlineMath>x = 1, 2, 3, 4, 5, 6</InlineMath>:
        </p>
        <ul className="space-y-1 text-dark-200">
          <li><InlineMath>1^2 = 1</InlineMath></li>
          <li><InlineMath>2^2 = 4</InlineMath></li>
          <li><InlineMath>3^2 = 9 \equiv 2</InlineMath></li>
          <li><InlineMath>4^2 = 16 \equiv 2</InlineMath></li>
          <li><InlineMath>5^2 = 25 \equiv 4</InlineMath></li>
          <li><InlineMath>6^2 = 36 \equiv 1</InlineMath></li>
        </ul>
        <p className="text-dark-300 text-sm mt-4">
          Quadratic residues mod 7: <InlineMath>\{'{'}1, 2, 4\{'}'}</InlineMath>
          <br />
          Non-residues: <InlineMath>\{'{'}3, 5, 6\{'}'}</InlineMath>
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Notice that we get exactly <InlineMath>(p-1)/2 = 3</InlineMath> distinct
        squares. This is because <InlineMath>x</InlineMath> and{' '}
        <InlineMath>-x</InlineMath> give the same square.
      </p>

      {/* Legendre Symbol */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Legendre Symbol</h3>

      <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-3">Definition</h4>
        <p className="text-dark-200 mb-4">
          For odd prime <InlineMath>p</InlineMath> and{' '}
          <InlineMath>\gcd(a, p) = 1</InlineMath>, the{' '}
          <strong>Legendre symbol</strong> is:
        </p>
        <MathBlock>
          {`\\left(\\frac{a}{p}\\right) = \\begin{cases}
1 & \\text{if } a \\text{ is a quadratic residue mod } p \\\\
-1 & \\text{if } a \\text{ is a quadratic non-residue mod } p
\\end{cases}`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        The Legendre symbol encodes whether <InlineMath>a</InlineMath> is a
        square mod <InlineMath>p</InlineMath>.
      </p>

      {/* Euler's Criterion */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Euler's Criterion</h3>

      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">Theorem</h4>
        <p className="text-dark-200">
          For odd prime <InlineMath>p</InlineMath> and{' '}
          <InlineMath>\gcd(a, p) = 1</InlineMath>:
        </p>
        <MathBlock>
          {`\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod p`}
        </MathBlock>
      </div>

      <p className="text-dark-200 mb-6">
        <strong>Proof sketch:</strong> By Fermat's theorem,{' '}
        <InlineMath>a^{'{p-1}'} \equiv 1</InlineMath>, so{' '}
        <InlineMath>a^{'{(p-1)/2}'}</InlineMath> is a square root of 1 mod{' '}
        <InlineMath>p</InlineMath>. Since <InlineMath>p</InlineMath> is prime,
        the only square roots of 1 are <InlineMath>\pm 1</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        If <InlineMath>a = x^2</InlineMath>, then{' '}
        <InlineMath>a^{'{(p-1)/2}'} = x^{'{p-1}'} \equiv 1</InlineMath>.
        Conversely, if <InlineMath>a</InlineMath> is not a square, the result is{' '}
        <InlineMath>-1</InlineMath>.
      </p>

      {/* Example Calculation */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Example</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          Is 2 a square mod 7?
        </p>
        <p className="text-dark-200 mb-2">
          By Euler's criterion: <InlineMath>2^{'{(7-1)/2}'} = 2^3 = 8 \equiv 1 \pmod 7</InlineMath>
        </p>
        <p className="text-dark-200">
          Yes! And indeed <InlineMath>3^2 = 9 \equiv 2 \pmod 7</InlineMath>.
        </p>
      </div>

      {/* Properties */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Properties of the Legendre Symbol
      </h3>

      <CardGrid>
        <Card>
          <CardHeader title="Multiplicative" />
          <p className="text-xs text-dark-300">
            <InlineMath>(ab/p) = (a/p)(b/p)</InlineMath>
          </p>
        </Card>
        <Card>
          <CardHeader title="Periodic" />
          <p className="text-xs text-dark-300">
            <InlineMath>(a/p) = (a + p)/p)</InlineMath> (depends only on{' '}
            <InlineMath>a \bmod p</InlineMath>)
          </p>
        </Card>
        <Card>
          <CardHeader title="(-1/p)" />
          <p className="text-xs text-dark-300">
            <InlineMath>(-1/p) = (-1)^{'{(p-1)/2}'}</InlineMath>
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        The multiplicativity is particularly useful: to check if{' '}
        <InlineMath>ab</InlineMath> is a square, we can check{' '}
        <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> separately.
      </p>

      {/* Counting */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Counting Quadratic Residues
      </h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <p className="text-dark-200 mb-4">
          For an odd prime <InlineMath>p</InlineMath>:
        </p>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              There are exactly <InlineMath>(p-1)/2</InlineMath> quadratic residues
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              There are exactly <InlineMath>(p-1)/2</InlineMath> quadratic non-residues
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The product of two residues is a residue
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The product of two non-residues is a residue
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The product of a residue and non-residue is a non-residue
            </span>
          </li>
        </ul>
      </div>

      <Callout type="info">
        <p>
          These rules are exactly like the multiplication rules for{' '}
          <InlineMath>+1</InlineMath> and <InlineMath>-1</InlineMath>, since the
          Legendre symbol takes those values!
        </p>
      </Callout>

      {/* Summary */}
      <div className="bg-dark-800 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-semibold mb-4">Key Points</h4>
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              A quadratic residue mod <InlineMath>p</InlineMath> is a perfect
              square in <InlineMath>(\mathbb{'{Z}'}/p\mathbb{'{Z}'})^*</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The Legendre symbol <InlineMath>(a/p) = \pm 1</InlineMath> indicates
              square or non-square
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              Euler's criterion: <InlineMath>(a/p) = a^{'{(p-1)/2}'}</InlineMath>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              The Legendre symbol is multiplicative
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={52} questions={section52Questions} />
    </LessonLayout>
  );
}
