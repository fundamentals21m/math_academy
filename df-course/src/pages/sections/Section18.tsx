import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2>Composition Series and the Holder Program</h2>
      <p>
        <strong>Composition series</strong> decompose groups into simple pieces. The <strong>Holder program</strong>
        (named after Otto Holder) aims to classify all finite groups by understanding simple groups and
        how they can be assembled.
      </p>

      <h3>Definitions</h3>
      <Callout type="info">
        <strong>Definition:</strong> A <strong>subnormal series</strong> of a group <InlineMath>G</InlineMath> is a chain:
        <MathBlock>1 = N_0 \unlhd N_1 \unlhd N_2 \unlhd \cdots \unlhd N_k = G</MathBlock>
        The quotients <InlineMath>N_{'{'}i+1{'}'}/N_i</InlineMath> are called the <strong>factors</strong> of the series.
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>composition series</strong> is a subnormal series where each factor <InlineMath>N_{'{'}i+1{'}'}/N_i</InlineMath>
        is a <strong>simple group</strong> (non-trivial with no proper normal subgroups).
      </Callout>

      <p>
        Equivalently, a composition series has no proper refinements: each <InlineMath>N_i</InlineMath> is a maximal normal
        subgroup of <InlineMath>N_{'{'}i+1{'}'}</InlineMath>.
      </p>

      <h3>Simple Groups</h3>
      <Callout type="info">
        <strong>Definition:</strong> A group <InlineMath>G</InlineMath> is <strong>simple</strong> if <InlineMath>G \neq \{'{'}e\{'}'}</InlineMath> and the only normal
        subgroups of <InlineMath>G</InlineMath> are <InlineMath>\{'{'}e\{'}'}</InlineMath> and <InlineMath>G</InlineMath>.
      </Callout>

      <p>Examples of simple groups:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>\mathbb{'{'}Z{'}'}/p\mathbb{'{'}Z{'}'}</InlineMath> for <InlineMath>p</InlineMath> prime (the only abelian simple groups)</li>
        <li><InlineMath>A_n</InlineMath> for <InlineMath>n \geq 5</InlineMath> (proven later)</li>
        <li>Various families of "groups of Lie type"</li>
        <li>26 sporadic simple groups</li>
      </ul>

      <h3>Existence of Composition Series</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Every finite group has a composition series.
      </Callout>

      <p>
        <strong>Proof sketch:</strong> By induction on <InlineMath>|G|</InlineMath>. If <InlineMath>G</InlineMath> is simple, <InlineMath>1 \unlhd G</InlineMath> is a composition series.
        Otherwise, let <InlineMath>N</InlineMath> be a maximal proper normal subgroup. By induction, <InlineMath>N</InlineMath> has a composition series,
        and appending <InlineMath>G</InlineMath> gives a composition series for <InlineMath>G</InlineMath>.
      </p>

      <h3>The Jordan-Holder Theorem</h3>
      <Callout type="info">
        <strong>Theorem (Jordan-Holder):</strong> Any two composition series of a finite group <InlineMath>G</InlineMath> have the same length
        and the same composition factors (up to isomorphism and reordering).
      </Callout>

      <p>
        The <strong>composition factors</strong> of <InlineMath>G</InlineMath> are thus an invariant of <InlineMath>G</InlineMath>, independent of the choice
        of composition series.
      </p>

      <h3>Example: Composition Series of S_4</h3>
      <MathBlock>1 \unlhd V_4 \unlhd A_4 \unlhd S_4</MathBlock>
      <p>where <InlineMath>V_4 = \{'{'}e, (1\,2)(3\,4), (1\,3)(2\,4), (1\,4)(2\,3)\{'}'}</InlineMath> is the Klein four-group.</p>
      <p>Composition factors:</p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>V_4/1 \cong \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> — but wait, this is not simple!</li>
      </ul>

      <p>A proper composition series for <InlineMath>S_4</InlineMath>:</p>
      <MathBlock>1 \unlhd \langle (1\,2)(3\,4) \rangle \unlhd V_4 \unlhd A_4 \unlhd S_4</MathBlock>
      <p>Factors: <InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}, \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}, \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'}, \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> (all simple).</p>

      <h3>The Holder Program</h3>
      <p>
        The Holder program for classifying finite groups has two parts:
      </p>
      <ol className="list-decimal list-inside text-dark-300 mb-6 space-y-2">
        <li><strong>Classify all finite simple groups</strong> — Completed in 2004! The list includes:
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Cyclic groups <InlineMath>\mathbb{'{'}Z{'}'}/p\mathbb{'{'}Z{'}'}</InlineMath></li>
            <li>Alternating groups <InlineMath>A_n</InlineMath> for <InlineMath>n \geq 5</InlineMath></li>
            <li>Groups of Lie type (16 families)</li>
            <li>26 sporadic groups</li>
          </ul>
        </li>
        <li><strong>Determine all ways to assemble simple groups</strong> — Still open! (the "extension problem")</li>
      </ol>

      <Callout type="warning">
        <strong>Note:</strong> Knowing the composition factors does not determine the group!
        For example, <InlineMath>\mathbb{'{'}Z{'}'}/4\mathbb{'{'}Z{'}'}</InlineMath> and <InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> have the same composition factors
        (<InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}, \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath>) but are not isomorphic.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Composition series decompose groups into simple factors.
        By the Jordan-Holder Theorem, the composition factors are unique up to reordering.
        The Holder program aims to classify groups via simple groups and extensions.
        The classification of finite simple groups was a monumental achievement completed in 2004.
      </Callout>
    </LessonLayout>
  );
}
