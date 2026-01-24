import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function SayItSatoshi() {
  return (
    <TranscriptLayout transcriptId="say-it-satoshi">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Hal Finney was the first known Bitcoin recipient and early collaborator</li>
          <li>Finney&apos;s cryonic preservation represents faith in future technological resurrection</li>
          <li>Phish&apos;s 2018 Kasvot Voxt project contains symbolic Bitcoin parallels</li>
          <li>&quot;My thoughts are frozen, like everyone else&quot; connects preservation and alternative systems</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hal Finney and Bitcoin&apos;s Origins</h3>

      <p className="mb-4">
        Hal Finney holds a unique place in Bitcoin history as the first known recipient of a
        Bitcoin transaction from Satoshi Nakamoto. His connection to the project and subsequent
        cryonic preservation due to ALS creates a profound narrative about technological faith.
      </p>

      <Definition title="Hal Finney&apos;s Legacy">
        <p>Key contributions to Bitcoin and cryptography:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>First recipient of a Bitcoin transaction (10 BTC from Satoshi)</li>
          <li>Early bug reporter and code contributor</li>
          <li>Creator of the first reusable proof-of-work system</li>
          <li>Longtime cypherpunk and PGP Corporation employee</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Kasvot Voxt Project</h3>

      <p className="mb-4">
        After Phish&apos;s summer festival at Watkins Glen was cancelled due to flooding, the band
        created an elaborate fictional Scandinavian band for their 2018 Halloween performance:
      </p>

      <Example title="Kasvot Voxt: Fabricated History">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Band Name</p>
            <p className="text-sm text-dark-400">Kasvot Voxt (Finnish meaning explored in the performance)</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Album</p>
            <p className="text-sm text-dark-400">&quot;iRokk&quot; - supposedly released in 1981</p>
          </div>
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Backstory</p>
            <p className="text-sm text-dark-400">Scientists conducting research in Greenland</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Symbolic Connections</h3>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;My thoughts are frozen, like everyone else&quot; - a lyric the author suggests
          communicates that cryonic preservation succeeded and that Bitcoin represents
          civilization&apos;s superior alternative to corrupted monetary systems.
        </p>
      </blockquote>

      <p className="mb-4">
        The article draws parallels between Finney&apos;s cryonic freezing, Bitcoin&apos;s decentralized
        vision, and Phish&apos;s artistic creation through themes of preservation and alternative systems.
      </p>

      <Definition title="iRokk Interpretation">
        <p>
          The author suggests &quot;iRokk&quot; (meaning &quot;Faceplant into Rock&quot; in English) potentially
          critiques gold standards and positions Bitcoin as a superior alternative:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Gold = &quot;Rock&quot; - physical, confiscatable, centralized storage</li>
          <li>&quot;Faceplant&quot; = Failed attempts to return to gold backing</li>
          <li>Bitcoin = Digital gold without physical limitations</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Institutional Relevance</h3>

      <Callout type="info" title="For Institutional Investors">
        <p>
          Understanding Bitcoin&apos;s origins and the motivations of early adopters provides insight into
          the asset&apos;s long-term value proposition. Finney and the cypherpunks sought to create
          money beyond state control - a vision that increasingly resonates with institutions
          seeking monetary sovereignty.
        </p>
      </Callout>

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
          href="#/transcript/phish-and-bitcoin"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Article: Phish and Bitcoin
          </p>
          <p className="text-sm text-dark-500">Network effects and cultural parallels</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
