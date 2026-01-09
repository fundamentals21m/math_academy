import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2>Surfaces and Classification</h2>

      <p>
        One of topology's great achievements is the complete classification
        of surfaces: we can list all possible 2-dimensional spaces, and any
        surface you encounter is topologically equivalent to exactly one on
        this list. This classification, achieved in the late 19th century,
        shows the power of topological thinking—infinitely many geometric
        shapes reduce to a manageable family of types.
      </p>

      <Callout type="info">
        <strong>A Complete Answer:</strong> Unlike many classification problems
        in mathematics, the classification of surfaces is fully solved. Every
        compact surface can be described by just two pieces of data: whether
        it's orientable and its Euler characteristic.
      </Callout>

      <h3>What Is a Surface?</h3>

      <Definition title="Surface (2-Manifold)">
        <p>
          A <strong>surface</strong> (or <strong>2-manifold</strong>) is a
          space that locally looks like a piece of the plane{' '}
          <InlineMath>\mathbb{R}^2</InlineMath>. Near every point, you can
          find a neighborhood that's topologically a disk.
        </p>
      </Definition>

      <Example title="Examples of Surfaces">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong>Sphere:</strong> The surface of a ball</li>
          <li><strong>Torus:</strong> The surface of a donut</li>
          <li><strong>Klein bottle:</strong> A one-sided surface (can't exist in 3D without self-intersection)</li>
          <li><strong>Projective plane:</strong> The elliptic geometry surface</li>
        </ul>
      </Example>

      <h3>Orientability</h3>

      <Definition title="Orientable Surface">
        <p>
          A surface is <strong>orientable</strong> if it has two distinct sides.
          Equivalently, you can consistently define "clockwise" everywhere on
          the surface.
        </p>
      </Definition>

      <Example title="The Möbius Strip">
        <p>
          Take a strip of paper, give it a half-twist, and glue the ends. The
          result is a <strong>Möbius strip</strong>—a surface with only one side!
        </p>
        <p className="mt-2">
          If you start coloring one "side" and continue, you'll eventually
          color what appeared to be the "other side."
        </p>
        <p className="mt-2 text-dark-400">
          The Möbius strip has a boundary (an edge), so it's not a closed
          surface. But it demonstrates non-orientability.
        </p>
      </Example>

      <Example title="The Klein Bottle">
        <p>
          Glue two Möbius strips along their boundaries to get a{' '}
          <strong>Klein bottle</strong>—a closed, non-orientable surface.
        </p>
        <p className="mt-2">
          In 3D, you can't build a Klein bottle without self-intersection,
          but it exists perfectly well as an abstract surface.
        </p>
      </Example>

      <h3>The Classification Theorem</h3>

      <Theorem title="Classification of Compact Surfaces">
        <p>
          Every compact, connected surface is topologically equivalent to
          exactly one of:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Orientable:</strong> A sphere with <InlineMath>g</InlineMath> handles attached (genus <InlineMath>g</InlineMath>)</li>
          <li><strong>Non-orientable:</strong> A sphere with <InlineMath>k</InlineMath> cross-caps attached</li>
        </ul>
      </Theorem>

      <Example title="Orientable Surfaces">
        <p>
          The orientable surfaces, listed by genus:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>g = 0</InlineMath>: Sphere</li>
          <li><InlineMath>g = 1</InlineMath>: Torus (one handle)</li>
          <li><InlineMath>g = 2</InlineMath>: Double torus (two handles)</li>
          <li><InlineMath>g = 3</InlineMath>: Triple torus, etc.</li>
        </ul>
        <p className="mt-2">
          Euler characteristic: <InlineMath>\chi = 2 - 2g</InlineMath>
        </p>
      </Example>

      <Example title="Non-Orientable Surfaces">
        <p>
          The non-orientable surfaces:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>k = 1</InlineMath>: Projective plane (one cross-cap)</li>
          <li><InlineMath>k = 2</InlineMath>: Klein bottle (two cross-caps)</li>
          <li><InlineMath>k = 3</InlineMath>: Three cross-caps, etc.</li>
        </ul>
        <p className="mt-2">
          Euler characteristic: <InlineMath>\chi = 2 - k</InlineMath>
        </p>
      </Example>

      <h3>Connected Sum</h3>

      <Definition title="Connected Sum">
        <p>
          The <strong>connected sum</strong> <InlineMath>S_1 \# S_2</InlineMath>{' '}
          of two surfaces is formed by removing a small disk from each and
          gluing along the resulting boundary circles.
        </p>
      </Definition>

      <Example title="Building Surfaces">
        <p>
          Using connected sums:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Torus = Sphere # (handle) = <InlineMath>T^2</InlineMath></li>
          <li>Double torus = <InlineMath>T^2 \# T^2</InlineMath></li>
          <li>Klein bottle = <InlineMath>\mathbb{RP}^2 \# \mathbb{RP}^2</InlineMath></li>
        </ul>
      </Example>

      <Theorem title="Euler Characteristic Under Connected Sum">
        <p>
          For the connected sum of surfaces:
        </p>
        <MathBlock>
          {`\\chi(S_1 \\# S_2) = \\chi(S_1) + \\chi(S_2) - 2`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The "-2" accounts for removing a disk from each surface.
        </p>
      </Theorem>

      <h3>Proving the Classification</h3>

      <p>
        The classification theorem is proved by showing any surface can be
        simplified to a standard form:
      </p>

      <Example title="Cut and Paste">
        <p>
          Any surface can be represented as a polygon with edges identified
          in pairs. For example:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Torus:</strong> Square with opposite edges identified (same direction)</li>
          <li><strong>Klein bottle:</strong> Square with one pair identified same direction, one pair reversed</li>
          <li><strong>Projective plane:</strong> Disk with opposite boundary points identified</li>
        </ul>
      </Example>

      <Example title="Normal Form">
        <p>
          Through a sequence of cutting and regluing operations, any polygon
          representation can be transformed into a standard form:
        </p>
        <MathBlock>
          {`a_1 b_1 a_1^{-1} b_1^{-1} \\cdots a_g b_g a_g^{-1} b_g^{-1} \\quad \\text{(orientable, genus } g \\text{)}`}
        </MathBlock>
        <MathBlock>
          {`c_1 c_1 c_2 c_2 \\cdots c_k c_k \\quad \\text{(non-orientable, } k \\text{ cross-caps)}`}
        </MathBlock>
      </Example>

      <h3>Surfaces with Boundary</h3>

      <Definition title="Surface with Boundary">
        <p>
          A <strong>surface with boundary</strong> is a space where some points
          have neighborhoods like half-disks (on the boundary) rather than
          full disks.
        </p>
      </Definition>

      <Example title="Examples">
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Disk:</strong> One boundary circle</li>
          <li><strong>Cylinder:</strong> Two boundary circles</li>
          <li><strong>Möbius strip:</strong> One boundary circle</li>
          <li><strong>Pair of pants:</strong> Three boundary circles</li>
        </ul>
      </Example>

      <Theorem title="Classification with Boundary">
        <p>
          Compact surfaces with boundary are classified by three data:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Orientability</li>
          <li>Euler characteristic</li>
          <li>Number of boundary components</li>
        </ul>
      </Theorem>

      <h3>Historical Development</h3>

      <Example title="Key Contributors">
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Möbius & Listing (1858):</strong> Independently discovered
            the Möbius strip
          </li>
          <li>
            <strong>Riemann (1857):</strong> Studied surfaces in connection
            with complex analysis
          </li>
          <li>
            <strong>Klein (1882):</strong> Described the Klein bottle
          </li>
          <li>
            <strong>Dehn & Heegaard (1907):</strong> Completed rigorous
            classification proof
          </li>
        </ul>
      </Example>

      <Callout type="note">
        <strong>Elegance of Classification:</strong> The classification of
        surfaces is one of topology's most satisfying results. An infinite
        variety of shapes—stretched, twisted, and deformed—all reduce to a
        simple list determined by two numbers. This exemplifies topology's
        goal: finding the essential structure beneath apparent complexity.
      </Callout>

      <SectionQuiz sectionId={65} questions={quizMap[65] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
