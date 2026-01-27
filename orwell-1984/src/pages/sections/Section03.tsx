import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Chapter 4: The Ministry of Truth</h2>

      <p>
        This chapter takes us inside Winston's workplace at the <strong>Ministry of
        Truth</strong>, revealing the horrifying machinery of historical falsification
        that keeps the Party's narrative consistent.
      </p>

      <h3>Records Department</h3>

      <p>
        Winston works in the <strong>Records Department</strong> of the Ministry of
        Truth. His job is to "rectify" historical records—newspapers, books, magazines—to
        ensure they match the Party's current version of events. Old records are
        destroyed in "memory holes" and replaced with corrected versions.
      </p>

      <Definition title="Memory Hole">
        <p>
          A slot in the wall connected to an incinerator. All documents marked for
          destruction are dropped into memory holes. Once destroyed, the information
          they contained never officially existed. The term "memory hole" has entered
          common usage to describe the deliberate erasure of inconvenient facts.
        </p>
      </Definition>

      <h3>Winston's Work</h3>

      <p>
        Winston's typical tasks include:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>Altering newspaper articles to match current Party positions</li>
        <li>Deleting references to "unpersons"—people who have been vaporized</li>
        <li>Changing statistics to show the Party has always exceeded its targets</li>
        <li>Rewriting history to show the Party has always been right</li>
      </ul>

      <Example title="Rectifying the Past">
        <p>
          In one task, Winston must rewrite a Big Brother speech. The original speech
          praised a certain "Comrade Withers," who has since become an unperson. Winston
          must invent a fictional "Comrade Ogilvy" to replace him—complete with a heroic
          backstory and noble death in battle.
        </p>
        <p className="mt-2">
          "Comrade Ogilvy, who had never existed in the present, now existed in the past,
          and when once the act of forgery was forgotten, he would exist just as authentically,
          and upon the same evidence, as Charlemagne or Julius Caesar."
        </p>
      </Example>

      <h3>The Structure of Minitrue</h3>

      <p>
        The Ministry of Truth is a vast pyramid of white concrete, rising 300 meters
        into the air. On its face are the three Party slogans. Inside, thousands of
        workers labor to maintain the fiction that the Party is infallible.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Departments of Minitrue</p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><strong>Records Department:</strong> Altering past records (Winston's section)</li>
          <li><strong>Fiction Department:</strong> Producing novels, films, and music for the proles</li>
          <li><strong>Pornography Section:</strong> Creating degraded entertainment for the proles</li>
          <li><strong>Tele-programmes:</strong> Broadcasting propaganda via telescreen</li>
        </ul>
      </div>

      <h3>Speakwrite and Newspeak</h3>

      <p>
        Winston dictates his corrections into a <strong>speakwrite</strong>—a device
        that transcribes spoken words. The documents are written in <strong>Newspeak</strong>,
        the official language of Oceania designed to limit thought.
      </p>

      <Callout type="info">
        <strong>Language and Thought:</strong> The Ministry of Truth's work is closely
        connected to Newspeak. By controlling language and history simultaneously,
        the Party makes it impossible to express—or even conceive of—ideas that
        challenge its authority.
      </Callout>

      <h3>The Nature of Winston's Crime</h3>

      <p>
        The irony of Winston's position is profound: he understands the lie because
        he is complicit in creating it. He knows the past is constantly being rewritten
        because he does the rewriting. Yet he cannot prove anything—all evidence is
        destroyed, and his own memories are deemed unreliable.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "Day by day and almost minute by minute the past was brought up to date...
          All history was a palimpsest, scraped clean and reinscribed exactly as often
          as was necessary."
        </p>
      </div>

      <h3>Themes Developed</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Control of History:</strong> The Party's
          power to remake the past
        </li>
        <li>
          <strong className="text-rose-400">Complicity:</strong> Winston's role in
          perpetuating the system he hates
        </li>
        <li>
          <strong className="text-rose-400">Truth and Reality:</strong> The impossibility
          of objective truth under totalitarianism
        </li>
        <li>
          <strong className="text-rose-400">Language as Control:</strong> How limiting
          language limits thought
        </li>
      </ul>

      <Callout type="warning">
        <strong>Modern Relevance:</strong> Orwell's depiction of historical falsification
        has become increasingly relevant in the age of digital information. The ease
        with which records can be altered or deleted, and the phenomenon of "memory
        holing" inconvenient facts, makes <em>Nineteen Eighty-Four</em> a prescient
        warning about information control.
      </Callout>
    </LessonLayout>
  );
}
