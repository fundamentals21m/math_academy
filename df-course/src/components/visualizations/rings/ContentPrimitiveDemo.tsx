import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

function gcd(...nums: number[]): number {
  return nums.reduce((a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  });
}

function parseIntPoly(str: string): number[] {
  const coeffs: number[] = [];
  str = str.replace(/\s/g, '').replace(/-/g, '+-');
  const terms = str.split('+').filter(t => t);

  for (const term of terms) {
    if (term.includes('x')) {
      const [coefPart, powPart] = term.split('x');
      const coef = coefPart === '' || coefPart === '+' ? 1 : coefPart === '-' ? -1 : parseInt(coefPart);
      const pow = powPart?.includes('^') ? parseInt(powPart.slice(1)) : 1;
      while (coeffs.length <= pow) coeffs.push(0);
      coeffs[pow] += coef;
    } else {
      const val = parseInt(term);
      if (!isNaN(val)) {
        if (coeffs.length === 0) coeffs.push(0);
        coeffs[0] += val;
      }
    }
  }
  return coeffs.length ? coeffs : [0];
}

function formatPoly(p: number[]): string {
  if (p.every(c => c === 0)) return '0';
  const terms: string[] = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i];
    if (c === 0) continue;
    const absC = Math.abs(c);
    const sign = c < 0 ? '-' : (terms.length > 0 ? '+' : '');
    if (i === 0) terms.push(`${sign}${absC}`);
    else if (i === 1) terms.push(absC === 1 ? `${sign}x` : `${sign}${absC}x`);
    else terms.push(absC === 1 ? `${sign}x^${i}` : `${sign}${absC}x^${i}`);
  }
  return terms.join(' ') || '0';
}

