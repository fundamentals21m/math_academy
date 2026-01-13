import { LessonLayout } from '@/components/layout';
import { Theorem } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { SimulatorConstruction } from '@/components/visualizations';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">PSHVZK Proof for Multiplication</h2>

      <p className="mb-4">
        This section provides a rigorous proof that the multiplication protocol from the
        previous section has Perfect Special Honest Verifier Zero Knowledge. We'll also
        examine variants that break PSHVZK to build intuition.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-6 mb-4">Variants That Break PSHVZK</h3>

      <Callout type="warning" title="Variant A: Removing Blinding Factor">
        <p>
          <strong>Variant A:</strong> <InlineMath>s_a</InlineMath> is removed from the protocol,
          i.e., the prover sends <InlineMath>l = l(x) = a</InlineMath>.
        </p>
        <p className="mt-2">
          This is <strong>not PSHVZK</strong> as it's impossible to build a simulator.
          The adversary knows witness <InlineMath>a</InlineMath> and can therefore easily
          notice if <InlineMath>l</InlineMath> obtained from the transcript is not equal to{' '}
          <InlineMath>a</InlineMath>. The simulator doesn't have access to the witness.
          To produce a transcript with an indistinguishable <InlineMath>l</InlineMath>,
          it would have to guess <InlineMath>a</InlineMath> or break the hiding property.
        </p>
      </Callout>

      <Callout type="warning" title="Variant B: Removing Commitment Blinding">
        <p>
          <strong>Variant B:</strong> <InlineMath>s_S</InlineMath> is removed from the protocol,
          i.e., the prover sends <InlineMath>\mu = s_C</InlineMath>.
        </p>
        <p className="mt-2">
          This is <strong>not PSHVZK</strong> for the same reason. The adversary knows
          witness <InlineMath>s_C</InlineMath> and could compare it with{' '}
          <InlineMath>\mu</InlineMath> to distinguish simulated from real transcripts.
        </p>
      </Callout>

      <Callout type="warning" title="Variant C: Removing Polynomial Blinding">
        <p>
          <strong>Variant C:</strong> <InlineMath>\tau_2</InlineMath> is removed from the
          protocol, i.e., the prover sends <InlineMath>T_2 = s_a s_b G_0</InlineMath>.
        </p>
        <p className="mt-2">
          This is <strong>probably not PSHVZK</strong> as it seems impossible to build a
          simulator. The adversary, knowing <InlineMath>a</InlineMath>,{' '}
          <InlineMath>b</InlineMath>, and <InlineMath>x</InlineMath>, can compute{' '}
          <InlineMath>s_a</InlineMath> and <InlineMath>s_b</InlineMath> from polynomials{' '}
          <InlineMath>l(x)</InlineMath> and <InlineMath>r(x)</InlineMath>. The adversary
          could then check whether <InlineMath>s_a s_b G_0</InlineMath> equals{' '}
          <InlineMath>T_2</InlineMath> from the transcript.
        </p>
      </Callout>

      <Theorem
        title="Theorem 1: PSHVZK for Multiplication Protocol"
        proof={
          <div className="space-y-4">
            <p>
              <strong>1.</strong> It suffices to describe a PPT simulator that, on input of the
              statement, outputs a transcript{' '}
              <InlineMath>\pi = (x, l, r, \mu, \tau_x, S, T_1, T_2)</InlineMath> such that
              the probability distribution is equal to that of a real transcript.
            </p>

            <p>
              <strong>2.</strong> Let <InlineMath>\mathcal{'{S}'}</InlineMath> be a simulator
              which draws <InlineMath>x, l, r, \mu, \tau_x, T_2</InlineMath> uniformly at
              random and sets:
            </p>
            <MathBlock>
              {`S := \\frac{1}{x}(lG_0 + rG_1 + \\mu H - C)`}
            </MathBlock>
            <MathBlock>
              {`T_1 := \\frac{1}{x}(lrG_0 + \\tau_x H - V - x^2 T_2)`}
            </MathBlock>
            <p>The simulator runs in polynomial time.</p>

            <p>
              <strong>3.</strong> The distribution of transcript output by the simulator is:
            </p>
            <MathBlock>
              {`\\Pr(\\pi) = \\Pr(x, l, r, \\mu, \\tau_x, S, T_1, T_2)`}
            </MathBlock>
            <MathBlock>
              {`= \\begin{cases} 0 & \\text{if } S \\neq \\frac{1}{x}(lG_0 + rG_1 + \\mu H - C) \\\\ & \\text{or } T_1 \\neq \\frac{1}{x}(lrG_0 + \\tau_x H - V - x^2 T_2) \\\\[0.5em] \\Pr(x)\\Pr(l)\\Pr(r)\\Pr(\\mu)\\Pr(\\tau_x)\\Pr(T_2) & \\text{otherwise} \\end{cases}`}
            </MathBlock>
            <p>where all marginal distributions are uniform.</p>

            <p>
              <strong>4.</strong> The distribution of transcript in a real interaction can be
              rewritten (by substituting hidden random variables) as:
            </p>
            <MathBlock>
              {`\\Pr(\\pi) = \\Pr(x)\\Pr(S|x,l,r,\\mu)\\Pr(T_1|x,l,r,\\tau_x,T_2)\\Pr(l)\\Pr(r)\\Pr(\\mu)\\Pr(\\tau_x)\\Pr(T_2)`}
            </MathBlock>

            <p>
              <strong>5.</strong> We can verify that <InlineMath>S</InlineMath> in a real
              transcript equals:
            </p>
            <MathBlock>
              {`S = \\frac{1}{x}(lG_0 + rG_1 + s_C H - C)`}
            </MathBlock>
            <p>
              which simplifies to <InlineMath>{`\\frac{1}{x}(lG_0 + rG_1 + s_C H - C)`}</InlineMath>{' '}
              because the prover has a valid witness.
            </p>

            <p>
              <strong>6.</strong> Similarly, <InlineMath>T_1</InlineMath> can be shown to equal
              the simulated form. Therefore, both distributions are equal. QED.
            </p>
          </div>
        }
      >
        <p>
          The multiplication protocol for <InlineMath>\mathcal{'{R}'}_{'{mult}'}</InlineMath> has
          perfect special HVZK.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Insight</h3>

      <p className="mb-4">
        The proof works because:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          All values <InlineMath>l, r, \mu, \tau_x, T_2</InlineMath> in the transcript are
          uniformly distributed (thanks to the blinding factors)
        </li>
        <li>
          <InlineMath>S</InlineMath> and <InlineMath>T_1</InlineMath> are fully determined
          by the verification equations
        </li>
        <li>
          The simulator can compute <InlineMath>S</InlineMath> and <InlineMath>T_1</InlineMath>{' '}
          from the verification equations without knowing the witness
        </li>
      </ul>

      <Callout type="info" title="Why Each Blinding Factor Matters">
        <p>
          Each blinding factor (<InlineMath>s_a, s_b, s_S, \tau_1, \tau_2</InlineMath>) serves
          a specific purpose in making its corresponding value uniformly distributed. Removing
          any of them creates a value that depends on the witness, which the simulator cannot
          produce.
        </p>
      </Callout>

      <SimulatorConstruction className="my-8" />
    </LessonLayout>
  );
}
