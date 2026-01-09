import React, { forwardRef } from 'react';
import { cn } from './utils';

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: 'default' | 'outline';
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      pressed,
      defaultPressed = false,
      onPressedChange,
      variant = 'default',
      disabled,
      ...props
    },
    ref
  ) => {
    const isControlled = pressed !== undefined;
    const [internalPressed, setInternalPressed] = React.useState(defaultPressed);
    const isPressed = isControlled ? pressed : internalPressed;

    const handleClick = () => {
      if (isControlled) {
        onPressedChange?.(!isPressed);
      } else {
        setInternalPressed(!isPressed);
        onPressedChange?.(!isPressed);
      }
    };

    const variantClasses = {
      default: isPressed
        ? 'bg-[var(--color-primary)] text-white'
        : 'bg-[var(--color-bg-secondary)] text-[var(--color-text)] hover:bg-[var(--color-bg-tertiary)]',
      outline: isPressed
        ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
        : 'border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]',
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-3 py-2',
          'text-sm font-medium rounded-lg',
          'transition-all duration-[var(--transition-fast)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
