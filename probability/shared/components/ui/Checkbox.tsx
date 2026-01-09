import React, { forwardRef } from 'react';
import { cn } from './utils';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'peer h-4 w-4 shrink-0 rounded border border-[var(--color-border)]',
              'bg-[var(--color-bg)] text-[var(--color-primary)]',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)]',
              'indeterminate:bg-[var(--color-primary)] indeterminate:border-[var(--color-primary)]',
              className
            )}
            {...props}
          />
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 peer-indeterminate:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="peer-checked:block peer-indeterminate:hidden"
            />
            <path
              d="M3 7H11"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="hidden peer-indeterminate:block"
            />
          </svg>
        </div>
        {(label || description) && (
          <div className="grid gap-0.5">
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-[var(--color-text)] cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-[var(--color-text-muted)]">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
