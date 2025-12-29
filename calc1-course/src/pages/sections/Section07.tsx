import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-semibold mb-4">The Concept of Area</h2>

      <p className="text-dark-200 mb-6">
        One of the fundamental applications of calculus is computing areas. Rather than
        relying on intuition, we develop area rigorously using an axiomatic approach,
        treating area as a <strong>set function</strong> that assigns a number to each
        measurable set in the plane.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Area as a Set Function</h2>

      <p className="text-dark-200 mb-4">
        When we assign an area to a plane region, we associate a number with a set{' '}
        <MathInline>{'S'}</MathInline> in the plane. From a mathematical viewpoint, this
        means we have a function <MathInline>{'a'}</MathInline> (an area function) which
        assigns a real number <MathInline>{'a(S)'}</MathInline> (the area of{' '}
        <MathInline>{'S'}</MathInline>) to each set <MathInline>{'S'}</MathInline> in
        some given collection of sets.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Set Function</p>
        <p>
          A <strong>set function</strong> is a function whose domain is a collection of
          sets and whose values are real numbers.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        The basic problem is: Given a plane set <MathInline>{'S'}</MathInline>, what
        area <MathInline>{'a(S)'}</MathInline> shall we assign to it? Our approach is
        to start with properties we feel area should have and take these as axioms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Measurable Sets</h2>

      <p className="text-dark-200 mb-4">
        Not every set in the plane can be assigned an area in a consistent way. The sets
        to which we can assign an area are called <strong>measurable sets</strong>, and
        the collection of all measurable sets is denoted by <MathInline>{'\\mathcal{M}'}</MathInline>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Rectangles</p>
        <p className="mb-2">
          A <strong>rectangle</strong> is any set congruent to:
        </p>
        <MathBlock>{'\\{(x, y) \\mid 0 \\leq x \\leq h, \\, 0 \\leq y \\leq k\\}'}</MathBlock>
        <p className="mt-2">
          where <MathInline>{'h \\geq 0'}</MathInline> and <MathInline>{'k \\geq 0'}</MathInline>.
          The numbers <MathInline>{'h'}</MathInline> and <MathInline>{'k'}</MathInline> are
          the <strong>lengths of the edges</strong>. A line segment or point is a special
          case (when <MathInline>{'h = 0'}</MathInline> or <MathInline>{'k = 0'}</MathInline>).
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Axioms for Area</h2>

      <p className="text-dark-200 mb-4">
        We assume there exists a class <MathInline>{'\\mathcal{M}'}</MathInline> of measurable
        sets in the plane and a set function <MathInline>{'a'}</MathInline>, whose domain
        is <MathInline>{'\\mathcal{M}'}</MathInline>, with the following properties:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 1: Nonnegative Property</p>
        <p>
          For each set <MathInline>{'S'}</MathInline> in <MathInline>{'\\mathcal{M}'}</MathInline>,
          we have <MathInline>{'a(S) \\geq 0'}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 2: Additive Property</p>
        <p className="mb-2">
          If <MathInline>{'S'}</MathInline> and <MathInline>{'T'}</MathInline> are in{' '}
          <MathInline>{'\\mathcal{M}'}</MathInline>, then <MathInline>{'S \\cup T'}</MathInline>{' '}
          and <MathInline>{'S \\cap T'}</MathInline> are in <MathInline>{'\\mathcal{M}'}</MathInline>, and:
        </p>
        <MathBlock>{'a(S \\cup T) = a(S) + a(T) - a(S \\cap T)'}</MathBlock>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 3: Difference Property</p>
        <p className="mb-2">
          If <MathInline>{'S'}</MathInline> and <MathInline>{'T'}</MathInline> are in{' '}
          <MathInline>{'\\mathcal{M}'}</MathInline> with <MathInline>{'S \\subseteq T'}</MathInline>,
          then <MathInline>{'T - S'}</MathInline> is in <MathInline>{'\\mathcal{M}'}</MathInline>, and:
        </p>
        <MathBlock>{'a(T - S) = a(T) - a(S)'}</MathBlock>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 4: Invariance Under Congruence</p>
        <p>
          If <MathInline>{'S'}</MathInline> is in <MathInline>{'\\mathcal{M}'}</MathInline> and{' '}
          <MathInline>{'T'}</MathInline> is congruent to <MathInline>{'S'}</MathInline>, then{' '}
          <MathInline>{'T'}</MathInline> is also in <MathInline>{'\\mathcal{M}'}</MathInline> and{' '}
          <MathInline>{'a(S) = a(T)'}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 5: Choice of Scale</p>
        <p>
          Every rectangle <MathInline>{'R'}</MathInline> is in <MathInline>{'\\mathcal{M}'}</MathInline>.
          If the edges of <MathInline>{'R'}</MathInline> have lengths <MathInline>{'h'}</MathInline>{' '}
          and <MathInline>{'k'}</MathInline>, then <MathInline>{'a(R) = hk'}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 6: Exhaustion Property</p>
        <p className="mb-2">
          Let <MathInline>{'Q'}</MathInline> be a set that can be enclosed between two step
          regions <MathInline>{'S'}</MathInline> and <MathInline>{'T'}</MathInline>, so that:
        </p>
        <MathBlock>{'S \\subseteq Q \\subseteq T'}</MathBlock>
        <p className="mt-2">
          If there is one and only one number <MathInline>{'c'}</MathInline> satisfying{' '}
          <MathInline>{'a(S) \\leq c \\leq a(T)'}</MathInline> for all such step regions,
          then <MathInline>{'Q'}</MathInline> is measurable and <MathInline>{'a(Q) = c'}</MathInline>.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Understanding the Axioms</h2>

      <p className="text-dark-200 mb-4">
        Each axiom captures an intuitive property of area:
      </p>

      <ul className="list-disc list-inside text-dark-200 mb-6 space-y-3">
        <li>
          <strong>Axiom 1:</strong> Area is never negative.
        </li>
        <li>
          <strong>Axiom 2:</strong> When combining two regions, add their areas and subtract
          the overlap. If the regions don't overlap, the total area is just the sum.
        </li>
        <li>
          <strong>Axiom 3:</strong> Removing a subset reduces area by the area of that subset.
          This implies the <em>monotone property</em>: if <MathInline>{'S \\subseteq T'}</MathInline>,
          then <MathInline>{'a(S) \\leq a(T)'}</MathInline>.
        </li>
        <li>
          <strong>Axiom 4:</strong> Congruent figures have equal areas (moving or rotating
          a region doesn't change its area).
        </li>
        <li>
          <strong>Axiom 5:</strong> Establishes the unit of measurement—rectangles have
          area equal to length times width.
        </li>
        <li>
          <strong>Axiom 6:</strong> The Greek <em>method of exhaustion</em>—we can find the
          area of curved regions by "squeezing" them between simpler regions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Step Regions</h2>

      <p className="text-dark-200 mb-4">
        From rectangles, we can build more complex sets:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Step Region</p>
        <p>
          A <strong>step region</strong> is the union of a finite collection of adjacent
          rectangles with their bases resting on the <MathInline>{'x'}</MathInline>-axis.
        </p>
      </Callout>

      <p className="text-dark-200 mb-6">
        The axioms imply that every step region is measurable, and its area is the sum
        of the areas of its rectangular pieces.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Ordinate Sets</h2>

      <p className="text-dark-200 mb-4">
        A key type of region in integral calculus is the <em>ordinate set</em>:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Ordinate Set</p>
        <p>
          Let <MathInline>{'f'}</MathInline> be a nonnegative function defined on{' '}
          <MathInline>{'[a, b]'}</MathInline>. The <strong>ordinate set</strong> of{' '}
          <MathInline>{'f'}</MathInline> is the region between the graph of{' '}
          <MathInline>{'f'}</MathInline> and the <MathInline>{'x'}</MathInline>-axis:
        </p>
        <MathBlock>{'Q = \\{(x, y) \\mid a \\leq x \\leq b, \\, 0 \\leq y \\leq f(x)\\}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Axiom 6 enables us to prove that many ordinate sets are measurable. We approximate
        them by <em>inner step regions</em> (contained in <MathInline>{'Q'}</MathInline>)
        and <em>outer step regions</em> (containing <MathInline>{'Q'}</MathInline>).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Intervals</h2>

      <p className="text-dark-200 mb-4">
        In integration theory, we work with functions defined on intervals. We distinguish
        several types:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Types of Intervals</p>
        <p className="mb-2">For <MathInline>{'a < b'}</MathInline>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Closed interval</strong> <MathInline>{'[a, b]'}</MathInline>: all{' '}
            <MathInline>{'x'}</MathInline> with <MathInline>{'a \\leq x \\leq b'}</MathInline>{' '}
            (includes endpoints)
          </li>
          <li>
            <strong>Open interval</strong> <MathInline>{'(a, b)'}</MathInline>: all{' '}
            <MathInline>{'x'}</MathInline> with <MathInline>{'a < x < b'}</MathInline>{' '}
            (excludes endpoints)
          </li>
          <li>
            <strong>Half-open interval</strong> <MathInline>{'[a, b)'}</MathInline>: all{' '}
            <MathInline>{'x'}</MathInline> with <MathInline>{'a \\leq x < b'}</MathInline>
          </li>
          <li>
            <strong>Half-open interval</strong> <MathInline>{'(a, b]'}</MathInline>: all{' '}
            <MathInline>{'x'}</MathInline> with <MathInline>{'a < x \\leq b'}</MathInline>
          </li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-6">
        The open interval <MathInline>{'(a, b)'}</MathInline> is also called the{' '}
        <strong>interior</strong> of the closed interval <MathInline>{'[a, b]'}</MathInline>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Consequences of the Axioms</h2>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Results</p>
        <ul className="list-disc list-inside space-y-2">
          <li>A single point has zero area</li>
          <li>A line segment has zero area</li>
          <li>The empty set <MathInline>{'\\varnothing'}</MathInline> is measurable with <MathInline>{'a(\\varnothing) = 0'}</MathInline></li>
          <li>Every triangle is measurable with area <MathInline>{'\\frac{1}{2} \\times \\text{base} \\times \\text{height}'}</MathInline></li>
          <li>Every polygon is measurable</li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>

      <p className="text-dark-200 mb-4">
        We treat area axiomatically as a set function satisfying six properties: nonnegativity,
        additivity, difference, congruence invariance, choice of scale, and exhaustion.
        These axioms formalize our intuition about area and provide the foundation for
        computing areas of curved regions through the integral. The exhaustion property—approximating
        complex regions by step regions—is the key idea that leads to integration.
      </p>
    </LessonLayout>
  );
}
