interface StreakBadgeProps {
  streak: number;
}

/**
 * Displays the user's current study streak with a fire emoji.
 * Returns null if streak is 0.
 *
 * @example
 * <StreakBadge streak={5} />
 */
export function StreakBadge({ streak }: StreakBadgeProps) {
  if (streak === 0) return null;

  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20">
      <span className="text-orange-400">🔥</span>
      <span className="text-sm font-medium text-orange-400">{streak}</span>
    </div>
  );
}
