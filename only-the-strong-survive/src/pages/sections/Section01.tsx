import { LessonLayout } from '../../components/layout/LessonLayout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Section Summary Header */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Overview and Section Summaries</h2>

      <p className="my-4">
        The authors' concerns about crypto revolve around two main worries about non-Bitcoin DeFi
        built on what they consider design folly:
      </p>

      <ol className="list-decimal list-inside space-y-2 my-6 ml-4">
        <li className="text-dark-300">
          The design folly means they are unlikely to last as allegedly robust, decentralized assets
        </li>
        <li className="text-dark-300">
          This fundamental flaw has encouraged attempting to bootstrap alternative value that cannot
          be justified because the applications are not really finance
        </li>
      </ol>

      {/* Section 1 Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Section 1: The Innovation From First Principles
        </h3>
        <p className="text-dark-300">
          A philosophical analysis of what the authors believe to be the real innovation in Bitcoin:
          proof-of-work and the difficulty adjustment enabling distributed consensus and "money" as an
          emergent and endogenous use case.
        </p>
      </div>

      {/* Section 2 Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Section 2: Crypto Is Not Decentralized
        </h3>
        <p className="text-dark-300">
          The argument that the variety of changes crypto projects make to Bitcoin's design make it
          likely that all instantiations will have to centralize at some point. This undermines alleged
          goals, makes it a questionably costly alternative to already centralized systems, and introduces
          an even more ominous attack vector: not technical or economic but <em>social</em>.
        </p>
      </div>

      {/* Section 3 Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Section 3: Crypto Is Not Finance
        </h3>
        <p className="text-dark-300">
          The argument that the attempt to bootstrap value via utility in financial applications does not
          solve crypto's core problem but exacerbates it and delays resolution. Common metrics capturing
          "financial activity" are deeply misleading and primarily serve to encourage further capital
          inflows necessary to sustain the ecosystem without contributing to real economic productivity.
        </p>
      </div>

      {/* Section 4 Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Section 4: The "Investment" Rationale
        </h3>
        <p className="text-dark-300">
          A rationale for investing in the space to date, arguing that the most sensible investment thesis
          is essentially a subtle category error: transferring principles from software venture investing
          that do not quite apply. Only a certain class of investors is likely to commit this error, and
          the realization that others will not follow will likely mark the beginning of the end.
        </p>
      </div>

      {/* Section 5 Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Section 5: Layered Architecture and Gall's Law
        </h3>
        <p className="text-dark-300">
          The argument that desirable DeFi features will likely emerge on Bitcoin. The fact of these
          features taking longer and being more difficult to build is fundamentally good: it reflects
          that Bitcoin's architecture has been built in a more robust and prudent manner. Ironically,
          in the long run, this is likely what will enable extension of functionality.
        </p>
      </div>

      {/* Section 6 Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Section 6: Why We Might Be Wrong
        </h3>
        <p className="text-dark-300">
          A short final section giving a (non-exhaustive) list of reasons why the analysis may turn
          out to be mistaken.
        </p>
      </div>

      {/* Appendix A Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Appendix A: Common Pool Resources
        </h3>
        <p className="text-dark-300">
          The argument that all "crypto assets," Bitcoin included, are properly understood as "common
          pool resources." According to Elinor Ostrom's analysis, the governance characteristics of
          Bitcoin are excellent while those typical of crypto are mediocre to poor.
        </p>
      </div>

      {/* Appendix B Summary */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-8">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">
          Appendix B: Rehypothecation Algebra
        </h3>
        <p className="text-dark-300">
          The mathematical workings for calculating systemic exposure, contrary to naive claims of
          "overcollateralization ratios" common in the space.
        </p>
      </div>
    </LessonLayout>
  );
}
