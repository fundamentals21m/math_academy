import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathProps {
  children?: string;
  math?: string;  // Alternative to children
  display?: boolean;
  inline?: boolean;  // Convenience prop (opposite of display)
  className?: string;
}

/**
 * Inline math component - renders LaTeX within text
 * Usage: <InlineMath>x^2 + y^2 = z^2</InlineMath>
 */
export function InlineMath({ children, math, className = '' }: MathProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const rawContent = math ?? children ?? '';
  const content = typeof rawContent === 'string' ? rawContent : String(rawContent);

  useEffect(() => {
    if (ref.current && content) {
      try {
        katex.render(content, ref.current, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (e) {
        console.error('KaTeX render error:', e);
      }
    }
  }, [content]);

  return <span ref={ref} className={`inline-block ${className}`} />;
}

/**
 * Block/Inline math component - renders LaTeX
 * Usage:
 *   <MathBlock>x^2 + y^2 = z^2</MathBlock>  (display mode)
 *   <MathBlock math="x^2" inline />          (inline mode)
 */
export function MathBlock({ children, math, inline, display, className = '' }: MathProps) {
  const ref = useRef<HTMLElement>(null);
  const rawContent = math ?? children ?? '';
  const content = typeof rawContent === 'string' ? rawContent : String(rawContent);

  // inline prop takes precedence, then display prop, default to display mode
  const isInline = inline === true || (display === false);

  useEffect(() => {
    if (ref.current && content) {
      try {
        katex.render(content, ref.current, {
          throwOnError: false,
          displayMode: !isInline,
        });
      } catch (e) {
        console.error('KaTeX render error:', e);
      }
    }
  }, [content, isInline]);

  if (isInline) {
    return <span ref={ref as React.RefObject<HTMLSpanElement>} className={`inline-block ${className}`} />;
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`my-6 text-center text-lg overflow-x-auto ${className}`}
    />
  );
}
