import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Definition, Theorem } from '../../components/common/ContentBlocks';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-semibold mb-4">Infinity and the Infinitesimal</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        At the heart of calculus lie two of the most mysterious and controversial ideas in all
        of mathematics: the <strong>infinitely large</strong> and the <strong>infinitely small</strong>.
        For centuries, these concepts were viewed with suspicion—useful for getting answers, but
        logically suspect. The story of how mathematicians learned to tame infinity is one of
        the great intellectual dramas in history.
      </p>

      <Callout type="info">
        <p className="italic">
          "The infinite! No other question has ever moved so profoundly the spirit of man."
        </p>
        <p className="text-sm text-dark-400 mt-2">— David Hilbert, 1926</p>
      </Callout>

      {/* Types of Infinity */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Many Faces of Infinity</h2>

      <p className="text-dark-200 mb-6">
        When we say "infinity," we might mean several different things:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Potential Infinity" />
          <p className="text-sm text-dark-300">
            A process that can continue without end. We can always count one more number,
            divide a line segment again, or extend a sequence further. Aristotle accepted
            this kind of infinity.
          </p>
          <p className="text-xs text-dark-500 mt-2">1, 2, 3, 4, 5, ...</p>
        </Card>
        <Card>
          <CardHeader title="Actual Infinity" />
          <p className="text-sm text-dark-300">
            A completed infinite totality, treated as a single object. The set of all
            natural numbers. The entire real number line. Aristotle rejected this; Cantor
            embraced it.
          </p>
          <p className="text-xs text-dark-500 mt-2">{'{1, 2, 3, 4, 5, ...}'}</p>
        </Card>
        <Card>
          <CardHeader title="Infinitesimals" />
          <p className="text-sm text-dark-300">
            Quantities infinitely small—greater than zero, yet smaller than any positive
            number you can name. Leibniz built calculus on them; later mathematicians
            banished them.
          </p>
          <p className="text-xs text-dark-500 mt-2">dx, dy, dt</p>
        </Card>
        <Card>
          <CardHeader title="Limits" />
          <p className="text-sm text-dark-300">
            The modern resolution: we never actually reach infinity, but describe what
            happens as we get arbitrarily close. This is how calculus is taught today.
          </p>
          <p className="text-xs text-dark-500 mt-2">lim x→∞</p>
        </Card>
      </CardGrid>

      {/* The Infinitesimal */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Mysterious Infinitesimal</h2>

      <p className="text-dark-200 mb-6">
        Imagine a quantity <MathInline>{'dx'}</MathInline> that is:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-dark-200">
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Greater than zero (it's not nothing)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Smaller than <MathInline>{'1/10'}</MathInline>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Smaller than <MathInline>{'1/1000'}</MathInline>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Smaller than <MathInline>{'1/1000000'}</MathInline>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            Smaller than any positive number you can name!
          </li>
        </ul>
      </div>

      <p className="text-dark-200 mb-6">
        This seems contradictory. How can something be positive yet smaller than every positive
        number? And yet, infinitesimals are incredibly useful. Consider finding the derivative:
      </p>

      <MathBlock>{`\\frac{d}{dx}(x^2) = \\frac{(x+dx)^2 - x^2}{dx} = \\frac{x^2 + 2x\\cdot dx + (dx)^2 - x^2}{dx}`}</MathBlock>

      <MathBlock>{`= \\frac{2x\\cdot dx + (dx)^2}{dx} = 2x + dx`}</MathBlock>

      <p className="text-dark-200 my-6">
        Now, if <MathInline>{'dx'}</MathInline> is infinitesimally small, we simply drop it,
        getting <MathInline>{'2x'}</MathInline>. This works! But is it rigorous?
      </p>

      <Callout type="warning">
        <p>
          <strong>The Bishop's Objection:</strong> In 1734, the philosopher George Berkeley
          mocked infinitesimals as "the ghosts of departed quantities." If <MathInline>{'dx'}</MathInline> is
          not zero, how can we divide by it? If it is zero, how can we divide by it at all?
        </p>
      </Callout>

      {/* The Limit Concept */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Limit: A Modern Solution</h2>

      <p className="text-dark-200 mb-6">
        In the 19th century, mathematicians developed a way to capture the power of infinitesimals
        without their logical difficulties: the <strong>limit</strong>.
      </p>

      <Definition title="Limit (Informal)">
        We say that <MathInline>{'f(x)'}</MathInline> approaches the limit <MathInline>{'L'}</MathInline> as{' '}
        <MathInline>{'x'}</MathInline> approaches <MathInline>{'a'}</MathInline> if we can make{' '}
        <MathInline>{'f(x)'}</MathInline> as close to <MathInline>{'L'}</MathInline> as we like by
        taking <MathInline>{'x'}</MathInline> sufficiently close to <MathInline>{'a'}</MathInline>.
      </Definition>

      <p className="text-dark-200 my-6">
        Instead of saying <MathInline>{'dx'}</MathInline> "is" infinitesimal, we say: consider what
        happens as <MathInline>{'\\Delta x'}</MathInline> gets smaller and smaller, <em>approaching</em> zero
        without ever reaching it.
      </p>

      <MathBlock>{`\\frac{d}{dx}(x^2) = \\lim_{\\Delta x \\to 0} \\frac{(x+\\Delta x)^2 - x^2}{\\Delta x} = \\lim_{\\Delta x \\to 0} (2x + \\Delta x) = 2x`}</MathBlock>

      <p className="text-dark-200 my-6">
        The limit exists and equals <MathInline>{'2x'}</MathInline>, even though we never actually
        let <MathInline>{'\\Delta x'}</MathInline> equal zero.
      </p>

      {/* Cantor's Revolution */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Cantor's Revolution: Sizes of Infinity</h2>

      <p className="text-dark-200 mb-6">
        In the 1870s, Georg Cantor made a shocking discovery: <strong>not all infinities are
        equal</strong>. Some infinite sets are bigger than others!
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Countable Infinity: ℵ₀</h4>
          <p className="text-dark-200 mb-3">
            The natural numbers {'{1, 2, 3, ...}'} are <em>countably infinite</em>. Surprisingly,
            so are the integers and even the rational numbers!
          </p>
          <p className="text-sm text-dark-400">
            Any set that can be put in one-to-one correspondence with ℕ has the same "size"
            of infinity, denoted <MathInline>{'\\aleph_0'}</MathInline> (aleph-null).
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Uncountable Infinity: 𝔠</h4>
          <p className="text-dark-200 mb-3">
            The real numbers are <em>uncountably infinite</em>—a strictly larger infinity! No
            matter how you try, you cannot list all real numbers.
          </p>
          <p className="text-sm text-dark-400">
            The "continuum" <MathInline>{'\\mathfrak{c}'}</MathInline> is a bigger infinity than{' '}
            <MathInline>{'\\aleph_0'}</MathInline>. And there are infinitely many sizes of infinity!
          </p>
        </div>
      </div>

      <Theorem
        title="Cantor's Diagonal Argument"
        proof={
          <div className="text-sm">
            <p className="mb-2">Suppose we could list all real numbers between 0 and 1:</p>
            <p className="mb-2 font-mono">
              r₁ = 0.<span className="text-primary-400">5</span>1749...<br/>
              r₂ = 0.3<span className="text-primary-400">2</span>058...<br/>
              r₃ = 0.71<span className="text-primary-400">6</span>82...<br/>
              r₄ = 0.042<span className="text-primary-400">9</span>1...<br/>
              ...
            </p>
            <p className="mb-2">
              Construct a new number by changing each diagonal digit (e.g., 5→6, 2→3, 6→7, 9→0):
            </p>
            <p className="mb-2 font-mono">d = 0.6370...</p>
            <p>
              This number differs from every rₙ in at least one digit, so it's not on our list.
              Contradiction! The reals cannot be listed.
            </p>
          </div>
        }
      >
        The set of real numbers is uncountable—there are more real numbers than natural numbers,
        even though both sets are infinite.
      </Theorem>

      {/* Philosophical Reflections */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Philosophical Reflections</h2>

      <p className="text-dark-200 mb-6">
        Infinity challenges our intuition at every turn:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🔢</span>
          <div>
            <p className="font-semibold">Hilbert's Hotel</p>
            <p className="text-sm text-dark-400">
              A hotel with infinitely many rooms, all occupied, can still accommodate new
              guests—even infinitely many of them! Just move each guest to the next room.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">📏</span>
          <div>
            <p className="font-semibold">The Continuum</p>
            <p className="text-sm text-dark-400">
              Between any two real numbers, no matter how close, there are infinitely many
              other real numbers. The real line is "dense" and "continuous."
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">∞</span>
          <div>
            <p className="font-semibold">Infinity is Not a Number</p>
            <p className="text-sm text-dark-400">
              We can't do arithmetic with ∞ the way we do with numbers. <MathInline>{'\\infty - \\infty'}</MathInline> and{' '}
              <MathInline>{'\\infty / \\infty'}</MathInline> are undefined—they depend on context.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          <strong>The Triumph of Rigor:</strong> By the late 1800s, Weierstrass, Dedekind, and
          others had put calculus on a firm foundation using limits and set theory. The
          intuitive infinitesimals of Leibniz were replaced by the precise epsilon-delta
          definitions still used today.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Infinitesimals—quantities infinitely small but not zero—were central to early calculus but logically problematic.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The concept of <strong>limit</strong> provides a rigorous foundation: we approach infinity without reaching it.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Cantor showed that there are different sizes of infinity—the reals are "more infinite" than the naturals.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Modern calculus uses limits and set theory, but the intuition of infinitesimals remains valuable for understanding.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
