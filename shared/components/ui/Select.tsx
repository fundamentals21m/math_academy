import React, { createContext, useContext, useState, forwardRef } from 'react';
import { cn } from './utils';

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = createContext<SelectContextValue | null>(null);

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export function Select({ value, defaultValue, onValueChange, className, children, ...props }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(defaultValue || '');

  const currentValue = value !== undefined ? value : selectValue;

  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setSelectValue(newValue);
    }
    onValueChange?.(newValue);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, open, setOpen }}>
      <div className={cn('relative w-full', className)} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, placeholder, children, ...props }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error('SelectTrigger must be used within Select');

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'w-full inline-flex items-center justify-between gap-2 px-3 py-2',
          'text-sm bg-[var(--color-bg)] text-[var(--color-text)]',
          'border border-[var(--color-border)] rounded-lg',
          'placeholder:text-[var(--color-text-muted)]',
          'transition-all duration-[var(--transition-fast)]',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent',
          'disabled:bg-[var(--color-bg-tertiary)] disabled:cursor-not-allowed',
          className
        )}
        onClick={() => context.setOpen(!context.open)}
        {...props}
      >
        <span className="truncate">
          {children || context.value || <span className="text-[var(--color-text-muted)]">{placeholder}</span>}
        </span>
        <svg
          className="w-4 h-4 flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }
);

SelectTrigger.displayName = 'SelectTrigger';

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

export const SelectValue = forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder, ...props }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error('SelectValue must be used within Select');

    return (
      <span ref={ref} className={cn('truncate', className)} {...props}>
        {context.value || <span className="text-[var(--color-text-muted)]">{placeholder}</span>}
      </span>
    );
  }
);

SelectValue.displayName = 'SelectValue';

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error('SelectContent must be used within Select');

    if (!context.open) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'absolute z-50 top-full mt-1 w-full',
          'bg-[var(--color-bg)] border border-[var(--color-border)]',
          'rounded-lg shadow-lg p-1',
          'animate-in fade-in-0 zoom-in-95 duration-150',
          'max-h-60 overflow-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SelectContent.displayName = 'SelectContent';

export interface SelectItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

export const SelectItem = forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error('SelectItem must be used within Select');

    const isSelected = context.value === value;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'w-full flex items-center gap-2 px-3 py-2',
          'text-sm text-[var(--color-text)] rounded-md',
          'hover:bg-[var(--color-bg-secondary)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          isSelected && 'bg-[var(--color-bg-tertiary)]',
          className
        )}
        onClick={() => context.onValueChange(value)}
        {...props}
      >
        {children}
        {isSelected && (
          <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    );
  }
);

SelectItem.displayName = 'SelectItem';

export default Select;
