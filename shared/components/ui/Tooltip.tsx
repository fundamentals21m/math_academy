import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from './utils';

interface TooltipContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TooltipContext = createContext<TooltipContextValue | null>(null);

export interface TooltipProviderProps {
  children: React.ReactNode;
  delayDuration?: number;
}

export function TooltipProvider({ children, delayDuration = 200 }: TooltipProviderProps) {
  return (
    <TooltipContext.Provider value={{ open: false, set: () => {} }}>
      {children}
    </TooltipContext.Provider>
  );
}

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  content: React.ReactNode;
  delayDuration?: number;
}

export function Tooltip({ children, content, delayDuration = 200, className, ...props }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setOpen(true), delayDuration);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={cn('relative inline-block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {open && (
        <div
          className={cn(
            'absolute z-50 px-2 py-1 text-xs font-medium text-white',
            'bg-[var(--color-text)] rounded shadow-lg',
            'animate-in fade-in-0 zoom-in-95 duration-150',
            'whitespace-nowrap'
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}

export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const TooltipTrigger = forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ className, children, asChild = true, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('inline-block', className)} {...props}>
        {children}
      </div>
    );
  }
);

TooltipTrigger.displayName = 'TooltipTrigger';

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, children, side = 'top', align = 'center', ...props }, ref) => {
    const sideClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    const alignClasses = {
      start: '',
      center: '-translate-x-1/2',
      end: '-translate-x-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'z-50 px-2 py-1 text-xs font-medium text-white',
          'bg-[var(--color-text)] rounded shadow-lg',
          'animate-in fade-in-0 zoom-in-95 duration-150',
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TooltipContent.displayName = 'TooltipContent';

export default Tooltip;
