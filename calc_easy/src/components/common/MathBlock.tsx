import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathProps {
  children?: string;
  latex?: string;
  display?: boolean;
  className?: string;
}

/**
 * Inline math component - renders LaTeX within text
 * Usage: <InlineMath>x^2 + y^2 = z^2</InlineMath> or <InlineMath latex="x^2" />
 */
export function InlineMath({ children, latex, className = '' }: MathProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const content = latex || children || '';

  useEffect(() => {
    if (ref.current && content) {
      katex.render(content, ref.current, {
        throwOnError: false,
        displayMode: false,
      });
    }
  }, [content]);

  return <span ref={ref} className={`inline-block ${className}`} />;
}

/**
 * Block math component - renders LaTeX as centered display equation
 * Usage: <MathBlock>x^2 + y^2 = z^2</MathBlock> or <MathBlock latex="x^2" />
 */
export function MathBlock({ children, latex, className = '' }: MathProps) {
  const ref = useRef<HTMLDivElement>(null);
  const content = latex || children || '';

  useEffect(() => {
    if (ref.current && content) {
      katex.render(content, ref.current, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [content]);

  return (
    <div
      ref={ref}
      className={`my-6 text-center text-lg overflow-x-auto ${className}`}
    />
  );
}
