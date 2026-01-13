import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { MultiplicationProtocolAnimator } from '@/components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Prove Multiplication in ZK</h2>

      <p className="mb-4">
        This section demonstrates a non-trivial proof of Zero-Knowledge that aims to be more
        rigorous than the proofs commonly encountered in academic literature. The toy protocol
        we explore is a heavily simplified variant of Bulletproofs range proofs.
      </p>

      <Callout type="info" title="Motivation">
        <p>
          The motivation is the belief that following a detailed proof enhances understanding
          of Zero-Knowledge and helps build intuition. In short, this protocol proves that
          a committed value is the product of two other committed values.
        </p>
      </Callout>

      <Definition title="The Multiplication Relation">
        <p>
          The relation <InlineMath>\mathcal{'{R}'}_{'{mult}'}</InlineMath> describes two commitments:{' '}
          <InlineMath>C</InlineMath> commits to values <InlineMath>a</InlineMath> and{' '}
          <InlineMath>b</InlineMath>, and <InlineMath>V</InlineMath> commits to their product:
        </p>
        <MathBlock>
          {`\\mathcal{R}_{\\text{mult}} = \\left\\{\\begin{array}{l} ((G_0, G_1, H \\in \\mathbb{G}), (V, C \\in \\mathbb{G})), (a, b, s_C, s_V \\in \\mathbb{Z}_p)) \\\\[0.5em] \\mid V = ab \\cdot G_0 + s_V H, \\quad C = a G_0 + b G_1 + s_C H \\end{array}\\right\\}`}
        </MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Protocol</h3>

      <p className="mb-4">
        The following protocol is a zero-knowledge argument of knowledge for{' '}
        <InlineMath>\mathcal{'{R}'}_{'{mult}'}</InlineMath>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 space-y-6">
        <div>
          <p className="text-indigo-400 font-bold mb-2">Step 1: Prover Commitment</p>
          <p className="mb-2">
            Prover draws <InlineMath>s_a, s_b, s_S, \tau_1, \tau_2</InlineMath> and sends:
          </p>
          <MathBlock>
            {`S = s_a G_0 + s_b G_1 + s_S H`}
          </MathBlock>
          <MathBlock>
            {`T_1 = (a s_b + b s_a) G_0 + \\tau_1 H`}
          </MathBlock>
          <MathBlock>
            {`T_2 = s_a s_b G_0 + \\tau_2 H`}
          </MathBlock>
        </div>

        <div>
          <p className="text-indigo-400 font-bold mb-2">Step 2: Verifier Challenge</p>
          <p>
            Verifier sends random challenge <InlineMath>x</InlineMath>
          </p>
        </div>

        <div>
          <p className="text-indigo-400 font-bold mb-2">Step 3: Prover Response</p>
          <p className="mb-2">Prover sends:</p>
          <MathBlock>
            {`l = l(x) = a + s_a x`}
          </MathBlock>
          <MathBlock>
            {`r = r(x) = b + s_b x`}
          </MathBlock>
          <MathBlock>
            {`\\mu = s_C + x s_S`}
          </MathBlock>
          <MathBlock>
            {`\\tau_x = s_V + x\\tau_1 + x^2 \\tau_2`}
          </MathBlock>
        </div>

        <div>
          <p className="text-indigo-400 font-bold mb-2">Step 4: Verifier Checks</p>
          <p className="mb-2">Verifier checks:</p>
          <MathBlock>
            {`C + xS = lG_0 + rG_1 + \\mu H`}
          </MathBlock>
          <MathBlock>
            {`V + xT_1 + x^2 T_2 = lr G_0 + \\tau_x H`}
          </MathBlock>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Completeness</h3>

      <p className="mb-4">
        We verify that an honest prover with a valid witness passes the verification.
      </p>

      <Example title="First Verification Equation">
        <MathBlock>
          {`C + xS = aG_0 + bG_1 + s_C H + x(s_a G_0 + s_b G_1 + s_S H)`}
        </MathBlock>
        <MathBlock>
          {`= (a + xs_a)G_0 + (b + xs_b)G_1 + (s_C + xs_S)H`}
        </MathBlock>
        <MathBlock>
          {`= lG_0 + rG_1 + \\mu H \\quad \\checkmark`}
        </MathBlock>
      </Example>

      <Example title="Second Verification Equation">
        <MathBlock>
          {`V + xT_1 + x^2 T_2 = abG_0 + s_V H + x(as_b + bs_a)G_0 + x\\tau_1 H + x^2 s_a s_b G_0 + x^2 \\tau_2 H`}
        </MathBlock>
        <MathBlock>
          {`= (ab + x(as_b + bs_a) + x^2 s_a s_b)G_0 + (s_V + x\\tau_1 + x^2 \\tau_2)H`}
        </MathBlock>
        <MathBlock>
          {`= lrG_0 + \\tau_x H \\quad \\checkmark`}
        </MathBlock>
      </Example>

      <Callout type="success" title="Key Observation">
        <p>
          Notice how the polynomial structure emerges: <InlineMath>lr = (a + s_a x)(b + s_b x)</InlineMath>{' '}
          expands to exactly match the left side when combined with the{' '}
          <InlineMath>T_1</InlineMath> and <InlineMath>T_2</InlineMath> terms.
        </p>
      </Callout>

      <MultiplicationProtocolAnimator className="my-8" />
    </LessonLayout>
  );
}
