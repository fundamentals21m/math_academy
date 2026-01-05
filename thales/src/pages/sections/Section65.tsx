import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout, Card, CardGrid, CardHeader } from '../../components/common';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { SectionQuiz } from '../../components/quiz';
import { section65Questions } from '../../data/quizzes';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2 className="text-2xl font-semibold mb-4">A Natural Transformation between Vector Spaces</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        In this final chapter, we present a concrete and important example of a natural
        transformation: the <strong>canonical embedding</strong> of a vector space into its
        double dual. This example illustrates the power of category theory to capture deep
        mathematical relationships.
      </p>

      {/* Vector Spaces Review */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Review of Vector Spaces</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">V</span>}
            title="Vector Space over ℝ"
          />
          <p className="text-dark-300 mb-2">
            A <strong>vector space</strong> <InlineMath math="V" /> over <InlineMath math="\\mathbb{R}" /> is
            an Abelian group with scalar multiplication satisfying:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li><InlineMath math="(x + y)r = xr + yr" /></li>
            <li><InlineMath math="x(r + s) = xr + xs" /></li>
            <li><InlineMath math="x(rs) = (xr)s" /></li>
            <li><InlineMath math="x \\cdot 1 = x" /></li>
          </ul>
          <p className="text-dark-300 mt-2 text-sm">
            Note that <InlineMath math="\\mathbb{R}" /> is itself a vector space over{' '}
            <InlineMath math="\\mathbb{R}" />.
          </p>
        </Card>

        <Card className="mt-4">
          <CardHeader
            icon={<span className="text-2xl">L</span>}
            title="Linear Transformation"
          />
          <p className="text-dark-300">
            A <strong>linear transformation</strong> <InlineMath math="f: V \\to V'" /> satisfies:
          </p>
          <MathBlock math="f(x + y) = f(x) + f(y) \\quad \\text{and} \\quad f(xr) = f(x)r" />
        </Card>

        <Callout type="info" title="The Category Vect">
          <p>
            Taking vector spaces as objects and linear transformations as arrows, we obtain
            a concrete category called <strong>Vect</strong>.
          </p>
        </Callout>
      </section>

      {/* Dual Space */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Dual Space</h3>

        <Card variant="warning">
          <CardHeader
            icon={<InlineMath math="V^*" />}
            title="Linear Functionals and the Dual"
          />
          <p className="text-dark-300 mb-2">
            A <strong>linear functional</strong> on <InlineMath math="V" /> is a linear
            transformation <InlineMath math="f: V \\to \\mathbb{R}" />.
          </p>
          <p className="text-dark-300 mb-2">
            The set of all linear functionals on <InlineMath math="V" /> forms a vector
            space called the <strong>dual space</strong> <InlineMath math="V^*" />, with
            operations:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li><InlineMath math="(f + g)(x) = f(x) + g(x)" /></li>
            <li><InlineMath math="(fr)(x) = f(xr)" /></li>
          </ul>
        </Card>

        <Card className="mt-4" variant="info">
          <CardHeader
            icon={<InlineMath math="V^{**}" />}
            title="The Double Dual"
          />
          <p className="text-dark-300">
            Repeating this construction gives the <strong>double dual</strong>:
          </p>
          <MathBlock math="V^{**} = (V^*)^*" />
          <p className="text-dark-300 mt-2">
            This double dual is closely related to <InlineMath math="V" /> itself.
          </p>
        </Card>
      </section>

      {/* The Canonical Embedding */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Canonical Embedding</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">~</span>}
            title="The Map V → V**"
          />
          <p className="text-dark-300 mb-2">
            Define <InlineMath math="\\tilde{\\phantom{x}} : V \\to V^{**}" /> as follows:
            for <InlineMath math="x \\in V" />, let <InlineMath math="\\tilde{x}" /> be the
            transformation from <InlineMath math="V^*" /> to <InlineMath math="\\mathbb{R}" /> that
            maps any linear functional <InlineMath math="f" /> to <InlineMath math="f(x)" />:
          </p>
          <MathBlock math="\\tilde{x}(f) = f(x)" />
        </Card>

        <CardGrid columns={2} className="mt-4">
          <Card>
            <CardHeader
              icon={<span className="text-2xl">I</span>}
              title="Property I"
            />
            <p className="text-dark-300 text-sm">
              <InlineMath math="\\tilde{x}" /> is a linear transformation from{' '}
              <InlineMath math="V^*" /> to <InlineMath math="\\mathbb{R}" />, i.e., a linear
              functional on <InlineMath math="V^*" />.
            </p>
          </Card>

          <Card>
            <CardHeader
              icon={<span className="text-2xl">II</span>}
              title="Property II"
            />
            <p className="text-dark-300 text-sm">
              <InlineMath math="\\tilde{\\phantom{x}}" /> is a linear transformation from{' '}
              <InlineMath math="V" /> to <InlineMath math="V^{**}" />.
            </p>
          </Card>
        </CardGrid>

        <Callout type="info" title="Finite Dimensions">
          <p>
            When <InlineMath math="V" /> has finite dimension, the canonical
            embedding <InlineMath math="\\tilde{\\phantom{x}}" /> is an <strong>isomorphism</strong>.
          </p>
        </Callout>
      </section>

      {/* The Double Dual Functor */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Double Dual Functor</h3>

        <Card variant="info">
          <CardHeader
            icon={<span className="text-2xl">F</span>}
            title="Functor F: Vect → Vect"
          />
          <p className="text-dark-300 mb-2">
            Define a functor <InlineMath math="F" /> from <strong>Vect</strong> to{' '}
            <strong>Vect</strong> by:
          </p>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>
              On objects: <InlineMath math="F(V) = V^{**}" />
            </li>
            <li>
              On arrows: For <InlineMath math="h: V \\to V'" />, define{' '}
              <InlineMath math="h^{**}: V^{**} \\to V'^{**}" />
            </li>
          </ul>
          <p className="text-dark-300 mt-2 text-sm">
            Specifically, <InlineMath math="h^{**}(p)" /> maps <InlineMath math="f' \\in V'^*" /> to{' '}
            <InlineMath math="p(f' \\circ h)" />.
          </p>
        </Card>

        <p className="text-dark-200 mt-4">
          One can verify that <InlineMath math="F" /> preserves identities and composition,
          making it a genuine functor.
        </p>
      </section>

      {/* The Natural Transformation */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">The Natural Transformation</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">t</span>}
            title="Natural Transformation t: I → F"
          />
          <p className="text-dark-300 mb-2">
            Let <InlineMath math="I" /> be the <strong>identity functor</strong> on Vect.
            Define <InlineMath math="t" /> by assigning to each vector space{' '}
            <InlineMath math="V" /> the canonical embedding:
          </p>
          <MathBlock math="t(V) = \\tilde{\\phantom{x}} : V \\to V^{**}" />
        </Card>

        <Card className="mt-4" variant="warning">
          <CardHeader
            icon={<span className="text-2xl">✓</span>}
            title="Verifying Naturality"
          />
          <p className="text-dark-300 mb-2">
            For <InlineMath math="h: V \\to V'" />, we must show:
          </p>
          <MathBlock math="F(h) \\circ t(V) = t(V') \\circ I(h)" />
          <p className="text-dark-300 mt-2 text-sm">
            That is: <InlineMath math="h^{**} \\circ \\tilde{\\phantom{x}} = \\tilde{\\phantom{x}} \\circ h" />
          </p>
        </Card>

        <Callout type="info" title="The Proof">
          <p>
            For any <InlineMath math="x \\in V" /> and <InlineMath math="f' \\in V'^*" />:
          </p>
          <MathBlock math="h^{**}(\\tilde{x})(f') = \\tilde{x}(f' \\circ h) = (f' \\circ h)(x) = f'(h(x)) = \\widetilde{h(x)}(f')" />
          <p className="mt-2">
            Hence <InlineMath math="F(h) \\circ t(V) = t(V') \\circ I(h)" />, confirming
            that <InlineMath math="t" /> is a natural transformation.
          </p>
        </Callout>
      </section>

      {/* The Slogan */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Lawvere's Slogan</h3>

        <Card variant="success">
          <CardHeader
            icon={<span className="text-2xl">★</span>}
            title="The Central Insight"
          />
          <p className="text-dark-300 italic">
            "Many objects of interest in mathematics are functors and the arrows between
            them are natural transformations."
          </p>
          <p className="text-dark-300 mt-2 text-sm">
            — F. W. Lawvere
          </p>
        </Card>

        <p className="text-dark-200 mt-4">
          This example of the canonical embedding <InlineMath math="V \\to V^{**}" /> as a
          natural transformation illustrates how category theory captures deep structural
          relationships that exist across all of mathematics.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>

        <Card>
          <ul className="space-y-2 text-dark-200">
            <li>
              <strong>Vect:</strong> The category of vector spaces over{' '}
              <InlineMath math="\\mathbb{R}" /> with linear transformations
            </li>
            <li>
              <strong>Dual space:</strong> <InlineMath math="V^* = " /> linear
              functionals on <InlineMath math="V" />
            </li>
            <li>
              <strong>Double dual:</strong> <InlineMath math="V^{**} = (V^*)^*" />
            </li>
            <li>
              <strong>Canonical embedding:</strong>{' '}
              <InlineMath math="\\tilde{x}(f) = f(x)" /> gives{' '}
              <InlineMath math="\\tilde{\\phantom{x}}: V \\to V^{**}" />
            </li>
            <li>
              <strong>Functor F:</strong> Maps <InlineMath math="V \\mapsto V^{**}" /> and{' '}
              <InlineMath math="h \\mapsto h^{**}" />
            </li>
            <li>
              <strong>Natural transformation t:</strong> From identity functor{' '}
              <InlineMath math="I" /> to double dual functor <InlineMath math="F" />
            </li>
            <li>
              <strong>Naturality:</strong>{' '}
              <InlineMath math="h^{**} \\circ \\tilde{\\phantom{x}} = \\tilde{\\phantom{x}} \\circ h" />
            </li>
            <li>
              <strong>Lawvere's insight:</strong> Interesting mathematical objects are
              functors; morphisms between them are natural transformations
            </li>
          </ul>
        </Card>
      </section>

      {/* Course Conclusion */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Course Conclusion</h3>

        <Callout type="success" title="The Heritage of Thales">
          <p>
            We have journeyed from ancient Egyptian mathematics through Greek philosophy,
            medieval developments, the scientific revolution, and into the modern foundations
            of mathematics. From Thales' first proofs to category theory's natural
            transformations, we have traced <strong>2,500 years of mathematical heritage</strong>.
          </p>
          <p className="mt-2">
            The abstract machinery of categories, functors, and natural transformations
            represents the culmination of humanity's quest to understand the deep structures
            underlying all of mathematics.
          </p>
        </Callout>
      </section>

      {/* Section Quiz */}
      <SectionQuiz sectionId={65} questions={section65Questions} />
    </LessonLayout>
  );
}
