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

      <Theorem
        title="Ramsey's Theorem (Graph Version)"
        proof={
          <>
            <p>
              <strong>Base cases:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>
                <InlineMath math="R(1, t) = R(s, 1) = 1" />: A single vertex trivially
                contains <InlineMath math="K_1" /> of any color.
              </li>
              <li>
                <InlineMath math="R(2, t) = t" />: Need red edge or blue{' '}
                <InlineMath math="K_t" />. With <InlineMath math="t" /> vertices, either
                some edge is red or all edges are blue.
              </li>
            </ul>
            <p className="mt-2">
              <strong>Inductive step:</strong> We prove{' '}
              <InlineMath math="R(s,t) \leq R(s-1,t) + R(s,t-1)" />.
            </p>
            <p className="mt-2">
              Let <InlineMath math="n = R(s-1,t) + R(s,t-1)" /> and consider any 2-coloring
              of <InlineMath math="K_n" />. Pick any vertex <InlineMath math="v" />. By
              pigeonhole, <InlineMath math="v" /> has at least <InlineMath math="R(s-1,t)" />{' '}
              red neighbors or at least <InlineMath math="R(s,t-1)" /> blue neighbors.
            </p>
            <p className="mt-2">
              <strong>Case 1:</strong> <InlineMath math="v" /> has{' '}
              <InlineMath math="\geq R(s-1,t)" /> red neighbors. By definition of{' '}
              <InlineMath math="R(s-1,t)" />, these neighbors contain red{' '}
              <InlineMath math="K_{s-1}" /> or blue <InlineMath math="K_t" />. If red{' '}
              <InlineMath math="K_{s-1}" />, add <InlineMath math="v" /> to get red{' '}
              <InlineMath math="K_s" />.
            </p>
            <p className="mt-2">
              <strong>Case 2:</strong> Symmetric for blue neighbors.
            </p>
          </>
        }
      >
        <p>
          <InlineMath math="R(s, t)" /> exists for all <InlineMath math="s, t \geq 1" />.
        </p>
      </Theorem>

      <Theorem
        title="Upper Bound"
        proof={
          <>
            <p>
              <strong>By induction</strong> using{' '}
              <InlineMath math="R(s,t) \leq R(s-1,t) + R(s,t-1)" />.
            </p>
            <p className="mt-2">
              <strong>Base:</strong> <InlineMath math="R(s,1) = R(1,t) = 1 = \binom{s-1}{s-1} = \binom{t-1}{0}" />.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong>
            </p>
            <MathBlock math="R(s,t) \leq R(s-1,t) + R(s,t-1) \leq \binom{s+t-3}{s-2} + \binom{s+t-3}{s-1}" />
            <p className="mt-2">
              By Pascal's identity:
            </p>
            <MathBlock math="= \binom{s+t-2}{s-1}" />
            <p className="mt-2">
              <strong>Diagonal case:</strong> For <InlineMath math="R(s,s)" />:
            </p>
            <MathBlock math="R(s,s) \leq \binom{2s-2}{s-1} \sim \frac{4^{s-1}}{\sqrt{\pi(s-1)}} = O(4^s/\sqrt{s})" />
            <p className="mt-2">
              using Stirling's approximation.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Erdős Probabilistic Lower Bound (1947)"
        proof={
          <>
            <p>
              <strong>Setup:</strong> Color each edge of <InlineMath math="K_n" /> red
              or blue uniformly at random (independently).
            </p>
            <p className="mt-2">
              <strong>Probability calculation:</strong> For any <InlineMath math="s" />-set{' '}
              <InlineMath math="S" />, the probability that all <InlineMath math="\binom{s}{2}" />{' '}
              edges in <InlineMath math="S" /> are the same color is{' '}
              <InlineMath math="2 \cdot 2^{-\binom{s}{2}} = 2^{1 - s(s-1)/2}" />.
            </p>
            <p className="mt-2">
              <strong>Expected count:</strong> Let <InlineMath math="X" /> count
              monochromatic <InlineMath math="K_s" /> subgraphs. By linearity of expectation:
            </p>
            <MathBlock math="\mathbb{E}[X] = \binom{n}{s} \cdot 2^{1-\binom{s}{2}} < \frac{n^s}{s!} \cdot 2^{1 - s(s-1)/2}" />
            <p className="mt-2">
              <strong>When is this less than 1?</strong> If <InlineMath math="n < 2^{s/2}" />,
              then <InlineMath math="n^s < 2^{s^2/2}" /> and:
            </p>
            <MathBlock math="\mathbb{E}[X] < \frac{2^{s^2/2}}{s!} \cdot 2^{1 - s^2/2 + s/2} = \frac{2^{1 + s/2}}{s!} < 1" />
            <p className="mt-2">
              for <InlineMath math="s \geq 3" />. Since <InlineMath math="\mathbb{E}[X] < 1" />,
              some coloring must have <InlineMath math="X = 0" />, meaning no monochromatic{' '}
              <InlineMath math="K_s" />. Thus <InlineMath math="R(s,s) > n \geq 2^{s/2}" />.
            </p>
          </>
        }
      >
        <MathBlock math="R(s, s) > 2^{s/2}" />
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

      <Theorem
        title="Ramsey Numbers for Paths and Cycles"
        proof={
          <>
            <p>
              <strong>Path formula:</strong> For <InlineMath math="R(P_n, P_n)" />:
            </p>
            <p className="mt-2">
              <strong>Upper bound:</strong> In any 2-coloring of{' '}
              <InlineMath math="K_m" /> with <InlineMath math="m = \lfloor 3(n-1)/2 \rfloor + 1" />,
              by a greedy path-finding argument, we can always extend a monochromatic
              path until reaching length <InlineMath math="n" />.
            </p>
            <p className="mt-2">
              <strong>Lower bound:</strong> Take <InlineMath math="K_{m-1}" /> as two
              disjoint cliques of sizes <InlineMath math="\lfloor (n-1)/2 \rfloor" /> and{' '}
              <InlineMath math="\lceil (n-1)/2 \rceil" /> plus another clique of size{' '}
              <InlineMath math="n-2" />. Color appropriately to avoid monochromatic{' '}
              <InlineMath math="P_n" />.
            </p>
            <p className="mt-2">
              <strong>Odd cycle formula:</strong> For odd <InlineMath math="n \geq 3" />:
            </p>
            <p className="mt-2">
              <strong>Lower bound:</strong> Color <InlineMath math="K_{2n-2}" /> as two
              disjoint red <InlineMath math="K_{n-1}" />. Each color class has no{' '}
              <InlineMath math="C_n" /> (needs <InlineMath math="n" /> vertices).
            </p>
            <p className="mt-2">
              <strong>Upper bound:</strong> With <InlineMath math="2n-1" /> vertices,
              either color has minimum degree <InlineMath math="\geq n" />, forcing{' '}
              <InlineMath math="C_n" /> by Dirac-type arguments.
            </p>
          </>
        }
      >
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

      <Theorem
        title="Schur's Theorem"
        proof={
          <>
            <p>
              <strong>Reduction to Ramsey:</strong> Consider a <InlineMath math="k" />-coloring
              of <InlineMath math="[n]" />. Define a <InlineMath math="k" />-coloring of{' '}
              <InlineMath math="K_n" /> on vertex set <InlineMath math="[n]" /> by coloring
              edge <InlineMath math="\{'{'}i,j{'}'}" /> with the color of{' '}
              <InlineMath math="|i - j|" />.
            </p>
            <p className="mt-2">
              <strong>Monochromatic triangle implies Schur triple:</strong> A monochromatic
              triangle on vertices <InlineMath math="a < b < c" /> means{' '}
              <InlineMath math="b - a" />, <InlineMath math="c - b" />, and{' '}
              <InlineMath math="c - a" /> all have the same color.
            </p>
            <p className="mt-2">
              Let <InlineMath math="x = b - a" />, <InlineMath math="y = c - b" />,{' '}
              <InlineMath math="z = c - a" />. Then <InlineMath math="x + y = z" /> and
              all three have the same color.
            </p>
            <p className="mt-2">
              <strong>Existence:</strong> By the <InlineMath math="k" />-color Ramsey
              theorem, <InlineMath math="R_k(3, 3, \ldots, 3)" /> exists, so for{' '}
              <InlineMath math="n \geq R_k(3, \ldots, 3)" />, any <InlineMath math="k" />-coloring
              of <InlineMath math="K_n" /> contains a monochromatic triangle, giving a
              Schur triple in the original coloring.
            </p>
          </>
        }
      >
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
