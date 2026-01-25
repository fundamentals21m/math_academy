import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <p>
        In the previous chapter we reviewed differentiation - one of the two pillars of
        single variable calculus. The other pillar is, of course, <em>integration</em>,
        which is the focus of this chapter.
      </p>

      <p>
        Our strategy in defining the Riemann integral is as follows: we begin by first
        defining a notion of integration on a very simple class of functions - the
        piecewise constant functions. Then, we handle more general functions by
        approximating them by piecewise constant functions.
      </p>

      <p>
        Before we can introduce the concept of an integral, we need to describe how
        one can partition a large interval into smaller intervals. In this chapter,
        all intervals will be <em>bounded</em> intervals.
      </p>

      <h2>Connected Sets</h2>

      <Definition id="11.1.1" title="Connected sets">
        <p>
          Let <Math>X</Math> be a subset of <Math>\mathbb{'{R}'}</Math>. We say that{' '}
          <Math>X</Math> is <strong>connected</strong> iff the following property is true:
          whenever <Math>x, y</Math> are elements in <Math>X</Math> such that{' '}
          <Math>{String.raw`x < y`}</Math>, the bounded interval <Math>[x, y]</Math> is
          a subset of <Math>X</Math> (i.e., every number between <Math>x</Math> and{' '}
          <Math>y</Math> is also in <Math>X</Math>).
        </p>
      </Definition>

      <Example id="11.1.3" title="Examples of connected sets">
        <ul className="list-disc list-inside space-y-2">
          <li>
            The set <Math>[1, 2]</Math> is connected, because if <Math>{String.raw`x < y`}</Math> both
            lie in <Math>[1, 2]</Math>, then <Math>{String.raw`1 \leq x < y \leq 2`}</Math>, and so
            every element between <Math>x</Math> and <Math>y</Math> also lies in <Math>[1, 2]</Math>.
          </li>
          <li>
            Similarly, the set <Math>(1, 2)</Math> is connected.
          </li>
          <li>
            The set <Math>{String.raw`[1, 2] \cup [3, 4]`}</Math> is <em>not</em> connected:
            take <Math>x = 1.5</Math> and <Math>y = 3.5</Math>, both in the set, but{' '}
            <Math>2.5 \in [1.5, 3.5]</Math> is not in the set.
          </li>
          <li>
            The real line <Math>\mathbb{'{R}'}</Math> is connected.
          </li>
          <li>
            The empty set and singleton sets like <Math>{String.raw`\{3\}`}</Math> are connected,
            but for trivial reasons (they don't contain two elements <Math>x, y</Math> with{' '}
            <Math>{String.raw`x < y`}</Math>).
          </li>
        </ul>
      </Example>

      <Theorem id="11.1.4" title="Lemma: Bounded and connected sets are intervals">
        <p>
          Let <Math>X</Math> be a subset of the real line. Then the following two
          statements are logically equivalent:
        </p>
        <ol className="list-alpha list-inside mt-2 space-y-1">
          <li><Math>X</Math> is bounded and connected.</li>
          <li><Math>X</Math> is a bounded interval.</li>
        </ol>
        <div className="proof">
          <p>
            <strong>(b) implies (a):</strong> If <Math>X</Math> is a bounded interval, it is
            clearly bounded. To show it's connected, if <Math>{String.raw`x < y`}</Math> are
            in <Math>X</Math>, then any <Math>z</Math> with <Math>{String.raw`x < z < y`}</Math> is
            also in <Math>X</Math> by the definition of an interval.
          </p>
          <p className="mt-2">
            <strong>(a) implies (b):</strong> Suppose <Math>X</Math> is bounded and connected
            and non-empty. Let <Math>{String.raw`a = \inf X`}</Math> and <Math>{String.raw`b = \sup X`}</Math>.
            By connectedness, if <Math>{String.raw`x, y \in X`}</Math> with <Math>{String.raw`x < y`}</Math>,
            then <Math>{String.raw`[x, y] \subseteq X`}</Math>. One can show that <Math>X</Math> is
            one of the intervals <Math>(a, b)</Math>, <Math>[a, b)</Math>, <Math>(a, b]</Math>,
            or <Math>[a, b]</Math> depending on whether the endpoints are included.
          </p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          Recall that intervals are allowed to be singleton points (e.g., the degenerate
          interval <Math>{String.raw`[2, 2] = \{2\}`}</Math>), or even the empty set.
        </p>
      </Callout>

      <Theorem id="11.1.6" title="Corollary: Intersection of bounded intervals">
        <p>
          If <Math>I</Math> and <Math>J</Math> are bounded intervals, then the
          intersection <Math>{String.raw`I \cap J`}</Math> is also a bounded interval.
        </p>
        <div className="proof">
          <p>
            The intersection of two bounded sets is bounded. The intersection of two
            connected sets is connected (if <Math>{String.raw`x < y`}</Math> are both
            in <Math>{String.raw`I \cap J`}</Math>, then <Math>{String.raw`[x, y] \subseteq I`}</Math> and{' '}
            <Math>{String.raw`[x, y] \subseteq J`}</Math>, so <Math>{String.raw`[x, y] \subseteq I \cap J`}</Math>).
            By Lemma 11.1.4, <Math>{String.raw`I \cap J`}</Math> is a bounded interval.
          </p>
        </div>
      </Theorem>

      <Example id="11.1.7" title="Intersections of intervals">
        <p>
          The intersection of <Math>[2, 4]</Math> and <Math>[4, 6]</Math> is{' '}
          <Math>{String.raw`\{4\}`}</Math>, which is also a bounded interval.
        </p>
        <p className="mt-2">
          The intersection of <Math>(2, 4)</Math> and <Math>(4, 6)</Math> is{' '}
          <Math>\emptyset</Math>, which is also a bounded interval.
        </p>
      </Example>

      <h2>Length of Intervals</h2>

      <Definition id="11.1.8" title="Length of intervals">
        <p>
          If <Math>I</Math> is a bounded interval, we define the <strong>length</strong> of{' '}
          <Math>I</Math>, denoted <Math>|I|</Math>, as follows:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            If <Math>I</Math> is one of <Math>[a, b]</Math>, <Math>(a, b)</Math>,{' '}
            <Math>[a, b)</Math>, or <Math>(a, b]</Math> for some real numbers{' '}
            <Math>{String.raw`a < b`}</Math>, then <Math>|I| := b - a</Math>.
          </li>
          <li>
            If <Math>I</Math> is a point or the empty set, then <Math>|I| = 0</Math>.
          </li>
        </ul>
      </Definition>

      <Example id="11.1.9" title="Examples of interval lengths">
        <p>
          The length of <Math>[3, 5]</Math> is 2, as is the length of <Math>(3, 5)</Math>.
          The length of <Math>{String.raw`\{5\}`}</Math> or the empty set is 0.
        </p>
      </Example>

      <h2>Partitions</h2>

      <Definition id="11.1.10" title="Partitions">
        <p>
          Let <Math>I</Math> be a bounded interval. A <strong>partition</strong> of{' '}
          <Math>I</Math> is a finite set <Math>\mathbf{'{P}'}</Math> of bounded intervals
          contained in <Math>I</Math>, such that every <Math>x</Math> in <Math>I</Math> lies
          in exactly one of the bounded intervals <Math>J</Math> in <Math>\mathbf{'{P}'}</Math>.
        </p>
      </Definition>

      <Callout type="note">
        <p>
          A partition is a <em>set of intervals</em>, while each interval is itself a
          set of real numbers. Thus a partition is a set consisting of other sets.
        </p>
      </Callout>

      <Example id="11.1.12" title="Examples of partitions">
        <p>
          The set <Math>{String.raw`\mathbf{P} = \{\{1\}, (1, 3), [3, 5), \{5\}, (5, 8], \emptyset\}`}</Math> is
          a partition of <Math>[1, 8]</Math>, because all intervals in <Math>\mathbf{'{P}'}</Math> lie
          in <Math>[1, 8]</Math>, and each element of <Math>[1, 8]</Math> lies in exactly
          one interval in <Math>\mathbf{'{P}'}</Math>.
        </p>
        <p className="mt-2">
          Note that one could remove the empty set from <Math>\mathbf{'{P}'}</Math> and still
          obtain a partition.
        </p>
        <p className="mt-2">
          <strong>Non-examples:</strong>
        </p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            <Math>{String.raw`\{[1, 4], [3, 5]\}`}</Math> is not a partition of <Math>[1, 5]</Math> because
            some elements are in more than one interval.
          </li>
          <li>
            <Math>{String.raw`\{(1, 3), (3, 5)\}`}</Math> is not a partition of <Math>(1, 5)</Math> because
            the point 3 is not in any interval.
          </li>
          <li>
            <Math>{String.raw`\{(0, 3), [3, 5)\}`}</Math> is not a partition of <Math>(1, 5)</Math> because
            <Math>(0, 3)</Math> is not contained in <Math>(1, 5)</Math>.
          </li>
        </ul>
      </Example>

      <h2>Length is Finitely Additive</h2>

      <Theorem id="11.1.13" title="Length is finitely additive">
        <p>
          Let <Math>I</Math> be a bounded interval, <Math>n</Math> be a natural number,
          and let <Math>\mathbf{'{P}'}</Math> be a partition of <Math>I</Math> of
          cardinality <Math>n</Math>. Then:
        </p>
        <MathBlock>{String.raw`|I| = \sum_{J \in \mathbf{P}} |J|`}</MathBlock>
        <div className="proof">
          <p>
            We prove this by induction on <Math>n</Math>.
          </p>
          <p className="mt-2">
            <strong>Base case:</strong> If <Math>n = 0</Math>, then <Math>I</Math> must be empty,
            and the claim holds trivially. If <Math>n = 1</Math>, then the partition is{' '}
            <Math>{String.raw`\{J\}`}</Math> with <Math>J = I</Math>, and the claim is immediate.
          </p>
          <p className="mt-2">
            <strong>Inductive step:</strong> Suppose the claim holds for partitions of size{' '}
            <Math>n</Math>. Let <Math>\mathbf{'{P}'}</Math> be a partition of <Math>I</Math> of
            size <Math>n + 1</Math>. If <Math>I</Math> is empty or a point, all intervals
            in <Math>\mathbf{'{P}'}</Math> have length zero and the claim is trivial.
          </p>
          <p className="mt-2">
            Otherwise, <Math>I</Math> has the form <Math>(a, b)</Math>, <Math>(a, b]</Math>,{' '}
            <Math>[a, b)</Math>, or <Math>[a, b]</Math>. One can find an interval{' '}
            <Math>{String.raw`K \in \mathbf{P}`}</Math> containing an endpoint of <Math>I</Math>.
            Then <Math>I - K</Math> is also an interval, and <Math>{String.raw`\mathbf{P} - \{K\}`}</Math> is
            a partition of <Math>I - K</Math>. By induction:
          </p>
          <MathBlock>{String.raw`|I - K| = \sum_{J \in \mathbf{P} - \{K\}} |J|`}</MathBlock>
          <p className="mt-2">
            Since <Math>|I| = |K| + |I - K|</Math>, we get <Math>{String.raw`|I| = \sum_{J \in \mathbf{P}} |J|`}</Math>.
          </p>
        </div>
      </Theorem>

      <h2>Finer and Coarser Partitions</h2>

      <Definition id="11.1.14" title="Finer and coarser partitions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>\mathbf{'{P}'}</Math> and{' '}
          <Math>\mathbf{'{P}'}'</Math> be two partitions of <Math>I</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>\mathbf{'{P}'}'</Math> is <strong>finer</strong> than{' '}
          <Math>\mathbf{'{P}'}</Math> (or equivalently, that <Math>\mathbf{'{P}'}</Math> is{' '}
          <strong>coarser</strong> than <Math>\mathbf{'{P}'}'</Math>) if for every{' '}
          <Math>{String.raw`J \in \mathbf{P}'`}</Math>, there exists a{' '}
          <Math>{String.raw`K \in \mathbf{P}`}</Math> such that <Math>{String.raw`J \subseteq K`}</Math>.
        </p>
      </Definition>

      <Example id="11.1.15" title="Comparing partitions">
        <p>
          The partition <Math>{String.raw`\{[1, 2), \{2\}, (2, 3), [3, 4]\}`}</Math> is finer
          than <Math>{String.raw`\{[1, 2], (2, 4]\}`}</Math>.
        </p>
        <p className="mt-2">
          Both partitions are finer than <Math>{String.raw`\{[1, 4]\}`}</Math>, which is the
          coarsest possible partition of <Math>[1, 4]</Math>.
        </p>
        <p className="mt-2">
          Note that there is no "finest" partition of <Math>[1, 4]</Math> (since all
          partitions are required to be finite).
        </p>
      </Example>

      <Callout type="warning">
        <p>
          We do not compare partitions of different intervals. If <Math>\mathbf{'{P}'}</Math> is
          a partition of <Math>[1, 4]</Math> and <Math>\mathbf{'{P}'}'</Math> is a partition
          of <Math>[2, 5]</Math>, we would not say that one is coarser or finer than the other.
        </p>
      </Callout>

      <h2>Common Refinement</h2>

      <Definition id="11.1.16" title="Common refinement">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>\mathbf{'{P}'}</Math> and{' '}
          <Math>\mathbf{'{P}'}'</Math> be two partitions of <Math>I</Math>. We define the{' '}
          <strong>common refinement</strong> <Math>{String.raw`\mathbf{P} \# \mathbf{P}'`}</Math> of{' '}
          <Math>\mathbf{'{P}'}</Math> and <Math>\mathbf{'{P}'}'</Math> to be the set:
        </p>
        <MathBlock>{String.raw`\mathbf{P} \# \mathbf{P}' := \{K \cap J : K \in \mathbf{P} \text{ and } J \in \mathbf{P}'\}`}</MathBlock>
      </Definition>

      <Example id="11.1.17" title="Common refinement example">
        <p>
          Let <Math>{String.raw`\mathbf{P} := \{[1, 3), [3, 4]\}`}</Math> and{' '}
          <Math>{String.raw`\mathbf{P}' := \{[1, 2], (2, 4]\}`}</Math> be two partitions of <Math>[1, 4]</Math>.
        </p>
        <p className="mt-2">
          Then <Math>{String.raw`\mathbf{P} \# \mathbf{P}' = \{[1, 2], (2, 3), [3, 4], \emptyset\}`}</Math>.
        </p>
      </Example>

      <Theorem id="11.1.18" title="Lemma: Common refinement is a partition">
        <p>
          Let <Math>I</Math> be a bounded interval, and let <Math>\mathbf{'{P}'}</Math> and{' '}
          <Math>\mathbf{'{P}'}'</Math> be two partitions of <Math>I</Math>.
          Then <Math>{String.raw`\mathbf{P} \# \mathbf{P}'`}</Math> is also a partition of <Math>I</Math>,
          and is both finer than <Math>\mathbf{'{P}'}</Math> and finer than <Math>\mathbf{'{P}'}'</Math>.
        </p>
        <div className="proof">
          <p>
            Each element <Math>{String.raw`K \cap J`}</Math> is a bounded interval by Corollary 11.1.6.
            For any <Math>{String.raw`x \in I`}</Math>, there is exactly one <Math>{String.raw`K \in \mathbf{P}`}</Math> and
            exactly one <Math>{String.raw`J \in \mathbf{P}'`}</Math> containing <Math>x</Math>,
            so <Math>x</Math> lies in exactly one element of <Math>{String.raw`\mathbf{P} \# \mathbf{P}'`}</Math>.
          </p>
          <p className="mt-2">
            For fineness: any <Math>{String.raw`K \cap J \in \mathbf{P} \# \mathbf{P}'`}</Math> satisfies{' '}
            <Math>{String.raw`K \cap J \subseteq K`}</Math> where <Math>{String.raw`K \in \mathbf{P}`}</Math>,
            so <Math>{String.raw`\mathbf{P} \# \mathbf{P}'`}</Math> is finer than <Math>\mathbf{'{P}'}</Math>.
            Similarly for <Math>\mathbf{'{P}'}'</Math>.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Why partitions matter:</strong> Partitions are the foundation for defining
          the Riemann integral. We will use them to define piecewise constant functions
          (which are easy to integrate), and then approximate more general functions by
          piecewise constant ones. The common refinement operation allows us to compare
          different approximations.
        </p>
      </Callout>
    </LessonLayout>
  );
}
