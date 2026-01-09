import React, { createContext, useContext, useId } from 'react';
import { cn } from './utils';

interface RadioGroupContextValue {
  name: string;
  value: string;
  onValueChange: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  children: React.ReactNode;
}

export function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  name,
  className,
  children,
  ...props
}: RadioGroupProps) {
  const generatedName = useId();
  const groupName = name || generatedName;

  return (
    <RadioGroupContext.Provider
      value={{
        name: groupName,
        value: value || defaultValue || '',
        onValueChange: onValueChange || (() => {}),
      }}
    >
      <div className={cn('space-y-2', className)} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
}

export const RadioGroupItem = forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, label, id, ...props }, ref) => {
    const context = useContext(RadioGroupContext);
    if (!context) throw new Error('RadioGroupItem must be used within RadioGroup');

    const itemId = id || `radio-${context.name}-${value}`;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="radio"
            id={itemId}
            name={context.name}
            value={value}
            checked={context.value === value}
            onChange={() => context.onValueChange(value)}
            className={cn(
              'h-4 w-4 shrink-0 rounded-full border border-[var(--color-border)]',
              'bg-[var(--color-bg)] text-[var(--color-primary)]',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'checked:border-[var(--color-primary)]',
              className
            )}
            {...props}
          />
        </div>
        {label && (
          <label
            htmlFor={itemId}
            className="text-sm font-medium text-[var(--color-text)] cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

RadioGroupItem.displayName = 'RadioGroupItem';

export default RadioGroup;
