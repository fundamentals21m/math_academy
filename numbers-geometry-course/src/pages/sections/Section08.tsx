import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section08Questions } from '../../data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-semibold mb-4">Foundations</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The aim of mathematics is to prove things, which is hard, so mathematicians
        continually search for clearer and more powerful methods of proof. In the
        19th and 20th centuries, this search led to a remarkable discovery about
        the foundations of arithmetic itself.
      </p>

      {/* The Discovery */}
      <h3 className="text-xl font-semibold mt-10 mb-4">A Surprising Discovery</h3>

      <Callout type="info">
        <p>
          The new foundations of arithmetic showed why induction is crucial: the
          ring properties (associativity, commutativity, distributivity) can be{' '}
          <em>derived from induction</em>. Thus arithmetic is entirely about the
          implications of the counting process!
        </p>
      </Callout>

      <p className="text-dark-200 my-6">
        This surprising discovery, which had been missed by all mathematicians
        from Euclid to Gauss, is due mainly to <strong>Hermann Grassmann</strong>{' '}
        (1861) and <strong>Richard Dedekind</strong> (1888).
      </p>

      {/* Grassmann's Contribution */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Grassmann: Induction as Definition</h3>

      <p className="text-dark-200 mb-6">
        Grassmann made the breakthrough by noticing that induction can be used not
        only as a method of <em>proof</em>, but as a method of <em>definition</em>.
        To define a function <InlineMath>f</InlineMath> on the natural numbers by
        induction, one writes down:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-emerald-400">
        <h4 className="text-lg font-semibold mb-3 text-emerald-400">Inductive Definition</h4>
        <ol className="space-y-2 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>A value of <InlineMath>f(1)</InlineMath></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              A definition of <InlineMath>f(i+1)</InlineMath> in terms of{' '}
              <InlineMath>f(i)</InlineMath>
            </span>
          </li>
        </ol>
        <p className="text-dark-300 mt-3 text-sm">
          By induction, <InlineMath>f(n)</InlineMath> is then defined for any
          natural number <InlineMath>n</InlineMath>.
        </p>
      </div>

      {/* Defining Addition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Defining Addition Inductively</h3>

      <p className="text-dark-200 mb-6">
        The <strong>successor function</strong> <InlineMath>f(n) = n + 1</InlineMath>{' '}
        comes "for free" with the natural numbers. Grassmann showed that addition
        can be defined inductively from it:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Inductive Definition of +</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-mono">(1)</span>
            <MathBlock>{`m + 1 = m + 1`}</MathBlock>
            <span className="text-dark-400 text-sm">for all m</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-mono">(i+1)</span>
            <MathBlock>{`m + (i + 1) = (m + i) + 1`}</MathBlock>
            <span className="text-dark-400 text-sm">for all m, i</span>
          </div>
        </div>
      </div>

      <p className="text-dark-200 mb-6">
        These equations are not as empty as they look! Equation (1) defines{' '}
        <InlineMath>m + n</InlineMath> for <InlineMath>n = 1</InlineMath> as the
        successor of <InlineMath>m</InlineMath>. Equation (i+1) defines{' '}
        <InlineMath>m + (i+1)</InlineMath> as the successor of{' '}
        <InlineMath>m + i</InlineMath>.
      </p>

      {/* Defining Multiplication */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Defining Multiplication Inductively</h3>

      <p className="text-dark-200 mb-6">
        Once <InlineMath>+</InlineMath> is defined, multiplication can be defined
        inductively:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Inductive Definition of ×</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-mono">(1)</span>
            <MathBlock>{`m \\times 1 = m`}</MathBlock>
            <span className="text-dark-400 text-sm">for all m</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-mono">(i+1)</span>
            <MathBlock>{`m \\times (i + 1) = m \\times i + m`}</MathBlock>
            <span className="text-dark-400 text-sm">for all m, i</span>
          </div>
        </div>
      </div>

      <Callout type="success">
        <p>
          The advantage of defining <InlineMath>+</InlineMath> and{' '}
          <InlineMath>\times</InlineMath> this way is that their properties can
          also be <em>proved</em> by induction. Grassmann found inductive proofs
          of all the ring properties of <InlineMath>\mathbb{'{Z}'}</InlineMath>!
        </p>
      </Callout>

      {/* Dedekind's Contribution */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Dedekind: The Successor Function</h3>

      <p className="text-dark-200 mb-6">
        Richard Dedekind (1888) asked: what are the <em>essential properties</em>{' '}
        of the successor function that allow it to serve as a basis for arithmetic?
        He found the answer in terms of sets:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
        <h4 className="text-lg font-semibold mb-3 text-amber-400">Properties of the Successor Function</h4>
        <ol className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">1.</span>
            <span>It is defined on an <strong>infinite set</strong> (the natural numbers)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">2.</span>
            <span>
              It is <strong>one-to-one</strong> (unequal numbers have unequal successors)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold">3.</span>
            <span>
              It is <strong>not onto</strong> the whole set (1 is not a successor)
            </span>
          </li>
        </ol>
      </div>

      <p className="text-dark-200 mb-6">
        Dedekind realized that <em>any</em> function <InlineMath>f</InlineMath> with
        these properties gives rise to a set that "behaves like" the natural numbers.
        If <InlineMath>a</InlineMath> is not a value of <InlineMath>f</InlineMath>,
        then <InlineMath>a, f(a), f(f(a)), \ldots</InlineMath> behave like{' '}
        <InlineMath>1, 2, 3, \ldots</InlineMath>
      </p>

      {/* Von Neumann's Definition */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Von Neumann: Numbers as Sets</h3>

      <p className="text-dark-200 mb-6">
        John von Neumann (1923) suggested the most elegant way to define the
        natural numbers in set theory: each natural number is the set of its
        predecessors, starting from the empty set representing zero.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">Von Neumann's Definition</h4>
        <div className="font-mono text-dark-200 space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-amber-400 w-12">0 =</span>
            <span>{'{ }'}</span>
            <span className="text-dark-400 text-sm ml-4">(the empty set)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 w-12">1 =</span>
            <span>{'{ 0 }'}</span>
            <span className="text-dark-400 text-sm ml-4">(set whose only member is 0)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 w-12">2 =</span>
            <span>{'{ 0, 1 }'}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 w-12">3 =</span>
            <span>{'{ 0, 1, 2 }'}</span>
          </div>
          <div className="text-dark-400">...</div>
        </div>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="Economy" />
          <p className="text-sm text-dark-300">
            Everything is built out of "nothing"—the empty set. Pure logical
            construction!
          </p>
        </Card>
        <Card>
          <CardHeader title="Elegance" />
          <p className="text-sm text-dark-300">
            The ordering is captured by membership:{' '}
            <InlineMath>m {'<'} n \Leftrightarrow m \in n</InlineMath>
          </p>
        </Card>
      </CardGrid>

      {/* Axiom of Infinity */}
      <h3 className="text-xl font-semibold mt-10 mb-4">The Axiom of Infinity</h3>

      <p className="text-dark-200 mb-6">
        However, it is a deep philosophical question whether infinite sets can
        actually be proved to exist. The existence of infinite sets is taken as
        an axiom—the <strong>axiom of infinity</strong>.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-6 border-l-4 border-purple-400">
        <h4 className="text-lg font-semibold mb-3 text-purple-400">The Axiom of Infinity</h4>
        <p className="text-dark-200">
          There exists a set <InlineMath>\Omega</InlineMath> such that:
        </p>
        <ul className="mt-3 space-y-2 text-dark-300 text-sm">
          <li>• <InlineMath>\Omega</InlineMath> contains the empty set</li>
          <li>
            • If <InlineMath>X \in \Omega</InlineMath>, then the successor{' '}
            <InlineMath>X \cup \{'{X}'}\</InlineMath> is also in{' '}
            <InlineMath>\Omega</InlineMath>
          </li>
        </ul>
      </div>

      {/* Key Takeaways */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Key Takeaways</h3>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Grassmann</strong> showed that addition and multiplication
              can be <em>defined</em> inductively from the successor function.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              All ring properties of <InlineMath>\mathbb{'{Z}'}</InlineMath> can
              be <em>proved</em> from these inductive definitions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Dedekind</strong> identified the essential properties of the
              successor function: one-to-one but not onto an infinite set.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Von Neumann</strong> defined natural numbers as sets:{' '}
              <InlineMath>n = \{'{0, 1, ..., n-1}'}\</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              The existence of infinite sets is an axiom, not a theorem—the
              foundation on which all of arithmetic rests.
            </span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={8} questions={section08Questions} />
    </LessonLayout>
  );
}
