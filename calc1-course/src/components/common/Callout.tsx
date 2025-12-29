import type { ReactNode } from 'react';

type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'definition' | 'theorem' | 'example';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; icon: string; iconColor: string }> = {
  info: {
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/30',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    iconColor: 'text-blue-400',
  },
  warning: {
    bg: 'bg-yellow-500/5',
    border: 'border-yellow-500/30',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    iconColor: 'text-yellow-400',
  },
  danger: {
    bg: 'bg-red-500/5',
    border: 'border-red-500/30',
    icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    iconColor: 'text-red-400',
  },
  success: {
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/30',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    iconColor: 'text-emerald-400',
  },
  definition: {
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/30',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    iconColor: 'text-purple-400',
  },
  theorem: {
    bg: 'bg-cyan-500/5',
    border: 'border-cyan-500/30',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    iconColor: 'text-cyan-400',
  },
  example: {
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/30',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    iconColor: 'text-amber-400',
  },
};

/**
 * Callout component for highlighting important information
 * Types: info (blue), warning (yellow), danger (red), success (green)
 */
export function Callout({ type = 'info', title, children, className = '' }: CalloutProps) {
  const style = calloutStyles[type];

  return (
    <div
      className={`my-6 p-4 rounded-xl ${style.bg} border ${style.border} ${className}`}
    >
      <div className="flex items-start gap-3">
        <svg
          className={`w-5 h-5 ${style.iconColor} flex-shrink-0 mt-0.5`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={style.icon}
          />
        </svg>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${style.iconColor} mb-1`}>{title}</h4>
          )}
          <div className="text-dark-300 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
