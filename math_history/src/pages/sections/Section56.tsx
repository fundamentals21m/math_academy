import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2>Attempts to Prove the Parallel Postulate</h2>

      <p>
        For over two thousand years, mathematicians struggled with Euclid's
        fifth postulate—the parallel postulate. Unlike the other four postulates,
        it seemed too complex, too much like a theorem that should be provable.
        The centuries of failed attempts to prove it eventually led to one of
        the most revolutionary discoveries in mathematics: non-Euclidean geometry.
      </p>

      <Callout type="info">
        <strong>A Mathematical Quest:</strong> The parallel postulate problem
        attracted some of the greatest minds in mathematics. Its resolution
        fundamentally changed our understanding of geometry, space, and the
        nature of mathematical truth.
      </Callout>

      <h3>Euclid's Parallel Postulate</h3>

      <p>
        Euclid's five postulates form the foundation of classical geometry.
        The first four are elegantly simple:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>A straight line can be drawn between any two points</li>
        <li>A line segment can be extended indefinitely</li>
        <li>A circle can be drawn with any center and radius</li>
        <li>All right angles are equal</li>
      </ul>

      <p className="mt-4">
        The fifth postulate stands apart in its complexity:
      </p>

      <Definition title="Euclid's Parallel Postulate (Fifth Postulate)">
        <p>
          If a straight line falling on two straight lines makes the interior
          angles on the same side less than two right angles, the two straight
          lines, if extended indefinitely, meet on that side on which the
          angles are less than two right angles.
        </p>
      </Definition>

      <p>
        This verbose statement is equivalent to the more familiar:
      </p>

      <Theorem title="Playfair's Axiom">
        <p>
          Given a line <InlineMath>\ell</InlineMath> and a point{' '}
          <InlineMath>P</InlineMath> not on <InlineMath>\ell</InlineMath>,
          there exists exactly one line through <InlineMath>P</InlineMath>{' '}
          parallel to <InlineMath>\ell</InlineMath>.
        </p>
      </Theorem>

      <h3>Why the Dissatisfaction?</h3>

      <p>
        Ancient mathematicians were troubled by the fifth postulate for several
        reasons:
      </p>

      <Example title="Aesthetic Concerns">
        <p>
          The first four postulates are simple and self-evident. The fifth is
          convoluted, speaking of lines extending "indefinitely"—an infinite
          process that seems more like a theorem than an axiom.
        </p>
        <p className="mt-2 text-dark-400">
          Many mathematicians felt that something this complex must be provable
          from the simpler postulates.
        </p>
      </Example>

      <Example title="Delayed Use">
        <p>
          Euclid himself seemed reluctant to use the fifth postulate. He proved
          the first 28 propositions of the <em>Elements</em> without it,
          introducing it only when absolutely necessary.
        </p>
        <p className="mt-2">
          This suggested even Euclid suspected it might be derivable from the
          others.
        </p>
      </Example>

      <h3>Early Attempts: Proclus and Ptolemy</h3>

      <p>
        The quest to prove the parallel postulate began in antiquity:
      </p>

      <Example title="Ptolemy's Attempt (c. 150 CE)">
        <p>
          Ptolemy argued that if two parallel lines are cut by a transversal,
          the interior angles on one side must equal those on the other. He
          tried to prove that these angles must sum to exactly{' '}
          <InlineMath>{`180°`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          His "proof" secretly assumed that parallel lines are equidistant—itself
          equivalent to the parallel postulate.
        </p>
      </Example>

      <Example title="Proclus's Attempt (c. 450 CE)">
        <p>
          The Neoplatonist philosopher Proclus assumed that the distance between
          two parallel lines is bounded. He argued that if one line approaches
          another, it must eventually meet it.
        </p>
        <p className="mt-2 text-dark-400">
          But "bounded distance" between parallels is equivalent to what he
          was trying to prove.
        </p>
      </Example>

      <h3>Islamic Mathematicians</h3>

      <p>
        During the Islamic Golden Age, mathematicians made more sophisticated
        attempts:
      </p>

      <Example title="Omar Khayyam (c. 1100)">
        <p>
          The Persian poet-mathematician Omar Khayyam studied quadrilaterals
          with two equal sides perpendicular to a base. He tried to prove
          that the summit angles must be right angles.
        </p>
        <MathBlock>
          {`\\text{If } AB \\perp BC \\text{ and } DC \\perp BC \\text{ with } AB = DC,`}
        </MathBlock>
        <MathBlock>
          {`\\text{must } \\angle BAD = \\angle CDA = 90°?`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Khayyam's work anticipated key ideas later developed by Saccheri.
        </p>
      </Example>

      <Example title="Nasir al-Din al-Tusi (c. 1250)">
        <p>
          Al-Tusi wrote a sophisticated treatise on the parallel postulate.
          He assumed that if two lines converge on one side, they must
          diverge on the other—an assumption equivalent to the postulate itself.
        </p>
      </Example>

      <h3>Saccheri's Near Miss</h3>

      <p>
        Giovanni Girolamo Saccheri (1667–1733) came tantalizingly close to
        discovering non-Euclidean geometry:
      </p>

      <Example title="Saccheri Quadrilaterals">
        <p>
          Saccheri considered quadrilaterals <InlineMath>ABCD</InlineMath> with{' '}
          <InlineMath>{`AB \\perp BC`}</InlineMath>,{' '}
          <InlineMath>{`DC \\perp BC`}</InlineMath>, and{' '}
          <InlineMath>AB = DC</InlineMath>. Three possibilities exist for the
          summit angles <InlineMath>{`\\angle DAB`}</InlineMath> and{' '}
          <InlineMath>{`\\angle CDA`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Right angle hypothesis:</strong> Both are 90° (Euclidean)</li>
          <li><strong>Obtuse angle hypothesis:</strong> Both are greater than 90°</li>
          <li><strong>Acute angle hypothesis:</strong> Both are less than 90°</li>
        </ul>
      </Example>

      <p>
        Saccheri's strategy was proof by contradiction: assume one of the
        non-Euclidean hypotheses and derive an absurdity.
      </p>

      <Theorem title="Saccheri's Results">
        <p>
          Saccheri successfully eliminated the obtuse angle hypothesis (it
          contradicts the other postulates). But his "refutation" of the
          acute angle hypothesis was flawed.
        </p>
        <p className="mt-2 text-dark-400">
          He derived many strange results—lines asymptotic to each other,
          triangles with angle sum less than 180°—but these were not actually
          contradictions. He simply declared them "repugnant to the nature
          of a straight line."
        </p>
      </Theorem>

      <Callout type="note">
        <strong>So Close!</strong> Saccheri had actually developed much of
        hyperbolic geometry but couldn't accept that a consistent non-Euclidean
        geometry was possible. His inability to find a true contradiction
        was itself evidence that the parallel postulate is independent.
      </Callout>

      <h3>Lambert and Legendre</h3>

      <p>
        The 18th century saw further progress:
      </p>

      <Example title="Johann Lambert (1766)">
        <p>
          Lambert studied quadrilaterals with three right angles and explored
          the acute angle hypothesis more thoroughly than Saccheri. He proved:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Under the acute hypothesis, triangle angle sums are less than 180°</li>
          <li>The "defect" (180° minus angle sum) is proportional to area</li>
          <li>There would be an absolute unit of length</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Lambert suspected a consistent geometry might exist on a "sphere
          of imaginary radius."
        </p>
      </Example>

      <Example title="Adrien-Marie Legendre (c. 1800)">
        <p>
          Legendre made many attempts, proving theorems like: "The angle sum
          of a triangle is at most 180°." But he could never prove equality
          without assuming the parallel postulate.
        </p>
        <p className="mt-2">
          His repeated failed attempts over decades suggested the postulate
          might be truly independent.
        </p>
      </Example>

      <h3>Equivalent Statements</h3>

      <p>
        Mathematicians discovered many statements equivalent to the parallel
        postulate:
      </p>

      <Theorem title="Equivalents to the Parallel Postulate">
        <p>
          In the presence of Euclid's other postulates, each of these is
          equivalent to the fifth postulate:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The angle sum of every triangle is exactly 180°</li>
          <li>Similar triangles of different sizes exist</li>
          <li>Rectangles (quadrilaterals with four right angles) exist</li>
          <li>The Pythagorean theorem holds</li>
          <li>There is no upper bound on the area of triangles</li>
          <li>Parallel lines are everywhere equidistant</li>
        </ul>
      </Theorem>

      <p>
        Each failed proof secretly assumed one of these equivalent statements.
      </p>

      <h3>The Dawn of Revolution</h3>

      <p>
        By the early 19th century, the accumulated evidence pointed toward
        a revolutionary conclusion: perhaps the parallel postulate simply
        <em>cannot</em> be proved—because alternative geometries are logically
        possible.
      </p>

      <Callout type="info">
        <strong>A Paradigm Shift:</strong> The resolution would come not from
        proving the postulate, but from embracing its negation. Gauss, Bolyai,
        and Lobachevsky would show that denying the parallel postulate leads
        not to contradiction but to a beautiful new geometry—hyperbolic
        geometry—as logically consistent as Euclid's own.
      </Callout>

      <p>
        Two thousand years of "failure" was actually the slow accumulation
        of evidence for one of mathematics' greatest discoveries: that
        Euclidean geometry is not the only possible geometry, and that the
        parallel postulate is an independent axiom, not a theorem.
      </p>

      <SectionQuiz sectionId={56} questions={quizMap[56] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
