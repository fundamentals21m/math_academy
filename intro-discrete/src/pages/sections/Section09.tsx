import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Introduction */}
      <p>
        Finite state machines (also called finite automata) are abstract models of computation
        that process input sequences and transition between states. They have wide applications
        in computer science, from parsing text to controlling digital circuits. This section
        introduces the mathematical foundations of these important structures.
      </p>

      <h2>Definition of Finite Automata</h2>

      <Definition title="Alphabet and Strings" className="my-6">
        <p>
          An <strong>alphabet</strong> <InlineMath>\Sigma</InlineMath> is a finite, non-empty set
          of symbols. A <strong>string</strong> (or <strong>word</strong>) over{' '}
          <InlineMath>\Sigma</InlineMath> is a finite sequence of symbols from{' '}
          <InlineMath>\Sigma</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            The <strong>empty string</strong>, denoted <InlineMath>\varepsilon</InlineMath> or{' '}
            <InlineMath>\lambda</InlineMath>, has length 0.
          </li>
          <li>
            <InlineMath>\Sigma^*</InlineMath> denotes the set of all strings over{' '}
            <InlineMath>\Sigma</InlineMath>, including <InlineMath>\varepsilon</InlineMath>.
          </li>
          <li>
            <InlineMath>\Sigma^+</InlineMath> denotes all non-empty strings:{' '}
            <InlineMath>\Sigma^+ = \Sigma^* \setminus \{'{\\varepsilon}'}\</InlineMath>.
          </li>
          <li>
            <InlineMath>|w|</InlineMath> denotes the <strong>length</strong> of string{' '}
            <InlineMath>w</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Example title="Alphabets and Strings" className="my-6">
        <ul className="space-y-3">
          <li>
            <strong>Binary alphabet:</strong> <InlineMath>\Sigma = \{'{0, 1}'}\</InlineMath>. Sample
            strings: <InlineMath>0, 1, 01, 110, 00110</InlineMath>.
          </li>
          <li>
            <strong>English letters:</strong> <InlineMath>\Sigma = \{'{a, b, c, \\ldots, z}'}\</InlineMath>.
            Sample strings: <InlineMath>cat, math, hello</InlineMath>.
          </li>
          <li>
            <strong>DNA alphabet:</strong> <InlineMath>\Sigma = \{'{A, C, G, T}'}\</InlineMath>. Sample
            strings: <InlineMath>ACGT, TTAA, GCAT</InlineMath>.
          </li>
        </ul>
      </Example>

      <Definition title="Deterministic Finite Automaton (DFA)" className="my-6">
        <p>
          A <strong>deterministic finite automaton</strong> is a 5-tuple{' '}
          <InlineMath>M = (Q, \Sigma, \delta, q_0, F)</InlineMath> where:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>Q</InlineMath> is a finite set of <strong>states</strong>
          </li>
          <li>
            <InlineMath>\Sigma</InlineMath> is the <strong>input alphabet</strong>
          </li>
          <li>
            <InlineMath>\delta: Q \times \Sigma \to Q</InlineMath> is the <strong>transition
            function</strong>
          </li>
          <li>
            <InlineMath>q_0 \in Q</InlineMath> is the <strong>start state</strong> (or{' '}
            <strong>initial state</strong>)
          </li>
          <li>
            <InlineMath>F \subseteq Q</InlineMath> is the set of <strong>accept states</strong>{' '}
            (or <strong>final states</strong>)
          </li>
        </ul>
      </Definition>

      <p>
        A DFA is "deterministic" because for each state and input symbol, there is exactly one
        next state. The machine reads input symbols one at a time and transitions according to{' '}
        <InlineMath>\delta</InlineMath>.
      </p>

      <h2>State Diagrams</h2>

      <p>
        We visualize DFAs using <strong>state diagrams</strong>:
      </p>
      <ul className="list-disc list-inside my-4 space-y-2">
        <li>States are represented as circles</li>
        <li>
          Transitions are arrows labeled with input symbols
        </li>
        <li>
          The start state has an incoming arrow from nowhere
        </li>
        <li>
          Accept states are drawn with double circles
        </li>
      </ul>

      <Example title="DFA Example: Strings Ending in 1" className="my-6">
        <p>
          Let <InlineMath>M</InlineMath> accept all binary strings ending in 1.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 my-4 border border-dark-700 font-mono text-sm">
          <pre>{`      0         0
  ┌───────┐   ┌───────┐
  │       │   │       │
  ▼       │   ▼       │
→(q0) ────┘ ((q1)) ───┘
     ───1───▶
     ◀──0───`}</pre>
        </div>
        <p className="mt-4">Formally:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <InlineMath>Q = \{'{q_0, q_1}'}\</InlineMath>
          </li>
          <li>
            <InlineMath>\Sigma = \{'{0, 1}'}\</InlineMath>
          </li>
          <li>
            <InlineMath>\delta(q_0, 0) = q_0</InlineMath>,{' '}
            <InlineMath>\delta(q_0, 1) = q_1</InlineMath>,{' '}
            <InlineMath>\delta(q_1, 0) = q_0</InlineMath>,{' '}
            <InlineMath>\delta(q_1, 1) = q_1</InlineMath>
          </li>
          <li>
            Start: <InlineMath>q_0</InlineMath>
          </li>
          <li>
            Accept: <InlineMath>F = \{'{q_1}'}\</InlineMath>
          </li>
        </ul>
      </Example>

      <h2>Processing Input</h2>

      <Definition title="Extended Transition Function" className="my-6">
        <p>
          We extend <InlineMath>\delta</InlineMath> to process strings via{' '}
          <InlineMath>\hat{'{\\delta}'}: Q \times \Sigma^* \to Q</InlineMath>:
        </p>
        <MathBlock>{`\\begin{aligned}
\\hat{\\delta}(q, \\varepsilon) &= q \\\\
\\hat{\\delta}(q, wa) &= \\delta(\\hat{\\delta}(q, w), a)
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          Here <InlineMath>w \in \Sigma^*</InlineMath> and <InlineMath>a \in \Sigma</InlineMath>.
        </p>
      </Definition>

      <Definition title="Language Accepted by a DFA" className="my-6">
        <p>
          The <strong>language accepted</strong> (or <strong>recognized</strong>) by a DFA{' '}
          <InlineMath>M</InlineMath> is:
        </p>
        <MathBlock>{`L(M) = \\{w \\in \\Sigma^* : \\hat{\\delta}(q_0, w) \\in F\\}`}</MathBlock>
        <p className="mt-2">
          A string <InlineMath>w</InlineMath> is <strong>accepted</strong> if processing it from
          the start state leads to an accept state.
        </p>
      </Definition>

      <Example title="Processing a String" className="my-6">
        <p>
          Using the DFA for "strings ending in 1", process <InlineMath>w = 1011</InlineMath>:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 my-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2">Step</th>
                <th className="text-left py-2">State</th>
                <th className="text-left py-2">Input</th>
                <th className="text-left py-2">Next State</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr><td className="py-1">1</td><td><InlineMath>q_0</InlineMath></td><td>1</td><td><InlineMath>q_1</InlineMath></td></tr>
              <tr><td className="py-1">2</td><td><InlineMath>q_1</InlineMath></td><td>0</td><td><InlineMath>q_0</InlineMath></td></tr>
              <tr><td className="py-1">3</td><td><InlineMath>q_0</InlineMath></td><td>1</td><td><InlineMath>q_1</InlineMath></td></tr>
              <tr><td className="py-1">4</td><td><InlineMath>q_1</InlineMath></td><td>1</td><td><InlineMath>q_1</InlineMath></td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Final state <InlineMath>q_1 \in F</InlineMath>, so <InlineMath>1011</InlineMath> is{' '}
          <strong>accepted</strong>.
        </p>
      </Example>

      <h2>More DFA Examples</h2>

      <Example title="DFA: Binary Divisibility by 3" className="my-6">
        <p>
          Design a DFA accepting binary numbers divisible by 3 (reading most significant bit
          first).
        </p>
        <p className="mt-2">
          Key insight: Track the remainder mod 3. If the current remainder is{' '}
          <InlineMath>r</InlineMath> and we read bit <InlineMath>b</InlineMath>, the new remainder
          is <InlineMath>(2r + b) \mod 3</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <InlineMath>Q = \{'{q_0, q_1, q_2}'}\</InlineMath> where <InlineMath>q_i</InlineMath>{' '}
            means "remainder is <InlineMath>i</InlineMath>"
          </li>
          <li>
            Start: <InlineMath>q_0</InlineMath> (initially 0, which has remainder 0)
          </li>
          <li>
            Accept: <InlineMath>F = \{'{q_0}'}\</InlineMath>
          </li>
        </ul>
        <p className="mt-3">Transition table:</p>
        <div className="bg-dark-800/50 rounded-xl p-4 my-2 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2">State</th>
                <th className="text-left py-2">Input 0</th>
                <th className="text-left py-2">Input 1</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr>
                <td className="py-1"><InlineMath>q_0</InlineMath></td>
                <td><InlineMath>q_0</InlineMath> (0·2+0=0)</td>
                <td><InlineMath>q_1</InlineMath> (0·2+1=1)</td>
              </tr>
              <tr>
                <td className="py-1"><InlineMath>q_1</InlineMath></td>
                <td><InlineMath>q_2</InlineMath> (1·2+0=2)</td>
                <td><InlineMath>q_0</InlineMath> (1·2+1=3≡0)</td>
              </tr>
              <tr>
                <td className="py-1"><InlineMath>q_2</InlineMath></td>
                <td><InlineMath>q_1</InlineMath> (2·2+0=4≡1)</td>
                <td><InlineMath>q_2</InlineMath> (2·2+1=5≡2)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Test: <InlineMath>110_2 = 6_{'{10}'}</InlineMath>. Processing:{' '}
          <InlineMath>q_0 \xrightarrow{'{1}'} q_1 \xrightarrow{'{1}'} q_0 \xrightarrow{'{0}'} q_0</InlineMath>.
          Accept! ✓
        </p>
      </Example>

      <Example title="DFA: Strings with Substring 'ab'" className="my-6">
        <p>
          Design a DFA over <InlineMath>\Sigma = \{'{a, b}'}\</InlineMath> accepting strings
          containing "ab" as a substring.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>q_0</InlineMath>: Haven't seen 'a' leading to 'ab' yet
          </li>
          <li>
            <InlineMath>q_1</InlineMath>: Just saw an 'a', looking for 'b'
          </li>
          <li>
            <InlineMath>q_2</InlineMath>: Found 'ab' (accept and stay)
          </li>
        </ul>
        <div className="bg-dark-800/50 rounded-xl p-4 my-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2">State</th>
                <th className="text-left py-2">Input a</th>
                <th className="text-left py-2">Input b</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr>
                <td className="py-1"><InlineMath>q_0</InlineMath></td>
                <td><InlineMath>q_1</InlineMath></td>
                <td><InlineMath>q_0</InlineMath></td>
              </tr>
              <tr>
                <td className="py-1"><InlineMath>q_1</InlineMath></td>
                <td><InlineMath>q_1</InlineMath></td>
                <td><InlineMath>q_2</InlineMath></td>
              </tr>
              <tr>
                <td className="py-1"><InlineMath>q_2</InlineMath></td>
                <td><InlineMath>q_2</InlineMath></td>
                <td><InlineMath>q_2</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Start: <InlineMath>q_0</InlineMath>. Accept: <InlineMath>F = \{'{q_2}'}\</InlineMath>.
        </p>
      </Example>

      <h2>Nondeterministic Finite Automata</h2>

      <Definition title="Nondeterministic Finite Automaton (NFA)" className="my-6">
        <p>
          A <strong>nondeterministic finite automaton</strong> is a 5-tuple{' '}
          <InlineMath>N = (Q, \Sigma, \delta, q_0, F)</InlineMath> where:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>Q, \Sigma, q_0, F</InlineMath> are as before
          </li>
          <li>
            <InlineMath>\delta: Q \times \Sigma \to \mathcal{'{P}'}(Q)</InlineMath> returns a{' '}
            <em>set</em> of possible next states
          </li>
        </ul>
        <p className="mt-2">
          An NFA may have multiple transitions for the same input, or none at all. It accepts a
          string if <em>some</em> path through the machine leads to an accept state.
        </p>
      </Definition>

      <Example title="NFA: Strings Ending in 01" className="my-6">
        <p>
          An NFA for binary strings ending in "01":
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>
            <InlineMath>q_0</InlineMath>: Start (loop on 0 or 1)
          </li>
          <li>
            <InlineMath>q_1</InlineMath>: Just saw 0
          </li>
          <li>
            <InlineMath>q_2</InlineMath>: Saw 01 (accept)
          </li>
        </ul>
        <div className="bg-dark-800/50 rounded-xl p-4 my-4 border border-dark-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-2">State</th>
                <th className="text-left py-2">Input 0</th>
                <th className="text-left py-2">Input 1</th>
              </tr>
            </thead>
            <tbody className="text-dark-300">
              <tr>
                <td className="py-1"><InlineMath>q_0</InlineMath></td>
                <td><InlineMath>\{'{q_0, q_1}'}\</InlineMath></td>
                <td><InlineMath>\{'{q_0}'}\</InlineMath></td>
              </tr>
              <tr>
                <td className="py-1"><InlineMath>q_1</InlineMath></td>
                <td><InlineMath>\emptyset</InlineMath></td>
                <td><InlineMath>\{'{q_2}'}\</InlineMath></td>
              </tr>
              <tr>
                <td className="py-1"><InlineMath>q_2</InlineMath></td>
                <td><InlineMath>\emptyset</InlineMath></td>
                <td><InlineMath>\emptyset</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          From <InlineMath>q_0</InlineMath>, on input 0 the NFA "guesses" whether this is the
          start of the final "01".
        </p>
      </Example>

      <Theorem title="NFA–DFA Equivalence" className="my-6">
        <p>
          For every NFA <InlineMath>N</InlineMath>, there exists a DFA <InlineMath>M</InlineMath>{' '}
          with <InlineMath>L(N) = L(M)</InlineMath>.
        </p>
        <p className="mt-2">
          The construction uses the <strong>subset (powerset) construction</strong>: the states of
          the DFA are subsets of the NFA's states, tracking all possible current states.
        </p>
      </Theorem>

      <h2>Regular Languages</h2>

      <Definition title="Regular Language" className="my-6">
        <p>
          A language <InlineMath>L \subseteq \Sigma^*</InlineMath> is <strong>regular</strong> if
          there exists a DFA (or equivalently, an NFA) that accepts exactly{' '}
          <InlineMath>L</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Closure Properties of Regular Languages" className="my-6">
        <p>
          Regular languages are closed under:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Union:</strong> If <InlineMath>L_1</InlineMath> and <InlineMath>L_2</InlineMath>{' '}
            are regular, so is <InlineMath>L_1 \cup L_2</InlineMath>
          </li>
          <li>
            <strong>Intersection:</strong> If <InlineMath>L_1</InlineMath> and{' '}
            <InlineMath>L_2</InlineMath> are regular, so is <InlineMath>L_1 \cap L_2</InlineMath>
          </li>
          <li>
            <strong>Complement:</strong> If <InlineMath>L</InlineMath> is regular, so is{' '}
            <InlineMath>\Sigma^* \setminus L</InlineMath>
          </li>
          <li>
            <strong>Concatenation:</strong> <InlineMath>L_1 L_2 = \{'{xy : x \\in L_1, y \\in L_2}'}\</InlineMath>
          </li>
          <li>
            <strong>Kleene star:</strong> <InlineMath>L^* = \{'{\\varepsilon}'}\cup L \cup LL \cup LLL \cup \cdots</InlineMath>
          </li>
        </ul>
      </Theorem>

      <h2>Applications</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 my-6 border border-dark-700">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Applications of Finite Automata</h4>
        <ul className="space-y-4 text-dark-200">
          <li>
            <strong>Text processing:</strong> Pattern matching (grep, regular expressions), lexical
            analysis in compilers.
          </li>
          <li>
            <strong>Protocol verification:</strong> Modeling and verifying communication protocols.
          </li>
          <li>
            <strong>Digital circuits:</strong> Sequential logic circuits are finite state machines
            implemented in hardware.
          </li>
          <li>
            <strong>Game AI:</strong> Simple NPC behavior in video games.
          </li>
          <li>
            <strong>Natural language:</strong> Morphological analysis, spell checking.
          </li>
        </ul>
      </div>

      <Example title="Regular Expression Connection" className="my-6">
        <p>
          The language "strings ending in 01" can be described by the regular expression:
        </p>
        <MathBlock>{`(0|1)^* 01`}</MathBlock>
        <p className="mt-2">
          Kleene's theorem establishes that regular expressions and finite automata describe
          exactly the same class of languages: the regular languages.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>DFA</strong> <InlineMath>(Q, \Sigma, \delta, q_0, F)</InlineMath> has states,
              an alphabet, a transition function, a start state, and accept states.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              A string is <strong>accepted</strong> if processing it from the start state leads to
              an accept state. <InlineMath>L(M)</InlineMath> is the language of accepted strings.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              DFAs have exactly one transition per state-symbol pair. <strong>NFAs</strong> can
              have multiple (or zero) transitions—accepting if any path reaches an accept state.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              Every NFA can be converted to an equivalent DFA via the <strong>subset
              construction</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Regular languages</strong> are exactly those accepted by finite automata.
              They are closed under union, intersection, complement, concatenation, and Kleene star.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              Finite automata have practical applications in text processing, compilers, digital
              circuits, and protocol verification.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
