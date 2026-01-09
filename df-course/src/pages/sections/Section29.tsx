import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2>Recognizing Direct Products</h2>
      <p>
        Given a group <InlineMath>G</InlineMath> and subgroups <InlineMath>H, K</InlineMath>, when can we conclude that <InlineMath>G \cong H \times K</InlineMath>?
        This section provides criteria for recognizing internal direct products.
      </p>

      <h3>Internal Direct Product Criterion</h3>
      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>H, K \le G</InlineMath>. Then <InlineMath>G = H \times K</InlineMath> (internal direct product) if and only if:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><InlineMath>H \cap K = \{'{'}e\{'}'}</InlineMath></li>
          <li><InlineMath>HK = G</InlineMath></li>
          <li><InlineMath>hk = kh</InlineMath> for all <InlineMath>h \in H, k \in K</InlineMath></li>
        </ol>
      </Callout>

      <p>
        Note: Condition 3 is equivalent to both <InlineMath>H</InlineMath> and <InlineMath>K</InlineMath> being normal in <InlineMath>G</InlineMath>.
      </p>

      <h3>Alternative Characterization</h3>
      <Callout type="info">
        <strong>Theorem:</strong> <InlineMath>G = H \times K</InlineMath> if and only if:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>H \unlhd G</InlineMath> and <InlineMath>K \unlhd G</InlineMath></li>
          <li><InlineMath>H \cap K = \{'{'}e\{'}'}</InlineMath></li>
          <li><InlineMath>|G| = |H| \cdot |K|</InlineMath> (for finite groups)</li>
        </ul>
      </Callout>

      <h3>Multiple Factors</h3>
      <Callout type="info">
        <strong>Theorem:</strong> <InlineMath>G = H_1 \times H_2 \times \cdots \times H_n</InlineMath> if and only if:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Each <InlineMath>H_i \unlhd G</InlineMath></li>
          <li><InlineMath>G = H_1 H_2 \cdots H_n</InlineMath></li>
          <li><InlineMath>H_i \cap (H_1 \cdots H_{'{'}i-1{'}'} H_{'{'}i+1{'}'} \cdots H_n) = \{'{'}e\{'}'}</InlineMath> for each <InlineMath>i</InlineMath></li>
        </ol>
      </Callout>

      <h3>Applications</h3>

      <p><strong>Application 1:</strong> Sylow Subgroups</p>
      <p>
        If all Sylow subgroups of <InlineMath>G</InlineMath> are normal, then <InlineMath>G</InlineMath> is a direct product of its Sylow subgroups.
      </p>

      <p><strong>Example:</strong> <InlineMath>|G| = 15 = 3 \cdot 5</InlineMath></p>
      <p>
        By Sylow: <InlineMath>n_3 = 1</InlineMath> and <InlineMath>n_5 = 1</InlineMath>. Let <InlineMath>P_3</InlineMath> and <InlineMath>P_5</InlineMath> be the unique Sylow subgroups.
        Then <InlineMath>G = P_3 \times P_5 \cong \mathbb{'{'}Z{'}'}/3\mathbb{'{'}Z{'}'} \times \mathbb{'{'}Z{'}'}/5\mathbb{'{'}Z{'}'} \cong \mathbb{'{'}Z{'}'}/15\mathbb{'{'}Z{'}'}</InlineMath>.
      </p>

      <p><strong>Application 2:</strong> Coprime Subgroups</p>
      <Callout type="info">
        <strong>Proposition:</strong> If <InlineMath>H, K \unlhd G</InlineMath> with <InlineMath>\gcd(|H|, |K|) = 1</InlineMath> and <InlineMath>|G| = |H| \cdot |K|</InlineMath>,
        then <InlineMath>G = H \times K</InlineMath>.
      </Callout>
      <p>
        <em>Proof:</em> <InlineMath>|H \cap K|</InlineMath> divides both <InlineMath>|H|</InlineMath> and <InlineMath>|K|</InlineMath>, so <InlineMath>|H \cap K| = 1</InlineMath>, thus <InlineMath>H \cap K = \{'{'}e\{'}'}</InlineMath>.
      </p>

      <h3>Recognizing When NOT a Direct Product</h3>
      <p>
        <InlineMath>G</InlineMath> is NOT a direct product of non-trivial subgroups if:
      </p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li><InlineMath>G</InlineMath> is simple (no proper normal subgroups)</li>
        <li><InlineMath>G</InlineMath> has a unique normal subgroup of some order</li>
        <li>All proper normal subgroups have non-trivial intersection</li>
      </ul>

      <p><strong>Example:</strong> <InlineMath>Q_8</InlineMath> is not a direct product.</p>
      <p>
        The only normal subgroups of <InlineMath>Q_8</InlineMath> are <InlineMath>\{'{'}1\{'}'}, \{'{'}1, -1\{'}'}, \langle i \rangle, \langle j \rangle, \langle k \rangle, Q_8</InlineMath>.
        Any two proper non-trivial normal subgroups contain <InlineMath>-1</InlineMath>, so their intersection is non-trivial.
      </p>

      <h3>Direct Product and the Center</h3>
      <Callout type="info">
        <strong>Proposition:</strong> If <InlineMath>G = H \times K</InlineMath>, then <InlineMath>Z(G) = Z(H) \times Z(K)</InlineMath>.
      </Callout>

      <p>
        <strong>Corollary:</strong> If <InlineMath>Z(G) = \{'{'}e\{'}'}</InlineMath> and <InlineMath>G = H \times K</InlineMath>, then <InlineMath>Z(H) = Z(K) = \{'{'}e\{'}'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> To recognize <InlineMath>G</InlineMath> as an internal direct product <InlineMath>H \times K</InlineMath>, verify that <InlineMath>H, K</InlineMath>
        are normal, <InlineMath>H \cap K = \{'{'}e\{'}'}</InlineMath>, and <InlineMath>HK = G</InlineMath>. Coprime orders of normal subgroups
        guarantee trivial intersection. Unique Sylow subgroups often lead to direct product decompositions.
      </Callout>
    </LessonLayout>
  );
}
