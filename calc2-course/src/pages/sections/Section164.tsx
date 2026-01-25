import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section164() {
  return (
    <LessonLayout sectionId={164}>
      <h2>Random Variables</h2>

      <p>
        A <strong>random variable</strong> is a function that assigns a
        numerical value to each outcome in a sample space. This simple concept
        is the bridge between probability theory and calculus.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>S</InlineMath> be a sample
        space with probability measure <InlineMath>P</InlineMath>. A{' '}
        <strong>one-dimensional random variable</strong> is a real-valued
        function <InlineMath>X</InlineMath> defined on <InlineMath>S</InlineMath>.
        For each outcome <InlineMath>{'\\omega \\in S'}</InlineMath>, the number{' '}
        <InlineMath>{'X(\\omega)'}</InlineMath> is called the <strong>value</strong>{' '}
        of <InlineMath>X</InlineMath> at <InlineMath>{'\\omega'}</InlineMath>.
      </Callout>

      <p>
        For any set <InlineMath>T</InlineMath> of real numbers, we write{' '}
        <InlineMath>{'X \\in T'}</InlineMath> to denote the event:
      </p>
      <MathBlock>
        {`\\{\\omega \\in S : X(\\omega) \\in T\\}`}
      </MathBlock>

      <p>
        The probability of this event is denoted{' '}
        <InlineMath>{'P(X \\in T)'}</InlineMath>.
      </p>

      <h3>Example 1: Sum of Two Dice</h3>

      <p>
        Consider rolling two dice. The sample space is{' '}
        <InlineMath>{'S = \\{(i,j) : 1 \\leq i,j \\leq 6\\}'}</InlineMath>, with
        36 equally likely outcomes.
      </p>

      <p>
        Define the random variable <InlineMath>X</InlineMath> to be the sum of
        the two faces:
      </p>
      <MathBlock>
        {`X(i,j) = i + j`}
      </MathBlock>

      <p>
        The possible values of <InlineMath>X</InlineMath> are{' '}
        <InlineMath>{'2, 3, 4, \\ldots, 12'}</InlineMath>. For example:
      </p>
      <ul>
        <li><InlineMath>{'P(X = 2) = 1/36'}</InlineMath> (only <InlineMath>(1,1)</InlineMath>)</li>
        <li><InlineMath>{'P(X = 7) = 6/36 = 1/6'}</InlineMath> (six ways: <InlineMath>(1,6), (2,5), \\ldots</InlineMath>)</li>
        <li><InlineMath>{'P(X = 12) = 1/36'}</InlineMath> (only <InlineMath>(6,6)</InlineMath>)</li>
      </ul>

      <h3>Example 2: Waiting Time</h3>

      <p>
        A coin with probability <InlineMath>p</InlineMath> of heads is tossed
        repeatedly until the first head appears. The sample space is the set of
        all finite sequences of the form{' '}
        <InlineMath>{'TT\\cdots TH'}</InlineMath>.
      </p>

      <p>
        Let <InlineMath>X</InlineMath> be the random variable that counts the
        number of tosses required. The possible values are{' '}
        <InlineMath>{'1, 2, 3, \\ldots'}</InlineMath>, with:
      </p>
      <MathBlock>
        {`P(X = k) = (1-p)^{k-1} p`}
      </MathBlock>

      <h3>Higher-Dimensional Random Variables</h3>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>two-dimensional random variable</strong>{' '}
        (or <strong>random vector</strong>) is a pair{' '}
        <InlineMath>(X, Y)</InlineMath> of one-dimensional random variables
        defined on the same sample space. For each{' '}
        <InlineMath>{'\\omega \\in S'}</InlineMath>, the value of{' '}
        <InlineMath>(X, Y)</InlineMath> is the ordered pair{' '}
        <InlineMath>{'(X(\\omega), Y(\\omega))'}</InlineMath>.
      </Callout>

      <p>
        More generally, an <strong>n-dimensional random variable</strong> is an
        n-tuple <InlineMath>{'(X_1, X_2, \\ldots, X_n)'}</InlineMath> of
        one-dimensional random variables.
      </p>

      <h3>Functions of Random Variables</h3>

      <p>
        If <InlineMath>X</InlineMath> is a random variable and{' '}
        <InlineMath>{'\\varphi'}</InlineMath> is a real-valued function, then{' '}
        <InlineMath>{'Y = \\varphi(X)'}</InlineMath> is also a random variable,
        defined by:
      </p>
      <MathBlock>
        {`Y(\\omega) = \\varphi(X(\\omega))`}
      </MathBlock>

      <p>
        For example, if <InlineMath>X</InlineMath> represents a length, then{' '}
        <InlineMath>{'X^2'}</InlineMath> represents an area, and{' '}
        <InlineMath>{'e^X'}</InlineMath> represents exponential growth.
      </p>

      <h3>Notation Conventions</h3>

      <p>
        We use standard abbreviations for events involving random variables:
      </p>
      <ul>
        <li><InlineMath>{'X \\leq t'}</InlineMath> means <InlineMath>{'\\{\\omega : X(\\omega) \\leq t\\}'}</InlineMath></li>
        <li><InlineMath>{'a < X \\leq b'}</InlineMath> means <InlineMath>{'\\{\\omega : a < X(\\omega) \\leq b\\}'}</InlineMath></li>
        <li><InlineMath>{'X = t'}</InlineMath> means <InlineMath>{'\\{\\omega : X(\\omega) = t\\}'}</InlineMath></li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> Random variables transform abstract sample
        spaces into numerical domains where calculus applies. Instead of working
        with arbitrary outcomes <InlineMath>{'\\omega'}</InlineMath>, we work
        with real numbers <InlineMath>{'X(\\omega)'}</InlineMath>. This allows us
        to use integrals to compute probabilities and derivatives to find density
        functions.
      </Callout>
    </LessonLayout>
  );
}