export function ContentPrimitiveDemo() {
  const [poly1Str, setPoly1Str] = useState('6x^2 + 4x + 2');
  const [poly2Str, setPoly2Str] = useState('3x + 3');

  const poly1 = useMemo(() => parseIntPoly(poly1Str), [poly1Str]);
  const poly2 = useMemo(() => parseIntPoly(poly2Str), [poly2Str]);

  const content1 = useMemo(() => poly1.length ? gcd(...poly1.filter(c => c !== 0)) : 1, [poly1]);
  const content2 = useMemo(() => poly2.length ? gcd(...poly2.filter(c => c !== 0)) : 1, [poly2]);

  const primitive1 = useMemo(() => content1 ? poly1.map(c => c / content1) : poly1, [poly1, content1]);
  const primitive2 = useMemo(() => content2 ? poly2.map(c => c / content2) : poly2, [poly2, content2]);

  const isPrimitive1 = content1 === 1;
  const isPrimitive2 = content2 === 1;

  // Compute product
  const product = useMemo(() => {
    const result = new Array(poly1.length + poly2.length - 1).fill(0);
    for (let i = 0; i < poly1.length; i++) {
      for (let j = 0; j < poly2.length; j++) {
        result[i + j] += poly1[i] * poly2[j];
      }
    }
    return result;
  }, [poly1, poly2]);

  const contentProduct = useMemo(() => product.length ? gcd(...product.filter(c => c !== 0)) : 1, [product]);

  // Compute product of primitives
  const primProduct = useMemo(() => {
    const result = new Array(primitive1.length + primitive2.length - 1).fill(0);
    for (let i = 0; i < primitive1.length; i++) {
      for (let j = 0; j < primitive2.length; j++) {
        result[i + j] += primitive1[i] * primitive2[j];
      }
    }
    return result;
  }, [primitive1, primitive2]);

  const contentPrimProduct = useMemo(() => primProduct.length ? gcd(...primProduct.filter(c => c !== 0)) : 1, [primProduct]);

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">Content & Primitive Polynomials</h4>

      {/* Polynomial Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-dark-400 text-sm block mb-1">f(x) =</label>
          <input
            type="text"
            value={poly1Str}
            onChange={(e) => setPoly1Str(e.target.value)}
            className="w-full bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
        <div>
          <label className="text-dark-400 text-sm block mb-1">g(x) =</label>
          <input
            type="text"
            value={poly2Str}
            onChange={(e) => setPoly2Str(e.target.value)}
            className="w-full bg-dark-700 text-dark-100 px-3 py-2 rounded border border-dark-600 font-mono"
          />
        </div>
      </div>

      {/* Content Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-dark-700 p-4 rounded-lg"
        >
          <div className="text-blue-400 font-medium mb-2">f(x) = {formatPoly(poly1)}</div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-dark-500">Content c(f) = </span>
              <span className="text-yellow-400 font-mono">{content1}</span>
            </div>
            <div>
              <span className="text-dark-500">Primitive part f* = </span>
              <span className="text-green-400 font-mono">{formatPoly(primitive1)}</span>
            </div>
            <div className={`mt-2 px-2 py-1 rounded text-xs inline-block ${
              isPrimitive1 ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
            }`}>
              {isPrimitive1 ? 'Primitive (c(f) = 1)' : 'Not primitive'}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-dark-700 p-4 rounded-lg"
        >
          <div className="text-purple-400 font-medium mb-2">g(x) = {formatPoly(poly2)}</div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-dark-500">Content c(g) = </span>
              <span className="text-yellow-400 font-mono">{content2}</span>
            </div>
            <div>
              <span className="text-dark-500">Primitive part g* = </span>
              <span className="text-green-400 font-mono">{formatPoly(primitive2)}</span>
            </div>
            <div className={`mt-2 px-2 py-1 rounded text-xs inline-block ${
              isPrimitive2 ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
            }`}>
              {isPrimitive2 ? 'Primitive (c(g) = 1)' : 'Not primitive'}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gauss's Lemma Verification */}
      <div className="bg-dark-700 p-4 rounded-lg mb-6">
        <h5 className="text-dark-200 font-medium mb-3">Gauss's Lemma Verification</h5>

        <div className="space-y-4">
          <div>
            <div className="text-dark-400 text-sm mb-1">Product f · g:</div>
            <div className="font-mono text-dark-200">{formatPoly(product)}</div>
            <div className="text-dark-500 text-sm">c(fg) = {contentProduct}</div>
          </div>

          <div>
            <div className="text-dark-400 text-sm mb-1">Product of primitives f* · g*:</div>
            <div className="font-mono text-dark-200">{formatPoly(primProduct)}</div>
            <div className="text-dark-500 text-sm">c(f*g*) = {contentPrimProduct}</div>
          </div>

          <div className="bg-dark-800 p-3 rounded">
            <div className="text-dark-400 text-sm mb-2">Gauss's Lemma states: c(fg) = c(f) · c(g)</div>
            <div className="font-mono text-center">
              <span className="text-yellow-400">{contentProduct}</span>
              <span className="text-dark-500 mx-2">=</span>
              <span className="text-yellow-400">{content1}</span>
              <span className="text-dark-500 mx-1">·</span>
              <span className="text-yellow-400">{content2}</span>
              <span className="text-dark-500 mx-2">=</span>
              <span className="text-yellow-400">{content1 * content2}</span>
              <span className={contentProduct === content1 * content2 ? 'text-green-400' : 'text-red-400'}>
                {contentProduct === content1 * content2 ? ' ✓' : ' ✗'}
              </span>
            </div>
          </div>

          <div className={`p-3 rounded ${contentPrimProduct === 1 ? 'bg-green-900/20' : 'bg-yellow-900/20'}`}>
            <div className="text-sm">
              <span className="text-dark-400">Corollary: </span>
              <span className={contentPrimProduct === 1 ? 'text-green-400' : 'text-yellow-400'}>
                Product of primitives is primitive: c(f*g*) = {contentPrimProduct}
                {contentPrimProduct === 1 ? ' ✓' : ' (should be 1)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Application */}
      <div className="p-4 bg-dark-700/50 rounded-lg">
        <h5 className="text-dark-200 font-medium mb-2">Key Application</h5>
        <div className="text-dark-400 text-sm">
          <p className="mb-2">
            A primitive polynomial f ∈ Z[x] is irreducible in Z[x] if and only if
            it is irreducible in Q[x].
          </p>
          <p className="text-green-400">
            This lets us test irreducibility over Q using integer methods!
          </p>
        </div>
      </div>
    </div>
  );
}
