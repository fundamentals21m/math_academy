import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <p>
        To prove a statement, one often starts by assuming the hypothesis and
        working one's way toward a conclusion; this is the <strong>direct
        approach</strong> to proving a statement. However, there are many ways
        to structure a proof, and understanding these different approaches is
        essential for mathematical reasoning.
      </p>

      <h2>The Direct Approach</h2>

      <p>
        A direct proof might look something like the following:
      </p>

      <Theorem id="A.3.1" title="Template: Direct proof structure">
        <p>
          <strong>Proposition:</strong> <Math>A</Math> implies <Math>B</Math>.
        </p>
        <div className="proof">
          <p>
            Assume <Math>A</Math> is true. Since <Math>A</Math> is true,{' '}
            <Math>C</Math> is true. Since <Math>C</Math> is true, <Math>D</Math>{' '}
            is true. Since <Math>D</Math> is true, <Math>B</Math> is true, as
            desired.
          </p>
        </div>
      </Theorem>

      <Example id="A.3.2" title="A direct proof">
        <p>
          <strong>Proposition:</strong> If <Math>{String.raw`x = \pi`}</Math>,
          then <Math>{String.raw`\sin(x/2) + 1 = 2`}</Math>.
        </p>
        <div className="proof mt-2">
          <p>
            Let <Math>{String.raw`x = \pi`}</Math>. Since{' '}
            <Math>{String.raw`x = \pi`}</Math>, we have{' '}
            <Math>{String.raw`x/2 = \pi/2`}</Math>. Since{' '}
            <Math>{String.raw`x/2 = \pi/2`}</Math>, we have{' '}
            <Math>{String.raw`\sin(x/2) = 1`}</Math>. Since{' '}
            <Math>{String.raw`\sin(x/2) = 1`}</Math>, we have{' '}
            <Math>{String.raw`\sin(x/2) + 1 = 2`}</Math>.
          </p>
        </div>
      </Example>

      <h2>Working Backwards</h2>

      <p>
        It is also possible to work <em>backwards</em> from the conclusion,
        asking what it would take to imply it:
      </p>

      <Theorem id="A.3.3" title="Template: Working backwards">
        <p>
          <strong>Proposition:</strong> <Math>A</Math> implies <Math>B</Math>.
        </p>
        <div className="proof">
          <p>
            To show <Math>B</Math>, it would suffice to show <Math>D</Math>.
            Since <Math>C</Math> implies <Math>D</Math>, we just need to show{' '}
            <Math>C</Math>. But <Math>C</Math> follows from <Math>A</Math>.
          </p>
        </div>
      </Theorem>

      <Example id="A.3.4" title="A proof working backwards">
        <p>
          <strong>Proposition:</strong> If <Math>{String.raw`x = \pi`}</Math>,
          then <Math>{String.raw`\sin(x/2) + 1 = 2`}</Math>.
        </p>
        <div className="proof mt-2">
          <p>
            To show <Math>{String.raw`\sin(x/2) + 1 = 2`}</Math>, it would
            suffice to show that <Math>{String.raw`\sin(x/2) = 1`}</Math>. Since{' '}
            <Math>{String.raw`x/2 = \pi/2`}</Math> would imply{' '}
            <Math>{String.raw`\sin(x/2) = 1`}</Math>, we just need to show that{' '}
            <Math>{String.raw`x/2 = \pi/2`}</Math>. But this follows since{' '}
            <Math>{String.raw`x = \pi`}</Math>.
          </p>
        </div>
      </Example>

      <Callout type="note">
        <p>
          Logically speaking, the direct proof and the backwards proof above are
          <em> the same</em>, just arranged differently. Note how this proof style
          is different from the (incorrect) approach of starting with the
          conclusion and seeing what it would <em>imply</em>; instead, we start
          with the conclusion and see what would <em>imply it</em>.
        </p>
      </Callout>

      <Example id="A.3.5" title="A more complex backwards proof">
        <p>
          <strong>Proposition:</strong> Let <Math>{String.raw`0 < r < 1`}</Math>{' '}
          be a real number. Then the series{' '}
          <Math>{String.raw`\sum_{n=1}^{\infty} nr^n`}</Math> is convergent.
        </p>
        <div className="proof mt-2">
          <p>
            To show this series is convergent, it suffices by the ratio test to
            show that the ratio
          </p>
          <MathBlock>{String.raw`\left|\frac{r^{n+1}(n+1)}{r^n n}\right| = r \cdot \frac{n+1}{n}`}</MathBlock>
          <p className="mt-2">
            converges to something less than 1 as{' '}
            <Math>{String.raw`n \to \infty`}</Math>. Since <Math>r</Math> is
            already less than 1, it will be enough to show that{' '}
            <Math>{String.raw`\frac{n+1}{n}`}</Math> converges to 1.
          </p>
          <p className="mt-2">
            But since <Math>{String.raw`\frac{n+1}{n} = 1 + \frac{1}{n}`}</Math>,
            it suffices to show that{' '}
            <Math>{String.raw`\frac{1}{n} \to 0`}</Math>. But this is clear since{' '}
            <Math>{String.raw`n \to \infty`}</Math>.
          </p>
        </div>
      </Example>

      <h2>Combining Approaches</h2>

      <p>
        One can also combine both approaches—moving forwards from the hypothesis
        and backwards from the conclusion:
      </p>

      <Theorem id="A.3.6" title="Template: Combined approach">
        <p>
          <strong>Proposition:</strong> <Math>A</Math> implies <Math>B</Math>.
        </p>
        <div className="proof">
          <p>
            To show <Math>B</Math>, it would suffice to show <Math>D</Math>. So
            now let us show <Math>D</Math>. Since we have <Math>A</Math> by
            hypothesis, we have <Math>C</Math>. Since <Math>C</Math> implies{' '}
            <Math>D</Math>, we thus have <Math>D</Math> as desired.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          There are many ways to write the same proof; how you do so is up to you,
          but certain ways of writing proofs are more readable and natural than
          others. When you are just starting out, you're generally happy to get{' '}
          <em>some</em> proof of a result; but the point is that a proof can take
          many different forms.
        </p>
      </Callout>

      <h2>Proofs with Multiple Parts</h2>

      <p>
        When there are multiple hypotheses and conclusions, and the proof splits
        into cases, proofs can get more complicated:
      </p>

      <Theorem id="A.3.7" title="Template: Proof with multiple parts and cases">
        <p>
          <strong>Proposition:</strong> Suppose that <Math>A</Math> and{' '}
          <Math>B</Math> are true. Then <Math>C</Math> and <Math>D</Math> are true.
        </p>
        <div className="proof">
          <p>
            Since <Math>A</Math> is true, <Math>E</Math> is true. From{' '}
            <Math>E</Math> and <Math>B</Math> we know that <Math>F</Math> is true.
            Also, in light of <Math>A</Math>, to show <Math>D</Math> it suffices to
            show <Math>G</Math>.
          </p>
          <p className="mt-2">
            There are now two cases: <Math>H</Math> and <Math>I</Math>.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              If <Math>H</Math> is true, then from <Math>F</Math> and{' '}
              <Math>H</Math> we obtain <Math>C</Math>, and from <Math>A</Math> and{' '}
              <Math>H</Math> we obtain <Math>G</Math>.
            </li>
            <li>
              If instead <Math>I</Math> is true, then from <Math>I</Math> we have{' '}
              <Math>G</Math>, and from <Math>I</Math> and <Math>G</Math> we obtain{' '}
              <Math>C</Math>.
            </li>
          </ul>
          <p className="mt-2">
            Thus in both cases we obtain both <Math>C</Math> and <Math>G</Math>,
            and hence <Math>C</Math> and <Math>D</Math>.
          </p>
        </div>
      </Theorem>

      <h2>Proof by Contradiction Structure</h2>

      <Theorem id="A.3.8" title="Template: Proof by contradiction">
        <p>
          <strong>Proposition:</strong> Suppose that <Math>A</Math> is true. Then{' '}
          <Math>B</Math> is false.
        </p>
        <div className="proof">
          <p>
            Suppose for sake of contradiction that <Math>B</Math> is true. This
            would imply that <Math>C</Math> is true. But since <Math>A</Math> is
            true, this implies that <Math>D</Math> is true; which contradicts{' '}
            <Math>C</Math>. Thus <Math>B</Math> must be false.
          </p>
        </div>
      </Theorem>

      <h2>Strategies for Proving Implications</h2>

      <Callout type="info">
        <p>
          <strong>Several approaches to try when attempting a proof:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Work forward</strong> from the hypothesis
          </li>
          <li>
            <strong>Work backward</strong> from the conclusion (asking what would
            imply it)
          </li>
          <li>
            <strong>Divide into cases</strong> to split the problem into easier
            sub-problems
          </li>
          <li>
            <strong>Argue by contradiction</strong>
          </li>
        </ul>
        <p className="mt-2">
          With experience, it will become clearer which approaches are likely to
          work easily, which ones will probably work but require effort, and which
          ones are probably going to fail.
        </p>
      </Callout>

      <h2>Keeping Track of Known vs. Desired</h2>

      <Callout type="warning">
        <p>
          <strong>Critical advice:</strong> When doing a proof, keep track of which
          statements are <strong>known</strong> (either as hypotheses, or deduced
          from hypotheses, or coming from other theorems) and which statements are{' '}
          <strong>desired</strong> (either the conclusion, or something which would
          imply the conclusion, or some intermediate claim).
        </p>
        <p className="mt-2">
          Mixing the two up is almost always a bad idea, and can lead to getting
          hopelessly lost in a proof.
        </p>
      </Callout>

      <Example id="A.3.9" title="Keeping track of known and desired">
        <p>
          In a proof, you might have:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Known:</strong> <Math>{String.raw`x > 0`}</Math> (hypothesis),{' '}
            <Math>{String.raw`x^2 > 0`}</Math> (deduced)
          </li>
          <li>
            <strong>Desired:</strong> <Math>{String.raw`x + 1 > 0`}</Math>{' '}
            (conclusion)
          </li>
        </ul>
        <p className="mt-2">
          You should never accidentally use the desired statement{' '}
          <Math>{String.raw`x + 1 > 0`}</Math> as if it were known—that would be
          circular reasoning!
        </p>
      </Example>

      <h2>Summary</h2>

      <Callout type="info">
        <p>
          <strong>Key principles for structuring proofs:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Direct proofs:</strong> Start from hypotheses, work toward
            conclusion
          </li>
          <li>
            <strong>Working backwards:</strong> Ask "what would suffice to show
            this?"
          </li>
          <li>
            <strong>Combining approaches:</strong> Work from both ends and meet in
            the middle
          </li>
          <li>
            <strong>Case analysis:</strong> Split into exhaustive cases, prove each
            separately
          </li>
          <li>
            <strong>Contradiction:</strong> Assume the opposite, derive a
            contradiction
          </li>
          <li>
            <strong>Always distinguish</strong> what you <em>know</em> from what
            you <em>want to show</em>
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
