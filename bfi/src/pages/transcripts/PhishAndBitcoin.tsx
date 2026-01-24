import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function PhishAndBitcoin() {
  return (
    <TranscriptLayout transcriptId="phish-and-bitcoin">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Phish&apos;s rise parallels Bitcoin&apos;s growth through network effects</li>
          <li>Both built communities through grassroots, peer-to-peer distribution</li>
          <li>The Gamehendge narrative explores themes of tyranny and decentralization</li>
          <li>Early songwriting may contain prophetic references to cryptocurrency</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Band History and Network Effects</h3>

      <p className="mb-4">
        Phish&apos;s formation in 1983 and rise alongside the internet in the 1990s mirrors
        Bitcoin&apos;s later trajectory - both built organic communities through word-of-mouth:
      </p>

      <Example title="Parallel Growth Patterns">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Phish</th>
              <th className="text-left py-2">Bitcoin</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Tape trading distribution</td>
              <td className="py-2">Open-source code sharing</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">600+ concerts (1990-1994)</td>
              <td className="py-2">Early mining community</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Fan-driven growth</td>
              <td className="py-2">Grassroots adoption</td>
            </tr>
            <tr>
              <td className="py-2">Grateful Dead lineage</td>
              <td className="py-2">Cypherpunk lineage</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Definition title="Network Effects">
        <p>
          Both Phish and Bitcoin demonstrate classic network effect dynamics:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Value increases with each new participant</li>
          <li>Early adopters incentivized to recruit others</li>
          <li>Critical mass leads to exponential growth</li>
          <li>Community becomes self-sustaining</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Prophetic Songwriting Analysis</h3>

      <p className="mb-4">
        The article claims Trey Anastasio channeled Bitcoin-related messages in early compositions,
        examining tracks like &quot;Golgi Apparatus&quot; (1986) as containing financial predictions:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          Lyrics are analyzed as potentially anticipating cryptocurrency&apos;s properties:
          instant global transfers, ownership verification, and 24/7 trading. The author
          draws parallels between ticket stubs and private key ownership.
        </p>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Gamehendge Narrative</h3>

      <p className="mb-4">
        Phish&apos;s rock opera explores themes remarkably relevant to Bitcoin&apos;s ethos:
      </p>

      <Example title="Gamehendge Themes">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Tyranny</p>
            <p className="text-sm text-dark-400">Central authority controlling resources and information</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Resource Control</p>
            <p className="text-sm text-dark-400">The &quot;Helping Friendly Book&quot; as controlled knowledge</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Revolution</p>
            <p className="text-sm text-dark-400">Liberation through decentralized distribution</p>
          </div>
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
            <p className="font-medium text-indigo-400">Satoshi Parallel</p>
            <p className="text-sm text-dark-400">
              The narrative&apos;s hero disappearing after enabling freedom mirrors
              Satoshi Nakamoto&apos;s exit after launching Bitcoin
            </p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Cantillon Effect</h3>

      <p className="mb-4">
        The article analyzes certain lyrics as commentary on monetary inequality:
      </p>

      <Definition title="Cantillon Effect in Music">
        <p>
          The Cantillon Effect describes how money creation benefits those closest to the
          source at the expense of those furthest away:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Banks receive new money first, spend at old prices</li>
          <li>Inflation reaches consumers last, after prices rise</li>
          <li>Wealth transfers from savers to those with asset access</li>
          <li>References to 2009 financial crisis and QE in later performances</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Cultural Resilience</h3>

      <p className="mb-4">
        The band&apos;s recovery from their 2004 breakup and Trey&apos;s addiction struggles
        parallels Bitcoin&apos;s survival through multiple &quot;deaths&quot;:
      </p>

      <Callout type="info" title="Mysterious Market Timing">
        <p>
          The article notes Phish&apos;s curious absence during three major market crashes
          (2000-2001, 2008, 2020) - on hiatus or significantly reduced activity during
          each period. Whether coincidence or meaningful pattern is left to the reader.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Institutional Relevance</h3>

      <Definition title="Lessons for Institutions">
        <p>
          The Phish-Bitcoin parallel offers institutional insights:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Organic network growth creates durable value</li>
          <li>Community trumps marketing in building adoption</li>
          <li>Decentralized distribution resists suppression</li>
          <li>Cultural movements can signal economic shifts</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/1"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 1: Bitcoin Fundamentals
          </p>
          <p className="text-sm text-dark-500">Origins and core principles</p>
        </a>
        <a
          href="#/transcript/say-it-satoshi"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Article: Say it to Me S.A.T.O.S.H.I.
          </p>
          <p className="text-sm text-dark-500">Hal Finney and the Kasvot Voxt project</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
