import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <p className="italic text-gray-300 mb-6">
        In previous chapters we have been focusing primarily on sequences. Now we will look at
        functions not on the natural numbers <Math>\mathbb{'{N}'}</Math>, which are "discrete", but
        instead look at functions on a continuum such as the real line <Math>\mathbb{'{R}'}</Math>,
        or perhaps on an interval. Before we discuss functions, though, we must first set out some
        notation for subsets of the real line.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Intervals</h2>

      <Definition id="def-9.1.1" title="Definition 9.1.1: Intervals">
        <p>
          Let <Math>a, b \in \mathbb{'{R}'}^*</Math> be extended real numbers. We define the{' '}
          <strong>closed interval</strong> <Math>[a, b]</Math> by
        </p>
        <MathBlock>{`[a, b] := \\{ x \\in \\mathbb{R}^* : a \\leq x \\leq b \\}`}</MathBlock>
        <p className="mt-2">
          the <strong>half-open intervals</strong> <Math>[a, b)</Math> and <Math>(a, b]</Math> by
        </p>
        <MathBlock>{`[a, b) := \\{ x \\in \\mathbb{R}^* : a \\leq x < b \\}; \\quad (a, b] := \\{ x \\in \\mathbb{R}^* : a < x \\leq b \\}`}</MathBlock>
        <p className="mt-2">
          and the <strong>open interval</strong> <Math>(a, b)</Math> by
        </p>
        <MathBlock>{`(a, b) := \\{ x \\in \\mathbb{R}^* : a < x < b \\}`}</MathBlock>
        <p className="mt-2">
          We call <Math>a</Math> the <strong>left endpoint</strong> of these intervals, and{' '}
          <Math>b</Math> the <strong>right endpoint</strong>.
        </p>
      </Definition>

      <Callout type="note" className="my-6">
        <strong>Remark 9.1.2:</strong> We are overloading the parenthesis notation; for instance, we
        are now using <Math>(2, 3)</Math> to denote both an open interval from 2 to 3, as well as an
        ordered pair in <Math>\mathbb{'{R}'}^2</Math>. The meaning should be clear from context. In
        some texts, this is resolved by using reversed brackets: <Math>[a, b[</Math> for{' '}
        <Math>[a, b)</Math>, <Math>]a, b]</Math> for <Math>(a, b]</Math>, and <Math>]a, b[</Math>{' '}
        for <Math>(a, b)</Math>.
      </Callout>

      <Example id="ex-9.1.3" title="Examples 9.1.3">
        <p>
          If <Math>a</Math> and <Math>b</Math> are real numbers (not <Math>\pm\infty</Math>), then
          all of the above intervals are subsets of the real line. For instance,{' '}
          <Math>[2, 3) = \{'{x \\in \\mathbb{R} : 2 \\leq x < 3}'}\</Math>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The positive real axis <Math>\{'{x \\in \\mathbb{R} : x > 0}'}\</Math> is the open
            interval <Math>(0, +\infty)</Math>
          </li>
          <li>
            The non-negative real axis <Math>\{'{x \\in \\mathbb{R} : x \\geq 0}'}\</Math> is the
            half-open interval <Math>[0, +\infty)</Math>
          </li>
          <li>
            The real line <Math>\mathbb{'{R}'}</Math> itself is <Math>(-\infty, +\infty)</Math>
          </li>
          <li>
            The extended real line <Math>\mathbb{'{R}'}^*</Math> is <Math>[-\infty, +\infty]</Math>
          </li>
        </ul>
        <p className="mt-2">
          We refer to intervals with one infinite endpoint as <strong>half-infinite intervals</strong>,
          intervals with both endpoints infinite as <strong>doubly-infinite intervals</strong>, and
          all other intervals as <strong>bounded intervals</strong>.
        </p>
      </Example>

      <Example id="ex-9.1.4" title="Example 9.1.4: Degenerate intervals">
        <p>
          If <Math>{'a > b'}</Math> then all four intervals <Math>[a, b]</Math>, <Math>[a, b)</Math>,{' '}
          <Math>(a, b]</Math>, and <Math>(a, b)</Math> are the empty set. If <Math>a = b</Math>,
          then <Math>[a, b)</Math>, <Math>(a, b]</Math>, and <Math>(a, b)</Math> are empty, while{' '}
          <Math>[a, b]</Math> is just the singleton set <Math>\{'{a}'}\</Math>. We call these
          intervals <strong>degenerate</strong>.
        </p>
      </Example>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Adherent Points and Closure</h2>

      <p className="mb-4">
        Just as sequences of real numbers have limit points, sets of real numbers have{' '}
        <em>adherent points</em>.
      </p>

      <Definition id="def-9.1.5" title="Definition 9.1.5: epsilon-adherent points">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>, let{' '}
          <Math>\varepsilon &gt; 0</Math>, and let <Math>x \in \mathbb{'{R}'}</Math>. We say that{' '}
          <Math>x</Math> is <Math>\varepsilon</Math>-<strong>adherent</strong> to <Math>X</Math> iff
          there exists a <Math>y \in X</Math> which is <Math>\varepsilon</Math>-close to{' '}
          <Math>x</Math> (i.e., <Math>|x - y| \leq \varepsilon</Math>).
        </p>
      </Definition>

      <Example id="ex-9.1.7" title="Example 9.1.7">
        <p>
          The point <Math>1.1</Math> is <Math>0.5</Math>-adherent to the open interval{' '}
          <Math>(0, 1)</Math>, but is not <Math>0.1</Math>-adherent to this interval. The point{' '}
          <Math>1</Math> is <Math>0.5</Math>-adherent to <Math>\{'{1, 2, 3}'}\</Math>.
        </p>
      </Example>

      <Definition id="def-9.1.8" title="Definition 9.1.8: Adherent points">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>, and let{' '}
          <Math>x \in \mathbb{'{R}'}</Math>. We say that <Math>x</Math> is an{' '}
          <strong>adherent point</strong> of <Math>X</Math> iff it is{' '}
          <Math>\varepsilon</Math>-adherent to <Math>X</Math> for every{' '}
          <Math>\varepsilon &gt; 0</Math>.
        </p>
      </Definition>

      <Example id="ex-9.1.9" title="Example 9.1.9">
        <p>
          The number <Math>1</Math> is <Math>\varepsilon</Math>-adherent to the open interval{' '}
          <Math>(0, 1)</Math> for every <Math>\varepsilon &gt; 0</Math>, and is thus an adherent
          point of <Math>(0, 1)</Math>. The point <Math>0.5</Math> is similarly an adherent point
          of <Math>(0, 1)</Math>. However, the number <Math>2</Math> is not <Math>0.5</Math>-adherent
          to <Math>(0, 1)</Math>, and is thus not an adherent point.
        </p>
      </Example>

      <Definition id="def-9.1.10" title="Definition 9.1.10: Closure">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>. The{' '}
          <strong>closure</strong> of <Math>X</Math>, denoted <Math>\overline{'{X}'}</Math>, is
          defined to be the set of all the adherent points of <Math>X</Math>.
        </p>
      </Definition>

      <Theorem id="lemma-9.1.11" title="Lemma 9.1.11: Elementary properties of closures">
        <p>
          Let <Math>X</Math> and <Math>Y</Math> be arbitrary subsets of <Math>\mathbb{'{R}'}</Math>.
          Then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Math>X \subseteq \overline{'{X}'}</Math>
          </li>
          <li>
            <Math>\overline{'{X \\cup Y}'} = \overline{'{X}'} \cup \overline{'{Y}'}</Math>
          </li>
          <li>
            <Math>\overline{'{X \\cap Y}'} \subseteq \overline{'{X}'} \cap \overline{'{Y}'}</Math>
          </li>
          <li>
            If <Math>X \subseteq Y</Math>, then{' '}
            <Math>\overline{'{X}'} \subseteq \overline{'{Y}'}</Math>
          </li>
        </ul>
      </Theorem>

      <Theorem id="lemma-9.1.12" title="Lemma 9.1.12: Closures of intervals">
        <p>
          Let <Math>{'a < b'}</Math> be real numbers, and let <Math>I</Math> be any one of the four
          intervals <Math>(a, b)</Math>, <Math>(a, b]</Math>, <Math>[a, b)</Math>, or{' '}
          <Math>[a, b]</Math>. Then the closure of <Math>I</Math> is <Math>[a, b]</Math>.
        </p>
        <p className="mt-2">
          Similarly, the closure of <Math>(a, \infty)</Math> or <Math>[a, \infty)</Math> is{' '}
          <Math>[a, \infty)</Math>, while the closure of <Math>(-\infty, a)</Math> or{' '}
          <Math>(-\infty, a]</Math> is <Math>(-\infty, a]</Math>. Finally, the closure of{' '}
          <Math>(-\infty, \infty)</Math> is <Math>(-\infty, \infty)</Math>.
        </p>
      </Theorem>

      <Theorem id="lemma-9.1.13" title="Lemma 9.1.13">
        <p>
          The closure of <Math>\mathbb{'{N}'}</Math> is <Math>\mathbb{'{N}'}</Math>. The closure of{' '}
          <Math>\mathbb{'{Z}'}</Math> is <Math>\mathbb{'{Z}'}</Math>. The closure of{' '}
          <Math>\mathbb{'{Q}'}</Math> is <Math>\mathbb{'{R}'}</Math>, and the closure of{' '}
          <Math>\mathbb{'{R}'}</Math> is <Math>\mathbb{'{R}'}</Math>. The closure of the empty set{' '}
          <Math>\emptyset</Math> is <Math>\emptyset</Math>.
        </p>
      </Theorem>

      <Callout type="info" className="my-6">
        <strong>Key Insight:</strong> The fact that{' '}
        <Math>{'\\overline{\\mathbb{Q}}'}</Math> equals{' '}
        <Math>\mathbb{'{R}'}</Math> reflects the density of the rationals in the reals (Proposition
        5.4.14). Every real number can be approximated arbitrarily well by rational numbers.
      </Callout>

      <Theorem id="lemma-9.1.14" title="Lemma 9.1.14: Adherent points and sequences">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>, and let{' '}
          <Math>x \in \mathbb{'{R}'}</Math>. Then <Math>x</Math> is an adherent point of{' '}
          <Math>X</Math> if and only if there exists a sequence{' '}
          <Math>{'(a_n)_{n=0}^\\infty'}</Math>, consisting entirely of elements in <Math>X</Math>,
          which converges to <Math>x</Math>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Closed Sets</h2>

      <Definition id="def-9.1.15" title="Definition 9.1.15: Closed sets">
        <p>
          A subset <Math>E \subseteq \mathbb{'{R}'}</Math> is said to be <strong>closed</strong> if{' '}
          <Math>\overline{'{E}'} = E</Math>, or in other words, <Math>E</Math> contains all of its
          adherent points.
        </p>
      </Definition>

      <Example id="ex-9.1.16" title="Examples 9.1.16">
        <p>
          From Lemma 9.1.12 we see that if <Math>{'a < b'}</Math> are real numbers, then{' '}
          <Math>[a, b]</Math>, <Math>[a, +\infty)</Math>, <Math>(-\infty, a]</Math>, and{' '}
          <Math>(-\infty, +\infty)</Math> are closed, while <Math>(a, b)</Math>, <Math>(a, b]</Math>,{' '}
          <Math>[a, b)</Math>, <Math>(a, +\infty)</Math>, and <Math>(-\infty, a)</Math> are not.
        </p>
        <p className="mt-2">
          From Lemma 9.1.13 we see that <Math>\mathbb{'{N}'}</Math>, <Math>\mathbb{'{Z}'}</Math>,{' '}
          <Math>\mathbb{'{R}'}</Math>, and <Math>\emptyset</Math> are closed, while{' '}
          <Math>\mathbb{'{Q}'}</Math> is not.
        </p>
      </Example>

      <Theorem id="cor-9.1.17" title="Corollary 9.1.17: Closed sets and sequences">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>. If <Math>X</Math> is
          closed, and <Math>{'(a_n)_{n=0}^\\infty'}</Math> is a convergent sequence consisting of
          elements in <Math>X</Math>, then <Math>{'\\lim_{n \\to \\infty} a_n'}</Math> also lies in{' '}
          <Math>X</Math>.
        </p>
        <p className="mt-2">
          Conversely, if it is true that every convergent sequence of elements in <Math>X</Math> has
          its limit in <Math>X</Math> as well, then <Math>X</Math> is necessarily closed.
        </p>
      </Theorem>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Limit Points and Isolated Points</h2>

      <Definition id="def-9.1.18" title="Definition 9.1.18: Limit points and isolated points">
        <p>
          Let <Math>X</Math> be a subset of the real line. We say that <Math>x</Math> is a{' '}
          <strong>limit point</strong> (or <strong>cluster point</strong>) of <Math>X</Math> iff it
          is an adherent point of <Math>{'X \\setminus \\{x\\}'}</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>x</Math> is an <strong>isolated point</strong> of <Math>X</Math> if{' '}
          <Math>x \in X</Math> and there exists some <Math>\varepsilon &gt; 0</Math> such that{' '}
          <Math>|x - y| &gt; \varepsilon</Math> for all{' '}
          <Math>{'y \\in X \\setminus \\{x\\}'}</Math>.
        </p>
      </Definition>

      <Example id="ex-9.1.19" title="Example 9.1.19">
        <p>
          Let <Math>X = (1, 2) \cup \{'{3}'}\</Math>. Then <Math>3</Math> is an adherent point of{' '}
          <Math>X</Math>, but it is not a limit point of <Math>X</Math>, since <Math>3</Math> is
          not adherent to <Math>{'X \\setminus \\{3\\} = (1, 2)'}</Math>; instead, <Math>3</Math>{' '}
          is an isolated point of <Math>X</Math>.
        </p>
        <p className="mt-2">
          On the other hand, <Math>2</Math> is a limit point of <Math>X</Math>, since <Math>2</Math>{' '}
          is adherent to <Math>{'X \\setminus \\{2\\} = X'}</Math>; but it is not isolated.
        </p>
      </Example>

      <Callout type="note" className="my-6">
        <strong>Remark 9.1.20:</strong> From Lemma 9.1.14 we see that <Math>x</Math> is a limit point
        of <Math>X</Math> iff there exists a sequence <Math>{'(a_n)_{n=0}^\\infty'}</Math>,
        consisting entirely of elements in <Math>X</Math> that are distinct from <Math>x</Math>,
        and such that <Math>{'(a_n)_{n=0}^\\infty'}</Math> converges to <Math>x</Math>. The set of
        adherent points splits into the set of limit points and the set of isolated points.
      </Callout>

      <Theorem id="lemma-9.1.21" title="Lemma 9.1.21">
        <p>
          Let <Math>I</Math> be an interval (possibly infinite), i.e., <Math>I</Math> is a set of
          the form <Math>(a, b)</Math>, <Math>(a, b]</Math>, <Math>[a, b)</Math>, <Math>[a, b]</Math>,{' '}
          <Math>(a, +\infty)</Math>, <Math>[a, +\infty)</Math>, <Math>(-\infty, a)</Math>, or{' '}
          <Math>(-\infty, a]</Math>. Then every element of <Math>I</Math> is a limit point of{' '}
          <Math>I</Math>.
        </p>
      </Theorem>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Bounded Sets</h2>

      <Definition id="def-9.1.22" title="Definition 9.1.22: Bounded sets">
        <p>
          A subset <Math>X</Math> of the real line is said to be <strong>bounded</strong> if we
          have <Math>X \subseteq [-M, M]</Math> for some real number <Math>M &gt; 0</Math>.
        </p>
      </Definition>

      <Example id="ex-9.1.23" title="Example 9.1.23">
        <p>
          For any real numbers <Math>a, b</Math>, the interval <Math>[a, b]</Math> is bounded,
          because it is contained inside <Math>[-M, M]</Math> where{' '}
          <Math>M = \max(|a|, |b|)</Math>. However, the half-infinite interval{' '}
          <Math>[0, +\infty)</Math> is unbounded. In fact, no half-infinite or doubly-infinite
          interval can be bounded. The sets <Math>\mathbb{'{N}'}</Math>, <Math>\mathbb{'{Z}'}</Math>,{' '}
          <Math>\mathbb{'{Q}'}</Math>, and <Math>\mathbb{'{R}'}</Math> are all unbounded.
        </p>
      </Example>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">The Heine-Borel Theorem</h2>

      <Theorem id="thm-9.1.24" title="Theorem 9.1.24: Heine-Borel theorem for the line">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>. Then the following two
          statements are equivalent:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>
            <Math>X</Math> is closed and bounded.
          </li>
          <li>
            Given any sequence <Math>{'(a_n)_{n=0}^\\infty'}</Math> of real numbers which takes
            values in <Math>X</Math> (i.e., <Math>a_n \in X</Math> for all <Math>n</Math>), there
            exists a subsequence <Math>{'(a_{n_j})_{j=0}^\\infty'}</Math> of the original sequence
            which converges to some number <Math>L</Math> in <Math>X</Math>.
          </li>
        </ol>
        <div className="mt-4 pt-4 border-t border-amber-900/30">
          <p className="font-semibold text-amber-300">Proof idea:</p>
          <p className="mt-2">
            To show (a) implies (b), use the Bolzano-Weierstrass theorem (Theorem 6.6.8) to extract
            a convergent subsequence (since <Math>X</Math> is bounded), then use Corollary 9.1.17 to
            show the limit lies in <Math>X</Math> (since <Math>X</Math> is closed).
          </p>
          <p className="mt-2">
            To show (b) implies (a), argue by contradiction using Corollary 9.1.17 to establish
            that <Math>X</Math> is closed, and the axiom of choice to show <Math>X</Math> is
            bounded. <span className="float-right">&#9632;</span>
          </p>
        </div>
      </Theorem>

      <Callout type="success" className="my-6">
        <strong>Remark 9.1.25:</strong> This theorem shall play a key role in subsequent sections.
        In the language of metric space topology, it asserts that every subset of the real line
        which is closed and bounded is also <strong>compact</strong>. This is a special case of
        the more general Heine-Borel theorem (Theorem 12.5.7), due to Eduard Heine (1821-1881)
        and Emile Borel (1871-1956).
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Summary</h2>

      <Callout type="success" className="my-6">
        <strong>Key Takeaways:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Intervals</strong> come in four types: open, closed, and two half-open variants
          </li>
          <li>
            An <strong>adherent point</strong> of <Math>X</Math> is a point arbitrarily close to{' '}
            <Math>X</Math>
          </li>
          <li>
            The <strong>closure</strong> <Math>\overline{'{X}'}</Math> is the set of all adherent
            points
          </li>
          <li>
            A set is <strong>closed</strong> iff it equals its closure (contains all adherent points)
          </li>
          <li>
            <strong>Limit points</strong> vs <strong>isolated points</strong>: limit points can be
            approached by other points in the set
          </li>
          <li>
            <strong>Heine-Borel</strong>: A set is closed and bounded iff every sequence in it has
            a convergent subsequence with limit in the set
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Exercises</h2>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.1.1</p>
        <p>
          Let <Math>X</Math> be any subset of the real line, and let <Math>Y</Math> be a set such
          that <Math>X \subseteq Y \subseteq \overline{'{X}'}</Math>. Show that{' '}
          <Math>\overline{'{Y}'} = \overline{'{X}'}</Math>.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.1.3</p>
        <p>
          Prove Lemma 9.1.13. (Hint: for computing the closure of <Math>\mathbb{'{Q}'}</Math>, you
          will need Proposition 5.4.14.)
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.1.6</p>
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>. Show that{' '}
          <Math>\overline{'{X}'}</Math> is closed (i.e.,{' '}
          <Math>{'\\overline{\\overline{X}} = \\overline{X}'}</Math>). Furthermore, show that
          if <Math>Y</Math> is any closed set that contains <Math>X</Math>, then <Math>Y</Math>{' '}
          also contains <Math>\overline{'{X}'}</Math>. Thus the closure <Math>\overline{'{X}'}</Math>{' '}
          is the smallest closed set which contains <Math>X</Math>.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.1.9</p>
        <p>
          Let <Math>X</Math> be a subset of the real line, and <Math>x</Math> be a real number.
          Show that every adherent point of <Math>X</Math> is either a limit point or an isolated
          point of <Math>X</Math>, but cannot be both. Conversely, show that every limit point
          and every isolated point of <Math>X</Math> is an adherent point of <Math>X</Math>.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 9.1.13</p>
        <p>
          Prove Theorem 9.1.24. (Hint: to show (a) implies (b), use the Bolzano-Weierstrass theorem
          (Theorem 6.6.8) and Corollary 9.1.17. To show (b) implies (a), argue by contradiction,
          using Corollary 9.1.17 to establish that <Math>X</Math> is closed. You will need the
          axiom of choice to show that <Math>X</Math> is bounded, as in Lemma 8.4.5.)
        </p>
      </div>
    </LessonLayout>
  );
}
