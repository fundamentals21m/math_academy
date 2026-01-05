import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section22Questions } from '../../data/quizzes';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-semibold mb-4">The Line</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Having seen how individual lengths like <InlineMath>\sqrt{'{2}'}</InlineMath> can
        be reborn as numbers (via Dedekind cuts), the next step is to see whether
        these numbers make up anything we would recognize as a <strong>line</strong>.
      </p>

      {/* Order */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Property 1: Order</h3>

      <p className="text-dark-200 mb-6">
        One crucial property the real numbers have is <strong>order</strong>: if{' '}
        <InlineMath>\alpha</InlineMath> and <InlineMath>\beta</InlineMath> are any
        distinct real numbers, then either{' '}
        <InlineMath>\alpha \leq \beta</InlineMath> or{' '}
        <InlineMath>\beta \leq \alpha</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
        <h4 className="text-lg font-semibold mb-3 text-blue-400">
          Ordering Real Numbers
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          If <InlineMath>\alpha = (L_\alpha, U_\alpha)</InlineMath> and{' '}
          <InlineMath>\beta = (L_\beta, U_\beta)</InlineMath>, we say:
        </p>
        <MathBlock>{`\\alpha \\leq \\beta \\quad\\text{if and only if}\\quad L_\\alpha \\subseteq L_\\beta`}</MathBlock>
        <p className="text-dark-400 text-xs mt-4">
          This captures the idea that <InlineMath>\alpha</InlineMath> separates
          the rationals at a position {"<"} the position where{' '}
          <InlineMath>\beta</InlineMath> separates them.
        </p>
      </div>

      {/* Continuity / Completeness */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Property 2: Completeness</h3>

      <p className="text-dark-200 mb-6">
        The second crucial property of the line is what Dedekind called its{' '}
        <strong>continuity</strong>, or absence of gaps. Do the real numbers have
        this property?
      </p>

      <Callout type="success">
        <p>
          <strong>Yes!</strong> The real numbers were created precisely by filling
          all the gaps in the rationals. A gap occurs where the rationals split
          into L (no greatest member) and U (no least member), and we filled each
          such gap with the irrational (L, U).
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        We could even say that the number (L, U) <em>is</em> the gap in the
        rationals! But can the resulting set <InlineMath>\mathbb{'{R}'}</InlineMath>{' '}
        of reals have gaps?
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          No Gaps in the Reals
        </h4>
        <p className="text-dark-300 text-sm mb-4">
          If <InlineMath>\mathbb{'{R}'}</InlineMath> is separated into a lower
          set <InlineMath>\mathcal{'{L}'}</InlineMath> and an upper set{' '}
          <InlineMath>\mathcal{'{U}'}</InlineMath>, consider:
        </p>
        <MathBlock>{`L = \\{r : r \\leq \\text{some member of } \\mathcal{L}\\}`}</MathBlock>
        <MathBlock>{`U = \\{r : r \\geq \\text{some member of } \\mathcal{U}\\}`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          These define a number (L, U) which is either the least member of{' '}
          <InlineMath>\mathcal{'{U}'}</InlineMath> or the greatest member of{' '}
          <InlineMath>\mathcal{'{L}'}</InlineMath>—so there is no gap!
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        The "no gaps" property of <InlineMath>\mathbb{'{R}'}</InlineMath> is now
        called <strong>completeness</strong>. We also say that{' '}
        <InlineMath>\mathbb{'{R}'}</InlineMath> is the{' '}
        <strong>completion</strong> of the rationals{' '}
        <InlineMath>\mathbb{'{Q}'}</InlineMath>.
      </p>

      {/* The Real Line */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Real Line</h3>

      <Callout type="info">
        <p>
          Ordering and completeness are exactly what we were looking for to model
          the concept of <strong>line</strong> in geometry. So{' '}
          <InlineMath>\mathbb{'{R}'}</InlineMath> fits the bill. We often call{' '}
          <InlineMath>\mathbb{'{R}'}</InlineMath> the <strong>real line</strong>.
        </p>
      </Callout>

      {/* Settling Questions */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Settling Infinitesimal Questions
      </h3>

      <p className="text-dark-200 mb-6">
        Identifying the line with the real numbers has advantages beyond allowing
        free use of arithmetic in geometry. It gives answers to questions that
        cannot be settled by geometric intuition alone, because they involve the
        "infinitely small."
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="No 'Next Point'" />
          <p className="text-xs text-dark-300">
            There is no "next real number." If <InlineMath>\alpha</InlineMath> and{' '}
            <InlineMath>\beta</InlineMath> are distinct, then{' '}
            <InlineMath>(\alpha + \beta)/2</InlineMath> lies strictly between them.
          </p>
        </Card>
        <Card>
          <CardHeader title="No Infinitesimals" />
          <p className="text-xs text-dark-300">
            There are no "infinitesimal distances"—no positive number less than
            all positive rationals. The lower set for any positive real must
            contain a positive rational.
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        For example, most people feel that 0.999999... cannot equal 1, because it
        seems less by an "infinitesimal amount." Such feelings are dispelled by
        Dedekind's picture: there is no room for a number between 0.999... and 1!
      </p>

      {/* Least Upper Bounds */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Least Upper Bounds</h3>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3">The LUB Property</h4>
        <p className="text-dark-300 text-sm mb-4">
          If the numbers in some set S are all {"<"} some number{' '}
          <InlineMath>\alpha</InlineMath>, then there is a <strong>least</strong>{' '}
          number <InlineMath>\lambda \geq</InlineMath> all members of S.
        </p>
        <p className="text-dark-400 text-xs">
          This number <InlineMath>\lambda</InlineMath> is called the{' '}
          <strong>least upper bound</strong> (LUB) of S. The existence of LUBs is
          another way to state completeness.
        </p>
      </div>

      {/* The Archimedean Axiom */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Archimedean Axiom</h3>

      <p className="text-dark-200 mb-6">
        The "no infinitesimals" property can be stated another way, going back to
        Archimedes:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">
          Archimedean Axiom
        </h4>
        <p className="text-dark-200">
          If <InlineMath>\alpha</InlineMath> and <InlineMath>\beta</InlineMath>{' '}
          are positive numbers with <InlineMath>\alpha {'<'} \beta</InlineMath>,
          then there is a natural number n with{' '}
          <InlineMath>n\alpha {'>'} \beta</InlineMath>.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        In other words, no matter how small <InlineMath>\alpha</InlineMath> is,
        enough copies of it will exceed any given{' '}
        <InlineMath>\beta</InlineMath>. This rules out infinitesimals.
      </p>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Real numbers have a natural <strong>order</strong> based on
              containment of their lower sets.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <InlineMath>\mathbb{'{R}'}</InlineMath> is{' '}
              <strong>complete</strong>—it has no gaps.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              The <strong>real line</strong>{' '}
              <InlineMath>\mathbb{'{R}'}</InlineMath> models the geometric concept
              of line.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              There is no "next point" and no{' '}
              <strong>infinitesimal distances</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The <strong>Archimedean axiom</strong> rules out infinitesimals:
              enough small steps exceed any bound.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={22} questions={section22Questions} />
    </LessonLayout>
  );
}
