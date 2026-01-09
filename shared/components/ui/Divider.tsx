import React, { forwardRef } from 'react';
import { cn } from './utils';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
  label?: string;
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    { className, orientation = 'horizontal', decorative = true, label, ...props },
    ref
  ) => {
    if (orientation === 'vertical') {
      return (
        <hr
          ref={ref}
          className={cn(
            'w-px h-full bg-[var(--color-border)]',
            decorative && 'border-0',
            className
          )}
          role={decorative ? 'none' : 'separator'}
          aria-orientation="vertical"
          {...props}
        />
      );
    }

    return (
      <div className={cn('relative', className)} role={decorative ? 'none' : 'separator'}>
        <hr
          ref={ref as React.RefObject<HTMLHRElement>}
          className={cn(
            'w-full border-t border-[var(--color-border)]',
            decorative && 'border-0'
          )}
          {...props}
        />
        {label && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-3 bg-[var(--color-bg)] text-xs text-[var(--color-text-muted)]">
              {label}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Divider.displayName = 'Divider';

export default Divider;
