import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section28Questions } from '../../data/quizzes';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2 className="text-2xl font-semibold mb-4">Leibniz</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        <strong>Gottfried Wilhelm Leibniz</strong> (1646–1716) was one of the most
        versatile geniuses of all time—a mathematician, philosopher, diplomat, and
        inventor. He independently developed the calculus, introduced the notation
        we still use today, and conceived the idea of symbolic logic centuries before
        it was realized.
      </p>

      {/* Life */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Life of Leibniz</h3>

      <Card className="mb-6">
        <CardHeader>Early Years</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Leibniz was born in Leipzig. His father died when he was six, and he
            educated himself using his late father's library. He entered the university
            in Leipzig when he was only <strong>fifteen</strong>.
          </p>
          <p>
            In 1666, he was refused the degree of Doctor of Law on the grounds that
            he was <strong>too young</strong>. In the same year, Leibniz conceived
            the idea of <strong>symbolic logic</strong>—a universal language in which
            all rational thinking could be expressed.
          </p>
        </div>
      </Card>

      <p className="text-dark-200 mb-4">
        Leibniz worked as a diplomat for the Elector of Mainz. In this capacity, he
        went to Paris, where Louis XIV rejected his idea of attacking Egypt instead
        of another European country. (Napoleon would later take up this idea!)
      </p>

      <p className="text-dark-200 mb-4">
        In Paris, Leibniz met <strong>Huygens</strong>, who introduced him to geometry
        and physics. Huygens challenged Leibniz to sum the series:
      </p>

      <MathBlock>{`\\sum_{n=1}^{\\infty} \\frac{2}{n(n+1)} = 1 + \\frac{1}{3} + \\frac{1}{6} + \\cdots`}</MathBlock>

      <div className="bg-dark-800 rounded-lg p-4 mb-6 mt-4">
        <p className="text-dark-200 mb-2"><strong>Leibniz's Solution:</strong></p>
        <p className="text-dark-300 text-sm">
          Using partial fractions: <InlineMath>{`\\frac{2}{n(n+1)} = 2\\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)`}</InlineMath>
        </p>
        <p className="text-dark-300 text-sm mt-2">
          The series <strong>telescopes</strong>:{' '}
          <InlineMath>{`2\\left(1 - \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{3} + \\frac{1}{3} - \\cdots\\right) = 2`}</InlineMath>
        </p>
      </div>

      {/* The Calculus */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Leibniz's Calculus</h3>

      <p className="text-dark-200 mb-4">
        In 1673, Leibniz visited England and became a fellow of the Royal Society.
        Two years later, he developed his own version of the calculus, introducing
        the <strong>notation we still use today</strong>: <InlineMath>{`dy/dx`}</InlineMath>{' '}
        for derivatives and <InlineMath>{`\\int`}</InlineMath> for integrals.
      </p>

      <Card className="mb-6">
        <CardHeader>Leibniz's Notation and Infinitesimals</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Leibniz thought of <InlineMath>{`dy`}</InlineMath> and <InlineMath>{`dx`}</InlineMath>{' '}
            as <strong>infinitesimals</strong>—infinitely small increments that are yet
            different from 0. For a function <InlineMath>{`y = f(x)`}</InlineMath>:
          </p>
          <MathBlock>{`dy = f(x + dx) - f(x)`}</MathBlock>
          <p>
            For example, if <InlineMath>{`f(x) = x^2`}</InlineMath>, then:
          </p>
          <MathBlock>{`dy = (x + dx)^2 - x^2 = 2x \\cdot dx + (dx)^2`}</MathBlock>
          <p>
            The slope of the tangent is <InlineMath>{`dy/dx = 2x + dx`}</InlineMath>, and
            since <InlineMath>{`dx`}</InlineMath> is infinitesimal, the slope at{' '}
            <InlineMath>{`x`}</InlineMath> is <InlineMath>{`2x`}</InlineMath>.
          </p>
        </div>
      </Card>

      <Callout type="theorem" title="Leibniz's Rule (Product Rule)">
        <p className="mb-2">
          Leibniz obtained the rule for the derivative of a product:
        </p>
        <MathBlock>{`\\frac{d}{dx}[f(x) \\cdot g(x)] = f(x) \\cdot g'(x) + f'(x) \\cdot g(x)`}</MathBlock>
        <p className="text-sm mt-2">
          This is still called <strong>Leibniz's rule</strong> today.
        </p>
      </Callout>

      {/* Priority Dispute */}
      <h4 className="text-lg font-semibold mt-6 mb-3">The Priority Dispute</h4>

      <p className="text-dark-200 mb-4">
        Leibniz's work on the calculus appeared in <strong>1684</strong>, before Newton
        had gotten around to publishing his results. Not surprisingly, Leibniz was
        accused of plagiarism by some British mathematicians, not without Newton's
        acquiescence, and a <strong>bitter priority battle</strong> ensued.
      </p>

      <Callout type="note" title="Today's Verdict">
        Today, we ascribe the invention of the calculus to <strong>both Newton and
        Leibniz</strong>. They developed it independently, with different notation
        and different emphasis. Newton's approach was more geometric and physical;
        Leibniz's was more algebraic and symbolic. We use Leibniz's notation because
        it is more flexible and suggestive.
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Leibniz had been working as librarian for the Duke of Hannover. When the Duke
        became <strong>King George I of England</strong>, he left two people behind:
        his wife (whom he divorced and shut up in a cloister) and Leibniz—because he
        did not want to antagonize the British academic establishment.
      </p>

      {/* Criticisms and Rigorization */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Problem of Infinitesimals</h3>

      <Card className="mb-6">
        <CardHeader>Berkeley's Criticism</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            The concept of the infinitesimal—also implicit in Newton's fluxions—was
            criticized by many, including the philosopher and bishop <strong>George
            Berkeley</strong> (1685–1753).
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic my-3">
            "How can we divide by <InlineMath>{`dx`}</InlineMath> if it is 0? How can
            we get the slope of the tangent right, in our example <InlineMath>{`2x`}</InlineMath>,
            if it is not 0?"
          </blockquote>
          <p>
            Berkeley called infinitesimals "the ghosts of departed quantities."
          </p>
        </div>
      </Card>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-200 mb-2"><strong>Later Rigorization:</strong></p>
        <ul className="text-dark-300 space-y-2 text-sm">
          <li>
            • <strong>Weierstrass (1815–1897)</strong> put calculus on firm footing using
            the <strong>epsilon-delta definition</strong> of limits. The derivative is
            now seen not as a quotient but as a <em>limit</em> of quotients:
            <MathBlock>{`\\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}`}</MathBlock>
          </li>
          <li>
            • <strong>Abraham Robinson (1966)</strong> introduced <strong>nonstandard
            analysis</strong>, giving a rigorous foundation for infinitesimals using
            mathematical logic. Leibniz's intuitions were vindicated!
          </li>
        </ul>
      </div>

      {/* Philosophy */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Leibniz the Philosopher</h3>

      <Card className="mb-6">
        <CardHeader>The Best of All Possible Worlds</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Leibniz is famous for his view that this is the <strong>"best of all
            possible universes"</strong>. (Could God have failed to create the best?)
            This view was ridiculed by Voltaire in his novel <em>Candide</em>.
          </p>
          <p>
            However, Leibniz probably did not mean "happiest" by "best." He may have
            meant something like <strong>"most energy-efficient"</strong>—inspired by
            Snell's discovery that light rays minimize travel time between two points,
            which Leibniz discussed in his <em>Discourse on Metaphysics</em>.
          </p>
        </div>
      </Card>

      <Callout type="info" title="The Principle of Least Action">
        <p className="mb-2">
          The behavior of light rays is one instance of the <strong>Principle of
          Least Action</strong>, put forward by Pierre Maupertuis (1698–1759) in 1751
          and formally established by Lagrange:
        </p>
        <p className="text-sm">
          Any physical process happens in such a way as to minimize the "action"—a
          quantity involving the difference between kinetic and potential energy
          integrated over time.
        </p>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>The Monadology</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Leibniz's most original philosophical contribution is his <em>Monadology</em>,
            which proposes that the universe is made up of ultimate elements called
            <strong> monads</strong>—entities capable of perception. Human souls are
            monads with memory and reason.
          </p>
          <p className="text-sm italic">
            If influenced by his mathematical background, Leibniz might have thought
            of a monad as a point together with the set of all points infinitely close
            to it. Robinson later used "monad" in this technical sense in nonstandard
            analysis.
          </p>
        </div>
      </Card>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Leibniz</strong> (1646–1716) was a universal genius: mathematician, philosopher, diplomat</li>
          <li>• In 1666, he conceived the idea of <strong>symbolic logic</strong></li>
          <li>• Independently developed the <strong>calculus</strong>, publishing in 1684</li>
          <li>• Introduced the notation <InlineMath>{`dy/dx`}</InlineMath> and <InlineMath>{`\\int`}</InlineMath> still used today</li>
          <li>• Used <strong>infinitesimals</strong> (<InlineMath>{`dx`}</InlineMath>, <InlineMath>{`dy`}</InlineMath>) to define derivatives</li>
          <li>• <strong>Leibniz's rule</strong> gives the derivative of a product</li>
          <li>• <strong>Berkeley</strong> criticized infinitesimals; <strong>Weierstrass</strong> rigorized calculus with limits</li>
          <li>• <strong>Robinson</strong> (1966) vindicated infinitesimals with nonstandard analysis</li>
          <li>• Philosophy: "best of all possible worlds," <strong>Principle of Least Action</strong>, <strong>Monadology</strong></li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={28} questions={section28Questions} />
    </LessonLayout>
  );
}
