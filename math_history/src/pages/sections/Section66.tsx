import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <h2>The Fundamental Group</h2>

      <p>
        How can we tell if two spaces are topologically different? Euler
        characteristic helps, but it's not enough—there are distinct spaces
        with the same <InlineMath>\chi</InlineMath>. Henri Poincaré invented
        a more powerful tool: the <strong>fundamental group</strong>, which
        captures how loops in a space can or cannot be contracted to a point.
        This marked the birth of <em>algebraic topology</em>—using algebra
        to solve topological problems.
      </p>

      <Callout type="info">
        <strong>Algebra Meets Topology:</strong> Poincaré's fundamental group
        was revolutionary: it associated an algebraic object (a group) to a
        geometric object (a space). Different spaces have different groups,
        so algebraic computations can prove topological results.
      </Callout>

      <h3>Loops and Homotopy</h3>

      <Definition title="Loop">
        <p>
          A <strong>loop</strong> based at point <InlineMath>p</InlineMath>{' '}
          is a continuous path that starts and ends at <InlineMath>p</InlineMath>.
        </p>
      </Definition>

      <Definition title="Homotopy of Loops">
        <p>
          Two loops are <strong>homotopic</strong> if one can be continuously
          deformed into the other while keeping the basepoint fixed.
        </p>
        <p className="mt-2 text-dark-400">
          Intuitively: you can "morph" one loop into the other without
          breaking it or lifting it off the surface.
        </p>
      </Definition>

      <Example title="Loops on a Disk">
        <p>
          On a disk, every loop can be continuously shrunk to a point.
          All loops are homotopic to the trivial (constant) loop.
        </p>
      </Example>

      <Example title="Loops on an Annulus">
        <p>
          On an annulus (disk with a hole), some loops can be contracted but
          others cannot. A loop going around the hole cannot shrink to a point.
        </p>
        <p className="mt-2">
          Moreover, a loop going around twice is different from one going
          around once—they're not homotopic.
        </p>
      </Example>

      <h3>The Fundamental Group</h3>

      <Definition title="Fundamental Group">
        <p>
          The <strong>fundamental group</strong>{' '}
          <InlineMath>\pi_1(X, p)</InlineMath> of a space <InlineMath>X</InlineMath>{' '}
          with basepoint <InlineMath>p</InlineMath> is the set of homotopy
          classes of loops, with the group operation being concatenation.
        </p>
      </Definition>

      <Example title="Group Operation">
        <p>
          Given loops <InlineMath>\alpha</InlineMath> and{' '}
          <InlineMath>\beta</InlineMath>, their product{' '}
          <InlineMath>\alpha \cdot \beta</InlineMath> is: first traverse{' '}
          <InlineMath>\alpha</InlineMath>, then traverse{' '}
          <InlineMath>\beta</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Identity:</strong> The constant loop (stay at the basepoint)</li>
          <li><strong>Inverse:</strong> Traverse the loop backwards</li>
          <li><strong>Associativity:</strong> Reparametrize the paths</li>
        </ul>
      </Example>

      <h3>Computing Fundamental Groups</h3>

      <Theorem title="Simply Connected Spaces">
        <p>
          A space is <strong>simply connected</strong> if its fundamental
          group is trivial: <InlineMath>{`\\pi_1(X) = \\{e\\}`}</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          This means every loop can be contracted to a point.
        </p>
      </Theorem>

      <Example title="Fundamental Groups of Common Spaces">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <InlineMath>\mathbb{R}^n</InlineMath>:{' '}
            <InlineMath>{`\\pi_1 = \\{e\\}`}</InlineMath> (simply connected)
          </li>
          <li>
            Sphere <InlineMath>S^n</InlineMath> for <InlineMath>{`n \\geq 2`}</InlineMath>:{' '}
            <InlineMath>{`\\pi_1 = \\{e\\}`}</InlineMath>
          </li>
          <li>
            Circle <InlineMath>S^1</InlineMath>:{' '}
            <InlineMath>\pi_1 = \mathbb{Z}</InlineMath> (integer winding number)
          </li>
          <li>
            Torus <InlineMath>T^2</InlineMath>:{' '}
            <InlineMath>{`\\pi_1 = \\mathbb{Z} \\times \\mathbb{Z}`}</InlineMath>
          </li>
          <li>
            Figure-eight:{' '}
            <InlineMath>{`\\pi_1 = F_2`}</InlineMath> (free group on 2 generators)
          </li>
        </ul>
      </Example>

      <Example title="The Circle">
        <p>
          For the circle <InlineMath>S^1</InlineMath>, loops are classified
          by how many times they wind around:
        </p>
        <MathBlock>
          {`\\pi_1(S^1) \\cong \\mathbb{Z}`}
        </MathBlock>
        <p className="mt-2">
          The loop going around once clockwise represents 1, twice represents
          2, counterclockwise is -1, etc.
        </p>
      </Example>

      <Example title="The Torus">
        <p>
          The torus has two independent directions for loops (around the
          "hole" and through the "hole"):
        </p>
        <MathBlock>
          {`\\pi_1(T^2) \\cong \\mathbb{Z} \\times \\mathbb{Z}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          A loop might go around 3 times one way and 2 times the other,
          represented by (3, 2).
        </p>
      </Example>

      <h3>Covering Spaces</h3>

      <p>
        The fundamental group is intimately connected to covering spaces:
      </p>

      <Definition title="Covering Space">
        <p>
          A <strong>covering space</strong> of <InlineMath>X</InlineMath> is
          a space <InlineMath>\tilde{X}</InlineMath> with a map{' '}
          <InlineMath>p: \tilde{X} \to X</InlineMath> such that every point
          in <InlineMath>X</InlineMath> has a neighborhood evenly covered by{' '}
          <InlineMath>p</InlineMath>.
        </p>
      </Definition>

      <Example title="The Real Line Covers the Circle">
        <p>
          The map <InlineMath>{`p: \\mathbb{R} \\to S^1`}</InlineMath> given
          by <InlineMath>{`p(t) = e^{2\\pi i t}`}</InlineMath> wraps the
          real line infinitely many times around the circle.
        </p>
        <p className="mt-2">
          <InlineMath>\mathbb{R}</InlineMath> is the <strong>universal cover</strong>{' '}
          of <InlineMath>S^1</InlineMath>: it's simply connected and covers
          the circle.
        </p>
      </Example>

      <Theorem title="Correspondence Theorem">
        <p>
          There is a bijection between covering spaces of{' '}
          <InlineMath>X</InlineMath> and subgroups of{' '}
          <InlineMath>\pi_1(X)</InlineMath>.
        </p>
        <p className="mt-2 text-dark-400">
          The universal cover corresponds to the trivial subgroup; the
          space itself corresponds to the whole group.
        </p>
      </Theorem>

      <h3>Applications</h3>

      <Example title="Proving Spaces Are Different">
        <p>
          The fundamental group can distinguish spaces that Euler characteristic
          cannot:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Torus: <InlineMath>{`\\pi_1 = \\mathbb{Z}^2`}</InlineMath>, <InlineMath>\chi = 0</InlineMath></li>
          <li>Klein bottle: <InlineMath>\pi_1</InlineMath> is non-abelian, <InlineMath>\chi = 0</InlineMath></li>
        </ul>
        <p className="mt-2">
          Same <InlineMath>\chi</InlineMath>, different <InlineMath>\pi_1</InlineMath>—so
          they're topologically distinct.
        </p>
      </Example>

      <Example title="The Poincaré Conjecture">
        <p>
          Poincaré asked: if a 3-dimensional manifold has trivial fundamental
          group, must it be a 3-sphere?
        </p>
        <p className="mt-2">
          This famous <strong>Poincaré Conjecture</strong> was proved by
          Grigori Perelman in 2003 (announced 2002-2003, verified by 2006).
        </p>
      </Example>

      <h3>Higher Homotopy Groups</h3>

      <p>
        The fundamental group is just the first of a sequence:
      </p>

      <Definition title="Higher Homotopy Groups">
        <p>
          The <InlineMath>n</InlineMath>-th homotopy group{' '}
          <InlineMath>\pi_n(X)</InlineMath> classifies maps from the{' '}
          <InlineMath>n</InlineMath>-sphere into <InlineMath>X</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>\pi_1</InlineMath>: loops (1-spheres)</li>
          <li><InlineMath>\pi_2</InlineMath>: 2-spheres mapped into X</li>
          <li><InlineMath>\pi_3</InlineMath>: 3-spheres, etc.</li>
        </ul>
      </Definition>

      <Callout type="note">
        <strong>A Rich Theory:</strong> Higher homotopy groups are much
        harder to compute than <InlineMath>\pi_1</InlineMath>. Even{' '}
        <InlineMath>\pi_n(S^m)</InlineMath> for spheres remains only
        partially understood—a major open area in topology.
      </Callout>

      <h3>Poincaré's Legacy</h3>

      <p>
        The fundamental group revolutionized mathematics:
      </p>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Algebraic topology:</strong> Poincaré's <em>Analysis Situs</em>{' '}
          (1895) founded the field of using algebra to study topology.
        </li>
        <li>
          <strong>Homology and cohomology:</strong> Led to more sophisticated
          algebraic invariants.
        </li>
        <li>
          <strong>Modern mathematics:</strong> The interplay of algebra and
          topology became central to 20th-century mathematics.
        </li>
      </ul>

      <SectionQuiz sectionId={66} questions={quizMap[66] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
