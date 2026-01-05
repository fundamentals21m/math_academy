import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section57Questions } from '../../data/quizzes';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      <h2 className="text-2xl font-semibold mb-4">Intuitionistic Type Theory</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        This chapter presents a modern formulation of <strong>intuitionistic type theory</strong>,
        a formal system adequate for elementary mathematics—including arithmetic and analysis—when
        treated constructively. This approach, developed by Lambek and Scott in 1986, provides a
        rigorous foundation for constructive mathematics.
      </p>

      <Callout type="info" title="Constructive Mathematics">
        <p>
          As far as we know, the only proofs in arithmetic and analysis which are essentially
          nonconstructive depend on the <strong>axiom of choice</strong>. One formulation of this
          axiom asserts that, for any nonempty collection of nonempty sets, there exists a set
          containing exactly one element from each of the given sets.
        </p>
      </Callout>

      {/* Basic Types */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Basic Types</h3>

        <p className="text-dark-200 mb-4">
          Intuitionistic type theory begins with three <strong>basic types</strong>, from which
          all other types are constructed:
        </p>

        <CardGrid columns={3}>
          <Card>
            <CardHeader
              icon={<span className="text-2xl">1</span>}
              title="Unit Type"
            />
            <p className="text-dark-300 text-sm">
              The type of a single specified entity (introduced for convenience).
            </p>
          </Card>

          <Card>
            <CardHeader
              icon={<InlineMath math="\\Omega" />}
              title="Truth Values"
            />
            <p className="text-dark-300 text-sm">
              The type of truth values or propositions. Intuitionistically, there are more than
              two truth values!
            </p>
          </Card>

          <Card>
            <CardHeader
              icon={<InlineMath math="N" />}
              title="Natural Numbers"
            />
            <p className="text-dark-300 text-sm">
              The type of natural numbers: 0, 1, 2, 3, ...
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Type Constructors */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Type Constructors</h3>

        <p className="text-dark-200 mb-4">
          From the basic types, we build new types using two processes:
        </p>

        <CardGrid columns={2}>
          <Card variant="info">
            <CardHeader
              icon={<InlineMath math="PA" />}
              title="Power Type"
            />
            <p className="text-dark-300 mb-2">
              If <InlineMath math="A" /> is a type, so is <InlineMath math="PA" />.
            </p>
            <p className="text-dark-300 text-sm">
              <InlineMath math="PA" /> is the type of <strong>sets of entities</strong> of
              type <InlineMath math="A" />.
            </p>
          </Card>

          <Card variant="info">
            <CardHeader
              icon={<InlineMath math="A \\times B" />}
              title="Product Type"
            />
            <p className="text-dark-300 mb-2">
              If <InlineMath math="A" /> and <InlineMath math="B" /> are types,
              so is <InlineMath math="A \\times B" />.
            </p>
            <p className="text-dark-300 text-sm">
              <InlineMath math="A \\times B" /> is the type of <strong>pairs</strong> of entities
              of types <InlineMath math="A" /> and <InlineMath math="B" />, respectively.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Term Construction */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Term Construction</h3>

        <p className="text-dark-200 mb-4">
          We allow arbitrarily many variables of each type, writing <InlineMath math="x \\in A" /> to
          mean that <InlineMath math="x" /> is a variable of type <InlineMath math="A" />. Terms of
          different types are constructed inductively:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left py-3 px-4 text-dark-100 font-semibold">Type</th>
                <th className="text-left py-3 px-4 text-dark-100 font-semibold">Terms</th>
                <th className="text-left py-3 px-4 text-dark-100 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-700">
                <td className="py-3 px-4"><InlineMath math="1" /></td>
                <td className="py-3 px-4"><InlineMath math="*" /></td>
                <td className="py-3 px-4 text-dark-300">The unique element of the unit type</td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="py-3 px-4"><InlineMath math="\\Omega" /></td>
                <td className="py-3 px-4"><InlineMath math="a = a'" /></td>
                <td className="py-3 px-4 text-dark-300">
                  Equality (where <InlineMath math="a, a'" /> are terms of type <InlineMath math="A" />)
                </td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="py-3 px-4"><InlineMath math="N" /></td>
                <td className="py-3 px-4"><InlineMath math="0,\\; Sn" /></td>
                <td className="py-3 px-4 text-dark-300">
                  Zero and successor (where <InlineMath math="n" /> is of type <InlineMath math="N" />)
                </td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="py-3 px-4"><InlineMath math="PA" /></td>
                <td className="py-3 px-4"><InlineMath math="\\{x \\in A \\mid \\phi(x)\\}" /></td>
                <td className="py-3 px-4 text-dark-300">
                  Set comprehension (where <InlineMath math="\\phi(x)" /> is of type <InlineMath math="\\Omega" />)
                </td>
              </tr>
              <tr className="border-b border-dark-700">
                <td className="py-3 px-4"><InlineMath math="A \\times B" /></td>
                <td className="py-3 px-4"><InlineMath math="\\langle a, b \\rangle" /></td>
                <td className="py-3 px-4 text-dark-300">
                  Ordered pairs (where <InlineMath math="a" /> is of type <InlineMath math="A" />,{' '}
                  <InlineMath math="b" /> of type <InlineMath math="B" />)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Logical Symbols */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Logical Symbols Defined</h3>

        <p className="text-dark-200 mb-4">
          The logical symbols are defined in terms of the basic type constructors. Let{' '}
          <InlineMath math="p, q" /> and <InlineMath math="\\phi(x)" /> be terms of
          type <InlineMath math="\\Omega" />.
        </p>

        <Card variant="warning">
          <CardHeader
            icon={<span className="text-2xl">+</span>}
            title="Positive Connectives"
          />
          <div className="space-y-2 font-mono text-sm">
            <p><InlineMath math="\\top \\;\\equiv\\; * = *" /> (truth: the unit is self-equal)</p>
            <p><InlineMath math="p \\land q \\;\\equiv\\; \\langle p, q \\rangle = \\langle \\top, \\top \\rangle" /> (conjunction)</p>
            <p><InlineMath math="p \\Rightarrow q \\;\\equiv\\; p \\land q = p" /> (implication)</p>
            <p><InlineMath math="\\forall_{x \\in A} \\phi(x) \\;\\equiv\\; \\{x \\in A \\mid \\phi(x)\\} = \\{x \\in A \\mid \\top\\}" /> (universal quantification)</p>
          </div>
        </Card>

        <Callout type="warning" title="Avoiding De Morgan's Rules">
          <p>
            From these symbols one may define others, but we must take care <strong>not</strong> to
            make implicit use of De Morgan's rules, which are not valid intuitionistically.
          </p>
        </Callout>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">-</span>}
            title="Negative Connectives"
          />
          <div className="space-y-2 font-mono text-sm">
            <p><InlineMath math="\\bot \\;\\equiv\\; \\forall_{t \\in \\Omega} t" /> (falsity: everything is true = contradiction)</p>
            <p><InlineMath math="\\neg p \\;\\equiv\\; \\forall_{t \\in \\Omega}(p \\Rightarrow t)" /> (negation)</p>
            <p><InlineMath math="p \\lor q \\;\\equiv\\; \\forall_{t \\in \\Omega}(((p \\Rightarrow t) \\land (q \\Rightarrow t)) \\Rightarrow t)" /> (disjunction)</p>
            <p><InlineMath math="\\exists_{x \\in A} \\phi(x) \\;\\equiv\\; \\forall_{t \\in \\Omega}((\\forall_{x \\in A}(\\phi(x) \\Rightarrow t)) \\Rightarrow t)" /> (existential quantification)</p>
          </div>
        </Card>
      </section>

      {/* Axioms and Rules */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Axioms and Rules of Inference</h3>

        <p className="text-dark-200 mb-4">
          Axioms and rules of inference are stated in terms of a deduction symbol{' '}
          <InlineMath math="\\vdash_X" />, where <InlineMath math="X" /> is a finite set of variables.
          Permissible deductions take the form:
        </p>

        <MathBlock math="p_1, \\ldots, p_n \\vdash_X p_{n+1}" />

        <p className="text-dark-200 mb-4">
          where the <InlineMath math="p_i" /> are terms of type <InlineMath math="\\Omega" /> and{' '}
          <InlineMath math="X" /> contains all variables occurring freely in the{' '}
          <InlineMath math="p_i" />. When <InlineMath math="X" /> is empty, the subscript may be omitted.
        </p>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">R</span>}
            title="Sample Rules of Inference"
          />
          <div className="space-y-4">
            <div>
              <p className="text-dark-200 mb-1"><strong>Identity:</strong></p>
              <MathBlock math="p \\vdash p" />
            </div>
            <div>
              <p className="text-dark-200 mb-1"><strong>Universal Specification:</strong></p>
              <MathBlock math="\\frac{\\phi(x) \\vdash_{\\{x\\}} \\psi(x)}{\\phi(\\alpha) \\vdash \\psi(\\alpha)}" />
            </div>
            <div>
              <p className="text-dark-200 mb-1"><strong>Pairing axiom:</strong></p>
              <MathBlock math="\\langle a, b \\rangle = \\langle c, d \\rangle \\vdash a = c" />
            </div>
            <div>
              <p className="text-dark-200 mb-1"><strong>Mathematical Induction:</strong></p>
              <MathBlock math="\\frac{\\phi(x) \\vdash_{\\{x\\}} \\phi(Sx)}{\\phi(0) \\vdash_{\\{x\\}} \\phi(x)}" />
            </div>
          </div>
        </Card>

        <p className="text-dark-200 mt-4">
          The last rule is the <strong>principle of mathematical induction</strong>. If a
          property holds for <InlineMath math="x" /> implies it holds for <InlineMath math="Sx" />,
          and if it holds for <InlineMath math="0" />, then it holds for all natural numbers.
        </p>
      </section>

      {/* Relationship to Logic */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Relationship to Intuitionistic Logic</h3>

        <p className="text-dark-200 mb-4">
          Although we have not stated all the axioms and rules of inference here, they imply
          the usual axioms and rules for the <strong>intuitionistic propositional and predicate
          calculi</strong> studied in previous sections.
        </p>

        <Callout type="success" title="A Complete Foundation">
          <p>
            This type theory provides a complete foundation for constructive mathematics. It
            captures all the intuitionistic logical principles while also providing:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>A type system for organizing mathematical objects</li>
            <li>Set comprehension for building collections</li>
            <li>Mathematical induction for reasoning about natural numbers</li>
            <li>A basis for developing arithmetic and analysis</li>
          </ul>
        </Callout>
      </section>

      {/* Historical Note */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Further Reading</h3>

        <p className="text-dark-200 mb-4">
          For a less formal treatment of constructive arithmetic and analysis, the reader
          may consult:
        </p>

        <CardGrid columns={2}>
          <Card>
            <CardHeader
              icon={<span className="text-2xl">A</span>}
              title="Goodstein (1970)"
            />
            <p className="text-dark-300 text-sm">
              Constructive arithmetic: developing number theory without the law of excluded middle.
            </p>
          </Card>

          <Card>
            <CardHeader
              icon={<span className="text-2xl">B</span>}
              title="Bishop (1967)"
            />
            <p className="text-dark-300 text-sm">
              Constructive analysis: developing calculus and real analysis in a constructive framework.
            </p>
          </Card>
        </CardGrid>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>

        <Card>
          <ul className="space-y-2 text-dark-200">
            <li>
              <strong>Basic types:</strong> <InlineMath math="1" /> (unit),{' '}
              <InlineMath math="\\Omega" /> (propositions), <InlineMath math="N" /> (natural numbers)
            </li>
            <li>
              <strong>Type constructors:</strong> <InlineMath math="PA" /> (power type),{' '}
              <InlineMath math="A \\times B" /> (product type)
            </li>
            <li>
              <strong>Logical connectives</strong> are defined in terms of types, not taken as primitive
            </li>
            <li>
              <InlineMath math="\\top" />, <InlineMath math="\\land" />,{' '}
              <InlineMath math="\\Rightarrow" />, <InlineMath math="\\forall" /> are "positive" connectives
            </li>
            <li>
              <InlineMath math="\\bot" />, <InlineMath math="\\neg" />,{' '}
              <InlineMath math="\\lor" />, <InlineMath math="\\exists" /> are "negative" connectives
              (defined via implication)
            </li>
            <li>
              <strong>Mathematical induction</strong> is a rule of inference, not an axiom
            </li>
            <li>
              The system implies the intuitionistic propositional and predicate calculi
            </li>
            <li>
              Only the <strong>axiom of choice</strong> introduces nonconstructive proofs
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={57} questions={section57Questions} />
    </LessonLayout>
  );
}
