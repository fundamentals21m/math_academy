import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section120() {
  return (
    <LessonLayout sectionId={120}>
      <Proposition
        title="Proposition V.1"
        statement="If any number of magnitudes are each the same multiple of the same number of other magnitudes, then the sum is the same multiple of the sum."
      >
        <h3 className="text-lg font-semibold mt-4">Statement</h3>
        <p className="text-dark-300 mt-2">
          If there are any number of magnitudes A₁, A₂, ..., Aₙ which are respectively equimultiples
          of B₁, B₂, ..., Bₙ (each being m times), then (A₁ + A₂ + ... + Aₙ) is m times
          (B₁ + B₂ + ... + Bₙ).
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* First row: A₁ = 3B₁ */}
          <text x="10" y="25" fill="#f59e0b" fontSize="12">A₁ = 3×B₁:</text>
          <rect x="80" y="10" width="40" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="120" y="10" width="40" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="160" y="10" width="40" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <text x="130" y="24" fill="white" fontSize="10" textAnchor="middle">B₁</text>

          {/* Second row: A₂ = 3B₂ */}
          <text x="10" y="60" fill="#f59e0b" fontSize="12">A₂ = 3×B₂:</text>
          <rect x="80" y="45" width="50" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="130" y="45" width="50" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="180" y="45" width="50" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <text x="155" y="59" fill="white" fontSize="10" textAnchor="middle">B₂</text>

          {/* Sum row */}
          <line x1="60" y1="80" x2="260" y2="80" stroke="#666" strokeDasharray="4" />
          <text x="10" y="110" fill="#f59e0b" fontSize="12">Sum:</text>

          {/* A₁ + A₂ */}
          <rect x="80" y="95" width="120" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="200" y="95" width="150" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <text x="200" y="109" fill="white" fontSize="10" textAnchor="middle">A₁ + A₂</text>

          {/* Equals 3(B₁ + B₂) */}
          <text x="10" y="150" fill="#f59e0b" fontSize="12">= 3×(B₁+B₂):</text>
          <rect x="80" y="135" width="90" height="20" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <rect x="170" y="135" width="90" height="20" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <rect x="260" y="135" width="90" height="20" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <text x="215" y="149" fill="#f59e0b" fontSize="10" textAnchor="middle">B₁+B₂</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A₁ = mB₁ and A₂ = mB₂ (and similarly for any number of magnitudes).
          </p>
          <p className="text-dark-300 mt-2">
            Since A₁ contains B₁ exactly m times, and A₂ contains B₂ exactly m times, when we add
            them together, A₁ + A₂ contains B₁ + B₂ exactly m times.
          </p>
          <p className="text-dark-300 mt-2">
            This is because we can "count" the copies: the m copies of B₁ plus the m copies of B₂
            give us m copies of (B₁ + B₂).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Notation</h3>
        <p className="text-dark-300 mt-2">
          If A₁ = mB₁, A₂ = mB₂, ..., Aₙ = mBₙ, then:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono">
            A₁ + A₂ + ... + Aₙ = m(B₁ + B₂ + ... + Bₙ)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition establishes that equimultiples distribute over addition. It's a
          fundamental property needed to prove that proportions are preserved under various
          operations. The proof seems obvious in modern algebra (m·b₁ + m·b₂ = m(b₁ + b₂)), but
          Euclid proves it geometrically for arbitrary magnitudes.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
