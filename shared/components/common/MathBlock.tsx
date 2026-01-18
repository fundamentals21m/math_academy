import { useEffect, useRef, Children } from 'react';
import katex from 'katex';

interface MathProps {
  children?: React.ReactNode;
  math?: string;  // Alternative to children
  display?: boolean;
  inline?: boolean;  // Convenience prop (opposite of display)
  className?: string;
}

// Convert React children to a string (handles arrays from JSX expressions like {'>'})
function childrenToString(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (!children) return '';

  // Handle arrays (from JSX expressions like <InlineMath>p {'>'} 1</InlineMath>)
  if (Array.isArray(children)) {
    return children.map(childrenToString).join('');
  }

  // Handle React.Children
  const parts: string[] = [];
  Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      parts.push(String(child));
    }
  });
  return parts.join('');
}

/**
 * Inline math component - renders LaTeX within text
 * @example <InlineMath>x^2 + y^2 = z^2</InlineMath>
 */
export function InlineMath({ children, math, className = '' }: MathProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const content = math ?? childrenToString(children);

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

  return <span ref={ref} style={{ display: 'inline' }} className={className} />;
}

/**
 * Block/Inline math component - renders LaTeX
 * @example
 *   <MathBlock>x^2 + y^2 = z^2</MathBlock>  // display mode
 *   <MathBlock math="x^2" inline />          // inline mode
 */
export function MathBlock({ children, math, inline, display, className = '' }: MathProps) {
  const ref = useRef<HTMLElement>(null);
  const content = math ?? childrenToString(children);

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
    return <span ref={ref as React.RefObject<HTMLSpanElement>} style={{ display: 'inline' }} className={className} />;
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`my-6 text-center text-lg overflow-x-auto ${className}`}
    />
  );
}
