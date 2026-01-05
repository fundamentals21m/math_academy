import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section62Questions } from '../../data/quizzes';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2 className="text-2xl font-semibold mb-4">Graphs and Categories</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Having introduced concrete categories, we now develop the abstract notion of a{' '}
        <strong>category</strong>. To do this, we first introduce the concept of a{' '}
        <strong>graph</strong>, which provides the structural foundation for categories.
      </p>

      {/* Definition of Graph */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Graphs (Oriented Multigraphs)</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">G</span>}
            title="Definition: Graph"
          />
          <p className="text-dark-300 mb-3">
            A <strong>graph</strong> (more precisely: an <em>oriented multigraph</em>) consists of:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>A class of <strong>arrows</strong> (or directed edges)</li>
            <li>A class of <strong>objects</strong> (or nodes)</li>
            <li>
              Two mappings from arrows to objects:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li><InlineMath math="S" /> (source or domain)</li>
                <li><InlineMath math="T" /> (target or codomain)</li>
              </ul>
            </li>
          </ul>
        </Card>

        <p className="text-dark-200 mt-4">
          If <InlineMath math="f" /> is an arrow with <InlineMath math="S(f) = A" /> and{' '}
          <InlineMath math="T(f) = B" />, we write:
        </p>

        <MathBlock math="f : A \\to B \\quad \\text{or} \\quad A \\xrightarrow{f} B" />

        <p className="text-dark-200 mt-4">
          This notation indicates that <InlineMath math="f" /> is an arrow going from
          object <InlineMath math="A" /> to object <InlineMath math="B" />.
        </p>
      </section>

      {/* Definition of Category */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Definition of a Category</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">C</span>}
            title="Definition: Category"
          />
          <p className="text-dark-300 mb-3">
            A <strong>category</strong> is a graph subject to the following four conditions:
          </p>
          <ol className="list-decimal list-inside text-dark-300 space-y-2">
            <li>
              <strong>Composition:</strong> For any two arrows <InlineMath math="f : A \\to B" /> and{' '}
              <InlineMath math="g : B \\to C" /> (so that <InlineMath math="T(f) = S(g)" />),
              there is an arrow <InlineMath math="g \\circ f : A \\to C" />
            </li>
            <li>
              <strong>Associativity:</strong> If <InlineMath math="f : A \\to B" />,{' '}
              <InlineMath math="g : B \\to C" />, and <InlineMath math="h : C \\to D" />, then{' '}
              <InlineMath math="(h \\circ g) \\circ f = h \\circ (g \\circ f)" />
            </li>
            <li>
              <strong>Identity arrows:</strong> For each object <InlineMath math="A" />,
              there is an identity arrow <InlineMath math="1_A" /> with source and target both equal
              to <InlineMath math="A" />
            </li>
            <li>
              <strong>Identity laws:</strong> If <InlineMath math="f : A \\to B" />, then{' '}
              <InlineMath math="f \\circ 1_A = f" />; if <InlineMath math="g : B \\to A" />, then{' '}
              <InlineMath math="1_A \\circ g = g" />
            </li>
          </ol>
        </Card>

        <Callout type="info" title="Concrete vs Abstract">
          <p>
            A <strong>concrete category</strong> is a category whose objects are sets with
            structure and whose arrows are the structure-preserving functions between them.
            In concrete categories, <InlineMath math="1_A" /> is the identity map on{' '}
            <InlineMath math="A" />, and <InlineMath math="\\circ" /> is function composition.
          </p>
        </Callout>
      </section>

      {/* Example 1: Discrete Category */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 32.1: The Discrete Category</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">1</span>}
            title="Set as a Category"
          />
          <p className="text-dark-300 mb-2">
            Let <InlineMath math="A" /> be any set. We construct the <strong>discrete category</strong>:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Class of objects: <InlineMath math="A" /></li>
            <li>Class of arrows: <InlineMath math="A" /></li>
            <li>
              For all <InlineMath math="a \\in A" />: <InlineMath math="S(a) = T(a) = a" />
            </li>
            <li>
              Identity: <InlineMath math="1_a = a" />
            </li>
            <li>
              Composition: <InlineMath math="a \\circ a = a" />
            </li>
          </ul>
          <p className="text-dark-300 mt-2 text-sm italic">
            In this way, <strong>a set may be viewed as a category</strong>.
          </p>
        </Card>
      </section>

      {/* Example 2: Monoid as Category */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 32.2: Monoid as a Category</h3>

        <Card variant="warning">
          <CardHeader
            icon={<span className="text-2xl">M</span>}
            title="Monoid as a Category"
          />
          <p className="text-dark-300 mb-2">
            Let <InlineMath math="(A, 1, \\cdot)" /> be a monoid. We construct a category:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>
              Class of objects: the singleton set <InlineMath math="\\{*\\}" />
            </li>
            <li>Class of arrows: <InlineMath math="A" /></li>
            <li>
              For all <InlineMath math="a \\in A" />: <InlineMath math="S(a) = T(a) = *" />
            </li>
            <li>
              Identity: <InlineMath math="1_* = 1" /> (the monoid identity)
            </li>
            <li>
              Composition: <InlineMath math="a \\circ b = a \\cdot b" /> (the monoid operation)
            </li>
          </ul>
          <p className="text-dark-300 mt-2 text-sm italic">
            In this way, <strong>a monoid may be viewed as a category</strong> with one object.
          </p>
        </Card>

        <Callout type="info" title="Natural Numbers as Category">
          <p>
            If we view the monoid of natural numbers with addition as a category, then what is
            the number 2? It is the unique arrow which can be written as a composition of
            nonidentity arrows in exactly one way (namely, <InlineMath math="1 + 1" />).
          </p>
        </Callout>
      </section>

      {/* Example 3: Pre-ordered Set as Category */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 32.3: Pre-ordered Set as a Category</h3>

        <Card variant="info">
          <CardHeader
            icon={<InlineMath math="\\leq" />}
            title="Pre-ordered Set as a Category"
          />
          <p className="text-dark-300 mb-2">
            Let <InlineMath math="(A, \\leq)" /> be a pre-ordered set. We construct a category:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Class of objects: <InlineMath math="A" /></li>
            <li>
              Class of arrows: <InlineMath math="\\{(a, b) \\mid a \\leq b\\}" />
            </li>
            <li>
              Source and target: <InlineMath math="S((a, b)) = a" /> and{' '}
              <InlineMath math="T((a, b)) = b" />
            </li>
            <li>
              Identity: <InlineMath math="1_a = (a, a)" /> (exists by reflexivity of{' '}
              <InlineMath math="\\leq" />)
            </li>
            <li>
              Composition: <InlineMath math="(b, c) \\circ (a, b) = (a, c)" /> (valid by transitivity)
            </li>
          </ul>
          <p className="text-dark-300 mt-2 text-sm italic">
            In this way, <strong>a pre-ordered set may be viewed as a category</strong>.
          </p>
        </Card>
      </section>

      {/* The Category "2" */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Category "2"</h3>

        <Card>
          <CardHeader
            icon={<span className="text-2xl">2</span>}
            title="A Minimal Nontrivial Category"
          />
          <p className="text-dark-300 mb-2">
            There is a category with exactly <strong>two objects</strong> and exactly{' '}
            <strong>one nonidentity arrow</strong>. This category is sometimes called "the number 2":
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Objects: <InlineMath math="0" /> and <InlineMath math="1" /></li>
            <li>
              Arrows: <InlineMath math="1_0" />, <InlineMath math="1_1" />, and{' '}
              <InlineMath math="f : 0 \\to 1" />
            </li>
          </ul>
          <p className="text-dark-300 mt-2">
            This corresponds to the pre-ordered set <InlineMath math="\\{0, 1\\}" /> with{' '}
            <InlineMath math="0 \\leq 1" />.
          </p>
        </Card>
      </section>

      {/* Key Insight */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Insight</h3>

        <CardGrid columns={2}>
          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">O</span>}
              title="Objects in Categories"
            />
            <p className="text-dark-300 text-sm">
              The examples from Chapter 31 show that <strong>many interesting objects in
              mathematics congregate in categories</strong> (e.g., sets, groups, vector spaces).
            </p>
          </Card>

          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">E</span>}
              title="Entities as Categories"
            />
            <p className="text-dark-300 text-sm">
              The examples in this chapter show that <strong>interesting mathematical
              entities may often be viewed as categories</strong> (sets, monoids, pre-orders).
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
              <strong>Graph:</strong> Arrows + objects + source/target mappings{' '}
              <InlineMath math="S" /> and <InlineMath math="T" />
            </li>
            <li>
              <strong>Category:</strong> A graph with composition, associativity, identities, and
              identity laws
            </li>
            <li>
              <strong>Concrete category:</strong> Objects are structured sets; arrows are
              structure-preserving functions
            </li>
            <li>
              <strong>Discrete category:</strong> Any set can be viewed as a category (each element
              is both object and arrow)
            </li>
            <li>
              <strong>Monoid as category:</strong> One object, arrows are monoid elements,
              composition is the monoid operation
            </li>
            <li>
              <strong>Pre-ordered set as category:</strong> Objects are elements, arrows are pairs{' '}
              <InlineMath math="(a, b)" /> where <InlineMath math="a \\leq b" />
            </li>
            <li>
              <strong>Category "2":</strong> Two objects, one nonidentity arrow (the simplest
              nontrivial category)
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={62} questions={section62Questions} />
    </LessonLayout>
  );
}
