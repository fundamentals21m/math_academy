import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Card, CardGrid } from '../../components/common/Card';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "The John Galt Line. Start to tear it up as good as with my own hands... Get it ready to be closed, then tear it up and use its pieces to reinforce the transcontinental track."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — Dagny Taggart, facing the destruction of her greatest achievement
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        "Miracle Metal" shows the consequences of political control over the economy reaching
        a critical point. Dagny must dismantle the John Galt Line—her greatest achievement—to
        salvage materials for the crumbling transcontinental system. Meanwhile, Francisco
        reveals more of his hidden purpose to both Dagny and Rearden.
      </p>

      <Callout type="info">
        <p>
          <strong>The Title's Irony:</strong> Rearden Metal was called a "miracle metal" by
          those who celebrated its potential. Now, the government's regulations have made
          it impossible to produce enough of it, and the structures built with it must be
          cannibalized to keep the rest of the system barely functioning.
        </p>
      </Callout>

      {/* Chapter Summary */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Chapter Summary</h2>

      <p className="my-4">
        The railroad's financial situation has become critical. The Taggart Board meets with
        a "man from Washington" to discuss the impossible demands being placed on the company:
        unions want higher wages, shippers want lower rates, and the government wants the
        appearance of prosperity without the substance.
      </p>

      <p className="my-4">
        Dagny faces the heartbreaking task of dismantling the John Galt Line. With Colorado's
        industries dead and the traffic that justified the line vanished, she must tear up
        the rail she built and use it to patch the deteriorating main line. Francisco meets
        her to offer comfort—and to reveal more of his mysterious purpose.
      </p>

      {/* The Board Meeting */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Board Meeting</h2>

      <p className="my-4">
        The Taggart Board meets in an inadequately heated room, the directors huddled in
        sweaters and mufflers. A man from Washington—Mr. Weatherby—sits among them, his
        presence a reminder that the real decisions are made elsewhere.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">The Impossible Situation</h4>
        <p className="text-dark-200 text-lg mb-4">
          The main line's track is in "deplorable, not to say critical, condition"—while
          the only good rail the company owns is on the Rio Norte Line (formerly the John
          Galt Line). Factories have closed throughout Taggart territory, revenues have
          collapsed, but the railroad cannot raise rates or cut service.
        </p>
        <p className="text-dark-400 text-sm">
          The Board cannot even discuss raising rates—Mr. Weatherby makes clear that the
          subject is off limits.
        </p>
      </div>

      <CardGrid>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Shippers' Demands</h4>
          <p className="text-sm text-dark-300">
            Companies that used government to destroy their competitors now demand
            cheaper rates—though there's not enough traffic to justify any rates.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">The Unions' Demands</h4>
          <p className="text-sm text-dark-300">
            Workers want higher wages even as the railroad loses money on every
            train it runs.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Washington's Control</h4>
          <p className="text-sm text-dark-300">
            The real power in the room is Mr. Weatherby—the Board can only discuss
            what Washington permits them to discuss.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold text-amber-400 mb-2">Jim's Failure</h4>
          <p className="text-sm text-dark-300">
            Jim's "friendship" with Wesley Mouch has apparently failed—his political
            connections are no longer protecting the railroad.
          </p>
        </Card>
      </CardGrid>

      {/* Dismantling the John Galt Line */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Tearing Up the John Galt Line</h2>

      <p className="my-4">
        Dagny must personally oversee the destruction of her greatest achievement. She will
        tear up the John Galt Line and use its Rearden Metal rails to patch the decaying
        main line. It is the only way to keep the transcontinental system running.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Dagny's Resolve</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "There's a lot of work to do. It will keep me busy. You know, I'm looking forward
          to it. I'm glad that I'll have to do it myself. That's why Nat Taggart worked all
          that night just to keep going. It's not so bad as long as there's something one
          can do. And I'll know, at least, that I'm saving the main line."
        </p>
      </div>

      <Callout type="warning">
        <p>
          <strong>Francisco's Question:</strong> "What if it were the main line that you
          had to dismember?" Dagny answers that she would let the last engine run over
          her—then corrects herself: "No. That's just self-pity. I wouldn't." But she
          admits she would wish she could.
        </p>
      </Callout>

      {/* Francisco's Revelations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Francisco's Hidden Purpose</h2>

      <p className="my-4">
        Francisco meets Dagny for the first time in twelve years by his own choice—not
        by accident. He helps her through her moment of despair, offering the comfort of
        a living intelligence that understands what she faces.
      </p>

      <p className="my-4">
        He speaks of Sebastian d'Anconia, his ancestor, who waited fifteen years for the
        woman he loved because he knew she could not survive his battle and he could not
        call her until it was won. The implication is unmistakable—Francisco has been
        fighting a battle of his own, and he still loves Dagny.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-amber-600/30 my-6">
        <h4 className="font-semibold text-amber-400 mb-3">Prometheus Unchained</h4>
        <p className="text-dark-200 text-lg mb-4 italic">
          "John Galt is Prometheus who changed his mind. After centuries of being torn
          by vultures in payment for having brought to men the fire of the gods, he broke
          his chains—and he withdrew his fire—until the day when men withdraw their vultures."
        </p>
        <p className="text-dark-400 text-sm">
          Francisco's definition of John Galt reveals the philosophical meaning behind the
          mysterious question.
        </p>
      </div>

      {/* The Relationship Triangle */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Dagny, Francisco, and Rearden</h2>

      <p className="my-4">
        The chapter reveals the complex relationships between the three. Dagny asks Francisco
        what he has done to Hank Rearden—Rearden once said Francisco was the only man he'd
        ever liked, but now says he would kill him on sight.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 text-lg mb-4 italic">
          "He was the only man—with one exception—to whom I could have given my life!"
          <br /><br />
          "Who is the exception?"
          <br /><br />
          "The man to whom I have."
        </p>
        <p className="text-dark-400 text-sm">
          Francisco admits that Rearden was one of only two men to whom he could have
          given his life—the other being the mysterious leader he now serves.
        </p>
      </div>

      <Callout type="note">
        <p>
          <strong>The Pattern:</strong> Francisco always seems to hurt most those who
          mean the most to him. He has wounded Dagny by abandoning her, and now he has
          done something to turn Rearden against him. Yet Dagny senses that this is
          somehow part of a larger purpose she cannot yet understand.
        </p>
      </Callout>

      {/* Key Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Themes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Creative Destruction</h3>
          <p className="text-dark-300 text-sm">Dagny must destroy what she built to preserve what remains—a metaphor for the choices facing all producers in a collapsing system.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Prometheus's Choice</h3>
          <p className="text-dark-300 text-sm">Francisco's definition of John Galt frames the strike as Prometheus withdrawing his fire rather than continuing to suffer for an ungrateful world.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Hidden Love</h3>
          <p className="text-dark-300 text-sm">Francisco reveals that he has been waiting for Dagny, unable to call her until his battle is won—like Sebastian d'Anconia before him.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Washington's Power</h3>
          <p className="text-dark-300 text-sm">The Board meeting shows how thoroughly political control has supplanted business decision-making—the directors can only discuss what Washington permits.</p>
        </div>
      </div>

      {/* Character Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Character Development</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Dagny Taggart</h4>
          <p className="text-dark-300 text-sm">
            Faces the destruction of her greatest achievement with characteristic resolve.
            She will do the work herself, finding meaning in action even when the action
            is to dismantle what she built. But Francisco's question haunts her—what if
            she had to destroy the main line itself?
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">Francisco d'Anconia</h4>
          <p className="text-dark-300 text-sm">
            Reveals more of his hidden purpose. He has been waiting for Dagny, fighting
            a battle he cannot yet explain. His definition of John Galt as "Prometheus
            who changed his mind" provides the clearest statement yet of the strike's
            philosophical meaning.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="font-semibold text-amber-400 mb-2">James Taggart</h4>
          <p className="text-dark-300 text-sm">
            His political connections have failed him. Wesley Mouch is no longer protecting
            the railroad, and Jim's smooth confidence is cracking under the strain of a
            situation his methods cannot handle.
          </p>
        </div>
      </div>

      {/* Discussion Questions */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Discussion Questions</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">1. Dagny must tear up the John Galt Line—her greatest achievement—to save the main line. Have you ever had to sacrifice something you created to preserve something larger? How did you decide what to prioritize?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">2. Francisco defines John Galt as "Prometheus who changed his mind"—withdrawing his fire rather than continuing to suffer for an ungrateful world. Is this a heroic act or an abandonment of responsibility?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">3. The Board cannot even discuss raising rates because Washington forbids it. When government controls business decisions, who bears the responsibility for the consequences—the businesses that comply or the government that dictates?</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-200">4. Francisco tells Dagny, "We can never lose the things we live for. We may have to change their form at times... but the purpose remains the same." How can we distinguish between essential purposes and the forms they take?</p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <span>
              <strong>Dagny must dismantle the John Galt Line</strong>—her greatest
              achievement—to salvage materials for the crumbling main line.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <span>
              <strong>The Board meeting reveals</strong> how thoroughly Washington controls
              business decisions—the directors cannot even discuss raising rates.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <span>
              <strong>Francisco defines John Galt</strong> as "Prometheus who changed his
              mind"—withdrawing his fire until men withdraw their vultures.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <span>
              <strong>Francisco reveals</strong> he has been waiting for Dagny, unable to
              call her until his mysterious battle is won.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">5.</span>
            <span>
              <strong>Francisco has given his life</strong> to a man—presumably the leader
              of the strike—the only person besides Rearden he would have served.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
