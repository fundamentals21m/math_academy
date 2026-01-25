/**
 * Interactive Group Homomorphism Diagram
 * Visualizes homomorphisms, kernels, and images
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface GroupDef {
  name: string;
  elements: string[];
  operation: (a: string, b: string) => string;
}

// Predefined groups
const Z6: GroupDef = {
  name: 'ℤ/6ℤ',
  elements: ['0', '1', '2', '3', '4', '5'],
  operation: (a, b) => String((parseInt(a) + parseInt(b)) % 6),
};

const Z2: GroupDef = {
  name: 'ℤ/2ℤ',
  elements: ['0', '1'],
  operation: (a, b) => String((parseInt(a) + parseInt(b)) % 2),
};

const Z3: GroupDef = {
  name: 'ℤ/3ℤ',
  elements: ['0', '1', '2'],
  operation: (a, b) => String((parseInt(a) + parseInt(b)) % 3),
};

// Homomorphism examples
const HOMOMORPHISMS = {
  'Z6_to_Z2': {
    domain: Z6,
    codomain: Z2,
    name: 'φ: ℤ/6ℤ → ℤ/2ℤ',
    description: 'φ(n) = n mod 2',
    map: (x: string) => String(parseInt(x) % 2),
  },
  'Z6_to_Z3': {
    domain: Z6,
    codomain: Z3,
    name: 'φ: ℤ/6ℤ → ℤ/3ℤ',
    description: 'φ(n) = n mod 3',
    map: (x: string) => String(parseInt(x) % 3),
  },
  'Z6_to_Z6': {
    domain: Z6,
    codomain: Z6,
    name: 'φ: ℤ/6ℤ → ℤ/6ℤ',
    description: 'φ(n) = 2n mod 6',
    map: (x: string) => String((2 * parseInt(x)) % 6),
  },
};

export function HomomorphismDiagram() {
  const [selectedHom, setSelectedHom] = useState<keyof typeof HOMOMORPHISMS>('Z6_to_Z2');
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null);
  const [showVerification, setShowVerification] = useState(false);

  const hom = HOMOMORPHISMS[selectedHom];

  // Compute kernel and image
  const { kernel, image, isInjective, isSurjective } = useMemo(() => {
    const kern: string[] = [];
    const img = new Set<string>();

    hom.domain.elements.forEach(x => {
      const fx = hom.map(x);
      img.add(fx);
      if (fx === hom.codomain.elements[0]) { // identity in codomain
        kern.push(x);
      }
    });

    return {
      kernel: kern,
      image: Array.from(img),
      isInjective: kern.length === 1,
      isSurjective: img.size === hom.codomain.elements.length,
    };
  }, [hom]);

  // Verify homomorphism property for selected element
  const verification = useMemo(() => {
    if (!highlightedElement) return null;
    const a = highlightedElement;
    const results: { b: string; left: string; right: string; equal: boolean }[] = [];

    hom.domain.elements.forEach(b => {
      const ab = hom.domain.operation(a, b);
      const left = hom.map(ab); // φ(ab)
      const right = hom.codomain.operation(hom.map(a), hom.map(b)); // φ(a)φ(b)
      results.push({ b, left, right, equal: left === right });
    });

    return results;
  }, [highlightedElement, hom]);

  // SVG layout
  const width = 500;
  const height = 300;
  const domainX = 100;
  const codomainX = 400;

  const getElementY = (idx: number, total: number) => {
    const spacing = 200 / (total + 1);
    return 50 + (idx + 1) * spacing;
  };

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Group Homomorphism Visualizer
      </h4>

      {/* Homomorphism selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Homomorphism:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(HOMOMORPHISMS).map(([key, h]) => (
            <button
              key={key}
              onClick={() => { setSelectedHom(key as keyof typeof HOMOMORPHISMS); setHighlightedElement(null); }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedHom === key
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                  : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>
        <p className="text-sm text-dark-400 mt-2">{hom.description}</p>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowVerification(!showVerification)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showVerification
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
          }`}
        >
          Verify Property
        </button>
      </div>

      {/* Diagram */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full bg-dark-950 rounded-lg mb-4">
        {/* Domain label */}
        <text x={domainX} y={30} textAnchor="middle" fill="#10b981" fontSize={14} fontWeight="bold">
          {hom.domain.name}
        </text>

        {/* Codomain label */}
        <text x={codomainX} y={30} textAnchor="middle" fill="#3b82f6" fontSize={14} fontWeight="bold">
          {hom.codomain.name}
        </text>

        {/* Arrow label */}
        <text x={width / 2} y={25} textAnchor="middle" fill="#6366f1" fontSize={12}>
          φ
        </text>
        <path
          d={`M ${domainX + 50} 20 L ${codomainX - 50} 20`}
          stroke="#6366f1"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
          </marker>
        </defs>

        {/* Mapping arrows */}
        {hom.domain.elements.map((x, i) => {
          const y1 = getElementY(i, hom.domain.elements.length);
          const fx = hom.map(x);
          const j = hom.codomain.elements.indexOf(fx);
          const y2 = getElementY(j, hom.codomain.elements.length);
          const isHighlighted = highlightedElement === x;
          const isInKernel = kernel.includes(x);

          return (
            <motion.line
              key={x}
              x1={domainX + 25}
              y1={y1}
              x2={codomainX - 25}
              y2={y2}
              stroke={isHighlighted ? '#fbbf24' : isInKernel ? '#f87171' : '#4b5563'}
              strokeWidth={isHighlighted ? 3 : 1}
              opacity={highlightedElement && !isHighlighted ? 0.3 : 1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          );
        })}

        {/* Domain elements */}
        {hom.domain.elements.map((x, i) => {
          const y = getElementY(i, hom.domain.elements.length);
          const isHighlighted = highlightedElement === x;
          const isInKernel = kernel.includes(x);

          return (
            <g key={`domain-${x}`}>
              <motion.circle
                cx={domainX}
                cy={y}
                r={18}
                fill={isHighlighted ? '#fbbf2440' : isInKernel ? '#f8717140' : '#10b98140'}
                stroke={isHighlighted ? '#fbbf24' : isInKernel ? '#f87171' : '#10b981'}
                strokeWidth={2}
                whileHover={{ scale: 1.1 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setHighlightedElement(highlightedElement === x ? null : x)}
              />
              <text
                x={domainX}
                y={y + 5}
                textAnchor="middle"
                fill={isHighlighted ? '#fbbf24' : '#10b981'}
                fontSize={14}
                fontWeight="bold"
                style={{ pointerEvents: 'none' }}
              >
                {x}
              </text>
            </g>
          );
        })}

        {/* Codomain elements */}
        {hom.codomain.elements.map((y, j) => {
          const yPos = getElementY(j, hom.codomain.elements.length);
          const isInImage = image.includes(y);
          const isMappedTo = highlightedElement && hom.map(highlightedElement) === y;

          return (
            <g key={`codomain-${y}`}>
              <motion.circle
                cx={codomainX}
                cy={yPos}
                r={18}
                fill={isMappedTo ? '#fbbf2440' : isInImage ? '#3b82f640' : '#37415140'}
                stroke={isMappedTo ? '#fbbf24' : isInImage ? '#3b82f6' : '#374151'}
                strokeWidth={2}
              />
              <text
                x={codomainX}
                y={yPos + 5}
                textAnchor="middle"
                fill={isMappedTo ? '#fbbf24' : isInImage ? '#3b82f6' : '#6b7280'}
                fontSize={14}
                fontWeight="bold"
              >
                {y}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Kernel and Image info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
          <h5 className="text-sm font-semibold text-red-400 mb-1">Kernel</h5>
          <p className="font-mono text-dark-200">
            ker(φ) = {'{'}{ kernel.join(', ') }{'}'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            |ker(φ)| = {kernel.length}
          </p>
        </div>
        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
          <h5 className="text-sm font-semibold text-blue-400 mb-1">Image</h5>
          <p className="font-mono text-dark-200">
            im(φ) = {'{'}{ image.join(', ') }{'}'}
          </p>
          <p className="text-xs text-dark-400 mt-1">
            |im(φ)| = {image.length}
          </p>
        </div>
      </div>

      {/* Properties */}
      <div className="flex gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-sm ${isInjective ? 'bg-emerald-500/20 text-emerald-400' : 'bg-dark-800 text-dark-400'}`}>
          {isInjective ? '✓ Injective' : '✗ Not injective'}
        </span>
        <span className={`px-3 py-1 rounded-full text-sm ${isSurjective ? 'bg-emerald-500/20 text-emerald-400' : 'bg-dark-800 text-dark-400'}`}>
          {isSurjective ? '✓ Surjective' : '✗ Not surjective'}
        </span>
        <span className={`px-3 py-1 rounded-full text-sm ${isInjective && isSurjective ? 'bg-amber-500/20 text-amber-400' : 'bg-dark-800 text-dark-400'}`}>
          {isInjective && isSurjective ? '✓ Isomorphism' : '✗ Not isomorphism'}
        </span>
      </div>

      {/* Verification table */}
      {showVerification && highlightedElement && verification && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30"
        >
          <h5 className="text-sm font-semibold text-amber-400 mb-2">
            Verifying φ({highlightedElement} + b) = φ({highlightedElement}) + φ(b):
          </h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-dark-400">
                  <th className="px-2 py-1 text-left">b</th>
                  <th className="px-2 py-1 text-left">φ({highlightedElement}+b)</th>
                  <th className="px-2 py-1 text-left">φ({highlightedElement})+φ(b)</th>
                  <th className="px-2 py-1 text-left">Equal?</th>
                </tr>
              </thead>
              <tbody>
                {verification.map(row => (
                  <tr key={row.b} className="font-mono">
                    <td className="px-2 py-1 text-dark-200">{row.b}</td>
                    <td className="px-2 py-1 text-violet-400">{row.left}</td>
                    <td className="px-2 py-1 text-blue-400">{row.right}</td>
                    <td className="px-2 py-1">
                      {row.equal ? <span className="text-emerald-400">✓</span> : <span className="text-red-400">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* First Isomorphism Theorem */}
      <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/30 mb-4">
        <p className="text-sm text-violet-200">
          <strong>First Isomorphism Theorem:</strong> {hom.domain.name}/ker(φ) ≅ im(φ)
        </p>
        <p className="text-xs text-dark-400 mt-1">
          |{hom.domain.name}| / |ker(φ)| = {hom.domain.elements.length} / {kernel.length} = {hom.domain.elements.length / kernel.length} = |im(φ)|
        </p>
      </div>

      {/* Key insight */}
      <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Homomorphism:</strong> A function φ: G → H is a homomorphism if φ(ab) = φ(a)φ(b) for all a, b ∈ G.
          Click elements in the domain to verify this property and see where they map.
        </p>
      </div>
    </div>
  );
}
