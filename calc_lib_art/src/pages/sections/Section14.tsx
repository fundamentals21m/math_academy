import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-semibold mb-4">The Unreasonable Effectiveness of Mathematics</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Why does mathematics—a product of pure human thought—describe the physical universe
        with such uncanny precision? This question, raised by physicist Eugene Wigner in a
        famous 1960 essay, remains one of the deepest mysteries at the intersection of
        mathematics, physics, and philosophy.
      </p>

      <Callout type="info">
        <p className="italic">
          "The miracle of the appropriateness of the language of mathematics for the formulation
          of the laws of physics is a wonderful gift which we neither understand nor deserve."
        </p>
        <p className="text-sm text-dark-400 mt-2">— Eugene Wigner, "The Unreasonable Effectiveness of Mathematics in the Natural Sciences" (1960)</p>
      </Callout>

      {/* The Mystery */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Mystery Stated</h2>

      <p className="text-dark-200 mb-6">
        Consider what's remarkable:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-4 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Mathematicians develop theories based on elegance, beauty, and internal consistency—not
              physical application. They're playing abstract games.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              Physicists discover that these "games" describe reality with stunning precision.
              Equations predict phenomena that weren't known when the math was invented.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              This happens over and over: math developed for its own sake turns out to be
              exactly what physics needs.
            </span>
          </li>
        </ul>
      </div>

      {/* Examples */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Striking Examples</h2>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Conic Sections</span>
          <div>
            <p className="text-dark-200">
              Greeks studied ellipses, parabolas, and hyperbolas as pure geometry 2000 years
              before Kepler discovered that planets orbit in ellipses.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Complex Numbers</span>
          <div>
            <p className="text-dark-200">
              Invented to solve cubic equations, <MathInline>{'i = \\sqrt{-1}'}</MathInline> seemed
              like a mathematical fiction. It turns out to be essential for quantum mechanics.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Riemannian Geometry</span>
          <div>
            <p className="text-dark-200">
              Riemann developed curved-space geometry in 1854 as pure mathematics. Sixty years
              later, Einstein needed exactly this for general relativity.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Group Theory</span>
          <div>
            <p className="text-dark-200">
              Abstract algebra about symmetries became the language of particle physics. The
              Standard Model is built on group theory.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-primary-400 font-mono text-sm whitespace-nowrap">Number Theory</span>
          <div>
            <p className="text-dark-200">
              Prime numbers, studied since antiquity for their intrinsic interest, now secure
              every encrypted internet transaction.
            </p>
          </div>
        </div>
      </div>

      {/* Calculus Specifically */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Calculus: The Prime Example</h2>

      <p className="text-dark-200 mb-6">
        Calculus is perhaps the best illustration of this unreasonable effectiveness:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="The Derivative" />
          <p className="text-sm text-dark-300">
            A simple limit captures velocity, acceleration, rates of chemical reactions,
            marginal costs, population growth rates, and countless other phenomena. Why should
            one idea apply so broadly?
          </p>
        </Card>
        <Card>
          <CardHeader title="The Integral" />
          <p className="text-sm text-dark-300">
            Adding up infinitely many infinitesimal pieces gives areas, volumes, total work,
            accumulated quantities, and probabilities. The same technique works everywhere.
          </p>
        </Card>
        <Card>
          <CardHeader title="Differential Equations" />
          <p className="text-sm text-dark-300">
            A small number of differential equations—Newton's laws, Maxwell's equations,
            Schrödinger's equation—describe essentially all of physics. Why is nature so economical?
          </p>
        </Card>
        <Card>
          <CardHeader title="Optimization" />
          <p className="text-sm text-dark-300">
            Nature seems to minimize and maximize: least action, maximum entropy, minimal
            surfaces. Calculus finds these extrema—and nature follows.
          </p>
        </Card>
      </CardGrid>

      {/* Possible Explanations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Possible Explanations</h2>

      <p className="text-dark-200 mb-6">
        Philosophers and scientists have proposed various answers to Wigner's puzzle:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Selection Bias</h4>
          <p className="text-dark-200 text-sm">
            We only notice when math works. The countless cases where math <em>doesn't</em>
            help don't get celebrated. We're cherry-picking successes.
          </p>
          <p className="text-dark-400 text-xs mt-3">
            Counter: But math works so often and so precisely—can this explain it all?
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-emerald-300 mb-3">Evolution</h4>
          <p className="text-dark-200 text-sm">
            Our brains evolved to understand the physical world. Mathematical intuition
            reflects internalized physics, so of course math describes physics—it came from it.
          </p>
          <p className="text-dark-400 text-xs mt-3">
            Counter: But math goes far beyond ancestral environments and everyday physics.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Mathematical Universe</h4>
          <p className="text-dark-200 text-sm">
            Maybe the universe literally <em>is</em> a mathematical structure. Physics works
            mathematically because reality is mathematical all the way down.
          </p>
          <p className="text-dark-400 text-xs mt-3">
            This is Max Tegmark's "Mathematical Universe Hypothesis."
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 border border-amber-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-amber-300 mb-3">Pre-established Harmony</h4>
          <p className="text-dark-200 text-sm">
            Perhaps mathematics and physics are two perspectives on the same deep reality.
            Their correspondence isn't accidental but reflects underlying unity.
          </p>
          <p className="text-dark-400 text-xs mt-3">
            This echoes Leibniz's philosophical views.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <p>
          <strong>The Mystery Remains:</strong> None of these explanations is fully satisfying.
          The effectiveness of mathematics in physics remains genuinely puzzling—a philosophical
          mystery hiding in plain sight.
        </p>
      </Callout>

      {/* Beauty and Truth */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Beauty as a Guide</h2>

      <p className="text-dark-200 mb-6">
        Physicists often use mathematical beauty as a guide to truth:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4 italic">
          "It seems that if one is working from the point of view of getting beauty in one's
          equations, and if one has really a sound insight, one is on a sure line of progress."
        </p>
        <p className="text-dark-400 text-sm">— Paul Dirac</p>
      </div>

      <p className="text-dark-200 mb-6">
        Dirac's equation, derived largely from aesthetic considerations, predicted antimatter
        before it was observed. Einstein chose general relativity partly for its mathematical
        elegance. Again and again, beautiful equations turn out to be true.
      </p>

      <p className="text-dark-200 mb-6">
        Why should beauty—a human aesthetic judgment—correlate with physical truth? This
        deepens the mystery rather than resolving it.
      </p>

      {/* Calculus as Liberal Art */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Calculus as a Liberal Art</h2>

      <p className="text-dark-200 mb-6">
        We return to where we began. Calculus is not just a tool for engineers or a hurdle
        for students. It is:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>A human achievement:</strong> Born from centuries of struggle with infinity,
              motion, and change. It has a history as rich as any art form.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>A way of thinking:</strong> Calculus teaches us to reason about continuous
              change, to tame infinity through limits, to connect local to global.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>A window on nature:</strong> The universe speaks in differential equations.
              To understand physics deeply is to understand calculus.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">→</span>
            <span>
              <strong>A philosophical puzzle:</strong> Why does this mathematics—invented by
              humans—describe reality so perfectly? The question enriches our wonder.
            </span>
          </li>
        </ul>
      </div>

      <Callout type="success">
        <p>
          <strong>The Liberal Arts Tradition:</strong> In the medieval university, the "liberal
          arts" included the <em>quadrivium</em>: arithmetic, geometry, music, and astronomy—all
          mathematical. Calculus continues this tradition, connecting abstract reasoning to
          the music of the spheres.
        </p>
      </Callout>

      {/* Final Reflection */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">A Final Reflection</h2>

      <p className="text-dark-200 mb-6">
        Calculus gives us a kind of double vision. On one hand, it's an incredibly practical
        tool—engineers and scientists use it daily. On the other, it opens onto deep questions
        about the nature of reality, the human mind, and the mysterious correspondence between
        abstract thought and physical existence.
      </p>

      <div className="bg-gradient-to-r from-primary-900/20 to-primary-800/10 border border-primary-700/30 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4 italic text-lg">
          We began by asking: What is calculus?
        </p>
        <p className="text-dark-200">
          One answer: the mathematics of change and accumulation. Another: the language of
          physics. But perhaps the deepest answer is this: <strong>calculus is humanity's
          most successful attempt to understand the continuous flow of reality through the
          discrete symbols of thought</strong>. That this attempt succeeds so spectacularly
          is both our greatest intellectual achievement and our most enduring mystery.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Mathematics developed for its own sake repeatedly turns out to describe physical reality with astonishing precision.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Calculus exemplifies this mystery: derivatives, integrals, and differential equations describe nature far beyond their original motivation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>No fully satisfying explanation exists for why math works so well in physics—the mystery remains open.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Calculus is a liberal art: a human achievement that combines practical power with deep philosophical wonder.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
