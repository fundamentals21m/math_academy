import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section64Questions } from '../../data/quizzes';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2 className="text-2xl font-semibold mb-4">Natural Transformations</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Category theory began in 1945 with <strong>Eilenberg and Mac Lane's</strong> article
        "General Theory of Natural Equivalences." In this chapter, we investigate the notion
        of a <strong>natural transformation</strong>—the key concept that motivated the entire
        theory.
      </p>

      {/* Definition */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Definition of Natural Transformation</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">N</span>}
            title="Definition: Natural Transformation"
          />
          <p className="text-dark-300 mb-3">
            Let <InlineMath math="\\mathbf{A}" /> and <InlineMath math="\\mathbf{B}" /> be
            categories and let <InlineMath math="F" /> and <InlineMath math="G" /> be functors
            from <InlineMath math="\\mathbf{A}" /> to <InlineMath math="\\mathbf{B}" />.
          </p>
          <p className="text-dark-300 mb-3">
            A <strong>natural transformation</strong> <InlineMath math="t" /> from{' '}
            <InlineMath math="F" /> to <InlineMath math="G" /> is a mapping that assigns to
            every object <InlineMath math="a" /> of <InlineMath math="\\mathbf{A}" /> an
            arrow <InlineMath math="t(a)" /> in <InlineMath math="\\mathbf{B}" /> from{' '}
            <InlineMath math="F(a)" /> to <InlineMath math="G(a)" />, such that for any
            arrow <InlineMath math="f" /> in <InlineMath math="\\mathbf{A}" /> from{' '}
            <InlineMath math="a" /> to <InlineMath math="b" />:
          </p>
          <MathBlock math="G(f) \\circ t(a) = t(b) \\circ F(f)" />
        </Card>

        <Callout type="info" title="The Naturality Condition">
          <p>
            The equation <InlineMath math="G(f) \\circ t(a) = t(b) \\circ F(f)" /> is called
            the <strong>naturality condition</strong>. It says that the "square commutes"—going
            around either way gives the same result.
          </p>
        </Callout>
      </section>

      {/* Commutative Diagram */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Commutative Square</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">□</span>}
            title="Naturality Square"
          />
          <p className="text-dark-300 mb-3">
            The naturality condition can be pictured as a commutative square:
          </p>
          <div className="text-center font-mono text-dark-300 my-4">
            <div className="inline-block text-left">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t(a)
              </div>
              <div>
                F(a) ────→ G(a)
              </div>
              <div>
                &nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│
              </div>
              <div>
                F(f)│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│G(f)
              </div>
              <div>
                &nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓
              </div>
              <div>
                F(b) ────→ G(b)
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t(b)
              </div>
            </div>
          </div>
          <p className="text-dark-300 text-sm">
            Note that <InlineMath math="a" /> and <InlineMath math="b" /> are objects in
            category <InlineMath math="\\mathbf{A}" />, whereas all objects and arrows in the
            diagram are in <InlineMath math="\\mathbf{B}" />.
          </p>
        </Card>
      </section>

      {/* Example 1: Functions as Natural Transformations */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 34.1: Functions as Natural Transformations</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">1</span>}
            title="Sets and Functions"
          />
          <p className="text-dark-300 mb-2">
            We saw that a set <InlineMath math="S" /> can be viewed as a functor{' '}
            <InlineMath math="F" /> from the discrete one-object category to the category of
            sets, where <InlineMath math="F" /> takes its object to <InlineMath math="S" /> and
            its arrow to the identity function on <InlineMath math="S" />.
          </p>
          <p className="text-dark-300 mb-2">
            Let <InlineMath math="S" /> and <InlineMath math="S'" /> be two sets, and{' '}
            <InlineMath math="F" /> and <InlineMath math="F'" /> the corresponding functors.
            Given a function <InlineMath math="f" /> from <InlineMath math="S" /> to{' '}
            <InlineMath math="S'" />, let <InlineMath math="t" /> assign to the unique
            object <InlineMath math="*" /> the arrow <InlineMath math="f" />.
          </p>
          <p className="text-dark-300 text-sm italic">
            Then <InlineMath math="t" /> is a natural transformation from <InlineMath math="F" /> to{' '}
            <InlineMath math="F'" />. Conversely, every natural transformation from{' '}
            <InlineMath math="F" /> to <InlineMath math="F'" /> has this form.
          </p>
        </Card>
      </section>

      {/* Example 2: Graph Morphisms */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 34.2: Graph Morphisms as Natural Transformations</h3>

        <Card variant="warning">
          <CardHeader
            icon={<span className="text-2xl">G</span>}
            title="Graph Morphisms"
          />
          <p className="text-dark-300 mb-2">
            A <strong>small graph</strong> consists of a set of objects, a set of arrows, and
            two mappings (source and target) from arrows to objects.
          </p>
          <p className="text-dark-300 mb-2">
            A <strong>morphism</strong> <InlineMath math="F" /> between small graphs sends objects
            to objects and arrows to arrows, preserving source and target: if{' '}
            <InlineMath math="f : a \\to b" /> in the first graph, then{' '}
            <InlineMath math="F(f) : F(a) \\to F(b)" />.
          </p>
          <p className="text-dark-300 text-sm italic">
            Since a graph can be viewed as a functor, a <strong>graph morphism can be viewed
            as a natural transformation</strong> between functors representing graphs.
          </p>
        </Card>
      </section>

      {/* Example 3: M-homomorphisms */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Example 34.3: M-Homomorphisms as Natural Transformations</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">M</span>}
            title="M-Homomorphisms"
          />
          <p className="text-dark-300 mb-2">
            Recall that an <InlineMath math="M" />-set can be regarded as a functor from a
            monoid category to the category of sets.
          </p>
          <p className="text-dark-300 mb-2">
            If <InlineMath math="(M, X, m)" /> and <InlineMath math="(M, X', m')" /> are two{' '}
            <InlineMath math="M" />-sets, an <strong><InlineMath math="M" />-homomorphism</strong> is
            a function <InlineMath math="f" /> from <InlineMath math="X" /> to{' '}
            <InlineMath math="X'" /> such that:
          </p>
          <MathBlock math="f(ab) = af(b)" />
          <p className="text-dark-300 text-sm italic mt-2">
            Such an <InlineMath math="M" />-homomorphism can be viewed as a{' '}
            <strong>natural transformation</strong> between the functors representing
            the <InlineMath math="M" />-sets.
          </p>
        </Card>
      </section>

      {/* The Unifying Power */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Unifying Power of Category Theory</h3>

        <Callout type="warning" title="A Common Objection">
          <p>
            It may seem from the above examples that category theory is merely a complicated
            way of expressing simpler ideas.
          </p>
        </Callout>

        <Card variant="success" className="mt-4">
          <CardHeader
            icon={<span className="text-2xl">U</span>}
            title="The Response"
          />
          <p className="text-dark-300">
            One should bear in mind that the abstract definitions of category theory{' '}
            <strong>embody the ideas and methods of many branches of mathematics at once</strong>,
            and thus may serve to <strong>unify their separate proofs and results</strong>.
            Chapter 35 (the final chapter) will help illustrate this fact.
          </p>
        </Card>
      </section>

      {/* Key Insight */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Insights</h3>

        <CardGrid columns={2}>
          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">O</span>}
              title="Origin"
            />
            <p className="text-dark-300 text-sm">
              Category theory was invented specifically to define natural transformations.
              The notion of "naturality" motivated the entire theory.
            </p>
          </Card>

          <Card variant="success">
            <CardHeader
              icon={<span className="text-2xl">P</span>}
              title="Pattern"
            />
            <p className="text-dark-300 text-sm">
              Many structure-preserving maps (functions, graph morphisms, M-homomorphisms)
              are examples of natural transformations in the right categorical setting.
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
              <strong>Origin:</strong> Category theory began in 1945 with Eilenberg and
              Mac Lane's work on natural equivalences
            </li>
            <li>
              <strong>Natural transformation:</strong> A mapping <InlineMath math="t" /> from
              functor <InlineMath math="F" /> to functor <InlineMath math="G" /> assigning
              arrows <InlineMath math="t(a): F(a) \\to G(a)" /> for each object{' '}
              <InlineMath math="a" />
            </li>
            <li>
              <strong>Naturality condition:</strong>{' '}
              <InlineMath math="G(f) \\circ t(a) = t(b) \\circ F(f)" /> for every
              arrow <InlineMath math="f: a \\to b" />
            </li>
            <li>
              <strong>Commutative square:</strong> The naturality condition says that "going
              around either way" gives the same result
            </li>
            <li>
              <strong>Functions:</strong> Every function between sets is a natural
              transformation between the corresponding functors
            </li>
            <li>
              <strong>Graph morphisms:</strong> Morphisms between graphs are natural
              transformations
            </li>
            <li>
              <strong>M-homomorphisms:</strong> Morphisms between M-sets are natural
              transformations
            </li>
            <li>
              <strong>Unification:</strong> Category theory unifies methods from many branches
              of mathematics
            </li>
          </ul>
        </Card>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={64} questions={section64Questions} />
    </LessonLayout>
  );
}
