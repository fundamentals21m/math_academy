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
  const content = math ?? children ?? '';

  useEffect(() => {
    if (ref.current && content) {
      katex.render(content, ref.current, {
        throwOnError: false,
        displayMode: false,
      });
    }
  }, [content]);

  return <span ref={ref} style={{ display: 'inline' }} className={className} />;
}

/**
 * Block/Inline math component - renders LaTeX
 * Usage:
 *   <MathBlock>x^2 + y^2 = z^2</MathBlock>  (display mode)
 *   <MathBlock math="x^2" inline />          (inline mode)
 */
export function MathBlock({ children, math, inline, display, className = '' }: MathProps) {
  const ref = useRef<HTMLElement>(null);
  const content = math ?? children ?? '';

  // inline prop takes precedence, then display prop, default to display mode
  const isInline = inline === true || (display === false);

  useEffect(() => {
    if (ref.current && content) {
      katex.render(content, ref.current, {
        throwOnError: false,
        displayMode: !isInline,
      });
    }
  }, [content, isInline]);

  if (isInline) {
    return <span ref={ref as React.RefObject<HTMLSpanElement>} style={{ display: 'inline' }} className={className} />;
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`my-6 text-center text-lg overflow-x-auto ${className}`}
    />
  );
}
