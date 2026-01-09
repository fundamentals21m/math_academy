import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2>Exact Sequences: Projective, Injective, and Flat Modules</h2>

      <p>
        Projective, injective, and flat modules are special classes of modules that have good
        behavior with respect to exact sequences. They are fundamental to homological algebra
        and provide the right framework for studying extensions and resolutions.
      </p>

      <h3>Projective Modules</h3>

      <Definition title="Projective Module">
        <p>
          An <InlineMath>R</InlineMath>-module <InlineMath>P</InlineMath> is <strong>projective</strong> if
          for every surjective homomorphism <InlineMath>{'\\pi: M \\to N'}</InlineMath> and every homomorphism
          <InlineMath>{'\\phi: P \\to N'}</InlineMath>, there exists a homomorphism <InlineMath>{'\\tilde{\\phi}: P \\to M'}</InlineMath>
          such that <InlineMath>{'\\pi \\circ \\tilde{\\phi} = \\phi'}</InlineMath>.
        </p>
        <MathBlock>
          {'\\begin{CD} && P \\\\ && @VV{\\phi}V @VV{\\exists \\tilde{\\phi}}V \\\\ M @>{\\pi}>> N @>>> 0 \\end{CD}'}
        </MathBlock>
      </Definition>

      <Theorem title="Characterizations of Projective Modules"
        proof={
          <>
            <p>
              (1) <InlineMath>{'\\Leftrightarrow'}</InlineMath> (2): Apply the definition to
              <InlineMath>{'\\pi: M \\to P'}</InlineMath> surjective and <InlineMath>{'\\phi = \\text{id}_P'}</InlineMath>.
              A lift <InlineMath>{'\\tilde{\\phi}: P \\to M'}</InlineMath> with <InlineMath>{'\\pi \\tilde{\\phi} = \\text{id}_P'}</InlineMath>
              is a section, splitting the sequence.
            </p>
            <p className="mt-2">
              (2) <InlineMath>{'\\Leftrightarrow'}</InlineMath> (3): If <InlineMath>{'M = P \\oplus Q'}</InlineMath>,
              then <InlineMath>P</InlineMath> is a summand. Conversely, take <InlineMath>M</InlineMath> free
              mapping onto <InlineMath>P</InlineMath>; the section makes <InlineMath>P</InlineMath> a summand.
            </p>
          </>
        }
      >
        <p>
          The following are equivalent for an <InlineMath>R</InlineMath>-module <InlineMath>P</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>P</InlineMath> is projective</li>
          <li>Every short exact sequence <InlineMath>{'0 \\to A \\to B \\to P \\to 0'}</InlineMath> splits</li>
          <li><InlineMath>P</InlineMath> is a direct summand of a free module</li>
        </ol>
      </Theorem>

      <Example title="Free Modules are Projective">
        <p>
          Every free module is projective. Given <InlineMath>{'\\phi: F \\to N'}</InlineMath> and
          <InlineMath>{'\\pi: M \\to N'}</InlineMath> surjective, for each basis element <InlineMath>{'b_i'}</InlineMath>,
          choose <InlineMath>{'m_i \\in \\pi^{-1}(\\phi(b_i))'}</InlineMath> and extend linearly.
        </p>
      </Example>

      <Example title="Projective but Not Free">
        <p>
          In <InlineMath>{'R = \\mathbb{Z}/6\\mathbb{Z} \\cong \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/3\\mathbb{Z}'}</InlineMath>,
          the module <InlineMath>{'\\mathbb{Z}/2\\mathbb{Z}'}</InlineMath> (via projection) is projective but not free.
        </p>
        <p className="mt-2">
          It's a direct summand of <InlineMath>R</InlineMath>: <InlineMath>{'R = \\mathbb{Z}/2\\mathbb{Z} \\oplus \\mathbb{Z}/3\\mathbb{Z}'}</InlineMath>.
        </p>
      </Example>

      <h3>Injective Modules</h3>

      <Definition title="Injective Module">
        <p>
          An <InlineMath>R</InlineMath>-module <InlineMath>I</InlineMath> is <strong>injective</strong> if
          for every injective homomorphism <InlineMath>{'\\iota: A \\to B'}</InlineMath> and every homomorphism
          <InlineMath>{'\\phi: A \\to I'}</InlineMath>, there exists <InlineMath>{'\\tilde{\\phi}: B \\to I'}</InlineMath>
          extending <InlineMath>{'\\phi'}</InlineMath>.
        </p>
        <MathBlock>
          {'\\begin{CD} 0 @>>> A @>{\\iota}>> B \\\\ @. @VV{\\phi}V @VV{\\exists \\tilde{\\phi}}V \\\\ @. I @= I \\end{CD}'}
        </MathBlock>
      </Definition>

      <Theorem title="Baer's Criterion"
        proof={
          <>
            <p>
              The key is to extend from ideals to the whole ring. Given <InlineMath>{'\\phi: A \\to I'}</InlineMath>
              with <InlineMath>{'A \\subseteq B'}</InlineMath>, use Zorn's lemma on partial extensions.
            </p>
            <p className="mt-2">
              Maximality plus the ideal extension property shows the maximal extension is defined on all of <InlineMath>B</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>I</InlineMath> is injective if and only if every homomorphism from an ideal of <InlineMath>R</InlineMath>
          to <InlineMath>I</InlineMath> extends to <InlineMath>R</InlineMath>.
        </p>
      </Theorem>

      <Example title="Divisible Abelian Groups">
        <p>
          A <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module (abelian group) <InlineMath>D</InlineMath> is
          <strong>divisible</strong> if for every <InlineMath>{'d \\in D'}</InlineMath> and <InlineMath>{'n \\neq 0'}</InlineMath>,
          there exists <InlineMath>{'d\' \\in D'}</InlineMath> with <InlineMath>{'nd\' = d'}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{'\\mathbb{Q}'}</InlineMath> and <InlineMath>{'\\mathbb{Q}/\\mathbb{Z}'}</InlineMath> are divisible,
          hence injective as <InlineMath>{'\\mathbb{Z}'}</InlineMath>-modules.
        </p>
      </Example>

      <Theorem title="Characterizations of Injective Modules"
        proof={
          <>
            <p>
              (1) <InlineMath>{'\\Leftrightarrow'}</InlineMath> (2): Apply the definition to
              <InlineMath>{'\\iota: I \\to N'}</InlineMath> injective and <InlineMath>{'\\phi = \\text{id}_I'}</InlineMath>.
              An extension is a retraction, splitting the sequence.
            </p>
          </>
        }
      >
        <p>
          The following are equivalent:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>I</InlineMath> is injective</li>
          <li>Every short exact sequence <InlineMath>{'0 \\to I \\to B \\to C \\to 0'}</InlineMath> splits</li>
        </ol>
      </Theorem>

      <h3>Flat Modules</h3>

      <Definition title="Flat Module">
        <p>
          An <InlineMath>R</InlineMath>-module <InlineMath>F</InlineMath> is <strong>flat</strong> if the
          functor <InlineMath>{'F \\otimes_R -'}</InlineMath> is exact. That is, if
          <InlineMath>{'0 \\to A \\to B'}</InlineMath> is exact, then
          <InlineMath>{'0 \\to F \\otimes A \\to F \\otimes B'}</InlineMath> is exact.
        </p>
      </Definition>

      <Theorem title="Projective Implies Flat"
        proof={
          <>
            <p>
              Free modules are flat: <InlineMath>{'R^n \\otimes M \\cong M^n'}</InlineMath>, and tensoring
              preserves direct sums, so preserves exactness componentwise.
            </p>
            <p className="mt-2">
              Projective modules are summands of free modules, and direct summands of flat modules are flat.
            </p>
          </>
        }
      >
        <p>
          Every projective module is flat. Every free module is flat.
        </p>
      </Theorem>

      <Example title="Flat but Not Projective">
        <p>
          <InlineMath>{'\\mathbb{Q}'}</InlineMath> is flat as a <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module
          but not projective.
        </p>
        <p className="mt-2">
          Flatness: <InlineMath>{'\\mathbb{Q} \\otimes_\\mathbb{Z} -'}</InlineMath> is the localization
          <InlineMath>{'- \\otimes \\mathbb{Q}'}</InlineMath>, which is exact.
        </p>
        <p className="mt-2">
          Not projective: If it were, it would be a summand of a free <InlineMath>{'\\mathbb{Z}'}</InlineMath>-module,
          but <InlineMath>{'\\mathbb{Q}'}</InlineMath> is divisible and free <InlineMath>{'\\mathbb{Z}'}</InlineMath>-modules
          are not (except 0).
        </p>
      </Example>

      <Theorem title="Lazard's Theorem"
        proof={
          <>
            <p>
              The proof uses the fact that flat modules can be characterized by certain exactness conditions
              on finitely generated ideals, which can be "approximated" by finitely presented data.
            </p>
          </>
        }
      >
        <p>
          A module is flat if and only if it is a filtered colimit (direct limit) of free modules.
        </p>
      </Theorem>

      <h3>The Hierarchy</h3>

      <MathBlock>
        {'\\text{Free} \\Rightarrow \\text{Projective} \\Rightarrow \\text{Flat}}'}
      </MathBlock>

      <p>
        Neither implication reverses in general, but:
      </p>

      <Theorem title="Special Cases"
        proof={
          <>
            <p>
              Over a PID, a module is projective iff free iff torsion-free. Flatness is equivalent to
              torsion-freeness for modules over PIDs.
            </p>
            <p className="mt-2">
              Over a local ring, projective = free by Nakayama's lemma.
            </p>
          </>
        }
      >
        <ul className="list-disc list-inside mt-2">
          <li>Over a PID, projective = flat = torsion-free, and finitely generated projective = free</li>
          <li>Over a local ring, projective = free</li>
          <li>Over a field, all modules are free = projective = injective = flat</li>
        </ul>
      </Theorem>

      <Callout type="info">
        <strong>Homological Algebra:</strong> These special modules enable the construction of resolutions.
        A projective resolution of <InlineMath>M</InlineMath> is an exact sequence
        <InlineMath>{'\\cdots \\to P_1 \\to P_0 \\to M \\to 0'}</InlineMath> with projective <InlineMath>{'P_i'}</InlineMath>.
        Such resolutions are used to define Ext and Tor functors.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Projective modules satisfy a lifting property for surjections and are
        direct summands of free modules. Injective modules satisfy an extension property for injections.
        Flat modules preserve exactness of sequences upon tensoring. Free implies projective implies flat,
        with equivalences holding in special cases (PIDs, local rings, fields).
      </Callout>
    </LessonLayout>
  );
}
