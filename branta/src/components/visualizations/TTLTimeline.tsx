import { useState, useEffect, useMemo } from 'react';

export function TTLTimeline() {
  const [ttlSeconds, setTtlSeconds] = useState(3600); // 1 hour default
  const [registrationTime, setRegistrationTime] = useState<Date>(new Date());
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(60); // seconds per real second

  // Update current time for simulation
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => new Date(prev.getTime() + simulationSpeed * 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [isSimulating, simulationSpeed]);

  const expirationTime = useMemo(() => {
    return new Date(registrationTime.getTime() + ttlSeconds * 1000);
  }, [registrationTime, ttlSeconds]);

  const timeRemaining = useMemo(() => {
    const remaining = expirationTime.getTime() - currentTime.getTime();
    return Math.max(0, remaining);
  }, [expirationTime, currentTime]);

  const progressPercentage = useMemo(() => {
    const elapsed = currentTime.getTime() - registrationTime.getTime();
    const total = ttlSeconds * 1000;
    return Math.min(100, Math.max(0, (elapsed / total) * 100));
  }, [currentTime, registrationTime, ttlSeconds]);

  const isExpired = timeRemaining <= 0;

  const formatDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const ttlPresets = [
    { label: '15 min', value: 900 },
    { label: '1 hour', value: 3600 },
    { label: '24 hours', value: 86400 },
    { label: '7 days', value: 604800 },
    { label: '30 days', value: 2592000 },
  ];

  const handleReset = () => {
    const now = new Date();
    setRegistrationTime(now);
    setCurrentTime(now);
    setIsSimulating(false);
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">TTL Timeline Visualizer</h3>

      {/* TTL Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            Time-To-Live (TTL): {formatDuration(ttlSeconds * 1000)}
          </label>
          <input
            type="range"
            min="300"
            max="2592000"
            step="300"
            value={ttlSeconds}
            onChange={(e) => {
              setTtlSeconds(parseInt(e.target.value));
              handleReset();
            }}
            className="w-full accent-amber-500"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {ttlPresets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => {
                  setTtlSeconds(preset.value);
                  handleReset();
                }}
                className={`px-3 py-1 rounded text-sm ${
                  ttlSeconds === preset.value
                    ? 'bg-amber-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-dark-400 mb-2">
            Simulation Speed: {simulationSpeed}x
          </label>
          <input
            type="range"
            min="1"
            max="3600"
            step="1"
            value={simulationSpeed}
            onChange={(e) => setSimulationSpeed(parseInt(e.target.value))}
            className="w-full accent-amber-500"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className={`px-4 py-2 rounded font-medium ${
                isSimulating
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isSimulating ? '⏸ Pause' : '▶ Simulate Time'}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded bg-dark-700 text-dark-200 font-medium hover:bg-dark-600"
            >
              ↺ Reset
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="bg-dark-800 rounded-xl p-6">
        {/* Progress bar */}
        <div className="relative h-8 bg-dark-700 rounded-full overflow-hidden mb-4">
          <div
            className={`absolute inset-y-0 left-0 transition-all duration-1000 ${
              isExpired
                ? 'bg-red-600'
                : progressPercentage > 75
                ? 'bg-yellow-600'
                : 'bg-green-600'
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
            {isExpired ? 'EXPIRED' : `${progressPercentage.toFixed(1)}% elapsed`}
          </div>
        </div>

        {/* Timeline markers */}
        <div className="relative h-16 mb-4">
          <div className="absolute inset-x-0 top-1/2 h-1 bg-dark-600 -translate-y-1/2" />

          {/* Registration marker */}
          <div className="absolute left-0 top-0 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-green-300" />
            <span className="text-xs text-dark-400 mt-1">Registered</span>
            <span className="text-xs text-dark-500">{formatTime(registrationTime)}</span>
          </div>

          {/* Current time marker */}
          <div
            className="absolute top-0 flex flex-col items-center transition-all duration-1000"
            style={{ left: `${Math.min(95, progressPercentage)}%` }}
          >
            <div className={`w-4 h-4 rounded-full border-2 ${
              isExpired ? 'bg-red-500 border-red-300' : 'bg-amber-500 border-amber-300'
            }`} />
            <span className="text-xs text-dark-400 mt-1">Now</span>
            <span className="text-xs text-dark-500">{formatTime(currentTime)}</span>
          </div>

          {/* Expiration marker */}
          <div className="absolute right-0 top-0 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-300" />
            <span className="text-xs text-dark-400 mt-1">Expires</span>
            <span className="text-xs text-dark-500">{formatTime(expirationTime)}</span>
          </div>
        </div>

        {/* Status cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-700 rounded-lg p-4">
            <p className="text-dark-400 text-sm">Time Remaining</p>
            <p className={`text-2xl font-mono font-bold ${
              isExpired ? 'text-red-400' : timeRemaining < ttlSeconds * 250 ? 'text-yellow-400' : 'text-green-400'
            }`}>
              {isExpired ? '0s' : formatDuration(timeRemaining)}
            </p>
          </div>

          <div className="bg-dark-700 rounded-lg p-4">
            <p className="text-dark-400 text-sm">Verification Status</p>
            <p className={`text-2xl font-bold ${
              isExpired ? 'text-red-400' : 'text-green-400'
            }`}>
              {isExpired ? '❌ Invalid' : '✓ Valid'}
            </p>
          </div>

          <div className="bg-dark-700 rounded-lg p-4">
            <p className="text-dark-400 text-sm">TTL in Seconds</p>
            <p className="text-2xl font-mono font-bold text-amber-400">
              {ttlSeconds.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Use case recommendations */}
      <div className="mt-4 p-4 bg-dark-800 rounded-lg">
        <p className="text-dark-300 text-sm font-semibold mb-2">TTL Recommendations:</p>
        <ul className="text-dark-400 text-sm space-y-1">
          <li>• <strong>Lightning invoices:</strong> 15 min - 1 hour (match invoice expiry)</li>
          <li>• <strong>E-commerce checkout:</strong> 1-24 hours (session-based)</li>
          <li>• <strong>Recurring payments:</strong> 7-30 days (known merchant)</li>
          <li>• <strong>Permanent registration:</strong> No TTL (verified entities)</li>
        </ul>
      </div>
    </div>
  );
}
