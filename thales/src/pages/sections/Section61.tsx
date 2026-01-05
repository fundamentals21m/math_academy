import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section61Questions } from '../../data/quizzes';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <h2 className="text-2xl font-semibold mb-4">Concrete Categories</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        The 20th century witnessed both practical advances (statistics, computers proving the
        Four Colour Theorem) and unprecedented levels of abstraction. A prominent advocate of
        abstract algebra was <strong>Emmy Noether</strong> (1882–1935). The supreme abstraction
        is the notion of a <strong>category</strong>, to which we now turn.
      </p>

      {/* Motivation */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Need for Categories</h3>

        <p className="text-dark-200 mb-4">
          When studying mathematical structures, we are naturally led to study the
          maps that preserve their structure:
        </p>

        <CardGrid columns={3}>
          <Card>
            <CardHeader
              icon={<span className="text-2xl">V</span>}
              title="Vector Spaces"
            />
            <p className="text-dark-300 text-sm">
              We study <strong>linear transformations</strong> that preserve vector space structure.
            </p>
          </Card>

          <Card>
            <CardHeader
              icon={<span className="text-2xl">T</span>}
              title="Topological Spaces"
            />
            <p className="text-dark-300 text-sm">
              We study <strong>continuous mappings</strong> that preserve topological structure.
            </p>
          </Card>

          <Card>
            <CardHeader
              icon={<span className="text-2xl">G</span>}
              title="Groups"
            />
            <p className="text-dark-300 text-sm">
              We study <strong>homomorphisms</strong> that preserve group structure.
            </p>
          </Card>
        </CardGrid>

        <p className="text-dark-200 mt-4">
          To abstract what these examples have in common, we introduce the notion of a
          <strong> concrete category</strong>.
        </p>
      </section>

      {/* Definition */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Definition of Concrete Category</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">D</span>}
            title="Concrete Category"
          />
          <p className="text-dark-300">
            A <strong>concrete category</strong> is:
          </p>
          <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
            <li>A class of sets, each endowed with a certain <em>structure</em>, together with</li>
            <li>The class of all functions which map one set to another while <em>preserving</em> this structure.</li>
          </ul>
        </Card>
      </section>

      {/* Example 1: Sets */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 31.1: The Category of Sets</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">1</span>}
            title="Sets and Functions"
          />
          <p className="text-dark-300">
            The class of <strong>all sets</strong> together with the class of <strong>all functions</strong> between
            them forms a concrete category.
          </p>
          <p className="text-dark-300 mt-2 text-sm">
            Here there is no structure to preserve, so the condition on functions is trivially satisfied.
          </p>
        </Card>
      </section>

      {/* Example 2: Monoids */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 31.2: The Category of Monoids</h3>

        <Card variant="warning">
          <CardHeader
            icon={<span className="text-2xl">M</span>}
            title="Monoid"
          />
          <p className="text-dark-300 mb-2">
            A <strong>monoid</strong> is a set with a special identity element{' '}
            <InlineMath math="1" /> and a binary operation <InlineMath math="\\cdot" /> such that:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Associativity: <InlineMath math="(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)" /></li>
            <li>Identity: <InlineMath math="1 \\cdot a = a \\cdot 1 = a" /></li>
          </ul>
        </Card>

        <Card className="mt-4">
          <CardHeader
            icon={<span className="text-2xl">H</span>}
            title="Monoid Homomorphism"
          />
          <p className="text-dark-300 mb-2">
            A <strong>monoid homomorphism</strong> is a function <InlineMath math="f: A \\to A'" /> that
            preserves structure:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li><InlineMath math="f(a \\cdot b) = f(a) \\cdot f(b)" /></li>
            <li><InlineMath math="f(1) = 1" /> (identity maps to identity)</li>
          </ul>
        </Card>

        <Callout type="info" title="Examples of Monoids">
          <ul className="list-disc list-inside space-y-1">
            <li>
              The natural numbers <InlineMath math="\\mathbb{N}" /> with <InlineMath math="0" /> as
              identity and <InlineMath math="+" /> as operation.
            </li>
            <li>
              The singleton set <InlineMath math="\\{1\\}" /> with <InlineMath math="1 \\cdot 1 = 1" />.
            </li>
            <li>
              The mapping <InlineMath math="\\mathbb{N} \\to \\{1\\}" /> sending everything to{' '}
              <InlineMath math="1" /> is a monoid homomorphism.
            </li>
          </ul>
        </Callout>

        <p className="text-dark-200 mt-4">
          Note that <strong>group homomorphisms are a special case</strong> of monoid homomorphisms.
          The class of monoids with monoid homomorphisms forms a concrete category.
        </p>
      </section>

      {/* Example 3: Pre-ordered Sets */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 31.3: The Category of Pre-ordered Sets</h3>

        <Card variant="info">
          <CardHeader
            icon={<InlineMath math="\\leq" />}
            title="Pre-ordered Set"
          />
          <p className="text-dark-300 mb-2">
            A <strong>pre-ordered set</strong> is a set with a binary relation{' '}
            <InlineMath math="\\leq" /> that is:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Reflexive: <InlineMath math="a \\leq a" /></li>
            <li>Transitive: If <InlineMath math="a \\leq b" /> and <InlineMath math="b \\leq c" />, then <InlineMath math="a \\leq c" /></li>
          </ul>
        </Card>

        <Card className="mt-4">
          <CardHeader
            icon={<span className="text-2xl">M</span>}
            title="Monotone Mapping"
          />
          <p className="text-dark-300">
            A <strong>monotone mapping</strong> is a function <InlineMath math="f: A \\to A'" /> that
            preserves order: if <InlineMath math="a \\leq b" />, then <InlineMath math="f(a) \\leq f(b)" />.
          </p>
        </Card>

        <Callout type="info" title="Example">
          <p>
            Both the natural numbers and the even numbers with <InlineMath math="\\leq" /> are
            pre-ordered sets. The <strong>doubling function</strong> maps the natural numbers to
            even numbers in an order-preserving way and is thus a monotone mapping.
          </p>
        </Callout>
      </section>

      {/* Key Properties */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Properties</h3>

        <p className="text-dark-200 mb-4">
          In all concrete categories, we observe two important properties:
        </p>

        <CardGrid columns={2}>
          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">I</span>}
              title="Identity Preserves Structure"
            />
            <p className="text-dark-300 text-sm">
              The <strong>identity function</strong> on any set always preserves its structure.
            </p>
          </Card>

          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">C</span>}
              title="Composition Preserves Structure"
            />
            <p className="text-dark-300 text-sm">
              The <strong>composition</strong> of two structure-preserving functions also preserves structure.
            </p>
          </Card>
        </CardGrid>

        <p className="text-dark-200 mt-4">
          These properties motivate the more abstract notion of a <strong>category</strong>,
          which we define in the next chapter.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>

        <Card>
          <ul className="space-y-2 text-dark-200">
            <li>
              <strong>Emmy Noether</strong> (1882–1935) was a key figure in abstract algebra
            </li>
            <li>
              A <strong>concrete category</strong> consists of structured sets and
              structure-preserving functions
            </li>
            <li>
              <strong>Sets and functions</strong> form the simplest concrete category
            </li>
            <li>
              <strong>Monoids</strong> have identity and associative operation;
              homomorphisms preserve both
            </li>
            <li>
              <strong>Pre-ordered sets</strong> have reflexive, transitive relations;
              monotone maps preserve order
            </li>
            <li>
              <strong>Identity</strong> and <strong>composition</strong> always preserve structure
            </li>
            <li>
              Abstract <strong>categories</strong> generalize these patterns
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={61} questions={section61Questions} />
    </LessonLayout>
  );
}
