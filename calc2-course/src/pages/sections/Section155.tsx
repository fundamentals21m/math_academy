import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section155() {
  return (
    <LessonLayout sectionId={155}>
      <h2>Combinatorial Analysis</h2>

      <p>
        Many problems in probability theory reduce to counting the number of
        elements in a finite set. Systematic methods for such problems form part
        of <strong>combinatorial analysis</strong>.
      </p>

      <h3>The Principle of Sequential Counting</h3>

      <Callout type="info">
        <strong>Principle:</strong> If there are <InlineMath>{'k_1'}</InlineMath>{' '}
        possible choices for the first component, <InlineMath>{'k_2'}</InlineMath>{' '}
        choices for the second (once the first is known), and so on, then the
        total number of <InlineMath>n</InlineMath>-tuples that can be formed is:
        <MathBlock>
          {'k_1 \\cdot k_2 \\cdots k_n'}
        </MathBlock>
      </Callout>

      <h3>Cartesian Products</h3>

      <p>
        The <strong>Cartesian product</strong> of sets{' '}
        <InlineMath>{'A_1, \\ldots, A_n'}</InlineMath> is:
      </p>
      <MathBlock>
        {'A_1 \\times \\cdots \\times A_n = \\{(a_1, \\ldots, a_n) \\mid a_1 \\in A_1, \\ldots, a_n \\in A_n\\}'}
      </MathBlock>

      <p>
        If <InlineMath>{'A_k'}</InlineMath> has <InlineMath>{'k_r'}</InlineMath>{' '}
        elements, then the Cartesian product has{' '}
        <InlineMath>{'k_1 \\cdot k_2 \\cdots k_n'}</InlineMath> elements.
      </p>

      <h3>Sampling with Replacement</h3>

      <Callout type="info">
        <strong>Problem:</strong> Given a set <InlineMath>S</InlineMath> of{' '}
        <InlineMath>n</InlineMath> elements, how many ordered{' '}
        <InlineMath>k</InlineMath>-tuples can be formed if each component may be
        any element of <InlineMath>S</InlineMath>?
        <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
          <strong>Answer:</strong> <InlineMath>{'n^k'}</InlineMath>
        </p>
      </Callout>

      <p>
        Think of this as drawing from an urn with replacement—each draw can
        yield any of the <InlineMath>n</InlineMath> elements.
      </p>

      <h3>Sampling without Replacement (Permutations)</h3>

      <Callout type="info">
        <strong>Problem:</strong> Given a set <InlineMath>S</InlineMath> of{' '}
        <InlineMath>n</InlineMath> elements, how many ordered{' '}
        <InlineMath>k</InlineMath>-tuples can be formed if no element may be
        used twice?
        <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
          <strong>Answer:</strong>{' '}
          <InlineMath>{'n(n-1)(n-2)\\cdots(n-k+1) = \\frac{n!}{(n-k)!}'}</InlineMath>
        </p>
      </Callout>

      <p>
        For the first component, there are <InlineMath>n</InlineMath> choices.
        For the second, <InlineMath>n-1</InlineMath> remain, and so on.
      </p>

      <p>
        In particular, when <InlineMath>k = n</InlineMath>, this gives{' '}
        <InlineMath>n!</InlineMath> permutations of an <InlineMath>n</InlineMath>
        -element set.
      </p>

      <h3>Combinations (Binomial Coefficients)</h3>

      <Callout type="info">
        <strong>Problem:</strong> How many distinct subsets of{' '}
        <InlineMath>k</InlineMath> elements can be formed from a set of{' '}
        <InlineMath>n</InlineMath> elements?
        <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
          <strong>Answer:</strong>{' '}
          <InlineMath>{'\\binom{n}{k} = \\frac{n!}{k!(n-k)!}'}</InlineMath>
        </p>
      </Callout>

      <p>
        <strong>Derivation:</strong> When we form{' '}
        <InlineMath>k</InlineMath>-tuples without replacement, we get{' '}
        <InlineMath>{'n!/(n-k)!'}</InlineMath> arrangements. But this counts
        each <InlineMath>k</InlineMath>-element subset exactly{' '}
        <InlineMath>k!</InlineMath> times (once for each ordering). Therefore:
      </p>
      <MathBlock>
        {'\\binom{n}{k} = \\frac{n!/(n-k)!}{k!} = \\frac{n!}{k!(n-k)!}'}
      </MathBlock>

      <h3>Example: Bridge Hands</h3>

      <p>
        The number of distinct bridge hands (13 cards from 52) is:
      </p>
      <MathBlock>
        {'\\binom{52}{13} = \\frac{52!}{13! \\cdot 39!} = 635,013,559,600'}
      </MathBlock>

      <h3>Total Number of Subsets</h3>

      <p>
        The total number of subsets of an <InlineMath>n</InlineMath>-element set
        is:
      </p>
      <MathBlock>
        {'\\sum_{k=0}^{n} \\binom{n}{k} = 2^n'}
      </MathBlock>

      <p>
        This follows from the binomial theorem with{' '}
        <InlineMath>{'(1+1)^n'}</InlineMath>.
      </p>

      <h3>Summary Table</h3>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem', textAlign: 'left' }}>Type</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem', textAlign: 'left' }}>Order Matters?</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem', textAlign: 'left' }}>Repetition?</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem', textAlign: 'left' }}>Formula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '0.5rem' }}>With replacement</td>
            <td style={{ padding: '0.5rem' }}>Yes</td>
            <td style={{ padding: '0.5rem' }}>Yes</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{'n^k'}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}>Permutations</td>
            <td style={{ padding: '0.5rem' }}>Yes</td>
            <td style={{ padding: '0.5rem' }}>No</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{'\\frac{n!}{(n-k)!}'}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}>Combinations</td>
            <td style={{ padding: '0.5rem' }}>No</td>
            <td style={{ padding: '0.5rem' }}>No</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{'\\binom{n}{k}'}</InlineMath></td>
          </tr>
        </tbody>
      </table>

      <Callout type="success">
        <strong>Key Insight:</strong> The principle of sequential counting and
        binomial coefficients are the fundamental tools for solving counting
        problems in probability. When outcomes are equally likely, probability
        reduces to counting: favorable outcomes divided by total outcomes.
      </Callout>
    </LessonLayout>
  );
}
