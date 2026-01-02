import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

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
        <InlineMath>{'S'}</InlineMath> in the plane. From a mathematical viewpoint, this
        means we have a function <InlineMath>{'a'}</InlineMath> (an area function) which
        assigns a real number <InlineMath>{'a(S)'}</InlineMath> (the area of{' '}
        <InlineMath>{'S'}</InlineMath>) to each set <InlineMath>{'S'}</InlineMath> in
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
        The basic problem is: Given a plane set <InlineMath>{'S'}</InlineMath>, what
        area <InlineMath>{'a(S)'}</InlineMath> shall we assign to it? Our approach is
        to start with properties we feel area should have and take these as axioms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Measurable Sets</h2>

      <p className="text-dark-200 mb-4">
        Not every set in the plane can be assigned an area in a consistent way. The sets
        to which we can assign an area are called <strong>measurable sets</strong>, and
        the collection of all measurable sets is denoted by <InlineMath>{'\\mathcal{M}'}</InlineMath>.
      </p>

      <Callout type="info">
        <p className="font-semibold mb-2">Rectangles</p>
        <p className="mb-2">
          A <strong>rectangle</strong> is any set congruent to:
        </p>
        <MathBlock>{'\\{(x, y) \\mid 0 \\leq x \\leq h, \\, 0 \\leq y \\leq k\\}'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'h \\geq 0'}</InlineMath> and <InlineMath>{'k \\geq 0'}</InlineMath>.
          The numbers <InlineMath>{'h'}</InlineMath> and <InlineMath>{'k'}</InlineMath> are
          the <strong>lengths of the edges</strong>. A line segment or point is a special
          case (when <InlineMath>{'h = 0'}</InlineMath> or <InlineMath>{'k = 0'}</InlineMath>).
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Axioms for Area</h2>

      <p className="text-dark-200 mb-4">
        We assume there exists a class <InlineMath>{'\\mathcal{M}'}</InlineMath> of measurable
        sets in the plane and a set function <InlineMath>{'a'}</InlineMath>, whose domain
        is <InlineMath>{'\\mathcal{M}'}</InlineMath>, with the following properties:
      </p>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 1: Nonnegative Property</p>
        <p>
          For each set <InlineMath>{'S'}</InlineMath> in <InlineMath>{'\\mathcal{M}'}</InlineMath>,
          we have <InlineMath>{'a(S) \\geq 0'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 2: Additive Property</p>
        <p className="mb-2">
          If <InlineMath>{'S'}</InlineMath> and <InlineMath>{'T'}</InlineMath> are in{' '}
          <InlineMath>{'\\mathcal{M}'}</InlineMath>, then <InlineMath>{'S \\cup T'}</InlineMath>{' '}
          and <InlineMath>{'S \\cap T'}</InlineMath> are in <InlineMath>{'\\mathcal{M}'}</InlineMath>, and:
        </p>
        <MathBlock>{'a(S \\cup T) = a(S) + a(T) - a(S \\cap T)'}</MathBlock>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 3: Difference Property</p>
        <p className="mb-2">
          If <InlineMath>{'S'}</InlineMath> and <InlineMath>{'T'}</InlineMath> are in{' '}
          <InlineMath>{'\\mathcal{M}'}</InlineMath> with <InlineMath>{'S \\subseteq T'}</InlineMath>,
          then <InlineMath>{'T - S'}</InlineMath> is in <InlineMath>{'\\mathcal{M}'}</InlineMath>, and:
        </p>
        <MathBlock>{'a(T - S) = a(T) - a(S)'}</MathBlock>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 4: Invariance Under Congruence</p>
        <p>
          If <InlineMath>{'S'}</InlineMath> is in <InlineMath>{'\\mathcal{M}'}</InlineMath> and{' '}
          <InlineMath>{'T'}</InlineMath> is congruent to <InlineMath>{'S'}</InlineMath>, then{' '}
          <InlineMath>{'T'}</InlineMath> is also in <InlineMath>{'\\mathcal{M}'}</InlineMath> and{' '}
          <InlineMath>{'a(S) = a(T)'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 5: Choice of Scale</p>
        <p>
          Every rectangle <InlineMath>{'R'}</InlineMath> is in <InlineMath>{'\\mathcal{M}'}</InlineMath>.
          If the edges of <InlineMath>{'R'}</InlineMath> have lengths <InlineMath>{'h'}</InlineMath>{' '}
          and <InlineMath>{'k'}</InlineMath>, then <InlineMath>{'a(R) = hk'}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-3">Axiom 6: Exhaustion Property</p>
        <p className="mb-2">
          Let <InlineMath>{'Q'}</InlineMath> be a set that can be enclosed between two step
          regions <InlineMath>{'S'}</InlineMath> and <InlineMath>{'T'}</InlineMath>, so that:
        </p>
        <MathBlock>{'S \\subseteq Q \\subseteq T'}</MathBlock>
        <p className="mt-2">
          If there is one and only one number <InlineMath>{'c'}</InlineMath> satisfying{' '}
          <InlineMath>{'a(S) \\leq c \\leq a(T)'}</InlineMath> for all such step regions,
          then <InlineMath>{'Q'}</InlineMath> is measurable and <InlineMath>{'a(Q) = c'}</InlineMath>.
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
          This implies the <em>monotone property</em>: if <InlineMath>{'S \\subseteq T'}</InlineMath>,
          then <InlineMath>{'a(S) \\leq a(T)'}</InlineMath>.
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
          rectangles with their bases resting on the <InlineMath>{'x'}</InlineMath>-axis.
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
          Let <InlineMath>{'f'}</InlineMath> be a nonnegative function defined on{' '}
          <InlineMath>{'[a, b]'}</InlineMath>. The <strong>ordinate set</strong> of{' '}
          <InlineMath>{'f'}</InlineMath> is the region between the graph of{' '}
          <InlineMath>{'f'}</InlineMath> and the <InlineMath>{'x'}</InlineMath>-axis:
        </p>
        <MathBlock>{'Q = \\{(x, y) \\mid a \\leq x \\leq b, \\, 0 \\leq y \\leq f(x)\\}'}</MathBlock>
      </Callout>

      <p className="text-dark-200 mb-6">
        Axiom 6 enables us to prove that many ordinate sets are measurable. We approximate
        them by <em>inner step regions</em> (contained in <InlineMath>{'Q'}</InlineMath>)
        and <em>outer step regions</em> (containing <InlineMath>{'Q'}</InlineMath>).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Intervals</h2>

      <p className="text-dark-200 mb-4">
        In integration theory, we work with functions defined on intervals. We distinguish
        several types:
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Types of Intervals</p>
        <p className="mb-2">For <InlineMath>{'a < b'}</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Closed interval</strong> <InlineMath>{'[a, b]'}</InlineMath>: all{' '}
            <InlineMath>{'x'}</InlineMath> with <InlineMath>{'a \\leq x \\leq b'}</InlineMath>{' '}
            (includes endpoints)
          </li>
          <li>
            <strong>Open interval</strong> <InlineMath>{'(a, b)'}</InlineMath>: all{' '}
            <InlineMath>{'x'}</InlineMath> with <InlineMath>{'a < x < b'}</InlineMath>{' '}
            (excludes endpoints)
          </li>
          <li>
            <strong>Half-open interval</strong> <InlineMath>{'[a, b)'}</InlineMath>: all{' '}
            <InlineMath>{'x'}</InlineMath> with <InlineMath>{'a \\leq x < b'}</InlineMath>
          </li>
          <li>
            <strong>Half-open interval</strong> <InlineMath>{'(a, b]'}</InlineMath>: all{' '}
            <InlineMath>{'x'}</InlineMath> with <InlineMath>{'a < x \\leq b'}</InlineMath>
          </li>
        </ul>
      </Callout>

      <p className="text-dark-200 mb-6">
        The open interval <InlineMath>{'(a, b)'}</InlineMath> is also called the{' '}
        <strong>interior</strong> of the closed interval <InlineMath>{'[a, b]'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Consequences of the Axioms</h2>

      <Callout type="info">
        <p className="font-semibold mb-2">Key Results</p>
        <ul className="list-disc list-inside space-y-2">
          <li>A single point has zero area</li>
          <li>A line segment has zero area</li>
          <li>The empty set <InlineMath>{'\\varnothing'}</InlineMath> is measurable with <InlineMath>{'a(\\varnothing) = 0'}</InlineMath></li>
          <li>Every triangle is measurable with area <InlineMath>{'\\frac{1}{2} \\times \\text{base} \\times \\text{height}'}</InlineMath></li>
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
