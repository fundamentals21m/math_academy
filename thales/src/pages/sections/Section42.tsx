import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section42Questions } from '../../data/quizzes';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <h2 className="text-2xl font-semibold mb-4">Cardinal Numbers</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The ideas in this chapter are due to <strong>Georg Cantor</strong> (1845–1918).
        Many mathematicians at first rejected Cantor's work for ideological reasons,
        claiming that there could be no "actual infinity" in mathematics. Cantor found
        it impossible to get a decent job and, in 1884, suffered a mental breakdown
        from which he never fully recovered.
      </p>

      {/* Basic Definition */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Same Cardinality</h3>

      <p className="text-dark-200 mb-4">
        The <strong>cardinal numbers</strong> include the natural numbers{' '}
        <InlineMath>{`0, 1, 2, \\ldots`}</InlineMath>, but go beyond them by including
        various kinds of infinity. Roughly speaking, a cardinal number tells you
        how many elements there are in a given set.
      </p>

      <Callout type="info" title="Same Cardinality">
        <p className="mb-2">
          Two sets are said to have the <strong>same cardinality</strong> if and only
          if there is a <strong>one-to-one correspondence</strong> (bijection) between them:
        </p>
        <MathBlock>{`A \\cong B \\iff \\text{there exists } f : A \\to B \\text{ that is one-to-one and onto}`}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        For example, <InlineMath>{`\\{3, 5, 7\\}`}</InlineMath> has the same cardinality
        as <InlineMath>{`\\{0, 1, 2\\}`}</InlineMath>. Note that{' '}
        <InlineMath>{`\\cong`}</InlineMath> is an <strong>equivalence relation</strong>.
      </p>

      <Card className="mb-6">
        <CardHeader>Notation</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            If <InlineMath>{`n`}</InlineMath> is a positive integer, we say{' '}
            <InlineMath>{`|A| = n`}</InlineMath> if{' '}
            <InlineMath>{`A \\cong \\{0, 1, 2, \\ldots, n-1\\}`}</InlineMath>.
          </p>
          <p>
            The cardinality of the empty set is 0:{' '}
            <InlineMath>{`|\\emptyset| = 0`}</InlineMath>.
          </p>
          <p>
            A set is <strong>finite</strong> if its cardinality is a natural number;
            otherwise it is <strong>infinite</strong>.
          </p>
        </div>
      </Card>

      {/* Countable Sets */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Countably Infinite Sets</h3>

      <Callout type="info" title="Countable Sets">
        <p>
          A set <InlineMath>{`A`}</InlineMath> has cardinality{' '}
          <InlineMath>{`\\aleph_0`}</InlineMath> (read "aleph-null") if{' '}
          <InlineMath>{`A \\cong \\mathbb{N}`}</InlineMath>. Such sets are called{' '}
          <strong>countably infinite</strong> or just <strong>countable</strong>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        For example, <InlineMath>{`f(m) = 2m`}</InlineMath> is a 1-to-1 function from{' '}
        <InlineMath>{`\\mathbb{N}`}</InlineMath> onto the set{' '}
        <InlineMath>{`E`}</InlineMath> of even numbers. Thus{' '}
        <InlineMath>{`|E| = \\aleph_0`}</InlineMath>.
      </p>

      <Callout type="success" title="Galileo's Theorem">
        <p>
          If a set <InlineMath>{`S`}</InlineMath> has cardinality{' '}
          <InlineMath>{`\\aleph_0`}</InlineMath>, then any <strong>infinite subset</strong>{' '}
          of <InlineMath>{`S`}</InlineMath> also has cardinality{' '}
          <InlineMath>{`\\aleph_0`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        Galileo's theorem might lead one to think there is only <em>one</em> infinite
        cardinal. However, one of Cantor's achievements was to show otherwise.
      </p>

      {/* Power Sets */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Power Sets</h3>

      <Callout type="info" title="Power Set">
        <p>
          The <strong>power set</strong> of a set <InlineMath>{`S`}</InlineMath>,
          written <InlineMath>{`P(S)`}</InlineMath>, is the set whose members are
          all the subsets of <InlineMath>{`S`}</InlineMath>.
        </p>
      </Callout>

      <p className="text-dark-200 mb-4 mt-4">
        If a finite set has <InlineMath>{`n`}</InlineMath> elements, its power set
        has <InlineMath>{`2^n`}</InlineMath> elements. (For each element, you have
        two choices: include it or leave it out.)
      </p>

      <Card className="mb-6">
        <CardHeader>Comparing Cardinalities</CardHeader>
        <div className="text-dark-300 space-y-2">
          <p>
            We write <InlineMath>{`|A| < |B|`}</InlineMath> (A has lower cardinality
            than B) if:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><InlineMath>{`A \\not\\cong B`}</InlineMath></li>
            <li>But <InlineMath>{`B`}</InlineMath> has a proper subset{' '}
              <InlineMath>{`C`}</InlineMath> such that{' '}
              <InlineMath>{`A \\cong C`}</InlineMath></li>
          </ul>
        </div>
      </Card>

      {/* Cantor's Theorem */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Cantor's Theorem</h3>

      <Callout type="success" title="Cantor's Theorem">
        <p>
          Any set <InlineMath>{`A`}</InlineMath> has a <strong>lower cardinality</strong>{' '}
          than its power set <InlineMath>{`P(A)`}</InlineMath>:
        </p>
        <MathBlock>{`|A| < |P(A)|`}</MathBlock>
      </Callout>

      <Card className="mb-6 mt-4">
        <CardHeader>Proof (Diagonal Argument)</CardHeader>
        <div className="text-dark-300 space-y-3">
          <p>
            Suppose for contradiction there is a 1-to-1, onto function{' '}
            <InlineMath>{`f : A \\to P(A)`}</InlineMath>.
          </p>
          <p>
            Let <InlineMath>{`S = \\{x \\in A \\mid x \\notin f(x)\\}`}</InlineMath>.
            This is a subset of <InlineMath>{`A`}</InlineMath>, so there is some{' '}
            <InlineMath>{`a \\in A`}</InlineMath> such that{' '}
            <InlineMath>{`S = f(a)`}</InlineMath>.
          </p>
          <p>
            If <InlineMath>{`a \\in S`}</InlineMath>, then by definition of{' '}
            <InlineMath>{`S`}</InlineMath>, <InlineMath>{`a \\notin f(a) = S`}</InlineMath>.
            Contradiction!
          </p>
          <p>
            If <InlineMath>{`a \\notin S`}</InlineMath>, then{' '}
            <InlineMath>{`a \\notin f(a)`}</InlineMath>, so{' '}
            <InlineMath>{`a \\in S`}</InlineMath>. Contradiction!
          </p>
        </div>
      </Card>

      {/* Hierarchy of Infinities */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Infinitely Many Infinities</h3>

      <p className="text-dark-200 mb-4">
        If a set has cardinality <InlineMath>{`k`}</InlineMath>, we use{' '}
        <InlineMath>{`2^k`}</InlineMath> to denote the cardinality of its power set.
        For example, <InlineMath>{`|P(\\mathbb{N})| = 2^{\\aleph_0}`}</InlineMath>.
      </p>

      <Callout type="info" title="An Infinite Hierarchy">
        <p>By Cantor's Theorem:</p>
        <MathBlock>{`\\aleph_0 < 2^{\\aleph_0} < 2^{2^{\\aleph_0}} < 2^{2^{2^{\\aleph_0}}} < \\cdots`}</MathBlock>
        <p className="mt-2">
          In other words, there are <strong>infinitely many infinities</strong>!
        </p>
        <p className="text-sm mt-2">
          (It was statements like these that got Cantor into trouble with Kronecker.)
        </p>
      </Callout>

      {/* Continuum Hypothesis */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Continuum Hypothesis</h3>

      <p className="text-dark-200 mb-4">
        Is there some subset of <InlineMath>{`P(\\mathbb{N})`}</InlineMath> whose
        cardinality is greater than <InlineMath>{`\\aleph_0`}</InlineMath> but
        not as great as <InlineMath>{`2^{\\aleph_0}`}</InlineMath>?
      </p>

      <Callout type="info" title="The Continuum Hypothesis">
        <p>
          The <strong>Continuum Hypothesis</strong> states that there is{' '}
          <em>no</em> set with cardinality strictly between{' '}
          <InlineMath>{`\\aleph_0`}</InlineMath> and{' '}
          <InlineMath>{`2^{\\aleph_0}`}</InlineMath>.
        </p>
      </Callout>

      <CardGrid columns={2}>
        <Card>
          <CardHeader>Gödel (1940)</CardHeader>
          <p className="text-dark-300 text-sm">
            The continuum hypothesis is <strong>consistent</strong> with the
            usual axioms of set theory.
          </p>
        </Card>
        <Card>
          <CardHeader>Cohen (1963)</CardHeader>
          <p className="text-dark-300 text-sm">
            The <strong>negation</strong> of the continuum hypothesis is also
            consistent with the usual axioms.
          </p>
        </Card>
      </CardGrid>

      <p className="text-dark-200 mb-4 mt-4">
        In other words, our basic notions about sets neither imply nor preclude
        the continuum hypothesis. We say that the continuum hypothesis is{' '}
        <strong>independent</strong> of the axioms of set theory.
      </p>

      {/* Summary */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <ul className="text-dark-200 space-y-2">
          <li>• <strong>Georg Cantor</strong> (1845–1918) developed the theory
            of cardinal numbers</li>
          <li>• Two sets have the <strong>same cardinality</strong> if there is
            a bijection between them</li>
          <li>• <InlineMath>{`\\aleph_0`}</InlineMath> is the cardinality of{' '}
            <InlineMath>{`\\mathbb{N}`}</InlineMath> (countably infinite)</li>
          <li>• <strong>Galileo's Theorem</strong>: infinite subsets of countable
            sets are countable</li>
          <li>• <strong>Power set</strong> <InlineMath>{`P(S)`}</InlineMath> =
            set of all subsets of <InlineMath>{`S`}</InlineMath></li>
          <li>• <strong>Cantor's Theorem</strong>:{' '}
            <InlineMath>{`|A| < |P(A)|`}</InlineMath> for any set{' '}
            <InlineMath>{`A`}</InlineMath></li>
          <li>• Infinite hierarchy:{' '}
            <InlineMath>{`\\aleph_0 < 2^{\\aleph_0} < 2^{2^{\\aleph_0}} < \\cdots`}</InlineMath></li>
          <li>• The <strong>Continuum Hypothesis</strong> is independent of
            set theory axioms (Gödel/Cohen)</li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={42} questions={section42Questions} />
    </LessonLayout>
  );
}
