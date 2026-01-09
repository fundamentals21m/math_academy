import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2>Semidirect Products</h2>
      <p>
        The <strong>semidirect product</strong> is a generalization of the direct product that allows one
        factor to act non-trivially on the other. This construction is essential for building and classifying
        non-abelian groups.
      </p>

      <h3>Motivation</h3>
      <p>
        Consider <InlineMath>S_3</InlineMath>. We have <InlineMath>A_3 \unlhd S_3</InlineMath> and a Sylow 2-subgroup <InlineMath>H = \langle (1\,2) \rangle</InlineMath>.
        Then <InlineMath>A_3 \cap H = \{'{'}e\{'}'}</InlineMath> and <InlineMath>A_3 H = S_3</InlineMath>. But <InlineMath>S_3 \not\cong A_3 \times H</InlineMath> since <InlineMath>S_3</InlineMath> is non-abelian!
      </p>
      <p>
        The issue is that <InlineMath>H</InlineMath> is not normal. The semidirect product handles this situation.
      </p>

      <h3>Internal Semidirect Product</h3>
      <Callout type="info">
        <strong>Definition:</strong> <InlineMath>G</InlineMath> is an (internal) <strong>semidirect product</strong> of <InlineMath>N</InlineMath> by <InlineMath>H</InlineMath>,
        written <InlineMath>G = N \rtimes H</InlineMath>, if:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>N \unlhd G</InlineMath></li>
          <li><InlineMath>NH = G</InlineMath></li>
          <li><InlineMath>N \cap H = \{'{'}e\{'}'}</InlineMath></li>
        </ol>
        (Note: <InlineMath>H</InlineMath> need not be normal.)
      </Callout>

      <p>
        Compare to direct product: we only require <InlineMath>N</InlineMath> to be normal, not <InlineMath>H</InlineMath>.
        In a semidirect product, <InlineMath>H</InlineMath> acts on <InlineMath>N</InlineMath> by conjugation.
      </p>

      <h3>External Semidirect Product</h3>
      <Callout type="info">
        <strong>Definition:</strong> Given groups <InlineMath>N</InlineMath> and <InlineMath>H</InlineMath> and a homomorphism <InlineMath>\varphi: H \to \text{'{'}Aut{'}'}(N)</InlineMath>,
        the <strong>external semidirect product</strong> <InlineMath>N \rtimes_\varphi H</InlineMath> is:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Set: <InlineMath>N \times H</InlineMath> (as a set)</li>
          <li>Operation: <InlineMath>(n_1, h_1)(n_2, h_2) = (n_1 \varphi(h_1)(n_2), h_1 h_2)</InlineMath></li>
        </ul>
      </Callout>

      <p>
        When <InlineMath>\varphi</InlineMath> is trivial (all of <InlineMath>H</InlineMath> maps to identity), this reduces to the direct product.
      </p>

      <h3>Properties</h3>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>Identity: <InlineMath>(e_N, e_H)</InlineMath></li>
        <li>Inverse: <InlineMath>(n, h)^{'{-1}'} = (\varphi(h^{'{-1}'})(n^{'{-1}'}), h^{'{-1}'})</InlineMath></li>
        <li><InlineMath>|N \rtimes H| = |N| \cdot |H|</InlineMath></li>
        <li><InlineMath>N \cong N \times \{'{'}e\{'}'} \unlhd N \rtimes H</InlineMath></li>
        <li><InlineMath>H \cong \{'{'}e\{'}'} \times H \le N \rtimes H</InlineMath> (but not necessarily normal)</li>
      </ul>

      <h3>Examples</h3>

      <p><strong>Example 1:</strong> Dihedral Groups</p>
      <MathBlock>D_{'{'}{'{'}2n{'}'}{'{}'} \cong \mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'} \rtimes \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</MathBlock>
      <p>
        where <InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> acts on <InlineMath>\mathbb{'{'}Z{'}'}/n\mathbb{'{'}Z{'}'}</InlineMath> by <InlineMath>\bar{'{'}1{'}'} \mapsto (\bar{'{'}k{'}'} \mapsto -\bar{'{'}k{'}'})</InlineMath>.
      </p>

      <p><strong>Example 2:</strong> <InlineMath>S_3 \cong \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \rtimes \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath></p>
      <p>
        The action is by inversion: the generator of <InlineMath>\mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath> sends <InlineMath>\bar{'{'}1{'}'}</InlineMath> to <InlineMath>-\bar{'{'}1{'}'} = \bar{'{'}2{'}'}</InlineMath>.
      </p>

      <p><strong>Example 3:</strong> Affine Group</p>
      <p>
        The group of affine transformations <InlineMath>x \mapsto ax + b</InlineMath> on a field <InlineMath>F</InlineMath> is:
      </p>
      <MathBlock>\text{'{'}Aff{'}'}(F) \cong F \rtimes F^*</MathBlock>
      <p>where <InlineMath>F^*</InlineMath> acts on <InlineMath>F</InlineMath> by multiplication.</p>

      <h3>Classifying Semidirect Products</h3>
      <p>
        Different homomorphisms <InlineMath>\varphi: H \to \text{'{'}Aut{'}'}(N)</InlineMath> can give non-isomorphic groups, even for fixed <InlineMath>N, H</InlineMath>.
      </p>
      <p>
        <strong>Example:</strong> For <InlineMath>N = \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'}</InlineMath> and <InlineMath>H = \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'}</InlineMath>:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li>Trivial <InlineMath>\varphi</InlineMath>: <InlineMath>\mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/2\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/6\mathbb{'{'}Z{'}'}</InlineMath></li>
        <li>Non-trivial <InlineMath>\varphi</InlineMath> (inversion): <InlineMath>S_3</InlineMath></li>
      </ul>

      <h3>When is G a Semidirect Product?</h3>
      <Callout type="info">
        <strong>Theorem:</strong> <InlineMath>G = N \rtimes H</InlineMath> if and only if there is a short exact sequence:
        <MathBlock>1 \to N \to G \to H \to 1</MathBlock>
        that <strong>splits</strong> (i.e., has a section <InlineMath>H \to G</InlineMath>).
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> The semidirect product <InlineMath>N \rtimes H</InlineMath> generalizes the direct product by allowing
        <InlineMath>H</InlineMath> to act non-trivially on <InlineMath>N</InlineMath>. The multiplication incorporates the action via <InlineMath>\varphi: H \to \text{'{'}Aut{'}'}(N)</InlineMath>.
        Dihedral groups and symmetric groups are natural examples. Different actions can yield non-isomorphic groups.
      </Callout>
    </LessonLayout>
  );
}
