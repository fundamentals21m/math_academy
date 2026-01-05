import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section63Questions } from '../../data/quizzes';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2 className="text-2xl font-semibold mb-4">Functors</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Just as we study structure-preserving functions between sets, we study{' '}
        <strong>structure-preserving mappings between categories</strong>. These mappings
        are called <strong>functors</strong>, and they reveal deep connections between
        different mathematical structures.
      </p>

      {/* Definition of Functor */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Definition of a Functor</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">F</span>}
            title="Definition: Functor"
          />
          <p className="text-dark-300 mb-3">
            If <InlineMath math="\\mathbf{A}" /> and <InlineMath math="\\mathbf{B}" /> are
            two categories, a <strong>functor</strong> <InlineMath math="F" /> from{' '}
            <InlineMath math="\\mathbf{A}" /> to <InlineMath math="\\mathbf{B}" /> is a
            mapping that sends objects of <InlineMath math="\\mathbf{A}" /> to objects
            of <InlineMath math="\\mathbf{B}" /> and arrows of <InlineMath math="\\mathbf{A}" /> to
            arrows of <InlineMath math="\\mathbf{B}" />, such that:
          </p>
          <ol className="list-decimal list-inside text-dark-300 space-y-2">
            <li>
              <strong>Preserves source and target:</strong> If <InlineMath math="g" /> is an
              arrow with source <InlineMath math="a" /> and target <InlineMath math="a'" />,
              then <InlineMath math="F(g)" /> has source <InlineMath math="F(a)" /> and
              target <InlineMath math="F(a')" />
            </li>
            <li>
              <strong>Preserves identities:</strong>{' '}
              <InlineMath math="F(1_a) = 1_{F(a)}" />
            </li>
            <li>
              <strong>Preserves composition:</strong>{' '}
              <InlineMath math="F(g \\circ h) = F(g) \\circ F(h)" />
            </li>
          </ol>
        </Card>

        <Callout type="info" title="Structure Preservation">
          <p>
            A functor preserves all the categorical structure: sources and targets of
            arrows, identity arrows, and composition. This is analogous to how a
            homomorphism preserves algebraic structure.
          </p>
        </Callout>
      </section>

      {/* Example 1: Functions as Functors */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 33.1: Functions as Functors</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">1</span>}
            title="Sets to Sets"
          />
          <p className="text-dark-300 mb-2">
            Suppose <InlineMath math="A" /> and <InlineMath math="B" /> are sets, each viewed
            as a discrete category (Example 32.1). Let <InlineMath math="F" /> be any
            function from <InlineMath math="A" /> to <InlineMath math="B" />.
          </p>
          <p className="text-dark-300 mb-2">
            Since each element <InlineMath math="a" /> is both an object and
            arrow <InlineMath math="1_a" />, and <InlineMath math="F(a)" /> is
            both <InlineMath math="F(a)" /> and <InlineMath math="1_{F(a)}" />, we have:
          </p>
          <MathBlock math="F(1_a) = F(a) = 1_{F(a)}" />
          <p className="text-dark-300 mt-2 text-sm italic">
            Hence <strong>every function between sets is automatically a functor</strong>{' '}
            between the corresponding discrete categories.
          </p>
        </Card>
      </section>

      {/* Example 2: Monoid Homomorphisms */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 33.2: Monoid Homomorphisms as Functors</h3>

        <Card variant="warning">
          <CardHeader
            icon={<span className="text-2xl">M</span>}
            title="Monoids to Monoids"
          />
          <p className="text-dark-300 mb-2">
            Suppose <InlineMath math="A" /> and <InlineMath math="B" /> are monoids, each
            viewed as a one-object category (Example 32.2). Let <InlineMath math="F" /> be
            a monoid homomorphism from <InlineMath math="A" /> to <InlineMath math="B" />.
          </p>
          <p className="text-dark-300 mb-2">
            Since <InlineMath math="F" /> is a homomorphism:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>
              <InlineMath math="F(1_*) = 1_{F(*)}" /> (identity maps to identity)
            </li>
            <li>
              <InlineMath math="F(a \\circ a') = F(a \\cdot a') = F(a) \\cdot F(a') = F(a) \\circ F(a')" />
            </li>
          </ul>
          <p className="text-dark-300 mt-2 text-sm italic">
            Hence <strong>every monoid homomorphism is a functor</strong> between the
            corresponding one-object categories.
          </p>
        </Card>
      </section>

      {/* Example 3: Monotone Mappings */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 33.3: Monotone Mappings as Functors</h3>

        <Card variant="info">
          <CardHeader
            icon={<InlineMath math="\\leq" />}
            title="Pre-ordered Sets"
          />
          <p className="text-dark-300">
            A <strong>monotone mapping</strong> between pre-ordered sets may be viewed as a
            functor between the corresponding categories. The verification follows the same
            pattern as the previous examples.
          </p>
        </Card>

        <Callout type="info" title="Unified Perspective">
          <p>
            In Chapter 32, we saw that sets, monoids, and pre-ordered sets can all be
            viewed as categories. Now we see that the natural structure-preserving maps
            between them (functions, homomorphisms, monotone mappings) are all examples
            of <strong>functors</strong>.
          </p>
        </Callout>
      </section>

      {/* Example 4: Sets as Functors */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 33.4: A Set as a Functor</h3>

        <Card>
          <CardHeader
            icon={<span className="text-2xl">S</span>}
            title="Set as Functor"
          />
          <p className="text-dark-300 mb-2">
            A set <InlineMath math="S" /> can be viewed as a functor! Let{' '}
            <InlineMath math="\\mathbf{A}" /> be the discrete one-element category
            and <InlineMath math="\\mathbf{B}" /> the category of sets.
          </p>
          <p className="text-dark-300">
            For any set <InlineMath math="S" />, there is a unique functor{' '}
            <InlineMath math="F : \\mathbf{A} \\to \\mathbf{B}" /> such
            that <InlineMath math="F(1_{\\mathbf{A}})" /> is the identity function on{' '}
            <InlineMath math="S" />. This functor <em>is</em> the set <InlineMath math="S" />.
          </p>
        </Card>
      </section>

      {/* Example 5: Graphs as Functors */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 33.5: A Graph as a Functor</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">G</span>}
            title="Graph as Functor"
          />
          <p className="text-dark-300 mb-2">
            Let <InlineMath math="\\mathbf{A}" /> be a category with two
            objects <InlineMath math="\\mathbf{a}" /> and <InlineMath math="\\mathbf{o}" />,
            and four arrows: <InlineMath math="1_{\\mathbf{a}}" />,{' '}
            <InlineMath math="1_{\\mathbf{o}}" />,{' '}
            <InlineMath math="s : \\mathbf{a} \\to \\mathbf{o}" />, and{' '}
            <InlineMath math="t : \\mathbf{a} \\to \\mathbf{o}" />.
          </p>
          <p className="text-dark-300 mb-2">
            Suppose <InlineMath math="F" /> maps <InlineMath math="\\mathbf{a}" /> to a
            set <InlineMath math="X" /> and <InlineMath math="\\mathbf{o}" /> to a
            set <InlineMath math="Y" />, with <InlineMath math="F(s)" /> and{' '}
            <InlineMath math="F(t)" /> as functions from <InlineMath math="X" /> to{' '}
            <InlineMath math="Y" />.
          </p>
          <p className="text-dark-300 text-sm italic">
            Then <InlineMath math="F" /> is a functor, and we can think of it as a{' '}
            <strong>graph</strong> with objects <InlineMath math="Y" />,
            arrows <InlineMath math="X" />, source mapping <InlineMath math="F(s)" />, and
            target mapping <InlineMath math="F(t)" />.
          </p>
        </Card>
      </section>

      {/* Small Categories and Cat */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Small Categories and Cat</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">C</span>}
            title="The Category Cat"
          />
          <p className="text-dark-300 mb-2">
            A category is called <strong>small</strong> if both its class of objects and
            its class of arrows are <em>sets</em> (as opposed to proper classes).
          </p>
          <p className="text-dark-300 mb-2">
            <strong>Cat</strong> is the category whose:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Objects are small categories</li>
            <li>Arrows are functors from one small category to another</li>
          </ul>
        </Card>

        <Callout type="info" title="Categories All the Way Down">
          <p>
            The fact that small categories themselves form a category again illustrates
            the slogan: <em>"interesting objects congregate in categories"</em>.
          </p>
        </Callout>
      </section>

      {/* Key Insights */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Insights</h3>

        <CardGrid columns={2}>
          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">U</span>}
              title="Unification"
            />
            <p className="text-dark-300 text-sm">
              Functors unify different kinds of structure-preserving maps: functions,
              homomorphisms, and monotone mappings are all functors.
            </p>
          </Card>

          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">V</span>}
              title="Viewpoint"
            />
            <p className="text-dark-300 text-sm">
              Mathematical entities (sets, graphs, M-sets) can often be <em>viewed as
              functors</em>, providing a powerful categorical perspective.
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
              <strong>Functor:</strong> A mapping between categories preserving objects,
              arrows, identities, and composition
            </li>
            <li>
              <strong>Three conditions:</strong>{' '}
              <InlineMath math="F(g): F(a) \\to F(a')" />,{' '}
              <InlineMath math="F(1_a) = 1_{F(a)}" />,{' '}
              <InlineMath math="F(g \\circ h) = F(g) \\circ F(h)" />
            </li>
            <li>
              <strong>Functions as functors:</strong> Every function between sets is a
              functor between discrete categories
            </li>
            <li>
              <strong>Homomorphisms as functors:</strong> Monoid homomorphisms are functors
              between one-object categories
            </li>
            <li>
              <strong>Monotone maps as functors:</strong> Order-preserving maps are functors
              between pre-order categories
            </li>
            <li>
              <strong>Entities as functors:</strong> Sets, graphs, and M-sets can be viewed
              as functors
            </li>
            <li>
              <strong>Small category:</strong> Objects and arrows form sets, not proper classes
            </li>
            <li>
              <strong>Cat:</strong> The category of small categories with functors as arrows
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={63} questions={section63Questions} />
    </LessonLayout>
  );
}
