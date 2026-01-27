import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';
import { NewspeakTranslator } from '@/components/visualizations';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2>Appendix: The Principles of Newspeak</h2>

      <p>
        The novel concludes with an appendix describing <strong>Newspeak</strong>—the
        official language of Oceania. Written in an academic style and in the past
        tense, it offers both a detailed linguistic analysis and a glimmer of hope.
      </p>

      <h3>The Purpose of Newspeak</h3>

      <Definition title="Newspeak">
        <p>
          "Newspeak was the official language of Oceania and had been devised to meet
          the ideological needs of Ingsoc, or English Socialism... The purpose of
          Newspeak was not only to provide a medium of expression for the world-view
          and mental habits proper to the devotees of Ingsoc, but to make all other
          modes of thought impossible."
        </p>
      </Definition>

      <p>
        Newspeak was designed to shrink rather than expand language. By eliminating
        words, the Party eliminated the concepts they represented. The goal was to
        make thoughtcrime literally impossible.
      </p>

      <h3>The Three Vocabularies</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">The A Vocabulary:</strong> Everyday words
          (eat, drink, run) stripped of all ambiguity and secondary meanings
        </li>
        <li>
          <strong className="text-rose-400">The B Vocabulary:</strong> Political words
          constructed for ideological purposes (goodthink, crimestop, duckspeak)
        </li>
        <li>
          <strong className="text-rose-400">The C Vocabulary:</strong> Technical and
          scientific terms, only for specialists
        </li>
      </ul>

      <h3>Grammar and Word Formation</h3>

      <Example title="Newspeak Grammar">
        <p>
          Newspeak simplified grammar ruthlessly:
        </p>
        <ul className="mt-2 space-y-1">
          <li><strong>good → ungood</strong> (replaces "bad")</li>
          <li><strong>good → plusgood</strong> (replaces "excellent")</li>
          <li><strong>good → doubleplusgood</strong> (replaces "superb")</li>
          <li><strong>think → thinkful</strong> (adjective form)</li>
          <li><strong>speedful → speedwise</strong> (adverb form)</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Any word could be negated with "un-" or intensified with "plus-" and
          "doubleplus-", eliminating thousands of words.
        </p>
      </Example>

      <h3>Key Newspeak Terms</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20">
          <p className="font-bold text-rose-400">Crimethink</p>
          <p className="text-dark-300 text-sm">Thoughtcrime; all unorthodox thought</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20">
          <p className="font-bold text-rose-400">Doublethink</p>
          <p className="text-dark-300 text-sm">Holding two contradictory beliefs simultaneously</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20">
          <p className="font-bold text-rose-400">Blackwhite</p>
          <p className="text-dark-300 text-sm">Calling black white when required by the Party</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20">
          <p className="font-bold text-rose-400">Duckspeak</p>
          <p className="text-dark-300 text-sm">Speaking orthodoxy without thought, like a duck quacking</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20">
          <p className="font-bold text-rose-400">Goodthink</p>
          <p className="text-dark-300 text-sm">Orthodoxy; thinking in the approved manner</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20">
          <p className="font-bold text-rose-400">Ownlife</p>
          <p className="text-dark-300 text-sm">Individualism and eccentricity (negative)</p>
        </div>
      </div>

      <h3>The Destruction of Literature</h3>

      <p>
        By 2050, when Newspeak was to be fully implemented, all literature of the past
        would be unintelligible. Even Party slogans would need translation:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "A passage such as: 'We hold these truths to be self-evident, that all men
          are created equal, that they are endowed by their creator with certain
          inalienable rights...' would have been impossible to render into Newspeak."
        </p>
      </div>

      <Callout type="info">
        <strong>A Ray of Hope:</strong> The Appendix is written entirely in the past
        tense: "Newspeak WAS the official language of Oceania." This suggests that
        at some point after the novel's events, Oceania and its language ceased to
        exist. The nightmare ended. Orwell may have included this subtle indication
        that totalitarianism, however powerful, is not eternal.
      </Callout>

      <h3>Themes Concluded</h3>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong className="text-rose-400">Language and Thought:</strong> The connection between vocabulary and cognition</li>
        <li><strong className="text-rose-400">Control of Expression:</strong> How limiting language limits reality</li>
        <li><strong className="text-rose-400">Historical Perspective:</strong> The past-tense narration as potential hope</li>
      </ul>

      <h3>Interactive: Newspeak Dictionary</h3>
      <p className="mb-4">
        Explore the vocabulary of Newspeak and see how language control enables thought control.
      </p>
      <NewspeakTranslator />

      <Callout type="success">
        <strong>Course Complete:</strong> You have completed your study of George
        Orwell's <em>Nineteen Eighty-Four</em>. The novel remains one of the most
        influential works of the twentieth century—a warning about totalitarianism,
        surveillance, and the manipulation of truth that grows more relevant with
        each passing year.
      </Callout>
    </LessonLayout>
  );
}
