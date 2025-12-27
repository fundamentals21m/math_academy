import type { ReactNode } from 'react';

type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'important';

export type { CalloutType };

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
  important: {
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/30',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    iconColor: 'text-purple-400',
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
