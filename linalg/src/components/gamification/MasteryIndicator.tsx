import type { MasteryLevel } from '@magic-internet-math/shared';
import { getMasteryInfo } from '@magic-internet-math/shared';

interface MasteryIndicatorProps {
  level: MasteryLevel;
  showLabel?: boolean;
}

export function MasteryIndicator({ level, showLabel = false }: MasteryIndicatorProps) {
  const { label, color, symbol } = getMasteryInfo(level);

  // Don't show anything for 'none' level
  if (level === 'none' || !symbol) {
    return null;
  }

  return (
    <div className={`flex items-center gap-1.5 ${color}`}>
      <span className="text-base font-bold">{symbol}</span>
      {showLabel && <span className="text-xs">{label}</span>}
    </div>
  );
}
