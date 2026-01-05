import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section28Questions } from '../../data/quizzes';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2 className="text-2xl font-semibold mb-4">Discussion: Algebra and Geometry</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The main message of the last two chapters is that geometry has{' '}
        <strong>two sides</strong>. First there is the visual, self-contained,
        synthetic side, which seems intuitively natural; then the algebraic,
        analytic side, which takes over when intuition fails and integrates
        geometry into the larger world of mathematics.
      </p>

      {/* The Two Sides of Geometry */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Two Faces of Geometry</h3>

      <CardGrid>
        <Card>
          <CardHeader title="Synthetic Geometry" />
          <p className="text-xs text-dark-300">
            Visual, self-contained, intuitively natural. Led to Euclid's
            Elements, the most influential mathematics book ever written.
          </p>
        </Card>
        <Card>
          <CardHeader title="Analytic Geometry" />
          <p className="text-xs text-dark-300">
            Algebraic, coordinate-based. Takes over when intuition fails and
            integrates geometry into broader mathematics.
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 my-6">
        Visualization will surely continue to inspire new discoveries in
        geometry, but algebra will rule geometry as long as it is more efficient
        and more conducive to mathematical unity.
      </p>

      {/* Historical Conflict */}
      <h3 className="text-xl font-semibold mt-10 mb-4">A Fruitful Conflict</h3>

      <p className="text-dark-200 mb-6">
        There is an apparent conflict between these two sides, and this conflict
        has been extraordinarily fruitful for the development of mathematics.
      </p>

      <Callout type="info">
        <p>
          The conflict began with the discovery of <strong>irrational lengths</strong>,
          such as <InlineMath>\sqrt{'{2}'}</InlineMath>. At the time, numbers were
          rational by definition, so irrational lengths could not be numbers, and
          hence geometry could not be based on arithmetic.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        Doing geometry without arithmetic turned out to be fruitful, however,
        because it led to Euclid's <em>Elements</em>. It was only when Euclid's
        influence began to wane in the 19th century that mathematicians finally
        resolved the conflict by extending the concept of number.
      </p>

      {/* Fields and Geometry */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Fields: The Language of Geometry</h3>

      <p className="text-dark-200 mb-6">
        The 19th century saw a great enlargement in the scope of algebra, which
        allowed the operations +, −, ×, and ÷ to be applied to objects that are
        not necessarily numbers. This led to the definitions of{' '}
        <strong>ring</strong> and <strong>field</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">
          Around 1900
        </h4>
        <p className="text-dark-200">
          It became clear that the concept of <strong>field</strong> was the
          appropriate algebraic setting for geometry. We can build Euclid's
          geometry using the field <InlineMath>\mathbb{'{R}'}</InlineMath> of real
          numbers, and conversely, we can build a field from Euclid's geometric
          concepts.
        </p>
      </div>

      <p className="text-dark-200 mb-6">
        Doing geometry analytically is <em>almost</em> equivalent to doing
        geometry synthetically. The only extra ingredient in analytic geometry
        is <strong>completeness</strong>—assigning a number to each point on the
        line. This is precisely the step the Greeks refused to take.
      </p>

      {/* The Jump from Q to R */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        The Jump from <InlineMath>\mathbb{'{Q}'}</InlineMath> to{' '}
        <InlineMath>\mathbb{'{R}'}</InlineMath>
      </h3>

      <p className="text-dark-200 mb-6">
        Dedekind's definition of real numbers as cuts in{' '}
        <InlineMath>\mathbb{'{Q}'}</InlineMath> is exquisitely simple, but
        deceptive: it hides the fact that{' '}
        <InlineMath>\mathbb{'{R}'}</InlineMath> is a far less comprehensible set
        than <InlineMath>\mathbb{'{Q}'}</InlineMath>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="font-semibold mb-3">Countable Sets</h4>
        <p className="text-dark-300 text-sm mb-4">
          The sets <InlineMath>\mathbb{'{N}'}</InlineMath>,{' '}
          <InlineMath>\mathbb{'{Z}'}</InlineMath>, and{' '}
          <InlineMath>\mathbb{'{Q}'}</InlineMath> are called{' '}
          <strong>countable</strong> because we can list their members:
        </p>
        <MathBlock>{`\\mathbb{Z} = \\{0, 1, -1, 2, -2, 3, -3, \\ldots\\}`}</MathBlock>
        <p className="text-dark-300 text-sm mt-4">
          To list the rationals, we order positive fractions by the sum of
          numerator and denominator, then alternate positive and negative.
        </p>
      </div>

      {/* Cantor's Discovery */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Cantor's Discovery (1874)</h3>

      <Callout type="warning">
        <p>
          Cantor discovered that <strong>not all infinite sets</strong> have the
          same cardinality. In particular,{' '}
          <InlineMath>\mathbb{'{R}'}</InlineMath> is{' '}
          <strong>uncountable</strong>—there is no way to list its members.
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        This means <InlineMath>\mathbb{'{R}'}</InlineMath> can only be
        comprehended as a <em>completed whole</em>. To understand{' '}
        <InlineMath>\mathbb{'{R}'}</InlineMath>, we must grasp all the cuts in{' '}
        <InlineMath>\mathbb{'{Q}'}</InlineMath> at once!
      </p>

      <p className="text-dark-200 mb-6">
        The reason <InlineMath>\mathbb{'{R}'}</InlineMath> can be comprehended
        only as a completed whole is precisely its <strong>completeness</strong>{' '}
        in the mathematical sense. Any countable set A of numbers contains a
        gap, and hence is not complete.
      </p>

      {/* Potential vs Actual Infinity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        Potential vs. Actual Infinity
      </h3>

      <p className="text-dark-200 mb-6">
        This is what makes the concept of{' '}
        <InlineMath>\mathbb{'{R}'}</InlineMath> really remote from Greek
        mathematics.
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Potential Infinity" />
          <p className="text-xs text-dark-300">
            The Greeks accepted this: a process that continues indefinitely,
            like generating{' '}
            <InlineMath>\mathbb{'{N}'}</InlineMath> by repeatedly adding 1.
          </p>
        </Card>
        <Card>
          <CardHeader title="Actual Infinity" />
          <p className="text-xs text-dark-300">
            The Greeks rejected this: a completed infinite set. But real numbers
            require infinite subsets of{' '}
            <InlineMath>\mathbb{'{Q}'}</InlineMath> given without generating
            processes.
          </p>
        </Card>
      </CardGrid>

      {/* Similarities */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        An Alternative Definition of Euclidean Geometry
      </h3>

      <p className="text-dark-200 mb-6">
        One characteristic feature of Euclidean plane geometry is the existence
        of <strong>similarities</strong>: mappings that multiply all lengths by
        a constant. A typical similarity is the <em>dilatation</em>{' '}
        <InlineMath>\text{'{dil}'}_c</InlineMath> that sends each point{' '}
        <InlineMath>(x, y)</InlineMath> to <InlineMath>(cx, cy)</InlineMath>.
      </p>

      <p className="text-dark-200 mb-6">
        We take the existence of similarities for granted in real life—scale
        models, maps, and blueprints are all faithful representations. But this
        means <strong>length is not essential</strong> to Euclidean geometry.
        The important properties of a triangle are not the lengths of its sides,
        but their <em>ratios</em>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-green-400">
        <h4 className="text-lg font-semibold mb-3 text-green-400">
          Similarity Geometry
        </h4>
        <p className="text-dark-200">
          We could define Euclidean geometry using the <strong>group of
          similarities</strong> rather than the group of isometries. Similarities
          preserve angles, and a remarkable theorem shows that similarities are
          the <em>only</em> maps of{' '}
          <InlineMath>\mathbb{'{R}'} \times \mathbb{'{R}'}</InlineMath> that
          preserve all angles.
        </p>
      </div>

      {/* Non-Euclidean Contrast */}
      <h3 className="text-xl font-semibold mt-10 mb-4">
        A Remarkable Contrast
      </h3>

      <Callout type="success">
        <p>
          In the <strong>non-Euclidean plane</strong>, the only angle-preserving
          maps are the isometries. There are <em>no</em> maps that multiply all
          lengths by a constant ≠ 1. Beings in a non-Euclidean world would not
          enjoy scale models, but they could determine the <strong>size</strong>{' '}
          of a figure from its shape alone!
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              Geometry has <strong>two sides</strong>: synthetic (visual) and
              analytic (algebraic).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              The conflict between them—sparked by irrational numbers—has been
              extraordinarily <strong>fruitful</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Fields</strong> provide the appropriate algebraic setting
              for geometry.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <InlineMath>\mathbb{'{R}'}</InlineMath> is{' '}
              <strong>uncountable</strong>, unlike{' '}
              <InlineMath>\mathbb{'{Q}'}</InlineMath>—this is why the Greeks
              could not conceive of real numbers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              Euclidean geometry can be defined by <strong>similarities</strong>;
              non-Euclidean geometry cannot.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={28} questions={section28Questions} />
    </LessonLayout>
  );
}
