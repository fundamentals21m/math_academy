import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathProps {
  children: string;
  display?: boolean;
  className?: string;
}

/**
 * Inline math component - renders LaTeX within text
 * Usage: <Math>x^2 + y^2 = z^2</Math>
 */
export function Math({ children, className = '' }: MathProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current && typeof children === 'string') {
      katex.render(children, ref.current, {
        throwOnError: false,
        displayMode: false,
      });
    }
  }, [children]);

  return <span ref={ref} className={`inline-block ${className}`} />;
}

/**
 * Block math component - renders LaTeX as centered display equation
 * Usage: <MathBlock>x^2 + y^2 = z^2</MathBlock>
 */
export function MathBlock({ children, className = '' }: MathProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && typeof children === 'string') {
      katex.render(children, ref.current, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [children]);

  return (
    <div
      ref={ref}
      className={`my-6 text-center text-lg overflow-x-auto ${className}`}
    />
  );
}
