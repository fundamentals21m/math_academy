import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { Definition, Example } from '@/components/common/ContentBlocks';
import { TimelineExplorer } from '@/components/visualizations';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>Chapter 1: The World of Big Brother</h2>

      <p>
        "It was a bright cold day in April, and the clocks were striking thirteen."
        With this iconic opening line, George Orwell plunges us into the dystopian
        world of <strong>Oceania</strong>, where nothing is quite as it should be—not
        even time itself.
      </p>

      <h3>Winston Smith</h3>

      <p>
        We meet <strong>Winston Smith</strong>, a thirty-nine-year-old man with a
        varicose ulcer above his right ankle. He is a minor functionary in the
        Ministry of Truth, living in Victory Mansions—a run-down apartment building
        that smells of boiled cabbage and old rag mats.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Key Quote</p>
        <p className="mt-2 italic text-dark-300">
          "The flat was seven flights up, and Winston, who was thirty-nine and had
          a varicose ulcer above his right ankle, went slowly, resting several times
          on the way. On each landing, opposite the lift-shaft, the poster with the
          enormous face gazed from the wall."
        </p>
      </div>

      <h3>The Telescreen</h3>

      <p>
        Every apartment contains a <strong>telescreen</strong>—a device that functions
        as both television and surveillance camera. It cannot be turned off, only
        dimmed. The telescreen monitors citizens constantly, watching for any sign
        of unorthodox behavior or "thoughtcrime."
      </p>

      <Definition title="Telescreen">
        <p>
          A two-way screen that simultaneously broadcasts propaganda and monitors
          citizens. It can never be completely turned off, and the Thought Police
          can watch through it at any time. The telescreen represents the total
          erasure of privacy under the Party's rule.
        </p>
      </Definition>

      <h3>Big Brother</h3>

      <p>
        Everywhere Winston looks, he sees the face of <strong>Big Brother</strong>—the
        mustachioed leader of the Party whose portrait dominates every wall, every
        coin, every stamp. The caption beneath reads: "BIG BROTHER IS WATCHING YOU."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20 text-center">
          <p className="text-2xl font-bold text-rose-400">WAR IS PEACE</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20 text-center">
          <p className="text-2xl font-bold text-rose-400">FREEDOM IS SLAVERY</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-rose-500/20 text-center">
          <p className="text-2xl font-bold text-rose-400">IGNORANCE IS STRENGTH</p>
        </div>
      </div>

      <p>
        These three slogans of the Party encapsulate the logic of <strong>doublethink</strong>—the
        ability to hold two contradictory beliefs simultaneously and accept both as true.
      </p>

      <h3>The Four Ministries</h3>

      <p>
        Oceania is governed by four Ministries, each named in deliberate contradiction
        to its actual function:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-rose-400">Ministry of Truth (Minitrue)</strong>: Propaganda and the
          falsification of historical records
        </li>
        <li>
          <strong className="text-rose-400">Ministry of Peace (Minipax)</strong>: Conducts perpetual
          warfare
        </li>
        <li>
          <strong className="text-rose-400">Ministry of Love (Miniluv)</strong>: Torture and
          "rehabilitation" of dissidents
        </li>
        <li>
          <strong className="text-rose-400">Ministry of Plenty (Miniplenty)</strong>: Manages the
          economy and rationing (ensuring scarcity)
        </li>
      </ul>

      <h3>The Two Minutes Hate</h3>

      <p>
        Winston attends the daily ritual of the <strong>Two Minutes Hate</strong>—a
        compulsory session where Party members gather before a telescreen to watch
        images of Emmanuel Goldstein, the alleged enemy of the state, and work
        themselves into a frenzy of hatred.
      </p>

      <Example title="The Two Minutes Hate">
        <p>
          "The horrible thing about the Two Minutes Hate was not that one was obliged
          to act a part, but that it was impossible to avoid joining in... A hideous
          ecstasy of fear and vindictiveness, a desire to kill, to torture, to smash
          faces in with a sledge-hammer, seemed to flow through the whole group of
          people like an electric current."
        </p>
        <p className="mt-2">
          During this session, Winston notices two people: <strong>O'Brien</strong>,
          an Inner Party member whose eyes briefly meet his with apparent understanding,
          and a <strong>dark-haired girl</strong> whom he intensely dislikes because
          she seems to be a zealous Party member.
        </p>
      </Example>

      <h3>The Diary</h3>

      <p>
        In a moment of desperate rebellion, Winston begins writing in a <strong>diary</strong>—a
        beautiful cream-laid paper notebook he purchased from a junk shop in the prole
        district. Keeping a diary is not technically illegal (nothing is technically
        illegal, since there are no laws), but if discovered, it would almost certainly
        result in death or forced labor.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-rose-500">
        <p className="font-semibold text-rose-400">Winston's First Entry</p>
        <p className="mt-2 italic text-dark-300">
          "April 4th, 1984. Last night to the flicks. All war films. One very good one
          of a ship full of refugees being bombed somewhere in the Mediterranean..."
        </p>
        <p className="mt-2 text-dark-400">
          He writes frantically, aware that he has committed thoughtcrime—the essential
          crime that contains all others.
        </p>
      </div>

      <Callout type="warning">
        <strong>Thoughtcrime:</strong> The criminal act of holding unspoken beliefs or
        doubts that oppose the Party. Thoughtcrime does not entail death: thoughtcrime
        IS death.
      </Callout>

      <h3>Themes Introduced</h3>

      <p>
        This opening chapter establishes the novel's central concerns:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li><strong>Surveillance and privacy</strong>: The telescreen's omnipresent eye</li>
        <li><strong>Language and truth</strong>: The Party's contradictory slogans</li>
        <li><strong>Memory and the past</strong>: Winston's impulse to record his thoughts</li>
        <li><strong>Individual vs. collective</strong>: One man's rebellion against total conformity</li>
        <li><strong>Psychological manipulation</strong>: The orchestrated hatred of the Two Minutes Hate</li>
      </ul>

      <Callout type="info">
        <strong>Historical Context:</strong> Orwell wrote <em>Nineteen Eighty-Four</em>
        in 1948, reversing the last two digits for his title. The novel reflects his
        experiences with totalitarianism—both the fascism he fought against in the
        Spanish Civil War and the Stalinist Soviet Union whose propaganda he witnessed
        while working at the BBC.
      </Callout>

      <h3>Interactive: Timeline of Events</h3>
      <p className="mb-4">
        Explore the chronology of events in Nineteen Eighty-Four—from the Revolution
        to Winston's ultimate fate.
      </p>
      <TimelineExplorer />
    </LessonLayout>
  );
}
