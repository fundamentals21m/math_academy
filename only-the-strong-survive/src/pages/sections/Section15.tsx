import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Historical Precedent: Renaissance Florence</h2>

      <p className="my-4">
        The insight favoring layered architecture has ample historical precedent predating "software"
        by several centuries — probably precisely because the key insight is one of <strong>institutional
        design</strong>, transcending software entirely.
      </p>

      {/* Florentine Offsetting */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Florentine "Offsetting"</h2>

      <p className="my-4">
        One of the features of the complex web of financial and banking relations in Renaissance
        Florence was the practice of <strong>"offsetting"</strong>: noncash and nonbank payments
        between merchants by flow of credit and debit.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
        <p className="text-dark-200 italic">
          "One could draw on his credit by written order for transfer to a third party, and the
          transfer could be passed on to a fourth party and even on to others by mere book entry."
        </p>
        <p className="text-dark-400 text-sm mt-2">
          — Richard Goldthwaite, <em>The Economy of Renaissance Florence</em>
        </p>
      </div>

      {/* Payment Channels */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Medieval "Payment Channels"</h2>

      <p className="my-4">
        These "payment channels" were clearly private, and a link to the Lightning Network emerges
        when we realize this assumed a kind of <strong>going concern</strong>:
      </p>

      <div className="bg-dark-800 rounded-lg p-6 my-6">
        <p className="text-dark-200">
          It was worth costlessly keeping credit channels open and updating them rather than closing
          them at cost — which would involve settling either in bank transfer, or with true
          "final settlement" in specie (gold/silver).
        </p>
      </div>

      {/* Diversity of Financial Customs */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Diversity of Financial Layers</h2>

      <p className="my-4">
        Goldthwaite places offsetting amid a diversity of financial customs that operated in layers:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            L1
          </span>
          <div>
            <p className="font-semibold text-dark-100">Base Layer: Specie</p>
            <p className="text-sm text-dark-400 mt-1">
              Gold and silver for final settlement — the equivalent of Bitcoin's timechain.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            L2
          </span>
          <div>
            <p className="font-semibold text-dark-100">Bank Transfers</p>
            <p className="text-sm text-dark-400 mt-1">
              Local banks, pawnbrokers, and depositories serving different market niches.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            L3
          </span>
          <div>
            <p className="font-semibold text-dark-100">Offsetting / Credit Channels</p>
            <p className="text-sm text-dark-400 mt-1">
              Private credit flows between merchants — the equivalent of Lightning channels.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <span className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full text-white font-bold text-sm shrink-0">
            L4
          </span>
          <div>
            <p className="font-semibold text-dark-100">Direct Loans</p>
            <p className="text-sm text-dark-400 mt-1">
              Direct loans from private persons, recorded in notarial records.
            </p>
          </div>
        </div>
      </div>

      {/* The Lesson */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Lesson</h2>

      <Callout type="info">
        <p>
          Local banks did not have a commanding position in the local credit market. Different
          institutions served different needs, and the system evolved organically from simpler
          components — exactly as Gall's Law predicts.
        </p>
      </Callout>

      <p className="my-4">
        The banks' relative inability to attract capital led to innovation: new institutions like
        depositories emerged to fill voids in the market, signaling new directions for banking.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-orange-600/30 my-6">
        <p className="text-dark-200">
          This organic, layered evolution — where different instruments serve different purposes
          and settle to more final layers when needed — is exactly what we see emerging in Bitcoin's
          ecosystem today.
        </p>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">1.</span>
            <span>
              Renaissance Florence had <strong>layered financial systems</strong> centuries before
              software existed.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">2.</span>
            <span>
              "Offsetting" functioned like <strong>Lightning payment channels</strong> — keeping
              credit open and settling to base layer when needed.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">3.</span>
            <span>
              Different institutions served <strong>different niches</strong> rather than one
              system trying to do everything.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-400 font-bold">4.</span>
            <span>
              This <strong>organic evolution</strong> of layered systems is a timeless pattern
              of institutional design.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
