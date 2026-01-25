import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { CantorDiagonalDemo } from '@/components/visualizations';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      {/* ========== INTRODUCTION ========== */}
      <section className="mb-12">
        <p className="mb-4">
          We have just shown that many infinite sets are countable - even such sets as the
          rationals, for which it is not obvious how to arrange as a sequence. After such
          examples, one may begin to hope that other infinite sets, such as the real numbers,
          are also countable.
        </p>
        <p className="mb-4">
          It was thus a great shock when <strong>Georg Cantor</strong> (1845-1918) showed in
          1873 that certain sets - including the real numbers <Math>{`\\mathbf{R}`}</Math> - are
          in fact <strong>uncountable</strong>. No matter how hard you try, you cannot arrange
          the real numbers as a sequence <Math>{`a_0, a_1, a_2, \\ldots`}</Math>
        </p>
        <Callout type="info">
          Of course, <Math>{`\\mathbf{R}`}</Math> can <em>contain</em> many infinite sequences
          (e.g., <Math>{`0, 1, 2, 3, 4, \\ldots`}</Math>). However, what Cantor proved is that
          no such sequence can ever <em>exhaust</em> the real numbers - there will always be
          some real numbers not covered by that sequence.
        </Callout>

        {/* Interactive Visualization */}
        <div className="my-8">
          <CantorDiagonalDemo />
        </div>
      </section>

      {/* ========== POWER SETS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Power Sets</h2>

        <p className="mb-4">
          Recall from Section 3.4 that if <Math>X</Math> is a set, then the <strong>power
          set</strong> of <Math>X</Math>, denoted <Math>{`2^X`}</Math>, is the set of all
          subsets of <Math>X</Math>:
        </p>
        <MathBlock>{`2^X := \\{A : A \\subseteq X\\}.`}</MathBlock>

        <Example
          id="ex-power-set"
          title="Example: Power Set of a Small Set"
        >
          <p className="mb-2">
            For <Math>{`X = \\{1, 2\\}`}</Math>, the power set is:
          </p>
          <MathBlock>{`2^{\\{1,2\\}} = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}.`}</MathBlock>
          <p className="mt-2">
            In general, if <Math>X</Math> has <Math>n</Math> elements, then <Math>{`2^X`}</Math> has{' '}
            <Math>{`2^n`}</Math> elements - hence the notation.
          </p>
        </Example>
      </section>

      {/* ========== CANTOR'S THEOREM ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cantor's Theorem</h2>

        <Theorem
          id="thm-8.3.1"
          title="Theorem 8.3.1: Cantor's Theorem"
          statement={
            <>
              Let <Math>X</Math> be an arbitrary set (finite or infinite). Then the
              sets <Math>X</Math> and <Math>{`2^X`}</Math> cannot have equal cardinality.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                Suppose for sake of contradiction that <Math>X</Math> and <Math>{`2^X`}</Math> have
                equal cardinality. Then there exists a bijection <Math>{`f: X \\to 2^X`}</Math>.
              </p>
              <p className="mb-2">
                Now consider the set:
              </p>
              <MathBlock>{`A := \\{x \\in X : x \\notin f(x)\\}.`}</MathBlock>
              <p className="my-2">
                This set is well-defined since <Math>{`f(x)`}</Math> is an element of <Math>{`2^X`}</Math> and
                is hence a subset of <Math>X</Math>. Clearly <Math>{`A \\subseteq X`}</Math>, so{' '}
                <Math>{`A \\in 2^X`}</Math>.
              </p>
              <p className="mb-2">
                Since <Math>f</Math> is a bijection, there must exist some <Math>{`x \\in X`}</Math> such
                that <Math>{`f(x) = A`}</Math>. Now we ask: is <Math>{`x \\in A`}</Math>?
              </p>
              <ul className="list-disc ml-6 mb-2">
                <li>
                  If <Math>{`x \\in A`}</Math>, then by definition of <Math>A</Math>, we
                  have <Math>{`x \\notin f(x)`}</Math>. But <Math>{`f(x) = A`}</Math>,
                  so <Math>{`x \\notin A`}</Math>. Contradiction!
                </li>
                <li>
                  If <Math>{`x \\notin A`}</Math>, then <Math>{`x \\notin f(x)`}</Math>. By definition
                  of <Math>A</Math>, this means <Math>{`x \\in A`}</Math>. Contradiction!
                </li>
              </ul>
              <p>
                Thus in either case we have a contradiction, so no such bijection can exist.
              </p>
            </>
          }
        />

        <Callout type="warning">
          <strong>Connection to Russell's Paradox:</strong> The reader should compare this
          proof with Russell's paradox from Section 3.2. The key insight is that a bijection
          between <Math>X</Math> and <Math>{`2^X`}</Math> would come dangerously close to the
          concept of a set "containing itself."
        </Callout>

        <p className="my-4">
          This proof technique is often called <strong>Cantor's diagonal argument</strong>,
          though it appears more explicitly diagonal when applied to sequences.
        </p>
      </section>

      {/* ========== 2^N IS UNCOUNTABLE ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Power Set of N is Uncountable</h2>

        <Theorem
          id="cor-8.3.3"
          title="Corollary 8.3.3"
          statement={
            <>
              <Math>{`2^{\\mathbf{N}}`}</Math> is uncountable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                By Theorem 8.3.1, <Math>{`2^{\\mathbf{N}}`}</Math> cannot have equal cardinality
                with <Math>{`\\mathbf{N}`}</Math>. Thus <Math>{`2^{\\mathbf{N}}`}</Math> is either
                uncountable or finite.
              </p>
              <p className="mb-2">
                However, <Math>{`2^{\\mathbf{N}}`}</Math> contains as a subset the set of
                singletons <Math>{`\\{\\{n\\} : n \\in \\mathbf{N}\\}`}</Math>, which is clearly
                bijective to <Math>{`\\mathbf{N}`}</Math> and hence countably infinite.
              </p>
              <p>
                Thus <Math>{`2^{\\mathbf{N}}`}</Math> cannot be finite (by Proposition 3.6.14),
                and is hence uncountable.
              </p>
            </>
          }
        />

        <Example
          id="ex-power-set-N"
          title="Elements of 2^N"
        >
          <p className="mb-2">
            Elements of <Math>{`2^{\\mathbf{N}}`}</Math> are subsets of <Math>{`\\mathbf{N}`}</Math>.
            For example:
          </p>
          <ul className="list-disc ml-6">
            <li><Math>{`\\emptyset`}</Math> (the empty set)</li>
            <li><Math>{`\\{0\\}`}</Math>, <Math>{`\\{1\\}`}</Math>, <Math>{`\\{0, 1\\}`}</Math> (finite sets)</li>
            <li><Math>{`\\{0, 2, 4, 6, \\ldots\\}`}</Math> (the even numbers)</li>
            <li><Math>{`\\{n^2 : n \\in \\mathbf{N}\\}`}</Math> (the perfect squares)</li>
            <li><Math>{`\\mathbf{N}`}</Math> itself</li>
          </ul>
          <p className="mt-2">
            The uncountability of <Math>{`2^{\\mathbf{N}}`}</Math> means there are "more" subsets
            of <Math>{`\\mathbf{N}`}</Math> than there are natural numbers!
          </p>
        </Example>
      </section>

      {/* ========== R IS UNCOUNTABLE ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Real Numbers are Uncountable</h2>

        <p className="mb-4">
          Cantor's theorem has the following important (and unintuitive) consequence:
        </p>

        <Theorem
          id="cor-8.3.4"
          title="Corollary 8.3.4"
          statement={
            <>
              <Math>{`\\mathbf{R}`}</Math> is uncountable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                We construct an injection from <Math>{`2^{\\mathbf{N}}`}</Math> to{' '}
                <Math>{`\\mathbf{R}`}</Math>. Define <Math>{`f: 2^{\\mathbf{N}} \\to \\mathbf{R}`}</Math> by:
              </p>
              <MathBlock>{`f(A) := \\sum_{n \\in A} 10^{-n}.`}</MathBlock>
              <p className="my-2">
                Since <Math>{`\\sum_{n=0}^{\\infty} 10^{-n}`}</Math> is absolutely convergent
                (by Lemma 7.3.3), the series <Math>{`\\sum_{n \\in A} 10^{-n}`}</Math> is also
                absolutely convergent for any <Math>{`A \\subseteq \\mathbf{N}`}</Math>.
                Thus <Math>f</Math> is well-defined.
              </p>
              <p className="mb-2">
                <strong>Claim:</strong> <Math>f</Math> is injective. Suppose <Math>{`A \\ne B`}</Math>.
                Let <Math>{`n_0 := \\min((A \\setminus B) \\cup (B \\setminus A))`}</Math> be the
                smallest index where they differ. WLOG, assume <Math>{`n_0 \\in A \\setminus B`}</Math>.
              </p>
              <p className="mb-2">
                Then:
              </p>
              <MathBlock>{`f(A) - f(B) = 10^{-n_0} + \\sum_{n > n_0, n \\in A} 10^{-n} - \\sum_{n > n_0, n \\in B} 10^{-n}.`}</MathBlock>
              <p className="my-2">
                The sum over <Math>{`n > n_0`}</Math> in <Math>B</Math> is at most{' '}
                <Math>{`\\sum_{n > n_0} 10^{-n} = \\frac{1}{9} \\cdot 10^{-n_0}`}</Math> (geometric series).
              </p>
              <p className="mb-2">
                Thus:
              </p>
              <MathBlock>{`f(A) - f(B) \\ge 10^{-n_0} - \\frac{1}{9} \\cdot 10^{-n_0} = \\frac{8}{9} \\cdot 10^{-n_0} > 0.`}</MathBlock>
              <p className="my-2">
                So <Math>{`f(A) \\ne f(B)`}</Math>, proving <Math>f</Math> is injective.
              </p>
              <p>
                Since <Math>f</Math> is injective, <Math>{`f(2^{\\mathbf{N}})`}</Math> has the same
                cardinality as <Math>{`2^{\\mathbf{N}}`}</Math> and is thus uncountable.
                Since <Math>{`f(2^{\\mathbf{N}}) \\subseteq \\mathbf{R}`}</Math>, this
                forces <Math>{`\\mathbf{R}`}</Math> to be uncountable (by Corollary 8.1.7).
              </p>
            </>
          }
        />

        <Callout type="info">
          <strong>The diagonal argument directly:</strong> There is a more direct proof that{' '}
          <Math>{`\\mathbf{R}`}</Math> is uncountable using decimal expansions. If we had an
          enumeration <Math>{`r_0, r_1, r_2, \\ldots`}</Math> of all reals, we could construct
          a real <Math>r</Math> whose <Math>n</Math>-th decimal digit differs from the{' '}
          <Math>n</Math>-th digit of <Math>{`r_n`}</Math>. This <Math>r</Math> would differ
          from every <Math>{`r_n`}</Math>, contradicting the assumption that our list was complete.
        </Callout>
      </section>

      {/* ========== HIERARCHY OF INFINITIES ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">A Hierarchy of Infinities</h2>

        <p className="mb-4">
          Cantor's theorem reveals something profound: there is not just one "infinity,"
          but an entire <em>hierarchy</em> of infinities, each strictly larger than the last.
        </p>

        <Definition
          id="def-cardinality-comparison"
          title="Definition: Comparing Cardinalities"
        >
          <p className="mb-2">
            A set <Math>A</Math> has <strong>lesser or equal cardinality</strong> than a
            set <Math>B</Math>, written <Math>{`|A| \\le |B|`}</Math>, iff there exists an
            injective map <Math>{`f: A \\to B`}</Math>.
          </p>
          <p>
            A set <Math>A</Math> has <strong>strictly lesser cardinality</strong> than <Math>B</Math>,
            written <Math>{`|A| < |B|`}</Math>, iff <Math>{`|A| \\le |B|`}</Math> but <Math>A</Math> and{' '}
            <Math>B</Math> do not have equal cardinality.
          </p>
        </Definition>

        <Theorem
          id="thm-hierarchy"
          title="Theorem: Strict Hierarchy of Power Sets"
          statement={
            <>
              For any set <Math>X</Math>, we have <Math>{`|X| < |2^X|`}</Math>.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                The map <Math>{`x \\mapsto \\{x\\}`}</Math> is an injection from <Math>X</Math> to{' '}
                <Math>{`2^X`}</Math>, so <Math>{`|X| \\le |2^X|`}</Math>.
              </p>
              <p>
                By Cantor's theorem, <Math>X</Math> and <Math>{`2^X`}</Math> cannot have equal
                cardinality. Thus <Math>{`|X| < |2^X|`}</Math>.
              </p>
            </>
          }
        />

        <p className="my-4">
          This gives us an infinite chain of ever-larger infinities:
        </p>
        <MathBlock>{`|\\mathbf{N}| < |2^{\\mathbf{N}}| < |2^{2^{\\mathbf{N}}}| < |2^{2^{2^{\\mathbf{N}}}}| < \\cdots`}</MathBlock>

        <Callout type="warning">
          <strong>The Continuum Hypothesis:</strong> Corollary 8.3.4 shows that{' '}
          <Math>{`|\\mathbf{N}| < |\\mathbf{R}|`}</Math>. One could ask: is there any set
          with cardinality strictly between <Math>{`|\\mathbf{N}|`}</Math> and{' '}
          <Math>{`|\\mathbf{R}|`}</Math>? The <strong>Continuum Hypothesis</strong> asserts
          that no such set exists.
          <p className="mt-2">
            Remarkably, it was shown by Kurt Gödel (1938) and Paul Cohen (1963) that this
            hypothesis is <em>independent</em> of the standard axioms of set theory - it
            can neither be proved nor disproved!
          </p>
        </Callout>
      </section>

      {/* ========== SCHRODER-BERNSTEIN ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Schröder-Bernstein Theorem</h2>

        <p className="mb-4">
          A natural question arises: if <Math>{`|A| \\le |B|`}</Math> and{' '}
          <Math>{`|B| \\le |A|`}</Math>, must <Math>A</Math> and <Math>B</Math> have equal
          cardinality? The answer is yes, though the proof is non-trivial.
        </p>

        <Theorem
          id="thm-schroder-bernstein"
          title="Theorem: Schröder-Bernstein"
          statement={
            <>
              If <Math>A</Math> and <Math>B</Math> are sets such that <Math>{`|A| \\le |B|`}</Math> and{' '}
              <Math>{`|B| \\le |A|`}</Math>, then <Math>A</Math> and <Math>B</Math> have equal cardinality.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                <em>(Sketch)</em> Let <Math>{`f: A \\to B`}</Math> and <Math>{`g: B \\to A`}</Math> be
                injections. Consider <Math>{`C = g(B) \\subseteq A`}</Math> and{' '}
                <Math>{`h = g \\circ f: A \\to A`}</Math>, which maps <Math>A</Math> injectively into{' '}
                <Math>C</Math>.
              </p>
              <p className="mb-2">
                Define sets <Math>{`D_0 = A \\setminus C`}</Math> and <Math>{`D_{n+1} = h(D_n)`}</Math> recursively.
                Let <Math>{`D = \\bigcup_{n=0}^{\\infty} D_n`}</Math>.
              </p>
              <p className="mb-2">
                One can show that the map <Math>{`\\phi: A \\to B`}</Math> defined by:
              </p>
              <MathBlock>{`\\phi(x) = \\begin{cases} f(x) & \\text{if } x \\in D \\\\ g^{-1}(x) & \\text{if } x \\notin D \\end{cases}`}</MathBlock>
              <p className="mt-2">
                is a well-defined bijection between <Math>A</Math> and <Math>B</Math>.
              </p>
            </>
          }
        />

        <p className="my-4">
          This theorem, named after Ernst Schröder (1841-1902) and Felix Bernstein (1878-1956),
          is extremely useful for proving that two sets have the same cardinality without
          explicitly constructing a bijection.
        </p>
      </section>

      {/* ========== EXERCISES ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.3.1</p>
            <p>
              Let <Math>X</Math> be a finite set of cardinality <Math>n</Math>. Show
              that <Math>{`2^X`}</Math> is a finite set of cardinality <Math>{`2^n`}</Math>.
              (Hint: use induction on <Math>n</Math>.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.3.2</p>
            <p>
              Let <Math>{`A, B, C`}</Math> be sets such that <Math>{`A \\subseteq B \\subseteq C`}</Math>,
              and suppose there is a bijection <Math>{`f: C \\to A`}</Math>. Define
              sets <Math>{`D_0, D_1, D_2, \\ldots`}</Math> recursively by <Math>{`D_0 := B \\setminus A`}</Math> and{' '}
              <Math>{`D_{n+1} := f(D_n)`}</Math>. Prove that these sets are pairwise disjoint.
              Then show that <Math>A</Math> and <Math>B</Math> have the same cardinality.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.3.3</p>
            <p>
              Using Exercise 8.3.2, prove the Schröder-Bernstein theorem: if <Math>A</Math> has
              lesser or equal cardinality to <Math>B</Math> and <Math>B</Math> has lesser or
              equal cardinality to <Math>A</Math>, then <Math>A</Math> and <Math>B</Math> have
              equal cardinality.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.3.4</p>
            <p>
              Show that for any set <Math>X</Math>, we have <Math>{`|X| < |2^X|`}</Math> (strictly
              lesser cardinality). Also show that if <Math>{`|A| < |B|`}</Math> and{' '}
              <Math>{`|B| < |C|`}</Math>, then <Math>{`|A| < |C|`}</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.3.5</p>
            <p>
              Show that no power set (i.e., a set of the form <Math>{`2^X`}</Math>) can be
              countably infinite.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.3.6</p>
            <p>
              Show that the set of all functions <Math>{`f: \\mathbf{N} \\to \\{0, 1\\}`}</Math> has
              the same cardinality as <Math>{`2^{\\mathbf{N}}`}</Math>. (Hint: identify a subset{' '}
              <Math>{`A \\subseteq \\mathbf{N}`}</Math> with its characteristic function.)
            </p>
          </div>
        </div>
      </section>

      {/* ========== KEY TAKEAWAYS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Cantor's Theorem
            </h3>
            <p className="text-sm">
              For any set <Math>X</Math>, the power set <Math>{`2^X`}</Math> has strictly
              larger cardinality than <Math>X</Math>. No bijection between them can exist.
            </p>
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              R is Uncountable
            </h3>
            <p className="text-sm">
              The real numbers cannot be arranged in a sequence. There are "more" real
              numbers than natural numbers, even though both sets are infinite.
            </p>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              Hierarchy of Infinities
            </h3>
            <p className="text-sm">
              There are infinitely many "sizes" of infinity:{' '}
              <Math>{`|\\mathbf{N}| < |2^{\\mathbf{N}}| < |2^{2^{\\mathbf{N}}}| < \\cdots`}</Math>
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
              Schröder-Bernstein
            </h3>
            <p className="text-sm">
              If <Math>{`|A| \\le |B|`}</Math> and <Math>{`|B| \\le |A|`}</Math>, then{' '}
              <Math>{`|A| = |B|`}</Math>. Mutual injections imply a bijection.
            </p>
          </div>
        </div>
      </section>

      {/* ========== LOOKING AHEAD ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
        <p className="mb-4">
          In the next section, we will study the <strong>Axiom of Choice</strong>, the final
          axiom of Zermelo-Fraenkel set theory. This powerful axiom allows us to make
          simultaneous choices from infinitely many sets and has profound consequences
          throughout mathematics.
        </p>
        <p>
          Following that, we will examine <strong>ordered sets</strong> and the
          well-ordering principle, completing our foundational study of infinite sets
          before moving on to the theory of continuous functions on <Math>{`\\mathbf{R}`}</Math>.
        </p>
      </section>
    </LessonLayout>
  );
}
