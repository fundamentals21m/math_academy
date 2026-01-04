import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "It was a symphony of triumph... The notes broke out of sequence, not by a flaw but by intention, as if to say that nothing but joy could be the reason for their existence."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Description of Richard Halley's Fifth Concerto
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "The Concerto of Deliverance" celebrates the role of art in human life. Through Richard
        Halley's music—and Dagny's response to it—Rand presents her aesthetic theory: great art
        is not an escape from reality but a projection of the ideal, a vision of what life could
        and should be.
      </p>

      <Callout type="info">
        <p>
          <strong>Art as Fuel:</strong> Rand believed that art provides "spiritual fuel" for
          living—it makes abstract values concrete and shows us what we are fighting for.
          The Fifth Concerto represents this function at its highest.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        Dagny attends a performance of Richard Halley's Fifth Concerto—the concerto he wrote
        after joining the strike, the music the world has never heard. It is called "The Concerto
        of Deliverance" because it expresses the joy of liberation: the joy of a creator freed
        from those who demanded he create for their benefit rather than his own.
      </p>

      <p className="my-4">
        The music affects Dagny profoundly. Throughout her life, she has heard fragments of what
        she believed music could be—in Halley's early work, in certain passages that hinted at
        a grandeur the world seemed to forbid. Now she hears the complete vision, the music Halley
        could only write after escaping the world that had tortured him for years before accepting
        his genius.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Nature of the Music</h4>
        <p className="text-dark-200 text-lg mb-4">
          "It was not a hymn to suffering but a celebration of living... It said that man's
          glory is not in his struggle but in his achievement, not in pain but in its conquest."
        </p>
        <p className="text-dark-400 text-sm">
          The Fifth Concerto rejects the traditional view that great art must express anguish.
        </p>
      </div>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Art as Metaphysics</h3>
          <p className="text-dark-300 text-sm">Great art expresses a view of existence—the artist's fundamental sense of what life is and can be</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Joy as Achievement</h3>
          <p className="text-dark-300 text-sm">The concerto celebrates joy not as accident but as earned—the reward of successful living</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">The Artist's Liberation</h3>
          <p className="text-dark-300 text-sm">Only after joining the strike could Halley write the music he had always carried within him</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Recognition and Value</h3>
          <p className="text-dark-300 text-sm">Halley withdrew when the world finally accepted him—because the acceptance came too late, after years of unearned suffering</p>
        </div>
      </div>

      {/* Richard Halley's Story */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Richard Halley's Story</h2>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Years of Rejection</h4>
          <p className="text-sm text-dark-300">
            For nineteen years, Halley's music was rejected. Critics called it too demanding,
            too uncompromising, too joyful. The world wanted music that expressed suffering.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Sudden Acceptance</h4>
          <p className="text-sm text-dark-300">
            When the world finally embraced his work, Halley felt not triumph but revulsion.
            They cheered now what they had condemned for years—with no apology, no acknowledgment.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Withdrawal</h4>
          <p className="text-sm text-dark-300">
            On the night of his greatest triumph, Halley announced his retirement. He would
            not create for a world that granted recognition as a gift rather than as justice.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Fifth Concerto</h4>
          <p className="text-sm text-dark-300">
            In the valley, free at last, Halley composed his masterpiece—the music he could
            never have written while bound to a world that hated his values.
          </p>
        </Card>
      </CardGrid>

      {/* Notable Events */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Notable Events</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">1</span>
          <div>
            <p className="font-semibold text-dark-100">The Concert</p>
            <p className="text-sm text-dark-400">Halley performs his Fifth Concerto for the residents of the valley—the audience it was written for</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">2</span>
          <div>
            <p className="font-semibold text-dark-100">Dagny's Response</p>
            <p className="text-sm text-dark-400">The music confirms everything Dagny has believed about what life could be—the vision she has fought for</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">3</span>
          <div>
            <p className="font-semibold text-dark-100">Halley's Explanation</p>
            <p className="text-sm text-dark-400">The composer explains why he withdrew and why he could only create this work in freedom</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-amber-600 rounded-full text-white font-bold text-sm shrink-0">4</span>
          <div>
            <p className="font-semibold text-dark-100">The Philosophy of Art</p>
            <p className="text-sm text-dark-400">The chapter presents Rand's view that art should project the ideal, not wallow in depravity</p>
          </div>
        </div>
      </div>

      <Callout type="note">
        <p>
          <strong>The Title of the Concerto:</strong> "Deliverance" refers not to escape from
          life but to liberation into it—the freedom to create without apology, to celebrate
          achievement without guilt, to express joy without shame.
        </p>
      </Callout>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <p className="my-4">
        <strong className="text-amber-400">Dagny</strong> experiences a profound emotional response
        to the music. Throughout her life, she has sensed that such music should exist—that art
        should celebrate life rather than denigrate it. Halley's Fifth Concerto is the confirmation
        of everything she has believed and fought for.
      </p>

      <p className="my-4">
        <strong className="text-amber-400">Richard Halley</strong> represents the artist who refuses
        to create for an unworthy audience. He explains that he did not withdraw because the world
        rejected him—he withdrew when they accepted him, because their acceptance was as arbitrary
        and unearned as their rejection had been.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Why Halley Left</h4>
        <p className="text-dark-200 text-lg">
          "They had not changed, those people who cheered me. They could have heard the same
          music twenty years earlier. But they did not choose to hear it. Then one night, they
          chose to hear it. As an arbitrary gift. I was not going to accept that."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          Recognition given as a favor rather than as earned tribute was worthless to Halley.
        </p>
      </div>

      {/* Rand's Aesthetic Theory */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Role of Art</h2>

      <p className="my-4">
        The chapter presents Rand's view of what art should be and do:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 border border-amber-600/50 my-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Art projects the artist's fundamental sense of life—his view of existence and man's place in it</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Great art shows life as it could and should be, not as a meaningless chaos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Art provides "spiritual fuel"—concrete images of abstract values that inspire and sustain us</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>The proper response to great art is not passive contemplation but active recognition of shared values</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400">*</span>
            <span>Art that celebrates suffering and ugliness reflects a corrupt philosophy of life</span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>Dagny's Deepening Conflict:</strong> The beauty she experiences in the valley
          makes her return to the outside world even more difficult. She has seen what life
          can be—can she really go back to the world of James Taggart and Wesley Mouch?
        </p>
      </Callout>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Rand argues that great art should project the ideal—a vision of "what life could and should be." Do you agree with this view of art's purpose, or can art that explores suffering, tragedy, or moral ambiguity also be considered great? What makes art valuable?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Richard Halley withdrew from the public not when his work was rejected, but when it was finally accepted—because the acceptance felt "arbitrary." What point is Rand making about recognition and justice? Do artists have the right to demand that their audience understand and appreciate their work on specific terms?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. The chapter describes art as "spiritual fuel" that sustains us in our struggle to live by our values. Can you think of works of art, music, or literature that have served this function in your own life? What qualities made them inspiring?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Halley could only compose his masterpiece after escaping to the valley. What does this suggest about the relationship between freedom and creativity? Are there conditions under which great art cannot be produced, or can creativity flourish even under oppression?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Art should celebrate life:</strong> The Fifth Concerto expresses joy and
              triumph, not suffering—it shows what existence can be at its best.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>Artists need worthy audiences:</strong> Halley withdrew not from rejection
              but from arbitrary acceptance—recognition must be earned, not granted as a gift.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Freedom enables creation:</strong> Only after escaping the outside world
              could Halley write the music he had always carried within him.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Art is spiritual fuel:</strong> Great art provides concrete images of
              abstract values, sustaining us in the struggle to live by those values.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Dagny experiences her ideal:</strong> The concert deepens her connection
              to the valley and makes her return to the outside world more painful.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
