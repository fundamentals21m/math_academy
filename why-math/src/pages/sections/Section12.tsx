import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { ProbabilitySimulator } from '@/components/visualizations';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Chapter 12: Probability</h2>

      <p>
        The word "probable" (and related words like "probably" and "probability")
        is commonly used when discussing the likelihood of events. We all use such
        terms when speaking of weather forecasts, gambling odds, or medical diagnoses.
        But what do these terms actually mean?
      </p>

      <p>
        The theory of probability had its origins in games of chance—but it goes far
        deeper than that. The theory has many applications, including opinion polls,
        genetics, and the prediction of mortality rates for life insurance. This
        chapter will develop the basic concepts.
      </p>

      <h2>12.1 Elementary Ideas and Examples</h2>

      <p>
        We have already encountered the set of possible outcomes when tossing coins
        or rolling dice. In probability theory, this set is called the{' '}
        <strong>sample space</strong>, denoted <Math>S</Math>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Coin and Dice Sample Spaces</p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-dark-300">
          <li>
            Tossing one coin: <Math>{`S = \\{h, t\\}`}</Math>, where <Math>{`n(S) = 2`}</Math>
          </li>
          <li>
            Tossing two coins: <Math>{`S = \\{(h,h), (h,t), (t,h), (t,t)\\}`}</Math>, where <Math>{`n(S) = 4`}</Math>
          </li>
          <li>
            Rolling one die: <Math>{`S = \\{1, 2, 3, 4, 5, 6\\}`}</Math>, where <Math>{`n(S) = 6`}</Math>
          </li>
          <li>
            Rolling two dice: <Math>{`n(S) = 36`}</Math> (ordered pairs of outcomes)
          </li>
        </ul>
      </div>

      <h3>Events</h3>

      <p>
        An <strong>event</strong> is any subset <Math>A</Math> of the sample space{' '}
        <Math>S</Math>. Saying "event A occurs" means the outcome of the experiment
        is a member of <Math>A</Math>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Events When Rolling Two Dice</p>
        <p className="mt-2">
          Let <Math>A</Math> = "the sum of the two dice is 7."
        </p>
        <p className="mt-2">
          <Math>{`A = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\}`}</Math>
        </p>
        <p className="mt-2 text-emerald-400">
          Since <Math>{`n(A) = 6`}</Math> and <Math>{`n(S) = 36`}</Math>, there are
          6 ways to get a sum of 7 out of 36 equally likely outcomes.
        </p>
      </div>

      <h3>The Definition of Probability</h3>

      <p>
        When all outcomes in a sample space are <em>equally likely</em>, we define
        the probability of an event <Math>A</Math> as:
      </p>

      <MathBlock>{`P(A) = \\frac{n(A)}{n(S)} = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Probability is always a number between 0 and 1
        (inclusive). A probability of 0 means the event is impossible; a probability
        of 1 means it's certain. A probability of 0.5 means the event is as likely
        to occur as not.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Rolling a Sum of 7</p>
        <p className="mt-2">
          What is the probability of rolling a sum of 7 with two fair dice?
        </p>
        <MathBlock>{`P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6} \\approx 0.167`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          About a 16.7% chance of rolling a 7.
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Rolling a Sum of 11</p>
        <p className="mt-2">
          What is the probability of rolling a sum of 11 with two fair dice?
        </p>
        <p className="mt-2">
          The outcomes that give 11 are: <Math>{`\\{(5,6), (6,5)\\}`}</Math>
        </p>
        <MathBlock>{`P(\\text{sum} = 11) = \\frac{2}{36} = \\frac{1}{18} \\approx 0.056`}</MathBlock>
      </div>

      <ProbabilitySimulator />

      <h3>Card Drawing</h3>

      <p>
        A standard deck of playing cards has 52 cards: 4 suits (hearts, diamonds,
        clubs, spades), each with 13 cards (A, 2, 3, ..., 10, J, Q, K). Hearts and
        diamonds are red; clubs and spades are black.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Drawing a Heart</p>
        <p className="mt-2">
          If one card is drawn randomly from a well-shuffled deck, what is the
          probability it's a heart?
        </p>
        <MathBlock>{`P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4} = 0.25`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Drawing a Face Card</p>
        <p className="mt-2">
          What is the probability of drawing a face card (J, Q, or K)?
        </p>
        <p className="mt-2">
          There are 12 face cards (3 per suit × 4 suits).
        </p>
        <MathBlock>{`P(\\text{face card}) = \\frac{12}{52} = \\frac{3}{13} \\approx 0.231`}</MathBlock>
      </div>

      <h2>12.2 Mutually Exclusive Events</h2>

      <p>
        Two events <Math>A</Math> and <Math>B</Math> are <strong>mutually exclusive</strong>{' '}
        (or disjoint) if they cannot both occur—that is, if{' '}
        <Math>{`A \\cap B = \\emptyset`}</Math>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Mutually Exclusive Events</p>
        <p className="mt-2">When rolling a single die:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>
            <Math>{`A = \\{1, 2\\}`}</Math> (rolling 1 or 2)
          </li>
          <li>
            <Math>{`B = \\{5, 6\\}`}</Math> (rolling 5 or 6)
          </li>
        </ul>
        <p className="mt-2 text-emerald-400">
          These are mutually exclusive: you can't roll both a 2 and a 5 on a single roll.
        </p>
      </div>

      <Callout type="success">
        <strong>Addition Rule for Mutually Exclusive Events:</strong> If <Math>A</Math>{' '}
        and <Math>B</Math> are mutually exclusive, then:
        <MathBlock>{`P(A \\cup B) = P(A) + P(B)`}</MathBlock>
        The probability that <em>either</em> A <em>or</em> B occurs is the sum of
        their individual probabilities.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Rolling Low or High</p>
        <p className="mt-2">
          With <Math>{`A = \\{1, 2\\}`}</Math> and <Math>{`B = \\{5, 6\\}`}</Math>, what is{' '}
          <Math>{`P(A \\cup B)`}</Math>?
        </p>
        <MathBlock>{`P(A \\cup B) = P(A) + P(B) = \\frac{2}{6} + \\frac{2}{6} = \\frac{4}{6} = \\frac{2}{3}`}</MathBlock>
      </div>

      <h3>Non-Mutually Exclusive Events</h3>

      <p>
        When events are <em>not</em> mutually exclusive, we must be careful not to
        double-count the outcomes in their intersection.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Hearts or Face Cards</p>
        <p className="mt-2">
          What is the probability of drawing a card that is either a heart or a face card?
        </p>
        <p className="mt-2">
          Let <Math>H</Math> = drawing a heart, <Math>F</Math> = drawing a face card.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{`n(H) = 13`}</Math> (13 hearts)</li>
          <li><Math>{`n(F) = 12`}</Math> (12 face cards)</li>
          <li><Math>{`n(H \\cap F) = 3`}</Math> (J, Q, K of hearts)</li>
        </ul>
        <p className="mt-2">
          If we just add 13 + 12, we count the 3 face-card hearts twice!
        </p>
        <MathBlock>{`n(H \\cup F) = 13 + 12 - 3 = 22`}</MathBlock>
        <MathBlock>{`P(H \\cup F) = \\frac{22}{52} = \\frac{11}{26} \\approx 0.423`}</MathBlock>
      </div>

      <h2>12.3 The Basic Rules of Probability</h2>

      <p>
        Here are the fundamental rules that govern all probability calculations:
      </p>

      <div className="grid grid-cols-1 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Rule 1: Bounds</p>
          <MathBlock>{`0 \\leq P(A) \\leq 1`}</MathBlock>
          <p className="mt-2 text-dark-300">
            Probabilities are always between 0 and 1 (or 0% and 100%).
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Rule 2: Certain Event</p>
          <MathBlock>{`P(S) = 1`}</MathBlock>
          <p className="mt-2 text-dark-300">
            The probability that <em>something</em> in the sample space occurs is 1.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Rule 3: Impossible Event</p>
          <MathBlock>{`P(\\emptyset) = 0`}</MathBlock>
          <p className="mt-2 text-dark-300">
            The probability of the empty set (impossible event) is 0.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Rule 4: General Addition Rule</p>
          <MathBlock>{`P(A \\cup B) = P(A) + P(B) - P(A \\cap B)`}</MathBlock>
          <p className="mt-2 text-dark-300">
            The probability of A <em>or</em> B equals the sum minus the overlap.
            (For mutually exclusive events, <Math>{`P(A \\cap B) = 0`}</Math>.)
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Rule 5: Multiplication Rule</p>
          <MathBlock>{`P(A \\cap B) = P(A) \\cdot P(B \\mid A)`}</MathBlock>
          <p className="mt-2 text-dark-300">
            The probability of A <em>and</em> B equals P(A) times the probability
            of B <em>given that A has occurred</em>.
          </p>
        </div>
      </div>

      <h3>Complement Rule</h3>

      <p>
        A useful consequence of these rules involves the complement <Math>{`A^c`}</Math>{' '}
        (all outcomes <em>not</em> in A):
      </p>

      <MathBlock>{`P(A^c) = 1 - P(A)`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: At Least One Head</p>
        <p className="mt-2">
          What is the probability of getting at least one head when tossing 3 coins?
        </p>
        <p className="mt-2">
          It's easier to find the complement—the probability of getting <em>no</em> heads
          (all tails):
        </p>
        <MathBlock>{`P(\\text{all tails}) = \\frac{1}{8}`}</MathBlock>
        <p className="mt-2">
          (Only 1 outcome, TTT, out of 8 possible outcomes.)
        </p>
        <MathBlock>{`P(\\text{at least one head}) = 1 - \\frac{1}{8} = \\frac{7}{8} = 0.875`}</MathBlock>
      </div>

      <h3>Independent Events</h3>

      <p>
        Two events are <strong>independent</strong> if the occurrence of one does not
        affect the probability of the other. Mathematically, A and B are independent if:
      </p>

      <MathBlock>{`P(B \\mid A) = P(B)`}</MathBlock>

      <p>
        For independent events, the multiplication rule simplifies to:
      </p>

      <MathBlock>{`P(A \\cap B) = P(A) \\cdot P(B)`}</MathBlock>

      <Callout type="info">
        <strong>Independence vs. Mutual Exclusivity:</strong> Don't confuse these!
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Mutually exclusive:</strong> A and B <em>cannot</em> both happen</li>
          <li><strong>Independent:</strong> A happening doesn't change B's probability</li>
        </ul>
        Mutually exclusive events with non-zero probabilities are <em>never</em> independent!
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Two Coin Tosses</p>
        <p className="mt-2">
          Toss a fair coin twice. Let A = "first toss is heads" and B = "second toss is heads."
        </p>
        <p className="mt-2">
          These events are independent—the first toss doesn't affect the second.
        </p>
        <MathBlock>{`P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          This matches our direct count: (H,H) is 1 of 4 equally likely outcomes.
        </p>
      </div>

      <h3>Drawing Without Replacement</h3>

      <p>
        When we draw cards (or select objects) <em>without replacement</em>, the events
        are <strong>not</strong> independent—each draw changes the remaining possibilities.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Two Aces in a Row</p>
        <p className="mt-2">
          What is the probability of drawing two aces in a row from a standard deck
          (without replacing the first card)?
        </p>
        <p className="mt-2">
          Let A = "first card is an ace" and B = "second card is an ace."
        </p>
        <MathBlock>{`P(A) = \\frac{4}{52} = \\frac{1}{13}`}</MathBlock>
        <p className="mt-2">
          If the first card was an ace, there are now 3 aces left among 51 cards:
        </p>
        <MathBlock>{`P(B \\mid A) = \\frac{3}{51} = \\frac{1}{17}`}</MathBlock>
        <p className="mt-2">
          Using the multiplication rule:
        </p>
        <MathBlock>{`P(A \\cap B) = \\frac{1}{13} \\cdot \\frac{1}{17} = \\frac{1}{221} \\approx 0.0045`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Less than half a percent chance of drawing two consecutive aces!
        </p>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Seeds Germinating</p>
        <p className="mt-2">
          Suppose 90% of a certain type of seed will germinate. If 3 seeds are planted,
          what is the probability that all 3 germinate? (Assume independence.)
        </p>
        <MathBlock>{`P(\\text{all 3 germinate}) = 0.9 \\times 0.9 \\times 0.9 = 0.729`}</MathBlock>
        <p className="mt-2">
          What is the probability that at least one fails to germinate?
        </p>
        <MathBlock>{`P(\\text{at least one fails}) = 1 - 0.729 = 0.271`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          About a 27% chance that at least one seed won't germinate.
        </p>
      </div>

      <h3>The Birthday Problem</h3>

      <p>
        A famous probability puzzle: In a group of <Math>n</Math> people, what is the
        probability that at least two share the same birthday?
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: 23 People</p>
        <p className="mt-2">
          It's easier to compute the complement—the probability that all <Math>n</Math>{' '}
          people have <em>different</em> birthdays.
        </p>
        <p className="mt-2">
          Assuming 365 equally likely birthdays, the probability of all different birthdays is:
        </p>
        <MathBlock>{`P(\\text{all different}) = \\frac{365}{365} \\cdot \\frac{364}{365} \\cdot \\frac{363}{365} \\cdots \\frac{365-n+1}{365}`}</MathBlock>
        <p className="mt-2">
          For <Math>{`n = 23`}</Math>:
        </p>
        <MathBlock>{`P(\\text{all different}) \\approx 0.493`}</MathBlock>
        <MathBlock>{`P(\\text{at least one match}) = 1 - 0.493 \\approx 0.507`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          With just 23 people, there's more than a 50% chance two share a birthday!
        </p>
      </div>

      <Callout type="warning">
        <strong>Counterintuitive Result:</strong> The birthday problem surprises most people.
        With 50 people, the probability of a shared birthday exceeds 97%! This illustrates
        how our intuition about probability can be unreliable.
      </Callout>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Probability provides a mathematical framework
        for analyzing uncertain events.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Sample space:</strong> The set <Math>S</Math> of all possible outcomes</li>
          <li><strong>Event:</strong> Any subset of the sample space</li>
          <li><strong>Probability:</strong> <Math>{`P(A) = n(A)/n(S)`}</Math> for equally likely outcomes</li>
          <li><strong>Addition rule:</strong> <Math>{`P(A \\cup B) = P(A) + P(B) - P(A \\cap B)`}</Math></li>
          <li><strong>Multiplication rule:</strong> <Math>{`P(A \\cap B) = P(A) \\cdot P(B \\mid A)`}</Math></li>
          <li><strong>Complement:</strong> <Math>{`P(A^c) = 1 - P(A)`}</Math></li>
          <li><strong>Independence:</strong> <Math>{`P(A \\cap B) = P(A) \\cdot P(B)`}</Math> when events don't affect each other</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
