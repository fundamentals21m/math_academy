import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <h2>Newton and Leibniz</h2>

      <p>
        The invention of calculus in the late 17th century was one of the most
        important events in the history of mathematics. <strong>Isaac Newton</strong>{' '}
        (1642–1727) and <strong>Gottfried Wilhelm Leibniz</strong> (1646–1716)
        independently developed the subject, leading to a bitter priority dispute
        that poisoned relations between English and Continental mathematicians
        for a century.
      </p>

      <Callout type="info">
        <strong>Independent Discovery:</strong> Newton developed his "method of
        fluxions" around 1665–1666, but didn't publish until 1704. Leibniz
        developed his calculus around 1675–1676 and published in 1684. Both
        discoveries were genuine and independent, though Newton's was earlier.
      </Callout>

      <h3>Precursors to Calculus</h3>

      <p>
        Neither Newton nor Leibniz invented calculus from nothing. Key ideas
        had been developing for decades:
      </p>

      <Example title="Building Blocks of Calculus">
        <ul className="space-y-2">
          <li>
            <strong>Fermat (1630s):</strong> Method of "adequality" for finding
            maxima and minima (essentially differentiation)
          </li>
          <li>
            <strong>Cavalieri (1635):</strong> Method of indivisibles for areas
            (precursor to integration)
          </li>
          <li>
            <strong>Wallis (1655):</strong> Computed <InlineMath>\int_0^1 x^n \, dx = \frac{1}{n+1}</InlineMath>
          </li>
          <li>
            <strong>Barrow (1670):</strong> Recognized the inverse relationship
            between tangent and area problems
          </li>
        </ul>
      </Example>

      <h3>Newton's Fluxions</h3>

      <p>
        Newton thought of curves as traced by moving points. The velocity of
        motion was called the <strong>fluxion</strong>, and the position was
        called the <strong>fluent</strong>.
      </p>

      <Definition title="Newton's Notation">
        <p>
          For a quantity <InlineMath>x</InlineMath> that changes over time:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>\dot{'{x}'}</InlineMath> = fluxion of <InlineMath>x</InlineMath>{' '}
            (rate of change, our <InlineMath>dx/dt</InlineMath>)
          </li>
          <li>
            <InlineMath>o</InlineMath> = infinitely small increment of time
          </li>
        </ul>
        <p className="mt-2">
          For <InlineMath>y = x^n</InlineMath>, Newton found{' '}
          <InlineMath>\dot{'{y}'} = nx^{'{n-1}'}\dot{'{x}'}</InlineMath>
        </p>
      </Definition>

      <Example title="Newton's Power Rule Derivation">
        <p>
          To find the fluxion of <InlineMath>y = x^2</InlineMath>:
        </p>
        <MathBlock>
          {`\\begin{aligned}
y + \\dot{y}o &= (x + \\dot{x}o)^2 \\\\
&= x^2 + 2x\\dot{x}o + (\\dot{x}o)^2 \\\\
\\dot{y}o &= 2x\\dot{x}o + (\\dot{x}o)^2
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          "Rejecting" the term <InlineMath>(\\dot{'{x}'}o)^2</InlineMath> as
          infinitely small compared to <InlineMath>\\dot{'{x}'}o</InlineMath>,
          we get <InlineMath>\\dot{'{y}'} = 2x\\dot{'{x}'}</InlineMath>.
        </p>
      </Example>

      <h3>Leibniz's Differentials</h3>

      <p>
        Leibniz approached calculus differently, thinking in terms of{' '}
        <strong>infinitesimal differences</strong>. His notation proved more
        flexible and became the standard.
      </p>

      <Definition title="Leibniz's Notation">
        <p>
          For a function <InlineMath>y = f(x)</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>dx</InlineMath> = infinitesimal change in <InlineMath>x</InlineMath>
          </li>
          <li>
            <InlineMath>dy</InlineMath> = corresponding infinitesimal change in <InlineMath>y</InlineMath>
          </li>
          <li>
            <InlineMath>dy/dx</InlineMath> = ratio of differentials (the derivative)
          </li>
          <li>
            <InlineMath>\int y \, dx</InlineMath> = sum of infinitesimal rectangles (the integral)
          </li>
        </ul>
      </Definition>

      {/* Visualization comparing notations */}
      <div className="my-8 p-4 bg-dark-800 rounded-lg">
        <h4 className="text-lg font-semibold text-primary-400 mb-4">
          Newton vs. Leibniz Notation
        </h4>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-center font-semibold text-primary-300 mb-2">Newton</p>
            <div className="space-y-2 text-sm">
              <p><InlineMath>\dot{'{x}'}</InlineMath> — fluxion of x</p>
              <p><InlineMath>\ddot{'{x}'}</InlineMath> — second fluxion</p>
              <p>"fluent" — integral</p>
            </div>
          </div>
          <div>
            <p className="text-center font-semibold text-primary-300 mb-2">Leibniz</p>
            <div className="space-y-2 text-sm">
              <p><InlineMath>dx/dt</InlineMath> — derivative</p>
              <p><InlineMath>d^2x/dt^2</InlineMath> — second derivative</p>
              <p><InlineMath>\int x \, dt</InlineMath> — integral</p>
            </div>
          </div>
        </div>
        <p className="text-center text-dark-400 text-sm mt-4">
          Leibniz's notation remains standard today due to its flexibility
        </p>
      </div>

      <h3>Why Leibniz's Notation Won</h3>

      <p>
        Although Newton's ideas were deeper in some respects, Leibniz's notation
        had crucial advantages:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Chain Rule</h4>
          <p className="text-sm text-dark-300">
            Leibniz: <InlineMath>\frac{'{dy}'}{'{dx}'} = \frac{'{dy}'}{'{du}'} \cdot \frac{'{du}'}{'{dx}'}</InlineMath>
          </p>
          <p className="text-sm text-dark-400 mt-1">
            Looks like fraction multiplication!
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg">
          <h4 className="text-primary-400 font-semibold mb-2">Substitution</h4>
          <p className="text-sm text-dark-300">
            <InlineMath>\int f(g(x))g'(x)\,dx = \int f(u)\,du</InlineMath>
          </p>
          <p className="text-sm text-dark-400 mt-1">
            "Substitute <InlineMath>u = g(x)</InlineMath>, <InlineMath>du = g'(x)dx</InlineMath>"
          </p>
        </div>
      </div>

      <h3>The Priority Dispute</h3>

      <p>
        The Newton-Leibniz priority dispute was one of the ugliest episodes in
        the history of science:
      </p>

      <Example title="Timeline of the Dispute">
        <ul className="space-y-2">
          <li>
            <strong>1684:</strong> Leibniz publishes first calculus paper
          </li>
          <li>
            <strong>1699:</strong> Fatio de Duillier accuses Leibniz of plagiarism
          </li>
          <li>
            <strong>1704:</strong> Newton finally publishes his methods
          </li>
          <li>
            <strong>1711:</strong> Leibniz appeals to Royal Society for vindication
          </li>
          <li>
            <strong>1712:</strong> Royal Society (led by Newton!) rules against Leibniz
          </li>
          <li>
            <strong>1716:</strong> Leibniz dies, still under cloud of accusation
          </li>
        </ul>
      </Example>

      <Callout type="note">
        <strong>Modern Verdict:</strong> Both discoveries were independent.
        Newton was first but didn't publish. Leibniz developed his version
        without access to Newton's unpublished manuscripts. The accusations of
        plagiarism were unfounded and motivated by nationalism.
      </Callout>

      <h3>The Key Insight</h3>

      <p>
        What made Newton and Leibniz the "inventors" of calculus, rather than
        their predecessors, was their recognition that differentiation and
        integration are <strong>inverse operations</strong>:
      </p>

      <Theorem title="The Fundamental Relationship">
        <p>
          If <InlineMath>F(x) = \int_a^x f(t)\,dt</InlineMath>, then{' '}
          <InlineMath>F'(x) = f(x)</InlineMath>.
        </p>
        <p className="mt-2">
          Conversely, if <InlineMath>F'(x) = f(x)</InlineMath>, then{' '}
          <InlineMath>\int_a^b f(x)\,dx = F(b) - F(a)</InlineMath>.
        </p>
      </Theorem>

      <p>
        This connection, known as the <strong>Fundamental Theorem of Calculus</strong>,
        unified what had been two separate problem types: finding tangents
        (differentiation) and finding areas (integration). We explore this
        theorem in detail in the next section.
      </p>

      <Callout type="info">
        <strong>Newton's Genius:</strong> Newton used his calculus to derive the
        laws of mechanics and gravitation, proving that planets follow elliptical
        orbits. This application to physics ensured that calculus would become
        the language of science.
      </Callout>

      <SectionQuiz
        sectionId={33}
        questions={quizMap[33] || []}
        title="Newton and Leibniz Quiz"
      />
    </LessonLayout>
  );
}
