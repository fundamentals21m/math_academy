import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Layered Architecture Is Superior</h2>

      <p className="my-4">
        Many, if not all, of Bitcoin's higher layers are often lazily described as clunky workarounds
        to the technical limitations of the Bitcoin timechain.
      </p>

      <Callout type="warning">
        <p>
          <strong>The authors vigorously reject this notion</strong> on the technical grounds that
          layered architecture is <em>objectively optimal engineering</em>.
        </p>
      </Callout>

      {/* The Naive View vs Mature View */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Naive View vs The Mature View</h2>

      <p className="my-4">
        Cramming all the features of Lightning, Liquid, DLCs, RGB, and so on into the mainchain
        is not only probably technically impossible, but — arguably in an aesthetic sense — is
        just an obviously bad idea.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-red-600/30">
          <h3 className="text-lg font-semibold text-red-400 mb-2">The Naive View</h3>
          <p className="text-dark-300 text-sm">
            This compounds the utility of every functionality. More features = more value.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-green-600/30">
          <h3 className="text-lg font-semibold text-green-400 mb-2">The Mature View</h3>
          <p className="text-dark-300 text-sm">
            This compounds only the <strong>vulnerabilities</strong>. Each functionality becomes
            more vulnerable, and utility dramatically decreases.
          </p>
        </div>
      </div>

      {/* TCP/IP Example */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The TCP/IP Analogy</h2>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          If TCP/IP had been configured to enable video streaming, for example, it would have
          broken immediately if it had ever worked at all.
        </p>
        <p className="text-dark-200 mt-4 font-semibold text-orange-400">
          This is a feature, not a bug.
        </p>
      </div>

      <p className="my-4">
        It reflects the mindset not of a cargo cult bureaucrat, but rather of a <strong>prudent
        and humble engineer</strong>, mindful of Gall's Law from John Gall's <em>Systemantics</em>.
      </p>

      {/* Gall's Law */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Gall's Law</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-xl text-dark-200 italic text-center">
          "A complex system that works is invariably found to have evolved from a simple system
          that worked. A complex system designed from scratch never works and cannot be patched
          up to make it work."
        </p>
        <p className="text-dark-400 text-sm mt-4 text-center">— John Gall, Systemantics</p>
      </div>

      <p className="my-4">
        The general principle favoring Bitcoin's layered architecture is not one of software
        engineering so much as <strong>engineering entirely in general</strong>, yet elegantly
        applied to software.
      </p>

      {/* Clear Specialization */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Clear Specialization</h2>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 italic">
          "This clear specialization ensures performance, reliability, and scalability of the
          Internet."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          — Thibaud Maréchal, "A Monetary Layer for the Internet"
        </p>
      </div>

      <p className="my-4">
        This might seem like an argument in favor of the Lightning Network from an oddly axiomatic
        basis — almost fatalistic along the lines of "software eats the money." However, this
        insight has ample historical precedent predating "software" by several centuries.
      </p>

      {/* The Key Insight */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Key Insight</h2>

      <p className="my-4">
        The key insight is one of <strong>institutional design</strong>, transcending software
        entirely, of which software is one special case amongst many.
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            1
          </span>
          <p className="text-dark-200">
            Simple, robust base layers that do one thing well
          </p>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            2
          </span>
          <p className="text-dark-200">
            Conscious trade-offs between different layers for different use cases
          </p>
        </div>
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            3
          </span>
          <p className="text-dark-200">
            Evolution from working simple systems to working complex systems
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              <strong>Layered architecture</strong> is objectively optimal engineering, not a
              workaround.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              Adding all features to the base layer compounds <strong>vulnerabilities</strong>,
              not utility.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              <strong>Gall's Law</strong>: complex working systems evolve from simple working
              systems.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              Bitcoin's approach reflects <strong>prudent engineering</strong>, not technical
              limitation.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
