import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Opening Quote */}
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-xl italic text-dark-300">
        "Talk, talk, talk: the utter and heart-breaking stupidity of words."
        <footer className="text-sm text-dark-500 mt-2 not-italic">
          — William Faulkner (quoted by the authors)
        </footer>
      </blockquote>

      {/* Introduction */}
      <p className="text-lg text-dark-300 mb-6">
        <strong className="text-orange-400">Only The Strong Survive</strong> is a philosophical,
        technical, and economic critique of prospects in "crypto" beyond Bitcoin, written by
        Allen Farrington and Anders Larson, General Partners at Axiom Venture Partners.
      </p>

      <Callout type="warning">
        <p>
          <strong>Disclaimer:</strong> This document is not financial or investment advice.
          It is intended as a philosophical, technical, and economic assessment of a novel
          class of internet protocols. Readers considering investing in any asset discussed
          should do their own research.
        </p>
      </Callout>

      {/* The Core Argument */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Core Argument</h2>

      <p className="my-4">
        Bitcoin is an important innovation. The authors doubt any serious financial professional
        now disputes this. However, the importance of Bitcoin's many imitations, collectively
        dubbed "cryptocurrencies" or just "crypto," is contentious.
      </p>

      <p className="my-4">
        The paper's central argument is twofold:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">i) Value Will Disappear</h3>
          <p className="text-dark-300 text-sm">
            In the long run, much of the current value in crypto will prove unsustainable
            and therefore will disappear.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">ii) Bitcoin Will Capture It</h3>
          <p className="text-dark-300 text-sm">
            Systems built on Bitcoin may capture much of this value as similar functionality
            is developed on Bitcoin's more robust foundation.
          </p>
        </div>
      </div>

      {/* Three Themes */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Three Primary Themes</h2>

      <p className="my-4">
        The arguments revolve around three primary analytical lenses:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            1
          </span>
          <div>
            <p className="font-semibold text-dark-100">Philosophical</p>
            <p className="text-sm text-dark-400 mt-1">
              The core properties that make Bitcoin work and make it unique: proof-of-work,
              the difficulty adjustment, and the emergent monetary unit.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            2
          </span>
          <div>
            <p className="font-semibold text-dark-100">Technical</p>
            <p className="text-sm text-dark-400 mt-1">
              How these properties are lacking in alternative crypto assets, having been
              designed out on questionable philosophical justifications.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            3
          </span>
          <div>
            <p className="font-semibold text-dark-100">Economic</p>
            <p className="text-sm text-dark-400 mt-1">
              Crypto has not shown a path to establishing justifiable real-world value,
              making its technical flaws especially vulnerable.
            </p>
          </div>
        </div>
      </div>

      {/* Defining Terms */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Defining Terms</h2>

      <p className="my-4">
        The authors are strongly supportive of the <em>concept</em> of decentralized finance (DeFi),
        which they define as:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200">
          An ecosystem in which the building blocks of financial and capital markets products are
          freely accessible to all; their workings are transparently inspectable and auditable on
          the basis of free and open-source code; not only products but even marketplace architecture
          operates on these principles; and no individual or entity can maliciously or politically
          affect market activity.
        </p>
      </div>

      <p className="my-4">
        However, the authors argue that the current <em>instantiation</em> of this concept
        (what they call "crypto") is built on unfirm foundations and unlikely to last.
      </p>

      <Callout type="info">
        <p>
          <strong>Terminology:</strong> Throughout this paper, "DeFi" or "decentralized finance"
          refers only to the <em>concept</em>. "Crypto" refers to the current, non-Bitcoin based
          instantiation.
        </p>
      </Callout>

      {/* About the Authors */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">About the Authors</h2>

      <p className="my-4">
        Allen Farrington and Anders Larson are General Partners at Axiom Venture Partners,
        an appointed representative of Kingsway Capital Partners Limited, which is authorized
        and regulated by the Financial Conduct Authority in the United Kingdom.
      </p>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Bitcoin is an important innovation that even skeptics now acknowledge.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              The paper argues crypto's value will prove unsustainable and Bitcoin will
              capture much of it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Analysis covers philosophical, technical, and economic dimensions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              The authors support <em>decentralized finance</em> as a concept but critique
              its current crypto implementation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
