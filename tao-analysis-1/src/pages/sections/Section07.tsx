import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        In order to do analysis, it is not particularly useful to just have the notion of a set;
        we also need the notion of a <strong className="text-indigo-400">function</strong> from
        one set to another. Informally, a function <Math>{'f: X \\to Y'}</Math> from one
        set <Math>{'X'}</Math> to another set <Math>{'Y'}</Math> is an operation which assigns
        to each element (or "input") <Math>{'x \\in X'}</Math>, a single element (or "output"){' '}
        <Math>{'f(x)'}</Math> in <Math>{'Y'}</Math>.
      </p>

      {/* Definition of Functions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Defining Functions
      </h2>

      <Definition title="Definition 3.3.1 (Functions)">
        <p className="mb-3">
          Let <Math>{'X'}</Math>, <Math>{'Y'}</Math> be sets, and let <Math>{'P(x, y)'}</Math> be
          a property pertaining to an object <Math>{'x \\in X'}</Math> and an
          object <Math>{'y \\in Y'}</Math>, such that for every <Math>{'x \\in X'}</Math>, there
          is <strong className="text-blue-300">exactly one</strong> <Math>{'y \\in Y'}</Math> for
          which <Math>{'P(x, y)'}</Math> is true (this is sometimes known as the{' '}
          <em>vertical line test</em>).
        </p>
        <p className="mb-3">
          Then we define the <strong className="text-blue-300">function</strong>{' '}
          <Math>{'f: X \\to Y'}</Math> <em>defined by <Math>{'P'}</Math> on the
          domain <Math>{'X'}</Math> and range <Math>{'Y'}</Math></em> to be the object which,
          given any input <Math>{'x \\in X'}</Math>, assigns an output{' '}
          <Math>{'f(x) \\in Y'}</Math>, defined to be the unique object <Math>{'f(x)'}</Math> for
          which <Math>{'P(x, f(x))'}</Math> is true. Thus, for any <Math>{'x \\in X'}</Math> and{' '}
          <Math>{'y \\in Y'}</Math>,
        </p>
        <MathBlock>{`y = f(x) \\iff P(x, y) \\text{ is true}.`}</MathBlock>
      </Definition>

      <Callout type="info">
        <strong>Terminology</strong>
        <p className="mt-2">
          Functions are also referred to as <strong>maps</strong> or <strong>transformations</strong>,
          depending on the context. They are also sometimes called <strong>morphisms</strong>,
          although more precisely, a morphism refers to a more general class of object.
        </p>
      </Callout>

      <Example title="Example 3.3.2: The Increment Function">
        <p className="mb-3">
          Let <Math>{'X = \\mathbb{N}'}</Math>, <Math>{'Y = \\mathbb{N}'}</Math>, and
          let <Math>{'P(x, y)'}</Math> be the property that <Math>{'y = x\\texttt{++}'}</Math>.
          Then for each <Math>{'x \\in \\mathbb{N}'}</Math> there is exactly
          one <Math>{'y'}</Math> for which <Math>{'P(x, y)'}</Math> is true,
          namely <Math>{'y = x\\texttt{++}'}</Math>.
        </p>
        <p className="mb-3">
          Thus we can define a function <Math>{'f: \\mathbb{N} \\to \\mathbb{N}'}</Math> associated
          to this property, so that <Math>{'f(x) = x\\texttt{++}'}</Math> for all <Math>{'x'}</Math>;
          this is the <strong className="text-blue-300">increment function</strong> on{' '}
          <Math>{'\\mathbb{N}'}</Math>.
        </p>
        <p className="text-dark-400">
          Thus for instance <Math>{'f(4) = 5'}</Math>, <Math>{'f(2n + 3) = 2n + 4'}</Math> and
          so forth.
        </p>
      </Example>

      <Example title="Example 3.3.3: Why the Decrement Function Needs Care">
        <p className="mb-3">
          One might hope to define a <em>decrement</em> function <Math>{'g: \\mathbb{N} \\to \\mathbb{N}'}</Math> associated
          to the property <Math>{'P(x, y)'}</Math> defined by <Math>{'y\\texttt{++} = x'}</Math>,
          i.e., <Math>{'g(x)'}</Math> would be the number whose increment is <Math>{'x'}</Math>.
        </p>
        <p className="mb-3 text-amber-300">
          Unfortunately this does <em>not</em> define a function, because when <Math>{'x = 0'}</Math> there
          is no natural number <Math>{'y'}</Math> whose increment is equal to <Math>{'x'}</Math> (Axiom 2.3).
        </p>
        <p className="text-dark-300">
          On the other hand, we <em>can</em> legitimately define a decrement
          function <Math>{'h: \\mathbb{N} \\setminus \\{0\\} \\to \\mathbb{N}'}</Math> associated
          to this property. Thus <Math>{'h(4) = 3'}</Math>, but <Math>{'h(0)'}</Math> is undefined
          since 0 is not in the domain.
        </p>
      </Example>

      {/* Explicit vs Implicit Definitions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Explicit vs Implicit Definitions
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="font-semibold text-blue-300 mb-3">Explicit Definition</h3>
          <p className="text-dark-300">
            Specify the domain, range, and how to generate the output <Math>{'f(x)'}</Math> from
            each input.
          </p>
          <p className="text-dark-400 mt-2 text-sm">
            Example: <Math>{'f(x) := x\\texttt{++}'}</Math> with domain and range <Math>{'\\mathbb{N}'}</Math>.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <h3 className="font-semibold text-purple-300 mb-3">Implicit Definition</h3>
          <p className="text-dark-300">
            Specify what property <Math>{'P(x, y)'}</Math> links the input <Math>{'x'}</Math> with
            the output <Math>{'f(x)'}</Math>.
          </p>
          <p className="text-dark-400 mt-2 text-sm">
            Example: <Math>{'\\sqrt{x}'}</Math> is defined implicitly by <Math>{'(\\sqrt{x})^2 = x'}</Math>.
          </p>
        </div>
      </div>

      <Callout type="warning">
        <strong>Important Note</strong>
        <p className="mt-2">
          An implicit definition is only valid if we know that for every input there
          is <em>exactly one</em> output which obeys the implicit relation.
        </p>
      </Callout>

      <p className="text-dark-300 mb-6">
        We observe that functions obey the <strong className="text-blue-300">axiom of substitution</strong>:
        if <Math>{'x = x\''}</Math>, then <Math>{'f(x) = f(x\')'}</Math>. In other words,{' '}
        <em>equal inputs imply equal outputs</em>. However, unequal inputs do not necessarily
        ensure unequal outputs.
      </p>

      <Example title="Example 3.3.4: The Constant Function">
        <p className="mb-3">
          Let <Math>{'X = \\mathbb{N}'}</Math>, <Math>{'Y = \\mathbb{N}'}</Math>, and
          let <Math>{'P(x, y)'}</Math> be the property that <Math>{'y = 7'}</Math>. Then
          for every <Math>{'x \\in \\mathbb{N}'}</Math> there is exactly
          one <Math>{'y'}</Math> for which <Math>{'P(x, y)'}</Math> is true, namely 7.
        </p>
        <p className="text-dark-300">
          This gives us the <strong className="text-blue-300">constant function</strong> which
          assigns <Math>{'f(x) = 7'}</Math> to each input. Different inputs can generate the
          same output!
        </p>
      </Example>

      {/* Equality of Functions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Equality of Functions
      </h2>

      <Definition title="Definition 3.3.7 (Equality of functions)">
        <p className="mb-3">
          Two functions <Math>{'f: X \\to Y'}</Math>, <Math>{'g: X \\to Y'}</Math> with the same
          domain and range are said to be <strong className="text-blue-300">equal</strong>,{' '}
          <Math>{'f = g'}</Math>, if and only if <Math>{'f(x) = g(x)'}</Math> for
          all <Math>{'x \\in X'}</Math>.
        </p>
        <p className="text-dark-400 text-sm">
          (If <Math>{'f(x)'}</Math> and <Math>{'g(x)'}</Math> agree for some values
          of <Math>{'x'}</Math>, but not others, then we do not consider <Math>{'f'}</Math> and{' '}
          <Math>{'g'}</Math> to be equal.)
        </p>
      </Definition>

      <Example title="Example 3.3.8">
        <ul className="space-y-2 text-dark-300">
          <li>
            The functions <Math>{'x \\mapsto x^2 + 2x + 1'}</Math> and{' '}
            <Math>{'x \\mapsto (x+1)^2'}</Math> are equal on the domain <Math>{'\\mathbb{R}'}</Math>.
          </li>
          <li>
            The functions <Math>{'x \\mapsto x'}</Math> and <Math>{'x \\mapsto |x|'}</Math> are
            equal on the positive real axis, but are <em>not</em> equal on{' '}
            <Math>{'\\mathbb{R}'}</Math>.
          </li>
        </ul>
        <p className="mt-3 text-amber-300">
          The concept of equality of functions can depend on the choice of domain!
        </p>
      </Example>

      <Example title="Example 3.3.9: The Empty Function">
        <p className="mb-3">
          A rather boring example is the <strong className="text-blue-300">empty function</strong>{' '}
          <Math>{'f: \\emptyset \\to X'}</Math> from the empty set to an arbitrary set{' '}
          <Math>{'X'}</Math>. Since the empty set has no elements, we do not need to specify
          what <Math>{'f'}</Math> does to any input.
        </p>
        <p className="text-dark-400">
          For each set <Math>{'X'}</Math>, there is only one function from <Math>{'\\emptyset'}</Math> to{' '}
          <Math>{'X'}</Math>, since Definition 3.3.7 asserts that all functions from{' '}
          <Math>{'\\emptyset'}</Math> to <Math>{'X'}</Math> are equal.
        </p>
      </Example>

      {/* Composition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Composition of Functions
      </h2>

      <Definition title="Definition 3.3.10 (Composition)">
        <p className="mb-3">
          Let <Math>{'f: X \\to Y'}</Math> and <Math>{'g: Y \\to Z'}</Math> be two functions,
          such that the range of <Math>{'f'}</Math> is the same set as the domain of{' '}
          <Math>{'g'}</Math>. We then define the <strong className="text-blue-300">composition</strong>{' '}
          <Math>{'g \\circ f: X \\to Z'}</Math> of the two functions <Math>{'g'}</Math> and{' '}
          <Math>{'f'}</Math> to be the function defined explicitly by the formula
        </p>
        <MathBlock>{`(g \\circ f)(x) := g(f(x)).`}</MathBlock>
        <p className="text-dark-400 text-sm mt-3">
          If the range of <Math>{'f'}</Math> does not match the domain of <Math>{'g'}</Math>,
          we leave the composition <Math>{'g \\circ f'}</Math> undefined.
        </p>
      </Definition>

      <Example title="Example 3.3.11">
        <p className="mb-3">
          Let <Math>{'f: \\mathbb{N} \\to \\mathbb{N}'}</Math> be the function{' '}
          <Math>{'f(n) := 2n'}</Math>, and let <Math>{'g: \\mathbb{N} \\to \\mathbb{N}'}</Math> be
          the function <Math>{'g(n) := n + 3'}</Math>. Then:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-dark-800 rounded-lg">
            <p className="font-semibold text-blue-300 mb-2"><Math>{'g \\circ f'}</Math></p>
            <MathBlock>{`g \\circ f(n) = g(f(n)) = g(2n) = 2n + 3`}</MathBlock>
            <p className="text-dark-400 text-sm mt-2">
              <Math>{'g \\circ f(1) = 5'}</Math>, <Math>{'g \\circ f(2) = 7'}</Math>
            </p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg">
            <p className="font-semibold text-purple-300 mb-2"><Math>{'f \\circ g'}</Math></p>
            <MathBlock>{`f \\circ g(n) = f(g(n)) = f(n+3) = 2n + 6`}</MathBlock>
            <p className="text-dark-400 text-sm mt-2">
              <Math>{'f \\circ g(1) = 8'}</Math>, <Math>{'f \\circ g(2) = 10'}</Math>
            </p>
          </div>
        </div>
        <p className="mt-4 text-amber-300">
          This shows that composition is <strong>not commutative</strong>:{' '}
          <Math>{'f \\circ g'}</Math> and <Math>{'g \\circ f'}</Math> are not necessarily the
          same function.
        </p>
      </Example>

      <Theorem title="Lemma 3.3.12 (Composition is associative)">
        <p className="mb-3">
          Let <Math>{'f: X \\to Y'}</Math>, <Math>{'g: Y \\to Z'}</Math>, and{' '}
          <Math>{'h: Z \\to W'}</Math> be functions. Then
        </p>
        <MathBlock>{`h \\circ (g \\circ f) = (h \\circ g) \\circ f.`}</MathBlock>
        <details className="mt-4">
          <summary className="cursor-pointer text-indigo-400 hover:text-indigo-300">
            Show proof
          </summary>
          <div className="mt-3 p-4 bg-dark-800 rounded-lg">
            <p className="text-dark-300 mb-3">
              Since <Math>{'g \\circ f'}</Math> is a function from <Math>{'X'}</Math> to{' '}
              <Math>{'Z'}</Math>, <Math>{'h \\circ (g \\circ f)'}</Math> is a function
              from <Math>{'X'}</Math> to <Math>{'W'}</Math>. Similarly{' '}
              <Math>{'(h \\circ g) \\circ f'}</Math> is also a function from{' '}
              <Math>{'X'}</Math> to <Math>{'W'}</Math>. To check they are equal, we verify that
              for all <Math>{'x \\in X'}</Math>:
            </p>
            <MathBlock>{`\\begin{aligned}
(h \\circ (g \\circ f))(x) &= h((g \\circ f)(x)) \\\\
&= h(g(f(x))) \\\\
&= (h \\circ g)(f(x)) \\\\
&= ((h \\circ g) \\circ f)(x)
\\end{aligned}`}</MathBlock>
            <p className="text-dark-400 text-sm mt-3 text-right">□</p>
          </div>
        </details>
      </Theorem>

      <Callout type="info">
        <strong>Notation Note (Remark 3.3.13)</strong>
        <p className="mt-2">
          While <Math>{'g'}</Math> appears to the left of <Math>{'f'}</Math> in the
          expression <Math>{'g \\circ f'}</Math>, the function <Math>{'g \\circ f'}</Math> applies
          the right-most function <Math>{'f'}</Math> first, before applying <Math>{'g'}</Math>.
          This can be confusing at first; it arises because we traditionally place a
          function <Math>{'f'}</Math> to the <em>left</em> of its input <Math>{'x'}</Math>.
        </p>
      </Callout>

      {/* Types of Functions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Special Types of Functions
      </h2>

      <Definition title="Definition 3.3.14 (One-to-one / Injective)">
        <p className="mb-3">
          A function <Math>{'f'}</Math> is <strong className="text-blue-300">one-to-one</strong> (or{' '}
          <strong className="text-blue-300">injective</strong>) if different elements map to
          different elements:
        </p>
        <MathBlock>{`x \\neq x' \\implies f(x) \\neq f(x').`}</MathBlock>
        <p className="mt-3">Equivalently, a function is one-to-one if</p>
        <MathBlock>{`f(x) = f(x') \\implies x = x'.`}</MathBlock>
      </Definition>

      <Example title="Example 3.3.15">
        <p className="mb-3">
          The function <Math>{'f: \\mathbb{Z} \\to \\mathbb{Z}'}</Math> defined
          by <Math>{'f(n) := n^2'}</Math> is <em>not</em> one-to-one because the distinct
          elements <Math>{'-1, 1'}</Math> map to the same element 1.
        </p>
        <p className="text-dark-300">
          However, if we restrict this function to the natural numbers, defining{' '}
          <Math>{'g: \\mathbb{N} \\to \\mathbb{Z}'}</Math> by <Math>{'g(n) := n^2'}</Math>,
          then <Math>{'g'}</Math> <em>is</em> one-to-one.
        </p>
        <p className="mt-3 text-amber-300">
          The notion of a one-to-one function depends not just on what the function does,
          but also what its domain is.
        </p>
      </Example>

      <Definition title="Definition 3.3.17 (Onto / Surjective)">
        <p className="mb-3">
          A function <Math>{'f: X \\to Y'}</Math> is <strong className="text-blue-300">onto</strong> (or{' '}
          <strong className="text-blue-300">surjective</strong>) if <Math>{'f(X) = Y'}</Math>,
          i.e., every element in <Math>{'Y'}</Math> comes from applying <Math>{'f'}</Math> to
          some element in <Math>{'X'}</Math>:
        </p>
        <MathBlock>{`\\text{For every } y \\in Y, \\text{ there exists } x \\in X \\text{ such that } f(x) = y.`}</MathBlock>
      </Definition>

      <Example title="Example 3.3.18">
        <p className="mb-3">
          The function <Math>{'f: \\mathbb{Z} \\to \\mathbb{Z}'}</Math> defined
          by <Math>{'f(n) := n^2'}</Math> is <em>not</em> onto because the negative numbers
          are not in the image of <Math>{'f'}</Math>.
        </p>
        <p className="text-dark-300">
          However, if we restrict the range to the set of square
          numbers <Math>{'A := \\{n^2 : n \\in \\mathbb{Z}\\}'}</Math>, then the
          function <Math>{'g: \\mathbb{Z} \\to A'}</Math> defined
          by <Math>{'g(n) := n^2'}</Math> <em>is</em> onto.
        </p>
        <p className="mt-3 text-amber-300">
          The notion of an onto function depends not just on what the function does,
          but also what its range is.
        </p>
      </Example>

      <Definition title="Definition 3.3.20 (Bijective / Invertible)">
        <p>
          Functions <Math>{'f: X \\to Y'}</Math> which are both one-to-one and onto are also
          called <strong className="text-blue-300">bijective</strong> or{' '}
          <strong className="text-blue-300">invertible</strong>.
        </p>
      </Definition>

      <Example title="Example 3.3.21">
        <div className="space-y-4">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-dark-300">
              Let <Math>{'f: \\{0, 1, 2\\} \\to \\{3, 4\\}'}</Math> with <Math>{'f(0) := 3'}</Math>,{' '}
              <Math>{'f(1) := 3'}</Math>, <Math>{'f(2) := 4'}</Math>. This is{' '}
              <strong className="text-red-300">not bijective</strong> because setting{' '}
              <Math>{'y = 3'}</Math>, there is more than one <Math>{'x'}</Math> such that{' '}
              <Math>{'f(x) = y'}</Math> (failure of injectivity).
            </p>
          </div>
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-dark-300">
              Let <Math>{'g: \\{0, 1\\} \\to \\{2, 3, 4\\}'}</Math> with <Math>{'g(0) := 2'}</Math>,{' '}
              <Math>{'g(1) := 3'}</Math>. This is{' '}
              <strong className="text-red-300">not bijective</strong> because setting{' '}
              <Math>{'y = 4'}</Math>, there is no <Math>{'x'}</Math> for which{' '}
              <Math>{'g(x) = y'}</Math> (failure of surjectivity).
            </p>
          </div>
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <p className="text-dark-300">
              Let <Math>{'h: \\{0, 1, 2\\} \\to \\{3, 4, 5\\}'}</Math> with{' '}
              <Math>{'h(0) := 3'}</Math>, <Math>{'h(1) := 4'}</Math>, <Math>{'h(2) := 5'}</Math>.
              This <strong className="text-emerald-300">is bijective</strong>, because each of
              3, 4, 5 comes from exactly one element from 0, 1, 2.
            </p>
          </div>
        </div>
      </Example>

      {/* Inverses */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Inverse Functions
      </h2>

      <p className="text-dark-300 mb-6">
        If <Math>{'f'}</Math> is bijective, then for every <Math>{'y \\in Y'}</Math>, there
        is exactly one <Math>{'x'}</Math> such that <Math>{'f(x) = y'}</Math> (at least one
        because of surjectivity, and at most one because of injectivity). This value
        of <Math>{'x'}</Math> is denoted <Math>{'f^{-1}(y)'}</Math>; thus{' '}
        <Math>{'f^{-1}'}</Math> is a function from <Math>{'Y'}</Math> to <Math>{'X'}</Math>.
        We call <Math>{'f^{-1}'}</Math> the <strong className="text-blue-300">inverse</strong> of{' '}
        <Math>{'f'}</Math>.
      </p>

      <Callout type="warning">
        <strong>Common Error (Remark 3.3.24)</strong>
        <p className="mt-2">
          A common error is to say that a function <Math>{'f: X \\to Y'}</Math> is bijective
          iff "for every <Math>{'x'}</Math> in <Math>{'X'}</Math>, there is exactly
          one <Math>{'y'}</Math> in <Math>{'Y'}</Math> such that <Math>{'y = f(x)'}</Math>."
          This is <em>not</em> what it means for <Math>{'f'}</Math> to be bijective; rather,
          this is merely stating what it means for <Math>{'f'}</Math> to be a <em>function</em>.
          A function cannot map one element to two different elements.
        </p>
      </Callout>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.3.1</p>
          <p className="text-dark-400 mt-2">
            Show that the definition of equality in Definition 3.3.7 is reflexive, symmetric,
            and transitive. Also verify the substitution property: if <Math>{'f, \\tilde{f}: X \\to Y'}</Math> and{' '}
            <Math>{'g, \\tilde{g}: Y \\to Z'}</Math> are functions such that{' '}
            <Math>{'f = \\tilde{f}'}</Math> and <Math>{'g = \\tilde{g}'}</Math>,
            then <Math>{'g \\circ f = \\tilde{g} \\circ \\tilde{f}'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.3.2</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> and <Math>{'g: Y \\to Z'}</Math> be functions. Show
            that if <Math>{'f'}</Math> and <Math>{'g'}</Math> are both injective, then so
            is <Math>{'g \\circ f'}</Math>; similarly, show that if <Math>{'f'}</Math> and{' '}
            <Math>{'g'}</Math> are both surjective, then so is <Math>{'g \\circ f'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.3.5</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> and <Math>{'g: Y \\to Z'}</Math> be functions. Show
            that if <Math>{'g \\circ f'}</Math> is injective, then <Math>{'f'}</Math> must be
            injective. Is it true that <Math>{'g'}</Math> must also be injective? Show that
            if <Math>{'g \\circ f'}</Math> is surjective, then <Math>{'g'}</Math> must be
            surjective. Is it true that <Math>{'f'}</Math> must also be surjective?
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.3.6</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> be a bijective function, and let{' '}
            <Math>{'f^{-1}: Y \\to X'}</Math> be its inverse. Verify the cancellation
            laws <Math>{'f^{-1}(f(x)) = x'}</Math> for all <Math>{'x \\in X'}</Math> and{' '}
            <Math>{'f(f^{-1}(y)) = y'}</Math> for all <Math>{'y \\in Y'}</Math>. Conclude
            that <Math>{'f^{-1}'}</Math> is also invertible, and has <Math>{'f'}</Math> as its
            inverse (thus <Math>{'(f^{-1})^{-1} = f'}</Math>).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.3.7</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> and <Math>{'g: Y \\to Z'}</Math> be functions. Show
            that if <Math>{'f'}</Math> and <Math>{'g'}</Math> are bijective, then so
            is <Math>{'g \\circ f'}</Math>, and we have{' '}
            <Math>{'(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}'}</Math>.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Function</strong>: An assignment of exactly one
            output to each input (passes the "vertical line test").
          </li>
          <li>
            <strong className="text-dark-200">Injective (One-to-one)</strong>: Different inputs
            give different outputs.
          </li>
          <li>
            <strong className="text-dark-200">Surjective (Onto)</strong>: Every element of the
            range is hit by some input.
          </li>
          <li>
            <strong className="text-dark-200">Bijective</strong>: Both injective and surjective;
            has a well-defined inverse.
          </li>
          <li>
            <strong className="text-dark-200">Composition</strong>: Apply functions in sequence;
            associative but not commutative.
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
