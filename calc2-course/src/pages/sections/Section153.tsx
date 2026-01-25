import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section153() {
  return (
    <LessonLayout sectionId={153}>
      <h2>Probability Terminology</h2>

      <p>
        In probability theory, we use special terminology borrowed from everyday
        language. Understanding these terms precisely is essential for
        translating real-world problems into mathematical statements.
      </p>

      <h3>Experiments and Outcomes</h3>

      <p>
        We imagine that each probability space{' '}
        <InlineMath>{'(S, \\mathscr{B}, P)'}</InlineMath> is associated with a
        real or conceptual <strong>experiment</strong>. The sample space{' '}
        <InlineMath>S</InlineMath> represents all conceivable outcomes. Each
        element of <InlineMath>S</InlineMath> is called an{' '}
        <strong>outcome</strong> or a <strong>sample</strong>.
      </p>

      <h3>Events</h3>

      <Callout type="info">
        <strong>Definition:</strong> The subsets of <InlineMath>S</InlineMath>{' '}
        that belong to the Boolean algebra{' '}
        <InlineMath>{`\\mathscr{B}`}</InlineMath> are called{' '}
        <strong>events</strong>. If an experiment is performed with outcome{' '}
        <InlineMath>x</InlineMath>, and if <InlineMath>{'x \\in A'}</InlineMath>,
        we say that <strong>event <InlineMath>A</InlineMath> has occurred</strong>.
      </Callout>

      <h3>Special Events</h3>

      <ul>
        <li>
          <strong>Impossible event:</strong> The empty set{' '}
          <InlineMath>{`\\varnothing`}</InlineMath>. No outcome can belong to
          it, so it never occurs.
        </li>
        <li>
          <strong>Certain event:</strong> The entire sample space{' '}
          <InlineMath>S</InlineMath>. Every outcome belongs to it, so it always
          occurs.
        </li>
      </ul>

      <h3>Probability of Events</h3>

      <p>
        The impossible event <InlineMath>{`\\varnothing`}</InlineMath> must have
        probability zero. The certain event <InlineMath>S</InlineMath> must have
        probability 1. However:
      </p>

      <Callout type="warning">
        <strong>Important:</strong> An event with probability zero is not
        necessarily impossible. Some nonempty subsets may be assigned
        probability zero. Similarly, an event with probability 1 is not
        necessarily certain—some proper subsets of <InlineMath>S</InlineMath>{' '}
        may have probability 1.
      </Callout>

      <h3>Comparing Events</h3>

      <p>
        Two events <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are
        said to be:
      </p>
      <ul>
        <li>
          <strong>Equally likely</strong> if{' '}
          <InlineMath>{'P(A) = P(B)'}</InlineMath>
        </li>
        <li>
          <strong>More likely</strong> (<InlineMath>A</InlineMath> than{' '}
          <InlineMath>B</InlineMath>) if{' '}
          <InlineMath>{'P(A) > P(B)'}</InlineMath>
        </li>
        <li>
          <strong>At least as likely</strong> if{' '}
          <InlineMath>{'P(A) \\geq P(B)'}</InlineMath>
        </li>
      </ul>

      <h3>Glossary of Probability Terms</h3>

      <p>
        The following table translates common phrases into set-theoretic
        statements, where <InlineMath>x</InlineMath> represents an outcome:
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem', textAlign: 'left' }}>Statement</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem', textAlign: 'left' }}>Set-theoretic meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '0.5rem' }}>At least one of <InlineMath>A</InlineMath> or <InlineMath>B</InlineMath> occurs</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{'x \\in A \\cup B'}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}>Both <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> occur</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{'x \\in A \\cap B'}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}>Neither <InlineMath>A</InlineMath> nor <InlineMath>B</InlineMath> occurs</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{`x \\in A' \\cap B'`}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}><InlineMath>A</InlineMath> occurs and <InlineMath>B</InlineMath> does not</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{`x \\in A \\cap B'`}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}>Exactly one of <InlineMath>A</InlineMath> or <InlineMath>B</InlineMath> occurs</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{`x \\in (A \\cap B') \\cup (A' \\cap B)`}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}>If <InlineMath>A</InlineMath> occurs, so does <InlineMath>B</InlineMath></td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{'A \\subseteq B'}</InlineMath></td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem' }}><InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are mutually exclusive</td>
            <td style={{ padding: '0.5rem' }}><InlineMath>{`A \\cap B = \\varnothing`}</InlineMath></td>
          </tr>
        </tbody>
      </table>

      <Callout type="success">
        <strong>Key Insight:</strong> The power of probability theory comes from
        translating everyday language about chance into precise mathematical
        statements about sets. Once we make this translation, we can apply the
        full machinery of set theory and measure theory to solve probability
        problems.
      </Callout>
    </LessonLayout>
  );
}
