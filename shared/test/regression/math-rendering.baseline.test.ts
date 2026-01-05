import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderLaTeX } from '../../gamification/latexParser';

/**
 * Baseline regression tests for LaTeX/KaTeX rendering
 * These tests ensure math rendering doesn't break or change unexpectedly
 * 
 * DOCUMENTED BASELINES (2026-01-03):
 * - KaTeX version: 0.16.0+
 * - Uses katex.renderToString for server-side rendering
 * - Handles inline math $...$ and display math $$...$$
 */

describe('Math Rendering Baselines', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Inline Math Rendering', () => {
    it('renders simple inline math', () => {
      const latex = '$x^2$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
      expect(result).not.toContain('$');
    });

    it('renders complex inline math', () => {
      const latex = '$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });

    it('renders Greek letters', () => {
      const latex = '$\\alpha \\beta \\gamma$';
      const result = renderLaTeX(latex);
      
      expect(result).toMatch(/\u03B1|\u03B2|\u03B3/); // Greek chars
    });

    it('renders fractions', () => {
      const latex = '$\\frac{a}{b}$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });

    it('renders superscripts and subscripts', () => {
      const latex = '$x_i^2$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });
  });

  describe('Display Math Rendering', () => {
    it('renders simple display math', () => {
      const latex = '$$x^2$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex-display');
      expect(result).not.toContain('$$');
    });

    it('renders complex display math', () => {
      const latex = '$$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex-display');
    });

    it('renders matrices', () => {
      const latex = '$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex-display');
    });

    it('renders multi-line equations', () => {
      const latex = '$$\\begin{align} x &= y \\\\ y &= z \\end{align}$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex-display');
    });
  });

  describe('Error Handling', () => {
    it('handles invalid LaTeX gracefully', () => {
      const latex = '$\\invalidcommand{notreal}$';
      const result = renderLaTeX(latex);
      
      // Should not crash, should return error or fallback
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('handles malformed math', () => {
      const latex = '$\\frac{a}{';
      const result = renderLaTeX(latex);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('handles empty input', () => {
      const latex = '';
      const result = renderLaTeX(latex);
      
      expect(result).toBe('');
    });
  });

  describe('Mixed Content', () => {
    it('renders mixed text and math', () => {
      const content = 'The value is $x^2$ and limit is $\\infty$';
      const result = renderLaTeX(content);
      
      expect(result).toContain('The value is');
      expect(result).toContain('katex');
      expect(result).toContain('limit');
    });

    it('preserves text formatting', () => {
      const content = 'Important: $x^2 + y^2 = z^2$';
      const result = renderLaTeX(content);
      
      expect(result).toContain('Important:');
    });

    it('handles multiple math expressions', () => {
      const content = '$a^2 + b^2 = c^2$ and $E = mc^2$';
      const result = renderLaTeX(content);
      
      const katexMatches = (result.match(/katex/g) || []).length;
      expect(katexMatches).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Advanced Math', () => {
    it('renders integrals', () => {
      const latex = '$$\\int_a^b f(x) dx$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });

    it('renders derivatives', () => {
      const latex = '$$\\frac{d}{dx}f(x)$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });

    it('renders limits', () => {
      const latex = '$$\\lim_{x\\to 0} \\frac{\\sin x}{x}$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });

    it('renders summations', () => {
      const latex = '$$\\sum_{i=1}^n i^2$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });

    it('renders products', () => {
      const latex = '$$\\prod_{i=1}^n a_i$$';
      const result = renderLaTeX(latex);
      
      expect(result).toContain('katex');
    });
  });

  describe('Special Symbols', () => {
    it('renders mathematical operators', () => {
      const latex = '$\\leq \\geq \\neq \\approx \\equiv$';
      const result = renderLaTeX(latex);
      
      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    });

    it('renders sets', () => {
      const latex = '$\\in \\notin \\subset \\subseteq \\cup \\cap \\emptyset$';
      const result = renderLaTeX(latex);
      
      expect(result).toBeDefined();
    });

    it('renders arrows', () => {
      const latex = '$\\rightarrow \\leftarrow \\leftrightarrow \\Rightarrow \\Leftrightarrow$';
      const result = renderLaTeX(latex);
      
      expect(result).toBeDefined();
    });
  });

  describe('Performance', () => {
    it('renders within reasonable time', () => {
      const latex = '$$\\int_0^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$';
      const start = performance.now();
      const result = renderLaTeX(latex);
      const end = performance.now();
      
      const duration = end - start;
      expect(result).toBeDefined();
      expect(duration).toBeLessThan(100); // Should complete in < 100ms
    });

    it('handles large expressions efficiently', () => {
      const latex = '$$\\sum_{n=1}^{100} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$';
      const start = performance.now();
      const result = renderLaTeX(latex);
      const end = performance.now();
      
      const duration = end - start;
      expect(result).toBeDefined();
      expect(duration).toBeLessThan(200); // Should complete in < 200ms
    });
  });
});