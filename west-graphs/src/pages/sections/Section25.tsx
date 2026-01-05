import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <p>
        Ramsey theory studies the emergence of order in large structures. The fundamental
        principle: in any large enough system, some regular pattern must appear. For
        graphs, this means that sufficiently large complete graphs, when edge-colored,
        must contain monochromatic cliques. Ramsey numbers quantify "how large is large
        enough."
      </p>

      <h2>The Party Problem</h2>

      <Example title="The Party Problem">
        <p>
          <strong>Question:</strong> How many people must attend a party so that either 3
          mutual friends or 3 mutual strangers exist?
        </p>
        <p className="mt-2">
          Model as <InlineMath math="K_n" /> with edges colored red (friends) or blue
          (strangers). We seek a monochromatic triangle.
        </p>
        <p className="mt-2">
          <strong>Answer:</strong> <InlineMath math="n = 6" /> people suffice.
        </p>
        <p className="mt-2">
          <strong>Proof:</strong> Pick any person <InlineMath math="v" />. By pigeonhole,{' '}
          <InlineMath math="v" /> has at least 3 red edges or 3 blue edges. WLOG, say
          red edges to <InlineMath math="a, b, c" />. If any edge among{' '}
          <InlineMath math="a, b, c" /> is red, we have a red triangle. Otherwise,{' '}
          <InlineMath math="abc" /> is a blue triangle.
        </p>
      </Example>

      <h2>Ramsey Numbers</h2>

      <Definition title="Ramsey Number R(s,t)">
        <p>
          The <strong>Ramsey number</strong> <InlineMath math="R(s, t)" /> is the minimum{' '}
          <InlineMath math="n" /> such that every red-blue edge-coloring of{' '}
          <InlineMath math="K_n" /> contains either a red <InlineMath math="K_s" /> or a
          blue <InlineMath math="K_t" />.
        </p>
      </Definition>

      <Theorem title="Ramsey's Theorem (Graph Version)">
        <p>
          <InlineMath math="R(s, t)" /> exists for all <InlineMath math="s, t \geq 1" />.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof (Induction)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Base: <InlineMath math="R(1, t) = R(s, 1) = 1" /> and{' '}
              <InlineMath math="R(2, t) = t" />.
            </p>
            <p className="mt-2">
              Inductive step: Show <InlineMath math="R(s,t) \leq R(s-1,t) + R(s,t-1)" />.
            </p>
            <p className="mt-2">
              In <InlineMath math="K_n" /> with <InlineMath math="n = R(s-1,t) + R(s,t-1)" />,
              pick vertex <InlineMath math="v" />. Either ≥<InlineMath math="R(s-1,t)" />{' '}
              red neighbors (giving red <InlineMath math="K_{s-1}" /> or blue{' '}
              <InlineMath math="K_t" />; extend red clique with <InlineMath math="v" />)
              or ≥<InlineMath math="R(s,t-1)" /> blue neighbors (symmetric).
            </p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Upper Bound">
        <MathBlock math="R(s, t) \leq \binom{s + t - 2}{s - 1}" />
        <p className="mt-2">
          In particular, <InlineMath math="R(s, s) \leq \binom{2s-2}{s-1} = O(4^s/\sqrt{s})" />.
        </p>
      </Theorem>

      <Example title="Known Ramsey Numbers">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="R(3, 3) = 6" />
          </li>
          <li>
            <InlineMath math="R(3, 4) = 9" />
          </li>
          <li>
            <InlineMath math="R(3, 5) = 14" />
          </li>
          <li>
            <InlineMath math="R(4, 4) = 18" />
          </li>
          <li>
            <InlineMath math="R(4, 5) = 25" />
          </li>
          <li>
            <InlineMath math="R(5, 5)" />: between 43 and 48 (exact value unknown!)
          </li>
        </ul>
      </Example>

      <h2>Erdős Lower Bound</h2>

      <Theorem title="Erdős Probabilistic Lower Bound (1947)">
        <MathBlock math="R(s, s) > 2^{s/2}" />
        <details className="mt-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Proof (Probabilistic Method)
          </summary>
          <div className="mt-2 pl-4 border-l-2 border-dark-700">
            <p>
              Color each edge of <InlineMath math="K_n" /> red or blue uniformly at
              random.
            </p>
            <p className="mt-2">
              For any <InlineMath math="s" />-set <InlineMath math="S" />, probability
              that <InlineMath math="S" /> is monochromatic ={' '}
              <InlineMath math="2 \cdot 2^{-\binom{s}{2}}" />.
            </p>
            <p className="mt-2">
              Expected number of monochromatic <InlineMath math="K_s" />:{' '}
              <InlineMath math="\binom{n}{s} \cdot 2^{1-\binom{s}{2}}" />.
            </p>
            <p className="mt-2">
              If <InlineMath math="n < 2^{s/2}" />, this expectation is{' '}
              <InlineMath math="< 1" />, so some coloring has no monochromatic{' '}
              <InlineMath math="K_s" />.
            </p>
          </div>
        </details>
      </Theorem>

      <p>
        This was the first application of the probabilistic method in combinatorics,
        revolutionizing the field.
      </p>

      <h2>Graph Ramsey Theory</h2>

      <Definition title="Graph Ramsey Number">
        <p>
          For graphs <InlineMath math="G" /> and <InlineMath math="H" />, the{' '}
          <strong>Ramsey number</strong> <InlineMath math="R(G, H)" /> is the minimum{' '}
          <InlineMath math="n" /> such that every red-blue coloring of{' '}
          <InlineMath math="K_n" /> contains a red copy of <InlineMath math="G" /> or a
          blue copy of <InlineMath math="H" />.
        </p>
      </Definition>

      <Theorem title="Ramsey Numbers for Paths and Cycles">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="R(P_n, P_n) = \lfloor 3(n-1)/2 \rfloor + 1" />
          </li>
          <li>
            <InlineMath math="R(C_n, C_n) = 2n - 1" /> for odd <InlineMath math="n \geq 3" />
          </li>
          <li>
            <InlineMath math="R(C_n, C_n) = \frac{3n}{2} - 1" /> for even{' '}
            <InlineMath math="n \geq 4" />
          </li>
        </ul>
      </Theorem>

      <h2>Multi-Color Ramsey</h2>

      <Definition title="k-Color Ramsey Number">
        <p>
          <InlineMath math="R_k(s_1, \ldots, s_k)" /> is the minimum{' '}
          <InlineMath math="n" /> such that every <InlineMath math="k" />-coloring of{' '}
          <InlineMath math="K_n" /> contains a monochromatic{' '}
          <InlineMath math="K_{s_i}" /> in color <InlineMath math="i" /> for some{' '}
          <InlineMath math="i" />.
        </p>
      </Definition>

      <Example title="3-Color Ramsey">
        <p>
          <InlineMath math="R_3(3, 3, 3) = 17" />: every 3-coloring of{' '}
          <InlineMath math="K_{17}" /> has a monochromatic triangle.
        </p>
      </Example>

      <Theorem title="Schur's Theorem">
        <p>
          For any <InlineMath math="k" />-coloring of <InlineMath math="[n]" /> with{' '}
          <InlineMath math="n" /> large enough, there exist{' '}
          <InlineMath math="x, y, z" /> of the same color with{' '}
          <InlineMath math="x + y = z" />.
        </p>
      </Theorem>

      <h2>Key Takeaways</h2>

      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Ramsey's Theorem:</strong> Large structures contain ordered
          substructures. <InlineMath math="R(s,t)" /> always exists.
        </li>
        <li>
          <strong>R(3,3) = 6:</strong> The "party problem" answer.
        </li>
        <li>
          <strong>Bounds:</strong>{' '}
          <InlineMath math="2^{s/2} < R(s,s) \leq 4^s" /> approximately.
        </li>
        <li>
          <strong>Growth:</strong> Ramsey numbers grow extremely fast; exact values
          known only for small cases.
        </li>
        <li>
          <strong>Probabilistic Method:</strong> Erdős's proof initiated a powerful
          technique.
        </li>
        <li>
          <strong>Graph Ramsey:</strong> Generalized to arbitrary graphs, not just
          cliques.
        </li>
      </ul>
    </LessonLayout>
  );
}
