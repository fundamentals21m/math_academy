import type { MasteryLevel } from '@shared/gamification/types';
import { getMasteryInfo } from '@shared/gamification';

interface MasteryIndicatorProps {
  level: MasteryLevel;
  showLabel?: boolean;
}

/**
 * Displays a mastery level indicator with color-coded symbol.
 *
 * Mastery levels:
 * - none: Gray circle
 * - learning: Blue circle
 * - familiar: Yellow half-circle
 * - mastered: Green checkmark
 *
 * @example
 * <MasteryIndicator level="mastered" />
 * <MasteryIndicator level="familiar" showLabel />
 */
export function MasteryIndicator({ level, showLabel = false }: MasteryIndicatorProps) {
  const { label, color, symbol } = getMasteryInfo(level);

  return (
    <div className={`flex items-center gap-1.5 ${color}`}>
      <span className="text-sm">{symbol}</span>
      {showLabel && <span className="text-xs">{label}</span>}
    </div>
  );
}
